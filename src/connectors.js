// 🔌 Kết nối (MCP) do người dùng thêm: GitHub và MCP tuỳ chỉnh (URL hoặc lệnh).
// Lưu trong config.json (cfg.connectors) – KHÔNG chứa token; token mã hoá trong secrets.bin (khoá "conn.<id>").
// Mỗi phiên chat, kết nối đang bật được nạp thành "mcp_servers.<id>.*" cho Codex; model của tài khoản riêng
// (Claude Code, Gemini CLI, API…) đọc lại cùng cấu hình qua ext-tools.mcpServers.
const { McpClient } = require('./ext-tools');

const PRESETS = {
  github: {
    name: 'GitHub', icon: '🐙', kind: 'http', url: 'https://api.githubcopilot.com/mcp/',
    desc: 'Đọc / tạo issue, pull request, xem code, commit, nhánh và GitHub Actions trên các repo token cho phép.',
    tokenLabel: 'GitHub Personal Access Token',
    tokenHelp: 'https://github.com/settings/personal-access-tokens/new',
    tokenHint: 'Nên dùng "Fine-grained token": chọn đúng repo cần dùng, quyền Contents / Issues / Pull requests theo nhu cầu. Token chỉ lưu trên máy này (mã hoá).',
  },
};

const ID_RE = /^[a-z][a-z0-9_]{1,30}$/;
// tên MCP của app – kết nối của người dùng không được trùng
const RESERVED = new Set(['vp_browser', 'vp_computer', 'simi_browser', 'node_repl', 'computer_use']);

function slug(s) {
  return String(s || '').normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/đ/gi, 'd').toLowerCase()
    .replace(/[^a-z0-9]+/g, '_').replace(/^_+|_+$/g, '').slice(0, 24) || 'mcp';
}

// làm sạch dữ liệu từ giao diện
function normalize(c, existing = []) {
  const preset = c.preset && PRESETS[c.preset] ? c.preset : '';
  const base = preset ? PRESETS[preset] : {};
  const kind = (base.kind || c.kind) === 'stdio' ? 'stdio' : 'http';
  let id = String(c.id || '').trim() || preset || slug(c.name);
  if (!/^[a-z]/.test(id)) id = 'mcp_' + id;
  if (!ID_RE.test(id)) id = 'mcp_' + slug(id);
  if (RESERVED.has(id)) id = 'u_' + id;
  const taken = new Set(existing.filter((x) => x.id !== c.id).map((x) => x.id));
  if (!c.id) { let n = 2; const b = id; while (taken.has(id)) id = `${b}_${n++}`; }
  const out = {
    id, preset, name: String(c.name || base.name || id).slice(0, 40), kind,
    enabled: c.enabled !== false, autoApprove: !!c.autoApprove,
  };
  if (kind === 'http') {
    const url = String(base.url || c.url || '').trim();
    if (!/^https:\/\/[^\s]+$/i.test(url) && !/^http:\/\/(127\.0\.0\.1|localhost)(:\d+)?\//i.test(url)) throw new Error('Địa chỉ MCP phải là https://… (hoặc http://localhost… cho máy chủ chạy trên máy)');
    out.url = url;
  } else {
    const command = String(c.command || '').trim();
    if (!command) throw new Error('Chưa nhập lệnh chạy MCP (ví dụ: npx)');
    out.command = command;
    out.args = Array.isArray(c.args) ? c.args.map(String) : String(c.args || '').match(/"[^"]*"|\S+/g)?.map((a) => a.replace(/^"|"$/g, '')) || [];
    out.tokenEnv = /^[A-Z_][A-Z0-9_]*$/.test(String(c.tokenEnv || '')) ? String(c.tokenEnv) : '';
  }
  return out;
}

const secretKey = (id) => 'conn.' + id;

// cấu hình cho Codex (truyền theo từng phiên, không ghi vào config.toml của người dùng)
function codexConfig(list = [], getSecret = () => '') {
  const out = {};
  for (const c of list) {
    if (!c || !c.enabled || !ID_RE.test(c.id)) continue;
    const token = getSecret(secretKey(c.id));
    const p = `mcp_servers.${c.id}`;
    if (c.kind === 'http') {
      out[`${p}.url`] = c.url;
      if (token) out[`${p}.http_headers`] = { Authorization: `Bearer ${token}` };
    } else {
      out[`${p}.command`] = c.command;
      out[`${p}.args`] = c.args || [];
      if (token && c.tokenEnv) out[`${p}.env`] = { [c.tokenEnv]: token };
    }
    out[`${p}.startup_timeout_sec`] = 30;
    out[`${p}.tool_timeout_sec`] = 120;
    if (c.autoApprove) out[`${p}.default_tools_approval_mode`] = 'approve';
  }
  return out;
}

// thử kết nối: khởi động MCP, lấy danh sách công cụ
async function test(c, token = '') {
  const s = c.kind === 'http'
    ? { url: c.url, headers: token ? { Authorization: `Bearer ${token}` } : {} }
    : { command: c.command, args: c.args || [], env: token && c.tokenEnv ? { [c.tokenEnv]: token } : {} };
  const client = McpClient.create(c.id, s);
  try {
    const tools = await client.init();
    return { ok: true, tools: tools.length, names: tools.slice(0, 12).map((t) => t.name) };
  } catch (e) {
    const msg = String(e.message || e);
    return { ok: false, error: /401|403|unauthori[sz]ed|bad credentials/i.test(msg) ? 'Token không hợp lệ hoặc thiếu quyền (' + msg.slice(0, 120) + ')' : msg.slice(0, 300) };
  } finally { client.close(); }
}

module.exports = { PRESETS, normalize, codexConfig, test, secretKey, RESERVED };
