// Kết nối tài khoản: kiểm tra đã cài / đã đăng nhập, lấy danh sách model, mở Terminal để đăng nhập hoặc cài đặt.
const fs = require('fs');
const path = require('path');
const simi = require('./simi');
const { IS_WIN, HOME, runProcess, openTerminal: openWindow, refreshPath, fetchJson, firstLine, GEMINI_PERSONAL_MSG } = require('./sys');

// ---------- lệnh đăng nhập / cài đặt (danh sách cố định, không nhận lệnh tùy ý) ----------
const COMMANDS = {
  'claude-login': { all: 'claude auth login' },
  'codex-login': { all: 'codex login' },
  'antigravity-login': { all: 'agy' },
  'gemini-login': { all: 'gemini' },
  'claude-install': {
    win: 'curl -fsSL https://claude.ai/install.cmd -o install.cmd && install.cmd && del install.cmd',
    mac: 'curl -fsSL https://claude.ai/install.sh | bash',
  },
  'codex-install': { all: 'npm install -g @openai/codex' },
  'antigravity-install': {
    win: 'curl -fsSL https://antigravity.google/cli/install.cmd -o install.cmd && install.cmd && del install.cmd',
    mac: 'curl -fsSL https://antigravity.google/cli/install.sh | bash',
  },
  'gemini-install': { all: 'npm install -g @google/gemini-cli' },
  'ollama-pull': { all: 'ollama pull qwen2.5' },
};

function commandText(key) {
  const c = COMMANDS[key]; if (!c) return null;
  return c.all || (IS_WIN ? c.win : c.mac);
}

// chỉ chạy lệnh trong danh sách cố định ở trên
function openTerminal(key) {
  const cmd = commandText(key);
  if (!cmd) throw new Error('Lệnh không hợp lệ');
  return openWindow(cmd);
}

// ---------- kiểm tra từng tài khoản ----------
async function version(cmd, opts) {
  try {
    const { out, err } = await runProcess(cmd, ['--version'], '', { timeoutMs: 20000, ...opts });
    return { installed: true, version: firstLine(out || err).slice(0, 90) };
  } catch (e) { return { installed: false, version: '', error: firstLine(e.message) }; }
}

async function checkClaude(cfg) {
  const cmd = cfg.cli.claude.cmd || 'claude';
  const v = await version(cmd);
  if (!v.installed) return { ...v, loggedIn: false };
  try {
    const r = await runProcess(cmd, ['auth', 'status'], '', { timeoutMs: 20000, allowFail: true });
    let info = null; try { info = JSON.parse(r.out); } catch { /* bản cũ không có JSON */ }
    const logged = r.code === 0 && (!info || (info.authMethod && info.authMethod !== 'none') || info.loggedIn === true);
    const who = info && (info.email || info.account?.email || info.accountEmail || '');
    const plan = info && (info.subscriptionType || info.plan || '');
    const method = info && info.authMethod ? { 'claude.ai': 'tài khoản Claude', oauth_token: 'token đăng nhập', api_key: 'API key', api_key_helper: 'API key', third_party: 'nhà cung cấp khác' }[info.authMethod] || info.authMethod : '';
    return { ...v, loggedIn: logged, account: [who, plan, method].filter(Boolean).join(' · ') };
  } catch (e) { return { ...v, loggedIn: null, note: firstLine(e.message) }; }
}

async function checkCodex(cfg) {
  const cmd = cfg.cli.codex.cmd || 'codex';
  const v = await version(cmd);
  if (!v.installed) return { ...v, loggedIn: false };
  try {
    const r = await runProcess(cmd, ['login', 'status'], '', { timeoutMs: 20000, allowFail: true });
    const txt = (r.out + '\n' + r.err).trim();
    const logged = /logged in/i.test(txt) && !/not logged in/i.test(txt);
    return { ...v, loggedIn: logged, account: logged ? firstLine(txt).slice(0, 90).replace(/^logged in\s*(using|with)?\s*/i, '') : '' };
  } catch (e) { return { ...v, loggedIn: null, note: firstLine(e.message) }; }
}

// agy không có lệnh "đã đăng nhập chưa": coi là đã kết nối khi lần Thử gần nhất chạy được (cfg.verified.antigravity),
// hoặc `agy models` liệt kê được model của tài khoản (chỉ chạy được khi đã đăng nhập).
const AGY_AUTH = /log ?in|sign ?in|authenticat|unauthori[sz]ed|not logged/i;
function parseAgyModels(out) {
  const seen = new Set(); const models = [];
  for (const line of String(out || '').split(/\r?\n/)) {
    const tok = line.replace(/[│|*•►>]/g, ' ').trim().split(/\s+/)[0] || '';
    if (/^[a-z][a-z0-9.\-_:]*\d[a-z0-9.\-_:]*$/i.test(tok) && tok.includes('-') && !seen.has(tok)) {
      seen.add(tok);
      const rest = line.slice(line.indexOf(tok) + tok.length).replace(/[│|]/g, ' ').trim();
      models.push({ id: tok, label: tok, note: rest.slice(0, 70) });
    }
  }
  return models;
}
async function checkAntigravity(cfg) {
  const cmd = (cfg.cli.antigravity || {}).cmd || 'agy';
  const v = await version(cmd, { shell: false });
  if (!v.installed) return { ...v, loggedIn: false };
  if (cfg.verified && cfg.verified.antigravity) return { ...v, loggedIn: true, account: 'tài khoản Google' };
  try {
    const r = await runProcess(cmd, ['models'], '', { timeoutMs: 15000, shell: false, allowFail: true });
    if (r.code === 0 && parseAgyModels(r.out).length) return { ...v, loggedIn: true, account: 'tài khoản Google', verify: true };
    if (AGY_AUTH.test(r.out + r.err)) return { ...v, loggedIn: false };
  } catch { /* chậm / lỗi khác: để người dùng bấm Thử */ }
  return { ...v, loggedIn: null };
}

