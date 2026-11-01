# Văn Phòng AI

Văn phòng kiểu game: mỗi bàn là một agent, mỗi bàn gán một model tùy ý (SIMI Gateway, Claude, GPT, Gemini, model chạy trên máy). Bạn giao việc bằng cách kéo thẻ thả vào bàn; các agent tự chia việc, hỏi nhau, kiểm tra rồi nộp kết quả vào khay.

Có thêm tab **💬 Chat** thay cho ChatGPT Work / Codex Desktop: chat với mọi model trong Combo của SIMI Gateway, gọi skill SIMI, gửi ảnh và file, chia đoạn chat theo dự án.

Và tab **🌐 Sảnh**: gặp đồng nghiệp đang dùng AI trong một căn phòng 3D chung, thấy ai đang làm gì, tự chọn nhân vật và nhắn tin với nhau.

## Chạy app

### Tải bản cài

Bản cài cho 3 hệ điều hành do GitHub Actions tự build mỗi lần phát hành (repo `LTN29/SIMI_VANPHONGAI`, tab **Releases**) và Gateway tự đăng lên trang **https://ai.simi.vn/install/vanphong**. Gói gửi tay cho nhân viên (Google Drive…) gồm 3 file zip:

| Gói | Bên trong |
|---|---|
| `VanPhongAI-<phiên bản>-Windows.zip` | `VanPhongAI-<phiên bản>-Setup.exe` + `HUONG-DAN.txt` |
| `VanPhongAI-<phiên bản>-macOS.zip` | `VanPhongAI-<phiên bản>-mac-arm64.zip` (chip Apple) + `VanPhongAI-<phiên bản>-mac-x64.zip` (chip Intel) + `CAI-DAT-TREN-MAC.command` + `HUONG-DAN.txt` |
| `VanPhongAI-<phiên bản>-Ubuntu.zip` | `.deb` + `.AppImage` + `HUONG-DAN.txt` |

Mã nguồn để riêng trong `VanPhongAI-<phiên bản>-src.zip` (đúng bằng nhãn `v<phiên bản>` trên GitHub).

### Windows

Bấm đúp **`VanPhongAI-<phiên bản>-Setup.exe`**: cài 1 lần, có lối tắt ở Start Menu và Desktop, sau đó app tự cập nhật. Từ 0.9.13 không còn bản chạy ngay (portable); máy đang dùng bản portable bấm **Cập nhật ngay** là được chuyển sang bản cài.

Lần đầu mở, Windows có thể hiện "Windows protected your PC" (file chưa có chữ ký số). Bấm **More info → Run anyway**.

### macOS (Mac chip Apple M1–M4 và Mac chip Intel)

Yêu cầu: macOS 11 Big Sur trở lên. Có 2 bản: **`mac-arm64`** cho Mac chip Apple (M1–M4) và **`mac-x64`** cho Mac chip Intel (máy đời 2020 trở về trước). Không biết máy mình chip gì: bấm quả táo ở góc trên bên trái → **Giới thiệu về máy Mac này** – dòng **Chip: Apple M…** là chip Apple, dòng **Bộ xử lý: … Intel** là chip Intel. Script cài bên dưới tự nhận loại chip.

**Bước 1 – Chép file sang Mac**

Giải nén `VanPhongAI-<phiên bản>-macOS.zip` trên máy Mac (hoặc chép cả thư mục sang qua USB, AirDrop…), ví dụ để ở `Downloads/VanPhongAI-macOS`. Trong thư mục có:
- `VanPhongAI-<phiên bản>-mac-arm64.zip` – app cho chip Apple
- `VanPhongAI-<phiên bản>-mac-x64.zip` – app cho chip Intel
- `CAI-DAT-TREN-MAC.command` – script cài (tự chọn đúng file theo chip)

**Bước 2 – Chạy script cài**

1. Mở **Terminal** (nhấn `Cmd + Space`, gõ `Terminal`, Enter).
2. Gõ `bash ` (có một dấu cách phía sau, **chưa** bấm Enter).
3. Kéo file **`CAI-DAT-TREN-MAC.command`** từ Finder thả vào cửa sổ Terminal. Dòng lệnh sẽ thành dạng `bash /Users/<tên>/Downloads/VanPhongAI-macOS/CAI-DAT-TREN-MAC.command`.
4. Bấm **Enter**.

Script sẽ tự giải nén, chép **VanPhongAI** vào **Applications**, gỡ cờ cách ly của macOS, ký ad-hoc bằng lệnh `codesign` có sẵn trên Mac, rồi mở app. Thấy dòng `✓ Đã cài xong` là xong.

Lần sau mở app từ **Launchpad** hoặc thư mục **Applications** như bình thường. Muốn ghim lên Dock: chuột phải icon trên Dock khi app đang mở → **Options → Keep in Dock**.

**Cài tay (nếu không dùng script)**

1. Bấm đúp file `VanPhongAI-<phiên bản>-mac-arm64.zip` (chip Intel: `-mac-x64.zip`) để giải nén, kéo **`VanPhongAI.app`** vào **Applications**.
2. Mở Terminal, chạy lần lượt 2 lệnh:
```
xattr -cr /Applications/VanPhongAI.app
codesign --force --deep --sign - /Applications/VanPhongAI.app
```
3. Mở app từ Applications.

**Bước 3 – Kết nối tài khoản AI** (nhân viên SIMI xem mục *SIMI Gateway* bên dưới, chỉ cần key team)

Mở app → bấm **Kết nối** trên thanh trên cùng. Mỗi tài khoản có nút **Cài đặt** và **Đăng nhập**: bấm vào, app mở cửa sổ Terminal và chạy sẵn lệnh chính hãng, bạn chỉ cần làm theo hướng dẫn (thường là đăng nhập trên trình duyệt). Đăng nhập xong quay lại app, trạng thái tự chuyển sang **Đã kết nối** sau vài giây.

| Tài khoản | Công cụ app dùng | Ghi chú |
|---|---|---|
| Claude Pro / Max | Claude Code | Cài bằng bộ cài chính hãng, không cần Node.js |
| ChatGPT Plus / Pro | Codex CLI | Cần cài **Node.js** trước (nodejs.org, bản LTS) |
| Google (Gemini) | Antigravity CLI (`agy`) | Từ 18/6/2026 tài khoản Google thường dùng Antigravity thay cho Gemini CLI |
| Ollama | Ollama | Model chạy ngay trên Mac, tải tại ollama.com |

Nếu muốn cài bằng tay trong Terminal:
```
curl -fsSL https://claude.ai/install.sh | bash
npm install -g @openai/codex
curl -fsSL https://antigravity.google/cli/install.sh | bash
```
Rồi đăng nhập: `claude auth login`, `codex login`, `agy`.

**Gặp lỗi trên Mac**

