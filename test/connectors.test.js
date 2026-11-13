// 🔌 Kết nối MCP: chuẩn hoá cấu hình, đưa vào Codex / Claude Code / Gemini CLI, client HTTP (JSON và SSE).
const test = require('node:test');
const assert = require('node:assert/strict');
const http = require('http');
const fs = require('fs');
const os = require('os');
const path = require('path');
const conn = require('../src/connectors');
const xt = require('../src/ext-tools');

test('GitHub: cấu hình Codex có url + header Bearer; tắt thì không nạp', () => {
  const gh = conn.normalize({ preset: 'github' });
  assert.equal(gh.id, 'github'); assert.equal(gh.kind, 'http');
  const cfg = conn.codexConfig([gh], (k) => (k === 'conn.github' ? 'ghp_x' : ''));
  assert.equal(cfg['mcp_servers.github.url'], 'https://api.githubcopilot.com/mcp/');
  assert.deepEqual(cfg['mcp_servers.github.http_headers'], { Authorization: 'Bearer ghp_x' });
  assert.deepEqual(conn.codexConfig([{ ...gh, enabled: false }], () => 't'), {});
  assert.throws(() => conn.normalize({ name: 'x', kind: 'http', url: 'http://evil.example/mcp' }), /https/);
  assert.equal(conn.normalize({ name: 'Vp browser', kind: 'stdio', command: 'npx', id: 'vp_browser' }).id, 'u_vp_browser');
});

test('Claude Code / Gemini CLI: token không ghi ra file cấu hình, đi qua biến môi trường', () => {
  const dataDir = fs.mkdtempSync(path.join(os.tmpdir(), 'vpai-conn-'));
  const servers = xt.mcpServers({ 'mcp_servers.github.url': 'https://api.githubcopilot.com/mcp/', 'mcp_servers.github.http_headers': { Authorization: 'Bearer ghp_secret' } });
  const c = xt.claudeArgs({ servers, dataDir });
  const file = JSON.parse(fs.readFileSync(path.join(dataDir, 'claude-mcp.json'), 'utf8'));
  assert.equal(file.mcpServers.github.type, 'http');
  assert.ok(!JSON.stringify(file).includes('ghp_secret'));
  assert.equal(c.env.VP_TOK_GITHUB, 'Bearer ghp_secret');
  const g = xt.geminiSetup({ servers, dataDir });
  const gf = JSON.parse(fs.readFileSync(path.join(dataDir, 'gemini-settings.json'), 'utf8'));
  assert.equal(gf.mcpServers.github.httpUrl, 'https://api.githubcopilot.com/mcp/');
  assert.ok(!JSON.stringify(gf).includes('ghp_secret'));
  assert.equal(g.env.VP_TOK_GITHUB, 'Bearer ghp_secret');
});

function fakeMcp({ sse = false } = {}) {
  const seen = [];
  const srv = http.createServer((req, res) => {
    let body = '';
    req.on('data', (d) => { body += d; });
    req.on('end', () => {
      const m = JSON.parse(body || '{}');
      seen.push({ method: m.method, auth: req.headers.authorization, session: req.headers['mcp-session-id'] });
      if (req.headers.authorization !== 'Bearer good') { res.writeHead(401); res.end('Bad credentials'); return; }
      if (m.id == null) { res.writeHead(202); res.end(); return; }
      const result = m.method === 'initialize' ? { protocolVersion: '2025-03-26', capabilities: { tools: {} }, serverInfo: { name: 'fake' } }
        : m.method === 'tools/list' ? { tools: [{ name: 'list_issues', inputSchema: { type: 'object' } }, { name: 'create_issue', inputSchema: { type: 'object' } }] }
          : { content: [{ type: 'text', text: 'ok:' + m.params.name }] };
      const msg = JSON.stringify({ jsonrpc: '2.0', id: m.id, result });
      const headers = m.method === 'initialize' ? { 'Mcp-Session-Id': 'sess-1' } : {};
      if (sse) { res.writeHead(200, { 'Content-Type': 'text/event-stream', ...headers }); res.write(': ping\n\n'); res.end(`event: message\ndata: ${msg}\n\n`); } else { res.writeHead(200, { 'Content-Type': 'application/json', ...headers }); res.end(msg); }
    });
  });
  return new Promise((r) => srv.listen(0, '127.0.0.1', () => r({ srv, seen, url: `http://127.0.0.1:${srv.address().port}/mcp` })));
}

for (const sse of [false, true]) {
  test(`MCP qua HTTP (${sse ? 'SSE' : 'JSON'}): khởi tạo, giữ phiên, liệt kê & gọi công cụ`, async () => {
    const { srv, seen, url } = await fakeMcp({ sse });
    try {
      const c = xt.McpClient.create('github', { url, headers: { Authorization: 'Bearer good' } });
      const tools = await c.init();
      assert.deepEqual(tools.map((t) => t.name), ['list_issues', 'create_issue']);
      const r = await c.call('list_issues', {});
      assert.equal(r.content[0].text, 'ok:list_issues');
      assert.equal(seen.at(-1).session, 'sess-1', 'gửi lại Mcp-Session-Id');
      const ok = await conn.test({ id: 'x', kind: 'http', url }, 'good');
      assert.equal(ok.ok, true); assert.equal(ok.tools, 2);
      const bad = await conn.test({ id: 'x', kind: 'http', url }, 'wrong');
      assert.equal(bad.ok, false); assert.match(bad.error, /Token không hợp lệ/);
    } finally { srv.close(); }
  });
}
