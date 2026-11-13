// ✏️ Sửa tin đã gửi rồi gửi lại: bỏ tin đó + mọi trao đổi phía sau, cắt phiên Codex về đúng lượt (thread/revert),
// Codex không cắt được thì mở phiên mới kèm lịch sử đã giữ.
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('fs');
const os = require('os');
const path = require('path');
const { CodexAppServer } = require('../src/codex-server');
const { ChatEngine } = require('../src/chat');

const turn = (id, q, a) => ({ id, status: 'completed', startedAt: 1793500000, items: [{ type: 'userMessage', id: 'u' + id, content: [{ type: 'text', text: q }] }, { type: 'agentMessage', id: 'a' + id, text: a }] });
const TURNS = [turn('t1', 'Viết dàn ý bài blog', 'Dàn ý…'), turn('t2', 'Viết đoạn mở bài', 'Mở bài…')];

function setup({ revertFails = false } = {}) {
  const ud = fs.mkdtempSync(path.join(os.tmpdir(), 'vpai-edit-'));
  const codex = new CodexAppServer(() => 'codex');
  codex.calls = [];
  codex.request = async (method, p) => {
    codex.calls.push([method, p]);
    if (method === 'thread/read') return { thread: { id: 'th-1', cwd: os.tmpdir(), updatedAt: 1793500300, ...(p.includeTurns ? { turns: TURNS } : {}) } };
    if (method === 'thread/resume' || method === 'thread/unsubscribe') return {};
    if (method === 'thread/revert') { if (revertFails) throw new Error('unknown method thread/revert'); return { thread: { id: 'th-1', turns: [] } }; }
    throw new Error('unknown ' + method);
  };
  const events = [];
  const e = new ChatEngine({ userData: ud, getConfig: () => ({}), emit: (ev) => events.push(ev), defaultDir: () => os.tmpdir(), codex });
  const sent = [];
  e.send = async (id, p) => { sent.push(p); return { ok: true }; };
  const t = e.create({ title: 'Blog' });
  Object.assign(t, {
    codexThread: 'th-1',
    messages: [
      { role: 'user', text: 'Viết dàn ý bài blog', ts: 1 }, { role: 'assistant', status: 'done', blocks: [{ kind: 'text', text: 'Dàn ý…' }], ts: 2 },
      { role: 'user', text: 'Cảm ơn nhé', ts: 3 }, { role: 'assistant', status: 'done', fast: true, blocks: [{ kind: 'text', text: 'Không có gì!' }], ts: 4 },
      { role: 'user', text: 'Viết đoạn mở bài', ts: 5 }, { role: 'assistant', status: 'done', blocks: [{ kind: 'text', text: 'Mở bài…' }], ts: 6 },
    ],
  });
  e.store.save(t);
  return { e, t, codex, events, sent };
}

test('sửa tin cuối → cắt phiên Codex trước đúng lượt đó, bỏ trao đổi phía sau, gửi bản mới', async () => {
  const { e, t, codex, events, sent } = setup();
  await e.edit(t.id, 4, { text: 'Viết đoạn mở bài thật ngắn' });
  const revert = codex.calls.find(([m]) => m === 'thread/revert');
  const order = codex.calls.map(([m]) => m).filter((m) => /resume|revert|unsubscribe/.test(m));
  assert.deepEqual(order, ['thread/resume', 'thread/revert', 'thread/unsubscribe'], 'nạp phiên → cắt → nhả');
  assert.deepEqual(revert[1], { threadId: 'th-1', beforeTurnId: 't2' });
  const nt = e.store.get(t.id);
  assert.equal(nt.messages.length, 4);
  assert.equal(nt.codexThread, 'th-1', 'vẫn giữ phiên Codex');
  assert.equal(sent[0].text, 'Viết đoạn mở bài thật ngắn');
  assert.ok(events.some((ev) => ev.ev === 'truncate' && ev.length === 4), 'báo giao diện cắt bớt tin');
});

test('sửa tin "trả lời nhanh" (không có trong Codex) → cắt Codex từ lượt Codex kế tiếp', async () => {
  const { e, t, codex } = setup();
  await e.edit(t.id, 2, { text: 'Cảm ơn, giờ viết kết bài' });
  assert.deepEqual(codex.calls.find(([m]) => m === 'thread/revert')[1], { threadId: 'th-1', beforeTurnId: 't2' });
  assert.equal(e.store.get(t.id).messages.length, 2);
});

test('sửa tin chỉ có lượt nhanh phía sau → không đụng tới Codex', async () => {
  const { e, t, codex } = setup();
  const nt = e.store.get(t.id); nt.messages = nt.messages.slice(0, 4); e.store.save(nt);
  await e.edit(t.id, 2, { text: 'Cảm ơn bạn' });
  assert.ok(!codex.calls.some(([m]) => m === 'thread/revert'));
  assert.equal(e.store.get(t.id).codexThread, 'th-1');
});

test('bản Codex không hỗ trợ cắt lịch sử → mở phiên mới kèm lịch sử đã giữ, ẩn phiên cũ', async () => {
  const { e, t, sent } = setup({ revertFails: true });
  await e.edit(t.id, 4, { text: 'Viết lại mở bài' });
  const nt = e.store.get(t.id);
  assert.equal(nt.codexThread, null);
  assert.equal(nt.carryHistory, true);
  assert.ok(e.store.hidden().has('th-1'));
  assert.equal(nt.messages.length, 4);
  assert.equal(sent.length, 1);
});

test('ChatGPT Work đang ghi phiên → báo rõ, không âm thầm tách phiên', async () => {
  const { e, t, codex } = setup();
  const orig = codex.request;
  codex.request = async (m, p) => { if (m === 'thread/resume') throw new Error('thread has an active writer'); return orig(m, p); };
  await assert.rejects(() => e.edit(t.id, 4, { text: 'x' }), /ChatGPT Work/);
  assert.equal(e.store.get(t.id).messages.length, 6, 'chưa xoá gì');
});

test('không sửa khi đang trả lời hoặc chỉ số không phải tin của người dùng', async () => {
  const { e, t } = setup();
  await assert.rejects(() => e.edit(t.id, 1, { text: 'x' }), /Không tìm thấy tin nhắn/);
  e.running.set(t.id, {});
  await assert.rejects(() => e.edit(t.id, 0, { text: 'x' }), /đang trả lời/);
});
