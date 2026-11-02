// Hỏi quyền chạy lệnh trong tab Chat: "Luôn cho phép trong đoạn chat này" nhớ theo chương trình (node, python…),
// "Luôn cho phép, không hỏi nữa" chuyển đoạn chat sang Tự cho phép mọi lệnh – từ đó không hỏi lệnh / sửa file / thêm quyền.
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('fs');
const os = require('os');
const path = require('path');
const { ChatEngine, cmdProgram, askKey } = require('../src/chat');

const PS = String.raw`"C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -NoProfile -Command "& 'C:\\Users\\Admin\\.cache\\codex-runtimes\\codex-primary-runtime\\dependencies\\node\\bin\\node.exe' build_attendance.mjs"`;
const PS2 = String.raw`C:\Windows\System32\WindowsPowerShell\v1.0\powershell.exe -NoProfile -Command "& 'C:\Users\Admin\.cache\node\bin\node.exe' 'C:\x\mark.mjs' --kind create; if ($LASTEXITCODE -eq 0) { & 'node.exe' b.mjs }"`;

test('chương trình chính của lệnh (bỏ lớp powershell / bash bọc ngoài)', () => {
  assert.equal(cmdProgram(PS), 'node');
  assert.equal(cmdProgram(PS2), 'node');
  assert.equal(cmdProgram("/bin/bash -lc 'python3 make.py --out a.xlsx'"), 'python3');
  assert.equal(cmdProgram('git status'), 'git');
  assert.equal(cmdProgram('"C:\\Program Files\\Git\\bin\\git.exe" log'), 'git');
  assert.equal(askKey('item/commandExecution/requestApproval', { command: PS }), askKey('item/commandExecution/requestApproval', { command: PS2 }));
  assert.equal(askKey('item/commandExecution/requestApproval', { networkApprovalContext: { host: 'ai.simi.vn' }, command: PS }), 'net:ai.simi.vn');
});

function engine() {
  const ud = fs.mkdtempSync(path.join(os.tmpdir(), 'vpai-chat-'));
  const sent = []; const events = [];
  const codex = { respond: (id, r) => sent.push([id, r]), respondError: (id, m) => sent.push([id, { error: m }]), on() {}, onNotify() {}, onRequest() {} };
  const e = new ChatEngine({ userData: ud, getConfig: () => ({}), emit: (x) => events.push(x), defaultDir: () => ud, codex });
  const t = e.create({ title: 'Chấm công' });
  const run = { codexId: 'cx1', threadId: t.id, title: t.title, t: e.store.get(t.id), msg: { blocks: [] }, emitBlocks() {} };
  e.running.set(t.id, run);
  const ask = (n, method, params) => e._onServerRequest({ id: n, method, params: { threadId: 'cx1', ...params } });
  const live = () => run.msg.blocks.filter((b) => b.kind === 'ask' && !b.answer);
  return { e, t, run, sent, events, ask, live };
}

test('"Luôn cho phép lệnh node trong đoạn chat này" → lệnh node khác không hỏi lại', () => {
  const { e, t, sent, ask, live } = engine();
  ask(1, 'item/commandExecution/requestApproval', { command: PS2 });
  const b = live()[0];
  assert.ok(b.options.some((o) => o.id === 'all'), 'có nút "Luôn cho phép, không hỏi nữa"');
  const sess = b.options.find((o) => o.id === 'session');
  assert.match(sess.label, /lệnh node/);
  e.answer(t.id, b.id, 'session');
  assert.deepEqual(sent.pop(), [1, { decision: 'acceptForSession' }]);
  ask(2, 'item/commandExecution/requestApproval', { command: PS });
  assert.deepEqual(sent.pop(), [2, { decision: 'acceptForSession' }], 'không hỏi lại lệnh node');
  assert.equal(live().length, 0);
  ask(3, 'item/commandExecution/requestApproval', { command: 'python3 x.py' });
  assert.equal(live().length, 1, 'chương trình khác vẫn hỏi');
});

test('"Luôn cho phép, không hỏi nữa" → đoạn chat Tự cho phép mọi lệnh, không hỏi lệnh / sửa file / quyền', () => {
  const { e, t, sent, events, ask, live } = engine();
  ask(1, 'item/commandExecution/requestApproval', { command: PS });
  ask(2, 'item/fileChange/requestApproval', { grantRoot: 'D:\\BaoCao' }); // đang chờ cùng lúc
  e.answer(t.id, live()[0].id, 'all');
  assert.equal(e.store.get(t.id).sandbox, 'danger-full-access');
  assert.ok(events.some((x) => x.type === 'chat-sandbox' && x.sandbox === 'danger-full-access'));
  assert.deepEqual(sent.map((x) => x[0]).sort(), [1, 2], 'câu đang chờ cũng được đồng ý');
  assert.equal(live().length, 0);
  sent.length = 0;
  ask(3, 'item/commandExecution/requestApproval', { command: 'python3 x.py' });
  ask(4, 'item/permissions/requestApproval', { permissions: { network: { enabled: true } } });
  assert.deepEqual(sent, [[3, { decision: 'acceptForSession' }], [4, { permissions: { network: { enabled: true } }, scope: 'session' }]]);
  assert.equal(live().length, 0);
  // điều khiển chuột / bàn phím vẫn hỏi
  ask(5, 'mcpServer/elicitation/request', { serverName: 'vp_computer', message: 'Allow tool "click"?', _meta: { codex_approval_kind: 'mcp_tool_call', tool_params_display: [] } });
  assert.equal(live().length, 1);
});

test('đổi ô quyền sang "Tự cho phép mọi lệnh" trong lúc AI đang chạy → áp dụng ngay', () => {
  const { e, t, sent, ask, live } = engine();
  e.update(t.id, { sandbox: 'danger-full-access' });
  ask(1, 'item/commandExecution/requestApproval', { command: 'npm test' });
  assert.deepEqual(sent, [[1, { decision: 'acceptForSession' }]]);
  assert.equal(live().length, 0);
});
