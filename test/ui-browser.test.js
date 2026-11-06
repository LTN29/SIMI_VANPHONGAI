// 🌐 Trình duyệt cạnh khung chat: AI (qua MCP vp_browser) mở trang → khung tự hiện bên phải chat,
// gõ tiếng Việt, chọn, bấm như người thật; thanh địa chỉ / tab cập nhật; hộp thoại của app che → trang tạm ẩn.
const fs = require('fs');
const os = require('os');
const path = require('path');
const http = require('http');
const { spawn } = require('child_process');
const { launch, check, finish, run, ROOT } = require('./helpers');

const PAGE = `<!doctype html><meta charset="utf-8"><title>Form thử SIMI</title>
<h1>Đăng ký nhận báo giá</h1>
<label>Họ tên <input id="name" placeholder="Họ và tên"></label>
<select id="city"><option value="hn">Hà Nội</option><option value="hcm">TP Hồ Chí Minh</option><option value="dn">Đà Nẵng</option></select>
<textarea id="note" placeholder="Ghi chú"></textarea>
<button id="send" onclick="document.getElementById('out').textContent='Đã gửi: '+document.getElementById('name').value+' / '+document.getElementById('city').value+' / '+document.getElementById('note').value">Gửi yêu cầu</button>
<p id="out"></p><a href="/trang-2">Sang trang 2</a>
<div id="card" style="cursor:pointer;width:220px;padding:14px;border:1px solid #ccc" onclick="document.getElementById('out').textContent='Đã chọn sản phẩm'"><div>Tai nghe Bluetooth SIMI</div><span>299.000đ</span></div>
<canvas id="cv" width="200" height="60" style="border:1px solid #999" onclick="document.getElementById('out').textContent='Bấm canvas tại '+event.offsetX+','+event.offsetY"></canvas>`;

function rpc(child, msg) {
  return new Promise((resolve) => {
    let buf = '';
    const on = (d) => { buf += d; const line = buf.split('\n').find((l) => l.includes(`"id":${msg.id}`)); if (line) { child.stdout.off('data', on); resolve(JSON.parse(line)); } };
    child.stdout.on('data', on);
    child.stdin.write(JSON.stringify({ jsonrpc: '2.0', ...msg }) + '\n');
  });
}

