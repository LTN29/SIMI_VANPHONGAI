// 🎨 Xuất thiết kế (design_render): bước công cụ hiện tên dễ hiểu + thẻ ảnh kết quả ngay trong khung chat.
const test = require('node:test');
const assert = require('node:assert');
const { stepFromItem } = require('../src/chat');

test('bước design_render hiện "🎨 Xuất thiết kế <tên file>" và gắn file ảnh khi xong', () => {
  const it = { type: 'mcpToolCall', server: 'vp_browser', tool: 'design_render', status: 'completed', arguments: { path: 'C:\\Users\\A\\Chat\\poster-11-11.png', html: '<h1>Sale</h1>' } };
  const s = stepFromItem(it);
  assert.match(s.title, /Trình duyệt · 🎨 Xuất thiết kế poster-11-11\.png/);
  assert.deepEqual(s.files, ['C:\\Users\\A\\Chat\\poster-11-11.png']);
  assert.equal(stepFromItem({ ...it, status: 'inProgress' }).files, undefined, 'đang chạy: chưa gắn file');
  assert.equal(stepFromItem({ ...it, status: 'failed', error: { message: 'x' } }).files, undefined, 'lỗi: không gắn file');
  assert.equal(stepFromItem({ ...it, tool: 'browser_snapshot', arguments: {} }).files, undefined);
});
