// Văn phòng trả kết quả bằng file: chọn định dạng / tên file / thư mục dự án, hoặc ra lệnh trong nội dung ("xuất file Excel").
const test = require('node:test');
const assert = require('node:assert/strict');
const os = require('os');
const fs = require('fs');
const path = require('path');
const zlib = require('zlib');
const { runTask } = require('../src/orchestrator');
const { DEFAULT_CONFIG } = require('../src/store');
const x = require('../src/export');

// đọc 1 file trong zip (đủ để kiểm tra .docx / .xlsx)
function unzipEntry(buf, name) {
  for (let i = 0; i < buf.length - 4; i++) {
    if (buf.readUInt32LE(i) !== 0x04034b50) continue;
    const n = buf.readUInt16LE(i + 26); const e = buf.readUInt16LE(i + 28); const size = buf.readUInt32LE(i + 18);
    const fname = buf.slice(i + 30, i + 30 + n).toString('utf8');
    const start = i + 30 + n + e;
    if (fname === name) return zlib.inflateRawSync(buf.slice(start, start + size)).toString('utf8');
  }
  return null;
}

const MD = '# Báo cáo Q3\n\nTổng quan **tăng 12%**.\n\n## Doanh số\n\n| Tháng | Doanh số |\n|---|---|\n| 7 | 1.250.000 |\n| 8 | 2,5 |\n\n- Ý một\n1. Bước một\n';

test('nhận lệnh định dạng trong nội dung và đuôi tên file', () => {
  assert.equal(x.detectFormat('Tổng hợp doanh số rồi xuất ra file Excel giúp anh'), 'xlsx');
  assert.equal(x.detectFormat('soạn hợp đồng, lưu file word'), 'docx');
  assert.equal(x.detectFormat('làm báo cáo dạng PDF'), 'pdf');
  assert.equal(x.detectFormat('viết email cảm ơn khách hàng'), '');
  assert.equal(x.formatFromName('Hợp đồng.DOCX'), 'docx');
  assert.equal(x.safeName('Báo cáo: Q3/2026?.xlsx'), 'Báo cáo Q3 2026');
});

test('Word / Excel đóng gói đúng, giữ tiếng Việt, số thành ô số', () => {
  const docx = x.toDocx(MD, 'Báo cáo');
  assert.equal(x.crc32(Buffer.from('abc')), 0x352441c2);
  const doc = unzipEntry(docx, 'word/document.xml');
  assert.match(doc, /Heading1/); assert.match(doc, /Báo cáo Q3/); assert.match(doc, /<w:tbl>/); assert.match(doc, /<w:b\/><\/w:rPr><w:t xml:space="preserve">tăng 12%/);
  const xlsx = x.toXlsx(MD, 'Báo cáo');
  const sheet = unzipEntry(xlsx, 'xl/worksheets/sheet1.xml');
  assert.match(sheet, /<c r="B2" s="2"><v>1250000<\/v><\/c>/, '1.250.000 → số');
  assert.match(sheet, /<c r="B3"><v>2.5<\/v><\/c>/, '2,5 → số');
  assert.match(unzipEntry(xlsx, 'xl/workbook.xml'), /name="Doanh số"/, 'tên sheet theo tiêu đề bảng');
  assert.ok(x.toCsv(MD).startsWith('﻿Tháng,Doanh số'));
});

test('giao việc: chọn Word + tên file + thư mục dự án → file đúng chỗ, không ghi đè', async () => {
  const out = fs.mkdtempSync(path.join(os.tmpdir(), 'vpai-exp-out-'));
  const proj = fs.mkdtempSync(path.join(os.tmpdir(), 'vpai-exp-proj-'));
  const config = structuredClone(DEFAULT_CONFIG);
  const deps = { config, signal: new AbortController().signal, getSecret: () => '', workDir: out, outputDir: out, simSpeed: 0.01, emit: () => {} };
  const task = { id: 't1', title: 'Hợp đồng mẫu', text: 'Soạn hợp đồng mẫu', targetId: 'viet_van_ban', format: 'docx', fileName: 'Hợp đồng SIMI', outDir: proj };
  const r1 = await runTask(task, deps);
  assert.equal(r1.file, path.join(proj, 'Hợp đồng SIMI.docx'));
  assert.ok(unzipEntry(fs.readFileSync(r1.file), 'word/document.xml').includes('w:document'));
  assert.ok(fs.readFileSync(r1.preview, 'utf8').length > 20, 'có bản xem trước .md cho Khay kết quả');
  const r2 = await runTask({ ...task, id: 't2' }, deps);
  assert.equal(r2.file, path.join(proj, 'Hợp đồng SIMI (2).docx'), 'không ghi đè file cũ');
});

test('giao việc: ghi "xuất file Excel" trong nội dung → ra .xlsx; AI được dặn trình bày bảng', async () => {
  const out = fs.mkdtempSync(path.join(os.tmpdir(), 'vpai-exp-out-'));
  const prompts = [];
  const config = structuredClone(DEFAULT_CONFIG);
  const deps = { config, signal: new AbortController().signal, getSecret: () => '', workDir: out, outputDir: out, simSpeed: 0.01, emit: () => {} };
  const providers = require('../src/providers');
  const orig = providers.callAgent;
  // nhìn prompt gửi cho AI (giả lập vẫn chạy như thường)
  require.cache[require.resolve('../src/providers')].exports.callAgent = (a, sys, user, ...rest) => { prompts.push(user); return orig(a, sys, user, ...rest); };
  delete require.cache[require.resolve('../src/orchestrator')];
  const { runTask: run2 } = require('../src/orchestrator');
  try {
    const r = await run2({ id: 't3', title: 'Doanh số', text: 'Tổng hợp doanh số quý 3, xuất file Excel', targetId: 'nghien_cuu' }, deps);
    assert.match(r.file, /\.xlsx$/);
    assert.ok(prompts.some((p) => /FILE EXCEL/.test(p) && /BẢNG Markdown/.test(p)));
  } finally { providers.callAgent = orig; }
});
