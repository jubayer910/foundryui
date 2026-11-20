"use client";
// Insight, Family upgrades (vantage, Charts) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Ingot Icons.
import { useEffect, useRef } from "react";
import { ArrowUpRight, Dots, Repeat, Stack2 } from "ingotui-icons/react/stroke-rounded";

export function InsightFamilyUpgrades() {
  const fuRef = useRef<any>(null);
  useEffect(() => fuInteract(fuRef.current), []);
  return (
    <div ref={fuRef} style={{ width: "776px", height: "172px", position: "relative" }}>
      <div style={{ position: "absolute", left: "0px", top: "20px", width: "36px", height: "36px", borderRadius: "8px", background: "rgba(91, 201, 139, 0.12)", boxShadow: "inset 0 0 0 1px rgba(91, 201, 139, 0.22)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
        <Stack2 size={18} style={{ width: "18px", height: "18px", flexShrink: 0, color: "#74d19c", display: "block" }} />
      </div>
      <div style={{ position: "absolute", left: "52px", top: "18px", width: "410px", height: "124px", display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ height: "18px", flexShrink: 0, borderRadius: "6px", background: "#16251c", boxShadow: "inset 0 0 0 1px #1f3326, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", display: "flex", flexDirection: "row", padding: "1px 7px 1px 7px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <svg style={{ width: "5px", height: "5px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="5" height="5" viewBox="0 0 5 5" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M5 2.5 C5 3.88071 3.88071 5 2.5 5 C1.11929 5 0 3.88071 0 2.5 C0 1.11929 1.11929 0 2.5 0 C3.88071 0 5 1.11929 5 2.5 Z" fill="#6bcb8b"/></svg>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "68px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 500, color: "#6bcb8b", letterSpacing: "-0.01em", textTransform: "uppercase" }}>Opportunity</p>
          </div>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "31px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#909090" }}>Plans</p>
          <svg style={{ width: "3px", height: "3px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="3" height="3" viewBox="0 0 3 3" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M3 1.5 C3 2.32843 2.32843 3 1.5 3 C0.671573 3 0 2.32843 0 1.5 C0 0.671573 0.671573 0 1.5 0 C2.32843 0 3 0.671573 3 1.5 Z" fill="#5f5f5f"/></svg>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "36px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#5f5f5f" }}>Jul 29</p>
        </div>
        <p style={{ width: "410px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "15px", fontWeight: 500, color: "#ededed", lineHeight: "1.2999999523162842", letterSpacing: "-0.01em" }}>Family plan upgrades +18% after the June campaign</p>
        <p style={{ width: "410px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 400, color: "#8a8a8a", lineHeight: "1.399999976158142" }}>46 upgrades to Family ($79) vs 39 the 4 weeks before — mostly from Plus, +$1,380 MRR at +$30 each.</p>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", padding: "6px 0px 0px 0px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div data-fu="tab" style={{ flexShrink: 0, borderRadius: "6px", background: "#232323", boxShadow: "inset 0 0 0 1px #2e2e2e, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", display: "flex", flexDirection: "row", padding: "5px 10px 5px 10px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <Repeat size={14} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#8a8a8a", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "105px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 400, color: "#dadada" }}>Repeat campaign</p>
          </div>
          <div data-fu="tab" style={{ flexShrink: 0, borderRadius: "6px", background: "#232323", boxShadow: "inset 0 0 0 1px #2e2e2e, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", display: "flex", flexDirection: "row", padding: "5px 10px 5px 10px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <ArrowUpRight size={14} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#8a8a8a", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "42px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 400, color: "#dadada" }}>Details</p>
          </div>
        </div>
      </div>
      <div style={{ position: "absolute", left: "744px", top: "18px", width: "32px", height: "32px", borderRadius: "6px", background: "#232323", boxShadow: "inset 0 0 0 1px #2e2e2e, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", overflow: "hidden", display: "flex", flexDirection: "row", padding: "7px 7px 7px 7px", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
        <Dots size={18} style={{ width: "18px", height: "18px", flexShrink: 0, color: "#dadada", display: "block" }} />
      </div>
      <div style={{ position: "absolute", left: "488px", top: "20px", width: "236px", height: "112px", display: "flex", flexDirection: "column", gap: "10px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ width: "236px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "148px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8a8a8a" }}>Upgrades to Family / week</p>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "18px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>46</p>
            <div style={{ flexShrink: 0, borderRadius: "22px", background: "rgba(63, 179, 127, 0.1)", display: "flex", flexDirection: "row", padding: "2px 3px 2px 3px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "28px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#3fb37f", lineHeight: "1.100000023841858" }}>+18%</p>
            </div>
          </div>
        </div>
        <div style={{ width: "236px", height: "84px", flexShrink: 0, position: "relative" }}>
          <svg style={{ position: "absolute", left: "0px", top: "2px", width: "236px", height: "1px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="236" height="1" viewBox="0 0 236 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0L236 0" fill="none" stroke="#2c2c2c" strokeWidth="1" strokeDasharray="3 3" strokeLinecap="butt"/></svg>
          <svg style={{ position: "absolute", left: "0px", top: "32px", width: "236px", height: "1px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="236" height="1" viewBox="0 0 236 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0L236 0" fill="none" stroke="#2c2c2c" strokeWidth="1" strokeDasharray="3 3" strokeLinecap="butt"/></svg>
          <div style={{ position: "absolute", left: "0px", top: "61.5px", width: "236px", height: "1px", background: "#333333" }} />
          <div data-fu="bar" style={{ position: "absolute", left: "6.75px", top: "26px", width: "16px", height: "36px", borderRadius: "4px", background: "linear-gradient(180deg, #428660 0%, #3c7555 100%)", boxShadow: "inset 0 0 0 1px rgba(86, 191, 132, 0.22), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.06), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.25)", overflow: "hidden" }}>
            <svg data-fu="plot" style={{ position: "absolute", left: "-36px", top: "0px", width: "121px", height: "36px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="121" height="36" viewBox="0 0 121 36" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 36 L0.494975 36.495 L36.495 0.494975 L36 0 L35.505 -0.494975 L-0.494975 35.505 L0 36 Z M5 36 L5.49497 36.495 L41.495 0.494975 L41 0 L40.505 -0.494975 L4.50503 35.505 L5 36 Z M10 36 L10.495 36.495 L46.495 0.494975 L46 0 L45.505 -0.494975 L9.50502 35.505 L10 36 Z M15 36 L15.495 36.495 L51.495 0.494975 L51 0 L50.505 -0.494975 L14.505 35.505 L15 36 Z M20 36 L20.495 36.495 L56.495 0.494975 L56 0 L55.505 -0.494975 L19.505 35.505 L20 36 Z M25 36 L25.495 36.495 L61.495 0.494975 L61 0 L60.505 -0.494975 L24.505 35.505 L25 36 Z M30 36 L30.495 36.495 L66.495 0.494975 L66 0 L65.505 -0.494975 L29.505 35.505 L30 36 Z M35 36 L35.495 36.495 L71.495 0.494975 L71 0 L70.505 -0.494975 L34.505 35.505 L35 36 Z M40 36 L40.495 36.495 L76.495 0.494975 L76 0 L75.505 -0.494975 L39.505 35.505 L40 36 Z M45 36 L45.495 36.495 L81.495 0.494975 L81 0 L80.505 -0.494975 L44.505 35.505 L45 36 Z M50 36 L50.495 36.495 L86.495 0.494975 L86 0 L85.505 -0.494975 L49.505 35.505 L50 36 Z M55 36 L55.495 36.495 L91.495 0.494975 L91 0 L90.505 -0.494975 L54.505 35.505 L55 36 Z M60 36 L60.495 36.495 L96.495 0.494975 L96 0 L95.505 -0.494975 L59.505 35.505 L60 36 Z M65 36 L65.495 36.495 L101.495 0.494975 L101 0 L100.505 -0.494975 L64.505 35.505 L65 36 Z M70 36 L70.495 36.495 L106.495 0.494975 L106 0 L105.505 -0.494975 L69.505 35.505 L70 36 Z M75 36 L75.495 36.495 L111.495 0.494975 L111 0 L110.505 -0.494975 L74.505 35.505 L75 36 Z M80 36 L80.495 36.495 L116.495 0.494975 L116 0 L115.505 -0.494975 L79.505 35.505 L80 36 Z M85 36 L85.495 36.495 L121.495 0.494975 L121 0 L120.505 -0.494975 L84.505 35.505 L85 36 Z" fill="#ffffff" fillOpacity="0.14"/></svg>
          </div>
          <div data-fu="bar" style={{ position: "absolute", left: "36.25px", top: "22px", width: "16px", height: "40px", borderRadius: "4px", background: "linear-gradient(180deg, #428660 0%, #3c7555 100%)", boxShadow: "inset 0 0 0 1px rgba(86, 191, 132, 0.22), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.06), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.25)", overflow: "hidden" }}>
            <svg data-fu="plot" style={{ position: "absolute", left: "-40px", top: "0px", width: "135px", height: "40px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="135" height="40" viewBox="0 0 135 40" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 40 L0.494975 40.495 L40.495 0.494975 L40 0 L39.505 -0.494975 L-0.494975 39.505 L0 40 Z M5 40 L5.49497 40.495 L45.495 0.494975 L45 0 L44.505 -0.494975 L4.50503 39.505 L5 40 Z M10 40 L10.495 40.495 L50.495 0.494975 L50 0 L49.505 -0.494975 L9.50502 39.505 L10 40 Z M15 40 L15.495 40.495 L55.495 0.494975 L55 0 L54.505 -0.494975 L14.505 39.505 L15 40 Z M20 40 L20.495 40.495 L60.495 0.494975 L60 0 L59.505 -0.494975 L19.505 39.505 L20 40 Z M25 40 L25.495 40.495 L65.495 0.494975 L65 0 L64.505 -0.494975 L24.505 39.505 L25 40 Z M30 40 L30.495 40.495 L70.495 0.494975 L70 0 L69.505 -0.494975 L29.505 39.505 L30 40 Z M35 40 L35.495 40.495 L75.495 0.494975 L75 0 L74.505 -0.494975 L34.505 39.505 L35 40 Z M40 40 L40.495 40.495 L80.495 0.494975 L80 0 L79.505 -0.494975 L39.505 39.505 L40 40 Z M45 40 L45.495 40.495 L85.495 0.494975 L85 0 L84.505 -0.494975 L44.505 39.505 L45 40 Z M50 40 L50.495 40.495 L90.495 0.494975 L90 0 L89.505 -0.494975 L49.505 39.505 L50 40 Z M55 40 L55.495 40.495 L95.495 0.494975 L95 0 L94.505 -0.494975 L54.505 39.505 L55 40 Z M60 40 L60.495 40.495 L100.495 0.494975 L100 0 L99.505 -0.494975 L59.505 39.505 L60 40 Z M65 40 L65.495 40.495 L105.495 0.494975 L105 0 L104.505 -0.494975 L64.505 39.505 L65 40 Z M70 40 L70.495 40.495 L110.495 0.494975 L110 0 L109.505 -0.494975 L69.505 39.505 L70 40 Z M75 40 L75.495 40.495 L115.495 0.494975 L115 0 L114.505 -0.494975 L74.505 39.505 L75 40 Z M80 40 L80.495 40.495 L120.495 0.494975 L120 0 L119.505 -0.494975 L79.505 39.505 L80 40 Z M85 40 L85.495 40.495 L125.495 0.494975 L125 0 L124.505 -0.494975 L84.505 39.505 L85 40 Z M90 40 L90.495 40.495 L130.495 0.494975 L130 0 L129.505 -0.494975 L89.505 39.505 L90 40 Z M95 40 L95.495 40.495 L135.495 0.494975 L135 0 L134.505 -0.494975 L94.505 39.505 L95 40 Z" fill="#ffffff" fillOpacity="0.14"/></svg>
          </div>
          <div data-fu="bar" style={{ position: "absolute", left: "65.75px", top: "26px", width: "16px", height: "36px", borderRadius: "4px", background: "linear-gradient(180deg, #428660 0%, #3c7555 100%)", boxShadow: "inset 0 0 0 1px rgba(86, 191, 132, 0.22), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.06), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.25)", overflow: "hidden" }}>
            <svg data-fu="plot" style={{ position: "absolute", left: "-36px", top: "0px", width: "121px", height: "36px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="121" height="36" viewBox="0 0 121 36" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 36 L0.494975 36.495 L36.495 0.494975 L36 0 L35.505 -0.494975 L-0.494975 35.505 L0 36 Z M5 36 L5.49497 36.495 L41.495 0.494975 L41 0 L40.505 -0.494975 L4.50503 35.505 L5 36 Z M10 36 L10.495 36.495 L46.495 0.494975 L46 0 L45.505 -0.494975 L9.50502 35.505 L10 36 Z M15 36 L15.495 36.495 L51.495 0.494975 L51 0 L50.505 -0.494975 L14.505 35.505 L15 36 Z M20 36 L20.495 36.495 L56.495 0.494975 L56 0 L55.505 -0.494975 L19.505 35.505 L20 36 Z M25 36 L25.495 36.495 L61.495 0.494975 L61 0 L60.505 -0.494975 L24.505 35.505 L25 36 Z M30 36 L30.495 36.495 L66.495 0.494975 L66 0 L65.505 -0.494975 L29.505 35.505 L30 36 Z M35 36 L35.495 36.495 L71.495 0.494975 L71 0 L70.505 -0.494975 L34.505 35.505 L35 36 Z M40 36 L40.495 36.495 L76.495 0.494975 L76 0 L75.505 -0.494975 L39.505 35.505 L40 36 Z M45 36 L45.495 36.495 L81.495 0.494975 L81 0 L80.505 -0.494975 L44.505 35.505 L45 36 Z M50 36 L50.495 36.495 L86.495 0.494975 L86 0 L85.505 -0.494975 L49.505 35.505 L50 36 Z M55 36 L55.495 36.495 L91.495 0.494975 L91 0 L90.505 -0.494975 L54.505 35.505 L55 36 Z M60 36 L60.495 36.495 L96.495 0.494975 L96 0 L95.505 -0.494975 L59.505 35.505 L60 36 Z M65 36 L65.495 36.495 L101.495 0.494975 L101 0 L100.505 -0.494975 L64.505 35.505 L65 36 Z M70 36 L70.495 36.495 L106.495 0.494975 L106 0 L105.505 -0.494975 L69.505 35.505 L70 36 Z M75 36 L75.495 36.495 L111.495 0.494975 L111 0 L110.505 -0.494975 L74.505 35.505 L75 36 Z M80 36 L80.495 36.495 L116.495 0.494975 L116 0 L115.505 -0.494975 L79.505 35.505 L80 36 Z M85 36 L85.495 36.495 L121.495 0.494975 L121 0 L120.505 -0.494975 L84.505 35.505 L85 36 Z" fill="#ffffff" fillOpacity="0.14"/></svg>
          </div>
          <div data-fu="bar" style={{ position: "absolute", left: "95.25px", top: "18px", width: "16px", height: "44px", borderRadius: "4px", background: "linear-gradient(180deg, #428660 0%, #3c7555 100%)", boxShadow: "inset 0 0 0 1px rgba(86, 191, 132, 0.22), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.06), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.25)", overflow: "hidden" }}>
            <svg data-fu="plot" style={{ position: "absolute", left: "-44px", top: "0px", width: "144px", height: "44px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="144" height="44" viewBox="0 0 144 44" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 44 L0.494975 44.495 L44.495 0.494975 L44 0 L43.505 -0.494975 L-0.494975 43.505 L0 44 Z M5 44 L5.49497 44.495 L49.495 0.494975 L49 0 L48.505 -0.494975 L4.50503 43.505 L5 44 Z M10 44 L10.495 44.495 L54.495 0.494975 L54 0 L53.505 -0.494975 L9.50502 43.505 L10 44 Z M15 44 L15.495 44.495 L59.495 0.494975 L59 0 L58.505 -0.494975 L14.505 43.505 L15 44 Z M20 44 L20.495 44.495 L64.495 0.494975 L64 0 L63.505 -0.494975 L19.505 43.505 L20 44 Z M25 44 L25.495 44.495 L69.495 0.494975 L69 0 L68.505 -0.494975 L24.505 43.505 L25 44 Z M30 44 L30.495 44.495 L74.495 0.494975 L74 0 L73.505 -0.494975 L29.505 43.505 L30 44 Z M35 44 L35.495 44.495 L79.495 0.494975 L79 0 L78.505 -0.494975 L34.505 43.505 L35 44 Z M40 44 L40.495 44.495 L84.495 0.494975 L84 0 L83.505 -0.494975 L39.505 43.505 L40 44 Z M45 44 L45.495 44.495 L89.495 0.494975 L89 0 L88.505 -0.494975 L44.505 43.505 L45 44 Z M50 44 L50.495 44.495 L94.495 0.494975 L94 0 L93.505 -0.494975 L49.505 43.505 L50 44 Z M55 44 L55.495 44.495 L99.495 0.494975 L99 0 L98.505 -0.494975 L54.505 43.505 L55 44 Z M60 44 L60.495 44.495 L104.495 0.494975 L104 0 L103.505 -0.494975 L59.505 43.505 L60 44 Z M65 44 L65.495 44.495 L109.495 0.494975 L109 0 L108.505 -0.494975 L64.505 43.505 L65 44 Z M70 44 L70.495 44.495 L114.495 0.494975 L114 0 L113.505 -0.494975 L69.505 43.505 L70 44 Z M75 44 L75.495 44.495 L119.495 0.494975 L119 0 L118.505 -0.494975 L74.505 43.505 L75 44 Z M80 44 L80.495 44.495 L124.495 0.494975 L124 0 L123.505 -0.494975 L79.505 43.505 L80 44 Z M85 44 L85.495 44.495 L129.495 0.494975 L129 0 L128.505 -0.494975 L84.505 43.505 L85 44 Z M90 44 L90.495 44.495 L134.495 0.494975 L134 0 L133.505 -0.494975 L89.505 43.505 L90 44 Z M95 44 L95.495 44.495 L139.495 0.494975 L139 0 L138.505 -0.494975 L94.505 43.505 L95 44 Z M100 44 L100.495 44.495 L144.495 0.494975 L144 0 L143.505 -0.494975 L99.505 43.505 L100 44 Z" fill="#ffffff" fillOpacity="0.14"/></svg>
          </div>
          <div data-fu="bar" style={{ position: "absolute", left: "124.75px", top: "14px", width: "16px", height: "48px", borderRadius: "4px", background: "linear-gradient(180deg, #70d09a 0%, #5bc98b 100%)", boxShadow: "inset 0 0 0 1px rgba(71, 157, 108, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)", overflow: "hidden" }} />
          <div data-fu="bar" style={{ position: "absolute", left: "154.25px", top: "18px", width: "16px", height: "44px", borderRadius: "4px", background: "linear-gradient(180deg, #70d09a 0%, #5bc98b 100%)", boxShadow: "inset 0 0 0 1px rgba(71, 157, 108, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)", overflow: "hidden" }} />
          <div data-fu="bar" style={{ position: "absolute", left: "183.75px", top: "10px", width: "16px", height: "52px", borderRadius: "4px", background: "linear-gradient(180deg, #70d09a 0%, #5bc98b 100%)", boxShadow: "inset 0 0 0 1px rgba(71, 157, 108, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)", overflow: "hidden" }} />
          <div data-fu="bar" style={{ position: "absolute", left: "213.25px", top: "22px", width: "16px", height: "40px", borderRadius: "4px", background: "linear-gradient(180deg, #70d09a 0%, #5bc98b 100%)", boxShadow: "inset 0 0 0 1px rgba(71, 157, 108, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)", overflow: "hidden" }} />
          <p style={{ position: "absolute", left: "1.75px", top: "68px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "26px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#7c7c7c" }}>W24</p>
          <p style={{ position: "absolute", left: "119.25px", top: "68px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "27px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#7c7c7c" }}>W28</p>
          <p style={{ position: "absolute", left: "209.25px", top: "68px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "24px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#ededed" }}>W31</p>
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
