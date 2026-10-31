// Bộ điều phối: Trưởng phòng chia việc → nhân viên làm (có thể hỏi nhau) → Kiểm tra → Tổng hợp.
const fs = require('fs');
const path = require('path');
const { callAgent } = require('./providers');

const BOSS = 'boss';

function systemPrompt(a) {
  return [
    `Bạn là ${a.name}, chức vụ "${a.title}" trong một văn phòng gồm nhiều AI agent cùng làm việc.`,
    `Vai trò của bạn: ${a.role}`,
    'Luôn trả lời bằng tiếng Việt, đi thẳng vào nội dung, không chào hỏi rườm rà.',
    'Bạn chỉ làm việc bằng văn bản: không chạy lệnh, không tạo hay sửa file trên máy.',
  ].join('\n');
}

function who(a) { return `${a.name} (${a.title})`; }

function extractJson(text) {
  const s = text.indexOf('{'); const e = text.lastIndexOf('}');
  if (s < 0 || e <= s) return null;
  try { return JSON.parse(text.slice(s, e + 1)); } catch { return null; }
}

function preview(t, n = 140) {
  const one = String(t).replace(/[#*_`>]/g, '').replace(/\s+/g, ' ').trim();
  return one.length > n ? one.slice(0, n - 1) + '…' : one;
}

function slugify(s) {
  return String(s).normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd').replace(/Đ/g, 'D')
    .replace(/[^a-zA-Z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 50).toLowerCase() || 'ket-qua';
}

function stamp(d = new Date()) {
  const p = (n) => String(n).padStart(2, '0');
  return `${d.getFullYear()}${p(d.getMonth() + 1)}${p(d.getDate())}-${p(d.getHours())}${p(d.getMinutes())}${p(d.getSeconds())}`;
}

const ASK_RE = /^\s*H[OỎ]I\s*\[\s*([a-z0-9_\-]+)\s*\]\s*:\s*([\s\S]+)$/i;
const OK_RE = /^\s*(Đ[ẠA]T|DAT)\b/i;
const FIX_RE = /^\s*(S[ỬU]A|SUA)\s*:?\s*([\s\S]*)$/i;

async function runTask(task, deps) {
  const { config, emit, signal } = deps;
  const agents = config.agents;
  const byId = Object.fromEntries(agents.map((a) => [a.id, a]));
  const manager = agents.find((a) => a.isManager);
  const reviewer = agents.find((a) => a.isReviewer);
  const target = byId[task.targetId] || manager || agents[0];
  let budget = Math.max(0, Number(config.maxRounds) || 0); // lượt hỏi/sửa thêm cho cả task
  const transcript = [];
  const ctx = { config, signal, getSecret: deps.getSecret, workDir: deps.workDir, simSpeed: deps.simSpeed };

  const say = (from, to, text, kind = 'say') => {
    transcript.push({ t: new Date().toISOString(), from, to, kind, text });
    emit({ type: 'say', taskId: task.id, from, to, kind, text: preview(text, 160) });
  };
  const state = (id, st, note = '') => emit({ type: 'agent', id, state: st, note });
  const nameOf = (id) => (id === BOSS ? 'Sếp' : byId[id] ? who(byId[id]) : id);

  async function call(agent, user, req, busyNote) {
    if (signal.aborted) throw new Error('Đã dừng');
    state(agent.id, 'working', busyNote);
    try {
      const out = await callAgent(agent, systemPrompt(agent), user, ctx, { taskTitle: task.title, ...req });
      state(agent.id, 'idle');
      return out;
    } catch (e) {
      state(agent.id, 'error', e.message);
      throw new Error(`${who(agent)}: ${e.message}`);
    }
  }

  // Một nhân viên làm phần việc của mình, được phép hỏi đồng nghiệp.
  async function doWork(worker, assignment, giver, prior, order) {
    const colleagues = agents.filter((a) => a.id !== worker.id && !a.isManager);
    const talk = [];
    let asked = false;
    for (;;) {
      const canAsk = budget > 0 && colleagues.length > 0;
      const user = [
        `VIỆC CHUNG SẾP GIAO:\n"""${task.text}"""`,
        `VIỆC CỦA BẠN (do ${nameOf(giver)} giao):\n"""${assignment}"""`,
        prior.length ? `KẾT QUẢ ĐỒNG NGHIỆP ĐÃ LÀM TRƯỚC:\n${prior.map((p) => `### ${who(p.agent)}\n${p.output}`).join('\n\n')}` : '',
        talk.length ? `TRAO ĐỔI CỦA BẠN VỚI ĐỒNG NGHIỆP:\n${talk.join('\n')}` : '',
        canAsk
          ? `ĐỒNG NGHIỆP CÓ THỂ HỎI:\n${colleagues.map((c) => `- ${c.id}: ${who(c)} – ${c.role}`).join('\n')}\n\n` +
            `Nếu thật sự thiếu thông tin mà đồng nghiệp có thể cung cấp, CHỈ trả lời đúng một dòng dạng:\nHOI[mã người]: câu hỏi\n(còn ${budget} lượt hỏi). Nếu không cần hỏi, hãy làm và trả về kết quả hoàn chỉnh.`
          : 'Hãy hoàn thành phần việc với thông tin hiện có và trả về kết quả hoàn chỉnh.',
      ].filter(Boolean).join('\n\n');

      const out = await call(worker, user, { kind: 'work', canAsk, asked, colleagues, order }, 'Đang làm');
      const m = out.match(ASK_RE);
      if (canAsk && m && byId[m[1]] && m[1] !== worker.id) {
        budget -= 1; asked = true;
        const mate = byId[m[1]]; const q = m[2].trim();
        say(worker.id, mate.id, q, 'ask');
        const ans = await call(mate, [
          `Đồng nghiệp ${who(worker)} đang làm việc: """${assignment}"""`,
          `Bối cảnh chung (việc sếp giao): """${task.text}"""`,
          `Họ hỏi bạn: """${q}"""`,
          'Trả lời ngắn gọn, đúng trọng tâm.',
        ].join('\n\n'), { kind: 'answer' }, `Trả lời ${worker.name}`);
        say(mate.id, worker.id, ans, 'answer');
        talk.push(`Bạn hỏi ${who(mate)}: ${q}`, `${who(mate)} trả lời: ${ans}`);
        continue;
      }
      return out;
    }
  }

  async function review(results) {
    if (!reviewer || results.every((r) => r.agent.id === reviewer.id)) return { ok: true, note: '' };
    let attempt = 0;
    for (;;) {
      const canRevise = budget > 0;
      const out = await call(reviewer, [
        `VIỆC SẾP GIAO:\n"""${task.text}"""`,
        `KẾT QUẢ CỦA ĐỘI:\n${results.map((r) => `### ${who(r.agent)}\n${r.output}`).join('\n\n')}`,
        'Hãy kiểm tra độ chính xác, đầy đủ và trình bày.',
        canRevise
          ? 'Dòng đầu tiên PHẢI là "DAT" nếu đạt, hoặc "SUA: <những điểm cần sửa>" nếu cần sửa. Sau đó có thể nhận xét ngắn.'
          : 'Dòng đầu tiên ghi "DAT", sau đó nêu nhận xét và lưu ý (nếu có).',
      ].join('\n\n'), { kind: 'review', canRevise, attempt }, 'Đang kiểm tra');
      const fix = out.match(FIX_RE);
      const last = results[results.length - 1];
      if (canRevise && fix && !OK_RE.test(out)) {
        budget -= 1; attempt += 1;
        const fb = fix[2].trim() || out;
        say(reviewer.id, last.agent.id, `Cần sửa: ${fb}`, 'review');
        const revised = await call(last.agent, [
          `VIỆC SẾP GIAO:\n"""${task.text}"""`,
          `BẢN TRƯỚC CỦA BẠN:\n${last.output}`,
          `GÓP Ý CỦA ${who(reviewer).toUpperCase()}:\n${fb}`,
          'Hãy sửa theo góp ý và trả về bản hoàn chỉnh (toàn bộ nội dung, không chỉ phần sửa).',
        ].join('\n\n'), { kind: 'work', revise: true, feedback: fb }, 'Đang sửa');
        last.output = revised;
        say(last.agent.id, reviewer.id, 'Đã sửa xong, nhờ kiểm tra lại.', 'say');
        continue;
      }
      const note = out.replace(OK_RE, '').trim();
      say(reviewer.id, manager && target.isManager ? manager.id : BOSS, `Đạt. ${note}`, 'review');
      return { ok: true, note };
    }
  }

  const stage = (st) => emit({ type: 'stage', id: task.id, stage: st });
  emit({ type: 'task', id: task.id, status: 'running' });
  say(BOSS, target.id, task.text, 'assign');
  let content;
  const results = [];

  if (target.isManager) {
    const workers = agents.filter((a) => !a.isManager && !a.isReviewer);
    let plan = null;
    stage('plan');
    if (workers.length) {
      const planText = await call(manager, [
        `SẾP GIAO VIỆC:\n"""${task.text}"""`,
        `ĐỘI CỦA BẠN:\n${workers.map((w) => `- ${w.id}: ${who(w)} – ${w.role}`).join('\n')}`,
        reviewer ? `(${who(reviewer)} sẽ tự kiểm tra ở cuối, không cần giao cho người này.)` : '',
        'Hãy lập kế hoạch và giao việc. Chỉ giao cho người thật sự cần, theo đúng thứ tự cần làm (người sau nhận được kết quả của người trước).',
        'Trả lời DUY NHẤT một khối JSON theo mẫu, không thêm chữ nào khác:',
        '{"ke_hoach": "tóm tắt kế hoạch 1-2 câu", "giao_viec": [{"cho": "<mã người>", "viec": "mô tả việc cụ thể"}]}',
      ].filter(Boolean).join('\n\n'), { kind: 'plan', workers }, 'Đang lập kế hoạch');
      plan = extractJson(planText);
      let list = (plan && Array.isArray(plan.giao_viec) ? plan.giao_viec : [])
        .filter((g) => g && byId[g.cho] && !byId[g.cho].isManager && g.viec);
      if (!list.length) {
        emit({ type: 'log', level: 'warn', text: 'Trưởng phòng không trả về kế hoạch đúng mẫu, giao toàn bộ việc cho 1 người.' });
        list = [{ cho: workers[workers.length - 1].id, viec: task.text }];
      }
      say(manager.id, BOSS, `Kế hoạch: ${plan?.ke_hoach || 'giao việc cho đội'}`, 'plan');
      stage('work');
      for (let i = 0; i < list.length; i++) {
        const w = byId[list[i].cho];
        say(manager.id, w.id, list[i].viec, 'assign');
        const out = await doWork(w, list[i].viec, manager.id, results, i);
        results.push({ agent: w, assignment: list[i].viec, output: out });
        say(w.id, manager.id, `Xong phần việc: ${out}`, 'done');
      }
    } else {
      const out = await doWork(manager, task.text, BOSS, [], 0);
      results.push({ agent: manager, assignment: task.text, output: out });
    }
    stage('review');
    const rv = await review(results);
    if (results.length === 1 && !rv.note) content = results[0].output;
    else {
      stage('final');
      content = await call(manager, [
        `VIỆC SẾP GIAO:\n"""${task.text}"""`,
        `KẾT QUẢ CÁC THÀNH VIÊN:\n${results.map((r) => `### ${who(r.agent)}\n${r.output}`).join('\n\n')}`,
        rv.note ? `NHẬN XÉT KIỂM TRA:\n${rv.note}` : '',
        'Hãy tổng hợp thành sản phẩm cuối cùng hoàn chỉnh để nộp cho sếp, định dạng Markdown. Chỉ trả về sản phẩm, không kể lại quy trình làm việc.',
      ].filter(Boolean).join('\n\n'), {
        kind: 'final', parts: results.map((r) => ({ title: r.agent.title, output: r.output })),
      }, 'Đang tổng hợp');
    }
    say(manager.id, BOSS, `Đã xong: ${content}`, 'done');
  } else {
    stage('work');
    const out = await doWork(target, task.text, BOSS, [], 0);
    results.push({ agent: target, assignment: task.text, output: out });
    stage('review');
    await review(results);
    content = results[0].output;
    say(target.id, BOSS, `Đã xong: ${content}`, 'done');
  }

  // Lưu kết quả + nhật ký ra thư mục
  let base = `${stamp()}-${slugify(task.title)}`;
  for (let n = 2; fs.existsSync(path.join(deps.outputDir, `${base}.md`)); n++) base = `${stamp()}-${slugify(task.title)}-${n}`;
  const file = path.join(deps.outputDir, `${base}.md`);
  fs.writeFileSync(file, content, 'utf8');
  const logDir = path.join(deps.outputDir, 'nhat-ky');
  fs.mkdirSync(logDir, { recursive: true });
  const logMd = [`# Nhật ký: ${task.title}`, '', `Việc sếp giao: ${task.text}`, '',
    ...transcript.map((m) => `**${nameOf(m.from)} → ${nameOf(m.to)}** _(${m.kind}, ${m.t})_\n\n${m.text}\n`)].join('\n');
  fs.writeFileSync(path.join(logDir, `${base}.nhat-ky.md`), logMd, 'utf8');
  emit({ type: 'result', taskId: task.id, title: task.title, file, content });
  emit({ type: 'task', id: task.id, status: 'done', file });
  return { file, content };
}

module.exports = { runTask, BOSS, extractJson, slugify };
