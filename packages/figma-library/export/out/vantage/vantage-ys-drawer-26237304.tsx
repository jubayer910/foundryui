// YS drawer (vantage, Drawers) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Ingot Icons.
import type { SVGProps } from "react";

// Ingot Icons used here, inlined so this file needs no icon package.
function icon(body: string) {
  return function Icon({ size = 24, strokeWidth = 1.5, ...p }: { size?: number; strokeWidth?: number } & SVGProps<SVGSVGElement>) {
    const html = strokeWidth == 1.5 ? body : body.replace(/stroke-width="([\d.]+)"/g, (_, w) => `stroke-width="${(Number(w) * Number(strokeWidth)) / 1.5}"`);
    return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden {...p} dangerouslySetInnerHTML={{ __html: html }} />;
  };
}
const AlertTriangle = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 9v4\" /><path d=\"M10.363 3.591l-8.106 13.534a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636 -2.87l-8.106 -13.536a1.914 1.914 0 0 0 -3.274 0\" /><path d=\"M12 16h.01\" /></g>");
const ArrowsDown = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M7 21l0 -18\" /><path d=\"M20 18l-3 3l-3 -3\" /><path d=\"M4 18l3 3l3 -3\" /><path d=\"M17 21l0 -18\" /></g>");
const Bell = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M10 5a2 2 0 1 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6\" /><path d=\"M9 17v1a3 3 0 0 0 6 0v-1\" /></g>");
const Check = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M5 12l5 5l10 -10\" /></g>");
const User = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0\" /><path d=\"M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2\" /></g>");
const X = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M18 6l-12 12\" /><path d=\"M6 6l12 12\" /></g>");

