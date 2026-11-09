// Chat kiểu ChatGPT Work / Codex Desktop, chạy Codex ngầm (codex app-server) qua SIMI Gateway:
// mỗi đoạn chat = 1 phiên Codex (nhớ hội thoại), có skill, plugin (Computer Use…), MCP (trình duyệt SIMI), ảnh, file,
// và hỏi quyền ngay trong đoạn chat khi Codex cần làm việc ngoài phạm vi cho phép.
const fs = require('fs');
const os = require('os');
const path = require('path');
const simi = require('./simi');
const { computerUseStatus, computerGuide } = require('./computer-use');
const { vietFonts } = require('./sys');

const IMG_EXT = /\.(png|jpe?g|gif|webp|bmp)$/i;
const OUT_EXT = /\.(png|jpe?g|gif|webp|bmp|svg|mp4|mov|webm|mp3|wav|m4a|pdf|docx?|xlsx?|pptx?|csv|md|txt|html?|json|zip)$/i;
const MENTIONED_FILE = /(?:[A-Za-z]:\\|\/|\.{0,2}[\\/]?)?[^\s"'`<>|*?()[\]]+\.(?:png|jpe?g|gif|webp|svg|mp4|mov|webm|mp3|wav|pdf|docx?|xlsx?|pptx?|csv|md|html?|zip)\b/gi;
// cảnh báo vô hại của Codex, không hiện cho người dùng
const NOISE = /Model metadata for|was recorded with model|Consider switching back|could not create PATH aliases/i;
// lệnh bị sandbox chặn (hay gặp với skill cần mạng / ghi ngoài thư mục dự án, nhất là trên Windows)
const BLOCKED = /CreateRestrictedToken|sandbox (denied|error)|blocked by sandbox|Access is denied|Operation not permitted|EACCES|network (access )?(is )?(blocked|disabled|denied)|getaddrinfo|ENOTFOUND/i;
const CHAT_GUIDE = [
  'Bạn đang chạy trong app Văn Phòng AI. Thao tác máy tính diễn ra trên máy người dùng, không phải máy Gateway.',
  'Ưu tiên tốc độ: việc chỉ cần chữ (dịch, tóm tắt, viết lại, soạn thảo, giải thích, trả lời câu hỏi) thì trả lời thẳng ngay trong chat ở 1 lượt – không mở skill, không chạy lệnh, không tìm file, không tạo file trừ khi người dùng yêu cầu file. Ảnh và PDF đính kèm: đọc trực tiếp, không chạy OCR bằng script.',
  'Tìm web, đọc trang công khai, tạo / sửa ảnh, chép lời file ghi âm / video: gọi thẳng công cụ MCP simi_browser web_search / web_fetch / image_generate / audio_transcribe (mỗi việc 1 lần gọi, chạy ngoài sandbox) thay cho tự chạy khối lệnh trong skill hay tự viết code; chỉ dùng khối lệnh khi phiên không có các công cụ này.',
  'Tạo ảnh: image_generate tự chọn model ảnh theo model chat người dùng đang chọn (GPT → gpt-image, Gemini → Gemini). Muse (công cụ muse_image, skill muse-tao-anh) CHỈ dùng khi người dùng chọn skill Muse hoặc ghi đích danh chữ "Muse"; image_generate lỗi thì báo người dùng, không tự chuyển sang Muse.',
  'Chỉnh ảnh có sẵn mà phải giữ đúng chi tiết (làm nét, chỉnh sáng / màu, cắt, xoay, xoá / viết lại chữ, logo bị mờ, che vùng, chèn logo): dùng simi_browser image_retouch (vài giây, chạy trên máy), không dùng model tạo ảnh (vẽ lại cả ảnh, chậm, sai chi tiết) và không tự viết script Python.',
  'Ảnh có chữ / bố cục (poster, banner, bài đăng MXH, thumbnail, infographic, thiệp, menu, chứng nhận, logo chữ, ảnh quảng cáo): ưu tiên tự thiết kế bằng HTML / CSS / SVG rồi gọi vp_browser design_render (chữ tiếng Việt đúng 100%, nét, đúng màu, sửa được) – xem ảnh xem trước, chỉnh tới khi đẹp. Cần ảnh chụp / tranh vẽ chân thực thì image_generate tạo phần ảnh KHÔNG chữ rồi đặt làm nền trong HTML và phủ chữ bằng design_render.',
  'Tạo ảnh: viết prompt tiếng Anh chi tiết (chủ thể, bố cục, phong cách, ánh sáng, màu; chữ trong ảnh giữ tiếng Việt trong ngoặc kép, thật ngắn) – yêu cầu chung chung thì tự bổ sung chi tiết cho đẹp, không chuyển nguyên câu ngắn của người dùng.',
  'Thao tác trên trang web (mở trang cho người dùng xem, điền form, đăng / sửa nội dung, bấm nút, trang cần đăng nhập): ưu tiên MCP vp_browser khi có – trình duyệt hiện ngay cạnh khung chat, người dùng nhìn thấy và đã đăng nhập sẵn. Quy trình: browser_open → đọc danh sách [eN] → browser_act gộp nhiều bước (gõ, chọn, bấm) trong 1 lần gọi → xem trang trả về; chỉ browser_screenshot khi cần nhìn hình; phần tử không có mã thì browser_act click theo x, y trên ảnh đó. Trang đang mở trong khung này TUYỆT ĐỐI không dùng vp_computer / Computer Use, và không chạy lệnh PowerShell / hệ thống điều khiển chuột, bàn phím, clipboard (SendKeys, System.Windows.Forms, Set-Clipboard, mouse_event…) – người dùng đang làm việc khác trên máy, giành chuột / clipboard sẽ làm hỏng việc của họ và của bạn. Thay vào đó: nội dung dài / HTML → browser_act fill hoặc paste (không đụng clipboard); ảnh / tệp → upload {ref, files}; vùng có thanh cuộn riêng → scroll với ref; đọc dữ liệu khó (trình soạn thảo, bảng) → browser_js. Trang đòi đăng nhập / mã OTP / captcha: dừng lại nhờ người dùng tự làm trong khung trình duyệt rồi làm tiếp, không tự nhập mật khẩu. Trước khi bấm nút gửi / đăng / thanh toán / xoá thật: hỏi người dùng xác nhận trừ khi họ đã yêu cầu rõ.',
  'Canva (thiết kế, poster, banner, slide, bài đăng MXH theo mẫu Canva): làm bằng vp_browser trên https://www.canva.com – người dùng đăng nhập Canva sẵn trong khung trình duyệt. Chưa đăng nhập → nhờ họ bấm 🎨 Canva trên khung trình duyệt và đăng nhập (nếu Google chặn đăng nhập trong app thì dùng email + mã Canva gửi về). Cách làm nhanh: tìm mẫu bằng ô tìm kiếm của Canva → mở mẫu → sửa chữ (double_click khối chữ, Ctrl+A rồi gõ) → đổi ảnh / màu khi được yêu cầu → Chia sẻ → Tải xuống (chọn PNG / PDF / MP4) → browser_act wait_download lấy đường dẫn tệp và báo cho người dùng. Gửi kèm link thiết kế (URL đang mở) để họ tự chỉnh tiếp.',
  'Khi không có vp_browser: việc trên trang web dùng MCP simi_browser khi có – browser_snapshot rồi browser_act gộp nhiều bước trong 1 lần gọi; nhanh hơn nhiều so với điều khiển bằng ảnh chụp màn hình. Chỉ dùng vp_computer / Computer Use cho ứng dụng ngoài trình duyệt, hoặc khi simi_browser không làm được (trang vẽ bằng canvas, kéo thả phức tạp). Không nhầm lỗi browser access host của công cụ trình duyệt với runtime @oai/sky điều khiển Windows.',
].join('\n');
// thư mục nháp: file trung gian của AI (ảnh ghép khung hình, ảnh thử, script tạm…) để ngoài thư mục làm việc của người dùng
const SCRATCH = path.join(os.tmpdir(), 'vanphong-ai-nhap');
// không coi là file kết quả: file nháp (_x, ~$x), thư mục nháp, ảnh người dùng gửi (lưu trong dữ liệu app)
const SCRATCH_NAME = /^(?:_|~\$|\.)/;
const SCRATCH_DIR = /[\\/](?:tmp|temp|_tmp|scratch|nhap|_nhap|__pycache__)[\\/]/i;

// cách tạo file tài liệu tiếng Việt không lỗi font (lỗi hay gặp: PDF dùng font có sẵn Helvetica/Times → ô vuông,
// chữ dấu tách rời NFD → mất dấu, CSV không BOM → Excel hiện "Há»� tÃªn", PowerShell Set-Content/Out-File → ? hoặc UTF-16)
// Claude không có model tạo ảnh riêng: ảnh "xịn" như Claude Desktop là ảnh tự thiết kế bằng code rồi xuất ra
const CLAUDE_DESIGN = [
  'Bạn là Claude: tạo ảnh / thiết kế theo cách của Claude Desktop – tự thiết kế bằng HTML / CSS / SVG (có thể cả hoạ tiết, minh hoạ vector, biểu đồ) rồi xuất bằng vp_browser design_render, không chuyển việc cho model tạo ảnh khi ảnh chủ yếu là chữ, bố cục, đồ hoạ phẳng, biểu tượng, sơ đồ.',
  'Làm như nhà thiết kế: chốt mục đích + người xem + khổ ảnh; chọn 1 phong cách rõ ràng hợp chủ đề (tối giản, sang trọng, trẻ trung, Tết, công nghệ…); bảng màu 3–5 màu có màu thương hiệu nếu biết; cặp font tiêu đề / nội dung; dựng bố cục lưới; thêm chi tiết đồ hoạ SVG tự vẽ cho có chiều sâu (bóng đổ mềm, gradient, hình khối, hoạ tiết nền nhẹ).',
  'Xuất xong luôn nhìn ảnh xem trước và tự chấm như giám khảo thiết kế (căn lề, cân đối, cỡ chữ, tương phản, khoảng trắng, chữ đúng dấu) → sửa → xuất lại cùng file; chỉ báo xong khi ảnh thật sự đẹp. Người dùng không nói khổ thì chọn khổ hợp nơi đăng và nói rõ.',
  'Chỉ dùng image_generate cho phần ảnh chụp / tranh vẽ chân thực (người, sản phẩm thật, phong cảnh) – prompt tiếng Anh, không chữ – rồi ghép vào thiết kế HTML.',
].join('\n');

function docGuide(f = {}) {
  const font = (label, p) => (p ? `${label}: ${p}` : '');
  const have = [font('chữ thường', f.sans), font('chữ đậm', f.sansBold), font('kiểu Times', f.serif), font('Times đậm', f.serifBold)].filter(Boolean);
  return [
    'File nháp / trung gian (ảnh ghép khung hình, ảnh thử, file tạm, script dùng 1 lần): lưu vào ' + SCRATCH + ', KHÔNG lưu vào thư mục làm việc và không đưa vào câu trả lời. Thư mục làm việc chỉ chứa file kết quả người dùng cần.',
    'Tạo file tài liệu tiếng Việt (bắt buộc, tránh lỗi font):',
    '- Chuẩn hoá mọi chữ về Unicode NFC trước khi ghi (Python: unicodedata.normalize("NFC", s)); không dùng font/bảng mã VNI, TCVN3 (.VnTime).',
    '- PDF: KHÔNG dùng font có sẵn của thư viện (Helvetica, Times-Roman, Courier, font mặc định của fpdf / pdfkit / jsPDF) vì không có chữ tiếng Việt → ô vuông. Phải nhúng font TrueType' + (have.length ? ' có sẵn trên máy này – ' + have.join('; ') : ' hỗ trợ tiếng Việt (Arial, Times New Roman, DejaVu Sans, Noto Sans)') + '. reportlab: pdfmetrics.registerFont(TTFont("VN", đường_dẫn)) rồi dùng "VN" cho mọi đoạn chữ (cả bảng, tiêu đề). Hoặc tạo .docx/.html rồi chuyển sang PDF bằng Word / LibreOffice / Chrome.',
    '- Word (.docx, python-docx): đặt font cho style Normal và tiêu đề (Times New Roman hoặc Arial), gán cả w:eastAsia và w:cs trong rFonts, ngôn ngữ vi-VN.',
    '- Ảnh / biểu đồ có chữ (PIL, matplotlib): chỉ định đúng file font ở trên (PIL ImageFont.truetype, matplotlib rcParams["font.family"]).',
    '- CSV cho Excel: ghi UTF-8 có BOM (Python encoding="utf-8-sig"). File .txt/.md/.html/.json: UTF-8, HTML có <meta charset="utf-8">.',
    '- PowerShell: ghi file bằng -Encoding utf8 (không dùng > / Out-File / Set-Content mặc định).',
    '- Tạo xong thì tự kiểm tra: đọc lại chữ trong file (PDF: trích chữ hoặc xem ảnh trang đầu) để chắc tiếng Việt hiện đúng rồi mới báo xong.',
  ].join('\n');
}
// gợi ý kèm tin nhắn khi người dùng gọi @ (người dùng đã chọn rõ công cụ → ưu tiên đúng công cụ đó)
const TOOL_HINT = {
  vp_computer: 'Người dùng chọn @Máy tính: dùng công cụ điều khiển máy tính vp_computer của Văn Phòng AI cho yêu cầu này (screenshot trước, rồi bấm / gõ / cuộn theo toạ độ trên ảnh).',
  vp_browser: 'Người dùng chọn @Trình duyệt: dùng MCP vp_browser (trình duyệt cạnh khung chat) cho yêu cầu này – browser_open rồi browser_act gộp nhiều bước.',
  canva_web: 'Người dùng chọn @Canva: làm trên Canva bằng MCP vp_browser (trình duyệt cạnh khung chat) – xem hướng dẫn Canva.',
  simi_browser: 'Người dùng chọn @Trình duyệt SIMI: dùng MCP simi_browser cho yêu cầu này (browser_snapshot + browser_act để thao tác trên trang).',
};
const PLUGIN_HINT = (m) => (/computer-use/.test(m.id) ? 'Người dùng chọn plugin Computer Use OpenAI: dùng node_repl + @oai/sky theo skill computer-use cho yêu cầu này.' : `Người dùng gọi plugin ${m.name}: dùng plugin này cho yêu cầu.`);
const BROWSER_HOST = /browser access host|browser[- ]host is unavailable/i;
const NO_CODEX = 'Máy chưa có Codex. Bấm "Cài đặt SIMI", dán key team – app tự cài Codex, không cần PowerShell.';
const STOPPED = 'Đã dừng';
const STOP_GRACE_MS = 4000; // bấm Dừng mà Codex chưa ngắt được lượt sau chừng này → app tự kết thúc lượt

class ChatStore {
  constructor(dir) {
    this.dir = path.join(dir, 'chats');
    this.files = path.join(dir, 'chat-files');
    fs.mkdirSync(this.dir, { recursive: true });
    fs.mkdirSync(this.files, { recursive: true });
  }
  file(id) { if (!/^[a-z0-9]+$/i.test(id)) throw new Error('Mã đoạn chat không hợp lệ'); return path.join(this.dir, id + '.json'); }
  get(id) { try { return JSON.parse(fs.readFileSync(this.file(id), 'utf8')); } catch { return null; } }
  save(t) {
    t.updatedAt = Date.now();
    const f = this.file(t.id); const tmp = f + '.tmp';
    fs.writeFileSync(tmp, JSON.stringify(t), 'utf8'); fs.renameSync(tmp, f);
    return t;
  }
  list() {
    const out = [];
    for (const f of fs.readdirSync(this.dir)) {
      if (!f.endsWith('.json')) continue;
      try {
        const t = JSON.parse(fs.readFileSync(path.join(this.dir, f), 'utf8'));
        out.push({ id: t.id, title: t.title, project: t.project, cwd: t.cwd || '', agentId: t.agentId || null, model: t.model, updatedAt: t.updatedAt, pinned: !!t.pinned, archived: !!t.archived, n: (t.messages || []).length, codexThread: t.codexThread || null, origin: t.origin || 'app' });
      } catch { /* bỏ file hỏng */ }
    }
    return out.sort((a, b) => (b.pinned - a.pinned) || b.updatedAt - a.updatedAt);
  }
  remove(id) { try { fs.unlinkSync(this.file(id)); } catch { /* đã xóa */ } }
  hidden() { try { return new Set(JSON.parse(fs.readFileSync(path.join(this.dir, '_hidden.list'), 'utf8'))); } catch { return new Set(); } }
  hide(codexId) { const h = this.hidden(); h.add(codexId); fs.writeFileSync(path.join(this.dir, '_hidden.list'), JSON.stringify([...h])); }
}

// liệt kê file trong thư mục dự án để phát hiện file mới/vừa sửa sau mỗi lượt
function snapshot(dir, limit = 4000) {
  const map = new Map();
  const walk = (d, depth) => {
    if (map.size > limit || depth > 3) return;
    let ents = []; try { ents = fs.readdirSync(d, { withFileTypes: true }); } catch { return; }
    for (const e of ents) {
      if (e.name.startsWith('.') || e.name === 'node_modules' || e.name === '__pycache__') continue;
      const p = path.join(d, e.name);
      if (e.isDirectory()) walk(p, depth + 1);
      else if (OUT_EXT.test(e.name)) { try { map.set(p, fs.statSync(p).mtimeMs); } catch { /* bỏ qua */ } }
    }
  };
  walk(dir, 0);
  return map;
}

// Một bước công cụ → khối hiển thị. Nhận cả JSON của `codex exec --json` (command_execution, aggregated_output…)
// lẫn lịch sử từ app-server (commandExecution, aggregatedOutput…).
const snake = (t) => String(t || '').replace(/[A-Z]/g, (m) => '_' + m.toLowerCase());
const STATUS = { inProgress: 'in_progress', in_progress: 'in_progress', failed: 'failed', declined: 'failed' };
function stepFromItem(it) {
  const status = STATUS[it.status] || 'completed';
  switch (snake(it.type)) {
    case 'command_execution':
      return { sk: 'cmd', title: shownCmd(it.command) || 'Chạy lệnh', output: String(it.aggregated_output ?? it.aggregatedOutput ?? '').slice(-4000), exit: it.exit_code ?? it.exitCode, status };
    case 'mcp_tool_call':
    case 'dynamic_tool_call':
      return { sk: 'tool', server: it.server || it.namespace || '', title: [TOOL_SHORT[it.server] || it.server || it.namespace, it.server === VPC ? vpcLabel(it.tool, it.arguments) : it.tool === 'design_render' ? '🎨 Xuất thiết kế ' + String((it.arguments && it.arguments.path) || '').split(/[\\/]/).pop() : it.tool].filter(Boolean).join(' · ') || 'Công cụ', output: it.error ? String(it.error.message || JSON.stringify(it.error)).slice(0, 800) : '', status: it.error ? 'failed' : status, ...(it.tool === 'design_render' && !it.error && status === 'completed' && it.arguments && it.arguments.path ? { files: [String(it.arguments.path)] } : {}) };
    case 'web_search':
      return { sk: 'web', title: it.query || 'Tìm trên web', status };
    case 'file_change': {
      const kind = (c) => (typeof c.kind === 'string' ? c.kind : c.kind && c.kind.type);
      const changes = it.changes || [];
      return { sk: 'file', title: changes.map((c) => `${kind(c) === 'add' ? '+' : kind(c) === 'delete' ? '−' : '~'} ${path.basename(c.path || '')}`).join(', ') || 'Sửa file', files: changes.map((c) => c.path), status };
    }
    case 'reasoning': {
      const text = it.text || [...(it.summary || []), ...(it.content || [])].join('\n');
      return text.trim() ? { sk: 'think', title: 'Suy nghĩ', output: text.slice(0, 4000), status: 'completed' } : null;
    }
    case 'todo_list':
      return { sk: 'plan', title: 'Kế hoạch', items: (it.items || []).map((x) => ({ text: x.text, done: !!x.completed })), status: 'completed' };
    case 'plan':
      return { sk: 'plan', title: 'Kế hoạch', items: String(it.text || '').split(/\r?\n/).filter((l) => l.trim()).map((l) => ({ text: l.replace(/^\s*[-*\d.)]+\s*/, ''), done: false })), status: 'completed' };
    case 'image_generation':
      return { sk: 'tool', title: 'Tạo ảnh' + (it.revisedPrompt ? ': ' + it.revisedPrompt.slice(0, 80) : ''), files: it.savedPath ? [it.savedPath] : [], status };
    default:
      return null;
  }
}

