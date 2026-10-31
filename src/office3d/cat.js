// Mèo văn phòng: đi dạo giữa các điểm, ngồi nghỉ, vẫy đuôi, thỉnh thoảng nằm cuộn tròn.
import * as THREE from 'three';

const std = (c, r = 0.85) => new THREE.MeshStandardMaterial({ color: c, roughness: r });
const SPOTS = [
  { x: 0.4, z: 0.4 }, { x: -1.6, z: 0.6 }, { x: 1.9, z: 0.0 }, { x: -5.0, z: 2.6 }, { x: 5.4, z: -3.3 },
  { x: -2.4, z: 3.9 }, { x: 2.6, z: 3.8 }, { x: -5.6, z: -2.8 }, { x: 0.2, z: -3.6 }, { x: 3.2, z: -3.7 },
];

export class Cat {
  constructor(scene, nav) {
    this.nav = nav;
    this.root = new THREE.Group();
    this.body = new THREE.Group(); this.root.add(this.body);
    const fur = std('#e39a4e'), dark = std('#b86e2c'), white = std('#fbf3e6'), pink = std('#f2a3a3');
    const add = (p, g, m, x, y, z) => { const o = new THREE.Mesh(g, m); o.position.set(x, y, z); o.castShadow = true; p.add(o); return o; };
    const torso = add(this.body, new THREE.CapsuleGeometry(0.11, 0.26, 6, 12), fur, 0, 0.2, 0); torso.rotation.x = Math.PI / 2;
    add(this.body, new THREE.SphereGeometry(0.075, 10, 8), white, 0, 0.17, 0.12).scale.set(1, 1, 0.7);
    for (const z of [-0.06, 0.04]) add(this.body, new THREE.BoxGeometry(0.2, 0.03, 0.05), dark, 0, 0.3, z).rotation.x = 0.1;
    // đầu
    this.head = new THREE.Group(); this.head.position.set(0, 0.32, 0.2); this.body.add(this.head);
    add(this.head, new THREE.SphereGeometry(0.1, 14, 12), fur, 0, 0, 0).scale.set(1.05, 0.95, 0.95);
    add(this.head, new THREE.SphereGeometry(0.05, 10, 8), white, 0, -0.03, 0.07).scale.set(1.2, 0.8, 0.7);
    for (const s of [-1, 1]) {
      const ear = add(this.head, new THREE.ConeGeometry(0.035, 0.07, 4), fur, s * 0.055, 0.09, -0.01); ear.rotation.z = -s * 0.25;
      add(this.head, new THREE.SphereGeometry(0.012, 6, 6), std('#1d1a17', 0.3), s * 0.038, 0.02, 0.088);
    }
    add(this.head, new THREE.SphereGeometry(0.01, 6, 6), pink, 0, -0.01, 0.1);
    // chân
    this.legs = [];
    for (const [x, z] of [[-0.06, 0.12], [0.06, 0.12], [-0.06, -0.12], [0.06, -0.12]]) {
      const g = new THREE.Group(); g.position.set(x, 0.15, z); this.body.add(g);
      add(g, new THREE.CylinderGeometry(0.025, 0.022, 0.15, 6), fur, 0, -0.075, 0);
      add(g, new THREE.SphereGeometry(0.026, 6, 6), white, 0, -0.15, 0.01);
      this.legs.push(g);
    }
    // đuôi (chuỗi khớp)
    this.tail = [];
    let parent = this.body; let pos = [0, 0.24, -0.24];
    for (let i = 0; i < 5; i++) {
      const g = new THREE.Group(); g.position.set(...pos); parent.add(g);
      add(g, new THREE.CylinderGeometry(0.022 - i * 0.002, 0.025 - i * 0.002, 0.08, 6), i === 4 ? dark : fur, 0, 0.04, 0);
      this.tail.push(g); parent = g; pos = [0, 0.08, 0];
    }
    this.tail[0].rotation.x = -0.9;
    this.pos = { x: 1.0, z: 0.8 }; this.facing = 0; this.path = []; this.mode = 'sit'; this.until = performance.now() / 1000 + 4; this.phase = 0;
    this.root.position.set(this.pos.x, 0, this.pos.z);
    scene.add(this.root);
  }

