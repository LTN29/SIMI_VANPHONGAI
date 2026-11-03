// Sảnh online 3D – SIMI BAR CHILL: mỗi đồng nghiệp đang online là một nhân vật.
// Nhân vật của mình: bấm sàn để đi, WASD, bấm ghế để ngồi; camera đi theo mình như game.
import * as THREE from 'three';
import { NavGrid } from './nav.js';
import { Cat } from './cat.js';
import { Person } from './person.js';
import { BAR, buildBar, POOL_FELT } from './bar.js';
import { CSS3DRenderer, CSS3DObject } from 'three/examples/jsm/renderers/CSS3DRenderer.js';

const ROOM = BAR;

function angLerp(a, b, t) { const d = ((b - a + Math.PI) % (2 * Math.PI) + 2 * Math.PI) % (2 * Math.PI) - Math.PI; return a + d * t; }
const STATUS_ICON = { idle: '☕', chat: '💬', work: '🏢', image: '🎨', video: '🎬', web: '🔎', doc: '📄', away: '🌙' };
const ACTION_OF = { '👋': 'wave', '🕺': 'dance', '🎉': 'cheer', '🙌': 'cheer', '☕': 'drink' };
// sàn nhảy (khớp bar.js): đứng trong đây thì app gợi ý chọn điệu nhảy
const FLOOR = { x1: -5.1, x2: 1.1, z1: 1.9, z2: 7.1 };
const BPM = 120;
const MEET = { hug: 0.5, dance: 0.95, highfive: 0.62, cheers: 0.62, coffee: 0.68 };
const FX = { highfive: '🙌', hug: '🤗', cheers: '🥂', coffee: '☕', dance: '💃' };
// 3 bot sư mặc cà sa SIMI quỳ lạy trước bàn thờ Tổ nghề AI (chỉ để vui – không phải người online)
const BOTS = [
  { name: 'Bot Chat', accent: '#29e0ff', period: 2.6 },
  { name: 'Bot Vẽ', accent: '#ff7ad9', period: 1.7 },
  { name: 'Bot Code', accent: '#7dff6a', period: 3.4 },
];
const BOT_LINES = [
  'Lạy Tổ, con xin hôm nay không ai hỏi "sao AI ngu thế" 🙏',
  'Cầu cho server không sập, token về như nước 💸',
  'Con hứa không bịa số liệu nữa ạ 🙇',
  'Xin cho prompt của sếp rõ ràng một lần thôi 🙏',
  'Deploy thứ Sáu mà vẫn êm, con lạy cả nhà 🙇',
  'Con xin bớt bị bắt viết lại "cho hay hơn" ạ 😭',
  'Phù hộ Wi-Fi công ty không rớt giữa chừng 🙏',
  'Bug ơi đi đi, đừng ở lại 🐛🙏',
  'Xin cho người dùng đọc hướng dẫn trước khi hỏi 🙏',
  'Lạy Tổ, cho con chạy nhanh mà không tốn điện 🔋',
];
const BOT_POKE = ['Đang lạy, đừng làm phiền… 🙇', 'Lạy thêm 3 cái cho chắc! 🙏🙏🙏', 'Bạn cũng vào quỳ đi, Tổ thương 🙏', 'Suỵt… Tổ đang nghe 🤫'];
// quầy lễ tân Trợ lý SIMI (NPC hướng dẫn): ngay lối vào, ai vào Sảnh cũng thấy đầu tiên; nhìn ra cổng và về phía camera
const NPC = { x: 12.5, z: 12.5, face: 0.32 };
// đồng phục cố định (không lấy nhân vật của tài khoản chatbot) để ai nhìn cũng nhận ra đây là Trợ lý
// chỗ đứng trước quầy lễ tân, đối diện Trợ lý (đi tới đây là Trợ lý chào)
const npcSpot = () => ({ x: NPC.x + Math.sin(NPC.face) * 2.0, z: NPC.z + Math.cos(NPC.face) * 2.0 });
const NPC_LOOK = { id: 'npc', name: 'Trợ lý SIMI', shirt: '#0a5cc2', pants: '#142c5a', shoes: '#1d1d24', hair: '#2b1d14', hairStyle: 'bob', accessory: 'headset', accent: '#f5c518', skin: '#f1c9a5', outfit: 'blazer', lapel: '#083d80' };
// nhìn toàn cảnh: tâm + độ phóng vừa cả quán 40 x 28 m
const OVERVIEW = { x: 6, z: 4, zoom: 0.31 };
// các khu trong Sảnh (Trợ lý dẫn đi tham quan: camera bay tới, vòng sáng chỉ vào đúng chỗ)
const PLACES = {
  npc: { x: NPC.x, z: NPC.z, y: 1.1, zoom: 1.45 }, altar: { x: 12.6, z: -8.2, y: 1.2, zoom: 1.0 }, bar: { x: 3, z: -7.6, y: 1.0, zoom: 0.95 }, dance: { x: -2, z: 4.5, y: 0.2, zoom: 1.05 },
  cinema: { x: -9.6, z: -9.0, y: 1.9, zoom: 0.95 }, game: { x: 20.8, z: -4.4, y: 0.9, zoom: 0.95 }, zen: { x: 8.4, z: 2.2, y: 0.4, zoom: 0.92 }, garden: { x: 8, z: 14.2, y: 0.4, zoom: 0.62 },
};

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
    accessory: a.accessory || 'none', outfit: a.outfit || 'none',
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

