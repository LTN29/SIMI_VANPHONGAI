# Văn Phòng AI

Văn phòng kiểu game: mỗi bàn là một agent, mỗi bàn gán một model tùy ý (SIMI Gateway, Claude, GPT, Gemini, model chạy trên máy). Bạn giao việc bằng cách kéo thẻ thả vào bàn; các agent tự chia việc, hỏi nhau, kiểm tra rồi nộp kết quả vào khay.

Có thêm tab **💬 Chat** thay cho ChatGPT Work / Codex Desktop: chat với mọi model trong Combo của SIMI Gateway, gọi skill SIMI, gửi ảnh và file, chia đoạn chat theo dự án.

Và tab **🌐 Sảnh**: gặp đồng nghiệp đang dùng AI trong một căn phòng 3D chung, thấy ai đang làm gì, tự chọn nhân vật và nhắn tin với nhau.

## Chạy app

### Windows
Có 2 bản, dùng bản nào cũng được:

- **`windows/VanPhongAI-0.9.11-Setup.exe`** (khuyên dùng cho nhân viên): cài 1 lần, có lối tắt ở Start Menu và Desktop, mở nhanh, tự cập nhật êm nhất.
- **`VanPhongAI.exe`** (bản chạy ngay, giống `windows/VanPhongAI-0.9.11-portable.exe`): bấm đúp là chạy, không cần cài. Mỗi lần mở mất vài giây vì phải giải nén tạm.

Lần đầu mở, Windows có thể hiện "Windows protected your PC" (file chưa có chữ ký số). Bấm **More info → Run anyway**.

Máy mới cũng tải được app tại **https://ai.simi.vn/install/vanphong** (khi admin đã đăng bản lên Gateway).

### macOS (máy Mac chip Apple M1–M4)

Yêu cầu: macOS 11 Big Sur trở lên.

**Bước 1 – Chép file sang Mac**

Chép cả thư mục **`mac`** sang máy Mac (qua USB, AirDrop, Google Drive…), ví dụ để ở `Downloads/mac`. Trong thư mục có 2 file:
- `VanPhongAI-0.9.11-mac-arm64.zip` – app
- `CAI-DAT-TREN-MAC.command` – script cài

**Bước 2 – Chạy script cài**

1. Mở **Terminal** (nhấn `Cmd + Space`, gõ `Terminal`, Enter).
2. Gõ `bash ` (có một dấu cách phía sau, **chưa** bấm Enter).
3. Kéo file **`CAI-DAT-TREN-MAC.command`** từ Finder thả vào cửa sổ Terminal. Dòng lệnh sẽ thành dạng `bash /Users/<tên>/Downloads/mac/CAI-DAT-TREN-MAC.command`.
4. Bấm **Enter**.

Script sẽ tự giải nén, chép **VanPhongAI** vào **Applications**, gỡ cờ cách ly của macOS, ký ad-hoc bằng lệnh `codesign` có sẵn trên Mac, rồi mở app. Thấy dòng `✓ Đã cài xong` là xong.

Lần sau mở app từ **Launchpad** hoặc thư mục **Applications** như bình thường. Muốn ghim lên Dock: chuột phải icon trên Dock khi app đang mở → **Options → Keep in Dock**.

**Cài tay (nếu không dùng script)**

1. Bấm đúp file `VanPhongAI-0.9.11-mac-arm64.zip` để giải nén, kéo **`VanPhongAI.app`** vào **Applications**.
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

Trong thư mục **`linux`** có 2 file, dùng một trong hai:

**Cách 1 – gói `.deb` (khuyên dùng)**
```
sudo apt install ./VanPhongAI-0.9.11-linux-amd64.deb
```
Cài xong mở **Văn Phòng AI** trong menu ứng dụng (phím Super, gõ "Văn Phòng"), hoặc gõ `vanphong-ai` trong Terminal. Gói tự cài hồ sơ AppArmor để app chạy được trên Ubuntu 24.04 mà không cần tắt sandbox. Gỡ: `sudo apt remove vanphong-ai`.

