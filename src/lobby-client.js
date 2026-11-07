// Kết nối Sảnh online trên SIMI Gateway: nghe SSE /v1/lobby/stream, gửi trạng thái / tin nhắn / hồ sơ nhân vật.
// Dùng chính key team + client id mà bộ cài SIMI đã lưu; tự nối lại khi rớt mạng, máy ngủ dậy.
const { fetchJson } = require('./sys');

const RETRY_MIN = 2000;
const RETRY_MAX = 30000;

class LobbyClient {
  constructor({ getAuth, emit, appInfo = {} }) {
    this.getAuth = getAuth;   // () => { baseUrl, key, clientId }
    this.appInfo = appInfo;   // { version, os } – để admin xem mỗi máy đang chạy bản nào
    this.emit = emit;         // (event, data) => void – gửi sang giao diện
    this.state = 'off';       // off | connecting | online | error | disabled | nokey
    this.error = '';
    this.me = null;
    this.ctrl = null;
    this.retry = RETRY_MIN;
    this.wanted = false;
  }

  status() { return { state: this.state, error: this.error, me: this.me }; }

  setState(state, error = '') {
    this.state = state; this.error = error;
    this.emit('status', this.status());
  }

  headers(json) {
    const a = this.getAuth();
    if (!a.baseUrl || !a.key) throw new Error('Chưa cài SIMI Gateway (Kết nối → Cài đặt SIMI)');
    const h = { authorization: `Bearer ${a.key}` };
    if (a.clientId) h['x-ltn-client-id'] = a.clientId;
    if (this.appInfo.version) h['x-vanphong-version'] = this.appInfo.version;
    if (this.appInfo.os) h['x-vanphong-os'] = this.appInfo.os;
    if (json) h['content-type'] = 'application/json';
    return { base: `${a.baseUrl}/lobby`, h };
  }

  start() {
    this.wanted = true;
    if (this.ctrl || this.state === 'connecting') return;
    this.connect();
  }

  stop() {
    this.wanted = false;
    clearTimeout(this.retryT);
    if (this.ctrl) { this.ctrl.abort(); this.ctrl = null; }
    this.setState('off');
  }

  // nối lại ngay (ví dụ máy vừa ngủ dậy, có mạng lại)
  kick() { if (this.wanted && this.state !== 'online') { clearTimeout(this.retryT); this.retry = RETRY_MIN; if (!this.ctrl) this.connect(); } }

  scheduleRetry() {
    if (!this.wanted) return;
    clearTimeout(this.retryT);
    this.retryT = setTimeout(() => this.connect(), this.retry);
    this.retry = Math.min(RETRY_MAX, this.retry * 2);
  }

  async connect() {
    let base, h;
    try { ({ base, h } = this.headers()); } catch (e) { this.setState('nokey', e.message); return; }
    this.setState('connecting');
    const ctrl = new AbortController(); this.ctrl = ctrl;
    try {
      const res = await fetch(`${base}/stream`, { headers: { ...h, accept: 'text/event-stream' }, signal: ctrl.signal });
      if (res.status === 404) { this.setState('disabled', 'Gateway chưa bật Sảnh (cần cập nhật Gateway)'); this.ctrl = null; this.retry = RETRY_MAX; this.scheduleRetry(); return; }
      if (!res.ok) {
        let msg = `Gateway báo lỗi ${res.status}`;
        try { const j = await res.json(); msg = j.error?.message || msg; } catch { /* không phải JSON */ }
        throw Object.assign(new Error(msg), { fatal: res.status === 401 || res.status === 403 });
      }
      this.retry = RETRY_MIN;
      await this.read(res.body.getReader());
      throw new Error('Mất kết nối Sảnh');
    } catch (e) {
      if (ctrl.signal.aborted && !this.wanted) return;
      this.ctrl = null;
      const msg = e.cause && /ENOTFOUND|ECONNREFUSED|ETIMEDOUT|EAI_AGAIN|ECONNRESET/.test(e.cause.code || '') ? 'Không kết nối được Gateway. Kiểm tra mạng.' : e.message;
      this.setState('error', msg);
      if (e.fatal) this.retry = RETRY_MAX;
      this.scheduleRetry();
    }
  }

  async read(reader) {
    const dec = new TextDecoder();
    let buf = '';
    let alive = Date.now();
    // không nhận được gì quá 70 giây (Gateway ping mỗi 25 giây) → coi như rớt, nối lại
    const watchdog = setInterval(() => { if (Date.now() - alive > 70000 && this.ctrl) this.ctrl.abort(); }, 10000);
    try {
      for (;;) {
        const { value, done } = await reader.read();
        if (done) return;
        alive = Date.now();
        buf += dec.decode(value, { stream: true });
        let i;
        while ((i = buf.indexOf('\n\n')) >= 0) {
          const block = buf.slice(0, i); buf = buf.slice(i + 2);
          const ev = /^event: (.+)$/m.exec(block); const data = /^data: (.+)$/m.exec(block);
          if (!ev || !data) continue;
          let payload; try { payload = JSON.parse(data[1]); } catch { continue; }
          if (ev[1] === 'hello') { this.me = { ...payload.me, admin: !!payload.admin }; this.setState('online'); }
          this.emit(ev[1], payload);
        }
      }
    } finally { clearInterval(watchdog); }
  }

