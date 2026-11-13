// Công cụ + skill SIMI cho model của tài khoản riêng (không chạy qua Codex):
//  - Claude Code, Gemini CLI: tự có vòng lặp công cụ → chỉ cần đưa cấu hình MCP + quyền (không hỏi quyền được ở chế độ 1 lượt)
//  - Claude API, OpenAI API, Gemini API, Ollama: app tự chạy vòng lặp gọi công cụ (model xin gọi → app gọi MCP → trả kết quả)
// Mọi nguồn dùng chung 1 bộ MCP (vp_browser, vp_computer, simi_browser) và 1 bản hướng dẫn như model SIMI.
const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');
const { fetchJson } = require('./sys');

// biến môi trường SIMI mà MCP simi_browser cần; chỉ ghi THAM CHIẾU ${TÊN} vào file cấu hình, không ghi giá trị (key không nằm trên đĩa)
const SIMI_ENV = ['LTN_TEAM_API_KEY', 'LTN_CLIENT_ID', 'LTN_BROWSER_BRIDGE_TOKEN', 'LTN_BROWSER_NODE_PATH', 'LTN_NODE_PATH', 'LTN_PYTHON_PATH', 'CODEX_HOME'];
const envRefs = () => Object.fromEntries(SIMI_ENV.filter((n) => process.env[n]).map((n) => [n, '${' + n + '}']));

// cấu hình Codex dạng "mcp_servers.<tên>.<khoá>" + MCP simi_browser trong config.toml → { tên: { command, args, env } }
function mcpServers(flat = {}, simiBrowser = null, simiName = 'simi_browser') {
  const servers = {};
  for (const [k, v] of Object.entries(flat || {})) {
    const m = k.match(/^mcp_servers\.([^.]+)\.(command|args|env|url|http_headers|disabled_tools)$/);
    if (m) (servers[m[1]] = servers[m[1]] || {})[{ http_headers: 'headers', disabled_tools: 'disabled' }[m[2]] || m[2]] = v;
  }
  // simi_browser từ config.toml; cấu hình phiên có thể chỉ thêm disabled_tools (ẩn công cụ trùng Trình duyệt SIMI cạnh chat)
  if (simiBrowser && simiBrowser.command && !(servers[simiName] && servers[simiName].command)) servers[simiName] = { ...(servers[simiName] || {}), command: simiBrowser.command, args: simiBrowser.args || [], simi: true };
  for (const n of Object.keys(servers)) if (!servers[n].command && !servers[n].url) delete servers[n];
  return servers;
}

// MCP qua HTTP (kết nối như GitHub): token không ghi ra file cấu hình – file chỉ chứa ${VP_TOK_<TÊN>}, giá trị đưa qua biến môi trường
const tokEnv = (name) => 'VP_TOK_' + String(name).toUpperCase().replace(/[^A-Z0-9]/g, '_');
function httpEntry(name, s, style) {
  const headers = {}; const env = {};
  for (const [h, v] of Object.entries(s.headers || {})) { const e = tokEnv(name) + (h === 'Authorization' ? '' : '_' + h.toUpperCase().replace(/[^A-Z0-9]/g, '_')); env[e] = String(v); headers[h] = '${' + e + '}'; }
  const entry = style === 'gemini' ? { httpUrl: s.url, headers } : { type: 'http', url: s.url, headers };
  return { entry, env };
}

const writeJson = (file, data) => { fs.mkdirSync(path.dirname(file), { recursive: true }); fs.writeFileSync(file, JSON.stringify(data, null, 2), 'utf8'); };
const fileServers = (servers, extra = {}, hideKey = '') => Object.fromEntries(Object.entries(servers).map(([n, s]) => [n, {
  command: s.command, args: s.args || [], ...((s.env || s.simi) ? { env: { ...(s.simi ? envRefs() : {}), ...(s.env || {}) } } : {}), ...extra,
  ...(hideKey && Array.isArray(s.disabled) && s.disabled.length ? { [hideKey]: s.disabled } : {}),
}]));
// công cụ bị ẩn của từng server (disabled_tools) → tên đầy đủ kiểu Claude Code
const hiddenTools = (servers) => Object.entries(servers).flatMap(([n, s]) => (Array.isArray(s.disabled) ? s.disabled : []).map((t) => `mcp__${n}__${t}`));

