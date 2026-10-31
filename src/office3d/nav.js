// Lưới tìm đường A* trên sàn văn phòng (đơn vị: mét).
export class NavGrid {
  constructor(minX, minZ, maxX, maxZ, cell = 0.2) {
    this.minX = minX; this.minZ = minZ; this.cell = cell;
    this.cols = Math.ceil((maxX - minX) / cell);
    this.rows = Math.ceil((maxZ - minZ) / cell);
    this.blocked = new Uint8Array(this.cols * this.rows);
  }

  idx(c, r) { return r * this.cols + c; }
  toCell(x, z) {
    return {
      c: Math.max(0, Math.min(this.cols - 1, Math.floor((x - this.minX) / this.cell))),
      r: Math.max(0, Math.min(this.rows - 1, Math.floor((z - this.minZ) / this.cell))),
    };
  }
  center(c, r) { return { x: this.minX + (c + 0.5) * this.cell, z: this.minZ + (r + 0.5) * this.cell }; }

  blockRect(x1, z1, x2, z2, pad = 0.22) {
    const a = this.toCell(Math.min(x1, x2) - pad, Math.min(z1, z2) - pad);
    const b = this.toCell(Math.max(x1, x2) + pad, Math.max(z1, z2) + pad);
    for (let r = a.r; r <= b.r; r++) for (let c = a.c; c <= b.c; c++) this.blocked[this.idx(c, r)] = 1;
  }

  isFree(x, z) {
    const { c, r } = this.toCell(x, z);
    return !this.blocked[this.idx(c, r)];
  }

  nearestFree(c, r) {
    if (!this.blocked[this.idx(c, r)]) return { c, r };
    for (let rad = 1; rad < 12; rad++) {
      for (let dr = -rad; dr <= rad; dr++) for (let dc = -rad; dc <= rad; dc++) {
        const cc = c + dc, rr = r + dr;
        if (cc < 0 || rr < 0 || cc >= this.cols || rr >= this.rows) continue;
        if (!this.blocked[this.idx(cc, rr)]) return { c: cc, r: rr };
      }
    }
    return { c, r };
  }

  lineFree(a, b) {
    const d = Math.hypot(b.x - a.x, b.z - a.z);
    const n = Math.max(1, Math.ceil(d / (this.cell * 0.5)));
    for (let i = 1; i < n; i++) {
      const t = i / n;
      if (!this.isFree(a.x + (b.x - a.x) * t, a.z + (b.z - a.z) * t)) return false;
    }
    return true;
  }

  // Trả về danh sách điểm (không gồm điểm đầu), đã làm mượt.
  find(from, to) {
    const s0 = this.toCell(from.x, from.z);
    const g0 = this.nearestFree(...Object.values(this.toCell(to.x, to.z)));
    const start = this.idx(s0.c, s0.r), goal = this.idx(g0.c, g0.r);
    if (start === goal) return [{ x: to.x, z: to.z }];
    const N = this.cols * this.rows;
    const gs = new Float32Array(N).fill(Infinity);
    const came = new Int32Array(N).fill(-1);
    const closed = new Uint8Array(N);
    const heap = [];
    const push = (i, f) => {
      heap.push([f, i]); let k = heap.length - 1;
      while (k > 0) { const p = (k - 1) >> 1; if (heap[p][0] <= heap[k][0]) break; [heap[p], heap[k]] = [heap[k], heap[p]]; k = p; }
    };
    const pop = () => {
      const top = heap[0]; const last = heap.pop();
      if (heap.length) {
        heap[0] = last; let k = 0;
        for (;;) {
          const l = 2 * k + 1, r = l + 1; let m = k;
          if (l < heap.length && heap[l][0] < heap[m][0]) m = l;
          if (r < heap.length && heap[r][0] < heap[m][0]) m = r;
          if (m === k) break; [heap[m], heap[k]] = [heap[k], heap[m]]; k = m;
        }
      }
      return top[1];
    };
    const h = (i) => {
      const dc = Math.abs((i % this.cols) - g0.c), dr = Math.abs(Math.floor(i / this.cols) - g0.r);
      return (dc + dr) + (Math.SQRT2 - 2) * Math.min(dc, dr);
    };
    gs[start] = 0; push(start, h(start));
    const dirs = [[1, 0, 1], [-1, 0, 1], [0, 1, 1], [0, -1, 1], [1, 1, Math.SQRT2], [1, -1, Math.SQRT2], [-1, 1, Math.SQRT2], [-1, -1, Math.SQRT2]];
    let found = false;
    while (heap.length) {
      const cur = pop();
      if (closed[cur]) continue;
      if (cur === goal) { found = true; break; }
      closed[cur] = 1;
      const cc = cur % this.cols, cr = Math.floor(cur / this.cols);
      for (const [dc, dr, cost] of dirs) {
        const nc = cc + dc, nr = cr + dr;
        if (nc < 0 || nr < 0 || nc >= this.cols || nr >= this.rows) continue;
        const ni = this.idx(nc, nr);
        if (this.blocked[ni] && ni !== goal) continue;
        if (dc && dr && (this.blocked[this.idx(cc + dc, cr)] || this.blocked[this.idx(cc, cr + dr)])) continue;
        const g = gs[cur] + cost;
        if (g < gs[ni]) { gs[ni] = g; came[ni] = cur; push(ni, g + h(ni)); }
      }
    }
    if (!found) return [{ x: to.x, z: to.z }];
    const cells = [];
    for (let i = goal; i !== -1 && i !== start; i = came[i]) cells.push(i);
    cells.reverse();
    const pts = cells.map((i) => this.center(i % this.cols, Math.floor(i / this.cols)));
    pts[pts.length - 1] = { x: to.x, z: to.z };
    // làm mượt: nhảy tới điểm xa nhất còn nhìn thấy
    const out = []; let anchor = { x: from.x, z: from.z }; let k = 0;
    while (k < pts.length) {
      let far = k;
      for (let j = pts.length - 1; j > k; j--) if (this.lineFree(anchor, pts[j])) { far = j; break; }
      out.push(pts[far]); anchor = pts[far]; k = far + 1;
    }
    return out;
  }
}
