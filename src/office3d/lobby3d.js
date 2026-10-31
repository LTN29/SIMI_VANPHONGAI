// Sảnh online 3D – SIMI BAR CHILL: mỗi đồng nghiệp đang online là một nhân vật.
// Nhân vật của mình: bấm sàn để đi, WASD, bấm ghế để ngồi; camera đi theo mình như game.
import * as THREE from 'three';
import { NavGrid } from './nav.js';
import { Cat } from './cat.js';
import { Person } from './person.js';
import { BAR, buildBar } from './bar.js';
import { CSS3DRenderer, CSS3DObject } from 'three/examples/jsm/renderers/CSS3DRenderer.js';

const ROOM = BAR;

function angLerp(a, b, t) { const d = ((b - a + Math.PI) % (2 * Math.PI) + 2 * Math.PI) % (2 * Math.PI) - Math.PI; return a + d * t; }
const STATUS_ICON = { idle: '☕', chat: '💬', work: '🏢', image: '🎨', video: '🎬', web: '🔎', doc: '📄', away: '🌙' };
const ACTION_OF = { '👋': 'wave', '🕺': 'dance', '🎉': 'cheer', '🙌': 'cheer', '☕': 'drink' };

// hồ sơ nhân vật (từ Sảnh) → dữ liệu cho Person
export function avatarToLook(m) {
  const a = m.avatar || {};
  // nhân vật mặc định ổn định theo id nếu người đó chưa chọn
  let h = 0; for (const ch of String(m.id || m.name || '')) h = (h * 31 + ch.charCodeAt(0)) >>> 0;
  const P = (arr) => arr[h % arr.length];
  return {
    id: m.id, name: m.name,
    hair: a.hair || P(['#2b1d14', '#5a3a1e', '#1a1a1a', '#7a2e2e', '#b07a3c', '#3b3b46']),
    skin: a.skin || P(['#f1c9a5', '#e2ae84', '#f6d7bd', '#ebbf98', '#d9a074']),
    shirt: a.shirt || P(['#0a78f0', '#2fc1a5', '#f5b51b', '#4a3592', '#e1262d', '#142c5a', '#ff8a3d']),
    pants: a.pants, shoes: a.shoes, accent: a.accent,
    hairStyle: a.hairStyle || P(['short', 'long', 'spiky', 'bun', 'bob', 'curly', 'ponytail']),
    accessory: a.accessory || 'none',
  };
}

// độ phân giải tối đa: màn hình 4K/Retina vẽ ở 1.5x là đủ nét, đỡ nặng gấp đôi
const MAX_DPR = 1.5;
function makeRenderer(canvas) {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'high-performance' });
  if (!renderer.getContext()) throw new Error('WebGL không khả dụng');
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, MAX_DPR));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFShadowMap;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.setClearColor(0x000000, 0);
  return renderer;
}

// vệt bóng mềm dưới chân nhân vật
const BLOB_GEO = new THREE.CircleGeometry(0.34, 24);
const BLOB_MAT = (() => {
  const c = document.createElement('canvas'); c.width = c.height = 64;
  const g = c.getContext('2d'); const gr = g.createRadialGradient(32, 32, 0, 32, 32, 32);
  gr.addColorStop(0, 'rgba(60,40,20,.42)'); gr.addColorStop(0.6, 'rgba(60,40,20,.18)'); gr.addColorStop(1, 'rgba(60,40,20,0)');
  g.fillStyle = gr; g.fillRect(0, 0, 64, 64);
  return new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(c), transparent: true, depthWrite: false });
})();

function addLights(scene, shadowSize = 2048) {
  // nắng chiều ấm áp chiếu xiên + ánh trời dịu: sàn gỗ sáng, bóng đổ mềm
  scene.add(new THREE.HemisphereLight('#ffffff', '#d8c6aa', 1.05), new THREE.AmbientLight('#ffffff', 0.18));
  const sun = new THREE.DirectionalLight('#fff0dc', 2.1);
  sun.position.set(-6, 15, 10); sun.castShadow = true; sun.shadow.mapSize.set(shadowSize, shadowSize);
  Object.assign(sun.shadow.camera, { left: -17, right: 17, top: 14, bottom: -14, near: 1, far: 42 });
  sun.shadow.bias = -0.0005; sun.shadow.normalBias = 0.03; sun.shadow.radius = 2.5;
  const fill = new THREE.DirectionalLight('#dbe8ff', 0.5); fill.position.set(9, 7, -3);
  scene.add(sun, sun.target, fill);
}

