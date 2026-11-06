// MCP "vp_browser": AI trong tab Chat điều khiển trình duyệt nằm ngay cạnh khung chat của Văn Phòng AI.
// Chạy bằng chính file thực thi của app (ELECTRON_RUN_AS_NODE=1); mỗi lệnh gửi qua HTTP cục bộ (127.0.0.1 + token)
// tới app đang mở (src/browser/pane.js). App tắt → báo lỗi rõ ràng.
const fs = require('fs');
const http = require('http');
const readline = require('readline');

const CONN = process.env.VPB_CONN || '';
const ACT_ITEM = {
  type: 'object',
  properties: {
    action: { type: 'string', enum: ['click', 'double_click', 'type', 'press', 'select', 'hover', 'scroll', 'wait', 'wait_download', 'back', 'forward'] },
    ref: { type: 'string', description: 'Mã phần tử eN lấy từ browser_snapshot / kết quả lần trước.' },
    x: { type: 'number', description: 'Không có mã eN (canvas, ảnh…): toạ độ ngang trên ảnh browser_screenshot.' },
    y: { type: 'number', description: 'Toạ độ dọc trên ảnh browser_screenshot.' },
    text: { type: 'string', description: 'type: chữ cần gõ (tiếng Việt có dấu được). wait: chờ tới khi trang có chữ này.' },
    clear: { type: 'boolean', description: 'type: xoá chữ cũ trong ô trước khi gõ (mặc định true).' },
    submit: { type: 'boolean', description: 'type: nhấn Enter sau khi gõ.' },
    key: { type: 'string', description: 'press: Enter, Tab, Escape, ArrowDown, Backspace, Ctrl+A…' },
    value: { type: 'string', description: 'select: chữ hoặc giá trị lựa chọn.' },
    direction: { type: 'string', enum: ['up', 'down'] },
    amount: { type: 'number', description: 'scroll: số px (mặc định 600).' },
    ms: { type: 'number', description: 'wait: số mili giây (tối đa 10000; chờ chữ tối đa 15000). wait_download: chờ tối đa bao lâu (mặc định 60000).' },
  },
  required: ['action'],
  additionalProperties: false,
};
const TOOLS = [
  { name: 'browser_open', title: 'Mở trang', description: 'Mở một trang web (hoặc tìm Google nếu không phải địa chỉ) trong trình duyệt cạnh khung chat – người dùng thấy trực tiếp. Trả về tóm tắt trang + danh sách phần tử thao tác được [eN].', inputSchema: { type: 'object', properties: { url: { type: 'string' }, new_tab: { type: 'boolean' }, max_chars: { type: 'integer' } }, required: ['url'], additionalProperties: false } },
  { name: 'browser_snapshot', title: 'Xem trang', description: 'Đọc trang đang mở: tiêu đề, hộp thoại, danh sách nút / ô nhập / link có mã [eN], nội dung chính rút gọn. Nhanh và rẻ hơn ảnh chụp – dùng trước khi thao tác.', inputSchema: { type: 'object', properties: { full: { type: 'boolean', description: 'Lấy nhiều phần tử và chữ hơn.' }, max_chars: { type: 'integer' } }, additionalProperties: false } },
  { name: 'browser_act', title: 'Thao tác trang', description: 'Thực hiện liên tiếp nhiều thao tác như người thật (con trỏ SIMI di chuyển, bấm, gõ tiếng Việt, chọn, cuộn, nhấn phím, chờ, chờ tệp tải về – wait_download trả đường dẫn tệp trong thư mục Tải xuống) trong 1 lần gọi, rồi trả về trang sau khi làm. Gộp các bước biết trước (vd điền cả form rồi bấm Gửi) vào cùng một lần gọi.', inputSchema: { type: 'object', properties: { actions: { type: 'array', items: ACT_ITEM, minItems: 1, maxItems: 30 }, snapshot: { type: 'boolean', description: 'false: không trả lại trang sau khi làm.' }, max_chars: { type: 'integer' } }, required: ['actions'], additionalProperties: false } },
  { name: 'browser_read', title: 'Đọc chữ trang', description: 'Lấy toàn bộ chữ của trang đang mở (bài viết, bảng giá, kết quả tìm kiếm…).', inputSchema: { type: 'object', properties: { max_chars: { type: 'integer' } }, additionalProperties: false } },
  { name: 'browser_screenshot', title: 'Chụp trang', description: 'Ảnh chụp trang đang mở – chỉ dùng khi cần nhìn bố cục / hình ảnh (canvas, biểu đồ, captcha…); việc thường dùng browser_snapshot.', inputSchema: { type: 'object', properties: {}, additionalProperties: false } },
  { name: 'browser_tabs', title: 'Tab', description: 'Xem / mở / chuyển / đóng tab của trình duyệt cạnh chat.', inputSchema: { type: 'object', properties: { action: { type: 'string', enum: ['list', 'new', 'switch', 'close'] }, id: { type: 'string' }, url: { type: 'string' } }, additionalProperties: false } },
];

