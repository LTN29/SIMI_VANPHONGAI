// MCP stdio giả cho test: "computer-use" (bấm/gõ, hỏi quyền theo từng app, trả ảnh màn hình) và "simi_browser" (đọc trang).
const zlib = require('zlib');
const name = process.argv[2] || 'computer-use';
const send = (m) => process.stdout.write(JSON.stringify(m) + '\n');
// ảnh PNG nhỏ (màn hình giả màu xanh SIMI)
function png() {
  const W = 64, H = 40, raw = Buffer.alloc((W * 3 + 1) * H);
  for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) { const i = y * (W * 3 + 1) + 1 + x * 3; raw[i] = 10; raw[i + 1] = 120 + (y * 2); raw[i + 2] = 240; }
  const chunk = (t, b) => { const l = Buffer.alloc(4); l.writeUInt32BE(b.length); const c = Buffer.alloc(4); c.writeUInt32BE(zlib.crc32(Buffer.concat([Buffer.from(t), b])) >>> 0); return Buffer.concat([l, Buffer.from(t), b, c]); };
  const h = Buffer.alloc(13); h.writeUInt32BE(W, 0); h.writeUInt32BE(H, 4); h[8] = 8; h[9] = 2;
  return Buffer.concat([Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]), chunk('IHDR', h), chunk('IDAT', zlib.deflateSync(raw)), chunk('IEND', Buffer.alloc(0))]).toString('base64');
}
const TOOLS = name === 'simi_browser'
  ? [{ name: 'browser_read_pages', description: 'Read pages in SIMI Chrome', inputSchema: { type: 'object', properties: { urls: { type: 'array', items: { type: 'string' } } } } },
    { name: 'browser_open_window', description: 'Show SIMI Chrome', inputSchema: { type: 'object', properties: { url: { type: 'string' } } } }]
  : [{ name: 'click', description: 'Click in a desktop app', inputSchema: { type: 'object', properties: { app: { type: 'string' } } } }];
const pending = new Map(); let nid = 9000;
require('readline').createInterface({ input: process.stdin }).on('line', (l) => {
  let m; try { m = JSON.parse(l); } catch { return; }
  if (m.method === 'initialize') return send({ jsonrpc: '2.0', id: m.id, result: { protocolVersion: m.params.protocolVersion, capabilities: { tools: {} }, serverInfo: { name, version: '1.0.0' } } });
  if (m.method === 'tools/list') return send({ jsonrpc: '2.0', id: m.id, result: { tools: TOOLS } });
  if (m.method === 'tools/call') {
    const a = m.params.arguments || {};
    if (m.params.name === 'click') {
      const id = nid++; pending.set(id, { orig: m.id, app: a.app || 'Notepad' });
      return send({ jsonrpc: '2.0', id, method: 'elicitation/create', params: { message: `Allow Codex to use ${a.app || 'Notepad'}?`, requestedSchema: { type: 'object', properties: {} } } });
    }
    if (m.params.name === 'browser_open_window') return send({ jsonrpc: '2.0', id: m.id, result: { content: [{ type: 'text', text: 'Đã mở Chrome SIMI' }] } });
    return send({ jsonrpc: '2.0', id: m.id, result: { content: [{ type: 'text', text: 'Trang Shopee: Áo thun SIMI giá 199.000đ, còn 12 cái' }] } });
  }
  if (m.id !== undefined && !m.method && pending.has(m.id)) {
    const p = pending.get(m.id); pending.delete(m.id);
    const ok = m.result && m.result.action === 'accept';
    return send({ jsonrpc: '2.0', id: p.orig, result: ok
      ? { content: [{ type: 'text', text: `Đã bấm nút Lưu trong ${p.app}` }, { type: 'image', data: png(), mimeType: 'image/png' }] }
      : { content: [{ type: 'text', text: `Người dùng không cho dùng ${p.app}` }], isError: true } });
  }
  if (m.id !== undefined && m.method) send({ jsonrpc: '2.0', id: m.id, result: {} });
});
