// Gateway giả lập kiểu SIMI (OpenAI Responses API qua SSE) + thư mục CODEX_HOME mẫu, để test Codex thật mà không cần key.
const fs = require('fs');
const os = require('os');
const path = require('path');
const http = require('http');

const MODELS = [
  ['cc/claude-opus-5-5', 'Claude Opus 5.5', true], ['gpt-6.1-sol', 'GPT 6.1 Sol', true],
  ['muse-spark-1.3', 'muse-spark-1.3', false], ['muse-image-chat', 'muse-image-chat', false],
];
const SKILLS = {
  'simi-tao-anh': 'Tạo ảnh bằng model ảnh của SIMI Gateway và lưu file PNG vào thư mục làm việc.',
  'simi-tao-video': 'Tạo video ngắn từ mô tả hoặc ảnh qua SIMI Gateway.',
  'simi-tim-kiem-web': 'Tìm kiếm thông tin mới trên web qua Gateway.',
  'simi-doc-pdf': 'Đọc và trích nội dung PDF, kể cả bảng biểu.',
  'simi-trinh-duyet': 'Mở Chrome SIMI để đọc trang cần đăng nhập.',
  'simi-tai-lieu': 'Soạn tài liệu Word, Excel, PowerPoint.',
  'simi-chep-loi': 'Chép lời file ghi âm thành văn bản.',
  'simi-doc-trang-web': 'Đọc nội dung một trang web theo URL.',
};
// lệnh skill tạo ảnh giả: vẽ ảnh PNG bằng Node (không cần thư viện ngoài)
const MAKE_PNG = "node -e \"const z=require('zlib'),f=require('fs');const W=256,H=192,raw=Buffer.alloc((W*3+1)*H);for(let y=0;y<H;y++)for(let x=0;x<W;x++){const i=y*(W*3+1)+1+x*3,d=(x-128)**2+(y-96)**2<3600;raw[i]=d?255:10;raw[i+1]=d?214:120;raw[i+2]=d?90:240}const c=(t,b)=>{const l=Buffer.alloc(4);l.writeUInt32BE(b.length);const cr=Buffer.alloc(4);cr.writeUInt32BE(z.crc32(Buffer.concat([Buffer.from(t),b]))>>>0);return Buffer.concat([l,Buffer.from(t),b,cr])};const h=Buffer.alloc(13);h.writeUInt32BE(W,0);h.writeUInt32BE(H,4);h[8]=8;h[9]=2;f.writeFileSync('meo-xanh.png',Buffer.concat([Buffer.from([137,80,78,71,13,10,26,10]),c('IHDR',h),c('IDAT',z.deflateSync(raw)),c('IEND',Buffer.alloc(0))]))\" && echo Da luu meo-xanh.png";

function reply(lastUser, hadToolOutput, model, hasImage) {
  if (/simi-tao-anh/.test(lastUser) && hadToolOutput) return 'Xong rồi sếp! 🎨 Em đã tạo ảnh **meo-xanh.png** trong thư mục dự án:\n\n- Nền xanh SIMI\n- Mặt trăng vàng ở giữa';
  if (/bảng|markdown/i.test(lastUser)) return '## Kế hoạch tuần\n\n| Ngày | Việc | Phụ trách |\n|---|---|---|\n| Thứ 2 | Họp đầu tuần | Minh |\n| Thứ 4 | Gửi báo cáo | Lan |\n\n> Nhớ kiểm tra số liệu trước khi gửi.';
  return `Chào bạn! Đã nhận (${model})${hasImage ? ', có ảnh đính kèm' : ''}.`;
}

