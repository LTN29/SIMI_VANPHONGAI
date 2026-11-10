// Gọi model cho từng "nguồn": SIMI Gateway, CLI đã đăng nhập, Ollama trên máy, API key, hoặc Giả lập.
const fs = require('fs');
const os = require('os');
const path = require('path');
const sim = require('./sim');
const simi = require('./simi');
const { splitArgs, stripAnsi, runProcess, fetchJson } = require('./sys');

const SOURCES = {
  simi: { label: 'SIMI Gateway – model trong Combo (kèm skill SIMI)', short: 'SIMI', kind: 'cli', brand: 'simi', account: 'simi' },
  sim: { label: 'Giả lập (không gọi AI)', short: 'Giả lập', kind: 'sim', brand: 'sim' },
  'claude-cli': { label: 'Claude – tài khoản Claude (Claude Code)', short: 'Claude', kind: 'cli', brand: 'claude', account: 'claude' },
  'codex-cli': { label: 'ChatGPT – tài khoản ChatGPT (Codex CLI)', short: 'ChatGPT', kind: 'cli', brand: 'openai', account: 'codex' },
  'antigravity-cli': { label: 'Gemini – tài khoản Google (Antigravity CLI)', short: 'Gemini', kind: 'cli', brand: 'gemini', account: 'antigravity' },
  'gemini-cli': { label: 'Gemini CLI (API key trả phí / Enterprise)', short: 'Gemini CLI', kind: 'cli', brand: 'gemini', account: 'gemini' },
  ollama: { label: 'Ollama – model chạy trên máy (riêng tư)', short: 'Ollama', kind: 'local', brand: 'ollama', account: 'ollama' },
  'anthropic-api': { label: 'Claude API (API key)', short: 'Claude API', kind: 'api', brand: 'claude', account: 'anthropic' },
  'openai-api': { label: 'OpenAI API (API key)', short: 'OpenAI API', kind: 'api', brand: 'openai', account: 'openai' },
  'gemini-api': { label: 'Gemini API (API key)', short: 'Gemini API', kind: 'api', brand: 'gemini', account: 'geminikey' },
};

const API_KEY_NAME = { 'anthropic-api': 'anthropic', 'openai-api': 'openai', 'gemini-api': 'gemini' };

// Codex ghi câu trả lời cuối ra file riêng → sạch hơn đọc stdout.
// --ephemeral: các lượt gọi của văn phòng không lưu thành đoạn chat (không làm rác lịch sử ChatGPT Work).
async function runCodex(cmd, args, prompt, opt) {
  const outFile = path.join(os.tmpdir(), `vpai-codex-${process.pid}-${Date.now()}.txt`);
  const { out } = await runProcess(cmd, ['exec', '--ephemeral', '--skip-git-repo-check', '--output-last-message', outFile, ...args, '-'], prompt, opt);
  try { const txt = fs.readFileSync(outFile, 'utf8'); fs.unlinkSync(outFile); return txt; } catch { return out; }
}

