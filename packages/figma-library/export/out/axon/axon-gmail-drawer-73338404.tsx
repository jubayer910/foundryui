// Gmail drawer (axon, Drawers) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist, Geist Mono. Icons: Ingot Icons.
import type { SVGProps } from "react";

// Ingot Icons used here, inlined so this file needs no icon package.
function icon(body: string) {
  return function Icon({ size = 24, strokeWidth = 1.5, ...p }: { size?: number; strokeWidth?: number } & SVGProps<SVGSVGElement>) {
    const html = strokeWidth == 1.5 ? body : body.replace(/stroke-width="([\d.]+)"/g, (_, w) => `stroke-width="${(Number(w) * Number(strokeWidth)) / 1.5}"`);
    return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden {...p} dangerouslySetInnerHTML={{ __html: html }} />;
  };
}
const AlertCircle = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0\" /><path d=\"M12 8v4\" /><path d=\"M12 16h.01\" /></g>");
const Clock = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0\" /><path d=\"M12 7v5l3 3\" /></g>");
const Link = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M9 15l6 -6\" /><path d=\"M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464\" /><path d=\"M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463\" /></g>");
const PlayerPause = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M6 6a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -12\" /><path d=\"M14 6a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -12\" /></g>");
const X = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M18 6l-12 12\" /><path d=\"M6 6l12 12\" /></g>");

