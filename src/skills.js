// Thêm / sửa / xoá skill của người dùng ngay trong app (không cần mở thư mục, không cần Terminal).
// Skill nằm ở CODEX_HOME/skills/<tên>/SKILL.md – Codex tự nạp; skill SIMI (simi-*, muse-*) do bản cập nhật SIMI quản lý nên không cho sửa / xoá ở đây.
const fs = require('fs');
const os = require('os');
const path = require('path');
const { execFile } = require('child_process');

const IS_WIN = process.platform === 'win32';
const codexHome = () => process.env.CODEX_HOME || path.join(os.homedir(), '.codex');
const skillsDir = () => path.join(codexHome(), 'skills');
const RESERVED = /^(simi|muse|updatesimi)/i;
const NAME_OK = /^[a-z0-9][a-z0-9-]{1,62}[a-z0-9]$/;
const MAX_BYTES = 50 * 1024 * 1024;
const MAX_FILES = 2000;
const SCRIPT_EXT = /\.(py|sh|ps1|psm1|bat|cmd|js|mjs|cjs|ts|exe|vbs|rb|pl)$/i;
const SKIP_DIRS = new Set(['.git', 'node_modules', '__MACOSX', '.venv', '__pycache__']);

// "Báo cáo tuần – Phòng KD" → "bao-cao-tuan-phong-kd"
function slugify(s) {
  return String(s || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd').replace(/Đ/g, 'd')
    .toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 64).replace(/-+$/, '');
}

function checkName(name) {
  if (!NAME_OK.test(name)) throw new Error(`Tên skill "${name}" không hợp lệ – chỉ dùng chữ thường không dấu, số và dấu gạch ngang (3–64 ký tự).`);
  if (RESERVED.test(name)) throw new Error(`Tên "${name}" dành cho skill SIMI (bản cập nhật sẽ ghi đè) – đặt tên khác nhé.`);
}

