// MCP "vp_computer": cho AI trong tab Chat điều khiển máy tính như người dùng –
// chụp màn hình, bấm/kéo/cuộn chuột, gõ chữ (có tiếng Việt), phím tắt, mở app/link.
// Chạy bằng chính file thực thi của app (ELECTRON_RUN_AS_NODE=1), không cần cài thêm gì trên Windows/Mac.
// Windows: user32 qua PowerShell (VPC.cs). macOS: CoreGraphics qua JXA + screencapture. Linux (X11): xdotool + ImageMagick.
const fs = require('fs');
const os = require('os');
const path = require('path');
const readline = require('readline');
const { spawn, execFile } = require('child_process');

const PLATFORM = process.env.VPC_PLATFORM || process.platform;
const MAX_W = Number(process.env.VPC_MAX_W || 1280);
const MAX_H = Number(process.env.VPC_MAX_H || 800);
const OS_NAME = PLATFORM === 'win32' ? 'Windows' : PLATFORM === 'darwin' ? 'macOS' : 'Linux';
const MOD = PLATFORM === 'darwin' ? 'cmd' : 'ctrl';

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const run = (cmd, args, { input, encoding = 'utf8', timeout = 20000, env } = {}) => new Promise((resolve, reject) => {
  const c = execFile(cmd, args, { encoding, timeout, maxBuffer: 64 * 1024 * 1024, env: env || process.env, windowsHide: true }, (err, out, errOut) => {
    if (err) reject(new Error((errOut && String(errOut).trim()) || err.message)); else resolve(out);
  });
  if (input !== undefined) c.stdin.end(input); else c.stdin.end();
});
const pngSize = (buf) => ({ w: buf.readUInt32BE(16), h: buf.readUInt32BE(20) });
const fit = (w, h) => { const s = Math.min(1, MAX_W / w, MAX_H / h); return { w: Math.round(w * s), h: Math.round(h * s) }; };

// ---------------- Windows ----------------
class WinDriver {
  constructor() { this.queue = []; this.buf = ''; }
  start() {
    if (this.ready) return this.ready;
    const src = fs.readFileSync(path.join(__dirname, 'VPC.cs'), 'utf8');
    const ps = [
      "$ErrorActionPreference = 'Stop'",
      '[Console]::OutputEncoding = [Text.UTF8Encoding]::new($false)',
      `$src = [Text.Encoding]::UTF8.GetString([Convert]::FromBase64String('${Buffer.from(src, 'utf8').toString('base64')}'))`,
      'Add-Type -TypeDefinition $src -ReferencedAssemblies System.Drawing',
      '[VPC]::Init()',
      "[Console]::Out.WriteLine('OK ready'); [Console]::Out.Flush()",
      'while ($true) { $l = [Console]::In.ReadLine(); if ($null -eq $l) { break }; [Console]::Out.WriteLine([VPC]::Run($l)); [Console]::Out.Flush() }',
    ].join('\r\n');
    const file = path.join(os.tmpdir(), `vp-computer-${process.pid}.ps1`);
    fs.writeFileSync(file, '﻿' + ps, 'utf8');
    this.proc = spawn('powershell.exe', ['-NoLogo', '-NoProfile', '-NonInteractive', '-ExecutionPolicy', 'Bypass', '-File', file], { windowsHide: true });
    this.proc.stdout.on('data', (d) => {
      this.buf += d.toString('utf8');
      let i;
      while ((i = this.buf.indexOf('\n')) >= 0) {
        const line = this.buf.slice(0, i).replace(/\r$/, ''); this.buf = this.buf.slice(i + 1);
        const w = this.queue.shift(); if (w) w(line);
      }
    });
    let err = '';
    this.proc.stderr.on('data', (d) => { err += d; });
    this.proc.on('exit', () => { for (const w of this.queue.splice(0)) w('ERR PowerShell dừng: ' + err.trim().slice(-300)); this.ready = null; try { fs.unlinkSync(file); } catch { /* đã xóa */ } });
    this.ready = new Promise((resolve, reject) => this.queue.push((l) => (l.startsWith('OK') ? resolve() : reject(new Error(l.slice(4))))));
    return this.ready;
  }
  async cmd(...parts) {
    await this.start();
    const line = await new Promise((resolve) => { this.queue.push(resolve); this.proc.stdin.write(parts.join('\t') + '\n'); });
    if (!line.startsWith('OK')) throw new Error(line.replace(/^ERR\s*/, ''));
    return line.slice(3);
  }
  async size() { const [w, h] = (await this.cmd('size')).split(' ').map(Number); return { w, h }; }
  async shot() {
    const [w, h, sw, sh, b64] = (await this.cmd('shot', MAX_W, MAX_H)).split(' ');
    return { png: Buffer.from(b64, 'base64'), w: +w, h: +h, sw: +sw, sh: +sh };
  }
  move(x, y) { return this.cmd('move', x, y); }
  click(x, y, button, n) { return this.cmd('click', x, y, button, n); }
  drag(x1, y1, x2, y2) { return this.cmd('drag', x1, y1, x2, y2); }
  scroll(x, y, dy, dx) { return this.cmd('scroll', x ?? -1, y ?? -1, dy, dx); }
  type(text) { return this.cmd('type', Buffer.from(text, 'utf8').toString('base64')); }
  keys(combo) { return this.cmd('keys', combo); }
  async windows() {
    const text = Buffer.from(await this.cmd('windows'), 'base64').toString('utf8');
    return text.split('\n').filter(Boolean).map((line) => {
      const tab = line.indexOf('\t');
      return { id: line.slice(0, tab), title: line.slice(tab + 1) };
    });
  }
  focus(id) { return this.cmd('focus', id); }
  active() { return this.cmd('active'); }
  open(target) { return this.cmd('open', Buffer.from(target, 'utf8').toString('base64')); }
  stop() { if (this.proc) this.proc.kill(); }
}

