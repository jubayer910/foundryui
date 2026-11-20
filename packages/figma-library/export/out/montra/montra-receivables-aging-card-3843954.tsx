"use client";
// Receivables aging card (montra, Charts) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Ingot Icons.
import { useEffect, useRef } from "react";
import { Calendar, ChevronDown } from "ingotui-icons/react/stroke-rounded";

export function ReceivablesAgingCard() {
  const fuRef = useRef<any>(null);
  useEffect(() => fuInteract(fuRef.current), []);
  return (
    <div ref={fuRef} style={{ width: "711px", height: "353.7px", borderRadius: "10.97px", background: "#fefefe", boxShadow: "inset 0 0 0 0.91px #ededed", overflow: "hidden", position: "relative" }}>
      <p style={{ position: "absolute", left: "18.28px", top: "18.28px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "125px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.62px", fontWeight: 500, color: "#000000" }}>Receivables aging</p>
      <p style={{ position: "absolute", left: "18.28px", top: "43.87px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "322px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#6b6b6b" }}>Open invoices by due date, and when cash should land.</p>
      <div data-fu="btn" style={{ position: "absolute", left: "577.9px", top: "18.28px", width: "114.82px", height: "29.24px", borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8, 0px 0.91px 1.83px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "row", padding: "0.91px 8.22px 0.91px 8.22px", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <Calendar size={16.5} style={{ width: "16.45px", height: "16.45px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "60px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#6c6c6c" }}>By due date</p>
        <ChevronDown size={11} strokeWidth={1.51} style={{ width: "10.97px", height: "10.97px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
      </div>
      <div style={{ position: "absolute", left: "18.28px", top: "76.77px", width: "674.44px", height: "23.76px", display: "flex", flexDirection: "row", gap: "2.74px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ width: "354.75px", height: "23.76px", flexShrink: 0, borderRadius: "11.88px", background: "linear-gradient(180deg, #61a4fe 0%, #4996fe 100%)", boxShadow: "inset 0 0 0 1px rgba(57, 117, 198, 0.38), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.18), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
        <div style={{ width: "148.52px", height: "23.76px", flexShrink: 0, borderRadius: "11.88px", background: "linear-gradient(180deg, #9d93fd 0%, #8e83fd 100%)", boxShadow: "inset 0 0 0 1px rgba(111, 102, 197, 0.38), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.18), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
        <div style={{ width: "105.24px", height: "23.76px", flexShrink: 0, borderRadius: "11.88px", background: "linear-gradient(180deg, #fd974a 0%, #fd872f 100%)", boxShadow: "inset 0 0 0 1px rgba(197, 105, 37, 0.38), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.18), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
        <div style={{ width: "57.71px", height: "23.76px", flexShrink: 0, borderRadius: "11.88px", background: "linear-gradient(180deg, #f56977 0%, #f45363 100%)", boxShadow: "inset 0 0 0 1px rgba(190, 65, 77, 0.38), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.18), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden", position: "relative" }}>
          <svg style={{ position: "absolute", left: "-23.76px", top: "0px", width: "128.87px", height: "23.76px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="128.87" height="23.76" viewBox="0 0 128.87 23.76" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 23.76 L0.452548 24.2125 L24.2125 0.452548 L23.76 0 L23.3075 -0.452548 L-0.452548 23.3075 L0 23.76 Z M4.57 23.76 L5.02255 24.2125 L28.7825 0.452548 L28.33 0 L27.8775 -0.452548 L4.11745 23.3075 L4.57 23.76 Z M9.14 23.76 L9.59255 24.2125 L33.3526 0.452548 L32.9 0 L32.4475 -0.452548 L8.68745 23.3075 L9.14 23.76 Z M13.71 23.76 L14.1625 24.2125 L37.9226 0.452548 L37.47 0 L37.0175 -0.452548 L13.2575 23.3075 L13.71 23.76 Z M18.28 23.76 L18.7325 24.2125 L42.4925 0.452548 L42.04 0 L41.5875 -0.452548 L17.8275 23.3075 L18.28 23.76 Z M22.85 23.76 L23.3025 24.2125 L47.0625 0.452548 L46.61 0 L46.1575 -0.452548 L22.3975 23.3075 L22.85 23.76 Z M27.42 23.76 L27.8725 24.2125 L51.6325 0.452548 L51.18 0 L50.7275 -0.452548 L26.9675 23.3075 L27.42 23.76 Z M31.99 23.76 L32.4425 24.2125 L56.2025 0.452548 L55.75 0 L55.2975 -0.452548 L31.5375 23.3075 L31.99 23.76 Z M36.56 23.76 L37.0126 24.2125 L60.7725 0.452548 L60.32 0 L59.8675 -0.452548 L36.1075 23.3075 L36.56 23.76 Z M41.13 23.76 L41.5826 24.2125 L65.3425 0.452548 L64.89 0 L64.4375 -0.452548 L40.6775 23.3075 L41.13 23.76 Z M45.7 23.76 L46.1525 24.2125 L69.9125 0.452548 L69.46 0 L69.0075 -0.452548 L45.2475 23.3075 L45.7 23.76 Z M50.27 23.76 L50.7225 24.2125 L74.4825 0.452548 L74.03 0 L73.5775 -0.452548 L49.8175 23.3075 L50.27 23.76 Z M54.84 23.76 L55.2925 24.2125 L79.0525 0.452548 L78.6 0 L78.1475 -0.452548 L54.3875 23.3075 L54.84 23.76 Z M59.41 23.76 L59.8625 24.2125 L83.6225 0.452548 L83.17 0 L82.7175 -0.452548 L58.9575 23.3075 L59.41 23.76 Z M63.98 23.76 L64.4325 24.2125 L88.1925 0.452548 L87.74 0 L87.2875 -0.452548 L63.5275 23.3075 L63.98 23.76 Z M68.55 23.76 L69.0025 24.2125 L92.7625 0.452548 L92.31 0 L91.8575 -0.452548 L68.0975 23.3075 L68.55 23.76 Z M73.12 23.76 L73.5725 24.2125 L97.3325 0.452548 L96.88 0 L96.4275 -0.452548 L72.6675 23.3075 L73.12 23.76 Z M77.69 23.76 L78.1425 24.2125 L101.903 0.452548 L101.45 0 L100.997 -0.452548 L77.2375 23.3075 L77.69 23.76 Z M82.26 23.76 L82.7125 24.2125 L106.473 0.452548 L106.02 0 L105.567 -0.452548 L81.8075 23.3075 L82.26 23.76 Z M86.83 23.76 L87.2825 24.2125 L111.043 0.452548 L110.59 0 L110.137 -0.452548 L86.3775 23.3075 L86.83 23.76 Z M91.4 23.76 L91.8525 24.2125 L115.613 0.452548 L115.16 0 L114.707 -0.452548 L90.9475 23.3075 L91.4 23.76 Z M95.97 23.76 L96.4225 24.2125 L120.183 0.452548 L119.73 0 L119.277 -0.452548 L95.5175 23.3075 L95.97 23.76 Z M100.54 23.76 L100.993 24.2125 L124.753 0.452548 L124.3 0 L123.847 -0.452548 L100.087 23.3075 L100.54 23.76 Z M105.11 23.76 L105.563 24.2125 L129.323 0.452548 L128.87 0 L128.417 -0.452548 L104.657 23.3075 L105.11 23.76 Z" fill="#ffffff" fillOpacity="0.09"/></svg>
        </div>
      </div>
      <div style={{ position: "absolute", left: "18.28px", top: "113.32px", width: "674.44px", height: "36.66px", display: "flex", flexDirection: "row", gap: "10.97px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ width: "160.38px", flexShrink: 0, boxShadow: "inset 1.83px 0 0 0 #4996fe", display: "flex", flexDirection: "column", padding: "0px 0px 0px 10.97px", gap: "3.66px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "59px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#6b6b6b" }}>Not yet due</p>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "5.48px", justifyContent: "flex-start", alignItems: "baseline", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "46px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.62px", fontWeight: 500, color: "#202020" }}>$4,180</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "74px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 400, color: "#a6a6a6" }}>53% · 4 invoices</p>
          </div>
        </div>
        <div style={{ width: "160.38px", flexShrink: 0, boxShadow: "inset 1.83px 0 0 0 #8e83fd", display: "flex", flexDirection: "column", padding: "0px 0px 0px 10.97px", gap: "3.66px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "86px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#6b6b6b" }}>Due in 1–30 days</p>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "5.48px", justifyContent: "flex-start", alignItems: "baseline", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "45px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.62px", fontWeight: 500, color: "#202020" }}>$1,750</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "74px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 400, color: "#a6a6a6" }}>22% · 2 invoices</p>
          </div>
        </div>
        <div style={{ width: "160.38px", flexShrink: 0, boxShadow: "inset 1.83px 0 0 0 #fd872f", display: "flex", flexDirection: "column", padding: "0px 0px 0px 10.97px", gap: "3.66px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "73px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#6b6b6b" }}>1–30 days late</p>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "5.48px", justifyContent: "flex-start", alignItems: "baseline", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "47px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.62px", fontWeight: 500, color: "#202020" }}>$1,240</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "72px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 400, color: "#a6a6a6" }}>16% · 2 invoices</p>
          </div>
        </div>
        <div style={{ width: "160.38px", flexShrink: 0, boxShadow: "inset 1.83px 0 0 0 #f45363", display: "flex", flexDirection: "column", padding: "0px 0px 0px 10.97px", gap: "3.66px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "69px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#6b6b6b" }}>30+ days late</p>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "5.48px", justifyContent: "flex-start", alignItems: "baseline", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "38px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.62px", fontWeight: 500, color: "#202020" }}>$680</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "60px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 400, color: "#a6a6a6" }}>9% · 1 invoice</p>
          </div>
        </div>
      </div>
      <div style={{ position: "absolute", left: "18.28px", top: "168.16px", width: "674.44px", height: "0.91px", background: "#ededed" }} />
      <div style={{ position: "absolute", left: "18.28px", top: "180.95px", width: "674.44px", height: "17px", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "114px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#000000" }}>Collection forecast</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "67px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#6b6b6b" }}>next 6 weeks</p>
        </div>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "12.79px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "9.14px", height: "9.14px", flexShrink: 0, borderRadius: "1.83px", background: "#4996fe", boxShadow: "inset 0 0 0 0.91px rgba(214, 214, 214, 0.4), inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.29)" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "48px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#24322e" }}>Expected</p>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "9.14px", height: "9.14px", flexShrink: 0, borderRadius: "1.83px", background: "#fecfac", boxShadow: "inset 0 0 0 0.91px rgba(214, 214, 214, 0.4), inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.29)" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "33px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#24322e" }}>At risk</p>
          </div>
        </div>
      </div>
      <div style={{ position: "absolute", left: "18.28px", top: "206.54px", width: "674.44px", height: "139.85px" }}>
        <div style={{ position: "absolute", left: "34.73px", top: "7.31px", width: "103.26px", height: "112.43px", borderRadius: "7.31px", background: "rgba(73, 150, 254, 0.06)" }} />
        <svg style={{ position: "absolute", left: "32.9px", top: "7.31px", width: "641.54px", height: "1px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="641.54" height="1" viewBox="0 0 641.54 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0L641.5399780273438 0" fill="none" stroke="#efeff1" strokeWidth="1" strokeDasharray="2.740000009536743 2.740000009536743" strokeLinecap="butt"/></svg>
        <p style={{ position: "absolute", left: "0px", top: "0.31px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "30px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#6b6b6b" }}>$3.6K</p>
        <svg style={{ position: "absolute", left: "32.9px", top: "63.53px", width: "641.54px", height: "1px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="641.54" height="1" viewBox="0 0 641.54 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0L641.5399780273438 0" fill="none" stroke="#efeff1" strokeWidth="1" strokeDasharray="2.740000009536743 2.740000009536743" strokeLinecap="butt"/></svg>
        <p style={{ position: "absolute", left: "0px", top: "56.53px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "27px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#6b6b6b" }}>$1.8K</p>
        <div style={{ position: "absolute", left: "32.9px", top: "119.24px", width: "641.54px", height: "1px", background: "#e2e2e5" }} />
        <p style={{ position: "absolute", left: "10.59px", top: "112.74px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "15px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#6b6b6b" }}>$0</p>
        <div data-fu="bar" style={{ position: "absolute", left: "60.77px", top: "38.54px", width: "51.18px", height: "81.2px", borderRadius: "3.66px", background: "linear-gradient(180deg, #61a4fe 0%, #4996fe 100%)", boxShadow: "inset 0 0 0 1px rgba(57, 117, 198, 0.38), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.18), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
        <div data-fu="bar" style={{ position: "absolute", left: "167.69px", top: "70.4px", width: "51.18px", height: "49.34px", borderRadius: "3.66px", background: "linear-gradient(180deg, #61a4fe 0%, #4996fe 100%)", boxShadow: "inset 0 0 0 1px rgba(57, 117, 198, 0.38), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.18), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
        <div data-fu="bar" style={{ position: "absolute", left: "167.69px", top: "65.09px", width: "51.18px", height: "3.3px", borderRadius: "1.65px", background: "linear-gradient(180deg, #fee0c9 0%, #fed6b8 100%)", boxShadow: "inset 0 0 0 1px rgba(240, 128, 45, 0.22), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.35), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
        <div data-fu="bar" style={{ position: "absolute", left: "274.62px", top: "81.01px", width: "51.18px", height: "38.73px", borderRadius: "3.66px", background: "linear-gradient(180deg, #61a4fe 0%, #4996fe 100%)", boxShadow: "inset 0 0 0 1px rgba(57, 117, 198, 0.38), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.18), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
        <div data-fu="bar" style={{ position: "absolute", left: "381.54px", top: "92.88px", width: "51.18px", height: "26.86px", borderRadius: "3.66px", background: "linear-gradient(180deg, #61a4fe 0%, #4996fe 100%)", boxShadow: "inset 0 0 0 1px rgba(57, 117, 198, 0.38), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.18), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
        <div data-fu="bar" style={{ position: "absolute", left: "381.54px", top: "81.01px", width: "51.18px", height: "9.86px", borderRadius: "3.66px", background: "linear-gradient(180deg, #fee0c9 0%, #fed6b8 100%)", boxShadow: "inset 0 0 0 1px rgba(240, 128, 45, 0.22), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.35), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }}>
          <svg style={{ position: "absolute", left: "-9.86px", top: "0px", width: "78.41px", height: "9.86px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="78.41" height="9.86" viewBox="0 0 78.41 9.86" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 9.86 L0.452548 10.3125 L10.3125 0.452548 L9.86 0 L9.40745 -0.452548 L-0.452548 9.40745 L0 9.86 Z M4.57 9.86 L5.02255 10.3125 L14.8825 0.452548 L14.43 0 L13.9775 -0.452548 L4.11745 9.40745 L4.57 9.86 Z M9.14 9.86 L9.59255 10.3125 L19.4525 0.452548 L19 0 L18.5475 -0.452548 L8.68745 9.40745 L9.14 9.86 Z M13.71 9.86 L14.1625 10.3125 L24.0225 0.452548 L23.57 0 L23.1175 -0.452548 L13.2575 9.40745 L13.71 9.86 Z M18.28 9.86 L18.7325 10.3125 L28.5925 0.452548 L28.14 0 L27.6875 -0.452548 L17.8275 9.40745 L18.28 9.86 Z M22.85 9.86 L23.3025 10.3125 L33.1625 0.452548 L32.71 0 L32.2575 -0.452548 L22.3975 9.40745 L22.85 9.86 Z M27.42 9.86 L27.8725 10.3125 L37.7325 0.452548 L37.28 0 L36.8274 -0.452548 L26.9675 9.40745 L27.42 9.86 Z M31.99 9.86 L32.4425 10.3125 L42.3025 0.452548 L41.85 0 L41.3974 -0.452548 L31.5375 9.40745 L31.99 9.86 Z M36.56 9.86 L37.0126 10.3125 L46.8725 0.452548 L46.42 0 L45.9674 -0.452548 L36.1075 9.40745 L36.56 9.86 Z M41.13 9.86 L41.5826 10.3125 L51.4426 0.452548 L50.99 0 L50.5375 -0.452548 L40.6775 9.40745 L41.13 9.86 Z M45.7 9.86 L46.1525 10.3125 L56.0126 0.452548 L55.56 0 L55.1075 -0.452548 L45.2475 9.40745 L45.7 9.86 Z M50.27 9.86 L50.7225 10.3125 L60.5826 0.452548 L60.13 0 L59.6775 -0.452548 L49.8175 9.40745 L50.27 9.86 Z M54.84 9.86 L55.2925 10.3125 L65.1525 0.452548 L64.7 0 L64.2475 -0.452548 L54.3875 9.40745 L54.84 9.86 Z M59.41 9.86 L59.8625 10.3125 L69.7225 0.452548 L69.27 0 L68.8175 -0.452548 L58.9575 9.40745 L59.41 9.86 Z M63.98 9.86 L64.4325 10.3125 L74.2925 0.452548 L73.84 0 L73.3875 -0.452548 L63.5275 9.40745 L63.98 9.86 Z M68.55 9.86 L69.0025 10.3125 L78.8625 0.452548 L78.41 0 L77.9575 -0.452548 L68.0975 9.40745 L68.55 9.86 Z" fill="#ffffff" fillOpacity="0.6"/></svg>
        </div>
        <div data-fu="bar" style={{ position: "absolute", left: "488.46px", top: "106.62px", width: "51.18px", height: "13.12px", borderRadius: "3.66px", background: "linear-gradient(180deg, #61a4fe 0%, #4996fe 100%)", boxShadow: "inset 0 0 0 1px rgba(57, 117, 198, 0.38), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.18), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
        <div data-fu="bar" style={{ position: "absolute", left: "488.46px", top: "97.25px", width: "51.18px", height: "7.36px", borderRadius: "3.66px", background: "linear-gradient(180deg, #fee0c9 0%, #fed6b8 100%)", boxShadow: "inset 0 0 0 1px rgba(240, 128, 45, 0.22), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.35), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }}>
          <svg style={{ position: "absolute", left: "-7.36px", top: "0px", width: "71.34px", height: "7.36px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="71.34" height="7.36" viewBox="0 0 71.34 7.36" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 7.36 L0.452548 7.81255 L7.81255 0.452548 L7.36 0 L6.90745 -0.452548 L-0.452548 6.90745 L0 7.36 Z M4.57 7.36 L5.02255 7.81255 L12.3825 0.452548 L11.93 0 L11.4775 -0.452548 L4.11745 6.90745 L4.57 7.36 Z M9.14 7.36 L9.59255 7.81255 L16.9525 0.452548 L16.5 0 L16.0475 -0.452548 L8.68745 6.90745 L9.14 7.36 Z M13.71 7.36 L14.1625 7.81255 L21.5225 0.452548 L21.07 0 L20.6175 -0.452548 L13.2575 6.90745 L13.71 7.36 Z M18.28 7.36 L18.7325 7.81255 L26.0925 0.452548 L25.64 0 L25.1875 -0.452548 L17.8275 6.90745 L18.28 7.36 Z M22.85 7.36 L23.3025 7.81255 L30.6625 0.452548 L30.21 0 L29.7575 -0.452548 L22.3975 6.90745 L22.85 7.36 Z M27.42 7.36 L27.8725 7.81255 L35.2325 0.452548 L34.78 0 L34.3274 -0.452548 L26.9675 6.90745 L27.42 7.36 Z M31.99 7.36 L32.4425 7.81255 L39.8025 0.452548 L39.35 0 L38.8974 -0.452548 L31.5375 6.90745 L31.99 7.36 Z M36.56 7.36 L37.0126 7.81255 L44.3725 0.452548 L43.92 0 L43.4674 -0.452548 L36.1075 6.90745 L36.56 7.36 Z M41.13 7.36 L41.5826 7.81255 L48.9426 0.452548 L48.49 0 L48.0375 -0.452548 L40.6775 6.90745 L41.13 7.36 Z M45.7 7.36 L46.1525 7.81255 L53.5126 0.452548 L53.06 0 L52.6075 -0.452548 L45.2475 6.90745 L45.7 7.36 Z M50.27 7.36 L50.7225 7.81255 L58.0826 0.452548 L57.63 0 L57.1775 -0.452548 L49.8175 6.90745 L50.27 7.36 Z M54.84 7.36 L55.2925 7.81255 L62.6525 0.452548 L62.2 0 L61.7475 -0.452548 L54.3875 6.90745 L54.84 7.36 Z M59.41 7.36 L59.8625 7.81255 L67.2225 0.452548 L66.77 0 L66.3175 -0.452548 L58.9575 6.90745 L59.41 7.36 Z M63.98 7.36 L64.4325 7.81255 L71.7925 0.452548 L71.34 0 L70.8875 -0.452548 L63.5275 6.90745 L63.98 7.36 Z" fill="#ffffff" fillOpacity="0.6"/></svg>
        </div>
        <div data-fu="bar" style={{ position: "absolute", left: "595.39px", top: "98.5px", width: "51.18px", height: "21.24px", borderRadius: "3.66px", background: "linear-gradient(180deg, #fee0c9 0%, #fed6b8 100%)", boxShadow: "inset 0 0 0 1px rgba(240, 128, 45, 0.22), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.35), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }}>
          <svg style={{ position: "absolute", left: "-21.24px", top: "0px", width: "112.64px", height: "21.24px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="112.64" height="21.24" viewBox="0 0 112.64 21.24" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 21.24 L0.452548 21.6925 L21.6925 0.452548 L21.24 0 L20.7875 -0.452548 L-0.452548 20.7875 L0 21.24 Z M4.57 21.24 L5.02255 21.6925 L26.2625 0.452548 L25.81 0 L25.3575 -0.452548 L4.11745 20.7875 L4.57 21.24 Z M9.14 21.24 L9.59255 21.6925 L30.8325 0.452548 L30.38 0 L29.9275 -0.452548 L8.68745 20.7875 L9.14 21.24 Z M13.71 21.24 L14.1625 21.6925 L35.4025 0.452548 L34.95 0 L34.4975 -0.452548 L13.2575 20.7875 L13.71 21.24 Z M18.28 21.24 L18.7325 21.6925 L39.9725 0.452548 L39.52 0 L39.0675 -0.452548 L17.8275 20.7875 L18.28 21.24 Z M22.85 21.24 L23.3025 21.6925 L44.5425 0.452548 L44.09 0 L43.6375 -0.452548 L22.3975 20.7875 L22.85 21.24 Z M27.42 21.24 L27.8725 21.6925 L49.1125 0.452548 L48.66 0 L48.2075 -0.452548 L26.9675 20.7875 L27.42 21.24 Z M31.99 21.24 L32.4425 21.6925 L53.6825 0.452548 L53.23 0 L52.7775 -0.452548 L31.5375 20.7875 L31.99 21.24 Z M36.56 21.24 L37.0126 21.6925 L58.2525 0.452548 L57.8 0 L57.3475 -0.452548 L36.1075 20.7875 L36.56 21.24 Z M41.13 21.24 L41.5826 21.6925 L62.8225 0.452548 L62.37 0 L61.9174 -0.452548 L40.6775 20.7875 L41.13 21.24 Z M45.7 21.24 L46.1525 21.6925 L67.3925 0.452548 L66.94 0 L66.4875 -0.452548 L45.2475 20.7875 L45.7 21.24 Z M50.27 21.24 L50.7225 21.6925 L71.9625 0.452548 L71.51 0 L71.0575 -0.452548 L49.8175 20.7875 L50.27 21.24 Z M54.84 21.24 L55.2925 21.6925 L76.5325 0.452548 L76.08 0 L75.6275 -0.452548 L54.3875 20.7875 L54.84 21.24 Z M59.41 21.24 L59.8625 21.6925 L81.1025 0.452548 L80.65 0 L80.1975 -0.452548 L58.9575 20.7875 L59.41 21.24 Z M63.98 21.24 L64.4325 21.6925 L85.6725 0.452548 L85.22 0 L84.7675 -0.452548 L63.5275 20.7875 L63.98 21.24 Z M68.55 21.24 L69.0025 21.6925 L90.2425 0.452548 L89.79 0 L89.3375 -0.452548 L68.0975 20.7875 L68.55 21.24 Z M73.12 21.24 L73.5725 21.6925 L94.8125 0.452548 L94.36 0 L93.9075 -0.452548 L72.6675 20.7875 L73.12 21.24 Z M77.69 21.24 L78.1425 21.6925 L99.3825 0.452548 L98.93 0 L98.4775 -0.452548 L77.2375 20.7875 L77.69 21.24 Z M82.26 21.24 L82.7125 21.6925 L103.953 0.452548 L103.5 0 L103.047 -0.452548 L81.8075 20.7875 L82.26 21.24 Z M86.83 21.24 L87.2825 21.6925 L108.523 0.452548 L108.07 0 L107.617 -0.452548 L86.3775 20.7875 L86.83 21.24 Z M91.4 21.24 L91.8525 21.6925 L113.093 0.452548 L112.64 0 L112.187 -0.452548 L90.9475 20.7875 L91.4 21.24 Z" fill="#ffffff" fillOpacity="0.6"/></svg>
        </div>
        <p style={{ position: "absolute", left: "68.86px", top: "125.23px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "35px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#1f1f22" }}>Aug 10</p>
        <p style={{ position: "absolute", left: "176.79px", top: "125.23px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "33px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#6b6b6b" }}>Aug 17</p>
        <p style={{ position: "absolute", left: "282.21px", top: "125.23px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "36px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#6b6b6b" }}>Aug 24</p>
        <p style={{ position: "absolute", left: "390.13px", top: "125.23px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "34px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#6b6b6b" }}>Aug 31</p>
        <p style={{ position: "absolute", left: "499.56px", top: "125.23px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "29px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#6b6b6b" }}>Sep 7</p>
        <p style={{ position: "absolute", left: "607.48px", top: "125.23px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "27px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#6b6b6b" }}>Later</p>
        <div style={{ position: "absolute", left: "35.46px", top: "14.57px", width: "101.8px", height: "18.48px", borderRadius: "5.48px", background: "#1f1f22", boxShadow: "0px 1.83px 5.48px 0px rgba(0, 0, 0, 0.12)", display: "flex", flexDirection: "row", padding: "2.74px 6.4px 2.74px 6.4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "89px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 500, color: "#ffffff" }}>This week · $2,600</p>
        </div>
        <svg style={{ position: "absolute", left: "82.7px", top: "32.55px", width: "7.31px", height: "3.66px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="7.31" height="3.66" viewBox="0 0 7.31 3.66" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0 L7.31 0 L3.66 3.66 L0 0 Z" fill="#1f1f22"/></svg>
        <div style={{ position: "absolute", left: "529.82px", top: "72.71px", width: "144.62px", height: "20.3px", borderRadius: "5.48px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8, 0px 1.83px 5.48px 0px rgba(0, 0, 0, 0.12)", display: "flex", flexDirection: "row", padding: "3.65px 7.31px 3.65px 7.31px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "130px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 500, color: "#1f1f22" }}>Harbor & Vale · $680 at risk</p>
        </div>
        <svg style={{ position: "absolute", left: "617.32px", top: "92.51px", width: "7.31px", height: "3.66px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="7.31" height="3.66" viewBox="0 0 7.31 3.66" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0 L7.31 0 L3.66 3.66 L0 0 Z" fill="#ffffff"/></svg>
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
