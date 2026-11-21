"use client";
// New contacts card (loopo, Charts) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Ingot Icons.
// Interactive: hover a week for its numbers, hover a legend item to isolate it, switch Daily / Weekly / Monthly.
import { useEffect, useRef, useState } from "react";

type Range = "Daily" | "Weekly" | "Monthly";
// Contacts per period: [signup forms, checkout & imports], oldest first
const DATA: Record<Range, { sub: string; max: number; forms: number[]; imports: number[]; tips: string[]; ticks: [number, string][] }> = {
  Daily: {
    sub: "12 days to Dec 14",
    max: 60,
    forms: [24, 27, 22, 29, 31, 26, 19, 33, 35, 30, 32, 36],
    imports: [16, 18, 15, 20, 19, 17, 12, 21, 22, 19, 20, 23],
    tips: ["Dec 3", "Dec 4", "Dec 5", "Dec 6", "Dec 7", "Dec 8", "Dec 9", "Dec 10", "Dec 11", "Dec 12", "Dec 13", "Dec 14"],
    ticks: [[0, "Dec 3"], [3, "Dec 6"], [6, "Dec 9"], [9, "Dec 12"], [11, "Dec 14"]],
  },
  Weekly: {
    sub: "12 weeks to Dec 14",
    max: 400,
    forms: [118, 131, 142, 127, 156, 171, 149, 168, 163, 184, 199, 204],
    imports: [90, 103, 105, 98, 114, 121, 115, 129, 121, 130, 133, 134],
    tips: ["Sep 22 – 28", "Sep 29 – Oct 5", "Oct 6 – 12", "Oct 13 – 19", "Oct 20 – 26", "Oct 27 – Nov 2", "Nov 3 – 9", "Nov 10 – 16", "Nov 17 – 23", "Nov 24 – 30", "Dec 1 – 7", "Dec 8 – 14"],
    ticks: [[0, "Sep 22"], [3, "Oct 13"], [6, "Nov 3"], [9, "Nov 24"], [11, "Dec 14"]],
  },
  Monthly: {
    sub: "12 months to Dec",
    max: 1600,
    forms: [402, 436, 471, 455, 512, 548, 530, 590, 611, 658, 702, 744],
    imports: [288, 301, 330, 318, 352, 377, 361, 402, 419, 441, 470, 489],
    tips: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    ticks: [[0, "Jan"], [3, "Apr"], [6, "Jul"], [9, "Oct"], [11, "Dec"]],
  },
};
const RANGES: Range[] = ["Daily", "Weekly", "Monthly"];
const BASE = 233.5, SPAN = 224.7, GAP = 2.4, W = 25.6, STEP = 44.1, X0 = 48.7;
// the label positions measured in Figma for the weekly view, so the resting chart is the original to the pixel
// the weekly view's bars as measured in Figma ([top, height] in px), so the resting chart is the original to the pixel
const FIG = { left: [48.7, 92.8, 136.9, 181, 225.1, 269.2, 313.3, 357.4, 401.5, 445.6, 489.7, 533.8], forms: [[167.2, 66.3], [159.9, 73.6], [153.7, 79.8], [162.2, 71.4], [145.9, 87.7], [137.4, 96.1], [149.8, 83.7], [139.1, 94.4], [141.9, 91.6], [130.1, 103.4], [121.7, 111.8], [118.9, 114.6]], imports: [[114.4, 50.4], [99.8, 57.7], [92.5, 58.8], [104.9, 54.9], [79.6, 63.9], [67.2, 67.8], [82.9, 64.5], [64.4, 72.3], [71.7, 67.8], [54.8, 72.9], [44.7, 74.6], [41.4, 75.1]], hatch: [66.3, 73.6, 79.78, 71.35, 87.65, 96.08, 83.72, 94.39, 91.58, 103.38, 111.81, 114.62] };
const WEEK_LABELS = [39.5, 174.3, 308.1, 436.4, 526.6];
const fmt = (n: number) => n.toLocaleString("en-US");
const r1 = (n: number) => Math.round(n * 10) / 10;
// the diagonal texture inside a bar, drawn the way Figma draws it for that height
function hatch(h: number) {
  const a = 0.540937, n = Math.floor((2 * h + W) / 5.48) + 1, f = (v: number) => +v.toPrecision(6);
  let d = "";
  for (let i = 0; i < n; i++) {
    const x = f(i * 5.48);
    d += `${i ? " " : ""}M${x} ${f(h)} L${f(x + a)} ${f(h + a)} L${f(x + h + a)} ${a} L${f(x + h)} 0 L${f(x + h - a)} -${a} L${f(x - a)} ${f(h - a)} L${x} ${f(h)} Z`;
  }
  return { d, w: f((n - 1) * 5.48 + h) };
}

