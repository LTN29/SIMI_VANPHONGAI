// NPC "Trợ lý SIMI" với Gateway thật + AI giả: lần đầu vào Sảnh được mời đi tour, hướng dẫn từng bước có chỉ tay
// (đi qua cả tab Chat), mẹo AI, admin chọn tài khoản chatbot làm NPC → hỏi đáp chạy bằng key của tài khoản đó, admin sửa hướng dẫn.
const fs = require('fs');
const path = require('path');
const http = require('http');
const { launch, check, finish, run } = require('./helpers');
const { makeCodexHome } = require('./fixtures/mock-gateway');
const { GW, startGatewayServer, colleague } = require('./fixtures/lobby-gateway');

const CID = '11111111-2222-3333-4444-555555555555';

run(async () => {
  if (!fs.existsSync(path.join(GW, 'src', 'lobby-npc.mjs'))) { console.log(`BỎ QUA: Gateway ở ${GW} chưa có NPC (đặt GATEWAY_DIR)`); return; }
  // AI giả (thay 9Router): trả lời theo câu hỏi, ghi lại key đã dùng
  const calls = [];
  const up = http.createServer(async (req, res) => {
    let raw = ''; for await (const c of req) raw += c;
    const body = raw ? JSON.parse(raw) : {};
    calls.push({ url: req.url, auth: req.headers.authorization, body });
    if (req.url === '/v1/models') { res.writeHead(200, { 'content-type': 'application/json' }); return res.end(JSON.stringify({ object: 'list', data: [{ id: 'SIMI-GPT', owned_by: 'combo' }, { id: 'SIMI-FREE', owned_by: 'combo' }] })); }
    if (req.url === '/v1/responses') {
      res.writeHead(200, { 'content-type': 'application/json' });
      return res.end(JSON.stringify({ id: 'r', object: 'response', status: 'completed', output: [{ type: 'message', role: 'assistant', content: [{ type: 'output_text', text: 'Bạn làm thế này nhé:\n\n1. Bấm nút **🖼️** cạnh ô chat\n2. Chọn ảnh rồi bấm Gửi' }] }] }));
    }
    res.writeHead(404); res.end('{}');
  });
  await new Promise((r) => up.listen(0, '127.0.0.1', r));
  const gw = await startGatewayServer({
    users: {
      'sales-ngoc': { displayName: 'Ngọc', teamId: 'SALES', key: 'k-ngoc' },
      'it-bao': { displayName: 'Bảo', teamId: 'IT', key: 'k-bao' },
      'simi-bot': { displayName: 'ChatBot', teamId: 'IT', role: 'PUBLIC_CHATBOT_SERVICE', memoryMode: 'none', key: 'k-bot-secret' },
    },
    env: { LOBBY_ADMINS: 'sales-ngoc', LOBBY_NPC_KEYS: 'k-bot-secret', UPSTREAM_BASE_URL: `http://127.0.0.1:${up.address().port}`, CODEX_COMBO_PREMIUM: 'SIMI-GPT', CODEX_COMBO_FREE: 'SIMI-FREE', CODEX_DEFAULT_POLICY: 'limited_daily', CODEX_DEFAULT_PREMIUM_LIMIT: '50' },
  });
  const bao = colleague(gw.url, 'k-bao'); await bao.waitFor('hello');

  const { app, win, errors, shot } = await launch({ prefix: 'lobbynpc', env: { CODEX_HOME: makeCodexHome(gw.url), LTN_TEAM_API_KEY: 'k-ngoc', LTN_CLIENT_ID: CID } });
  try {
    await win.waitForSelector('.welcome', { timeout: 20000 });
    await win.click('.sheet footer .linkbtn');
    await win.click('.viewtabs button[data-v="lobby"]');
    await win.waitForSelector('#lbConn.online', { timeout: 30000 });
    check(await win.evaluate(() => !!window.__lobby.npc && window.__lobby.npc.plate.textContent.includes('Trợ lý SIMI')), 'NPC Trợ lý SIMI đứng ở quầy lễ tân cổng vào Sảnh');

    // lần đầu vào Sảnh: NPC chào, mở bảng, mời đi tour
    await win.waitForSelector('#lbNpc:not(.hidden) .np-welcome', { timeout: 10000 });
    check(/đi tour 1 phút/.test(await win.evaluate(() => window.__lobby.npc.lastSay || '')), 'lần đầu vào Sảnh: NPC vẫy tay chào và mời đi tour');
    check(await win.locator('#lbNpc .np-guide').count() === 10, 'có sẵn 10 hướng dẫn (thêm đi một vòng Sảnh, chơi bida)');
    await shot('01-welcome');
    await win.click('#lbNpc .np-welcome .btn.primary');
    await win.waitForSelector('#npcCoach');
    check((await win.textContent('#npcCoach')).includes('Bước 1/6'), 'tour: thẻ hướng dẫn từng bước');
    await win.waitForSelector('.npc-spot');
    const ring = await win.evaluate(() => { const a = document.querySelector('.npc-spot').getBoundingClientRect(); const b = document.querySelector('.viewtabs').getBoundingClientRect(); return Math.abs(a.left - (b.left - 6)) < 2 && Math.abs(a.width - (b.width + 12)) < 2; });
    check(ring, 'vòng sáng chỉ đúng vào nút đang nói tới');
    // giọng đọc: bước 1 phát đúng file giọng đọc của câu đó, có nút tắt / bật
    await win.waitForFunction(() => window.VPNpc._state.audio && window.VPNpc._state.audio.readyState >= 1, null, { timeout: 10000 });
    const au = await win.evaluate(() => { const a = window.VPNpc._state.audio; const c = window.VPNpc._state.coach; return { src: a.src, have: window.VPNpc._state.audioKey, key: window.VPNpc.voiceKey(c.g.steps[c.i].text), dur: a.duration, err: !!a.error }; });
    check(au.src.startsWith('blob:') && au.have === au.key && !au.err && au.dur > 2, `Trợ lý đọc to bước đang hướng dẫn (${au.key}, ${au.dur.toFixed(1)} giây)`);
    await win.click('#npcVoice');
    check(await win.getAttribute('#npcVoice', 'aria-pressed') === 'false' && await win.evaluate(() => !window.VPNpc._state.audio && localStorage.getItem('vp.npcVoice') === 'false'), 'bấm 🔊 trên thẻ → tắt giọng đọc (nhớ cho lần sau)');
    await win.click('#npcVoice');
    check(await win.getAttribute('#npcVoice', 'aria-pressed') === 'true' && await win.evaluate(() => !!window.VPNpc._state.audio), 'bấm lại → đọc lại bước đang xem');
    const { GUIDES } = (() => { global.window = global.window || {}; require('../src/renderer/npc-guides.js'); return global.window.VPNpcGuides; })();
    const keyOf = (t) => { const b = Buffer.from(String(t).trim(), 'utf8'); let h = 0x811c9dc5; for (const x of b) { h ^= x; h = Math.imul(h, 0x01000193) >>> 0; } return h.toString(16).padStart(8, '0') + '-' + b.length; };
    const pack = (() => { const w = {}; new Function('window', fs.readFileSync(path.join(__dirname, '..', 'src', 'renderer', 'npc-voice.js'), 'utf8'))(w); return w.VPNpcVoice; })();
    const missing = GUIDES.flatMap((g) => g.steps).filter((st) => !pack.clips[keyOf(st.text)]);
    check(!missing.length, `cả ${GUIDES.flatMap((g) => g.steps).length} bước hướng dẫn có sẵn giọng đọc${missing.length ? ' – thiếu: ' + missing.map((x) => x.text.slice(0, 30)).join(' | ') : ''}`);
    await shot('02-coach');
    for (let i = 0; i < 5; i++) await win.click('#npcCoach .btn.primary');
    check((await win.textContent('#npcCoach .btn.primary')) === '✓ Xong', 'tới bước cuối');
    await win.click('#npcCoach .btn.primary');
    check(await win.locator('#npcCoach').count() === 0 && await win.locator('.npc-spot').count() === 0, 'xong tour: dọn thẻ và vòng sáng');

    // hướng dẫn đi qua tab khác: Chat với AI
    await win.evaluate(() => window.VPNpc.open('guides'));
    await win.click('#lbNpc .np-guide >> text=Chat với AI');
    await win.waitForFunction(() => !document.querySelector('#chatView').classList.contains('hidden'), null, { timeout: 5000 });
    await win.waitForSelector('.npc-spot');
    const onNew = await win.evaluate(() => { const a = document.querySelector('.npc-spot').getBoundingClientRect(); const b = document.querySelector('.ch-new').getBoundingClientRect(); return Math.abs(a.top - (b.top - 6)) < 2; });
    check(onNew, 'bước ở tab Chat: tự mở tab Chat và chỉ vào nút "Đoạn chat mới"');
    await shot('03-coach-chat');
    await win.click('#npcCoach .lc-ic');
    await win.click('.viewtabs button[data-v="lobby"]');

    // mẹo AI + hỏi đáp khi chưa chọn tài khoản
    await win.evaluate(() => window.VPNpc.open('tips'));
    check(await win.locator('#lbNpc .np-tip').count() === 8, 'tab Mẹo AI: 8 mẹo có ví dụ chưa tốt / tốt hơn');
    await win.click('#lbNpc .np-tab >> text=Hỏi đáp');
    check(await win.isDisabled('#npcInput'), 'chưa chọn tài khoản cho NPC → chưa hỏi tự do (vẫn xem hướng dẫn được)');

    // admin chọn tài khoản chatbot làm NPC
    await win.click('.viewtabs button[data-v="admin"]');
    await win.click('.ad-nb >> text=Trợ lý (NPC)');
    await win.waitForSelector('.ad-npcsel');
    check((await win.textContent('.ad-npcsel')).includes('ChatBot') && (await win.textContent('.ad-npcsel')).includes('✅ sẵn sàng'), 'danh sách tài khoản: ChatBot có key → sẵn sàng');
    await win.selectOption('.ad-npcsel', 'u:simi-bot');
    await win.click('.ad-card .btn.primary >> text=Lưu');
    await win.waitForSelector('.ad-ok', { timeout: 10000 });
    await shot('04-admin-npc');
    await win.click('.viewtabs button[data-v="lobby"]');
    await win.waitForFunction(() => window.__lobby.npc.plate.textContent.includes('ChatBot'), null, { timeout: 8000 });
    check(true, 'NPC đổi sang tên tài khoản admin chọn');

    // hỏi đáp
    await win.evaluate(() => window.VPNpc.open('ask'));
    await win.waitForFunction(() => !document.querySelector('#npcInput').disabled, null, { timeout: 5000 });
    await win.fill('#npcInput', 'Gửi ảnh trong Sảnh thế nào?');
    await win.press('#npcInput', 'Enter');
    await win.waitForSelector('#lbNpc .np-msg.bot .md ol', { timeout: 20000 });
    check((await win.textContent('#lbNpc .np-chat')).includes('Chọn ảnh rồi bấm Gửi'), 'Trợ lý trả lời (hiện đúng định dạng danh sách bước)');
    const call = calls.find((c) => c.url === '/v1/responses');
    check(call && call.auth === 'Bearer k-bot-secret', 'AI chạy bằng key của tài khoản ChatBot – người hỏi không tốn lượt');
    check(/Gửi ảnh: bấm 🖼️/.test(call.body.instructions), 'AI được nạp hướng dẫn app làm nguồn trả lời');
    await shot('05-ask');
    // chấm 👎 câu trả lời → admin thấy trong nhật ký; lịch sử hỏi đáp còn sau khi mở lại
    await win.click('#lbNpc .np-acts button[aria-label="Chưa đúng ý"]');
    await win.waitForSelector('#lbNpc .np-acts button.on', { timeout: 10000 });
    check(true, 'chấm 👎 câu trả lời của Trợ lý');
    check(await win.evaluate(() => (JSON.parse(localStorage.getItem('vp.npcChat') || '[]')).length === 2), 'nhớ cuộc hỏi đáp trên máy (mở lại app vẫn còn)');
    await win.click('.viewtabs button[data-v="admin"]');
    await win.click('.ad-nb >> text=Trợ lý (NPC)');
    await win.waitForSelector('.ad-table.npclog', { timeout: 10000 });
    check((await win.textContent('.ad-table.npclog')).includes('Gửi ảnh trong Sảnh thế nào?') && (await win.textContent('.ad-table.npclog')).includes('Chưa đúng ý'), 'admin thấy câu hỏi gần đây + câu bị chấm 👎');
    await win.click('#adNpcTest');
    await win.waitForSelector('.ad-test.ok', { timeout: 30000 });
    check((await win.textContent('.ad-test.ok')).includes('Trợ lý trả lời được'), 'admin bấm 🧪 Hỏi thử → biết ngay Trợ lý trả lời được');
    await shot('05b-admin-test');
    await win.click('.viewtabs button[data-v="lobby"]');

    // admin sửa hướng dẫn → máy mình nhận ngay
    await win.click('.viewtabs button[data-v="admin"]');
    await win.click('.ad-nb >> text=Trợ lý (NPC)');
    await win.waitForSelector('.ad-guide');
    await win.fill('.ad-guide >> nth=0 >> input.grow', 'Làm quen app (bản công ty)');
    await win.click('.ad-card .btn.primary >> text=Lưu hướng dẫn');
    await win.waitForSelector('.ad-card h3 >> text=(đã sửa)', { timeout: 10000 });
    await win.click('.viewtabs button[data-v="lobby"]');
    await win.evaluate(() => window.VPNpc.open('guides'));
    await win.waitForSelector('#lbNpc .np-guide >> text=Làm quen app (bản công ty)', { timeout: 10000 });
    check(true, 'admin sửa hướng dẫn → mọi máy nhận ngay, không cần phát hành app');

    // bấm vào NPC trong cảnh 3D + đi ngang qua quầy thì NPC chào
    await win.evaluate(() => window.VPNpc.close());
    const pt = await win.evaluate(() => { const L = window.__lobby; const q = L.npc.pos; L.follow = false; L.view.target.set(q.x, 0.6, q.z); L.panTo = L.view.target.clone(); L.view.zoom = L.goal.zoom = 1.5; L.view.az = L.goal.az; L.view.el = L.goal.el; L.updateCamera(); const r = L.canvas.getBoundingClientRect(); const s = L.project(new (L.tmpV.constructor)(q.x, 0.75, q.z)); return { x: r.left + s.x, y: r.top + s.y }; });
    await win.mouse.click(pt.x, pt.y);
    await win.waitForSelector('#lbNpc:not(.hidden)', { timeout: 5000 });
    check(true, 'bấm vào NPC trong Sảnh → mở bảng Trợ lý');
    await win.evaluate(() => { const L = window.__lobby; L.npc.greetAt = 0; const me = L.self(); me.path = []; me.pos = { x: L.npc.pos.x + 1.2, z: L.npc.pos.z + 1.2 }; });
    await win.waitForFunction(() => /Cần giúp gì không/.test(window.__lobby.npc.lastSay || ''), null, { timeout: 15000 });
    check(true, 'đi ngang qua quầy → NPC vẫy tay hỏi "Cần giúp gì không?"');
    await win.waitForTimeout(600); await shot('06-npc');

    // tìm tới Trợ lý dễ nhất: mũi tên ở mép Sảnh khi Trợ lý ngoài khung nhìn, nút vàng trên thanh Sảnh, nút Trợ lý trên cùng app, phím F1
    await win.evaluate(() => { window.VPNpc.close(); window.__lobby.lookAt('game'); });
    await win.waitForSelector('#lbNpcArrow:not(.hidden)', { timeout: 8000 });
    const arr = await win.evaluate(() => { const a = document.querySelector('#lbNpcArrow').getBoundingClientRect(), s = document.querySelector('.lb-stage').getBoundingClientRect(); return { a, s }; });
    check(arr.a.left >= arr.s.left && arr.a.right <= arr.s.right && arr.a.bottom <= arr.s.bottom, 'Trợ lý ngoài khung nhìn → mép Sảnh hiện "Trợ lý SIMI" kèm mũi tên chỉ hướng');
    await shot('07-arrow');
    await win.click('#lbNpcArrow');
    await win.waitForSelector('#lbNpc:not(.hidden)', { timeout: 5000 });
    await win.waitForFunction(() => window.__lobby.nearNpc(), null, { timeout: 20000 });
    check(await win.isHidden('#lbNpcArrow'), 'bấm mũi tên → nhân vật tự đi tới quầy lễ tân, bảng Trợ lý mở ra');
    await shot('08-at-npc');
    await win.evaluate(() => window.VPNpc.close());
    check(await win.isVisible('#lbNpcBtn') && (await win.textContent('#lbNpcBtn')).includes('Trợ lý SIMI'), 'thanh trên Sảnh có nút vàng "Trợ lý SIMI"');
    await win.click('#lbNpcBtn');
    await win.waitForSelector('#lbNpc:not(.hidden)', { timeout: 5000 });
    await win.waitForFunction(() => /Mình đây/.test(window.__lobby.npc.lastSay || ''), null, { timeout: 5000 });
    check(true, 'đang đứng ở quầy mà bấm nút → Trợ lý vẫy tay "Mình đây!" và mở bảng hướng dẫn');
    await win.evaluate(() => window.VPNpc.close());
    await win.click('.viewtabs button[data-v="chat"]');
    await win.keyboard.press('F1');
    await win.waitForSelector('#lbNpc:not(.hidden)', { timeout: 5000 });
    check(await win.isVisible('#lobbyView'), 'đang ở tab Chat bấm F1 → mở Sảnh và bảng Trợ lý');
    await win.evaluate(() => window.VPNpc.close());
    await win.click('.viewtabs button[data-v="office"]');
    check(await win.isVisible('#btnHelp'), 'thanh trên cùng app luôn có nút "Trợ lý" (ở mọi tab)');
    await win.click('#btnHelp');
    await win.waitForSelector('#lbNpc:not(.hidden)', { timeout: 5000 });
    check(await win.isVisible('#lobbyView'), 'bấm "Trợ lý" ở tab Văn phòng → sang Sảnh, mở bảng Trợ lý');
    await shot('09-help-btn');
  } finally {
    bao.close(); gw.child.kill(); up.close();
    await finish(app, errors);
  }
});
