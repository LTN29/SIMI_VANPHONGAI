// 🎨 Xuất thiết kế (design_render): bước công cụ hiện tên dễ hiểu + thẻ ảnh kết quả ngay trong khung chat.
const test = require('node:test');
const assert = require('node:assert');
const { stepFromItem } = require('../src/chat');

test('bước design_render hiện "🎨 Xuất thiết kế <tên file>" và gắn file ảnh khi xong', () => {
  const it = { type: 'mcpToolCall', server: 'vp_browser', tool: 'design_render', status: 'completed', arguments: { path: 'C:\\Users\\A\\Chat\\poster-11-11.png', html: '<h1>Sale</h1>' } };
  const s = stepFromItem(it);
  assert.match(s.title, /Trình duyệt SIMI · 🎨 Xuất thiết kế poster-11-11\.png/);
  assert.deepEqual(s.files, ['C:\\Users\\A\\Chat\\poster-11-11.png']);
  assert.equal(stepFromItem({ ...it, status: 'inProgress' }).files, undefined, 'đang chạy: chưa gắn file');
  assert.equal(stepFromItem({ ...it, status: 'failed', error: { message: 'x' } }).files, undefined, 'lỗi: không gắn file');
  assert.equal(stepFromItem({ ...it, tool: 'browser_snapshot', arguments: {} }).files, undefined);
});

test('bước document_create hiện "📄 Tạo file <tên>" (không ghi Trình duyệt) và gắn đúng file thật', () => {
  const it = { type: 'mcpToolCall', server: 'vp_browser', tool: 'document_create', status: 'completed', arguments: { path: 'C:\\Du an\\Báo cáo Q3.docx', content: '# A' },
    result: { content: [{ type: 'text', text: 'Đã tạo DOCX: C:\\Du an\\Báo cáo Q3.docx (12 KB · 1 tiêu đề, 0 bảng). Gửi đường dẫn này…' }] } };
  const s = stepFromItem(it);
  assert.equal(s.title, '📄 Tạo file Báo cáo Q3.docx');
  assert.deepEqual(s.files, ['C:\\Du an\\Báo cáo Q3.docx']);
  // PDF không in được → app lưu .html: lấy đúng đường dẫn thật trong kết quả
  const pdf = { ...it, arguments: { path: 'C:\\x\\a.pdf' }, result: { content: [{ type: 'text', text: 'Đã tạo HTML: C:\\x\\a.html (3 KB · 0 tiêu đề, 0 bảng).' }] } };
  assert.deepEqual(stepFromItem(pdf).files, ['C:\\x\\a.html']);
});
