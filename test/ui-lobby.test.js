// Test tab Sảnh với Gateway thật (repo ltn-memory-gateway): app đăng nhập là "Ngọc", đồng nghiệp "Bảo" nối thẳng vào Gateway.
// Đường dẫn Gateway: biến GATEWAY_DIR, mặc định ../ltn-memory-gateway/ltn-memory-gateway (cạnh thư mục app).
const fs = require('fs');
const os = require('os');
const path = require('path');
const crypto = require('crypto');
const { spawn } = require('child_process');
const { launch, check, finish, run, ROOT } = require('./helpers');
const { makeCodexHome } = require('./fixtures/mock-gateway');

const GW = process.env.GATEWAY_DIR || path.join(ROOT, '..', 'ltn-memory-gateway', 'ltn-memory-gateway');
const hash = (k) => crypto.createHash('sha256').update(k).digest('hex');
const KEYS = { ngoc: 'test-key-ngoc', bao: 'test-key-bao' };
const CROWD = 28; // + Ngọc + Bảo = 30 người trong quán
const NAMES = ['An', 'Bình', 'Chi', 'Dũng', 'Giang', 'Hà', 'Hải', 'Hạnh', 'Hiếu', 'Hoa', 'Huy', 'Khánh', 'Lâm', 'Linh', 'Long', 'Mai', 'My', 'Nam', 'Nga', 'Phong', 'Phúc', 'Quân', 'Quỳnh', 'Sơn', 'Tâm', 'Thu', 'Trang', 'Vy'];
const TEAMS = ['SALES', 'IT', 'MARKETING', 'CSKH'];
const CID = '11111111-2222-3333-4444-555555555555';

async function startGatewayServer() {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'vpai-gw-'));
  fs.writeFileSync(path.join(dir, 'teams.json'), JSON.stringify({ teams: [
    { code: 'SALES', displayName: 'Sales', keyHash: hash('unused-sales'), enabled: true, memoryFile: 'SALES.md' },
    { code: 'IT', displayName: 'IT', keyHash: hash('unused-it'), enabled: true, memoryFile: 'IT.md' },
    { code: 'MARKETING', displayName: 'Marketing', keyHash: hash('unused-mk'), enabled: true, memoryFile: 'MARKETING.md' },
    { code: 'CSKH', displayName: 'CSKH', keyHash: hash('unused-cs'), enabled: true, memoryFile: 'CSKH.md' },
  ] }));
  const crowd = Object.fromEntries(NAMES.slice(0, CROWD).map((n, i) => [`crowd-${i}`, { displayName: n, teamId: TEAMS[i % 4], keyHash: hash(`crowd-key-${i}`), enabled: true }]));
  fs.writeFileSync(path.join(dir, 'users.json'), JSON.stringify({ version: 1, users: {
    'sales-ngoc': { displayName: 'Ngọc', teamId: 'SALES', role: 'Tư vấn khách hàng', keyHash: hash(KEYS.ngoc), enabled: true },
    'it-bao': { displayName: 'Bảo', teamId: 'IT', role: 'Kỹ thuật', keyHash: hash(KEYS.bao), enabled: true },
    ...crowd,
  } }));
  const port = 20300 + Math.floor(Math.random() * 500);
  const child = spawn(process.execPath, ['src/server.mjs'], {
    cwd: GW, stdio: ['ignore', 'pipe', 'pipe'],
    env: { ...process.env, PORT: String(port), HOST: '127.0.0.1', TEAMS_FILE: path.join(dir, 'teams.json'), LTN_USERS_CONFIG_FILE: path.join(dir, 'users.json'), MEMORY_DIR: path.join(dir, 'memory'), LOBBY_DATA_DIR: path.join(dir, 'lobby'), UPSTREAM_BASE_URL: 'http://127.0.0.1:9', VANPHONG_RELEASE_DIR: path.join(dir, 'releases'), LOBBY_RELEASE_CHECK_MS: '300', LOBBY_CINEMA_LOOKUP: 'false', LOBBY_ROSTER_MS: '400' },
  });
  await new Promise((resolve, reject) => {
    const t = setTimeout(() => reject(new Error('Gateway không khởi động')), 15000);
    child.stdout.on('data', (d) => { if (/server_started/.test(d)) { clearTimeout(t); resolve(); } });
    child.on('exit', (c) => reject(new Error('Gateway thoát: ' + c)));
  });
  return { url: `http://127.0.0.1:${port}/v1`, child, dir };
}

