// Compare to menu (loopo, Menus) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Ingot Icons.
import type { SVGProps } from "react";

// Ingot Icons used here, inlined so this file needs no icon package.
function icon(body: string) {
  return function Icon({ size = 24, strokeWidth = 1.5, ...p }: { size?: number; strokeWidth?: number } & SVGProps<SVGSVGElement>) {
    const html = strokeWidth == 1.5 ? body : body.replace(/stroke-width="([\d.]+)"/g, (_, w) => `stroke-width="${(Number(w) * Number(strokeWidth)) / 1.5}"`);
    return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden {...p} dangerouslySetInnerHTML={{ __html: html }} />;
  };
}
const BanBulk = icon("<path d=\"M3 12A9 9 0 1 0 21 12 9 9 0 1 0 3 12\" fill=\"currentColor\" fill-opacity=\"0.4\"/><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M5.7 5.7L18.3 18.3\"/></g>");
const CalendarBulk = icon("<path d=\"M4 7A2 2 0 0 1 6 5H18A2 2 0 0 1 20 7V19A2 2 0 0 1 18 21H6A2 2 0 0 1 4 19V7\" fill=\"currentColor\" fill-opacity=\"0.4\"/><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 11H20\"/></g><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M16 3V7\"/><path d=\"M8 3V7\"/></g>");
const CalendarPlusBulk = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12.5 21h-6.5a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v5\" /><path d=\"M16 3v4\" /><path d=\"M8 3v4\" /><path d=\"M4 11h16\" /><path d=\"M16 19h6\" /><path d=\"M19 16v6\" /></g>");
const RepeatBulk = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 12v-3a3 3 0 0 1 3 -3h13m-3 -3l3 3l-3 3\" /><path d=\"M20 12v3a3 3 0 0 1 -3 3h-13m3 3l-3 -3l3 -3\" /></g>");
const Check = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M5 12l5 5l10 -10\" /></g>");
const ChevronRight = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M9 6l6 6l-6 6\" /></g>");

export function CompareToMenu() {
  return (
    <div style={{ width: "348.41px", height: "192.33px", borderRadius: "10.96px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8, 0px 17.53px 35.06px -13.15px rgba(13, 13, 18, 0.1), 0px 1.1px 2.19px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "column", padding: "5.48px 5.48px 5.48px 5.48px", gap: "1.1px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
      <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", padding: "6.57px 8.77px 4.38px 8.77px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#a6a6a6", textTransform: "uppercase" }}>Compare to</p>
      </div>
      <div style={{ width: "339.64px", height: "35.06px", flexShrink: 0, borderRadius: "7.67px", display: "flex", flexDirection: "row", padding: "0px 8.77px 0px 8.77px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <CalendarBulk size={16.4} style={{ width: "16.43px", height: "16.43px", flexShrink: 0, color: "#141b34", display: "block" }} />
        <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 500, color: "#000000" }}>Previous period</p>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#999999" }}>Oct 16 – Nov 14</p>
        <Check size={15.3} style={{ width: "15.34px", height: "15.34px", flexShrink: 0, color: "#fd4b23", display: "block" }} />
      </div>
      <div style={{ width: "339.64px", height: "35.06px", flexShrink: 0, borderRadius: "7.67px", background: "#f4f4f5", boxShadow: "inset 0 0 0 1.1px #e8e8eb", display: "flex", flexDirection: "row", padding: "0px 8.77px 0px 8.77px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <RepeatBulk size={16.4} style={{ width: "16.43px", height: "16.43px", flexShrink: 0, color: "#141b34", display: "block" }} />
        <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 500, color: "#000000" }}>Same period last year</p>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#999999" }}>Nov 15 – Dec 14, ’25</p>
      </div>
      <div style={{ width: "339.64px", height: "35.06px", flexShrink: 0, borderRadius: "7.67px", display: "flex", flexDirection: "row", padding: "0px 8.77px 0px 8.77px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <CalendarPlusBulk size={16.4} style={{ width: "16.43px", height: "16.43px", flexShrink: 0, color: "#141b34", display: "block" }} />
        <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 400, color: "#24322e" }}>Custom…</p>
        <ChevronRight size={15.3} style={{ width: "15.34px", height: "15.34px", flexShrink: 0, color: "#999999", display: "block" }} />
      </div>
      <div style={{ width: "339.64px", flexShrink: 0, display: "flex", flexDirection: "column", padding: "3.29px 0px 3.29px 0px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ alignSelf: "stretch", height: "1.1px", flexShrink: 0, background: "#eeeeee" }} />
      </div>
      <div style={{ width: "339.64px", height: "35.06px", flexShrink: 0, borderRadius: "7.67px", display: "flex", flexDirection: "row", padding: "0px 8.77px 0px 8.77px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <BanBulk size={16.4} style={{ width: "16.43px", height: "16.43px", flexShrink: 0, color: "#141b34", display: "block" }} />
        <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 400, color: "#24322e" }}>No comparison</p>
      </div>
    </div>
  );
}