  pet() {
    this.path = []; this.mode = 'happy'; this.until = performance.now() / 1000 + 2.6;
  }

  headWorld(v) {
    this.head.updateWorldMatrix(true, false);
    return v.set(0, 0.2, 0).applyMatrix4(this.head.matrixWorld);
  }

  pickTarget() {
    for (let i = 0; i < 8; i++) {
      const s = SPOTS[Math.floor(Math.random() * SPOTS.length)];
      if (Math.hypot(s.x - this.pos.x, s.z - this.pos.z) > 1.5) return s;
    }
    return SPOTS[0];
  }

  update(dt, t) {
    if (this.mode === 'happy' && t > this.until) { this.mode = 'sit'; this.until = t + 3 + Math.random() * 5; }
    if (this.mode !== 'walk' && this.mode !== 'happy' && t > this.until) {
      this.path = this.nav.find(this.pos, this.pickTarget()); this.mode = 'walk';
    }
    let moving = false;
    if (this.mode === 'walk') {
      const tg = this.path[0];
      if (!tg) { const r = Math.random(); this.mode = r < 0.35 ? 'loaf' : 'sit'; this.until = t + 5 + Math.random() * 12; }
      else {
        const dx = tg.x - this.pos.x, dz = tg.z - this.pos.z, d = Math.hypot(dx, dz), step = 0.75 * dt;
        if (d <= step) { this.pos.x = tg.x; this.pos.z = tg.z; this.path.shift(); }
        else { this.pos.x += dx / d * step; this.pos.z += dz / d * step; }
        const want = Math.atan2(dx, dz); const df = ((want - this.facing + Math.PI) % (2 * Math.PI) + 2 * Math.PI) % (2 * Math.PI) - Math.PI;
        this.facing += df * Math.min(1, dt * 8);
        moving = true;
      }
    }
    this.phase += dt * (moving ? 11 : 0);
    const k = 1 - Math.exp(-dt * 8);
    // chân
    this.legs.forEach((g, i) => { const s = Math.sin(this.phase + (i % 2 ? Math.PI : 0) + (i > 1 ? Math.PI / 2 : 0)); g.rotation.x += ((moving ? s * 0.6 : this.mode === 'loaf' ? -1.3 : 0) - g.rotation.x) * k; });
    // dáng ngồi / nằm
    const tiltT = this.mode === 'sit' ? -0.45 : 0;
    const lowT = this.mode === 'loaf' ? -0.1 : this.mode === 'sit' ? -0.03 : Math.abs(Math.sin(this.phase)) * 0.01;
    this.body.rotation.x += (tiltT - this.body.rotation.x) * k;
    this.body.position.y += (lowT - this.body.position.y) * k;
    if (this.mode === 'sit') this.body.position.z += (-0.08 - this.body.position.z) * k; else this.body.position.z += (0 - this.body.position.z) * k;
    if (this.mode === 'happy') this.body.position.y = Math.abs(Math.sin(t * 9)) * 0.12;
    this.head.rotation.x = this.mode === 'sit' ? 0.45 : this.mode === 'happy' ? -0.3 : 0;
    this.head.rotation.y = moving ? 0 : Math.sin(t * 0.7) * 0.6;
    // đuôi
    const happy = this.mode === 'happy';
    this.tail.forEach((g, i) => { if (i) g.rotation.z = Math.sin(t * (happy ? 14 : moving ? 6 : 2.2) + i * 0.7) * (0.18 + i * 0.03); g.rotation.x = i ? (happy ? 0.05 : 0.25) : (this.mode === 'loaf' ? -1.45 : happy ? -0.15 : -0.9); });
    this.root.position.set(this.pos.x, 0, this.pos.z);
    this.root.rotation.y = this.facing;
  }
}
