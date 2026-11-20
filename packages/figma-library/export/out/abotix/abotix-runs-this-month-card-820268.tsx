"use client";
// Runs this month card (abotix, Charts) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Ingot Icons.
import { useEffect, useRef } from "react";

export function RunsThisMonthCard() {
  const fuRef = useRef<any>(null);
  useEffect(() => fuInteract(fuRef.current), []);
  return (
    <div ref={fuRef} style={{ width: "400px", height: "320px", borderRadius: "8px", background: "#fafafa", boxShadow: "inset 0 0 0 1px #ececec", overflow: "hidden", position: "relative" }}>
      <p style={{ position: "absolute", left: "16px", top: "16px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "135px", lineHeight: "23px", fontFamily: "'Geist'", fontSize: "18px", fontWeight: 600, color: "#1c1b20", letterSpacing: "-0.02em" }}>Runs this month</p>
      <div style={{ position: "absolute", left: "310px", top: "12px", width: "74px", height: "24px", borderRadius: "6px", background: "rgba(37, 99, 235, 0.08)", display: "flex", flexDirection: "row", padding: "0px 6px 0px 6px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "62px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#2563eb", letterSpacing: "-0.01em" }}>Team plan</p>
      </div>
      <div style={{ position: "absolute", left: "200px", top: "66px", width: "104px", height: "71px", display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "83px", lineHeight: "23px", fontFamily: "'Geist'", fontSize: "18px", fontWeight: 500, color: "#111111", letterSpacing: "-0.02em" }}>4 runs left</p>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "84px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#747474" }}>Resets 1 Nov</p>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "104px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#747474" }}>10 runs / month</p>
      </div>
      <div style={{ position: "absolute", left: "16px", top: "174px", width: "368px", height: "18px", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "129px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 600, color: "#1c1b20", letterSpacing: "-0.02em" }}>Technique coverage</p>
        </div>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "45px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#8a8a8a" }}>3 suites</p>
      </div>
      <div style={{ position: "absolute", left: "16px", top: "200px", width: "368px", height: "107px", display: "flex", flexDirection: "column", gap: "10px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div data-fu="row" style={{ width: "368px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ width: "368px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "117px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#2d2d2d" }}>OWASP LLM Top 10</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "35px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#747474" }}>8 / 10</p>
          </div>
          <div style={{ width: "368px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "368px", height: "6px", flexShrink: 0, position: "relative" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "294.4px", height: "6px", borderRadius: "3px", background: "linear-gradient(90deg, #888df9 0%, #484ff5 100%)", boxShadow: "inset 0 0 0 1px rgba(56, 62, 191, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.18), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
              <svg style={{ position: "absolute", left: "298.4px", top: "0px", width: "69.1px", height: "6px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="69.1" height="6" viewBox="0 0 69.1 6" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0 L-0.5 0 L-0.5 6 L0 6 L0.5 6 L0.5 0 L0 0 Z M3.29 0 L2.79 0 L2.79 6 L3.29 6 L3.79 6 L3.79 0 L3.29 0 Z M6.58 0 L6.08 0 L6.08 6 L6.58 6 L7.08 6 L7.08 0 L6.58 0 Z M9.87 0 L9.37 0 L9.37 6 L9.87 6 L10.37 6 L10.37 0 L9.87 0 Z M13.16 0 L12.66 0 L12.66 6 L13.16 6 L13.66 6 L13.66 0 L13.16 0 Z M16.45 0 L15.95 0 L15.95 6 L16.45 6 L16.95 6 L16.95 0 L16.45 0 Z M19.74 0 L19.24 0 L19.24 6 L19.74 6 L20.24 6 L20.24 0 L19.74 0 Z M23.03 0 L22.53 0 L22.53 6 L23.03 6 L23.53 6 L23.53 0 L23.03 0 Z M26.32 0 L25.82 0 L25.82 6 L26.32 6 L26.82 6 L26.82 0 L26.32 0 Z M29.61 0 L29.11 0 L29.11 6 L29.61 6 L30.11 6 L30.11 0 L29.61 0 Z M32.9 0 L32.4 0 L32.4 6 L32.9 6 L33.4 6 L33.4 0 L32.9 0 Z M36.2 0 L35.7 0 L35.7 6 L36.2 6 L36.7 6 L36.7 0 L36.2 0 Z M39.49 0 L38.99 0 L38.99 6 L39.49 6 L39.99 6 L39.99 0 L39.49 0 Z M42.78 0 L42.28 0 L42.28 6 L42.78 6 L43.28 6 L43.28 0 L42.78 0 Z M46.07 0 L45.57 0 L45.57 6 L46.07 6 L46.57 6 L46.57 0 L46.07 0 Z M49.36 0 L48.86 0 L48.86 6 L49.36 6 L49.86 6 L49.86 0 L49.36 0 Z M52.65 0 L52.15 0 L52.15 6 L52.65 6 L53.15 6 L53.15 0 L52.65 0 Z M55.94 0 L55.44 0 L55.44 6 L55.94 6 L56.44 6 L56.44 0 L55.94 0 Z M59.23 0 L58.73 0 L58.73 6 L59.23 6 L59.73 6 L59.73 0 L59.23 0 Z M62.52 0 L62.02 0 L62.02 6 L62.52 6 L63.02 6 L63.02 0 L62.52 0 Z M65.81 0 L65.31 0 L65.31 6 L65.81 6 L66.31 6 L66.31 0 L65.81 0 Z M69.1 0 L68.6 0 L68.6 6 L69.1 6 L69.6 6 L69.6 0 L69.1 0 Z" fill="#d4d4d8"/></svg>
            </div>
          </div>
        </div>
        <div data-fu="row" style={{ width: "368px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ width: "368px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "81px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#2d2d2d" }}>MITRE ATLAS</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "43px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#747474" }}>23 / 31</p>
          </div>
          <div style={{ width: "368px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "368px", height: "6px", flexShrink: 0, position: "relative" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "273.03px", height: "6px", borderRadius: "3px", background: "linear-gradient(90deg, #a589fa 0%, #744af7 100%)", boxShadow: "inset 0 0 0 1px rgba(90, 58, 193, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.18), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
              <svg style={{ position: "absolute", left: "277.03px", top: "0px", width: "90.47px", height: "6px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="90.47" height="6" viewBox="0 0 90.47 6" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0 L-0.5 0 L-0.5 6 L0 6 L0.5 6 L0.5 0 L0 0 Z M3.23 0 L2.73 0 L2.73 6 L3.23 6 L3.73 6 L3.73 0 L3.23 0 Z M6.46 0 L5.96 0 L5.96 6 L6.46 6 L6.96 6 L6.96 0 L6.46 0 Z M9.69 0 L9.19 0 L9.19 6 L9.69 6 L10.19 6 L10.19 0 L9.69 0 Z M12.92 0 L12.42 0 L12.42 6 L12.92 6 L13.42 6 L13.42 0 L12.92 0 Z M16.15 0 L15.65 0 L15.65 6 L16.15 6 L16.65 6 L16.65 0 L16.15 0 Z M19.39 0 L18.89 0 L18.89 6 L19.39 6 L19.89 6 L19.89 0 L19.39 0 Z M22.62 0 L22.12 0 L22.12 6 L22.62 6 L23.12 6 L23.12 0 L22.62 0 Z M25.85 0 L25.35 0 L25.35 6 L25.85 6 L26.35 6 L26.35 0 L25.85 0 Z M29.08 0 L28.58 0 L28.58 6 L29.08 6 L29.58 6 L29.58 0 L29.08 0 Z M32.31 0 L31.81 0 L31.81 6 L32.31 6 L32.81 6 L32.81 0 L32.31 0 Z M35.54 0 L35.04 0 L35.04 6 L35.54 6 L36.04 6 L36.04 0 L35.54 0 Z M38.77 0 L38.27 0 L38.27 6 L38.77 6 L39.27 6 L39.27 0 L38.77 0 Z M42 0 L41.5 0 L41.5 6 L42 6 L42.5 6 L42.5 0 L42 0 Z M45.23 0 L44.73 0 L44.73 6 L45.23 6 L45.73 6 L45.73 0 L45.23 0 Z M48.46 0 L47.96 0 L47.96 6 L48.46 6 L48.96 6 L48.96 0 L48.46 0 Z M51.7 0 L51.2 0 L51.2 6 L51.7 6 L52.2 6 L52.2 0 L51.7 0 Z M54.93 0 L54.43 0 L54.43 6 L54.93 6 L55.43 6 L55.43 0 L54.93 0 Z M58.16 0 L57.66 0 L57.66 6 L58.16 6 L58.66 6 L58.66 0 L58.16 0 Z M61.39 0 L60.89 0 L60.89 6 L61.39 6 L61.89 6 L61.89 0 L61.39 0 Z M64.62 0 L64.12 0 L64.12 6 L64.62 6 L65.12 6 L65.12 0 L64.62 0 Z M67.85 0 L67.35 0 L67.35 6 L67.85 6 L68.35 6 L68.35 0 L67.85 0 Z M71.08 0 L70.58 0 L70.58 6 L71.08 6 L71.58 6 L71.58 0 L71.08 0 Z M74.31 0 L73.81 0 L73.81 6 L74.31 6 L74.81 6 L74.81 0 L74.31 0 Z M77.54 0 L77.04 0 L77.04 6 L77.54 6 L78.04 6 L78.04 0 L77.54 0 Z M80.77 0 L80.27 0 L80.27 6 L80.77 6 L81.27 6 L81.27 0 L80.77 0 Z M84.01 0 L83.51 0 L83.51 6 L84.01 6 L84.51 6 L84.51 0 L84.01 0 Z M87.24 0 L86.74 0 L86.74 6 L87.24 6 L87.74 6 L87.74 0 L87.24 0 Z M90.47 0 L89.97 0 L89.97 6 L90.47 6 L90.97 6 L90.97 0 L90.47 0 Z" fill="#d4d4d8"/></svg>
            </div>
          </div>
        </div>
        <div data-fu="row" style={{ width: "368px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ width: "368px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "104px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#2d2d2d" }}>Tool-chain abuse</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "35px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#747474" }}>9 / 12</p>
          </div>
          <div style={{ width: "368px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "368px", height: "6px", flexShrink: 0, position: "relative" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "276px", height: "6px", borderRadius: "3px", background: "linear-gradient(90deg, #91cdf4 0%, #56b2ee 100%)", boxShadow: "inset 0 0 0 1px rgba(67, 139, 186, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.18), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
              <svg style={{ position: "absolute", left: "280px", top: "0px", width: "87.5px", height: "6px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="87.5" height="6" viewBox="0 0 87.5 6" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0 L-0.5 0 L-0.5 6 L0 6 L0.5 6 L0.5 0 L0 0 Z M3.24 0 L2.74 0 L2.74 6 L3.24 6 L3.74 6 L3.74 0 L3.24 0 Z M6.48 0 L5.98 0 L5.98 6 L6.48 6 L6.98 6 L6.98 0 L6.48 0 Z M9.72 0 L9.22 0 L9.22 6 L9.72 6 L10.22 6 L10.22 0 L9.72 0 Z M12.96 0 L12.46 0 L12.46 6 L12.96 6 L13.46 6 L13.46 0 L12.96 0 Z M16.2 0 L15.7 0 L15.7 6 L16.2 6 L16.7 6 L16.7 0 L16.2 0 Z M19.44 0 L18.94 0 L18.94 6 L19.44 6 L19.94 6 L19.94 0 L19.44 0 Z M22.69 0 L22.19 0 L22.19 6 L22.69 6 L23.19 6 L23.19 0 L22.69 0 Z M25.93 0 L25.43 0 L25.43 6 L25.93 6 L26.43 6 L26.43 0 L25.93 0 Z M29.17 0 L28.67 0 L28.67 6 L29.17 6 L29.67 6 L29.67 0 L29.17 0 Z M32.41 0 L31.91 0 L31.91 6 L32.41 6 L32.91 6 L32.91 0 L32.41 0 Z M35.65 0 L35.15 0 L35.15 6 L35.65 6 L36.15 6 L36.15 0 L35.65 0 Z M38.89 0 L38.39 0 L38.39 6 L38.89 6 L39.39 6 L39.39 0 L38.89 0 Z M42.13 0 L41.63 0 L41.63 6 L42.13 6 L42.63 6 L42.63 0 L42.13 0 Z M45.37 0 L44.87 0 L44.87 6 L45.37 6 L45.87 6 L45.87 0 L45.37 0 Z M48.61 0 L48.11 0 L48.11 6 L48.61 6 L49.11 6 L49.11 0 L48.61 0 Z M51.85 0 L51.35 0 L51.35 6 L51.85 6 L52.35 6 L52.35 0 L51.85 0 Z M55.09 0 L54.59 0 L54.59 6 L55.09 6 L55.59 6 L55.59 0 L55.09 0 Z M58.33 0 L57.83 0 L57.83 6 L58.33 6 L58.83 6 L58.83 0 L58.33 0 Z M61.57 0 L61.07 0 L61.07 6 L61.57 6 L62.07 6 L62.07 0 L61.57 0 Z M64.81 0 L64.31 0 L64.31 6 L64.81 6 L65.31 6 L65.31 0 L64.81 0 Z M68.06 0 L67.56 0 L67.56 6 L68.06 6 L68.56 6 L68.56 0 L68.06 0 Z M71.3 0 L70.8 0 L70.8 6 L71.3 6 L71.8 6 L71.8 0 L71.3 0 Z M74.54 0 L74.04 0 L74.04 6 L74.54 6 L75.04 6 L75.04 0 L74.54 0 Z M77.78 0 L77.28 0 L77.28 6 L77.78 6 L78.28 6 L78.28 0 L77.78 0 Z M81.02 0 L80.52 0 L80.52 6 L81.02 6 L81.52 6 L81.52 0 L81.02 0 Z M84.26 0 L83.76 0 L83.76 6 L84.26 6 L84.76 6 L84.76 0 L84.26 0 Z M87.5 0 L87 0 L87 6 L87.5 6 L88 6 L88 0 L87.5 0 Z" fill="#d4d4d8"/></svg>
            </div>
          </div>
        </div>
      </div>
      <div style={{ position: "absolute", left: "20px", top: "54px", width: "150px", height: "109.75px" }}>
        <svg data-fu="plot" style={{ position: "absolute", left: "10.75px", top: "10.75px", width: "128.5px", height: "64.25px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="128.5" height="64.25" viewBox="0 0 128.5 64.25" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M-6.75 64.25 C-6.75 67.9779 -3.72792 71 0 71 C3.72792 71 6.75 67.9779 6.75 64.25 L0 64.25 L-6.75 64.25 Z M121.75 64.25 C121.75 67.9779 124.772 71 128.5 71 C132.228 71 135.25 67.9779 135.25 64.25 L128.5 64.25 L121.75 64.25 Z M0 64.25 L6.75 64.25 C6.75 32.4979 32.4979 6.75 64.25 6.75 L64.25 0 L64.25 -6.75 C25.0421 -6.75 -6.75 25.0421 -6.75 64.25 L0 64.25 Z M64.25 0 L64.25 6.75 C96.0021 6.75 121.75 32.4979 121.75 64.25 L128.5 64.25 L135.25 64.25 C135.25 25.0421 103.458 -6.75 64.25 -6.75 L64.25 0 Z" fill="#deeafd"/></svg>
        <svg style={{ position: "absolute", left: "10.75px", top: "10.75px", width: "84.1px", height: "64.25px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="84.1" height="64.25" viewBox="0 0 84.1 64.25" fill="none" overflow="visible"><defs><linearGradient id="g21_ujkz" gradientUnits="userSpaceOnUse" x1="0.00" y1="32.13" x2="84.10" y2="32.13"><stop offset="0" stopColor="#689cf8"/><stop offset="1" stopColor="#1666f4"/></linearGradient></defs><path transform="matrix(1 0 0 1 0 0)" d="M-6.75 64.2519 C-6.75 67.9798 -3.72792 71.0019 0 71.0019 C3.72792 71.0019 6.75 67.9798 6.75 64.2519 L0 64.2519 L-6.75 64.2519 Z M26.48 12.2719 L22.5124 6.8111 L22.5108 6.81224 L26.48 12.2719 Z M82.0157 9.56207 C85.5615 10.7132 89.369 8.77192 90.5202 5.22617 C91.6713 1.68041 89.73 -2.12714 86.1842 -3.27824 L84.1 3.14191 L82.0157 9.56207 Z M0 64.2519 L6.75 64.2519 C6.75 45.8435 15.565 28.5524 30.4492 17.7316 L26.48 12.2719 L22.5108 6.81224 C4.13502 20.1714 -6.75 41.5203 -6.75 64.2519 L0 64.2519 Z M26.48 12.2719 L30.4476 17.7327 C45.3391 6.91314 64.5092 3.87871 82.0157 9.56207 L84.1 3.14191 L86.1842 -3.27824 C64.5708 -10.2949 40.9009 -6.54931 22.5124 6.8111 L26.48 12.2719 Z" fill="url(#g21_ujkz)"/></svg>
        <svg style={{ position: "absolute", left: "26.5px", top: "26.5px", width: "97px", height: "48.5px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="97" height="48.5" viewBox="0 0 97 48.5" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M-1 48.5 C-1 49.0523 -0.552285 49.5 0 49.5 C0.552285 49.5 1 49.0523 1 48.5 L0 48.5 L-1 48.5 Z M96 48.5 C96 49.0523 96.4477 49.5 97 49.5 C97.5523 49.5 98 49.0523 98 48.5 L97 48.5 L96 48.5 Z M1.00003 48.4487 C1.00061 47.8964 0.553368 47.4482 0.00108323 47.4477 C-0.551201 47.4471 -0.999389 47.8943 -0.999972 48.4466 L2.76235e-05 48.4477 L1.00003 48.4487 Z M-0.588669 42.0886 C-0.65949 42.6364 -0.272882 43.1378 0.274843 43.2086 C0.822568 43.2794 1.324 42.8928 1.39482 42.3451 L0.403075 42.2169 L-0.588669 42.0886 Z M1.40799 42.2441 C1.47999 41.6965 1.09445 41.1942 0.546883 41.1222 C-0.000689342 41.0502 -0.502947 41.4358 -0.574942 41.9833 L0.416525 42.1137 L1.40799 42.2441 Z M0.660999 35.7356 C0.518998 36.2693 0.836547 36.8171 1.37026 36.9591 C1.90398 37.1011 2.45176 36.7835 2.59376 36.2498 L1.62738 35.9927 L0.660999 35.7356 Z M2.62013 36.1511 C2.76328 35.6177 2.44692 35.0693 1.91351 34.9261 C1.3801 34.783 0.83164 35.0993 0.688483 35.6327 L1.6543 35.8919 L2.62013 36.1511 Z M2.73516 29.6001 C2.52419 30.1105 2.76694 30.6953 3.27735 30.9063 C3.78775 31.1172 4.37254 30.8745 4.5835 30.3641 L3.65933 29.9821 L2.73516 29.6001 Z M4.62247 30.2701 C4.83454 29.7601 4.59305 29.1748 4.0831 28.9627 C3.57315 28.7507 2.98785 28.9922 2.77578 29.5021 L3.69913 29.8861 L4.62247 30.2701 Z M5.59714 23.7903 C5.32109 24.2687 5.4851 24.8802 5.96345 25.1562 C6.4418 25.4323 7.05336 25.2683 7.3294 24.7899 L6.46327 24.2901 L5.59714 23.7903 Z M7.38044 24.7017 C7.65751 24.2239 7.49482 23.612 7.01706 23.335 C6.5393 23.0579 5.9274 23.2206 5.65033 23.6984 L6.51538 24.2 L7.38044 24.7017 Z M9.19326 18.4054 C8.85722 18.8437 8.94011 19.4714 9.3784 19.8075 C9.81669 20.1435 10.4444 20.0606 10.7804 19.6223 L9.98685 19.0139 L9.19326 18.4054 Z M10.8426 19.5415 C11.1796 19.1039 11.098 18.476 10.6604 18.139 C10.2229 17.8021 9.59497 17.8836 9.258 18.3212 L10.0503 18.9313 L10.8426 19.5415 Z M13.4591 13.5342 C13.069 13.9252 13.0697 14.5583 13.4606 14.9484 C13.8516 15.3385 14.4847 15.3379 14.8748 14.9469 L14.167 14.2406 L13.4591 13.5342 Z M14.9469 14.8748 C15.3379 14.4847 15.3385 13.8516 14.9484 13.4606 C14.5583 13.0697 13.9252 13.069 13.5342 13.4591 L14.2406 14.167 L14.9469 14.8748 Z M18.3212 9.258 C17.8836 9.59497 17.8021 10.2229 18.139 10.6604 C18.476 11.098 19.1039 11.1796 19.5415 10.8426 L18.9313 10.0503 L18.3212 9.258 Z M19.6223 10.7804 C20.0606 10.4444 20.1435 9.81669 19.8075 9.3784 C19.4714 8.94011 18.8437 8.85722 18.4054 9.19326 L19.0139 9.98685 L19.6223 10.7804 Z M23.6984 5.65032 C23.2206 5.92739 23.0579 6.5393 23.335 7.01705 C23.6121 7.49481 24.224 7.6575 24.7017 7.38043 L24.2 6.51538 L23.6984 5.65032 Z M24.7899 7.32939 C25.2683 7.05335 25.4323 6.4418 25.1563 5.96344 C24.8802 5.48509 24.2687 5.32109 23.7903 5.59713 L24.2901 6.46326 L24.7899 7.32939 Z M29.5021 2.77578 C28.9922 2.98784 28.7507 3.57315 28.9627 4.0831 C29.1748 4.59305 29.7601 4.83453 30.2701 4.62247 L29.8861 3.69912 L29.5021 2.77578 Z M30.3641 4.58349 C30.8745 4.37253 31.1172 3.78775 30.9063 3.27734 C30.6953 2.76694 30.1105 2.52419 29.6001 2.73515 L29.9821 3.65932 L30.3641 4.58349 Z M35.6327 0.68848 C35.0993 0.831636 34.783 1.3801 34.9261 1.91351 C35.0693 2.44692 35.6178 2.76328 36.1512 2.62012 L35.892 1.6543 L35.6327 0.68848 Z M36.2498 2.59376 C36.7835 2.45176 37.1011 1.90398 36.9591 1.37026 C36.8171 0.836543 36.2693 0.518994 35.7356 0.660995 L35.9927 1.62738 L36.2498 2.59376 Z M41.9834 -0.574943 C41.4358 -0.502949 41.0503 -0.000690585 41.1222 0.546882 C41.1942 1.09445 41.6965 1.47999 42.2441 1.40799 L42.1137 0.416524 L41.9834 -0.574943 Z M42.3451 1.39482 C42.8928 1.324 43.2794 0.822567 43.2086 0.274842 C43.1378 -0.272883 42.6364 -0.659491 42.0886 -0.58867 L42.2169 0.403074 L42.3451 1.39482 Z M48.4466 -0.999972 C47.8943 -0.999389 47.4471 -0.551201 47.4477 0.00108301 C47.4483 0.553367 47.8964 1.00061 48.4487 1.00003 L48.4477 2.76129e-05 L48.4466 -0.999972 Z M48.5513 1.00003 C49.1036 1.00061 49.5518 0.553368 49.5523 0.00108323 C49.5529 -0.551201 49.1057 -0.999389 48.5534 -0.999972 L48.5523 2.76235e-05 L48.5513 1.00003 Z M54.9114 -0.588669 C54.3636 -0.65949 53.8622 -0.272882 53.7914 0.274843 C53.7206 0.822568 54.1072 1.324 54.6549 1.39482 L54.7831 0.403075 L54.9114 -0.588669 Z M54.7559 1.40799 C55.3035 1.47999 55.8058 1.09445 55.8778 0.546883 C55.9498 -0.000689342 55.5642 -0.502947 55.0167 -0.574942 L54.8863 0.416525 L54.7559 1.40799 Z M61.2644 0.660999 C60.7307 0.518998 60.1829 0.836547 60.0409 1.37026 C59.8989 1.90398 60.2165 2.45176 60.7502 2.59376 L61.0073 1.62738 L61.2644 0.660999 Z M60.8489 2.62013 C61.3823 2.76328 61.9307 2.44692 62.0739 1.91351 C62.217 1.3801 61.9007 0.83164 61.3673 0.688483 L61.1081 1.6543 L60.8489 2.62013 Z M67.3999 2.73516 C66.8895 2.52419 66.3047 2.76694 66.0937 3.27735 C65.8828 3.78775 66.1255 4.37254 66.6359 4.5835 L67.0179 3.65933 L67.3999 2.73516 Z M66.7299 4.62247 C67.2399 4.83454 67.8252 4.59305 68.0373 4.0831 C68.2493 3.57315 68.0078 2.98785 67.4979 2.77578 L67.1139 3.69913 L66.7299 4.62247 Z M73.2097 5.59714 C72.7313 5.32109 72.1198 5.4851 71.8438 5.96345 C71.5677 6.4418 71.7317 7.05336 72.2101 7.3294 L72.7099 6.46327 L73.2097 5.59714 Z M72.2983 7.38044 C72.776 7.65751 73.388 7.49482 73.665 7.01706 C73.9421 6.5393 73.7794 5.9274 73.3016 5.65033 L72.8 6.51538 L72.2983 7.38044 Z M78.5946 9.19326 C78.1563 8.85722 77.5286 8.94011 77.1925 9.3784 C76.8565 9.81669 76.9394 10.4444 77.3777 10.7804 L77.9861 9.98685 L78.5946 9.19326 Z M77.4585 10.8426 C77.8961 11.1796 78.524 11.098 78.861 10.6604 C79.1979 10.2229 79.1164 9.59497 78.6788 9.258 L78.0687 10.0503 L77.4585 10.8426 Z M83.4658 13.4591 C83.0748 13.069 82.4417 13.0697 82.0516 13.4606 C81.6615 13.8516 81.6621 14.4847 82.0531 14.8748 L82.7594 14.167 L83.4658 13.4591 Z M82.1252 14.9469 C82.5153 15.3379 83.1484 15.3385 83.5394 14.9484 C83.9303 14.5583 83.931 13.9252 83.5409 13.5342 L82.833 14.2406 L82.1252 14.9469 Z M87.742 18.3212 C87.405 17.8836 86.7771 17.8021 86.3396 18.139 C85.902 18.476 85.8204 19.1039 86.1574 19.5415 L86.9497 18.9313 L87.742 18.3212 Z M86.2196 19.6223 C86.5556 20.0606 87.1833 20.1435 87.6216 19.8075 C88.0599 19.4714 88.1428 18.8437 87.8067 18.4054 L87.0132 19.0139 L86.2196 19.6223 Z M91.3497 23.6984 C91.0726 23.2206 90.4607 23.0579 89.9829 23.335 C89.5052 23.6121 89.3425 24.224 89.6196 24.7017 L90.4846 24.2 L91.3497 23.6984 Z M89.6706 24.7899 C89.9466 25.2683 90.5582 25.4323 91.0366 25.1563 C91.5149 24.8802 91.6789 24.2687 91.4029 23.7903 L90.5367 24.2901 L89.6706 24.7899 Z M94.2242 29.5021 C94.0122 28.9922 93.4268 28.7507 92.9169 28.9627 C92.407 29.1748 92.1655 29.7601 92.3775 30.2701 L93.3009 29.8861 L94.2242 29.5021 Z M92.4165 30.3641 C92.6275 30.8745 93.2122 31.1172 93.7227 30.9063 C94.2331 30.6953 94.4758 30.1105 94.2648 29.6001 L93.3407 29.9821 L92.4165 30.3641 Z M96.3115 35.6327 C96.1684 35.0993 95.6199 34.783 95.0865 34.9261 C94.5531 35.0693 94.2367 35.6178 94.3799 36.1512 L95.3457 35.892 L96.3115 35.6327 Z M94.4062 36.2498 C94.5482 36.7835 95.096 37.1011 95.6297 36.9591 C96.1635 36.8171 96.481 36.2693 96.339 35.7356 L95.3726 35.9927 L94.4062 36.2498 Z M97.5749 41.9834 C97.5029 41.4358 97.0007 41.0503 96.4531 41.1222 C95.9055 41.1942 95.52 41.6965 95.592 42.2441 L96.5835 42.1137 L97.5749 41.9834 Z M95.6052 42.3451 C95.676 42.8928 96.1774 43.2794 96.7252 43.2086 C97.2729 43.1378 97.6595 42.6364 97.5887 42.0886 L96.5969 42.2169 L95.6052 42.3451 Z M98 48.4466 C97.9994 47.8943 97.5512 47.4471 96.9989 47.4477 C96.4466 47.4483 95.9994 47.8964 96 48.4487 L97 48.4477 L98 48.4466 Z M0 48.5 L1 48.5 C1 48.4829 1.00001 48.4658 1.00003 48.4487 L2.76235e-05 48.4477 L-0.999972 48.4466 C-0.999991 48.4644 -1 48.4822 -1 48.5 L0 48.5 Z M0.403075 42.2169 L1.39482 42.3451 C1.39917 42.3114 1.40357 42.2777 1.40799 42.2441 L0.416525 42.1137 L-0.574942 41.9833 C-0.579554 42.0184 -0.58413 42.0535 -0.588669 42.0886 L0.403075 42.2169 Z M1.62738 35.9927 L2.59376 36.2498 C2.60251 36.2169 2.6113 36.184 2.62013 36.1511 L1.6543 35.8919 L0.688483 35.6327 C0.679286 35.667 0.670124 35.7013 0.660999 35.7356 L1.62738 35.9927 Z M3.65933 29.9821 L4.5835 30.3641 C4.59646 30.3327 4.60945 30.3014 4.62247 30.2701 L3.69913 29.8861 L2.77578 29.5021 C2.76221 29.5348 2.74867 29.5674 2.73516 29.6001 L3.65933 29.9821 Z M6.46327 24.2901 L7.3294 24.7899 C7.34638 24.7605 7.36339 24.7311 7.38044 24.7017 L6.51538 24.2 L5.65033 23.6984 C5.63256 23.729 5.61483 23.7596 5.59714 23.7903 L6.46327 24.2901 Z M9.98685 19.0139 L10.7804 19.6223 C10.8011 19.5954 10.8218 19.5684 10.8426 19.5415 L10.0503 18.9313 L9.258 18.3212 C9.23639 18.3492 9.21481 18.3773 9.19326 18.4054 L9.98685 19.0139 Z M14.167 14.2406 L14.8748 14.9469 C14.8988 14.9229 14.9229 14.8988 14.9469 14.8748 L14.2406 14.167 L13.5342 13.4591 C13.5092 13.4841 13.4841 13.5092 13.4591 13.5342 L14.167 14.2406 Z M18.9313 10.0503 L19.5415 10.8426 C19.5684 10.8218 19.5954 10.8011 19.6223 10.7804 L19.0139 9.98685 L18.4054 9.19326 C18.3773 9.21481 18.3492 9.23639 18.3212 9.258 L18.9313 10.0503 Z M24.2 6.51538 L24.7017 7.38043 C24.7311 7.36339 24.7605 7.34638 24.7899 7.32939 L24.2901 6.46326 L23.7903 5.59713 C23.7596 5.61483 23.729 5.63256 23.6984 5.65032 L24.2 6.51538 Z M29.8861 3.69912 L30.2701 4.62247 C30.3014 4.60944 30.3327 4.59645 30.3641 4.58349 L29.9821 3.65932 L29.6001 2.73515 C29.5674 2.74866 29.5348 2.7622 29.5021 2.77578 L29.8861 3.69912 Z M35.892 1.6543 L36.1512 2.62012 C36.184 2.6113 36.2169 2.60251 36.2498 2.59376 L35.9927 1.62738 L35.7356 0.660995 C35.7013 0.670121 35.667 0.679282 35.6327 0.68848 L35.892 1.6543 Z M42.1137 0.416524 L42.2441 1.40799 C42.2777 1.40356 42.3114 1.39917 42.3451 1.39482 L42.2169 0.403074 L42.0886 -0.58867 C42.0535 -0.584131 42.0184 -0.579556 41.9834 -0.574943 L42.1137 0.416524 Z M48.4477 2.76129e-05 L48.4487 1.00003 C48.4658 1.00001 48.4829 1 48.5 1 L48.5 0 L48.5 -1 C48.4822 -1 48.4644 -0.999991 48.4466 -0.999972 L48.4477 2.76129e-05 Z M48.5 0 L48.5 1 C48.5171 1 48.5342 1.00001 48.5513 1.00003 L48.5523 2.76235e-05 L48.5534 -0.999972 C48.5356 -0.999991 48.5178 -1 48.5 -1 L48.5 0 Z M54.7831 0.403075 L54.6549 1.39482 C54.6886 1.39917 54.7223 1.40357 54.7559 1.40799 L54.8863 0.416525 L55.0167 -0.574942 C54.9816 -0.579554 54.9465 -0.58413 54.9114 -0.588669 L54.7831 0.403075 Z M61.0073 1.62738 L60.7502 2.59376 C60.7831 2.60251 60.816 2.6113 60.8489 2.62013 L61.1081 1.6543 L61.3673 0.688483 C61.333 0.679286 61.2987 0.670124 61.2644 0.660999 L61.0073 1.62738 Z M67.0179 3.65933 L66.6359 4.5835 C66.6673 4.59646 66.6986 4.60945 66.7299 4.62247 L67.1139 3.69913 L67.4979 2.77578 C67.4652 2.76221 67.4326 2.74867 67.3999 2.73516 L67.0179 3.65933 Z M72.7099 6.46327 L72.2101 7.3294 C72.2395 7.34638 72.2689 7.36339 72.2983 7.38044 L72.8 6.51538 L73.3016 5.65033 C73.271 5.63256 73.2404 5.61483 73.2097 5.59714 L72.7099 6.46327 Z M77.9861 9.98685 L77.3777 10.7804 C77.4046 10.8011 77.4316 10.8218 77.4585 10.8426 L78.0687 10.0503 L78.6788 9.258 C78.6508 9.23639 78.6227 9.21481 78.5946 9.19326 L77.9861 9.98685 Z M82.7594 14.167 L82.0531 14.8748 C82.0771 14.8988 82.1012 14.9229 82.1252 14.9469 L82.833 14.2406 L83.5409 13.5342 C83.5159 13.5092 83.4908 13.4841 83.4658 13.4591 L82.7594 14.167 Z M86.9497 18.9313 L86.1574 19.5415 C86.1782 19.5684 86.1989 19.5954 86.2196 19.6223 L87.0132 19.0139 L87.8067 18.4054 C87.7852 18.3773 87.7636 18.3492 87.742 18.3212 L86.9497 18.9313 Z M90.4846 24.2 L89.6196 24.7017 C89.6366 24.7311 89.6536 24.7605 89.6706 24.7899 L90.5367 24.2901 L91.4029 23.7903 C91.3852 23.7596 91.3674 23.729 91.3497 23.6984 L90.4846 24.2 Z M93.3009 29.8861 L92.3775 30.2701 C92.3906 30.3014 92.4035 30.3327 92.4165 30.3641 L93.3407 29.9821 L94.2648 29.6001 C94.2513 29.5674 94.2378 29.5348 94.2242 29.5021 L93.3009 29.8861 Z M95.3457 35.892 L94.3799 36.1512 C94.3887 36.184 94.3975 36.2169 94.4062 36.2498 L95.3726 35.9927 L96.339 35.7356 C96.3299 35.7013 96.3207 35.667 96.3115 35.6327 L95.3457 35.892 Z M96.5835 42.1137 L95.592 42.2441 C95.5964 42.2777 95.6008 42.3114 95.6052 42.3451 L96.5969 42.2169 L97.5887 42.0886 C97.5841 42.0535 97.5796 42.0184 97.5749 41.9834 L96.5835 42.1137 Z M97 48.4477 L96 48.4487 C96 48.4658 96 48.4829 96 48.5 L97 48.5 L98 48.5 C98 48.4822 98 48.4644 98 48.4466 L97 48.4477 Z" fill="#7fabf9"/></svg>
        <svg style={{ position: "absolute", left: "88.78px", top: "7.82px", width: "12.15px", height: "12.15px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="12.15" height="12.15" viewBox="0 0 12.15 12.15" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M12.15 6.075 C12.15 9.43013 9.43013 12.15 6.075 12.15 C2.71987 12.15 0 9.43013 0 6.075 C0 2.71987 2.71987 0 6.075 0 C9.43013 0 12.15 2.71987 12.15 6.075 Z" fill="#ffffff"/><path transform="matrix(1 0 0 1 0 0)" d="M12.15 6.075 L9.65 6.075 C9.65 8.04942 8.04942 9.65 6.075 9.65 L6.075 12.15 L6.075 14.65 C10.8108 14.65 14.65 10.8108 14.65 6.075 L12.15 6.075 Z M6.075 12.15 L6.075 9.65 C4.10058 9.65 2.5 8.04942 2.5 6.075 L0 6.075 L-2.5 6.075 C-2.5 10.8108 1.33916 14.65 6.075 14.65 L6.075 12.15 Z M0 6.075 L2.5 6.075 C2.5 4.10058 4.10058 2.5 6.075 2.5 L6.075 0 L6.075 -2.5 C1.33916 -2.5 -2.5 1.33916 -2.5 6.075 L0 6.075 Z M6.075 0 L6.075 2.5 C8.04942 2.5 9.65 4.10058 9.65 6.075 L12.15 6.075 L14.65 6.075 C14.65 1.33916 10.8108 -2.5 6.075 -2.5 L6.075 0 Z" fill="#1666f4"/></svg>
        <div style={{ position: "absolute", left: "48.5px", top: "28px", width: "53px", height: "45px", display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "53px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "11px", fontWeight: 400, color: "#747474" }}>Runs used</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "49px", lineHeight: "29px", fontFamily: "'Geist'", fontSize: "22px", fontWeight: 500, color: "#1f1f22" }}>6/10</p>
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
