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
