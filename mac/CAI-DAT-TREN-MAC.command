#!/bin/bash
# Cài Văn Phòng AI vào thư mục Applications của máy Mac.
# Cách chạy: mở Terminal, gõ "bash " (có dấu cách), kéo file này vào cửa sổ Terminal rồi bấm Enter.
set -e
cd "$(dirname "$0")"
if [ "$(uname -m)" != "arm64" ]; then echo "Bản này dành cho Mac chip Apple (M1–M4)."; exit 1; fi
ZIP="$(ls VanPhongAI-*-mac-arm64.zip 2>/dev/null | tail -1)"
if [ -z "$ZIP" ]; then echo "Không tìm thấy file VanPhongAI-...-mac-arm64.zip trong cùng thư mục với script."; exit 1; fi
echo "→ Đang cài từ $ZIP ..."
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