**Cách 2 – file `.AppImage` (không cần cài, chạy ở đâu cũng được)**
```
sudo apt install libfuse2t64      # Ubuntu 24.04 (Ubuntu 22.04: libfuse2)
chmod +x VanPhongAI-0.9.11-linux-x86_64.AppImage
./VanPhongAI-0.9.11-linux-x86_64.AppImage
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

**Cập nhật SIMI** (khi admin thêm model, skill, plugin mới): bấm **Cập nhật SIMI** (trong thẻ SIMI ở trang Kết nối, hoặc trong **🧰 Công cụ** của tab Chat). App chạy bộ cài ở chế độ Update ngay bên trong, hiện tiến độ, không cần mở Terminal hay chọn menu. Key đã lưu, không cần nhập lại. Ngoài ra máy đã cài SIMI vẫn tự làm mới skill mỗi 6 giờ.

## Cập nhật app (tự động qua SIMI Gateway)

Admin đăng bản mới lên Gateway → máy nhân viên **tự tải sẵn ở chế độ nền** (kiểm tra mã SHA-256) → báo **"Văn Phòng AI x.y.z đã sẵn sàng"** → người dùng bấm **Cập nhật ngay** là xong. App tự đóng, cài bản mới đúng kiểu đang dùng rồi mở lại; đoạn chat, cài đặt, nhân vật giữ nguyên.

- **Báo ở đâu**: thẻ thông báo góc trên bên phải (kèm vài dòng có gì mới), nút **⬆️ Cập nhật x.y.z** trên thanh trên cùng, và thông báo của Windows / Mac / Ubuntu nếu đang ở cửa sổ khác (bấm vào là mở app).
- **Báo khi nào**: máy đang mở Sảnh online nhận tin **ngay khi admin đăng bản** (vài giây). Ngoài ra app tự kiểm tra lúc mở, mỗi giờ, khi quay lại app sau 20 phút và khi máy ngủ dậy.
- **Để sau**: ẩn thẻ 4 giờ, nút trên thanh trên cùng vẫn còn để cập nhật lúc nào cũng được. Bản đã tải được giữ lại, lần mở app sau không tải lại.
- **Cài thế nào**:
  - Windows bản cài: cài đè im lặng. Windows bản chạy ngay: thay file `.exe` đang dùng.
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
- **SIMI BAR chill**: Sảnh là một quán bar rộng (28 × 20 m), tông sáng (sàn gỗ sồi, tường kem, cửa sổ, đèn thả), đủ chỗ cho cả công ty: quầy bar 11 ghế cao với kệ rượu và biển neon, 6 bàn ăn 4 ghế, 3 góc sofa lounge, sàn nhảy đèn đổi màu chậm có quả cầu disco, quầy DJ, bàn bi-a, màn chiếu YouTube, màn hình lớn và biển UNIQ · Crénot · SIMI. Đèn dây, biển neon sáng đứng yên, không nhấp nháy gây mỏi mắt; không có mặt nào chồng trùng mặt phẳng (nguyên nhân chớp sọc khi xoay camera).
- **Đi lại**: bấm xuống sàn để đi tới đó, hoặc dùng **W A S D** / phím mũi tên. Camera luôn đi theo nhân vật của bạn. Kéo chuột xoay góc nhìn, lăn chuột phóng to (camera trượt mượt), bấm đúp để về góc nhìn mặc định. Máy yếu thì app tự giảm độ phân giải / bóng đổ để giữ mượt.
- **Ngồi xuống**: bấm vào một ghế (ghế quầy bar, ghế bàn ăn, sofa) – nhân vật đi tới và ngồi; mọi người đều thấy bạn đang ngồi đó. Ghế có người rồi thì không ngồi được. Bấm phím di chuyển hoặc bấm xuống sàn để đứng dậy.
- **🗺 Toàn cảnh** để nhìn cả quán xem ai đang ở đâu, **🎯 Về chỗ mình** để camera quay lại nhân vật của bạn. Khi nhìn xa, bảng tên thu nhỏ cho đỡ rối.
- **Biểu cảm**: thanh 👋 ❤️ 😂 🎉 🕺 ☕ 👍 🙌 dưới màn hình – nhân vật vẫy tay, nhảy, ăn mừng…
- **🎬 Màn chiếu**: bấm **🎬 Màn chiếu** → dán link YouTube → **+ Thêm**. Video phát trên màn chiếu ở tường sau, mọi người trong Sảnh xem cùng một đoạn (đồng bộ theo giờ Gateway).
  - **Xếp hàng theo lượt**: mỗi người 1 video mỗi vòng, tối đa 3 video chờ; bảng hiện "Lượt của bạn: thứ …". Gỡ được video của mình khỏi hàng chờ.
  - **Chuyển bài**: người chọn video bấm **⏭ Bỏ qua** là chuyển ngay; người khác bấm **⏭ Chuyển bài** để bỏ phiếu, đủ quá nửa số người online thì chuyển. Hết video tự chiếu bài kế tiếp.
  - 🔊 / 🔇 bật tắt tiếng trên máy mình, 🎯 đưa camera ra trước màn chiếu. Rời tab Sảnh thì video trên máy mình tự tắt, quay lại thì chiếu tiếp đúng đoạn đang phát.
  - Video riêng tư hoặc chủ kênh không cho phát nhúng sẽ bị từ chối ngay khi thêm.
- **Nhắn tin**: phòng **Cả công ty** và **nhắn riêng** (bấm vào một người → 💬 Nhắn riêng). Tin ở phòng chung hiện thành bong bóng trên đầu nhân vật; tin nhắn riêng thì không. Có thông báo khi có người nhắn riêng lúc bạn đang ở cửa sổ khác.
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
src/lobby-client.js  Sảnh online: nghe SSE /v1/lobby/stream trên Gateway, tự nối lại; gửi trạng thái, tin nhắn, nhân vật, màn chiếu
src/sim.js           chế độ Giả lập
src/store.js         cấu hình + API key (mã hóa bằng DPAPI trên Windows, Keychain trên Mac, Secret Service trên Linux)
src/office3d/        văn phòng 3D (Three.js): world.js (căn phòng), person.js (nhân vật), cat.js (mèo), nav.js (tìm đường), office3d.js (điều khiển),
                     lobby3d.js (Sảnh online + xem trước nhân vật trong Tủ đồ), bar.js (SIMI BAR chill: quầy, ghế, bàn, sàn nhảy)
src/renderer/        giao diện: app.js (văn phòng, kết nối, đội ngũ, cài đặt), chat.js (tab Chat), lobby.js (tab Sảnh), update.js (cập nhật app), office.js (văn phòng pixel 2D),
                     md.js (hiển thị Markdown, có bảng), style.css + chat.css + lobby.css, office3d.bundle.js (bản 3D đã đóng gói), fonts/ (Nunito, OFL)
test/                orch.test.js (bộ điều phối), ui-office.test.js (giao diện văn phòng), ui-chat.test.js (tab Chat + SIMI),
                     ui-history.test.js (liên thông lịch sử ChatGPT Work), ui-lobby.test.js (Sảnh online với Gateway thật),
                     ui-tools.test.js (Computer Use, trình duyệt SIMI, hỏi quyền, tự cập nhật), fixtures/fake-mcp.js (MCP giả),
                     fixtures/mock-gateway.js (gateway giả lập + CODEX_HOME mẫu)
mac/                 script cài cho Mac chip Apple
build/               icon + script sau khi cài/gỡ gói .deb (hồ sơ AppArmor cho Ubuntu 24.04)
```

