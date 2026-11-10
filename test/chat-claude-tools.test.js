// Chat bằng model của tài khoản Claude (Claude Code) dùng được công cụ của SIMI như model SIMI:
// MCP trình duyệt cạnh khung chat (vp_browser), Trình duyệt SIMI (simi_browser) và skill SIMI; quyền theo mục "Quyền" của đoạn chat
// (`claude -p` không hỏi quyền được → thiếu quyền là công cụ bị chặn, như lỗi "đang chờ cấp quyền").
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('fs');
const os = require('os');
const path = require('path');
const { EventEmitter } = require('events');

const home = fs.mkdtempSync(path.join(os.tmpdir(), 'vpai-claude-tools-'));
process.env.CODEX_HOME = home;
fs.writeFileSync(path.join(home, 'config.toml'), [
  'model = "cx/gpt-5.6-sol"',
  '[mcp_servers.simi_browser]',
  `command = ${JSON.stringify(process.execPath)}`,
  `args = [${JSON.stringify(path.join(home, 'browser-mcp.mjs'))}]`,
  'startup_timeout_sec = 20',
  '',
].join('\n'));
fs.mkdirSync(path.join(home, 'skills', 'simi-tao-anh'), { recursive: true });
fs.writeFileSync(path.join(home, 'skills', 'simi-tao-anh', 'SKILL.md'), '---\nname: simi-tao-anh\ndescription: Tạo ảnh bằng SIMI\n---\n\nGọi image_generate.\n');

const { ChatEngine } = require('../src/chat');

class IdleCodex extends EventEmitter { async start() { return 1; } async request() { return {}; } }

// Claude Code giả: ghi lại tham số + đề bài, trả lời 1 câu
const bin = fs.mkdtempSync(path.join(os.tmpdir(), 'vpai-claude-bin-'));
const claude = path.join(bin, 'claude');
fs.writeFileSync(claude, '#!/bin/sh\nprintf "%s\\n" "$@" > "$0.args"\ncat > "$0.prompt"\necho "Đã mở trang."\n', { mode: 0o755 });

function setup(sandbox) {
  const ud = fs.mkdtempSync(path.join(os.tmpdir(), 'vpai-claude-ud-'));
  const e = new ChatEngine({
    userData: ud, emit: () => {}, defaultDir: () => ud, codex: new IdleCodex(),
    getConfig: () => ({ cli: { claude: { cmd: claude } }, timeoutSec: 60 }),
    extraConfig: () => ({
      'mcp_servers.vp_browser.command': process.execPath,
      'mcp_servers.vp_browser.args': ['/app/browser/mcp.js'],
      'mcp_servers.vp_browser.env': { ELECTRON_RUN_AS_NODE: '1', VPB_CONN: '/tmp/conn.json' },
      'mcp_servers.vp_browser.tool_timeout_sec': 180,
      'mcp_servers.vp_browser.default_tools_approval_mode': 'approve',
    }),
  });
  const t = e.create({ title: 'Claude', sandbox });
  return { e, t, ud };
}
const argsOf = () => fs.readFileSync(claude + '.args', 'utf8').split('\n');
const after = (a, flag) => a[a.indexOf(flag) + 1];

test('Claude Code nhận MCP vp_browser + simi_browser, skill SIMI và quyền tự chạy (Sửa trong dự án)', { skip: process.platform === 'win32' }, async () => {
  const { e, t, ud } = setup('workspace-write');
  await e.send(t.id, { text: 'Mở trang simi.vn giúp mình', model: 'claude-cli::claude-opus-5-5' });
  const msg = e.store.get(t.id).messages.at(-1);
  assert.equal(msg.status, 'done', msg.error);
  assert.match(msg.blocks[0].text, /Đã mở trang/);
  const a = argsOf();
  assert.equal(after(a, '--model'), 'claude-opus-5-5');
  const file = after(a, '--mcp-config');
  assert.equal(path.dirname(file), ud, 'file cấu hình MCP để trong thư mục dữ liệu app, không lẫn vào file đoạn chat');
  const cfg = JSON.parse(fs.readFileSync(file, 'utf8')).mcpServers;
  assert.deepEqual(Object.keys(cfg).sort(), ['simi_browser', 'vp_browser']);
  assert.equal(cfg.vp_browser.env.VPB_CONN, '/tmp/conn.json');
  assert.deepEqual(cfg.simi_browser.args, [path.join(home, 'browser-mcp.mjs')]);
  assert.equal(cfg.vp_browser.tool_timeout_sec, undefined, 'chỉ chuyển command / args / env sang Claude');
  assert.equal(after(a, '--permission-mode'), 'acceptEdits');
  const allow = after(a, '--allowedTools').split(' ');
  for (const x of ['mcp__vp_browser', 'mcp__simi_browser', 'Read', 'Write', 'Edit', 'Bash']) assert.ok(allow.includes(x), x);
  assert.ok(a.includes(path.join(home, 'skills')), 'được đọc thư mục skill SIMI');
  const prompt = fs.readFileSync(claude + '.prompt', 'utf8');
  assert.match(prompt, /simi-tao-anh: Tạo ảnh bằng SIMI — .*SKILL\.md/);
  assert.match(prompt, /Claude Code, được dùng chung công cụ với model SIMI: MCP vp_browser, MCP simi_browser/);
  assert.match(prompt, /Mở trang simi\.vn giúp mình/);
});

