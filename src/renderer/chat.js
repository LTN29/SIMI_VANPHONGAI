/* Tab Chat: thay cho ChatGPT Work / Codex Desktop – chạy Codex ngầm qua SIMI Gateway.
   Dự án (thư mục) · đoạn chat · chọn model trong Combo · đính kèm ảnh/file · gõ / để gọi skill · xem các bước công cụ. */
(function () {
  let U; // tiện ích dùng chung từ app.js (window.VP)
  const C = {
    view: 'office', threads: [], cur: null, models: [], modelsAt: 0, modelsErr: '', skills: [], status: null,
    running: new Set(), atts: [], open: {}, more: {}, skillIdx: 0, pop: null, imgCache: new Map(),
    external: [], extAt: 0, extLoading: false, extErr: '', importing: null, // đoạn chat của ChatGPT Work chưa mở trong app
    codexProjects: [], searchOpen: false, // dự án bên ChatGPT Work (đọc từ máy) · ô tìm kiếm đang mở
  };
  const ls = { get: (k, d) => U.store.get(k, d), set: (k, v) => U.store.set(k, v) }; // lưu tùy chọn nhỏ trên máy
  const EFFORTS = [['', 'Mặc định'], ['low', 'Nhanh'], ['medium', 'Vừa'], ['high', 'Kỹ'], ['xhigh', 'Rất kỹ']];
  // ⚡ Tự động: việc chỉ cần chữ trả lời thẳng (nhanh như chat thường), cần công cụ thì tự chuyển sang Codex
  const SANDBOX = [['read-only', '🔒 Chỉ đọc', 'Chỉ đọc file, không sửa gì trên máy'], ['workspace-write', '📁 Sửa trong dự án', 'Được tạo/sửa file trong thư mục dự án (khuyên dùng)'], ['danger-full-access', '✅ Tự cho phép mọi lệnh', 'Chạy lệnh và sửa file ở bất kỳ đâu, không hỏi lại – chỉ dùng khi tin tưởng']];
  const SKILL_UI = {
    'simi-tao-anh': ['🎨', 'Tạo ảnh'], 'muse-tao-anh': ['🖼️', 'Tạo ảnh Muse'], 'simi-tao-video': ['🎬', 'Tạo video'], 'simi-doc-pdf': ['📄', 'Đọc PDF'],
    'simi-tim-kiem-web': ['🔎', 'Tìm trên web'], 'simi-doc-trang-web': ['🌐', 'Đọc trang web'], 'simi-trinh-duyet': ['🧭', 'Dùng trình duyệt'],
    'simi-chep-loi': ['🎙️', 'Chép lời ghi âm'], 'simi-doc-van-ban': ['🔊', 'Đọc văn bản thành giọng'], 'simi-tai-lieu': ['📑', 'Soạn tài liệu'],
    'simi-vector': ['🧮', 'Tìm theo ý nghĩa'], 'simi-tro-chuyen': ['💬', 'Trò chuyện'], 'simi-cai-dat': ['🛠️', 'Cài đặt SIMI'], simi: ['✨', 'SIMI'], updatesimi: ['🔄', 'Cập nhật SIMI'],
    'computer-use': ['🖥️', 'Computer Use (ChatGPT)'], documents: ['📑', 'Tài liệu'], pdf: ['📄', 'PDF'], spreadsheets: ['📗', 'Bảng tính'], presentations: ['📙', 'Trình chiếu'], visualize: ['📊', 'Biểu đồ'],
  };
  const QUICK = ['simi-tao-anh', 'simi-tao-video', 'computer-use', 'simi-trinh-duyet', 'simi-tim-kiem-web', 'simi-doc-pdf', 'simi-tai-lieu', 'simi-chep-loi', 'simi-doc-trang-web'];
  const skillUi = (s) => SKILL_UI[s.name] || ['🧩', s.name.replace(/^simi-/, '').replace(/-/g, ' ')];

  const $ = (s, r = document) => r.querySelector(s);
  const ago = (t) => {
    const s = (Date.now() - t) / 1000;
    if (s < 60) return 'vừa xong'; if (s < 3600) return Math.floor(s / 60) + ' phút';
    if (s < 86400) return Math.floor(s / 3600) + ' giờ'; if (s < 86400 * 7) return Math.floor(s / 86400) + ' ngày';
    return new Date(t).toLocaleDateString('vi-VN');
  };
  const projects = () => U.S.cfg.chatProjects || [];
  const projName = (dir) => (!dir ? 'Chung' : (projects().find((p) => p.dir === dir) || {}).name || dir.split(/[\\/]/).filter(Boolean).pop() || dir);
  // nhân sự phụ trách đoạn chat: của đoạn đang mở → lần chọn trước → Trưởng phòng
  const agents = () => U.S.cfg.agents;
  const agentOf = (t) => (t && t.agentId && U.agentById(t.agentId)) || U.agentById(ls.get('vp.chatPrefs', {}).agentId) || agents().find((a) => a.isManager) || agents()[0];
  const curAgent = () => agentOf(C.cur);
  const agentModel = (a) => (a && a.source === 'simi' ? a.model || '' : null); // chỉ nguồn SIMI mới chạy được trong Chat
  const modelLabel = (id) => (C.models.find((m) => m.id === id) || {}).label || id || 'Mặc định';

  // ================= dựng khung =================
  function build() {
    const { el, icon } = U;
    const tabs = el('div', { class: 'viewtabs', role: 'tablist' },
      el('button', { 'data-v': 'office', class: 'active', onclick: () => setView('office') }, '🏢 ', el('span', { text: 'Văn phòng' })),
      el('button', { 'data-v': 'chat', onclick: () => setView('chat') }, '💬 ', el('span', { text: 'Chat' }), el('em', { class: 'vt-dot hidden', id: 'chatRunDot' })));
    $('.topbar .brands') ? $('.topbar .brands').after(tabs) : $('.topbar .brand').after(tabs);

    const side = el('aside', { class: 'ch-side' },
      el('div', { class: 'ch-side-top' },
        el('button', { class: 'ch-new', title: 'Đoạn chat mới (Ctrl+N)', onclick: () => newThread() }, icon('compose'), el('span', { class: 'ch-new-t', text: 'Đoạn chat mới' })),
        el('button', { class: 'ch-ib ch-findbtn', id: 'chFindBtn', title: 'Tìm đoạn chat (Ctrl+K)', 'aria-label': 'Tìm đoạn chat', onclick: () => toggleSearch() }, icon('search')),
        el('button', { class: 'ch-ib ch-fold', id: 'chFold', title: 'Thu gọn danh sách đoạn chat', 'aria-label': 'Thu gọn danh sách đoạn chat', onclick: () => foldSide() }, '«')),
      el('div', { class: 'ch-findrow hidden', id: 'chFindRow' },
        el('input', { class: 'ch-search', id: 'chSearch', placeholder: 'Tìm đoạn chat…', 'aria-label': 'Tìm đoạn chat', oninput: renderSide, onkeydown: (e) => { if (e.key === 'Escape') { e.target.value = ''; toggleSearch(false); } } })),
      el('div', { class: 'ch-list', id: 'chList' }),
      el('div', { class: 'ch-ext', id: 'chExt' }),
      el('button', { class: 'ch-status', id: 'chStatus', onclick: () => U.openAccounts() }));
    const main = el('section', { class: 'ch-main' },
      el('header', { class: 'ch-head', id: 'chHead' }),
      el('div', { class: 'ch-msgs', id: 'chMsgs' }),
      el('div', { class: 'ch-composer', id: 'chComposer' },
        el('div', { class: 'ch-drop', text: 'Thả ảnh hoặc file vào đây' }),
        el('div', { class: 'ch-atts', id: 'chAtts' }),
        el('textarea', { id: 'chInput', rows: 1, placeholder: 'Nhắn cho SIMI…  (gõ / chọn skill · @ gọi plugin như Máy tính · dán ảnh bằng Ctrl+V)' }),
        el('div', { class: 'ch-skillpop hidden', id: 'chSkillPop' }),
        el('div', { class: 'ch-bar' },
          el('button', { class: 'cb who', id: 'chWho', title: 'Nhân sự phụ trách đoạn chat này', onclick: (e) => openWhoMenu(e.currentTarget) }),
          el('button', { class: 'cb', title: 'Đính kèm ảnh / file', onclick: pickFiles }, icon('plus')),
          el('button', { class: 'cb skill', title: 'Gọi skill', onclick: () => { const ta = $('#chInput'); if (!/(^|\s)\/\S*$/.test(ta.value)) ta.value += (ta.value && !/\s$/.test(ta.value) ? ' ' : '') + '/'; ta.focus(); onInput(); } }, '/ Skill'),
          el('button', { class: 'cb web', id: 'chBrowserBtn', title: 'Mở / đóng trình duyệt cạnh khung chat (AI thao tác ngay tại đây)', onclick: () => window.VPBrowser && window.VPBrowser.toggle() }, '🌐', el('span', { class: 'cbl', text: ' Trình duyệt' })),
          el('button', { class: 'cb tools', id: 'chTools', title: 'Computer Use, trình duyệt SIMI, plugin', onclick: (e) => openTools(e.currentTarget) }, '🧰', el('span', { class: 'cbl', text: ' Công cụ' })),
          el('select', { class: 'cs', id: 'chModel', title: 'Model (theo Combo của bạn)', onchange: (e) => setThreadOpt('model', e.target.value) }),
          el('select', { class: 'cs small', id: 'chEffort', title: 'Mức suy nghĩ', onchange: (e) => setThreadOpt('effort', e.target.value) }, EFFORTS.map(([v, l]) => el('option', { value: v, text: '🧠 ' + l }))),
          el('select', { class: 'cs small', id: 'chSandbox', title: 'Quyền trên máy', onchange: (e) => setThreadOpt('sandbox', e.target.value) }, SANDBOX.map(([v, l, d]) => el('option', { value: v, text: l, title: d }))),
          el('span', { class: 'grow' }),
          el('button', { class: 'ch-send', id: 'chSend', title: 'Gửi (Enter)', onclick: sendOrStop }, icon('send')))));
    const view = el('main', { class: 'chatview hidden', id: 'chatView' }, side, main);
    $('main.layout').after(view);
    try { if (localStorage.getItem('vp.chatSideMini') === '1') foldSide(true); } catch { /* bỏ qua */ }

    document.addEventListener('keydown', (e) => {
      if (C.view !== 'chat' || !(e.ctrlKey || e.metaKey) || e.shiftKey || e.altKey) return;
      if (e.key === 'k' || e.key === 'K') { e.preventDefault(); toggleSearch(true); }
      else if (e.key === 'n' || e.key === 'N') { e.preventDefault(); newThread(); }
    });
    const ta = $('#chInput');
    ta.addEventListener('input', onInput);
    ta.addEventListener('keydown', onKey);
    ta.addEventListener('paste', onPaste);
    const comp = $('#chComposer');
    ['dragenter', 'dragover'].forEach((k) => view.addEventListener(k, (e) => { if (e.dataTransfer && [...e.dataTransfer.types].includes('Files')) { e.preventDefault(); comp.classList.add('dragging'); } }));
    view.addEventListener('dragleave', (e) => { if (!view.contains(e.relatedTarget)) comp.classList.remove('dragging'); });
    view.addEventListener('drop', (e) => { e.preventDefault(); comp.classList.remove('dragging'); addFiles([...(e.dataTransfer.files || [])]); });
  }

  function setView(v) {
    C.view = v; ls.set('vp.mainView', v);
    document.querySelectorAll('.viewtabs button').forEach((b) => b.classList.toggle('active', b.dataset.v === v));
    $('main.layout').classList.toggle('hidden', v !== 'office');
    $('#chatView').classList.toggle('hidden', v !== 'chat');
    const lobbyView = $('#lobbyView'); if (lobbyView) lobbyView.classList.toggle('hidden', v !== 'lobby');
    if (window.VPAdmin && $('#adminView')) window.VPAdmin.visible(v === 'admin');
    document.body.classList.toggle('in-chat', v !== 'office');
    if (window.__office) window.__office.paused = v !== 'office';
    if (window.VPLobby) window.VPLobby.visible(v === 'lobby');
    if (v === 'chat') {
      loadMeta(); loadExternal();
      if (!C.cur) { const last = ls.get('vp.chatCur', ''); if (last && C.threads.some((t) => t.id === last)) openThread(last); else renderMain(); }
      setTimeout(() => $('#chInput').focus(), 50);
    }
    if (window.VPBrowser) window.VPBrowser.sync();
  }

  // ================= dữ liệu =================
  async function loadThreads() { C.threads = await window.vp.chat.list(); renderSide(); }

  async function loadMeta(force) {
    if (!force && Date.now() - C.modelsAt < 5 * 60 * 1000 && C.models.length) return;
    C.modelsAt = Date.now();
    const [st, sk, md] = await Promise.all([
      window.vp.simi.status().catch(() => null),
      window.vp.chat.skills().catch(() => window.vp.simi.skills().catch(() => [])),
      window.vp.listModels('simi', !!force).catch((e) => ({ models: [], error: U.cleanErr(e) })),
    ]);
    C.status = st; C.skills = sk || []; C.models = md.models || []; C.modelsErr = md.error || ''; C.defaultModel = md.defaultModel || (st && st.defaultModel) || '';
    renderStatus(); renderBar();
    if (!C.cur) renderMain();
  }

  function renderStatus() {
    const st = C.status; const b = $('#chStatus'); if (!b) return;
    const ok = st && st.loggedIn;
    b.className = 'ch-status ' + (ok ? 'ok' : 'bad');
    b.replaceChildren(U.el('img', { src: 'brand/simi.png', alt: '' }), U.el('span', {},
      U.el('b', { text: ok ? 'SIMI Gateway' : 'Chưa kết nối SIMI' }),
      U.el('small', { text: ok ? `${C.models.length} model · ${C.skills.filter((s) => s.simi).length} skill SIMI` : 'Bấm để cài đặt' })), U.el('i', { class: 'dot' }));
  }

  // ================= thanh bên (giống ChatGPT Work / Codex) =================
  // Đã ghim → Dự án (thư mục, đoạn chat thụt vào dưới) → Đoạn chat (không thuộc dự án). Dự án lấy từ app + ChatGPT Work.
  const pinnedProjects = () => ls.get('vp.pinProj', []);
  const secOpen = (k) => ls.get('vp.chatSecs', {})[k] !== false;
  function setSec(k, on) { const v = ls.get('vp.chatSecs', {}); v[k] = on; ls.set('vp.chatSecs', v); renderSide(); }
  function knownProjects() {
    const out = new Map();
    projects().forEach((p) => out.set(p.dir, { name: p.name, dir: p.dir, saved: true }));
    C.codexProjects.forEach((p) => { if (!out.has(p.dir)) out.set(p.dir, { name: p.name, dir: p.dir, codex: true }); });
    return out;
  }
  function sideGroups(items) {
    const known = knownProjects();
    const groups = new Map([...known.values()].map((p) => [p.dir, { ...p, items: [] }]));
    const chats = [];
    for (const t of items) {
      const dir = t.project || '';
      if (!dir) { chats.push(t); continue; }
      if (!groups.has(dir)) groups.set(dir, { name: dir.split(/[\\/]/).filter(Boolean).pop() || dir, dir, items: [] });
      groups.get(dir).items.push(t);
    }
    const recent = (g) => (g.items[0] ? g.items[0].updatedAt : 0);
    return { projects: [...groups.values()].sort((a, b) => recent(b) - recent(a)), chats };
  }

  function toggleSearch(on) {
    C.searchOpen = on === undefined ? !C.searchOpen : !!on;
    const inp = $('#chSearch');
    if (!C.searchOpen) inp.value = '';
    $('#chFindRow').classList.toggle('hidden', !C.searchOpen);
    $('#chFindBtn').classList.toggle('on', C.searchOpen);
    if (C.searchOpen) setTimeout(() => inp.focus(), 0);
    renderSide();
  }

  // thu gọn / mở rộng cột danh sách đoạn chat (nhớ cho lần sau) – chừa chỗ cho khung chat / trình duyệt
  function foldSide(on) {
    const view = $('#chatView'); if (!view) return;
    const mini = on === undefined ? !view.classList.contains('side-mini') : !!on;
    view.classList.toggle('side-mini', mini);
    const b = $('#chFold'); if (b) { b.textContent = mini ? '»' : '«'; b.title = mini ? 'Mở rộng danh sách đoạn chat' : 'Thu gọn danh sách đoạn chat'; b.setAttribute('aria-label', b.title); }
    try { localStorage.setItem('vp.chatSideMini', mini ? '1' : '0'); } catch { /* bỏ qua */ }
    if (window.VPBrowser) window.VPBrowser.sync();
  }

  function renderSide() {
    const { el, icon } = U;
    const q = ($('#chSearch').value || '').trim().toLowerCase();
    const all = [...C.threads.filter((t) => !t.archived), ...C.external]
      .filter((t) => !q || (t.title || '').toLowerCase().includes(q))
      .sort((a, b) => b.updatedAt - a.updatedAt);
    const list = $('#chList'); list.replaceChildren();
    const sec = (key, label, extra) => {
      const open = q || secOpen(key);
      list.append(el('div', { class: 'ch-sec' + (open ? ' open' : '') },
        el('button', { class: 'sname', 'aria-expanded': String(!!open), onclick: () => setSec(key, !open) }, el('span', { text: label }), el('span', { class: 'caret', text: '›' })),
        extra || null));
      return open;
    };
    const more = (key, n, total, indent) => {
      if (total <= n && !C.more[key]) return;
      list.append(el('button', { class: 'ch-more' + (indent ? ' in' : ''), onclick: () => { C.more[key] = !C.more[key]; renderSide(); } }, C.more[key] ? 'Thu gọn' : `Hiện thêm (${total - n})`));
    };
    const projBlock = (g, pinned) => {
      const key = g.dir;
      const isOpen = q ? true : C.open[key] !== false;
      list.append(el('div', { class: 'ch-proj' + (isOpen ? ' open' : '') },
        el('button', { class: 'pname', title: g.dir, 'aria-expanded': String(isOpen), onclick: () => { C.open[key] = !isOpen; renderSide(); } }, icon('folder'), el('span', { class: 'pn', text: g.name }), pinned ? icon('pin', 'pinned') : null),
        el('button', { class: 'pact more', title: 'Tuỳ chọn dự án', 'aria-label': 'Tuỳ chọn dự án ' + g.name, onclick: (e) => groupMenu(e.currentTarget, g) }, '⋯'),
        el('button', { class: 'pact', title: 'Đoạn chat mới trong ' + g.name, 'aria-label': 'Đoạn chat mới trong ' + g.name, onclick: () => newThread({ project: g.dir }) }, icon('compose'))));
      if (!isOpen) return;
      if (!g.items.length) { list.append(el('div', { class: 'ch-empty in', text: 'Chưa có đoạn chat' })); return; }
      const n = C.more['p:' + key] || q ? g.items.length : 5;
      g.items.slice(0, n).forEach((t) => list.append(sideItem(t, true)));
      if (!q) more('p:' + key, 5, g.items.length, true);
    };
    const { projects: groups, chats } = sideGroups(all);
    if (q) { // tìm kiếm: 1 danh sách phẳng, có tên dự án nhỏ bên cạnh
      if (!all.length) list.append(el('div', { class: 'ch-empty', text: `Không thấy đoạn chat nào có "${q}"` }));
      all.slice(0, 80).forEach((t) => list.append(sideItem(t, false, true)));
    } else {
      const pinProj = new Set(pinnedProjects());
      const pinGroups = groups.filter((g) => pinProj.has(g.dir));
      const pinChats = all.filter((t) => t.pinned && !(t.project && pinProj.has(t.project)));
      if (pinGroups.length || pinChats.length) {
        if (sec('pin', 'Đã ghim')) { pinGroups.forEach((g) => projBlock(g, true)); pinChats.forEach((t) => list.append(sideItem(t, false))); }
      }
      const restGroups = groups.filter((g) => !pinProj.has(g.dir) && (g.items.length || g.saved || g.codex));
      const pAdd = el('button', { class: 'sact', title: 'Thêm dự án (chọn thư mục)', 'aria-label': 'Thêm dự án', onclick: addProject }, '+');
      if (sec('proj', 'Dự án', pAdd)) {
        restGroups.forEach((g) => projBlock({ ...g, items: g.items.filter((t) => !t.pinned) }, false));
        if (!restGroups.length) list.append(el('button', { class: 'ch-addproj', onclick: addProject }, '＋ Thêm dự án (thư mục)'));
      }
      const plain = chats.filter((t) => !t.pinned);
      if (sec('chats', 'Đoạn chat', el('button', { class: 'sact', title: 'Đoạn chat mới', 'aria-label': 'Đoạn chat mới', onclick: () => newThread() }, '+'))) {
        if (!plain.length) list.append(el('div', { class: 'ch-empty', text: 'Chưa có đoạn chat' }));
        const n = C.more.chats ? plain.length : 20;
        plain.slice(0, n).forEach((t) => list.append(sideItem(t, false)));
        more('chats', 20, plain.length, false);
      }
    }
    const nArch = C.threads.filter((t) => t.archived).length;
    list.append(el('button', { class: 'ch-archived', onclick: openArchived, title: 'Đoạn chat đã lưu trữ (của app và ChatGPT Work)' }, icon('archive'), 'Đã lưu trữ', nArch ? el('em', { text: String(nArch) }) : null));
    const ext = $('#chExt');
    ext.replaceChildren(el('span', { text: C.extErr ? '⚠️ ' + C.extErr : C.extLoading ? 'Đang đọc lịch sử ChatGPT Work…' : `🔗 Liên thông ChatGPT Work · ${C.external.length} đoạn chưa mở` }),
      el('button', { class: 'linkbtn small', title: 'Đọc lại lịch sử từ ChatGPT Work / Codex', disabled: C.extLoading, onclick: () => loadExternal(true) }, '⟳'));
    ext.classList.toggle('bad', !!C.extErr);
    const dot = $('#chatRunDot'); if (dot) dot.classList.toggle('hidden', !C.running.size);
  }

  function sideItem(t, indent, showProj) {
    const { el } = U;
    const busy = C.running.has(t.id) || C.importing === t.codexId;
    const proj = showProj && t.project ? projName(t.project) : '';
    return el('div', {
      class: 'ch-item' + (indent ? ' in' : '') + (C.cur && C.cur.id === t.id ? ' active' : '') + (busy ? ' running' : '') + (t.external ? ' ext' : ''),
      title: `${t.title || 'Đoạn chat'}\n${t.external ? 'Từ ChatGPT Work – bấm để mở và chat tiếp · ' : ''}${ago(t.updatedAt)}${proj ? ' · ' + proj : ''}`,
      role: 'button', tabindex: '0',
      onclick: () => (t.external ? openExternal(t) : openThread(t.id)),
      onkeydown: (e) => { if (e.key === 'Enter') { e.preventDefault(); e.currentTarget.click(); } },
    },
    el('span', { class: 'tt', text: t.title || 'Đoạn chat' }),
    proj ? el('span', { class: 'tp', text: proj }) : null,
    busy ? el('span', { class: 'spin' }) : el('small', { class: 'tm', text: ago(t.updatedAt) }),
    el('button', { class: 'del', title: 'Ghim, lưu trữ, xóa', 'aria-label': 'Tuỳ chọn', onclick: (e) => { e.stopPropagation(); itemMenu(e.currentTarget, t); } }, '⋯'));
  }

  // ---------- menu nhỏ: lưu trữ / xóa (đoạn chat, dự án) ----------
  function popMenu(anchor, items) {
    const { el } = U;
    document.querySelectorAll('.ctx-menu').forEach((n) => n.remove());
    const menu = el('div', { class: 'ctx-menu' }, items.filter(Boolean).map((it) => (it === '-' ? el('hr') : el('button', { class: it.danger ? 'danger' : '', disabled: !!it.disabled, title: it.title || '', onclick: () => { menu.remove(); it.run(); } }, el('span', { class: 'mi', text: it.icon }), it.label))));
    document.body.append(menu);
    const r = anchor.getBoundingClientRect();
    menu.style.left = Math.min(r.left, innerWidth - menu.offsetWidth - 8) + 'px';
    menu.style.top = (r.bottom + menu.offsetHeight + 6 > innerHeight ? r.top - menu.offsetHeight - 4 : r.bottom + 4) + 'px';
    const off = (e) => { if (!menu.contains(e.target)) { menu.remove(); document.removeEventListener('mousedown', off, true); } };
    setTimeout(() => document.addEventListener('mousedown', off, true), 0);
  }

  function itemMenu(anchor, t) {
    if (t.external) {
      return popMenu(anchor, [
        { icon: '↗', label: 'Mở trong app', run: () => openExternal(t) },
        { icon: '📌', label: 'Ghim lên đầu', title: 'Mở trong app rồi ghim', run: () => pinExternal(t) },
        { icon: '📦', label: 'Lưu trữ', run: () => archiveExt(t, true) },
        '-',
        { icon: '🗑', label: 'Xóa…', danger: true, run: () => askDelete([t]) },
      ]);
    }
    popMenu(anchor, [
      { icon: t.pinned ? '📌' : '📍', label: t.pinned ? 'Bỏ ghim' : 'Ghim lên đầu', run: async () => { await window.vp.chat.update(t.id, { pinned: !t.pinned }); if (C.cur && C.cur.id === t.id) C.cur.pinned = !t.pinned; loadThreads(); renderHead(); } },
      { icon: '📦', label: 'Lưu trữ', disabled: C.running.has(t.id), run: () => archiveThreads([t], true) },
      '-',
      { icon: '🗑', label: 'Xóa…', danger: true, disabled: C.running.has(t.id), run: () => askDelete([t]) },
    ]);
  }

  async function pinExternal(t) {
    if (C.importing) return;
    C.importing = t.codexId; renderSide();
    try { const nt = await window.vp.chat.importExternal(t.codexId); await window.vp.chat.update(nt.id, { pinned: true }); }
    catch (e) { U.toast('Không ghim được: ' + U.cleanErr(e), true); }
    C.importing = null; await loadThreads(); loadExternal(true);
  }

  function groupMenu(anchor, g) {
    const items = g.items.filter((t) => !C.running.has(t.id));
    const pinned = pinnedProjects().includes(g.dir);
    popMenu(anchor, [
      { icon: '➕', label: 'Đoạn chat mới trong dự án', run: () => newThread({ project: g.dir }) },
      { icon: '📌', label: pinned ? 'Bỏ ghim dự án' : 'Ghim dự án lên đầu', run: () => { ls.set('vp.pinProj', pinned ? pinnedProjects().filter((d) => d !== g.dir) : [...pinnedProjects(), g.dir]); renderSide(); } },
      g.dir ? { icon: '📂', label: 'Mở thư mục', run: () => window.vp.chat.openDir(g.dir) } : null,
      '-',
      { icon: '📦', label: `Lưu trữ cả dự án (${items.length} đoạn chat)`, disabled: !items.length, run: () => archiveThreads(items, true, g.name) },
      { icon: '🗑', label: `Xóa cả dự án (${items.length} đoạn chat)…`, danger: true, disabled: !items.length, run: () => askDelete(items, g) },
      g.saved ? { icon: '✕', label: 'Bỏ dự án khỏi danh sách', title: 'Không xóa thư mục trên máy', run: () => removeProject(g.dir) } : null,
    ]);
  }

  async function archiveExt(t, on) {
    try { await window.vp.chat.archiveExternal(t.codexId, on); C.external = C.external.filter((x) => x.codexId !== t.codexId); renderSide(); U.toast(on ? `📦 Đã lưu trữ "${t.title.slice(0, 40)}"` : 'Đã bỏ lưu trữ'); loadExternal(true); }
    catch (e) { U.toast('Không lưu trữ được: ' + U.cleanErr(e), true); }
  }

  // lưu trữ nhiều đoạn chat (1 đoạn hoặc cả dự án)
  async function archiveThreads(list, on, groupName) {
    let ok = 0; const errs = [];
    for (const t of list) {
      try { if (t.external) await window.vp.chat.archiveExternal(t.codexId, on); else await window.vp.chat.archive(t.id, on); ok++; } catch (e) { errs.push(U.cleanErr(e)); }
    }
    if (C.cur && on && list.some((t) => t.id === C.cur.id)) { C.cur = null; ls.set('vp.chatCur', ''); renderMain(); }
    await loadThreads(); loadExternal(true);
    const what = groupName ? `dự án "${groupName}" (${ok} đoạn chat)` : list.length === 1 ? `"${(list[0].title || '').slice(0, 40)}"` : `${ok} đoạn chat`;
    if (errs.length) U.toast(`Lỗi ${errs.length} đoạn: ${errs[0]}`, true);
    else U.toast(on ? `📦 Đã lưu trữ ${what} – xem lại ở "Đã lưu trữ"` : `Đã bỏ lưu trữ ${what}`);
  }

  // hỏi trước khi xóa: chọn xóa khỏi app hay xóa luôn trong ChatGPT Work
  function askDelete(list, g) {
    const { el } = U;
    const linked = list.filter((t) => t.external || t.codexThread);
    const onlyExt = list.every((t) => t.external);
    const all = el('input', { type: 'checkbox', id: 'delAll', checked: onlyExt, disabled: onlyExt });
    const name = g ? `cả dự án "${g.name}" (${list.length} đoạn chat)` : `"${(list[0].title || 'Đoạn chat').slice(0, 60)}"`;
    const body = el('div', { class: 'del-box' },
      el('p', {}, 'Xóa ', el('b', { text: name }), '?'),
      linked.length ? el('label', { class: 'del-opt', for: 'delAll' }, all, el('span', {}, el('b', { text: 'Xóa luôn trong ChatGPT Work' }), el('small', { text: onlyExt ? 'Đoạn chat này chỉ có bên ChatGPT Work nên sẽ bị xóa ở đó. Không khôi phục được.' : 'Mất cả lịch sử bên ChatGPT Work / Codex, không khôi phục được. Không chọn thì chỉ xóa khỏi app.' }))) : null,
      g && g.dir ? el('small', { class: 'dim', text: 'Thư mục dự án và các file trên máy vẫn giữ nguyên.' }) : null,
      el('small', { class: 'dim', text: 'Muốn giữ lại để xem sau? Dùng "📦 Lưu trữ" thay vì xóa.' }));
    const go = el('button', { class: 'btn danger', text: 'Xóa' });
    go.addEventListener('click', async () => {
      go.disabled = true; go.textContent = 'Đang xóa…';
      let ok = 0; const errs = [];
      for (const t of list) {
        try { if (t.external) await window.vp.chat.deleteExternal(t.codexId); else await window.vp.chat.remove(t.id, all.checked); ok++; } catch (e) { errs.push(U.cleanErr(e)); }
      }
      U.closeModal();
      if (C.cur && list.some((t) => t.id === C.cur.id)) { C.cur = null; ls.set('vp.chatCur', ''); renderMain(); }
      if (g && g.saved) U.S.cfg.chatProjects = await window.vp.saveProjects(projects().filter((p) => p.dir !== g.dir));
      await loadThreads(); loadExternal(true);
      if (C.archivedOpen) openArchived();
      U.toast(errs.length ? `Đã xóa ${ok}, lỗi ${errs.length}: ${errs[0]}` : `🗑 Đã xóa ${ok > 1 ? ok + ' đoạn chat' : ''}`.trim(), !!errs.length);
    });
    U.openModal('🗑 Xóa đoạn chat', body, [el('button', { class: 'btn', text: 'Hủy', onclick: U.closeModal }), go]);
  }

  // xem lại / bỏ lưu trữ / xóa hẳn đoạn chat đã lưu trữ
  async function openArchived() {
    const { el } = U;
    C.archivedOpen = true;
    const box = el('div', { class: 'arch-box' }, el('div', { class: 'tp-load' }, el('span', { class: 'spin' }), ' Đang tải…'));
    U.openModal('📦 Đoạn chat đã lưu trữ', box, [el('button', { class: 'btn primary', text: 'Đóng', onclick: () => { C.archivedOpen = false; U.closeModal(); } })], 'wide');
    const r = await window.vp.chat.archived().catch((e) => ({ threads: [], error: U.cleanErr(e) }));
    const rows = r.threads.map((t) => el('div', { class: 'arch-row' },
      el('span', { class: 'ti', text: t.external ? '↗' : '💬' }),
      el('div', { class: 'grow' }, el('b', { text: t.title || 'Đoạn chat' }), el('small', { text: `${projName(t.project)} · ${ago(t.updatedAt)}${t.external ? ' · ChatGPT Work' : ''}` })),
      el('button', { class: 'btn mini', onclick: async () => { if (t.external) await archiveExt(t, false); else await archiveThreads([t], false); openArchived(); } }, '↩ Bỏ lưu trữ'),
      el('button', { class: 'btn mini ghost danger', onclick: () => askDelete([t]) }, '🗑')));
    box.replaceChildren(...(rows.length ? rows : [el('div', { class: 'ch-empty', text: 'Chưa có đoạn chat nào được lưu trữ.' })]),
      r.error ? el('small', { class: 'dim', text: '⚠️ Không đọc được mục lưu trữ của ChatGPT Work: ' + r.error }) : null);
  }

  // đọc danh sách đoạn chat của ChatGPT Work / Codex (chưa mở trong app)
  async function loadExternal(force) {
    if (C.extLoading) { if (force) C.extAgain = true; return; } // đang đọc → đọc lại ngay sau khi xong (vừa lưu trữ / xóa)
    if (!force && Date.now() - C.extAt < 30000) return;
    C.extLoading = true; C.extAt = Date.now(); renderSide();
    const r = await window.vp.chat.external().catch((e) => ({ threads: [], error: U.cleanErr(e) }));
    C.extLoading = false; C.external = r.threads || []; C.extErr = r.error || ''; C.codexProjects = r.projects || C.codexProjects;
    renderSide();
    if (C.extAgain) { C.extAgain = false; loadExternal(true); }
  }

  async function openExternal(t) {
    if (C.importing) return;
    C.importing = t.codexId; renderSide();
    try {
      const nt = await window.vp.chat.importExternal(t.codexId);
      C.external = C.external.filter((x) => x.codexId !== t.codexId);
      await loadThreads(); await openThread(nt.id);
    } catch (e) { U.toast('Không mở được đoạn chat: ' + U.cleanErr(e), true); }
    C.importing = null; renderSide();
  }

  async function addProject() {
    const dir = await window.vp.chooseDir(); if (!dir) return;
    if (projects().some((p) => p.dir === dir)) return U.toast('Dự án này đã có');
    const name = dir.split(/[\\/]/).filter(Boolean).pop() || dir;
    U.S.cfg.chatProjects = await window.vp.saveProjects([...projects(), { name, dir }]);
    renderSide(); newThread({ project: dir });
  }
  async function removeProject(dir) {
    U.S.cfg.chatProjects = await window.vp.saveProjects(projects().filter((p) => p.dir !== dir));
    U.toast('Đã bỏ dự án khỏi danh sách (thư mục vẫn còn nguyên)'); renderSide();
  }

  async function newThread(o = {}) {
    const last = ls.get('vp.chatPrefs', {});
    const t = await window.vp.chat.create({
      project: o.project !== undefined ? o.project : (C.cur ? C.cur.project : ''),
      model: o.model !== undefined ? o.model : (last.model || C.defaultModel || ''), effort: last.effort || '', sandbox: last.sandbox || 'workspace-write',
      agentId: o.agentId || curAgent()?.id || null, title: o.title,
    });
    C.atts = [];
    await loadThreads(); await openThread(t.id);
    return t;
  }

  async function openThread(id) {
    const t = await window.vp.chat.get(id); if (!t) { C.cur = null; ls.set('vp.chatCur', ''); renderMain(); return; }
    C.cur = t; ls.set('vp.chatCur', id);
    renderSide(); renderMain();
    $('#chInput').focus();
    // đoạn chat liên kết Codex: nếu bên ChatGPT Work vừa chat thêm thì nạp lại
    if (t.codexThread && !C.running.has(id)) {
      window.vp.chat.sync(id).then((nt) => {
        if (nt && C.cur && C.cur.id === id && nt.updatedAt !== t.updatedAt) { C.cur = nt; renderMain(); loadThreads(); }
      }).catch((e) => { // Codex chưa sẵn sàng – giữ bản đang có; đoạn chat còn rỗng thì báo lý do
        if (!(t.messages || []).some((m) => m.role === 'user') && C.cur && C.cur.id === id) U.toast('Chưa đọc được lịch sử từ ChatGPT Work: ' + U.cleanErr(e), true);
      });
    }
  }


  function openWhoMenu(anchor) {
    const { el } = U;
    document.querySelectorAll('.who-menu').forEach((n) => n.remove());
    const cur = curAgent();
    const menu = el('div', { class: 'who-menu' }, el('div', { class: 'sph', text: 'Ai phụ trách đoạn chat này?' }),
      ...agents().map((a) => el('button', { class: 'wm' + (cur && cur.id === a.id ? ' on' : ''), onclick: () => { menu.remove(); setAgent(a.id); } },
        U.avatar(a, 30), el('div', {}, el('b', { text: a.name + (a.isManager ? ' ★' : '') }), el('small', { text: `${a.title} · ${a.source === 'simi' ? (a.model ? modelLabel(a.model) : 'SIMI mặc định') : 'dùng model SIMI đang chọn'}` })))));
    document.body.append(menu);
    const r = anchor.getBoundingClientRect();
    menu.style.left = r.left + 'px'; menu.style.top = (r.top - menu.offsetHeight - 8) + 'px';
    const off = (e) => { if (!menu.contains(e.target)) { menu.remove(); document.removeEventListener('mousedown', off, true); } };
    setTimeout(() => document.addEventListener('mousedown', off, true), 0);
  }

  async function setAgent(id) {
    const a = U.agentById(id); if (!a) return;
    const prefs = ls.get('vp.chatPrefs', {}); prefs.agentId = id; ls.set('vp.chatPrefs', prefs);
    const m = agentModel(a);
    if (C.cur) C.cur = await window.vp.chat.update(C.cur.id, m === null ? { agentId: id } : { agentId: id, model: m });
    if (U.sfx) U.sfx('pop');
    U.toast(`${a.name} sẽ phụ trách đoạn chat này`);
    renderHead(); renderBar(); renderSide();
    if (!C.cur || !C.cur.messages.length) renderMain();
  }

  async function setThreadOpt(k, v) {
    const prefs = ls.get('vp.chatPrefs', {}); prefs[k] = v; ls.set('vp.chatPrefs', prefs);
    if (k === 'model') renderBar();
    if (!C.cur) return;
    C.cur = await window.vp.chat.update(C.cur.id, { [k]: v });
  }

  // ================= khung chính =================
  function renderHead() {
    const { el, icon } = U; const h = $('#chHead'); const t = C.cur;
    if (!t) { h.replaceChildren(el('div', { class: 'ch-title' }, el('b', { text: 'Chat với SIMI' }), el('small', { text: 'Mỗi đoạn chat nhớ toàn bộ cuộc trò chuyện · dùng được mọi skill SIMI' }))); return; }
    const a = agentOf(t);
    const title = el('input', { class: 'ch-tin', value: t.title, maxlength: 80, title: 'Bấm để đổi tên', onchange: async (e) => { C.cur = await window.vp.chat.update(t.id, { title: e.target.value.trim() || 'Đoạn chat' }); loadThreads(); } });
    h.replaceChildren(
      a ? U.avatar(a, 34) : el('img', { class: 'ch-hicon', src: 'icon.png', alt: '' }),
      el('div', { class: 'ch-title' }, title, el('small', {}, a ? `Phụ trách: ${a.name} · ${a.title} · ` : '', `${t.messages.filter((m) => m.role === 'user').length} lượt hỏi`)),
      el('span', { class: 'grow' }),
      el('button', { class: 'chip', title: t.project || 'Thư mục chat mặc định', onclick: () => window.vp.chat.openDir(t.project || '') }, icon('folder'), projName(t.project)),
      el('button', { class: 'btn icon mini', title: t.pinned ? 'Bỏ ghim' : 'Ghim lên đầu', onclick: async () => { C.cur = await window.vp.chat.update(t.id, { pinned: !t.pinned }); loadThreads(); renderHead(); } }, t.pinned ? '📌' : '📍'),
      el('button', { class: 'btn icon mini', title: 'Lưu trữ đoạn chat', disabled: C.running.has(t.id), onclick: () => archiveThreads([t], true) }, '📦'),
      el('button', { class: 'btn icon mini', title: 'Xóa đoạn chat', disabled: C.running.has(t.id), onclick: () => askDelete([t]) }, '🗑'));
  }

  function renderBar() {
    const { el } = U;
    const sel = $('#chModel'); if (!sel) return;
    const who = curAgent();
    if (who) $('#chWho').replaceChildren(U.avatar(who, 22), el('span', { text: who.name }), el('i', { class: 'caret', text: '▾' }));
    const cur = C.cur ? C.cur.model : (ls.get('vp.chatPrefs', {}).model || C.defaultModel || '');
    sel.replaceChildren(el('option', { value: '', text: '✨ ' + (C.defaultModel ? `Mặc định (${modelLabel(C.defaultModel)})` : 'Mặc định của Codex') }),
      ...C.models.map((m) => el('option', { value: m.id, text: '✨ ' + m.label + (m.speedTag ? '  ' + m.speedTag : ''), title: (m.note || m.id) + (m.speedTag ? ' · tốc độ đo thật trên Gateway 6 giờ qua (thời gian tới chữ đầu tiên)' : '') })));
    if (cur && !C.models.some((m) => m.id === cur)) sel.append(el('option', { value: cur, text: '✨ ' + cur }));
    sel.value = cur;
    const m = C.models.find((x) => x.id === (cur || C.defaultModel));
    const eff = $('#chEffort');
    [...eff.options].forEach((o) => { o.hidden = !!(o.value && m && m.efforts && m.efforts.length && !m.efforts.includes(o.value)); });
    eff.value = C.cur ? (C.cur.effort || '') : (ls.get('vp.chatPrefs', {}).effort || '');
    $('#chSandbox').value = C.cur ? (C.cur.sandbox || 'workspace-write') : (ls.get('vp.chatPrefs', {}).sandbox || 'workspace-write');
    const busy = C.cur && C.running.has(C.cur.id);
    const send = $('#chSend'); send.classList.toggle('stop', !!busy); send.title = busy ? 'Dừng' : 'Gửi (Enter)';
    if (!busy) delete send.dataset.stopping;
    send.replaceChildren(U.icon(busy ? 'stop' : 'send'));
  }

  // animateLast: số tin nhắn cuối có hiệu ứng xuất hiện (chỉ tin mới; vẽ lại khi đang stream thì không nháy)
  function renderMain(animateLast = 0) {
    renderHead(); renderBar(); renderAtts();
    const box = $('#chMsgs'); box.replaceChildren();
    if (!C.cur || !C.cur.messages.length) { box.append(emptyState()); return; }
    const msgs = C.cur.messages;
    msgs.forEach((m, i) => {
      const node = m.role === 'user' ? userMsg(m) : botMsg(m);
      if (i >= msgs.length - animateLast) node.classList.add('enter');
      box.append(node);
    });
    box.scrollTop = box.scrollHeight;
  }

  function emptyState() {
    const { el, icon } = U; const st = C.status;
    const a = curAgent();
    if (st && !st.loggedIn) {
      return el('div', { class: 'ch-hello setup' },
        el('img', { src: 'brand/simi.png', class: 'simi-big', alt: 'SIMI' }),
        el('h2', { text: 'Kết nối SIMI Gateway để bắt đầu' }),
        el('p', { text: 'Một key team là dùng được mọi model trong Combo, kèm toàn bộ skill SIMI (tạo ảnh, video, đọc PDF, trình duyệt…).' }),
        el('ol', { class: 'setup-steps' },
          el('li', {}, el('b', { text: 'Sao chép key team ' }), 'mà IT đã gửi cho bạn.'),
          el('li', {}, 'Bấm ', el('b', { text: 'Cài đặt SIMI' }), ', dán key vào ô rồi bấm ', el('b', { text: 'Cài đặt' }), ' – app tự cài, không cần mở PowerShell.'),
          el('li', {}, 'Thấy ', el('b', { text: '🎉 Xong' }), ' là bắt đầu chat được.')),
        el('div', { class: 'row' }, ...[
          el('button', { class: 'btn primary', onclick: () => window.VPSimiSetup.open({ mode: 'install', status: st }) }, icon('bolt'), 'Cài đặt SIMI'),
          !st.desktop ? el('button', { class: 'btn', title: 'App Codex chính thức của OpenAI (Microsoft Store)', onclick: () => window.vp.simi.getCodex().then(() => U.toast('Đã mở trang tải Codex')).catch(() => {}) }, '⬇️ Tải Codex') : null,
          el('button', { class: 'btn', onclick: () => loadMeta(true).then(() => { renderMain(); U.refreshAccounts(); }) }, icon('refresh'), 'Kiểm tra lại')].filter(Boolean)),
        el('small', { class: 'dim', text: st.codex && !st.codex.installed ? 'Máy chưa có Codex – SIMI sẽ tự cài khi bạn bấm Cài đặt.' : st.configured && !st.hasKey ? 'Đã có cấu hình nhưng thiếu key team – bấm Cài đặt SIMI và dán lại key.' : '' }));
    }
    const sk = QUICK.map((n) => C.skills.find((s) => s.name === n)).filter(Boolean).slice(0, 8);
    return el('div', { class: 'ch-hello' },
      a ? U.avatar(a, 84) : el('img', { src: 'icon.png', class: 'hello-icon', alt: '' }),
      el('h2', { text: a ? `Chào sếp! ${a.name} đây 👋` : 'Hôm nay mình làm gì nhỉ? ✨' }),
      el('p', { text: a ? `${a.title} · ${a.role}` : 'Hỏi gì cũng được, dán ảnh, kéo file vào, hoặc chọn một skill bên dưới.' }),
      sk.length ? el('div', { class: 'qskills' }, sk.map((s) => { const [e, l] = skillUi(s); return el('button', { class: 'qs', title: s.description, onclick: () => insertSkill(s.name) }, el('span', { class: 'qe', text: e }), el('b', { text: l }), el('small', { text: s.description.slice(0, 70) })); })) : null,
      el('button', { class: 'linkbtn qs-add', onclick: () => openSkillManager(C.skills.some((s) => s.mine) ? 'mine' : 'new') }, '📚 Thêm skill của riêng bạn / quản lý skill'),
      el('div', { class: 'qtips' },
        el('span', {}, '⌨️ ', el('b', { text: '/' }), ' chọn skill'), el('span', {}, '🖱️ ', el('b', { text: '@' }), ' gọi Máy tính, plugin'), el('span', {}, '📋 ', el('b', { text: 'Ctrl+V' }), ' dán ảnh'),
        el('span', {}, '📁 ', el('b', { text: projName(C.cur ? C.cur.project : '') }), ' là thư mục làm việc')));
  }

  // $skill và @plugin trong tin nhắn → nhãn màu
  const skillChips = (text, mentions = []) => {
    const { el } = U; const out = [];
    const names = mentions.map((x) => x.name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
    const re = new RegExp('\\$([a-z0-9][\\w-]*)' + (names.length ? '|@(' + names.join('|') + ')' : ''), 'gi');
    let last = 0; let m;
    while ((m = re.exec(text))) {
      if (m.index > last) out.push(text.slice(last, m.index));
      if (m[2]) {
        const x = mentions.find((y) => y.name.toLowerCase() === m[2].toLowerCase());
        out.push(el('span', { class: 'skchip mention', title: x.kind === 'plugin' ? 'Plugin ' + x.id : 'Công cụ của Văn Phòng AI' }, (x.kind === 'tool' ? (x.id === 'vp_computer' ? '🖱️ ' : x.id === 'vp_browser' ? '🌐 ' : x.id === 'canva_web' ? '🎨 ' : '🧭 ') : /computer/i.test(x.id) ? '🖥️ ' : '🧩 ') + x.name));
      } else {
        const s = C.skills.find((x) => x.name === m[1]);
        out.push(s ? el('span', { class: 'skchip', title: s.description }, skillUi(s)[0] + ' ' + skillUi(s)[1]) : m[0]);
      }
      last = m.index + m[0].length;
    }
    out.push(text.slice(last));
    return out;
  };

  function thumb(path, name) {
    const { el } = U;
    const img = el('img', { alt: name || '', class: 'thumb' });
    const hit = C.imgCache.get(path);
    if (hit) img.src = hit;
    else window.vp.chat.fileData(path).then((u) => { if (u) { C.imgCache.set(path, u); img.src = u; } }).catch(() => img.replaceWith(el('span', { class: 'fchip', text: '🖼 ' + (name || 'ảnh') })));
    return img;
  }

  function userMsg(m) {
    const { el } = U;
    return el('div', { class: 'cmsg me' },
      el('div', { class: 'ubub' },
        m.attachments && m.attachments.length ? el('div', { class: 'matts' }, m.attachments.map((a) => a.image
          ? el('button', { class: 'mimg', title: a.path, onclick: () => window.vp.chat.openFile(a.path) }, thumb(a.path, a.name))
          : el('button', { class: 'fchip', title: a.path, onclick: () => window.vp.chat.openFile(a.path) }, '📎 ' + a.name))) : null,
        m.text ? el('div', { class: 'mtext' }, skillChips(m.text, m.mentions || [])) : null));
  }

  const STEP_IC = { cmd: '⌘', tool: '🧩', web: '🔎', file: '📝', think: '💭', plan: '🗒️' };
  const TOOL_IC = { vp_browser: '🌐', 'computer-use': '🖥️', cua_repl: '🖥️', simi_browser: '🧭', vp_computer: '🖱️' };
  const STEP_NAME = { cmd: 'Chạy lệnh', tool: 'Công cụ', web: 'Tìm web', file: 'Sửa file', think: 'Suy nghĩ', plan: 'Kế hoạch' };

  function stepEl(s) {
    const { el } = U;
    const live = s.status === 'in_progress';
    const bad = s.status === 'failed' || (s.exit !== undefined && s.exit !== null && s.exit !== 0);
    const detail = s.sk === 'plan'
      ? el('ul', { class: 'plan' }, (s.items || []).map((x) => el('li', { class: x.done ? 'done' : '', text: x.text })))
      : s.output || s.shot ? el('div', { class: 'sdetail' }, s.output ? el('pre', { text: s.output }) : null,
        s.shot ? el('button', { class: 'sshot', title: 'Ảnh màn hình – bấm để mở', onclick: () => window.vp.chat.openFile(s.shot) }, thumb(s.shot, 'màn hình')) : null) : null;
    const row = el(detail ? 'details' : 'div', { class: 'step' + (live ? ' live' : '') + (bad ? ' bad' : '') },
      el(detail ? 'summary' : 'div', { class: 'srow' }, el('span', { class: 'sic', text: TOOL_IC[s.server] || STEP_IC[s.sk] || '•' }), el('b', { text: STEP_NAME[s.sk] || 'Bước' }),
        el('code', { text: String(s.title || '').replace(/\s+/g, ' ').slice(0, 160) }), live ? el('span', { class: 'spin' }) : bad ? el('span', { class: 'sx', text: '✕' }) : el('span', { class: 'sok', text: '✓' })),
      detail);
    return row;
  }

  function botMsg(m) {
    const { el, icon } = U;
    const a = (m.agentId && U.agentById(m.agentId)) || agentOf(C.cur);
    const body = el('div', { class: 'mbody' });
    const blocks = m.blocks || [];
    let group = null;
    blocks.forEach((b, i) => {
      if (b.kind === 'step') {
        if (!group) {
          const n = blocks.slice(i).findIndex((x) => x.kind !== 'step'); const cnt = n < 0 ? blocks.length - i : n;
          const steps = blocks.slice(i, i + cnt);
          const live = steps.some((s) => s.status === 'in_progress') || (m.status === 'running' && i + cnt === blocks.length);
          const kinds = [...new Set(steps.map((s) => STEP_NAME[s.sk]))].join(' · ');
          const key = (C.cur ? C.cur.id : '') + ':' + m.ts + ':' + i;
          group = el('details', { class: 'csteps' + (live ? ' live' : ''), ontoggle: (e) => { C.open['s' + key] = e.target.open; } }, el('summary', {}, live ? el('span', { class: 'spin' }) : el('span', { text: '⚙️' }), ` ${cnt} bước`, el('small', { text: ' · ' + kinds })));
          if (C.open['s' + key] || (live && C.open['s' + key] !== false)) group.open = true;
          body.append(group);
        }
        group.append(stepEl(b));
      } else {
        group = null;
        if (b.kind === 'text') body.append(el('div', { class: 'md', html: window.renderMd(b.text) }));
        else if (b.kind === 'note') body.append(el('div', { class: 'mnote', text: '⚠️ ' + b.text }));
        else if (b.kind === 'ask') body.append(askEl(b, m));
      }
    });
    if (m.status === 'running' && !blocks.length) body.append(el('div', { class: 'typing' }, el('i'), el('i'), el('i'), el('span', { text: `${a ? a.name : 'SIMI'} đang suy nghĩ…` })));
    else if (m.status === 'running' && blocks.length && blocks[blocks.length - 1].kind === 'text') body.append(el('div', { class: 'typing small' }, el('i'), el('i'), el('i')));
    if (m.files && m.files.length) {
      body.append(el('div', { class: 'mfiles' }, m.files.map((f) => el('div', { class: 'mfile' + (f.image ? ' img' : '') },
        f.image ? el('button', { class: 'mprev', title: 'Mở ảnh', onclick: () => window.vp.chat.openFile(f.path) }, thumb(f.path, f.name)) : el('span', { class: 'fic', text: fileIcon(f.name) }),
        el('div', { class: 'fmeta' }, el('b', { text: f.name, title: f.path }),
          el('span', {}, el('button', { class: 'linkbtn small', text: 'Mở', onclick: () => window.vp.chat.openFile(f.path) }), ' · ', el('button', { class: 'linkbtn small', text: 'Mở thư mục', onclick: () => window.vp.chat.showFile(f.path) })))))));
    }
    if (m.error) body.append(el('div', { class: 'merr' }, el('span', { text: (m.status === 'stopped' ? '⏹ ' : '⚠️ ') + m.error }),
      m.status !== 'stopped' && /SIMI|Codex|key/i.test(m.error) ? el('button', { class: 'btn mini', text: 'Mở Kết nối', onclick: () => U.openAccounts() }) : null));
    const txt = blocks.filter((b) => b.kind === 'text').map((b) => b.text).join('\n\n');
    const foot = el('div', { class: 'mfoot' },
      el('span', { text: modelLabel(m.model) }),
      m.ms ? el('span', { text: (m.fast ? '⚡ ' : '') + (m.ms / 1000).toFixed(1) + ' giây', title: m.fast ? 'Trả lời nhanh: gửi thẳng tới model, không qua các bước công cụ' : '' }) : null,
      txt ? el('button', { class: 'linkbtn small', onclick: () => { navigator.clipboard.writeText(txt); U.toast('Đã chép câu trả lời'); } }, icon('copy'), 'Chép') : null);
    return el('div', { class: 'cmsg bot' + (m.status === 'running' ? ' running' : '') },
      a ? U.avatar(a, 32) : el('img', { class: 'bav', src: 'icon.png', alt: '' }),
      el('div', { class: 'bwrap' }, el('div', { class: 'bname' }, el('b', { text: a ? a.name : 'SIMI' }), a ? el('small', { text: ' · ' + a.title }) : null), body, m.status === 'running' ? null : foot));
  }
  const fileIcon = (n) => (/\.(mp4|mov|webm)$/i.test(n) ? '🎬' : /\.(mp3|wav|m4a)$/i.test(n) ? '🎵' : /\.pdf$/i.test(n) ? '📕' : /\.docx?$/i.test(n) ? '📘' : /\.(xlsx?|csv)$/i.test(n) ? '📗' : /\.pptx?$/i.test(n) ? '📙' : /\.(html?|md|txt)$/i.test(n) ? '📄' : '📦');

  // ================= hỏi quyền (Codex xin phép) =================
  function askEl(b, m) {
    const { el } = U;
    const live = !b.answer && m.status === 'running';
    const vals = {};
    const fields = (b.fields || []).map((f) => {
      vals[f.name] = f.value ?? '';
      let input;
      if (f.type === 'choice') {
        input = el('div', { class: 'aopts' }, f.options.map((o) => el('button', {
          class: 'aopt', title: o.hint || '', disabled: !live,
          onclick: (e) => { vals[f.name] = o.value; e.currentTarget.parentNode.querySelectorAll('.aopt').forEach((n) => n.classList.toggle('on', n === e.currentTarget)); },
        }, o.label)), f.other ? el('input', { class: 'ain', placeholder: 'Ý khác…', disabled: !live, oninput: (e) => { vals[f.name] = e.target.value; } }) : null);
      } else if (f.type === 'bool') {
        input = el('label', { class: 'achk' }, el('input', { type: 'checkbox', disabled: !live, onchange: (e) => { vals[f.name] = e.target.checked; } }), f.hint || 'Đồng ý');
      } else {
        input = el('input', { class: 'ain', type: f.secret ? 'password' : f.type === 'number' ? 'number' : 'text', value: String(f.value || ''), placeholder: f.hint || '', disabled: !live, oninput: (e) => { vals[f.name] = e.target.value; } });
      }
      return el('div', { class: 'afield' }, el('b', { text: f.label }), f.hint && f.type !== 'bool' && f.type !== 'text' ? el('small', { text: f.hint }) : null, input);
    });
    const answer = async (o) => {
      if (o.open) window.vp.openUrl(o.open);
      try { await window.vp.chat.answer(C.cur.id, b.id, o.id, vals); } catch (e) { U.toast(U.cleanErr(e), true); }
    };
    return el('div', { class: 'cask' + (live ? ' live' : '') + (b.answer ? ' done' : '') },
      el('div', { class: 'ahead' }, el('span', { class: 'aic', text: b.icon || '🔐' }), el('div', {}, el('b', { text: b.title }), b.text ? el('small', { text: b.text }) : null)),
      b.detail ? el('pre', { class: 'adetail', text: String(b.detail).slice(0, 1200) }) : null,
      ...fields,
      b.answer ? el('div', { class: 'aans', text: b.answer })
        : live ? el('div', { class: 'abtns' }, b.options.map((o) => el('button', { class: 'btn ' + (o.style === 'primary' ? 'primary' : o.style === 'ghost' ? 'ghost' : ''), title: o.title || '', onclick: () => answer(o) }, o.label)))
          : el('div', { class: 'aans', text: 'Đã hết hạn' }));
  }

  // ================= 🧰 Công cụ: Computer Use, trình duyệt SIMI, plugin =================
  const ST_TEXT = { runtimeMissing: ['bad', 'Thiếu runtime'], unsupported: ['wait', 'Chưa hỗ trợ'], connected: ['ok', 'Sẵn sàng'], ready: ['ok', 'Sẵn sàng'], starting: ['wait', 'Đang khởi động…'], notStarted: ['ok', 'Đã cài – bật khi dùng'], failed: ['bad', 'Lỗi'], disabled: ['bad', 'Đang tắt'], authenticationRequired: ['wait', 'Cần đăng nhập'], notInstalled: ['bad', 'Chưa cài'], cancelled: ['bad', 'Đã hủy'] };
  async function openTools(anchor) {
    const { el } = U;
    document.querySelectorAll('.tools-pop').forEach((n) => n.remove());
    const pop = el('div', { class: 'tools-pop' }, el('div', { class: 'sph', text: '🧰 Công cụ cho đoạn chat' }), el('div', { class: 'tp-load' }, el('span', { class: 'spin' }), ' Đang kiểm tra Computer Use, trình duyệt, plugin…'));
    document.body.append(pop);
    const place = () => { const r = anchor.getBoundingClientRect(); pop.style.left = Math.max(8, Math.min(r.left, innerWidth - pop.offsetWidth - 8)) + 'px'; pop.style.top = Math.max(8, r.top - pop.offsetHeight - 8) + 'px'; };
    place();
    const off = (e) => { if (!pop.contains(e.target) && e.target !== anchor) { pop.remove(); document.removeEventListener('mousedown', off, true); } };
    setTimeout(() => document.addEventListener('mousedown', off, true), 0);
    const [info, pc] = await Promise.all([
      window.vp.chat.tools().catch((e) => ({ error: U.cleanErr(e), plugins: [], mcp: [] })),
      window.vp.computer.check().catch(() => null),
    ]);
    C.tools = info;
    const badge = (st) => { const [k, t] = ST_TEXT[st] || ['wait', st || '—']; return el('span', { class: 'tp-st ' + k, text: t }); };
    const tryIt = (text) => { pop.remove(); const ta = $('#chInput'); ta.value = text; ta.focus(); onInput(); };
    // công cụ điều khiển máy của Văn Phòng AI – dùng được với mọi app, kể cả trình duyệt
    const pcRow = pc ? el('div', { class: 'tp-card main' },
      el('div', { class: 'tp-h' }, el('span', { class: 'tp-ic', text: '🖱️' }), el('div', {}, el('b', { text: 'Computer Use · Điều khiển máy tính' }),
        el('small', { text: 'AI nhìn màn hình rồi tự bấm, gõ, cuộn, kéo thả, mở app – mọi app kể cả Chrome. Lần đầu mỗi đoạn chat sẽ hỏi bạn cho phép; app tự thu nhỏ khi AI đang làm, xong hiện lại.' })),
        badge(!pc.enabled ? 'disabled' : pc.ok ? 'ready' : 'authenticationRequired')),
      pc.issues && pc.issues.length ? el('div', { class: 'tp-err', text: pc.issues.join(' · ') }) : null,
      el('div', { class: 'tp-act' },
        pc.enabled && !pc.ok && pc.platform === 'darwin' ? el('button', { class: 'btn primary mini', onclick: async () => { await window.vp.computer.grant(); U.toast('Bật VanPhongAI trong danh sách rồi mở lại app'); } }, '🔐 Cấp quyền cho Mac') : null,
        pc.enabled ? el('button', { class: 'btn mini', onclick: () => { C.mentions = [{ kind: 'tool', id: 'vp_computer', name: 'Máy tính', icon: '🖱️' }]; tryIt('@Máy tính mở Notepad (hoặc TextEdit trên Mac) rồi gõ "Xin chào từ Văn Phòng AI"'); } }, '▶ Dùng thử')
          : el('small', { class: 'dim', text: 'Đang tắt – bật lại trong Cài đặt.' }))) : null;
    const cu = info.computerUse;
    const setupResult = el('div', { class: 'dim small', role: 'status', 'aria-live': 'polite' });
    const cuRow = el('div', { class: 'tp-card' },
      el('div', { class: 'tp-h' }, el('span', { class: 'tp-ic', text: '🖥️' }), el('div', {}, el('b', { text: 'Computer Use của ChatGPT (plugin)' }), el('small', { text: 'Plugin OpenAI nguyên bản: chọn cửa sổ, đọc giao diện và thao tác bằng runtime @oai/sky trên Windows. App ưu tiên plugin khi runtime đã nạp; không cần gọi model trực tiếp ngoài Gateway.' })), badge(cu ? (cu.installed ? cu.status : 'notInstalled') : 'notInstalled')),
      cu && cu.note ? el('div', { class: 'tp-err', text: cu.note }) : null,
      cu && cu.error ? el('div', { class: 'tp-err', text: cu.error }) : null,
      el('div', { class: 'tp-act' },
        cu && cu.native ? el('button', { class: 'btn primary mini', onclick: async (e) => {
          const b = e.currentTarget; b.disabled = true; b.textContent = 'Đang kiểm tra…';
          try { const r = await window.vp.chat.checkComputerUse(); U.toast('Plugin OpenAI hoạt động · ' + r.appCount + ' ứng dụng (chỉ đọc, không thao tác)'); }
          catch (er) { U.toast('Kiểm tra chưa đạt: ' + U.cleanErr(er), true); }
          finally { b.disabled = false; b.textContent = 'Kiểm tra runtime OpenAI'; }
        } }, 'Kiểm tra runtime OpenAI') : null,
        !cu || !cu.native ? el('button', { class: 'btn primary mini', onclick: async (e) => {
          const b = e.currentTarget; b.disabled = true; b.textContent = 'Đang kiểm tra và cài bổ sung…';
          setupResult.textContent = 'Đang kiểm tra plugin. Có thể cần vài phút; không đóng app trong lúc cài.';
          try {
            const r = await window.vp.chat.setupComputerUse();
            setupResult.textContent = r.message + (r.detail ? ' Chi tiết: ' + r.detail : '');
            U.toast(r.ok ? 'Computer Use OpenAI đã kiểm tra thành công' : 'Cần hoàn tất thiết lập Computer Use', !r.ok);
            if (r.ok) { pop.remove(); await openTools(anchor); }
          } catch (er) { setupResult.textContent = 'Chưa hoàn tất: ' + U.cleanErr(er); }
          finally { b.disabled = false; b.textContent = 'Cài bổ sung Computer Use'; place(); }
        } }, 'Cài bổ sung Computer Use') : null,
        el('button', { class: 'btn mini', onclick: () => window.vp.openUrl('https://learn.chatgpt.com/docs/computer-use') }, 'Hướng dẫn cài OpenAI'),
        cu && cu.usable ? el('button', { class: 'btn mini', onclick: () => { C.mentions = [{ kind: 'plugin', id: cu.id, name: 'Computer Use (ChatGPT)', icon: '🖥️' }]; tryIt('@Computer Use (ChatGPT) '); } }, '▶ Dùng thử') : null,
        !cu ? el('small', { class: 'dim', text: 'Chưa phát hiện plugin OpenAI. Bấm Cài bổ sung để kiểm tra và thiết lập.' }) : null), setupResult);
    const br = info.browser || {};
    const brRow = el('div', { class: 'tp-card' },
      el('div', { class: 'tp-h' }, el('span', { class: 'tp-ic', text: '🧭' }), el('div', {}, el('b', { text: 'Trình duyệt SIMI' }), el('small', { text: 'Đọc trang cần đăng nhập (Shopee, Lazada, Facebook, SharePoint…) bằng Chrome riêng của SIMI – đăng nhập 1 lần, lần sau tự nhớ.' })), badge(br.status)),
      br.error ? el('div', { class: 'tp-err', text: br.error }) : null,
      el('div', { class: 'tp-act' },
        br.configured ? el('button', { class: 'btn mini', onclick: async (e) => {
          const b = e.currentTarget; b.disabled = true;
          try { await window.vp.chat.openBrowser(''); U.toast('Đã mở Chrome SIMI – đăng nhập các trang cần dùng rồi quay lại chat'); } catch (er) { U.toast('Không mở được: ' + U.cleanErr(er), true); }
          b.disabled = false;
        } }, '🔑 Mở để đăng nhập') : el('small', { class: 'dim', text: 'Chưa cài – bấm Cập nhật SIMI để cài trình duyệt SIMI.' }),
        br.configured ? el('button', { class: 'btn mini', onclick: () => tryIt(C.skills.some((s) => s.name === 'simi-trinh-duyet') ? '$simi-trinh-duyet Đọc trang ' : 'Dùng trình duyệt SIMI đọc trang ') }, '▶ Dùng thử') : null));
    const wbRow = window.VPBrowser ? el('div', { class: 'tp-card main' },
      el('div', { class: 'tp-h' }, el('span', { class: 'tp-ic', text: '🌐' }), el('div', {}, el('b', { text: 'Trình duyệt cạnh chat' }),
        el('small', { text: 'Giống Claude Desktop: trang web hiện ngay bên phải, AI tự mở trang, bấm, gõ, điền form – bạn xem trực tiếp và bấm tiếp được. Đăng nhập 1 lần trong khung, lần sau tự nhớ.' })), badge('ready')),
      el('div', { class: 'tp-act' },
        el('button', { class: 'btn mini', onclick: () => { pop.remove(); window.VPBrowser.toggle(true); } }, '🌐 Mở khung'),
        el('button', { class: 'btn mini', title: 'Mở Canva trong khung trình duyệt – đăng nhập 1 lần, AI thiết kế giúp', onclick: () => { pop.remove(); window.VPBrowser.go('https://www.canva.com/'); } }, '🎨 Canva'),
        el('button', { class: 'btn mini', onclick: () => { C.mentions = [{ kind: 'tool', id: 'vp_browser', name: 'Trình duyệt', icon: '🌐' }]; tryIt('@Trình duyệt mở google.com tìm "giá vàng hôm nay" rồi tóm tắt 3 dòng'); } }, '▶ Dùng thử'))) : null;
    const others = (info.plugins || []).filter((p) => p.installed && p.name !== 'computer-use');
    const plRow = others.length ? el('div', { class: 'tp-list' }, el('small', { class: 'dim', text: 'Plugin đã cài: ' }), ...others.map((p) => el('span', { class: 'tp-chip', title: p.description, text: p.title }))) : null;
    const eng = info.engine || {};
    pop.replaceChildren(...[el('div', { class: 'sph', text: '🧰 Công cụ cho đoạn chat' }), wbRow, pcRow, brRow, cuRow, plRow,
      info.error ? el('div', { class: 'tp-err', text: info.error }) : null,
      el('div', { class: 'tp-foot' },
        el('small', { class: 'dim', title: eng.cmd || '', text: eng.desktop ? '⚙️ Đang dùng Codex của ChatGPT Work' : '⚙️ Đang dùng Codex CLI' }),
        el('button', { class: 'linkbtn small', onclick: () => { pop.remove(); openSkillManager(); } }, '📚 Quản lý skill'),
        el('button', { class: 'linkbtn small', onclick: () => { pop.remove(); runSimiUpdate(); } }, '🔄 Cập nhật SIMI'))].filter(Boolean));
    place();
  }

  // ================= 📚 Quản lý skill: tạo mới, sửa, nhập từ file / thư mục / zip, xoá =================
  const SKILL_TEMPLATE = '## Mục tiêu\nSkill này giúp …\n\n## Các bước\n1. Hỏi lại người dùng nếu thiếu thông tin cần thiết (…)\n2. …\n3. …\n\n## Kết quả\n- Trả lời bằng tiếng Việt, ngắn gọn.\n- Nếu tạo file: lưu vào thư mục làm việc và báo tên file.\n';
  async function openSkillManager(tab = 'mine', edit = null) {
    const { el } = U;
    const S = { tab, edit };
    const put = (node, ...kids) => node.replaceChildren(...kids.filter(Boolean)); // bỏ các mục rỗng (null) thay vì hiện chữ "null"
    const body = el('div', { class: 'skm' });
    const tabs = el('div', { class: 'skm-tabs' });
    const pane = el('div', { class: 'skm-pane' });
    body.append(tabs, pane);
    // chỉ nạp lại danh sách skill (không gọi lại Gateway lấy model)
    const refresh = async () => { const fresh = await window.vp.chat.skills().catch(() => null); if (fresh) { C.skills = fresh; renderStatus(); if (!C.cur) renderMain(); } };
    const go = (t, e = null) => { S.tab = t; S.edit = e; render(); };
    const useSkill = (name) => { U.closeModal(); if (C.view !== 'chat') setView('chat'); insertSkill(name); $('#chInput').focus(); onInput(); };
    const row = (sk, actions) => { const [e, l] = skillUi(sk); return el('div', { class: 'skm-row' }, el('span', { class: 'qe', text: e }), el('div', { class: 'skm-info' }, el('b', {}, l, el('code', { text: ' $' + sk.name })), el('small', { text: sk.description || '' })), el('div', { class: 'skm-act' }, ...actions)); };

    function renderMine() {
      const mine = C.skills.filter((x) => x.mine);
      const others = C.skills.filter((x) => !x.mine);
      const del = (sk) => el('button', { class: 'btn danger mini', title: 'Chuyển vào Thùng rác', onclick: async (ev) => {
        const b = ev.currentTarget;
        if (!b.classList.contains('armed')) { b.classList.add('armed'); b.textContent = 'Xoá thật?'; setTimeout(() => { b.classList.remove('armed'); b.textContent = '🗑'; }, 3000); return; }
        try { await window.vp.skills.remove(sk.name); U.toast(`Đã xoá skill ${sk.name} (vào Thùng rác)`); await refresh(); render(); } catch (er) { U.toast(U.cleanErr(er), true); }
      } }, '🗑');
      put(pane, 
        el('div', { class: 'skm-h' }, el('b', { text: `Skill của bạn (${mine.length})` }), el('small', { text: 'Bạn tự tạo hoặc nhập – sửa, xoá được. Gõ / trong ô chat để gọi.' })),
        mine.length ? el('div', { class: 'skm-list' }, mine.map((sk) => row(sk, [
          el('button', { class: 'btn mini', onclick: () => useSkill(sk.name) }, '▶ Dùng'),
          el('button', { class: 'btn mini', onclick: async () => { try { go('new', await window.vp.skills.read(sk.name)); } catch (er) { U.toast(U.cleanErr(er), true); } } }, '✏️ Sửa'),
          del(sk)])))
          : el('div', { class: 'skm-empty' }, el('p', { text: 'Chưa có skill riêng. Skill là “bí kíp” bạn dạy AI một lần – ví dụ cách viết báo cáo tuần của phòng, mẫu báo giá, quy trình kiểm tra hợp đồng – rồi lần sau chỉ cần gọi tên.' }),
            el('div', { class: 'skm-cta' }, el('button', { class: 'btn primary', onclick: () => go('new') }, '＋ Tạo skill mới'), el('button', { class: 'btn', onclick: () => go('import') }, '📦 Nhập từ file'))),
        others.length ? el('details', { class: 'skm-more' }, el('summary', { text: `Skill SIMI & hệ thống (${others.length}) – có sẵn, cập nhật tự động` }),
          el('div', { class: 'skm-list' }, others.map((sk) => row(sk, [el('button', { class: 'btn mini', onclick: () => useSkill(sk.name) }, '▶ Dùng')])))) : null);
    }

    function renderNew() {
      const e = S.edit;
      const title = el('input', { placeholder: 'Ví dụ: Báo cáo tuần phòng Kinh doanh', value: e ? e.name : '', disabled: !!e });
      const slug = el('code', { class: 'skm-slug' });
      const desc = el('textarea', { rows: 2, placeholder: 'Ví dụ: Viết báo cáo tuần của phòng Kinh doanh theo mẫu công ty. Dùng khi người dùng nhờ làm báo cáo tuần, tổng kết tuần, báo cáo doanh số.' });
      desc.value = e ? e.description : '';
      const guide = el('textarea', { rows: 12, class: 'skm-guide' });
      guide.value = e ? e.body : SKILL_TEMPLATE;
      const nameOf = () => (e ? e.name : slugify(title.value));
      const sync = () => { const n = nameOf(); slug.textContent = n ? '$' + n : ''; slug.classList.toggle('bad', !!n && /^(simi|muse|updatesimi)/.test(n)); };
      title.addEventListener('input', sync); sync();
      const err = el('div', { class: 'tp-err', hidden: true });
      const save = el('button', { class: 'btn primary', onclick: async () => {
        err.hidden = true; save.disabled = true;
        try {
          const name = nameOf();
          if (!name) throw new Error('Chưa đặt tên skill');
          await window.vp.skills.save({ name, description: desc.value, body: guide.value, overwrite: !!e });
          U.toast(e ? `Đã lưu thay đổi skill ${name}` : `Đã tạo skill ${name} – gõ / trong ô chat để dùng`);
          await refresh(); go('mine');
        } catch (er) { err.textContent = U.cleanErr(er); err.hidden = false; } finally { save.disabled = false; }
      } }, e ? '💾 Lưu thay đổi' : '💾 Tạo skill');
      put(pane, 
        el('div', { class: 'field' }, el('label', { text: e ? 'Tên skill' : 'Tên skill' }), el('div', { class: 'skm-name' }, title, slug), el('small', { text: e ? 'Không đổi được tên – muốn đổi thì tạo skill mới.' : 'Tên gọi trong ô chat được tạo tự động (chữ không dấu).' })),
        el('div', { class: 'field' }, el('label', { text: 'Khi nào dùng skill này?' }), desc, el('small', { text: 'Quan trọng nhất: AI đọc dòng này để tự biết lúc nào nên dùng skill. Ghi rõ việc gì + các cách người dùng hay nói.' })),
        el('div', { class: 'field' }, el('label', { text: 'Hướng dẫn cho AI' }), guide, el('small', { text: 'Viết như dặn một nhân viên mới: mục tiêu, các bước, mẫu kết quả. Hỗ trợ Markdown.' + (e && e.files.length ? ` · Skill có thêm ${e.files.length} file đi kèm (giữ nguyên).` : '') })),
        err, el('div', { class: 'skm-cta' }, save, el('button', { class: 'btn ghost', onclick: () => go('mine') }, 'Huỷ')));
      (e ? desc : title).focus();
    }

    function renderImport() {
      const out = el('div', { class: 'skm-result' });
      const run = async (paths, overwrite = false) => {
        if (!paths.length) return;
        put(out, el('div', { class: 'tp-load' }, el('span', { class: 'spin' }), ' Đang nhập skill…'));
        let r; try { r = await window.vp.skills.import(paths, overwrite); } catch (er) { r = { imported: [], conflicts: [], errors: [{ error: U.cleanErr(er) }] }; }
        if (r.imported.length) await refresh();
        put(out, 
          ...r.imported.map((x) => el('div', { class: 'skm-ok' }, `✓ ${x.name}`, el('small', { text: ` · ${x.files} file` + (x.scripts ? ` · có ${x.scripts} script chạy trên máy – chỉ dùng nếu bạn tin nguồn này` : '') }))),
          r.conflicts.length ? el('div', { class: 'skm-warn' }, `Đã có skill trùng tên: ${r.conflicts.join(', ')}. `, el('button', { class: 'btn mini', onclick: () => run(paths, true) }, 'Ghi đè (bản cũ vào Thùng rác)')) : null,
          ...r.errors.map((x) => el('div', { class: 'tp-err', text: `${x.source || ''}${x.name ? ' (' + x.name + ')' : ''}: ${x.error}` })),
          r.imported.length ? el('div', { class: 'skm-cta' }, el('button', { class: 'btn primary', onclick: () => useSkill(r.imported[0].name) }, '▶ Dùng ngay'), el('button', { class: 'btn', onclick: () => go('mine') }, 'Xem danh sách')) : null);
      };
      const drop = el('div', { class: 'skm-drop' }, el('div', { class: 'skm-drop-ic', text: '📦' }), el('b', { text: 'Kéo thả skill vào đây' }),
        el('small', { text: 'Thư mục có SKILL.md, file .zip / .skill (gói skill của Claude, Codex…) hoặc một file SKILL.md' }),
        el('div', { class: 'skm-cta' }, el('button', { class: 'btn', onclick: async () => run(await window.vp.skills.pick('file')) }, '📄 Chọn file…'), el('button', { class: 'btn', onclick: async () => run(await window.vp.skills.pick('folder')) }, '📁 Chọn thư mục…')));
      drop.addEventListener('dragover', (ev) => { ev.preventDefault(); drop.classList.add('over'); });
      drop.addEventListener('dragleave', () => drop.classList.remove('over'));
      drop.addEventListener('drop', (ev) => { ev.preventDefault(); ev.stopPropagation(); drop.classList.remove('over'); run([...ev.dataTransfer.files].map((f) => window.vp.skills.pathOf(f)).filter(Boolean)); });
      put(pane, drop, el('small', { class: 'skm-note', text: '⚠️ Skill có thể kèm script chạy trên máy bạn – chỉ nhập skill từ nguồn tin cậy (đồng nghiệp, nhà cung cấp chính thức).' }), out);
    }

    function render() {
      const t = (id, label) => el('button', { class: 'skm-tab' + (S.tab === id ? ' on' : ''), onclick: () => go(id) }, label);
      tabs.replaceChildren(t('mine', '📚 Skill của bạn'), t('new', S.edit ? '✏️ Sửa skill' : '＋ Tạo mới'), t('import', '📦 Nhập từ file'));
      if (S.tab === 'new') renderNew(); else if (S.tab === 'import') renderImport(); else renderMine();
    }
    U.openModal('📚 Skill', body, [el('button', { class: 'btn ghost', title: 'Mở thư mục chứa skill trên máy', onclick: () => window.vp.skills.openDir() }, '📂 Mở thư mục skill'), el('button', { class: 'btn primary', text: 'Xong', onclick: U.closeModal })], 'wide');
    render();
    await refresh(); // có thể vừa chép skill vào thư mục bằng tay
    if (S.tab === 'mine') render();
  }
  const slugify = (s) => String(s || '').normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/đ/g, 'd').replace(/Đ/g, 'd').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 64).replace(/-+$/, '');

  // cập nhật skill / công cụ / plugin SIMI ngay trong app – bảng các bước dễ hiểu (simi-setup.js), không hiện dòng lệnh
  function runSimiUpdate() { window.VPSimiSetup.open({ mode: 'update' }); }
  function onSimiUpdate(e) {
    window.VPSimiSetup.onEvent(e);
    if (e.ev === 'done') { loadMeta(true); U.refreshAccounts && U.refreshAccounts(); }
  }

  // ================= đính kèm =================
  function renderAtts() {
    const { el } = U; const box = $('#chAtts');
    box.replaceChildren(...C.atts.map((a, i) => el('div', { class: 'att' + (a.image ? ' img' : '') },
      a.image ? thumb(a.path, a.name) : el('span', { text: '📎 ' + a.name }),
      el('button', { title: 'Bỏ', onclick: () => { C.atts.splice(i, 1); renderAtts(); } }, '×'))));
    box.classList.toggle('hidden', !C.atts.length);
  }
  async function pickFiles() { const ps = await window.vp.chat.pickFiles(); ps.forEach((p) => C.atts.push({ path: p, name: p.split(/[\\/]/).pop(), image: /\.(png|jpe?g|gif|webp|bmp)$/i.test(p) })); renderAtts(); }
  async function addFiles(files) {
    for (const f of files) {
      let p = window.vp.chat.pathOf(f);
      if (!p) {
        if (f.size > 30 * 1024 * 1024) { U.toast('File quá lớn (tối đa 30MB)', true); continue; }
        p = await window.vp.chat.upload(C.cur ? C.cur.id : 'chung', f.name || 'anh.png', new Uint8Array(await f.arrayBuffer()));
      }
      C.atts.push({ path: p, name: f.name || p.split(/[\\/]/).pop(), image: /^image\//.test(f.type) || /\.(png|jpe?g|gif|webp|bmp)$/i.test(p) });
    }
    renderAtts();
  }
  function onPaste(e) {
    const files = [...(e.clipboardData && e.clipboardData.files || [])];
    if (files.length) { e.preventDefault(); addFiles(files.map((f, i) => (f.name ? f : new File([f], `anh-dan-${i + 1}.png`, { type: f.type })))); }
  }

  // ================= gõ / để chọn skill, gõ @ để gọi plugin / công cụ (giống ChatGPT Work) =================
  // mục @: công cụ của Văn Phòng AI + plugin Codex đã cài (Computer Use, Spreadsheets…)
  function mentionItems() {
    const M = C.mentionData || { tools: [], plugins: [] };
    const tools = (M.tools || []).filter((x) => x.enabled).map((x) => ({ kind: 'tool', id: x.id, name: x.name, icon: x.icon, desc: x.desc }));
    const plugins = (M.plugins || []).map((p) => ({ kind: 'plugin', id: p.id, name: p.title, icon: /computer/i.test(p.name) ? '🖥️' : '🧩', desc: p.description || p.name }));
    return [...tools, ...plugins];
  }
  async function loadMentions(force) {
    if (!force && C.mentionData && Date.now() - C.mentionAt < 5 * 60 * 1000) return;
    C.mentionAt = Date.now();
    C.mentionData = await window.vp.chat.mentions().catch(() => C.mentionData || { tools: [], plugins: [] });
    if (C.pop === 'mention') onInput();
  }
  function popQuery() {
    const ta = $('#chInput'); const before = ta.value.slice(0, ta.selectionStart);
    const sk = before.match(/(?:^|\s)[/$]([\w-]*)$/);
    if (sk) return { mode: 'skill', q: sk[1].toLowerCase() };
    const mn = before.match(/(?:^|\s)@([\p{L}\p{N}_ -]{0,24})$/u);
    if (mn && !/\s{2}/.test(mn[1])) return { mode: 'mention', q: mn[1].toLowerCase().trim() };
    return null;
  }
  const plain = (x) => x.normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/đ/g, 'd').toLowerCase();
  function popList(pq) {
    if (pq.mode === 'skill') return C.skills.filter((s) => !pq.q || s.name.toLowerCase().includes(pq.q) || skillUi(s)[1].toLowerCase().includes(pq.q) || s.description.toLowerCase().includes(pq.q)).slice(0, 40);
    const q = plain(pq.q);
    return mentionItems().filter((x) => !q || plain(x.name).includes(q) || plain(x.desc || '').includes(q) || plain(x.id).includes(q));
  }
  function closePop() { $('#chSkillPop').classList.add('hidden'); C.pop = null; }
  function onInput() {
    const ta = $('#chInput'); ta.style.height = 'auto'; ta.style.height = Math.min(220, ta.scrollHeight) + 'px';
    const pq = popQuery();
    const pop = $('#chSkillPop');
    if (!pq) { closePop(); return; }
    if (pq.mode === 'mention') loadMentions();
    const list = popList(pq);
    if (C.pop !== pq.mode) C.skillIdx = 0;
    C.pop = pq.mode; C.skillIdx = Math.min(C.skillIdx, Math.max(0, list.length - 1));
    const { el } = U;
    if (pq.mode === 'skill') {
      pop.replaceChildren(el('div', { class: 'sph' }, `Skill trên máy (${C.skills.length})`, el('small', { text: '↑↓ chọn · Enter chèn · Esc đóng' }),
        el('button', { class: 'linkbtn small sp-add', onmousedown: (ev) => { ev.preventDefault(); closePop(); openSkillManager('new'); } }, '＋ Thêm skill')),
        ...(list.length ? list.map((s, i) => { const [e, l] = skillUi(s); return el('button', { class: 'sp' + (i === C.skillIdx ? ' on' : ''), onmousedown: (ev) => { ev.preventDefault(); insertSkill(s.name); } }, el('span', { class: 'qe', text: e }), el('div', {}, el('b', {}, l, el('code', { text: ' $' + s.name })), el('small', { text: s.description || '' }))); })
          : [el('div', { class: 'ch-empty', text: C.skills.length ? 'Không tìm thấy skill' : 'Chưa có skill nào – cài SIMI để có bộ skill đầy đủ' })]));
    } else {
      const head = (t) => el('div', { class: 'sph' }, t, el('small', { text: '↑↓ chọn · Enter chèn · Esc đóng' }));
      const rows = []; let lastKind = null;
      list.forEach((x, i) => {
        if (x.kind !== lastKind) { rows.push(head(x.kind === 'tool' ? 'Công cụ của Văn Phòng AI' : 'Plugin')); lastKind = x.kind; }
        rows.push(el('button', { class: 'sp' + (i === C.skillIdx ? ' on' : ''), onmousedown: (ev) => { ev.preventDefault(); insertMention(x); } },
          el('span', { class: 'qe', text: x.icon }), el('div', {}, el('b', {}, x.name), el('small', { text: x.desc || '' }))));
      });
      pop.replaceChildren(...(rows.length ? rows : [head('Plugin'), el('div', { class: 'ch-empty', text: C.mentionData ? 'Không tìm thấy plugin / công cụ' : 'Đang tải danh sách…' })]));
    }
    pop.classList.remove('hidden');
    const on = pop.querySelector('.sp.on'); if (on) on.scrollIntoView({ block: 'nearest' });
  }
  function replaceToken(re, ins) {
    const ta = $('#chInput');
    const before = ta.value.slice(0, ta.selectionStart).replace(re, '$1');
    const after = ta.value.slice(ta.selectionStart);
    ta.value = before + ins + after;
    const pos = (before + ins).length; ta.setSelectionRange(pos, pos);
    closePop(); ta.focus(); onInput();
  }
  function insertSkill(name) { replaceToken(/(^|\s)[/$][\w-]*$/, `$${name} `); }
  function insertMention(x) {
    C.mentions = [...(C.mentions || []).filter((m) => m.id !== x.id), x];
    replaceToken(/(^|\s)@[\p{L}\p{N}_ -]{0,24}$/u, `@${x.name} `);
  }
  // các mục @ còn nằm trong ô chat lúc gửi
  function usedMentions(text) { return (C.mentions || []).filter((m) => text.includes('@' + m.name)).map(({ kind, id, name }) => ({ kind, id, name })); }
  function onKey(e) {
    if (C.pop) {
      const pq = popQuery(); const list = pq ? popList(pq) : [];
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') { e.preventDefault(); C.skillIdx = (C.skillIdx + (e.key === 'ArrowDown' ? 1 : -1) + list.length) % Math.max(1, list.length); onInput(); return; }
      if ((e.key === 'Enter' || e.key === 'Tab') && list.length) { e.preventDefault(); if (C.pop === 'skill') insertSkill(list[C.skillIdx].name); else insertMention(list[C.skillIdx]); return; }
      if (e.key === 'Escape') { e.preventDefault(); e.stopPropagation(); closePop(); return; }
    }
    if (e.key === 'Enter' && !e.shiftKey && !e.isComposing) { e.preventDefault(); sendOrStop(); }
  }

  // ================= gửi =================
  function persona(a) {
    return `Bạn là ${a.name}, ${a.title} trong Văn Phòng AI. Vai trò: ${a.role} Hãy trò chuyện thân thiện, xưng "em" và gọi người dùng là "sếp".`;
  }
  async function sendOrStop() {
    if (C.cur && C.running.has(C.cur.id)) {
      // Codex có thể mất vài giây mới ngắt được (đang chờ công cụ / mạng) → báo rõ, bấm lần nữa là dừng ngay
      const btn = $('#chSend'); const again = btn.dataset.stopping === C.cur.id;
      btn.dataset.stopping = C.cur.id; btn.title = 'Đang dừng… bấm lần nữa để dừng ngay';
      if (!again) U.toast('⏹ Đang dừng… (bấm Dừng lần nữa để dừng ngay)');
      await window.vp.chat.stop(C.cur.id); return;
    }
    const ta = $('#chInput'); const text = ta.value.trim();
    if (!text && !C.atts.length) return;
    if (C.status && !C.status.loggedIn) { U.toast('Chưa kết nối SIMI Gateway – làm theo hướng dẫn trên màn hình', true); return; }
    if (!C.cur) await newThread();
    const t = C.cur; const atts = C.atts.slice();
    const mentions = usedMentions(text);
    ta.value = ''; C.atts = []; C.mentions = []; onInput(); renderAtts();
    const a = agentOf(t);
    C.running.add(t.id); renderBar(); renderSide();
    try {
      await window.vp.chat.send(t.id, { text, attachments: atts, mentions, model: $('#chModel').value, effort: $('#chEffort').value, agentId: a ? a.id : null, persona: a ? persona(a) : '' });
    } catch (e) { U.toast(U.cleanErr(e), true); }
    C.running.delete(t.id);
    renderBar(); loadThreads();
  }

  // sự kiện stream từ main
  let raf = 0;
  function onEvent(e) {
    if (e.type === 'chat-open') { setView('chat'); openThread(e.threadId); return; }
    if (e.type === 'simi-update') { onSimiUpdate(e); return; }
    if (e.type === 'chat-sandbox') {
      // bấm "Luôn cho phép, không hỏi nữa" → đoạn chat này + các đoạn chat mới đều tự cho phép
      const prefs = ls.get('vp.chatPrefs', {}); prefs.sandbox = e.sandbox; ls.set('vp.chatPrefs', prefs);
      if (C.cur && C.cur.id === e.threadId) { C.cur.sandbox = e.sandbox; const s = $('#chSandbox'); if (s) s.value = e.sandbox; }
      return;
    }
    if (e.type === 'chat-ask') { if (U.sfx) U.sfx('pop'); if (!C.cur || C.cur.id !== e.threadId) U.toast(`🔐 "${e.title}" đang chờ bạn cho phép`); return; }
    if (e.type !== 'chat') return;
    if (e.ev === 'start') C.running.add(e.threadId);
    if (e.ev === 'done') { C.running.delete(e.threadId); if (U.sfx) U.sfx(e.message && e.message.error ? 'pop' : 'chime'); }
    if (e.ev === 'done' && e.message && /chưa có Codex|Không tìm thấy Codex/.test(e.message.error || '') && window.VPSimiSetup && !window.VPSimiSetup.state.running) window.VPSimiSetup.open({ mode: 'install' });
    if (!C.cur || C.cur.id !== e.threadId) { if (e.ev !== 'blocks') renderSide(); return; }
    const msgs = C.cur.messages;
    if (e.ev === 'start') { msgs.push(e.user, e.message); renderMain(2); renderSide(); return; }
    const m = msgs[msgs.length - 1]; if (!m || m.role !== 'assistant') return;
    if (e.ev === 'blocks') m.blocks = e.blocks;
    if (e.ev === 'done') { Object.assign(m, e.message); if (e.title) C.cur.title = e.title; }
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(() => {
      const box = $('#chMsgs'); const nearBottom = box.scrollHeight - box.scrollTop - box.clientHeight < 140;
      const last = box.querySelector('.cmsg.bot:last-child');
      const n = botMsg(m);
      if (last) last.replaceWith(n); else box.append(n);
      if (nearBottom || e.ev === 'done') box.scrollTop = box.scrollHeight;
      if (e.ev === 'done') { renderHead(); renderBar(); }
    });
  }

  // ================= API cho app.js =================
  async function openAgent(id) {
    const a = U.agentById(id); if (!a) return;
    setView('chat');
    const existing = C.threads.find((t) => t.agentId === id);
    if (existing) return openThread(existing.id);
    const m = agentModel(a);
    await newThread({ agentId: id, title: `Chat với ${a.name}`, model: m === null ? undefined : m });
  }

  async function init(api) {
    U = api;
    build();
    window.vp.onEvent(onEvent);
    await loadThreads();
    C.running = new Set(await window.vp.chat.running());
    loadMeta();
    if (ls.get('vp.mainView', 'office') === 'chat') setView('chat');
    // quay lại app (ví dụ sau khi chat bên ChatGPT Work) → cập nhật danh sách + đoạn đang mở
    window.addEventListener('focus', () => {
      if (C.view !== 'chat') return;
      loadExternal();
      if (C.cur && C.cur.codexThread) openThread(C.cur.id);
    });
  }

  window.VPChat = { init, openAgent, setView, view: () => C.view, refresh: () => loadMeta(true), newThread, runSimiUpdate };
})();
