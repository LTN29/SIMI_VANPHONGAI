// 🧠 Ghi nhớ của đoạn chat: dòng "Nhớ gọn N tin" ở đầu đoạn chat, bấm để xem / sửa ghi nhớ.
const fs = require('fs');
const path = require('path');
const { launch, check, finish, run } = require('./helpers');

run(async () => {
  const { app, win, errors, shot, userData } = await launch({ prefix: 'memo', config: { lobbyEnabled: false, autoUpdate: false } });
  await win.waitForSelector('.viewtabs');
  await win.waitForTimeout(1500);
  if (await win.locator('#modal:not(.hidden)').count()) await win.click('#modalClose');
  await win.click('.viewtabs button[data-v="chat"]');
  const t = await win.evaluate(() => window.vp.chat.create({ title: 'Máy hút bụi Q5' }));
  const f = path.join(userData, 'chats', t.id + '.json');
  const msgs = Array.from({ length: 24 }, (_, i) => (i % 2 ? { role: 'assistant', status: 'done', blocks: [{ kind: 'text', text: 'Trả lời ' + i }], files: [], ts: i } : { role: 'user', text: 'Hỏi ' + i, ts: i }));
  fs.writeFileSync(f, JSON.stringify({ ...JSON.parse(fs.readFileSync(f, 'utf8')), messages: msgs, memo: { text: '## Sản phẩm\n- Q5: pin 60 phút', upTo: 16, at: Date.now() } }));
  await win.evaluate((id) => window.VPChat.openThread(id), t.id);
  await win.waitForSelector('.ch-memo');
  check(/Nhớ gọn 16 tin/.test(await win.locator('.ch-memo').innerText()), 'đầu đoạn chat hiện "🧠 Nhớ gọn 16 tin"');
  await win.click('.ch-memo');
  await win.waitForSelector('.memo-ta');
  check(/pin 60 phút/.test(await win.inputValue('.memo-ta')), 'mở được ghi nhớ đã tóm');
  await shot('modal');
  await win.fill('.memo-ta', '## Sản phẩm\n- Q5: pin 60 phút, 2 nút trên tay cầm');
  await win.click('#modal button:has-text("Lưu")');
  await win.waitForTimeout(600);
  check(/2 nút trên tay cầm/.test(JSON.parse(fs.readFileSync(f, 'utf8')).memo.text), 'sửa ghi nhớ được lưu lại');
  await finish(app, errors);
});
