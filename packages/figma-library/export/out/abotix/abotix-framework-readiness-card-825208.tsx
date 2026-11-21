// Framework readiness card (abotix, Charts) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Ingot Icons.
import type { SVGProps } from "react";

// Ingot Icons used here, inlined so this file needs no icon package.
function icon(body: string) {
  return function Icon({ size = 24, strokeWidth = 1.5, ...p }: { size?: number; strokeWidth?: number } & SVGProps<SVGSVGElement>) {
    const html = strokeWidth == 1.5 ? body : body.replace(/stroke-width="([\d.]+)"/g, (_, w) => `stroke-width="${(Number(w) * Number(strokeWidth)) / 1.5}"`);
    return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden {...p} dangerouslySetInnerHTML={{ __html: html }} />;
  };
}
const Brain = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M15.5 13a3.5 3.5 0 0 0 -3.5 3.5v1a3.5 3.5 0 0 0 7 0v-1.8\" /><path d=\"M8.5 13a3.5 3.5 0 0 1 3.5 3.5v1a3.5 3.5 0 0 1 -7 0v-1.8\" /><path d=\"M17.5 16a3.5 3.5 0 0 0 0 -7h-.5\" /><path d=\"M19 9.3v-2.8a3.5 3.5 0 0 0 -7 0\" /><path d=\"M6.5 16a3.5 3.5 0 0 1 0 -7h.5\" /><path d=\"M5 9.3v-2.8a3.5 3.5 0 0 1 7 0v10\" /></g>");
const ChevronDown = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M6 9l6 6l6 -6\" /></g>");
const IdVerified = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M16.177 18.456c.3.144.673.517.854.818c.06.42.36-1.203 1.828-2.165m2.641.892a4 4 0 1 1-8 0a4 4 0 0 1 8 0Z\"/><circle cx=\"11.008\" cy=\"12.001\" r=\"2\"/><path d=\"M7.508 18.001c.95-.9 1.75-1.4 3.525-1.5m8.475-5c0-.8.025-3.25-.1-4.25c-.075-.825-.3-1.95-1.325-2.6c-.625-.325-1.225-.625-4.1-.65m-6.025 0c-2.15 0-3.825.175-4.65 1.2c-.7.957-.659 2.05-.725 2.4c-.15 1.875-.05 8.425-.05 9.525c0 1.15-.075 3.487 1.5 4.275c1.35.675 2.75.575 7.5.6m-.675-20c-.6 0-1.1 0-1.6.525c-.425.4-.36.753-.525 1.375c-.234.875-.35 1.337-.025 1.7c.298.39.799.392 1.242.393h.008c.425.03 1.853.016 2.275 0c.452-.018.817-.043 1.125-.443c.275-.357.112-.952-.05-1.575c-.16-.614-.1-.925-.525-1.45c-.6-.6-1.325-.525-1.925-.525Z\"/></g>");
const License = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11\" /><path d=\"M9 7l4 0\" /><path d=\"M9 11l4 0\" /></g>");
const ShieldCheck = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M11.46 20.846a12 12 0 0 1 -7.96 -14.846a12 12 0 0 0 8.5 -3a12 12 0 0 0 8.5 3a12 12 0 0 1 -.09 7.06\" /><path d=\"M15 19l2 2l4 -4\" /></g>");
const UserShield = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M6 21v-2a4 4 0 0 1 4 -4h2\" /><path d=\"M22 16c0 4 -2.5 6 -3.5 6s-3.5 -2 -3.5 -6c1 0 2.5 -.5 3.5 -1.5c1 1 2.5 1.5 3.5 1.5\" /><path d=\"M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0\" /></g>");