// lệnh hiện cho người dùng: bỏ lớp vỏ shell Codex bọc ngoài (/bin/bash -lc '…', powershell -Command "…") cho dễ đọc
function shownCmd(c) {
  const s = String(c || '').trim();
  const m = s.match(/^(?:\/(?:usr\/)?bin\/)?(?:ba|z)?sh\s+-l?c\s+(['"])([\s\S]*)\1$/) ||
    s.match(/^"?[^"]*?(?:powershell|pwsh)(?:\.exe)?"?\s+(?:-\w+\s+)*?-(?:Command|c)\s+(['"])([\s\S]*)\1$/i);
  return m ? m[2] : s;
}

// mô tả ngắn 1 thao tác điều khiển máy: "Bấm (640, 400)", "Gõ: xin chào"…
function vpcLabel(tool, a) {
  a = a || {};
  const xy = (x, y) => (x !== undefined && y !== undefined ? ` (${x}, ${y})` : '');
  switch (tool) {
    case 'list_windows': return 'Xem danh sách cửa sổ';
    case 'focus_window': return 'Chọn cửa sổ ' + (a.window_id || '');
    case 'screenshot': return 'Chụp màn hình';
    case 'click': return (a.double ? 'Bấm đúp' : a.button === 'right' ? 'Bấm chuột phải' : 'Bấm') + xy(a.x, a.y);
    case 'move': return 'Di chuột' + xy(a.x, a.y);
    case 'drag': return 'Kéo thả' + xy(a.from_x, a.from_y) + ' →' + xy(a.to_x, a.to_y);
    case 'scroll': return (Number(a.amount) < 0 ? 'Cuộn lên' : 'Cuộn xuống') + xy(a.x, a.y);
    case 'type_text': return 'Gõ: ' + String(a.text || '').replace(/\s+/g, ' ').slice(0, 60);
    case 'press_keys': return 'Phím ' + (a.keys || '');
    case 'open': return 'Mở ' + (a.target || '');
    case 'wait': return `Chờ ${a.seconds || 1} giây`;
    default: return tool || '';
  }
}

// tiêu đề đoạn chat từ tin nhắn đầu: bỏ mã skill ($simi-...), viết hoa chữ đầu
function titleFrom(text) {
  const plain = text.replace(/\$[\w-]+/g, ' ').replace(/\s+/g, ' ').trim();
  const skill = (text.match(/\$([\w-]+)/) || [])[1];
  const t = (plain || (skill ? 'Skill ' + skill : 'Đoạn chat')).slice(0, 60);
  return t.charAt(0).toUpperCase() + t.slice(1);
}