run(async () => {
  const srv = http.createServer((req, res) => {
    res.writeHead(200, { 'content-type': 'text/html; charset=utf-8' });
    res.end(req.url === '/trang-2' ? '<!doctype html><meta charset="utf-8"><title>Trang 2</title><h1>Trang thứ hai</h1>' : PAGE);
  });
  await new Promise((r) => srv.listen(0, '127.0.0.1', r));
  const base = `http://127.0.0.1:${srv.address().port}/`;
  const home = fs.mkdtempSync(path.join(os.tmpdir(), 'vpai-uibrowser-'));
  const { app, win, errors, shot, userData } = await launch({ prefix: 'browser', env: { CODEX_HOME: home, PATH: '/usr/bin:/bin' } });
  await win.click('.sheet footer .linkbtn').catch(() => {});
  await win.click('.viewtabs button[data-v="office"]');

  const conn = path.join(userData, 'browser-pane.json');
  for (let i = 0; i < 50 && !fs.existsSync(conn); i++) await new Promise((r) => setTimeout(r, 100));
  check(fs.existsSync(conn), 'app mở cổng điều khiển trình duyệt (browser-pane.json)');

  // MCP chạy bằng chính Electron (ELECTRON_RUN_AS_NODE) như khi Codex gọi
  const mcp = spawn(require('electron'), [path.join(ROOT, 'src', 'browser', 'mcp.js')], { env: { ...process.env, ELECTRON_RUN_AS_NODE: '1', VPB_CONN: conn }, stdio: ['pipe', 'pipe', 'inherit'] });
  mcp.stdout.setEncoding('utf8');
  const init = await rpc(mcp, { id: 1, method: 'initialize', params: { protocolVersion: '2025-06-18' } });
  check(init.result.serverInfo.name === 'vp_browser' && /đăng nhập/.test(init.result.instructions), 'MCP vp_browser khởi động, có hướng dẫn cho AI');
  const list = await rpc(mcp, { id: 2, method: 'tools/list' });
  check(list.result.tools.map((t) => t.name).join() === 'browser_open,browser_snapshot,browser_act,browser_read,browser_screenshot,browser_tabs', 'đủ 6 công cụ trình duyệt');

  // AI mở trang khi người dùng đang ở Văn phòng → tự chuyển sang Chat và mở khung bên phải
  const t0 = Date.now();
  const open = await rpc(mcp, { id: 3, method: 'tools/call', params: { name: 'browser_open', arguments: { url: base } } });
  const snap = open.result.content[0].text;
  check(!open.result.isError && /Đăng ký nhận báo giá/.test(snap) && /\[e\d+\] textbox "Họ tên" \(gợi ý: Họ và tên\)/.test(snap) && /select "" = "Hà Nội"/.test(snap), `browser_open trả về trang + phần tử [eN] (${Date.now() - t0} ms)`);
  await win.waitForSelector('#chatView.with-browser:not(.hidden) #chBrowser:not(.hidden)');
  check(true, 'khung trình duyệt tự hiện cạnh khung chat');
  await win.waitForFunction((u) => document.querySelector('#cbwUrl').value === u, base);
  check(true, 'thanh địa chỉ hiện đúng trang AI đang mở');
  check(/Form thử SIMI/.test(await win.locator('.cbw-tab.on').innerText()), 'tab hiện tiêu đề trang');
  const host = await win.locator('#cbwHost').boundingBox();
  const main = await win.locator('.ch-main').boundingBox();
  check(host.x > main.x + main.width - 2 && host.width > 380, `trang nằm bên phải khung chat (rộng ${Math.round(host.width)}px)`);

  const ref = (re) => (snap.match(re) || [])[1];
  const name = ref(/\[(e\d+)\] textbox "Họ tên"/), city = ref(/\[(e\d+)\] select/), note = ref(/\[(e\d+)\] textbox "Ghi chú"/), send = ref(/\[(e\d+)\] button "Gửi yêu cầu"/);
  check(name && city && note && send, 'tìm được mã các ô cần thao tác');
  const act = await rpc(mcp, { id: 4, method: 'tools/call', params: { name: 'browser_act', arguments: { actions: [
    { action: 'type', ref: name, text: 'Nguyễn Thị Hồng Nhung' },
    { action: 'select', ref: city, value: 'Đà Nẵng' },
    { action: 'type', ref: note, text: 'Giao trước 17h, gọi số 0909' },
    { action: 'click', ref: send },
  ] } } });
  const out = act.result.content[0].text;
  check(!act.result.isError && /Đã gửi: Nguyễn Thị Hồng Nhung \/ dn \/ Giao trước 17h, gọi số 0909/.test(out), 'browser_act: gõ tiếng Việt, chọn, bấm trong 1 lần gọi → trang đổi đúng');
  check(/1\. gõ .*\n2\. chọn .*\n3\. gõ .*\n4\. bấm/.test(out), 'kết quả liệt kê từng bước đã làm');
  check(await win.locator('#cbwAi:not(.hidden)').count() === 1 && /SIMI đang thao tác/.test(await win.locator('#cbwAi').innerText()), 'dòng trạng thái "SIMI đang thao tác" hiện trên khung');

  // ảnh chụp toàn cửa sổ (gồm cả lớp trang web) cho người xem
  const png = await app.evaluate(async ({ BrowserWindow }) => (await BrowserWindow.getAllWindows()[0].capturePage()).toPNG().toString('base64'));
  fs.writeFileSync(path.join(require('./helpers').SHOTS, 'browser-panel.png'), Buffer.from(png, 'base64'));
  // lớp trang web là view riêng → chụp riêng rồi ghép vào đúng ô để xem ảnh giống người dùng thấy
  const page = await app.evaluate(async ({ BrowserWindow }) => { const v = BrowserWindow.getAllWindows()[0].contentView.children[0]; return { b: v.getBounds(), png: (await v.webContents.capturePage()).toPNG().toString('base64') }; });
  fs.writeFileSync(path.join(require('./helpers').SHOTS, 'browser-page.png'), Buffer.from(page.png, 'base64'));
  fs.writeFileSync(path.join(require('./helpers').SHOTS, 'browser-page.json'), JSON.stringify(page.b));
  await shot('ui');

  // ô sản phẩm kiểu Shopee (div có con trỏ bàn tay) cũng có mã; canvas bấm theo toạ độ trên ảnh chụp
  const card = (out.match(/\[(e\d+)\] clickable "Tai nghe Bluetooth SIMI 299\.000đ"/) || [])[1];
  check(card, 'ô sản phẩm dạng div (con trỏ bàn tay) có mã [eN] để bấm');
  const cr = await rpc(mcp, { id: 41, method: 'tools/call', params: { name: 'browser_act', arguments: { actions: [{ action: 'click', ref: card }] } } });
  check(/Đã chọn sản phẩm/.test(cr.result.content[0].text), 'bấm ô sản phẩm theo mã → đúng');
  const shot1 = await rpc(mcp, { id: 42, method: 'tools/call', params: { name: 'browser_screenshot', arguments: {} } });
  check(/KHÔNG dùng công cụ điều khiển máy/.test(shot1.result.content[0].text), 'ảnh chụp nhắc AI bấm bằng x, y của trình duyệt');
  const cvp = await app.evaluate(({ BrowserWindow }) => BrowserWindow.getAllWindows()[0].contentView.children[0].webContents.executeJavaScript('(() => { const r = document.getElementById("cv").getBoundingClientRect(); return { x: Math.round(r.left + 50), y: Math.round(r.top + 20) }; })()'));
  const xy = await rpc(mcp, { id: 43, method: 'tools/call', params: { name: 'browser_act', arguments: { actions: [{ action: 'click', x: cvp.x, y: cvp.y }] } } });
  check(/Bấm canvas tại (4[7-9]|5[0-2]),(1[7-9]|2[0-2])/.test(xy.result.content[0].text), 'bấm theo toạ độ x, y trên ảnh → trúng đúng chỗ trong canvas');

  // bấm link → điều hướng, nút Quay lại bật
  const link = (out.match(/\[(e\d+)\] link "Sang trang 2"/) || [])[1];
  const nav = await rpc(mcp, { id: 5, method: 'tools/call', params: { name: 'browser_act', arguments: { actions: [{ action: 'click', ref: link }] } } });
  check(/Trang thứ hai/.test(nav.result.content[0].text), 'bấm link → chờ trang mới tải xong rồi trả về');
  await win.waitForFunction(() => !document.querySelector('#cbwBack').disabled);
  check(true, 'nút ◀ Quay lại bật sau khi điều hướng');
  await win.click('#cbwBack');
  await win.waitForFunction((u) => document.querySelector('#cbwUrl').value === u, base);
  check(true, 'người dùng tự bấm ◀ trên khung được');

  const sc = await rpc(mcp, { id: 6, method: 'tools/call', params: { name: 'browser_screenshot', arguments: {} } });
  check(sc.result.content[1].type === 'image' && sc.result.content[1].data.length > 1000, 'browser_screenshot trả ảnh JPEG');
  const tabs = await rpc(mcp, { id: 7, method: 'tools/call', params: { name: 'browser_tabs', arguments: { action: 'new', url: base + 'trang-2' } } });
  check((tabs.result.content[0].text.match(/\n/g) || []).length === 1, 'mở tab mới → 2 tab');
  await win.waitForFunction(() => document.querySelectorAll('.cbw-tab').length === 2);
  await win.click('.cbw-tab.on .cbw-x');
  await win.waitForFunction(() => document.querySelectorAll('.cbw-tab').length === 1);
  check(true, 'đóng tab trên thanh tab');

  // hộp thoại của app → trang tạm ẩn; đóng → hiện lại; ✕ đóng khung
  const pageShown = async () => { await new Promise((r) => setTimeout(r, 150)); return (await win.evaluate(() => window.vp.browser.state())).shown; };
  check(await pageShown(), 'lớp trang web đang hiện');
  await win.evaluate(() => document.getElementById('modal').classList.remove('hidden'));
  check(!(await pageShown()), 'hộp thoại của app mở → tạm ẩn trang (không đè lên hộp thoại)');
  await win.evaluate(() => document.getElementById('modal').classList.add('hidden'));
  check(await pageShown(), 'đóng hộp thoại → trang hiện lại');
  await win.click('#chTools');
  await win.waitForSelector('.tools-pop .tp-card');
  await new Promise((r) => setTimeout(r, 200));
  check(/Trình duyệt cạnh chat/.test(await win.locator('.tools-pop').innerText()), '🧰 Công cụ có mục "Trình duyệt cạnh chat"');
  await win.mouse.click(400, 300);
  await win.locator('.ch-bar .cb.web').click();
  await new Promise((r) => setTimeout(r, 250));
  check(!(await pageShown()) && await win.locator('#chBrowser.hidden').count() === 1, 'nút 🌐 đóng khung → gỡ lớp trang');
  await win.locator('.ch-bar .cb.web').click();
  await new Promise((r) => setTimeout(r, 250));
  check(await pageShown(), 'mở lại khung → trang cũ vẫn còn');
  await win.click('.viewtabs button[data-v="office"]');
  await new Promise((r) => setTimeout(r, 250));
  check(!(await pageShown()), 'sang Văn phòng → trang ẩn (không đè lên văn phòng)');

  mcp.stdin.end(); mcp.kill();
  srv.close();
  await finish(app, errors);
});
