// `codex app-server` (JSON-RPC qua stdio) – động cơ của tab Chat, giống hệt ChatGPT Work / Codex Desktop:
// chạy lượt hội thoại, hỏi quyền (lệnh, sửa file, công cụ MCP, Computer Use), plugin, skill, MCP,
// và đọc lịch sử chat chung thư mục ~/.codex nên đoạn chat hai bên liên thông.
const { EventEmitter } = require('events');
const { spawnCli, killTree } = require('./sys');

const IDLE_MS = 90 * 1000;
const LIST_MS = Number(process.env.VP_CODEX_LIST_MS) || 60000;
// mọi nguồn trừ agent con (subAgent*) – gồm cả Desktop (appServer), CLI, VS Code, exec
const SOURCE_KINDS = ['cli', 'vscode', 'exec', 'appServer', 'unknown'];

class CodexAppServer extends EventEmitter {
  constructor(getCmd, { preflight = null } = {}) {
    super();
    this.getCmd = getCmd;
    this.preflight = preflight; // chạy ngay trước mỗi lần mở Codex (vd tự sửa file danh sách model)
    this.proc = null;
    this.ready = null;
    this.pending = new Map();
    this.seq = 0;
    this.gen = 0;         // tăng mỗi lần khởi động lại → biết phiên nào đã được nạp trong tiến trình hiện tại
    this.active = 0;      // số lượt đang chạy: còn lượt thì không tự tắt
    this.loaded = new Set();
  }

  _start() {
    const cmd = this.getCmd();
    const child = spawnCli(cmd, ['app-server']);
    this.proc = child; this.cmd = cmd; this.gen++; this.loaded = new Set();
    let buf = '';
    child.stdout.on('data', (d) => {
      buf += d.toString('utf8');
      let i;
      while ((i = buf.indexOf('\n')) >= 0) {
        const line = buf.slice(0, i).trim(); buf = buf.slice(i + 1);
        if (!line.startsWith('{')) continue;
        let m; try { m = JSON.parse(line); } catch { continue; }
        this._onMessage(m);
      }
    });
    child.stderr.on('data', () => { /* log của Codex – bỏ qua */ });
    const fail = (err) => {
      if (this.proc !== child) return;
      this.proc = null; this.ready = null;
      for (const p of this.pending.values()) { clearTimeout(p.timer); p.reject(err); }
      this.pending.clear();
      this.emit('exit', err);
    };
    child.on('error', (e) => fail(new Error(e.code === 'ENOENT' ? 'Không tìm thấy Codex trên máy' : e.message)));
    child.on('close', () => fail(new Error('Codex app-server đã dừng')));
    child.stdin.on('error', () => { /* đóng sớm */ });
    this.ready = this._send('initialize', { clientInfo: { name: 'van-phong-ai', title: 'Văn Phòng AI', version: '1' }, capabilities: { experimentalApi: true } }, 30000)
      .then((r) => { this.info = r || {}; this._write({ method: 'initialized' }); });
    this.ready.catch(() => { /* lỗi được báo qua request() */ });
    return this.ready;
  }

  _onMessage(m) {
    if (m.id !== undefined && m.method) {
      // Codex hỏi lại client (xin quyền, hỏi người dùng…) – không ai nhận thì từ chối để lượt không bị treo
      if (!this.listenerCount('request')) return this.respondError(m.id, 'Không có giao diện để hỏi người dùng');
      return this.emit('request', { id: m.id, method: m.method, params: m.params || {} });
    }
    if (m.id !== undefined) {
      const p = this.pending.get(m.id); if (!p) return;
      this.pending.delete(m.id); clearTimeout(p.timer);
      if (m.error) p.reject(new Error(m.error.message || 'Codex báo lỗi')); else p.resolve(m.result);
      return;
    }
    if (m.method) this.emit('notification', m.method, m.params || {});
  }

  _write(obj) { if (this.proc) try { this.proc.stdin.write(JSON.stringify(obj) + '\n'); } catch { /* đã đóng */ } }

  _send(method, params, timeoutMs = 20000) {
    return new Promise((resolve, reject) => {
      if (!this.proc) return reject(new Error('Codex app-server chưa chạy'));
      const id = ++this.seq;
      const timer = setTimeout(() => { this.pending.delete(id); reject(new Error(`Codex không phản hồi (${method})`)); }, timeoutMs);
      this.pending.set(id, { resolve, reject, timer });
      this._write({ method, id, params });
    });
  }

  respond(id, result) { this._write({ id, result }); }
  respondError(id, message) { this._write({ id, error: { code: -32000, message } }); }

  // tự tắt khi không dùng để không giữ tiến trình chạy nền
  _touch() {
    clearTimeout(this.idle);
    this.idle = setTimeout(() => { if (this.active > 0) this._touch(); else this.stop(); }, IDLE_MS);
  }
  hold() { this.active++; clearTimeout(this.idle); }
  release() { this.active = Math.max(0, this.active - 1); this._touch(); }

  async start() {
    if (!this.proc) {
      if (this.preflight) { try { this.preflight(); } catch { /* phụ trợ, không chặn việc mở Codex */ } }
      this._start();
    }
    await this.ready;
    this._touch();
    return this.gen;
  }

  async request(method, params, timeoutMs) {
    await this.start();
    return this._send(method, params, timeoutMs);
  }

  // đổi lệnh codex (ví dụ vừa cài SIMI) → lần gọi sau khởi động lại
  restartIfChanged() { if (this.proc && this.cmd !== this.getCmd() && !this.active) this.stop(); }

