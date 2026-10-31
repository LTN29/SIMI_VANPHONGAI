// Nhân vật low-poly có khớp: đi, ngồi, gõ phím, nói, uống nước, vươn vai, nhìn quanh, nhảy (6 điệu theo nhịp chung),
// đập tay, ôm, cụng ly, mời cà phê. Toàn bộ là chuyển động bằng code – không tải thêm mô hình nào.
import * as THREE from 'three';

export const SKINS = ['#f1c9a5', '#e2ae84', '#f6d7bd', '#c98e62', '#ebbf98', '#d9a074'];
export const HAIR_STYLES = { short: 'Ngắn', long: 'Dài', bun: 'Búi', spiky: 'Dựng', bob: 'Bob', curly: 'Xoăn', ponytail: 'Đuôi ngựa', buzz: 'Húi cua' };
export const ACCESSORIES = { none: 'Không', glasses: 'Kính', cap: 'Mũ lưỡi trai', headphones: 'Tai nghe', bow: 'Nơ', tie: 'Cà vạt', crown: 'Vương miện' };
const DEFAULT_STYLES = ['short', 'long', 'spiky', 'bun', 'bob', 'short'];

const lerp = (a, b, t) => a + (b - a) * t;

const geoCache = {};
const G = (key, make) => geoCache[key] || (geoCache[key] = make());

function std(color, rough = 0.75) { return new THREE.MeshStandardMaterial({ color, roughness: rough, metalness: 0 }); }

export class Person {
  constructor(agent, index) {
    this.index = index;
    this.root = new THREE.Group();
    this.body = new THREE.Group();
    this.root.add(this.body);
    this.joint = {};
    this.pose = { legL: 0, legR: 0, armLx: 0, armRx: 0, armLz: 0.08, armRz: -0.08, headY: 0, headX: 0, lean: 0, lift: 0 };
    this.phase = Math.random() * 10;
    this.blinkAt = performance.now() / 1000 + 1 + Math.random() * 3;
    this.talkUntil = 0;
    this.action = null;      // 'stretch' | 'drink' | 'look' | 'place' | 'highfive' | 'hug' | 'cheers' | 'give' | …
    this.dance = null;       // điệu nhảy liên tục: groove | disco | robot | shuffle | spin | hands
    this.actionUntil = 0;
    this.build(agent);
  }