// ---------------- macOS ----------------
const JXA = `
ObjC.import('Cocoa'); ObjC.import('CoreGraphics'); ObjC.import('ApplicationServices');
function pt(x, y) { try { return $.CGPointMake(x, y); } catch (e) { return { x: x, y: y }; } }
// 1 = kCGMouseEventClickState, 0 = kCGHIDEventTap
function post(t, x, y, b, n) { var e = $.CGEventCreateMouseEvent(null, t, pt(x, y), b); if (n) $.CGEventSetIntegerValueField(e, 1, n); $.CGEventPost(0, e); }
function run(a) {
  var c = a[0];
  if (c === 'trusted') return $.AXIsProcessTrusted() ? 'yes' : 'no';
  if (c === 'size') { var r = $.CGDisplayBounds($.CGMainDisplayID()); return r.size.width + ' ' + r.size.height; }
  if (c === 'front') { var se = Application('System Events'); var p = se.processes.whose({ frontmost: true })[0]; return p ? p.name() : ''; }
  var x = Number(a[1]), y = Number(a[2]);
  if (c === 'move') { post(5, x, y, 0, 0); return 'ok'; }
  if (c === 'click') {
    var b = a[3] === 'right' ? 1 : a[3] === 'middle' ? 2 : 0, n = Number(a[4]) || 1;
    var dn = b === 1 ? 3 : b === 2 ? 25 : 1, up = b === 1 ? 4 : b === 2 ? 26 : 2;
    post(5, x, y, 0, 0); delay(0.05);
    for (var i = 1; i <= n; i++) { post(dn, x, y, b, i); post(up, x, y, b, i); delay(0.06); }
    return 'ok';
  }
  if (c === 'drag') {
    var x2 = Number(a[3]), y2 = Number(a[4]);
    post(5, x, y, 0, 0); delay(0.08); post(1, x, y, 0, 1);
    for (var k = 1; k <= 20; k++) { post(6, x + (x2 - x) * k / 20, y + (y2 - y) * k / 20, 0, 0); delay(0.015); }
    post(2, x2, y2, 0, 1); return 'ok';
  }
  if (c === 'scroll') {
    if (a[1] !== '-1') post(5, x, y, 0, 0);
    var dy = Number(a[3]) || 0, dx = Number(a[4]) || 0;
    if (typeof $.CGEventCreateScrollWheelEvent2 === 'function') { $.CGEventPost(0, $.CGEventCreateScrollWheelEvent2(null, 1, 2, -dy * 3, -dx * 3, 0)); return 'ok'; }
    var se2 = Application('System Events'); for (var j = 0; j < Math.abs(dy); j++) se2.keyCode(dy > 0 ? 121 : 116); return 'ok';
  }
  if (c === 'keys') {
    var se3 = Application('System Events');
    var mods = [], key = '';
    a[1].toLowerCase().replace(/\\s+/g, '').split('+').forEach(function (p) {
      if (p === 'cmd' || p === 'command' || p === 'meta' || p === 'win' || p === 'super') mods.push('command down');
      else if (p === 'ctrl' || p === 'control') mods.push('control down');
      else if (p === 'alt' || p === 'option') mods.push('option down');
      else if (p === 'shift') mods.push('shift down');
      else key = p;
    });
    var codes = { enter: 36, 'return': 36, tab: 48, space: 49, backspace: 51, esc: 53, escape: 53, 'delete': 117, del: 117, left: 123, right: 124, down: 125, up: 126, home: 115, end: 119, pageup: 116, pagedown: 121,
      f1: 122, f2: 120, f3: 99, f4: 118, f5: 96, f6: 97, f7: 98, f8: 100, f9: 101, f10: 109, f11: 103, f12: 111 };
    if (codes[key] !== undefined) se3.keyCode(codes[key], { using: mods }); else se3.keystroke(key, { using: mods });
    return 'ok';
  }
  throw new Error('lệnh lạ ' + c);
}`;

