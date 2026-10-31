/* Nén ảnh chat Sảnh trong luồng riêng – không làm khựng giao diện / cảnh 3D.
   Vào: { id, file }  → Ra: { id, full, thumb, w, h, gif } hoặc { id, error } */
const GIF_MAX = 5 * 1048576;

async function encode(bmp, max, quality) {
  const s = Math.min(1, max / Math.max(bmp.width, bmp.height));
  const w = Math.max(1, Math.round(bmp.width * s)); const h = Math.max(1, Math.round(bmp.height * s));
  const c = new OffscreenCanvas(w, h); const g = c.getContext('2d');
  g.imageSmoothingQuality = 'high'; g.drawImage(bmp, 0, 0, w, h);
  return { blob: await c.convertToBlob({ type: 'image/webp', quality }), w, h };
}

self.onmessage = async (e) => {
  const { id, file } = e.data;
  let bmp;
  try {
    if (!/^image\/(png|jpe?g|webp|gif)$/.test(file.type)) throw new Error('Chỉ gửi được ảnh PNG, JPG, WebP hoặc GIF');
    try { bmp = await createImageBitmap(file, { imageOrientation: 'from-image' }); } catch { throw new Error('Không đọc được ảnh này'); }
    let full;
    if (file.type === 'image/gif') {
      if (file.size > GIF_MAX) throw new Error('Ảnh GIF lớn quá 5 MB');
      full = { blob: file, w: bmp.width, h: bmp.height }; // giữ nguyên để còn chuyển động
    } else {
      full = await encode(bmp, 1600, 0.82); // ảnh chụp màn hình 4K → ~200–400 KB, bỏ luôn thông tin ẩn (GPS…)
      if (full.blob.size > 4.5 * 1048576) full = await encode(bmp, 1200, 0.7);
    }
    let thumb = await encode(bmp, 480, 0.72);
    if (thumb.blob.size > 240 * 1024) thumb = await encode(bmp, 320, 0.6);
    const fb = await full.blob.arrayBuffer(); const tb = await thumb.blob.arrayBuffer();
    self.postMessage({ id, full: fb, thumb: tb, w: full.w, h: full.h, gif: file.type === 'image/gif' }, [fb, tb]);
  } catch (err) {
    self.postMessage({ id, error: err.message || String(err) });
  } finally { if (bmp) bmp.close(); }
};
