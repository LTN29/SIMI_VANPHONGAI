// ⏰ Tác vụ đã lên lịch: tự gửi một yêu cầu vào tab Chat theo giờ (một lần, mỗi ngày, ngày làm việc, mỗi tuần, mỗi tháng, mỗi N giờ).
// Lưu ở <userData>/schedules.json. App phải đang mở (hoặc chạy nền ở khay hệ thống) thì tác vụ mới chạy;
// lượt bị lỡ khi tắt máy được chạy bù 1 lần lúc mở app (nếu lỡ chưa quá 12 giờ).
const fs = require('fs');
const path = require('path');

const TICK_MS = 30 * 1000;
const CATCHUP_MS = 12 * 60 * 60 * 1000;
const KINDS = new Set(['once', 'daily', 'weekdays', 'weekly', 'monthly', 'hourly']);

const pad = (n) => String(n).padStart(2, '0');
function parseTime(s) { const m = /^(\d{1,2}):(\d{2})$/.exec(String(s || '')); if (!m) return [8, 0]; return [Math.min(23, +m[1]), Math.min(59, +m[2])]; }

// lần chạy kế tiếp (giờ máy) sau thời điểm `from` (ms); null = không còn lần nào
function nextRun(when, from = Date.now()) {
  const w = when || {};
  const [hh, mm] = parseTime(w.time);
  if (w.kind === 'once') {
    const t = new Date(`${w.date}T${pad(hh)}:${pad(mm)}:00`).getTime();
    return Number.isFinite(t) && t > from ? t : null;
  }
  if (w.kind === 'hourly') {
    const every = Math.max(1, Math.min(24, Number(w.every) || 1)) * 3600 * 1000;
    const start = new Date(from); start.setMinutes(mm, 0, 0);
    let t = start.getTime();
    while (t <= from) t += every;
    return t;
  }
  const d = new Date(from); d.setSeconds(0, 0);
  for (let i = 0; i < 400; i++) {
    const c = new Date(d.getFullYear(), d.getMonth(), d.getDate() + i, hh, mm, 0, 0);
    if (c.getTime() <= from) continue;
    const dow = c.getDay(); // 0 = CN
    if (w.kind === 'daily') return c.getTime();
    if (w.kind === 'weekdays' && dow >= 1 && dow <= 5) return c.getTime();
    if (w.kind === 'weekly' && (Array.isArray(w.days) && w.days.length ? w.days.map(Number) : [1]).includes(dow)) return c.getTime();
    if (w.kind === 'monthly') {
      const want = Math.max(1, Math.min(31, Number(w.day) || 1));
      const last = new Date(c.getFullYear(), c.getMonth() + 1, 0).getDate();
      if (c.getDate() === Math.min(want, last)) return c.getTime();
    }
  }
  return null;
}

const DOW = ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'];
function describe(when) {
  const w = when || {}; const t = w.time || '08:00';
  switch (w.kind) {
    case 'once': return `Một lần · ${String(w.date || '').split('-').reverse().join('/')} ${t}`;
    case 'daily': return `Mỗi ngày · ${t}`;
    case 'weekdays': return `Thứ 2 – Thứ 6 · ${t}`;
    case 'weekly': return `Mỗi tuần · ${(w.days && w.days.length ? w.days : [1]).map((d) => DOW[d]).join(', ')} · ${t}`;
    case 'monthly': return `Mỗi tháng · ngày ${w.day || 1} · ${t}`;
    case 'hourly': return `Mỗi ${w.every || 1} giờ (phút ${parseTime(t)[1]})`;
    default: return '';
  }
}

class Scheduler {
  // runTask(task) → Promise<{ threadId, ok, error }>: gửi yêu cầu vào Chat; notify(task, result) khi xong; emit(ev) báo giao diện
  constructor({ dir, runTask, notify = () => {}, emit = () => {} }) {
    this.file = path.join(dir, 'schedules.json');
    this.runTask = runTask; this.notify = notify; this.emit = emit;
    this.busy = null; this.timer = null; this.queue = [];
    this.data = this._load();
  }

  _load() {
    try { const d = JSON.parse(fs.readFileSync(this.file, 'utf8')); return { tasks: Array.isArray(d.tasks) ? d.tasks : [], runs: Array.isArray(d.runs) ? d.runs : [] }; } catch { return { tasks: [], runs: [] }; }
  }
  _save() {
    const tmp = this.file + '.tmp';
    fs.writeFileSync(tmp, JSON.stringify(this.data, null, 2), 'utf8');
    try { fs.renameSync(tmp, this.file); } catch { fs.writeFileSync(this.file, JSON.stringify(this.data, null, 2), 'utf8'); fs.rmSync(tmp, { force: true }); }
    this.emit({ type: 'sched' });
  }

  list() {
    return {
      tasks: this.data.tasks.map((t) => ({ ...t, label: describe(t.when), running: this.busy === t.id, queued: this.queue.includes(t.id) })),
      runs: this.data.runs.slice(0, 60),
    };
  }

