// ✏️ Sửa tin đã gửi trong tab Chat: hiện ô sửa tại chỗ, Esc huỷ, Gửi lại thì bỏ các trao đổi phía sau và gửi bản mới.
const fs = require('fs');
const path = require('path');
const { launch, check, finish, run } = require('./helpers');

run(async () => {
  const { app, win, errors, shot, userData } = await launch({ prefix: 'edit', config: { lobbyEnabled: false, autoUpdate: false } });
  await win.waitForSelector('.viewtabs');
  await win.waitForTimeout(1500);
  if (await win.locator('#modal:not(.hidden)').count()) await win.click('#modalClose');
  const t = await win.evaluate(() => window.vp.chat.create({ title: 'Thử sửa tin nhắn' }));
  const msgs = [
    { role: 'user', text: 'Viết dàn ý bài blog về AI', ts: 1 }, { role: 'assistant', status: 'done', model: '', blocks: [{ kind: 'text', text: '1. Mở bài\n2. Thân bài' }], files: [], ts: 2 },
    { role: 'user', text: 'Viết đoạn mở bài', ts: 3 }, { role: 'assistant', status: 'done', model: '', blocks: [{ kind: 'text', text: 'AI đang thay đổi…' }], files: [], ts: 4 },
  ];
  const f = path.join(userData, 'chats', t.id + '.json');
  fs.writeFileSync(f, JSON.stringify({ ...JSON.parse(fs.readFileSync(f, 'utf8')), messages: msgs, model: 'ollama::khong-co' }));
  await win.click('.viewtabs button[data-v="chat"]');
  await win.evaluate((id) => window.VPChat.openThread(id), t.id);
  await win.waitForSelector('.cmsg.me >> nth=1');

  await win.hover('.cmsg.me >> nth=0');
  await win.click('.cmsg.me >> nth=0 >> text=✏️ Sửa');
  await win.waitForSelector('.uedit textarea');
  check(await win.inputValue('.uedit textarea') === 'Viết dàn ý bài blog về AI', 'ô sửa hiện đúng nội dung cũ');
  check(/1 lượt hỏi phía sau/.test(await win.locator('.uedit-foot').innerText()), 'báo trước sẽ thay các lượt phía sau');
  await shot('editing');
  await win.press('.uedit textarea', 'Escape');
  check(await win.locator('.uedit').count() === 0 && await win.locator('.cmsg.me').count() === 2, 'Esc huỷ sửa, giữ nguyên đoạn chat');

  await win.hover('.cmsg.me >> nth=0');
  await win.click('.cmsg.me >> nth=0 >> text=✏️ Sửa');
  await win.fill('.uedit textarea', 'Viết dàn ý bài blog về AI cho người mới bắt đầu');
  await win.click('text=↻ Gửi lại');
  await win.waitForFunction(() => document.querySelectorAll('.cmsg.me').length === 1 && /người mới bắt đầu/.test(document.querySelector('.cmsg.me').innerText), null, { timeout: 15000 });
  check(true, 'gửi lại: bỏ trao đổi phía sau, tin đã sửa hiện ở cuối');
  await win.waitForFunction(() => !document.querySelector('.cmsg.bot.running'), null, { timeout: 60000 }).catch(() => {});
  const saved = JSON.parse(fs.readFileSync(f, 'utf8'));
  check(saved.messages.filter((m) => m.role === 'user').map((m) => m.text).join('|') === 'Viết dàn ý bài blog về AI cho người mới bắt đầu', 'lịch sử lưu trên máy đã cắt đúng');
  check(fs.readdirSync(path.join(userData, 'chats', '_backup')).some((x) => x.startsWith(t.id)), 'có bản sao lưu trước khi sửa');
  await shot('after');
  await finish(app, errors);
});
