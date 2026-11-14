// Tiến trình chính của Electron: cửa sổ, hàng đợi việc cho văn phòng, chat, các lệnh IPC cho giao diện.
const { app, BrowserWindow, ipcMain, shell, dialog, safeStorage, Menu, Notification, powerMonitor, systemPreferences, protocol, Tray, nativeImage } = require('electron');
const path = require('path');
const fs = require('fs');

const { Store } = require('./store');
const { SOURCES, callAgent } = require('./providers');
const { runTask } = require('./orchestrator');
const exporter = require('./export');
const accounts = require('./accounts');
const simi = require('./simi');
const skillsAdmin = require('./skills');
const { askFortune } = require('./fortune-ai');
const { BrowserPane } = require('./browser/pane');
const { ChatEngine } = require('./chat');
const { CodexAppServer } = require('./codex-server');
const { Updater, newer } = require('./updater');
const { LobbyClient } = require('./lobby-client');
const { ImageCache, ID: IMG_ID } = require('./lobby-images');
const { hideSimiTask } = require('./simi-task');
const { refreshPath } = require('./sys');
const connectors = require('./connectors');
const { Scheduler } = require('./scheduler');

// test tự động dùng thư mục dữ liệu riêng để không đụng dữ liệu thật
if (process.env.VPAI_USER_DATA) app.setPath('userData', process.env.VPAI_USER_DATA);
if (!app.requestSingleInstanceLock()) { app.quit(); process.exit(0); }
// ảnh chat Sảnh: vpimg://img/<id> – phải đăng ký trước khi app sẵn sàng
protocol.registerSchemesAsPrivileged([{ scheme: 'vpimg', privileges: { standard: true, secure: true, supportFetchAPI: true, stream: true } }]);

const ICON = path.join(__dirname, 'renderer', 'icon.png');
// phiên bản code đang chạy (bản cập nhật nhanh nếu có – xem src/boot.js, src/hot.js)
const appVersion = () => (global.vpShell && global.vpShell.hot) || app.getVersion();
const MODEL_CACHE_MS = 10 * 60 * 1000;
const MAX_UPLOAD = 30 * 1024 * 1024;
const MAX_PREVIEW = 15 * 1024 * 1024;

let win = null;
let store = null;
let chat = null;
let browserPane = null;   // 🌐 trình duyệt cạnh khung Chat (AI điều khiển qua MCP vp_browser)
let codexServer = null;   // `codex app-server`: chạy chat, hỏi quyền, plugin, đọc lịch sử ChatGPT Work
let updater = null;       // tự cập nhật app qua SIMI Gateway
let notifiedUpdate = '';  // phiên bản đã báo
let simiUpdating = null;  // cập nhật SIMI đang chạy
let lobby = null;         // Sảnh online trên SIMI Gateway
let lobbyImages = null;   // bộ đệm ảnh chat Sảnh
let lobbyDnd = false;     // trạng thái "Tập trung" trong Sảnh: không bật thông báo tin nhắn / nhắc tên
let sched = null;         // ⏰ tác vụ đã lên lịch
let tray = null;          // biểu tượng khay hệ thống khi app chạy nền cho tác vụ đã lên lịch
let quitting = false;     // đang thoát thật (không chỉ ẩn cửa sổ)
const queue = [];          // các task chờ
let running = null;        // { task, ac }
const modelCache = new Map();

// ---------------- thư mục ----------------
function ensureDir(d) { fs.mkdirSync(d, { recursive: true }); return d; }
function outputDir() {
  const cfg = store.getConfig();
  return ensureDir(cfg.outputDir && cfg.outputDir.trim() ? cfg.outputDir : path.join(app.getPath('documents'), 'VanPhongAI'));
}
const workDir = () => ensureDir(path.join(outputDir(), '_khu-lam-viec'));
const chatDir = () => ensureDir(path.join(outputDir(), 'Chat'));

function inside(base, p) {
  const rel = path.relative(base, path.resolve(p));
  return !!rel && !rel.startsWith('..') && !path.isAbsolute(rel);
}
const insideOutput = (p) => inside(outputDir(), p);

// sổ kết quả: file văn phòng đã xuất (có thể nằm trong thư mục dự án người dùng chọn) – để Khay kết quả liệt kê và được mở
const resultIndexPath = () => path.join(outputDir(), 'nhat-ky', 'ket-qua.json');
function readResultIndex() {
  try { const a = JSON.parse(fs.readFileSync(resultIndexPath(), 'utf8')); return Array.isArray(a) ? a : []; } catch { return []; }
}
function addResultIndex(r) {
  const list = [{ ...r, at: Date.now() }, ...readResultIndex().filter((x) => x.file !== r.file)].slice(0, 300);
  ensureDir(path.dirname(resultIndexPath()));
  fs.writeFileSync(resultIndexPath(), JSON.stringify(list));
}
const isResultFile = (p) => typeof p === 'string' && (insideOutput(p) || readResultIndex().some((x) => path.resolve(x.file) === path.resolve(p)));

// PDF: in trang HTML bằng Chromium của app (cửa sổ ẩn, tắt JavaScript)
const printPdf = (html) => exporter.pdfFromHtml(html, workDir());

// thư mục dự án người dùng chọn cho file kết quả: phải là thư mục có thật
function taskDir(d) {
  if (!d) return '';
  const p = path.resolve(String(d));
  if (!path.isAbsolute(String(d)) || !fs.existsSync(p) || !fs.statSync(p).isDirectory()) throw new Error('Thư mục lưu kết quả không còn tồn tại – chọn lại thư mục');
  return p;
}
const canOpenChatFile = (p) => typeof p === 'string' && (insideOutput(p) || chat.canAccess(p));

// ---------------- sự kiện tới giao diện + thông báo ----------------
function focusWindow() { if (!win) return; if (win.isMinimized()) win.restore(); win.show(); win.focus(); }

function notify(title, body, onClick) {
  if (store.getConfig().notify === false || !Notification.isSupported() || !win || win.isFocused()) return;
  const n = new Notification({ title, body, icon: ICON });
  n.on('click', () => { focusWindow(); if (onClick) onClick(); });
  n.show();
}

function emit(e) {
  if (win && !win.isDestroyed()) win.webContents.send('evt', e);
  if (e.type === 'result') notify('Văn Phòng AI – Đã xong việc', e.title);
  if (e.type === 'chat-computer') onComputer(e);
  // bản mới đã tải sẵn → báo 1 lần cho mỗi phiên bản (đang ở cửa sổ khác thì hiện thông báo của hệ điều hành)
  // (cập nhật nhanh tự cài thì không báo – app tự dùng bản mới khi mở lại)
  if (e.type === 'update' && e.state.status === 'ready' && e.state.version && notifiedUpdate !== e.state.version && !(e.state.kind === 'app' && store && store.getConfig().autoUpdate !== false)) {
    notifiedUpdate = e.state.version;
    notify(`⬆️ Văn Phòng AI ${e.state.version} đã sẵn sàng`, 'Bấm để cập nhật – app tự cài và mở lại sau khoảng 20 giây.', () => win.webContents.send('evt', { type: 'update-open' }));
  }
  if (e.type === 'chat-ask') {
    notify(`🔐 Cần bạn cho phép: ${e.title || 'Chat'}`.slice(0, 80), `${e.ask.title}${e.ask.detail ? ' – ' + String(e.ask.detail).split('\n')[0] : ''}`.slice(0, 140),
      () => win.webContents.send('evt', { type: 'chat-open', threadId: e.threadId }));
  }
  if (e.type === 'chat' && e.ev === 'done') {
    const m = e.message || {};
    const txt = (m.blocks || []).filter((x) => x.kind === 'text').map((x) => x.text).join(' ').replace(/\s+/g, ' ').slice(0, 140);
    notify(m.error ? 'Văn Phòng AI – Chat bị lỗi' : `Đã trả lời: ${e.title || ''}`.slice(0, 80), m.error || txt || 'Xong',
      () => win.webContents.send('evt', { type: 'chat-open', threadId: e.threadId }));
  }
}