// đồng nghiệp giả lập: nghe SSE + gọi API như app thật
function colleague(base, key) {
  const events = []; const ctrl = new AbortController();
  const h = { authorization: `Bearer ${key}` };
  fetch(`${base}/lobby/stream`, { headers: h, signal: ctrl.signal }).then(async (res) => {
    const reader = res.body.getReader(); const dec = new TextDecoder(); let buf = '';
    try {
      for (;;) {
        const { value, done } = await reader.read(); if (done) break;
        buf += dec.decode(value, { stream: true }); let i;
        while ((i = buf.indexOf('\n\n')) >= 0) {
          const b = buf.slice(0, i); buf = buf.slice(i + 2);
          const ev = /^event: (.+)$/m.exec(b); const data = /^data: (.+)$/m.exec(b);
          if (ev && data) events.push({ event: ev[1], data: JSON.parse(data[1]) });
        }
      }
    } catch { /* đóng */ }
  });
  const post = (p, body) => fetch(`${base}/lobby/${p}`, { method: 'POST', headers: { ...h, 'content-type': 'application/json' }, body: JSON.stringify(body) }).then((r) => r.json());
  const waitFor = async (event, pred = () => true, ms = 10000) => {
    const t0 = Date.now();
    while (Date.now() - t0 < ms) { const e = events.find((x) => x.event === event && pred(x.data)); if (e) return e.data; await new Promise((r) => setTimeout(r, 100)); }
    throw new Error(`Đồng nghiệp không nhận được ${event}`);
  };
  return { events, post, waitFor, close: () => ctrl.abort() };
}

