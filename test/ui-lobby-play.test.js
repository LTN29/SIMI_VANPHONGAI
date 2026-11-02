// Sảnh 0.9.14 với Gateway thật: mèo chung (vuốt ve, cho ăn, chơi, gọi), tương tác giữa nhân vật (đập tay, mời nhảy cần
// đồng ý), nhảy liên tục cùng nhịp, gợi ý nhảy khi đứng trên sàn, chế độ nhẹ. App là "Ngọc", đồng nghiệp nối thẳng Gateway.
const fs = require('fs');
const path = require('path');
const { launch, check, finish, run } = require('./helpers');
const { makeCodexHome } = require('./fixtures/mock-gateway');
const { GW, startGatewayServer, colleague } = require('./fixtures/lobby-gateway');

const CID = '11111111-2222-3333-4444-555555555555';
const CROWD = ['An', 'Chi', 'Dũng', 'Giang', 'Hà', 'Huy'];
const STYLES = ['groove', 'disco', 'robot', 'shuffle', 'spin', 'hands'];
// máy test vẽ 3D bằng phần mềm (~2 khung hình/giây) → cho nhân vật / mèo tới gần đích ngay, khỏi chờ đi bộ vài phút
const arriveCat = (win) => win.evaluate(() => { const c = window.__lobby.cat; if (c.path.length) { const d = c.path[c.path.length - 1]; c.pos = { x: d.x + 0.02, z: d.z }; c.path = [d]; } });
const arriveSelf = (win) => win.evaluate(() => { const p = window.__lobby.self(); if (p.path.length) { const d = p.path[p.path.length - 1]; p.pos = { x: d.x + 0.02, z: d.z }; p.path = [d]; } });

