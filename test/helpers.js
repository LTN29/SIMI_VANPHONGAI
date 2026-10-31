// Dùng chung cho test giao diện: mở app Electron với thư mục dữ liệu tạm, gom lỗi console, chụp màn hình.
const fs = require('fs');
const os = require('os');
const path = require('path');
const { _electron: electron } = require('playwright');

const ROOT = path.join(__dirname, '..');
const SHOTS = process.env.VPAI_SHOTS || path.join(os.tmpdir(), 'vanphong-shots');

async function launch({ env = {}, config = {}, size = [1440, 900], prefix = 'ui' } = {}) {
  const userData = fs.mkdtempSync(path.join(os.tmpdir(), 'vpai-ud-'));
  const outputDir = fs.mkdtempSync(path.join(os.tmpdir(), 'vpai-out-'));
  fs.writeFileSync(path.join(userData, 'config.json'), JSON.stringify({ outputDir, ...config }));
  fs.mkdirSync(SHOTS, { recursive: true });
  const app = await electron.launch({
    args: ['.', '--no-sandbox'], cwd: ROOT, executablePath: require('electron'),
    env: { ...process.env, VPAI_USER_DATA: userData, ...env },
  });
  const win = await app.firstWindow();
  const errors = [];
  win.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });
  win.on('pageerror', (e) => errors.push('PAGEERROR ' + e.message));
  await resize(app, size);
  const shot = (name) => win.screenshot({ path: path.join(SHOTS, `${prefix}-${name}.png`) });
  return { app, win, errors, shot, userData, outputDir };
}

const resize = (app, [w, h]) => app.evaluate(({ BrowserWindow }, s) => BrowserWindow.getAllWindows()[0].setSize(s[0], s[1]), [w, h]);

function check(cond, msg) { if (!cond) throw new Error('KIỂM TRA THẤT BẠI: ' + msg); console.log('  ✓ ' + msg); }

async function finish(app, errors) {
  await app.close();
  check(errors.length === 0, 'không có lỗi JavaScript' + (errors.length ? ':\n' + errors.join('\n') : ''));
  console.log(`Ảnh chụp: ${SHOTS}`);
}

function run(main) {
  main().catch((e) => { console.error('FAIL', e); process.exit(1); });
}

module.exports = { launch, resize, check, finish, run, ROOT, SHOTS };
