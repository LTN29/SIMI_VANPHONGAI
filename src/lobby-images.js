// Ảnh trong chat Sảnh: giao diện dùng <img src="vpimg://img/<id>?t=1">, tiến trình chính tải từ Gateway (kèm key, giao diện
// không cầm key) rồi lưu đệm trên đĩa – ảnh không bao giờ đổi theo id nên mở lại app / cuộn lại không tải lần 2.
// Bộ đệm tự dọn khi vượt dung lượng (xoá ảnh lâu không xem trước).
const fs = require('fs');
const path = require('path');

const ID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;

function sniff(buf) {
  if (buf[0] === 0x89 && buf[1] === 0x50) return 'image/png';
  if (buf[0] === 0xff && buf[1] === 0xd8) return 'image/jpeg';
  if (buf.toString('ascii', 0, 4) === 'RIFF') return 'image/webp';
  if (buf.toString('ascii', 0, 4) === 'GIF8') return 'image/gif';
  return 'application/octet-stream';
}

class ImageCache {
  constructor({ dir, fetchFile, maxBytes = 300 * 1048576 }) {
    this.dir = dir; this.fetchFile = fetchFile; this.maxBytes = maxBytes;
    this.inflight = new Map();
    this.writes = 0;
    fs.mkdirSync(dir, { recursive: true });
    setTimeout(() => this.trim(), 30000).unref?.();
  }

  file(id, thumb) { return path.join(this.dir, id + (thumb ? '.t' : '')); }

  // → { status, type, data }
  async get(id, thumb) {
    if (!ID.test(id)) return { status: 400 };
    const p = this.file(id, thumb);
    try {
      const data = await fs.promises.readFile(p);
      const now = new Date(); fs.promises.utimes(p, now, now).catch(() => {}); // đánh dấu vừa xem (để dọn ảnh cũ trước)
      return { status: 200, type: sniff(data), data };
    } catch { /* chưa có trong bộ đệm */ }
    const key = id + (thumb ? '.t' : '');
    if (!this.inflight.has(key)) {
      this.inflight.set(key, (async () => {
        const r = await this.fetchFile(id, thumb);
        if (r.status === 200 && r.data && r.data.length) {
          await fs.promises.writeFile(p, r.data).catch(() => {});
          if (++this.writes % 50 === 0) this.trim();
        }
        return r;
      })().finally(() => this.inflight.delete(key)));
    }
    return this.inflight.get(key);
  }

  forget(id) { for (const t of [false, true]) fs.rm(this.file(id, t), { force: true }, () => {}); }

  trim() {
    try {
      const files = fs.readdirSync(this.dir).map((f) => { const p = path.join(this.dir, f); const st = fs.statSync(p); return { p, size: st.size, at: st.atimeMs > st.mtimeMs ? st.atimeMs : st.mtimeMs }; });
      let total = files.reduce((a, f) => a + f.size, 0);
      if (total <= this.maxBytes) return;
      files.sort((a, b) => a.at - b.at);
      for (const f of files) { if (total <= this.maxBytes * 0.8) break; try { fs.rmSync(f.p, { force: true }); total -= f.size; } catch { /* đang mở */ } }
    } catch { /* thư mục chưa có */ }
  }
}

module.exports = { ImageCache, sniff, ID };
