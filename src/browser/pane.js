// 🌐 Trình duyệt ngay cạnh khung Chat (giống Claude Desktop): trang web chạy trong app, người dùng thấy AI thao tác
// từng bước (con trỏ SIMI di chuyển, vùng bấm sáng lên) và tự bấm / đăng nhập bất cứ lúc nào.
// AI điều khiển qua MCP "vp_browser" (src/browser/mcp.js) → HTTP cục bộ có token → lớp này (CDP không cần: dùng thẳng webContents).
// Phiên đăng nhập lưu riêng (partition persist:vp-browser), không đụng trình duyệt của người dùng.
const fs = require('fs');
const path = require('path');
const http = require('http');
const crypto = require('crypto');
const { WebContentsView, session, shell, app } = require('electron');

const PARTITION = 'persist:vp-browser';
const HOME = 'https://www.google.com/';
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// ---------- mã chạy trong trang ----------
// liệt kê phần tử bấm / gõ được (gán mã eN bền giữa các lần), tiêu đề, đoạn chữ chính → văn bản gọn cho AI
const SNAPSHOT = String.raw`(function (maxChars, full) {
  const seen = window.__vpRefSeq || 0; let seq = seen;
  const vis = (el) => { const r = el.getBoundingClientRect(); if (r.width < 2 || r.height < 2) return false; const s = getComputedStyle(el); return s.visibility !== 'hidden' && s.display !== 'none' && Number(s.opacity) > 0.05; };
  const clean = (t, n) => String(t || '').replace(/\s+/g, ' ').trim().slice(0, n);
  const label = (el) => clean(el.getAttribute('aria-label') || (el.labels && el.labels[0] && el.labels[0].innerText) || (el.tagName === 'SELECT' ? '' : el.innerText) || (el.tagName === 'SELECT' ? '' : el.value) || el.getAttribute('placeholder') || el.getAttribute('title') || el.getAttribute('alt') || (el.querySelector && el.querySelector('img[alt]') && el.querySelector('img[alt]').alt) || el.name || '', 90);
  const SEL = 'a[href],button,input:not([type=hidden]),textarea,select,summary,[role=button],[role=link],[role=tab],[role=menuitem],[role=option],[role=checkbox],[role=radio],[role=switch],[role=combobox],[role=textbox],[role=searchbox],[contenteditable=""],[contenteditable=true],[onclick],[tabindex]:not([tabindex="-1"])';
  const out = []; const vh = innerHeight;
  const els = [...document.querySelectorAll(SEL)].filter(vis);
  // trang kiểu Shopee / app web: ô sản phẩm, thẻ… là div có con trỏ bàn tay → cũng đưa vào (chỉ lớp ngoài cùng)
  const has = new Set(els);
  const pointer = (e) => e && e.nodeType === 1 && getComputedStyle(e).cursor === 'pointer';
  for (const el of [...document.querySelectorAll('div,span,li,img,label,svg')].slice(0, 4000)) {
    if (els.length >= (full ? 600 : 300)) break;
    if (has.has(el) || !pointer(el) || pointer(el.parentElement) || el.closest(SEL) || el.querySelector(SEL) || !vis(el)) continue;
    els.push(el); has.add(el);
  }
  for (const el of els.slice(0, full ? 600 : 300)) {
    let ref = el.getAttribute('data-vp-ref'); if (!ref) { ref = 'e' + (++seq); el.setAttribute('data-vp-ref', ref); }
    const tag = el.tagName.toLowerCase(); const type = (el.getAttribute('type') || '').toLowerCase();
    const role = el.getAttribute('role') || (tag === 'a' ? 'link' : tag === 'select' ? 'select' : tag === 'textarea' || (tag === 'input' && !['checkbox', 'radio', 'button', 'submit', 'reset', 'file', 'range', 'color'].includes(type)) || el.isContentEditable ? 'textbox' : tag === 'input' ? type : tag);
    let line = '[' + ref + '] ' + (/^(div|span|li|img|label|svg|td|tr|p|section|article)$/.test(role) ? 'clickable' : role) + ' "' + label(el) + '"';
    const ph = el.getAttribute('placeholder'); if (ph && !line.includes(clean(ph, 90))) line += ' (gợi ý: ' + clean(ph, 50) + ')';
    if (role === 'textbox' && el.value) line += ' = "' + clean(el.value, 60) + '"';
    if (type === 'checkbox' || type === 'radio' || role === 'checkbox' || role === 'switch') line += el.checked || el.getAttribute('aria-checked') === 'true' ? ' ✓' : ' ☐';
    if (tag === 'select') line += ' = "' + clean(el.options[el.selectedIndex] && el.options[el.selectedIndex].text, 40) + '" (' + [...el.options].slice(0, 8).map((o) => clean(o.text, 25)).join(' | ') + ')';
    if (tag === 'a') { const h = el.getAttribute('href') || ''; if (h && !h.startsWith('javascript')) line += ' → ' + clean(h, 70); }
    if (el.disabled) line += ' (khoá)';
    const r = el.getBoundingClientRect(); if (r.bottom < 0 || r.top > vh) line += ' ·ngoài màn hình';
    out.push(line);
  }
  window.__vpRefSeq = seq;
  const heads = [...document.querySelectorAll('h1,h2,h3')].filter(vis).slice(0, 25).map((h) => h.tagName + ': ' + clean(h.innerText, 100));
  const main = document.querySelector('main,article,[role=main]') || document.body;
  const text = clean(main ? main.innerText : '', full ? 6000 : 1500);
  const dlg = [...document.querySelectorAll('[role=dialog],dialog[open],[aria-modal=true]')].filter(vis).map((d) => 'Hộp thoại đang mở: ' + clean(d.innerText, 200));
  let s = 'Trang: ' + document.title + '\nURL: ' + location.href + '\nCuộn: ' + Math.round(scrollY) + '/' + Math.max(0, document.documentElement.scrollHeight - vh) + 'px\n'
    + (dlg.length ? dlg.join('\n') + '\n' : '') + (heads.length ? '\nTiêu đề:\n' + heads.join('\n') + '\n' : '')
    + '\nPhần tử thao tác được (dùng mã [eN] cho browser_act):\n' + out.join('\n') + '\n\nNội dung chính (rút gọn):\n' + text;
  return s.length > maxChars ? s.slice(0, maxChars) + '\n…(đã cắt – gọi browser_read để đọc hết chữ)' : s;
})`;

