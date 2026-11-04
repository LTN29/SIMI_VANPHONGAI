// Nút Dừng trong tab Chat: Codex kẹt (đang chờ công cụ điều khiển máy, chờ mạng thử lại, chờ người dùng cho phép…)
// không báo "đã ngắt" → lượt vẫn phải kết thúc sau vài giây, câu hỏi quyền đang treo được trả lời từ chối; bấm Dừng lần 2 dừng ngay.
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('fs');
const os = require('os');
const path = require('path');
const { EventEmitter } = require('events');
const { ChatEngine } = require('../src/chat');

// Codex giả: nhận lượt nhưng không bao giờ trả lời, ngắt lượt cũng không báo xong (kẹt như trên macOS)
class StuckCodex extends EventEmitter {
  constructor() { super(); this.loaded = new Set(); this.gen = 1; this.active = 0; this.calls = []; this.sent = []; this.stops = 0; }
  async start() { return this.gen; }
  hold() { this.active++; }
  release() { this.active = Math.max(0, this.active - 1); }
  stop() { this.stops++; }
  async plugins() { return { plugins: [] }; }
  async mcpServers() { return []; }
  respond(id, r) { this.sent.push([id, r]); }
  respondError(id, m) { this.sent.push([id, { error: m }]); }
  async request(method) {
    this.calls.push(method);
    if (method === 'thread/start') return { thread: { id: 'cx-stuck' } };
    if (method === 'turn/start') return { turn: { id: 'turn-1' } };
    if (method === 'turn/interrupt') return {}; // nhận lệnh ngắt nhưng không bao giờ gửi turn/completed
    return {};
  }
}

function setup() {
  const ud = fs.mkdtempSync(path.join(os.tmpdir(), 'vpai-stop-'));
  const codex = new StuckCodex(); const events = [];
  const e = new ChatEngine({ userData: ud, getConfig: () => ({}), emit: (x) => events.push(x), defaultDir: () => ud, codex });
  const t = e.create({ title: 'Kẹt' });
  return { e, t, codex, events };
}
const until = async (fn, ms = 5000) => { const end = Date.now() + ms; while (!fn()) { if (Date.now() > end) throw new Error('hết giờ chờ'); await new Promise((r) => setTimeout(r, 20)); } };

test('Codex kẹt: bấm Dừng → lượt tự kết thúc sau vài giây, câu hỏi quyền treo được từ chối', async () => {
  const { e, t, codex, events } = setup();
  const sending = e.send(t.id, { text: 'Mở VMware và làm tiếp' });
  await until(() => codex.calls.includes('turn/start') && e.running.get(t.id).turnId);
  // Codex đang hỏi quyền điều khiển máy, người dùng chưa trả lời
  codex.emit('request', { id: 77, method: 'item/commandExecution/requestApproval', params: { threadId: 'cx-stuck', command: 'osascript -e "tell app \\"VMware Fusion\\" to activate"' } });
  assert.equal(codex.sent.length, 0);
  const t0 = Date.now();
  assert.equal(e.stop(t.id), true);
  assert.ok(codex.calls.includes('turn/interrupt'), 'đã xin Codex ngắt lượt');
  assert.deepEqual(codex.sent, [[77, { decision: 'decline' }]], 'câu hỏi quyền đang treo được trả lời từ chối ngay');
  await sending;
  const took = Date.now() - t0;
  assert.ok(took < 6000, `lượt kết thúc sau ${took} ms`);
  const done = events.find((x) => x.ev === 'done');
  assert.equal(done.message.status, 'stopped');
  assert.equal(e.running.has(t.id), false, 'đoạn chat không còn "đang trả lời" → gửi tiếp được');
  assert.ok(codex.stops >= 1, 'Codex được tắt hẳn (không còn lượt chạy ngầm)');
});

test('bấm Dừng lần 2 → dừng ngay, không chờ', async () => {
  const { e, t, codex } = setup();
  const sending = e.send(t.id, { text: 'Việc dài' });
  await until(() => e.running.get(t.id) && e.running.get(t.id).turnId);
  e.stop(t.id);
  const t0 = Date.now();
  e.stop(t.id);
  await sending;
  assert.ok(Date.now() - t0 < 500, 'lần 2 dừng ngay');
  assert.equal(e.running.has(t.id), false);
  assert.ok(codex.stops >= 1);
});

test('bấm Dừng khi lượt chưa kịp bắt đầu → dừng ngay', async () => {
  const { e, t } = setup();
  const sending = e.send(t.id, { text: 'Xin chào' });
  e.stop(t.id);
  await sending;
  assert.equal(e.running.has(t.id), false);
});
