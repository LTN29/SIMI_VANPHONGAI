// SIMI BAR CHILL – sảnh online rộng 28 x 20 m, tông sáng: sàn gỗ sồi, tường kem, mảng tường xanh đậm sau quầy cho biển neon nổi bật.
// Quầy bar + ghế cao, khu bàn ăn, lounge sofa, sàn nhảy, góc DJ, bàn bi-a, cửa sổ, cây xanh, đèn thả.
// Hiệu năng: đồ vật đứng yên được gộp theo vật liệu (vài chục lần vẽ thay vì hàng trăm), đèn dây + sàn nhảy dùng InstancedMesh,
// không dùng đèn điểm (PointLight) – vùng sáng dưới đèn là "vệt sáng" vẽ sẵn.
// Trả về chỗ ngồi (seats), vật cản cho tìm đường, các hàm hoạt cảnh.
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

export const BAR = { minX: -14, maxX: 14, minZ: -10, maxZ: 10, wallH: 3.6 };

// ---------- vật liệu dùng chung (cùng vật liệu → gộp được) ----------
const MATS = new Map();
const std = (color, rough = 0.75, extra = {}) => {
  const key = JSON.stringify([color, rough, extra.metalness || 0, extra.emissive || '', extra.emissiveIntensity || 0, extra.side || 0, !!extra.flatShading]);
  if (!MATS.has(key)) MATS.set(key, new THREE.MeshStandardMaterial({ color, roughness: rough, metalness: 0, ...extra }));
  return MATS.get(key);
};
const glow = (color, k = 1.6) => std(color, 0.4, { emissive: color, emissiveIntensity: k });

function canvasTex(w, h, draw) {
  const c = document.createElement('canvas'); c.width = w; c.height = h;
  draw(c.getContext('2d'), w, h);
  const tex = new THREE.CanvasTexture(c); tex.colorSpace = THREE.SRGBColorSpace; tex.anisotropy = 8;
  return tex;
}
function rng(seed) { let s = seed >>> 0; return () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296); }

// sàn gỗ sồi sáng, ván so le, vân gỗ nhẹ
function floorTex() {
  const R = rng(21);
  const tex = canvasTex(1024, 1024, (g, w, h) => {
    const rowH = 64;
    for (let y = 0; y < h; y += rowH) {
      let x = -Math.floor(R() * 360);
      while (x < w) {
        const len = 260 + Math.floor(R() * 260);
        const v = R();
        g.fillStyle = `rgb(${Math.round(232 + v * 12)},${Math.round(208 + v * 12)},${Math.round(170 + v * 14)})`;
        g.fillRect(x, y, len, rowH);
        // vân gỗ
        g.strokeStyle = 'rgba(165,120,75,.10)'; g.lineWidth = 1.2;
        for (let k = 0; k < 4; k++) {
          const yy = y + 8 + R() * (rowH - 16);
          g.beginPath(); g.moveTo(x, yy);
          for (let xx = x; xx < x + len; xx += 40) g.lineTo(xx, yy + Math.sin(xx * 0.02 + k) * 2.5);
          g.stroke();
        }
        g.fillStyle = 'rgba(140,100,60,.22)'; g.fillRect(x, y, 2, rowH);
        x += len;
      }
      g.fillStyle = 'rgba(140,100,60,.25)'; g.fillRect(0, y, w, 2);
    }
  });
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping; tex.repeat.set(4, 2.9);
  return tex;
}

// thảm sáng có viền
function rugTex(base, border, dot) {
  return canvasTex(512, 512, (g, w, h) => {
    g.fillStyle = base; g.fillRect(0, 0, w, h);
    g.strokeStyle = border; g.lineWidth = 22; g.strokeRect(26, 26, w - 52, h - 52);
    g.lineWidth = 4; g.strokeRect(54, 54, w - 108, h - 108);
    g.fillStyle = dot;
    for (let y = 100; y < h - 90; y += 44) for (let x = 100 + ((y / 44) % 2) * 22; x < w - 90; x += 44) { g.beginPath(); g.arc(x, y, 5, 0, 7); g.fill(); }
  });
}

// màn chiếu lúc chưa có video
function cinemaIdleTex() {
  return canvasTex(1024, 576, (g, w, h) => {
    const bg = g.createLinearGradient(0, 0, w, h); bg.addColorStop(0, '#141a33'); bg.addColorStop(1, '#2a1f45');
    g.fillStyle = bg; g.fillRect(0, 0, w, h);
    g.fillStyle = 'rgba(255,255,255,.06)'; for (let i = 0; i < 9; i++) { g.beginPath(); g.arc(120 + i * 110, 470 - (i % 3) * 30, 60 + (i % 4) * 14, 0, Math.PI * 2); g.fill(); }
    g.textAlign = 'center'; g.fillStyle = '#ffffff';
    g.font = '900 86px Nunito, sans-serif'; g.fillText('🎬 SIMI CINEMA', w / 2, h / 2 - 20);
    g.font = '700 34px Nunito, sans-serif'; g.fillStyle = 'rgba(255,255,255,.75)';
    g.fillText('Bấm "🎬 Màn chiếu" và dán link YouTube', w / 2, h / 2 + 50);
    g.fillText('để cả quán cùng xem', w / 2, h / 2 + 95);
  });
}

