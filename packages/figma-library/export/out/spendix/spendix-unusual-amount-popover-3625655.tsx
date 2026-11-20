"use client";
// Unusual amount popover (spendix, Popovers) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Ingot Icons.
import { useEffect, useRef } from "react";
import { AlertCircle as AlertCircleSolid } from "ingotui-icons/react/solid";
import { ChevronRight } from "ingotui-icons/react/stroke-rounded";

export function UnusualAmountPopover() {
  const fuRef = useRef<any>(null);
  useEffect(() => fuInteract(fuRef.current), []);
  return (
    <div ref={fuRef} style={{ width: "320px", height: "326px", borderRadius: "12px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e8e8eb, 0px 12px 32px -8px rgba(13, 13, 18, 0.1), 0px 1px 2px 0px rgba(13, 13, 18, 0.05)", overflow: "hidden", display: "flex", flexDirection: "column", padding: "1px 1px 1px 1px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
      <div style={{ alignSelf: "stretch", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #ededed", display: "flex", flexDirection: "row", padding: "12px 14px 13px 14px", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ width: "30px", height: "30px", flexShrink: 0, borderRadius: "10px", background: "rgba(229, 72, 77, 0.12)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <AlertCircleSolid size={15} style={{ width: "15px", height: "15px", flexShrink: 0, color: "#e5484d", display: "block" }} />
        </div>
        <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "107px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#0f172a" }}>Unusual amount</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "131px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>Rule AMT-04 · all teams</p>
        </div>
      </div>
      <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", padding: "12px 14px 12px 14px", gap: "10px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <p style={{ width: "292px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 400, color: "#666d80", lineHeight: "1.399999976158142" }}>Flags a charge above 3× the vendor’s 90-day average on the same card.</p>
        <div style={{ width: "292px", height: "118px", flexShrink: 0, position: "relative" }}>
          <svg style={{ position: "absolute", left: "34px", top: "8px", width: "258px", height: "1px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="258" height="1" viewBox="0 0 258 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0L258 0" fill="none" stroke="#e4e4e4" strokeWidth="1" strokeDasharray="3 3" strokeLinecap="butt"/></svg>
          <p style={{ position: "absolute", left: "0px", top: "0px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "30px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#7d818c" }}>$1.4K</p>
          <svg style={{ position: "absolute", left: "34px", top: "50px", width: "258px", height: "1px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="258" height="1" viewBox="0 0 258 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0L258 0" fill="none" stroke="#e4e4e4" strokeWidth="1" strokeDasharray="3 3" strokeLinecap="butt"/></svg>
          <p style={{ position: "absolute", left: "0px", top: "42px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "30px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#7d818c" }}>$700</p>
          <div style={{ position: "absolute", left: "34px", top: "91.5px", width: "258px", height: "1px", background: "#e2e2e5" }} />
          <p style={{ position: "absolute", left: "18px", top: "84px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "8px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#7d818c" }}>0</p>
          <div data-fu="bar" style={{ position: "absolute", left: "44.5px", top: "71.72px", width: "22px", height: "20.28px", borderRadius: "5px", background: "linear-gradient(180deg, #f8cfd1 0%, #f6c1c2 100%)", boxShadow: "inset 0 0 0 1px rgba(218, 68, 73, 0.22), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.35), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }}>
            <svg style={{ position: "absolute", left: "-20.28px", top: "0px", width: "80.28px", height: "20.28px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="80.28" height="20.28" viewBox="0 0 80.28 20.28" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 20.28 L0.494975 20.775 L20.775 0.494975 L20.28 0 L19.785 -0.494975 L-0.494975 19.785 L0 20.28 Z M5 20.28 L5.49497 20.775 L25.775 0.494975 L25.28 0 L24.785 -0.494975 L4.50503 19.785 L5 20.28 Z M10 20.28 L10.495 20.775 L30.775 0.494975 L30.28 0 L29.785 -0.494975 L9.50502 19.785 L10 20.28 Z M15 20.28 L15.495 20.775 L35.775 0.494975 L35.28 0 L34.785 -0.494975 L14.505 19.785 L15 20.28 Z M20 20.28 L20.495 20.775 L40.775 0.494975 L40.28 0 L39.785 -0.494975 L19.505 19.785 L20 20.28 Z M25 20.28 L25.495 20.775 L45.775 0.494975 L45.28 0 L44.785 -0.494975 L24.505 19.785 L25 20.28 Z M30 20.28 L30.495 20.775 L50.775 0.494975 L50.28 0 L49.785 -0.494975 L29.505 19.785 L30 20.28 Z M35 20.28 L35.495 20.775 L55.775 0.494975 L55.28 0 L54.785 -0.494975 L34.505 19.785 L35 20.28 Z M40 20.28 L40.495 20.775 L60.775 0.494975 L60.28 0 L59.785 -0.494975 L39.505 19.785 L40 20.28 Z M45 20.28 L45.495 20.775 L65.775 0.494975 L65.28 0 L64.785 -0.494975 L44.505 19.785 L45 20.28 Z M50 20.28 L50.495 20.775 L70.775 0.494975 L70.28 0 L69.785 -0.494975 L49.505 19.785 L50 20.28 Z M55 20.28 L55.495 20.775 L75.775 0.494975 L75.28 0 L74.785 -0.494975 L54.505 19.785 L55 20.28 Z M60 20.28 L60.495 20.775 L80.775 0.494975 L80.28 0 L79.785 -0.494975 L59.505 19.785 L60 20.28 Z" fill="#ffffff" fillOpacity="0.6"/></svg>
          </div>
          <div data-fu="bar" style={{ position: "absolute", left: "87.5px", top: "70.28px", width: "22px", height: "21.72px", borderRadius: "5px", background: "linear-gradient(180deg, #f8cfd1 0%, #f6c1c2 100%)", boxShadow: "inset 0 0 0 1px rgba(218, 68, 73, 0.22), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.35), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }}>
            <svg style={{ position: "absolute", left: "-21.72px", top: "0px", width: "86.72px", height: "21.72px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="86.72" height="21.72" viewBox="0 0 86.72 21.72" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 21.72 L0.494975 22.215 L22.215 0.494975 L21.72 0 L21.225 -0.494975 L-0.494975 21.225 L0 21.72 Z M5 21.72 L5.49497 22.215 L27.215 0.494975 L26.72 0 L26.225 -0.494975 L4.50503 21.225 L5 21.72 Z M10 21.72 L10.495 22.215 L32.215 0.494975 L31.72 0 L31.225 -0.494975 L9.50502 21.225 L10 21.72 Z M15 21.72 L15.495 22.215 L37.215 0.494975 L36.72 0 L36.225 -0.494975 L14.505 21.225 L15 21.72 Z M20 21.72 L20.495 22.215 L42.215 0.494975 L41.72 0 L41.225 -0.494975 L19.505 21.225 L20 21.72 Z M25 21.72 L25.495 22.215 L47.215 0.494975 L46.72 0 L46.225 -0.494975 L24.505 21.225 L25 21.72 Z M30 21.72 L30.495 22.215 L52.215 0.494975 L51.72 0 L51.225 -0.494975 L29.505 21.225 L30 21.72 Z M35 21.72 L35.495 22.215 L57.215 0.494975 L56.72 0 L56.225 -0.494975 L34.505 21.225 L35 21.72 Z M40 21.72 L40.495 22.215 L62.215 0.494975 L61.72 0 L61.225 -0.494975 L39.505 21.225 L40 21.72 Z M45 21.72 L45.495 22.215 L67.215 0.494975 L66.72 0 L66.225 -0.494975 L44.505 21.225 L45 21.72 Z M50 21.72 L50.495 22.215 L72.215 0.494975 L71.72 0 L71.225 -0.494975 L49.505 21.225 L50 21.72 Z M55 21.72 L55.495 22.215 L77.215 0.494975 L76.72 0 L76.225 -0.494975 L54.505 21.225 L55 21.72 Z M60 21.72 L60.495 22.215 L82.215 0.494975 L81.72 0 L81.225 -0.494975 L59.505 21.225 L60 21.72 Z M65 21.72 L65.495 22.215 L87.215 0.494975 L86.72 0 L86.225 -0.494975 L64.505 21.225 L65 21.72 Z" fill="#ffffff" fillOpacity="0.6"/></svg>
          </div>
          <div data-fu="bar" style={{ position: "absolute", left: "130.5px", top: "70.94px", width: "22px", height: "21.06px", borderRadius: "5px", background: "linear-gradient(180deg, #f8cfd1 0%, #f6c1c2 100%)", boxShadow: "inset 0 0 0 1px rgba(218, 68, 73, 0.22), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.35), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }}>
            <svg style={{ position: "absolute", left: "-21.06px", top: "0px", width: "81.06px", height: "21.06px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="81.06" height="21.06" viewBox="0 0 81.06 21.06" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 21.06 L0.494975 21.555 L21.555 0.494975 L21.06 0 L20.565 -0.494975 L-0.494975 20.565 L0 21.06 Z M5 21.06 L5.49497 21.555 L26.555 0.494975 L26.06 0 L25.565 -0.494975 L4.50503 20.565 L5 21.06 Z M10 21.06 L10.495 21.555 L31.555 0.494975 L31.06 0 L30.565 -0.494975 L9.50502 20.565 L10 21.06 Z M15 21.06 L15.495 21.555 L36.555 0.494975 L36.06 0 L35.565 -0.494975 L14.505 20.565 L15 21.06 Z M20 21.06 L20.495 21.555 L41.555 0.494975 L41.06 0 L40.565 -0.494975 L19.505 20.565 L20 21.06 Z M25 21.06 L25.495 21.555 L46.555 0.494975 L46.06 0 L45.565 -0.494975 L24.505 20.565 L25 21.06 Z M30 21.06 L30.495 21.555 L51.555 0.494975 L51.06 0 L50.565 -0.494975 L29.505 20.565 L30 21.06 Z M35 21.06 L35.495 21.555 L56.555 0.494975 L56.06 0 L55.565 -0.494975 L34.505 20.565 L35 21.06 Z M40 21.06 L40.495 21.555 L61.555 0.494975 L61.06 0 L60.565 -0.494975 L39.505 20.565 L40 21.06 Z M45 21.06 L45.495 21.555 L66.555 0.494975 L66.06 0 L65.565 -0.494975 L44.505 20.565 L45 21.06 Z M50 21.06 L50.495 21.555 L71.555 0.494975 L71.06 0 L70.565 -0.494975 L49.505 20.565 L50 21.06 Z M55 21.06 L55.495 21.555 L76.555 0.494975 L76.06 0 L75.565 -0.494975 L54.505 20.565 L55 21.06 Z M60 21.06 L60.495 21.555 L81.555 0.494975 L81.06 0 L80.565 -0.494975 L59.505 20.565 L60 21.06 Z" fill="#ffffff" fillOpacity="0.6"/></svg>
          </div>
          <div data-fu="bar" style={{ position: "absolute", left: "173.5px", top: "69.74px", width: "22px", height: "22.26px", borderRadius: "5px", background: "linear-gradient(180deg, #f8cfd1 0%, #f6c1c2 100%)", boxShadow: "inset 0 0 0 1px rgba(218, 68, 73, 0.22), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.35), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }}>
            <svg style={{ position: "absolute", left: "-22.26px", top: "0px", width: "87.26px", height: "22.26px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="87.26" height="22.26" viewBox="0 0 87.26 22.26" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 22.26 L0.494975 22.755 L22.755 0.494975 L22.26 0 L21.765 -0.494975 L-0.494975 21.765 L0 22.26 Z M5 22.26 L5.49497 22.755 L27.755 0.494975 L27.26 0 L26.765 -0.494975 L4.50503 21.765 L5 22.26 Z M10 22.26 L10.495 22.755 L32.755 0.494975 L32.26 0 L31.765 -0.494975 L9.50502 21.765 L10 22.26 Z M15 22.26 L15.495 22.755 L37.755 0.494975 L37.26 0 L36.765 -0.494975 L14.505 21.765 L15 22.26 Z M20 22.26 L20.495 22.755 L42.755 0.494975 L42.26 0 L41.765 -0.494975 L19.505 21.765 L20 22.26 Z M25 22.26 L25.495 22.755 L47.755 0.494975 L47.26 0 L46.765 -0.494975 L24.505 21.765 L25 22.26 Z M30 22.26 L30.495 22.755 L52.755 0.494975 L52.26 0 L51.765 -0.494975 L29.505 21.765 L30 22.26 Z M35 22.26 L35.495 22.755 L57.755 0.494975 L57.26 0 L56.765 -0.494975 L34.505 21.765 L35 22.26 Z M40 22.26 L40.495 22.755 L62.755 0.494975 L62.26 0 L61.765 -0.494975 L39.505 21.765 L40 22.26 Z M45 22.26 L45.495 22.755 L67.755 0.494975 L67.26 0 L66.765 -0.494975 L44.505 21.765 L45 22.26 Z M50 22.26 L50.495 22.755 L72.755 0.494975 L72.26 0 L71.765 -0.494975 L49.505 21.765 L50 22.26 Z M55 22.26 L55.495 22.755 L77.755 0.494975 L77.26 0 L76.765 -0.494975 L54.505 21.765 L55 22.26 Z M60 22.26 L60.495 22.755 L82.755 0.494975 L82.26 0 L81.765 -0.494975 L59.505 21.765 L60 22.26 Z M65 22.26 L65.495 22.755 L87.755 0.494975 L87.26 0 L86.765 -0.494975 L64.505 21.765 L65 22.26 Z" fill="#ffffff" fillOpacity="0.6"/></svg>
          </div>
          <div data-fu="bar" style={{ position: "absolute", left: "216.5px", top: "71.06px", width: "22px", height: "20.94px", borderRadius: "5px", background: "linear-gradient(180deg, #f8cfd1 0%, #f6c1c2 100%)", boxShadow: "inset 0 0 0 1px rgba(218, 68, 73, 0.22), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.35), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }}>
            <svg style={{ position: "absolute", left: "-20.94px", top: "0px", width: "80.94px", height: "20.94px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="80.94" height="20.94" viewBox="0 0 80.94 20.94" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 20.94 L0.494975 21.435 L21.435 0.494975 L20.94 0 L20.445 -0.494975 L-0.494975 20.445 L0 20.94 Z M5 20.94 L5.49497 21.435 L26.435 0.494975 L25.94 0 L25.445 -0.494975 L4.50503 20.445 L5 20.94 Z M10 20.94 L10.495 21.435 L31.435 0.494975 L30.94 0 L30.445 -0.494975 L9.50502 20.445 L10 20.94 Z M15 20.94 L15.495 21.435 L36.435 0.494975 L35.94 0 L35.445 -0.494975 L14.505 20.445 L15 20.94 Z M20 20.94 L20.495 21.435 L41.435 0.494975 L40.94 0 L40.445 -0.494975 L19.505 20.445 L20 20.94 Z M25 20.94 L25.495 21.435 L46.435 0.494975 L45.94 0 L45.445 -0.494975 L24.505 20.445 L25 20.94 Z M30 20.94 L30.495 21.435 L51.435 0.494975 L50.94 0 L50.445 -0.494975 L29.505 20.445 L30 20.94 Z M35 20.94 L35.495 21.435 L56.435 0.494975 L55.94 0 L55.445 -0.494975 L34.505 20.445 L35 20.94 Z M40 20.94 L40.495 21.435 L61.435 0.494975 L60.94 0 L60.445 -0.494975 L39.505 20.445 L40 20.94 Z M45 20.94 L45.495 21.435 L66.435 0.494975 L65.94 0 L65.445 -0.494975 L44.505 20.445 L45 20.94 Z M50 20.94 L50.495 21.435 L71.435 0.494975 L70.94 0 L70.445 -0.494975 L49.505 20.445 L50 20.94 Z M55 20.94 L55.495 21.435 L76.435 0.494975 L75.94 0 L75.445 -0.494975 L54.505 20.445 L55 20.94 Z M60 20.94 L60.495 21.435 L81.435 0.494975 L80.94 0 L80.445 -0.494975 L59.505 20.445 L60 20.94 Z" fill="#ffffff" fillOpacity="0.6"/></svg>
          </div>
          <div data-fu="bar" style={{ position: "absolute", left: "259.5px", top: "19.25px", width: "22px", height: "72.75px", borderRadius: "5px", background: "linear-gradient(180deg, #e86064 0%, #e5484d 100%)", boxShadow: "inset 0 0 0 1px rgba(179, 56, 60, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.18), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
          <p style={{ position: "absolute", left: "45px", top: "102px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "21px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#7d818c" }}>Jan</p>
          <p style={{ position: "absolute", left: "88px", top: "102px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "21px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#7d818c" }}>Feb</p>
          <p style={{ position: "absolute", left: "130.5px", top: "102px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "22px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#7d818c" }}>Mar</p>
          <p style={{ position: "absolute", left: "255px", top: "102px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "31px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#1f1f22" }}>5 Apr</p>
          <svg style={{ position: "absolute", left: "34px", top: "28.1px", width: "258px", height: "1px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="258" height="1" viewBox="0 0 258 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 -0.5 C-0.276142 -0.5 -0.5 -0.276142 -0.5 0 C-0.5 0.276142 -0.276142 0.5 0 0.5 L0 0 L0 -0.5 Z M258 0.5 C258.276 0.5 258.5 0.276142 258.5 0 C258.5 -0.276142 258.276 -0.5 258 -0.5 L258 0 L258 0.5 Z M1.5 0.5 C1.77614 0.5 2 0.276142 2 0 C2 -0.276142 1.77614 -0.5 1.5 -0.5 L1.5 0 L1.5 0.5 Z M4.5 -0.5 C4.22386 -0.5 4 -0.276142 4 0 C4 0.276142 4.22386 0.5 4.5 0.5 L4.5 0 L4.5 -0.5 Z M7.5 0.5 C7.77614 0.5 8 0.276142 8 0 C8 -0.276142 7.77614 -0.5 7.5 -0.5 L7.5 0 L7.5 0.5 Z M10.5 -0.5 C10.2239 -0.5 10 -0.276142 10 0 C10 0.276142 10.2239 0.5 10.5 0.5 L10.5 0 L10.5 -0.5 Z M13.5 0.5 C13.7761 0.5 14 0.276142 14 0 C14 -0.276142 13.7761 -0.5 13.5 -0.5 L13.5 0 L13.5 0.5 Z M16.5 -0.5 C16.2239 -0.5 16 -0.276142 16 0 C16 0.276142 16.2239 0.5 16.5 0.5 L16.5 0 L16.5 -0.5 Z M19.5 0.5 C19.7761 0.5 20 0.276142 20 0 C20 -0.276142 19.7761 -0.5 19.5 -0.5 L19.5 0 L19.5 0.5 Z M22.5 -0.5 C22.2239 -0.5 22 -0.276142 22 0 C22 0.276142 22.2239 0.5 22.5 0.5 L22.5 0 L22.5 -0.5 Z M25.5 0.5 C25.7761 0.5 26 0.276142 26 0 C26 -0.276142 25.7761 -0.5 25.5 -0.5 L25.5 0 L25.5 0.5 Z M28.5 -0.5 C28.2239 -0.5 28 -0.276142 28 0 C28 0.276142 28.2239 0.5 28.5 0.5 L28.5 0 L28.5 -0.5 Z M31.5 0.5 C31.7761 0.5 32 0.276142 32 0 C32 -0.276142 31.7761 -0.5 31.5 -0.5 L31.5 0 L31.5 0.5 Z M34.5 -0.5 C34.2239 -0.5 34 -0.276142 34 0 C34 0.276142 34.2239 0.5 34.5 0.5 L34.5 0 L34.5 -0.5 Z M37.5 0.5 C37.7761 0.5 38 0.276142 38 0 C38 -0.276142 37.7761 -0.5 37.5 -0.5 L37.5 0 L37.5 0.5 Z M40.5 -0.5 C40.2239 -0.5 40 -0.276142 40 0 C40 0.276142 40.2239 0.5 40.5 0.5 L40.5 0 L40.5 -0.5 Z M43.5 0.5 C43.7761 0.5 44 0.276142 44 0 C44 -0.276142 43.7761 -0.5 43.5 -0.5 L43.5 0 L43.5 0.5 Z M46.5 -0.5 C46.2239 -0.5 46 -0.276142 46 0 C46 0.276142 46.2239 0.5 46.5 0.5 L46.5 0 L46.5 -0.5 Z M49.5 0.5 C49.7761 0.5 50 0.276142 50 0 C50 -0.276142 49.7761 -0.5 49.5 -0.5 L49.5 0 L49.5 0.5 Z M52.5 -0.5 C52.2239 -0.5 52 -0.276142 52 0 C52 0.276142 52.2239 0.5 52.5 0.5 L52.5 0 L52.5 -0.5 Z M55.5 0.5 C55.7761 0.5 56 0.276142 56 0 C56 -0.276142 55.7761 -0.5 55.5 -0.5 L55.5 0 L55.5 0.5 Z M58.5 -0.5 C58.2239 -0.5 58 -0.276142 58 0 C58 0.276142 58.2239 0.5 58.5 0.5 L58.5 0 L58.5 -0.5 Z M61.5 0.5 C61.7761 0.5 62 0.276142 62 0 C62 -0.276142 61.7761 -0.5 61.5 -0.5 L61.5 0 L61.5 0.5 Z M64.5 -0.5 C64.2239 -0.5 64 -0.276142 64 0 C64 0.276142 64.2239 0.5 64.5 0.5 L64.5 0 L64.5 -0.5 Z M67.5 0.5 C67.7761 0.5 68 0.276142 68 0 C68 -0.276142 67.7761 -0.5 67.5 -0.5 L67.5 0 L67.5 0.5 Z M70.5 -0.5 C70.2239 -0.5 70 -0.276142 70 0 C70 0.276142 70.2239 0.5 70.5 0.5 L70.5 0 L70.5 -0.5 Z M73.5 0.5 C73.7761 0.5 74 0.276142 74 0 C74 -0.276142 73.7761 -0.5 73.5 -0.5 L73.5 0 L73.5 0.5 Z M76.5 -0.5 C76.2239 -0.5 76 -0.276142 76 0 C76 0.276142 76.2239 0.5 76.5 0.5 L76.5 0 L76.5 -0.5 Z M79.5 0.5 C79.7761 0.5 80 0.276142 80 0 C80 -0.276142 79.7761 -0.5 79.5 -0.5 L79.5 0 L79.5 0.5 Z M82.5 -0.5 C82.2239 -0.5 82 -0.276142 82 0 C82 0.276142 82.2239 0.5 82.5 0.5 L82.5 0 L82.5 -0.5 Z M85.5 0.5 C85.7761 0.5 86 0.276142 86 0 C86 -0.276142 85.7761 -0.5 85.5 -0.5 L85.5 0 L85.5 0.5 Z M88.5 -0.5 C88.2239 -0.5 88 -0.276142 88 0 C88 0.276142 88.2239 0.5 88.5 0.5 L88.5 0 L88.5 -0.5 Z M91.5 0.5 C91.7761 0.5 92 0.276142 92 0 C92 -0.276142 91.7761 -0.5 91.5 -0.5 L91.5 0 L91.5 0.5 Z M94.5 -0.5 C94.2239 -0.5 94 -0.276142 94 0 C94 0.276142 94.2239 0.5 94.5 0.5 L94.5 0 L94.5 -0.5 Z M97.5 0.5 C97.7761 0.5 98 0.276142 98 0 C98 -0.276142 97.7761 -0.5 97.5 -0.5 L97.5 0 L97.5 0.5 Z M100.5 -0.5 C100.224 -0.5 100 -0.276142 100 0 C100 0.276142 100.224 0.5 100.5 0.5 L100.5 0 L100.5 -0.5 Z M103.5 0.5 C103.776 0.5 104 0.276142 104 0 C104 -0.276142 103.776 -0.5 103.5 -0.5 L103.5 0 L103.5 0.5 Z M106.5 -0.5 C106.224 -0.5 106 -0.276142 106 0 C106 0.276142 106.224 0.5 106.5 0.5 L106.5 0 L106.5 -0.5 Z M109.5 0.5 C109.776 0.5 110 0.276142 110 0 C110 -0.276142 109.776 -0.5 109.5 -0.5 L109.5 0 L109.5 0.5 Z M112.5 -0.5 C112.224 -0.5 112 -0.276142 112 0 C112 0.276142 112.224 0.5 112.5 0.5 L112.5 0 L112.5 -0.5 Z M115.5 0.5 C115.776 0.5 116 0.276142 116 0 C116 -0.276142 115.776 -0.5 115.5 -0.5 L115.5 0 L115.5 0.5 Z M118.5 -0.5 C118.224 -0.5 118 -0.276142 118 0 C118 0.276142 118.224 0.5 118.5 0.5 L118.5 0 L118.5 -0.5 Z M121.5 0.5 C121.776 0.5 122 0.276142 122 0 C122 -0.276142 121.776 -0.5 121.5 -0.5 L121.5 0 L121.5 0.5 Z M124.5 -0.5 C124.224 -0.5 124 -0.276142 124 0 C124 0.276142 124.224 0.5 124.5 0.5 L124.5 0 L124.5 -0.5 Z M127.5 0.5 C127.776 0.5 128 0.276142 128 0 C128 -0.276142 127.776 -0.5 127.5 -0.5 L127.5 0 L127.5 0.5 Z M130.5 -0.5 C130.224 -0.5 130 -0.276142 130 0 C130 0.276142 130.224 0.5 130.5 0.5 L130.5 0 L130.5 -0.5 Z M133.5 0.5 C133.776 0.5 134 0.276142 134 0 C134 -0.276142 133.776 -0.5 133.5 -0.5 L133.5 0 L133.5 0.5 Z M136.5 -0.5 C136.224 -0.5 136 -0.276142 136 0 C136 0.276142 136.224 0.5 136.5 0.5 L136.5 0 L136.5 -0.5 Z M139.5 0.5 C139.776 0.5 140 0.276142 140 0 C140 -0.276142 139.776 -0.5 139.5 -0.5 L139.5 0 L139.5 0.5 Z M142.5 -0.5 C142.224 -0.5 142 -0.276142 142 0 C142 0.276142 142.224 0.5 142.5 0.5 L142.5 0 L142.5 -0.5 Z M145.5 0.5 C145.776 0.5 146 0.276142 146 0 C146 -0.276142 145.776 -0.5 145.5 -0.5 L145.5 0 L145.5 0.5 Z M148.5 -0.5 C148.224 -0.5 148 -0.276142 148 0 C148 0.276142 148.224 0.5 148.5 0.5 L148.5 0 L148.5 -0.5 Z M151.5 0.5 C151.776 0.5 152 0.276142 152 0 C152 -0.276142 151.776 -0.5 151.5 -0.5 L151.5 0 L151.5 0.5 Z M154.5 -0.5 C154.224 -0.5 154 -0.276142 154 0 C154 0.276142 154.224 0.5 154.5 0.5 L154.5 0 L154.5 -0.5 Z M157.5 0.5 C157.776 0.5 158 0.276142 158 0 C158 -0.276142 157.776 -0.5 157.5 -0.5 L157.5 0 L157.5 0.5 Z M160.5 -0.5 C160.224 -0.5 160 -0.276142 160 0 C160 0.276142 160.224 0.5 160.5 0.5 L160.5 0 L160.5 -0.5 Z M163.5 0.5 C163.776 0.5 164 0.276142 164 0 C164 -0.276142 163.776 -0.5 163.5 -0.5 L163.5 0 L163.5 0.5 Z M166.5 -0.5 C166.224 -0.5 166 -0.276142 166 0 C166 0.276142 166.224 0.5 166.5 0.5 L166.5 0 L166.5 -0.5 Z M169.5 0.5 C169.776 0.5 170 0.276142 170 0 C170 -0.276142 169.776 -0.5 169.5 -0.5 L169.5 0 L169.5 0.5 Z M172.5 -0.5 C172.224 -0.5 172 -0.276142 172 0 C172 0.276142 172.224 0.5 172.5 0.5 L172.5 0 L172.5 -0.5 Z M175.5 0.5 C175.776 0.5 176 0.276142 176 0 C176 -0.276142 175.776 -0.5 175.5 -0.5 L175.5 0 L175.5 0.5 Z M178.5 -0.5 C178.224 -0.5 178 -0.276142 178 0 C178 0.276142 178.224 0.5 178.5 0.5 L178.5 0 L178.5 -0.5 Z M181.5 0.5 C181.776 0.5 182 0.276142 182 0 C182 -0.276142 181.776 -0.5 181.5 -0.5 L181.5 0 L181.5 0.5 Z M184.5 -0.5 C184.224 -0.5 184 -0.276142 184 0 C184 0.276142 184.224 0.5 184.5 0.5 L184.5 0 L184.5 -0.5 Z M187.5 0.5 C187.776 0.5 188 0.276142 188 0 C188 -0.276142 187.776 -0.5 187.5 -0.5 L187.5 0 L187.5 0.5 Z M190.5 -0.5 C190.224 -0.5 190 -0.276142 190 0 C190 0.276142 190.224 0.5 190.5 0.5 L190.5 0 L190.5 -0.5 Z M193.5 0.5 C193.776 0.5 194 0.276142 194 0 C194 -0.276142 193.776 -0.5 193.5 -0.5 L193.5 0 L193.5 0.5 Z M196.5 -0.5 C196.224 -0.5 196 -0.276142 196 0 C196 0.276142 196.224 0.5 196.5 0.5 L196.5 0 L196.5 -0.5 Z M199.5 0.5 C199.776 0.5 200 0.276142 200 0 C200 -0.276142 199.776 -0.5 199.5 -0.5 L199.5 0 L199.5 0.5 Z M202.5 -0.5 C202.224 -0.5 202 -0.276142 202 0 C202 0.276142 202.224 0.5 202.5 0.5 L202.5 0 L202.5 -0.5 Z M205.5 0.5 C205.776 0.5 206 0.276142 206 0 C206 -0.276142 205.776 -0.5 205.5 -0.5 L205.5 0 L205.5 0.5 Z M208.5 -0.5 C208.224 -0.5 208 -0.276142 208 0 C208 0.276142 208.224 0.5 208.5 0.5 L208.5 0 L208.5 -0.5 Z M211.5 0.5 C211.776 0.5 212 0.276142 212 0 C212 -0.276142 211.776 -0.5 211.5 -0.5 L211.5 0 L211.5 0.5 Z M214.5 -0.5 C214.224 -0.5 214 -0.276142 214 0 C214 0.276142 214.224 0.5 214.5 0.5 L214.5 0 L214.5 -0.5 Z M217.5 0.5 C217.776 0.5 218 0.276142 218 0 C218 -0.276142 217.776 -0.5 217.5 -0.5 L217.5 0 L217.5 0.5 Z M220.5 -0.5 C220.224 -0.5 220 -0.276142 220 0 C220 0.276142 220.224 0.5 220.5 0.5 L220.5 0 L220.5 -0.5 Z M223.5 0.5 C223.776 0.5 224 0.276142 224 0 C224 -0.276142 223.776 -0.5 223.5 -0.5 L223.5 0 L223.5 0.5 Z M226.5 -0.5 C226.224 -0.5 226 -0.276142 226 0 C226 0.276142 226.224 0.5 226.5 0.5 L226.5 0 L226.5 -0.5 Z M229.5 0.5 C229.776 0.5 230 0.276142 230 0 C230 -0.276142 229.776 -0.5 229.5 -0.5 L229.5 0 L229.5 0.5 Z M232.5 -0.5 C232.224 -0.5 232 -0.276142 232 0 C232 0.276142 232.224 0.5 232.5 0.5 L232.5 0 L232.5 -0.5 Z M235.5 0.5 C235.776 0.5 236 0.276142 236 0 C236 -0.276142 235.776 -0.5 235.5 -0.5 L235.5 0 L235.5 0.5 Z M238.5 -0.5 C238.224 -0.5 238 -0.276142 238 0 C238 0.276142 238.224 0.5 238.5 0.5 L238.5 0 L238.5 -0.5 Z M241.5 0.5 C241.776 0.5 242 0.276142 242 0 C242 -0.276142 241.776 -0.5 241.5 -0.5 L241.5 0 L241.5 0.5 Z M244.5 -0.5 C244.224 -0.5 244 -0.276142 244 0 C244 0.276142 244.224 0.5 244.5 0.5 L244.5 0 L244.5 -0.5 Z M247.5 0.5 C247.776 0.5 248 0.276142 248 0 C248 -0.276142 247.776 -0.5 247.5 -0.5 L247.5 0 L247.5 0.5 Z M250.5 -0.5 C250.224 -0.5 250 -0.276142 250 0 C250 0.276142 250.224 0.5 250.5 0.5 L250.5 0 L250.5 -0.5 Z M253.5 0.5 C253.776 0.5 254 0.276142 254 0 C254 -0.276142 253.776 -0.5 253.5 -0.5 L253.5 0 L253.5 0.5 Z M256.5 -0.5 C256.224 -0.5 256 -0.276142 256 0 C256 0.276142 256.224 0.5 256.5 0.5 L256.5 0 L256.5 -0.5 Z M0 0 L0 0.5 L1.5 0.5 L1.5 0 L1.5 -0.5 L0 -0.5 L0 0 Z M4.5 0 L4.5 0.5 L7.5 0.5 L7.5 0 L7.5 -0.5 L4.5 -0.5 L4.5 0 Z M10.5 0 L10.5 0.5 L13.5 0.5 L13.5 0 L13.5 -0.5 L10.5 -0.5 L10.5 0 Z M16.5 0 L16.5 0.5 L19.5 0.5 L19.5 0 L19.5 -0.5 L16.5 -0.5 L16.5 0 Z M22.5 0 L22.5 0.5 L25.5 0.5 L25.5 0 L25.5 -0.5 L22.5 -0.5 L22.5 0 Z M28.5 0 L28.5 0.5 L31.5 0.5 L31.5 0 L31.5 -0.5 L28.5 -0.5 L28.5 0 Z M34.5 0 L34.5 0.5 L37.5 0.5 L37.5 0 L37.5 -0.5 L34.5 -0.5 L34.5 0 Z M40.5 0 L40.5 0.5 L43.5 0.5 L43.5 0 L43.5 -0.5 L40.5 -0.5 L40.5 0 Z M46.5 0 L46.5 0.5 L49.5 0.5 L49.5 0 L49.5 -0.5 L46.5 -0.5 L46.5 0 Z M52.5 0 L52.5 0.5 L55.5 0.5 L55.5 0 L55.5 -0.5 L52.5 -0.5 L52.5 0 Z M58.5 0 L58.5 0.5 L61.5 0.5 L61.5 0 L61.5 -0.5 L58.5 -0.5 L58.5 0 Z M64.5 0 L64.5 0.5 L67.5 0.5 L67.5 0 L67.5 -0.5 L64.5 -0.5 L64.5 0 Z M70.5 0 L70.5 0.5 L73.5 0.5 L73.5 0 L73.5 -0.5 L70.5 -0.5 L70.5 0 Z M76.5 0 L76.5 0.5 L79.5 0.5 L79.5 0 L79.5 -0.5 L76.5 -0.5 L76.5 0 Z M82.5 0 L82.5 0.5 L85.5 0.5 L85.5 0 L85.5 -0.5 L82.5 -0.5 L82.5 0 Z M88.5 0 L88.5 0.5 L91.5 0.5 L91.5 0 L91.5 -0.5 L88.5 -0.5 L88.5 0 Z M94.5 0 L94.5 0.5 L97.5 0.5 L97.5 0 L97.5 -0.5 L94.5 -0.5 L94.5 0 Z M100.5 0 L100.5 0.5 L103.5 0.5 L103.5 0 L103.5 -0.5 L100.5 -0.5 L100.5 0 Z M106.5 0 L106.5 0.5 L109.5 0.5 L109.5 0 L109.5 -0.5 L106.5 -0.5 L106.5 0 Z M112.5 0 L112.5 0.5 L115.5 0.5 L115.5 0 L115.5 -0.5 L112.5 -0.5 L112.5 0 Z M118.5 0 L118.5 0.5 L121.5 0.5 L121.5 0 L121.5 -0.5 L118.5 -0.5 L118.5 0 Z M124.5 0 L124.5 0.5 L127.5 0.5 L127.5 0 L127.5 -0.5 L124.5 -0.5 L124.5 0 Z M130.5 0 L130.5 0.5 L133.5 0.5 L133.5 0 L133.5 -0.5 L130.5 -0.5 L130.5 0 Z M136.5 0 L136.5 0.5 L139.5 0.5 L139.5 0 L139.5 -0.5 L136.5 -0.5 L136.5 0 Z M142.5 0 L142.5 0.5 L145.5 0.5 L145.5 0 L145.5 -0.5 L142.5 -0.5 L142.5 0 Z M148.5 0 L148.5 0.5 L151.5 0.5 L151.5 0 L151.5 -0.5 L148.5 -0.5 L148.5 0 Z M154.5 0 L154.5 0.5 L157.5 0.5 L157.5 0 L157.5 -0.5 L154.5 -0.5 L154.5 0 Z M160.5 0 L160.5 0.5 L163.5 0.5 L163.5 0 L163.5 -0.5 L160.5 -0.5 L160.5 0 Z M166.5 0 L166.5 0.5 L169.5 0.5 L169.5 0 L169.5 -0.5 L166.5 -0.5 L166.5 0 Z M172.5 0 L172.5 0.5 L175.5 0.5 L175.5 0 L175.5 -0.5 L172.5 -0.5 L172.5 0 Z M178.5 0 L178.5 0.5 L181.5 0.5 L181.5 0 L181.5 -0.5 L178.5 -0.5 L178.5 0 Z M184.5 0 L184.5 0.5 L187.5 0.5 L187.5 0 L187.5 -0.5 L184.5 -0.5 L184.5 0 Z M190.5 0 L190.5 0.5 L193.5 0.5 L193.5 0 L193.5 -0.5 L190.5 -0.5 L190.5 0 Z M196.5 0 L196.5 0.5 L199.5 0.5 L199.5 0 L199.5 -0.5 L196.5 -0.5 L196.5 0 Z M202.5 0 L202.5 0.5 L205.5 0.5 L205.5 0 L205.5 -0.5 L202.5 -0.5 L202.5 0 Z M208.5 0 L208.5 0.5 L211.5 0.5 L211.5 0 L211.5 -0.5 L208.5 -0.5 L208.5 0 Z M214.5 0 L214.5 0.5 L217.5 0.5 L217.5 0 L217.5 -0.5 L214.5 -0.5 L214.5 0 Z M220.5 0 L220.5 0.5 L223.5 0.5 L223.5 0 L223.5 -0.5 L220.5 -0.5 L220.5 0 Z M226.5 0 L226.5 0.5 L229.5 0.5 L229.5 0 L229.5 -0.5 L226.5 -0.5 L226.5 0 Z M232.5 0 L232.5 0.5 L235.5 0.5 L235.5 0 L235.5 -0.5 L232.5 -0.5 L232.5 0 Z M238.5 0 L238.5 0.5 L241.5 0.5 L241.5 0 L241.5 -0.5 L238.5 -0.5 L238.5 0 Z M244.5 0 L244.5 0.5 L247.5 0.5 L247.5 0 L247.5 -0.5 L244.5 -0.5 L244.5 0 Z M250.5 0 L250.5 0.5 L253.5 0.5 L253.5 0 L253.5 -0.5 L250.5 -0.5 L250.5 0 Z M256.5 0 L256.5 0.5 L258 0.5 L258 0 L258 -0.5 L256.5 -0.5 L256.5 0 Z" fill="#e5484d"/></svg>
          <div style={{ position: "absolute", left: "222px", top: "-8.75px", width: "57px", height: "20px", borderRadius: "6px", background: "#1f1f22", boxShadow: "0px 2px 6px 0px rgba(0, 0, 0, 0.12)", display: "flex", flexDirection: "row", padding: "3px 7px 3px 7px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "43px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "11px", fontWeight: 500, color: "#ffffff" }}>3.4× avg</p>
          </div>
          <svg style={{ position: "absolute", left: "246.5px", top: "10.75px", width: "8px", height: "4px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="8" height="4" viewBox="0 0 8 4" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0 L8 0 L4 4 L0 0 Z" fill="#1f1f22"/></svg>
        </div>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "10px", height: "10px", flexShrink: 0, borderRadius: "2px", background: "#e5484d", boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.05), inset 0px 4px 4px 0px rgba(255, 255, 255, 0.29)" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "73px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#000000" }}>AWS charges</p>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "10px", height: "2px", flexShrink: 0, borderRadius: "1px", background: "#e5484d" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "81px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#000000" }}>3× limit $1,065</p>
          </div>
        </div>
      </div>
      <div style={{ alignSelf: "stretch", flexShrink: 0, background: "#fafafa", boxShadow: "inset 0 1px 0 0 #ededed", display: "flex", flexDirection: "row", padding: "11px 14px 10px 14px", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "143px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>Avg. AWS charge $354.20</p>
        <div data-fu="btn" style={{ height: "28px", flexShrink: 0, borderRadius: "8px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #dfe1e6, 0px 1px 2px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "row", padding: "1px 11px 1px 11px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "47px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#0f172a" }}>Edit rule</p>
          <ChevronRight size={12} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#7d818c", display: "block" }} />
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
  const labelNear = (scope: Element, x: number, y: number, below: boolean, anyText = false) => {
    let best = "", d = 1e9;
    for (const t of texts(scope)) {
      const r = box(t);
      if (below ? r.top < y - 2 : r.right > x + 2) continue;
      if (!anyText && NUM.test((t.textContent || "").trim()) && !/[a-z]{3}/i.test(t.textContent || "")) continue;
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

  // cards: a small lift on hover (an extra drop shadow, the card's own shadows stay as they are)
  for (const c of all("[data-fu=card]").concat(root.dataset.fu === "card" ? [root] : [])) {
    c.addEventListener("mouseenter", () => { ease(c, "transform .18s ease, filter .18s ease"); c.style.transform = "translateY(-2px)"; c.style.filter = "drop-shadow(0 8px 16px rgba(17,17,19,.08))"; });
    c.addEventListener("mouseleave", () => { c.style.transform = ""; c.style.filter = ""; });
  }

  // heatmap and calendar cells: an outline and the cell's own text
  for (const c of all("[data-fu=cell]")) {
    c.addEventListener("mouseenter", () => {
      ease(c, "outline-color .12s");
      c.style.outline = "2px solid rgba(17,17,19,.55)";
      c.style.outlineOffset = "1px";
      const r = box(c);
      // its own text, or the row and column labels of the grid it sits in
      let label = (c.textContent || "").trim();
      if (!label) {
        // walk outwards until a row label (left) and a column label (below) are in reach
        let row = "", col = "";
        for (let a: Element | null = c.parentElement; a && a !== root.parentElement && !(row && col); a = a.parentElement) {
          if (!row) row = labelNear(a, r.left, r.top + r.height / 2, false, true);
          if (!col) col = labelNear(a, r.left + r.width / 2, r.bottom, true, true);
        }
        label = [row, col].filter(Boolean).join(" · ");
      }
      show(label, r.left + r.width / 2, r.top);
    });
    c.addEventListener("mouseleave", () => { c.style.outline = ""; c.style.outlineOffset = ""; hide(); });
  }

  // fields: hover and focus states
  for (const f of all("[data-fu=field]")) {
    f.style.cursor = "text";
    f.addEventListener("mouseenter", () => { ease(f, "filter .15s, outline-color .15s"); f.style.filter = "brightness(0.985)"; });
    f.addEventListener("mouseleave", () => { f.style.filter = ""; });
    f.addEventListener("mousedown", (ev) => {
      ev.stopPropagation();
      for (const o of all("[data-fu=field]")) o.style.outline = "";
      f.style.outline = "3px solid rgba(17,17,19,.12)";
      f.style.outlineOffset = "0px";
    });
  }
  doc.addEventListener("mousedown", () => { for (const o of all("[data-fu=field]")) o.style.outline = ""; });

  // donut and pie charts drawn as one vector per arc: the hovered arc stays, the others fade
  const arcGroups = new Map<Element, HTMLElement[]>();
  for (const a of all("[data-fu=arc]")) { const p = a.parentElement!; if (!arcGroups.has(p)) arcGroups.set(p, []); arcGroups.get(p)!.push(a); }
  arcGroups.forEach((arcs) => {
    const scope = chartOf(arcs[0]);
    const hexOf = (c: string) => { const m = c.match(/\d+/g); return m && m.length >= 3 ? "#" + m.slice(0, 3).map((x) => (+x).toString(16).padStart(2, "0")).join("") : c.toLowerCase(); };
    const legend = (color: string) => {
      for (const el of all("*", scope)) {
        if (el.children.length || (el.textContent || "").trim()) continue;
        if (hexOf(getComputedStyle(el).backgroundColor) !== color.toLowerCase()) continue;
        // climb to the legend row: the first ancestor that holds more than the swatch's label
        let row: Element | null = el.parentElement;
        while (row && row.parentElement && texts(row).length < 2 && row !== scope) row = row.parentElement;
        const words = row ? texts(row).map((t) => (t.textContent || "").trim()) : [];
        if (words.length && words.length <= 5) return words.join(" · ");
        if (el.parentElement) return texts(el.parentElement).map((t) => (t.textContent || "").trim()).join(" · ");
      }
      return "";
    };
    // hit-test the whole stack under the pointer: labels or tracks drawn over the ring don't get in the way
    const fills = new Map(arcs.map((a) => { const sh = a.querySelector("path"); return [a, (sh && (sh.getAttribute("fill") || sh.getAttribute("stroke"))) || ""] as [HTMLElement, string]; }));
    let current: HTMLElement | null = null;
    scope.addEventListener("mousemove", (ev) => {
      const e = ev as MouseEvent;
      // the arc whose drawn shape (not just its box) is under the pointer
      const inside = (sh: SVGGeometryElement) => { const m = sh.getScreenCTM(); if (!m) return false; const q = new DOMPoint(e.clientX, e.clientY).matrixTransform(m.inverse()); return sh.isPointInFill(q) || sh.isPointInStroke(q); };
      const arc = arcs.find((a) => (Array.from(a.querySelectorAll("path, circle, ellipse")) as SVGGeometryElement[]).some(inside)) || null;
      if (!arc) { if (current) { undim(arcs); hide(); current = null; } return; }
      if (arc !== current) { dim(arcs, [arc]); current = arc; }
      show(legend(fills.get(arc) || ""), e.clientX, e.clientY);
    });
    scope.addEventListener("mouseleave", () => { undim(arcs); hide(); current = null; });
  });

  // donut and pie arcs in one drawing: the hovered arc stays, the others fade; the legend row with the same colour names it
  for (const svg of all("svg[data-fu=donut]") as unknown as SVGSVGElement[]) {
    const arcs = (Array.from(svg.querySelectorAll("path")) as SVGPathElement[]).filter((p) => { const f = p.getAttribute("fill"); return f && f !== "none" && !/^url/.test(f); });
    const scope = chartOf(svg);
    const hex = (c: string) => { const m = c.match(/\d+/g); return m && m.length >= 3 ? "#" + m.slice(0, 3).map((x) => (+x).toString(16).padStart(2, "0")).join("") : c.toLowerCase(); };
    const legend = (color: string) => {
      for (const el of all("*", scope)) {
        if (el.children.length || (el.textContent || "").trim()) continue;
        const bg = getComputedStyle(el).backgroundColor;
        if (!bg || hex(bg) !== color.toLowerCase()) continue;
        const row = el.parentElement;
        const words = row ? texts(row).map((t) => (t.textContent || "").trim()) : [];
        if (words.length) return words.join(" · ");
      }
      return "";
    };
    for (const a of arcs) {
      a.addEventListener("mouseenter", (ev) => {
        dim(arcs, [a]);
        const e = ev as MouseEvent;
        show(legend(a.getAttribute("fill") || ""), e.clientX, e.clientY);
      });
      a.addEventListener("mousemove", (ev) => { const e = ev as MouseEvent; tip.style.left = e.clientX + "px"; tip.style.top = e.clientY - 8 + "px"; });
      a.addEventListener("mouseleave", () => { undim(arcs); hide(); });
    }
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