| Thông báo | Cách xử lý |
|---|---|
| "VanPhongAI is damaged and can't be opened" | Chạy lại 2 lệnh `xattr` và `codesign` ở phần cài tay |
| "Apple could not verify…" | Vào **System Settings → Privacy & Security**, kéo xuống, bấm **Open Anyway** |
| Trang Kết nối vẫn báo "Chưa cài" sau khi cài xong | Bấm **Kiểm tra lại**; nếu vẫn vậy, thoát hẳn app bằng `Cmd + Q` rồi mở lại |
| Bản 3D bị giật | Bấm **2D** ở góc dưới văn phòng |

### Ubuntu / Linux (máy 64-bit, Ubuntu 22.04 / 24.04 trở lên)

Trong gói `VanPhongAI-<phiên bản>-Ubuntu.zip` có 2 file, dùng một trong hai:

**Cách 1 – gói `.deb` (khuyên dùng)**
```
sudo apt install ./VanPhongAI-<phiên bản>-linux-amd64.deb
```
Cài xong mở **Văn Phòng AI** trong menu ứng dụng (phím Super, gõ "Văn Phòng"), hoặc gõ `vanphong-ai` trong Terminal. Gói tự cài hồ sơ AppArmor để app chạy được trên Ubuntu 24.04 mà không cần tắt sandbox. Gỡ: `sudo apt remove vanphong-ai`.

**Cách 2 – file `.AppImage` (không cần cài, chạy ở đâu cũng được)**
```
sudo apt install libfuse2t64      # Ubuntu 24.04 (Ubuntu 22.04: libfuse2)
chmod +x VanPhongAI-<phiên bản>-linux-x86_64.AppImage
./VanPhongAI-<phiên bản>-linux-x86_64.AppImage
```
Nếu báo lỗi sandbox (`The SUID sandbox helper binary was found, but is not configured correctly`) thì chạy thêm `--no-sandbox` ở cuối lệnh, hoặc dùng gói `.deb`.

**Kết nối SIMI trên Ubuntu**: bấm **Kết nối → Cài đặt SIMI** như trên Mac (app mở Terminal chạy `curl -fsSL https://ai.simi.vn/install/codex.sh | bash`). Nên cài thêm `bubblewrap` để Codex chạy được chế độ "Sửa trong dự án":
```
sudo apt install bubblewrap curl
```
Cần có Node.js (bản LTS) cho Codex: `sudo apt install nodejs npm` hoặc theo hướng dẫn trên nodejs.org.

## SIMI Gateway (key team – dùng cho nhân viên)

Một key team là dùng được **mọi model trong Combo** admin cấp trên 9Router, kèm **toàn bộ skill SIMI** (tạo ảnh, tạo video, đọc PDF, tìm web, đọc trang web, trình duyệt, chép lời, soạn tài liệu…). Không cần cài từng CLI riêng.

**Cài lần đầu**
1. Sao chép **API key team** admin gửi cho bạn.
2. Mở app → **Kết nối** → thẻ **SIMI Gateway** → **Cài đặt SIMI**. App mở cửa sổ chạy bộ cài chính thức của Gateway (`irm https://ai.simi.vn/install/codex.ps1 | iex` trên Windows, `curl -fsSL https://ai.simi.vn/install/codex.sh | bash` trên Mac).
3. Trong cửa sổ đó chọn **1 (Install)** → Enter để lấy key từ Clipboard. Bộ cài tự cài Codex, skill SIMI, trình duyệt SIMI và danh sách model.
4. Quay lại app, thẻ SIMI chuyển sang **Đã kết nối** (hoặc bấm **Kiểm tra lại**).

**Cập nhật SIMI** (khi admin thêm model, skill, plugin mới): bấm **Cập nhật SIMI** (trong thẻ SIMI ở trang Kết nối, hoặc trong **🧰 Công cụ** của tab Chat). App chạy bộ cài ở chế độ Update ngay bên trong, hiện tiến độ, không cần mở Terminal hay chọn menu. Key đã lưu, không cần nhập lại. Ngoài ra máy đã cài SIMI vẫn tự làm mới skill lúc đăng nhập và mỗi 6 giờ. Trên Windows việc này chạy ẩn hoàn toàn (qua `wscript.exe`, không bật cửa sổ); máy cài từ trước tự chuyển sang chạy ẩn khi mở Văn Phòng AI 0.9.13 trở lên.

## Cập nhật app (tự động qua SIMI Gateway)

Admin đăng bản mới lên Gateway → máy nhân viên **tự tải sẵn ở chế độ nền** (kiểm tra mã SHA-256) → báo **"Văn Phòng AI x.y.z đã sẵn sàng"** → người dùng bấm **Cập nhật ngay** là xong. App tự đóng, cài bản mới đúng kiểu đang dùng rồi mở lại; đoạn chat, cài đặt, nhân vật giữ nguyên.

- **Báo ở đâu**: thẻ thông báo góc trên bên phải (kèm vài dòng có gì mới), nút **⬆️ Cập nhật x.y.z** trên thanh trên cùng, và thông báo của Windows / Mac / Ubuntu nếu đang ở cửa sổ khác (bấm vào là mở app).
- **Báo khi nào**: máy đang mở Sảnh online nhận tin **ngay khi admin đăng bản** (vài giây). Ngoài ra app tự kiểm tra lúc mở, mỗi 10 phút, khi quay lại app sau 2 phút và khi máy ngủ dậy (mỗi lần chỉ đọc 1 file nhỏ).
- **Để sau**: ẩn thẻ 4 giờ, nút trên thanh trên cùng vẫn còn để cập nhật lúc nào cũng được. Bản đã tải được giữ lại, lần mở app sau không tải lại.
- **Cài thế nào**:
  - Windows: cài đè im lặng rồi mở lại. Từ 0.9.13 không còn phát hành bản chạy ngay (portable); máy đang dùng bản chạy ngay bấm **Cập nhật ngay** sẽ được cài bản Setup, từ đó mở app bằng biểu tượng Văn Phòng AI trên Desktop.
  - Mac: thay `VanPhongAI.app` trong Applications (tự gỡ cờ cách ly, tự ký như script cài).
  - Ubuntu `.deb`: Ubuntu hỏi mật khẩu máy một lần để cài. AppImage: thay file.

Tắt tự kiểm tra và tải sẵn, hoặc kiểm tra ngay ở **Cài đặt → Cập nhật**. App chỉ báo khi số phiên bản trên Gateway **lớn hơn** bản đang chạy, nên mỗi lần đổi giao diện / tính năng nhớ tăng `version` trong `package.json` trước khi build. Cách phát hành bản mới xem mục **Phát hành bản mới** bên dưới.

**Cập nhật app khác Cập nhật SIMI**: giao diện và tính năng của app nằm trong file app, chỉ đổi khi cập nhật app. **Cập nhật SIMI** chỉ cập nhật Codex, cấu hình, skill và plugin của SIMI.

## Phát hành bản mới (GitHub tự build, Gateway tự đăng)

Mã nguồn ở repo `LTN29/SIMI_VANPHONGAI`. Không cần chép file lên server, không cần build trên máy mình:

```
npm run release -- 0.9.12 "Sửa lỗi mở đoạn chat | Màn chiếu YouTube"
```

