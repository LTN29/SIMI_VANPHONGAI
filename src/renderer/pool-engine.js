/* global module */
/* Bida 8 bi – phần vật lý + luật, không đụng tới giao diện (chạy được cả trong Node để kiểm thử).
   Mọi phép tính chỉ dùng + - * / và căn bậc hai (kết quả giống hệt nhau trên Windows / macOS / Ubuntu):
   người đánh tính ra kết quả rồi gửi Gateway; máy khác chạy lại đúng cú đánh đó để xem rồi khớp vào kết quả. */
(function (root) {
  const W = 1000, H = 500, R = 13;          // mặt bàn (trong băng) 2:1, bán kính bi
  const HEAD_X = 250, FOOT_X = 750;          // vạch đầu bàn (chỗ đặt bi cái khi giao bóng) và điểm xếp bi
  const MAXV = 3200;                         // tốc độ bi cái khi đánh hết lực (đơn vị bàn / giây)
  const STEP = 1 / 480, FRAME_EVERY = 8;     // bước mô phỏng; ghi 1 khung hình mỗi 8 bước (60 khung/giây)
  const ROLL = 110, DRAG = 0.42;              // ma sát lăn
  const CUSHION = 0.78, BALL_E = 0.96;       // độ nảy băng / va chạm bi
  const POCKETS = [
    { x: -6, y: -6, r: 30 }, { x: W / 2, y: -11, r: 26 }, { x: W + 6, y: -6, r: 30 },
    { x: -6, y: H + 6, r: 30 }, { x: W / 2, y: H + 11, r: 26 }, { x: W + 6, y: H + 6, r: 30 },
  ];
  const isSolid = (n) => n >= 1 && n <= 7;
  const isStripe = (n) => n >= 9 && n <= 15;
  const groupOf = (n) => (isSolid(n) ? 'solid' : isStripe(n) ? 'stripe' : null);
  const inGroup = (n, g) => (g === 'solid' ? isSolid(n) : g === 'stripe' ? isStripe(n) : false);
  const GROUP_NAME = { solid: 'bi trơn (1–7)', stripe: 'bi sọc (9–15)' };

  // xếp bi tam giác (bi 8 ở giữa hàng 3, hai góc hàng cuối một trơn một sọc)
  const ORDER = [1, 9, 2, 10, 8, 3, 11, 4, 12, 5, 6, 13, 7, 14, 15];
  function rack() {
    const balls = Array.from({ length: 16 }, () => [0, 0, 0]);
    balls[0] = [HEAD_X, H / 2, 0];
    let k = 0;
    for (let row = 0; row < 5; row++) for (let j = 0; j <= row; j++) {
      const n = ORDER[k++];
      balls[n] = [FOOT_X + row * (2 * R * 0.8661 + 0.6), H / 2 + (j - row / 2) * (2 * R + 0.6), 0];
    }
    return { balls, groups: {}, ballInHand: 1, broke: false };
  }

  const free = (balls, x, y, skip) => balls.every((b, i) => i === skip || b[2] || (b[0] - x) * (b[0] - x) + (b[1] - y) * (b[1] - y) >= 4 * R * R + 1);
  // chỗ đặt bi cái hợp lệ: mode 1 = sau vạch đầu bàn, 2 = cả bàn
  function placeOk(balls, x, y, mode) {
    if (x < R || x > W - R || y < R || y > H - R) return false;
    if (mode === 1 && x > HEAD_X) return false;
    return free(balls, x, y, 0);
  }
  // tìm chỗ trống gần (x, y) nhất trên một đường ngang (đặt lại bi 8 / bi cái)
  function spotNear(balls, x, y, skip) {
    for (let d = 0; d < W; d += 2) for (const s of [1, -1]) {
      const xx = x + s * d;
      if (xx >= R && xx <= W - R && free(balls, xx, y, skip)) return [xx, y];
    }
    return [x, y];
  }

  // chạy một cú đánh tới khi mọi bi dừng: trả về các khung hình để vẽ lại, vị trí cuối, bi đầu tiên bi cái chạm, bi rơi lỗ (theo thứ tự)
  function simulate(state, shot) {
    const b = state.balls.map((q) => ({ x: q[0], y: q[1], vx: 0, vy: 0, down: !!q[2] }));
    if (shot.cue) { b[0].x = shot.cue.x; b[0].y = shot.cue.y; b[0].down = false; }
    const v0 = MAXV * shot.power;
    b[0].vx = shot.dx * v0; b[0].vy = shot.dy * v0;
    const frames = [snap(b)];
    const ev = { firstHit: null, pocketed: [], cushions: 0 };
    let moving = true, steps = 0;
    while (moving && steps < 20 * 480) {
      steps++;
      moving = false;
      for (let i = 0; i < 16; i++) {
        const p = b[i]; if (p.down) continue;
        const sp2 = p.vx * p.vx + p.vy * p.vy;
        if (sp2 === 0) continue;
        const sp = Math.sqrt(sp2);
        const nsp = sp - (ROLL + DRAG * sp) * STEP;
        if (nsp <= 2) { p.vx = 0; p.vy = 0; continue; }
        p.vx = p.vx / sp * nsp; p.vy = p.vy / sp * nsp;
        p.x += p.vx * STEP; p.y += p.vy * STEP;
        moving = true;
        // lỗ
        for (const k of POCKETS) {
          const dx = p.x - k.x, dy = p.y - k.y;
          if (dx * dx + dy * dy < k.r * k.r) { p.down = true; p.vx = 0; p.vy = 0; ev.pocketed.push(i); break; }
        }
        if (p.down) continue;
        // băng (miệng lỗ thì không có băng)
        const mouthX = p.x < 34 || p.x > W - 34 || (p.x > W / 2 - 26 && p.x < W / 2 + 26);
        const mouthY = p.y < 34 || p.y > H - 34;
        if (!mouthX) {
          if (p.y < R) { p.y = R + (R - p.y); p.vy = -p.vy * CUSHION; p.vx *= 0.97; ev.cushions++; }
          else if (p.y > H - R) { p.y = (H - R) - (p.y - (H - R)); p.vy = -p.vy * CUSHION; p.vx *= 0.97; ev.cushions++; }
        }
        if (!mouthY) {
          if (p.x < R) { p.x = R + (R - p.x); p.vx = -p.vx * CUSHION; p.vy *= 0.97; ev.cushions++; }
          else if (p.x > W - R) { p.x = (W - R) - (p.x - (W - R)); p.vx = -p.vx * CUSHION; p.vy *= 0.97; ev.cushions++; }
        }
        // lọt hẳn ra ngoài mép ở miệng lỗ → coi như rơi lỗ
        if (p.x < -R || p.x > W + R || p.y < -R || p.y > H + R) { p.down = true; p.vx = 0; p.vy = 0; ev.pocketed.push(i); }
      }
      // va chạm bi – bi (đàn hồi, khối lượng bằng nhau)
      for (let i = 0; i < 16; i++) {
        const p = b[i]; if (p.down) continue;
        for (let j = i + 1; j < 16; j++) {
          const q = b[j]; if (q.down) continue;
          const dx = q.x - p.x, dy = q.y - p.y;
          const d2 = dx * dx + dy * dy;
          if (d2 >= 4 * R * R || d2 === 0) continue;
          const d = Math.sqrt(d2), nx = dx / d, ny = dy / d;
          const rel = (p.vx - q.vx) * nx + (p.vy - q.vy) * ny;
          // đẩy tách hai bi cho khỏi chồng lên nhau
          const push = (2 * R - d) / 2;
          p.x -= nx * push; p.y -= ny * push; q.x += nx * push; q.y += ny * push;
          if (rel <= 0) continue;
          const imp = rel * (1 + BALL_E) / 2;
          p.vx -= imp * nx; p.vy -= imp * ny; q.vx += imp * nx; q.vy += imp * ny;
          if (ev.firstHit === null && (i === 0 || j === 0)) ev.firstHit = i === 0 ? j : i;
          moving = true;
        }
      }
      if (steps % FRAME_EVERY === 0) frames.push(snap(b));
    }
    frames.push(snap(b));
    return { frames, balls: b.map((p) => [p.x, p.y, p.down ? 1 : 0]), ...ev };
  }
  function snap(b) { const f = new Float32Array(48); for (let i = 0; i < 16; i++) { f[i * 3] = b[i].x; f[i * 3 + 1] = b[i].y; f[i * 3 + 2] = b[i].down ? 1 : 0; } return f; }

  const left = (balls, g) => { let n = 0; for (let i = 1; i < 16; i++) if (i !== 8 && !balls[i][2] && inGroup(i, g)) n++; return n; };

  // luật 8 bi (bản gọn cho Sảnh): ai đánh tiếp, phạm lỗi, chia nhóm bi, thắng thua
  // players: [a, b] · names: { id: tên } · shooter: id người vừa đánh
  function judge(state, sim, { players, names, shooter }) {
    const other = players.find((p) => p !== shooter);
    const groups = { ...(state.groups || {}) };
    const own = groups[shooter] || null;
    // làm tròn 0,01 và kẹp trong bàn giống Gateway → người đánh và người xem bắt đầu cú sau từ đúng một vị trí
    const cl = (v, hi) => Math.round(Math.max(0, Math.min(hi, v)) * 100) / 100; // bi rơi lỗ có thể nằm ngoài mép bàn – Gateway cũng kẹp như vậy
    const balls = sim.balls.map((q) => [cl(q[0], W), cl(q[1], H), q[2] ? 1 : 0]);
    const wasBreak = !state.broke;
    const ownClearedBefore = !!own && left(state.balls, own) === 0;
    const cueDown = sim.pocketed.includes(0);
    const eightDown = sim.pocketed.includes(8);
    const potted = sim.pocketed.filter((n) => n !== 0 && n !== 8);
    let foul = null;
    if (cueDown) foul = 'bi trắng rơi lỗ';
    else if (sim.firstHit === null) foul = 'bi trắng không chạm bi nào';
    else if (own && !ownClearedBefore && !inGroup(sim.firstHit, own)) foul = sim.firstHit === 8 ? 'chạm bi 8 trước' : 'chạm bi của đối thủ trước';
    else if (own && ownClearedBefore && sim.firstHit !== 8) foul = 'phải chạm bi 8 trước';
    else if (!own && !wasBreak && sim.firstHit === 8) foul = 'chạm bi 8 trước';
    const N = (id) => names[id] || 'Đối thủ';
    const out = { balls, groups, ballInHand: 0, broke: true };
    // bi 8
    if (eightDown) {
      if (wasBreak) { const s = spotNear(balls, FOOT_X, H / 2, 8); balls[8] = [s[0], s[1], 0]; }
      else if (ownClearedBefore && !foul) return { state: out, turn: shooter, foul: false, winner: shooter, msg: `🎱 ${N(shooter)} vào bi 8 – thắng ván!` };
      else return { state: out, turn: other, foul: true, winner: other, msg: `Bi 8 rơi ${foul ? 'khi phạm lỗi' : 'sớm'} – ${N(other)} thắng ván` };
    }
    if (cueDown) { const s = spotNear(balls, HEAD_X, H / 2, 0); balls[0] = [s[0], s[1], 0]; }
    // chia nhóm: lần đầu vào bi hợp lệ sau cú giao bóng
    if (!own && !foul && !wasBreak && potted.length) {
      const g = groupOf(potted[0]);
      groups[shooter] = g; groups[other] = g === 'solid' ? 'stripe' : 'solid';
    }
    const mine = groups[shooter];
    const scored = potted.filter((n) => (mine ? inGroup(n, mine) : true));
    if (foul) {
      out.ballInHand = 2;
      return { state: out, turn: other, foul: true, winner: null, msg: `Phạm lỗi: ${foul} – ${N(other)} được đặt bi trắng` };
    }
    if (scored.length) {
      const assigned = !own && mine ? ` · ${N(shooter)} nhận ${GROUP_NAME[mine]}` : '';
      return { state: out, turn: shooter, foul: false, winner: null, msg: `${N(shooter)} vào bi ${scored.join(', ')} – đánh tiếp${assigned}` };
    }
    return { state: out, turn: other, foul: false, winner: null, msg: wasBreak ? `Giao bóng xong – tới lượt ${N(other)}` : `Trượt – tới lượt ${N(other)}` };
  }

  // đường ngắm: từ bi cái theo hướng (dx, dy) tới bi đầu tiên chạm (bi ma + hướng hai bi đi tiếp) hoặc tới băng
  function aim(balls, cue, dx, dy) {
    let best = Infinity, hit = -1;
    for (let i = 1; i < 16; i++) {
      const q = balls[i]; if (q[2]) continue;
      const fx = q[0] - cue.x, fy = q[1] - cue.y;
      const t = fx * dx + fy * dy; if (t <= 0) continue;
      const c2 = fx * fx + fy * fy - t * t;
      if (c2 > 4 * R * R) continue;
      const tt = t - Math.sqrt(4 * R * R - c2);
      if (tt < best) { best = tt; hit = i; }
    }
    // tới băng
    const tx = dx > 0 ? (W - R - cue.x) / dx : dx < 0 ? (R - cue.x) / dx : Infinity;
    const ty = dy > 0 ? (H - R - cue.y) / dy : dy < 0 ? (R - cue.y) / dy : Infinity;
    const wall = Math.min(tx, ty);
    if (hit < 0 || wall < best) return { hit: -1, end: { x: cue.x + dx * wall, y: cue.y + dy * wall } };
    const gx = cue.x + dx * best, gy = cue.y + dy * best;
    const q = balls[hit];
    let nx = q[0] - gx, ny = q[1] - gy; const nl = Math.sqrt(nx * nx + ny * ny) || 1; nx /= nl; ny /= nl;
    const dot = dx * nx + dy * ny;
    let cx = dx - dot * nx, cy = dy - dot * ny; const cl = Math.sqrt(cx * cx + cy * cy);
    if (cl > 1e-6) { cx /= cl; cy /= cl; } else { cx = 0; cy = 0; }
    return { hit, ghost: { x: gx, y: gy }, obj: { x: nx, y: ny, k: dot }, cue: { x: cx, y: cy, k: Math.sqrt(Math.max(0, 1 - dot * dot)) } };
  }

  const api = { W, H, R, HEAD_X, FOOT_X, POCKETS, rack, simulate, judge, aim, placeOk, spotNear, groupOf, inGroup, left, GROUP_NAME, isSolid, isStripe };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.VPPool = api;
})(typeof window !== 'undefined' ? window : globalThis);
