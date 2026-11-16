// Gửi nhiều ảnh: ảnh lớn được thu nhỏ trước khi gửi (Electron), chờ thêm theo số ảnh, gửi tới 10 ảnh.
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('fs');
const os = require('os');
const path = require('path');
const { fastRequest, shrinkImage, firstByteWait } = require('../src/chat');

test('chờ phản hồi đầu tiên dài hơn khi kèm ảnh (tối đa 3 phút)', () => {
  assert.equal(firstByteWait(0), 45000);
  assert.equal(firstByteWait(7), 45000 + 7 * 12000);
  assert.equal(firstByteWait(50), 180000);
});

test('ngoài Electron (không thu nhỏ được) → dùng ảnh gốc, không lỗi', () => {
  const f = path.join(fs.mkdtempSync(path.join(os.tmpdir(), 'vpai-img-')), 'a.png');
  fs.writeFileSync(f, Buffer.from('89504e470d0a1a0a', 'hex'));
  assert.equal(shrinkImage(f), f);
  assert.equal(shrinkImage('/khong/co/file.png'), '/khong/co/file.png');
});

test('gửi tới 10 ảnh trong 1 lượt (trước chỉ 4, ảnh thứ 5 trở đi bị bỏ)', () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'vpai-img-'));
  const atts = Array.from({ length: 12 }, (_, i) => { const p = path.join(dir, `${i}.png`); fs.writeFileSync(p, Buffer.from('89504e47', 'hex')); return { path: p, image: true }; });
  const t = { id: 'x', messages: [{ role: 'user', text: 'mình gửi ảnh' }, { role: 'assistant', status: 'running', blocks: [] }] };
  const body = fastRequest(t, 'm', 'mình gửi ảnh', atts, '');
  assert.equal(body.input[body.input.length - 1].content.filter((c) => c.type === 'input_image').length, 10);
});
