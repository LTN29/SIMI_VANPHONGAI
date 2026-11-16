// Câu hỏi đơn giản → ⚡ trả lời ngay (1 lần gọi model); chỉ việc thật sự cần công cụ mới đi Codex nhiều bước.
// (model ở đường nhanh vẫn tự báo [[CAN_CONG_CU]] nếu lỡ cần công cụ → chuyển Codex, nên nghiêng về đường nhanh là an toàn)
const test = require('node:test');
const assert = require('node:assert/strict');
const { fastEligible } = require('../src/chat');

const thread = (prevSteps = false) => ({ origin: '', messages: [
  { role: 'user', text: 'Đọc giúp file báo giá' },
  { role: 'assistant', status: 'done', blocks: prevSteps ? [{ kind: 'step', title: 'Đọc file' }, { kind: 'text', text: 'Đây là…' }] : [{ kind: 'text', text: 'Đây là…' }] },
  { role: 'user', text: '…' }, { role: 'assistant', status: 'running', blocks: [] },
] });
const fast = (text, t = thread()) => fastEligible(t, text, [], []);

test('nhờ viết lại đoạn mô tả sản phẩm có chữ "điều khiển", "màn hình", "lưu lại" → ⚡', () => {
  assert.ok(fast('Hai nút bấm bố trí ngay trên tay cầm, thuận tiện điều khiển khi sử dụng. Dễ làm quen ngay từ lần đầu.\nThêm vào câu này sao cho hợp lý cho tôi'));
  assert.ok(fast('Viết caption: màn hình 6.7 inch sắc nét, lưu lại mọi khoảnh khắc, phiên bản mới nhất'));
  // lượt trước có dùng công cụ, nhưng tin mới là nhờ viết (nhiều dòng) → vẫn ⚡
  assert.ok(fast('Pin dùng 60 phút, sạc nhanh.\nViết lại cho mượt', thread(true)));
  assert.ok(fast('Cảm ơn em, giải thích thêm vì sao chọn giọng văn này?', thread(true)));
});

test('việc cần công cụ → Codex', () => {
  assert.ok(!fast('Mở trang shopee xem giá giúp tôi'));
  assert.ok(!fast('Đọc nội dung này rồi tóm tắt https://simi.vn/san-pham'));
  assert.ok(!fast('Xuất ra file excel danh sách trên'));
  assert.ok(!fast('Chụp màn hình rồi xem lỗi gì'));
  assert.ok(!fast('Giá vàng mới nhất hôm nay'));
  assert.ok(!fast('Nội dung bài:\nAbc def\nLưu lại vào file word giúp tôi'));
  // lượt trước vừa làm bằng công cụ, tin mới bảo làm tiếp → Codex
  assert.ok(!fast('làm tiếp đi', thread(true)));
  assert.ok(!fast('ok sửa lại cột B', thread(true)));
});
