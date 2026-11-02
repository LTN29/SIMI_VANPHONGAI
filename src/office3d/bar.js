// SIMI BAR CHILL – sảnh online rộng 40 x 28 m, tông sáng: sàn gỗ sồi, tường kem, mảng tường xanh đậm sau quầy cho biển neon nổi bật.
// Trong nhà (z ≤ 10): quầy bar + ghế cao, khu bàn ăn, lounge sofa, sàn nhảy, góc DJ, màn chiếu, cửa sổ, cây xanh, đèn thả.
// Khu Game (bên phải): 2 bàn bida chơi được, máy game thùng, phi tiêu, bi lắc, ghế lười, máy bán nước.
// Sân vườn (z > 10): sàn gỗ ngoài trời, cổng vào, bàn dù, đài phun nước, ghế đá, đèn vườn, cây xanh.
// Hiệu năng: đồ vật đứng yên được gộp theo vật liệu (vài chục lần vẽ thay vì hàng trăm), đèn dây + sàn nhảy dùng InstancedMesh,
// không dùng đèn điểm (PointLight) – vùng sáng dưới đèn là "vệt sáng" vẽ sẵn.
// Trả về chỗ ngồi (seats), vật cản cho tìm đường, các hàm hoạt cảnh.
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

export const BAR = { minX: -14, maxX: 26, minZ: -10, maxZ: 18, wallH: 3.6, inZ: 10 };
// bàn bida (trục dài theo z): toạ độ tâm; người chơi đứng ở 2 đầu bàn
export const POOL_TABLES = [{ x: 18.6, z: -4.4 }, { x: 23.0, z: -4.4 }];
export const POOL_FELT = { w: 1.25, l: 2.5 };

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

