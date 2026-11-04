// ⚡ Trả lời nhanh trong tab Chat: việc chỉ cần chữ gửi thẳng /v1/responses của Gateway (chữ hiện dần, không qua Codex);
// model báo cần công cụ → tự chuyển sang Codex; file đính kèm / skill / "Luôn dùng công cụ" → đi Codex ngay;
// lượt Codex sau đó được kèm phần trao đổi nhanh để không mất mạch.
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('fs');
const os = require('os');
const path = require('path');
const http = require('http');
const { EventEmitter } = require('events');

class FakeCodex extends EventEmitter {
  constructor() { super(); this.loaded = new Set(); this.gen = 1; this.active = 0; this.calls = []; }
  async start() { return this.gen; }
  hold() { this.active++; }
  release() { this.active = Math.max(0, this.active - 1); }
  stop() {}
  async plugins() { return { plugins: [] }; }
  async mcpServers() { return []; }
  respond() {}
  respondError() {}
  async request(method, params) {
    this.calls.push([method, params]);
    if (method === 'thread/start') return { thread: { id: 'cx-1' } };
    if (method === 'turn/start') {
      setTimeout(() => this.emit('notification', 'turn/completed', { threadId: 'cx-1', turnId: 't1', turn: { status: 'completed', items: [{ type: 'agentMessage', id: 'a1', text: 'Codex đã làm xong.' }] } }), 30);
      return { turn: { id: 't1' } };
    }
    return {};
  }
}

async function setup(reply) {
  const seen = [];
  const gw = http.createServer((req, res) => {
    let body = ''; req.on('data', (c) => (body += c));
    req.on('end', () => {
      const j = JSON.parse(body || '{}'); seen.push({ url: req.url, body: j, auth: req.headers.authorization });
      res.writeHead(200, { 'content-type': 'text/event-stream' });
      const text = reply(j);
      for (const part of text.match(/[\s\S]{1,5}/g)) res.write(`event: response.output_text.delta\ndata: ${JSON.stringify({ type: 'response.output_text.delta', delta: part })}\n\n`);
      res.end(`event: response.completed\ndata: ${JSON.stringify({ type: 'response.completed', response: { usage: { input_tokens: 12, output_tokens: 7 } } })}\n\n`);
    });
  });
  await new Promise((r) => gw.listen(0, '127.0.0.1', r));
  const home = fs.mkdtempSync(path.join(os.tmpdir(), 'vpai-fast-'));
  fs.writeFileSync(path.join(home, 'config.toml'), `model = "cc/claude-sonnet-5-5"\nmodel_provider = "ltn_gateway"\n\n[model_providers.ltn_gateway]\nbase_url = "http://127.0.0.1:${gw.address().port}/v1"\nenv_key = "LTN_TEAM_API_KEY"\n`);
  process.env.CODEX_HOME = home; process.env.LTN_TEAM_API_KEY = 'k-fast'; process.env.LTN_CLIENT_ID = 'client-fast-0001';
  delete require.cache[require.resolve('../src/simi')]; delete require.cache[require.resolve('../src/chat')];
  const { ChatEngine } = require('../src/chat');
  const codex = new FakeCodex(); const events = [];
  const ud = fs.mkdtempSync(path.join(os.tmpdir(), 'vpai-fast-ud-'));
  const e = new ChatEngine({ userData: ud, getConfig: () => ({}), emit: (x) => events.push(x), defaultDir: () => ud, codex });
  return { e, codex, events, seen, ud, close: () => gw.close() };
}