class MacDriver {
  async js(...args) { return String(await run('osascript', ['-l', 'JavaScript', '-e', JXA, ...args.map(String)])).trim(); }
  async check() {
    if (this.ok) return;
    if ((await this.js('trusted')) !== 'yes') throw new Error('macOS chưa cho Văn Phòng AI điều khiển máy. Mở System Settings → Privacy & Security → Accessibility, bật VanPhongAI (và Screen Recording cho chụp màn hình), rồi thử lại.');
    this.ok = true;
  }
  async size() { const [w, h] = (await this.js('size')).split(' ').map(Number); return { w, h }; }
  async shot() {
    const pts = await this.size();
    const f = path.join(os.tmpdir(), `vp-shot-${process.pid}.png`);
    const g = path.join(os.tmpdir(), `vp-shot-${process.pid}-s.png`);
    await run('screencapture', ['-x', '-C', '-m', '-t', 'png', f]);
    const t = fit(pts.w, pts.h);
    await run('sips', ['-z', String(t.h), String(t.w), f, '--out', g]);
    const png = fs.readFileSync(g); try { fs.unlinkSync(f); fs.unlinkSync(g); } catch { /* bỏ qua */ }
    const s = pngSize(png);
    return { png, w: s.w, h: s.h, sw: pts.w, sh: pts.h };
  }
  async move(x, y) { await this.check(); return this.js('move', x, y); }
  async click(x, y, b, n) { await this.check(); return this.js('click', x, y, b, n); }
  async drag(x1, y1, x2, y2) { await this.check(); return this.js('drag', x1, y1, x2, y2); }
  async scroll(x, y, dy, dx) { await this.check(); return this.js('scroll', x ?? -1, y ?? -1, dy, dx); }
  async keys(combo) { await this.check(); return this.js('keys', combo); }
  // gõ qua Clipboard (dán) để có dấu tiếng Việt, rồi trả lại nội dung Clipboard cũ
  async type(text) {
    await this.check();
    const env = { ...process.env, LANG: 'en_US.UTF-8' };
    const old = await run('pbpaste', [], { env }).catch(() => '');
    await run('pbcopy', [], { input: text, env });
    await this.js('keys', 'cmd+v');
    await sleep(250);
    await run('pbcopy', [], { input: old, env }).catch(() => { /* bỏ qua */ });
  }
  active() { return this.js('front'); }
  open(target) { return /^[a-z]+:\/\//i.test(target) || fs.existsSync(target) ? run('open', [target]) : run('open', ['-a', target]); }
  stop() {}
}

// ---------------- Linux (X11) ----------------
const XKEY = { enter: 'Return', return: 'Return', esc: 'Escape', escape: 'Escape', backspace: 'BackSpace', delete: 'Delete', del: 'Delete', tab: 'Tab', space: 'space', up: 'Up', down: 'Down', left: 'Left', right: 'Right', home: 'Home', end: 'End', pageup: 'Prior', pagedown: 'Next', win: 'super', cmd: 'super', command: 'super', meta: 'super', ctrl: 'ctrl', control: 'ctrl', alt: 'alt', option: 'alt', shift: 'shift' };
class LinuxDriver {
  async x(...args) {
    if (!process.env.DISPLAY) throw new Error('Không có màn hình X11 (DISPLAY). Trên Ubuntu chọn phiên "Ubuntu on Xorg" ở màn hình đăng nhập để AI điều khiển được máy.');
    // xdotool cần locale UTF-8 để gõ chữ có dấu
    try { return String(await run('xdotool', args.map(String), { env: { ...process.env, LC_ALL: 'C.UTF-8', LANG: 'C.UTF-8' } })).trim(); } catch (e) {
      if (/ENOENT|not found/i.test(e.message)) throw new Error('Thiếu xdotool – chạy: sudo apt install xdotool imagemagick');
      throw e;
    }
  }
  async size() { const [w, h] = (await this.x('getdisplaygeometry')).split(/\s+/).map(Number); return { w, h }; }
  async shot() {
    const s = await this.size(); const t = fit(s.w, s.h);
    let png;
    try { png = await run('import', ['-silent', '-window', 'root', '-resize', `${t.w}x${t.h}!`, 'png:-'], { encoding: 'buffer' }); } catch (e) {
      throw new Error(/ENOENT/.test(e.message) ? 'Thiếu ImageMagick – chạy: sudo apt install imagemagick' : e.message);
    }
    return { png, w: t.w, h: t.h, sw: s.w, sh: s.h };
  }
  move(x, y) { return this.x('mousemove', x, y); }
  click(x, y, b, n) { return this.x('mousemove', x, y, 'click', '--repeat', n, '--delay', 80, b === 'right' ? 3 : b === 'middle' ? 2 : 1); }
  async drag(x1, y1, x2, y2) { await this.x('mousemove', x1, y1, 'mousedown', 1); await sleep(80); await this.x('mousemove', x2, y2); await sleep(80); return this.x('mouseup', 1); }
  async scroll(x, y, dy, dx) {
    if (x != null && y != null) await this.x('mousemove', x, y);
    if (dy) await this.x('click', '--repeat', Math.abs(dy), '--delay', 30, dy > 0 ? 5 : 4);
    if (dx) await this.x('click', '--repeat', Math.abs(dx), '--delay', 30, dx > 0 ? 7 : 6);
  }
  // Chữ có dấu không có trên bàn phím: xdotool tự đổi bảng phím ngay trước khi bấm, app nhận chưa kịp thì rớt chữ.
  // Nên gán sẵn các chữ đó vào phím trống (xmodmap), chờ app nhận bảng phím mới rồi mới gõ, gõ xong trả lại phím trống.
  async type(text) {
    text = String(text);
    const spare = /[^\x00-\x7f]/.test(text) ? await this._spareKeys() : [];
    if (!spare.length) return this._typeSlow(text);
    const chunks = []; let cur = ''; let chars = new Set();
    for (const ch of text) {
      if (ch.codePointAt(0) > 0x7f && !chars.has(ch)) {
        if (chars.size >= spare.length) { chunks.push([cur, chars]); cur = ''; chars = new Set(); }
        chars.add(ch);
      }
      cur += ch;
    }
    if (cur) chunks.push([cur, chars]);
    for (const [part, set] of chunks) {
      const list = [...set];
      const sym = (c) => 'U' + c.codePointAt(0).toString(16).toUpperCase().padStart(4, '0');
      try {
        if (list.length) { await this._xmodmap(list.map((c, i) => `keycode ${spare[i]} = ${sym(c)} ${sym(c)}`)); await sleep(150); }
      } catch { await this._typeSlow(part); continue; } // không gán được → gõ chậm như cũ
      try { await this.x('type', '--delay', 12, '--', part); } finally {
        if (list.length) { await sleep(80); await this._xmodmap(list.map((c, i) => `keycode ${spare[i]} =`)).catch(() => {}); }
      }
    }
  }
  _xmodmap(lines) { return run('xmodmap', lines.flatMap((l) => ['-e', l]), { env: { ...process.env, LC_ALL: 'C.UTF-8' } }); }
  // các phím chưa gán gì (chừa lại 1 phím cho xdotool tự dùng)
  async _spareKeys() {
    try {
      const out = String(await run('xmodmap', ['-pke']));
      return out.split('\n').map((l) => l.match(/^keycode\s+(\d+)\s*=\s*$/)).filter(Boolean).map((m) => +m[1]).filter((k) => k > 8).slice(0, -1).slice(0, 32);
    } catch { return []; } // chưa có xmodmap (gói x11-xserver-utils)
  }
  async _typeSlow(text) {
    for (const seg of text.match(/[\x00-\x7f]+|[^\x00-\x7f]/gu) || []) {
      if (/^[\x00-\x7f]+$/.test(seg)) await this.x('type', '--delay', 12, '--', seg);
      else { await this.x('type', '--delay', 40, '--', seg); await sleep(40); }
    }
  }
  keys(combo) { return this.x('key', combo.toLowerCase().replace(/\s+/g, '').split('+').map((k) => XKEY[k] || k).join('+')); }
  active() { return this.x('getactivewindow', 'getwindowname').catch(() => ''); }
  open(target) { const c = spawn(/^[a-z]+:\/\//i.test(target) || fs.existsSync(target) ? 'xdg-open' : target, /^[a-z]+:\/\//i.test(target) || fs.existsSync(target) ? [target] : [], { detached: true, stdio: 'ignore' }); c.on('error', () => {}); c.unref(); return Promise.resolve(); }
  stop() {}
}

const driver = PLATFORM === 'win32' ? new WinDriver() : PLATFORM === 'darwin' ? new MacDriver() : new LinuxDriver();

// ---------------- toạ độ: AI dùng toạ độ trên ảnh chụp, đổi sang toạ độ thật của màn hình ----------------
let geo = null; // { w, h, sw, sh } của ảnh chụp gần nhất
async function ensureGeo() { if (!geo) { const s = await driver.size(); const t = fit(s.w, s.h); geo = { w: t.w, h: t.h, sw: s.w, sh: s.h }; } return geo; }
async function toScreen(x, y) {
  const g = await ensureGeo();
  const nx = Number(x); const ny = Number(y);
  if (!Number.isFinite(nx) || !Number.isFinite(ny)) throw new Error('Thiếu toạ độ x, y');
  if (nx < 0 || ny < 0 || nx >= g.w || ny >= g.h) throw new Error(`Toạ độ (${nx}, ${ny}) nằm ngoài ảnh chụp ${g.w}x${g.h}`);
  return [Math.round(nx * g.sw / g.w), Math.round(ny * g.sh / g.h)];
}

async function screenshot(note) {
  const s = await driver.shot();
  geo = { w: s.w, h: s.h, sw: s.sw, sh: s.sh };
  const win = await Promise.resolve(driver.active()).catch(() => '');
  const text = `${note ? note + '\n' : ''}Ảnh màn hình ${s.w}x${s.h} (màn hình thật ${s.sw}x${s.sh}, ${OS_NAME}). Cửa sổ đang mở phía trước: ${win || 'không rõ'}. Mọi toạ độ x, y dùng theo ảnh này (gốc 0,0 ở góc trên trái).`;
  return [{ type: 'text', text }, { type: 'image', data: s.png.toString('base64'), mimeType: 'image/png' }];
}

// sau mỗi thao tác chụp lại màn hình để AI thấy kết quả ngay (đỡ một lượt gọi)
async function after(note, args) {
  if (args && args.screenshot === false) return [{ type: 'text', text: note }];
  await sleep(Math.min(5000, Math.max(200, Number(args && args.wait_ms) || 700)));
  return screenshot(note);
}

const XY = { x: { type: 'number', description: 'Toạ độ ngang trên ảnh chụp gần nhất' }, y: { type: 'number', description: 'Toạ độ dọc trên ảnh chụp gần nhất' } };
const SHOT = { screenshot: { type: 'boolean', description: 'Chụp lại màn hình sau thao tác (mặc định true)' } };
const WINDOW_TOOLS = PLATFORM === 'win32' ? [
  { name: 'list_windows', description: 'List visible Windows apps and their IDs before selecting a target.', inputSchema: { type: 'object', properties: {} }, annotations: { readOnlyHint: true, title: 'List windows' } },
  { name: 'focus_window', description: 'Restore and focus a listed window, then return a fresh screenshot.', inputSchema: { type: 'object', properties: { window_id: { type: 'string' } }, required: ['window_id'] }, annotations: { readOnlyHint: false, title: 'Focus window' } },
] : [];
const TOOLS = [
  ...WINDOW_TOOLS,
  { name: 'screenshot', description: `Chụp màn hình máy ${OS_NAME} của người dùng (kèm con trỏ chuột). Luôn chụp trước khi bấm để biết toạ độ.`, inputSchema: { type: 'object', properties: {} }, annotations: { readOnlyHint: true, title: 'Chụp màn hình' } },
  { name: 'click', description: 'Bấm chuột tại (x, y) theo ảnh chụp. button: left|right|middle; double: bấm đúp.', inputSchema: { type: 'object', properties: { ...XY, button: { type: 'string', enum: ['left', 'right', 'middle'] }, double: { type: 'boolean' }, ...SHOT }, required: ['x', 'y'] }, annotations: { title: 'Bấm chuột' } },
  { name: 'move', description: 'Di chuyển chuột tới (x, y) (ví dụ để hiện menu khi rê chuột).', inputSchema: { type: 'object', properties: { ...XY, ...SHOT }, required: ['x', 'y'] }, annotations: { title: 'Di chuột' } },
  { name: 'drag', description: 'Kéo thả chuột từ (from_x, from_y) tới (to_x, to_y).', inputSchema: { type: 'object', properties: { from_x: { type: 'number' }, from_y: { type: 'number' }, to_x: { type: 'number' }, to_y: { type: 'number' }, ...SHOT }, required: ['from_x', 'from_y', 'to_x', 'to_y'] }, annotations: { title: 'Kéo thả' } },
  { name: 'scroll', description: 'Cuộn tại (x, y) (bỏ trống = vị trí chuột hiện tại). amount > 0 cuộn xuống, < 0 cuộn lên (mỗi đơn vị ~ 3 dòng); horizontal > 0 sang phải.', inputSchema: { type: 'object', properties: { ...XY, amount: { type: 'number' }, horizontal: { type: 'number' }, ...SHOT }, required: ['amount'] }, annotations: { title: 'Cuộn' } },
  { name: 'type_text', description: 'Gõ chữ vào ô đang chọn (hỗ trợ tiếng Việt có dấu, xuống dòng).', inputSchema: { type: 'object', properties: { text: { type: 'string' }, ...SHOT }, required: ['text'] }, annotations: { title: 'Gõ chữ' } },
  { name: 'press_keys', description: `Nhấn phím hoặc tổ hợp phím, ví dụ "enter", "esc", "tab", "${MOD}+s", "${MOD}+l", "alt+tab", "pagedown". Máy ${OS_NAME}${PLATFORM === 'darwin' ? ' (dùng cmd thay cho ctrl)' : ''}.`, inputSchema: { type: 'object', properties: { keys: { type: 'string' }, ...SHOT }, required: ['keys'] }, annotations: { title: 'Nhấn phím' } },
  { name: 'open', description: 'Mở app (tên app, ví dụ "notepad", "excel", "Google Chrome"), trang web (URL) hoặc file.', inputSchema: { type: 'object', properties: { target: { type: 'string' }, ...SHOT }, required: ['target'] }, annotations: { title: 'Mở app / link' } },
  { name: 'wait', description: 'Chờ vài giây cho app/trang tải xong rồi chụp lại màn hình.', inputSchema: { type: 'object', properties: { seconds: { type: 'number' } } }, annotations: { readOnlyHint: true, title: 'Chờ' } },
];

async function call(name, a = {}) {
  switch (name) {
    case 'list_windows': {
      if (!driver.windows) throw new Error('Window selection is only available on Windows');
      return [{ type: 'text', text: JSON.stringify(await driver.windows()) }];
    }
    case 'focus_window': {
      if (!driver.focus) throw new Error('Window selection is only available on Windows');
      if (!/^[1-9][0-9]*$/.test(String(a.window_id || ''))) throw new Error('Invalid window ID; call list_windows first');
      await driver.focus(a.window_id);
      return after('Selected window ' + a.window_id, {});
    }
    case 'screenshot': return screenshot();
    case 'wait': await sleep(Math.min(30, Math.max(0.2, Number(a.seconds) || 1)) * 1000); return screenshot(`Đã chờ ${a.seconds || 1} giây.`);
    case 'click': { const [x, y] = await toScreen(a.x, a.y); await driver.click(x, y, a.button || 'left', a.double ? 2 : 1); return after(`Đã ${a.double ? 'bấm đúp' : 'bấm'}${a.button && a.button !== 'left' ? ' chuột ' + a.button : ''} tại (${a.x}, ${a.y}).`, a); }
    case 'move': { const [x, y] = await toScreen(a.x, a.y); await driver.move(x, y); return after(`Đã di chuột tới (${a.x}, ${a.y}).`, a); }
    case 'drag': { const [x1, y1] = await toScreen(a.from_x, a.from_y); const [x2, y2] = await toScreen(a.to_x, a.to_y); await driver.drag(x1, y1, x2, y2); return after(`Đã kéo từ (${a.from_x}, ${a.from_y}) tới (${a.to_x}, ${a.to_y}).`, a); }
    case 'scroll': {
      let x = null; let y = null;
      if (a.x !== undefined && a.y !== undefined) [x, y] = await toScreen(a.x, a.y);
      const dy = Math.max(-50, Math.min(50, Math.round(Number(a.amount) || 0))); const dx = Math.max(-50, Math.min(50, Math.round(Number(a.horizontal) || 0)));
      await driver.scroll(x, y, dy, dx);
      return after(`Đã cuộn ${dy > 0 ? 'xuống' : dy < 0 ? 'lên' : ''} ${Math.abs(dy) || ''}${dx ? ` ngang ${dx}` : ''}.`, a);
    }
    case 'type_text': { const t = String(a.text ?? ''); if (!t) throw new Error('Thiếu chữ cần gõ'); if (t.length > 5000) throw new Error('Chữ quá dài (tối đa 5000 ký tự)'); await driver.type(t); return after(`Đã gõ ${t.length} ký tự.`, a); }
    case 'press_keys': { const k = String(a.keys || '').trim(); if (!k) throw new Error('Thiếu phím'); await driver.keys(k); return after(`Đã nhấn ${k}.`, a); }
    case 'open': { const t = String(a.target || '').trim(); if (!t) throw new Error('Thiếu tên app / link'); await driver.open(t); return after(`Đã mở ${t}.`, { ...a, wait_ms: a.wait_ms || 2500 }); }
    default: throw new Error('Công cụ không tồn tại: ' + name);
  }
}

// ---------------- MCP stdio ----------------
const send = (m) => process.stdout.write(JSON.stringify(m) + '\n');
let chain = Promise.resolve(); // thao tác chạy lần lượt, không chồng lên nhau
readline.createInterface({ input: process.stdin }).on('line', (line) => {
  let m; try { m = JSON.parse(line); } catch { return; }
  if (m.method === 'initialize') {
    return send({ jsonrpc: '2.0', id: m.id, result: { protocolVersion: (m.params && m.params.protocolVersion) || '2025-06-18', capabilities: { tools: {} }, serverInfo: { name: 'vp_computer', title: 'Điều khiển máy tính (Văn Phòng AI)', version: '1.0.0' }, instructions: `Điều khiển máy ${OS_NAME} của người dùng: chụp màn hình rồi bấm/gõ theo toạ độ trên ảnh.` } });
  }
  if (m.method === 'tools/list') return send({ jsonrpc: '2.0', id: m.id, result: { tools: TOOLS } });
  if (m.method === 'tools/call') {
    chain = chain.then(async () => {
      try { send({ jsonrpc: '2.0', id: m.id, result: { content: await call(m.params.name, m.params.arguments || {}) } }); } catch (e) { send({ jsonrpc: '2.0', id: m.id, result: { content: [{ type: 'text', text: 'Lỗi: ' + e.message }], isError: true } }); }
    });
    return undefined;
  }
  if (m.method === 'ping') return send({ jsonrpc: '2.0', id: m.id, result: {} });
  if (m.id !== undefined && m.method) return send({ jsonrpc: '2.0', id: m.id, error: { code: -32601, message: 'Không hỗ trợ ' + m.method } });
  return undefined;
});
process.stdin.on('end', () => { driver.stop(); process.exit(0); });