Lệnh này đặt `version` trong `package.json`, commit mọi thay đổi, gắn nhãn `v0.9.12` (ghi chú bản mới là phần trong ngoặc kép, ` | ` là xuống dòng) và đẩy lên GitHub. Sau đó tự chạy:

1. **GitHub Actions** (`.github/workflows/release.yml`, khoảng 10–15 phút): kiểm tra mã + test, build bản Windows trên máy Windows, bản Ubuntu và macOS trên máy Ubuntu, rồi tạo **Release** kèm 5 file cài. Xem tiến độ ở tab **Actions** của repo; nhãn không khớp `version` trong `package.json` thì dừng ngay.
2. **Gateway** (đặt `VANPHONG_GITHUB_REPO` + `VANPHONG_GITHUB_TOKEN` trong `.env` của server) hỏi GitHub mỗi 5 phút, thấy Release mới thì tải về, kiểm SHA-256 và đăng.
3. **Máy nhân viên**: máy mở Sảnh biết trong khoảng 30 giây, tự tải sẵn và hiện **Cập nhật ngay** (Windows, macOS, Ubuntu đều nhận).

Muốn đăng ngay không đợi 5 phút: trên server chạy `node --env-file=.env scripts/sync-vanphong-github.mjs` trong thư mục Gateway. Vẫn đăng tay được bằng `scripts/publish-vanphong.mjs <thư-mục-build>` như trước.

App đọc đúng cấu hình bộ cài đã ghi (`~/.codex/config.toml`, key `LTN_TEAM_API_KEY` / Keychain) và chạy **Codex ngầm** làm động cơ, nên quyền model, quota Premium/Free và bộ nhớ team vẫn do Gateway quản lý như cũ. Máy đã cài SIMI trước đó thì mở app là dùng được luôn.

## Tab Chat (thay cho ChatGPT Work)

Bấm **💬 Chat** trên thanh trên cùng.

- **Đoạn chat** nhớ toàn bộ cuộc trò chuyện (mỗi đoạn là một phiên Codex riêng). Ghim, đổi tên, tìm kiếm, xóa ngay ở cột trái.
- **Dự án**: bấm **＋ Thêm dự án** để chọn một thư mục; đoạn chat trong dự án đọc/ghi file ngay trong thư mục đó. Không chọn dự án thì dùng `Documents/VanPhongAI/Chat`.
- **Chọn model** trong Combo của bạn ngay dưới ô nhập, đổi giữa chừng cũng được. Bên cạnh là **mức suy nghĩ** (Nhanh / Vừa / Kỹ / Rất kỹ) và **quyền trên máy**:
  - 🔒 Chỉ đọc · 📁 Sửa trong dự án (mặc định, có mạng để skill gọi Gateway) · ⚠️ Toàn quyền.
- **Gọi skill**: gõ `/` (hoặc bấm **/ Skill**) để mở danh sách skill trên máy, chọn rồi gõ yêu cầu. Màn hình chat mới có sẵn các ô skill hay dùng.
- **Gọi plugin / công cụ bằng `@`** (giống ChatGPT Work): gõ `@` để chọn **🖱️ Máy tính** (AI điều khiển chuột, bàn phím), **🧭 Trình duyệt SIMI**, hoặc plugin Codex đã cài (Computer Use của ChatGPT, Spreadsheets, Template Creator…). Ví dụ: `@Máy tính mở Excel file báo cáo rồi lọc cột Doanh thu`.
- **Gửi ảnh / file**: dán ảnh bằng `Ctrl + V`, kéo thả file vào ô chat, hoặc bấm **＋**.
- **Kết quả**: các bước công cụ (chạy lệnh, gọi công cụ, tìm web, sửa file) hiện gọn trong mục **⚙️ N bước**, bấm để xem chi tiết. File skill tạo ra (ảnh, video, tài liệu…) hiện ngay dưới câu trả lời kèm nút **Mở** / **Mở thư mục**.
- **Liên thông ChatGPT Work**: các đoạn chat bên ChatGPT Work / Codex Desktop tự hiện ở cột trái, gom theo dự án y như bên kia (biểu tượng ↗). Bấm vào là nạp toàn bộ hội thoại; chat tiếp ở đây thì ghi nối vào đúng đoạn đó, mở lại ChatGPT Work vẫn thấy. Ngược lại, chat thêm bên ChatGPT Work thì quay lại app sẽ tự cập nhật. Nút ⟳ dưới danh sách để đọc lại ngay.
- **Lưu trữ & xóa**: rê chuột vào đoạn chat hoặc tiêu đề dự án, bấm **⋯**:
  - **📦 Lưu trữ**: ẩn khỏi danh sách và lưu trữ luôn bên ChatGPT Work. Với dự án là **Lưu trữ cả dự án**. Đang mở đoạn chat thì dùng nút 📦 / 🗑 trên đầu khung chat.
  - **🗑 Xóa**: hỏi lại trước khi xóa. Mặc định chỉ xóa khỏi app. Đánh dấu **Xóa luôn trong ChatGPT Work** thì xóa cả lịch sử bên đó (không khôi phục được). Đoạn chat chỉ có bên ChatGPT Work (↗) thì xóa ở đó luôn. Xóa cả dự án không đụng tới thư mục và file trên máy.
  - **📦 Đã lưu trữ** (dưới danh sách dự án): xem lại các đoạn đã lưu trữ của app và ChatGPT Work, **↩ Bỏ lưu trữ** để hiện lại, hoặc 🗑 xóa hẳn.
- **Nhân sự phụ trách**: mỗi đoạn chat do một người trong phòng phụ trách (nút ảnh + tên ở góc trái ô nhập, mặc định Trưởng phòng). Người đó trả lời đúng vai trò, dùng model SIMI của họ (nếu đã gán trong Đội ngũ), tên và ảnh hiện trên từng câu trả lời. Đổi người giữa chừng được. Trong lúc trả lời, nhân vật đó ngồi vào bàn làm việc ở tab Văn phòng và việc được ghi vào **Nhật ký phòng**, xong thì cộng vào số việc đã xong.
- **Chat riêng với nhân vật**: bấm vào một người trong văn phòng → **💬 Chat riêng**. Người đó trả lời đúng vai trò của mình.
- Có thể chạy nhiều đoạn chat cùng lúc. Xong việc có thông báo nếu bạn đang ở cửa sổ khác.
- **Hỏi quyền ngay trong đoạn chat** (giống ChatGPT Work): khi Codex cần chạy lệnh ngoài phạm vi cho phép, sửa file ngoài dự án, dùng công cụ MCP hay điều khiển một app trên máy, câu trả lời hiện hộp vàng **Cho phép / Luôn cho phép trong đoạn chat này / Luôn cho phép / Từ chối**. Đang ở cửa sổ khác thì có thông báo "🔐 Cần bạn cho phép". Chọn "Luôn cho phép trong đoạn chat này" thì lần sau cùng việc đó trong đoạn chat không hỏi lại.

