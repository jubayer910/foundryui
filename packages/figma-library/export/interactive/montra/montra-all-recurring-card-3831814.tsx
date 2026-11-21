"use client";
// All recurring card (montra, Tables and lists) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Ingot Icons.
// Interactive: the tabs and the search filter the list (counts follow the data), Filter narrows by cadence,
// rows highlight on hover, and each row's menu can pause, resume or cancel that subscription.
import { useEffect, useRef, useState, type ReactNode, type SVGProps } from "react";

// Ingot Icons used here, inlined so this file needs no icon package.
function icon(body: string) {
  return function Icon({ size = 24, strokeWidth = 1.5, ...p }: { size?: number; strokeWidth?: number } & SVGProps<SVGSVGElement>) {
    const html = strokeWidth == 1.5 ? body : body.replace(/stroke-width="([\d.]+)"/g, (_, w) => `stroke-width="${(Number(w) * Number(strokeWidth)) / 1.5}"`);
    return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden {...p} dangerouslySetInnerHTML={{ __html: html }} />;
  };
}
const AdjustmentsHorizontal = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 6a2 2 0 1 0 4 0a2 2 0 1 0 -4 0\" /><path d=\"M4 6l8 0\" /><path d=\"M16 6l4 0\" /><path d=\"M6 12a2 2 0 1 0 4 0a2 2 0 1 0 -4 0\" /><path d=\"M4 12l2 0\" /><path d=\"M10 12l10 0\" /><path d=\"M15 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0\" /><path d=\"M4 18l11 0\" /><path d=\"M19 18l1 0\" /></g>");
const Dots = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0\" /><path d=\"M11 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0\" /><path d=\"M18 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0\" /></g>");
const Search = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 10a7 7 0 1 0 14 0a7 7 0 1 0 -14 0\" /><path d=\"M21 21l-6 -6\" /></g>");


