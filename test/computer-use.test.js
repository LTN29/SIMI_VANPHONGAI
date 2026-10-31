const test = require('node:test');
const assert = require('node:assert/strict');
const { computerUseStatus, computerGuide } = require('../src/computer-use');
const plugin = { name: 'computer-use', installed: true, enabled: true };
const node = { name: 'node_repl', status: 'connected', tools: 4 };
test('recognizes the original Windows plugin through node_repl', () => {
  const info = computerUseStatus([plugin], [node], 'win32');
  assert.equal(info.native, true);
  assert.equal(info.runtime, 'node_repl');
});
test('installation alone does not mean the runtime is ready', () => {
  const info = computerUseStatus([plugin], [], 'win32');
  assert.equal(info.native, false);
  assert.equal(info.status, 'runtimeMissing');
});
test('disabled and uninstalled plugins never become usable', () => {
  for (const change of [{ enabled: false }, { installed: false }]) {
    assert.equal(computerUseStatus([{ ...plugin, ...change }], [node], 'win32').usable, false);
  }
});
test('runtime errors and empty tool lists are not reported as ready', () => {
  assert.equal(computerUseStatus([plugin], [{ ...node, status: 'failed', error: 'offline' }], 'win32').error, 'offline');
  assert.equal(computerUseStatus([plugin], [{ ...node, tools: 0 }], 'win32').usable, false);
});
test('does not claim Windows support on other platforms or without the plugin', () => {
  assert.equal(computerUseStatus([plugin], [node], 'linux').status, 'unsupported');
  assert.equal(computerUseStatus([], [node], 'win32'), null);
});
test('selects enabled installation and honors omitted enabled flag', () => {
  assert.equal(computerUseStatus([{ ...plugin, enabled: false }, plugin], [node], 'win32').native, true);
  assert.equal(computerUseStatus([{ name: 'computer-use', installed: true }], [node], 'win32').native, true);
});
test('prefers native plugin with its actual runtime API and safety guidance', () => {
  const guide = computerGuide({ native: true });
  assert.match(guide, /@oai\/sky/);
  assert.match(guide, /confirmations.md/);
  assert.match(guide, /KHÔNG phải lý do/);
});
test('disabled control forbids both native and fallback backends', () => {
  const guide = computerGuide({ native: true, enabled: false });
  assert.match(guide, /đang tắt/);
  assert.match(guide, /vp_computer/);
});

const { ChatEngine } = require('../src/chat');
function probeContext(result) {
  const calls = [];
  return {
    calls, getConfig: () => ({}), running: new Map(), defaultDir: () => process.cwd(),
    computerUse: async () => ({ native: true }),
    codex: { hold() { calls.push('hold'); }, release() { calls.push('release'); }, async callTool(server, tool, args) { calls.push({ server, tool, args }); return result; } },
  };
}
test('read-only runtime probe checks the actual bridge and releases the server', async () => {
  const ctx = probeContext({ content: [{ type: 'text', text: JSON.stringify({ target: 'windows', appCount: 3 }) }] });
  const result = await ChatEngine.prototype.checkComputerUse.call(ctx);
  assert.equal(result.ok, true);
  assert.equal(ctx.calls[1].server, 'node_repl');
  assert.match(ctx.calls[1].args.code, /sky.list_apps/);
  assert.doesNotMatch(ctx.calls[1].args.code, /sky.click|sky.type_text|sky.get_window_state/);
  assert.equal(ctx.calls.at(-1), 'release');
});
test('runtime probe does not report malformed or failed responses as success', async () => {
  for (const result of [{ isError: true, content: [{ type: 'text', text: 'bridge unavailable' }] }, { content: [] }, { content: [{ type: 'text', text: '{"target":"linux","appCount":3}' }] }]) {
    const ctx = probeContext(result);
    await assert.rejects(() => ChatEngine.prototype.checkComputerUse.call(ctx));
    assert.equal(ctx.calls.at(-1), 'release');
  }
});
test('probe respects disabled control and does not interfere with running turns', async () => {
  const ctx = probeContext({});
  ctx.getConfig = () => ({ computerControl: false });
  await assert.rejects(() => ChatEngine.prototype.checkComputerUse.call(ctx));
  assert.equal(ctx.calls.length, 0);
  ctx.getConfig = () => ({}); ctx.running.set('busy', {});
  await assert.rejects(() => ChatEngine.prototype.checkComputerUse.call(ctx));
  assert.equal(ctx.calls.length, 0);
});