// ---------- ⚡ trả lời nhanh ----------
const ESCALATE = Symbol('escalate');
const ESCALATE_MARK = '[[CAN_CONG_CU]]';
const FAST_GUIDE = [
  'Bạn là trợ lý AI SIMI trong app Văn Phòng AI. Trả lời bằng tiếng Việt (trừ khi người dùng yêu cầu khác), rõ ràng, đi thẳng vào việc, dùng Markdown khi hợp.',
  'Ở chế độ này bạn KHÔNG có công cụ: không đọc / ghi file trên máy, không mở web, không chạy lệnh, không điều khiển máy tính hay trình duyệt, không tạo ảnh / video.',
  `Nếu muốn làm đúng yêu cầu mà cần một trong các việc đó – tạo, sửa, lưu hoặc xuất file (Word, Excel, PDF, ảnh…), đọc file chưa được đính kèm, mở trang web hay link, tra thông tin mới / thời sự / giá cả hiện tại, chạy lệnh, điều khiển máy, tạo ảnh / video, hoặc người dùng gọi skill – thì chỉ trả lời đúng một dòng: ${ESCALATE_MARK} và không viết gì thêm.`,
  'Ảnh đính kèm: đọc trực tiếp. Dịch, tóm tắt, viết lại, soạn thảo, giải thích, tính toán, trả lời câu hỏi: trả lời luôn.',
].join('\n');
const FAST_FIRST_BYTE_MS = Number(process.env.VP_FAST_FIRST_BYTE_MS) || 45000; // chờ Gateway / model bắt đầu phản hồi
const FAST_IDLE_MS = Number(process.env.VP_FAST_IDLE_MS) || 60000; // đang trả lời mà im lặng quá lâu
// model chat chuyên vẽ ảnh (vd muse-image-chat): vẽ xong mới trả về → im lặng lâu là bình thường
const IMAGE_CHAT = /image|muse/i;
const IMAGE_WAIT_MS = Number(process.env.VP_IMAGE_WAIT_MS) || 240000;
// báo cho công cụ tạo ảnh (image_generate) biết model chat người dùng ĐANG chọn → ảnh đi theo đúng hãng (GPT / Gemini…)
function noteChatModel(model) {
  if (!model) return;
  try {
    const home = process.env.CODEX_HOME || path.join(os.homedir(), '.codex');
    fs.mkdirSync(home, { recursive: true });
    fs.writeFileSync(path.join(home, 'ltn-chat-model.json'), JSON.stringify({ model, at: Date.now() }));
  } catch { /* không ghi được thì công cụ ảnh tự đoán như cũ */ }
}
const FAST_FILE_OK = /\.(png|jpe?g|webp|gif)$/i;
// gọi skill: $simi-tao-anh (cách app chèn) hoặc /simi-tao-anh
const SKILL_CALL = /(^|\s)[/$][a-z][a-z0-9-]{1,40}(\s|$)/i;

// việc rõ ràng cần công cụ (file, web, ảnh, máy tính, tin mới) → đi Codex ngay, không chờ model tự báo
const TOOL_INTENT = /https?:\/\/|www\.|\.(com|vn|net|org)\b|\b(file|tệp|thư mục|folder|excel|word|docx|xlsx|pptx|powerpoint|pdf|csv|slide)\b|(tạo|vẽ|thiết kế|sửa|chỉnh|xóa phông|tách nền)\s+(cái |một |1 )?(ảnh|hình|logo|banner|poster|video|clip)|(mở|vào|truy cập|đọc)\s+(trang|web|link|website|trình duyệt|gmail|facebook|zalo)|tìm (trên|kiếm trên|trên) (mạng|google|web|internet)|tra cứu|tin tức|mới nhất|thời tiết|tỷ giá|giá (vàng|xăng|usd|đô|bitcoin|cổ phiếu)|chạy (lệnh|code|script)|cài (đặt|app|phần mềm)|điều khiển|màn hình|(gửi|soạn và gửi) (email|mail|tin)|lưu (lại|vào|thành)|xuất (ra|file|thành)|tải (về|xuống|lên)|đăng (bài|lên)|(^|\s)vẽ(\s|$)|\b(logo|poster|banner|thumbnail|mp3|m4a|wav|audio)\b|ghi âm|chép lời|gỡ băng|phụ đề|thu âm|file âm thanh|(làm|cho)( cho)? (nét|rõ|sáng|đẹp)|nét hơn|xo[áa] (chữ|logo|phông|nền|vết)|ghép (ảnh|logo)|cắt (ảnh|hình)|chỉnh màu|trang (này|đang mở)|(bấm|nhấn|click|điền|chọn) (vào |nút|ô |form|link|đường dẫn)|đăng nhập|trình duyệt/i;
// lượt trước vừa làm việc bằng công cụ mà tin mới ngắn ("làm tiếp", "sửa lại chỗ đó", "ok") → tiếp tục bằng Codex
const toolFollowUp = (t, text) => {
  const prev = t.messages.slice(0, -2).filter((m) => m.role === 'assistant').pop();
  return !!prev && !prev.fast && (prev.blocks || []).some((b) => b.kind === 'step') && text.length < 160;
};
const intentText = (text) => (text.length > 500 ? text.slice(0, 300) + '\n' + text.slice(-200) : text); // lệnh thường ở đầu / cuối, giữa là nội dung dán vào

// đủ điều kiện trả lời nhanh – tự quyết định, user không phải chỉnh gì: không gọi skill / @công cụ, chỉ đính kèm ảnh,
// không phải việc rõ ràng cần công cụ, không phải câu nối tiếp một việc đang làm bằng công cụ
function fastEligible(t, text, atts, ments) {
  if (t.origin === 'codex') return false; // đoạn chat mở từ ChatGPT Work: luôn ghi vào cùng phiên Codex để hai bên khớp nhau
  if (ments.length || SKILL_CALL.test(text) || text.length > 20000) return false;
  if (TOOL_INTENT.test(intentText(text)) || toolFollowUp(t, text)) return false;
  if (atts.some((a) => !FAST_FILE_OK.test(a.path))) return false;
  return atts.filter((a) => a.image).every((a) => { try { return fs.statSync(a.path).size < 8e6; } catch { return false; } });
}

const blockText = (m) => (m.role === 'user' ? m.text || '' : (m.blocks || []).filter((b) => b.kind === 'text').map((b) => b.text).join('\n')).trim();

function fastRequest(t, model, text, atts, persona) {
  const input = []; let budget = 60000;
  const past = t.messages.slice(0, -2).filter((m) => m.role === 'user' || m.status === 'done').slice(-24);
  for (const m of past.reverse()) {
    const txt = blockText(m).slice(0, 8000);
    if (!txt) continue;
    if ((budget -= txt.length) < 0) break;
    input.unshift(m.role === 'user' ? { role: 'user', content: [{ type: 'input_text', text: txt }] } : { role: 'assistant', content: [{ type: 'output_text', text: txt }] });
  }
  const content = [{ type: 'input_text', text }];
  for (const a of atts.filter((x) => x.image).slice(0, 4)) {
    const ext = path.extname(a.path).slice(1).toLowerCase().replace('jpg', 'jpeg');
    content.push({ type: 'input_image', image_url: `data:image/${ext};base64,${fs.readFileSync(a.path).toString('base64')}` });
  }
  input.push({ role: 'user', content });
  return { model, instructions: FAST_GUIDE + (persona ? `\n\n${persona}` : ''), input, stream: true, store: false, prompt_cache_key: `vp-fast-${t.id}`, ...(t.effort ? { reasoning: { effort: t.effort } } : {}) };
}

// trao đổi nhanh sau lượt Codex cuối cùng → kèm vào lời nhắn gửi Codex
function withFastHistory(t, prompt) {
  const msgs = t.messages.slice(0, -2);
  let lastCodex = -1;
  msgs.forEach((m, i) => { if (m.role === 'assistant' && !m.fast) lastCodex = i; });
  const extra = msgs.slice(lastCodex + 1).filter((m) => m.role === 'user' || m.fast);
  if (!extra.some((m) => m.fast)) return prompt;
  const lines = extra.map((m) => `${m.role === 'user' ? 'Người dùng' : 'Trợ lý'}: ${blockText(m).slice(0, 3000)}`).join('\n\n').slice(-12000);
  return `(Trao đổi gần đây trong đoạn chat này, trả lời nhanh không qua công cụ:)\n${lines}\n\n---\n\n${prompt}`;
}

function buildPrompt(t, text, atts, persona) {
  let prompt = text;
  const files = atts.filter((a) => !a.image);
  if (files.length) prompt += `\n\nTệp đính kèm (đọc trực tiếp từ đường dẫn):\n${files.map((a) => `- ${a.path}`).join('\n')}`;
  if (persona) prompt = `${persona}\n\n---\n\n${prompt}`;
  if (t.codexThread) return prompt; // phiên cũ đã có hướng dẫn chung
  return prompt + '\n\n(Trả lời bằng tiếng Việt, trừ khi người dùng yêu cầu khác. Nếu tạo file, lưu vào thư mục làm việc hiện tại và nêu đường dẫn.)';
}

// file kết quả: mới / vừa sửa trong thư mục dự án, file Codex báo đã sửa, file được nhắc tới trong câu trả lời
// file nháp của AI / file tạm của Office → không hiện thành file kết quả
function isScratch(p, base) {
  const r = path.resolve(p);
  if (SCRATCH_NAME.test(path.basename(r)) || underPath(SCRATCH, r)) return true;
  if (!base || !underPath(base, r)) return false;
  return SCRATCH_DIR.test(path.sep + path.relative(base, r)); // chỉ xét thư mục con trong thư mục làm việc
}

function collectFiles(dir, before, t0, blocks) {
  const files = new Set();
  if (before) for (const [p, m] of snapshot(dir)) if ((!before.has(p) || before.get(p) < m) && m >= t0 - 2000) files.add(p);
  const add = (f) => { const p = path.resolve(dir, f); try { if (fs.statSync(p).isFile()) files.add(p); } catch { /* không tồn tại */ } };
  for (const b of blocks) if (b.files) b.files.forEach(add);
  const txt = blocks.filter((b) => b.kind === 'text').map((b) => b.text).join('\n');
  (txt.match(MENTIONED_FILE) || []).forEach(add);
  return [...files].filter((p) => !isScratch(p, dir)).slice(0, 24).map((p) => ({ path: p, name: path.basename(p), image: IMG_EXT.test(p) }));
}

// ---------- lịch sử từ Codex (ChatGPT Work) ----------
const PERSONA_SPLIT = '\n\n---\n\n';
const OUR_HINT = /\n\n\(Trả lời bằng tiếng Việt, trừ khi người dùng yêu cầu khác\.[^)]*\)\s*$/;
// bỏ phần vai trò + hướng dẫn mà app tự chèn vào tin nhắn đầu
function cleanUserText(text) {
  let t = String(text || '').replace(OUR_HINT, '').replace(/\n\n\(Người dùng (?:chọn|gọi) [^)]*\)\s*$/, '');
  if (/^Bạn là .+ trong Văn Phòng AI\./.test(t) && t.includes(PERSONA_SPLIT)) t = t.slice(t.indexOf(PERSONA_SPLIT) + PERSONA_SPLIT.length);
  return t.replace(/\n\nTệp đính kèm \(đọc trực tiếp từ đường dẫn\):\n(- .+\n?)+$/, '').trim();
}

const normPath = (p) => { const r = path.resolve(String(p || '')).replace(/[\\/]+$/, ''); return process.platform === 'win32' ? r.toLowerCase() : r; };
const samePath = (a, b) => normPath(a) === normPath(b);
const underPath = (base, p) => normPath(p) === normPath(base) || normPath(p).startsWith(normPath(base) + path.sep);

// ---- dự án & đoạn chat ghim của ChatGPT Work (Codex desktop) – để danh sách chat trong app chia nhóm giống Codex ----
const codexHome = () => process.env.CODEX_HOME || path.join(os.homedir(), '.codex');
let uiCache = { at: 0, mtime: -1, v: null };
function codexUiState() {
  const file = path.join(codexHome(), '.codex-global-state.json');
  let st = null; try { st = fs.statSync(file); } catch { /* chưa có Codex desktop */ }
  if (uiCache.v && (st ? st.mtimeMs : 0) === uiCache.mtime) return uiCache.v;
  const v = { ok: false, projects: [], pinned: new Set() };
  let j = null;
  try { j = st ? JSON.parse(fs.readFileSync(file, 'utf8')) : null; } catch { j = null; }
  if (j && typeof j === 'object') {
    v.ok = true;
    const lp = j['local-projects'];
    if (lp && typeof lp === 'object') { // bản mới: { id: { name, rootPaths } } + project-order
      const order = Array.isArray(j['project-order']) ? j['project-order'].filter((id) => lp[id]) : [];
      for (const id of [...order, ...Object.keys(lp).filter((id) => !order.includes(id))]) {
        const p = lp[id] || {}; const roots = (Array.isArray(p.rootPaths) ? p.rootPaths : []).filter((x) => typeof x === 'string' && x);
        if (roots.length) v.projects.push({ name: String(p.name || path.basename(roots[0])).slice(0, 80), dir: roots[0], roots });
      }
    }
    if (!v.projects.length) { // bản cũ: danh sách thư mục đã mở
      const labels = j['electron-workspace-root-labels'] && typeof j['electron-workspace-root-labels'] === 'object' ? j['electron-workspace-root-labels'] : {};
      const roots = [...(Array.isArray(j['electron-saved-workspace-roots']) ? j['electron-saved-workspace-roots'] : []), ...(Array.isArray(j['active-workspace-roots']) ? j['active-workspace-roots'] : [])];
      for (const r of roots) if (typeof r === 'string' && r && !v.projects.some((p) => samePath(p.dir, r))) v.projects.push({ name: String(labels[r] || path.basename(r)).slice(0, 80), dir: r, roots: [r] });
    }
    // đoạn chat ghim: tên khoá khác nhau giữa các bản → nhận mọi khoá có chữ "pinned" chứa id đoạn chat
    for (const [k, val] of Object.entries(j)) {
      if (!/pinned/i.test(k)) continue;
      const ids = Array.isArray(val) ? val : val && typeof val === 'object' ? Object.keys(val).filter((x) => val[x]) : [];
      for (const x of ids) if (typeof x === 'string' && /^[0-9a-f-]{16,}$/i.test(x)) v.pinned.add(x.toLowerCase());
    }
  }
  uiCache = { at: Date.now(), mtime: st ? st.mtimeMs : 0, v };
  return v;
}
// thư mục nháp Codex tự tạo cho đoạn chat không thuộc dự án (Documents\Codex\<ngày>\…, ~/.codex, thư mục tạm)
const codexScratch = (cwd) => !cwd || underPath(path.join(os.homedir(), 'Documents', 'Codex'), cwd) || underPath(codexHome(), cwd) || underPath(os.tmpdir(), cwd) || /[\\/]Codex[\\/]\d{4}-\d{2}-\d{2}(?:[\\/]|$)/i.test(String(cwd));

