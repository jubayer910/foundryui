// Top locations (mailpulse, Tables and lists) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist, Geist Mono. Icons: Ingot Icons.
import type { SVGProps } from "react";

// Ingot Icons used here, inlined so this file needs no icon package.
function icon(body: string) {
  return function Icon({ size = 24, strokeWidth = 1.5, ...p }: { size?: number; strokeWidth?: number } & SVGProps<SVGSVGElement>) {
    const html = strokeWidth == 1.5 ? body : body.replace(/stroke-width="([\d.]+)"/g, (_, w) => `stroke-width="${(Number(w) * Number(strokeWidth)) / 1.5}"`);
    return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden {...p} dangerouslySetInnerHTML={{ __html: html }} />;
  };
}
const Dots = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0\" /><path d=\"M11 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0\" /><path d=\"M18 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0\" /></g>");

export function TopLocations() {
  return (
    <div style={{ width: "324.7px", height: "180.4px", display: "flex", flexDirection: "column", gap: "12.8px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
      <div style={{ width: "324.7px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "3.7px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.6px", fontWeight: 500, color: "#000000" }}>Top locations</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.8px", fontWeight: 400, color: "#747474", letterSpacing: "-0.02em" }}>Share of active subscribers</p>
        </div>
        <Dots size={16.5} style={{ width: "16.5px", height: "16.5px", flexShrink: 0, color: "#c4c4c4", display: "block" }} />
      </div>
      <div style={{ width: "324.7px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "9.1px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ width: "324.7px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "9.1px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "22.9px", height: "18.3px", flexShrink: 0, borderRadius: "4.6px", background: "#f5f5f5", boxShadow: "inset 0 0 0 0.9px #ededed", display: "flex", flexDirection: "row", padding: "0.9px 0.9px 0.9px 0.9px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "12px", fontFamily: "'Geist Mono'", fontSize: "9.1px", fontWeight: 500, color: "#666d80" }}>US</p>
          </div>
          <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.8px", fontWeight: 500, color: "#222222" }}>United States</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.8px", fontWeight: 400, color: "#666d80" }}>6,412</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "right", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.8px", fontWeight: 400, color: "#989898" }}>35%</p>
        </div>
        <div style={{ width: "324.7px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "9.1px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "22.9px", height: "18.3px", flexShrink: 0, borderRadius: "4.6px", background: "#f5f5f5", boxShadow: "inset 0 0 0 0.9px #ededed", display: "flex", flexDirection: "row", padding: "0.9px 0.9px 0.9px 0.9px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "12px", fontFamily: "'Geist Mono'", fontSize: "9.1px", fontWeight: 500, color: "#666d80" }}>GB</p>
          </div>
          <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.8px", fontWeight: 500, color: "#222222" }}>United Kingdom</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.8px", fontWeight: 400, color: "#666d80" }}>2,210</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "right", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.8px", fontWeight: 400, color: "#989898" }}>12%</p>
        </div>
        <div style={{ width: "324.7px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "9.1px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "22.9px", height: "18.3px", flexShrink: 0, borderRadius: "4.6px", background: "#f5f5f5", boxShadow: "inset 0 0 0 0.9px #ededed", display: "flex", flexDirection: "row", padding: "0.9px 0.9px 0.9px 0.9px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "12px", fontFamily: "'Geist Mono'", fontSize: "9.1px", fontWeight: 500, color: "#666d80" }}>IN</p>
          </div>
          <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.8px", fontWeight: 500, color: "#222222" }}>India</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.8px", fontWeight: 400, color: "#666d80" }}>1,840</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "right", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.8px", fontWeight: 400, color: "#989898" }}>10%</p>
        </div>
        <div style={{ width: "324.7px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "9.1px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "22.9px", height: "18.3px", flexShrink: 0, borderRadius: "4.6px", background: "#f5f5f5", boxShadow: "inset 0 0 0 0.9px #ededed", display: "flex", flexDirection: "row", padding: "0.9px 0.9px 0.9px 0.9px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "12px", fontFamily: "'Geist Mono'", fontSize: "9.1px", fontWeight: 500, color: "#666d80" }}>DE</p>
          </div>
          <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.8px", fontWeight: 500, color: "#222222" }}>Germany</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.8px", fontWeight: 400, color: "#666d80" }}>1,105</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "right", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.8px", fontWeight: 400, color: "#989898" }}>6%</p>
        </div>
        <div style={{ width: "324.7px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "9.1px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "22.9px", height: "18.3px", flexShrink: 0, borderRadius: "4.6px", background: "#f5f5f5", boxShadow: "inset 0 0 0 0.9px #ededed", display: "flex", flexDirection: "row", padding: "0.9px 0.9px 0.9px 0.9px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "12px", fontFamily: "'Geist Mono'", fontSize: "9.1px", fontWeight: 500, color: "#666d80" }}>CA</p>
          </div>
          <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.8px", fontWeight: 500, color: "#222222" }}>Canada</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.8px", fontWeight: 400, color: "#666d80" }}>986</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "right", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.8px", fontWeight: 400, color: "#989898" }}>5%</p>
        </div>
      </div>
    </div>
  );
}
