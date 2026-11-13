// ⏰ Tác vụ đã lên lịch: tính giờ chạy kế tiếp, chạy đúng hạn, chạy bù khi mở app, tác vụ một lần tự tắt.
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('fs');
const os = require('os');
const path = require('path');
const { Scheduler, nextRun, describe } = require('../src/scheduler');

const at = (y, mo, d, h = 0, mi = 0) => new Date(y, mo - 1, d, h, mi, 0, 0).getTime();

test('nextRun: mỗi ngày / ngày làm việc / mỗi tuần / mỗi tháng / mỗi N giờ / một lần', () => {
  const fri = at(2026, 11, 13, 9, 0); // thứ Sáu 13/11/2026 9:00
  assert.equal(nextRun({ kind: 'daily', time: '08:00' }, fri), at(2026, 11, 14, 8, 0));
  assert.equal(nextRun({ kind: 'daily', time: '10:30' }, fri), at(2026, 11, 13, 10, 30));
  assert.equal(nextRun({ kind: 'weekdays', time: '08:00' }, fri), at(2026, 11, 16, 8, 0), 'bỏ qua T7, CN');
  assert.equal(nextRun({ kind: 'weekly', time: '08:30', days: [1, 3] }, fri), at(2026, 11, 16, 8, 30));
  assert.equal(nextRun({ kind: 'monthly', time: '09:00', day: 31 }, fri), at(2026, 11, 30, 9, 0), 'tháng 11 không có ngày 31 → ngày cuối tháng');
  assert.equal(nextRun({ kind: 'hourly', time: '00:15', every: 2 }, fri), at(2026, 11, 13, 9, 15));
  assert.equal(nextRun({ kind: 'once', date: '2026-11-20', time: '07:00' }, fri), at(2026, 11, 20, 7, 0));
  assert.equal(nextRun({ kind: 'once', date: '2026-11-01', time: '07:00' }, fri), null);
  assert.match(describe({ kind: 'weekly', time: '08:30', days: [1, 3] }), /T2, T4 · 08:30/);
});

function mk(runTask) {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'vpai-sched-'));
  const events = [];
  const s = new Scheduler({ dir, runTask, emit: (e) => events.push(e) });
  return { s, dir, events };
}
const flush = () => new Promise((r) => setTimeout(r, 20));

test('đến giờ → chạy, ghi lịch sử, tính lần kế tiếp; tác vụ một lần chạy xong thì tắt', async () => {
  const runs = [];
  const { s } = mk(async (t) => { runs.push(t.name); return { ok: true, threadId: 'k1' }; });
  const a = s.save({ name: 'Tin sáng', prompt: 'tóm tắt tin', when: { kind: 'daily', time: '08:00' } });
  const b = s.save({ name: 'Một lần', prompt: 'x', when: { kind: 'once', date: '2099-01-01', time: '08:00' } });
  const first = a.nextRun;
  s.tick(first + 1000);
  await flush();
  assert.deepEqual(runs, ['Tin sáng']);
  assert.ok(s.data.tasks.find((t) => t.id === a.id).nextRun > first);
  assert.equal(s.data.runs[0].ok, true);
  s.tick(at(2099, 1, 1, 8, 1));
  await flush(); await flush();
  assert.ok(runs.includes('Một lần'));
  assert.equal(s.data.tasks.find((t) => t.id === b.id).enabled, false);
});

test('mở app sau khi lỡ giờ: lỡ dưới 12 giờ thì chạy bù 1 lần, lỡ lâu hơn thì bỏ qua', async () => {
  const runs = [];
  const { s, dir } = mk(async (t) => { runs.push(t.name); return { ok: true }; });
  const a = s.save({ name: 'Lỡ ít', prompt: 'x', when: { kind: 'daily', time: '08:00' } });
  const b = s.save({ name: 'Lỡ lâu', prompt: 'y', when: { kind: 'daily', time: '08:00' } });
  s.data.tasks.find((t) => t.id === a.id).nextRun = Date.now() - 60 * 60 * 1000;
  s.data.tasks.find((t) => t.id === b.id).nextRun = Date.now() - 30 * 60 * 60 * 1000;
  s._save();
  const s2 = new Scheduler({ dir, runTask: async (t) => { runs.push(t.name); return { ok: true }; } });
  s2.start(); s2.stop();
  await flush();
  assert.deepEqual(runs, ['Lỡ ít']);
  assert.equal(s2.data.runs[0].catchUp, true);
  assert.ok(s2.data.tasks.every((t) => t.nextRun > Date.now()));
});

test('lỗi khi chạy → ghi lỗi, không chặn tác vụ sau; kiểm tra dữ liệu nhập', async () => {
  const { s } = mk(async (t) => { if (t.name === 'hỏng') throw new Error('Codex chưa sẵn sàng'); return { ok: true }; });
  assert.throws(() => s.save({ name: '', prompt: 'x', when: { kind: 'daily' } }), /tên/);
  assert.throws(() => s.save({ name: 'a', prompt: 'x', when: { kind: 'once', date: '2000-01-01', time: '08:00' } }), /đã qua/);
  const a = s.save({ name: 'hỏng', prompt: 'x', when: { kind: 'daily', time: '08:00' } });
  const b = s.save({ name: 'tốt', prompt: 'y', when: { kind: 'daily', time: '08:00' } });
  s.runNow(a.id); s.runNow(b.id);
  await flush(); await flush();
  assert.equal(s.data.runs.length, 2);
  assert.equal(s.data.runs.find((r) => r.name === 'hỏng').error, 'Codex chưa sẵn sàng');
  assert.equal(s.data.runs.find((r) => r.name === 'tốt').ok, true);
});