export function YSDrawer() {
  return (
    <div style={{ width: "440px", height: "1059px", borderRadius: "12px", background: "#1a1a1a", boxShadow: "inset 0 0 0 1px #2e2e2e, 0px 24px 64px -12px rgba(0, 0, 0, 0.55), 0px 12px 48px 0px rgba(123, 91, 255, 0.08)", overflow: "hidden", display: "flex", flexDirection: "column", padding: "1px 1px 1px 1px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
      <div style={{ width: "440px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #262626", display: "flex", flexDirection: "row", padding: "16px 16px 17px 16px", gap: "12px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ width: "40px", height: "40px", flexShrink: 0, borderRadius: "20px", background: "rgba(229, 85, 155, 0.14)", boxShadow: "inset 0 0 0 1px rgba(229, 85, 155, 0.28)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "21px", fontFamily: "'Geist'", fontSize: "16px", fontWeight: 500, color: "#ec80b4" }}>YS</p>
        </div>
        <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "21px", fontFamily: "'Geist'", fontSize: "16px", fontWeight: 500, color: "#ededed", letterSpacing: "-0.01em" }}>Yudelka Sánchez</p>
            <div style={{ height: "18px", flexShrink: 0, borderRadius: "6px", background: "#2d1a1c", boxShadow: "inset 0 0 0 1px #3d2326, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", display: "flex", flexDirection: "row", padding: "1px 7px 1px 7px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <svg style={{ width: "5px", height: "5px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="5" height="5" viewBox="0 0 5 5" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M5 2.5 C5 3.88071 3.88071 5 2.5 5 C1.11929 5 0 3.88071 0 2.5 C0 1.11929 1.11929 0 2.5 0 C3.88071 0 5 1.11929 5 2.5 Z" fill="#f07178"/></svg>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 500, color: "#f07178", letterSpacing: "-0.01em", textTransform: "uppercase" }}>W30 report missing</p>
            </div>
          </div>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8a8a8a" }}>Oscar & Nayrobi Griñán · since Mar 2025 · Santo Domingo</p>
        </div>
        <div style={{ width: "28px", height: "28px", flexShrink: 0, borderRadius: "6px", background: "#232323", boxShadow: "inset 0 0 0 1px #2e2e2e, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <X size={14} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#8a8a8a", display: "block" }} />
        </div>
      </div>
      <div style={{ width: "440px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #262626", display: "flex", flexDirection: "row", padding: "14px 16px 15px 16px", gap: "14px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#a0a0a0" }}>MG1 · 4 wk</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "29px", fontFamily: "'Geist'", fontSize: "22px", fontWeight: 500, color: "#ededed", letterSpacing: "-0.02em" }}>17</p>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "5px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, borderRadius: "22px", background: "rgba(229, 72, 77, 0.1)", display: "flex", flexDirection: "row", padding: "2px 3px 2px 3px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#e5484d", lineHeight: "1.100000023841858" }}>-45%</p>
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8f8f8f", lineHeight: "1.100000023841858" }}>vs prior</p>
          </div>
        </div>
        <div style={{ width: "1px", height: "64px", flexShrink: 0, background: "#000000", boxShadow: "1px 0px 0px 0px #232323" }} />
        <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#a0a0a0" }}>EFF</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "29px", fontFamily: "'Geist'", fontSize: "22px", fontWeight: 500, color: "#ededed", letterSpacing: "-0.02em" }}>23.9%</p>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "5px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, borderRadius: "22px", background: "rgba(229, 72, 77, 0.1)", display: "flex", flexDirection: "row", padding: "2px 3px 2px 3px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#e5484d", lineHeight: "1.100000023841858" }}>-6.7 pts</p>
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8f8f8f", lineHeight: "1.100000023841858" }}>vs network</p>
          </div>
        </div>
        <div style={{ width: "1px", height: "64px", flexShrink: 0, background: "#000000", boxShadow: "1px 0px 0px 0px #232323" }} />
        <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#a0a0a0" }}>New customers</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "29px", fontFamily: "'Geist'", fontSize: "22px", fontWeight: 500, color: "#ededed", letterSpacing: "-0.02em" }}>2</p>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "5px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, borderRadius: "22px", background: "rgba(229, 72, 77, 0.1)", display: "flex", flexDirection: "row", padding: "2px 3px 2px 3px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#e5484d", lineHeight: "1.100000023841858" }}>-1</p>
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8f8f8f", lineHeight: "1.100000023841858" }}>vs prior</p>
          </div>
        </div>
      </div>
      <div style={{ width: "440px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #262626", display: "flex", flexDirection: "column", padding: "16px 16px 17px 16px", gap: "12px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ width: "408px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>MG1 per week · W20 – W31</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8a8a8a" }}>Leg avg 5.0 / wk</p>
        </div>
        <div style={{ width: "408px", height: "180px", flexShrink: 0, position: "relative" }}>
          <svg style={{ position: "absolute", left: "22px", top: "8px", width: "386px", height: "0px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="386" height="1" viewBox="0 0 386 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0L386 0" fill="none" stroke="#2c2c2c" strokeWidth="1" strokeDasharray="3 3" strokeLinecap="butt"/></svg>
          <p style={{ position: "absolute", left: "2px", top: "0px", margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#7c7c7c" }}>12</p>
          <svg style={{ position: "absolute", left: "22px", top: "81px", width: "386px", height: "0px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="386" height="1" viewBox="0 0 386 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0L386 0" fill="none" stroke="#2c2c2c" strokeWidth="1" strokeDasharray="3 3" strokeLinecap="butt"/></svg>
          <p style={{ position: "absolute", left: "6px", top: "73px", margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#7c7c7c" }}>6</p>
          <div style={{ position: "absolute", left: "22px", top: "153.5px", width: "386px", height: "1px", background: "#333333" }} />
          <p style={{ position: "absolute", left: "6px", top: "146px", margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#7c7c7c" }}>0</p>
          <div style={{ position: "absolute", left: "29.08px", top: "8px", width: "18.01px", height: "146px", borderRadius: "9.01px", background: "#212121" }} />
          <div style={{ position: "absolute", left: "29.08px", top: "44.5px", width: "18.01px", height: "109.5px", borderRadius: "9.01px", background: "linear-gradient(180deg, #983f6a 0%, #84395d 100%)", boxShadow: "inset 0 0 0 1px rgba(218, 81, 147, 0.22), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.06), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.25)", overflow: "hidden" }} />
          <div style={{ position: "absolute", left: "61.24px", top: "8px", width: "18.01px", height: "146px", borderRadius: "9.01px", background: "#212121" }} />
          <div style={{ position: "absolute", left: "61.24px", top: "56.67px", width: "18.01px", height: "97.33px", borderRadius: "9.01px", background: "linear-gradient(180deg, #983f6a 0%, #84395d 100%)", boxShadow: "inset 0 0 0 1px rgba(218, 81, 147, 0.22), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.06), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.25)", overflow: "hidden" }} />
          <div style={{ position: "absolute", left: "93.41px", top: "8px", width: "18.01px", height: "146px", borderRadius: "9.01px", background: "#212121" }} />
          <div style={{ position: "absolute", left: "93.41px", top: "32.33px", width: "18.01px", height: "121.67px", borderRadius: "9.01px", background: "linear-gradient(180deg, #983f6a 0%, #84395d 100%)", boxShadow: "inset 0 0 0 1px rgba(218, 81, 147, 0.22), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.06), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.25)", overflow: "hidden" }} />
          <div style={{ position: "absolute", left: "125.58px", top: "8px", width: "18.01px", height: "146px", borderRadius: "9.01px", background: "#212121" }} />
          <div style={{ position: "absolute", left: "125.58px", top: "44.5px", width: "18.01px", height: "109.5px", borderRadius: "9.01px", background: "linear-gradient(180deg, #983f6a 0%, #84395d 100%)", boxShadow: "inset 0 0 0 1px rgba(218, 81, 147, 0.22), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.06), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.25)", overflow: "hidden" }} />
          <div style={{ position: "absolute", left: "157.74px", top: "8px", width: "18.01px", height: "146px", borderRadius: "9.01px", background: "#212121" }} />
          <div style={{ position: "absolute", left: "157.74px", top: "68.83px", width: "18.01px", height: "85.17px", borderRadius: "9.01px", background: "linear-gradient(180deg, #983f6a 0%, #84395d 100%)", boxShadow: "inset 0 0 0 1px rgba(218, 81, 147, 0.22), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.06), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.25)", overflow: "hidden" }} />
          <div style={{ position: "absolute", left: "189.91px", top: "8px", width: "18.01px", height: "146px", borderRadius: "9.01px", background: "#212121" }} />
          <div style={{ position: "absolute", left: "189.91px", top: "56.67px", width: "18.01px", height: "97.33px", borderRadius: "9.01px", background: "linear-gradient(180deg, #983f6a 0%, #84395d 100%)", boxShadow: "inset 0 0 0 1px rgba(218, 81, 147, 0.22), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.06), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.25)", overflow: "hidden" }} />
          <div style={{ position: "absolute", left: "222.08px", top: "8px", width: "18.01px", height: "146px", borderRadius: "9.01px", background: "#212121" }} />
          <div style={{ position: "absolute", left: "222.08px", top: "44.5px", width: "18.01px", height: "109.5px", borderRadius: "9.01px", background: "linear-gradient(180deg, #983f6a 0%, #84395d 100%)", boxShadow: "inset 0 0 0 1px rgba(218, 81, 147, 0.22), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.06), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.25)", overflow: "hidden" }} />
          <div style={{ position: "absolute", left: "254.24px", top: "8px", width: "18.01px", height: "146px", borderRadius: "9.01px", background: "#212121" }} />
          <div style={{ position: "absolute", left: "254.24px", top: "56.67px", width: "18.01px", height: "97.33px", borderRadius: "9.01px", background: "linear-gradient(180deg, #983f6a 0%, #84395d 100%)", boxShadow: "inset 0 0 0 1px rgba(218, 81, 147, 0.22), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.06), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.25)", overflow: "hidden" }} />
          <div style={{ position: "absolute", left: "286.41px", top: "8px", width: "18.01px", height: "146px", borderRadius: "9.01px", background: "#212121" }} />
          <div style={{ position: "absolute", left: "286.41px", top: "56.67px", width: "18.01px", height: "97.33px", borderRadius: "9.01px", background: "linear-gradient(180deg, #983f6a 0%, #84395d 100%)", boxShadow: "inset 0 0 0 1px rgba(218, 81, 147, 0.22), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.06), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.25)", overflow: "hidden" }} />
          <div style={{ position: "absolute", left: "318.58px", top: "8px", width: "18.01px", height: "146px", borderRadius: "9.01px", background: "#212121" }} />
          <div style={{ position: "absolute", left: "318.58px", top: "81px", width: "18.01px", height: "73px", borderRadius: "9.01px", background: "linear-gradient(180deg, #983f6a 0%, #84395d 100%)", boxShadow: "inset 0 0 0 1px rgba(218, 81, 147, 0.22), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.06), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.25)", overflow: "hidden" }} />
          <div style={{ position: "absolute", left: "350.74px", top: "8px", width: "18.01px", height: "146px", borderRadius: "9.01px", background: "#212121" }} />
          <div style={{ position: "absolute", left: "350.74px", top: "117.5px", width: "18.01px", height: "36.5px", borderRadius: "9.01px", background: "linear-gradient(180deg, #e86ba8 0%, #e5559b 100%)", boxShadow: "inset 0 0 0 1px rgba(179, 66, 121, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)", overflow: "hidden" }} />
          <div style={{ position: "absolute", left: "382.91px", top: "8px", width: "18.01px", height: "146px", borderRadius: "9.01px", background: "#212121" }} />
          <p style={{ position: "absolute", left: "24.58px", top: "164px", margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#7c7c7c" }}>W20</p>
          <p style={{ position: "absolute", left: "88.92px", top: "164px", margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#7c7c7c" }}>W22</p>
          <p style={{ position: "absolute", left: "153.75px", top: "164px", margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#7c7c7c" }}>W24</p>
          <p style={{ position: "absolute", left: "217.58px", top: "164px", margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#7c7c7c" }}>W26</p>
          <p style={{ position: "absolute", left: "281.92px", top: "164px", margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#7c7c7c" }}>W28</p>
          <p style={{ position: "absolute", left: "345.75px", top: "164px", margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#ededed" }}>W30</p>
          <p style={{ position: "absolute", left: "379.92px", top: "164px", margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#7c7c7c" }}>W31</p>
        </div>
      </div>
      <div style={{ width: "440px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #262626", display: "flex", flexDirection: "column", padding: "16px 16px 17px 16px", gap: "12px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ width: "408px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>Funnel · Jul 4 – Jul 31</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8a8a8a" }}>Network 30.58% MG1 rate</p>
        </div>
        <div style={{ width: "408px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ width: "408px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 400, color: "#a0a0a0" }}>Positive messages</p>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 400, color: "#a0a0a0" }}>71</p>
            </div>
          </div>
          <div style={{ width: "408px", height: "7px", flexShrink: 0, background: "rgba(123, 91, 255, 0.1)", overflow: "hidden", position: "relative" }}>
            <div style={{ position: "absolute", left: "0px", top: "0px", width: "408px", height: "7px", background: "#7b5bff" }} />
          </div>
        </div>
        <div style={{ width: "408px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ width: "408px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 400, color: "#a0a0a0" }}>MG1</p>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 400, color: "#a0a0a0" }}>17</p>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "2px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <ArrowsDown size={12} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#e5484d", display: "block" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 400, color: "#e5484d" }}>23.9%</p>
              </div>
            </div>
          </div>
          <div style={{ width: "408px", height: "7px", flexShrink: 0, background: "rgba(123, 91, 255, 0.1)", overflow: "hidden", position: "relative" }}>
            <div style={{ position: "absolute", left: "0px", top: "0px", width: "97.69px", height: "7px", background: "#7b5bff" }} />
          </div>
        </div>
        <div style={{ width: "408px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ width: "408px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 400, color: "#a0a0a0" }}>Follow up 2+</p>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 400, color: "#a0a0a0" }}>5</p>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "2px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <ArrowsDown size={12} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#e5484d", display: "block" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 400, color: "#e5484d" }}>29.4%</p>
              </div>
            </div>
          </div>
          <div style={{ width: "408px", height: "7px", flexShrink: 0, background: "rgba(123, 91, 255, 0.1)", overflow: "hidden", position: "relative" }}>
            <div style={{ position: "absolute", left: "0px", top: "0px", width: "28.73px", height: "7px", background: "#7b5bff" }} />
          </div>
        </div>
        <div style={{ width: "408px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ width: "408px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 400, color: "#a0a0a0" }}>New customers</p>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 400, color: "#a0a0a0" }}>2</p>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "2px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <ArrowsDown size={12} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#3fb37f", display: "block" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 400, color: "#3fb37f" }}>40.0%</p>
              </div>
            </div>
          </div>
          <div style={{ width: "408px", height: "7px", flexShrink: 0, background: "rgba(123, 91, 255, 0.1)", overflow: "hidden", position: "relative" }}>
            <div style={{ position: "absolute", left: "0px", top: "0px", width: "11.49px", height: "7px", background: "#7b5bff" }} />
          </div>
        </div>
        <div style={{ width: "408px", flexShrink: 0, borderRadius: "6px", background: "#2a2316", boxShadow: "inset 0 0 0 1px #3a301c", display: "flex", flexDirection: "row", padding: "9px 11px 9px 11px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <AlertTriangle size={14} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#e3b341", display: "block" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#e3b341" }}>2 of her 5 follow ups are past the 48h playbook window.</p>
        </div>
      </div>
      <div style={{ width: "440px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #262626", display: "flex", flexDirection: "column", padding: "16px 16px 17px 16px", gap: "10px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>Weekly reports</p>
        <div style={{ width: "408px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, borderRadius: "6px", background: "#232323", boxShadow: "inset 0 0 0 1px #2e2e2e", display: "flex", flexDirection: "column", padding: "9px 11px 9px 11px", gap: "4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#dadada" }}>W27</p>
              <Check size={12} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#5bc98b", display: "block" }} />
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "11px", fontWeight: 400, color: "#8a8a8a" }}>Jul 5</p>
          </div>
          <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, borderRadius: "6px", background: "#232323", boxShadow: "inset 0 0 0 1px #2e2e2e", display: "flex", flexDirection: "column", padding: "9px 11px 9px 11px", gap: "4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#dadada" }}>W28</p>
              <Check size={12} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#5bc98b", display: "block" }} />
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "11px", fontWeight: 400, color: "#8a8a8a" }}>Jul 12</p>
          </div>
          <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, borderRadius: "6px", background: "#232323", boxShadow: "inset 0 0 0 1px #2e2e2e", display: "flex", flexDirection: "column", padding: "9px 11px 9px 11px", gap: "4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#dadada" }}>W29</p>
              <Check size={12} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#5bc98b", display: "block" }} />
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "11px", fontWeight: 400, color: "#8a8a8a" }}>Jul 19</p>
          </div>
          <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, borderRadius: "6px", background: "#2d1a1c", boxShadow: "inset 0 0 0 1px #3d2326", display: "flex", flexDirection: "column", padding: "9px 11px 9px 11px", gap: "4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#dadada" }}>W30</p>
              <X size={12} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#f07178", display: "block" }} />
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "11px", fontWeight: 400, color: "#f07178" }}>missing</p>
          </div>
          <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, borderRadius: "6px", background: "#232323", boxShadow: "inset 0 0 0 1px #2e2e2e", display: "flex", flexDirection: "column", padding: "9px 11px 9px 11px", gap: "4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#dadada" }}>W31</p>
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "11px", fontWeight: 400, color: "#8a8a8a" }}>due Sun</p>
          </div>
        </div>
      </div>
      <div style={{ width: "440px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #262626", display: "flex", flexDirection: "column", padding: "16px 16px 17px 16px", gap: "12px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>Notes</p>
        <div style={{ width: "408px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ width: "24px", height: "24px", flexShrink: 0, borderRadius: "12px", background: "rgba(227, 179, 65, 0.14)", boxShadow: "inset 0 0 0 1px rgba(227, 179, 65, 0.28)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 500, color: "#eac671" }}>OG</p>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "3px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#dadada" }}>Oscar Griñán</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#5f5f5f" }}>Jul 22</p>
            </div>
            <p style={{ width: "374px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 400, color: "#8a8a8a", lineHeight: "1.399999976158142" }}>Moved to night shifts at the call centre — only messages after 19:00 for now.</p>
          </div>
        </div>
        <div style={{ width: "408px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ width: "24px", height: "24px", flexShrink: 0, borderRadius: "12px", background: "rgba(123, 91, 255, 0.14)", boxShadow: "inset 0 0 0 1px rgba(123, 91, 255, 0.28)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 500, color: "#9c84ff" }}>LM</p>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "3px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#dadada" }}>Luis Moreta</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#5f5f5f" }}>Jul 14</p>
            </div>
            <p style={{ width: "374px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 400, color: "#8a8a8a", lineHeight: "1.399999976158142" }}>Paired with Ramón Peralta for the Saturday walk-in table at Ágora Mall.</p>
          </div>
        </div>
      </div>
      <div style={{ width: "440px", flex: "1 1 0", minHeight: 0, flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }} />
      <div style={{ alignSelf: "stretch", flexShrink: 0, background: "#191919", boxShadow: "inset 0 1px 0 0 #000000", display: "flex", flexDirection: "row", padding: "13px 18px 12px 18px", gap: "10px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
        <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8a8a8a" }}>Last report Jul 19</p>
        <div style={{ height: "32px", flexShrink: 0, borderRadius: "6px", background: "#232323", boxShadow: "inset 0 0 0 1px #2e2e2e, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", overflow: "hidden", display: "flex", flexDirection: "row", padding: "7px 11px 7px 11px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <User size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#8a8a8a", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#dadada", lineHeight: "1.4500000476837158" }}>Open profile</p>
          </div>
        </div>
        <div style={{ flexShrink: 0, borderRadius: "6px", background: "#7b5bff", boxShadow: "inset 0 0 0 1px #8f74ff, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5), inset 0px 2px 4px 0px rgba(255, 255, 255, 0.2)", display: "flex", flexDirection: "row", padding: "7px 13px 7px 11px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <Bell size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#ffffff", display: "block" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ffffff", lineHeight: "1.4500000476837158" }}>Send reminder</p>
        </div>
      </div>
    </div>
  );
}
