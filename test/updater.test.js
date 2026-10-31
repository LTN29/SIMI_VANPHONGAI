// Bộ tự cập nhật: tự tải sẵn, tải 1 lần, giữ trạng thái khi rớt mạng, "Cập nhật ngay" → cài (không cài thật)
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('fs');
const os = require('os');
const path = require('path');
const http = require('http');
const crypto = require('crypto');
const { Updater, newer, assetKey } = require('../src/updater');

const body = crypto.randomBytes(64 * 1024);
const kind = assetKey();
const name = 'VanPhongAI-9.9.9-test.bin';

async function server() {
  const st = { up: true, gets: 0, version: '9.9.9' };
  const srv = http.createServer((req, res) => {
    if (!st.up) { req.socket.destroy(); return; }
    if (req.url === '/latest.json') { res.writeHead(200, { 'content-type': 'application/json' }); return res.end(JSON.stringify({ version: st.version, notes: '- Mới', files: { [kind]: { name, size: body.length, sha256: crypto.createHash('sha256').update(body).digest('hex') } } })); }
    if (req.url === '/' + name) { st.gets++; res.writeHead(200, { 'content-length': body.length }); return res.end(body); }
    res.writeHead(404); res.end();
  });
  await new Promise((r) => srv.listen(0, '127.0.0.1', r));
  return { st, url: `http://127.0.0.1:${srv.address().port}`, close: () => srv.close() };
}

function make(url, dir, opts = {}) {
  process.env.VPAI_UPDATE_URL = url;
  const events = [];
  const u = new Updater({ app: { getVersion: () => '0.9.6' }, getGateway: () => '', emit: (e) => events.push(e.state.status), dir, ...opts });
  u.installed = 0;
  u.install = async function () { this.installed++; return this._set({ status: 'installing' }); }; // không cài thật
  return { u, events };
}
const until = async (fn, ms = 5000) => { const end = Date.now() + ms; while (!fn()) { if (Date.now() > end) throw new Error('quá thời gian'); await new Promise((r) => setTimeout(r, 20)); } };
const tmp = () => fs.mkdtempSync(path.join(os.tmpdir(), 'vpai-upd-'));

test('so sánh phiên bản', () => {
  assert.ok(newer('0.10.0', '0.9.9')); assert.ok(!newer('0.9.6', '0.9.6')); assert.ok(newer('0.9.7', '0.9.6'));
});

test('có bản mới → tự tải sẵn, kiểm tra mã, chờ người dùng bấm', async () => {
  const s = await server(); const dir = tmp();
  try {
    const { u, events } = make(s.url, dir);
    assert.equal((await u.check()).status, 'available');
    await until(() => u.state.status === 'ready');
    assert.ok(fs.readFileSync(path.join(dir, name)).equals(body));
    assert.equal(u.installed, 0, 'không tự cài khi chưa bấm');
    assert.ok(events.includes('downloading'));
    await u.updateNow();
    assert.equal(u.installed, 1, '"Cập nhật ngay" cài luôn bản đã tải');
  } finally { s.close(); }
});

test('tắt tự tải: bấm "Cập nhật ngay" thì tải xong tự cài', async () => {
  const s = await server(); const dir = tmp();
  try {
    const { u } = make(s.url, dir, { autoDownload: () => false });
    await u.check();
    await new Promise((r) => setTimeout(r, 200));
    assert.equal(u.state.status, 'available');
    await u.updateNow();
    await until(() => u.installed === 1);
  } finally { s.close(); }
});

test('tự tải và bấm cùng lúc chỉ tải 1 lần', async () => {
  const s = await server(); const dir = tmp();
  try {
    const { u } = make(s.url, dir, { autoDownload: () => false });
    await u.check();
    await Promise.all([u.download(), u.download(), u.updateNow()]);
    await until(() => u.installed === 1);
    assert.equal(s.st.gets, 1);
  } finally { s.close(); }
});

test('rớt mạng khi đang có bản chờ cài → giữ nguyên, có bản mới hơn → tải bản đó', async () => {
  const s = await server(); const dir = tmp();
  try {
    const { u } = make(s.url, dir);
    await u.check(); await until(() => u.state.status === 'ready');
    s.st.up = false;
    assert.equal((await u.check()).status, 'ready');
    s.st.up = true; s.st.version = '9.9.10';
    await u.check();
    assert.equal(u.state.version, '9.9.10');
    await until(() => u.state.status === 'ready');
  } finally { s.close(); }
});

test('mở lại app: file đã tải còn nguyên thì dùng luôn, không tải lại', async () => {
  const s = await server(); const dir = tmp();
  try {
    const a = make(s.url, dir).u; await a.check(); await until(() => a.state.status === 'ready');
    const b = make(s.url, dir).u; await b.check(); await until(() => b.state.status === 'ready');
    assert.equal(s.st.gets, 1);
  } finally { s.close(); }
});

test('bản portable cũ (Windows) → cập nhật bằng bản cài Setup khi không còn bản portable', async () => {
  const plat = Object.getOwnPropertyDescriptor(process, 'platform');
  Object.defineProperty(process, 'platform', { value: 'win32' });
  process.env.PORTABLE_EXECUTABLE_FILE = 'C:\\x\\VanPhongAI.exe';
  const srv = http.createServer((req, res) => {
    if (req.url === '/latest.json') { res.writeHead(200, { 'content-type': 'application/json' }); return res.end(JSON.stringify({ version: '9.9.9', files: { 'win-setup': { name: 'VanPhongAI-9.9.9-Setup.exe', size: 3, sha256: 'a'.repeat(64) } } })); }
    res.writeHead(404); res.end();
  });
  await new Promise((r) => srv.listen(0, '127.0.0.1', r));
  try {
    const { u } = make(`http://127.0.0.1:${srv.address().port}`, tmp(), { autoDownload: () => false });
    assert.equal(u.state.kind, 'win-portable');
    const st = await u.check();
    assert.equal(st.status, 'available');
    assert.equal(st.kind, 'win-setup', 'dùng bản cài thay cho bản portable');
    assert.equal(st.file.name, 'VanPhongAI-9.9.9-Setup.exe');
  } finally {
    srv.close(); delete process.env.PORTABLE_EXECUTABLE_FILE; Object.defineProperty(process, 'platform', plat);
  }
});
