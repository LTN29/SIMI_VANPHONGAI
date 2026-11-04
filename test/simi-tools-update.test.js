// Công cụ SIMI đổi trên Gateway → app chạy auto-update.mjs (chỉ tải file, không thông báo Windows) đúng 1 lần;
// máy đã đồng bộ đúng phiên bản thì bỏ qua.
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('fs');
const os = require('os');
const path = require('path');

test('updateToolsIfNeeded chạy auto-update đúng tham số, bỏ qua khi đã đồng bộ', async () => {
  const home = fs.mkdtempSync(path.join(os.tmpdir(), 'vpai-tools-'));
  process.env.CODEX_HOME = home;
  fs.writeFileSync(path.join(home, 'auto-update.mjs'), `
import { writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';
const home = process.argv[process.argv.indexOf('--codex-home') + 1];
mkdirSync(join(home, 'logs'), { recursive: true });
writeFileSync(join(home, 'args.json'), JSON.stringify(process.argv.slice(2)));
writeFileSync(join(home, 'logs', 'auto-update.json'), JSON.stringify({ syncedBundle: 'bbbb000011112222' }));
console.log(JSON.stringify({ updated: ['browser-mcp.mjs', 'skills/simi-tao-anh/SKILL.md'], catalog: { updated: true } }));
`);
  delete require.cache[require.resolve('../src/simi')];
  const simi = require('../src/simi');
  const r = await simi.updateToolsIfNeeded('bbbb000011112222');
  assert.deepEqual(r.updated, ['browser-mcp.mjs', 'skills/simi-tao-anh/SKILL.md']);
  const args = JSON.parse(fs.readFileSync(path.join(home, 'args.json'), 'utf8'));
  for (const flag of ['--files-only', '--no-notify', '--no-hide-task']) assert.ok(args.includes(flag), flag);
  assert.equal(args[args.indexOf('--gateway') + 1], 'https://ai.simi.vn');
  assert.deepEqual(await simi.updateToolsIfNeeded('bbbb000011112222'), { skipped: 'up-to-date' });
  assert.deepEqual(await simi.updateToolsIfNeeded('cccc000011112222'), { skipped: 'recent' }, 'không chạy dồn liên tục');
  assert.deepEqual(await simi.updateToolsIfNeeded('khong-hop-le'), { skipped: true });
});