// ---------- Claude Code ----------
// sandbox của đoạn chat → quyền cấp sẵn (claude -p không hỏi quyền được: thiếu quyền là công cụ bị chặn)
function claudeArgs({ servers, sandbox = 'workspace-write', dataDir, addDirs = [] }) {
  const args = []; const env = {}; const names = Object.keys(servers);
  if (names.length) {
    try {
      const file = path.join(dataDir, 'claude-mcp.json');
      const stdio = Object.fromEntries(Object.entries(servers).filter(([, s]) => s.command));
      const out = Object.fromEntries(Object.entries(fileServers(stdio)).map(([n, s]) => [n, { type: 'stdio', ...s }]));
      for (const [n, s] of Object.entries(servers)) if (!s.command && s.url) { const h = httpEntry(n, s, 'claude'); out[n] = h.entry; Object.assign(env, h.env); }
      writeJson(file, { mcpServers: out });
      args.push('--mcp-config', file);
    } catch { /* không ghi được → chạy không MCP */ }
  }
  const withMcp = args.length > 0;
  const allow = ['Read', 'Glob', 'Grep', 'WebSearch', 'WebFetch', 'TodoWrite', ...(withMcp ? names.map((n) => 'mcp__' + n) : [])]; // mcp__<server> = mọi công cụ của server đó
  if (sandbox !== 'read-only') allow.push('Edit', 'MultiEdit', 'Write', 'NotebookEdit', 'Bash');
  const mode = sandbox === 'danger-full-access' ? 'bypassPermissions' : sandbox === 'read-only' ? 'default' : 'acceptEdits';
  args.push('--permission-mode', mode, '--allowedTools', allow.join(' '));
  const deny = withMcp ? hiddenTools(servers) : [];
  if (deny.length) args.push('--disallowedTools', deny.join(' '));
  for (const d of addDirs) if (fs.existsSync(d)) args.push('--add-dir', d);
  return { args, env, servers: withMcp ? names : [] };
}

// ---------- Gemini CLI ----------
// MCP đưa qua file "system settings" riêng của app (GEMINI_CLI_SYSTEM_SETTINGS_PATH) → không sửa ~/.gemini/settings.json của người dùng
function geminiSetup({ servers, sandbox = 'workspace-write', dataDir, addDirs = [] }) {
  const args = []; const env = {}; const names = Object.keys(servers);
  if (names.length) {
    try {
      const file = path.join(dataDir, 'gemini-settings.json');
      const stdio = Object.fromEntries(Object.entries(servers).filter(([, s]) => s.command));
      const out = fileServers(stdio, { trust: true, timeout: 600000 }, 'excludeTools');
      for (const [n, s] of Object.entries(servers)) if (!s.command && s.url) { const h = httpEntry(n, s, 'gemini'); out[n] = { ...h.entry, trust: true, timeout: 600000 }; Object.assign(env, h.env); }
      writeJson(file, { mcpServers: out });
      env.GEMINI_CLI_SYSTEM_SETTINGS_PATH = file;
    } catch { /* không ghi được → chạy không MCP */ }
  }
  args.push('--approval-mode', sandbox === 'danger-full-access' ? 'yolo' : sandbox === 'read-only' ? 'default' : 'auto_edit');
  const dirs = addDirs.filter((d) => fs.existsSync(d));
  if (dirs.length) args.push('--include-directories', dirs.join(','));
  return { args, env, servers: env.GEMINI_CLI_SYSTEM_SETTINGS_PATH ? names : [] };
}

