"use client";
// Top cards card (spendix, Tables and lists) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Ingot Icons.
import { useEffect, useRef } from "react";
import { ChevronRight, Wifi } from "ingotui-icons/react/stroke-rounded";

export function TopCardsCard() {
  const fuRef = useRef<any>(null);
  useEffect(() => fuInteract(fuRef.current), []);
  return (
    <div ref={fuRef} style={{ width: "1154px", height: "270px", borderRadius: "12px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e2e8f0", overflow: "hidden", position: "relative" }}>
      <div style={{ position: "absolute", left: "0px", top: "0px", width: "1154px", height: "48px", boxShadow: "inset 0 -1px 0 0 #e2e8f0", display: "flex", flexDirection: "row", padding: "0px 16px 1px 16px", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "73px", lineHeight: "21px", fontFamily: "'Geist'", fontSize: "16px", fontWeight: 500, color: "#0f172a" }}>Top cards</p>
          <div style={{ height: "20px", flexShrink: 0, borderRadius: "6px", background: "#f1f5f9", display: "flex", flexDirection: "row", padding: "0px 6px 0px 6px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "20px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#64748b" }}>124</p>
          </div>
        </div>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "113px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>Highest spend · April</p>
          <div data-fu="btn" style={{ height: "28px", flexShrink: 0, borderRadius: "8px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #dfe1e6, 0px 1px 2px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "row", padding: "1px 11px 1px 11px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "44px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#0f172a" }}>View all</p>
            <ChevronRight size={12} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#7d818c", display: "block" }} />
          </div>
        </div>
      </div>
      <div style={{ position: "absolute", left: "16px", top: "64px", width: "268.5px", height: "192px", display: "flex", flexDirection: "column", gap: "14px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ width: "268.5px", height: "148px", flexShrink: 0, borderRadius: "12px", background: "linear-gradient(90deg, #f5f7ff 0%, #e3e8f5 100%), linear-gradient(#f8f8f8, #f8f8f8)", boxShadow: "inset 0 0 0 0.8px #f3f3f3", overflow: "hidden", position: "relative" }}>
          <p style={{ position: "absolute", left: "15.7px", top: "15.7px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "76px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12.5px", fontWeight: 500, color: "#040404" }}>Design Team</p>
          <Wifi size={18} strokeWidth={1.51} style={{ position: "absolute", left: "250.5px", top: "15px", width: "18px", height: "18px", transform: "rotate(90deg)", transformOrigin: "top left", color: "#040404", display: "block", flexShrink: 0 }} />
          <p style={{ position: "absolute", left: "12.5px", top: "98px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "36px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 600, color: "#040404" }}>Figma</p>
          <p style={{ position: "absolute", left: "223px", top: "100px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "29px", lineHeight: "12px", fontFamily: "'Geist'", fontSize: "9.4px", fontWeight: 500, color: "#040404" }}>06/28</p>
          <p style={{ position: "absolute", left: "12.5px", top: "118px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "123px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12.5px", fontWeight: 600, color: "#040404", letterSpacing: "0.08em" }}>••••  ••••  ••••  4242</p>
        </div>
        <div style={{ width: "268.5px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ width: "268.5px", height: "8px", flexShrink: 0, position: "relative" }}>
            <div style={{ position: "absolute", left: "0px", top: "0px", width: "60.14px", height: "8px", borderRadius: "3px", background: "linear-gradient(90deg, #719af2 0%, #2563eb 100%)", boxShadow: "inset 0 0 0 1px rgba(29, 77, 183, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.18), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
            <svg style={{ position: "absolute", left: "64.14px", top: "0px", width: "203.86px", height: "8px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="203.86" height="8" viewBox="0 0 203.86 8" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0 L-0.5 0 L-0.5 8 L0 8 L0.5 8 L0.5 0 L0 0 Z M3.24 0 L2.74 0 L2.74 8 L3.24 8 L3.74 8 L3.74 0 L3.24 0 Z M6.47 0 L5.97 0 L5.97 8 L6.47 8 L6.97 8 L6.97 0 L6.47 0 Z M9.71 0 L9.21 0 L9.21 8 L9.71 8 L10.21 8 L10.21 0 L9.71 0 Z M12.94 0 L12.44 0 L12.44 8 L12.94 8 L13.44 8 L13.44 0 L12.94 0 Z M16.18 0 L15.68 0 L15.68 8 L16.18 8 L16.68 8 L16.68 0 L16.18 0 Z M19.41 0 L18.91 0 L18.91 8 L19.41 8 L19.91 8 L19.91 0 L19.41 0 Z M22.65 0 L22.15 0 L22.15 8 L22.65 8 L23.15 8 L23.15 0 L22.65 0 Z M25.89 0 L25.39 0 L25.39 8 L25.89 8 L26.39 8 L26.39 0 L25.89 0 Z M29.12 0 L28.62 0 L28.62 8 L29.12 8 L29.62 8 L29.62 0 L29.12 0 Z M32.36 0 L31.86 0 L31.86 8 L32.36 8 L32.86 8 L32.86 0 L32.36 0 Z M35.59 0 L35.09 0 L35.09 8 L35.59 8 L36.09 8 L36.09 0 L35.59 0 Z M38.83 0 L38.33 0 L38.33 8 L38.83 8 L39.33 8 L39.33 0 L38.83 0 Z M42.07 0 L41.57 0 L41.57 8 L42.07 8 L42.57 8 L42.57 0 L42.07 0 Z M45.3 0 L44.8 0 L44.8 8 L45.3 8 L45.8 8 L45.8 0 L45.3 0 Z M48.54 0 L48.04 0 L48.04 8 L48.54 8 L49.04 8 L49.04 0 L48.54 0 Z M51.77 0 L51.27 0 L51.27 8 L51.77 8 L52.27 8 L52.27 0 L51.77 0 Z M55.01 0 L54.51 0 L54.51 8 L55.01 8 L55.51 8 L55.51 0 L55.01 0 Z M58.24 0 L57.74 0 L57.74 8 L58.24 8 L58.74 8 L58.74 0 L58.24 0 Z M61.48 0 L60.98 0 L60.98 8 L61.48 8 L61.98 8 L61.98 0 L61.48 0 Z M64.72 0 L64.22 0 L64.22 8 L64.72 8 L65.22 8 L65.22 0 L64.72 0 Z M67.95 0 L67.45 0 L67.45 8 L67.95 8 L68.45 8 L68.45 0 L67.95 0 Z M71.19 0 L70.69 0 L70.69 8 L71.19 8 L71.69 8 L71.69 0 L71.19 0 Z M74.42 0 L73.92 0 L73.92 8 L74.42 8 L74.92 8 L74.92 0 L74.42 0 Z M77.66 0 L77.16 0 L77.16 8 L77.66 8 L78.16 8 L78.16 0 L77.66 0 Z M80.9 0 L80.4 0 L80.4 8 L80.9 8 L81.4 8 L81.4 0 L80.9 0 Z M84.13 0 L83.63 0 L83.63 8 L84.13 8 L84.63 8 L84.63 0 L84.13 0 Z M87.37 0 L86.87 0 L86.87 8 L87.37 8 L87.87 8 L87.87 0 L87.37 0 Z M90.6 0 L90.1 0 L90.1 8 L90.6 8 L91.1 8 L91.1 0 L90.6 0 Z M93.84 0 L93.34 0 L93.34 8 L93.84 8 L94.34 8 L94.34 0 L93.84 0 Z M97.07 0 L96.57 0 L96.57 8 L97.07 8 L97.57 8 L97.57 0 L97.07 0 Z M100.31 0 L99.81 0 L99.81 8 L100.31 8 L100.81 8 L100.81 0 L100.31 0 Z M103.55 0 L103.05 0 L103.05 8 L103.55 8 L104.05 8 L104.05 0 L103.55 0 Z M106.78 0 L106.28 0 L106.28 8 L106.78 8 L107.28 8 L107.28 0 L106.78 0 Z M110.02 0 L109.52 0 L109.52 8 L110.02 8 L110.52 8 L110.52 0 L110.02 0 Z M113.25 0 L112.75 0 L112.75 8 L113.25 8 L113.75 8 L113.75 0 L113.25 0 Z M116.49 0 L115.99 0 L115.99 8 L116.49 8 L116.99 8 L116.99 0 L116.49 0 Z M119.72 0 L119.22 0 L119.22 8 L119.72 8 L120.22 8 L120.22 0 L119.72 0 Z M122.96 0 L122.46 0 L122.46 8 L122.96 8 L123.46 8 L123.46 0 L122.96 0 Z M126.2 0 L125.7 0 L125.7 8 L126.2 8 L126.7 8 L126.7 0 L126.2 0 Z M129.43 0 L128.93 0 L128.93 8 L129.43 8 L129.93 8 L129.93 0 L129.43 0 Z M132.67 0 L132.17 0 L132.17 8 L132.67 8 L133.17 8 L133.17 0 L132.67 0 Z M135.9 0 L135.4 0 L135.4 8 L135.9 8 L136.4 8 L136.4 0 L135.9 0 Z M139.14 0 L138.64 0 L138.64 8 L139.14 8 L139.64 8 L139.64 0 L139.14 0 Z M142.38 0 L141.88 0 L141.88 8 L142.38 8 L142.88 8 L142.88 0 L142.38 0 Z M145.61 0 L145.11 0 L145.11 8 L145.61 8 L146.11 8 L146.11 0 L145.61 0 Z M148.85 0 L148.35 0 L148.35 8 L148.85 8 L149.35 8 L149.35 0 L148.85 0 Z M152.08 0 L151.58 0 L151.58 8 L152.08 8 L152.58 8 L152.58 0 L152.08 0 Z M155.32 0 L154.82 0 L154.82 8 L155.32 8 L155.82 8 L155.82 0 L155.32 0 Z M158.55 0 L158.05 0 L158.05 8 L158.55 8 L159.05 8 L159.05 0 L158.55 0 Z M161.79 0 L161.29 0 L161.29 8 L161.79 8 L162.29 8 L162.29 0 L161.79 0 Z M165.03 0 L164.53 0 L164.53 8 L165.03 8 L165.53 8 L165.53 0 L165.03 0 Z M168.26 0 L167.76 0 L167.76 8 L168.26 8 L168.76 8 L168.76 0 L168.26 0 Z M171.5 0 L171 0 L171 8 L171.5 8 L172 8 L172 0 L171.5 0 Z M174.73 0 L174.23 0 L174.23 8 L174.73 8 L175.23 8 L175.23 0 L174.73 0 Z M177.97 0 L177.47 0 L177.47 8 L177.97 8 L178.47 8 L178.47 0 L177.97 0 Z M181.21 0 L180.71 0 L180.71 8 L181.21 8 L181.71 8 L181.71 0 L181.21 0 Z M184.44 0 L183.94 0 L183.94 8 L184.44 8 L184.94 8 L184.94 0 L184.44 0 Z M187.68 0 L187.18 0 L187.18 8 L187.68 8 L188.18 8 L188.18 0 L187.68 0 Z M190.91 0 L190.41 0 L190.41 8 L190.91 8 L191.41 8 L191.41 0 L190.91 0 Z M194.15 0 L193.65 0 L193.65 8 L194.15 8 L194.65 8 L194.65 0 L194.15 0 Z M197.38 0 L196.88 0 L196.88 8 L197.38 8 L197.88 8 L197.88 0 L197.38 0 Z M200.62 0 L200.12 0 L200.12 8 L200.62 8 L201.12 8 L201.12 0 L200.62 0 Z M203.86 0 L203.36 0 L203.36 8 L203.86 8 L204.36 8 L204.36 0 L203.86 0 Z" fill="#d4d4d8"/></svg>
          </div>
          <div style={{ width: "268.5px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "70px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#1f1f22" }}>$1,120 spent</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "89px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#7d818c" }}>of $5,000 · 22%</p>
          </div>
        </div>
      </div>
      <div style={{ position: "absolute", left: "300.5px", top: "64px", width: "268.5px", height: "192px", display: "flex", flexDirection: "column", gap: "14px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ width: "268.5px", height: "148px", flexShrink: 0, borderRadius: "12px", background: "linear-gradient(90deg, #f3fbf7 0%, #e1ebe5 100%), linear-gradient(#f8f8f8, #f8f8f8)", boxShadow: "inset 0 0 0 0.8px #f3f3f3", overflow: "hidden", position: "relative" }}>
          <p style={{ position: "absolute", left: "15.7px", top: "15.7px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "94px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12.5px", fontWeight: 500, color: "#040404" }}>Marketing Team</p>
          <Wifi size={18} strokeWidth={1.51} style={{ position: "absolute", left: "250.5px", top: "15px", width: "18px", height: "18px", transform: "rotate(90deg)", transformOrigin: "top left", color: "#040404", display: "block", flexShrink: 0 }} />
          <p style={{ position: "absolute", left: "12.5px", top: "98px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "67px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 600, color: "#040404" }}>Google Ads</p>
          <p style={{ position: "absolute", left: "229px", top: "100px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "23px", lineHeight: "12px", fontFamily: "'Geist'", fontSize: "9.4px", fontWeight: 500, color: "#040404" }}>11/27</p>
          <p style={{ position: "absolute", left: "12.5px", top: "118px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "119px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12.5px", fontWeight: 600, color: "#040404", letterSpacing: "0.08em" }}>••••  ••••  ••••  8817</p>
        </div>
        <div style={{ width: "268.5px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ width: "268.5px", height: "8px", flexShrink: 0, position: "relative" }}>
            <div style={{ position: "absolute", left: "0px", top: "0px", width: "66.59px", height: "8px", borderRadius: "3px", background: "linear-gradient(90deg, #64d2ad 0%, #10b981 100%)", boxShadow: "inset 0 0 0 1px rgba(12, 144, 101, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.18), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
            <svg style={{ position: "absolute", left: "70.59px", top: "0px", width: "197.41px", height: "8px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="197.41" height="8" viewBox="0 0 197.41 8" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0 L-0.5 0 L-0.5 8 L0 8 L0.5 8 L0.5 0 L0 0 Z M3.24 0 L2.74 0 L2.74 8 L3.24 8 L3.74 8 L3.74 0 L3.24 0 Z M6.47 0 L5.97 0 L5.97 8 L6.47 8 L6.97 8 L6.97 0 L6.47 0 Z M9.71 0 L9.21 0 L9.21 8 L9.71 8 L10.21 8 L10.21 0 L9.71 0 Z M12.95 0 L12.45 0 L12.45 8 L12.95 8 L13.45 8 L13.45 0 L12.95 0 Z M16.18 0 L15.68 0 L15.68 8 L16.18 8 L16.68 8 L16.68 0 L16.18 0 Z M19.42 0 L18.92 0 L18.92 8 L19.42 8 L19.92 8 L19.92 0 L19.42 0 Z M22.65 0 L22.15 0 L22.15 8 L22.65 8 L23.15 8 L23.15 0 L22.65 0 Z M25.89 0 L25.39 0 L25.39 8 L25.89 8 L26.39 8 L26.39 0 L25.89 0 Z M29.13 0 L28.63 0 L28.63 8 L29.13 8 L29.63 8 L29.63 0 L29.13 0 Z M32.36 0 L31.86 0 L31.86 8 L32.36 8 L32.86 8 L32.86 0 L32.36 0 Z M35.6 0 L35.1 0 L35.1 8 L35.6 8 L36.1 8 L36.1 0 L35.6 0 Z M38.84 0 L38.34 0 L38.34 8 L38.84 8 L39.34 8 L39.34 0 L38.84 0 Z M42.07 0 L41.57 0 L41.57 8 L42.07 8 L42.57 8 L42.57 0 L42.07 0 Z M45.31 0 L44.81 0 L44.81 8 L45.31 8 L45.81 8 L45.81 0 L45.31 0 Z M48.54 0 L48.04 0 L48.04 8 L48.54 8 L49.04 8 L49.04 0 L48.54 0 Z M51.78 0 L51.28 0 L51.28 8 L51.78 8 L52.28 8 L52.28 0 L51.78 0 Z M55.02 0 L54.52 0 L54.52 8 L55.02 8 L55.52 8 L55.52 0 L55.02 0 Z M58.25 0 L57.75 0 L57.75 8 L58.25 8 L58.75 8 L58.75 0 L58.25 0 Z M61.49 0 L60.99 0 L60.99 8 L61.49 8 L61.99 8 L61.99 0 L61.49 0 Z M64.73 0 L64.23 0 L64.23 8 L64.73 8 L65.23 8 L65.23 0 L64.73 0 Z M67.96 0 L67.46 0 L67.46 8 L67.96 8 L68.46 8 L68.46 0 L67.96 0 Z M71.2 0 L70.7 0 L70.7 8 L71.2 8 L71.7 8 L71.7 0 L71.2 0 Z M74.43 0 L73.93 0 L73.93 8 L74.43 8 L74.93 8 L74.93 0 L74.43 0 Z M77.67 0 L77.17 0 L77.17 8 L77.67 8 L78.17 8 L78.17 0 L77.67 0 Z M80.91 0 L80.41 0 L80.41 8 L80.91 8 L81.41 8 L81.41 0 L80.91 0 Z M84.14 0 L83.64 0 L83.64 8 L84.14 8 L84.64 8 L84.64 0 L84.14 0 Z M87.38 0 L86.88 0 L86.88 8 L87.38 8 L87.88 8 L87.88 0 L87.38 0 Z M90.62 0 L90.12 0 L90.12 8 L90.62 8 L91.12 8 L91.12 0 L90.62 0 Z M93.85 0 L93.35 0 L93.35 8 L93.85 8 L94.35 8 L94.35 0 L93.85 0 Z M97.09 0 L96.59 0 L96.59 8 L97.09 8 L97.59 8 L97.59 0 L97.09 0 Z M100.32 0 L99.82 0 L99.82 8 L100.32 8 L100.82 8 L100.82 0 L100.32 0 Z M103.56 0 L103.06 0 L103.06 8 L103.56 8 L104.06 8 L104.06 0 L103.56 0 Z M106.8 0 L106.3 0 L106.3 8 L106.8 8 L107.3 8 L107.3 0 L106.8 0 Z M110.03 0 L109.53 0 L109.53 8 L110.03 8 L110.53 8 L110.53 0 L110.03 0 Z M113.27 0 L112.77 0 L112.77 8 L113.27 8 L113.77 8 L113.77 0 L113.27 0 Z M116.51 0 L116.01 0 L116.01 8 L116.51 8 L117.01 8 L117.01 0 L116.51 0 Z M119.74 0 L119.24 0 L119.24 8 L119.74 8 L120.24 8 L120.24 0 L119.74 0 Z M122.98 0 L122.48 0 L122.48 8 L122.98 8 L123.48 8 L123.48 0 L122.98 0 Z M126.21 0 L125.71 0 L125.71 8 L126.21 8 L126.71 8 L126.71 0 L126.21 0 Z M129.45 0 L128.95 0 L128.95 8 L129.45 8 L129.95 8 L129.95 0 L129.45 0 Z M132.69 0 L132.19 0 L132.19 8 L132.69 8 L133.19 8 L133.19 0 L132.69 0 Z M135.92 0 L135.42 0 L135.42 8 L135.92 8 L136.42 8 L136.42 0 L135.92 0 Z M139.16 0 L138.66 0 L138.66 8 L139.16 8 L139.66 8 L139.66 0 L139.16 0 Z M142.4 0 L141.9 0 L141.9 8 L142.4 8 L142.9 8 L142.9 0 L142.4 0 Z M145.63 0 L145.13 0 L145.13 8 L145.63 8 L146.13 8 L146.13 0 L145.63 0 Z M148.87 0 L148.37 0 L148.37 8 L148.87 8 L149.37 8 L149.37 0 L148.87 0 Z M152.1 0 L151.6 0 L151.6 8 L152.1 8 L152.6 8 L152.6 0 L152.1 0 Z M155.34 0 L154.84 0 L154.84 8 L155.34 8 L155.84 8 L155.84 0 L155.34 0 Z M158.58 0 L158.08 0 L158.08 8 L158.58 8 L159.08 8 L159.08 0 L158.58 0 Z M161.81 0 L161.31 0 L161.31 8 L161.81 8 L162.31 8 L162.31 0 L161.81 0 Z M165.05 0 L164.55 0 L164.55 8 L165.05 8 L165.55 8 L165.55 0 L165.05 0 Z M168.29 0 L167.79 0 L167.79 8 L168.29 8 L168.79 8 L168.79 0 L168.29 0 Z M171.52 0 L171.02 0 L171.02 8 L171.52 8 L172.02 8 L172.02 0 L171.52 0 Z M174.76 0 L174.26 0 L174.26 8 L174.76 8 L175.26 8 L175.26 0 L174.76 0 Z M177.99 0 L177.49 0 L177.49 8 L177.99 8 L178.49 8 L178.49 0 L177.99 0 Z M181.23 0 L180.73 0 L180.73 8 L181.23 8 L181.73 8 L181.73 0 L181.23 0 Z M184.47 0 L183.97 0 L183.97 8 L184.47 8 L184.97 8 L184.97 0 L184.47 0 Z M187.7 0 L187.2 0 L187.2 8 L187.7 8 L188.2 8 L188.2 0 L187.7 0 Z M190.94 0 L190.44 0 L190.44 8 L190.94 8 L191.44 8 L191.44 0 L190.94 0 Z M194.18 0 L193.68 0 L193.68 8 L194.18 8 L194.68 8 L194.68 0 L194.18 0 Z M197.41 0 L196.91 0 L196.91 8 L197.41 8 L197.91 8 L197.91 0 L197.41 0 Z" fill="#d4d4d8"/></svg>
          </div>
          <div style={{ width: "268.5px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "73px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#1f1f22" }}>$1,240 spent</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "89px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#7d818c" }}>of $5,000 · 25%</p>
          </div>
        </div>
      </div>
      <div style={{ position: "absolute", left: "585px", top: "64px", width: "268.5px", height: "192px", display: "flex", flexDirection: "column", gap: "14px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ width: "268.5px", height: "148px", flexShrink: 0, borderRadius: "12px", background: "linear-gradient(90deg, #fffaf0 0%, #efe8dc 100%), linear-gradient(#f8f8f8, #f8f8f8)", boxShadow: "inset 0 0 0 0.8px #f3f3f3", overflow: "hidden", position: "relative" }}>
          <p style={{ position: "absolute", left: "15.7px", top: "15.7px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "66px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12.5px", fontWeight: 500, color: "#040404" }}>Travel Card</p>
          <Wifi size={18} strokeWidth={1.51} style={{ position: "absolute", left: "250.5px", top: "15px", width: "18px", height: "18px", transform: "rotate(90deg)", transformOrigin: "top left", color: "#040404", display: "block", flexShrink: 0 }} />
          <p style={{ position: "absolute", left: "12.5px", top: "98px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "28px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 600, color: "#040404" }}>Uber</p>
          <p style={{ position: "absolute", left: "223px", top: "100px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "29px", lineHeight: "12px", fontFamily: "'Geist'", fontSize: "9.4px", fontWeight: 500, color: "#040404" }}>03/28</p>
          <p style={{ position: "absolute", left: "12.5px", top: "118px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "121px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12.5px", fontWeight: 600, color: "#040404", letterSpacing: "0.08em" }}>••••  ••••  ••••  3109</p>
        </div>
        <div style={{ width: "268.5px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ width: "268.5px", height: "8px", flexShrink: 0, position: "relative" }}>
            <div style={{ position: "absolute", left: "0px", top: "0px", width: "46.18px", height: "8px", borderRadius: "3px", background: "linear-gradient(90deg, #f9c060 0%, #f59e0b 100%)", boxShadow: "inset 0 0 0 1px rgba(191, 123, 9, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.18), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
            <svg style={{ position: "absolute", left: "50.18px", top: "0px", width: "217.82px", height: "8px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="217.82" height="8" viewBox="0 0 217.82 8" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0 L-0.5 0 L-0.5 8 L0 8 L0.5 8 L0.5 0 L0 0 Z M3.2 0 L2.7 0 L2.7 8 L3.2 8 L3.7 8 L3.7 0 L3.2 0 Z M6.41 0 L5.91 0 L5.91 8 L6.41 8 L6.91 8 L6.91 0 L6.41 0 Z M9.61 0 L9.11 0 L9.11 8 L9.61 8 L10.11 8 L10.11 0 L9.61 0 Z M12.81 0 L12.31 0 L12.31 8 L12.81 8 L13.31 8 L13.31 0 L12.81 0 Z M16.02 0 L15.52 0 L15.52 8 L16.02 8 L16.52 8 L16.52 0 L16.02 0 Z M19.22 0 L18.72 0 L18.72 8 L19.22 8 L19.72 8 L19.72 0 L19.22 0 Z M22.42 0 L21.92 0 L21.92 8 L22.42 8 L22.92 8 L22.92 0 L22.42 0 Z M25.63 0 L25.13 0 L25.13 8 L25.63 8 L26.13 8 L26.13 0 L25.63 0 Z M28.83 0 L28.33 0 L28.33 8 L28.83 8 L29.33 8 L29.33 0 L28.83 0 Z M32.03 0 L31.53 0 L31.53 8 L32.03 8 L32.53 8 L32.53 0 L32.03 0 Z M35.24 0 L34.74 0 L34.74 8 L35.24 8 L35.74 8 L35.74 0 L35.24 0 Z M38.44 0 L37.94 0 L37.94 8 L38.44 8 L38.94 8 L38.94 0 L38.44 0 Z M41.64 0 L41.14 0 L41.14 8 L41.64 8 L42.14 8 L42.14 0 L41.64 0 Z M44.84 0 L44.34 0 L44.34 8 L44.84 8 L45.34 8 L45.34 0 L44.84 0 Z M48.05 0 L47.55 0 L47.55 8 L48.05 8 L48.55 8 L48.55 0 L48.05 0 Z M51.25 0 L50.75 0 L50.75 8 L51.25 8 L51.75 8 L51.75 0 L51.25 0 Z M54.45 0 L53.95 0 L53.95 8 L54.45 8 L54.95 8 L54.95 0 L54.45 0 Z M57.66 0 L57.16 0 L57.16 8 L57.66 8 L58.16 8 L58.16 0 L57.66 0 Z M60.86 0 L60.36 0 L60.36 8 L60.86 8 L61.36 8 L61.36 0 L60.86 0 Z M64.06 0 L63.56 0 L63.56 8 L64.06 8 L64.56 8 L64.56 0 L64.06 0 Z M67.27 0 L66.77 0 L66.77 8 L67.27 8 L67.77 8 L67.77 0 L67.27 0 Z M70.47 0 L69.97 0 L69.97 8 L70.47 8 L70.97 8 L70.97 0 L70.47 0 Z M73.67 0 L73.17 0 L73.17 8 L73.67 8 L74.17 8 L74.17 0 L73.67 0 Z M76.88 0 L76.38 0 L76.38 8 L76.88 8 L77.38 8 L77.38 0 L76.88 0 Z M80.08 0 L79.58 0 L79.58 8 L80.08 8 L80.58 8 L80.58 0 L80.08 0 Z M83.28 0 L82.78 0 L82.78 8 L83.28 8 L83.78 8 L83.78 0 L83.28 0 Z M86.49 0 L85.99 0 L85.99 8 L86.49 8 L86.99 8 L86.99 0 L86.49 0 Z M89.69 0 L89.19 0 L89.19 8 L89.69 8 L90.19 8 L90.19 0 L89.69 0 Z M92.89 0 L92.39 0 L92.39 8 L92.89 8 L93.39 8 L93.39 0 L92.89 0 Z M96.1 0 L95.6 0 L95.6 8 L96.1 8 L96.6 8 L96.6 0 L96.1 0 Z M99.3 0 L98.8 0 L98.8 8 L99.3 8 L99.8 8 L99.8 0 L99.3 0 Z M102.5 0 L102 0 L102 8 L102.5 8 L103 8 L103 0 L102.5 0 Z M105.71 0 L105.21 0 L105.21 8 L105.71 8 L106.21 8 L106.21 0 L105.71 0 Z M108.91 0 L108.41 0 L108.41 8 L108.91 8 L109.41 8 L109.41 0 L108.91 0 Z M112.11 0 L111.61 0 L111.61 8 L112.11 8 L112.61 8 L112.61 0 L112.11 0 Z M115.32 0 L114.82 0 L114.82 8 L115.32 8 L115.82 8 L115.82 0 L115.32 0 Z M118.52 0 L118.02 0 L118.02 8 L118.52 8 L119.02 8 L119.02 0 L118.52 0 Z M121.72 0 L121.22 0 L121.22 8 L121.72 8 L122.22 8 L122.22 0 L121.72 0 Z M124.93 0 L124.43 0 L124.43 8 L124.93 8 L125.43 8 L125.43 0 L124.93 0 Z M128.13 0 L127.63 0 L127.63 8 L128.13 8 L128.63 8 L128.63 0 L128.13 0 Z M131.33 0 L130.83 0 L130.83 8 L131.33 8 L131.83 8 L131.83 0 L131.33 0 Z M134.53 0 L134.03 0 L134.03 8 L134.53 8 L135.03 8 L135.03 0 L134.53 0 Z M137.74 0 L137.24 0 L137.24 8 L137.74 8 L138.24 8 L138.24 0 L137.74 0 Z M140.94 0 L140.44 0 L140.44 8 L140.94 8 L141.44 8 L141.44 0 L140.94 0 Z M144.14 0 L143.64 0 L143.64 8 L144.14 8 L144.64 8 L144.64 0 L144.14 0 Z M147.35 0 L146.85 0 L146.85 8 L147.35 8 L147.85 8 L147.85 0 L147.35 0 Z M150.55 0 L150.05 0 L150.05 8 L150.55 8 L151.05 8 L151.05 0 L150.55 0 Z M153.75 0 L153.25 0 L153.25 8 L153.75 8 L154.25 8 L154.25 0 L153.75 0 Z M156.96 0 L156.46 0 L156.46 8 L156.96 8 L157.46 8 L157.46 0 L156.96 0 Z M160.16 0 L159.66 0 L159.66 8 L160.16 8 L160.66 8 L160.66 0 L160.16 0 Z M163.36 0 L162.86 0 L162.86 8 L163.36 8 L163.86 8 L163.86 0 L163.36 0 Z M166.57 0 L166.07 0 L166.07 8 L166.57 8 L167.07 8 L167.07 0 L166.57 0 Z M169.77 0 L169.27 0 L169.27 8 L169.77 8 L170.27 8 L170.27 0 L169.77 0 Z M172.97 0 L172.47 0 L172.47 8 L172.97 8 L173.47 8 L173.47 0 L172.97 0 Z M176.18 0 L175.68 0 L175.68 8 L176.18 8 L176.68 8 L176.68 0 L176.18 0 Z M179.38 0 L178.88 0 L178.88 8 L179.38 8 L179.88 8 L179.88 0 L179.38 0 Z M182.58 0 L182.08 0 L182.08 8 L182.58 8 L183.08 8 L183.08 0 L182.58 0 Z M185.79 0 L185.29 0 L185.29 8 L185.79 8 L186.29 8 L186.29 0 L185.79 0 Z M188.99 0 L188.49 0 L188.49 8 L188.99 8 L189.49 8 L189.49 0 L188.99 0 Z M192.19 0 L191.69 0 L191.69 8 L192.19 8 L192.69 8 L192.69 0 L192.19 0 Z M195.4 0 L194.9 0 L194.9 8 L195.4 8 L195.9 8 L195.9 0 L195.4 0 Z M198.6 0 L198.1 0 L198.1 8 L198.6 8 L199.1 8 L199.1 0 L198.6 0 Z M201.8 0 L201.3 0 L201.3 8 L201.8 8 L202.3 8 L202.3 0 L201.8 0 Z M205.01 0 L204.51 0 L204.51 8 L205.01 8 L205.51 8 L205.51 0 L205.01 0 Z M208.21 0 L207.71 0 L207.71 8 L208.21 8 L208.71 8 L208.71 0 L208.21 0 Z M211.41 0 L210.91 0 L210.91 8 L211.41 8 L211.91 8 L211.91 0 L211.41 0 Z M214.61 0 L214.11 0 L214.11 8 L214.61 8 L215.11 8 L215.11 0 L214.61 0 Z M217.82 0 L217.32 0 L217.32 8 L217.82 8 L218.32 8 L218.32 0 L217.82 0 Z" fill="#d4d4d8"/></svg>
          </div>
          <div style={{ width: "268.5px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "66px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#1f1f22" }}>$860 spent</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "85px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#7d818c" }}>of $5,000 · 17%</p>
          </div>
        </div>
      </div>
      <div style={{ position: "absolute", left: "869.5px", top: "64px", width: "268.5px", height: "192px", display: "flex", flexDirection: "column", gap: "14px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ width: "268.5px", height: "148px", flexShrink: 0, borderRadius: "12px", background: "linear-gradient(90deg, #f9f6ff 0%, #e8e8e8 100%), linear-gradient(#f8f8f8, #f8f8f8)", boxShadow: "inset 0 0 0 0.8px #f3f3f3", overflow: "hidden", position: "relative" }}>
          <p style={{ position: "absolute", left: "15.7px", top: "15.7px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "70px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12.5px", fontWeight: 500, color: "#040404" }}>Engineering</p>
          <Wifi size={18} strokeWidth={1.51} style={{ position: "absolute", left: "250.5px", top: "15px", width: "18px", height: "18px", transform: "rotate(90deg)", transformOrigin: "top left", color: "#040404", display: "block", flexShrink: 0 }} />
          <p style={{ position: "absolute", left: "12.5px", top: "98px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "27px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 600, color: "#040404" }}>AWS</p>
          <p style={{ position: "absolute", left: "223px", top: "100px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "29px", lineHeight: "12px", fontFamily: "'Geist'", fontSize: "9.4px", fontWeight: 500, color: "#040404" }}>09/28</p>
          <p style={{ position: "absolute", left: "12.5px", top: "118px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "124px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12.5px", fontWeight: 600, color: "#040404", letterSpacing: "0.08em" }}>••••  ••••  ••••  5520</p>
        </div>
        <div style={{ width: "268.5px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ width: "268.5px", height: "8px", flexShrink: 0, position: "relative" }}>
            <div style={{ position: "absolute", left: "0px", top: "0px", width: "68.47px", height: "8px", borderRadius: "3px", background: "linear-gradient(90deg, #aa95fd 0%, #7c5cfc 100%)", boxShadow: "inset 0 0 0 1px rgba(97, 72, 197, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.18), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
            <svg style={{ position: "absolute", left: "72.47px", top: "0px", width: "195.53px", height: "8px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="195.53" height="8" viewBox="0 0 195.53 8" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0 L-0.5 0 L-0.5 8 L0 8 L0.5 8 L0.5 0 L0 0 Z M3.21 0 L2.71 0 L2.71 8 L3.21 8 L3.71 8 L3.71 0 L3.21 0 Z M6.41 0 L5.91 0 L5.91 8 L6.41 8 L6.91 8 L6.91 0 L6.41 0 Z M9.62 0 L9.12 0 L9.12 8 L9.62 8 L10.12 8 L10.12 0 L9.62 0 Z M12.82 0 L12.32 0 L12.32 8 L12.82 8 L13.32 8 L13.32 0 L12.82 0 Z M16.03 0 L15.53 0 L15.53 8 L16.03 8 L16.53 8 L16.53 0 L16.03 0 Z M19.23 0 L18.73 0 L18.73 8 L19.23 8 L19.73 8 L19.73 0 L19.23 0 Z M22.44 0 L21.94 0 L21.94 8 L22.44 8 L22.94 8 L22.94 0 L22.44 0 Z M25.64 0 L25.14 0 L25.14 8 L25.64 8 L26.14 8 L26.14 0 L25.64 0 Z M28.85 0 L28.35 0 L28.35 8 L28.85 8 L29.35 8 L29.35 0 L28.85 0 Z M32.05 0 L31.55 0 L31.55 8 L32.05 8 L32.55 8 L32.55 0 L32.05 0 Z M35.26 0 L34.76 0 L34.76 8 L35.26 8 L35.76 8 L35.76 0 L35.26 0 Z M38.47 0 L37.97 0 L37.97 8 L38.47 8 L38.97 8 L38.97 0 L38.47 0 Z M41.67 0 L41.17 0 L41.17 8 L41.67 8 L42.17 8 L42.17 0 L41.67 0 Z M44.88 0 L44.38 0 L44.38 8 L44.88 8 L45.38 8 L45.38 0 L44.88 0 Z M48.08 0 L47.58 0 L47.58 8 L48.08 8 L48.58 8 L48.58 0 L48.08 0 Z M51.29 0 L50.79 0 L50.79 8 L51.29 8 L51.79 8 L51.79 0 L51.29 0 Z M54.49 0 L53.99 0 L53.99 8 L54.49 8 L54.99 8 L54.99 0 L54.49 0 Z M57.7 0 L57.2 0 L57.2 8 L57.7 8 L58.2 8 L58.2 0 L57.7 0 Z M60.9 0 L60.4 0 L60.4 8 L60.9 8 L61.4 8 L61.4 0 L60.9 0 Z M64.11 0 L63.61 0 L63.61 8 L64.11 8 L64.61 8 L64.61 0 L64.11 0 Z M67.31 0 L66.81 0 L66.81 8 L67.31 8 L67.81 8 L67.81 0 L67.31 0 Z M70.52 0 L70.02 0 L70.02 8 L70.52 8 L71.02 8 L71.02 0 L70.52 0 Z M73.73 0 L73.23 0 L73.23 8 L73.73 8 L74.23 8 L74.23 0 L73.73 0 Z M76.93 0 L76.43 0 L76.43 8 L76.93 8 L77.43 8 L77.43 0 L76.93 0 Z M80.14 0 L79.64 0 L79.64 8 L80.14 8 L80.64 8 L80.64 0 L80.14 0 Z M83.34 0 L82.84 0 L82.84 8 L83.34 8 L83.84 8 L83.84 0 L83.34 0 Z M86.55 0 L86.05 0 L86.05 8 L86.55 8 L87.05 8 L87.05 0 L86.55 0 Z M89.75 0 L89.25 0 L89.25 8 L89.75 8 L90.25 8 L90.25 0 L89.75 0 Z M92.96 0 L92.46 0 L92.46 8 L92.96 8 L93.46 8 L93.46 0 L92.96 0 Z M96.16 0 L95.66 0 L95.66 8 L96.16 8 L96.66 8 L96.66 0 L96.16 0 Z M99.37 0 L98.87 0 L98.87 8 L99.37 8 L99.87 8 L99.87 0 L99.37 0 Z M102.57 0 L102.07 0 L102.07 8 L102.57 8 L103.07 8 L103.07 0 L102.57 0 Z M105.78 0 L105.28 0 L105.28 8 L105.78 8 L106.28 8 L106.28 0 L105.78 0 Z M108.99 0 L108.49 0 L108.49 8 L108.99 8 L109.49 8 L109.49 0 L108.99 0 Z M112.19 0 L111.69 0 L111.69 8 L112.19 8 L112.69 8 L112.69 0 L112.19 0 Z M115.4 0 L114.9 0 L114.9 8 L115.4 8 L115.9 8 L115.9 0 L115.4 0 Z M118.6 0 L118.1 0 L118.1 8 L118.6 8 L119.1 8 L119.1 0 L118.6 0 Z M121.81 0 L121.31 0 L121.31 8 L121.81 8 L122.31 8 L122.31 0 L121.81 0 Z M125.01 0 L124.51 0 L124.51 8 L125.01 8 L125.51 8 L125.51 0 L125.01 0 Z M128.22 0 L127.72 0 L127.72 8 L128.22 8 L128.72 8 L128.72 0 L128.22 0 Z M131.42 0 L130.92 0 L130.92 8 L131.42 8 L131.92 8 L131.92 0 L131.42 0 Z M134.63 0 L134.13 0 L134.13 8 L134.63 8 L135.13 8 L135.13 0 L134.63 0 Z M137.83 0 L137.33 0 L137.33 8 L137.83 8 L138.33 8 L138.33 0 L137.83 0 Z M141.04 0 L140.54 0 L140.54 8 L141.04 8 L141.54 8 L141.54 0 L141.04 0 Z M144.25 0 L143.75 0 L143.75 8 L144.25 8 L144.75 8 L144.75 0 L144.25 0 Z M147.45 0 L146.95 0 L146.95 8 L147.45 8 L147.95 8 L147.95 0 L147.45 0 Z M150.66 0 L150.16 0 L150.16 8 L150.66 8 L151.16 8 L151.16 0 L150.66 0 Z M153.86 0 L153.36 0 L153.36 8 L153.86 8 L154.36 8 L154.36 0 L153.86 0 Z M157.07 0 L156.57 0 L156.57 8 L157.07 8 L157.57 8 L157.57 0 L157.07 0 Z M160.27 0 L159.77 0 L159.77 8 L160.27 8 L160.77 8 L160.77 0 L160.27 0 Z M163.48 0 L162.98 0 L162.98 8 L163.48 8 L163.98 8 L163.98 0 L163.48 0 Z M166.68 0 L166.18 0 L166.18 8 L166.68 8 L167.18 8 L167.18 0 L166.68 0 Z M169.89 0 L169.39 0 L169.39 8 L169.89 8 L170.39 8 L170.39 0 L169.89 0 Z M173.09 0 L172.59 0 L172.59 8 L173.09 8 L173.59 8 L173.59 0 L173.09 0 Z M176.3 0 L175.8 0 L175.8 8 L176.3 8 L176.8 8 L176.8 0 L176.3 0 Z M179.51 0 L179.01 0 L179.01 8 L179.51 8 L180.01 8 L180.01 0 L179.51 0 Z M182.71 0 L182.21 0 L182.21 8 L182.71 8 L183.21 8 L183.21 0 L182.71 0 Z M185.92 0 L185.42 0 L185.42 8 L185.92 8 L186.42 8 L186.42 0 L185.92 0 Z M189.12 0 L188.62 0 L188.62 8 L189.12 8 L189.62 8 L189.62 0 L189.12 0 Z M192.33 0 L191.83 0 L191.83 8 L192.33 8 L192.83 8 L192.83 0 L192.33 0 Z M195.53 0 L195.03 0 L195.03 8 L195.53 8 L196.03 8 L196.03 0 L195.53 0 Z" fill="#d4d4d8"/></svg>
          </div>
          <div style={{ width: "268.5px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "77px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#1f1f22" }}>$2,040 spent</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "88px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#7d818c" }}>of $8,000 · 26%</p>
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
