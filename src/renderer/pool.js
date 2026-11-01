/* Bida 8 bi trong Sảnh: mời một đồng nghiệp → người kia đồng ý → cả hai đi tới bàn ở khu Game và bàn bida hiện lên (nhìn từ trên).
   Kéo ngược từ bi trắng để chỉnh lực, thả tay để đánh. Ai đang ở Sảnh cũng xem được (bấm vào bàn đang có người chơi).
   Vật lý + luật ở pool-engine.js; Gateway chỉ giữ lượt đi. Bảng chỉ vẽ lại khi có thay đổi (đỡ tốn máy). */
(function () {
  let U, H; // H: móc nối từ lobby.js (me, members, scene, toast, online)
  const E = () => window.VPPool;
  const RAIL = 46;                                   // viền gỗ quanh mặt bàn (đơn vị bàn)
  const COLORS = { 1: '#f5c518', 2: '#1f5fd1', 3: '#d8262e', 4: '#5b2c8f', 5: '#f07a1a', 6: '#1d8a4a', 7: '#8a1f2b', 8: '#141414' };
  const colorOf = (n) => COLORS[n > 8 ? n - 8 : n] || '#ffffff';
  const REASON = { win: '', timeout: 'đối thủ hết giờ', resign: 'đối thủ bỏ cuộc', left: 'đối thủ rời Sảnh' };
  const P = {
    games: new Map(), view: null, minimized: false,
    state: null, seq: 0,                 // trạng thái bàn đang hiện
    anim: null, queue: [],               // khung hình cú đánh đang chạy, các cú đánh chờ chạy
    aim: { dx: 1, dy: 0 }, pull: null, hover: null, busy: false, sent: -1,
    outgoing: null, incoming: null, msg: '', over: null,
  };
  const $ = (s, r = document) => r.querySelector(s);
  const myId = () => (H.me() ? H.me().id : '');
  const nameOf = (g, id) => (g && g.names && g.names[id]) || (H.members().get(id) || {}).name || 'Đồng nghiệp';
  const mine = () => [...P.games.values()].find((g) => g.players.includes(myId())) || null;
  const viewing = () => (P.view && (P.games.get(P.view) || (P.overGame && P.overGame.id === P.view ? P.overGame : null))) || null;

  // ================= khung popup =================
  function build() {
    const { el } = U;
    const modal = el('div', { class: 'pool-modal hidden', id: 'poolModal', role: 'dialog', 'aria-label': 'Bida' },
      el('div', { class: 'pool-card' },
        el('header', { class: 'pool-head', id: 'poolHead' }),
        el('div', { class: 'pool-msg', id: 'poolMsg', role: 'status' }),
        el('div', { class: 'pool-wrap', id: 'poolWrap' }, el('canvas', { id: 'poolCanvas', tabindex: '0' }), el('div', { class: 'pool-over hidden', id: 'poolOver' })),
        el('footer', { class: 'pool-foot', id: 'poolFoot' })));
    document.body.append(modal);
    $('.lb-stage').append(el('button', { class: 'pool-chip hidden', id: 'poolChip', onclick: () => open(P.view || (mine() && mine().id)) }),
      el('div', { class: 'lb-invite pool-inv hidden', id: 'poolInvite', role: 'alertdialog' }));
    modal.addEventListener('mousedown', (e) => { if (e.target === modal) minimize(); });
    const cv = $('#poolCanvas');
    cv.addEventListener('pointermove', onMove);
    cv.addEventListener('pointerdown', onDown);
    cv.addEventListener('pointerup', onUp);
    cv.addEventListener('pointercancel', () => { P.pull = null; dirty(); });
    cv.addEventListener('contextmenu', (e) => { e.preventDefault(); P.pull = null; dirty(); });
    cv.addEventListener('keydown', onKey);
    new ResizeObserver(() => { P.bg = null; dirty(); }).observe($('#poolWrap'));
  }

  // ================= sự kiện từ Gateway =================
  function onHello(list) {
    P.games = new Map((list || []).map((g) => [g.id, g]));
    if (P.view && !P.games.has(P.view)) close();
    syncScene(); renderChip();
  }

  function onEvent(d) {
    const me = myId();
    if (d.type === 'invite') { showIncoming(d); return; }
    if (d.type === 'declined') { if (P.outgoing && P.outgoing.id === d.id) P.outgoing = null; H.toast(`🎱 ${d.byName} để dịp khác nhé 😅`); return; }
    if (d.type === 'expired') { if (P.outgoing && P.outgoing.id === d.id) P.outgoing = null; H.toast(`⌛ ${d.toName} chưa trả lời lời mời chơi bida`); return; }
    if (d.type === 'cancelled') { if (P.incoming && P.incoming.id === d.id) hideIncoming(); return; }
    if (d.type === 'start') {
      const g = d.game; P.games.set(g.id, g);
      if (g.players.includes(me)) {
        P.outgoing = null; hideIncoming();
        const scene = H.scene(); if (scene) scene.goToTable(g.table, g.players.indexOf(me));
        U.sfx && U.sfx('chime');
        open(g.id);
      } else H.toast(`🎱 ${g.names[g.players[0]]} và ${g.names[g.players[1]]} vừa vào bàn bida – bấm vào bàn để xem`);
      syncScene(); renderChip();
      return;
    }
    if (d.type === 'shot') {
      const g = P.games.get(d.id); if (!g) return;
      const prev = g.state || E().rack();
      Object.assign(g, { seq: d.seq, state: d.state, turn: d.turn, turnAt: d.turnAt || Date.now() });
      const scene = H.scene();
      if (scene) scene.poolShot(g.table, d.by, prev, d.shot, d.state);
      if (P.view !== g.id) { renderChip(); return; }
      if (d.by === me && d.seq === P.sent) { P.msg = d.msg || ''; return; } // cú của mình: đang chạy sẵn rồi
      P.queue.push({ prev, shot: d.shot, state: d.state, msg: d.msg, foul: d.foul, seq: d.seq });
      if (!P.anim) nextAnim();
      return;
    }
    if (d.type === 'over') {
      const g = P.games.get(d.id) || d.game;
      P.games.delete(d.id);
      const scene = H.scene(); if (scene) scene.poolEnd(g.table);
      if (g.players.includes(me) || P.view === d.id) {
        P.over = { ...d, players: g.players, names: g.names, opponent: g.players.find((p) => p !== me) };
        P.overGame = { ...g, status: 'over' };
        if (P.view === d.id) { if (P.anim || P.queue.length) P.overPending = true; else renderOver(); }
        if (g.players.includes(me)) { U.sfx && U.sfx(d.winner === me ? 'win' : 'pop'); if (P.minimized || P.view !== d.id) H.toast(d.winner === me ? '🏆 Bạn thắng ván bida!' : `🎱 ${d.winnerName} thắng ván bida`); }
      } else if (d.winner) H.toast(`🏆 ${d.winnerName} thắng ván bida`);
      syncScene(); renderChip();
    }
  }

  // ================= mời / nhận lời =================
  async function invite(to) {
    if (!H.online()) { U.toast('Chưa vào được Sảnh', true); return; }
    if (mine()) { open(mine().id); return; }
    try {
      const r = await window.vp.lobby.game({ action: 'invite', to });
      const m = H.members().get(to);
      P.outgoing = { id: r.id, to, exp: r.exp };
      H.toast(`💌 Đã mời ${m ? m.name : ''} chơi bida – chờ trả lời…`);
      U.sfx && U.sfx('pop');
    } catch (e) { U.toast(U.cleanErr(e), true); }
  }

  function showIncoming(d) {
    const { el } = U;
    P.incoming = d;
    const box = $('#poolInvite');
    clearTimeout(P.incT);
    const answer = (accept) => {
      hideIncoming();
      window.vp.lobby.game({ action: 'answer', id: d.id, accept }).catch((e) => U.toast(U.cleanErr(e), true));
    };
    box.replaceChildren(el('span', { class: 'ic pool-ball8', 'aria-hidden': 'true' }),
      el('div', { class: 'grow' }, el('b', { text: `${d.fromName} mời bạn chơi bida` }), el('small', { text: 'Bida 8 bi · 2 người · ở khu Game' })),
      el('button', { class: 'btn mini', onclick: () => answer(false) }, 'Để sau'),
      el('button', { class: 'btn mini primary', onclick: () => answer(true) }, 'Vào bàn'),
      el('i', { class: 'bar', style: `animation-duration:${Math.max(3, (d.exp - Date.now()) / 1000)}s` }));
    box.classList.remove('hidden');
    U.sfx && U.sfx('chime');
    P.incT = setTimeout(hideIncoming, Math.max(3000, d.exp - Date.now()));
  }
  function hideIncoming() { P.incoming = null; clearTimeout(P.incT); const b = $('#poolInvite'); if (b) b.classList.add('hidden'); }

  // bấm vào bàn bida trong cảnh 3D: bàn có người → xem; bàn trống → chọn người để mời
  function tableMenu(table, x, y) {
    const { el } = U;
    document.querySelectorAll('.lb-pop').forEach((n) => n.remove());
    const g = [...P.games.values()].find((q) => q.table === table);
    if (g) { open(g.id); return; }
    const people = [...H.members().values()].filter((m) => m.online && m.id !== myId());
    const busy = new Set([...P.games.values()].flatMap((q) => q.players));
    const pop = el('div', { class: 'lb-pop interact pool-pick' },
      el('div', { class: 'ihead' }, el('span', { class: 'pool-ball8 big', 'aria-hidden': 'true' }), el('div', {}, el('b', { text: `Bàn bida số ${table + 1}` }), el('small', { text: 'Bida 8 bi – mời một người chơi cùng' }))),
      mine() ? el('p', { class: 'dim small', text: 'Bạn đang chơi dở một ván.' })
        : !H.features().has('games') ? el('p', { class: 'dim small', text: 'Gateway chưa hỗ trợ trò chơi – báo admin cập nhật Gateway.' })
          : people.length ? el('div', { class: 'pool-people' }, people.map((m) => el('button', { disabled: busy.has(m.id), onclick: () => { pop.remove(); invite(m.id); } },
            U.avatar(window.avatarToLook ? window.avatarToLook(m) : m, 28), el('span', { class: 'grow' }, el('b', { text: m.name }), el('small', { text: busy.has(m.id) ? 'Đang chơi ván khác' : `Team ${m.teamName || ''}` })), el('span', { class: 'go', text: 'Mời' }))))
            : el('p', { class: 'dim small', text: 'Chưa có ai khác online để chơi cùng.' }),
      el('div', { class: 'pool-top', id: 'poolTop' }));
    document.body.append(pop);
    // bảng xếp hạng (tải sau, không chặn bảng chọn người)
    if (H.features().has('games')) window.vp.lobby.games().then((r) => { const box = pop.querySelector('#poolTop'); if (box && r && r.top) box.replaceChildren(...topList(r.top, r.me)); }).catch(() => {});
    pop.style.left = Math.max(10, Math.min(window.innerWidth - pop.offsetWidth - 10, x + 12)) + 'px';
    pop.style.top = Math.max(66, Math.min(window.innerHeight - pop.offsetHeight - 10, y - pop.offsetHeight / 2)) + 'px';
    const off = (e) => { if (!pop.contains(e.target)) { pop.remove(); document.removeEventListener('mousedown', off, true); } };
    setTimeout(() => document.addEventListener('mousedown', off, true), 0);
  }

  // bảng xếp hạng bida: top 5 + thành tích của mình
  function topList(top, me) {
    const { el } = U;
    if (!top.length) return [el('small', { class: 'dim', text: '🏆 Chưa có ván nào – thắng ván đầu tiên để lên bảng!' })];
    return [el('b', { text: '🏆 Bảng xếp hạng' }),
      el('ol', {}, top.slice(0, 5).map((s, i) => el('li', { class: s.id === myId() ? 'me' : '' }, el('span', { class: 'rk', text: ['🥇', '🥈', '🥉'][i] || String(i + 1) }), el('span', { class: 'nm', text: s.name }), el('span', { class: 'wl', text: `${s.w} thắng · ${s.l} thua` })))),
      me && (me.w || me.l) ? el('small', { class: 'dim', text: `Bạn: ${me.w} thắng · ${me.l} thua` }) : ''];
  }

  // ================= mở / đóng bàn =================
  function open(id) {
    const g = id && P.games.get(id); if (!g) return;
    if (P.view !== id) {
      P.view = id; P.state = clone(g.state || E().rack()); P.seq = g.seq; P.anim = null; P.queue = []; P.over = null; P.overPending = false;
      P.msg = g.seq ? '' : `${nameOf(g, g.turn)} giao bóng`;
      P.aim = { dx: 1, dy: 0 }; P.pull = null; initHand();
    }
    P.minimized = false;
    $('#poolModal').classList.remove('hidden');
    $('#poolOver').classList.add('hidden');
    const scene = H.scene(); if (scene) scene.paused = true; // bàn bida che Sảnh → tạm dừng vẽ 3D cho nhẹ máy
    clearInterval(P.tick); P.tick = setInterval(renderHead, 1000);
    renderHead(); renderFoot(); renderChip(); dirty();
    setTimeout(() => $('#poolCanvas').focus(), 30);
  }
  function minimize() {
    if (!P.view) return;
    P.minimized = true;
    $('#poolModal').classList.add('hidden');
    clearInterval(P.tick);
    const scene = H.scene(); if (scene && H.shown()) scene.paused = false;
    renderChip();
  }
  function close() {
    P.view = null; P.minimized = false; P.anim = null; P.queue = []; P.over = null; P.overGame = null;
    $('#poolModal').classList.add('hidden');
    clearInterval(P.tick);
    const scene = H.scene(); if (scene && H.shown()) scene.paused = false;
    renderChip();
  }
  async function resign() {
    const g = viewing(); if (!g) return;
    if (!P.confirmResign) { P.confirmResign = true; renderHead(); setTimeout(() => { P.confirmResign = false; renderHead(); }, 3000); return; }
    P.confirmResign = false;
    try { await window.vp.lobby.game({ action: 'resign', id: g.id }); } catch (e) { U.toast(U.cleanErr(e), true); }
  }

  // nút nổi góc Sảnh khi đang chơi mà thu nhỏ bàn
  function renderChip() {
    const chip = $('#poolChip'); if (!chip) return;
    const g = (P.view && P.games.get(P.view)) || mine();
    const show = !!g && (P.minimized || !P.view);
    chip.classList.toggle('hidden', !show);
    if (!show) return;
    const myTurn = g.turn === myId();
    chip.classList.toggle('turn', myTurn);
    chip.replaceChildren(U.el('span', { class: 'pool-ball8', 'aria-hidden': 'true' }),
      U.el('span', {}, U.el('b', { text: g.players.includes(myId()) ? `Bida với ${nameOf(g, g.players.find((p) => p !== myId()))}` : `Đang xem: ${nameOf(g, g.players[0])} – ${nameOf(g, g.players[1])}` }),
        U.el('small', { text: myTurn ? 'Tới lượt bạn · bấm để mở bàn' : `Lượt của ${nameOf(g, g.turn)}` })));
  }

  // ================= đầu / chân popup =================
  function groupBalls(g, id) {
    const { el } = U;
    const grp = P.state && P.state.groups && P.state.groups[id];
    if (!grp) return el('span', { class: 'pool-grp dim', text: P.state && P.state.broke ? 'Bàn còn mở' : 'Chưa chia bi' });
    const nums = grp === 'solid' ? [1, 2, 3, 4, 5, 6, 7] : [9, 10, 11, 12, 13, 14, 15];
    return el('span', { class: 'pool-grp' }, nums.map((n) => el('i', { class: 'pb' + (n > 8 ? ' st' : '') + (P.state.balls[n][2] ? ' down' : ''), style: `--c:${colorOf(n)}`, title: `Bi ${n}` })),
      el('i', { class: 'pb eight' + (P.state.balls[8][2] ? ' down' : ''), title: 'Bi 8' }));
  }
  function renderHead() {
    const { el } = U;
    const g = viewing(); if (!g) return;
    const me = myId();
    const left = Math.max(0, Math.ceil(((g.turnAt || Date.now()) + (g.turnMs || 90000) - Date.now()) / 1000));
    const player = (id) => el('div', { class: 'pool-pl' + (g.turn === id && !P.over ? ' on' : '') + (id === me ? ' me' : '') },
      U.avatar(window.avatarToLook ? window.avatarToLook(H.members().get(id) || { id, name: nameOf(g, id) }) : { id }, 34),
      el('div', { class: 'pn' }, el('b', { text: nameOf(g, id) + (id === me ? ' (bạn)' : '') }), groupBalls(g, id)),
      g.turn === id && !P.over ? el('span', { class: 'pool-timer' + (left <= 15 ? ' warn' : ''), title: 'Thời gian còn lại của lượt', text: `${left}s` }) : '');
    const playing = g.players.includes(me);
    $('#poolHead').replaceChildren(
      el('div', { class: 'pool-title' }, el('span', { class: 'pool-ball8', 'aria-hidden': 'true' }), el('div', {}, el('b', { text: 'Bida 8 bi' }), el('small', { text: `Bàn số ${g.table + 1}${playing ? '' : ' · đang xem'}` }))),
      player(g.players[0]), el('span', { class: 'pool-vs', text: 'vs' }), player(g.players[1]),
      el('span', { class: 'grow' }),
      playing && !P.over ? el('button', { class: 'btn small' + (P.confirmResign ? ' danger' : ''), onclick: resign }, P.confirmResign ? 'Bấm lần nữa để bỏ cuộc' : 'Bỏ cuộc') : '',
      el('button', { class: 'lc-ic', title: playing && !P.over ? 'Thu nhỏ (ván vẫn tiếp tục)' : 'Đóng', 'aria-label': playing && !P.over ? 'Thu nhỏ' : 'Đóng', onclick: playing && !P.over ? minimize : close }, playing && !P.over ? '–' : '✕'));
    renderMsg();
  }
  function renderMsg() {
    const g = viewing(); if (!g) return;
    const me = myId();
    let hint = '';
    if (P.anim) hint = '';
    else if (g.turn === me && !P.over) hint = (P.state.ballInHand ? `Được đặt bi trắng: kéo bi trắng để dời ${P.state.ballInHand === 1 ? '(sau vạch đầu bàn)' : '(cả bàn)'} · ` : 'Tới lượt bạn: ') + 'rê chuột để ngắm, nhấn giữ rồi kéo ngược để lấy lực, thả tay để đánh';
    else if (!P.over) hint = `Đang chờ ${nameOf(g, g.turn)} đánh…`;
    const box = $('#poolMsg');
    box.replaceChildren(P.msg ? U.el('b', { text: P.msg }) : '', P.msg && hint ? U.el('span', { class: 'sep', text: '·' }) : '', hint ? U.el('span', { text: hint }) : '');
    box.classList.toggle('turn', g.turn === me && !P.anim && !P.over);
  }
  function renderFoot() {
    const { el } = U;
    $('#poolFoot').replaceChildren(
      el('div', { class: 'pool-power' }, el('small', { text: 'Lực' }), el('div', { class: 'track' }, el('i', { id: 'poolPow' }))),
      el('small', { class: 'dim', text: 'Phím ← → chỉnh hướng · Esc huỷ kéo · Bi 1–7 trơn, 9–15 sọc · Vào hết bi của mình rồi mới đánh bi 8' }));
  }
  function renderOver() {
    const { el } = U;
    const o = P.over; if (!o) return;
    const me = myId();
    const won = o.winner === me;
    const box = $('#poolOver');
    const playing = o.players.includes(me);
    box.replaceChildren(el('div', { class: 'pool-res' },
      el('div', { class: 'big', text: won ? '🏆' : playing ? '🎱' : '🏁' }),
      el('b', { text: won ? 'Bạn thắng!' : o.winnerName ? `${o.winnerName} thắng` : 'Ván đã kết thúc' }),
      el('small', { text: REASON[o.reason] || P.msg || '' }),
      playing && o.stats && o.stats[me] ? el('em', { class: 'pool-wl', text: `Thành tích của bạn: ${o.stats[me].w} thắng · ${o.stats[me].l} thua` }) : '',
      el('div', { class: 'row' },
        playing && o.opponent ? el('button', { class: 'btn primary', onclick: () => { const to = o.opponent; close(); invite(to); } }, 'Chơi ván nữa') : '',
        el('button', { class: 'btn', onclick: close }, 'Đóng'))));
    box.classList.remove('hidden');
    renderHead(); dirty();
  }

  // ================= chạy cú đánh =================
  function nextAnim() {
    const job = P.queue.shift();
    if (!job) { P.anim = null; if (P.overPending) { P.overPending = false; renderOver(); } renderHead(); dirty(); return; }
    const sim = E().simulate(job.prev, job.shot);
    P.anim = { frames: sim.frames, t0: performance.now(), end: job.state, msg: job.msg, sunk: 0, hits: 0 };
    P.msg = '';
    renderMsg(); dirty();
  }

  async function shoot(power) {
    const g = viewing(); if (!g || g.turn !== myId() || P.anim || P.busy) return;
    const len = Math.hypot(P.aim.dx, P.aim.dy) || 1;
    const shot = { dx: P.aim.dx / len, dy: P.aim.dy / len, power: Math.max(0.03, Math.min(1, power)) };
    if (P.state.ballInHand && P.hand) shot.cue = { x: P.hand.x, y: P.hand.y };
    const prev = clone(P.state);
    const sim = E().simulate(prev, shot);
    const j = E().judge(prev, sim, { players: g.players, names: g.names, shooter: myId() });
    P.busy = true; P.sent = g.seq + 1;
    P.anim = { frames: sim.frames, t0: performance.now(), end: j.state, msg: j.msg, sunk: 0, hits: 0 };
    P.msg = ''; P.hand = null; renderMsg(); dirty();
    const scene = H.scene(); if (scene) scene.poolCue(myId());
    try {
      await window.vp.lobby.game({ action: 'shot', id: g.id, seq: g.seq, shot, result: { state: j.state, turn: j.turn, winner: j.winner, foul: j.foul, msg: j.msg } });
    } catch (e) {
      U.toast(U.cleanErr(e), true);
      // Gateway từ chối (mạng chập, bàn đổi): tải lại ván
      P.anim = null; P.sent = -1;
      try { const r = await window.vp.lobby.games(); onHello(r.games); const g2 = P.games.get(g.id); if (g2) { P.state = clone(g2.state || E().rack()); P.seq = g2.seq; initHand(); } } catch { /* bỏ qua */ }
      dirty(); renderHead();
    }
    P.busy = false;
  }

  // ================= nhập liệu =================
  function toTable(e) {
    const cv = $('#poolCanvas'); const r = cv.getBoundingClientRect();
    const s = r.width / (E().W + RAIL * 2);
    return { x: (e.clientX - r.left) / s - RAIL, y: (e.clientY - r.top) / s - RAIL, s };
  }
  const myTurn = () => { const g = viewing(); return !!g && g.turn === myId() && !P.anim && !P.busy && !P.over; };
  const cuePos = () => (P.state.ballInHand && P.hand ? P.hand : { x: P.state.balls[0][0], y: P.state.balls[0][1] });
  function onMove(e) {
    if (!myTurn()) return;
    const p = toTable(e);
    if (P.drag) {
      if (E().placeOk(P.state.balls, p.x, p.y, P.state.ballInHand)) P.hand = { x: p.x, y: p.y };
      dirty(); return;
    }
    if (P.pull) {
      const back = (P.pull.x0 - p.x) * P.aim.dx + (P.pull.y0 - p.y) * P.aim.dy; // kéo ngược hướng đánh
      P.pull.power = Math.max(0, Math.min(1, back / 260));
    } else {
      const c = cuePos(); const dx = p.x - c.x, dy = p.y - c.y; const l = Math.hypot(dx, dy);
      if (l > 4) P.aim = { dx: dx / l, dy: dy / l };
    }
    dirty();
  }
  function onDown(e) {
    if (!myTurn() || e.button !== 0) return;
    const p = toTable(e);
    $('#poolCanvas').setPointerCapture(e.pointerId);
    // được đặt bi trắng: nhấn vào bi trắng rồi kéo để dời chỗ
    if (P.state.ballInHand && P.hand && Math.hypot(p.x - P.hand.x, p.y - P.hand.y) < E().R * 1.8) { P.drag = true; $('#poolWrap').classList.add('grab'); dirty(); return; }
    P.pull = { x0: p.x, y0: p.y, power: 0 };
    dirty();
  }
  function onUp() {
    if (P.drag) { P.drag = false; $('#poolWrap').classList.remove('grab'); U.sfx && U.sfx('click'); dirty(); return; }
    if (!P.pull) return;
    const pw = P.pull.power; P.pull = null;
    if (pw >= 0.03) shoot(pw); else dirty();
  }
  function onKey(e) {
    if (e.key === 'Escape') { if (P.pull) { P.pull = null; dirty(); } else if (viewing() && viewing().players.includes(myId())) minimize(); else close(); e.preventDefault(); return; }
    if (!myTurn()) return;
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
      const a = (e.key === 'ArrowLeft' ? -1 : 1) * (e.shiftKey ? 0.02 : 0.004);
      const c = Math.cos(a), s = Math.sin(a);
      P.aim = { dx: P.aim.dx * c - P.aim.dy * s, dy: P.aim.dx * s + P.aim.dy * c };
      dirty(); e.preventDefault();
    }
  }

  // ================= vẽ =================
  function dirty() { if (!P.raf && P.view && !P.minimized) P.raf = requestAnimationFrame(draw); }

  function background(w, h, s) {
    const c = document.createElement('canvas'); c.width = w; c.height = h;
    const g = c.getContext('2d');
    const { W: TW, H: TH, POCKETS, HEAD_X } = E();
    g.scale(s, s);
    const T = (x) => x + RAIL;
    // viền gỗ
    const wood = g.createLinearGradient(0, 0, 0, TH + RAIL * 2);
    wood.addColorStop(0, '#7a4a2b'); wood.addColorStop(0.5, '#5b331d'); wood.addColorStop(1, '#43240f');
    g.fillStyle = wood; roundRect(g, 0, 0, TW + RAIL * 2, TH + RAIL * 2, 30); g.fill();
    g.strokeStyle = 'rgba(255,220,170,.18)'; g.lineWidth = 2; roundRect(g, 5, 5, TW + RAIL * 2 - 10, TH + RAIL * 2 - 10, 26); g.stroke();
    // băng (cao su xanh đậm)
    g.fillStyle = '#0d5c3e'; g.fillRect(T(-14), T(-14), TW + 28, TH + 28);
    // mặt nỉ
    const felt = g.createRadialGradient(T(TW / 2), T(TH / 2), 40, T(TW / 2), T(TH / 2), TW * 0.62);
    felt.addColorStop(0, '#1fa36c'); felt.addColorStop(1, '#127a50');
    g.fillStyle = felt; g.fillRect(T(0), T(0), TW, TH);
    // vạch đầu bàn + điểm xếp bi
    g.strokeStyle = 'rgba(255,255,255,.16)'; g.lineWidth = 2; g.setLineDash([6, 8]);
    g.beginPath(); g.moveTo(T(HEAD_X), T(6)); g.lineTo(T(HEAD_X), T(TH - 6)); g.stroke(); g.setLineDash([]);
    g.fillStyle = 'rgba(255,255,255,.28)'; g.beginPath(); g.arc(T(E().FOOT_X), T(TH / 2), 3.5, 0, 7); g.fill();
    // logo mờ giữa bàn
    g.fillStyle = 'rgba(255,255,255,.07)'; g.font = '900 54px Nunito, "Segoe UI", sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle';
    g.fillText('SIMI', T(TW / 2), T(TH / 2));
    // lỗ
    for (const k of POCKETS) {
      g.fillStyle = '#2b1a0e'; g.beginPath(); g.arc(T(k.x), T(k.y), k.r + 7, 0, 7); g.fill();
      g.fillStyle = '#060606'; g.beginPath(); g.arc(T(k.x), T(k.y), k.r - 1, 0, 7); g.fill();
    }
    // chấm kim cương trên viền
    g.fillStyle = '#f3e3c3';
    for (let i = 1; i < 8; i++) { if (i === 4) continue; for (const y of [-RAIL / 2, TH + RAIL / 2]) { g.beginPath(); g.arc(T(i * TW / 8), T(y), 3.2, 0, 7); g.fill(); } }
    for (let i = 1; i < 4; i++) for (const x of [-RAIL / 2, TW + RAIL / 2]) { g.beginPath(); g.arc(T(x), T(i * TH / 4), 3.2, 0, 7); g.fill(); }
    return c;
  }
  function roundRect(g, x, y, w, h, r) { g.beginPath(); g.moveTo(x + r, y); g.arcTo(x + w, y, x + w, y + h, r); g.arcTo(x + w, y + h, x, y + h, r); g.arcTo(x, y + h, x, y, r); g.arcTo(x, y, x + w, y, r); g.closePath(); }

  function ball(g, n, x, y, R, alpha = 1) {
    g.globalAlpha = alpha;
    // bóng đổ
    g.fillStyle = 'rgba(0,0,0,.28)'; g.beginPath(); g.ellipse(x + 3, y + 4, R, R * 0.9, 0, 0, 7); g.fill();
    const base = n === 0 ? '#fbfaf5' : n > 8 ? '#fbfaf5' : colorOf(n);
    g.fillStyle = base; g.beginPath(); g.arc(x, y, R, 0, 7); g.fill();
    if (n > 8) { g.save(); g.beginPath(); g.arc(x, y, R, 0, 7); g.clip(); g.fillStyle = colorOf(n); g.fillRect(x - R, y - R * 0.55, R * 2, R * 1.1); g.restore(); }
    if (n > 0) {
      g.fillStyle = '#ffffff'; g.beginPath(); g.arc(x, y, R * 0.48, 0, 7); g.fill();
      g.fillStyle = '#1b1b1b'; g.font = `800 ${Math.round(R * 0.62)}px Nunito, "Segoe UI", sans-serif`; g.textAlign = 'center'; g.textBaseline = 'middle';
      g.fillText(String(n), x, y + R * 0.04);
    }
    // ánh sáng
    const hl = g.createRadialGradient(x - R * 0.4, y - R * 0.45, 0, x - R * 0.4, y - R * 0.45, R * 1.1);
    hl.addColorStop(0, 'rgba(255,255,255,.55)'); hl.addColorStop(0.35, 'rgba(255,255,255,.08)'); hl.addColorStop(1, 'rgba(0,0,0,.22)');
    g.fillStyle = hl; g.beginPath(); g.arc(x, y, R, 0, 7); g.fill();
    g.globalAlpha = 1;
  }

  function draw() {
    P.raf = 0;
    if (!P.view || P.minimized) return;
    const cv = $('#poolCanvas'); const wrap = $('#poolWrap');
    const { W: TW, H: TH, R } = E();
    const cssW = wrap.clientWidth; const cssH = Math.round(cssW * (TH + RAIL * 2) / (TW + RAIL * 2));
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    if (cv.width !== Math.round(cssW * dpr) || cv.height !== Math.round(cssH * dpr)) { cv.width = Math.round(cssW * dpr); cv.height = Math.round(cssH * dpr); cv.style.height = cssH + 'px'; P.bg = null; }
    const s = cv.width / (TW + RAIL * 2);
    if (!P.bg) P.bg = background(cv.width, cv.height, s);
    const g = cv.getContext('2d');
    g.setTransform(1, 0, 0, 1, 0, 0);
    g.drawImage(P.bg, 0, 0);
    g.setTransform(s, 0, 0, s, RAIL * s, RAIL * s);
    // vị trí bi: đang chạy cú đánh → lấy khung hình theo thời gian
    let pos = null;
    if (P.anim) {
      const a = P.anim; const fi = Math.floor((performance.now() - a.t0) / (1000 / 60));
      if (fi >= a.frames.length - 1) {
        P.state = clone(a.end); P.msg = a.msg || ''; P.anim = null; initHand();
        renderHead();
        if (P.queue.length) nextAnim(); else if (P.overPending) { P.overPending = false; renderOver(); }
      } else {
        const f = a.frames[fi];
        // tiếng bi rơi lỗ
        let sunk = 0; for (let i = 0; i < 16; i++) if (f[i * 3 + 2]) sunk++;
        if (sunk > a.sunk) { a.sunk = sunk; U.sfx && U.sfx('pocket'); }
        pos = f;
      }
    }
    for (let i = 0; i < 16; i++) {
      let x, y, down;
      if (pos) { x = pos[i * 3]; y = pos[i * 3 + 1]; down = pos[i * 3 + 2]; }
      else { [x, y, down] = P.state.balls[i]; }
      if (i === 0 && !pos && P.state.ballInHand && P.hand) { x = P.hand.x; y = P.hand.y; down = 0; }
      if (down) continue;
      ball(g, i, x, y, R);
    }
    // được đặt bi trắng: vùng được đặt + vòng quanh bi trắng
    if (!P.anim && myTurn() && P.state.ballInHand && P.hand) {
      if (P.state.ballInHand === 1) { g.fillStyle = 'rgba(255,255,255,.06)'; g.fillRect(0, 0, E().HEAD_X, TH); }
      g.strokeStyle = P.drag ? '#ffe27a' : 'rgba(255,226,122,.7)'; g.lineWidth = 2.5; g.setLineDash([5, 5]);
      g.beginPath(); g.arc(P.hand.x, P.hand.y, R + 7, 0, 7); g.stroke(); g.setLineDash([]);
    }
    // đường ngắm + gậy
    if (!P.anim && !P.drag && myTurn()) drawAim(g);
    const pw = $('#poolPow'); if (pw) pw.style.width = `${Math.round((P.pull ? P.pull.power : 0) * 100)}%`;
    if (P.anim) dirty();
  }

  function drawAim(g) {
    const { R } = E();
    const c = cuePos(); const { dx, dy } = P.aim;
    const a = E().aim(P.state.balls.map((b, i) => (i === 0 ? [c.x, c.y, 0] : b)), c, dx, dy);
    g.save();
    g.strokeStyle = 'rgba(255,255,255,.75)'; g.lineWidth = 2; g.setLineDash([8, 8]);
    const end = a.hit >= 0 ? a.ghost : a.end;
    g.beginPath(); g.moveTo(c.x + dx * R, c.y + dy * R); g.lineTo(end.x, end.y); g.stroke(); g.setLineDash([]);
    if (a.hit >= 0) {
      g.strokeStyle = 'rgba(255,255,255,.85)'; g.beginPath(); g.arc(a.ghost.x, a.ghost.y, R, 0, 7); g.stroke();
      const b = P.state.balls[a.hit];
      g.strokeStyle = 'rgba(255,240,170,.9)'; g.lineWidth = 3;
      g.beginPath(); g.moveTo(b[0], b[1]); g.lineTo(b[0] + a.obj.x * 140 * a.obj.k, b[1] + a.obj.y * 140 * a.obj.k); g.stroke();
      if (a.cue.k > 0.05) { g.strokeStyle = 'rgba(255,255,255,.4)'; g.lineWidth = 2; g.beginPath(); g.moveTo(a.ghost.x, a.ghost.y); g.lineTo(a.ghost.x + a.cue.x * 90 * a.cue.k, a.ghost.y + a.cue.y * 90 * a.cue.k); g.stroke(); }
    }
    // gậy: lùi lại theo lực kéo
    const back = R + 8 + (P.pull ? P.pull.power * 110 : 0);
    const x1 = c.x - dx * back, y1 = c.y - dy * back, x2 = c.x - dx * (back + 420), y2 = c.y - dy * (back + 420);
    const grad = g.createLinearGradient(x1, y1, x2, y2);
    grad.addColorStop(0, '#f6f1e6'); grad.addColorStop(0.03, '#3a7bd5'); grad.addColorStop(0.05, '#e9c98f'); grad.addColorStop(0.7, '#b07a43'); grad.addColorStop(1, '#2b1a0e');
    g.strokeStyle = 'rgba(0,0,0,.25)'; g.lineWidth = 9; g.lineCap = 'round';
    g.beginPath(); g.moveTo(x1 + 4, y1 + 5); g.lineTo(x2 + 4, y2 + 5); g.stroke();
    g.strokeStyle = grad; g.lineWidth = 8;
    g.beginPath(); g.moveTo(x1, y1); g.lineTo(x2, y2); g.stroke();
    g.restore();
  }

  const clone = (s) => JSON.parse(JSON.stringify(s));
  // được đặt bi trắng: để sẵn bi ở chỗ hiện tại (hoặc chỗ trống gần nhất) – kéo bi để dời, bấm chỗ khác để ngắm
  function initHand() {
    P.drag = false;
    if (!P.state || !P.state.ballInHand) { P.hand = null; return; }
    const b = P.state.balls[0]; const mode = P.state.ballInHand;
    if (E().placeOk(P.state.balls, b[0], b[1], mode)) { P.hand = { x: b[0], y: b[1] }; return; }
    const s = E().spotNear(P.state.balls, Math.min(b[0], mode === 1 ? E().HEAD_X - 20 : b[0]), b[1], 0);
    P.hand = { x: s[0], y: s[1] };
  }

  // nhân vật 3D: ai đang chơi bàn nào (để đứng đúng chỗ, bảng tên hiện "🎱 Đang chơi bida")
  function syncScene() { const scene = H.scene(); if (scene) scene.setGames([...P.games.values()]); }

  function init(api, hooks) { U = api; H = hooks; build(); }

  window.VPPoolUI = { init, onHello, onEvent, invite, tableMenu, open, minimize, close, syncScene, _state: P };
})();
