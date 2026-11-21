// Export menu (loopo, Menus) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist, Geist Mono. Icons: Ingot Icons.
import type { SVGProps } from "react";

// Ingot Icons used here, inlined so this file needs no icon package.
function icon(body: string) {
  return function Icon({ size = 24, strokeWidth = 1.5, ...p }: { size?: number; strokeWidth?: number } & SVGProps<SVGSVGElement>) {
    const html = strokeWidth == 1.5 ? body : body.replace(/stroke-width="([\d.]+)"/g, (_, w) => `stroke-width="${(Number(w) * Number(strokeWidth)) / 1.5}"`);
    return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden {...p} dangerouslySetInnerHTML={{ __html: html }} />;
  };
}
const CalendarPlusBulk = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12.5 21h-6.5a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v5\" /><path d=\"M16 3v4\" /><path d=\"M8 3v4\" /><path d=\"M4 11h16\" /><path d=\"M16 19h6\" /><path d=\"M19 16v6\" /></g>");
const FileTypeCsvBulk = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M14 3v4a1 1 0 0 0 1 1h4\" /><path d=\"M5 12v-7a2 2 0 0 1 2 -2h7l5 5v4\" /><path d=\"M7 16.5a1.5 1.5 0 0 0 -3 0v3a1.5 1.5 0 0 0 3 0\" /><path d=\"M10 20.25c0 .414 .336 .75 .75 .75h1.25a1 1 0 0 0 1 -1v-1a1 1 0 0 0 -1 -1h-1a1 1 0 0 1 -1 -1v-1a1 1 0 0 1 1 -1h1.25a.75 .75 0 0 1 .75 .75\" /><path d=\"M16 15l2 6l2 -6\" /></g>");
const FileTypePdfBulk = icon("<path d=\"M11 15V21H12A2 2 0 0 0 14 19V17A2 2 0 0 0 12 15H11\" fill=\"currentColor\" fill-opacity=\"0.4\"/><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M14 3v4a1 1 0 0 0 1 1h4\" /><path d=\"M5 12v-7a2 2 0 0 1 2 -2h7l5 5v4\" /><path d=\"M5 18h1.5a1.5 1.5 0 0 0 0 -3h-1.5v6\" /><path d=\"M17 18h2\" /><path d=\"M20 15h-3v6\" /><path d=\"M11 15v6h1a2 2 0 0 0 2 -2v-2a2 2 0 0 0 -2 -2h-1\" /></g>");
const LinkBulk = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M9 15l6 -6\" /><path d=\"M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464\" /><path d=\"M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463\" /></g>");
const ChevronRight = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M9 6l6 6l-6 6\" /></g>");

export function ExportMenu() {
  return (
    <div style={{ width: "295.82px", height: "228.49px", borderRadius: "10.96px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8, 0px 17.53px 35.06px -13.15px rgba(13, 13, 18, 0.1), 0px 1.1px 2.19px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "column", padding: "5.48px 5.48px 5.48px 5.48px", gap: "1.1px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
      <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "6.57px 8.77px 4.38px 8.77px", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#a6a6a6", textTransform: "uppercase" }}>Export this view</p>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#999999" }}>Nov 15 – Dec 14</p>
      </div>
      <div style={{ alignSelf: "stretch", height: "35.06px", flexShrink: 0, borderRadius: "7.67px", background: "#f4f4f5", boxShadow: "inset 0 0 0 1.1px #e8e8eb", display: "flex", flexDirection: "row", padding: "0px 8.77px 0px 8.77px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <FileTypePdfBulk size={16.4} style={{ width: "16.43px", height: "16.43px", flexShrink: 0, color: "#141b34", display: "block" }} />
        <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 500, color: "#000000" }}>PDF report</p>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#999999" }}>A4 · 2 pages</p>
      </div>
      <div style={{ alignSelf: "stretch", height: "35.06px", flexShrink: 0, borderRadius: "7.67px", display: "flex", flexDirection: "row", padding: "0px 8.77px 0px 8.77px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <FileTypeCsvBulk size={16.4} style={{ width: "16.43px", height: "16.43px", flexShrink: 0, color: "#141b34", display: "block" }} />
        <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 400, color: "#24322e" }}>CSV — KPIs & chart data</p>
      </div>
      <div style={{ alignSelf: "stretch", height: "35.06px", flexShrink: 0, borderRadius: "7.67px", display: "flex", flexDirection: "row", padding: "0px 8.77px 0px 8.77px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <svg width={16.4} height={16.4} viewBox="0 0 24 24" style={{ width: "16.43px", height: "16.43px", flexShrink: 0, color: "#0f9d58", display: "block" }}><path d="M11.318 12.545H7.91v-1.909h3.41v1.91zM14.728 0v6h6l-6-6zm1.363 10.636h-3.41v1.91h3.41v-1.91zm0 3.273h-3.41v1.91h3.41v-1.91zM20.727 6.5v15.864c0 .904-.732 1.636-1.636 1.636H4.909a1.636 1.636 0 0 1-1.636-1.636V1.636C3.273.732 4.005 0 4.909 0h9.318v6.5h6.5zm-3.273 2.773H6.545v7.909h10.91v-7.91zm-6.136 4.636H7.91v1.91h3.41v-1.91z" fill="currentColor" /></svg>
        <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 400, color: "#24322e" }}>Google Sheets</p>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#999999" }}>Live sync</p>
      </div>
      <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", padding: "3.29px 0px 3.29px 0px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ alignSelf: "stretch", height: "1.1px", flexShrink: 0, background: "#eeeeee" }} />
      </div>
      <div style={{ alignSelf: "stretch", height: "35.06px", flexShrink: 0, borderRadius: "7.67px", display: "flex", flexDirection: "row", padding: "0px 8.77px 0px 8.77px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <LinkBulk size={16.4} style={{ width: "16.43px", height: "16.43px", flexShrink: 0, color: "#141b34", display: "block" }} />
        <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 400, color: "#24322e" }}>Copy share link</p>
        <div style={{ flexShrink: 0, borderRadius: "4.38px", background: "#f5f5f5", boxShadow: "inset 0 0 0 1.1px #e8e8e8", display: "flex", flexDirection: "row", padding: "2.2px 6.58px 2.2px 6.58px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "16px", fontFamily: "'Geist Mono'", fontSize: "12.05px", fontWeight: 400, color: "#6c6c6c" }}>⌘ L</p>
        </div>
      </div>
      <div style={{ alignSelf: "stretch", height: "35.06px", flexShrink: 0, borderRadius: "7.67px", display: "flex", flexDirection: "row", padding: "0px 8.77px 0px 8.77px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <CalendarPlusBulk size={16.4} style={{ width: "16.43px", height: "16.43px", flexShrink: 0, color: "#141b34", display: "block" }} />
        <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 400, color: "#24322e" }}>Schedule email report</p>
        <ChevronRight size={15.3} style={{ width: "15.34px", height: "15.34px", flexShrink: 0, color: "#999999", display: "block" }} />
      </div>
    </div>
  );
}