Build lại (cần Node.js):

```
npm install
npm run dist        # Windows: ra file .exe (portable + bản cài đặt)
npm run dist:mac    # macOS: ra file .zip cho Mac chip Apple (M1–M4)
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
npm run test:tools    # điều khiển máy + Computer Use + trình duyệt SIMI + hỏi quyền + tự cập nhật – cần Codex CLI;
                      # trên Linux chạy: xvfb-run -a -s "-screen 0 1600x1000x24" npm run test:tools (cần xdotool, imagemagick, x11-xserver-utils)
npm run test:computer-setup  # nút "Cài bổ sung Computer Use" (bộ cài giả lập, không cài plugin thật)
```

Trên Linux không có màn hình thì chạy test giao diện qua `xvfb-run -a npm run test:office`. Ảnh chụp lưu trong thư mục tạm `vanphong-shots`; đổi bằng biến `VPAI_SHOTS`.

### Cài bổ sung Computer Use từ source app

Trong Chat → Công cụ, khi plugin OpenAI hoặc runtime chưa sẵn sàng, bấm **Cài bổ sung Computer Use**. App tìm plugin trong danh mục được phép, giữ nguyên plugin đang bị tắt, cài nếu thiếu, nạp lại tiến trình Codex và kiểm tra kết nối chỉ đọc. Nếu chưa đủ runtime, app báo chưa hoàn tất và có nút **Hướng dẫn cài OpenAI**; không tự tải runtime không rõ nguồn hay báo cài thành công chỉ vì bước cài plugin đã chạy. Không thiết lập trong khi có lượt chat đang chạy. Thay đổi source này cần chạy app từ source hoặc đóng gói lại để xuất hiện trong EXE.
