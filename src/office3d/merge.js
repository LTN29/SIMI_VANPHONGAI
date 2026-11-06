// Gộp đồ vật đứng yên của Sảnh thành ít khối lớn → ít lệnh vẽ (draw call) hơn nhiều: điện thoại / máy yếu mượt hẳn.
// Chỉ gộp thứ chắc chắn đứng yên: không nằm trong dữ liệu `world` mà code còn giữ để đổi (ghế, bàn bida, màn chiếu…),
// không tự chuyển động / đổi màu (chạy thử các hiệu ứng `world.animated` rồi so trước sau), không trong suốt, không ẩn.
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

const T_SAMPLES = [0.37, 1.9, 4.3, 9.7, 23.1];

// mọi Object3D mà dữ liệu world còn giữ tham chiếu (kể cả con cháu) → coi là "có thể bị code đổi"
function referenced(world, keys) {
  const out = new Set(); const seen = new Set();
  const walk = (v, depth) => {
    if (!v || typeof v !== 'object' || seen.has(v) || depth > 4) return;
    seen.add(v);
    if (v.isObject3D) { v.traverse((o) => out.add(o)); return; }
    if (v.isMaterial || v.isTexture || v.isBufferGeometry) return;
    for (const k of Object.keys(v)) if (k !== 'animated') walk(v[k], depth + 1);
  };
  for (const k of keys || Object.keys(world)) if (k !== 'animated') walk(world[k], 1);
  return out;
}

const matState = (m) => [m.visible, m.opacity, m.color && m.color.getHex(), m.emissive && m.emissive.getHex(), m.emissiveIntensity,
  m.map && m.map.offset.x, m.map && m.map.offset.y, m.map && m.map.rotation].join('|');

// chạy thử hiệu ứng ở vài thời điểm → vật nào đổi vị trí / ẩn hiện, chất liệu nào đổi màu thì không gộp
function dynamicParts(scene, animated) {
  const meshes = []; scene.traverse((o) => { if (o.isMesh) meshes.push(o); });
  const mats = new Set(); meshes.forEach((o) => [].concat(o.material).forEach((m) => mats.add(m)));
  const snap = () => {
    scene.updateMatrixWorld(true);
    return { m: new Map(meshes.map((o) => [o, o.matrixWorld.elements.join(',') + '|' + visibleChain(o)])), mat: new Map([...mats].map((m) => [m, matState(m)])) };
  };
  const base = snap(); const movers = new Set(); const live = new Set();
  for (const t of T_SAMPLES) {
    for (const fn of animated) { try { fn(t, 0.016); } catch { /* hiệu ứng lỗi: bỏ qua */ } }
    const s = snap();
    for (const o of meshes) if (s.m.get(o) !== base.m.get(o)) movers.add(o);
    for (const m of mats) if (s.mat.get(m) !== base.mat.get(m)) live.add(m);
  }
  return { movers, live };
}
function visibleChain(o) { for (let p = o; p; p = p.parent) if (!p.visible) return 0; return 1; }

// chất liệu "trơn" (không ảnh, không phát sáng): khác màu vẫn gộp được – màu chuyển vào từng đỉnh (vertex color)
const plain = (m) => m.isMeshStandardMaterial && !m.map && !m.emissiveMap && !m.normalMap && !m.roughnessMap && !m.alphaMap && !m.aoMap
  && !m.lightMap && !m.bumpMap && !m.envMap && (!m.emissive || m.emissive.getHex() === 0 || !m.emissiveIntensity) && !m.vertexColors
  && !(m.userData && Object.keys(m.userData).length);

// chữ ký chất liệu (bỏ màu nếu là chất liệu trơn) → cùng chữ ký thì vẽ chung 1 lần
function materialSignature(m) {
  const j = { plain: plain(m) };
  for (const k of ['type', 'side', 'flatShading', 'vertexColors', 'toneMapped', 'roughness', 'metalness', 'emissiveIntensity', 'opacity', 'transparent', 'alphaTest', 'depthWrite', 'wireframe', 'fog', 'blending']) j[k] = m[k];
  for (const k of ['emissive', 'specular']) if (m[k] && m[k].getHex) j[k] = m[k].getHex();
  if (!j.plain && m.color) j.color = m.color.getHex();
  for (const k of ['map', 'emissiveMap', 'normalMap', 'roughnessMap', 'alphaMap', 'envMap', 'lightMap', 'aoMap', 'bumpMap']) j[k] = m[k] ? m[k].uuid : null;
  if (m.userData && Object.keys(m.userData).length) j.ud = m.uuid;
  return JSON.stringify(j);
}