// cửa sổ: bầu trời + mây + toà nhà xa
function windowTex() {
  return canvasTex(512, 640, (g, w, h) => {
    const sky = g.createLinearGradient(0, 0, 0, h);
    sky.addColorStop(0, '#7fbcf2'); sky.addColorStop(0.65, '#cfe6fb'); sky.addColorStop(1, '#f5efe2');
    g.fillStyle = sky; g.fillRect(0, 0, w, h);
    g.fillStyle = 'rgba(255,255,255,.85)';
    for (const [x, y, r] of [[120, 120, 40], [170, 110, 52], [220, 128, 36], [360, 220, 30], [400, 210, 42]]) { g.beginPath(); g.arc(x, y, r, 0, 7); g.fill(); }
    const R = rng(9);
    for (let x = 0; x < w; x += 46 + R() * 30) {
      const bh = 120 + R() * 220; const bw = 40 + R() * 40;
      g.fillStyle = `rgba(${90 + R() * 40},${120 + R() * 40},${160 + R() * 40},.55)`; g.fillRect(x, h - bh, bw, bh);
      g.fillStyle = 'rgba(255,255,255,.45)';
      for (let yy = h - bh + 12; yy < h - 10; yy += 18) for (let xx = x + 6; xx < x + bw - 6; xx += 12) g.fillRect(xx, yy, 5, 8);
    }
  });
}

function neonTex() {
  return canvasTex(1024, 256, (g, w, h) => {
    g.clearRect(0, 0, w, h);
    g.font = '900 118px "Nunito", "Segoe UI", sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle';
    for (const [blur, col] of [[38, '#2f8cf0'], [18, '#7cc4ff'], [0, '#ffffff']]) { g.shadowColor = '#2f8cf0'; g.shadowBlur = blur; g.fillStyle = col; g.fillText('SIMI BAR', w / 2 - 110, h / 2 + 4); }
    g.font = 'italic 900 92px "Nunito", "Segoe UI", sans-serif';
    for (const [blur, col] of [[34, '#ff4fa3'], [14, '#ff9ccf'], [0, '#fff3fa']]) { g.shadowColor = '#ff4fa3'; g.shadowBlur = blur; g.fillStyle = col; g.fillText('chill', w / 2 + 300, h / 2 + 10); }
  });
}

// bảng menu phấn
function menuTex() {
  return canvasTex(512, 640, (g, w, h) => {
    g.fillStyle = '#26332e'; g.fillRect(0, 0, w, h);
    g.fillStyle = '#f7f3e8'; g.textAlign = 'center';
    g.font = '900 64px "Nunito", "Segoe UI", sans-serif'; g.fillText('MENU', w / 2, 92);
    g.font = '700 34px "Nunito", "Segoe UI", sans-serif'; g.textAlign = 'left';
    [['Cà phê sữa đá', '25k'], ['Trà đào cam sả', '35k'], ['Matcha latte', '39k'], ['Soda chanh dây', '32k'], ['Bánh mì AI ✨', '20k']].forEach(([n, p], i) => {
      g.fillStyle = '#f7f3e8'; g.fillText(n, 46, 190 + i * 82);
      g.fillStyle = '#ffd26a'; g.textAlign = 'right'; g.fillText(p, w - 46, 190 + i * 82); g.textAlign = 'left';
    });
    g.strokeStyle = 'rgba(247,243,232,.5)'; g.lineWidth = 3; g.strokeRect(18, 18, w - 36, h - 36);
  });
}

// vệt sáng tròn trên sàn (thay cho đèn điểm)
let poolTexCache = null;
function poolTex() {
  if (poolTexCache) return poolTexCache;
  poolTexCache = canvasTex(256, 256, (g, w) => {
    const gr = g.createRadialGradient(w / 2, w / 2, 0, w / 2, w / 2, w / 2);
    gr.addColorStop(0, 'rgba(255,255,255,.95)'); gr.addColorStop(0.45, 'rgba(255,255,255,.35)'); gr.addColorStop(1, 'rgba(255,255,255,0)');
    g.fillStyle = gr; g.fillRect(0, 0, w, w);
  });
  return poolTexCache;
}
function lightPool(scene, x, z, r, color, opacity = 0.35) {
  const m = new THREE.Mesh(new THREE.PlaneGeometry(r * 2, r * 2), new THREE.MeshBasicMaterial({ map: poolTex(), color, transparent: true, opacity, depthWrite: false, blending: THREE.AdditiveBlending, toneMapped: false }));
  m.rotation.x = -Math.PI / 2; m.position.set(x, 0.015, z); m.renderOrder = 2; scene.add(m);
  return m;
}

function loadTex(url, cb) { new THREE.TextureLoader().load(url, (t) => { t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8; cb(t); }, undefined, () => {}); }

