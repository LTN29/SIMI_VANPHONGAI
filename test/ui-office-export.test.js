// Giao việc có xuất file: chọn Word + tên file + thư mục dự án; ghi "xuất file Excel" trong nội dung → ra .xlsx.
const fs = require('fs');
const os = require('os');
const path = require('path');
const { launch, check, finish, run } = require('./helpers');

run(async () => {
  const proj = fs.mkdtempSync(path.join(os.tmpdir(), 'Du an SIMI '));
  const { app, win, errors, shot, outputDir } = await launch({ prefix: 'export' });
  await win.waitForSelector('.welcome', { timeout: 20000 });
  await win.click('.sheet footer .linkbtn');
  await win.evaluate((d) => { localStorage.setItem('vp.taskDirs', JSON.stringify([d])); }, proj);
  await win.reload();
  await win.waitForSelector('#outDir');
  if (await win.locator('.welcome').count()) await win.click('.sheet footer .linkbtn');

  // 1) chọn Word, đặt tên, chọn thư mục dự án
  await win.fill('#cardTitle', 'Hợp đồng mẫu');
  await win.fill('#cardText', 'Soạn hợp đồng cung cấp linh kiện cho đại lý');
  await win.selectOption('#outFmt', 'docx');
  await win.fill('#outName', 'Hợp đồng đại lý SIMI');
  check((await win.textContent('#outHint')).includes('Hợp đồng đại lý SIMI.docx'), 'hiện trước tên file sẽ xuất');
  await win.click('#outDir');
  await win.click(`.menu button:has-text("${path.basename(proj)}")`);
  check((await win.textContent('#outDir .od-name')) === path.basename(proj), 'đã chọn thư mục dự án');
  await shot('01-composer');
  await win.click('.achip >> nth=2');
  await win.click('#btnGo');
  await win.waitForSelector('#listDone .card', { timeout: 60000 });
  const docx = path.join(proj, 'Hợp đồng đại lý SIMI.docx');
  check(fs.existsSync(docx) && fs.readFileSync(docx).slice(0, 2).toString() === 'PK', 'file Word nằm trong thư mục dự án');
  check((await win.textContent('#listDone .card .cfile')).includes('Hợp đồng đại lý SIMI.docx'), 'thẻ Đã xong ghi tên file');
  check((await win.inputValue('#outName')) === '' && (await win.inputValue('#outFmt')) === 'auto', 'giao xong thì xoá tên file, định dạng về Tự động');
  check((await win.textContent('#outDir .od-name')) === path.basename(proj), 'thư mục dự án được giữ cho lần sau');
  await win.click('#listDone .card >> nth=0');
  await win.waitForSelector('.result-md');
  check((await win.locator('#modalFoot button:has-text("Mở file")').count()) === 1, 'xem trước + nút Mở file');
  await shot('02-result');
  await win.click('#modalClose');

  // 2) ra lệnh trong nội dung, về thư mục kết quả của app
  await win.click('#outDir');
  await win.click('.menu button:has-text("Thư mục kết quả của app")');
  await win.fill('#cardText', 'Tổng hợp doanh số 3 tháng gần nhất rồi xuất file Excel');
  check((await win.textContent('#outHint')).includes('theo lệnh'), 'nhận ra lệnh "xuất file Excel"');
  await win.click('#btnGo');
  await win.waitForFunction(() => document.querySelectorAll('#listDone .card').length >= 2, null, { timeout: 60000 });
  const xlsx = fs.readdirSync(outputDir).filter((f) => f.endsWith('.xlsx'));
  check(xlsx[0] && !/^\d{8}-/.test(xlsx[0]), 'tên file dễ đọc theo tiêu đề: ' + xlsx[0]);
  check(xlsx.length === 1, 'có file Excel trong thư mục kết quả');
  await win.click('.tab[data-tab="tray"]');
  await win.waitForTimeout(400);
  check((await win.locator('.tray-item').count()) >= 2, 'Khay kết quả liệt kê cả file Word ở thư mục dự án');
  await shot('03-tray');

  // 3) PDF in bằng Chromium của app
  await win.fill('#cardText', 'Viết thông báo nghỉ lễ cho nhân viên');
  await win.selectOption('#outFmt', 'pdf');
  await win.fill('#outName', 'Thông báo nghỉ lễ');
  await win.click('#btnGo');
  await win.waitForFunction(() => document.querySelectorAll('#listDone .card').length >= 3, null, { timeout: 60000 });
  const pdf = path.join(outputDir, 'Thông báo nghỉ lễ.pdf');
  check(fs.existsSync(pdf) && fs.readFileSync(pdf).slice(0, 5).toString() === '%PDF-', 'xuất PDF thật');
  await finish(app, errors);
});