run(async () => {
  if (!fs.existsSync(path.join(GW, 'src', 'lobby-cat.mjs'))) { console.log(`BỎ QUA: Gateway ở ${GW} chưa có mèo chung (đặt GATEWAY_DIR)`); return; }
  const users = { 'sales-ngoc': { displayName: 'Ngọc', teamId: 'SALES', key: 'k-ngoc' }, 'it-bao': { displayName: 'Bảo', teamId: 'IT', key: 'k-bao' } };
  CROWD.forEach((n, i) => { users[`c-${i}`] = { displayName: n, teamId: 'MARKETING', key: `k-c${i}` }; });
  const gw = await startGatewayServer({ users, env: { LOBBY_MSG_PER_10S: '100' } });
  const bao = colleague(gw.url, 'k-bao'); await bao.waitFor('hello');
  await bao.post('profile', { avatar: { hairStyle: 'spiky', shirt: '#e1262d', accessory: 'headphones' } });
  await bao.post('state', { pos: { x: -1.2, z: 3.6 } });
  // 6 người đang nhảy trên sàn, mỗi người một điệu
  const crowd = [];
  for (let i = 0; i < CROWD.length; i++) {
    const c = colleague(gw.url, `k-c${i}`); crowd.push(c); await c.waitFor('hello');
    await c.post('state', { pos: { x: -4 + (i % 3) * 1.6, z: 3 + Math.floor(i / 3) * 1.8 } });
    await c.post('state', { dance: STYLES[i] });
  }

  const { app, win, errors, shot } = await launch({ prefix: 'lobbyplay', env: { CODEX_HOME: makeCodexHome(gw.url), LTN_TEAM_API_KEY: 'k-ngoc', LTN_CLIENT_ID: CID } });
  try {
    await win.waitForSelector('.welcome', { timeout: 20000 });
    await win.click('.sheet footer .linkbtn');
    await win.click('.viewtabs button[data-v="lobby"]');
    await win.waitForSelector('#lbConn.online', { timeout: 30000 });
    await win.waitForFunction(() => window.__lobby && window.__lobby.people.size === 8, null, { timeout: 15000 });
    await win.waitForFunction(() => [...window.__lobby.people.values()].filter((p) => p.dance).length === 6, null, { timeout: 10000 });
    check(true, 'người vào sau thấy ngay 6 đồng nghiệp đang nhảy (mỗi người một điệu)');
    const beats = await win.evaluate(() => { const L = window.__lobby; return { b: L.beat(), now: (Date.now() + L.skew) / 1000 * 2 }; });
    check(Math.abs(beats.b - beats.now) < 0.01, 'nhịp nhảy tính theo giờ Gateway → mọi máy nhún cùng lúc');
    await win.evaluate(() => { const L = window.__lobby; L.follow = false; L.panTo = new (L.tmpV.constructor)(-2, 0.6, 4.2); L.goal.zoom = 1.1; });
    await win.waitForTimeout(1500); await shot('01-dance-floor');

    const cost = await win.evaluate(() => { const L = window.__lobby; const r0 = L.renderer.render.bind(L.renderer); let js = 0, n = 0; L.renderer.render = () => {}; for (let i = 0; i < 60; i++) { const t0 = performance.now(); L.frame(); js += performance.now() - t0; n++; } L.renderer.render = r0; return js / n; });
    check(cost < 4, `phần tính toán mỗi khung hình (8 người, 6 người đang nhảy, mèo) chỉ ${cost.toFixed(2)} ms – không tính phần vẽ`);
    // ---- mèo chung ----
    await bao.post('cat', { action: 'feed' });
    await win.waitForFunction(() => window.__lobby.cat.cmd && window.__lobby.cat.cmd.act === 'feed', null, { timeout: 8000 });
    check(await win.evaluate(() => window.__lobby.cat.bowl.visible), 'Bảo cho mèo ăn → máy mình thấy bát thức ăn');
    await arriveCat(win);
    await win.waitForFunction(() => window.__lobby.cat.mode === 'eat', null, { timeout: 30000 });
    check(true, 'mèo chạy tới bát và ăn (cùng một con mèo trên mọi máy)');
    await win.evaluate(() => { const L = window.__lobby; const c = L.cat.pos; L.follow = false; L.panTo = new (L.tmpV.constructor)(c.x, 0.6, c.z); L.goal.zoom = 1.6; });
    await win.waitForTimeout(1500); await shot('02-cat-eat');
    // camera đứng yên đúng chỗ mèo rồi mới bấm (máy test vẽ chậm, camera trượt chưa kịp)
    const catPt = await win.evaluate(() => { const L = window.__lobby; const c = L.cat.pos; L.follow = false; L.panTo = new (L.tmpV.constructor)(c.x, 0.6, c.z); L.view.target.set(c.x, 0.6, c.z); L.view.zoom = L.goal.zoom = 1.6; L.view.az = L.goal.az; L.view.el = L.goal.el; L.updateCamera(); const r = L.canvas.getBoundingClientRect(); const v = L.cat.root.position.clone(); v.y = 0.2; const s = L.project(v); return { x: r.left + s.x, y: r.top + s.y }; });
    await win.mouse.click(catPt.x, catPt.y);
    await win.waitForSelector('.lb-pop.cat', { timeout: 5000 });
    const catMenu = await win.textContent('.lb-pop.cat');
    check(catMenu.includes('Mít') && /Đang chơi với Bảo|Mọi người đều thấy/.test(catMenu), 'bấm vào mèo → menu Vuốt ve / Cho ăn / Chơi len / Gọi Mít theo');
    await win.click('.lb-pop.cat button >> text=Chơi len');
    const played = await bao.waitFor('cat', (d) => d.act === 'play');
    check(played.byName === 'Ngọc', 'chơi len với mèo → cả Sảnh thấy');
    await win.waitForFunction(() => window.__lobby.cat.cmd.act === 'play', null, { timeout: 8000 }); await arriveCat(win);
    await win.waitForFunction(() => window.__lobby.cat.mode === 'play', null, { timeout: 30000 });
    check(await win.evaluate(() => window.__lobby.cat.yarn.visible), 'mèo vồ cuộn len');

    // ---- tương tác ----
    await win.click('.lb-chip >> text=Bảo');
    await win.waitForSelector('.lb-pop.interact .igrid button >> text=Đập tay');
    check(await win.locator('.lb-pop.interact .igrid button').count() === 9, 'bấm vào đồng nghiệp: nhắn riêng, vẫy, đi tới + đập tay, cụng ly, mời cà phê, ôm, mời nhảy, mời chơi bida');
    await win.click('.lb-pop.interact .igrid button >> text=Đập tay');
    const hf = await bao.waitFor('interact', (d) => d.kind === 'highfive');
    check(hf.a === 'u:sales-ngoc' && hf.b === 'u:it-bao', 'đập tay → Bảo thấy ngay, không cần đồng ý');
    await win.waitForFunction(() => window.__lobby.self().meet, null, { timeout: 8000 }); await arriveSelf(win);
    await win.waitForFunction(() => window.__lobby.self().person.action === 'highfive', null, { timeout: 30000 });
    check(true, 'nhân vật mình đi tới trước mặt Bảo rồi giơ tay đập tay');
    await win.evaluate(() => { const L = window.__lobby; L.follow = true; L.goal.zoom = 1.7; });
    await win.waitForTimeout(500); await shot('03-highfive');

    // Bảo mời nhảy → thẻ mời → đồng ý
    await bao.post('interact', { to: 'u:sales-ngoc', kind: 'dance', style: 'disco' });
    await win.waitForSelector('#lbInvite:not(.hidden)', { timeout: 8000 });
    check((await win.textContent('#lbInvite')).includes('Bảo mời bạn nhảy cùng'), 'lời mời nhảy hiện thành thẻ có nút Đồng ý / Để sau');
    await shot('04-invite');
    await win.click('#lbInvite .btn.primary');
    const go = await bao.waitFor('interact', (d) => d.state === 'go' && d.kind === 'dance');
    check(go.style === 'disco', 'đồng ý → cả Sảnh thấy hai người nhảy đôi');
    await win.waitForFunction(() => window.__lobby.self().meet || window.__lobby.self().dance, null, { timeout: 8000 }); await arriveSelf(win);
    await win.waitForFunction(() => window.__lobby.self().dance === 'disco' && window.__lobby.people.get('u:it-bao').dance === 'disco', null, { timeout: 30000 });
    check(true, 'hai nhân vật quay mặt vào nhau cùng nhảy disco');
    await win.waitForTimeout(800); await shot('05-dance-duo');

    // ---- tự chọn điệu nhảy ----
    await win.click('#lbDanceBtn');
    await win.waitForSelector('#lbDancePick:not(.hidden) .dz >> text=Robot');
    await win.click('#lbDancePick .dz >> text=Robot');
    check((await bao.waitFor('dance', (d) => d.id === 'u:sales-ngoc' && d.style === 'robot')).style === 'robot', 'chọn điệu Robot → mọi người thấy mình đổi điệu');
    await win.evaluate(() => window.__lobby.walkSelf(6, -2, true));
    await bao.waitFor('dance', (d) => d.id === 'u:sales-ngoc' && d.style === null);
    check(await win.evaluate(() => !window.__lobby.self().dance), 'đi chỗ khác là tự thôi nhảy');

    // ---- đứng trên sàn nhảy → gợi ý chọn điệu ----
    await win.evaluate(() => window.__lobby.walkSelf(-2, 6.4, true)); await arriveSelf(win);
    await win.waitForSelector('#lbDancePick:not(.hidden)', { timeout: 30000 });
    check((await win.textContent('#lbDancePick')).includes('sàn nhảy'), 'bước lên sàn nhảy → hiện gợi ý chọn điệu');
    await shot('06-floor');

    // ---- chế độ nhẹ ----
    await win.evaluate(() => window.VPLobby.setLight(true));
    const light = await win.evaluate(() => ({ dpr: window.__lobby.renderer.getPixelRatio(), shadows: window.__lobby.renderer.shadowMap.enabled }));
    check(light.dpr === 1 && !light.shadows, 'chế độ nhẹ: độ nét 1x, tắt bóng đổ, 30 khung hình/giây');
    const fps = await win.evaluate(() => new Promise((r) => { let n = 0; const L = window.__lobby; const f0 = L.frame.bind(L); L.frame = () => { n++; f0(); }; setTimeout(() => { L.frame = f0; r(n); }, 2000); }));
    check(fps <= 66, `chế độ nhẹ giới hạn số khung hình (${fps} khung / 2 giây)`);
    await win.evaluate(() => window.VPLobby.setLight(false));

    // ---- trạng thái tự đặt + không làm phiền ----
    await win.click('#lbStatusBtn');
    await win.waitForSelector('.lb-stpop');
    await win.click('.lb-stpop .stp-it >> text=Đang tập trung');
    await win.click('.lb-stpop .stp-dur .chip >> text=1 giờ');
    const st = await bao.waitFor('member', (d) => d.id === 'u:sales-ngoc' && d.status && /^🎯 Đang tập trung tới \d\d:\d\d/.test(d.status.text));
    check(!!st, 'đặt "🎯 Đang tập trung" 1 giờ → đồng nghiệp thấy ngay trên bảng tên');
    check((await win.textContent('#lbStatusBtn')).includes('Đang tập trung') && await win.evaluate(() => document.querySelector('#lbStatusBtn').classList.contains('dnd')), 'nút trạng thái hiện "Đang tập trung" (không làm phiền)');
    await win.waitForFunction(() => window.__lobby.self().plate.textContent.includes('Đang tập trung'), null, { timeout: 10000 });
    // Bảo đang họp → mình mở nhắn riêng thì thấy nhắc nhẹ
    await bao.post('state', { status: { activity: 'away', text: '📞 Đang họp tới 16:00' } });
    await win.waitForFunction(() => { const m = window.VPLobby._state.members.get('u:it-bao'); return m && m.status && m.status.text.startsWith('📞'); }, null, { timeout: 10000 });
    await win.evaluate(() => window.VPLobby.openDm('u:it-bao'));
    await win.waitForSelector('#lbPeerSt:not(.hidden)', { timeout: 10000 });
    check((await win.textContent('#lbPeerSt')).includes('Bảo sẽ xem sau'), 'nhắn riêng cho người đang họp → nhắc "tin vẫn gửi, người ấy xem sau"');
    await shot('07-status');
    await win.click('#lbStatusBtn');
    await win.click('.lb-stpop .stp-clear');
    const n0 = bao.events.length;
    await win.waitForFunction(() => document.querySelector('#lbStatusBtn').textContent.includes('Sẵn sàng'), null, { timeout: 10000 });
    await bao.waitFor('member', (d) => d.id === 'u:sales-ngoc' && d.status && !d.status.text.startsWith('🎯') && bao.events.indexOf(bao.events.find((e) => e.data === d)) >= n0);
    check(true, 'về "Sẵn sàng" → trạng thái tự động như cũ, đồng nghiệp thấy ngay');
  } finally {
    bao.close(); crowd.forEach((c) => c.close()); gw.child.kill();
    await finish(app, errors);
  }
});