// tìm phần tử theo mã, cuộn vào giữa màn hình, trả toạ độ tâm (và có bị che không)
const LOCATE = String.raw`(function (ref) {
  const el = document.querySelector('[data-vp-ref="' + ref + '"]');
  if (!el) return { error: 'Không thấy phần tử ' + ref + ' – trang đã đổi, gọi browser_snapshot lấy mã mới' };
  el.scrollIntoView({ block: 'center', inline: 'center', behavior: 'instant' });
  const r = el.getBoundingClientRect();
  const x = Math.round(r.left + Math.min(r.width / 2, Math.max(4, r.width - 4))), y = Math.round(r.top + r.height / 2);
  const top = document.elementFromPoint(x, y);
  return { x, y, w: r.width, h: r.height, tag: el.tagName.toLowerCase(), covered: !!(top && top !== el && !el.contains(top) && !top.contains(el)), editable: el.isContentEditable || /^(input|textarea)$/i.test(el.tagName) };
})`;

// con trỏ "SIMI" + vòng sáng khi bấm – người dùng nhìn theo được AI đang làm gì
const CURSOR = String.raw`(function (x, y, kind, label) {
  let c = document.getElementById('__vp_cursor');
  if (!c) {
    c = document.createElement('div'); c.id = '__vp_cursor';
    c.style.cssText = 'position:fixed;left:0;top:0;z-index:2147483647;pointer-events:none;transition:transform .32s cubic-bezier(.3,.7,.3,1);will-change:transform';
    c.innerHTML = '<svg width="26" height="26" viewBox="0 0 24 24" style="filter:drop-shadow(0 2px 3px rgba(0,0,0,.35))"><path d="M3 2l16 9-7 1.6L9 20z" fill="#0a78f0" stroke="#fff" stroke-width="1.6" stroke-linejoin="round"/></svg><span style="position:absolute;left:18px;top:20px;background:#0a78f0;color:#fff;font:700 11px/1 system-ui,sans-serif;padding:3px 7px;border-radius:999px;white-space:nowrap;box-shadow:0 2px 6px rgba(0,0,0,.25)">SIMI</span>';
    document.documentElement.appendChild(c);
    c.style.transform = 'translate(' + (innerWidth / 2) + 'px,' + (innerHeight / 2) + 'px)';
  }
  requestAnimationFrame(() => { c.style.transform = 'translate(' + (x - 3) + 'px,' + (y - 2) + 'px)'; });
  if (label) c.querySelector('span').textContent = label;
  if (kind === 'click') {
    const r = document.createElement('div');
    r.style.cssText = 'position:fixed;z-index:2147483646;pointer-events:none;left:' + (x - 18) + 'px;top:' + (y - 18) + 'px;width:36px;height:36px;border-radius:50%;border:3px solid #0a78f0;background:rgba(10,120,240,.15);transition:transform .45s ease-out,opacity .45s ease-out;transform:scale(.4);opacity:1';
    document.documentElement.appendChild(r);
    setTimeout(() => { r.style.transform = 'scale(1.6)'; r.style.opacity = '0'; }, 330);
    setTimeout(() => r.remove(), 900);
  }
  return true;
})`;