type Sub = { id: number; name: string; plan: string; logo: ReactNode; category: string; bill: boolean; cadence: "Monthly" | "Yearly"; next: string; days: number; amount: number; was?: number; paused?: boolean; mw?: [number, number?] };
const T = (text: string, color: string) => <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "12px", fontFamily: "'Geist'", fontSize: "9.21px", fontWeight: 600, color }}>{text}</p>;
// Today is Aug 9. The four services in the Figma frame come first by next charge.
const SUBS: Sub[] = [
  { id: 1, name: "Google Workspace", plan: "Business Starter · 14 seats", logo: <svg width={14.6} height={14.6} viewBox="0 0 24 24" style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#4285f4", display: "block" }}><path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" fill="currentColor" /></svg>, category: "Software", bill: false, cadence: "Monthly", next: "Aug 10", days: 1, amount: 336, mw: [33] },
  { id: 2, name: "Brightway Cleaning", plan: "Office cleaning · WeWork 4F", logo: <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "14px", lineHeight: "12px", fontFamily: "'Geist'", fontSize: "9.21px", fontWeight: 600, color: "#0ab7bd" }}>Bw</p>, category: "Rent & office", bill: true, cadence: "Monthly", next: "Aug 11", days: 2, amount: 420, mw: [33] },
  { id: 3, name: "Figma", plan: "Professional · 5 editors", logo: <svg width={14.6} height={14.6} viewBox="0 0 24 24" style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#8e83fd", display: "block" }}><path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019 1.705 0 3.093-1.376 3.093-3.068v-2.97H8.148zm7.704 0h-.098c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h.098c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49zm-.097-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h.098c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-.098z" fill="currentColor" /></svg>, category: "Software", bill: false, cadence: "Monthly", next: "Sep 03", days: 25, amount: 225, was: 195, mw: [33, 23] },
  { id: 4, name: "Slack", plan: "Pro · 14 members", logo: <svg width={14.6} height={14.6} viewBox="0 0 24 24" style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#e01e5a", display: "block" }}><path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" fill="currentColor" /></svg>, category: "Software", bill: false, cadence: "Monthly", next: "Sep 05", days: 27, amount: 131, was: 118, mw: [28, 20] },
  { id: 5, name: "WeWork", plan: "Dedicated desks · 4F, 14 seats", logo: T("We", "#111111"), category: "Rent & office", bill: true, cadence: "Monthly", next: "Sep 08", days: 30, amount: 6300 },
  { id: 6, name: "Notion", plan: "Plus · 14 members", logo: T("N", "#111111"), category: "Software", bill: false, cadence: "Monthly", next: "Sep 09", days: 31, amount: 140 },
  { id: 7, name: "Comcast Business", plan: "Internet · 1 Gbps", logo: T("Cb", "#d71e28"), category: "Utilities", bill: true, cadence: "Monthly", next: "Sep 10", days: 32, amount: 249 },
  { id: 8, name: "Linear", plan: "Standard · 9 seats", logo: T("Li", "#5e6ad2"), category: "Software", bill: false, cadence: "Monthly", next: "Sep 12", days: 34, amount: 72 },
  { id: 9, name: "GitHub", plan: "Team · 9 seats", logo: T("Gh", "#24292f"), category: "Software", bill: false, cadence: "Monthly", next: "Sep 14", days: 36, amount: 36 },
  { id: 10, name: "PG&E", plan: "Electricity · office", logo: T("Pg", "#0a6fb4"), category: "Utilities", bill: true, cadence: "Monthly", next: "Sep 15", days: 37, amount: 386 },
  { id: 11, name: "Zoom", plan: "Pro · 6 licenses", logo: T("Zm", "#2d8cff"), category: "Software", bill: false, cadence: "Monthly", next: "Sep 18", days: 40, amount: 90 },
  { id: 12, name: "Verizon Business", plan: "Phones · 6 lines", logo: T("Vz", "#cd040b"), category: "Utilities", bill: true, cadence: "Monthly", next: "Sep 20", days: 42, amount: 210 },
  { id: 13, name: "HubSpot", plan: "Starter CRM · 3 seats", logo: T("Hs", "#ff7a59"), category: "Software", bill: false, cadence: "Monthly", next: "Sep 22", days: 44, amount: 60 },
  { id: 14, name: "Dropbox", plan: "Business · 2 TB", logo: T("Db", "#0061fe"), category: "Software", bill: false, cadence: "Monthly", next: "Sep 26", days: 48, amount: 54 },
  { id: 15, name: "ADT Security", plan: "Alarm monitoring", logo: T("Ad", "#0061aa"), category: "Rent & office", bill: true, cadence: "Monthly", next: "Oct 01", days: 53, amount: 58 },
  { id: 16, name: "Adobe Creative Cloud", plan: "All Apps · 2 seats", logo: T("Ac", "#eb1000"), category: "Software", bill: false, cadence: "Yearly", next: "Oct 14", days: 66, amount: 1440 },
  { id: 17, name: "1Password", plan: "Business · 14 users", logo: T("1P", "#1a8cff"), category: "Software", bill: false, cadence: "Yearly", next: "Nov 02", days: 85, amount: 1344 },
  { id: 18, name: "Hiscox", plan: "General liability", logo: T("Hx", "#c8102e"), category: "Insurance", bill: true, cadence: "Yearly", next: "Jan 12", days: 156, amount: 1180 },
];
const TABS = ["All", "Software", "Bills", "Price up"] as const;
// widths Figma measured for these labels, so the resting tabs, prices and pills sit exactly where they were drawn
const TAB_MW: Record<string, number> = { All: 15, Software: 50, Bills: 24, "Price up": 45 };
const COUNT_MW: Record<string, [number, number]> = { All: [18, 11], Software: [11, 8], Bills: [7, 6], "Price up": [2, 7] };
type Tab = (typeof TABS)[number];
const inTab = (s: Sub, t: Tab) => t === "All" || (t === "Software" ? !s.bill : t === "Bills" ? s.bill : s.was !== undefined);
const when = (d: number) => (d === 1 ? "Tomorrow" : "In " + d + " days");
const money = (n: number) => "$" + n.toLocaleString("en-US");
const cell = (w: string, extra = "") => ({ width: w, height: "48.44px", flexShrink: 0, display: "flex", flexDirection: "row" as const, padding: extra || "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: (extra ? "flex-end" : "flex-start") as "flex-end" | "flex-start", alignItems: "center", boxSizing: "border-box" as const });
const txt = (size: "a" | "b", color: string, extra: object = {}) => ({ flexShrink: 0, margin: 0, textAlign: "left" as const, whiteSpace: "pre" as const, lineHeight: size === "a" ? "14px" : "13px", fontFamily: "'Geist'", fontSize: size === "a" ? "10.97px" : "10.05px", fontWeight: size === "a" ? 500 : 400, color, ...extra });
// closes a popover on an outside click or Escape
function useDismiss(open: boolean, close: () => void) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!open) return;
    const down = (e: MouseEvent) => { if (!ref.current?.contains(e.target as Node)) close(); };
    const key = (e: KeyboardEvent) => { if (e.key === "Escape") close(); };
    document.addEventListener("mousedown", down);
    document.addEventListener("keydown", key);
    return () => { document.removeEventListener("mousedown", down); document.removeEventListener("keydown", key); };
  }, [open, close]);
  return ref;
}

