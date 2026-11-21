// Related card (loopo, Cards and panels) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Ingot Icons.
import type { SVGProps } from "react";

// Ingot Icons used here, inlined so this file needs no icon package.
function icon(body: string) {
  return function Icon({ size = 24, strokeWidth = 1.5, ...p }: { size?: number; strokeWidth?: number } & SVGProps<SVGSVGElement>) {
    const html = strokeWidth == 1.5 ? body : body.replace(/stroke-width="([\d.]+)"/g, (_, w) => `stroke-width="${(Number(w) * Number(strokeWidth)) / 1.5}"`);
    return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden {...p} dangerouslySetInnerHTML={{ __html: html }} />;
  };
}
const BookBulk = icon("<path d=\"M3 19A9 9 0 0 1 12 19A9 9 0 0 1 21 19L21 6A9 9 0 0 0 12 6A9 9 0 0 0 3 6L3 19Z\" fill=\"currentColor\" fill-opacity=\"0.4\"/><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 6L12 19\"/></g>");
const ChevronRight = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M9 6l6 6l-6 6\" /></g>");

export function RelatedCard() {
  return (
    <div style={{ width: "266.74px", height: "302.9px", borderRadius: "24.1px", background: "#fefefe", boxShadow: "inset 0 0 0 1.1px #eaeaea", overflow: "hidden", display: "flex", flexDirection: "column", padding: "18.63px 18.63px 18.63px 18.63px", gap: "8.77px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
      <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.19px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "17.53px", fontWeight: 500, color: "#141417", lineHeight: "1.5" }}>Related articles</p>
      </div>
      <div style={{ alignSelf: "stretch", flexShrink: 0, borderRadius: "8.77px", display: "flex", flexDirection: "row", padding: "6.57px 6.57px 6.57px 6.57px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <BookBulk size={16.4} style={{ width: "16.43px", height: "16.43px", flexShrink: 0, color: "#0044ff", display: "block" }} />
        <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#222222" }}>Why is my instant payout delayed?</p>
        <ChevronRight size={14.2} style={{ width: "14.24px", height: "14.24px", flexShrink: 0, color: "#999999", display: "block" }} />
      </div>
      <div style={{ alignSelf: "stretch", flexShrink: 0, borderRadius: "8.77px", display: "flex", flexDirection: "row", padding: "6.57px 6.57px 6.57px 6.57px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <BookBulk size={16.4} style={{ width: "16.43px", height: "16.43px", flexShrink: 0, color: "#0044ff", display: "block" }} />
        <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#222222" }}>Payout timing by bank and country</p>
        <ChevronRight size={14.2} style={{ width: "14.24px", height: "14.24px", flexShrink: 0, color: "#999999", display: "block" }} />
      </div>
      <div style={{ alignSelf: "stretch", flexShrink: 0, borderRadius: "8.77px", display: "flex", flexDirection: "row", padding: "6.57px 6.57px 6.57px 6.57px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <BookBulk size={16.4} style={{ width: "16.43px", height: "16.43px", flexShrink: 0, color: "#0044ff", display: "block" }} />
        <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#222222" }}>Add funds to your Loopo balance</p>
        <ChevronRight size={14.2} style={{ width: "14.24px", height: "14.24px", flexShrink: 0, color: "#999999", display: "block" }} />
      </div>
      <div style={{ alignSelf: "stretch", flexShrink: 0, borderRadius: "8.77px", display: "flex", flexDirection: "row", padding: "6.57px 6.57px 6.57px 6.57px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <BookBulk size={16.4} style={{ width: "16.43px", height: "16.43px", flexShrink: 0, color: "#0044ff", display: "block" }} />
        <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#222222" }}>Issue a full or partial refund</p>
        <ChevronRight size={14.2} style={{ width: "14.24px", height: "14.24px", flexShrink: 0, color: "#999999", display: "block" }} />
      </div>
    </div>
  );
}
