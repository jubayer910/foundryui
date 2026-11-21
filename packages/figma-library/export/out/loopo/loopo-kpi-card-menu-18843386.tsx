// KPI card menu (loopo, Menus) from Ingot UI (ingotui.com).
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
const EyeBulk = icon("<path d=\"M21 12C18.6 16 15.6 18 12 18 8.4 18 5.4 16 3 12 5.4 8 8.4 6 12 6 15.6 6 18.6 8 21 12\" fill=\"currentColor\" fill-opacity=\"0.4\"/><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M10 12A2 2 0 1 0 14 12 2 2 0 0 0 10 12\"/></g>");
const EyeOffBulk = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M10.585 10.587a2 2 0 0 0 2.829 2.828\" /><path d=\"M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87\" /><path d=\"M3 3l18 18\" /></g>");
const PinBulk = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M15 4.5l-4 4l-4 1.5l-1.5 1.5l7 7l1.5 -1.5l1.5 -4l4 -4\" /><path d=\"M9 15l-4.5 4.5\" /><path d=\"M14.5 4l5.5 5.5\" /></g>");
const TargetBulk = icon("<path d=\"M3 12A9 9 0 1 0 21 12 9 9 0 1 0 3 12\" fill=\"currentColor\" fill-opacity=\"0.4\"/><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M11 12A1 1 0 1 0 13 12 1 1 0 1 0 11 12\"/><path d=\"M7 12A5 5 0 1 0 17 12 5 5 0 1 0 7 12\"/></g>");

export function KPICardMenu() {
  return (
    <div style={{ width: "252px", height: "199.4px", borderRadius: "11px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8, 0px 17.5px 35.1px -13.1px rgba(13, 13, 18, 0.1), 0px 1.1px 2.2px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "column", padding: "5.5px 5.5px 5.5px 5.5px", gap: "1.1px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
      <div style={{ alignSelf: "stretch", height: "35.1px", flexShrink: 0, borderRadius: "7.7px", background: "#f4f4f5", boxShadow: "inset 0 0 0 1.1px #e8e8eb", display: "flex", flexDirection: "row", padding: "0px 8.8px 0px 8.8px", gap: "8.8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <EyeBulk size={16.4} style={{ width: "16.4px", height: "16.4px", flexShrink: 0, color: "#141b34", display: "block" }} />
        <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.3px", fontWeight: 500, color: "#000000" }}>View revenue details</p>
      </div>
      <div style={{ alignSelf: "stretch", height: "35.1px", flexShrink: 0, borderRadius: "7.7px", display: "flex", flexDirection: "row", padding: "0px 8.8px 0px 8.8px", gap: "8.8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <ArrowUpDownBulk size={16.4} style={{ width: "16.4px", height: "16.4px", flexShrink: 0, color: "#141b34", display: "block" }} />
        <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.3px", fontWeight: 400, color: "#24322e" }}>Compare periods</p>
      </div>
      <div style={{ alignSelf: "stretch", height: "35.1px", flexShrink: 0, borderRadius: "7.7px", display: "flex", flexDirection: "row", padding: "0px 8.8px 0px 8.8px", gap: "8.8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <TargetBulk size={16.4} style={{ width: "16.4px", height: "16.4px", flexShrink: 0, color: "#141b34", display: "block" }} />
        <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.3px", fontWeight: 400, color: "#24322e" }}>Set a monthly goal</p>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.1px", fontWeight: 400, color: "#999999" }}>$50k</p>
      </div>
      <div style={{ alignSelf: "stretch", height: "35.1px", flexShrink: 0, borderRadius: "7.7px", display: "flex", flexDirection: "row", padding: "0px 8.8px 0px 8.8px", gap: "8.8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <PinBulk size={16.4} style={{ width: "16.4px", height: "16.4px", flexShrink: 0, color: "#141b34", display: "block" }} />
        <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.3px", fontWeight: 400, color: "#24322e" }}>Pin to report</p>
      </div>
      <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", padding: "3.3px 0px 3.3px 0px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ alignSelf: "stretch", height: "1.1px", flexShrink: 0, background: "#eeeeee" }} />
      </div>
      <div style={{ alignSelf: "stretch", height: "35.1px", flexShrink: 0, borderRadius: "7.7px", display: "flex", flexDirection: "row", padding: "0px 8.8px 0px 8.8px", gap: "8.8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <EyeOffBulk size={16.4} style={{ width: "16.4px", height: "16.4px", flexShrink: 0, color: "#141b34", display: "block" }} />
        <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.3px", fontWeight: 400, color: "#24322e" }}>Hide from Overview</p>
      </div>
    </div>
  );
}