export function GmailDrawer() {
  return (
    <div style={{ width: "540px", height: "1019px", background: "#ffffff", boxShadow: "inset 1px 0 0 0 #e8e8e8, 0px 24px 48px 0px rgba(13, 13, 18, 0.12), 0px 12px 22px 0px rgba(13, 13, 18, 0.08), 0px 1px 2px 0px rgba(79, 79, 79, 0.12)", overflow: "hidden", display: "flex", flexDirection: "column", padding: "0px 0px 0px 1px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
      <div style={{ alignSelf: "stretch", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #e9e9e9", display: "flex", flexDirection: "row", padding: "18px 16px 17px 20px", gap: "10px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ width: "36px", height: "36px", flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ededed, 0px 1px 2px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <svg style={{ width: "20px", height: "20px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 2.498)" d="M20 2.04961 L20 13.6404 C20 14.3938 19.39 15.0038 18.6367 15.0038 L15.4542 15.0038 L15.4542 7.27711 L10 11.3688 L4.54583 7.27711 L4.54583 15.0046 L1.36333 15.0046 C1.18423 15.0046 1.00688 14.9693 0.841416 14.9008 C0.675954 14.8322 0.525625 14.7317 0.399017 14.605 C0.272408 14.4783 0.172003 14.3279 0.103539 14.1624 C0.0350736 13.9969 -0.000109223 13.8195 2.5471e-07 13.6404 L2.5471e-07 2.04961 C2.5471e-07 0.363776 1.92417 -0.598724 3.2725 0.412942 L4.54583 1.36878 L10 5.45878 L15.4542 1.36711 L16.7275 0.412942 C18.075 -0.597891 20 0.363776 20 2.04961 Z" fill="#ea4335"/></svg>
        </div>
        <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "16px", fontWeight: 400, color: "#15171c", lineHeight: "24px", letterSpacing: "-0.1px" }}>Gmail</p>
            <div style={{ flexShrink: 0, borderRadius: "4.58px", background: "#fff1f1", display: "flex", flexDirection: "row", padding: "2px 8px 2px 8px", gap: "3px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <AlertCircle size={12} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#e5484d", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#e5484d", lineHeight: "20px" }}>Expired</p>
            </div>
          </div>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>finance@acme.com · connected by Chara Lee · Mar 12</p>
        </div>
        <div style={{ width: "28px", height: "28px", flexShrink: 0, borderRadius: "7px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <X size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
        </div>
      </div>
      <div style={{ alignSelf: "stretch", flex: "1 1 0", minHeight: 0, flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "column", padding: "20px 20px 20px 20px", gap: "18px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ alignSelf: "stretch", flexShrink: 0, borderRadius: "10px", background: "#fff1f1", display: "flex", flexDirection: "row", padding: "12px 12px 12px 12px", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <AlertCircle size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#e5484d", display: "block" }} />
          <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>
            <span style={{ fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>{"Google revoked the token at "}</span>
            <span style={{ fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>09:28</span>
            <span style={{ fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>{" (password change). "}</span>
            <span style={{ fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>23</span>
            <span style={{ fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>{" runs are waiting and will resume after reconnecting."}</span>
          </p>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "8px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#384152", lineHeight: "20px" }}>API calls · last 24 h</p>
            <div style={{ flex: "1 1 0", minWidth: 0, height: "1px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>4,812</p>
          </div>
          <div style={{ width: "470px", height: "90px", flexShrink: 0, position: "relative" }}>
            <div style={{ position: "absolute", left: "3.79px", top: "61.8px", width: "12px", height: "25.2px", borderRadius: "3px 3px 0px 0px", background: "#1b8ce8" }} />
            <div style={{ position: "absolute", left: "23.38px", top: "56.34px", width: "12px", height: "30.66px", borderRadius: "3px 3px 0px 0px", background: "#1b8ce8" }} />
            <div style={{ position: "absolute", left: "42.96px", top: "51.51px", width: "12px", height: "35.49px", borderRadius: "3px 3px 0px 0px", background: "#1b8ce8" }} />
            <div style={{ position: "absolute", left: "62.54px", top: "47.73px", width: "12px", height: "39.27px", borderRadius: "3px 3px 0px 0px", background: "#1b8ce8" }} />
            <div style={{ position: "absolute", left: "82.13px", top: "45.42px", width: "12px", height: "41.58px", borderRadius: "3px 3px 0px 0px", background: "#1b8ce8" }} />
            <div style={{ position: "absolute", left: "101.71px", top: "45px", width: "12px", height: "42px", borderRadius: "3px 3px 0px 0px", background: "#1b8ce8" }} />
            <div style={{ position: "absolute", left: "121.29px", top: "46.47px", width: "12px", height: "40.53px", borderRadius: "3px 3px 0px 0px", background: "#1b8ce8" }} />
            <div style={{ position: "absolute", left: "140.88px", top: "49.62px", width: "12px", height: "37.38px", borderRadius: "3px 3px 0px 0px", background: "#1b8ce8" }} />
            <div style={{ position: "absolute", left: "160.46px", top: "20.43px", width: "12px", height: "66.57px", borderRadius: "3px 3px 0px 0px", background: "#1b8ce8" }} />
            <div style={{ position: "absolute", left: "180.04px", top: "25.89px", width: "12px", height: "61.11px", borderRadius: "3px 3px 0px 0px", background: "#1b8ce8" }} />
            <div style={{ position: "absolute", left: "199.63px", top: "31.35px", width: "12px", height: "55.65px", borderRadius: "3px 3px 0px 0px", background: "#1b8ce8" }} />
            <div style={{ position: "absolute", left: "219.21px", top: "36.6px", width: "12px", height: "50.4px", borderRadius: "3px 3px 0px 0px", background: "#1b8ce8" }} />
            <div style={{ position: "absolute", left: "238.79px", top: "41.01px", width: "12px", height: "45.99px", borderRadius: "3px 3px 0px 0px", background: "#1b8ce8" }} />
            <div style={{ position: "absolute", left: "258.38px", top: "43.74px", width: "12px", height: "43.26px", borderRadius: "3px 3px 0px 0px", background: "#1b8ce8" }} />
            <div style={{ position: "absolute", left: "277.96px", top: "45px", width: "12px", height: "42px", borderRadius: "3px 3px 0px 0px", background: "#1b8ce8" }} />
            <div style={{ position: "absolute", left: "297.54px", top: "44.37px", width: "12px", height: "42.63px", borderRadius: "3px 3px 0px 0px", background: "#1b8ce8" }} />
            <div style={{ position: "absolute", left: "317.13px", top: "41.85px", width: "12px", height: "45.15px", borderRadius: "3px 3px 0px 0px", background: "#1b8ce8" }} />
            <div style={{ position: "absolute", left: "336.71px", top: "37.86px", width: "12px", height: "49.14px", borderRadius: "3px 3px 0px 0px", background: "#1b8ce8" }} />
            <div style={{ position: "absolute", left: "356.29px", top: "66.42px", width: "12px", height: "20.58px", borderRadius: "3px 3px 0px 0px", background: "#1b8ce8" }} />
            <div style={{ position: "absolute", left: "375.88px", top: "60.96px", width: "12px", height: "26.04px", borderRadius: "3px 3px 0px 0px", background: "#1b8ce8" }} />
            <div style={{ position: "absolute", left: "395.46px", top: "57px", width: "12px", height: "30px", borderRadius: "3px 3px 0px 0px", background: "#e5484d" }} />
            <div style={{ position: "absolute", left: "415.04px", top: "57px", width: "12px", height: "30px", borderRadius: "3px 3px 0px 0px", background: "#e5484d" }} />
            <div style={{ position: "absolute", left: "434.63px", top: "57px", width: "12px", height: "30px", borderRadius: "3px 3px 0px 0px", background: "#e5484d" }} />
            <div style={{ position: "absolute", left: "454.21px", top: "57px", width: "12px", height: "30px", borderRadius: "3px 3px 0px 0px", background: "#e5484d" }} />
          </div>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "8px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#384152", lineHeight: "20px" }}>Daily quota</p>
            <div style={{ flex: "1 1 0", minWidth: 0, height: "1px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>
              <span style={{ fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>4,812</span>
              <span style={{ fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>{" / 20,000"}</span>
            </p>
          </div>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#1b8ce8" }} />
            <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#1b8ce8" }} />
            <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#1b8ce8" }} />
            <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#1b8ce8" }} />
            <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#1b8ce8" }} />
            <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#1b8ce8" }} />
            <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#1b8ce8" }} />
            <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#1b8ce8" }} />
            <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#1b8ce8" }} />
            <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#1b8ce8" }} />
            <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#1b8ce8" }} />
            <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#1b8ce8" }} />
            <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#1b8ce8" }} />
            <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#1b8ce8" }} />
            <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#1b8ce8" }} />
            <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#1b8ce8" }} />
            <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#1b8ce8" }} />
            <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#1b8ce8" }} />
            <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#1b8ce8" }} />
            <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#1b8ce8" }} />
            <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#1b8ce8" }} />
            <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#1b8ce8" }} />
            <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#1b8ce8" }} />
            <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#1b8ce8" }} />
            <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#1b8ce8" }} />
            <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#1b8ce8" }} />
            <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#1b8ce8" }} />
            <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#1b8ce8" }} />
            <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#1b8ce8" }} />
            <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#1b8ce8" }} />
            <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#1b8ce8" }} />
            <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#1b8ce8" }} />
            <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#1b8ce8" }} />
            <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#1b8ce8" }} />
            <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#1b8ce8" }} />
            <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#1b8ce8" }} />
            <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5" }} />
            <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5" }} />
            <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5" }} />
            <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5" }} />
            <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5" }} />
            <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5" }} />
            <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5" }} />
            <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5" }} />
            <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5" }} />
            <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5" }} />
            <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5" }} />
            <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5" }} />
            <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5" }} />
            <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5" }} />
            <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5" }} />
            <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5" }} />
            <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5" }} />
            <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5" }} />
            <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5" }} />
            <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5" }} />
            <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5" }} />
            <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5" }} />
            <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5" }} />
            <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5" }} />
            <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5" }} />
            <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5" }} />
            <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5" }} />
            <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5" }} />
            <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5" }} />
            <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5" }} />
            <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5" }} />
            <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5" }} />
            <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5" }} />
            <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5" }} />
            <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5" }} />
            <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5" }} />
            <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5" }} />
            <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5" }} />
            <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5" }} />
            <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5" }} />
            <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5" }} />
            <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5" }} />
            <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5" }} />
            <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5" }} />
            <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5" }} />
            <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5" }} />
            <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5" }} />
            <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5" }} />
            <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5" }} />
            <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5" }} />
            <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5" }} />
            <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5" }} />
            <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5" }} />
            <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5" }} />
            <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5" }} />
            <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5" }} />
            <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5" }} />
            <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5" }} />
            <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5" }} />
            <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5" }} />
            <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5" }} />
            <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5" }} />
            <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5" }} />
            <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5" }} />
            <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5" }} />
            <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5" }} />
            <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5" }} />
            <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5" }} />
            <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5" }} />
            <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5" }} />
            <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5" }} />
            <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5" }} />
            <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5" }} />
            <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5" }} />
            <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5" }} />
            <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5" }} />
            <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5" }} />
            <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5" }} />
            <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5" }} />
            <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5" }} />
            <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5" }} />
            <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5" }} />
            <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5" }} />
            <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5" }} />
            <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5" }} />
            <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5" }} />
            <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5" }} />
            <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5" }} />
            <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5" }} />
            <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5" }} />
            <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5" }} />
            <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5" }} />
            <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5" }} />
            <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5" }} />
            <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5" }} />
            <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5" }} />
            <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5" }} />
            <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5" }} />
            <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5" }} />
            <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5" }} />
            <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5" }} />
            <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5" }} />
            <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5" }} />
            <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5" }} />
            <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5" }} />
            <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5" }} />
            <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5" }} />
            <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5" }} />
            <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5" }} />
            <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5" }} />
            <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5" }} />
            <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5" }} />
            <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5" }} />
          </div>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#384152", lineHeight: "20px" }}>Used by</p>
          <div style={{ alignSelf: "stretch", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #e9e9e9", display: "flex", flexDirection: "row", padding: "8px 0px 9px 0px", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "24px", height: "24px", flexShrink: 0, borderRadius: "7px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ededed, 0px 1px 2px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <svg style={{ width: "13px", height: "13px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 1.623)" d="M13 1.33225 L13 8.86629 C13 9.35595 12.6035 9.75245 12.1138 9.75245 L10.0452 9.75245 L10.0452 4.73012 L6.5 7.3897 L2.95479 4.73012 L2.95479 9.753 L0.886167 9.753 C0.769748 9.753 0.65447 9.73006 0.54692 9.68549 C0.43937 9.64092 0.341656 9.5756 0.259361 9.49325 C0.177066 9.41091 0.111802 9.31315 0.0673001 9.20557 C0.0227979 9.098 -7.0995e-05 8.98271 1.65561e-07 8.86629 L1.65561e-07 1.33225 C1.65561e-07 0.236454 1.25071 -0.389171 2.12713 0.268413 L2.95479 0.889704 L6.5 3.5482 L10.0452 0.888621 L10.8729 0.268413 C11.7488 -0.388629 13 0.236454 13 1.33225 Z" fill="#ea4335"/></svg>
            </div>
            <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>Invoice Triage</p>
            <div style={{ flexShrink: 0, borderRadius: "4.58px", background: "#fffbf0", display: "flex", flexDirection: "row", padding: "2px 8px 2px 8px", gap: "3px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <Clock size={12} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#d99a00", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#d99a00", lineHeight: "20px" }}>Waiting · 23</p>
            </div>
          </div>
          <div style={{ alignSelf: "stretch", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #e9e9e9", display: "flex", flexDirection: "row", padding: "8px 0px 9px 0px", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "24px", height: "24px", flexShrink: 0, borderRadius: "7px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ededed, 0px 1px 2px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <svg style={{ width: "13px", height: "13px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 1.773 0)" d="M4.35771 6.79521 L2.51171 6.79521 L2.51171 5.76117 L4.35879 5.76117 L4.35879 6.79575 L4.35771 6.79521 Z M6.20479 0 L6.20479 3.25 L9.45479 3.25 L6.20479 0 Z M6.94308 5.76117 L5.096 5.76117 L5.096 6.79575 L6.94308 6.79575 L6.94308 5.76117 Z M6.94308 7.53404 L5.096 7.53404 L5.096 8.56863 L6.94308 8.56863 L6.94308 7.53404 Z M9.45425 3.52083 L9.45425 12.1138 C9.45425 12.6035 9.05775 13 8.56808 13 L0.886167 13 C0.769794 13 0.65456 12.9771 0.547045 12.9325 C0.439531 12.888 0.34184 12.8227 0.259552 12.7404 C0.0933638 12.5743 0 12.3489 0 12.1138 L0 0.886167 C2.40548e-16 0.3965 0.3965 0 0.886167 0 L5.93342 0 L5.93342 3.52083 L9.45425 3.52083 Z M7.68138 5.02287 L1.77233 5.02287 L1.77233 9.30692 L7.68192 9.30692 L7.68192 5.02233 L7.68138 5.02287 Z M4.35771 7.53404 L2.51171 7.53404 L2.51171 8.56863 L4.35879 8.56863 L4.35879 7.53404 L4.35771 7.53404 Z" fill="#34a853"/></svg>
            </div>
            <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>Vendor Onboarding</p>
            <div style={{ flexShrink: 0, borderRadius: "4.58px", background: "#f7f8fa", display: "flex", flexDirection: "row", padding: "2px 8px 2px 8px", gap: "3px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <PlayerPause size={12} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#697386", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#697386", lineHeight: "20px" }}>Draft</p>
            </div>
          </div>
          <div style={{ alignSelf: "stretch", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #e9e9e9", display: "flex", flexDirection: "row", padding: "8px 0px 9px 0px", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "24px", height: "24px", flexShrink: 0, borderRadius: "7px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ededed, 0px 1px 2px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <svg style={{ width: "13px", height: "13px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 1.623)" d="M13 1.33225 L13 8.86629 C13 9.35595 12.6035 9.75245 12.1138 9.75245 L10.0452 9.75245 L10.0452 4.73012 L6.5 7.3897 L2.95479 4.73012 L2.95479 9.753 L0.886167 9.753 C0.769748 9.753 0.65447 9.73006 0.54692 9.68549 C0.43937 9.64092 0.341656 9.5756 0.259361 9.49325 C0.177066 9.41091 0.111802 9.31315 0.0673001 9.20557 C0.0227979 9.098 -7.0995e-05 8.98271 1.65561e-07 8.86629 L1.65561e-07 1.33225 C1.65561e-07 0.236454 1.25071 -0.389171 2.12713 0.268413 L2.95479 0.889704 L6.5 3.5482 L10.0452 0.888621 L10.8729 0.268413 C11.7488 -0.388629 13 0.236454 13 1.33225 Z" fill="#ea4335"/></svg>
            </div>
            <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>Contract Renewal Alerts</p>
            <div style={{ flexShrink: 0, borderRadius: "4.58px", background: "#fffbf0", display: "flex", flexDirection: "row", padding: "2px 8px 2px 8px", gap: "3px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <Clock size={12} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#d99a00", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#d99a00", lineHeight: "20px" }}>Waiting · 0</p>
            </div>
          </div>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#384152", lineHeight: "20px" }}>Scopes</p>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "6px 0px 6px 0px", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>gmail.readonly</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "right", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>Read messages & attachments</p>
          </div>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "6px 0px 6px 0px", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>gmail.labels</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "right", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>Apply labels after processing</p>
          </div>
        </div>
      </div>
      <div style={{ alignSelf: "stretch", flexShrink: 0, background: "#f9f9f9", boxShadow: "inset 0 1px 0 0 #e9e9e9", display: "flex", flexDirection: "row", padding: "13px 20px 12px 20px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, borderRadius: "10px", boxShadow: "inset 0 0 0 1px rgba(31, 31, 33, 0.06)", display: "flex", flexDirection: "row", padding: "7px 13px 7px 13px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#e5484d", lineHeight: "20px" }}>Disconnect</p>
          </div>
        </div>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e8e8e8", display: "flex", flexDirection: "row", padding: "7px 13px 7px 13px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#686765", lineHeight: "20px" }}>Test connection</p>
          </div>
          <div style={{ flexShrink: 0, borderRadius: "10px", background: "linear-gradient(0deg, #1b8ce8 34.7%, #4eb0ff 93.7%)", boxShadow: "0px 8px 9px 0px rgba(0, 0, 0, 0.12), inset 0.6px 0.6px 0px 0px rgba(255, 255, 255, 0.25), inset -0.6px 0.6px 0px 0px rgba(255, 255, 255, 0.25)", display: "flex", flexDirection: "row", padding: "6px 12px 6px 12px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <Link size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#ffffff", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#ffffff", lineHeight: "20px" }}>Reconnect</p>
          </div>
        </div>
      </div>
    </div>
  );
}
