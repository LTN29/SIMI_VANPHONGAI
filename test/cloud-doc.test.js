// Đọc tài liệu trên mạng (SharePoint / OneDrive / Google) ngay trong app: đổi link xem → link tải, rút chữ Excel / Word / PowerPoint
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('fs');
const os = require('os');
const path = require('path');
const { execFileSync } = require('child_process');
const cd = require('../src/browser/cloud-doc');
const ex = require('../src/export');

test('link xem → link tải trực tiếp', () => {
  const sp = cd.directUrl('https://simigo-my.sharepoint.com/:x:/g/personal/ngoc_nguyen_simigo_vn/IQBbZxFw7PiARr37t8wHqgr6AQq0sVoRrQ5AhW5i1S959tg?e=XKXf4h');
  assert.equal(sp.ext, '.xlsx');
  assert.match(sp.url, /[?&]e=XKXf4h/); assert.match(sp.url, /[?&]download=1/);
  const editor = cd.directUrl('https://simigo.sharepoint.com/sites/mkt/_layouts/15/Doc.aspx?sourcedoc=%7B11111111-2222-3333-4444-555555555555%7D&file=Ke%20hoach.docx&action=default');
  assert.equal(editor.url, 'https://simigo.sharepoint.com/sites/mkt/_layouts/15/download.aspx?UniqueId=11111111-2222-3333-4444-555555555555');
  assert.equal(editor.ext, '.docx');
  assert.deepEqual(cd.directUrl('https://docs.google.com/spreadsheets/d/1AbC_d-9/edit?gid=0#gid=0'), { url: 'https://docs.google.com/spreadsheets/d/1AbC_d-9/export?format=xlsx', ext: '.xlsx' });
  assert.equal(cd.directUrl('https://docs.google.com/document/u/0/d/XyZ/edit').url, 'https://docs.google.com/document/d/XyZ/export?format=docx');
  assert.equal(cd.directUrl('https://example.com/bao-cao.pdf?x=1').ext, '.pdf');
  assert.equal(cd.directUrl('https://www.google.com/'), null);
  assert.equal(cd.directUrl('không phải link'), null);
});

test('rút chữ Excel / Word do chính app tạo (tiếng Việt, nhiều cột)', async () => {
  const md = '# Chiến dịch Tết\n\n| Kênh | Ngân sách | Ghi chú |\n|---|---|---|\n| Facebook | 12500000 | Đạt 120% |\n| Shopee | 8000000 | Cần tối ưu |\n';
  const x = cd.xlsxText(await ex.toXlsx(md));
  assert.match(x, /## Sheet "/);
  assert.match(x, /Facebook \| 12500000 \| Đạt 120%/);
  assert.match(x, /Shopee \| 8000000 \| Cần tối ưu/);
  assert.equal(cd.sniffExt(await ex.toXlsx(md), ''), '.xlsx');
  const w = cd.docxText(await ex.toDocx(md));
  assert.match(w, /Chiến dịch Tết/); assert.match(w, /Cần tối ưu/);
  assert.equal(cd.sniffExt(await ex.toDocx(md), ''), '.docx');
});

test('Excel thật (openpyxl): nhiều sheet, ngày tháng, ô trống giữa hàng, sheet ẩn, cắt khi quá dài', { skip: (() => { try { execFileSync('python3', ['-c', 'import openpyxl']); return false; } catch { return true; } })() }, () => {
  const f = path.join(fs.mkdtempSync(path.join(os.tmpdir(), 'vp-xlsx-')), 'kh.xlsx');
  execFileSync('python3', ['-c', `
import openpyxl, datetime, sys
wb = openpyxl.Workbook(); ws = wb.active; ws.title = "Kế hoạch"
ws.append(["Hạng mục", "Bắt đầu", None, "Chi phí", "Tỉ lệ"])
ws.append(["Livestream \\"Tết\\" & quà", datetime.date(2027, 1, 15), None, 1500000.5, 0.25])
ws["F2"] = "=D2*2"
big = wb.create_sheet("Dữ liệu")
for i in range(3000): big.append([i, "dòng dữ liệu số %d" % i])
h = wb.create_sheet("Ẩn"); h.sheet_state = "hidden"; h.append(["bí mật"])
wb.save(sys.argv[1])`, f]);
  const t = cd.xlsxText(fs.readFileSync(f), 6000);
  assert.match(t, /## Sheet "Kế hoạch" – 2 dòng/);
  assert.match(t, /1: Hạng mục \| Bắt đầu \|  \| Chi phí \| Tỉ lệ/);
  assert.match(t, /2: Livestream "Tết" & quà \| 2027-01-15 \|  \| 1500000\.5 \| 0\.25/);
  assert.match(t, /## Sheet "Dữ liệu" – 3000 dòng có dữ liệu \(đang hiện \d+ dòng đầu\)/);
  assert.ok(!t.includes('bí mật'), 'bỏ sheet ẩn');
  assert.ok(t.length < 7500);
});
