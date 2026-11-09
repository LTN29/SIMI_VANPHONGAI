// Văn phòng 3D: cùng giao diện lập trình với bản 2D (setAgents, enqueue, setState, setBoard, setTray, destroy).
import * as THREE from 'three';
import { NavGrid } from './nav.js';
import { Cat } from './cat.js';
import { Person } from './person.js';
import { dodgePlates } from './dodge.js';
import { ROOM, SLOTS, DESK, SEAT_DZ, DOOR, POI, OBSTACLES, buildRoom, buildDesk, drawScreen } from './world.js';

const rand = (a, b) => a + Math.random() * (b - a);
const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
function angLerp(a, b, t) { const d = ((b - a + Math.PI) % (2 * Math.PI) + 2 * Math.PI) % (2 * Math.PI) - Math.PI; return a + d * t; }

const CHIT = [
  ['Cà phê không? ☕', 'Ok, chút nữa nhé!'], ['Hôm nay nhiều việc ghê 😅', 'Cố lên nào!'], ['Trời đẹp ghê ha 🌤', 'Đúng rồi!'],
  ['Trưa nay ăn gì? 🍜', 'Phở đi!'], ['Xong việc chưa?', 'Sắp rồi 💪'], ['Nghỉ tay 5 phút nha', '👍'],
];
const SELF = { cooler: ['Uống miếng nước 💧', 'Mát ghê!'], board: ['Xem còn bao nhiêu việc…', 'Ổn áp!'], windowL: ['Ngắm trời xíu 🌤'], windowR: ['Nắng đẹp quá ☀️'], shelf: ['Tìm cuốn sách…', 'Đây rồi 📘'], plant: ['Tưới cây chút 🌱'] };

