// Chống mất đoạn chat: lịch sử bị rút ngắn → tự sao lưu + ghi nhật ký; file hỏng → lấy bản sao; xoá → còn bản để khôi phục;
// app tắt giữa lượt → ghi ngay phần đã trả lời; mở lại → câu trả lời "đang chạy" cũ được đánh dấu dừng, không treo.
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('fs');
const os = require('os');
const path = require('path');
const { ChatEngine } = require('../src/chat');

function setup() {
  const ud = fs.mkdtempSync(path.join(os.tmpdir(), 'vpai-dur-'));
  const e = new ChatEngine({ userData: ud, getConfig: () => ({}), emit: () => {}, defaultDir: () => os.tmpdir(), codex: Object.assign(new (require('events').EventEmitter)(), { readThread: async () => { throw new Error('x'); } }) });
  const t = e.create({ title: 'Kế hoạch quý' });
  t.messages = Array.from({ length: 6 }, (_, i) => i % 2 ? { role: 'assistant', status: 'done', blocks: [{ kind: 'text', text: 'Trả lời ' + i }] } : { role: 'user', text: 'Hỏi ' + i });
  e.store.save(t);
  return { e, t, dir: path.join(ud, 'chats') };
}
const events = (dir) => fs.readFileSync(path.join(dir, '_events.log'), 'utf8').trim().split('\n').map((l) => JSON.parse(l));

test('lịch sử bị rút ngắn ngoài ý muốn → giữ bản đầy đủ (.max) + ghi nhật ký có nguồn gọi', () => {
  const { e, t, dir } = setup();
  const nt = e.store.get(t.id); nt.messages = nt.messages.slice(0, 2); e.store.save(nt);
  const ev = events(dir).find((x) => x.ev === 'shrink');
  assert.equal(ev.from, 6); assert.equal(ev.to, 2); assert.equal(ev.why, 'không rõ'); assert.ok(ev.at2);
  const max = JSON.parse(fs.readFileSync(path.join(dir, '_backup', t.id + '.max.json'), 'utf8'));
  assert.equal(max.messages.length, 6);
  const rec = e.store.recoverables();
  assert.equal(rec.length, 1); assert.equal(rec[0].reason, 'more'); assert.equal(rec[0].n, 6); assert.equal(rec[0].current, 2);
  e.store.restore(t.id, rec[0].file);
  assert.equal(e.store.get(t.id).messages.length, 6, 'khôi phục đủ 6 tin');
  assert.equal(e.store.recoverables().length, 0);
});

test('lưu thêm tin không tạo sao lưu thừa', () => {
  const { e, t, dir } = setup();
  const nt = e.store.get(t.id); nt.messages.push({ role: 'user', text: 'thêm' }); e.store.save(nt);
  assert.ok(!fs.existsSync(path.join(dir, '_events.log')) || !events(dir).some((x) => x.ev === 'shrink'));
});

test('file đoạn chat hỏng → tự lấy bản sao lưu gần nhất, vẫn hiện trong danh sách', () => {
  const { e, t, dir } = setup();
  e.store.backup(e.store.get(t.id));
  fs.writeFileSync(path.join(dir, t.id + '.json'), '{"id":"' + t.id + '","messages":[{"role":"us');
  const list = e.store.list();
  assert.ok(list.some((x) => x.id === t.id && x.n === 6), 'vẫn có trong danh sách với đủ tin');
  assert.equal(e.store.get(t.id).messages.length, 6);
  assert.ok(fs.readdirSync(dir).some((f) => f.startsWith(t.id + '.json.hong-')), 'giữ lại bản hỏng để kiểm tra');
  assert.ok(events(dir).some((x) => x.ev === 'corrupt' && x.recovered));
});

test('xoá đoạn chat → còn bản trong mục Khôi phục', () => {
  const { e, t } = setup();
  e.store.remove(t.id);
  assert.equal(e.store.get(t.id), null);
  const rec = e.store.recoverables();
  assert.equal(rec[0].reason, 'deleted');
  e.store.restore(t.id, rec[0].file);
  assert.equal(e.store.get(t.id).messages.length, 6);
});

test('khôi phục chặn tên file lạ', () => {
  const { e, t } = setup();
  assert.throws(() => e.store.restore(t.id, '../../x.json'), /không hợp lệ/);
});

test('app tắt giữa lượt → ghi ngay phần đã trả lời; mở lại → không treo "đang chạy"', () => {
  const { e, t } = setup();
  const run = e.store.get(t.id);
  const msg = { role: 'assistant', status: 'running', blocks: [{ kind: 'text', text: 'Đang viết dở…' }] };
  run.messages.push({ role: 'user', text: 'Viết tiếp' }, msg);
  e.running.set(t.id, { t: run, msg });
  e.flushRunning();
  e.running.clear();
  const saved = e.store.get(t.id);
  assert.equal(saved.messages.length, 8);
  assert.equal(saved.messages[7].status, 'stopped');
  assert.match(saved.messages[7].blocks[0].text, /viết dở/);
  // trường hợp app bị tắt cứng (không kịp ghi): mở lại thì đánh dấu dừng
  const hard = e.store.get(t.id); hard.messages[7].status = 'running'; e.store.save(hard);
  assert.equal(e.open(t.id).messages[7].status, 'stopped');
});