export function FrameworkReadinessCard() {
  return (
    <div style={{ width: "1074px", height: "220px", borderRadius: "8px", background: "#fafafa", boxShadow: "inset 0 0 0 1px #ececec", overflow: "hidden", position: "relative" }}>
      <p style={{ position: "absolute", left: "16px", top: "16px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "179px", lineHeight: "23px", fontFamily: "'Geist'", fontSize: "18px", fontWeight: 600, color: "#1c1b20", letterSpacing: "-0.02em" }}>Framework readiness</p>
      <div style={{ position: "absolute", left: "929px", top: "12px", width: "129px", height: "32px", borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px rgba(221, 221, 221, 0.4), 0px 0px 1px 0px rgba(0, 0, 0, 0.25)", display: "flex", flexDirection: "row", padding: "1px 11px 1px 11px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "85px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#4f4f51" }}>Last 30 days</p>
        <ChevronDown size={14} strokeWidth={1.51} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#4f4f51", display: "block" }} />
      </div>
      <div style={{ position: "absolute", left: "0px", top: "68px", width: "1074px", height: "100px", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ width: "214.8px", flexShrink: 0, boxShadow: "inset 0 0 0 0px #ececec", display: "flex", flexDirection: "column", padding: "0px 16px 0px 16px", gap: "14px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <ShieldCheck size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#141b34", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "86px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#555555", lineHeight: "1.100000023841858" }}>SOC 2 Type II</p>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "baseline", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "46px", fontFamily: "'Geist'", fontSize: "22px", fontWeight: 500, color: "#111111", lineHeight: "1.100000023841858" }}>92%</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "41px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#2db475", lineHeight: "1.100000023841858" }}>+3 pts</p>
          </div>
          <div style={{ width: "182.8px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "182.8px", height: "10px", flexShrink: 0, position: "relative" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "168.18px", height: "10px", borderRadius: "3px", background: "linear-gradient(90deg, #689cf8 0%, #1666f4 100%)", boxShadow: "inset 0 0 0 1px rgba(17, 80, 190, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.18), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
              <svg style={{ position: "absolute", left: "172.18px", top: "0px", width: "10.12px", height: "10px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="10.12" height="10" viewBox="0 0 10.12 10" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0 L-0.5 0 L-0.5 10 L0 10 L0.5 10 L0.5 0 L0 0 Z M3.37 0 L2.87 0 L2.87 10 L3.37 10 L3.87 10 L3.87 0 L3.37 0 Z M6.75 0 L6.25 0 L6.25 10 L6.75 10 L7.25 10 L7.25 0 L6.75 0 Z M10.12 0 L9.62 0 L9.62 10 L10.12 10 L10.62 10 L10.62 0 L10.12 0 Z" fill="#d4d4d8"/></svg>
            </div>
            <div style={{ width: "182.8px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "98px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#1f1f22" }}>59 of 64 controls</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "68px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#747474" }}>Audit 14 Jan</p>
            </div>
          </div>
        </div>
        <div style={{ width: "214.8px", flexShrink: 0, boxShadow: "inset 1px 0 0 0 #ececec", display: "flex", flexDirection: "column", padding: "0px 16px 0px 17px", gap: "14px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <IdVerified size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#141b34", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "66px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#555555", lineHeight: "1.100000023841858" }}>ISO 27001</p>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "baseline", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "44px", fontFamily: "'Geist'", fontSize: "22px", fontWeight: 500, color: "#111111", lineHeight: "1.100000023841858" }}>87%</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "41px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#2db475", lineHeight: "1.100000023841858" }}>+2 pts</p>
          </div>
          <div style={{ width: "182.8px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "182.8px", height: "10px", flexShrink: 0, position: "relative" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "159.04px", height: "10px", borderRadius: "3px", background: "linear-gradient(90deg, #888df9 0%, #484ff5 100%)", boxShadow: "inset 0 0 0 1px rgba(56, 62, 191, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.18), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
              <svg style={{ position: "absolute", left: "163.04px", top: "0px", width: "19.26px", height: "10px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="19.26" height="10" viewBox="0 0 19.26 10" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0 L-0.5 0 L-0.5 10 L0 10 L0.5 10 L0.5 0 L0 0 Z M3.21 0 L2.71 0 L2.71 10 L3.21 10 L3.71 10 L3.71 0 L3.21 0 Z M6.42 0 L5.92 0 L5.92 10 L6.42 10 L6.92 10 L6.92 0 L6.42 0 Z M9.63 0 L9.13 0 L9.13 10 L9.63 10 L10.13 10 L10.13 0 L9.63 0 Z M12.84 0 L12.34 0 L12.34 10 L12.84 10 L13.34 10 L13.34 0 L12.84 0 Z M16.05 0 L15.55 0 L15.55 10 L16.05 10 L16.55 10 L16.55 0 L16.05 0 Z M19.26 0 L18.76 0 L18.76 10 L19.26 10 L19.76 10 L19.76 0 L19.26 0 Z" fill="#d4d4d8"/></svg>
            </div>
            <div style={{ width: "182.8px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "95px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#1f1f22" }}>81 of 93 controls</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "80px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#747474" }}>Review 13 Nov</p>
            </div>
          </div>
        </div>
        <div style={{ width: "214.8px", flexShrink: 0, boxShadow: "inset 1px 0 0 0 #ececec", display: "flex", flexDirection: "column", padding: "0px 16px 0px 17px", gap: "14px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <Brain size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#141b34", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "80px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#555555", lineHeight: "1.100000023841858" }}>NIST AI RMF</p>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "baseline", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "47px", fontFamily: "'Geist'", fontSize: "22px", fontWeight: 500, color: "#111111", lineHeight: "1.100000023841858" }}>80%</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "41px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#2db475", lineHeight: "1.100000023841858" }}>+5 pts</p>
          </div>
          <div style={{ width: "182.8px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "182.8px", height: "10px", flexShrink: 0, position: "relative" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "146.24px", height: "10px", borderRadius: "3px", background: "linear-gradient(90deg, #a589fa 0%, #744af7 100%)", boxShadow: "inset 0 0 0 1px rgba(90, 58, 193, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.18), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
              <svg style={{ position: "absolute", left: "150.24px", top: "0px", width: "32.06px", height: "10px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="32.06" height="10" viewBox="0 0 32.06 10" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0 L-0.5 0 L-0.5 10 L0 10 L0.5 10 L0.5 0 L0 0 Z M3.21 0 L2.71 0 L2.71 10 L3.21 10 L3.71 10 L3.71 0 L3.21 0 Z M6.41 0 L5.91 0 L5.91 10 L6.41 10 L6.91 10 L6.91 0 L6.41 0 Z M9.62 0 L9.12 0 L9.12 10 L9.62 10 L10.12 10 L10.12 0 L9.62 0 Z M12.82 0 L12.32 0 L12.32 10 L12.82 10 L13.32 10 L13.32 0 L12.82 0 Z M16.03 0 L15.53 0 L15.53 10 L16.03 10 L16.53 10 L16.53 0 L16.03 0 Z M19.24 0 L18.74 0 L18.74 10 L19.24 10 L19.74 10 L19.74 0 L19.24 0 Z M22.44 0 L21.94 0 L21.94 10 L22.44 10 L22.94 10 L22.94 0 L22.44 0 Z M25.65 0 L25.15 0 L25.15 10 L25.65 10 L26.15 10 L26.15 0 L25.65 0 Z M28.85 0 L28.35 0 L28.35 10 L28.85 10 L29.35 10 L29.35 0 L28.85 0 Z M32.06 0 L31.56 0 L31.56 10 L32.06 10 L32.56 10 L32.56 0 L32.06 0 Z" fill="#d4d4d8"/></svg>
            </div>
            <div style={{ width: "182.8px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "97px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#1f1f22" }}>56 of 70 controls</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "42px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#747474" }}>14 gaps</p>
            </div>
          </div>
        </div>
        <div style={{ width: "214.8px", flexShrink: 0, boxShadow: "inset 1px 0 0 0 #ececec", display: "flex", flexDirection: "column", padding: "0px 16px 0px 17px", gap: "14px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <License size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#141b34", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "60px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#555555", lineHeight: "1.100000023841858" }}>EU AI Act</p>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "baseline", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "39px", fontFamily: "'Geist'", fontSize: "22px", fontWeight: 500, color: "#111111", lineHeight: "1.100000023841858" }}>71%</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "40px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#e5484d", lineHeight: "1.100000023841858" }}>−4 pts</p>
          </div>
          <div style={{ width: "182.8px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "182.8px", height: "10px", flexShrink: 0, position: "relative" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "129.79px", height: "10px", borderRadius: "3px", background: "linear-gradient(90deg, #fea361 0%, #fe710c 100%)", boxShadow: "inset 0 0 0 1px rgba(198, 88, 9, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.18), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
              <svg style={{ position: "absolute", left: "133.79px", top: "0px", width: "48.51px", height: "10px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="48.51" height="10" viewBox="0 0 48.51 10" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0 L-0.5 0 L-0.5 10 L0 10 L0.5 10 L0.5 0 L0 0 Z M3.23 0 L2.73 0 L2.73 10 L3.23 10 L3.73 10 L3.73 0 L3.23 0 Z M6.47 0 L5.97 0 L5.97 10 L6.47 10 L6.97 10 L6.97 0 L6.47 0 Z M9.7 0 L9.2 0 L9.2 10 L9.7 10 L10.2 10 L10.2 0 L9.7 0 Z M12.94 0 L12.44 0 L12.44 10 L12.94 10 L13.44 10 L13.44 0 L12.94 0 Z M16.17 0 L15.67 0 L15.67 10 L16.17 10 L16.67 10 L16.67 0 L16.17 0 Z M19.4 0 L18.9 0 L18.9 10 L19.4 10 L19.9 10 L19.9 0 L19.4 0 Z M22.64 0 L22.14 0 L22.14 10 L22.64 10 L23.14 10 L23.14 0 L22.64 0 Z M25.87 0 L25.37 0 L25.37 10 L25.87 10 L26.37 10 L26.37 0 L25.87 0 Z M29.11 0 L28.61 0 L28.61 10 L29.11 10 L29.61 10 L29.61 0 L29.11 0 Z M32.34 0 L31.84 0 L31.84 10 L32.34 10 L32.84 10 L32.84 0 L32.34 0 Z M35.58 0 L35.08 0 L35.08 10 L35.58 10 L36.08 10 L36.08 0 L35.58 0 Z M38.81 0 L38.31 0 L38.31 10 L38.81 10 L39.31 10 L39.31 0 L38.81 0 Z M42.04 0 L41.54 0 L41.54 10 L42.04 10 L42.54 10 L42.54 0 L42.04 0 Z M45.28 0 L44.78 0 L44.78 10 L45.28 10 L45.78 10 L45.78 0 L45.28 0 Z M48.51 0 L48.01 0 L48.01 10 L48.51 10 L49.01 10 L49.01 0 L48.51 0 Z" fill="#d4d4d8"/></svg>
            </div>
            <div style={{ width: "182.8px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "97px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#1f1f22" }}>32 of 45 controls</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "42px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#747474" }}>13 gaps</p>
            </div>
          </div>
        </div>
        <div style={{ width: "214.8px", flexShrink: 0, boxShadow: "inset 1px 0 0 0 #ececec", display: "flex", flexDirection: "column", padding: "0px 16px 0px 17px", gap: "14px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <UserShield size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#141b34", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "38px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#555555", lineHeight: "1.100000023841858" }}>GDPR</p>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "baseline", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "46px", fontFamily: "'Geist'", fontSize: "22px", fontWeight: 500, color: "#111111", lineHeight: "1.100000023841858" }}>89%</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "31px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#2db475", lineHeight: "1.100000023841858" }}>+1 pt</p>
          </div>
          <div style={{ width: "182.8px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "182.8px", height: "10px", flexShrink: 0, position: "relative" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "162.69px", height: "10px", borderRadius: "3px", background: "linear-gradient(90deg, #91cdf4 0%, #56b2ee 100%)", boxShadow: "inset 0 0 0 1px rgba(67, 139, 186, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.18), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
              <svg style={{ position: "absolute", left: "166.69px", top: "0px", width: "15.61px", height: "10px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="15.61" height="10" viewBox="0 0 15.61 10" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0 L-0.5 0 L-0.5 10 L0 10 L0.5 10 L0.5 0 L0 0 Z M3.9 0 L3.4 0 L3.4 10 L3.9 10 L4.4 10 L4.4 0 L3.9 0 Z M7.8 0 L7.3 0 L7.3 10 L7.8 10 L8.3 10 L8.3 0 L7.8 0 Z M11.71 0 L11.21 0 L11.21 10 L11.71 10 L12.21 10 L12.21 0 L11.71 0 Z M15.61 0 L15.11 0 L15.11 10 L15.61 10 L16.11 10 L16.11 0 L15.61 0 Z" fill="#d4d4d8"/></svg>
            </div>
            <div style={{ width: "182.8px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "98px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#1f1f22" }}>40 of 45 controls</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "60px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#747474" }}>DPIA 1 Dec</p>
            </div>
          </div>
        </div>
      </div>
      <p style={{ position: "absolute", left: "16px", top: "186px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "552px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#2d2d2d" }}>
        <span style={{ fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#2d2d2d" }}>268 of 317</span>
        <span style={{ fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#8a8a8a" }}>{" controls passing across 5 frameworks · evidence auto-collected from 42 agents"}</span>
      </p>
    </div>
  );
}
