"use client";
// Gmail drawer (axon, Drawers) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist, Geist Mono. Icons: Ingot Icons.
import { useEffect, useRef } from "react";
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
  const fuRef = useRef<any>(null);
  useEffect(() => fuInteract(fuRef.current), []);
  return (
    <div ref={fuRef} style={{ width: "540px", height: "1019px", background: "#ffffff", boxShadow: "inset 1px 0 0 0 #e8e8e8, 0px 24px 48px 0px rgba(13, 13, 18, 0.12), 0px 12px 22px 0px rgba(13, 13, 18, 0.08), 0px 1px 2px 0px rgba(79, 79, 79, 0.12)", overflow: "hidden", display: "flex", flexDirection: "column", padding: "0px 0px 0px 1px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
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
        <div data-fu="row" style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "8px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#384152", lineHeight: "20px" }}>API calls · last 24 h</p>
            <div style={{ flex: "1 1 0", minWidth: 0, height: "1px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>4,812</p>
          </div>
          <div style={{ width: "470px", height: "90px", flexShrink: 0, position: "relative" }}>
            <div data-fu="bar" style={{ position: "absolute", left: "3.79px", top: "61.8px", width: "12px", height: "25.2px", borderRadius: "3px 3px 0px 0px", background: "#1b8ce8" }} />
            <div data-fu="bar" style={{ position: "absolute", left: "23.38px", top: "56.34px", width: "12px", height: "30.66px", borderRadius: "3px 3px 0px 0px", background: "#1b8ce8" }} />
            <div data-fu="bar" style={{ position: "absolute", left: "42.96px", top: "51.51px", width: "12px", height: "35.49px", borderRadius: "3px 3px 0px 0px", background: "#1b8ce8" }} />
            <div data-fu="bar" style={{ position: "absolute", left: "62.54px", top: "47.73px", width: "12px", height: "39.27px", borderRadius: "3px 3px 0px 0px", background: "#1b8ce8" }} />
            <div data-fu="bar" style={{ position: "absolute", left: "82.13px", top: "45.42px", width: "12px", height: "41.58px", borderRadius: "3px 3px 0px 0px", background: "#1b8ce8" }} />
            <div data-fu="bar" style={{ position: "absolute", left: "101.71px", top: "45px", width: "12px", height: "42px", borderRadius: "3px 3px 0px 0px", background: "#1b8ce8" }} />
            <div data-fu="bar" style={{ position: "absolute", left: "121.29px", top: "46.47px", width: "12px", height: "40.53px", borderRadius: "3px 3px 0px 0px", background: "#1b8ce8" }} />
            <div data-fu="bar" style={{ position: "absolute", left: "140.88px", top: "49.62px", width: "12px", height: "37.38px", borderRadius: "3px 3px 0px 0px", background: "#1b8ce8" }} />
            <div data-fu="bar" style={{ position: "absolute", left: "160.46px", top: "20.43px", width: "12px", height: "66.57px", borderRadius: "3px 3px 0px 0px", background: "#1b8ce8" }} />
            <div data-fu="bar" style={{ position: "absolute", left: "180.04px", top: "25.89px", width: "12px", height: "61.11px", borderRadius: "3px 3px 0px 0px", background: "#1b8ce8" }} />
            <div data-fu="bar" style={{ position: "absolute", left: "199.63px", top: "31.35px", width: "12px", height: "55.65px", borderRadius: "3px 3px 0px 0px", background: "#1b8ce8" }} />
            <div data-fu="bar" style={{ position: "absolute", left: "219.21px", top: "36.6px", width: "12px", height: "50.4px", borderRadius: "3px 3px 0px 0px", background: "#1b8ce8" }} />
            <div data-fu="bar" style={{ position: "absolute", left: "238.79px", top: "41.01px", width: "12px", height: "45.99px", borderRadius: "3px 3px 0px 0px", background: "#1b8ce8" }} />
            <div data-fu="bar" style={{ position: "absolute", left: "258.38px", top: "43.74px", width: "12px", height: "43.26px", borderRadius: "3px 3px 0px 0px", background: "#1b8ce8" }} />
            <div data-fu="bar" style={{ position: "absolute", left: "277.96px", top: "45px", width: "12px", height: "42px", borderRadius: "3px 3px 0px 0px", background: "#1b8ce8" }} />
            <div data-fu="bar" style={{ position: "absolute", left: "297.54px", top: "44.37px", width: "12px", height: "42.63px", borderRadius: "3px 3px 0px 0px", background: "#1b8ce8" }} />
            <div data-fu="bar" style={{ position: "absolute", left: "317.13px", top: "41.85px", width: "12px", height: "45.15px", borderRadius: "3px 3px 0px 0px", background: "#1b8ce8" }} />
            <div data-fu="bar" style={{ position: "absolute", left: "336.71px", top: "37.86px", width: "12px", height: "49.14px", borderRadius: "3px 3px 0px 0px", background: "#1b8ce8" }} />
            <div data-fu="bar" style={{ position: "absolute", left: "356.29px", top: "66.42px", width: "12px", height: "20.58px", borderRadius: "3px 3px 0px 0px", background: "#1b8ce8" }} />
            <div data-fu="bar" style={{ position: "absolute", left: "375.88px", top: "60.96px", width: "12px", height: "26.04px", borderRadius: "3px 3px 0px 0px", background: "#1b8ce8" }} />
            <div data-fu="bar" style={{ position: "absolute", left: "395.46px", top: "57px", width: "12px", height: "30px", borderRadius: "3px 3px 0px 0px", background: "#e5484d" }} />
            <div data-fu="bar" style={{ position: "absolute", left: "415.04px", top: "57px", width: "12px", height: "30px", borderRadius: "3px 3px 0px 0px", background: "#e5484d" }} />
            <div data-fu="bar" style={{ position: "absolute", left: "434.63px", top: "57px", width: "12px", height: "30px", borderRadius: "3px 3px 0px 0px", background: "#e5484d" }} />
            <div data-fu="bar" style={{ position: "absolute", left: "454.21px", top: "57px", width: "12px", height: "30px", borderRadius: "3px 3px 0px 0px", background: "#e5484d" }} />
          </div>
        </div>
        <div data-fu="row" style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "8px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
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
        <div data-fu="row" style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#384152", lineHeight: "20px" }}>Used by</p>
          <div data-fu="row" style={{ alignSelf: "stretch", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #e9e9e9", display: "flex", flexDirection: "row", padding: "8px 0px 9px 0px", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "24px", height: "24px", flexShrink: 0, borderRadius: "7px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ededed, 0px 1px 2px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <svg style={{ width: "13px", height: "13px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 1.623)" d="M13 1.33225 L13 8.86629 C13 9.35595 12.6035 9.75245 12.1138 9.75245 L10.0452 9.75245 L10.0452 4.73012 L6.5 7.3897 L2.95479 4.73012 L2.95479 9.753 L0.886167 9.753 C0.769748 9.753 0.65447 9.73006 0.54692 9.68549 C0.43937 9.64092 0.341656 9.5756 0.259361 9.49325 C0.177066 9.41091 0.111802 9.31315 0.0673001 9.20557 C0.0227979 9.098 -7.0995e-05 8.98271 1.65561e-07 8.86629 L1.65561e-07 1.33225 C1.65561e-07 0.236454 1.25071 -0.389171 2.12713 0.268413 L2.95479 0.889704 L6.5 3.5482 L10.0452 0.888621 L10.8729 0.268413 C11.7488 -0.388629 13 0.236454 13 1.33225 Z" fill="#ea4335"/></svg>
            </div>
            <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>Invoice Triage</p>
            <div style={{ flexShrink: 0, borderRadius: "4.58px", background: "#fffbf0", display: "flex", flexDirection: "row", padding: "2px 8px 2px 8px", gap: "3px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <Clock size={12} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#d99a00", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#d99a00", lineHeight: "20px" }}>Waiting · 23</p>
            </div>
          </div>
          <div data-fu="row" style={{ alignSelf: "stretch", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #e9e9e9", display: "flex", flexDirection: "row", padding: "8px 0px 9px 0px", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "24px", height: "24px", flexShrink: 0, borderRadius: "7px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ededed, 0px 1px 2px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <svg style={{ width: "13px", height: "13px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 1.773 0)" d="M4.35771 6.79521 L2.51171 6.79521 L2.51171 5.76117 L4.35879 5.76117 L4.35879 6.79575 L4.35771 6.79521 Z M6.20479 0 L6.20479 3.25 L9.45479 3.25 L6.20479 0 Z M6.94308 5.76117 L5.096 5.76117 L5.096 6.79575 L6.94308 6.79575 L6.94308 5.76117 Z M6.94308 7.53404 L5.096 7.53404 L5.096 8.56863 L6.94308 8.56863 L6.94308 7.53404 Z M9.45425 3.52083 L9.45425 12.1138 C9.45425 12.6035 9.05775 13 8.56808 13 L0.886167 13 C0.769794 13 0.65456 12.9771 0.547045 12.9325 C0.439531 12.888 0.34184 12.8227 0.259552 12.7404 C0.0933638 12.5743 0 12.3489 0 12.1138 L0 0.886167 C2.40548e-16 0.3965 0.3965 0 0.886167 0 L5.93342 0 L5.93342 3.52083 L9.45425 3.52083 Z M7.68138 5.02287 L1.77233 5.02287 L1.77233 9.30692 L7.68192 9.30692 L7.68192 5.02233 L7.68138 5.02287 Z M4.35771 7.53404 L2.51171 7.53404 L2.51171 8.56863 L4.35879 8.56863 L4.35879 7.53404 L4.35771 7.53404 Z" fill="#34a853"/></svg>
            </div>
            <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>Vendor Onboarding</p>
            <div style={{ flexShrink: 0, borderRadius: "4.58px", background: "#f7f8fa", display: "flex", flexDirection: "row", padding: "2px 8px 2px 8px", gap: "3px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <PlayerPause size={12} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#697386", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#697386", lineHeight: "20px" }}>Draft</p>
            </div>
          </div>
          <div data-fu="row" style={{ alignSelf: "stretch", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #e9e9e9", display: "flex", flexDirection: "row", padding: "8px 0px 9px 0px", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
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
        <div data-fu="row" style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
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
          <div data-fu="btn" style={{ flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e8e8e8", display: "flex", flexDirection: "row", padding: "7px 13px 7px 13px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#686765", lineHeight: "20px" }}>Test connection</p>
          </div>
          <div data-fu="btn" style={{ flexShrink: 0, borderRadius: "10px", background: "linear-gradient(0deg, #1b8ce8 34.7%, #4eb0ff 93.7%)", boxShadow: "0px 8px 9px 0px rgba(0, 0, 0, 0.12), inset 0.6px 0.6px 0px 0px rgba(255, 255, 255, 0.25), inset -0.6px 0.6px 0px 0px rgba(255, 255, 255, 0.25)", display: "flex", flexDirection: "row", padding: "6px 12px 6px 12px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <Link size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#ffffff", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#ffffff", lineHeight: "20px" }}>Reconnect</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Interactions: hover and click states. Remove this function and the two lines above to get a static component.
function fuInteract(root: HTMLElement | null) {
  if (!root || root.dataset.fuOn) return;
  root.dataset.fuOn = "1";
  const doc = root.ownerDocument;
  const all = (sel: string, el: Element = root): HTMLElement[] => Array.from(el.querySelectorAll(sel)) as HTMLElement[];
  const box = (el: Element) => el.getBoundingClientRect();
  const font = getComputedStyle(root).fontFamily;
  const tip = doc.createElement("div");
  tip.setAttribute("aria-hidden", "true");
  Object.assign(tip.style, { position: "fixed", zIndex: "2147483647", pointerEvents: "none", background: "#111113", color: "#fff", font: "500 12px/16px " + font, padding: "5px 8px", borderRadius: "6px", whiteSpace: "nowrap", opacity: "0", transform: "translate(-50%, -100%)", transition: "opacity .12s", boxShadow: "0 4px 14px rgba(0,0,0,.18)" });
  doc.body.appendChild(tip);
  const show = (text: string, x: number, y: number) => { if (!text) return hide(); tip.textContent = text; tip.style.left = x + "px"; tip.style.top = y - 8 + "px"; tip.style.opacity = "1"; };
  const hide = () => { tip.style.opacity = "0"; };
  const ease = (el: HTMLElement | SVGElement, props: string) => { const s = (el as HTMLElement).style; if (!s.transition) s.transition = props; };
  const texts = (scope: Element) => all("p, span", scope).filter((t) => t.children.length === 0 && (t.textContent || "").trim());
  const NUM = /^([^\d\-+.]*)([-+]?[\d,]*\.?\d+)\s*([kKmMbB%]?)([^\d]*)$/;
  // value axis: numeric labels along one edge of the chart, used to read a mark's value from its position
  const axis = (scope: Element, vertical: boolean) => {
    const pts: { v: number; p: number; pre: string; suf: string; dec: number }[] = [];
    for (const t of texts(scope)) {
      const m = (t.textContent || "").trim().match(NUM);
      if (!m) continue;
      const mult = { k: 1e3, K: 1e3, m: 1e6, M: 1e6, b: 1e9, B: 1e9 }[m[3] as "k"] || 1;
      const r = box(t);
      pts.push({ v: parseFloat(m[2].replace(/,/g, "")) * mult, p: vertical ? r.top + r.height / 2 : r.left + r.width / 2, pre: m[1], suf: m[3] + m[4], dec: (m[2].split(".")[1] || "").length });
    }
    const uniq = pts.filter((a, i) => pts.findIndex((b) => Math.abs(b.p - a.p) < 2) === i);
    if (uniq.length < 2) return null;
    uniq.sort((a, b) => a.p - b.p);
    const a = uniq[0], b = uniq[uniq.length - 1];
    if (a.v === b.v || Math.abs(b.p - a.p) < 10) return null;
    return (pos: number) => {
      const v = a.v + ((pos - a.p) * (b.v - a.v)) / (b.p - a.p);
      const suf = a.suf || b.suf, pre = a.pre || b.pre;
      const div = /^[kK]/.test(suf) ? 1e3 : /^[mM]/.test(suf) ? 1e6 : /^[bB]/.test(suf) ? 1e9 : 1;
      const x = v / div;
      const dec = Math.max(a.dec, b.dec, div > 1 && Math.abs(x) < 100 ? 1 : 0);
      return pre + x.toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: dec }) + suf;
    };
  };
  // the chart around a group of marks: the nearest ancestor that also holds text labels
  const chartOf = (el: Element) => { let c: Element | null = el.parentElement; while (c && c !== root.parentElement) { if (texts(c).length >= 3) return c; c = c.parentElement; } return root; };
  const labelNear = (scope: Element, x: number, y: number, below: boolean) => {
    let best = "", d = 1e9;
    for (const t of texts(scope)) {
      const r = box(t);
      if (below ? r.top < y - 2 : r.right > x + 2) continue;
      if (NUM.test((t.textContent || "").trim()) && !/[a-z]{3}/i.test(t.textContent || "")) continue;
      const dd = below ? Math.abs(r.left + r.width / 2 - x) + (r.top - y) * 0.2 : Math.abs(r.top + r.height / 2 - y) + (x - r.right) * 0.1;
      if (dd < d) { d = dd; best = (t.textContent || "").trim(); }
    }
    return d < 80 ? best : "";
  };
  const dim = (els: (HTMLElement | SVGElement)[], keep: (HTMLElement | SVGElement)[]) => { for (const e of els) { ease(e, "opacity .15s"); (e as HTMLElement).style.opacity = keep.includes(e) ? "" : "0.35"; } };
  const undim = (els: (HTMLElement | SVGElement)[]) => { for (const e of els) (e as HTMLElement).style.opacity = ""; };

  // vertical bars: the hovered column (all stacked segments at that x) stays, the rest fade
  const groups = new Map<Element, HTMLElement[]>();
  for (const b of all("[data-fu=bar],[data-fu=hbar]")) { const p = b.parentElement!; if (!groups.has(p)) groups.set(p, []); groups.get(p)!.push(b); }
  groups.forEach((bars) => {
    const horiz = bars[0].dataset.fu === "hbar";
    const scope = chartOf(bars[0]);
    const val = axis(scope, !horiz);
    const peers = (b: HTMLElement) => { const r = box(b), c = horiz ? r.top + r.height / 2 : r.left + r.width / 2; return bars.filter((o) => { const q = box(o); return Math.abs((horiz ? q.top + q.height / 2 : q.left + q.width / 2) - c) < Math.max(2, (horiz ? r.height : r.width) / 2); }); };
    for (const b of bars) {
      b.addEventListener("mouseenter", () => {
        const col = peers(b);
        dim(bars, col);
        const rs = col.map(box);
        const top = Math.min(...rs.map((r) => r.top)), right = Math.max(...rs.map((r) => r.right)), r0 = rs[0];
        const label = horiz ? labelNear(scope, r0.left, r0.top + r0.height / 2, false) : labelNear(scope, r0.left + r0.width / 2, Math.max(...rs.map((r) => r.bottom)), true);
        const v = val ? val(horiz ? right : top) : "";
        show([label, v].filter(Boolean).join(" · "), horiz ? right : r0.left + r0.width / 2, horiz ? r0.top : top);
      });
      b.addEventListener("mouseleave", () => { undim(bars); hide(); });
    }
  });

  // line and area plots: a guide line and a dot follow the pointer along the top edge of the plotted shape
  for (const svg of all("svg[data-fu=plot]") as unknown as SVGSVGElement[]) {
    const paths = Array.from(svg.querySelectorAll("path, polyline")) as SVGGeometryElement[];
    if (!paths.length) continue;
    const line = paths.reduce((a, b) => (b.getTotalLength() > a.getTotalLength() ? b : a));
    const len = line.getTotalLength();
    const pts: { x: number; y: number }[] = [];
    for (let i = 0; i <= 800; i++) { const q = line.getPointAtLength((len * i) / 800); pts.push({ x: q.x, y: q.y }); }
    const xs = pts.map((q) => q.x), minX = Math.min(...xs), maxX = Math.max(...xs);
    const color = (line.getAttribute("stroke") && line.getAttribute("stroke") !== "none" ? line.getAttribute("stroke") : line.getAttribute("fill")) || "#111";
    const NS = "http://www.w3.org/2000/svg";
    const g = doc.createElementNS(NS, "g");
    g.setAttribute("pointer-events", "none");
    g.style.opacity = "0";
    const guide = doc.createElementNS(NS, "line");
    guide.setAttribute("stroke", /^url/.test(color) ? "#111" : color);
    guide.setAttribute("stroke-dasharray", "3 3");
    guide.setAttribute("stroke-opacity", "0.5");
    const dot = doc.createElementNS(NS, "circle");
    dot.setAttribute("r", "4");
    dot.setAttribute("fill", "#fff");
    dot.setAttribute("stroke", /^url/.test(color) ? "#111" : color);
    dot.setAttribute("stroke-width", "2");
    g.append(guide, dot);
    svg.appendChild(g);
    const scope = chartOf(svg);
    const val = axis(scope, true);
    const area = svg.parentElement || svg;
    area.addEventListener("mousemove", (ev: Event) => {
      const e = ev as MouseEvent;
      const m = line.getScreenCTM();
      if (!m) return;
      const px = new DOMPoint(e.clientX, e.clientY).matrixTransform(m.inverse()).x;
      if (px < minX - 4 || px > maxX + 4) { g.style.opacity = "0"; hide(); return; }
      const step = (maxX - minX) / 400 || 1;
      let y = Infinity, x = px;
      for (const q of pts) if (Math.abs(q.x - px) <= step && q.y < y) { y = q.y; x = q.x; }
      if (y === Infinity) return;
      const bb = line.getBBox();
      guide.setAttribute("x1", String(x)); guide.setAttribute("x2", String(x));
      guide.setAttribute("y1", String(bb.y)); guide.setAttribute("y2", String(bb.y + bb.height));
      dot.setAttribute("cx", String(x)); dot.setAttribute("cy", String(y));
      g.style.opacity = "1";
      const sp = new DOMPoint(x, y).matrixTransform(m);
      const label = labelNear(scope, sp.x, box(svg).bottom, true);
      show([label, val ? val(sp.y) : ""].filter(Boolean).join(" · "), sp.x, sp.y);
    });
    area.addEventListener("mouseleave", () => { g.style.opacity = "0"; hide(); });
  }

  // rows: a soft highlight under the pointer
  for (const r of all("[data-fu=row]")) {
    r.addEventListener("mouseenter", () => { ease(r, "filter .15s"); r.style.filter = "brightness(0.975)"; });
    r.addEventListener("mouseleave", () => { r.style.filter = ""; });
  }

  // buttons: hover and press feedback
  for (const b of all("[data-fu=btn],[data-fu=tab]")) {
    b.style.cursor = "pointer";
    b.addEventListener("mouseenter", () => { ease(b, "filter .15s, transform .1s"); if (!b.dataset.fuActive) b.style.filter = "brightness(0.96)"; });
    b.addEventListener("mouseleave", () => { b.style.filter = ""; b.style.transform = ""; });
    b.addEventListener("mousedown", () => { b.style.transform = "scale(0.98)"; });
    b.addEventListener("mouseup", () => { b.style.transform = ""; });
  }

  // tabs and segmented controls: clicking a tab moves the selected look onto it
  const VIS = ["background-color", "background-image", "box-shadow", "border-color", "color", "font-weight"];
  const look = (el: HTMLElement) => VIS.map((k) => el.style.getPropertyValue(k)).join("|");
  const tabGroups = new Map<Element, HTMLElement[]>();
  for (const t of all("[data-fu=tab]")) { const p = t.parentElement!; if (!tabGroups.has(p)) tabGroups.set(p, []); tabGroups.get(p)!.push(t); }
  tabGroups.forEach((tabs) => {
    if (tabs.length < 2) return;
    const counts = new Map<string, number>();
    for (const t of tabs) counts.set(look(t), (counts.get(look(t)) || 0) + 1);
    let active = tabs.find((t) => counts.get(look(t)) === 1 && counts.size > 1) || null;
    if (!active) return;
    active.dataset.fuActive = "1";
    // read both looks first, then write: swapping one property at a time would let shorthands undo each other
    const swapStyle = (a: HTMLElement, b: HTMLElement, props: string[]) => {
      const va = props.map((k) => a.style.getPropertyValue(k)), vb = props.map((k) => b.style.getPropertyValue(k));
      props.forEach((k, i) => { a.style.setProperty(k, vb[i]); b.style.setProperty(k, va[i]); });
    };
    const swap = (a: HTMLElement, b: HTMLElement) => {
      swapStyle(a, b, VIS);
      const ta = texts(a), tb = texts(b);
      for (let i = 0; i < Math.min(ta.length, tb.length); i++) swapStyle(ta[i], tb[i], ["color", "font-weight"]);
    };
    for (const t of tabs) t.addEventListener("click", () => {
      if (!active || t === active) return;
      t.style.filter = "";
      swap(active, t);
      delete active.dataset.fuActive;
      active = t;
      t.dataset.fuActive = "1";
    });
  });
}
