// 🎋 Quẻ đầu ngày do AI viết qua SIMI Gateway: gửi tên / team / loại quẻ, đọc JSON trả về; lỗi thì báo để app dùng quẻ dự phòng.
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('fs');
const os = require('os');
const path = require('path');
const http = require('http');

async function setup(reply) {
  const seen = [];
  const gw = http.createServer((req, res) => {
    let body = ''; req.on('data', (c) => (body += c));
    req.on('end', () => { seen.push({ url: req.url, auth: req.headers.authorization, body: JSON.parse(body || '{}') }); reply(res); });
  });
  await new Promise((r) => gw.listen(0, '127.0.0.1', r));
  const home = fs.mkdtempSync(path.join(os.tmpdir(), 'vpai-fortune-'));
  fs.writeFileSync(path.join(home, 'config.toml'), `model = "cc/claude-sonnet-5-5"\nmodel_provider = "ltn_gateway"\n\n[model_providers.ltn_gateway]\nbase_url = "http://127.0.0.1:${gw.address().port}/v1"\nenv_key = "LTN_TEAM_API_KEY"\n`);
  process.env.CODEX_HOME = home; process.env.LTN_TEAM_API_KEY = 'k-fortune';
  delete require.cache[require.resolve('../src/simi')]; delete require.cache[require.resolve('../src/fortune-ai')];
  return { seen, gw, ...require('../src/fortune-ai') };
}

test('AI viết quẻ riêng cho người rút (tên, team, loại quẻ) và trả về tên quẻ + thông điệp + việc nên làm', async () => {
  const t = await setup((res) => { res.writeHead(200, { 'content-type': 'application/json' }); res.end(JSON.stringify({ output: [{ type: 'message', content: [{ type: 'output_text', text: 'Đây nè:\n{"ten_que": "Quẻ Khai Vận", "thong_diep": "Ngọc ơi, hôm nay khách tìm đến bạn như ong tìm hoa!", "nen_lam": "Gọi lại 3 khách cũ"}' }] }] })); });
  try {
    const r = await t.askFortune({ name: 'Ngọc', team: 'Sales', level: 'Đại cát', n: 7, date: '2026-11-05' });
    assert.deepEqual(r, { name: 'Khai Vận', message: 'Ngọc ơi, hôm nay khách tìm đến bạn như ong tìm hoa!', do: 'Gọi lại 3 khách cũ', model: 'cc/claude-sonnet-5-5' });
    assert.equal(t.seen[0].url, '/v1/responses');
    assert.equal(t.seen[0].auth, 'Bearer k-fortune');
    assert.equal(t.seen[0].body.model, 'cc/claude-sonnet-5-5');
    assert.match(t.seen[0].body.input, /Ngọc \(team Sales\)[\s\S]*Quẻ số 7, loại quẻ: Đại cát/);
    assert.match(t.seen[0].body.instructions, /may mắn, tích cực, đầy năng lượng/);
  } finally { t.gw.close(); }
});

test('AI lỗi hoặc trả rỗng → báo lỗi để app dùng quẻ dự phòng', async () => {
  const t = await setup((res) => { res.writeHead(200, { 'content-type': 'application/json' }); res.end(JSON.stringify({ output: [] })); });
  try { await assert.rejects(() => t.askFortune({ level: 'Trung cát' }), /chưa viết được/); } finally { t.gw.close(); }
  const t2 = await setup((res) => { res.writeHead(429, { 'content-type': 'application/json' }); res.end(JSON.stringify({ error: { message: 'Hết lượt' } })); });
  try { await assert.rejects(() => t2.askFortune({}), /Hết lượt/); } finally { t2.gw.close(); }
});
