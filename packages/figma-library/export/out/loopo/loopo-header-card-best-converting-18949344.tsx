// Header card, Best converting (loopo, Headers) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Ingot Icons.
import type { SVGProps } from "react";

// Ingot Icons used here, inlined so this file needs no icon package.
function icon(body: string) {
  return function Icon({ size = 24, strokeWidth = 1.5, ...p }: { size?: number; strokeWidth?: number } & SVGProps<SVGSVGElement>) {
    const html = strokeWidth == 1.5 ? body : body.replace(/stroke-width="([\d.]+)"/g, (_, w) => `stroke-width="${(Number(w) * Number(strokeWidth)) / 1.5}"`);
    return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden {...p} dangerouslySetInnerHTML={{ __html: html }} />;
  };
}
const DotsVertical = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M11 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0\" /><path d=\"M11 19a1 1 0 1 0 2 0a1 1 0 1 0 -2 0\" /><path d=\"M11 5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0\" /></g>");

export function HeaderCardBestConverting() {
  return (
    <div style={{ width: "345.1px", height: "77px", display: "flex", flexDirection: "row", padding: "0px 8.8px 0px 8.8px", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
      <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "11px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "17.5px", fontWeight: 500, color: "#141417", lineHeight: "1.5" }}>Best converting</p>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8.8px", justifyContent: "flex-start", alignItems: "flex-end", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "40px", fontFamily: "'Geist'", fontSize: "30.7px", fontWeight: 500, color: "#222222" }}>2.7%</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.1px", fontWeight: 400, color: "#6b6b70" }}>avg. conversion · 30 days</p>
        </div>
      </div>
      <div style={{ width: "37.3px", height: "37.3px", flexShrink: 0, borderRadius: "8.8px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8, 0px 1.1px 1.1px 0px rgba(13, 13, 18, 0.08)", display: "flex", flexDirection: "row", gap: "6.6px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
        <DotsVertical size={19.7} style={{ width: "19.7px", height: "19.7px", flexShrink: 0, color: "#c4c4c4", display: "block" }} />
      </div>
    </div>
  );
}
