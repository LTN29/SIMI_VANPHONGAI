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
  assert.match(prompt, /mcp__vp_browser__/);
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
