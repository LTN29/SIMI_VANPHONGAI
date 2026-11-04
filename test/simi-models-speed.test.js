// Ô chọn model hiện nhãn tốc độ đo thật trên Gateway (⚡ nhanh / 🐢 chậm / ⚠ hay lỗi) – user vẫn tự chọn.
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('fs');
const os = require('os');
const path = require('path');
const http = require('http');

test('listModels gắn nhãn tốc độ từ data[].speed của Gateway', async () => {
  const gw = http.createServer((req, res) => {
    res.writeHead(200, { 'content-type': 'application/json' });
    res.end(JSON.stringify({
      data: [
        { id: 'cc/claude-sonnet-5-5', speed: { samples: 40, medianMs: 2100, p90Ms: 5000, errorRate: 0, label: 'fast' } },
        { id: 'cx/gpt-6.1-sol', speed: { samples: 30, medianMs: 17400, p90Ms: 52000, errorRate: 0.03, label: 'slow' } },
        { id: 'oc/free', speed: { samples: 8, medianMs: 900, p90Ms: 1000, errorRate: 0.5, label: 'unstable' } },
        { id: 'ag/moi' },
      ],
      models: ['cc/claude-sonnet-5-5', 'cx/gpt-6.1-sol', 'oc/free', 'ag/moi'].map((slug, priority) => ({ slug, display_name: slug.toUpperCase(), priority })),
    }));
  });
  await new Promise((r) => gw.listen(0, '127.0.0.1', r));
  try {
    const home = fs.mkdtempSync(path.join(os.tmpdir(), 'vpai-speed-'));
    fs.writeFileSync(path.join(home, 'config.toml'), `model = "cc/claude-sonnet-5-5"\nmodel_provider = "ltn_gateway"\n\n[model_providers.ltn_gateway]\nbase_url = "http://127.0.0.1:${gw.address().port}/v1"\nenv_key = "LTN_TEAM_API_KEY"\n`);
    process.env.CODEX_HOME = home; process.env.LTN_TEAM_API_KEY = 'k-speed';
    delete require.cache[require.resolve('../src/simi')];
    const { listModels } = require('../src/simi');
    const r = await listModels();
    assert.equal(r.live, true);
    const tag = Object.fromEntries(r.models.map((m) => [m.id, m.speedTag || '']));
    assert.deepEqual(tag, { 'cc/claude-sonnet-5-5': '⚡ nhanh ~2s', 'cx/gpt-6.1-sol': '🐢 chậm ~17s', 'oc/free': '⚠ hay lỗi (50%)', 'ag/moi': '' });
    assert.equal(r.models[0].label, 'CC/CLAUDE-SONNET-5-5', 'giữ tên hiển thị từ catalog');
  } finally { gw.close(); }
});
