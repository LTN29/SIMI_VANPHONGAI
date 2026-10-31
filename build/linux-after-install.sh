#!/bin/bash
# Chạy sau khi cài gói .deb Văn Phòng AI (Ubuntu / Debian)

APP=/opt/VanPhongAI/vanphong-ai

if type update-alternatives 2>/dev/null >&1; then
    if [ -L '/usr/bin/vanphong-ai' -a -e '/usr/bin/vanphong-ai' -a "`readlink '/usr/bin/vanphong-ai'`" != '/etc/alternatives/vanphong-ai' ]; then
        rm -f '/usr/bin/vanphong-ai'
    fi
    update-alternatives --install '/usr/bin/vanphong-ai' 'vanphong-ai' "$APP" 100 || ln -sf "$APP" '/usr/bin/vanphong-ai'
else
    ln -sf "$APP" '/usr/bin/vanphong-ai'
fi

# Ubuntu 23.10+ chặn user namespace cho app thường qua AppArmor → Electron báo "No usable sandbox".
# Cài hồ sơ AppArmor cho phép riêng app này (giống VS Code, Chrome).
if [ -d /etc/apparmor.d ] && apparmor_parser --version >/dev/null 2>&1; then
    cat > /etc/apparmor.d/vanphong-ai <<PROFILE
abi <abi/4.0>,
include <tunables/global>

profile vanphong-ai $APP flags=(unconfined) {
  userns,
  include if exists <local/vanphong-ai>
}
PROFILE
    apparmor_parser --replace --write-cache --skip-read-cache /etc/apparmor.d/vanphong-ai 2>/dev/null || true
fi

# máy không có user namespace → dùng chrome-sandbox SUID
if ! { [[ -L /proc/self/ns/user ]] && unshare --user true; }; then
    chmod 4755 '/opt/VanPhongAI/chrome-sandbox' || true
else
    chmod 0755 '/opt/VanPhongAI/chrome-sandbox' || true
fi

if hash update-mime-database 2>/dev/null; then update-mime-database /usr/share/mime || true; fi
if hash update-desktop-database 2>/dev/null; then update-desktop-database /usr/share/applications || true; fi
