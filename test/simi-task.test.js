// Tác vụ tự cập nhật SIMI trên Windows phải chạy ẩn; script của app phải giống hệt bản trong Gateway (scripts/auto-update.mjs)
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('fs');
const path = require('path');
const { hideSimiTask, PS1 } = require('../src/simi-task');

const GW = process.env.GATEWAY_DIR || path.join(__dirname, '..', '..', 'ltn-memory-gateway', 'ltn-memory-gateway');

test('script đổi tác vụ sang chạy ẩn (wscript, dự phòng conhost --headless)', async () => {
  assert.match(PS1, /System32\\wscript\.exe/);
  assert.match(PS1, /--headless/);
  assert.match(PS1, /Set-ScheduledTask -TaskName \$name -Action \$new/);
  assert.equal(await hideSimiTask(), process.platform === 'win32' ? await hideSimiTask() : 'skip');
});

test('giống hệt script trong Gateway', { skip: !fs.existsSync(path.join(GW, 'scripts', 'auto-update.mjs')) && 'không có repo Gateway bên cạnh' }, async () => {
  const { pathToFileURL } = require('url');
  const m = await import(pathToFileURL(path.join(GW, 'scripts', 'auto-update.mjs')).href);
  assert.equal(PS1, m.HIDDEN_TASK_PS1);
});