// ---------- MCP client tối giản (stdio, mỗi dòng 1 thông điệp JSON-RPC) ----------
class McpClient {
  // exactEnv: chỉ dùng đúng env được đưa (như Codex chạy MCP với môi trường đã lọc) – để kiểm tra MCP có tự chạy được không
  constructor(name, { command, args = [], env = {}, exactEnv = false }) {
    this.name = name; this.seq = 0; this.wait = new Map(); this.buf = ''; this.dead = '';
    this.child = spawn(command, args, { env: exactEnv ? { ...env } : { ...process.env, ...env }, windowsHide: true, stdio: ['pipe', 'pipe', 'ignore'] });
    const fail = (why) => { this.dead = why; for (const w of this.wait.values()) w.reject(new Error(why)); this.wait.clear(); };
    this.child.on('error', (e) => fail(`Không chạy được công cụ ${name}: ${e.message}`));
    this.child.on('close', () => fail(`Công cụ ${name} đã dừng`));
    this.child.stdin.on('error', () => {});
    this.child.stdout.on('data', (d) => {
      this.buf += d.toString('utf8');
      let i;
      while ((i = this.buf.indexOf('\n')) >= 0) {
        const line = this.buf.slice(0, i).trim(); this.buf = this.buf.slice(i + 1);
        if (!line) continue;
        let m; try { m = JSON.parse(line); } catch { continue; }
        const w = m && this.wait.get(m.id);
        if (!w) continue;
        this.wait.delete(m.id);
        if (m.error) w.reject(new Error(m.error.message || JSON.stringify(m.error))); else w.resolve(m.result);
      }
    });
  }

  request(method, params, timeoutMs = 30000) {
    if (this.dead) return Promise.reject(new Error(this.dead));
    const id = ++this.seq;
    return new Promise((resolve, reject) => {
      const timer = setTimeout(() => { this.wait.delete(id); reject(new Error(`Công cụ ${this.name} không trả lời (quá ${Math.round(timeoutMs / 1000)} giây)`)); }, timeoutMs);
      this.wait.set(id, { resolve: (v) => { clearTimeout(timer); resolve(v); }, reject: (e) => { clearTimeout(timer); reject(e); } });
      this.child.stdin.write(JSON.stringify({ jsonrpc: '2.0', id, method, params }) + '\n');
    });
  }

  async init() {
    await this.request('initialize', { protocolVersion: '2024-11-05', capabilities: {}, clientInfo: { name: 'vanphong-ai', version: '1' } }, 20000);
    this.child.stdin.write(JSON.stringify({ jsonrpc: '2.0', method: 'notifications/initialized' }) + '\n');
    return ((await this.request('tools/list', {}, 20000)) || {}).tools || [];
  }

  call(tool, args, timeoutMs = 600000) { return this.request('tools/call', { name: tool, arguments: args || {} }, timeoutMs); }
  close() { try { this.child.kill(); } catch { /* đã dừng */ } }
}

// ---------- MCP client qua HTTP (Streamable HTTP: POST JSON-RPC, trả JSON hoặc luồng SSE) ----------
class McpHttpClient {
  constructor(name, { url, headers = {} }) { this.name = name; this.url = url; this.headers = headers; this.seq = 0; this.session = ''; this.proto = ''; this.ctrls = new Set(); }

  async _post(body, timeoutMs, wantId) {
    const ac = new AbortController(); this.ctrls.add(ac);
    const timer = setTimeout(() => ac.abort(), timeoutMs);
    try {
      const res = await fetch(this.url, {
        method: 'POST', signal: ac.signal,
        headers: { 'Content-Type': 'application/json', Accept: 'application/json, text/event-stream', ...this.headers, ...(this.session ? { 'Mcp-Session-Id': this.session } : {}), ...(this.proto ? { 'MCP-Protocol-Version': this.proto } : {}) },
        body: JSON.stringify(body),
      });
      const sid = res.headers.get('mcp-session-id'); if (sid) this.session = sid;
      if (!res.ok) { const t = await res.text().catch(() => ''); throw new Error(`Công cụ ${this.name}: HTTP ${res.status}${t ? ' – ' + t.slice(0, 200) : ''}`); }
      if (wantId == null) return null;
      const type = res.headers.get('content-type') || '';
      let msg = null;
      if (type.includes('text/event-stream')) {
        // đọc luồng SSE tới khi gặp câu trả lời đúng id
        const reader = res.body.getReader(); const dec = new TextDecoder(); let buf = '';
        while (!msg) {
          const { value, done } = await reader.read(); if (done) break;
          buf += dec.decode(value, { stream: true });
          let i;
          while (!msg && (i = buf.indexOf('\n\n')) >= 0) {
            const ev = buf.slice(0, i); buf = buf.slice(i + 2);
            const data = ev.split(/\r?\n/).filter((l) => l.startsWith('data:')).map((l) => l.slice(5).trimStart()).join('\n');
            if (!data) continue;
            try { const m = JSON.parse(data); if (m && m.id === wantId) msg = m; } catch { /* bỏ dòng hỏng */ }
          }
        }
        try { reader.cancel(); } catch { /* đã đóng */ }
      } else {
        const m = await res.json();
        msg = Array.isArray(m) ? m.find((x) => x && x.id === wantId) : m;
      }
      if (!msg) throw new Error(`Công cụ ${this.name} không trả kết quả`);
      if (msg.error) throw new Error(msg.error.message || JSON.stringify(msg.error));
      return msg.result;
    } catch (e) {
      if (e.name === 'AbortError') throw new Error(`Công cụ ${this.name} không trả lời (quá ${Math.round(timeoutMs / 1000)} giây)`);
      throw e;
    } finally { clearTimeout(timer); this.ctrls.delete(ac); }
  }

