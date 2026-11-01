// Bida 2 người trong Sảnh với Gateway thật: bàn ở khu Game, mời → đồng ý → popup bàn bida, đi tới đầu bàn, ngắm + kéo lực + đánh,
// đối thủ đánh (máy mình chạy lại đúng cú đó), thu nhỏ / mở lại, đối thủ bỏ cuộc → thắng. App là "Ngọc", đối thủ "Bảo" nối thẳng Gateway.
const fs = require('fs');
const path = require('path');
const { launch, check, finish, run } = require('./helpers');
const { makeCodexHome } = require('./fixtures/mock-gateway');
const { GW, startGatewayServer, colleague } = require('./fixtures/lobby-gateway');
const E = require('../src/renderer/pool-engine.js');

const CID = '11111111-2222-3333-4444-555555555555';
const ME = 'u:sales-ngoc', BAO = 'u:it-bao';
// Gateway làm tròn vị trí bi tới 0,01
const r2 = (bs) => JSON.stringify(bs.map((b) => [Math.round(b[0] * 100) / 100, Math.round(b[1] * 100) / 100, b[2] ? 1 : 0]));

run(async () => {
  if (!fs.existsSync(path.join(GW, 'src', 'lobby-games.mjs'))) { console.log(`BỎ QUA: Gateway ở ${GW} chưa có trò chơi (đặt GATEWAY_DIR)`); return; }
  const gw = await startGatewayServer({ users: { 'sales-ngoc': { displayName: 'Ngọc', teamId: 'SALES', key: 'k-ngoc' }, 'it-bao': { displayName: 'Bảo', teamId: 'IT', key: 'k-bao' }, 'it-an': { displayName: 'An', teamId: 'IT', key: 'k-an' } }, env: { LOBBY_MSG_PER_10S: '100' } });
  const bao = colleague(gw.url, 'k-bao'); await bao.waitFor('hello');
  const an = colleague(gw.url, 'k-an'); await an.waitFor('hello');
  const { app, win, errors, shot } = await launch({ prefix: 'lobbypool', env: { CODEX_HOME: makeCodexHome(gw.url), LTN_TEAM_API_KEY: 'k-ngoc', LTN_CLIENT_ID: CID } });
  try {
    await win.waitForSelector('.welcome', { timeout: 20000 });
    await win.click('.sheet footer .linkbtn');
    await win.click('.viewtabs button[data-v="lobby"]');
    await win.waitForSelector('#lbConn.online', { timeout: 30000 });
    await win.evaluate(() => window.VPNpc && window.VPNpc.close());
    check(await win.evaluate(() => window.__lobby.pool.length === 2), 'khu Game có 2 bàn bida');

    // bấm vào bàn trống trong cảnh 3D → bảng chọn người để mời
    const pt = await win.evaluate(() => { const L = window.__lobby; const T = L.pool[0]; L.follow = false; L.view.target.set(T.x, 0.6, T.z); L.panTo = L.view.target.clone(); L.view.zoom = L.goal.zoom = 1.3; L.view.az = L.goal.az; L.view.el = L.goal.el; L.updateCamera(); const r = L.canvas.getBoundingClientRect(); const s = L.project(new (L.tmpV.constructor)(T.x, 0.86, T.z)); return { x: r.left + s.x, y: r.top + s.y }; });
    await win.mouse.click(pt.x, pt.y);
    await win.waitForSelector('.pool-pick', { timeout: 20000 });
    check((await win.textContent('.pool-pick')).includes('Bảo') && (await win.textContent('.pool-pick')).includes('An'), 'bấm bàn bida trống → chọn người online để mời');
    await shot('01-pick');
    await win.mouse.click(10, 300);

    // Bảo mời mình
    const inv = await bao.post('game', { action: 'invite', to: ME });
    check(inv.status === 200, 'đồng nghiệp gửi lời mời chơi bida');
    await win.waitForSelector('#poolInvite:not(.hidden)', { timeout: 20000 });
    check((await win.textContent('#poolInvite')).includes('Bảo mời bạn chơi bida'), 'lời mời hiện trong Sảnh');
    await shot('02-invite');
    await win.click('#poolInvite .btn.primary');
    await win.waitForSelector('#poolModal:not(.hidden)', { timeout: 20000 });
    const start = await bao.waitFor('game', (d) => d.type === 'start');
    check(start.game.table === 0 && start.game.players.includes(ME), 'đồng ý → vào bàn số 1');
    check(await win.evaluate(() => window.__lobby.paused === true), 'bàn bida mở → tạm dừng vẽ Sảnh 3D cho nhẹ máy');
    const plate = await win.evaluate(() => window.__lobby.self().plate.textContent);
    check(plate.includes('Đang chơi bida'), 'bảng tên của mình: "🎱 Đang chơi bida"');
    const walking = await win.evaluate(() => { const p = window.__lobby.self(); const d = p.path[p.path.length - 1]; const s = window.__lobby.pool[0].spots; return !!d && s.some((q) => Math.hypot(q.x - d.x, q.z - d.z) < 0.4); });
    check(walking, 'nhân vật của mình tự đi tới đầu bàn');

    let state = E.rack(); let seq = 0;
    const names = { [ME]: 'Ngọc', [BAO]: 'Bảo' };
    // tới lượt Bảo trước thì Bảo giao bóng
    if (start.game.turn === BAO) {
      const shotB = { dx: 1 / Math.hypot(1, 0.0021), dy: 0.0021 / Math.hypot(1, 0.0021), power: 0.95 };
      const sim = E.simulate(state, shotB); const j = E.judge(state, sim, { players: start.game.players, names, shooter: BAO });
      const r = await bao.post('game', { action: 'shot', id: start.game.id, seq, shot: shotB, result: { state: j.state, turn: j.turn, winner: j.winner, foul: j.foul, msg: j.msg } });
      check(r.status === 200, 'Bảo giao bóng');
      await win.waitForFunction(() => window.VPPoolUI._state.anim, null, { timeout: 20000 });
      await win.waitForFunction(() => !window.VPPoolUI._state.anim, null, { timeout: 30000 });
      const same = r2(await win.evaluate(() => window.VPPoolUI._state.state.balls)) === r2(j.state.balls);
      check(same, 'máy mình chạy lại cú của Bảo và khớp đúng vị trí bi');
      state = j.state; seq = 1;
      // nếu Bảo vào bi thì Bảo đánh tiếp: cho Bảo đánh nhẹ tới khi hết lượt
      let turn = j.turn;
      while (turn === BAO) {
        const s2 = { dx: -1, dy: 0, power: 0.05 };
        const sim2 = E.simulate(state, s2); const j2 = E.judge(state, sim2, { players: start.game.players, names, shooter: BAO });
        await bao.post('game', { action: 'shot', id: start.game.id, seq, shot: s2, result: { state: j2.state, turn: j2.turn, winner: j2.winner, foul: j2.foul, msg: j2.msg } });
        state = j2.state; seq++; turn = j2.turn;
      }
    }
    await win.waitForFunction(() => { const P = window.VPPoolUI._state; return !P.anim && !P.queue.length && document.querySelector('#poolMsg.turn'); }, null, { timeout: 30000 });
    check(true, 'tới lượt mình: dòng hướng dẫn ngắm / kéo lực');

    // ngắm vào bi gần nhất rồi kéo ngược để lấy lực
    const aimAt = await win.evaluate(() => {
      const P = window.VPPoolUI._state; const E2 = window.VPPool; const c = P.hand || { x: P.state.balls[0][0], y: P.state.balls[0][1] };
      let best = null; for (let i = 1; i < 16; i++) { const b = P.state.balls[i]; if (b[2] || i === 8) continue; const d = Math.hypot(b[0] - c.x, b[1] - c.y); if (!best || d < best.d) best = { i, d, x: b[0], y: b[1] }; }
      const cv = document.querySelector('#poolCanvas').getBoundingClientRect(); const s = cv.width / (E2.W + 92);
      const toPx = (x, y) => ({ x: cv.left + (x + 46) * s, y: cv.top + (y + 46) * s });
      return { target: toPx(best.x, best.y), back: toPx(best.x - (best.x - c.x) / best.d * 240, best.y - (best.y - c.y) / best.d * 240) };
    });
    await win.mouse.move(aimAt.target.x, aimAt.target.y);
    await win.mouse.down();
    await win.mouse.move((aimAt.target.x + aimAt.back.x) / 2, (aimAt.target.y + aimAt.back.y) / 2, { steps: 4 });
    await win.mouse.move(aimAt.back.x, aimAt.back.y, { steps: 4 });
    const pw = await win.evaluate(() => window.VPPoolUI._state.pull && window.VPPoolUI._state.pull.power);
    check(pw > 0.3, `kéo ngược → thanh lực ${Math.round(pw * 100)}%`);
    await shot('03-aim');
    await win.mouse.up();
    const myShot = await bao.waitFor('game', (d) => d.type === 'shot' && d.by === ME, 10000);
    check(myShot.seq === seq + 1 && myShot.state.balls.length === 16, 'cú đánh của mình gửi lên Gateway, đối thủ nhận được');
    const replay = E.judge(state, E.simulate(state, myShot.shot), { players: start.game.players, names, shooter: ME });
    check(r2(replay.state.balls) === r2(myShot.state.balls), 'máy đối thủ chạy lại cú đánh ra đúng vị trí bi');
    await win.waitForTimeout(400); await shot('04-rolling');
    await win.waitForFunction(() => !window.VPPoolUI._state.anim, null, { timeout: 30000 });

    // thu nhỏ → nút nổi trong Sảnh; bấm để mở lại
    await win.click('#poolHead .lc-ic');
    await win.waitForSelector('#poolChip:not(.hidden)');
    check(await win.evaluate(() => window.__lobby.paused === false), 'thu nhỏ bàn → Sảnh vẽ lại bình thường');
    await win.evaluate(() => { const L = window.__lobby; const p = L.self(); if (p.path.length) { const d = p.path[p.path.length - 1]; p.pos = { x: d.x, z: d.z }; p.path = []; } const T = L.pool[0]; L.follow = false; L.panTo = new (L.tmpV.constructor)(T.x, 0.6, T.z); L.goal.zoom = 1.4; });
    await win.waitForTimeout(2500);
    check(await win.evaluate(() => window.__lobby.self().person.holdCue === true), 'đứng ở đầu bàn: nhân vật cầm cơ, quay vào bàn');
    await shot('05-table3d');
    await win.click('#poolChip');
    await win.waitForSelector('#poolModal:not(.hidden)');

    // An (người ngoài) xem được ván đang chơi
    const games = await (await an.get('games')).json();
    check(games.games.length === 1 && games.games[0].seq >= 1, 'người khác thấy bàn đang có ván');

    // Bảo bỏ cuộc → mình thắng
    await bao.post('game', { action: 'resign', id: start.game.id });
    await win.waitForSelector('#poolOver:not(.hidden)', { timeout: 20000 });
    check((await win.textContent('#poolOver')).includes('Bạn thắng'), 'đối thủ bỏ cuộc → "Bạn thắng!"');
    check((await win.textContent('#poolOver')).includes('Thành tích của bạn'), 'màn kết quả hiện thành tích thắng / thua');
    await shot('06-win');
    await win.click('#poolOver .btn:not(.primary)');
    await win.waitForFunction(() => document.querySelector('#poolModal').classList.contains('hidden'));
    check(await win.evaluate(() => !window.__lobby.self().game && !window.__lobby.self().plate.textContent.includes('bida')), 'xong ván: bảng tên trở lại bình thường');
  } finally {
    bao.close(); an.close(); gw.child.kill();
    await finish(app, errors);
  }
});
