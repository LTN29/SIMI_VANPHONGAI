// Cập nhật nhanh (src/hot.js): đóng gói / giải nén code, chọn bản khi mở app, chống kẹt khi bản mới lỗi,
// và cả luồng thật của Updater: Gateway có gói .asar → tải → kiểm tra SHA-256 → giải nén → mở lại app (không cần quyền).
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('fs');
const os = require('os');
const path = require('path');
const http = require('http');
const crypto = require('crypto');
const asar = require('@electron/asar');
const hot = require('../src/hot');
const { Updater } = require('../src/updater');

const tmp = () => fs.mkdtempSync(path.join(os.tmpdir(), 'vpai-hot-'));
const SHELL = { version: '0.9.16', electron: 33, boot: hot.BOOT, hot: '' };

// gói .asar giống bản build: package.json + src/main.js + src/computer/… (+ file tách ngoài như asarUnpack)
async function makePkg(version, { unpack = false, mainCode = '// main' } = {}) {
  const d = tmp();
  fs.mkdirSync(path.join(d, 'src', 'computer'), { recursive: true });
  fs.mkdirSync(path.join(d, 'src', 'renderer'), { recursive: true });
  fs.writeFileSync(path.join(d, 'package.json'), JSON.stringify({ name: 'vanphong-ai', version, main: 'src/boot.js' }));
  fs.writeFileSync(path.join(d, 'src', 'main.js'), mainCode);
  fs.writeFileSync(path.join(d, 'src', 'renderer', 'index.html'), '<!doctype html><title>Văn Phòng AI</title>');
  fs.writeFileSync(path.join(d, 'src', 'computer', 'mcp.js'), 'console.log("mcp")');
  fs.writeFileSync(path.join(d, 'src', 'empty.txt'), '');
  const out = path.join(tmp(), hot.fileName(version, 33));
  if (unpack) await asar.createPackageWithOptions(d, out, { unpack: '**/computer/**' }); // như bản build: có file tách ngoài
  else await asar.createPackage(d, out); // gói cập nhật nhanh: mọi file trong gói
  return out;
}

// gói .asar làm tay với mục lục tùy ý (để thử tên file độc)
function rawAsar(header, data = Buffer.alloc(0)) {
  const json = Buffer.from(JSON.stringify(header));
  const pad = (4 - (json.length % 4)) % 4;
  const payload = 4 + json.length + pad;
  const hp = Buffer.alloc(4 + payload);
  hp.writeUInt32LE(payload, 0); hp.writeInt32LE(json.length, 4); json.copy(hp, 8);
  const sp = Buffer.alloc(8); sp.writeUInt32LE(4, 0); sp.writeUInt32LE(hp.length, 4);
  const f = path.join(tmp(), 'x.asar');
  fs.writeFileSync(f, Buffer.concat([sp, hp, data]));
  return f;
}

test('tên gói: phiên bản, Electron, giao kèo', () => {
  assert.deepEqual(hot.parseName('VanPhongAI-0.9.16-app-e33b1.asar'), { version: '0.9.16', electron: 33, boot: 1 });
  assert.equal(hot.parseName('VanPhongAI-0.9.16-Setup.exe'), null);
  assert.equal(hot.parseName('../VanPhongAI-0.9.16-app-e33b1.asar'), null);
  assert.equal(hot.fileName('1.2.3', 33, 1), 'VanPhongAI-1.2.3-app-e33b1.asar');
  assert.ok(hot.fits({ electron: 33, boot: 1 }, SHELL));
  assert.ok(!hot.fits({ electron: 34, boot: 1 }, SHELL), 'đổi Electron → phải cài cả bộ cài');
  assert.ok(!hot.fits({ electron: 33, boot: 2 }, SHELL), 'giao kèo mới hơn vỏ app');
  assert.ok(!hot.fits({ electron: 33, boot: 1 }, undefined), 'vỏ app cũ (chưa có boot.js)');
});

