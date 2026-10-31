#!/bin/bash
# Gỡ gói .deb Văn Phòng AI: bỏ lối tắt và hồ sơ AppArmor
if type update-alternatives >/dev/null 2>&1; then update-alternatives --remove 'vanphong-ai' '/opt/VanPhongAI/vanphong-ai' || true; else rm -f '/usr/bin/vanphong-ai'; fi
if [ -f /etc/apparmor.d/vanphong-ai ]; then
    apparmor_parser --remove /etc/apparmor.d/vanphong-ai 2>/dev/null || true
    rm -f /etc/apparmor.d/vanphong-ai
fi
