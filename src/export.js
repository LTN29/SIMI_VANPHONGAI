// Xuất kết quả của văn phòng ra file theo lệnh: Word (.docx), Excel (.xlsx), PDF, HTML, CSV, Markdown, văn bản.
// Không dùng thư viện ngoài: tự đóng gói .docx / .xlsx (zip + XML), PDF in từ HTML bằng Chromium của Electron.
const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

const FORMATS = {
  md: { ext: 'md', name: 'Markdown' },
  docx: { ext: 'docx', name: 'Word' },
  xlsx: { ext: 'xlsx', name: 'Excel' },
  pdf: { ext: 'pdf', name: 'PDF' },
  html: { ext: 'html', name: 'Trang web' },
  csv: { ext: 'csv', name: 'CSV' },
  txt: { ext: 'txt', name: 'Văn bản' },
};

// "xuất ra file Excel", "gửi file word", "lưu pdf"… → định dạng; không nói gì → '' (mặc định Markdown)
function detectFormat(text) {
  const t = String(text || '').toLowerCase();
  const near = (re) => new RegExp(`(file|tệp|tep|xuất|xuat|lưu|luu|định dạng|dang|bảng tính|export|save|dạng)[^.\\n]{0,24}(${re.source})|\\.(${re.source})\\b`, 'i').test(t);
  if (near(/excel|xlsx|bảng tính|spreadsheet/)) return 'xlsx';
  if (near(/word|docx|doc\b/)) return 'docx';
  if (near(/pdf/)) return 'pdf';
  if (near(/csv/)) return 'csv';
  if (near(/html|trang web|web page/)) return 'html';
  if (near(/txt|văn bản thuần|text thuần/)) return 'txt';
  if (near(/markdown|\bmd\b/)) return 'md';
  return '';
}

