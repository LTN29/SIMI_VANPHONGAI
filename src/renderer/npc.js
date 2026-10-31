/* NPC "Trợ lý SIMI" ở quầy giữa Sảnh: bấm vào để
   📘 Hướng dẫn – từng bước, có "chỉ tay" làm nổi bật đúng nút trên màn hình (đi qua được cả tab Chat / Văn phòng)
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
      for (const m of N.chat) list.append(el('div', { class: 'np-msg ' + m.role + (m.error ? ' err' : '') }, m.role === 'bot' && window.renderMd && !m.error ? el('div', { class: 'md', html: window.renderMd(m.text) }) : el('div', { text: m.text })));
      if (N.busy) list.append(el('div', { class: 'np-msg bot typing' }, el('i'), el('i'), el('i')));
      const inp = el('textarea', { id: 'npcInput', rows: 2, maxlength: 1500, placeholder: ready ? 'Hỏi Trợ lý… (Enter để gửi)' : 'Admin chưa bật hỏi tự do', disabled: !ready || N.busy,
        onkeydown: (e) => { if (e.key === 'Enter' && !e.shiftKey && !e.isComposing) { e.preventDefault(); ask(); } } });
      body.append(list, el('div', { class: 'np-input' }, inp, el('button', { class: 'ch-send', title: 'Gửi', disabled: !ready || N.busy, onclick: () => ask() }, U.icon('send'))));
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
      N.chat.push({ role: 'bot', text: r.answer });
      if (scene()) scene().npcSay('💡 Mình trả lời trong khung Hỏi đáp rồi nhé!', 3200);
    } catch (e) { N.chat.push({ role: 'bot', error: true, text: '⚠️ ' + U.cleanErr(e) }); }
    N.busy = false; render();
    const i2 = $('#npcInput'); if (i2) i2.focus();
  }

  // ---------- chỉ tay từng bước (đi qua được các tab khác) ----------
  function startCoach(g) {
    U.store.set('vp.npcTour', true);
    N.coach = { g, i: 0 };
    close();
    showStep();
  }

  function showStep() {
    const { el } = U;
    const c = N.coach; if (!c) return;
    const st = c.g.steps[c.i];
    if (st.view && window.VPChat && document.querySelector(`.viewtabs button[data-v="${st.view}"]`)) window.VPChat.setView(st.view);
    let card = $('#npcCoach');
    if (!card) { card = el('div', { class: 'npc-coach', id: 'npcCoach', role: 'dialog', 'aria-label': 'Hướng dẫn từng bước' }); document.body.append(card); }
    const last = c.i === c.g.steps.length - 1;
    card.replaceChildren(
      el('div', { class: 'nc-h' }, el('span', { text: '🤖' }), el('b', { text: c.g.title }), el('span', { class: 'grow' }), el('small', { text: `Bước ${c.i + 1}/${c.g.steps.length}` }),
        el('button', { class: 'lc-ic', title: 'Thoát hướng dẫn', 'aria-label': 'Thoát hướng dẫn', onclick: endCoach }, '✕')),
      el('p', { text: st.text }),
      el('div', { class: 'nc-dots' }, c.g.steps.map((_, k) => el('i', { class: k === c.i ? 'on' : k < c.i ? 'done' : '' }))),
      el('div', { class: 'nc-row' },
        el('button', { class: 'btn mini', disabled: c.i === 0, onclick: () => { c.i--; showStep(); } }, '‹ Trước'),
        el('span', { class: 'grow' }),
        st.target ? el('button', { class: 'btn mini', onclick: () => spot(st.target, true) }, '👉 Chỉ lại') : '',
        el('button', { class: 'btn mini primary', onclick: () => { if (last) endCoach(true); else { c.i++; showStep(); } } }, last ? '✓ Xong' : 'Tiếp ›')));
    setTimeout(() => spot(st.target), st.view ? 220 : 30);
  }

  function endCoach(done) {
    N.coach = null; clearSpot();
    const card = $('#npcCoach'); if (card) card.remove();
    if (done) {
      U.toast('🎉 Xong rồi! Cần gì cứ bấm Trợ lý SIMI ở giữa Sảnh nhé');
      if (window.VPChat) window.VPChat.setView('lobby');
      if (scene()) { scene().npcWave(); scene().npcSay('Giỏi quá! Cần gì cứ hỏi mình nhé 💙', 3500); }
    }
  }

  // vòng sáng quanh nút đang nói tới; tự bám theo khi nút dịch chuyển
  function spot(sel, pulse) {
    clearSpot();
    if (!sel) return;
    let target; try { target = document.querySelector(sel); } catch { return; }
    if (!target || !target.getClientRects().length) return;
    const ring = U.el('div', { class: 'npc-spot' + (pulse ? ' again' : ''), 'aria-hidden': 'true' });
    document.body.append(ring);
    const place = () => {
      if (!ring.isConnected) return;
      const r = target.getBoundingClientRect();
      if (!r.width) { ring.style.opacity = '0'; return; }
      ring.style.opacity = '';
      Object.assign(ring.style, { left: r.left - 6 + 'px', top: r.top - 6 + 'px', width: r.width + 12 + 'px', height: r.height + 12 + 'px' });
    };
    place();
    N.spotT = setInterval(place, 400);
    N.spotOff = setTimeout(clearSpot, 9000);
  }
  function clearSpot() { clearInterval(N.spotT); clearTimeout(N.spotOff); document.querySelectorAll('.npc-spot').forEach((n) => n.remove()); }

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

  function init(api) { U = api; build(); }

  window.VPNpc = { init, open, close, setInfo, reloadGuides: loadGuides, maybeTour, _state: N };
})();
