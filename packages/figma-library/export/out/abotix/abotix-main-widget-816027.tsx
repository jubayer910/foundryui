"use client";
// MAIN widget (abotix, Charts) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist, Inter. Icons: Ingot Icons.
import { useEffect, useRef } from "react";
import { AiAgents, Book, Bug, Certificate, Database, FileShield, FileText, Gauge, Hammer, Key, LayoutGrid, PlugConnected, Puzzle, Reports, Route, Settings, Sparkles, Support, Target, Users } from "ingotui-icons/react/stroke-rounded";

export function MAINWidget() {
  const fuRef = useRef<any>(null);
  useEffect(() => fuInteract(fuRef.current), []);
  return (
    <div ref={fuRef} data-fu="card" style={{ width: "236px", height: "1045px", borderRadius: "14px", background: "#fafafa", overflow: "hidden", position: "relative" }}>
      <div style={{ position: "absolute", left: "20px", top: "20px", width: "196px", height: "28px", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
        <svg style={{ width: "56px", height: "14px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="56" height="14" viewBox="0 0 56 14" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 13.7689 L4.98549 0.096286 L7.6535 0.096286 L12.639 13.7689 L10.3994 13.7689 L9.13357 10.2063 L3.48595 10.2063 L2.23957 13.7689 L0 13.7689 Z M4.14808 8.31912 L8.49091 8.31912 L6.30976 2.07978 L4.14808 8.31912 Z" fill="#000000"/><path transform="matrix(1 0 0 1 0 0)" d="M18.8508 14 C18.1367 14 17.5005 13.8459 16.9423 13.5378 C16.397 13.2169 15.975 12.7804 15.6764 12.2283 L15.618 13.7689 L13.69 13.7689 L13.69 0.096286 L15.7543 0.096286 L15.7543 4.96836 C16.027 4.51903 16.4294 4.12746 16.9617 3.79367 C17.507 3.45988 18.1367 3.29298 18.8508 3.29298 C19.7466 3.29298 20.5256 3.51123 21.1877 3.94773 C21.8498 4.38423 22.3562 5.00688 22.7067 5.81568 C23.0702 6.61165 23.252 7.55525 23.252 8.64649 C23.252 9.73773 23.0702 10.6878 22.7067 11.4966 C22.3562 12.2925 21.8498 12.9088 21.1877 13.3453 C20.5256 13.7818 19.7466 14 18.8508 14 Z M18.5197 12.2283 C19.3117 12.2283 19.9413 11.9138 20.4087 11.2847 C20.8761 10.6428 21.1098 9.76341 21.1098 8.64649 C21.1098 7.52957 20.8761 6.65658 20.4087 6.02751 C19.9413 5.3856 19.3182 5.06465 18.5392 5.06465 C17.9549 5.06465 17.4551 5.20587 17.0396 5.48831 C16.6242 5.77075 16.3061 6.18157 16.0854 6.72077 C15.8647 7.24713 15.7543 7.88904 15.7543 8.64649 C15.7543 9.37827 15.8647 10.0138 16.0854 10.553 C16.3061 11.0922 16.6242 11.5094 17.0396 11.8047 C17.4551 12.0871 17.9484 12.2283 18.5197 12.2283 Z" fill="#000000"/><path transform="matrix(1 0 0 1 0 0)" d="M29.2236 14 C28.2368 14 27.3735 13.7818 26.6334 13.3453 C25.8934 12.9088 25.3221 12.2861 24.9197 11.4773 C24.5172 10.6685 24.316 9.7249 24.316 8.64649 C24.316 7.55525 24.5172 6.61165 24.9197 5.81568 C25.3221 5.01972 25.8934 4.40348 26.6334 3.96699 C27.3735 3.51765 28.2368 3.29298 29.2236 3.29298 C30.2103 3.29298 31.0736 3.51765 31.8137 3.96699 C32.5537 4.40348 33.125 5.01972 33.5274 5.81568 C33.9299 6.61165 34.1311 7.55525 34.1311 8.64649 C34.1311 9.7249 33.9299 10.6685 33.5274 11.4773 C33.125 12.2861 32.5537 12.9088 31.8137 13.3453 C31.0736 13.7818 30.2103 14 29.2236 14 Z M29.2236 12.2283 C30.1064 12.2283 30.788 11.9138 31.2684 11.2847 C31.7488 10.6428 31.9889 9.76341 31.9889 8.64649 C31.9889 7.52957 31.7488 6.65658 31.2684 6.02751 C30.788 5.3856 30.1064 5.06465 29.2236 5.06465 C28.3537 5.06465 27.6721 5.3856 27.1787 6.02751 C26.6984 6.65658 26.4582 7.52957 26.4582 8.64649 C26.4582 9.76341 26.6984 10.6428 27.1787 11.2847 C27.6721 11.9138 28.3537 12.2283 29.2236 12.2283 Z" fill="#000000"/><path transform="matrix(1 0 0 1 0 0)" d="M39.4203 13.7689 C38.4336 13.7689 37.7065 13.5442 37.2392 13.0949 C36.7718 12.6456 36.5381 11.9459 36.5381 10.9959 L36.5381 1.11692 L38.6024 1.11692 L38.6024 10.8418 C38.6024 11.3168 38.7062 11.6442 38.914 11.8239 C39.1217 12.0037 39.4398 12.0935 39.8682 12.0935 L41.3483 12.0935 L41.3483 13.7689 L39.4203 13.7689 Z M34.9606 5.19945 L34.9606 3.52407 L41.3483 3.52407 L41.3483 5.19945 L34.9606 5.19945 Z" fill="#000000"/><path transform="matrix(1 0 0 1 0 0)" d="M42.9315 13.7689 L42.9315 3.52407 L44.9958 3.52407 L44.9958 13.7689 L42.9315 13.7689 Z M42.8926 2.04127 L42.8926 0 L45.0348 0 L45.0348 2.04127 L42.8926 2.04127 Z" fill="#000000"/><path transform="matrix(1 0 0 1 0 0)" d="M46.0096 13.7689 L49.7681 8.53095 L46.1653 3.52407 L48.4633 3.52407 L51.0145 7.2022 L53.4878 3.52407 L55.8442 3.52407 L52.2804 8.56946 L56 13.7689 L53.702 13.7689 L51.034 9.8597 L48.3465 13.7689 L46.0096 13.7689 Z" fill="#000000"/></svg>
        <div style={{ width: "28px", height: "28px", flexShrink: 0, borderRadius: "6px", background: "#ffffff", boxShadow: "inset 0 0 0 0.85px #e8e8e8", overflow: "hidden", position: "relative" }}>
          <svg style={{ position: "absolute", left: "6px", top: "6px", width: "16px", height: "16px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" overflow="visible"><path transform="matrix(-1 0 0 1 12 4.667)" d="M-0.53033 6.13634 C-0.823223 6.42923 -0.823223 6.9041 -0.53033 7.197 C-0.237437 7.48989 0.237437 7.48989 0.53033 7.197 L0 6.66667 L-0.53033 6.13634 Z M3.33333 3.33333 L3.86366 3.86366 C4.15656 3.57077 4.15656 3.0959 3.86366 2.803 L3.33333 3.33333 Z M0.53033 -0.53033 C0.237437 -0.823223 -0.237437 -0.823223 -0.53033 -0.53033 C-0.823223 -0.237437 -0.823223 0.237437 -0.53033 0.53033 L0 0 L0.53033 -0.53033 Z M0 6.66667 L0.53033 7.197 L3.86366 3.86366 L3.33333 3.33333 L2.803 2.803 L-0.53033 6.13634 L0 6.66667 Z M3.33333 3.33333 L3.86366 2.803 L0.53033 -0.53033 L0 0 L-0.53033 0.53033 L2.803 3.86366 L3.33333 3.33333 Z" fill="#444444"/><path transform="matrix(-1 0 0 1 7.334 4.667)" d="M-0.53033 6.13634 C-0.823223 6.42923 -0.823223 6.9041 -0.53033 7.197 C-0.237437 7.48989 0.237437 7.48989 0.53033 7.197 L0 6.66667 L-0.53033 6.13634 Z M3.33333 3.33333 L3.86366 3.86366 C4.15656 3.57077 4.15656 3.0959 3.86366 2.803 L3.33333 3.33333 Z M0.53033 -0.53033 C0.237437 -0.823223 -0.237437 -0.823223 -0.53033 -0.53033 C-0.823223 -0.237437 -0.823223 0.237437 -0.53033 0.53033 L0 0 L0.53033 -0.53033 Z M0 6.66667 L0.53033 7.197 L3.86366 3.86366 L3.33333 3.33333 L2.803 2.803 L-0.53033 6.13634 L0 6.66667 Z M3.33333 3.33333 L3.86366 2.803 L0.53033 -0.53033 L0 0 L-0.53033 0.53033 L2.803 3.86366 L3.33333 3.33333 Z" fill="#444444"/></svg>
        </div>
      </div>
      <div style={{ position: "absolute", left: "0px", top: "59px", width: "236px", height: "793px", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ alignSelf: "stretch", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "column", padding: "0px 8px 0px 8px", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", padding: "4px 0px 6px 12px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "30px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "11px", fontWeight: 500, color: "#8a8a8a", letterSpacing: "0.04em" }}>MAIN</p>
          </div>
          <div data-fu="btn" style={{ alignSelf: "stretch", height: "32px", flexShrink: 0, borderRadius: "8px", background: "#eaf1fe", overflow: "hidden", display: "flex", flexDirection: "row", padding: "0px 10px 0px 12px", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <FileShield size={16} strokeWidth={1.8} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#2563eb", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "62px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#1e3a8a", lineHeight: "20px" }}>Overview</p>
            </div>
          </div>
          <div style={{ alignSelf: "stretch", height: "32px", flexShrink: 0, borderRadius: "8px", overflow: "hidden", display: "flex", flexDirection: "row", padding: "0px 10px 0px 12px", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <Gauge size={16} strokeWidth={1.8} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#5c5c5c", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "94px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#2b2b2b", lineHeight: "20px" }}>Threat Monitor</p>
            </div>
          </div>
          <div style={{ alignSelf: "stretch", height: "32px", flexShrink: 0, borderRadius: "8px", overflow: "hidden", display: "flex", flexDirection: "row", padding: "0px 10px 0px 12px", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <Bug size={16} strokeWidth={1.8} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#5c5c5c", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "91px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#2b2b2b", lineHeight: "20px" }}>Vulnerabilities</p>
            </div>
            <div style={{ flexShrink: 0, borderRadius: "999px", background: "#fde4e4", overflow: "hidden", display: "flex", flexDirection: "row", padding: "2px 8px 2px 8px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "20px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#c42b2b", lineHeight: "16px" }}>146</p>
            </div>
          </div>
          <div style={{ alignSelf: "stretch", height: "32px", flexShrink: 0, borderRadius: "8px", overflow: "hidden", display: "flex", flexDirection: "row", padding: "0px 10px 0px 12px", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <Route size={16} strokeWidth={1.8} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#5c5c5c", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "82px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#2b2b2b", lineHeight: "20px" }}>Attack Paths</p>
            </div>
            <div style={{ flexShrink: 0, borderRadius: "999px", background: "#fde4e4", overflow: "hidden", display: "flex", flexDirection: "row", padding: "2px 8px 2px 8px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "15px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#c42b2b", lineHeight: "16px" }}>23</p>
            </div>
          </div>
          <div style={{ alignSelf: "stretch", height: "32px", flexShrink: 0, borderRadius: "8px", overflow: "hidden", display: "flex", flexDirection: "row", padding: "0px 10px 0px 12px", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <Target size={16} strokeWidth={1.8} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#5c5c5c", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "73px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#2b2b2b", lineHeight: "20px" }}>AI Pentests</p>
            </div>
          </div>
          <div style={{ alignSelf: "stretch", height: "32px", flexShrink: 0, borderRadius: "8px", overflow: "hidden", display: "flex", flexDirection: "row", padding: "0px 10px 0px 12px", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <Hammer size={16} strokeWidth={1.8} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#5c5c5c", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "83px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#2b2b2b", lineHeight: "20px" }}>Fix Requests</p>
            </div>
            <div style={{ flexShrink: 0, borderRadius: "999px", background: "#fde4e4", overflow: "hidden", display: "flex", flexDirection: "row", padding: "2px 8px 2px 8px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "13px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#c42b2b", lineHeight: "16px" }}>18</p>
            </div>
          </div>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "column", padding: "8px 0px 8px 0px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", height: "1px", flexShrink: 0, background: "#e8e8e8" }} />
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "column", padding: "0px 8px 0px 8px", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", padding: "4px 0px 6px 12px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "44px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "11px", fontWeight: 500, color: "#8a8a8a", letterSpacing: "0.04em" }}>ASSETS</p>
          </div>
          <div style={{ alignSelf: "stretch", height: "32px", flexShrink: 0, borderRadius: "8px", overflow: "hidden", display: "flex", flexDirection: "row", padding: "0px 10px 0px 12px", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <AiAgents size={16} strokeWidth={1.8} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#5c5c5c", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "62px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#2b2b2b", lineHeight: "20px" }}>AI Agents</p>
            </div>
            <div style={{ flexShrink: 0, borderRadius: "999px", background: "#e3ecff", overflow: "hidden", display: "flex", flexDirection: "row", padding: "2px 8px 2px 8px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#2f5bea", lineHeight: "16px" }}>42</p>
            </div>
          </div>
          <div style={{ alignSelf: "stretch", height: "32px", flexShrink: 0, borderRadius: "8px", overflow: "hidden", display: "flex", flexDirection: "row", padding: "0px 10px 0px 12px", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <LayoutGrid size={16} strokeWidth={1.8} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#5c5c5c", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "124px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#2b2b2b", lineHeight: "20px" }}>Applications & APIs</p>
            </div>
          </div>
          <div style={{ alignSelf: "stretch", height: "32px", flexShrink: 0, borderRadius: "8px", overflow: "hidden", display: "flex", flexDirection: "row", padding: "0px 10px 0px 12px", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <Database size={16} strokeWidth={1.8} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#5c5c5c", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "87px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#2b2b2b", lineHeight: "20px" }}>Data Sources</p>
            </div>
          </div>
          <div style={{ alignSelf: "stretch", height: "32px", flexShrink: 0, borderRadius: "8px", overflow: "hidden", display: "flex", flexDirection: "row", padding: "0px 10px 0px 12px", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <Puzzle size={16} strokeWidth={1.8} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#5c5c5c", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "97px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#2b2b2b", lineHeight: "20px" }}>Tools & Plugins</p>
            </div>
          </div>
          <div style={{ alignSelf: "stretch", height: "32px", flexShrink: 0, borderRadius: "8px", overflow: "hidden", display: "flex", flexDirection: "row", padding: "0px 10px 0px 12px", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <Key size={16} strokeWidth={1.8} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#5c5c5c", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "50px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#2b2b2b", lineHeight: "20px" }}>Secrets</p>
            </div>
            <div style={{ flexShrink: 0, borderRadius: "999px", background: "#e3ecff", overflow: "hidden", display: "flex", flexDirection: "row", padding: "2px 8px 2px 8px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "8px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#2f5bea", lineHeight: "16px" }}>9</p>
            </div>
          </div>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "column", padding: "8px 0px 8px 0px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", height: "1px", flexShrink: 0, background: "#e8e8e8" }} />
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "column", padding: "0px 8px 0px 8px", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", padding: "4px 0px 6px 12px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "80px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "11px", fontWeight: 500, color: "#8a8a8a", letterSpacing: "0.04em" }}>GOVERNANCE</p>
          </div>
          <div style={{ alignSelf: "stretch", height: "32px", flexShrink: 0, borderRadius: "8px", overflow: "hidden", display: "flex", flexDirection: "row", padding: "0px 10px 0px 12px", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <FileText size={16} strokeWidth={1.8} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#5c5c5c", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "50px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#2b2b2b", lineHeight: "20px" }}>Policies</p>
            </div>
          </div>
          <div style={{ alignSelf: "stretch", height: "32px", flexShrink: 0, borderRadius: "8px", overflow: "hidden", display: "flex", flexDirection: "row", padding: "0px 10px 0px 12px", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <Certificate size={16} strokeWidth={1.8} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#5c5c5c", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "76px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#2b2b2b", lineHeight: "20px" }}>Compliance</p>
            </div>
          </div>
          <div style={{ alignSelf: "stretch", height: "32px", flexShrink: 0, borderRadius: "8px", overflow: "hidden", display: "flex", flexDirection: "row", padding: "0px 10px 0px 12px", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <Reports size={16} strokeWidth={1.8} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#5c5c5c", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "51px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#2b2b2b", lineHeight: "20px" }}>Reports</p>
            </div>
          </div>
          <div style={{ alignSelf: "stretch", height: "32px", flexShrink: 0, borderRadius: "8px", overflow: "hidden", display: "flex", flexDirection: "row", padding: "0px 10px 0px 12px", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <PlugConnected size={16} strokeWidth={1.8} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#5c5c5c", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "77px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#2b2b2b", lineHeight: "20px" }}>Integrations</p>
            </div>
          </div>
          <div style={{ alignSelf: "stretch", height: "32px", flexShrink: 0, borderRadius: "8px", overflow: "hidden", display: "flex", flexDirection: "row", padding: "0px 10px 0px 12px", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <Users size={16} strokeWidth={1.8} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#5c5c5c", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "97px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#2b2b2b", lineHeight: "20px" }}>Team & Access</p>
            </div>
          </div>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "column", padding: "8px 0px 8px 0px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", height: "1px", flexShrink: 0, background: "#e8e8e8" }} />
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "column", padding: "0px 8px 0px 8px", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", padding: "4px 0px 6px 12px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "38px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "11px", fontWeight: 500, color: "#8a8a8a", letterSpacing: "0.04em" }}>OTHER</p>
          </div>
          <div style={{ alignSelf: "stretch", height: "32px", flexShrink: 0, borderRadius: "8px", overflow: "hidden", display: "flex", flexDirection: "row", padding: "0px 10px 0px 12px", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <Book size={16} strokeWidth={1.8} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#5c5c5c", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "107px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#2b2b2b", lineHeight: "20px" }}>Knowledge Base</p>
            </div>
          </div>
          <div style={{ alignSelf: "stretch", height: "32px", flexShrink: 0, borderRadius: "8px", overflow: "hidden", display: "flex", flexDirection: "row", padding: "0px 10px 0px 12px", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <Settings size={16} strokeWidth={1.8} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#5c5c5c", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "54px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#2b2b2b", lineHeight: "20px" }}>Settings</p>
            </div>
          </div>
          <div style={{ alignSelf: "stretch", height: "32px", flexShrink: 0, borderRadius: "8px", overflow: "hidden", display: "flex", flexDirection: "row", padding: "0px 10px 0px 12px", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <Support size={16} strokeWidth={1.8} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#5c5c5c", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "52px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#2b2b2b", lineHeight: "20px" }}>Support</p>
            </div>
          </div>
        </div>
      </div>
      <svg style={{ position: "absolute", left: "0px", top: "868px", width: "236px", height: "1px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="236" height="1" viewBox="0 0 236 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 -0.5 L0 0 L236 0 L236 -0.5 L236 -1 L0 -1 L0 -0.5 Z" fill="#e8e8e8"/></svg>
      <div style={{ position: "absolute", left: "0px", top: "869px", width: "236px", height: "176px", background: "#fafafa", boxShadow: "0px 0px 20px 4px rgba(0, 0, 0, 0.01)", overflow: "hidden" }}>
        <div style={{ position: "absolute", left: "20px", top: "20px", width: "196px", height: "135px", display: "flex", flexDirection: "column", gap: "21px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "14px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ alignSelf: "stretch", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "18px", fontWeight: 500, color: "#000000", lineHeight: "1.399999976158142", letterSpacing: "-0.02em", textBox: "trim-both cap alphabetic", height: "13px" }}>Upgrade to Pro</p>
            <p style={{ width: "178px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 400, color: "#000000", letterSpacing: "-0.02em" }}>Unlock advanced pentests and more agents.</p>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "14px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "196px", flexShrink: 0, borderRadius: "4px", background: "#e7e7e7", overflow: "hidden", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "87px", flexShrink: 0, borderRadius: "4px", background: "linear-gradient(90deg, #1666f4 0%, #5f99ff 100%)", display: "flex", flexDirection: "row", padding: "6px 12px 6px 12px", gap: "4px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }} />
            </div>
            <div style={{ width: "196px", height: "34px", flexShrink: 0, borderRadius: "11px", boxShadow: "inset 0 0 0 1px #ececec", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "194px", height: "32px", flexShrink: 0, opacity: 0.8, borderRadius: "10px", display: "flex", flexDirection: "row", padding: "6px 6px 6px 6px", gap: "4px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <Sparkles size={16} strokeWidth={2.21} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#000000", display: "block" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "90px", fontFamily: "'Inter'", fontSize: "14px", fontWeight: 500, color: "#000000", lineHeight: "16px" }}>Upgrade now</p>
              </div>
            </div>
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
