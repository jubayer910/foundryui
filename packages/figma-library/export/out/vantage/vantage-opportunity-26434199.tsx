// Opportunity (vantage, Cards and panels) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Ingot Icons.
import type { SVGProps } from "react";

// Ingot Icons used here, inlined so this file needs no icon package.
function icon(body: string) {
  return function Icon({ size = 24, strokeWidth = 1.5, ...p }: { size?: number; strokeWidth?: number } & SVGProps<SVGSVGElement>) {
    const html = strokeWidth == 1.5 ? body : body.replace(/stroke-width="([\d.]+)"/g, (_, w) => `stroke-width="${(Number(w) * Number(strokeWidth)) / 1.5}"`);
    return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden {...p} dangerouslySetInnerHTML={{ __html: html }} />;
  };
}
const Bulb = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7\" /><path d=\"M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3\" /><path d=\"M9.7 17l4.6 0\" /></g>");

export function Opportunity() {
  return (
    <div style={{ width: "375px", height: "76px", borderRadius: "8px", background: "rgba(123, 91, 255, 0.07)", boxShadow: "inset 0 0 0 1px rgba(123, 91, 255, 0.22)", display: "flex", flexDirection: "row", padding: "11px 13px 11px 13px", gap: "10px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
      <Bulb size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#9e7bff", display: "block" }} />
      <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#c9b8ff", lineHeight: "1.399999976158142" }}>
        <span style={{ fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#c9b8ff", lineHeight: "1.399999976158142" }}>Lifting the 8 legs below average to 30.58% adds ≈ 35 MG1</span>
        <span style={{ fontFamily: "'Geist'", fontSize: "13px", fontWeight: 400, color: "#a99bd6", lineHeight: "1.399999976158142" }}>{" a month — Alberto & Ciany alone +13, Luis & Jackie +8."}</span>
      </p>
    </div>
  );
}
