// Đăng bài nhiều bước trong khung trình duyệt: sau mỗi browser_act chỉ trả phần tử MỚI / ĐỔI (trang quản trị có menu
// 150 mục lặp lại mỗi lần) → ngữ cảnh không phình, model không chậm dần. Mã eN cũ vẫn bấm / gõ được.
const fs = require('fs');
const os = require('os');
const path = require('path');
const http = require('http');
const { spawn } = require('child_process');
const { launch, check, finish, run, ROOT } = require('./helpers');

const menu = Array.from({ length: 150 }, (_, i) => `<a href="/m${i}">Mục quản trị số ${i} – danh sách sản phẩm và đơn hàng</a>`).join('');
const PAGE = `<!doctype html><meta charset="utf-8"><title>Thêm bài viết</title><nav>${menu}</nav><main><h1>Thêm bài viết</h1>
<input id="t" aria-label="Tiêu đề bài viết"><textarea id="c" aria-label="Nội dung"></textarea>
<select id="cat" aria-label="Danh mục"><option>Tin tức</option><option>Khuyến mãi</option></select>
<button id="save" onclick="document.getElementById('ok').hidden=false">Lưu bài viết</button><p id="ok" hidden>Đã lưu bài viết thành công</p>
<button onclick="document.getElementById('seo').hidden=false">Chỉnh sửa SEO</button><div id="seo" hidden><input aria-label="Thẻ tiêu đề SEO"><input aria-label="Mô tả SEO"></div></main>`;

function rpc(child, msg) {
  return new Promise((resolve) => {
    let buf = '';
    const on = (d) => { buf += d; const line = buf.split('\n').find((l) => l.includes(`"id":${msg.id}`)); if (line) { child.stdout.off('data', on); resolve(JSON.parse(line)); } };
    child.stdout.on('data', on);
    child.stdin.write(JSON.stringify({ jsonrpc: '2.0', ...msg }) + '\n');
  });
}

run(async () => {
  const srv = http.createServer((_req, res) => { res.writeHead(200, { 'content-type': 'text/html; charset=utf-8' }); res.end(PAGE); });
  await new Promise((r) => srv.listen(0, '127.0.0.1', r));
  const base = `http://127.0.0.1:${srv.address().port}/them-bai`;
  const home = fs.mkdtempSync(path.join(os.tmpdir(), 'vpai-diff-'));
  const { app, win, errors, userData } = await launch({ prefix: 'diff', env: { CODEX_HOME: home, PATH: '/usr/bin:/bin' }, config: { lobbyEnabled: false, autoUpdate: false } });
  await win.click('.sheet footer .linkbtn').catch(() => {});
  await win.click('.viewtabs button[data-v="chat"]');
  const conn = path.join(userData, 'browser-pane.json');
  for (let i = 0; i < 50 && !fs.existsSync(conn); i++) await new Promise((r) => setTimeout(r, 100));
  const mcp = spawn(require('electron'), [path.join(ROOT, 'src', 'browser', 'mcp.js')], { env: { ...process.env, ELECTRON_RUN_AS_NODE: '1', VPB_CONN: conn }, stdio: ['pipe', 'pipe', 'inherit'] });
  mcp.stdout.setEncoding('utf8');
  await rpc(mcp, { id: 1, method: 'initialize', params: { protocolVersion: '2025-06-18' } });
  const call = async (id, name, args) => (await rpc(mcp, { id, method: 'tools/call', params: { name, arguments: args } })).result.content.map((c) => c.text || '').join('\n');
  const t0 = await call(2, 'browser_open', { url: base });
  const ref = (t, label) => (t.match(new RegExp(`\\[(e\\d+)\\] [a-z]+ "${label}`)) || [])[1];
  const title = ref(t0, 'Tiêu đề bài viết'); const body = ref(t0, 'Nội dung'); const seoBtn = ref(t0, 'Chỉnh sửa SEO'); const save = ref(t0, 'Lưu bài viết');
  check(title && body && seoBtn && save, 'mở trang: có đủ mã ô tiêu đề / nội dung / SEO / Lưu');
  const a1 = await call(3, 'browser_act', { actions: [{ action: 'fill', ref: title, text: 'Khai trương cửa hàng mới' }, { action: 'fill', ref: body, text: 'Nội dung bài viết' }] });
  check(a1.length < t0.length / 2, `sau khi gõ: trả ${a1.length} chữ (mở trang ${t0.length}) – không lặp lại menu`);
  check(/Phần tử MỚI \/ ĐỔI/.test(a1) && /Tiêu đề bài viết" = "Khai trương cửa hàng mới"/.test(a1) && !/Mục quản trị số 7/.test(a1), 'chỉ liệt kê ô vừa đổi (có giá trị mới), không có menu');
  const a2 = await call(4, 'browser_act', { actions: [{ action: 'click', ref: seoBtn }] });
  check(/Thẻ tiêu đề SEO/.test(a2) && /Mô tả SEO/.test(a2), 'bấm Chỉnh sửa SEO → thấy ngay 2 ô SEO mới hiện');
  const a3 = await call(5, 'browser_act', { actions: [{ action: 'click', ref: save }] });
  check(/Đã lưu bài viết thành công/.test(a3), 'mã cũ (nút Lưu) vẫn bấm được, thấy chữ "Đã lưu"');
  const total = a1.length + a2.length + a3.length;
  check(total < t0.length * 1.5, `3 lần thao tác tổng ${total} chữ (trước đây ≈ ${t0.length} chữ MỖI lần)`);
  const full = await call(6, 'browser_snapshot', {});
  check(/Mục quản trị số 7/.test(full) && /Phần tử thao tác được/.test(full), 'browser_snapshot vẫn trả đủ trang khi cần');
  mcp.kill(); srv.close();
  await finish(app, errors);
});