test('giải nén gói .asar đủ file, đúng nội dung', async () => {
  const f = await makePkg('0.9.17');
  const d = tmp();
  assert.equal(hot.extractAsar(f, d), 5);
  assert.equal(fs.readFileSync(path.join(d, 'src', 'computer', 'mcp.js'), 'utf8'), 'console.log("mcp")');
  assert.equal(JSON.parse(fs.readFileSync(path.join(d, 'package.json'), 'utf8')).version, '0.9.17');
  assert.equal(fs.readFileSync(path.join(d, 'src', 'empty.txt'), 'utf8'), '');
});

test('gói có tên file độc / file tách ngoài / hỏng → từ chối, không ghi ra ngoài', async () => {
  const d = tmp();
  for (const bad of ['..', 'a/b', 'a\\b', 'C:x']) {
    const f = rawAsar({ files: { [bad]: { size: 1, offset: '0' } } }, Buffer.from('x'));
    assert.throws(() => hot.extractAsar(f, path.join(d, 'out')), /tên file lạ/);
  }
  assert.throws(() => hot.extractAsar(rawAsar({ files: { l: { link: '/etc/passwd' } } }), d), /thiếu file/);
  const split = await makePkg('0.9.17', { unpack: true });
  assert.throws(() => hot.extractAsar(split, tmp()), /thiếu file/);
  const junk = path.join(tmp(), 'junk.asar'); fs.writeFileSync(junk, 'không phải asar');
  assert.throws(() => hot.extractAsar(junk, tmp()), /hỏng/);
  assert.ok(!fs.existsSync(path.join(path.dirname(d), 'x')));
});

test('cài → mở app chọn bản mới; mở lỗi 2 lần → về bản đi kèm; chạy tốt → giữ', async () => {
  const root = tmp();
  const f = await makePkg('0.9.17');
  hot.installHot(root, f, hot.parseName(path.basename(f)), 'a'.repeat(64));
  assert.ok(fs.existsSync(path.join(root, '0.9.17', 'src', 'main.js')));
  assert.ok(!fs.existsSync(path.join(root, '0.9.17.tmp')));

  let p = hot.pickHot(root, SHELL);
  assert.equal(p.cur.version, '0.9.17'); assert.equal(p.main, path.join(root, '0.9.17', 'src', 'main.js'));
  assert.equal(hot.pickHot(root, { ...SHELL, version: '0.9.17' }), null, 'vỏ đã mới bằng → dùng bản đi kèm');
  assert.equal(hot.pickHot(root, { ...SHELL, electron: 34 }), null, 'vỏ đổi Electron → bỏ qua');

  hot.markBoot(root, p.cur); hot.markBoot(root, hot.pickHot(root, SHELL).cur); // mở 2 lần, không lần nào hiện được cửa sổ
  assert.equal(hot.pickHot(root, SHELL), null);
  assert.ok(hot.isBad(root, '0.9.17'));

  hot.installHot(root, f, hot.parseName(path.basename(f)), 'a'.repeat(64)); // tải lại / bản khác → thử lại từ đầu
  p = hot.pickHot(root, SHELL); hot.markBoot(root, p.cur); hot.markOk(root, p.cur);
  hot.markBoot(root, hot.pickHot(root, SHELL).cur); hot.markBoot(root, hot.pickHot(root, SHELL).cur);
  assert.equal(hot.pickHot(root, SHELL).cur.version, '0.9.17', 'đã chạy tốt thì không quay về');

  hot.dropOld(root, '0.9.18'); // cài bộ cài 0.9.18 → dọn code cũ
  assert.ok(!fs.existsSync(root));
});

