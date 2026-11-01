/* Tab 🛡️ Quản trị – chỉ hiện với admin (Gateway báo trong lời chào Sảnh). Mọi thao tác đều do Gateway kiểm tra quyền lại;
   tab này chỉ là giao diện. Phần quản lý key / hạn mức AI nằm ở LTN Admin Console trên web (nút ở góc trên). */
(function () {
  let U;
  const A = { on: false, shown: false, data: null, sec: 'overview', timer: null, busy: false, q: '', dlF: 'all', dlQ: '', dlSure: '' };
  const DL_URL = 'https://ai.simi.vn/install/vanphong';
  const $ = (s, r = document) => r.querySelector(s);
  const CONSOLE_URL = 'https://admin-simi.simi.vn';
  // [mã, biểu tượng SVG, tên, mô tả ngắn dưới tiêu đề]
  const SECTIONS = [
    ['overview', 'chart', 'Tổng quan', 'Ai đang online, máy nào đã lên bản mới, hoạt động hôm nay'],
    ['people', 'users', 'Người dùng', 'Khoá chat, mời ra khỏi Sảnh'],
    ['perms', 'lock', 'Phân quyền', 'Bật / tắt tính năng theo mặc định, theo team, theo từng người'],
    ['cinema', 'film', 'Màn chiếu', 'Chuyển bài, xoá hàng chờ, khoá màn chiếu'],
    ['announce', 'megaphone', 'Thông báo', 'Gửi thông báo nổi + ghim trên đầu Sảnh'],
    ['npc', 'bot', 'Trợ lý (NPC)', 'Tài khoản trả lời, ghi chú công ty, hướng dẫn từng bước'],
    ['download', 'download', 'Trang tải app', 'Email nào được tải app ở ai.simi.vn/install/vanphong (trang ai cũng xem được)'],
    ['audit', 'scroll', 'Nhật ký', 'Mọi thao tác của admin'],
  ];
  const hm = (t) => new Date(t).toTimeString().slice(0, 5);
  const dt = (t) => new Date(t).toLocaleString('vi-VN', { hour: '2-digit', minute: '2-digit', day: '2-digit', month: '2-digit' });
  const cmp = (a, b) => { const x = String(a || '0').split('.').map(Number); const y = String(b || '0').split('.').map(Number); for (let i = 0; i < 3; i++) { if ((x[i] || 0) !== (y[i] || 0)) return (x[i] || 0) - (y[i] || 0); } return 0; };
  const OS = { win32: 'Windows', darwin: 'macOS', linux: 'Ubuntu/Linux' };
  const osName = (o) => (o ? (OS[o.split('-')[0]] || o) : 'Không rõ');

  function build() {
    const { el } = U;
    const view = el('main', { class: 'adminview hidden', id: 'adminView' },
      el('nav', { class: 'ad-nav', id: 'adNav' }),
      el('section', { class: 'ad-main' },
        el('header', { class: 'ad-head' },
          el('div', { class: 'ad-titles' }, el('h2', { id: 'adTitle' }), el('small', { id: 'adSub' })), el('span', { class: 'grow' }),
          el('small', { class: 'ad-at', id: 'adAt' }),
          el('button', { class: 'btn small', onclick: () => load(true) }, U.icon('refresh'), 'Làm mới'),
          el('button', { class: 'btn small', title: 'Quản lý nhân viên, API key, hạn mức AI, bộ nhớ (trang web)', onclick: () => window.vp.openUrl(CONSOLE_URL) }, U.icon('key'), 'Admin Console', U.icon('link', 'sm'))),
        el('div', { class: 'ad-body', id: 'adBody' })));
    ($('#lobbyView') || $('#chatView')).after(view);
  }

  function enable(on) {
    if (A.on === on) return;
    A.on = on;
    const tabs = $('.viewtabs');
    let b = $('.viewtabs button[data-v="admin"]');
    if (on && !b) {
      b = U.el('button', { 'data-v': 'admin', title: 'Quản trị Sảnh (chỉ admin thấy)', onclick: () => window.VPChat.setView('admin') }, '🛡️ ', U.el('span', { text: 'Quản trị' }));
      tabs.append(b);
      if (U.store.get('vp.mainView', 'office') === 'admin') window.VPChat.setView('admin');
    } else if (!on && b) { b.remove(); if (A.shown) window.VPChat.setView('lobby'); }
  }

  function visible(on) {
    A.shown = on;
    $('#adminView').classList.toggle('hidden', !on);
    clearInterval(A.timer);
    if (on) { renderNav(); load(); A.timer = setInterval(() => { if (!A.busy && document.visibilityState === 'visible') load(); }, 15000); }
  }

  async function load(force) {
    if (A.loading && !force) return;
    A.loading = true;
    try { A.data = await window.vp.lobby.admin(); $('#adAt').textContent = 'Cập nhật ' + hm(Date.now()); render(); }
    catch (e) { $('#adBody').replaceChildren(U.el('div', { class: 'ad-card bad' }, U.el('b', { text: 'Không tải được dữ liệu quản trị' }), U.el('p', { text: U.cleanErr(e) }))); }
    A.loading = false;
  }

  async function act(payload, ok) {
    A.busy = true;
    try { await window.vp.lobby.adminDo(payload); if (ok) U.toast(ok); await load(true); }
    catch (e) { U.toast(U.cleanErr(e), true); }
    A.busy = false;
  }

  function renderNav() {
    const { el } = U;
    $('#adNav').replaceChildren(el('div', { class: 'ad-brand' }, el('span', { class: 'ad-logo' }, U.icon('shield')), el('div', {}, el('b', { text: 'Quản trị' }), el('small', { text: 'Sảnh Văn Phòng AI' }))),
      el('div', { class: 'ad-navlist' }, ...SECTIONS.map(([k, ic, name]) => el('button', { class: 'ad-nb' + (A.sec === k ? ' on' : ''), 'aria-current': A.sec === k ? 'page' : undefined, onclick: () => { A.sec = k; A.editing = false; A.draft = null; renderNav(); render(); } }, U.icon(ic), el('span', { text: name })))),
      el('div', { class: 'ad-navfoot' }, el('small', { text: 'Chỉ admin thấy tab này. Mọi thao tác đều được Gateway kiểm tra lại và ghi vào Nhật ký.' })));
  }

  function render() {
    if (!A.data) return;
    const sec = SECTIONS.find((x) => x[0] === A.sec) || SECTIONS[0];
    $('#adTitle').textContent = sec[2]; $('#adSub').textContent = sec[3];
    const fn = { overview, people, perms, cinema, announce, npc, download, audit }[sec[0]];
    if (sec[0] === 'npc' && A.editing) return; // đang sửa hướng dẫn: không tự làm mới kẻo mất chữ
    // giữ chữ đang gõ khi tự làm mới
    const keep = [...document.querySelectorAll('#adBody [data-keep]')].map((n) => [n.dataset.keep, n.value, n === document.activeElement]);
    $('#adBody').replaceChildren(...fn(A.data));
    for (const [k, v, f] of keep) { const n = $(`#adBody [data-keep="${k}"]`); if (n) { n.value = v; if (f) n.focus(); } }
  }

  // ---------- tổng quan ----------
  const card = (title, sub, ...kids) => U.el('div', { class: 'ad-card' }, U.el('div', { class: 'ad-ch' }, U.el('h3', { text: title }), sub ? U.el('small', { text: sub }) : ''), ...kids);
  function overview(d) {
    const { el } = U;
    const devs = d.online.flatMap((o) => o.devices);
    const latest = d.latest;
    const upd = latest ? devs.filter((x) => x.version && cmp(x.version, latest) >= 0).length : 0;
    const stat = (tone, ic, n, label, sub) => el('div', { class: 'ad-stat ' + tone }, el('span', { class: 'ad-sic' }, U.icon(ic)),
      el('div', { class: 'ad-sv' }, el('b', { text: String(n) }), el('span', { text: label }), sub ? el('em', { text: sub }) : ''));
    const versions = Object.entries(d.versions).sort((a, b) => cmp(b[0], a[0]));
    const max = Math.max(1, ...versions.map((v) => v[1]));
    const pct = latest && devs.length ? Math.round(upd / devs.length * 100) : null;
    const games = d.games || [];
    const c = d.cinema || {};
    const nameOf = (id) => (d.people.find((p) => p.id === id) || { name: id }).name;
    return [
      el('div', { class: 'ad-stats' },
        stat('t-green', 'pulse', d.online.length, 'người đang online', `${devs.length} máy đang mở app`),
        stat('t-blue', 'up', latest ? `${upd}/${devs.length}` : '–', latest ? `máy đã lên bản ${latest}` : 'chưa có bản phát hành', pct === null ? '' : `${pct}% đã cập nhật`),
        stat('t-violet', 'message', d.today.messages || 0, 'tin nhắn hôm nay', 'phòng Cả công ty + nhắn riêng'),
        stat('t-amber', 'image', d.today.images || 0, 'ảnh hôm nay', `${d.files.totalMB}/${d.files.maxMB} MB · giữ ${d.files.retentionDays} ngày`)),
      el('div', { class: 'ad-grid2' },
        card('Phiên bản app trên các máy đang online', 'Máy đang mở app tự tải bản mới và hiện nút "Cập nhật ngay"',
          versions.length ? el('div', { class: 'ad-bars' }, versions.map(([v, n]) => el('div', { class: 'ad-bar' + (v === '?' || (latest && cmp(v, latest) < 0) ? ' old' : '') },
            el('span', { class: 'v' }, el('i', { class: 'dot' }), v === '?' ? 'Bản cũ (< 0.9.13)' : v, latest && v === latest ? el('em', { class: 'tag', text: 'mới nhất' }) : ''),
            el('div', { class: 'track' }, el('i', { style: `width:${n / max * 100}%` })), el('b', { text: `${n} máy` }))))
            : el('p', { class: 'ad-empty', text: 'Chưa có máy nào online.' })),
        card('Đang diễn ra trong Sảnh', '',
          el('ul', { class: 'ad-live' },
            el('li', {}, el('span', { class: 'li-ic' }, U.icon('film')), el('div', {}, el('b', { text: c.current ? c.current.title : 'Màn chiếu đang trống' }), el('small', { text: c.current ? `${c.current.byName} chọn · ${(c.queue || []).length} video chờ` : d.cinemaLocked ? 'Màn chiếu đang khoá' : 'Ai cũng thêm được video' }))),
            el('li', {}, el('span', { class: 'li-ic' }, U.icon('game')), el('div', {}, el('b', { text: games.length ? `${games.length} bàn bida đang chơi` : 'Chưa ai chơi bida' }), el('small', { text: games.length ? games.map((g) => `${nameOf(g.players[0])} – ${nameOf(g.players[1])}`).join(' · ') : 'Khu Game có 2 bàn' }))),
            el('li', {}, el('span', { class: 'li-ic' }, U.icon('bot')), el('div', {}, el('b', { text: d.npc ? 'Trợ lý đang trả lời câu hỏi' : 'Trợ lý chỉ có hướng dẫn' }), el('small', { text: d.npc ? `bằng tài khoản ${nameOf(d.npc.id)}` : 'Chọn tài khoản ở mục Trợ lý (NPC)' }))),
            el('li', {}, el('span', { class: 'li-ic' }, U.icon('megaphone')), el('div', {}, el('b', { text: d.pinned ? 'Đang ghim thông báo' : 'Không có thông báo ghim' }), el('small', { text: d.pinned ? d.pinned.text : 'Gửi ở mục Thông báo' })))))),
      onlineTable(d),
    ];
  }

  function onlineTable(d) {
    const { el } = U;
    const look = (o) => (window.avatarToLook ? window.avatarToLook({ id: o.id, name: o.name, avatar: o.avatar }) : { id: o.id });
    return card(`Đang online (${d.online.length})`, 'Khoá chat tạm thời hoặc mời ra khỏi Sảnh 10 phút',
      d.online.length ? el('div', { class: 'ad-tablewrap' }, el('table', { class: 'ad-table' },
        el('thead', {}, el('tr', {}, ['Người', 'Team', 'Phiên bản', 'Máy', ''].map((h) => el('th', { text: h })))),
        el('tbody', {}, d.online.sort((a, b) => a.name.localeCompare(b.name, 'vi')).map((o) => el('tr', {},
          el('td', {}, el('div', { class: 'ad-who' }, U.avatar(look(o), 28), el('b', { text: o.name }), o.admin ? el('span', { class: 'ad-pill admin', text: 'Admin' }) : '', o.hidden ? el('span', { class: 'ad-pill', text: 'đang ẩn' }) : '', o.mutedUntil ? el('span', { class: 'ad-pill warn', text: `khoá chat tới ${hm(o.mutedUntil)}` }) : '')),
          el('td', {}, el('span', { class: 'ad-team', text: o.teamName || o.teamId })),
          el('td', {}, ...o.devices.map((x) => el('span', { class: 'ad-ver' + (d.latest && x.version && cmp(x.version, d.latest) < 0 ? ' old' : '') + (!x.version ? ' old' : ''), text: x.version || 'cũ' }))),
          el('td', { class: 'ad-os' }, ...o.devices.map((x) => el('span', {}, U.icon('monitor', 'sm'), osName(x.os)))),
          el('td', { class: 'acts' }, o.admin ? '' : personActs(o)))))))
        : el('p', { class: 'ad-empty', text: 'Chưa có ai online.' }));
  }

  function personActs(o) {
    const { el } = U;
    const sel = el('select', { class: 'cs small', title: 'Tạm khoá chat', 'aria-label': `Khoá chat ${o.name}`, onchange: (e) => { const m = Number(e.target.value); e.target.value = ''; if (m >= 0) act({ action: 'mute', id: o.id, minutes: m }, m ? `🔇 Đã khoá chat ${o.name}` : `🔈 Đã mở chat cho ${o.name}`); } },
      el('option', { value: '', text: o.mutedUntil ? `Khoá tới ${hm(o.mutedUntil)}` : 'Khoá chat…' }),
      ...[[15, '15 phút'], [60, '1 giờ'], [240, '4 giờ'], [1440, '1 ngày']].map(([v, t]) => el('option', { value: String(v), text: t })),
      o.mutedUntil ? el('option', { value: '0', text: 'Mở khoá chat' }) : '');
    return [sel, el('button', { class: 'btn mini', title: 'Ngắt khỏi Sảnh 10 phút', onclick: () => act({ action: 'kick', id: o.id, minutes: 10 }, `🚪 Đã mời ${o.name} ra khỏi Sảnh 10 phút`) }, U.icon('door', 'sm'), 'Mời ra')];
  }

  // ---------- người dùng: khoá chat / mời ra đang có hiệu lực ----------
  function people(d) {
    const { el } = U;
    const rows = (list, kind) => list.length ? el('table', { class: 'ad-table' }, el('tbody', {}, list.map((x) => el('tr', {},
      el('td', {}, el('b', { text: x.name })), el('td', { text: `tới ${dt(x.until)}` }),
      el('td', { class: 'acts' }, el('button', { class: 'btn mini', onclick: () => act(kind === 'mute' ? { action: 'mute', id: x.id, minutes: 0 } : { action: 'unkick', id: x.id }, 'Đã gỡ') }, 'Gỡ'))))))
      : el('p', { class: 'dim', text: 'Không có ai.' });
    return [
      el('div', { class: 'ad-card' }, el('h3', { text: '🔇 Đang bị khoá chat' }), rows(d.mutes, 'mute')),
      el('div', { class: 'ad-card' }, el('h3', { text: '🚪 Đang bị mời ra khỏi Sảnh' }), rows(d.kicks, 'kick')),
      onlineTable(d),
      el('div', { class: 'ad-card tip' }, el('b', { text: 'Xoá tin nhắn / ảnh' }), el('p', { text: 'Trong tab Sảnh, rê chuột vào tin nhắn ở phòng "Cả công ty" → bấm 🗑 hai lần. Admin không đọc và không xoá được tin nhắn riêng giữa hai người khác.' })),
    ];
  }

  // ---------- phân quyền ----------
  function perms(d) {
    const { el } = U;
    const keys = Object.keys(d.permsDef);
    const def = (k) => (typeof d.perms.default[k] === 'boolean' ? d.perms.default[k] : d.permsDef[k].def);
    const tri = (scope, key, k, cur) => el('select', { class: 'cs small tri ' + (cur === true ? 'on' : cur === false ? 'off' : ''), onchange: (e) => act({ action: 'perms', scope, key, perms: { [k]: e.target.value === '' ? null : e.target.value === '1' } }, '✅ Đã lưu quyền') },
      el('option', { value: '', text: 'Theo mặc định', selected: cur === undefined }), el('option', { value: '1', text: '✅ Bật', selected: cur === true }), el('option', { value: '0', text: '⛔ Tắt', selected: cur === false }));
    const head = el('thead', {}, el('tr', {}, el('th', { text: '' }), ...keys.map((k) => el('th', { text: d.permsDef[k].label }))));
    const defRow = el('tr', { class: 'def' }, el('td', {}, el('b', { text: 'Mặc định (mọi người)' })),
      ...keys.map((k) => el('td', {}, el('label', { class: 'ad-sw' }, el('input', { type: 'checkbox', checked: def(k), onchange: (e) => act({ action: 'perms', scope: 'default', perms: { [k]: e.target.checked } }, '✅ Đã lưu quyền') }), el('span')))));
    const teamRows = d.teams.map((t) => el('tr', {}, el('td', { text: `Team ${t.name}` }), ...keys.map((k) => el('td', {}, tri('team', t.id, k, (d.perms.teams[t.id] || {})[k])))));
    const users = Object.keys(d.perms.users);
    const name = (id) => (d.people.find((p) => p.id === id) || { name: id }).name;
    const userRows = users.map((id) => el('tr', {}, el('td', {}, el('b', { text: name(id) })), ...keys.map((k) => el('td', {}, tri('user', id, k, d.perms.users[id][k])))));
    const pick = el('select', { class: 'cs', onchange: (e) => { if (e.target.value) act({ action: 'perms', scope: 'user', key: e.target.value, perms: { [keys[0]]: def(keys[0]) } }, 'Đã thêm – chỉnh quyền riêng ở bảng trên'); } },
      el('option', { value: '', text: '+ Đặt quyền riêng cho một người…' }), ...d.people.filter((p) => !users.includes(p.id) && !p.shared).map((p) => el('option', { value: p.id, text: `${p.name} (${p.teamName || p.teamId})` })));
    return [
      el('div', { class: 'ad-card' }, el('h3', { text: 'Quyền trong Sảnh' }),
        el('p', { class: 'dim small', text: 'Thứ tự áp dụng: Mặc định → theo Team → riêng từng người (cấp sau ghi đè cấp trước). Admin luôn có mọi quyền. Người bị tắt "Nhắn riêng" vẫn nhắn được cho admin.' }),
        el('table', { class: 'ad-table perms' }, head, el('tbody', {}, defRow, ...teamRows, ...userRows)),
        el('div', { class: 'ad-row' }, pick)),
    ];
  }

  // ---------- màn chiếu ----------
  function cinema(d) {
    const { el } = U;
    const c = d.cinema || {};
    return [el('div', { class: 'ad-card' }, el('h3', { text: 'Màn chiếu SIMI' }),
      el('p', {}, c.current ? `▶ Đang chiếu: ${c.current.title} (${c.current.byName} chọn)` : 'Màn hình đang trống.'),
      el('p', { class: 'dim', text: `Hàng chờ: ${(c.queue || []).length} video` }),
      el('div', { class: 'ad-row' },
        el('button', { class: 'btn', disabled: !c.current, onclick: () => act({ action: 'cinema', op: 'skip' }, '⏭ Đã chuyển bài') }, '⏭ Chuyển bài ngay'),
        el('button', { class: 'btn', disabled: !(c.queue || []).length, onclick: () => act({ action: 'cinema', op: 'clear' }, '🧹 Đã xoá hàng chờ') }, '🧹 Xoá hàng chờ'),
        d.cinemaLocked ? el('button', { class: 'btn primary', onclick: () => act({ action: 'cinema', op: 'unlock' }, '🔓 Đã mở màn chiếu') }, '🔓 Mở khoá màn chiếu')
          : el('button', { class: 'btn', onclick: () => act({ action: 'cinema', op: 'lock' }, '🔒 Đã khoá màn chiếu') }, '🔒 Khoá màn chiếu')),
      el('p', { class: 'dim small', text: 'Khoá màn chiếu: không ai thêm được video mới (admin vẫn thêm được). Muốn cấm riêng một người / team thì dùng mục Phân quyền.' }))];
  }

  // ---------- thông báo ----------
  function announce(d) {
    const { el } = U;
    const ta = el('textarea', { class: 'ad-ta', 'data-keep': 'ann', rows: 3, maxlength: 300, placeholder: 'Ví dụ: 15h chiều nay họp toàn công ty ở phòng lớn 📣' });
    const pin = el('input', { type: 'checkbox', id: 'adPin', checked: true });
    const pop = el('input', { type: 'checkbox', id: 'adPop', checked: true });
    return [
      d.pinned ? el('div', { class: 'ad-card' }, el('h3', { text: '📌 Đang ghim' }), el('p', {}, el('b', { text: d.pinned.text })), el('small', { class: 'dim', text: `${d.pinned.by} · ${dt(d.pinned.ts)}` }),
        el('div', { class: 'ad-row' }, el('button', { class: 'btn', onclick: () => act({ action: 'unpin' }, 'Đã bỏ ghim') }, 'Bỏ ghim'))) : '',
      el('div', { class: 'ad-card' }, el('h3', { text: 'Gửi thông báo toàn công ty' }), ta,
        el('div', { class: 'ad-row' }, el('label', { class: 'ad-chk' }, pin, ' Ghim trên đầu Sảnh'), el('label', { class: 'ad-chk' }, pop, ' Hiện thông báo nổi trên mọi máy đang mở app'), el('span', { class: 'grow' }),
          el('button', { class: 'btn primary', onclick: () => { const t = ta.value.trim(); if (!t) return; act({ action: 'announce', text: t, pin: pin.checked, popup: pop.checked }, '📢 Đã gửi thông báo').then(() => { const n = $('#adBody [data-keep="ann"]'); if (n) n.value = ''; }); } }, '📢 Gửi'))),
    ];
  }

  // ---------- NPC Trợ lý SIMI ----------
  function npc(d) {
    const { el } = U;
    const cands = d.npcCandidates || [];
    const cur = d.npc && cands.find((c) => c.id === d.npc.id);
    const sel = el('select', { class: 'ad-npcsel' }, el('option', { value: '', text: '— Chưa chọn (chỉ có hướng dẫn, không hỏi tự do) —' }),
      ...cands.map((c) => el('option', { value: c.id, text: `${c.chatbot ? '🤖 ' : ''}${c.name} (${c.teamId}${c.role ? ' · ' + c.role : ''})${c.ready ? ' – ✅ sẵn sàng' : ' – ⚠️ chưa có key'}`, selected: d.npc && d.npc.id === c.id })));
    const notes = el('textarea', { class: 'ad-ta', 'data-keep': 'npcNotes', rows: 4, maxlength: 4000, placeholder: 'Ví dụ: Quên mật khẩu email → nhắn anh LTN (IT). Nghỉ phép: gửi form trên SharePoint mục Nhân sự…' });
    notes.value = d.npcNotes || '';
    const status = !d.npc ? el('p', { class: 'dim', text: 'Chưa chọn tài khoản: NPC vẫn hướng dẫn từng bước và mẹo AI, nhưng chưa trả lời câu hỏi tự do.' })
      : cur && cur.ready ? el('p', { class: 'ad-ok', text: `✅ ${cur.name} đang làm Trợ lý. Câu hỏi tính vào hạn mức của tài khoản này (người hỏi không tốn lượt).` })
        : el('div', { class: 'ad-warn' }, el('b', { text: '⚠️ Gateway chưa có API key của tài khoản này' }),
          el('p', { text: 'Gateway chỉ lưu mã băm của key, nên cần thêm key thật vào file .env trên máy chủ rồi khởi động lại Gateway:' }),
          el('code', { text: `${d.npcKeysHint || 'LOBBY_NPC_KEYS'}=<API key của tài khoản ${cur ? cur.name : ''}>` }),
          el('p', { class: 'dim small', text: 'Key chỉ nằm trong .env của máy chủ, không gửi qua app. Gateway tự kiểm tra key có đúng là của tài khoản này không.' }));
    return [
      el('div', { class: 'ad-card' }, el('h3', { text: 'Tài khoản làm Trợ lý' }),
        el('p', { class: 'dim small', text: 'Chọn tài khoản chatbot đã có key (thường là tài khoản dịch vụ, không nhớ hội thoại). NPC đứng ở quầy lễ tân ngay cổng vào Sảnh, mang tên của tài khoản này (luôn mặc đồng phục lễ tân cho dễ nhận ra).' }),
        el('div', { class: 'ad-row' }, sel, el('button', { class: 'btn primary', onclick: () => act({ action: 'npc', id: sel.value || null }, sel.value ? '🤖 Đã đổi tài khoản Trợ lý' : 'Đã tắt hỏi tự do') }, 'Lưu'),
          d.npc ? el('button', { class: 'btn', id: 'adNpcTest', disabled: !!(A.npcTest && A.npcTest.state === 'run'), title: 'Gửi 1 câu hỏi thử để chắc Trợ lý trả lời được (tính 1 lượt hỏi của bạn)', onclick: testNpc }, '🧪 Hỏi thử') : ''),
        status, el('div', { id: 'adNpcTestOut' }, testView())),
      npcLogCard(d),
      el('div', { class: 'ad-card' }, el('h3', { text: 'Ghi chú riêng của công ty cho Trợ lý' }),
        el('p', { class: 'dim small', text: 'AI đọc phần này mỗi khi trả lời (quy trình nội bộ, hỏi ai việc gì…). Không ghi mật khẩu / thông tin mật.' }),
        notes, el('div', { class: 'ad-row' }, el('span', { class: 'grow' }), el('button', { class: 'btn primary', onclick: () => act({ action: 'npc-guides', notes: notes.value }, '💾 Đã lưu ghi chú') }, 'Lưu ghi chú'))),
      guideEditor(d),
    ];
  }

  // gửi thử 1 câu → báo trả lời được không, mất bao lâu, lỗi gì (để admin kiểm tra ngay sau khi cấu hình / cập nhật Gateway)
  async function testNpc() {
    if (A.npcTest && A.npcTest.state === 'run') return;
    A.npcTest = { state: 'run' }; render();
    const t0 = Date.now();
    try {
      const r = await window.vp.lobby.npcAsk({ question: 'Giới thiệu ngắn (2 câu) Văn Phòng AI giúp nhân viên làm gì?', guide: window.VPNpcGuides.guideText(), test: true });
      A.npcTest = { state: 'ok', secs: (Date.now() - t0) / 1000, text: String(r.answer || '').slice(0, 280) };
    } catch (e) {
      const msg = U.cleanErr(e);
      const hint = /hạn mức|Premium|Combo/i.test(msg) ? 'Tài khoản Trợ lý hết lượt hoặc model không thuộc Combo được cấp – kiểm tra hạn mức của tài khoản này trong Admin Console.'
        : /LOBBY_NPC_KEYS|chưa thêm key/i.test(msg) ? 'Thêm API key của tài khoản này vào LOBBY_NPC_KEYS trong .env của Gateway rồi khởi động lại Gateway.'
          : /Cloudflare|502|504|không phản hồi/i.test(msg) ? 'Gateway chưa cập nhật bản mới hoặc đang khởi động lại – trên máy chủ chạy git pull rồi Restart-Service LTNGateway.'
            : 'Xem log Gateway (sự kiện lobby_npc_error) để biết chi tiết.';
      A.npcTest = { state: 'bad', msg, hint };
    }
    await load(true);
  }
  function testView() {
    const { el } = U; const r = A.npcTest;
    if (!r) return '';
    if (r.state === 'run') return el('p', { class: 'ad-test run' }, el('span', { class: 'spin' }), ' Đang hỏi thử Trợ lý…');
    if (r.state === 'ok') return el('div', { class: 'ad-test ok' }, el('b', { text: `✅ Trợ lý trả lời được (${r.secs.toFixed(1)} giây)` }), el('p', { text: r.text }));
    return el('div', { class: 'ad-test bad' }, el('b', { text: '❌ Trợ lý chưa trả lời được' }), el('p', { text: r.msg }), el('small', { text: '👉 ' + r.hint }));
  }

  // câu hỏi gần đây gửi Trợ lý: trả lời được / lỗi / bị chấm 👎 → biết cần bổ sung hướng dẫn, ghi chú gì
  function npcLogCard(d) {
    const { el } = U;
    const log = d.npcLog || [];
    if (!log.length) return el('div', { class: 'ad-card' }, el('div', { class: 'ad-ch' }, el('h3', { text: 'Câu hỏi gần đây gửi Trợ lý' }), el('small', { text: 'Chưa có ai hỏi.' })));
    const bad = log.filter((x) => !x.ok || x.fb === -1).length;
    return el('div', { class: 'ad-card' },
      el('div', { class: 'ad-ch' }, el('h3', { text: `Câu hỏi gần đây gửi Trợ lý (${log.length})` }), el('small', { text: bad ? `${bad} câu bị lỗi hoặc bị chấm 👎 – bổ sung vào Ghi chú hoặc Hướng dẫn bên dưới để Trợ lý trả lời tốt hơn` : 'Mọi câu đều trả lời được' })),
      el('div', { class: 'ad-tablewrap' }, el('table', { class: 'ad-table npclog' },
        el('thead', {}, el('tr', {}, ['Lúc', 'Người hỏi', 'Câu hỏi', 'Kết quả'].map((h) => el('th', { text: h })))),
        el('tbody', {}, log.map((x) => el('tr', { class: !x.ok ? 'err' : x.fb === -1 ? 'down' : '' },
          el('td', { text: dt(x.ts) }), el('td', { text: x.by + (x.test ? ' (hỏi thử)' : '') }),
          el('td', { class: 'wrap' }, el('b', { text: x.q }), x.a ? el('small', { class: 'ans', text: x.a }) : ''),
          el('td', { class: 'res' }, !x.ok ? el('span', { class: 'ad-pill warn', title: x.err, text: '❌ ' + String(x.err || 'Lỗi').slice(0, 70) })
            : el('span', {}, el('span', { class: 'ad-pill' + (x.fb === -1 ? ' warn' : x.fb === 1 ? ' admin' : ''), text: x.fb === -1 ? '👎 Chưa đúng ý' : x.fb === 1 ? '👍 Hữu ích' : '✅ Đã trả lời' }), el('small', { class: 'ms', text: ` ${(x.ms / 1000).toFixed(1)}s` })))))))));
  }

  // sửa hướng dẫn từng bước (bắt đầu từ bản có sẵn trong app); lưu = thay cả bộ hướng dẫn trên mọi máy
  function guideEditor(d) {
    const { el } = U;
    const custom = !!d.npcGuides;
    if (!A.draft) A.draft = JSON.parse(JSON.stringify(d.npcGuides || window.VPNpcGuides.GUIDES));
    const box = el('div', { class: 'ad-guides' });
    const redraw = () => box.replaceChildren(...A.draft.map((g, gi) => el('div', { class: 'ad-guide' },
      el('div', { class: 'ad-row top' },
        el('input', { class: 'ad-in icon', value: g.icon || '📘', maxlength: 4, title: 'Biểu tượng', oninput: (e) => { g.icon = e.target.value; A.editing = true; } }),
        el('input', { class: 'ad-in grow', value: g.title, maxlength: 80, placeholder: 'Tiêu đề hướng dẫn', oninput: (e) => { g.title = e.target.value; A.editing = true; } }),
        el('button', { class: 'btn mini', title: 'Xoá hướng dẫn này', onclick: () => { A.draft.splice(gi, 1); A.editing = true; redraw(); } }, '🗑')),
      ...g.steps.map((st, si) => el('div', { class: 'ad-row step' }, el('span', { class: 'n', text: String(si + 1) }),
        el('textarea', { class: 'ad-in grow', rows: 2, maxlength: 600, oninput: (e) => { st.text = e.target.value; A.editing = true; } }, st.text),
        st.target ? el('small', { class: 'dim', title: `Chỉ tới: ${st.target}`, text: '👉' }) : '',
        el('button', { class: 'lc-ic', title: 'Xoá bước', 'aria-label': 'Xoá bước', onclick: () => { g.steps.splice(si, 1); A.editing = true; redraw(); } }, '✕'))),
      el('button', { class: 'btn mini', onclick: () => { g.steps.push({ text: '' }); A.editing = true; redraw(); } }, '+ Thêm bước'))));
    redraw();
    return el('div', { class: 'ad-card' },
      el('h3', { text: `Hướng dẫn từng bước ${custom ? '(đã sửa)' : '(bản có sẵn trong app)'}` }),
      el('p', { class: 'dim small', text: 'Sửa xong bấm Lưu – mọi máy nhận ngay, không cần phát hành app mới. Bước có 👉 sẽ làm nổi bật đúng nút trên màn hình.' }),
      box,
      el('div', { class: 'ad-row' },
        el('button', { class: 'btn', onclick: () => { A.draft.push({ icon: '📘', title: '', steps: [{ text: '' }] }); A.editing = true; redraw(); } }, '+ Thêm hướng dẫn'),
        el('span', { class: 'grow' }),
        custom ? el('button', { class: 'btn', onclick: () => { A.draft = null; A.editing = false; act({ action: 'npc-guides', guides: null }, '↩ Đã về bản có sẵn'); } }, '↩ Về bản có sẵn') : '',
        el('button', { class: 'btn', onclick: () => { A.draft = null; A.editing = false; render(); } }, 'Huỷ thay đổi'),
        el('button', { class: 'btn primary', onclick: () => {
          const guides = A.draft.map((g) => ({ ...g, steps: g.steps.filter((s) => String(s.text || '').trim()) })).filter((g) => g.title.trim() && g.steps.length);
          A.editing = false; A.draft = null; act({ action: 'npc-guides', guides }, '💾 Đã lưu hướng dẫn – mọi máy nhận ngay');
        } }, '💾 Lưu hướng dẫn')));
  }

  // ---------- trang tải app: ai được vào ----------
  async function dlAdd() {
    const n = $('#adBody [data-keep="dlAdd"]'); const t = n ? n.value.trim() : '';
    if (!t || A.busy) return;
    A.busy = true;
    try {
      const r = await window.vp.lobby.adminDo({ action: 'dl-add', emails: t });
      const parts = [r.added && `Đã thêm ${r.added} email`, r.again && `bật lại ${r.again}`, r.badCount && `bỏ qua ${r.badCount} dòng không phải email${r.bad && r.bad.length ? ': ' + r.bad.slice(0, 3).join(', ') : ''}`].filter(Boolean);
      U.toast(parts.join(' · ') || 'Các email này đã có và đang bật', !r.added && !r.again);
      if (r.added || r.again) { const m = $('#adBody [data-keep="dlAdd"]'); if (m) m.value = ''; }
      await load(true);
    } catch (e) { U.toast(U.cleanErr(e), true); }
    A.busy = false;
  }
  function download(d) {
    const { el } = U;
    const dl = d.download || { gate: true, total: 0, on: 0, people: [] };
    const q = A.dlQ.trim().toLowerCase();
    const list = dl.people.filter((p) => (A.dlF === 'all' || (A.dlF === 'on') === p.on) && (!q || p.email.includes(q)));
    const seg = (k, t) => el('button', { class: 'ad-seg-b' + (A.dlF === k ? ' on' : ''), 'aria-pressed': String(A.dlF === k), onclick: () => { A.dlF = k; render(); } }, t);
    const stat = (tone, ic, n, label) => el('div', { class: 'ad-stat ' + tone }, el('span', { class: 'ad-sic' }, U.icon(ic)), el('div', { class: 'ad-sv' }, el('b', { text: String(n) }), el('span', { text: label })));
    const rows = list.map((p) => el('tr', { class: p.on ? '' : 'off' },
      el('td', { class: 'dl-em' }, el('b', { text: p.email })),
      el('td', { class: 'dim small', text: p.at ? `${p.on ? 'Bật' : 'Tắt'} ${dt(p.at)}${p.by ? ' · ' + p.by : ''}` : '' }),
      el('td', { class: 'acts' },
        el('label', { class: 'ad-sw', title: p.on ? 'Đang được tải – bấm để tắt' : 'Đang bị chặn – bấm để bật' },
          el('input', { type: 'checkbox', checked: p.on, 'aria-label': `${p.on ? 'Tắt' : 'Bật'} ${p.email}`, onchange: (e) => act({ action: 'dl-set', email: p.email, on: e.target.checked }, e.target.checked ? `✅ ${p.email} được tải app` : `⛔ Đã chặn ${p.email}`) }), el('span')),
        el('button', { class: 'btn mini' + (A.dlSure === p.email ? ' danger' : ''), onclick: () => { if (A.dlSure !== p.email) { A.dlSure = p.email; render(); return; } A.dlSure = ''; act({ action: 'dl-remove', email: p.email }, `🗑 Đã xoá ${p.email}`); } }, A.dlSure === p.email ? 'Xoá hẳn?' : 'Xoá'))));
    return [
      dl.gate ? '' : el('div', { class: 'ad-card bad' }, el('b', { text: 'Cổng email đang tắt' }), el('p', { text: 'Gateway đặt VANPHONG_DOWNLOAD_GATE=off: ai có link cũng tải được, không cần email. Bỏ dòng đó trong .env rồi khởi động lại Gateway để bật lại.' })),
      el('div', { class: 'ad-stats' },
        stat('t-green', 'check', dl.on, 'email đang được tải'),
        stat('t-amber', 'lock', dl.total - dl.on, 'email đang bị tắt'),
        el('div', { class: 'ad-stat t-blue dl-open' }, el('span', { class: 'ad-sic' }, U.icon('download')), el('div', { class: 'ad-sv' }, el('b', { text: 'Trang tải' }), el('span', { text: 'ai.simi.vn/install/vanphong' })),
          el('button', { class: 'btn small', onclick: () => window.vp.openUrl(DL_URL) }, 'Mở', U.icon('link', 'sm')))),
      el('div', { class: 'ad-card' }, el('div', { class: 'ad-ch' }, el('h3', { text: 'Thêm email' }), el('small', { text: 'Dán cả danh sách được: mỗi dòng một email (hoặc cách nhau bằng dấu phẩy). Email đã có mà đang tắt sẽ được bật lại.' })),
        el('textarea', { class: 'ad-ta', 'data-keep': 'dlAdd', rows: 3, placeholder: 'ten.ho@simigo.vn' }),
        el('div', { class: 'ad-row' }, el('span', { class: 'grow' }), el('button', { class: 'btn primary', onclick: dlAdd }, U.icon('plus'), 'Thêm vào danh sách'))),
      el('div', { class: 'ad-card' },
        el('div', { class: 'ad-ch' }, el('h3', { text: `Danh sách được tải app (${dl.total})` }), el('small', { text: 'Ai cũng xem được trang tải; bấm tải mới phải nhập email. Tắt là người đó bị chặn tải ngay, kể cả máy đã nhập email trước đó.' })),
        el('div', { class: 'ad-row dl-tools' },
          el('input', { type: 'search', 'data-keep': 'dlQ', placeholder: 'Tìm email…', 'aria-label': 'Tìm email', value: A.dlQ, oninput: (e) => { A.dlQ = e.target.value; render(); } }),
          el('div', { class: 'ad-seg' }, seg('all', 'Tất cả'), seg('on', 'Đang bật'), seg('off', 'Đang tắt'))),
        dl.total ? (list.length ? el('div', { class: 'ad-tablewrap' }, el('table', { class: 'ad-table dl' }, el('tbody', {}, rows)))
          : el('p', { class: 'ad-empty', text: 'Không có email nào khớp.' }))
          : el('p', { class: 'ad-empty', text: 'Danh sách đang trống: chưa ai tải được app. Dán danh sách email ở ô phía trên.' })),
    ];
  }

  // ---------- nhật ký ----------
  const ACT = { 'delete-message': '🗑 Xoá tin', mute: '🔇 Khoá chat', unmute: '🔈 Mở khoá chat', kick: '🚪 Mời ra', unkick: '↩ Cho vào lại', perms: '🔐 Đổi quyền', 'cinema-skip': '⏭ Chuyển bài', 'cinema-clear': '🧹 Xoá hàng chờ', 'cinema-lock': '🔒 Khoá màn chiếu', 'cinema-unlock': '🔓 Mở màn chiếu', announce: '📢 Thông báo', unpin: '📌 Bỏ ghim', npc: '🤖 Đổi tài khoản Trợ lý', 'npc-guides': '📘 Sửa hướng dẫn Trợ lý', 'download-add': '➕ Thêm email trang tải', 'download-on': '✅ Bật email trang tải', 'download-off': '⛔ Tắt email trang tải', 'download-remove': '🗑 Xoá email trang tải' };
  function audit(d) {
    const { el } = U;
    const detail = (a) => [a.targetName, a.email, a.added ? `thêm ${a.added}` : '', a.again ? `bật lại ${a.again}` : '', a.minutes ? `${a.minutes} phút` : '', a.text ? `"${a.text}"` : '', a.scope ? `${a.scope}${a.key ? ' ' + a.key : ''}: ${Object.entries(a.perms || {}).map(([k, v]) => `${k}=${v === null ? 'mặc định' : v ? 'bật' : 'tắt'}`).join(', ')}` : ''].filter(Boolean).join(' · ');
    return [el('div', { class: 'ad-card' }, (d.audit || []).length ? el('table', { class: 'ad-table' },
      el('thead', {}, el('tr', {}, ['Lúc', 'Admin', 'Việc', 'Chi tiết'].map((h) => el('th', { text: h })))),
      el('tbody', {}, d.audit.map((a) => el('tr', {}, el('td', { text: dt(a.ts) }), el('td', { text: a.byName || a.by }), el('td', { text: ACT[a.action] || a.action }), el('td', { class: 'wrap', text: detail(a) })))))
      : el('p', { class: 'dim', text: 'Chưa có thao tác nào.' }))];
  }

  function init(api) { U = api; build(); }

  window.VPAdmin = { init, enable, visible, _state: A };
})();