// ---------------- điều khiển máy tính (MCP vp_computer cho tab Chat) ----------------
// chạy bằng chính file thực thi của app ở chế độ Node; trong bản đóng gói, script nằm ở app.asar.unpacked
const computerScript = () => path.join(__dirname, 'computer', 'mcp.js').replace(/app\.asar([\\/])/, 'app.asar.unpacked$1');
function computerMcp() {
  if (store.getConfig().computerControl === false) return {};
  return {
    'mcp_servers.vp_computer.command': process.execPath,
    'mcp_servers.vp_computer.args': [computerScript()],
    // Codex chỉ chuyển một ít biến môi trường cho MCP → đưa thêm biến cần để thấy màn hình (DISPLAY…) và chạy PowerShell
    'mcp_servers.vp_computer.env': {
      ELECTRON_RUN_AS_NODE: '1',
      ...Object.fromEntries(['DISPLAY', 'XAUTHORITY', 'WAYLAND_DISPLAY', 'XDG_RUNTIME_DIR', 'XDG_SESSION_TYPE', 'DBUS_SESSION_BUS_ADDRESS', 'PATH', 'Path', 'SystemRoot', 'windir', 'TEMP', 'TMP', 'USERPROFILE', 'LOCALAPPDATA', 'APPDATA', 'HOME', 'LANG']
        .filter((k) => process.env[k]).map((k) => [k, process.env[k]])),
    },
  };
}

// 🌐 MCP "vp_browser": trình duyệt cạnh khung Chat – script chạy bằng app ở chế độ Node, gọi về app qua HTTP cục bộ có token
const browserScript = () => path.join(__dirname, 'browser', 'mcp.js').replace(/app\.asar([\\/])/, 'app.asar.unpacked$1');
// Cách chạy MCP đã kiểm chứng trên máy này. Mặc định: chính app ở chế độ Node (ELECTRON_RUN_AS_NODE). Máy nào cách đó không chạy
// (gặp trên một số máy Mac) thì dùng Node của bộ SIMI / Node trong PATH – mcp.js chỉ cần Node thuần.
let browserLaunch = null; // { command, env }
let browserMcpIssue = '';   // lý do AI chưa điều khiển được trình duyệt cạnh chat (hiện ở menu Công cụ + nhật ký)
const passEnv = () => Object.fromEntries(['SystemRoot', 'windir', 'PATH', 'Path', 'TEMP', 'TMP', 'TMPDIR', 'USERPROFILE', 'LOCALAPPDATA', 'APPDATA', 'HOME', 'LANG'].filter((k) => process.env[k]).map((k) => [k, process.env[k]]));
function browserMcp() {
  if (!browserPane || store.getConfig().builtinBrowser === false) return {};
  const launch = browserLaunch || { command: process.execPath, env: { ELECTRON_RUN_AS_NODE: '1' } };
  return {
    'mcp_servers.vp_browser.command': launch.command,
    'mcp_servers.vp_browser.args': [browserScript()],
    'mcp_servers.vp_browser.env': { ...launch.env, VPB_CONN: browserPane.connFile, ...passEnv() },
    'mcp_servers.vp_browser.startup_timeout_sec': 30,
    'mcp_servers.vp_browser.tool_timeout_sec': 180,
    // trình duyệt riêng của app, người dùng nhìn thấy từng bước → không hỏi quyền từng công cụ (như Trình duyệt SIMI)
    'mcp_servers.vp_browser.default_tools_approval_mode': 'approve',
    // khung này chính là Trình duyệt SIMI: ẩn các công cụ trình duyệt trùng của simi_browser (mở Chrome SIMI riêng) –
    // simi_browser chỉ còn tìm web, tạo / sửa ảnh, chép lời, đọc / sửa tài liệu
    ...(simiBrowserOn() ? { [`mcp_servers.${simi.BROWSER_MCP}.disabled_tools`]: simi.BROWSER_DUP_TOOLS } : {}),
  };
}
const simiBrowserOn = () => { try { return !!simi.readCodexConfig().browserMcp; } catch { return false; } };
const builtinOn = () => !!browserPane && store.getConfig().builtinBrowser !== false;

// 🔌 kết nối MCP người dùng thêm (GitHub, MCP tuỳ chỉnh) – token lấy từ secrets.bin, chỉ đưa vào phiên, không ghi ra file cấu hình
function connectorsMcp() {
  try { return connectors.codexConfig(store.getConfig().connectors || [], (n) => store.getSecret(n)); } catch { return {}; }
}

// ---------------- ⏰ chạy nền cho tác vụ đã lên lịch ----------------
// đóng cửa sổ khi đang có tác vụ bật → ẩn xuống khay hệ thống thay vì thoát, tác vụ vẫn chạy đúng giờ
const backgroundWanted = () => !quitting && store && store.getConfig().schedBackground !== false && !!sched && sched.data.tasks.some((t) => t.enabled);
function ensureTray() {
  if (tray) return;
  let img = nativeImage.createFromPath(ICON);
  if (!img.isEmpty()) img = img.resize({ width: process.platform === 'darwin' ? 18 : 16 });
  tray = new Tray(img);
  tray.setToolTip('Văn Phòng AI – đang chạy nền cho tác vụ đã lên lịch');
  tray.setContextMenu(Menu.buildFromTemplate([
    { label: 'Mở Văn Phòng AI', click: () => focusWindow() },
    { label: '⏰ Tác vụ đã lên lịch', click: () => { focusWindow(); if (win) win.webContents.send('evt', { type: 'sched-open' }); } },
    { type: 'separator' },
    { label: 'Thoát hẳn', click: () => { quitting = true; app.quit(); } },
  ]));
  tray.on('click', () => focusWindow());
}

// Tự chạy thử MCP vp_browser đúng như Codex sẽ chạy (môi trường đã lọc): cách nào chạy được thì dùng cách đó.
// Không cách nào chạy → ghi rõ lý do để người dùng / kỹ thuật thấy, thay vì AI lặng lẽ không vào được trình duyệt.
async function probeBrowserMcp() {
  if (!browserPane) return;
  const { McpClient } = require('./ext-tools');
  const script = browserScript();
  simi.refreshEnv();
  const tries = [
    { command: process.execPath, env: { ELECTRON_RUN_AS_NODE: '1' }, label: 'app' },
    ...[process.env.LTN_BROWSER_NODE_PATH, process.env.LTN_NODE_PATH, 'node'].filter(Boolean).map((n) => ({ command: n, env: {}, label: 'node' })),
  ];
  const errors = [];
  if (!fs.existsSync(script)) errors.push('thiếu file ' + script);
  else for (const t of tries) {
    const c = new McpClient('vp_browser', { command: t.command, args: [script], env: { ...t.env, VPB_CONN: browserPane.connFile, ...passEnv() }, exactEnv: true });
    try {
      const tools = await c.init();
      if (!tools.some((x) => x.name === 'browser_open')) throw new Error('không trả danh sách công cụ');
      browserLaunch = { command: t.command, env: t.env }; browserMcpIssue = '';
      if (t.label !== 'app') emit({ type: 'log', level: 'info', text: '🌐 Trình duyệt cạnh chat: chạy bằng Node của máy (cách mặc định không chạy được trên máy này).' });
      return;
    } catch (e) { errors.push(`${t.label}: ${e.message || e}`); } finally { c.close(); }
  }
  browserMcpIssue = errors.join(' · ').slice(0, 400);
  emit({ type: 'log', level: 'error', text: '🌐 AI chưa điều khiển được trình duyệt cạnh chat trên máy này: ' + browserMcpIssue });
}

