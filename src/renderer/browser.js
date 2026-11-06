/* 🌐 Trình duyệt cạnh khung Chat (giống Claude Desktop): thanh địa chỉ + tab ở đây, còn trang web là lớp riêng của app
   đặt đúng vào ô #cbwHost (renderer báo toạ độ cho tiến trình chính). AI thao tác qua MCP vp_browser, người dùng nhìn
   và tự bấm được. Hộp thoại / menu của app đè lên ô trang → tạm ẩn trang (lớp trang luôn nằm trên giao diện). */
(function () {
  let U = null;
  const B = { open: false, state: null, aiT: null };
  const $ = (s, r = document) => r.querySelector(s);
  const ls = { get: (k, d) => { try { const v = localStorage.getItem(k); return v === null ? d : JSON.parse(v); } catch { return d; } }, set: (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch { /* bỏ qua */ } } };
  const OVERLAYS = '.tools-pop, .who-menu, .upd-card, .ch-skillpop:not(.hidden), .ctx-menu, .lb-pop';

  function build() {
    const { el } = U;
    const view = $('#chatView'); if (!view || $('#chBrowser')) return;
    const url = el('input', { class: 'cbw-url', id: 'cbwUrl', spellcheck: 'false', placeholder: 'Nhập địa chỉ web hoặc từ khoá tìm kiếm', onkeydown: (e) => { if (e.key === 'Enter') { window.vp.browser.ui({ action: 'go', url: e.target.value }); e.target.blur(); } } });
    const ic = (t, title, action, id) => el('button', { class: 'cbw-ic', title, 'aria-label': title, id, onclick: () => window.vp.browser.ui({ action }) }, t);
    const panel = el('aside', { class: 'cbw hidden', id: 'chBrowser', 'aria-label': 'Trình duyệt' },
      el('div', { class: 'cbw-bar' },
        ic('◀', 'Quay lại', 'back', 'cbwBack'), ic('▶', 'Tiến tới', 'forward', 'cbwFwd'), el('button', { class: 'cbw-ic', title: 'Tải lại', 'aria-label': 'Tải lại', id: 'cbwReload', onclick: () => window.vp.browser.ui({ action: B.state && B.state.loading ? 'stop' : 'reload' }) }, '⟳'),
        url,
        ic('↗', 'Mở trang này bằng trình duyệt của máy', 'external'),
        el('button', { class: 'cbw-ic', title: 'Đóng khung trình duyệt', 'aria-label': 'Đóng', onclick: () => toggle(false) }, '✕')),
      el('div', { class: 'cbw-tabs', id: 'cbwTabs' }),
      el('div', { class: 'cbw-marks' }, ...MARKS.map((m) => el('button', { class: 'cbw-mark', title: m.title, onclick: () => go(m.url) }, m.label))),
      el('div', { class: 'cbw-ai hidden', id: 'cbwAi', role: 'status' }, el('span', { class: 'cbw-dot' }), el('span', { id: 'cbwAiT' })),
      el('div', { class: 'cbw-host', id: 'cbwHost' }, el('div', { class: 'cbw-empty' }, el('b', { text: '🌐 Trình duyệt SIMI' }), el('small', { text: 'Đang mở trang… AI sẽ thao tác ngay tại đây, bạn xem và tự bấm được.' }))));
    const split = el('div', { class: 'cbw-split hidden', id: 'cbwSplit', title: 'Kéo để đổi độ rộng' });
    view.append(split, panel);
    // kéo thanh ngăn để đổi độ rộng khung trình duyệt
    split.addEventListener('pointerdown', (e) => {
      split.setPointerCapture(e.pointerId); document.body.classList.add('cbw-dragging');
      const move = (ev) => { const w = Math.max(380, Math.min(window.innerWidth - 640, window.innerWidth - ev.clientX)); view.style.setProperty('--cbw-w', w + 'px'); sync(); };
      const up = () => { split.removeEventListener('pointermove', move); split.removeEventListener('pointerup', up); document.body.classList.remove('cbw-dragging'); ls.set('vp.browserW', parseInt(getComputedStyle(view).getPropertyValue('--cbw-w'), 10) || 0); };
      split.addEventListener('pointermove', move); split.addEventListener('pointerup', up);
    });
    const w = ls.get('vp.browserW', 0); if (w) view.style.setProperty('--cbw-w', w + 'px');
    new ResizeObserver(() => sync()).observe($('#cbwHost'));
    window.addEventListener('resize', () => sync());
    // hộp thoại / menu của app mở ra → kiểm tra có đè lên trang không
    new MutationObserver(() => sync()).observe(document.body, { childList: true, subtree: false, attributes: true, attributeFilter: ['class'] });
    const modal = $('#modal'); if (modal) new MutationObserver(() => sync()).observe(modal, { attributes: true, attributeFilter: ['class'] });
    if (ls.get('vp.browserOpen', false)) toggle(true);
  }

  // mở nhanh trang hay dùng (đăng nhập 1 lần trong khung, AI dùng tiếp)
  const MARKS = [
    { label: '🎨 Canva', url: 'https://www.canva.com/', title: 'Canva – đăng nhập 1 lần, rồi nhờ AI thiết kế poster, banner, slide…' },
    { label: '📁 Drive', url: 'https://drive.google.com/', title: 'Google Drive' },
    { label: '📘 Facebook', url: 'https://www.facebook.com/', title: 'Facebook' },
    { label: '🛒 Shopee', url: 'https://shopee.vn/', title: 'Shopee' },
  ];
  function go(url) { if (!B.open) toggle(true); window.vp.browser.ui({ action: 'go', url }); }

  function covered(r) {
    const m = $('#modal'); if (m && !m.classList.contains('hidden')) return true;
    return [...document.querySelectorAll(OVERLAYS)].some((n) => { const o = n.getBoundingClientRect(); return o.width && o.height && o.right > r.left && o.left < r.right && o.bottom > r.top && o.top < r.bottom; });
  }
  let raf = 0;
  function sync() {
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(() => {
      const host = $('#cbwHost'); if (!host || !window.vp.browser) return;
      const view = $('#chatView');
      const vis = B.open && view && !view.classList.contains('hidden');
      const r = host.getBoundingClientRect();
      window.vp.browser.bounds({ x: r.left, y: r.top, width: r.width, height: r.height }, vis, vis && covered(r));
    });
  }

  function toggle(on) {
    B.open = on === undefined ? !B.open : !!on;
    ls.set('vp.browserOpen', B.open);
    const view = $('#chatView');
    view.classList.toggle('with-browser', B.open);
    $('#chBrowser').classList.toggle('hidden', !B.open);
    $('#cbwSplit').classList.toggle('hidden', !B.open);
    const b = $('#chBrowserBtn'); if (b) b.classList.toggle('on', B.open);
    sync();
  }

  function render() {
    const st = B.state; if (!st) return;
    const { el } = U;
    const url = $('#cbwUrl'); if (url && document.activeElement !== url) url.value = st.url && !/^about:blank/.test(st.url) ? st.url : '';
    $('#cbwBack').disabled = !st.canGoBack; $('#cbwFwd').disabled = !st.canGoForward;
    $('#cbwReload').textContent = st.loading ? '✕' : '⟳';
    $('#cbwReload').title = st.loading ? 'Dừng tải' : 'Tải lại';
    $('#cbwTabs').replaceChildren(
      ...st.tabs.map((t) => el('div', { class: 'cbw-tab' + (t.active ? ' on' : ''), title: t.url, onclick: () => window.vp.browser.ui({ action: 'select', id: t.id }) },
        el('span', { class: 'cbw-tt', text: (t.loading ? '⏳ ' : '') + (t.title || t.url || 'Tab mới') }),
        el('button', { class: 'cbw-x', title: 'Đóng tab', 'aria-label': 'Đóng tab', onclick: (e) => { e.stopPropagation(); window.vp.browser.ui({ action: 'close', id: t.id }); } }, '×'))),
      el('button', { class: 'cbw-new', title: 'Tab mới', 'aria-label': 'Tab mới', onclick: () => window.vp.browser.ui({ action: 'new' }) }, '＋'));
  }

  function onEvent(e) {
    if (e.ev === 'state') { B.state = e.state; render(); return; }
    if (e.ev === 'show') {
      if (window.VPChat && window.VPChat.view && window.VPChat.view() !== 'chat') window.VPChat.setView('chat');
      if (!B.open) toggle(true); else sync();
      return;
    }
    if (e.ev === 'ai') {
      const box = $('#cbwAi'); if (!box) return;
      $('#cbwAiT').textContent = '🤖 SIMI đang thao tác: ' + e.text;
      box.classList.remove('hidden'); clearTimeout(B.aiT);
      B.aiT = setTimeout(() => box.classList.add('hidden'), 4000);
      return;
    }
    if (e.ev === 'error') U.toast(e.text, true);
  }

  function init(api) { U = api; build(); window.vp.browser.state().then((s) => { if (s) { B.state = s; render(); } }).catch(() => {}); }
  window.VPBrowser = { init, toggle, sync, onEvent, go, isOpen: () => B.open };
})();
