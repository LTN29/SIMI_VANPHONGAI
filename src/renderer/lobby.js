/* Tab Sảnh: gặp đồng nghiệp đang dùng AI trên SIMI Gateway – nhân vật 3D tự chọn, trạng thái, nhắn tin cả công ty / riêng,
   màn chiếu YouTube chung (xếp hàng theo lượt, cả quán xem đồng bộ). */
(function () {
  let U; // tiện ích dùng chung từ app.js (window.VP)
  const L = {
    status: { state: 'off' }, me: null, members: new Map(), rooms: [], room: 'all',
    msgs: new Map(), unread: new Map(), loaded: new Set(), scene: null, shown: false,
    presence: { activity: 'idle', text: 'Đang rảnh', model: '' }, chats: new Map(), working: false,
    cin: { state: null, skew: 0, key: null, frame: null, api: false, reported: '', open: false },
    // tính năng Gateway có + quyền của mình (admin đặt), thông báo ghim
    features: new Set(), perms: {}, admin: false, mutedUntil: null, pinned: null, npc: null,
    compose: { files: [], reply: null, mentions: new Map(), sending: false }, tagged: new Set(),
  };
  const MAX_FILES = 4;
  const imgUrl = (id, thumb) => `vpimg://img/${id}${thumb ? '?t=1' : ''}`;
  const can = (perm) => L.admin || L.perms[perm] !== false;
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
  const EMOTES = ['👋', '❤️', '😂', '🎉', '☕', '👍', '🙌'];
  const DANCES = [['groove', '🕺', 'Lắc lư'], ['disco', '🪩', 'Disco'], ['robot', '🤖', 'Robot'], ['shuffle', '👟', 'Shuffle'], ['spin', '🌀', 'Xoay vòng'], ['hands', '🙌', 'Giơ tay']];
  const KIND_TEXT = { highfive: 'đập tay', cheers: 'cụng ly', coffee: 'mời cà phê', hug: 'ôm', dance: 'nhảy cùng' };
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
        el('div', { class: 'lb-emotes' }, EMOTES.map((e) => el('button', { title: 'Biểu cảm', onclick: () => sendEmote(e) }, e)),
          el('span', { class: 'sep' }), el('button', { class: 'lb-dancebtn', id: 'lbDanceBtn', title: 'Nhảy (nhảy liên tục tới khi bấm Dừng hoặc đi chỗ khác)', onclick: () => toggleDancePick() }, '🕺')),
        el('div', { class: 'lb-dancepick hidden', id: 'lbDancePick', role: 'menu' }),
        el('div', { class: 'lb-invite hidden', id: 'lbInvite', role: 'alertdialog' }),
        el('div', { class: 'lb-hint', text: 'Bấm sàn để đi · W A S D · Bấm ghế để ngồi · Bấm vào ai đó để nhắn riêng · Lăn chuột: phóng to' }),
        el('div', { class: 'lb-toast', id: 'lbToast' }),
        el('div', { class: 'lb-pin hidden', id: 'lbPin', role: 'status' }),
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
          el('button', { class: 'lb-newmsg hidden', id: 'lbNewMsg', onclick: () => { scrollBottom(); } }),
          el('div', { class: 'lb-compose', id: 'lbCompose' },
            el('div', { class: 'lb-muted hidden', id: 'lbMuted' }),
            el('div', { class: 'lb-replybar hidden', id: 'lbReply' }),
            el('div', { class: 'lb-tray hidden', id: 'lbTray' }),
            el('div', { class: 'lb-mpop hidden', id: 'lbMention', role: 'listbox' }),
            el('div', { class: 'lb-input' },
              el('button', { class: 'lb-attach hidden', id: 'lbAttach', title: 'Gửi ảnh (hoặc dán Ctrl+V, kéo thả vào đây)', 'aria-label': 'Gửi ảnh', onclick: () => $('#lbFile').click() }, '🖼️'),
              el('textarea', { id: 'lbInput', rows: 1, maxlength: 2000, placeholder: 'Nhắn cho cả công ty…', onkeydown: onInputKey, oninput: onInputChange, onpaste: onPaste }),
              el('button', { class: 'ch-send', id: 'lbSend', title: 'Gửi', onclick: sendMsg }, icon('send'))),
            el('input', { type: 'file', id: 'lbFile', class: 'hidden', multiple: true, accept: 'image/png,image/jpeg,image/webp,image/gif', onchange: (e) => { addFiles([...e.target.files]); e.target.value = ''; } })))));
    $('#chatView').after(view);
    // kéo thả ảnh vào khung chat
    const chatBox = $('.lb-chat', view);
    chatBox.addEventListener('dragover', (e) => { if (canImage() && [...(e.dataTransfer.items || [])].some((i) => i.kind === 'file')) { e.preventDefault(); chatBox.classList.add('drop'); } });
    chatBox.addEventListener('dragleave', (e) => { if (!chatBox.contains(e.relatedTarget)) chatBox.classList.remove('drop'); });
    chatBox.addEventListener('drop', (e) => { chatBox.classList.remove('drop'); if (!canImage()) return; e.preventDefault(); addFiles([...e.dataTransfer.files]); });
    $('#lbMsgs').addEventListener('scroll', () => { if (nearBottom()) $('#lbNewMsg').classList.add('hidden'); }, { passive: true });
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
      window.vp.lobby.members().then((r) => onLobby('hello', { ...r, me: { ...r.me, hidden: !!(L.status.me && L.status.me.hidden) } }))
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
        onCatClick: (x, y) => openCat(x, y),
        onNpcClick: () => window.VPNpc && window.VPNpc.open(),
        npcGreeting: () => `Chào ${L.me ? L.me.name : 'bạn'}! Cần giúp gì không? Bấm vào mình nhé 👋`,
        onDance: (style, byMove) => { L.myDance = style; renderDancePick(); if (!byMove && L.status.state === 'online' && L.features.has('dance')) window.vp.lobby.presence({ dance: style }); },
        onFloor: (on) => { L.onFloor = on; renderDancePick(); },
        onSlow: () => { if (!ls.get('vp.slowTold', false)) { ls.set('vp.slowTold', true); toast('⚡ Máy hơi chậm – Sảnh tự giảm hiệu ứng cho mượt'); } },
      });
      if (U.S && U.S.cfg && U.S.cfg.lobbyLight) L.scene.setLight(true);
      L.scene.setSkew(L.skew || 0);
      if (L.catState) L.scene.setCat(L.catState);
      L.scene.setNpc(L.npc || null);
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
        face(m, 30), el('div', {}, el('b', {}, m.name, m.admin ? el('span', { class: 'lb-adm', title: 'Admin', text: '🛡️' }) : ''), el('small', { text: (m.status && m.status.text) || ACT_TEXT[(m.status && m.status.activity) || 'idle'] })),
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
        el('button', { onclick: () => { pop.remove(); if (L.scene && m.pos) L.scene.walkSelf(m.pos.x + 0.8, m.pos.z + 0.4, true); } }, el('span', { text: '🚶' }), 'Đi tới'),
        ...(L.features.has('interact') ? [
          ['highfive', '✋', 'Đập tay'], ['cheers', '🥂', 'Cụng ly'], ['coffee', '☕', 'Mời cà phê'], ['hug', '🤗', 'Ôm'], ['dance', '💃', 'Mời nhảy'],
        ].map(([k, ic, t]) => el('button', { onclick: () => { pop.remove(); interact(id, k); } }, el('span', { text: ic }), t)) : [])));
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
      const at = L.tagged.has(r.id);
      return el('button', { class: 'lb-room' + (r.id === L.room ? ' on' : ''), onclick: () => openRoom(r.id) },
        r.kind === 'all' ? '🏢 ' : other ? face(other, 18) : '💬 ', el('span', { text: r.name }), n || at ? el('em', { class: 'badge' + (at ? ' at' : ''), text: at ? '@' : String(n) }) : null);
    }));
    renderComposer();
  }

  // ô nhập: chỗ đặt, nút ảnh theo quyền, đang bị khoá chat
  function renderComposer() {
    const r = roomOf(L.room);
    const muted = L.mutedUntil && L.mutedUntil > Date.now();
    const inp = $('#lbInput');
    inp.placeholder = muted ? 'Đang bị tạm khoá chat' : !r ? 'Nhắn…' : r.kind === 'all' ? 'Nhắn cho cả công ty…  (@ để gọi tên)' : `Nhắn riêng cho ${r.name}…`;
    inp.disabled = !!muted;
    $('#lbAttach').classList.toggle('hidden', !canImage());
    const mb = $('#lbMuted');
    mb.classList.toggle('hidden', !muted);
    if (muted) {
      mb.textContent = `🔇 Admin đã tạm khoá chat của bạn tới ${new Date(L.mutedUntil).toTimeString().slice(0, 5)}`;
      clearTimeout(L.muteT); L.muteT = setTimeout(renderComposer, Math.min(L.mutedUntil - Date.now() + 500, 2 ** 31 - 1));
    }
  }
  const canImage = () => L.features.has('images') && can('image') && !(L.mutedUntil && L.mutedUntil > Date.now());

  async function openRoom(id) {
    L.room = id; L.unread.delete(id); L.tagged.delete(id);
    if (L.compose.reply && L.compose.reply.room !== id) setReply(null);
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

  // ---------- danh sách tin nhắn: dựng 1 lần khi đổi phòng, sau đó chỉ thêm / bớt từng tin (không vẽ lại cả khung) ----------
  const nearBottom = () => { const b = $('#lbMsgs'); return b.scrollHeight - b.scrollTop - b.clientHeight < 90; };
  function scrollBottom() { const b = $('#lbMsgs'); b.scrollTop = b.scrollHeight; $('#lbNewMsg').classList.add('hidden'); }
  const sameGroup = (a, b) => a && b && a.from === b.from && b.ts - a.ts < 5 * 60 * 1000 && !b.reply;

  function renderMsgs() {
    const { el } = U;
    const box = $('#lbMsgs');
    const list = L.msgs.get(L.room) || [];
    $('#lbNewMsg').classList.add('hidden');
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
    box.replaceChildren(...list.map((msg, i) => msgNode(msg, list[i - 1])));
    scrollBottom();
  }

  function appendMsg(msg) {
    const box = $('#lbMsgs');
    const list = L.msgs.get(L.room) || [];
    if (list.length <= 1 || box.querySelector('.lb-empty')) { renderMsgs(); return; }
    const stick = nearBottom() || (L.me && msg.from === L.me.id);
    box.append(msgNode(msg, list[list.length - 2]));
    while (box.children.length > 300) box.firstChild.remove();
    if (stick) scrollBottom();
    else { const nb = $('#lbNewMsg'); nb.textContent = '↓ Có tin mới'; nb.classList.remove('hidden'); }
  }

  function msgNode(msg, prev) {
    const { el } = U;
    const mine = L.me && msg.from === L.me.id;
    const who = L.members.get(msg.from) || { id: msg.from, name: msg.name };
    const cont = sameGroup(prev, msg);
    const tagged = !mine && L.me && (msg.mentions || []).some((id) => id === L.me.id || id === 'all');
    const body = el('div', { class: 'lb-b' });
    if (!cont) body.append(el('div', { class: 'lb-w' }, el('b', { text: mine ? 'Bạn' : msg.name }), who.admin ? el('span', { class: 'lb-adm', title: 'Admin', text: '🛡️' }) : '', el('small', { text: nowHM(msg.ts) })));
    if (msg.reply) {
      body.append(el('button', { class: 'lb-quote', title: 'Xem tin gốc', onclick: () => jumpTo(msg.reply.id) },
        el('b', { text: '↩ ' + msg.reply.name }), el('span', { text: msg.reply.text || (msg.reply.image ? '📷 Ảnh' : '') })));
    }
    if (msg.images && msg.images.length) body.append(imageGrid(msg.images));
    if (msg.text) body.append(el('div', { class: 'lb-t' }, ...richText(msg)));
    const acts = el('div', { class: 'lb-acts' },
      el('button', { title: 'Trả lời', 'aria-label': 'Trả lời', onclick: () => setReply(msg) }, '↩'));
    const room = roomOf(msg.room);
    if (mine || (L.admin && room && room.kind !== 'dm')) acts.append(delBtn(msg, mine));
    return el('div', { class: 'lb-msg' + (mine ? ' mine' : '') + (cont ? ' cont' : '') + (tagged ? ' tagged' : ''), 'data-id': msg.id },
      cont ? el('span', { class: 'sp' }) : face(mine ? { ...L.me, avatar: myAvatar() } : who, 26), body, acts);
  }

  // bấm 2 lần để xoá (không dùng hộp thoại hệ thống)
  function delBtn(msg, mine) {
    const b = U.el('button', { class: 'del', title: mine ? 'Thu hồi' : 'Xoá tin (admin)', 'aria-label': mine ? 'Thu hồi' : 'Xoá tin' }, '🗑');
    b.addEventListener('click', async () => {
      if (!b.classList.contains('armed')) { b.classList.add('armed'); b.textContent = mine ? 'Thu hồi?' : 'Xoá?'; setTimeout(() => { b.classList.remove('armed'); b.textContent = '🗑'; }, 4000); return; }
      b.disabled = true;
      try { await window.vp.lobby.deleteMsg(msg.room, msg.id); } catch (e) { U.toast(U.cleanErr(e), true); b.disabled = false; }
    });
    return b;
  }

  // chữ + @tên tô màu + link bấm được
  function richText(msg) {
    const { el } = U;
    const names = Object.entries(msg.mentionNames || {}).map(([id, name]) => ({ id, name })).sort((a, b) => b.name.length - a.name.length);
    const esc = (t) => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const parts = [];
    const re = new RegExp(`(https?://[^\\s<>"]{2,500})${names.length ? '|@(' + names.map((n) => esc(n.name)).join('|') + ')' : ''}`, 'g');
    let last = 0; let m;
    const text = msg.text;
    while ((m = re.exec(text))) {
      if (m.index > last) parts.push(text.slice(last, m.index));
      if (m[1]) { const url = m[1].replace(/[.,;:!?)]+$/, ''); parts.push(el('a', { href: '#', class: 'lb-link', title: url, onclick: (e) => { e.preventDefault(); window.vp.openUrl(url); } }, url)); re.lastIndex = m.index + url.length; last = re.lastIndex; continue; }
      const hit = names.find((n) => n.name === m[2]);
      parts.push(el('span', { class: 'lb-tag' + (hit && L.me && (hit.id === L.me.id || hit.id === 'all') ? ' me' : ''), text: '@' + m[2] }));
      last = re.lastIndex;
    }
    if (last < text.length) parts.push(text.slice(last));
    return parts;
  }

  // ảnh thu nhỏ: giữ sẵn chỗ đúng tỉ lệ (không giật khung khi ảnh tải xong), chỉ tải khi cuộn tới
  function imageGrid(images) {
    const { el } = U;
    return el('div', { class: 'lb-imgs n' + Math.min(images.length, 4) }, images.map((im) => {
      const ratio = Math.max(0.35, Math.min(3, (im.w || 4) / (im.h || 3)));
      return el('button', { class: 'lb-img', style: `aspect-ratio:${ratio}`, title: 'Xem ảnh', onclick: () => openViewer(im) },
        el('img', { src: imgUrl(im.id, im.thumb !== false), loading: 'lazy', decoding: 'async', alt: 'Ảnh', draggable: 'false', onerror: (e) => { e.target.closest('.lb-img').classList.add('gone'); e.target.remove(); } }),
        im.type === 'image/gif' ? el('i', { class: 'gif', text: 'GIF' }) : '');
    }));
  }

  function openViewer(im) {
    const { el } = U;
    document.querySelectorAll('.lb-viewer').forEach((n) => n.remove());
    const close = () => { v.remove(); document.removeEventListener('keydown', key, true); };
    const key = (e) => { if (e.key === 'Escape') { e.stopPropagation(); close(); } };
    const v = el('div', { class: 'lb-viewer', role: 'dialog', 'aria-label': 'Xem ảnh', onclick: (e) => { if (e.target === v) close(); } },
      el('img', { src: imgUrl(im.id, false), alt: 'Ảnh', decoding: 'async' }),
      el('div', { class: 'lv-bar' },
        el('button', { class: 'btn small', onclick: async () => { try { const p = await window.vp.lobby.saveImage(im.id); if (p) U.toast('💾 Đã lưu ảnh'); } catch (e) { U.toast(U.cleanErr(e), true); } } }, '⬇ Lưu ảnh'),
        el('button', { class: 'btn small', onclick: close }, '✕ Đóng')));
    document.body.append(v);
    document.addEventListener('keydown', key, true);
  }

  function jumpTo(id) {
    const n = $(`#lbMsgs .lb-msg[data-id="${CSS.escape(id)}"]`);
    if (!n) { U.toast('Tin gốc đã cũ, không còn trong khung chat'); return; }
    n.scrollIntoView({ block: 'center', behavior: 'smooth' });
    n.classList.remove('flash'); void n.offsetWidth; n.classList.add('flash');
  }

  function removeMsg(room, id) {
    const list = L.msgs.get(room); if (!list) return;
    const i = list.findIndex((m) => m.id === id); if (i < 0) return;
    list.splice(i, 1);
    if (room === L.room && L.shown) {
      const n = $(`#lbMsgs .lb-msg[data-id="${CSS.escape(id)}"]`);
      if (n) { const next = n.nextElementSibling; n.remove(); if (next && next.classList.contains('cont')) renderMsgs(); }
      if (!list.length) renderMsgs();
    }
  }

  // ---------- trả lời ----------
  function setReply(msg) {
    const { el } = U;
    L.compose.reply = msg ? { id: msg.id, from: msg.from, name: msg.name, room: msg.room, text: msg.text || (msg.images ? '📷 Ảnh' : '') } : null;
    const bar = $('#lbReply');
    bar.classList.toggle('hidden', !msg);
    if (!msg) { bar.replaceChildren(); return; }
    bar.replaceChildren(el('div', { class: 'grow' }, el('b', { text: `↩ Trả lời ${L.me && msg.from === L.me.id ? 'chính bạn' : msg.name}` }), el('small', { text: L.compose.reply.text.slice(0, 90) })),
      el('button', { class: 'lc-ic', title: 'Bỏ trả lời', 'aria-label': 'Bỏ trả lời', onclick: () => setReply(null) }, '✕'));
    $('#lbInput').focus();
  }

  // ---------- ảnh đính kèm: nén ngay trên máy, trong luồng riêng (không khựng cảnh 3D) ----------
  let worker = null; const jobs = new Map(); let jobN = 0;
  function prepImage(file) {
    if (!worker) {
      worker = new Worker('img-worker.js');
      worker.onmessage = (e) => { const j = jobs.get(e.data.id); if (!j) return; jobs.delete(e.data.id); if (e.data.error) j.reject(new Error(e.data.error)); else j.resolve(e.data); };
      worker.onerror = () => { for (const j of jobs.values()) j.reject(new Error('Không xử lý được ảnh')); jobs.clear(); worker = null; };
    }
    const id = ++jobN;
    return new Promise((resolve, reject) => { jobs.set(id, { resolve, reject }); worker.postMessage({ id, file }); })
      .then((r) => ({ full: new Uint8Array(r.full), thumb: new Uint8Array(r.thumb), w: r.w, h: r.h, gif: r.gif, url: URL.createObjectURL(new Blob([r.thumb], { type: 'image/webp' })) }));
  }

  async function addFiles(files) {
    const imgs = files.filter((f) => f && /^image\//.test(f.type));
    if (!imgs.length) { if (files.length) U.toast('Chỉ gửi được ảnh (PNG, JPG, WebP, GIF)', true); return; }
    if (!canImage()) { U.toast(L.features.has('images') ? 'Admin chưa mở quyền gửi ảnh cho bạn' : 'Gateway chưa hỗ trợ gửi ảnh – báo admin cập nhật Gateway', true); return; }
    const room = slot();
    const work = [];
    for (const f of imgs) {
      if (L.compose.files.length >= MAX_FILES) { U.toast(`Mỗi tin gửi tối đa ${MAX_FILES} ảnh`, true); break; }
      const item = { id: Math.random().toString(36).slice(2), busy: true, room };
      L.compose.files.push(item);
      work.push(prepImage(f).then((r) => Object.assign(item, r, { busy: false }), (e) => { L.compose.files.splice(L.compose.files.indexOf(item), 1); U.toast(U.cleanErr(e), true); }).then(renderTray));
    }
    renderTray();
    $('#lbInput').focus();
    await Promise.all(work);
  }

  function renderTray() {
    const { el } = U;
    const tray = $('#lbTray');
    const files = L.compose.files;
    tray.classList.toggle('hidden', !files.length);
    tray.replaceChildren(...files.map((f) => el('div', { class: 'lb-tr' + (f.busy ? ' busy' : '') },
      f.url ? el('img', { src: f.url, alt: '' }) : el('div', { class: 'spin' }),
      f.gif ? el('i', { class: 'gif', text: 'GIF' }) : '',
      L.compose.sending ? '' : el('button', { class: 'x', title: 'Bỏ ảnh', 'aria-label': 'Bỏ ảnh', onclick: () => { if (f.url) URL.revokeObjectURL(f.url); files.splice(files.indexOf(f), 1); renderTray(); } }, '✕'))),
      L.compose.sending ? el('small', { class: 'dim', id: 'lbTrayMsg', text: 'Đang gửi ảnh…' }) : '');
  }

  function onPaste(e) {
    const files = [...(e.clipboardData && e.clipboardData.files || [])].filter((f) => /^image\//.test(f.type));
    if (!files.length) return;
    e.preventDefault(); addFiles(files);
  }

  // ---------- @ gọi tên ----------
  const fold = (t) => String(t || '').normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/đ/g, 'd').replace(/Đ/g, 'D').toLowerCase();
  function mentionCandidates(q) {
    const r = roomOf(L.room);
    let list;
    if (r && r.kind === 'dm') { const o = L.members.get(r.with); list = o ? [o] : []; }
    else list = [...L.members.values()].filter((m) => !L.me || m.id !== L.me.id);
    const fq = fold(q);
    list = list.filter((m) => !fq || fold(m.name).split(/\s+/).some((w) => w.startsWith(fq)) || fold(m.name).includes(fq))
      .sort((a, b) => (b.online ? 1 : 0) - (a.online ? 1 : 0) || a.name.localeCompare(b.name, 'vi')).slice(0, 7);
    const out = list.map((m) => ({ id: m.id, name: m.name, m }));
    if ((!r || r.kind === 'all') && L.features.has('mentions') && can('everyone') && (!fq || 'moi nguoi'.startsWith(fq) || 'all'.startsWith(fq))) out.unshift({ id: 'all', name: 'mọi người' });
    return out;
  }

  function onInputChange() {
    const ta = $('#lbInput');
    ta.style.height = 'auto'; ta.style.height = Math.min(120, ta.scrollHeight) + 'px';
    const before = ta.value.slice(0, ta.selectionStart);
    const m = /(^|\s)@([^\s@]{0,20})$/.exec(before);
    if (!m || !L.features.has('mentions')) { closeMention(); return; }
    const cands = mentionCandidates(m[2]);
    if (!cands.length) { closeMention(); return; }
    L.mpop = { cands, i: 0, q: m[2] };
    renderMention();
  }

  function renderMention() {
    const { el } = U;
    const pop = $('#lbMention');
    pop.classList.remove('hidden');
    pop.replaceChildren(...L.mpop.cands.map((c, i) => el('button', { class: 'lb-mi' + (i === L.mpop.i ? ' on' : ''), role: 'option', onmousedown: (e) => { e.preventDefault(); pickMention(i); } },
      c.id === 'all' ? el('span', { class: 'lb-mall', text: '📣' }) : face(c.m, 22), el('b', { text: c.name }), c.id === 'all' ? el('small', { text: 'báo cả công ty' }) : el('small', { text: c.m.online ? '● online' : '' }))));
  }
  function closeMention() { L.mpop = null; $('#lbMention').classList.add('hidden'); }

  function pickMention(i) {
    const c = L.mpop && L.mpop.cands[i]; if (!c) return;
    const ta = $('#lbInput');
    const pos = ta.selectionStart;
    const start = pos - L.mpop.q.length - 1;
    const ins = '@' + c.name + ' ';
    ta.value = ta.value.slice(0, start) + ins + ta.value.slice(pos);
    ta.selectionStart = ta.selectionEnd = start + ins.length;
    L.compose.mentions.set(c.name, c.id);
    closeMention(); ta.focus();
  }

  function onInputKey(e) {
    if (L.mpop) {
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') { e.preventDefault(); const n = L.mpop.cands.length; L.mpop.i = (L.mpop.i + (e.key === 'ArrowDown' ? 1 : n - 1)) % n; renderMention(); return; }
      if ((e.key === 'Enter' || e.key === 'Tab') && !e.isComposing) { e.preventDefault(); pickMention(L.mpop.i); return; }
      if (e.key === 'Escape') { e.preventDefault(); closeMention(); return; }
    }
    if (e.key === 'Escape' && L.compose.reply) { setReply(null); return; }
    if (e.key === 'Enter' && !e.shiftKey && !e.isComposing) { e.preventDefault(); sendMsg(); }
  }

  // phòng đang nhắn: { room } hoặc { to } (nhắn riêng)
  function slot() { const r = roomOf(L.room); return r && r.kind === 'dm' ? { to: r.with } : { room: L.room }; }

  async function sendMsg() {
    const inp = $('#lbInput'); const text = inp.value.trim();
    const C2 = L.compose;
    if (C2.sending) return;
    if (C2.files.some((f) => f.busy)) { U.toast('Đợi ảnh xử lý xong đã nhé'); return; }
    if (!text && !C2.files.length) return;
    if (L.status.state !== 'online') { U.toast('Chưa vào được Sảnh', true); return; }
    const target = slot();
    const mentions = [...C2.mentions.entries()].filter(([name]) => text.includes('@' + name)).map(([, id]) => id);
    if (C2.reply && L.me && C2.reply.from !== L.me.id && !mentions.includes(C2.reply.from)) mentions.push(C2.reply.from);
    C2.sending = true; $('#lbSend').disabled = true;
    try {
      const images = [];
      if (C2.files.length) {
        renderTray();
        for (let i = 0; i < C2.files.length; i++) {
          const f = C2.files[i];
          const t = $('#lbTrayMsg'); if (t) t.textContent = `Đang gửi ảnh ${i + 1}/${C2.files.length}…`;
          if (!f.uploaded) f.uploaded = (await window.vp.lobby.upload({ ...target, full: f.full, thumb: f.thumb, w: f.w, h: f.h })).id;
          images.push(f.uploaded);
        }
      }
      const payload = { ...target, text };
      if (images.length) payload.images = images;
      if (mentions.length && L.features.has('mentions')) payload.mentions = mentions;
      if (C2.reply && L.features.has('reply')) payload.replyTo = C2.reply.id;
      await window.vp.lobby.send(payload);
      inp.value = ''; onInputChange();
      C2.files.forEach((f) => f.url && URL.revokeObjectURL(f.url)); C2.files = []; C2.mentions.clear(); setReply(null);
      const r = roomOf(L.room);
      if (L.me && L.me.hidden && !L.warnedHidden && (!r || r.kind !== 'dm')) { L.warnedHidden = true; U.toast('🙈 Bạn đang ẩn: mọi người đọc được tin nhưng không thấy bạn trong danh sách online. Bấm "Hiện lại" để hiện.'); }
    } catch (e) { U.toast(U.cleanErr(e), true); }
    C2.sending = false; $('#lbSend').disabled = false; renderTray();
  }

  // ---------- thông báo ghim / thông báo nổi của admin ----------
  function renderPin() {
    const { el } = U;
    const p = L.pinned; const box = $('#lbPin');
    const hiddenId = ls.get('vp.pinHidden', '');
    const show = p && (p.id !== hiddenId || L.admin);
    box.classList.toggle('hidden', !show);
    if (!show) return;
    box.replaceChildren(el('span', { class: 'ic', text: '📌' }), el('div', { class: 'grow' }, el('b', { text: p.text }), el('small', { text: `${p.by} · ${new Date(p.ts).toLocaleDateString('vi-VN')}` })),
      L.admin ? el('button', { class: 'btn mini', onclick: () => window.vp.lobby.adminDo({ action: 'unpin' }).catch((e) => U.toast(U.cleanErr(e), true)) }, 'Bỏ ghim')
        : el('button', { class: 'lc-ic', title: 'Ẩn thông báo này', 'aria-label': 'Ẩn thông báo', onclick: () => { ls.set('vp.pinHidden', p.id); renderPin(); } }, '✕'));
  }

  function announce(d) {
    const { el } = U;
    document.querySelectorAll('.lb-announce').forEach((n) => n.remove());
    const n = el('div', { class: 'lb-announce', role: 'alert' }, el('span', { class: 'ic', text: '📢' }), el('div', { class: 'grow' }, el('b', { text: 'Thông báo từ admin' }), el('div', { text: d.text }), el('small', { text: d.by })),
      el('button', { class: 'lc-ic', 'aria-label': 'Đóng', onclick: () => n.remove() }, '✕'));
    document.body.append(n);
    U.sfx && U.sfx('pop');
    setTimeout(() => n.classList.add('out'), 12000); setTimeout(() => n.remove(), 12600);
  }

  function quickSay(text, toId) { if (L.me && L.status.state === 'online') window.vp.lobby.send(toId ? { to: toId, text } : { room: 'all', text }).catch(() => {}); }

  function sendEmote(e) {
    if (!L.me) return;
    if (L.scene) L.scene.emote(L.me.id, e);
    U.sfx && U.sfx(e === '🕺' ? 'dance' : 'pop');
    if (L.status.state === 'online') window.vp.lobby.presence({ emote: e });
  }

  // ================= tương tác: mèo, nhân vật, nhảy =================
  async function interact(to, kind) {
    if (L.status.state !== 'online') { U.toast('Chưa vào được Sảnh', true); return; }
    try {
      const r = await window.vp.lobby.interact({ to, kind, style: kind === 'dance' ? L.myDance || L.lastDance || 'groove' : undefined });
      const m = L.members.get(to);
      if (r.asked) toast(`💌 Đã mời ${m ? m.name : ''} ${KIND_TEXT[kind]} – chờ trả lời…`);
      U.sfx && U.sfx('pop');
    } catch (e) { U.toast(U.cleanErr(e), true); }
  }

  function openCat(x, y) {
    const { el } = U;
    document.querySelectorAll('.lb-pop').forEach((n) => n.remove());
    const shared = L.features.has('cat') && L.status.state === 'online';
    const go = (action) => {
      pop.remove();
      if (!shared) { if (L.scene) { L.scene.cat.pet(); L.scene.fx(null, '💕'); } return; }
      window.vp.lobby.cat({ action }).then(() => U.sfx && U.sfx('pop')).catch((e) => U.toast(U.cleanErr(e), true));
    };
    const c = L.catState;
    const cat = L.scene && L.scene.cat;
    const busy = c && c.act && c.byName && cat && (cat.followId || ['happy', 'eat', 'play', 'walk'].includes(cat.mode)) && Date.now() + (L.skew || 0) < c.until + 15000;
    const pop = el('div', { class: 'lb-pop interact cat' },
      el('div', { class: 'ihead' }, el('span', { class: 'cat-ic', text: '🐱' }), el('div', {}, el('b', { text: 'Mít – mèo của quán' }), el('small', { text: busy ? `Đang chơi với ${c.byName}` : 'Mọi người đều thấy Mít làm gì' }))),
      el('div', { class: 'igrid' },
        el('button', { onclick: () => go('pet') }, el('span', { text: '🤚' }), 'Vuốt ve'),
        el('button', { onclick: () => go('feed') }, el('span', { text: '🍖' }), 'Cho ăn'),
        el('button', { onclick: () => go('play') }, el('span', { text: '🧶' }), 'Chơi len'),
        el('button', { onclick: () => go('call') }, el('span', { text: '🐾' }), 'Gọi Mít theo')));
    document.body.append(pop);
    pop.style.left = Math.max(10, Math.min(window.innerWidth - pop.offsetWidth - 10, x + 12)) + 'px';
    pop.style.top = Math.max(66, Math.min(window.innerHeight - pop.offsetHeight - 10, y - pop.offsetHeight / 2)) + 'px';
    const off = (e) => { if (!pop.contains(e.target)) { pop.remove(); document.removeEventListener('mousedown', off, true); } };
    setTimeout(() => document.addEventListener('mousedown', off, true), 0);
  }

  // bảng chọn điệu nhảy: bấm 🕺, hoặc tự hiện khi đứng trên sàn nhảy
  function toggleDancePick(force) { L.danceOpen = typeof force === 'boolean' ? force : !L.danceOpen; renderDancePick(); }
  function renderDancePick() {
    const { el } = U;
    const box = $('#lbDancePick'); if (!box) return;
    const show = L.danceOpen || (L.onFloor && !L.myDance && !L.floorDismissed);
    box.classList.toggle('hidden', !show);
    $('#lbDanceBtn').classList.toggle('on', !!L.myDance);
    if (!show) return;
    box.replaceChildren(
      el('small', { text: L.onFloor && !L.danceOpen ? '🪩 Bạn đang ở sàn nhảy – chọn một điệu:' : 'Chọn điệu nhảy – cả quán nhảy cùng nhịp' }),
      ...DANCES.map(([k, ic, t]) => el('button', { class: 'dz' + (L.myDance === k ? ' on' : ''), onclick: () => { L.lastDance = k; L.danceOpen = false; if (L.scene) L.scene.danceSelf(k); U.sfx && U.sfx('dance'); } }, el('span', { text: ic }), t)),
      L.myDance ? el('button', { class: 'dz stop', onclick: () => { L.danceOpen = false; if (L.scene) L.scene.danceSelf(null); } }, '⏹ Dừng') : '',
      el('button', { class: 'lc-ic', title: 'Đóng', 'aria-label': 'Đóng', onclick: () => { L.danceOpen = false; if (L.onFloor) L.floorDismissed = true; renderDancePick(); } }, '✕'));
  }

  // lời mời ôm / nhảy từ người khác
  function showInvite(d) {
    const { el } = U;
    const box = $('#lbInvite');
    clearTimeout(L.inviteT);
    const answer = (accept) => { box.classList.add('hidden'); window.vp.lobby.interact({ id: d.id, accept }).catch((e) => U.toast(U.cleanErr(e), true)); };
    const style = d.kind === 'dance' && DANCES.find((x) => x[0] === d.style);
    box.replaceChildren(el('span', { class: 'ic', text: d.kind === 'dance' ? '💃' : '🤗' }),
      el('div', { class: 'grow' }, el('b', { text: `${d.fromName} mời bạn ${KIND_TEXT[d.kind]}` }), style ? el('small', { text: `Điệu: ${style[1]} ${style[2]}` }) : ''),
      el('button', { class: 'btn mini', onclick: () => answer(false) }, 'Để sau'),
      el('button', { class: 'btn mini primary', onclick: () => answer(true) }, d.kind === 'dance' ? '💃 Nhảy!' : '🤗 Đồng ý'),
      el('i', { class: 'bar', style: `animation-duration:${Math.max(3, (d.exp - Date.now()) / 1000)}s` }));
    box.classList.remove('hidden');
    U.sfx && U.sfx('pop');
    L.inviteT = setTimeout(() => box.classList.add('hidden'), Math.max(3000, d.exp - Date.now()));
  }

  function onInteract(d) {
    const me = L.me && L.me.id;
    if (d.state === 'ask') { showInvite(d); return; }
    if (d.state === 'declined') { toast(`${d.byName} để dịp khác nhé 😅`); return; }
    if (d.state !== 'go') return;
    if (L.scene) L.scene.interact(d);
    for (const id of [d.a, d.b]) { const m = L.members.get(id); if (m && d.kind === 'dance') m.dance = d.style; }
    if (d.b === me) toast(`${{ highfive: '✋', cheers: '🥂', coffee: '☕', hug: '🤗', dance: '💃' }[d.kind]} ${d.aName} ${KIND_TEXT[d.kind]} với bạn`);
    if (d.kind === 'dance' && (d.a === me || d.b === me)) { L.myDance = d.style; renderDancePick(); }
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
    if (C.open && window.VPNpc) window.VPNpc.close(); // 1 bảng nổi mỗi lúc cho khỏi che màn chiếu
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

  function applyPersonal(d) {
    if (d.perms) L.perms = d.perms;
    if ('admin' in d) L.admin = !!d.admin;
    L.mutedUntil = d.mutedUntil || null;
    if ('pinned' in d) { L.pinned = d.pinned; renderPin(); }
    renderComposer();
  }

  function onLobby(ev, d) {
    if (ev === 'status') return setStatus(d);
    if (ev === 'hello') {
      L.me = { ...d.me }; L.members.clear();
      L.features = new Set(d.features || []);
      applyPersonal(d);
      if (L.admin && window.VPAdmin) window.VPAdmin.enable(true);
      upsert({ ...d.me });
      d.members.forEach(upsert);
      L.rooms = (d.rooms || []).filter((r) => r.kind !== 'team'); L.loaded.clear(); L.msgs.clear(); // chỉ chat cả công ty + nhắn riêng
      if (d.cinema) onCinema(d.cinema);
      if (d.cinema && d.cinema.now) { L.skew = d.cinema.now - Date.now(); if (L.scene) L.scene.setSkew(L.skew); }
      if (d.cat) { L.catState = d.cat; if (L.scene) L.scene.setCat(d.cat); }
      if ('npc' in d) { L.npc = d.npc; if (window.VPNpc) window.VPNpc.setInfo(d.npc); }
      if (window.VPNpc && L.shown) window.VPNpc.maybeTour(d.me && d.me.name);
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
    if (ev === 'personal') { applyPersonal(d); renderRooms(); return; }
    if (ev === 'message-delete') { removeMsg(d.room, d.id); return; }
    if (ev === 'announce') { if (d.popup) announce(d); return; }
    if (ev === 'npc') { L.npc = d.npc; if (window.VPNpc) window.VPNpc.setInfo(d.npc); return; }
    if (ev === 'npc-guides') { if (window.VPNpc) window.VPNpc.reloadGuides(); return; }
    if (ev === 'cat') { L.catState = d; if (L.scene) L.scene.setCat(d); return; }
    if (ev === 'dance') { const m = L.members.get(d.id); if (m) m.dance = d.style || null; if (L.scene) L.scene.setDance(d.id, d.style || null); return; }
    if (ev === 'interact') { onInteract(d); return; }
    if (ev === 'kicked') { toast('🚪 Admin đã mời bạn ra khỏi Sảnh một lúc'); return; }
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
      if (L.scene && !d.room.startsWith('dm:') && d.text) L.scene.say(d.from, d.text);
      const tagged = !mine && L.me && (d.mentions || []).some((id) => id === L.me.id || id === 'all');
      if (list.length > 300) list.splice(0, list.length - 300);
      if (L.shown && d.room === L.room) { if (L.loaded.has(d.room)) appendMsg(d); else renderMsgs(); if (tagged) U.sfx && U.sfx('pop'); }
      else if (!mine) { L.unread.set(d.room, (L.unread.get(d.room) || 0) + 1); if (tagged) L.tagged.add(d.room); if (d.room.startsWith('dm:') || L.shown || tagged) U.sfx && U.sfx('pop'); }
      renderRooms(); renderPeople();
    }
  }

  function onEvent(e) {
    if (e.type === 'lobby') return onLobby(e.ev, e.data);
    if (e.type === 'lobby-open') { window.VPChat.setView('lobby'); openRoom(e.room).then(() => { if (e.msg) setTimeout(() => jumpTo(e.msg), 80); }); return; }
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
      if (window.VPNpc && L.status.state === 'online') window.VPNpc.maybeTour(L.me && L.me.name);
      setTimeout(() => L.scene && L.scene.canvas.focus(), 60);
    }
  }

  async function init(api) {
    U = api;
    build();
    if (window.VPNpc) window.VPNpc.init(api);
    window.vp.onEvent(onEvent);
    setStatus(await window.vp.lobby.status());
    renderRooms(); renderPeople(); renderMe();
    if (ls.get('vp.mainView', 'office') === 'lobby') window.VPChat.setView('lobby');
  }

  function setLight(on) { if (L.scene) L.scene.setLight(!!on); }

  window.VPLobby = { init, visible, openDm, toggleCinema, openRoom, setLight, _state: L };
})();