**🖱️ Điều khiển máy tính** – nhờ AI làm thao tác trên máy bằng một câu lệnh, ví dụ *"mở Excel file báo cáo tháng 10, lọc cột Doanh thu > 10 triệu"*, *"mở Chrome vào simi.vn, phóng to cửa sổ rồi cuộn xuống phần sản phẩm"*:

- AI chụp màn hình, xem rồi tự **bấm, bấm đúp, chuột phải, kéo thả, cuộn, gõ chữ (có dấu tiếng Việt), nhấn phím tắt, mở app / link** – với **mọi app**, kể cả Chrome, Zalo, Excel, phần mềm kế toán.
- Lần đầu trong mỗi đoạn chat, app hỏi **"AI muốn điều khiển chuột & bàn phím"** → **Cho phép trong đoạn chat này** (hoặc chỉ bước này / Từ chối). Từng bước (Chụp màn hình, Bấm (x, y), Gõ: …) kèm ảnh màn hình hiện trong mục ⚙️ các bước.
- Khi AI bắt đầu làm, Văn Phòng AI tự thu nhỏ để khỏi che màn hình; xong lượt thì hiện lại. Muốn dừng: bấm lại vào app → nút **Dừng** (■). Trong lúc AI làm, đừng dùng chuột / bàn phím để khỏi giành nhau.
- AI không tự nhập mật khẩu, OTP, thông tin thanh toán, không bấm chuyển tiền / xóa dữ liệu / gửi tin thay bạn nếu bạn chưa nói rõ.
- **Windows**: dùng được ngay. Cửa sổ chạy quyền Administrator thì Windows không cho điều khiển.
- **Mac**: lần đầu vào **🧰 Công cụ → 🔐 Cấp quyền cho Mac**, bật **VanPhongAI** trong **System Settings → Privacy & Security → Accessibility** và **Screen Recording**, rồi mở lại app.
- **Ubuntu**: cần phiên **Ubuntu on Xorg** (chọn ở màn hình đăng nhập) và gói `xdotool`, `imagemagick`, `x11-xserver-utils` (gói `.deb` tự cài; `x11-xserver-utils` giúp gõ tiếng Việt có dấu không rớt chữ). Phiên Wayland chưa hỗ trợ.
- Tắt / bật trong **Cài đặt** (cả mục thu nhỏ app).

**🧰 Công cụ** (nút dưới ô chat):

- **🖱️ Điều khiển máy tính**: trạng thái, cấp quyền (Mac), nút dùng thử.
- **🖥️ Computer Use của ChatGPT (plugin)** – plugin của OpenAI, chỉ dùng thêm khi cần, không điều khiển được trình duyệt trong Văn Phòng AI (thiếu thành phần của app ChatGPT desktop): AI nhìn màn hình, bấm, gõ trong các app trên máy (Excel, Zalo, phần mềm kế toán…). Mỗi app hỏi bạn cho phép trước; ảnh màn hình từng bước hiện trong mục ⚙️ các bước. Plugin Computer Use đi kèm app **ChatGPT (Work) / Codex Desktop**: mở app đó một lần → **Plugins → Computer Use → Install** (hoặc bấm **Cài Computer Use** trong 🧰 nếu đã hiện). Văn Phòng AI tự dùng bản Codex của app đó để Computer Use chạy giống hệt bên kia (đổi ở **Cài đặt → Nâng cao → Động cơ của tab Chat**). Trên Windows, Computer Use cần cửa sổ app được điều khiển hiện trên màn hình trong lúc làm.
- **🧭 Trình duyệt SIMI**: đọc trang cần đăng nhập (Shopee, Lazada, Facebook, SharePoint…) bằng Chrome riêng của SIMI. Bấm **🔑 Mở để đăng nhập**, đăng nhập các trang cần dùng một lần; sau đó gõ `$simi-trinh-duyet` hoặc dán link vào chat. Trình duyệt SIMI chỉ đọc trang nên chạy luôn, không hỏi quyền từng lần.
- Danh sách plugin đã cài và động cơ Codex đang dùng; nút **🔄 Cập nhật SIMI**.

Trong **Đội ngũ**, chọn nguồn **SIMI** cho từng người (hoặc **Cả phòng dùng SIMI**) để cả phòng làm việc bằng model trong Combo, kèm skill SIMI.

## Sảnh online (🌐 Sảnh)

Căn phòng 3D chung của cả công ty trên SIMI Gateway. App tự vào Sảnh bằng chính key team đã cài – không cần đăng nhập thêm; tên, team, vai trò lấy từ Gateway nên không ai giả tên được.

