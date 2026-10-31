// Test bộ điều phối bằng chế độ Giả lập: giao cho Trưởng phòng (cả phòng) và giao cho 1 người.
const os = require('os');
const fs = require('fs');
const path = require('path');
const { runTask } = require('../src/orchestrator');
const { DEFAULT_CONFIG } = require('../src/store');
const { check, run } = require('./helpers');

run(async () => {
  const out = fs.mkdtempSync(path.join(os.tmpdir(), 'vpai-orch-'));
  const config = structuredClone(DEFAULT_CONFIG);
  for (const target of ['truong_phong', 'viet_van_ban']) {
    const events = [];
    const r = await runTask({ id: 't-' + target, title: 'Báo cáo tháng 10', text: 'Soạn báo cáo tháng 10', targetId: target }, {
      config, signal: new AbortController().signal, getSecret: () => '', workDir: out, outputDir: out, simSpeed: 0.02,
      emit: (e) => events.push(e),
    });
    console.log(`Giao cho ${target}:`);
    check(r.file && fs.existsSync(r.file), 'có file kết quả');
    check(fs.readFileSync(r.file, 'utf8').trim().length > 50, 'kết quả có nội dung');
    check(events.some((e) => e.type === 'result'), 'có sự kiện hoàn thành');
    check(events.some((e) => e.type === 'say' && e.kind === 'review'), 'người Kiểm tra đã soát');
    if (target === 'truong_phong') check(events.some((e) => e.type === 'say' && e.kind === 'plan'), 'Trưởng phòng lập kế hoạch');
  }
  check(fs.readdirSync(path.join(out, 'nhat-ky')).length === 2, 'lưu đủ 2 nhật ký');
});