class Lobby3D {
  constructor(root, opts = {}) {
    this.root = root; this.opts = opts;
    this.people = new Map(); // id -> { m, person, pos, path, facing, plate, ... }
    this.bubbles = new Set(); this.emotes = new Set();
    this.keys = new Set();
    this.dead = false;

    const canvas = document.createElement('canvas'); canvas.className = 'office3d-canvas'; canvas.tabIndex = 0;
    this.renderer = makeRenderer(canvas);
    this.wrap = document.createElement('div'); this.wrap.className = 'office3d-wrap';
    this.layer = document.createElement('div'); this.layer.className = 'office3d-layer';
    // lớp khung YouTube nằm SAU canvas: canvas đục lỗ trong suốt đúng chỗ màn chiếu → video lộ ra, người đi ngang vẫn che được
    this.cssBox = document.createElement('div'); this.cssBox.className = 'office3d-css';
    canvas.style.position = 'relative'; canvas.style.zIndex = '1'; this.layer.style.zIndex = '2';
    this.wrap.append(this.cssBox, canvas, this.layer); root.appendChild(this.wrap);
    this.canvas = canvas;

    this.scene = new THREE.Scene();
    addLights(this.scene, 2048);
    this.world = buildBar(this.scene);
    this.seats = new Map(this.world.seats.map((st) => [st.id, st]));
    this.follow = true;

    this.cam = new THREE.OrthographicCamera(-10, 10, 6, -6, 0.1, 100);
    // view: góc nhìn đang vẽ; goal: góc nhìn muốn tới (kéo chuột, lăn chuột) → mỗi khung hình trượt mượt về goal
    this.view = { az: 0.72, el: 0.7, zoom: 0.85, target: new THREE.Vector3(0, 0.6, 0.6) };
    this.goal = { az: 0.72, el: 0.7, zoom: 0.85 };
    this.perf = { acc: 0, n: 0, dpr: Math.min(window.devicePixelRatio || 1, MAX_DPR), slow: 0 };

    this.nav = new NavGrid(ROOM.minX, ROOM.minZ, ROOM.maxX, ROOM.maxZ, 0.2);
    this.nav.blockRect(ROOM.minX, ROOM.minZ, ROOM.maxX, ROOM.minZ + 0.25, 0.15);
    this.nav.blockRect(ROOM.minX, ROOM.minZ, ROOM.minX + 0.25, ROOM.maxZ, 0.15);
    this.nav.blockRect(ROOM.maxX - 0.2, ROOM.minZ, ROOM.maxX, ROOM.maxZ, 0.15);
    this.nav.blockRect(ROOM.minX, ROOM.maxZ - 0.2, ROOM.maxX, ROOM.maxZ, 0.15);
    for (const o of this.world.obstacles) this.nav.blockRect(...o);
    this.cat = new Cat(this.scene, this.nav);

    this.raycaster = new THREE.Raycaster(); this.ndc = new THREE.Vector2(); this.tmpV = new THREE.Vector3();
    this.floorPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
    this.marker = new THREE.Mesh(new THREE.RingGeometry(0.16, 0.24, 28), new THREE.MeshBasicMaterial({ color: '#0a78f0', transparent: true, opacity: 0 }));
    this.marker.rotation.x = -Math.PI / 2; this.marker.position.y = 0.02; this.scene.add(this.marker);
    this.bindInput();
    this.ro = new ResizeObserver(() => this.resize()); this.ro.observe(root); this.resize();
    this.clock = new THREE.Clock();
    const loop = () => { if (this.dead) return; this.raf = requestAnimationFrame(loop); if (!this.paused) this.frame(); };
    loop();
  }

