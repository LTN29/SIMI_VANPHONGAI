// Sidebar báo "Codex không phản hồi (thread/list)": Codex kẹt lúc vừa khởi động → app tự khởi động lại Codex và đọc lại 1 lần.
process.env.VP_CODEX_LIST_MS = '800';
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('fs');
const os = require('os');
const path = require('path');
const { CodexAppServer } = require('../src/codex-server');

test('thread/list treo → khởi động lại Codex, đọc lại được danh sách', { skip: process.platform === 'win32' }, async () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'vp-cx-list-'));
  process.env.FAKE_CODEX_COUNT = path.join(dir, 'count');
  const cx = new CodexAppServer(() => path.join(__dirname, 'fixtures', 'fake-codex-app-server.js'));
  try {
    const list = await cx.listThreads(10);
    assert.deepEqual(list.map((t) => t.id), ['t-1']);
    assert.equal(fs.readFileSync(process.env.FAKE_CODEX_COUNT, 'utf8'), '2', 'đã khởi động lại Codex đúng 1 lần');
  } finally { cx.stop(); }
});

test('đang có lượt chạy thì không khởi động lại Codex (không cắt ngang lượt)', { skip: process.platform === 'win32' }, async () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'vp-cx-list-'));
  process.env.FAKE_CODEX_COUNT = path.join(dir, 'count');
  const cx = new CodexAppServer(() => path.join(__dirname, 'fixtures', 'fake-codex-app-server.js'));
  try {
    await cx.start(); cx.hold();
    await assert.rejects(cx.listThreads(10), /không phản hồi \(thread\/list\)/);
    assert.equal(fs.readFileSync(process.env.FAKE_CODEX_COUNT, 'utf8'), '1');
  } finally { cx.release(); cx.stop(); }
});