function threadTitle(th) {
  const t = th.name || cleanUserText(th.preview).replace(/\s+/g, ' ').trim();
  return (t || 'Đoạn chat').slice(0, 80);
}

// lượt hội thoại của app-server → tin nhắn dạng của tab Chat
function messagesFromThread(th, saveDataImage) {
  const msgs = [];
  for (const turn of th.turns || []) {
    let bot = null;
    const ts = (turn.startedAt || th.updatedAt) * 1000;
    const assistant = () => bot || (bot = { role: 'assistant', model: th.model || '', blocks: [], files: [], ts, status: turn.status === 'failed' ? 'error' : 'done', ms: turn.durationMs || 0 });
    for (const it of turn.items || []) {
      if (it.type === 'userMessage') {
        const parts = it.content || [];
        const pm = parts.filter((c) => c.type === 'mention' && /^plugin:\/\//.test(c.path || '')).map((c) => ({ kind: 'plugin', id: c.path.slice(9), name: c.name }));
        const text = cleanUserText(parts.map((c) => (c.type === 'text' ? c.text : c.type === 'skill' ? `$${c.name}` : c.type === 'mention' ? (/^plugin:/.test(c.path || '') ? '' : `$${c.name}`) : '')).filter(Boolean).join(' '));
        const attachments = [];
        for (const c of parts) {
          if (c.type === 'localImage' && c.path) attachments.push({ path: c.path, name: path.basename(c.path), image: true });
          else if (c.type === 'image' && /^data:image\//.test(c.url || '')) { const p = saveDataImage(c.url); if (p) attachments.push({ path: p, name: path.basename(p), image: true }); }
          else if (c.type === 'localAudio' && c.path) attachments.push({ path: c.path, name: path.basename(c.path), image: false });
        }
        msgs.push({ role: 'user', text: pm.length ? `${pm.map((m) => '@' + m.name).join(' ')} ${text}`.trim() : text, attachments, ts, ...(pm.length ? { mentions: pm } : {}) });
      } else if (it.type === 'agentMessage') {
        if (it.text) assistant().blocks.push({ kind: 'text', text: it.text });
      } else {
        const st = stepFromItem(it);
        if (st) assistant().blocks.push({ ...st, id: it.id, kind: 'step' });
      }
    }
    if (bot) {
      if (turn.error && turn.error.message) bot.error = turn.error.message;
      bot.files = collectFiles(th.cwd, null, 0, bot.blocks);
      msgs.push(bot);
    }
  }
  return msgs;
}

function wasBlocked(stderr, blocks) {
  const failed = (b) => b.status === 'failed' || (b.exit !== undefined && b.exit !== null && b.exit !== 0);
  return BLOCKED.test(stderr) || blocks.some((b) => b.kind === 'step' && b.output && failed(b) && BLOCKED.test(b.output));
}

// ---------- hỏi quyền (yêu cầu từ Codex app-server) → khối "ask" hiện trong đoạn chat ----------
// Legacy Computer Use/browser MCP names; Windows @oai/sky runs through node_repl.
const isCU = (n) => /^(computer[-_]use|cua[-_]repl)$/i.test(String(n || ''));
const VPC = 'vp_computer'; // công cụ điều khiển máy tính của Văn Phòng AI (src/computer/mcp.js)
const VPC_READONLY = new Set(['screenshot', 'wait', 'list_windows']);
const TOOL_SHORT = { vp_browser: 'Trình duyệt', 'computer-use': 'Computer Use', cua_repl: 'Computer Use', simi_browser: 'Trình duyệt SIMI', vp_computer: 'Điều khiển máy' };
const SERVER_NAME = { vp_browser: 'Trình duyệt cạnh chat', 'computer-use': 'Computer Use (điều khiển máy tính)', cua_repl: 'Computer Use (điều khiển máy tính)', simi_browser: 'Trình duyệt SIMI', vp_computer: 'Điều khiển máy tính' };
const serverName = (n) => SERVER_NAME[n] || n || 'Công cụ';
const ALLOW = { id: 'accept', label: 'Cho phép', done: '✓ Đã cho phép', style: 'primary' };
const DECLINE = { id: 'decline', label: 'Từ chối', done: '✕ Đã từ chối', style: 'ghost' };
const SESSION = { id: 'session', label: 'Luôn cho phép trong đoạn chat này', done: '✓ Luôn cho phép trong đoạn chat này' };
const ALWAYS = { id: 'always', label: 'Luôn cho phép', done: '✓ Luôn cho phép (đã lưu)' };
// chuyển đoạn chat sang "Tự cho phép mọi lệnh" (danger-full-access) và nhớ cho các đoạn chat sau → không hỏi nữa
const ALL = { id: 'all', label: 'Luôn cho phép, không hỏi nữa', done: '✓ Từ giờ tự cho phép mọi lệnh', title: 'Chuyển sang "Tự cho phép mọi lệnh" – đổi lại ở ô quyền dưới ô nhập' };
const FULL = 'danger-full-access';
// các yêu cầu tự đồng ý khi đoạn chat ở chế độ "Tự cho phép mọi lệnh" (không gồm điều khiển chuột/bàn phím, plugin)
const AUTO_OK = new Set(['item/commandExecution/requestApproval', 'item/fileChange/requestApproval', 'item/permissions/requestApproval']);

// chương trình chính của 1 lệnh: bỏ lớp powershell/bash bọc ngoài, "& 'C:\…\node.exe' x.mjs" → node
function cmdProgram(c) {
  let s = shownCmd(c).trim().replace(/^&\s*/, '');
  const m = s.match(/^(['"])(.*?)\1/) || s.match(/^(\S+)/);
  if (!m) return '';
  s = (m[2] !== undefined ? m[2] : m[1]).replace(/\\\\/g, '\\'); // chuỗi có thể còn \\ kép
  return (s.split(/[\\/]/).pop() || '').toLowerCase().replace(/\.(exe|cmd|bat|ps1)$/, '').slice(0, 60);
}

// câu hỏi dạng form (MCP elicitation / request_user_input) → các ô nhập đơn giản
function schemaFields(schema) {
  const props = (schema && schema.properties) || {};
  const req = new Set((schema && schema.required) || []);
  return Object.entries(props).slice(0, 8).map(([name, f]) => {
    const opts = f.enum || (f.oneOf || f.anyOf || []).map((o) => o.const).filter((x) => x !== undefined);
    const labels = f.enumNames || (f.oneOf || f.anyOf || []).map((o) => o.title || o.const);
    return { name, label: f.title || name, hint: f.description || '', type: f.type === 'boolean' ? 'bool' : opts.length ? 'choice' : f.type === 'number' || f.type === 'integer' ? 'number' : 'text', options: opts.map((v, i) => ({ value: v, label: labels[i] || v })), required: req.has(name), value: f.default ?? '' };
  });
}

function askFrom(method, p) {
  switch (method) {
    case 'item/commandExecution/requestApproval': {
      const net = p.networkApprovalContext && p.networkApprovalContext.host;
      const prog = !net && cmdProgram(p.command);
      const sess = prog ? { ...SESSION, label: `Luôn cho phép lệnh ${prog} trong đoạn chat này`, done: `✓ Luôn cho phép lệnh ${prog} trong đoạn chat này` } : SESSION;
      return { icon: '⌘', title: net ? `Cho phép truy cập mạng tới ${net}?` : 'Cho phép chạy lệnh này?', text: p.reason || 'Lệnh cần quyền ngoài phạm vi đang cho phép.', detail: p.command || '', options: [ALLOW, sess, ALL, DECLINE] };
    }
    case 'item/fileChange/requestApproval':
      return { icon: '📝', title: 'Cho phép sửa file?', text: p.reason || 'Codex muốn tạo/sửa file ngoài thư mục dự án.', detail: p.grantRoot || '', options: [ALLOW, SESSION, ALL, DECLINE] };
    case 'item/permissions/requestApproval': {
      const pm = p.permissions || {};
      const parts = [];
      if (pm.network && pm.network.enabled) parts.push('Truy cập mạng');
      const fsx = pm.fileSystem || {};
      for (const w of fsx.write || []) parts.push('Ghi: ' + w);
      for (const r of fsx.read || []) parts.push('Đọc: ' + r);
      return { icon: '🔐', title: 'Cho phép thêm quyền?', text: p.reason || 'Codex cần thêm quyền để làm tiếp.', detail: parts.join('\n'), options: [ALLOW, SESSION, ALL, DECLINE] };
    }
    case 'mcpServer/elicitation/request': {
      const meta = p._meta || {};
      if (meta.codex_approval_kind === 'mcp_tool_call') {
        const tool = (String(p.message || '').match(/tool "([^"]+)"/) || [])[1] || '';
        const disp = meta.tool_params_display || [];
        const params = disp.map((x) => `${x.display_name || x.name}: ${typeof x.value === 'string' ? x.value : JSON.stringify(x.value)}`).join('\n');
        const persist = meta.persist || [];
        const opts = [ALLOW, ...(persist.includes('session') ? [SESSION] : []), ...(persist.includes('always') ? [ALWAYS] : []), DECLINE];
        if (p.serverName === VPC) {
          const tool = (String(p.message || '').match(/tool "([^"]+)"/) || [])[1] || '';
          const args = Object.fromEntries(disp.map((x) => [x.name, x.value]));
          return { icon: '🖱️', title: 'AI muốn điều khiển chuột & bàn phím trên máy bạn', text: `Bước đầu tiên: ${vpcLabel(tool, args)}. Bạn bấm "Dừng" bất cứ lúc nào để AI dừng lại.`, detail: '', options: [{ ...SESSION, label: 'Cho phép trong đoạn chat này', style: 'primary' }, { ...ALLOW, label: 'Chỉ bước này', style: '' }, DECLINE] };
        }
        if (isCU(p.serverName)) {
          // Computer Use xin quyền điều khiển 1 app cụ thể (Chrome, Excel, Zalo…)
          const appName = (disp.find((x) => /^app/i.test(x.name || x.display_name || '')) || {}).value;
          return { icon: '🖥️', title: appName ? `Computer Use muốn điều khiển ${appName}` : 'Computer Use muốn điều khiển máy tính', text: appName ? 'AI sẽ nhìn màn hình, bấm và gõ trong app này.' : (p.message || meta.tool_description || ''), detail: appName ? '' : params, options: opts };
        }
        return { icon: '🧩', title: tool ? `${serverName(p.serverName)} muốn dùng "${tool}"` : `${serverName(p.serverName)} xin phép`, text: meta.tool_description || (tool ? '' : p.message || ''), detail: params, options: opts };
      }
      if (p.mode === 'url') return { icon: '🔗', title: `${serverName(p.serverName)} cần bạn mở trang`, text: p.message, url: p.url, options: [{ id: 'accept', label: 'Mở trang & tiếp tục', done: '✓ Đã mở trang', style: 'primary', open: p.url }, DECLINE] };
      const fields = schemaFields(p.requestedSchema);
      return { icon: '❓', title: `${serverName(p.serverName)} hỏi`, text: p.message || '', fields, options: [{ ...ALLOW, label: fields.length ? 'Gửi' : 'Đồng ý', done: '✓ Đã trả lời' }, DECLINE] };
    }
    case 'item/tool/requestUserInput':
      return {
        icon: '❓', title: 'Codex cần bạn trả lời', text: '',
        fields: (p.questions || []).map((q) => ({ name: q.id, label: q.header || q.question, hint: q.header ? q.question : '', type: q.options && q.options.length ? 'choice' : 'text', secret: !!q.isSecret, other: !!q.isOther, options: (q.options || []).map((o) => ({ value: o.label, label: o.label, hint: o.description })), required: true, value: '' })),
        options: [{ id: 'accept', label: 'Gửi', done: '✓ Đã trả lời', style: 'primary' }, { id: 'decline', label: 'Bỏ qua', done: 'Đã bỏ qua', style: 'ghost' }],
      };
    default:
      return null;
  }
}

// khóa nhớ "luôn cho phép trong đoạn chat này" (đúng công cụ / đúng lệnh)
function askKey(method, p) {
  if (method === 'mcpServer/elicitation/request') {
    const meta = p._meta || {};
    if (meta.codex_approval_kind !== 'mcp_tool_call') return null;
    if (p.serverName === VPC) return `mcp:${VPC}:*`; // cho phép 1 lần cho mọi thao tác chuột/bàn phím trong đoạn chat
    return `mcp:${p.serverName}:${(String(p.message || '').match(/tool "([^"]+)"/) || [])[1] || ''}`;
  }
  if (method === 'item/commandExecution/requestApproval') {
    if (p.networkApprovalContext) return `net:${p.networkApprovalContext.host}`;
    const prog = cmdProgram(p.command); // cho phép theo chương trình (node, python, git…), không theo nguyên câu lệnh
    return prog ? `prog:${prog}` : p.command ? `cmd:${String(p.command).slice(0, 400)}` : null;
  }
  if (method === 'item/fileChange/requestApproval') return `file:${p.grantRoot || ''}`;
  if (method === 'item/permissions/requestApproval') return `perm:${JSON.stringify(p.permissions || {}).slice(0, 400)}`;
  return null;
}

function declineFor(method) {
  if (/commandExecution|fileChange/.test(method)) return { decision: 'decline' };
  if (method === 'mcpServer/elicitation/request') return { action: 'decline' };
  if (method === 'item/permissions/requestApproval') return { permissions: {}, scope: 'turn' };
  if (method === 'item/tool/requestUserInput') return { answers: {} };
  if (method === 'execCommandApproval' || method === 'applyPatchApproval') return { decision: 'denied' };
  return null;
}

function responseFor(method, p, choice, block) {
  const ok = choice !== 'decline';
  if (!ok) return declineFor(method);
  const values = block.values || {};
  switch (method) {
    case 'item/commandExecution/requestApproval':
    case 'item/fileChange/requestApproval':
      return { decision: choice === 'session' || choice === 'all' ? 'acceptForSession' : 'accept' };
    case 'item/permissions/requestApproval':
      return { permissions: p.permissions || {}, scope: choice === 'session' || choice === 'all' ? 'session' : 'turn' };
    case 'mcpServer/elicitation/request': {
      const r = { action: 'accept', content: {} };
      if (choice === 'session' || choice === 'always') r._meta = { persist: choice };
      for (const f of block.fields || []) {
        const v = values[f.name];
        if (v === undefined || v === '') continue;
        r.content[f.name] = f.type === 'bool' ? v === true || v === 'true' : f.type === 'number' ? Number(v) : v;
      }
      return r;
    }
    case 'item/tool/requestUserInput': {
      const answers = {};
      for (const f of block.fields || []) if (values[f.name] !== undefined && values[f.name] !== '') answers[f.name] = { answers: [String(values[f.name])] };
      return { answers };
    }
    default:
      return declineFor(method);
  }
}

class ChatEngine {
  constructor({ userData, getConfig, emit, defaultDir, hiddenDirs = () => [], codex, extraConfig = () => ({}) }) {
    this.extraConfig = extraConfig; // cấu hình Codex thêm cho mỗi phiên (MCP điều khiển máy tính)
    this.store = new ChatStore(userData);
    this.getConfig = getConfig;
    this.emit = emit;
    this.defaultDir = defaultDir;
    this.hiddenDirs = hiddenDirs; // thư mục mà Codex chạy cho việc khác (khu làm việc của văn phòng) – không hiện
    this.codex = codex;           // CodexAppServer: chạy lượt chat + đọc lịch sử ChatGPT Work
    this.running = new Map();     // threadId -> lượt đang chạy
    this.asks = new Map();        // yêu cầu xin quyền đang chờ người dùng
    this.askSeq = 0;
    codex.on('request', (r) => this._onServerRequest(r));
  }

  // ---------- liên thông với ChatGPT Work / Codex Desktop ----------
  // đoạn chat của Codex chưa có trong app (đã có thì hiện như đoạn chat bình thường)
  // thư mục làm việc của Codex → dự án hiển thị trong app: dự án của ChatGPT Work / dự án đã lưu trong app; còn lại là đoạn chat thường
  projectFor(cwd) {
    if (!cwd || samePath(cwd, this.defaultDir())) return '';
    const ui = codexUiState();
    const cx = ui.projects.find((p) => p.roots.some((r) => underPath(r, cwd)));
    if (cx) return cx.dir;
    const pr = (this.getConfig().chatProjects || []).find((p) => underPath(p.dir, cwd));
    if (pr) return pr.dir;
    return ui.ok || codexScratch(cwd) ? '' : cwd; // có danh sách dự án của Codex → đi theo Codex; không có thì giữ thư mục thật
  }

  codexProjects() { return codexUiState().projects.map((p) => ({ name: p.name, dir: p.dir })); }

  async listExternal() {
    const linked = new Set(this.store.list().map((t) => t.codexThread).filter(Boolean));
    const hidden = this.store.hidden();
    const skip = this.hiddenDirs();
    const pinned = codexUiState().pinned;
    const threads = await this.codex.listThreads();
    return threads
      .filter((th) => !linked.has(th.id) && !hidden.has(th.id) && !th.parentThreadId && !skip.some((d) => underPath(d, th.cwd)))
      .map((th) => ({ id: 'cx' + th.id.replace(/-/g, ''), codexId: th.id, title: threadTitle(th), project: this.projectFor(th.cwd), updatedAt: th.updatedAt * 1000, external: true, model: th.model || '', ...(pinned.has(String(th.id).toLowerCase()) ? { pinned: true } : {}) }));
  }

  // mở 1 đoạn chat của Codex trong app: nạp toàn bộ hội thoại, liên kết để chat tiếp bằng `codex exec resume`
  async importExternal(codexId) {
    const existing = this.store.list().find((t) => t.codexThread === codexId);
    if (existing) return this.sync(existing.id);
    const th = await this.codex.readThread(codexId);
    const t = this.create({ project: this.projectFor(th.cwd), model: th.model || '', title: threadTitle(th) });
    Object.assign(t, { codexThread: th.id, origin: 'codex', cwd: th.cwd || '', ...(codexUiState().pinned.has(String(th.id).toLowerCase()) ? { pinned: true } : {}), messages: messagesFromThread(th, (u) => this._saveDataImage(t.id, u)), codexUpdatedAt: th.updatedAt });
    return this.store.save(t);
  }

  // đoạn chat đã liên kết: nếu bên ChatGPT Work có lượt mới thì nạp lại toàn bộ
  async sync(id) {
    const t = this.store.get(id);
    if (!t || !t.codexThread || this.running.has(id)) return t;
    const userTurns = t.messages.filter((m) => m.role === 'user').length;
    // đang có nội dung thì lỗi đọc Codex bỏ qua (giữ bản đang có); đang rỗng thì báo lỗi để người dùng biết
    const meta = await this.codex.readThread(t.codexThread, false).catch((e) => { if (userTurns > 0) return null; throw e; });
    // Codex chưa đổi gì kể từ lần đọc trước – trừ khi lần trước đọc ra rỗng (bản Codex khác / lỗi đọc) thì đọc lại
    if (!meta || (meta.updatedAt === t.codexUpdatedAt && userTurns > 0)) return t;
    const th = await this.codex.readThread(t.codexThread);
    t.codexUpdatedAt = th.updatedAt;
    if ((th.turns || []).length !== userTurns) {
      t.messages = messagesFromThread(th, (u) => this._saveDataImage(t.id, u));
      if (th.name && t.origin === 'codex') t.title = th.name.slice(0, 80);
    }
    return this.store.save(t);
  }

  // xóa đoạn chat; everywhere = xóa luôn phiên Codex (mất cả trong ChatGPT Work, không khôi phục được)
  async remove(id, { everywhere = false } = {}) {
    const t = this.store.get(id);
    this.stop(id);
    if (t && t.codexThread) {
      this.store.hide(t.codexThread); // không để nó hiện lại thành đoạn chat của ChatGPT Work
      if (everywhere) await this._codexDelete(t.codexThread);
    }
    this.store.remove(id);
    return true;
  }

  async _codexDelete(codexId) {
    try { await this.codex.request('thread/delete', { threadId: codexId }, 60000); } catch (e) {
      if (!/not found|no rollout|no such|does not exist|unknown thread/i.test(e.message)) throw new Error('Không xóa được trong ChatGPT Work: ' + e.message);
    }
  }

  // lưu trữ / bỏ lưu trữ: ẩn khỏi danh sách, đồng bộ sang ChatGPT Work (Codex) nếu đoạn chat liên thông
  async archive(id, on = true) {
    const t = this.store.get(id); if (!t) throw new Error('Không tìm thấy đoạn chat');
    if (on && this.running.has(id)) throw new Error('Đoạn chat đang trả lời – chờ xong rồi lưu trữ');
    t.archived = !!on;
    if (t.codexThread) await this.codex.request(on ? 'thread/archive' : 'thread/unarchive', { threadId: t.codexThread }, 60000).catch(() => { /* phiên Codex đã mất – vẫn lưu trữ trong app */ });
    return this.store.save(t);
  }

  // đoạn chat của ChatGPT Work chưa mở trong app
  async archiveExternal(codexId, on = true) {
    await this.codex.request(on ? 'thread/archive' : 'thread/unarchive', { threadId: codexId }, 60000);
    return true;
  }

  async deleteExternal(codexId) {
    await this._codexDelete(codexId);
    this.store.hide(codexId);
    return true;
  }

  // danh sách đã lưu trữ: của app + của ChatGPT Work
  async listArchived() {
    const mine = this.store.list().filter((t) => t.archived);
    const linked = new Set(this.store.list().map((t) => t.codexThread).filter(Boolean));
    const hidden = this.store.hidden();
    const skip = this.hiddenDirs();
    let ext = []; let error = '';
    try {
      ext = (await this.codex.listThreads(300, true))
        .filter((th) => !linked.has(th.id) && !hidden.has(th.id) && !th.parentThreadId && !skip.some((d) => underPath(d, th.cwd)))
        .map((th) => ({ id: 'cx' + th.id.replace(/-/g, ''), codexId: th.id, title: threadTitle(th), project: samePath(th.cwd, this.defaultDir()) ? '' : th.cwd, updatedAt: th.updatedAt * 1000, external: true, archived: true }));
    } catch (e) { error = e.message; }
    return { threads: [...mine, ...ext].sort((a, b) => b.updatedAt - a.updatedAt), error };
  }

  _saveDataImage(threadId, url) {
    const m = String(url).match(/^data:image\/(png|jpe?g|gif|webp);base64,(.+)$/);
    if (!m || m[2].length > 20 * 1024 * 1024) return null;
    return this.saveUpload(threadId, 'anh.' + m[1].replace('jpeg', 'jpg'), Buffer.from(m[2], 'base64'));
  }

  create({ project, model, agentId, title, effort, sandbox, mode }) {
    const t = {
      id: 'k' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
      title: title || 'Đoạn chat mới', project: project || '', model: model || '', effort: effort || '', sandbox: sandbox || 'workspace-write',
      agentId: agentId || null, codexThread: null, createdAt: Date.now(), messages: [], mode: mode === 'tools' ? 'tools' : 'auto',
    };
    return this.store.save(t);
  }

  update(id, patch) {
    const t = this.store.get(id); if (!t) throw new Error('Không tìm thấy đoạn chat');
    for (const k of ['title', 'model', 'effort', 'sandbox', 'pinned', 'project', 'agentId', 'mode']) if (k in patch) t[k] = patch[k];
    if ('project' in patch) t.codexThread = null; // đổi thư mục → bắt đầu phiên Codex mới
    return this.store.save(t);
  }

  dirOf(t) {
    // đoạn chat mở từ ChatGPT Work chạy tiếp đúng thư mục cũ của nó (kể cả thư mục nháp Codex tự tạo)
    const d = t.cwd && fs.existsSync(t.cwd) ? t.cwd : t.project && fs.existsSync(t.project) ? t.project : this.defaultDir();
    fs.mkdirSync(d, { recursive: true });
    return d;
  }

  // lưu ảnh dán từ clipboard / kéo thả không có đường dẫn
  saveUpload(threadId, name, bytes) {
    const dir = path.join(this.store.files, String(threadId || 'chung').replace(/[^a-z0-9]/gi, ''));
    fs.mkdirSync(dir, { recursive: true });
    const safe = (String(name || 'anh.png').replace(/[^\w.\-]+/g, '_').slice(-60)) || 'anh.png';
    const p = path.join(dir, Date.now().toString(36) + '-' + safe);
    fs.writeFileSync(p, Buffer.from(bytes));
    return p;
  }

  // chỉ cho xem/mở file trong thư mục chat, dự án đã thêm, hoặc file đã xuất hiện trong một đoạn chat
  canAccess(p) {
    const r = path.resolve(String(p || ''));
    const within = (base) => { const rel = path.relative(base, r); return !!rel && !rel.startsWith('..') && !path.isAbsolute(rel); };
    if (within(this.store.files) || within(this.defaultDir())) return true;
    if ((this.getConfig().chatProjects || []).some((pr) => pr.dir && within(pr.dir))) return true;
    return this._knownFiles().has(r);
  }

  _knownFiles() {
    if (this._known && Date.now() - this._known.t < 5000) return this._known.set;
    const set = new Set();
    for (const f of fs.readdirSync(this.store.dir)) {
      if (!f.endsWith('.json')) continue;
      try {
        for (const m of JSON.parse(fs.readFileSync(path.join(this.store.dir, f), 'utf8')).messages || []) {
          for (const a of [...(m.attachments || []), ...(m.files || [])]) set.add(path.resolve(a.path));
        }
      } catch { /* bỏ file hỏng */ }
    }
    this._known = { t: Date.now(), set };
    return set;
  }

  // Dừng: xin Codex ngắt lượt; Codex đang kẹt (chờ công cụ điều khiển máy, chờ mạng thử lại, chờ người dùng cho phép…)
  // thì không bao giờ báo "đã ngắt" → trước đây nút Dừng không ăn, phải tắt app. Giờ: trả lời từ chối mọi câu hỏi quyền
  // đang treo, chờ tối đa STOP_GRACE_MS rồi tự kết thúc lượt; bấm Dừng lần 2 là dừng ngay.
  stop(id) {
    const r = this.running.get(id); if (!r) return false;
    const again = r.stopped;
    r.stopped = true;
    this._expireAsks(r);
    if (again || !r.turnId) { r.abort(STOPPED); return true; }
    this.codex.request('turn/interrupt', { threadId: r.codexId, turnId: r.turnId }, STOP_GRACE_MS).catch(() => r.abort(STOPPED));
    clearTimeout(r.stopTimer);
    r.stopTimer = setTimeout(() => r.abort(STOPPED), STOP_GRACE_MS);
    return true;
  }

  // ---------- hỏi quyền: Codex xin phép → hộp "Cho phép / Từ chối" trong đoạn chat ----------
  _onServerRequest({ id, method, params }) {
    const run = [...this.running.values()].find((r) => r.codexId && r.codexId === params.threadId);
    const ask = run && askFrom(method, params);
    if (!ask) {
      // lượt không thuộc app (hoặc loại yêu cầu chưa hỗ trợ) → từ chối an toàn để Codex không bị treo
      const d = declineFor(method);
      return d ? this.codex.respond(id, d) : this.codex.respondError(id, 'Văn Phòng AI chưa hỗ trợ yêu cầu ' + method);
    }
    // đoạn chat ở chế độ "Tự cho phép mọi lệnh" → đồng ý luôn, không hỏi
    if (AUTO_OK.has(method) && this._autoAll(run)) return this.codex.respond(id, responseFor(method, params, 'all', { fields: [] }));
    // "Tự cho phép mọi lệnh" cũng tự cho phép công cụ MCP (trừ điều khiển chuột / bàn phím thật: vẫn hỏi 1 lần mỗi đoạn chat)
    const meta = (params && params._meta) || {};
    if (method === 'mcpServer/elicitation/request' && meta.codex_approval_kind === 'mcp_tool_call' && params.serverName !== VPC && !isCU(params.serverName) && this._autoAll(run)) {
      return this.codex.respond(id, responseFor(method, params, 'session', { fields: [] }));
    }
    // đã chọn "Luôn cho phép trong đoạn chat này" cho đúng việc này → tự đồng ý
    const key = askKey(method, params);
    if (key && (run.t.allow || []).includes(key)) return this.codex.respond(id, responseFor(method, params, 'session', { fields: [] }));
    const rid = 'a' + (++this.askSeq);
    const block = { kind: 'ask', id: rid, ...ask, answer: null };
    this.asks.set(rid, { srvId: id, method, params, run, block });
    run.msg.blocks.push(block);
    run.emitBlocks(true);
    this.emit({ type: 'chat-ask', threadId: run.threadId, title: run.title, ask: block });
  }

  // chế độ quyền mới nhất của đoạn chat (người dùng có thể đổi ở ô quyền trong lúc AI đang chạy)
  _autoAll(run) {
    const f = this.store.get(run.threadId);
    const sb = f ? f.sandbox : run.t.sandbox;
    if (f && run.t.sandbox !== sb) run.t.sandbox = sb;
    return sb === FULL;
  }

  _computer(run, active) {
    if (!!run.computer === active) return;
    run.computer = active;
    this.emit({ type: 'chat-computer', threadId: run.threadId, active });
  }

  answer(threadId, rid, choice, values) {
    const a = this.asks.get(rid);
    if (!a || a.run.threadId !== threadId) throw new Error('Yêu cầu này đã hết hạn');
    this.asks.delete(rid);
    const opt = a.block.options.find((o) => o.id === choice) || a.block.options.find((o) => o.id === 'decline');
    if (values && typeof values === 'object') a.block.values = Object.fromEntries(Object.entries(values).slice(0, 12).map(([k, v]) => [String(k), typeof v === 'boolean' ? v : String(v).slice(0, 4000)]));
    a.block.answer = opt.done;
    const key = opt.id === 'session' && askKey(a.method, a.params);
    if (key) { const t = a.run.t; t.allow = [...new Set([...(t.allow || []), key])].slice(-60); this.store.save(t); }
    this.codex.respond(a.srvId, responseFor(a.method, a.params, opt.id, a.block));
    if (opt.id === 'all') {
      // "Luôn cho phép, không hỏi nữa": đoạn chat chuyển sang Tự cho phép mọi lệnh; các câu đang chờ cũng đồng ý luôn
      const t = a.run.t; t.sandbox = FULL; this.store.save(t);
      this.emit({ type: 'chat-sandbox', threadId, sandbox: FULL });
      for (const [rid2, b] of [...this.asks]) {
        if (b.run !== a.run || !AUTO_OK.has(b.method)) continue;
        this.asks.delete(rid2); b.block.answer = ALL.done;
        this.codex.respond(b.srvId, responseFor(b.method, b.params, 'all', b.block));
      }
    }
    if (opt.id !== 'decline' && a.params.serverName === VPC) setTimeout(() => { if (this.running.get(threadId) === a.run) this._computer(a.run, true); }, 200);
    a.run.emitBlocks(true);
    return true;
  }

  // Codex tự hủy yêu cầu (lượt bị dừng…) → đánh dấu để nút bấm không còn tác dụng
  _onResolved(params) {
    for (const [rid, a] of this.asks) {
      if (a.srvId === params.requestId && a.params.threadId === params.threadId) {
        this.asks.delete(rid);
        if (!a.block.answer) { a.block.answer = 'Đã hủy'; a.run.emitBlocks(true); }
      }
    }
  }

  // lượt kết thúc / bị dừng: câu hỏi quyền còn treo → trả lời "từ chối" cho Codex (không trả lời là Codex chờ mãi, lượt kẹt)
  _expireAsks(run) {
    for (const [rid, a] of this.asks) {
      if (a.run !== run) continue;
      this.asks.delete(rid);
      if (a.block.answer) continue;
      a.block.answer = 'Đã hủy';
      try { const d = declineFor(a.method); if (d) this.codex.respond(a.srvId, d); else this.codex.respondError(a.srvId, 'Đã dừng'); } catch { /* Codex đã tắt */ }
    }
  }

  // agentId + persona: nhân sự phụ trách đoạn chat (vai trò được nhắc lại mỗi khi đổi người)
  async send(id, { text, attachments = [], model, effort, persona, agentId, mentions = [] }) {
    if (this._computerUseSetup) throw new Error('Đang thiết lập Computer Use. Chờ hoàn tất rồi gửi tin nhắn.');
    const t = this.store.get(id); if (!t) throw new Error('Không tìm thấy đoạn chat');
    if (this.running.has(id)) throw new Error('Đoạn chat này đang trả lời, chờ chút hoặc bấm Dừng');
    text = String(text || '').trim();
    if (!text && !attachments.length) throw new Error('Tin nhắn đang trống');
    if (model !== undefined) t.model = model;
    if (effort !== undefined) t.effort = effort;
    if (agentId !== undefined) t.agentId = agentId || null;
    const dir = this.dirOf(t);
    const atts = attachments.filter((a) => a && a.path && fs.existsSync(a.path)).map((a) => ({ path: a.path, name: a.name || path.basename(a.path), image: IMG_EXT.test(a.path) }));

    // @Máy tính, @Trình duyệt SIMI, @plugin – giống gõ @ trong ChatGPT Work
    const ments = (Array.isArray(mentions) ? mentions : []).filter((m) => m && typeof m.id === 'string' && typeof m.name === 'string' && /^(tool|plugin)$/.test(m.kind))
      .slice(0, 8).map((m) => ({ kind: m.kind, id: m.id.slice(0, 120), name: m.name.slice(0, 60) }));
    const user = { role: 'user', text, attachments: atts, ts: Date.now(), ...(ments.length ? { mentions: ments } : {}) };
    const msg = { role: 'assistant', model: t.model, agentId: t.agentId || null, blocks: [], files: [], ts: Date.now(), status: 'running' };
    t.messages.push(user, msg);
    if (t.title === 'Đoạn chat mới' && text) t.title = titleFrom(text);
    this.store.save(t);

    const needPersona = !!persona && t.personaFor !== (t.agentId || null);
    const hints = ments.map((m) => (m.kind === 'tool' ? TOOL_HINT[m.id] : PLUGIN_HINT(m))).filter(Boolean);
    // trao đổi "trả lời nhanh" trước đó chưa có trong phiên Codex → kèm vào để AI không mất mạch
    const prompt = withFastHistory(t, buildPrompt(t, hints.length ? `${text}\n\n(${hints.join(' ')})` : text, atts, needPersona ? persona : ''));
    if (needPersona) t.personaFor = t.agentId || null;
    simi.refreshEnv();
    const t0 = Date.now();
    const emit = (ev) => this.emit({ type: 'chat', threadId: id, ...ev });
    emit({ ev: 'start', message: msg, user });
    // giữ chỗ ngay từ đầu: bấm Dừng thật nhanh (trước khi lượt kịp bắt đầu) vẫn ăn
    const pre = { threadId: id, t, msg, stopped: false, pending: true };
    pre.abort = () => { pre.stopped = true; };
    this.running.set(id, pre);

    // ⚡ Trả lời nhanh: việc không cần công cụ gửi thẳng tới model qua Gateway (chữ hiện dần, 1 lần gọi),
    // không qua vòng lặp nhiều bước của Codex. Model báo cần công cụ → chuyển sang Codex ngay, người dùng không phải làm gì.
    if (fastEligible(t, text, atts, ments)) {
      const r = await this._sendFast({ t, msg, text, atts, persona: needPersona ? persona : '', emit, t0, pre }).catch(() => ESCALATE);
      if (r !== ESCALATE) return r;
      msg.blocks = []; msg.fast = false;
      emit({ ev: 'blocks', blocks: msg.blocks });
    }
    if (pre.stopped) {
      this.running.delete(id);
      return new Promise((resolve) => this._finish(t, msg, { error: STOPPED, ms: Date.now() - t0 }, emit, resolve));
    }
    const before = snapshot(dir);

    const srv = this.codex;
    return new Promise((resolve) => {
      let done = false; let lastSave = 0; let emitTimer = null;
      const items = new Map(); // id bước của Codex → block
      const run = { threadId: id, title: t.title, t, msg, codexId: null, turnId: null, stopped: false };
      const emitBlocks = (now) => {
        const go = () => { emitTimer = null; emit({ ev: 'blocks', blocks: msg.blocks }); if (Date.now() - lastSave > 1500) { lastSave = Date.now(); this.store.save(t); } };
        if (now) { clearTimeout(emitTimer); go(); } else if (!emitTimer) emitTimer = setTimeout(go, 60);
      };
      run.emitBlocks = emitBlocks;
      const finish = (error) => {
        if (done) return; done = true;
        clearTimeout(emitTimer); clearTimeout(run.stopTimer);
        srv.off('notification', onNote); srv.off('exit', onExit);
        // nhả phiên sau mỗi lượt để ChatGPT Work chat tiếp được ngay trên cùng phiên (Codex chỉ cho 1 nơi ghi 1 lúc);
        // lần sau app đọc lại bản mới nhất từ đĩa
        if (run.codexId) srv.loaded.delete(run.codexId);
        srv.release();
        if (!srv.active) srv.stop();
        else if (run.codexId) srv.request('thread/unsubscribe', { threadId: run.codexId }).catch(() => { /* đã đóng */ });
        this._expireAsks(run);
        this._computer(run, false);
        this.running.delete(id);
        msg.files = collectFiles(dir, before, t0, msg.blocks);
        if (msg.blocks.some((b) => b.kind === 'step' && isCU(b.server) && BROWSER_HOST.test(b.output || ''))) {
          msg.blocks.push({ kind: 'note', text: 'Công cụ trình duyệt báo thiếu browser access host. Lỗi này không chứng minh plugin Windows Computer Use bị hỏng. Kiểm tra runtime OpenAI trong 🧰 Công cụ; thao tác cửa sổ Windows dùng node_repl + @oai/sky, chỉ đọc trang có thể dùng Trình duyệt SIMI.' });
        }
        if (t.sandbox === 'read-only' && wasBlocked('', msg.blocks)) {
          msg.blocks.push({ kind: 'note', text: 'Có lệnh bị chặn vì đoạn chat đang ở chế độ "🔒 Chỉ đọc". Đổi quyền ở dưới ô chat rồi gửi lại nếu cần tạo/sửa file.' });
        }
        this._finish(t, msg, { error: run.stopped ? STOPPED : error, ms: Date.now() - t0 }, emit, resolve);
      };
      run.abort = finish;

      const upsert = (it) => {
        if (it.type === 'userMessage') return;
        let block;
        if (it.type === 'agentMessage') block = { kind: 'text', id: it.id, text: it.text || (items.get(it.id) || {}).text || '' };
        else {
          const st = stepFromItem(it); if (!st) return;
          block = { ...st, id: it.id, kind: 'step' };
          if (it.type === 'mcpToolCall' && it.status !== 'inProgress') this._toolResult(t.id, it, block);
        }
        const old = items.get(it.id);
        if (old) msg.blocks[msg.blocks.indexOf(old)] = block; else msg.blocks.push(block);
        items.set(it.id, block);
        emitBlocks();
      };
      const onNote = (method, p) => {
        if (!run.codexId || p.threadId !== run.codexId) { if (method === 'serverRequest/resolved') this._onResolved(p); return; }
        if (run.turnId && p.turnId && p.turnId !== run.turnId) return;
        switch (method) {
          case 'item/started': case 'item/completed':
            upsert(p.item);
            // AI bắt đầu cầm chuột (đã được cho phép) → báo để thu nhỏ cửa sổ app cho khỏi che màn hình
            if (method === 'item/started' && p.item.type === 'mcpToolCall' && p.item.server === VPC && !VPC_READONLY.has(p.item.tool)) {
              setTimeout(() => { if (!done && ![...this.asks.values()].some((a) => a.run === run)) this._computer(run, true); }, 300);
            }
            break;
          case 'item/agentMessage/delta': {
            const b = items.get(p.itemId);
            if (b) b.text += p.delta || ''; else upsert({ type: 'agentMessage', id: p.itemId, text: p.delta || '' });
            emitBlocks(); break;
          }
          case 'serverRequest/resolved': this._onResolved(p); break;
          case 'error':
            if (!p.willRetry && p.error && !NOISE.test(p.error.message || '')) msg.error = p.error.message;
            break;
          case 'thread/tokenUsage/updated': msg.usage = (p.tokenUsage && p.tokenUsage.last) || null; break;
          case 'turn/completed': {
            const tr = p.turn || {};
            for (const it of tr.items || []) upsert(it);
            const err = tr.status === 'failed' ? ((tr.error && tr.error.message) || msg.error || 'Lượt trả lời thất bại') : tr.status === 'interrupted' ? STOPPED : '';
            finish(err || (msg.blocks.some((b) => b.kind === 'text') ? '' : msg.error || ''));
            break;
          }
          default:
        }
      };
      const onExit = (e) => finish(e && /Không tìm thấy Codex/.test(e.message) ? NO_CODEX : 'Codex dừng đột ngột: ' + (e ? e.message : ''));
      this.running.set(id, run);
      srv.hold();
      srv.on('notification', onNote);
      srv.on('exit', onExit);

      (async () => {
        const set = simi.chatSettings({ model: t.model, effort: t.effort, sandbox: t.sandbox });
        const gen = await srv.start();
        const cu = await this.computerUse();
        try { fs.mkdirSync(SCRATCH, { recursive: true }); } catch { /* bỏ qua */ }
        const guide = CHAT_GUIDE + (/claude|opus|sonnet|haiku/i.test(set.model || '') ? '\n' + CLAUDE_DESIGN : '') + '\n' + docGuide(vietFonts()) + '\n' + computerGuide({ native: !!(cu && cu.native), enabled: this.getConfig().computerControl !== false });
        const threadOpts = { cwd: dir, model: set.model, modelProvider: set.modelProvider, approvalPolicy: set.approvalPolicy, sandbox: set.sandbox, config: { ...set.config, ...this.extraConfig() }, developerInstructions: guide };
        if (t.codexThread && !srv.loaded.has(t.codexThread)) {
          try {
            await srv.request('thread/resume', { ...threadOpts, threadId: t.codexThread, excludeTurns: true }, 60000);
            if (srv.gen === gen) srv.loaded.add(t.codexThread);
          } catch (e) {
            if (/active writer/i.test(e.message)) throw new Error('Đoạn chat này đang mở và chạy trong ChatGPT Work. Chờ bên đó trả lời xong (hoặc đóng đoạn chat bên đó) rồi gửi lại.');
            if (!/not found|no rollout|no such|unknown thread|does not exist|không tìm thấy/i.test(e.message)) throw e;
            t.codexThread = null; // phiên Codex cũ đã bị xóa → bắt đầu phiên mới, giữ nguyên lịch sử hiển thị
          }
        }
        if (!t.codexThread) {
          const r = await srv.request('thread/start', threadOpts, 60000);
          t.codexThread = r.thread.id;
          if (srv.gen === gen) srv.loaded.add(t.codexThread);
          this.store.save(t);
        }
        run.codexId = t.codexThread;
        if (run.stopped) return finish(STOPPED);
        const input = [{ type: 'text', text: prompt, text_elements: [] }, ...atts.filter((a) => a.image).map((a) => ({ type: 'localImage', path: a.path })),
          ...ments.filter((m) => m.kind === 'plugin').map((m) => ({ type: 'mention', name: m.name, path: `plugin://${m.id}` }))];
        noteChatModel(set.model);
        const r = await srv.request('turn/start', { threadId: t.codexThread, input, cwd: dir, model: set.model, effort: set.effort, approvalPolicy: set.approvalPolicy, sandboxPolicy: set.sandboxPolicy }, 60000);
        run.turnId = r.turn && r.turn.id;
        if (run.stopped && run.turnId) srv.request('turn/interrupt', { threadId: run.codexId, turnId: run.turnId }).catch(() => finish(STOPPED));
      })().catch((e) => finish(/Không tìm thấy Codex|ENOENT/.test(e.message) ? NO_CODEX : e.message));
    });
  }

  // ---------- ⚡ trả lời nhanh: gọi thẳng /v1/responses của Gateway, stream chữ ----------
  async _sendFast({ t, msg, text, atts, persona, emit, t0, pre = null }) {
    const auth = simi.gatewayAuth();
    const model = t.model || simi.readCodexConfig().defaultModel;
    if (!auth.baseUrl || !auth.key || !model) return ESCALATE;
    const run = { threadId: t.id, t, msg, stopped: false, fast: true };
    const ac = new AbortController();
    let stopReason = '';
    run.abort = (reason) => { stopReason = reason || STOPPED; ac.abort(); };
    this.running.set(t.id, run);
    let full = ''; let shown = false; let lastSave = 0; let emitTimer = null; let usage = null; let failure = '';
    let stalled = 0; let firstByteMs = null; let firstTextMs = null; let idle = null;
    const show = (now) => {
      msg.blocks = [{ kind: 'text', id: 'fast', text: full }];
      const go = () => { emitTimer = null; emit({ ev: 'blocks', blocks: msg.blocks }); if (Date.now() - lastSave > 1500) { lastSave = Date.now(); this.store.save(t); } };
      if (now) { clearTimeout(emitTimer); go(); } else if (!emitTimer) emitTimer = setTimeout(go, 50);
    };
    try {
      const body = fastRequest(t, model, text, atts, persona);
      const headers = { authorization: `Bearer ${auth.key}`, 'content-type': 'application/json', accept: 'text/event-stream' };
      if (auth.clientId) headers['x-ltn-client-id'] = auth.clientId;
      // chờ quá lâu mà không có dữ liệu gì → báo rõ cho user (chuyển sang Codex lúc này chỉ làm chờ gấp đôi vì cùng model, cùng máy chủ)
      const watch = (ms) => { clearTimeout(idle); idle = setTimeout(() => { stalled = Math.max(1, Math.round((Date.now() - t0) / 1000)); ac.abort(); }, ms); };
      const slow = IMAGE_CHAT.test(model || '');
      noteChatModel(model);
      watch(slow ? IMAGE_WAIT_MS : FAST_FIRST_BYTE_MS);
      let res;
      try { res = await fetch(`${auth.baseUrl}/responses`, { method: 'POST', headers, body: JSON.stringify(body), signal: ac.signal }); } catch (e) { clearTimeout(idle); throw e; }
      firstByteMs = Date.now() - t0;
      if (!res.ok) {
        const raw = await res.text().catch(() => '');
        let m = ''; try { m = JSON.parse(raw).error.message; } catch { m = raw.slice(0, 300); }
        throw new Error(m || `Gateway trả HTTP ${res.status}`);
      }
      const reader = res.body.getReader(); const dec = new TextDecoder(); let buf = '';
      for (;;) {
        watch(slow ? IMAGE_WAIT_MS : FAST_IDLE_MS);
        const { value, done } = await reader.read();
        if (done) break;
        buf += dec.decode(value, { stream: true });
        let i;
        while ((i = buf.search(/\r?\n\r?\n/)) >= 0) {
          const block = buf.slice(0, i); buf = buf.slice(i).replace(/^\r?\n\r?\n/, '');
          const data = block.split(/\r?\n/).filter((l) => l.startsWith('data:')).map((l) => l.slice(5).trim()).join('');
          if (!data || data === '[DONE]') continue;
          let ev; try { ev = JSON.parse(data); } catch { continue; }
          if (ev.type === 'response.output_text.delta' && typeof ev.delta === 'string') {
            if (firstTextMs === null) firstTextMs = Date.now() - t0;
            full += ev.delta;
            // đầu câu trả lời có thể là dấu hiệu "cần công cụ" → chưa hiện cho tới khi chắc chắn không phải
            if (!shown && (full.length >= ESCALATE_MARK.length || !ESCALATE_MARK.startsWith(full.trimStart()))) shown = !full.trimStart().startsWith(ESCALATE_MARK);
            if (shown) show();
            if (!shown && full.trimStart().startsWith(ESCALATE_MARK)) { ac.abort(); break; }
          } else if (ev.type === 'response.completed' || ev.type === 'response.incomplete') {
            const r = ev.response || {}; usage = r.usage || null;
            if (!full && Array.isArray(r.output)) full = r.output.flatMap((o) => (o.content || [])).filter((c) => c.type === 'output_text').map((c) => c.text).join('');
          } else if (ev.type === 'response.failed' || ev.type === 'error') {
            failure = (ev.response && ev.response.error && ev.response.error.message) || (ev.error && ev.error.message) || ev.message || 'Lượt trả lời thất bại';
          }
        }
        if (ac.signal.aborted) break;
      }
    } catch (e) {
      if (!stopReason && !failure && !stalled && !(full.trimStart().startsWith(ESCALATE_MARK))) failure = e.message || String(e);
    } finally {
      clearTimeout(emitTimer); clearTimeout(idle);
      // chuyển sang Codex thì giữ chỗ (bấm Dừng lúc đang chuyển vẫn ăn); xong / dừng thì nhả
      if (pre) this.running.set(t.id, pre); else this.running.delete(t.id);
    }
    const sec = (ms) => (ms === null ? '–' : (ms / 1000).toFixed(1) + 's');
    this.emit({ type: 'log', level: 'info', text: `⚡ Trả lời nhanh (${model}): Gateway phản hồi sau ${sec(firstByteMs)}, chữ đầu tiên sau ${sec(firstTextMs)}, tổng ${sec(Date.now() - t0)}` });
    if (stalled && !stopReason) {
      this.running.delete(t.id);
      if (shown) show(true);
      const err = shown
        ? `Model ${model} ngừng trả lời giữa chừng (không có dữ liệu ${Math.round((IMAGE_CHAT.test(model || '') ? IMAGE_WAIT_MS : FAST_IDLE_MS) / 1000)} giây). Bấm gửi lại nếu cần phần còn lại.`
        : `Model ${model} chưa trả lời sau ${stalled} giây – máy chủ AI đang chậm hoặc model đang quá tải. Bấm gửi lại, hoặc chọn model khác (model có nhãn ⚡ nhanh).`;
      return new Promise((resolve) => this._finish(t, msg, { error: err, ms: Date.now() - t0 }, emit, resolve));
    }
    if (stopReason) { this.running.delete(t.id); if (full && !full.trimStart().startsWith(ESCALATE_MARK)) show(true); return new Promise((resolve) => this._finish(t, msg, { error: stopReason, ms: Date.now() - t0 }, emit, resolve)); }
    // cần công cụ, hoặc lỗi trước khi kịp trả lời → chạy bằng Codex như thường
    // model không viết chữ nào (ví dụ định gọi công cụ) cũng coi là cần công cụ
    if (full.trimStart().startsWith(ESCALATE_MARK) || (failure && !shown) || (!failure && !full.trim())) {
      if (failure) this.emit({ type: 'log', level: 'info', text: 'Trả lời nhanh không được (' + failure + ') → chuyển sang chế độ công cụ' });
      return ESCALATE;
    }
    this.running.delete(t.id);
    show(true);
    msg.fast = true; msg.usage = usage ? { inputTokens: usage.input_tokens, outputTokens: usage.output_tokens } : null;
    return new Promise((resolve) => this._finish(t, msg, { error: failure || '', ms: Date.now() - t0 }, emit, resolve));
  }

  // ảnh chụp màn hình (Computer Use, trình duyệt) trong kết quả công cụ → lưu file để xem lại trong đoạn chat
  _toolResult(threadId, it, block) {
    // một số bản Codex gói kết quả có ảnh thành 1 đoạn text JSON {"content":[…]} → mở ra
    const flat = (list) => (list || []).flatMap((c) => {
      if (c && c.type === 'text' && /^\s*\{"content":\[/.test(c.text || '')) { try { return flat(JSON.parse(c.text).content); } catch { return [c]; } }
      return [c];
    });
    const content = flat(it.result && it.result.content);
    const text = content.filter((c) => c.type === 'text').map((c) => c.text).join('\n').trim();
    if (text && !block.output) block.output = text.slice(0, 1500);
    const img = content.filter((c) => c.type === 'image' && c.data).pop();
    if (img) {
      try {
        const ext = /jpe?g/.test(img.mimeType || '') ? 'jpg' : 'png';
        block.shot = this.saveUpload(threadId, 'man-hinh.' + ext, Buffer.from(img.data, 'base64'));
      } catch { /* bỏ qua ảnh hỏng */ }
    }
  }

  // ---------- công cụ: Computer Use, trình duyệt SIMI, plugin, MCP ----------
  async tools() {
    const cfg = simi.readCodexConfig();
    const out = { engine: { cmd: this.codex.getCmd(), desktop: !!simi.desktopCodex() && this.codex.getCmd() === simi.desktopCodex() }, browserConfigured: !!cfg.browserMcp, plugins: [], mcp: [], errors: [] };
    const [pl, mcp] = await Promise.all([
      this.codex.plugins().catch((e) => ({ plugins: [], errors: [e.message] })),
      this.codex.mcpServers().catch((e) => { out.errors.push(e.message); return []; }),
    ]);
    out.plugins = pl.plugins; out.errors.push(...(pl.errors || [])); out.mcp = mcp;
    out.computerUse = computerUseStatus(pl.plugins, mcp);
    const br = mcp.find((m) => m.name === simi.BROWSER_MCP);
    out.browser = { configured: !!cfg.browserMcp, status: br ? br.status : cfg.browserMcp ? 'notStarted' : 'notInstalled', tools: br ? br.tools : 0, error: br && br.error };
    return out;
  }

  async computerUse() {
    try {
      const [plugins, servers] = await Promise.all([this.codex.plugins(), this.codex.mcpServers()]);
      return computerUseStatus(plugins.plugins, servers);
    } catch { return null; }
  }

  async checkComputerUse({ setup = false } = {}) {
    if (this._computerUseSetup && !setup) throw new Error('Đang cài bổ sung Computer Use. Chờ hoàn tất rồi kiểm tra lại.');
    if (this.getConfig().computerControl === false) throw new Error('Điều khiển máy tính đang tắt trong Cài đặt.');
    if (this.running.size) throw new Error('Chờ lượt chat đang chạy kết thúc rồi kiểm tra lại.');
    this.codex.hold();
    try {
      const info = await this.computerUse();
      if (!info || !info.native) throw new Error(info && (info.error || info.note) || 'Plugin OpenAI hoặc runtime node_repl chưa sẵn sàng.');
      // Read-only probe: exercise the actual bridge without screenshots or input.
      const result = await this.codex.callTool('node_repl', 'js', {
        code: "if (!globalThis.sky) { const { sky } = await import('@oai/sky'); globalThis.sky = sky; } nodeRepl.write(JSON.stringify({ target: sky.target, appCount: (await sky.list_apps()).length }));",
        title: 'Kiểm tra Computer Use OpenAI (chỉ đọc danh sách ứng dụng)',
      }, this.defaultDir());
      const text = (result.content || []).filter(c => c.type === 'text').map(c => c.text).join('\n');
      if (result.isError) throw new Error(text || 'Runtime OpenAI báo lỗi.');
      let probe; try { probe = JSON.parse(text); } catch { throw new Error('Runtime chưa trả về kết quả kiểm tra hợp lệ.'); }
      if (probe.target !== 'windows' || !Number.isInteger(probe.appCount)) throw new Error('Runtime Windows chưa sẵn sàng.');
      return { ok: true, backend: 'openai', appCount: probe.appCount };
    } finally { this.codex.release(); }
  }

  async setupComputerUse() {
    if (this._computerUseSetup || this.running.size || this.codex.active) throw new Error('Chờ lượt chat hoặc kiểm tra đang chạy kết thúc rồi cài bổ sung.');
    if (this.getConfig().computerControl === false) throw new Error('Điều khiển máy tính đang tắt. Bật lại trong Cài đặt trước khi thiết lập.');
    const helpUrl = 'https://learn.chatgpt.com/docs/computer-use';
    const result = (status, message, extra = {}) => ({ ok: status === 'ready', status, message, helpUrl, ...extra });
    if (process.platform !== 'win32') return result('unsupported', 'Luồng thiết lập này hiện hỗ trợ Windows. Xem hướng dẫn OpenAI cho máy của bạn.');
    this._computerUseSetup = true;
    try {
      let installedNow = false;
      this.codex.hold();
      try {
        const catalog = await this.codex.plugins();
        const entries = catalog.plugins.filter(p => p.name === 'computer-use');
        const installed = entries.find(p => p.installed && p.enabled !== false) || entries.find(p => p.installed);
        // Respect an existing user/admin decision; do not silently re-enable it.
        if (installed && installed.enabled === false) return result('disabled', 'Plugin Computer Use đang tắt. Bật lại trong phần Plugins của Codex rồi kiểm tra lại.');
        if (!installed) {
          const candidate = entries.find(p => p.available);
          if (!candidate) return result('unavailable', 'Danh mục hiện tại chưa có plugin Computer Use được phép cài. Cài hoặc cập nhật ứng dụng Codex chính thức, mở Plugins để thiết lập rồi quay lại kiểm tra.');
          await this.codex.installPlugin(candidate.name, candidate.marketplacePath);
          installedNow = true;
        }
      } finally { this.codex.release(); }
      // Restart only while no chat is active, so new plugin configuration is loaded.
      if (installedNow) this.codex.stop();
      try {
        const probe = await this.checkComputerUse({ setup: true });
        return result('ready', 'Computer Use OpenAI đã được kiểm tra và hoạt động. Không có thao tác chuột hoặc bàn phím trong lần kiểm tra này.', { installedNow, appCount: probe.appCount });
      } catch (e) {
        return result('runtimeMissing', (installedNow ? 'Đã chạy bước cài plugin, nhưng ' : 'Plugin đã có, nhưng ') + 'runtime chưa được kiểm tra thành công. Cài hoặc cập nhật ứng dụng Codex chính thức và thiết lập Computer Use theo hướng dẫn, sau đó bấm kiểm tra lại.', { installedNow, detail: e.message });
      }
    } finally { this._computerUseSetup = false; }
  }

  installPlugin(name, marketplacePath) { return this.codex.installPlugin(name, marketplacePath); }

  openBrowser(url) { return this.codex.callTool(simi.BROWSER_MCP, 'browser_open_window', url ? { url } : {}, this.defaultDir()); }

  _finish(t, msg, { error, ms }, emit, resolve) {
    msg.status = error ? (error === STOPPED ? 'stopped' : 'error') : 'done';
    if (error) msg.error = error;
    msg.ms = ms || 0;
    t.codexUpdatedAt = null; // lần mở sau đối chiếu lại với Codex (số lượt khớp thì giữ nguyên)
    this.store.save(t);
    emit({ ev: 'done', message: msg, title: t.title, codexThread: t.codexThread });
    resolve({ ok: !error, message: msg });
  }
}

module.exports = { cmdProgram, askKey, docGuide, isScratch, collectFiles, stepFromItem, SCRATCH, ChatEngine };
