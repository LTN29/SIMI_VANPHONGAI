// SIMI Gateway: dùng chính cấu hình Codex mà bộ cài SIMI đã ghi trên máy
// (~/.codex/config.toml → [model_providers.ltn_gateway], key LTN_TEAM_API_KEY, catalog model theo Combo, skill simi-*).
const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');
const { IS_WIN, HOME, runProcess, openTerminal, userEnv, fetchJson, firstLine, killTree } = require('./sys');

const PROVIDER_ID = 'ltn_gateway';
const DEFAULT_GATEWAY = 'https://ai.simi.vn';

const codexHome = () => process.env.CODEX_HOME || path.join(HOME, '.codex');

// ---------- đọc config.toml (chỉ phần cần dùng, không cần thư viện TOML) ----------
function readCodexConfig() {
  const file = path.join(codexHome(), 'config.toml');
  let text = '';
  try { text = fs.readFileSync(file, 'utf8'); } catch { return { exists: false, file }; }
  const root = {}; const sections = {};
  let cur = root;
  for (const raw of text.split(/\r?\n/)) {
    const line = raw.trim();
    if (!line || line.startsWith('#')) continue;
    const sec = line.match(/^\[([^\]]+)\]$/);
    if (sec) { cur = sections[sec[1].trim()] = {}; continue; }
    const kv = line.match(/^([A-Za-z0-9_.\-"]+)\s*=\s*(.+)$/);
    if (!kv) continue;
    let v = kv[2].trim();
    const q = v.match(/^"((?:[^"\\]|\\.)*)"/) || v.match(/^'([^']*)'/);
    if (q) v = q[1].replace(/\\\\/g, '\\').replace(/\\"/g, '"');
    cur[kv[1].replace(/"/g, '')] = v;
  }
  const prov = sections[`model_providers.${PROVIDER_ID}`] || null;
  return {
    exists: true, file,
    provider: prov,
    baseUrl: prov ? String(prov.base_url || '').replace(/\/+$/, '') : '',
    isDefault: root.model_provider === PROVIDER_ID,
    defaultModel: root.model || '',
    effort: root.model_reasoning_effort || '',
    catalogPath: root.model_catalog_json || path.join(codexHome(), 'ltn-model-catalog.json'),
    browserMcp: !!sections['mcp_servers.simi_browser'],
  };
}

// ---------- key + client id (Windows lưu trong biến môi trường User, macOS trong Keychain qua helper) ----------
// Đưa key/client id mới nhất vào môi trường của app để Codex chạy ngầm dùng được
// (bộ cài vừa chạy xong thì app chưa có biến này).
function refreshEnv() {
  if (IS_WIN) {
    for (const n of ['LTN_TEAM_API_KEY', 'LTN_CLIENT_ID', 'LTN_BROWSER_BRIDGE_TOKEN', 'LTN_BROWSER_NODE_PATH', 'LTN_NODE_PATH', 'LTN_PYTHON_PATH']) {
      const v = userEnv(n); if (v) process.env[n] = v;
    }
  }
}

function readKey() {
  if (process.env.LTN_TEAM_API_KEY) return process.env.LTN_TEAM_API_KEY.trim();
  if (IS_WIN) return userEnv('LTN_TEAM_API_KEY');
  const helper = path.join(codexHome(), 'bin', 'ltn-codex-token');
  try { if (fs.existsSync(helper)) { const k = execFileSync(helper, [], { encoding: 'utf8', timeout: 6000, stdio: ['ignore', 'pipe', 'ignore'] }).trim(); if (k) return k; } } catch { /* bỏ qua */ }
  try { return fs.readFileSync(path.join(codexHome(), 'credentials', 'ltn-team-key'), 'utf8').trim(); } catch { return ''; }
}

function readClientId() {
  if (process.env.LTN_CLIENT_ID) return process.env.LTN_CLIENT_ID.trim();
  if (IS_WIN) { const v = userEnv('LTN_CLIENT_ID'); if (v) return v; }
  try { return fs.readFileSync(path.join(codexHome(), 'ltn-client-id'), 'utf8').trim(); } catch { return ''; }
}

// ---------- skill ----------
function parseSkill(file) {
  try {
    const txt = fs.readFileSync(file, 'utf8').slice(0, 6000);
    const fm = txt.match(/^---\s*\r?\n([\s\S]*?)\r?\n---/);
    const get = (k) => { const m = fm && fm[1].match(new RegExp('^' + k + ':\\s*(.+)$', 'm')); return m ? m[1].trim().replace(/^["']|["']$/g, '') : ''; };
    const name = get('name') || path.basename(path.dirname(file));
    let desc = get('description');
    if (!desc || desc === '>' || desc === '|') {
      const m = fm && fm[1].match(/^description:\s*[>|]-?\s*\r?\n((?:\s{2,}.+\r?\n?)+)/m);
      desc = m ? m[1].replace(/\s+/g, ' ').trim() : '';
    }
    return { name, description: desc.slice(0, 220) };
  } catch { return null; }
}

function listSkills() {
  const roots = [[path.join(codexHome(), 'skills'), 'codex'], [path.join(HOME, '.agents', 'skills'), 'agents']];
  const seen = new Set(); const out = [];
  for (const [root, origin] of roots) {
    let dirs = [];
    try { dirs = fs.readdirSync(root, { withFileTypes: true }).filter((d) => d.isDirectory()); } catch { continue; }
    for (const d of dirs) {
      const sub = d.name === '.system' ? fs.readdirSync(path.join(root, d.name), { withFileTypes: true }).filter((x) => x.isDirectory()).map((x) => [path.join(root, d.name, x.name), true]) : [[path.join(root, d.name), false]];
      for (const [dir, system] of sub) {
        const s = parseSkill(path.join(dir, 'SKILL.md'));
        if (!s || seen.has(s.name)) continue;
        seen.add(s.name);
        out.push({ ...s, simi: /^(simi|muse|updatesimi)/i.test(s.name), system, origin });
      }
    }
  }
  return out.sort((a, b) => (b.simi - a.simi) || (a.system - b.system) || a.name.localeCompare(b.name));
}

// ---------- danh sách model theo Combo ----------
function mapModels(list) {
  return (list || [])
    .filter((m) => m && (m.slug || m.id) && m.visibility !== 'hide' && m.hidden !== true)
    .sort((a, b) => (a.priority ?? 999) - (b.priority ?? 999))
    .map((m) => {
      const id = m.slug || m.id;
      const levels = (m.supported_reasoning_levels || []).map((l) => (typeof l === 'string' ? l : l.effort)).filter(Boolean);
      const mods = m.input_modalities || m.modalities || null;
      return {
        id, label: m.display_name || m.displayName || m.name || id,
        note: m.description ? String(m.description).slice(0, 80) : '',
        efforts: levels, defaultEffort: m.default_reasoning_level || '',
        image: mods ? mods.includes('image') : /image|muse/i.test(id) ? true : null,
      };
    });
}

function readCatalog(cfg) {
  try { const j = JSON.parse(fs.readFileSync(cfg.catalogPath, 'utf8')); return mapModels(j.models || j.data || j); } catch { return []; }
}

async function listModels() {
  refreshEnv();
  const cfg = readCodexConfig();
  const local = readCatalog(cfg);
  const key = readKey();
  const cid = readClientId();
  let liveErr = '';
  if (cfg.baseUrl && key) {
    try {
      const headers = { authorization: `Bearer ${key}` };
      if (cid) headers['x-ltn-client-id'] = cid;
      const j = await fetchJson(`${cfg.baseUrl}/models`, { headers, name: 'Gateway' });
      // gateway chỉ trả ID → bổ sung tên hiển thị / mức suy nghĩ từ catalog đã lưu trên máy
      const models = mapModels(j.models && j.models.length ? j.models : j.data).map((m) => {
        const l = local.find((x) => x.id === m.id);
        return l ? { ...l, ...m, label: m.label !== m.id ? m.label : l.label, efforts: m.efforts.length ? m.efforts : l.efforts, image: m.image ?? l.image, note: m.note || l.note } : m;
      });
      if (models.length) return { models, live: true, defaultModel: cfg.defaultModel };
    } catch (e) { liveErr = e.message; }
  }
  if (local.length) return { models: local, live: false, defaultModel: cfg.defaultModel, note: 'Danh sách lưu trên máy từ lần cài/cập nhật SIMI gần nhất' + (liveErr ? ` (${liveErr})` : '') };
  if (!cfg.provider) return { models: [], live: false, error: 'Máy chưa cài SIMI Gateway. Bấm "Cài đặt SIMI" ở mục Kết nối.' };
  if (!key) return { models: [], live: false, error: 'Chưa có API key của team. Chạy lại bộ cài SIMI và chọn Install.' };
  return { models: cfg.defaultModel ? [{ id: cfg.defaultModel, label: cfg.defaultModel, note: 'model mặc định của Codex' }] : [], live: false, error: liveErr || 'Không lấy được danh sách model' };
}

// ---------- trạng thái ----------
async function status(codexCmd = 'codex') {
  refreshEnv();
  const cfg = readCodexConfig();
  let codex = { installed: false, version: '' };
  try {
    const { out, err } = await runProcess(codexCmd, ['--version'], '', { timeoutMs: 20000 });
    codex = { installed: true, version: firstLine(out || err).slice(0, 60) };
  } catch (e) { codex.error = firstLine(e.message); }
  const skills = listSkills();
  return {
    codex,
    configured: !!cfg.provider,
    isDefault: !!cfg.isDefault,
    baseUrl: cfg.baseUrl || '',
    hasKey: !!readKey(),
    hasClientId: !!readClientId(),
    browserMcp: !!cfg.browserMcp,
    defaultModel: cfg.defaultModel || '',
    skills: skills.filter((s) => s.simi).length,
    skillsTotal: skills.length,
    installed: codex.installed && !!cfg.provider,
    loggedIn: codex.installed && !!cfg.provider && !!readKey(),
    version: codex.version,
    account: cfg.baseUrl ? cfg.baseUrl.replace(/^https?:\/\//, '').replace(/\/v1$/, '') : '',
  };
}

// ---------- mở bộ cài chính thức của Gateway ----------
function gatewayOrigin(url) {
  try {
    const u = new URL(url || DEFAULT_GATEWAY);
    if (u.protocol !== 'https:' && !['localhost', '127.0.0.1'].includes(u.hostname)) throw new Error();
    return u.origin;
  } catch { return DEFAULT_GATEWAY; }
}

function installerCommand(gateway) {
  const o = gatewayOrigin(gateway);
  return IS_WIN ? `irm ${o}/install/codex.ps1 | iex` : `curl -fsSL ${o}/install/codex.sh | bash`;
}

function openInstaller(gateway) {
  return openTerminal(installerCommand(gateway), {
    title: 'Cai dat SIMI', powershell: true,
    banner: 'Bo cai SIMI Gateway - lan dau chon 1 (Install), cap nhat chon 5 (Update).',
  });
}

// trình duyệt SIMI (MCP simi_browser do bộ cài SIMI cài) chỉ đọc trang → cho chạy không cần hỏi từng lần
const BROWSER_MCP = 'simi_browser';
const browserApprove = () => (readCodexConfig().browserMcp ? { [`mcp_servers.${BROWSER_MCP}.default_tools_approval_mode`]: 'approve' } : {});

// tham số Codex dùng chung để chạy qua SIMI Gateway (việc của Văn phòng: `codex exec`, không hỏi quyền được)
function codexArgs({ model, effort, sandbox, viaGateway = true }) {
  const a = [];
  if (viaGateway) a.push('-c', `model_provider=${PROVIDER_ID}`);
  if (model) a.push('-m', model);
  if (effort) a.push('-c', `model_reasoning_effort=${effort}`);
  const sb = ['read-only', 'workspace-write', 'danger-full-access'].includes(sandbox) ? sandbox : 'workspace-write';
  a.push('-c', 'approval_policy=never', '-c', `sandbox_mode=${sb}`);
  // skill SIMI gọi Gateway qua mạng (tạo ảnh, video, tìm web…) nên cần mở mạng trong sandbox
  if (sb === 'workspace-write') a.push('-c', 'sandbox_workspace_write.network_access=true');
  for (const [k, v] of Object.entries(browserApprove())) a.push('-c', `${k}="${v}"`);
  return a;
}

// thiết lập 1 lượt chat qua `codex app-server`: Codex hỏi quyền khi cần (lệnh ngoài sandbox, công cụ MCP, Computer Use)
// và app hiện hộp "Cho phép / Từ chối" ngay trong đoạn chat – giống ChatGPT Work.
function chatSettings({ model, effort, sandbox }) {
  const sb = ['read-only', 'workspace-write', 'danger-full-access'].includes(sandbox) ? sandbox : 'workspace-write';
  const sandboxPolicy = sb === 'read-only' ? { type: 'readOnly', networkAccess: true }
    : sb === 'danger-full-access' ? { type: 'dangerFullAccess' }
      : { type: 'workspaceWrite', networkAccess: true }; // skill SIMI gọi Gateway qua mạng (tạo ảnh, video, tìm web…)
  const config = { ...browserApprove() };
  if (sb === 'workspace-write') config['sandbox_workspace_write.network_access'] = true;
  return {
    model: model || null, effort: effort || null, modelProvider: readCodexConfig().provider ? PROVIDER_ID : null,
    approvalPolicy: 'on-request', sandbox: sb, sandboxPolicy, config,
  };
}

// ---------- Codex của ChatGPT Work / Codex Desktop ----------
// Plugin Computer Use đi kèm app ChatGPT/Codex Desktop và chạy ổn nhất với chính bản Codex của app đó,
// nên tab Chat ưu tiên dùng bản này nếu máy có; không có thì dùng Codex CLI do bộ cài SIMI cài.
let desktopCache = null;
function findInDir(dir, name, depth) {
  let ents = []; try { ents = fs.readdirSync(dir, { withFileTypes: true }); } catch { return ''; }
  for (const e of ents) if (e.isFile() && e.name.toLowerCase() === name) return path.join(dir, e.name);
  if (depth <= 0) return '';
  for (const e of ents) if (e.isDirectory() && !/^(locales|node_modules|swiftshader)$/i.test(e.name)) { const f = findInDir(path.join(dir, e.name), name, depth - 1); if (f) return f; }
  return '';
}
function desktopCodex() {
  if (desktopCache && Date.now() - desktopCache.t < 10 * 60 * 1000) return desktopCache.path;
  let found = '';
  try {
    if (process.platform === 'darwin') {
      for (const app of ['/Applications/ChatGPT.app', '/Applications/Codex.app', path.join(HOME, 'Applications/ChatGPT.app'), path.join(HOME, 'Applications/Codex.app')]) {
        const p = path.join(app, 'Contents/Resources/codex');
        if (fs.existsSync(p)) { found = p; break; }
      }
    } else if (IS_WIN) {
      // Prefer the known per-user executable; Store discovery may be unavailable.
      const local = process.env.LOCALAPPDATA ? [path.join(process.env.LOCALAPPDATA, 'Programs', 'OpenAI', 'Codex'), path.join(process.env.LOCALAPPDATA, 'Programs', 'ChatGPT'), path.join(process.env.LOCALAPPDATA, 'Programs', 'Codex')] : [];
      for (const d of local) {
        const direct = path.join(d, 'bin', 'codex.exe');
        found = fs.existsSync(direct) ? direct : findInDir(d, 'codex.exe', 4);
        if (found) break;
      }
      if (!found) {
        try {
          const ps = execFileSync('powershell.exe', ['-NoProfile', '-Command', "Get-AppxPackage | Where-Object { $_.Name -match 'ChatGPT|Codex' -and $_.Publisher -match 'OpenAI' } | ForEach-Object { $_.InstallLocation }"], { encoding: 'utf8', timeout: 15000, windowsHide: true });
          for (const d of ps.split(/\r?\n/).map(v => v.trim()).filter(Boolean)) { found = findInDir(d, 'codex.exe', 4); if (found) break; }
        } catch { /* Keep the CLI fallback when Store lookup is not supported. */ }
      }
    }
  } catch { /* không có app desktop */ }
  desktopCache = { t: Date.now(), path: found };
  return found;
}

// lệnh codex cho tab Chat: 'auto' = Codex của ChatGPT Work nếu có, 'cli' = luôn dùng Codex CLI
function chatCodexCmd(cliCmd, pref = 'auto') {
  if (pref !== 'cli') { const d = desktopCodex(); if (d) return d; }
  return cliCmd || 'codex';
}

// ---------- cập nhật SIMI 1 nút (chạy ngầm, không cần chọn menu trong Terminal) ----------
// Windows: tải bộ cài đầy đủ rồi chạy -Mode update; macOS/Linux: codex.sh --update. Key đã lưu nên không hỏi gì.
function updateCommand(gateway) {
  const o = gatewayOrigin(gateway || (readCodexConfig().baseUrl || ''));
  if (IS_WIN) {
    const script = [
      "$ErrorActionPreference='Stop'",
      `$f=Join-Path $env:TEMP ('simi-update-'+[guid]::NewGuid().ToString('N')+'.ps1')`,
      `Invoke-WebRequest -UseBasicParsing -Uri '${o}/install/codex-full.ps1' -OutFile $f -MaximumRedirection 0`,
      '$t=[IO.File]::ReadAllText($f,[Text.UTF8Encoding]::new($false,$true)); [IO.File]::WriteAllText($f,$t,[Text.UTF8Encoding]::new($true))',
      "& (Get-Process -Id $PID).Path -NoLogo -NoProfile -ExecutionPolicy Bypass -File $f -Mode update; $c=$LASTEXITCODE; Remove-Item $f -Force -ErrorAction SilentlyContinue; exit $c",
    ].join('; ');
    return { cmd: 'powershell.exe', args: ['-NoLogo', '-NoProfile', '-ExecutionPolicy', 'Bypass', '-EncodedCommand', Buffer.from(script, 'utf16le').toString('base64')] };
  }
  return { cmd: 'bash', args: ['-lc', `curl -fsSL ${o}/install/codex.sh | bash -s -- --update`] };
}

function runUpdate(gateway, onLine) {
  const { spawn } = require('child_process');
  const { cmd, args } = updateCommand(gateway);
  return new Promise((resolve) => {
    let child;
    try { child = spawn(cmd, args, { windowsHide: true, cwd: HOME, env: { ...process.env, NO_COLOR: '1', TERM: 'dumb' } }); } catch (e) { return resolve({ ok: false, error: e.message }); }
    let tail = ''; let buf = '';
    const feed = (d) => {
      buf += d.toString('utf8');
      let i;
      while ((i = buf.search(/\r?\n/)) >= 0) {
        const line = buf.slice(0, i).replace(/\x1b\[[0-9;?]*[A-Za-z]/g, '').trim(); buf = buf.slice(i + 1).replace(/^\n/, '');
        if (line) { tail = (tail + line + '\n').slice(-4000); onLine && onLine(line); }
      }
    };
    child.stdout.on('data', feed); child.stderr.on('data', feed);
    child.stdin.end();
    const timer = setTimeout(() => killTree(child), 15 * 60 * 1000);
    child.on('error', (e) => { clearTimeout(timer); resolve({ ok: false, error: e.message }); });
    child.on('close', (code) => { clearTimeout(timer); resolve(code === 0 ? { ok: true, log: tail } : { ok: false, error: tail.split('\n').filter(Boolean).slice(-4).join('\n') || `Bộ cài dừng với mã ${code}`, log: tail }); });
  });
}

// thông tin gọi Gateway trực tiếp (Sảnh online): base URL từ config Codex + key team + client id của máy
function gatewayAuth() {
  refreshEnv();
  const cfg = readCodexConfig();
  return { baseUrl: cfg.baseUrl || '', key: readKey(), clientId: readClientId() };
}

module.exports = { readCodexConfig, refreshEnv, listSkills, listModels, status, openInstaller, codexArgs, chatSettings, chatCodexCmd, desktopCodex, gatewayAuth, gatewayOrigin, runUpdate, BROWSER_MCP, DEFAULT_GATEWAY };
