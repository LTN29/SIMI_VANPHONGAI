// Tạo gói code cho "cập nhật nhanh" (src/hot.js) từ bản vừa build: <dist>/linux-unpacked/resources/app.asar (+ .unpacked)
// → <dist>/VanPhongAI-<ver>-app-e<Electron>b<BOOT>.asar, mọi file nằm gọn trong gói (máy người dùng giải nén ra thư mục).
//   node build/make-app-asar.js [dist]
const fs = require('fs');
const os = require('os');
const path = require('path');
const asar = require('@electron/asar');
const { BOOT, fileName } = require('../src/hot');

async function main() {
  const dist = path.resolve(process.argv[2] || 'dist');
  const root = path.join(__dirname, '..');
  const version = require(path.join(root, 'package.json')).version;
  const electron = parseInt(require('electron/package.json').version, 10);
  const src = ['linux-unpacked', 'win-unpacked', 'mac-arm64', 'mac'].map((d) => path.join(dist, d, 'resources', 'app.asar')).find((f) => fs.existsSync(f))
    || ['mac-arm64', 'mac'].map((d) => path.join(dist, d, 'VanPhongAI.app', 'Contents', 'Resources', 'app.asar')).find((f) => fs.existsSync(f));
  if (!src) throw new Error('Không thấy app.asar trong ' + dist + ' – chạy npm run dist:linux trước');
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'vpai-app-'));
  try {
    asar.extractAll(src, tmp); // lấy cả file tách ngoài (app.asar.unpacked)
    const pkg = JSON.parse(fs.readFileSync(path.join(tmp, 'package.json'), 'utf8'));
    if (pkg.version !== version) throw new Error(`app.asar là bản ${pkg.version}, package.json là ${version}`);
    if (!fs.existsSync(path.join(tmp, 'src', 'main.js')) || !fs.existsSync(path.join(tmp, 'src', 'boot.js'))) throw new Error('app.asar thiếu src/main.js / src/boot.js');
    const out = path.join(dist, fileName(version, electron, BOOT));
    await asar.createPackage(tmp, out);
    console.log(`  • gói cập nhật nhanh: ${path.basename(out)} (${(fs.statSync(out).size / 1048576).toFixed(1)} MB)`);
  } finally { fs.rmSync(tmp, { recursive: true, force: true }); }
}

main().catch((e) => { console.error(e.message || e); process.exit(1); });
