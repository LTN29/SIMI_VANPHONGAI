// Cập nhật nhanh: chỉ thay phần code của app (JS / HTML, ~3,5 MB) trong thư mục dữ liệu của người dùng,
// giữ nguyên file chạy (.exe / .app / gói .deb). Không có file chạy mới nên:
//   Windows: Smart App Control / SmartScreen không chặn,  Mac: giữ nguyên quyền đã cấp + Keychain,  Ubuntu: không hỏi mật khẩu.
// Chỉ khi đổi phiên bản Electron (hoặc giao kèo BOOT) mới cần cập nhật cả bộ cài như trước.
//
// <userData>/app/current.json       bản code đang dùng {version, electron, boot, sha256, tries, ok}
// <userData>/app/<version>/…        code đã giải nén (src/main.js, src/renderer/…)
const path = require('path');
let fs;
try { fs = require('original-fs'); } catch { fs = require('fs'); } // trong Electron: đọc .asar như file thường, không phải thư mục ảo

const BOOT = 1; // giao kèo giữa vỏ app (src/boot.js) và phần code tải về: global.vpShell, global.vpBootOk
const NAME = /^VanPhongAI-(\d+\.\d+\.\d+(?:-[\w.]+)?)-app-e(\d+)b(\d+)\.asar$/;
const MAX_TRIES = 2; // bản code mới mở lỗi 2 lần liền → quay về bản đi kèm bộ cài

// "0.10.2" > "0.9.9"
function newer(a, b) {
  const pa = String(a || '').split(/[.-]/).map((x) => parseInt(x, 10) || 0);
  const pb = String(b || '').split(/[.-]/).map((x) => parseInt(x, 10) || 0);
  for (let i = 0; i < Math.max(pa.length, pb.length); i++) { const d = (pa[i] || 0) - (pb[i] || 0); if (d) return d > 0; }
  return false;
}

// VanPhongAI-0.9.16-app-e33b1.asar → {version, electron: 33, boot: 1}
function parseName(name) {
  const m = NAME.exec(String(name || ''));
  return m ? { version: m[1], electron: Number(m[2]), boot: Number(m[3]) } : null;
}
const fileName = (version, electron, boot = BOOT) => `VanPhongAI-${version}-app-e${electron}b${boot}.asar`;

// vỏ app đang chạy dùng được bản code này không: cùng Electron (số chính), giao kèo không mới hơn vỏ
function fits(info, shell) {
  return !!(info && shell && shell.boot && Number(info.electron) === Number(shell.electron) && Number(info.boot) <= Number(shell.boot));
}

// đọc gói .asar: [uint32 4][uint32 n][n byte: uint32 + int32 độ dài + JSON mục lục] rồi tới dữ liệu các file
function readAsarHeader(fd) {
  const b = Buffer.alloc(8);
  if (fs.readSync(fd, b, 0, 8, 0) !== 8 || b.readUInt32LE(0) !== 4) throw new Error('Gói cập nhật hỏng');
  const size = b.readUInt32LE(4);
  if (size < 8 || size > 16 * 1024 * 1024) throw new Error('Gói cập nhật hỏng');
  const h = Buffer.alloc(size);
  fs.readSync(fd, h, 0, size, 8);
  const len = h.readInt32LE(4);
  return { header: JSON.parse(h.toString('utf8', 8, 8 + len)), base: 8 + size };
}

// giải nén toàn bộ gói .asar vào thư mục (không cần Electron; từ chối tên file lạ / liên kết / file nằm ngoài gói)
function extractAsar(file, dest) {
  const fd = fs.openSync(file, 'r');
  let count = 0;
  try {
    const { header, base } = readAsarHeader(fd);
    const walk = (node, rel) => {
      for (const [name, e] of Object.entries(node.files || {})) {
        if (!name || name === '.' || name === '..' || /[\\/:\0]/.test(name)) throw new Error('Gói cập nhật có tên file lạ');
        const p = path.join(dest, rel, name);
        if (e.files) { fs.mkdirSync(p, { recursive: true }); walk(e, path.join(rel, name)); continue; }
        if (e.link || e.unpacked || !Number.isFinite(Number(e.size))) throw new Error('Gói cập nhật thiếu file');
        const buf = Buffer.alloc(Number(e.size));
        if (buf.length && fs.readSync(fd, buf, 0, buf.length, base + Number(e.offset)) !== buf.length) throw new Error('Gói cập nhật bị cắt');
        fs.writeFileSync(p, buf, e.executable ? { mode: 0o755 } : undefined);
        count++;
      }
    };
    fs.mkdirSync(dest, { recursive: true });
    walk(header, '');
  } finally { fs.closeSync(fd); }
  return count;
}

