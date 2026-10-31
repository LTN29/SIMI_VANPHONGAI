// Tự cập nhật app qua SIMI Gateway: admin đăng bản mới lên Gateway (scripts/publish-vanphong.mjs),
// máy nhân viên tự tải sẵn ở chế độ nền, kiểm tra SHA-256 rồi báo "Có bản mới" → bấm "Cập nhật ngay" là cài lại
// đúng kiểu đang dùng và tự mở lại app:
// Windows (bản cài / bản portable), macOS (.app trong Applications), Ubuntu (.deb / AppImage).
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { spawn } = require('child_process');

const CHECK_EVERY_MS = 60 * 60 * 1000; // ngoài ra Sảnh online báo ngay khi admin đăng bản mới

// "0.10.2" > "0.9.9"
function newer(a, b) {
  const pa = String(a || '').split(/[.-]/).map((x) => parseInt(x, 10) || 0);
  const pb = String(b || '').split(/[.-]/).map((x) => parseInt(x, 10) || 0);
  for (let i = 0; i < Math.max(pa.length, pb.length); i++) { const d = (pa[i] || 0) - (pb[i] || 0); if (d) return d > 0; }
  return false;
}

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

class Updater {
  constructor({ app, getGateway, emit, dir, enabled = () => true, autoDownload = () => true }) {
    this.app = app;
    this.getGateway = getGateway;
    this.emitFn = emit;
    this.dir = dir;
    this.enabled = enabled;
    this.autoDownload = autoDownload; // có bản mới là tải sẵn ở chế độ nền, chỉ cài khi người dùng bấm
    this.lastCheck = 0;
    this.state = { status: 'idle', current: app.getVersion(), kind: assetKey() };
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
      const file = j.files && this.state.kind && j.files[this.state.kind];
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
    if (kind === 'win-setup') {
      // bộ cài NSIS chạy im lặng, cài đè đúng chỗ cũ rồi tự mở lại app
      detached(file, ['/S', '--updated', '--force-run']);
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
      // cần quyền quản trị: hộp nhập mật khẩu của Ubuntu (pkexec); cài xong mở lại app
      const code = await new Promise((resolve) => {
        const c = spawn('pkexec', ['apt-get', 'install', '-y', '--allow-downgrades', file], { stdio: 'ignore' });
        c.on('error', () => resolve(-1)); c.on('close', resolve);
      });
      if (code !== 0) {
        this._set({ status: 'ready', error: code === 126 ? 'Bạn đã hủy nhập mật khẩu' : 'Không cài được tự động – mở Terminal và chạy: sudo apt install ' + file });
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

module.exports = { Updater, newer, assetKey };
