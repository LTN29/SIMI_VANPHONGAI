// 🎋 Quẻ đầu ngày do AI viết: mỗi lần lắc, model qua SIMI Gateway viết một thông điệp may mắn, đầy năng lượng,
// riêng cho người rút (tên, team, loại quẻ đã bốc). Số quẻ, loại quẻ, số / màu may mắn do app bốc ngẫu nhiên;
// AI chỉ viết tên quẻ + thông điệp + việc nên làm. Lỗi / quá lâu → app dùng thông điệp có sẵn.
const simi = require('./simi');

const THEMES = ['khách hàng và chốt đơn', 'đồng đội và tinh thần làm việc nhóm', 'sự sáng tạo và ý tưởng mới', 'sự kiên trì', 'niềm vui trong công việc',
  'học hỏi và tiến bộ', 'tài lộc và cơ hội', 'sự tự tin', 'lòng biết ơn', 'khởi đầu mới', 'sự bình tĩnh và sáng suốt', 'năng lượng buổi sáng'];
const TONES = ['ấm áp, truyền cảm hứng', 'hài hước, dí dỏm', 'hào hứng, rộn ràng', 'nhẹ nhàng, sâu sắc', 'mạnh mẽ như lời cổ vũ của huấn luyện viên'];

const GUIDE = [
  'Bạn là "thầy quẻ" vui tính của văn phòng SIMI. Mỗi sáng nhân viên rút một quẻ đầu ngày để lấy may.',
  'Viết một quẻ: thông điệp may mắn, tích cực, đầy năng lượng, tiếng Việt tự nhiên, gọi người rút là "bạn" (có thể nhắc tên họ một lần).',
  'Không hù doạ, không điềm xấu, không mê tín đáng sợ, không hứa con số tiền cụ thể, không nói về bệnh tật, chính trị, tôn giáo cụ thể.',
  'Chỉ trả về đúng một đối tượng JSON, không thêm chữ nào khác: {"ten_que": "tên quẻ 2–3 từ, ví dụ Khai Vận", "thong_diep": "2–3 câu, tối đa 60 từ", "nen_lam": "1 việc nên làm hôm nay, tối đa 10 từ"}',
].join('\n');

function textOf(payload) {
  if (typeof payload?.output_text === 'string') return payload.output_text;
  return (payload?.output || []).flatMap((o) => o.content || []).filter((c) => c.type === 'output_text' || c.type === 'text').map((c) => c.text).join('');
}

async function askFortune({ name = '', team = '', level = 'Đại cát', n = 1, date = '' } = {}, { timeoutMs = 25000 } = {}) {
  const auth = simi.gatewayAuth();
  const model = simi.readCodexConfig().defaultModel;
  if (!auth.baseUrl || !auth.key || !model) throw new Error('Chưa kết nối SIMI Gateway');
  const pick = (a) => a[Math.floor(Math.random() * a.length)];
  const weekday = ['Chủ nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy'][new Date().getDay()];
  const input = `Người rút: ${String(name).slice(0, 40) || 'một đồng nghiệp'}${team ? ` (team ${String(team).slice(0, 40)})` : ''}. Hôm nay ${weekday}${date ? ` ${date}` : ''}.\n`
    + `Quẻ số ${n}, loại quẻ: ${level}. Chủ đề gợi ý: ${pick(THEMES)}. Giọng văn: ${pick(TONES)}. Viết mới, đừng dùng câu sáo rỗng.`;
  const headers = { authorization: `Bearer ${auth.key}`, 'content-type': 'application/json' };
  if (auth.clientId) headers['x-ltn-client-id'] = auth.clientId;
  const res = await fetch(`${auth.baseUrl}/responses`, {
    method: 'POST', headers, signal: AbortSignal.timeout(timeoutMs),
    body: JSON.stringify({ model, instructions: GUIDE, input, stream: false, store: false, max_output_tokens: 600 }),
  });
  const raw = await res.text();
  let payload = null; try { payload = JSON.parse(raw); } catch { payload = null; }
  if (!res.ok) throw new Error((payload && payload.error && payload.error.message) || `Gateway trả HTTP ${res.status}`);
  const text = textOf(payload);
  const m = text.match(/\{[\s\S]*\}/);
  let j = null; try { j = m ? JSON.parse(m[0]) : null; } catch { j = null; }
  const clean = (v, max) => String(v || '').replace(/\s+/g, ' ').trim().slice(0, max);
  const result = { name: clean(j && j.ten_que, 30).replace(/^quẻ\s+/i, ''), message: clean(j && j.thong_diep, 400), do: clean(j && j.nen_lam, 80), model };
  if (!result.message) throw new Error('AI chưa viết được quẻ');
  return result;
}

module.exports = { askFortune };