test('quyền "Chỉ đọc" → không cho sửa file / chạy lệnh; "Tự cho phép mọi lệnh" → bypassPermissions', { skip: process.platform === 'win32' }, async () => {
  const r = setup('read-only');
  await r.e.send(r.t.id, { text: 'Đọc trang này', model: 'claude-cli::sonnet' });
  let a = argsOf();
  assert.equal(after(a, '--permission-mode'), 'default');
  const allow = after(a, '--allowedTools').split(' ');
  assert.ok(allow.includes('mcp__vp_browser') && !allow.includes('Bash') && !allow.includes('Write'));
  const f = setup('danger-full-access');
  await f.e.send(f.t.id, { text: 'Làm luôn', model: 'claude-cli::sonnet' });
  a = argsOf();
  assert.equal(after(a, '--permission-mode'), 'bypassPermissions');
});

// ---------- Gemini CLI: MCP qua file settings riêng của app, không sửa ~/.gemini của người dùng ----------
test('Gemini CLI nhận MCP qua GEMINI_CLI_SYSTEM_SETTINGS_PATH, key SIMI chỉ là tham chiếu ${…} (không ghi ra đĩa)', { skip: process.platform === 'win32' }, async () => {
  const gemini = path.join(bin, 'gemini');
  fs.writeFileSync(gemini, '#!/bin/sh\nprintf "%s\\n" "$@" > "$0.args"\nprintf "%s" "$GEMINI_CLI_SYSTEM_SETTINGS_PATH" > "$0.env"\ncat > /dev/null\necho "Xong."\n', { mode: 0o755 });
  process.env.LTN_TEAM_API_KEY = 'sk-bi-mat-123';
  const ud = fs.mkdtempSync(path.join(os.tmpdir(), 'vpai-gemini-ud-'));
  const e = new ChatEngine({ userData: ud, emit: () => {}, defaultDir: () => ud, codex: new IdleCodex(), getConfig: () => ({ cli: { gemini: { cmd: gemini } }, timeoutSec: 60 }),
    extraConfig: () => ({ 'mcp_servers.vp_browser.command': process.execPath, 'mcp_servers.vp_browser.args': ['/app/browser/mcp.js'] }) });
  const t = e.create({ title: 'Gemini', sandbox: 'workspace-write' });
  await e.send(t.id, { text: 'Tìm tin mới', model: 'gemini-cli::gemini-3-pro-preview' });
  delete process.env.LTN_TEAM_API_KEY;
  assert.equal(e.store.get(t.id).messages.at(-1).status, 'done');
  const a = fs.readFileSync(gemini + '.args', 'utf8').split('\n');
  assert.equal(after(a, '--approval-mode'), 'auto_edit');
  assert.ok(after(a, '--include-directories').includes(path.join(home, 'skills')));
  const file = fs.readFileSync(gemini + '.env', 'utf8');
  assert.equal(path.dirname(file), ud);
  const raw = fs.readFileSync(file, 'utf8');
  assert.ok(!raw.includes('sk-bi-mat-123'), 'không ghi key ra file');
  const cfg = JSON.parse(raw).mcpServers;
  assert.equal(cfg.simi_browser.env.LTN_TEAM_API_KEY, '${LTN_TEAM_API_KEY}');
  assert.equal(cfg.vp_browser.trust, true);
});

// ---------- model gọi qua API (Ollama…): app tự chạy vòng lặp công cụ ----------
const http = require('http');
// MCP giả: 1 công cụ browser_open
const fakeMcp = path.join(bin, 'fake-mcp.js');
fs.writeFileSync(fakeMcp, `
const rl = require('readline').createInterface({ input: process.stdin });
const send = (o) => process.stdout.write(JSON.stringify(o) + '\\n');
rl.on('line', (l) => { const m = JSON.parse(l); if (m.id === undefined) return;
  if (m.method === 'initialize') return send({ jsonrpc: '2.0', id: m.id, result: { protocolVersion: '2024-11-05', capabilities: { tools: {} }, serverInfo: { name: 'fake', version: '1' } } });
  if (m.method === 'tools/list') return send({ jsonrpc: '2.0', id: m.id, result: { tools: [{ name: 'browser_open', description: 'Mở trang', inputSchema: { type: 'object', properties: { url: { type: 'string' } }, required: ['url'], additionalProperties: false } }] } });
  if (m.method === 'tools/call') return send({ jsonrpc: '2.0', id: m.id, result: { content: [{ type: 'text', text: 'Đã mở ' + m.params.arguments.url + ' – tiêu đề: SIMI' }] } });
});
`);
function fakeOllama(handler) {
  return new Promise((resolve) => {
    const reqs = [];
    const srv = http.createServer((req, res) => {
      let b = ''; req.on('data', (d) => { b += d; });
      req.on('end', () => { const body = JSON.parse(b || '{}'); reqs.push(body); const out = handler(body, reqs.length); res.writeHead(out.status || 200, { 'content-type': 'application/json' }); res.end(JSON.stringify(out.body)); });
    });
    srv.listen(0, '127.0.0.1', () => resolve({ srv, reqs, url: 'http://127.0.0.1:' + srv.address().port }));
  });
}
function apiEngine(url, events, sandbox = 'workspace-write') {
  const ud = fs.mkdtempSync(path.join(os.tmpdir(), 'vpai-api-ud-'));
  const e = new ChatEngine({ userData: ud, emit: (x) => events.push(x), defaultDir: () => ud, codex: new IdleCodex(), getConfig: () => ({ ollamaUrl: url, timeoutSec: 30 }),
    extraConfig: () => ({ 'mcp_servers.vp_browser.command': process.execPath, 'mcp_servers.vp_browser.args': [fakeMcp] }) });
  return { e, t: e.create({ title: 'Ollama', sandbox }), ud };
}