  // ---------------- camera ----------------
  updateCamera() {
    const { az, el, zoom, target } = this.view;
    const r = 30;
    this.cam.position.set(target.x + Math.sin(az) * Math.cos(el) * r, target.y + Math.sin(el) * r, target.z + Math.cos(az) * Math.cos(el) * r);
    this.cam.lookAt(target);
    const w = this.wrap.clientWidth || 800, h = this.wrap.clientHeight || 500;
    const aspect = w / h;
    const vh = Math.max(8.4, 15.6 / aspect) / zoom;
    Object.assign(this.cam, { left: -vh * aspect / 2, right: vh * aspect / 2, top: vh / 2, bottom: -vh / 2 });
    this.cam.updateProjectionMatrix();
  }
  resetView() { Object.assign(this.goal, { az: 0.72, el: 0.7, zoom: 0.85 }); this.follow = true; }
  // nhìn toàn bộ quán / quay về nhân vật của mình
  overview() { this.follow = false; this.goal.zoom = 0.44; this.goal.el = 0.82; this.panTo = new THREE.Vector3(0, 0.6, 0.6); }
  focusSelf() { this.follow = true; this.goal.zoom = 0.85; this.panTo = null; }
  resize() {
    const r = this.root.getBoundingClientRect();
    const w = Math.max(200, Math.floor(r.width)), h = Math.max(200, Math.floor(r.height));
    this.cssW = w; this.cssH = h;
    this.renderer.setSize(w, h, false);
    this.canvas.style.width = w + 'px'; this.canvas.style.height = h + 'px';
    this.wrap.style.width = w + 'px'; this.wrap.style.height = h + 'px';
    if (this.cssRenderer) this.cssRenderer.setSize(w, h);
    this.updateCamera();
  }

  // ---------------- màn chiếu ----------------
  // el = khung chứa iframe YouTube (null = tắt, hiện màn chờ)
  setCinemaFrame(el) {
    const c = this.world.cinema; if (!c) return;
    if (this.cinemaObj) { this.cssScene.remove(this.cinemaObj); this.cinemaObj.element.remove(); this.cinemaObj = null; }
    if (el) {
      if (!this.cssRenderer) { this.cssRenderer = new CSS3DRenderer({ element: this.cssBox }); this.cssScene = new THREE.Scene(); this.cssRenderer.setSize(this.cssW || 800, this.cssH || 500); }
      const PX = 1280;
      el.style.width = PX + 'px'; el.style.height = Math.round(PX * c.h / c.w) + 'px';
      const o = new CSS3DObject(el); o.position.set(c.x, c.y, c.z); o.scale.setScalar(c.w / PX);
      this.cssScene.add(o); this.cinemaObj = o;
    }
    c.idle.visible = !el; c.hole.visible = !!el;
  }
  // đưa camera ra trước màn chiếu
  // shiftPx: dịch màn chiếu sang phải bấy nhiêu px (tránh bảng Màn chiếu đang mở bên trái)
  viewScreen(shiftPx = 0) {
    const c = this.world.cinema; if (!c) return;
    const zoom = 1.25; const w = this.cssW || 800, h = this.cssH || 500;
    const perPx = Math.max(8.4, 15.6 / (w / h)) / zoom / h;
    this.follow = false; this.panTo = new THREE.Vector3(c.x - shiftPx * perPx, 0.6, c.z + 3.2);
    Object.assign(this.goal, { az: 0.05, el: 0.32, zoom });
  }

  ray(clientX, clientY) {
    const r = this.canvas.getBoundingClientRect();
    this.ndc.set(((clientX - r.left) / r.width) * 2 - 1, -((clientY - r.top) / r.height) * 2 + 1);
    this.raycaster.setFromCamera(this.ndc, this.cam);
    return this.raycaster;
  }
  pickPerson(clientX, clientY) {
    const rc = this.ray(clientX, clientY);
    let best = null;
    for (const p of this.people.values()) {
      const hit = rc.intersectObject(p.person.root, true)[0];
      if (hit && (!best || hit.distance < best.d)) best = { p, d: hit.distance };
    }
    return best && best.p;
  }
  pickSeat(clientX, clientY) {
    const hit = this.ray(clientX, clientY).intersectObjects(this.world.seatMeshes, false)[0];
    return hit ? this.seats.get(hit.object.userData.seatId) : null;
  }
  seatTaken(id, exceptId) { return [...this.people.values()].some((q) => q.m.id !== exceptId && (q.seat === id || q.pendingSeat === id)); }
  pickFloor(clientX, clientY) {
    const pt = new THREE.Vector3();
    return this.ray(clientX, clientY).ray.intersectPlane(this.floorPlane, pt) ? pt : null;
  }

