// Xếp bảng tên trên đầu nhân vật cho khỏi chồng lên nhau (màn hình 2D).
// items: [{ x, y, w, h, prev? }] – (x, y) là điểm giữa-đáy bảng tên ngay trên đầu nhân vật.
// Người đứng gần camera (y lớn hơn) giữ nguyên chỗ; người phía sau né lên trên hoặc sang bên – chọn cách dịch ít nhất.
// prev = độ lệch lần trước: còn hợp lệ thì giữ để bảng tên không nhảy qua lại khi xoay camera.
const GAP = 4;

function hits(a, list) {
  for (const b of list) {
    if (Math.abs(a.x - b.x) < (a.w + b.w) / 2 + GAP && a.y - a.h < b.y + GAP && b.y - b.h < a.y + GAP) return b;
  }
  return null;
}

export function dodgePlates(items) {
  const order = [...items].sort((a, b) => b.y - a.y);
  const done = [];
  for (const it of order) {
    const box = { ...it };
    const dist = (c) => Math.hypot(c.x - it.x, c.y - it.y);
    let best = null;
    if (!hits(box, done)) best = { x: it.x, y: it.y };
    else {
      const tries = [];
      if (it.prev && (it.prev.x || it.prev.y)) tries.push({ x: it.x + it.prev.x, y: it.y + it.prev.y, keep: true });
      // né: lên trên từng bảng đang chắn, sang trái / phải
      for (const b of done) {
        tries.push({ x: it.x, y: b.y - b.h - GAP });
        tries.push({ x: b.x - (b.w + it.w) / 2 - GAP, y: it.y });
        tries.push({ x: b.x + (b.w + it.w) / 2 + GAP, y: it.y });
        tries.push({ x: b.x - (b.w + it.w) / 2 - GAP, y: b.y - b.h - GAP });
        tries.push({ x: b.x + (b.w + it.w) / 2 + GAP, y: b.y - b.h - GAP });
      }
      for (const c of tries) {
        if (hits({ ...box, x: c.x, y: c.y }, done)) continue;
        // giữ chỗ cũ nếu không xa hơn nhiều so với chỗ tốt nhất (chống rung)
        const d = dist(c) - (c.keep ? 12 : 0);
        if (!best || d < best.d) best = { x: c.x, y: c.y, d };
      }
      if (!best) { // quá chật: chồng lên trên cùng
        const top = Math.min(...done.map((b) => b.y - b.h)) - GAP;
        best = { x: it.x, y: Math.min(it.y, top) };
      }
    }
    const placed = { ...it, x: best.x, y: best.y };
    done.push(placed);
  }
  // giữ thứ tự đầu vào
  return items.map((it) => done[order.indexOf(it)]);
}