class Office3D {
  constructor(root, opts) {
    this.root = root; this.opts = opts || {};
    this.people = new Map();   // id -> { agent, person, desk, slot, seat, pos, path, ... }
    this.queue = []; this.busy = false;
    this.flyers = [];
    this.board = { wait: 0, run: 0, done: 0 };
    this.dead = false;

    const canvas = document.createElement('canvas');
    canvas.className = 'office3d-canvas';
    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'high-performance' });
    } catch (e) { throw new Error('WebGL không khả dụng: ' + e.message); }
    if (!renderer.getContext()) throw new Error('WebGL không khả dụng');
    this.renderer = renderer;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.05;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.setClearColor(0x000000, 0);

    this.wrap = document.createElement('div'); this.wrap.className = 'office3d-wrap';
    this.layer = document.createElement('div'); this.layer.className = 'office3d-layer';
    this.wrap.append(canvas, this.layer);
    root.appendChild(this.wrap);
    this.canvas = canvas;

    // cảnh
    const scene = new THREE.Scene(); this.scene = scene;
    scene.fog = null;
    this.hemi = new THREE.HemisphereLight('#fff4e0', '#7a5a44', 0.85); scene.add(this.hemi);
    scene.add(new THREE.AmbientLight('#ffffff', 0.18));
    const sun = new THREE.DirectionalLight('#ffe7c2', 2.1); this.sun = sun;
    sun.position.set(-5, 11, 7); sun.target.position.set(0, 0, 0);
    sun.castShadow = true; sun.shadow.mapSize.set(2048, 2048);
    Object.assign(sun.shadow.camera, { left: -10, right: 10, top: 9, bottom: -9, near: 1, far: 30 });
    sun.shadow.bias = -0.0004; sun.shadow.normalBias = 0.02; sun.shadow.radius = 4;
    scene.add(sun, sun.target);
    const fill = new THREE.DirectionalLight('#cfe0ff', 0.45); fill.position.set(8, 6, -2); scene.add(fill);
    this.world = buildRoom(scene, renderer);

    // camera trực giao kiểu sa bàn
    this.cam = new THREE.OrthographicCamera(-10, 10, 6, -6, 0.1, 100);
    this.view = { az: 0.72, el: 0.66, zoom: 1, target: new THREE.Vector3(0, 0.6, 0.2) };
    // góc nhìn muốn tới: kéo / lăn chuột chỉ đổi goal, camera trượt mượt theo trong vòng lặp vẽ
    this.goal = { az: 0.72, el: 0.66, zoom: 1, target: new THREE.Vector3(0, 0.6, 0.2) };
    this.updateCamera();

    // lưới tìm đường
    this.nav = new NavGrid(ROOM.minX, ROOM.minZ, ROOM.maxX, ROOM.maxZ, 0.2);
    this.nav.blockRect(ROOM.minX, ROOM.minZ, ROOM.maxX, ROOM.minZ + 0.25, 0.15);
    this.nav.blockRect(ROOM.minX, ROOM.minZ, ROOM.minX + 0.25, ROOM.maxZ, 0.15);
    this.nav.blockRect(ROOM.maxX - 0.2, ROOM.minZ, ROOM.maxX, ROOM.maxZ, 0.15);
    this.nav.blockRect(ROOM.minX, ROOM.maxZ - 0.2, ROOM.maxX, ROOM.maxZ, 0.15);
    for (const o of OBSTACLES) this.nav.blockRect(...o);
    for (const s of SLOTS) {
      this.nav.blockRect(s.x - DESK.w / 2, s.z - DESK.d / 2, s.x + DESK.w / 2, s.z + DESK.d / 2);
      this.nav.blockRect(s.x - 0.28, s.z + SEAT_DZ - 0.28, s.x + 0.28, s.z + SEAT_DZ + 0.28, 0.18);
    }

    this.cat = new Cat(scene, this.nav);
    this.confetti = [];
    this.emotes = new Set();
    this.applyDaylight();
    this.dayT = setInterval(() => this.applyDaylight(), 30000);

    this.raycaster = new THREE.Raycaster();
    this.ndc = new THREE.Vector2();
    this.tmpV = new THREE.Vector3();
    this.bindInput();
    this.ro = new ResizeObserver(() => this.resize()); this.ro.observe(root);
    this.resize();
    this.clock = new THREE.Clock();
    const loop = () => { if (this.dead) return; this.raf = requestAnimationFrame(loop); if (!this.paused) this.frame(); };
    loop();
  }

  // ---------------- camera & input ----------------
  updateCamera() {
    const { az, el, zoom, target } = this.view;
    const r = 30;
    this.cam.position.set(target.x + Math.sin(az) * Math.cos(el) * r, target.y + Math.sin(el) * r, target.z + Math.cos(az) * Math.cos(el) * r);
    this.cam.lookAt(target);
    const w = this.wrap.clientWidth || 800, h = this.wrap.clientHeight || 500;
    const aspect = w / h;
    const vh = Math.max(8.4, 15.6 / aspect) / zoom;
    this.cam.left = -vh * aspect / 2; this.cam.right = vh * aspect / 2; this.cam.top = vh / 2; this.cam.bottom = -vh / 2;
    this.cam.updateProjectionMatrix();
  }

  resetView() { this.goal = { az: 0.72, el: 0.66, zoom: 1, target: new THREE.Vector3(0, 0.6, 0.2) }; }

  resize() {
    const r = this.root.getBoundingClientRect();
    const w = Math.max(200, Math.floor(r.width)), h = Math.max(200, Math.floor(r.height));
    this.renderer.setSize(w, h, false);
    this.canvas.style.width = w + 'px'; this.canvas.style.height = h + 'px';
    this.wrap.style.width = w + 'px'; this.wrap.style.height = h + 'px';
    this.updateCamera();
  }

  pickDesk(clientX, clientY) {
    const r = this.canvas.getBoundingClientRect();
    this.ndc.set(((clientX - r.left) / r.width) * 2 - 1, -((clientY - r.top) / r.height) * 2 + 1);
    this.raycaster.setFromCamera(this.ndc, this.cam);
    const hits = this.raycaster.intersectObjects([...this.people.values()].map((p) => p.desk.hit), false);
    if (!hits.length) return null;
    return [...this.people.values()].find((p) => p.desk.hit === hits[0].object) || null;
  }

  // bấm trúng nhân vật / mèo / bàn
  pickAny(clientX, clientY) {
    const r = this.canvas.getBoundingClientRect();
    this.ndc.set(((clientX - r.left) / r.width) * 2 - 1, -((clientY - r.top) / r.height) * 2 + 1);
    this.raycaster.setFromCamera(this.ndc, this.cam);
    const objs = [this.cat.root, ...[...this.people.values()].map((p) => p.person.root)];
    const hits = this.raycaster.intersectObjects(objs, true);
    for (const h of hits) {
      let o = h.object;
      while (o && o.parent && o.parent !== this.scene) o = o.parent;
      if (o === this.cat.root) return { cat: true };
      const p = [...this.people.values()].find((q) => q.person.root === o);
      if (p) return { p };
    }
    const d = this.pickDesk(clientX, clientY);
    return d ? { p: d } : null;
  }

  setHover(p, mode) {
    for (const q of this.people.values()) {
      const m = q.desk.ring.material;
      if (q === p) { m.color.set(mode === 'drop' ? '#2f8cf0' : '#ffffff'); m.opacity = mode === 'drop' ? 0.8 : 0.4; }
      else if (q.state === 'error') { m.color.set('#ef6b6b'); m.opacity = 0.55; }
      else if (q.state === 'working') { m.color.set('#7cc4f5'); m.opacity = 0.35; }
      else m.opacity = 0;
    }
  }

  bindInput() {
    const c = this.canvas;
    let down = null;
    c.addEventListener('contextmenu', (e) => e.preventDefault());
    c.addEventListener('pointerdown', (e) => {
      down = { x: e.clientX, y: e.clientY, az: this.goal.az, el: this.goal.el, t: this.goal.target.clone(), pan: e.button === 2 || e.shiftKey, moved: false };
      c.setPointerCapture(e.pointerId);
    });
    c.addEventListener('pointermove', (e) => {
      if (down) {
        const dx = e.clientX - down.x, dy = e.clientY - down.y;
        if (Math.hypot(dx, dy) > 4) down.moved = true;
        if (!down.moved) return;
        if (down.pan) {
          const s = (this.cam.right - this.cam.left) / this.canvas.clientWidth;
          const right = new THREE.Vector3(Math.cos(this.view.az), 0, -Math.sin(this.view.az));
          const fwd = new THREE.Vector3(Math.sin(this.view.az), 0, Math.cos(this.view.az));
          const t = down.t.clone().addScaledVector(right, -dx * s).addScaledVector(fwd, -dy * s * 1.4);
          t.x = Math.max(-6, Math.min(6, t.x)); t.z = Math.max(-4, Math.min(4.5, t.z));
          this.goal.target.copy(t);
        } else {
          this.goal.az = Math.max(0.08, Math.min(1.5, down.az - dx * 0.005));
          this.goal.el = Math.max(0.32, Math.min(1.25, down.el + dy * 0.0035));
        }
        c.style.cursor = 'grabbing';
        return;
      }
      // dò nhân vật dưới chuột tối đa ~12 lần/giây
      const x = e.clientX, y = e.clientY;
      const pick = () => { this.hoverAt = performance.now(); const h = this.pickAny(x, y); this.setHover(h && h.p, 'hover'); c.style.cursor = h ? 'pointer' : 'grab'; };
      clearTimeout(this.hoverTimer);
      if (performance.now() - (this.hoverAt || 0) > 80) pick(); else this.hoverTimer = setTimeout(pick, 90);
    });
    c.addEventListener('pointerup', (e) => {
      if (down && !down.moved) {
        const h = this.pickAny(e.clientX, e.clientY);
        if (h && h.cat) this.petCat();
        else if (h && h.p) {
          if (this.opts.onPersonClick) this.opts.onPersonClick(h.p.agent.id, e.clientX, e.clientY);
          else if (this.opts.onDeskClick) this.opts.onDeskClick(h.p.agent.id);
        }
      }
      down = null; c.style.cursor = 'grab';
    });
    c.addEventListener('pointerleave', () => { if (!down) this.setHover(null); });
    c.addEventListener('dblclick', (e) => { if (!this.pickAny(e.clientX, e.clientY)) this.resetView(); });
    c.addEventListener('wheel', (e) => {
      e.preventDefault();
      this.goal.zoom = Math.max(0.75, Math.min(2.6, this.goal.zoom * Math.exp(-Math.max(-240, Math.min(240, e.deltaY)) * 0.0014)));
    }, { passive: false });
    c.addEventListener('dragover', (e) => {
      e.preventDefault();
      const p = this.pickDesk(e.clientX, e.clientY);
      this.setHover(p, 'drop');
      this.dragTarget = p;
    });
    c.addEventListener('dragleave', () => { this.setHover(null); this.dragTarget = null; });
    c.addEventListener('drop', (e) => {
      e.preventDefault();
      const p = this.pickDesk(e.clientX, e.clientY) || this.dragTarget;
      this.setHover(null);
      const id = e.dataTransfer.getData('text/vp-card');
      if (p && id && this.opts.onDrop) this.opts.onDrop(id, p.agent.id);
    });
  }

  // ---------------- nhân sự ----------------
  setAgents(agents, sources) {
    this.sources = sources || this.sources;
    const keep = new Set();
    agents.forEach((a, i) => {
      const slotIdx = a.slot != null && SLOTS[a.slot] ? a.slot : i % SLOTS.length;
      const slot = SLOTS[slotIdx];
      let p = this.people.get(a.id);
      const sig = JSON.stringify([a.shirt, a.hair, a.skin, a.hairStyle, a.isManager, a.isReviewer, a.source, a.model, slotIdx]);
      if (p && p.sig !== sig) {
        // đổi ngoại hình / chỗ ngồi → dựng lại
        this.scene.remove(p.person.root); this.scene.remove(p.desk.group); p.dom.forEach((n) => n.remove());
        this.people.delete(a.id); p = null;
      }
      if (!p) {
        const desk = buildDesk(this.scene, slot, a);
        const person = new Person(a, i);
        const seat = { x: slot.x, z: slot.z + SEAT_DZ };
        person.root.position.set(seat.x, 0, seat.z);
        this.scene.add(person.root);
        p = { agent: a, person, desk, slot, seat, pos: { ...seat }, path: [], speed: 1.6, seated: true, facing: 0, faceTo: null, state: 'idle', note: '',
          nextIdle: performance.now() / 1000 + rand(6, 22), activity: null, locks: 0, sig, dom: [] };
        p.person.root.traverse((o) => { if (o.isMesh) o.castShadow = true; });
        this.people.set(a.id, p);
        this.makeDom(p);
      }
      p.agent = a; p.person.agent = a;
      this.updatePlate(p);
      keep.add(a.id);
    });
    for (const [id, p] of [...this.people]) if (!keep.has(id)) {
      this.scene.remove(p.person.root); this.scene.remove(p.desk.group); p.dom.forEach((n) => n.remove()); this.people.delete(id);
    }
  }

  makeDom(p) {
    const plate = document.createElement('div');
    plate.className = 'plate3d';
    plate.innerHTML = '<span class="pl-row"><span class="pl-crown">👑</span><span class="pl-name"></span><span class="pl-mood"></span><i class="pl-dots"><b></b><b></b><b></b></i><i class="pl-err">!</i></span><span class="pl-sub"><span class="pl-title"></span><span class="pl-src"></span></span><span class="pl-energy"><i style="width:100%"></i></span>';
    plate.title = 'Bấm: tương tác · Bấm đúp vào tên: đổi tên';
    plate.addEventListener('click', (e) => {
      if (e.detail !== 1) return;
      const r = plate.getBoundingClientRect();
      plate._clickT = setTimeout(() => {
        if (plate._editing) return;
        if (this.opts.onPersonClick) this.opts.onPersonClick(p.agent.id, r.left + r.width / 2, r.bottom);
        else if (this.opts.onDeskClick) this.opts.onDeskClick(p.agent.id);
      }, 260);
    });
    plate.addEventListener('dblclick', (e) => { e.stopPropagation(); clearTimeout(plate._clickT); this.inlineRename(p, plate); });
    plate.addEventListener('dragover', (e) => { e.preventDefault(); this.setHover(p, 'drop'); });
    plate.addEventListener('drop', (e) => { e.preventDefault(); this.setHover(null); const id = e.dataTransfer.getData('text/vp-card'); if (id && this.opts.onDrop) this.opts.onDrop(id, p.agent.id); });
    this.layer.append(plate);
    p.plate = plate; p.dom = [plate];
  }

  inlineRename(p, plate) {
    if (plate._editing) return;
    plate._editing = true;
    const nameEl = plate.querySelector('.pl-name');
    const input = document.createElement('input');
    input.className = 'rename3d'; input.value = p.agent.name; input.maxLength = 30;
    nameEl.replaceWith(input); input.focus(); input.select();
    const done = (ok) => {
      if (!plate._editing) return; plate._editing = false;
      input.replaceWith(nameEl);
      const v = input.value.trim();
      if (ok && v && v !== p.agent.name && this.opts.onRename) this.opts.onRename(p.agent.id, v);
    };
    input.addEventListener('keydown', (e) => { if (e.key === 'Enter') done(true); if (e.key === 'Escape') done(false); e.stopPropagation(); });
    input.addEventListener('blur', () => done(true));
    input.addEventListener('click', (e) => e.stopPropagation());
  }

  updatePlate(p) {
    const a = p.agent;
    p.plate.querySelector('.pl-name').textContent = a.name;
    p.plate.querySelector('.pl-title').textContent = (a.isManager ? '★ ' : '') + a.title;
    const src = p.plate.querySelector('.pl-src');
    src.className = 'pl-src src-' + (a.source || 'sim').split('-')[0];
    src.textContent = window.shortSource ? window.shortSource(a.source, a.model) : a.source;
    p.plate.title = `${a.name} – ${a.title}${a.model ? '\n' + a.model : ''}\nBấm: tương tác · Bấm đúp vào tên: đổi tên`;
    p.plateH = 0;
  }

  setBoard(b) { this.board = { ...this.board, ...b }; this.world.drawBoard(this.board); }

  // chỉ số dễ thương: năng lượng, tâm trạng, vương miện
  setStats(id, st) {
    const p = this.people.get(id); if (!p) return;
    p.energy = st.energy;
    p.plate.classList.toggle('crowned', !!st.crown);
    p.plate.querySelector('.pl-mood').textContent = st.emoji || '';
    const bar = p.plate.querySelector('.pl-energy');
    bar.classList.toggle('low', st.energy < 30);
    bar.firstChild.style.width = Math.max(4, st.energy) + '%';
    p.plateH = 0;
  }

  setDecor(d) { this.world.setDecor && this.world.setDecor(d); }

  // tương tác khi người dùng bấm vào nhân vật
  async interact(id, action) {
    const p = this.people.get(id); if (!p) return false;
    const busy = p.state === 'working' || p.locks > 0;
    const say = (t, ms = 3000) => this.say(p, t, 'cute', ms);
    if (action === 'wave') {
      p.person.doAction('wave', 2200); this.emote(p, '👋');
      await say(busy ? pick(['Em đang làm nè sếp 💪', 'Dạ, chút em xong ngay ạ!']) : pick(['Dạ sếp gọi em? 😊', 'Chào sếp ạ! 👋', 'Hôm nay sếp khỏe không ạ?', 'Em sẵn sàng nhận việc nè!']));
      return true;
    }
    if (action === 'praise') {
      p.person.doAction('cheer', 2200); this.emote(p, '💖'); setTimeout(() => this.emote(p, '✨'), 350);
      await say(pick(['Hihi cảm ơn sếp! 🥰', 'Em sẽ cố gắng hơn nữa ạ!', 'Sếp khen làm em vui cả ngày 😆']));
      return true;
    }
    if (action === 'dance') {
      if (busy) { this.emote(p, '😅'); await say('Đang làm việc, xíu em nhảy sau nha!'); return false; }
      p.person.doAction('dance', 3200); p.danceUntil = performance.now() / 1000 + 3.2; this.emote(p, '🎵');
      setTimeout(() => this.emote(p, '🎶'), 900);
      await say(pick(['La la la~ 💃', 'Nhạc lên nào! 🕺', 'Tăng ca không bằng tăng vui 😎']), 2600);
      return true;
    }
    if (action === 'coffee') {
      if (busy) { this.emote(p, '☕'); await say('Xong việc em uống liền nha sếp ☕'); return false; }
      if (p.activity) await this.recall(p);
      this.emote(p, '☕');
      say('Dạ em cảm ơn sếp! ☕', 1600);
      await this.runActivity(p, 'coffee');
      return true;
    }
    return false;
  }

  petCat() {
    this.cat.pet();
    const get = () => this.project(this.cat.headWorld(this.tmpV2 || (this.tmpV2 = new THREE.Vector3())));
    this.emoteAt(get, pick(['💕', '💗', '😻']));
    setTimeout(() => this.emoteAt(get, pick(['Meo~', 'Meoww 💕', 'Rừ rừ…'])), 300);
    this.opts.onCat && this.opts.onCat();
  }

  emoteAt(getPos, ch) {
    const e = document.createElement('div');
    e.className = 'emote' + (ch.length > 2 ? ' txt' : ''); e.textContent = ch; e._get = getPos;
    if (ch.length > 2) Object.assign(e.style, { fontSize: '13px', fontWeight: '900', color: '#0656b8', background: '#e8f3ff', border: '2px solid #45a2ff', borderRadius: '12px', padding: '2px 8px' });
    this.layer.appendChild(e); this.emotes.add(e);
    setTimeout(() => { this.emotes.delete(e); e.remove(); }, 1650);
  }
  setTray(n) { this.trayCount = n; this.world.setTray(n); }

  setState(id, state, note) {
    const p = this.people.get(id); if (!p) return;
    p.state = state; p.note = note || '';
    p.desk.state = state === 'working' ? 'working' : state === 'error' ? 'error' : 'idle';
    drawScreen(p.desk, this.t || 0, true);
    p.plate.classList.toggle('working', state === 'working');
    p.plate.classList.toggle('error', state === 'error');
    p.plateH = 0;
    p.plate.title = state === 'error' && note ? 'Lỗi: ' + note : 'Bấm: cấu hình bàn · Bấm đúp: đổi tên';
    if (state === 'working' && !p.seated && !p.locks) this.recall(p);
    this.setHover(null);
  }

  // ---------------- di chuyển ----------------
  move(p, pts, speed) {
    if (p.moveRes) { const r = p.moveRes; p.moveRes = null; r(false); }
    p.path = pts.slice(); p.speed = speed; p.seated = false; p.faceTo = null;
    if (!p.path.length) return Promise.resolve(true);
    return new Promise((res) => { p.moveRes = res; });
  }

  exitPoint(p, towardX) {
    const side = towardX >= p.seat.x ? 1 : -1;
    return { x: p.seat.x + side * 1.2, z: p.seat.z };
  }

  walkTo(p, target, fast) {
    const pts = [];
    let from = { x: p.pos.x, z: p.pos.z };
    if (p.seated || Math.hypot(p.pos.x - p.seat.x, p.pos.z - p.seat.z) < 0.15) {
      const ex = this.exitPoint(p, target.x); pts.push(ex); from = ex;
    }
    pts.push(...this.nav.find(from, target));
    const ok = this.move(p, pts, fast ? 3.4 : 1.7);
    p.faceAfter = target.face || null;
    return ok;
  }

  async walkHome(p, fast) {
    const ex = this.exitPoint(p, p.pos.x);
    const pts = [...this.nav.find(p.pos, ex), { x: p.seat.x, z: p.seat.z }];
    p.faceAfter = null;
    const ok = await this.move(p, pts, fast ? 3.4 : 1.7);
    if (ok) { p.seated = true; }
    return ok;
  }

  async recall(p) {
    if (p.activity) p.activity.abort = true;
    if (!p.seated) await this.walkHome(p, true);
  }

  // ---------------- hoạt cảnh từ bộ điều phối ----------------
  enqueue(ev) { this.queue.push(ev); if (!this.busy) this.runQueue(); }

  async runQueue() {
    this.busy = true;
    while (this.queue.length) {
      const ev = this.queue.shift();
      const fast = this.queue.length >= 3;
      try { await this.scene_(ev, fast); } catch (e) { console.error(e); }
    }
    this.busy = false;
  }

  async scene_(ev, fast) {
    const from = this.people.get(ev.from), to = this.people.get(ev.to);
    const dur = fast ? 1300 : Math.min(4200, 1700 + ev.text.length * 15);
    if (ev.from === 'boss' && to) {
      to.locks++;
      try {
        if (to.activity) await this.recall(to);
        await this.fly(new THREE.Vector3(DOOR.x, 1.6, DOOR.z + 0.3), to.person.headWorld(new THREE.Vector3()).add(new THREE.Vector3(0, 0.3, 0)), fast ? 450 : 1000);
        this.emote(to, '📌');
        await this.say(to, '📩 ' + ev.text, 'assign', dur);
      } finally { to.locks--; }
      return;
    }
    if (!from) return;
    from.locks++;
    try {
      if (from.activity) await this.recall(from);
      if (from.homeP) await from.homeP;
      if (ev.to === 'boss') {
        if (ev.kind === 'done') {
          from.person.carrying = true;
          await this.walkTo(from, POI.tray, fast);
          from.person.doAction('place', 900); await sleep(fast ? 400 : 800);
          this.emote(from, '✅');
          from.person.carrying = false;
          this.world.setTray((this.trayCount || 0) + 1); this.trayCount = (this.trayCount || 0) + 1;
          await this.say(from, ev.text, 'done', fast ? 1000 : 2400);
          from.homeP = this.walkHome(from, fast).then(() => { from.homeP = null; });
        } else {
          if (ev.kind === 'plan') this.emote(from, '💡');
          await this.say(from, ev.text, ev.kind, dur);
        }
        return;
      }
      if (to && to !== from) {
        to.locks++;
        try {
          if (to.activity) await this.recall(to);
          if (to.homeP) await to.homeP;
          const side = from.slot.x <= to.slot.x ? -1 : 1;
          const visit = { x: to.slot.x + side * 0.62, z: to.slot.z + DESK.d / 2 + 0.55, face: { x: to.seat.x, z: to.seat.z } };
          await this.walkTo(from, visit, fast);
          const em = { ask: '❓', answer: '💬', review: /cần sửa/i.test(ev.text) ? '✏️' : '👍', assign: '📋', done: '📦' }[ev.kind];
          if (em) this.emote(from, em);
          await this.say(from, ev.text, ev.kind, dur);
        } finally { to.locks--; }
        from.homeP = this.walkHome(from, fast).then(() => { from.homeP = null; });
      } else {
        await this.say(from, ev.text, ev.kind, dur);
      }
    } finally { from.locks--; }
  }

  fly(a, b, ms) {
    return new Promise((res) => {
      const env = new THREE.Group();
      const body = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.03, 0.24), new THREE.MeshStandardMaterial({ color: '#fffaf0', roughness: 0.8 }));
      const seal = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.01, 12), new THREE.MeshStandardMaterial({ color: '#d9534f' }));
      seal.position.y = 0.02; env.add(body, seal); env.traverse((o) => { o.castShadow = true; });
      this.scene.add(env);
      this.flyers.push({ obj: env, a, b, t0: performance.now(), ms, res });
    });
  }

  say(p, text, kind, ms) {
    return new Promise((res) => {
      const b = document.createElement('div');
      b.className = 'bubble3d k-' + (kind || 'say');
      b.style.zIndex = '5000';
      b.textContent = text.length > 120 ? text.slice(0, 119) + '…' : text;
      b._p = p;
      this.layer.appendChild(b);
      this.bubbles = this.bubbles || new Set(); this.bubbles.add(b);
      p.person.say(Math.min(ms, 2600));
      this.positionBubble(b);
      requestAnimationFrame(() => b.classList.add('show'));
      setTimeout(() => {
        b.classList.remove('show');
        setTimeout(() => { this.bubbles.delete(b); b.remove(); }, 220);
        res();
      }, ms);
    });
  }

  // ---------------- cuộc sống văn phòng khi rảnh ----------------
  idleTick(t) {
    const anyWork = [...this.people.values()].some((q) => q.state === 'working');
    for (const p of this.people.values()) {
      if (p.activity || p.locks || !p.seated || p.state === 'working' || p.homeP) continue;
      if (t < p.nextIdle) continue;
      p.nextIdle = t + (anyWork ? rand(25, 55) : rand(12, 32));
      if (this.queue.length || (anyWork && Math.random() < 0.5)) continue;
      if (p.energy != null && p.energy < 25 && !anyWork) { this.emote(p, '😪'); this.runActivity(p, 'coffee'); continue; }
      const r = Math.random();
      const wandering = [...this.people.values()].filter((q) => q.activity).length;
      if (wandering >= 2 && r >= 0.38) { p.person.doAction(Math.random() < 0.5 ? 'stretch' : 'look', 2600); continue; }
      if (r < 0.22) p.person.doAction('stretch', 2600);
      else if (r < 0.38) p.person.doAction('look', 3000);
      else if (r < 0.62) this.runActivity(p, 'poi');
      else this.runActivity(p, 'chat');
    }
  }

  async runActivity(p, kind) {
    const act = { abort: false }; p.activity = act;
    try {
      if (kind === 'coffee') {
        const ok = await this.walkTo(p, POI.cooler, false);
        if (!ok || act.abort) return;
        p.person.doAction('drink', 2600);
        await this.say(p, pick(['Cà phê ngon quá ☕', 'Nạp năng lượng thôi! ⚡', 'Tỉnh cả người 😆']), 'chat', 2400);
        this.emote(p, '⚡');
        this.opts.onStat && this.opts.onStat(p.agent.id, 'coffee');
        return;
      }
      if (kind === 'chat') {
        const mates = [...this.people.values()].filter((q) => q !== p && q.seated && !q.activity && q.state !== 'working' && !q.locks);
        if (!mates.length) return;
        const q = pick(mates);
        const side = p.slot.x <= q.slot.x ? -1 : 1;
        const ok = await this.walkTo(p, { x: q.slot.x + side * 0.62, z: q.slot.z + DESK.d / 2 + 0.55, face: { x: q.seat.x, z: q.seat.z } }, false);
        if (!ok || act.abort) return;
        const [l1, l2] = pick(CHIT);
        await this.say(p, l1, 'chat', 2200); if (act.abort) return;
        if (q.state !== 'working' && !q.locks) await this.say(q, l2, 'chat', 1800);
      } else {
        const key = pick(Object.keys(SELF));
        const poi = POI[key];
        const ok = await this.walkTo(p, poi, false);
        if (!ok || act.abort) return;
        const lines = SELF[key];
        if (key === 'cooler') { p.person.doAction('drink', 2600); await this.say(p, lines[0], 'chat', 2000); }
        else if (key === 'plant') { p.person.doAction('place', 1800); await this.say(p, lines[0], 'chat', 1900); }
        else { p.person.doAction('look', 2400); await this.say(p, lines[0], 'chat', 2200); }
        if (act.abort) return;
        if (lines[1] && Math.random() < 0.6) await this.say(p, lines[1], 'chat', 1400);
      }
    } finally {
      if (p.activity === act) {
        p.activity = null;
        if (!act.abort && !p.seated) await this.walkHome(p, false);
      }
    }
  }

  // ---------------- vòng lặp ----------------
  frame() {
    const dt = Math.min(0.05, this.clock.getDelta());
    const t = (this.t = (this.t || 0) + dt);
    for (const fn of this.world.animated) fn(t, dt);
    const now = performance.now() / 1000;
    this.idleTick(now);
    this.cat.update(dt, now);
    this.updateConfetti(dt);
    for (const p of this.people.values()) {
      let moving = false;
      if (p.path.length) {
        const tg = p.path[0];
        const dx = tg.x - p.pos.x, dz = tg.z - p.pos.z; const d = Math.hypot(dx, dz);
        const step = p.speed * dt;
        if (d <= step) {
          p.pos.x = tg.x; p.pos.z = tg.z; p.path.shift();
          if (!p.path.length) {
            if (p.faceAfter) p.faceTo = p.faceAfter;
            if (p.moveRes) { const r = p.moveRes; p.moveRes = null; r(true); }
          }
        } else { p.pos.x += dx / d * step; p.pos.z += dz / d * step; }
        if (d > 0.001) p.facing = angLerp(p.facing, Math.atan2(dx, dz), 1 - Math.exp(-dt * 12));
        moving = p.path.length > 0 || d > step;
      } else {
        let want = null;
        if (p.seated) want = 0;
        else if (p.faceTo) want = Math.atan2(p.faceTo.x - p.pos.x, p.faceTo.z - p.pos.z);
        if (want !== null) p.facing = angLerp(p.facing, want, 1 - Math.exp(-dt * 8));
      }
      if (p.danceUntil && now < p.danceUntil && !moving) p.facing += dt * 5;
      p.person.root.position.set(p.pos.x, 0, p.pos.z);
      p.person.root.rotation.y = p.facing;
      p.person.animate(dt, now, { moving, speed: p.speed, seated: p.seated && !p.path.length, typing: p.seated && p.state === 'working' });
      if (p.desk.state === 'working' && Math.floor(t * 10) !== Math.floor((t - dt) * 10)) drawScreen(p.desk, t);
    }
    for (const f of [...this.flyers]) {
      const k = Math.min(1, (performance.now() - f.t0) / f.ms);
      const e = k < 0.5 ? 2 * k * k : 1 - Math.pow(-2 * k + 2, 2) / 2;
      f.obj.position.lerpVectors(f.a, f.b, e); f.obj.position.y += Math.sin(k * Math.PI) * 1.4;
      f.obj.rotation.set(Math.sin(k * 9) * 0.3, k * 6, 0);
      if (k >= 1) { this.scene.remove(f.obj); this.flyers.splice(this.flyers.indexOf(f), 1); f.res(); }
    }
    // camera trượt mượt về góc nhìn muốn tới
    const v = this.view, g = this.goal, k = 1 - Math.exp(-dt * 10);
    if (Math.abs(g.az - v.az) + Math.abs(g.el - v.el) + Math.abs(g.zoom - v.zoom) + v.target.distanceTo(g.target) > 1e-4) {
      v.az += (g.az - v.az) * k; v.el += (g.el - v.el) * k;
      v.zoom *= Math.exp((Math.log(g.zoom) - Math.log(v.zoom)) * k);
      v.target.lerp(g.target, k);
      this.updateCamera();
    }
    this.renderer.render(this.scene, this.cam);
    this.placeDom();
  }

  project(v) {
    const p = v.clone().project(this.cam);
    return { x: (p.x + 1) / 2 * this.canvas.clientWidth, y: (1 - p.y) / 2 * this.canvas.clientHeight };
  }

  positionBubble(b) {
    const p = b._p;
    const s = p.spot || p.anchor || this.project(p.person.headWorld(this.tmpV));
    const top = s.y - (p.plateH || 34) - 10;
    const W = this.canvas.clientWidth;
    const x = Math.max(130, Math.min(W - 130, s.x));
    b.style.transform = `translate(${x}px, ${top}px) translate(-50%, -100%)`;
    b.style.setProperty('--tail', (s.x - x) + 'px');
  }

  placeDom() {
    const list = [];
    for (const p of this.people.values()) {
      const hw = p.person.headWorld(this.tmpV); hw.y += 0.12;
      p.anchor = this.project(hw);
      if (!p.plateH) { p.plateH = p.plate.offsetHeight || 34; p.plateW = p.plate.offsetWidth || 90; }
      list.push(p);
    }
    // bảng tên không chồng lên nhau: người gần camera (thấp hơn trên màn hình) giữ chỗ, người sau né lên trên / sang bên
    const placed = dodgePlates(list.map((p) => ({ p, x: p.anchor.x, y: p.anchor.y, w: p.plateW, h: p.plateH, prev: p.dodge })));
    for (const { p, x, y } of placed) {
      p.dodge = { x: x - p.anchor.x, y: y - p.anchor.y };
      p.spot = { x, y };
      const tx = Math.round(x * 2) / 2, ty = Math.round(y * 2) / 2;
      const dx = Math.round(p.anchor.x - tx), dy = Math.round(p.anchor.y - ty);
      if (tx !== p.tx || ty !== p.ty || dx !== p.ldx || dy !== p.ldy) { // chỉ ghi style khi thật sự dịch chuyển
        p.tx = tx; p.ty = ty; p.ldx = dx; p.ldy = dy;
        p.plate.style.transform = `translate3d(${tx}px, ${ty}px, 0) translate(-50%, -100%)`;
        p.plate.style.zIndex = String(Math.round(p.anchor.y));
        const len = Math.hypot(dx, dy);
        p.plate.classList.toggle('moved', len > 6);
        if (len > 6) { p.plate.style.setProperty('--ll', len.toFixed(1) + 'px'); p.plate.style.setProperty('--la', (Math.atan2(-dx, dy) * 180 / Math.PI).toFixed(1) + 'deg'); }
      }
    }
    if (this.bubbles) for (const b of this.bubbles) this.positionBubble(b);
    for (const e of this.emotes) {
      if (e._get) { const a = e._get(); e.style.transform = `translate(${a.x}px, ${a.y}px) translate(-50%, -100%)`; continue; }
      const a = e._p.spot || e._p.anchor; if (!a) continue;
      e.style.transform = `translate(${a.x + 26}px, ${a.y - (e._p.plateH || 34) - 4}px) translate(-50%, -100%)`;
    }
  }

  emote(p, ch) {
    const e = document.createElement('div');
    e.className = 'emote'; e.textContent = ch; e._p = p;
    this.layer.appendChild(e); this.emotes.add(e);
    setTimeout(() => { this.emotes.delete(e); e.remove(); }, 1650);
  }

  // ăn mừng khi xong việc: pháo giấy ở khay + cả phòng giơ tay
  celebrate(agentId) {
    const colors = ['#f5b54a', '#5fd69a', '#7cc4f5', '#f07070', '#b896f0', '#ffffff'];
    const geo = new THREE.PlaneGeometry(0.07, 0.04);
    const origin = new THREE.Vector3(5.6, 1.0, 4.15);
    const p0 = agentId && this.people.get(agentId);
    const spots = [origin];
    if (p0) spots.push(new THREE.Vector3(p0.pos.x, 1.6, p0.pos.z));
    for (const o of spots) for (let i = 0; i < 70; i++) {
      const m = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ color: colors[i % colors.length], side: THREE.DoubleSide }));
      m.position.copy(o);
      const a = Math.random() * Math.PI * 2, sp = 1.2 + Math.random() * 2.2;
      m.userData = { v: new THREE.Vector3(Math.cos(a) * sp * 0.6, 3 + Math.random() * 2.5, Math.sin(a) * sp * 0.6), r: new THREE.Vector3(Math.random() * 8, Math.random() * 8, Math.random() * 8), life: 2.6 + Math.random() };
      this.scene.add(m); this.confetti.push(m);
    }
    for (const p of this.people.values()) {
      if (p.state === 'working') continue;
      setTimeout(() => { p.person.doAction('cheer', 2200); this.emote(p, pick(['🎉', '👏', '🥳', '🙌'])); }, Math.random() * 500);
    }
  }

  updateConfetti(dt) {
    for (let i = this.confetti.length - 1; i >= 0; i--) {
      const m = this.confetti[i]; const u = m.userData;
      u.v.y -= 6.5 * dt; u.v.multiplyScalar(1 - dt * 0.9);
      m.position.addScaledVector(u.v, dt);
      m.rotation.x += u.r.x * dt; m.rotation.y += u.r.y * dt; m.rotation.z += u.r.z * dt;
      if (m.position.y < 0.02) { m.position.y = 0.02; u.v.set(0, 0, 0); u.r.set(0, 0, 0); m.rotation.set(-Math.PI / 2, 0, m.rotation.z); }
      u.life -= dt;
      if (u.life < 0.6) m.material.opacity = Math.max(0, u.life / 0.6), m.material.transparent = true;
      if (u.life <= 0) { this.scene.remove(m); m.material.dispose(); this.confetti.splice(i, 1); }
    }
  }

  // ánh sáng theo giờ thật: sáng – hoàng hôn – tối (bật đèn trần)
  applyDaylight(forceHour) {
    const d = new Date(); const h = forceHour ?? (d.getHours() + d.getMinutes() / 60);
    const day = h < 5 || h > 19.5 ? 0 : h < 7 ? (h - 5) / 2 : h > 17.5 ? (19.5 - h) / 2 : 1;
    const golden = Math.max(0, 1 - Math.abs(h - 17.8) / 1.6) + Math.max(0, 1 - Math.abs(h - 6.2) / 1.2);
    const sunCol = new THREE.Color('#ffe7c2').lerp(new THREE.Color('#ffae6b'), Math.min(1, golden));
    this.sun.color.copy(sunCol); this.sun.intensity = 0.25 + 1.85 * day;
    this.hemi.intensity = 0.4 + 0.45 * day;
    this.hemi.color.set(day > 0.3 ? '#fff4e0' : '#b9c4ff');
    const skyTint = new THREE.Color('#1c2448').lerp(new THREE.Color('#ffffff'), day).lerp(new THREE.Color('#ffc59a'), Math.min(0.6, golden * (day > 0 ? 0.6 : 0)));
    for (const m of this.world.skyMats || []) m.color.copy(skyTint);
    const night = 1 - day;
    for (const l of this.world.lamps || []) { l.light.intensity = night * 6; l.bulbMat.emissiveIntensity = 0.2 + night * 2.2; }
    if (this.world.dust) this.world.dust.material.opacity = 0.15 + 0.45 * day;
    this.renderer.toneMappingExposure = 0.95 + 0.12 * day;
  }

  destroy() {
    this.dead = true; cancelAnimationFrame(this.raf); this.ro.disconnect(); clearInterval(this.dayT);
    this.renderer.dispose(); this.wrap.remove();
  }
}

window.Office3D = Office3D;

// Sảnh online dùng chung engine (nhân vật, phòng, tìm đường) – đóng gói chung 1 file
import './lobby3d.js';