  bindInput() {
    const c = this.canvas;
    let down = null;
    c.addEventListener('contextmenu', (e) => e.preventDefault());
    c.addEventListener('pointerdown', (e) => { c.focus(); down = { x: e.clientX, y: e.clientY, az: this.goal.az, el: this.goal.el, moved: false }; c.setPointerCapture(e.pointerId); });
    let hoverAt = 0; let hoverTimer = 0;
    c.addEventListener('pointermove', (e) => {
      if (down) {
        const dx = e.clientX - down.x, dy = e.clientY - down.y;
        if (Math.hypot(dx, dy) > 5) down.moved = true;
        if (down.moved) {
          // chỉ đổi góc muốn tới – camera trượt mượt theo trong vòng lặp vẽ
          this.goal.az = Math.max(0.05, Math.min(1.52, down.az - dx * 0.005));
          this.goal.el = Math.max(0.34, Math.min(1.28, down.el + dy * 0.0035));
          c.style.cursor = 'grabbing';
        }
        return;
      }
      // dò người / ghế dưới chuột tối đa ~12 lần mỗi giây (dò mỗi lần di chuột làm khựng)
      const x = e.clientX, y = e.clientY;
      const pick = () => { hoverAt = performance.now(); c.style.cursor = this.pickPerson(x, y) || this.pickSeat(x, y) ? 'pointer' : 'crosshair'; };
      clearTimeout(hoverTimer);
      if (performance.now() - hoverAt > 80) pick(); else hoverTimer = setTimeout(pick, 90);
    });
    c.addEventListener('pointerup', (e) => {
      if (down && !down.moved) {
        const p = this.pickPerson(e.clientX, e.clientY);
        const st = !p && this.pickSeat(e.clientX, e.clientY);
        if (p && !p.me) this.opts.onPersonClick && this.opts.onPersonClick(p.m.id, e.clientX, e.clientY);
        else if (p && p.me) this.opts.onSelfClick && this.opts.onSelfClick(e.clientX, e.clientY);
        else if (st) this.sitSelf(st.id);
        else { const pt = this.pickFloor(e.clientX, e.clientY); if (pt) this.walkSelf(pt.x, pt.z, true); }
      }
      down = null; c.style.cursor = 'crosshair';
    });
    c.addEventListener('wheel', (e) => { e.preventDefault(); this.goal.zoom = Math.max(0.42, Math.min(2.6, this.goal.zoom * Math.exp(-Math.max(-240, Math.min(240, e.deltaY)) * 0.0014))); }, { passive: false });
    c.addEventListener('dblclick', (e) => { if (!this.pickPerson(e.clientX, e.clientY)) this.resetView(); });
    c.addEventListener('keydown', (e) => { const k = e.key.toLowerCase(); if (['w', 'a', 's', 'd', 'arrowup', 'arrowdown', 'arrowleft', 'arrowright'].includes(k)) { this.keys.add(k); e.preventDefault(); } });
    c.addEventListener('keyup', (e) => this.keys.delete(e.key.toLowerCase()));
    c.addEventListener('blur', () => this.keys.clear());
  }

  // ---------------- thành viên ----------------
  setMembers(list) {
    const keep = new Set();
    list.forEach((m, i) => {
      keep.add(m.id);
      let p = this.people.get(m.id);
      const look = avatarToLook(m);
      const sig = JSON.stringify(look);
      if (p && p.sig !== sig) { this.scene.remove(p.person.root); p.person = this.makePerson(look, i, p.pos, p.facing); p.sig = sig; }
      if (!p) {
        const start = this.freeSpot(m.pos ? m.pos.x : (i % 5) * 1.4 - 3, m.pos ? m.pos.z : 1 + Math.floor(i / 5));
        p = { m, me: !!m.me, pos: start, path: [], facing: Math.random() * 6, sig, speed: 1.9, seat: null, pendingSeat: null };
        p.person = this.makePerson(look, i, p.pos, p.facing);
        this.makePlate(p);
        this.people.set(m.id, p);
        const st = m.pos && m.pos.seat && this.seats.get(m.pos.seat);
        if (st && !this.seatTaken(st.id, m.id)) this.sitNow(p, st);
      }
      p.m = m; p.me = !!m.me;
      this.updatePlate(p);
    });
    for (const [id, p] of [...this.people]) if (!keep.has(id)) this.removePerson(id, p);
  }

