// Tự cập nhật app qua SIMI Gateway: admin đăng bản mới lên Gateway (scripts/publish-vanphong.mjs),
// máy nhân viên tự tải sẵn ở chế độ nền, kiểm tra SHA-256 rồi báo "Có bản mới" → bấm "Cập nhật ngay" là cài lại
// và tự mở lại app. Hai cách cài:
//  - cập nhật nhanh (kind 'app', src/hot.js): chỉ thay phần code ~3,5 MB, không đổi file chạy → không bị Smart App Control
//    chặn, Mac không hỏi lại quyền, Ubuntu không hỏi mật khẩu. Dùng khi bản mới cùng Electron với vỏ app đang cài.
//  - cài lại cả bộ cài đúng kiểu đang dùng: Windows (bản cài / portable), macOS (.app), Ubuntu (.deb / AppImage).
let fs;
try { fs = require('original-fs'); } catch { fs = require('fs'); } // file .asar phải đọc / ghi như file thường
const path = require('path');
const crypto = require('crypto');
const { spawn } = require('child_process');
const hot = require('./hot');

const CHECK_EVERY_MS = 10 * 60 * 1000; // chỉ đọc 1 file latest.json nhỏ; ngoài ra Sảnh online báo ngay khi có bản mới

const { newer } = hot;

// bản đang chạy thuộc loại nào → tải đúng file đó
function assetKey() {
  if (process.platform === 'win32') return process.env.PORTABLE_EXECUTABLE_FILE ? 'win-portable' : 'win-setup';
  if (process.platform === 'darwin') return `mac-${process.arch === 'x64' ? 'x64' : 'arm64'}`;
  if (process.platform === 'linux') return process.env.APPIMAGE ? 'linux-appimage' : 'linux-deb';
  return null;
}

function sha256File(file) {
  return new Promise((resolve, reject) => {
    const h = crypto.createHash('sha256');
    fs.createReadStream(file).on('data', (d) => h.update(d)).on('error', reject).on('end', () => resolve(h.digest('hex')));
  });
}

const psQuote = (s) => `'${String(s).replace(/'/g, "''")}'`;

// Windows không cho chạy bộ cài (Smart App Control, Defender, chính sách công ty)
function winBlocked(e) {
  const t = `${e && e.code} ${e && e.message}`;
  if (/EPERM|EACCES|UNKNOWN|blocked|Application Control|Device Guard|virus/i.test(t)) {
    return 'Windows (Smart App Control / Defender) chặn bản cài mới – app vẫn giữ bản cũ. Tải bản mới ở trang tải app hoặc nhờ IT hỗ trợ.';
  }
  return `Không mở được bộ cài (${String(e && e.message || e).slice(0, 120)}) – tải bản mới ở trang tải app.`;
}

// lỗi cài .deb (pkexec + apt-get) → câu dễ hiểu; luôn kèm lệnh Terminal để tự cài
function debError(code, out, file) {
  const cmd = `sudo apt install ${file}`;
  const t = String(out || '');
  if (code === 126) return 'Bạn đã hủy nhập mật khẩu – bấm Cập nhật ngay để thử lại';
  if (t === 'pkexec-missing' || code === 127) return `Máy không hiện được hộp nhập mật khẩu – mở Terminal và chạy: ${cmd}`;
  if (/lock|Khóa|khoá/i.test(t) && /dpkg|apt/i.test(t)) return 'Ubuntu đang tự cài bản vá hệ thống – đợi vài phút rồi bấm Cập nhật ngay lại';
  if (/dpkg was interrupted|dpkg --configure -a/i.test(t)) return 'Lần cài trước của Ubuntu bị dở – mở Terminal chạy: sudo dpkg --configure -a rồi bấm Cập nhật ngay lại';
  if (/unmet dependencies|Failed to fetch|Unable to fetch|Temporary failure resolving|Could not resolve/i.test(t)) return `Thiếu gói phụ của Ubuntu và không tải được (kiểm tra mạng) – mở Terminal và chạy: sudo apt update && ${cmd}`;
  if (/No space left/i.test(t)) return 'Máy hết dung lượng ổ đĩa – dọn bớt rồi bấm Cập nhật ngay lại';
  const last = t.split('\n').map((s) => s.trim()).filter((s) => /^(E:|dpkg:)/.test(s)).pop();
  return `Không cài được tự động${last ? ` (${last.slice(0, 160)})` : ''} – mở Terminal và chạy: ${cmd}`;
}

