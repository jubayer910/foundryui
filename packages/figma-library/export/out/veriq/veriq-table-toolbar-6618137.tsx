// Table toolbar (veriq, Navigation) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Inter, Geist. Icons: Ingot Icons.
import type { SVGProps } from "react";

// Ingot Icons used here, inlined so this file needs no icon package.
function icon(body: string) {
  return function Icon({ size = 24, strokeWidth = 1.5, ...p }: { size?: number; strokeWidth?: number } & SVGProps<SVGSVGElement>) {
    const html = strokeWidth == 1.5 ? body : body.replace(/stroke-width="([\d.]+)"/g, (_, w) => `stroke-width="${(Number(w) * Number(strokeWidth)) / 1.5}"`);
    return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden {...p} dangerouslySetInnerHTML={{ __html: html }} />;
  };
}
const AdjustmentsHorizontal = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 6a2 2 0 1 0 4 0a2 2 0 1 0 -4 0\" /><path d=\"M4 6l8 0\" /><path d=\"M16 6l4 0\" /><path d=\"M6 12a2 2 0 1 0 4 0a2 2 0 1 0 -4 0\" /><path d=\"M4 12l2 0\" /><path d=\"M10 12l10 0\" /><path d=\"M15 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0\" /><path d=\"M4 18l11 0\" /><path d=\"M19 18l1 0\" /></g>");
const Search = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 10a7 7 0 1 0 14 0a7 7 0 1 0 -14 0\" /><path d=\"M21 21l-6 -6\" /></g>");

export function TableToolbar() {
  return (
    <div style={{ width: "1074px", height: "34px", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
      <div style={{ flexShrink: 0, borderRadius: "9px", background: "#f2f2f2", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ height: "30px", flexShrink: 0, borderRadius: "8px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ededed", display: "flex", flexDirection: "row", padding: "1px 13px 1px 13px", gap: "6px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Inter'", fontSize: "14px", fontWeight: 500, color: "#fd7116", lineHeight: "1.149999976158142" }}>All</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Inter'", fontSize: "12px", fontWeight: 500, color: "#fe9c5c" }}>180</p>
        </div>
        <div style={{ height: "30px", flexShrink: 0, borderRadius: "8px", display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "6px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Inter'", fontSize: "14px", fontWeight: 500, color: "#a6a6a6", lineHeight: "1.149999976158142" }}>Crown jewels</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Inter'", fontSize: "12px", fontWeight: 500, color: "#a6a6a6" }}>12</p>
        </div>
        <div style={{ height: "30px", flexShrink: 0, borderRadius: "8px", display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "6px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Inter'", fontSize: "14px", fontWeight: 500, color: "#a6a6a6", lineHeight: "1.149999976158142" }}>Critical</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Inter'", fontSize: "12px", fontWeight: 500, color: "#a6a6a6" }}>4</p>
        </div>
        <div style={{ height: "30px", flexShrink: 0, borderRadius: "8px", display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "6px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Inter'", fontSize: "14px", fontWeight: 500, color: "#a6a6a6", lineHeight: "1.149999976158142" }}>Fix ready</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Inter'", fontSize: "12px", fontWeight: 500, color: "#a6a6a6" }}>3</p>
        </div>
      </div>
      <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ width: "220px", height: "32px", flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e8e8e8, 0px 1px 2px 0px rgba(79, 79, 79, 0.12)", display: "flex", flexDirection: "row", padding: "1px 9px 1px 9px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <Search size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#979797", display: "block" }} />
          <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#979797" }}>Search paths…</p>
        </div>
        <div style={{ height: "34px", flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e5e5e5", display: "flex", flexDirection: "row", padding: "1px 11px 1px 11px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <AdjustmentsHorizontal size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#6c6c6c" }}>Filters</p>
        </div>
      </div>
    </div>
  );
}
