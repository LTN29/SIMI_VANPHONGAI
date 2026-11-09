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
    action: { type: 'string', enum: ['click', 'double_click', 'type', 'fill', 'paste', 'upload', 'press', 'select', 'hover', 'scroll', 'wait', 'wait_download', 'back', 'forward'], description: 'type: bấm rồi gõ như người (chữ ngắn). fill: điền thẳng cả nội dung dài / HTML vào ô nhập, ô văn bản, vùng soạn thảo (nhanh, không cần bàn phím). paste: dán chữ / HTML như Ctrl+V nhưng không đụng clipboard của máy (trình soạn thảo bài viết, mô tả sản phẩm). upload: đưa tệp trong máy vào ô chọn tệp / nút Tải lên (không mở cửa sổ chọn tệp). scroll: cuộn đúng khung có thanh cuộn riêng dưới ref / x,y (hoặc cả trang); chỉ ref không kèm hướng = cuộn tới phần tử đó.' },
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
    html: { type: 'string', description: 'fill / paste: nội dung HTML (mô tả sản phẩm, bài viết có định dạng). fill với html=chuỗi HTML thì chèn như HTML.' },
    files: { type: 'array', items: { type: 'string' }, description: 'upload: đường dẫn tuyệt đối các tệp trên máy (ảnh sản phẩm, tài liệu…).' },
    to: { type: 'string', enum: ['top', 'bottom'], description: 'scroll: cuộn lên đầu / xuống cuối khung.' },
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
  { name: 'design_render', title: 'Xuất thiết kế thành ảnh', description: [
    'Thiết kế ảnh đẹp kiểu Claude Desktop: bạn viết 1 trang HTML / CSS / SVG đúng khổ ảnh, app dựng rồi xuất PNG / JPG (nét gấp 2) hoặc PDF, trả ảnh xem trước + cảnh báo chữ tràn để bạn tự soát. Dùng cho mọi ảnh có chữ / bố cục: poster, banner, bài đăng MXH, thumbnail, infographic, thiệp, menu, chứng nhận, slide ảnh, logo chữ, ảnh quảng cáo sản phẩm – chữ tiếng Việt luôn đúng dấu, đúng màu thương hiệu (model tạo ảnh hay viết sai chữ).',
    'Cách làm cho đẹp: 1 ý chính + 1 điểm nhấn lớn; lưới căn lề rõ, lề ≥ 6% cạnh; tối đa 2 font, 3–5 màu, tương phản chữ cao; tiêu đề to đậm, chữ phụ nhỏ hơn hẳn; khoảng trắng thoáng; trang trí bằng SVG inline / gradient / hình khối / hoạ tiết tự vẽ, không dùng ảnh mẫu giả hay lorem ipsum.',
    'Font Google có tiếng Việt (link fonts.googleapis.com/css2): Be Vietnam Pro, Montserrat, Inter, Lexend, Nunito, Roboto, Playfair Display, Lora, Noto Serif, Dancing Script, Pacifico, Bungee; luôn có font dự phòng (Arial, sans-serif).',
    'Ảnh chụp / tranh: ảnh có sẵn hoặc ảnh tạo bằng image_generate (không có chữ) → đặt làm nền / khung trong HTML bằng đường dẫn tuyệt đối (file:///C:/…) hoặc tên file cùng thư mục với file kết quả, rồi phủ chữ + hình khối lên.',
    'Khổ hay dùng (px): bài đăng 1080×1080 hoặc 1080×1350, story / reels 1080×1920, ảnh bìa Facebook 1640×624 (hoặc 820×312), thumbnail YouTube 1280×720, banner web 1920×600, slide 1920×1080, A4 dọc 794×1123 (xuất .pdf để in).',
    'Sau khi xuất: NHÌN ảnh xem trước, sửa chữ tràn / chồng / lệch / thiếu tương phản rồi render lại cùng đường dẫn (tối đa 3 vòng). Nhiều ảnh (carousel, bộ banner) thì gọi nhiều lần, mỗi ảnh 1 file.',
  ].join(' '), inputSchema: { type: 'object', properties: {
    html: { type: 'string', description: 'Trang HTML hoàn chỉnh (có <style>, <link> font Google, SVG…). Khung html/body tự đặt đúng width×height, overflow ẩn – thiết kế vừa khít khung.' },
    html_path: { type: 'string', description: 'Hoặc đường dẫn file .html đã viết sẵn (ảnh tương đối tính theo thư mục file đó).' },
    path: { type: 'string', description: 'File kết quả (đường dẫn tuyệt đối trong thư mục làm việc), đuôi .png / .jpg / .pdf.' },
    width: { type: 'integer', description: 'Rộng (px CSS), mặc định 1080.' },
    height: { type: 'integer', description: 'Cao (px CSS), mặc định 1080.' },
    scale: { type: 'number', description: 'Độ nét PNG / JPG (1–4, mặc định 2 → ảnh 2160px cho khung 1080).' },
    transparent: { type: 'boolean', description: 'PNG nền trong suốt (logo, sticker): body không đặt màu nền.' },
    wait_ms: { type: 'integer', description: 'Chờ thêm trước khi chụp (hiệu ứng CSS), mặc định 150.' },
  }, additionalProperties: false } },
  { name: 'document_create', title: 'Tạo file Word / Excel / PDF', description: [
    'Tạo file tài liệu từ nội dung bạn soạn bằng Markdown – chạy ngay trong app, KHÔNG cần Python / python-docx / openpyxl / PowerShell, tiếng Việt luôn đúng font. Đuôi của path quyết định định dạng: .docx (Word), .xlsx (Excel), .pdf (PDF khổ A4), .html, .csv, .txt, .md.',
    'Markdown: # / ## / ### tiêu đề, **đậm**, *nghiêng*, danh sách - hoặc 1., bảng | cột | cột | (dòng 2 là |---|). Word: tiêu đề + bảng kẻ viền, font Times New Roman. Excel: MỖI BẢNG Markdown thành 1 sheet (tên sheet = tiêu đề ## ngay trên bảng), dòng đầu là tên cột (tô màu, cố định, có lọc), số kiểu 1.250.000 / 2,5 thành ô số; không có bảng thì mỗi dòng 1 hàng.',
    'Dùng cho mọi yêu cầu "xuất / lưu / tạo file Word, Excel, PDF" từ nội dung bạn viết. Chỉ tự viết script khi phải SỬA file có sẵn mà giữ nguyên định dạng gốc, hoặc cần công thức Excel / mẫu riêng.',
  ].join(' '), inputSchema: { type: 'object', properties: {
    path: { type: 'string', description: 'Đường dẫn tuyệt đối file kết quả trong thư mục làm việc, có đuôi .docx / .xlsx / .pdf / .html / .csv / .txt / .md. Tên file tiếng Việt có dấu được.' },
    content: { type: 'string', description: 'Toàn bộ nội dung bằng Markdown.' },
    content_path: { type: 'string', description: 'Hoặc đường dẫn file .md đã viết sẵn (nội dung dài).' },
    title: { type: 'string', description: 'Tiêu đề tài liệu (Word thêm làm dòng tiêu đề nếu nội dung chưa mở đầu bằng #; Excel đặt tên sheet khi không có tiêu đề).' },
    overwrite: { type: 'boolean', description: 'Ghi đè nếu file đã có (mặc định true – sửa rồi tạo lại cùng đường dẫn). false: tự thêm (2), (3)… vào tên.' },
  }, required: ['path'], additionalProperties: false } },
  { name: 'browser_js', title: 'Chạy mã trong trang', description: 'Chạy JavaScript trong trang đang mở và trả kết quả (JSON) – đọc dữ liệu khó lấy (nội dung trình soạn thảo, bảng, giá trị ô, danh sách ảnh), kiểm tra trạng thái trang, hoặc thao tác DOM khi browser_act không làm được. Có thể dùng await; câu lệnh nhiều dòng thì dùng return. Chỉ làm việc trong trang, không gửi dữ liệu người dùng ra ngoài.', inputSchema: { type: 'object', properties: { code: { type: 'string' }, max_chars: { type: 'integer' } }, required: ['code'], additionalProperties: false } },
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
  if (m.method === 'initialize') return send({ jsonrpc: '2.0', id: m.id, result: { protocolVersion: (m.params && m.params.protocolVersion) || '2025-06-18', capabilities: { tools: {} }, serverInfo: { name: 'vp_browser', title: 'Trình duyệt cạnh chat (Văn Phòng AI)', version: '1.0.0' }, instructions: 'Trình duyệt nằm ngay cạnh khung chat, người dùng xem trực tiếp và đã đăng nhập sẵn các trang của họ. Quy trình: browser_open → đọc danh sách [eN] → browser_act gộp nhiều bước → xem kết quả trả về. Trang cần đăng nhập: nhờ người dùng tự đăng nhập trong khung rồi làm tiếp; không nhập mật khẩu thay họ. Người dùng có thể đang làm việc khác trên máy trong lúc bạn làm: MỌI thao tác với trang chỉ dùng công cụ browser_* (dán HTML → paste/fill, tải ảnh lên → upload, cuộn khung → scroll với ref, đọc dữ liệu khó → browser_js). TUYỆT ĐỐI không dùng PowerShell / lệnh hệ thống điều khiển chuột, bàn phím, clipboard (SendKeys, System.Windows.Forms, Set-Clipboard…), không dùng công cụ điều khiển máy / Computer Use cho trang này – sẽ giành chuột, phá việc người dùng đang làm. Đã được phép sẵn, không cần hỏi lại người dùng. Ngoài trình duyệt: document_create tạo file Word / Excel / PDF từ Markdown (không cần Python), design_render xuất ảnh thiết kế từ HTML.' } });
  if (m.method === 'tools/list') return send({ jsonrpc: '2.0', id: m.id, result: { tools: TOOLS } });
  if (m.method === 'tools/call') {
    try { send({ jsonrpc: '2.0', id: m.id, result: { content: await callApp(m.params.name, m.params.arguments || {}) } }); } catch (e) { send({ jsonrpc: '2.0', id: m.id, result: { content: [{ type: 'text', text: 'Lỗi: ' + e.message }], isError: true } }); }
    return;
  }
  if (m.method === 'ping') return send({ jsonrpc: '2.0', id: m.id, result: {} });
  if (m.id !== undefined && m.method) return send({ jsonrpc: '2.0', id: m.id, error: { code: -32601, message: 'Không hỗ trợ ' + m.method } });
});
