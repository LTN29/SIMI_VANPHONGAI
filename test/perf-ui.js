// Đo tốc độ giao diện Chat (không phải test tự động): mở đoạn chat dài + 8 ảnh lớn, stream câu trả lời dài, đổi đoạn chat.
// Chạy: xvfb-run -a node test/perf-ui.js   (PERF_IMG_DIR = thư mục có img0..7.jpg ảnh chụp lớn)
const fs = require('fs');
const path = require('path');
const { launch, run } = require('./helpers');
const IMG = process.env.PERF_IMG_DIR || '/tmp/claude-0/perf2';

run(async () => {
  const { app, win, userData } = await launch({ prefix: 'perf', config: { lobbyEnabled: false, autoUpdate: false } });
  await win.waitForSelector('.viewtabs'); await win.waitForTimeout(1500);
  if (await win.locator('#modal:not(.hidden)').count()) await win.click('#modalClose');
  await win.click('.viewtabs button[data-v="chat"]');
  const files = path.join(userData, 'chats', 'chat-files', 'perf'); fs.mkdirSync(files, { recursive: true });
  for (let k = 0; k < 8; k++) fs.copyFileSync(path.join(IMG, `img${k}.jpg`), path.join(files, `img${k}.jpg`));
  const mk = async (title, n, withImgs) => {
    const t = await win.evaluate((x) => window.vp.chat.create({ title: x }), title);
    const f = path.join(userData, 'chats', t.id + '.json');
    const md = (i) => `## Phần ${i}\n\nĐoạn văn **đậm** và *nghiêng* với [link](https://example.com) số ${i}.\n\n- ý một\n- ý hai\n- ý ba\n\n\`\`\`js\nconst x = ${i};\nconsole.log(x * 2);\n\`\`\`\n\n| Cột A | Cột B |\n|---|---|\n| ${i} | ${i * 2} |\n` + 'Nội dung mô tả sản phẩm dài. '.repeat(30);
    const msgs = [];
    for (let i = 0; i < n; i++) {
      msgs.push({ role: 'user', text: 'Câu hỏi số ' + i, ts: i, ...(withImgs && i === n - 2 ? { attachments: Array.from({ length: 8 }, (_, k) => ({ path: path.join(files, `img${k}.jpg`), name: `img${k}.jpg`, image: true })) } : {}) });
      msgs.push({ role: 'assistant', status: 'done', model: 'gpt-6.1-sol', ms: 3000, blocks: [{ kind: 'step', id: 's' + i, sk: 'cmd', title: 'npm test', output: 'ok\n'.repeat(50), status: 'completed' }, { kind: 'text', text: md(i) }], files: [], ts: i });
    }
    fs.writeFileSync(f, JSON.stringify({ ...JSON.parse(fs.readFileSync(f, 'utf8')), messages: msgs }));
    return t.id;
  };
  const big = await mk('Đoạn chat dài', 200, true);
  const small = await mk('Đoạn chat ngắn', 3, false);
  const measure = async (id) => win.evaluate(async (tid) => {
    const t0 = performance.now();
    await window.VPChat.openThread(tid);
    await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)));
    const t1 = performance.now();
    const imgs = [...document.querySelectorAll('#chMsgs img.thumb')];
    await Promise.all(imgs.map((i) => (i.complete && i.naturalWidth ? 0 : new Promise((r) => { i.onload = i.onerror = r; setTimeout(r, 15000); }))));
    await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)));
    const srcKB = Math.round(imgs.reduce((a, i) => a + (i.src || '').length, 0) / 1024);
    return { openMs: Math.round(t1 - t0), withImagesMs: Math.round(performance.now() - t0), imgs: imgs.filter((i) => i.naturalWidth).length, imgDataKB: srcKB, nodes: document.querySelectorAll('#chMsgs *').length, msgs: document.querySelectorAll('#chMsgs .cmsg').length };
  }, id);
  const r = [];
  for (let k = 0; k < 3; k++) { r.push({ big: await measure(big) }); r.push({ small: await measure(small) }); }
  console.log(JSON.stringify({ runs: r }));
  // stream thật: tin trả lời gồm 1 nhóm bước + chữ dài dần 120 lần (như model đang gõ), mỗi lần vẽ lại bằng hàm của app
  const stream = async (id) => win.evaluate(async (tid) => {
    await window.VPChat.openThread(tid);
    const m = { role: 'assistant', status: 'running', model: 'gpt-6.1-sol', ts: 9e9, blocks: [] };
    const para = 'Đây là một đoạn trả lời khá dài có **chữ đậm**, `mã`, và danh sách.\n\n- mục một\n- mục hai\n\n';
    const box = document.querySelector('#chMsgs');
    const last = box.querySelector('.cmsg.bot:last-child');
    if (!last) return null;
    const times = [];
    for (let i = 0; i < 120; i++) {
      const parts = Math.floor(i / 20) + 1; // cứ 20 lần lại có thêm một khối chữ mới (như sau mỗi lần gọi công cụ)
      m.blocks = [{ kind: 'step', id: 'x', sk: 'cmd', title: 'ls', status: 'completed' }];
      for (let p = 0; p < parts; p++) m.blocks.push({ kind: 'text', text: para.repeat(p < parts - 1 ? 20 : (i % 20) + 1) });
      const t0 = performance.now();
      window.VPChat._paintLast(m, false);
      void box.scrollHeight; // ép tính bố cục như trình duyệt phải làm trước khi vẽ
      times.push(performance.now() - t0);
    }
    times.sort((a, b) => a - b);
    return { avg: Math.round(times.reduce((a, b) => a + b, 0) / times.length * 10) / 10, p95: Math.round(times[Math.floor(times.length * 0.95)] * 10) / 10 };
  }, id);
  console.log(JSON.stringify({ streamMsPerUpdate: { big: await stream(big), small: await stream(small) } }));
  // cuộn lên đầu đoạn dài: nạp thêm tin cũ có giữ chỗ đọc không
  const older = await win.evaluate(async (tid) => {
    await window.VPChat.openThread(tid);
    const box = document.querySelector('#chMsgs');
    const before = box.querySelectorAll('.cmsg').length;
    box.scrollTo({ top: 0, behavior: 'instant' });
    await new Promise((r) => setTimeout(r, 400));
    return { before, after: box.querySelectorAll('.cmsg').length, hasBtn: !!box.querySelector('.ch-older'), scrollTop: Math.round(box.scrollTop) };
  }, big);
  console.log(JSON.stringify({ older }));
  const heap = await win.evaluate(() => Math.round(performance.memory.usedJSHeapSize / 1048576));
  console.log(JSON.stringify({ heapMB: heap }));
  await app.close();
});