  makePerson(look, i, pos, facing) {
    const person = new Person(look, i);
    person.root.position.set(pos.x, 0, pos.z); person.root.rotation.y = facing || 0;
    // 30 người x ~20 khối mà đổ bóng thật thì rất nặng → dùng vệt bóng mềm dưới chân
    person.root.traverse((o) => { if (o.isMesh) o.castShadow = false; });
    person.blob = new THREE.Mesh(BLOB_GEO, BLOB_MAT); person.blob.rotation.x = -Math.PI / 2; person.blob.renderOrder = 1;
    person.root.add(person.blob);
    this.scene.add(person.root);
    return person;
  }

  removePerson(id, p) {
    this.scene.remove(p.person.root); p.plate.remove(); this.people.delete(id);
    for (const b of [...this.bubbles]) if (b._p === p) { b.remove(); this.bubbles.delete(b); }
  }

  freeSpot(x, z) {
    const c = this.nav.toCell(Math.max(ROOM.minX + 0.6, Math.min(ROOM.maxX - 0.6, x)), Math.max(ROOM.minZ + 0.6, Math.min(ROOM.maxZ - 0.6, z)));
    const f = this.nav.nearestFree(c.c, c.r);
    return this.nav.center(f.c, f.r);
  }

  makePlate(p) {
    const plate = document.createElement('div');
    plate.className = 'plate3d lobby' + (p.me ? ' me' : '');
    plate.innerHTML = '<span class="pl-row"><span class="pl-name"></span></span><span class="pl-sub"><span class="pl-title"></span></span>';
    plate.addEventListener('click', (e) => {
      const r = plate.getBoundingClientRect();
      if (p.me) this.opts.onSelfClick && this.opts.onSelfClick(r.left + r.width / 2, r.bottom);
      else this.opts.onPersonClick && this.opts.onPersonClick(p.m.id, r.left + r.width / 2, r.bottom);
      e.stopPropagation();
    });
    this.layer.append(plate); p.plate = plate;
  }

  updatePlate(p) {
    const m = p.m; const st = m.status || {};
    p.plate.querySelector('.pl-name').textContent = (p.me ? '⭐ ' : '') + m.name;
    // trạng thái đã kèm biểu tượng (vd. "🎨 Đang tạo ảnh") thì giữ nguyên, chưa có thì thêm
    p.plate.querySelector('.pl-title').textContent = st.text ? (/^\p{Extended_Pictographic}/u.test(st.text) ? st.text : `${STATUS_ICON[st.activity] || '☕'} ${st.text}`) : `${STATUS_ICON[st.activity] || '☕'} ${m.teamName || ''}`.trim();
    p.plate.classList.toggle('busy', !!st.activity && !['idle', 'away'].includes(st.activity));
    p.plate.title = `${m.name} · ${m.teamName || ''}${m.role ? ' · ' + m.role : ''}`;
    p.busy = !!st.activity && !['idle', 'away'].includes(st.activity);
  }

  // ---------------- di chuyển ----------------
  standUp(p) { p.seat = null; p.pendingSeat = null; p.sitting = false; }
  sitNow(p, st) {
    p.path = []; p.pos = { x: st.x, z: st.z }; p.facing = st.face;
    p.seat = st.id; p.pendingSeat = null; p.sitting = true; p.seatH = st.h;
  }
  walk(p, x, z) {
    this.standUp(p);
    const to = this.freeSpot(x, z);
    p.path = this.nav.find({ x: p.pos.x, z: p.pos.z }, to);
    return to;
  }
  // đi tới lối vào ghế rồi bước vào ngồi
  walkToSeat(p, st) {
    this.standUp(p);
    p.pendingSeat = st.id;
    p.path = [...this.nav.find({ x: p.pos.x, z: p.pos.z }, this.freeSpot(st.approach.x, st.approach.z)), { x: st.x, z: st.z }];
  }
  moveMember(id, x, z, seat) {
    const p = this.people.get(id); if (!p || p.me) return;
    const st = seat && this.seats.get(seat);
    if (st) this.walkToSeat(p, st); else this.walk(p, x, z);
  }

