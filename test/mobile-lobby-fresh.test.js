// Sảnh trên điện thoại (app Android / web /m) là bản đóng gói từ Sảnh của app này (npm run build:mobile → repo Gateway).
// Sửa Sảnh mà quên đóng gói lại thì điện thoại thiếu chỗ mới → test này báo. Máy không có repo Gateway cạnh bên (CI) thì bỏ qua.
const test = require('node:test');
const assert = require('node:assert');
const fs = require('fs');
const path = require('path');
const { sourceHash, pickCss } = require('../build/mobile-lobby');

const GW = process.env.GATEWAY_DIR || path.join(__dirname, '..', '..', 'ltn-memory-gateway', 'ltn-memory-gateway');
const VER = path.join(GW, 'site', 'mobile', 'sanh3d', 'version.json');

test('Sảnh điện thoại đã đóng gói lại sau lần sửa Sảnh gần nhất', { skip: !fs.existsSync(path.join(GW, 'site', 'mobile')) && 'không có repo Gateway cạnh bên' }, () => {
  assert.ok(fs.existsSync(VER), 'Chưa đóng gói Sảnh cho điện thoại – chạy: npm run build:mobile');
  const v = JSON.parse(fs.readFileSync(VER, 'utf8'));
  assert.equal(v.source, sourceHash(), `Sảnh trên điện thoại đang là bản cũ (app ${v.app}) – chạy: npm run build:mobile rồi commit site/mobile/sanh3d bên repo Gateway`);
});

test('lấy đúng CSS ống xin quẻ cho điện thoại', () => {
  const css = '.a{color:red}\n.fq-card{x:1}\n@keyframes fqShake{0%{a:1}100%{a:2}}\n@media (max-width:9px){.fq{y:2}}\n.b{z:3}';
  const out = pickCss(css, /\bfq/);
  assert.match(out, /\.fq-card \{x:1\}/); assert.match(out, /@keyframes fqShake/); assert.match(out, /@media/); assert.doesNotMatch(out, /\.a\{|\.b\{/);
});
