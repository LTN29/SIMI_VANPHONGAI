// ✏️ Sửa & gửi lại với Codex CLI thật (gateway giả lập): phiên Codex bị cắt đúng chỗ, lượt mới nối tiếp.
// Bỏ qua nếu máy không có lệnh `codex`.
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('fs');
const os = require('os');
const path = require('path');
const { execFileSync } = require('child_process');

let codexOk = true;
try { execFileSync(process.platform === 'win32' ? 'where' : 'which', ['codex'], { stdio: 'ignore' }); } catch { codexOk = false; }

test('sửa tin thứ 2 rồi gửi lại: Codex còn đúng 2 lượt, lượt 2 là bản đã sửa', { skip: !codexOk && 'không có Codex CLI', timeout: 120000 }, async () => {
  const { startGateway, makeCodexHome, GATEWAY_ENV } = require('./fixtures/mock-gateway');
  const gw = await startGateway();
  Object.assign(process.env, GATEWAY_ENV, { CODEX_HOME: makeCodexHome(gw.url) });
  const { CodexAppServer } = require('../src/codex-server');
  const { ChatEngine } = require('../src/chat');
  const ud = fs.mkdtempSync(path.join(os.tmpdir(), 'vpai-editcx-'));
  const codex = new CodexAppServer(() => 'codex');
  const e = new ChatEngine({ userData: ud, getConfig: () => ({ computerControl: false }), emit: () => {}, defaultDir: () => os.tmpdir(), codex });
  try {
    const t = e.create({ title: 'Thử sửa' });
    t.origin = 'codex'; e.store.save(t); // luôn đi qua Codex (không ⚡ trả lời nhanh)
    for (const q of ['Câu hỏi thứ nhất về bảng kế hoạch', 'Câu hỏi thứ hai', 'Câu hỏi thứ ba']) {
      const r = await e.send(t.id, { text: q, model: 'gpt-6.1-sol' });
      assert.ok(!r || !r.error, 'gửi được: ' + (r && r.error));
    }
    let nt = e.store.get(t.id);
    const viaCodex = nt.messages.filter((m) => m.role === 'assistant' && !m.fast).length;
    await e.edit(t.id, 2, { text: 'Câu hỏi thứ hai đã sửa', model: 'gpt-6.1-sol' });
    nt = e.store.get(t.id);
    assert.deepEqual(nt.messages.filter((m) => m.role === 'user').map((m) => m.text), ['Câu hỏi thứ nhất về bảng kế hoạch', 'Câu hỏi thứ hai đã sửa']);
    assert.equal(nt.messages[nt.messages.length - 1].status, 'done');
    assert.ok(viaCodex >= 3 && nt.codexThread, 'các lượt đi qua Codex');
    {
      const th = await codex.readThread(nt.codexThread);
      const users = th.turns.map((x) => (x.items || []).filter((i) => i.type === 'userMessage').map((i) => i.content.map((c) => c.text || '').join(' ')).join(' '));
      assert.ok(!users.some((u) => /thứ ba/.test(u)), 'lượt cũ phía sau đã bị cắt khỏi Codex');
      assert.ok(/đã sửa/.test(users[users.length - 1]), 'lượt mới là bản đã sửa');
    }
  } finally { codex.stop(); gw.close ? gw.close() : gw.server && gw.server.close(); }
});