function callApp(tool, args) {
  let conn;
  try { conn = JSON.parse(fs.readFileSync(CONN, 'utf8')); } catch { return Promise.reject(new Error('Văn Phòng AI chưa mở trình duyệt cạnh chat (app đã tắt?). Mở lại app rồi thử lại.')); }
  const body = JSON.stringify({ tool, args });
  return new Promise((resolve, reject) => {
    const req = http.request({ host: '127.0.0.1', port: conn.port, path: '/call', method: 'POST', headers: { authorization: 'Bearer ' + conn.token, 'content-type': 'application/json', 'content-length': Buffer.byteLength(body) }, timeout: 170000 }, (res) => {
      let data = ''; res.setEncoding('utf8'); res.on('data', (c) => { data += c; });
      res.on('end', () => {
        if (res.statusCode !== 200) return reject(new Error('Trình duyệt của app từ chối lệnh (mở lại app rồi thử lại)'));
        let j; try { j = JSON.parse(data); } catch { return reject(new Error('Trình duyệt trả lời không hợp lệ')); }
        if (j.error) reject(new Error(j.error)); else resolve(j.content || []);
      });
    });
    req.on('timeout', () => req.destroy(new Error('Trình duyệt không phản hồi sau 170 giây')));
    req.on('error', (e) => reject(new Error(e.code === 'ECONNREFUSED' ? 'Văn Phòng AI đã tắt – mở lại app rồi thử lại.' : e.message)));
    req.end(body);
  });
}

const send = (m) => process.stdout.write(JSON.stringify(m) + '\n');
readline.createInterface({ input: process.stdin }).on('line', async (line) => {
  let m; try { m = JSON.parse(line); } catch { return; }
  if (m.method === 'initialize') return send({ jsonrpc: '2.0', id: m.id, result: { protocolVersion: (m.params && m.params.protocolVersion) || '2025-06-18', capabilities: { tools: {} }, serverInfo: { name: 'vp_browser', title: 'Trình duyệt cạnh chat (Văn Phòng AI)', version: '1.0.0' }, instructions: 'Trình duyệt nằm ngay cạnh khung chat, người dùng xem trực tiếp và đã đăng nhập sẵn các trang của họ. Quy trình: browser_open → đọc danh sách [eN] → browser_act gộp nhiều bước → xem kết quả trả về. Trang cần đăng nhập: nhờ người dùng tự đăng nhập trong khung rồi làm tiếp; không nhập mật khẩu thay họ. Mọi thao tác với trang trong khung này chỉ dùng các công cụ browser_* (phần tử không có mã thì browser_act với x, y lấy từ browser_screenshot) – KHÔNG dùng công cụ điều khiển máy / Computer Use cho trang này. Đã được phép sẵn, không cần hỏi lại người dùng.' } });
  if (m.method === 'tools/list') return send({ jsonrpc: '2.0', id: m.id, result: { tools: TOOLS } });
  if (m.method === 'tools/call') {
    try { send({ jsonrpc: '2.0', id: m.id, result: { content: await callApp(m.params.name, m.params.arguments || {}) } }); } catch (e) { send({ jsonrpc: '2.0', id: m.id, result: { content: [{ type: 'text', text: 'Lỗi: ' + e.message }], isError: true } }); }
    return;
  }
  if (m.method === 'ping') return send({ jsonrpc: '2.0', id: m.id, result: {} });
  if (m.id !== undefined && m.method) return send({ jsonrpc: '2.0', id: m.id, error: { code: -32601, message: 'Không hỗ trợ ' + m.method } });
});
