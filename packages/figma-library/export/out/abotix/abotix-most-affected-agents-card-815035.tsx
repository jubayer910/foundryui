// Most affected agents card (abotix, Charts) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Ingot Icons.
import type { SVGProps } from "react";

// Ingot Icons used here, inlined so this file needs no icon package.
function icon(body: string) {
  return function Icon({ size = 24, strokeWidth = 1.5, ...p }: { size?: number; strokeWidth?: number } & SVGProps<SVGSVGElement>) {
    const html = strokeWidth == 1.5 ? body : body.replace(/stroke-width="([\d.]+)"/g, (_, w) => `stroke-width="${(Number(w) * Number(strokeWidth)) / 1.5}"`);
    return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden {...p} dangerouslySetInnerHTML={{ __html: html }} />;
  };
}
const ChevronRight = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M9 6l6 6l-6 6\" /></g>");

export function MostAffectedAgentsCard() {
  return (
    <div style={{ width: "468px", height: "296px", borderRadius: "8px", background: "#fafafa", boxShadow: "inset 0 0 0 1px #ececec", overflow: "hidden", position: "relative" }}>
      <p style={{ position: "absolute", left: "16px", top: "16px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "178px", lineHeight: "23px", fontFamily: "'Geist'", fontSize: "18px", fontWeight: 600, color: "#1c1b20", letterSpacing: "-0.02em" }}>Most affected agents</p>
      <div style={{ position: "absolute", left: "361px", top: "12px", width: "91px", height: "32px", borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px rgba(221, 221, 221, 0.4), 0px 0px 1px 0px rgba(0, 0, 0, 0.25)", display: "flex", flexDirection: "row", padding: "1px 11px 1px 11px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "51px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#4f4f51" }}>View all</p>
        <ChevronRight size={14} strokeWidth={1.51} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#4f4f51", display: "block" }} />
      </div>
      <div style={{ position: "absolute", left: "16px", top: "62px", width: "436px", height: "222px", display: "flex", flexDirection: "column", gap: "8px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ width: "436px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "5px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ width: "436px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "104px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#2d2d2d", lineHeight: "1.2000000476837158" }}>Support Copilot</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "49px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#747474" }}>4 critical</p>
          </div>
          <div style={{ width: "436px", height: "16px", flexShrink: 0, position: "relative" }}>
            <div style={{ position: "absolute", left: "0px", top: "0px", width: "415.44px", height: "14px", borderRadius: "6px", background: "rgba(72, 79, 245, 0.1)", display: "flex", flexDirection: "row", padding: "0px 9px 0px 9px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "13px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#3f46d8" }}>31</p>
            </div>
            <div style={{ position: "absolute", left: "0px", top: "0px", width: "375.44px", height: "14px", borderRadius: "6px", background: "linear-gradient(180deg, #6066f6 0%, #484ff5 100%)", boxShadow: "inset 0 0 0 1px rgba(56, 62, 191, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.18), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
          </div>
        </div>
        <div style={{ width: "436px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "5px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ width: "436px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "132px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#2d2d2d", lineHeight: "1.2000000476837158" }}>Claims Triage Agent</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "49px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#747474" }}>5 critical</p>
          </div>
          <div style={{ width: "436px", height: "16px", flexShrink: 0, position: "relative" }}>
            <div style={{ position: "absolute", left: "0px", top: "0px", width: "367px", height: "14px", borderRadius: "6px", background: "rgba(122, 127, 255, 0.1)", display: "flex", flexDirection: "row", padding: "0px 9px 0px 9px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "14px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#6b70e0" }}>27</p>
            </div>
            <div style={{ position: "absolute", left: "0px", top: "0px", width: "327px", height: "14px", borderRadius: "6px", background: "linear-gradient(180deg, #8b90ff 0%, #7a7fff 100%)", boxShadow: "inset 0 0 0 1px rgba(95, 99, 199, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.18), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
          </div>
        </div>
        <div style={{ width: "436px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "5px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ width: "436px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "125px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#2d2d2d", lineHeight: "1.2000000476837158" }}>Finance Ops Agent</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "49px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#747474" }}>3 critical</p>
          </div>
          <div style={{ width: "436px", height: "16px", flexShrink: 0, position: "relative" }}>
            <div style={{ position: "absolute", left: "0px", top: "0px", width: "306.44px", height: "14px", borderRadius: "6px", background: "rgba(122, 127, 255, 0.1)", display: "flex", flexDirection: "row", padding: "0px 9px 0px 9px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "16px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#6b70e0" }}>22</p>
            </div>
            <div style={{ position: "absolute", left: "0px", top: "0px", width: "266.44px", height: "14px", borderRadius: "6px", background: "linear-gradient(180deg, #8b90ff 0%, #7a7fff 100%)", boxShadow: "inset 0 0 0 1px rgba(95, 99, 199, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.18), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
          </div>
        </div>
        <div style={{ width: "436px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "5px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ width: "436px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "112px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#2d2d2d", lineHeight: "1.2000000476837158" }}>Code Review Bot</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "49px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#747474" }}>2 critical</p>
          </div>
          <div style={{ width: "436px", height: "16px", flexShrink: 0, position: "relative" }}>
            <div style={{ position: "absolute", left: "0px", top: "0px", width: "270.11px", height: "14px", borderRadius: "6px", background: "rgba(122, 127, 255, 0.1)", display: "flex", flexDirection: "row", padding: "0px 9px 0px 9px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "13px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#6b70e0" }}>19</p>
            </div>
            <div style={{ position: "absolute", left: "0px", top: "0px", width: "230.11px", height: "14px", borderRadius: "6px", background: "linear-gradient(180deg, #8b90ff 0%, #7a7fff 100%)", boxShadow: "inset 0 0 0 1px rgba(95, 99, 199, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.18), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
          </div>
        </div>
        <div style={{ width: "436px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "5px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ width: "436px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "127px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#2d2d2d", lineHeight: "1.2000000476837158" }}>Data Analyst Agent</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "47px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#747474" }}>1 critical</p>
          </div>
          <div style={{ width: "436px", height: "16px", flexShrink: 0, position: "relative" }}>
            <div style={{ position: "absolute", left: "0px", top: "0px", width: "233.78px", height: "14px", borderRadius: "6px", background: "rgba(122, 127, 255, 0.1)", display: "flex", flexDirection: "row", padding: "0px 9px 0px 9px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "13px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#6b70e0" }}>16</p>
            </div>
            <div style={{ position: "absolute", left: "0px", top: "0px", width: "193.78px", height: "14px", borderRadius: "6px", background: "linear-gradient(180deg, #8b90ff 0%, #7a7fff 100%)", boxShadow: "inset 0 0 0 1px rgba(95, 99, 199, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.18), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
          </div>
        </div>
      </div>
    </div>
  );
}