// kiểm tra máy có điều khiển được không (quyền macOS, xdotool trên Linux)
function computerCheck() {
  const cfg = store.getConfig();
  const out = { enabled: cfg.computerControl !== false, platform: process.platform, ok: true, issues: [] };
  if (process.platform === 'darwin') {
    out.accessibility = systemPreferences.isTrustedAccessibilityClient(false);
    out.screen = systemPreferences.getMediaAccessStatus('screen');
    if (!out.accessibility) out.issues.push('Chưa cấp quyền Accessibility (điều khiển chuột, bàn phím)');
    if (out.screen !== 'granted') out.issues.push('Chưa cấp quyền Screen Recording (chụp màn hình)');
  } else if (process.platform === 'linux') {
    const has = (c) => (process.env.PATH || '').split(':').some((d) => d && fs.existsSync(path.join(d, c)));
    if (!process.env.DISPLAY) out.issues.push('Đang ở phiên Wayland – chọn "Ubuntu on Xorg" khi đăng nhập');
    if (!has('xdotool')) out.issues.push('Thiếu xdotool (sudo apt install xdotool)');
    if (!has('import')) out.issues.push('Thiếu ImageMagick (sudo apt install imagemagick)');
  }
  out.ok = out.issues.length === 0;
  return out;
}

async function syncSimiTools(version, delayMs) {
  const r = await simi.updateToolsIfNeeded(version, { delayMs }).catch((e) => ({ error: e.message }));
  if (!r || r.skipped) return;
  const files = (r.updated || []).length;
  if (r.error && !files) { emit({ type: 'log', level: 'info', text: 'Cập nhật công cụ SIMI chưa xong: ' + r.error }); return; }
  if (files || (r.catalog && (r.catalog.updated || r.catalog.defaultModel))) {
    // Codex chạy ngầm đọc công cụ / danh sách model lúc khởi động → đang rảnh thì tắt để lượt sau dùng bản mới
    if (codexServer && !codexServer.active) codexServer.stop();
    emit({ type: 'toast', text: `🧰 Đã cập nhật công cụ SIMI${files ? ` (${files} file)` : ''} – đoạn chat mới dùng bản mới ngay.` });
  }
}

// AI đang cầm chuột → thu nhỏ app cho khỏi che màn hình; xong lượt thì hiện lại
const computerRuns = new Set();
let computerHid = false;
function onComputer(e) {
  if (e.active) computerRuns.add(e.threadId); else computerRuns.delete(e.threadId);
  if (!win || win.isDestroyed() || store.getConfig().computerMinimize === false) return;
  if (computerRuns.size && !computerHid && !win.isMinimized()) { computerHid = true; win.minimize(); }
  if (!computerRuns.size && computerHid) { computerHid = false; win.restore(); win.focus(); }
}

// ---------------- hàng đợi việc của văn phòng ----------------
async function pump() {
  if (running || queue.length === 0) return;
  const task = queue.shift();
  const ac = new AbortController();
  running = { task, ac };
  try {
    await runTask(task, {
      config: store.getConfig(), emit, signal: ac.signal,
      getSecret: (n) => store.getSecret(n), workDir: workDir(), outputDir: outputDir(),
      printPdf, onResult: (r) => { try { addResultIndex(r); } catch { /* sổ kết quả chỉ để tiện xem lại */ } },
    });
  } catch (e) {
    const cancelled = ac.signal.aborted;
    emit({ type: 'task', id: task.id, status: cancelled ? 'cancelled' : 'error', note: e.message });
    emit({ type: 'log', level: cancelled ? 'info' : 'error', text: cancelled ? `Đã dừng việc "${task.title}"` : e.message });
    for (const a of store.getConfig().agents) emit({ type: 'agent', id: a.id, state: 'idle' });
  } finally {
    running = null;
    setImmediate(pump);
  }
}

// ---------------- IPC ----------------
// ⏰ một lượt của tác vụ đã lên lịch: gửi yêu cầu vào Chat (đoạn chat mới mỗi lần, hoặc nối tiếp 1 đoạn chat)
async function runScheduled(t) {
  let id = t.thread === 'same' && t.threadId && chat.store.get(t.threadId) ? t.threadId : null;
  if (!id) {
    const d = new Date();
    const stamp = `${String(d.getDate()).padStart(2, '0')}/${String(d.getMonth() + 1).padStart(2, '0')} ${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`;
    id = chat.create({ project: t.project || '', model: t.model || '', agentId: t.agentId || null, sandbox: t.sandbox, title: `⏰ ${t.name} · ${stamp}`.slice(0, 80) }).id;
    emit({ type: 'sched', threadId: id });
  }
  emit({ type: 'log', level: 'info', text: `⏰ Chạy tác vụ đã lên lịch: ${t.name}` });
  const r = await chat.send(id, { text: t.prompt, ...(t.model ? { model: t.model } : {}) });
  return { threadId: id, ok: !!(r && r.ok), error: r && !r.ok ? ((r.message && r.message.error) || 'Có lỗi') : '' };
}
function notifyScheduled(t, run) {
  if (!Notification.isSupported() || store.getConfig().notify === false) return;
  const n = new Notification({ title: `${run.ok ? '✅' : '⚠️'} Tác vụ: ${t.name}`.slice(0, 80), body: run.ok ? `Đã xong sau ${Math.round(run.ms / 1000)} giây – bấm để xem kết quả` : `Chưa xong: ${run.error}`.slice(0, 160), icon: ICON });
  n.on('click', () => { focusWindow(); if (run.threadId && win) win.webContents.send('evt', { type: 'chat-open', threadId: run.threadId }); });
  n.show();
}