const SET_VALUE = String.raw`(function (ref, value) {
  const el = document.querySelector('[data-vp-ref="' + ref + '"]');
  if (!el) return 'Không thấy ' + ref;
  if (el.tagName === 'SELECT') {
    const v = String(value).toLowerCase();
    const o = [...el.options].find((o) => o.value.toLowerCase() === v || o.text.trim().toLowerCase() === v) || [...el.options].find((o) => o.text.toLowerCase().includes(v));
    if (!o) return 'Không có lựa chọn "' + value + '" (có: ' + [...el.options].map((o) => o.text.trim()).slice(0, 12).join(' | ') + ')';
    el.value = o.value; el.dispatchEvent(new Event('input', { bubbles: true })); el.dispatchEvent(new Event('change', { bubbles: true }));
    return 'ok';
  }
  return 'Phần tử ' + ref + ' không phải ô chọn';
})`;

const SELECT_ALL = String.raw`(function (ref) {
  const el = document.querySelector('[data-vp-ref="' + ref + '"]'); if (!el) return false;
  el.focus();
  if (typeof el.select === 'function' && /^(INPUT|TEXTAREA)$/.test(el.tagName)) el.select();
  else { const r = document.createRange(); r.selectNodeContents(el); const s = getSelection(); s.removeAllRanges(); s.addRange(r); }
  return true;
})`;

const READ = String.raw`(function (max) { const m = document.querySelector('main,article,[role=main]') || document.body; return ('Trang: ' + document.title + '\nURL: ' + location.href + '\n\n' + (m ? m.innerText : '')).slice(0, max); })`;

const KEY = { arrowup: 'Up', arrowdown: 'Down', arrowleft: 'Left', arrowright: 'Right', esc: 'Escape', return: 'Enter', del: 'Delete', space: 'Space', ' ': 'Space' };
function parseKey(s) {
  const parts = String(s || '').split('+').map((p) => p.trim()).filter(Boolean);
  const mods = []; let key = '';
  for (const p of parts) {
    const l = p.toLowerCase();
    if (['ctrl', 'control'].includes(l)) mods.push('control'); else if (['cmd', 'meta', 'command'].includes(l)) mods.push('meta');
    else if (l === 'alt' || l === 'option') mods.push('alt'); else if (l === 'shift') mods.push('shift');
    else key = KEY[l] || (p.length === 1 ? p.toUpperCase() : p[0].toUpperCase() + p.slice(1));
  }
  return { key, mods };
}

