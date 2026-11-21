// Enforce confirm (abotix, Charts) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist, Inter. Icons: Ingot Icons.
import type { SVGProps } from "react";

// Ingot Icons used here, inlined so this file needs no icon package.
function icon(body: string) {
  return function Icon({ size = 24, strokeWidth = 1.5, ...p }: { size?: number; strokeWidth?: number } & SVGProps<SVGSVGElement>) {
    const html = strokeWidth == 1.5 ? body : body.replace(/stroke-width="([\d.]+)"/g, (_, w) => `stroke-width="${(Number(w) * Number(strokeWidth)) / 1.5}"`);
    return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden {...p} dangerouslySetInnerHTML={{ __html: html }} />;
  };
}
const InfoCircle = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0\" /><path d=\"M12 9h.01\" /><path d=\"M11 12h1v4h1\" /></g>");
const Robot = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M6 6a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2l0 -4\" /><path d=\"M12 2v2\" /><path d=\"M9 12v9\" /><path d=\"M15 12v9\" /><path d=\"M5 16l4 -2\" /><path d=\"M15 14l4 2\" /><path d=\"M9 18h6\" /><path d=\"M10 8v.01\" /><path d=\"M14 8v.01\" /></g>");
const Shield = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3\" /></g>");

export function EnforceConfirm() {
  return (
    <div style={{ width: "352px", height: "491px", borderRadius: "12px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e8e8e8, 0px 12px 28px -8px rgba(13, 13, 18, 0.08), 0px 1px 2px 0px rgba(13, 13, 18, 0.05)", display: "flex", flexDirection: "column", padding: "17px 17px 17px 17px", gap: "14px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
      <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "12px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ width: "36px", height: "36px", flexShrink: 0, borderRadius: "10px", background: "rgba(254, 113, 12, 0.12)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <Shield size={18} strokeWidth={1.51} style={{ width: "18px", height: "18px", flexShrink: 0, color: "#fe710c", display: "block" }} />
        </div>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "115px", lineHeight: "21px", fontFamily: "'Geist'", fontSize: "16px", fontWeight: 600, color: "#1c1b20", letterSpacing: "-0.02em" }}>Enforce PII-02?</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "245px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#747474" }}>Mask PII in outputs · Monitor → Enforced</p>
        </div>
      </div>
      <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "233px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#111111" }}>
          <span style={{ fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#111111" }}>37</span>
          <span style={{ fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#555555" }}>{" actions would have been blocked"}</span>
        </p>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "133px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#8a8a8a" }}>Last 7 days · 24–30 Oct</p>
      </div>
      <div style={{ width: "320px", height: "96px", flexShrink: 0, position: "relative" }}>
        <div style={{ position: "absolute", left: "10.06px", top: "8px", width: "25.6px", height: "66px", borderRadius: "12.8px", background: "#f6f6f4" }} />
        <div style={{ position: "absolute", left: "10.06px", top: "47.6px", width: "25.6px", height: "26.4px", borderRadius: "12.8px", background: "linear-gradient(180deg, #ffdac0 0%, #ffcfac 100%)", boxShadow: "inset 0 0 0 1px rgba(241, 107, 11, 0.22), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.35), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
        <div style={{ position: "absolute", left: "55.77px", top: "8px", width: "25.6px", height: "66px", borderRadius: "12.8px", background: "#f6f6f4" }} />
        <div style={{ position: "absolute", left: "55.77px", top: "27.8px", width: "25.6px", height: "46.2px", borderRadius: "12.8px", background: "linear-gradient(180deg, #ffdac0 0%, #ffcfac 100%)", boxShadow: "inset 0 0 0 1px rgba(241, 107, 11, 0.22), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.35), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
        <div style={{ position: "absolute", left: "101.49px", top: "8px", width: "25.6px", height: "66px", borderRadius: "12.8px", background: "#f6f6f4" }} />
        <div style={{ position: "absolute", left: "101.49px", top: "41px", width: "25.6px", height: "33px", borderRadius: "12.8px", background: "linear-gradient(180deg, #ffdac0 0%, #ffcfac 100%)", boxShadow: "inset 0 0 0 1px rgba(241, 107, 11, 0.22), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.35), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
        <div style={{ position: "absolute", left: "147.2px", top: "8px", width: "25.6px", height: "66px", borderRadius: "12.8px", background: "#f6f6f4" }} />
        <div style={{ position: "absolute", left: "147.2px", top: "34.4px", width: "25.6px", height: "39.6px", borderRadius: "12.8px", background: "linear-gradient(180deg, #ffdac0 0%, #ffcfac 100%)", boxShadow: "inset 0 0 0 1px rgba(241, 107, 11, 0.22), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.35), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
        <div style={{ position: "absolute", left: "192.91px", top: "8px", width: "25.6px", height: "66px", borderRadius: "12.8px", background: "#f6f6f4" }} />
        <div style={{ position: "absolute", left: "192.91px", top: "54.2px", width: "25.6px", height: "19.8px", borderRadius: "9.9px", background: "linear-gradient(180deg, #ffdac0 0%, #ffcfac 100%)", boxShadow: "inset 0 0 0 1px rgba(241, 107, 11, 0.22), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.35), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
        <div style={{ position: "absolute", left: "238.63px", top: "8px", width: "25.6px", height: "66px", borderRadius: "12.8px", background: "#f6f6f4" }} />
        <div style={{ position: "absolute", left: "238.63px", top: "21.2px", width: "25.6px", height: "52.8px", borderRadius: "12.8px", background: "linear-gradient(180deg, #fe832c 0%, #fe710c 100%)", boxShadow: "inset 0 0 0 1px rgba(198, 88, 9, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.18), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
        <div style={{ position: "absolute", left: "284.34px", top: "8px", width: "25.6px", height: "66px", borderRadius: "12.8px", background: "#f6f6f4" }} />
        <div style={{ position: "absolute", left: "284.34px", top: "47.6px", width: "25.6px", height: "26.4px", borderRadius: "12.8px", background: "linear-gradient(180deg, #ffdac0 0%, #ffcfac 100%)", boxShadow: "inset 0 0 0 1px rgba(241, 107, 11, 0.22), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.35), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
        <p style={{ position: "absolute", left: "3.86px", top: "80px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "38px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#747474" }}>24 Oct</p>
        <p style={{ position: "absolute", left: "61.07px", top: "80px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "15px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#747474" }}>25</p>
        <p style={{ position: "absolute", left: "106.79px", top: "80px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "15px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#747474" }}>26</p>
        <p style={{ position: "absolute", left: "153px", top: "80px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "14px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#747474" }}>27</p>
        <p style={{ position: "absolute", left: "198.21px", top: "80px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "15px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#747474" }}>28</p>
        <p style={{ position: "absolute", left: "231.93px", top: "80px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "39px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#1f1f22" }}>29 Oct</p>
        <p style={{ position: "absolute", left: "289.14px", top: "80px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "16px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#747474" }}>30</p>
        <div style={{ position: "absolute", left: "213.93px", top: "-3.2px", width: "75px", height: "20px", borderRadius: "6px", background: "#1f1f22", boxShadow: "0px 2px 6px 0px rgba(0, 0, 0, 0.12)", display: "flex", flexDirection: "row", padding: "3px 7px 3px 7px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "61px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "11px", fontWeight: 500, color: "#ffffff" }}>8 on 29 Oct</p>
        </div>
        <svg style={{ position: "absolute", left: "247.43px", top: "16.3px", width: "8px", height: "4px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="8" height="4" viewBox="0 0 8 4" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0 L8 0 L4 4 L0 0 Z" fill="#1f1f22"/></svg>
      </div>
      <div style={{ alignSelf: "stretch", height: "1px", flexShrink: 0, background: "#ececec" }} />
      <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "115px", fontFamily: "'Inter'", fontSize: "12px", fontWeight: 500, color: "#8a8a8a", lineHeight: "1.3300000429153442" }}>AFFECTED AGENTS</p>
      <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "10px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ width: "320px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "30px", height: "30px", flexShrink: 0, borderRadius: "8px", background: "#ffffff", boxShadow: "0px 0px 1px 0px rgba(0, 0, 0, 0.4)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <Robot size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#555555", display: "block" }} />
          </div>
          <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "128px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#2d2d2d" }}>HR Helpdesk Agent</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "129px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#8a8a8a" }}>Production · 29 actions</p>
          </div>
          <div style={{ width: "110px", height: "18px", flexShrink: 0, position: "relative" }}>
            <div style={{ position: "absolute", left: "0px", top: "0px", width: "99.45px", height: "16px", borderRadius: "6px", background: "rgba(254, 113, 12, 0.1)", display: "flex", flexDirection: "row", padding: "0px 9px 0px 9px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "16px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#e0630b" }}>29</p>
            </div>
            <div style={{ position: "absolute", left: "0px", top: "0px", width: "53.45px", height: "16px", borderRadius: "6px", background: "linear-gradient(180deg, #fe832c 0%, #fe710c 100%)", boxShadow: "inset 0 0 0 1px rgba(198, 88, 9, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.18), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
          </div>
        </div>
        <div style={{ width: "320px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "30px", height: "30px", flexShrink: 0, borderRadius: "8px", background: "#ffffff", boxShadow: "0px 0px 1px 0px rgba(0, 0, 0, 0.4)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <Robot size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#555555", display: "block" }} />
          </div>
          <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "104px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#2d2d2d" }}>Support Copilot</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "122px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#8a8a8a" }}>Production · 8 actions</p>
          </div>
          <div style={{ width: "110px", height: "18px", flexShrink: 0, position: "relative" }}>
            <div style={{ position: "absolute", left: "0px", top: "0px", width: "62px", height: "16px", borderRadius: "6px", background: "rgba(254, 113, 12, 0.1)", display: "flex", flexDirection: "row", padding: "0px 9px 0px 9px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "8px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#e0630b" }}>8</p>
            </div>
            <div style={{ position: "absolute", left: "0px", top: "0px", width: "16px", height: "16px", borderRadius: "6px", background: "linear-gradient(180deg, #fe832c 0%, #fe710c 100%)", boxShadow: "inset 0 0 0 1px rgba(198, 88, 9, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.18), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
          </div>
        </div>
      </div>
      <div style={{ width: "320px", flexShrink: 0, borderRadius: "8px", background: "#f4f4f5", display: "flex", flexDirection: "row", padding: "8px 10px 8px 10px", gap: "8px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <InfoCircle size={14} strokeWidth={1.51} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#555555", display: "block" }} />
        <p style={{ width: "276px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#555555", lineHeight: "1.399999976158142" }}>Agents get a masked reply instead of raw PII. Switch back any time.</p>
      </div>
      <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ height: "34px", flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ebebeb", display: "flex", flexDirection: "row", padding: "1px 9px 1px 9px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "106px", lineHeight: "17px", fontFamily: "'Inter'", fontSize: "14px", fontWeight: 500, color: "#000000", letterSpacing: "-0.02em" }}>Keep monitoring</p>
        </div>
        <div style={{ flexShrink: 0, borderRadius: "11px", background: "#347bf9", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ height: "32px", flexShrink: 0, borderRadius: "10px", background: "linear-gradient(90deg, #0f61f3 28%, #5895ff 100%)", display: "flex", flexDirection: "row", padding: "0px 10px 0px 10px", gap: "6px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <Shield size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#ffffff", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "95px", fontFamily: "'Inter'", fontSize: "14px", fontWeight: 500, color: "#ffffff", lineHeight: "1.149999976158142" }}>Enforce policy</p>
          </div>
        </div>
      </div>
    </div>
  );
}