  request(method, params, timeoutMs = 30000) { const id = ++this.seq; return this._post({ jsonrpc: '2.0', id, method, params }, timeoutMs, id); }

  async init() {
    const r = await this.request('initialize', { protocolVersion: '2025-03-26', capabilities: {}, clientInfo: { name: 'vanphong-ai', version: '1' } }, 20000);
    this.proto = (r && r.protocolVersion) || '2025-03-26';
    await this._post({ jsonrpc: '2.0', method: 'notifications/initialized' }, 10000, null).catch(() => {});
    const out = []; let cursor;
    do {
      const page = (await this.request('tools/list', cursor ? { cursor } : {}, 20000)) || {};
      out.push(...(page.tools || [])); cursor = page.nextCursor;
    } while (cursor && out.length < 500);
    return out;
  }

  call(tool, args, timeoutMs = 600000) { return this.request('tools/call', { name: tool, arguments: args || {} }, timeoutMs); }
  close() { for (const c of this.ctrls) c.abort(); }
}
// stdio (có command) hay HTTP (có url)
McpClient.create = (name, s) => (s && s.url && !s.command ? new McpHttpClient(name, s) : new McpClient(name, s));

// ---------- công cụ file có sẵn (model API không có Read / Write như Claude Code) ----------
const under = (base, p) => { const r = path.resolve(p); const b = path.resolve(base); return r === b || r.startsWith(b + path.sep); };
function localTools({ workDir, sandbox, writeDirs = [] }) {
  const abs = (p) => (path.isAbsolute(String(p || '')) ? path.resolve(String(p)) : path.resolve(workDir, String(p || '')));
  const tools = [
    { name: 'read_file', description: 'Đọc 1 file chữ trên máy (txt, md, csv, json, mã nguồn, SKILL.md của skill). Đường dẫn tuyệt đối hoặc tương đối với thư mục làm việc. File Word / Excel / PDF / ảnh: dùng công cụ khác, không đọc bằng công cụ này.',
      inputSchema: { type: 'object', properties: { path: { type: 'string' }, max_chars: { type: 'integer' } }, required: ['path'] },
      run: ({ path: p, max_chars: mc }) => {
        const f = abs(p); const buf = fs.readFileSync(f);
        if (buf.subarray(0, 4000).includes(0)) throw new Error('File nhị phân, không đọc thành chữ được: ' + f);
        const max = Math.max(1000, Math.min(200000, Number(mc) || 60000)); const txt = buf.toString('utf8');
        return txt.length > max ? txt.slice(0, max) + `\n\n[…đã cắt, file dài ${txt.length} ký tự]` : txt;
      } },
    { name: 'list_dir', description: 'Liệt kê file / thư mục con của 1 thư mục trên máy.',
      inputSchema: { type: 'object', properties: { path: { type: 'string' } } },
      run: ({ path: p }) => fs.readdirSync(abs(p || '.'), { withFileTypes: true }).slice(0, 400).map((d) => (d.isDirectory() ? d.name + '/' : d.name)).join('\n') || '(thư mục trống)' },
  ];
  if (sandbox !== 'read-only') {
    tools.push({ name: 'write_file', description: 'Ghi 1 file chữ (UTF-8) vào thư mục làm việc: md, txt, csv, json, html, mã nguồn. Tài liệu Word / Excel / PDF: dùng document_create.',
      inputSchema: { type: 'object', properties: { path: { type: 'string' }, content: { type: 'string' } }, required: ['path', 'content'] },
      run: ({ path: p, content }) => {
        const f = abs(p);
        if (sandbox !== 'danger-full-access' && ![workDir, ...writeDirs].some((d) => under(d, f))) throw new Error('Chỉ được ghi trong thư mục làm việc: ' + workDir);
        fs.mkdirSync(path.dirname(f), { recursive: true });
        // CSV mở bằng Excel cần BOM mới hiện đúng tiếng Việt
        fs.writeFileSync(f, (/\.csv$/i.test(f) && !String(content).startsWith('﻿') ? '﻿' : '') + String(content), 'utf8');
        return 'Đã lưu: ' + f;
      } });
  }
  return tools;
}