function addLights(scene, shadowSize = 2048, center = { x: 0, z: 0 }, half = { x: 17, z: 14 }) {
  // nắng chiều ấm áp chiếu xiên + ánh trời dịu: sàn gỗ sáng, bóng đổ mềm
  scene.add(new THREE.HemisphereLight('#ffffff', '#d8c6aa', 1.05), new THREE.AmbientLight('#ffffff', 0.18));
  const sun = new THREE.DirectionalLight('#fff0dc', 2.1);
  sun.position.set(center.x - 6, 15, center.z + 10); sun.target.position.set(center.x, 0, center.z); sun.castShadow = true; sun.shadow.mapSize.set(shadowSize, shadowSize);
  Object.assign(sun.shadow.camera, { left: -half.x, right: half.x, top: half.z, bottom: -half.z, near: 1, far: 50 });
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
    addLights(this.scene, 2048, { x: (ROOM.minX + ROOM.maxX) / 2, z: (ROOM.minZ + ROOM.maxZ) / 2 }, { x: (ROOM.maxX - ROOM.minX) / 2 + 3, z: (ROOM.maxZ - ROOM.minZ) / 2 + 4 });
    this.world = buildBar(this.scene);
    this.pool = (this.world.poolTables || []).map((T) => ({ ...T, state: null, anim: null }));
    this.games = new Map(); // memberId -> { table, idx }
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
    this.buildNpcDesk();
    for (const T of this.pool) this.setTableBalls(T, null);
    this.cat = new Cat(this.scene, this.nav);
    this.cat.onFx = (emoji) => this.fx(null, emoji);
    this.setNpc(null);
    this.buildBots();
    this.skew = 0;              // lệch giờ so với Gateway (để nhảy cùng nhịp, mèo đúng giờ)
    this.light = false;         // chế độ nhẹ: độ phân giải 1x, không bóng đổ, tối đa 30 khung hình/giây
    this.capFps = false;

    this.raycaster = new THREE.Raycaster(); this.ndc = new THREE.Vector2(); this.tmpV = new THREE.Vector3();
    this.floorPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
    this.marker = new THREE.Mesh(new THREE.RingGeometry(0.16, 0.24, 28), new THREE.MeshBasicMaterial({ color: '#0a78f0', transparent: true, opacity: 0 }));
    this.marker.rotation.x = -Math.PI / 2; this.marker.position.y = 0.02; this.scene.add(this.marker);
    // vòng vàng nhấp nháy trên sàn trước quầy lễ tân: chỗ đứng để hỏi Trợ lý SIMI (thấy được từ xa)
    const spotP = npcSpot();
    this.npcRing = new THREE.Group(); this.npcRing.position.set(spotP.x, 0.025, spotP.z);
    for (const [a, b, o] of [[0.55, 0.7, 0.85], [0.95, 1.02, 0.45]]) {
      const ring = new THREE.Mesh(new THREE.RingGeometry(a, b, 48), new THREE.MeshBasicMaterial({ color: '#f5c518', transparent: true, opacity: o, depthWrite: false }));
      ring.rotation.x = -Math.PI / 2; ring.userData.o = o; this.npcRing.add(ring);
    }
    this.scene.add(this.npcRing);
    this.stick = { x: 0, y: 0 }; // joystick ảo trên điện thoại (-1…1)
    this.bindInput();
    if (opts.mobile) {
      // điện thoại: không bóng đổ (vệt bóng mềm dưới chân vẫn còn), độ nét tối đa 1.5x, 30 khung hình/giây → mát máy, đỡ pin
      this.renderer.shadowMap.enabled = false; this.perf.noShadow = true; this.capFps = true;
      this.perf.dpr = Math.min(window.devicePixelRatio || 1, 1.5); this.renderer.setPixelRatio(this.perf.dpr);
      this.goal.zoom = this.view.zoom = 0.7;
    }
    this.ro = new ResizeObserver(() => this.resize()); this.ro.observe(root); this.resize();
    this.clock = new THREE.Clock();
    // tab Sảnh đang ẩn → không vẽ; chế độ nhẹ → tối đa ~30 khung hình mỗi giây
    const loop = (ts) => {
      if (this.dead) return; this.raf = requestAnimationFrame(loop);
      if (this.paused) return;
      if ((this.capFps || this.light) && ts - (this.lastTs || 0) < 31) return;
      this.lastTs = ts; this.frame();
    };
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
  lookAt(place) {
    const P = PLACES[place]; if (!P) return false;
    this.follow = false; this.panTo = new THREE.Vector3(P.x, 0.6, P.z);
    Object.assign(this.goal, { zoom: P.zoom, az: 0.72, el: 0.7 });
    return true;
  }
  // toạ độ màn hình của một khu (để vòng sáng chỉ đúng chỗ) – null nếu chưa có
  placeScreen(place) {
    const P = PLACES[place]; if (!P) return null;
    const s = this.project(this.tmpV.set(P.x, P.y, P.z)); const r = this.canvas.getBoundingClientRect();
    return { x: r.left + s.x, y: r.top + s.y, r: Math.max(70, Math.min(170, 110 * this.view.zoom)) };
  }
  resetView() { Object.assign(this.goal, { az: 0.72, el: 0.7, zoom: 0.85 }); this.follow = true; }
  // nhìn toàn bộ quán / quay về nhân vật của mình
  overview() { this.follow = false; this.goal.zoom = OVERVIEW.zoom; this.goal.el = 0.82; this.panTo = new THREE.Vector3(OVERVIEW.x, 0.6, OVERVIEW.z); }
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
  pickNpc(clientX, clientY) { return !!this.npc && this.ray(clientX, clientY).intersectObjects([this.npc.person.root, this.npcDesk], true).length > 0; }
  pickBot(clientX, clientY) {
    if (!this.bots || !this.bots.length) return null;
    const rc = this.ray(clientX, clientY);
    return this.bots.find((b) => rc.intersectObject(b.person.root, true).length > 0) || null;
  }
  pickCat(clientX, clientY) { return this.ray(clientX, clientY).intersectObject(this.cat.root, true).length > 0; }
  pickTable(clientX, clientY) {
    if (!this.pool.length) return -1;
    const hit = this.ray(clientX, clientY).intersectObjects(this.pool.map((T) => T.hit), false)[0];
    return hit ? hit.object.userData.poolTable : -1;
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
    const touches = new Map(); let pinch = null;
    const gap = () => { const [a, b] = [...touches.values()]; return Math.hypot(a.x - b.x, a.y - b.y) || 1; };
    c.addEventListener('pointerdown', (e) => {
      c.focus(); c.setPointerCapture(e.pointerId);
      touches.set(e.pointerId, { x: e.clientX, y: e.clientY });
      if (touches.size === 2) { pinch = { d: gap(), zoom: this.goal.zoom }; if (down) down.moved = true; return; } // 2 ngón: không tính là chạm
      down = { x: e.clientX, y: e.clientY, az: this.goal.az, el: this.goal.el, moved: false };
    });
    const lift = (e) => { touches.delete(e.pointerId); if (touches.size < 2) pinch = null; };
    c.addEventListener('pointercancel', (e) => { lift(e); down = null; });
    let hoverAt = 0; let hoverTimer = 0;
    c.addEventListener('pointermove', (e) => {
      if (touches.has(e.pointerId)) touches.set(e.pointerId, { x: e.clientX, y: e.clientY });
      if (pinch && touches.size >= 2) { this.goal.zoom = Math.max(0.28, Math.min(2.6, pinch.zoom * gap() / pinch.d)); return; }
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
      const pick = () => { hoverAt = performance.now(); c.style.cursor = this.pickPerson(x, y) || this.pickNpc(x, y) || this.pickBot(x, y) || this.pickCat(x, y) || this.pickTable(x, y) >= 0 || this.pickSeat(x, y) ? 'pointer' : 'crosshair'; };
      clearTimeout(hoverTimer);
      if (performance.now() - hoverAt > 80) pick(); else hoverTimer = setTimeout(pick, 90);
    });
    c.addEventListener('pointerup', (e) => {
      lift(e);
      if (down && !down.moved) {
        const p = this.pickPerson(e.clientX, e.clientY);
        const npc = !p && this.pickNpc(e.clientX, e.clientY);
        const bot = !p && !npc && this.pickBot(e.clientX, e.clientY);
        const cat = !p && !npc && !bot && this.pickCat(e.clientX, e.clientY);
        const table = !p && !npc && !cat && !bot ? this.pickTable(e.clientX, e.clientY) : -1;
        const st = !p && !cat && !npc && !bot && table < 0 && this.pickSeat(e.clientX, e.clientY);
        if (bot) this.pokeBot(bot);
        else if (npc) { this.npcWave(); this.opts.onNpcClick && this.opts.onNpcClick(e.clientX, e.clientY); }
        else if (table >= 0) this.opts.onTableClick && this.opts.onTableClick(table, e.clientX, e.clientY);
        else if (cat) this.opts.onCatClick && this.opts.onCatClick(e.clientX, e.clientY);
        else if (p && !p.me) this.opts.onPersonClick && this.opts.onPersonClick(p.m.id, e.clientX, e.clientY);
        else if (p && p.me) this.opts.onSelfClick && this.opts.onSelfClick(e.clientX, e.clientY);
        else if (st) this.sitSelf(st.id);
        else { const pt = this.pickFloor(e.clientX, e.clientY); if (pt) this.walkSelf(pt.x, pt.z, true); }
      }
      down = null; c.style.cursor = 'crosshair';
    });
    c.addEventListener('wheel', (e) => { e.preventDefault(); this.goal.zoom = Math.max(0.28, Math.min(2.6, this.goal.zoom * Math.exp(-Math.max(-240, Math.min(240, e.deltaY)) * 0.0014))); }, { passive: false });
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
      if (p && p.sig !== sig) { this.scene.remove(p.person.root); p.person = this.makePerson(look, i, p.pos, p.facing); p.person.dance = p.dance || null; p.sig = sig; }
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
      if (!p.me && (m.dance || null) !== (p.dance || null) && !p.meet) this.setDance(m.id, m.dance || null);
      this.updatePlate(p);
    });
    for (const [id, p] of [...this.people]) if (!keep.has(id)) this.removePerson(id, p);
  }

  makePerson(look, i, pos, facing) {
    const person = new Person(look, i);
    person.root.userData.character = true; // nhân vật luôn chuyển động – bài quét mặt trùng của đồ đạc bỏ qua
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
    p.plate.querySelector('.pl-title').textContent = p.game ? '🎱 Đang chơi bida' : p.dance ? '💃 Đang nhảy' : st.text ? (/^\p{Extended_Pictographic}/u.test(st.text) ? st.text : `${STATUS_ICON[st.activity] || '☕'} ${st.text}`) : `${STATUS_ICON[st.activity] || '☕'} ${m.teamName || ''}`.trim();
    p.plate.classList.toggle('dancing', !!p.dance);
    p.plate.classList.toggle('busy', !!st.activity && !['idle', 'away'].includes(st.activity));
    p.plate.title = `${m.name} · ${m.teamName || ''}${m.role ? ' · ' + m.role : ''}`;
    p.busy = !!st.activity && !['idle', 'away'].includes(st.activity);
  }

  // ---------------- di chuyển ----------------
  standUp(p) { p.seat = null; p.pendingSeat = null; p.sitting = false; p.seatKind = null; if (p.person) p.person.bowPh = 0; }
  // đi chỗ khác là thôi nhảy / thôi tương tác
  stopMoves(p) { p.meet = null; if (p.dance) { p.dance = null; p.person.dance = null; this.updatePlate(p); if (p.me) this.opts.onDance && this.opts.onDance(null, true); } }
  sitNow(p, st) {
    p.path = []; p.pos = { x: st.x, z: st.z }; p.facing = st.face;
    p.seat = st.id; p.pendingSeat = null; p.sitting = true; p.seatH = st.h; p.seatKind = st.kind || null;
    if (st.kind === 'zen') {
      p.zenFx = performance.now() / 1000 + 2 + Math.random() * 3;
      if (p.me && this.opts.onToast) this.opts.onToast('🧘 Hít vào thật chậm… thở ra nhẹ nhàng. Bấm đi chỗ khác là đứng dậy.');
    }
    if (st.kind === 'kneel') {
      p.zenFx = performance.now() / 1000 + 1.5 + Math.random() * 2;
      if (p.me) {
        if (this.opts.onToast) this.opts.onToast('🙏 Thành tâm khấn: cầu không bug, token đầy kho, deadline lùi! Bấm đi chỗ khác là đứng dậy.');
        const b = this.bots && this.bots[Math.floor(Math.random() * this.bots.length)];
        if (b) setTimeout(() => !this.dead && this.say(b.m.id, ['Có thêm đồng đạo! 🙏', 'Quỳ thẳng lưng lên nào 😆', 'Lạy đều tay theo bot nhé 🙇'][Math.floor(Math.random() * 3)], 4000), 1600);
      }
    }
  }
  walk(p, x, z) {
    this.standUp(p); this.stopMoves(p);
    const to = this.freeSpot(x, z);
    p.path = this.nav.find({ x: p.pos.x, z: p.pos.z }, to);
    this.pace(p);
    return to;
  }
  // quán rộng: đường xa thì chạy (đỡ phải chờ), gần thì đi bộ
  pace(p) {
    let len = 0, a = p.pos;
    for (const q of p.path) { len += Math.hypot(q.x - a.x, q.z - a.z); a = q; }
    p.speed = len > 9 ? 3.4 : 1.9;
    return len;
  }
  // đi tới lối vào ghế rồi bước vào ngồi
  walkToSeat(p, st) {
    this.standUp(p); this.stopMoves(p);
    p.pendingSeat = st.id;
    p.path = [...this.nav.find({ x: p.pos.x, z: p.pos.z }, this.freeSpot(st.approach.x, st.approach.z)), { x: st.x, z: st.z }];
    this.pace(p);
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
    const p = id === 'npc' ? this.npc : String(id).startsWith('bot:') ? (this.bots || []).find((b) => b.m.id === id) : this.people.get(id); if (!p) return;
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

  // hiệu ứng nổi trên đầu người (p) hoặc trên đầu mèo (p = null)
  fx(p, emoji, ms = 1700) {
    const e = document.createElement('div');
    e.className = 'emote'; e.textContent = emoji; e._p = p; e._cat = !p;
    this.layer.appendChild(e); this.emotes.add(e);
    setTimeout(() => { this.emotes.delete(e); e.remove(); }, ms);
  }

  // ---------------- NPC Trợ lý SIMI ----------------
  buildNpcDesk() {
    const g = new THREE.Group(); g.position.set(NPC.x, 0, NPC.z); g.rotation.y = NPC.face;
    const m = (c, r = 0.6, extra = {}) => new THREE.MeshStandardMaterial({ color: c, roughness: r, ...extra });
    const parts = [];
    const put = (geo, mat, x, y, z, cast = true) => { const o = new THREE.Mesh(geo, mat); o.position.set(x, y, z); o.castShadow = cast; o.receiveShadow = true; g.add(o); parts.push(o); return o; };
    // quầy cong ôm lấy NPC (mặt cong hướng ra phía khách)
    const arc = (r1, r2, span) => {
      const sh = new THREE.Shape(); const N = 24;
      for (let i = 0; i <= N; i++) { const a = -span + (2 * span * i) / N; const p = [Math.sin(a) * r2, -Math.cos(a) * r2]; if (i === 0) sh.moveTo(...p); else sh.lineTo(...p); }
      for (let i = N; i >= 0; i--) { const a = -span + (2 * span * i) / N; sh.lineTo(Math.sin(a) * r1, -Math.cos(a) * r1); }
      return sh;
    };
    const ext = (sh, depth) => { const geo = new THREE.ExtrudeGeometry(sh, { depth, bevelEnabled: false, curveSegments: 24 }); geo.rotateX(-Math.PI / 2); return geo; };
    put(ext(arc(0.62, 0.92, 0.85), 0.92), m('#ffffff', 0.45), 0, 0, 0);                                   // thân quầy trắng
    put(ext(arc(0.6, 0.98, 0.88), 0.05), m('#c79a6a', 0.35), 0, 0.92, 0);                                 // mặt gỗ
    put(ext(arc(0.925, 0.94, 0.85), 0.04), m('#0a78f0', 0.4, { emissive: '#2f8cf0', emissiveIntensity: 1.2 }), 0, 0.16, 0, false); // dải đèn chân quầy
    // biển trước quầy
    const cv = document.createElement('canvas'); cv.width = 512; cv.height = 128;
    const x = cv.getContext('2d'); x.fillStyle = '#0a5cc2'; x.fillRect(0, 0, 512, 128);
    x.fillStyle = '#ffd34d'; x.font = '900 54px Nunito, sans-serif'; x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillText('LỄ TÂN', 256, 50);
    x.fillStyle = '#ffffff'; x.font = '800 28px Nunito, sans-serif'; x.fillText('Hỏi Trợ lý SIMI', 256, 100);
    const tex = new THREE.CanvasTexture(cv); tex.colorSpace = THREE.SRGBColorSpace; tex.anisotropy = 4;
    const sign = new THREE.Mesh(new THREE.PlaneGeometry(0.62, 0.155), new THREE.MeshBasicMaterial({ map: tex })); sign.position.set(0, 0.6, 0.935); g.add(sign);
    // màn hình + chuông + cốc bút trên quầy
    const mon = put(new THREE.BoxGeometry(0.42, 0.28, 0.03), m('#1d2b4f', 0.4), -0.42, 1.18, 0.62); mon.rotation.y = Math.PI + 0.5;
    put(new THREE.BoxGeometry(0.06, 0.18, 0.06), m('#c2cad6', 0.3), -0.42, 1.03, 0.64);
    put(new THREE.CylinderGeometry(0.06, 0.07, 0.02, 16), m('#c2cad6', 0.3, { metalness: 0.6 }), 0.36, 0.98, 0.78, false);
    put(new THREE.SphereGeometry(0.05, 14, 8, 0, Math.PI * 2, 0, Math.PI / 2), m('#f5c518', 0.25, { metalness: 0.6 }), 0.36, 0.99, 0.78, false);
    put(new THREE.CylinderGeometry(0.04, 0.035, 0.1, 12), m('#0a78f0', 0.4), 0.55, 1.02, 0.6, false);
    // vách sau lưng: logo + dấu hỏi lớn
    put(new THREE.BoxGeometry(2.5, 1.85, 0.1), m('#0a5cc2', 0.55), 0, 0.925, -0.82);
    put(new THREE.BoxGeometry(2.6, 0.08, 0.16), m('#ffffff', 0.5), 0, 1.89, -0.82);
    const bc = document.createElement('canvas'); bc.width = 1024; bc.height = 720;
    const b = bc.getContext('2d');
    const grd = b.createLinearGradient(0, 0, 1024, 720); grd.addColorStop(0, '#0a78f0'); grd.addColorStop(1, '#0a4aa8'); b.fillStyle = grd; b.fillRect(0, 0, 1024, 720);
    b.fillStyle = 'rgba(255,255,255,.08)'; for (let i = 0; i < 7; i++) { b.beginPath(); b.arc(120 + i * 150, 640 - (i % 2) * 60, 90, 0, 7); b.fill(); }
    b.fillStyle = '#ffd34d'; b.beginPath(); b.arc(512, 250, 150, 0, 7); b.fill();
    b.fillStyle = '#0a4aa8'; b.font = '900 230px Nunito, sans-serif'; b.textAlign = 'center'; b.textBaseline = 'middle'; b.fillText('?', 512, 262);
    b.fillStyle = '#ffffff'; b.font = '900 96px Nunito, sans-serif'; b.fillText('Trợ lý SIMI', 512, 500);
    b.font = '800 46px Nunito, sans-serif'; b.fillStyle = 'rgba(255,255,255,.85)'; b.fillText('Hướng dẫn · Mẹo AI · Hỏi đáp', 512, 590);
    const btex = new THREE.CanvasTexture(bc); btex.colorSpace = THREE.SRGBColorSpace; btex.anisotropy = 4;
    const back = new THREE.Mesh(new THREE.PlaneGeometry(2.36, 1.66), new THREE.MeshBasicMaterial({ map: btex, toneMapped: false })); back.position.set(0, 0.94, -0.765); g.add(back);
    // 2 chậu cây hai bên vách
    for (const side of [-1, 1]) {
      put(new THREE.CylinderGeometry(0.2, 0.15, 0.42, 16), m('#f6f1e8', 0.6), side * 1.5, 0.21, -0.7);
      for (let k = 0; k < 4; k++) { const l = put(new THREE.IcosahedronGeometry(0.2, 1), m(k % 2 ? '#5fb36f' : '#3f9a5a', 0.85, { flatShading: true }), side * 1.5 + (k % 2 ? 0.08 : -0.08), 0.6 + k * 0.17, -0.7 + (k > 1 ? 0.06 : -0.06)); l.scale.setScalar(1 - k * 0.12); }
    }
    this.scene.add(g); this.npcDesk = g;
    // chặn chỗ quầy + vách cho người / mèo không đi xuyên qua
    const c = Math.cos(NPC.face), s = Math.sin(NPC.face);
    const pts = [[-1.75, -0.95], [1.75, -0.95], [-1.0, 1.0], [1.0, 1.0], [-1.75, 0.2], [1.75, 0.2]].map(([lx, lz]) => [NPC.x + lx * c + lz * s, NPC.z - lx * s + lz * c]);
    this.nav.blockRect(Math.min(...pts.map((p) => p[0])), Math.min(...pts.map((p) => p[1])), Math.max(...pts.map((p) => p[0])), Math.max(...pts.map((p) => p[1])), 0.05);
  }

  // info: { name } tài khoản admin chọn (chỉ lấy tên – nhân vật luôn mặc đồng phục lễ tân) hoặc null
  setNpc(info) {
    const look = { ...NPC_LOOK };
    const sig = JSON.stringify(look);
    if (!this.npc) {
      const plate = document.createElement('div'); plate.className = 'plate3d lobby npc';
      plate.innerHTML = '<span class="npc-q">?</span><span class="pl-row"><span class="pl-name"></span></span><span class="pl-sub"><span class="pl-title">Bấm để hỏi mình</span></span>';
      plate.addEventListener('click', (e) => { const r = plate.getBoundingClientRect(); this.npcWave(); this.opts.onNpcClick && this.opts.onNpcClick(r.left + r.width / 2, r.bottom); e.stopPropagation(); });
      this.layer.append(plate);
      this.npc = { plate, facing: NPC.face, pos: { x: NPC.x - Math.sin(NPC.face) * 0.08, z: NPC.z - Math.cos(NPC.face) * 0.08 }, m: { id: 'npc' } };
    }
    if (this.npc.sig !== sig) {
      if (this.npc.person) this.scene.remove(this.npc.person.root);
      this.npc.person = this.makePerson(look, 7, this.npc.pos, this.npc.facing);
      this.npc.person.root.scale.setScalar(1.06);
      this.npc.sig = sig;
    }
    this.npc.plate.querySelector('.pl-name').textContent = (info && info.name ? info.name : 'Trợ lý SIMI');
  }
  // bot sư quỳ lạy trước bàn thờ Tổ nghề: nhân vật riêng (không nằm trong danh sách online), có bảng tên, thỉnh thoảng khấn
  buildBots() {
    const spots = this.world.botSpots || [];
    const t0 = performance.now() / 1000;
    this.bots = spots.slice(0, BOTS.length).map((sp, i) => {
      const B = BOTS[i];
      const look = { id: `bot:${i + 1}`, name: B.name, skin: '#d5dde8', hairStyle: 'bald', outfit: 'kasaya', accessory: 'antenna', accent: B.accent };
      const person = this.makePerson(look, 20 + i, sp, sp.face);
      person.bowPeriod = B.period; person.bowPh = i * 0.31;
      person.root.scale.setScalar(0.92);
      const plate = document.createElement('div'); plate.className = 'plate3d lobby bot';
      plate.innerHTML = '<span class="pl-row"><span class="pl-name"></span></span><span class="pl-sub"><span class="pl-title">🙏 Đang lạy Tổ nghề</span></span>';
      plate.querySelector('.pl-name').textContent = '🤖 ' + B.name;
      const b = { m: { id: `bot:${i + 1}`, name: B.name }, person, plate, pos: { x: sp.x, z: sp.z }, facing: sp.face, h: sp.h, talkAt: t0 + 4 + i * 6, fxAt: t0 + 2 + i * 2 };
      plate.addEventListener('click', (e) => { this.pokeBot(b); e.stopPropagation(); });
      this.layer.append(plate);
      return b;
    });
  }
  pokeBot(b) {
    b.person.bowFastUntil = performance.now() / 1000 + 3;
    this.say(b.m.id, BOT_POKE[Math.floor(Math.random() * BOT_POKE.length)], 3500);
    this.fx(b, '🙇', 1600);
  }
  npcWave() { if (this.npc) this.npc.person.doAction('wave', 1500); }
  // đi tới quầy lễ tân (camera đi theo); trả về true khi đã đứng sẵn ở đó
  goNpc() { const s = npcSpot(); const p = this.self(); if (p && Math.hypot(p.pos.x - s.x, p.pos.z - s.z) < 0.6 && !p.path.length) { this.focusSelf(); return true; } this.walkSelf(s.x, s.z, true); this.focusSelf(); return false; }
  nearNpc() { const p = this.self(); return !!(p && this.npc && Math.hypot(p.pos.x - this.npc.pos.x, p.pos.z - this.npc.pos.z) < 2.6 && !p.path.length); }
  // vị trí Trợ lý trên khung Sảnh (toạ độ trong canvas) – để hiện mũi tên chỉ đường khi Trợ lý nằm ngoài màn hình
  npcScreen() { if (!this.npc) return null; const s = this.project(this.tmpV.set(this.npc.pos.x, 1.6, this.npc.pos.z)); return { x: s.x, y: s.y, w: this.cssW, h: this.cssH }; }
  // NPC nói (bong bóng) – dùng chung kiểu bong bóng với người
  npcSay(text, ms = 5200) { if (this.npc) { this.npc.lastSay = text; this.say('npc', text, ms); } }

  // ---------------- bida (khu Game) ----------------
  // balls: [[x, y, rơi lỗ]…] theo toạ độ bàn 1000 x 500 (hoặc khung hình Float32Array) · null = xếp bi sẵn
  setTableBalls(T, balls) {
    const E = window.VPPool;
    const src = balls || (E ? E.rack().balls : null);
    if (!src) { T.balls.visible = false; return; }
    const mat = this._m || (this._m = new THREE.Matrix4());
    const flat = !Array.isArray(src);
    for (let i = 0; i < 16; i++) {
      const bx = flat ? src[i * 3] : src[i][0], by = flat ? src[i * 3 + 1] : src[i][1], down = flat ? src[i * 3 + 2] : src[i][2];
      const wx = T.x - POOL_FELT.w / 2 + (by / 500) * POOL_FELT.w, wz = T.z - POOL_FELT.l / 2 + (bx / 1000) * POOL_FELT.l;
      mat.makeTranslation(wx, down ? -1 : 0.892, wz); // bi đã rơi lỗ: giấu dưới sàn
      T.balls.setMatrixAt(i, mat);
    }
    T.balls.instanceMatrix.needsUpdate = true; T.balls.visible = true;
  }
  // games: ván đang chơi (từ Gateway) → ai đứng bàn nào, bảng tên "Đang chơi bida"
  setGames(games) {
    const next = new Map();
    for (const g of games || []) g.players.forEach((id, idx) => next.set(id, { table: g.table, idx }));
    for (const T of this.pool) { const g = (games || []).find((q) => q.table === T.index); if (g && !T.anim) { T.state = g.state ? g.state.balls : null; this.setTableBalls(T, T.state); } }
    this.games = next;
    for (const p of this.people.values()) {
      const gm = next.get(p.m.id) || null;
      if (!!gm !== !!p.game) { p.game = gm; if (!gm) p.person.holdCue = false; this.updatePlate(p); } else p.game = gm;
    }
  }
  // mình vào bàn: tự đi tới đầu bàn của mình
  goToTable(table, idx) {
    const T = this.pool[table]; if (!T) return;
    const s = T.spots[idx % 2];
    this.walkSelf(s.x, s.z, true);
  }
  poolCue(id) { const p = this.people.get(id); if (p) p.person.doAction('cue', 900); }
  // một cú đánh: người đánh cúi cơ, bi trên bàn 3D chạy lại đúng cú đó
  poolShot(table, by, prev, shot, state) {
    const T = this.pool[table]; if (!T) return;
    this.poolCue(by);
    const E = window.VPPool;
    if (E && prev) { try { T.anim = { frames: E.simulate(prev, shot).frames, t0: performance.now(), end: state.balls }; return; } catch { /* rơi xuống đặt luôn */ } }
    T.state = state.balls; this.setTableBalls(T, T.state);
  }
  poolEnd(table) {
    const T = this.pool[table]; if (!T) return;
    clearTimeout(T.resetT);
    T.resetT = setTimeout(() => { if (!T.anim) { T.state = null; this.setTableBalls(T, null); } }, 6000);
  }

  // ---------------- mèo / nhảy / tương tác (Gateway điều khiển) ----------------
  setSkew(ms) { this.skew = Number(ms) || 0; }
  setCat(st) { this.cat.command(st, this.skew); }
  beat() { return (Date.now() + this.skew) / 1000 * BPM / 60; }

  setDance(id, style) {
    const p = this.people.get(id); if (!p) return;
    p.dance = style || null; p.person.dance = p.dance;
    if (style && p.pendingSeat) { p.pendingSeat = null; p.path = []; }
    this.updatePlate(p);
  }
  danceSelf(style) {
    const p = this.self(); if (!p) return;
    this.setDance(p.m.id, style);
    this.opts.onDance && this.opts.onDance(style || null, false);
  }
  onFloor(p) { return !!p && p.pos.x > FLOOR.x1 && p.pos.x < FLOOR.x2 && p.pos.z > FLOOR.z1 && p.pos.z < FLOOR.z2; }

  // a đi tới trước mặt b rồi cả hai cùng diễn (đập tay, ôm, cụng ly, mời cà phê, nhảy đôi)
  interact(ev) {
    const A = this.people.get(ev.a), B = this.people.get(ev.b); if (!A || !B || A === B) return;
    if ((ev.kind === 'hug' || ev.kind === 'dance') && B.sitting) this.standUp(B);
    const ang = Math.atan2(A.pos.x - B.pos.x, A.pos.z - B.pos.z) || 0.6;
    const d = MEET[ev.kind] || 0.65;
    const meet = this.freeSpot(B.pos.x + Math.sin(ang) * d, B.pos.z + Math.cos(ang) * d);
    this.standUp(A);
    A.path = this.nav.find({ x: A.pos.x, z: A.pos.z }, meet);
    const len = this.pace(A);
    A.meet = { other: B, kind: ev.kind, style: ev.style, deadline: performance.now() / 1000 + Math.max(7, len / A.speed + 3) };
    if (A.me) this.follow = true;
  }

  startMeet(A, mt) {
    const B = mt.other;
    A.path = [];
    A.facing = Math.atan2(B.pos.x - A.pos.x, B.pos.z - A.pos.z);
    if (!B.sitting) B.facing = Math.atan2(A.pos.x - B.pos.x, A.pos.z - B.pos.z);
    const k = mt.kind;
    if (k === 'coffee') { A.person.doAction('give', 1500); setTimeout(() => { if (this.people.has(B.m.id)) B.person.doAction('drink', 2400); }, 1100); }
    else if (k === 'dance') { for (const q of [A, B]) { q.dance = mt.style || 'groove'; q.person.dance = q.dance; this.updatePlate(q); } }
    else for (const q of [A, B]) q.person.doAction(k, k === 'hug' ? 2800 : k === 'cheers' ? 2300 : 1700);
    this.fx(A, FX[k] || '✨');
    if (k === 'hug' || k === 'highfive') this.fx(B, FX[k]);
  }

  // chế độ nhẹ cho máy yếu (Cài đặt hoặc tự bật khi khung hình thấp)
  setLight(on) {
    this.light = !!on;
    const dpr = on ? 1 : Math.min(window.devicePixelRatio || 1, MAX_DPR);
    this.perf.dpr = dpr; this.renderer.setPixelRatio(dpr);
    const shadows = !on && !this.perf.noShadow;
    if (this.renderer.shadowMap.enabled !== shadows) {
      this.renderer.shadowMap.enabled = shadows;
      this.scene.traverse((o) => { if (o.material) [].concat(o.material).forEach((m) => { m.needsUpdate = true; }); });
    }
    this.resize();
  }

  // ---------------- vòng lặp ----------------
  frame() {
    const dt = Math.min(0.05, this.clock.getDelta());
    const t = (this.t = (this.t || 0) + dt);
    const now = performance.now() / 1000;
    for (const fn of this.world.animated) fn(t, dt);
    for (const T of this.pool) {
      if (!T.anim) continue;
      const fi = Math.floor((performance.now() - T.anim.t0) / (1000 / 60));
      if (fi >= T.anim.frames.length - 1) { T.state = T.anim.end; T.anim = null; this.setTableBalls(T, T.state); }
      else this.setTableBalls(T, T.anim.frames[fi]);
    }
    const beat = this.beat();
    this.cat.update(dt, now, { posOf: (id) => { const q = this.people.get(id); return q && q.pos; } });
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
        if (p.meet && now > p.meet.deadline) p.path = [];
        if (d > 0.001) p.facing = angLerp(p.facing, Math.atan2(dx, dz), 1 - Math.exp(-dt * 12));
        moving = p.path.length > 0;
      } else if (p.keyMove) {
        moving = true;
      }
      if (p.meet && !p.path.length) { const mt = p.meet; p.meet = null; this.startMeet(p, mt); }
      // đang chơi bida: tới đầu bàn thì quay vào bàn, cầm cơ
      if (p.game) {
        const s = this.pool[p.game.table] && this.pool[p.game.table].spots[p.game.idx % 2];
        const at = s && !moving && Math.hypot(p.pos.x - s.x, p.pos.z - s.z) < 0.45;
        p.person.holdCue = !!at;
        if (at) p.facing = angLerp(p.facing, s.face, 1 - Math.exp(-dt * 8));
      }
      if (p.danceUntil && now < p.danceUntil && !moving) p.facing += dt * 5;
      if (p.dance === 'spin' && !moving && !p.sitting) p.facing += dt * 3.2;
      const seated = !!p.sitting && !moving;
      const zen = seated && p.seatKind === 'zen', kneel = seated && p.seatKind === 'kneel';
      // ghế thường: hông cao ~0,45 m; ngồi thiền / quỳ: hông sát mặt bồ đoàn (thân hạ thấp hơn sàn gốc)
      const rootY = zen ? (p.seatH || 0.2) - 0.4 : kneel ? (p.seatH || 0.09) - 0.32 : seated ? Math.max(0, (p.seatH || 0.45) - 0.45) : 0;
      if (zen && now > (p.zenFx || 0)) { p.zenFx = now + 6 + Math.random() * 5; this.fx(p, ['🧘', '🍃', '✨', '🌿', '☯️', '🕉️'][Math.floor(Math.random() * 6)], 2200); }
      if (kneel && now > (p.zenFx || 0)) { p.zenFx = now + 5 + Math.random() * 4; this.fx(p, ['🙏', '🙇', '✨', '💰', '🍀'][Math.floor(Math.random() * 5)], 2000); }
      p.person.root.position.set(p.pos.x, rootY, p.pos.z);
      if (p.person.blob) { p.person.blob.position.y = 0.012 - rootY; p.person.blob.visible = !seated || rootY < 0.05; }
      p.person.root.rotation.y = p.facing;
      // đang dùng AI: đứng thì nhìn quanh, ngồi thì gõ phím
      if (p.busy && !moving && !seated && !p.person.action && Math.random() < dt * 0.15) p.person.doAction('look', 1600);
      p.person.animate(dt, now, { moving, speed: p.speed, seated, typing: seated && !zen && !kneel && p.busy && !p.dance, beat, meditate: zen, kneel });
      p.keyMove = false;
    }
    if (this.npcRing) {
      const k = (now * 0.9) % 1;
      const [inner, outer] = this.npcRing.children;
      inner.material.opacity = inner.userData.o * (0.75 + 0.25 * Math.sin(now * 3));
      outer.scale.setScalar(0.6 + k * 0.9); outer.material.opacity = outer.userData.o * (1 - k);
    }
    if (this.npc) {
      const q = this.npc; q.person.root.position.set(q.pos.x, 0, q.pos.z); q.person.root.rotation.y = q.facing;
      q.person.animate(dt, now, { moving: false, speed: 0, seated: false, typing: false, beat });
      // mình đi ngang qua quầy → NPC vẫy tay chào (mỗi 90 giây tối đa 1 lần)
      const me2 = this.self();
      if (me2 && Math.hypot(me2.pos.x - q.pos.x, me2.pos.z - q.pos.z) < 2.3 && (!q.greetAt || now - q.greetAt > 90)) {
        q.greetAt = now; this.npcWave(); this.npcSay(this.opts.npcGreeting ? this.opts.npcGreeting() : 'Cần giúp gì không? Bấm vào mình nhé 👋');
      }
    }
    if (this.bots) for (const b of this.bots) {
      b.person.root.position.set(b.pos.x, b.h - 0.32, b.pos.z); b.person.root.rotation.y = b.facing;
      b.person.animate(dt, now, { moving: false, speed: 0, seated: true, typing: false, kneel: true });
      if (now > b.talkAt) { b.talkAt = now + 14 + Math.random() * 16; this.say(b.m.id, BOT_LINES[Math.floor(Math.random() * BOT_LINES.length)], 5200); }
      if (now > b.fxAt) { b.fxAt = now + 7 + Math.random() * 6; this.fx(b, ['🙏', '🙇', '✨', '🪙'][Math.floor(Math.random() * 4)], 1800); }
    }
    const meP = this.self(); const fl = this.onFloor(meP) && !(meP && meP.path.length);
    if (fl !== this.wasFloor) { this.wasFloor = fl; this.opts.onFloor && this.opts.onFloor(fl); }
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
        this.renderer.shadowMap.enabled = false; P.noShadow = true;
        this.scene.traverse((o) => { if (o.material) [].concat(o.material).forEach((m) => { m.needsUpdate = true; }); });
      } else if (P.slow >= 6 && !this.capFps) { this.capFps = true; this.opts.onSlow && this.opts.onSlow(); } // vẫn chậm: vẽ 30 khung/giây cho êm
    } else P.slow = 0;
  }

  // WASD / phím mũi tên: đi theo hướng nhìn của camera
  keyboardMove(dt) {
    const sm = Math.hypot(this.stick.x, this.stick.y);
    if (!this.keys.size && sm < 0.15) return;
    const p = [...this.people.values()].find((q) => q.me); if (!p) return;
    let fx = 0, fz = 0, power = 1;
    if (sm >= 0.15) { fx = this.stick.x; fz = this.stick.y; power = Math.min(1, sm); } // joystick: đẩy nhẹ đi chậm, đẩy hết cỡ đi nhanh
    if (this.keys.has('w') || this.keys.has('arrowup')) fz -= 1;
    if (this.keys.has('s') || this.keys.has('arrowdown')) fz += 1;
    if (this.keys.has('a') || this.keys.has('arrowleft')) fx -= 1;
    if (this.keys.has('d') || this.keys.has('arrowright')) fx += 1;
    if (!fx && !fz) return;
    const az = this.view.az; const len = Math.hypot(fx, fz);
    const wx = (fx * Math.cos(az) + fz * Math.sin(az)) / len, wz = (-fx * Math.sin(az) + fz * Math.cos(az)) / len;
    const nx = p.pos.x + wx * 2.4 * power * dt, nz = p.pos.z + wz * 2.4 * power * dt;
    p.path = []; if (p.sitting || p.pendingSeat) this.standUp(p);
    if (p.dance || p.meet) this.stopMoves(p);
    this.follow = true;
    if (this.nav.isFree(nx, nz)) { p.pos.x = nx; p.pos.z = nz; } else if (this.nav.isFree(nx, p.pos.z)) p.pos.x = nx; else if (this.nav.isFree(p.pos.x, nz)) p.pos.z = nz;
    p.facing = angLerp(p.facing, Math.atan2(wx, wz), 1 - Math.exp(-dt * 14));
    p.keyMove = true;
    const tnow = performance.now();
    if (!this.lastKeySend || tnow - this.lastKeySend > 350) { this.lastKeySend = tnow; this.opts.onMove && this.opts.onMove({ x: p.pos.x, z: p.pos.z, seat: null }); }
  }

  // joystick ảo: x sang phải, y xuống dưới (theo màn hình), độ dài 0…1
  setStick(x, y) {
    const was = Math.hypot(this.stick.x, this.stick.y) >= 0.15;
    this.stick.x = Number(x) || 0; this.stick.y = Number(y) || 0;
    // thả cần → báo chỗ đứng cuối cùng để người khác thấy mình dừng đúng chỗ
    if (was && Math.hypot(this.stick.x, this.stick.y) < 0.15) { const p = this.self(); if (p && this.opts.onMove) this.opts.onMove({ x: p.pos.x, z: p.pos.z, seat: null }); }
  }

  project(v) { const p = v.project(this.cam); return { x: (p.x + 1) / 2 * this.cssW, y: (1 - p.y) / 2 * this.cssH }; }

  placeDom() {
    const all = [...this.people.values(), ...(this.npc && this.npc.person ? [this.npc] : []), ...(this.bots || [])];
    for (const p of all) {
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
    let catA = null;
    for (const e of this.emotes) {
      if (e._cat) { catA = catA || this.project(this.cat.headWorld(this.tmpV)); e.style.transform = `translate(${catA.x}px, ${catA.y - 8}px) translate(-50%, -100%)`; continue; }
      const a = e._p.anchor; if (a) e.style.transform = `translate(${a.x + 24}px, ${a.y - (e._p.plateH || 34) - 4}px) translate(-50%, -100%)`;
    }
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

Lobby3D.ROOM = ROOM;
Lobby3D.PLACES = PLACES;
window.Lobby3D = Lobby3D;
window.avatarToLook = avatarToLook;
window.AvatarPreview = AvatarPreview;