const curFile = (root) => path.join(root, 'current.json');
function readCurrent(root) { try { return JSON.parse(fs.readFileSync(curFile(root), 'utf8')); } catch { return null; } }
function writeCurrent(root, cur) {
  fs.mkdirSync(root, { recursive: true });
  const tmp = curFile(root) + '.tmp';
  fs.writeFileSync(tmp, JSON.stringify(cur));
  fs.renameSync(tmp, curFile(root));
}

// cài bản code đã tải (đã kiểm tra SHA-256): giải nén sang thư mục tạm → kiểm tra → đổi tên → ghi current.json sau cùng
function installHot(root, asarFile, info, sha256, keep = []) {
  const dir = path.join(root, info.version);
  const tmp = dir + '.tmp';
  fs.rmSync(tmp, { recursive: true, force: true });
  const files = extractAsar(asarFile, tmp);
  let pkg = {};
  try { pkg = JSON.parse(fs.readFileSync(path.join(tmp, 'package.json'), 'utf8')); } catch { /* kiểm tra ngay dưới */ }
  if (pkg.version !== info.version || !fs.existsSync(path.join(tmp, 'src', 'main.js'))) {
    fs.rmSync(tmp, { recursive: true, force: true });
    throw new Error('Gói cập nhật không đúng phiên bản');
  }
  fs.rmSync(dir, { recursive: true, force: true });
  fs.renameSync(tmp, dir);
  writeCurrent(root, { version: info.version, electron: info.electron, boot: info.boot, sha256, files, at: Date.now(), tries: 0, ok: false });
  prune(root, [info.version, ...keep]);
  return dir;
}

// xóa các bản code cũ (bản đang chạy có thể đang bị khóa trên Windows → để lần sau)
function prune(root, keep) {
  let names = [];
  try { names = fs.readdirSync(root); } catch { return; }
  for (const n of names) {
    if (n === 'current.json' || keep.includes(n)) continue;
    try { fs.rmSync(path.join(root, n), { recursive: true, force: true }); } catch { /* đang dùng */ }
  }
}

// lúc mở app: chọn bản code mới hơn bản đi kèm (nếu hợp lệ)
function pickHot(root, shell) {
  const cur = readCurrent(root);
  if (!cur || !newer(cur.version, shell.version) || !fits(cur, shell)) return null;
  if (!cur.ok && (cur.tries || 0) >= MAX_TRIES) return null;
  const main = path.join(root, cur.version, 'src', 'main.js');
  if (!fs.existsSync(main)) return null;
  return { cur, main, dir: path.join(root, cur.version) };
}
// đếm lần mở; cửa sổ app hiện được → đánh dấu bản này chạy tốt
function markBoot(root, cur) { try { cur.tries = (cur.tries || 0) + 1; writeCurrent(root, cur); } catch { /* chỉ đọc */ } }
function markOk(root, cur) { if (cur.ok) return; try { cur.ok = true; cur.tries = 0; writeCurrent(root, cur); } catch { /* bỏ qua */ } }
// bản này từng mở lỗi liên tục → không cập nhật nhanh lại bản đó nữa (dùng bộ cài)
function isBad(root, version) { const c = readCurrent(root); return !!(c && c.version === version && !c.ok && (c.tries || 0) >= MAX_TRIES); }
// bản đi kèm đã mới bằng / hơn (vừa cài bộ cài mới) → dọn bản code cũ
function dropOld(root, shellVersion) {
  const c = readCurrent(root);
  if (c && !newer(c.version, shellVersion) && !isBad(root, c.version)) { try { fs.rmSync(root, { recursive: true, force: true }); } catch { /* lần sau */ } }
}

module.exports = { BOOT, MAX_TRIES, newer, parseName, fileName, fits, extractAsar, installHot, pickHot, markBoot, markOk, isBad, dropOld, readCurrent, prune };