// ---------- vòng lặp công cụ cho model gọi qua API ----------
// JSON Schema của MCP → phần mà Gemini nhận (bỏ additionalProperties, default, minItems…)
function geminiSchema(s) {
  if (!s || typeof s !== 'object') return undefined;
  const out = {};
  const type = Array.isArray(s.type) ? s.type.find((x) => x !== 'null') : s.type;
  if (type) out.type = type;
  if (s.description) out.description = String(s.description);
  if (Array.isArray(s.enum) && s.enum.length && (!type || type === 'string')) { out.type = 'string'; out.enum = s.enum.map(String); }
  if (s.items) out.items = geminiSchema(s.items) || { type: 'string' };
  else if (type === 'array') out.items = { type: 'string' };
  if (s.properties && Object.keys(s.properties).length) {
    out.properties = Object.fromEntries(Object.entries(s.properties).map(([k, v]) => [k, geminiSchema(v) || { type: 'string' }]));
    if (Array.isArray(s.required)) { const r = s.required.filter((k) => k in out.properties); if (r.length) out.required = r; }
  }
  if (!out.type) out.type = s.properties ? 'object' : 'string';
  return out;
}
const parseArgs = (a) => { if (a && typeof a === 'object') return a; try { return JSON.parse(a || '{}'); } catch { return {}; } };
const hasProps = (s) => !!(s && s.properties && Object.keys(s.properties).length);

