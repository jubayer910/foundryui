"use client";
// Range menu (axon, Charts) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist, Geist Mono. Icons: Ingot Icons.
// Interactive: the highlight follows the pointer and the arrow keys, click or Enter picks a range (the check moves),
// C picks "Custom range…", and "Previous period" switches the comparison on and off.
import { useState, type HTMLAttributes, type KeyboardEvent, type SVGProps } from "react";

// Ingot Icons used here, inlined so this file needs no icon package.
function icon(body: string) {
  return function Icon({ size = 24, strokeWidth = 1.5, ...p }: { size?: number; strokeWidth?: number } & SVGProps<SVGSVGElement>) {
    const html = strokeWidth == 1.5 ? body : body.replace(/stroke-width="([\d.]+)"/g, (_, w) => `stroke-width="${(Number(w) * Number(strokeWidth)) / 1.5}"`);
    return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden {...p} dangerouslySetInnerHTML={{ __html: html }} />;
  };
}
const Calendar = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12\" /><path d=\"M16 3v4\" /><path d=\"M8 3v4\" /><path d=\"M4 11h16\" /></g>");
const Check = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M5 12l5 5l10 -10\" /></g>");
const GitCompare = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 6a2 2 0 1 0 4 0a2 2 0 1 0 -4 0\" /><path d=\"M16 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0\" /><path d=\"M11 6h5a2 2 0 0 1 2 2v8\" /><path d=\"M14 9l-3 -3l3 -3\" /><path d=\"M13 18h-5a2 2 0 0 1 -2 -2v-8\" /><path d=\"M10 15l3 3l-3 3\" /></g>");


const RANGES = ["Last 7 days", "Week", "Month", "Quarter", "Year", "Custom range…"] as const;
type Range = (typeof RANGES)[number];
// rows in order, for the arrow keys: the six ranges, then the comparison toggle
const ROWS = [...RANGES, "Previous period"] as const;

export function RangeMenu() {
  const [range, setRange] = useState<Range>("Month");
  const [compare, setCompare] = useState(false);
  const [active, setActive] = useState(3); // the Figma frame shows the pointer resting on "Quarter"
  const pick = (i: number) => (i < RANGES.length ? setRange(RANGES[i]) : setCompare((c) => !c));
  const onKey = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
      setActive((a) => (a + (e.key === "ArrowDown" ? 1 : ROWS.length - 1)) % ROWS.length);
    } else if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      pick(active);
    } else if (e.key.toLowerCase() === "c") {
      setRange("Custom range…");
      setActive(5);
    }
  };
  const row = (i: number): HTMLAttributes<HTMLDivElement> => ({
    role: i < RANGES.length ? "menuitemradio" : "menuitemcheckbox",
    "aria-checked": i < RANGES.length ? range === RANGES[i] : compare,
    onMouseEnter: () => setActive(i),
    onClick: () => pick(i),
    style: { alignSelf: "stretch", height: "32px", flexShrink: 0, borderRadius: "6px", ...(active === i ? { background: "#f5f5f5" } : {}), display: "flex", flexDirection: "row", padding: "6px 8px 6px 8px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box", cursor: "pointer" },
  });
  const label = (i: number, text: string) => (
    <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: active === i || (i < RANGES.length ? range === RANGES[i] : compare) ? "#15171c" : "#384152", lineHeight: "20px" }}>{text}</p>
  );
  const check = (on: boolean) => on && <Check size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#1b8ce8", display: "block" }} />;
  return (
    <div role="menu" aria-label="Date range" tabIndex={0} onKeyDown={onKey} style={{ outline: "none", width: "210px", height: "282px", borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e8e8e8, 0px 12px 22px 0px rgba(13, 13, 18, 0.08), 0px 1px 2px 0px rgba(79, 79, 79, 0.12)", display: "flex", flexDirection: "column", padding: "5px 5px 5px 5px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
      {RANGES.slice(0, 5).map((r, i) => (
        <div key={r} {...row(i)}>
          <Calendar size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#697386", display: "block" }} />
          {label(i, r)}
          {check(range === r)}
        </div>
      ))}
      <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "4px 0px 4px 0px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ flex: "1 1 0", minWidth: 0, height: "1px", flexShrink: 0, background: "#ededed", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }} />
      </div>
      <div {...row(5)}>
        <Calendar size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#697386", display: "block" }} />
        {label(5, "Custom range…")}
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist Mono'", fontSize: "12px", fontWeight: 400, color: "#a6a6a6", lineHeight: "18px" }}>C</p>
        {check(range === "Custom range…")}
      </div>
      <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "4px 0px 4px 0px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ flex: "1 1 0", minWidth: 0, height: "1px", flexShrink: 0, background: "#ededed", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }} />
      </div>
      <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "6px 8px 4px 8px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#a6a6a6", lineHeight: "20px" }}>Compare</p>
      </div>
      <div {...row(6)}>
        <GitCompare size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#697386", display: "block" }} />
        {label(6, "Previous period")}
        {check(compare)}
      </div>
    </div>
  );
}