  build(a) {
    this.agent = a;
    a = { ...a };
    const skin = a.skin || SKINS[this.index % SKINS.length];
    const style = a.hairStyle || DEFAULT_STYLES[this.index % DEFAULT_STYLES.length];
    // dọn mô hình cũ (khi đổi màu/kiểu tóc)
    while (this.body.children.length) this.body.remove(this.body.children[0]);
    const M = {
      shirt: std(a.shirt || '#3b6fb6', 0.8), skin: std(skin, 0.6), hair: std(a.hair || '#2b1d14', 0.9),
      pants: std(a.pants || '#2f3342', 0.85), shoe: std(a.shoes || '#1d1d24', 0.6), dark: std('#1f1a17', 0.4),
      white: std('#ffffff', 0.3), mouth: std('#7a3434', 0.6), cheek: new THREE.MeshStandardMaterial({ color: '#ff8f8f', transparent: true, opacity: 0.35, roughness: 1 }),
    };
    this.mats = M;
    const add = (parent, geo, mat, x = 0, y = 0, z = 0) => { const m = new THREE.Mesh(geo, mat); m.position.set(x, y, z); m.castShadow = true; parent.add(m); return m; };

    // chân (khớp hông)
    const hipY = 0.42;
    const legGeo = G('leg', () => new THREE.CapsuleGeometry(0.078, 0.25, 4, 10));
    const shoeGeo = G('shoe', () => new THREE.BoxGeometry(0.14, 0.08, 0.22));
    for (const side of [-1, 1]) {
      const g = new THREE.Group(); g.position.set(side * 0.095, hipY, 0);
      add(g, legGeo, M.pants, 0, -0.2, 0);
      add(g, shoeGeo, M.shoe, 0, -0.375, 0.045);
      this.body.add(g);
      this.joint[side < 0 ? 'legL' : 'legR'] = g;
    }
    // thân
    const torso = add(this.body, G('torso', () => new THREE.CapsuleGeometry(0.19, 0.2, 6, 14)), M.shirt, 0, 0.68, 0);
    torso.scale.set(1, 1, 0.78);
    this.torso = torso;
    add(this.body, G('belt', () => new THREE.CylinderGeometry(0.185, 0.185, 0.05, 16)), M.pants, 0, 0.47, 0).scale.set(1, 1, 0.8);
    // tay (khớp vai)
    const armGeo = G('arm', () => new THREE.CapsuleGeometry(0.062, 0.22, 4, 10));
    const handGeo = G('hand', () => new THREE.SphereGeometry(0.068, 12, 10));
    for (const side of [-1, 1]) {
      const g = new THREE.Group(); g.position.set(side * 0.255, 0.86, 0);
      add(g, armGeo, M.shirt, 0, -0.15, 0);
      add(g, handGeo, M.skin, 0, -0.35, 0);
      this.body.add(g);
      this.joint[side < 0 ? 'armL' : 'armR'] = g;
    }
    // cốc nước (ẩn, dùng khi uống)
    this.cup = add(this.joint.armR, G('cup', () => new THREE.CylinderGeometry(0.05, 0.04, 0.11, 12)), std('#e9f3fb', 0.3), 0, -0.4, 0.05);
    this.cup.visible = false;
    // xấp giấy (ẩn, dùng khi nộp kết quả)
    this.paper = add(this.joint.armL, G('paper', () => new THREE.BoxGeometry(0.2, 0.02, 0.26)), std('#fffdf5', 0.9), 0, -0.4, 0.08);
    this.paper.visible = false;

    // đầu
    const head = new THREE.Group(); head.position.set(0, 1.0, 0); this.body.add(head); this.joint.head = head;
    add(head, G('neck', () => new THREE.CylinderGeometry(0.07, 0.08, 0.1, 10)), M.skin, 0, -0.03, 0);
    add(head, G('head', () => new THREE.SphereGeometry(0.25, 24, 18)), M.skin, 0, 0.19, 0);
    const eyeGeo = G('eye', () => new THREE.SphereGeometry(0.034, 12, 10));
    const hlGeo = G('hl', () => new THREE.SphereGeometry(0.011, 6, 6));
    this.eyes = [];
    for (const side of [-1, 1]) {
      const e = add(head, eyeGeo, M.dark, side * 0.088, 0.21, 0.222);
      e.scale.set(1, 1.15, 0.6);
      add(e, hlGeo, M.white, 0.012, 0.014, 0.03).castShadow = false;
      this.eyes.push(e);
      const ck = add(head, G('cheek', () => new THREE.SphereGeometry(0.045, 10, 8)), M.cheek, side * 0.15, 0.13, 0.19);
      ck.scale.set(1, 0.6, 0.3); ck.castShadow = false;
    }
    this.mouth = add(head, G('mouth', () => new THREE.BoxGeometry(0.075, 0.02, 0.02)), M.mouth, 0, 0.1, 0.238);
    // tóc
    const cap = add(head, G('cap', () => new THREE.SphereGeometry(0.268, 24, 14, 0, Math.PI * 2, 0, Math.PI * 0.52)), M.hair, 0, 0.2, -0.005);
    cap.rotation.x = -0.32;
    if (style === 'buzz') cap.scale.set(0.97, 0.9, 0.97);
    else {
      const bang = add(head, G('bang', () => new THREE.SphereGeometry(0.2, 16, 10)), M.hair, 0, 0.36, 0.12);
      bang.scale.set(1.15, 0.38, 0.62);
    }
    if (style === 'curly') {
      const curl = G('curl', () => new THREE.SphereGeometry(0.085, 10, 8));
      for (let i = 0; i < 14; i++) {
        const ang = (i / 14) * Math.PI * 2; const up = i % 2 ? 0.36 : 0.28;
        add(head, curl, M.hair, Math.sin(ang) * 0.24, up + Math.cos(ang * 2) * 0.03, Math.cos(ang) * 0.22 - 0.03);
      }
      add(head, curl, M.hair, 0, 0.47, 0); add(head, curl, M.hair, 0.1, 0.45, -0.08); add(head, curl, M.hair, -0.1, 0.45, -0.08);
    } else if (style === 'ponytail') {
      add(head, G('tie2', () => new THREE.SphereGeometry(0.06, 10, 8)), std(a.accent || '#e1262d', 0.5), 0, 0.33, -0.25);
      const tail = add(head, G('tail', () => new THREE.CapsuleGeometry(0.075, 0.26, 4, 10)), M.hair, 0, 0.16, -0.32);
      tail.rotation.x = 0.35;
    } else if (style === 'long') {
      const back = add(head, G('long', () => new THREE.CapsuleGeometry(0.2, 0.28, 6, 12)), M.hair, 0, 0.05, -0.12);
      back.scale.set(1.15, 1, 0.55);
      for (const side of [-1, 1]) add(head, G('lock', () => new THREE.CapsuleGeometry(0.06, 0.24, 4, 8)), M.hair, side * 0.22, 0.07, 0.02);
    } else if (style === 'bun') {
      add(head, G('bun', () => new THREE.SphereGeometry(0.11, 14, 10)), M.hair, 0, 0.45, -0.13);
    } else if (style === 'spiky') {
      const spikeGeo = G('spike', () => new THREE.ConeGeometry(0.07, 0.17, 6));
      [[-0.12, 0.44, 0.02, 0.4], [0, 0.48, 0, 0], [0.12, 0.44, 0.02, -0.4], [-0.06, 0.45, -0.12, 0.2], [0.07, 0.45, -0.12, -0.2]].forEach(([x, y, z, rz]) => {
        const s = add(head, spikeGeo, M.hair, x, y, z); s.rotation.z = rz; s.rotation.x = -0.25;
      });
    } else if (style === 'bob') {
      const bob = add(head, G('bob', () => new THREE.SphereGeometry(0.29, 20, 12, 0, Math.PI * 2, 0, Math.PI * 0.62)), M.hair, 0, 0.16, -0.03);
      bob.rotation.x = -0.15;
    }
    // phụ kiện tự chọn (Sảnh) hoặc theo vai trò (văn phòng)
    const acc = a.accessory || 'none';
    const accM = std(a.accent || '#e1262d', 0.5);
    if (acc === 'cap') {
      const crown = add(head, G('capTop', () => new THREE.SphereGeometry(0.275, 20, 12, 0, Math.PI * 2, 0, Math.PI * 0.5)), accM, 0, 0.24, -0.01);
      crown.rotation.x = -0.18;
      const brim = add(head, G('brim', () => new THREE.CylinderGeometry(0.17, 0.17, 0.025, 20, 1, false, -Math.PI / 2, Math.PI)), accM, 0, 0.3, 0.2);
      brim.rotation.x = 0.12;
    } else if (acc === 'headphones') {
      const band = add(head, G('band', () => new THREE.TorusGeometry(0.28, 0.022, 8, 24, Math.PI)), std('#2b2b33', 0.4), 0, 0.2, 0);
      band.rotation.z = 0;
      for (const side of [-1, 1]) add(head, G('cup2', () => new THREE.CylinderGeometry(0.075, 0.075, 0.06, 16)), accM, side * 0.27, 0.18, 0).rotation.z = Math.PI / 2;
    } else if (acc === 'bow') {
      for (const side of [-1, 1]) { const w = add(head, G('bowW', () => new THREE.ConeGeometry(0.07, 0.13, 4)), accM, side * 0.07, 0.43, 0.06); w.rotation.z = side * Math.PI / 2; }
      add(head, G('bowK', () => new THREE.SphereGeometry(0.035, 8, 6)), accM, 0, 0.43, 0.06);
    } else if (acc === 'crown') {
      add(head, G('crown', () => new THREE.CylinderGeometry(0.14, 0.15, 0.1, 5, 1, true)), std('#f5c518', 0.3), 0, 0.5, -0.02).material.side = THREE.DoubleSide;
    }
    if (acc === 'glasses' && !a.isReviewer) a = { ...a, isReviewer: true };
    if (acc === 'tie' && !a.isManager) a = { ...a, isManager: true };
    if (a.isManager) {
      add(this.body, G('tie', () => new THREE.BoxGeometry(0.06, 0.24, 0.02)), std('#b3362f', 0.5), 0, 0.73, 0.155);
      add(this.body, G('knot', () => new THREE.BoxGeometry(0.075, 0.05, 0.03)), std('#8f2a24', 0.5), 0, 0.86, 0.15);
    }
    if (a.isReviewer) {
      const rim = std('#2b2b33', 0.4);
      const ring = G('glass', () => new THREE.TorusGeometry(0.062, 0.012, 8, 20));
      for (const side of [-1, 1]) add(head, ring, rim, side * 0.088, 0.21, 0.245);
      add(head, G('bridge', () => new THREE.BoxGeometry(0.06, 0.012, 0.012)), rim, 0, 0.215, 0.25);
    }
  }

