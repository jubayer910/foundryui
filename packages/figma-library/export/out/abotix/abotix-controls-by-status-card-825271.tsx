"use client";
// Controls by status card (abotix, KPI and stats) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Ingot Icons.
import { useEffect, useRef } from "react";
import { ChevronDown } from "ingotui-icons/react/stroke-rounded";

export function ControlsByStatusCard() {
  const fuRef = useRef<any>(null);
  useEffect(() => fuInteract(fuRef.current), []);
  return (
    <div ref={fuRef} data-fu="card" style={{ width: "590px", height: "324px", borderRadius: "8px", background: "#fafafa", boxShadow: "inset 0 0 0 1px #ececec", overflow: "hidden", position: "relative" }}>
      <p style={{ position: "absolute", left: "16px", top: "16px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "153px", lineHeight: "23px", fontFamily: "'Geist'", fontSize: "18px", fontWeight: 600, color: "#1c1b20", letterSpacing: "-0.02em" }}>Controls by status</p>
      <div data-fu="btn" style={{ position: "absolute", left: "431px", top: "12px", width: "143px", height: "32px", borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px rgba(221, 221, 221, 0.4), 0px 0px 1px 0px rgba(0, 0, 0, 0.25)", display: "flex", flexDirection: "row", padding: "1px 11px 1px 11px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "99px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#4f4f51" }}>All frameworks</p>
        <ChevronDown size={14} strokeWidth={1.51} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#4f4f51", display: "block" }} />
      </div>
      <div style={{ position: "absolute", left: "16px", top: "288px", width: "353px", height: "18px", display: "flex", flexDirection: "row", gap: "20px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "10px", height: "10px", flexShrink: 0, borderRadius: "2px", background: "#484ff5", boxShadow: "inset 0 0 0 1px rgba(214, 214, 214, 0.4), 0px 4px 4px 0px rgba(0, 0, 0, 0.05), inset 0px 4px 4px 0px rgba(255, 255, 255, 0.29)" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "52px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#747474", letterSpacing: "-0.01em" }}>Passing</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "23px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#747474" }}>268</p>
        </div>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "10px", height: "10px", flexShrink: 0, borderRadius: "2px", background: "#9ea3ff", boxShadow: "inset 0 0 0 1px rgba(214, 214, 214, 0.4), 0px 4px 4px 0px rgba(0, 0, 0, 0.05), inset 0px 4px 4px 0px rgba(255, 255, 255, 0.29)" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "103px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#747474", letterSpacing: "-0.01em" }}>Needs evidence</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "13px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#747474" }}>31</p>
        </div>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "10px", height: "10px", flexShrink: 0, borderRadius: "2px", background: "#e5484d", boxShadow: "inset 0 0 0 1px rgba(214, 214, 214, 0.4), 0px 4px 4px 0px rgba(0, 0, 0, 0.05), inset 0px 4px 4px 0px rgba(255, 255, 255, 0.29)" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "43px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#747474", letterSpacing: "-0.01em" }}>Failing</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "13px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#747474" }}>18</p>
        </div>
      </div>
      <div style={{ position: "absolute", left: "16px", top: "56px", width: "558px", height: "216px" }}>
        <div style={{ position: "absolute", left: "351.2px", top: "30px", width: "100.4px", height: "160px", borderRadius: "8px", background: "rgba(113, 113, 122, 0.06)" }} />
        <svg style={{ position: "absolute", left: "36px", top: "30px", width: "522px", height: "1px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="522" height="1" viewBox="0 0 522 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0L522 0" fill="none" stroke="#ececee" strokeWidth="1" strokeDasharray="3 3" strokeLinecap="butt"/></svg>
        <p style={{ position: "absolute", left: "0px", top: "22px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "31px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#747474" }}>100%</p>
        <svg style={{ position: "absolute", left: "36px", top: "70px", width: "522px", height: "1px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="522" height="1" viewBox="0 0 522 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0L522 0" fill="none" stroke="#ececee" strokeWidth="1" strokeDasharray="3 3" strokeLinecap="butt"/></svg>
        <p style={{ position: "absolute", left: "4px", top: "62px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "24px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#747474" }}>75%</p>
        <svg style={{ position: "absolute", left: "36px", top: "110px", width: "522px", height: "1px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="522" height="1" viewBox="0 0 522 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0L522 0" fill="none" stroke="#ececee" strokeWidth="1" strokeDasharray="3 3" strokeLinecap="butt"/></svg>
        <p style={{ position: "absolute", left: "2px", top: "102px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "26px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#747474" }}>50%</p>
        <svg style={{ position: "absolute", left: "36px", top: "150px", width: "522px", height: "1px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="522" height="1" viewBox="0 0 522 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0L522 0" fill="none" stroke="#ececee" strokeWidth="1" strokeDasharray="3 3" strokeLinecap="butt"/></svg>
        <p style={{ position: "absolute", left: "3px", top: "142px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "25px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#747474" }}>25%</p>
        <div style={{ position: "absolute", left: "36px", top: "189.5px", width: "522px", height: "1px", background: "#e2e2e5" }} />
        <p style={{ position: "absolute", left: "10px", top: "182px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "18px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#747474" }}>0%</p>
        <div data-fu="bar" style={{ position: "absolute", left: "60.2px", top: "42.48px", width: "56px", height: "147.52px", borderRadius: "4px", background: "linear-gradient(180deg, #6066f6 0%, #484ff5 100%)", boxShadow: "inset 0 0 0 1px rgba(56, 62, 191, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.18), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
        <div data-fu="bar" style={{ position: "absolute", left: "60.2px", top: "34.96px", width: "56px", height: "5.32px", borderRadius: "2.66px", background: "linear-gradient(180deg, #e6e7ff 0%, #dee0ff 100%)", boxShadow: "inset 0 0 0 1px rgba(150, 155, 242, 0.22), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.35), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
        <div data-fu="bar" style={{ position: "absolute", left: "60.2px", top: "30px", width: "56px", height: "2.76px", borderRadius: "1.38px", background: "linear-gradient(180deg, #e86064 0%, #e5484d 100%)", boxShadow: "inset 0 0 0 1px rgba(179, 56, 60, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.18), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
        <div data-fu="bar" style={{ position: "absolute", left: "164.6px", top: "50.64px", width: "56px", height: "139.36px", borderRadius: "4px", background: "linear-gradient(180deg, #6066f6 0%, #484ff5 100%)", boxShadow: "inset 0 0 0 1px rgba(56, 62, 191, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.18), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
        <div data-fu="bar" style={{ position: "absolute", left: "164.6px", top: "36.88px", width: "56px", height: "11.56px", borderRadius: "4px", background: "linear-gradient(180deg, #e6e7ff 0%, #dee0ff 100%)", boxShadow: "inset 0 0 0 1px rgba(150, 155, 242, 0.22), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.35), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }}>
          <svg style={{ position: "absolute", left: "-11.56px", top: "0px", width: "86.56px", height: "11.56px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="86.56" height="11.56" viewBox="0 0 86.56 11.56" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 11.56 L0.494975 12.055 L12.055 0.494975 L11.56 0 L11.065 -0.494975 L-0.494975 11.065 L0 11.56 Z M5 11.56 L5.49497 12.055 L17.055 0.494975 L16.56 0 L16.065 -0.494975 L4.50503 11.065 L5 11.56 Z M10 11.56 L10.495 12.055 L22.055 0.494975 L21.56 0 L21.065 -0.494975 L9.50502 11.065 L10 11.56 Z M15 11.56 L15.495 12.055 L27.055 0.494975 L26.56 0 L26.065 -0.494975 L14.505 11.065 L15 11.56 Z M20 11.56 L20.495 12.055 L32.055 0.494975 L31.56 0 L31.065 -0.494975 L19.505 11.065 L20 11.56 Z M25 11.56 L25.495 12.055 L37.055 0.494975 L36.56 0 L36.065 -0.494975 L24.505 11.065 L25 11.56 Z M30 11.56 L30.495 12.055 L42.055 0.494975 L41.56 0 L41.065 -0.494975 L29.505 11.065 L30 11.56 Z M35 11.56 L35.495 12.055 L47.055 0.494975 L46.56 0 L46.065 -0.494975 L34.505 11.065 L35 11.56 Z M40 11.56 L40.495 12.055 L52.055 0.494975 L51.56 0 L51.065 -0.494975 L39.505 11.065 L40 11.56 Z M45 11.56 L45.495 12.055 L57.055 0.494975 L56.56 0 L56.065 -0.494975 L44.505 11.065 L45 11.56 Z M50 11.56 L50.495 12.055 L62.055 0.494975 L61.56 0 L61.065 -0.494975 L49.505 11.065 L50 11.56 Z M55 11.56 L55.495 12.055 L67.055 0.494975 L66.56 0 L66.065 -0.494975 L54.505 11.065 L55 11.56 Z M60 11.56 L60.495 12.055 L72.055 0.494975 L71.56 0 L71.065 -0.494975 L59.505 11.065 L60 11.56 Z M65 11.56 L65.495 12.055 L77.055 0.494975 L76.56 0 L76.065 -0.494975 L64.505 11.065 L65 11.56 Z M70 11.56 L70.495 12.055 L82.055 0.494975 L81.56 0 L81.065 -0.494975 L69.505 11.065 L70 11.56 Z M75 11.56 L75.495 12.055 L87.055 0.494975 L86.56 0 L86.065 -0.494975 L74.505 11.065 L75 11.56 Z" fill="#ffffff" fillOpacity="0.6"/></svg>
        </div>
        <div data-fu="bar" style={{ position: "absolute", left: "164.6px", top: "30px", width: "56px", height: "4.68px", borderRadius: "2.34px", background: "linear-gradient(180deg, #e86064 0%, #e5484d 100%)", boxShadow: "inset 0 0 0 1px rgba(179, 56, 60, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.18), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
        <div data-fu="bar" style={{ position: "absolute", left: "269px", top: "62px", width: "56px", height: "128px", borderRadius: "4px", background: "linear-gradient(180deg, #6066f6 0%, #484ff5 100%)", boxShadow: "inset 0 0 0 1px rgba(56, 62, 191, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.18), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
        <div data-fu="bar" style={{ position: "absolute", left: "269px", top: "41.36px", width: "56px", height: "18.44px", borderRadius: "4px", background: "linear-gradient(180deg, #e6e7ff 0%, #dee0ff 100%)", boxShadow: "inset 0 0 0 1px rgba(150, 155, 242, 0.22), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.35), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }}>
          <svg style={{ position: "absolute", left: "-18.44px", top: "0px", width: "108.44px", height: "18.44px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="108.44" height="18.44" viewBox="0 0 108.44 18.44" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 18.44 L0.494975 18.935 L18.935 0.494975 L18.44 0 L17.945 -0.494975 L-0.494975 17.945 L0 18.44 Z M5 18.44 L5.49497 18.935 L23.935 0.494975 L23.44 0 L22.945 -0.494975 L4.50503 17.945 L5 18.44 Z M10 18.44 L10.495 18.935 L28.935 0.494975 L28.44 0 L27.945 -0.494975 L9.50502 17.945 L10 18.44 Z M15 18.44 L15.495 18.935 L33.935 0.494975 L33.44 0 L32.945 -0.494975 L14.505 17.945 L15 18.44 Z M20 18.44 L20.495 18.935 L38.935 0.494975 L38.44 0 L37.945 -0.494975 L19.505 17.945 L20 18.44 Z M25 18.44 L25.495 18.935 L43.935 0.494975 L43.44 0 L42.945 -0.494975 L24.505 17.945 L25 18.44 Z M30 18.44 L30.495 18.935 L48.935 0.494975 L48.44 0 L47.945 -0.494975 L29.505 17.945 L30 18.44 Z M35 18.44 L35.495 18.935 L53.935 0.494975 L53.44 0 L52.945 -0.494975 L34.505 17.945 L35 18.44 Z M40 18.44 L40.495 18.935 L58.935 0.494975 L58.44 0 L57.945 -0.494975 L39.505 17.945 L40 18.44 Z M45 18.44 L45.495 18.935 L63.935 0.494975 L63.44 0 L62.945 -0.494975 L44.505 17.945 L45 18.44 Z M50 18.44 L50.495 18.935 L68.935 0.494975 L68.44 0 L67.945 -0.494975 L49.505 17.945 L50 18.44 Z M55 18.44 L55.495 18.935 L73.935 0.494975 L73.44 0 L72.945 -0.494975 L54.505 17.945 L55 18.44 Z M60 18.44 L60.495 18.935 L78.935 0.494975 L78.44 0 L77.945 -0.494975 L59.505 17.945 L60 18.44 Z M65 18.44 L65.495 18.935 L83.935 0.494975 L83.44 0 L82.945 -0.494975 L64.505 17.945 L65 18.44 Z M70 18.44 L70.495 18.935 L88.935 0.494975 L88.44 0 L87.945 -0.494975 L69.505 17.945 L70 18.44 Z M75 18.44 L75.495 18.935 L93.935 0.494975 L93.44 0 L92.945 -0.494975 L74.505 17.945 L75 18.44 Z M80 18.44 L80.495 18.935 L98.935 0.494975 L98.44 0 L97.945 -0.494975 L79.505 17.945 L80 18.44 Z M85 18.44 L85.495 18.935 L103.935 0.494975 L103.44 0 L102.945 -0.494975 L84.505 17.945 L85 18.44 Z M90 18.44 L90.495 18.935 L108.935 0.494975 L108.44 0 L107.945 -0.494975 L89.505 17.945 L90 18.44 Z" fill="#ffffff" fillOpacity="0.6"/></svg>
        </div>
        <div data-fu="bar" style={{ position: "absolute", left: "269px", top: "30px", width: "56px", height: "9.16px", borderRadius: "4px", background: "linear-gradient(180deg, #e86064 0%, #e5484d 100%)", boxShadow: "inset 0 0 0 1px rgba(179, 56, 60, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.18), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
        <div data-fu="bar" style={{ position: "absolute", left: "373.4px", top: "76.24px", width: "56px", height: "113.76px", borderRadius: "4px", background: "linear-gradient(180deg, #6066f6 0%, #484ff5 100%)", boxShadow: "inset 0 0 0 1px rgba(56, 62, 191, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.18), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
        <div data-fu="bar" style={{ position: "absolute", left: "373.4px", top: "47.76px", width: "56px", height: "26.28px", borderRadius: "4px", background: "linear-gradient(180deg, #e6e7ff 0%, #dee0ff 100%)", boxShadow: "inset 0 0 0 1px rgba(150, 155, 242, 0.22), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.35), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }}>
          <svg style={{ position: "absolute", left: "-26.28px", top: "0px", width: "131.28px", height: "26.28px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="131.28" height="26.28" viewBox="0 0 131.28 26.28" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 26.28 L0.494975 26.775 L26.775 0.494975 L26.28 0 L25.785 -0.494975 L-0.494975 25.785 L0 26.28 Z M5 26.28 L5.49497 26.775 L31.775 0.494975 L31.28 0 L30.785 -0.494975 L4.50503 25.785 L5 26.28 Z M10 26.28 L10.495 26.775 L36.775 0.494975 L36.28 0 L35.785 -0.494975 L9.50502 25.785 L10 26.28 Z M15 26.28 L15.495 26.775 L41.775 0.494975 L41.28 0 L40.785 -0.494975 L14.505 25.785 L15 26.28 Z M20 26.28 L20.495 26.775 L46.775 0.494975 L46.28 0 L45.785 -0.494975 L19.505 25.785 L20 26.28 Z M25 26.28 L25.495 26.775 L51.775 0.494975 L51.28 0 L50.785 -0.494975 L24.505 25.785 L25 26.28 Z M30 26.28 L30.495 26.775 L56.775 0.494975 L56.28 0 L55.785 -0.494975 L29.505 25.785 L30 26.28 Z M35 26.28 L35.495 26.775 L61.775 0.494975 L61.28 0 L60.785 -0.494975 L34.505 25.785 L35 26.28 Z M40 26.28 L40.495 26.775 L66.775 0.494975 L66.28 0 L65.785 -0.494975 L39.505 25.785 L40 26.28 Z M45 26.28 L45.495 26.775 L71.775 0.494975 L71.28 0 L70.785 -0.494975 L44.505 25.785 L45 26.28 Z M50 26.28 L50.495 26.775 L76.775 0.494975 L76.28 0 L75.785 -0.494975 L49.505 25.785 L50 26.28 Z M55 26.28 L55.495 26.775 L81.775 0.494975 L81.28 0 L80.785 -0.494975 L54.505 25.785 L55 26.28 Z M60 26.28 L60.495 26.775 L86.775 0.494975 L86.28 0 L85.785 -0.494975 L59.505 25.785 L60 26.28 Z M65 26.28 L65.495 26.775 L91.775 0.494975 L91.28 0 L90.785 -0.494975 L64.505 25.785 L65 26.28 Z M70 26.28 L70.495 26.775 L96.775 0.494975 L96.28 0 L95.785 -0.494975 L69.505 25.785 L70 26.28 Z M75 26.28 L75.495 26.775 L101.775 0.494975 L101.28 0 L100.785 -0.494975 L74.505 25.785 L75 26.28 Z M80 26.28 L80.495 26.775 L106.775 0.494975 L106.28 0 L105.785 -0.494975 L79.505 25.785 L80 26.28 Z M85 26.28 L85.495 26.775 L111.775 0.494975 L111.28 0 L110.785 -0.494975 L84.505 25.785 L85 26.28 Z M90 26.28 L90.495 26.775 L116.775 0.494975 L116.28 0 L115.785 -0.494975 L89.505 25.785 L90 26.28 Z M95 26.28 L95.495 26.775 L121.775 0.494975 L121.28 0 L120.785 -0.494975 L94.505 25.785 L95 26.28 Z M100 26.28 L100.495 26.775 L126.775 0.494975 L126.28 0 L125.785 -0.494975 L99.505 25.785 L100 26.28 Z M105 26.28 L105.495 26.775 L131.775 0.494975 L131.28 0 L130.785 -0.494975 L104.505 25.785 L105 26.28 Z" fill="#ffffff" fillOpacity="0.6"/></svg>
        </div>
        <div data-fu="bar" style={{ position: "absolute", left: "373.4px", top: "30px", width: "56px", height: "15.56px", borderRadius: "4px", background: "linear-gradient(180deg, #e86064 0%, #e5484d 100%)", boxShadow: "inset 0 0 0 1px rgba(179, 56, 60, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.18), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
        <div data-fu="bar" style={{ position: "absolute", left: "477.8px", top: "47.76px", width: "56px", height: "142.24px", borderRadius: "4px", background: "linear-gradient(180deg, #6066f6 0%, #484ff5 100%)", boxShadow: "inset 0 0 0 1px rgba(56, 62, 191, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.18), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
        <div data-fu="bar" style={{ position: "absolute", left: "477.8px", top: "37.04px", width: "56px", height: "8.52px", borderRadius: "4px", background: "linear-gradient(180deg, #e6e7ff 0%, #dee0ff 100%)", boxShadow: "inset 0 0 0 1px rgba(150, 155, 242, 0.22), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.35), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }}>
          <svg style={{ position: "absolute", left: "-8.52px", top: "0px", width: "78.52px", height: "8.52px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="78.52" height="8.52" viewBox="0 0 78.52 8.52" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 8.52 L0.494975 9.01498 L9.01498 0.494975 L8.52 0 L8.02503 -0.494975 L-0.494975 8.02503 L0 8.52 Z M5 8.52 L5.49497 9.01498 L14.015 0.494975 L13.52 0 L13.025 -0.494975 L4.50503 8.02503 L5 8.52 Z M10 8.52 L10.495 9.01498 L19.015 0.494975 L18.52 0 L18.025 -0.494975 L9.50502 8.02503 L10 8.52 Z M15 8.52 L15.495 9.01498 L24.015 0.494975 L23.52 0 L23.025 -0.494975 L14.505 8.02503 L15 8.52 Z M20 8.52 L20.495 9.01498 L29.015 0.494975 L28.52 0 L28.025 -0.494975 L19.505 8.02503 L20 8.52 Z M25 8.52 L25.495 9.01498 L34.015 0.494975 L33.52 0 L33.025 -0.494975 L24.505 8.02503 L25 8.52 Z M30 8.52 L30.495 9.01498 L39.015 0.494975 L38.52 0 L38.025 -0.494975 L29.505 8.02503 L30 8.52 Z M35 8.52 L35.495 9.01498 L44.015 0.494975 L43.52 0 L43.025 -0.494975 L34.505 8.02503 L35 8.52 Z M40 8.52 L40.495 9.01498 L49.015 0.494975 L48.52 0 L48.025 -0.494975 L39.505 8.02503 L40 8.52 Z M45 8.52 L45.495 9.01498 L54.015 0.494975 L53.52 0 L53.025 -0.494975 L44.505 8.02503 L45 8.52 Z M50 8.52 L50.495 9.01498 L59.015 0.494975 L58.52 0 L58.025 -0.494975 L49.505 8.02503 L50 8.52 Z M55 8.52 L55.495 9.01498 L64.015 0.494975 L63.52 0 L63.025 -0.494975 L54.505 8.02503 L55 8.52 Z M60 8.52 L60.495 9.01498 L69.015 0.494975 L68.52 0 L68.025 -0.494975 L59.505 8.02503 L60 8.52 Z M65 8.52 L65.495 9.01498 L74.015 0.494975 L73.52 0 L73.025 -0.494975 L64.505 8.02503 L65 8.52 Z M70 8.52 L70.495 9.01498 L79.015 0.494975 L78.52 0 L78.025 -0.494975 L69.505 8.02503 L70 8.52 Z" fill="#ffffff" fillOpacity="0.6"/></svg>
        </div>
        <div data-fu="bar" style={{ position: "absolute", left: "477.8px", top: "30px", width: "56px", height: "4.84px", borderRadius: "2.42px", background: "linear-gradient(180deg, #e86064 0%, #e5484d 100%)", boxShadow: "inset 0 0 0 1px rgba(179, 56, 60, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.18), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
        <p style={{ position: "absolute", left: "70.2px", top: "200px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "36px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#747474" }}>SOC 2</p>
        <p style={{ position: "absolute", left: "164.1px", top: "200px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "57px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#747474" }}>ISO 27001</p>
        <p style={{ position: "absolute", left: "262.5px", top: "200px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "69px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#747474" }}>NIST AI RMF</p>
        <p style={{ position: "absolute", left: "374.9px", top: "200px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "53px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#1f1f22" }}>EU AI Act</p>
        <p style={{ position: "absolute", left: "489.3px", top: "200px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "33px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#747474" }}>GDPR</p>
        <div style={{ position: "absolute", left: "331.4px", top: "4px", width: "140px", height: "20px", borderRadius: "6px", background: "#1f1f22", boxShadow: "0px 2px 6px 0px rgba(0, 0, 0, 0.12)", display: "flex", flexDirection: "row", padding: "3px 7px 3px 7px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "126px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "11px", fontWeight: 500, color: "#ffffff" }}>EU AI Act · 13 of 45 open</p>
        </div>
        <svg style={{ position: "absolute", left: "397.4px", top: "23.5px", width: "8px", height: "4px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="8" height="4" viewBox="0 0 8 4" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0 L8 0 L4 4 L0 0 Z" fill="#1f1f22"/></svg>
        <p style={{ position: "absolute", left: "75.7px", top: "168px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "25px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#ffffff" }}>92%</p>
        <p style={{ position: "absolute", left: "180.6px", top: "168px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "24px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#ffffff" }}>87%</p>
        <p style={{ position: "absolute", left: "284px", top: "168px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "26px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#ffffff" }}>80%</p>
        <p style={{ position: "absolute", left: "390.4px", top: "168px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "22px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#ffffff" }}>71%</p>
        <p style={{ position: "absolute", left: "493.3px", top: "168px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "25px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#ffffff" }}>89%</p>
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
