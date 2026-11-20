// Certificate wrap (mailpulse, Cards and panels) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Ingot Icons.
import type { SVGProps } from "react";

// Ingot Icons used here, inlined so this file needs no icon package.
function icon(body: string) {
  return function Icon({ size = 24, strokeWidth = 1.5, ...p }: { size?: number; strokeWidth?: number } & SVGProps<SVGSVGElement>) {
    const html = strokeWidth == 1.5 ? body : body.replace(/stroke-width="([\d.]+)"/g, (_, w) => `stroke-width="${(Number(w) * Number(strokeWidth)) / 1.5}"`);
    return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden {...p} dangerouslySetInnerHTML={{ __html: html }} />;
  };
}
const AwardBulk = icon("<path d=\"M6 9A6 6 0 1 0 18 9 6 6 0 1 0 6 9\" fill=\"currentColor\" fill-opacity=\"0.4\"/><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 15L15.4 20.89 16.998 17.657 20.596 17.889 17.196 12\"/><path d=\"M6.802 12L3.4019999999999997 17.89 7 17.657 8.598 20.889 11.998000000000001 15\"/></g>");

export function CertificateWrap() {
  return (
    <div style={{ width: "336.3px", height: "58.9px", display: "flex", flexDirection: "column", padding: "0px 9.1px 0px 9.1px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
      <div style={{ alignSelf: "stretch", flexShrink: 0, borderRadius: "9.1px", background: "#fafafa", boxShadow: "inset 0 0 0 0.9px #ededed", display: "flex", flexDirection: "row", padding: "11.9px 11.9px 11.9px 11.9px", gap: "11px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ width: "29.2px", height: "29.2px", flexShrink: 0, borderRadius: "7.3px", background: "rgba(21, 179, 146, 0.12)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <AwardBulk size={16.5} style={{ width: "16.5px", height: "16.5px", flexShrink: 0, color: "#15b392", display: "block" }} />
        </div>
        <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "7.3px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.9px", fontWeight: 500, color: "#222222" }}>Finish 5 more lessons to earn your certificate</p>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "2.7px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "12.8px", height: "12.8px", flexShrink: 0, borderRadius: "3.7px", background: "rgba(124, 83, 249, 0.7)" }} />
            <div style={{ width: "12.8px", height: "12.8px", flexShrink: 0, borderRadius: "3.7px", background: "rgba(124, 83, 249, 0.7)" }} />
            <div style={{ width: "12.8px", height: "12.8px", flexShrink: 0, borderRadius: "3.7px", background: "rgba(124, 83, 249, 0.7)" }} />
            <div style={{ width: "12.8px", height: "12.8px", flexShrink: 0, borderRadius: "3.7px", background: "rgba(124, 83, 249, 0.35)" }} />
            <div style={{ width: "12.8px", height: "12.8px", flexShrink: 0, borderRadius: "3.7px", background: "#f4f4f5" }} />
            <div style={{ width: "12.8px", height: "12.8px", flexShrink: 0, borderRadius: "3.7px", background: "#f4f4f5" }} />
            <div style={{ width: "12.8px", height: "12.8px", flexShrink: 0, borderRadius: "3.7px", background: "#f4f4f5" }} />
            <div style={{ width: "12.8px", height: "12.8px", flexShrink: 0, borderRadius: "3.7px", background: "#f4f4f5" }} />
          </div>
        </div>
      </div>
    </div>
  );
}
