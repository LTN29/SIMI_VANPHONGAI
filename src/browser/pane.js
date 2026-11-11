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
  // ô chọn tệp thường bị ẩn sau nút "Tải ảnh lên" → vẫn liệt kê để AI dùng action upload
  for (const f of document.querySelectorAll('input[type=file]')) if (!has.has(f)) { els.push(f); has.add(f); }
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
    if (type === 'file') line = '[' + ref + '] file-input "' + clean(el.getAttribute('accept') || 'tệp', 40) + '"' + (el.multiple ? ' (nhiều tệp)' : '') + (vis(el) ? '' : ' (ẩn – dùng action upload với mã này)');
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

// điền thẳng nội dung (nhanh với chữ dài / HTML, chạy được cả khi app thu nhỏ): ô nhập, ô văn bản, vùng soạn thảo
const FILL = String.raw`(function (ref, text, html) {
  const el = document.querySelector('[data-vp-ref="' + ref + '"]'); if (!el) return 'Không thấy ' + ref + ' (gọi browser_snapshot lấy mã mới)';
  el.scrollIntoView({ block: 'center' }); el.focus();
  if (/^(INPUT|TEXTAREA)$/.test(el.tagName)) {
    const proto = el.tagName === 'TEXTAREA' ? HTMLTextAreaElement.prototype : HTMLInputElement.prototype;
    Object.getOwnPropertyDescriptor(proto, 'value').set.call(el, text);
    el.dispatchEvent(new Event('input', { bubbles: true })); el.dispatchEvent(new Event('change', { bubbles: true }));
    return 'ok';
  }
  const ed = el.isContentEditable ? el : el.querySelector('[contenteditable=""],[contenteditable=true]');
  if (ed) {
    ed.focus(); const r = document.createRange(); r.selectNodeContents(ed); const s = getSelection(); s.removeAllRanges(); s.addRange(r);
    const ok = document.execCommand(html ? 'insertHTML' : 'insertText', false, text);
    if (!ok) { if (html) ed.innerHTML = text; else ed.textContent = text; ed.dispatchEvent(new InputEvent('input', { bubbles: true })); }
    return 'ok';
  }
  return 'Phần tử ' + ref + ' không phải ô nhập – dùng type (bấm rồi gõ) hoặc paste';
})`;

// dán như Ctrl+V nhưng KHÔNG đụng clipboard của máy: gửi sự kiện paste kèm dữ liệu (chữ / HTML) – trình soạn thảo tự xử lý
const PASTE = String.raw`(function (ref, text, html) {
  const el = ref ? document.querySelector('[data-vp-ref="' + ref + '"]') : document.activeElement;
  if (!el) return 'Không thấy ' + ref;
  el.focus();
  const dt = new DataTransfer(); dt.setData('text/plain', text || ''); if (html) dt.setData('text/html', html);
  const ev = new ClipboardEvent('paste', { clipboardData: dt, bubbles: true, cancelable: true });
  const handled = !el.dispatchEvent(ev);
  if (handled) return 'trang đã nhận nội dung dán';
  if (/^(INPUT|TEXTAREA)$/.test(el.tagName)) { el.setRangeText(text || '', el.selectionStart || 0, el.selectionEnd || 0, 'end'); el.dispatchEvent(new Event('input', { bubbles: true })); return 'đã chèn'; }
  return document.execCommand(html ? 'insertHTML' : 'insertText', false, html || text || '') ? 'đã chèn' : 'trang không nhận dán – thử fill';
})`;

// cuộn đúng khung đang cần (vùng có thanh cuộn riêng: hộp soạn thảo, danh sách, cửa sổ con…), không chỉ cả trang
const SCROLL = String.raw`(function (ref, x, y, dy, to) {
  const el = ref ? document.querySelector('[data-vp-ref="' + ref + '"]') : document.elementFromPoint(x == null ? innerWidth / 2 : x, y == null ? innerHeight / 2 : y);
  if (ref && !el) return { error: 'Không thấy ' + ref };
  const can = (e) => { if (!e || e === document.body || e === document.documentElement) return false; const s = getComputedStyle(e); return /(auto|scroll|overlay)/.test(s.overflowY) && e.scrollHeight > e.clientHeight + 2; };
  let box = el; while (box && !can(box)) box = box.parentElement;
  const tgt = box || document.scrollingElement || document.documentElement;
  const before = tgt.scrollTop;
  if (to === 'top') tgt.scrollTop = 0; else if (to === 'bottom') tgt.scrollTop = tgt.scrollHeight; else tgt.scrollTop = before + dy;
  if (!box) window.dispatchEvent(new Event('scroll'));
  const name = box ? box.tagName.toLowerCase() + (box.id ? '#' + box.id : '') + (typeof box.className === 'string' && box.className.trim() ? '.' + box.className.trim().split(/\s+/)[0] : '') : 'trang';
  return { moved: Math.round(tgt.scrollTop - before), where: name, pos: Math.round(tgt.scrollTop), max: Math.round(tgt.scrollHeight - tgt.clientHeight) };
})`;

