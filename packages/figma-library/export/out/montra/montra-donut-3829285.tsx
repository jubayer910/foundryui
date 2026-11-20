"use client";
// Donut (montra, Charts) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Ingot Icons.
import { useEffect, useRef } from "react";

export function Donut() {
  const fuRef = useRef<any>(null);
  useEffect(() => fuInteract(fuRef.current), []);
  return (
    <div ref={fuRef} style={{ width: "137.08px", height: "137.08px", position: "relative" }}>
      <svg data-fu="plot" style={{ position: "absolute", left: "5.94px", top: "5.94px", width: "125.2px", height: "125.2px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="125.2" height="125.2" viewBox="0 0 125.2 125.2" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M62.63 125.2 L62.6335 131.14 L62.6335 131.14 L62.63 125.2 Z M2.40932e-05 62.6501 L5.94002 62.6449 L5.94002 62.6449 L2.40932e-05 62.6501 Z M125.2 62.6001 L119.26 62.6001 C119.26 93.8801 93.9081 119.242 62.6266 119.26 L62.63 125.2 L62.6335 131.14 C100.472 131.118 131.14 100.44 131.14 62.6001 L125.2 62.6001 Z M62.63 125.2 L62.6266 119.26 C31.3378 119.278 5.96718 93.9363 5.94002 62.6449 L2.40932e-05 62.6501 L-5.93997 62.6552 C-5.90713 100.504 24.7823 131.162 62.6335 131.14 L62.63 125.2 Z M2.40932e-05 62.6501 L5.94002 62.6449 C5.91287 31.366 31.246 5.98532 62.5286 5.94006 L62.52 6.69078e-05 L62.5114 -5.93993 C24.674 -5.88519 -5.97282 24.8142 -5.93997 62.6552 L2.40932e-05 62.6501 Z M62.52 6.69078e-05 L62.5286 5.94006 C93.8076 5.89481 119.206 31.2191 119.26 62.5004 L125.2 62.4901 L131.14 62.4798 C131.074 24.641 100.352 -5.99467 62.5114 -5.93993 L62.52 6.69078e-05 Z" fill="#f1f1f3"/></svg>
      <svg data-fu="arc" style={{ position: "absolute", left: "52.69px", top: "6.4px", width: "78.45px", height: "124.74px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="78.45" height="124.74" viewBox="0 0 78.45 124.74" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M24.1264 -5.89664 C20.8698 -6.29231 17.909 -3.97306 17.5134 -0.716438 C17.1177 2.54018 19.4369 5.50096 22.6936 5.89664 L23.41 0 L24.1264 -5.89664 Z M74.49 40.23 L80.0545 38.1516 L80.0542 38.1507 L74.49 40.23 Z M62.31 104.1 L66.7182 108.081 L66.7183 108.081 L62.31 104.1 Z M1.50456 116.954 C-1.66903 116.123 -4.91535 118.022 -5.74629 121.195 C-6.57724 124.369 -4.67815 127.615 -1.50456 128.446 L0 122.7 L1.50456 116.954 Z M23.41 0 L22.6936 5.89664 C43.6999 8.44889 61.5216 22.4954 68.9258 42.3093 L74.49 40.23 L80.0542 38.1507 C71.0984 14.1846 49.5401 -2.80889 24.1264 -5.89664 L23.41 0 Z M74.49 40.23 L68.9255 42.3084 C76.3298 62.1316 72.075 84.4249 57.9017 100.119 L62.31 104.1 L66.7183 108.081 C83.865 89.0951 89.0102 62.1284 80.0545 38.1516 L74.49 40.23 Z M62.31 104.1 L57.9018 100.119 C43.7187 115.822 21.9689 122.312 1.50456 116.954 L-0 122.7 L-1.50456 128.446 C23.2511 134.928 49.5613 127.078 66.7182 108.081 L62.31 104.1 Z" fill="#4996fe"/></svg>
      <svg data-fu="arc" style={{ position: "absolute", left: "7px", top: "79.99px", width: "31.63px", height: "43.54px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="31.63" height="43.54" viewBox="0 0 31.63 43.54" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M28.7911 48.7577 C31.6728 50.3256 35.2798 49.2605 36.8477 46.3789 C38.4156 43.4972 37.3505 39.8902 34.4689 38.3223 L31.63 43.54 L28.7911 48.7577 Z M5.83975 -1.08669 C5.23959 -4.31189 2.13852 -6.43991 -1.08669 -5.83975 C-4.31189 -5.23959 -6.43991 -2.13852 -5.83975 1.08669 L0 0 L5.83975 -1.08669 Z M31.63 43.54 L34.4689 38.3223 C19.4797 30.1669 8.9624 15.6942 5.83975 -1.08669 L0 0 L-5.83975 1.08669 C-2.0624 21.3858 10.6603 38.8931 28.7911 48.7577 L31.63 43.54 Z" fill="#8e83fd"/></svg>
      <svg data-fu="arc" style={{ position: "absolute", left: "6.05px", top: "28.43px", width: "14.44px", height: "36.48px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="14.44" height="36.48" viewBox="0 0 14.44 36.48" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M-5.92995 36.1346 C-6.12073 39.4096 -3.62045 42.2192 -0.345434 42.4099 C2.92959 42.6007 5.73917 40.1005 5.92995 36.8254 L0 36.48 L-5.92995 36.1346 Z M18.9996 3.80705 C21.1022 1.28885 20.7652 -2.45703 18.247 -4.5596 C15.7288 -6.66218 11.983 -6.32525 9.8804 -3.80705 L14.44 0 L18.9996 3.80705 Z M0 36.48 L5.92995 36.8254 C6.63595 24.7057 11.2159 13.1293 18.9996 3.80705 L14.44 0 L9.8804 -3.80705 C0.464054 7.47066 -5.07595 21.4743 -5.92995 36.1346 L0 36.48 Z" fill="#63c093"/></svg>
      <svg data-fu="arc" style={{ position: "absolute", left: "31.5px", top: "11.78px", width: "10.64px", height: "6.3px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="10.64" height="6.3" viewBox="0 0 10.64 6.3" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M-3.52017 1.51544 C-6.16261 3.45958 -6.72869 7.17773 -4.78456 9.82017 C-2.84042 12.4626 0.877732 13.0287 3.52017 11.0846 L0 6.3 L-3.52017 1.51544 Z M13.1456 5.38567 C16.1201 4.00185 17.4095 0.468791 16.0257 -2.50563 C14.6418 -5.48005 11.1088 -6.76949 8.13437 -5.38567 L10.64 0 L13.1456 5.38567 Z M0 6.3 L3.52017 11.0846 C6.52965 8.87038 9.75939 6.96108 13.1456 5.38567 L10.64 0 L8.13437 -5.38567 C4.04061 -3.48108 0.130348 -1.17037 -3.52017 1.51544 L0 6.3 Z" fill="#fd872f"/></svg>
      <svg data-fu="arc" style={{ position: "absolute", left: "56.53px", top: "6.4px", width: "4.45px", height: "1px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="4.45" height="1" viewBox="0 0 4.45 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M-1.1422 -5.11915 C-4.36155 -4.48833 -6.45997 -1.36715 -5.82915 1.8522 C-5.19833 5.07155 -2.07715 7.16997 1.1422 6.53915 L0 0.71 L-1.1422 -5.11915 Z M5.1624 5.89712 C8.4193 5.50367 10.7406 2.54449 10.3471 -0.712404 C9.95367 -3.9693 6.99449 -6.29058 3.7376 -5.89712 L4.45 0 L5.1624 5.89712 Z M0 0.71 L1.1422 6.53915 C2.49574 6.27393 3.83171 6.05788 5.1624 5.89712 L4.45 0 L3.7376 -5.89712 C2.08829 -5.69788 0.464258 -5.43393 -1.1422 -5.11915 L0 0.71 Z" fill="#d8d8d8"/></svg>
      <div style={{ position: "absolute", left: "37.04px", top: "50.63px", width: "63px", height: "35.83px", display: "flex", flexDirection: "column", gap: "1.83px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "63px", lineHeight: "21px", fontFamily: "'Geist'", fontSize: "16.45px", fontWeight: 500, color: "#1f1f22" }}>$12,480</p>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "59px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 400, color: "#6b6b6b" }}>Spent in Aug</p>
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
