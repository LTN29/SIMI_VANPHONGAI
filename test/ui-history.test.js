// Test liên thông lịch sử với ChatGPT Work / Codex Desktop (cùng ~/.codex):
// hiện đoạn chat theo dự án → mở → chat tiếp ghi ngược về Codex → bên kia chat thêm thì app tự cập nhật.
const fs = require('fs');
const os = require('os');
const path = require('path');
const { execFileSync } = require('child_process');
const { launch, check, finish, run } = require('./helpers');
const { startGateway, makeCodexHome, seedCodexThreads, continueInCodex, GATEWAY_ENV } = require('./fixtures/mock-gateway');
const { CodexAppServer } = require('../src/codex-server');

function findCodexBin() {
  if (process.env.CODEX_BIN) return process.env.CODEX_BIN;
  try { return execFileSync(process.platform === 'win32' ? 'where' : 'which', ['codex'], { encoding: 'utf8' }).split(/\r?\n/)[0]; } catch { return null; }
}

const botCount = (win) => win.locator('.cmsg.bot:not(.running)').count();

run(async () => {
  const codexBin = findCodexBin();
  if (!codexBin) { console.log('BỎ QUA: không tìm thấy Codex CLI (npm i -g @openai/codex hoặc đặt CODEX_BIN)'); return; }
  const gw = await startGateway();
  const home = makeCodexHome(gw.url);
  const work = fs.mkdtempSync(path.join(os.tmpdir(), 'vpai-projects-'));
  const seeded = await seedCodexThreads(codexBin, home, [
    { dir: path.join(work, 'LDPlayer'), prompt: 'Kiểm tra hướng dẫn setup', name: 'Kiểm tra hướng dẫn setup' },
    { dir: path.join(work, 'LDPlayer'), prompt: 'Chào hỏi', name: 'Chào hỏi' },
    { dir: path.join(work, 'SIMI'), prompt: 'Lập bảng markdown kế hoạch tuần', name: 'Kế hoạch tuần SIMI' },
  ]);
  const sep = process.platform === 'win32' ? ';' : ':';
  const { app, win, errors, shot } = await launch({ prefix: 'history', env: { ...GATEWAY_ENV, CODEX_HOME: home, PATH: path.dirname(codexBin) + sep + process.env.PATH } });
  await win.waitForSelector('.welcome', { timeout: 20000 });
  await win.click('.sheet footer .linkbtn');
  await win.click('.viewtabs button[data-v="chat"]');

  await win.waitForSelector('.ch-item.ext', { timeout: 60000 });
  const groups = await win.locator('.ch-grp .gname').allTextContents();
  check(groups.some((g) => g.includes('LDPlayer')) && groups.some((g) => g.includes('SIMI')), 'nhóm theo dự án như ChatGPT Work (LDPlayer, SIMI)');
  check(await win.locator('.ch-item.ext').count() === 3, 'hiện đủ 3 đoạn chat từ ChatGPT Work');
  check(await win.locator('.ch-item.ext', { hasText: 'Kế hoạch tuần SIMI' }).count() === 1, 'dùng đúng tên đoạn chat bên kia');
  await shot('01-sidebar');

  await win.locator('.ch-item.ext', { hasText: 'Kế hoạch tuần SIMI' }).click();
  await win.waitForSelector('.cmsg.bot .md table', { timeout: 30000 });
  check(await win.locator('.cmsg.me').count() === 1, 'nạp tin nhắn cũ của người dùng');
  check((await win.locator('.ch-head .ch-tin').inputValue()) === 'Kế hoạch tuần SIMI', 'tiêu đề giữ nguyên');
  check(await win.locator('.ch-item.ext').count() === 2, 'đoạn đã mở chuyển thành đoạn chat của app');
  check((await win.locator('.ch-head .chip').textContent()).includes('SIMI'), 'khung chat hiện đúng thư mục dự án');
  await shot('02-opened');

  // chat tiếp trong app → ghi vào đúng phiên Codex đó
  await win.click('#chInput'); await win.keyboard.type('Thêm thứ 6 họp tổng kết'); await win.keyboard.press('Enter');
  await win.waitForFunction(() => document.querySelectorAll('.cmsg.bot:not(.running)').length >= 2, null, { timeout: 90000 });
  const id = seeded[2].id;
  process.env.CODEX_HOME = home;
  const srv = new CodexAppServer(() => codexBin);
  const th = await srv.readThread(id);
  check(th.turns.length === 2, 'tin nhắn mới nằm trong cùng đoạn chat của ChatGPT Work');

  // "ChatGPT Work" chat thêm → app tự nạp lại khi mở đoạn đó
  await continueInCodex(codexBin, home, id, 'Tin nhắn gửi từ ChatGPT Work');
  await win.locator('.ch-item', { hasText: 'Chào hỏi' }).click();
  await win.waitForTimeout(1500);
  await win.locator('.ch-item', { hasText: 'Kế hoạch tuần SIMI' }).click();
  await win.waitForFunction(() => [...document.querySelectorAll('.cmsg.me')].some((n) => n.innerText.includes('Tin nhắn gửi từ ChatGPT Work')), null, { timeout: 30000 });
  check(await botCount(win) === 3, 'tự cập nhật tin nhắn mới từ ChatGPT Work');
  await shot('03-synced');

  // ---- lưu trữ + xóa ----
  const listCodex = async (archived) => (await srv.listThreads(50, archived)).map((t) => t.id);
  // lưu trữ đoạn đã mở trong app (nút 📦 trên đầu đoạn chat) → ẩn khỏi danh sách + lưu trữ luôn bên ChatGPT Work
  await win.locator('.ch-head button[title="Lưu trữ đoạn chat"]').click();
  await win.waitForFunction(() => ![...document.querySelectorAll('.ch-item')].some((n) => n.innerText.includes('Kế hoạch tuần SIMI')), null, { timeout: 20000 });
  check((await listCodex(true)).includes(id), 'lưu trữ đồng bộ sang ChatGPT Work');
  check(/1/.test(await win.locator('.ch-archived').innerText()), 'mục "Đã lưu trữ" đếm đúng');
  // lưu trữ cả dự án LDPlayer qua menu ⋯ của nhóm
  const grp = win.locator('.ch-grp', { hasText: 'LDPlayer' });
  await grp.hover(); await grp.locator('.gact.more').click();
  await shot('04-group-menu');
  await win.locator('.ctx-menu button', { hasText: 'Lưu trữ cả dự án' }).click();
  await win.waitForFunction(() => !document.querySelector('.ch-item.ext'), null, { timeout: 30000 });
  check((await listCodex(false)).length === 0 && (await listCodex(true)).length === 3, 'lưu trữ cả dự án (2 đoạn bên ChatGPT Work)');
  // xem "Đã lưu trữ" → bỏ lưu trữ 1 đoạn, xóa hẳn 1 đoạn
  await win.click('.ch-archived');
  await win.waitForSelector('.arch-row', { timeout: 30000 });
  check(await win.locator('.arch-row').count() === 3, 'danh sách đã lưu trữ gồm của app và ChatGPT Work');
  await shot('05-archived');
  await win.locator('.arch-row', { hasText: 'Chào hỏi' }).locator('button', { hasText: 'Bỏ lưu trữ' }).click();
  await win.waitForFunction(() => document.querySelectorAll('.arch-row').length === 2, null, { timeout: 30000 });
  await win.locator('.ch-item', { hasText: 'Chào hỏi' }).waitFor({ timeout: 30000 });
  check(true, 'bỏ lưu trữ đoạn của app → hiện lại');
  await win.locator('.arch-row', { hasText: 'Kiểm tra hướng dẫn setup' }).locator('button', { hasText: 'Bỏ lưu trữ' }).click();
  await win.waitForFunction(() => document.querySelectorAll('.arch-row').length === 1, null, { timeout: 30000 });
  await win.locator('.ch-item.ext', { hasText: 'Kiểm tra hướng dẫn setup' }).waitFor({ timeout: 30000 });
  check((await listCodex(false)).length === 2, 'bỏ lưu trữ đoạn ChatGPT Work → hiện lại + đồng bộ');
  await win.locator('.arch-row', { hasText: 'Kế hoạch tuần SIMI' }).locator('button.danger').click();
  await win.waitForSelector('.del-box');
  await win.check('#delAll');
  await shot('06-delete');
  await win.locator('.sheet footer .btn.danger').click();
  await win.waitForFunction(() => !document.querySelector('.del-box'), null, { timeout: 30000 });
  check(!(await listCodex(true)).includes(id) && !(await listCodex(false)).includes(id), 'xóa luôn trong ChatGPT Work khi chọn');
  await win.click('#modalClose').catch(() => {});

  // ChatGPT Work bản mới lưu đoạn chat kiểu "phân trang" (không đọc được bằng thread/read includeTurns) → app vẫn mở được
  const done = () => new Promise((r) => { const f = (m) => { if (m === 'turn/completed') { srv.off('notification', f); r(); } }; srv.on('notification', f); });
  const pst = await srv.request('thread/start', { cwd: path.join(work, 'SIMI'), historyMode: 'paginated', approvalPolicy: 'never' });
  const pid = pst.thread.id;
  for (const text of ['Tóm tắt báo cáo tuần', 'Thêm phần đề xuất']) { const w = done(); await srv.request('turn/start', { threadId: pid, input: [{ type: 'text', text }] }); await w; }
  await srv.request('thread/name/set', { threadId: pid, name: 'Đoạn phân trang' });
  check(pst.thread.historyMode === 'paginated', 'tạo đoạn chat kiểu phân trang như ChatGPT Work bản mới');
  srv.stop();
  await win.locator('#chExt button[title^="Đọc lại"]').click();
  await win.locator('.ch-item.ext', { hasText: 'Đoạn phân trang' }).click({ timeout: 30000 });
  await win.waitForFunction(() => document.querySelectorAll('.cmsg.me').length === 2 && [...document.querySelectorAll('.cmsg.me')].some((n) => n.innerText.includes('Thêm phần đề xuất')), null, { timeout: 30000 });
  check(true, 'mở được đoạn chat phân trang, đủ 2 lượt hỏi');
  await shot('07-paginated');

  srv.stop();
  await finish(app, errors);
  gw.server.close();
  for (const d of [home, work]) try { fs.rmSync(d, { recursive: true, force: true, maxRetries: 5 }); } catch { /* Codex còn giữ file tạm – bỏ qua */ }
});