function startGateway(port = 0) {
  const log = [];
  const server = http.createServer((req, res) => {
    let body = '';
    req.on('data', (c) => (body += c));
    req.on('end', () => {
      log.push({ method: req.method, url: req.url, auth: req.headers.authorization, client: req.headers['x-ltn-client-id'] });
      if (req.url.startsWith('/v1/models')) {
        res.writeHead(200, { 'content-type': 'application/json' });
        return res.end(JSON.stringify({ object: 'list', data: MODELS.slice(0, 3).map(([id]) => ({ id, object: 'model' })) }));
      }
      if (req.method !== 'POST' || !req.url.startsWith('/v1/responses')) { res.writeHead(404); return res.end('{}'); }
      let j = {}; try { j = JSON.parse(body); } catch { /* bỏ */ }
      const input = j.input || [];
      const lastUser = JSON.stringify(input.filter((x) => x.role === 'user').slice(-1));
      const hadToolOutput = input.some((x) => /_call_output$/.test(x.type || ''));
      const hasImage = /input_image/.test(body);
      log[log.length - 1].userText = lastUser.slice(0, 4000);
      log[log.length - 1].model = j.model; log[log.length - 1].image = hasImage; log[log.length - 1].effort = j.reasoning && j.reasoning.effort;
      const sse = (type, data) => res.write(`event: ${type}\ndata: ${JSON.stringify({ type, ...data })}\n\n`);
      res.writeHead(200, { 'content-type': 'text/event-stream' });
      const id = 'resp_' + log.length;
      sse('response.created', { response: { id } });
      const tools = (j.tools || []).map((t) => t.name || (t.function && t.function.name) || t.type);
      // "mcp-test:<server>:<tool>" → gọi công cụ MCP (Computer Use, trình duyệt SIMI…) rồi trả lời theo kết quả
      const mcp = lastUser.match(/mcp-test:([\w-]+):(\w+)/);
      const lastIdx = input.map((x, i) => (x.role === 'user' ? i : -1)).reduce((a, b) => Math.max(a, b), -1);
      const outAfter = input.slice(lastIdx).filter((x) => /_call_output$/.test(x.type || ''));
      // "pc-test" → làm lần lượt các bước trong gw.plan (công cụ điều khiển máy vp_computer), mỗi kết quả là 1 bước
      if (/pc-test/.test(lastUser) && gw.plan) {
        const step = gw.plan[outAfter.length];
        const ns = (j.tools || []).find((t) => t.type === 'namespace' && /vp_computer/.test(t.name));
        let item;
        if (step && ns) item = { type: 'function_call', id: 'fc_p' + log.length, call_id: 'call_p' + log.length, namespace: ns.name, name: step.tool, arguments: JSON.stringify(typeof step.args === 'function' ? step.args() : step.args || {}) };
        else item = { type: 'message', id: 'msg_' + log.length, role: 'assistant', content: [{ type: 'output_text', text: ns ? `Xong ${outAfter.length} bước điều khiển máy.` : 'Không thấy công cụ vp_computer' }] };
        log[log.length - 1].toolImage = /input_image/.test(JSON.stringify(outAfter));
        sse('response.output_item.added', { output_index: 0, item: item.type === 'message' ? { ...item, content: [] } : item });
        if (item.type === 'message') sse('response.output_text.delta', { output_index: 0, item_id: item.id, delta: item.content[0].text });
        sse('response.output_item.done', { output_index: 0, item });
        sse('response.completed', { response: { id, usage: { input_tokens: 10, output_tokens: 5, total_tokens: 15 } } });
        return res.end();
      }
      if (mcp && !outAfter.length) {
        const ns = (j.tools || []).find((t) => t.type === 'namespace' && (t.tools || []).some((x) => x.name === mcp[2]) && t.name.replace(/[^a-z]/gi, '').includes(mcp[1].replace(/[^a-z]/gi, '')));
        const item = { type: 'function_call', id: 'fc_m' + log.length, call_id: 'call_m' + log.length, ...(ns ? { namespace: ns.name } : {}), name: ns ? mcp[2] : `mcp__${mcp[1]}__${mcp[2]}`, arguments: JSON.stringify({ app: 'Notepad', urls: ['https://shopee.vn/simi'] }) };
        sse('response.output_item.added', { output_index: 0, item });
        sse('response.output_item.done', { output_index: 0, item });
        sse('response.completed', { response: { id, usage: { input_tokens: 10, output_tokens: 5, total_tokens: 15 } } });
        return res.end();
      }
      if (mcp) {
        const out = JSON.stringify(outAfter[0].output || '');
        const text = `Kết quả công cụ: ${(out.match(/(Đã bấm[^"\\]*|Người dùng không[^"\\]*|Trang Shopee[^"\\]*)/) || [out.slice(0, 80)])[0]}`;
        const item = { type: 'message', id: 'msg_' + log.length, role: 'assistant', content: [{ type: 'output_text', text }] };
        sse('response.output_item.added', { output_index: 0, item: { ...item, content: [] } });
        sse('response.output_text.delta', { output_index: 0, item_id: item.id, delta: text });
        sse('response.output_item.done', { output_index: 0, item });
        sse('response.completed', { response: { id, usage: { input_tokens: 10, output_tokens: 5, total_tokens: 15 } } });
        return res.end();
      }
      if (/simi-tao-anh/.test(lastUser) && !hadToolOutput && tools.length) {
        const name = tools.includes('exec_command') ? 'exec_command' : 'shell_command';
        const item = { type: 'function_call', id: 'fc_1', call_id: 'call_1', name, arguments: JSON.stringify(name === 'exec_command' ? { cmd: MAKE_PNG } : { command: MAKE_PNG }) };
        sse('response.output_item.added', { output_index: 0, item });
        sse('response.output_item.done', { output_index: 0, item });
      } else {
        const text = reply(lastUser, hadToolOutput, j.model, hasImage);
        const item = { type: 'message', id: 'msg_' + log.length, role: 'assistant', content: [{ type: 'output_text', text }] };
        sse('response.output_item.added', { output_index: 0, item: { ...item, content: [] } });
        for (const part of text.match(/[\s\S]{1,16}/g)) sse('response.output_text.delta', { output_index: 0, item_id: item.id, delta: part });
        sse('response.output_item.done', { output_index: 0, item });
      }
      sse('response.completed', { response: { id, usage: { input_tokens: 10, output_tokens: 5, total_tokens: 15 } } });
      res.end();
    });
  });
  const gw = { server, log, plan: null };
  return new Promise((resolve) => server.listen(port, '127.0.0.1', () => resolve(Object.assign(gw, { url: `http://127.0.0.1:${server.address().port}/v1` }))));
}