async function callCli(source, agent, prompt, ctx) {
  const c = ctx.config.cli;
  const opt = { cwd: ctx.workDir, timeoutMs: ctx.config.timeoutSec * 1000, signal: ctx.signal };
  const model = (agent.model || '').trim();
  const withModel = (flag) => (model ? [flag, model] : []);

  switch (source) {
    case 'claude-cli':
      return (await runProcess(c.claude.cmd || 'claude', ['-p', '--output-format', 'text', ...withModel('--model'), ...(ctx.cliArgs || []), ...splitArgs(c.claude.extraArgs)], prompt, opt)).out;
    case 'codex-cli':
      return runCodex(c.codex.cmd || 'codex', [...withModel('-m'), ...splitArgs(c.codex.extraArgs)], prompt, opt);
    case 'simi':
      // Codex chạy ngầm qua SIMI Gateway: có skill simi-*, MCP trình duyệt, đọc/ghi file trong khu làm việc
      simi.refreshEnv();
      return runCodex(c.codex.cmd || 'codex', [...simi.codexArgs({ model, sandbox: 'workspace-write' }), '-C', ctx.workDir], prompt, opt);
    case 'antigravity-cli': {
      // agy nhận đề bài qua tham số -p; chạy trực tiếp (không qua cmd.exe) để giữ nguyên xuống dòng và dấu tiếng Việt
      const p = prompt.length > 28000 ? prompt.slice(0, 12000) + '\n\n[…đã lược bớt phần giữa vì quá dài…]\n\n' + prompt.slice(-15000) : prompt;
      const ag = c.antigravity || {};
      return (await runProcess(ag.cmd || 'agy', ['-p', p, ...withModel('--model'), ...splitArgs(ag.extraArgs)], '', { ...opt, shell: false })).out;
    }
    case 'gemini-cli':
      return (await runProcess(c.gemini.cmd || 'gemini', [...withModel('-m'), ...splitArgs(c.gemini.extraArgs)], prompt, opt)).out;
    default:
      throw new Error('Nguồn CLI không hợp lệ: ' + source);
  }
}

async function callApi(source, agent, system, user, ctx) {
  const model = (agent.model || '').trim();
  const http = (url, body, headers, name) => fetchJson(url, { method: 'POST', body, headers, name, signal: ctx.signal, timeoutMs: ctx.config.timeoutSec * 1000 });

  if (source === 'ollama') {
    if (!model) throw new Error('Chưa nhập tên model Ollama cho bàn này');
    const base = (ctx.config.ollamaUrl || 'http://127.0.0.1:11434').replace(/\/$/, '');
    const d = await http(`${base}/api/chat`, { model, stream: false, messages: [{ role: 'system', content: system }, { role: 'user', content: user }] }, {}, 'Ollama');
    return d.message?.content || '';
  }

  const key = ctx.getSecret(API_KEY_NAME[source]);
  if (!key) throw new Error('Chưa nhập API key (vào Kết nối → API key)');
  if (!model) throw new Error('Chưa nhập tên model cho bàn này');

  if (source === 'anthropic-api') {
    const d = await http('https://api.anthropic.com/v1/messages', { model, max_tokens: 4096, system, messages: [{ role: 'user', content: user }] },
      { 'x-api-key': key, 'anthropic-version': '2023-06-01' }, 'Claude API');
    return (d.content || []).filter((b) => b.type === 'text').map((b) => b.text).join('\n');
  }
  if (source === 'openai-api') {
    const d = await http('https://api.openai.com/v1/chat/completions', { model, messages: [{ role: 'system', content: system }, { role: 'user', content: user }] },
      { authorization: `Bearer ${key}` }, 'OpenAI API');
    return d.choices?.[0]?.message?.content || '';
  }
  if (source === 'gemini-api') {
    const d = await http(`https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent`,
      { systemInstruction: { parts: [{ text: system }] }, contents: [{ role: 'user', parts: [{ text: user }] }] },
      { 'x-goog-api-key': key }, 'Gemini API');
    return (d.candidates?.[0]?.content?.parts || []).map((p) => p.text || '').join('');
  }
  throw new Error('Nguồn không hợp lệ: ' + source);
}

// req: { kind: 'plan'|'work'|'answer'|'review'|'final'|'ping', ... } dùng cho Giả lập
async function callAgent(agent, system, user, ctx, req = {}) {
  const src = agent.source || 'sim';
  const info = SOURCES[src];
  if (!info) throw new Error('Nguồn không hợp lệ: ' + src);
  let text;
  if (info.kind === 'sim') text = await sim.respond(agent, req, ctx);
  else if (info.kind === 'cli') text = await callCli(src, agent, `${system}\n\n---\n\n${user}`, ctx);
  else text = await callApi(src, agent, system, user, ctx);
  text = stripAnsi(text || '').trim();
  if (!text) throw new Error('Model trả về nội dung rỗng');
  return text;
}

module.exports = { SOURCES, callAgent };