test('Ollama: model xin gọi công cụ → app gọi MCP + ghi file, trả kết quả cho model, hiện từng bước trong chat', async () => {
  const o = await fakeOllama((body, n) => {
    if (n === 1) return { body: { message: { role: 'assistant', content: '', tool_calls: [{ function: { name: 'vp_browser__browser_open', arguments: { url: 'https://simi.vn' } } }, { function: { name: 'write_file', arguments: { path: 'ghi-chu.md', content: '# SIMI' } } }] } } };
    return { body: { message: { role: 'assistant', content: 'Trang SIMI đã mở, mình đã lưu ghi chú.' } } };
  });
  const events = [];
  const { e, t, ud } = apiEngine(o.url, events);
  try {
    await e.send(t.id, { text: 'Mở simi.vn rồi ghi chú lại', model: 'ollama::qwen3' });
    const msg = e.store.get(t.id).messages.at(-1);
    assert.equal(msg.status, 'done', msg.error);
    assert.match(msg.blocks.at(-1).text, /đã lưu ghi chú/);
    const steps = msg.blocks.filter((b) => b.kind === 'step');
    assert.equal(steps.length, 2);
    assert.ok(steps.every((s) => s.status === 'completed'));
    assert.match(steps[0].title, /Trình duyệt/);
    assert.equal(fs.readFileSync(path.join(ud, 'ghi-chu.md'), 'utf8'), '# SIMI');
    assert.ok(msg.files.some((f) => f.name === 'ghi-chu.md'), 'file vừa tạo hiện thành file kết quả');
    const names = o.reqs[0].tools.map((x) => x.function.name);
    assert.ok(names.includes('vp_browser__browser_open') && names.includes('read_file') && names.includes('write_file'));
    assert.match(o.reqs[0].messages[0].content, /simi-tao-anh: Tạo ảnh bằng SIMI/);
    const toolMsgs = o.reqs[1].messages.filter((m) => m.role === 'tool');
    assert.match(toolMsgs[0].content, /Đã mở https:\/\/simi\.vn/);
    assert.ok(events.some((x) => x.ev === 'blocks'), 'giao diện nhận tiến độ từng bước');
  } finally { o.srv.close(); }
});

test('Ollama: model không biết gọi công cụ → tự chuyển về trò chuyện thường; quyền Chỉ đọc không có write_file', async () => {
  const o = await fakeOllama((body) => (body.tools ? { status: 400, body: { error: 'registry.ollama.ai/library/gemma3 does not support tools' } } : { body: { message: { role: 'assistant', content: 'Chào bạn.' } } }));
  const { e, t } = apiEngine(o.url, [], 'read-only');
  try {
    await e.send(t.id, { text: 'Chào', model: 'ollama::gemma3' });
    const msg = e.store.get(t.id).messages.at(-1);
    assert.equal(msg.status, 'done', msg.error);
    assert.equal(msg.blocks.at(-1).text, 'Chào bạn.');
    assert.ok(!o.reqs[0].tools.some((x) => x.function.name === 'write_file'));
    assert.equal(o.reqs[1].tools, undefined);
  } finally { o.srv.close(); }
});

test('schema công cụ đổi sang dạng Gemini nhận được', () => {
  const { geminiSchema } = require('../src/ext-tools');
  const g = geminiSchema({ type: 'object', additionalProperties: false, properties: { url: { type: 'string', default: 'x' }, n: { type: ['integer', 'null'] }, list: { type: 'array', minItems: 1, items: { type: 'object', properties: { a: { enum: ['x', 'y'] } }, additionalProperties: false } } }, required: ['url', 'khong-co'] });
  assert.deepEqual(g, { type: 'object', properties: { url: { type: 'string' }, n: { type: 'integer' }, list: { type: 'array', items: { type: 'object', properties: { a: { type: 'string', enum: ['x', 'y'] } } } } }, required: ['url'] });
});
