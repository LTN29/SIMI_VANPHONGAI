// Giao diện 📚 Skill: tạo skill bằng form, thấy ngay trong danh sách / (gọi skill), sửa, nhập file .md, xoá.
const fs = require('fs');
const os = require('os');
const path = require('path');
const { launch, check, finish, run } = require('./helpers');

run(async () => {
  const home = fs.mkdtempSync(path.join(os.tmpdir(), 'vpai-uiskills-'));
  const { app, win, errors, shot } = await launch({ prefix: 'skills', env: { CODEX_HOME: home, PATH: '/usr/bin:/bin' } });
  await win.click('.sheet footer .linkbtn').catch(() => {});
  await win.click('.viewtabs button[data-v="chat"]');
  // mở từ ô gọi skill: gõ / → "＋ Thêm skill"
  await win.fill('#chInput', '/');
  await win.dispatchEvent('#chInput', 'input');
  await win.waitForSelector('#chSkillPop:not(.hidden) .sp-add');
  await win.dispatchEvent('#chSkillPop .sp-add', 'mousedown');
  await win.waitForSelector('.skm');
  check(await win.locator('.skm-tab.on').innerText() === '＋ Tạo mới', 'chưa có skill riêng → mở thẳng form tạo mới');
  await win.fill('.skm-name input', 'Báo cáo tuần phòng Kinh doanh');
  check((await win.locator('.skm-slug').innerText()) === '$bao-cao-tuan-phong-kinh-doanh', 'tên gọi không dấu hiện ngay');
  await win.fill('.skm textarea >> nth=0', 'Viết báo cáo tuần của phòng Kinh doanh theo mẫu công ty, dùng khi được nhờ làm báo cáo tuần.');
  await shot('form');
  await win.click('.skm .btn.primary');
  await win.waitForSelector('.skm-row');
  check(fs.existsSync(path.join(home, 'skills', 'bao-cao-tuan-phong-kinh-doanh', 'SKILL.md')), 'đã ghi SKILL.md vào thư mục skill của Codex');
  check(await win.locator('.skm-row').count() === 1, 'danh sách "Skill của bạn" có skill vừa tạo');
  await shot('list');

  // sửa
  await win.click('.skm-row .btn:has-text("Sửa")');
  await win.waitForSelector('.skm-name input[disabled]');
  await win.fill('.skm textarea >> nth=1', '## Các bước\n1. Hỏi doanh số tuần\n2. Viết báo cáo');
  await win.click('.skm .btn.primary');
  await win.waitForSelector('.skm-row');
  check(/Hỏi doanh số tuần/.test(fs.readFileSync(path.join(home, 'skills', 'bao-cao-tuan-phong-kinh-doanh', 'SKILL.md'), 'utf8')), 'sửa hướng dẫn được lưu');

  // nhập SKILL.md lẻ (thay cho hộp chọn file: gọi thẳng API mà nút "Chọn file" dùng)
  const md = path.join(home, 'mau-email.md');
  fs.writeFileSync(md, '---\nname: mau-email\ndescription: Soạn email chào hàng theo mẫu công ty\n---\nNội dung');
  await win.click('.skm-tab:has-text("Nhập từ file")');
  await win.waitForSelector('.skm-drop');
  await win.evaluate((p) => window.vp.skills.import([p]), md);
  await win.click('.skm-tab:has-text("Skill của bạn")');
  await win.click('.skm-tab:has-text("Nhập từ file")'); // render lại sau khi nạp
  await win.click('.skm-tab:has-text("Skill của bạn")');

  // dùng skill → chèn vào ô chat
  await win.click('.skm-row .btn:has-text("Dùng") >> nth=0');
  check(/\$bao-cao-tuan-phong-kinh-doanh/.test(await win.inputValue('#chInput')), 'bấm Dùng → chèn $tên-skill vào ô chat');

  // ô / gọi skill có nút Thêm skill + thấy skill mới
  await win.fill('#chInput', '/bao');
  await win.dispatchEvent('#chInput', 'input');
  await win.waitForSelector('#chSkillPop:not(.hidden) .sp-add');
  check(await win.locator('#chSkillPop .sp').filter({ hasText: 'bao-cao-tuan' }).count() === 1, 'gõ / thấy skill vừa tạo');
  await shot('pop');

  // xoá (2 lần bấm)
  await win.fill('#chInput', '');
  await win.click('#chTools');
  await win.click('.tools-pop .linkbtn:has-text("Quản lý skill")');
  await win.waitForSelector('.skm-row');
  check(await win.locator('.skm-row').filter({ hasText: 'mau-email' }).count() === 1, 'skill nhập từ file .md có trong danh sách');
  const row = win.locator('.skm-row').filter({ hasText: 'bao-cao-tuan' });
  await row.locator('.btn.danger').click();
  await row.locator('.btn.danger.armed').click();
  await win.waitForFunction(() => ![...document.querySelectorAll('.skm-row')].some((r) => /bao-cao-tuan/.test(r.textContent)));
  check(!fs.existsSync(path.join(home, 'skills', 'bao-cao-tuan-phong-kinh-doanh')), 'xoá skill (bấm 2 lần để chắc chắn)');
  await shot('after-delete');
  await finish(app, errors);
});