function registerIpc() {
  const handle = (ch, fn) => ipcMain.handle(ch, (_e, ...a) => fn(...a));

  // cấu hình + khóa API
  handle('config:get', () => ({ config: store.getConfig(), sources: SOURCES, secrets: store.secretStatus(), outputDir: outputDir(), platform: process.platform, version: appVersion() }));
  handle('config:save', (cfg) => {
    if (!cfg || !Array.isArray(cfg.agents) || cfg.agents.length === 0) throw new Error('Cấu hình không hợp lệ');
    if (cfg.agents.filter((a) => a.isManager).length !== 1) throw new Error('Phải có đúng 1 Trưởng phòng');
    const prev = store.getConfig().verified; if (prev) cfg.verified = prev; else delete cfg.verified; // kết quả Thử kết nối do app (main) giữ
    const mp = store.getConfig().modelPrefs; if (mp) cfg.modelPrefs = mp; else delete cfg.modelPrefs; // model hiển thị: lưu riêng qua models:prefs
    store.saveConfig(cfg);
    return { ok: true, outputDir: outputDir() };
  });
  handle('config:projects', (list) => {
    const cfg = store.getConfig();
    cfg.chatProjects = (Array.isArray(list) ? list : []).filter((x) => x && typeof x.dir === 'string' && fs.existsSync(x.dir)).slice(0, 40)
      .map((x) => ({ name: String(x.name || path.basename(x.dir)).slice(0, 60), dir: x.dir }));
    store.saveConfig(cfg);
    return cfg.chatProjects;
  });
  handle('secret:set', (name, value) => {
    if (!['anthropic', 'openai', 'gemini'].includes(name)) throw new Error('Tên khóa không hợp lệ');
    store.setSecret(name, (value || '').trim());
    for (const k of [...modelCache.keys()]) if (k.endsWith('-api')) modelCache.delete(k);
    return store.secretStatus();
  });

  // việc của văn phòng
  handle('task:add', (t) => {
    const task = {
      id: 't' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
      title: String(t.title || '').trim().slice(0, 120) || 'Việc mới',
      text: String(t.text || '').trim(),
      targetId: t.targetId,
      format: exporter.FORMATS[t.format] ? t.format : 'auto',
      fileName: exporter.safeName(t.fileName || '') ? String(t.fileName).trim().slice(0, 160) : '',
      outDir: taskDir(t.outDir),
    };
    if (!task.text) throw new Error('Nội dung việc đang trống');
    queue.push(task);
    emit({ type: 'task', id: task.id, status: 'queued' });
    setImmediate(pump);
    return task.id;
  });
  handle('task:cancel', (id) => {
    if (running && running.task.id === id) { running.ac.abort(); return true; }
    const i = queue.findIndex((t) => t.id === id);
    if (i < 0) return false;
    queue.splice(i, 1);
    emit({ type: 'task', id, status: 'cancelled' });
    return true;
  });

  // tài khoản + model
  handle('accounts:check', async () => {
    const r = await accounts.checkAll(store.getConfig(), store.secretStatus());
    if (r.antigravity && r.antigravity.verify) { remember('antigravity-cli', true); delete r.antigravity.verify; } // agy liệt kê được model = đã đăng nhập
    return r;
  });
  handle('models:list', async (source, refresh) => {
    const hit = modelCache.get(source);
    // model hiển thị người dùng tự chọn (Kết nối tài khoản AI → ⚙️ Chọn model) áp sau cache → đổi là thấy ngay
    if (hit && !refresh && Date.now() - hit.t < MODEL_CACHE_MS) return accounts.applyModelPrefs(source, hit.v, store.getConfig());
    let v;
    try { v = await accounts.listModels(source, store.getConfig(), (n) => store.getSecret(n)); }
    catch (e) { v = { models: [], live: false, error: e.message.split('\n')[0] }; }
    if (v.models.length) modelCache.set(source, { t: Date.now(), v });
    return accounts.applyModelPrefs(source, v, store.getConfig());
  });
  handle('models:catalog', (source) => accounts.catalogModels(source, store.getConfig(), (n) => store.getSecret(n)));
  handle('models:prefs', (source, prefs) => {
    if (source === 'simi' || !/^[a-z-]{2,30}$/.test(String(source))) throw new Error('Tài khoản không hợp lệ');
    const cfg = store.getConfig();
    const all = { ...(cfg.modelPrefs || {}) };
    if (!prefs) delete all[source];
    else {
      const ok = (id) => typeof id === 'string' && /^[\w.:/@[\]+-]{1,120}$/.test(id);
      const show = [...new Set((prefs.show || []).filter(ok))].slice(0, 40);
      const labels = Object.fromEntries(Object.entries(prefs.labels || {}).filter(([k, v]) => ok(k) && show.includes(k) && typeof v === 'string').map(([k, v]) => [k, v.slice(0, 80)]));
      all[source] = { show, labels };
    }
    cfg.modelPrefs = all; store.saveConfig(cfg);
    return all[source] || null;
  });
  handle('terminal:open', (key) => accounts.openTerminal(key));
  handle('agent:test', async (agent) => {
    const t0 = Date.now();
    try {
      const text = await callAgent(agent, 'Bạn đang được kiểm tra kết nối.', 'Trả lời đúng một chữ: OK', {
        config: store.getConfig(), signal: new AbortController().signal, getSecret: (n) => store.getSecret(n), workDir: workDir(),
      }, { kind: 'ping' });
      remember(agent.source, true);
      return { ok: true, text: text.slice(0, 200), ms: Date.now() - t0 };
    } catch (e) { remember(agent.source, false, e.message); return { ok: false, text: e.message, ms: Date.now() - t0 }; }
  });
  // nhớ kết quả Thử: Antigravity chạy được = đã đăng nhập; Gemini CLI báo "tài khoản cá nhân không còn hỗ trợ" thì thôi hiện "Đã kết nối"
  function remember(source, ok, msg = '') {
    const cfg = store.getConfig(); const v = { ...(cfg.verified || {}) }; const before = JSON.stringify(v);
    if (source === 'antigravity-cli') { if (ok) v.antigravity = Date.now(); else if (/đăng nhập|log ?in|sign ?in|authenticat|unauthori/i.test(msg)) delete v.antigravity; }
    if (source === 'gemini-cli') { if (ok) delete v.geminiPersonal; else if (/Antigravity từ 18\/6\/2026/.test(msg)) v.geminiPersonal = Date.now(); }
    if (JSON.stringify(v) !== before) { cfg.verified = v; store.saveConfig(cfg); }
  }

  // Sảnh online
  handle('lobby:status', () => lobby.status());
  handle('lobby:connect', (on) => { const cfg = store.getConfig(); cfg.lobbyEnabled = !!on; store.saveConfig(cfg); if (on) lobby.start(); else lobby.stop(); return lobby.status(); });
  handle('lobby:kick', () => { if (store.getConfig().lobbyEnabled !== false) { lobby.start(); lobby.kick(); } return lobby.status(); });
  handle('lobby:send', (payload) => lobby.send(payload));
  handle('lobby:presence', (payload) => lobby.setPresence(payload));
  handle('lobby:profile', (payload) => lobby.saveProfile(payload));
  handle('lobby:history', (room, before) => lobby.history(room, before));
  handle('lobby:members', () => lobby.members());
  handle('lobby:pairMobile', () => lobby.pairMobile());
  handle('lobby:mobileSessions', () => lobby.mobileSessions());
  handle('lobby:revokeMobile', (id) => lobby.revokeMobile(id));
  handle('lobby:cinema', (payload) => lobby.cinema(payload || {}));
  handle('lobby:cinemaState', () => lobby.cinemaState());
  handle('lobby:upload', (payload) => lobby.upload(payload || {}));
  handle('lobby:deleteMsg', (room, id) => lobby.deleteMsg(room, id));
  handle('lobby:react', (room, id, emoji) => lobby.react(String(room || ''), String(id || ''), String(emoji || '')));
  handle('lobby:admin', () => lobby.admin());
  handle('lobby:adminDo', (payload) => lobby.adminDo(payload || {}));
  handle('lobby:npcModels', () => lobby.npcModels());
  handle('lobby:cat', (payload) => lobby.call('cat', payload || {}));
  handle('lobby:interact', (payload) => lobby.call('interact', payload || {}));
  handle('lobby:npc', () => lobby.call('npc', undefined, 'GET'));
  handle('lobby:game', (payload) => lobby.call('game', payload || {}));
  handle('lobby:games', () => lobby.call('games', undefined, 'GET'));
  // 📮 Hòm thư góp ý SIMI
  handle('lobby:ideas', () => lobby.call('ideas', undefined, 'GET'));
  handle('lobby:ideaDo', (action, body) => {
    const path = { create: 'ideas', vote: 'ideas/vote', review: 'ideas/review', delete: 'ideas/delete' }[action];
    if (!path) throw new Error('Thao tác không hợp lệ');
    return lobby.call(path, body && typeof body === 'object' ? body : {});
  });
  handle('lobby:npcAsk', (payload) => lobby.npcAsk(payload || {}));
  handle('lobby:npcFeedback', (payload) => lobby.call('npc/feedback', payload || {}));
  handle('lobby:dnd', (on) => { lobbyDnd = !!on; return true; });
  // lưu ảnh trong chat về máy (hộp chọn chỗ lưu)
  handle('lobby:saveImage', async (id) => {
    if (!IMG_ID.test(String(id))) throw new Error('Ảnh không hợp lệ');
    const r = await lobbyImages.get(String(id), false);
    if (r.status !== 200) throw new Error('Ảnh không còn trên máy chủ');
    const ext = { 'image/png': 'png', 'image/jpeg': 'jpg', 'image/webp': 'webp', 'image/gif': 'gif' }[r.type] || 'img';
    const pick = await dialog.showSaveDialog(win, { defaultPath: path.join(app.getPath('downloads'), `anh-sanh-${String(id).slice(0, 8)}.${ext}`) });
    if (pick.canceled || !pick.filePath) return null;
    fs.writeFileSync(pick.filePath, r.data);
    return pick.filePath;
  });

  // SIMI Gateway
  handle('simi:status', () => simi.status(store.getConfig().cli.codex.cmd || 'codex'));
  handle('simi:skills', () => simi.listSkills());
  // 📚 thêm / sửa / xoá skill của người dùng ngay trong app
  const skillsChanged = () => { if (codexServer && !codexServer.active) codexServer.stop(); }; // Codex nạp lại skill ở lượt sau
  const trash = (dir) => shell.trashItem(dir).catch(() => fs.rmSync(dir, { recursive: true, force: true }));
  handle('skills:read', (name) => skillsAdmin.readSkill(name));
  handle('fortune:ask', (p) => askFortune(p || {})); // 🎋 AI viết quẻ đầu ngày
  // 🌐 trình duyệt cạnh khung Chat: renderer báo vị trí ô trống, người dùng bấm thanh công cụ
  ipcMain.on('browser:bounds', (_e, b, visible, covered, pip) => { if (browserPane) browserPane.setBounds(b, visible, covered, pip); });
  handle('browser:ui', (cmd) => { if (browserPane) browserPane.ui(cmd || {}); return null; });
  handle('browser:state', () => (browserPane ? browserPane.state() : null));
  handle('skills:save', (p) => { const r = skillsAdmin.saveSkill(p || {}); skillsChanged(); return r; });
  handle('skills:remove', async (name) => { const r = await skillsAdmin.removeSkill(name, trash); skillsChanged(); return r; });
  handle('skills:import', async (paths, overwrite) => {
    const r = await skillsAdmin.importSkills((Array.isArray(paths) ? paths : []).filter((x) => typeof x === 'string').slice(0, 20), { overwrite: !!overwrite, trash });
    if (r.imported.length) skillsChanged();
    return r;
  });
  handle('skills:pick', async (kind) => {
    const opts = kind === 'folder' ? { properties: ['openDirectory', 'multiSelections'], title: 'Chọn thư mục skill (có file SKILL.md)' }
      : { properties: ['openFile', 'multiSelections'], title: 'Chọn file skill', filters: [{ name: 'Skill (.zip, .skill, SKILL.md)', extensions: ['zip', 'skill', 'md'] }] };
    const r = await dialog.showOpenDialog(win, opts);
    return r.canceled ? [] : r.filePaths;
  });
  handle('skills:openDir', () => { const d = skillsAdmin.skillsDir(); fs.mkdirSync(d, { recursive: true }); return shell.openPath(d); });
  handle('simi:install', () => simi.openInstaller(store.getConfig().simiGateway));
  // cài mới / cập nhật SIMI – chạy ngầm (không mở Terminal), app chỉ hiện các bước dễ hiểu
  const runSimi = (mode, key) => {
    if (simiUpdating) return simiUpdating;
    emit({ type: 'simi-update', ev: 'start', mode });
    simiUpdating = simi.runUpdate(store.getConfig().simiGateway, (line) => emit({ type: 'simi-update', ev: 'line', line }), { mode: key ? 'repair' : 'update', key }).then((r) => {
      simiUpdating = null;
      modelCache.delete('simi');
      simi.refreshEnv();
      codexServer.stop(); // nạp lại cấu hình, skill, plugin mới
      emit({ type: 'simi-update', ev: 'done', ok: r.ok, error: r.error || '', mode });
      return r;
    });
    return simiUpdating;
  };
  handle('simi:update', () => runSimi('update'));
  handle('simi:checkKey', (key) => simi.checkKey(store.getConfig().simiGateway, key));
  handle('simi:setup', async (key) => {
    const chk = await simi.checkKey(store.getConfig().simiGateway, key);
    if (!chk.ok) return { ok: false, error: chk.error, step: 'key' };
    return runSimi('install', String(key).trim());
  });
  // tải app Codex (ChatGPT) chính thức: Windows mở Microsoft Store, máy khác mở trang tải của OpenAI
  handle('simi:getCodex', async () => {
    if (process.platform === 'win32') {
      try { await shell.openExternal('ms-windows-store://pdp/?productid=9PLM9XGG6VKS'); return { ok: true, via: 'store' }; } catch { /* không có Store → trang tải */ }
      await shell.openExternal('https://get.microsoft.com/installer/download/9PLM9XGG6VKS?cid=website_cta_psi'); return { ok: true, via: 'web' };
    }
    await shell.openExternal('https://openai.com/codex/'); return { ok: true, via: 'web' };
  });

  // tự cập nhật app
  handle('update:state', () => updater.state);
  handle('update:check', () => updater.check());
  handle('update:download', () => updater.download());
  handle('update:cancel', () => updater.cancel());
  handle('update:install', () => updater.install());
  handle('update:now', () => updater.updateNow());

  // chat
  // đoạn chat mở từ ChatGPT Work: chia nhóm theo dự án của Codex (thư mục nháp → mục Đoạn chat)
  // 🔌 kết nối MCP
  const connView = (c) => ({ ...c, hasToken: !!store.getSecret(connectors.secretKey(c.id)), icon: (connectors.PRESETS[c.preset] || {}).icon || '🔌' });
  handle('conn:presets', () => connectors.PRESETS);
  handle('conn:list', () => (store.getConfig().connectors || []).map(connView));
  handle('conn:save', (c, token) => {
    const cfg = store.getConfig(); const list = cfg.connectors || [];
    const n = connectors.normalize(c || {}, list);
    const i = list.findIndex((x) => x.id === (c && c.id));
    if (i >= 0) list[i] = n; else list.push(n);
    cfg.connectors = list; store.saveConfig(cfg);
    if (typeof token === 'string' && token.trim()) store.setSecret(connectors.secretKey(n.id), token.trim());
    if (codexServer) codexServer.restartIfChanged();
    return connView(n);
  });
  handle('conn:remove', (id) => {
    const cfg = store.getConfig(); cfg.connectors = (cfg.connectors || []).filter((x) => x.id !== id); store.saveConfig(cfg);
    store.setSecret(connectors.secretKey(id), ''); return true;
  });
  handle('conn:test', async (c, token) => {
    const list = store.getConfig().connectors || [];
    const saved = c && c.id ? list.find((x) => x.id === c.id) : null;
    const n = connectors.normalize({ ...(saved || {}), ...(c || {}) }, list);
    const tok = (typeof token === 'string' && token.trim()) || (saved ? store.getSecret(connectors.secretKey(saved.id)) : '');
    return connectors.test(n, tok);
  });

  // ⏰ tác vụ đã lên lịch
  handle('sched:list', () => ({ ...sched.list(), background: store.getConfig().schedBackground !== false, openAtLogin: !!store.getConfig().openAtLogin }));
  handle('sched:save', (t) => sched.save(t || {}));
  handle('sched:remove', (id) => sched.remove(id));
  handle('sched:toggle', (id, on) => sched.toggle(id, on));
  handle('sched:run', (id) => sched.runNow(id));
  handle('sched:prefs', (p) => {
    const cfg = store.getConfig();
    if ('background' in p) cfg.schedBackground = !!p.background;
    if ('openAtLogin' in p) {
      cfg.openAtLogin = !!p.openAtLogin;
      try { app.setLoginItemSettings({ openAtLogin: cfg.openAtLogin, args: ['--hidden'] }); } catch { /* hệ điều hành không cho */ }
    }
    store.saveConfig(cfg); return true;
  });

  handle('chat:list', () => chat.store.list().map((t) => (t.origin === 'codex' ? { ...t, project: chat.projectFor(t.cwd || t.project) } : t)));
  handle('chat:get', (id) => chat.open(id));
  handle('chat:recoverables', () => chat.store.recoverables());
  handle('chat:restore', (id, file) => chat.store.restore(id, file));
  handle('chat:create', (o) => chat.create(o || {}));
  handle('chat:update', (id, patch) => chat.update(id, patch || {}));
  handle('chat:delete', (id, everywhere) => chat.remove(id, { everywhere: !!everywhere }));
  handle('chat:archive', (id, on) => chat.archive(id, on !== false));
  handle('chat:archiveExternal', (codexId, on) => chat.archiveExternal(String(codexId || ''), on !== false));
  handle('chat:deleteExternal', (codexId) => chat.deleteExternal(String(codexId || '')));
  handle('chat:archived', () => chat.listArchived());
  handle('chat:external', async () => {
    const projects = (() => { try { return chat.codexProjects(); } catch { return []; } })();
    try { return { threads: await chat.listExternal(), projects }; } catch (e) { return { threads: [], projects, error: e.message.split('\n')[0] }; }
  });
  handle('chat:import', (codexId) => chat.importExternal(codexId));
  handle('chat:sync', (id) => chat.sync(id));
  handle('chat:send', (id, payload) => chat.send(id, payload || {}));
  handle('chat:edit', (id, index, payload) => chat.edit(id, Number(index), payload || {}));
  handle('chat:stop', (id) => chat.stop(id));
  handle('chat:running', () => [...chat.running.keys()]);
  handle('chat:answer', (id, rid, choice, values) => chat.answer(id, rid, choice, values));
  handle('chat:asks', (id) => [...chat.asks.values()].filter((a) => a.run.threadId === id).map((a) => a.block));
  // Computer Use, trình duyệt SIMI, plugin, MCP
  handle('chat:setupComputerUse', () => { codexServer.restartIfChanged(); return chat.setupComputerUse(); });
  handle('chat:checkComputerUse', () => { codexServer.restartIfChanged(); return chat.checkComputerUse(); });
  handle('chat:tools', async () => { codexServer.restartIfChanged(); return { ...(await chat.tools()), builtin: builtinOn() }; });
  handle('chat:installPlugin', (name, mk) => chat.installPlugin(String(name || ''), mk || null).then((r) => { codexServer.stop(); return r; }));
  handle('chat:openBrowser', (url) => {
    const u = typeof url === 'string' && /^https?:\/\//i.test(url) ? url : '';
    // Trình duyệt SIMI = khung cạnh chat: mở trang ngay trong khung để người dùng đăng nhập (không bật Chrome riêng)
    if (builtinOn()) return browserPane.call('browser_open_window', u ? { url: u } : {}).then(() => ({ builtin: true }));
    return chat.openBrowser(u);
  });
  // danh sách cho menu @ trong ô chat: công cụ của app + plugin Codex đã cài
  let mentionCache = null;
  handle('chat:mentions', async () => {
    if (mentionCache && mentionCache.issue === browserMcpIssue && Date.now() - mentionCache.t < 5 * 60 * 1000) return mentionCache.v;
    const cfg = store.getConfig();
    const tools = [
      { id: 'vp_browser', name: 'Trình duyệt SIMI', icon: '🌐', desc: browserMcpIssue ? '⚠️ AI chưa điều khiển được trên máy này: ' + browserMcpIssue : 'Trình duyệt hiện cạnh khung chat – AI mở trang, bấm, gõ; bạn xem trực tiếp', enabled: !!browserPane && cfg.builtinBrowser !== false },
      { id: 'canva_web', name: 'Canva', icon: '🎨', desc: 'Thiết kế trên Canva ngay trong trình duyệt cạnh chat (đăng nhập Canva 1 lần)', enabled: !!browserPane && cfg.builtinBrowser !== false },
      { id: 'vp_computer', name: 'Máy tính', icon: '🖱️', desc: 'Điều khiển chuột, bàn phím – mọi app trên máy, kể cả trình duyệt', enabled: cfg.computerControl !== false },
      // có khung cạnh chat thì Chrome SIMI riêng không còn dùng nữa → ẩn khỏi danh sách @
      { id: 'simi_browser', name: 'Trình duyệt SIMI', icon: '🧭', desc: 'Đọc & thao tác trang web (điền form, sửa / đăng bài) – cửa sổ Chrome SIMI riêng, giữ đăng nhập', enabled: !!simi.readCodexConfig().browserMcp && !builtinOn() },
    ];
    let plugins = [];
    try { plugins = (await codexServer.plugins()).plugins.filter((p) => p.installed && p.enabled).map((p) => ({ id: p.id, name: p.name, title: /computer-use/.test(p.name) ? 'Computer Use (ChatGPT)' : p.title, description: p.description })); } catch { /* Codex chưa sẵn sàng */ }
    const seen = new Set();
    plugins = plugins.filter((p) => !seen.has(p.id) && seen.add(p.id));
    mentionCache = { t: Date.now(), issue: browserMcpIssue, v: { tools, plugins } };
    return mentionCache.v;
  });
  handle('computer:check', () => computerCheck());
  // macOS: hiện hộp xin quyền Accessibility / mở đúng trang Cài đặt
  handle('computer:grant', () => {
    if (process.platform !== 'darwin') return computerCheck();
    systemPreferences.isTrustedAccessibilityClient(true);
    const pane = systemPreferences.getMediaAccessStatus('screen') !== 'granted' && systemPreferences.isTrustedAccessibilityClient(false) ? 'Privacy_ScreenCapture' : 'Privacy_Accessibility';
    shell.openExternal(`x-apple.systempreferences:com.apple.preference.security?${pane}`);
    return computerCheck();
  });
  handle('chat:skills', async () => {
    const local = simi.listSkills();
    try {
      const all = await codexServer.skills([chatDir()]);
      const seen = new Set(local.map((s) => s.name));
      return [...local, ...all.filter((s) => !seen.has(s.name)).map((s) => ({ name: s.name, description: s.description, simi: false, system: s.scope === 'system', origin: s.pluginId ? 'plugin' : s.scope, plugin: s.pluginId }))];
    } catch { return local; }
  });
  handle('chat:upload', (threadId, name, bytes) => {
    if (!bytes || bytes.byteLength > MAX_UPLOAD) throw new Error('File quá lớn (tối đa 30MB)');
    return chat.saveUpload(threadId, name, bytes);
  });
  handle('chat:pickFiles', async () => {
    const r = await dialog.showOpenDialog(win, { properties: ['openFile', 'multiSelections'] });
    return r.canceled ? [] : r.filePaths;
  });
  handle('chat:fileData', (p) => {
    if (!canOpenChatFile(p)) throw new Error('Không được phép');
    if (fs.statSync(p).size > MAX_PREVIEW) return null;
    const ext = path.extname(p).slice(1).toLowerCase().replace('jpg', 'jpeg');
    return `data:image/${ext === 'svg' ? 'svg+xml' : ext};base64,` + fs.readFileSync(p).toString('base64');
  });
  handle('chat:openFile', (p) => { if (!canOpenChatFile(p)) throw new Error('Không được phép'); return shell.openPath(p); });
  handle('chat:showFile', (p) => { if (canOpenChatFile(p)) shell.showItemInFolder(p); });
  // chỉ mở thư mục dự án đã lưu hoặc thư mục của một đoạn chat có trong app
  handle('chat:openDir', (d) => {
    const known = d && ((store.getConfig().chatProjects || []).some((pr) => pr.dir === d) || chat.store.list().some((t) => t.project === d));
    return shell.openPath(known && fs.existsSync(d) ? d : chatDir());
  });

  // file kết quả của văn phòng
  handle('results:list', () => {
    const dir = outputDir();
    const items = fs.readdirSync(dir).filter((f) => f.toLowerCase().endsWith('.md'))
      .map((f) => ({ file: path.join(dir, f), name: f, mtime: fs.statSync(path.join(dir, f)).mtimeMs, preview: path.join(dir, f) }));
    for (const r of readResultIndex()) {
      if (items.some((x) => x.file === r.file) || !fs.existsSync(r.file)) continue;
      items.push({ file: r.file, name: path.basename(r.file), title: r.title, format: r.format, mtime: fs.statSync(r.file).mtimeMs, preview: r.preview && fs.existsSync(r.preview) ? r.preview : null });
    }
    return items.sort((a, b) => b.mtime - a.mtime).slice(0, 40);
  });
  handle('file:read', (p) => {
    if (!insideOutput(p)) throw new Error('Không được phép đọc file ngoài thư mục kết quả');
    return fs.readFileSync(p, 'utf8');
  });

  // mở thư mục / file / liên kết
  handle('shell:openOutput', () => shell.openPath(outputDir()));
  handle('shell:openFile', (p) => { if (!isResultFile(p)) throw new Error('Không được phép'); return shell.openPath(p); });
  handle('shell:showFile', (p) => { if (isResultFile(p)) shell.showItemInFolder(p); });
  handle('shell:openUrl', (url) => { if (/^https:\/\/[a-z0-9.-]+\//i.test(url)) shell.openExternal(url); });
  handle('dialog:chooseDir', async () => {
    const r = await dialog.showOpenDialog(win, { properties: ['openDirectory', 'createDirectory'] });
    return r.canceled ? null : r.filePaths[0];
  });
}

// ---------------- cửa sổ ----------------
function createWindow() {
  win = new BrowserWindow({
    width: 1400, height: 880, minWidth: 1120, minHeight: 720,
    backgroundColor: '#1d1b26', title: 'Văn Phòng AI', icon: ICON,
    webPreferences: { preload: path.join(__dirname, 'preload.js'), contextIsolation: true, nodeIntegration: false, sandbox: true },
  });
  if (process.platform === 'darwin') {
    // macOS cần menu Edit để Cmd+C / Cmd+V hoạt động trong ô nhập
    Menu.setApplicationMenu(Menu.buildFromTemplate([
      { role: 'appMenu', label: 'Văn Phòng AI' }, { role: 'editMenu', label: 'Sửa' },
      { role: 'viewMenu', label: 'Xem' }, { role: 'windowMenu', label: 'Cửa sổ' },
    ]));
  } else {
    win.removeMenu();
  }
  // mở cùng máy (đăng nhập Windows / macOS) → chạy nền ở khay, không bật cửa sổ
  if (process.argv.includes('--hidden')) { win.hide(); win.once('ready-to-show', () => win.hide()); setTimeout(() => ensureTray(), 0); }
  win.on('close', (e) => {
    if (!backgroundWanted()) return;
    e.preventDefault(); win.hide(); ensureTray();
    const cfg = store.getConfig();
    if (!cfg.schedBgTold) {
      cfg.schedBgTold = true; store.saveConfig(cfg);
      if (Notification.isSupported()) new Notification({ title: 'Văn Phòng AI vẫn chạy nền', body: 'Để tác vụ đã lên lịch chạy đúng giờ. Mở lại hoặc thoát hẳn ở biểu tượng trên khay hệ thống.', icon: ICON }).show();
    }
  });
  win.loadFile(path.join(__dirname, 'renderer', 'index.html'));
  win.webContents.once('did-finish-load', () => { if (global.vpBootOk) global.vpBootOk(); }); // bản cập nhật nhanh mở được → giữ
  win.on('focus', () => { if (updater) updater.checkSoon(2 * 60 * 1000); }); // quay lại app sau một lúc → xem có bản mới không
  // báo cửa sổ đang được dùng / bị thu nhỏ → Sảnh & Văn phòng 3D giảm nhịp vẽ khi người dùng làm việc ở app khác
  // (app tắt nhận diện "bị che" để trình duyệt cạnh chat chạy ngầm được, nên trang không tự biết mình đang bị che)
  const winState = () => { if (win && !win.isDestroyed()) emit({ type: 'win', focused: win.isFocused(), minimized: win.isMinimized() || !win.isVisible() }); };
  for (const ev of ['focus', 'blur', 'minimize', 'restore', 'hide', 'show']) win.on(ev, winState);
  win.webContents.setWindowOpenHandler(() => ({ action: 'deny' }));
  win.webContents.on('will-navigate', (e) => e.preventDefault());
  win.webContents.on('before-input-event', (_e, input) => {
    if (input.type === 'keyDown' && input.key === 'F12') win.webContents.toggleDevTools();
  });
}

app.on('second-instance', focusWindow);
// màn chiếu YouTube trong Sảnh: video tự phát (không cần bấm vào khung)
app.commandLine.appendSwitch('autoplay-policy', 'no-user-gesture-required');
// trình duyệt cạnh chat: AI vẫn thao tác được khi người dùng chuyển sang app khác che mất cửa sổ (Windows không coi trang là "ẩn")
app.commandLine.appendSwitch('disable-features', 'CalculateNativeWinOcclusion');
app.commandLine.appendSwitch('disable-backgrounding-occluded-windows');

// YouTube từ chối phát khung nhúng không có Referer (lỗi 153) – app chạy từ file:// nên tự gắn Referer cho khung nhúng
function youtubeReferer() {
  const { session } = require('electron');
  session.defaultSession.webRequest.onBeforeSendHeaders({ urls: ['https://www.youtube.com/embed/*', 'https://www.youtube-nocookie.com/embed/*'] }, (d, cb) => {
    if (!d.requestHeaders.Referer && !d.requestHeaders.referer) d.requestHeaders.Referer = 'https://simi.vn/';
    cb({ requestHeaders: d.requestHeaders });
  });
}

app.whenReady().then(() => {
  // bảng "Giới thiệu" (menu app trên macOS, Linux): tác giả LTN
  app.setAboutPanelOptions({ applicationName: 'Văn Phòng AI', applicationVersion: appVersion(), version: '', copyright: '© 2026 LTN', credits: 'Tạo bởi LTN', authors: ['LTN'] });
  store = new Store(app.getPath('userData'), safeStorage);
  refreshPath();
  simi.refreshEnv();
  codexServer = new CodexAppServer(() => simi.chatCodexCmd(store.getConfig().cli.codex.cmd || 'codex', store.getConfig().chatEngine || 'auto'), {
    // file danh sách model thiếu trường bản Codex trên máy đòi → Codex không mở được, mọi đoạn chat báo lỗi: tự bổ sung trước khi mở
    preflight: () => { const r = simi.repairCatalog(); if (r.fixed) emit({ type: 'log', level: 'info', text: `Đã tự sửa danh sách model của Codex (${r.fixed} model thiếu trường)` }); },
  });
  updater = new Updater({
    app, emit, dir: path.join(app.getPath('userData'), 'updates'), current: appVersion(),
    shell: global.vpShell, hotRoot: path.join(app.getPath('userData'), 'app'),
    beforeExit: () => { if (chat) chat.flushRunning(); },
    getGateway: () => simi.gatewayOrigin(simi.readCodexConfig().baseUrl || store.getConfig().simiGateway || ''),
    enabled: () => store.getConfig().autoUpdate !== false,
    autoDownload: () => store.getConfig().autoUpdate !== false,
    // tự cập nhật không cần bấm (chỉ bản cập nhật nhanh): mở lại app khi máy rảnh ≥ 3 phút và không có việc đang chạy
    autoApply: () => store.getConfig().autoUpdate !== false,
    isBusy: () => !!running || queue.length > 0 || (chat && chat.running.size > 0) || !!simiUpdating,
    idle: () => powerMonitor.getSystemIdleTime() >= 180,
  });
  updater.start();
  chat = new ChatEngine({ userData: app.getPath('userData'), getConfig: () => store.getConfig(), emit, defaultDir: chatDir, hiddenDirs: () => [workDir()], codex: codexServer, openUrl: (u) => { if (!browserPane || store.getConfig().builtinBrowser === false) return false; browserPane.call('browser_open', { url: u, max_chars: 200 }).catch(() => {}); return true; }, extraConfig: () => ({ ...computerMcp(), ...browserMcp(), ...connectorsMcp() }), getSecret: (n) => store.getSecret(n) });
  sched = new Scheduler({ dir: app.getPath('userData'), emit, runTask: runScheduled, notify: notifyScheduled });
  lobby = new LobbyClient({
    getAuth: () => simi.gatewayAuth(),
    appInfo: { version: appVersion(), os: `${process.platform}-${process.arch}` },
    emit: (ev, data) => {
      emit({ type: 'lobby', ev, data });
      // admin vừa đăng bản app mới trên Gateway → kiểm tra & tải sẵn ngay, không đợi lượt kiểm tra định kỳ
      if (ev === 'app-release' || (ev === 'hello' && data.app && newer(data.app.version, appVersion()))) updater.checkSoon(0);
      // admin vừa cập nhật công cụ / skill SIMI trên Gateway → máy tự tải ngay (rải ngẫu nhiên vài giây cho khỏi dồn cùng lúc)
      const tools = ev === 'tools-update' ? data.version : ev === 'hello' ? data.tools : null;
      if (tools) syncSimiTools(tools, ev === 'tools-update' ? 3000 + Math.random() * 20000 : 5000);
      // tin nhắn riêng khi đang ở cửa sổ khác → thông báo
      if (ev === 'message' && lobby.me && data.from !== lobby.me.id && !lobbyDnd) {
        const body = (data.text || (data.images && data.images.length ? '📷 Đã gửi ảnh' : '')).slice(0, 140);
        const open = () => win.webContents.send('evt', { type: 'lobby-open', room: data.room, msg: data.id });
        const tagged = (data.mentions || []).includes(lobby.me.id) || ((data.mentions || []).includes('all'));
        if (data.room.startsWith('dm:')) notify(`💬 ${data.name} nhắn bạn`, body, open);
        else if (tagged) notify(`🔔 ${data.name} nhắc đến bạn trong Sảnh`, body, open);
      }
      if (ev === 'announce' && data.popup) notify('📢 Thông báo từ admin', data.text.slice(0, 200), () => win.webContents.send('evt', { type: 'lobby-open', room: 'all' }));
    },
  });
  lobbyImages = new ImageCache({ dir: path.join(app.getPath('userData'), 'lobby-images'), fetchFile: (id, thumb) => lobby.file(id, thumb) });
  protocol.handle('vpimg', async (req) => {
    const u = new URL(req.url);
    const id = u.pathname.replace(/^\/+/, '');
    try {
      const r = await lobbyImages.get(id, u.searchParams.get('t') === '1');
      if (r.status !== 200) return new Response('', { status: r.status || 404 });
      return new Response(r.data, { status: 200, headers: { 'content-type': r.type, 'cache-control': 'max-age=31536000, immutable' } });
    } catch { return new Response('', { status: 502 }); }
  });
  if (store.getConfig().lobbyEnabled !== false) lobby.start();
  // Windows: cho tác vụ tự cập nhật SIMI chạy ẩn (hết cảnh cửa sổ đen bật lên vài giây) – làm 1 lần, sau khi app mở 1 phút
  if (process.platform === 'win32' && !store.getConfig().simiTaskHidden) {
    setTimeout(() => hideSimiTask().then((r) => {
      console.log('[simi-task]', r);
      if (['hidden', 'migrated', 'none'].includes(r)) { const c = store.getConfig(); c.simiTaskHidden = true; store.saveConfig(c); }
    }), 60000).unref?.();
  }
  powerMonitor.on('resume', () => { lobby.kick(); updater.checkSoon(5 * 60 * 1000); });
  registerIpc();
  youtubeReferer();
  createWindow();
  setTimeout(() => sched.start(), 8000); // để Codex / Gateway kịp sẵn sàng, rồi chạy bù lượt lỡ
  browserPane = new BrowserPane({ getWindow: () => win, emit, connFile: path.join(app.getPath('userData'), 'browser-pane.json') });
  browserPane.listen().then(() => probeBrowserMcp()).catch((e) => {
    console.warn('Trình duyệt cạnh chat không mở được cổng điều khiển:', e.message);
    browserMcpIssue = 'không mở được cổng điều khiển: ' + e.message; browserPane = null;
    setTimeout(() => emit({ type: 'log', level: 'error', text: '🌐 AI chưa điều khiển được trình duyệt cạnh chat trên máy này: ' + browserMcpIssue }), 4000);
  });
});

app.on('activate', () => { if (BrowserWindow.getAllWindows().length === 0 && store) createWindow(); });

app.on('before-quit', () => { quitting = true; try { if (chat) chat.flushRunning(); } catch { /* đang tắt */ } });
app.on('will-quit', () => { if (browserPane) browserPane.stop(); if (sched) sched.stop(); if (tray) { tray.destroy(); tray = null; } });
app.on('window-all-closed', () => {
  if (running) running.ac.abort();
  if (chat) for (const id of [...chat.running.keys()]) chat.stop(id);
  if (codexServer) codexServer.stop();
  if (updater) updater.stop();
  if (lobby) lobby.stop();
  app.quit();
});
