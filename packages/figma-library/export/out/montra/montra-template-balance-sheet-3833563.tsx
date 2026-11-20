"use client";
// Template Balance sheet (montra, Charts) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Ingot Icons.
import { useEffect, useRef } from "react";
import { ChevronRight, Clock, Stack2 } from "ingotui-icons/react/stroke-rounded";

export function TemplateBalanceSheet() {
  const fuRef = useRef<any>(null);
  useEffect(() => fuInteract(fuRef.current), []);
  return (
    <div ref={fuRef} data-fu="card" style={{ width: "251.7px", height: "176px", borderRadius: "10.97px", background: "#ffffff", boxShadow: "0px 0.91px 1.83px 0px rgba(0, 0, 0, 0.09)", position: "relative" }}>
      <div style={{ position: "absolute", left: "5.48px", top: "5.48px", width: "240.73px", height: "139.44px", borderRadius: "7.31px", background: "#fefefe", boxShadow: "inset 0 0 0 0.91px #ededed", overflow: "hidden" }}>
        <div style={{ position: "absolute", left: "10.97px", top: "10.97px", width: "124.9px", height: "33.83px", display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "25.59px", height: "25.59px", flexShrink: 0, borderRadius: "5.12px", background: "linear-gradient(180deg, #8e83fd 0%, #d9d4ff 100%)", boxShadow: "0px 0.91px 1.83px 0px rgba(0, 0, 0, 0.08)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <Stack2 size={12.3} style={{ width: "12.28px", height: "12.28px", flexShrink: 0, color: "#ffffff", display: "block" }} />
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.83px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "92px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "13.71px", fontWeight: 500, color: "#202020" }}>Balance sheet</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "83px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#6b6b6b" }}>As of month end</p>
          </div>
        </div>
        <div style={{ position: "absolute", left: "10.97px", top: "79.12px", width: "218.8px", height: "51.18px", display: "flex", flexDirection: "row", gap: "10.97px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <svg style={{ width: "51.18px", height: "51.18px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="51.18" height="51.18" viewBox="0 0 51.18 51.18" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 4.11 4.11)" d="M42.96 21.48 L38.85 21.48 C38.85 31.0695 31.08 38.8419 21.4865 38.85 L21.49 42.96 L21.4935 47.07 C35.62 47.0581 47.07 35.6106 47.07 21.48 L42.96 21.48 Z M21.49 42.96 L21.4865 38.85 C11.898 38.8581 4.11809 31.0882 4.11001 21.4966 L7.80541e-06 21.5 L-4.10999 21.5035 C-4.09808 35.6318 7.36203 47.0819 21.4935 47.07 L21.49 42.96 Z M7.80541e-06 21.5 L4.11001 21.4966 C4.10192 11.9062 11.8644 4.1262 21.4569 4.11003 L21.45 3.11933e-05 L21.4431 -4.10996 C7.31562 -4.08614 -4.1219 7.37388 -4.10999 21.5035 L7.80541e-06 21.5 Z M21.45 3.11933e-05 L21.4569 4.11003 C31.0464 4.09385 38.8338 11.8562 38.85 21.447 L42.96 21.44 L47.07 21.4331 C47.0462 7.30382 35.5736 -4.13379 21.4431 -4.10996 L21.45 3.11933e-05 Z" fill="#f1f1f3"/><path transform="matrix(1 0 0 1 7.132 4.791)" d="M24.8476 -3.97945 C22.6498 -4.547 20.4081 -3.22543 19.8405 -1.02764 C19.273 1.17015 20.5946 3.41191 22.7924 3.97945 L23.82 0 L24.8476 -3.97945 Z M39.94 20.57 L44.0498 20.5277 L44.0497 20.5234 L39.94 20.57 Z M3.53063 29.686 C2.36863 27.7361 -0.154071 27.0974 -2.10398 28.2594 C-4.0539 29.4214 -4.69263 31.9441 -3.53063 33.894 L0 31.79 L3.53063 29.686 Z M23.82 0 L22.7924 3.97945 C30.4036 5.94496 35.7413 12.7623 35.8303 20.6166 L39.94 20.57 L44.0497 20.5234 C43.9187 8.95773 36.0564 -1.08496 24.8476 -3.97945 L23.82 0 Z M39.94 20.57 L35.8302 20.6123 C35.9111 28.466 30.7189 35.3965 23.1571 37.5235 L24.27 41.48 L25.3829 45.4365 C36.5211 42.3035 44.1689 32.094 44.0498 20.5277 L39.94 20.57 Z M24.27 41.48 L23.1571 37.5235 C15.5988 39.6496 7.5511 36.4326 3.53063 29.686 L0 31.79 L-3.53063 33.894 C2.3889 43.8274 14.2412 48.5704 25.3829 45.4365 L24.27 41.48 Z" fill="#8e83fd"/><path transform="matrix(1 0 0 1 4.11 8.914)" d="M-4.09742 17.4886 C-4.02642 19.7573 -2.12965 21.539 0.139132 21.468 C2.40791 21.397 4.18956 19.5002 4.11855 17.2314 L0.0105658 17.36 L-4.09742 17.4886 Z M10.5311 3.19077 C12.2934 1.76003 12.5621 -0.828372 11.1313 -2.59058 C9.70059 -4.35279 7.11219 -4.6215 5.34998 -3.19077 L7.94057 0 L10.5311 3.19077 Z M0.0105658 17.36 L4.11855 17.2314 C3.94863 11.8018 6.31921 6.61044 10.5311 3.19077 L7.94057 0 L5.34998 -3.19077 C-0.858079 1.84956 -4.34749 9.49821 -4.09742 17.4886 L0.0105658 17.36 Z" fill="#ebe9ff"/><path transform="matrix(1 0 0 1 4.11 8.914)" d="M-2.53639 17.4397 C-2.49236 18.8464 -1.31637 19.951 0.0902767 19.907 C1.49692 19.8629 2.60154 18.6869 2.55752 17.2803 L0.0105658 17.36 L-2.53639 17.4397 Z M9.54673 1.97827 C10.6393 1.09122 10.8059 -0.513591 9.91884 -1.60616 C9.03178 -2.69873 7.42698 -2.86533 6.3344 -1.97827 L7.94057 0 L9.54673 1.97827 Z M2.54831 16.7488 C2.54357 15.3415 1.39887 14.2044 -0.00845021 14.2092 C-1.41577 14.2139 -2.5528 15.3586 -2.54806 16.7659 L0.000122055 16.7574 L2.54831 16.7488 Z M-2.36233 13.6982 C-2.5369 15.0947 -1.54637 16.3683 -0.149906 16.5428 C1.24656 16.7174 2.52013 15.7269 2.69471 14.3304 L0.166192 14.0143 L-2.36233 13.6982 Z M2.85599 13.2804 C3.10854 11.8959 2.19093 10.5688 0.806445 10.3163 C-0.57804 10.0637 -1.90512 10.9813 -2.15768 12.3658 L0.349154 12.8231 L2.85599 13.2804 Z M-1.41398 9.38356 C-1.84108 10.7245 -1.10024 12.1578 0.24072 12.5849 C1.58168 13.012 3.01497 12.2712 3.44206 10.9302 L1.01404 10.1569 L-1.41398 9.38356 Z M3.79272 9.92734 C4.29427 8.61242 3.63491 7.13987 2.31998 6.63832 C1.00506 6.13676 -0.467489 6.79613 -0.969044 8.11105 L1.41184 9.0192 L3.79272 9.92734 Z M0.307631 5.31514 C-0.357559 6.55534 0.108583 8.09997 1.34879 8.76516 C2.58899 9.43035 4.13362 8.96421 4.79881 7.724 L2.55322 6.51957 L0.307631 5.31514 Z M5.32696 6.80233 C6.06065 5.60138 5.68186 4.03305 4.48091 3.29936 C3.27996 2.56567 1.71162 2.94445 0.977931 4.14541 L3.15244 5.47387 L5.32696 6.80233 Z M2.74518 1.63006 C1.86406 2.72742 2.03936 4.3313 3.13673 5.21242 C4.23409 6.09354 5.83797 5.91824 6.71909 4.82088 L4.73214 3.22547 L2.74518 1.63006 Z M7.40701 4.01178 C8.34838 2.96564 8.26344 1.35444 7.2173 0.413079 C6.17116 -0.528288 4.55997 -0.443351 3.6186 0.602791 L5.51281 2.30729 L7.40701 4.01178 Z M5.81708 -1.5461 C4.74978 -0.628788 4.62819 0.980055 5.5455 2.04735 C6.46281 3.11465 8.07165 3.23624 9.13895 2.31893 L7.47801 0.386416 L5.81708 -1.5461 Z M0.0105658 17.36 L2.55752 17.2803 C2.55197 17.1029 2.5489 16.9257 2.54831 16.7488 L0.000122055 16.7574 L-2.54806 16.7659 C-2.54731 16.9902 -2.54343 17.2148 -2.53639 17.4397 L0.0105658 17.36 Z M0.166192 14.0143 L2.69471 14.3304 C2.73873 13.9783 2.79255 13.6282 2.85599 13.2804 L0.349154 12.8231 L-2.15768 12.3658 C-2.23818 12.8071 -2.30647 13.2514 -2.36233 13.6982 L0.166192 14.0143 Z M1.01404 10.1569 L3.44206 10.9302 C3.54962 10.5925 3.66656 10.2581 3.79272 9.92734 L1.41184 9.0192 L-0.969044 8.11105 C-1.12912 8.53072 -1.2775 8.95505 -1.41398 9.38356 L1.01404 10.1569 Z M2.55322 6.51957 L4.79881 7.724 C4.96611 7.41207 5.14222 7.10472 5.32696 6.80233 L3.15244 5.47387 L0.977931 4.14541 C0.743458 4.52921 0.519951 4.91928 0.307631 5.31514 L2.55322 6.51957 Z M4.73214 3.22547 L6.71909 4.82088 C6.94036 4.54531 7.16972 4.27548 7.40701 4.01178 L5.51281 2.30729 L3.6186 0.602791 C3.31732 0.937605 3.02611 1.28019 2.74518 1.63006 L4.73214 3.22547 Z M7.47801 0.386416 L9.13895 2.31893 C9.27304 2.20368 9.40897 2.09011 9.54673 1.97827 L7.94057 0 L6.3344 -1.97827 C6.15967 -1.83641 5.98722 -1.69233 5.81708 -1.5461 L7.47801 0.386416 Z" fill="#ffffff" fillOpacity="0.9"/></svg>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "4.57px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "9.14px", height: "9.14px", flexShrink: 0, borderRadius: "1.83px", background: "#8e83fd", boxShadow: "inset 0 0 0 0.91px rgba(214, 214, 214, 0.4), inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.29)" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "35px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#24322e" }}>Assets</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "40px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222" }}>$137.5K</p>
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "9.14px", height: "9.14px", flexShrink: 0, borderRadius: "1.83px", background: "#cfcaff", boxShadow: "inset 0 0 0 0.91px rgba(214, 214, 214, 0.4), inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.29)" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "48px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#24322e" }}>Liabilities</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "35px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222" }}>$31.2K</p>
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "9.14px", height: "9.14px", flexShrink: 0, borderRadius: "1.83px", background: "#fd872f", boxShadow: "inset 0 0 0 0.91px rgba(214, 214, 214, 0.4), inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.29)" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "39px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#24322e" }}>Tax due</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "31px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222" }}>$9.4K</p>
            </div>
          </div>
        </div>
      </div>
      <div style={{ position: "absolute", left: "10.97px", top: "150.41px", width: "229.77px", height: "14px", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <Clock size={12.8} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#a6a6a6", display: "block" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "79px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#222222" }}>Last run Aug 01</p>
        </div>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "2.74px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "45px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#686765" }}>Run now</p>
          <ChevronRight size={11} strokeWidth={1.51} style={{ width: "10.97px", height: "10.97px", flexShrink: 0, color: "#686765", display: "block" }} />
        </div>
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
