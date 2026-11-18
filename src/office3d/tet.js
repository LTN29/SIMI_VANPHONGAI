// Trang trí Tết cho Sảnh và Văn phòng 3D: chậu mai vàng, chậu đào hồng (treo bao lì xì), cây quất, đèn lồng đỏ đung đưa,
// câu đối, băng rôn «Chúc Mừng Năm Mới», cánh mai / đào bay trong sân. Toàn bộ dựng bằng code (không tải mô hình),
// hoa và quả vẽ bằng InstancedMesh → mỗi cây chỉ vài lần vẽ.
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

// Mùng 1 Tết (dương lịch). Tự bật từ 12 tuần trước Tết tới rằm tháng Giêng.
const TET = { 2027: [2, 6, 'Đinh Mùi'], 2028: [1, 26, 'Mậu Thân'], 2029: [2, 13, 'Kỷ Dậu'], 2030: [2, 3, 'Canh Tuất'], 2031: [1, 23, 'Tân Hợi'], 2032: [2, 11, 'Nhâm Tý'] };
const DAY = 86400000;
export function nextTet(now = new Date()) {
  for (const y of Object.keys(TET).map(Number).sort()) {
    const [m, d, name] = TET[y];
    const at = new Date(y, m - 1, d);
    if (now.getTime() <= at.getTime() + 15 * DAY) return { year: y, at, name };
  }
  return null;
}
// pref: 'on' | 'off' | 'auto' (mặc định)
export function tetOn(pref, now = new Date()) {
  if (pref === 'on') return true;
  if (pref === 'off') return false;
  const t = nextTet(now);
  return !!t && now.getTime() >= t.at.getTime() - 84 * DAY;
}

const mats = new Map();
const std = (color, rough = 0.7, extra = {}) => {
  const k = color + rough + JSON.stringify(extra);
  if (!mats.has(k)) mats.set(k, new THREE.MeshStandardMaterial({ color, roughness: rough, metalness: 0, ...extra }));
  return mats.get(k);
};
const RED = '#d7261e', GOLD = '#f5c518';

function canvasTex(w, h, draw) {
  const c = document.createElement('canvas'); c.width = w; c.height = h;
  draw(c.getContext('2d'), w, h);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4;
  return t;
}
function rng(seed) { let s = seed >>> 0; return () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296); }

// chậu men đỏ viền vàng (có chữ Phúc)
function pot(g, r, h) {
  const body = new THREE.Mesh(new THREE.CylinderGeometry(r, r * 0.72, h, 20), std('#b3201a', 0.35));
  body.position.y = h / 2; body.castShadow = true; body.receiveShadow = true; g.add(body);
  for (const y of [h - 0.02, 0.05]) { const rim = new THREE.Mesh(new THREE.TorusGeometry(y > 0.1 ? r : r * 0.74, 0.022, 6, 24), std(GOLD, 0.3, { metalness: 0.4 })); rim.rotation.x = Math.PI / 2; rim.position.y = y; g.add(rim); }
  const soil = new THREE.Mesh(new THREE.CylinderGeometry(r * 0.92, r * 0.92, 0.02, 20), std('#4a3426', 0.95));
  soil.position.y = h - 0.03; g.add(soil);
  const phuc = new THREE.Mesh(new THREE.CircleGeometry(r * 0.38, 24), phucMat || (phucMat = new THREE.MeshStandardMaterial({ map: phucTex(), roughness: 0.4, transparent: true })));
  phuc.position.set(0, h * 0.52, r * 0.88); phuc.rotation.x = -0.08; g.add(phuc);
}
let _phuc = null, phucMat = null;
function phucTex() {
  return _phuc || (_phuc = canvasTex(128, 128, (g, w) => {
    g.fillStyle = GOLD; g.beginPath(); g.arc(w / 2, w / 2, w / 2 - 2, 0, Math.PI * 2); g.fill();
    g.fillStyle = RED; g.font = 'bold 54px "Segoe UI", Arial, sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText('福', w / 2, w / 2 + 4);
  }));
}