run(async () => {
  if (!fs.existsSync(path.join(GW, 'src', 'lobby.mjs'))) { console.log(`BỎ QUA: không thấy Gateway có Sảnh ở ${GW} (đặt GATEWAY_DIR)`); return; }
  const gw = await startGatewayServer();
  const codexHome = makeCodexHome(gw.url);
  const bao = colleague(gw.url, KEYS.bao);
  await bao.waitFor('hello');
  await bao.post('profile', { avatar: { hairStyle: 'spiky', hair: '#1a1a1a', shirt: '#e1262d', accessory: 'headphones', accent: '#0a78f0' } });
  await bao.post('state', { status: { activity: 'image', text: '🎨 Đang tạo ảnh', model: 'muse-image' } });
  // 28 đồng nghiệp khác: đồ ngẫu nhiên, một nửa ngồi sẵn ở quầy / góc thiền / sofa
  const R = (a) => a[Math.floor(Math.random() * a.length)];
  const seats = ['b1', 'b2', 'b4', 's12', 's21', 's23', 'z2', 'z1', 'z3', 'z4', 'z6', 'z8', 'zt1', 's11', 's13', 's22'];
  const acts = [['chat', '💬 Đang chat với AI'], ['image', '🎨 Đang tạo ảnh'], ['idle', '☕ Đang rảnh'], ['video', '🎬 Đang làm video'], ['web', '🔎 Đang tìm trên web']];
  const crowd = [];
  for (let i = 0; i < CROWD; i++) {
    const c = colleague(gw.url, `crowd-key-${i}`); crowd.push(c);
    await c.waitFor('hello');
    await c.post('profile', { avatar: { hairStyle: R(['short', 'long', 'spiky', 'bun', 'bob', 'curly', 'ponytail', 'buzz']), hair: R(['#1a1a1a', '#5a3a1e', '#c99a5b', '#d65a8a', '#4a6fd6']), shirt: R(['#0a78f0', '#e1262d', '#f5c518', '#2fc1a5', '#ff8a3d', '#ffffff', '#4a3592']), pants: R(['#2f3342', '#142c5a', '#c9b48a']), accessory: R(['none', 'none', 'glasses', 'cap', 'headphones', 'bow', 'crown']), accent: R(['#e1262d', '#0a78f0', '#f5c518']) } });
    const [a, t] = R(acts);
    await c.post('state', { status: { activity: a, text: t }, ...(i < seats.length ? { pos: { x: 0, z: 0, seat: seats[i] } } : {}) });
  }

  const { app, win, errors, shot, userData } = await launch({ prefix: 'lobby', env: { CODEX_HOME: codexHome, LTN_TEAM_API_KEY: KEYS.ngoc, LTN_CLIENT_ID: CID } });
  try {
    await win.waitForSelector('.welcome', { timeout: 20000 });
    await win.click('.sheet footer .linkbtn');
    await win.click('.viewtabs button[data-v="lobby"]');
    await win.waitForSelector('#lbConn.online', { timeout: 30000 });
    check(true, 'tự vào Sảnh bằng key đã cài, không cần đăng nhập');
    await win.waitForSelector('.lb-chip', { timeout: 10000 });
    check(await win.locator('.lb-chip', { hasText: 'Bảo' }).count() === 1 && (await win.locator('.lb-chip', { hasText: 'Bảo' }).getAttribute('title') || '').includes('Đang tạo ảnh'), 'danh sách online gọn 1 hàng: thấy đồng nghiệp đang online');
    await win.click('#lbPMode');
    await win.waitForSelector('.lb-person', { timeout: 10000 });
    check(await win.locator('.lb-person', { hasText: 'Bảo' }).count() === 1, 'bấm "Theo team" → xem đủ danh sách theo team');
    check((await win.locator('.lb-person', { hasText: 'Bảo' }).textContent()).includes('Đang tạo ảnh'), 'thấy đồng nghiệp đang làm gì với AI');
    check((await win.locator('#lbMe').textContent()).includes('Ngọc'), 'tên mình lấy từ Gateway (users.json)');
    check(await win.evaluate(() => window.__lobby.people.size) === 30, 'quán có đủ 30 nhân vật');
    check(await win.evaluate(() => [...window.__lobby.people.values()].filter((p) => p.sitting).length) >= 16, 'đồng nghiệp đang ngồi ở quầy / bàn / sofa');
    await win.click('.lb-top .btn >> text=Toàn cảnh'); await win.waitForTimeout(1500); await shot('00-overview');
    await win.click('.lb-top .btn >> text=Về chỗ mình');
    const joined = await bao.waitFor('member', (d) => d.name === 'Ngọc');
    check(joined.teamName === 'Sales', 'đồng nghiệp thấy mình vào Sảnh kèm team');
    await bao.waitFor('member', (d) => d.name === 'Ngọc' && d.status && d.status.activity === 'idle');
    check(true, 'trạng thái mình tự cập nhật (đang rảnh)');
    await win.waitForTimeout(1200); await shot('01-lobby');

    // bấm vào ghế quầy bar còn trống để ngồi
    const seatPt = await win.evaluate(() => {
      const L = window.__lobby; const st = L.seats.get('b3'); const r = L.canvas.getBoundingClientRect();
      L.view.target.set(st.x, 0.6, st.z); L.follow = false; L.updateCamera();
      const s = L.project(new (L.tmpV.constructor)(st.x, 0.5, st.z)); return { x: r.left + s.x, y: r.top + s.y };
    });
    await win.mouse.click(seatPt.x, seatPt.y);
    const sat = await bao.waitFor('move', (d) => d.id === 'u:sales-ngoc' && d.seat === 'b3');
    check(sat.seat === 'b3', 'bấm ghế → đi tới ngồi, đồng nghiệp thấy mình đang ngồi ghế đó');
    await win.waitForFunction(() => window.__lobby.self().sitting, null, { timeout: 120000 });
    check(true, 'nhân vật của mình đã ngồi xuống');
    await win.waitForTimeout(800); await shot('01b-seated');

    // nhắn phòng chung hai chiều
    await bao.post('messages', { room: 'all', text: 'Chào cả nhà, hôm nay ai rảnh test tính năng mới không? 🙋' });
    await win.waitForSelector('.lb-msg .lb-t >> text=ai rảnh test', { timeout: 10000 });
    check(await win.locator('.bubble3d').count() >= 1, 'tin nhắn hiện thành bong bóng trên đầu nhân vật');
    await win.fill('#lbInput', 'Em đây anh Bảo ơi!'); await win.press('#lbInput', 'Enter');
    const got = await bao.waitFor('message', (d) => d.text === 'Em đây anh Bảo ơi!');
    check(got.name === 'Ngọc' && got.room === 'all', 'đồng nghiệp nhận tin của mình đúng tên');
    await shot('02-chat');

    // tủ đồ
    await win.click('.lb-top .btn >> text=Tủ đồ');
    await win.waitForSelector('.wardrobe canvas', { timeout: 10000 });
    await win.click('.wd-chips button[data-v="curly"]');
    await win.click('.wd-chips button[data-v="cap"]');
    await win.click('.wd-sw button[data-v="#ff9ec4"]');
    await win.waitForTimeout(800); await shot('03-wardrobe');
    await win.click('.sheet footer .btn.primary');
    const dressed = await bao.waitFor('member', (d) => d.name === 'Ngọc' && d.avatar && d.avatar.hairStyle === 'curly');
    check(dressed.avatar.accessory === 'cap' && dressed.avatar.shirt === '#ff9ec4', 'đổi tóc + phụ kiện + màu áo, đồng nghiệp thấy ngay');
    // áo cà sa SIMI + đầu trọc
    await win.click('.lb-top .btn >> text=Tủ đồ');
    await win.waitForSelector('.wardrobe canvas', { timeout: 10000 });
    await win.click('.wd-chips button[data-v="bald"]');
    await win.click('.wd-chips button[data-v="kasaya"]');
    await win.waitForTimeout(900); await shot('03b-kasaya');
    await win.click('.sheet footer .btn.primary');
    const monk = await bao.waitFor('member', (d) => d.name === 'Ngọc' && d.avatar && d.avatar.outfit === 'kasaya');
    check(monk.avatar.hairStyle === 'bald', 'mặc áo cà sa SIMI + đầu trọc, đồng nghiệp thấy ngay');
    // bàn thờ Tổ nghề: 4 bồ đoàn quỳ cho người (không còn bot)
    const kneel = await win.evaluate(() => [...window.__lobby.seats.values()].filter((s) => s.kind === 'kneel').reduce((n, s) => ({ ...n, [s.theme || 'altar']: (n[s.theme || 'altar'] || 0) + 1 }), {}));
    check(kneel.altar === 15 && kneel.thantai === 6, 'bàn thờ Tổ nghề 15 bồ đoàn + góc Thần Tài 6 bồ đoàn quỳ');
    const stools = await win.evaluate(() => [...window.__lobby.seats.keys()].filter((id) => /^b\d+$/.test(id)).length);
    check(stools === 4, 'quầy bar thu gọn còn 4 ghế cao');
    await win.evaluate(() => window.__lobby.sitSelf('k2'));
    await win.waitForFunction(() => { const p = window.__lobby.self(); return p.sitting && p.seatKind === 'kneel'; }, null, { timeout: 60000 });
    await win.waitForTimeout(1200); await shot('03c-altar');
    check(true, 'bấm bồ đoàn → đi tới quỳ lạy trước bàn thờ');
    await win.evaluate(() => window.__lobby.sitSelf('tt2'));
    await win.waitForFunction(() => { const p = window.__lobby.self(); return p.sitting && p.seat === 'tt2' && p.seatTheme === 'thantai'; }, null, { timeout: 60000 });
    await win.keyboard.press('Escape'); await win.evaluate(() => { document.querySelectorAll('.npc-panel, .npc-pop').forEach((n) => n.remove()); window.__lobby.lookAt('thantai'); });
    await win.waitForTimeout(1800); await shot('03d-thantai');
    check(true, 'quỳ khấn ở góc Thần Tài cầu bán hàng chạy');
    await win.evaluate(() => window.__lobby.focusSelf());

    // di chuyển + biểu cảm của đồng nghiệp
    await bao.post('state', { pos: { x: 2.5, z: 2 }, emote: '🎉' });
    await win.waitForFunction(() => [...window.__lobby.people.values()].some((p) => !p.me && p.path.length > 0), null, { timeout: 5000 }).catch(() => {});
    await win.waitForSelector('.emote', { timeout: 5000 });
    check(true, 'thấy đồng nghiệp đi lại + biểu cảm');
    await win.click('.lb-emotes button >> nth=0');
    check((await bao.waitFor('emote', (d) => d.emote === '👋')).emote === '👋', 'đồng nghiệp thấy mình vẫy tay');

    // nhắn riêng
    await win.locator('.lb-person', { hasText: 'Bảo' }).click();
    await win.click('.lb-pop .igrid button >> nth=0');
    await win.fill('#lbInput', 'Anh gửi em file báo giá nhé'); await win.press('#lbInput', 'Enter');
    const dm = await bao.waitFor('message', (d) => d.room.startsWith('dm:'));
    check(dm.text === 'Anh gửi em file báo giá nhé', 'nhắn riêng tới đúng người');
    await bao.post('messages', { to: 'u:sales-ngoc', text: 'Ok em, 5 phút nữa nhé' });
    await win.waitForSelector('.lb-msg .lb-t >> text=5 phút nữa', { timeout: 10000 });
    check(await win.locator('.bubble3d', { hasText: '5 phút nữa' }).count() === 0, 'tin nhắn riêng không hiện công khai trên đầu nhân vật');
    await shot('04-dm');

    // lỡ mất sự kiện (mạng chập chờn) → danh sách online trên máy lệch → tự sửa nhờ roster của Gateway
    await win.evaluate(() => { const L = window.VPLobby._state; for (const m of L.members.values()) if (m.name === 'Bảo') m.online = false; });
    await win.waitForFunction(() => [...window.VPLobby._state.members.values()].some((m) => m.name === 'Bảo' && m.online), null, { timeout: 10000 });
    check(true, 'danh sách online bị lệch tự sửa lại (đối chiếu với Gateway)');

    // ẩn trạng thái
    await win.click('#lbHide');
    await bao.waitFor('leave', (d) => d.id === 'u:sales-ngoc');
    check(true, 'bật ẩn → đồng nghiệp thấy mình như đã rời Sảnh');
    await win.waitForSelector('#lbHiddenBar:not(.hidden)', { timeout: 5000 });
    check((await win.locator('#lbHiddenBar').innerText()).includes('Bạn đang ẩn'), 'đang ẩn → có thanh nhắc rõ + nút Hiện lại');
    await shot('05b-hidden');
    await win.locator('#lbHiddenBar button', { hasText: 'Hiện lại' }).click();
    await bao.waitFor('member', (d) => d.id === 'u:sales-ngoc' && d.online);
    await win.waitForSelector('#lbHiddenBar.hidden', { state: 'attached', timeout: 5000 });
    check(true, 'bấm "Hiện lại" → mọi người thấy lại, thanh nhắc biến mất');

    // ---- chỉ còn chat cả công ty + nhắn riêng ----
    check(!(await win.locator('#lbRooms').innerText()).includes('Team'), 'không còn tab chat Team, chỉ Cả công ty + nhắn riêng');

    // ---- màn chiếu YouTube: khung nhúng thay bằng trang giả (nói đúng giao thức postMessage của trình phát YouTube) ----
    await app.evaluate(({ protocol, net }) => {
      protocol.handle('https', (req) => {
        const u = new URL(req.url);
        if (u.hostname === 'i.ytimg.com') return new Response(Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==', 'base64'), { headers: { 'content-type': 'image/png' } });
        if (u.hostname !== 'www.youtube.com' || !u.pathname.startsWith('/embed/')) return net.fetch(req, { bypassCustomProtocolHandlers: true });
        const id = u.pathname.split('/')[2]; const start = u.searchParams.get('start');
        const html = `<!doctype html><body style="margin:0;background:#ff00aa;color:#fff;font:bold 90px sans-serif;display:grid;place-items:center;height:100vh">FAKE ${id} @${start}
<script>addEventListener('message',(e)=>{let d;try{d=JSON.parse(e.data)}catch{return}if(d.event==='listening'||d.event==='command'){window.__cmds=(window.__cmds||[]).concat(d.func||d.event);parent.postMessage(JSON.stringify({event:'infoDelivery',info:{duration:212,currentTime:${Number(start) || 0},playerState:1}}),'*')}})</script>`;
        return new Response(html, { headers: { 'content-type': 'text/html' } });
      });
    });
    await win.locator('#lbCineBtn').click();
    await win.waitForSelector('.lb-cine .lc-empty');
    check(true, 'mở bảng Màn chiếu, màn hình đang trống');
    await win.fill('#lbCineUrl', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ');
    await win.click('#lbCineAdd');
    await win.waitForSelector('.office3d-css iframe[src*="dQw4w9WgXcQ"]', { state: 'attached', timeout: 10000 });
    const src = await win.locator('.office3d-css iframe').getAttribute('src');
    check(/autoplay=1/.test(src) && /start=\d+/.test(src), 'thêm link → khung YouTube gắn lên màn chiếu, tự phát đúng giây');
    const showing = await bao.waitFor('cinema', (d) => d.current && d.current.videoId === 'dQw4w9WgXcQ');
    check(showing.current.byName === 'Ngọc', 'đồng nghiệp thấy video đang chiếu do mình chọn');
    await bao.waitFor('cinema', (d) => d.current && d.current.seconds === 212);
    check(true, 'app đọc độ dài video từ trình phát, báo về Gateway để tự chuyển bài');
    // chờ camera trượt xong tới trước màn chiếu
    await win.waitForFunction(() => { const L = window.__lobby; return L.panTo && Math.abs(L.view.az - L.goal.az) < 0.003 && Math.abs(L.view.zoom - L.goal.zoom) < 0.003 && Math.abs(L.view.target.x - L.panTo.x) < 0.02; }, null, { timeout: 15000 });
    await win.waitForTimeout(500);
    // video lộ ra đúng chỗ màn chiếu (canvas đục lỗ trong suốt): điểm ở nửa phải màn chiếu (bảng Màn chiếu che bên trái) phải là màu trang video
    const pt = await win.evaluate(() => { const L = window.__lobby; const c = L.world.cinema; const r = L.canvas.getBoundingClientRect(); const p = L.project(new (L.tmpV.constructor)(c.x + c.w * 0.3, c.y + c.h * 0.36, c.z)); return { x: Math.round(r.left + p.x), y: Math.round(r.top + p.y) }; });
    const px = await app.evaluate(async ({ BrowserWindow }, p) => { const img = await BrowserWindow.getAllWindows()[0].webContents.capturePage({ x: p.x, y: p.y, width: 1, height: 1 }); const b = img.toBitmap(); return [b[2], b[1], b[0]]; }, pt);
    check(px[0] > 200 && px[1] < 80 && px[2] > 120, `video hiện đúng trên màn chiếu 3D (màu ${px.join(',')})`);
    await shot('07-cinema');
    // xếp hàng theo lượt: Ngọc thêm video thứ 2, Bảo thêm 1 video → Bảo được chiếu trước
    await win.fill('#lbCineUrl', 'https://youtu.be/aaaaaaaaaaa'); await win.click('#lbCineAdd');
    await win.waitForSelector('.lb-cine .lc-row', { timeout: 10000 });
    await bao.post('cinema', { action: 'add', url: 'https://www.youtube.com/shorts/bbbbbbbbbbb' });
    await win.waitForFunction(() => document.querySelectorAll('.lb-cine .lc-row').length === 2, null, { timeout: 10000 });
    const rows = await win.locator('.lb-cine .lc-row .dim').allInnerTexts();
    check(rows[0] === 'Bảo' && rows[1] === 'Bạn chọn', 'hàng chờ theo lượt: người chưa có lượt được xếp trước');
    await shot('08-cinema-queue');
    await win.locator('.lb-cine .lc-now .btn', { hasText: 'Bỏ qua' }).click();
    await win.waitForSelector('.office3d-css iframe[src*="bbbbbbbbbbb"]', { state: 'attached', timeout: 10000 });
    check(true, 'bỏ qua video của mình → chiếu video kế tiếp');
    await win.click('.viewtabs button[data-v="chat"]');
    check(await win.locator('.office3d-css iframe').count() === 0, 'rời tab Sảnh → tắt video');
    await win.click('.viewtabs button[data-v="lobby"]');
    await win.waitForSelector('.office3d-css iframe[src*="bbbbbbbbbbb"]', { state: 'attached', timeout: 10000 });
    check(true, 'quay lại tab Sảnh → chiếu tiếp đúng video');
    await win.locator('.lb-cine .lc-h .lc-ic[aria-label="Đóng"]').click();

    // admin đăng bản app mới lên Gateway → Sảnh báo ngay → app tự tải sẵn, hiện thẻ "Cập nhật ngay" (không đợi 1 giờ)
    const { assetKey } = require('../src/updater');
    const kind = assetKey();
    const name = { 'linux-deb': 'VanPhongAI-9.9.9-linux-amd64.deb', 'linux-appimage': 'VanPhongAI-9.9.9-linux-x86_64.AppImage', 'win-setup': 'VanPhongAI-9.9.9-Setup.exe', 'win-portable': 'VanPhongAI-9.9.9-portable.exe' }[kind] || 'VanPhongAI-9.9.9-mac-arm64.zip';
    const body = crypto.randomBytes(200 * 1024);
    const relDir = path.join(gw.dir, 'releases');
    fs.mkdirSync(relDir, { recursive: true });
    fs.writeFileSync(path.join(relDir, name), body);
    check(await win.locator('#btnUpdate').count() === 0, 'chưa có bản mới thì không hiện nút cập nhật');
    const t0 = Date.now();
    fs.writeFileSync(path.join(relDir, 'latest.json'), JSON.stringify({ app: 'vanphong-ai', version: '9.9.9', notes: '- Sảnh online mới\n- Sửa lỗi nhỏ', files: { [kind]: { name, size: body.length, sha256: crypto.createHash('sha256').update(body).digest('hex') } } }));
    await win.waitForSelector('#updCard button:has-text("Cập nhật ngay")', { timeout: 20000 });
    check(Date.now() - t0 < 15000, `đăng bản mới → app biết ngay qua Sảnh và tải sẵn (${((Date.now() - t0) / 1000).toFixed(1)} giây)`);
    check(fs.readFileSync(path.join(userData, 'updates', name)).equals(body), 'file tải từ Gateway khớp mã kiểm tra');
    await shot('06-update');
    await win.locator('#updCard button', { hasText: 'Để sau' }).click();

    await win.click('#btnTheme'); await win.waitForTimeout(900); await shot('05-dark'); await win.click('#btnTheme');
  } finally {
    bao.close();
    for (const c of crowd) c.close();
    await finish(app, errors);
    gw.child.kill();
    for (const d of [gw.dir, codexHome]) try { fs.rmSync(d, { recursive: true, force: true }); } catch { /* bỏ */ }
  }
});