  say(ms) { this.talkUntil = performance.now() / 1000 + ms / 1000; }
  doAction(name, ms) { this.action = name; this.actionUntil = performance.now() / 1000 + ms / 1000; }

  // moving: tốc độ hiện tại (m/s); seated, typing: trạng thái ngồi/gõ
  // beat: nhịp chung (giây × số nhịp/giây, theo giờ Gateway) – ai nhảy cũng khớp nhịp với nhau
  animate(dt, t, { moving, speed, seated, typing, beat }) {
    const p = this.pose;
    const T = { legL: 0, legR: 0, armLx: 0, armRx: 0, armLz: 0.1, armRz: -0.1, headY: 0, headX: 0, lean: 0, lift: 0 };
    if (this.action && t > this.actionUntil) this.action = null;
    if (moving) {
      this.phase += dt * (4 + speed * 3.2);
      const s = Math.sin(this.phase);
      T.legL = s * 0.62; T.legR = -s * 0.62;
      T.armLx = -s * 0.55; T.armRx = s * 0.55;
      T.lift = Math.abs(Math.cos(this.phase)) * 0.04;
      T.lean = 0.06;
    } else if (seated) {
      T.legL = T.legR = -1.48;
      T.lift = 0.06;
      if (typing) {
        T.armLx = -1.18 + Math.sin(t * 17) * 0.13;
        T.armRx = -1.18 + Math.sin(t * 17 + 1.7) * 0.13;
        T.armLz = 0.22; T.armRz = -0.22;
        T.lean = 0.12; T.headX = 0.12;
        T.headY = Math.sin(t * 0.7 + this.index) * 0.15;
      } else {
        T.armLx = -0.7; T.armRx = -0.7; T.armLz = 0.18; T.armRz = -0.18;
        T.headY = Math.sin(t * 0.4 + this.index * 2) * 0.25;
      }
    } else {
      // đứng: thở nhẹ
      T.lift = Math.sin(t * 2.2 + this.index) * 0.006;
    }
    if (this.action === 'stretch') {
      const k = Math.sin(t * 3) * 0.12;
      T.armLx = -2.85 + k; T.armRx = -2.85 - k; T.armLz = 0.25; T.armRz = -0.25; T.headX = -0.2; T.lean = -0.1;
    } else if (this.action === 'drink') {
      T.armRx = -2.1; T.armRz = 0.35; T.headX = -0.28;
    } else if (this.action === 'look') {
      T.headY = Math.sin(t * 1.6) * 0.7;
    } else if (this.action === 'wave') {
      T.armRx = -2.7; T.armRz = -0.35 + Math.sin(t * 13) * 0.4; T.headX = -0.1; T.headY = 0.15;
    } else if (this.action === 'dance') {
      const w = Math.sin(t * 8);
      T.armLx = -1.6 + w * 1.1; T.armRx = -1.6 - w * 1.1; T.armLz = 0.5; T.armRz = -0.5;
      if (!seated) { T.lift = Math.abs(Math.sin(t * 8)) * 0.1; T.legL = w * 0.35; T.legR = -w * 0.35; }
      T.headY = Math.sin(t * 4) * 0.3;
    } else if (this.action === 'cheer') {
      const w = Math.sin(t * 9);
      T.armLx = -2.9 + w * 0.2; T.armRx = -2.9 - w * 0.2; T.armLz = 0.45; T.armRz = -0.45; T.headX = -0.25;
      if (!seated) T.lift = Math.abs(Math.sin(t * 7)) * 0.16;
    } else if (this.action === 'place') {
      T.armLx = -1.2; T.armRx = -1.2; T.lean = 0.25; T.headX = 0.25;
    } else if (this.action === 'highfive') {
      // giơ tay lên chạm tay người đối diện, nảy nhẹ lúc chạm
      const left = this.actionUntil - t;
      T.armRx = -2.55; T.armRz = -0.15; T.headX = -0.12;
      if (left < 1.0 && left > 0.7) { T.armRx = -2.2; if (!seated) T.lift = 0.08; }
    } else if (this.action === 'hug') {
      T.armLx = -1.35; T.armRx = -1.35; T.armLz = -0.55; T.armRz = 0.55; T.lean = 0.16; T.headY = 0.25;
      if (!seated) T.lift = Math.sin(t * 3) * 0.015;
    } else if (this.action === 'cheers') {
      const left = this.actionUntil - t;
      T.armRx = left < 1.3 && left > 0.9 ? -1.95 : -1.55; T.armRz = 0.05; T.headX = -0.05;
    } else if (this.action === 'give') {
      T.armRx = -1.35; T.armRz = 0.12; T.lean = 0.08; T.headX = 0.1;
    }
    if (this.dance && !moving && !this.action) this.dancePose(T, beat === undefined ? t * 2 : beat, seated);
    const talking = t < this.talkUntil;
    if (talking && !seated && !moving && !this.action) {
      T.armRx = -0.55 + Math.sin(t * 5.5) * 0.35; T.armRz = -0.25;
      T.headX = Math.sin(t * 4) * 0.08;
    } else if (talking) {
      T.headX += Math.sin(t * 4) * 0.06;
    }
    this.cup.visible = this.action === 'drink' || this.action === 'cheers' || this.action === 'give';
    this.paper.visible = this.action === 'place' || this.carrying === true;
    if (this.carrying && !moving && !this.action) { T.armLx = -0.9; }
    else if (this.carrying && moving) { T.armLx = -0.9; }

    const k = 1 - Math.exp(-dt * 11);
    for (const key of Object.keys(T)) p[key] = lerp(p[key], T[key], k);
    const J = this.joint;
    J.legL.rotation.x = p.legL; J.legR.rotation.x = p.legR;
    J.armL.rotation.set(p.armLx, 0, p.armLz); J.armR.rotation.set(p.armRx, 0, p.armRz);
    J.head.rotation.set(p.headX, p.headY, 0);
    this.body.rotation.x = p.lean;
    this.body.position.y = p.lift;
    this.torso.scale.y = 1 + Math.sin(t * 2.2 + this.index) * 0.012;
    // chớp mắt
    let eyeY = 1.15;
    if (t > this.blinkAt) { eyeY = 0.15; if (t > this.blinkAt + 0.12) this.blinkAt = t + 2 + Math.random() * 4; }
    for (const e of this.eyes) e.scale.y = eyeY;
    // miệng khi nói
    this.mouth.scale.set(talking ? 0.8 : 1, talking ? 1 + Math.abs(Math.sin(t * 17)) * 2.6 : 1, 1);
  }

