// KPI card menu (mailpulse, Menus) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Ingot Icons.
import type { SVGProps } from "react";

// Ingot Icons used here, inlined so this file needs no icon package.
function icon(body: string) {
  return function Icon({ size = 24, strokeWidth = 1.5, ...p }: { size?: number; strokeWidth?: number } & SVGProps<SVGSVGElement>) {
    const html = strokeWidth == 1.5 ? body : body.replace(/stroke-width="([\d.]+)"/g, (_, w) => `stroke-width="${(Number(w) * Number(strokeWidth)) / 1.5}"`);
    return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden {...p} dangerouslySetInnerHTML={{ __html: html }} />;
  };
}
const ArrowUpDownBulk = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"m21 16-4 4-4-4\" /><path d=\"M17 20V4\" /><path d=\"m3 8 4-4 4 4\" /><path d=\"M7 4v16\" /></g>");
const ChartLineBulk = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 19l16 0\" /><path d=\"M4 15l4 -6l4 2l4 -5l4 4\" /></g>");
const DownloadBulk = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2\" /><path d=\"M7 11l5 5l5 -5\" /><path d=\"M12 4l0 12\" /></g>");
const EyeBulk = icon("<path d=\"M21 12C18.6 16 15.6 18 12 18 8.4 18 5.4 16 3 12 5.4 8 8.4 6 12 6 15.6 6 18.6 8 21 12\" fill=\"currentColor\" fill-opacity=\"0.4\"/><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M10 12A2 2 0 1 0 14 12 2 2 0 0 0 10 12\"/></g>");
const FileBulk = icon("<path d=\"M17 21H7A2 2 0 0 1 5 19V5A2 2 0 0 1 7 3H14L19 8V19A2 2 0 0 1 17 21\" fill=\"currentColor\" fill-opacity=\"0.4\"/><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M14 3V7A1 1 0 0 0 15 8H19\"/></g>");
const PinBulk = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M15 4.5l-4 4l-4 1.5l-1.5 1.5l7 7l1.5 -1.5l1.5 -4l4 -4\" /><path d=\"M9 15l-4.5 4.5\" /><path d=\"M14.5 4l5.5 5.5\" /></g>");

export function KPICardMenu() {
  return (
    <div style={{ width: "236px", height: "220.48px", borderRadius: "9.14px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8, 0px 14.62px 29.24px -10.97px rgba(13, 13, 18, 0.1), 0px 0.91px 1.83px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "column", padding: "4.57px 4.57px 4.57px 4.57px", gap: "0.91px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
      <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", padding: "5.48px 7.31px 3.66px 7.31px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#a6a6a6", letterSpacing: "0.02em", textTransform: "uppercase" }}>Active subscribers</p>
      </div>
      <div style={{ alignSelf: "stretch", height: "29.24px", flexShrink: 0, borderRadius: "5.48px", background: "#f4f4f5", boxShadow: "inset 0 0 0 0.91px #e8e8eb", display: "flex", flexDirection: "row", padding: "0px 7.31px 0px 7.31px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <ChartLineBulk size={12.8} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#141b34", display: "block" }} />
        <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#000000" }}>View details</p>
      </div>
      <div style={{ alignSelf: "stretch", height: "29.24px", flexShrink: 0, borderRadius: "5.48px", display: "flex", flexDirection: "row", padding: "0px 7.31px 0px 7.31px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <FileBulk size={12.8} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#141b34", display: "block" }} />
        <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#24322e" }}>Add to report</p>
      </div>
      <div style={{ alignSelf: "stretch", height: "29.24px", flexShrink: 0, borderRadius: "5.48px", display: "flex", flexDirection: "row", padding: "0px 7.31px 0px 7.31px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <DownloadBulk size={12.8} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#141b34", display: "block" }} />
        <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#24322e" }}>Download CSV</p>
      </div>
      <div style={{ alignSelf: "stretch", height: "29.24px", flexShrink: 0, borderRadius: "5.48px", display: "flex", flexDirection: "row", padding: "0px 7.31px 0px 7.31px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <PinBulk size={12.8} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#141b34", display: "block" }} />
        <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#24322e" }}>Pin to top</p>
      </div>
      <div style={{ alignSelf: "stretch", height: "29.24px", flexShrink: 0, borderRadius: "5.48px", display: "flex", flexDirection: "row", padding: "0px 7.31px 0px 7.31px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <ArrowUpDownBulk size={12.8} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#141b34", display: "block" }} />
        <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#24322e" }}>Show trend</p>
        <div style={{ width: "27.42px", height: "16.45px", flexShrink: 0, borderRadius: "8.22px", background: "#7c53f9", position: "relative" }}>
          <svg style={{ position: "absolute", left: "12.79px", top: "1.83px", width: "12.79px", height: "12.79px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="12.79" height="12.79" viewBox="0 0 12.79 12.79" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M12.79 6.395 C12.79 9.92686 9.92686 12.79 6.395 12.79 C2.86314 12.79 0 9.92686 0 6.395 C0 2.86314 2.86314 0 6.395 0 C9.92686 0 12.79 2.86314 12.79 6.395 Z" fill="#ffffff"/></svg>
        </div>
      </div>
      <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", padding: "2.74px 0px 2.74px 0px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ alignSelf: "stretch", height: "0.91px", flexShrink: 0, background: "#eeeeee" }} />
      </div>
      <div style={{ alignSelf: "stretch", height: "29.24px", flexShrink: 0, borderRadius: "5.48px", display: "flex", flexDirection: "row", padding: "0px 7.31px 0px 7.31px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <EyeBulk size={12.8} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#141b34", display: "block" }} />
        <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#24322e" }}>Hide from Overview</p>
      </div>
    </div>
  );
}
