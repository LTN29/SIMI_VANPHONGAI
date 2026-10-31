// Dựng căn phòng 3D: sàn, tường, cửa sổ, bảng việc, đồ đạc, bàn làm việc.
import * as THREE from 'three';

export const ROOM = { minX: -7, maxX: 7, minZ: -5, maxZ: 5, wallH: 3.1 };
export const SLOTS = [
  { x: 0, z: -1.5 }, { x: -4.1, z: -1.5 }, { x: 4.1, z: -1.5 },
  { x: -4.1, z: 2.0 }, { x: 4.1, z: 2.0 }, { x: 0, z: 2.0 },
];
export const DESK = { w: 1.8, d: 0.85, h: 0.76 };
export const SEAT_DZ = -0.82;
export const DOOR = { x: -5.6, z: -4.95 };
export const POI = {
  cooler: { x: 5.55, z: -3.75, face: { x: 6.3, z: -4.45 } },
  board: { x: 0.2, z: -3.85, face: { x: 0.2, z: -5 } },
  windowL: { x: -3.2, z: -3.9, face: { x: -3.2, z: -5 } },
  windowR: { x: 3.4, z: -3.9, face: { x: 3.4, z: -5 } },
  shelf: { x: -5.7, z: -0.4, face: { x: -7, z: -0.4 } },
  tray: { x: 5.55, z: 3.2, face: { x: 5.55, z: 4.2 } },
  plant: { x: -5.2, z: 1.0, face: { x: -6.5, z: 1.0 } },
};
// vật cản cho tìm đường [x1, z1, x2, z2]
export const OBSTACLES = [
  [5.95, -4.95, 6.7, -4.05],   // bình nước
  [-7, -1.4, -6.35, 0.6],      // giá sách
  [-7, 2.5, -5.95, 4.6],       // sofa
  [-5.7, 3.05, -4.9, 3.95],    // bàn trà
  [5.0, 3.75, 6.2, 4.6],       // bàn khay kết quả
  [-6.9, -4.9, -6.2, -4.2],    // cây góc trái
  [6.3, 4.3, 6.95, 4.95],      // cây góc phải
  [-6.9, 0.8, -6.3, 1.4],      // cây cạnh giá sách
];

const std = (color, rough = 0.8, extra = {}) => new THREE.MeshStandardMaterial({ color, roughness: rough, metalness: 0, ...extra });

function canvasTex(w, h, draw, srgb = true) {
  const c = document.createElement('canvas'); c.width = w; c.height = h;
  const g = c.getContext('2d');
  draw(g, w, h);
  const tex = new THREE.CanvasTexture(c);
  if (srgb) tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 4;
  return { tex, canvas: c, g };
}

function rng(seed) { let s = seed >>> 0; return () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296); }

function woodFloor() {
  const R = rng(7);
  const t = canvasTex(1024, 1024, (g, w, h) => {
    const rowH = 64;
    for (let y = 0; y < h; y += rowH) {
      let x = -Math.floor(R() * 300);
      while (x < w) {
        const len = 220 + Math.floor(R() * 260);
        const base = [196 + R() * 22, 142 + R() * 18, 96 + R() * 14].map(Math.round);
        g.fillStyle = `rgb(${base})`; g.fillRect(x, y, len, rowH);
        for (let i = 0; i < 9; i++) {
          g.strokeStyle = `rgba(110,70,40,${0.05 + R() * 0.07})`; g.lineWidth = 1 + R() * 1.5;
          const yy = y + 6 + R() * (rowH - 12);
          g.beginPath(); g.moveTo(x, yy);
          g.bezierCurveTo(x + len * 0.3, yy + (R() - 0.5) * 8, x + len * 0.7, yy + (R() - 0.5) * 8, x + len, yy + (R() - 0.5) * 4);
          g.stroke();
        }
        g.fillStyle = 'rgba(80,50,30,0.55)'; g.fillRect(x, y, 2, rowH);
        x += len;
      }
      g.fillStyle = 'rgba(80,50,30,0.6)'; g.fillRect(0, y + rowH - 2, w, 2);
      g.fillStyle = 'rgba(255,235,200,0.12)'; g.fillRect(0, y, w, 2);
    }
  });
  t.tex.wrapS = t.tex.wrapT = THREE.RepeatWrapping;
  t.tex.repeat.set((ROOM.maxX - ROOM.minX) / 4, (ROOM.maxZ - ROOM.minZ) / 4);
  return t.tex;
}