// bấm bằng sự kiện trong trang (khi app đang thu nhỏ / trang không hiển thị thì chuột thật không tới được)
const JS_CLICK = String.raw`(function (ref, x, y, dbl) {
  const el = ref ? document.querySelector('[data-vp-ref="' + ref + '"]') : document.elementFromPoint(x, y);
  if (!el) return 'Không thấy ' + (ref || 'phần tử ở (' + x + ', ' + y + ')');
  el.scrollIntoView({ block: 'center' });
  const r = el.getBoundingClientRect(); const o = { bubbles: true, cancelable: true, view: window, clientX: r.left + r.width / 2, clientY: r.top + r.height / 2, button: 0 };
  for (const t of ['pointerdown', 'mousedown']) el.dispatchEvent(t.startsWith('pointer') ? new PointerEvent(t, { ...o, pointerType: 'mouse', isPrimary: true }) : new MouseEvent(t, o));
  if (typeof el.focus === 'function') el.focus();
  for (const t of ['pointerup', 'mouseup']) el.dispatchEvent(t.startsWith('pointer') ? new PointerEvent(t, { ...o, pointerType: 'mouse', isPrimary: true }) : new MouseEvent(t, o));
  el.click(); if (dbl) el.dispatchEvent(new MouseEvent('dblclick', o));
  return 'ok';
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

// 📄 AI trong tab Chat tạo file Word / Excel / PDF từ Markdown – chạy trong app, không cần Python trên máy
async function createDocument(args = {}) {
  const ex = require('../export');
  let file = String(args.path || '').trim();
  if (!file) throw new Error('Cần path (đường dẫn file kết quả, vd C:\\…\\Báo cáo.docx)');
  if (!path.isAbsolute(file)) file = path.join(require('electron').app.getPath('documents'), 'VanPhongAI', 'Chat', 'outputs', file);
  let content = args.content;
  if (!content && args.content_path) {
    const src = path.resolve(String(args.content_path));
    if (!fs.existsSync(src)) throw new Error('Không thấy file nội dung: ' + src);
    content = fs.readFileSync(src, 'utf8');
  }
  const r = await ex.writeDocument({ content, file, title: args.title, overwrite: args.overwrite !== false, printPdf: (html) => ex.pdfFromHtml(html) });
  const blocks = ex.parseMd(content);
  const tables = blocks.filter((b) => b.type === 'table');
  const note = r.format === 'xlsx' ? (tables.length ? `${tables.length} sheet từ ${tables.length} bảng` : 'không có bảng Markdown → mỗi dòng nội dung 1 hàng (muốn chia cột thì viết bảng | … |)')
    : `${blocks.filter((b) => b.type === 'h').length} tiêu đề, ${tables.length} bảng`;
  return [{ type: 'text', text: `Đã tạo ${r.format.toUpperCase()}: ${r.file} (${Math.max(1, Math.round(r.bytes / 1024))} KB · ${note}). Gửi đường dẫn này cho người dùng; cần sửa thì gọi lại cùng path.` }];
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
    this.attachCdp(tab);
    this.select(id);
    wc.loadURL(normUrl(url)).catch(() => {});
    return tab;
  }
  // Chrome DevTools Protocol của chính tab (không lộ ra trang): khi AI đang làm thì tự xử lý hộp thoại alert / confirm
  // và hộp chọn tệp (không bật cửa sổ chọn tệp của Windows – AI đưa thẳng đường dẫn tệp vào trang).
  attachCdp(tab) {
    const dbg = tab.view.webContents.debugger;
    try { dbg.attach('1.3'); } catch { return; }
    tab.cdp = (m, p) => dbg.sendCommand(m, p || {});
    tab.notes = [];
    dbg.on('message', (_e, method, params) => {
      if (method === 'Page.javascriptDialogOpening' && this.busy > 0) {
        tab.notes.push(`trang hiện hộp thoại ${params.type}: "${String(params.message || '').slice(0, 200)}" → đã bấm OK`);
        tab.cdp('Page.handleJavaScriptDialog', { accept: true, promptText: params.defaultPrompt || '' }).catch(() => {});
      } else if (method === 'Page.fileChooserOpened') {
        const files = tab.pendingFiles; tab.pendingFiles = null;
        const done = tab.chooserDone; tab.chooserDone = null;
        if (files && params.backendNodeId) tab.cdp('DOM.setFileInputFiles', { files, backendNodeId: params.backendNodeId }).then(() => done && done(null), (e) => done && done(e));
        else { tab.notes.push('trang mở hộp chọn tệp – dùng action upload {ref, files:[đường dẫn]} để đưa tệp vào'); done && done(new Error('không có tệp')); }
      }
    });
    dbg.on('detach', () => { tab.cdp = null; });
    tab.cdp('Page.enable').catch(() => {});
  }
  async cdpIntercept(on) {
    for (const t of this.tabs.values()) if (t.cdp) await t.cdp('Page.setInterceptFileChooserDialog', { enabled: !!on }).catch(() => {});
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
  // front: khung bên cạnh chat. pip: khung nhỏ góc màn hình khi người dùng sang Văn phòng / Sảnh mà AI vẫn đang dùng
  // trình duyệt (trang vẫn hiển thị nên chuột / bàn phím / ảnh chụp của AI chạy bình thường, người dùng làm việc khác thoải mái).
  setBounds(b, visible, covered, pip) {
    this.bounds = b && b.width > 20 && b.height > 20 ? { x: Math.round(b.x), y: Math.round(b.y), width: Math.round(b.width), height: Math.round(b.height) } : null;
    this.visible = !!visible; this.covered = !!covered; this.pip = !!pip;
    if (this.visible && !this.pip && this.bounds) this.cssW = this.bounds.width; // khổ trang quen thuộc → khung nhỏ giữ đúng bố cục
    if (this.visible && !this.tabs.size) this.newTab(HOME);
    this.layout();
  }
  layout() {
    const w = this.getWindow(); if (!w || w.isDestroyed()) return;
    const tab = this.active && this.tabs.get(this.active);
    const want = tab && this.visible && this.bounds && !this.covered ? tab.view : null;
    if (this.attached && this.attached !== want) { try { w.contentView.removeChildView(this.attached); } catch { /* đã gỡ */ } this.restoreZoom(this.attached); this.attached = null; }
    if (want) {
      if (this.attached !== want) { w.contentView.addChildView(want); this.attached = want; }
      want.setBounds(this.bounds);
      want.setVisible(true);
      const wc = want.webContents;
      if (this.pip) {
        // khung nhỏ: thu nhỏ trang theo tỉ lệ để bề ngang trang vẫn như khung lớn (không nhảy sang giao diện điện thoại)
        if (want.userZoom == null) want.userZoom = wc.getZoomFactor();
        const z = Math.max(0.25, Math.min(1, this.bounds.width / Math.max(900, this.cssW || 1100)));
        if (Math.abs(wc.getZoomFactor() - z) > 0.01) wc.setZoomFactor(z);
      } else this.restoreZoom(want);
    }
    this.push();
  }
  restoreZoom(view) { if (view && view.userZoom != null) { try { view.webContents.setZoomFactor(view.userZoom); } catch { /* đã đóng */ } view.userZoom = null; } }
  state() {
    const tab = this.active && this.tabs.get(this.active);
    const wc = tab && tab.view.webContents;
    return {
      tabs: [...this.tabs.values()].map((t) => ({ id: t.id, title: t.view.webContents.getTitle() || 'Tab mới', url: t.view.webContents.getURL(), loading: t.loading, active: t.id === this.active })),
      url: wc ? wc.getURL() : '', title: wc ? wc.getTitle() : '', loading: !!(tab && tab.loading), shown: !!(this.attached && !this.covered), pip: !!(this.attached && this.pip), busy: this.busy > 0,
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
  // xin hiện trang: người dùng đang ở tab Chat → mở khung bên cạnh; đang ở chỗ khác → khung nhỏ góc màn hình (không giành màn hình)
  async ensureShown() {
    if (!this.tabs.size) this.newTab(HOME);
    if (this.visible && this.bounds && !this.covered) return;
    this.emit({ type: 'browser', ev: 'show' });
    for (let i = 0; i < 15 && !(this.visible && this.bounds); i++) await sleep(100);
  }
  // trang có đang hiện trên màn hình không (app thu nhỏ / khung bị ẩn → dùng thao tác trong trang thay cho chuột thật)
  async pageVisible() {
    const w = this.getWindow(); const tab = this.active && this.tabs.get(this.active);
    if (!w || w.isDestroyed() || !w.isVisible() || w.isMinimized() || !tab || this.attached !== tab.view) return false;
    return (await this.run('document.visibilityState').catch(() => 'hidden')) === 'visible';
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
    const t = typeof target === 'string' ? { ref: target } : target;
    if (!(await this.pageVisible())) {
      const r = await this.run(`${JS_CLICK}(${JSON.stringify(t.ref || '')}, ${Number(t.x) || 0}, ${Number(t.y) || 0}, ${double ? 'true' : 'false'})`);
      if (r !== 'ok') throw new Error(r);
      await sleep(120);
      return { hidden: true, editable: true };
    }
    const p = await this.locate(t);
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
        } else if (what === 'type' && a.ref && !(await this.pageVisible())) {
          // app đang thu nhỏ: không gõ phím thật được → điền thẳng vào ô
          const r = await this.run(`${FILL}(${JSON.stringify(a.ref)}, ${JSON.stringify(String(a.text ?? ''))}, false)`);
          if (r !== 'ok') throw new Error(r);
          if (a.submit) await this.run(`(function(){const e=document.querySelector('[data-vp-ref="${String(a.ref).replace(/"/g, '')}"]'); const f=e&&e.form; if(f){ if(f.requestSubmit) f.requestSubmit(); else f.submit(); } else if(e){ for (const t of ['keydown','keypress','keyup']) e.dispatchEvent(new KeyboardEvent(t,{key:'Enter',code:'Enter',keyCode:13,which:13,bubbles:true})); }})()`);
          log.push(`${i + 1}. điền ${JSON.stringify(String(a.text ?? '').slice(0, 40))} vào ${a.ref}${a.submit ? ' + Enter' : ''}`);
        } else if (what === 'fill') {
          const text = String(a.text ?? a.html ?? '');
          const r = await this.run(`${FILL}(${JSON.stringify(a.ref || '')}, ${JSON.stringify(text)}, ${a.html ? 'true' : 'false'})`);
          if (r !== 'ok') throw new Error(r);
          this.status(`Điền ${a.ref}`);
          log.push(`${i + 1}. điền ${text.length} ký tự${a.html ? ' (HTML)' : ''} vào ${a.ref}`);
        } else if (what === 'paste') {
          if (a.ref && await this.pageVisible()) await this.click(a, { label: 'SIMI đang dán…' });
          const r = await this.run(`${PASTE}(${JSON.stringify(a.ref || '')}, ${JSON.stringify(String(a.text ?? ''))}, ${JSON.stringify(a.html ? String(a.html) : '')})`);
          this.status(`Dán vào ${a.ref || 'ô đang chọn'}`);
          log.push(`${i + 1}. dán ${String(a.html || a.text || '').length} ký tự${a.html ? ' (HTML)' : ''} vào ${a.ref || 'ô đang chọn'}: ${r}`);
        } else if (what === 'upload') {
          log.push(`${i + 1}. ${await this.upload(a)}`);
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
          if (a.ref && !a.direction && !a.amount && !a.to) {
            await this.run(`${LOCATE}(${JSON.stringify(a.ref)})`); log.push(`${i + 1}. cuộn tới ${a.ref}`);
          } else {
            const dy = (a.direction === 'up' ? -1 : 1) * Math.max(50, Math.min(6000, Number(a.amount) || 600));
            const r = await this.run(`${SCROLL}(${JSON.stringify(a.ref || '')}, ${a.x == null ? 'null' : Number(a.x)}, ${a.y == null ? 'null' : Number(a.y)}, ${dy}, ${JSON.stringify(a.to || '')})`);
            if (r && r.error) throw new Error(r.error);
            await sleep(250);
            log.push(`${i + 1}. cuộn ${a.to === 'top' ? 'lên đầu' : a.to === 'bottom' ? 'xuống cuối' : dy > 0 ? 'xuống' : 'lên'} khung ${r.where}: ${r.moved ? `dịch ${r.moved}px → ${r.pos}/${r.max}px` : `không dịch được (đang ở ${r.pos}/${r.max}px)`}`);
          }
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
        const tab = this.tab(); if (tab.notes && tab.notes.length) log.push(...tab.notes.splice(0).map((n) => '   ↳ ' + n));
      }
    } finally { wc.removeListener('did-start-navigation', onNav); }
    return log;
  }

  // đưa tệp vào trang (ảnh sản phẩm, tài liệu…) không mở cửa sổ chọn tệp của máy: ref là ô chọn tệp, hoặc nút "Tải lên"
  async upload(a) {
    const files = [].concat(a.files || a.file || a.path || []).map(String).filter(Boolean);
    if (!files.length) throw new Error('upload cần files: [đường dẫn tuyệt đối]');
    const bad = files.filter((f) => !path.isAbsolute(f) || !fs.existsSync(f));
    if (bad.length) throw new Error('Không thấy tệp: ' + bad.join(', '));
    const tab = this.tab(); if (!tab.cdp) throw new Error('Tab này chưa sẵn sàng tải tệp – mở lại trang rồi thử');
    const sel = a.ref ? `[data-vp-ref="${String(a.ref).replace(/"/g, '')}"]` : 'input[type=file]';
    const isInput = await this.run(`(function(){const e=document.querySelector(${JSON.stringify(sel)}); return !!(e && e.tagName==='INPUT' && e.type==='file');})()`);
    if (isInput) {
      const { root } = await tab.cdp('DOM.getDocument', { depth: 0 });
      const { nodeId } = await tab.cdp('DOM.querySelector', { nodeId: root.nodeId, selector: sel });
      if (!nodeId) throw new Error('Không thấy ô chọn tệp ' + (a.ref || ''));
      await tab.cdp('DOM.setFileInputFiles', { nodeId, files });
      this.status('Tải ' + files.length + ' tệp lên');
      return `đưa ${files.length} tệp vào ${a.ref || 'ô chọn tệp'}: ${files.map((f) => path.basename(f)).join(', ')}`;
    }
    if (!a.ref) throw new Error('Trang không có ô chọn tệp – đưa mã nút "Tải lên" (ref)');
    // nút "Tải ảnh lên": bấm → trang mở hộp chọn tệp → app chặn hộp đó và đưa thẳng tệp vào
    const got = new Promise((resolve) => { tab.pendingFiles = files; tab.chooserDone = resolve; setTimeout(() => resolve(new Error('timeout')), 6000); });
    await this.click(a, { label: 'SIMI đang tải tệp…' });
    const err = await got; tab.pendingFiles = null; tab.chooserDone = null;
    if (err) throw new Error('Bấm ' + a.ref + ' nhưng trang không mở hộp chọn tệp – tìm ô file-input trong browser_snapshot rồi upload vào mã đó');
    this.status('Tải ' + files.length + ' tệp lên');
    return `bấm ${a.ref} và đưa ${files.length} tệp vào: ${files.map((f) => path.basename(f)).join(', ')}`;
  }

  async call(tool, args = {}) {
    if (tool === 'design_render') { this.emit({ type: 'toast', text: '🎨 SIMI đang xuất thiết kế…' }); return require('./design').render(args); }
    if (tool === 'document_create') return createDocument(args);
    this.busy = (this.busy || 0) + 1; clearTimeout(this.idleT);
    if (this.busy === 1) { this.emit({ type: 'browser', ev: 'busy', on: true }); this.cdpIntercept(true); }
    try { return await this.callInner(tool, args); } finally {
      this.busy--;
      // AI hay gọi liên tiếp → giữ trạng thái "đang dùng" thêm ít giây rồi mới tắt khung nhỏ / trả hộp chọn tệp cho người dùng
      if (!this.busy) this.idleT = setTimeout(() => { if (!this.busy) { this.emit({ type: 'browser', ev: 'busy', on: false }); this.cdpIntercept(false); } }, 8000);
    }
  }
  async callInner(tool, args) {
    await this.ensureShown();
    switch (tool) {
      case 'browser_js': {
        await this.waitLoad(this.wc(), 8000);
        const code = String(args.code || '').trim(); if (!code) throw new Error('Cần code');
        const wrap = /^(return|const|let|var|for|if|await|document|window|\{)/.test(code) && /;|\n|return/.test(code) ? `(async () => { ${code} })()` : `(async () => (${code}))()`;
        let v; try { v = await this.run(wrap); } catch (e) { throw new Error('Lỗi chạy mã trong trang: ' + (e.message || e)); }
        const out = typeof v === 'string' ? v : JSON.stringify(v, null, 1);
        return [{ type: 'text', text: (out === undefined ? '(không trả gì)' : out).slice(0, Math.min(60000, Number(args.max_chars) || 20000)) }];
      }
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
      case 'browser_doc': {
        // tài liệu trên SharePoint / OneDrive / Google Drive: mở trang cạnh khung chat cho người dùng thấy, đồng thời tải file
        // bằng phiên đăng nhập của trình duyệt này và rút chữ ngay trong app – 1 lần gọi, không bấm từng ô, không cần Python
        const cd = require('./cloud-doc');
        const given = String(args.url || '').trim();
        if (given && this.wc().getURL() !== normUrl(given)) { this.status('Mở ' + given.slice(0, 60)); this.wc().loadURL(normUrl(given)).catch(() => {}); await sleep(200); }
        const page = given ? normUrl(given) : this.wc().getURL();
        const d = cd.directUrl(page) || cd.directUrl(this.wc().getURL());
        if (!d) throw new Error('Đây không phải link tài liệu (Excel / Word / PowerPoint / PDF trên SharePoint, OneDrive, Google Drive) – dùng browser_read để đọc chữ của trang.');
        this.status('Đang đọc tài liệu…');
        let res;
        try { res = await this.session().fetch(d.url, { redirect: 'follow', signal: AbortSignal.timeout(90000) }); } catch (e) { throw new Error('Không tải được tài liệu: ' + (e.message || e)); }
        const type = String(res.headers.get('content-type') || '').toLowerCase();
        const buf = Buffer.from(await res.arrayBuffer());
        if (!res.ok || /text\/html/.test(type) || /^\s*<(!doctype|html)/i.test(buf.subarray(0, 200).toString('latin1'))) {
          await this.waitLoad(this.wc(), 8000);
          throw new Error(`Chưa đọc được tài liệu (${res.ok ? 'trang yêu cầu đăng nhập hoặc tài khoản chưa có quyền xem' : 'HTTP ' + res.status}). Trang đã mở ở trình duyệt cạnh khung chat – nhờ người dùng đăng nhập / xin quyền ở đó rồi gọi lại browser_doc; không tự bấm tải xuống, không dùng web_fetch.`);
        }
        const named = decodeURIComponent((String(res.headers.get('content-disposition') || '').match(/filename\*?=(?:UTF-8'')?"?([^";]+)/i) || [])[1] || '');
        const ext = cd.sniffExt(buf, path.extname(named).toLowerCase() || d.ext);
        const dir = path.join(app.getPath('userData'), 'browser-docs');
        fs.mkdirSync(dir, { recursive: true });
        for (const f of fs.readdirSync(dir)) { try { const fp = path.join(dir, f); if (Date.now() - fs.statSync(fp).mtimeMs > 7 * 86400000) fs.unlinkSync(fp); } catch { /* đang mở */ } }
        const base = (path.basename(named, path.extname(named)) || 'tai-lieu').replace(/[\\/:*?"<>|]/g, '_').slice(0, 80);
        const file = path.join(dir, `${base}${ext || '.bin'}`);
        fs.writeFileSync(file, buf);
        let text = null;
        try { text = cd.extractText(buf, ext, Math.min(200000, Number(args.max_chars) || 30000)); } catch (e) { text = null; this.status('Không rút được chữ: ' + (e.message || e)); }
        this.status('');
        const head = `Tài liệu: ${base}${ext} (${Math.max(1, Math.round(buf.length / 1024))} KB) – đã mở ở trình duyệt cạnh khung chat.\nBản sao để đọc: ${file}`;
        return [{ type: 'text', text: text === null
          ? `${head}\nApp không tự rút chữ được loại file này – đọc bằng công cụ đọc tài liệu (simi_browser document_read) với đường dẫn trên.`
          : `${head}\n(Cần tính toán / đọc phần bị cắt: dùng công cụ đọc tài liệu với đường dẫn trên.)\n\n${text}` }];
      }
      case 'browser_read': await this.waitLoad(this.wc(), 8000); return [{ type: 'text', text: await this.run(`${READ}(${Math.min(200000, Number(args.max_chars) || 40000)})`) }];
      case 'browser_screenshot': {
        await this.waitLoad(this.wc(), 8000);
        if (!(await this.pageVisible())) throw new Error('Trang đang không hiển thị (app Văn Phòng AI đang thu nhỏ) nên không chụp được – dùng browser_snapshot / browser_read để đọc trang, hoặc nhờ người dùng mở lại app.');
        let img = await this.wc().capturePage(undefined, { stayHidden: true });
        if (img.isEmpty()) throw new Error('Chưa chụp được trang (trang đang ẩn) – dùng browser_snapshot');
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
