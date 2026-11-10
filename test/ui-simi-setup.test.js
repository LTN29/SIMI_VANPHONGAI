// Cài SIMI AI ngay trong app: nhập key trên giao diện → bước có dấu ✓, không mở Terminal, không hiện dòng lệnh.
const fs = require('fs');
const os = require('os');
const path = require('path');
const http = require('http');
const { launch, check, finish, run } = require('./helpers');

run(async () => {
  const GOOD = 'sk-simi-test-' + 'a'.repeat(24);
  const gw = http.createServer((req, res) => {
    if (req.url === '/v1/models') {
      const ok = req.headers.authorization === `Bearer ${GOOD}`;
      res.writeHead(ok ? 200 : 401, { 'content-type': 'application/json' });
      return res.end(JSON.stringify(ok ? { data: [{ id: 'cc/claude-opus-5-5' }] } : { error: { message: 'bad key' } }));
    }
    res.writeHead(404); res.end();
  });
  await new Promise((r) => gw.listen(0, '127.0.0.1', r));
  const keyOut = path.join(fs.mkdtempSync(path.join(os.tmpdir(), 'vp-simi-')), 'key.txt');
  const codexHome = fs.mkdtempSync(path.join(os.tmpdir(), 'vp-codex-'));
  const { app, win, errors, shot } = await launch({
    prefix: 'simi-setup',
    config: { simiGateway: `http://127.0.0.1:${gw.address().port}` },
    env: { PATH: '/usr/bin:/bin', VP_SIMI_FAKE_INSTALLER: path.join(__dirname, 'fixtures', 'fake-simi-installer.js'), FAKE_KEY_OUT: keyOut, CODEX_HOME: codexHome, FAKE_FAIL: 'update', FAKE_SLOW_MS: '2500' },
  });
  await win.waitForSelector('.welcome', { timeout: 20000 });
  check(/tự cài Codex/.test(await win.locator('.welcome').innerText()), 'màn chào mừng nói rõ app tự cài Codex');
  // máy chưa có Codex (lỗi "thiếu Codex" trước đây): nút chính của màn chào mừng mở thẳng bảng cài SIMI
  await win.click('.sheet footer .btn.primary:has-text("Cài đặt SIMI AI")');
  await win.waitForSelector('.ss-key');
  await win.click('#modalClose');
  await win.waitForFunction(() => document.querySelector('#setupBanner').innerText.length > 0, null, { timeout: 30000 }).catch(() => {});
  check(/Chưa cài SIMI AI/.test(await win.locator('#setupBanner').innerText()), 'Văn phòng báo "Chưa cài SIMI AI" kèm nút cài, không báo lỗi thiếu');
  await win.click('#setupBanner .btn:has-text("Cài đặt SIMI")');
  await win.waitForSelector('.ss-key');
  await win.click('#modalClose');
  await win.evaluate(() => window.VPSimiSetup.open({ mode: 'install', status: { desktop: false } }));
  await win.waitForSelector('.ss-key');
  check(await win.locator('.ss-codex button', { hasText: 'Tải Codex' }).count() === 1, 'có nút Tải Codex khi máy chưa có app Codex');
  check(!(await win.locator('#modal').innerText()).match(/irm |\| iex|curl -|\.ps1|install\/codex/i), 'không hiện lệnh PowerShell / curl');
  await shot('01-form');

  await win.fill('.ss-key', 'sk-sai-' + 'b'.repeat(20));
  await win.click('.ss-go');
  await win.waitForSelector('.ss-err:not([hidden])', { timeout: 15000 });
  check(/không đúng/.test(await win.locator('.ss-err').innerText()), 'key sai → báo ngay, chưa chạy bộ cài');
  check(!fs.existsSync(keyOut), 'chưa chạy bộ cài khi key sai');

  await win.fill('.ss-key', GOOD);
  await win.click('.ss-go');
  await win.waitForSelector('.ss-step.now', { timeout: 15000 });
  // bước đúng theo mốc của bộ cài: đang cài thư viện Word thì bước "Lưu cấu hình" chưa chạy (trước đây nhảy tới cuối ngay khi xác minh Combo)
  await win.waitForSelector('.ss-step.now:has-text("Word")', { timeout: 15000 });
  check(/thư viện Word/.test(await win.locator('.ss-step.now .ss-act').innerText()), 'dưới bước đang làm hiện việc cụ thể đang chạy');
  check(await win.locator('.ss-step.todo:has-text("Lưu cấu hình")').count() === 1, 'bước Lưu cấu hình chưa bắt đầu khi đang cài công cụ');
  await win.waitForFunction(() => /^\d+s$/.test((document.querySelector('.ss-step.now .ss-time') || {}).textContent || ''), null, { timeout: 5000 });
  check(true, 'bước đang làm có đồng hồ đếm giây');
  await shot('02-running');
  check(!(await win.locator('#modal').innerText()).includes('Repair: dùng API key'), 'không hiện dòng chạy của bộ cài');
  await win.waitForSelector('.ss-done', { timeout: 30000 });
  const nStep = await win.locator('.ss-step').count();
  check(nStep >= 6 && await win.locator('.ss-step.done').count() === nStep, `đủ ${nStep} bước có dấu ✓ (Linux có thêm bước chuẩn bị máy)`);
  check(fs.readFileSync(keyOut, 'utf8') === GOOD, 'bộ cài nhận đúng key qua biến môi trường (không qua dòng lệnh)');
  check(await win.locator('.ss-key').count() === 0, 'không còn hiện key sau khi cài');
  check(await win.locator('.ss-step.done:has-text("Word") .ss-time').count() === 1, 'bước lâu hiện thời gian đã mất cạnh dấu ✓');
  await shot('03-done');

  // bộ cài cũ (chưa có mốc [SIMI-STEP]): đoán bước theo chữ, không nhảy tới bước cuối khi thấy chữ "Combo"
  const seq = await win.evaluate(() => {
    const S = window.VPSimiSetup; const st = S.state;
    const prev = { step: st.step, result: st.result, mode: st.mode };
    st.step = -1; st.result = null; st.mode = 'install';
    S.onEvent({ type: 'simi-update', ev: 'start', mode: 'install' });
    const ids = ['key', ...(/linux/i.test(navigator.platform) ? ['prep'] : []), 'get', 'codex', 'tools', 'skills', 'config'];
    const out = [];
    for (const l of ['Repair: dùng API key đã lưu, không yêu cầu nhập lại.', 'Đang xác minh Combo SIMI AI qua Gateway...', 'Đang cài Codex CLI standalone chính thức từ OpenAI...', 'Đang cài runtime Windows: OpenJS.NodeJS.LTS...', 'Python PDF runtime: C:\\x', 'Đã cài/cập nhật 15 skill Simi. Khởi động lại Codex Desktop', 'Đã cài lệnh PDF: ltn-pdf (runtime: OK)', '  Codex runtime config: provider ltn_gateway + MCP simi_browser OK']) {
      S.onEvent({ type: 'simi-update', ev: 'line', line: l }); out.push(ids[st.step]);
    }
    S.onEvent({ type: 'simi-update', ev: 'done', ok: true });
    Object.assign(st, prev);
    return out.join(',');
  });
  check(seq === 'get,get,codex,tools,tools,skills,skills,config', 'bộ cài cũ: các bước đi đúng thứ tự (' + seq + ')');
  await win.click('#modalClose');

  // cập nhật lỗi → câu dễ hiểu + sao chép chi tiết cho IT, không hiện log
  await win.evaluate(() => { window.VPSimiSetup.state.result = null; window.VPSimiSetup.open({ mode: 'update' }); });
  await win.waitForSelector('.ss-fail', { timeout: 30000 });
  const t = await win.locator('.ss-fail').innerText();
  check(/Mạng chập chờn/.test(t) && !/Invoke-WebRequest/.test(t), 'lỗi mạng → câu dễ hiểu, không hiện lỗi kỹ thuật');
  check(await win.locator('.ss-fail button', { hasText: 'Sao chép chi tiết gửi IT' }).count() === 1, 'có nút sao chép chi tiết gửi IT');
  await shot('04-fail');
  gw.close();
  await finish(app, errors);
});