export function buildBar(scene) {
  const out = { animated: [], seats: [], obstacles: [], seatMeshes: [] };
  const statics = []; // mesh đứng yên → gộp cuối hàm
  const add = (geo, mat, x, y, z, parent = scene, { cast = true, receive = true } = {}) => {
    const m = new THREE.Mesh(geo, mat); m.position.set(x, y, z); m.castShadow = cast; m.receiveShadow = receive;
    parent.add(m); statics.push(m); return m;
  };
  const box = (w, h, d, r = 0) => (r > 0 ? new RoundedBoxGeometry(w, h, d, 2, Math.min(r, w / 2 - 0.001, h / 2 - 0.001, d / 2 - 0.001)) : new THREE.BoxGeometry(w, h, d));
  const block = (x1, z1, x2, z2) => out.obstacles.push([Math.min(x1, x2), Math.min(z1, z2), Math.max(x1, x2), Math.max(z1, z2)]);
  const W = BAR.maxX - BAR.minX, D = BAR.maxZ - BAR.minZ;
  const flat = { cast: false };

  // ---------- nền: tấm đế + sàn gỗ sáng ----------
  add(box(W + 0.7, 0.5, D + 0.7, 0.12), std('#e8dfd1', 0.85), 0, -0.26, 0, scene, { cast: false, receive: true });
  add(box(W + 0.75, 0.08, D + 0.75, 0.03), std('#d3c4ae', 0.8), 0, -0.47, 0, scene, flat);
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(W, D), new THREE.MeshStandardMaterial({ color: '#ffffff', roughness: 0.62, map: floorTex() }));
  floor.rotation.x = -Math.PI / 2; floor.position.y = 0.001; floor.receiveShadow = true; scene.add(floor);
  out.floor = floor;

  // ---------- tường kem + ốp chân tường gỗ, mảng tường xanh đậm sau quầy ----------
  const wallM = std('#f6f0e6', 0.95), wainM = std('#e3d5bf', 0.8), trimM = std('#b98d5e', 0.5), baseM = std('#9b7048', 0.6);
  add(box(W + 0.2, BAR.wallH, 0.22), wallM, 0, BAR.wallH / 2, BAR.minZ - 0.11, scene, flat);
  add(box(0.22, BAR.wallH, D), wallM, BAR.minX - 0.11, BAR.wallH / 2, 0, scene, flat);
  add(box(W, 1.0, 0.05), wainM, 0, 0.5, BAR.minZ + 0.025, scene, flat);
  add(box(0.05, 1.0, D), wainM, BAR.minX + 0.025, 0.5, 0, scene, flat);
  add(box(W, 0.06, 0.09), trimM, 0, 1.02, BAR.minZ + 0.045, scene, flat);
  add(box(0.09, 0.06, D), trimM, BAR.minX + 0.045, 1.02, 0, scene, flat);
  add(box(W - 0.02, 0.12, 0.07), baseM, 0, 0.06, BAR.minZ + 0.035, scene, flat);
  add(box(0.07, 0.12, D - 0.02), baseM, BAR.minX + 0.035, 0.06, 0, scene, flat);
  add(box(W + 0.22, 0.12, 0.3, 0.03), std('#ffffff', 0.6), 0, BAR.wallH + 0.06, BAR.minZ - 0.08, scene, flat); // gờ trên tường
  add(box(0.3, 0.12, D, 0.03), std('#ffffff', 0.6), BAR.minX - 0.08, BAR.wallH + 0.06, 0, scene, flat);
  // ô kẻ dọc trên ốp tường
  for (let x = BAR.minX + 0.6; x < BAR.maxX; x += 0.6) add(box(0.02, 0.83, 0.02), trimM, x, 0.545, BAR.minZ + 0.06, scene, flat); // bắt đầu trên gờ chân tường (0.12) – không chạm mặt gờ
  for (let z = BAR.minZ + 0.6; z < BAR.maxZ; z += 0.6) add(box(0.02, 0.83, 0.02), trimM, BAR.minX + 0.06, 0.545, z, scene, flat);

  // ---------- quầy bar (dọc tường sau) ----------
  const cx1 = -3, cx2 = 9, cz = -8.1;
  const cmid = (cx1 + cx2) / 2;
  // mảng tường xanh đậm: mặt trước nhô hơn tấm ốp chân tường 5 mm (trùng mặt phẳng → 2 lớp tranh nhau hiện, chớp sọc khi xoay camera)
  add(box(cx2 - cx1 + 1.6, BAR.wallH - 0.02, 0.07), std('#1d2b4f', 0.9), cmid, BAR.wallH / 2, BAR.minZ + 0.02, scene, flat);
  add(box(cx2 - cx1, 1.05, 0.72, 0.06), std('#8a5a3b', 0.55), cmid, 0.525, cz);
  for (let x = cx1 + 0.25; x < cx2 - 0.1; x += 0.28) add(box(0.12, 0.86, 0.04, 0.015), std('#a8724c', 0.5), x, 0.53, cz + 0.37, scene, flat); // nan gỗ mặt quầy
  add(box(cx2 - cx1 + 0.24, 0.07, 0.92, 0.03), std('#f6f3ee', 0.22, { metalness: 0.05 }), cmid, 1.09, cz + 0.05); // mặt đá
  add(box(cx2 - cx1, 0.04, 0.04), glow('#4aa8ff', 2.4), cmid, 0.1, cz + 0.39, scene, flat); // đèn led chân quầy
  add(box(cx2 - cx1, 0.03, 0.4), std('#b9c2cf', 0.3, { metalness: 0.6 }), cmid, 0.06, cz + 0.6, scene, flat); // gác chân
  block(cx1 - 0.1, cz - 0.5, cx2 + 0.1, cz + 0.45);
  block(cx1 - 0.1, BAR.minZ, cx2 + 0.1, cz); // phía sau quầy
  // kệ rượu gỗ + chai nhiều màu
  const R = rng(5);
  const bottleCols = ['#ff6fb5', '#4aa8ff', '#ffd34d', '#45d2b4', '#ff9a52', '#c3a6ff', '#ff5a5f', '#9fd6ff'];
  const bottleGeo = new THREE.CylinderGeometry(0.05, 0.06, 1, 12);
  const capGeo = new THREE.CylinderGeometry(0.018, 0.022, 0.08, 8);
  for (let row = 0; row < 3; row++) {
    const y = 1.45 + row * 0.55;
    add(box(cx2 - cx1 - 0.4, 0.05, 0.34, 0.015), std('#c79a6a', 0.5), cmid, y, BAR.minZ + 0.22, scene, flat);
    add(box(cx2 - cx1 - 0.4, 0.035, 0.03), glow('#ffd8a0', 1.0), cmid, y - 0.04, BAR.minZ + 0.37, scene, flat); // đèn hắt dưới kệ
    for (let x = cx1 + 0.2; x < cx2 - 0.3; x += 0.32 + R() * 0.2) {
      const col = bottleCols[Math.floor(R() * bottleCols.length)]; const hgt = 0.22 + R() * 0.14;
      const b = add(bottleGeo, std(col, 0.18, { emissive: col, emissiveIntensity: 0.25 }), x, y + hgt / 2 + 0.03, BAR.minZ + 0.22, scene, flat);
      b.scale.y = hgt;
      add(capGeo, std('#2b2b33'), x, y + hgt + 0.07, BAR.minZ + 0.22, scene, flat);
    }
  }
  // biển neon SIMI BAR chill
  const neon = new THREE.Mesh(new THREE.PlaneGeometry(4.6, 1.15), new THREE.MeshBasicMaterial({ map: neonTex(), transparent: true, toneMapped: false, depthWrite: false }));
  neon.position.set(cmid, 3.12, BAR.minZ + 0.06); scene.add(neon);
  neon.material.opacity = 0.95; // sáng đều – không chập chờn (gây chói, khó chịu mắt)
  // ly, máy pha cà phê, chậu cây nhỏ trên quầy
  const glassM = new THREE.MeshStandardMaterial({ color: '#e6f6ff', roughness: 0.05, transparent: true, opacity: 0.55 });
  for (let i = 0; i < 6; i++) add(new THREE.CylinderGeometry(0.05, 0.04, 0.13, 12), glassM, cx1 + 1 + i * 1.8, 1.19, cz - 0.1, scene, flat);
  add(box(0.55, 0.48, 0.38, 0.05), std('#cfd6df', 0.25, { metalness: 0.65 }), cx2 - 0.8, 1.37, cz - 0.1);
  add(box(0.3, 0.06, 0.2, 0.02), std('#2b2b33', 0.4), cx2 - 0.8, 1.64, cz - 0.1, scene, flat);
  add(new THREE.CylinderGeometry(0.1, 0.08, 0.14, 14), std('#ffffff', 0.5), cx1 + 0.5, 1.2, cz - 0.15, scene, flat);
  add(new THREE.IcosahedronGeometry(0.13, 1), std('#5fb36f', 0.8, { flatShading: true }), cx1 + 0.5, 1.36, cz - 0.15, scene, flat);
  // bảng menu bên cạnh quầy
  const menu = new THREE.Mesh(new THREE.PlaneGeometry(1.1, 1.38), new THREE.MeshStandardMaterial({ map: menuTex(), roughness: 0.9 }));
  menu.position.set(cx2 + 1.6, 2.0, BAR.minZ + 0.05); scene.add(menu);
  add(box(1.24, 1.52, 0.05, 0.02), std('#8a5a3b', 0.5), cx2 + 1.6, 2.0, BAR.minZ + 0.02, scene, flat);

  // ghế cao trước quầy (đệm xanh SIMI / san hô xen kẽ)
  const stoolLeg = std('#c2cad6', 0.25, { metalness: 0.7 });
  const stoolCols = [std('#2f8cf0', 0.55), std('#ff7a6b', 0.55)];
  const cushGeo = new THREE.CylinderGeometry(0.21, 0.21, 0.1, 22);
  let sid = 0;
  for (let x = cx1 + 0.6; x <= cx2 - 0.5; x += 1.05) {
    const z = cz + 0.85;
    const g = new THREE.Group(); g.position.set(x, 0, z); scene.add(g);
    add(cushGeo, stoolCols[sid % 2], 0, 0.75, 0, g);
    add(new THREE.CylinderGeometry(0.035, 0.035, 0.7, 10), stoolLeg, 0, 0.36, 0, g);
    add(new THREE.CylinderGeometry(0.19, 0.22, 0.03, 20), stoolLeg, 0, 0.015, 0, g);
    add(new THREE.TorusGeometry(0.16, 0.014, 8, 20), stoolLeg, 0, 0.3, 0, g, flat).rotation.x = Math.PI / 2;
    seat(`b${++sid}`, x, z, Math.PI, 0.78, { x, z: z + 0.55 });
  }

  // ---------- khu bàn ăn (bên phải) ----------
  const tableTop = std('#fbf7f0', 0.35), tableLeg = std('#b8875a', 0.5);
  const chairMs = ['#5aa9f5', '#ffcf5a', '#4fd1b5', '#ff9a6b'].map((c) => std(c, 0.6));
  const seatGeo = box(0.46, 0.07, 0.44, 0.03), backGeo = box(0.46, 0.46, 0.06, 0.03), legGeo = new THREE.CylinderGeometry(0.022, 0.018, 0.45, 8);
  [[5.5, -1.5], [9.5, -1.5], [5.5, 3.2], [9.5, 3.2], [5.5, 7.6], [9.5, 7.6]].forEach(([tx, tz], ti) => {
    add(new THREE.CylinderGeometry(0.64, 0.64, 0.05, 36), tableTop, tx, 0.76, tz);
    add(new THREE.CylinderGeometry(0.66, 0.64, 0.02, 36), tableLeg, tx, 0.73, tz, scene, flat);
    add(new THREE.CylinderGeometry(0.05, 0.07, 0.72, 12), tableLeg, tx, 0.37, tz);
    add(new THREE.CylinderGeometry(0.3, 0.34, 0.03, 24), tableLeg, tx, 0.015, tz);
    // bình hoa + đĩa bánh
    add(new THREE.CylinderGeometry(0.06, 0.05, 0.16, 12), std('#ffffff', 0.3), tx - 0.1, 0.87, tz, scene, flat);
    add(new THREE.SphereGeometry(0.08, 10, 8), std(['#ff7aa8', '#ffd34d', '#ff9a52'][ti % 3], 0.7), tx - 0.1, 1.0, tz, scene, flat);
    add(new THREE.CylinderGeometry(0.16, 0.14, 0.025, 20), std('#ffffff', 0.3), tx + 0.28, 0.795, tz + 0.1, scene, flat);
    add(new THREE.CylinderGeometry(0.06, 0.06, 0.05, 12), std('#d99a5b', 0.7), tx + 0.28, 0.83, tz + 0.1, scene, flat);
    block(tx - 0.7, tz - 0.7, tx + 0.7, tz + 0.7);
    for (let k = 0; k < 4; k++) {
      const a = (k / 4) * Math.PI * 2 + Math.PI / 4;
      const x = tx + Math.sin(a) * 1.0, z = tz + Math.cos(a) * 1.0;
      const g = new THREE.Group(); g.position.set(x, 0, z); g.rotation.y = a + Math.PI; scene.add(g);
      const cm = chairMs[(ti + k) % chairMs.length];
      add(seatGeo, cm, 0, 0.45, 0, g);
      add(backGeo, cm, 0, 0.72, -0.2, g);
      for (const [lx, lz] of [[-0.19, -0.18], [0.19, -0.18], [-0.19, 0.18], [0.19, 0.18]]) add(legGeo, tableLeg, lx, 0.225, lz, g);
      seat(`t${ti + 1}${'abcd'[k]}`, x, z, a + Math.PI, 0.47, { x: tx + Math.sin(a) * 1.6, z: tz + Math.cos(a) * 1.6 });
    }
    lightPool(scene, tx, tz, 1.9, '#ffe3b0', 0.22);
    // đèn thả trên bàn
    add(new THREE.CylinderGeometry(0.015, 0.015, 1.3, 8), std('#7c818d'), tx, BAR.wallH - 0.45, tz, scene, flat);
    add(new THREE.SphereGeometry(0.22, 18, 10, 0, Math.PI * 2, 0, Math.PI / 2), std('#f3efe6', 0.5, { side: THREE.DoubleSide }), tx, BAR.wallH - 1.1, tz, scene, flat);
    add(new THREE.SphereGeometry(0.07, 10, 8), glow('#ffd28a', 3), tx, BAR.wallH - 1.12, tz, scene, flat);
  });

  // ---------- lounge sofa (bên trái) ----------
  const sofaMs = [std('#8fc9b0', 0.85), std('#a99be0', 0.85), std('#8cc3f5', 0.85)];
  const cushMs = [std('#ffd34d', 0.8), std('#ff9a6b', 0.8), std('#ffffff', 0.8)];
  const rugTexs = [rugTex('#f3ead9', '#8fc9b0', 'rgba(143,201,176,.5)'), rugTex('#efe9f8', '#a99be0', 'rgba(169,155,224,.5)'), rugTex('#eaf3fc', '#8cc3f5', 'rgba(140,195,245,.5)')];
  [[-10.2, -6], [-10.2, -1], [-10.2, 4]].forEach(([sx, sz], si) => {
    const m = sofaMs[si];
    // sofa dài dựa tường trái, nhìn về +x
    const g = new THREE.Group(); g.position.set(sx - 2.6, 0, sz); scene.add(g);
    add(box(0.92, 0.3, 2.6, 0.08), m, 0, 0.27, 0, g);
    add(box(0.8, 0.14, 2.3, 0.07), m, 0.05, 0.47, 0, g); // đệm ngồi
    add(box(0.26, 0.72, 2.6, 0.1), m, -0.34, 0.6, 0, g);
    for (const s of [-1, 1]) add(box(0.92, 0.55, 0.22, 0.09), m, 0, 0.42, s * 1.25, g);
    for (const [cz2, rz] of [[-0.75, 0.2], [0.75, -0.2]]) add(box(0.14, 0.34, 0.34, 0.07), cushMs[si], -0.13, 0.66, cz2, g).rotation.set(rz, 0, 0.22);
    for (const [lx, lz] of [[-0.35, -1.2], [0.35, -1.2], [-0.35, 1.2], [0.35, 1.2]]) add(new THREE.CylinderGeometry(0.03, 0.02, 0.12, 8), tableLeg, lx, 0.06, lz, g, flat);
    block(sx - 3.1, sz - 1.4, sx - 2.1, sz + 1.4);
    // bàn trà tròn gỗ + ly nến
    add(new THREE.CylinderGeometry(0.55, 0.55, 0.06, 32), std('#c79a6a', 0.45), sx - 0.4, 0.38, sz);
    add(new THREE.CylinderGeometry(0.08, 0.12, 0.34, 12), std('#9b7048', 0.5), sx - 0.4, 0.18, sz);
    add(new THREE.CylinderGeometry(0.06, 0.06, 0.08, 12), glow('#ffb35c', 0.9), sx - 0.4, 0.45, sz + 0.2, scene, flat);
    add(new THREE.CylinderGeometry(0.05, 0.04, 0.12, 12), glassM, sx - 0.55, 0.47, sz - 0.2, scene, flat);
    block(sx - 0.95, sz - 0.6, sx + 0.15, sz + 0.6);
    for (let k = -1; k <= 1; k++) seat(`s${si + 1}${k + 2}`, sx - 2.5, sz + k * 0.8, Math.PI / 2, 0.44, { x: sx - 1.75, z: sz + k * 0.8 });
    // thảm sáng có viền
    const rug = new THREE.Mesh(new THREE.PlaneGeometry(3.4, 3.2), new THREE.MeshStandardMaterial({ map: rugTexs[si], roughness: 0.95 }));
    rug.rotation.x = -Math.PI / 2; rug.position.set(sx - 1.0, 0.006, sz); rug.receiveShadow = true; scene.add(rug);
    lightPool(scene, sx - 1.2, sz, 2.0, '#ffd9a8', 0.18);
  });
  // đèn cây góc lounge
  for (const [x, z] of [[-13.2, -8.4], [-13.2, 6.4]]) {
    add(new THREE.CylinderGeometry(0.16, 0.2, 0.04, 18), std('#3a3a44', 0.4), x, 0.02, z);
    add(new THREE.CylinderGeometry(0.02, 0.02, 1.6, 8), std('#3a3a44', 0.4), x, 0.82, z);
    add(new THREE.CylinderGeometry(0.2, 0.28, 0.34, 20, 1, true), std('#fff1d6', 0.6, { side: THREE.DoubleSide, emissive: '#ffd9a0', emissiveIntensity: 0.7 }), x, 1.72, z, scene, flat);
    lightPool(scene, x + 0.4, z, 1.4, '#ffd9a8', 0.25);
  }

  // ---------- sàn nhảy (InstancedMesh, 1 lần vẽ) + quả cầu disco ----------
  const tileCols = ['#ff6fb5', '#4aa8ff', '#ffd34d', '#45d2b4', '#c3a6ff'].map((c) => new THREE.Color(c));
  const tileBase = new THREE.Color('#2a3150');
  const tiles = new THREE.InstancedMesh(box(0.94, 0.05, 0.94, 0.02), new THREE.MeshBasicMaterial({ toneMapped: false }), 30);
  const tm = new THREE.Matrix4(); const tc = new THREE.Color();
  for (let i = 0; i < 6; i++) for (let j = 0; j < 5; j++) { tm.makeTranslation(-4.5 + i, 0.025, 2.5 + j); tiles.setMatrixAt(i * 5 + j, tm); tiles.setColorAt(i * 5 + j, tileBase); }
  tiles.receiveShadow = true; scene.add(tiles);
  add(box(6.2, 0.04, 5.2, 0.02), std('#c2cad6', 0.3, { metalness: 0.6 }), -2.0, 0.012, 4.5, scene, flat); // viền sàn nhảy
  out.animated.push((t) => {
    for (let k = 0; k < 30; k++) {
      // đổi màu chậm và dịu (chu kỳ ~10 giây), không nháy
      const on = 0.5 + 0.5 * Math.sin(t * 0.6 + k * 1.7);
      tc.copy(tileBase).lerp(tileCols[(Math.floor(k / 5) + k) % 5], 0.4 + 0.3 * on);
      tiles.setColorAt(k, tc);
    }
    tiles.instanceColor.needsUpdate = true;
  });
  const ball = new THREE.Mesh(new THREE.IcosahedronGeometry(0.35, 1), new THREE.MeshStandardMaterial({ color: '#eef3fa', roughness: 0.1, metalness: 0.9, flatShading: true }));
  ball.position.set(-2.0, 3.0, 5.0); ball.castShadow = true; scene.add(ball);
  add(new THREE.CylinderGeometry(0.01, 0.01, 0.6, 4), std('#888'), -2.0, 3.45, 5.0, scene, flat);
  out.animated.push((t) => { ball.rotation.y = t * 0.8; });
  // 2 vệt đèn màu chạy trên sàn nhảy (thay cho đèn điểm)
  const poolA = lightPool(scene, -2, 4, 1.4, '#ff6fb5', 0.4);
  const poolB = lightPool(scene, -2, 6, 1.4, '#4aa8ff', 0.4);
  out.animated.push((t) => {
    poolA.position.set(-2 + Math.sin(t * 0.5) * 2.2, 0.06, 4.5 + Math.cos(t * 0.5) * 1.6);
    poolB.position.set(-2 + Math.sin(t * 0.5 + Math.PI) * 2.2, 0.06, 4.5 + Math.cos(t * 0.5 + Math.PI) * 1.6);
  });

  // ---------- góc DJ + loa (trái phía trước) ----------
  add(box(2.2, 0.95, 0.8, 0.06), std('#24304f', 0.4), -11.5, 0.475, 8.3);
  add(box(2.2, 0.05, 0.05), glow('#ff6fb5', 2), -11.5, 0.9, 7.88, scene, flat);
  add(box(2.1, 0.05, 0.72, 0.02), std('#3a3a44', 0.4), -11.5, 0.97, 8.3);
  for (const dx of [-0.5, 0.5]) add(new THREE.CylinderGeometry(0.22, 0.22, 0.04, 24), std('#16161c', 0.2), -11.5 + dx, 1.02, 8.3, scene, flat);
  add(box(0.4, 0.04, 0.3, 0.01), glow('#4aa8ff', 1.2), -11.5, 1.01, 8.3, scene, flat);
  for (const sx of [-13, -10]) {
    add(box(0.7, 1.6, 0.6, 0.06), std('#24304f', 0.5), sx, 0.8, 9.2);
    add(new THREE.CylinderGeometry(0.22, 0.22, 0.02, 24), std('#3a3a44', 0.3), sx, 1.05, 8.89, scene, flat).rotation.x = Math.PI / 2;
    add(new THREE.CylinderGeometry(0.12, 0.12, 0.02, 20), std('#3a3a44', 0.3), sx, 0.5, 8.89, scene, flat).rotation.x = Math.PI / 2;
  }
  block(-13.4, 7.85, -9.6, 9.6);

  // ---------- bàn bi-a ----------
  add(box(2.5, 0.2, 1.4, 0.06), std('#8a5a3b', 0.45), 1.5, 0.68, -3.0);
  add(box(2.2, 0.04, 1.1), std('#1f8a5a', 0.95), 1.5, 0.79, -3.0, scene, flat);
  for (const [lx, lz] of [[-1.05, -0.55], [1.05, -0.55], [-1.05, 0.55], [1.05, 0.55]]) add(box(0.14, 0.6, 0.14, 0.03), std('#6e4630', 0.5), 1.5 + lx, 0.3, -3.0 + lz);
  [['#ffd34d', 0.9, -2.8], ['#ff5a5f', 1.2, -3.2], ['#4aa8ff', 2.1, -2.9], ['#ffffff', 1.8, -3.25]].forEach(([c, x, z]) => add(new THREE.SphereGeometry(0.045, 14, 10), std(c, 0.2), x, 0.85, z, scene, flat));
  add(box(0.03, 0.03, 1.5), std('#c79a6a', 0.4), 1.6, 0.84, -2.2, scene, flat).rotation.y = 0.5;
  block(0.2, -3.75, 2.8, -2.25);
  lightPool(scene, 1.5, -3.0, 2.0, '#fff1d6', 0.2);

  // ---------- cửa sổ trên tường trái ----------
  const winTex = windowTex();
  for (const z of [-7.6, 8.4]) {
    const pane = new THREE.Mesh(new THREE.PlaneGeometry(1.7, 1.6), new THREE.MeshBasicMaterial({ map: winTex, toneMapped: false }));
    pane.position.set(BAR.minX + 0.03, 2.15, z); pane.rotation.y = Math.PI / 2; scene.add(pane);
    add(box(0.08, 1.8, 1.9, 0.02), std('#ffffff', 0.5), BAR.minX + 0.02, 2.15, z, scene, flat);
    add(box(0.1, 0.05, 1.7), std('#ffffff', 0.5), BAR.minX + 0.06, 2.15, z, scene, flat);
    add(box(0.1, 1.6, 0.05), std('#ffffff', 0.5), BAR.minX + 0.06, 2.15, z, scene, flat);
    add(box(0.22, 0.06, 1.95, 0.02), std('#ffffff', 0.5), BAR.minX + 0.1, 1.32, z, scene, flat); // bậu cửa
  }
  // khung ảnh treo tường sau (bên phải quầy)
  for (const [x, c] of [[11.95, '#4aa8ff'], [13.2, '#ff9a6b']]) { // không lấn bảng menu (x ≤ 11.22) – lấn là 2 mặt trùng nhau, chớp
    add(box(0.9, 0.7, 0.04, 0.01), std('#ffffff', 0.5), x, 2.2, BAR.minZ + 0.03, scene, flat);
    add(box(0.74, 0.54, 0.03), std(c, 0.8), x, 2.2, BAR.minZ + 0.05, scene, flat);
  }

  // ---------- cây xanh (chậu + tán lá tròn) ----------
  const potMs = [std('#f6f1e8', 0.6), std('#d98b5f', 0.75)];
  const leafMs = [std('#5fb36f', 0.85, { flatShading: true }), std('#3f9a5a', 0.85, { flatShading: true })];
  const leafGeo = new THREE.IcosahedronGeometry(1, 1);
  [[-13.3, -9.3], [13.3, -9.3], [-13.3, 9.3], [12.8, 9.3], [-6, -9.3], [12.8, -4.5], [-13.3, -3.6], [11.6, 5.3]].forEach(([x, z], i) => {
    add(new THREE.CylinderGeometry(0.26, 0.19, 0.5, 18), potMs[i % 2], x, 0.25, z);
    add(new THREE.CylinderGeometry(0.24, 0.24, 0.03, 18), std('#6b4a32', 0.9), x, 0.49, z, scene, flat);
    const RR = rng(30 + i);
    for (let k = 0; k < 5; k++) {
      const l = add(leafGeo, leafMs[k % 2], x + (RR() - 0.5) * 0.3, 0.8 + RR() * 0.55, z + (RR() - 0.5) * 0.3);
      l.scale.setScalar(0.2 + RR() * 0.12);
    }
    block(x - 0.35, z - 0.35, x + 0.35, z + 0.35);
  });

  // ---------- đèn thả trên quầy + đèn dây ----------
  for (let x = cx1 + 1; x < cx2; x += 2.4) {
    add(new THREE.CylinderGeometry(0.015, 0.015, 1.1, 8), std('#7c818d'), x, BAR.wallH - 0.55, cz + 0.1, scene, flat);
    add(new THREE.ConeGeometry(0.2, 0.22, 20, 1, true), std('#c99a5b', 0.4, { side: THREE.DoubleSide }), x, BAR.wallH - 1.15, cz + 0.1, scene, flat);
    add(new THREE.SphereGeometry(0.07, 12, 8), glow('#ffd28a', 3), x, BAR.wallH - 1.23, cz + 0.1, scene, flat);
    lightPool(scene, x, cz + 0.9, 1.25, '#ffd9a0', 0.32);
  }
  // dây đèn nhiều màu dọc 2 tường – 1 InstancedMesh
  const bulbCols = ['#ffd28a', '#ff9ccf', '#9fd0ff', '#b6f5d8'].map((c) => new THREE.Color(c));
  const N = 70;
  const fairy = new THREE.InstancedMesh(new THREE.SphereGeometry(0.035, 8, 6), new THREE.MeshBasicMaterial({ toneMapped: false }), N);
  const fm = new THREE.Matrix4();
  for (let i = 0; i < N; i++) {
    const k = i / (N - 1);
    const onBack = k < 0.6;
    const x = onBack ? BAR.maxX - 0.4 - (k / 0.6) * (W - 0.8) : BAR.minX + 0.1;
    const z = onBack ? BAR.minZ + 0.1 : BAR.minZ + 0.4 + ((k - 0.6) / 0.4) * (D - 0.8);
    const y = BAR.wallH - 0.25 - Math.abs(Math.sin(i * 0.55)) * 0.22;
    fm.makeTranslation(x, y, z); fairy.setMatrixAt(i, fm); fairy.setColorAt(i, bulbCols[i % 4]);
  }
  scene.add(fairy); // sáng đứng yên – không nhấp nháy

  // ---------- màn hình lớn + logo trên tường trái ----------
  const screenM = new THREE.MeshBasicMaterial({ color: '#ffffff', toneMapped: false });
  const screen = new THREE.Mesh(new THREE.PlaneGeometry(2.4, 3.2), screenM);
  screen.position.set(BAR.minX + 0.075, 2.0, -3.6); screen.rotation.y = Math.PI / 2; scene.add(screen);
  add(box(0.06, 3.36, 2.56, 0.03), std('#1d2b4f', 0.4), BAR.minX + 0.03, 2.0, -3.6, scene, flat);
  loadTex('brand/simi-banner.jpg', (t) => { screenM.map = t; screenM.needsUpdate = true; });
  const sign = (url, w, h, bg, x, y, z, ry) => {
    const g = new THREE.Group(); g.position.set(x, y, z); g.rotation.y = ry; scene.add(g);
    add(box(w + 0.18, h + 0.18, 0.05, 0.03), std(bg, 0.5), 0, 0, 0, g, flat);
    const face = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicMaterial({ transparent: true, opacity: 0, toneMapped: false }));
    face.position.z = 0.03; g.add(face);
    loadTex(url, (t) => { face.material.map = t; face.material.opacity = 1; face.material.needsUpdate = true; });
  };
  sign('brand/uniq.png', 1.6, 0.57, '#142c5a', BAR.minX + 0.05, 2.4, 1.6, Math.PI / 2);
  sign('brand/crenot.png', 1.8, 0.44, '#ffffff', BAR.minX + 0.05, 2.4, 6.0, Math.PI / 2);
  sign('brand/simi.png', 1.3, 0.39, '#0a78f0', BAR.minX + 0.05, 2.4, -0.8, Math.PI / 2);

  // ---------- màn chiếu YouTube (tường sau, bên trái) ----------
  // Khi đang chiếu: mặt "lỗ" trong suốt để khung YouTube (nằm sau canvas) lộ ra đúng chỗ – người đi ngang vẫn che được màn hình.
  const CW = 4.8, CH = 2.7, cx = -9.6, cy = 1.95, cz0 = BAR.minZ + 0.17;
  add(box(CW + 0.3, CH + 0.3, 0.08, 0.04), std('#16161c', 0.35), cx, cy, BAR.minZ + 0.12, scene, flat); // viền màn hình
  add(box(CW + 0.6, 0.08, 0.3, 0.03), std('#2b2b33', 0.4), cx, cy - CH / 2 - 0.22, BAR.minZ + 0.2, scene, flat); // gờ loa
  for (const dx of [-1, 1]) add(box(0.42, 1.0, 0.36, 0.05), std('#22222a', 0.5), cx + dx * (CW / 2 + 0.55), 0.5, BAR.minZ + 0.3); // 2 loa đứng
  for (const dx of [-1, 1]) for (const dy of [0.72, 0.3]) add(new THREE.CylinderGeometry(dy > 0.5 ? 0.08 : 0.13, dy > 0.5 ? 0.08 : 0.13, 0.02, 20), std('#3a3a44', 0.3), cx + dx * (CW / 2 + 0.55), dy, BAR.minZ + 0.49, scene, flat).rotation.x = Math.PI / 2;
  block(cx - CW / 2 - 0.8, BAR.minZ, cx - CW / 2 - 0.3, BAR.minZ + 0.5);
  block(cx + CW / 2 + 0.3, BAR.minZ, cx + CW / 2 + 0.8, BAR.minZ + 0.5);
  const idle = new THREE.Mesh(new THREE.PlaneGeometry(CW, CH), new THREE.MeshBasicMaterial({ map: cinemaIdleTex(), toneMapped: false }));
  idle.position.set(cx, cy, cz0); scene.add(idle);
  const hole = new THREE.Mesh(new THREE.PlaneGeometry(CW, CH), new THREE.MeshBasicMaterial({ color: 0x000000, opacity: 0, blending: THREE.NoBlending, toneMapped: false }));
  hole.position.set(cx, cy, cz0 + 0.002); hole.visible = false; scene.add(hole);
  hole.userData.cinema = true; idle.userData.cinema = true;
  out.cinema = { x: cx, y: cy, z: cz0 + 0.004, w: CW, h: CH, idle, hole };

  // ---------- chỗ ngồi ----------
  function seat(id, x, z, face, h, approach) {
    out.seats.push({ id, x, z, face, h, approach });
    // vùng bấm vô hình phủ lên ghế
    const hit = new THREE.Mesh(new THREE.CylinderGeometry(0.32, 0.32, h + 0.1, 10), new THREE.MeshBasicMaterial({ visible: false }));
    hit.position.set(x, (h + 0.1) / 2, z); hit.userData.seatId = id; scene.add(hit); out.seatMeshes.push(hit);
  }

  mergeStatics(scene, statics);
  // điểm xuất hiện: khoảng trống phía trước quầy và quanh sàn nhảy
  out.spawn = { minX: -7, maxX: 3, minZ: -6.5, maxZ: 1.5 };
  return out;
}