  save(input) {
    const name = String(input.name || '').trim().slice(0, 80);
    const prompt = String(input.prompt || '').trim();
    if (!name) throw new Error('Chưa đặt tên tác vụ');
    if (!prompt) throw new Error('Chưa nhập việc cần làm');
    const when = input.when || {};
    if (!KINDS.has(when.kind)) throw new Error('Chưa chọn lịch chạy');
    if (when.kind === 'once' && !/^\d{4}-\d{2}-\d{2}$/.test(String(when.date || ''))) throw new Error('Chưa chọn ngày chạy');
    const clean = {
      kind: when.kind, time: /^\d{1,2}:\d{2}$/.test(String(when.time || '')) ? when.time : '08:00',
      ...(when.kind === 'once' ? { date: when.date } : {}),
      ...(when.kind === 'weekly' ? { days: [...new Set((when.days || []).map(Number).filter((d) => d >= 0 && d <= 6))].sort() } : {}),
      ...(when.kind === 'monthly' ? { day: Math.max(1, Math.min(31, Number(when.day) || 1)) } : {}),
      ...(when.kind === 'hourly' ? { every: Math.max(1, Math.min(24, Number(when.every) || 1)) } : {}),
    };
    const next = nextRun(clean);
    if (next == null) throw new Error('Thời điểm chạy đã qua – chọn giờ khác');
    const old = input.id ? this.data.tasks.find((t) => t.id === input.id) : null;
    const t = {
      id: old ? old.id : 's' + Date.now().toString(36) + Math.random().toString(36).slice(2, 5),
      name, prompt, when: clean,
      model: String(input.model || ''), agentId: input.agentId || null, project: String(input.project || ''),
      sandbox: ['read-only', 'workspace-write', 'danger-full-access'].includes(input.sandbox) ? input.sandbox : 'workspace-write',
      thread: input.thread === 'same' ? 'same' : 'new', threadId: old && input.thread === 'same' ? old.threadId || null : null,
      enabled: input.enabled !== false, notify: input.notify !== false,
      createdAt: old ? old.createdAt : Date.now(), nextRun: next, lastRun: old ? old.lastRun || null : null,
    };
    if (old) Object.assign(old, t); else this.data.tasks.unshift(t);
    this._save();
    return t;
  }

  remove(id) { this.data.tasks = this.data.tasks.filter((t) => t.id !== id); this.queue = this.queue.filter((q) => q !== id); this._save(); return true; }

  toggle(id, on) {
    const t = this.data.tasks.find((x) => x.id === id); if (!t) throw new Error('Không tìm thấy tác vụ');
    t.enabled = !!on;
    if (on) { t.nextRun = nextRun(t.when); if (t.nextRun == null) { t.enabled = false; throw new Error('Tác vụ chạy một lần đã qua giờ – sửa lại ngày giờ'); } }
    this._save(); return t;
  }

  runNow(id) {
    const t = this.data.tasks.find((x) => x.id === id); if (!t) throw new Error('Không tìm thấy tác vụ');
    if (this.busy === id || this.queue.includes(id)) throw new Error('Tác vụ đang chạy');
    this.queue.push(id); this._save(); this._drain();
    return true;
  }

  start() {
    // chạy bù lượt lỡ khi app đang tắt (chưa quá 12 giờ); lỡ lâu hơn thì bỏ qua, tính lần kế tiếp
    const now = Date.now();
    for (const t of this.data.tasks) {
      if (!t.enabled || !t.nextRun || t.nextRun > now) continue;
      if (now - t.nextRun <= CATCHUP_MS) { if (!this.queue.includes(t.id)) this.queue.push(t.id); t.catchUp = true; }
      t.nextRun = nextRun(t.when, now);
      if (t.nextRun == null) t.enabled = false;
    }
    this._save();
    this._drain();
    this.timer = setInterval(() => this.tick(), TICK_MS);
  }
  stop() { clearInterval(this.timer); this.timer = null; }

  tick(now = Date.now()) {
    let changed = false;
    for (const t of this.data.tasks) {
      if (!t.enabled || !t.nextRun || t.nextRun > now) continue;
      if (this.busy !== t.id && !this.queue.includes(t.id)) this.queue.push(t.id);
      t.nextRun = nextRun(t.when, now);
      if (t.nextRun == null) t.enabled = false; // chạy một lần → xong thì tắt
      changed = true;
    }
    if (changed) this._save();
    this._drain();
  }

  async _drain() {
    if (this.busy || !this.queue.length) return;
    const id = this.queue.shift();
    const t = this.data.tasks.find((x) => x.id === id);
    if (!t) { this._drain(); return; }
    this.busy = id; this.emit({ type: 'sched' });
    const started = Date.now();
    let r;
    try { r = await this.runTask(t); } catch (e) { r = { ok: false, error: e.message || String(e) }; }
    const run = { taskId: t.id, name: t.name, at: started, ms: Date.now() - started, ok: !!(r && r.ok), error: (r && r.error) || '', threadId: (r && r.threadId) || null, catchUp: !!t.catchUp };
    delete t.catchUp;
    t.lastRun = run;
    if (t.thread === 'same' && run.threadId) t.threadId = run.threadId;
    this.data.runs.unshift(run); this.data.runs = this.data.runs.slice(0, 200);
    this.busy = null;
    this._save();
    if (t.notify) { try { this.notify(t, run); } catch { /* thông báo là phụ */ } }
    this._drain();
  }
}

module.exports = { Scheduler, nextRun, describe };