// tên file người dùng đặt: giữ tiếng Việt, bỏ ký tự Windows cấm, bỏ đuôi (đuôi theo định dạng)
function safeName(name) {
  let s = String(name || '').normalize('NFC').replace(/[\\/:*?"<>|\u0000-\u001f]/g, ' ').replace(/\s+/g, ' ').trim();
  s = s.replace(/\.(md|docx?|xlsx?|pdf|html?|csv|txt)$/i, '').replace(/[. ]+$/g, '');
  if (/^(con|prn|aux|nul|com\d|lpt\d)$/i.test(s)) s = '_' + s;
  return s.slice(0, 120);
}
function formatFromName(name) {
  const m = String(name || '').match(/\.(md|docx?|xlsx?|pdf|html?|csv|txt)$/i);
  if (!m) return '';
  const e = m[1].toLowerCase();
  return e === 'doc' ? 'docx' : e === 'xls' ? 'xlsx' : e === 'htm' ? 'html' : e;
}

// không ghi đè file đã có: "Báo cáo.docx" → "Báo cáo (2).docx"
function uniquePath(dir, base, ext) {
  let p = path.join(dir, `${base}.${ext}`);
  for (let n = 2; fs.existsSync(p); n++) p = path.join(dir, `${base} (${n}).${ext}`);
  return p;
}

// ---------------- Markdown → khối ----------------
function parseMd(md) {
  const lines = String(md || '').replace(/\r\n?/g, '\n').split('\n');
  const blocks = [];
  let para = [];
  const flush = () => { if (para.length) { blocks.push({ type: 'p', text: para.join(' ') }); para = []; } };
  const cells = (l) => l.trim().replace(/^\||\|$/g, '').split('|').map((c) => c.trim());
  for (let i = 0; i < lines.length; i++) {
    const l = lines[i];
    if (/^\s*```/.test(l)) {
      flush();
      const code = [];
      for (i++; i < lines.length && !/^\s*```/.test(lines[i]); i++) code.push(lines[i]);
      blocks.push({ type: 'code', text: code.join('\n') });
      continue;
    }
    if (/^\s*\|.*\|\s*$/.test(l) && i + 1 < lines.length && /^\s*\|?\s*:?-{2,}/.test(lines[i + 1])) {
      flush();
      const rows = [cells(l)];
      for (i += 2; i < lines.length && /^\s*\|.*\|?\s*$/.test(lines[i]) && lines[i].includes('|'); i++) rows.push(cells(lines[i]));
      i--;
      blocks.push({ type: 'table', rows });
      continue;
    }
    let m;
    if ((m = l.match(/^\s*(#{1,6})\s+(.*)$/))) { flush(); blocks.push({ type: 'h', level: m[1].length, text: m[2].replace(/#+\s*$/, '').trim() }); continue; }
    if ((m = l.match(/^(\s*)[-*+]\s+(?:\[[ xX]\]\s+)?(.*)$/))) { flush(); blocks.push({ type: 'li', ordered: false, level: Math.min(3, Math.floor(m[1].length / 2)), text: m[2] }); continue; }
    if ((m = l.match(/^(\s*)(\d+)[.)]\s+(.*)$/))) { flush(); blocks.push({ type: 'li', ordered: true, n: Number(m[2]), level: Math.min(3, Math.floor(m[1].length / 2)), text: m[3] }); continue; }
    if ((m = l.match(/^\s*>\s?(.*)$/))) { flush(); blocks.push({ type: 'quote', text: m[1] }); continue; }
    if (/^\s*([-*_])\s*\1\s*\1[\s\-*_]*$/.test(l)) { flush(); blocks.push({ type: 'hr' }); continue; }
    if (!l.trim()) { flush(); continue; }
    para.push(l.trim());
  }
  flush();
  return blocks;
}

// **đậm**, *nghiêng*, `mã`, [chữ](link) → đoạn chữ có kiểu
function inlineRuns(text) {
  const runs = [];
  const re = /(\*\*|__)(.+?)\1|(\*|_)(?!\s)(.+?)\3|`([^`]+)`|\[([^\]]+)\]\(([^)\s]+)\)/g;
  let last = 0; let m;
  const s = String(text || '');
  while ((m = re.exec(s))) {
    if (m.index > last) runs.push({ t: s.slice(last, m.index) });
    if (m[2] !== undefined) runs.push({ t: m[2], b: true });
    else if (m[4] !== undefined) runs.push({ t: m[4], i: true });
    else if (m[5] !== undefined) runs.push({ t: m[5], code: true });
    else runs.push({ t: m[6], link: m[7] });
    last = m.index + m[0].length;
  }
  if (last < s.length) runs.push({ t: s.slice(last) });
  return runs.filter((r) => r.t);
}
const plain = (text) => inlineRuns(text).map((r) => r.t).join('');

// ---------------- zip ----------------
const CRC = (() => { const t = new Int32Array(256); for (let n = 0; n < 256; n++) { let c = n; for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1; t[n] = c; } return t; })();
function crc32(buf) { let c = -1; for (let i = 0; i < buf.length; i++) c = CRC[(c ^ buf[i]) & 0xff] ^ (c >>> 8); return (c ^ -1) >>> 0; }

function zip(files) {
  const parts = []; const dir = []; let off = 0;
  const d = new Date();
  const time = (d.getHours() << 11) | (d.getMinutes() << 5) | Math.floor(d.getSeconds() / 2);
  const date = ((d.getFullYear() - 1980) << 9) | ((d.getMonth() + 1) << 5) | d.getDate();
  for (const [name, content] of files) {
    const data = Buffer.isBuffer(content) ? content : Buffer.from(content, 'utf8');
    const comp = zlib.deflateRawSync(data);
    const nameBuf = Buffer.from(name, 'utf8');
    const crc = crc32(data);
    const h = Buffer.alloc(30);
    h.writeUInt32LE(0x04034b50, 0); h.writeUInt16LE(20, 4); h.writeUInt16LE(0x0800, 6); h.writeUInt16LE(8, 8);
    h.writeUInt16LE(time, 10); h.writeUInt16LE(date, 12); h.writeUInt32LE(crc, 14);
    h.writeUInt32LE(comp.length, 18); h.writeUInt32LE(data.length, 22); h.writeUInt16LE(nameBuf.length, 26); h.writeUInt16LE(0, 28);
    parts.push(h, nameBuf, comp);
    const c = Buffer.alloc(46);
    c.writeUInt32LE(0x02014b50, 0); c.writeUInt16LE(20, 4); c.writeUInt16LE(20, 6); c.writeUInt16LE(0x0800, 8); c.writeUInt16LE(8, 10);
    c.writeUInt16LE(time, 12); c.writeUInt16LE(date, 14); c.writeUInt32LE(crc, 16);
    c.writeUInt32LE(comp.length, 20); c.writeUInt32LE(data.length, 24); c.writeUInt16LE(nameBuf.length, 28);
    c.writeUInt32LE(off, 42);
    dir.push(c, nameBuf);
    off += 30 + nameBuf.length + comp.length;
  }
  const dirBuf = Buffer.concat(dir);
  const end = Buffer.alloc(22);
  end.writeUInt32LE(0x06054b50, 0); end.writeUInt16LE(files.length, 8); end.writeUInt16LE(files.length, 10);
  end.writeUInt32LE(dirBuf.length, 12); end.writeUInt32LE(off, 16);
  return Buffer.concat([...parts, dirBuf, end]);
}

const esc = (s) => String(s).replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f]/g, '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// ---------------- Word ----------------
function docxRuns(text, base = {}) {
  return inlineRuns(text).map((r) => {
    // thứ tự thẻ theo chuẩn OOXML (Word báo file hỏng nếu sai thứ tự): rFonts, b, i, color, u
    const pr = [r.code && '<w:rFonts w:ascii="Consolas" w:hAnsi="Consolas"/>', (r.b || base.b) && '<w:b/>', (r.i || base.i) && '<w:i/>', r.link && '<w:color w:val="1F5FBF"/><w:u w:val="single"/>'].filter(Boolean).join('');
    const t = r.link ? `${r.t} (${r.link})` : r.t;
    return `<w:r>${pr ? `<w:rPr>${pr}</w:rPr>` : ''}<w:t xml:space="preserve">${esc(t)}</w:t></w:r>`;
  }).join('');
}

function toDocx(md, title) {
  const body = [];
  const p = (inner, ppr = '') => body.push(`<w:p>${ppr ? `<w:pPr>${ppr}</w:pPr>` : ''}${inner}</w:p>`);
  const blocks = parseMd(md);
  if (title && !(blocks[0] && blocks[0].type === 'h')) p(docxRuns(title), '<w:pStyle w:val="Title"/>');
  for (const b of blocks) {
    if (b.type === 'h') p(docxRuns(b.text), `<w:pStyle w:val="Heading${Math.min(3, b.level)}"/>`);
    else if (b.type === 'p') p(docxRuns(b.text));
    else if (b.type === 'quote') p(docxRuns(b.text, { i: true }), '<w:ind w:left="567"/>');
    else if (b.type === 'hr') p('', '<w:pBdr><w:bottom w:val="single" w:sz="6" w:space="1" w:color="BFBFBF"/></w:pBdr>');
    else if (b.type === 'li') {
      const left = 360 + b.level * 360;
      p(`<w:r><w:t xml:space="preserve">${b.ordered ? `${b.n}.` : '•'}\t</w:t></w:r>${docxRuns(b.text)}`, `<w:tabs><w:tab w:val="left" w:pos="${left}"/></w:tabs><w:spacing w:after="40"/><w:ind w:left="${left}" w:hanging="360"/>`);
    } else if (b.type === 'code') {
      for (const line of b.text.split('\n')) p(`<w:r><w:rPr><w:rFonts w:ascii="Consolas" w:hAnsi="Consolas"/><w:sz w:val="19"/></w:rPr><w:t xml:space="preserve">${esc(line)}</w:t></w:r>`, '<w:shd w:val="clear" w:color="auto" w:fill="F2F2F2"/><w:spacing w:after="0"/>');
    } else if (b.type === 'table') {
      const cols = Math.max(...b.rows.map((r) => r.length));
      const w = Math.floor(9000 / cols);
      const rows = b.rows.map((r, ri) => `<w:tr>${Array.from({ length: cols }, (_, ci) => `<w:tc><w:tcPr><w:tcW w:w="${w}" w:type="dxa"/>${ri === 0 ? '<w:shd w:val="clear" w:color="auto" w:fill="DCE6F2"/>' : ''}</w:tcPr><w:p><w:pPr><w:spacing w:after="0"/></w:pPr>${docxRuns(r[ci] || '', { b: ri === 0 })}</w:p></w:tc>`).join('')}</w:tr>`).join('');
      body.push(`<w:tbl><w:tblPr><w:tblStyle w:val="TableGrid"/><w:tblW w:w="0" w:type="auto"/></w:tblPr><w:tblGrid>${Array.from({ length: cols }, () => `<w:gridCol w:w="${w}"/>`).join('')}</w:tblGrid>${rows}</w:tbl>`);
      p('');
    }
  }
  const W = 'xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"';
  const doc = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><w:document ${W}><w:body>${body.join('')}<w:sectPr><w:pgSz w:w="11906" w:h="16838"/><w:pgMar w:top="1134" w:right="1134" w:bottom="1134" w:left="1418" w:header="709" w:footer="709" w:gutter="0"/></w:sectPr></w:body></w:document>`;
  const font = '<w:rFonts w:ascii="Times New Roman" w:hAnsi="Times New Roman" w:cs="Times New Roman" w:eastAsia="Times New Roman"/>';
  const heading = (id, name, size, color) => `<w:style w:type="paragraph" w:styleId="${id}"><w:name w:val="${name}"/><w:basedOn w:val="Normal"/><w:next w:val="Normal"/><w:qFormat/><w:pPr><w:keepNext/><w:spacing w:before="240" w:after="120"/>${id === 'Heading1' ? '<w:outlineLvl w:val="0"/>' : id === 'Heading2' ? '<w:outlineLvl w:val="1"/>' : id === 'Heading3' ? '<w:outlineLvl w:val="2"/>' : '<w:jc w:val="center"/>'}</w:pPr><w:rPr><w:b/><w:color w:val="${color}"/><w:sz w:val="${size}"/></w:rPr></w:style>`;
  const styles = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><w:styles ${W}><w:docDefaults><w:rPrDefault><w:rPr>${font}<w:sz w:val="26"/><w:lang w:val="vi-VN"/></w:rPr></w:rPrDefault><w:pPrDefault><w:pPr><w:spacing w:after="120" w:line="300" w:lineRule="auto"/></w:pPr></w:pPrDefault></w:docDefaults>`
    + '<w:style w:type="paragraph" w:default="1" w:styleId="Normal"><w:name w:val="Normal"/><w:qFormat/></w:style>'
    + heading('Title', 'Title', 36, '1F3864') + heading('Heading1', 'heading 1', 32, '1F3864') + heading('Heading2', 'heading 2', 28, '2E5597') + heading('Heading3', 'heading 3', 26, '2E5597')
    + '<w:style w:type="table" w:styleId="TableGrid"><w:name w:val="Table Grid"/><w:tblPr><w:tblBorders><w:top w:val="single" w:sz="4" w:color="A6A6A6"/><w:left w:val="single" w:sz="4" w:color="A6A6A6"/><w:bottom w:val="single" w:sz="4" w:color="A6A6A6"/><w:right w:val="single" w:sz="4" w:color="A6A6A6"/><w:insideH w:val="single" w:sz="4" w:color="A6A6A6"/><w:insideV w:val="single" w:sz="4" w:color="A6A6A6"/></w:tblBorders><w:tblCellMar><w:left w:w="100" w:type="dxa"/><w:right w:w="100" w:type="dxa"/></w:tblCellMar></w:tblPr></w:style></w:styles>';
  return zip([
    ['[Content_Types].xml', '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/><Override PartName="/word/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml"/></Types>'],
    ['_rels/.rels', '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/></Relationships>'],
    ['word/_rels/document.xml.rels', '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/></Relationships>'],
    ['word/document.xml', doc],
    ['word/styles.xml', styles],
  ]);
}

// ---------------- Excel ----------------
// mỗi bảng Markdown → 1 sheet; không có bảng thì mỗi dòng nội dung là 1 hàng
function sheetsFrom(md, title) {
  const blocks = parseMd(md);
  const tables = blocks.filter((b) => b.type === 'table');
  if (tables.length) {
    return tables.map((t, i) => {
      // tên sheet: tiêu đề gần nhất phía trên bảng
      const idx = blocks.indexOf(t);
      const h = blocks.slice(0, idx).reverse().find((b) => b.type === 'h');
      return { name: (h && plain(h.text)) || (tables.length > 1 ? `Bảng ${i + 1}` : title || 'Kết quả'), rows: t.rows.map((r) => r.map(plain)), header: true };
    });
  }
  const rows = blocks.map((b) => [b.type === 'li' ? (b.ordered ? `${b.n}. ` : '• ') + plain(b.text) : b.type === 'table' ? '' : plain(b.text || '')]).filter((r) => r[0]);
  return [{ name: title || 'Kết quả', rows, header: false }];
}

function colName(n) { let s = ''; for (n++; n > 0; n = Math.floor((n - 1) / 26)) s = String.fromCharCode(65 + ((n - 1) % 26)) + s; return s; }

function cellValue(v) {
  const s = String(v ?? '').trim();
  // số kiểu Việt Nam (1.234.567 hoặc 1,5) và số thường → ô số để Excel tính được
  const vn = s.replace(/\s?(đ|vnđ|vnd|₫)$/i, '');
  if (/^-?\d{1,3}(\.\d{3})+(,\d+)?$/.test(vn)) return Number(vn.replace(/\./g, '').replace(',', '.'));
  if (/^-?\d+(,\d+)$/.test(vn)) return Number(vn.replace(',', '.'));
  if (/^-?\d+(\.\d+)?$/.test(vn) && !/^0\d/.test(vn) && vn.length < 16) return Number(vn);
  return s;
}

function toXlsx(md, title) {
  const sheets = sheetsFrom(md, title);
  const used = new Set();
  const names = sheets.map((s, i) => {
    let n = String(s.name).replace(/[\\/?*[\]:]/g, ' ').trim().slice(0, 31) || `Sheet${i + 1}`;
    for (let k = 2; used.has(n.toLowerCase()); k++) n = `${n.slice(0, 27)} (${k})`;
    used.add(n.toLowerCase());
    return n;
  });
  const sheetXml = sheets.map((s) => {
    const widths = [];
    const rows = s.rows.map((r, ri) => `<row r="${ri + 1}">${r.map((v, ci) => {
      const val = cellValue(v); const ref = `${colName(ci)}${ri + 1}`;
      widths[ci] = Math.min(60, Math.max(widths[ci] || 8, String(v).length + 2));
      const st = s.header && ri === 0 ? ' s="1"' : typeof val === 'number' && Number.isInteger(val) && Math.abs(val) >= 10000 ? ' s="2"' : '';
      return typeof val === 'number' ? `<c r="${ref}"${st}><v>${val}</v></c>` : `<c r="${ref}" t="inlineStr"${st}><is><t xml:space="preserve">${esc(val)}</t></is></c>`;
    }).join('')}</row>`).join('');
    const cols = widths.length ? `<cols>${widths.map((w, i) => `<col min="${i + 1}" max="${i + 1}" width="${w}" customWidth="1"/>`).join('')}</cols>` : '';
    const freeze = s.header ? '<sheetViews><sheetView workbookViewId="0"><pane ySplit="1" topLeftCell="A2" activePane="bottomLeft" state="frozen"/></sheetView></sheetViews>' : '';
    const filter = s.header && s.rows.length > 1 && widths.length ? `<autoFilter ref="A1:${colName(widths.length - 1)}${s.rows.length}"/>` : '';
    return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">${freeze}${cols}<sheetData>${rows}</sheetData>${filter}</worksheet>`;
  });
  const files = [
    ['[Content_Types].xml', `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/><Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>${sheets.map((_, i) => `<Override PartName="/xl/worksheets/sheet${i + 1}.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>`).join('')}</Types>`],
    ['_rels/.rels', '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/></Relationships>'],
    ['xl/workbook.xml', `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><sheets>${names.map((n, i) => `<sheet name="${esc(n)}" sheetId="${i + 1}" r:id="rId${i + 1}"/>`).join('')}</sheets>${sheets.some((s) => s.header && s.rows.length > 1) ? `<definedNames>${sheets.map((s, i) => (s.header && s.rows.length > 1 ? `<definedName name="_xlnm._FilterDatabase" localSheetId="${i}" hidden="1">'${esc(names[i].replace(/'/g, "''"))}'!$A$1:$${colName(Math.max(...s.rows.map((r) => r.length)) - 1)}$${s.rows.length}</definedName>` : '')).join('')}</definedNames>` : ''}</workbook>`],
    ['xl/_rels/workbook.xml.rels', `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">${sheets.map((_, i) => `<Relationship Id="rId${i + 1}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet${i + 1}.xml"/>`).join('')}<Relationship Id="rId${sheets.length + 1}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/></Relationships>`],
    ['xl/styles.xml', '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"><fonts count="2"><font><sz val="11"/><name val="Calibri"/></font><font><b/><sz val="11"/><color rgb="FFFFFFFF"/><name val="Calibri"/></font></fonts><fills count="3"><fill><patternFill patternType="none"/></fill><fill><patternFill patternType="gray125"/></fill><fill><patternFill patternType="solid"><fgColor rgb="FF2E5597"/><bgColor indexed="64"/></patternFill></fill></fills><borders count="1"><border><left/><right/><top/><bottom/><diagonal/></border></borders><cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs><cellXfs count="3"><xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0"/><xf numFmtId="0" fontId="1" fillId="2" borderId="0" xfId="0" applyFont="1" applyFill="1"/><xf numFmtId="3" fontId="0" fillId="0" borderId="0" xfId="0" applyNumberFormat="1"/></cellXfs><cellStyles count="1"><cellStyle name="Normal" xfId="0" builtinId="0"/></cellStyles></styleSheet>'],
    ...sheetXml.map((x, i) => [`xl/worksheets/sheet${i + 1}.xml`, x]),
  ];
  return zip(files);
}

// ---------------- CSV / văn bản / HTML ----------------
function toCsv(md, title) {
  const s = sheetsFrom(md, title)[0];
  const q = (v) => (/[",\n;]/.test(String(v)) ? `"${String(v).replace(/"/g, '""')}"` : String(v));
  return '﻿' + s.rows.map((r) => r.map(q).join(',')).join('\r\n') + '\r\n'; // BOM: Excel mở đúng tiếng Việt
}

function toTxt(md) {
  return parseMd(md).map((b) => {
    if (b.type === 'h') return '\n' + plain(b.text).toUpperCase();
    if (b.type === 'li') return '  '.repeat(b.level) + (b.ordered ? `${b.n}. ` : '- ') + plain(b.text);
    if (b.type === 'table') return b.rows.map((r) => r.map(plain).join('\t')).join('\n');
    if (b.type === 'hr') return '----------';
    if (b.type === 'code') return b.text;
    return plain(b.text);
  }).join('\n').trim() + '\n';
}

function htmlInline(text) {
  return inlineRuns(text).map((r) => {
    const t = esc(r.t);
    if (r.b) return `<strong>${t}</strong>`;
    if (r.i) return `<em>${t}</em>`;
    if (r.code) return `<code>${t}</code>`;
    if (r.link) return /^https?:\/\//i.test(r.link) ? `<a href="${esc(r.link)}">${t}</a>` : t;
    return t;
  }).join('');
}

function toHtml(md, title) {
  const out = []; let list = null;
  const close = () => { if (list) { out.push(`</${list}>`); list = null; } };
  for (const b of parseMd(md)) {
    if (b.type === 'li') {
      const tag = b.ordered ? 'ol' : 'ul';
      if (list !== tag) { close(); out.push(`<${tag}>`); list = tag; }
      out.push(`<li>${htmlInline(b.text)}</li>`); continue;
    }
    close();
    if (b.type === 'h') out.push(`<h${b.level}>${htmlInline(b.text)}</h${b.level}>`);
    else if (b.type === 'p') out.push(`<p>${htmlInline(b.text)}</p>`);
    else if (b.type === 'quote') out.push(`<blockquote>${htmlInline(b.text)}</blockquote>`);
    else if (b.type === 'hr') out.push('<hr>');
    else if (b.type === 'code') out.push(`<pre><code>${esc(b.text)}</code></pre>`);
    else if (b.type === 'table') out.push(`<table><thead><tr>${b.rows[0].map((c) => `<th>${htmlInline(c)}</th>`).join('')}</tr></thead><tbody>${b.rows.slice(1).map((r) => `<tr>${r.map((c) => `<td>${htmlInline(c)}</td>`).join('')}</tr>`).join('')}</tbody></table>`);
  }
  close();
  return `<!doctype html><html lang="vi"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${esc(title || 'Kết quả')}</title><style>
body{font-family:"Segoe UI",Roboto,Arial,sans-serif;color:#1d2433;max-width:820px;margin:32px auto;padding:0 20px;line-height:1.6;font-size:15px}
h1,h2,h3{color:#1f3864;line-height:1.3}h1{font-size:26px;border-bottom:2px solid #dce6f2;padding-bottom:6px}h2{font-size:20px;margin-top:28px}h3{font-size:17px}
table{border-collapse:collapse;width:100%;margin:12px 0;font-size:14px}th,td{border:1px solid #c9d3e3;padding:6px 9px;text-align:left;vertical-align:top}th{background:#2e5597;color:#fff}tr:nth-child(even) td{background:#f5f8fc}
code{background:#f2f2f2;padding:1px 4px;border-radius:4px;font-family:Consolas,monospace}pre{background:#f2f2f2;padding:10px;border-radius:6px;overflow:auto}blockquote{margin:10px 0;padding:4px 14px;border-left:4px solid #9fb6dc;color:#45536b}
@media print{body{margin:0;max-width:none}th{-webkit-print-color-adjust:exact;print-color-adjust:exact}}
</style></head><body>${out.join('\n')}</body></html>`;
}

// ---------------- ghi file ----------------
// nội dung Markdown → dữ liệu file theo định dạng; PDF cần printPdf(html) (không có thì lưu HTML thay)
async function build(format, content, title, printPdf) {
  const fmt = FORMATS[format] ? format : 'md';
  if (fmt === 'docx') return { data: toDocx(content, title), ext: 'docx' };
  if (fmt === 'xlsx') return { data: toXlsx(content, title), ext: 'xlsx' };
  if (fmt === 'csv') return { data: toCsv(content, title), ext: 'csv' };
  if (fmt === 'txt') return { data: toTxt(content), ext: 'txt' };
  if (fmt === 'html') return { data: toHtml(content, title), ext: 'html' };
  if (fmt === 'pdf') return printPdf ? { data: await printPdf(toHtml(content, title)), ext: 'pdf' } : { data: toHtml(content, title), ext: 'html' };
  return { data: String(content || ''), ext: 'md' };
}

// văn phòng: tên + thư mục, không ghi đè file đã có
async function writeResult({ content, format, dir, name, title, printPdf }) {
  fs.mkdirSync(dir, { recursive: true });
  const { data, ext } = await build(format, content, title, printPdf);
  const file = uniquePath(dir, name, ext);
  fs.writeFileSync(file, data);
  return file;
}

// công cụ cho AI trong tab Chat: ghi đúng đường dẫn (đuôi file quyết định định dạng)
async function writeDocument({ content, file, title, printPdf, overwrite = true }) {
  const format = formatFromName(file);
  if (!format) throw new Error('Đường dẫn phải có đuôi .docx, .xlsx, .pdf, .html, .csv, .txt hoặc .md');
  if (!String(content || '').trim()) throw new Error('Nội dung đang trống');
  const dir = path.dirname(file);
  fs.mkdirSync(dir, { recursive: true });
  const { data, ext } = await build(format, content, title || path.basename(file).replace(/\.[^.]+$/, ''), printPdf);
  const base = path.basename(file).replace(/\.[^.]+$/, '');
  const out = overwrite ? path.join(dir, `${base}.${ext}`) : uniquePath(dir, base, ext);
  fs.writeFileSync(out, data);
  return { file: out, format: ext, bytes: data.length };
}

// PDF khổ A4 in bằng Chromium của Electron (cửa sổ ẩn, tắt JavaScript)
async function pdfFromHtml(html, tmpDir = require('os').tmpdir()) {
  const { BrowserWindow } = require('electron');
  fs.mkdirSync(tmpDir, { recursive: true });
  const tmp = path.join(tmpDir, `vp-in-pdf-${process.pid}-${Date.now()}-${Math.random().toString(36).slice(2, 6)}.html`);
  fs.writeFileSync(tmp, html, 'utf8');
  const w = new BrowserWindow({ show: false, webPreferences: { sandbox: true, javascript: false, partition: 'vp-print' } });
  try {
    await w.loadFile(tmp);
    return await w.webContents.printToPDF({ pageSize: 'A4', printBackground: true, margins: { marginType: 'default' } });
  } finally { w.destroy(); fs.rm(tmp, { force: true }, () => {}); }
}

// dặn AI trình bày hợp với file sẽ xuất
function formatBrief(format, fileName) {
  const f = FORMATS[format];
  if (!f || format === 'md') return fileName ? `Kết quả cuối sẽ được lưu thành file "${fileName}.md".` : '';
  const name = `"${fileName || 'kết quả'}.${f.ext}"`;
  const how = {
    docx: 'trình bày bằng Markdown rõ ràng (tiêu đề #, ##, danh sách, bảng | ... |) – app sẽ chuyển thành file Word.',
    xlsx: 'đưa dữ liệu chính vào BẢNG Markdown (| cột | cột |, dòng đầu là tên cột, mỗi bảng thành 1 sheet, có tiêu đề ## phía trên mỗi bảng làm tên sheet); số viết dạng số, không kèm chữ.',
    csv: 'đưa dữ liệu vào MỘT bảng Markdown (| cột | cột |, dòng đầu là tên cột).',
    pdf: 'trình bày bằng Markdown rõ ràng (tiêu đề, danh sách, bảng) – app sẽ in ra PDF.',
    html: 'trình bày bằng Markdown rõ ràng – app sẽ chuyển thành trang HTML.',
    txt: 'viết văn bản thuần, ít định dạng.',
  }[format];
  return `KẾT QUẢ CUỐI SẼ ĐƯỢC LƯU THÀNH FILE ${f.name.toUpperCase()} ${name}: ${how} Không tự tạo file, không kể quy trình – chỉ trả nội dung.`;
}

module.exports = { FORMATS, detectFormat, safeName, formatFromName, uniquePath, parseMd, toDocx, toXlsx, toCsv, toTxt, toHtml, writeResult, writeDocument, pdfFromHtml, formatBrief, crc32 };
