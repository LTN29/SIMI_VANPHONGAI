// macOS: ký ad-hoc ngay sau khi đóng gói (không cần tài khoản Apple Developer).
// Không ký thì Mac chip Apple báo app "bị hỏng" và chỉ mở được bằng lệnh Terminal. Ký ad-hoc rồi thì người dùng mở được
// bằng giao diện: mở app → Xong → Cài đặt hệ thống → Quyền riêng tư & Bảo mật → Vẫn mở.
// Khi có chứng chỉ Developer ID (CSC_LINK / CSC_NAME) thì bỏ qua để electron-builder ký + công chứng (notarize) thật.
const { execFileSync } = require('child_process');
const path = require('path');

exports.default = async function adhocSign(ctx) {
  if (ctx.electronPlatformName !== 'darwin' || process.platform !== 'darwin') return;
  if (process.env.CSC_LINK || process.env.CSC_NAME) return;
  const app = path.join(ctx.appOutDir, `${ctx.packager.appInfo.productFilename}.app`);
  execFileSync('codesign', ['--force', '--deep', '--sign', '-', app], { stdio: 'inherit' });
  execFileSync('codesign', ['--verify', '--deep', '--strict', '--verbose=2', app], { stdio: 'inherit' });
  console.log('  • đã ký ad-hoc', path.basename(app));
};
