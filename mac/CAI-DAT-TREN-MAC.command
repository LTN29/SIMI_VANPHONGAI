#!/bin/bash
# Cài Văn Phòng AI vào thư mục Applications của máy Mac (chip Apple M1–M4 hoặc chip Intel).
# Cách chạy: mở Terminal, gõ "bash " (có dấu cách), kéo file này vào cửa sổ Terminal rồi bấm Enter.
# Script tự nhận loại chip và chọn đúng file: VanPhongAI-<phiên bản>-mac-arm64.zip (chip Apple) / -mac-x64.zip (Intel).
set -e
cd "$(dirname "$0")"
# hw.optional.arm64 = 1 trên máy chip Apple (kể cả khi Terminal chạy qua Rosetta, lúc đó uname -m báo x86_64)
if [ "$(sysctl -n hw.optional.arm64 2>/dev/null)" = "1" ]; then CHIP="arm64"; CHIP_NAME="chip Apple"; else CHIP="x64"; CHIP_NAME="chip Intel"; fi
ZIP="$(ls VanPhongAI-*-mac-$CHIP.zip 2>/dev/null | tail -1)"
if [ -z "$ZIP" ] && [ "$CHIP" = "arm64" ]; then
  # máy chip Apple vẫn chạy được bản Intel (qua Rosetta, chậm hơn) nếu chỉ có bản đó
  ZIP="$(ls VanPhongAI-*-mac-x64.zip 2>/dev/null | tail -1)"
  [ -n "$ZIP" ] && echo "⚠ Không có bản cho chip Apple, dùng tạm bản Intel (chạy qua Rosetta, chậm hơn). Nên tải bản mac-arm64."
fi
if [ -z "$ZIP" ]; then
  echo "Máy này là Mac $CHIP_NAME nhưng không thấy file VanPhongAI-...-mac-$CHIP.zip trong cùng thư mục với script."
  [ "$CHIP" = "x64" ] && echo "Bản mac-arm64 chỉ chạy trên Mac chip Apple – tải bản mac-x64 tại https://ai.simi.vn/install/vanphong"
  exit 1
fi
echo "→ Máy Mac $CHIP_NAME – đang cài từ $ZIP ..."
TMP="$(mktemp -d)"
ditto -x -k "$ZIP" "$TMP"
if [ -d "/Applications/VanPhongAI.app" ]; then echo "→ Gỡ bản cũ..."; rm -rf "/Applications/VanPhongAI.app"; fi
mv "$TMP/VanPhongAI.app" /Applications/
rm -rf "$TMP"
echo "→ Gỡ cờ cách ly của macOS..."
xattr -cr /Applications/VanPhongAI.app
echo "→ Ký ad-hoc để macOS cho phép chạy..."
codesign --force --deep --sign - /Applications/VanPhongAI.app
echo "✓ Đã cài xong vào Applications. Đang mở app..."
open /Applications/VanPhongAI.app