  // 6 điệu nhảy; b = số nhịp đã qua (chung cho cả Sảnh) → mọi người nhún cùng lúc
  dancePose(T, b, seated) {
    const B = b * Math.PI; // nửa vòng mỗi nhịp
    const bounce = Math.abs(Math.sin(B));
    switch (this.dance) {
      case 'disco': {
        const up = Math.sin(B / 2) > 0;
        T.armRx = up ? -2.75 : -0.5; T.armRz = up ? -0.55 : -0.2; T.armLx = -0.25; T.armLz = 0.95;
        T.headY = up ? 0.3 : -0.1; T.headX = up ? -0.2 : 0.05;
        if (!seated) { T.lift = bounce * 0.05; T.legL = Math.sin(B) * 0.22; T.legR = -Math.sin(B) * 0.08; }
        break;
      }
      case 'robot': {
        const q = Math.sin(B) > 0 ? 1 : -1; const q2 = Math.sin(B / 2) > 0 ? 1 : -1;
        T.armLx = -1.45 - q * 0.45; T.armRx = -1.45 + q * 0.45; T.armLz = 0.15; T.armRz = -0.15;
        T.headY = q2 * 0.4; T.headX = 0; T.lean = 0;
        if (!seated) { T.lift = q > 0 ? 0.02 : 0; T.legL = q > 0 ? 0.15 : 0; T.legR = q < 0 ? 0.15 : 0; }
        break;
      }
      case 'shuffle': {
        const w = Math.sin(B * 2);
        T.armLx = w * 0.7; T.armRx = -w * 0.7; T.armLz = 0.25; T.armRz = -0.25; T.lean = 0.08;
        T.headY = Math.sin(B) * 0.15;
        if (!seated) { T.legL = w * 0.55; T.legR = -w * 0.55; T.lift = Math.abs(w) * 0.07; }
        break;
      }
      case 'spin':
        T.armLx = -0.15; T.armRx = -0.15; T.armLz = 1.35; T.armRz = -1.35; T.headX = -0.1;
        if (!seated) T.lift = bounce * 0.06;
        break;
      case 'hands':
        T.armLx = -2.9 + Math.sin(B) * 0.25; T.armRx = -2.9 - Math.sin(B) * 0.25; T.armLz = 0.45 + Math.sin(B) * 0.2; T.armRz = -0.45 + Math.sin(B) * 0.2; T.headX = -0.22;
        if (!seated) T.lift = bounce * 0.13;
        break;
      default: { // groove
        const w = Math.sin(B);
        T.armLx = -1.6 + w * 1.0; T.armRx = -1.6 - w * 1.0; T.armLz = 0.5; T.armRz = -0.5;
        T.headY = Math.sin(B / 2) * 0.3;
        if (!seated) { T.lift = bounce * 0.09; T.legL = w * 0.3; T.legR = -w * 0.3; }
      }
    }
  }

  headWorld(target) {
    this.joint.head.updateWorldMatrix(true, false);
    return target.set(0, 0.5, 0).applyMatrix4(this.joint.head.matrixWorld);
  }
}
