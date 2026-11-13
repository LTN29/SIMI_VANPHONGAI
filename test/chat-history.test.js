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

// Lỗi "mất đoạn chat vừa chat / chat cũ": đoạn chat liên kết Codex có lượt ⚡ trả lời nhanh và lượt bằng tài khoản riêng
// (chỉ nằm trong app). Trước đây mở lại → số lượt khác Codex → thay cả lịch sử bằng bản Codex → mất các lượt đó.
function mixedThread(e) {
  const t = e.create({ title: META.name });
  Object.assign(t, {
    codexThread: 'th-1', origin: 'app', codexUpdatedAt: null,
    messages: [
      { role: 'user', text: 'Tạo file từ khóa Amazon', ts: 1 }, { role: 'assistant', blocks: [{ kind: 'text', text: 'Đã tạo file keywords.xlsx' }], status: 'done', ts: 2 },
      { role: 'user', text: 'Cảm ơn, tóm tắt giúp', ts: 3 }, { role: 'assistant', fast: true, blocks: [{ kind: 'text', text: 'Tóm tắt nhanh…' }], status: 'done', ts: 4 },
      { role: 'user', text: 'Hỏi Claude thử', ts: 5 }, { role: 'assistant', via: 'Claude Code', blocks: [{ kind: 'text', text: 'Claude trả lời' }], status: 'done', ts: 6 },
    ],
  });
  return e.store.save(t);
}

test('mở lại đoạn chat có lượt trả lời nhanh / tài khoản riêng → giữ nguyên, không mất', async () => {
  const ud = fs.mkdtempSync(path.join(os.tmpdir(), 'vpai-hist-'));
  const codex = fakeServer();
  // Codex chỉ biết lượt 1 (lượt 2 của TURNS coi như chưa có)
  codex.readThread = async (id, withTurns = true) => (withTurns ? { ...META, turns: [TURNS[0]] } : { ...META });
  const e = new ChatEngine({ userData: ud, getConfig: () => ({}), emit: () => {}, defaultDir: () => os.tmpdir(), codex });
  const t = mixedThread(e);
  const nt = await e.sync(t.id);
  assert.equal(nt.messages.length, 6);
  assert.deepEqual(nt.messages.filter((m) => m.role === 'user').map((m) => m.text), ['Tạo file từ khóa Amazon', 'Cảm ơn, tóm tắt giúp', 'Hỏi Claude thử']);
});

test('ChatGPT Work có lượt mới → chỉ nối thêm vào cuối, giữ lượt của app', async () => {
  const ud = fs.mkdtempSync(path.join(os.tmpdir(), 'vpai-hist-'));
  const e = new ChatEngine({ userData: ud, getConfig: () => ({}), emit: () => {}, defaultDir: () => os.tmpdir(), codex: fakeServer({ bare: false }) });
  const t = mixedThread(e);
  const nt = await e.sync(t.id);
  assert.deepEqual(nt.messages.filter((m) => m.role === 'user').map((m) => m.text), ['Tạo file từ khóa Amazon', 'Cảm ơn, tóm tắt giúp', 'Hỏi Claude thử', 'Thêm cột giá']);
  assert.equal(nt.messages.length, 8);
  assert.ok(fs.readdirSync(path.join(ud, 'chats', '_backup')).some((f) => f.startsWith(t.id + '.')), 'có bản sao trước khi đổi');
  // mở lần nữa: Codex không đổi → không nối trùng
  const again = await e.sync(t.id);
  assert.equal(again.messages.length, 8);
});

test('lưu đoạn chat: rename bị khoá (EPERM trên Windows) → thử lại / ghi thẳng, không mất', () => {
  const ud = fs.mkdtempSync(path.join(os.tmpdir(), 'vpai-hist-'));
  const e = new ChatEngine({ userData: ud, getConfig: () => ({}), emit: () => {}, defaultDir: () => os.tmpdir(), codex: fakeServer() });
  const t = e.create({ title: 'x' });
  const orig = fs.renameSync; let n = 0;
  fs.renameSync = (...a) => { n++; const err = new Error('EPERM: operation not permitted, rename'); err.code = 'EPERM'; throw err; };
  try {
    t.messages.push({ role: 'user', text: 'giữ tôi lại', ts: 1 });
    e.store.save(t);
  } finally { fs.renameSync = orig; }
  assert.ok(n > 1, 'đã thử lại');
  assert.equal(e.store.get(t.id).messages[0].text, 'giữ tôi lại');
});
