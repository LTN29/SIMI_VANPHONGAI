// Đám đông xa (Sảnh đông người / nhìn toàn cảnh): mỗi người ở xa chỉ còn là 1 hình nhân đơn giản cùng tỉ lệ, cùng màu áo / tóc /
// da, và CẢ ĐÁM ĐÔNG vẽ chung 6 lệnh (instancing) thay vì ~16 lệnh mỗi người. Người ở gần vẫn là nhân vật đầy đủ.
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

const part = (geo, x, y, z, sx = 1, sy = 1, sz = 1) => { const g = geo.clone(); g.scale(sx, sy, sz); g.translate(x, y, z); return g; };
const clean = (g) => { for (const n of Object.keys(g.attributes)) if (n !== 'position' && n !== 'normal') g.deleteAttribute(n); return g.index ? g.toNonIndexed() : g; };
const merge = (list) => mergeGeometries(list.map(clean), false);

// tỉ lệ khớp với Person (hông 0,42 · thân 0,68 · vai 0,86 · đầu 1,19)
function geometries() {
  const torso = new THREE.CapsuleGeometry(0.19, 0.2, 2, 8);
  const arm = new THREE.CapsuleGeometry(0.062, 0.22, 2, 6);
  const leg = new THREE.CapsuleGeometry(0.078, 0.25, 2, 6);
  const head = new THREE.SphereGeometry(0.25, 12, 9);
  const hand = new THREE.SphereGeometry(0.068, 6, 4);
  const cap = new THREE.SphereGeometry(0.268, 12, 6, 0, Math.PI * 2, 0, Math.PI * 0.52);
  const eye = new THREE.SphereGeometry(0.036, 6, 4);
  return {
    shirt: merge([part(torso, 0, 0.68, 0, 1, 1, 0.78), part(arm, -0.255, 0.71, 0), part(arm, 0.255, 0.71, 0)]),
    pants: merge([part(leg, -0.095, 0.22, 0), part(leg, 0.095, 0.22, 0), part(new THREE.CylinderGeometry(0.185, 0.185, 0.05, 8), 0, 0.47, 0, 1, 1, 0.8)]),
    skin: merge([part(head, 0, 1.19, 0), part(hand, -0.255, 0.51, 0), part(hand, 0.255, 0.51, 0), part(new THREE.CylinderGeometry(0.07, 0.08, 0.1, 6), 0, 0.97, 0)]),
    hair: merge([part(cap, 0, 1.2, -0.01)]),
    eyes: merge([part(eye, -0.09, 1.21, 0.225, 1, 1.3, 0.6), part(eye, 0.09, 1.21, 0.225, 1, 1.3, 0.6)]),
  };
}

export class Crowd {
  constructor(scene, { cap = 256, blobGeo, blobMat } = {}) {
    this.cap = cap; this.n = 0;
    const G = geometries();
    const mk = (geo, mat, colored) => {
      const m = new THREE.InstancedMesh(geo, mat, cap);
      m.count = 0; m.frustumCulled = false; m.castShadow = false; m.receiveShadow = false;
      if (colored) m.setColorAt(0, new THREE.Color('#ffffff'));
      m.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
      scene.add(m);
      return m;
    };
    const mat = (rough) => new THREE.MeshStandardMaterial({ color: '#ffffff', roughness: rough, metalness: 0 });
    this.parts = {
      shirt: mk(G.shirt, mat(0.8), true), pants: mk(G.pants, mat(0.85), true), skin: mk(G.skin, mat(0.6), true),
      hair: mk(G.hair, mat(0.9), true), eyes: mk(G.eyes, new THREE.MeshStandardMaterial({ color: '#1f1a17', roughness: 0.4 }), false),
    };
    this.blob = blobGeo && blobMat ? mk(blobGeo, blobMat, false) : null;
    if (this.blob) this.blob.renderOrder = 1;
    this.m = new THREE.Matrix4(); this.legM = new THREE.Matrix4(); this.t = new THREE.Matrix4(); this.q = new THREE.Quaternion();
    this.e = new THREE.Euler(0, 0, 0, 'YXZ'); this.v = new THREE.Vector3(); this.s = new THREE.Vector3(1, 1, 1);
    this.blobM = new THREE.Matrix4();
  }

  begin() { this.n = 0; }

  // p: người trong Sảnh (p.person.mats có màu áo / quần / da / tóc); y: độ cao gốc; facing: hướng nhìn
  add(person, x, y, z, facing, { seated = false, bob = 0, wig = 0, lean = 0, turn = 0 } = {}) {
    if (this.n >= this.cap) return false;
    const i = this.n++;
    this.e.set(lean, facing + turn, wig); this.q.setFromEuler(this.e);
    this.v.set(x, y + bob, z);
    this.m.compose(this.v, this.q, this.s);
    const P = this.parts; const M = person.mats;
    P.shirt.setMatrixAt(i, this.m); P.skin.setMatrixAt(i, this.m); P.hair.setMatrixAt(i, this.m); P.eyes.setMatrixAt(i, this.m);
    if (seated) {
      // ngồi: gập chân 90° quanh hông
      this.legM.makeTranslation(0, 0.42, 0).multiply(this.t.makeRotationX(-1.45)).multiply(this.t.makeTranslation(0, -0.42, 0));
      P.pants.setMatrixAt(i, this.t.multiplyMatrices(this.m, this.legM));
    } else P.pants.setMatrixAt(i, this.m);
    P.shirt.setColorAt(i, M.shirt.color); P.pants.setColorAt(i, M.pants.color); P.skin.setColorAt(i, M.skin.color); P.hair.setColorAt(i, M.hair.color);
    if (this.blob && !seated) {
      this.blobM.makeRotationX(-Math.PI / 2).setPosition(x, 0.012, z);
      this.blob.setMatrixAt(this.blobN = (this.blobN || 0), this.blobM); this.blobN++;
    }
    return true;
  }

  end() {
    for (const m of Object.values(this.parts)) {
      m.count = this.n;
      m.instanceMatrix.needsUpdate = true;
      if (m.instanceColor) m.instanceColor.needsUpdate = true;
    }
    if (this.blob) { this.blob.count = this.blobN || 0; this.blob.instanceMatrix.needsUpdate = true; this.blobN = 0; }
  }
}