// mỗi hãng 1 bộ chuyển: gửi lượt → { text, calls:[{id,name,args}] }, ghép kết quả công cụ vào hội thoại
const ADAPTERS = {
  'anthropic-api': {
    name: 'Claude API', keyName: 'anthropic',
    init: (system, user) => ({ system, messages: [{ role: 'user', content: user }] }),
    async turn(st, { model, key, tools, http }) {
      const d = await http('https://api.anthropic.com/v1/messages', { model, max_tokens: 8192, system: st.system, messages: st.messages,
        ...(tools.length ? { tools: tools.map((t) => ({ name: t.id, description: t.description, input_schema: t.inputSchema || { type: 'object', properties: {} } })) } : {}) },
      { 'x-api-key': key, 'anthropic-version': '2023-06-01' });
      const content = d.content || [];
      st.messages.push({ role: 'assistant', content });
      return { text: content.filter((b) => b.type === 'text').map((b) => b.text).join('\n'), calls: content.filter((b) => b.type === 'tool_use').map((b) => ({ id: b.id, name: b.name, args: b.input || {} })) };
    },
    results(st, rs) {
      st.messages.push({ role: 'user', content: rs.map((r) => ({ type: 'tool_result', tool_use_id: r.id, is_error: !!r.error,
        content: [{ type: 'text', text: r.text || '(xong)' }, ...r.images.map((i) => ({ type: 'image', source: { type: 'base64', media_type: i.mimeType || 'image/png', data: i.data } }))] })) });
    },
  },
  'openai-api': {
    name: 'OpenAI API', keyName: 'openai',
    init: (system, user) => ({ messages: [{ role: 'system', content: system }, { role: 'user', content: user }] }),
    async turn(st, { model, key, tools, http }) {
      const d = await http('https://api.openai.com/v1/chat/completions', { model, messages: st.messages,
        ...(tools.length ? { tools: tools.map((t) => ({ type: 'function', function: { name: t.id, description: t.description, parameters: t.inputSchema || { type: 'object', properties: {} } } })) } : {}) },
      { authorization: `Bearer ${key}` });
      const m = (d.choices && d.choices[0] && d.choices[0].message) || {};
      st.messages.push(m);
      return { text: m.content || '', calls: (m.tool_calls || []).map((c) => ({ id: c.id, name: c.function.name, args: parseArgs(c.function.arguments) })) };
    },
    results(st, rs) { for (const r of rs) st.messages.push({ role: 'tool', tool_call_id: r.id, content: r.text || '(xong)' }); },
  },
  'gemini-api': {
    name: 'Gemini API', keyName: 'gemini',
    init: (system, user) => ({ system, contents: [{ role: 'user', parts: [{ text: user }] }] }),
    async turn(st, { model, key, tools, http }) {
      const d = await http(`https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent`,
        { systemInstruction: { parts: [{ text: st.system }] }, contents: st.contents,
          ...(tools.length ? { tools: [{ functionDeclarations: tools.map((t) => ({ name: t.id, description: t.description, ...(hasProps(t.inputSchema) ? { parameters: geminiSchema(t.inputSchema) } : {}) })) }] } : {}) },
        { 'x-goog-api-key': key });
      const parts = (d.candidates && d.candidates[0] && d.candidates[0].content && d.candidates[0].content.parts) || [];
      st.contents.push({ role: 'model', parts }); // giữ nguyên (kể cả thoughtSignature) để gửi lại
      return { text: parts.filter((p) => p.text && !p.thought).map((p) => p.text).join(''), calls: parts.filter((p) => p.functionCall).map((p, i) => ({ id: 'g' + i, name: p.functionCall.name, args: p.functionCall.args || {} })) };
    },
    results(st, rs) {
      st.contents.push({ role: 'user', parts: rs.map((r) => ({ functionResponse: { name: r.name, response: r.error ? { error: r.text } : { result: r.text || '(xong)' } } })) });
    },
  },
  ollama: {
    name: 'Ollama', keyName: '',
    init: (system, user) => ({ messages: [{ role: 'system', content: system }, { role: 'user', content: user }] }),
    async turn(st, { model, tools, http, base }) {
      const d = await http(`${base}/api/chat`, { model, stream: false, messages: st.messages,
        ...(tools.length ? { tools: tools.map((t) => ({ type: 'function', function: { name: t.id, description: t.description, parameters: t.inputSchema || { type: 'object', properties: {} } } })) } : {}) }, {});
      const m = d.message || {};
      st.messages.push(m);
      return { text: m.content || '', calls: (m.tool_calls || []).map((c, i) => ({ id: 'o' + i, name: c.function.name, args: parseArgs(c.function.arguments) })) };
    },
    results(st, rs) { for (const r of rs) st.messages.push({ role: 'tool', tool_name: r.name, content: r.text || '(xong)' }); },
  },
};

const NO_TOOLS = /does not support tools|tools? (is|are) not supported|unsupported.*tool|unknown (field|name).*tools|tool use is not supported/i;
const MAX_STEPS = 40;
const MAX_RESULT = 40000;

