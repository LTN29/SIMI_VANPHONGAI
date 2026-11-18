// Giao diện nhẹ cho đoạn chat dài: chỉ vẽ 40 tin cuối, cuộn lên / bấm "Xem tin cũ hơn" thì nạp thêm mà giữ chỗ đọc,
// ảnh trong chat là ảnh thu nhỏ (không nạp cả ảnh gốc), stream chỉ thay khối chữ đang đổi.
const fs = require('fs');
const path = require('path');
const { launch, check, finish, run } = require('./helpers');

run(async () => {
  const { app, win, errors, shot, userData } = await launch({ prefix: 'chatwin', config: { lobbyEnabled: false, autoUpdate: false } });
  await win.waitForSelector('.viewtabs');
  await win.waitForTimeout(1500);
  if (await win.locator('#modal:not(.hidden)').count()) await win.click('#modalClose');
  await win.click('.viewtabs button[data-v="chat"]');
  // ảnh lớn 3000×2000 (tạo bằng nativeImage trong tiến trình chính) đặt trong thư mục file chat
  const dir = path.join(userData, 'chats', 'chat-files', 'win'); fs.mkdirSync(dir, { recursive: true });
  const big = path.join(dir, 'anh-lon.jpg');
  const b64 = await app.evaluate(({ nativeImage }) => {
    const w = 3000; const h = 2000; const buf = Buffer.alloc(w * h * 4);
    for (let i = 0; i < w * h; i++) { buf[i * 4] = i % 251; buf[i * 4 + 1] = (i >> 3) % 241; buf[i * 4 + 2] = (i * 7) % 239; buf[i * 4 + 3] = 255; }
    return nativeImage.createFromBitmap(buf, { width: w, height: h }).toJPEG(95).toString('base64');
  });
  fs.writeFileSync(big, Buffer.from(b64, 'base64'));
  const t = await win.evaluate(() => window.vp.chat.create({ title: 'Đoạn dài' }));
  const f = path.join(userData, 'chats', t.id + '.json');
  const msgs = [];
  for (let i = 0; i < 100; i++) {
    msgs.push({ role: 'user', text: 'Hỏi ' + i, ts: i, ...(i === 99 ? { attachments: [{ path: big, name: 'anh-lon.jpg', image: true }] } : {}) });
    msgs.push({ role: 'assistant', status: 'done', blocks: [{ kind: 'text', text: 'Trả lời **' + i + '**\n\n' + 'Nội dung. '.repeat(40) }], files: [], ts: i });
  }
  fs.writeFileSync(f, JSON.stringify({ ...JSON.parse(fs.readFileSync(f, 'utf8')), messages: msgs }));
  await win.evaluate((id) => window.VPChat.openThread(id), t.id);
  await win.waitForSelector('#chMsgs .ch-older');
  check(await win.locator('#chMsgs .cmsg').count() === 40, 'đoạn 200 tin chỉ vẽ 40 tin cuối');
  check(/Xem 160 tin cũ hơn/.test(await win.locator('.ch-older').innerText()), 'có nút "Xem 160 tin cũ hơn"');
  // ảnh thu nhỏ
  await win.waitForFunction(() => { const i = document.querySelector('#chMsgs .mimg img'); return i && i.naturalWidth > 0; }, null, { timeout: 15000 });
  const im = await win.evaluate(() => { const i = document.querySelector('#chMsgs .mimg img'); return { w: i.naturalWidth, h: i.naturalHeight, kb: Math.round(i.src.length / 1024), lazy: i.loading }; });
  check(im.w === 720 && im.h === 480, `ảnh xem trước thu về 720×480 (đang ${im.w}×${im.h})`);
  check(im.kb < 400 && im.kb * 1024 < fs.statSync(big).size, `ảnh xem trước nhẹ hơn ảnh gốc (${im.kb}KB / ${Math.round(fs.statSync(big).size / 1024)}KB)`);
  check(im.lazy === 'lazy', 'ảnh nạp lười (loading=lazy)');
  // bấm nạp thêm: giữ chỗ đọc
  const keep = await win.evaluate(async () => {
    const box = document.querySelector('#chMsgs');
    const first = box.querySelector('.cmsg'); const y0 = first.getBoundingClientRect().top;
    box.querySelector('.ch-older').click();
    await new Promise((r) => requestAnimationFrame(r));
    return { n: box.querySelectorAll('.cmsg').length, dy: Math.abs(first.getBoundingClientRect().top - y0) };
  });
  check(keep.n >= 80, `bấm nút → có thêm tin cũ (${keep.n})`);
  check(keep.dy < 2, 'nạp thêm tin cũ mà không nhảy chỗ đang đọc');
  // cuộn lên đầu → tự nạp tiếp cho tới hết
  for (let k = 0; k < 8 && await win.locator('#chMsgs .ch-older').count(); k++) {
    await win.evaluate(() => document.querySelector('#chMsgs').scrollTo({ top: 0, behavior: 'instant' }));
    await win.waitForTimeout(250);
  }
  check(await win.locator('#chMsgs .cmsg').count() === 200 && !(await win.locator('#chMsgs .ch-older').count()), 'cuộn lên đầu tự nạp đủ 200 tin');
  await shot('older');
  // mở lại chính đoạn đang xem (vd quay lại app) → giữ phần đã nạp; sang đoạn khác rồi quay lại → về 40 tin cuối
  await win.evaluate((id) => window.VPChat.openThread(id), t.id);
  check(await win.locator('#chMsgs .cmsg').count() === 200, 'mở lại đoạn đang xem → giữ nguyên phần đã nạp');
  const other = await win.evaluate(() => window.vp.chat.create({ title: 'Đoạn khác' }));
  await win.evaluate((id) => window.VPChat.openThread(id), other.id);
  await win.evaluate((id) => window.VPChat.openThread(id), t.id);
  check(await win.locator('#chMsgs .cmsg').count() === 40, 'sang đoạn khác rồi quay lại → lại chỉ 40 tin cuối');
  // stream: khối chữ đã xong giữ nguyên node, chỉ thay khối đang gõ
  const st = await win.evaluate(() => {
    const m = { role: 'assistant', status: 'running', ts: 9e9, blocks: [{ kind: 'text', text: 'Khối một xong.' }, { kind: 'text', text: 'Đang gõ' }] };
    window.VPChat._paintLast(m, false);
    const box = document.querySelector('#chMsgs');
    const a = box.querySelector('.cmsg.bot:last-child .mbody .md');
    m.blocks[1].text = 'Đang gõ thêm chữ';
    window.VPChat._paintLast(m, false);
    const mds = box.querySelectorAll('.cmsg.bot:last-child .mbody .md');
    return { same: mds[0] === a, text: mds[1].textContent, count: mds.length };
  });
  check(st.same && st.count === 2 && st.text === 'Đang gõ thêm chữ', 'stream giữ khối chữ đã xong, chỉ thay khối đang gõ');
  const fin = await win.evaluate(() => {
    const m = { role: 'assistant', status: 'done', ms: 1200, ts: 9e9, blocks: [{ kind: 'text', text: 'Khối một xong.' }, { kind: 'text', text: 'Xong hết' }] };
    window.VPChat._paintLast(m, true);
    const last = document.querySelector('#chMsgs .cmsg.bot:last-child');
    return { foot: !!last.querySelector('.mfoot'), running: last.classList.contains('running') };
  });
  check(fin.foot && !fin.running, 'trả lời xong → vẽ lại đủ (có dòng model / thời gian)');
  // thời gian từng bước + chia thời gian công cụ / AI ở chân câu trả lời → thấy chậm ở đâu
  const tm = await win.evaluate(() => {
    const m = { role: 'assistant', status: 'done', ms: 300000, ts: 9e9, blocks: [
      { kind: 'step', id: 'a', sk: 'mcp', server: 'simi_browser', title: 'image_generate', status: 'completed', ms: 210000 },
      { kind: 'step', id: 'b', sk: 'cmd', title: 'cat SKILL.md', status: 'completed', ms: 2000 },
      { kind: 'text', text: 'Ảnh đây' }] };
    window.VPChat._paintLast(m, true);
    const last = document.querySelector('#chMsgs .cmsg.bot:last-child');
    return { steps: [...last.querySelectorAll('.sms')].map((x) => x.textContent + (x.classList.contains('slow') ? '!' : '')), split: (last.querySelector('.mtime') || {}).textContent || '', tip: (last.querySelector('.mtime') || {}).title || '' };
  });
  check(tm.steps.join(',') === '3p30!,2s', `mỗi bước hiện thời gian, bước ≥30 giây tô đỏ (${tm.steps})`);
  check(tm.split === '🔧 công cụ 3p32 · 🧠 AI 1p28' && /image_generate: 3p30/.test(tm.tip), `chân câu trả lời chia thời gian công cụ / AI (${tm.split})`);
  await finish(app, errors);
});