- **Thấy ai đang online**, chia theo team, kèm việc họ đang làm với AI (💬 đang chat, 🎨 đang tạo ảnh, 🎬 làm video, 🔎 tìm web, 📄 đọc tài liệu, 🏢 cả phòng đang làm việc). Trạng thái của bạn tự cập nhật theo tab Chat và tab Văn phòng; **chỉ trạng thái được chia sẻ, nội dung bạn hỏi AI thì không bao giờ**.
- **Nhân vật của bạn**: bấm **👕 Tủ đồ** (hoặc bấm vào chính nhân vật) để đổi kiểu tóc (8 kiểu), màu tóc, màu da, áo, quần, giày, phụ kiện (kính, mũ, tai nghe, nơ, cà vạt, vương miện) và màu phụ kiện; có ô chọn màu tự do và nút 🎲 Ngẫu nhiên. Mọi người thấy ngay.
- **SIMI BAR chill**: Sảnh rộng 40 × 28 m, tông sáng, đủ chỗ cho cả công ty. **Trong nhà**: quầy bar 11 ghế cao với kệ rượu và biển neon, 6 bàn ăn 4 ghế, 3 góc sofa lounge, sàn nhảy đèn đổi màu chậm có quả cầu disco, quầy DJ, màn chiếu YouTube, biển UNIQ · Crénot · SIMI. **Khu Game**: 2 bàn bida chơi được, 3 máy game thùng, phi tiêu, bi lắc, bóng bàn, góc console với sofa, máy gắp thú, máy bán nước. **Sân vườn**: cổng vào "Văn Phòng AI", quầy lễ tân của Trợ lý SIMI, 4 bàn dù, đài phun nước với ghế đá, cây xanh, đèn vườn. Đèn dây, biển neon sáng đứng yên, không nhấp nháy gây mỏi mắt; không có mặt nào chồng trùng mặt phẳng (nguyên nhân chớp sọc khi xoay camera).
- **Đi lại**: bấm xuống sàn để đi tới đó, hoặc dùng **W A S D** / phím mũi tên. Camera luôn đi theo nhân vật của bạn. Kéo chuột xoay góc nhìn, lăn chuột phóng to (camera trượt mượt), bấm đúp để về góc nhìn mặc định. Máy yếu thì app tự giảm độ phân giải / bóng đổ để giữ mượt.
- **Ngồi xuống**: bấm vào một ghế (ghế quầy bar, ghế bàn ăn, sofa) – nhân vật đi tới và ngồi; mọi người đều thấy bạn đang ngồi đó. Ghế có người rồi thì không ngồi được. Bấm phím di chuyển hoặc bấm xuống sàn để đứng dậy.
- **🗺 Toàn cảnh** để nhìn cả quán xem ai đang ở đâu, **🎯 Về chỗ mình** để camera quay lại nhân vật của bạn. Khi nhìn xa, bảng tên thu nhỏ cho đỡ rối.
- **Biểu cảm**: thanh 👋 ❤️ 😂 🎉 ☕ 👍 🙌 dưới màn hình – nhân vật vẫy tay, ăn mừng…
- **💃 Nhảy**: bấm 🕺 cuối thanh biểu cảm → chọn 1 trong 6 điệu (Lắc lư, Disco, Robot, Shuffle, Xoay vòng, Giơ tay). Nhân vật nhảy liên tục tới khi bấm **⏹ Dừng** hoặc đi chỗ khác. Mọi người nhún **cùng một nhịp** (tính theo giờ Gateway) nên cả quán nhảy khớp nhau. Bước lên sàn nhảy là app tự gợi ý chọn điệu.
- **🎱 Bida 2 người**: bấm vào bàn bida trống → chọn người để mời (hoặc bấm vào đồng nghiệp → **Mời chơi bida**). Người kia bấm **Vào bàn** là cả hai tự đi tới đầu bàn, cầm cơ, và bàn bida (nhìn từ trên) hiện lên: rê chuột để ngắm (có đường ngắm, bi ma, hướng bi đi), nhấn giữ rồi kéo ngược để lấy lực, thả tay để đánh; phím ← → chỉnh hướng nhỏ. Bấm vào bàn còn xem được **🏆 Bảng xếp hạng** (top 5 + thành tích của bạn); màn kết quả hiện số ván thắng / thua. Luật 8 bi rút gọn (chia nhóm trơn / sọc, phạm lỗi thì đối thủ được đặt bi trắng, vào bi 8 sau cùng để thắng), mỗi lượt 90 giây. Thu nhỏ bàn để đi dạo, ván vẫn tiếp tục; ai cũng bấm vào bàn đang chơi để xem. Bi trên bàn 3D lăn theo đúng từng cú.
- **Tương tác với đồng nghiệp**: bấm vào một người → **✋ Đập tay, 🥂 Cụng ly, ☕ Mời cà phê** (diễn luôn), **🤗 Ôm, 💃 Mời nhảy** (người kia nhận thẻ mời, bấm Đồng ý mới diễn). Nhân vật của bạn đi tới trước mặt người đó, hai người quay vào nhau rồi cùng diễn; cả Sảnh đều thấy.
- **🐱 Mít – mèo của quán**: cả công ty thấy cùng một con mèo (Gateway điều khiển). Bấm vào Mít → **Vuốt ve** (Mít nhảy cẫng, bay tim), **Cho ăn** (bát thức ăn hiện ra, Mít chạy tới ăn), **Chơi len** (Mít vồ cuộn len), **Gọi Mít theo** (Mít đi theo bạn 30 giây).
- **Nhẹ cho mọi máy**: mọi chuyển động làm bằng code (không tải thêm mô hình), phần tính toán mỗi khung hình dưới 1 ms cho cả quán; rời tab Sảnh là dừng vẽ 3D; máy chậm thì tự giảm độ nét → tắt bóng đổ → vẽ 30 khung hình/giây. Bật hẳn **Chế độ nhẹ cho Sảnh 3D** trong **Cài đặt** cho máy yếu / chạy pin. Các nút nổi trên Sảnh không dùng hiệu ứng làm mờ nền (rất tốn GPU).
- **🎬 Màn chiếu**: bấm **🎬 Màn chiếu** → dán link YouTube → **+ Thêm**. Video phát trên màn chiếu ở tường sau, mọi người trong Sảnh xem cùng một đoạn (đồng bộ theo giờ Gateway).
  - **Xếp hàng theo lượt**: mỗi người 1 video mỗi vòng, tối đa 3 video chờ; bảng hiện "Lượt của bạn: thứ …". Gỡ được video của mình khỏi hàng chờ.
  - **Chuyển bài**: người chọn video bấm **⏭ Bỏ qua** là chuyển ngay; người khác bấm **⏭ Chuyển bài** để bỏ phiếu, đủ quá nửa số người online thì chuyển. Hết video tự chiếu bài kế tiếp.
  - 🔊 / 🔇 bật tắt tiếng trên máy mình, 🎯 đưa camera ra trước màn chiếu. Rời tab Sảnh thì video trên máy mình tự tắt, quay lại thì chiếu tiếp đúng đoạn đang phát.
  - Video riêng tư hoặc chủ kênh không cho phát nhúng sẽ bị từ chối ngay khi thêm.
- **Nhắn tin**: phòng **Cả công ty** và **nhắn riêng** (bấm vào một người → 💬 Nhắn riêng). Tin ở phòng chung hiện thành bong bóng trên đầu nhân vật; tin nhắn riêng thì không. Có thông báo khi có người nhắn riêng lúc bạn đang ở cửa sổ khác. **Enter** gửi, **Shift + Enter** xuống dòng.
  - **Gửi ảnh**: nút 🖼️, dán ảnh bằng **Ctrl + V** (chụp màn hình xong dán luôn) hoặc kéo thả ảnh vào khung chat; tối đa 4 ảnh mỗi tin. App nén ảnh ngay trên máy (cạnh dài 1600px, ~200–400 KB, bỏ thông tin ẩn như GPS) trong luồng riêng nên Sảnh không bị khựng. Khung chat chỉ tải ảnh thu nhỏ khi cuộn tới; bấm ảnh để xem lớn, **⬇ Lưu ảnh** để tải về. GIF giữ nguyên chuyển động.
  - **@ gọi tên**: gõ `@` rồi vài chữ của tên → chọn người (↑ ↓ Enter). Người được tag nhận thông báo kể cả khi đang ở tab khác, phòng có tin tag mình hiện dấu **@** vàng. Admin có thêm **@mọi người**.
  - **Trả lời**: rê chuột vào tin → **↩** → tin gửi đi kèm trích đoạn tin gốc và tự tag người được trả lời; bấm trích đoạn để nhảy tới tin gốc.
  - **Thu hồi**: rê chuột vào tin của mình → **🗑** bấm 2 lần. Admin xoá được tin trong phòng chung (không xem / xoá được tin nhắn riêng của người khác).
- **🤖 Trợ lý SIMI (NPC)**: mặc đồng phục lễ tân (vest, tai nghe có mic), đứng ở **quầy lễ tân ngay cổng vào** – ai vào Sảnh cũng thấy đầu tiên; đi ngang qua là vẫy tay hỏi "Cần giúp gì không?". Bấm vào để mở:
- **Tìm tới Trợ lý dễ nhất**: nút vàng **Trợ lý** trên thanh trên cùng app (ở mọi tab) và nút **Trợ lý SIMI** trên thanh Sảnh,
  hoặc phím **F1**: mở Sảnh, nhân vật tự đi tới quầy lễ tân, Trợ lý vẫy tay và mở bảng hướng dẫn. Trên sàn trước quầy có vòng vàng nhấp nháy;
  khi quầy nằm ngoài khung nhìn, mép Sảnh hiện "Trợ lý SIMI" kèm mũi tên chỉ hướng (bấm là đi tới).
