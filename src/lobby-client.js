// Kết nối Sảnh online trên SIMI Gateway: nghe SSE /v1/lobby/stream, gửi trạng thái / tin nhắn / hồ sơ nhân vật.
// Dùng chính key team + client id mà bộ cài SIMI đã lưu; tự nối lại khi rớt mạng, máy ngủ dậy.
const { fetchJson } = require('./sys');

const RETRY_MIN = 2000;
const RETRY_MAX = 30000;

class LobbyClient {
  constructor({ getAuth, emit }) {
    this.getAuth = getAuth;   // () => { baseUrl, key, clientId }
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
          if (ev[1] === 'hello') { this.me = payload.me; this.setState('online'); }
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
  // màn chiếu YouTube: { action: add|skip|remove|duration, ... }
  cinema(payload) { return this.call('cinema', payload); }
  cinemaState() { return this.call('cinema', undefined, 'GET'); }
}

module.exports = { LobbyClient };