  walkSelf(x, z, showMarker) {
    const p = this.self(); if (!p) return;
    const to = this.walk(p, x, z);
    if (showMarker) { this.marker.position.set(to.x, 0.02, to.z); this.marker.material.opacity = 0.9; }
    this.follow = true;
    this.opts.onMove && this.opts.onMove({ x: to.x, z: to.z, seat: null });
  }

  sitSelf(id) {
    const p = this.self(); const st = this.seats.get(id); if (!p || !st) return;
    if (p.seat === id) return;
    if (this.seatTaken(id, p.m.id)) { this.opts.onToast && this.opts.onToast('Ghế này có người ngồi rồi 😅'); return; }
    this.walkToSeat(p, st);
    this.marker.position.set(st.x, 0.02, st.z); this.marker.material.opacity = 0.9;
    this.follow = true;
    this.opts.onMove && this.opts.onMove({ x: st.x, z: st.z, seat: id });
  }

  self() { return [...this.people.values()].find((q) => q.me); }

  selfPos() { const p = this.self(); return p ? { ...p.pos, seat: p.seat } : null; }

  // ---------------- lời nói, biểu cảm ----------------
  say(id, text, ms = 5200) {
    const p = this.people.get(id); if (!p) return;
    for (const b of [...this.bubbles]) if (b._p === p) { b.remove(); this.bubbles.delete(b); }
    const b = document.createElement('div');
    b.className = 'bubble3d k-chat'; b.style.zIndex = '5000';
    b.textContent = text.length > 110 ? text.slice(0, 109) + '…' : text;
    b._p = p; this.layer.appendChild(b); this.bubbles.add(b);
    p.person.say(Math.min(ms, 2400));
    requestAnimationFrame(() => b.classList.add('show'));
    setTimeout(() => { b.classList.remove('show'); setTimeout(() => { this.bubbles.delete(b); b.remove(); }, 220); }, ms);
  }

  emote(id, emoji) {
    const p = this.people.get(id); if (!p) return;
    const act = ACTION_OF[emoji] || (/❤|💖|😍|🥰/.test(emoji) ? 'wave' : 'cheer');
    p.person.doAction(act, act === 'dance' ? 2600 : 1800);
    if (act === 'dance') p.danceUntil = performance.now() / 1000 + 2.6;
    const e = document.createElement('div');
    e.className = 'emote'; e.textContent = emoji; e._p = p;
    this.layer.appendChild(e); this.emotes.add(e);
    setTimeout(() => { this.emotes.delete(e); e.remove(); }, 1700);
  }

