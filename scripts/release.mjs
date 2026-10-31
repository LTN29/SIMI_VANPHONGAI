#!/usr/bin/env node
// Phát hành bản mới bằng 1 lệnh (chạy trên máy dev, trong thư mục app):
//   npm run release -- 0.9.12 "Sửa lỗi mở đoạn chat | Màn chiếu YouTube"
// → đặt version trong package.json, commit mọi thay đổi, gắn nhãn v0.9.12 (ghi chú = nội dung, " | " = xuống dòng),
//   đẩy lên GitHub. GitHub Actions build 3 hệ điều hành + tạo Release; Gateway tự đăng; máy nhân viên hiện "Cập nhật ngay".
import { execFileSync } from "node:child_process";
import { readFileSync, writeFileSync } from "node:fs";

const [version, ...rest] = process.argv.slice(2);
const notesArg = rest.join(" ").trim();
if (!/^\d+\.\d+\.\d+$/.test(version || "")) {
  console.error('Cách dùng: npm run release -- <phiên bản, vd 0.9.12> "Có gì mới 1 | Có gì mới 2"');
  process.exit(1);
}
const git = (...a) => execFileSync("git", a, { stdio: ["ignore", "pipe", "inherit"] }).toString().trim();
const cmp = (a, b) => { const x = a.split(".").map(Number), y = b.split(".").map(Number); for (let i = 0; i < 3; i++) if (x[i] !== y[i]) return x[i] - y[i]; return 0; };

const pkg = JSON.parse(readFileSync("package.json", "utf8"));
if (cmp(version, pkg.version) < 0) { console.error(`Phiên bản ${version} cũ hơn bản hiện tại ${pkg.version}`); process.exit(1); }
if (git("tag", "-l", `v${version}`)) { console.error(`Nhãn v${version} đã có – chọn số khác`); process.exit(1); }

const text = readFileSync("package.json", "utf8").replace(/("version":\s*")[^"]+(")/, `$1${version}$2`);
writeFileSync("package.json", text);
const notes = (notesArg || `Văn Phòng AI ${version}`).split(/\s*\|\s*/).map((l) => (l.startsWith("-") ? l : `- ${l}`)).join("\n");

git("add", "-A");
try { git("commit", "-m", `Văn Phòng AI ${version}`, "-m", notes); } catch { /* không có thay đổi gì ngoài nhãn */ }
git("tag", "-a", `v${version}`, "-m", notes);
execFileSync("git", ["push", "origin", "HEAD", `v${version}`], { stdio: "inherit" });
console.log(`\n✓ Đã đẩy v${version}. GitHub Actions đang build (khoảng 10–15 phút):`);
console.log("  xem tiến độ ở tab Actions của repo. Xong là Gateway tự đăng trong vài phút, máy nhân viên hiện \"Cập nhật ngay\".");