/** Gộp vật đứng yên; keep = các khoá của world mà code còn dùng để đổi đồ vật (mặc định: tất cả). Trả về thống kê. Lỗi bất kỳ → để nguyên cảnh (không ảnh hưởng hiển thị). */
export function mergeStatic(scene, world, { keep: keepKeys } = {}) {
  scene.updateMatrixWorld(true);
  const keep = referenced(world, keepKeys);
  const { movers, live } = dynamicParts(scene, world.animated || []);
  scene.updateMatrixWorld(true);
  const groups = new Map();
  let before = 0; const why = {}; const no = (r) => { why[r] = (why[r] || 0) + 1; };
  scene.traverse((o) => {
    if (!o.isMesh) return;
    before++;
    if (o.isInstancedMesh || o.isSkinnedMesh) return no('instanced');
    if (keep.has(o)) return no('ref');
    if (movers.has(o)) return no('moves');
    if (!visibleChain(o)) return no('hidden');
    if (Object.keys(o.userData || {}).length || o.parent && Object.keys(o.parent.userData || {}).length) return no('userData');
    if (Array.isArray(o.material)) return no('multimat');
    const m = o.material;
    if (!m || live.has(m)) return no('livemat');
    if (m.transparent || !m.visible || m.isShaderMaterial) return no('transparent');
    if (o.onBeforeRender !== THREE.Object3D.prototype.onBeforeRender) return no('hook');
    const geo = o.geometry;
    if (!geo || !geo.attributes.position || geo.morphAttributes && Object.keys(geo.morphAttributes).length) return no('geo');
    const k = [materialSignature(m), o.castShadow ? 1 : 0, o.receiveShadow ? 1 : 0, o.renderOrder].join('|');
    if (!groups.has(k)) groups.set(k, { mat: m, plain: plain(m), cast: o.castShadow, recv: o.receiveShadow, order: o.renderOrder, items: [] });
    groups.get(k).items.push(o);
  });
  let merged = 0, removed = 0;
  for (const g of groups.values()) {
    if (g.items.length < 2) continue;
    const useUv = !!g.mat.map;
    const flat = g.items.some((o) => !o.geometry.index); // có khối không đánh chỉ số → bỏ chỉ số cả nhóm cho khớp
    const geos = [];
    for (const o of g.items) {
      let src = o.geometry;
      if (flat && src.index) src = src.toNonIndexed();
      const geo = new THREE.BufferGeometry();
      const plainAttr = (a) => (a.isInterleavedBufferAttribute ? a.clone() : a.clone());
      geo.setAttribute('position', plainAttr(src.attributes.position));
      if (src.attributes.normal) geo.setAttribute('normal', plainAttr(src.attributes.normal));
      if (useUv && src.attributes.uv) geo.setAttribute('uv', plainAttr(src.attributes.uv));
      if (!flat && src.index) geo.setIndex(src.index.clone());
      if (!geo.attributes.normal) geo.computeVertexNormals();
      if (g.plain) { // màu của chất liệu → màu từng đỉnh
        const c = o.material.color; const n = geo.attributes.position.count; const arr = new Float32Array(n * 3);
        for (let i = 0; i < n; i++) { arr[i * 3] = c.r; arr[i * 3 + 1] = c.g; arr[i * 3 + 2] = c.b; }
        geo.setAttribute('color', new THREE.BufferAttribute(arr, 3));
      }
      geo.applyMatrix4(o.matrixWorld);
      geos.push(geo);
      if (src !== o.geometry) src.dispose();
    }
    const big = mergeGeometries(geos, false);
    geos.forEach((x) => x.dispose());
    if (!big) continue;
    let mat = g.mat;
    if (g.plain) { mat = g.mat.clone(); mat.color = new THREE.Color(1, 1, 1); mat.vertexColors = true; mat.needsUpdate = true; }
    const mesh = new THREE.Mesh(big, mat);
    mesh.castShadow = g.cast; mesh.receiveShadow = g.recv; mesh.renderOrder = g.order;
    mesh.matrixAutoUpdate = false; mesh.name = 'merged';
    scene.add(mesh);
    for (const o of g.items) { o.parent.remove(o); removed++; }
    merged++;
  }
  // nhóm rỗng còn lại (đã chuyển hết con) → bỏ cho cây cảnh gọn
  const empty = []; scene.traverse((o) => { if (o !== scene && o.type === 'Group' && !o.children.length && !keep.has(o)) empty.push(o); });
  for (const o of empty) o.parent && o.parent.remove(o);
  scene.updateMatrixWorld(true);
  const sizes = [...groups.values()].map((g) => g.items.length).sort((a, b) => b - a);
  return { before, removed, merged, why, groups: groups.size, sizes: sizes.slice(0, 12) };
}
