// Ubuntu "trắng": app tự biết thiếu gói nào (curl, Python, Node.js) để cài trước bằng hộp mật khẩu – không phải mở Terminal.
const test = require('node:test');
const assert = require('node:assert/strict');
const { linuxMissing } = require('../src/simi');

test('máy trắng: cài đủ curl, python3, nodejs, npm, venv, pip', () => {
  assert.deepEqual(linuxMissing({ has: () => false, py: () => false }), ['curl', 'python3', 'nodejs', 'npm', 'python3-venv', 'python3-pip']);
});
test('Ubuntu desktop thiếu mỗi curl', () => {
  assert.deepEqual(linuxMissing({ has: (c) => c !== 'curl', py: () => true }), ['curl']);
});
test('có python3 nhưng thiếu venv / pip (Ubuntu mặc định)', () => {
  assert.deepEqual(linuxMissing({ has: () => true, py: (m) => m !== 'ensurepip' && m !== 'pip' }), ['python3-venv', 'python3-pip']);
});
test('đủ hết → không hỏi mật khẩu', () => {
  assert.deepEqual(linuxMissing({ has: () => true, py: () => true }), []);
});

test('log bộ cài: bỏ XML thanh tiến trình của PowerShell (CLIXML), giữ chữ đọc được', () => {
  const { cleanInstallerLine } = require('../src/simi');
  assert.equal(cleanInstallerLine('#< CLIXML'), '');
  assert.equal(cleanInstallerLine('<Objs Version="1.1.0.1"><Obj S="progress" RefId="0"><SD>Writing request stream...</SD></Obj>'), '');
  assert.equal(cleanInstallerLine('s" RefId="28"><TNRef RefId="0" /><MS><SD>Writing request stream... (Number of bytes written: 33788)</SD></MS></Obj><Obj S="progress" RefId="44"><TNRef Repair: dùng API key đã lưu, không yêu cầu nhập lại.'), 'Repair: dùng API key đã lưu, không yêu cầu nhập lại.');
  assert.equal(cleanInstallerLine('Node.js: v26.13.0'), 'Node.js: v26.13.0');
});
