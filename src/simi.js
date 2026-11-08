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
        const isSimi = /^(simi|muse|updatesimi)/i.test(s.name);
        // mine: skill người dùng tự thêm trong CODEX_HOME/skills – sửa / xoá được trong app
        out.push({ ...s, simi: isSimi, system, origin, mine: origin === 'codex' && !system && !isSimi && path.basename(dir) === s.name });
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

// nhãn tốc độ đo thật trên Gateway (6 giờ gần nhất, mọi user) – chỉ để tham khảo, user vẫn tự chọn model
function speedTag(sp) {
  if (!sp || typeof sp !== 'object') return '';
  const sec = Number.isFinite(sp.medianMs) ? Math.max(1, Math.round(sp.medianMs / 1000)) : null;
  if (sp.label === 'unstable') return `⚠ hay lỗi (${Math.round((sp.errorRate || 0) * 100)}%)`;
  if (sp.label === 'fast') return `⚡ nhanh${sec ? ` ~${sec}s` : ''}`;
  if (sp.label === 'slow') return `🐢 chậm${sec ? ` ~${sec}s` : ''}`;
  return sec ? `~${sec}s` : '';
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
      const speeds = new Map((Array.isArray(j.data) ? j.data : []).filter((x) => x && x.id && x.speed).map((x) => [x.id, x.speed]));
      const models = mapModels(j.models && j.models.length ? j.models : j.data).map((m) => {
        const l = local.find((x) => x.id === m.id);
        const out = l ? { ...l, ...m, label: m.label !== m.id ? m.label : l.label, efforts: m.efforts.length ? m.efforts : l.efforts, image: m.image ?? l.image, note: m.note || l.note } : m;
        const speed = speeds.get(m.id);
        return speed ? { ...out, speed, speedTag: speedTag(speed) } : out;
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
    desktop: !!desktopCodex(), // đã có app Codex / ChatGPT (để ẩn nút "Tải Codex")
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

// trình duyệt SIMI (MCP simi_browser do bộ cài SIMI cài): đọc + thao tác trang → cho chạy không cần hỏi từng lần;
// nút gửi / đăng / thanh toán / xoá do chính công cụ chặn lại, AI phải hỏi người dùng rồi mới đặt confirmed: true
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

// ---------- cài / cập nhật SIMI 1 nút (chạy ngầm, không mở Terminal, không hiện dòng lệnh) ----------
// Windows: tải bộ cài đầy đủ rồi chạy -Mode <mode>; macOS/Linux: codex.sh --<mode>.
// Cài mới: key người dùng nhập trong app → biến môi trường LTN_TEAM_API_KEY của riêng tiến trình bộ cài (không nằm trên dòng lệnh)
// + chế độ "repair" (= cài đầy đủ, lấy key từ biến đó thay vì hỏi trong Terminal).
function updateCommand(gateway, mode = 'update') {
  // test giao diện: bộ cài giả (không cài thật vào máy chạy test)
  if (process.env.VP_SIMI_FAKE_INSTALLER) return { cmd: process.execPath, args: [process.env.VP_SIMI_FAKE_INSTALLER, mode], fakeNode: true };
  const o = gatewayOrigin(gateway || (readCodexConfig().baseUrl || ''));
  if (IS_WIN) {
    const script = [
      "$ErrorActionPreference='Stop'",
      `$f=Join-Path $env:TEMP ('simi-update-'+[guid]::NewGuid().ToString('N')+'.ps1')`,
      `Invoke-WebRequest -UseBasicParsing -Uri '${o}/install/codex-full.ps1' -OutFile $f -MaximumRedirection 0`,
      '$t=[IO.File]::ReadAllText($f,[Text.UTF8Encoding]::new($false,$true)); [IO.File]::WriteAllText($f,$t,[Text.UTF8Encoding]::new($true))',
      `& (Get-Process -Id $PID).Path -NoLogo -NoProfile -NonInteractive -ExecutionPolicy Bypass -File $f -Mode ${mode}; $c=$LASTEXITCODE; Remove-Item $f -Force -ErrorAction SilentlyContinue; exit $c`,
    ].join('; ');
    return { cmd: 'powershell.exe', args: ['-NoLogo', '-NoProfile', '-ExecutionPolicy', 'Bypass', '-EncodedCommand', Buffer.from(script, 'utf16le').toString('base64')] };
  }
  return { cmd: 'bash', args: ['-lc', `curl -fsSL ${o}/install/codex.sh | bash -s -- --${mode}`] };
}

// kiểm tra key team trước khi cài (báo "key sai" ngay, khỏi chạy bộ cài vài phút rồi mới lỗi)
async function checkKey(gateway, key) {
  key = String(key || '').trim();
  if (!/^[\x21-\x7e]{16,512}$/.test(key)) return { ok: false, error: 'Key chưa đúng dạng – sao chép lại nguyên key IT gửi (không có dấu cách).' };
  const o = gatewayOrigin(gateway || (readCodexConfig().baseUrl || ''));
  const ctl = new AbortController(); const t = setTimeout(() => ctl.abort(), 20000);
  try {
    const r = await fetch(`${o}/v1/models`, { headers: { authorization: `Bearer ${key}` }, signal: ctl.signal });
    if (r.status === 401 || r.status === 403) return { ok: false, error: 'Key không đúng hoặc đã bị khoá – hỏi lại IT nhé.' };
    if (!r.ok) return { ok: false, error: `SIMI Gateway đang bận (mã ${r.status}), thử lại sau ít phút.` };
    const j = await r.json().catch(() => ({}));
    return { ok: true, models: Array.isArray(j.data) ? j.data.length : 0 };
  } catch { return { ok: false, error: `Không kết nối được ${o.replace(/^https?:\/\//, '')} – kiểm tra mạng rồi thử lại.` }; }
  finally { clearTimeout(t); }
}

// ---------- Ubuntu "trắng": thiếu curl / Python / Node.js → bộ cài báo "Thieu dependency" ----------
// Cài trước bằng hộp nhập mật khẩu của Ubuntu (pkexec, 1 lần) – không cần Terminal / sudo.
const LINUX_PKGS = [['curl', 'curl'], ['python3', 'python3'], ['node', 'nodejs'], ['npm', 'npm']];
function hasCmd(cmd) {
  for (const d of String(process.env.PATH || '').split(path.delimiter)) { try { if (d && fs.statSync(path.join(d, cmd)).isFile()) return true; } catch { /* không có */ } }
  return false;
}
function pyModule(mod) {
  try { require('child_process').execFileSync('python3', ['-c', `import ${mod}`], { stdio: 'ignore', timeout: 15000 }); return true; } catch { return false; }
}
/** gói apt còn thiếu (has/py để test) */
function linuxMissing({ has = hasCmd, py = pyModule } = {}) {
  const out = LINUX_PKGS.filter(([cmd]) => !has(cmd)).map(([, pkg]) => pkg);
  const hasPy = has('python3');
  if (!hasPy || !py('ensurepip')) out.push('python3-venv');
  if (!hasPy || !py('pip')) out.push('python3-pip');
  return [...new Set(out)];
}
function prepareLinux(onLine) {
  if (process.platform !== 'linux' || process.env.VP_SIMI_SKIP_PREP === '1') return Promise.resolve({ ok: true });
  const pkgs = linuxMissing();
  if (!pkgs.length) return Promise.resolve({ ok: true });
  if (!hasCmd('apt-get')) return Promise.resolve({ ok: false, error: `Máy thiếu: ${pkgs.join(', ')} – nhờ IT cài giúp rồi bấm Thử lại.` });
  onLine(`Chuẩn bị máy Ubuntu: cài ${pkgs.join(', ')}`);
  const { spawn } = require('child_process');
  const script = `export DEBIAN_FRONTEND=noninteractive; apt-get -o DPkg::Lock::Timeout=180 update -q && apt-get -o DPkg::Lock::Timeout=180 install -y -q ${pkgs.join(' ')}`;
  const [cmd, args] = process.getuid && process.getuid() === 0 ? ['sh', ['-c', script]] : ['pkexec', ['sh', '-c', script]];
  return new Promise((resolve) => {
    let out = '';
    let c;
    try { c = spawn(cmd, args, { stdio: ['ignore', 'pipe', 'pipe'] }); } catch (e) { return resolve({ ok: false, error: e.message }); }
    const keep = (d) => { out = (out + d).slice(-8000); String(d).split(/\r?\n/).filter(Boolean).forEach((l) => onLine(l)); };
    c.stdout.on('data', keep); c.stderr.on('data', keep);
    c.on('error', (e) => resolve({ ok: false, error: e.code === 'ENOENT' ? 'pkexec-missing' : e.message }));
    c.on('close', (code) => {
      if (code === 0) return resolve({ ok: true });
      if (code === 126) return resolve({ ok: false, error: 'pkexec-cancel' });
      if (code === 127) return resolve({ ok: false, error: 'pkexec-missing' });
      resolve({ ok: false, error: /lock/i.test(out) ? 'apt-lock' : firstLine(out.split('\n').filter((l) => /^E:|error/i.test(l)).pop() || `apt-get thoát mã ${code}`) });
    });
  });
}

function runUpdate(gateway, onLine, { mode = 'update', key = '' } = {}) {
  return prepareLinux(onLine).then((prep) => (prep.ok ? runInstaller(gateway, onLine, { mode, key }) : prep));
}

function runInstaller(gateway, onLine, { mode = 'update', key = '' } = {}) {
  const { spawn } = require('child_process');
  const { cmd, args, fakeNode } = updateCommand(gateway, mode);
  const env = { ...process.env, NO_COLOR: '1', TERM: 'dumb', CODEX_NON_INTERACTIVE: '1', ...(fakeNode ? { ELECTRON_RUN_AS_NODE: '1' } : {}) };
  if (key) { env.LTN_TEAM_API_KEY = String(key).trim(); delete env.NINEROUTER_KEY; }
  return new Promise((resolve) => {
    let child;
    try { child = spawn(cmd, args, { windowsHide: true, cwd: HOME, env }); } catch (e) { return resolve({ ok: false, error: e.message }); }
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

// ---------- cập nhật công cụ SIMI ngay khi Gateway đổi (không đợi lịch 6 tiếng của máy) ----------
// Sảnh báo phiên bản bộ công cụ (lời chào + sự kiện "tools-update") → so với bản máy đã đồng bộ → chạy auto-update.mjs
// của bộ cài ở chế độ chỉ tải file (không chạy lại bộ cài, không bật thông báo của Windows), bằng chính Node của app.
let toolsRun = null; let toolsLastAt = 0;
function toolsSyncedVersion() {
  try { return JSON.parse(fs.readFileSync(path.join(codexHome(), 'logs', 'auto-update.json'), 'utf8')).syncedBundle || ''; } catch { return ''; }
}
function updateToolsIfNeeded(version, { delayMs = 0 } = {}) {
  const script = path.join(codexHome(), 'auto-update.mjs');
  if (!version || !/^[a-f0-9]{8,64}$/.test(version) || !fs.existsSync(script)) return Promise.resolve({ skipped: true });
  if (toolsSyncedVersion() === version) return Promise.resolve({ skipped: 'up-to-date' });
  if (toolsRun) return toolsRun;
  if (Date.now() - toolsLastAt < 90_000) return Promise.resolve({ skipped: 'recent' });
  const { spawn } = require('child_process');
  toolsRun = new Promise((resolve) => setTimeout(resolve, delayMs)).then(() => new Promise((resolve) => {
    toolsLastAt = Date.now();
    refreshEnv();
    const base = readCodexConfig().baseUrl || DEFAULT_GATEWAY;
    let child;
    try {
      child = spawn(process.execPath, [script, '--codex-home', codexHome(), '--gateway', gatewayOrigin(base), '--files-only', '--no-notify', '--no-hide-task'],
        { windowsHide: true, cwd: codexHome(), env: { ...process.env, ELECTRON_RUN_AS_NODE: '1' }, stdio: ['ignore', 'pipe', 'ignore'] });
    } catch (e) { return resolve({ error: e.message }); }
    let out = '';
    child.stdout.on('data', (d) => { out = (out + d).slice(-20000); });
    const timer = setTimeout(() => killTree(child), 5 * 60 * 1000);
    child.on('error', (e) => { clearTimeout(timer); resolve({ error: e.message }); });
    child.on('close', () => {
      clearTimeout(timer);
      let status = {};
      try { status = JSON.parse(out.trim().split('\n').pop()); } catch { /* không đọc được */ }
      resolve({ updated: Array.isArray(status.updated) ? status.updated : [], catalog: status.catalog || null, error: status.error || null });
    });
  })).finally(() => { toolsRun = null; });
  return toolsRun;
}

// thông tin gọi Gateway trực tiếp (Sảnh online): base URL từ config Codex + key team + client id của máy
function gatewayAuth() {
  refreshEnv();
  const cfg = readCodexConfig();
  return { baseUrl: cfg.baseUrl || '', key: readKey(), clientId: readClientId() };
}

module.exports = { checkKey, linuxMissing, updateToolsIfNeeded, toolsSyncedVersion, readCodexConfig, refreshEnv, listSkills, listModels, status, openInstaller, codexArgs, chatSettings, chatCodexCmd, desktopCodex, gatewayAuth, gatewayOrigin, runUpdate, BROWSER_MCP, DEFAULT_GATEWAY };
