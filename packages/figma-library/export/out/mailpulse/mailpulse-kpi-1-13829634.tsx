// KPI 1 (mailpulse, KPI and stats) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Ingot Icons.
import type { SVGProps } from "react";

// Ingot Icons used here, inlined so this file needs no icon package.
function icon(body: string) {
  return function Icon({ size = 24, strokeWidth = 1.5, ...p }: { size?: number; strokeWidth?: number } & SVGProps<SVGSVGElement>) {
    const html = strokeWidth == 1.5 ? body : body.replace(/stroke-width="([\d.]+)"/g, (_, w) => `stroke-width="${(Number(w) * Number(strokeWidth)) / 1.5}"`);
    return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden {...p} dangerouslySetInnerHTML={{ __html: html }} />;
  };
}
const Dots = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0\" /><path d=\"M11 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0\" /><path d=\"M18 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0\" /></g>");
const Refresh = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4\" /><path d=\"M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4\" /></g>");
const Users = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M5 7a4 4 0 1 0 8 0a4 4 0 1 0 -8 0\" /><path d=\"M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2\" /><path d=\"M16 3.13a4 4 0 0 1 0 7.75\" /><path d=\"M21 21v-2a4 4 0 0 0 -3 -3.85\" /></g>");

export function KPI1() {
  return (
    <div style={{ width: "230.3px", height: "120.37px", display: "flex", flexDirection: "column", gap: "31.99px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
      <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ width: "20.11px", height: "20.11px", flexShrink: 0, borderRadius: "5.48px", background: "#7c53f9", display: "flex", flexDirection: "row", padding: "7.31px 7.31px 7.31px 7.31px", gap: "7.31px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <Users size={12.8} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#ffffff", display: "block" }} />
        </div>
        <div style={{ width: "202.88px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "16.45px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ width: "173.64px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.62px", fontWeight: 500, color: "#222222" }}>Total audience</p>
            <Dots size={21.9} style={{ width: "21.93px", height: "21.93px", flexShrink: 0, color: "#c4c4c4", display: "block" }} />
          </div>
          <div style={{ width: "202.88px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "12.79px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "33px", fontFamily: "'Geist'", fontSize: "25.59px", fontWeight: 500, color: "#222222" }}>18,420</p>
            </div>
            <div style={{ height: "20.11px", flexShrink: 0, borderRadius: "4.57px", background: "#eefffb", boxShadow: "0px 0px 0.91px 0px rgba(0, 0, 0, 0.16)", display: "flex", flexDirection: "row", padding: "3.66px 3.66px 3.66px 3.66px", gap: "9.14px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "1.83px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <svg style={{ width: "12.79px", height: "12.79px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="12.79" height="12.79" viewBox="0 0 12.79 12.79" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 1.2 2.798)" d="M10.8478 0.452352 C11.0977 0.202525 11.0977 -0.202525 10.8478 -0.452352 C10.598 -0.702179 10.193 -0.702179 9.94313 -0.452352 L10.3955 0 L10.8478 0.452352 Z M5.59757 4.79792 L5.14522 5.25027 C5.39504 5.5001 5.80009 5.5001 6.04992 5.25027 L5.59757 4.79792 Z M3.59844 2.79878 L4.05079 2.34643 C3.80096 2.09661 3.39591 2.09661 3.14609 2.34643 L3.59844 2.79878 Z M-0.452352 5.94487 C-0.702179 6.1947 -0.702179 6.59975 -0.452352 6.84957 C-0.202525 7.0994 0.202525 7.0994 0.452352 6.84957 L0 6.39722 L-0.452352 5.94487 Z M10.3955 0 L9.94313 -0.452352 L5.14522 4.34556 L5.59757 4.79792 L6.04992 5.25027 L10.8478 0.452352 L10.3955 0 Z M5.59757 4.79792 L6.04992 4.34556 L4.05079 2.34643 L3.59844 2.79878 L3.14609 3.25114 L5.14522 5.25027 L5.59757 4.79792 Z M3.59844 2.79878 L3.14609 2.34643 L-0.452352 5.94487 L0 6.39722 L0.452352 6.84957 L4.05079 3.25114 L3.59844 2.79878 Z" fill="#15b392"/><path transform="matrix(1 0 0 1 8.396 2.798)" d="M2.55889 3.19861 C2.55889 3.55192 2.8453 3.83833 3.19861 3.83833 C3.55192 3.83833 3.83833 3.55192 3.83833 3.19861 L3.19861 3.19861 L2.55889 3.19861 Z M3.19861 0 L3.83833 0 C3.83833 -0.353309 3.55192 -0.639722 3.19861 -0.639722 L3.19861 0 Z M0 -0.639722 C-0.353309 -0.639722 -0.639722 -0.353309 -0.639722 0 C-0.639722 0.353309 -0.353309 0.639722 0 0.639722 L0 0 L0 -0.639722 Z M3.19861 3.19861 L3.83833 3.19861 L3.83833 0 L3.19861 0 L2.55889 0 L2.55889 3.19861 L3.19861 3.19861 Z M3.19861 0 L3.19861 -0.639722 L0 -0.639722 L0 0 L0 0.639722 L3.19861 0.639722 L3.19861 0 Z" fill="#15b392"/></svg>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#15b392", lineHeight: "1.350000023841858" }}>+8.2%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
        <Refresh size={16.5} style={{ width: "16.45px", height: "16.45px", flexShrink: 0, color: "#dfdfdf", display: "block" }} />
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10.97px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#989898" }}>All active subscribers</p>
        </div>
        <Refresh size={16.5} style={{ width: "16.45px", height: "16.45px", flexShrink: 0, color: "#dfdfdf", display: "block" }} />
      </div>
    </div>
  );
}
