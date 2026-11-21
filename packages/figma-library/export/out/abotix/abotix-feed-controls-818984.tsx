// Feed controls (abotix, Charts) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Ingot Icons.
import type { SVGProps } from "react";

// Ingot Icons used here, inlined so this file needs no icon package.
function icon(body: string) {
  return function Icon({ size = 24, strokeWidth = 1.5, ...p }: { size?: number; strokeWidth?: number } & SVGProps<SVGSVGElement>) {
    const html = strokeWidth == 1.5 ? body : body.replace(/stroke-width="([\d.]+)"/g, (_, w) => `stroke-width="${(Number(w) * Number(strokeWidth)) / 1.5}"`);
    return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden {...p} dangerouslySetInnerHTML={{ __html: html }} />;
  };
}
const AdjustmentsHorizontal = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 6a2 2 0 1 0 4 0a2 2 0 1 0 -4 0\" /><path d=\"M4 6l8 0\" /><path d=\"M16 6l4 0\" /><path d=\"M6 12a2 2 0 1 0 4 0a2 2 0 1 0 -4 0\" /><path d=\"M4 12l2 0\" /><path d=\"M10 12l10 0\" /><path d=\"M15 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0\" /><path d=\"M4 18l11 0\" /><path d=\"M19 18l1 0\" /></g>");
const ChevronRight = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M9 6l6 6l-6 6\" /></g>");

export function FeedControls() {
  return (
    <div style={{ width: "129px", height: "32px", display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
      <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px rgba(232, 232, 232, 0.63), 0px 2.5px 2.5px 0px rgba(0, 0, 0, 0.05), inset 0px 2.5px 2.5px 0px rgba(255, 255, 255, 0.29)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
        <AdjustmentsHorizontal size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#555555", display: "block" }} />
      </div>
      <div style={{ height: "32px", flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px rgba(221, 221, 221, 0.4), 0px 0px 1px 0px rgba(0, 0, 0, 0.25)", display: "flex", flexDirection: "row", padding: "1px 11px 1px 11px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "51px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#4f4f51" }}>View all</p>
        <ChevronRight size={14} strokeWidth={1.51} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#4f4f51", display: "block" }} />
      </div>
    </div>
  );
}
