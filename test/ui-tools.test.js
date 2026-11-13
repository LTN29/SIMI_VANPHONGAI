// Test Computer Use + trình duyệt SIMI + hỏi quyền trong Chat + tự cập nhật app.
// Codex CLI thật chạy qua gateway giả lập, MCP giả (test/fixtures/fake-mcp.js), máy chủ cập nhật giả.
const fs = require('fs');
const path = require('path');
const http = require('http');
const crypto = require('crypto');
const { execFileSync } = require('child_process');
const { launch, check, finish, run } = require('./helpers');
const { startGateway, makeCodexHome, GATEWAY_ENV } = require('./fixtures/mock-gateway');

function findCodex() {
  if (process.env.CODEX_BIN) return path.dirname(process.env.CODEX_BIN);
  try { return path.dirname(execFileSync(process.platform === 'win32' ? 'where' : 'which', ['codex'], { encoding: 'utf8' }).split(/\r?\n/)[0]); } catch { return null; }
}
const say = async (win, text) => { await win.click('#chInput'); await win.fill('#chInput', text); await win.keyboard.press('Enter'); };
const doneCount = (win, n) => win.waitForFunction((k) => document.querySelectorAll('.cmsg.bot:not(.running)').length >= k, n, { timeout: 90000 });

// máy chủ phát hành giả: latest.json + 1 file cho đúng loại máy đang chạy test
function startReleaseServer(kind, body) {
  const name = { 'linux-deb': 'VanPhongAI-9.9.9-linux-amd64.deb', 'linux-appimage': 'VanPhongAI-9.9.9-linux-x86_64.AppImage', 'win-setup': 'VanPhongAI-9.9.9-Setup.exe', 'win-portable': 'VanPhongAI-9.9.9-portable.exe' }[kind] || 'VanPhongAI-9.9.9-mac-arm64.zip';
  const sha256 = crypto.createHash('sha256').update(body).digest('hex');
  const latest = { app: 'vanphong-ai', version: '9.9.9', notes: '- **Computer Use** trong Chat\n- Tự cập nhật 1 nút', files: { [kind]: { name, size: body.length, sha256 } } };
  const st = { published: false }; // lúc đầu chưa có bản nào – "đăng" giữa bài test
  const server = http.createServer((req, res) => {
    if (req.url === '/latest.json' && st.published) { res.writeHead(200, { 'content-type': 'application/json' }); return res.end(JSON.stringify(latest)); }
    if (req.url === '/' + name) { res.writeHead(200, { 'content-length': body.length }); return res.end(body); }
    res.writeHead(404); res.end();
  });
  return new Promise((r) => server.listen(0, '127.0.0.1', () => r({ server, url: `http://127.0.0.1:${server.address().port}`, publish: () => { st.published = true; } })));
}