export const RUGS = {
  tim: ['#3f2d84', '#5a42a6', '#f5c518', '#33246c'],
  mint: ['#4f9c88', '#7cc8b2', '#fff4d6', '#3f8573'],
  vang: ['#d9a441', '#f2c96b', '#fff7e0', '#b98a2f'],
  xanh: ['#1a6fd6', '#2f8cf0', '#ffffff', '#0f5bb5'],
  navy: ['#142c5a', '#1f3d73', '#e1262d', '#0f2247'],
};
function rugTex(pal = RUGS.tim) {
  return canvasTex(512, 320, (g, w, h) => {
    g.fillStyle = pal[0]; g.fillRect(0, 0, w, h);
    g.fillStyle = pal[1]; g.fillRect(18, 18, w - 36, h - 36);
    g.strokeStyle = pal[2]; g.lineWidth = 6; g.strokeRect(34, 34, w - 68, h - 68);
    g.fillStyle = pal[3];
    for (let x = 70; x < w - 50; x += 46) for (let y = 70; y < h - 50; y += 46) {
      g.save(); g.translate(x, y); g.rotate(Math.PI / 4); g.fillRect(-9, -9, 18, 18); g.restore();
    }
    g.fillStyle = pal[2];
    for (let x = 70; x < w - 50; x += 46) for (let y = 70; y < h - 50; y += 46) { g.beginPath(); g.arc(x, y, 3, 0, 7); g.fill(); }
  }).tex;
}

function skyTex() {
  const t = canvasTex(512, 256, (g, w, h) => {
    const grd = g.createLinearGradient(0, 0, 0, h);
    grd.addColorStop(0, '#6fb6e8'); grd.addColorStop(0.7, '#bfe3f7'); grd.addColorStop(1, '#f4f0dc');
    g.fillStyle = grd; g.fillRect(0, 0, w, h);
    const R = rng(3);
    for (let i = 0; i < 7; i++) {
      const cx = R() * w, cy = 40 + R() * 110, s = 18 + R() * 22;
      g.fillStyle = 'rgba(255,255,255,0.92)';
      for (let k = 0; k < 5; k++) { g.beginPath(); g.arc(cx + k * s * 0.7, cy + Math.sin(k) * 5, s * (0.7 + R() * 0.5), 0, 7); g.fill(); }
    }
    g.fillStyle = '#7fae7a'; g.beginPath(); g.moveTo(0, h);
    for (let x = 0; x <= w; x += 16) g.lineTo(x, h - 30 - Math.sin(x / 40) * 10 - R() * 6);
    g.lineTo(w, h); g.fill();
  });
  t.tex.wrapS = THREE.RepeatWrapping;
  return t.tex;
}

const _texLoader = new THREE.TextureLoader();
function loadBrandTex(url, cb) {
  _texLoader.load(url, (t) => { t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4; cb(t); }, undefined, () => {});
}

function posterTex() {
  return canvasTex(256, 320, (g, w, h) => {
    g.fillStyle = '#fbf3e4'; g.fillRect(0, 0, w, h);
    g.fillStyle = '#f2b450'; g.beginPath(); g.arc(160, 120, 70, 0, 7); g.fill();
    g.fillStyle = '#3f8f8a'; g.fillRect(30, 170, 200, 90);
    g.fillStyle = '#d0644a'; g.beginPath(); g.moveTo(30, 260); g.lineTo(110, 150); g.lineTo(190, 260); g.fill();
    g.fillStyle = '#2b2b33'; g.font = 'bold 26px Segoe UI, sans-serif'; g.textAlign = 'center'; g.fillText('CỐ LÊN!', w / 2, 300);
  }).tex;
}

