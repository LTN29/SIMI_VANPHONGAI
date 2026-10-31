/* Tab Sảnh: gặp đồng nghiệp đang dùng AI trên SIMI Gateway – nhân vật 3D tự chọn, trạng thái, nhắn tin cả công ty / riêng,
   màn chiếu YouTube chung (xếp hàng theo lượt, cả quán xem đồng bộ). */
(function () {
  let U; // tiện ích dùng chung từ app.js (window.VP)
  const L = {
    status: { state: 'off' }, me: null, members: new Map(), rooms: [], room: 'all',
    msgs: new Map(), unread: new Map(), loaded: new Set(), scene: null, shown: false,
    presence: { activity: 'idle', text: 'Đang rảnh', model: '' }, chats: new Map(), working: false,
    cin: { state: null, skew: 0, key: null, frame: null, api: false, reported: '', open: false },
  };
  const EMBED = 'https://www.youtube.com/embed/';
  const $ = (s, r = document) => r.querySelector(s);
  const ls = { get: (k, d) => U.store.get(k, d), set: (k, v) => U.store.set(k, v) };

  const HAIR = ['short', 'long', 'spiky', 'bun', 'bob', 'curly', 'ponytail', 'buzz'];
  const HAIR_NAME = { short: 'Ngắn', long: 'Dài', spiky: 'Dựng', bun: 'Búi', bob: 'Bob', curly: 'Xoăn', ponytail: 'Đuôi ngựa', buzz: 'Húi cua' };
  const ACC = [['none', 'Không'], ['glasses', '👓 Kính'], ['cap', '🧢 Mũ'], ['headphones', '🎧 Tai nghe'], ['bow', '🎀 Nơ'], ['tie', '👔 Cà vạt'], ['crown', '👑 Vương miện']];
  const PALETTE = {
    hair: ['#1a1a1a', '#2b1d14', '#5a3a1e', '#8a5a2e', '#c99a5b', '#e8d29a', '#7a2e2e', '#d65a8a', '#4a6fd6', '#7b4fa0', '#2fc1a5', '#cfd6e0'],
    skin: ['#f6d7bd', '#f1c9a5', '#ebbf98', '#e2ae84', '#d9a074', '#c98e62', '#a8714a', '#7d5236'],
    shirt: ['#0a78f0', '#142c5a', '#e1262d', '#f5c518', '#4a3592', '#2fc1a5', '#ff8a3d', '#ffffff', '#2b2b33', '#ff9ec4', '#7cc8b2', '#9b6b43'],
    pants: ['#2f3342', '#142c5a', '#5b6475', '#1a1a1a', '#6b4f3a', '#c9b48a', '#0a78f0', '#ffffff'],
    shoes: ['#1d1d24', '#ffffff', '#e1262d', '#0a78f0', '#8a5a2e', '#f5c518'],
    accent: ['#e1262d', '#0a78f0', '#f5c518', '#2fc1a5', '#4a3592', '#ffffff', '#1a1a1a', '#ff8a3d'],
  };
  const EMOTES = ['👋', '❤️', '😂', '🎉', '🕺', '☕', '👍', '🙌'];
  const ACT_TEXT = { idle: '☕ Đang rảnh', chat: '💬 Đang chat với AI', work: '🏢 Cả phòng đang làm việc', image: '🎨 Đang tạo ảnh', video: '🎬 Đang làm video', web: '🔎 Đang tìm trên web', doc: '📄 Đang đọc tài liệu', away: '🌙 Vắng mặt' };

  const look = (m) => (window.avatarToLook ? window.avatarToLook(m) : { id: m.id, ...(m.avatar || {}) });
  const face = (m, size = 30) => U.avatar(look(m), size);
  const dmRoom = (a, b) => `dm:${[a, b].sort().join('~')}`;
  const nowHM = (ts) => new Date(ts).toTimeString().slice(0, 5);
  const roomOf = (id) => L.rooms.find((r) => r.id === id);
  const others = () => [...L.members.values()].filter((m) => m.online && (!L.me || m.id !== L.me.id));

  // ================= dựng khung =================
  function build() {
    const { el, icon } = U;
    $('.viewtabs').append(el('button', { 'data-v': 'lobby', onclick: () => window.VPChat.setView('lobby') }, '🌐 ', el('span', { text: 'Sảnh' }), el('em', { class: 'vt-count hidden', id: 'lobbyCount' })));
    const view = el('main', { class: 'lobbyview hidden', id: 'lobbyView' },
      el('section', { class: 'lb-stage' },
        el('div', { class: 'lb-3d', id: 'lobby3d' }),
        el('div', { class: 'lb-top' },
          el('button', { class: 'lb-me', id: 'lbMe', title: 'Tủ đồ – đổi nhân vật của bạn', onclick: openWardrobe }),
          el('button', { class: 'btn small', onclick: openWardrobe }, '👕 Tủ đồ'),
          el('button', { class: 'btn small', id: 'lbHide', onclick: toggleHidden }),
          el('button', { class: 'btn small lb-cine-btn', id: 'lbCineBtn', title: 'Chiếu video YouTube cho cả quán cùng xem', onclick: toggleCinema }, '🎬 Màn chiếu'),
          el('span', { class: 'grow' }),
          el('button', { class: 'btn small', title: 'Nhìn toàn bộ quán', onclick: () => L.scene && L.scene.overview() }, '🗺 Toàn cảnh'),
          el('button', { class: 'btn small', title: 'Camera đi theo nhân vật của bạn', onclick: () => L.scene && L.scene.focusSelf() }, '🎯 Về chỗ mình'),
          el('span', { class: 'lb-conn', id: 'lbConn' })),
        el('div', { class: 'lb-emotes' }, EMOTES.map((e) => el('button', { title: 'Biểu cảm', onclick: () => sendEmote(e) }, e))),
        el('div', { class: 'lb-hint', text: 'Bấm sàn để đi · W A S D · Bấm ghế để ngồi · Bấm vào ai đó để nhắn riêng · Lăn chuột: phóng to' }),
        el('div', { class: 'lb-toast', id: 'lbToast' }),
        el('div', { class: 'lb-cine hidden', id: 'lbCine', role: 'dialog', 'aria-label': 'Màn chiếu' }),
        el('div', { class: 'lb-hiddenbar hidden', id: 'lbHiddenBar', role: 'status' },
          el('span', { text: '🙈 Bạn đang ẩn – đồng nghiệp không thấy bạn trong danh sách online (tin bạn nhắn vẫn hiện).' }),
          el('button', { class: 'btn mini primary', onclick: () => toggleHidden() }, 'Hiện lại')),
        el('div', { class: 'lb-overlay hidden', id: 'lbOverlay' })),
      el('aside', { class: 'lb-side' },
        el('div', { class: 'lb-online' }, el('h3', {}, 'Đang online ', el('span', { class: 'count', id: 'lbOnlineN', text: '0' })), el('div', { class: 'lb-people', id: 'lbPeople' })),
        el('div', { class: 'lb-chat' },
          el('div', { class: 'lb-rooms', id: 'lbRooms' }),
          el('div', { class: 'lb-msgs', id: 'lbMsgs' }),
          el('div', { class: 'lb-input' },
            el('input', { id: 'lbInput', maxlength: 2000, placeholder: 'Nhắn cho cả công ty…', onkeydown: (e) => { if (e.key === 'Enter' && !e.isComposing) { e.preventDefault(); sendMsg(); } } }),
            el('button', { class: 'ch-send', title: 'Gửi', onclick: sendMsg }, icon('send'))))));
    $('#chatView').after(view);
  }

  // ================= kết nối =================
  function renderConn() {
    const st = L.status.state;
    const c = $('#lbConn');
    const label = { online: '🟢 Đã vào Sảnh', connecting: '🟡 Đang kết nối…', error: '🔴 Mất kết nối – đang thử lại', disabled: '⚪ Gateway chưa bật Sảnh', nokey: '⚪ Chưa cài SIMI', off: '⚪ Đã tắt Sảnh' }[st] || st;
    c.textContent = label; c.title = L.status.error || '';
    c.className = 'lb-conn ' + st;
    const ov = $('#lbOverlay');
    const { el, icon } = U;
    if (st === 'online') { ov.classList.add('hidden'); return; }
    let body;
    if (st === 'nokey') {
      body = [el('h3', { text: 'Cài SIMI Gateway để vào Sảnh' }), el('p', { text: 'Sảnh dùng chính key team của bạn để biết bạn là ai – không cần đăng nhập thêm.' }),
        el('button', { class: 'btn primary', onclick: () => U.openAccounts() }, icon('plug'), 'Mở Kết nối')];
    } else if (st === 'off') {
      body = [el('h3', { text: 'Sảnh đang tắt' }), el('p', { text: 'Bật để gặp đồng nghiệp đang dùng AI và nhắn tin với nhau.' }),
        el('button', { class: 'btn primary', onclick: () => window.vp.lobby.connect(true).then(setStatus) }, '🌐 Vào Sảnh')];
    } else if (st === 'disabled') {
      body = [el('h3', { text: 'Gateway chưa bật Sảnh' }), el('p', { text: 'Admin cần cập nhật Gateway (git pull + restart) hoặc bật LOBBY_ENABLED=true.' }),
        el('button', { class: 'btn', onclick: () => window.vp.lobby.kick().then(setStatus) }, icon('refresh'), 'Thử lại')];
    } else {
      body = [el('div', { class: 'spin big' }), el('h3', { text: st === 'error' ? 'Đang kết nối lại…' : 'Đang vào Sảnh…' }), el('p', { text: L.status.error || 'Chờ chút nhé' }),
        el('button', { class: 'btn small', onclick: () => window.vp.lobby.kick().then(setStatus) }, icon('refresh'), 'Thử ngay')];
    }
    ov.replaceChildren(el('div', { class: 'lb-card' }, ...body));
    ov.classList.remove('hidden');
  }

  function setStatus(st) {
    L.status = st || L.status; renderConn(); renderMe();
    // đã online nhưng giao diện chưa nhận gói hello (app nối Sảnh trước khi giao diện sẵn sàng) → lấy ảnh chụp
    if (L.status.state === 'online' && !L.me && !L.snapping) {
      L.snapping = true;
      window.vp.lobby.members().then((r) => onLobby('hello', { me: { ...r.me, hidden: !!(L.status.me && L.status.me.hidden) }, members: r.members, rooms: r.rooms }))
        .catch(() => {}).finally(() => { L.snapping = false; });
    }
  }

  // ================= nhân vật của mình =================
  function myAvatar() { return (L.me && L.me.avatar && Object.keys(L.me.avatar).length ? L.me.avatar : ls.get('vp.myAvatar', {})); }

  function renderMe() {
    const { el } = U;
    const me = L.me || { id: 'me', name: 'Bạn', avatar: myAvatar() };
    const devices = (L.me && L.me.devices) || 1;
    const sub = me.teamName ? `Team ${me.teamName}${devices > 1 ? ` · đang mở trên ${devices} máy` : ''}` : 'Chưa vào Sảnh';
    $('#lbMe').replaceChildren(face({ ...me, avatar: myAvatar() }, 34), el('div', {}, el('b', { text: me.name }), el('small', { text: sub })));
    $('#lbMe').title = devices > 1 ? `Tài khoản này đang mở app trên ${devices} máy. Các máy đó là cùng một người nên không thấy nhau trong Sảnh.` : 'Tủ đồ – đổi nhân vật của bạn';
    const hidden = !!(L.me && L.me.hidden);
    $('#lbHiddenBar').classList.toggle('hidden', !hidden);
    const hb = $('#lbHide');
    hb.textContent = hidden ? '🙈 Đang ẩn' : '👁 Đang hiện';
    hb.title = hidden ? 'Người khác không thấy bạn online. Bấm để hiện.' : 'Mọi người thấy bạn online và đang làm gì. Bấm để ẩn.';
    hb.classList.toggle('armed', hidden);
  }

  async function toggleHidden() {
    if (!L.me) return;
    try { const r = await window.vp.lobby.profile({ hidden: !L.me.hidden }); L.me = { ...L.me, ...r.me }; renderMe(); U.toast(L.me.hidden ? '🙈 Đã ẩn – đồng nghiệp không thấy bạn online' : '👁 Mọi người đã thấy bạn trong Sảnh'); } catch (e) { U.toast(U.cleanErr(e), true); }
  }

  function openWardrobe() {
    const { el } = U;
    let draft = { hairStyle: 'short', accessory: 'none', ...look({ id: L.me ? L.me.id : 'me', avatar: myAvatar() }), ...myAvatar() };
    delete draft.id; delete draft.name;
    const previewBox = el('div', { class: 'wd-preview' });
    const name = el('div', { class: 'wd-name' }, el('b', { text: L.me ? L.me.name : 'Bạn' }), el('small', { text: L.me && L.me.teamName ? `Team ${L.me.teamName}` : '' }));
    let preview = null;
    const refresh = () => {
      if (preview) preview.update({ id: 'me', avatar: draft });
      groups.forEach((g) => g.sync());
    };
    const chips = (key, opts) => {
      const box = el('div', { class: 'wd-chips' });
      const sync = () => box.querySelectorAll('button').forEach((b) => b.classList.toggle('on', b.dataset.v === draft[key]));
      opts.forEach(([v, label]) => box.append(el('button', { 'data-v': v, onclick: () => { draft[key] = v; refresh(); preview && preview.wave(); } }, label)));
      return { el: box, sync };
    };
    const swatches = (key, colors) => {
      const box = el('div', { class: 'wd-sw' });
      const custom = el('input', { type: 'color', title: 'Chọn màu khác', oninput: (e) => { draft[key] = e.target.value; refresh(); } });
      colors.forEach((c) => box.append(el('button', { 'data-v': c, style: `--c:${c}`, title: c, onclick: () => { draft[key] = c; refresh(); } })));
      box.append(custom);
      const sync = () => { box.querySelectorAll('button').forEach((b) => b.classList.toggle('on', b.dataset.v === (draft[key] || '').toLowerCase())); custom.value = draft[key] || '#000000'; };
      return { el: box, sync };
    };
    const row = (label, g) => el('div', { class: 'wd-row' }, el('label', { text: label }), g.el);
    const groups = [
      chips('hairStyle', HAIR.map((h) => [h, HAIR_NAME[h]])), swatches('hair', PALETTE.hair), swatches('skin', PALETTE.skin),
      swatches('shirt', PALETTE.shirt), swatches('pants', PALETTE.pants), swatches('shoes', PALETTE.shoes),
      chips('accessory', ACC), swatches('accent', PALETTE.accent),
    ];
    const labels = ['Kiểu tóc', 'Màu tóc', 'Màu da', 'Áo', 'Quần', 'Giày', 'Phụ kiện', 'Màu phụ kiện'];
    const random = () => {
      const P = (a) => a[Math.floor(Math.random() * a.length)];
      draft = { hairStyle: P(HAIR), hair: P(PALETTE.hair), skin: P(PALETTE.skin), shirt: P(PALETTE.shirt), pants: P(PALETTE.pants), shoes: P(PALETTE.shoes), accessory: P(ACC)[0], accent: P(PALETTE.accent) };
      refresh(); preview && preview.wave(); U.sfx && U.sfx('sparkle');
    };
    const body = el('div', { class: 'wardrobe' },
      el('div', { class: 'wd-left' }, previewBox, name, el('button', { class: 'btn small', onclick: random }, '🎲 Ngẫu nhiên')),
      el('div', { class: 'wd-right' }, groups.map((g, i) => row(labels[i], g))));
    const save = el('button', { class: 'btn primary', text: 'Mặc bộ này' });
    save.addEventListener('click', async () => {
      ls.set('vp.myAvatar', draft);
      if (L.me) {
        try { const r = await window.vp.lobby.profile({ avatar: draft }); L.me = { ...L.me, ...r.me }; } catch (e) { U.toast(U.cleanErr(e), true); return; }
      }
      U.closeModal(); renderMe(); syncScene(); U.toast('✨ Đã thay đồ!'); U.sfx && U.sfx('sparkle');
      if (L.me) sendEmote('🎉');
    });
    U.openModal('👕 Tủ đồ của bạn', body, [el('div', { class: 'left' }, el('small', { class: 'dim', text: 'Mọi người trong Sảnh sẽ thấy nhân vật này.' })), save], 'wide');
    try { preview = new window.AvatarPreview(previewBox); } catch { previewBox.append(face({ id: 'me', avatar: draft }, 160)); }
    refresh();
    const stop = new MutationObserver(() => { if ($('#modal').classList.contains('hidden') && preview) { preview.destroy(); preview = null; stop.disconnect(); } });
    stop.observe($('#modal'), { attributes: true, attributeFilter: ['class'] });
  }

  // ================= cảnh 3D =================
  function ensureScene() {
    if (L.scene || !window.Lobby3D) return;
    try {
      L.scene = new window.Lobby3D($('#lobby3d'), {
        onPersonClick: (id, x, y) => openPerson(id, x, y),
        onSelfClick: () => openWardrobe(),
        onMove: (pos) => { if (L.status.state === 'online') window.vp.lobby.presence({ pos }); },
        onToast: (text) => toast(text),
      });
      window.__lobby = L.scene;
      syncScene();
    } catch (e) { $('#lobby3d').replaceChildren(U.el('div', { class: 'lb-no3d', text: 'Máy không chạy được 3D – vẫn chat được ở cột bên phải.' })); }
  }

  function syncScene() {
    if (!L.scene) return;
    const list = others().map((m) => ({ ...m }));
    if (L.me) list.unshift({ ...L.me, avatar: myAvatar(), me: true, status: L.presence });
    L.scene.setMembers(list);
  }

  // ================= người online =================
  function renderPeople() {
    const { el } = U;
    const list = others();
    $('#lbOnlineN').textContent = String(list.length);
    const cnt = $('#lobbyCount'); const unread = [...L.unread.values()].reduce((a, b) => a + b, 0);
    cnt.textContent = unread ? `${unread}` : String(list.length); cnt.classList.toggle('hidden', !list.length && !unread); cnt.classList.toggle('unread', !!unread);
    const box = $('#lbPeople');
    if (!list.length) { box.replaceChildren(L.status.state === 'online' ? el('div', { class: 'lb-empty small' }, el('div', { class: 'lb-empty-ic', text: '🛋️' }), el('b', { text: 'Quán đang vắng' }), el('small', { text: 'Chưa có ai khác online. Rủ đồng nghiệp mở app nhé!' })) : ''); return; }
    const teams = new Map();
    for (const m of list) { if (!teams.has(m.teamName)) teams.set(m.teamName, []); teams.get(m.teamName).push(m); }
    box.replaceChildren(...[...teams.entries()].sort((a, b) => (a[0] === (L.me && L.me.teamName) ? -1 : 0) - (b[0] === (L.me && L.me.teamName) ? -1 : 0)).flatMap(([team, ms]) => [
      el('div', { class: 'lb-team', text: `Team ${team || '?'}` }),
      ...ms.map((m) => el('button', { class: 'lb-person', title: m.role || '', onclick: (e) => openPerson(m.id, e.clientX, e.clientY) },
        face(m, 30), el('div', {}, el('b', { text: m.name }), el('small', { text: (m.status && m.status.text) || ACT_TEXT[(m.status && m.status.activity) || 'idle'] })),
        L.unread.get(dmRoom(L.me ? L.me.id : '', m.id)) ? el('em', { class: 'badge', text: String(L.unread.get(dmRoom(L.me.id, m.id))) }) : null)),
    ]));
  }

  function openPerson(id, x, y) {
    const { el } = U;
    const m = L.members.get(id); if (!m) return;
    document.querySelectorAll('.lb-pop').forEach((n) => n.remove());
    const pop = el('div', { class: 'lb-pop interact' },
      el('div', { class: 'ihead' }, face(m, 48), el('div', {}, el('b', { text: m.name }), el('small', { text: `Team ${m.teamName}${m.role ? ' · ' + m.role : ''}` }))),
      el('div', { class: 'lb-pop-st', text: (m.status && m.status.text) || ACT_TEXT[(m.status && m.status.activity) || 'idle'] }),
      el('div', { class: 'igrid' },
        el('button', { onclick: () => { pop.remove(); openDm(id); } }, el('span', { text: '💬' }), 'Nhắn riêng'),
        el('button', { onclick: () => { pop.remove(); sendEmote('👋'); quickSay(`👋 Chào ${m.name}!`, id); } }, el('span', { text: '👋' }), 'Vẫy chào'),
        el('button', { onclick: () => { pop.remove(); if (L.scene && m.pos) L.scene.walkSelf(m.pos.x + 0.8, m.pos.z + 0.4, true); } }, el('span', { text: '🚶' }), 'Đi tới')));
    document.body.append(pop);
    pop.style.left = Math.max(10, Math.min(window.innerWidth - pop.offsetWidth - 10, x + 12)) + 'px';
    pop.style.top = Math.max(66, Math.min(window.innerHeight - pop.offsetHeight - 10, y - pop.offsetHeight / 2)) + 'px';
    const off = (e) => { if (!pop.contains(e.target)) { pop.remove(); document.removeEventListener('mousedown', off, true); } };
    setTimeout(() => document.addEventListener('mousedown', off, true), 0);
  }

  // ================= phòng chat =================
  function addRoom(r) { if (!roomOf(r.id)) L.rooms.push(r); }

  function renderRooms() {
    const { el } = U;
    $('#lbRooms').replaceChildren(...L.rooms.map((r) => {
      const n = L.unread.get(r.id) || 0;
      const other = r.kind === 'dm' && L.members.get(r.with);
      return el('button', { class: 'lb-room' + (r.id === L.room ? ' on' : ''), onclick: () => openRoom(r.id) },
        r.kind === 'all' ? '🏢 ' : other ? face(other, 18) : '💬 ', el('span', { text: r.name }), n ? el('em', { class: 'badge', text: String(n) }) : null);
    }));
    const r = roomOf(L.room);
    $('#lbInput').placeholder = !r ? 'Nhắn…' : r.kind === 'all' ? 'Nhắn cho cả công ty…' : `Nhắn riêng cho ${r.name}…`;
  }

  async function openRoom(id) {
    L.room = id; L.unread.delete(id);
    renderRooms(); renderPeople();
    if (!L.loaded.has(id) && L.status.state === 'online') {
      try { const r = await window.vp.lobby.history(id); L.msgs.set(id, r.data || []); L.loaded.add(id); } catch (e) { U.toast(U.cleanErr(e), true); }
    }
    renderMsgs();
    $('#lbInput').focus();
  }

  function openDm(id) {
    if (!L.me) return;
    const m = L.members.get(id);
    const room = dmRoom(L.me.id, id);
    addRoom({ id: room, name: m ? m.name : 'Đồng nghiệp', kind: 'dm', with: id });
    openRoom(room);
  }

  function renderMsgs() {
    const { el } = U;
    const box = $('#lbMsgs');
    const list = L.msgs.get(L.room) || [];
    if (!list.length) {
      // phòng trống: gợi ý vài câu mở lời, bấm là gửi luôn
      const r = roomOf(L.room);
      const ideas = r && r.kind === 'dm' ? ['Chào bạn 👋', 'Rảnh không, hỏi chút việc nhé?', 'Gửi mình file với nhé 🙏']
        : ['Chào cả nhà 👋', 'Ai đi cà phê không ☕', 'Có ai biết dùng skill tạo video không? 🎬'];
      box.replaceChildren(el('div', { class: 'lb-empty' },
        el('div', { class: 'lb-empty-ic', text: r && r.kind === 'dm' ? '💌' : '🍹' }),
        el('b', { text: r && r.kind === 'dm' ? `Bắt đầu trò chuyện với ${r.name}` : 'Chưa có tin nhắn nào' }),
        el('small', { text: r && r.kind === 'dm' ? 'Tin nhắn riêng chỉ hai người thấy.' : 'Bấm một câu bên dưới để chào mọi người.' }),
        el('div', { class: 'lb-ideas' }, ideas.map((t) => el('button', { class: 'lb-idea', onclick: () => { $('#lbInput').value = t; sendMsg(); } }, t)))));
      return;
    }
    let lastFrom = null;
    box.replaceChildren(...list.map((msg) => {
      const mine = L.me && msg.from === L.me.id;
      const who = L.members.get(msg.from) || { id: msg.from, name: msg.name };
      const cont = lastFrom === msg.from; lastFrom = msg.from;
      return el('div', { class: 'lb-msg' + (mine ? ' mine' : '') + (cont ? ' cont' : '') },
        cont ? el('span', { class: 'sp' }) : face(mine ? { ...L.me, avatar: myAvatar() } : who, 26),
        el('div', { class: 'lb-b' }, cont ? null : el('div', { class: 'lb-w' }, el('b', { text: mine ? 'Bạn' : msg.name }), el('small', { text: nowHM(msg.ts) })), el('div', { class: 'lb-t', text: msg.text })));
    }));
    box.scrollTop = box.scrollHeight;
  }

  async function sendMsg() {
    const inp = $('#lbInput'); const text = inp.value.trim();
    if (!text) return;
    if (L.status.state !== 'online') { U.toast('Chưa vào được Sảnh', true); return; }
    const r = roomOf(L.room);
    inp.value = '';
    try {
      await window.vp.lobby.send(r && r.kind === 'dm' ? { to: r.with, text } : { room: L.room, text });
      if (L.me && L.me.hidden && !L.warnedHidden && (!r || r.kind !== 'dm')) { L.warnedHidden = true; U.toast('🙈 Bạn đang ẩn: mọi người đọc được tin nhưng không thấy bạn trong danh sách online. Bấm "Hiện lại" để hiện.'); }
    } catch (e) { inp.value = text; U.toast(U.cleanErr(e), true); }
  }

  function quickSay(text, toId) { if (L.me && L.status.state === 'online') window.vp.lobby.send(toId ? { to: toId, text } : { room: 'all', text }).catch(() => {}); }

  function sendEmote(e) {
    if (!L.me) return;
    if (L.scene) L.scene.emote(L.me.id, e);
    U.sfx && U.sfx(e === '🕺' ? 'dance' : 'pop');
    if (L.status.state === 'online') window.vp.lobby.presence({ emote: e });
  }

  function toast(text) {
    const t = $('#lbToast'); const n = U.el('div', { class: 'lb-tt', text });
    t.append(n); setTimeout(() => n.classList.add('out'), 3200); setTimeout(() => n.remove(), 3700);
  }

  // ================= màn chiếu YouTube =================
  const C = L.cin;
  const serverNow = () => Date.now() + C.skew;
  const muted = () => ls.get('vp.cinemaMute', false) === true;
  const fmt = (s) => { s = Math.max(0, Math.floor(s)); const h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60), x = s % 60; return (h ? h + ':' + String(m).padStart(2, '0') : m) + ':' + String(x).padStart(2, '0'); };
  const thumb = (id) => `https://i.ytimg.com/vi/${id}/mqdefault.jpg`;

  function onCinema(st) {
    const prev = C.state && C.state.current;
    C.state = st; C.skew = (st.now || Date.now()) - Date.now();
    const cur = st.current;
    if (cur && (!prev || prev.id !== cur.id)) {
      C.reported = '';
      if (L.shown) toast(`🎬 Đang chiếu: ${cur.title}${cur.byName ? ' – ' + cur.byName + ' chọn' : ''}`);
    }
    renderCinema(); syncCinemaFrame();
  }

  // gắn / gỡ khung YouTube trên màn chiếu 3D; đã đúng video thì để nguyên (không tải lại)
  function syncCinemaFrame() {
    clearTimeout(C.wait);
    const cur = C.state && C.state.current;
    if (!L.shown || !L.scene || !cur) { if (C.frame && L.scene) L.scene.setCinemaFrame(null); C.frame = null; C.key = null; return; }
    const key = cur.id + '|' + muted();
    if (C.key === key && C.frame) return;
    const pos = (serverNow() - cur.startedAt) / 1000;
    if (pos < 0) { C.wait = setTimeout(syncCinemaFrame, -pos * 1000 + 50); return; }
    const q = new URLSearchParams({ autoplay: '1', mute: muted() ? '1' : '0', start: String(Math.floor(pos)), controls: '0', disablekb: '1', fs: '0', rel: '0', modestbranding: '1', playsinline: '1', iv_load_policy: '3', enablejsapi: '1' });
    const frame = U.el('iframe', { src: `${EMBED}${cur.videoId}?${q}`, allow: 'autoplay; encrypted-media; picture-in-picture', referrerpolicy: 'strict-origin-when-cross-origin', title: cur.title || 'Video YouTube' });
    const box = U.el('div', { class: 'cine-frame' }, frame);
    C.api = false; C.frame = frame; C.key = key;
    frame.addEventListener('load', () => listenPlayer(frame));
    L.scene.setCinemaFrame(box);
  }

  // nói chuyện với trình phát YouTube qua postMessage (không cần tải thêm script): lấy độ dài, chỉnh lệch giờ, tắt tiếng
  const cmd = (func, args = []) => { try { C.frame && C.frame.contentWindow.postMessage(JSON.stringify({ event: 'command', func, args }), '*'); } catch { /* khung đã gỡ */ } };
  function listenPlayer(frame) {
    let n = 0;
    const hello = () => { if (C.frame !== frame || C.api || n++ > 15) return; try { frame.contentWindow.postMessage(JSON.stringify({ event: 'listening', id: 1, channel: 'widget' }), '*'); } catch { return; } setTimeout(hello, 1000); };
    hello();
  }
  window.addEventListener('message', (e) => {
    if (!C.frame || e.source !== C.frame.contentWindow) return;
    let d; try { d = typeof e.data === 'string' ? JSON.parse(e.data) : e.data; } catch { return; }
    if (!d || typeof d !== 'object') return;
    C.api = true;
    const cur = C.state && C.state.current; if (!cur) return;
    const info = d.info || {};
    if (info.duration > 0 && !cur.seconds && C.reported !== cur.id) { C.reported = cur.id; window.vp.lobby.cinema({ action: 'duration', videoId: cur.videoId, seconds: info.duration }).catch(() => {}); }
    if (typeof info.currentTime === 'number' && info.playerState === 1) {
      const want = (serverNow() - cur.startedAt) / 1000;
      if (Math.abs(info.currentTime - want) > 4 && (!C.lastSeek || Date.now() - C.lastSeek > 8000)) { C.lastSeek = Date.now(); cmd('seekTo', [want, true]); }
    }
  });

  function toggleMute() {
    ls.set('vp.cinemaMute', !muted());
    if (C.api) { cmd(muted() ? 'mute' : 'unMute'); C.key = (C.state && C.state.current ? C.state.current.id : '') + '|' + muted(); } else syncCinemaFrame();
    renderCinema();
  }

  function toggleCinema(force) {
    C.open = typeof force === 'boolean' ? force : !C.open;
    $('#lbCine').classList.toggle('hidden', !C.open);
    if (C.open) { renderCinema(); setTimeout(() => { const i = $('#lbCineUrl'); if (i) i.focus(); }, 30); }
  }

  async function addVideo() {
    const inp = $('#lbCineUrl'); const url = inp.value.trim();
    if (!url) return;
    if (L.status.state !== 'online') { U.toast('Chưa vào được Sảnh', true); return; }
    const btn = $('#lbCineAdd'); btn.disabled = true;
    try {
      const r = await window.vp.lobby.cinema({ action: 'add', url });
      inp.value = '';
      U.toast(r.playing ? `▶ Đang chiếu "${r.item.title}"` : `✅ Đã xếp hàng – thứ ${r.position} trong hàng chờ`);
      if (r.playing && L.scene) L.scene.viewScreen(C.open ? 190 : 0);
    } catch (e) { U.toast(U.cleanErr(e), true); }
    btn.disabled = false;
  }

  async function cinemaDo(payload, ok) {
    try { const r = await window.vp.lobby.cinema(payload); if (ok) ok(r); } catch (e) { U.toast(U.cleanErr(e), true); }
  }

  function renderCinema() {
    const { el } = U;
    const st = C.state || { current: null, queue: [] };
    const cur = st.current; const me = L.me && L.me.id;
    const b = $('#lbCineBtn');
    if (b) { b.classList.toggle('live', !!cur); b.replaceChildren(cur ? el('i', { class: 'live-dot' }) : '', '🎬 Màn chiếu', st.queue.length ? el('em', { class: 'badge', text: String(st.queue.length) }) : ''); }
    const box = $('#lbCine'); if (!box || !C.open) return;
    const head = el('div', { class: 'lc-h' }, el('b', { text: '🎬 Màn chiếu SIMI' }), el('span', { class: 'grow' }),
      el('button', { class: 'lc-ic', title: muted() ? 'Bật tiếng' : 'Tắt tiếng', 'aria-label': muted() ? 'Bật tiếng' : 'Tắt tiếng', onclick: toggleMute }, muted() ? '🔇' : '🔊'),
      el('button', { class: 'lc-ic', title: 'Đưa camera ra trước màn chiếu', 'aria-label': 'Xem màn chiếu', onclick: () => L.scene && L.scene.viewScreen(C.open ? 190 : 0) }, '🎯'),
      el('button', { class: 'lc-ic', title: 'Đóng', 'aria-label': 'Đóng', onclick: () => toggleCinema(false) }, '✕'));
    let now;
    if (cur) {
      const pos = Math.max(0, (serverNow() - cur.startedAt) / 1000);
      const mine = cur.by === me;
      now = el('div', { class: 'lc-now' },
        el('img', { src: thumb(cur.videoId), alt: '', onerror: (e) => { e.target.style.visibility = 'hidden'; } }),
        el('div', { class: 'lc-info' },
          el('small', { class: 'lc-tag', text: '● ĐANG CHIẾU' }),
          el('b', { class: 'lc-title', text: cur.title }),
          el('small', { class: 'dim', text: `${cur.byName || 'Ai đó'} chọn` + (cur.author ? ` · ${cur.author}` : '') }),
          el('div', { class: 'lc-prog' }, el('i', { id: 'lbCineBar', style: `width:${cur.seconds ? Math.min(100, pos / cur.seconds * 100) : 0}%` })),
          el('small', { class: 'dim', id: 'lbCineTime', text: cur.seconds ? `${fmt(pos)} / ${fmt(cur.seconds)}` : fmt(pos) })),
        el('button', { class: 'btn mini' + (mine ? ' primary' : ''), title: mine ? 'Bỏ qua video bạn đã chọn' : `Cần ${cur.skipNeed} phiếu để chuyển`, onclick: () => cinemaDo({ action: 'skip' }, (r) => { if (!r.skipped) U.toast(`🗳 Đã bỏ phiếu chuyển bài (${r.votes}/${r.need})`); }) },
          mine ? '⏭ Bỏ qua' : `⏭ Chuyển bài ${cur.skips ? `(${cur.skips}/${cur.skipNeed})` : ''}`.trim()));
    } else now = el('div', { class: 'lc-empty' }, el('b', { text: 'Màn hình đang trống' }), el('small', { text: 'Dán link YouTube bên dưới – cả quán sẽ cùng xem.' }));
    const add = el('div', { class: 'lc-add' },
      el('input', { id: 'lbCineUrl', placeholder: 'Dán link YouTube…', maxlength: 300, onkeydown: (e) => { if (e.key === 'Enter' && !e.isComposing) { e.preventDefault(); addVideo(); } } }),
      el('button', { class: 'btn mini primary', id: 'lbCineAdd', onclick: addVideo }, '+ Thêm'));
    const keep = $('#lbCineUrl'); if (keep && keep.value) add.querySelector('input').value = keep.value;
    const mineAhead = st.queue.findIndex((q) => q.by === me);
    const queue = st.queue.length ? el('div', { class: 'lc-q' },
      el('div', { class: 'lc-qh' }, el('b', { text: `Hàng chờ (${st.queue.length})` }), el('small', { class: 'dim', text: mineAhead >= 0 ? `Lượt của bạn: thứ ${mineAhead + 1}` : 'Mỗi người 1 video mỗi lượt' })),
      ...st.queue.map((q, i) => el('div', { class: 'lc-row' + (q.by === me ? ' mine' : '') },
        el('span', { class: 'lc-n', text: String(i + 1) }), el('img', { src: thumb(q.videoId), alt: '', onerror: (e) => { e.target.style.visibility = 'hidden'; } }),
        el('div', { class: 'grow' }, el('div', { class: 'lc-rt', text: q.title }), el('small', { class: 'dim', text: q.by === me ? 'Bạn chọn' : q.byName })),
        q.by === me ? el('button', { class: 'lc-ic', title: 'Gỡ khỏi hàng chờ', 'aria-label': 'Gỡ khỏi hàng chờ', onclick: () => cinemaDo({ action: 'remove', id: q.id }) }, '✕') : null)))
      : el('small', { class: 'dim lc-tip', text: 'Xếp hàng theo lượt: mỗi người 1 video mỗi vòng, tối đa 3 video chờ.' });
    box.replaceChildren(head, now, add, queue);
  }
  // thanh tiến độ chạy mỗi giây khi bảng màn chiếu đang mở
  setInterval(() => {
    const cur = C.state && C.state.current; if (!C.open || !cur) return;
    const pos = Math.max(0, (serverNow() - cur.startedAt) / 1000);
    const bar = $('#lbCineBar'); const t = $('#lbCineTime');
    if (bar && cur.seconds) bar.style.width = Math.min(100, pos / cur.seconds * 100) + '%';
    if (t) t.textContent = cur.seconds ? `${fmt(pos)} / ${fmt(cur.seconds)}` : fmt(pos);
  }, 1000);

  // ================= trạng thái tự động (đang làm gì với AI) =================
  function skillActivity(text) {
    const t = String(text || '');
    if (/\$(simi-tao-anh|muse-tao-anh)/.test(t)) return 'image';
    if (/\$simi-tao-video/.test(t)) return 'video';
    if (/\$(simi-tim-kiem-web|simi-doc-trang-web|simi-trinh-duyet)/.test(t)) return 'web';
    if (/\$(simi-doc-pdf|simi-tai-lieu|simi-chep-loi)/.test(t)) return 'doc';
    return 'chat';
  }
  let presT = 0;
  function updatePresence() {
    let p;
    const running = [...L.chats.values()];
    if (running.length) { const c = running[running.length - 1]; p = { activity: c.activity, text: ACT_TEXT[c.activity], model: c.model || '' }; }
    else if (L.working) p = { activity: 'work', text: ACT_TEXT.work, model: '' };
    else p = { activity: 'idle', text: ACT_TEXT.idle, model: '' };
    if (JSON.stringify(p) === JSON.stringify(L.presence)) return;
    L.presence = p; syncScene();
    clearTimeout(presT);
    presT = setTimeout(() => { if (L.status.state === 'online') window.vp.lobby.presence({ status: L.presence }); }, 400);
  }

  // Gateway gửi danh sách ai đang online mỗi 30 giây: lệch (lỡ mất sự kiện vào / rời khi mạng chập chờn) → tải lại danh sách
  function reconcile(ids) {
    const want = new Set(ids); if (L.me) want.delete(L.me.id);
    const have = new Set(others().map((m) => m.id));
    if (want.size === have.size && [...want].every((id) => have.has(id))) return;
    if (L.resyncing) return;
    L.resyncing = true;
    window.vp.lobby.members().then((r) => {
      for (const m of L.members.values()) if (!L.me || m.id !== L.me.id) m.online = false;
      (r.members || []).forEach(upsert);
      renderPeople(); syncScene();
    }).catch(() => {}).finally(() => { L.resyncing = false; });
  }

  // ================= sự kiện =================
  function upsert(m) { const old = L.members.get(m.id) || {}; L.members.set(m.id, { ...old, ...m }); }

  function onLobby(ev, d) {
    if (ev === 'status') return setStatus(d);
    if (ev === 'hello') {
      L.me = { ...d.me }; L.members.clear();
      upsert({ ...d.me });
      d.members.forEach(upsert);
      L.rooms = (d.rooms || []).filter((r) => r.kind !== 'team'); L.loaded.clear(); L.msgs.clear(); // chỉ chat cả công ty + nhắn riêng
      if (d.cinema) onCinema(d.cinema);
      // nhân vật đã chọn trên máy này nhưng chưa lưu lên Gateway (lần đầu vào Sảnh)
      const local = ls.get('vp.myAvatar', null);
      if (local && (!d.me.avatar || !Object.keys(d.me.avatar).length)) window.vp.lobby.profile({ avatar: local }).then((r) => { L.me = { ...L.me, ...r.me }; syncScene(); renderMe(); }).catch(() => {});
      window.vp.lobby.presence({ status: L.presence });
      L.status = { ...L.status, state: 'online' }; renderConn(); renderMe();
      renderPeople(); renderRooms(); syncScene();
      if (!roomOf(L.room)) L.room = 'all';
      openRoom(L.room);
      return;
    }
    if (ev === 'me') { L.me = { ...L.me, ...d }; renderMe(); syncScene(); return; }
    if (ev === 'member') {
      const isNew = !L.members.get(d.id) || !L.members.get(d.id).online;
      upsert(d);
      if (isNew && d.online) { toast(`👋 ${d.name} vừa vào Sảnh`); }
      renderPeople(); syncScene(); return;
    }
    if (ev === 'leave') {
      const m = L.members.get(d.id); if (m) { m.online = false; toast(`${m.name} đã rời Sảnh`); }
      renderPeople(); syncScene(); return;
    }
    if (ev === 'move') { const m = L.members.get(d.id); if (m) m.pos = { x: d.x, z: d.z, seat: d.seat || null }; if (L.scene) L.scene.moveMember(d.id, d.x, d.z, d.seat); return; }
    if (ev === 'emote') { if (L.scene) L.scene.emote(d.id, d.emote); return; }
    if (ev === 'cinema') { onCinema(d); return; }
    if (ev === 'roster') { reconcile(d.ids || []); return; }
    if (ev === 'message') {
      if (d.room.startsWith('team:')) return; // phòng team đã bỏ
      const list = L.msgs.get(d.room) || []; list.push(d); L.msgs.set(d.room, list);
      if (d.room.startsWith('dm:') && !roomOf(d.room)) {
        const other = d.room.slice(3).split('~').find((x) => !L.me || x !== L.me.id);
        addRoom({ id: d.room, name: d.from === (L.me && L.me.id) ? (L.members.get(other) || {}).name || 'Đồng nghiệp' : d.name, kind: 'dm', with: other });
      }
      const mine = L.me && d.from === L.me.id;
      // nói thành bong bóng trên đầu (phòng chung – tin nhắn riêng thì không hiện công khai)
      if (L.scene && !d.room.startsWith('dm:')) L.scene.say(d.from, d.text);
      if (L.shown && d.room === L.room) renderMsgs();
      else if (!mine) { L.unread.set(d.room, (L.unread.get(d.room) || 0) + 1); if (d.room.startsWith('dm:') || L.shown) U.sfx && U.sfx('pop'); }
      renderRooms(); renderPeople();
    }
  }

  function onEvent(e) {
    if (e.type === 'lobby') return onLobby(e.ev, e.data);
    if (e.type === 'lobby-open') { window.VPChat.setView('lobby'); openRoom(e.room); return; }
    if (e.type === 'chat') {
      if (e.ev === 'start') L.chats.set(e.threadId, { activity: skillActivity(e.user && e.user.text), model: (e.message && e.message.model) || '' });
      else if (e.ev === 'done') L.chats.delete(e.threadId);
      else return;
      updatePresence();
    }
    if (e.type === 'task') { L.working = e.status === 'running' || (L.working && e.status === 'queued'); updatePresence(); }
  }

  // ================= API cho chat.js / app.js =================
  function visible(on) {
    L.shown = on;
    if (L.scene) L.scene.paused = !on;
    syncCinemaFrame(); // rời tab Sảnh → tắt video (không phát tiếng khi đang làm việc khác)
    if (on) {
      ensureScene();
      if (L.status.state !== 'online') window.vp.lobby.kick().then(setStatus);
      L.unread.delete(L.room); renderRooms(); renderPeople(); renderMsgs();
      setTimeout(() => L.scene && L.scene.canvas.focus(), 60);
    }
  }

  async function init(api) {
    U = api;
    build();
    window.vp.onEvent(onEvent);
    setStatus(await window.vp.lobby.status());
    renderRooms(); renderPeople(); renderMe();
    if (ls.get('vp.mainView', 'office') === 'lobby') window.VPChat.setView('lobby');
  }

  window.VPLobby = { init, visible, openDm, toggleCinema, _state: L };
})();
