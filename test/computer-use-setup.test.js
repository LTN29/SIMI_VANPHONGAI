const test = require('node:test');
const assert = require('node:assert/strict');
const { ChatEngine } = require('../src/chat');
const windowsTest = process.platform === 'win32' ? test : test.skip;
const plugin = { name: 'computer-use', installed: false, enabled: true, available: true, marketplacePath: 'official-marketplace.json' };
function context(entries = [plugin]) {
  const calls = [];
  const ctx = { calls, running: new Map(), getConfig: () => ({}),
    codex: { active: 0, hold() { calls.push('hold'); this.active++; }, release() { calls.push('release'); this.active--; }, stop() { calls.push('stop'); }, async plugins() { return { plugins: entries }; }, async installPlugin(name, marketplace) { calls.push({ name, marketplace }); } },
    async checkComputerUse() { calls.push('probe'); return { appCount: 4 }; },
  };
  return ctx;
}
const run = ctx => ChatEngine.prototype.setupComputerUse.call(ctx);
windowsTest('installs a discovered plugin, restarts and verifies before success', async () => {
  const ctx = context(); const r = await run(ctx);
  assert.equal(r.ok, true); assert.equal(r.installedNow, true); assert.equal(r.appCount, 4);
  assert.deepEqual(ctx.calls, ['hold', { name: 'computer-use', marketplace: 'official-marketplace.json' }, 'release', 'stop', 'probe']);
  assert.equal(ctx._computerUseSetup, false);
});
windowsTest('already installed plugin is verified without reinstall or restart', async () => {
  const ctx = context([{ ...plugin, installed: true }]); const r = await run(ctx);
  assert.equal(r.ok, true); assert.equal(r.installedNow, false);
  assert.deepEqual(ctx.calls, ['hold', 'release', 'probe']);
});
windowsTest('disabled plugin is never silently enabled', async () => {
  const ctx = context([{ ...plugin, installed: true, enabled: false }]);
  assert.equal((await run(ctx)).status, 'disabled'); assert.deepEqual(ctx.calls, ['hold', 'release']);
});
windowsTest('missing or admin-blocked plugin provides help without an install attempt', async () => {
  for (const entries of [[], [{ ...plugin, available: false }]]) {
    const ctx = context(entries); const r = await run(ctx);
    assert.equal(r.ok, false); assert.equal(r.status, 'unavailable'); assert.match(r.helpUrl, /^https:\/\/learn.chatgpt.com\//);
    assert.deepEqual(ctx.calls, ['hold', 'release']);
  }
});
windowsTest('runtime failure is not reported as successful installation', async () => {
  const ctx = context(); ctx.checkComputerUse = async () => { throw Error('bridge missing'); };
  const r = await run(ctx); assert.equal(r.ok, false); assert.equal(r.status, 'runtimeMissing'); assert.equal(r.detail, 'bridge missing');
});
windowsTest('install failures release the server and clear the setup lock', async () => {
  const ctx = context(); ctx.codex.installPlugin = async () => { throw Error('download failed'); };
  await assert.rejects(() => run(ctx), /download failed/); assert.equal(ctx.codex.active, 0); assert.equal(ctx._computerUseSetup, false); assert.ok(!ctx.calls.includes('probe'));
});
windowsTest('running chats, concurrent setup and disabled control block setup', async () => {
  for (const change of [ctx => ctx.running.set('busy', {}), ctx => { ctx._computerUseSetup = true; }, ctx => { ctx.codex.active = 1; }, ctx => { ctx.getConfig = () => ({ computerControl: false }); }]) {
    const ctx = context(); change(ctx); await assert.rejects(() => run(ctx)); assert.equal(ctx.calls.length, 0);
  }
});
windowsTest('chat sends cannot interrupt setup', async () => {
  await assert.rejects(() => ChatEngine.prototype.send.call({ _computerUseSetup: true }, 'id', { text: 'test' }), /thiết lập Computer Use/);
});