- **Giọng đọc hướng dẫn**: mỗi bước hướng dẫn được Trợ lý đọc to (giọng nữ miền Bắc, gói chung 1 file `src/renderer/npc-voice.js`, ~1,6 MB cho 51 bước, chỉ tải khi cần đọc);
  nút 🔊 trên thẻ để tắt / bật (nhớ cho lần sau), tắt âm thanh trong Cài đặt thì cũng im. Sửa câu hướng dẫn thì tạo lại giọng:
  `python scripts/npc-voice.py` (cần `pip install vieneu` + ffmpeg; `--json` cho hướng dẫn IT sửa trong tab Quản trị, `--prune` bỏ giọng của câu không còn dùng).
  Câu chưa có file thì đọc bằng giọng tiếng Việt của máy nếu có, không có thì chỉ hiện chữ.
- **Khung chat Sảnh thu gọn được**: nút ở góc khung chat; thu gọn thì Sảnh rộng hết màn hình, nút **Chat** trên thanh Sảnh đếm tin mới (đỏ khi có tin riêng / gọi tên).
  - **📘 Hướng dẫn** – 10 bài từng bước (làm quen app, Chat, dự án, Computer Use, giao việc, Sảnh, màn chiếu / nhảy / mèo, **đi một vòng Sảnh**, **chơi bida**, cập nhật). Mỗi bước làm tối màn hình và **khoét sáng đúng nút / đúng khu trong Sảnh** (camera bay tới), thẻ hướng dẫn đứng cạnh có mũi tên chỉ vào; **bấm đúng nút là tự sang bước sau**; phím → / Enter, ←, Esc. Tự chuyển sang tab Chat / Văn phòng khi cần.
  - **💡 Mẹo AI** – 8 mẹo viết yêu cầu cho AI, mỗi mẹo có ví dụ "chưa tốt" / "tốt hơn".
  - **💬 Hỏi đáp** – hỏi tự do; AI trả lời dựa trên hướng dẫn app + ghi chú của admin, chạy bằng **tài khoản admin chọn cho Trợ lý** (người hỏi không tốn lượt; mỗi người tối đa 30 câu / giờ).
  - **💬 Hỏi đáp**: mỗi câu trả lời có nút **📋 Chép**, **👍 / 👎** (admin thấy câu nào chưa đúng ý để bổ sung hướng dẫn); cuộc hỏi đáp được nhớ trên máy.
  - Lần đầu vào Sảnh, Trợ lý chào và mời **đi tour 1 phút**.
- **🛡️ Quản trị** (chỉ admin – tài khoản trong `LOBBY_ADMINS` của Gateway): ai đang online và mỗi máy chạy bản app nào; khoá chat (15 phút → 1 ngày), mời ra khỏi Sảnh; phân quyền gửi ảnh / @mọi người / thêm video / nhắn riêng theo mặc định → team → từng người; khoá màn chiếu, chuyển bài, xoá hàng chờ; thông báo ghim trên đầu Sảnh + thông báo nổi trên mọi máy; nhật ký mọi thao tác; mục **🤖 Trợ lý (NPC)**: chọn tài khoản chatbot làm Trợ lý, nút **🧪 Hỏi thử** (báo ngay trả lời được không, mất bao lâu, lỗi gì và cách sửa), **60 câu hỏi gần đây** (trả lời được / lỗi / bị chấm 👎), ghi chú riêng của công ty cho AI, sửa / thêm hướng dẫn từng bước (mọi máy nhận ngay, không cần phát hành app). Nút **🔑 Admin Console** mở trang web quản lý key / hạn mức AI.
- **Trạng thái tự đặt** (nút cạnh tên bạn ở góc trên Sảnh): 🎯 Đang tập trung, 📞 Đang họp, ⛔ Bận, 🍜 Đi ăn, ☕ Nghỉ giải lao, 🏠 Làm việc từ xa, 🚗 Ra ngoài – trong 30 phút / 1 giờ / 2 giờ / hết hôm nay, tự hết hạn. Đồng nghiệp thấy trên bảng tên và danh sách online. **Tập trung / Đang họp / Bận = không làm phiền**: không kêu, không bật thông báo tin nhắn và nhắc tên (vẫn nhận tin, vẫn có số đếm). Ai nhắn riêng cho người đang tập trung / họp sẽ thấy nhắc nhẹ "tin vẫn gửi bình thường, người ấy sẽ xem sau".
- **👁 Đang hiện / 🙈 Đang ẩn**: ẩn để đồng nghiệp không thấy bạn online (vẫn nhắn tin được). Khi đang ẩn, Sảnh hiện thanh nhắc **Bạn đang ẩn** và nút **Hiện lại**; trạng thái ẩn được Gateway nhớ cả khi tắt mở app.
- **Danh sách online luôn khớp**: Gateway gửi danh sách ai đang online mỗi 30 giây, máy nào lỡ mất sự kiện vào / rời (mạng chập chờn) tự sửa lại. Một tài khoản mở app trên nhiều máy thì các máy đó là cùng một người nên không thấy nhau; app ghi "đang mở trên 2 máy" dưới tên bạn. Tắt hẳn Sảnh trong **Cài đặt**.
- Tin nhắn được Gateway giữ 30 ngày (admin chỉnh được), không đi qua AI và không vào bộ nhớ team.

Sảnh cần Gateway bản có module Sảnh (repo `ltn-memory-gateway`, file `src/lobby.mjs`). Nếu Sảnh báo "Gateway chưa bật Sảnh" thì admin cần cập nhật Gateway.

## Văn phòng 3D

- **Bấm vào nhân vật** (hoặc bảng tên, hoặc ảnh trong dải nhân sự) để mở thẻ tương tác:
  - 👋 **Chào**: nhân vật vẫy tay, chào lại.
  - ☕ **Mời cà phê**: nhân vật đi ra bình nước uống, hồi năng lượng.
  - 💖 **Khen**: nhân vật vui, tâm trạng tăng.
  - 🕺 **Nhảy**: nhảy một điệu.
  - 📋 **Giao việc**: chọn sẵn người đó trong khung giao việc.
  - ⚙️ **Cấu hình**: đổi tên, vai trò, model, ngoại hình.