export function buildRoom(scene, renderer) {
  const out = { animated: [] };
  // sàn
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(ROOM.maxX - ROOM.minX, ROOM.maxZ - ROOM.minZ),
    std('#ffffff', 0.75, { map: woodFloor() }));
  floor.rotation.x = -Math.PI / 2; floor.receiveShadow = true; scene.add(floor);
  out.floor = floor;
  // thảm
  const rugMat = std('#ffffff', 0.95, { map: rugTex() });
  const rug = new THREE.Mesh(new THREE.PlaneGeometry(5.2, 2.2), rugMat);
  rug.rotation.x = -Math.PI / 2; rug.position.set(0, 0.006, 0.25); rug.receiveShadow = true; scene.add(rug);

  // tường sau + tường trái
  const wallM = std('#efe3cc', 0.95), wainM = std('#c9a77d', 0.85), trimM = std('#8a6040', 0.7);
  out.setDecor = (d = {}) => {
    const W = { kem: ['#efe3cc', '#c9a77d'], bacha: ['#d6efe4', '#8fc7b0'], xam: ['#dfe5ee', '#a9b6c9'], troi: ['#d9e9f7', '#8fb3dc'], vanh: ['#fbf3d6', '#e2c98a'] }[d.wall || 'troi'];
    if (W) { wallM.color.set(W[0]); wainM.color.set(W[1]); }
    const F = { sang: '#ffffff', dam: '#a8876a', xam: '#d4cfcb' }[d.floor || 'sang'];
    if (F) floor.material.color.set(F);
    const R = RUGS[d.rug || 'xanh'];
    if (R) { const old = rugMat.map; rugMat.map = rugTex(R); rugMat.needsUpdate = true; old && old.dispose(); }
  };
  const W = ROOM.maxX - ROOM.minX, D = ROOM.maxZ - ROOM.minZ, H = ROOM.wallH;
  const back = new THREE.Mesh(new THREE.BoxGeometry(W + 0.2, H, 0.2), wallM);
  back.position.set(0, H / 2, ROOM.minZ - 0.1); back.receiveShadow = true; scene.add(back);
  const left = new THREE.Mesh(new THREE.BoxGeometry(0.2, H, D), wallM);
  left.position.set(ROOM.minX - 0.1, H / 2, 0); left.receiveShadow = true; scene.add(left);
  const wb = new THREE.Mesh(new THREE.BoxGeometry(W + 0.2, 0.95, 0.04), wainM); wb.position.set(0, 0.475, ROOM.minZ + 0.02); wb.receiveShadow = true; scene.add(wb);
  const wl = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.95, D), wainM); wl.position.set(ROOM.minX + 0.02, 0.475, 0); wl.receiveShadow = true; scene.add(wl);
  const tb = new THREE.Mesh(new THREE.BoxGeometry(W + 0.2, 0.06, 0.07), trimM); tb.position.set(0, 0.96, ROOM.minZ + 0.035); scene.add(tb);
  const tl = new THREE.Mesh(new THREE.BoxGeometry(0.07, 0.06, D), trimM); tl.position.set(ROOM.minX + 0.035, 0.96, 0); scene.add(tl);
  // viền sàn phía trước (cho cảm giác "sa bàn")
  const edgeM = std('#5b3f2a', 0.8);
  const ef = new THREE.Mesh(new THREE.BoxGeometry(W + 0.4, 0.25, 0.2), edgeM); ef.position.set(0, -0.125, ROOM.maxZ + 0.1); scene.add(ef);
  const er = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.25, D + 0.2), edgeM); er.position.set(ROOM.maxX + 0.1, -0.125, 0); scene.add(er);

  // cửa sổ
  const sky = skyTex();
  out.sky = sky;
  const frameM = std('#fbf7ee', 0.6);
  for (const x of [-3.2, 3.4]) {
    const g = new THREE.Group(); g.position.set(x, 1.85, ROOM.minZ + 0.02);
    const glassMat = new THREE.MeshBasicMaterial({ map: sky, toneMapped: false });
    (out.skyMats = out.skyMats || []).push(glassMat);
    const glass = new THREE.Mesh(new THREE.PlaneGeometry(1.9, 1.25), glassMat);
    glass.position.z = 0.005; g.add(glass);
    const fr = (w, h, px, py) => { const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, 0.08), frameM); m.position.set(px, py, 0.03); m.castShadow = true; g.add(m); };
    fr(2.05, 0.08, 0, 0.66); fr(2.05, 0.08, 0, -0.66); fr(0.08, 1.4, -0.99, 0); fr(0.08, 1.4, 0.99, 0); fr(0.05, 1.3, 0, 0); fr(1.95, 0.05, 0, 0.05);
    const sill = new THREE.Mesh(new THREE.BoxGeometry(2.2, 0.06, 0.22), frameM); sill.position.set(0, -0.72, 0.1); sill.castShadow = true; g.add(sill);
    // chậu cây nhỏ trên bệ cửa
    const pot = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.06, 0.12, 10), std('#c56a43')); pot.position.set(0.6, -0.63, 0.12); g.add(pot);
    const bush = new THREE.Mesh(new THREE.IcosahedronGeometry(0.11, 0), std('#5aa05a')); bush.position.set(0.6, -0.5, 0.12); g.add(bush);
    scene.add(g);
  }

  // cửa ra vào
  const door = new THREE.Group(); door.position.set(DOOR.x, 0, ROOM.minZ + 0.03);
  const dframe = std('#6b4a2e', 0.7), dpanel = std('#a8743f', 0.65);
  const d1 = new THREE.Mesh(new THREE.BoxGeometry(1.15, 2.2, 0.06), dpanel); d1.position.set(0, 1.1, 0.02); d1.castShadow = true; door.add(d1);
  for (const [w, h, x, y] of [[1.3, 0.09, 0, 2.24], [0.09, 2.25, -0.62, 1.12], [0.09, 2.25, 0.62, 1.12]]) { const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, 0.1), dframe); m.position.set(x, y, 0.03); door.add(m); }
  for (const y of [0.6, 1.55]) { const p = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.6, 0.02), std('#946535', 0.7)); p.position.set(0, y, 0.06); door.add(p); }
  const knob = new THREE.Mesh(new THREE.SphereGeometry(0.045, 10, 8), std('#e3c15a', 0.3, { metalness: 0.6 })); knob.position.set(0.42, 1.05, 0.09); door.add(knob);
  scene.add(door);

  // bảng việc (kanban)
  const boardCanvas = canvasTex(768, 360, () => {});
  const board = new THREE.Group(); board.position.set(0.2, 1.9, ROOM.minZ + 0.03);
  const bframe = new THREE.Mesh(new THREE.BoxGeometry(2.9, 1.42, 0.06), std('#9aa0a8', 0.5)); bframe.castShadow = true; board.add(bframe);
  const bsurf = new THREE.Mesh(new THREE.PlaneGeometry(2.78, 1.3), new THREE.MeshStandardMaterial({ map: boardCanvas.tex, roughness: 0.5 }));
  bsurf.position.z = 0.032; board.add(bsurf);
  const tray0 = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.05, 0.1), std('#8c929a', 0.5)); tray0.position.set(0, -0.74, 0.06); board.add(tray0);
  scene.add(board);
  out.drawBoard = (counts) => {
    const { g, canvas } = boardCanvas; const w = canvas.width, h = canvas.height;
    g.fillStyle = '#fbfbf7'; g.fillRect(0, 0, w, h);
    const cols = [['CHỜ', counts.wait, '#f6d36b'], ['ĐANG LÀM', counts.run, '#8fd0f2'], ['XONG', counts.done, '#9fe0a0']];
    cols.forEach(([name, n, col], i) => {
      const x0 = 18 + i * 250;
      g.fillStyle = col; g.fillRect(x0, 16, 232, 46);
      g.fillStyle = '#2b2b33'; g.font = 'bold 26px Segoe UI, Arial, sans-serif'; g.textAlign = 'left';
      g.fillText(name, x0 + 12, 49);
      g.textAlign = 'right'; g.fillText(String(n), x0 + 220, 49);
      if (i < 2) { g.fillStyle = '#d5d9df'; g.fillRect(x0 + 241, 16, 3, h - 32); }
      const shown = Math.min(n, 9);
      for (let k = 0; k < shown; k++) {
        const nx = x0 + 14 + (k % 3) * 74, ny = 80 + Math.floor(k / 3) * 86;
        g.save(); g.translate(nx + 30, ny + 34); g.rotate(((k * 37) % 9 - 4) * 0.02);
        g.fillStyle = 'rgba(0,0,0,0.12)'; g.fillRect(-28, -30, 62, 66);
        g.fillStyle = col; g.fillRect(-31, -34, 62, 66);
        g.fillStyle = 'rgba(0,0,0,0.25)'; for (let l = 0; l < 3; l++) g.fillRect(-22, -18 + l * 14, 40 - l * 8, 4);
        g.restore();
      }
    });
    boardCanvas.tex.needsUpdate = true;
  };
  out.drawBoard({ wait: 0, run: 0, done: 0 });

  // đồng hồ
  const clock = new THREE.Group(); clock.position.set(-1.75, 2.35, ROOM.minZ + 0.04);
  const face = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.28, 0.05, 32), std('#fbfaf5', 0.5)); face.rotation.x = Math.PI / 2; clock.add(face);
  const rim = new THREE.Mesh(new THREE.TorusGeometry(0.28, 0.03, 8, 32), std('#5b4a3a', 0.5)); clock.add(rim);
  for (let i = 0; i < 12; i++) { const m = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.05, 0.01), std('#5b4a3a')); const a = i / 12 * Math.PI * 2; m.position.set(Math.sin(a) * 0.22, Math.cos(a) * 0.22, 0.03); m.rotation.z = -a; clock.add(m); }
  const hand = (len, wid) => { const g = new THREE.Group(); const m = new THREE.Mesh(new THREE.BoxGeometry(wid, len, 0.01), std('#222')); m.position.y = len / 2; g.add(m); g.position.z = 0.04; clock.add(g); return g; };
  const hh = hand(0.13, 0.03), mm = hand(0.2, 0.02);
  scene.add(clock);
  out.animated.push(() => { const d = new Date(); mm.rotation.z = -(d.getMinutes() + d.getSeconds() / 60) / 60 * Math.PI * 2; hh.rotation.z = -((d.getHours() % 12) + d.getMinutes() / 60) / 12 * Math.PI * 2; });

  // poster SIMI.vn đóng khung trên tường trái (dự phòng tranh vẽ nếu thiếu ảnh)
  const posterMat = std('#ffffff', 0.6, { map: posterTex() });
  const poster = new THREE.Mesh(new THREE.PlaneGeometry(0.9, 1.2), posterMat);
  poster.position.set(ROOM.minX + 0.05, 1.8, 2.4); poster.rotation.y = Math.PI / 2; scene.add(poster);
  const pf = new THREE.Mesh(new THREE.BoxGeometry(0.04, 1.3, 1.0), std('#0a78f0', 0.5)); pf.position.set(ROOM.minX + 0.015, 1.8, 2.4); scene.add(pf);
  loadBrandTex('brand/simi-banner.jpg', (t) => { posterMat.map = t; posterMat.needsUpdate = true; });

  // biển thương hiệu treo dây, đung đưa nhẹ
  const hangSign = (url, w, h, bg, pos, rotY, phase) => {
    const root = new THREE.Group(); root.position.copy(pos); root.rotation.y = rotY; scene.add(root);
    const nail = new THREE.Mesh(new THREE.SphereGeometry(0.03, 10, 8), std('#c9ced8', 0.3, { metalness: 0.6 }));
    nail.position.z = 0.02; root.add(nail);
    const swing = new THREE.Group(); root.add(swing);
    const drop = 0.32;
    const board = new THREE.Mesh(new THREE.BoxGeometry(w + 0.12, h + 0.12, 0.04), std(bg, 0.55));
    board.position.set(0, -drop - h / 2 - 0.06, 0.05); board.castShadow = true; swing.add(board);
    const face = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicMaterial({ transparent: true, opacity: 0 }));
    face.position.set(0, board.position.y, 0.075); swing.add(face);
    loadBrandTex(url, (t) => { face.material.map = t; face.material.opacity = 1; face.material.needsUpdate = true; });
    const cordM = std('#5a6478', 0.8);
    for (const sx of [-1, 1]) {
      const ex = sx * (w / 2 - 0.02), ey = -drop - 0.02;
      const len = Math.hypot(ex, ey);
      const cord = new THREE.Mesh(new THREE.CylinderGeometry(0.007, 0.007, len, 5), cordM);
      cord.position.set(ex / 2, ey / 2, 0.05); cord.rotation.z = Math.atan2(ex, -ey); swing.add(cord);
    }
    out.animated.push((t) => { swing.rotation.z = Math.sin((t || performance.now() / 1000) * 0.9 + phase) * 0.025; });
    return root;
  };
  // UNIQ: logo trắng trên nền navy, tường trái gần góc phòng
  hangSign('brand/uniq.png', 1.15, 0.41, '#142c5a', new THREE.Vector3(ROOM.minX + 0.03, 2.95, -3.05), Math.PI / 2, 0);
  // Crénot: nền trắng, viền tím, treo phía trên giá sách
  hangSign('brand/crenot.png', 1.35, 0.33, '#ffffff', new THREE.Vector3(ROOM.minX + 0.03, 3.0, -0.4), Math.PI / 2, 1.7);
  // SIMI.vn: chữ trắng trên nền xanh SIMI, tường sau giữa đồng hồ và cửa
  hangSign('brand/simi.png', 0.85, 0.255, '#0a78f0', new THREE.Vector3(-4.4, 2.95, ROOM.minZ + 0.03), 0, 3.1);

  // giá sách
  const shelf = new THREE.Group(); shelf.position.set(-6.68, 0, -0.4); shelf.rotation.y = Math.PI / 2;
  const wood = std('#8a5a35', 0.75);
  const sideG = new THREE.BoxGeometry(0.05, 2.0, 0.4);
  for (const x of [-0.95, 0.95]) { const s = new THREE.Mesh(sideG, wood); s.position.set(x, 1.0, 0); s.castShadow = true; shelf.add(s); }
  const R = rng(11); const bookCols = ['#c4553f', '#3f8fb0', '#e0b04c', '#4f7a4a', '#7b4fa0', '#d07a2c', '#2f5d9e'];
  for (let i = 0; i < 5; i++) {
    const b = new THREE.Mesh(new THREE.BoxGeometry(1.9, 0.04, 0.4), wood); b.position.set(0, 0.04 + i * 0.48, 0); b.castShadow = true; b.receiveShadow = true; shelf.add(b);
    if (i === 4) continue;
    let x = -0.88;
    while (x < 0.8) {
      const bw = 0.05 + R() * 0.06, bh = 0.26 + R() * 0.14;
      const bk = new THREE.Mesh(new THREE.BoxGeometry(bw, bh, 0.28), std(bookCols[Math.floor(R() * bookCols.length)], 0.7));
      bk.position.set(x + bw / 2, 0.06 + i * 0.48 + bh / 2, 0.02); bk.rotation.z = R() < 0.1 ? 0.2 : 0; bk.castShadow = true; shelf.add(bk);
      x += bw + 0.012 + (R() < 0.12 ? 0.15 : 0);
    }
  }
  scene.add(shelf);

  // bình nước
  const cooler = new THREE.Group(); cooler.position.set(6.3, 0, -4.45);
  const cb = new THREE.Mesh(new THREE.BoxGeometry(0.42, 1.05, 0.42), std('#eceef1', 0.4)); cb.position.y = 0.525; cb.castShadow = true; cooler.add(cb);
  const bottle = new THREE.Mesh(new THREE.CylinderGeometry(0.17, 0.17, 0.48, 18), new THREE.MeshStandardMaterial({ color: '#7cc0ec', transparent: true, opacity: 0.7, roughness: 0.15 }));
  bottle.position.y = 1.32; cooler.add(bottle);
  const tap = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.06, 0.06), std('#3f78c2')); tap.position.set(-0.1, 0.8, 0.23); cooler.add(tap);
  const tap2 = tap.clone(); tap2.material = std('#d0453f'); tap2.position.x = 0.1; cooler.add(tap2);
  scene.add(cooler);

  // cây cảnh
  const plants = [];
  const plant = (x, z, s = 1) => {
    const g = new THREE.Group(); g.position.set(x, 0, z); g.scale.setScalar(s);
    const pot = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.18, 0.42, 14), std('#c56a43', 0.8)); pot.position.y = 0.21; pot.castShadow = true; g.add(pot);
    const soil = new THREE.Mesh(new THREE.CylinderGeometry(0.21, 0.21, 0.02, 14), std('#4a3326')); soil.position.y = 0.41; g.add(soil);
    const leaves = new THREE.Group(); leaves.position.y = 0.42; g.add(leaves);
    const lm = std('#4f9a52', 0.7), lm2 = std('#3a7a40', 0.7);
    for (let i = 0; i < 9; i++) {
      const l = new THREE.Mesh(new THREE.ConeGeometry(0.09, 0.75, 5), i % 2 ? lm : lm2);
      const a = i / 9 * Math.PI * 2;
      l.position.set(Math.cos(a) * 0.09, 0.35, Math.sin(a) * 0.09);
      l.rotation.set(Math.sin(a) * 0.45, 0, -Math.cos(a) * 0.45);
      l.castShadow = true; leaves.add(l);
    }
    scene.add(g); plants.push(leaves);
    return g;
  };
  plant(-6.55, -4.55, 1.1); plant(6.6, 4.6, 1.15); plant(-6.6, 1.1, 0.9);
  out.animated.push((t) => plants.forEach((l, i) => { l.rotation.z = Math.sin(t * 1.3 + i) * 0.04; l.rotation.x = Math.cos(t * 1.1 + i) * 0.03; }));

  // góc nghỉ: sofa + bàn trà
  const sofa = new THREE.Group(); sofa.position.set(-6.45, 0, 3.55); sofa.rotation.y = Math.PI / 2;
  const fab = std('#4f7a8a', 0.95), fab2 = std('#5f8c9c', 0.95);
  const sb = new THREE.Mesh(new THREE.BoxGeometry(2.0, 0.42, 0.85), fab); sb.position.y = 0.25; sb.castShadow = true; sofa.add(sb);
  const sback = new THREE.Mesh(new THREE.BoxGeometry(2.0, 0.6, 0.22), fab); sback.position.set(0, 0.62, -0.32); sback.castShadow = true; sofa.add(sback);
  for (const x of [-1.0, 1.0]) { const arm = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.62, 0.85), fab); arm.position.set(x, 0.33, 0); arm.castShadow = true; sofa.add(arm); }
  for (const x of [-0.45, 0.45]) { const c = new THREE.Mesh(new THREE.BoxGeometry(0.85, 0.14, 0.62), fab2); c.position.set(x, 0.5, 0.05); c.castShadow = true; sofa.add(c); }
  const pillow = new THREE.Mesh(new THREE.BoxGeometry(0.36, 0.34, 0.12), std('#f2b450')); pillow.position.set(0.6, 0.72, -0.15); pillow.rotation.z = 0.2; sofa.add(pillow);
  scene.add(sofa);
  const ct = new THREE.Group(); ct.position.set(-5.3, 0, 3.5);
  const ctt = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.42, 0.05, 24), std('#8a5a35', 0.6)); ctt.position.y = 0.42; ctt.castShadow = true; ct.add(ctt);
  const ctl = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.08, 0.4, 10), std('#3b2b20')); ctl.position.y = 0.2; ct.add(ctl);
  const mug = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.045, 0.1, 12), std('#f4f1ea')); mug.position.set(0.1, 0.5, 0.05); ct.add(mug);
  scene.add(ct);

  // bàn khay kết quả
  const trayT = new THREE.Group(); trayT.position.set(5.6, 0, 4.15);
  const tt = new THREE.Mesh(new THREE.BoxGeometry(1.1, 0.06, 0.65), std('#b9844f', 0.6)); tt.position.y = 0.78; tt.castShadow = true; tt.receiveShadow = true; trayT.add(tt);
  for (const [x, z] of [[-0.48, -0.26], [0.48, -0.26], [-0.48, 0.26], [0.48, 0.26]]) { const l = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.78, 0.06), std('#5e3c22')); l.position.set(x, 0.39, z); l.castShadow = true; trayT.add(l); }
  const box = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.06, 0.38), std('#6b7a8f', 0.5)); box.position.set(0, 0.84, 0); trayT.add(box);
  const papers = new THREE.Group(); papers.position.set(0, 0.86, 0); trayT.add(papers);
  scene.add(trayT);
  const paperM = [std('#fffdf6', 0.9), std('#f1ece0', 0.9)];
  out.setTray = (n) => {
    while (papers.children.length) papers.remove(papers.children[0]);
    for (let i = 0; i < Math.min(n, 14); i++) {
      const p = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.012, 0.3), paperM[i % 2]);
      p.position.y = i * 0.014; p.rotation.y = ((i * 37) % 7 - 3) * 0.03; p.castShadow = true; papers.add(p);
    }
  };
  out.trayAnchor = new THREE.Vector3(5.6, 0.95, 4.5);

  // đèn thả trần (sáng khi trời tối)
  out.lamps = [];
  const cordM = std('#2b2b33', 0.6), shadeM = std('#f2b450', 0.45);
  for (const [x, z] of [[-4.1, 0.25], [0, 0.25], [4.1, 0.25]]) {
    const g = new THREE.Group(); g.position.set(x, 0, z);
    const cord = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.008, 0.6, 6), cordM); cord.position.y = ROOM.wallH - 0.3; g.add(cord);
    const shade = new THREE.Mesh(new THREE.ConeGeometry(0.32, 0.26, 20, 1, true), shadeM); shade.material.side = THREE.DoubleSide; shade.position.y = ROOM.wallH - 0.68; shade.castShadow = false; g.add(shade);
    const bulbMat = new THREE.MeshStandardMaterial({ color: '#fff3d6', emissive: '#ffd58a', emissiveIntensity: 0, roughness: 0.3 });
    const bulb = new THREE.Mesh(new THREE.SphereGeometry(0.075, 12, 10), bulbMat); bulb.position.y = ROOM.wallH - 0.78; g.add(bulb);
    const light = new THREE.PointLight('#ffd9a0', 0, 7.5, 1.6); light.position.y = ROOM.wallH - 0.85; g.add(light);
    scene.add(g); out.lamps.push({ bulbMat, light });
  }

  // bụi lơ lửng trong nắng
  const N = 140; const pos = new Float32Array(N * 3); const R2 = rng(5);
  for (let i = 0; i < N; i++) { pos[i * 3] = -6 + R2() * 12; pos[i * 3 + 1] = 0.3 + R2() * 2.6; pos[i * 3 + 2] = -4.8 + R2() * 4.5; }
  const dg = new THREE.BufferGeometry(); dg.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  const dust = new THREE.Points(dg, new THREE.PointsMaterial({ color: '#fff3d6', size: 0.035, transparent: true, opacity: 0.55, depthWrite: false }));
  scene.add(dust); out.dust = dust;
  out.animated.push((t, dt) => {
    for (let i = 0; i < N; i++) {
      pos[i * 3 + 1] += Math.sin(t * 0.5 + i) * dt * 0.03;
      pos[i * 3] += Math.cos(t * 0.3 + i * 1.7) * dt * 0.02;
    }
    dg.attributes.position.needsUpdate = true;
    sky.offset.x = (t * 0.004) % 1;
  });
  return out;
}

