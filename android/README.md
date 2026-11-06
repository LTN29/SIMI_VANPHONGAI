# Văn Phòng AI – app Android

Vỏ WebView nhẹ (không thư viện ngoài) mở trang điện thoại của SIMI Gateway: `https://ai.simi.vn/m`
(Sảnh 3D, Chat AI, Tin nhắn, Online). Giao diện nằm trên Gateway (`site/mobile/` của repo Gateway) nên
**cập nhật Gateway là điện thoại có bản mới**, chỉ phải cài lại APK khi sửa phần vỏ trong thư mục này.

App làm thêm những việc mà trình duyệt không làm được:

- Sảnh xoay ngang theo máy, hoặc bấm nút 🔄 Xoay ngang. Chat AI và Tin nhắn luôn giữ màn dọc.
  Trang gọi `VPAndroid.setOrientation('sensor' | 'landscape' | 'portrait')`.
- Khi màn ngang, app ẩn thanh trạng thái để Sảnh rộng hơn.
- Nút Back của Android đóng bảng đang mở, rồi về Sảnh, rồi mới đưa app xuống nền.
- Chọn ảnh từ máy để gửi (Chat AI / Tin nhắn).
- Link ngoài (YouTube, web…) mở bằng app hoặc trình duyệt tương ứng.
- Mất mạng thì hiện trang "Thử lại".
- Quét mã QR ghép điện thoại (`https://ai.simi.vn/m#pair=…`) sẽ mở thẳng app (Android hỏi mở bằng app nào).

## Build

Cần JDK 17+ và Android SDK (platform 35, build-tools 35).

```bash
cd android
echo "sdk.dir=/đường/dẫn/android-sdk" > local.properties
gradle assembleRelease                 # → app/build/outputs/apk/release/app-release.apk
gradle assembleRelease -PgatewayUrl=https://gateway-khac.vn   # trỏ Gateway khác
```

## Khoá ký APK (BÍ MẬT, không đưa lên repo)

Mọi bản cập nhật phải ký **cùng một khoá**, không thì điện thoại báo xung đột và phải gỡ app cũ.

- Khoá nằm ở `android/release-key/vanphongai-release.jks`, mật khẩu ở `android/keystore.properties`.
- Cả hai đã có trong `.gitignore`.
- Hãy giữ thêm một bản sao ở nơi an toàn (két mật khẩu / ổ riêng).
- Không có `keystore.properties` thì Gradle ký bằng khoá debug. Bản đó chỉ để thử, không phát cho mọi người.

## Phát hành

1. Tăng `versionCode` / `versionName` trong `app/build.gradle` rồi build.
2. Chép `app-release.apk` vào `site/mobile/VanPhongAI.apk` của repo Gateway rồi deploy Gateway.
3. Mọi người tải bản mới tại `https://ai.simi.vn/m/VanPhongAI.apk`. Trang `/m` mở trên trình duyệt Android cũng có nút
   "📲 Tải app Android".