function normUrl(u) {
  const s = String(u || '').trim();
  if (!s) return HOME;
  if (/^(https?|about|data):/i.test(s)) return s;
  if (/^[\w-]+(\.[\w-]+)+([/:?#].*)?$/.test(s) || /^localhost(:\d+)?/.test(s)) return 'https://' + s;
  return 'https://www.google.com/search?q=' + encodeURIComponent(s);
}

class BrowserPane {
  constructor({ getWindow, emit, connFile }) {
    this.downloads = []; this.dlWait = [];
    this.getWindow = getWindow; this.emit = emit; this.connFile = connFile;
    this.tabs = new Map(); this.active = null; this.seq = 0;
    this.bounds = null; this.visible = false; this.covered = false; this.attached = null;
    this.busyUntil = 0;
  }

  // ---------- phiên & tab ----------
  session() {
    if (this.ses) return this.ses;
    const s = session.fromPartition(PARTITION);
    // bỏ chữ Electron / VanPhongAI khỏi User-Agent: nhiều trang (Google…) chặn đăng nhập trong trình duyệt nhúng
    s.setUserAgent(s.getUserAgent().replace(/\s(Electron|VanPhongAI|vanphong-ai)\/\S+/gi, ''));
    s.setPermissionRequestHandler((_wc, perm, cb) => cb(['clipboard-sanitized-write', 'fullscreen'].includes(perm)));
    s.on('will-download', (_e, item) => {
      // tệp tải về (vd Canva → Tải xuống PNG / PDF) vào thư mục Tải xuống, không ghi đè tệp trùng tên; AI biết đường dẫn
      const dir = app.getPath('downloads');
      const ext = path.extname(item.getFilename()); const base = path.basename(item.getFilename(), ext) || 'tai-ve';
      let file = path.join(dir, base + ext);
      for (let n = 2; fs.existsSync(file) && n < 500; n++) file = path.join(dir, `${base} (${n})${ext}`);
      item.setSavePath(file);
      this.status('Đang tải ' + path.basename(file));
      item.once('done', (_ev, state) => {
        const ok = state === 'completed';
        this.emit({ type: 'toast', text: ok ? `⬇️ Đã tải về: ${path.basename(file)} (thư mục Tải xuống)` : `Tải ${path.basename(file)} không thành công`, error: !ok });
        if (ok) { this.downloads.push({ file, at: Date.now(), told: false }); this.downloads = this.downloads.slice(-10); }
        for (const w of this.dlWait.splice(0)) w(ok ? file : null);
      });
    });
    this.ses = s; return s;
  }

  newTab(url) {
    const view = new WebContentsView({ webPreferences: { partition: PARTITION, sandbox: true, contextIsolation: true, backgroundThrottling: false, spellcheck: false } });
    this.session();
    const id = 't' + (++this.seq);
    const tab = { id, view, loading: false };
    this.tabs.set(id, tab);
    const wc = view.webContents;
    wc.setWindowOpenHandler(({ url: u }) => { if (/^https?:/i.test(u)) this.newTab(u); return { action: 'deny' }; }); // link mở tab mới → tab trong khung
    for (const ev of ['did-start-loading', 'did-stop-loading', 'page-title-updated', 'did-navigate', 'did-navigate-in-page']) wc.on(ev, () => { tab.loading = wc.isLoading(); this.push(); });
    wc.on('did-fail-load', (_e, code, desc, u, isMain) => { if (isMain && code !== -3) this.emit({ type: 'browser', ev: 'error', text: `Không mở được ${u}: ${desc}` }); });
    view.setBackgroundColor('#ffffff');
    this.select(id);
    wc.loadURL(normUrl(url)).catch(() => {});
    return tab;
  }
  select(id) {
    if (!this.tabs.has(id)) return;
    this.active = id; this.layout(); this.push();
  }
  close(id) {
    const tab = this.tabs.get(id); if (!tab) return;
    const w = this.getWindow();
    if (w && this.attached === tab.view) { try { w.contentView.removeChildView(tab.view); } catch { /* đã gỡ */ } this.attached = null; }
    tab.view.webContents.close();
    this.tabs.delete(id);
    if (this.active === id) this.active = [...this.tabs.keys()].pop() || null;
    this.layout(); this.push();
  }
  tab() {
    if (!this.active || !this.tabs.has(this.active)) this.newTab(HOME);
    return this.tabs.get(this.active);
  }
  wc() { return this.tab().view.webContents; }

  // ---------- vị trí khung (renderer báo toạ độ ô trống bên cạnh chat) ----------
  setBounds(b, visible, covered) {
    this.bounds = b && b.width > 20 && b.height > 20 ? { x: Math.round(b.x), y: Math.round(b.y), width: Math.round(b.width), height: Math.round(b.height) } : null;
    this.visible = !!visible; this.covered = !!covered;
    if (this.visible && !this.tabs.size) this.newTab(HOME);
    this.layout();
  }
  layout() {
    const w = this.getWindow(); if (!w || w.isDestroyed()) return;
    const tab = this.active && this.tabs.get(this.active);
    const want = tab && this.visible && this.bounds ? tab.view : null;
    if (this.attached && this.attached !== want) { try { w.contentView.removeChildView(this.attached); } catch { /* đã gỡ */ } this.attached = null; }
    if (want) {
      if (this.attached !== want) { w.contentView.addChildView(want); this.attached = want; }
      want.setBounds(this.bounds);
      want.setVisible(!this.covered); // hộp thoại của app đang mở → tạm ẩn trang (lớp trang luôn nằm trên giao diện app)
    }
  }
  state() {
    const tab = this.active && this.tabs.get(this.active);
    const wc = tab && tab.view.webContents;
    return {
      tabs: [...this.tabs.values()].map((t) => ({ id: t.id, title: t.view.webContents.getTitle() || 'Tab mới', url: t.view.webContents.getURL(), loading: t.loading, active: t.id === this.active })),
      url: wc ? wc.getURL() : '', title: wc ? wc.getTitle() : '', loading: !!(tab && tab.loading), shown: !!(this.attached && !this.covered),
      canGoBack: !!(wc && wc.navigationHistory.canGoBack()), canGoForward: !!(wc && wc.navigationHistory.canGoForward()),
    };
  }
  push() { clearTimeout(this.pushT); this.pushT = setTimeout(() => this.emit({ type: 'browser', ev: 'state', state: this.state() }), 30); }

  // thao tác từ thanh công cụ của khung (người dùng bấm)
  ui(cmd = {}) {
    const wc = this.tabs.size ? this.wc() : null;
    switch (cmd.action) {
      case 'go': return wc ? wc.loadURL(normUrl(cmd.url)).catch(() => {}) : this.newTab(cmd.url);
      case 'back': return wc && wc.navigationHistory.canGoBack() && wc.navigationHistory.goBack();
      case 'forward': return wc && wc.navigationHistory.canGoForward() && wc.navigationHistory.goForward();
      case 'reload': return wc && wc.reload();
      case 'stop': return wc && wc.stop();
      case 'new': return this.newTab(cmd.url || HOME) && null;
      case 'select': return this.select(cmd.id);
      case 'close': return this.close(cmd.id);
      case 'external': { const u = wc && wc.getURL(); if (/^https?:/i.test(u || '')) shell.openExternal(u); return null; }
      default: return null;
    }
  }

  // ---------- công cụ cho AI ----------
  async ensureShown() {
    if (this.visible && this.bounds) return;
    this.emit({ type: 'browser', ev: 'show' }); // mở khung bên cạnh chat
    for (let i = 0; i < 30 && !(this.visible && this.bounds); i++) await sleep(100);
    if (!this.tabs.size) this.newTab(HOME);
  }
  status(text) { this.emit({ type: 'browser', ev: 'ai', text }); this.busyUntil = Date.now() + 4000; }
  async waitLoad(wc, ms = 20000) {
    if (!wc.isLoading()) { await sleep(150); if (!wc.isLoading()) return; }
    await new Promise((r) => { const t = setTimeout(done, ms); function done() { clearTimeout(t); wc.removeListener('did-stop-loading', done); r(); } wc.once('did-stop-loading', done); });
    await sleep(250);
  }
  run(code) { return this.wc().executeJavaScript(code, true); }
  async snapshot(max = 12000, full = false) {
    await this.waitLoad(this.wc(), 8000);
    const snap = await this.run(`${SNAPSHOT}(${Number(max) || 12000}, ${full ? 'true' : 'false'})`);
    const fresh = this.downloads.filter((d) => !d.told); fresh.forEach((d) => { d.told = true; });
    return (fresh.length ? 'Tệp vừa tải về máy:\n' + fresh.map((d) => '- ' + d.file).join('\n') + '\n\n' : '') + snap;
  }
  waitDownload(ms) {
    const fresh = this.downloads.find((d) => !d.told); if (fresh) { fresh.told = true; return Promise.resolve(fresh.file); }
    return new Promise((resolve) => {
      const w = (f) => { clearTimeout(t); const d = this.downloads.find((x) => x.file === f); if (d) d.told = true; resolve(f); };
      const t = setTimeout(() => { this.dlWait = this.dlWait.filter((x) => x !== w); resolve(null); }, ms);
      this.dlWait.push(w);
    });
  }

  async moveTo(x, y, kind, label) {
    const wc = this.wc();
    await wc.executeJavaScript(`${CURSOR}(${x}, ${y}, ${JSON.stringify(kind || '')}, ${JSON.stringify(label || 'SIMI')})`, true).catch(() => {});
    await sleep(kind === 'click' ? 220 : 120); // để mắt người theo kịp con trỏ
    const z = wc.getZoomFactor();
    wc.sendInputEvent({ type: 'mouseMove', x: Math.round(x * z), y: Math.round(y * z) });
  }
  // vị trí theo mã [eN], hoặc theo toạ độ x,y (px trên ảnh browser_screenshot = px của trang đang thấy)
  async locate(a) {
    if (a.ref) { const p = await this.run(`${LOCATE}(${JSON.stringify(a.ref)})`); if (p.error) throw new Error(p.error); return p; }
    const x = Number(a.x), y = Number(a.y);
    if (!Number.isFinite(x) || !Number.isFinite(y)) throw new Error('Cần ref (mã eN) hoặc toạ độ x, y lấy từ browser_screenshot');
    return this.run(`(function(x,y){const e=document.elementFromPoint(x,y);return {x:x,y:y,editable:!!(e&&(e.isContentEditable||/^(INPUT|TEXTAREA)$/.test(e.tagName)))};})(${x},${y})`);
  }
  async click(target, { double = false, label } = {}) {
    const p = await this.locate(typeof target === 'string' ? { ref: target } : target);
    await this.moveTo(p.x, p.y, 'click', label);
    const z = this.wc().getZoomFactor(); const x = Math.round(p.x * z), y = Math.round(p.y * z);
    for (let c = 1; c <= (double ? 2 : 1); c++) {
      this.wc().sendInputEvent({ type: 'mouseDown', x, y, button: 'left', clickCount: c });
      this.wc().sendInputEvent({ type: 'mouseUp', x, y, button: 'left', clickCount: c });
    }
    await sleep(120);
    return p;
  }
  press(combo) {
    const { key, mods } = parseKey(combo);
    if (!key) throw new Error('Phím không hợp lệ: ' + combo);
    const wc = this.wc();
    wc.sendInputEvent({ type: 'keyDown', keyCode: key, modifiers: mods });
    if (key.length === 1 && !mods.some((m) => m === 'control' || m === 'meta')) wc.sendInputEvent({ type: 'char', keyCode: key, modifiers: mods });
    if (key === 'Enter' && !mods.length) wc.sendInputEvent({ type: 'char', keyCode: '\r' });
    wc.sendInputEvent({ type: 'keyUp', keyCode: key, modifiers: mods });
  }

  async act(actions = []) {
    const log = [];
    const wc = this.wc();
    let navigated = false;
    const onNav = () => { navigated = true; };
    wc.on('did-start-navigation', onNav);
    try {
      for (const [i, a] of actions.slice(0, 30).entries()) {
        const what = String(a.action || '');
        if (what === 'click' || what === 'double_click') {
          const at = a.ref || `(${a.x}, ${a.y})`;
          const p = await this.click(a, { double: what === 'double_click' });
          this.status(`Bấm ${at}`);
          log.push(`${i + 1}. bấm ${at}${p.covered ? ' (có thể bị lớp khác che)' : ''}`);
        } else if (what === 'type') {
          const p = await this.click(a, { label: 'SIMI đang gõ…' });
          if (a.clear !== false) { if (a.ref) await this.run(`${SELECT_ALL}(${JSON.stringify(a.ref)})`); else this.press(process.platform === 'darwin' ? 'Meta+A' : 'Ctrl+A'); }
          const text = String(a.text ?? '');
          if (text) await wc.insertText(text); else if (a.clear !== false) this.press('Backspace');
          if (a.submit) { await sleep(80); this.press('Enter'); }
          this.status(`Gõ vào ${a.ref}`);
          log.push(`${i + 1}. gõ ${JSON.stringify(text.slice(0, 40))} vào ${a.ref || `(${a.x}, ${a.y})`}${p.editable ? '' : ' (phần tử này có thể không gõ được)'}${a.submit ? ' + Enter' : ''}`);
        } else if (what === 'press') {
          this.press(a.key || a.text); log.push(`${i + 1}. phím ${a.key || a.text}`);
        } else if (what === 'select') {
          const r = await this.run(`${SET_VALUE}(${JSON.stringify(a.ref)}, ${JSON.stringify(String(a.value ?? a.text ?? ''))})`);
          if (r !== 'ok') throw new Error(r);
          log.push(`${i + 1}. chọn "${a.value ?? a.text}" ở ${a.ref}`);
        } else if (what === 'hover') {
          const p = await this.locate(a);
          await this.moveTo(p.x, p.y, 'hover'); log.push(`${i + 1}. rê chuột lên ${a.ref || `(${a.x}, ${a.y})`}`);
        } else if (what === 'scroll') {
          const dy = (a.direction === 'up' ? -1 : 1) * Math.max(100, Math.min(4000, Number(a.amount) || 600));
          if (a.ref) await this.run(`(function(){const e=document.querySelector('[data-vp-ref="${String(a.ref).replace(/"/g, '')}"]'); if(e) e.scrollBy({top:${dy},behavior:'smooth'});})()`);
          else await this.run(`window.scrollBy({ top: ${dy}, behavior: 'smooth' })`);
          await sleep(450); log.push(`${i + 1}. cuộn ${dy > 0 ? 'xuống' : 'lên'}`);
        } else if (what === 'wait') {
          if (a.text) {
            const until = Date.now() + Math.min(15000, Number(a.ms) || 8000); let ok = false;
            while (Date.now() < until) { ok = await this.run(`document.body && document.body.innerText.includes(${JSON.stringify(String(a.text))})`).catch(() => false); if (ok) break; await sleep(300); }
            log.push(`${i + 1}. chờ chữ "${a.text}": ${ok ? 'đã thấy' : 'chưa thấy'}`);
          } else { await sleep(Math.min(10000, Number(a.ms) || 1000)); log.push(`${i + 1}. chờ ${Math.min(10000, Number(a.ms) || 1000)} ms`); }
        } else if (what === 'wait_download') {
          this.status('Chờ tải tệp về');
          const f = await this.waitDownload(Math.min(120000, Number(a.ms) || 60000));
          log.push(`${i + 1}. chờ tải tệp: ${f ? 'đã lưu ' + f : 'chưa có tệp nào tải về'}`);
        } else if (what === 'back' || what === 'forward') {
          if (what === 'back' && wc.navigationHistory.canGoBack()) wc.navigationHistory.goBack();
          if (what === 'forward' && wc.navigationHistory.canGoForward()) wc.navigationHistory.goForward();
          log.push(`${i + 1}. ${what === 'back' ? 'quay lại' : 'tiến tới'}`);
        } else throw new Error(`Thao tác không hỗ trợ: ${what}`);
        if (navigated) { await this.waitLoad(wc, 15000); navigated = false; } else await sleep(120);
      }
    } finally { wc.removeListener('did-start-navigation', onNav); }
    return log;
  }

  async call(tool, args = {}) {
    if (tool === 'design_render') { this.emit({ type: 'toast', text: '🎨 SIMI đang xuất thiết kế…' }); return require('./design').render(args); }
    await this.ensureShown();
    switch (tool) {
      case 'browser_open': {
        if (args.new_tab) this.newTab(args.url); else { this.status('Mở ' + String(args.url || '').slice(0, 60)); this.wc().loadURL(normUrl(args.url)).catch(() => {}); }
        await sleep(200); await this.waitLoad(this.wc());
        return [{ type: 'text', text: await this.snapshot(Number(args.max_chars) || 8000) }];
      }
      case 'browser_snapshot': return [{ type: 'text', text: await this.snapshot(Number(args.max_chars) || 12000, !!args.full) }];
      case 'browser_act': {
        const log = await this.act(Array.isArray(args.actions) ? args.actions : []);
        const snap = args.snapshot === false ? '' : '\n\n' + await this.snapshot(Number(args.max_chars) || 8000);
        return [{ type: 'text', text: 'Đã làm:\n' + log.join('\n') + snap }];
      }
      case 'browser_read': await this.waitLoad(this.wc(), 8000); return [{ type: 'text', text: await this.run(`${READ}(${Math.min(200000, Number(args.max_chars) || 40000)})`) }];
      case 'browser_screenshot': {
        await this.waitLoad(this.wc(), 8000);
        let img = await this.wc().capturePage();
        // ảnh đúng bằng khổ trang (px CSS) → toạ độ trên ảnh dùng thẳng cho browser_act {x, y}
        const vw = Math.round(await this.run('innerWidth').catch(() => 0)) || img.getSize().width;
        const w = Math.min(1280, vw); if (img.getSize().width !== w) img = img.resize({ width: w });
        const k = vw / w;
        return [{ type: 'text', text: `Ảnh trang ${this.wc().getURL()} (${img.getSize().width}×${img.getSize().height}px). Bấm theo vị trí trên ảnh: browser_act {"action":"click","x":${k === 1 ? 'X' : `X×${k.toFixed(3)}`},"y":${k === 1 ? 'Y' : `Y×${k.toFixed(3)}`}} – KHÔNG dùng công cụ điều khiển máy cho trang này.` }, { type: 'image', data: img.toJPEG(80).toString('base64'), mimeType: 'image/jpeg' }];
      }
      case 'browser_tabs': {
        const a = args.action || 'list';
        if (a === 'new') { this.newTab(args.url); await this.waitLoad(this.wc()); }
        if (a === 'switch' && args.id) this.select(String(args.id));
        if (a === 'close' && args.id) this.close(String(args.id));
        const st = this.state();
        return [{ type: 'text', text: st.tabs.map((t) => `${t.active ? '▶' : ' '} ${t.id}  ${t.title}  ${t.url}`).join('\n') || 'Chưa có tab' }];
      }
      default: throw new Error('Không có công cụ ' + tool);
    }
  }

  // ---------- cổng cho MCP (chỉ máy này, có token) ----------
  async listen() {
    this.token = crypto.randomBytes(24).toString('hex');
    this.server = http.createServer((req, res) => {
      if (req.method !== 'POST' || req.url !== '/call' || req.headers.authorization !== 'Bearer ' + this.token) { res.writeHead(403).end(); return; }
      let body = ''; req.on('data', (c) => { body += c; if (body.length > 1e6) req.destroy(); });
      req.on('end', async () => {
        let out;
        try { const j = JSON.parse(body || '{}'); out = { content: await this.call(j.tool, j.args || {}) }; } catch (e) { out = { error: e.message || String(e) }; }
        res.writeHead(200, { 'content-type': 'application/json' }); res.end(JSON.stringify(out));
      });
    });
    await new Promise((r) => this.server.listen(0, '127.0.0.1', r));
    fs.writeFileSync(this.connFile, JSON.stringify({ port: this.server.address().port, token: this.token, pid: process.pid }), { mode: 0o600 });
  }
  stop() { try { this.server && this.server.close(); } catch { /* đã đóng */ } try { fs.unlinkSync(this.connFile); } catch { /* không có */ } }
}

module.exports = { BrowserPane, normUrl, parseKey };