// ---------------- bàn làm việc ----------------
const BRAND = {
  sim: ['#9a91ad', 'GIẢ LẬP'], claude: ['#e08a5c', 'CLAUDE'], anthropic: ['#e08a5c', 'CLAUDE API'], codex: ['#4fd1a8', 'CHATGPT'], antigravity: ['#7aa7ff', 'GEMINI'],
  openai: ['#4fd1a8', 'GPT API'], gemini: ['#7aa7ff', 'GEMINI'], ollama: ['#e6e6e6', 'OLLAMA'], simi: ['#45a2ff', 'SIMI'],
};

export function buildDesk(scene, slot, agent) {
  const g = new THREE.Group(); g.position.set(slot.x, 0, slot.z);
  const topM = std('#c99863', 0.55), sideM = std('#a5764a', 0.7), metal = std('#3b3d46', 0.45, { metalness: 0.3 });
  const top = new THREE.Mesh(new THREE.BoxGeometry(DESK.w, 0.06, DESK.d), topM); top.position.y = DESK.h; top.castShadow = true; top.receiveShadow = true; g.add(top);
  for (const x of [-DESK.w / 2 + 0.05, DESK.w / 2 - 0.05]) { const s = new THREE.Mesh(new THREE.BoxGeometry(0.06, DESK.h, DESK.d - 0.04), sideM); s.position.set(x, DESK.h / 2, 0); s.castShadow = true; g.add(s); }
  const front = new THREE.Mesh(new THREE.BoxGeometry(DESK.w - 0.1, 0.45, 0.03), sideM); front.position.set(0, DESK.h - 0.28, DESK.d / 2 - 0.06); front.castShadow = true; g.add(front);
  // màn hình (đặt chéo để thấy cả người lẫn màn hình)
  const mon = new THREE.Group(); mon.position.set(-0.55, DESK.h + 0.03, -0.08); mon.rotation.y = 1.45;
  const scr = { canvas: document.createElement('canvas') };
  scr.canvas.width = 192; scr.canvas.height = 120; scr.g = scr.canvas.getContext('2d');
  scr.tex = new THREE.CanvasTexture(scr.canvas); scr.tex.colorSpace = THREE.SRGBColorSpace;
  const bezel = new THREE.Mesh(new THREE.BoxGeometry(0.62, 0.4, 0.035), metal); bezel.position.y = 0.33; bezel.castShadow = true; mon.add(bezel);
  const screen = new THREE.Mesh(new THREE.PlaneGeometry(0.57, 0.35), new THREE.MeshBasicMaterial({ map: scr.tex, toneMapped: false }));
  screen.position.set(0, 0.33, 0.019); mon.add(screen);
  const neck = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.16, 0.04), metal); neck.position.set(0, 0.08, -0.02); mon.add(neck);
  const base = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.015, 0.16), metal); base.position.y = 0.008; mon.add(base);
  g.add(mon);
  // bàn phím, chuột, cốc, giấy
  const kb = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.02, 0.13), std('#e4e4ea', 0.5)); kb.position.set(0, DESK.h + 0.04, -0.2); kb.castShadow = true; g.add(kb);
  const mouse = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.02, 0.09), std('#e4e4ea', 0.5)); mouse.position.set(0.32, DESK.h + 0.04, -0.2); g.add(mouse);
  const mugC = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.04, 0.1, 12), std(agent.shirt || '#c0504d', 0.5)); mugC.position.set(0.68, DESK.h + 0.08, 0.05); mugC.castShadow = true; g.add(mugC);
  const papers = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.02, 0.32), std('#f6f2e8', 0.9)); papers.position.set(0.45, DESK.h + 0.04, 0.12); papers.rotation.y = 0.2; g.add(papers);
  if (agent.isManager) {
    const lamp = new THREE.Group(); lamp.position.set(0.72, DESK.h + 0.03, -0.25);
    lamp.add(Object.assign(new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.08, 0.02, 12), metal), {}));
    const arm = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.012, 0.36, 6), metal); arm.position.set(0, 0.18, 0); arm.rotation.z = 0.25; lamp.add(arm);
    const shade = new THREE.Mesh(new THREE.ConeGeometry(0.09, 0.12, 12, 1, true), std('#e3c15a', 0.4)); shade.position.set(-0.07, 0.36, 0); shade.rotation.z = 0.9; lamp.add(shade);
    g.add(lamp);
    const trophy = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.03, 0.14, 10), std('#e3c15a', 0.3, { metalness: 0.7 })); trophy.position.set(0.2, DESK.h + 0.1, 0.25); g.add(trophy);
  }
  // ghế
  const chair = new THREE.Group(); chair.position.set(0, 0, SEAT_DZ);
  const chairM = std('#3d3c4c', 0.8), chairHi = std('#4f4e63', 0.8);
  const seat = new THREE.Mesh(new THREE.BoxGeometry(0.52, 0.08, 0.5), chairHi); seat.position.y = 0.46; seat.castShadow = true; chair.add(seat);
  const backr = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.58, 0.07), chairM); backr.position.set(0, 0.82, -0.26); backr.rotation.x = -0.08; backr.castShadow = true; chair.add(backr);
  const post = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.36, 8), metal); post.position.y = 0.24; chair.add(post);
  for (let i = 0; i < 5; i++) { const leg = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.03, 0.3), metal); const a = i / 5 * Math.PI * 2; leg.position.set(Math.sin(a) * 0.14, 0.04, Math.cos(a) * 0.14); leg.rotation.y = a; chair.add(leg); }
  g.add(chair);
  // vòng sáng dưới sàn (hover / thả thẻ / lỗi)
  const ring = new THREE.Mesh(new THREE.RingGeometry(1.25, 1.42, 56), new THREE.MeshBasicMaterial({ color: '#ffffff', transparent: true, opacity: 0, depthWrite: false }));
  ring.rotation.x = -Math.PI / 2; ring.position.set(0, 0.012, -0.3); g.add(ring);
  // vùng bấm (vô hình)
  const hit = new THREE.Mesh(new THREE.BoxGeometry(DESK.w + 0.3, 1.7, DESK.d + 1.2), new THREE.MeshBasicMaterial({ visible: false }));
  hit.position.set(0, 0.85, -0.3); g.add(hit);
  scene.add(g);

  const brandKey = (agent.source || 'sim').split('-')[0];
  const desk = { group: g, ring, hit, screen: scr, state: 'idle', brand: BRAND[brandKey] || BRAND.sim, model: agent.model || '' };
  drawScreen(desk, 0, true);
  return desk;
}

