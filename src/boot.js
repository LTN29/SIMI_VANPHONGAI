// Khởi động app. Có bản code mới hơn đã tải về bằng "cập nhật nhanh" (src/hot.js) thì chạy bản đó,
// không thì chạy bản đi kèm bộ cài. Bản mới mở lỗi 2 lần liền → tự quay về bản đi kèm.
const { app } = require('electron');
const path = require('path');
const hot = require('./hot');

if (process.env.VPAI_USER_DATA) app.setPath('userData', process.env.VPAI_USER_DATA);

const getVersion = app.getVersion; // giữ hàm gốc để trả lại khi bản mới hỏng
const shell = { version: app.getVersion(), electron: parseInt(process.versions.electron, 10), boot: hot.BOOT, hot: '' };
global.vpShell = shell;
const root = path.join(app.getPath('userData'), 'app');
let pick = null;
try { pick = process.env.VPAI_NO_HOT ? null : hot.pickHot(root, shell); } catch { pick = null; }

if (pick) {
  hot.markBoot(root, pick.cur);
  shell.hot = pick.cur.version;
  global.vpBootOk = () => hot.markOk(root, pick.cur);
  try { app.getVersion = () => pick.cur.version; } catch { /* main.js tự đọc vpShell.hot */ }
  try {
    require(pick.main);
  } catch (e) { // bản mới hỏng ngay khi nạp → đánh dấu hỏng, chạy bản đi kèm luôn
    console.error('Bản cập nhật nhanh lỗi, dùng bản đi kèm:', e);
    try { pick.cur.tries = hot.MAX_TRIES; pick.cur.ok = false; hot.markBoot(root, pick.cur); } catch { /* bỏ qua */ }
    shell.hot = ''; delete global.vpBootOk;
    try { app.getVersion = getVersion; } catch { /* bỏ qua */ }
    require('./main');
  }
} else {
  try { hot.dropOld(root, shell.version); } catch { /* lần sau */ }
  require('./main');
}
