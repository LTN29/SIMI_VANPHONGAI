// Chống chớp ở Sảnh: (1) không có 2 mặt nhìn thấy được trùng mặt phẳng mà chồng lên nhau (card đồ hoạ vẽ lẫn lộn → chớp sọc
// khi xoay camera); (2) xoay camera từng chút (< 1 điểm ảnh / khung) thì gần như không điểm ảnh nào nhảy sáng/tối bất thường.
const { launch, check, finish, run } = require('./helpers');

run(async () => {
  const { app, win, errors } = await launch({ prefix: 'flicker', config: { lobbyEnabled: false, autoUpdate: false }, size: [1380, 868] });
  await win.waitForSelector('.welcome', { timeout: 20000 });
  await win.click('#modalClose');
  await win.evaluate(() => {
    const d = document.createElement('div'); d.style.cssText = 'position:fixed;left:0;top:0;width:1000px;height:700px;z-index:99999;background:#e9f0fa';
    document.body.append(d); window.__S = new window.Lobby3D(d, {}); window.__S.paused = true;
  });
  await win.waitForTimeout(2500);

  // (1) mặt trùng nhau: chỉ xét mặt quay lên trên hoặc quay ra phía camera (+x, +y, +z); bỏ vệt sáng cộng màu (không ghi chiều sâu)
  const overlaps = await win.evaluate(() => {
    const S = window.__S; const V = S.tmpV.constructor; S.scene.updateMatrixWorld(true);
    const groups = new Map(); let id = 0;
    S.scene.traverse((o) => {
      if (!o.isMesh || o.isInstancedMesh || !o.visible || !o.material || o.material.visible === false || o.material.depthWrite === false) return;
      for (let q = o; q; q = q.parent) if (q.userData && q.userData.character) return; // nhân vật (NPC) xoay nghiêng, luôn chuyển động
      const me = id++; const pos = o.geometry.attributes.position; const idx = o.geometry.index; const n = idx ? idx.count : pos.count;
      const a = new V(), b = new V(), c = new V();
      for (let i = 0; i < n; i += 3) {
        a.fromBufferAttribute(pos, idx ? idx.getX(i) : i).applyMatrix4(o.matrixWorld);
        b.fromBufferAttribute(pos, idx ? idx.getX(i + 1) : i + 1).applyMatrix4(o.matrixWorld);
        c.fromBufferAttribute(pos, idx ? idx.getX(i + 2) : i + 2).applyMatrix4(o.matrixWorld);
        const nr = new V().subVectors(b, a).cross(new V().subVectors(c, a)); if (nr.length() < 2e-5) continue; nr.normalize();
        const ax = nr.x > 0.999 ? 0 : nr.y > 0.999 ? 1 : nr.z > 0.999 ? 2 : -1; if (ax < 0) continue;
        const P = [a, b, c].map((p) => [p.x, p.y, p.z]); const u = [0, 1, 2].filter((k) => k !== ax);
        const key = ax + '|' + Math.round(P[0][ax] * 2000);
        const bb = [Math.min(...P.map((p) => p[u[0]])), Math.min(...P.map((p) => p[u[1]])), Math.max(...P.map((p) => p[u[0]])), Math.max(...P.map((p) => p[u[1]]))];
        if (!groups.has(key)) groups.set(key, []);
        groups.get(key).push({ me, bb, col: o.material.color ? '#' + o.material.color.getHexString() : '?' });
      }
    });
    const hits = [];
    for (const [key, list] of groups) for (let i = 0; i < list.length; i++) for (let j = i + 1; j < list.length; j++) {
      const A = list[i], B = list[j]; if (A.me === B.me) continue;
      const ox = Math.min(A.bb[2], B.bb[2]) - Math.max(A.bb[0], B.bb[0]); const oy = Math.min(A.bb[3], B.bb[3]) - Math.max(A.bb[1], B.bb[1]);
      if (ox > 0.02 && oy > 0.02) hits.push(`${key} ${A.col}/${B.col} ${(ox * oy).toFixed(3)}m²`);
    }
    return [...new Set(hits)];
  });
  check(overlaps.length === 0, 'không có 2 mặt trùng mặt phẳng chồng lên nhau' + (overlaps.length ? ': ' + overlaps.slice(0, 5).join(', ') : ''));

  // (2) lấp lánh khi xoay camera chậm
  for (const [name, zoom, el, limit] of [['gần', 0.85, 0.7, 0.3], ['toàn cảnh', 0.44, 0.82, 0.4]]) {
    const pct = await win.evaluate(({ zoom, el }) => {
      const S = window.__S; const W = 1000, H = 700;
      const cv = document.createElement('canvas'); cv.width = W; cv.height = H; const g = cv.getContext('2d', { willReadFrequently: true });
      Object.assign(S.view, { zoom, el, az: 0.72 }); S.view.target.set(0, 0.6, 0.6);
      const lum = [];
      for (let k = 0; k < 16; k++) {
        S.view.az = 0.72 + k * 0.0004; S.updateCamera(); S.renderer.render(S.scene, S.cam);
        g.fillStyle = '#e9f0fa'; g.fillRect(0, 0, W, H); g.drawImage(S.canvas, 0, 0, W, H);
        const px = g.getImageData(0, 0, W, H).data; const L = new Float32Array(W * H);
        for (let i = 0; i < W * H; i++) L[i] = 0.299 * px[i * 4] + 0.587 * px[i * 4 + 1] + 0.114 * px[i * 4 + 2];
        lum.push(L);
      }
      const bad = new Uint8Array(W * H);
      for (let k = 1; k < lum.length - 1; k++) for (let i = 0; i < W * H; i++) if (Math.abs(lum[k][i] - (lum[k - 1][i] + lum[k + 1][i]) / 2) > 40) bad[i] = 1;
      let n = 0; for (let i = 0; i < W * H; i++) n += bad[i];
      return n / (W * H) * 100;
    }, { zoom, el });
    check(pct < limit, `xoay camera (${name}): ${pct.toFixed(3)}% điểm ảnh lấp lánh (< ${limit}%)`);
  }
  await finish(app, errors);
});