// cây hoa: thân + cành cong, hoa / nụ là InstancedMesh, có thể treo bao lì xì
function blossomTree({ kind = 'mai', h = 1.7, seed = 1, envelopes = 6 } = {}) {
  const g = new THREE.Group(); const R = rng(seed);
  const potH = 0.42 * h / 1.7, potR = 0.3 * h / 1.7;
  pot(g, potR, potH);
  const bark = std(kind === 'mai' ? '#5b3a24' : '#4a2c22', 0.9);
  const tips = [];
  const branch = (x0, y0, z0, len, ang, tilt, depth) => {
    const dir = new THREE.Vector3(Math.sin(tilt) * Math.cos(ang), Math.cos(tilt), Math.sin(tilt) * Math.sin(ang));
    const end = new THREE.Vector3(x0, y0, z0).addScaledVector(dir, len);
    const r0 = 0.045 * Math.pow(0.62, depth) * h / 1.7 + 0.006;
    const m = new THREE.Mesh(new THREE.CylinderGeometry(r0 * 0.65, r0, len, 6), bark);
    m.position.set((x0 + end.x) / 2, (y0 + end.y) / 2, (z0 + end.z) / 2);
    m.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir); m.castShadow = true; g.add(m);
    tips.push({ p: end.clone(), d: depth, from: new THREE.Vector3(x0, y0, z0) });
    if (depth < 3) {
      const n = depth === 0 ? 4 : 2 + (R() < 0.5 ? 1 : 0);
      for (let i = 0; i < n; i++) branch(end.x, end.y, end.z, len * (0.62 + R() * 0.15), ang + (i / n) * Math.PI * 2 + R() * 0.9, Math.min(1.25, tilt + 0.35 + R() * 0.35), depth + 1);
    }
  };
  branch(0, potH - 0.02, 0, h * 0.36, R() * 6, 0.12, 0);
  // hoa dọc các cành nhỏ
  const cols = kind === 'mai' ? ['#ffd21f', '#ffc400', '#ffe066', '#ffb000'] : ['#ff8fb8', '#ffb3cf', '#ff6fa3', '#ffd0e0'];
  const pts = [];
  for (const t of tips) if (t.d >= 1) for (let k = 0; k < (t.d === 3 ? 7 : 4); k++) pts.push(t.from.clone().lerp(t.p, 0.25 + R() * 0.8).add(new THREE.Vector3((R() - 0.5) * 0.06, (R() - 0.5) * 0.06, (R() - 0.5) * 0.06)));
  const fl = new THREE.InstancedMesh(new THREE.IcosahedronGeometry(0.034 * h / 1.7, 0), new THREE.MeshStandardMaterial({ roughness: 0.6, emissive: kind === 'mai' ? '#5a3c00' : '#4a1028', emissiveIntensity: 0.35 }), pts.length);
  const M = new THREE.Matrix4(), q = new THREE.Quaternion(), s = new THREE.Vector3(), c = new THREE.Color();
  pts.forEach((p, i) => { const k = 0.7 + R() * 0.7; s.set(k, k * 0.6, k); q.setFromEuler(new THREE.Euler(R() * 3, R() * 3, R() * 3)); M.compose(p, q, s); fl.setMatrixAt(i, M); fl.setColorAt(i, c.set(cols[i % cols.length])); });
  fl.castShadow = true; g.add(fl);
  // nụ xanh / lá non (mai có lá xanh non lấm tấm)
  if (kind === 'mai') {
    const leafPts = pts.filter(() => R() < 0.25);
    const lv = new THREE.InstancedMesh(new THREE.SphereGeometry(0.022 * h / 1.7, 6, 4), std('#7cc142', 0.8), leafPts.length);
    leafPts.forEach((p, i) => { M.compose(p.clone().add(new THREE.Vector3(0.02, 0.01, 0)), q.identity(), s.set(1.4, 0.5, 0.8)); lv.setMatrixAt(i, M); });
    g.add(lv);
  }
  // bao lì xì treo ở đầu cành
  const ends = tips.filter((t) => t.d === 2).sort(() => R() - 0.5).slice(0, envelopes);
  const env = std(RED, 0.5), envGold = std(GOLD, 0.3, { metalness: 0.4 });
  for (const t of ends) {
    const e = new THREE.Group(); e.position.copy(t.p).add(new THREE.Vector3(0, -0.07, 0)); e.rotation.y = R() * Math.PI;
    const b = new THREE.Mesh(new THREE.BoxGeometry(0.07, 0.11, 0.012), env); b.castShadow = true; e.add(b);
    const st = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.012, 0.014), envGold); st.position.y = 0.02; e.add(st);
    g.add(e);
  }
  g.userData.top = h;
  return g;
}