class Updater {
  constructor({ app, getGateway, emit, dir, enabled = () => true, autoDownload = () => true, current = '', shell = global.vpShell, hotRoot = '' }) {
    this.app = app;
    this.getGateway = getGateway;
    this.emitFn = emit;
    this.dir = dir;
    this.enabled = enabled;
    this.autoDownload = autoDownload; // có bản mới là tải sẵn ở chế độ nền, chỉ cài khi người dùng bấm
    this.lastCheck = 0;
    this.shell = shell;     // vỏ app (src/boot.js): Electron + giao kèo BOOT; thiếu thì chỉ cài lại cả bộ cài
    this.hotRoot = hotRoot; // <userData>/app
    this.state = { status: 'idle', current: current || app.getVersion(), kind: assetKey() };
  }

  // gói code cho cập nhật nhanh dùng được với vỏ app đang chạy không (cùng Electron, chưa từng mở lỗi)
  quickFile(j) {
    const f = j && j.files && j.files.app;
    const info = f && hot.parseName(f.name);
    if (!info || !this.hotRoot || info.version !== j.version || !hot.fits(info, this.shell)) return null;
    if (!/^[a-f0-9]{64}$/i.test(f.sha256 || '') || hot.isBad(this.hotRoot, info.version)) return null;
    return f;
  }

  base() {
    if (process.env.VPAI_UPDATE_URL) return process.env.VPAI_UPDATE_URL.replace(/\/+$/, '');
    return this.getGateway().replace(/\/+$/, '') + '/install/vanphong';
  }

  _set(patch) { Object.assign(this.state, patch); this.emitFn({ type: 'update', state: { ...this.state } }); return { ...this.state }; }

  start() {
    const tick = () => { if (this.enabled()) this.check().catch(() => { /* thử lại lần sau */ }); };
    this.timer = setTimeout(() => { tick(); this.every = setInterval(tick, CHECK_EVERY_MS); }, 15000);
  }

  stop() { clearTimeout(this.timer); clearInterval(this.every); if (this.ac) this.ac.abort(); }

  // kiểm tra lại nếu lần trước đã lâu (quay lại app, máy ngủ dậy) hoặc ngay lập tức (Sảnh báo có bản mới)
  checkSoon(minGapMs = 0) {
    if (!this.enabled() || this.state.status === 'checking' || Date.now() - this.lastCheck < minGapMs) return;
    this.check().catch(() => { /* thử lại lần sau */ });
  }

  // bấm "Cập nhật ngay": đã tải xong thì cài luôn; chưa xong thì tải nốt rồi tự cài
  async updateNow() {
    if (this.state.status === 'ready') return this.install();
    this.installWhenReady = true;
    this._set({ autoInstall: true });
    const r = await this.download(); // tải xong → _ready() tự cài
    if (r.status !== 'ready') { this.installWhenReady = false; return this._set({ autoInstall: false }); }
    return { ...this.state };
  }

  async check() {
    if (['checking', 'downloading', 'installing'].includes(this.state.status)) return { ...this.state };
    // đang có bản chờ cài / chờ tải: kiểm tra lặng lẽ, không làm nhấp nháy nút, rớt mạng thì giữ nguyên
    const keep = ['ready', 'available'].includes(this.state.status);
    this.lastCheck = Date.now();
    if (!keep) this._set({ status: 'checking', error: '' });
    try {
      const ac = new AbortController(); const timer = setTimeout(() => ac.abort(), 15000);
      const res = await fetch(this.base() + '/latest.json', { signal: ac.signal, headers: { 'cache-control': 'no-cache' } }).finally(() => clearTimeout(timer));
      if (res.status === 404) return this._set({ status: 'none', checkedAt: Date.now() });
      if (!res.ok) throw new Error(`Gateway trả lỗi ${res.status}`);
      const j = await res.json();
      // bản portable (chạy ngay) không còn phát hành từ 0.9.13 → cập nhật bằng bản cài Setup (cài xong mở bản đã cài)
      let kind = assetKey();
      if (kind === 'win-portable' && j.files && !j.files[kind] && j.files['win-setup']) kind = 'win-setup';
      let file = j.files && kind && j.files[kind];
      const quick = this.quickFile(j);
      if (quick) { kind = 'app'; file = quick; }
      if (kind !== this.state.kind) this.state.kind = kind;
      if (!j.version || !newer(j.version, this.state.current)) return this._set({ status: 'none', latest: j.version || '', checkedAt: Date.now() });
      if (keep && this.state.version === j.version) {
        if (this.state.status === 'available' && this.autoDownload()) setImmediate(() => this.download().catch(() => { /* lần sau */ }));
        return { ...this.state };
      }
      if (!file || !/^[\w.\-]+$/.test(file.name || '') || !/^[a-f0-9]{64}$/i.test(file.sha256 || '')) {
        return this._set({ status: 'manual', version: j.version, notes: String(j.notes || '').slice(0, 4000), checkedAt: Date.now(), page: this.base() });
      }
      const st = this._set({ status: 'available', version: j.version, notes: String(j.notes || '').slice(0, 4000), date: j.date || '', size: file.size || 0, file, path: '', checkedAt: Date.now() });
      if (this.autoDownload()) setImmediate(() => this.download().catch(() => { /* lần kiểm tra sau tải lại */ }));
      return st;
    } catch (e) {
      if (keep) return { ...this.state };
      return this._set({ status: 'error', error: e.name === 'AbortError' ? 'Gateway không phản hồi' : e.message, checkedAt: Date.now() });
    }
  }

