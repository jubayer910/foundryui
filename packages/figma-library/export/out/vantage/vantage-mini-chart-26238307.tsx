"use client";
// Mini chart (vantage, Charts) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Ingot Icons.
import { useEffect, useRef } from "react";
export function MiniChart() {
  const fuRef = useRef<any>(null);
  useEffect(() => fuInteract(fuRef.current), []);
  return (
    <div ref={fuRef} style={{ width: "236px", height: "114px", display: "flex", flexDirection: "column", gap: "10px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
      <div style={{ width: "236px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8a8a8a" }}>Per person · rolling 4 wk</p>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>13.6</p>
          <div style={{ flexShrink: 0, borderRadius: "22px", background: "rgba(229, 72, 77, 0.1)", display: "flex", flexDirection: "row", padding: "2px 3px 2px 3px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#e5484d", lineHeight: "1.100000023841858" }}>−47%</p>
          </div>
        </div>
      </div>
      <svg data-fu="plot" style={{ width: "236px", height: "62px", flexShrink: 0, display: "block", lineHeight: 0 }} xmlns="http://www.w3.org/2000/svg" width="236" height="62" viewBox="0 0 236 62" fill="none" overflow="visible"><defs><linearGradient id="g11_4ua7" gradientUnits="userSpaceOnUse" x1="115.00" y1="0.00" x2="115.00" y2="59.01"><stop offset="0" stopColor="#f07178" stopOpacity="0.16"/><stop offset="1" stopColor="#f07178" stopOpacity="0"/></linearGradient></defs><path transform="matrix(1 0 0 1 1 3)" d="M0 1.87184 C1.25 1.76184 18.4 -0.168159 20.91 0.0118413 C23.42 0.191841 39.31 4.67184 41.82 4.85184 C44.33 5.03184 60.22 2.92184 62.73 2.99184 C65.24 3.06184 81.13 5.68184 83.64 5.97184 C86.15 6.26184 102.04 7.59184 104.55 7.83184 C107.05 8.08184 122.95 9.82184 125.45 10.0718 C127.96 10.3118 143.85 11.0818 146.36 11.9318 C148.87 12.7818 164.76 22.7518 167.27 24.2318 C169.78 25.7018 185.67 35.0918 188.18 36.5218 C190.69 37.9518 206.58 46.8418 209.09 48.0718 C211.6 49.3018 228.75 56.4718 230 57.0118 L230 59.0118 L0 59.0118 L0 1.87184 Z" fill="url(#g11_4ua7)"/><path transform="matrix(1 0 0 1 1 3)" d="M-0.0613629 1.17454 C-0.446474 1.20843 -0.731195 1.54809 -0.697305 1.9332 C-0.663415 2.31832 -0.323748 2.60304 0.0613629 2.56915 L0 1.87184 L-0.0613629 1.17454 Z M104.55 7.83184 L104.62 7.13531 L104.617 7.13502 L104.55 7.83184 Z M125.45 10.0718 L125.38 10.7684 L125.383 10.7687 L125.45 10.0718 Z M167.27 24.2318 L166.914 24.8348 L166.916 24.8359 L167.27 24.2318 Z M229.722 57.6544 C230.077 57.8078 230.489 57.6443 230.643 57.2894 C230.796 56.9345 230.633 56.5226 230.278 56.3692 L230 57.0118 L229.722 57.6544 Z M0 1.87184 L0.0613629 2.56915 C0.688216 2.51398 5.31535 2.00131 10.0519 1.52965 C12.429 1.29293 14.8418 1.06565 16.8151 0.908861 C18.8168 0.749817 20.2976 0.669719 20.8599 0.710048 L20.91 0.0118413 L20.9601 -0.686366 C20.2674 -0.736036 18.6632 -0.642384 16.7042 -0.486741 C14.717 -0.328845 12.2935 -0.100494 9.91314 0.136536 C5.13465 0.612376 0.561784 1.1197 -0.0613629 1.17454 L0 1.87184 Z M20.91 0.0118413 L20.8599 0.710048 C21.4171 0.750007 22.8155 1.04594 24.721 1.49968 C26.597 1.9464 28.8916 2.52753 31.1931 3.11042 C33.4916 3.69253 35.797 4.2764 37.6847 4.72593 C39.543 5.16844 41.0721 5.50001 41.7699 5.55005 L41.82 4.85184 L41.8701 4.15363 C41.3129 4.11368 39.9145 3.81774 38.009 3.36401 C36.133 2.91728 33.8384 2.33615 31.5369 1.75327 C29.2384 1.17115 26.933 0.587284 25.0453 0.137757 C23.187 -0.304756 21.6579 -0.636325 20.9601 -0.686366 L20.91 0.0118413 Z M41.82 4.85184 L41.7699 5.55005 C42.4675 5.60007 43.9974 5.49377 45.8566 5.32442 C47.7452 5.15241 50.0508 4.9071 52.3501 4.65905 C54.6523 4.41069 56.9478 4.15963 58.8254 3.97488 C60.726 3.78789 62.1376 3.67559 62.7105 3.69157 L62.73 2.99184 L62.7495 2.29211 C62.0673 2.27309 60.5515 2.39829 58.6883 2.58161 C56.8022 2.76718 54.4977 3.01924 52.1999 3.26713 C49.8992 3.51533 47.6048 3.7594 45.7296 3.9302 C43.8251 4.10366 42.4275 4.19361 41.8701 4.15363 L41.82 4.85184 Z M62.73 2.99184 L62.7105 3.69157 C63.2909 3.70776 64.711 3.87763 66.6073 4.13963 C68.4842 4.39894 70.7803 4.74146 73.0797 5.09137 C77.662 5.78868 82.288 6.52029 83.5597 6.66722 L83.64 5.97184 L83.7203 5.27647 C82.482 5.13339 77.908 4.41 73.2903 3.70731 C70.9897 3.35722 68.6858 3.01349 66.7989 2.7528 C64.9315 2.4948 63.4241 2.31093 62.7495 2.29211 L62.73 2.99184 Z M83.64 5.97184 L83.5597 6.66722 C86.0751 6.95784 102.003 8.29147 104.483 8.52866 L104.55 7.83184 L104.617 7.13502 C102.077 6.89222 86.2249 5.56584 83.7203 5.27647 L83.64 5.97184 Z M104.55 7.83184 L104.48 8.52837 C105.727 8.653 110.322 9.15001 114.925 9.64778 C119.522 10.145 124.127 10.643 125.38 10.7684 L125.45 10.0718 L125.52 9.37532 C124.273 9.25068 119.678 8.75368 115.075 8.2559 C110.478 7.75868 105.873 7.26068 104.62 7.13532 L104.55 7.83184 Z M125.45 10.0718 L125.383 10.7687 C126.647 10.8895 131.284 11.1446 135.855 11.4713 C138.153 11.6355 140.444 11.8183 142.315 12.0126 C143.25 12.1098 144.075 12.2093 144.739 12.3098 C145.418 12.4126 145.886 12.5104 146.135 12.5949 L146.36 11.9318 L146.585 11.2688 C146.207 11.1408 145.629 11.0286 144.949 10.9256 C144.254 10.8204 143.405 10.7184 142.459 10.6201 C140.566 10.4235 138.257 10.2394 135.955 10.0749 C131.326 9.74407 126.763 9.4942 125.517 9.37502 L125.45 10.0718 Z M146.36 11.9318 L146.135 12.5949 C146.39 12.6811 146.868 12.9049 147.551 13.2635 C148.22 13.6147 149.048 14.0749 149.985 14.6117 C151.86 15.6848 154.154 17.0535 156.453 18.4445 C161.034 21.2171 165.658 24.094 166.914 24.8348 L167.27 24.2318 L167.626 23.6289 C166.372 22.8897 161.796 20.0416 157.177 17.2467 C154.876 15.854 152.57 14.4783 150.681 13.3967 C149.737 12.8561 148.892 12.3864 148.202 12.0239 C147.525 11.6688 146.957 11.395 146.585 11.2688 L146.36 11.9318 Z M167.27 24.2318 L166.916 24.8359 C169.417 26.3004 185.319 35.6976 187.833 37.1301 L188.18 36.5218 L188.527 35.9136 C186.021 34.4861 170.143 25.1033 167.624 23.6278 L167.27 24.2318 Z M188.18 36.5218 L187.833 37.1301 C190.334 38.5548 206.247 47.4584 208.782 48.7004 L209.09 48.0718 L209.398 47.4433 C206.913 46.2253 191.046 37.3488 188.527 35.9136 L188.18 36.5218 Z M209.09 48.0718 L208.782 48.7004 C211.311 49.9398 228.507 57.1292 229.722 57.6544 L230 57.0118 L230.278 56.3692 C228.993 55.8145 211.889 48.6639 209.398 47.4433 L209.09 48.0718 Z" fill="#f07178"/><path transform="matrix(1 0 0 1 228.5 57.5)" d="M5 2.5 C5 3.88071 3.88071 5 2.5 5 C1.11929 5 0 3.88071 0 2.5 C0 1.11929 1.11929 0 2.5 0 C3.88071 0 5 1.11929 5 2.5 Z" fill="#f07178"/><path transform="matrix(1 0 0 1 228.5 57.5)" d="M5 2.5 L3.8 2.5 C3.8 3.21797 3.21797 3.8 2.5 3.8 L2.5 5 L2.5 6.2 C4.54345 6.2 6.2 4.54345 6.2 2.5 L5 2.5 Z M2.5 5 L2.5 3.8 C1.78203 3.8 1.2 3.21797 1.2 2.5 L0 2.5 L-1.2 2.5 C-1.2 4.54345 0.456546 6.2 2.5 6.2 L2.5 5 Z M0 2.5 L1.2 2.5 C1.2 1.78203 1.78203 1.2 2.5 1.2 L2.5 0 L2.5 -1.2 C0.456546 -1.2 -1.2 0.456546 -1.2 2.5 L0 2.5 Z M2.5 0 L2.5 1.2 C3.21797 1.2 3.8 1.78203 3.8 2.5 L5 2.5 L6.2 2.5 C6.2 0.456546 4.54345 -1.2 2.5 -1.2 L2.5 0 Z" fill="#1a1a1a"/></svg>
      <div style={{ width: "236px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "11px", fontWeight: 400, color: "#7c7c7c" }}>W20</p>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "11px", fontWeight: 400, color: "#7c7c7c" }}>W27 · 25.7</p>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "11px", fontWeight: 500, color: "#ededed" }}>W31</p>
      </div>
    </div>
  );
}

// Interactions: hover and click states. Remove this function and the two lines above to get a static component.
function fuInteract(root: HTMLElement | null) {
  if (!root || root.dataset.fuOn) return;
  root.dataset.fuOn = "1";
  const doc = root.ownerDocument;
  const all = (sel: string, el: Element = root): HTMLElement[] => Array.from(el.querySelectorAll(sel)) as HTMLElement[];
  const box = (el: Element) => el.getBoundingClientRect();
  const font = getComputedStyle(root).fontFamily;
  const tip = doc.createElement("div");
  tip.setAttribute("aria-hidden", "true");
  Object.assign(tip.style, { position: "fixed", zIndex: "2147483647", pointerEvents: "none", background: "#111113", color: "#fff", font: "500 12px/16px " + font, padding: "5px 8px", borderRadius: "6px", whiteSpace: "nowrap", opacity: "0", transform: "translate(-50%, -100%)", transition: "opacity .12s", boxShadow: "0 4px 14px rgba(0,0,0,.18)" });
  doc.body.appendChild(tip);
  const show = (text: string, x: number, y: number) => { if (!text) return hide(); tip.textContent = text; tip.style.left = x + "px"; tip.style.top = y - 8 + "px"; tip.style.opacity = "1"; };
  const hide = () => { tip.style.opacity = "0"; };
  const ease = (el: HTMLElement | SVGElement, props: string) => { const s = (el as HTMLElement).style; if (!s.transition) s.transition = props; };
  const texts = (scope: Element) => all("p, span", scope).filter((t) => t.children.length === 0 && (t.textContent || "").trim());
  const NUM = /^([^\d\-+.]*)([-+]?[\d,]*\.?\d+)\s*([kKmMbB%]?)([^\d]*)$/;
  // value axis: numeric labels along one edge of the chart, used to read a mark's value from its position
  const axis = (scope: Element, vertical: boolean) => {
    const pts: { v: number; p: number; pre: string; suf: string; dec: number }[] = [];
    for (const t of texts(scope)) {
      const m = (t.textContent || "").trim().match(NUM);
      if (!m) continue;
      const mult = { k: 1e3, K: 1e3, m: 1e6, M: 1e6, b: 1e9, B: 1e9 }[m[3] as "k"] || 1;
      const r = box(t);
      pts.push({ v: parseFloat(m[2].replace(/,/g, "")) * mult, p: vertical ? r.top + r.height / 2 : r.left + r.width / 2, pre: m[1], suf: m[3] + m[4], dec: (m[2].split(".")[1] || "").length });
    }
    const uniq = pts.filter((a, i) => pts.findIndex((b) => Math.abs(b.p - a.p) < 2) === i);
    if (uniq.length < 2) return null;
    uniq.sort((a, b) => a.p - b.p);
    const a = uniq[0], b = uniq[uniq.length - 1];
    if (a.v === b.v || Math.abs(b.p - a.p) < 10) return null;
    return (pos: number) => {
      const v = a.v + ((pos - a.p) * (b.v - a.v)) / (b.p - a.p);
      const suf = a.suf || b.suf, pre = a.pre || b.pre;
      const div = /^[kK]/.test(suf) ? 1e3 : /^[mM]/.test(suf) ? 1e6 : /^[bB]/.test(suf) ? 1e9 : 1;
      const x = v / div;
      const dec = Math.max(a.dec, b.dec, div > 1 && Math.abs(x) < 100 ? 1 : 0);
      return pre + x.toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: dec }) + suf;
    };
  };
  // the chart around a group of marks: the nearest ancestor that also holds text labels
  const chartOf = (el: Element) => { let c: Element | null = el.parentElement; while (c && c !== root.parentElement) { if (texts(c).length >= 3) return c; c = c.parentElement; } return root; };
  const labelNear = (scope: Element, x: number, y: number, below: boolean, anyText = false) => {
    let best = "", d = 1e9;
    for (const t of texts(scope)) {
      const r = box(t);
      if (below ? r.top < y - 2 : r.right > x + 2) continue;
      if (!anyText && NUM.test((t.textContent || "").trim()) && !/[a-z]{3}/i.test(t.textContent || "")) continue;
      const dd = below ? Math.abs(r.left + r.width / 2 - x) + (r.top - y) * 0.2 : Math.abs(r.top + r.height / 2 - y) + (x - r.right) * 0.1;
      if (dd < d) { d = dd; best = (t.textContent || "").trim(); }
    }
    return d < 80 ? best : "";
  };
  const dim = (els: (HTMLElement | SVGElement)[], keep: (HTMLElement | SVGElement)[]) => { for (const e of els) { ease(e, "opacity .15s"); (e as HTMLElement).style.opacity = keep.includes(e) ? "" : "0.35"; } };
  const undim = (els: (HTMLElement | SVGElement)[]) => { for (const e of els) (e as HTMLElement).style.opacity = ""; };

  // vertical bars: the hovered column (all stacked segments at that x) stays, the rest fade
  const groups = new Map<Element, HTMLElement[]>();
  for (const b of all("[data-fu=bar],[data-fu=hbar]")) { const p = b.parentElement!; if (!groups.has(p)) groups.set(p, []); groups.get(p)!.push(b); }
  groups.forEach((bars) => {
    const horiz = bars[0].dataset.fu === "hbar";
    const scope = chartOf(bars[0]);
    const val = axis(scope, !horiz);
    const peers = (b: HTMLElement) => { const r = box(b), c = horiz ? r.top + r.height / 2 : r.left + r.width / 2; return bars.filter((o) => { const q = box(o); return Math.abs((horiz ? q.top + q.height / 2 : q.left + q.width / 2) - c) < Math.max(2, (horiz ? r.height : r.width) / 2); }); };
    for (const b of bars) {
      b.addEventListener("mouseenter", () => {
        const col = peers(b);
        dim(bars, col);
        const rs = col.map(box);
        const top = Math.min(...rs.map((r) => r.top)), right = Math.max(...rs.map((r) => r.right)), r0 = rs[0];
        const label = horiz ? labelNear(scope, r0.left, r0.top + r0.height / 2, false) : labelNear(scope, r0.left + r0.width / 2, Math.max(...rs.map((r) => r.bottom)), true);
        const v = val ? val(horiz ? right : top) : "";
        show([label, v].filter(Boolean).join(" · "), horiz ? right : r0.left + r0.width / 2, horiz ? r0.top : top);
      });
      b.addEventListener("mouseleave", () => { undim(bars); hide(); });
    }
  });

  // line and area plots: a guide line and a dot follow the pointer along the top edge of the plotted shape
  for (const svg of all("svg[data-fu=plot]") as unknown as SVGSVGElement[]) {
    const paths = Array.from(svg.querySelectorAll("path, polyline")) as SVGGeometryElement[];
    if (!paths.length) continue;
    const line = paths.reduce((a, b) => (b.getTotalLength() > a.getTotalLength() ? b : a));
    const len = line.getTotalLength();
    const pts: { x: number; y: number }[] = [];
    for (let i = 0; i <= 800; i++) { const q = line.getPointAtLength((len * i) / 800); pts.push({ x: q.x, y: q.y }); }
    const xs = pts.map((q) => q.x), minX = Math.min(...xs), maxX = Math.max(...xs);
    const color = (line.getAttribute("stroke") && line.getAttribute("stroke") !== "none" ? line.getAttribute("stroke") : line.getAttribute("fill")) || "#111";
    const NS = "http://www.w3.org/2000/svg";
    const g = doc.createElementNS(NS, "g");
    g.setAttribute("pointer-events", "none");
    g.style.opacity = "0";
    const guide = doc.createElementNS(NS, "line");
    guide.setAttribute("stroke", /^url/.test(color) ? "#111" : color);
    guide.setAttribute("stroke-dasharray", "3 3");
    guide.setAttribute("stroke-opacity", "0.5");
    const dot = doc.createElementNS(NS, "circle");
    dot.setAttribute("r", "4");
    dot.setAttribute("fill", "#fff");
    dot.setAttribute("stroke", /^url/.test(color) ? "#111" : color);
    dot.setAttribute("stroke-width", "2");
    g.append(guide, dot);
    svg.appendChild(g);
    const scope = chartOf(svg);
    const val = axis(scope, true);
    const area = svg.parentElement || svg;
    area.addEventListener("mousemove", (ev: Event) => {
      const e = ev as MouseEvent;
      const m = line.getScreenCTM();
      if (!m) return;
      const px = new DOMPoint(e.clientX, e.clientY).matrixTransform(m.inverse()).x;
      if (px < minX - 4 || px > maxX + 4) { g.style.opacity = "0"; hide(); return; }
      const step = (maxX - minX) / 400 || 1;
      let y = Infinity, x = px;
      for (const q of pts) if (Math.abs(q.x - px) <= step && q.y < y) { y = q.y; x = q.x; }
      if (y === Infinity) return;
      const bb = line.getBBox();
      guide.setAttribute("x1", String(x)); guide.setAttribute("x2", String(x));
      guide.setAttribute("y1", String(bb.y)); guide.setAttribute("y2", String(bb.y + bb.height));
      dot.setAttribute("cx", String(x)); dot.setAttribute("cy", String(y));
      g.style.opacity = "1";
      const sp = new DOMPoint(x, y).matrixTransform(m);
      const label = labelNear(scope, sp.x, box(svg).bottom, true);
      show([label, val ? val(sp.y) : ""].filter(Boolean).join(" · "), sp.x, sp.y);
    });
    area.addEventListener("mouseleave", () => { g.style.opacity = "0"; hide(); });
  }

  // cards: a small lift on hover (an extra drop shadow, the card's own shadows stay as they are)
  for (const c of all("[data-fu=card]").concat(root.dataset.fu === "card" ? [root] : [])) {
    c.addEventListener("mouseenter", () => { ease(c, "transform .18s ease, filter .18s ease"); c.style.transform = "translateY(-2px)"; c.style.filter = "drop-shadow(0 8px 16px rgba(17,17,19,.08))"; });
    c.addEventListener("mouseleave", () => { c.style.transform = ""; c.style.filter = ""; });
  }

  // heatmap and calendar cells: an outline and the cell's own text
  for (const c of all("[data-fu=cell]")) {
    c.addEventListener("mouseenter", () => {
      ease(c, "outline-color .12s");
      c.style.outline = "2px solid rgba(17,17,19,.55)";
      c.style.outlineOffset = "1px";
      const r = box(c);
      // its own text, or the row and column labels of the grid it sits in
      let label = (c.textContent || "").trim();
      if (!label) {
        // walk outwards until a row label (left) and a column label (below) are in reach
        let row = "", col = "";
        for (let a: Element | null = c.parentElement; a && a !== root.parentElement && !(row && col); a = a.parentElement) {
          if (!row) row = labelNear(a, r.left, r.top + r.height / 2, false, true);
          if (!col) col = labelNear(a, r.left + r.width / 2, r.bottom, true, true);
        }
        label = [row, col].filter(Boolean).join(" · ");
      }
      show(label, r.left + r.width / 2, r.top);
    });
    c.addEventListener("mouseleave", () => { c.style.outline = ""; c.style.outlineOffset = ""; hide(); });
  }

  // fields: hover and focus states
  for (const f of all("[data-fu=field]")) {
    f.style.cursor = "text";
    f.addEventListener("mouseenter", () => { ease(f, "filter .15s, outline-color .15s"); f.style.filter = "brightness(0.985)"; });
    f.addEventListener("mouseleave", () => { f.style.filter = ""; });
    f.addEventListener("mousedown", (ev) => {
      ev.stopPropagation();
      for (const o of all("[data-fu=field]")) o.style.outline = "";
      f.style.outline = "3px solid rgba(17,17,19,.12)";
      f.style.outlineOffset = "0px";
    });
  }
  doc.addEventListener("mousedown", () => { for (const o of all("[data-fu=field]")) o.style.outline = ""; });

  // donut and pie charts drawn as one vector per arc: the hovered arc stays, the others fade
  const arcGroups = new Map<Element, HTMLElement[]>();
  for (const a of all("[data-fu=arc]")) { const p = a.parentElement!; if (!arcGroups.has(p)) arcGroups.set(p, []); arcGroups.get(p)!.push(a); }
  arcGroups.forEach((arcs) => {
    const scope = chartOf(arcs[0]);
    const hexOf = (c: string) => { const m = c.match(/\d+/g); return m && m.length >= 3 ? "#" + m.slice(0, 3).map((x) => (+x).toString(16).padStart(2, "0")).join("") : c.toLowerCase(); };
    const legend = (color: string) => {
      for (const el of all("*", scope)) {
        if (el.children.length || (el.textContent || "").trim()) continue;
        if (hexOf(getComputedStyle(el).backgroundColor) !== color.toLowerCase()) continue;
        // climb to the legend row: the first ancestor that holds more than the swatch's label
        let row: Element | null = el.parentElement;
        while (row && row.parentElement && texts(row).length < 2 && row !== scope) row = row.parentElement;
        const words = row ? texts(row).map((t) => (t.textContent || "").trim()) : [];
        if (words.length && words.length <= 5) return words.join(" · ");
        if (el.parentElement) return texts(el.parentElement).map((t) => (t.textContent || "").trim()).join(" · ");
      }
      return "";
    };
    // hit-test the whole stack under the pointer: labels or tracks drawn over the ring don't get in the way
    const fills = new Map(arcs.map((a) => { const sh = a.querySelector("path"); return [a, (sh && (sh.getAttribute("fill") || sh.getAttribute("stroke"))) || ""] as [HTMLElement, string]; }));
    let current: HTMLElement | null = null;
    scope.addEventListener("mousemove", (ev) => {
      const e = ev as MouseEvent;
      // the arc whose drawn shape (not just its box) is under the pointer
      const inside = (sh: SVGGeometryElement) => { const m = sh.getScreenCTM(); if (!m) return false; const q = new DOMPoint(e.clientX, e.clientY).matrixTransform(m.inverse()); return sh.isPointInFill(q) || sh.isPointInStroke(q); };
      const arc = arcs.find((a) => (Array.from(a.querySelectorAll("path, circle, ellipse")) as SVGGeometryElement[]).some(inside)) || null;
      if (!arc) { if (current) { undim(arcs); hide(); current = null; } return; }
      if (arc !== current) { dim(arcs, [arc]); current = arc; }
      show(legend(fills.get(arc) || ""), e.clientX, e.clientY);
    });
    scope.addEventListener("mouseleave", () => { undim(arcs); hide(); current = null; });
  });

  // donut and pie arcs in one drawing: the hovered arc stays, the others fade; the legend row with the same colour names it
  for (const svg of all("svg[data-fu=donut]") as unknown as SVGSVGElement[]) {
    const arcs = (Array.from(svg.querySelectorAll("path")) as SVGPathElement[]).filter((p) => { const f = p.getAttribute("fill"); return f && f !== "none" && !/^url/.test(f); });
    const scope = chartOf(svg);
    const hex = (c: string) => { const m = c.match(/\d+/g); return m && m.length >= 3 ? "#" + m.slice(0, 3).map((x) => (+x).toString(16).padStart(2, "0")).join("") : c.toLowerCase(); };
    const legend = (color: string) => {
      for (const el of all("*", scope)) {
        if (el.children.length || (el.textContent || "").trim()) continue;
        const bg = getComputedStyle(el).backgroundColor;
        if (!bg || hex(bg) !== color.toLowerCase()) continue;
        const row = el.parentElement;
        const words = row ? texts(row).map((t) => (t.textContent || "").trim()) : [];
        if (words.length) return words.join(" · ");
      }
      return "";
    };
    for (const a of arcs) {
      a.addEventListener("mouseenter", (ev) => {
        dim(arcs, [a]);
        const e = ev as MouseEvent;
        show(legend(a.getAttribute("fill") || ""), e.clientX, e.clientY);
      });
      a.addEventListener("mousemove", (ev) => { const e = ev as MouseEvent; tip.style.left = e.clientX + "px"; tip.style.top = e.clientY - 8 + "px"; });
      a.addEventListener("mouseleave", () => { undim(arcs); hide(); });
    }
  }

  // rows: a soft highlight under the pointer
  for (const r of all("[data-fu=row]")) {
    r.addEventListener("mouseenter", () => { ease(r, "filter .15s"); r.style.filter = "brightness(0.975)"; });
    r.addEventListener("mouseleave", () => { r.style.filter = ""; });
  }

  // buttons: hover and press feedback
  for (const b of all("[data-fu=btn],[data-fu=tab]")) {
    b.style.cursor = "pointer";
    b.addEventListener("mouseenter", () => { ease(b, "filter .15s, transform .1s"); if (!b.dataset.fuActive) b.style.filter = "brightness(0.96)"; });
    b.addEventListener("mouseleave", () => { b.style.filter = ""; b.style.transform = ""; });
    b.addEventListener("mousedown", () => { b.style.transform = "scale(0.98)"; });
    b.addEventListener("mouseup", () => { b.style.transform = ""; });
  }

  // tabs and segmented controls: clicking a tab moves the selected look onto it
  const VIS = ["background-color", "background-image", "box-shadow", "border-color", "color", "font-weight"];
  const look = (el: HTMLElement) => VIS.map((k) => el.style.getPropertyValue(k)).join("|");
  const tabGroups = new Map<Element, HTMLElement[]>();
  for (const t of all("[data-fu=tab]")) { const p = t.parentElement!; if (!tabGroups.has(p)) tabGroups.set(p, []); tabGroups.get(p)!.push(t); }
  tabGroups.forEach((tabs) => {
    if (tabs.length < 2) return;
    const counts = new Map<string, number>();
    for (const t of tabs) counts.set(look(t), (counts.get(look(t)) || 0) + 1);
    let active = tabs.find((t) => counts.get(look(t)) === 1 && counts.size > 1) || null;
    if (!active) return;
    active.dataset.fuActive = "1";
    // read both looks first, then write: swapping one property at a time would let shorthands undo each other
    const swapStyle = (a: HTMLElement, b: HTMLElement, props: string[]) => {
      const va = props.map((k) => a.style.getPropertyValue(k)), vb = props.map((k) => b.style.getPropertyValue(k));
      props.forEach((k, i) => { a.style.setProperty(k, vb[i]); b.style.setProperty(k, va[i]); });
    };
    const swap = (a: HTMLElement, b: HTMLElement) => {
      swapStyle(a, b, VIS);
      const ta = texts(a), tb = texts(b);
      for (let i = 0; i < Math.min(ta.length, tb.length); i++) swapStyle(ta[i], tb[i], ["color", "font-weight"]);
    };
    for (const t of tabs) t.addEventListener("click", () => {
      if (!active || t === active) return;
      t.style.filter = "";
      swap(active, t);
      delete active.dataset.fuActive;
      active = t;
      t.dataset.fuActive = "1";
    });
  });
}
