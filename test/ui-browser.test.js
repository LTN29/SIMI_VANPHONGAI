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
<a id="dl" href="/bao-gia.txt" download="bao-gia.txt">Tải báo giá</a>
<canvas id="cv" width="200" height="60" style="border:1px solid #999" onclick="document.getElementById('out').textContent='Bấm canvas tại '+event.offsetX+','+event.offsetY"></canvas>`;

const dlRef = (t) => (t.match(/\[(e\d+)\] link "Tải báo giá"/) || [])[1];
// trang kiểu quản trị shop: trình soạn thảo mô tả (contenteditable), ô mã HTML trong khung cuộn riêng, nút tải ảnh (ô file ẩn), hỏi xác nhận
const EDITOR = `<!doctype html><meta charset="utf-8"><title>Sửa sản phẩm</title><style>#box{height:120px;overflow:auto;border:1px solid #999}#box div{height:900px}</style>
<h1>Sửa sản phẩm</h1>
<div id="desc" contenteditable="true" aria-label="Mô tả sản phẩm" style="min-height:60px;border:1px solid #ccc"></div>
<div id="box" aria-label="Khung chi tiết"><div><textarea id="html" aria-label="Mã HTML" rows="4"></textarea><p id="deep">Chi tiết ảnh sản phẩm</p></div></div>
<input type="file" id="pic" accept="image/*" multiple style="display:none" onchange="document.getElementById('picOut').textContent='Ảnh: '+[...this.files].map(f=>f.name+':'+f.size).join(',')">
<button id="upBtn" onclick="document.getElementById('pic').click()">Tải ảnh lên</button><p id="picOut"></p>
<button id="del" onclick="document.getElementById('picOut').textContent += confirm('Xoá ảnh này?') ? ' | đã xoá' : ' | huỷ'">Xoá ảnh</button>
<div id="ed2" contenteditable="true" aria-label="Ô dán" style="min-height:40px;border:1px solid #ccc"></div>
<script>document.getElementById('ed2').addEventListener('paste',(e)=>{e.preventDefault();document.getElementById('ed2').innerHTML='[dán] '+e.clipboardData.getData('text/html');});</script>`;

function rpc(child, msg) {
  return new Promise((resolve) => {
    let buf = '';
    const on = (d) => { buf += d; const line = buf.split('\n').find((l) => l.includes(`"id":${msg.id}`)); if (line) { child.stdout.off('data', on); resolve(JSON.parse(line)); } };
    child.stdout.on('data', on);
    child.stdin.write(JSON.stringify({ jsonrpc: '2.0', ...msg }) + '\n');
  });
}

run(async () => {
  const XLSX = await require('../src/export').toXlsx('# Chiến dịch Tết\n\n| Kênh | Ngân sách |\n|---|---|\n| Facebook | 12500000 |\n| Shopee | 8000000 |\n');
  const srv = http.createServer((req, res) => {
    if (req.url === '/bao-gia.txt') { res.writeHead(200, { 'content-type': 'text/plain; charset=utf-8', 'content-disposition': 'attachment; filename="bao-gia.txt"' }); return res.end('Báo giá SIMI'); }
    if (req.url === '/ke-hoach.xlsx') { res.writeHead(200, { 'content-type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'content-disposition': "attachment; filename*=UTF-8''K%E1%BA%BF%20ho%E1%BA%A1ch%20T%E1%BA%BFt.xlsx" }); return res.end(XLSX); }
    res.writeHead(200, { 'content-type': 'text/html; charset=utf-8' });
    if (req.url === '/rieng-tu.docx') return res.end('<!doctype html><title>Đăng nhập</title><h1>Sign in to your account</h1>');
    if (req.url === '/editor') return res.end(EDITOR);
    res.end(req.url === '/trang-2' ? '<!doctype html><meta charset="utf-8"><title>Trang 2</title><h1>Trang thứ hai</h1>' : PAGE);
  });
  await new Promise((r) => srv.listen(0, '127.0.0.1', r));
  const base = `http://127.0.0.1:${srv.address().port}/`;
  const home = fs.mkdtempSync(path.join(os.tmpdir(), 'vpai-uibrowser-'));
  const { app, win, errors, shot, userData } = await launch({ prefix: 'browser', env: { CODEX_HOME: home, PATH: '/usr/bin:/bin' } });
  // Playwright tự đóng hộp thoại alert/confirm của mọi trang nếu không ai nghe → để app tự xử lý (như khi chạy thật)
  const keepDialogs = (pg) => pg.on('dialog', () => {});
  app.context().pages().forEach(keepDialogs); app.context().on('page', keepDialogs);
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
  check(list.result.tools.map((t) => t.name).join() === 'browser_open,browser_snapshot,browser_act,browser_doc,browser_read_pages,browser_open_window,browser_read,browser_screenshot,design_render,document_create,browser_js,browser_tabs', 'đủ 12 công cụ (10 trình duyệt + xuất thiết kế + tạo file)');

  // app tự chạy thử MCP như Codex sẽ chạy (môi trường đã lọc) → biết ngay máy này AI có điều khiển được trình duyệt không
  let men = null;
  for (let i = 0; i < 40; i++) { men = await win.evaluate(() => window.vp.chat.mentions()).catch(() => null); if (men) break; await new Promise((r) => setTimeout(r, 250)); }
  const vpb = men && (men.tools || []).find((x) => x.id === 'vp_browser');
  check(vpb && vpb.enabled && !/⚠️/.test(vpb.desc), 'app tự kiểm tra: AI điều khiển được trình duyệt cạnh chat trên máy này');

  // 📑 link tài liệu (SharePoint / Google…): 1 lần gọi là mở trang cạnh chat + trả nội dung file, không bấm từng ô, không vào thư mục Tải xuống
  const cdoc = await rpc(mcp, { id: 40, method: 'tools/call', params: { name: 'browser_doc', arguments: { url: base + 'ke-hoach.xlsx' } } });
  const ctext = cdoc.result.content[0].text;
  check(!cdoc.result.isError && /Kế hoạch Tết\.xlsx/.test(ctext) && /Facebook \| 12500000/.test(ctext) && /Shopee \| 8000000/.test(ctext), 'browser_doc: đọc Excel trên mạng, trả nội dung bảng ngay');
  const cfile = (ctext.match(/Bản sao để đọc: (.+)/) || [])[1];
  check(cfile && fs.existsSync(cfile) && cfile.includes('browser-docs'), 'bản sao nằm trong bộ nhớ đệm của app (không lẫn vào thư mục Tải xuống)');
  const cbad = await rpc(mcp, { id: 41, method: 'tools/call', params: { name: 'browser_doc', arguments: { url: base + 'rieng-tu.docx' } } });
  check(cbad.result.isError && /đăng nhập/.test(cbad.result.content[0].text), 'link cần đăng nhập → báo rõ, trang vẫn mở cạnh chat để người dùng đăng nhập');
  const cno = await rpc(mcp, { id: 42, method: 'tools/call', params: { name: 'browser_doc', arguments: { url: base + 'trang-2' } } });
  check(cno.result.isError && /browser_read/.test(cno.result.content[0].text), 'trang thường → nhắc dùng browser_read');

  // 📄 tạo file Word / Excel / PDF ngay trong app (máy không có Python vẫn được)
  const docDir = fs.mkdtempSync(path.join(os.tmpdir(), 'vp-doc-out-'));
  const md = '# Báo cáo tuần\n\n## Doanh số\n\n| Ngày | Doanh số |\n|---|---|\n| Thứ 2 | 1.250.000 |\n\n- Ý chính có **đậm**';
  for (const [i, ext, magic] of [[31, 'docx', 'PK'], [32, 'xlsx', 'PK'], [33, 'pdf', '%P']]) {
    const r = await rpc(mcp, { id: i, method: 'tools/call', params: { name: 'document_create', arguments: { path: path.join(docDir, `Báo cáo tuần.${ext}`), content: md } } });
    const f = path.join(docDir, `Báo cáo tuần.${ext}`);
    check(!r.result.isError && /Đã tạo/.test(r.result.content[0].text) && fs.readFileSync(f).subarray(0, 2).toString() === magic, `document_create → .${ext}`);
  }
  check(!(await win.locator('#chBrowser:not(.hidden)').count()), 'tạo file không bật khung trình duyệt');
  const bad = await rpc(mcp, { id: 34, method: 'tools/call', params: { name: 'document_create', arguments: { path: path.join(docDir, 'x.exe'), content: 'a' } } });
  check(bad.result.isError && /đuôi/.test(bad.result.content[0].text), 'đuôi lạ bị từ chối');
  fs.rmSync(docDir, { recursive: true, force: true });

  // 🎨 thiết kế kiểu Claude Desktop: HTML → PNG nét gấp 2 / PDF, cảnh báo chữ tràn, PNG trong suốt
  check(list.result.tools.some((t) => t.name === 'design_render' && /Claude Desktop/.test(t.description)), 'có công cụ design_render');
  const outDir = fs.mkdtempSync(path.join(os.tmpdir(), 'vp-design-out-'));
  const poster = `<!doctype html><html><head><style>body{background:linear-gradient(135deg,#0b3d91,#1e88e5);font-family:Arial,sans-serif;color:#fff}
    h1{position:absolute;left:80px;top:120px;margin:0;font-size:96px;line-height:1.05}p{position:absolute;left:80px;bottom:100px;margin:0;font-size:40px}
    svg{position:absolute;right:60px;top:60px}</style></head><body><h1>Siêu sale<br>11.11</h1><p>Giảm đến 50% – UNIQ Việt Nam</p>
    <svg width="220" height="220"><circle cx="110" cy="110" r="100" fill="#ffd54f"/><text x="110" y="128" font-size="48" text-anchor="middle" fill="#0b3d91" font-weight="700">-50%</text></svg></body></html>`;
  const t1 = Date.now();
  const d1 = await rpc(mcp, { id: 21, method: 'tools/call', params: { name: 'design_render', arguments: { html: poster, path: path.join(outDir, 'poster.png'), width: 1080, height: 1080 } } });
  const posterPng = fs.readFileSync(path.join(outDir, 'poster.png'));
  check(!d1.result.isError && posterPng.readUInt32BE(16) === 2160 && posterPng.readUInt32BE(20) === 2160, `design_render → PNG 2160×2160 nét gấp 2 (${Date.now() - t1} ms)`);
  check(d1.result.content[1].type === 'image' && /Không thấy chữ tràn/.test(d1.result.content[0].text), 'trả ảnh xem trước để AI tự soát, không cảnh báo khi bố cục ổn');
  check(!(await win.locator('#chBrowser:not(.hidden)').count()), 'xuất thiết kế không bật khung trình duyệt');
  const px = await app.evaluate(({ nativeImage }, f) => { const b = nativeImage.createFromPath(f).toBitmap(); const sz = nativeImage.createFromPath(f).getSize(); const at = (x, y) => { const i = (y * sz.width + x) * 4; return [b[i + 2], b[i + 1], b[i], b[i + 3]]; }; return { corner: at(5, 5), badge: at(Math.round(sz.width * 0.82), Math.round(sz.height * 0.08)) }; }, path.join(outDir, 'poster.png'));
  check(px.corner[2] > 100 && px.corner[0] < 60 && px.badge[0] > 200 && px.badge[1] > 170, 'màu nền gradient + huy hiệu SVG vàng đúng chỗ');
  const d2 = await rpc(mcp, { id: 22, method: 'tools/call', params: { name: 'design_render', arguments: { html: '<div style="position:absolute;left:600px;top:40px;font-size:120px;white-space:nowrap">Chữ quá dài tràn ra ngoài</div><div style="width:200px;height:40px;overflow:hidden;font-size:30px">Hộp nhỏ chứa quá nhiều chữ sẽ bị cắt mất</div><p style="position:absolute;left:40px;top:200px;margin:0;font-size:36px">Khẩu hiệu bị huy hiệu che</p><div class="badge" style="position:absolute;left:220px;top:180px;width:120px;height:120px;border-radius:50%;background:#e53935"></div>', path: path.join(outDir, 'loi.png'), width: 800, height: 400, scale: 1 } } });
  check(/chữ ra ngoài khung: div "Chữ quá dài/.test(d2.result.content[0].text) && /chữ bị cắt \(tràn hộp\)/.test(d2.result.content[0].text) && /chữ bị div\.badge đè lên: p "Khẩu hiệu/.test(d2.result.content[0].text), 'cảnh báo chữ ra ngoài khung / bị cắt / bị khối khác đè để AI sửa');
  const d3 = await rpc(mcp, { id: 23, method: 'tools/call', params: { name: 'design_render', arguments: { html: '<h1 style="font:700 48px Arial;margin:60px">Giấy chứng nhận – Nguyễn Văn Ánh</h1>', path: path.join(outDir, 'chung-nhan.pdf'), width: 1123, height: 794 } } });
  check(!d3.result.isError && fs.readFileSync(path.join(outDir, 'chung-nhan.pdf')).subarray(0, 4).toString() === '%PDF', 'xuất PDF (in được, chữ vector)');
  await rpc(mcp, { id: 24, method: 'tools/call', params: { name: 'design_render', arguments: { html: '<div style="margin:40px;width:120px;height:120px;border-radius:50%;background:#e53935"></div>', path: path.join(outDir, 'logo.png'), width: 200, height: 200, scale: 1, transparent: true } } });
  const alpha = await app.evaluate(({ nativeImage }, f) => { const im = nativeImage.createFromPath(f); const b = im.toBitmap(); const w = im.getSize().width; return [b[3], b[(100 * w + 100) * 4 + 3]]; }, path.join(outDir, 'logo.png'));
  check(alpha[0] === 0 && alpha[1] === 255, 'PNG nền trong suốt cho logo / sticker');
  fs.rmSync(outDir, { recursive: true, force: true });

  // AI mở trang khi người dùng đang ở Văn phòng → tự chuyển sang Chat và mở khung bên phải
  const t0 = Date.now();
  const open = await rpc(mcp, { id: 3, method: 'tools/call', params: { name: 'browser_open', arguments: { url: base } } });
  const snap = open.result.content[0].text;
  check(!open.result.isError && /Đăng ký nhận báo giá/.test(snap) && /\[e\d+\] textbox "Họ tên" \(gợi ý: Họ và tên\)/.test(snap) && /select "" = "Hà Nội"/.test(snap), `browser_open trả về trang + phần tử [eN] (${Date.now() - t0} ms)`);
  await win.waitForSelector('#cbwPip:not(.hidden)', { timeout: 5000 });
  check(await win.locator('#chatView.hidden').count() === 1, 'người dùng đang ở Văn phòng → trang hiện ở khung nhỏ góc màn hình, không kéo về tab Chat');
  await win.click('#cbwPip [aria-label="Mở lớn"]');
  await win.waitForSelector('#chatView.with-browser:not(.hidden) #chBrowser:not(.hidden)');
  check(await win.locator('#cbwPip.hidden').count() === 1, 'bấm ⤢ → mở lớn cạnh khung chat, khung nhỏ tắt');
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

  // tải tệp về (như Canva → Tải xuống) → AI nhận đường dẫn tệp
  const dl = await rpc(mcp, { id: 44, method: 'tools/call', params: { name: 'browser_act', arguments: { actions: [{ action: 'click', ref: dlRef(xy.result.content[0].text) }, { action: 'wait_download', ms: 15000 }] } } });
  const dlFile = (dl.result.content[0].text.match(/đã lưu (.+bao-gia[^\n]*\.txt)/) || [])[1];
  check(dlFile && fs.readFileSync(dlFile, 'utf8') === 'Báo giá SIMI', 'wait_download: tải tệp về thư mục Tải xuống, trả đúng đường dẫn');

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
  // đọc nhiều trang 1 lần ngay trong khung (thay Chrome SIMI riêng): trang đầu ở tab đang xem, trang sau ở tab nền rồi đóng
  const tabs0 = (await win.evaluate(() => window.vp.browser.state())).tabs.length;
  const rp = await rpc(mcp, { id: 60, method: 'tools/call', params: { name: 'browser_read_pages', arguments: { urls: [base + 'trang-2', base, base + 'rieng-tu.docx'] } } });
  const rpt = rp.result.content[0].text;
  check(!rp.result.isError && /### 1\/3[\s\S]*Trang thứ hai/.test(rpt) && /### 2\/3[\s\S]*Form thử SIMI/.test(rpt) && /### 3\/3[\s\S]*Sign in/.test(rpt), 'browser_read_pages đọc 3 trang trong 1 lần gọi');
  check(/đăng nhập ngay trong Trình duyệt SIMI/.test(rpt), 'trang đòi đăng nhập → nhắc người dùng đăng nhập ngay trong khung');
  const stRp = await win.evaluate(() => window.vp.browser.state());
  check(stRp.tabs.length === tabs0 && /trang-2/.test(stRp.tabs.find((t) => t.active).url), 'tab nền tự đóng, tab đang xem là trang đầu');
  const ow = await rpc(mcp, { id: 61, method: 'tools/call', params: { name: 'browser_open_window', arguments: { url: base } } });
  check(/Trình duyệt SIMI cạnh khung chat/.test(ow.result.content[0].text), 'browser_open_window (skill cũ) mở trang ngay trong khung để đăng nhập');
  await win.click('#chTools');
  await win.waitForSelector('.tools-pop .tp-card');
  await new Promise((r) => setTimeout(r, 200));
  const popTxt = await win.locator('.tools-pop').innerText();
  check(/Trình duyệt SIMI \(cạnh chat\)/.test(popTxt), '🧰 Công cụ có mục "Trình duyệt SIMI (cạnh chat)"');
  check(!/Mở để đăng nhập/.test(popTxt), 'không còn mục mở Chrome SIMI riêng khi đã có khung cạnh chat');
  await win.mouse.click(400, 300);
  // thu gọn cột danh sách đoạn chat → khung chat rộng ra, trang web vẫn khít bên phải
  const mainW0 = (await win.locator('.ch-main').boundingBox()).width;
  await win.click('#chFold');
  await new Promise((r) => setTimeout(r, 400));
  const sideW = (await win.locator('.ch-side').boundingBox()).width;
  const mainW1 = (await win.locator('.ch-main').boundingBox()).width;
  check(sideW < 70 && mainW1 > mainW0 + 150, `nút « thu gọn danh sách chat (còn ${Math.round(sideW)}px, khung chat rộng thêm ${Math.round(mainW1 - mainW0)}px)`);
  check(await win.locator('.ch-side .ch-new').isVisible() && !(await win.locator('#chList').isVisible()), 'dải thu gọn vẫn có nút ＋ Đoạn chat mới');
  const hb = await win.locator('#cbwHost').boundingBox(); const vb = await app.evaluate(({ BrowserWindow }) => BrowserWindow.getAllWindows()[0].contentView.children[0].getBounds());
  check(Math.abs(hb.x - vb.x) <= 1 && Math.abs(hb.width - vb.width) <= 1, 'trang web đi theo khi đổi bố cục');
  check(await win.evaluate(() => localStorage.getItem('vp.chatSideMini')) === '1', 'nhớ trạng thái thu gọn cho lần sau');
  await shot('side-mini');
  await win.click('#chFold');
  await new Promise((r) => setTimeout(r, 400));
  check((await win.locator('.ch-side').boundingBox()).width > 250, 'nút » mở rộng lại');
  check(await win.locator('.cbw-mark', { hasText: 'Canva' }).count() === 1, 'khung trình duyệt có nút mở nhanh 🎨 Canva');
  await win.waitForFunction(() => !window.VPBrowser._state.busy, null, { timeout: 20000 }); // AI đã xong việc
  await win.locator('.ch-bar .cb.web').click();
  await new Promise((r) => setTimeout(r, 250));
  check(!(await pageShown()) && await win.locator('#chBrowser.hidden').count() === 1, 'nút 🌐 đóng khung → gỡ lớp trang');
  await win.locator('.ch-bar .cb.web').click();
  await new Promise((r) => setTimeout(r, 250));
  check(await pageShown(), 'mở lại khung → trang cũ vẫn còn');
  await win.waitForFunction(() => !window.VPBrowser._state.busy, null, { timeout: 20000 });
  await win.click('.viewtabs button[data-v="office"]');
  await new Promise((r) => setTimeout(r, 250));
  check(!(await pageShown()), 'sang Văn phòng → trang ẩn (không đè lên văn phòng)');

  // ---- AI làm việc trong lúc người dùng làm việc khác: soạn mô tả, dán HTML, cuộn khung riêng, tải ảnh, hỏi xác nhận ----
  const call = (id, name, args) => rpc(mcp, { id, method: 'tools/call', params: { name, arguments: args } });
  const ed = await call(60, 'browser_open', { url: base + 'editor' });
  const st1 = await win.evaluate(() => ({ pip: window.VPBrowser._state.pip, view: document.querySelector('.viewtabs button.on, .viewtabs button[aria-selected="true"]') && document.querySelector('.viewtabs button.on, .viewtabs button[aria-selected="true"]').dataset.v }));
  check(st1.pip && await win.locator('#cbwPip:not(.hidden)').count() === 1 && !(await win.locator('#chatView:not(.hidden)').count()), 'người dùng đang ở Văn phòng → AI mở trang trong khung nhỏ góc màn hình, không kéo về tab Chat');
  check(await app.evaluate(({ BrowserWindow }) => BrowserWindow.getAllWindows()[0].contentView.children[0].webContents.executeJavaScript('document.visibilityState')) === 'visible', 'trang trong khung nhỏ vẫn hiển thị (AI bấm, gõ, chụp bình thường)');
  const R = (re) => (ed.result.content[0].text.match(re) || [])[1];
  const desc = R(/\[(e\d+)\] textbox "Mô tả sản phẩm"/) || R(/\[(e\d+)\] [a-z]+ "Mô tả sản phẩm"/), htmlBox = R(/\[(e\d+)\] textbox "Mã HTML"/), file = R(/\[(e\d+)\] file-input "image\/\*" \(nhiều tệp\) \(ẩn/), up = R(/\[(e\d+)\] button "Tải ảnh lên"/), del = R(/\[(e\d+)\] button "Xoá ảnh"/), ed2 = R(/\[(e\d+)\] [a-z]+ "Ô dán"/);
  check(desc && htmlBox && file && up && del && ed2, 'snapshot thấy vùng soạn thảo, ô mã HTML, ô chọn tệp bị ẩn');
  // người dùng đang gõ ở app (ô chat) trong lúc AI làm → không bị giành chữ / giành con trỏ
  await win.click('.viewtabs button[data-v="chat"]'); await win.locator('.ch-bar .cb.web').click(); await new Promise((r) => setTimeout(r, 200));
  await win.click('#chInput'); await win.keyboard.type('anh đang gõ');
  const big = '<h2>Đặc điểm nổi bật</h2><ul>' + Array.from({ length: 60 }, (_, k) => `<li>Ý số ${k + 1}: thiết kế gọn nhẹ, hút mạnh</li>`).join('') + '</ul>';
  const tmpImg = path.join(os.tmpdir(), 'vp-anh-sp-1.png'); const tmpImg2 = path.join(os.tmpdir(), 'vp-anh-sp-2.png');
  fs.writeFileSync(tmpImg, Buffer.alloc(1234, 1)); fs.writeFileSync(tmpImg2, Buffer.alloc(77, 2));
  const t2 = Date.now();
  const r1 = await call(61, 'browser_act', { actions: [
    { action: 'fill', ref: htmlBox, text: big },
    { action: 'type', ref: desc, text: 'Máy hút bụi không dây SIMI' },
    { action: 'paste', ref: ed2, text: 'x', html: '<b>Đậm</b>' },
    { action: 'scroll', ref: htmlBox, amount: 500 },
    { action: 'upload', ref: file, files: [tmpImg] },
    { action: 'click', ref: del },
  ] });
  const o1 = r1.result.content[0].text;
  if (r1.result.isError) console.log(o1);
  await win.keyboard.type(' tiếp');
  check(await win.locator('#chInput').inputValue() === 'anh đang gõ tiếp' && await win.evaluate(() => document.activeElement && document.activeElement.id) === 'chInput', 'người dùng gõ ở app trong lúc AI làm: chữ không lọt sang trang, ô chat vẫn giữ con trỏ');
  const pg2 = await app.evaluate(({ BrowserWindow }) => BrowserWindow.getAllWindows()[0].contentView.children[0].webContents.executeJavaScript('({ html: document.getElementById("html").value, desc: document.getElementById("desc").innerText, ed2: document.getElementById("ed2").innerHTML, box: document.getElementById("box").scrollTop, pic: document.getElementById("picOut").textContent })'));
  check(pg2.html === big, `fill: điền ${big.length} ký tự HTML vào ô mã trong 1 bước (${Date.now() - t2} ms cả lượt)`);
  check(pg2.desc === 'Máy hút bụi không dây SIMI', 'type: gõ tiếng Việt vào vùng soạn thảo');
  check(pg2.ed2 === '[dán] <b>Đậm</b>', 'paste: dán HTML qua sự kiện dán của trang, không đụng clipboard máy');
  check(/cuộn xuống khung textarea#html: dịch \d+px/.test(o1), 'scroll theo mã: cuộn đúng ô có thanh cuộn riêng (ô mã HTML), không phải cả trang');
  const bx = await app.evaluate(({ BrowserWindow }) => BrowserWindow.getAllWindows()[0].contentView.children[0].webContents.executeJavaScript('(() => { const r = document.getElementById("box").getBoundingClientRect(); return { x: Math.round(r.left + 40), y: Math.round(r.top + 105) }; })()'));
  const sc1 = await call(66, 'browser_act', { actions: [{ action: 'scroll', x: bx.x, y: bx.y, amount: 300 }], snapshot: false });
  check(/cuộn xuống khung div#box: dịch 300px/.test(sc1.result.content[0].text), 'scroll theo toạ độ: cuộn khung chi tiết bên dưới con trỏ (như lăn chuột)');
  check(/Ảnh: vp-anh-sp-1\.png:1234/.test(pg2.pic), 'upload: đưa ảnh vào ô chọn tệp bị ẩn, không mở cửa sổ chọn tệp');
  check(/\| đã xoá/.test(pg2.pic) && /hộp thoại confirm: "Xoá ảnh này\?" → đã bấm OK/.test(o1), 'trang hỏi xác nhận → tự bấm OK và báo lại cho AI');
  const r2 = await call(62, 'browser_act', { actions: [{ action: 'upload', ref: up, files: [tmpImg, tmpImg2] }] });
  const pic2 = await app.evaluate(({ BrowserWindow }) => BrowserWindow.getAllWindows()[0].contentView.children[0].webContents.executeJavaScript('document.getElementById("picOut").textContent'));
  check(!r2.result.isError && /vp-anh-sp-1\.png:1234,vp-anh-sp-2\.png:77/.test(pic2), 'upload qua nút "Tải ảnh lên": chặn hộp chọn tệp của Windows, đưa thẳng 2 ảnh vào');
  const js = await call(63, 'browser_js', { code: 'document.querySelectorAll("#html").length + document.getElementById("desc").innerText.length' });
  check(js.result.content[0].text === '27', 'browser_js: đọc dữ liệu trong trang');
  // ẩn khung nhỏ / thu nhỏ app → trang không hiển thị: AI vẫn gõ / bấm được (bằng thao tác trong trang), ảnh chụp báo rõ
  await win.locator('.ch-bar .cb.web').click(); await win.click('.viewtabs button[data-v="office"]');
  await win.waitForSelector('#cbwPip:not(.hidden)', { timeout: 5000 }).catch(() => {});
  await win.evaluate(() => { const b = document.querySelector('#cbwPip [aria-label="Ẩn"]'); if (b) b.click(); });
  await new Promise((r) => setTimeout(r, 300));
  if (process.env.DBG) console.log('DBG pane state', JSON.stringify(await win.evaluate(() => window.vp.browser.state())).slice(0, 300));
  const hid = await call(64, 'browser_act', { actions: [{ action: 'type', ref: desc, text: 'Bản khi app ẩn' }, { action: 'click', ref: del }] });
  if (process.env.DBG) console.log('DBG hid', JSON.stringify(hid).slice(0, 400));
  const sc2 = await call(65, 'browser_screenshot', {});
  check(!hid.result.isError && /điền "Bản khi app ẩn"/.test(hid.result.content[0].text), 'trang bị ẩn: AI vẫn điền chữ và bấm nút được');
  check(sc2.result.isError && /không hiển thị|đang ẩn/.test(sc2.result.content[0].text), 'trang bị ẩn: chụp ảnh báo rõ, gợi ý dùng snapshot');
  fs.rmSync(tmpImg, { force: true }); fs.rmSync(tmpImg2, { force: true });

  mcp.stdin.end(); mcp.kill();
  srv.close();
  await finish(app, errors);
});
