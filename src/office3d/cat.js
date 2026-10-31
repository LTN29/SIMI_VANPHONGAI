// Mèo văn phòng / mèo của quán: đi dạo, ngồi nghỉ, vẫy đuôi, nằm cuộn tròn; ở Sảnh thì Gateway điều khiển (mọi máy thấy
// cùng một con mèo) và người chơi được với mèo: vuốt ve, cho ăn (bát thức ăn), chơi cuộn len, gọi mèo đi theo.
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

  // đồ chơi / bát ăn (chỉ tạo khi cần lần đầu)
  props() {
    if (this.bowl) return;
    const sc = this.root.parent;
    this.bowl = new THREE.Group();
    const b = new THREE.Mesh(new THREE.CylinderGeometry(0.13, 0.1, 0.06, 16, 1, true), std('#e1262d', 0.5)); b.material.side = THREE.DoubleSide; b.position.y = 0.03;
    const food = new THREE.Mesh(new THREE.CylinderGeometry(0.115, 0.115, 0.02, 16), std('#b8742f', 0.9)); food.position.y = 0.045;
    this.bowl.add(b, food); this.food = food; this.bowl.visible = false; sc.add(this.bowl);
    this.yarn = new THREE.Group();
    const ball = new THREE.Mesh(new THREE.SphereGeometry(0.07, 12, 10), std('#ff7aa8', 0.9)); ball.position.y = 0.07;
    const loop = new THREE.Mesh(new THREE.TorusGeometry(0.07, 0.008, 6, 20), std('#e84f87', 0.9)); loop.position.y = 0.07; loop.rotation.y = 0.6;
    this.yarn.add(ball, loop); this.yarn.visible = false; sc.add(this.yarn);
  }

  // lệnh từ Gateway: { seq, mode: walk|follow, target, then: sit|loaf|pet|feed|play, by, act, until, at }
  command(st, skewMs = 0) {
    if (!st || (this.cmd && st.seq <= this.cmd.seq && st.at <= this.cmd.at)) return;
    this.remote = true;
    const fresh = this.cmd && this.cmd.seq !== st.seq && st.act;
    this.cmd = st; this.skew = skewMs;
    this.props();
    if (this.bowl) { this.bowl.visible = false; this.yarn.visible = false; }
    this.goTo(st.target);
    this.mode = 'walk';
    this.followId = st.mode === 'follow' ? st.by : null;
    if (fresh && st.act === 'call' && this.onFx) this.onFx('🐾');
    if (st.act === 'feed') { this.bowl.position.set(this.dest.x + 0.3, 0, this.dest.z); this.food.scale.set(1, 1, 1); this.bowl.visible = true; }
  }

  goTo(target) {
    const c = this.nav.toCell(target.x, target.z); const f = this.nav.nearestFree(c.c, c.r);
    this.dest = this.nav.center(f.c, f.r);
    this.path = this.nav.find(this.pos, this.dest);
  }

  pickTarget() {
    for (let i = 0; i < 8; i++) {
      const s = SPOTS[Math.floor(Math.random() * SPOTS.length)];
      if (Math.hypot(s.x - this.pos.x, s.z - this.pos.z) > 1.5) return s;
    }
    return SPOTS[0];
  }

  // tới nơi: làm việc Gateway dặn (vui vẻ / ăn / chơi len) tới hết giờ rồi ngồi
  arrive(t) {
    const st = this.cmd;
    // thời gian diễn tính từ lúc tới nơi (mèo ở xa thì chạy lâu hơn); lệnh quá cũ (vào Sảnh sau) thì thôi
    const stale = !st || !st.until || Date.now() + (this.skew || 0) > st.until + 60000;
    const left = stale ? 0 : Math.min(12, (st.until - st.at) / 1000);
    const then = st ? st.then : 'sit';
    if (then === 'pet' && left > 0) { this.mode = 'happy'; this.until = t + left; this.onFx && this.onFx('💕'); }
    else if (then === 'feed' && left > 0) { this.mode = 'eat'; this.until = t + left; this.facing = Math.atan2(this.bowl.position.x - this.pos.x, this.bowl.position.z - this.pos.z); this.onFx && this.onFx('😋'); }
    else if (then === 'play' && left > 0) { this.mode = 'play'; this.until = t + left; this.playC = { x: this.pos.x, z: this.pos.z }; this.yarn.visible = true; this.onFx && this.onFx('🧶'); }
    else { this.mode = then === 'loaf' ? 'loaf' : 'sit'; this.until = t + 1e6; if (this.bowl) { this.bowl.visible = false; this.yarn.visible = false; } }
  }

  // ctx.posOf(id) → vị trí người (để mèo đi theo)
  update(dt, t, ctx) {
    if (this.remote) this.remoteTick(dt, t, ctx);
    else {
      if (this.mode === 'happy' && t > this.until) { this.mode = 'sit'; this.until = t + 3 + Math.random() * 5; }
      if (this.mode !== 'walk' && this.mode !== 'happy' && t > this.until) { this.path = this.nav.find(this.pos, this.pickTarget()); this.mode = 'walk'; }
    }
    let moving = false;
    if (this.mode === 'walk') {
      const tg = this.path[0];
      if (!tg) { if (this.remote) this.arrive(t); else { const r = Math.random(); this.mode = r < 0.35 ? 'loaf' : 'sit'; this.until = t + 5 + Math.random() * 12; } }
      else {
        const sp = this.followId || (this.cmd && this.cmd.act) ? 1.5 : 0.75; // được gọi / có đồ ăn thì chạy nhanh hơn
        const dx = tg.x - this.pos.x, dz = tg.z - this.pos.z, d = Math.hypot(dx, dz), step = sp * dt;
        if (d <= step) { this.pos.x = tg.x; this.pos.z = tg.z; this.path.shift(); }
        else { this.pos.x += dx / d * step; this.pos.z += dz / d * step; }
        this.turn(Math.atan2(dx, dz), dt);
        moving = true;
      }
    }
    if (this.mode === 'play') {
      // cuộn len lăn vòng quanh, mèo đuổi theo và vồ
      const a = t * 2.2; const P = this.playC;
      this.yarn.position.set(P.x + Math.cos(a) * 0.45, 0, P.z + Math.sin(a) * 0.45);
      this.yarn.rotation.z = -a * 3;
      const dx = this.yarn.position.x - this.pos.x, dz = this.yarn.position.z - this.pos.z; const d = Math.hypot(dx, dz);
      if (d > 0.22) { this.pos.x += dx / d * Math.min(d - 0.2, 1.4 * dt); this.pos.z += dz / d * Math.min(d - 0.2, 1.4 * dt); moving = true; }
      this.turn(Math.atan2(dx, dz), dt);
    }
    if (this.mode === 'eat' && this.food) this.food.scale.y = Math.max(0.15, this.food.scale.y - dt * 0.12);
    this.phase += dt * (moving ? 11 : 0);
    const k = 1 - Math.exp(-dt * 8);
    // chân
    this.legs.forEach((g, i) => { const s = Math.sin(this.phase + (i % 2 ? Math.PI : 0) + (i > 1 ? Math.PI / 2 : 0)); g.rotation.x += ((moving ? s * 0.6 : this.mode === 'loaf' ? -1.3 : 0) - g.rotation.x) * k; });
    // dáng ngồi / nằm / ăn
    const tiltT = this.mode === 'sit' ? -0.45 : this.mode === 'eat' ? 0.18 : 0;
    const lowT = this.mode === 'loaf' ? -0.1 : this.mode === 'sit' ? -0.03 : this.mode === 'eat' ? -0.02 : Math.abs(Math.sin(this.phase)) * 0.01;
    this.body.rotation.x += (tiltT - this.body.rotation.x) * k;
    this.body.position.y += (lowT - this.body.position.y) * k;
    if (this.mode === 'sit') this.body.position.z += (-0.08 - this.body.position.z) * k; else this.body.position.z += (0 - this.body.position.z) * k;
    if (this.mode === 'happy') this.body.position.y = Math.abs(Math.sin(t * 9)) * 0.12;
    if (this.mode === 'play') this.body.position.y = Math.max(0, Math.sin(t * 7)) * 0.1;
    this.head.rotation.x = this.mode === 'sit' ? 0.45 : this.mode === 'happy' ? -0.3 : this.mode === 'eat' ? 0.75 + Math.sin(t * 10) * 0.08 : 0;
    this.head.rotation.y = moving || this.mode === 'eat' ? 0 : Math.sin(t * 0.7) * 0.6;
    // đuôi
    const happy = this.mode === 'happy' || this.mode === 'play';
    this.tail.forEach((g, i) => { if (i) g.rotation.z = Math.sin(t * (happy ? 14 : moving ? 6 : 2.2) + i * 0.7) * (0.18 + i * 0.03); g.rotation.x = i ? (happy ? 0.05 : 0.25) : (this.mode === 'loaf' ? -1.45 : happy ? -0.15 : -0.9); });
    this.root.position.set(this.pos.x, 0, this.pos.z);
    this.root.rotation.y = this.facing;
  }

  turn(want, dt) {
    const df = ((want - this.facing + Math.PI) % (2 * Math.PI) + 2 * Math.PI) % (2 * Math.PI) - Math.PI;
    this.facing += df * Math.min(1, dt * 8);
  }

  remoteTick(dt, t, ctx) {
    const st = this.cmd; if (!st) return;
    const over = this.followId && st.until && Date.now() + (this.skew || 0) > st.until;
    // đi theo người đã gọi: cứ chừng 0.7 giây xem người đó ở đâu, xa quá thì chạy lại gần
    if (this.followId && !over && ctx && ctx.posOf) {
      const p = ctx.posOf(this.followId);
      if (p && (!this.nextFollow || t > this.nextFollow)) {
        this.nextFollow = t + 0.7;
        if (Math.hypot(p.x - this.pos.x, p.z - this.pos.z) > 1.1) { this.goTo({ x: p.x + 0.45, z: p.z + 0.35 }); this.mode = 'walk'; }
      }
    }
    if (over || (['happy', 'eat', 'play'].includes(this.mode) && t > this.until)) {
      this.followId = null;
      if (this.bowl) { this.bowl.visible = false; this.yarn.visible = false; }
      this.mode = 'sit'; this.until = t + 1e6;
    }
  }
}
