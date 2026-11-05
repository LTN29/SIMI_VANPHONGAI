// 📚 Thêm skill trong app: tạo mới, sửa, nhập thư mục / zip / SKILL.md lẻ, chặn tên SIMI, chặn link tắt, xoá.
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('fs');
const os = require('os');
const path = require('path');
const { execFileSync } = require('child_process');

const home = fs.mkdtempSync(path.join(os.tmpdir(), 'vpai-skills-'));
process.env.CODEX_HOME = home;
const sk = require('../src/skills');
const simi = require('../src/simi');
const dir = (n) => path.join(home, 'skills', n);

test('tạo skill từ form, tên tiếng Việt thành tên gọi không dấu; sửa giữ file đi kèm', () => {
  const name = sk.slugify('Báo cáo tuần – Phòng Kinh doanh');
  assert.equal(name, 'bao-cao-tuan-phong-kinh-doanh');
  sk.saveSkill({ name, description: 'Viết báo cáo tuần: "doanh số", khách mới', body: '## Các bước\n1. Hỏi số liệu' });
  const md = fs.readFileSync(path.join(dir(name), 'SKILL.md'), 'utf8');
  assert.match(md, /^---\nname: bao-cao-tuan-phong-kinh-doanh\ndescription: "Viết báo cáo tuần: \\"doanh số\\", khách mới"\n---\n\n## Các bước/);
  const listed = simi.listSkills().find((s) => s.name === name);
  assert.equal(listed.mine, true);
  assert.throws(() => sk.saveSkill({ name, description: 'Mô tả đủ dài để lưu', body: 'x' }), /Đã có skill/);
  fs.writeFileSync(path.join(dir(name), 'mau.docx'), 'x');
  sk.saveSkill({ name, description: 'Mô tả mới đủ dài để lưu', body: 'Hướng dẫn mới', overwrite: true });
  const r = sk.readSkill(name);
  assert.equal(r.description, 'Mô tả mới đủ dài để lưu');
  assert.equal(r.body, 'Hướng dẫn mới');
  assert.deepEqual(r.files, ['mau.docx']);
  assert.throws(() => sk.saveSkill({ name: 'simi-tao-anh', description: 'Ghi đè skill SIMI', body: 'x' }), /dành cho skill SIMI/);
  assert.throws(() => sk.saveSkill({ name: '../ra-ngoai', description: 'Đường dẫn lạ', body: 'x' }), /không hợp lệ/);
  assert.throws(() => sk.saveSkill({ name: 'ngan', description: 'ngắn', body: 'x' }), /Mô tả quá ngắn/);
});

test('nhập thư mục, zip (nhiều skill), SKILL.md lẻ; trùng tên hỏi lại; link tắt bị chặn; xoá', async () => {
  const src = fs.mkdtempSync(path.join(os.tmpdir(), 'vpai-skill-src-'));
  const mk = (rel, name, desc = 'Skill thử để nhập vào app') => { fs.mkdirSync(path.join(src, rel), { recursive: true }); fs.writeFileSync(path.join(src, rel, 'SKILL.md'), `---\nname: ${name}\ndescription: ${desc}\n---\n# ${name}\n`); };
  mk('kiem-tra-hop-dong', 'kiem-tra-hop-dong');
  fs.mkdirSync(path.join(src, 'kiem-tra-hop-dong', 'scripts'));
  fs.writeFileSync(path.join(src, 'kiem-tra-hop-dong', 'scripts', 'doc.py'), 'print(1)');
  let r = await sk.importSkills([path.join(src, 'kiem-tra-hop-dong')]);
  assert.deepEqual(r.imported.map((x) => [x.name, x.files, x.scripts]), [['kiem-tra-hop-dong', 2, 1]]);
  assert.ok(fs.existsSync(path.join(dir('kiem-tra-hop-dong'), 'scripts', 'doc.py')));

  r = await sk.importSkills([path.join(src, 'kiem-tra-hop-dong')]);
  assert.deepEqual(r.conflicts, ['kiem-tra-hop-dong']);
  const trashed = [];
  r = await sk.importSkills([path.join(src, 'kiem-tra-hop-dong')], { overwrite: true, trash: async (d) => { trashed.push(d); fs.rmSync(d, { recursive: true }); } });
  assert.equal(r.imported.length, 1); assert.equal(trashed.length, 1, 'bản cũ vào Thùng rác');

  // gói zip có 2 skill + 1 skill tên SIMI (bị từ chối)
  mk('goi/bao-gia', 'bao-gia'); mk('goi/sub/cham-soc-khach', 'Chăm sóc khách'); mk('goi/simi-gia', 'simi-gia');
  const zip = path.join(src, 'goi.zip');
  execFileSync('python3', ['-c', `import shutil; shutil.make_archive(${JSON.stringify(zip.slice(0, -4))}, 'zip', ${JSON.stringify(path.join(src, 'goi'))})`]);
  r = await sk.importSkills([zip]);
  assert.deepEqual(r.imported.map((x) => x.name).sort(), ['bao-gia', 'cham-soc-khach']);
  assert.match(r.errors[0].error, /dành cho skill SIMI/);

  // SKILL.md lẻ, thiếu mô tả
  const lone = path.join(src, 'mau-email.md');
  fs.writeFileSync(lone, '---\nname: mau-email\ndescription: >\n  Soạn email chào hàng\n  theo mẫu công ty\n---\nNội dung');
  r = await sk.importSkills([lone]);
  assert.equal(r.imported[0].name, 'mau-email');
  assert.equal(r.imported[0].description, 'Soạn email chào hàng theo mẫu công ty');
  fs.writeFileSync(path.join(src, 'thieu.md'), '# không có frontmatter');
  r = await sk.importSkills([path.join(src, 'thieu.md')]);
  assert.match(r.errors[0].error, /thiếu dòng description/);

  // link tắt trỏ ra ngoài → chặn
  mk('co-link', 'co-link');
  fs.symlinkSync(os.homedir(), path.join(src, 'co-link', 'nha'));
  r = await sk.importSkills([path.join(src, 'co-link')]);
  assert.match(r.errors[0].error, /link tắt/);
  assert.equal(fs.existsSync(dir('co-link')), false);

  await sk.removeSkill('bao-gia');
  assert.equal(fs.existsSync(dir('bao-gia')), false);
  await assert.rejects(() => sk.removeSkill('simi-tao-anh'), /dành cho skill SIMI/);
});