run(async () => {
  const codexDir = findCodex();
  if (!codexDir) { console.log('BỎ QUA: không tìm thấy Codex CLI (npm i -g @openai/codex hoặc đặt CODEX_BIN)'); return; }
  const gw = await startGateway();
  const codexHome = makeCodexHome(gw.url, { mcp: ['computer-use', 'simi_browser'] });
  const kind = process.platform === 'win32' ? 'win-setup' : process.platform === 'darwin' ? 'mac-arm64' : 'linux-deb';
  const payload = crypto.randomBytes(300 * 1024);
  const rel = await startReleaseServer(kind, payload);
  const sep = process.platform === 'win32' ? ';' : ':';
  const { app, win, errors, shot, userData } = await launch({
    prefix: 'tools', config: { chatEngine: 'cli', computerMinimize: false, builtinBrowser: false }, // kiểm tra đường cũ: Chrome SIMI riêng
    env: { ...GATEWAY_ENV, CODEX_HOME: codexHome, PATH: codexDir + sep + process.env.PATH, VPAI_UPDATE_URL: rel.url },
  });
  await win.waitForSelector('.welcome', { timeout: 20000 });
  await win.click('#modalClose');
  await win.click('.viewtabs button[data-v="chat"]');
  await win.waitForFunction(() => document.querySelectorAll('#chModel option').length >= 3, null, { timeout: 30000 });

  // ---- 🧰 Công cụ: trạng thái Computer Use + trình duyệt SIMI ----
  await win.click('#chTools');
  await win.waitForSelector('.tools-pop .tp-card', { timeout: 60000 });
  const pop = await win.locator('.tools-pop').innerText();
  check(/Computer Use/.test(pop) && /Trình duyệt SIMI/.test(pop), 'bảng Công cụ có Computer Use và trình duyệt SIMI');
  check(/Sẵn sàng|Đã cài/.test(await win.locator('.tools-pop .tp-card', { hasText: 'Trình duyệt SIMI' }).innerText()), 'trình duyệt SIMI sẵn sàng');
  check(/Codex CLI/.test(pop), 'ghi rõ động cơ Codex đang dùng');
  await shot('01-tools');
  await win.locator('.tools-pop .tp-card', { hasText: 'Trình duyệt SIMI' }).locator('button', { hasText: 'Mở để đăng nhập' }).click();
  const toastTxt = await win.waitForFunction(() => { const t = document.body.innerText.match(/Đã mở Chrome SIMI[^\n]*|Không mở được[^\n]*/); return t && t[0]; }, null, { timeout: 30000 }).then((h) => h.jsonValue());
  check(/^Đã mở Chrome SIMI/.test(toastTxt), 'nút mở Chrome SIMI để đăng nhập' + (/^Đã/.test(toastTxt) ? '' : ': ' + toastTxt));
  await win.mouse.click(5, 300);

  // ---- trình duyệt SIMI: chạy luôn, không hỏi quyền ----
  await say(win, 'Xem giá áo trên Shopee mcp-test:simi_browser:browser_read_pages');
  await doneCount(win, 1);
  check(await win.locator('.cask').count() === 0, 'trình duyệt SIMI không phải hỏi quyền từng lần');
  check(/Trang Shopee: Áo thun SIMI giá 199\.000đ/.test(await win.locator('.cmsg.bot').last().innerText()), 'đọc được trang qua trình duyệt SIMI');
  check((await win.locator('.cmsg.bot .step .sic').first().textContent()) === '🧭', 'bước trình duyệt có biểu tượng riêng');

  // ---- Computer Use: hỏi quyền dùng công cụ → hỏi quyền dùng app → kết quả + ảnh màn hình ----
  await say(win, 'Mở Notepad bấm Lưu mcp-test:computer-use:click');
  await win.waitForSelector('.cask.live', { timeout: 60000 });
  check(/Computer Use/.test(await win.locator('.cask.live').innerText()), 'hiện hộp xin phép dùng Computer Use');
  check(await win.locator('.cask.live .abtns button').count() >= 3, 'có Cho phép / Luôn cho phép / Từ chối');
  await shot('02-ask-tool');
  await win.locator('.cask.live .abtns button', { hasText: 'Luôn cho phép trong đoạn chat này' }).click();
  await win.waitForFunction(() => [...document.querySelectorAll('.cask.live')].some((n) => /Notepad/.test(n.innerText)), null, { timeout: 30000 });
  check(true, 'Computer Use hỏi tiếp quyền dùng app Notepad');
  await shot('03-ask-app');
  await win.locator('.cask.live .abtns button', { hasText: 'Đồng ý' }).click();
  await doneCount(win, 2);
  const last = await win.locator('.cmsg.bot').last().innerText();
  check(/Đã bấm nút Lưu trong Notepad/.test(last), 'Computer Use chạy xong sau khi cho phép');
  check(await win.locator('.cmsg.bot').last().locator('.cask.done').count() === 2, 'hộp xin phép ghi lại lựa chọn');
  await win.evaluate(() => document.querySelectorAll('.cmsg.bot:last-child details').forEach((d) => { d.open = true; }));
  await win.waitForSelector('.cmsg.bot:last-child .sshot img[src^="data:"]', { timeout: 10000 });
  check(true, 'hiện ảnh màn hình từ Computer Use trong bước công cụ');
  await shot('04-cu-done');

  // lần sau trong cùng đoạn chat: đã chọn "Luôn cho phép" → không hỏi lại công cụ, chỉ hỏi app
  await say(win, 'Bấm Lưu lần nữa mcp-test:computer-use:click');
  await win.waitForSelector('.cmsg.bot:last-child .cask.live', { timeout: 60000 });
  check(/Notepad/.test(await win.locator('.cmsg.bot:last-child .cask.live').innerText()) && await win.locator('.cmsg.bot:last-child .cask').count() === 1, 'nhớ "Luôn cho phép" công cụ trong đoạn chat');
  await win.locator('.cask.live .abtns button', { hasText: 'Từ chối' }).click();
  await doneCount(win, 3);
  check(/Người dùng không cho dùng Notepad/.test(await win.locator('.cmsg.bot').last().innerText()), 'Từ chối thì Computer Use không làm');
  const saved = JSON.parse(fs.readFileSync(path.join(userData, 'chats', fs.readdirSync(path.join(userData, 'chats')).find((f) => f.endsWith('.json'))), 'utf8'));
  check((saved.allow || []).includes('mcp:computer-use:click'), 'lưu lựa chọn vào đoạn chat');

  // ---- 🖱️ Điều khiển máy tính (vp_computer): AI tự bấm vào ô chat của chính app và gõ chữ ----
  const target = await win.evaluate(() => { const r = document.querySelector('#chInput').getBoundingClientRect(); return { x: r.left + 40, y: r.top + r.height / 2 }; });
  const content = await app.evaluate(({ BrowserWindow }) => BrowserWindow.getAllWindows()[0].getContentBounds());
  const screenW = Number(process.env.VPC_TEST_SCREEN_W || 1600);
  const scale = Math.min(1, 1280 / screenW, 800 / Number(process.env.VPC_TEST_SCREEN_H || 1000));
  const img = { x: Math.round((content.x + target.x) * scale), y: Math.round((content.y + target.y) * scale) };
  gw.plan = [
    { tool: 'screenshot' },
    { tool: 'click', args: img },
    { tool: 'type_text', args: { text: 'Xin chào từ AI' } },
    { tool: 'press_keys', args: { keys: 'ctrl+a', screenshot: false } },
  ];
  // gõ @ như ChatGPT Work → chọn "Máy tính"
  await win.click('#chInput'); await win.fill('#chInput', ''); await win.keyboard.type('@má');
  await win.waitForSelector('#chSkillPop:not(.hidden) .sp', { timeout: 20000 });
  const popTxt = await win.locator('#chSkillPop').innerText();
  check(/Máy tính/.test(popTxt) && /Trình duyệt SIMI/.test(await (async () => { await win.keyboard.press('Backspace'); await win.keyboard.press('Backspace'); await win.waitForTimeout(200); return win.locator('#chSkillPop').innerText(); })()), 'gõ @ hiện menu Máy tính, Trình duyệt SIMI');
  await shot('05a-mention');
  await win.keyboard.type('má'); await win.keyboard.press('Enter');
  check((await win.inputValue('#chInput')).startsWith('@Máy tính '), 'chọn @Máy tính chèn vào ô chat');
  await win.keyboard.type('gõ thử vào ô chat pc-test'); await win.keyboard.press('Enter');
  await win.waitForSelector('.cmsg.bot:last-child .cask.live', { timeout: 60000 });
  check(/điều khiển chuột & bàn phím/.test(await win.locator('.cmsg.bot:last-child .cask.live').innerText()), 'hỏi cho phép điều khiển chuột & bàn phím');
  await shot('05-pc-ask');
  await win.locator('.cask.live .abtns button', { hasText: 'Cho phép trong đoạn chat này' }).click();
  await doneCount(win, 4);
  const lastPc = await win.locator('.cmsg.bot').last().innerText();
  check(/Xong 4 bước điều khiển máy/.test(lastPc), 'AI làm đủ các bước điều khiển máy');
  check(await win.locator('.cmsg.bot:last-child .cask').count() === 1, 'cho phép 1 lần cho cả chuỗi thao tác');
  await win.evaluate(() => document.querySelectorAll('.cmsg.bot:last-child details').forEach((d) => { d.open = true; }));
  const typed = await win.inputValue('#chInput');
  check(typed.includes('Xin chào từ AI'), 'AI bấm đúng ô chat và gõ được chữ tiếng Việt' + (typed.includes('Xin chào từ AI') ? '' : ' – ô chat: ' + JSON.stringify(typed) + ' ' + (await win.locator('.cmsg.bot:last-child .mbody').innerText()).slice(0, 600)));
  check(gw.log.some((l) => l.toolImage), 'ảnh màn hình tới được model');
  check(gw.log.some((l) => /Người dùng chọn @Máy tính[^)]*vp_computer/.test(l.userText || '')), '@Máy tính báo AI dùng công cụ điều khiển máy');
  check(await win.locator('.cmsg.me .skchip.mention', { hasText: 'Máy tính' }).count() >= 1, 'tin nhắn hiện nhãn @Máy tính');
  await win.evaluate(() => document.querySelectorAll('.cmsg.bot:last-child details').forEach((d) => { d.open = true; }));
  const stepsTxt = await win.locator('.cmsg.bot:last-child .mbody').innerText();
  check(/Chụp màn hình/.test(stepsTxt) && /Bấm \(\d+, \d+\)/.test(stepsTxt) && /Gõ: Xin chào từ AI/.test(stepsTxt), 'các bước ghi rõ: chụp màn hình, bấm, gõ');
  check(!/"content":\[/.test(stepsTxt) && await win.locator('.cmsg.bot:last-child .sshot img').count() >= 2, 'kết quả từng bước gọn gàng, có ảnh màn hình');
  await shot('06-pc-done');
  await win.fill('#chInput', '');

  // ---- tự cập nhật app: đăng bản mới → app tự tải sẵn → thẻ "Cập nhật ngay" ----
  rel.publish();
  await win.click('#btnSettings');
  await win.locator('.upd-row button', { hasText: 'Kiểm tra bản mới' }).click();
  await win.waitForSelector('#btnUpdate', { timeout: 20000 });
  // tự kiểm tra thì mở luôn hộp chi tiết; tải sẵn xong hộp ghi "đã tải sẵn"
  await win.waitForSelector('.upd-ver small:has-text("đã tải sẵn")', { timeout: 30000 });
  await win.click('#modalClose');
  await win.waitForSelector('#updCard', { timeout: 10000 });
  check(/9\.9\.9/.test(await win.locator('#btnUpdate').innerText()), 'thanh trên cùng báo có bản mới');
  check(/sẵn sàng/.test(await win.locator('#updCard').innerText()) && await win.locator('#updCard button', { hasText: 'Cập nhật ngay' }).count() === 1, 'tự tải sẵn rồi hiện thẻ "Cập nhật ngay"');
  check(/Computer Use/.test(await win.locator('#updCard .uc-notes').innerText()), 'thẻ có ghi chú bản mới');
  const dl = path.join(userData, 'updates');
  const got = fs.readdirSync(dl).find((f) => f.startsWith('VanPhongAI-9.9.9') && !f.endsWith('.part'));
  check(got && fs.readFileSync(path.join(dl, got)).equals(payload), 'tải đủ file, khớp SHA-256');
  await shot('07-update-card');
  await win.locator('#updCard button', { hasText: 'Xem chi tiết' }).click();
  await win.waitForSelector('.upd-box', { timeout: 10000 });
  check(/Computer Use/.test(await win.locator('.upd-notes').innerText()) && await win.locator('.sheet footer .btn.primary', { hasText: 'Cập nhật ngay' }).count() === 1, 'chi tiết bản mới có nút "Cập nhật ngay"');
  await shot('08-update-detail');
  await win.locator('.sheet footer .btn', { hasText: 'Để sau' }).click();
  await win.waitForFunction(() => !document.querySelector('#updCard'), null, { timeout: 5000 });
  check(/Cập nhật 9\.9\.9/.test(await win.locator('#btnUpdate').innerText()), '"Để sau" ẩn thẻ, nút trên cùng vẫn còn');

  rel.server.close();
  await finish(app, errors);
  gw.server.close();
  try { fs.rmSync(codexHome, { recursive: true, force: true }); } catch { /* Codex còn ghi file tạm */ }
});
