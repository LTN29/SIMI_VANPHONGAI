// Trang trí Tết tự bật / tắt theo ngày: từ 12 tuần trước mùng 1 Tết tới rằm tháng Giêng; Cài đặt "Luôn bật" / "Tắt" thắng.
import test from 'node:test';
import assert from 'node:assert/strict';
import { tetOn, nextTet } from '../src/office3d/tet.js';

test('Tết Đinh Mùi 2027 rơi vào 6/2/2027', () => {
  const t = nextTet(new Date(2026, 10, 18));
  assert.equal(t.year, 2027); assert.equal(t.name, 'Đinh Mùi');
  assert.equal(t.at.getMonth(), 1); assert.equal(t.at.getDate(), 6);
});
test('tự động: bật từ ~14/11/2026 tới rằm tháng Giêng 2027, sau đó tắt', () => {
  assert.equal(tetOn('auto', new Date(2026, 10, 18)), true);
  assert.equal(tetOn(undefined, new Date(2026, 6, 1)), false);
  assert.equal(tetOn('auto', new Date(2027, 1, 20)), true);
  assert.equal(tetOn('auto', new Date(2027, 2, 5)), false);
  assert.equal(tetOn('auto', new Date(2027, 11, 20)), true); // mùa Tết Mậu Thân 2028 (26/1)
});
test('Luôn bật / Tắt thắng ngày', () => {
  assert.equal(tetOn('on', new Date(2026, 6, 1)), true);
  assert.equal(tetOn('off', new Date(2027, 1, 6)), false);
});
