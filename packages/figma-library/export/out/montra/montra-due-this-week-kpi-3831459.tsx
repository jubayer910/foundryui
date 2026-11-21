// Due this week KPI (montra, KPI and stats) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Ingot Icons.
import type { SVGProps } from "react";

// Ingot Icons used here, inlined so this file needs no icon package.
function icon(body: string) {
  return function Icon({ size = 24, strokeWidth = 1.5, ...p }: { size?: number; strokeWidth?: number } & SVGProps<SVGSVGElement>) {
    const html = strokeWidth == 1.5 ? body : body.replace(/stroke-width="([\d.]+)"/g, (_, w) => `stroke-width="${(Number(w) * Number(strokeWidth)) / 1.5}"`);
    return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden {...p} dangerouslySetInnerHTML={{ __html: html }} />;
  };
}
const Clock = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0\" /><path d=\"M12 7v5l3 3\" /></g>");

export function DueThisWeekKPI() {
  return (
    <div style={{ width: "251.7px", height: "118.8px", borderRadius: "10.97px", background: "#ffffff", boxShadow: "0px 0.91px 1.83px 0px rgba(0, 0, 0, 0.09)", position: "relative" }}>
      <div style={{ position: "absolute", left: "5.48px", top: "5.48px", width: "240.73px", height: "74.94px", borderRadius: "7.31px", background: "#fefefe", boxShadow: "inset 0 0 0 0.91px #ededed", display: "flex", flexDirection: "row", padding: "15.53px 14.62px 0.91px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ width: "22.85px", height: "22.85px", flexShrink: 0, borderRadius: "4.57px", background: "linear-gradient(180deg, #0ab7bd 0%, #a9fcff 100%)", boxShadow: "0px 0.91px 1.83px 0px rgba(0, 0, 0, 0.08)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <Clock size={11} strokeWidth={1.51} style={{ width: "10.97px", height: "10.97px", flexShrink: 0, color: "#ffffff", display: "block" }} />
        </div>
        <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "5.48px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "96px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.62px", fontWeight: 400, color: "#667085" }}>Due this week</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "63px", lineHeight: "29px", fontFamily: "'Geist'", fontSize: "21.93px", fontWeight: 500, color: "#202020" }}>$1,180</p>
        </div>
      </div>
      <div style={{ position: "absolute", left: "5.48px", top: "91.39px", width: "142.08px", height: "16.45px", display: "flex", flexDirection: "row", gap: "10.97px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "3.66px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <svg style={{ width: "16.45px", height: "16.45px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="16.45" height="16.45" viewBox="0 0 16.45 16.45" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 4.115 4.8)" d="M0 6.85 L8.22 6.85 L4.11 0 L0 6.85 Z" fill="#18b170"/><path transform="matrix(1 0 0 1 4.115 4.8)" d="M0 6.85 L-0.62597 6.47442 C-0.761281 6.69994 -0.764825 6.98081 -0.635246 7.20967 C-0.505667 7.43853 -0.262999 7.58 -2.0849e-16 7.58 L0 6.85 Z M8.22 6.85 L8.22 7.58 C8.483 7.58 8.72567 7.43853 8.85525 7.20967 C8.98483 6.98081 8.98128 6.69994 8.84597 6.47442 L8.22 6.85 Z M4.11 0 L4.73597 -0.375582 C4.60404 -0.595462 4.36642 -0.73 4.11 -0.73 C3.85358 -0.73 3.61596 -0.595462 3.48403 -0.375582 L4.11 0 Z M0 6.85 L0 7.58 L8.22 7.58 L8.22 6.85 L8.22 6.12 L0 6.12 L0 6.85 Z M8.22 6.85 L8.84597 6.47442 L4.73597 -0.375582 L4.11 0 L3.48403 0.375582 L7.59403 7.22558 L8.22 6.85 Z M4.11 0 L3.48403 -0.375582 L-0.62597 6.47442 L0 6.85 L0.62597 7.22558 L4.73597 0.375582 L4.11 0 Z" fill="#18b170"/></svg>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "7px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#18b170" }}>4</p>
        </div>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "104px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#222222" }}>Charges, Aug 10 – 15</p>
      </div>
    </div>
  );
}