- **Chỉ số vui:** mỗi người có ⚡ năng lượng (giảm khi làm việc, tự hồi khi nghỉ), 💗 tâm trạng (tăng khi được khen, xong việc) và số việc đã xong. Ai **mệt quá sẽ tự đi pha cà phê**. Người xong nhiều việc nhất được đội **👑 vương miện**.
- **Bấm vào chú mèo** để vuốt ve, mèo kêu "Meo~" và thả tim.
- **Thương hiệu:** biển **UNIQ** (nền navy) treo ở góc tường trái, biển **SIMI.vn** cạnh cửa ra vào, biển **Crénot** treo trên giá sách, poster **SIMI.vn** đóng khung trên tường trái. Logo 3 thương hiệu cũng nằm trên thanh trên cùng (cửa sổ rộng) và màn hình chào.
- **🎨 Trang trí** (góc dưới văn phòng): đổi màu tường, sàn, thảm (thảm có màu Xanh SIMI, Navy UNIQ, Tím Crénot…).
- **🌙 / ☀️** trên thanh trên cùng: đổi giao diện Xanh sáng ↔ Navy tối (tông màu SIMI/UNIQ).
- **Kéo chuột** để xoay góc nhìn, **lăn chuột** để phóng to/thu nhỏ, **chuột phải kéo** để dời khung nhìn, nút **⟲ Góc nhìn** để về mặc định. **Bấm đúp vào tên** trên đầu nhân vật để đổi tên nhanh.
- Ánh sáng đổi theo giờ thật: ban ngày nắng qua cửa sổ, chiều tà nhuộm cam, tối thì bật đèn trần. Lúc rảnh nhân vật tự đi uống nước, xem bảng việc, sang bàn nhau tán gẫu. Xong việc cả phòng giơ tay ăn mừng, tung pháo giấy.
- Âm thanh dễ thương có thể tắt trong **Cài đặt**.
- Máy yếu hoặc không chạy được 3D: bấm **2D** để dùng văn phòng pixel nhẹ hơn.

## Cách dùng

1. **Kết nối** (thanh trên cùng): cài **SIMI Gateway** bằng key team, hoặc đăng nhập tài khoản Claude / ChatGPT / Gemini bạn đã có, nhập API key, dùng Ollama.
2. **Đội ngũ**: gán nguồn và model cho từng người. Danh sách model lấy **trực tiếp từ tài khoản** đã kết nối, chỉ việc chọn. Có nút **Phối hợp thông minh** (Trưởng phòng dùng Claude Opus, Nghiên cứu dùng Gemini, Viết dùng ChatGPT, Kiểm tra dùng Claude Sonnet – tùy tài khoản bạn có) và nút **Thử cả phòng** để kiểm tra kết nối.
3. **Giao việc**: gõ việc (hoặc chọn **Mẫu việc**: Email, Báo cáo, Tóm tắt, Kế hoạch, Dịch, Ý tưởng, Bài đăng, Công văn), bấm vào **ảnh người nhận** ở mục Giao cho, rồi bấm **Giao ngay** (hoặc `Ctrl + Enter`).
   - Giao cho **Trưởng phòng (★)**: lập kế hoạch → chia việc → các agent hỏi nhau khi thiếu thông tin → người Kiểm tra soát và yêu cầu sửa → Trưởng phòng tổng hợp.
   - Giao cho **một người**: người đó làm, xong người Kiểm tra soát lại.
   - Muốn để dành: bấm **Lưu thẻ**, sau đó kéo thẻ thả vào bàn bất kỳ.
4. Theo dõi tiến độ ở thẻ **Đang làm** (Kế hoạch → Thực hiện → Kiểm tra → Tổng hợp), dải nhân sự phía trên văn phòng, bong bóng thoại và tab **Nhật ký phòng**.
5. Xong việc có thông báo + âm báo. Kết quả ở **Khay kết quả**, lưu thành file `.md` trong `Documents/VanPhongAI` (nhật ký đầy đủ trong thư mục con `nhat-ky`).

## Lưu ý

- **Riêng tư:** app, nhật ký và kết quả đều nằm trên máy. Nội dung giao cho bàn dùng Claude/GPT/Gemini vẫn được gửi lên máy chủ của hãng đó để xử lý. Việc nhạy cảm nên giao cho bàn dùng **Ollama**.
- **Hạn mức:** các agent hỏi nhau, sửa bài đều tốn lượt dùng. Giới hạn số lượt trong **Cài đặt → Số lượt hỏi nhau / sửa bài tối đa**.
- **An toàn:** ở chế độ giao việc, Claude / ChatGPT / Gemini chỉ trả lời bằng văn bản; bàn dùng **SIMI** được dùng skill và tạo file trong `Documents/VanPhongAI/_khu-lam-viec`. Ở tab **Chat**, quyền trên máy do bạn chọn cho từng đoạn chat (mặc định chỉ sửa file trong thư mục dự án).
- **Điều khoản:** app gọi các CLI chính hãng ngay trên máy bạn, không lấy token đăng nhập dùng chỗ khác. Anthropic cho phép dùng tài khoản gói tháng với `claude -p` để thử nghiệm cá nhân. Nếu làm thành sản phẩm cho người khác dùng thì phải chuyển sang API key.
- **Windows:** sau khi bấm Cài đặt trong trang Kết nối, cửa sổ CMD chạy lệnh cài chính hãng; cài xong bấm **Kiểm tra lại**, app tự nhận mà không cần mở lại.
- Phím **F12** mở công cụ gỡ lỗi nếu cần.

## Mã nguồn & build lại

