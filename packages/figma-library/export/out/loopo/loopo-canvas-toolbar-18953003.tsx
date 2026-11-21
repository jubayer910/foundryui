// Canvas toolbar (loopo, Navigation) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Ingot Icons.
import type { SVGProps } from "react";

// Ingot Icons used here, inlined so this file needs no icon package.
function icon(body: string) {
  return function Icon({ size = 24, strokeWidth = 1.5, ...p }: { size?: number; strokeWidth?: number } & SVGProps<SVGSVGElement>) {
    const html = strokeWidth == 1.5 ? body : body.replace(/stroke-width="([\d.]+)"/g, (_, w) => `stroke-width="${(Number(w) * Number(strokeWidth)) / 1.5}"`);
    return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden {...p} dangerouslySetInnerHTML={{ __html: html }} />;
  };
}
const DeviceLaptopBulk = icon("<path d=\"M5 7A1 1 0 0 1 6 6H18A1 1 0 0 1 19 7V15A1 1 0 0 1 18 16H6A1 1 0 0 1 5 15L5 7\" fill=\"currentColor\" fill-opacity=\"0.4\"/><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 19L21 19\"/></g>");
const DeviceMobileBulk = icon("<path d=\"M6 5A2 2 0 0 1 8 3H16A2 2 0 0 1 18 5V19A2 2 0 0 1 16 21H8A2 2 0 0 1 6 19V5\" fill=\"currentColor\" fill-opacity=\"0.4\"/><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M11 4H13\"/><path d=\"M12 17V17.01\"/></g>");

export function CanvasToolbar() {
  return (
    <div style={{ width: "829.4px", height: "36.54px", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
      <div style={{ flexShrink: 0, borderRadius: "10.96px", background: "#f5f5f5", display: "flex", flexDirection: "row", padding: "3.29px 3.29px 3.29px 3.29px", gap: "2.19px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ flexShrink: 0, borderRadius: "8.77px", background: "#ffffff", boxShadow: "0px 0px 1.1px 0px rgba(0, 0, 0, 0.25)", display: "flex", flexDirection: "row", padding: "5.48px 10.96px 5.48px 10.96px", gap: "6.57px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <DeviceLaptopBulk size={15.3} style={{ width: "15.34px", height: "15.34px", flexShrink: 0, color: "#141b34", display: "block" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 500, color: "#000000" }}>Desktop</p>
        </div>
        <div style={{ flexShrink: 0, borderRadius: "8.77px", display: "flex", flexDirection: "row", padding: "5.48px 10.96px 5.48px 10.96px", gap: "6.57px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <DeviceMobileBulk size={15.3} style={{ width: "15.34px", height: "15.34px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#6c6c6c" }}>Mobile</p>
        </div>
      </div>
      <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 500, color: "#222222" }}>
        <span style={{ fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 500, color: "#222222" }}>harborandco.com</span>
        <span style={{ fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#999999" }}>{"  ·  Homepage  ·  1440 × 900"}</span>
      </p>
      <div style={{ flexShrink: 0, borderRadius: "8.77px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e0e0e3", overflow: "hidden", display: "flex", flexDirection: "row", padding: "7.67px 8.77px 7.67px 10.96px", gap: "6.57px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#4d4d52", lineHeight: "17.53px" }}>Fit · 58%</p>
        <svg style={{ width: "13.15px", height: "13.15px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="13.15" height="13.15" viewBox="0 0 13.15 13.15" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 3.287 4.931)" d="M0.542312 -0.542312 C0.242801 -0.841823 -0.242801 -0.841823 -0.542312 -0.542312 C-0.841823 -0.242801 -0.841823 0.242801 -0.542312 0.542312 L0 0 L0.542312 -0.542312 Z M3.28691 3.28691 L2.7446 3.82922 C3.04411 4.12873 3.52971 4.12873 3.82922 3.82922 L3.28691 3.28691 Z M7.11613 0.542312 C7.41564 0.242801 7.41564 -0.242801 7.11613 -0.542312 C6.81662 -0.841823 6.33101 -0.841823 6.0315 -0.542312 L6.57382 0 L7.11613 0.542312 Z M0 0 L-0.542312 0.542312 L2.7446 3.82922 L3.28691 3.28691 L3.82922 2.7446 L0.542312 -0.542312 L0 0 Z M3.28691 3.28691 L3.82922 3.82922 L7.11613 0.542312 L6.57382 0 L6.0315 -0.542312 L2.7446 2.7446 L3.28691 3.28691 Z" fill="#6b6b70"/></svg>
      </div>
    </div>
  );
}
