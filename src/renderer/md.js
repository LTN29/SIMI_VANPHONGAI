/* Chuyển Markdown đơn giản sang HTML an toàn (escape trước). */
(function () {
  const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  function inline(s) {
    return esc(s)
      .replace(/`([^`]+)`/g, '<code>$1</code>')
      .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
      .replace(/(^|[^*])\*([^*\s][^*]*)\*/g, '$1<em>$2</em>')
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<span class="md-link" title="$2">$1</span>');
  }
  function render(md) {
    const lines = String(md || '').replace(/\r\n/g, '\n').split('\n');
    const out = []; let list = null; let para = []; let code = null; let table = null;
    const cells = (l) => l.trim().replace(/^\|/, '').replace(/\|$/, '').split('|').map((c) => c.trim());
    const flushTable = () => {
      if (!table) return;
      const [head, ...rows] = table;
      out.push('<table><thead><tr>' + head.map((c) => `<th>${inline(c)}</th>`).join('') + '</tr></thead><tbody>' +
        rows.map((r) => '<tr>' + head.map((_, i) => `<td>${inline(r[i] || '')}</td>`).join('') + '</tr>').join('') + '</tbody></table>');
      table = null;
    };
    const flushPara = () => { if (para.length) { out.push('<p>' + para.map(inline).join('<br>') + '</p>'); para = []; } };
    const flushList = () => { if (list) { out.push(`<${list.t}>` + list.items.map((i) => `<li>${inline(i)}</li>`).join('') + `</${list.t}>`); list = null; } };
    let skip = 0;
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      if (skip) { skip--; continue; }
      if (code) {
        if (/^```/.test(line)) { out.push('<pre><code>' + esc(code.join('\n')) + '</code></pre>'); code = null; } else code.push(line);
        continue;
      }
      if (table && /^\s*\|/.test(line)) { table.push(cells(line)); continue; }
      if (table) flushTable();
      if (/^\s*\|.*\|\s*$/.test(line) && i + 1 < lines.length && /^\s*\|?\s*:?-{2,}/.test(lines[i + 1])) { flushPara(); flushList(); table = [cells(line)]; skip = 1; continue; }
      if (/^```/.test(line)) { flushPara(); flushList(); code = []; continue; }
      let m;
      if ((m = line.match(/^(#{1,4})\s+(.*)$/))) { flushPara(); flushList(); out.push(`<h${m[1].length}>${inline(m[2])}</h${m[1].length}>`); continue; }
      if ((m = line.match(/^\s*[-*+]\s+(.*)$/))) { flushPara(); if (!list || list.t !== 'ul') { flushList(); list = { t: 'ul', items: [] }; } list.items.push(m[1]); continue; }
      if ((m = line.match(/^\s*\d+[.)]\s+(.*)$/))) { flushPara(); if (!list || list.t !== 'ol') { flushList(); list = { t: 'ol', items: [] }; } list.items.push(m[1]); continue; }
      if (/^\s*(---|\*\*\*)\s*$/.test(line)) { flushPara(); flushList(); out.push('<hr>'); continue; }
      if (/^\s*>\s?/.test(line)) { flushPara(); flushList(); out.push('<blockquote>' + inline(line.replace(/^\s*>\s?/, '')) + '</blockquote>'); continue; }
      if (!line.trim()) { flushPara(); flushList(); continue; }
      flushList(); para.push(line);
    }
    if (code) out.push('<pre><code>' + esc(code.join('\n')) + '</code></pre>');
    flushTable(); flushPara(); flushList();
    return out.join('\n');
  }
  window.renderMd = render;
})();
