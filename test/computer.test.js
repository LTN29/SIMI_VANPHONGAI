const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');
async function request(method, params, platform = 'win32') {
  let receive, reply;
  const processMock = { env: { VPC_PLATFORM: platform }, stdin: { on() {} }, stdout: { write(s) { reply = JSON.parse(s); } } };
  const localRequire = name => name === 'readline' ? { createInterface: () => ({ on(_event, handler) { receive = handler; } }) } : name === 'child_process' ? { spawn() { throw Error('Unexpected desktop access'); }, execFile() { throw Error('Unexpected desktop access'); } } : require(name);
  vm.runInNewContext(fs.readFileSync(path.join(__dirname, '../src/computer/mcp.js'), 'utf8'), { require: localRequire, process: processMock, Buffer, __dirname, setTimeout, clearTimeout });
  receive(JSON.stringify({ jsonrpc: '2.0', id: 1, method, params }));
  await new Promise(resolve => setImmediate(resolve));
  assert.ok(reply, 'MCP must return a reply');
  return reply.result;
}
test('Windows discovery is read-only but focus requires approval', async () => {
  const { tools } = await request('tools/list');
  assert.equal(tools.find(t => t.name === 'list_windows').annotations.readOnlyHint, true);
  assert.equal(tools.find(t => t.name === 'focus_window').annotations.readOnlyHint, false);
});
test('other platforms do not advertise Windows tools', async () => {
  const { tools } = await request('tools/list', {}, 'linux');
  assert.equal(tools.some(t => t.name === 'focus_window' || t.name === 'list_windows'), false);
});
test('invalid window IDs cannot touch the desktop', async () => {
  for (const window_id of ['0', '1\topen', '-1', 'abc', '']) {
    const r = await request('tools/call', { name: 'focus_window', arguments: { window_id } });
    assert.equal(r.isError, true);
    assert.match(r.content[0].text, /Invalid window ID/);
  }
});
