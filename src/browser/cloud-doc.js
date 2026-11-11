// Đọc tài liệu trên mạng (Excel / Word / PowerPoint trên SharePoint, OneDrive, Google Drive) bằng phiên đăng nhập của
// trình duyệt cạnh khung chat: đổi link xem thành link tải trực tiếp, tải về bộ nhớ đệm của app rồi rút chữ ngay trong app.
// Excel Online vẽ bảng bằng canvas nên đọc "trên trang" phải bấm từng ô – chậm và hay đứt; cách này 1 lần gọi là có đủ nội dung,
// không cần Python, chạy như nhau trên Windows / macOS / Linux.
const zlib = require('zlib');

// link xem → link tải trực tiếp. null = không phải link tài liệu nhận ra được
function directUrl(raw) {
  let u;
  try { u = new URL(String(raw || '').trim()); } catch { return null; }
  const host = u.hostname.toLowerCase();
  // Google Sheets / Docs / Slides
  const g = host === 'docs.google.com' && u.pathname.match(/^\/(spreadsheets|document|presentation)\/(?:u\/\d+\/)?d\/([\w-]+)/);
  if (g) {
    const fmt = { spreadsheets: 'xlsx', document: 'docx', presentation: 'pptx' }[g[1]];
    return { url: `https://docs.google.com/${g[1]}/d/${g[2]}/export?format=${fmt}`, ext: '.' + fmt };
  }
  if (/(^|\.)sharepoint\.com$/.test(host) || host === 'onedrive.live.com' || host === '1drv.ms') {
    // trang soạn thảo: .../_layouts/15/Doc.aspx?sourcedoc={GUID}&file=Ten.xlsx
    const src = u.searchParams.get('sourcedoc');
    const lay = u.pathname.toLowerCase().indexOf('/_layouts/');
    if (src && lay >= 0) {
      const id = src.replace(/[{}]/g, '');
      const file = u.searchParams.get('file') || '';
      return { url: `${u.origin}${u.pathname.slice(0, lay)}/_layouts/15/download.aspx?UniqueId=${encodeURIComponent(id)}`, ext: extOf(file) };
    }
    // link chia sẻ: /:x:/g/personal/... (x = Excel, w = Word, p = PowerPoint, b = PDF)
    const kind = (u.pathname.match(/^\/:([a-z]):\//i) || [])[1];
    const d = new URL(u.href); d.searchParams.set('download', '1');
    return { url: d.href, ext: { x: '.xlsx', w: '.docx', p: '.pptx', b: '.pdf' }[String(kind || '').toLowerCase()] || extOf(u.pathname) };
  }
  const ext = extOf(u.pathname);
  return ext ? { url: u.href, ext } : null;
}
const extOf = (name) => { const m = String(name || '').toLowerCase().match(/\.(xlsx|xlsm|docx|pptx|pdf|csv|txt|md)(?:$|[?#])/); return m ? '.' + m[1] : ''; };

// ---------- zip tối giản (đủ cho file Office) ----------
function unzip(buf) {
  const files = new Map();
  let eocd = -1;
  for (let i = buf.length - 22; i >= Math.max(0, buf.length - 66000); i--) if (buf.readUInt32LE(i) === 0x06054b50) { eocd = i; break; }
  if (eocd < 0) throw new Error('Không phải file Office (zip) hợp lệ');
  const count = buf.readUInt16LE(eocd + 10); let at = buf.readUInt32LE(eocd + 16);
  for (let n = 0; n < count && at + 46 <= buf.length; n++) {
    if (buf.readUInt32LE(at) !== 0x02014b50) break;
    const method = buf.readUInt16LE(at + 10); const size = buf.readUInt32LE(at + 20);
    const nameLen = buf.readUInt16LE(at + 28); const extraLen = buf.readUInt16LE(at + 30); const cmtLen = buf.readUInt16LE(at + 32);
    const local = buf.readUInt32LE(at + 42);
    const name = buf.toString('utf8', at + 46, at + 46 + nameLen);
    at += 46 + nameLen + extraLen + cmtLen;
    files.set(name, () => {
      const start = local + 30 + buf.readUInt16LE(local + 26) + buf.readUInt16LE(local + 28);
      const data = buf.subarray(start, start + size);
      return method === 0 ? data : zlib.inflateRawSync(data);
    });
  }
  return { has: (n) => files.has(n), names: () => [...files.keys()], text: (n) => (files.has(n) ? files.get(n)().toString('utf8') : '') };
}

const decode = (s) => String(s).replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&apos;/g, "'")
  .replace(/&#x([0-9a-f]+);/gi, (_m, h) => String.fromCodePoint(parseInt(h, 16))).replace(/&#(\d+);/g, (_m, d) => String.fromCodePoint(Number(d))).replace(/&amp;/g, '&');
const attr = (tag, name) => { const m = tag.match(new RegExp(`(?:^|\\s)${name}="([^"]*)"`)); return m ? decode(m[1]) : ''; };
const textOf = (xml) => [...String(xml).matchAll(/<(?:\w+:)?t(?:\s[^>]*)?>([\s\S]*?)<\/(?:\w+:)?t>/g)].map((m) => decode(m[1])).join('');

// ngày trong Excel là số thứ tự ngày → đổi ra ngày/giờ khi ô có định dạng ngày
const DATE_IDS = new Set([14, 15, 16, 17, 18, 19, 20, 21, 22, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 45, 46, 47, 50, 51, 52, 53, 54, 55, 56, 57, 58]);
function dateStyles(z) {
  const xml = z.text('xl/styles.xml'); if (!xml) return [];
  const custom = new Map([...xml.matchAll(/<numFmt\s[^>]*>/g)].map((m) => [Number(attr(m[0], 'numFmtId')), attr(m[0], 'formatCode')]));
  const xfs = (xml.match(/<cellXfs[^>]*>([\s\S]*?)<\/cellXfs>/) || [])[1] || '';
  return [...xfs.matchAll(/<xf\s[^>]*>/g)].map((m) => {
    const id = Number(attr(m[0], 'numFmtId'));
    const code = custom.get(id);
    return DATE_IDS.has(id) || (!!code && /[dmyhs]/i.test(code.replace(/"[^"]*"|\[[^\]]*\]|\\./g, '')) && !/^[#0.,% ]+$/.test(code));
  });
}
function serialDate(n) {
  const ms = Math.round((n - 25569) * 86400000);
  if (!Number.isFinite(ms)) return String(n);
  const d = new Date(ms); const p = (v) => String(v).padStart(2, '0');
  const day = `${d.getUTCFullYear()}-${p(d.getUTCMonth() + 1)}-${p(d.getUTCDate())}`;
  if (n < 1) return `${p(d.getUTCHours())}:${p(d.getUTCMinutes())}`;
  return n % 1 ? `${day} ${p(d.getUTCHours())}:${p(d.getUTCMinutes())}` : day;
}
const colIndex = (ref) => { let n = 0; for (const c of String(ref).replace(/\d+/g, '')) n = n * 26 + (c.charCodeAt(0) - 64); return n - 1; };
const trimNum = (v) => (/^-?\d+\.\d{7,}$/.test(v) ? String(Number(Number(v).toFixed(6))) : v);

function xlsxText(buf, maxChars = 30000) {
  const z = unzip(buf);
  const shared = [...z.text('xl/sharedStrings.xml').matchAll(/<si>([\s\S]*?)<\/si>|<si\/>/g)].map((m) => textOf(m[1] || ''));
  const dates = dateStyles(z);
  const rels = new Map([...z.text('xl/_rels/workbook.xml.rels').matchAll(/<Relationship\s[^>]*>/g)].map((m) => [attr(m[0], 'Id'), attr(m[0], 'Target')]));
  const sheets = [...z.text('xl/workbook.xml').matchAll(/<sheet\s[^>]*>/g)].map((m) => {
    const target = rels.get(attr(m[0], 'r:id')) || '';
    return { name: attr(m[0], 'name'), hidden: /hidden/i.test(attr(m[0], 'state')), file: target.startsWith('/') ? target.slice(1) : 'xl/' + target };
  }).filter((s) => z.has(s.file));
  const budget = Math.max(2000, Math.floor(maxChars / Math.max(1, sheets.filter((s) => !s.hidden).length)));
  const out = [];
  for (const s of sheets) {
    if (s.hidden) continue;
    const xml = z.text(s.file); const lines = []; let used = 0; let total = 0; let cut = false;
    for (const row of xml.matchAll(/<row\s[^>]*>([\s\S]*?)<\/row>/g)) {
      const cells = [];
      for (const c of row[1].matchAll(/<c\s([^>]*?)(?:\/>|>([\s\S]*?)<\/c>)/g)) {
        const t = attr(c[1], 't'); const body = c[2] || '';
        const v = (body.match(/<v>([\s\S]*?)<\/v>/) || [])[1];
        let val = '';
        if (t === 's') val = shared[Number(v)] || '';
        else if (t === 'inlineStr') val = textOf(body);
        else if (t === 'b') val = v === '1' ? 'TRUE' : 'FALSE';
        else if (v !== undefined) val = t === 'str' || t === 'e' ? decode(v) : (dates[Number(attr(c[1], 's'))] && /^-?\d+(\.\d+)?$/.test(v) ? serialDate(Number(v)) : trimNum(v));
        if (val === '') continue;
        cells[colIndex(attr(c[1], 'r')) >= 0 ? colIndex(attr(c[1], 'r')) : cells.length] = String(val).replace(/\s*\n\s*/g, ' ⏎ ').replace(/\|/g, '/');
      }
      if (!cells.some((x) => x)) continue;
      total += 1;
      if (cut) continue;
      const line = `${attr(row[0], 'r') || total}: ` + Array.from(cells, (x) => x || '').join(' | ');
      if (used + line.length > budget) { cut = true; continue; }
      used += line.length + 1; lines.push(line);
    }
    out.push(`## Sheet "${s.name}" – ${total} dòng có dữ liệu${cut ? ` (đang hiện ${lines.length} dòng đầu)` : ''}\n` + (lines.join('\n') || '(trống)'));
  }
  return out.join('\n\n') || '(file không có sheet nào đọc được)';
}

function docxText(buf, maxChars = 30000) {
  const xml = unzip(buf).text('word/document.xml');
  const paras = [...xml.matchAll(/<w:p[ >][\s\S]*?<\/w:p>/g)].map((m) => textOf(m[0].replace(/<w:tab\/>/g, '<w:t>\t</w:t>').replace(/<w:br\/>/g, '<w:t>\n</w:t>'))).filter((t) => t.trim());
  return paras.join('\n').slice(0, maxChars) || '(tài liệu trống)';
}

function pptxText(buf, maxChars = 30000) {
  const z = unzip(buf);
  const slides = z.names().filter((n) => /^ppt\/slides\/slide\d+\.xml$/.test(n)).sort((a, b) => Number(a.match(/\d+/)[0]) - Number(b.match(/\d+/)[0]));
  return slides.map((n, i) => `## Slide ${i + 1}\n` + [...z.text(n).matchAll(/<a:p>[\s\S]*?<\/a:p>/g)].map((m) => textOf(m[0])).filter((t) => t.trim()).join('\n')).join('\n\n').slice(0, maxChars) || '(không có slide)';
}

// rút chữ theo loại file; null = loại file app không tự đọc (PDF…) → model đọc bằng công cụ tài liệu
function extractText(buf, ext, maxChars) {
  const e = String(ext || '').toLowerCase();
  if (e === '.xlsx' || e === '.xlsm') return xlsxText(buf, maxChars);
  if (e === '.docx') return docxText(buf, maxChars);
  if (e === '.pptx') return pptxText(buf, maxChars);
  if (e === '.csv' || e === '.txt' || e === '.md') return buf.toString('utf8').replace(/^\ufeff/, '').slice(0, maxChars);
  return null;
}

// loại file theo nội dung thật (link không nói rõ đuôi)
function sniffExt(buf, fallback) {
  if (buf.length > 4 && buf.toString('latin1', 0, 4) === '%PDF') return '.pdf';
  if (buf.length > 4 && buf.readUInt32LE(0) === 0x04034b50) {
    try { const z = unzip(buf); return z.has('xl/workbook.xml') ? '.xlsx' : z.has('word/document.xml') ? '.docx' : z.has('ppt/presentation.xml') ? '.pptx' : (fallback || '.zip'); } catch { return fallback || '.zip'; }
  }
  return fallback || '';
}

module.exports = { directUrl, extractText, sniffExt, xlsxText, docxText, pptxText, unzip };
