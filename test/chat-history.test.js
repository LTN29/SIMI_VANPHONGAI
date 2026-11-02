// Mở lại lịch sử ChatGPT Work: bản Codex trả khung lượt không kèm nội dung → đọc lại bằng thread/turns/list;
// đoạn chat đã lỡ lưu rỗng → mở lại là nạp lại (không bị kẹt vì "Codex chưa đổi gì").
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('fs');
const os = require('os');
const path = require('path');
const { CodexAppServer } = require('../src/codex-server');
const { ChatEngine } = require('../src/chat');

const TURNS = [
  { id: 't1', status: 'completed', startedAt: 1793500000, items: [{ type: 'userMessage', id: 'u1', content: [{ type: 'text', text: 'Tạo file từ khóa Amazon' }] }, { type: 'agentMessage', id: 'a1', text: 'Đã tạo file keywords.xlsx' }] },
  { id: 't2', status: 'completed', startedAt: 1793500100, items: [{ type: 'userMessage', id: 'u2', content: [{ type: 'text', text: 'Thêm cột giá' }] }, { type: 'agentMessage', id: 'a2', text: 'Đã thêm' }] },
];
const META = { id: 'th-1', name: 'Tạo file từ khóa Amazon', cwd: os.tmpdir(), updatedAt: 1793500200, model: 'gpt-5' };

// app-server giả: thread/read includeTurns trả lượt KHÔNG có items (như bản Codex mới), turns/list trả đủ
function fakeServer({ bare = true } = {}) {
  const srv = new CodexAppServer(() => 'codex');
  srv.calls = [];
  srv.request = async (method, p) => {
    srv.calls.push(method);
    if (method === 'thread/read') return { thread: p.includeTurns ? { ...META, turns: TURNS.map((t) => (bare ? { ...t, items: [] } : t)) } : { ...META } };
    if (method === 'thread/turns/list') return { data: TURNS, nextCursor: null };
    throw new Error('unknown ' + method);
  };
  return srv;
}

test('thread/read không kèm nội dung lượt → đọc đủ bằng thread/turns/list', async () => {
  const srv = fakeServer();
  const th = await srv.readThread('th-1');
  assert.equal(th.turns.length, 2);
  assert.equal(th.turns[0].items.length, 2);
  assert.ok(srv.calls.includes('thread/turns/list'));
  const old = fakeServer({ bare: false });
  assert.equal((await old.readThread('th-1')).turns[1].items[1].text, 'Đã thêm');
  assert.ok(!old.calls.includes('thread/turns/list'), 'bản Codex cũ đọc như trước');
});

test('đoạn chat đã lỡ lưu rỗng → mở lại thì nạp lại đủ lịch sử', async () => {
  const ud = fs.mkdtempSync(path.join(os.tmpdir(), 'vpai-hist-'));
  const codex = fakeServer();
  const e = new ChatEngine({ userData: ud, getConfig: () => ({}), emit: () => {}, defaultDir: () => os.tmpdir(), codex });
  const t = e.create({ title: META.name });
  Object.assign(t, { codexThread: 'th-1', origin: 'codex', messages: [], codexUpdatedAt: META.updatedAt }); // như máy Ubuntu: đã lưu rỗng
  e.store.save(t);
  const nt = await e.sync(t.id);
  assert.deepEqual(nt.messages.filter((m) => m.role === 'user').map((m) => m.text), ['Tạo file từ khóa Amazon', 'Thêm cột giá']);
  assert.equal(nt.messages.filter((m) => m.role === 'assistant').length, 2);
  // đã có nội dung + Codex không đổi → không đọc lại
  codex.calls.length = 0;
  await e.sync(t.id);
  assert.deepEqual(codex.calls, ['thread/read']);
});

test('đoạn chat rỗng mà Codex đọc lỗi → báo lỗi (không im lặng)', async () => {
  const ud = fs.mkdtempSync(path.join(os.tmpdir(), 'vpai-hist-'));
  const codex = fakeServer(); codex.readThread = async () => { throw new Error('codex chưa đăng nhập'); };
  const e = new ChatEngine({ userData: ud, getConfig: () => ({}), emit: () => {}, defaultDir: () => os.tmpdir(), codex });
  const t = e.create({ title: 'x' }); Object.assign(t, { codexThread: 'th-1', messages: [] }); e.store.save(t);
  await assert.rejects(e.sync(t.id), /chưa đăng nhập/);
});

test('importExternal với Codex mới: mở lần đầu đã đủ lịch sử', async () => {
  const ud = fs.mkdtempSync(path.join(os.tmpdir(), 'vpai-hist-'));
  const e = new ChatEngine({ userData: ud, getConfig: () => ({}), emit: () => {}, defaultDir: () => os.tmpdir(), codex: fakeServer() });
  const t = await e.importExternal('th-1');
  assert.equal(t.messages.length, 4);
});
