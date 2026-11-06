// Đóng gói Sảnh 3D cho trang web điện thoại của Gateway (/m): sanh3d.js (three.js + Sảnh), sanh3d.css, ảnh thương hiệu,
// hướng dẫn Trợ lý SIMI. Gateway chỉ phục vụ file tĩnh → chạy lệnh này rồi commit thư mục kết quả bên repo Gateway.
//   node build/mobile-lobby.js [thư-mục-ra]   (mặc định ../ltn-memory-gateway/ltn-memory-gateway/site/mobile/sanh3d)
const fs = require('fs');
const path = require('path');
const esbuild = require('esbuild');

const ROOT = path.join(__dirname, '..');
const out = path.resolve(process.argv[2] || path.join(ROOT, '..', 'ltn-memory-gateway', 'ltn-memory-gateway', 'site', 'mobile', 'sanh3d'));

// các file nguồn tạo nên Sảnh điện thoại (đổi file nào → phải đóng gói lại)
const SOURCES = () => [
  ...fs.readdirSync(path.join(ROOT, 'src', 'office3d')).filter((f) => /\.(js|css)$/.test(f)).map((f) => path.join('src', 'office3d', f)),
  path.join('src', 'renderer', 'npc-guides.js'), path.join('src', 'renderer', 'fortune.js'), path.join('src', 'renderer', 'lobby.css'),
].sort();
function sourceHash() {
  const h = require('crypto').createHash('sha256');
  for (const f of SOURCES()) h.update(f.replace(/\\/g, '/') + '\0').update(fs.readFileSync(path.join(ROOT, f), 'utf8').replace(/\r\n/g, '\n')).update('\0');
  return h.digest('hex').slice(0, 16);
}
// lấy các khối CSS cấp ngoài cùng có bộ chọn / tên khớp mẫu (kể cả @keyframes, @media chứa chúng)
function pickCss(css, re) {
  const out = []; let i = 0;
  while (i < css.length) {
    const open = css.indexOf('{', i); if (open < 0) break;
    let depth = 0, j = open;
    for (; j < css.length; j++) { if (css[j] === '{') depth++; else if (css[j] === '}' && --depth === 0) break; }
    const head = css.slice(i, open).replace(/\/\*[\s\S]*?\*\//g, '').trim();
    const block = css.slice(open, j + 1);
    if (re.test(head) || (/^@media/.test(head) && re.test(block))) out.push(head + ' ' + block);
    i = j + 1;
  }
  return out.join('\n') + '\n';
}
module.exports = { sourceHash, pickCss };

if (require.main === module) (async () => {
  fs.mkdirSync(path.join(out, 'brand'), { recursive: true });
  await esbuild.build({
    entryPoints: [path.join(ROOT, 'src', 'office3d', 'lobby-web.js')], bundle: true, format: 'iife', minify: true,
    target: ['chrome100', 'safari15', 'firefox100'], outfile: path.join(out, 'sanh3d.js'), legalComments: 'none',
    banner: { js: '/* Sảnh Văn Phòng AI 3D – dựng từ app Văn Phòng AI (build/mobile-lobby.js), không sửa tay. three.js © mrdoob (MIT) */' },
  });
  // css Sảnh + phần ống xin quẻ (.fq-*) lấy từ lobby.css của app
  fs.writeFileSync(path.join(out, 'sanh3d.css'), fs.readFileSync(path.join(ROOT, 'src', 'office3d', 'lobby-web.css'), 'utf8') + '\n/* ống xin quẻ – từ src/renderer/lobby.css */\n' + pickCss(fs.readFileSync(path.join(ROOT, 'src', 'renderer', 'lobby.css'), 'utf8'), /\bfq/));
  fs.copyFileSync(path.join(ROOT, 'src', 'renderer', 'npc-guides.js'), path.join(out, 'npc-guides.js'));
  fs.copyFileSync(path.join(ROOT, 'src', 'renderer', 'fortune.js'), path.join(out, 'fortune.js'));
  // dấu phiên bản: app bên máy tính dùng để biết Sảnh trên điện thoại đã đóng gói lại sau lần sửa Sảnh gần nhất chưa
  fs.writeFileSync(path.join(out, 'version.json'), JSON.stringify({ app: require(path.join(ROOT, 'package.json')).version, source: sourceHash(), builtAt: new Date().toISOString() }, null, 1) + '\n');
  for (const f of fs.readdirSync(path.join(ROOT, 'src', 'renderer', 'brand'))) fs.copyFileSync(path.join(ROOT, 'src', 'renderer', 'brand', f), path.join(out, 'brand', f));
  const size = (f) => (fs.statSync(path.join(out, f)).size / 1024).toFixed(0) + ' KB';
  console.log(`Đã đóng gói Sảnh 3D cho điện thoại vào ${out}\n  sanh3d.js ${size('sanh3d.js')} · sanh3d.css ${size('sanh3d.css')} · npc-guides.js ${size('npc-guides.js')} · fortune.js ${size('fortune.js')} · brand/ ${fs.readdirSync(path.join(out, 'brand')).length} ảnh\n  → commit thư mục này bên repo Gateway rồi cập nhật máy chủ: điện thoại (app Android / web /m) có Sảnh mới ngay, không cần cài lại.`);
})().catch((e) => { console.error(e.message || e); process.exit(1); });
