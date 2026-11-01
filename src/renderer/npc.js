/* NPC "Trợ lý SIMI" ở quầy lễ tân ngay cổng vào Sảnh: bấm vào để
   📘 Hướng dẫn – từng bước: làm tối màn hình, khoét sáng đúng nút / đúng khu trong Sảnh (đi qua được cả tab Chat / Văn phòng)
   💡 Mẹo AI   – viết yêu cầu sao cho AI làm tốt (ví dụ trước / sau)
   💬 Hỏi đáp  – hỏi tự do, AI trả lời bằng tài khoản admin chọn cho NPC (không tốn hạn mức của người hỏi)
   Lần đầu vào Sảnh thì NPC chào và mời đi tour 1 phút. */
(function () {
  let U;
  const N = { info: null, guides: null, tab: 'guides', chat: [], busy: false, coach: null, open: false, loaded: false };
  const $ = (s, r = document) => r.querySelector(s);
  const G = () => N.guides || window.VPNpcGuides.GUIDES;
  const lobby = () => window.VPLobby && window.VPLobby._state;
  const scene = () => lobby() && lobby().scene;

  function build() {
    const { el } = U;
    $('.lb-stage').append(el('div', { class: 'lb-npc hidden', id: 'lbNpc', role: 'dialog', 'aria-label': 'Trợ lý SIMI' }));
  }

  async function loadGuides() {
    try { const r = await window.vp.lobby.npc(); N.guides = r.guides || null; if (r.npc !== undefined) N.info = r.npc; } catch { /* Gateway cũ: dùng hướng dẫn có sẵn */ }
    render();
  }

  function setInfo(info) { N.info = info || null; if (scene()) scene().setNpc(N.info); render(); }

  function open(tab) {
    N.open = true; if (tab) N.tab = tab;
    if (window.VPLobby && window.VPLobby.toggleCinema && lobby() && lobby().cin.open) window.VPLobby.toggleCinema(false);
    $('#lbNpc').classList.remove('hidden');
    if (!N.loaded) { N.loaded = true; loadGuides(); }
    render();
    if (N.tab === 'ask') setTimeout(() => { const i = $('#npcInput'); if (i) i.focus(); }, 30);
  }
  function close() { N.open = false; $('#lbNpc').classList.add('hidden'); }

  function render() {
    if (!N.open) return;
    const { el } = U;
    const name = (N.info && N.info.name) || 'Trợ lý SIMI';
    const ready = !!(N.info && N.info.ready);
    const head = el('div', { class: 'np-h' }, el('span', { class: 'np-av', text: '🤖' }),
      el('div', { class: 'grow' }, el('b', { text: name }), el('small', { text: ready ? 'Hỏi gì về app cũng được' : 'Hướng dẫn dùng app & AI' })),
      el('button', { class: 'lc-ic', title: 'Đóng', 'aria-label': 'Đóng', onclick: close }, '✕'));
    const tabs = el('div', { class: 'np-tabs', role: 'tablist' }, [['guides', '📘 Hướng dẫn'], ['tips', '💡 Mẹo AI'], ['ask', '💬 Hỏi đáp']].map(([k, t]) =>
      el('button', { class: 'np-tab' + (N.tab === k ? ' on' : ''), role: 'tab', 'aria-selected': N.tab === k ? 'true' : 'false', onclick: () => { N.tab = k; render(); if (k === 'ask') setTimeout(() => { const i = $('#npcInput'); if (i) i.focus(); }, 30); } }, t)));
    const body = el('div', { class: 'np-body' });
    if (N.tab === 'guides') {
      if (!U.store.get('vp.npcTour', false)) body.append(el('div', { class: 'np-welcome' }, el('b', { text: 'Lần đầu dùng Văn Phòng AI?' }), el('small', { text: 'Đi một vòng 1 phút, mình chỉ tận nơi từng nút.' }),
        el('div', { class: 'np-row' }, el('button', { class: 'btn mini', onclick: () => { U.store.set('vp.npcTour', true); render(); } }, 'Để sau'), el('button', { class: 'btn mini primary', onclick: () => startCoach(G()[0]) }, '🧭 Bắt đầu tour'))));
      body.append(...G().map((g) => el('button', { class: 'np-guide', onclick: () => startCoach(g) },
        el('span', { class: 'ic', text: g.icon || '📘' }), el('div', { class: 'grow' }, el('b', { text: g.title }), el('small', { text: `${g.steps.length} bước` })), el('span', { class: 'go', text: '›' }))));
    } else if (N.tab === 'tips') {
      body.append(...window.VPNpcGuides.TIPS.map((t) => el('div', { class: 'np-tip' },
        el('b', {}, el('span', { text: t.icon + ' ' }), t.title),
        el('div', { class: 'bad' }, el('i', { text: 'Chưa tốt' }), el('span', { text: t.bad })),
        el('div', { class: 'good' }, el('i', { text: 'Tốt hơn' }), el('span', { text: t.good })))));
    } else {
      const list = el('div', { class: 'np-chat', id: 'npcChat' });
      if (!N.chat.length) list.append(el('div', { class: 'np-msg bot' }, el('div', { text: ready ? `Chào bạn! Mình là ${name}. Hỏi mình cách dùng app hoặc cách nhờ AI làm việc cho tốt nhé.` : 'Admin chưa bật hỏi tự do cho Trợ lý. Bạn xem tab 📘 Hướng dẫn và 💡 Mẹo AI trước nhé – hoặc nhắn admin trong Sảnh.' }),
        ready ? el('div', { class: 'np-sugg' }, ['Gửi ảnh trong Sảnh thế nào?', 'Nhờ AI mở Excel lọc dữ liệu được không?', 'Viết yêu cầu sao cho AI làm đúng ý?'].map((q) => el('button', { onclick: () => ask(q) }, q))) : ''));
      for (const m of N.chat) {
        const bubble = el('div', { class: 'np-msg ' + m.role + (m.error ? ' err' : '') }, m.role === 'bot' && window.renderMd && !m.error ? el('div', { class: 'md', html: window.renderMd(m.text) }) : el('div', { text: m.text }));
        // câu trả lời của Trợ lý: chép, chấm 👍 / 👎 (admin thấy câu nào chưa tốt để bổ sung hướng dẫn)
        if (m.role === 'bot' && !m.error && m.id) bubble.append(el('div', { class: 'np-acts' },
          el('button', { title: 'Chép câu trả lời', onclick: () => { navigator.clipboard.writeText(m.text).then(() => U.toast('📋 Đã chép')).catch(() => {}); } }, '📋 Chép'),
          el('span', { class: 'grow' }),
          ...[[true, '👍', 'Hữu ích'], [false, '👎', 'Chưa đúng ý']].map(([good, ic, tip]) => el('button', { class: 'fb' + (m.fb === (good ? 1 : -1) ? ' on' : ''), title: tip, 'aria-label': tip, disabled: !!m.fb, onclick: () => rate(m, good) }, ic))));
        list.append(bubble);
      }
      if (N.busy) list.append(el('div', { class: 'np-msg bot typing' }, el('i'), el('i'), el('i')));
      const inp = el('textarea', { id: 'npcInput', rows: 2, maxlength: 1500, placeholder: ready ? 'Hỏi Trợ lý… (Enter để gửi)' : 'Admin chưa bật hỏi tự do', disabled: !ready || N.busy,
        onkeydown: (e) => { if (e.key === 'Enter' && !e.shiftKey && !e.isComposing) { e.preventDefault(); ask(); } } });
      body.append(list, el('div', { class: 'np-input' }, inp, el('button', { class: 'ch-send', title: 'Gửi', disabled: !ready || N.busy, onclick: () => ask() }, U.icon('send'))),
        el('div', { class: 'np-foot' }, el('small', { text: 'Câu hỏi gửi Trợ lý được lưu để admin cải thiện hướng dẫn.' }), N.chat.length ? el('button', { class: 'linkbtn', onclick: () => { N.chat = []; saveChat(); render(); } }, 'Xoá cuộc trò chuyện') : ''));
      setTimeout(() => { list.scrollTop = list.scrollHeight; }, 0);
    }
    $('#lbNpc').replaceChildren(head, tabs, body);
  }

  async function ask(q) {
    const inp = $('#npcInput');
    const question = String(q || (inp && inp.value) || '').trim();
    if (!question || N.busy) return;
    const history = N.chat.filter((m) => !m.error).slice(-6).map((m) => ({ role: m.role === 'bot' ? 'assistant' : 'user', text: m.text }));
    N.chat.push({ role: 'user', text: question }); N.busy = true; render();
    try {
      const r = await window.vp.lobby.npcAsk({ question, history, guide: window.VPNpcGuides.guideText(N.guides) });
      N.chat.push({ role: 'bot', text: r.answer, id: r.id || null });
      if (scene()) scene().npcSay('💡 Mình trả lời trong khung Hỏi đáp rồi nhé!', 3200);
    } catch (e) { N.chat.push({ role: 'bot', error: true, text: '⚠️ ' + U.cleanErr(e) }); }
    N.busy = false; saveChat(); render();
    const i2 = $('#npcInput'); if (i2) i2.focus();
  }
  // nhớ cuộc trò chuyện trên máy này (20 câu gần nhất) – mở lại app vẫn còn
  function saveChat() { U.store.set('vp.npcChat', N.chat.filter((m) => !m.error).slice(-20)); }
  async function rate(m, good) {
    m.fb = good ? 1 : -1; render();
    try { await window.vp.lobby.npcFeedback({ id: m.id, good }); U.toast(good ? '💙 Cảm ơn bạn!' : '📝 Đã báo admin – Trợ lý sẽ được bổ sung hướng dẫn'); }
    catch (e) { m.fb = 0; render(); U.toast(U.cleanErr(e), true); }
    saveChat();
  }

  // ---------- giọng đọc: mỗi bước hướng dẫn được đọc to ----------
  // Giọng đọc sẵn gói chung trong npc-voice.js (tạo bằng scripts/npc-voice.py), mỗi câu theo khoá băm của đúng câu chữ; chỉ tải
  // khi cần đọc lần đầu. Câu IT sửa trong tab Quản trị chưa có giọng thì đọc bằng giọng tiếng Việt của máy (nếu có), không có thì chỉ hiện chữ.
  const voiceOn = () => U.store.get('vp.npcVoice', true) !== false && !(U.S && U.S.cfg && U.S.cfg.sound === false);
  function voiceKey(text) {
    const b = new TextEncoder().encode(String(text).trim());
    let h = 0x811c9dc5; for (const x of b) { h ^= x; h = Math.imul(h, 0x01000193) >>> 0; }
    return h.toString(16).padStart(8, '0') + '-' + b.length;
  }
  function voicePack() {
    if (window.VPNpcVoice) return Promise.resolve(window.VPNpcVoice);
    if (!N.packP) N.packP = new Promise((res) => { const sc = document.createElement('script'); sc.src = 'npc-voice.js'; sc.onload = () => res(window.VPNpcVoice || null); sc.onerror = () => { N.packP = null; res(null); }; document.head.append(sc); });
    return N.packP;
  }
  const clipUrls = new Map();
  function clipUrl(key, b64) {
    if (!clipUrls.has(key)) { const bin = atob(b64); const u8 = new Uint8Array(bin.length); for (let i = 0; i < bin.length; i++) u8[i] = bin.charCodeAt(i); clipUrls.set(key, URL.createObjectURL(new Blob([u8], { type: 'audio/ogg' }))); }
    return clipUrls.get(key);
  }
  function hush() {
    N.speakTok = (N.speakTok || 0) + 1;
    if (N.audio) { N.audio.pause(); N.audio.removeAttribute('src'); N.audio = null; }
    try { window.speechSynthesis && window.speechSynthesis.cancel(); } catch { /* không có */ }
  }
  async function speak(text) {
    hush(); if (!voiceOn() || !text) return;
    const tok = N.speakTok; const pack = await voicePack(); if (tok !== N.speakTok) return;
    const key = voiceKey(text); const b64 = pack && pack.clips && pack.clips[key];
    if (!b64) { speakLocal(text); return; }
    const a = new Audio(clipUrl(key, b64)); N.audio = a; N.audioKey = key; a.volume = 0.95;
    a.play().catch(() => { /* bị chặn: bỏ qua, chữ vẫn hiện */ });
  }
  function speakLocal(text) {
    const ss = window.speechSynthesis; if (!ss) return;
    const v = ss.getVoices().find((x) => /^vi\b|vi-VN/i.test(x.lang)); if (!v) return;
    const u = new SpeechSynthesisUtterance(speechText(text)); u.voice = v; u.lang = v.lang; u.rate = 1.05; ss.speak(u);
  }
  // bỏ emoji / ký hiệu cho giọng đọc khỏi đọc lạ
  const speechText = (t) => String(t).replace(/[\u{1F000}-\u{1FAFF}\u{2600}-\u{27BF}\u{2B00}-\u{2BFF}\uFE0F\u200D★›‹＋]/gu, ' ').replace(/\s+/g, ' ').trim();
  function toggleVoice() { const on = !(U.store.get('vp.npcVoice', true) !== false); U.store.set('vp.npcVoice', on); if (on) { const c = N.coach; if (c) speak(c.g.steps[c.i].text); } else hush(); showStep(true); }

  // ---------- hướng dẫn từng bước: làm tối màn hình, khoét sáng đúng nút / đúng khu trong Sảnh, thẻ hướng dẫn đứng cạnh ----------
  // Bấm đúng nút đang sáng là tự sang bước sau. Phím → / Enter: tiếp, ←: lùi, Esc: thoát.
  function startCoach(g) {
    U.store.set('vp.npcTour', true);
    N.coach = { g, i: 0 };
    close();
    document.addEventListener('keydown', coachKey, true);
    showStep();
  }

  function coachKey(e) {
    const c = N.coach; if (!c) return;
    if (e.target && /^(INPUT|TEXTAREA)$/.test(e.target.tagName) && e.key !== 'Escape') return;
    if (e.key === 'Escape') { endCoach(); e.preventDefault(); e.stopPropagation(); }
    else if (e.key === 'ArrowRight' || e.key === 'Enter') { next(); e.preventDefault(); }
    else if (e.key === 'ArrowLeft' && c.i > 0) { c.i--; showStep(); e.preventDefault(); }
  }
  function next() { const c = N.coach; if (!c) return; if (c.i >= c.g.steps.length - 1) endCoach(true); else { c.i++; showStep(); } }

  function showStep(keepVoice) {
    const { el } = U;
    const c = N.coach; if (!c) return;
    const st = c.g.steps[c.i];
    if (!keepVoice) speak(st.text);
    const von = voiceOn();
    if (st.view && window.VPChat && document.querySelector(`.viewtabs button[data-v="${st.view}"]`)) window.VPChat.setView(st.view);
    if (st.place && scene()) scene().lookAt(st.place);
    let card = $('#npcCoach');
    if (!card) { card = el('div', { class: 'npc-coach', id: 'npcCoach', role: 'dialog', 'aria-label': 'Hướng dẫn từng bước', 'aria-live': 'polite' }); document.body.append(card); }
    const last = c.i === c.g.steps.length - 1;
    const n = c.g.steps.length;
    card.replaceChildren(
      el('i', { class: 'nc-arrow', 'aria-hidden': 'true' }),
      el('div', { class: 'nc-h' },
        el('span', { class: 'nc-av', 'aria-hidden': 'true', text: c.g.icon || '🤖' }),
        el('div', { class: 'grow' }, el('b', { text: c.g.title }), el('small', { text: `Bước ${c.i + 1}/${n}` })),
        el('button', { class: 'nc-voice' + (von ? ' on' : ''), id: 'npcVoice', title: von ? 'Tắt giọng đọc' : 'Bật giọng đọc', 'aria-label': von ? 'Tắt giọng đọc' : 'Bật giọng đọc', 'aria-pressed': von ? 'true' : 'false', onclick: toggleVoice }, von ? '🔊' : '🔇'),
        el('button', { class: 'lc-ic', title: 'Thoát hướng dẫn (Esc)', 'aria-label': 'Thoát hướng dẫn', onclick: () => endCoach() }, '✕')),
      el('div', { class: 'nc-dots' }, c.g.steps.map((_, k) => el('i', { class: k === c.i ? 'on' : k < c.i ? 'done' : '' }))),
      el('p', { text: st.text }),
      st.target ? el('div', { class: 'nc-hint' }, el('span', { class: 'nc-tapdot', 'aria-hidden': 'true' }), 'Bấm vào chỗ đang sáng để sang bước sau') : '',
      el('div', { class: 'nc-row' },
        el('button', { class: 'btn mini', disabled: c.i === 0, onclick: () => { c.i--; showStep(); } }, '‹ Trước'),
        el('span', { class: 'grow' }),
        el('small', { class: 'nc-keys', text: '← → Esc' }),
        el('button', { class: 'btn mini primary', onclick: next }, last ? '✓ Xong' : 'Tiếp ›')));
    if (keepVoice) { const sp = N.spotLast; if (sp) placeCard(card, sp); return; }
    card.classList.remove('pop'); void card.offsetWidth; card.classList.add('pop');
    clearSpot();
    setTimeout(() => { if (N.coach === c && c.g.steps[c.i] === st) spot(st); }, st.view || st.place ? 260 : 40);
  }

  function endCoach(done) {
    document.removeEventListener('keydown', coachKey, true);
    N.coach = null; clearSpot(); hush();
    const card = $('#npcCoach'); if (card) card.remove();
    if (done) {
      U.toast('🎉 Xong rồi! Cần gì cứ ghé quầy lễ tân hỏi Trợ lý SIMI nhé');
      if (window.VPChat) window.VPChat.setView('lobby');
      if (scene()) { scene().focusSelf(); scene().npcWave(); scene().npcSay('Giỏi quá! Cần gì cứ hỏi mình nhé 💙', 3500); }
    }
  }

  // khoét sáng nút / khu đang nói tới (phần còn lại tối đi), vòng nhấp nháy + chấm "bấm vào đây"; thẻ hướng dẫn đứng cạnh, mũi tên chỉ vào
  function spot(st, pulse) {
    clearSpot();
    let target = null;
    if (st.target) { try { target = document.querySelector(st.target); } catch { target = null; } }
    if (target && target.closest('.lb-side') && window.VPLobby && window.VPLobby._state.sideOff) window.VPLobby.showSide(true, true); // khung chat đang thu gọn → mở ra để chỉ
    if (target && !target.getClientRects().length) target = null;
    const place = !target && st.place && scene() ? st.place : null;
    const card = $('#npcCoach');
    if (!target && !place) { if (card) { card.className = 'npc-coach pop free'; card.style.left = ''; card.style.top = ''; } return; }
    const hole = U.el('div', { class: 'npc-spot' + (place ? ' round' : '') + (pulse ? ' again' : ''), 'aria-hidden': 'true' });
    const tap = U.el('div', { class: 'npc-tap', 'aria-hidden': 'true' });
    document.body.append(hole, tap);
    const layout = () => {
      if (!hole.isConnected) return;
      let r;
      if (target) { const b = target.getBoundingClientRect(); if (!b.width) { hole.style.opacity = '0'; return; } r = { left: b.left - 6, top: b.top - 6, width: b.width + 12, height: b.height + 12 }; }
      else { const p = scene().placeScreen(place); if (!p) return; r = { left: p.x - p.r, top: p.y - p.r * 0.72, width: p.r * 2, height: p.r * 1.44 }; }
      hole.style.opacity = '';
      Object.assign(hole.style, { left: r.left + 'px', top: r.top + 'px', width: r.width + 'px', height: r.height + 'px' });
      tap.style.left = r.left + Math.min(r.width - 12, Math.max(12, r.width * 0.86)) + 'px'; tap.style.top = r.top + r.height - 10 + 'px'; // góc dưới phải – không che chữ trên nút
      tap.hidden = !target;
      N.spotLast = r;
      if (card) placeCard(card, r);
    };
    layout();
    N.spotT = setInterval(layout, 250);
    // bấm đúng nút → sang bước sau
    if (target) {
      const c = N.coach;
      N.spotClick = () => setTimeout(() => { if (N.coach === c && c.g.steps[c.i] === st) next(); }, 300);
      N.spotEl = target; target.addEventListener('click', N.spotClick, { once: true });
    }
  }
  // đặt thẻ ngay dưới (hoặc trên / cạnh) chỗ đang sáng, mũi tên trỏ vào
  function placeCard(card, r) {
    const W = card.offsetWidth || 340, H = card.offsetHeight || 180, vw = window.innerWidth, vh = window.innerHeight, gap = 14;
    let side = 'below', top = r.top + r.height + gap;
    if (top + H > vh - 10) { side = 'above'; top = r.top - H - gap; }
    if (top < 60) { side = r.left + r.width / 2 > vw / 2 ? 'left' : 'right'; top = Math.max(70, Math.min(vh - H - 10, r.top + r.height / 2 - H / 2)); }
    let left = side === 'left' ? r.left - W - gap : side === 'right' ? r.left + r.width + gap : r.left + r.width / 2 - W / 2;
    left = Math.max(10, Math.min(vw - W - 10, left));
    card.className = 'npc-coach at ' + side;
    card.style.left = left + 'px'; card.style.top = top + 'px';
    const ax = side === 'below' || side === 'above' ? Math.max(22, Math.min(W - 22, r.left + r.width / 2 - left)) : Math.max(22, Math.min(H - 22, r.top + r.height / 2 - top));
    card.style.setProperty('--ax', ax + 'px');
  }
  function clearSpot() {
    clearInterval(N.spotT); N.spotLast = null;
    if (N.spotEl && N.spotClick) N.spotEl.removeEventListener('click', N.spotClick);
    N.spotEl = null; N.spotClick = null;
    document.querySelectorAll('.npc-spot, .npc-tap').forEach((n) => n.remove());
  }

  // lần đầu vào Sảnh: NPC chào và mời đi tour
  function maybeTour(name) {
    if (U.store.get('vp.npcTour', false) || N.tourAsked) return;
    N.tourAsked = true;
    setTimeout(() => {
      if (!lobby() || !lobby().shown) { N.tourAsked = false; return; }
      if (scene()) { scene().npcWave(); scene().npcSay(`Chào ${name || 'bạn'}! Mình là Trợ lý SIMI – đi tour 1 phút nhé? 👋`, 6000); }
      open('guides');
    }, 2500);
  }

  function init(api) { U = api; N.chat = (U.store.get('vp.npcChat', []) || []).filter((m) => m && (m.role === 'bot' || m.role === 'user') && typeof m.text === 'string'); build(); }

  window.VPNpc = { init, open, close, setInfo, reloadGuides: loadGuides, maybeTour, voiceKey, speechText, _state: N };
})();
