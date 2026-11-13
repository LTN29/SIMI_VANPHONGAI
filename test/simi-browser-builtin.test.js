// Trình duyệt SIMI = khung cạnh khung chat: công cụ trình duyệt trùng của simi_browser (mở Chrome SIMI riêng) bị ẩn
// ở mọi nguồn model – Codex (disabled_tools), Claude Code (--disallowedTools), Gemini CLI (excludeTools), model API (lọc danh sách).
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('fs');
const os = require('os');
const path = require('path');
const xt = require('../src/ext-tools');
const simi = require('../src/simi');

const flat = {
  'mcp_servers.vp_browser.command': 'node', 'mcp_servers.vp_browser.args': ['mcp.js'],
  'mcp_servers.simi_browser.disabled_tools': simi.BROWSER_DUP_TOOLS,
};
const sb = { command: 'node', args: ['browser-mcp.mjs'] };

test('danh sách công cụ trùng gồm đọc trang / thao tác / mở cửa sổ Chrome SIMI, giữ tìm web và tạo ảnh', () => {
  for (const t of ['browser_read_pages', 'browser_open_window', 'browser_snapshot', 'browser_act', 'browser_screenshot']) assert.ok(simi.BROWSER_DUP_TOOLS.includes(t), t);
  for (const t of ['web_search', 'web_fetch', 'image_generate', 'document_read']) assert.ok(!simi.BROWSER_DUP_TOOLS.includes(t), t);
});

test('mcpServers: simi_browser lấy lệnh từ config.toml, kèm danh sách công cụ ẩn từ cấu hình phiên', () => {
  const s = xt.mcpServers(flat, sb, 'simi_browser');
  assert.equal(s.simi_browser.command, 'node');
  assert.deepEqual(s.simi_browser.disabled, simi.BROWSER_DUP_TOOLS);
  assert.ok(s.vp_browser.command);
  // chỉ có disabled_tools mà máy không cài simi_browser → không tạo server rỗng
  assert.equal(xt.mcpServers(flat, null, 'simi_browser').simi_browser, undefined);
});

test('Claude Code: --disallowedTools chặn đúng công cụ trùng của simi_browser', () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'vpai-sbb-'));
  const r = xt.claudeArgs({ servers: xt.mcpServers(flat, sb, 'simi_browser'), dataDir: dir });
  const i = r.args.indexOf('--disallowedTools');
  assert.ok(i > 0);
  assert.ok(r.args[i + 1].split(' ').includes('mcp__simi_browser__browser_read_pages'));
  assert.ok(!r.args[i + 1].includes('web_search'));
});

test('Gemini CLI: excludeTools trong file cấu hình MCP', () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'vpai-sbb-'));
  const r = xt.geminiSetup({ servers: xt.mcpServers(flat, sb, 'simi_browser'), dataDir: dir });
  const cfg = JSON.parse(fs.readFileSync(r.env.GEMINI_CLI_SYSTEM_SETTINGS_PATH, 'utf8'));
  assert.deepEqual(cfg.mcpServers.simi_browser.excludeTools, simi.BROWSER_DUP_TOOLS);
  assert.equal(cfg.mcpServers.vp_browser.excludeTools, undefined);
});
