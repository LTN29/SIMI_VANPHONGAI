// Gemini CLI với tài khoản Google cá nhân (Google ngừng hỗ trợ từ 18/6/2026) và Antigravity đã đăng nhập.
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('fs');
const os = require('os');
const path = require('path');

const skip = process.platform === 'win32' ? 'giả lập CLI bằng script sh' : false;
const home = fs.mkdtempSync(path.join(os.tmpdir(), 'vp-acc-'));
process.env.HOME = home; process.env.USERPROFILE = home;
delete process.env.GEMINI_API_KEY; delete process.env.GOOGLE_API_KEY; delete process.env.GOOGLE_CLOUD_PROJECT;
const bin = path.join(home, 'bin'); fs.mkdirSync(bin);
const script = (name, body) => { const p = path.join(bin, name); fs.writeFileSync(p, `#!/bin/sh\n${body}\n`, { mode: 0o755 }); return p; };
const gemini = script('gemini', 'if [ "$1" = "--version" ]; then echo 0.66.0; exit 0; fi\necho "Ripgrep is not available. An unexpected critical error occurred:IneligibleTierError: This client is no longer supported for Gemini Code Assist for individuals." >&2\necho "    at throwIneligibleOrProjectIdError (file:///x/chunk.js:1:1)" >&2\nexit 1');
const agyOk = script('agy', 'if [ "$1" = "--version" ]; then echo 1.4.12; exit 0; fi\nif [ "$1" = "models" ]; then printf "gemini-3.8-flash-high   Gemini 3.8 Flash (High)\\nclaude-sonnet-4-6  Claude Sonnet 4.6\\n"; exit 0; fi\nexit 0');
const agyOut = script('agy-out', 'if [ "$1" = "--version" ]; then echo 1.4.12; exit 0; fi\necho "Please sign in with Google to continue"; exit 1');

const { runProcess } = require('../src/sys');
const accounts = require('../src/accounts');
const cfg = (extra = {}) => ({ cli: { gemini: { cmd: gemini }, antigravity: { cmd: agyOk }, claude: { cmd: 'khong-co-claude' }, codex: { cmd: 'khong-co-codex' } }, ollamaUrl: 'http://127.0.0.1:9', ...extra });

test('lỗi IneligibleTierError của Gemini CLI → câu tiếng Việt dễ hiểu, không có stack trace', { skip }, async () => {
  await assert.rejects(runProcess(gemini, ['-p', 'hi'], '', { timeoutMs: 10000 }), (e) => /Google đã ngừng cho tài khoản Google cá nhân/.test(e.message) && !/at throw/.test(e.message));
});

test('Gemini CLI đăng nhập tài khoản Google cá nhân → không hiện "Đã kết nối"', { skip }, async () => {
  fs.mkdirSync(path.join(home, '.gemini'), { recursive: true });
  fs.writeFileSync(path.join(home, '.gemini', 'oauth_creds.json'), '{}');
  fs.writeFileSync(path.join(home, '.gemini', 'settings.json'), JSON.stringify({ security: { auth: { selectedType: 'oauth-personal' } } }));
  const r = await accounts.checkAll(cfg(), {});
  assert.equal(r.gemini.loggedIn, false); assert.equal(r.gemini.ineligible, true); assert.match(r.gemini.note, /Antigravity/);
  // có dự án Google Cloud (Gemini Code Assist doanh nghiệp) thì vẫn dùng được
  process.env.GOOGLE_CLOUD_PROJECT = 'simi-prod';
  assert.equal((await accounts.checkAll(cfg(), {})).gemini.loggedIn, true);
  delete process.env.GOOGLE_CLOUD_PROJECT;
  // lần Thử trước báo lỗi tài khoản cá nhân (settings kiểu cũ không ghi loại đăng nhập) → vẫn chặn
  fs.writeFileSync(path.join(home, '.gemini', 'settings.json'), '{}');
  assert.equal((await accounts.checkAll(cfg({ verified: { geminiPersonal: 1 } }), {})).gemini.ineligible, true);
});

test('Antigravity: agy liệt kê được model → đã đăng nhập; chưa đăng nhập → báo chưa; đã Thử được → nhớ', { skip }, async () => {
  const a = (await accounts.checkAll(cfg(), {})).antigravity;
  assert.equal(a.loggedIn, true); assert.equal(a.verify, true);
  const b = (await accounts.checkAll(cfg({ cli: { ...cfg().cli, antigravity: { cmd: agyOut } } }), {})).antigravity;
  assert.equal(b.loggedIn, false);
  const c = (await accounts.checkAll(cfg({ cli: { ...cfg().cli, antigravity: { cmd: agyOut } }, verified: { antigravity: Date.now() } }), {})).antigravity;
  assert.equal(c.loggedIn, true);
});