  // tải về thư mục updates/, kiểm tra SHA-256 – sai là xóa, không cài
  // tải chạy 1 lần duy nhất dù tự tải nền và người dùng bấm cùng lúc
  download() {
    if (!this.dl) this.dl = this._download().finally(() => { this.dl = null; });
    return this.dl;
  }

  async _download() {
    if (this.state.status === 'ready') return { ...this.state };
    if (this.state.status !== 'available') await this.check();
    if (this.state.status !== 'available') return { ...this.state };
    const { file, version } = this.state;
    fs.mkdirSync(this.dir, { recursive: true });
    for (const f of fs.readdirSync(this.dir)) if (f !== file.name) try { fs.rmSync(path.join(this.dir, f), { force: true, recursive: true }); } catch { /* đang dùng */ }
    const dest = path.join(this.dir, file.name);
    const part = dest + '.part';
    // đã tải từ lần mở app trước và còn nguyên → dùng luôn
    if (fs.existsSync(dest) && await sha256File(dest).catch(() => '') === file.sha256.toLowerCase()) return this._ready(dest, version);
    this.ac = new AbortController();
    this._set({ status: 'downloading', progress: 0, error: '' });
    try {
      const res = await fetch(this.base() + '/' + encodeURIComponent(file.name), { signal: this.ac.signal });
      if (!res.ok || !res.body) throw new Error(`Không tải được bản cập nhật (mã ${res.status})`);
      const total = Number(res.headers.get('content-length')) || file.size || 0;
      const hash = crypto.createHash('sha256');
      const out = fs.createWriteStream(part);
      let got = 0; let last = 0;
      for await (const chunk of res.body) {
        hash.update(chunk); got += chunk.length;
        if (!out.write(chunk)) await new Promise((r) => out.once('drain', r));
        if (total && Date.now() - last > 250) { last = Date.now(); this._set({ progress: Math.min(0.99, got / total) }); }
      }
      await new Promise((r, j) => out.end((err) => (err ? j(err) : r())));
      if (hash.digest('hex').toLowerCase() !== file.sha256.toLowerCase()) { fs.rmSync(part, { force: true }); throw new Error('File tải về không khớp mã kiểm tra – đã hủy, vui lòng thử lại'); }
      fs.renameSync(part, dest);
      return this._ready(dest, version);
    } catch (e) {
      try { fs.rmSync(part, { force: true }); } catch { /* bỏ qua */ }
      this.installWhenReady = false;
      return this._set({ status: 'available', progress: 0, autoInstall: false, error: e.name === 'AbortError' ? 'Đã hủy tải' : e.message });
    } finally { this.ac = null; }
  }

  _ready(dest, version) {
    if (process.platform !== 'win32') fs.chmodSync(dest, 0o755);
    const st = this._set({ status: 'ready', progress: 1, path: dest, version, error: '' });
    if (this.installWhenReady) { this.installWhenReady = false; setImmediate(() => this.install().catch((e) => this._set({ status: 'ready', autoInstall: false, error: e.message }))); }
    return st;
  }

  cancel() { if (this.ac) this.ac.abort(); }

