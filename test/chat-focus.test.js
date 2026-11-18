// AI làm luôn việc cũ: lượt trước nhờ nén src.zip, lượt này nhờ sửa bài viết thì sửa xong lại tự nén src.zip.
// Mọi đường gửi model (Codex, ⚡ trả lời nhanh, ghi nhớ đoạn chat) đều phải nói rõ: chỉ làm tin mới nhất, việc cũ đã xong.
const test = require('node:test');
const assert = require('node:assert/strict');
const { fastRequest, CHAT_GUIDE, FOCUS_RULE } = require('../src/chat');

test('luật "chỉ làm tin mới nhất" có trong hướng dẫn Codex (đầu danh sách) và đường ⚡', () => {
  assert.match(FOCUS_RULE, /tin nhắn MỚI NHẤT/);
  assert.match(FOCUS_RULE, /KHÔNG làm lại/);
  assert.match(FOCUS_RULE, /nén \/ đóng gói file/);
  assert.equal(CHAT_GUIDE.split('\n')[1], FOCUS_RULE);
  const t = { id: 'x', messages: [
    { role: 'user', text: 'Đóng gói src.zip giúp anh' },
    { role: 'assistant', status: 'done', blocks: [{ kind: 'text', text: 'Đã tạo src.zip' }] },
    { role: 'user', text: 'Sửa bài viết trên web' }, { role: 'assistant', status: 'running', blocks: [] },
  ] };
  const req = fastRequest(t, 'm', 'Sửa bài viết trên web', [], '');
  assert.ok(req.instructions.includes(FOCUS_RULE));
  // lịch sử vẫn gửi kèm (để hiểu bối cảnh), tin mới nhất là câu cuối
  assert.equal(req.input.at(-1).content[0].text, 'Sửa bài viết trên web');
  assert.ok(req.input.some((x) => x.content[0].text === 'Đóng gói src.zip giúp anh'));
});

test('ghi nhớ đoạn chat: việc trong đó coi như đã xử lý', () => {
  const t = { id: 'y', memo: { text: '## Đã xong (không làm lại)\n- Nén src.zip', upTo: 2, at: 1 }, messages: [
    { role: 'user', text: 'a' }, { role: 'assistant', status: 'done', blocks: [{ kind: 'text', text: 'b' }] },
    { role: 'user', text: 'Sửa bài' }, { role: 'assistant', status: 'running', blocks: [] },
  ] };
  const req = fastRequest(t, 'm', 'Sửa bài', [], '');
  assert.match(req.instructions, /việc trong đó đã xử lý, không tự làm lại/);
});

test('Codex chỉ tự tóm phiên khi vượt 150k token (60k làm việc nhiều bước trên web bị cắt ngang giữa chừng)', () => {
  const simi = require('../src/simi');
  assert.equal(simi.chatSettings({}).config.model_auto_compact_token_limit, 150000);
  assert.equal(simi.chatSettings({ compactTokens: 80000 }).config.model_auto_compact_token_limit, 80000);
  assert.equal(simi.chatSettings({ compactTokens: 0 }).config.model_auto_compact_token_limit, undefined);
});