function splitSkill(txt) {
  const m = String(txt).replace(/^\uFEFF/, '').match(/^---\s*\r?\n([\s\S]*?)\r?\n---\s*\r?\n?([\s\S]*)$/);
  if (!m) return { fm: '', body: String(txt) };
  return { fm: m[1], body: m[2] };
}
function fmGet(fm, key) {
  const m = fm.match(new RegExp('^' + key + ':\\s*(.*)$', 'm'));
  if (!m) return '';
  const v = m[1].trim();
  if (v === '>' || v === '|' || v === '>-' || v === '|-') {
    const block = fm.match(new RegExp('^' + key + ':\\s*[>|]-?\\s*\\r?\\n((?:[ \\t]+.*(?:\\r?\\n|$))+)', 'm'));
    return block ? block[1].replace(/\s+/g, ' ').trim() : '';
  }
  if (/^".*"$/.test(v)) { try { return JSON.parse(v); } catch { /* để nguyên */ } }
  return v.replace(/^["']|["']$/g, '');
}

function skillMarkdown({ name, description, body }) {
  const desc = String(description || '').replace(/\s+/g, ' ').trim();
  return `---\nname: ${name}\ndescription: ${JSON.stringify(desc)}\n---\n\n${String(body || '').replace(/\r\n/g, '\n').trim()}\n`;
}

function userSkillPath(name) {
  checkName(name);
  const dir = path.join(skillsDir(), name);
  if (path.dirname(dir) !== skillsDir()) throw new Error('Đường dẫn skill không hợp lệ');
  return dir;
}

// tạo mới, hoặc sửa SKILL.md của skill đã có (giữ nguyên các file đi kèm)
function saveSkill({ name, description, body, overwrite = false }) {
  name = String(name || '').trim();
  description = String(description || '').replace(/\s+/g, ' ').trim();
  body = String(body || '').trim();
  const dir = userSkillPath(name);
  if (description.length < 10) throw new Error('Mô tả quá ngắn – ghi rõ skill làm gì và khi nào dùng (để AI biết lúc nào gọi).');
  if (description.length > 1000) throw new Error('Mô tả dài quá 1000 ký tự – rút gọn lại, chi tiết để ở phần hướng dẫn.');
  if (!body) throw new Error('Chưa có hướng dẫn – viết các bước AI cần làm.');
  if (fs.existsSync(dir) && !overwrite) throw new Error(`Đã có skill "${name}" – đổi tên khác hoặc mở skill đó để sửa.`);
  fs.mkdirSync(dir, { recursive: true });
  const file = path.join(dir, 'SKILL.md');
  fs.writeFileSync(file + '.tmp', skillMarkdown({ name, description, body }), 'utf8');
  fs.renameSync(file + '.tmp', file);
  return { name, dir };
}

function readSkill(name) {
  const dir = userSkillPath(name);
  const txt = fs.readFileSync(path.join(dir, 'SKILL.md'), 'utf8');
  const { fm, body } = splitSkill(txt);
  const files = walk(dir).files.filter((f) => f !== 'SKILL.md');
  return { name, description: fmGet(fm, 'description'), body: body.trim(), files, dir };
}

async function removeSkill(name, trash) {
  const dir = userSkillPath(name);
  if (!fs.existsSync(path.join(dir, 'SKILL.md'))) throw new Error(`Không thấy skill "${name}"`);
  if (trash) await trash(dir); else fs.rmSync(dir, { recursive: true, force: true });
  return { name };
}

// liệt kê file trong thư mục skill: chặn link tắt (symlink) trỏ ra ngoài, giới hạn dung lượng
function walk(root) {
  const files = []; let bytes = 0;
  const go = (rel) => {
    for (const d of fs.readdirSync(path.join(root, rel), { withFileTypes: true })) {
      const r = rel ? rel + '/' + d.name : d.name;
      if (d.isSymbolicLink()) throw new Error(`Skill có link tắt "${r}" – không nhập được vì lý do an toàn.`);
      if (d.isDirectory()) { if (!SKIP_DIRS.has(d.name)) go(r); continue; }
      if (!d.isFile()) continue;
      files.push(r); bytes += fs.statSync(path.join(root, r)).size;
      if (files.length > MAX_FILES || bytes > MAX_BYTES) throw new Error('Skill quá lớn (tối đa 2000 file, 50MB).');
    }
  };
  go('');
  return { files, bytes };
}

// tìm các thư mục có SKILL.md (1 gói có thể chứa nhiều skill), sâu tối đa 3 tầng
function findSkillDirs(root, depth = 0, out = []) {
  if (fs.existsSync(path.join(root, 'SKILL.md'))) { out.push(root); return out; }
  if (depth >= 3) return out;
  for (const d of fs.readdirSync(root, { withFileTypes: true })) {
    if (d.isDirectory() && !SKIP_DIRS.has(d.name) && !d.name.startsWith('.')) findSkillDirs(path.join(root, d.name), depth + 1, out);
  }
  return out;
}

function run(cmd, args) {
  return new Promise((resolve, reject) => execFile(cmd, args, { timeout: 120000, windowsHide: true }, (e) => (e ? reject(e) : resolve())));
}
async function extractZip(file, dest) {
  const ps = (s) => s.replace(/'/g, "''");
  const tries = IS_WIN
    ? [[path.join(process.env.SystemRoot || 'C:\\Windows', 'System32', 'tar.exe'), ['-xf', file, '-C', dest]],
      ['powershell.exe', ['-NoProfile', '-NonInteractive', '-Command', `Expand-Archive -LiteralPath '${ps(file)}' -DestinationPath '${ps(dest)}' -Force`]]]
    : [['unzip', ['-q', '-o', file, '-d', dest]], ['bsdtar', ['-xf', file, '-C', dest]], ['tar', ['-xf', file, '-C', dest]], ['python3', ['-m', 'zipfile', '-e', file, dest]]];
  let last;
  for (const [cmd, args] of tries) {
    try { await run(cmd, args); if (fs.readdirSync(dest).length) return; } catch (e) { last = e; }
  }
  throw new Error('Không giải nén được file zip' + (last ? ': ' + String(last.message).split('\n')[0] : ''));
}

// nhập skill từ thư mục, file .zip / .skill, hoặc một file SKILL.md lẻ
// trùng tên mà chưa cho ghi đè → trả về conflicts để hỏi lại người dùng
async function importSkills(sources, { overwrite = false, trash = null } = {}) {
  const imported = []; const conflicts = []; const errors = [];
  const tmpRoots = [];
  try {
    for (const src of [].concat(sources || [])) {
      try {
        const st = fs.statSync(src);
        let roots = [];
        if (st.isDirectory()) roots = findSkillDirs(src);
        else if (/\.(zip|skill)$/i.test(src)) {
          const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'vp-skill-')); tmpRoots.push(tmp);
          await extractZip(src, tmp);
          roots = findSkillDirs(tmp);
        } else if (/\.md$/i.test(src)) {
          const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'vp-skill-')); tmpRoots.push(tmp);
          fs.copyFileSync(src, path.join(tmp, 'SKILL.md'));
          roots = [tmp];
        } else throw new Error('Chỉ nhận thư mục skill, file .zip / .skill hoặc SKILL.md');
        if (!roots.length) throw new Error('Không thấy file SKILL.md bên trong');
        for (const dir of roots) {
          const { fm } = splitSkill(fs.readFileSync(path.join(dir, 'SKILL.md'), 'utf8'));
          const base = tmpRoots.includes(dir) ? path.basename(src).replace(/\.[^.]+$/, '') : path.basename(dir);
          const name = slugify(fmGet(fm, 'name') || base);
          const description = fmGet(fm, 'description');
          if (!description) { errors.push({ source: path.basename(src), name, error: 'SKILL.md thiếu dòng description (mô tả khi nào dùng skill)' }); continue; }
          try { checkName(name); } catch (e) { errors.push({ source: path.basename(src), name, error: e.message }); continue; }
          const { files } = walk(dir);
          const dest = path.join(skillsDir(), name);
          if (fs.existsSync(dest) && !overwrite) { conflicts.push(name); continue; }
          fs.mkdirSync(skillsDir(), { recursive: true });
          const stage = dest + '.nhap-' + process.pid;
          fs.rmSync(stage, { recursive: true, force: true });
          fs.cpSync(dir, stage, { recursive: true, filter: (p) => !SKIP_DIRS.has(path.basename(p)) });
          if (fs.existsSync(dest)) { if (trash) await trash(dest); else fs.rmSync(dest, { recursive: true, force: true }); }
          fs.renameSync(stage, dest);
          imported.push({ name, description: description.slice(0, 220), files: files.length, scripts: files.filter((f) => SCRIPT_EXT.test(f)).length });
        }
      } catch (e) { errors.push({ source: path.basename(String(src)), error: e.message }); }
    }
  } finally {
    for (const t of tmpRoots) fs.rmSync(t, { recursive: true, force: true });
  }
  return { imported, conflicts, errors };
}

module.exports = { slugify, saveSkill, readSkill, removeSkill, importSkills, skillsDir, skillMarkdown, RESERVED };