// CODEX_HOME giống bộ cài SIMI ghi ra: config.toml, catalog model theo Combo, skill simi-*
function makeCodexHome(baseUrl, { mcp = [] } = {}) {
  const home = fs.mkdtempSync(path.join(os.tmpdir(), 'vpai-codex-'));
  // đủ các trường Codex yêu cầu, giống codexModelEntry() của gateway
  const base = {
    shell_type: 'shell_command', visibility: 'list', supported_in_api: true, availability_nux: null, upgrade: null, base_instructions: 'You are SIMI.',
    support_verbosity: false, default_verbosity: null, apply_patch_tool_type: null, truncation_policy: { mode: 'bytes', limit: 10000 },
    supports_parallel_tool_calls: false, supports_reasoning_summaries: false, auto_compact_token_limit: null, effective_context_window_percent: 95,
    context_window: 200000, experimental_supported_tools: [],
  };
  const models = MODELS.map(([slug, display_name, img], priority) => ({
    ...base, slug, display_name, priority, description: 'Model thuộc Combo được cấp', default_reasoning_level: 'medium',
    supported_reasoning_levels: ['low', 'medium', 'high'].map((effort) => ({ effort, description: effort })), input_modalities: img ? ['text', 'image'] : ['text'],
  }));
  const catalog = path.join(home, 'ltn-model-catalog.json');
  fs.writeFileSync(catalog, JSON.stringify({ models }, null, 1));
  const toml = (s) => JSON.stringify(s);
  fs.writeFileSync(path.join(home, 'config.toml'), [
    `model = "${MODELS[0][0]}"`, 'model_provider = "ltn_gateway"', `model_catalog_json = ${toml(catalog)}`, '',
    '[model_providers.ltn_gateway]', 'name = "SIMI Gateway"', `base_url = "${baseUrl}"`, 'env_key = "LTN_TEAM_API_KEY"', 'wire_api = "responses"',
    'env_http_headers = { "X-LTN-Client-ID" = "LTN_CLIENT_ID" }', '',
    // MCP giả: computer-use, simi_browser (giống bộ cài SIMI ghi [mcp_servers.simi_browser])
    ...mcp.flatMap((n) => [`[mcp_servers.${n.includes('-') ? JSON.stringify(n) : n}]`, `command = ${toml(process.execPath)}`, `args = [${toml(path.join(__dirname, 'fake-mcp.js'))}, ${toml(n)}]`, 'env = { ELECTRON_RUN_AS_NODE = "1" }', '']),
  ].join('\n'));
  for (const [name, desc] of Object.entries(SKILLS)) {
    fs.mkdirSync(path.join(home, 'skills', name), { recursive: true });
    fs.writeFileSync(path.join(home, 'skills', name, 'SKILL.md'), `---\nname: ${name}\ndescription: ${desc}\n---\n\n# ${name}\nSkill giả lập cho test.\n`);
  }
  return home;
}

