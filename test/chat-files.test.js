// File nháp của AI không hiện thành file kết quả; hướng dẫn tạo tài liệu tiếng Việt không lỗi font; Python chạy UTF-8.
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('fs');
const os = require('os');
const path = require('path');
const { docGuide, isScratch, collectFiles, SCRATCH } = require('../src/chat');
const { vietFonts, spawnCli } = require('../src/sys');

const tmp = () => fs.mkdtempSync(path.join(os.tmpdir(), 'vpai-files-'));

test('file nháp (_x, ~$x, thư mục tmp/nhap, thư mục nháp của app) không thành file kết quả', () => {
  const d = tmp();
  for (const f of ['Bao-cao.docx', '_gk_grid.jpg', '_gk_zoom.jpg', '~$Bao-cao.docx', 'tmp/khung.png', 'nhap/thu.png', 'ket-qua/bieu-do.png']) {
    fs.mkdirSync(path.dirname(path.join(d, f)), { recursive: true });
    fs.writeFileSync(path.join(d, f), 'x');
  }
  const t0 = Date.now();
  const files = collectFiles(d, new Map(), t0, []).map((f) => path.relative(d, f.path).replace(/\\/g, '/')).sort();
  assert.deepEqual(files, ['Bao-cao.docx', 'ket-qua/bieu-do.png']);
  assert.ok(isScratch(path.join(SCRATCH, 'a.png')));
  // dự án của người dùng nằm trong thư mục tên "temp" vẫn hiện file kết quả bình thường
  const proj = path.join(tmp(), 'temp', 'Du-an');
  fs.mkdirSync(proj, { recursive: true }); fs.writeFileSync(path.join(proj, 'ket-qua.pdf'), 'x');
  assert.deepEqual(collectFiles(proj, new Map(), t0, []).map((f) => f.name), ['ket-qua.pdf']);
  // AI nhắc tới file nháp trong câu trả lời → vẫn không hiện
  assert.deepEqual(collectFiles(d, null, 0, [{ kind: 'text', text: 'Em ghép ảnh _gk_grid.jpg để xem, kết quả ở Bao-cao.docx' }]).map((f) => f.name), ['Bao-cao.docx']);
});

test('tìm font tiếng Việt có sẵn trên từng hệ điều hành', () => {
  const has = (set) => (f) => set.has(f);
  const w = vietFonts(has(new Set(['C:\\Windows\\Fonts\\arial.ttf', 'C:\\Windows\\Fonts\\arialbd.ttf', 'C:\\Windows\\Fonts\\times.ttf'])), 'win32', { WINDIR: 'C:\\Windows' });
  assert.match(w.sans, /arial\.ttf$/); assert.match(w.sansBold, /arialbd\.ttf$/); assert.match(w.serif, /times\.ttf$/); assert.equal(w.serifBold, '');
  const m = vietFonts(has(new Set(['/System/Library/Fonts/Supplemental/Arial.ttf'])), 'darwin', {});
  assert.equal(m.sans, '/System/Library/Fonts/Supplemental/Arial.ttf');
  const l = vietFonts(has(new Set(['/usr/share/fonts/truetype/liberation/LiberationSans-Regular.ttf'])), 'linux', {});
  assert.equal(l.sans, '/usr/share/fonts/truetype/liberation/LiberationSans-Regular.ttf');
  assert.deepEqual(vietFonts(() => false, 'linux', {}), { sans: '', sansBold: '', serif: '', serifBold: '' });
});

test('hướng dẫn cho AI: font nhúng có đường dẫn thật, NFC, CSV có BOM, file nháp ra ngoài', () => {
  const g = docGuide({ sans: 'C:\\Windows\\Fonts\\arial.ttf', sansBold: 'C:\\Windows\\Fonts\\arialbd.ttf' });
  for (const re of [/C:\\Windows\\Fonts\\arial\.ttf/, /Helvetica/, /NFC/, /utf-8-sig/, /-Encoding utf8/, /vanphong-ai-nhap/, /eastAsia/]) assert.match(g, re);
  assert.match(docGuide({}), /DejaVu Sans/, 'máy không tìm thấy font → gợi ý tên font');
});

test('Python do AI chạy dùng UTF-8 (không lỗi khi ghi tiếng Việt trên Windows)', async () => {
  const c = spawnCli(process.execPath, ['-e', 'process.stdout.write(process.env.PYTHONUTF8 + "|" + process.env.PYTHONIOENCODING)'], { shell: false });
  let out = ''; c.stdout.on('data', (d) => { out += d; });
  await new Promise((r) => c.on('close', r));
  assert.equal(out, '1|utf-8');
});