async function checkGemini(cfg) {
  const v = await version(cfg.cli.gemini.cmd || 'gemini');
  if (!v.installed) return { ...v, loggedIn: false };
  const oauth = fs.existsSync(path.join(HOME, '.gemini', 'oauth_creds.json'));
  const key = !!(process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY);
  // tài khoản Google cá nhân (oauth-personal, không có dự án Google Cloud) bị Google ngừng hỗ trợ từ 18/6/2026
  let personal = false;
  try {
    const st = JSON.parse(fs.readFileSync(path.join(HOME, '.gemini', 'settings.json'), 'utf8'));
    const t = (st.security && st.security.auth && st.security.auth.selectedType) || st.selectedAuthType || '';
    personal = t === 'oauth-personal' && !process.env.GOOGLE_CLOUD_PROJECT && !process.env.GOOGLE_CLOUD_PROJECT_ID;
  } catch { /* chưa có settings */ }
  const blocked = !key && oauth && (personal || !!(cfg.verified && cfg.verified.geminiPersonal));
  if (blocked) return { ...v, loggedIn: false, ineligible: true, account: 'tài khoản Google cá nhân', note: GEMINI_PERSONAL_MSG };
  return { ...v, loggedIn: oauth || key, account: key ? 'API key (biến môi trường)' : oauth ? 'tài khoản Google' : '' };
}

const ollamaBase = (cfg) => (cfg.ollamaUrl || 'http://127.0.0.1:11434').replace(/\/$/, '');

async function checkOllama(cfg) {
  try {
    const d = await fetchJson(`${ollamaBase(cfg)}/api/tags`, { timeoutMs: 3500, name: 'Ollama' });
    const n = (d.models || []).length;
    return { installed: true, loggedIn: true, version: 'đang chạy', account: n ? `${n} model đã tải` : 'chưa tải model nào' };
  } catch { return { installed: false, loggedIn: false, version: '', error: 'Chưa cài hoặc chưa bật Ollama' }; }
}

async function checkAll(cfg, secrets) {
  refreshPath();
  const [claude, codex, antigravity, gemini, ollama, simiSt] = await Promise.all([
    checkClaude(cfg), checkCodex(cfg), checkAntigravity(cfg), checkGemini(cfg), checkOllama(cfg),
    simi.status(cfg.cli.codex.cmd || 'codex').catch((e) => ({ installed: false, loggedIn: false, error: e.message })),
  ]);
  return { simi: simiSt, claude, codex, antigravity, gemini, ollama, keys: secrets, platform: process.platform };
}

// ---------- danh sách model ----------
const CLAUDE_MODELS = [
  { id: '', label: 'Mặc định của tài khoản', note: 'Claude Code tự chọn' },
  { id: 'opus', label: 'Opus', note: 'mạnh nhất cho việc khó, suy luận sâu' },
  { id: 'sonnet', label: 'Sonnet', note: 'cân bằng – hợp hầu hết công việc' },
  { id: 'haiku', label: 'Haiku', note: 'nhanh, tiết kiệm lượt dùng' },
  { id: 'fable', label: 'Fable', note: 'mạnh nhất (nếu gói của bạn có)' },
  { id: 'best', label: 'Best', note: 'tự chọn model mạnh nhất bạn được dùng' },
];

function pickModelsFromJson(j) {
  const arr = Array.isArray(j) ? j : (j.models || j.data || j.items || []);
  return arr
    .filter((m) => m && (m.slug || m.id || m.model) && m.visibility !== 'hide' && m.hidden !== true)
    .sort((a, b) => (a.priority ?? 999) - (b.priority ?? 999))
    .map((m) => ({ id: m.slug || m.id || m.model, label: m.display_name || m.displayName || m.name || m.slug || m.id, note: m.description ? String(m.description).slice(0, 70) : '' }));
}

const httpGet = (url, headers, name) => fetchJson(url, { headers, name });