// cây quất: tán tròn xanh + quả cam
function kumquat({ h = 1.2, seed = 3 } = {}) {
  const g = new THREE.Group(); const R = rng(seed);
  pot(g, 0.26, 0.36);
  const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.04, 0.4, 6), std('#5b3a24', 0.9)); trunk.position.y = 0.55; g.add(trunk);
  const leafM = std('#2f7d3a', 0.85, { flatShading: true });
  for (let k = 0; k < 5; k++) {
    const l = new THREE.Mesh(new THREE.IcosahedronGeometry(0.26, 1), leafM);
    l.position.set((R() - 0.5) * 0.25, 0.85 + R() * 0.3, (R() - 0.5) * 0.25); l.scale.setScalar(0.9 + R() * 0.3); l.castShadow = true; g.add(l);
  }
  const fr = new THREE.InstancedMesh(new THREE.SphereGeometry(0.035, 8, 6), std('#ff8a00', 0.4, { emissive: '#6a2a00', emissiveIntensity: 0.3 }), 40);
  const M = new THREE.Matrix4();
  for (let i = 0; i < 40; i++) {
    const a = R() * Math.PI * 2, y = 0.7 + R() * 0.55, rr = 0.33 - Math.abs(y - 0.97) * 0.45;
    M.makeTranslation(Math.cos(a) * rr, y, Math.sin(a) * rr); fr.setMatrixAt(i, M);
  }
  g.add(fr);
  return g;
}

// đèn lồng đỏ đung đưa: mọi đèn lồng của cảnh vẽ chung bằng 3 InstancedMesh (thân đỏ, phần vàng, dây + nan)
let _lanternParts = null;
function lanternParts() {
  if (_lanternParts) return _lanternParts;
  const g = new THREE.Group();
  const dark = std('#7a1410', 0.7), gold = std(GOLD, 0.35, { metalness: 0.4 });
  const cord = new THREE.Mesh(new THREE.CylinderGeometry(0.006, 0.006, 0.3, 4), dark); cord.position.y = -0.15; g.add(cord);
  const body = new THREE.Mesh(new THREE.SphereGeometry(0.17, 18, 12), std(RED, 0.45, { emissive: '#ff3b1f', emissiveIntensity: 0.55 }));
  body.scale.set(1, 0.82, 1); body.position.y = -0.44; body.castShadow = true; g.add(body);
  for (let k = 0; k < 6; k++) { const rib = new THREE.Mesh(new THREE.TorusGeometry(0.171, 0.006, 4, 20), dark); rib.position.y = -0.44; rib.scale.set(1, 0.82, 1); rib.rotation.y = (k / 6) * Math.PI; g.add(rib); }
  for (const y of [-0.29, -0.59]) { const cap = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.07, 0.04, 12), gold); cap.position.y = y; g.add(cap); }
  const tassel = new THREE.Mesh(new THREE.ConeGeometry(0.035, 0.2, 8), gold); tassel.position.y = -0.72; tassel.rotation.x = Math.PI; g.add(tassel);
  compact(g);
  _lanternParts = g.children.map((m) => ({ geo: m.geometry, mat: m.material, cast: m.castShadow }));
  return _lanternParts;
}
function lanterns() {
  const list = [];
  const api = {
    add(x, y, z, s = 1) { list.push({ x, y, z, s, ph: list.length * 0.9 }); },
    finish(parent) {
      if (!list.length) return;
      api.meshes = lanternParts().map(({ geo, mat, cast }) => { const m = new THREE.InstancedMesh(geo, mat, list.length); m.castShadow = cast; m.frustumCulled = false; parent.add(m); return m; });
      api.tick(0);
    },
    tick(t) {
      if (!api.meshes) return;
      const M = new THREE.Matrix4(), q = new THREE.Quaternion(), e = new THREE.Euler(), p = new THREE.Vector3(), sc = new THREE.Vector3();
      list.forEach((l, i) => {
        q.setFromEuler(e.set(Math.cos(t * 1.1 + l.ph) * 0.04, 0, Math.sin(t * 1.4 + l.ph) * 0.07));
        M.compose(p.set(l.x, l.y, l.z), q, sc.setScalar(l.s));
        for (const m of api.meshes) m.setMatrixAt(i, M);
      });
      for (const m of api.meshes) m.instanceMatrix.needsUpdate = true;
    },
  };
  return api;
}

