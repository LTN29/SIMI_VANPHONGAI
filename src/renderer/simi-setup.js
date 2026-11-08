/* 🚀 Cài / cập nhật SIMI AI ngay trong app: dán key team → bấm Cài đặt. Không mở PowerShell / Terminal,
   không hiện dòng lệnh – chỉ các bước dễ hiểu có dấu ✓ (nhân viên không lo "virus"). Chi tiết kỹ thuật chỉ để sao chép gửi IT khi lỗi.
   Bộ cài chạy ngầm ở tiến trình chính (simi:setup / simi:update) và báo từng dòng qua sự kiện 'simi-update'. */
(function () {
  const STEPS = [
    { id: 'key', label: 'Kiểm tra key team', only: 'install' },
    { id: 'prep', label: 'Chuẩn bị máy: curl, Python, Node.js', linux: true, re: /Chuẩn bị máy/i },
    { id: 'get', label: 'Tải bộ cài chính thức từ ai.simi.vn', re: /dùng API key|dung API key|Kiem tra|Kiểm tra|\[[1-5]\/7\]/i },
    { id: 'codex', label: 'Cài Codex & tạo file cấu hình', re: /codex cli|cài codex|installing codex|codex standalone/i },
    { id: 'tools', label: 'Cài công cụ Word · Excel · PDF', re: /runtime|node\.js|python|thư viện|word\/excel|ltn-pdf|ltn-9router|pdf/i },
    { id: 'skills', label: 'Cài skill SIMI & trình duyệt', re: /skill|chrome|browser|plugin|mcp/i },
    { id: 'config', label: 'Lưu cấu hình & danh sách model', re: /combo|config|model mặc định|provider|catalog|hoàn tất|complete/i },
  ];
  // một lần cài / cập nhật đang chạy (đóng bảng vẫn chạy tiếp, mở lại thấy đúng tiến độ)
  const R = { mode: null, running: false, at: 0, log: '', result: null, step: -1, body: null, paint: null };

  const IS_LINUX = /linux/i.test(navigator.platform || navigator.userAgent);
  const steps = () => STEPS.filter((s) => (!s.only || s.only === R.mode) && (!s.linux || IS_LINUX));

  function onEvent(e) {
    if (e.type !== 'simi-update') return;
    if (e.ev === 'start') { R.running = true; R.result = null; R.log = ''; if (e.mode) R.mode = e.mode; R.step = Math.max(R.step, steps().findIndex((s) => s.id !== 'key')); }
    else if (e.ev === 'line') {
      R.log = (R.log + e.line + '\n').slice(-12000);
      const list = steps();
      for (let i = list.length - 1; i > R.step; i--) if (list[i].re && list[i].re.test(e.line)) { R.step = i; break; }
    } else if (e.ev === 'done') { R.running = false; R.result = { ok: e.ok, error: e.error || '' }; if (e.ok) R.step = steps().length; }
    if (R.paint) R.paint();
  }

  // lỗi kỹ thuật → câu dễ hiểu
  function friendly(err) {
    const t = String(err || '');
    if (/pkexec-cancel/.test(t)) return 'Bạn đã bấm Huỷ ở hộp nhập mật khẩu – bấm Thử lại và nhập mật khẩu đăng nhập máy.';
    if (/pkexec-missing/.test(t)) return 'Máy không hiện được hộp nhập mật khẩu để cài curl / Python / Node.js – nhờ IT cài giúp rồi bấm Thử lại.';
    if (/apt-lock|Could not get lock|dpkg.*lock/i.test(t)) return 'Ubuntu đang tự cài bản cập nhật – đợi vài phút rồi bấm Thử lại.';
    if (/ENOTFOUND|EAI_AGAIN|timed? ?out|không kết nối|network|Unable to connect|could not resolve/i.test(t)) return 'Mạng chập chờn nên chưa tải được – kiểm tra Wi-Fi rồi bấm Thử lại.';
    if (/\b40[13]\b|key không đúng|invalid api key|unauthori[sz]ed|không tìm thấy API key/i.test(t)) return 'Key team không đúng hoặc đã bị khoá – hỏi lại IT nhé.';
    if (/access is denied|permission|quyền|UAC|elevat/i.test(t)) return 'Windows chặn quyền cài đặt – bấm Thử lại và chọn "Yes" nếu Windows hỏi.';
    if (/disk|space|dung lượng/i.test(t)) return 'Ổ đĩa sắp đầy – dọn bớt rồi thử lại.';
    return 'Có bước chưa chạy được. Bấm Thử lại; nếu vẫn lỗi, sao chép chi tiết gửi IT.';
  }

  function open({ mode, status } = {}) {
    const U = window.VP; const { el } = U;
    if (!R.running) { R.mode = mode || 'install'; if (!R.result) R.step = -1; }
    const st = { key: '', show: false, err: '', checking: false, status: status || null };
    const body = el('div', { class: 'ss' });
    R.body = body;

    const hero = () => el('div', { class: 'ss-hero' },
      el('img', { src: 'brand/simi.png', alt: '', class: 'ss-logo' }),
      el('div', {}, el('b', { text: R.mode === 'update' ? 'Cập nhật SIMI AI' : 'Cài SIMI AI cho máy này' }),
        el('small', { text: R.mode === 'update' ? 'Tải skill, công cụ và danh sách model mới nhất. Key đã lưu nên không cần nhập lại.' : 'Chỉ cần dán key team IT gửi rồi bấm Cài đặt. App tự cài Codex, tạo đủ file cấu hình, skill và công cụ – không cần mở PowerShell.' })));

    const codexRow = () => {
      const s = st.status;
      if (!s || s.desktop) return s && s.desktop ? el('div', { class: 'ss-codex ok' }, el('span', { class: 'ss-ci', text: '✓' }), el('div', {}, el('b', { text: 'Máy đã có app Codex' }), el('small', { text: 'SIMI dùng chung Codex này – Computer Use chạy ổn định hơn.' }))) : null;
      return el('div', { class: 'ss-codex' }, el('span', { class: 'ss-ci', text: '⬇️' }),
        el('div', {}, el('b', { text: 'App Codex (giao diện riêng của OpenAI)' }), el('small', { text: 'Không bắt buộc – bấm Cài đặt bên dưới là đã tự cài Codex và tạo đủ file cần thiết. Tải thêm app này nếu muốn dùng Codex ngoài Văn Phòng AI.' })),
        el('button', { class: 'btn small', onclick: async () => { try { await window.vp.simi.getCodex(); U.toast('Đã mở trang tải Codex – cài xong quay lại đây nhé'); } catch (e) { U.toast(U.cleanErr(e), true); } } }, 'Tải Codex'));
    };

    const form = () => {
      const inp = el('input', { class: 'ss-key', type: st.show ? 'text' : 'password', placeholder: 'Dán key team vào đây (dạng sk-…)', autocomplete: 'off', spellcheck: 'false', 'aria-label': 'Key team', value: st.key,
        oninput: (e) => { st.key = e.target.value; st.err = ''; errBox.hidden = true; },
        onkeydown: (e) => { if (e.key === 'Enter') go(); } });
      const errBox = el('p', { class: 'ss-err', hidden: !st.err, text: st.err ? '⚠️ ' + st.err : '' });
      const go = async () => {
        const key = st.key.trim();
        if (!key) { st.err = 'Dán key team trước nhé.'; paint(); return; }
        st.checking = true; paint();
        const r = await window.vp.simi.setup(key).catch((e) => ({ ok: false, error: U.cleanErr(e) }));
        st.checking = false;
        if (r && r.step === 'key') { st.err = r.error; paint(); return; }
        st.key = ''; // không giữ key trên giao diện
        if (r && !R.result) { R.running = false; R.result = { ok: !!r.ok, error: r.error || '' }; if (r.ok) R.step = steps().length; }
        paint();
      };
      return el('div', { class: 'ss-form' },
        el('label', { class: 'ss-lb', text: 'Key team SIMI' }),
        el('div', { class: 'ss-keyrow' }, inp,
          el('button', { class: 'ss-eye', type: 'button', title: st.show ? 'Ẩn key' : 'Hiện key', 'aria-label': st.show ? 'Ẩn key' : 'Hiện key', onclick: () => { st.show = !st.show; paint(); } }, st.show ? '🙈' : '👁'),
          el('button', { class: 'btn small', type: 'button', onclick: async () => { try { const t = (await navigator.clipboard.readText()).trim(); if (t) { st.key = t; st.err = ''; paint(); } else U.toast('Clipboard đang trống – sao chép key trước nhé', true); } catch { U.toast('Không đọc được Clipboard – bấm vào ô rồi Ctrl+V', true); } } }, '📋 Dán')),
        errBox,
        el('small', { class: 'ss-note', text: '🔒 Key chỉ lưu trên máy này của bạn, dùng để kết nối ai.simi.vn – không gửi đi nơi khác.' }),
        el('button', { class: 'btn primary ss-go', disabled: st.checking, onclick: go }, st.checking ? 'Đang kiểm tra key…' : '🚀 Cài đặt'));
    };

    const progress = () => {
      const list = steps();
      const done = R.result && R.result.ok;
      const pct = done ? 100 : Math.min(95, Math.round(((Math.max(0, R.step) + 0.5) / list.length) * 100));
      return el('div', { class: 'ss-run' }, ...[
        el('div', { class: 'ss-bar' + (R.result ? (R.result.ok ? ' ok' : ' bad') : '') }, el('i', { style: `width:${pct}%` })),
        el('ol', { class: 'ss-steps' }, ...list.map((s, i) => {
          const state = done || i < R.step ? 'done' : i === R.step ? (R.result && !R.result.ok ? 'fail' : 'now') : 'todo';
          return el('li', { class: 'ss-step ' + state }, el('span', { class: 'ss-dot' }, state === 'done' ? '✓' : state === 'fail' ? '!' : state === 'now' ? el('span', { class: 'spin' }) : String(i + 1)), el('span', { text: s.label }));
        })),
        R.running ? el('p', { class: 'ss-hint', text: IS_LINUX ? '⏳ Thường mất 2–5 phút. Nếu Ubuntu hỏi mật khẩu, nhập mật khẩu đăng nhập máy (chỉ hỏi 1 lần để cài phần còn thiếu).' : '⏳ Thường mất 2–5 phút. Bạn cứ làm việc khác – đóng bảng này app vẫn cài tiếp. Nếu Windows hỏi quyền, chọn "Yes".' }) : null,
        R.running ? el('p', { class: 'ss-safe', text: '🛡️ Bộ cài chính thức của SIMI, tải trực tiếp từ ai.simi.vn.' }) : null].filter(Boolean));
    };

    const result = () => {
      if (!R.result) return null;
      if (R.result.ok) {
        return el('div', { class: 'ss-done' }, el('div', { class: 'ss-big', text: '🎉' }), el('b', { text: R.mode === 'update' ? 'Đã cập nhật SIMI AI xong!' : 'Xong! SIMI AI đã sẵn sàng' }),
          el('small', { text: 'Skill, công cụ và model mới đã được nạp vào app.' }),
          el('div', { class: 'ss-row' }, el('button', { class: 'btn primary', onclick: () => { U.closeModal(); window.VPChat && window.VPChat.setView('chat'); } }, '💬 Bắt đầu chat'), el('button', { class: 'btn', onclick: U.closeModal }, 'Đóng')));
      }
      return el('div', { class: 'ss-fail' }, el('b', { text: '⚠️ Chưa cài xong' }), el('span', { text: friendly(R.result.error + '\n' + R.log) }),
        el('div', { class: 'ss-row' },
          el('button', { class: 'btn primary', onclick: () => { R.result = null; R.step = -1; if (R.mode === 'update') { window.vp.simi.update(); } paint(); } }, '🔄 Thử lại'),
          el('button', { class: 'btn', onclick: async () => { try { await navigator.clipboard.writeText(`SIMI ${R.mode}: ${R.result.error}\n\n${R.log.slice(-6000)}`); U.toast('Đã sao chép – dán gửi IT nhé'); } catch { U.toast('Không sao chép được', true); } } }, '📋 Sao chép chi tiết gửi IT')));
    };

    const paint = () => {
      if (!body.isConnected && R.body !== body) return;
      const started = R.running || R.result;
      body.replaceChildren(...[hero(),
        !started && R.mode === 'install' ? codexRow() : null,
        !started && R.mode === 'install' ? form() : null,
        started || R.mode === 'update' ? progress() : null,
        result(),
        !started && R.mode === 'update' ? el('div', { class: 'ss-row' }, el('button', { class: 'linkbtn small', onclick: () => { R.mode = 'install'; R.step = -1; paint(); } }, '🔑 Đổi key team / cài lại')) : null].filter(Boolean));
      const ss = body.querySelector('.ss-key'); if (ss && !st.checking && !started) setTimeout(() => ss.focus(), 0);
    };
    R.paint = paint;
    U.openModal(R.mode === 'update' ? '🔄 Cập nhật SIMI AI' : '🚀 Cài đặt SIMI AI', body, [], 'ss-sheet');
    paint();
    if (!st.status) window.vp.simi.status().then((s) => { st.status = s; if (!R.running && !R.result) paint(); }).catch(() => {});
    // cập nhật: bấm là chạy luôn (key đã lưu)
    if (R.mode === 'update' && !R.running && !R.result) { R.step = 0; paint(); window.vp.simi.update().then((r) => { if (!R.result) onEvent({ type: 'simi-update', ev: 'done', ok: !!r.ok, error: r.error || '' }); }).catch((e) => onEvent({ type: 'simi-update', ev: 'done', ok: false, error: U.cleanErr(e) })); }
  }

  window.VPSimiSetup = { open, onEvent, state: R };
})();