  stop() {
    clearTimeout(this.idle);
    if (this.proc) { const p = this.proc; this.proc = null; this.ready = null; this.loaded = new Set(); killTree(p); }
  }

  // ---------- lịch sử ----------
  // máy nhiều đoạn chat (Windows đọc từng file lịch sử) → mỗi trang chờ tới 60 giây; Codex treo lúc vừa khởi động
  // (không có lượt nào đang chạy) thì khởi động lại Codex và đọc lại 1 lần
  async listThreads(max = 300, archived = false) {
    try { return await this._listThreads(max, archived); } catch (e) {
      if (!/không phản hồi/.test(e.message) || this.active > 0) throw e;
      this.stop();
      return this._listThreads(max, archived);
    }
  }

  async _listThreads(max, archived) {
    const out = []; let cursor = null;
    do {
      const r = await this.request('thread/list', {
        cursor, limit: Math.min(100, max - out.length), sortKey: 'updated_at', sortDirection: 'desc',
        sourceKinds: SOURCE_KINDS, modelProviders: [], archived: !!archived,
      }, LIST_MS);
      out.push(...(r.data || []));
      cursor = r.nextCursor;
    } while (cursor && out.length < max);
    return out;
  }

  // Đoạn chat kiểu "phân trang" (ChatGPT Work / Codex bản mới) không cho đọc cả lịch sử bằng thread/read(includeTurns)
  // → đọc thông tin trước, rồi lấy các lượt theo từng trang bằng thread/turns/list. Đoạn chat kiểu cũ đọc như trước.
  async readThread(id, withTurns = true) {
    const meta = (await this.request('thread/read', { threadId: id, includeTurns: false }, 60000)).thread;
    if (!withTurns) return meta;
    if (meta && meta.historyMode === 'paginated') return { ...meta, turns: await this.listTurns(id) };
    let full;
    try {
      full = (await this.request('thread/read', { threadId: id, includeTurns: true }, 60000)).thread;
    } catch (e) {
      if (!/paginated|includeTurns|turns\/list/i.test(e.message)) throw e;
      return { ...meta, turns: await this.listTurns(id) };
    }
    // một số bản Codex trả khung lượt mà không kèm nội dung (hoặc không có lượt nào) → đọc lại đủ nội dung bằng thread/turns/list
    const turns = (full && full.turns) || [];
    if (!turns.some((t) => (t.items || []).length)) {
      const paged = await this.listTurns(id).catch(() => null);
      if (paged && paged.some((t) => (t.items || []).length)) return { ...(full || meta), turns: paged };
    }
    return full;
  }

  // tất cả các lượt của 1 đoạn chat, cũ → mới, đủ nội dung từng lượt
  async listTurns(id, max = 5000) {
    const out = []; let cursor = null;
    do {
      const r = await this.request('thread/turns/list', { threadId: id, cursor, limit: 100, sortDirection: 'asc', itemsView: 'full' }, 60000);
      out.push(...(r.data || []));
      cursor = r.nextCursor || null;
    } while (cursor && out.length < max);
    return out;
  }

  // ---------- plugin, MCP, skill ----------
  async plugins() {
    const r = await this.request('plugin/list', {}, 60000);
    const out = [];
    for (const mk of r.marketplaces || []) {
      for (const p of mk.plugins || []) {
        out.push({
          id: p.id, name: p.name, marketplace: mk.name, marketplacePath: mk.path || null,
          title: (p.interface && p.interface.displayName) || p.name, description: (p.interface && p.interface.shortDescription) || '',
          installed: !!p.installed, enabled: p.enabled !== false, available: p.availability !== 'DISABLED_BY_ADMIN' && p.installPolicy !== 'NOT_AVAILABLE',
        });
      }
    }
    return { plugins: out, errors: (r.marketplaceLoadErrors || []).map((e) => e.message) };
  }

  installPlugin(name, marketplacePath) {
    return this.request('plugin/install', { pluginName: name, marketplacePath: marketplacePath || null }, 300000);
  }

  async mcpServers() {
    const r = await this.request('mcpServerStatus/list', { detail: 'toolsAndAuthOnly' }, 90000);
    return (r.data || []).map((s) => ({
      name: s.name, pluginId: s.pluginId || null, status: s.runtimeStatus || (s.toolsError ? 'failed' : 'connected'),
      tools: Object.keys(s.tools || {}).length, error: s.toolsError || null, auth: s.authStatus || null,
    }));
  }

  // gọi thẳng 1 công cụ MCP (ví dụ mở Chrome SIMI để đăng nhập) – cần 1 phiên tạm, không lưu lịch sử
  async callTool(server, tool, args = {}, cwd) {
    const gen = await this.start();
    if (!this.util || this.util.gen !== gen) {
      const r = await this._send('thread/start', { cwd: cwd || null, ephemeral: true, approvalPolicy: 'never', sandbox: 'read-only' }, 60000);
      this.util = { gen, id: r.thread.id };
    }
    return this._send('mcpServer/tool/call', { threadId: this.util.id, server, tool, arguments: args }, 120000);
  }

  async skills(cwds) {
    const r = await this.request('skills/list', { cwds: cwds || [] }, 60000);
    const out = [];
    for (const e of r.data || []) for (const s of e.skills || []) if (s.enabled !== false) out.push({ name: s.name, description: s.shortDescription || s.description || '', path: s.path, pluginId: s.pluginId || null, scope: s.scope });
    return out;
  }
}

module.exports = { CodexAppServer };