// tranh chữ: băng rôn ngang / câu đối dọc (nền đỏ, chữ vàng)
function scrollTex(lines, w, h, { vertical = false, sub = '' } = {}) {
  return canvasTex(w, h, (g) => {
    const grd = g.createLinearGradient(0, 0, 0, h); grd.addColorStop(0, '#e2332a'); grd.addColorStop(1, '#b51912');
    g.fillStyle = grd; g.fillRect(0, 0, w, h);
    g.strokeStyle = GOLD; g.lineWidth = Math.max(4, w * 0.012); g.strokeRect(g.lineWidth * 2, g.lineWidth * 2, w - g.lineWidth * 4, h - g.lineWidth * 4);
    g.fillStyle = '#ffd94a'; g.textAlign = 'center'; g.textBaseline = 'middle';
    g.shadowColor = 'rgba(80,0,0,.45)'; g.shadowOffsetY = 3; g.shadowBlur = 4;
    if (vertical) {
      const n = lines.length; const step = (h - w * 0.5) / n;
      g.font = `bold ${Math.round(Math.min(w * 0.42, step * 0.62))}px "Segoe UI", Arial, sans-serif`;
      lines.forEach((t, i) => g.fillText(t, w / 2, w * 0.25 + step * (i + 0.5)));
    } else {
      g.font = `bold ${Math.round(h * (sub ? 0.38 : 0.5))}px "Segoe UI", Arial, sans-serif`;
      g.fillText(lines[0], w / 2, h * (sub ? 0.4 : 0.52));
      if (sub) { g.font = `600 ${Math.round(h * 0.2)}px "Segoe UI", Arial, sans-serif`; g.fillText(sub, w / 2, h * 0.76); }
      // hoa mai nhỏ 2 góc
      for (const x of [h * 0.45, w - h * 0.45]) for (let p = 0; p < 5; p++) {
        const a = (p / 5) * Math.PI * 2; g.fillStyle = '#ffd21f'; g.beginPath(); g.arc(x + Math.cos(a) * h * 0.1, h / 2 + Math.sin(a) * h * 0.1, h * 0.08, 0, Math.PI * 2); g.fill();
      }
    }
  });
}
function plaque(lines, w, h, opts) {
  const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshStandardMaterial({ map: scrollTex(lines, Math.round(w * 256), Math.round(h * 256), opts), roughness: 0.6, emissive: '#3a0000', emissiveIntensity: 0.25 }));
  return m;
}

// cánh hoa bay trong một vùng (x1..x2, z1..z2)
function petals(x1, x2, z1, z2, n = 90) {
  const R = rng(77);
  const pos = new Float32Array(n * 3), col = new Float32Array(n * 3), sp = [];
  const c = new THREE.Color();
  for (let i = 0; i < n; i++) {
    pos.set([x1 + R() * (x2 - x1), R() * 4, z1 + R() * (z2 - z1)], i * 3);
    c.set(i % 2 ? '#ffd21f' : '#ff9ac0'); col.set([c.r, c.g, c.b], i * 3);
    sp.push({ v: 0.25 + R() * 0.35, w: R() * 6, a: 0.3 + R() * 0.5 });
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3)); geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
  const pts = new THREE.Points(geo, new THREE.PointsMaterial({ size: 0.07, vertexColors: true, transparent: true, opacity: 0.9, depthWrite: false }));
  pts.frustumCulled = false;
  const tick = (t, dt = 0.016) => {
    const a = geo.attributes.position.array;
    for (let i = 0; i < n; i++) {
      const s = sp[i];
      a[i * 3 + 1] -= s.v * dt;
      a[i * 3] += Math.sin(t * 1.3 + s.w) * s.a * dt;
      a[i * 3 + 2] += Math.cos(t * 0.9 + s.w) * s.a * 0.5 * dt;
      if (a[i * 3 + 1] < 0.02) { a[i * 3 + 1] = 3.6 + R() * 0.6; a[i * 3] = x1 + R() * (x2 - x1); a[i * 3 + 2] = z1 + R() * (z2 - z1); }
    }
    geo.attributes.position.needsUpdate = true;
  };
  return { pts, tick };
}

