/* Điều khiển giao diện: giao việc, nhân sự, kết nối tài khoản, đội ngũ, nhật ký, kết quả, cài đặt. */
(function () {
  const $ = (s, el = document) => el.querySelector(s);
  const el = (tag, props = {}, ...kids) => {
    const n = document.createElement(tag);
    for (const [k, v] of Object.entries(props)) {
      if (k === 'class') n.className = v;
      else if (k === 'text') n.textContent = v;
      else if (k === 'html') n.innerHTML = v;
      else if (k.startsWith('on')) n.addEventListener(k.slice(2), v);
      else if (v !== undefined && v !== null && v !== false) n.setAttribute(k, v === true ? '' : v);
    }
    for (const c of kids.flat()) if (c != null && c !== false) n.append(c.nodeType ? c : document.createTextNode(c));
    return n;
  };
  const store = {
    get(k, d) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch { return d; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch { /* bỏ qua */ } },
  };

  // ---------------- biểu tượng (SVG nét) ----------------
  const P = {
    plug: '<path d="M9 2v6M15 2v6M6 8h12v4a6 6 0 0 1-12 0zM12 18v4"/>',
    users: '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0"/><circle cx="17" cy="9" r="2.6"/><path d="M16 14.2a5 5 0 0 1 5.5 5.3"/>',
    folder: '<path d="M3 6.5A1.5 1.5 0 0 1 4.5 5H9l2 2.5h8.5A1.5 1.5 0 0 1 21 9v9.5a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 18.5z"/>',
    gear: '<circle cx="12" cy="12" r="3"/><path d="M12 2.5v2.2M12 19.3v2.2M4.6 4.6l1.6 1.6M17.8 17.8l1.6 1.6M2.5 12h2.2M19.3 12h2.2M4.6 19.4l1.6-1.6M17.8 6.2l1.6-1.6"/>',
    send: '<path d="M4 12 20 4l-6 16-3-7z"/><path d="M11 13 20 4"/>',
    refresh: '<path d="M20 11a8 8 0 1 0-2.3 5.7"/><path d="M20 4v7h-7"/>',
    bolt: '<path d="M13 2 4 14h7l-1 8 9-12h-7z"/>',
    check: '<path d="m5 12.5 4.5 4.5L19 7.5"/>',
    term: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="m7 9 3 3-3 3M13 15h4"/>',
    spark: '<path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M6 18l2.5-2.5M15.5 8.5 18 6"/>',
    key: '<circle cx="8" cy="15" r="4"/><path d="m11 12 9-9M17 6l3 3M14 9l2 2"/>',
    play: '<path d="M7 4v16l13-8z"/>',
    stop: '<rect x="6" y="6" width="12" height="12" rx="2"/>',
    copy: '<rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V5.5A1.5 1.5 0 0 0 14.5 4h-9A1.5 1.5 0 0 0 4 5.5v9A1.5 1.5 0 0 0 5.5 16H8"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    download: '<path d="M12 4v11m0 0l-4.5-4.5M12 15l4.5-4.5M5 20h14"/>',
    help: '<circle cx="12" cy="12" r="9"/><path d="M9.6 9.3a2.5 2.5 0 0 1 4.8.9c0 1.7-2.4 2.1-2.4 3.6"/><path d="M12 17h.01"/>',
    sideClose: '<rect x="3" y="4" width="18" height="16" rx="2.5"/><path d="M15 4v16M8 9.5 10.5 12 8 14.5"/>',
    sideOpen: '<rect x="3" y="4" width="18" height="16" rx="2.5"/><path d="M15 4v16M10.5 9.5 8 12l2.5 2.5"/>',
    shield: '<path d="M12 3 4.5 6v5.5c0 4.6 3.2 8.4 7.5 9.5 4.3-1.1 7.5-4.9 7.5-9.5V6z"/><path d="m9 12 2.2 2.2L15.5 10"/>',
    chart: '<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
    lock: '<rect x="5" y="10.5" width="14" height="10" rx="2"/><path d="M8 10.5V7.5a4 4 0 0 1 8 0v3"/>',
    film: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M7 5v14M17 5v14M3 9.5h4M17 9.5h4M3 14.5h4M17 14.5h4"/>',
    megaphone: '<path d="M4 10v4a1 1 0 0 0 1 1h2l5 4V5L7 9H5a1 1 0 0 0-1 1zM16 8.5a5 5 0 0 1 0 7M19 6a8.5 8.5 0 0 1 0 12"/>',
    bot: '<rect x="4.5" y="8" width="15" height="11" rx="3"/><path d="M12 4v4M9 13h.01M15 13h.01M9.5 16.2h5"/><circle cx="12" cy="3.5" r="1"/>',
    scroll: '<path d="M7 4h11a2 2 0 0 1 2 2v1h-4M7 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V7M7 4a2 2 0 0 1 2 2v12M11 9h4M11 13h4"/>',
    image: '<rect x="3" y="4.5" width="18" height="15" rx="2.5"/><circle cx="9" cy="10" r="1.8"/><path d="m21 16-5-5-8 8"/>',
    message: '<path d="M5 18.5 3.5 21V6.5A2.5 2.5 0 0 1 6 4h12a2.5 2.5 0 0 1 2.5 2.5v9A2.5 2.5 0 0 1 18 18H6z"/><path d="M8 9.5h8M8 13h5"/>',
    up: '<path d="M12 19V5M5.5 11.5 12 5l6.5 6.5"/>',
    pulse: '<path d="M3 12h4l2.5-6 5 12L17 12h4"/>',
    monitor: '<rect x="3" y="4.5" width="18" height="12" rx="2"/><path d="M8.5 20h7M12 16.5V20"/>',
    mute: '<path d="M4 10v4a1 1 0 0 0 1 1h2l5 4V5L7 9H5a1 1 0 0 0-1 1zM16 9.5l5 5M21 9.5l-5 5"/>',
    door: '<path d="M14 4H6.5A1.5 1.5 0 0 0 5 5.5v15h9zM14 4l5 1.5v15H14M11 12.5h.01"/>',
    link: '<path d="M14 4h6v6M20 4l-9 9M18 14v4.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 4 18.5v-11A1.5 1.5 0 0 1 5.5 6H10"/>',
    game: '<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="3.2"/><path d="M12 3.5v5.3"/>',
    compose: '<path d="M12 4H6.5A2.5 2.5 0 0 0 4 6.5v11A2.5 2.5 0 0 0 6.5 20h11a2.5 2.5 0 0 0 2.5-2.5V12"/><path d="M17.6 3.6a2 2 0 0 1 2.8 2.8L12.5 14.3 9 15l.7-3.5z"/>',
    search: '<circle cx="11" cy="11" r="6.5"/><path d="m20 20-4.2-4.2"/>',
    pin: '<path d="M9 4h6l-1 5 3.5 3.5V14H6.5v-1.5L10 9z"/><path d="M12 14v6"/>',
    archive: '<rect x="3.5" y="4.5" width="17" height="4" rx="1"/><path d="M5 8.5v10a1.5 1.5 0 0 0 1.5 1.5h11a1.5 1.5 0 0 0 1.5-1.5v-10M10 12.5h4"/>',
  };
  const icon = (name, cls = '') => el('i', { class: 'ic ' + cls, html: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${P[name] || ''}</svg>` });
  function hydrateIcons(root = document) { root.querySelectorAll('i[data-ic]').forEach((n) => { n.replaceWith(icon(n.dataset.ic)); }); }

  // ---------------- trạng thái ----------------
  const S = {
    cfg: null, sources: {}, secrets: {}, outputDir: '', platform: '',
    acc: null, accLoading: false,
    drafts: store.get('vp.drafts', []),
    outDir: store.get('vp.taskDir', ''), taskDirs: store.get('vp.taskDirs', []),
    tasks: store.get('vp.tasks', []),
    log: store.get('vp.log', []),
    runningId: null, runStart: 0,
    stage: {}, agentNote: {},
    stats: store.get('vp.stats', {}),
    theme: store.get('vp.theme', 'pastel'),
    decor: (() => { const d = store.get('vp.decor', null) || {}; return { wall: ['kem', 'bacha', 'troi', 'xam', 'vanh'].includes(d.wall) ? d.wall : 'troi', floor: ['sang', 'dam', 'xam'].includes(d.floor) ? d.floor : 'sang', rug: ['xanh', 'navy', 'tim', 'mint', 'vang'].includes(d.rug) ? d.rug : 'xanh' }; })(),
    assignTo: null,
  };
  S.tasks.forEach((t) => { if (t.status === 'running' || t.status === 'queued') { t.status = 'error'; t.note = 'Bị gián đoạn vì app đã đóng'; } });

  const KIND = { assign: 'giao việc', ask: 'hỏi', answer: 'trả lời', review: 'kiểm tra', done: 'xong', plan: 'kế hoạch', say: '' };
  const BRAND = { simi: '#0a78f0', sim: '#8a84a0', claude: '#d97757', openai: '#10a37f', gemini: '#6c8cff', ollama: '#cfcfcf' };
  const STAGES_TEAM = [['plan', 'Kế hoạch'], ['work', 'Thực hiện'], ['review', 'Kiểm tra'], ['final', 'Tổng hợp']];
  const STAGES_SOLO = [['work', 'Thực hiện'], ['review', 'Kiểm tra']];
  const TEMPLATES = [
    ['✉️', 'Email', 'Soạn email gửi [người nhận] về [nội dung].\nGiọng văn: lịch sự, ngắn gọn.\nÝ chính cần có: ...'],
    ['📊', 'Báo cáo', 'Viết báo cáo [tuần/tháng] về [chủ đề], gồm: tóm tắt, số liệu chính, vấn đề gặp phải, đề xuất tháng tới.'],
    ['📝', 'Tóm tắt', 'Tóm tắt nội dung sau thành 5 ý chính và 1 câu kết luận:\n\n[dán nội dung vào đây]'],
    ['🗓', 'Kế hoạch', 'Lập kế hoạch [dự án/sự kiện] trong [thời gian], chia theo tuần, có người phụ trách và mốc kiểm tra.'],
    ['🌐', 'Dịch', 'Dịch đoạn sau sang [tiếng Anh], giữ giọng văn trang trọng:\n\n[dán nội dung vào đây]'],
    ['💡', 'Ý tưởng', 'Đưa ra 10 ý tưởng về [chủ đề], mỗi ý kèm lý do và cách làm ngắn gọn.'],
    ['📣', 'Bài đăng', 'Viết bài đăng mạng xã hội giới thiệu [sản phẩm/sự kiện], khoảng 150 chữ, có lời kêu gọi hành động.'],
    ['📄', 'Công văn', 'Soạn công văn gửi [đơn vị nhận] về việc [nội dung], đúng thể thức văn bản hành chính.'],
  ];

  let office;

  // ---------------- tiện ích ----------------
  function toast(msg, err) {
    const t = $('#toast'); t.textContent = msg; t.className = 'toast show' + (err ? ' err' : '');
    clearTimeout(toast._t); toast._t = setTimeout(() => (t.className = 'toast' + (err ? ' err' : '')), err ? 5200 : 2600);
  }
  const agentById = (id) => S.cfg.agents.find((a) => a.id === id);
  const manager = () => S.cfg.agents.find((a) => a.isManager) || S.cfg.agents[0];
  const nameOf = (id) => (id === 'boss' ? 'Bạn' : (agentById(id) ? agentById(id).name : id));
  const colorOf = (id) => (id === 'boss' ? '#f5b54a' : (agentById(id) ? agentById(id).shirt : '#888'));
  const nowHM = (d = new Date()) => d.toTimeString().slice(0, 5);
  const uid = () => 'c' + Date.now().toString(36) + Math.random().toString(36).slice(2, 5);
  function autoTitle(text) { const w = text.trim().split(/\s+/).slice(0, 8).join(' '); return w.length < text.trim().length ? w + '…' : w; }
  function save() { store.set('vp.drafts', S.drafts); store.set('vp.tasks', S.tasks.slice(-60)); }
  function fmtElapsed(ms) { const s = Math.floor(ms / 1000); return `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`; }
  function cleanErr(e) { return String(e && e.message || e).replace(/^Error invoking remote method '[^']+': (Error: )?/, ''); }
  const brandOf = (src) => (S.sources[src] && S.sources[src].brand) || 'sim';
  const shortSource = (src, model) => window.shortSource(src, model); // định nghĩa trong office.js
  // ảnh đại diện chibi vẽ theo tóc / da / áo / kiểu tóc của nhân vật
  const SKINS = ['#f1c9a5', '#e2ae84', '#f6d7bd', '#c98e62', '#ebbf98', '#d9a074'];
  const STYLES = ['short', 'long', 'spiky', 'bun', 'bob', 'short'];
  const avCache = new Map();
  function mix(h1, h2, t) {
    const a = parseInt((h1 || '#888888').slice(1), 16), b = parseInt(h2.slice(1), 16);
    const c = (s) => Math.round(((a >> s) & 255) * (1 - t) + ((b >> s) & 255) * t);
    return `rgb(${c(16)},${c(8)},${c(0)})`;
  }
  function chibiURL(a) {
    const i = Math.max(0, S.cfg ? S.cfg.agents.findIndex((x) => x.id === a.id) : 0);
    const skin = a.skin || SKINS[i % 6], style = a.hairStyle || STYLES[i % 6], hair = a.hair || '#3a2a1a', shirt = a.shirt || '#6b8fd6';
    const acc = a.accessory || 'none', accent = a.accent || '#e1262d';
    const key = [hair, shirt, skin, style, !!a.isManager, !!a.isReviewer, acc, accent].join('|');
    if (avCache.has(key)) return avCache.get(key);
    const c = document.createElement('canvas'); c.width = c.height = 128; const g = c.getContext('2d'); g.scale(1.28, 1.28);
    const E = (x, y, rx, ry, rot = 0) => { g.beginPath(); g.ellipse(x, y, rx, ry, rot, 0, Math.PI * 2); g.fill(); };
    g.save(); g.beginPath(); g.arc(50, 50, 50, 0, Math.PI * 2); g.clip();
    const bg = g.createLinearGradient(0, 0, 0, 100); bg.addColorStop(0, mix(shirt, '#ffffff', 0.82)); bg.addColorStop(1, mix(shirt, '#ffffff', 0.62));
    g.fillStyle = bg; g.fillRect(0, 0, 100, 100);
    g.fillStyle = shirt; E(50, 104, 36, 26);
    g.fillStyle = mix(shirt, '#000000', 0.18); E(50, 82, 12, 4);
    if (a.isManager || acc === 'tie') { g.fillStyle = '#d64545'; g.beginPath(); g.moveTo(46, 80); g.lineTo(54, 80); g.lineTo(52, 100); g.lineTo(48, 100); g.fill(); }
    g.fillStyle = hair;
    if (style === 'long') { g.beginPath(); g.roundRect(22, 34, 56, 52, 18); g.fill(); }
    if (style === 'bob') E(50, 52, 32, 30);
    if (style === 'ponytail') { E(76, 50, 9, 18, 0.3); }
    g.fillStyle = skin; E(50, 72, 7, 8); E(50, 52, 25, 24);
    g.fillStyle = hair;
    g.beginPath(); g.ellipse(50, 44, 27.5, style === 'buzz' ? 18 : 21, 0, Math.PI, Math.PI * 2); g.fill();
    if (style !== 'buzz') { E(40, 36, 15, 8, -0.35); E(61, 36, 13, 7, 0.4); }
    if (style === 'curly') [[26, 42], [32, 30], [42, 24], [54, 23], [65, 28], [73, 38], [76, 50], [24, 54]].forEach(([x, y]) => E(x, y, 7.5, 7.5));
    if (style === 'ponytail') { g.fillStyle = accent; E(73, 38, 4, 4); g.fillStyle = hair; }
    if (style === 'bun') E(50, 16, 10, 9);
    if (style === 'spiky') { g.beginPath(); [[30, 30], [40, 18], [50, 26], [60, 16], [70, 30]].forEach(([x, y], k) => { g.moveTo(x - 7, 34); g.lineTo(x, y - 4 - (k % 2) * 3); g.lineTo(x + 7, 34); }); g.fill(); }
    g.fillStyle = '#2b2228'; E(41, 55, 3.6, 4.6); E(59, 55, 3.6, 4.6);
    g.fillStyle = '#ffffff'; E(42.4, 53.4, 1.3, 1.3); E(60.4, 53.4, 1.3, 1.3);
    g.fillStyle = 'rgba(255,120,140,.45)'; E(34, 62, 5, 3); E(66, 62, 5, 3);
    g.strokeStyle = '#8a4a4a'; g.lineWidth = 2; g.lineCap = 'round'; g.beginPath(); g.arc(50, 61, 4.5, 0.2 * Math.PI, 0.8 * Math.PI); g.stroke();
    g.fillStyle = accent;
    if (acc === 'cap') { g.beginPath(); g.ellipse(50, 38, 28, 17, 0, Math.PI, Math.PI * 2); g.fill(); E(50, 37, 30, 4); }
    if (acc === 'bow') { g.beginPath(); g.moveTo(50, 24); g.lineTo(38, 17); g.lineTo(38, 31); g.closePath(); g.moveTo(50, 24); g.lineTo(62, 17); g.lineTo(62, 31); g.closePath(); g.fill(); }
    if (acc === 'headphones') { g.strokeStyle = '#2b2b33'; g.lineWidth = 3; g.beginPath(); g.arc(50, 50, 27, Math.PI * 1.05, Math.PI * 1.95); g.stroke(); E(24, 54, 5, 8); E(76, 54, 5, 8); }
    if (acc === 'crown') { g.fillStyle = '#f5c518'; g.beginPath(); g.moveTo(36, 26); g.lineTo(40, 12); g.lineTo(46, 22); g.lineTo(50, 9); g.lineTo(54, 22); g.lineTo(60, 12); g.lineTo(64, 26); g.closePath(); g.fill(); }
    if (a.isReviewer || acc === 'glasses') { g.strokeStyle = '#3a3340'; g.lineWidth = 1.8; g.beginPath(); g.arc(41, 55, 7, 0, Math.PI * 2); g.moveTo(66, 55); g.arc(59, 55, 7, 0, Math.PI * 2); g.moveTo(48, 55); g.lineTo(52, 55); g.stroke(); }
    g.restore();
    const url = c.toDataURL('image/png'); avCache.set(key, url); return url;
  }
  const avatar = (a, size = 30) => el('img', { class: 'avimg', src: chibiURL(a), width: size, height: size, alt: '', draggable: 'false' });

  function connected(src) {
    const A = S.acc; if (src === 'sim') return true; if (!A) return null;
    switch (src) {
      case 'simi': return !!A.simi?.loggedIn;
      case 'claude-cli': return !!A.claude?.loggedIn;
      case 'codex-cli': return !!A.codex?.loggedIn;
      case 'antigravity-cli': return !!A.antigravity?.installed;
      case 'gemini-cli': return !!A.gemini?.loggedIn;
      case 'ollama': return !!A.ollama?.installed;
      case 'anthropic-api': return !!S.secrets.anthropic;
      case 'openai-api': return !!S.secrets.openai;
      case 'gemini-api': return !!S.secrets.gemini;
      default: return false;
    }
  }

  // âm báo nhẹ khi xong việc
  function chime() {
    if (S.cfg.notify === false) return;
    if (S.cfg.sound !== false) return sfx('chime');
    try {
      const ctx = chime.ctx || (chime.ctx = new (window.AudioContext || window.webkitAudioContext)());
      [[660, 0], [990, 0.13]].forEach(([f, d]) => {
        const o = ctx.createOscillator(), g = ctx.createGain();
        o.type = 'sine'; o.frequency.value = f; o.connect(g); g.connect(ctx.destination);
        const t = ctx.currentTime + d; g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(0.12, t + 0.02); g.gain.exponentialRampToValueAtTime(0.001, t + 0.45);
        o.start(t); o.stop(t + 0.5);
      });
    } catch { /* bỏ qua */ }
  }

  // ---------------- âm thanh dễ thương ----------------
  function sfx(name) {
    if (!S.cfg || S.cfg.sound === false) return;
    try {
      const ctx = sfx.ctx || (sfx.ctx = new (window.AudioContext || window.webkitAudioContext)());
      const tone = (f0, f1, d, dur, type = 'sine', vol = 0.08) => {
        const o = ctx.createOscillator(), g = ctx.createGain(); const t = ctx.currentTime + d;
        o.type = type; o.frequency.setValueAtTime(f0, t); o.frequency.exponentialRampToValueAtTime(f1, t + dur);
        g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(vol, t + 0.012); g.gain.exponentialRampToValueAtTime(0.0008, t + dur);
        o.connect(g); g.connect(ctx.destination); o.start(t); o.stop(t + dur + 0.02);
      };
      if (name === 'click') tone(880, 1320, 0, 0.07, 'triangle', 0.05);
      else if (name === 'pop') tone(520, 980, 0, 0.12, 'sine', 0.07);
      else if (name === 'send') { tone(600, 900, 0, 0.1); tone(900, 1350, 0.08, 0.14); }
      else if (name === 'sparkle') { [1320, 1760, 2093].forEach((f, i) => tone(f, f * 1.02, i * 0.07, 0.18, 'sine', 0.05)); }
      else if (name === 'meow') { tone(720, 1100, 0, 0.14, 'triangle', 0.06); tone(1100, 640, 0.12, 0.28, 'triangle', 0.06); }
      else if (name === 'dance') { [523, 659, 784, 1047].forEach((f, i) => tone(f, f, i * 0.11, 0.12, 'square', 0.03)); }
      else if (name === 'chime') { tone(660, 660, 0, 0.45); tone(990, 990, 0.13, 0.5); }
      else if (name === 'clack') tone(2100, 1500, 0, 0.035, 'triangle', 0.05);
      else if (name === 'pocket') { tone(320, 140, 0, 0.16, 'sine', 0.08); tone(180, 90, 0.05, 0.16, 'sine', 0.05); }
      else if (name === 'win') { [784, 988, 1175, 1568].forEach((f, i) => tone(f, f, i * 0.1, 0.22, 'triangle', 0.05)); }
    } catch { /* bỏ qua */ }
  }

  // ---------------- giao diện sáng / tối ----------------
  function applyTheme() {
    document.documentElement.dataset.theme = S.theme;
    $('#btnTheme').textContent = S.theme === 'dark' ? '☀️' : '🌙';
    $('#btnTheme').title = S.theme === 'dark' ? 'Chuyển sang giao diện Pastel sáng' : 'Chuyển sang giao diện Tối';
  }

  // ---------------- chỉ số: năng lượng, tâm trạng, việc đã làm ----------------
  const clamp = (v) => Math.max(0, Math.min(100, Math.round(v)));
  function stat(id) { return S.stats[id] || (S.stats[id] = { energy: 90, mood: 72, done: 0 }); }
  function bump(id, de = 0, dm = 0) { const s = stat(id); s.energy = clamp(s.energy + de); s.mood = clamp(s.mood + dm); }
  function moodEmoji(s) { if (s.energy < 25) return '😪'; if (s.mood >= 82) return '🥰'; if (s.mood >= 62) return '😊'; if (s.mood >= 40) return '🙂'; return '😕'; }
  function crownId() {
    let best = null, max = 0;
    for (const a of (S.cfg ? S.cfg.agents : [])) { const d = stat(a.id).done; if (d > max) { max = d; best = a.id; } }
    return max > 0 ? best : null;
  }
  function pushStats() {
    store.set('vp.stats', S.stats);
    const c = crownId();
    if (office) for (const a of S.cfg.agents) { const s = stat(a.id); office.setStats(a.id, { energy: s.energy, mood: s.mood, emoji: moodEmoji(s), crown: a.id === c }); }
    renderRoster(); renderAssignSelect();
  }

  // ---------------- thẻ tương tác khi bấm vào nhân vật ----------------
  const ACTIONS = [['wave', '👋', 'Chào'], ['coffee', '☕', 'Mời cà phê'], ['praise', '💖', 'Khen'], ['dance', '🕺', 'Nhảy'], ['assign', '📋', 'Giao việc'], ['config', '⚙️', 'Cấu hình']];
  function closeInteract() { document.querySelectorAll('.interact').forEach((n) => n.remove()); document.removeEventListener('mousedown', closeInteract.out, true); }
  function openInteract(id, x, y) {
    closeInteract();
    const a = agentById(id); if (!a) return;
    const s = stat(id); const ns = S.agentNote[id] || {};
    const bar = (v, cls = '') => el('span', { class: 'ebar ' + cls + (v < 30 && !cls ? ' low' : '') }, el('i', { style: `width:${v}%` }));
    const card = el('div', { class: 'interact' },
      el('div', { class: 'ihead' }, avatar(a, 48), el('div', {}, el('b', { text: a.name + (a.id === crownId() ? ' 👑' : '') }), el('small', { text: `${a.title} · ${shortSource(a.source, a.model)}` })), el('span', { class: 'imood', text: moodEmoji(s) })),
      el('div', { class: 'istats' },
        el('span', { text: '⚡ Năng lượng' }), bar(s.energy), el('span', { text: s.energy + '%' }),
        el('span', { text: '💗 Tâm trạng' }), bar(s.mood, 'mbar'), el('span', { text: s.mood + '%' }),
        el('span', { text: '✅ Việc đã xong' }), el('span'), el('span', { text: String(s.done) })),
      el('div', { class: 'igrid' }, ACTIONS.map(([k, emo, label]) => el('button', { type: 'button', onclick: () => doAct(id, k) }, el('span', { text: emo }), label))),
      el('button', { class: 'ichat', type: 'button', onclick: () => { closeInteract(); window.VPChat && window.VPChat.openAgent(id); } }, '💬 Chat riêng với ' + a.name),
      el('div', { class: 'ifoot', text: ns.state === 'working' ? `💼 ${ns.note || 'Đang làm việc'}` : s.energy < 30 ? '😪 Hơi mệt rồi, mời cà phê nha!' : 'Bấm đúp tên trên đầu nhân vật để đổi tên' }));
    document.body.append(card);
    const w = card.offsetWidth, h = card.offsetHeight;
    card.style.left = Math.max(10, Math.min(window.innerWidth - w - 10, x + 14)) + 'px';
    card.style.top = Math.max(66, Math.min(window.innerHeight - h - 10, y - h / 2)) + 'px';
    sfx('pop');
    closeInteract.out = (e) => { if (!card.contains(e.target)) closeInteract(); };
    setTimeout(() => document.addEventListener('mousedown', closeInteract.out, true), 0);
  }
  async function doAct(id, k) {
    closeInteract();
    const a = agentById(id);
    if (k === 'config') return openDesk(id);
    if (k === 'assign') {
      S.assignTo = id; renderAssignSelect();
      const ta = $('#cardText'); ta.focus(); ta.classList.remove('glow'); void ta.offsetWidth; ta.classList.add('glow');
      toast(`📋 Gõ việc cho ${a.name} rồi bấm Giao ngay nhé`);
      return;
    }
    sfx(k === 'dance' ? 'dance' : k === 'praise' ? 'sparkle' : 'pop');
    if (k === 'wave') bump(id, 0, 3);
    if (k === 'praise') bump(id, 0, 14);
    const ok = await office.interact(id, k);
    if (ok && k === 'dance') bump(id, -3, 10);
    pushStats();
  }

  // ---------------- trang trí phòng ----------------
  const DECOR = {
    wall: [['troi', 'Xanh trời', '#d9e9f7'], ['kem', 'Kem', '#efe3cc'], ['bacha', 'Bạc hà', '#d6efe4'], ['xam', 'Xám xanh', '#dfe5ee'], ['vanh', 'Vani', '#fbf3d6']],
    floor: [['sang', 'Gỗ sáng', '#d7a26d'], ['dam', 'Gỗ đậm', '#8f6a4a'], ['xam', 'Gỗ xám', '#b8aea6']],
    rug: [['xanh', 'Xanh SIMI', '#2f8cf0'], ['navy', 'Navy UNIQ', '#1f3d73'], ['tim', 'Tím Crénot', '#5a42a6'], ['mint', 'Bạc hà', '#7cc8b2'], ['vang', 'Vàng', '#f2c96b']],
  };
  function openDecor() {
    const d = { ...S.decor };
    const body = el('div', { class: 'decor' });
    const draw = () => body.replaceChildren(
      el('p', { class: 'lead', text: 'Chọn màu cho văn phòng của bạn – đổi ngay khi bấm.' }),
      ...[['wall', 'Màu tường'], ['floor', 'Sàn nhà'], ['rug', 'Thảm']].map(([k, label]) => el('div', { class: 'drow' }, el('b', { text: label }),
        el('div', { class: 'swatches' }, DECOR[k].map(([id, name, col]) => el('button', { class: 'sw' + (d[k] === id ? ' on' : ''), type: 'button', onclick: () => { d[k] = id; S.decor = { ...d }; store.set('vp.decor', S.decor); office.setDecor(S.decor); sfx('click'); draw(); } },
          el('i', { style: `background:${col}` }), name))))));
    draw();
    openModal('🎨 Trang trí văn phòng', body, [el('button', { class: 'btn', text: 'Mặc định', onclick: () => { S.decor = { wall: 'troi', floor: 'sang', rug: 'xanh' }; store.set('vp.decor', S.decor); office.setDecor(S.decor); closeModal(); openDecor(); } }), el('button', { class: 'btn primary', text: 'Xong', onclick: closeModal })]);
  }

  // ---------------- khung soạn việc ----------------
  function renderAssignSelect() {
    if (!agentById(S.assignTo)) S.assignTo = manager().id;
    const crown = crownId();
    $('#assignChips').replaceChildren(...S.cfg.agents.map((a) => el('button', { type: 'button', class: 'achip' + (a.id === S.assignTo ? ' on' : ''), title: `${a.name} – ${a.title}`, onclick: () => { S.assignTo = a.id; sfx('click'); renderAssignSelect(); } },
      avatar(a, 36), a.isManager ? el('span', { class: 'star', text: '★' }) : null, a.id === crown ? el('span', { class: 'crownmini', text: '👑' }) : null)));
    const a = agentById(S.assignTo);
    $('#assignName').textContent = a.isManager ? `★ ${a.name} – cả phòng cùng làm` : `${a.name} – ${a.title}`;
  }

  function renderTemplates() {
    const box = $('#tpls');
    box.replaceChildren(...TEMPLATES.map(([emo, name, text]) => el('button', { class: 'chip', type: 'button', onclick: () => {
      const ta = $('#cardText'); ta.value = text; ta.focus();
      const i = text.indexOf('['); if (i >= 0) ta.setSelectionRange(i, text.indexOf(']', i) + 1);
      if (!$('#cardTitle').value) $('#cardTitle').value = name;
    } }, el('span', { text: emo }), name)));
  }

  // ---------------- xuất kết quả: định dạng, tên file, thư mục dự án ----------------
  const FMT = { md: ['Markdown', 'md', '📄'], docx: ['Word', 'docx', '📝'], xlsx: ['Excel', 'xlsx', '📊'], pdf: ['PDF', 'pdf', '📕'], html: ['HTML', 'html', '🌐'], csv: ['CSV', 'csv', '🧾'], txt: ['Văn bản', 'txt', '🗒️'] };
  // giống src/export.js: "xuất ra file Excel", "lưu file word", "dạng PDF"…
  function detectFormat(text) {
    const t = String(text || '').toLowerCase();
    const near = (re) => new RegExp(`(file|tệp|tep|xuất|xuat|lưu|luu|định dạng|dang|bảng tính|export|save|dạng)[^.\\n]{0,24}(${re})|\\.(${re})\\b`, 'i').test(t);
    if (near('excel|xlsx|bảng tính|spreadsheet')) return 'xlsx';
    if (near('word|docx|doc\\b')) return 'docx';
    if (near('pdf')) return 'pdf';
    if (near('csv')) return 'csv';
    if (near('html|trang web|web page')) return 'html';
    if (near('txt|văn bản thuần|text thuần')) return 'txt';
    if (near('markdown|\\bmd\\b')) return 'md';
    return '';
  }
  const fmtFromName = (n) => { const m = String(n || '').match(/\.(md|docx?|xlsx?|pdf|html?|csv|txt)$/i); if (!m) return ''; const e = m[1].toLowerCase(); return e === 'doc' ? 'docx' : e === 'xls' ? 'xlsx' : e === 'htm' ? 'html' : e; };
  const cleanName = (n) => String(n || '').replace(/[\\/:*?"<>|]/g, ' ').replace(/\s+/g, ' ').trim().replace(/\.(md|docx?|xlsx?|pdf|html?|csv|txt)$/i, '');
  const baseName = (p) => String(p || '').split(/[\\/]/).filter(Boolean).pop() || p;
  function effectiveFormat(o) {
    if (o.format && o.format !== 'auto') return { f: o.format, why: '' };
    const byName = fmtFromName(o.fileName); if (byName) return { f: byName, why: 'theo tên file' };
    const byText = detectFormat(o.text); if (byText) return { f: byText, why: 'theo lệnh' };
    return { f: 'md', why: '' };
  }
  function outOpts() { return { format: $('#outFmt').value, fileName: $('#outName').value.trim(), outDir: S.outDir || '' }; }
  function renderOut() {
    const o = { ...outOpts(), text: $('#cardText').value };
    const { f, why } = effectiveFormat(o);
    const [name, ext, emo] = FMT[f];
    const fname = cleanName(o.fileName) || cleanName($('#cardTitle').value) || '';
    $('#outHint').textContent = `${emo} ${fname ? fname + '.' + ext : name}${o.format === 'auto' && why ? ' · ' + why : ''}`;
    $('#outHint').title = `Kết quả sẽ lưu thành file ${name} (.${ext})`;
    const b = $('#outDir');
    b.querySelector('.od-name').textContent = S.outDir ? baseName(S.outDir) : 'Thư mục kết quả của app';
    b.title = 'Lưu file kết quả vào: ' + (S.outDir || S.outputDir || '') + '\nBấm để chọn thư mục dự án';
    b.classList.toggle('custom', !!S.outDir);
  }
  function setOutDir(dir) {
    S.outDir = dir || '';
    store.set('vp.taskDir', S.outDir);
    if (dir) { S.taskDirs = [dir, ...S.taskDirs.filter((d) => d !== dir)].slice(0, 6); store.set('vp.taskDirs', S.taskDirs); }
    renderOut(); sfx('click');
  }
  function outDirMenu(anchor) {
    document.querySelectorAll('.menu').forEach((m) => m.remove());
    const r = anchor.getBoundingClientRect();
    const row = (emo, title, sub, on, onclick) => el('button', { type: 'button', class: on ? 'on' : '', onclick: () => { m.remove(); onclick(); } },
      el('span', { text: emo }), el('span', { style: 'min-width:0' }, el('b', { text: title }), sub ? el('small', { class: 'md-path', text: sub }) : null));
    const projects = (S.cfg.chatProjects || []).filter((p) => p && p.dir && !S.taskDirs.includes(p.dir)).slice(0, 6);
    const m = el('div', { class: 'menu', style: `left:${r.left}px;top:${r.bottom + 4}px;max-width:${Math.max(280, r.width)}px` },
      row('🏠', 'Thư mục kết quả của app', S.outputDir || '', !S.outDir, () => setOutDir('')),
      S.taskDirs.length ? [el('div', { class: 'menu-sep' }), el('div', { class: 'menu-h', text: 'Dùng gần đây' }),
        ...S.taskDirs.map((d) => row(d === S.outDir ? '✅' : '📁', baseName(d), d, d === S.outDir, () => setOutDir(d)))] : null,
      projects.length ? [el('div', { class: 'menu-sep' }), el('div', { class: 'menu-h', text: 'Dự án' }),
        ...projects.map((p) => row('📂', p.name || baseName(p.dir), p.dir, p.dir === S.outDir, () => setOutDir(p.dir)))] : null,
      el('div', { class: 'menu-sep' }),
      row('➕', 'Chọn thư mục khác…', '', false, async () => { const d = await window.vp.chooseDir(); if (d) setOutDir(d); }),
      S.outDir ? row('🧹', 'Xoá khỏi danh sách gần đây', baseName(S.outDir), false, () => { S.taskDirs = S.taskDirs.filter((d) => d !== S.outDir); store.set('vp.taskDirs', S.taskDirs); setOutDir(''); }) : null);
    document.body.append(m);
    const mr = m.getBoundingClientRect();
    if (mr.bottom > innerHeight - 8) m.style.top = Math.max(8, r.top - mr.height - 4) + 'px';
    setTimeout(() => document.addEventListener('click', function off(e) { if (!m.contains(e.target)) { m.remove(); document.removeEventListener('click', off); } }), 0);
  }

  function readComposer() {
    const text = $('#cardText').value.trim();
    if (!text) { $('#cardText').focus(); $('#cardText').classList.add('shake'); setTimeout(() => $('#cardText').classList.remove('shake'), 500); return null; }
    return { title: $('#cardTitle').value.trim() || autoTitle(text), text, ...outOpts() };
  }
  function clearComposer() { $('#cardText').value = ''; $('#cardTitle').value = ''; $('#outName').value = ''; $('#outFmt').value = 'auto'; renderOut(); }
  const outOf = (o) => ({ format: o.format || 'auto', fileName: o.fileName || '', outDir: o.outDir || '' });

  async function goNow() {
    const c = readComposer(); if (!c) return;
    if (await submitTask(c.title, c.text, S.assignTo, outOf(c))) clearComposer();
  }
  function saveDraft() {
    const c = readComposer(); if (!c) return;
    S.drafts.push({ id: uid(), ...c }); save(); renderCards(); clearComposer();
    toast('Đã lưu thẻ – kéo thả vào bàn để giao');
  }

  async function submitTask(title, text, agentId, out = {}) {
    try {
      const o = outOf(out);
      const id = await window.vp.addTask({ title, text, targetId: agentId, ...o });
      const ex = S.tasks.find((t) => t.id === id);
      if (ex) Object.assign(ex, { title, text, targetId: agentId, ...o });
      else S.tasks.push({ id, title, text, targetId: agentId, status: 'queued', ...o });
      save(); renderCards();
      sfx('send');
      toast(`📨 Đã giao "${title}" cho ${nameOf(agentId)}`);
      return true;
    } catch (e) { toast(cleanErr(e), true); return false; }
  }

  async function assignCard(cardId, agentId) {
    const d = S.drafts.find((x) => x.id === cardId);
    if (!d) return;
    if (await submitTask(d.title, d.text, agentId, outOf(d))) { S.drafts = S.drafts.filter((x) => x.id !== cardId); save(); renderCards(); }
  }

  // ---------------- danh sách việc ----------------
  function stepper(t) {
    const who = agentById(t.targetId);
    const steps = who && who.isManager ? STAGES_TEAM : STAGES_SOLO;
    const cur = S.stage[t.id];
    const idx = steps.findIndex(([k]) => k === cur);
    return el('div', { class: 'stepper' }, steps.map(([k, label], i) => el('span', { class: 'st' + (i < idx ? ' done' : i === idx ? ' on' : '') }, el('b'), label)));
  }

  function renderCards() {
    const draftBox = $('#listDraft'), runBox = $('#listRun'), doneBox = $('#listDone');
    draftBox.replaceChildren(); runBox.replaceChildren(); doneBox.replaceChildren();
    for (const d of S.drafts) {
      const card = el('div', { class: 'card', draggable: 'true' },
        el('button', { class: 'del', title: 'Xóa thẻ', text: '✕', onclick: (e) => { e.stopPropagation(); S.drafts = S.drafts.filter((x) => x.id !== d.id); save(); renderCards(); } }),
        el('div', { class: 'ct', text: d.title }),
        el('div', { class: 'cx', text: d.text }),
        fileBadge(d),
        el('div', { class: 'cm' }, el('button', { class: 'btn mini', text: 'Giao cho ▸', onclick: (e) => { e.stopPropagation(); assignMenu(e.currentTarget, d.id); } })));
      card.addEventListener('dragstart', (e) => { e.dataTransfer.setData('text/vp-card', d.id); e.dataTransfer.effectAllowed = 'move'; card.classList.add('dragging'); });
      card.addEventListener('dragend', () => card.classList.remove('dragging'));
      draftBox.append(card);
    }
    if (!S.drafts.length) draftBox.append(el('div', { class: 'empty small', text: 'Không có thẻ nào' }));
    const active = S.tasks.filter((t) => ['queued', 'running', 'error', 'cancelled'].includes(t.status));
    for (const t of active.slice().reverse()) {
      const who = agentById(t.targetId);
      const meta = el('div', { class: 'cm' });
      if (t.status === 'running') meta.append(el('span', { class: 'spin' }), ` ${who ? who.name : ''} · ${fmtElapsed(Date.now() - (S.runStart || Date.now()))}`, el('button', { class: 'btn mini', onclick: () => window.vp.cancelTask(t.id) }, icon('stop'), 'Dừng'));
      else if (t.status === 'queued') meta.append(`Chờ đến lượt · ${who ? who.name : ''}`, el('button', { class: 'btn mini', text: 'Hủy', onclick: () => window.vp.cancelTask(t.id) }));
      else {
        meta.append(t.status === 'error' ? 'Lỗi' : 'Đã dừng',
          el('button', { class: 'btn mini', text: 'Làm lại', onclick: () => { removeTask(t.id); submitTask(t.title, t.text, t.targetId, outOf(t)); } }),
          el('button', { class: 'btn mini', text: 'Bỏ', onclick: () => { removeTask(t.id); renderCards(); } }));
      }
      runBox.append(el('div', { class: 'card ' + t.status, title: t.note || '' },
        el('div', { class: 'ct', text: t.title }),
        t.status === 'running' ? stepper(t) : (t.note && t.status === 'error' ? el('div', { class: 'cx', text: t.note }) : el('div', { class: 'cx', text: t.text })),
        fileBadge(t),
        meta));
    }
    if (!active.length) runBox.append(el('div', { class: 'empty small', text: 'Chưa có việc nào đang làm' }));
    const done = S.tasks.filter((t) => t.status === 'done').slice(-15).reverse();
    for (const t of done) {
      doneBox.append(el('div', { class: 'card done', title: t.file ? 'Bấm để xem kết quả\n' + t.file : 'Bấm để xem kết quả', onclick: () => t.file && openResult(t.file, t.title, t.preview) },
        el('div', { class: 'ct' }, icon('check', 'ok'), t.title),
        t.file && !/\.md$/i.test(t.file) || t.outDir ? el('span', { class: 'cfile', text: `${fileEmoji(t.file)} ${baseName(t.file)}` }) : null,
        el('div', { class: 'cm', text: `${agentById(t.targetId)?.name || ''} · ${t.doneAt || ''}` })));
    }
    if (!done.length) doneBox.append(el('div', { class: 'empty small', text: 'Chưa có việc xong' }));
    $('#cDraft').textContent = S.drafts.length;
    $('#cRun').textContent = S.tasks.filter((t) => t.status === 'queued' || t.status === 'running').length;
    $('#cDone').textContent = S.tasks.filter((t) => t.status === 'done').length;
    if (office) office.setBoard({
      wait: S.drafts.length + S.tasks.filter((t) => t.status === 'queued').length,
      run: S.tasks.filter((t) => t.status === 'running').length,
      done: S.tasks.filter((t) => t.status === 'done').length,
    });
  }
  const fileEmoji = (f) => { const e = (String(f).match(/\.(\w+)$/) || [])[1]; const k = Object.keys(FMT).find((x) => FMT[x][1] === String(e).toLowerCase()); return k ? FMT[k][2] : '📄'; };
  // thẻ việc: định dạng / tên file / thư mục đã chọn (không chọn gì thì không hiện)
  function fileBadge(t) {
    if ((!t.format || t.format === 'auto') && !t.fileName && !t.outDir) return null;
    const { f } = effectiveFormat(t);
    return el('span', { class: 'cfile', title: t.outDir ? 'Lưu vào ' + t.outDir : '' }, `${FMT[f][2]} ${cleanName(t.fileName) || FMT[f][0]}${t.fileName ? '.' + FMT[f][1] : ''}${t.outDir ? ' · 📁 ' + baseName(t.outDir) : ''}`);
  }
  function removeTask(id) { S.tasks = S.tasks.filter((t) => t.id !== id); save(); }

  function assignMenu(anchor, cardId) {
    document.querySelectorAll('.menu').forEach((m) => m.remove());
    const r = anchor.getBoundingClientRect();
    const m = el('div', { class: 'menu', style: `left:${r.left}px;top:${r.bottom + 4}px` },
      S.cfg.agents.map((a) => el('button', { onclick: () => { m.remove(); assignCard(cardId, a.id); } },
        avatar(a, 24), el('span', {}, el('b', { text: a.name }), ' – ', a.title, a.isManager ? ' ★' : '', el('br'), el('small', { text: a.isManager ? 'Cả phòng cùng làm' : shortSource(a.source, a.model) })))));
    document.body.append(m);
    setTimeout(() => document.addEventListener('click', function off(e) { if (!m.contains(e.target)) { m.remove(); document.removeEventListener('click', off); } }), 0);
  }

  // ---------------- dải nhân sự ----------------
  function renderRoster() {
    const box = $('#roster');
    box.replaceChildren(...S.cfg.agents.map((a) => {
      const st = S.agentNote[a.id] || { state: 'idle', note: '' };
      const ok = connected(a.source);
      const ss = stat(a.id);
      return el('button', { class: `member st-${st.state}`, title: `${a.name} – ${a.title}\n${a.role}\nBấm để tương tác`, onclick: (e) => { const r = e.currentTarget.getBoundingClientRect(); openInteract(a.id, r.left, r.bottom + 6); } },
        el('span', { class: 'mav' }, avatar(a, 38), el('i', { class: 'ring' }), el('span', { class: 'mood', text: moodEmoji(ss) }), a.id === crownId() ? el('span', { class: 'crown', text: '👑' }) : null),
        el('span', { class: 'mtx' },
          el('b', {}, a.name, a.isManager ? el('em', { class: 'star', text: '★' }) : null),
          el('small', { text: st.state === 'working' ? (st.note || 'Đang làm') : st.state === 'error' ? 'Gặp lỗi – bấm để xem' : 'Đang rảnh' }),
          el('span', { class: 'mchip', style: `--b:${BRAND[brandOf(a.source)]}`, title: a.model || '' }, el('i', { class: 'dot' + (ok === false ? ' off' : '') }), el('span', { class: 'mct', text: shortSource(a.source, a.model) })),
          el('span', { class: 'ebar' + (ss.energy < 30 ? ' low' : ''), title: `Năng lượng ${ss.energy}%` }, el('i', { style: `width:${ss.energy}%` }))));
    }), el('button', { class: 'member add', title: 'Thêm bàn mới', disabled: S.cfg.agents.length >= 6, onclick: async () => { const id = await addDesk(); if (id) openDesk(id); } }, icon('plus'), el('small', { text: 'Thêm bàn' })));
  }

  function updateBanner() {
    const b = $('#setupBanner');
    const anyAcc = ['simi', 'claude-cli', 'codex-cli', 'antigravity-cli', 'ollama', 'anthropic-api', 'openai-api', 'gemini-api', 'gemini-cli'].some((s) => connected(s));
    const allSim = S.cfg.agents.every((a) => a.source === 'sim');
    const broken = S.cfg.agents.filter((a) => connected(a.source) === false);
    b.replaceChildren();
    // máy chưa cài SIMI (kể cả chưa có Codex) → mời cài 1 nút, không để nhân viên gặp lỗi "thiếu Codex"
    if (S.acc && connected('simi') !== true && allSim) {
      b.append(icon('plug'), el('span', {}, el('b', { text: 'Chưa cài SIMI AI. ' }), 'Cả phòng đang chạy Giả lập. Dán key team là app tự cài Codex và mọi thứ cần thiết – không cần PowerShell.'),
        el('button', { class: 'btn small primary', text: '🚀 Cài đặt SIMI', onclick: () => window.VPSimiSetup.open({ mode: 'install' }) }),
        anyAcc ? el('button', { class: 'btn small', text: 'Gán model cho đội', onclick: openTeam }) : el('button', { class: 'btn small', text: 'Tài khoản khác', onclick: openAccounts }));
    } else if (S.acc && anyAcc && allSim) {
      b.append(icon('users'), el('span', {}, el('b', { text: 'Đã có tài khoản kết nối. ' }), 'Gán model cho từng người trong phòng để bắt đầu làm việc thật.'),
        el('button', { class: 'btn small primary', text: 'Gán model cho đội', onclick: openTeam }));
    } else if (S.acc && broken.length) {
      b.append(icon('bolt'), el('span', {}, el('b', { text: `${broken.map((a) => a.name).join(', ')}: ` }), 'nguồn đã chọn chưa kết nối.'),
        el('button', { class: 'btn small', text: 'Xem kết nối', onclick: openAccounts }));
    }
    b.classList.toggle('hidden', !b.childNodes.length);
    const n = ['simi', 'claude-cli', 'codex-cli', 'antigravity-cli', 'ollama'].filter((s) => connected(s)).length + (S.secrets.anthropic || S.secrets.openai || S.secrets.gemini ? 1 : 0);
    const badge = $('#accBadge'); badge.textContent = S.acc ? String(n) : '…'; badge.classList.toggle('zero', S.acc && n === 0);
  }

  async function refreshAccounts() {
    if (S.accLoading) return S.acc;
    S.accLoading = true;
    try { S.acc = await window.vp.checkAccounts(); S.secrets = S.acc.keys || S.secrets; }
    catch (e) { console.warn(e); }
    finally { S.accLoading = false; }
    renderRoster(); updateBanner();
    // đổi tài khoản (cài / gỡ SIMI, đăng nhập ChatGPT…) → tab Chat nạp lại danh sách model cho khớp
    const A = S.acc;
    const sig = A ? JSON.stringify([A.simi && A.simi.loggedIn, ...['codex', 'claude', 'antigravity', 'gemini', 'ollama'].map((k) => A[k] && A[k].loggedIn), A.codex && A.codex.account, A.keys]) : '';
    if (sig && sig !== S.accSig && window.VPChat) window.VPChat.refresh();
    S.accSig = sig;
    // vừa cài xong SIMI → vào Sảnh luôn
    if (S.acc && S.acc.simi && S.acc.simi.loggedIn && window.vp.lobby) window.vp.lobby.kick().catch(() => {});
    return S.acc;
  }

  // ---------------- nhật ký ----------------
  function addLog(entry, persist = true) {
    S.log.push(entry);
    if (S.log.length > 300) S.log.splice(0, S.log.length - 300);
    if (persist) store.set('vp.log', S.log.slice(-150));
    const box = $('#log');
    box.querySelector('.empty')?.remove();
    box.append(renderLog(entry));
    const body = $('#tab-log');
    if (body.scrollHeight - body.scrollTop - body.clientHeight < 200) body.scrollTop = body.scrollHeight;
  }
  function renderLog(e) {
    if (e.sep) return el('div', { class: 'logsep' }, el('span', { text: '▶ ' + e.title }), el('time', { text: e.time }));
    if (e.sys) return el('div', { class: 'msg sys' + (e.level === 'error' ? ' err' : '') }, el('span', { class: 'avatar sysav', text: '!' }),
      el('div', {}, el('div', { class: 'who' }, el('b', { text: 'Hệ thống' }), el('time', { text: e.time })), el('div', { class: 'tx', text: e.text })));
    const a = agentById(e.from) || { name: e.from === 'boss' ? 'Bạn' : e.from, shirt: colorOf(e.from) };
    return el('div', { class: 'msg k-' + e.kind }, avatar(a, 26),
      el('div', {},
        el('div', { class: 'who' }, el('b', { text: nameOf(e.from) }), el('span', { class: 'arrow', text: '→' }), nameOf(e.to), KIND[e.kind] ? el('span', { class: 'tag ' + e.kind, text: KIND[e.kind] }) : null, el('time', { text: e.time })),
        el('div', { class: 'tx', text: e.text })));
  }
  function renderAllLog() {
    const box = $('#log'); box.replaceChildren();
    if (!S.log.length) box.append(el('div', { class: 'empty', text: 'Các agent trao đổi gì với nhau sẽ hiện ở đây.' }));
    S.log.forEach((e) => box.append(renderLog(e)));
    $('#tab-log').scrollTop = 1e9;
  }

  // ---------------- khay kết quả ----------------
  async function loadTray() {
    const box = $('#tray');
    let items = [];
    try { items = await window.vp.listResults(); } catch (e) { box.replaceChildren(el('div', { class: 'empty', text: cleanErr(e) })); return; }
    box.replaceChildren();
    if (!items.length) box.append(el('div', { class: 'empty', text: 'Chưa có kết quả nào. Chọn định dạng (Word, Excel, PDF…) ở ô "Xuất kết quả" khi giao việc, hoặc ghi "xuất file Excel" trong nội dung.' }));
    for (const it of items) {
      const md = /\.md$/i.test(it.file) && /^\d{8}-\d{6}-/.test(it.name);
      box.append(el('button', { class: 'tray-item', title: it.file, onclick: () => openResult(it.file, it.title || it.name, it.preview) },
        el('span', { class: 'doc', text: fileEmoji(it.file) }),
        el('span', {}, el('b', { text: md ? it.name.replace(/^\d{8}-\d{6}-/, '').replace(/\.md$/, '').replace(/-/g, ' ') : it.name }),
          el('small', { text: new Date(it.mtime).toLocaleString('vi-VN') + (md ? '' : ' · ' + baseName(it.file.slice(0, -it.name.length - 1))) }))));
    }
    $('#cTray').textContent = items.length;
    office && office.setTray(items.length);
  }

  async function openResult(file, title, preview) {
    let content = '';
    const src = preview || (/\.(md|txt)$/i.test(file) ? file : '');
    if (src) { try { content = await window.vp.readFile(src); } catch (e) { if (!preview) { toast(cleanErr(e), true); return; } } }
    const body = el('div', { class: 'result-md' });
    if (content) body.innerHTML = window.renderMd(content);
    else body.append(el('p', { class: 'dim', text: 'Không có bản xem trước – bấm "Mở file" để mở bằng ứng dụng trên máy.' }));
    openModal(`${fileEmoji(file)} ${title || 'Kết quả'}`, body, [
      el('div', { class: 'left' }, el('small', { class: 'path', text: file })),
      content ? el('button', { class: 'btn', onclick: () => copyText(content) }, icon('copy'), 'Sao chép') : null,
      el('button', { class: 'btn', onclick: () => window.vp.showFile(file) }, icon('folder'), 'Hiện trong thư mục'),
      el('button', { class: 'btn primary', text: 'Mở file', onclick: () => window.vp.openFile(file) }),
    ], 'wide');
  }
  async function copyText(t) {
    try { await navigator.clipboard.writeText(t); }
    catch { const ta = el('textarea'); ta.value = t; document.body.append(ta); ta.select(); document.execCommand('copy'); ta.remove(); }
    toast('Đã sao chép');
  }

  // ---------------- modal ----------------
  function openModal(title, bodyNode, footNodes = [], size = '') {
    $('#modalTitle').textContent = title;
    $('#modalBody').replaceChildren(bodyNode);
    $('#modalFoot').replaceChildren(...footNodes);
    $('#modal .sheet').className = 'sheet ' + size;
    $('#modal').classList.remove('hidden');
    $('#modalBody').scrollTop = 0;
  }
  function closeModal() { $('#modal').classList.add('hidden'); clearInterval(S.pollT); }
  $('#modalClose').addEventListener('click', closeModal);
  $('#modal').addEventListener('mousedown', (e) => { if (e.target.id === 'modal') closeModal(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

  const field = (label, input, hint) => el('div', { class: 'field' }, el('label', { text: label }), input, hint ? el('small', { text: hint }) : null);

  // ---------------- chọn nguồn + model ----------------
  function sourceSelect(value, onChange, short) {
    const sel = el('select', { class: 'srcsel' });
    const groups = [['SIMI Gateway (key team)', ['simi']], ['Tài khoản đã đăng nhập', ['claude-cli', 'codex-cli', 'antigravity-cli']], ['Trên máy', ['ollama']], ['API key', ['anthropic-api', 'openai-api', 'gemini-api', 'gemini-cli']], ['Khác', ['sim']]];
    for (const [g, list] of groups) {
      const og = el('optgroup', { label: g });
      for (const k of list) {
        if (!S.sources[k]) continue;
        const c = connected(k);
        const lb = short ? S.sources[k].short : S.sources[k].label;
        og.append(el('option', { value: k, text: lb + (k === 'sim' ? '' : c ? '  ✓' : c === false ? (short ? '  ✕' : '  (chưa kết nối)') : '') }));
      }
      sel.append(og);
    }
    sel.value = value || 'sim';
    sel.addEventListener('change', () => onChange && onChange(sel.value));
    return sel;
  }

  function modelPicker(source, model, compact) {
    const sel = el('select', { class: 'mpsel' });
    const custom = el('input', { class: 'hidden', placeholder: 'Nhập chính xác tên model…' });
    const refresh = el('button', { class: 'btn icon mini', type: 'button', title: 'Tải lại danh sách model' }, icon('refresh'));
    const note = el('small', { class: 'mp-note' });
    const wrap = el('div', { class: 'mp' + (compact ? ' compact' : '') }, el('div', { class: 'mp-row' }, sel, refresh), custom, compact ? null : note);
    let src = source, cur = model || '', seq = 0;
    async function load(force) {
      const my = ++seq;
      custom.classList.add('hidden');
      if (src === 'sim') { sel.replaceChildren(el('option', { value: '', text: 'Không cần model' })); sel.disabled = true; refresh.disabled = true; note.textContent = ''; return; }
      sel.disabled = true; refresh.disabled = true; refresh.classList.add('spinning');
      sel.replaceChildren(el('option', { text: 'Đang lấy danh sách model…' }));
      let r; try { r = await window.vp.listModels(src, !!force); } catch (e) { r = { models: [], error: cleanErr(e) }; }
      if (my !== seq) return;
      refresh.classList.remove('spinning'); sel.disabled = false; refresh.disabled = false;
      const ms = r.models || [];
      sel.replaceChildren(...ms.map((m) => el('option', { value: m.id, text: m.label + (m.speedTag ? `  ${m.speedTag}` : '') + (m.note ? `  —  ${m.note}` : '') })));
      if (cur && !ms.some((m) => m.id === cur)) sel.append(el('option', { value: cur, text: `${cur}  (đang dùng)` }));
      sel.append(el('option', { value: '__custom', text: '✎ Tự nhập tên model…' }));
      if (ms.some((m) => m.id === cur) || cur) sel.value = cur;
      else sel.value = ms.length ? ms[0].id : '__custom';
      custom.classList.toggle('hidden', sel.value !== '__custom');
      note.textContent = r.error ? '⚠ ' + r.error : r.live ? `✓ ${ms.filter((m) => m.id).length} model lấy trực tiếp từ tài khoản của bạn` : (r.note || '');
      note.className = 'mp-note ' + (r.error ? 'bad' : r.live ? 'ok' : '');
      wrap.title = note.textContent;
    }
    sel.addEventListener('change', () => { custom.classList.toggle('hidden', sel.value !== '__custom'); if (sel.value === '__custom') custom.focus(); });
    refresh.addEventListener('click', () => load(true));
    load(false);
    return {
      el: wrap,
      setSource(s) { src = s; cur = ''; load(false); },
      get value() { return sel.value === '__custom' ? custom.value.trim() : (sel.disabled && src === 'sim' ? '' : sel.value); },
    };
  }

  // ---------------- cấu hình bàn ----------------
  function openDesk(agentId) {
    const idx = S.cfg.agents.findIndex((a) => a.id === agentId);
    if (idx < 0) return;
    const a = { ...S.cfg.agents[idx] };
    const name = el('input', { value: a.name, maxlength: 30 });
    const title = el('input', { value: a.title, maxlength: 40 });
    const role = el('textarea', { rows: 3 }); role.value = a.role;
    const mp = modelPicker(a.source, a.model);
    const help = el('small', { class: 'src-help' });
    const upd = (s) => { help.textContent = sourceHelp(s); };
    const src = sourceSelect(a.source, (s) => { mp.setSource(s); upd(s); });
    upd(a.source);
    const hair = el('input', { type: 'color', value: a.hair || '#2b1d14', title: 'Màu tóc' });
    const shirt = el('input', { type: 'color', value: a.shirt || '#3b6fb6', title: 'Màu áo' });
    const SK = ['#f1c9a5', '#e2ae84', '#f6d7bd', '#c98e62', '#ebbf98', '#d9a074'];
    const skin = el('input', { type: 'color', value: a.skin || SK[idx % SK.length], title: 'Màu da' });
    const STY = { short: 'Ngắn', long: 'Dài', bun: 'Búi', spiky: 'Dựng', bob: 'Bob' };
    const DEF = ['short', 'long', 'spiky', 'bun', 'bob', 'short'];
    const style = el('select', {}, Object.entries(STY).map(([k, v]) => el('option', { value: k, text: v, selected: k === (a.hairStyle || DEF[idx % DEF.length]) })));
    const rev = el('input', { type: 'checkbox', checked: !!a.isReviewer, disabled: !!a.isManager, id: 'chkRev' });
    const out = el('div', { class: 'testout' });
    const collect = () => ({ ...a, name: name.value.trim() || a.name, title: title.value.trim() || a.title, role: role.value.trim() || a.role,
      source: src.value, model: mp.value, hair: hair.value, shirt: shirt.value, skin: skin.value, hairStyle: style.value, isReviewer: !a.isManager && rev.checked });

    const body = el('div', { class: 'desk-form' },
      el('div', { class: 'desk-hero' }, avatar(a, 52), el('div', {}, el('div', { class: 'grid2' }, field('Tên nhân vật', name), field('Chức vụ', title)))),
      field('Vai trò (agent làm việc theo mô tả này)', role),
      el('div', { class: 'section-title' }, icon('spark'), 'Bộ não của bàn này'),
      el('div', { class: 'grid2' }, field('Nguồn', src), el('div', { class: 'field' }, el('label', { text: 'Model' }), mp.el)),
      help,
      el('div', { class: 'row-actions' }, el('button', { class: 'linkbtn', type: 'button', text: 'Chưa có tài khoản? Mở trang Kết nối →', onclick: openAccounts })),
      out,
      el('div', { class: 'section-title', text: 'Ngoại hình & vai trò' }),
      el('div', { class: 'grid2' },
        el('div', { class: 'field' }, el('label', { text: 'Tóc · áo · da · kiểu tóc' }), el('div', { class: 'colors' }, hair, shirt, skin, style)),
        a.isManager
          ? el('div', { class: 'field row', style: 'margin-top:20px' }, el('span', { class: 'star', text: '★' }), el('span', { text: 'Trưởng phòng – nhận việc lớn, chia việc và tổng hợp' }))
          : el('div', { class: 'field row', style: 'margin-top:20px' }, rev, el('label', { for: 'chkRev', text: 'Người kiểm tra (soát bài trước khi nộp)' }))),
      el('small', { class: 'dim', text: `Mã bàn: ${a.id} · Thay đổi áp dụng cho việc giao sau khi lưu.` }));

    const del = el('button', { class: 'btn danger', text: 'Xóa bàn', disabled: !!a.isManager });
    del.addEventListener('click', async () => {
      if (!del.classList.contains('armed')) { del.classList.add('armed'); del.textContent = 'Bấm lần nữa để xóa'; return; }
      S.cfg.agents.splice(idx, 1); await saveCfg(); closeModal();
    });
    const test = el('button', { class: 'btn' }, icon('bolt'), 'Thử kết nối');
    test.addEventListener('click', async () => {
      test.disabled = true; out.className = 'testout wait'; out.textContent = 'Đang gọi thử… (lần đầu có thể mất 10–30 giây)';
      const r = await window.vp.testAgent(collect());
      test.disabled = false;
      out.className = 'testout ' + (r.ok ? 'ok' : 'bad');
      out.textContent = r.ok ? `✓ Kết nối được (${(r.ms / 1000).toFixed(1)} giây). Trả lời: ${r.text}` : `✕ ${r.text}`;
    });
    const ok = el('button', { class: 'btn primary', text: 'Lưu' });
    ok.addEventListener('click', async () => {
      const n = collect();
      if (n.isReviewer) S.cfg.agents.forEach((x) => { x.isReviewer = false; });
      S.cfg.agents[idx] = n;
      if (await saveCfg()) { closeModal(); toast('Đã lưu bàn ' + n.name); }
    });
    openModal(`Bàn của ${a.name}`, body, [el('div', { class: 'left' }, del), test, ok]);
  }

  function sourceHelp(src) {
    const c = connected(src);
    const kind = S.sources[src]?.kind;
    if (kind === 'sim') return 'Không gọi AI. Dùng để xem thử văn phòng hoạt động.';
    const st = c ? '✓ Đã kết nối. ' : c === false ? '⚠ Chưa kết nối – vào trang Kết nối để đăng nhập. ' : '';
    if (kind === 'cli') return st + 'Dùng tài khoản bạn đã đăng nhập trên máy, không tốn thêm phí API.';
    if (src === 'ollama') return st + 'Model chạy ngay trên máy, dữ liệu không rời máy.';
    return st + 'Tính tiền theo lượng dùng của API key.';
  }

  async function saveCfg() {
    try {
      const r = await window.vp.saveConfig(S.cfg);
      S.outputDir = r.outputDir;
      office.setAgents(S.cfg.agents, S.sources);
      updateBanner(); renderCards(); renderAllLog(); renderRoster(); renderAssignSelect();
      return true;
    } catch (e) { toast(cleanErr(e), true); return false; }
  }

  // ---------------- CHỌN MODEL HIỂN THỊ CHO 1 TÀI KHOẢN ----------------
  // tick model muốn thấy trong ô chọn model (tab Chat, gán model cho nhân viên) – gồm bản mới, bản cũ, model ẩn,
  // và tự gõ tên model khác; "Về mặc định" = danh sách app tự lấy. Lưu trong cấu hình của app trên máy.
  const MODEL_ID = /^[\w.:/@[\]+-]{2,120}$/;
  async function openModelPrefs(src, name, { back } = {}) {
    const done = () => { closeModal(); if (back) back(); };
    const body = el('div', { class: 'mpf' }, el('p', { class: 'dim', text: 'Đang lấy danh sách model của tài khoản…' }));
    const save = el('button', { class: 'btn primary', text: 'Lưu', disabled: true });
    const reset = el('button', { class: 'btn', text: 'Về mặc định', disabled: true });
    openModal(`⚙️ Model hiển thị – ${name}`, body, [reset, el('span', { class: 'grow' }), el('button', { class: 'btn', text: 'Huỷ', onclick: done }), save], 'wide');
    const [cat, cur] = await Promise.all([window.vp.modelCatalog(src).catch((e) => ({ models: [], error: cleanErr(e) })), window.vp.listModels(src).catch(() => ({ models: [] }))]);
    const prefs = (S.cfg.modelPrefs || {})[src];
    const rows = (cat.models || []).map((m) => ({ ...m }));
    for (const m of cur.models || []) if (m.id && !rows.some((r) => r.id === m.id)) rows.push({ ...m, custom: true }); // model đã tự thêm trước đây
    const on = new Set(prefs ? prefs.show : (cur.models || []).filter((m) => m.id).map((m) => m.id));
    const order = prefs ? prefs.show : [];
    const draw = () => {
      const item = (m) => el('label', { class: 'mpf-row' + (on.has(m.id) ? ' on' : '') },
        el('input', { type: 'checkbox', checked: on.has(m.id), onchange: (e) => { if (e.target.checked) on.add(m.id); else on.delete(m.id); draw(); } }),
        el('span', { class: 'mpf-name' }, el('b', { text: m.label || m.id }), el('code', { text: m.id })),
        m.note ? el('small', { class: 'dim', text: m.note }) : null);
      const sect = (title, list) => (list.length ? [el('div', { class: 'mpf-h', text: title }), el('div', { class: 'mpf-list' }, list.map(item))] : []);
      const add = el('input', { class: 'mpf-add', placeholder: 'Gõ tên model khác (vd claude-opus-4-1) rồi bấm Thêm', spellcheck: 'false' });
      const addErr = el('small', { class: 'bad', hidden: true });
      const doAdd = () => {
        const id = add.value.trim();
        if (!MODEL_ID.test(id)) { addErr.textContent = 'Tên model chỉ gồm chữ, số và - . : / [ ]'; addErr.hidden = false; return; }
        if (!rows.some((r) => r.id === id)) rows.push({ id, label: id, note: 'model bạn tự thêm', custom: true });
        on.add(id); draw();
      };
      add.addEventListener('keydown', (e) => { if (e.key === 'Enter') doAdd(); });
      body.replaceChildren(...[
        el('p', { class: 'dim', text: `Tick model muốn hiện trong ô chọn model (tab Chat và gán model cho nhân viên). Đang chọn ${on.size} model. Bản cũ có thể đã bị ${name} ngừng – chọn rồi bấm "Thử" ở tab Chat để biết còn dùng được không.` }),
        cat.error ? el('p', { class: 'bad', text: '⚠ ' + cat.error }) : null,
        ...sect('Bản đang có', rows.filter((m) => m.standard)),
        ...sect('Bản cũ / model ẩn', rows.filter((m) => m.older)),
        ...sect('Bạn tự thêm', rows.filter((m) => m.custom)),
        el('div', { class: 'mpf-addrow' }, add, el('button', { class: 'btn small', text: '➕ Thêm', onclick: doAdd })), addErr].filter(Boolean));
      save.disabled = false; reset.disabled = !prefs;
    };
    draw();
    reset.onclick = async () => { await window.vp.setModelPrefs(src, null); if (S.cfg.modelPrefs) delete S.cfg.modelPrefs[src]; toast('Đã về danh sách model mặc định'); afterPrefs(); done(); };
    save.onclick = async () => {
      // giữ thứ tự cũ cho model đã chọn trước, model mới chọn xếp theo thứ tự trong bảng
      const show = [...order.filter((id) => on.has(id)), ...rows.map((r) => r.id).filter((id) => on.has(id) && !order.includes(id))];
      const labels = Object.fromEntries(rows.filter((r) => on.has(r.id) && r.label && r.label !== r.id).map((r) => [r.id, r.label]));
      try {
        const saved = await window.vp.setModelPrefs(src, { show, labels });
        S.cfg.modelPrefs = { ...(S.cfg.modelPrefs || {}), [src]: saved };
        toast(`💾 Đã lưu ${show.length} model cho ${name}`); afterPrefs(); done();
      } catch (e) { toast(cleanErr(e), true); }
    };
  }
  function afterPrefs() { if (window.VPChat) window.VPChat.refresh(); }

  // ---------------- KẾT NỐI TÀI KHOẢN ----------------
  const PROVIDERS = [
    { key: 'claude', src: 'claude-cli', name: 'Claude', sub: 'Tài khoản Claude Pro / Max · qua Claude Code', brand: 'claude', login: 'claude-login', install: 'claude-install' },
    { key: 'codex', src: 'codex-cli', name: 'ChatGPT', sub: 'Tài khoản ChatGPT Plus / Pro · qua Codex CLI', brand: 'openai', login: 'codex-login', install: 'codex-install', needNode: true },
    { key: 'antigravity', src: 'antigravity-cli', name: 'Gemini', sub: 'Tài khoản Google · qua Antigravity CLI', brand: 'gemini', login: 'antigravity-login', install: 'antigravity-install' },
    { key: 'ollama', src: 'ollama', name: 'Ollama', sub: 'Model chạy ngay trên máy · riêng tư tuyệt đối', brand: 'ollama', pull: 'ollama-pull', url: 'https://ollama.com/download' },
  ];

  async function openAccounts() {
    const body = el('div', { class: 'acc' });
    const foot = el('div', { class: 'left' }, el('small', { class: 'dim', text: 'Đăng nhập xong trong cửa sổ Terminal, quay lại đây – app tự nhận sau vài giây.' }));
    const re = el('button', { class: 'btn' }, icon('refresh'), 'Kiểm tra lại');
    openModal('Kết nối tài khoản AI', body, [foot, re, el('button', { class: 'btn primary', text: 'Gán model cho đội →', onclick: openTeam })], 'wide');
    const draw = () => {
      const A = S.acc;
      body.replaceChildren(
        el('p', { class: 'lead', text: 'Đăng nhập tài khoản bạn đã có. App dùng chính công cụ chính hãng trên máy, không lấy mật khẩu hay token của bạn.' }),
        simiCard(A ? A.simi : null),
        el('div', { class: 'acc-sep', text: 'Hoặc dùng tài khoản riêng' }),
        el('div', { class: 'acc-grid' }, PROVIDERS.map((p) => providerCard(p, A ? A[p.key] : null))),
        keysCard(),
        el('details', { class: 'adv' }, el('summary', { text: 'Nâng cao: Gemini CLI (cho API key trả phí / Enterprise)' }), providerCard({ key: 'gemini', src: 'gemini-cli', name: 'Gemini CLI', sub: 'Tài khoản Google thường đã chuyển sang Antigravity từ 18/6/2026', brand: 'gemini', login: 'gemini-login', install: 'gemini-install', needNode: true }, A ? A.gemini : null)));
    };
    draw();
    if (!S.acc) body.prepend(el('div', { class: 'loading' }, el('span', { class: 'spin' }), ' Đang kiểm tra các tài khoản trên máy…'));
    const refresh = async () => { re.disabled = true; re.querySelector('.ic')?.classList.add('spinning'); await refreshAccounts(); re.disabled = false; re.querySelector('.ic')?.classList.remove('spinning'); if (!$('#modal').classList.contains('hidden') && $('#modalTitle').textContent === 'Kết nối tài khoản AI') draw(); };
    re.addEventListener('click', refresh);
    refresh();
  }

  function startPolling() {
    clearInterval(S.pollT);
    let n = 0;
    S.pollT = setInterval(async () => {
      if (++n > 30) return clearInterval(S.pollT);
      const before = JSON.stringify(S.acc);
      await refreshAccounts();
      if (JSON.stringify(S.acc) !== before && $('#modalTitle').textContent === 'Kết nối tài khoản AI') { clearInterval(S.pollT); openAccounts(); toast('Đã cập nhật trạng thái kết nối'); }
    }, 5000);
  }

  function providerCard(p, st) {
    const color = BRAND[p.brand];
    let status, cls;
    if (!st) { status = 'Đang kiểm tra…'; cls = 'wait'; }
    else if (!st.installed) { status = 'Chưa cài'; cls = 'off'; }
    else if (st.ineligible) { status = 'Google ngừng hỗ trợ tài khoản cá nhân'; cls = 'off'; }
    else if (st.loggedIn === true) { status = 'Đã kết nối'; cls = 'on'; }
    else if (st.loggedIn === null) { status = p.key === 'antigravity' ? 'Đã cài – bấm Thử để xác nhận đăng nhập' : 'Đã cài'; cls = 'mid'; }
    else { status = 'Chưa đăng nhập'; cls = 'mid'; }
    const msg = el('div', { class: 'acc-msg' });
    const run = async (key, label) => {
      try {
        const cmd = await window.vp.openTerminal(key);
        msg.replaceChildren(icon('term'), el('span', {}, `Đã mở cửa sổ ${S.platform === 'darwin' ? 'Terminal' : 'CMD'} và chạy: `, el('code', { text: cmd }), `. ${label}`));
        msg.className = 'acc-msg show';
        startPolling();
      } catch (e) { toast(cleanErr(e), true); }
    };
    const btns = el('div', { class: 'acc-btns' });
    let loginBtn = null;
    const pill = el('span', { class: 'pill ' + cls, text: status });
    // Thử xong: cập nhật ngay thẻ (chữ trạng thái, nút Đăng nhập → Đăng nhập lại) – app cũng nhớ kết quả cho lần mở sau
    const markOn = () => {
      pill.className = 'pill on'; pill.textContent = 'Đã kết nối'; card.classList.remove('mid', 'off'); card.classList.add('on');
      if (loginBtn) { loginBtn.classList.remove('primary'); const t = [...loginBtn.childNodes].find((n) => n.nodeType === 3); if (t) t.textContent = 'Đăng nhập lại'; }
    };
    if (st && !st.installed) {
      if (p.url) btns.append(el('button', { class: 'btn primary small', text: 'Tải Ollama', onclick: () => window.vp.openUrl(p.url) }));
      else btns.append(el('button', { class: 'btn primary small', onclick: () => run(p.install, 'Chờ cài xong rồi bấm Đăng nhập.') }, icon('term'), 'Cài đặt'));
      if (p.needNode) btns.append(el('button', { class: 'linkbtn small', text: 'Cần Node.js trước', onclick: () => window.vp.openUrl('https://nodejs.org/') }));
    } else if (st) {
      if (p.login) btns.append(loginBtn = el('button', { class: 'btn small' + (st.loggedIn === true || st.ineligible ? '' : ' primary'), onclick: () => run(p.login, 'Làm theo hướng dẫn trong cửa sổ đó (thường mở trình duyệt để đăng nhập).') }, icon('key'), st.loggedIn === true ? 'Đăng nhập lại' : 'Đăng nhập'));
      if (p.pull) btns.append(el('button', { class: 'btn small', onclick: () => run(p.pull, 'Tải xong bấm Kiểm tra lại.') }, icon('term'), 'Tải model qwen2.5'));
      const test = el('button', { class: 'btn small' }, icon('bolt'), 'Thử');
      test.addEventListener('click', async () => {
        test.disabled = true; msg.className = 'acc-msg show'; msg.replaceChildren(el('span', { class: 'spin' }), ' Đang gọi thử…');
        const r = await window.vp.testAgent({ id: 'test', name: 'Thử', title: 'Thử', role: '', source: p.src, model: '' });
        test.disabled = false;
        msg.replaceChildren(r.ok ? icon('check', 'ok') : el('span', { text: '✕ ' }), el('span', { text: r.ok ? `Hoạt động tốt (${(r.ms / 1000).toFixed(1)} giây).` : r.text }));
        msg.className = 'acc-msg show ' + (r.ok ? 'ok' : 'bad');
        if (r.ok && p.key === 'antigravity' && S.acc?.antigravity) { S.acc.antigravity.loggedIn = true; markOn(); updateBanner(); renderRoster(); }
        if (!r.ok && p.key === 'gemini' && /Antigravity từ 18\/6\/2026/.test(r.text)) { pill.className = 'pill off'; pill.textContent = 'Google ngừng hỗ trợ tài khoản cá nhân'; if (S.acc?.gemini) { S.acc.gemini.loggedIn = false; S.acc.gemini.ineligible = true; } updateBanner(); renderRoster(); }
      });
      btns.append(test);
      if (st.loggedIn === true || connected(p.src)) btns.append(el('button', { class: 'btn small', title: 'Chọn model hiện trong danh sách (kể cả bản cũ, tự thêm tên model)', onclick: () => openModelPrefs(p.src, p.name, { back: openAccounts }) }, '⚙️ Chọn model'));
      if (connected(p.src)) btns.append(el('button', { class: 'linkbtn small', text: 'Dùng cho cả phòng', onclick: () => applyPreset(p.src) }));
    }
    const models = el('div', { class: 'acc-models' });
    if (st && (st.loggedIn === true || (st.installed && p.key === 'antigravity'))) {
      window.vp.listModels(p.src).then((r) => {
        const list = (r.models || []).filter((m) => m.id && !/ · /.test(m.label)).slice(0, 8); // bỏ tên tắt "· luôn bản mới nhất" cho gọn
        if (list.length) models.replaceChildren(el('small', { text: r.live ? 'Model của tài khoản:' : 'Model dùng được:' }), ...list.map((m) => el('span', { class: 'mtag', title: m.note || '', text: m.label })));
        else if (r.error) models.replaceChildren(el('small', { class: 'bad', text: r.error }));
      });
    }
    const card = el('div', { class: 'acc-card ' + cls, style: `--b:${color}` },
      el('div', { class: 'acc-top' },
        el('span', { class: 'logo', text: p.name.charAt(0) }),
        el('div', { class: 'acc-name' }, el('b', { text: p.name }), el('small', { text: p.sub })),
        pill),
      st && (st.account || st.version) ? el('div', { class: 'acc-info' }, st.account ? el('span', { text: st.account }) : null, st.version ? el('span', { class: 'dim', text: st.version }) : null) : null,
      st && st.note ? el('div', { class: 'acc-info dim' + (st.ineligible ? ' warn' : ''), text: st.note }) : null,
      models, btns, msg);
    return card;
  }

  function simiCard(st) {
    const msg = el('div', { class: 'acc-msg' });
    const chk = (ok, label, hint) => el('li', { class: ok ? 'ok' : ok === null ? 'wait' : 'bad' }, el('span', { text: ok ? '✓' : ok === null ? '…' : '✕' }), el('b', { text: label }), hint ? el('small', { text: hint }) : null);
    const ready = st && st.loggedIn;
    // cài / cập nhật ngay trong app: nhập key trên giao diện, không mở PowerShell, không hiện dòng lệnh
    const install = el('button', { class: 'btn small' + (ready ? '' : ' primary') }, icon(ready ? 'refresh' : 'bolt'), ready ? 'Cập nhật SIMI' : 'Cài đặt SIMI');
    install.addEventListener('click', () => window.VPSimiSetup.open({ mode: ready ? 'update' : 'install', status: st }));
    const btns = el('div', { class: 'acc-btns' }, install);
    if (st && !st.desktop) btns.append(el('button', { class: 'btn small', title: 'App Codex chính thức của OpenAI (Microsoft Store) – giúp AI điều khiển máy tính', onclick: async () => { await window.vp.simi.getCodex().catch(() => {}); toast('Đã mở trang tải Codex'); } }, '⬇️ Tải Codex'));
    if (ready) {
      const test = el('button', { class: 'btn small' }, icon('bolt'), 'Thử');
      test.addEventListener('click', async () => {
        test.disabled = true; msg.className = 'acc-msg show'; msg.replaceChildren(el('span', { class: 'spin' }), ' Đang gọi thử qua Gateway…');
        const r = await window.vp.testAgent({ id: 'test', name: 'Thử', title: 'Thử', role: '', source: 'simi', model: '' });
        test.disabled = false;
        msg.replaceChildren(r.ok ? icon('check', 'ok') : el('span', { text: '✕ ' }), el('span', { text: r.ok ? `Hoạt động tốt (${(r.ms / 1000).toFixed(1)} giây).` : r.text }));
        msg.className = 'acc-msg show ' + (r.ok ? 'ok' : 'bad');
      });
      btns.append(test,
        el('button', { class: 'btn small', onclick: () => { closeModal(); window.VPChat && window.VPChat.setView('chat'); } }, '💬 Mở Chat'),
        el('button', { class: 'linkbtn small', text: 'Dùng cho cả phòng', onclick: () => applyPreset('simi') }));
    }
    const models = el('div', { class: 'acc-models' });
    if (ready) window.vp.listModels('simi').then((r) => {
      const list = (r.models || []).filter((m) => m.id).slice(0, 10);
      if (list.length) models.replaceChildren(el('small', { text: r.live ? 'Model trong Combo của bạn:' : 'Model (lưu trên máy):' }), ...list.map((m) => el('span', { class: 'mtag', title: m.note || m.id, text: m.label })));
      else if (r.error) models.replaceChildren(el('small', { class: 'bad', text: r.error }));
    });
    let status = 'Đang kiểm tra…', cls = 'wait';
    if (st) { if (ready) { status = 'Đã kết nối'; cls = 'on'; } else if (st.configured) { status = 'Thiếu key team'; cls = 'mid'; } else { status = 'Chưa cài'; cls = 'off'; } }
    return el('div', { class: 'acc-card simi ' + cls, style: '--b:#0a78f0' },
      el('div', { class: 'acc-top' },
        el('span', { class: 'logo simi' }, el('img', { src: 'brand/simi.png', alt: 'SIMI' })),
        el('div', { class: 'acc-name' }, el('b', { text: 'SIMI Gateway' }), el('small', { text: 'Một key team → mọi model trong Combo + skill SIMI (ảnh, video, PDF, web, trình duyệt…)' })),
        el('span', { class: 'pill ' + cls, text: status })),
      st ? el('ul', { class: 'simi-checks' },
        chk(st.codex && st.codex.installed, 'Codex', st.codex && st.codex.installed ? st.codex.version : 'bộ cài SIMI sẽ tự cài'),
        chk(st.configured, 'Gateway', st.baseUrl ? st.baseUrl.replace(/^https?:\/\//, '') : 'chưa cấu hình'),
        chk(st.hasKey, 'Key team', st.hasKey ? 'đã lưu trên máy' : 'chưa có'),
        chk(st.skills > 0, 'Skill SIMI', `${st.skills} skill`),
        chk(st.browserMcp, 'Trình duyệt', st.browserMcp ? 'MCP đã bật' : 'chưa có')) : null,
      models, btns, msg);
  }

  function keysCard() {
    const rows = [['anthropic', 'Claude (Anthropic)', 'https://console.anthropic.com/settings/keys'], ['openai', 'OpenAI', 'https://platform.openai.com/api-keys'], ['gemini', 'Google Gemini', 'https://aistudio.google.com/apikey']];
    return el('div', { class: 'acc-card keys', style: '--b:#f5b54a' },
      el('div', { class: 'acc-top' }, el('span', { class: 'logo' }, icon('key')), el('div', { class: 'acc-name' }, el('b', { text: 'API key' }), el('small', { text: 'Tính tiền theo lượng dùng · lưu mã hóa trên máy' }))),
      ...rows.map(([k, label, url]) => {
        const inp = el('input', { type: 'password', placeholder: S.secrets[k] ? 'Đã lưu ✓ – nhập để thay' : 'Dán API key…', autocomplete: 'off' });
        const saveB = el('button', { class: 'btn small', text: 'Lưu', onclick: async () => {
          if (!inp.value.trim()) return; S.secrets = await window.vp.setSecret(k, inp.value.trim()); inp.value = ''; inp.placeholder = 'Đã lưu ✓ – nhập để thay'; toast('Đã lưu khóa ' + label); updateBanner(); renderRoster();
        } });
        const clr = el('button', { class: 'btn small ghost', text: 'Xóa', disabled: !S.secrets[k], onclick: async () => { S.secrets = await window.vp.setSecret(k, ''); inp.placeholder = 'Dán API key…'; clr.disabled = true; toast('Đã xóa khóa ' + label); updateBanner(); } });
        return el('div', { class: 'keyrow' }, el('span', { class: 'kl' }, el('i', { class: 'dot' + (S.secrets[k] ? '' : ' off') }), label), inp, saveB, clr, el('button', { class: 'linkbtn small', text: 'Lấy key', onclick: () => window.vp.openUrl(url) }));
      }));
  }

  // ---------------- ĐỘI NGŨ ----------------
  async function applyPreset(src, mix) {
    if (mix) {
      const pick = (list) => list.find((s) => connected(s)) || 'sim';
      const order0 = { manager: ['claude-cli', 'codex-cli', 'antigravity-cli', 'anthropic-api', 'openai-api', 'gemini-api', 'ollama'],
        research: ['antigravity-cli', 'claude-cli', 'codex-cli', 'gemini-api', 'anthropic-api', 'openai-api', 'ollama'],
        writer: ['codex-cli', 'claude-cli', 'antigravity-cli', 'openai-api', 'anthropic-api', 'gemini-api', 'ollama'],
        reviewer: ['claude-cli', 'antigravity-cli', 'codex-cli', 'anthropic-api', 'gemini-api', 'openai-api', 'ollama'] };
      const order = Object.fromEntries(Object.entries(order0).map(([k, v]) => [k, ['simi', ...v]]));
      S.cfg.agents.forEach((a, i) => {
        const role = a.isManager ? 'manager' : a.isReviewer ? 'reviewer' : i % 2 ? 'research' : 'writer';
        a.source = pick(order[role]);
        a.model = a.source === 'claude-cli' ? (a.isManager ? 'opus' : 'sonnet') : '';
      });
    } else {
      S.cfg.agents.forEach((a) => { a.source = src; a.model = src === 'claude-cli' ? (a.isManager ? 'opus' : 'sonnet') : ''; });
    }
    if (await saveCfg()) toast(mix ? 'Đã phối hợp model cho cả phòng' : `Cả phòng dùng ${S.sources[src].short}`);
    if ($('#modalTitle').textContent === 'Đội ngũ') openTeam();
  }

  async function openTeam() {
    if (!S.acc) refreshAccounts().then(() => { if ($('#modalTitle').textContent === 'Đội ngũ') openTeam(); });
    const rows = S.cfg.agents.map((a) => {
      const nm = el('input', { value: a.name, maxlength: 30, class: 'tname' });
      const mp = modelPicker(a.source, a.model, true);
      const src = sourceSelect(a.source, (s) => mp.setSource(s), true);
      const res = el('span', { class: 'tres' });
      const test = el('button', { class: 'btn icon mini', title: 'Thử kết nối' }, icon('bolt'));
      const row = { a, nm, src, mp, res };
      test.addEventListener('click', () => testRow(row, test));
      row.el = el('div', { class: 'trow' },
        el('div', { class: 'tw' }, avatar(a, 34), el('div', {}, nm, el('small', { text: a.title + (a.isManager ? ' ★' : '') + (a.isReviewer ? ' · kiểm tra' : '') }))),
        src, mp.el, el('div', { class: 'tact' }, test, res));
      return row;
    });
    async function testRow(r, btn) {
      btn.disabled = true; r.res.className = 'tres wait'; r.res.textContent = '…';
      const t = await window.vp.testAgent({ ...r.a, source: r.src.value, model: r.mp.value });
      btn.disabled = false; r.res.className = 'tres ' + (t.ok ? 'ok' : 'bad'); r.res.textContent = t.ok ? `✓ ${(t.ms / 1000).toFixed(1)}s` : '✕'; r.res.title = t.text;
    }
    const presets = el('div', { class: 'presets' }, el('span', { class: 'dim', text: 'Áp dụng nhanh:' }),
      ...['simi', 'claude-cli', 'codex-cli', 'antigravity-cli', 'ollama'].map((s) => el('button', { class: 'chip', disabled: connected(s) !== true, title: connected(s) ? '' : 'Chưa kết nối', onclick: () => applyPreset(s) }, el('i', { class: 'dot', style: `background:${BRAND[S.sources[s].brand]}` }), `Cả phòng dùng ${S.sources[s].short}`)),
      el('button', { class: 'chip accent', onclick: () => applyPreset(null, true) }, icon('spark'), 'Phối hợp thông minh'),
      el('button', { class: 'chip', onclick: () => applyPreset('sim') }, 'Tất cả Giả lập'));
    const body = el('div', { class: 'team' },
      el('p', { class: 'lead', text: 'Mỗi người trong phòng dùng một bộ não riêng. Danh sách model được lấy trực tiếp từ tài khoản bạn đã kết nối.' }),
      presets,
      el('div', { class: 'thead' }, el('span', { text: 'Nhân sự' }), el('span', { text: 'Nguồn' }), el('span', { text: 'Model' }), el('span')),
      ...rows.map((r) => r.el));
    const testAll = el('button', { class: 'btn' }, icon('bolt'), 'Thử cả phòng');
    testAll.addEventListener('click', async () => { testAll.disabled = true; for (const r of rows) await testRow(r, r.el.querySelector('.tact .btn')); testAll.disabled = false; });
    const ok = el('button', { class: 'btn primary', text: 'Lưu đội ngũ' });
    ok.addEventListener('click', async () => {
      rows.forEach((r) => { r.a.name = r.nm.value.trim() || r.a.name; r.a.source = r.src.value; r.a.model = r.mp.value; });
      if (await saveCfg()) { closeModal(); toast('Đã lưu đội ngũ'); }
    });
    openModal('Đội ngũ', body, [el('div', { class: 'left' }, el('button', { class: 'linkbtn', text: '← Kết nối tài khoản', onclick: openAccounts })), testAll, ok], 'wide');
  }

  // ---------------- cài đặt ----------------
  function openSettings() {
    const c = S.cfg;
    const outDir = el('input', { value: c.outputDir || '', placeholder: S.outputDir });
    const pick = el('button', { class: 'btn', type: 'button', text: 'Chọn…', onclick: async () => { const d = await window.vp.chooseDir(); if (d) outDir.value = d; } });
    const rounds = el('input', { type: 'number', min: 0, max: 10, value: c.maxRounds });
    const tmo = el('input', { type: 'number', min: 30, max: 3600, value: c.timeoutSec });
    const notify = el('input', { type: 'checkbox', id: 'chkNotify', checked: c.notify !== false });
    const sound = el('input', { type: 'checkbox', id: 'chkSound', checked: c.sound !== false });
    const lobbyOn = el('input', { type: 'checkbox', id: 'chkLobby', checked: c.lobbyEnabled !== false });
    const gfx = el('select', { id: 'selGfx' },
      el('option', { value: 'auto', text: 'Tự động – app tự cân độ nét / bóng đổ theo máy (khuyên dùng)' }),
      el('option', { value: 'light', text: 'Nhẹ – máy yếu, chạy pin: độ nét vừa đủ, tắt bóng đổ, 30 khung hình/giây' }),
      el('option', { value: 'high', text: 'Đẹp – máy mạnh (card rời): nét tối đa, bóng đổ mượt, không tự hạ' }));
    gfx.value = c.gfx || (c.lobbyLight === true ? 'light' : 'auto');
    const CLIS = [['claude', 'Claude Code'], ['codex', 'Codex'], ['antigravity', 'Antigravity (agy)'], ['gemini', 'Gemini CLI']];
    const cli = {};
    for (const [k] of CLIS) { const v = c.cli[k] || { cmd: k === 'antigravity' ? 'agy' : k, extraArgs: '' }; cli[k] = { cmd: el('input', { value: v.cmd }), extra: el('input', { value: v.extraArgs || '', placeholder: '(không bắt buộc)' }) }; }
    const ollama = el('input', { value: c.ollamaUrl });
    const upd = window.VPUpdate ? window.VPUpdate.settingsSection(c) : null;
    const engine = el('select', {}, el('option', { value: 'auto', text: 'Tự động – ưu tiên Codex của ChatGPT Work (Computer Use chạy ổn nhất)' }), el('option', { value: 'cli', text: 'Luôn dùng Codex CLI của bộ cài SIMI' }));
    engine.value = c.chatEngine === 'cli' ? 'cli' : 'auto';
    const pcOn = el('input', { type: 'checkbox', id: 'chkPc', checked: c.computerControl !== false });
    const pcMin = el('input', { type: 'checkbox', id: 'chkPcMin', checked: c.computerMinimize !== false });
    const body = el('div', {},
      el('div', { class: 'section-title', text: 'Chung' }),
      field('Thư mục lưu kết quả', el('div', { style: 'display:flex;gap:8px' }, outDir, pick), S.platform === 'darwin' ? 'Để trống = Documents/VanPhongAI' : 'Để trống = Documents\\VanPhongAI'),
      el('div', { class: 'grid2' },
        field('Số lượt hỏi nhau / sửa bài tối đa mỗi việc', rounds, 'Giới hạn để tránh tốn lượt dùng. 0 = không hỏi, không sửa.'),
        field('Thời gian chờ mỗi lần gọi model (giây)', tmo)),
      el('div', { class: 'field row' }, notify, el('label', { for: 'chkNotify', text: 'Thông báo + âm báo khi xong việc' })),
      el('div', { class: 'field row' }, sound, el('label', { for: 'chkSound', text: 'Âm thanh dễ thương khi bấm, tương tác, vuốt mèo' })),
      el('div', { class: 'field row' }, lobbyOn, el('label', { for: 'chkLobby', text: 'Vào Sảnh online khi mở app (đồng nghiệp thấy bạn đang dùng AI, nhắn tin được)' })),
      field('Chất lượng đồ hoạ Sảnh 3D', gfx, 'Máy đang dùng app khác thì Sảnh tự giảm nhịp vẽ, thu nhỏ cửa sổ thì dừng vẽ.'),
      el('div', { class: 'field row' }, pcOn, el('label', { for: 'chkPc', text: 'Cho AI trong tab Chat điều khiển chuột & bàn phím (luôn hỏi bạn cho phép trước)' })),
      el('div', { class: 'field row' }, pcMin, el('label', { for: 'chkPcMin', text: 'Thu nhỏ Văn Phòng AI khi AI đang điều khiển máy' })),
      upd ? el('div', { class: 'section-title', text: 'Cập nhật' }) : null, upd ? upd.node : null,
      el('div', { class: 'section-title', text: 'Tài khoản & API key' }),
      el('button', { class: 'btn', onclick: openAccounts }, icon('plug'), 'Mở trang Kết nối'),
      el('details', { class: 'adv' }, el('summary', { text: 'Nâng cao: động cơ Chat, lệnh CLI và địa chỉ Ollama' }),
        field('Động cơ của tab Chat', engine, 'Codex của app ChatGPT / Codex Desktop có sẵn plugin Computer Use; không có app đó thì tự dùng Codex CLI.'),
        ...CLIS.map(([k, label]) => el('div', { class: 'grid2' }, field(`Lệnh ${label}`, cli[k].cmd), field('Tham số thêm', cli[k].extra))),
        field('Địa chỉ Ollama', ollama)));
    const ok = el('button', { class: 'btn primary', text: 'Lưu cài đặt' });
    ok.addEventListener('click', async () => {
      c.outputDir = outDir.value.trim();
      c.maxRounds = Math.max(0, Math.min(10, parseInt(rounds.value, 10) || 0));
      c.timeoutSec = Math.max(30, Math.min(3600, parseInt(tmo.value, 10) || 300));
      c.notify = notify.checked; c.sound = sound.checked;
      if ((c.lobbyEnabled !== false) !== lobbyOn.checked) window.vp.lobby.connect(lobbyOn.checked);
      c.lobbyEnabled = lobbyOn.checked;
      c.gfx = gfx.value; c.lobbyLight = c.gfx === 'light';
      if (window.VPLobby && window.VPLobby.setQuality) window.VPLobby.setQuality(c.gfx);
      for (const [k] of CLIS) c.cli[k] = { cmd: cli[k].cmd.value.trim() || (k === 'antigravity' ? 'agy' : k), extraArgs: cli[k].extra.value.trim() };
      c.ollamaUrl = ollama.value.trim() || 'http://127.0.0.1:11434';
      c.chatEngine = engine.value;
      c.computerControl = pcOn.checked; c.computerMinimize = pcMin.checked;
      if (upd) upd.apply(c);
      if (await saveCfg()) { closeModal(); toast('Đã lưu cài đặt'); loadTray(); }
    });
    openModal('Cài đặt', body, [el('div', { class: 'left' }, credit()), ok]);
  }

  async function addDesk() {
    const used = new Set(S.cfg.agents.map((a) => a.slot));
    const slot = [0, 1, 2, 3, 4, 5].find((s) => !used.has(s));
    if (slot == null) return null;
    let n = 1; while (S.cfg.agents.some((a) => a.id === 'nhan_vien_' + n)) n++;
    const palette = ['#c4553f', '#3f8fb0', '#8a9a3a', '#4a3592', '#d08a2c', '#4f6fd0'];
    const names = ['An', 'Bình', 'Châu', 'Dũng', 'Giang', 'Khoa'];
    const a = { id: 'nhan_vien_' + n, name: names[n % names.length], title: 'Trợ lý', role: 'Hỗ trợ các công việc chung khi được giao.', source: 'sim', model: '', hair: '#3a2a1a', shirt: palette[n % palette.length], slot };
    S.cfg.agents.push(a);
    return (await saveCfg()) ? a.id : null;
  }

  // dòng tác giả nhỏ, nhạt: "Văn Phòng AI 0.9.14 · Tạo bởi LTN · © 2026 LTN" (màn chào, Cài đặt; thanh trên khi rê chuột vào logo)
  const CREDIT = 'Tạo bởi LTN · © 2026 LTN';
  function credit() { return el('small', { class: 'credit', text: `Văn Phòng AI${S.version ? ' ' + S.version : ''} · ${CREDIT}` }); }

  // ---------------- chào mừng lần đầu ----------------
  function openWelcome() {
    const feat = (ic, t, d) => el('div', { class: 'feat' }, icon(ic), el('div', {}, el('b', { text: t }), el('small', { text: d })));
    const body = el('div', { class: 'welcome' },
      el('img', { src: 'icon.png', class: 'wicon', alt: '' }),
      el('h3', { text: 'Chào mừng đến Văn Phòng AI' }),
      el('div', { class: 'wfaces' }, S.cfg.agents.slice(0, 6).map((a) => avatar(a, 46))),
      el('p', { class: 'lead', text: 'Giao việc cho cả một phòng AI: mỗi người một model, tự chia việc, hỏi nhau, kiểm tra rồi nộp kết quả.' }),
      el('div', { class: 'feats' },
        feat('plug', '1. Cài SIMI AI', 'Dán key team IT gửi – app tự cài Codex & mọi thứ cần thiết, không cần PowerShell.'),
        feat('users', '2. Gán model cho đội', 'Chọn từ danh sách model thật của tài khoản.'),
        feat('send', '3. Giao việc', 'Gõ việc, bấm Giao ngay và xem cả phòng làm.')),
      el('div', { class: 'wbrands' }, ['uniq', 'crenot', 'simi'].map((k) => el('span', { class: 'bl ' + k }, el('img', { src: `brand/${k}.png`, alt: k })))),
      credit());
    const close = () => { store.set('vp.welcomed', 1); closeModal(); };
    openModal('Bắt đầu', body, [
      el('div', { class: 'left' }, el('button', { class: 'linkbtn', text: 'Xem thử chế độ Giả lập trước', onclick: close })),
      el('button', { class: 'btn', onclick: () => { store.set('vp.welcomed', 1); openAccounts(); } }, icon('plug'), 'Tài khoản khác'),
      el('button', { class: 'btn primary', onclick: () => { store.set('vp.welcomed', 1); window.VPSimiSetup.open({ mode: 'install' }); } }, icon('bolt'), 'Cài đặt SIMI AI'),
    ]);
  }

  // ---------------- sự kiện từ bộ điều phối ----------------
  function onEvent(e) {
    if (e.type === 'win') { window.VP_WIN = { focused: !!e.focused, minimized: !!e.minimized }; return; }
    if (e.type === 'say') {
      office.enqueue(e);
      if (e.from === 'boss' && e.kind === 'assign') {
        const t = S.tasks.find((x) => x.id === e.taskId);
        addLog({ sep: true, title: t ? t.title : 'Việc mới', time: nowHM() });
      }
      addLog({ from: e.from, to: e.to, kind: e.kind, text: e.text, time: nowHM() });
      if (e.kind === 'done' && e.from !== 'boss' && agentById(e.from)) { stat(e.from).done++; bump(e.from, 0, 4); pushStats(); }
    } else if (e.type === 'agent') {
      office.setState(e.id, e.state, e.note);
      S.agentNote[e.id] = { state: e.state, note: e.note };
      if (e.state === 'working') { bump(e.id, -5, -1); pushStats(); } else renderRoster();
    } else if (e.type === 'stage') {
      S.stage[e.id] = e.stage; renderCards(); updateStatus();
    } else if (e.type === 'task') {
      let t = S.tasks.find((x) => x.id === e.id);
      if (!t) { t = { id: e.id, title: '(việc)', text: '', status: e.status }; S.tasks.push(t); }
      t.status = e.status;
      if (e.note) t.note = e.note;
      if (e.file) t.file = e.file;
      if (e.preview) t.preview = e.preview;
      if (e.status === 'running') { S.runningId = e.id; S.runStart = Date.now(); }
      if (e.status !== 'running' && S.runningId === e.id) S.runningId = null;
      if (e.status === 'done') { t.doneAt = nowHM(); delete S.stage[e.id]; }
      if (e.status === 'error') { toast('Lỗi: ' + (e.note || ''), true); }
      if (e.status !== 'running') { for (const k of Object.keys(S.agentNote)) S.agentNote[k] = { state: 'idle', note: '' }; renderRoster(); }
      save(); renderCards(); updateStatus();
    } else if (e.type === 'result') {
      toast(e.file && !/\.md$/i.test(e.file) ? `🎉 Xong: ${e.title} → ${fileEmoji(e.file)} ${baseName(e.file)}` : `🎉 Xong: ${e.title}`);
      chime();
      S.cfg.agents.forEach((a) => bump(a.id, 0, 3)); pushStats();
      const t = S.tasks.find((x) => x.id === e.taskId);
      office.celebrate && office.celebrate(t ? t.targetId : null);
      loadTray();
    } else if (e.type === 'log') {
      addLog({ sys: true, level: e.level, text: e.text, time: nowHM() });
    } else if (e.type === 'browser') {
      if (window.VPBrowser) window.VPBrowser.onEvent(e);
    } else if (e.type === 'toast') {
      toast(e.text, !!e.error);
    } else if (e.type === 'chat' && e.message && agentById(e.message.agentId)) {
      // tab Chat → văn phòng: người phụ trách ngồi vào bàn làm việc, xong thì báo trong nhật ký
      const id = e.message.agentId;
      if (e.ev === 'start') {
        onEvent({ type: 'agent', id, state: 'working', note: '💬 Đang chat với sếp' });
        addLog({ from: 'boss', to: id, kind: 'assign', text: '💬 ' + ((e.user && e.user.text) || 'Gửi ảnh / file').slice(0, 140), time: nowHM() });
      } else if (e.ev === 'done') {
        onEvent({ type: 'agent', id, state: 'idle', note: '' });
        if (!e.message.error) {
          stat(id).done++; bump(id, 0, 3); pushStats();
          const txt = (e.message.blocks || []).filter((b) => b.kind === 'text').map((b) => b.text).join(' ').replace(/\s+/g, ' ');
          addLog({ from: id, to: 'boss', kind: 'done', text: '💬 ' + (txt.slice(0, 140) || 'Đã trả lời trong Chat'), time: nowHM() });
        }
      }
    }
  }

  function updateStatus() {
    const st = $('#status');
    const t = S.runningId && S.tasks.find((x) => x.id === S.runningId);
    st.classList.toggle('busy', !!t);
    const q = S.tasks.filter((x) => x.status === 'queued').length;
    $('#statusText').textContent = t ? `${t.title} · ${fmtElapsed(Date.now() - S.runStart)}${q ? ` · +${q} chờ` : ''}` : 'Đang rảnh';
    const ss = $('#statusStages');
    if (t) {
      const who = agentById(t.targetId); const steps = who && who.isManager ? STAGES_TEAM : STAGES_SOLO;
      const idx = steps.findIndex(([k]) => k === S.stage[t.id]);
      ss.replaceChildren(...steps.map(([, label], i) => el('span', { class: i < idx ? 'done' : i === idx ? 'on' : '', title: label })));
      ss.classList.remove('hidden');
      const run = $('#listRun .card.running .cm');
      if (run && run.childNodes[1]) run.childNodes[1].textContent = ` ${who ? who.name : ''} · ${fmtElapsed(Date.now() - S.runStart)}`;
    } else ss.classList.add('hidden');
  }
  setInterval(updateStatus, 1000);

  // ---------------- văn phòng 3D / 2D ----------------
  function createOffice(mode) {
    if (office) { office.destroy(); office = null; }
    const host = $('#office');
    host.replaceChildren();
    const opts = {
      onDeskClick: openDesk, onDrop: (cardId, agentId) => assignCard(cardId, agentId), onRename: renameAgent,
      onPersonClick: openInteract,
      onStat: (id, k) => { if (k === 'coffee') { bump(id, 38, 5); pushStats(); sfx('sparkle'); } },
      onCat: () => sfx('meow'),
    };
    let used = mode;
    if (mode === '3d' && window.Office3D) {
      try { office = new window.Office3D(host, opts); }
      catch (e) { console.warn(e); office = null; used = '2d'; toast('Máy không chạy được 3D, chuyển sang 2D', true); }
    }
    if (!office) { used = '2d'; host.replaceChildren(); office = new window.Office2D(host, opts); }
    window.__office = office;
    host.classList.toggle('mode3d', used === '3d');
    document.querySelectorAll('.seg button').forEach((b) => b.classList.toggle('active', b.dataset.view === used));
    $('#viewReset').classList.toggle('hidden', used !== '3d');
    $('#viewHint').classList.toggle('hidden', used !== '3d');
    office.setAgents(S.cfg.agents, S.sources);
    office.setDecor(S.decor);
    $('#btnDecor').classList.toggle('hidden', used !== '3d');
    renderCards();
    loadTray();
    pushStats();
    store.set('vp.view', used);
  }

  async function renameAgent(id, name) {
    const a = agentById(id); if (!a) return;
    a.name = name.slice(0, 30);
    if (await saveCfg()) toast('Đã đổi tên thành ' + a.name);
  }

  // ---------------- khởi động ----------------
  async function init() {
    hydrateIcons();
    applyTheme();
    { const b = document.querySelector('.topbar .brand'); if (b) b.title = 'Văn Phòng AI · Tạo bởi LTN · © 2026 LTN'; }
    const r = await window.vp.getConfig();
    S.cfg = r.config; S.sources = r.sources; S.secrets = r.secrets; S.outputDir = r.outputDir; S.platform = r.platform; S.version = r.version || '';
    renderAssignSelect(); renderTemplates(); renderRoster();
    createOffice(store.get('vp.view', '3d'));
    window.vp.onEvent(onEvent);
    renderCards(); renderAllLog(); loadTray(); updateBanner(); updateStatus();
    refreshAccounts();

    $('#btnGo').addEventListener('click', goNow);
    renderOut();
    for (const id of ['#outFmt', '#outName', '#cardText', '#cardTitle']) $(id).addEventListener('input', renderOut);
    $('#outFmt').addEventListener('change', renderOut);
    $('#outDir').addEventListener('click', (e) => { e.stopPropagation(); outDirMenu(e.currentTarget); });
    $('#btnDraft').addEventListener('click', saveDraft);
    $('#cardText').addEventListener('keydown', (e) => { if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) { e.preventDefault(); goNow(); } });
    $('#btnTplToggle').addEventListener('click', () => { $('#tpls').classList.toggle('open'); $('#btnTplToggle').textContent = $('#tpls').classList.contains('open') ? 'Mẫu việc ▴' : 'Mẫu việc ▾'; });
    $('#btnSettings').addEventListener('click', openSettings);
    $('#btnHelp').addEventListener('click', () => window.VPLobby && window.VPLobby.goNpc());
    document.addEventListener('keydown', (e) => { if (e.key === 'F1' && !e.ctrlKey && !e.altKey && !e.metaKey) { e.preventDefault(); if (window.VPLobby) window.VPLobby.goNpc(); } });
    $('#btnAccounts').addEventListener('click', openAccounts);
    $('#btnTeam').addEventListener('click', openTeam);
    $('#btnFolder').addEventListener('click', () => window.vp.openOutput());
    document.querySelectorAll('.seg button').forEach((b) => b.addEventListener('click', () => createOffice(b.dataset.view)));
    $('#viewReset').addEventListener('click', () => office && office.resetView());
    $('#btnDecor').addEventListener('click', openDecor);
    $('#btnTheme').addEventListener('click', () => { S.theme = S.theme === 'dark' ? 'pastel' : 'dark'; store.set('vp.theme', S.theme); applyTheme(); sfx('click'); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeInteract(); });
    setInterval(() => { S.cfg.agents.forEach((a) => { if ((S.agentNote[a.id] || {}).state !== 'working') bump(a.id, 2, stat(a.id).mood > 62 ? -1 : 1); }); pushStats(); }, 60000);
    document.querySelectorAll('.tab').forEach((b) => b.addEventListener('click', () => {
      document.querySelectorAll('.tab').forEach((x) => x.classList.toggle('active', x === b));
      $('#tab-log').classList.toggle('hidden', b.dataset.tab !== 'log');
      $('#tab-tray').classList.toggle('hidden', b.dataset.tab !== 'tray');
      if (b.dataset.tab === 'tray') loadTray();
    }));
    window.addEventListener('focus', () => { if (!S.accLoading && Date.now() - (S.accAt || 0) > 20000) { S.accAt = Date.now(); refreshAccounts(); } });
    if (!store.get('vp.welcomed', 0)) setTimeout(openWelcome, 400);
    // tiện ích dùng chung cho tab Chat (chat.js)
    window.VP = { el, $, icon, toast, avatar, store, S, sfx, cleanErr, agentById, connected, openAccounts, refreshAccounts, openModal, closeModal, openModelPrefs };
    if (window.VPUpdate) window.VPUpdate.init(window.VP).catch((e) => console.warn('cập nhật', e));
    if (window.VPChat) window.VPChat.init(window.VP).then(() => { if (window.VPBrowser) window.VPBrowser.init(window.VP); }).then(() => { if (window.VPAdmin) window.VPAdmin.init(window.VP); }).then(() => window.VPLobby && window.VPLobby.init(window.VP)).catch((e) => console.warn('chat/sảnh', e));
  }
  init().catch((e) => { document.body.innerHTML = `<pre style="padding:20px;color:#ffb3b3">Lỗi khởi động: ${String(e && e.stack || e)}</pre>`; });
})();
