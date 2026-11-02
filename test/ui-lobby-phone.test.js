// Sảnh trên điện thoại: bấm 📱 ở Sảnh → hiện mã QR (link dùng 1 lần) → "điện thoại" (trình duyệt cỡ iPhone) mở link
// là vào Sảnh dưới đúng tên người dùng máy tính, nhắn tin thì máy tính + đồng nghiệp đều thấy.
const fs = require('fs');
const os = require('os');
const path = require('path');
const { launch, check, finish, run } = require('./helpers');
const { makeCodexHome } = require('./fixtures/mock-gateway');
const { GW, startGatewayServer, colleague } = require('./fixtures/lobby-gateway');

const CID = '11111111-2222-3333-4444-555555555555';

run(async () => {
  if (!fs.existsSync(path.join(GW, 'src', 'mobile.mjs'))) { console.log(`BỎ QUA: Gateway ở ${GW} chưa có Sảnh điện thoại (đặt GATEWAY_DIR)`); return; }
  const gw = await startGatewayServer({
    users: { 'sales-ngoc': { displayName: 'Ngọc', teamId: 'SALES', key: 'k-ngoc' }, 'it-bao': { displayName: 'Bảo', teamId: 'IT', key: 'k-bao' } },
    env: { MOBILE_SESSIONS_FILE: path.join(fs.mkdtempSync(path.join(os.tmpdir(), 'vpai-mob-')), 'sessions.json') },
  });
  const bao = colleague(gw.url, 'k-bao'); await bao.waitFor('hello');
  const { app, win, errors, shot } = await launch({ prefix: 'lobbyphone', env: { CODEX_HOME: makeCodexHome(gw.url), LTN_TEAM_API_KEY: 'k-ngoc', LTN_CLIENT_ID: CID } });
  const { chromium, devices } = require('playwright');
  const browser = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
  try {
    await win.waitForSelector('.welcome', { timeout: 20000 });
    await win.click('.sheet footer .linkbtn');
    await win.click('.viewtabs button[data-v="lobby"]');
    await win.waitForSelector('#lbConn.online', { timeout: 30000 });
    // ghi lại nội dung đưa vào mã QR
    await win.evaluate(() => { const o = window.qrcode; window.qrcode = (...a) => { const q = o(...a); const add = q.addData.bind(q); q.addData = (d) => { window.__qrData = d; return add(d); }; return q; }; });
    await win.click('#lbPhone');
    await win.waitForSelector('.ph-code svg', { timeout: 15000 });
    await shot('qr');
    const url = await win.evaluate(() => window.__qrData);
    check(/\/m#pair=[A-Za-z0-9_-]{20,}$/.test(url), 'mã QR chứa link đăng nhập dùng 1 lần');
    check(/hết hạn sau [45]:\d\d/.test(await win.locator('#modal').innerText()), 'có đếm ngược hết hạn');

    // "điện thoại" quét mã
    const phone = await browser.newContext({ ...devices['iPhone 13'] });
    const pg = await phone.newPage(); const perr = [];
    pg.on('pageerror', (e) => perr.push(e.message));
    await pg.goto(url.replace('http://127.0.0.1', 'http://127.0.0.1'));
    await pg.waitForSelector('.tabs', { timeout: 15000 });
    // mở vào tab Sảnh (3D, cần điều khiển)
    await pg.waitForSelector('.stage canvas', { timeout: 20000 });
    check(await pg.locator('.joy').isVisible(), 'điện thoại mở Sảnh 3D có cần điều khiển');
    await pg.waitForFunction(() => window.__sanh && window.__sanh.people.size >= 2, null, { timeout: 15000 });
    check(true, 'thấy nhân vật của mình và đồng nghiệp trong Sảnh 3D');
    // máy tính thấy điện thoại vừa đăng nhập, có nút đăng xuất từ xa
    await win.waitForSelector('#modal .ph-dev', { timeout: 10000 });
    check((await win.locator('#modal .ph-devs').innerText()).includes('iPhone'), 'máy tính hiện điện thoại đã đăng nhập');
    await pg.click('.tabs button:nth-child(2)');
    check((await pg.locator('.top small').innerText()).includes('Ngọc'), 'điện thoại vào Sảnh dưới tên người dùng máy tính');
    await pg.click('.tabs button:nth-child(3)');
    await pg.waitForSelector('.row >> text=Bảo');
    check(true, 'điện thoại thấy đồng nghiệp đang online');
    await pg.click('.tabs button:nth-child(2)');
    await pg.click('.row >> text=Cả công ty');
    await pg.fill('#compose textarea', 'Chào cả nhà, em nhắn từ điện thoại 📱');
    await pg.click('.send');
    const got = await bao.waitFor('message', (d) => /từ điện thoại/.test(d.text));
    check(got.from === 'u:sales-ngoc', 'đồng nghiệp nhận tin, đúng người gửi');
    await win.waitForSelector('#lbMsgs .lb-msg >> text=từ điện thoại', { timeout: 10000 });
    check(true, 'app máy tính của chính mình cũng thấy tin gửi từ điện thoại');
    // đồng nghiệp trả lời → điện thoại nhận ngay
    await bao.post('messages', { room: 'all', text: 'Bảo nhận được rồi nhé' });
    await pg.waitForSelector('.bub >> text=Bảo nhận được rồi nhé', { timeout: 10000 });
    check(true, 'điện thoại nhận tin mới ngay');
    // mã đã dùng không dùng lại được
    const p2 = await phone.newPage();
    await p2.goto(url); await p2.waitForSelector('.login .err', { timeout: 10000 });
    check(/hết hạn, đã dùng/.test(await p2.locator('.login .err').innerText()), 'mã QR chỉ dùng 1 lần');
    check(perr.length === 0, 'điện thoại không có lỗi JavaScript' + (perr.length ? ': ' + perr.join(' | ') : ''));
    // app trên màn hình chính (iPhone: bộ nhớ riêng) → đăng nhập bằng mã 8 ký tự gõ tay
    await win.click('#modal button:has-text("Mã mới")');
    await win.waitForFunction(() => /^[A-Z2-9]{4}-[A-Z2-9]{4}$/.test((document.querySelector('#modal .ph-short') || {}).textContent || ''), null, { timeout: 10000 });
    const short = await win.textContent('#modal .ph-short');
    check(true, `máy tính hiện mã gõ tay ${short}`);
    const home = await browser.newContext({ ...devices['iPhone 13'] });
    const hp = await home.newPage();
    await hp.goto(url.split('#')[0]);
    await hp.fill('.codebox input', short.toLowerCase().replace('-', ''));
    check((await hp.inputValue('.codebox input')) === short, 'ô nhập tự viết hoa, tự thêm gạch');
    await hp.click('.codebox button');
    await hp.waitForSelector('.tabs', { timeout: 15000 });
    check(true, 'điện thoại đăng nhập bằng mã gõ tay');
    await win.waitForFunction(() => document.querySelectorAll('#modal .ph-dev').length === 2, null, { timeout: 10000 });
    check(true, 'máy tính thấy 2 điện thoại đã đăng nhập');
    // đăng xuất từ xa trên máy tính → điện thoại về màn đăng nhập
    for (let i = 0; i < 2; i++) { await win.click('#modal .ph-dev .btn >> nth=0'); await win.waitForFunction((n) => document.querySelectorAll('#modal .ph-dev').length === n, 1 - i, { timeout: 10000 }); }
    await pg.reload(); await pg.waitForSelector('.login', { timeout: 10000 });
    check(/hết|Quét|QR/i.test(await pg.locator('.login').innerText()), 'máy tính đăng xuất điện thoại từ xa');
  } finally {
    await browser.close();
    bao.close();
    await finish(app, errors);
    gw.child.kill();
  }
});