```
src/main.js          tiến trình chính: cửa sổ, hàng đợi việc, toàn bộ lệnh IPC (gom trong registerIpc)
src/preload.js       cầu nối an toàn: chỉ mở đúng các lệnh cần dùng cho giao diện (window.vp)
src/sys.js           tiện ích hệ thống dùng chung: chạy CLI, dừng tiến trình, mở Terminal, PATH, registry, gọi HTTP
src/orchestrator.js  bộ điều phối: chia việc, hỏi nhau, kiểm tra, tổng hợp
src/providers.js     gọi model: SIMI Gateway, Claude Code, Codex, Antigravity, Gemini CLI, Ollama, API key
src/accounts.js      kiểm tra cài đặt / đăng nhập, lấy danh sách model, mở Terminal đăng nhập
src/simi.js          SIMI Gateway: đọc cấu hình Codex của bộ cài SIMI, key team, model theo Combo, skill, mở bộ cài
src/chat.js          tab Chat: lưu đoạn chat, chạy từng lượt qua `codex app-server`, hỏi quyền (lệnh, file, MCP, Computer Use),
                     Công cụ (Computer Use, trình duyệt SIMI, plugin), tìm file kết quả
src/codex-server.js  `codex app-server` (JSON-RPC): lượt chat, yêu cầu xin quyền, plugin, MCP, skill, lịch sử ChatGPT Work
src/computer-use.js  nhận biết plugin Computer Use OpenAI (node_repl + @oai/sky trên Windows) và hướng dẫn Codex chọn đúng công cụ
src/computer/        điều khiển máy tính cho Chat: mcp.js (MCP vp_computer: chụp màn hình, chuột, bàn phím, mở app), VPC.cs (Windows: user32 qua PowerShell)
src/updater.js       tự cập nhật app qua SIMI Gateway (/install/vanphong/latest.json): tự tải sẵn, kiểm tra SHA-256, "Cập nhật ngay" cài lại theo từng hệ điều hành
src/lobby-client.js  Sảnh online: nghe SSE /v1/lobby/stream trên Gateway, tự nối lại; gửi trạng thái, tin nhắn, ảnh, nhân vật, màn chiếu,
                     mèo, tương tác, quản trị, hỏi Trợ lý
src/lobby-images.js  ảnh chat Sảnh: giao thức vpimg:// – tải qua Gateway (kèm key), lưu đệm trên đĩa, tự dọn
src/simi-task.js     Windows: cho tác vụ "SIMI Auto Update" chạy ẩn (giống HIDDEN_TASK_PS1 trong Gateway)
src/sim.js           chế độ Giả lập
src/store.js         cấu hình + API key (mã hóa bằng DPAPI trên Windows, Keychain trên Mac, Secret Service trên Linux)
src/office3d/        văn phòng 3D (Three.js): world.js (căn phòng), person.js (nhân vật), cat.js (mèo), nav.js (tìm đường), office3d.js (điều khiển),
                     lobby3d.js (Sảnh online + xem trước nhân vật trong Tủ đồ), bar.js (SIMI BAR chill: trong nhà, khu Game với 2 bàn bida, sân vườn)
src/renderer/        giao diện: app.js (văn phòng, kết nối, đội ngũ, cài đặt), chat.js (tab Chat), lobby.js (tab Sảnh), update.js (cập nhật app), office.js (văn phòng pixel 2D),
                     admin.js + admin.css (tab Quản trị), npc.js + npc-guides.js (Trợ lý SIMI), img-worker.js (nén ảnh trong luồng riêng),
                     pool-engine.js (bida: vật lý + luật, chạy cả trong Node để test), pool.js + pool.css (bàn bida, lời mời),
                     md.js (hiển thị Markdown, có bảng), style.css + chat.css + lobby.css, office3d.bundle.js (bản 3D đã đóng gói), fonts/ (Nunito, OFL)
test/                orch.test.js (bộ điều phối), ui-office.test.js (giao diện văn phòng), ui-chat.test.js (tab Chat + SIMI),
                     ui-history.test.js (liên thông lịch sử ChatGPT Work), ui-lobby.test.js (Sảnh online với Gateway thật), ui-lobby-pool.test.js (bida 2 người),
                     pool-engine.test.js (vật lý + luật bida),
                     ui-lobby-chat / ui-lobby-play / ui-lobby-npc.test.js (ảnh + quản trị / nhảy, mèo, tương tác / Trợ lý),
                     ui-flicker.test.js (chống chớp), ui-tools.test.js (Computer Use, trình duyệt SIMI, hỏi quyền, tự cập nhật),
                     fixtures/fake-mcp.js (MCP giả), fixtures/mock-gateway.js (gateway giả lập + CODEX_HOME mẫu), fixtures/lobby-gateway.js (Gateway thật cho test Sảnh)
.github/workflows/   release.yml: đẩy nhãn v<phiên bản> → test → build 3 hệ điều hành → GitHub Release (xem mục Phát hành bản mới)
scripts/release.mjs  npm run release -- <phiên bản> "ghi chú": đổi version, commit, gắn nhãn, đẩy lên GitHub
mac/                 CAI-DAT-TREN-MAC.command – script cài cho Mac chip Apple (đi kèm gói macOS)
build/               icon + script sau khi cài/gỡ gói .deb (hồ sơ AppArmor cho Ubuntu 24.04)
```

Phát hành bình thường **không cần build trên máy mình** – chạy `npm.cmd run release -- <phiên bản> "ghi chú"`, GitHub tự build (xem mục *Phát hành bản mới*). Muốn build thử trên máy (cần Node.js 20+; Windows mở PowerShell bằng Run as administrator hoặc bật Developer Mode):

```
npm ci
npm run dist        # Windows: ra dist/VanPhongAI-<phiên bản>-Setup.exe
npm run dist:mac    # macOS: ra 2 file .zip – mac-arm64 (chip Apple M1–M4) và mac-x64 (chip Intel); build được trên Ubuntu / GitHub Actions, không cần máy Mac (Windows không build được bản Mac)
npm run dist:linux  # Ubuntu/Linux: ra file .deb + .AppImage (x64)
```

Kiểm tra mã và chạy test:

```
npm run lint          # ESLint
npm test              # bộ điều phối (chế độ Giả lập) + Computer Use / vp_computer + bộ tự cập nhật app
npm run test:office   # giao diện văn phòng – mở app thật bằng Playwright
npm run test:chat     # tab Chat – cần Codex CLI (npm i -g @openai/codex), dùng gateway giả lập, không tốn lượt thật
npm run test:history  # liên thông lịch sử ChatGPT Work – cũng cần Codex CLI
npm run test:lobby    # Sảnh online + màn chiếu YouTube + báo bản app mới qua Sảnh – chạy Gateway thật từ ../ltn-memory-gateway/ltn-memory-gateway (hoặc biến GATEWAY_DIR)
npm run test:lobby-chat  # gửi ảnh, @gọi tên, trả lời, thu hồi, tab Quản trị
npm run test:lobby-play  # nhảy cùng nhịp, tương tác giữa nhân vật, mèo chung, chế độ nhẹ
npm run test:npc         # Trợ lý SIMI: tour, chỉ tay từng bước, hỏi đáp bằng tài khoản NPC, admin sửa hướng dẫn
npm run test:pool        # bida 2 người: mời, vào bàn, ngắm + kéo lực + đánh, đối thủ đánh, thu nhỏ, thắng
npm run test:flicker     # chống chớp: không có mặt trùng mặt phẳng, xoay camera không lấp lánh
npm run test:tools    # điều khiển máy + Computer Use + trình duyệt SIMI + hỏi quyền + tự cập nhật – cần Codex CLI;
                      # trên Linux chạy: xvfb-run -a -s "-screen 0 1600x1000x24" npm run test:tools (cần xdotool, imagemagick, x11-xserver-utils)
npm run test:computer-setup  # nút "Cài bổ sung Computer Use" (bộ cài giả lập, không cài plugin thật)
```

Trên Linux không có màn hình thì chạy test giao diện qua `xvfb-run -a npm run test:office`. Ảnh chụp lưu trong thư mục tạm `vanphong-shots`; đổi bằng biến `VPAI_SHOTS`.

### Cài bổ sung Computer Use từ source app

Trong Chat → Công cụ, khi plugin OpenAI hoặc runtime chưa sẵn sàng, bấm **Cài bổ sung Computer Use**. App tìm plugin trong danh mục được phép, giữ nguyên plugin đang bị tắt, cài nếu thiếu, nạp lại tiến trình Codex và kiểm tra kết nối chỉ đọc. Nếu chưa đủ runtime, app báo chưa hoàn tất và có nút **Hướng dẫn cài OpenAI**; không tự tải runtime không rõ nguồn hay báo cài thành công chỉ vì bước cài plugin đã chạy. Không thiết lập trong khi có lượt chat đang chạy. Thay đổi source này cần chạy app từ source hoặc đóng gói lại để xuất hiện trong EXE.
