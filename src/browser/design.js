// 🎨 Thiết kế ảnh kiểu Claude Desktop: AI viết HTML / CSS / SVG (chữ tiếng Việt sắc nét, đúng màu thương hiệu, bố cục chuẩn)
// → app dựng trang ẩn (offscreen) đúng khổ rồi xuất PNG / JPG / PDF độ nét cao, trả ảnh xem trước + cảnh báo chữ tràn
// để AI tự soát và sửa. Không cần model tạo ảnh (vốn hay viết sai chữ tiếng Việt).
const fs = require('fs');
const os = require('os');
const path = require('path');
const { pathToFileURL } = require('url');

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const PARTITION = 'vp-design'; // không lưu đăng nhập, tách khỏi trình duyệt cạnh chat

// chờ font, ảnh, khung hình ổn định; soát chữ tràn khỏi khung / bị cắt
const SETTLE = String.raw`(async function () {
  try { await document.fonts.ready; } catch (e) {}
  await Promise.all([...document.images].map((i) => (i.complete ? (i.decode ? i.decode().catch(() => {}) : 0) : new Promise((r) => { i.onload = i.onerror = r; }))));
  await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)));
  const W = innerWidth, H = innerHeight, warn = [], broken = [];
  const name = (el) => { const t = (el.innerText || el.getAttribute('alt') || '').replace(/\s+/g, ' ').trim().slice(0, 40); return el.tagName.toLowerCase() + (el.id ? '#' + el.id : '') + (el.classList[0] ? '.' + el.classList[0] : '') + (t ? ' "' + t + '"' : ''); };
  for (const el of document.body.querySelectorAll('*')) {
    if (warn.length >= 8) break;
    const cs = getComputedStyle(el); if (cs.display === 'none' || cs.visibility === 'hidden') continue;
    const r = el.getBoundingClientRect(); if (!r.width || !r.height) continue;
    const own = [...el.childNodes].some((n) => n.nodeType === 3 && n.textContent.trim());
    if (own && (r.right > W + 1 || r.bottom > H + 1 || r.left < -1 || r.top < -1)) warn.push('chữ ra ngoài khung: ' + name(el));
    else if (own && cs.overflow !== 'visible' && (el.scrollWidth > el.clientWidth + 2 || el.scrollHeight > el.clientHeight + 2)) warn.push('chữ bị cắt (tràn hộp): ' + name(el));
  }
  // chữ bị khối khác (nền màu, ảnh, SVG, chữ khác) đè lên: dò theo khung từng dòng chữ thật
  const solid = (el) => { if (/^(IMG|SVG|CANVAS|VIDEO|PICTURE)$/i.test(el.tagName)) return true; const c = getComputedStyle(el); if (parseFloat(c.opacity) < 0.15) return false; const bg = c.backgroundColor; return (bg && !/rgba\([^)]*,\s*0\)$|transparent/.test(bg)) || c.backgroundImage !== 'none'; };
  const seen = new Set();
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  for (let n = walker.nextNode(); n && warn.length < 8; n = walker.nextNode()) {
    const owner = n.parentElement; if (!n.textContent.trim() || !owner || seen.has(owner)) continue;
    const rg = document.createRange(); rg.selectNodeContents(n);
    for (const r of [...rg.getClientRects()].slice(0, 6)) {
      const pts = [[r.left + 4, r.top + r.height / 2], [r.left + r.width / 2, r.top + r.height / 2], [r.right - 4, r.top + r.height / 2]];
      const hit = pts.map(([x, y]) => { if (x < 0 || y < 0 || x > W || y > H) return null; for (const e of document.elementsFromPoint(x, y)) { if (e === owner || owner.contains(e) || e.contains(owner)) return null; if (solid(e) || [...e.childNodes].some((c) => c.nodeType === 3 && c.textContent.trim())) return e; } return null; }).find(Boolean);
      if (hit) { seen.add(owner); warn.push('chữ bị ' + name(hit) + ' đè lên: ' + name(owner)); break; }
    }
  }
  for (const i of document.images) if (!i.naturalWidth) broken.push(i.getAttribute('src').slice(0, 80));
  const fonts = [...document.fonts].filter((f) => f.status === 'error').map((f) => f.family);
  return { warn, broken, fonts: [...new Set(fonts)], scrollH: document.documentElement.scrollHeight, scrollW: document.documentElement.scrollWidth };
})()`;

const DEFAULT_DIR = () => path.join(require('electron').app.getPath('documents'), 'VanPhongAI', 'Chat', 'outputs');

function wrapHtml(html, w, h, base) {
  let doc = String(html || '').trim();
  if (!/<html[\s>]/i.test(doc)) doc = `<!doctype html><html lang="vi"><head><meta charset="utf-8"></head><body>${doc}</body></html>`;
  // khung cố định đúng khổ ảnh; <base> để ảnh / file cạnh file kết quả dùng đường dẫn tương đối được
  const head = `<meta charset="utf-8">${base ? `<base href="${base}">` : ''}<style>html,body{margin:0;padding:0;width:${w}px;height:${h}px;overflow:hidden}*{-webkit-font-smoothing:antialiased;text-rendering:geometricPrecision}</style>`;
  return /<head[^>]*>/i.test(doc) ? doc.replace(/<head[^>]*>/i, (m) => m + head) : doc.replace(/<html[^>]*>/i, (m) => m + '<head>' + head + '</head>');
}

/**
 * render({ html | html_path, path, width, height, scale, transparent, wait_ms })
 * → [{type:'text'}, {type:'image'}] (ảnh xem trước JPEG ≤ 1024px cho AI soát lại)
 */
