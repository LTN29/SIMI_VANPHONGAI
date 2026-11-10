// Không dùng SIMI (đã gỡ) mà đăng nhập nhiều tài khoản AI: ô chọn model của tab Chat hiện model của MỌI tài khoản
// (ChatGPT, Claude…) theo nhóm, không còn danh sách SIMI cũ sót trên máy; chat bằng model Claude chạy đúng Claude Code.
const fs = require('fs');
const os = require('os');
const path = require('path');
const { launch, check, finish, run } = require('./helpers');

run(async () => {
  if (process.platform === 'win32') { console.log('BỎ QUA: giả lập codex bằng script sh'); return; }
  const codexHome = fs.mkdtempSync(path.join(os.tmpdir(), 'vp-gpt-home-'));
  // dấu vết SIMI đã gỡ: catalog model cũ còn, config không còn provider SIMI
  fs.writeFileSync(path.join(codexHome, 'ltn-model-catalog.json'), JSON.stringify({ models: [{ slug: 'cx/gpt-6.1-sol', display_name: 'GPT 6.1 Sol' }] }));
  fs.writeFileSync(path.join(codexHome, 'config.toml'), `model_catalog_json = ${JSON.stringify(path.join(codexHome, 'ltn-model-catalog.json'))}\n`);
  const bin = fs.mkdtempSync(path.join(os.tmpdir(), 'vp-gpt-bin-'));
  const codex = path.join(bin, 'codex');
  fs.writeFileSync(codex, `#!/bin/sh
case "$1" in
  --version) echo "codex-cli 0.145.0" ;;
  login) echo "Logged in using ChatGPT" ;;
  debug) echo '{"models":[{"slug":"gpt-5.6-sol","display_name":"GPT-5.6-Sol","priority":1},{"slug":"gpt-5.6-terra","display_name":"GPT-5.6-Terra","priority":2},{"slug":"gpt-5.6-luna","display_name":"GPT-5.6-Luna","priority":3}]}' ;;
  *) exit 1 ;;
esac
`, { mode: 0o755 });
  const claude = path.join(bin, 'claude');
  fs.writeFileSync(claude, `#!/bin/sh
case "$1" in
  --version) echo "2.1.316 (Claude Code)" ;;
  auth) echo '{"loggedIn":true,"authMethod":"claude.ai","email":"phu@simigo.vn"}' ;;
  -p) cat > "$0.prompt"; echo "Chào bạn, mình là Claude (model $5)." ;;
  *) exit 1 ;;
esac
`, { mode: 0o755 });
  const { app, win, errors, shot } = await launch({
    prefix: 'chat-gpt',
    config: { cli: { codex: { cmd: codex }, claude: { cmd: claude }, antigravity: { cmd: 'khong-co-agy' }, gemini: { cmd: 'khong-co-gemini' } }, chatEngine: 'cli', ollamaUrl: 'http://127.0.0.1:9' },
    env: { CODEX_HOME: codexHome, LTN_TEAM_API_KEY: '' },
  });
  await win.waitForSelector('.welcome', { timeout: 20000 });
  await win.click('.sheet footer .linkbtn');
  await win.evaluate(() => localStorage.setItem('vp.chatPrefs', JSON.stringify({ model: 'cx/gpt-6.1-sol' })));
  await win.click('.viewtabs button[data-v="chat"]');
  await win.waitForFunction(() => [...document.querySelectorAll('#chModel option')].some((o) => o.value === 'claude-cli::opus') && [...document.querySelectorAll('#chModel option')].some((o) => o.value === 'codex-cli::gpt-5.6-sol'), null, { timeout: 40000 });
  const opts = await win.evaluate(() => [...document.querySelectorAll('#chModel option')].map((o) => o.value));
  const groups = await win.evaluate(() => [...document.querySelectorAll('#chModel optgroup')].map((g) => g.label));
  check(['codex-cli::gpt-5.6-sol', 'codex-cli::gpt-5.6-terra', 'codex-cli::gpt-5.6-luna'].every((v) => opts.includes(v)), 'có model của tài khoản ChatGPT');
  check(['claude-cli::opus', 'claude-cli::sonnet', 'claude-cli::haiku'].every((v) => opts.includes(v)), 'có model của tài khoản Claude');
  check(groups.join() === 'ChatGPT,Claude', 'model xếp theo nhóm tài khoản (' + groups.join(', ') + ')');
  check(!opts.some((v) => /cx\/gpt-6\.1-sol/.test(v)), 'không còn model SIMI cũ sót trên máy');
  check((await win.inputValue('#chModel')) === '', 'model SIMI đang chọn → tự về Mặc định');
  check(/Tài khoản riêng/.test(await win.textContent('#chStatus')), 'ô trạng thái ghi đang dùng tài khoản riêng');
  // chat bằng Claude: chạy Claude Code của tài khoản, nhận đúng câu trả lời
  await win.selectOption('#chModel', 'claude-cli::sonnet');
  await win.fill('#chInput', 'Xin chào, bạn là ai?');
  await win.press('#chInput', 'Enter');
  await win.waitForFunction(() => /mình là Claude/.test((document.querySelector('#chMsgs') || {}).innerText || ''), null, { timeout: 30000 });
  check(/model sonnet/.test(await win.textContent('#chMsgs')), 'chat bằng model Claude → Claude Code trả lời (đúng model sonnet)');
  check(fs.readFileSync(claude + '.prompt', 'utf8').includes('Xin chào, bạn là ai?'), 'tin nhắn gửi tới Claude Code');
  await shot('01');
  await finish(app, errors);
});
