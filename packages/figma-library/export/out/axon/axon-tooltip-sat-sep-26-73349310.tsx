// Tooltip, Sat, Sep 26 (axon, Popovers) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist, Geist Mono. Icons: Ingot Icons.
import type { SVGProps } from "react";

// Ingot Icons used here, inlined so this file needs no icon package.
function icon(body: string) {
  return function Icon({ size = 24, strokeWidth = 1.5, ...p }: { size?: number; strokeWidth?: number } & SVGProps<SVGSVGElement>) {
    const html = strokeWidth == 1.5 ? body : body.replace(/stroke-width="([\d.]+)"/g, (_, w) => `stroke-width="${(Number(w) * Number(strokeWidth)) / 1.5}"`);
    return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden {...p} dangerouslySetInnerHTML={{ __html: html }} />;
  };
}
const AlertTriangle = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 9v4\" /><path d=\"M10.363 3.591l-8.106 13.534a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636 -2.87l-8.106 -13.536a1.914 1.914 0 0 0 -3.274 0\" /><path d=\"M12 16h.01\" /></g>");

export function TooltipSatSep26() {
  return (
    <div style={{ width: "258px", height: "129px", borderRadius: "8px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #f5f5f5, 0px 12px 22px 0px rgba(13, 13, 18, 0.08), 0px 1px 2px 0px rgba(79, 79, 79, 0.12)", display: "flex", flexDirection: "column", padding: "7px 11px 7px 11px", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
      <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>Sat, Sep 26</p>
      <div style={{ width: "236px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ width: "8px", height: "8px", flexShrink: 0, borderRadius: "2px", background: "#1b8ce8" }} />
        <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#222222", lineHeight: "20px" }}>Automated</p>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>3,904</p>
      </div>
      <div style={{ width: "236px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ width: "8px", height: "8px", flexShrink: 0, borderRadius: "2px", background: "#ffc89e" }} />
        <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#222222", lineHeight: "20px" }}>Reviewed</p>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>765</p>
      </div>
      <div style={{ width: "236px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ width: "8px", height: "8px", flexShrink: 0, borderRadius: "2px", background: "#e5484d" }} />
        <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#222222", lineHeight: "20px" }}>Failed</p>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#e5484d", lineHeight: "20px" }}>338</p>
      </div>
      <div style={{ width: "236px", flexShrink: 0, boxShadow: "inset 0 1px 0 0 #e9e9e9", display: "flex", flexDirection: "row", padding: "7px 0px 0px 0px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <AlertTriangle size={12} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#d99a00", display: "block" }} />
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#d99a00", lineHeight: "20px" }}>NetSuite outage 14:02–14:40</p>
      </div>
    </div>
  );
}
