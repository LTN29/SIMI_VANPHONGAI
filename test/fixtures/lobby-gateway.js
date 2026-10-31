// Gateway thật (repo ltn-memory-gateway) chạy riêng cho test Sảnh + "đồng nghiệp" giả lập nối thẳng vào Gateway.
const fs = require('fs');
const os = require('os');
const path = require('path');
const zlib = require('zlib');
const crypto = require('crypto');
const { spawn } = require('child_process');
const { ROOT } = require('../helpers');

const GW = process.env.GATEWAY_DIR || path.join(ROOT, '..', 'ltn-memory-gateway', 'ltn-memory-gateway');
const hash = (k) => crypto.createHash('sha256').update(k).digest('hex');

async function startGatewayServer({ users, env = {} }) {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'vpai-gw-'));
  fs.writeFileSync(path.join(dir, 'teams.json'), JSON.stringify({ teams: ['SALES', 'IT', 'MARKETING'].map((c) => ({ code: c, displayName: c === 'IT' ? 'IT' : c[0] + c.slice(1).toLowerCase(), keyHash: hash('unused-' + c), enabled: true, memoryFile: c + '.md' })) }));
  fs.writeFileSync(path.join(dir, 'users.json'), JSON.stringify({ version: 1, users: Object.fromEntries(Object.entries(users).map(([id, u]) => [id, { enabled: true, ...u, keyHash: hash(u.key), key: undefined }])) }));
  const port = 20900 + Math.floor(Math.random() * 500);
  const child = spawn(process.execPath, ['src/server.mjs'], {
    cwd: GW, stdio: ['ignore', 'pipe', 'pipe'],
    env: { ...process.env, PORT: String(port), HOST: '127.0.0.1', TEAMS_FILE: path.join(dir, 'teams.json'), LTN_USERS_CONFIG_FILE: path.join(dir, 'users.json'), MEMORY_DIR: path.join(dir, 'memory'), LOBBY_DATA_DIR: path.join(dir, 'lobby'), UPSTREAM_BASE_URL: 'http://127.0.0.1:9', VANPHONG_RELEASE_DIR: path.join(dir, 'releases'), LOBBY_CINEMA_LOOKUP: 'false', LOBBY_ROSTER_MS: '400', ...env },
  });
  const logs = []; child.stdout.on('data', (d) => logs.push(String(d))); child.stderr.on('data', (d) => logs.push(String(d)));
  await new Promise((resolve, reject) => {
    const t = setTimeout(() => reject(new Error('Gateway không khởi động')), 15000);
    child.stdout.on('data', (d) => { if (/server_started/.test(d)) { clearTimeout(t); resolve(); } });
    child.on('exit', (c) => reject(new Error('Gateway thoát: ' + c)));
  });
  return { url: `http://127.0.0.1:${port}/v1`, child, dir, logs };
}

function colleague(base, key) {
  const events = []; const ctrl = new AbortController();
  const h = { authorization: `Bearer ${key}` };
  fetch(`${base}/lobby/stream`, { headers: h, signal: ctrl.signal }).then(async (res) => {
    const reader = res.body.getReader(); const dec = new TextDecoder(); let buf = '';
    try {
      for (;;) {
        const { value, done } = await reader.read(); if (done) break;
        buf += dec.decode(value, { stream: true }); let i;
        while ((i = buf.indexOf('\n\n')) >= 0) {
          const b = buf.slice(0, i); buf = buf.slice(i + 2);
          const ev = /^event: (.+)$/m.exec(b); const data = /^data: (.+)$/m.exec(b);
          if (ev && data) events.push({ event: ev[1], data: JSON.parse(data[1]) });
        }
      }
    } catch { /* đóng */ }
  }).catch(() => {});
  const post = (p, body) => fetch(`${base}/lobby/${p}`, { method: 'POST', headers: { ...h, 'content-type': 'application/json' }, body: JSON.stringify(body) });
  const get = (p) => fetch(`${base}/lobby/${p}`, { headers: h });
  const waitFor = async (event, pred = () => true, ms = 10000) => {
    const t0 = Date.now();
    while (Date.now() - t0 < ms) { const e = events.find((x) => x.event === event && pred(x.data)); if (e) return e.data; await new Promise((r) => setTimeout(r, 80)); }
    throw new Error(`Đồng nghiệp không nhận được ${event}`);
  };
  return { events, post, get, waitFor, close: () => ctrl.abort() };
}

// ảnh PNG thật (dải màu) để thử gửi ảnh
function makePng(w, h) {
  const crcTable = Array.from({ length: 256 }, (_, n) => { let c = n; for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1; return c >>> 0; });
  const crc = (buf) => { let c = 0xffffffff; for (const b of buf) c = crcTable[(c ^ b) & 0xff] ^ (c >>> 8); return (c ^ 0xffffffff) >>> 0; };
  const chunk = (type, data) => { const len = Buffer.alloc(4); len.writeUInt32BE(data.length); const td = Buffer.concat([Buffer.from(type), data]); const c = Buffer.alloc(4); c.writeUInt32BE(crc(td)); return Buffer.concat([len, td, c]); };
  const raw = Buffer.alloc((w * 3 + 1) * h);
  for (let y = 0; y < h; y++) {
    raw[y * (w * 3 + 1)] = 0;
    for (let x = 0; x < w; x++) { const o = y * (w * 3 + 1) + 1 + x * 3; raw[o] = (x * 255 / w) | 0; raw[o + 1] = (y * 255 / h) | 0; raw[o + 2] = 160; }
  }
  const ihdr = Buffer.alloc(13); ihdr.writeUInt32BE(w, 0); ihdr.writeUInt32BE(h, 4); ihdr[8] = 8; ihdr[9] = 2;
  return Buffer.concat([Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]), chunk('IHDR', ihdr), chunk('IDAT', zlib.deflateSync(raw)), chunk('IEND', Buffer.alloc(0))]);
}

module.exports = { GW, startGatewayServer, colleague, makePng, hash };