  // ---------------- vòng lặp ----------------
  frame() {
    const dt = Math.min(0.05, this.clock.getDelta());
    const t = (this.t = (this.t || 0) + dt);
    const now = performance.now() / 1000;
    for (const fn of this.world.animated) fn(t, dt);
    this.cat.update(dt, now);
    this.keyboardMove(dt);
    this.marker.material.opacity = Math.max(0, this.marker.material.opacity - dt * 0.8);
    for (const p of this.people.values()) {
      let moving = false;
      if (p.path.length) {
        const tg = p.path[0]; const dx = tg.x - p.pos.x, dz = tg.z - p.pos.z; const d = Math.hypot(dx, dz); const step = p.speed * dt;
        if (d <= step) {
          p.pos.x = tg.x; p.pos.z = tg.z; p.path.shift();
          if (!p.path.length && p.pendingSeat) { const st = this.seats.get(p.pendingSeat); if (st) this.sitNow(p, st); }
        } else { p.pos.x += dx / d * step; p.pos.z += dz / d * step; }
        if (d > 0.001) p.facing = angLerp(p.facing, Math.atan2(dx, dz), 1 - Math.exp(-dt * 12));
        moving = p.path.length > 0;
      } else if (p.keyMove) {
        moving = true;
      }
      if (p.danceUntil && now < p.danceUntil && !moving) p.facing += dt * 5;
      const seated = !!p.sitting && !moving;
      const rootY = seated ? Math.max(0, (p.seatH || 0.45) - 0.45) : 0;
      p.person.root.position.set(p.pos.x, rootY, p.pos.z);
      if (p.person.blob) { p.person.blob.position.y = 0.012 - rootY; p.person.blob.visible = !seated || rootY < 0.05; }
      p.person.root.rotation.y = p.facing;
      // đang dùng AI: đứng thì nhìn quanh, ngồi thì gõ phím
      if (p.busy && !moving && !seated && !p.person.action && Math.random() < dt * 0.15) p.person.doAction('look', 1600);
      p.person.animate(dt, now, { moving, speed: p.speed, seated, typing: seated && p.busy });
      p.keyMove = false;
    }
    // camera: trượt mượt về góc/độ phóng muốn tới, đi theo nhân vật của mình
    const v = this.view, g = this.goal;
    const kr = 1 - Math.exp(-dt * 10);
    v.az += (g.az - v.az) * kr; v.el += (g.el - v.el) * kr;
    v.zoom *= Math.exp((Math.log(g.zoom) - Math.log(v.zoom)) * kr);
    const me = this.self();
    const aim = this.follow && me ? { x: me.pos.x, z: me.pos.z } : this.panTo;
    if (aim) {
      const kf = 1 - Math.exp(-dt * 4.5);
      v.target.x += (aim.x - v.target.x) * kf;
      v.target.z += (aim.z - v.target.z) * kf;
    }
    this.updateCamera();
    const far = v.zoom < 0.7;
    if (far !== this.far) { this.far = far; this.layer.classList.toggle('far', far); }
    this.renderer.render(this.scene, this.cam);
    if (this.cinemaObj) this.cssRenderer.render(this.cssScene, this.cam);
    this.placeDom();
    this.adapt(dt);
  }

  // máy yếu: tự giảm độ phân giải, rồi tắt bóng đổ để giữ khung hình mượt
  adapt(dt) {
    const P = this.perf; P.acc += dt; P.n++;
    if (P.acc < 2) return;
    const avg = P.acc / P.n; P.acc = 0; P.n = 0;
    if (avg > 1 / 38) {
      P.slow++;
      if (P.dpr > 1.01) { P.dpr = Math.max(1, P.dpr - 0.25); this.renderer.setPixelRatio(P.dpr); this.resize(); }
      else if (P.slow >= 3 && this.renderer.shadowMap.enabled) {
        this.renderer.shadowMap.enabled = false;
        this.scene.traverse((o) => { if (o.material) [].concat(o.material).forEach((m) => { m.needsUpdate = true; }); });
      }
    } else P.slow = 0;
  }

  // WASD / phím mũi tên: đi theo hướng nhìn của camera
  keyboardMove(dt) {
    if (!this.keys.size) return;
    const p = [...this.people.values()].find((q) => q.me); if (!p) return;
    let fx = 0, fz = 0;
    if (this.keys.has('w') || this.keys.has('arrowup')) fz -= 1;
    if (this.keys.has('s') || this.keys.has('arrowdown')) fz += 1;
    if (this.keys.has('a') || this.keys.has('arrowleft')) fx -= 1;
    if (this.keys.has('d') || this.keys.has('arrowright')) fx += 1;
    if (!fx && !fz) return;
    const az = this.view.az; const len = Math.hypot(fx, fz);
    const wx = (fx * Math.cos(az) + fz * Math.sin(az)) / len, wz = (-fx * Math.sin(az) + fz * Math.cos(az)) / len;
    const nx = p.pos.x + wx * 2.4 * dt, nz = p.pos.z + wz * 2.4 * dt;
    p.path = []; if (p.sitting || p.pendingSeat) this.standUp(p);
    this.follow = true;
    if (this.nav.isFree(nx, nz)) { p.pos.x = nx; p.pos.z = nz; }
    p.facing = angLerp(p.facing, Math.atan2(wx, wz), 1 - Math.exp(-dt * 14));
    p.keyMove = true;
    const tnow = performance.now();
    if (!this.lastKeySend || tnow - this.lastKeySend > 350) { this.lastKeySend = tnow; this.opts.onMove && this.opts.onMove({ x: p.pos.x, z: p.pos.z, seat: null }); }
  }

