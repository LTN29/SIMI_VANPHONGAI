// Văn phòng 3D: bảng tên trên đầu nhân vật không được chồng lên nhau (Lan / Thảo / Minh đứng gần nhau).
import test from 'node:test';
import assert from 'node:assert/strict';
import { dodgePlates } from '../src/office3d/dodge.js';

const overlap = (a, b) => Math.abs(a.x - b.x) < (a.w + b.w) / 2 && a.y - a.h < b.y && b.y - b.h < a.y;

test('bảng tên chồng nhau được tách ra, người gần camera giữ nguyên chỗ', () => {
  const items = [
    { p: 'lan', x: 400, y: 360, w: 140, h: 40 },
    { p: 'thao', x: 300, y: 420, w: 120, h: 40 },
    { p: 'minh', x: 430, y: 425, w: 150, h: 40 },
    { p: 'hung', x: 870, y: 440, w: 140, h: 40 },
  ];
  const out = dodgePlates(items);
  assert.deepEqual(out.map((o) => o.p), ['lan', 'thao', 'minh', 'hung'], 'giữ thứ tự');
  for (let i = 0; i < out.length; i++) for (let j = i + 1; j < out.length; j++) assert.ok(!overlap(out[i], out[j]), `${out[i].p} chồng ${out[j].p}`);
  assert.deepEqual([out[2].x, out[2].y], [430, 425], 'Minh gần camera nhất trong cụm → không dịch');
  assert.deepEqual([out[3].x, out[3].y], [870, 440], 'Hùng ở xa, không chồng ai → không dịch');
});

test('lần sau giữ hướng né cũ khi vẫn hợp lệ (không nhảy qua lại khi xoay camera)', () => {
  const base = [{ p: 'a', x: 300, y: 400, w: 120, h: 40 }, { p: 'b', x: 330, y: 390, w: 120, h: 40 }];
  const first = dodgePlates(base);
  const prev = { x: first[1].x - 330, y: first[1].y - 390 };
  const again = dodgePlates([base[0], { ...base[1], x: 332, prev }]);
  assert.equal(Math.round(again[1].x - 332), Math.round(prev.x));
  assert.equal(Math.round(again[1].y - 390), Math.round(prev.y));
});