// gộp các mesh đứng yên theo (vật liệu, đổ bóng, nhận bóng) → vài chục lần vẽ, nhẹ cả lượt vẽ bóng
function mergeStatics(scene, meshes) {
  scene.updateMatrixWorld(true);
  const groups = new Map();
  for (const m of meshes) {
    const g = m.geometry.index ? m.geometry.toNonIndexed() : m.geometry.clone();
    for (const k of Object.keys(g.attributes)) if (!['position', 'normal', 'uv'].includes(k)) g.deleteAttribute(k);
    if (!g.attributes.uv) g.setAttribute('uv', new THREE.Float32BufferAttribute(new Float32Array(g.attributes.position.count * 2), 2));
    g.applyMatrix4(m.matrixWorld);
    const key = `${m.material.uuid}|${m.castShadow}|${m.receiveShadow}`;
    if (!groups.has(key)) groups.set(key, { mat: m.material, cast: m.castShadow, receive: m.receiveShadow, geos: [] });
    groups.get(key).geos.push(g);
    m.parent.remove(m);
  }
  for (const { mat, cast, receive, geos } of groups.values()) {
    const merged = mergeGeometries(geos, false);
    if (!merged) continue;
    const mesh = new THREE.Mesh(merged, mat); mesh.castShadow = cast; mesh.receiveShadow = receive; mesh.matrixAutoUpdate = false;
    scene.add(mesh);
  }
  // xoá các group rỗng còn lại (ghế, sofa…)
  for (const o of [...scene.children]) if (o.isGroup && o.children.length === 0) scene.remove(o);
}