test('việc chỉ cần chữ → trả lời nhanh, không qua Codex; lượt Codex sau được kèm trao đổi nhanh', async () => {
  const { e, codex, events, seen, ud, close } = await setup((j) => (/bảng tính/.test(JSON.stringify(j.input)) ? '[[CAN_CONG_CU]]' : 'Xin chào! Đây là bản dịch.'));
  try {
    const t = e.create({ title: 'Dịch' });
    const r = await e.send(t.id, { text: '你好 – dịch sang tiếng Việt giúp mình' });
    assert.equal(r.ok, true);
    assert.equal(r.message.fast, true);
    assert.equal(r.message.blocks[0].text, 'Xin chào! Đây là bản dịch.');
    assert.equal(codex.calls.length, 0, 'không gọi Codex');
    assert.equal(seen[0].url, '/v1/responses');
    assert.equal(seen[0].auth, 'Bearer k-fast');
    assert.equal(seen[0].body.stream, true);
    assert.equal(seen[0].body.model, 'cc/claude-sonnet-5-5');
    assert.match(seen[0].body.instructions, /\[\[CAN_CONG_CU\]\]/);
    assert.ok(events.some((x) => x.ev === 'blocks'), 'chữ hiện dần');

    // ảnh đính kèm đi kèm trong lượt nhanh
    const img = path.join(ud, 'anh.png'); fs.writeFileSync(img, Buffer.from('89504e470d0a1a0a00000000', 'hex'));
    await e.send(t.id, { text: 'Ảnh này viết gì?', attachments: [{ path: img }] });
    const last = seen.at(-1).body.input.at(-1).content;
    assert.equal(last[1].type, 'input_image');
    assert.match(last[1].image_url, /^data:image\/png;base64,/);
    assert.equal(seen.at(-1).body.input.filter((m) => m.role === 'assistant').length, 1, 'kèm lịch sử trao đổi trước');

    // model báo cần công cụ → tự chuyển sang Codex, kèm trao đổi nhanh trước đó
    const r2 = await e.send(t.id, { text: 'Lưu bản dịch vào bảng tính Excel' });
    assert.equal(r2.message.fast, false);
    assert.equal(r2.message.blocks.find((b) => b.kind === 'text').text, 'Codex đã làm xong.');
    const turn = codex.calls.find(([m]) => m === 'turn/start')[1];
    assert.match(turn.input[0].text, /Trao đổi gần đây[\s\S]*dịch sang tiếng Việt[\s\S]*Đây là bản dịch[\s\S]*Lưu bản dịch vào bảng tính Excel/);
  } finally { close(); }
});

test('file đính kèm, gọi skill hoặc "Luôn dùng công cụ" → đi Codex ngay', async () => {
  const { e, codex, seen, ud, close } = await setup(() => 'không được gọi');
  try {
    const doc = path.join(ud, 'bao-cao.docx'); fs.writeFileSync(doc, 'x');
    const t = e.create({ title: 'File' });
    await e.send(t.id, { text: 'Tóm tắt file này', attachments: [{ path: doc }] });
    await e.send(t.id, { text: '/simi-tao-anh vẽ con mèo' });
    await e.send(t.id, { text: '$simi-tao-anh vẽ con chó' });
    const t2 = e.create({ title: 'Công cụ', mode: 'tools' });
    await e.send(t2.id, { text: 'Xin chào' });
    assert.equal(seen.length, 0, 'không gửi lượt nhanh nào');
    assert.equal(codex.calls.filter(([m]) => m === 'turn/start').length, 4);
  } finally { close(); }
});

test('bấm Dừng khi đang trả lời nhanh → dừng ngay', async () => {
  const seen = [];
  const gw = http.createServer((req, res) => { seen.push(req.url); res.writeHead(200, { 'content-type': 'text/event-stream' }); res.write(`data: ${JSON.stringify({ type: 'response.output_text.delta', delta: 'Đang viết rất dài…' })}\n\n`); });
  await new Promise((r) => gw.listen(0, '127.0.0.1', r));
  const home = fs.mkdtempSync(path.join(os.tmpdir(), 'vpai-fast-'));
  fs.writeFileSync(path.join(home, 'config.toml'), `model = "cc/claude-sonnet-5-5"\n\n[model_providers.ltn_gateway]\nbase_url = "http://127.0.0.1:${gw.address().port}/v1"\n`);
  process.env.CODEX_HOME = home;
  delete require.cache[require.resolve('../src/simi')]; delete require.cache[require.resolve('../src/chat')];
  const { ChatEngine } = require('../src/chat');
  const ud = fs.mkdtempSync(path.join(os.tmpdir(), 'vpai-fast-ud-'));
  const e = new ChatEngine({ userData: ud, getConfig: () => ({}), emit: () => {}, defaultDir: () => ud, codex: new FakeCodex() });
  const t = e.create({ title: 'Dừng' });
  const sending = e.send(t.id, { text: 'Viết bài thật dài' });
  await new Promise((r) => setTimeout(r, 300));
  const t0 = Date.now();
  e.stop(t.id);
  const r = await sending;
  assert.ok(Date.now() - t0 < 1000);
  assert.equal(r.message.status, 'stopped');
  assert.equal(r.message.blocks[0].text, 'Đang viết rất dài…', 'giữ phần đã viết');
  gw.close(); gw.closeAllConnections();
});
