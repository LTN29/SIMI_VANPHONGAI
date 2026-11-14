// File danh sách model của Codex (model_catalog_json) thiếu trường mà bản Codex trên máy đòi → Codex không mở được
// ("failed to parse model_catalog_json … missing field `supports_parallel_tool_calls`"): app tự bổ sung trước khi mở Codex.
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('fs');
const os = require('os');
const path = require('path');
const { spawnSync, execFileSync } = require('child_process');

const home = fs.mkdtempSync(path.join(os.tmpdir(), 'vpai-cat-'));
process.env.CODEX_HOME = home;
const simi = require('../src/simi');
const cat = path.join(home, 'ltn-model-catalog.json');
// bản do bộ cài cũ ghi: 1 dòng, thiếu supports_parallel_tool_calls / experimental_supported_tools / truncation_policy…
const OLD = { models: [
  { slug: 'claude-opus-5.5', display_name: 'Claude Opus 5.5', description: 'x', default_reasoning_level: 'medium', supported_reasoning_levels: [{ effort: 'medium', description: 'medium' }], shell_type: 'local', visibility: 'list', supported_in_api: true, priority: 0, base_instructions: 'Hãy trả lời tiếng Việt.', support_verbosity: false },
  { slug: 'gpt-6.1-sol', base_instructions: 'x' },
] };
const write = () => {
  fs.writeFileSync(path.join(home, 'config.toml'), `model = "claude-opus-5.5"\nmodel_catalog_json = ${JSON.stringify(cat)}\n`);
  fs.writeFileSync(cat, JSON.stringify(OLD));
};

test('bổ sung trường thiếu, giữ nguyên trường đã có, có bản sao lưu', () => {
  write();
  const r = simi.repairCatalog();
  assert.equal(r.fixed, 2);
  const j = JSON.parse(fs.readFileSync(cat, 'utf8'));
  assert.equal(j.models[0].supports_parallel_tool_calls, false);
  assert.deepEqual(j.models[0].experimental_supported_tools, []);
  assert.equal(j.models[0].base_instructions, 'Hãy trả lời tiếng Việt.', 'không đổi trường đã có');
  assert.equal(j.models[0].default_reasoning_level, 'medium');
  assert.equal(j.models[1].display_name, 'gpt-6.1-sol');
  assert.equal(j.models[1].priority, 1);
  assert.ok(fs.existsSync(cat + '.before-repair'));
  assert.equal(simi.repairCatalog().fixed, 0, 'chạy lại không đổi gì');
});

test('máy chưa cấu hình catalog / file hỏng → không đụng tới', () => {
  fs.writeFileSync(path.join(home, 'config.toml'), 'model = "x"\n');
  assert.equal(simi.repairCatalog().skipped, 'no catalog');
  fs.writeFileSync(path.join(home, 'config.toml'), `model_catalog_json = ${JSON.stringify(cat)}\n`);
  fs.writeFileSync(cat, '{hỏng');
  assert.match(simi.repairCatalog().error, /hỏng/);
  assert.equal(fs.readFileSync(cat, 'utf8'), '{hỏng');
});

let codexOk = true;
try { execFileSync('which', ['codex'], { stdio: 'ignore' }); } catch { codexOk = false; }
test('Codex CLI thật đọc được file sau khi sửa', { skip: (!codexOk || process.platform === 'win32') && 'không có Codex CLI', timeout: 60000 }, () => {
  write();
  const run = () => { const r = spawnSync('codex', ['exec', '--skip-git-repo-check', 'hi'], { env: { ...process.env, CODEX_HOME: home }, encoding: 'utf8', timeout: 20000 }); return (r.stderr || '') + (r.stdout || ''); };
  assert.match(run(), /model_catalog_json/, 'trước khi sửa: Codex báo lỗi file danh sách model');
  simi.repairCatalog();
  assert.doesNotMatch(run(), /model_catalog_json/, 'sau khi sửa: Codex đọc được');
});