// gộp mọi mesh thường trong nhóm theo vật liệu (giữ InstancedMesh / Points) → cả chục cây + đèn lồng chỉ còn vài chục lần vẽ
function compact(group) {
  group.updateMatrixWorld(true);
  const inv = new THREE.Matrix4().copy(group.matrixWorld).invert();
  const by = new Map(); const gone = []; const m4 = new THREE.Matrix4();
  group.traverse((o) => {
    if (!o.isMesh || o.isInstancedMesh) return;
    const g = o.geometry.index ? o.geometry.toNonIndexed() : o.geometry.clone();
    for (const k of Object.keys(g.attributes)) if (!['position', 'normal', 'uv'].includes(k)) g.deleteAttribute(k);
    if (!g.attributes.uv) g.setAttribute('uv', new THREE.Float32BufferAttribute(new Float32Array(g.attributes.position.count * 2), 2));
    g.applyMatrix4(m4.multiplyMatrices(inv, o.matrixWorld));
    const key = o.material.uuid + '|' + o.castShadow;
    if (!by.has(key)) by.set(key, { mat: o.material, cast: o.castShadow, geos: [] });
    by.get(key).geos.push(g); gone.push(o);
  });
  gone.forEach((o) => o.parent.remove(o));
  for (const { mat, cast, geos } of by.values()) {
    const merged = mergeGeometries(geos, false); if (!merged) continue;
    const mesh = new THREE.Mesh(merged, mat); mesh.castShadow = cast; mesh.receiveShadow = true; group.add(mesh);
  }
  return group;
}

const free = (obstacles, x, z, r) => !obstacles.some(([a, b, c, d]) => x + r > a && x - r < c && z + r > b && z - r < d);

// ================= Sảnh =================
// lay: { minX, maxX, minZ, maxZ, inZ, cinemaX, barX, gate: {x, z, half} }
export function buildTetLobby(scene, out, lay) {
  const root = new THREE.Group(); root.name = 'tet'; scene.add(root);
  const still = new THREE.Group(); root.add(still); // đồ đứng yên → gộp cuối hàm
  const lan = lanterns();
  const place = (obj, x, z, r, ry = 0) => {
    if (!free(out.obstacles, x, z, r)) return false;
    obj.position.set(x, 0, z); obj.rotation.y = ry; still.add(obj);
    out.obstacles.push([x - r, z - r, x + r, z + r]);
    return true;
  };
  // cổng vào: mai bên trái, đào bên phải (sát chân cột, không chắn lối đi)
  const { gate } = lay;
  place(blossomTree({ kind: 'mai', h: 2.0, seed: 11, envelopes: 8 }), gate.x - gate.half + 0.05, gate.z - 0.75, 0.34);
  place(blossomTree({ kind: 'dao', h: 2.0, seed: 23, envelopes: 8 }), gate.x + gate.half - 0.05, gate.z - 0.75, 0.34);
  // đèn lồng dưới xà cổng
  for (const dx of [-1.3, 1.3]) {
    lan.add(gate.x + dx, 2.78, gate.z, 1.1);
  }
  // câu đối hai bên màn chiếu (trên 2 loa)
  const cy = 2.35, wz = lay.minZ + 0.06;
  const left = plaque(['Xuân', 'an', 'khang', 'thịnh', 'vượng'], 0.42, 1.9, { vertical: true });
  left.position.set(lay.cinemaX - 3.0, cy, wz); still.add(left);
  const right = plaque(['Tết', 'sum', 'vầy', 'phát', 'tài'], 0.42, 1.9, { vertical: true });
  right.position.set(lay.cinemaX + 3.0, cy, wz); still.add(right);
  // băng rôn trên mảng tường quầy bar
  const t = nextTet();
  const banner = plaque(['Chúc Mừng Năm Mới'], 3.8, 0.62, { sub: t ? `Xuân ${t.name} ${t.year} · An khang thịnh vượng` : 'An khang thịnh vượng' });
  banner.position.set(lay.barX, 3.2, lay.minZ + 0.07); still.add(banner);
  // đèn lồng dọc tường sau (giữa quầy bar và màn chiếu)
  for (const x of [lay.barX + 3.3, lay.barX + 4.9, lay.barX + 6.5]) lan.add(x, 3.45, lay.minZ + 0.45, 0.95);
  // quất + mai trong nhà (chỗ trống gần lối ra sân)
  const spots = [[lay.minX + 1.0, lay.inZ - 0.9, 'quat'], [lay.minX + 1.0, lay.inZ - 2.6, 'mai'], [lay.cinemaX - 3.6, lay.minZ + 1.2, 'dao'], [lay.cinemaX + 3.6, lay.minZ + 1.2, 'quat']];
  spots.forEach(([x, z, k], i) => place(k === 'quat' ? kumquat({ seed: 40 + i }) : blossomTree({ kind: k, h: 1.6, seed: 60 + i, envelopes: 4 }), x, z, 0.3, i));
  // đèn lồng treo dưới các ô dù ngoài sân
  for (const [ux, uz] of lay.umbrellas || []) for (const a of [0.6, 0.6 + Math.PI]) {
    lan.add(ux + Math.cos(a) * 1.2, 2.28, uz + Math.sin(a) * 1.2, 0.7);
  }
  // đèn lồng treo cạnh các cột đèn vườn (cành ngang nhỏ)
  for (const [lx, lz] of lay.lamps || []) {
    const arm = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.03, 0.03), std('#2b2b33', 0.4)); arm.position.set(lx + 0.21, 1.95, lz); still.add(arm);
    lan.add(lx + 0.4, 1.95, lz, 0.75);
  }
  // mai lớn ở vài chỗ trống trong nhà (chỉ đặt chỗ nào còn trống)
  [[-12.9, 3.6, 'mai'], [5.4, 9.1, 'dao'], [-3.6, 9.1, 'mai'], [24.6, 9.0, 'mai'], [-12.9, -6.5, 'dao']].forEach(([x, z, k], i) => place(blossomTree({ kind: k, h: 2.3, seed: 90 + i, envelopes: 7 }), x, z, 0.36, i * 1.3));
  // cánh mai / đào bay ngoài sân
  const pt = petals(lay.minX + 1, lay.maxX - 1, lay.inZ + 0.5, lay.maxZ - 0.6, 110);
  root.add(pt.pts);
  compact(still); lan.finish(root);
  out.animated.push((time, dt) => {
    lan.tick(time);
    pt.tick(time, Math.min(0.05, dt || 0.016));
  });
  out.tet = root;
  return root;
}

