/* Cập nhật app: Gateway có bản mới → app tự tải sẵn ở chế độ nền → thẻ "Bản mới đã sẵn sàng" + nút "Cập nhật ngay".
   Bấm 1 lần là cài và tự mở lại. Nút "⬆️" trên thanh trên cùng luôn còn đó cho tới khi cập nhật. */
(function () {
  let U;
  let st = {};
  const $ = (s) => document.querySelector(s);
  const mb = (n) => (n >= 1048576 ? Math.round(n / 1048576) + ' MB' : Math.max(1, Math.round(n / 1024)) + ' KB');
  const pct = () => Math.round((st.progress || 0) * 100);
  const KIND = { app: 'Cập nhật nhanh', 'win-setup': 'Windows (bản cài)', 'win-portable': 'Windows (bản chạy ngay)', 'mac-arm64': 'Mac chip Apple', 'mac-x64': 'Mac Intel', 'linux-deb': 'Ubuntu (.deb)', 'linux-appimage': 'Linux (AppImage)' };
  const SNOOZE_MS = 4 * 60 * 60 * 1000;
  const afterText = () => (st.kind === 'app' ? 'Cập nhật nhanh: app tự mở lại sau vài giây, không cần cài lại hay nhập mật khẩu.' : st.kind === 'linux-deb' ? 'Ubuntu sẽ hỏi mật khẩu máy để cài, xong app tự mở lại.' : 'App tự đóng, cài bản mới rồi mở lại sau khoảng 20 giây. Đoạn chat và cài đặt được giữ nguyên.');

  // "Để sau": ẩn thẻ thông báo 4 giờ cho phiên bản này (nút trên thanh trên cùng vẫn còn)
  const snoozed = () => { try { const s = JSON.parse(localStorage.getItem('vp.updSnooze') || 'null'); return !!(s && s.v === st.version && s.until > Date.now()); } catch { return false; } };
  const snooze = () => { try { localStorage.setItem('vp.updSnooze', JSON.stringify({ v: st.version, until: Date.now() + SNOOZE_MS })); } catch { /* bỏ qua */ } card(); };

  // ghi chú bản mới dạng chữ thường, vài dòng đầu cho thẻ thông báo
  const shortNotes = () => String(st.notes || '').split('\n').map((l) => l.replace(/^[\s>*#-]+/, '').replace(/[*_`]/g, '').trim()).filter(Boolean).slice(0, 3);

  function pill() {
    let b = $('#btnUpdate');
    const show = ['available', 'downloading', 'ready', 'manual', 'installing'].includes(st.status);
    if (!show) { if (b) b.remove(); return; }
    if (!b) {
      b = U.el('button', { class: 'tbtn upd', id: 'btnUpdate', onclick: open });
      $('.topbar .actions').prepend(b);
    }
    const txt = st.status === 'downloading' ? `Đang tải bản mới ${pct()}%` : st.status === 'ready' ? `Cập nhật ${st.version}` : st.status === 'installing' ? 'Đang cài…' : `Bản mới ${st.version}`;
    b.replaceChildren(U.el('span', { text: '⬆️' }), U.el('span', { text: txt }));
    b.title = st.status === 'ready' ? `Văn Phòng AI ${st.version} đã tải xong – bấm để cập nhật` : `Văn Phòng AI ${st.version || ''} đã có`;
  }

  // thẻ thông báo nổi góc dưới bên phải
  function card() {
    let c = $('#updCard');
    const busy = st.status === 'installing' || (st.autoInstall && ['available', 'downloading'].includes(st.status));
    const show = (busy || (st.status === 'ready' && !snoozed())) && !isOpen(); // đang xem chi tiết thì ẩn thẻ
    if (!show) { if (c) c.remove(); return; }
    const { el } = U;
    if (!c) { c = el('div', { class: 'upd-card', id: 'updCard', role: 'alertdialog', 'aria-label': 'Bản cập nhật mới' }); document.body.append(c); }
    const head = el('div', { class: 'uc-h' },
      el('span', { class: 'uc-ic', text: '⬆️' }),
      el('div', { class: 'grow' }, el('b', { text: st.status === 'installing' ? 'Đang cài bản mới…' : busy ? `Đang tải bản ${st.version}…` : `Văn Phòng AI ${st.version} đã sẵn sàng` }),
        el('small', { text: `Bạn đang dùng bản ${st.current}` })),
      busy ? null : el('button', { class: 'uc-x', title: 'Để sau', 'aria-label': 'Để sau', onclick: snooze }, '✕'));
    const notes = shortNotes();
    const parts = [head];
    if (!busy && notes.length) parts.push(el('ul', { class: 'uc-notes' }, ...notes.map((n) => el('li', { text: n }))));
    if (busy && st.status !== 'installing') parts.push(el('div', { class: 'su-bar' }, el('i', { style: `width:${pct()}%` })), el('small', { class: 'dim', text: `${pct()}% – tải xong tự cài và mở lại app` }));
    if (st.status === 'installing') parts.push(el('small', { class: 'dim', text: afterText() }));
    if (st.error) parts.push(el('div', { class: 'su-bad', text: '⚠️ ' + st.error }));
    if (!busy) {
      parts.push(el('small', { class: 'dim', text: afterText() }));
      parts.push(el('div', { class: 'uc-btns' },
        el('button', { class: 'btn mini ghost', onclick: open }, 'Xem chi tiết'),
        el('button', { class: 'btn mini', onclick: snooze }, 'Để sau'),
        el('button', { class: 'btn mini primary', onclick: updateNow }, 'Cập nhật ngay')));
    }
    c.replaceChildren(...parts);
  }

  function body() {
    const { el } = U;
    const notes = String(st.notes || '').trim();
    const box = el('div', { class: 'upd-box' },
      el('div', { class: 'upd-ver' }, el('b', { text: `${st.current} → ${st.version || ''}` }), el('small', { text: (KIND[st.kind] || '') + (st.size ? ' · ' + mb(st.size) : '') + (st.status === 'ready' ? ' · đã tải sẵn' : '') })),
      notes ? el('div', { class: 'upd-notes md', html: window.renderMd ? window.renderMd(notes) : '' }) : el('p', { class: 'dim', text: 'Bản mới với các cải tiến và sửa lỗi.' }));
    if (st.status === 'downloading') box.append(el('div', { class: 'su-bar' }, el('i', { style: `width:${pct()}%` })), el('small', { class: 'dim', text: `Đang tải ${pct()}%` + (st.autoInstall ? ' – tải xong tự cài và mở lại app' : '') }));
    if (st.error) box.append(el('div', { class: 'su-bad', text: '⚠️ ' + st.error }));
    if (st.status === 'manual') box.append(el('p', {}, 'Bản cho máy này chưa có trên Gateway. Tải tại: ', el('button', { class: 'linkbtn', text: st.page, onclick: () => window.vp.openUrl(st.page + '/') })));
    if (['ready', 'available'].includes(st.status)) box.append(el('p', { class: 'dim', text: afterText() }));
    return box;
  }

  function foot() {
    const { el } = U;
    const now = el('button', { class: 'btn primary', text: 'Cập nhật ngay', onclick: updateNow });
    if (st.status === 'downloading') return [el('button', { class: 'btn', text: 'Hủy tải', onclick: () => window.vp.update.cancel() }), st.autoInstall ? null : now].filter(Boolean);
    if (st.status === 'ready' || st.status === 'available') return [el('button', { class: 'btn', text: 'Để sau', onclick: () => { U.closeModal(); snooze(); } }), now];
    return [el('button', { class: 'btn primary', text: 'Đóng', onclick: U.closeModal })];
  }

  function open() { U.openModal('⬆️ Cập nhật Văn Phòng AI', body(), foot()); }
  const isOpen = () => !$('#modal').classList.contains('hidden') && $('#modalTitle').textContent.startsWith('⬆️');

  // 1 nút: đã tải sẵn thì cài luôn, chưa thì tải nốt rồi tự cài và mở lại app
  async function updateNow() {
    const busy = Array.isArray(window.__chatRunning) ? window.__chatRunning.length : 0;
    if (busy && !confirm('Còn đoạn chat đang trả lời – cập nhật sẽ dừng chúng. Vẫn cập nhật?')) return;
    if (isOpen()) U.closeModal();
    try { onState(await window.vp.update.now()); } catch (e) { U.toast(U.cleanErr(e), true); }
  }

  function onState(s) {
    const was = st.status;
    st = s || {};
    pill();
    card();
    if (isOpen()) open();
    if (st.status === 'ready' && was && was !== 'ready' && !st.autoInstall && U.sfx) U.sfx('pop');
  }

  // mục "Cập nhật" trong Cài đặt
  function settingsSection(cfg) {
    const { el } = U;
    const auto = el('input', { type: 'checkbox', id: 'chkAutoUpd', checked: cfg.autoUpdate !== false });
    const line = el('span', { class: 'dim' });
    const show = () => line.replaceChildren(`Đang dùng bản ${st.current || ''}` + (st.status === 'none' ? ' – đã là bản mới nhất' : st.status === 'error' ? ` – chưa kiểm tra được (${st.error})` : st.status === 'ready' ? ` – bản ${st.version} đã tải sẵn` : st.version && st.status !== 'checking' ? ` – có bản ${st.version}` : st.status === 'checking' ? ' – đang kiểm tra…' : ''));
    show();
    const btn = el('button', { class: 'btn small', onclick: async () => { btn.disabled = true; line.textContent = 'Đang kiểm tra…'; onState(await window.vp.update.check()); btn.disabled = false; show(); if (['available', 'manual', 'ready'].includes(st.status)) open(); } }, '🔄 Kiểm tra bản mới');
    return {
      node: el('div', {}, el('div', { class: 'field row' }, auto, el('label', { for: 'chkAutoUpd', text: 'Tự kiểm tra và tải sẵn bản mới (chỉ cài khi bạn bấm "Cập nhật ngay")' })), el('div', { class: 'field row upd-row' }, btn, line)),
      apply: (c) => { c.autoUpdate = auto.checked; },
    };
  }

  async function init(api) {
    U = api;
    window.vp.onEvent((e) => {
      if (e.type === 'update') onState(e.state);
      if (e.type === 'update-open') open();
      if (e.type === 'chat' && (e.ev === 'start' || e.ev === 'done')) window.vp.chat.running().then((r) => { window.__chatRunning = r; });
    });
    onState(await window.vp.update.state());
    new MutationObserver(() => card()).observe($('#modal'), { attributes: true, attributeFilter: ['class'] }); // đóng hộp chi tiết → hiện lại thẻ
    setInterval(card, 10 * 60 * 1000); // hết 4 giờ "Để sau" thì nhắc lại
  }

  window.VPUpdate = { init, open, settingsSection };
})();
