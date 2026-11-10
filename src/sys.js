// Tiện ích hệ thống dùng chung: chạy lệnh, dừng tiến trình, mở cửa sổ Terminal, PATH, registry, gọi HTTP.
const os = require('os');
const fs = require('fs');
const path = require('path');
const { spawn, execFileSync } = require('child_process');

const IS_WIN = process.platform === 'win32';
const IS_MAC = process.platform === 'darwin';
const HOME = os.homedir();
const NOT_FOUND = /not recognized|không được nhận|command not found/i;

// ---------- tham số dòng lệnh ----------
// Windows chạy CLI qua cmd.exe (để gọi được file .cmd của npm) nên phải tự đặt dấu nháy.
function quoteArg(a) {
  if (!IS_WIN) return a;
  if (a === '') return '""';
  return /[\s"&|<>^%]/.test(a) ? '"' + a.replace(/"/g, '""') + '"' : a;
}

function splitArgs(s) {
  if (!s || !s.trim()) return [];
  const out = []; let cur = ''; let q = false;
  for (const ch of s) {
    if (ch === '"') { q = !q; continue; }
    if (/\s/.test(ch) && !q) { if (cur) { out.push(cur); cur = ''; } continue; }
    cur += ch;
  }
  if (cur) out.push(cur);
  return out;
}

const stripAnsi = (s) => String(s).replace(/\x1b\[[0-9;?]*[A-Za-z]/g, '');
const firstLine = (s) => String(s || '').trim().split(/\r?\n/)[0];

// lỗi quen thuộc của CLI → câu dễ hiểu (thay cho stack trace tiếng Anh)
const GEMINI_PERSONAL = /IneligibleTierError|no longer supported for Gemini Code Assist for individuals/i;
const GEMINI_PERSONAL_MSG = 'Google đã ngừng cho tài khoản Google cá nhân dùng Gemini CLI (chuyển sang Antigravity từ 18/6/2026). Hãy dùng thẻ Gemini (Antigravity) ở trên – đăng nhập cùng tài khoản Google – hoặc dùng API key Gemini trả phí / tài khoản doanh nghiệp.';
function friendlyCliError(cmd, code, msg) {
  if (GEMINI_PERSONAL.test(msg)) return GEMINI_PERSONAL_MSG;
  return `Lệnh "${cmd}" báo lỗi (mã ${code}):\n${msg || '(không có thông báo)'}`;
}

// ---------- font tiếng Việt có sẵn trên máy (để AI tạo PDF / ảnh / biểu đồ không bị ô vuông) ----------
function fontCandidates(platform = process.platform, env = process.env) {
  if (platform === 'win32') {
    const w = path.win32; const d = w.join(env.WINDIR || env.SystemRoot || 'C:\\Windows', 'Fonts');
    return { sans: [w.join(d, 'arial.ttf'), w.join(d, 'segoeui.ttf'), w.join(d, 'tahoma.ttf')], sansBold: [w.join(d, 'arialbd.ttf'), w.join(d, 'segoeuib.ttf'), w.join(d, 'tahomabd.ttf')],
      serif: [w.join(d, 'times.ttf')], serifBold: [w.join(d, 'timesbd.ttf')] };
  }
  if (platform === 'darwin') {
    const s = '/System/Library/Fonts/Supplemental';
    return { sans: [`${s}/Arial.ttf`, '/Library/Fonts/Arial.ttf', `${s}/Tahoma.ttf`], sansBold: [`${s}/Arial Bold.ttf`, '/Library/Fonts/Arial Bold.ttf', `${s}/Tahoma Bold.ttf`],
      serif: [`${s}/Times New Roman.ttf`], serifBold: [`${s}/Times New Roman Bold.ttf`] };
  }
  const t = '/usr/share/fonts/truetype';
  return { sans: [`${t}/dejavu/DejaVuSans.ttf`, `${t}/noto/NotoSans-Regular.ttf`, `${t}/liberation/LiberationSans-Regular.ttf`, `${t}/liberation2/LiberationSans-Regular.ttf`, `${t}/msttcorefonts/Arial.ttf`],
    sansBold: [`${t}/dejavu/DejaVuSans-Bold.ttf`, `${t}/noto/NotoSans-Bold.ttf`, `${t}/liberation/LiberationSans-Bold.ttf`, `${t}/liberation2/LiberationSans-Bold.ttf`, `${t}/msttcorefonts/Arial_Bold.ttf`],
    serif: [`${t}/dejavu/DejaVuSerif.ttf`, `${t}/liberation/LiberationSerif-Regular.ttf`, `${t}/liberation2/LiberationSerif-Regular.ttf`, `${t}/msttcorefonts/Times_New_Roman.ttf`],
    serifBold: [`${t}/dejavu/DejaVuSerif-Bold.ttf`, `${t}/liberation/LiberationSerif-Bold.ttf`, `${t}/liberation2/LiberationSerif-Bold.ttf`, `${t}/msttcorefonts/Times_New_Roman_Bold.ttf`] };
}
let fontCache = null;
function vietFonts(exists = fs.existsSync, platform = process.platform, env = process.env) {
  if (fontCache && exists === fs.existsSync) return fontCache;
  const c = fontCandidates(platform, env);
  const pick = (list) => list.find((f) => { try { return exists(f); } catch { return false; } }) || '';
  const r = { sans: pick(c.sans), sansBold: pick(c.sansBold), serif: pick(c.serif), serifBold: pick(c.serifBold) };
  if (exists === fs.existsSync) fontCache = r;
  return r;
}

// ---------- tiến trình ----------
function spawnCli(cmd, args, { cwd, shell, env } = {}) {
  // Windows: lệnh trong PATH (codex.cmd, npm…) cần cmd.exe; file .exe có đường dẫn đầy đủ thì chạy thẳng
  const useShell = shell === undefined ? IS_WIN && !(path.isAbsolute(cmd) && /\.exe$/i.test(cmd)) : shell;
  return spawn(cmd, useShell ? args.map(quoteArg) : args, {
    cwd, shell: useShell, windowsHide: true,
    // Python mặc định UTF-8 (Windows hay dùng cp1252 → lỗi font / UnicodeEncodeError khi AI ghi file tiếng Việt)
    env: { ...process.env, NO_COLOR: '1', FORCE_COLOR: '0', PYTHONUTF8: '1', PYTHONIOENCODING: 'utf-8', ...(env || {}) },
  });
}

// dừng cả cây tiến trình (CLI thường sinh thêm tiến trình con)
function killTree(child) {
  try {
    if (IS_WIN) spawn('taskkill', ['/pid', String(child.pid), '/T', '/F'], { windowsHide: true });
    else child.kill('SIGTERM');
  } catch { /* đã dừng */ }
}

// Chạy 1 lệnh, đưa input vào stdin, trả { out, err, code }. Hủy được qua AbortSignal.
function runProcess(cmd, args, input, { cwd, timeoutMs = 60000, signal, shell, allowFail, env } = {}) {
  return new Promise((resolve, reject) => {
    let child;
    try { child = spawnCli(cmd, args, { cwd, shell, env }); } catch (e) { return reject(e); }
    let out = ''; let err = ''; let done = false;
    const finish = (fn, v) => {
      if (done) return;
      done = true; clearTimeout(timer);
      if (signal) signal.removeEventListener('abort', onAbort);
      fn(v);
    };
    const timer = setTimeout(() => { killTree(child); finish(reject, new Error(`Quá thời gian chờ (${Math.round(timeoutMs / 1000)} giây)`)); }, timeoutMs);
    const onAbort = () => { killTree(child); finish(reject, new Error('Đã dừng')); };
    if (signal) { if (signal.aborted) return onAbort(); signal.addEventListener('abort', onAbort); }
    child.stdout.on('data', (d) => { out += d.toString('utf8'); });
    child.stderr.on('data', (d) => { err += d.toString('utf8'); });
    child.on('error', (e) => finish(reject, new Error(e.code !== 'ENOENT' ? e.message
      : /(^|[\\/])codex(\.cmd|\.exe)?$/i.test(cmd) ? 'Máy chưa có Codex. Bấm "Cài đặt SIMI", dán key team – app tự cài Codex, không cần PowerShell.'
        : `Không tìm thấy lệnh "${cmd}". Đã cài CLI này chưa?`)));
    child.on('close', (code) => {
      const notFound = NOT_FOUND.test(err + out);
      if (code === 0 || (allowFail && !notFound)) return finish(resolve, { out, err, code });
      const msg = (err || out || '').trim().split('\n').slice(-6).join('\n');
      finish(reject, new Error(notFound ? `Không tìm thấy lệnh "${cmd}". Đã cài CLI này chưa?` : friendlyCliError(cmd, code, (err + '\n' + out).match(GEMINI_PERSONAL) ? (err + out) : msg)));
    });
    child.stdin.on('error', () => { /* tiến trình đóng sớm */ });
    child.stdin.end(input || '', 'utf8');
  });
}

// ---------- mở cửa sổ Terminal cho người dùng tự thao tác (đăng nhập / cài đặt) ----------
// powershell: chạy bằng PowerShell (Windows) thay vì cmd; dùng -EncodedCommand để không vướng dấu nháy, ký tự |
function openTerminal(cmd, { title = 'Van Phong AI', powershell = false, banner = '' } = {}) {
  if (IS_WIN) {
    if (powershell) {
      const script = `$Host.UI.RawUI.WindowTitle = '${title}'; ${banner ? `Write-Host '${banner}' -ForegroundColor Cyan; ` : ''}${cmd}`;
      const enc = Buffer.from(script, 'utf16le').toString('base64');
      spawn('cmd.exe', ['/c', 'start', title, 'powershell.exe', '-NoExit', '-NoProfile', '-ExecutionPolicy', 'Bypass', '-EncodedCommand', enc], { detached: true, windowsHide: false, cwd: HOME }).unref();
    } else {
      spawn('cmd.exe', ['/c', 'start', title, 'cmd.exe', '/k', cmd], { detached: true, windowsHide: false, shell: false, cwd: HOME }).unref();
    }
  } else if (IS_MAC) {
    const esc = cmd.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
    spawn('osascript', ['-e', `tell application "Terminal" to do script "${esc}"`, '-e', 'tell application "Terminal" to activate'], { detached: true }).unref();
  } else {
    spawn('x-terminal-emulator', ['-e', 'bash', '-lc', `${cmd}; exec bash`], { detached: true }).unref();
  }
  return cmd;
}

// ---------- Windows registry ----------
function regValue(key, name) {
  if (!IS_WIN) return '';
  try {
    const out = execFileSync('reg', ['query', key, '/v', name], { encoding: 'utf8', windowsHide: true, timeout: 4000 });
    const m = out.match(new RegExp(name + '\\s+REG(?:_EXPAND)?_SZ\\s+(.+)', 'i'));
    return m ? m[1].trim() : '';
  } catch { return ''; }
}
const userEnv = (name) => regValue('HKCU\\Environment', name);

// ---------- PATH: nhận công cụ vừa cài mà không cần mở lại app ----------
function refreshPath() {
  const parts = [];
  if (IS_WIN) {
    for (const key of ['HKCU\\Environment', 'HKLM\\SYSTEM\\CurrentControlSet\\Control\\Session Manager\\Environment']) {
      const v = regValue(key, 'Path');
      if (v) parts.push(...v.split(';').map((p) => p.replace(/%([^%]+)%/g, (_, n) => process.env[n] || `%${n}%`)));
    }
    const L = process.env.LOCALAPPDATA || path.join(HOME, 'AppData', 'Local');
    const R = process.env.APPDATA || path.join(HOME, 'AppData', 'Roaming');
    parts.push(path.join(R, 'npm'), path.join(HOME, '.local', 'bin'), path.join(L, 'agy', 'bin'), path.join(L, 'Programs', 'Ollama'),
      path.join(L, 'Microsoft', 'WinGet', 'Links'), path.join(L, 'Microsoft', 'WindowsApps'));
  } else {
    try {
      const sh = process.env.SHELL || (IS_MAC ? '/bin/zsh' : '/bin/bash');
      const out = execFileSync(sh, ['-ilc', 'printf "__VP__%s__VP__" "$PATH"'], { encoding: 'utf8', timeout: 6000, stdio: ['ignore', 'pipe', 'ignore'] });
      const m = out.match(/__VP__(.*)__VP__/);
      if (m) parts.push(...m[1].split(':'));
    } catch { /* bỏ qua */ }
    parts.push('/opt/homebrew/bin', '/usr/local/bin', `${HOME}/.local/bin`, `${HOME}/.npm-global/bin`, `${HOME}/.claude/local`, `${HOME}/.volta/bin`, `${HOME}/.bun/bin`);
  }
  const sep = IS_WIN ? ';' : ':';
  process.env.PATH = [...new Set([...(process.env.PATH || '').split(sep), ...parts].filter(Boolean))].join(sep);
}

// ---------- HTTP JSON ----------
// trang lỗi HTML (Cloudflare, proxy…) → một câu dễ hiểu thay vì cả đống thẻ HTML
function htmlError(txt, status) {
  if (!/^\s*</.test(txt || '')) return '';
  const cf = /cloudflare|cf-error|cf-wrapper/i.test(txt);
  if (cf && [502, 503, 504, 520, 521, 522, 523, 524, 525, 526, 530].includes(status)) {
    return status === 524 ? 'máy chủ xử lý quá lâu nên Cloudflare ngắt kết nối – thử lại với yêu cầu ngắn hơn'
      : 'Cloudflare không nhận được phản hồi hợp lệ từ Gateway (Gateway đang khởi động lại, quá tải hoặc gặp lỗi) – thử lại sau ít phút, vẫn lỗi thì báo admin';
  }
  const title = /<title[^>]*>([^<]{1,160})<\/title>/i.exec(txt);
  return title ? `máy chủ trả về trang lỗi "${title[1].trim()}"` : 'máy chủ trả về trang lỗi thay vì dữ liệu';
}

// fetchJson(url, { method, body, headers, timeoutMs, signal, name }) – thông báo lỗi tiếng Việt, có hẹn giờ và hủy.
async function fetchJson(url, { method = 'GET', body, headers = {}, timeoutMs = 12000, signal, name = 'Dịch vụ' } = {}) {
  const ac = new AbortController();
  const onAbort = () => ac.abort();
  if (signal) signal.addEventListener('abort', onAbort);
  const timer = setTimeout(() => ac.abort(), timeoutMs);
  try {
    const res = await fetch(url, {
      method, signal: ac.signal,
      headers: body ? { 'content-type': 'application/json', ...headers } : headers,
      body: body ? JSON.stringify(body) : undefined,
    });
    const txt = await res.text();
    let data = null; try { data = JSON.parse(txt); } catch { /* không phải JSON */ }
    if (!res.ok) {
      const m = (data && (data.error?.message || data.error || data.detail || data.message)) || htmlError(txt, res.status) || txt.slice(0, 300);
      throw new Error(`${name} báo lỗi ${res.status}: ${typeof m === 'string' ? m : JSON.stringify(m)}`);
    }
    if (data === null) throw new Error(`${name} trả về dữ liệu không đọc được`);
    return data;
  } catch (e) {
    if (e.name === 'AbortError') throw new Error(signal && signal.aborted ? 'Đã dừng' : `${name} không phản hồi (quá ${Math.round(timeoutMs / 1000)} giây)`);
    const code = e.cause && e.cause.code;
    if (/ECONNREFUSED/.test(code || '')) throw new Error(`Không kết nối được tới ${name}. Dịch vụ đã bật chưa?`);
    if (/ENOTFOUND|ETIMEDOUT|EAI_AGAIN|ECONNRESET/.test(code || '')) throw new Error(`Không kết nối được tới ${name}. Kiểm tra mạng.`);
    throw e;
  } finally {
    clearTimeout(timer);
    if (signal) signal.removeEventListener('abort', onAbort);
  }
}

module.exports = {
  GEMINI_PERSONAL, GEMINI_PERSONAL_MSG,
  IS_WIN, IS_MAC, HOME,
  quoteArg, splitArgs, stripAnsi, firstLine,
  spawnCli, killTree, runProcess, openTerminal,
  regValue, userEnv, refreshPath, fetchJson, htmlError,
  vietFonts, fontCandidates,
};