// Chạy 1 lượt chat có công cụ. onStep({ id, server, tool, arguments, status, result, error }) báo tiến độ cho giao diện.
async function runApiTools({ source, model, system, user, servers = {}, sandbox = 'workspace-write', workDir, writeDirs = [], config = {}, getSecret = () => '', signal, onStep = () => {} }) {
  const ad = ADAPTERS[source];
  if (!ad) throw new Error('Nguồn không hỗ trợ công cụ: ' + source);
  const key = ad.keyName ? getSecret(ad.keyName) : '';
  if (ad.keyName && !key) throw new Error('Chưa nhập API key (vào Kết nối → API key)');
  if (!model) throw new Error(source === 'ollama' ? 'Chưa nhập tên model Ollama' : 'Chưa nhập tên model');
  const timeoutMs = Math.max(Number(config.timeoutSec) || 0, 600) * 1000;
  const http = (url, body, headers) => fetchJson(url, { method: 'POST', body, headers, name: ad.name, signal, timeoutMs });
  const base = String(config.ollamaUrl || 'http://127.0.0.1:11434').replace(/\/$/, '');

  const clients = []; let tools = [];
  for (const t of localTools({ workDir, sandbox, writeDirs })) tools.push({ id: t.name, server: '', tool: t.name, description: t.description, inputSchema: t.inputSchema, run: t.run });
  // khởi động các MCP cùng lúc; MCP nào hỏng thì bỏ qua, các công cụ khác vẫn dùng được
  await Promise.all(Object.entries(servers).map(async ([name, s]) => {
    const c = McpClient.create(name, s); clients.push(c);
    try {
      const hide = new Set(Array.isArray(s.disabled) ? s.disabled : []);
      for (const t of (await c.init()).filter((x) => !hide.has(x.name))) tools.push({ id: `${name}__${t.name}`.replace(/[^A-Za-z0-9_-]/g, '_').slice(0, 64), server: name, tool: t.name, description: String(t.description || t.title || t.name).slice(0, 1000), inputSchema: t.inputSchema, client: c });
    } catch { /* MCP không khởi động được */ }
  }));
  const byId = new Map(tools.map((t) => [t.id, t]));
  const used = new Set();
  try {
    const st = ad.init(system, user);
    let text = '';
    for (let step = 0; step < MAX_STEPS; step += 1) {
      if (signal && signal.aborted) throw new Error('Đã dừng');
      let r;
      try { r = await ad.turn(st, { model, key, tools, http, base }); } catch (e) {
        // model không biết gọi công cụ (hay gặp với model Ollama nhỏ) → trò chuyện thường như trước
        if (step === 0 && tools.length && NO_TOOLS.test(e.message || '')) { tools = []; step -= 1; continue; }
        throw e;
      }
      if (r.text) text = r.text;
      if (!r.calls.length) return { text, servers: [...used] };
      const results = [];
      for (const c of r.calls) {
        if (signal && signal.aborted) throw new Error('Đã dừng');
        const t = byId.get(c.name);
        const item = { id: `x${step}-${results.length}`, server: t ? t.server : '', tool: t ? t.tool : c.name, arguments: c.args, status: 'inProgress' };
        onStep(item);
        const res = { id: c.id, name: c.name, text: '', images: [], error: false };
        try {
          if (!t) throw new Error('Không có công cụ tên ' + c.name);
          if (t.run) { res.text = String(t.run(c.args || {})); item.result = { content: [{ type: 'text', text: res.text }] }; } else {
            used.add(t.server);
            const out = await t.client.call(t.tool, c.args) || {};
            const content = out.content || [];
            res.text = content.filter((x) => x.type === 'text').map((x) => x.text).join('\n');
            res.images = content.filter((x) => x.type === 'image' && x.data).slice(-1);
            res.error = !!out.isError; item.result = out;
          }
        } catch (e) { res.error = true; res.text = 'Lỗi: ' + (e.message || String(e)); item.error = { message: e.message || String(e) }; }
        if (res.text.length > MAX_RESULT) res.text = res.text.slice(0, MAX_RESULT) + '\n[…đã cắt bớt]';
        item.status = res.error ? 'failed' : 'completed';
        onStep(item);
        results.push(res);
      }
      ad.results(st, results);
    }
    return { text: text || 'Đã dừng vì quá nhiều bước công cụ – nhắn "tiếp tục" để làm tiếp.', servers: [...used] };
  } finally { for (const c of clients) c.close(); }
}

const API_TOOL_SOURCES = new Set(Object.keys(ADAPTERS));

module.exports = { mcpServers, claudeArgs, geminiSetup, runApiTools, McpClient, McpHttpClient, geminiSchema, API_TOOL_SOURCES, SIMI_ENV };
