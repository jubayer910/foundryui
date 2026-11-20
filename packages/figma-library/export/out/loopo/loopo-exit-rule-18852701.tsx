// Exit rule (loopo, Cards and panels) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Ingot Icons.
import type { SVGProps } from "react";

// Ingot Icons used here, inlined so this file needs no icon package.
function icon(body: string) {
  return function Icon({ size = 24, strokeWidth = 1.5, ...p }: { size?: number; strokeWidth?: number } & SVGProps<SVGSVGElement>) {
    const html = strokeWidth == 1.5 ? body : body.replace(/stroke-width="([\d.]+)"/g, (_, w) => `stroke-width="${(Number(w) * Number(strokeWidth)) / 1.5}"`);
    return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden {...p} dangerouslySetInnerHTML={{ __html: html }} />;
  };
}
const ShoppingBagBulk = icon("<path d=\"M6.331 8H17.67A2 2 0 0 1 19.647000000000002 10.304L18.392000000000003 18.456A3 3 0 0 1 15.426000000000002 21H8.574000000000002A3 3 0 0 1 5.609000000000002 18.456L4.354000000000002 10.304A2 2 0 0 1 6.331000000000002 8\" fill=\"currentColor\" fill-opacity=\"0.4\"/><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M9 11V6A3 3 0 0 1 15 6V11\"/></g>");

export function ExitRule() {
  return (
    <div style={{ width: "233.1px", height: "34.3px", borderRadius: "8.8px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8", display: "flex", flexDirection: "row", padding: "7.7px 12.1px 7.7px 12.1px", gap: "6.6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
      <ShoppingBagBulk size={16.4} style={{ width: "16.4px", height: "16.4px", flexShrink: 0, color: "#7d818c", display: "block" }} />
      <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 400, color: "#747474" }}>
        <span style={{ fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 400, color: "#747474" }}>{"Exit when "}</span>
        <span style={{ fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 500, color: "#222222" }}>an order is placed</span>
      </p>
    </div>
  );
}
