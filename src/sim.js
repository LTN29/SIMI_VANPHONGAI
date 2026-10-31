// Chế độ Giả lập: trả lời mẫu, không gọi AI. Dùng để xem thử văn phòng hoạt động.
function sleep(ms, signal) {
  return new Promise((resolve, reject) => {
    const t = setTimeout(resolve, ms);
    if (signal) signal.addEventListener('abort', () => { clearTimeout(t); reject(new Error('Đã dừng')); }, { once: true });
  });
}

const rnd = (a, b) => a + Math.floor(Math.random() * (b - a));

async function respond(agent, req, ctx) {
  await sleep(rnd(3200, 5600) * (ctx.simSpeed || 1), ctx.signal);
  const title = req.taskTitle || 'công việc';
  switch (req.kind) {
    case 'ping':
      return 'OK';
    case 'plan': {
      const giao = (req.workers || []).map((w) => ({
        cho: w.id,
        viec: /nghiên cứu|phân tích/i.test(w.title)
          ? `Thu thập thông tin và số liệu chính cho "${title}".`
          : /viết|soạn/i.test(w.title)
            ? `Soạn bản hoàn chỉnh cho "${title}" dựa trên kết quả nghiên cứu.`
            : `Phụ trách phần "${w.title}" của "${title}".`,
      }));
      return JSON.stringify({ ke_hoach: `Chia "${title}" thành ${giao.length} phần, làm lần lượt rồi kiểm tra trước khi nộp.`, giao_viec: giao });
    }
    case 'work':
      if (req.canAsk && !req.asked && req.colleagues && req.colleagues.length && req.order > 0) {
        const c = req.colleagues[0];
        return `HOI[${c.id}]: Bạn có thể tóm tắt giúp mình 3 ý quan trọng nhất về "${title}" không?`;
      }
      if (req.revise) {
        return `**${agent.title} – bản đã sửa**\n\n- Đã bổ sung theo góp ý: ${req.feedback || ''}\n- Nội dung chính về "${title}" được trình bày lại rõ ràng hơn.\n- Kết luận: phương án đề xuất khả thi, cần theo dõi thêm sau 1 tháng.\n\n*(Nội dung giả lập)*`;
      }
      return `**${agent.title}**\n\n- Ý 1: tổng quan về "${title}".\n- Ý 2: các số liệu/dữ kiện liên quan (giả lập).\n- Ý 3: đề xuất hướng xử lý.\n\n*(Nội dung giả lập)*`;
    case 'answer':
      return `Ba ý chính: (1) bối cảnh hiện tại, (2) số liệu then chốt, (3) rủi ro cần lưu ý. *(giả lập)*`;
    case 'review':
      if (req.canRevise && req.attempt === 0) return 'SUA: Thiếu phần kết luận ngắn gọn ở cuối, bổ sung giúp mình.';
      return 'DAT\nNội dung đầy đủ, trình bày rõ ràng.';
    case 'final':
      return `# ${title}\n\n## Tóm tắt\nĐây là kết quả tổng hợp từ cả phòng (chế độ giả lập).\n\n${(req.parts || []).map((p) => `## ${p.title}\n${p.output}`).join('\n\n')}\n\n## Kết luận\nĐã hoàn thành và qua kiểm tra.`;
    default:
      return 'OK';
  }
}

module.exports = { respond, sleep };