export function drawScreen(desk, t, force) {
  const { g, canvas, tex } = desk.screen; const w = canvas.width, h = canvas.height;
  const st = desk.state;
  if (st !== 'working' && !force && desk._drawn === st) return;
  desk._drawn = st;
  if (st === 'working') {
    g.fillStyle = '#14263a'; g.fillRect(0, 0, w, h);
    const off = Math.floor(t * 22);
    for (let i = 0; i < 9; i++) {
      const line = off + i;
      const ind = (line * 7) % 4 * 10;
      const len = 30 + ((line * 53) % 110);
      g.fillStyle = ['#8cc8ff', '#7fe0a8', '#f6d36b', '#c7a5ff'][line % 4];
      g.fillRect(12 + ind, 10 + i * 12, Math.min(len, w - 30 - ind), 5);
    }
    if (Math.floor(t * 3) % 2) { g.fillStyle = '#fff'; g.fillRect(14, 10 + 8 * 12, 7, 6); }
  } else if (st === 'error') {
    g.fillStyle = '#5a1f22'; g.fillRect(0, 0, w, h);
    g.fillStyle = '#ff8a8a'; g.font = 'bold 54px Segoe UI, Arial'; g.textAlign = 'center'; g.fillText('!', w / 2, 76);
    g.font = 'bold 15px Segoe UI, Arial'; g.fillText('LỖI – xem nhật ký', w / 2, 104);
  } else {
    const [col, label] = desk.brand;
    const grd = g.createLinearGradient(0, 0, w, h); grd.addColorStop(0, '#1d2230'); grd.addColorStop(1, '#2a2f40');
    g.fillStyle = grd; g.fillRect(0, 0, w, h);
    g.fillStyle = col; g.font = 'bold 24px Segoe UI, Arial'; g.textAlign = 'center'; g.fillText(label, w / 2, 62);
    if (desk.model) { g.fillStyle = '#aab0c0'; g.font = '14px Segoe UI, Arial'; g.fillText(desk.model.slice(0, 22), w / 2, 86); }
    g.fillStyle = col; g.globalAlpha = 0.5; g.fillRect(w / 2 - 30, 96, 60, 3); g.globalAlpha = 1;
  }
  tex.needsUpdate = true;
}