const GATEWAY_ENV = { LTN_TEAM_API_KEY: 'sk-test', LTN_CLIENT_ID: '11111111-2222-3333-4444-555555555555' };

module.exports = { startGateway, makeCodexHome, GATEWAY_ENV, MODELS, SKILLS };

// chạy codex (không dùng spawnSync: gateway giả chạy cùng tiến trình, chặn vòng lặp sự kiện là treo)
function codexRun(codexBin, home, args, input) {
  const { spawn } = require('child_process');
  return new Promise((resolve) => {
    const c = spawn(codexBin, args, { env: { ...process.env, ...GATEWAY_ENV, CODEX_HOME: home } });
    let out = ''; let err = '';
    c.stdout.on('data', (d) => { out += d; });
    c.stderr.on('data', (d) => { err += d; });
    c.on('close', (code) => resolve({ code, out, err }));
    c.stdin.end(input);
  });
}

// Giả lập lịch sử ChatGPT Work: tạo đoạn chat Codex trong các thư mục dự án rồi đặt tên qua app-server
async function seedCodexThreads(codexBin, home, specs) {
  const { CodexAppServer } = require('../../src/codex-server');
  const out = [];
  for (const { dir, prompt, name } of specs) {
    fs.mkdirSync(dir, { recursive: true });
    const r = await codexRun(codexBin, home, ['exec', '--json', '-c', 'approval_policy=never', '--skip-git-repo-check', '-C', dir, '-'], prompt);
    const id = (r.out.match(/"thread_id":"([^"]+)"/) || [])[1];
    if (!id) throw new Error('Không tạo được đoạn chat mẫu: ' + r.err.slice(-300));
    out.push({ id, dir, name });
  }
  const prevHome = process.env.CODEX_HOME;
  process.env.CODEX_HOME = home;
  const srv = new CodexAppServer(() => codexBin);
  for (const t of out) if (t.name) await srv.request('thread/name/set', { threadId: t.id, name: t.name });
  srv.stop();
  if (prevHome === undefined) delete process.env.CODEX_HOME; else process.env.CODEX_HOME = prevHome;
  return out;
}

// "ChatGPT Work" chat thêm vào một đoạn có sẵn
const continueInCodex = (codexBin, home, id, prompt) =>
  codexRun(codexBin, home, ['exec', 'resume', '--json', '-c', 'approval_policy=never', '--skip-git-repo-check', id, '-'], prompt);

module.exports.seedCodexThreads = seedCodexThreads;
module.exports.continueInCodex = continueInCodex;
