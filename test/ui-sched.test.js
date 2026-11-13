// Giao diện ⏰ Tác vụ đã lên lịch + 🔌 Kết nối: tạo tác vụ, bật/tắt, thêm kết nối MCP (máy chủ giả trên máy) và thử kết nối.
const http = require('http');
const { launch, check, finish, run } = require('./helpers');

function fakeMcp() {
  const srv = http.createServer((req, res) => {
    let body = ''; req.on('data', (d) => { body += d; });
    req.on('end', () => {
      const m = JSON.parse(body || '{}');
      if (req.headers.authorization !== 'Bearer tok') { res.writeHead(401); res.end('Bad credentials'); return; }
      if (m.id == null) { res.writeHead(202); res.end(); return; }
      const result = m.method === 'initialize' ? { protocolVersion: '2025-03-26', capabilities: {} } : { tools: [{ name: 'list_issues', inputSchema: { type: 'object' } }] };
      res.writeHead(200, { 'Content-Type': 'application/json' }); res.end(JSON.stringify({ jsonrpc: '2.0', id: m.id, result }));
    });
  });
  return new Promise((r) => srv.listen(0, '127.0.0.1', () => r({ srv, url: `http://127.0.0.1:${srv.address().port}/mcp` })));
}

run(async () => {
  const mcp = await fakeMcp();
  const { app, win, errors, shot } = await launch({ prefix: 'sched', config: { lobbyEnabled: false, autoUpdate: false } });
  await win.waitForSelector('.viewtabs');
  await win.waitForTimeout(1500);
  if (await win.locator('#modal:not(.hidden)').count()) await win.click('#modalClose'); // bảng chào mừng lần đầu
  await win.click('.viewtabs button[data-v="chat"]');
  await win.click('#chSchedBtn');
  await win.waitForSelector('#modal:not(.hidden) .sch');
  check(await win.locator('#modalTitle').innerText() === '⏰ Tác vụ đã lên lịch', 'mở bảng Tác vụ đã lên lịch');
  await win.click('text=＋ Tạo tác vụ');
  await win.click('.sch-ideas .tp-chip >> nth=1'); // gợi ý "Tổng kết GitHub tuần"
  await win.fill('.sch-form input >> nth=0', 'Tổng kết GitHub tuần');
  await shot('form');
  await win.click('text=⏰ Lên lịch');
  await win.waitForSelector('.sch-card');
  const label = await win.locator('.sch-card .sch-when').first().innerText();
  check(/Mỗi tuần · T2 · 08:30/.test(label), 'tác vụ hiện đúng lịch: ' + label.trim());
  check(await win.locator('#chSchedN').innerText() === '1', 'thanh bên đếm 1 tác vụ đang bật');
  await shot('list');
  await win.click('.sch-card .sch-sw');
  await win.waitForSelector('.sch-card.off');
  check(true, 'tạm dừng tác vụ');
  await win.click('#modalClose');

  // ⏰ lên lịch lại một yêu cầu trong đoạn chat: form mở sẵn nội dung, tên, thư mục dự án
  const projDir = require('os').tmpdir();
  await win.evaluate((dir) => window.VPChat.scheduleFrom({ title: 'Biên tập viên mục Bài viết', project: dir, sandbox: 'workspace-write', messages: [{ role: 'user', text: 'Viết bài điểm tin AI tuần và đăng lên GitHub' }, { role: 'assistant', text: 'ok' }] }), projDir);
  await win.waitForSelector('#modal:not(.hidden) .sch-form');
  check(await win.inputValue('.sch-form input >> nth=0') === 'Biên tập viên mục Bài viết', 'tên tác vụ lấy từ tên đoạn chat');
  check(await win.inputValue('.sch-form textarea') === 'Viết bài điểm tin AI tuần và đăng lên GitHub', 'nội dung lấy đúng yêu cầu đã gửi');
  check(await win.locator('.sch-form select').last().inputValue() === projDir, 'giữ thư mục dự án của đoạn chat');
  await shot('from-chat');
  await win.click('text=⏰ Lên lịch');
  await win.waitForFunction(() => document.querySelectorAll('.sch-card').length >= 2);
  const saved = (await win.evaluate(() => window.vp.sched.list())).tasks.find((t) => t.name === 'Biên tập viên mục Bài viết');
  check(saved && saved.project === projDir && saved.when.kind === 'weekly', 'tác vụ lưu kèm thư mục dự án, lịch mỗi tuần');
  await win.click('#modalClose');

  await win.evaluate(() => window.VPChat.openConnectors('custom'));
  await win.waitForSelector('#modal:not(.hidden) .sch-form');
  await win.fill('.sch-form input >> nth=0', 'MCP thử');
  await win.fill('.sch-form input >> nth=1', mcp.url);
  await win.fill('.sch-form input[type=password]', 'tok');
  await win.click('text=🔎 Thử kết nối');
  await win.waitForSelector('.cn-out .skm-ok', { timeout: 15000 });
  check(/1 công cụ: list_issues/.test(await win.locator('.cn-out').innerText()), 'thử kết nối MCP qua HTTP thành công');
  await win.click('text=💾 Lưu kết nối');
  await win.waitForSelector('.sch-card');
  check(/đã lưu token/.test(await win.locator('.sch-card').first().innerText()), 'kết nối đã lưu, có token');
  await shot('connectors');
  mcp.srv.close();
  await finish(app, errors);
});