async function render(args = {}, { BrowserWindow = require('electron').BrowserWindow, defaultDir = DEFAULT_DIR } = {}) {
  const w = Math.round(Math.min(8000, Math.max(16, Number(args.width) || 1080)));
  const h = Math.round(Math.min(12000, Math.max(16, Number(args.height) || 1080)));
  const scale = Math.min(4, Math.max(1, Number(args.scale) || 2));
  let out = String(args.path || '').trim();
  if (!out) out = path.join(defaultDir(), `thiet-ke-${Date.now()}.png`);
  if (!path.isAbsolute(out)) out = path.join(defaultDir(), out);
  if (!/\.(png|jpe?g|pdf)$/i.test(out)) out += '.png';
  const fmt = /\.pdf$/i.test(out) ? 'pdf' : /\.jpe?g$/i.test(out) ? 'jpg' : 'png';
  fs.mkdirSync(path.dirname(out), { recursive: true });

  let src = '';
  if (args.html_path) {
    src = path.resolve(String(args.html_path));
    if (!fs.existsSync(src)) throw new Error('Không thấy file HTML: ' + src);
  }
  const html = src ? fs.readFileSync(src, 'utf8') : String(args.html || '');
  if (!html.trim()) throw new Error('Cần html (nội dung trang thiết kế) hoặc html_path');
  const base = pathToFileURL((src ? path.dirname(src) : path.dirname(out)) + path.sep).href;
  const tmpDir = path.join(os.tmpdir(), 'vp-design'); fs.mkdirSync(tmpDir, { recursive: true });
  const tmp = path.join(tmpDir, `d-${process.pid}-${Date.now()}-${Math.random().toString(36).slice(2, 7)}.html`);
  fs.writeFileSync(tmp, wrapHtml(html, w, h, base), 'utf8');

  const k = fmt === 'pdf' ? 1 : scale;
  const transparent = fmt === 'png' && !!args.transparent;
  const win = new BrowserWindow({
    show: false, width: w * k, height: h * k, useContentSize: true, enableLargerThanScreen: true, frame: false, transparent,
    backgroundColor: transparent ? '#00000000' : '#ffffff',
    webPreferences: { offscreen: true, sandbox: true, contextIsolation: true, nodeIntegration: false, partition: PARTITION, backgroundThrottling: false, spellcheck: false },
  });
  const wc = win.webContents;
  wc.setWindowOpenHandler(() => ({ action: 'deny' }));
  wc.on('will-navigate', (e) => e.preventDefault());
  try {
    wc.setFrameRate && wc.setFrameRate(30);
    const loaded = wc.loadFile(tmp);
    await Promise.race([loaded, sleep(30000).then(() => { throw new Error('Trang thiết kế tải quá 30 giây (font / ảnh mạng chậm?)'); })]);
    if (k !== 1) wc.setZoomFactor(k);
    await sleep(60);
    const info = await Promise.race([wc.executeJavaScript(SETTLE, true), sleep(20000).then(() => ({ warn: [], broken: [], fonts: [], slow: true }))]);
    await sleep(Math.min(5000, Math.max(0, Number(args.wait_ms) || 150)));
    let bytes, preview;
    if (fmt === 'pdf') {
      bytes = await wc.printToPDF({ printBackground: true, pageSize: { width: w / 96, height: h / 96 }, margins: { marginType: 'none' }, preferCSSPageSize: false });
      const img = await wc.capturePage();
      preview = img.getSize().width > 1024 ? img.resize({ width: 1024 }) : img;
    } else {
      let img = await wc.capturePage();
      const want = { width: w * k, height: h * k };
      const s = img.getSize();
      if (s.width !== want.width || s.height !== want.height) img = img.resize({ ...want, quality: 'best' });
      bytes = fmt === 'jpg' ? img.toJPEG(92) : img.toPNG();
      preview = want.width > 1024 ? img.resize({ width: 1024, quality: 'best' }) : img;
    }
    fs.writeFileSync(out, bytes);
    const notes = [];
    if (info.warn && info.warn.length) notes.push('⚠️ Cần sửa:\n- ' + info.warn.join('\n- '));
    if (info.broken && info.broken.length) notes.push('⚠️ Ảnh không tải được: ' + info.broken.join(', '));
    if (info.fonts && info.fonts.length) notes.push('⚠️ Font không tải được (đang dùng font dự phòng): ' + info.fonts.join(', '));
    if (info.scrollH > h + 2) notes.push(`⚠️ Nội dung cao ${info.scrollH}px > khung ${h}px – phần dưới bị cắt (thu nhỏ chữ / bớt nội dung hoặc tăng height).`);
    if (info.slow) notes.push('⚠️ Trang chờ font / ảnh quá lâu – kiểm tra lại ảnh xem trước.');
    const size = fmt === 'pdf' ? `${w}×${h}px (PDF vector)` : `${w * k}×${h * k}px`;
    const text = `Đã lưu ${fmt.toUpperCase()}: ${out} (${size}).\n` + (notes.length ? notes.join('\n') + '\nSửa rồi render lại cùng đường dẫn.' : 'Không thấy chữ tràn / ảnh lỗi. Vẫn nhìn ảnh xem trước: căn lề, cỡ chữ, tương phản, khoảng trắng đã đẹp chưa – chưa thì sửa và render lại.');
    return [{ type: 'text', text }, { type: 'image', data: preview.toJPEG(85).toString('base64'), mimeType: 'image/jpeg' }];
  } finally {
    if (!win.isDestroyed()) win.destroy();
    fs.rm(tmp, { force: true }, () => {});
  }
}

module.exports = { render, wrapHtml };
