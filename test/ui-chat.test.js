// Test tab Chat + SIMI Gateway: Codex CLI thật chạy qua gateway giả lập (cần lệnh `codex` trên PATH hoặc biến CODEX_BIN).
const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');
const { launch, check, finish, run } = require('./helpers');
const { startGateway, makeCodexHome, GATEWAY_ENV } = require('./fixtures/mock-gateway');

function findCodex() {
  if (process.env.CODEX_BIN) return path.dirname(process.env.CODEX_BIN);
  try { return path.dirname(execFileSync(process.platform === 'win32' ? 'where' : 'which', ['codex'], { encoding: 'utf8' }).split(/\r?\n/)[0]); } catch { return null; }
}

const doneCount = (win, n) => win.waitForFunction((k) => document.querySelectorAll('.cmsg.bot:not(.running)').length >= k, n, { timeout: 90000 });
const say = async (win, text) => { await win.click('#chInput'); await win.keyboard.type(text); await win.keyboard.press('Enter'); };

run(async () => {
  const codexDir = findCodex();
  if (!codexDir) { console.log('BỎ QUA: không tìm thấy Codex CLI (npm i -g @openai/codex hoặc đặt CODEX_BIN)'); return; }
  const gw = await startGateway();
  const codexHome = makeCodexHome(gw.url);
  const sep = process.platform === 'win32' ? ';' : ':';
  const { app, win, errors, shot } = await launch({ prefix: 'chat', env: { ...GATEWAY_ENV, CODEX_HOME: codexHome, PATH: codexDir + sep + process.env.PATH } });

  await win.waitForSelector('.welcome', { timeout: 20000 });
  await win.click('.sheet footer .btn.primary'); // Kết nối tài khoản
  await win.waitForSelector('.acc-card.simi .pill.on', { timeout: 60000 });
  check(await win.locator('.acc-card.simi .simi-checks li.ok').count() >= 4, 'thẻ SIMI nhận Codex, Gateway, key, skill');
  await win.waitForTimeout(1500); await shot('01-accounts');
  await win.click('#modalClose');

  await win.click('.viewtabs button[data-v="chat"]');
  await win.waitForSelector('.qskills .qs', { timeout: 20000 });
  check(await win.locator('#chModel option').count() >= 3, 'danh sách model lấy từ Gateway');
  await shot('02-empty');

  await win.click('#chInput'); await win.keyboard.type('/tao');
  await win.waitForSelector('.ch-skillpop .sp');
  await shot('03-skillpop');
  await win.keyboard.press('Enter');
  check((await win.inputValue('#chInput')).startsWith('$simi-tao-anh'), 'chèn skill bằng / + Enter');
  await win.keyboard.type('vẽ con mèo xanh dễ thương'); await win.keyboard.press('Enter');
  await win.waitForSelector('.cmsg.bot .mfile.img img[src^="data:"]', { timeout: 90000 });
  check(await win.locator('.cmsg.bot .step').count() >= 1, 'hiện bước chạy lệnh của skill');
  check((await win.locator('.cmsg.bot .bname b').first().textContent()) === 'Minh', 'câu trả lời ghi rõ nhân sự phụ trách (mặc định Trưởng phòng)');
  check((await win.locator('#chWho').textContent()).includes('Minh'), 'thanh ô nhập hiện người phụ trách');
  check(await win.locator('.ch-item').first().innerText().then((t) => t.startsWith('Vẽ con mèo')), 'tiêu đề đoạn chat bỏ mã skill');
  await shot('04-skill-result');

  await win.evaluate(async () => { // dán ảnh từ clipboard
    const c = document.createElement('canvas'); c.width = 160; c.height = 120;
    const g = c.getContext('2d'); g.fillStyle = '#f5c518'; g.fillRect(0, 0, 160, 120); g.fillStyle = '#0a78f0'; g.beginPath(); g.arc(80, 60, 40, 0, 7); g.fill();
    const blob = await new Promise((r) => c.toBlob(r, 'image/png'));
    const dt = new DataTransfer(); dt.items.add(new File([blob], 'anh-chup.png', { type: 'image/png' }));
    document.querySelector('#chInput').dispatchEvent(new ClipboardEvent('paste', { clipboardData: dt, bubbles: true, cancelable: true }));
  });
  await win.waitForSelector('.ch-atts .att.img img[src^="data:"]', { timeout: 10000 });
  await say(win, 'Ảnh này là gì vậy?');
  await doneCount(win, 2);
  check(gw.log.some((l) => l.image), 'ảnh đính kèm tới được Gateway');
  await win.click('#chWho'); await win.locator('.who-menu .wm', { hasText: 'Hùng' }).click();
  check((await win.locator('.ch-head small').textContent()).includes('Phụ trách: Hùng'), 'đổi người phụ trách giữa chừng');
  await say(win, 'Lập bảng markdown kế hoạch tuần');
  await doneCount(win, 3);
  check(await win.locator('.cmsg.bot .md table').count() === 1, 'hiển thị bảng Markdown');
  check(gw.log.filter((l) => l.method === 'POST').every((l) => l.auth === 'Bearer ' + GATEWAY_ENV.LTN_TEAM_API_KEY && l.client === GATEWAY_ENV.LTN_CLIENT_ID), 'gửi đúng key team + client ID');
  await shot('05-conversation');
  check((await win.locator('.cmsg.bot .bname b').last().textContent()) === 'Hùng', 'câu trả lời sau khi đổi do Hùng phụ trách');
  check(gw.log.filter((l) => l.method === 'POST').length >= 3, 'các lượt chat đi qua Gateway');

  // nhật ký phòng không bị ảnh hưởng bởi kiểu tin nhắn của chat
  await win.click('.viewtabs button[data-v="office"]');
  check(await win.locator('#log .msg').evaluateAll((ns) => ns.every((n) => getComputedStyle(n).display === 'grid')), 'nhật ký phòng giữ đúng bố cục');
  check(await win.locator('#log .msg', { hasText: '💬' }).count() >= 4, 'việc chat hiện trong Nhật ký phòng của văn phòng');
  await win.evaluate(() => window.__office.applyDaylight && window.__office.applyDaylight(11));
  await win.waitForTimeout(1200);
  const b = await win.locator('.plate3d').filter({ hasText: 'Nghiên cứu' }).boundingBox();
  await win.mouse.click(b.x + b.width / 2, b.y + b.height / 2);
  await win.waitForSelector('.interact .ichat'); await win.click('.interact .ichat');
  await win.waitForSelector('.ch-hello .avimg', { timeout: 10000 });
  await say(win, 'Chào em, hôm nay thế nào?');
  await doneCount(win, 1);
  check((await win.locator('.ch-head .ch-tin').inputValue()) === 'Chat với Lan', 'chat riêng với nhân vật');
  await shot('06-agent-chat');

  await win.click('#btnTheme'); await win.locator('.ch-item').filter({ hasText: 'Vẽ con mèo' }).click();
  await win.waitForTimeout(1000); await shot('07-dark');
  await win.click('#btnTheme');

  try { fs.rmSync(codexHome, { recursive: true, force: true }); } catch { /* Codex còn ghi file tạm */ }
  gw.server.close();
  await finish(app, errors);
});