test('gói sai phiên bản → không cài, giữ bản đang dùng', async () => {
  const root = tmp();
  const good = await makePkg('0.9.17');
  hot.installHot(root, good, hot.parseName(path.basename(good)), 'a'.repeat(64));
  const wrong = await makePkg('0.9.99');
  assert.throws(() => hot.installHot(root, wrong, { version: '0.9.18', electron: 33, boot: 1 }, 'b'.repeat(64)), /không đúng phiên bản/);
  assert.equal(hot.readCurrent(root).version, '0.9.17');
  assert.ok(!fs.existsSync(path.join(root, '0.9.18')) && !fs.existsSync(path.join(root, '0.9.18.tmp')));
});

// Gateway giả: latest.json có cả bộ cài lẫn gói code
async function gateway(pkgFile, { electron = 33 } = {}) {
  const body = fs.readFileSync(pkgFile);
  const appName = hot.fileName('0.9.17', electron);
  const sha = crypto.createHash('sha256').update(body).digest('hex');
  const st = { gets: [] };
  const srv = http.createServer((req, res) => {
    st.gets.push(req.url);
    if (req.url === '/latest.json') {
      res.writeHead(200, { 'content-type': 'application/json' });
      return res.end(JSON.stringify({ version: '0.9.17', files: { app: { name: appName, size: body.length, sha256: sha }, 'win-setup': { name: 'VanPhongAI-0.9.17-Setup.exe', size: 9, sha256: 'c'.repeat(64) }, 'linux-deb': { name: 'VanPhongAI-0.9.17-linux-amd64.deb', size: 9, sha256: 'c'.repeat(64) }, 'mac-arm64': { name: 'VanPhongAI-0.9.17-mac-arm64.zip', size: 9, sha256: 'c'.repeat(64) }, 'mac-x64': { name: 'VanPhongAI-0.9.17-mac-x64.zip', size: 9, sha256: 'c'.repeat(64) }, 'linux-appimage': { name: 'VanPhongAI-0.9.17-linux-x86_64.AppImage', size: 9, sha256: 'c'.repeat(64) } } }));
    }
    if (req.url === '/' + appName) { res.writeHead(200, { 'content-length': body.length }); return res.end(body); }
    res.writeHead(404); res.end();
  });
  await new Promise((r) => srv.listen(0, '127.0.0.1', r));
  process.env.VPAI_UPDATE_URL = `http://127.0.0.1:${srv.address().port}`;
  return { st, close: () => srv.close() };
}

test('Updater: cùng Electron → cập nhật nhanh, không chạy bộ cài, mở lại app', async () => {
  const pkg = await makePkg('0.9.17');
  const gw = await gateway(pkg);
  const ud = tmp(); const root = path.join(ud, 'app');
  const calls = [];
  const app = { getVersion: () => '0.9.16', relaunch: (o) => calls.push(['relaunch', o]), exit: (c) => calls.push(['exit', c]) };
  try {
    const u = new Updater({ app, emit: () => {}, getGateway: () => '', dir: path.join(ud, 'updates'), shell: SHELL, hotRoot: root, autoDownload: () => false });
    const s = await u.check();
    assert.equal(s.status, 'available'); assert.equal(s.kind, 'app');
    assert.equal((await u.download()).status, 'ready');
    await u.install();
    await new Promise((r) => setTimeout(r, 500));
    assert.deepEqual(calls.map((c) => c[0]), ['relaunch', 'exit']);
    assert.equal(hot.readCurrent(root).version, '0.9.17');
    assert.ok(fs.existsSync(path.join(root, '0.9.17', 'src', 'renderer', 'index.html')));
    assert.ok(!gw.st.gets.some((g) => /Setup|\.deb|\.zip|AppImage/.test(g)), 'không tải bộ cài');
    assert.deepEqual(fs.readdirSync(path.join(ud, 'updates')), [], 'xóa file tải sau khi cài');
    assert.equal(hot.pickHot(root, SHELL).cur.version, '0.9.17');
  } finally { gw.close(); }
});

