// Bida 8 bi: vật lý chạy giống hệt nhau mỗi lần (máy đối thủ chạy lại ra đúng kết quả), bi không lọt khỏi bàn / chồng lên nhau, luật cơ bản.
const test = require('node:test');
const assert = require('node:assert/strict');
const P = require('../src/renderer/pool-engine.js');

const names = { a: 'Ngọc', b: 'An' };
const ctx = (shooter) => ({ players: ['a', 'b'], names, shooter });
const empty = () => { const s = P.rack(); s.balls = s.balls.map((b, i) => (i === 0 ? b : [0, 0, 1])); s.broke = true; s.ballInHand = 0; return s; };

test('giao bóng: chạy lại cho ra đúng vị trí, bi nằm trong bàn, không chồng nhau, dừng trong 20 giây', () => {
  const s = P.rack();
  const shot = { dx: 1 / Math.hypot(1, 0.004), dy: 0.004 / Math.hypot(1, 0.004), power: 1 };
  const a = P.simulate(s, shot), b = P.simulate(s, shot);
  assert.deepEqual(a.balls, b.balls);
  assert.ok(a.frames.length < 20 * 60 + 2);
  assert.equal(a.firstHit, 1, 'bi trắng chạm bi đầu tam giác trước');
  for (const q of a.balls) if (!q[2]) assert.ok(q[0] >= P.R - 0.5 && q[0] <= P.W - P.R + 0.5 && q[1] >= P.R - 0.5 && q[1] <= P.H - P.R + 0.5);
  for (let i = 0; i < 16; i++) for (let j = i + 1; j < 16; j++) {
    const x = a.balls[i], y = a.balls[j];
    if (!x[2] && !y[2]) assert.ok(Math.hypot(x[0] - y[0], x[1] - y[1]) > 2 * P.R - 1, `bi ${i} và ${j} chồng nhau`);
  }
});

test('vào bi đầu tiên sau giao bóng → nhận nhóm bi và đánh tiếp', () => {
  const s = empty();
  s.balls[3] = [P.W - 80, P.H - 80, 0];   // bi 3 (trơn) thẳng hàng với bi trắng và lỗ góc phải dưới
  s.balls[0] = [P.W - 200, P.H - 200, 0];
  s.balls[8] = [100, 100, 0];
  const d = Math.SQRT1_2;
  const sim = P.simulate(s, { dx: d, dy: d, power: 0.35 });
  assert.ok(sim.pocketed.includes(3), 'bi 3 vào lỗ góc');
  const j = P.judge(s, sim, ctx('a'));
  assert.equal(j.turn, 'a'); assert.equal(j.state.groups.a, 'solid'); assert.equal(j.state.groups.b, 'stripe');
  assert.match(j.msg, /nhận bi trơn/);
});

test('bi trắng rơi lỗ → phạm lỗi, đối thủ được đặt bi trắng cả bàn', () => {
  const s = empty();
  s.balls[0] = [P.W - 80, P.H - 80, 0]; s.balls[8] = [100, 100, 0]; s.balls[9] = [300, 300, 0];
  const sim = P.simulate(s, { dx: Math.SQRT1_2, dy: Math.SQRT1_2, power: 0.3 });
  const j = P.judge(s, sim, ctx('a'));
  assert.equal(j.turn, 'b'); assert.equal(j.foul, true); assert.equal(j.state.ballInHand, 2);
  assert.equal(j.state.balls[0][2], 0, 'bi trắng được đặt lại lên bàn');
});

test('bi 8 rơi sớm → thua; vào hết nhóm mình rồi đánh bi 8 → thắng', () => {
  const s = empty();
  s.groups = { a: 'solid', b: 'stripe' };
  s.balls[8] = [P.W - 80, P.H - 80, 0]; s.balls[0] = [P.W - 200, P.H - 200, 0]; s.balls[2] = [100, 400, 0];
  const shot = { dx: Math.SQRT1_2, dy: Math.SQRT1_2, power: 0.35 };
  const lose = P.judge(s, P.simulate(s, shot), ctx('a'));
  assert.equal(lose.winner, 'b');
  s.balls[2] = [0, 0, 1];
  const win = P.judge(s, P.simulate(s, shot), ctx('a'));
  assert.equal(win.winner, 'a');
});

test('đường ngắm: tìm bi đầu tiên trên đường đi và chỗ bi ma', () => {
  const s = empty(); s.balls[5] = [600, 250, 0];
  const a = P.aim(s.balls, { x: 200, y: 250 }, 1, 0);
  assert.equal(a.hit, 5); assert.ok(Math.abs(a.ghost.x - (600 - 2 * P.R)) < 0.01);
  assert.ok(P.placeOk(s.balls, 120, 250, 1)); assert.ok(!P.placeOk(s.balls, 600, 250, 2)); assert.ok(!P.placeOk(s.balls, 400, 250, 1));
});
