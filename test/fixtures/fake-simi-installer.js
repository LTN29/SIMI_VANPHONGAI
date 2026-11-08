// Bộ cài SIMI giả cho test giao diện: in các dòng giống bộ cài thật, kiểm tra key nhận qua biến môi trường (không qua dòng lệnh)
const mode = process.argv[2];
const key = process.env.LTN_TEAM_API_KEY || '';
const say = (t) => new Promise((r) => setTimeout(() => { console.log(t); r(); }, 250));
(async () => {
  if (mode === 'repair' && !key) { console.error('repair không tìm thấy API key đã lưu'); process.exit(3); }
  if (process.argv.some((a) => a.includes(key) && key)) { console.error('KEY LỘ TRÊN DÒNG LỆNH'); process.exit(4); }
  await say(mode === 'update' ? 'Update: dùng API key đã lưu, không yêu cầu nhập lại.' : 'Repair: dùng API key đã lưu, không yêu cầu nhập lại.');
  await say('Đang cài Codex CLI standalone chính thức từ OpenAI...');
  await say('Node.js: v22.0.0');
  await say('Đang cài thư viện Word/Excel/PDF...');
  if (process.env.FAKE_FAIL === mode) { console.error('Invoke-WebRequest : Unable to connect to the remote server'); process.exit(1); }
  await say('Đã cài/cập nhật 15 skill Simi. Khởi động lại Codex Desktop để nạp skill mới.');
  await say('Đã cài browser MCP tự động: C:\\x\\mcp.js');
  await say('Đang xác minh Combo SIMI AI qua Gateway...');
  await say('Cài đặt LTN Codex hoàn tất.');
  if (process.env.FAKE_KEY_OUT) require('fs').writeFileSync(process.env.FAKE_KEY_OUT, key);
})();
