#!/usr/bin/env node
// Codex app-server giả: lần chạy đầu "treo" ở thread/list (giống máy nhiều lịch sử / Codex vừa khởi động bị kẹt),
// lần chạy sau trả danh sách bình thường. Đếm số lần chạy qua file FAKE_CODEX_COUNT.
const fs = require('fs');
const countFile = process.env.FAKE_CODEX_COUNT;
const n = (Number(fs.existsSync(countFile) ? fs.readFileSync(countFile, 'utf8') : 0) || 0) + 1;
fs.writeFileSync(countFile, String(n));
let buf = '';
process.stdin.on('data', (d) => {
  buf += d; let i;
  while ((i = buf.indexOf('\n')) >= 0) {
    const m = JSON.parse(buf.slice(0, i)); buf = buf.slice(i + 1);
    if (m.id === undefined) continue;
    if (m.method === 'initialize') process.stdout.write(JSON.stringify({ id: m.id, result: {} }) + '\n');
    else if (m.method === 'thread/list' && n > 1) process.stdout.write(JSON.stringify({ id: m.id, result: { data: [{ id: 't-1', updatedAt: 1 }], nextCursor: null } }) + '\n');
  }
});
