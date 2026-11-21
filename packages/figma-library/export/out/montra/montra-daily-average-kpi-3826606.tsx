// Daily average KPI (montra, KPI and stats) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Ingot Icons.
import type { SVGProps } from "react";

// Ingot Icons used here, inlined so this file needs no icon package.
function icon(body: string) {
  return function Icon({ size = 24, strokeWidth = 1.5, ...p }: { size?: number; strokeWidth?: number } & SVGProps<SVGSVGElement>) {
    const html = strokeWidth == 1.5 ? body : body.replace(/stroke-width="([\d.]+)"/g, (_, w) => `stroke-width="${(Number(w) * Number(strokeWidth)) / 1.5}"`);
    return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden {...p} dangerouslySetInnerHTML={{ __html: html }} />;
  };
}
const Calendar = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12\" /><path d=\"M16 3v4\" /><path d=\"M8 3v4\" /><path d=\"M4 11h16\" /></g>");

export function DailyAverageKPI() {
  return (
    <div style={{ width: "251.7px", height: "118.8px", borderRadius: "10.97px", background: "#ffffff", boxShadow: "0px 0.91px 1.83px 0px rgba(0, 0, 0, 0.09)", position: "relative" }}>
      <div style={{ position: "absolute", left: "5.48px", top: "5.48px", width: "240.73px", height: "74.94px", borderRadius: "7.31px", background: "#fefefe", boxShadow: "inset 0 0 0 0.91px #ededed", display: "flex", flexDirection: "row", padding: "15.53px 14.62px 0.91px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ width: "22.85px", height: "22.85px", flexShrink: 0, borderRadius: "4.57px", background: "linear-gradient(180deg, #4a96fe 0%, #adcfff 100%)", boxShadow: "0px 0.91px 1.83px 0px rgba(0, 0, 0, 0.08)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <Calendar size={11} strokeWidth={1.51} style={{ width: "10.97px", height: "10.97px", flexShrink: 0, color: "#ffffff", display: "block" }} />
        </div>
        <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "5.48px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "90px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.62px", fontWeight: 400, color: "#667085" }}>Daily average</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "67px", lineHeight: "29px", fontFamily: "'Geist'", fontSize: "21.93px", fontWeight: 500, color: "#202020" }}>$1,387</p>
        </div>
      </div>
      <div style={{ position: "absolute", left: "5.48px", top: "91.39px", width: "135.08px", height: "16.45px", display: "flex", flexDirection: "row", gap: "10.97px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "3.66px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <svg style={{ width: "16.45px", height: "16.45px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="16.45" height="16.45" viewBox="0 0 16.45 16.45" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 4.115 4.8)" d="M0 0 L8.22 0 L4.11 6.85 L0 0 Z" fill="#18b170"/><path transform="matrix(1 0 0 1 4.115 4.8)" d="M0 0 L0 -0.73 C-0.262999 -0.73 -0.505667 -0.588531 -0.635246 -0.35967 C-0.764825 -0.130809 -0.761281 0.150063 -0.62597 0.375582 L0 0 Z M8.22 0 L8.84597 0.375582 C8.98128 0.150063 8.98483 -0.130809 8.85525 -0.35967 C8.72567 -0.588531 8.483 -0.73 8.22 -0.73 L8.22 0 Z M4.11 6.85 L3.48403 7.22558 C3.61596 7.44546 3.85358 7.58 4.11 7.58 C4.36642 7.58 4.60404 7.44546 4.73597 7.22558 L4.11 6.85 Z M0 0 L0 0.73 L8.22 0.73 L8.22 0 L8.22 -0.73 L0 -0.73 L0 0 Z M8.22 0 L7.59403 -0.375582 L3.48403 6.47442 L4.11 6.85 L4.73597 7.22558 L8.84597 0.375582 L8.22 0 Z M4.11 6.85 L4.73597 6.47442 L0.62597 -0.375582 L0 0 L-0.62597 0.375582 L3.48403 7.22558 L4.11 6.85 Z" fill="#18b170"/></svg>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "22px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#18b170" }}>3.1%</p>
        </div>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "82px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#222222" }}>vs $1,431 in July</p>
      </div>
    </div>
  );
}