  project(v) { const p = v.project(this.cam); return { x: (p.x + 1) / 2 * this.cssW, y: (1 - p.y) / 2 * this.cssH }; }

  placeDom() {
    for (const p of this.people.values()) {
      const h = this.project(p.person.headWorld(this.tmpV).setY(this.tmpV.y + 0.12));
      p.anchor = h;
      if (!p.plateH) p.plateH = p.plate.offsetHeight || 34;
      // chỉ ghi lại khi bảng tên thật sự dịch chuyển (ghi style mỗi khung hình cho 30 người làm trình duyệt bận)
      const tx = Math.round(h.x * 2) / 2, ty = Math.round(h.y * 2) / 2;
      if (tx !== p.tx || ty !== p.ty) {
        p.tx = tx; p.ty = ty;
        p.plate.style.transform = `translate3d(${tx}px, ${ty}px, 0) translate(-50%, -100%)`;
        const z = Math.round(ty) + (p.me ? 2000 : 0);
        if (z !== p.z) { p.z = z; p.plate.style.zIndex = String(z); }
      }
    }
    for (const b of this.bubbles) {
      const a = b._p.anchor; if (!a) continue;
      const W = this.cssW; const x = Math.max(120, Math.min(W - 120, a.x));
      b.style.transform = `translate(${x}px, ${a.y - (b._p.plateH || 34) - 8}px) translate(-50%, -100%)`;
      b.style.setProperty('--tail', (a.x - x) + 'px');
    }
    for (const e of this.emotes) { const a = e._p.anchor; if (a) e.style.transform = `translate(${a.x + 24}px, ${a.y - (e._p.plateH || 34) - 4}px) translate(-50%, -100%)`; }
  }

  destroy() { this.dead = true; cancelAnimationFrame(this.raf); this.ro.disconnect(); this.renderer.dispose(); this.wrap.remove(); }
}

// Xem trước nhân vật trong Tủ đồ: một nhân vật xoay chậm
class AvatarPreview {
  constructor(root) {
    this.root = root;
    const canvas = document.createElement('canvas'); canvas.className = 'avatar-preview';
    root.appendChild(canvas); this.canvas = canvas;
    this.renderer = makeRenderer(canvas); this.renderer.shadowMap.enabled = false;
    this.scene = new THREE.Scene(); addLights(this.scene, 512);
    const disc = new THREE.Mesh(new THREE.CylinderGeometry(0.75, 0.8, 0.06, 40), new THREE.MeshStandardMaterial({ color: '#dbe9fb', roughness: 0.6 }));
    disc.position.y = -0.03; this.scene.add(disc);
    this.cam = new THREE.PerspectiveCamera(30, 1, 0.1, 50);
    this.cam.position.set(0, 1.25, 4.1); this.cam.lookAt(0, 0.75, 0);
    this.angle = 0.4; this.dead = false;
    this.ro = new ResizeObserver(() => this.resize()); this.ro.observe(root); this.resize();
    let last = performance.now();
    const loop = (ts) => {
      if (this.dead) return; this.raf = requestAnimationFrame(loop);
      const dt = Math.min(0.05, (ts - last) / 1000); last = ts;
      if (this.person) { this.angle += dt * 0.6; this.person.root.rotation.y = Math.sin(this.angle) * 0.9; this.person.animate(dt, ts / 1000, { moving: false, speed: 0, seated: false, typing: false }); }
      this.renderer.render(this.scene, this.cam);
    };
    this.raf = requestAnimationFrame(loop);
  }
  resize() { const w = this.root.clientWidth || 220, h = this.root.clientHeight || 260; this.renderer.setSize(w, h, false); this.cam.aspect = w / h; this.cam.updateProjectionMatrix(); }
  update(m) {
    if (this.person) this.scene.remove(this.person.root);
    this.person = new Person(avatarToLook(m), 0);
    this.scene.add(this.person.root);
  }
  wave() { if (this.person) this.person.doAction('wave', 1600); }
  destroy() { this.dead = true; cancelAnimationFrame(this.raf); this.ro.disconnect(); this.renderer.dispose(); this.canvas.remove(); }
}

window.Lobby3D = Lobby3D;
window.avatarToLook = avatarToLook;
window.AvatarPreview = AvatarPreview;