// ================= Văn phòng =================
// lay: { minX, maxX, minZ, maxZ, wallH, door: {x} }
// avoid: vật cản sẵn có (đồ đạc, bàn) để không đặt chậu đè lên; obstacles: nơi ghi thêm vật cản mới cho tìm đường
export function buildTetOffice(scene, out, lay, avoid = [], obstacles = []) {
  const root = new THREE.Group(); root.name = 'tet'; scene.add(root);
  const still = new THREE.Group(); root.add(still);
  const lan = lanterns();
  const place = (obj, x, z, r) => {
    if (!free([...avoid, ...obstacles], x, z, r)) return false;
    obj.position.set(x, 0, z); still.add(obj);
    obstacles.push([x - r, z - r, x + r, z + r]);
    return true;
  };
  place(blossomTree({ kind: 'dao', h: 1.75, seed: 5, envelopes: 6 }), lay.door.x + 1.05, lay.minZ + 0.5, 0.3);
  place(blossomTree({ kind: 'mai', h: 1.75, seed: 9, envelopes: 6 }), lay.maxX - 0.55, lay.minZ + 1.8, 0.3);
  place(kumquat({ seed: 13 }), lay.maxX - 0.5, lay.maxZ - 1.6, 0.28);
  // đèn lồng trên tường sau
  for (const x of [lay.minX + 3.0, -1.4, 1.8, lay.maxX - 1.9]) lan.add(x, lay.wallH - 0.05, lay.minZ + 0.35, 0.8);
  // băng rôn trên tường trái
  const t = nextTet();
  const banner = plaque(['Chúc Mừng Năm Mới'], 2.7, 0.5, { sub: t ? `Xuân ${t.name} ${t.year}` : '' });
  banner.position.set(lay.minX + 0.06, lay.wallH - 0.38, 0.6); banner.rotation.y = Math.PI / 2; still.add(banner);
  compact(still); lan.finish(root);
  out.animated.push((time) => lan.tick(time));
  out.tet = root;
  return root;
}
