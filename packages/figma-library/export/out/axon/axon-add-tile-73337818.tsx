// Add tile (axon, Cards and panels) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Ingot Icons.
import type { SVGProps } from "react";

// Ingot Icons used here, inlined so this file needs no icon package.
function icon(body: string) {
  return function Icon({ size = 24, strokeWidth = 1.5, ...p }: { size?: number; strokeWidth?: number } & SVGProps<SVGSVGElement>) {
    const html = strokeWidth == 1.5 ? body : body.replace(/stroke-width="([\d.]+)"/g, (_, w) => `stroke-width="${(Number(w) * Number(strokeWidth)) / 1.5}"`);
    return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden {...p} dangerouslySetInnerHTML={{ __html: html }} />;
  };
}
const Plus = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 5l0 14\" /><path d=\"M5 12l14 0\" /></g>");

export function AddTile() {
  return (
    <div style={{ width: "276.8px", height: "153px", borderRadius: "12px", background: "#f9f9f9", boxShadow: "inset 0 0 0 1px #dfe0e5", display: "flex", flexDirection: "column", padding: "1px 1px 1px 1px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
      <div style={{ width: "36px", height: "36px", flexShrink: 0, borderRadius: "10px", background: "#ffffff", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
        <Plus size={18} style={{ width: "18px", height: "18px", flexShrink: 0, color: "#1b8ce8", display: "block" }} />
      </div>
      <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>Add connector</p>
      <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>140+ apps, or any REST API</p>
    </div>
  );
}
