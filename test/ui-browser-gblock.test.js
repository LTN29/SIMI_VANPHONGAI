// Google chặn đăng nhập tài khoản Google trong khung trình duyệt của app (trang …/signin/rejected «không an toàn»):
// khung hiện thanh báo + «Mở bằng Chrome SIMI» / «Để AI dùng Chrome SIMI», AI nhận lời nhắc không thử lại,
// đổi cách AI dùng trình duyệt được ở 🧰 Công cụ. Trang Google / Canva ở đây là trang giả phục vụ ngay trong app (không ra mạng).
const fs = require('fs');
const os = require('os');
const path = require('path');
const { spawn } = require('child_process');
const { launch, check, finish, run, ROOT } = require('./helpers');

function rpc(child, msg) {
  return new Promise((resolve) => {
    let buf = '';
    const on = (d) => { buf += d; const line = buf.split('\n').find((l) => l.includes(`"id":${msg.id}`)); if (line) { child.stdout.off('data', on); resolve(JSON.parse(line)); } };
    child.stdout.on('data', on);
    child.stdin.write(JSON.stringify({ jsonrpc: '2.0', ...msg }) + '\n');
  });
}

run(async () => {
  const home = fs.mkdtempSync(path.join(os.tmpdir(), 'vpai-gblock-'));
  const { app, win, errors, shot, userData } = await launch({ prefix: 'gblock', env: { CODEX_HOME: home, PATH: '/usr/bin:/bin' }, config: { lobbyEnabled: false, autoUpdate: false } });
  await win.click('.sheet footer .linkbtn').catch(() => {});
  // trang giả: Canva (có nút Google) và trang Google từ chối
  await app.evaluate(({ session }) => {
    session.fromPartition('persist:vp-browser').protocol.handle('https', (req) => {
      const u = new URL(req.url);
      const html = u.hostname === 'accounts.google.com'
        ? (/signin\/rejected/.test(u.pathname) ? '<!doctype html><meta charset="utf-8"><title>Không thể đăng nhập cho bạn</title><h1>Không thể đăng nhập cho bạn</h1><p>Trình duyệt hoặc ứng dụng này có thể không an toàn.</p>'
          : '<!doctype html><meta charset="utf-8"><title>Đăng nhập</title><script>location.replace("https://accounts.google.com/v3/signin/rejected?continue=https%3A%2F%2Fwww.canva.com%2F")</script>')
        : '<!doctype html><meta charset="utf-8"><title>Canva</title><h1>Đăng nhập Canva</h1><a id="g" href="https://accounts.google.com/v3/signin/identifier">Tiếp tục với Google</a>';
      return new Response(html, { headers: { 'content-type': 'text/html; charset=utf-8' } });
    });
  });
  await win.click('.viewtabs button[data-v="chat"]');
  const conn = path.join(userData, 'browser-pane.json');
  for (let i = 0; i < 50 && !fs.existsSync(conn); i++) await new Promise((r) => setTimeout(r, 100));
  const mcp = spawn(require('electron'), [path.join(ROOT, 'src', 'browser', 'mcp.js')], { env: { ...process.env, ELECTRON_RUN_AS_NODE: '1', VPB_CONN: conn }, stdio: ['pipe', 'pipe', 'inherit'] });
  mcp.stdout.setEncoding('utf8');
  await rpc(mcp, { id: 1, method: 'initialize', params: { protocolVersion: '2025-06-18' } });

  // AI mở Canva rồi bấm "Tiếp tục với Google" → Google từ chối
  const r1 = await rpc(mcp, { id: 2, method: 'tools/call', params: { name: 'browser_open', arguments: { url: 'https://www.canva.com/login' } } });
  check(!r1.result.isError && !/Google từ chối/.test(JSON.stringify(r1.result)), 'mở Canva bình thường – chưa có cảnh báo Google');
  check(await win.locator('#cbwGblock.hidden').count() === 1, 'chưa có thanh báo Google');
  await rpc(mcp, { id: 3, method: 'tools/call', params: { name: 'browser_open', arguments: { url: 'https://accounts.google.com/v3/signin/identifier' } } });
  await win.waitForSelector('#cbwGblock:not(.hidden)', { timeout: 8000 });
  const st = await win.evaluate(() => window.vp.browser.state());
  check(st.gblock && /canva\.com\/login/.test(st.site), `khung biết Google đã chặn và nhớ trang trước đó (${st.site})`);
  check(/Google không cho đăng nhập trong khung này/.test(await win.locator('#cbwGblock').innerText()), 'thanh báo nói rõ Google chặn, không phải lỗi máy');
  check(await win.locator('#cbwGbOpen').isVisible() && await win.locator('#cbwGbMode').isVisible(), 'có nút «Mở bằng Chrome SIMI» và «Để AI dùng Chrome SIMI»');
  // trang đăng nhập Google: không gắn công cụ điều khiển (người dùng tự đăng nhập như trình duyệt thường)
  const dbgOn = () => app.evaluate(({ webContents }) => webContents.getAllWebContents().filter((w) => /accounts\.google\.com/.test(w.getURL())).map((w) => w.debugger.isAttached()));
  const att = await dbgOn();
  check(att.length >= 1 && att.every((x) => x === false), `trang Google không gắn DevTools/CDP (${JSON.stringify(att)})`);
  await shot('gblock');
  // lần gọi công cụ tiếp theo: AI được dặn không thử lại, chỉ người dùng chọn cách khác
  const r2 = await rpc(mcp, { id: 4, method: 'tools/call', params: { name: 'browser_snapshot', arguments: {} } });
  const t2 = r2.result.content.map((c) => c.text || '').join('\n');
  check(/Google từ chối đăng nhập/.test(t2) && /KHÔNG thử đăng nhập Google lại/.test(t2) && /Chrome SIMI/.test(t2), 'AI nhận lời nhắc: không thử lại, báo người dùng chọn Chrome SIMI / đăng nhập bằng email');
  check((await dbgOn()).every((x) => x === false), 'AI gọi công cụ khi đang ở trang Google → vẫn không gắn CDP');
  // đổi cách AI dùng trình duyệt: Chrome SIMI (vp_browser tắt, Chrome SIMI dùng lại như trước)
  const m = await win.evaluate(() => window.vp.browser.aiMode('chrome'));
  check(m.mode === 'chrome' && m.builtin === false, 'đặt AI dùng Chrome SIMI → app không còn giao khung cạnh chat cho AI');
  const tools = await win.evaluate(() => window.vp.chat.tools());
  check(tools.aiBrowser === 'chrome' && tools.builtin === false, '🧰 Công cụ biết AI đang dùng Chrome SIMI');
  const cfg = JSON.parse(fs.readFileSync(path.join(userData, 'config.json'), 'utf8'));
  check(cfg.builtinBrowser === false, 'lưu cấu hình builtinBrowser=false');
  const back = await win.evaluate(() => window.vp.browser.aiMode('pane'));
  check(back.mode === 'pane' && back.builtin === true, 'đổi lại khung cạnh chat được');
  // rời trang bị chặn → thanh báo tự ẩn
  await rpc(mcp, { id: 5, method: 'tools/call', params: { name: 'browser_open', arguments: { url: 'https://www.canva.com/' } } });
  await win.waitForSelector('#cbwGblock.hidden', { state: 'attached', timeout: 8000 });
  check(!(await win.evaluate(() => window.vp.browser.state())).gblock, 'sang trang khác → thanh báo ẩn');
  await rpc(mcp, { id: 6, method: 'tools/call', params: { name: 'browser_snapshot', arguments: {} } });
  const canvaDbg = await app.evaluate(({ webContents }) => webContents.getAllWebContents().filter((w) => /canva\.com/.test(w.getURL())).map((w) => w.debugger.isAttached()));
  check(canvaDbg.length >= 1 && canvaDbg.every(Boolean), `trang thường: AI thao tác thì gắn lại CDP (xử lý hộp thoại / chọn tệp) (${JSON.stringify(canvaDbg)})`);
  mcp.kill();
  await finish(app, errors);
});
