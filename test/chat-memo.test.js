// 🧠 Ghi nhớ gọn: đoạn chat dài → phần cũ được tóm thành ghi nhớ; mỗi lượt chỉ gửi ghi nhớ + vài lượt gần nhất (nhanh mà vẫn nhớ).
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('fs');
const os = require('os');
const path = require('path');
const http = require('http');
const { EventEmitter } = require('events');
const simi = require('../src/simi');
const { ChatEngine, fastRequest } = require('../src/chat');

let srv; let bodies = [];
test.before(async () => {
  srv = http.createServer((req, res) => { let b = ''; req.on('data', (c) => b += c); req.on('end', () => {
    bodies.push(JSON.parse(b));
    res.writeHead(200, { 'content-type': 'application/json' });
    res.end(JSON.stringify({ output: [{ type: 'message', content: [{ type: 'output_text', text: '## Sản phẩm\n- Máy hút bụi UQ Q5: pin 60 phút, 2 nút trên tay cầm\n## Giọng văn\n- Ngắn, thân thiện' }] }] }));
  }); });
  await new Promise((r) => srv.listen(0, '127.0.0.1', r));
  simi.gatewayAuth = () => ({ baseUrl: `http://127.0.0.1:${srv.address().port}/v1`, key: 'k' });
});
test.after(() => srv.close());

function setup(n = 20) {
  const ud = fs.mkdtempSync(path.join(os.tmpdir(), 'vpai-memo-'));
  const e = new ChatEngine({ userData: ud, getConfig: () => ({}), emit: () => {}, defaultDir: () => os.tmpdir(), codex: new EventEmitter() });
  const t = e.create({ title: 'UQ Q5' }); t.model = 'gpt-6.1-sol';
  t.messages = Array.from({ length: n }, (_, i) => (i % 2 ? { role: 'assistant', status: 'done', blocks: [{ kind: 'text', text: `Trả lời ${i}: ` + 'nội dung sản phẩm '.repeat(60) }] } : { role: 'user', text: `Hỏi ${i} về Q5` }));
  e.store.save(t);
  return { e, t };
}

test('tóm phần cũ, giữ 8 tin gần nhất nguyên văn, kết thúc ở câu trả lời', async () => {
  bodies = [];
  const { e, t } = setup();
  const r = await e.updateMemo(t.id);
  assert.equal(r.ok, true);
  const nt = e.store.get(t.id);
  assert.equal(nt.memo.upTo, 12);
  assert.match(nt.memo.text, /pin 60 phút/);
  assert.equal(bodies[0].reasoning.effort, 'low');
  assert.match(bodies[0].input[0].content[0].text, /Hỏi 0 về Q5[\s\S]*Trả lời 11/);
  assert.doesNotMatch(bodies[0].input[0].content[0].text, /Hỏi 12 về Q5/);
});

test('mỗi lượt chỉ gửi ghi nhớ + các tin sau ghi nhớ; câu ngắn để Mặc định → suy nghĩ mức thấp', async () => {
  const { e, t } = setup();
  await e.updateMemo(t.id);
  const nt = e.store.get(t.id);
  nt.messages.push({ role: 'user', text: 'Viết lại câu này cho hay' }, { role: 'assistant', status: 'running', blocks: [] });
  const body = fastRequest(nt, 'gpt-6.1-sol', 'Viết lại câu này cho hay', [], '');
  assert.match(body.instructions, /GHI NHỚ CỦA ĐOẠN CHAT[\s\S]*pin 60 phút/);
  const sent = JSON.stringify(body.input);
  assert.ok(!sent.includes('Hỏi 0 về Q5') && sent.includes('Hỏi 12 về Q5'), 'phần đã tóm không gửi lại nguyên văn');
  assert.equal(body.reasoning.effort, 'low');
  nt.effort = 'high';
  assert.equal(fastRequest(nt, 'm', 'x', [], '').reasoning.effort, 'high', 'người dùng chọn mức thì giữ nguyên');
});

test('đoạn chat ngắn → chưa tóm; sửa tin cũ hơn phần đã tóm → bỏ ghi nhớ', async () => {
  const short = setup(6);
  assert.equal((await short.e.updateMemo(short.t.id)).skipped, 'short');
  const { e, t } = setup();
  await e.updateMemo(t.id);
  e.send = async () => ({ ok: true });
  await e.edit(t.id, 4, { text: 'Hỏi lại' });
  assert.equal(e.store.get(t.id).memo, null);
});

test('người dùng tự sửa ghi nhớ', () => {
  const { e, t } = setup(4);
  const m = e.setMemo(t.id, '- Sản phẩm: UQ Q5\n- Giọng văn: vui');
  assert.match(m.text, /UQ Q5/);
  assert.ok(m.upTo >= 0);
  assert.equal(e.setMemo(t.id, '').text, '');
});