  // cài bản đã tải rồi mở lại app
  async install() {
    if (this.state.status !== 'ready' || !fs.existsSync(this.state.path || '')) throw new Error('Chưa tải xong bản cập nhật');
    const file = this.state.path;
    const kind = this.state.kind;
    const pid = process.pid;
    const detached = (cmd, args) => spawn(cmd, args, { detached: true, stdio: 'ignore', windowsHide: true }).unref();
    this._set({ status: 'installing' });
    if (kind === 'app') {
      // cập nhật nhanh: giải nén code mới vào <userData>/app rồi mở lại – không cần quyền gì
      try {
        hot.installHot(this.hotRoot, file, hot.parseName(path.basename(file)), this.state.file.sha256, this.shell && this.shell.hot ? [this.shell.hot] : []);
        try { fs.rmSync(file, { force: true }); } catch { /* bỏ qua */ }
      } catch (e) {
        this._set({ status: 'ready', error: 'Không cài được bản cập nhật nhanh: ' + e.message });
        return { ...this.state };
      }
      this.app.relaunch(process.env.APPIMAGE ? { execPath: process.env.APPIMAGE, args: process.argv.slice(1) } : undefined);
    } else if (kind === 'win-setup') {
      // bộ cài NSIS chạy im lặng, cài đè đúng chỗ cũ rồi tự mở lại app.
      // Chỉ thoát app khi bộ cài đã chạy thật: Smart App Control / Defender chặn file thì giữ app mở và báo lý do.
      try {
        await new Promise((resolve, reject) => {
          const c = spawn(file, ['/S', '--updated', '--force-run'], { detached: true, stdio: 'ignore', windowsHide: true });
          c.once('error', reject);
          c.once('spawn', () => { c.unref(); resolve(); });
        });
      } catch (e) {
        this._set({ status: 'ready', error: winBlocked(e) });
        return { ...this.state };
      }
    } else if (kind === 'win-portable') {
      const target = process.env.PORTABLE_EXECUTABLE_FILE;
      const ps = `$src=${psQuote(file)}; $dst=${psQuote(target)}; for($i=0;$i -lt 120;$i++){ Start-Sleep -Milliseconds 700; try { Copy-Item -LiteralPath $src -Destination $dst -Force -ErrorAction Stop; Remove-Item -LiteralPath $src -Force -ErrorAction SilentlyContinue; Start-Process -FilePath $dst; exit 0 } catch {} }; Start-Process -FilePath $src`;
      detached('powershell.exe', ['-NoProfile', '-WindowStyle', 'Hidden', '-ExecutionPolicy', 'Bypass', '-EncodedCommand', Buffer.from(ps, 'utf16le').toString('base64')]);
    } else if (kind && kind.startsWith('mac')) {
      const appPath = path.resolve(process.execPath, '..', '..', '..');
      if (!appPath.endsWith('.app')) throw new Error('Không xác định được vị trí app trên máy');
      const sh = [
        'pid=$1; zip=$2; app=$3',
        'while kill -0 "$pid" 2>/dev/null; do sleep 0.5; done',
        'tmp=$(mktemp -d) || exit 1',
        'ditto -x -k "$zip" "$tmp" || { open "$app"; exit 1; }',
        'new=$(find "$tmp" -maxdepth 2 -name "*.app" -type d | head -1)',
        '[ -n "$new" ] || { open "$app"; exit 1; }',
        'rm -rf "$app.old"',
        'if mv "$app" "$app.old" && mv "$new" "$app"; then rm -rf "$app.old"; else [ -d "$app" ] || mv "$app.old" "$app"; fi',
        'xattr -cr "$app" 2>/dev/null; codesign --force --deep --sign - "$app" 2>/dev/null',
        'rm -rf "$tmp" "$zip"; open "$app"',
      ].join('\n');
      detached('/bin/bash', ['-c', sh, 'vpai-update', String(pid), file, appPath]);
    } else if (kind === 'linux-appimage') {
      const sh = 'pid=$1; src=$2; dst=$3; while kill -0 "$pid" 2>/dev/null; do sleep 0.5; done; mv -f "$src" "$dst" && chmod +x "$dst"; nohup "$dst" >/dev/null 2>&1 &';
      detached('/bin/bash', ['-c', sh, 'vpai-update', String(pid), file, process.env.APPIMAGE]);
    } else if (kind === 'linux-deb') {
      // cần quyền quản trị: hộp nhập mật khẩu của Ubuntu (pkexec), 1 lần mỗi bản; cài xong mở lại app.
      // Ubuntu hay tự cài bản vá nền (unattended-upgrades) giữ khóa apt → chờ tối đa 3 phút thay vì báo lỗi ngay.
      const { code, out } = await new Promise((resolve) => {
        let out = '';
        const c = spawn('pkexec', ['apt-get', '-o', 'DPkg::Lock::Timeout=180', 'install', '-y', '--allow-downgrades', file], { stdio: ['ignore', 'pipe', 'pipe'] });
        const keep = (d) => { out = (out + d).slice(-6000); };
        c.stdout.on('data', keep); c.stderr.on('data', keep);
        c.on('error', (e) => resolve({ code: -1, out: e.code === 'ENOENT' ? 'pkexec-missing' : e.message })); c.on('close', (code) => resolve({ code, out }));
      });
      if (code !== 0) {
        this._set({ status: 'ready', error: debError(code, out, file) });
        return { ...this.state };
      }
      this.app.relaunch();
    } else {
      throw new Error('Bản này không tự cập nhật được');
    }
    setTimeout(() => this.app.exit(0), 400);
    return { ...this.state };
  }
}

module.exports = { Updater, newer, assetKey, debError, winBlocked };
