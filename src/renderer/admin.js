/* Tab 🛡️ Quản trị – chỉ hiện với admin (Gateway báo trong lời chào Sảnh). Mọi thao tác đều do Gateway kiểm tra quyền lại;
   tab này chỉ là giao diện. Phần quản lý key / hạn mức AI nằm ở LTN Admin Console trên web (nút ở góc trên). */
(function () {
  let U;
  const A = { on: false, shown: false, data: null, sec: 'overview', timer: null, busy: false, q: '' };
  const $ = (s, r = document) => r.querySelector(s);
  const CONSOLE_URL = 'https://admin-simi.simi.vn';
  const SECTIONS = [
    ['overview', '📊', 'Tổng quan'], ['people', '👥', 'Người dùng'], ['perms', '🔐', 'Phân quyền'],
    ['cinema', '🎬', 'Màn chiếu'], ['announce', '📢', 'Thông báo'], ['npc', '🤖', 'Trợ lý (NPC)'], ['audit', '📜', 'Nhật ký'],
  ];
  const hm = (t) => new Date(t).toTimeString().slice(0, 5);
  const dt = (t) => new Date(t).toLocaleString('vi-VN', { hour: '2-digit', minute: '2-digit', day: '2-digit', month: '2-digit' });
  const cmp = (a, b) => { const x = String(a || '0').split('.').map(Number); const y = String(b || '0').split('.').map(Number); for (let i = 0; i < 3; i++) { if ((x[i] || 0) !== (y[i] || 0)) return (x[i] || 0) - (y[i] || 0); } return 0; };
  const OS = { win32: 'Windows', darwin: 'macOS', linux: 'Ubuntu/Linux' };
  const osName = (o) => (o ? (OS[o.split('-')[0]] || o) : '?');

  function build() {
    const { el } = U;
    const view = el('main', { class: 'adminview hidden', id: 'adminView' },
      el('nav', { class: 'ad-nav', id: 'adNav' }),
      el('section', { class: 'ad-main' },
        el('header', { class: 'ad-head' }, el('h2', { id: 'adTitle' }), el('span', { class: 'grow' }),
          el('small', { class: 'dim', id: 'adAt' }),
          el('button', { class: 'btn small', onclick: () => load(true) }, '🔄 Làm mới'),
          el('button', { class: 'btn small', title: 'Quản lý nhân viên, API key, hạn mức AI, bộ nhớ (trang web)', onclick: () => window.vp.openUrl(CONSOLE_URL) }, '🔑 Admin Console')),
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
    $('#adNav').replaceChildren(el('div', { class: 'ad-brand' }, el('b', { text: '🛡️ Quản trị' }), el('small', { text: 'Sảnh Văn Phòng AI' })),
      ...SECTIONS.map(([k, ic, name]) => el('button', { class: 'ad-nb' + (A.sec === k ? ' on' : ''), onclick: () => { A.sec = k; A.editing = false; A.draft = null; renderNav(); render(); } }, el('span', { text: ic }), name)));
  }

  function render() {
    if (!A.data) return;
    const sec = SECTIONS.find((x) => x[0] === A.sec) || SECTIONS[0];
    $('#adTitle').textContent = sec[1] + ' ' + sec[2];
    const fn = { overview, people, perms, cinema, announce, npc, audit }[sec[0]];
    if (sec[0] === 'npc' && A.editing) return; // đang sửa hướng dẫn: không tự làm mới kẻo mất chữ
    // giữ chữ đang gõ khi tự làm mới
    const keep = [...document.querySelectorAll('#adBody [data-keep]')].map((n) => [n.dataset.keep, n.value, n === document.activeElement]);
    $('#adBody').replaceChildren(...fn(A.data));
    for (const [k, v, f] of keep) { const n = $(`#adBody [data-keep="${k}"]`); if (n) { n.value = v; if (f) n.focus(); } }
  }

  // ---------- tổng quan ----------
  function overview(d) {
    const { el } = U;
    const devs = d.online.flatMap((o) => o.devices);
    const latest = d.latest;
    const upd = latest ? devs.filter((x) => x.version && cmp(x.version, latest) >= 0).length : 0;
    const stat = (ic, n, label, sub) => el('div', { class: 'ad-stat' }, el('span', { class: 'ic', text: ic }), el('b', { text: String(n) }), el('small', { text: label }), sub ? el('em', { text: sub }) : '');
    const versions = Object.entries(d.versions).sort((a, b) => cmp(b[0], a[0]));
    const max = Math.max(1, ...versions.map((v) => v[1]));
    return [
      el('div', { class: 'ad-stats' },
        stat('🟢', d.online.length, 'người đang online', `${devs.length} máy`),
        stat('⬆️', latest ? `${upd}/${devs.length}` : '–', latest ? `máy đã lên bản ${latest}` : 'chưa có bản phát hành', latest && devs.length ? Math.round(upd / devs.length * 100) + '%' : ''),
        stat('💬', d.today.messages || 0, 'tin nhắn hôm nay'),
        stat('🖼️', d.today.images || 0, 'ảnh hôm nay', `${d.files.totalMB}/${d.files.maxMB} MB · giữ ${d.files.retentionDays} ngày`)),
      el('div', { class: 'ad-card' }, el('h3', { text: 'Phiên bản app trên các máy đang online' }),
        versions.length ? el('div', { class: 'ad-bars' }, versions.map(([v, n]) => el('div', { class: 'ad-bar' + (v === '?' || (latest && cmp(v, latest) < 0) ? ' old' : '') },
          el('span', { class: 'v', text: v === '?' ? 'Bản cũ (< 0.9.13)' : v }), el('div', { class: 'track' }, el('i', { style: `width:${n / max * 100}%` })), el('b', { text: String(n) }))))
          : el('p', { class: 'dim', text: 'Chưa có máy nào online.' }),
        el('p', { class: 'dim small', text: 'Máy chạy bản cũ hơn 0.9.13 không báo phiên bản nên hiện là "Bản cũ". Máy đang mở app sẽ tự tải bản mới và hiện nút "Cập nhật ngay".' })),
      onlineTable(d),
    ];
  }

  function onlineTable(d) {
    const { el } = U;
    return el('div', { class: 'ad-card' }, el('h3', { text: `Đang online (${d.online.length})` }),
      d.online.length ? el('table', { class: 'ad-table' },
        el('thead', {}, el('tr', {}, ['Người', 'Team', 'Phiên bản', 'Máy', ''].map((h) => el('th', { text: h })))),
        el('tbody', {}, d.online.sort((a, b) => a.name.localeCompare(b.name, 'vi')).map((o) => el('tr', {},
          el('td', {}, el('b', { text: o.name }), o.admin ? ' 🛡️' : '', o.hidden ? el('small', { class: 'dim', text: ' (đang ẩn)' }) : ''),
          el('td', { text: o.teamName || o.teamId }),
          el('td', {}, ...o.devices.map((x) => el('span', { class: 'ad-ver' + (d.latest && x.version && cmp(x.version, d.latest) < 0 ? ' old' : '') + (!x.version ? ' old' : ''), text: x.version || 'cũ' }))),
          el('td', { text: o.devices.map((x) => osName(x.os)).join(', ') }),
          el('td', { class: 'acts' }, o.admin ? '' : personActs(o))))))
        : el('p', { class: 'dim', text: 'Chưa có ai online.' }));
  }

  function personActs(o) {
    const { el } = U;
    const sel = el('select', { class: 'cs small', title: 'Tạm khoá chat', onchange: (e) => { const m = Number(e.target.value); e.target.value = ''; if (m >= 0) act({ action: 'mute', id: o.id, minutes: m }, m ? `🔇 Đã khoá chat ${o.name}` : `🔈 Đã mở chat cho ${o.name}`); } },
      el('option', { value: '', text: o.mutedUntil ? `🔇 Khoá tới ${hm(o.mutedUntil)}` : '🔇 Khoá chat…' }),
      ...[[15, '15 phút'], [60, '1 giờ'], [240, '4 giờ'], [1440, '1 ngày']].map(([v, t]) => el('option', { value: String(v), text: t })),
      o.mutedUntil ? el('option', { value: '0', text: 'Mở khoá chat' }) : '');
    return [sel, el('button', { class: 'btn mini', title: 'Ngắt khỏi Sảnh 10 phút', onclick: () => act({ action: 'kick', id: o.id, minutes: 10 }, `🚪 Đã mời ${o.name} ra khỏi Sảnh 10 phút`) }, '🚪 Mời ra')];
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
        el('p', { class: 'dim small', text: 'Chọn tài khoản chatbot đã có key (thường là tài khoản dịch vụ, không nhớ hội thoại). NPC đứng ở quầy "❓ HỎI SIMI" giữa Sảnh, dùng tên và nhân vật của tài khoản này.' }),
        el('div', { class: 'ad-row' }, sel, el('button', { class: 'btn primary', onclick: () => act({ action: 'npc', id: sel.value || null }, sel.value ? '🤖 Đã đổi tài khoản Trợ lý' : 'Đã tắt hỏi tự do') }, 'Lưu')),
        status),
      el('div', { class: 'ad-card' }, el('h3', { text: 'Ghi chú riêng của công ty cho Trợ lý' }),
        el('p', { class: 'dim small', text: 'AI đọc phần này mỗi khi trả lời (quy trình nội bộ, hỏi ai việc gì…). Không ghi mật khẩu / thông tin mật.' }),
        notes, el('div', { class: 'ad-row' }, el('span', { class: 'grow' }), el('button', { class: 'btn primary', onclick: () => act({ action: 'npc-guides', notes: notes.value }, '💾 Đã lưu ghi chú') }, 'Lưu ghi chú'))),
      guideEditor(d),
    ];
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

  // ---------- nhật ký ----------
  const ACT = { 'delete-message': '🗑 Xoá tin', mute: '🔇 Khoá chat', unmute: '🔈 Mở khoá chat', kick: '🚪 Mời ra', unkick: '↩ Cho vào lại', perms: '🔐 Đổi quyền', 'cinema-skip': '⏭ Chuyển bài', 'cinema-clear': '🧹 Xoá hàng chờ', 'cinema-lock': '🔒 Khoá màn chiếu', 'cinema-unlock': '🔓 Mở màn chiếu', announce: '📢 Thông báo', unpin: '📌 Bỏ ghim', npc: '🤖 Đổi tài khoản Trợ lý', 'npc-guides': '📘 Sửa hướng dẫn Trợ lý' };
  function audit(d) {
    const { el } = U;
    const detail = (a) => [a.targetName, a.minutes ? `${a.minutes} phút` : '', a.text ? `"${a.text}"` : '', a.scope ? `${a.scope}${a.key ? ' ' + a.key : ''}: ${Object.entries(a.perms || {}).map(([k, v]) => `${k}=${v === null ? 'mặc định' : v ? 'bật' : 'tắt'}`).join(', ')}` : ''].filter(Boolean).join(' · ');
    return [el('div', { class: 'ad-card' }, (d.audit || []).length ? el('table', { class: 'ad-table' },
      el('thead', {}, el('tr', {}, ['Lúc', 'Admin', 'Việc', 'Chi tiết'].map((h) => el('th', { text: h })))),
      el('tbody', {}, d.audit.map((a) => el('tr', {}, el('td', { text: dt(a.ts) }), el('td', { text: a.byName || a.by }), el('td', { text: ACT[a.action] || a.action }), el('td', { class: 'wrap', text: detail(a) })))))
      : el('p', { class: 'dim', text: 'Chưa có thao tác nào.' }))];
  }

  function init(api) { U = api; build(); }

  window.VPAdmin = { init, enable, visible, _state: A };
})();
