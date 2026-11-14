// 🛟 Khôi phục đoạn chat: lỡ xoá / bị mất tin → mục "Khôi phục đoạn chat" ở thanh bên lấy lại từ bản sao lưu tự động.
const fs = require('fs');
const path = require('path');
const { launch, check, finish, run } = require('./helpers');

run(async () => {
  const { app, win, errors, shot, userData } = await launch({ prefix: 'recover', config: { lobbyEnabled: false, autoUpdate: false } });
  await win.waitForSelector('.viewtabs');
  await win.waitForTimeout(1500);
  if (await win.locator('#modal:not(.hidden)').count()) await win.click('#modalClose');
  await win.click('.viewtabs button[data-v="chat"]');
  const t = await win.evaluate(() => window.vp.chat.create({ title: 'Brief nâng cấp Q5 cho KOC' }));
  const f = path.join(userData, 'chats', t.id + '.json');
  const msgs = [{ role: 'user', text: 'Soạn brief', ts: 1 }, { role: 'assistant', status: 'done', blocks: [{ kind: 'text', text: 'Brief…' }], files: [], ts: 2 }];
  fs.writeFileSync(f, JSON.stringify({ ...JSON.parse(fs.readFileSync(f, 'utf8')), messages: msgs }));
  await win.evaluate((id) => window.vp.chat.remove(id, false), t.id);
  await win.click('.ch-recover');
  await win.waitForSelector('.arch-row:has-text("Brief nâng cấp Q5 cho KOC")');
  check(/Đã xoá · 2 tin/.test(await win.locator('.arch-row').first().innerText()), 'đoạn chat vừa xoá hiện trong Khôi phục (2 tin)');
  await shot('list');
  await win.click('.arch-row >> text=↩ Khôi phục');
  await win.waitForFunction(() => document.querySelectorAll('.cmsg').length >= 2, null, { timeout: 8000 });
  check(fs.existsSync(f) && JSON.parse(fs.readFileSync(f, 'utf8')).messages.length === 2, 'khôi phục: file đoạn chat trở lại đủ tin và mở ra ngay');
  await finish(app, errors);
});
