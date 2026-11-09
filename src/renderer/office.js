/* Văn phòng pixel: vẽ bằng canvas, nhân vật đi lại, bong bóng thoại (DOM). */
(function () {
  const W = 384, H = 256;
  const SLOTS = [
    { x: 154, y: 92 }, { x: 28, y: 92 }, { x: 280, y: 92 },
    { x: 28, y: 172 }, { x: 280, y: 172 }, { x: 154, y: 172 },
  ];
  const DESK_W = 76;
  const CORRIDORS = [129, 255];
  const TRAY = { x: 316, y: 230, w: 52, h: 16, visitX: 342, visitY: 224 };
  const DOOR = { x: 12, y: 16, w: 24, h: 40 };
  const SKINS = ['#f1c7a0', '#e0ac7e', '#f5d3b3', '#c98e62', '#eabf96', '#d9a074'];

  const C = {
    wall: '#e9dcc4', wallDark: '#d6c6aa', base: '#8c6a4a', floorA: '#b98a5e', floorB: '#ad7f55', floorLine: '#9a6f48',
    deskTop: '#c48a55', deskEdge: '#8f5d34', deskFront: '#a46f40', leg: '#5e3c22',
    chair: '#3b3a4a', chairHi: '#4d4c60', monitor: '#2a2d36', screenOff: '#1b2430', screenOn: '#20364d',
    pants: '#2d2f3a', shoe: '#1c1c22', outline: '#2a1f18',
    sky: '#a9d8f0', skyDeep: '#7fc0e4', frame: '#f6f1e6', board: '#fbfaf5', boardEdge: '#9aa0a8',
    plantPot: '#a65d3b', leaf: '#4f9a52', leafDark: '#3a7a40',
  };

  function shade(hex, amt) {
    const n = parseInt(hex.slice(1), 16);
    let r = (n >> 16) + amt, g = ((n >> 8) & 255) + amt, b = (n & 255) + amt;
    r = Math.max(0, Math.min(255, r)); g = Math.max(0, Math.min(255, g)); b = Math.max(0, Math.min(255, b));
    return '#' + ((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1);
  }

  class Office {
    constructor(root, opts) {
      this.root = root;
      this.opts = opts || {};
      this.canvas = document.createElement('canvas');
      this.canvas.width = W; this.canvas.height = H;
      this.canvas.className = 'office-canvas';
      this.ctx = this.canvas.getContext('2d');
      this.layer = document.createElement('div');
      this.layer.className = 'office-layer';
      this.stage = document.createElement('div');
      this.stage.className = 'office-stage';
      this.stage.append(this.canvas, this.layer);
      root.appendChild(this.stage);
      this.people = new Map();
      this.board = { wait: 0, run: 0, done: 0 };
      this.trayCount = 0;
      this.flyers = [];
      this.queue = [];
      this.busy = false;
      this.scale = 2;
      this.t = 0;
      this.ro = new ResizeObserver(() => this.fit()); this.ro.observe(root);
      this.fit();
      const loop = (ts) => { if (this.dead) return; this.t = ts / 1000; if (!this.paused) { this.step(); this.draw(); } this.raf = requestAnimationFrame(loop); };
      this.raf = requestAnimationFrame(loop);
      this.lastTs = performance.now();
    }

    fit() {
      const r = this.root.getBoundingClientRect();
      const raw = Math.min((r.width - 16) / W, (r.height - 16) / H);
      const s = raw >= 2 ? Math.floor(raw * 2) / 2 : Math.max(0.8, raw);
      this.scale = s;
      this.stage.style.width = W * s + 'px';
      this.stage.style.height = H * s + 'px';
      this.canvas.style.width = W * s + 'px';
      this.canvas.style.height = H * s + 'px';
      this.layoutDom();
    }

    setAgents(agents, sources) {
      const keep = new Set();
      agents.forEach((a, i) => {
        const slot = SLOTS[a.slot != null && SLOTS[a.slot] ? a.slot : i % SLOTS.length];
        let p = this.people.get(a.id);
        const seat = { x: slot.x + DESK_W / 2, y: slot.y + 4 };
        if (!p) {
          p = { id: a.id, pos: { ...seat }, path: [], state: 'idle', note: '', dir: 'down', frame: 0, walkT: 0, skin: SKINS[i % SKINS.length] };
          this.people.set(a.id, p);
        }
        Object.assign(p, { agent: a, slot, seat });
        p.col = slot.x < 100 ? 0 : slot.x < 250 ? 1 : 2;
        p.row = slot.y < 150 ? 0 : 1;
        if (!p.path.length) p.pos = { ...seat };
        keep.add(a.id);
      });
      for (const id of [...this.people.keys()]) if (!keep.has(id)) { this.people.get(id).dom?.remove(); this.people.delete(id); }
      this.sources = sources || this.sources;
      this.buildDom();
    }

    buildDom() {
      this.layer.querySelectorAll('.desk-zone,.desk-plate,.tray-label').forEach((n) => n.remove());
      for (const p of this.people.values()) {
        const zone = document.createElement('button');
        zone.className = 'desk-zone';
        zone.title = `${p.agent.name} – ${p.agent.title}\nBấm để cấu hình · Thả thẻ việc vào đây để giao`;
        zone.dataset.agent = p.agent.id;
        zone.addEventListener('click', (e) => {
          if (this.opts.onPersonClick) this.opts.onPersonClick(p.agent.id, e.clientX, e.clientY);
          else if (this.opts.onDeskClick) this.opts.onDeskClick(p.agent.id);
        });
        zone.addEventListener('dragover', (e) => { e.preventDefault(); zone.classList.add('drop'); });
        zone.addEventListener('dragleave', () => zone.classList.remove('drop'));
        zone.addEventListener('drop', (e) => {
          e.preventDefault(); zone.classList.remove('drop');
          const id = e.dataTransfer.getData('text/vp-card');
          if (id && this.opts.onDrop) this.opts.onDrop(id, p.agent.id);
        });
        const plate = document.createElement('div');
        plate.className = 'desk-plate';
        const src = (this.sources && this.sources[p.agent.source]) || { label: p.agent.source };
        plate.innerHTML = `<span class="pl-name"></span><span class="pl-title"></span><span class="pl-src src-${(p.agent.source || 'sim').split('-')[0]}"></span>`;
        plate.querySelector('.pl-name').textContent = p.agent.name;
        plate.querySelector('.pl-title').textContent = p.agent.title + (p.agent.isManager ? ' ★' : '');
        plate.querySelector('.pl-src').textContent = shortSource(p.agent.source, p.agent.model);
        plate.querySelector('.pl-src').title = src.label + (p.agent.model ? ` · ${p.agent.model}` : '');
        p.zone = zone; p.plate = plate;
        this.layer.append(zone, plate);
      }
      const tray = document.createElement('div');
      tray.className = 'tray-label';
      tray.textContent = 'Khay kết quả';
      this.layer.append(tray);
      this.trayLabel = tray;
      this.layoutDom();
    }

    layoutDom() {
      const s = this.scale;
      for (const p of this.people.values()) {
        if (!p.zone) continue;
        Object.assign(p.zone.style, { left: (p.slot.x - 4) * s + 'px', top: (p.slot.y - 26) * s + 'px', width: (DESK_W + 8) * s + 'px', height: 62 * s + 'px' });
        Object.assign(p.plate.style, { left: (p.slot.x + DESK_W / 2) * s + 'px', top: (p.slot.y + 37) * s + 'px' });
      }
      if (this.trayLabel) Object.assign(this.trayLabel.style, { left: (TRAY.x + TRAY.w / 2) * s + 'px', top: (TRAY.y + TRAY.h + 1) * s + 'px' });
      this.layer.querySelectorAll('.bubble').forEach((b) => this.placeBubble(b));
    }

    destroy() { this.dead = true; cancelAnimationFrame(this.raf); this.ro.disconnect(); this.stage.remove(); }
    setStats() {}
    setDecor() {}
    async interact(id, action) {
      const p = this.people.get(id); if (!p) return false;
      const lines = { wave: '👋 Chào sếp ạ!', praise: '🥰 Hihi cảm ơn sếp!', dance: '🎵 La la la~', coffee: '☕ Cảm ơn sếp, ngon quá!' };
      await this.say(p, lines[action] || '😊', 'say', 2000);
      if (action === 'coffee' && this.opts.onStat) this.opts.onStat(id, 'coffee');
      return true;
    }
    resetView() {}

    setBoard(b) { this.board = { ...this.board, ...b }; }
    setTray(n) { this.trayCount = n; }

    setState(id, state, note) {
      const p = this.people.get(id); if (!p) return;
      p.state = state; p.note = note || '';
      if (p.zone) p.zone.classList.toggle('err', state === 'error');
    }

    // ---------- hoạt cảnh ----------
    enqueue(ev) {
      this.queue.push(ev);
      if (!this.busy) this.runQueue();
    }

    async runQueue() {
      this.busy = true;
      while (this.queue.length) {
        const ev = this.queue.shift();
        const fast = this.queue.length >= 3;
        try { await this.scene(ev, fast); } catch (e) { console.error(e); }
      }
      this.busy = false;
    }

    async scene(ev, fast) {
      const from = this.people.get(ev.from);
      const to = this.people.get(ev.to);
      const dur = fast ? 1200 : Math.min(3800, 1500 + ev.text.length * 14);
      if (ev.from === 'boss' && to) {
        await this.fly(DOOR.x + DOOR.w / 2, DOOR.y + 24, to.seat.x, to.seat.y - 10, fast ? 350 : 800);
        await this.say(to, '📩 ' + ev.text, 'assign', dur);
        return;
      }
      if (!from) return;
      await (from.homeP || Promise.resolve());
      if (ev.to === 'boss') {
        if (ev.kind === 'done') {
          await this.walkTo(from, { x: TRAY.visitX, y: TRAY.visitY, row: 2, col: 2 }, fast);
          this.trayCount += 1;
          await this.say(from, ev.text, 'done', fast ? 900 : 2200);
          from.homeP = this.walkHome(from, fast);
        } else {
          await this.say(from, ev.text, ev.kind, dur);
        }
        return;
      }
      if (to && to !== from) {
        await (to.homeP || Promise.resolve());
        const front = { x: to.slot.x + DESK_W / 2 + (from.slot.x <= to.slot.x ? -31 : 31), y: to.slot.y + 44, row: to.row, col: to.col };
        await this.walkTo(from, front, fast);
        from.dir = 'up';
        await this.say(from, ev.text, ev.kind, dur);
        from.homeP = this.walkHome(from, fast);
      } else {
        await this.say(from, ev.text, ev.kind, dur);
      }
    }

    fly(x0, y0, x1, y1, ms) {
      return new Promise((res) => {
        const f = { x0, y0, x1, y1, t0: performance.now(), ms };
        this.flyers.push(f);
        setTimeout(() => { this.flyers.splice(this.flyers.indexOf(f), 1); res(); }, ms);
      });
    }

    say(p, text, kind, ms) {
      return new Promise((res) => {
        const b = document.createElement('div');
        b.className = 'bubble k-' + (kind || 'say');
        b.textContent = text.length > 120 ? text.slice(0, 119) + '…' : text;
        b._p = p;
        this.layer.appendChild(b);
        this.placeBubble(b);
        const track = setInterval(() => this.placeBubble(b), 60);
        requestAnimationFrame(() => b.classList.add('show'));
        setTimeout(() => {
          b.classList.remove('show');
          setTimeout(() => { clearInterval(track); b.remove(); }, 220);
          res();
        }, ms);
      });
    }

    placeBubble(b) {
      const p = b._p; if (!p) return;
      const s = this.scale;
      const seated = this.isSeated(p);
      const headY = p.pos.y - (seated ? 24 : 26);
      const x = Math.max(60, Math.min(W - 60, p.pos.x));
      b.style.left = x * s + 'px';
      b.style.top = headY * s + 'px';
      b.style.setProperty('--tail', (p.pos.x - x) * s + 'px');
    }

    planPath(p, target) {
      const pts = [];
      const cur = { ...p.pos };
      const atSeat = Math.abs(cur.x - p.seat.x) < 1 && Math.abs(cur.y - p.seat.y) < 1;
      let frontY;
      if (atSeat) {
        const goRight = target.x >= cur.x;
        const sideX = goRight ? p.slot.x + DESK_W + 6 : p.slot.x - 6;
        frontY = p.slot.y + 44;
        pts.push({ x: sideX, y: cur.y }, { x: sideX, y: frontY });
      } else frontY = cur.y;
      const sameLane = Math.abs(frontY - target.y) < 2;
      if (!sameLane) {
        const lastX = pts.length ? pts[pts.length - 1].x : cur.x;
        const corr = CORRIDORS.reduce((a, c) => (Math.abs(c - (lastX + target.x) / 2) < Math.abs(a - (lastX + target.x) / 2) ? c : a), CORRIDORS[0]);
        pts.push({ x: corr, y: frontY }, { x: corr, y: target.y });
      }
      pts.push({ x: target.x, y: target.y });
      return pts;
    }

    walkTo(p, target, fast) {
      p.path = this.planPath(p, target);
      p.speed = fast ? 190 : 95;
      return new Promise((res) => { p.onArrive = res; });
    }

    walkHome(p, fast) {
      const pts = [];
      const cur = p.pos;
      const goRight = cur.x > p.seat.x;
      const sideX = goRight ? p.slot.x + DESK_W + 6 : p.slot.x - 6;
      const frontY = p.slot.y + 44;
      if (Math.abs(cur.y - frontY) > 2) {
        const corr = CORRIDORS.reduce((a, c) => (Math.abs(c - (cur.x + sideX) / 2) < Math.abs(a - (cur.x + sideX) / 2) ? c : a), CORRIDORS[0]);
        pts.push({ x: corr, y: cur.y }, { x: corr, y: frontY });
      }
      pts.push({ x: sideX, y: frontY }, { x: sideX, y: p.seat.y }, { x: p.seat.x, y: p.seat.y });
      p.path = pts; p.speed = fast ? 190 : 95;
      return new Promise((res) => { p.onArrive = () => { p.dir = 'down'; p.homeP = null; res(); }; });
    }

    isSeated(p) { return !p.path.length && Math.abs(p.pos.x - p.seat.x) < 1 && Math.abs(p.pos.y - p.seat.y) < 1; }

    step() {
      const now = performance.now();
      const dt = Math.min(0.05, (now - this.lastTs) / 1000);
      this.lastTs = now;
      for (const p of this.people.values()) {
        if (!p.path.length) continue;
        const tgt = p.path[0];
        const dx = tgt.x - p.pos.x, dy = tgt.y - p.pos.y;
        const d = Math.hypot(dx, dy);
        const mv = p.speed * dt;
        if (Math.abs(dx) > Math.abs(dy)) p.dir = dx > 0 ? 'right' : 'left'; else p.dir = dy > 0 ? 'down' : 'up';
        p.walkT += dt;
        if (d <= mv) {
          p.pos = { x: tgt.x, y: tgt.y }; p.path.shift();
          if (!p.path.length && p.onArrive) { const f = p.onArrive; p.onArrive = null; f(); }
        } else { p.pos.x += (dx / d) * mv; p.pos.y += (dy / d) * mv; }
      }
    }

    // ---------- vẽ ----------
    draw() {
      const g = this.ctx;
      g.imageSmoothingEnabled = false;
      this.drawRoom(g);
      const items = [];
      for (const p of this.people.values()) {
        items.push({ y: p.slot.y + 1, fn: () => this.drawChair(g, p) });
        items.push({ y: p.slot.y + 30, fn: () => this.drawDesk(g, p) });
        const seated = this.isSeated(p);
        items.push({ y: seated ? p.slot.y + 2 : p.pos.y, fn: () => this.drawPerson(g, p, seated) });
      }
      items.push({ y: TRAY.y + TRAY.h, fn: () => this.drawTray(g) });
      items.sort((a, b) => a.y - b.y).forEach((i) => i.fn());
      for (const p of this.people.values()) this.drawStatus(g, p);
      for (const f of this.flyers) {
        const k = Math.min(1, (performance.now() - f.t0) / f.ms);
        const x = f.x0 + (f.x1 - f.x0) * k, y = f.y0 + (f.y1 - f.y0) * k - Math.sin(k * Math.PI) * 30;
        this.drawEnvelope(g, Math.round(x), Math.round(y));
      }
    }

    px(g, c, x, y, w = 1, h = 1) { g.fillStyle = c; g.fillRect(Math.round(x), Math.round(y), w, h); }

    drawRoom(g) {
      // sàn gỗ
      for (let y = 56; y < H; y += 8) {
        this.px(g, ((y / 8) % 2) ? C.floorA : C.floorB, 0, y, W, 8);
        this.px(g, C.floorLine, 0, y + 7, W, 1);
        const off = ((y / 8) % 2) * 24;
        for (let x = off; x < W; x += 48) this.px(g, C.floorLine, x, y, 1, 7);
      }
      // thảm giữa phòng
      this.px(g, '#6d4d6e', 112, 140, 160, 26); this.px(g, '#83607f', 114, 142, 156, 22);
      for (let x = 118; x < 268; x += 8) this.px(g, '#9a7594', x, 152, 4, 2);
      // tường
      this.px(g, C.wall, 0, 0, W, 54);
      for (let x = 0; x < W; x += 16) this.px(g, C.wallDark, x, 0, 1, 54);
      this.px(g, C.base, 0, 52, W, 4); this.px(g, shade(C.base, -25), 0, 55, W, 1);
      // cửa ra vào
      this.px(g, '#6b4a2e', DOOR.x - 2, DOOR.y - 2, DOOR.w + 4, DOOR.h + 2);
      this.px(g, '#9b6b40', DOOR.x, DOOR.y, DOOR.w, DOOR.h - 2);
      this.px(g, '#86592f', DOOR.x + 3, DOOR.y + 4, DOOR.w - 6, 14); this.px(g, '#86592f', DOOR.x + 3, DOOR.y + 22, DOOR.w - 6, 12);
      this.px(g, '#f2c94c', DOOR.x + DOOR.w - 5, DOOR.y + 20, 2, 2);
      // cửa sổ
      for (const wx of [56, 288]) {
        this.px(g, C.frame, wx - 2, 8, 44, 32);
        this.px(g, C.skyDeep, wx, 10, 40, 28); this.px(g, C.sky, wx, 22, 40, 16);
        this.px(g, '#ffffff', wx + 6 + (Math.floor(this.t * 2) % 28), 14, 8, 2); this.px(g, '#ffffff', wx + 4 + (Math.floor(this.t * 2) % 28), 16, 12, 2);
        this.px(g, C.frame, wx + 19, 10, 2, 28); this.px(g, C.frame, wx, 23, 40, 2);
        this.px(g, shade(C.frame, -30), wx - 2, 40, 44, 2);
      }
      // bảng việc (kanban)
      const bx = 128, by = 6;
      this.px(g, C.boardEdge, bx - 2, by - 2, 132, 44);
      this.px(g, C.board, bx, by, 128, 40);
      const cols = [['CHỜ', this.board.wait, '#f6d36b'], ['ĐANG', this.board.run, '#8fd0f2'], ['XONG', this.board.done, '#9fe0a0']];
      cols.forEach(([, n, col], i) => {
        const cx = bx + 4 + i * 42;
        this.px(g, '#d9dce2', cx + 38, by + 3, 1, 34);
        this.px(g, col, cx, by + 3, 36, 4);
        const shown = Math.min(n, 6);
        for (let k = 0; k < shown; k++) this.px(g, col, cx + 2 + (k % 3) * 12, by + 10 + Math.floor(k / 3) * 12, 9, 9);
        if (n > 6) { this.px(g, '#555', cx + 30, by + 34, 2, 2); this.px(g, '#555', cx + 26, by + 34, 2, 2); }
      });
      this.px(g, '#c7ccd4', bx + 20, by + 40, 88, 2);
      // đồng hồ
      const ox = 112, oy = 16;
      g.fillStyle = '#fbfaf5'; g.beginPath(); g.arc(ox, oy, 7, 0, Math.PI * 2); g.fill();
      g.strokeStyle = '#5b4a3a'; g.lineWidth = 1; g.stroke();
      const d = new Date();
      const hand = (ang, len, col) => { g.strokeStyle = col; g.beginPath(); g.moveTo(ox, oy); g.lineTo(ox + Math.sin(ang) * len, oy - Math.cos(ang) * len); g.stroke(); };
      hand(((d.getHours() % 12) + d.getMinutes() / 60) / 12 * Math.PI * 2, 3.5, '#2a2a2a');
      hand(d.getMinutes() / 60 * Math.PI * 2, 5.5, '#2a2a2a');
      // cây cảnh + bình nước
      this.drawPlant(g, 4, 58); this.drawPlant(g, 366, 58);
      this.px(g, '#d8e6ef', 344, 30, 12, 14); this.px(g, '#9fc6de', 345, 32, 10, 10);
      this.px(g, '#e8e8ea', 342, 44, 16, 16); this.px(g, '#c9c9cf', 342, 58, 16, 2); this.px(g, '#4d7fb3', 348, 48, 3, 2);
    }

    drawPlant(g, x, y) {
      this.px(g, C.plantPot, x + 3, y + 12, 10, 9); this.px(g, shade(C.plantPot, -25), x + 3, y + 19, 10, 2);
      const sway = Math.round(Math.sin(this.t * 1.5 + x) * 1);
      this.px(g, C.leafDark, x + 6 + sway, y, 4, 13);
      this.px(g, C.leaf, x + 1 + sway, y + 3, 6, 5); this.px(g, C.leaf, x + 9 + sway, y + 2, 6, 5);
      this.px(g, C.leaf, x + 3 + sway, y + 7, 4, 4); this.px(g, C.leafDark, x + 10 + sway, y + 7, 4, 4);
    }

    drawChair(g, p) {
      const x = p.slot.x + DESK_W / 2 - 8, y = p.slot.y - 16;
      this.px(g, C.chair, x, y, 16, 15); this.px(g, C.chairHi, x + 2, y + 2, 12, 3);
    }

    drawDesk(g, p) {
      const { x, y } = p.slot;
      const working = p.state === 'working';
      this.px(g, C.leg, x + 3, y + 22, 3, 10); this.px(g, C.leg, x + DESK_W - 6, y + 22, 3, 10);
      this.px(g, C.deskEdge, x - 1, y - 1, DESK_W + 2, 24);
      this.px(g, C.deskTop, x, y, DESK_W, 12);
      this.px(g, shade(C.deskTop, 18), x, y, DESK_W, 1);
      this.px(g, C.deskFront, x, y + 12, DESK_W, 10);
      this.px(g, shade(C.deskFront, -18), x + 4, y + 15, DESK_W - 8, 1);
      // màn hình
      const mx = x + 4, my = y - 12;
      this.px(g, C.monitor, mx, my, 24, 16); this.px(g, C.monitor, mx + 10, my + 16, 4, 3); this.px(g, C.monitor, mx + 7, my + 18, 10, 2);
      this.px(g, working ? C.screenOn : C.screenOff, mx + 2, my + 2, 20, 12);
      if (working) {
        const k = Math.floor(this.t * 6);
        for (let i = 0; i < 4; i++) {
          const w = 4 + ((k + i * 5) % 12);
          this.px(g, i % 2 ? '#7fe0a8' : '#8cc8ff', mx + 3 + (i % 2) * 2, my + 3 + i * 3, Math.min(w, 17), 1);
        }
      } else if (p.state === 'error') this.px(g, '#e05d5d', mx + 2, my + 2, 20, 12);
      // bàn phím, cốc, giấy
      this.px(g, '#d9d9df', x + 28, y + 5, 20, 4); this.px(g, '#b9b9c2', x + 29, y + 6, 18, 1);
      this.px(g, '#f4f1ea', x + 51, y + 3, 12, 8); this.px(g, '#d7d1c4', x + 53, y + 5, 8, 1); this.px(g, '#d7d1c4', x + 53, y + 7, 6, 1);
      this.px(g, p.agent.shirt || '#c0504d', x + 65, y + 2, 6, 7); this.px(g, '#ffffff', x + 66, y + 3, 4, 1);
      if (p.agent.isManager) { this.px(g, '#e8c15a', x + 66, y - 6, 5, 6); this.px(g, '#b8902a', x + 67, y, 3, 2); }
    }

    drawTray(g) {
      const { x, y, w, h } = TRAY;
      this.px(g, C.leg, x + 3, y + h - 2, 3, 6); this.px(g, C.leg, x + w - 6, y + h - 2, 3, 6);
      this.px(g, C.deskEdge, x - 1, y - 1, w + 2, h);
      this.px(g, C.deskTop, x, y, w, h - 4);
      this.px(g, '#6b7a8f', x + 12, y + 2, 28, 8); this.px(g, '#8797ac', x + 13, y + 3, 26, 6);
      const n = Math.min(this.trayCount, 8);
      for (let i = 0; i < n; i++) this.px(g, i % 2 ? '#fffdf6' : '#f1ece0', x + 15 + (i % 2), y + 7 - i, 22, 2);
    }

    drawEnvelope(g, x, y) {
      this.px(g, '#7a6a55', x - 6, y - 4, 12, 9); this.px(g, '#fffaf0', x - 5, y - 3, 10, 7);
      this.px(g, '#d8cbb3', x - 4, y - 2, 2, 1); this.px(g, '#d8cbb3', x + 2, y - 2, 2, 1); this.px(g, '#d8cbb3', x - 2, y - 1, 4, 1);
      this.px(g, '#d9534f', x - 1, y, 2, 2);
    }

    drawPerson(g, p, seated) {
      const a = p.agent;
      const hair = a.hair || '#2b1d14', shirt = a.shirt || '#3b6fb6', skin = p.skin;
      const x = Math.round(p.pos.x) - 6, y = Math.round(p.pos.y) - 22;
      const dir = seated ? 'down' : p.dir;
      const moving = p.path.length > 0;
      const fr = moving ? Math.floor(p.walkT * 8) % 2 : 0;
      const bob = moving && fr ? -1 : 0;
      // bóng
      if (!seated) { g.fillStyle = 'rgba(0,0,0,0.18)'; g.fillRect(x + 1, y + 21, 10, 2); }
      const P = (c, cx, cy, w = 1, h = 1) => this.px(g, c, x + cx, y + cy + bob, w, h);
      // chân
      if (!seated) {
        const l = fr ? 1 : 0;
        P(C.pants, 3, 15, 3, 5 - l); P(C.pants, 6, 15, 3, 4 + l);
        P(C.shoe, 3, 20 - l, 3, 2); P(C.shoe, 6, 19 + l, 3, 2);
      }
      // thân
      P(shade(shirt, -35), 2, 8, 8, 1);
      P(shirt, 2, 9, 8, 7);
      P(shade(shirt, 25), 3, 9, 2, 1);
      // tay
      const typing = seated && p.state === 'working';
      const armL = typing ? (Math.floor(this.t * 10) % 2) : 0;
      P(shade(shirt, -20), 1, 9, 1, 5 - armL); P(shade(shirt, -20), 10, 9, 1, 5 - (1 - armL));
      if (!seated) { P(skin, 1, 14, 1, 1); P(skin, 10, 14, 1, 1); }
      // đầu
      P(skin, 3, 2, 6, 6);
      P(hair, 2, 0, 8, 3);
      if (dir === 'up') { P(hair, 2, 3, 8, 4); }
      else if (dir === 'left') { P(hair, 6, 3, 4, 2); P(hair, 9, 5, 1, 2); P('#2a1f18', 3, 4, 1, 1); P(shade(skin, -30), 3, 6, 2, 1); }
      else if (dir === 'right') { P(hair, 2, 3, 4, 2); P(hair, 2, 5, 1, 2); P('#2a1f18', 8, 4, 1, 1); P(shade(skin, -30), 7, 6, 2, 1); }
      else {
        P(hair, 2, 3, 1, 3); P(hair, 9, 3, 1, 3);
        const blink = (Math.floor(this.t * 10 + p.seat.x) % 37) === 0;
        if (!blink) { P('#2a1f18', 4, 4, 1, 1); P('#2a1f18', 7, 4, 1, 1); }
        P(shade(skin, -35), 5, 6, 2, 1);
      }
      P(skin, 5, 8, 2, 1);
      if (a.isManager) { P('#e8c15a', 5, 10, 2, 3); }
      if (typing) {
        // tay gõ phím (vẽ đè lên bàn)
        const kx = p.slot.x + 30, ky = p.slot.y + 4;
        this.px(g, skin, kx + 3 + armL * 2, ky, 2, 2); this.px(g, skin, kx + 11 - armL * 2, ky, 2, 2);
      }
    }

    drawStatus(g, p) {
      const seated = this.isSeated(p);
      const hx = Math.round(p.pos.x), hy = Math.round(p.pos.y) - (seated ? 25 : 27);
      if (p.state === 'working') {
        const k = Math.floor(this.t * 3) % 4;
        this.px(g, '#ffffff', hx - 7, hy - 6, 14, 6); this.px(g, '#2a2a33', hx - 7, hy - 6, 14, 1); this.px(g, '#2a2a33', hx - 7, hy - 1, 14, 1);
        this.px(g, '#2a2a33', hx - 8, hy - 5, 1, 4); this.px(g, '#2a2a33', hx + 7, hy - 5, 1, 4);
        for (let i = 0; i < 3; i++) this.px(g, i < k ? '#2a2a33' : '#c9c9d4', hx - 5 + i * 4, hy - 4, 2, 2);
      } else if (p.state === 'error') {
        this.px(g, '#e05d5d', hx - 2, hy - 9, 4, 9); this.px(g, '#ffffff', hx - 1, hy - 8, 2, 4); this.px(g, '#ffffff', hx - 1, hy - 3, 2, 2);
      }
    }
  }

  function shortSource(src, model) {
    const base = {
      sim: 'Giả lập', 'claude-cli': 'Claude', 'codex-cli': 'ChatGPT', 'antigravity-cli': 'Gemini', 'gemini-cli': 'Gemini CLI', ollama: 'Ollama',
      'anthropic-api': 'Claude API', 'openai-api': 'GPT API', 'gemini-api': 'Gemini API', simi: 'SIMI',
    }[src || 'sim'] || src;
    return model ? `${base} · ${prettyModel(model)}` : base;
  }

  // "cx/gpt-6-luna[1m]" → "GPT-6 Luna", "cc/claude-sonnet-5-5" → "Claude Sonnet 5.5" (tên đầy đủ để trong tooltip)
  function prettyModel(m) {
    const s = String(m || '').replace(/^[\w.-]+\//, '').replace(/\[\d+[mk]\]$/i, '');
    const t = s.split(/[-_\s]+/).filter(Boolean); const out = [];
    for (let i = 0; i < t.length; i++) {
      const w = t[i]; const last = out[out.length - 1];
      if (/^\d{1,2}$/.test(w) && last && /^\d{1,2}(\.\d{1,2})?$/.test(last)) { out[out.length - 1] = last + '.' + w; continue; }
      if (/^gpt$/i.test(w) && t[i + 1]) { out.push('GPT-' + t[++i]); continue; }
      out.push(/^(o\d|\d)/i.test(w) ? w : /^(ai|vl|oss|xl|tts|hd)$/i.test(w) ? w.toUpperCase() : w[0].toUpperCase() + w.slice(1));
    }
    return out.join(' ') || String(m || '');
  }

  window.Office2D = Office;
  window.shortSource = shortSource;
  window.prettyModel = prettyModel;
})();