export function AllRecurringCard() {
  const [subs, setSubs] = useState(SUBS);
  const [tab, setTab] = useState<Tab>("All");
  const [query, setQuery] = useState("");
  const [cadence, setCadence] = useState({ Monthly: true, Yearly: true });
  const [filterOpen, setFilterOpen] = useState(false);
  const [menu, setMenu] = useState<number | null>(null);
  const [hover, setHover] = useState<number | null>(null);
  const filterRef = useDismiss(filterOpen, () => setFilterOpen(false));
  const menuRef = useDismiss(menu !== null, () => setMenu(null));
  const q = query.trim().toLowerCase();
  const rows = subs
    .filter((s) => inTab(s, tab) && cadence[s.cadence] && (!q || (s.name + " " + s.plan + " " + s.category).toLowerCase().includes(q)))
    .sort((a, b) => a.days - b.days)
    .slice(0, 4);
  const filtered = !cadence.Monthly || !cadence.Yearly;
  const act = (id: number, what: "pause" | "cancel") => {
    setMenu(null);
    setSubs((all) => (what === "cancel" ? all.filter((s) => s.id !== id) : all.map((s) => (s.id === id ? { ...s, paused: !s.paused } : s))));
  };
  return (
    <div style={{ width: "1053.7px", height: "309px", borderRadius: "14.62px", background: "#fefefe", overflow: "hidden", position: "relative" }}>
      <p style={{ position: "absolute", left: "18.28px", top: "21.93px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "84px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.62px", fontWeight: 500, color: "#000000" }}>All recurring</p>
      <div style={{ position: "absolute", left: "192px", top: "15.54px", width: "332.31px", height: "31.07px", borderRadius: "9.14px", background: "#f5f5f5", display: "flex", flexDirection: "row", padding: "2.74px 2.74px 2.74px 2.74px", gap: "1.83px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        {TABS.map((t) => {
          const on = tab === t;
          return (
            <div key={t} role="tab" aria-selected={on} onClick={() => setTab(t)} style={{ height: "25.59px", flexShrink: 0, borderRadius: "7.31px", ...(on ? { background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #eeeeee, 0px 0.91px 1.83px 0px rgba(13, 13, 18, 0.06)" } : {}), display: "flex", flexDirection: "row", padding: on ? "0.91px 11.88px 0.91px 11.88px" : "0px 10.97px 0px 10.97px", gap: "5.48px", justifyContent: "center", alignItems: "center", boxSizing: "border-box", cursor: "pointer" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: on ? 500 : 400, color: on ? "#000000" : "#646871", minWidth: TAB_MW[t] + "px" }}>{t}</p>
              <div style={{ height: "16.45px", flexShrink: 0, borderRadius: "999px", background: on ? "#222222" : "#f0f0f2", display: "flex", flexDirection: "row", padding: "0px 5.48px 0px 5.48px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                {(() => {
                  const n = subs.filter((s) => inTab(s, t)).length;
                  return <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 500, color: on ? "#ffffff" : "#6c6c6c", ...(n === COUNT_MW[t][0] ? { minWidth: COUNT_MW[t][1] + "px" } : {}) }}>{n}</p>;
                })()}
              </div>
            </div>
          );
        })}
      </div>
      <div style={{ position: "absolute", left: "770.47px", top: "15.54px", width: "264.95px", height: "31.07px", display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ width: "182.78px", height: "31.07px", flexShrink: 0, borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8, 0px 0.91px 1.83px 0px rgba(79, 79, 79, 0.12)", position: "relative", display: "flex", flexDirection: "row", padding: "0.91px 10.05px 0.91px 10.05px", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <Search size={13.7} strokeWidth={1.51} style={{ width: "13.71px", height: "13.71px", flexShrink: 0, color: "#686765", display: "block" }} />
          {!query && <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#686765" }}>Search services</p>}
          <input aria-label="Search services" value={query} onChange={(e) => setQuery(e.target.value)} style={{ position: "absolute", inset: 0, width: "100%", padding: "0 10.05px 0 29.24px", border: "none", outline: "none", background: "transparent", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#222222", boxSizing: "border-box" }} />
        </div>
        <div ref={filterRef} style={{ position: "relative", flexShrink: 0 }}>
        <div role="button" aria-expanded={filterOpen} onClick={() => setFilterOpen((o) => !o)} style={{ cursor: "pointer", height: "29.24px", flexShrink: 0, borderRadius: "7.31px", background: filtered ? "#f4f4f5" : "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8, 0px 0.91px 1.83px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "row", padding: "0.91px 11.88px 0.91px 11.88px", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <AdjustmentsHorizontal size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "31px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#6c6c6c" }}>Filter</p>
          </div>
          {filterOpen && (
            <div style={{ position: "absolute", right: 0, top: "calc(100% + 5.48px)", zIndex: 2, width: "168px", padding: "5.48px", borderRadius: "9.14px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8, 0px 12px 24px -8px rgba(13, 13, 18, 0.14)", boxSizing: "border-box" }}>
              <p style={{ margin: "3.66px 7.31px 5.48px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 500, color: "#a6a6a6" }}>Cadence</p>
              {(["Monthly", "Yearly"] as const).map((c) => (
                <label key={c} style={{ display: "flex", alignItems: "center", gap: "7.31px", padding: "5.48px 7.31px", borderRadius: "6.4px", cursor: "pointer", fontFamily: "'Geist'", fontSize: "11.88px", color: "#222222" }}>
                  <input type="checkbox" checked={cadence[c]} onChange={() => setCadence((v) => ({ ...v, [c]: !v[c] }))} style={{ margin: 0, accentColor: "#222222" }} />
                  {c}
                  <span style={{ marginLeft: "auto", color: "#a6a6a6", fontSize: "10.05px" }}>{subs.filter((s) => s.cadence === c).length}</span>
                </label>
              ))}
            </div>
          )}
        </div>
      </div>
      <div style={{ position: "absolute", left: "0px", top: "62.14px", width: "1053.7px", height: "246.75px", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ width: "1053.7px", height: "49.35px", flexShrink: 0, background: "#fafafa", boxShadow: "inset 0 0.91px 0 0 #ededed, inset 0 -0.91px 0 0 #ededed", display: "flex", flexDirection: "row", padding: "0.91px 0px 0.91px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "260px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "46px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#818892" }}>Service</p>
          </div>
          <div style={{ width: "140px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "56px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#818892" }}>Category</p>
          </div>
          <div style={{ width: "120px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "53px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#818892" }}>Cadence</p>
          </div>
          <div style={{ width: "140px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "73px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#818892" }}>Next charge</p>
          </div>
          <div style={{ width: "120px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "47px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#818892" }}>Amount</p>
          </div>
          <div style={{ width: "160px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "40px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#818892" }}>Status</p>
          </div>
          <div style={{ width: "113.7px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 14.62px 0px 14.62px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "46px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#818892" }}>Actions</p>
          </div>
        </div>
        {rows.map((s, i) => (
          // the last row has no divider under it, as in Figma
          <div key={s.id} onMouseEnter={() => setHover(s.id)} onMouseLeave={() => setHover(null)} style={{ width: "1053.7px", height: "49.35px", flexShrink: 0, ...(hover === s.id ? { background: "#fafafa" } : {}), boxShadow: i === rows.length - 1 ? "inset 0 0 0 0px #ededed" : "inset 0 -0.91px 0 0 #ededed", display: "flex", flexDirection: "row", ...(i === rows.length - 1 ? {} : { padding: "0px 0px 0.91px 0px" }), justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box", opacity: s.paused ? 0.6 : 1 }}>
            <div style={cell("260px")}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "25.59px", height: "25.59px", flexShrink: 0, borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8", display: "flex", flexDirection: "row", padding: "0.91px 0.91px 0.91px 0.91px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  {s.logo}
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.83px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <p style={txt("a", "#222222")}>{s.name}</p>
                  <p style={txt("b", "#666d80")}>{s.plan}</p>
                </div>
              </div>
            </div>
            <div style={cell("140px")}>
              <p style={txt("a", "#666d80")}>{s.category}</p>
            </div>
            <div style={cell("120px")}>
              <p style={txt("a", "#666d80")}>{s.cadence}</p>
            </div>
            <div style={cell("140px")}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.83px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={txt("a", "#666d80")}>{s.next}</p>
                <p style={txt("b", "#a6a6a6")}>{s.paused ? "Paused" : when(s.days)}</p>
              </div>
            </div>
            <div style={cell("120px")}>
              {s.was === undefined ? (
                <p style={txt("a", "#f45363", s.mw ? { minWidth: s.mw[0] + "px" } : {})}>-{money(s.amount)}</p>
              ) : (
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={txt("a", "#f45363", s.mw ? { minWidth: s.mw[0] + "px" } : {})}>-{money(s.amount)}</p>
                  <p style={txt("b", "#a6a6a6", { textDecoration: "line-through", ...(s.mw?.[1] ? { minWidth: s.mw[1] + "px" } : {}) })}>{money(s.was)}</p>
                </div>
              )}
            </div>
            <div style={cell("160px")}>
              <div style={{ height: "23.3px", flexShrink: 0, borderRadius: "999px", background: s.paused ? "#f1f2f4" : s.was !== undefined ? "#fff4eb" : "#e7fff9", display: "flex", flexDirection: "row", padding: "0px 9.14px 0px 9.14px", gap: "3.66px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                {s.paused ? <svg style={{ width: "7.31px", height: "7.31px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="7.31" height="7.31" viewBox="0 0 7.31 7.31" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M7.31 3.655 C7.31 5.6736 5.6736 7.31 3.655 7.31 C1.6364 7.31 0 5.6736 0 3.655 C0 1.6364 1.6364 0 3.655 0 C5.6736 0 7.31 1.6364 7.31 3.655 Z" fill="#8a8f98"/></svg> : s.was !== undefined ? <svg style={{ width: "7.31px", height: "7.31px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="7.31" height="7.31" viewBox="0 0 7.31 7.31" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M7.31 3.655 C7.31 5.6736 5.6736 7.31 3.655 7.31 C1.6364 7.31 0 5.6736 0 3.655 C0 1.6364 1.6364 0 3.655 0 C5.6736 0 7.31 1.6364 7.31 3.655 Z" fill="#e8711a"/></svg> : <svg style={{ width: "7.31px", height: "7.31px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="7.31" height="7.31" viewBox="0 0 7.31 7.31" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M7.31 3.655 C7.31 5.6736 5.6736 7.31 3.655 7.31 C1.6364 7.31 0 5.6736 0 3.655 C0 1.6364 1.6364 0 3.655 0 C5.6736 0 7.31 1.6364 7.31 3.655 Z" fill="#00a77d"/></svg>}
                <p style={txt("a", s.paused ? "#8a8f98" : s.was !== undefined ? "#e8711a" : "#00a77d", s.paused ? {} : { minWidth: (s.was !== undefined ? 42 : 33) + "px" })}>{s.paused ? "Paused" : s.was !== undefined ? "Price up" : "Active"}</p>
              </div>
            </div>
            <div style={{ ...cell("113.7px", "0px 14.62px 0px 14.62px"), position: "relative" }} ref={menu === s.id ? menuRef : undefined}>
              <div role="button" aria-label={"Actions for " + s.name} aria-expanded={menu === s.id} onClick={() => setMenu(menu === s.id ? null : s.id)} style={{ width: "29.24px", height: "29.24px", flexShrink: 0, borderRadius: "7.31px", background: menu === s.id ? "#f4f4f5" : "#ffffff", boxShadow: "inset 0 0 0 0.91px #dfe1e6", display: "flex", flexDirection: "row", padding: "0.91px 0.91px 0.91px 0.91px", justifyContent: "center", alignItems: "center", boxSizing: "border-box", cursor: "pointer" }}>
                <Dots size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#808897", display: "block" }} />
              </div>
              {menu === s.id && (
                <div role="menu" style={{ position: "absolute", right: "48px", ...(i < 2 ? { top: "6px" } : { bottom: "6px" }), zIndex: 2, width: "150px", padding: "4.57px", borderRadius: "9.14px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8, 0px 12px 24px -8px rgba(13, 13, 18, 0.14)", boxSizing: "border-box" }}>
                  {([["pause", s.paused ? "Resume" : "Pause", "#222222"], ["cancel", "Cancel subscription", "#f45363"]] as const).map(([k, label, color]) => (
                    <div key={k} role="menuitem" onClick={() => act(s.id, k)} onMouseEnter={(e) => (e.currentTarget.style.background = "#f5f5f5")} onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")} style={{ padding: "6.4px 7.31px", borderRadius: "5.48px", cursor: "pointer", fontFamily: "'Geist'", fontSize: "11.88px", color }}>
                      {label}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
        {rows.length === 0 && (
          <p style={{ margin: 0, padding: "22px 14.62px", fontFamily: "'Geist'", fontSize: "11.88px", color: "#a6a6a6" }}>No services match{q ? " “" + query.trim() + "”" : ""}.</p>
        )}
      </div>
    </div>
  );
}
