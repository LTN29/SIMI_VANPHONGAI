// Chat Sảnh 0.9.13 với Gateway thật: gửi ảnh (nén trên máy), @gọi tên, trả lời, thu hồi, tab Quản trị của admin.
// App đăng nhập là "Ngọc" (admin qua LOBBY_ADMINS), đồng nghiệp "Bảo" nối thẳng vào Gateway.
const fs = require('fs');
const os = require('os');
const path = require('path');
const { launch, check, finish, run } = require('./helpers');
const { makeCodexHome } = require('./fixtures/mock-gateway');
const { GW, startGatewayServer, colleague, makePng } = require('./fixtures/lobby-gateway');

const KEYS = { ngoc: 'test-key-ngoc', bao: 'test-key-bao', an: 'test-key-an' };
const CID = '11111111-2222-3333-4444-555555555555';

run(async () => {
  if (!fs.existsSync(path.join(GW, 'src', 'lobby-files.mjs'))) { console.log(`BỎ QUA: Gateway ở ${GW} chưa có gửi ảnh (đặt GATEWAY_DIR)`); return; }
  const gw = await startGatewayServer({
    users: {
      'sales-ngoc': { displayName: 'Ngọc', teamId: 'SALES', key: KEYS.ngoc },
      'it-bao': { displayName: 'Bảo', teamId: 'IT', key: KEYS.bao },
      'mk-an': { displayName: 'An', teamId: 'MARKETING', key: KEYS.an },
    },
    env: { LOBBY_ADMINS: 'sales-ngoc', LOBBY_MSG_PER_10S: '100' },
  });
  const bao = colleague(gw.url, KEYS.bao); await bao.waitFor('hello');
  const an = colleague(gw.url, KEYS.an); await an.waitFor('hello');
  const imgDir = fs.mkdtempSync(path.join(os.tmpdir(), 'vpai-img-'));
  const big = path.join(imgDir, 'man-hinh.png'); fs.writeFileSync(big, makePng(2400, 1200));
  const small = path.join(imgDir, 'nho.png'); fs.writeFileSync(small, makePng(300, 400));
  const fake = path.join(imgDir, 'gia.png'); fs.writeFileSync(fake, 'không phải ảnh');

  const { app, win, errors, shot } = await launch({ prefix: 'lobbychat', env: { CODEX_HOME: makeCodexHome(gw.url), LTN_TEAM_API_KEY: KEYS.ngoc, LTN_CLIENT_ID: CID } });
  try {
    await win.waitForSelector('.welcome', { timeout: 20000 });
    await win.click('.sheet footer .linkbtn');
    await win.click('.viewtabs button[data-v="lobby"]');
    await win.waitForSelector('#lbConn.online', { timeout: 30000 });
    await win.waitForSelector('.viewtabs button[data-v="admin"]', { timeout: 10000 });
    check(true, 'admin (theo mã tài khoản) thấy tab 🛡️ Quản trị');
    check(await win.isVisible('#lbAttach'), 'có nút gửi ảnh');

    // ---- gửi 2 ảnh + @gọi tên ----
    await win.setInputFiles('#lbFile', [big, small]);
    await win.waitForFunction(() => document.querySelectorAll('#lbTray .lb-tr img').length === 2, null, { timeout: 30000 });
    check(true, 'ảnh được nén ngay trên máy và hiện ảnh xem trước');
    await win.setInputFiles('#lbFile', [fake]);
    await win.waitForTimeout(500);
    check(await win.locator('#lbTray .lb-tr').count() === 2, 'file không phải ảnh bị từ chối');
    await win.click('#lbInput');
    await win.keyboard.type('Gửi ảnh nè @Bả');
    await win.waitForSelector('#lbMention .lb-mi', { timeout: 5000 });
    check((await win.locator('#lbMention').textContent()).includes('Bảo'), 'gõ @ hiện danh sách người để chọn');
    await win.keyboard.press('Enter');
    check((await win.inputValue('#lbInput')) === 'Gửi ảnh nè @Bảo ', 'chọn tên → điền "@Bảo"');
    await win.keyboard.type('xem giúp');
    await shot('01-compose');
    await win.keyboard.press('Enter');
    const got = await bao.waitFor('message', (d) => d.images && d.images.length === 2, 20000);
    check(got.text === 'Gửi ảnh nè @Bảo xem giúp' && got.mentions.includes('u:it-bao'), 'Bảo nhận tin kèm 2 ảnh và biết mình được tag');
    check(got.images[0].w === 1600 && got.images[0].h === 800, 'ảnh lớn được thu về 1600px trước khi gửi');
    const full = await bao.get(`file?id=${got.images[0].id}`);
    const fullBuf = Buffer.from(await full.arrayBuffer());
    check(full.headers.get('content-type') === 'image/webp' && fullBuf.length < 400 * 1024, `ảnh gửi đi là WebP gọn nhẹ (${Math.round(fullBuf.length / 1024)} KB, gốc ${Math.round(fs.statSync(big).size / 1024)} KB)`);
    const th = await bao.get(`file?id=${got.images[0].id}&thumb=1`);
    check((await th.arrayBuffer()).byteLength < 60 * 1024, 'có ảnh thu nhỏ riêng để khung chat tải nhanh');
    await win.waitForFunction(() => { const im = document.querySelectorAll('#lbMsgs .lb-msg.mine .lb-img img'); return im.length === 2 && [...im].every((i) => i.complete && i.naturalWidth > 0); }, null, { timeout: 15000 });
    check(true, 'ảnh hiện trong khung chat (tải qua Gateway có kiểm tra quyền)');
    check(await win.locator('#lbTray .lb-tr').count() === 0 && (await win.inputValue('#lbInput')) === '', 'gửi xong thì dọn ô nhập');
    await shot('02-sent');

    // xem ảnh lớn
    await win.click('#lbMsgs .lb-msg.mine .lb-img >> nth=0');
    await win.waitForFunction(() => { const i = document.querySelector('.lb-viewer img'); return i && i.complete && i.naturalWidth === 1600; }, null, { timeout: 10000 });
    check(true, 'bấm ảnh → xem ảnh đầy đủ');
    await shot('03-viewer');
    await win.keyboard.press('Escape');
    check(await win.locator('.lb-viewer').count() === 0, 'Esc đóng khung xem ảnh');

    // ---- Bảo trả lời + tag Ngọc ----
    await bao.post('messages', { room: 'all', text: '@Ngọc ok đẹp đó', mentions: ['u:sales-ngoc'], replyTo: got.id });
    await win.waitForSelector('#lbMsgs .lb-msg.tagged .lb-quote', { timeout: 10000 });
    check((await win.locator('#lbMsgs .lb-msg.tagged .lb-tag.me').textContent()) === '@Ngọc', 'tin tag mình được tô nổi, kèm trích tin gốc');
    // đang ở phòng khác thì phòng chung hiện dấu @
    await an.post('messages', { to: 'u:sales-ngoc', text: 'Chị Ngọc ơi' });
    await win.waitForSelector('.lb-room >> text=An', { timeout: 10000 });
    await win.click('.lb-room >> text=An');
    await bao.post('messages', { room: 'all', text: '@Ngọc họp nhé', mentions: ['u:sales-ngoc'] });
    await win.waitForSelector('.lb-room .badge.at', { timeout: 10000 });
    check(true, 'được tag ở phòng chung khi đang xem phòng khác → dấu @ trên phòng');
    await win.click('.lb-room >> text=Cả công ty');

    // trả lời bằng nút ↩
    const target = win.locator('#lbMsgs .lb-msg', { hasText: 'họp nhé' });
    await target.hover(); await target.locator('.lb-acts button[title="Trả lời"]').click();
    check(await win.isVisible('#lbReply'), 'bấm ↩ → thanh "Trả lời Bảo"');
    await win.fill('#lbInput', 'Dạ em vào liền'); await win.press('#lbInput', 'Enter');
    const rep = await bao.waitFor('message', (d) => d.text === 'Dạ em vào liền');
    check(rep.reply && rep.reply.name === 'Bảo' && rep.mentions.includes('u:it-bao'), 'tin trả lời kèm trích dẫn và tự tag người được trả lời');

    // ---- thu hồi ----
    const mineMsg = win.locator('#lbMsgs .lb-msg.mine', { hasText: 'Dạ em vào liền' });
    await mineMsg.hover(); await mineMsg.locator('.lb-acts .del').dblclick();
    await bao.waitFor('message-delete', (d) => d.id === rep.id);
    await win.waitForFunction((id) => !document.querySelector(`#lbMsgs .lb-msg[data-id="${id}"]`), rep.id, { timeout: 5000 });
    check(true, 'thu hồi tin (bấm 🗑 hai lần) – mọi người đều mất tin đó');

    // ---- tab Quản trị ----
    await win.click('.viewtabs button[data-v="admin"]');
    await win.waitForSelector('.ad-stat', { timeout: 10000 });
    check((await win.locator('.ad-body').textContent()).includes('Bảo'), 'tổng quan có danh sách đang online');
    check(await win.locator('.ad-ver >> text=0.9').count() >= 1, 'thấy phiên bản app của từng máy');
    await shot('04-admin');
    await win.locator('.ad-table tr', { hasText: 'Bảo' }).first().locator('select').selectOption('15');
    const muted = await bao.waitFor('personal', (d) => d.mutedUntil);
    check(muted.mutedUntil > Date.now(), 'khoá chat Bảo 15 phút');
    check((await bao.post('messages', { room: 'all', text: 'alo' })).status === 403, 'Bảo bị khoá thì không gửi được');
    await win.click('.ad-nb >> text=Phân quyền');
    await win.waitForSelector('.ad-table.perms');
    await win.locator('.ad-table.perms tr.def td >> nth=1').locator('.ad-sw span').click();
    const noImg = await an.waitFor('personal', (d) => d.perms && d.perms.image === false);
    check(noImg.perms.image === false, 'tắt "Gửi ảnh" mặc định → mọi người mất quyền ngay');
    await shot('05-perms');
    await win.waitForFunction(() => !document.querySelector('.ad-table.perms tr.def td:nth-child(2) input').checked, null, { timeout: 5000 });
    await win.locator('.ad-table.perms tr.def td >> nth=1').locator('.ad-sw span').click();
    await an.waitFor('personal', (d) => d.perms && d.perms.image === true);
    await win.click('.ad-nb >> text=Thông báo');
    await win.fill('.ad-ta', '15h họp toàn công ty nhé 📣');
    await win.click('.ad-body .btn.primary >> text=Gửi');
    check((await bao.waitFor('announce')).text === '15h họp toàn công ty nhé 📣', 'gửi thông báo toàn công ty');
    await win.click('.ad-nb >> text=Nhật ký');
    await win.waitForSelector('.ad-table td >> text=Khoá chat');
    check(await win.locator('.ad-table td >> text=Thông báo').count() >= 1, 'nhật ký ghi lại các thao tác của admin');
    await shot('06-audit');
    await win.click('.viewtabs button[data-v="lobby"]');
    await win.waitForSelector('#lbPin:not(.hidden) >> text=15h họp', { timeout: 5000 });
    check(true, 'thông báo ghim hiện trên đầu Sảnh');
    await shot('07-pinned');
  } finally {
    bao.close(); an.close(); gw.child.kill();
    await finish(app, errors);
  }
});
