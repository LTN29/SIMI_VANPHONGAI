// Đóng gói Sảnh 3D cho trang web điện thoại của Gateway (/m): sanh3d.js (three.js + Sảnh), sanh3d.css, ảnh thương hiệu,
// hướng dẫn Trợ lý SIMI. Gateway chỉ phục vụ file tĩnh → chạy lệnh này rồi commit thư mục kết quả bên repo Gateway.
//   node build/mobile-lobby.js [thư-mục-ra]   (mặc định ../ltn-memory-gateway/ltn-memory-gateway/site/mobile/sanh3d)
const fs = require('fs');
const path = require('path');
const esbuild = require('esbuild');

const ROOT = path.join(__dirname, '..');
const out = path.resolve(process.argv[2] || path.join(ROOT, '..', 'ltn-memory-gateway', 'ltn-memory-gateway', 'site', 'mobile', 'sanh3d'));

(async () => {
  fs.mkdirSync(path.join(out, 'brand'), { recursive: true });
  await esbuild.build({
    entryPoints: [path.join(ROOT, 'src', 'office3d', 'lobby-web.js')], bundle: true, format: 'iife', minify: true,
    target: ['chrome100', 'safari15', 'firefox100'], outfile: path.join(out, 'sanh3d.js'), legalComments: 'none',
    banner: { js: '/* Sảnh Văn Phòng AI 3D – dựng từ app Văn Phòng AI (build/mobile-lobby.js), không sửa tay. three.js © mrdoob (MIT) */' },
  });
  fs.copyFileSync(path.join(ROOT, 'src', 'office3d', 'lobby-web.css'), path.join(out, 'sanh3d.css'));
  fs.copyFileSync(path.join(ROOT, 'src', 'renderer', 'npc-guides.js'), path.join(out, 'npc-guides.js'));
  for (const f of fs.readdirSync(path.join(ROOT, 'src', 'renderer', 'brand'))) fs.copyFileSync(path.join(ROOT, 'src', 'renderer', 'brand', f), path.join(out, 'brand', f));
  const size = (f) => (fs.statSync(path.join(out, f)).size / 1024).toFixed(0) + ' KB';
  console.log(`Đã đóng gói Sảnh 3D cho điện thoại vào ${out}\n  sanh3d.js ${size('sanh3d.js')} · sanh3d.css ${size('sanh3d.css')} · npc-guides.js ${size('npc-guides.js')} · brand/ ${fs.readdirSync(path.join(out, 'brand')).length} ảnh`);
})().catch((e) => { console.error(e.message || e); process.exit(1); });