export function NewContactsCard() {
  const [range, setRange] = useState<Range>("Weekly");
  const [open, setOpen] = useState(false);
  const [hover, setHover] = useState<number | null>(null);
  const [series, setSeries] = useState<"forms" | "imports" | null>(null);
  const menu = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!open) return;
    const close = (e: MouseEvent) => { if (!menu.current?.contains(e.target as Node)) setOpen(false); };
    const esc = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("mousedown", close);
    document.addEventListener("keydown", esc);
    return () => { document.removeEventListener("mousedown", close); document.removeEventListener("keydown", esc); };
  }, [open]);
  const d = DATA[range];
  const k = SPAN / d.max;
  const legendDim = (s: "forms" | "imports") => (series && series !== s ? 0.45 : 1);
  return (
    <div style={{ width: "612.5px", height: "380.2px", borderRadius: "24.1px", background: "#fefefe", boxShadow: "inset 0 0 0 1.1px #eaeaea", overflow: "hidden", display: "flex", flexDirection: "column", padding: "23px 23px 23px 23px", gap: "17.5px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
      <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "4.4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "17.5px", fontWeight: 500, color: "#141417", lineHeight: "1.5" }}>New contacts</p>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "13.1px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.1px", fontWeight: 400, color: "#6b6b70" }}>{d.sub}</p>
            <div onMouseEnter={() => setSeries("forms")} onMouseLeave={() => setSeries(null)} style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6.6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box", cursor: "default", opacity: legendDim("forms"), transition: "opacity .15s" }}>
              <div style={{ width: "9.9px", height: "9.9px", flexShrink: 0, borderRadius: "2.7px", background: "linear-gradient(180deg, #fd6240 0%, #fd4b23 100%)", boxShadow: "inset 0 0 0 1px rgba(197, 59, 27, 0.38), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6.6px 0px rgba(255, 255, 255, 0.18)", overflow: "hidden" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.1px", fontWeight: 400, color: "#52525b" }}>Signup forms</p>
            </div>
            <div onMouseEnter={() => setSeries("imports")} onMouseLeave={() => setSeries(null)} style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6.6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box", cursor: "default", opacity: legendDim("imports"), transition: "opacity .15s" }}>
              <div style={{ width: "9.9px", height: "9.9px", flexShrink: 0, borderRadius: "2.7px", background: "linear-gradient(180deg, #fed0c6 0%, #fec2b4 100%)", boxShadow: "inset 0 0 0 1px rgba(240, 71, 33, 0.22), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 6.6px 0px rgba(255, 255, 255, 0.35)", overflow: "hidden" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.1px", fontWeight: 400, color: "#52525b" }}>Checkout & imports</p>
            </div>
          </div>
        </div>
        <div ref={menu} style={{ flexShrink: 0, position: "relative" }}>
          <button type="button" aria-haspopup="listbox" aria-expanded={open} onClick={() => setOpen((o) => !o)} style={{ all: "unset", cursor: "pointer", flexShrink: 0, borderRadius: "8.8px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e0e0e3", overflow: "hidden", display: "flex", flexDirection: "row", padding: "7.7px 8.8px 7.7px 11px", gap: "6.6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "13.1px", fontWeight: 500, color: "#4d4d52", lineHeight: "17.5px" }}>{range}</p>
            <svg style={{ width: "13.2px", height: "13.2px", flexShrink: 0, display: "block", lineHeight: 0 }} xmlns="http://www.w3.org/2000/svg" width="13.15" height="13.15" viewBox="0 0 13.15 13.15" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 3.286 4.931)" d="M0.542312 -0.542312 C0.242801 -0.841823 -0.242801 -0.841823 -0.542312 -0.542312 C-0.841823 -0.242801 -0.841823 0.242801 -0.542312 0.542312 L0 0 L0.542312 -0.542312 Z M3.28691 3.28691 L2.7446 3.82922 C3.04411 4.12873 3.52971 4.12873 3.82922 3.82922 L3.28691 3.28691 Z M7.11613 0.542312 C7.41564 0.242801 7.41564 -0.242801 7.11613 -0.542312 C6.81662 -0.841823 6.33101 -0.841823 6.0315 -0.542312 L6.57382 0 L7.11613 0.542312 Z M0 0 L-0.542312 0.542312 L2.7446 3.82922 L3.28691 3.28691 L3.82922 2.7446 L0.542312 -0.542312 L0 0 Z M3.28691 3.28691 L3.82922 3.82922 L7.11613 0.542312 L6.57382 0 L6.0315 -0.542312 L2.7446 2.7446 L3.28691 3.28691 Z" fill="#6b6b70"/></svg>
          </button>
          {open && (
            <div role="listbox" aria-label="Granularity" style={{ position: "absolute", right: 0, top: "calc(100% + 6px)", zIndex: 2, width: "148px", padding: "4.4px", borderRadius: "11px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e0e0e3, 0 12px 28px -10px rgba(20, 20, 23, 0.22)", boxSizing: "border-box" }}>
              {RANGES.map((r) => (
                <button key={r} role="option" aria-selected={r === range} onClick={() => { setRange(r); setOpen(false); setHover(null); }} onMouseEnter={(e) => (e.currentTarget.style.background = "#f4f4f5")} onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")} style={{ all: "unset", boxSizing: "border-box", width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "6.6px 8.8px", borderRadius: "6.6px", cursor: "pointer", fontFamily: "'Geist'", fontSize: "13.1px", fontWeight: r === range ? 500 : 400, color: r === range ? "#141417" : "#4d4d52", lineHeight: "17.5px" }}>
                  {r}
                  {r === range && <svg width="13.2" height="13.2" viewBox="0 0 24 24" fill="none" aria-hidden><path d="M5 12.5l4.5 4.5L19 7.5" stroke="#fd4b23" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
      <div style={{ width: "568.6px", height: "262px", flexShrink: 0, position: "relative" }} onMouseLeave={() => setHover(null)}>
        <svg style={{ position: "absolute", left: "39.4px", top: "8.8px", width: "529.2px", height: "0px", display: "block", lineHeight: 0 }} xmlns="http://www.w3.org/2000/svg" width="529.2" height="0.01" viewBox="0 0 529.2 0.01" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0L529.2000122070312 0" fill="none" stroke="#ececee" strokeWidth="1" strokeDasharray="3.2899999618530273 3.2899999618530273" strokeLinecap="butt"/></svg>
        <p style={{ position: "absolute", left: "0px", top: "0.3px", width: "30.7px", height: "17px", margin: 0, textAlign: "right", whiteSpace: "pre-wrap", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.1px", fontWeight: 400, color: "#8b8b91" }}>{fmt(d.max)}</p>
        <svg style={{ position: "absolute", left: "39.4px", top: "65px", width: "529.2px", height: "0px", display: "block", lineHeight: 0 }} xmlns="http://www.w3.org/2000/svg" width="529.2" height="0.01" viewBox="0 0 529.2 0.01" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0L529.2000122070312 0" fill="none" stroke="#ececee" strokeWidth="1" strokeDasharray="3.2899999618530273 3.2899999618530273" strokeLinecap="butt"/></svg>
        <p style={{ position: "absolute", left: "0px", top: "56.5px", width: "30.7px", height: "17px", margin: 0, textAlign: "right", whiteSpace: "pre-wrap", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.1px", fontWeight: 400, color: "#8b8b91" }}>{fmt(d.max * 3 / 4)}</p>
        <svg style={{ position: "absolute", left: "39.4px", top: "121.1px", width: "529.2px", height: "0px", display: "block", lineHeight: 0 }} xmlns="http://www.w3.org/2000/svg" width="529.2" height="0.01" viewBox="0 0 529.2 0.01" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0L529.2000122070312 0" fill="none" stroke="#ececee" strokeWidth="1" strokeDasharray="3.2899999618530273 3.2899999618530273" strokeLinecap="butt"/></svg>
        <p style={{ position: "absolute", left: "0px", top: "112.6px", width: "30.7px", height: "17px", margin: 0, textAlign: "right", whiteSpace: "pre-wrap", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.1px", fontWeight: 400, color: "#8b8b91" }}>{fmt(d.max / 2)}</p>
        <svg style={{ position: "absolute", left: "39.4px", top: "177.3px", width: "529.2px", height: "0px", display: "block", lineHeight: 0 }} xmlns="http://www.w3.org/2000/svg" width="529.2" height="0.01" viewBox="0 0 529.2 0.01" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0L529.2000122070312 0" fill="none" stroke="#ececee" strokeWidth="1" strokeDasharray="3.2899999618530273 3.2899999618530273" strokeLinecap="butt"/></svg>
        <p style={{ position: "absolute", left: "0px", top: "168.8px", width: "30.7px", height: "17px", margin: 0, textAlign: "right", whiteSpace: "pre-wrap", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.1px", fontWeight: 400, color: "#8b8b91" }}>{fmt(d.max / 4)}</p>
        <div style={{ position: "absolute", left: "39.4px", top: "233px", width: "529.2px", height: "1px", background: "#e2e2e5" }} />
        <p style={{ position: "absolute", left: "0px", top: "225px", width: "30.7px", height: "17px", margin: 0, textAlign: "right", whiteSpace: "pre-wrap", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.1px", fontWeight: 400, color: "#8b8b91" }}>0</p>
        <svg style={{ position: "absolute", left: "61.5px", top: "8.8px", width: "0px", height: "224.7px", display: "block", lineHeight: 0 }} xmlns="http://www.w3.org/2000/svg" width="0.01" height="224.74" viewBox="0 0 0.01 224.74" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M 0 0 L 0 224.74000549316406" fill="none" stroke="#ececee" strokeWidth="1" strokeDasharray="3.2899999618530273 3.2899999618530273" strokeLinecap="butt"/></svg>
        <svg style={{ position: "absolute", left: "193.8px", top: "8.8px", width: "0px", height: "224.7px", display: "block", lineHeight: 0 }} xmlns="http://www.w3.org/2000/svg" width="0.01" height="224.74" viewBox="0 0 0.01 224.74" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M 0 0 L 0 224.74000549316406" fill="none" stroke="#ececee" strokeWidth="1" strokeDasharray="3.2899999618530273 3.2899999618530273" strokeLinecap="butt"/></svg>
        <svg style={{ position: "absolute", left: "326.1px", top: "8.8px", width: "0px", height: "224.7px", display: "block", lineHeight: 0 }} xmlns="http://www.w3.org/2000/svg" width="0.01" height="224.74" viewBox="0 0 0.01 224.74" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M 0 0 L 0 224.74000549316406" fill="none" stroke="#ececee" strokeWidth="1" strokeDasharray="3.2899999618530273 3.2899999618530273" strokeLinecap="butt"/></svg>
        <svg style={{ position: "absolute", left: "458.4px", top: "8.8px", width: "0px", height: "224.7px", display: "block", lineHeight: 0 }} xmlns="http://www.w3.org/2000/svg" width="0.01" height="224.74" viewBox="0 0 0.01 224.74" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M 0 0 L 0 224.74000549316406" fill="none" stroke="#ececee" strokeWidth="1" strokeDasharray="3.2899999618530273 3.2899999618530273" strokeLinecap="butt"/></svg>
        <svg style={{ position: "absolute", left: "546.6px", top: "8.8px", width: "0px", height: "224.7px", display: "block", lineHeight: 0 }} xmlns="http://www.w3.org/2000/svg" width="0.01" height="224.74" viewBox="0 0 0.01 224.74" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M 0 0 L 0 224.74000549316406" fill="none" stroke="#ececee" strokeWidth="1" strokeDasharray="3.2899999618530273 3.2899999618530273" strokeLinecap="butt"/></svg>
        {d.forms.map((v, i) => {
          const fig = range === "Weekly";
          const hf = fig ? FIG.forms[i][1] : r1(v * k), hi = fig ? FIG.imports[i][1] : r1(d.imports[i] * k), left = fig ? FIG.left[i] : r1(X0 + i * STEP), th = fig ? FIG.hatch[i] : hf, t = hatch(th);
          const topF = fig ? FIG.forms[i][0] : r1(BASE - hf), topI = fig ? FIG.imports[i][0] : r1(BASE - hf - GAP - hi);
          const dim = (hover !== null && hover !== i) ? 0.45 : 1;
          return (
            <div key={i}>
              <div style={{ position: "absolute", left: left + "px", top: topF + "px", width: "25.6px", height: hf + "px", borderRadius: "4.4px", background: "linear-gradient(180deg, #fd6240 0%, #fd4b23 100%)", boxShadow: "inset 0 0 0 1px rgba(197, 59, 27, 0.38), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6.6px 0px rgba(255, 255, 255, 0.18)", overflow: "hidden", opacity: dim * legendDim("forms"), transition: "top .3s, height .3s, opacity .15s" }}>
                <svg style={{ position: "absolute", left: -r1(th) + "px", top: "0px", width: r1(t.w) + "px", height: hf + "px", display: "block", lineHeight: 0 }} xmlns="http://www.w3.org/2000/svg" width={t.w} height={th} viewBox={"0 0 " + t.w + " " + th} fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d={t.d} fill="#ffffff" fillOpacity="0.09"/></svg>
              </div>
              <div style={{ position: "absolute", left: left + "px", top: topI + "px", width: "25.6px", height: hi + "px", borderRadius: "4.4px", background: "linear-gradient(180deg, #fed0c6 0%, #fec2b4 100%)", boxShadow: "inset 0 0 0 1px rgba(240, 71, 33, 0.22), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 6.6px 0px rgba(255, 255, 255, 0.35)", overflow: "hidden", opacity: dim * legendDim("imports"), transition: "top .3s, height .3s, opacity .15s" }} />
            </div>
          );
        })}
        {d.ticks.map(([i, label], n) => (
          <p key={n} style={{ position: "absolute", left: (range === "Weekly" ? WEEK_LABELS[n] : r1(X0 + i * STEP + W / 2)) + "px", top: "244.5px", margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.1px", fontWeight: 400, color: hover === i ? "#141417" : "#8b8b91", transform: range === "Weekly" ? undefined : "translateX(-50%)" }}>{label}</p>
        ))}
        {d.forms.map((_, i) => (
          <div key={i} aria-hidden onMouseEnter={() => setHover(i)} style={{ position: "absolute", left: r1(X0 + i * STEP - 9.25) + "px", top: "0px", width: "44.1px", height: "236px", cursor: "default" }} />
        ))}
        {hover !== null && (() => {
          // beside the column, level with the top of the stack, kept inside the plot
          const cx = X0 + hover * STEP + W / 2, top = Math.min(Math.max(BASE - (d.forms[hover] + d.imports[hover]) * k - GAP, 52), 150);
          const flip = cx > 330;
          return (
            <div role="tooltip" style={{ position: "absolute", left: cx + "px", top: top + "px", transform: `translate(${flip ? "calc(-100% - 22px)" : "22px"}, -50%)`, pointerEvents: "none", zIndex: 1, minWidth: "176px", whiteSpace: "nowrap", padding: "8.8px 11px", borderRadius: "10px", background: "#141417", color: "#ffffff", fontFamily: "'Geist'", fontSize: "12px", lineHeight: "17px", boxShadow: "0 10px 24px -12px rgba(20, 20, 23, 0.5)", boxSizing: "border-box" }}>
              <div style={{ fontWeight: 500, marginBottom: "4px" }}>{d.tips[hover]}</div>
              {([["Signup forms", d.forms[hover], "#fd4b23"], ["Checkout & imports", d.imports[hover], "#fec2b4"]] as const).map(([n, v, c]) => (
                <div key={n} style={{ display: "flex", alignItems: "center", gap: "6.6px", color: "rgba(255, 255, 255, 0.72)" }}>
                  <span style={{ width: "8px", height: "8px", borderRadius: "2.2px", background: c }} />
                  {n}
                  <span style={{ marginLeft: "auto", color: "#ffffff", fontVariantNumeric: "tabular-nums" }}>{fmt(v)}</span>
                </div>
              ))}
              <div style={{ display: "flex", marginTop: "4px", paddingTop: "4px", borderTop: "1px solid rgba(255, 255, 255, 0.14)" }}>Total<span style={{ marginLeft: "auto", fontWeight: 500, fontVariantNumeric: "tabular-nums" }}>{fmt(d.forms[hover] + d.imports[hover])}</span></div>
            </div>
          );
        })()}
      </div>
    </div>
  );
}