async function listModels(source, cfg, getSecret) {
  refreshPath();
  if (source === 'simi') return simi.listModels();
  if (source === 'claude-cli') return { models: CLAUDE_MODELS, live: false, note: 'Tên tắt chính thức của Claude Code, luôn trỏ tới phiên bản mới nhất mà tài khoản bạn được dùng.' };
  if (source === 'codex-cli') {
    try {
      // máy có SIMI: config Codex trỏ Gateway SIMI → hỏi riêng model của tài khoản ChatGPT (provider "openai")
      const viaSimi = !!simi.readCodexConfig().provider;
      const { out } = await runProcess(cfg.cli.codex.cmd || 'codex', ['debug', 'models', ...(viaSimi ? ['-c', 'model_provider="openai"'] : [])], '', { timeoutMs: 30000 });
      const starts = [out.indexOf('{'), out.indexOf('[')].filter((i) => i >= 0);
      // model SIMI có tiền tố hãng (cx/, cc/, ag/…) – không phải model của tài khoản ChatGPT
      const models = pickModelsFromJson(JSON.parse(out.slice(Math.min(...starts)))).filter((m) => !viaSimi || !m.id.includes('/'));
      if (models.length) return { models: [{ id: '', label: 'Mặc định của tài khoản', note: 'Codex tự chọn' }, ...models], live: true };
    } catch (e) { return { models: [{ id: '', label: 'Mặc định của tài khoản', note: '' }], live: false, error: 'Không lấy được danh sách từ Codex: ' + firstLine(e.message) }; }
    return { models: [{ id: '', label: 'Mặc định của tài khoản', note: '' }], live: false };
  }
  if (source === 'antigravity-cli') {
    try {
      const { out } = await runProcess((cfg.cli.antigravity || {}).cmd || 'agy', ['models'], '', { timeoutMs: 30000, shell: false });
      const models = parseAgyModels(out);
      return { models: [{ id: '', label: 'Mặc định của tài khoản', note: 'Antigravity tự chọn' }, ...models], live: models.length > 0 };
    } catch (e) { return { models: [{ id: '', label: 'Mặc định của tài khoản', note: '' }], live: false, error: 'Không lấy được danh sách từ agy: ' + firstLine(e.message) }; }
  }
  if (source === 'gemini-cli') {
    return { models: [{ id: '', label: 'Mặc định (auto)', note: 'Gemini CLI tự chọn' }, { id: 'gemini-3-pro-preview', label: 'Gemini 3 Pro', note: 'suy luận phức tạp' }, { id: 'gemini-3-flash-preview', label: 'Gemini 3 Flash', note: 'nhanh' }, { id: 'gemini-2.5-pro', label: 'Gemini 2.5 Pro', note: '' }, { id: 'gemini-2.5-flash', label: 'Gemini 2.5 Flash', note: '' }], live: false, note: 'Danh sách theo tài liệu Gemini CLI; nếu tài khoản không có model nào, chọn "Tự nhập".' };
  }
  if (source === 'ollama') {
    try {
      const d = await httpGet(`${ollamaBase(cfg)}/api/tags`, {}, 'Ollama');
      return { models: (d.models || []).map((m) => ({ id: m.name, label: m.name, note: m.details ? [m.details.parameter_size, m.details.quantization_level].filter(Boolean).join(' · ') : '' })), live: true };
    } catch { return { models: [], live: false, error: 'Ollama chưa chạy hoặc chưa cài.' }; }
  }
  if (source === 'anthropic-api') {
    const key = getSecret('anthropic'); if (!key) return { models: [], live: false, error: 'Chưa nhập API key Anthropic (Kết nối → API key).' };
    const d = await httpGet('https://api.anthropic.com/v1/models?limit=100', { 'x-api-key': key, 'anthropic-version': '2023-06-01' });
    return { models: (d.data || []).map((m) => ({ id: m.id, label: m.display_name || m.id, note: '' })), live: true };
  }
  if (source === 'openai-api') {
    const key = getSecret('openai'); if (!key) return { models: [], live: false, error: 'Chưa nhập API key OpenAI (Kết nối → API key).' };
    const d = await httpGet('https://api.openai.com/v1/models', { authorization: `Bearer ${key}` });
    const ok = (id) => /^(gpt|o\d|chatgpt)/i.test(id) && !/(audio|realtime|tts|transcribe|image|search|embedding|moderation|instruct)/i.test(id);
    return { models: (d.data || []).filter((m) => ok(m.id)).sort((a, b) => (b.created || 0) - (a.created || 0)).map((m) => ({ id: m.id, label: m.id, note: '' })), live: true };
  }
  if (source === 'gemini-api') {
    const key = getSecret('gemini'); if (!key) return { models: [], live: false, error: 'Chưa nhập API key Gemini (Kết nối → API key).' };
    const d = await httpGet('https://generativelanguage.googleapis.com/v1beta/models?pageSize=200', { 'x-goog-api-key': key });
    return { models: (d.models || []).filter((m) => (m.supportedGenerationMethods || []).includes('generateContent') && /gemini/i.test(m.name))
      .map((m) => ({ id: m.name.replace(/^models\//, ''), label: m.displayName || m.name, note: '' })), live: true };
  }
  return { models: [], live: false };
}

module.exports = { checkAll, listModels, openTerminal };