test('Updater: khác Electron / vỏ cũ / bản từng lỗi → dùng bộ cài như trước', async () => {
  const pkg = await makePkg('0.9.17');
  const gw = await gateway(pkg, { electron: 34 });
  const app = { getVersion: () => '0.9.16' };
  try {
    const u = new Updater({ app, emit: () => {}, getGateway: () => '', dir: tmp(), shell: SHELL, hotRoot: tmp(), autoDownload: () => false });
    assert.notEqual((await u.check()).kind, 'app');
    const old = new Updater({ app, emit: () => {}, getGateway: () => '', dir: tmp(), shell: undefined, hotRoot: tmp(), autoDownload: () => false });
    assert.notEqual((await old.check()).kind, 'app', 'vỏ app chưa có boot.js');
  } finally { gw.close(); }
  const gw2 = await gateway(pkg);
  try {
    const root = tmp();
    hot.installHot(root, pkg, hot.parseName(path.basename(pkg)), 'a'.repeat(64));
    for (let i = 0; i < hot.MAX_TRIES; i++) hot.markBoot(root, hot.readCurrent(root));
    const u = new Updater({ app, emit: () => {}, getGateway: () => '', dir: tmp(), shell: SHELL, hotRoot: root, autoDownload: () => false });
    assert.notEqual((await u.check()).kind, 'app', 'bản 0.9.17 từng mở lỗi → không cập nhật nhanh lại');
  } finally { gw2.close(); }
});

test('Tự cập nhật không cần bấm: tải → cài sẵn → chờ máy rảnh + không có việc → tự mở lại', async () => {
  const pkg = await makePkg('0.9.17');
  const gw = await gateway(pkg);
  const ud = tmp(); const root = path.join(ud, 'app');
  const calls = []; const states = [];
  const env = { busy: true, idle: false };
  const app = { getVersion: () => '0.9.16', relaunch: () => calls.push('relaunch'), exit: () => calls.push('exit') };
  try {
    const u = new Updater({
      app, emit: (e) => states.push(e.state.status), getGateway: () => '', dir: path.join(ud, 'updates'), shell: SHELL, hotRoot: root,
      autoApply: () => true, isBusy: () => env.busy, idle: () => env.idle, restartEveryMs: 30,
    });
    await u.check(); // autoDownload mặc định bật → tự tải, tự cài sẵn
    const end = Date.now() + 5000;
    while (u.state.status !== 'staged' && Date.now() < end) await new Promise((r) => setTimeout(r, 20));
    assert.equal(u.state.status, 'staged');
    assert.equal(hot.readCurrent(root).version, '0.9.17', 'đã cài sẵn – lần mở app sau dùng bản mới');
    assert.equal(hot.pickHot(root, SHELL).cur.version, '0.9.17');
    assert.deepEqual(calls, [], 'chưa tự mở lại khi đang có việc / người dùng đang dùng máy');
    env.idle = true; await new Promise((r) => setTimeout(r, 120));
    assert.deepEqual(calls, [], 'máy rảnh nhưng còn việc đang chạy → chờ');
    env.busy = false; await new Promise((r) => setTimeout(r, 600));
    assert.deepEqual(calls, ['relaunch', 'exit']);
    assert.ok(!states.includes('ready') || states.indexOf('staged') > states.indexOf('ready'));
    u.stop();
  } finally { gw.close(); }
});

test('Tắt tự cập nhật (autoApply false) → tải sẵn rồi chờ bấm như trước', async () => {
  const pkg = await makePkg('0.9.17');
  const gw = await gateway(pkg);
  const ud = tmp();
  try {
    const u = new Updater({ app: { getVersion: () => '0.9.16' }, emit: () => {}, getGateway: () => '', dir: path.join(ud, 'updates'), shell: SHELL, hotRoot: path.join(ud, 'app'), autoApply: () => false });
    await u.check(); await u.download(); await new Promise((r) => setTimeout(r, 100));
    assert.equal(u.state.status, 'ready');
    assert.equal(hot.readCurrent(path.join(ud, 'app')), null);
  } finally { gw.close(); }
});