// trang web điện thoại đặt window.VP_ASSET_BASE (ảnh nằm ở /m/sanh3d/brand/…); app máy tính để trống
function loadTex(url, cb) { new THREE.TextureLoader().load((globalThis.VP_ASSET_BASE || '') + url, (t) => { t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8; cb(t); }, undefined, () => {}); }

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
  const CX = (BAR.minX + BAR.maxX) / 2, CZ = (BAR.minZ + BAR.maxZ) / 2;
  const DI = BAR.inZ - BAR.minZ, CZI = (BAR.minZ + BAR.inZ) / 2; // phần trong nhà
  const flat = { cast: false };

  // ---------- nền: tấm đế + sàn gỗ sáng ----------
  add(box(W + 0.7, 0.5, D + 0.7, 0.12), std('#e8dfd1', 0.85), CX, -0.26, CZ, scene, { cast: false, receive: true });
  add(box(W + 0.75, 0.08, D + 0.75, 0.03), std('#d3c4ae', 0.8), CX, -0.47, CZ, scene, flat);
  const ftex = floorTex(); ftex.repeat.set(4 * W / 28, 2.9 * DI / 20);
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(W, DI), new THREE.MeshStandardMaterial({ color: '#ffffff', roughness: 0.62, map: ftex }));
  floor.rotation.x = -Math.PI / 2; floor.position.set(CX, 0.001, CZI); floor.receiveShadow = true; scene.add(floor);
  out.floor = floor;

  // ---------- tường kem + ốp chân tường gỗ, mảng tường xanh đậm sau quầy ----------
  const wallM = std('#f6f0e6', 0.95), wainM = std('#e3d5bf', 0.8), trimM = std('#b98d5e', 0.5), baseM = std('#9b7048', 0.6);
  // tường sau chạy hết chiều ngang; tường trái chỉ tới hết phần trong nhà (sân vườn để thoáng)
  add(box(W + 0.2, BAR.wallH, 0.22), wallM, CX, BAR.wallH / 2, BAR.minZ - 0.11, scene, flat);
  add(box(0.22, BAR.wallH, DI), wallM, BAR.minX - 0.11, BAR.wallH / 2, CZI, scene, flat);
  add(box(W, 1.0, 0.05), wainM, CX, 0.5, BAR.minZ + 0.025, scene, flat);
  add(box(0.05, 1.0, DI), wainM, BAR.minX + 0.025, 0.5, CZI, scene, flat);
  add(box(W, 0.06, 0.09), trimM, CX, 1.02, BAR.minZ + 0.045, scene, flat);
  add(box(0.09, 0.06, DI), trimM, BAR.minX + 0.045, 1.02, CZI, scene, flat);
  add(box(W - 0.02, 0.12, 0.07), baseM, CX, 0.06, BAR.minZ + 0.035, scene, flat);
  add(box(0.07, 0.12, DI - 0.02), baseM, BAR.minX + 0.035, 0.06, CZI, scene, flat);
  add(box(W + 0.22, 0.12, 0.3, 0.03), std('#ffffff', 0.6), CX, BAR.wallH + 0.06, BAR.minZ - 0.08, scene, flat); // gờ trên tường
  add(box(0.3, 0.12, DI, 0.03), std('#ffffff', 0.6), BAR.minX - 0.08, BAR.wallH + 0.06, CZI, scene, flat);
  add(box(0.34, BAR.wallH + 0.12, 0.34, 0.04), std('#ffffff', 0.6), BAR.minX - 0.15, (BAR.wallH + 0.12) / 2, BAR.inZ, scene, flat); // cột đầu tường trái (mặt trong -13.98: không trùng ốp tường -13.95 / chân tường -13.93)
  // ô kẻ dọc trên ốp tường
  for (let x = BAR.minX + 0.6; x < BAR.maxX; x += 0.6) add(box(0.02, 0.83, 0.02), trimM, x, 0.545, BAR.minZ + 0.06, scene, flat); // bắt đầu trên gờ chân tường (0.12) – không chạm mặt gờ
  for (let z = BAR.minZ + 0.6; z < BAR.inZ - 0.2; z += 0.6) add(box(0.02, 0.83, 0.02), trimM, BAR.minX + 0.06, 0.545, z, scene, flat);

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

  // ---------- bàn đứng giữa quán (bida đã chuyển sang khu Game) ----------
  [[0.6, -3.4], [3.0, -2.6]].forEach(([tx, tz], i) => {
    add(new THREE.CylinderGeometry(0.42, 0.42, 0.05, 28), tableTop, tx, 1.08, tz);
    add(new THREE.CylinderGeometry(0.04, 0.05, 1.06, 10), std('#3a3a44', 0.4), tx, 0.53, tz);
    add(new THREE.CylinderGeometry(0.26, 0.3, 0.03, 20), std('#3a3a44', 0.4), tx, 0.015, tz);
    add(new THREE.CylinderGeometry(0.05, 0.04, 0.13, 12), glassM, tx + 0.12, 1.17, tz - 0.05, scene, flat);
    add(new THREE.SphereGeometry(0.06, 10, 8), std(['#ff7aa8', '#ffd34d'][i], 0.7), tx - 0.12, 1.15, tz + 0.06, scene, flat);
    block(tx - 0.45, tz - 0.45, tx + 0.45, tz + 0.45);
  });

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
  [[-13.3, -9.3], [13.3, -9.3], [-13.3, 9.3], [-6, -9.3], [12.8, -4.5], [-13.3, -3.6], [11.6, 5.3], [14.3, 9.2], [25.5, 6.8]].forEach(([x, z], i) => {
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
  const N = 96;
  const fairy = new THREE.InstancedMesh(new THREE.SphereGeometry(0.035, 8, 6), new THREE.MeshBasicMaterial({ toneMapped: false }), N);
  const fm = new THREE.Matrix4();
  for (let i = 0; i < N; i++) {
    const k = i / (N - 1);
    const onBack = k < 0.6;
    const x = onBack ? BAR.maxX - 0.4 - (k / 0.6) * (W - 0.8) : BAR.minX + 0.1;
    const z = onBack ? BAR.minZ + 0.1 : BAR.minZ + 0.4 + ((k - 0.6) / 0.4) * (DI - 0.8);
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

  buildGameZone({ scene, add, box, block, seat, out, statics, flat, glassM });
  buildTerrace({ scene, add, box, block, seat, out, flat, glassM, tableTop });

  // ---------- chỗ ngồi ----------
  function seat(id, x, z, face, h, approach) {
    out.seats.push({ id, x, z, face, h, approach });
    // vùng bấm vô hình phủ lên ghế
    const hit = new THREE.Mesh(new THREE.CylinderGeometry(0.32, 0.32, h + 0.1, 10), new THREE.MeshBasicMaterial({ visible: false }));
    hit.position.set(x, (h + 0.1) / 2, z); hit.userData.seatId = id; scene.add(hit); out.seatMeshes.push(hit);
  }

  mergeStatics(scene, statics);
  // điểm xuất hiện: sân trước quầy lễ tân (lối vào)
  out.spawn = { minX: 8, maxX: 16, minZ: 13, maxZ: 16.5 };
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

// ================= khu Game (bên phải, trong nhà) =================
function carpetTex() {
  return canvasTex(512, 512, (g, w, h) => {
    g.fillStyle = '#2c3a6e'; g.fillRect(0, 0, w, h);
    const R = rng(77);
    // hoa văn hình học kiểu thảm phòng game: ô thoi + chấm neon nhỏ
    g.strokeStyle = 'rgba(150,175,245,.22)'; g.lineWidth = 3;
    for (let y = -64; y < h + 64; y += 64) for (let x = -64; x < w + 64; x += 64) { g.beginPath(); g.moveTo(x, y + 32); g.lineTo(x + 32, y); g.lineTo(x + 64, y + 32); g.lineTo(x + 32, y + 64); g.closePath(); g.stroke(); }
    const cols = ['#ff6fb5', '#4aa8ff', '#ffd34d', '#45d2b4'];
    for (let i = 0; i < 70; i++) { g.fillStyle = cols[i % 4]; g.globalAlpha = 0.35; g.beginPath(); g.arc(R() * w, R() * h, 2 + R() * 2.5, 0, 7); g.fill(); }
    g.globalAlpha = 1;
  });
}
function arcadeTex(seed) {
  return canvasTex(256, 200, (g, w, h) => {
    const R = rng(seed);
    const bg = g.createLinearGradient(0, 0, 0, h); bg.addColorStop(0, ['#140a3a', '#05263a', '#2a0a26'][seed % 3]); bg.addColorStop(1, '#000');
    g.fillStyle = bg; g.fillRect(0, 0, w, h);
    for (let i = 0; i < 40; i++) { g.fillStyle = 'rgba(255,255,255,.6)'; g.fillRect(R() * w, R() * h * 0.7, 2, 2); }
    const cols = ['#ff4fa3', '#45d2b4', '#ffd34d', '#4aa8ff'];
    for (let i = 0; i < 9; i++) { g.fillStyle = cols[(i + seed) % 4]; const x = 30 + (i % 3) * 70 + R() * 10, y = 30 + Math.floor(i / 3) * 34; g.fillRect(x, y, 22, 14); g.fillRect(x - 6, y + 6, 34, 6); }
    g.fillStyle = '#ffffff'; g.fillRect(w / 2 - 14, h - 40, 28, 12); g.fillRect(w / 2 - 4, h - 50, 8, 10);
    g.fillStyle = '#ffd34d'; g.font = 'bold 18px monospace'; g.fillText('SCORE 0' + (12000 + seed * 3170), 12, h - 10);
  });
}
function neonText(text, color, sub) {
  return canvasTex(1024, 256, (g, w, h) => {
    g.clearRect(0, 0, w, h); g.textAlign = 'center'; g.textBaseline = 'middle';
    g.font = '900 120px "Nunito", "Segoe UI", sans-serif';
    for (const [blur, col] of [[40, color], [16, color], [0, '#ffffff']]) { g.shadowColor = color; g.shadowBlur = blur; g.fillStyle = col; g.fillText(text, w / 2, sub ? h / 2 - 22 : h / 2); }
    if (sub) { g.font = '800 46px "Nunito", "Segoe UI", sans-serif'; g.shadowBlur = 12; g.fillStyle = '#ffffff'; g.fillText(sub, w / 2, h / 2 + 72); }
  });
}
function dartTex() {
  return canvasTex(256, 256, (g, w) => {
    const c = w / 2;
    g.fillStyle = '#1a1a1a'; g.beginPath(); g.arc(c, c, c, 0, 7); g.fill();
    for (let i = 0; i < 20; i++) {
      const a0 = (i / 20) * Math.PI * 2 - Math.PI / 20, a1 = a0 + Math.PI / 10;
      for (const [r0, r1, odd, even] of [[30, 100, '#f3e6c8', '#151515'], [100, 112, '#1d8a4a', '#d8262e'], [12, 30, '#f3e6c8', '#151515'], [70, 80, '#1d8a4a', '#d8262e']]) {
        g.fillStyle = i % 2 ? odd : even; g.beginPath(); g.arc(c, c, r1, a0, a1); g.arc(c, c, r0, a1, a0, true); g.closePath(); g.fill();
      }
    }
    g.fillStyle = '#1d8a4a'; g.beginPath(); g.arc(c, c, 12, 0, 7); g.fill();
    g.fillStyle = '#d8262e'; g.beginPath(); g.arc(c, c, 6, 0, 7); g.fill();
  });
}

const BALL_COLORS = ['#fbfaf5', '#f5c518', '#1f5fd1', '#d8262e', '#5b2c8f', '#f07a1a', '#1d8a4a', '#8a1f2b', '#141414', '#f5c518', '#1f5fd1', '#d8262e', '#5b2c8f', '#f07a1a', '#1d8a4a', '#8a1f2b'];

function buildGameZone({ scene, add, box, block, seat, out }) {
  const flat = { cast: false };
  const X1 = 14.6, X2 = BAR.maxX, Z1 = BAR.minZ, Z2 = 9.6;
  // thảm phòng game (cao hơn sàn 5 mm)
  const ct = carpetTex(); ct.wrapS = ct.wrapT = THREE.RepeatWrapping; ct.repeat.set((X2 - X1) / 3, (Z2 - Z1) / 3);
  const carpet = new THREE.Mesh(new THREE.PlaneGeometry(X2 - X1, Z2 - Z1), new THREE.MeshStandardMaterial({ map: ct, roughness: 0.95 }));
  carpet.rotation.x = -Math.PI / 2; carpet.position.set((X1 + X2) / 2, 0.006, (Z1 + Z2) / 2); carpet.receiveShadow = true; scene.add(carpet);
  // viền thảm phát sáng
  add(box(0.06, 0.02, Z2 - Z1), glow('#7c5cff', 1.4), X1 + 0.03, 0.012, (Z1 + Z2) / 2, scene, flat);
  add(box(X2 - X1, 0.02, 0.06), glow('#7c5cff', 1.4), (X1 + X2) / 2, 0.012, Z2 - 0.03, scene, flat);
  // mảng tường tím than sau khu game + biển neon
  add(box(X2 - X1 - 0.3, BAR.wallH - 0.02, 0.07), std('#231a4a', 0.9), (X1 + X2) / 2, BAR.wallH / 2, BAR.minZ + 0.02, scene, flat); // 2 đầu thụt vào 15 cm – không trùng mặt cạnh ốp tường
  const sign = new THREE.Mesh(new THREE.PlaneGeometry(4.4, 1.1), new THREE.MeshBasicMaterial({ map: neonText('GAME ZONE', '#b26bff'), transparent: true, toneMapped: false, depthWrite: false }));
  sign.position.set(20.8, 2.95, BAR.minZ + 0.07); scene.add(sign);

  // máy game thùng (3 cái) dựa tường
  [15.5, 16.65, 17.8].forEach((x, i) => {
    const g = new THREE.Group(); g.position.set(x, 0, BAR.minZ + 0.5); scene.add(g);
    const bodyM = std(['#ff4fa3', '#2f8cf0', '#45d2b4'][i], 0.5);
    add(box(0.82, 1.2, 0.72, 0.04), std('#20203a', 0.5), 0, 0.6, 0, g);
    add(box(0.86, 0.06, 0.74, 0.02), bodyM, 0, 1.22, 0, g, flat);
    add(box(0.82, 0.62, 0.42, 0.04), std('#20203a', 0.5), 0, 1.55, -0.14, g);
    add(box(0.86, 0.2, 0.5, 0.03), bodyM, 0, 1.96, -0.1, g, flat);
    add(box(0.7, 0.12, 0.02), glow(['#ff9ccf', '#9fd0ff', '#b6f5d8'][i], 1.6), 0, 1.96, 0.16, g, flat); // biển trên nóc
    add(box(0.76, 0.06, 0.3, 0.02), std('#2b2b40', 0.5), 0, 1.04, 0.3, g, flat);         // bàn phím điều khiển
    add(new THREE.SphereGeometry(0.035, 10, 8), std('#ff5a5f', 0.3), -0.18, 1.1, 0.32, g, flat);
    add(new THREE.CylinderGeometry(0.03, 0.03, 0.04, 10), std('#ffd34d', 0.3), 0.1, 1.08, 0.3, g, flat);
    add(new THREE.CylinderGeometry(0.03, 0.03, 0.04, 10), std('#4aa8ff', 0.3), 0.2, 1.08, 0.3, g, flat);
    const scr = new THREE.Mesh(new THREE.PlaneGeometry(0.66, 0.5), new THREE.MeshBasicMaterial({ map: arcadeTex(i + 3), toneMapped: false }));
    scr.position.set(0, 1.56, 0.075); scr.rotation.x = -0.18; g.add(scr);
    lightPool(scene, x, BAR.minZ + 1.3, 0.8, ['#ff6fb5', '#4aa8ff', '#45d2b4'][i], 0.28);
  });
  block(15.0, BAR.minZ, 18.3, BAR.minZ + 1.0);

  // giá cơ bida trên tường
  add(box(1.3, 1.3, 0.06, 0.02), std('#8a5a3b', 0.5), 20.8, 1.55, BAR.minZ + 0.08, scene, flat); // mặt trước nhô hơn gờ ốp tường 2 cm
  for (let k = 0; k < 6; k++) add(new THREE.CylinderGeometry(0.012, 0.018, 1.2, 8), std(k % 2 ? '#c99a5b' : '#9b6b3e', 0.45), 20.3 + k * 0.2, 1.55, BAR.minZ + 0.14, scene, flat);
  // bảng phi tiêu + vạch đứng ném
  const dart = new THREE.Mesh(new THREE.CircleGeometry(0.34, 40), new THREE.MeshStandardMaterial({ map: dartTex(), roughness: 0.8 }));
  dart.position.set(24.6, 1.75, BAR.minZ + 0.1); scene.add(dart);
  add(new THREE.CylinderGeometry(0.42, 0.42, 0.05, 40), std('#2b1a0e', 0.6), 24.6, 1.75, BAR.minZ + 0.07, scene, flat).rotation.x = Math.PI / 2;
  add(box(1.0, 0.012, 0.05), glow('#ffd34d', 1.2), 24.6, 0.012, BAR.minZ + 2.4, scene, flat);

  // 2 bàn bida chơi được: bi là InstancedMesh (đổi vị trí theo ván đang chơi), phần còn lại gộp chung
  const felt = std('#169a63', 0.95), woodM = std('#6b3f22', 0.45), railM = std('#0f6b45', 0.85), pocketM = std('#0b0b0b', 0.9), metal = std('#c9b06b', 0.35, { metalness: 0.5 });
  const ballGeo = new THREE.SphereGeometry(0.032, 14, 10);
  out.poolTables = POOL_TABLES.map((T, ti) => {
    const { w: FW, l: FL } = POOL_FELT;
    add(box(FW + 0.36, 0.16, FL + 0.36, 0.06), woodM, T.x, 0.74, T.z);                     // khung gỗ
    add(box(FW + 0.08, 0.05, FL + 0.08, 0.02), railM, T.x, 0.83, T.z, scene, flat);          // băng
    add(box(FW, 0.02, FL), felt, T.x, 0.85, T.z, scene, flat);                               // mặt nỉ
    add(box(FW + 0.1, 0.42, FL - 0.2, 0.05), woodM, T.x, 0.45, T.z);                        // thân bàn
    for (const [lx, lz] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) add(box(0.16, 0.66, 0.16, 0.04), woodM, T.x + lx * (FW / 2 + 0.06), 0.33, T.z + lz * (FL / 2 + 0.06));
    for (const [lx, lz] of [[-1, -1], [1, -1], [-1, 0], [1, 0], [-1, 1], [1, 1]]) {
      add(new THREE.CylinderGeometry(0.06, 0.06, 0.03, 16), pocketM, T.x + lx * (FW / 2 + 0.01), 0.855, T.z + lz * (FL / 2 + 0.01), scene, flat);
      add(new THREE.CylinderGeometry(0.075, 0.075, 0.02, 16), metal, T.x + lx * (FW / 2 + 0.03), 0.825, T.z + lz * (FL / 2 + 0.03), scene, flat);
    }
    // đèn hộp trên bàn
    add(box(0.42, 0.12, 1.9, 0.04), std('#1d2b4f', 0.5), T.x, 2.45, T.z, scene, flat);
    add(box(0.34, 0.02, 1.8), glow('#fff1d6', 1.5), T.x, 2.38, T.z, scene, flat);
    for (const dz of [-0.6, 0.6]) add(new THREE.CylinderGeometry(0.008, 0.008, 0.9, 6), std('#7c818d'), T.x, 2.95, T.z + dz, scene, flat);
    lightPool(scene, T.x, T.z, 1.7, '#fff1d6', 0.32);
    block(T.x - FW / 2 - 0.2, T.z - FL / 2 - 0.2, T.x + FW / 2 + 0.2, T.z + FL / 2 + 0.2);
    // bi
    const balls = new THREE.InstancedMesh(ballGeo, new THREE.MeshStandardMaterial({ roughness: 0.2 }), 16);
    balls.castShadow = false; balls.receiveShadow = false;
    BALL_COLORS.forEach((c, i) => balls.setColorAt(i, new THREE.Color(c)));
    scene.add(balls);
    // vùng bấm vô hình phủ lên bàn
    const hit = new THREE.Mesh(new THREE.BoxGeometry(FW + 0.4, 1.0, FL + 0.4), new THREE.MeshBasicMaterial({ visible: false }));
    hit.position.set(T.x, 0.5, T.z); hit.userData.poolTable = ti; scene.add(hit);
    // biển số bàn nhỏ ở đầu bàn
    const plate = new THREE.Mesh(new THREE.PlaneGeometry(0.34, 0.1), new THREE.MeshBasicMaterial({ map: canvasTex(256, 76, (g, w, h) => { g.fillStyle = '#f3e3c3'; g.fillRect(0, 0, w, h); g.fillStyle = '#3a2412'; g.font = '900 46px Nunito, sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText(`BÀN ${ti + 1}`, w / 2, h / 2 + 2); }) }));
    plate.position.set(T.x, 0.74, T.z + FL / 2 + 0.185); scene.add(plate);
    return { ...T, index: ti, balls, hit, spots: [{ x: T.x, z: T.z - FL / 2 - 0.55, face: 0 }, { x: T.x, z: T.z + FL / 2 + 0.55, face: Math.PI }] };
  });

  // bi lắc
  const fx = 17.2, fz = 3.4;
  add(box(1.3, 0.22, 0.8, 0.05), std('#2f8cf0', 0.5), fx, 0.82, fz);
  add(box(1.12, 0.02, 0.64), std('#169a63', 0.9), fx, 0.93, fz, scene, flat);
  add(box(1.0, 0.7, 0.6, 0.05), std('#1d2b4f', 0.5), fx, 0.36, fz);
  for (let k = 0; k < 6; k++) {
    const rx = fx - 0.48 + k * 0.19;
    add(new THREE.CylinderGeometry(0.012, 0.012, 1.15, 6), std('#c2cad6', 0.25, { metalness: 0.7 }), rx, 0.98, fz, scene, flat).rotation.x = Math.PI / 2;
    for (const s of [-1, 1]) add(new THREE.CylinderGeometry(0.035, 0.035, 0.07, 10), std(k % 2 ? '#ff5a5f' : '#ffd34d', 0.4), rx, 0.98, fz + s * 0.66, scene, flat).rotation.x = Math.PI / 2;
    for (let m = 0; m < 2; m++) add(box(0.03, 0.08, 0.03), std(k % 2 ? '#ff5a5f' : '#ffd34d', 0.4), rx, 0.95, fz - 0.15 + m * 0.3, scene, flat);
  }
  block(fx - 0.7, fz - 0.75, fx + 0.7, fz + 0.75);

  // góc chơi máy console: TV lớn + sofa + 2 ghế lười
  add(box(2.2, 0.45, 0.5, 0.05), std('#2b2b40', 0.5), 22.4, 0.225, 1.0);
  add(box(2.4, 1.36, 0.08, 0.03), std('#16161c', 0.35), 22.4, 1.25, 1.05);
  const tv = new THREE.Mesh(new THREE.PlaneGeometry(2.26, 1.22), new THREE.MeshBasicMaterial({ map: arcadeTex(9), toneMapped: false }));
  tv.position.set(22.4, 1.25, 1.095); scene.add(tv);
  block(21.2, 0.6, 23.6, 1.4);
  const sofaM = std('#7c5cff', 0.85), sofaCush = std('#ffd34d', 0.8);
  const sg = new THREE.Group(); sg.position.set(22.4, 0, 4.0); sg.rotation.y = Math.PI; scene.add(sg);
  add(box(2.5, 0.32, 0.9, 0.08), sofaM, 0, 0.27, 0, sg); add(box(2.3, 0.14, 0.78, 0.07), sofaM, 0, 0.47, 0.04, sg);
  add(box(2.5, 0.7, 0.24, 0.1), sofaM, 0, 0.62, -0.34, sg);
  for (const s of [-1, 1]) add(box(0.22, 0.52, 0.9, 0.09), sofaM, s * 1.24, 0.42, 0, sg);
  for (const x of [-0.7, 0.7]) add(box(0.34, 0.32, 0.12, 0.06), sofaCush, x, 0.68, -0.2, sg).rotation.x = -0.2;
  for (let k = -1; k <= 1; k++) seat(`gs${k + 2}`, 22.4 - k * 0.75, 4.05, Math.PI, 0.47, { x: 22.4 - k * 0.75, z: 3.2 });
  block(21.1, 3.5, 23.7, 4.5);
  add(new THREE.CylinderGeometry(0.42, 0.42, 0.04, 28), std('#fbf7f0', 0.4), 22.4, 0.42, 2.55);
  add(new THREE.CylinderGeometry(0.06, 0.09, 0.4, 10), std('#3a3a44', 0.4), 22.4, 0.2, 2.55);
  add(box(0.18, 0.04, 0.1, 0.02), std('#1a1a1a', 0.4), 22.3, 0.46, 2.5, scene, flat); add(box(0.18, 0.04, 0.1, 0.02), std('#f5f5f5', 0.4), 22.55, 0.46, 2.62, scene, flat); // tay cầm game
  block(21.95, 2.1, 22.85, 3.0);
  const bagMs = [std('#ff9a6b', 0.95), std('#45d2b4', 0.95)];
  [[20.3, 2.6, Math.PI * 0.82], [24.5, 2.6, -Math.PI * 0.82]].forEach(([x, z, f], i) => {
    const b = add(new THREE.SphereGeometry(0.44, 18, 12), bagMs[i], x, 0.26, z); b.scale.set(1, 0.6, 1);
    const back = add(new THREE.SphereGeometry(0.3, 14, 10), bagMs[i], x - Math.sin(f) * 0.26, 0.48, z - Math.cos(f) * 0.26); back.scale.set(1.1, 0.9, 0.7); back.rotation.y = f;
    seat(`gb${i + 1}`, x, z, f, 0.36, { x: x + Math.sin(f) * 0.8, z: z + Math.cos(f) * 0.8 });
  });

  // bàn bóng bàn
  const px = 17.6, pz = 7.2;
  add(box(2.3, 0.05, 1.28, 0.02), std('#1f5fd1', 0.6), px, 0.76, pz);
  add(box(2.3, 0.006, 0.02), std('#ffffff', 0.6), px, 0.788, pz, scene, flat);
  add(box(0.02, 0.006, 1.26), std('#ffffff', 0.6), px - 1.14, 0.788, pz, scene, flat); add(box(0.02, 0.006, 1.26), std('#ffffff', 0.6), px + 1.14, 0.788, pz, scene, flat);
  add(box(0.02, 0.16, 1.4), std('#f6f3ee', 0.8), px, 0.86, pz, scene, flat);
  for (const [lx, lz] of [[-0.95, -0.5], [0.95, -0.5], [-0.95, 0.5], [0.95, 0.5]]) add(box(0.06, 0.74, 0.06), std('#3a3a44', 0.4), px + lx, 0.37, pz + lz, scene, flat);
  add(box(0.16, 0.02, 0.15, 0.01), std('#d8262e', 0.6), px - 0.6, 0.8, pz + 0.3, scene, flat);
  add(new THREE.SphereGeometry(0.02, 8, 6), std('#ffffff', 0.4), px + 0.4, 0.82, pz - 0.2, scene, flat);
  block(px - 1.2, pz - 0.7, px + 1.2, pz + 0.7);

  // máy gắp thú + máy bán nước (quay ra phía trước cho dễ thấy)
  [[23.3, '#ff7aa8'], [24.5, '#4aa8ff']].forEach(([x, col]) => {
    add(box(1.0, 0.85, 0.9, 0.05), std(col, 0.5), x, 0.425, 8.5);
    add(box(0.96, 0.95, 0.86), new THREE.MeshStandardMaterial({ color: '#dff1ff', roughness: 0.05, transparent: true, opacity: 0.35 }), x, 1.33, 8.5, scene, flat);
    add(box(1.02, 0.22, 0.92, 0.05), std(col, 0.5), x, 1.91, 8.5, scene, flat);
    add(box(0.8, 0.1, 0.02), glow('#fff1d6', 1.4), x, 1.91, 8.97, scene, flat);
    const R2 = rng(Math.round(x * 10));
    for (let k = 0; k < 9; k++) add(new THREE.SphereGeometry(0.1, 10, 8), std(['#ffd34d', '#ff9ccf', '#9fd0ff', '#b6f5d8', '#c3a6ff'][k % 5], 0.8), x - 0.3 + (k % 3) * 0.3 + R2() * 0.05, 0.95 + Math.floor(k / 3) * 0.05, 8.3 + R2() * 0.3, scene, flat);
    add(box(0.04, 0.3, 0.04), std('#c2cad6', 0.3, { metalness: 0.6 }), x + 0.1, 1.6, 8.5, scene, flat);
    block(x - 0.55, 8.0, x + 0.55, 9.0);
  });
  add(box(0.95, 1.95, 0.75, 0.05), std('#e1262d', 0.45), 21.8, 0.975, 8.6);
  add(box(0.6, 1.3, 0.02), glow('#d9f1ff', 0.9), 21.68, 1.15, 8.98, scene, flat);
  for (let r = 0; r < 4; r++) for (let c = 0; c < 4; c++) add(new THREE.CylinderGeometry(0.035, 0.035, 0.13, 10), std(['#ffd34d', '#45d2b4', '#ff9ccf', '#4aa8ff'][c], 0.4), 21.48 + c * 0.13, 0.65 + r * 0.3, 8.95, scene, flat);
  add(box(0.18, 0.5, 0.02), std('#2b2b33', 0.4), 22.13, 1.2, 8.98, scene, flat);
  block(21.3, 8.2, 22.3, 9.0);

  // chậu cây ngăn nhẹ giữa quán và khu game
  for (let z = 0.8; z <= 6.2; z += 1.8) {
    add(box(0.5, 0.45, 1.5, 0.06), std('#e3d5bf', 0.8), 14.3, 0.225, z);
    for (let k = 0; k < 3; k++) add(new THREE.IcosahedronGeometry(0.22, 1), std(k % 2 ? '#5fb36f' : '#3f9a5a', 0.85, { flatShading: true }), 14.3 + (k - 1) * 0.04, 0.6, z - 0.45 + k * 0.45);
    block(14.0, z - 0.8, 14.6, z + 0.8);
  }
}

// ================= sân vườn ngoài trời (phía trước) =================
function deckTex() {
  const R = rng(55);
  const tex = canvasTex(1024, 512, (g, w, h) => {
    const rowH = 48;
    for (let y = 0; y < h; y += rowH) {
      let x = -Math.floor(R() * 300);
      while (x < w) {
        const len = 300 + Math.floor(R() * 300); const v = R();
        g.fillStyle = `rgb(${Math.round(196 + v * 16)},${Math.round(150 + v * 14)},${Math.round(104 + v * 12)})`;
        g.fillRect(x, y, len, rowH);
        g.strokeStyle = 'rgba(120,80,45,.12)'; g.lineWidth = 1.2;
        for (let k = 0; k < 3; k++) { const yy = y + 8 + R() * (rowH - 16); g.beginPath(); g.moveTo(x, yy); for (let xx = x; xx < x + len; xx += 40) g.lineTo(xx, yy + Math.sin(xx * 0.02 + k) * 2); g.stroke(); }
        g.fillStyle = 'rgba(90,60,30,.35)'; g.fillRect(x, y, 3, rowH);
        x += len;
      }
      g.fillStyle = 'rgba(90,60,30,.4)'; g.fillRect(0, y, w, 3);
    }
  });
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  return tex;
}
function gateTex() {
  return canvasTex(1024, 192, (g, w, h) => {
    const bg = g.createLinearGradient(0, 0, w, 0); bg.addColorStop(0, '#0a5cc2'); bg.addColorStop(1, '#0a78f0');
    g.fillStyle = bg; g.fillRect(0, 0, w, h);
    g.fillStyle = '#ffffff'; g.textAlign = 'center'; g.textBaseline = 'middle';
    g.font = '900 86px "Nunito", "Segoe UI", sans-serif'; g.fillText('VĂN PHÒNG AI', w / 2, h / 2 - 12);
    g.font = '800 36px "Nunito", "Segoe UI", sans-serif'; g.fillStyle = '#ffd34d'; g.fillText('SIMI · BAR · GAME · CINEMA', w / 2, h / 2 + 56);
  });
}

function buildTerrace({ scene, add, box, block, seat, out, glassM, tableTop }) {
  const flat = { cast: false };
  const Z1 = BAR.inZ, Z2 = BAR.maxZ, X1 = BAR.minX, X2 = BAR.maxX;
  const dt = deckTex(); dt.repeat.set((X2 - X1) / 10, (Z2 - Z1) / 5);
  const deck = new THREE.Mesh(new THREE.PlaneGeometry(X2 - X1, Z2 - Z1), new THREE.MeshStandardMaterial({ map: dt, roughness: 0.85 }));
  deck.rotation.x = -Math.PI / 2; deck.position.set((X1 + X2) / 2, 0.001, (Z1 + Z2) / 2); deck.receiveShadow = true; scene.add(deck);
  out.deck = deck;
  // ngưỡng cửa (dải đá) giữa trong nhà và sân
  add(box(X2 - X1, 0.03, 0.24, 0.01), std('#d8d2c6', 0.8), (X1 + X2) / 2, 0.015, Z1, scene, flat);

  // hàng rào cây xanh: trái, phải, phía trước (chừa cổng vào ở giữa)
  const hedgeM = std('#4f9d5d', 0.9), hedgeTop = std('#5fb36f', 0.9, { flatShading: true });
  const hedge = (x1, z1, x2, z2) => {
    const w = Math.abs(x2 - x1) || 0.5, d = Math.abs(z2 - z1) || 0.5;
    add(box(w, 0.7, d, 0.18), hedgeM, (x1 + x2) / 2, 0.35, (z1 + z2) / 2);
    const n = Math.max(2, Math.round(Math.max(w, d) / 0.7));
    for (let k = 0; k < n; k++) {
      const t = (k + 0.5) / n; const l = add(new THREE.IcosahedronGeometry(0.3, 1), hedgeTop, x1 + (x2 - x1) * t, 0.72, z1 + (z2 - z1) * t, scene);
      l.scale.set(1, 0.6, 1);
    }
    block(Math.min(x1, x2) - 0.25, Math.min(z1, z2) - 0.25, Math.max(x1, x2) + 0.25, Math.max(z1, z2) + 0.25);
  };
  hedge(X1 + 0.3, Z1 + 0.6, X1 + 0.3, Z2 - 0.35);
  hedge(X2 - 0.3, Z1 + 0.6, X2 - 0.3, Z2 - 0.35);
  hedge(X1 + 0.6, Z2 - 0.35, 10.0, Z2 - 0.35);
  hedge(15.0, Z2 - 0.35, X2 - 0.6, Z2 - 0.35);
  // luống hoa trước hàng rào
  const flowers = [std('#ff7aa8', 0.7), std('#ffd34d', 0.7), std('#ffffff', 0.7), std('#c3a6ff', 0.7)];
  const R = rng(91);
  for (const [a, b] of [[X1 + 1.2, 9.4], [15.6, X2 - 1.2]]) for (let x = a; x < b; x += 0.55) add(new THREE.SphereGeometry(0.07, 8, 6), flowers[Math.floor(R() * 4)], x + R() * 0.2, 0.12, Z2 - 0.95 + R() * 0.15, scene, flat);

  // cổng vào
  const gx = 12.5, gz = Z2 - 0.35;
  for (const dx of [-2.2, 2.2]) {
    add(box(0.32, 3.0, 0.32, 0.05), std('#ffffff', 0.5), gx + dx, 1.5, gz);
    add(box(0.5, 0.18, 0.5, 0.04), std('#d8d2c6', 0.7), gx + dx, 0.09, gz);
    block(gx + dx - 0.25, gz - 0.25, gx + dx + 0.25, gz + 0.25);
  }
  add(box(4.9, 0.7, 0.24, 0.06), std('#0a5cc2', 0.5), gx, 3.1, gz);
  const gsign = new THREE.Mesh(new THREE.PlaneGeometry(4.6, 0.62), new THREE.MeshBasicMaterial({ map: gateTex(), toneMapped: false }));
  gsign.position.set(gx, 3.1, gz + 0.125); scene.add(gsign);
  // thảm chào ở cổng
  const mat = new THREE.Mesh(new THREE.PlaneGeometry(2.6, 1.3), new THREE.MeshStandardMaterial({ map: canvasTex(512, 256, (g, w, h) => { g.fillStyle = '#0a5cc2'; g.fillRect(0, 0, w, h); g.strokeStyle = '#ffd34d'; g.lineWidth = 10; g.strokeRect(14, 14, w - 28, h - 28); g.fillStyle = '#fff'; g.font = '900 64px Nunito, sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText('XIN CHÀO', w / 2, h / 2 + 4); }), roughness: 0.95 }));
  mat.rotation.x = -Math.PI / 2; mat.position.set(gx, 0.006, gz - 1.1); scene.add(mat);

  // bàn dù (ghế bistro) – ngồi được
  const umbM = [std('#0a78f0', 0.7, { side: THREE.DoubleSide }), std('#ff7a6b', 0.7, { side: THREE.DoubleSide }), std('#2fc1a5', 0.7, { side: THREE.DoubleSide }), std('#ffd34d', 0.7, { side: THREE.DoubleSide })];
  const chairM = std('#e9eef5', 0.4, { metalness: 0.3 }), poleM = std('#f6f3ee', 0.5);
  [[-10.4, 13.4], [-6.0, 15.4], [-1.6, 13.2], [3.0, 15.3]].forEach(([tx, tz], ti) => {
    add(new THREE.CylinderGeometry(0.52, 0.52, 0.04, 28), tableTop, tx, 0.74, tz);
    add(new THREE.CylinderGeometry(0.04, 0.05, 0.72, 10), chairM, tx, 0.36, tz);
    add(new THREE.CylinderGeometry(0.26, 0.3, 0.03, 20), chairM, tx, 0.015, tz);
    add(new THREE.CylinderGeometry(0.025, 0.025, 2.4, 8), poleM, tx, 1.2, tz, scene, flat);
    add(new THREE.ConeGeometry(1.15, 0.45, 8, 1, true), umbM[ti], tx, 2.45, tz);
    add(new THREE.SphereGeometry(0.05, 8, 6), poleM, tx, 2.7, tz, scene, flat);
    add(new THREE.CylinderGeometry(0.05, 0.04, 0.12, 12), glassM, tx + 0.15, 0.82, tz, scene, flat);
    add(new THREE.CylinderGeometry(0.05, 0.04, 0.12, 12), glassM, tx - 0.12, 0.82, tz + 0.12, scene, flat);
    block(tx - 0.58, tz - 0.58, tx + 0.58, tz + 0.58);
    for (let k = 0; k < 3; k++) {
      const a = (k / 3) * Math.PI * 2 + 0.5;
      const x = tx + Math.sin(a) * 0.95, z = tz + Math.cos(a) * 0.95;
      const g = new THREE.Group(); g.position.set(x, 0, z); g.rotation.y = a + Math.PI; scene.add(g);
      add(new THREE.CylinderGeometry(0.22, 0.22, 0.05, 18), chairM, 0, 0.46, 0, g);
      add(box(0.4, 0.34, 0.04, 0.02), chairM, 0, 0.7, -0.2, g);
      for (const [lx, lz] of [[-0.15, -0.15], [0.15, -0.15], [-0.15, 0.15], [0.15, 0.15]]) add(new THREE.CylinderGeometry(0.014, 0.014, 0.46, 6), chairM, lx, 0.23, lz, g, flat);
      seat(`o${ti + 1}${'abc'[k]}`, x, z, a + Math.PI, 0.48, { x: tx + Math.sin(a) * 1.55, z: tz + Math.cos(a) * 1.55 });
    }
  });

  // đài phun nước + ghế đá
  const fx = 20.2, fz = 13.8;
  add(new THREE.CylinderGeometry(1.5, 1.6, 0.45, 40), std('#e7e1d6', 0.7), fx, 0.225, fz);
  add(new THREE.CylinderGeometry(1.32, 1.32, 0.04, 40), std('#cfc7b8', 0.7), fx, 0.44, fz, scene, flat); // gờ trong: đỉnh 0.46, cao hơn mặt bồn 1 cm
  const water = new THREE.Mesh(new THREE.CylinderGeometry(1.3, 1.3, 0.02, 40), new THREE.MeshStandardMaterial({ color: '#7cc4ff', roughness: 0.1, emissive: '#2f8cf0', emissiveIntensity: 0.35, transparent: true, opacity: 0.85 }));
  water.position.set(fx, 0.43, fz); scene.add(water); // mặt nước 0.44 – thấp hơn chân cột 1 cm (không trùng mặt phẳng)
  add(new THREE.CylinderGeometry(0.16, 0.22, 0.9, 16), std('#e7e1d6', 0.7), fx, 0.9, fz);
  add(new THREE.CylinderGeometry(0.55, 0.2, 0.18, 24), std('#e7e1d6', 0.7), fx, 1.4, fz);
  const jet = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.08, 0.6, 10), new THREE.MeshBasicMaterial({ color: '#d6efff', transparent: true, opacity: 0.7 }));
  jet.position.set(fx, 1.75, fz); scene.add(jet);
  // gợn nước lan ra (2 vòng thay nhau)
  const ripples = [0, 1].map(() => { const r = new THREE.Mesh(new THREE.RingGeometry(0.3, 0.36, 40), new THREE.MeshBasicMaterial({ color: '#ffffff', transparent: true, opacity: 0.5, depthWrite: false })); r.rotation.x = -Math.PI / 2; r.position.set(fx, 0.47, fz); scene.add(r); return r; });
  out.animated.push((t) => {
    ripples.forEach((r, i) => { const k = ((t * 0.35 + i * 0.5) % 1); r.scale.setScalar(1 + k * 2.6); r.material.opacity = 0.45 * (1 - k); });
    jet.scale.y = 1 + Math.sin(t * 6) * 0.06;
  });
  block(fx - 1.65, fz - 1.65, fx + 1.65, fz + 1.65);
  const stone = std('#d8d2c6', 0.8);
  [[fx - 3.0, fz, Math.PI / 2], [fx + 3.0, fz, -Math.PI / 2], [fx, fz - 3.0, 0]].forEach(([bx, bz, f], i) => {
    const g = new THREE.Group(); g.position.set(bx, 0, bz); g.rotation.y = f; scene.add(g);
    add(box(1.7, 0.1, 0.5, 0.04), std('#b8875a', 0.6), 0, 0.46, 0, g);
    add(box(1.7, 0.4, 0.07, 0.03), std('#b8875a', 0.6), 0, 0.72, -0.24, g);
    for (const lx of [-0.65, 0.65]) add(box(0.14, 0.42, 0.44, 0.03), stone, lx, 0.21, 0, g);
    const c = Math.cos(f), s = Math.sin(f);
    for (const lx of [-0.42, 0.42]) seat(`fb${i + 1}${lx < 0 ? 'a' : 'b'}`, bx + lx * c, bz - lx * s, f, 0.5, { x: bx + lx * c + s * 0.7, z: bz - lx * s + c * 0.7 });
    block(bx - 0.9 * Math.abs(c) - 0.3 * Math.abs(s), bz - 0.9 * Math.abs(s) - 0.3 * Math.abs(c), bx + 0.9 * Math.abs(c) + 0.3 * Math.abs(s), bz + 0.9 * Math.abs(s) + 0.3 * Math.abs(c));
  });

  // cây lớn ở các góc
  const trunkM = std('#8a5a3b', 0.8), crownMs = [std('#4f9d5d', 0.85, { flatShading: true }), std('#5fb36f', 0.85, { flatShading: true }), std('#3f8a4f', 0.85, { flatShading: true })];
  [[-12.4, 16.4], [25.0, 16.4], [24.9, 11.2], [7.3, 16.6]].forEach(([x, z], i) => {
    add(new THREE.CylinderGeometry(0.12, 0.18, 1.8, 10), trunkM, x, 0.9, z);
    const RR = rng(140 + i);
    for (let k = 0; k < 6; k++) { const l = add(new THREE.IcosahedronGeometry(1, 1), crownMs[k % 3], x + (RR() - 0.5) * 0.9, 2.1 + RR() * 0.8, z + (RR() - 0.5) * 0.9); l.scale.setScalar(0.45 + RR() * 0.25); }
    block(x - 0.3, z - 0.3, x + 0.3, z + 0.3);
  });
  // đèn vườn
  for (const [x, z] of [[-8.0, 17.0], [-0.5, 11.4], [5.6, 11.4], [17.0, 17.0], [23.2, 11.4], [-12.6, 11.2]]) {
    add(new THREE.CylinderGeometry(0.14, 0.18, 0.12, 14), std('#2b2b33', 0.4), x, 0.06, z);
    add(new THREE.CylinderGeometry(0.035, 0.035, 2.1, 8), std('#2b2b33', 0.4), x, 1.1, z);
    add(new THREE.SphereGeometry(0.17, 14, 10), glow('#fff1d0', 1.6), x, 2.25, z, scene, flat);
    lightPool(scene, x, z, 1.4, '#ffe3b0', 0.22);
    block(x - 0.18, z - 0.18, x + 0.18, z + 0.18);
  }
}