  async call(path, body, method = 'POST') {
    const { base, h } = this.headers(!!body);
    return fetchJson(`${base}/${path}`, { method, body, headers: h, name: 'Sảnh', timeoutMs: 15000 });
  }

  send(payload) { return this.call('messages', payload); }
  setPresence(payload) { return this.call('state', payload).catch(() => null); }
  async saveProfile(payload) { const r = await this.call('profile', payload); this.me = r.me; this.emit('me', r.me); return r; }
  history(room, before) { return this.call(`messages?room=${encodeURIComponent(room)}&limit=80${before ? `&before=${before}` : ''}`, undefined, 'GET'); }
  members() { return this.call('members', undefined, 'GET'); }
  // mã QR đăng nhập Sảnh trên điện thoại (Gateway /v1/mobile/pair): link dùng 1 lần, hết hạn sau vài phút
  pairMobile() { const { base, h } = this.headers(true); return fetchJson(base.replace(/\/lobby$/, '/mobile/pair'), { method: 'POST', body: {}, headers: h, name: 'Sảnh', timeoutMs: 15000 }); }
  // điện thoại đã đăng nhập bằng mã QR của máy này + đăng xuất từ xa
  mobileSessions() { const { base, h } = this.headers(); return fetchJson(base.replace(/\/lobby$/, '/mobile/sessions'), { method: 'GET', headers: h, name: 'Sảnh', timeoutMs: 15000 }); }
  revokeMobile(id) { const { base, h } = this.headers(true); return fetchJson(base.replace(/\/lobby$/, '/mobile/revoke'), { method: 'POST', body: { id }, headers: h, name: 'Sảnh', timeoutMs: 15000 }); }
  // màn chiếu YouTube: { action: add|skip|remove|duration, ... }
  cinema(payload) { return this.call('cinema', payload); }
  cinemaState() { return this.call('cinema', undefined, 'GET'); }
  deleteMsg(room, id) { return this.call('messages/delete', { room, id }); }
  react(room, id, emoji) { return this.call('messages/react', { room, id, emoji }); }
  // hỏi NPC: AI có thể nghĩ lâu → chờ tới 100 giây
  npcAsk(payload) { const { base, h } = this.headers(true); return fetchJson(`${base}/npc/ask`, { method: 'POST', body: payload, headers: h, name: 'Trợ lý', timeoutMs: 100000 }); }
  admin() { return this.call('admin', undefined, 'GET'); }
  adminDo(payload) { return this.call('admin', payload); }

  // gửi ảnh đã nén: body = ảnh thu nhỏ + ảnh đầy đủ (Gateway tách theo thumbBytes)
  async upload({ room, to, full, thumb, w, h }) {
    const { base, h: hd } = this.headers();
    const t = thumb ? Buffer.from(thumb) : Buffer.alloc(0);
    const qs = new URLSearchParams({ thumbBytes: String(t.length), w: String(w || 1), h: String(h || 1) });
    if (to) qs.set('to', to); else qs.set('room', room || 'all');
    const ac = new AbortController(); const timer = setTimeout(() => ac.abort(), 60000);
    try {
      const res = await fetch(`${base}/upload?${qs}`, { method: 'POST', headers: { ...hd, 'content-type': 'application/octet-stream' }, body: Buffer.concat([t, Buffer.from(full)]), signal: ac.signal });
      const data = await res.json().catch(() => null);
      if (!res.ok) throw new Error((data && data.error && data.error.message) || `Gửi ảnh lỗi ${res.status}`);
      return data;
    } catch (e) {
      if (e.name === 'AbortError') throw new Error('Gửi ảnh quá lâu – mạng chậm, thử lại nhé');
      throw e;
    } finally { clearTimeout(timer); }
  }

  // tải 1 ảnh (đầy đủ hoặc thu nhỏ) – trả { type, data: Buffer }
  async file(id, thumb) {
    const { base, h } = this.headers();
    const res = await fetch(`${base}/file?id=${encodeURIComponent(id)}${thumb ? '&thumb=1' : ''}`, { headers: h, signal: AbortSignal.timeout(30000) });
    if (!res.ok) return { status: res.status };
    return { status: 200, type: res.headers.get('content-type') || 'application/octet-stream', data: Buffer.from(await res.arrayBuffer()) };
  }
}

module.exports = { LobbyClient };
