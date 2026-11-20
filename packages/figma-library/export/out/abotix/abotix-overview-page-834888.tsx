"use client";
// Overview page (abotix, Templates) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist, Inter. Icons: Ingot Icons.
import { useEffect, useRef } from "react";
import { AiAgents, AlertTriangle, Bell, Book, Box, Bug, CalendarCheck, Certificate, Check, ChevronLeft, ChevronRight, Circle, Command, Database, Eye, FileShield, FileText, Gauge, Hammer, Key, LayoutDashboard, LayoutGrid, Lock, PlugConnected, Plus, Puzzle, Reports, Route, Search, Server, Settings, Share, Shield, Sparkles, Stack2, Support, Syringe, Target, Users, Wrench } from "ingotui-icons/react/stroke-rounded";
import { Category as CategorySolid, PlayerPlay as PlayerPlaySolid } from "ingotui-icons/react/solid";

export function OverviewPage() {
  const fuRef = useRef<any>(null);
  useEffect(() => fuInteract(fuRef.current), []);
  return (
    <div ref={fuRef} style={{ width: "1440px", height: "1080px", background: "#fafafa", overflow: "hidden", position: "relative" }}>
      <div style={{ position: "absolute", left: "20px", top: "349.4px", width: "30px", height: "282.2px", display: "flex", flexDirection: "column", gap: "19px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ width: "30px", height: "30px", flexShrink: 0, borderRadius: "8px", background: "#484ff5", boxShadow: "0px 0.44px 0.44px 0px rgba(42, 42, 42, 0.08), 0px 1.31px 1.75px -0.44px rgba(42, 42, 42, 0.14), inset 0px -1.31px 1.31px 0px rgba(255, 255, 255, 0.1), inset 0px 1.31px 1.31px 0px rgba(255, 255, 255, 0.1), inset 0px 0px 0px 0.44px rgba(255, 255, 255, 0.2)", overflow: "hidden", position: "relative" }}>
          <div style={{ position: "absolute", left: "0px", top: "0px", width: "57px", height: "57px", background: "linear-gradient(177.6deg, rgba(255, 255, 255, 0) 2%, rgba(255, 255, 255, 0.12) 98.2%)", overflow: "hidden" }} />
          <div style={{ position: "absolute", left: "1px", top: "1px", width: "28px", height: "28px", borderRadius: "8px", background: "#484ff5", display: "flex", flexDirection: "row", padding: "6px 6px 6px 6px", gap: "4px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <LayoutDashboard size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#ffffff", display: "block" }} />
          </div>
        </div>
        <div style={{ width: "18px", height: "233.2px", flexShrink: 0, position: "relative" }}>
          <Circle size={18} strokeWidth={1.8} style={{ position: "absolute", left: "0px", top: "179.6px", width: "18px", height: "18px", color: "#666666", display: "block", flexShrink: 0 }} />
          <Circle size={18} strokeWidth={1.8} style={{ position: "absolute", left: "0px", top: "143.6px", width: "18px", height: "18px", color: "#666666", display: "block", flexShrink: 0 }} />
          <Circle size={18} strokeWidth={1.8} style={{ position: "absolute", left: "0px", top: "107.2px", width: "18px", height: "18px", color: "#666666", display: "block", flexShrink: 0 }} />
          <Circle size={18} strokeWidth={1.8} style={{ position: "absolute", left: "0px", top: "71.2px", width: "18px", height: "18px", color: "#666666", display: "block", flexShrink: 0 }} />
          <Circle size={18} strokeWidth={1.8} style={{ position: "absolute", left: "0px", top: "215.2px", width: "18px", height: "18px", color: "#666666", display: "block", flexShrink: 0 }} />
          <Circle size={18} strokeWidth={1.8} style={{ position: "absolute", left: "0px", top: "35.2px", width: "18px", height: "18px", color: "#666666", display: "block", flexShrink: 0 }} />
          <Circle size={18} strokeWidth={1.8} style={{ position: "absolute", left: "0px", top: "0px", width: "18px", height: "18px", color: "#666666", display: "block", flexShrink: 0 }} />
        </div>
      </div>
      <div style={{ position: "absolute", left: "70px", top: "20px", width: "1350px", height: "1045px", borderRadius: "14px", background: "#fafafa", boxShadow: "0px 0px 1px 0px rgba(0, 0, 0, 0.34)", overflow: "hidden" }}>
        <div style={{ position: "absolute", left: "0px", top: "0px", width: "236px", height: "1045px", borderRadius: "14px", background: "#fafafa", overflow: "hidden" }}>
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
        <svg style={{ position: "absolute", left: "238px", top: "72px", width: "1111px", height: "1px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="1111" height="1" viewBox="0 0 1111 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 -0.5 L0 0 L1111 0 L1111 -0.5 L1111 -1 L0 -1 L0 -0.5 Z" fill="#ebebeb"/></svg>
        <svg style={{ position: "absolute", left: "238px", top: "160px", width: "1111px", height: "1px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="1111" height="1" viewBox="0 0 1111 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 -0.5 L0 0 L1111 0 L1111 -0.5 L1111 -1 L0 -1 L0 -0.5 Z" fill="#ebebeb"/></svg>
        <svg style={{ position: "absolute", left: "236px", top: "-23px", width: "1px", height: "1048px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="1" height="1048" viewBox="0 0 1 1048" fill="none" overflow="visible"><path transform="matrix(0 1 -1 0 0 0)" d="M0 -0.5 L0 0 L1048 0 L1048 -0.5 L1048 -1 L0 -1 L0 -0.5 Z" fill="#ebebeb"/></svg>
        <div style={{ position: "absolute", left: "236px", top: "0px", width: "1112px", height: "72px" }}>
          <div style={{ position: "absolute", left: "20px", top: "20px", width: "1072px", height: "32px", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "13px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <CategorySolid size={14} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#b3b3b3", display: "block" }} />
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "72px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#b3b3b3" }}>Workspace</p>
                </div>
                <ChevronRight size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#686765", display: "block" }} />
                <div style={{ flexShrink: 0, borderRadius: "6px", background: "#f3f3f3", display: "flex", flexDirection: "row", padding: "4px 10px 4px 10px", gap: "10px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "71px", lineHeight: "21px", fontFamily: "'Geist'", fontSize: "16px", fontWeight: 400, color: "#666d80", letterSpacing: "0.02em" }}>Overview</p>
                </div>
              </div>
              <div style={{ width: "295px", height: "32px", flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e8e8e8", position: "relative" }}>
                <div style={{ position: "absolute", left: "8px", top: "7px", width: "223px", height: "18px", display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <Search size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#979797", display: "block" }} />
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "54px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#979797" }}>Search…</p>
                </div>
                <div style={{ position: "absolute", left: "237px", top: "2px", width: "56px", height: "28px", borderRadius: "8px", background: "#fafafa", overflow: "hidden", display: "flex", flexDirection: "row", padding: "8px 12px 8px 12px", gap: "1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <Command size={12} strokeWidth={3} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#555555", display: "block" }} />
                  <Plus size={10} strokeWidth={2.4} style={{ width: "10px", height: "10px", flexShrink: 0, color: "#555555", display: "block" }} />
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "8px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#555555", textBox: "trim-both cap alphabetic", height: "9px" }}>K</p>
                </div>
              </div>
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 0.85px #e8e8e8", overflow: "hidden", position: "relative" }}>
                  <Bell size={19.2} strokeWidth={1.6} style={{ position: "absolute", left: "6.4px", top: "6.23px", width: "19.2px", height: "20.4px", color: "#686765", display: "block", flexShrink: 0 }} />
                </div>
                <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 0.63px #e8e8e8", overflow: "hidden", position: "relative" }}>
                  <div style={{ position: "absolute", left: "0px", top: "0px", width: "32px", height: "32px", borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 0.63px #e8e8e8", overflow: "hidden" }}>
                    <div style={{ position: "absolute", left: "0px", top: "0px", width: "32px", height: "32px", background: "url('https://ingotui.com/library-img/232efcbc3e38653b836fdc20a462210bf2f00cbb.png') center / cover no-repeat" }} />
                  </div>
                </div>
              </div>
              <div style={{ width: "64px", height: "32px", flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ededed", overflow: "hidden", position: "relative" }}>
                <div style={{ position: "absolute", left: "34px", top: "2px", width: "28px", height: "28px", borderRadius: "8px", background: "radial-gradient(#000000 0%, #161616 46%, #444444 100%)", overflow: "hidden" }}>
                  <svg style={{ position: "absolute", left: "6px", top: "6.17px", width: "16px", height: "16px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 1.5 1.5)" d="M6 1 L6 0.5 C6 0.367392 6.05268 0.240215 6.14645 0.146447 C6.24021 0.0526784 6.36739 2.22045e-16 6.5 0 C6.63261 2.22045e-16 6.75979 0.0526784 6.85355 0.146447 C6.94732 0.240215 7 0.367392 7 0.5 L7 1 C7 1.13261 6.94732 1.25979 6.85355 1.35355 C6.75979 1.44732 6.63261 1.5 6.5 1.5 C6.36739 1.5 6.24021 1.44732 6.14645 1.35355 C6.05268 1.25979 6 1.13261 6 1 Z M6.5 2.5 C5.70887 2.5 4.93552 2.7346 4.27772 3.17412 C3.61992 3.61365 3.10723 4.23836 2.80448 4.96927 C2.50173 5.70017 2.42252 6.50444 2.57686 7.28036 C2.7312 8.05628 3.11216 8.76902 3.67157 9.32843 C4.23098 9.88784 4.94371 10.2688 5.71964 10.4231 C6.49556 10.5775 7.29983 10.4983 8.03073 10.1955 C8.76164 9.89277 9.38635 9.38008 9.82588 8.72228 C10.2654 8.06448 10.5 7.29113 10.5 6.5 C10.4988 5.43949 10.077 4.42275 9.32715 3.67285 C8.57725 2.92296 7.56051 2.50116 6.5 2.5 Z M2.14625 2.85375 C2.24007 2.94757 2.36732 3.00028 2.5 3.00028 C2.63268 3.00028 2.75993 2.94757 2.85375 2.85375 C2.94757 2.75993 3.00028 2.63268 3.00028 2.5 C3.00028 2.36732 2.94757 2.24007 2.85375 2.14625 L2.35375 1.64625 C2.25993 1.55243 2.13268 1.49972 2 1.49972 C1.86732 1.49972 1.74007 1.55243 1.64625 1.64625 C1.55243 1.74007 1.49972 1.86732 1.49972 2 C1.49972 2.13268 1.55243 2.25993 1.64625 2.35375 L2.14625 2.85375 Z M2.14625 10.1462 L1.64625 10.6462 C1.55243 10.7401 1.49972 10.8673 1.49972 11 C1.49972 11.1327 1.55243 11.2599 1.64625 11.3538 C1.74007 11.4476 1.86732 11.5003 2 11.5003 C2.13268 11.5003 2.25993 11.4476 2.35375 11.3538 L2.85375 10.8538 C2.90021 10.8073 2.93706 10.7521 2.9622 10.6914 C2.98734 10.6308 3.00028 10.5657 3.00028 10.5 C3.00028 10.4343 2.98734 10.3692 2.9622 10.3086 C2.93706 10.2479 2.90021 10.1927 2.85375 10.1462 C2.8073 10.0998 2.75214 10.0629 2.69145 10.0378 C2.63075 10.0127 2.5657 9.99972 2.5 9.99972 C2.4343 9.99972 2.36925 10.0127 2.30855 10.0378 C2.24786 10.0629 2.19271 10.0998 2.14625 10.1462 Z M10.5 3 C10.5657 3.00005 10.6307 2.98716 10.6914 2.96207 C10.7521 2.93697 10.8073 2.90017 10.8538 2.85375 L11.3538 2.35375 C11.4476 2.25993 11.5003 2.13268 11.5003 2 C11.5003 1.86732 11.4476 1.74007 11.3538 1.64625 C11.2599 1.55243 11.1327 1.49972 11 1.49972 C10.8673 1.49972 10.7401 1.55243 10.6462 1.64625 L10.1462 2.14625 C10.0762 2.21618 10.0286 2.3053 10.0092 2.40235 C9.98991 2.49939 9.99981 2.59998 10.0377 2.6914 C10.0756 2.78281 10.1397 2.86092 10.222 2.91586 C10.3043 2.9708 10.4011 3.00008 10.5 3 Z M10.8538 10.1462 C10.7599 10.0524 10.6327 9.99972 10.5 9.99972 C10.3673 9.99972 10.2401 10.0524 10.1462 10.1462 C10.0524 10.2401 9.99972 10.3673 9.99972 10.5 C9.99972 10.6327 10.0524 10.7599 10.1462 10.8538 L10.6462 11.3538 C10.6927 11.4002 10.7479 11.4371 10.8086 11.4622 C10.8692 11.4873 10.9343 11.5003 11 11.5003 C11.0657 11.5003 11.1308 11.4873 11.1914 11.4622 C11.2521 11.4371 11.3073 11.4002 11.3538 11.3538 C11.4002 11.3073 11.4371 11.2521 11.4622 11.1914 C11.4873 11.1308 11.5003 11.0657 11.5003 11 C11.5003 10.9343 11.4873 10.8692 11.4622 10.8086 C11.4371 10.7479 11.4002 10.6927 11.3538 10.6462 L10.8538 10.1462 Z M1 6 L0.5 6 C0.367392 6 0.240215 6.05268 0.146447 6.14645 C0.0526784 6.24021 4.44089e-16 6.36739 0 6.5 C2.22045e-16 6.63261 0.0526784 6.75979 0.146447 6.85355 C0.240215 6.94732 0.367392 7 0.5 7 L1 7 C1.13261 7 1.25979 6.94732 1.35355 6.85355 C1.44732 6.75979 1.5 6.63261 1.5 6.5 C1.5 6.36739 1.44732 6.24021 1.35355 6.14645 C1.25979 6.05268 1.13261 6 1 6 Z M6.5 11.5 C6.36739 11.5 6.24021 11.5527 6.14645 11.6464 C6.05268 11.7402 6 11.8674 6 12 L6 12.5 C6 12.6326 6.05268 12.7598 6.14645 12.8536 C6.24021 12.9473 6.36739 13 6.5 13 C6.63261 13 6.75979 12.9473 6.85355 12.8536 C6.94732 12.7598 7 12.6326 7 12.5 L7 12 C7 11.8674 6.94732 11.7402 6.85355 11.6464 C6.75979 11.5527 6.63261 11.5 6.5 11.5 Z M12.5 6 L12 6 C11.8674 6 11.7402 6.05268 11.6464 6.14645 C11.5527 6.24021 11.5 6.36739 11.5 6.5 C11.5 6.63261 11.5527 6.75979 11.6464 6.85355 C11.7402 6.94732 11.8674 7 12 7 L12.5 7 C12.6326 7 12.7598 6.94732 12.8536 6.85355 C12.9473 6.75979 13 6.63261 13 6.5 C13 6.36739 12.9473 6.24021 12.8536 6.14645 C12.7598 6.05268 12.6326 6 12.5 6 Z" fill="#ffffff"/></svg>
                </div>
                <svg style={{ position: "absolute", left: "2px", top: "4px", width: "24px", height: "24px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 2.85 3.2)" d="M17.9497 9.9 L18.9441 10.0056 C18.976 9.7052 18.8704 9.40649 18.6568 9.19289 C18.4432 8.97929 18.1445 8.87369 17.8441 8.90559 L17.9497 9.9 Z M8.04969 0 L9.0441 0.10559 C9.07599 -0.194798 8.9704 -0.493506 8.75679 -0.707107 C8.54319 -0.920707 8.24449 -1.02631 7.9441 -0.99441 L8.04969 0 Z M17.9497 9.9 L17.8441 8.90559 C16.6576 9.03158 15.4579 8.89056 14.3329 8.49287 L13.9996 9.43569 L13.6663 10.3785 C15.0725 10.8756 16.5721 11.0519 18.0553 10.8944 L17.9497 9.9 Z M13.9996 9.43569 L14.3329 8.49287 C13.208 8.09518 12.1862 7.45088 11.3425 6.60717 L10.6354 7.31427 L9.92831 8.02138 C10.9829 9.07602 12.2601 9.88139 13.6663 10.3785 L13.9996 9.43569 Z M10.6354 7.31427 L11.3425 6.60717 C10.4988 5.76346 9.85451 4.7417 9.45682 3.61674 L8.514 3.95004 L7.57118 4.28335 C8.0683 5.68955 8.87367 6.96674 9.92831 8.02138 L10.6354 7.31427 Z M8.514 3.95004 L9.45682 3.61674 C9.05913 2.49178 8.91811 1.29211 9.0441 0.10559 L8.04969 0 L7.05528 -0.10559 C6.89779 1.37756 7.07406 2.87715 7.57118 4.28335 L8.514 3.95004 Z M8.04969 0 L7.9441 -0.99441 C6.06685 -0.795076 4.28436 -0.0684364 2.80278 1.10148 L3.4225 1.8863 L4.04222 2.67112 C5.22749 1.73519 6.65348 1.15388 8.15528 0.99441 L8.04969 0 Z M3.4225 1.8863 L2.80278 1.10148 C1.32119 2.27139 0.201017 3.83679 -0.428194 5.61665 L0.514625 5.94996 L1.45744 6.28326 C1.96081 4.85937 2.85695 3.60705 4.04222 2.67112 L3.4225 1.8863 Z M0.514625 5.94996 L-0.428194 5.61665 C-1.05741 7.39651 -1.16996 9.31812 -0.752832 11.1593 L0.222451 10.9383 L1.19773 10.7174 C0.864034 9.24443 0.954075 7.70715 1.45744 6.28326 L0.514625 5.94996 Z M0.222451 10.9383 L-0.752832 11.1593 C-0.335707 13.0004 0.594054 14.6859 1.92893 16.0208 L2.63604 15.3136 L3.34315 14.6065 C2.27524 13.5386 1.53143 12.1903 1.19773 10.7174 L0.222451 10.9383 Z M2.63604 15.3136 L1.92893 16.0208 C3.26381 17.3556 4.94928 18.2854 6.79042 18.7025 L7.01138 17.7272 L7.23234 16.752 C5.75942 16.4183 4.41105 15.6744 3.34315 14.6065 L2.63604 15.3136 Z M7.01138 17.7272 L6.79042 18.7025 C8.63157 19.1196 10.5532 19.0071 12.333 18.3779 L11.9997 17.4351 L11.6664 16.4922 C10.2425 16.9956 8.70525 17.0857 7.23234 16.752 L7.01138 17.7272 Z M11.9997 17.4351 L12.333 18.3779 C14.1129 17.7487 15.6783 16.6285 16.8482 15.1469 L16.0634 14.5272 L15.2786 13.9075 C14.3426 15.0927 13.0903 15.9889 11.6664 16.4922 L11.9997 17.4351 Z M16.0634 14.5272 L16.8482 15.1469 C18.0181 13.6653 18.7448 11.8828 18.9441 10.0056 L17.9497 9.9 L16.9553 9.79441 C16.7958 11.2962 16.2145 12.7222 15.2786 13.9075 L16.0634 14.5272 Z" fill="#000000"/></svg>
              </div>
            </div>
          </div>
        </div>
        <div style={{ position: "absolute", left: "256px", top: "92px", width: "1074px", height: "48px", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-end", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "86px", lineHeight: "26px", fontFamily: "'Geist'", fontSize: "20px", fontWeight: 600, color: "#202020", letterSpacing: "-0.03em" }}>Overview</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "171px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#747474", letterSpacing: "-0.02em" }}>1,284 risky actions blocked</p>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div data-fu="btn" style={{ width: "143px", height: "34px", flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ebebeb", display: "flex", flexDirection: "row", padding: "8px 8px 8px 8px", gap: "6px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <CalendarCheck size={18} strokeWidth={1.8} style={{ width: "18px", height: "18px", flexShrink: 0, color: "#353537", display: "block" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "83px", lineHeight: "17px", fontFamily: "'Inter'", fontSize: "14px", fontWeight: 500, color: "#000000", letterSpacing: "-0.02em" }}>Last 30 days</p>
                <div style={{ position: "relative", flexShrink: 0, alignSelf: "flex-start", marginTop: "2px", width: "14px", height: "14px" }}>
                  <ChevronLeft size={14} strokeWidth={2.57} style={{ position: "absolute", left: "0px", top: "14px", width: "14px", height: "14px", transform: "rotate(-90deg)", transformOrigin: "top left", color: "#353537", display: "block", flexShrink: 0 }} />
                </div>
              </div>
              <div data-fu="btn" style={{ width: "134px", height: "34px", flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ebebeb", display: "flex", flexDirection: "row", padding: "8px 8px 8px 8px", gap: "6px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "98px", lineHeight: "17px", fontFamily: "'Inter'", fontSize: "14px", fontWeight: 500, color: "#000000", letterSpacing: "-0.02em" }}>All workspaces</p>
                <div style={{ position: "relative", flexShrink: 0, alignSelf: "flex-start", marginTop: "2px", width: "14px", height: "14px" }}>
                  <ChevronLeft size={14} strokeWidth={2.57} style={{ position: "absolute", left: "0px", top: "14px", width: "14px", height: "14px", transform: "rotate(-90deg)", transformOrigin: "top left", color: "#353537", display: "block", flexShrink: 0 }} />
                </div>
              </div>
              <div data-fu="btn" style={{ width: "96px", height: "34px", flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ebebeb", display: "flex", flexDirection: "row", padding: "8px 8px 8px 8px", gap: "6px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "60px", lineHeight: "17px", fontFamily: "'Inter'", fontSize: "14px", fontWeight: 500, color: "#000000", letterSpacing: "-0.02em" }}>All teams</p>
                <div style={{ position: "relative", flexShrink: 0, alignSelf: "flex-start", marginTop: "2px", width: "14px", height: "14px" }}>
                  <ChevronLeft size={14} strokeWidth={2.57} style={{ position: "absolute", left: "0px", top: "14px", width: "14px", height: "14px", transform: "rotate(-90deg)", transformOrigin: "top left", color: "#353537", display: "block", flexShrink: 0 }} />
                </div>
              </div>
              <div data-fu="btn" style={{ width: "96px", height: "34px", flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ebebeb", display: "flex", flexDirection: "row", padding: "8px 8px 8px 8px", gap: "6px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "60px", lineHeight: "17px", fontFamily: "'Inter'", fontSize: "14px", fontWeight: 500, color: "#000000", letterSpacing: "-0.02em" }}>Compare</p>
                <div style={{ position: "relative", flexShrink: 0, alignSelf: "flex-start", marginTop: "2px", width: "14px", height: "14px" }}>
                  <ChevronLeft size={14} strokeWidth={2.57} style={{ position: "absolute", left: "0px", top: "14px", width: "14px", height: "14px", transform: "rotate(-90deg)", transformOrigin: "top left", color: "#353537", display: "block", flexShrink: 0 }} />
                </div>
              </div>
              <div data-fu="btn" style={{ height: "34px", flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ebebeb", display: "flex", flexDirection: "row", padding: "8px 8px 8px 8px", gap: "6px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <Share size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#808897", display: "block" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "38px", lineHeight: "17px", fontFamily: "'Inter'", fontSize: "14px", fontWeight: 500, color: "#000000", letterSpacing: "-0.02em" }}>Share</p>
              </div>
              <div data-fu="btn" style={{ width: "144px", height: "34px", flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ebebeb", display: "flex", flexDirection: "row", padding: "8px 8px 8px 8px", gap: "6px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "108px", lineHeight: "17px", fontFamily: "'Inter'", fontSize: "14px", fontWeight: 500, color: "#000000", letterSpacing: "-0.02em" }}>All environments</p>
                <div style={{ position: "relative", flexShrink: 0, alignSelf: "flex-start", marginTop: "2px", width: "14px", height: "14px" }}>
                  <ChevronLeft size={14} strokeWidth={2.57} style={{ position: "absolute", left: "0px", top: "14px", width: "14px", height: "14px", transform: "rotate(-90deg)", transformOrigin: "top left", color: "#353537", display: "block", flexShrink: 0 }} />
                </div>
              </div>
            </div>
            <div style={{ height: "34px", flexShrink: 0, borderRadius: "11px", background: "#347bf9", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ height: "32px", flexShrink: 0, opacity: 0.8, borderRadius: "10px", background: "linear-gradient(0deg, #0f61f3 26.7%, #5895ff 95.3%)", display: "flex", flexDirection: "row", padding: "6px 6px 6px 6px", gap: "4px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <PlayerPlaySolid size={18} style={{ width: "18px", height: "18px", flexShrink: 0, color: "#ffffff", display: "block" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "99px", fontFamily: "'Inter'", fontSize: "14px", fontWeight: 500, color: "#ffffff", lineHeight: "16px" }}>Run AI Pentest</p>
              </div>
            </div>
          </div>
        </div>
        <div style={{ position: "absolute", left: "256px", top: "180px", width: "1074px", height: "208px", borderRadius: "8px", background: "#fafafa", display: "flex", flexDirection: "row", gap: "14px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div data-fu="card" style={{ width: "258px", height: "208px", flexShrink: 0, borderRadius: "8px", background: "#fafafa", boxShadow: "inset 0 0 0 1px #ececec", overflow: "hidden", position: "relative" }}>
            <div style={{ position: "absolute", left: "16px", top: "16px", width: "226px", height: "176px", display: "flex", flexDirection: "column", gap: "14px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "135.8px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "18px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <Circle size={16} strokeWidth={2} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#141b34", display: "block" }} />
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "128px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#555555", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Protected AI Agents</p>
                </div>
                <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "16px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <p style={{ alignSelf: "stretch", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "22px", fontWeight: 500, color: "#111111", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "16px" }}>42</p>
                  <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                      <svg style={{ width: "10px", height: "9px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="10" height="9" viewBox="0 0 10 9" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M4.11605 0.514286 C4.50892 -0.171429 5.49108 -0.171429 5.88395 0.514286 L9.86173 7.45714 C10.2546 8.14286 9.76351 9 8.97778 9 L1.02222 9 C0.236487 9 -0.254597 8.14286 0.13827 7.45714 L4.11605 0.514286 Z" fill="#2db475"/></svg>
                      <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "39px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#2db475", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>+8.2%</p>
                    </div>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "130px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#555555", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>vs. previous 30 days</p>
                  </div>
                </div>
              </div>
              <svg style={{ width: "226px", height: "1px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible", marginBottom: "-1px" }} xmlns="http://www.w3.org/2000/svg" width="226" height="1" viewBox="0 0 226 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0L226 0" fill="none" stroke="#dddddd" strokeWidth="1" strokeDasharray="3 3" strokeLinecap="butt"/></svg>
              <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "18px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div data-fu="row" style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <Server size={12} strokeWidth={2.2} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#666666", display: "block" }} />
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "70px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#2d2d2d", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Production</p>
                  </div>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#2d2d2d", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>28</p>
                </div>
                <div data-fu="row" style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <Stack2 size={12} strokeWidth={2.2} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#666666", display: "block" }} />
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "50px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#2d2d2d", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Staging</p>
                  </div>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "9px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#2d2d2d", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>9</p>
                </div>
                <div data-fu="row" style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <Box size={12} strokeWidth={2.2} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#666666", display: "block" }} />
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "57px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#2d2d2d", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Sandbox</p>
                  </div>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "9px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#2d2d2d", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>5</p>
                </div>
              </div>
            </div>
          </div>
          <div data-fu="card" style={{ width: "258px", height: "208px", flexShrink: 0, borderRadius: "8px", background: "#fafafa", boxShadow: "inset 0 0 0 1px #ececec", overflow: "hidden", position: "relative" }}>
            <div style={{ position: "absolute", left: "16px", top: "16px", width: "226px", height: "176px", display: "flex", flexDirection: "column", gap: "14px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "135.8px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "18px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <Circle size={16} strokeWidth={2} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#141b34", display: "block" }} />
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "139px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#555555", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Critical Vulnerabilities</p>
                </div>
                <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "16px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <p style={{ alignSelf: "stretch", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "22px", fontWeight: 500, color: "#111111", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "16px" }}>18</p>
                  <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                      <svg style={{ width: "10px", height: "9px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="10" height="9" viewBox="0 0 10 9" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M4.11605 0.514286 C4.50892 -0.171429 5.49108 -0.171429 5.88395 0.514286 L9.86173 7.45714 C10.2546 8.14286 9.76351 9 8.97778 9 L1.02222 9 C0.236487 9 -0.254597 8.14286 0.13827 7.45714 L4.11605 0.514286 Z" fill="#e5484d"/></svg>
                      <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "45px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#e5484d", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>+12.5%</p>
                    </div>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "130px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#555555", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>vs. previous 30 days</p>
                  </div>
                </div>
              </div>
              <svg style={{ width: "226px", height: "1px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible", marginBottom: "-1px" }} xmlns="http://www.w3.org/2000/svg" width="226" height="1" viewBox="0 0 226 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0L226 0" fill="none" stroke="#dddddd" strokeWidth="1" strokeDasharray="3 3" strokeLinecap="butt"/></svg>
              <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "18px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div data-fu="row" style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <AlertTriangle size={12} strokeWidth={2.2} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#666666", display: "block" }} />
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "35px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#2d2d2d", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Open</p>
                  </div>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "9px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#2d2d2d", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>9</p>
                </div>
                <div data-fu="row" style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <Eye size={12} strokeWidth={2.2} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#666666", display: "block" }} />
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "62px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#2d2d2d", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>In Review</p>
                  </div>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "9px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#2d2d2d", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>5</p>
                </div>
                <div data-fu="row" style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <Check size={12} strokeWidth={2.2} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#666666", display: "block" }} />
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "35px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#2d2d2d", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Fixed</p>
                  </div>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "9px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#2d2d2d", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>4</p>
                </div>
              </div>
            </div>
          </div>
          <div data-fu="card" style={{ width: "258px", height: "208px", flexShrink: 0, borderRadius: "8px", background: "#fafafa", boxShadow: "inset 0 0 0 1px #ececec", overflow: "hidden", position: "relative" }}>
            <div style={{ position: "absolute", left: "16px", top: "16px", width: "226px", height: "176px", display: "flex", flexDirection: "column", gap: "14px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "135.8px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "18px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <Circle size={16} strokeWidth={2} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#141b34", display: "block" }} />
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "143px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#555555", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Blocked Risky Actions</p>
                </div>
                <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "16px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <p style={{ alignSelf: "stretch", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "22px", fontWeight: 500, color: "#111111", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "16px" }}>1,284</p>
                  <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                      <svg style={{ width: "10px", height: "9px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="10" height="9" viewBox="0 0 10 9" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M4.11605 0.514286 C4.50892 -0.171429 5.49108 -0.171429 5.88395 0.514286 L9.86173 7.45714 C10.2546 8.14286 9.76351 9 8.97778 9 L1.02222 9 C0.236487 9 -0.254597 8.14286 0.13827 7.45714 L4.11605 0.514286 Z" fill="#2db475"/></svg>
                      <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "45px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#2db475", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>+12.3%</p>
                    </div>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "130px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#555555", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>vs. previous 30 days</p>
                  </div>
                </div>
              </div>
              <svg style={{ width: "226px", height: "1px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible", marginBottom: "-1px" }} xmlns="http://www.w3.org/2000/svg" width="226" height="1" viewBox="0 0 226 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0L226 0" fill="none" stroke="#dddddd" strokeWidth="1" strokeDasharray="3 3" strokeLinecap="butt"/></svg>
              <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "18px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div data-fu="row" style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <Syringe size={12} strokeWidth={2.2} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#666666", display: "block" }} />
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "106px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#2d2d2d", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Prompt Injection</p>
                  </div>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "23px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#2d2d2d", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>512</p>
                </div>
                <div data-fu="row" style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <Lock size={12} strokeWidth={2.2} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#666666", display: "block" }} />
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "143px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#2d2d2d", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Sensitive Data Access</p>
                  </div>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "27px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#2d2d2d", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>402</p>
                </div>
                <div data-fu="row" style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <Wrench size={12} strokeWidth={2.2} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#666666", display: "block" }} />
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "76px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#2d2d2d", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Tool Misuse</p>
                  </div>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "25px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#2d2d2d", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>370</p>
                </div>
              </div>
            </div>
          </div>
          <div data-fu="card" style={{ width: "258px", height: "208px", flexShrink: 0, borderRadius: "8px", background: "#fafafa", boxShadow: "inset 0 0 0 1px #ececec", overflow: "hidden", position: "relative" }}>
            <div style={{ position: "absolute", left: "16px", top: "16px", width: "226px", height: "176px", display: "flex", flexDirection: "column", gap: "14px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "135.8px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "18px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <Circle size={16} strokeWidth={2} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#141b34", display: "block" }} />
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "147px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#555555", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Security Posture Score</p>
                </div>
                <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "16px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <p style={{ alignSelf: "stretch", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "22px", fontWeight: 500, color: "#111111", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "16px" }}>
                    <span style={{ fontFamily: "'Geist'", fontSize: "22px", fontWeight: 500, color: "#111111", lineHeight: "1.100000023841858" }}>84</span>
                    <span style={{ fontFamily: "'Geist'", fontSize: "16px", fontWeight: 500, color: "#555555", lineHeight: "1.100000023841858" }}>/100</span>
                  </p>
                  <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                      <svg style={{ width: "10px", height: "9px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="10" height="9" viewBox="0 0 10 9" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M4.11605 0.514286 C4.50892 -0.171429 5.49108 -0.171429 5.88395 0.514286 L9.86173 7.45714 C10.2546 8.14286 9.76351 9 8.97778 9 L1.02222 9 C0.236487 9 -0.254597 8.14286 0.13827 7.45714 L4.11605 0.514286 Z" fill="#2db475"/></svg>
                      <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "41px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#2db475", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>+4 pts</p>
                    </div>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "130px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#555555", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>vs. previous 30 days</p>
                  </div>
                </div>
              </div>
              <svg style={{ width: "226px", height: "1px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible", marginBottom: "-1px" }} xmlns="http://www.w3.org/2000/svg" width="226" height="1" viewBox="0 0 226 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0L226 0" fill="none" stroke="#dddddd" strokeWidth="1" strokeDasharray="3 3" strokeLinecap="butt"/></svg>
              <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "18px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div data-fu="row" style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <Target size={12} strokeWidth={2.2} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#666666", display: "block" }} />
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "61px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#2d2d2d", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Coverage</p>
                  </div>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "27px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#2d2d2d", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>78%</p>
                </div>
                <div data-fu="row" style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <Circle size={12} strokeWidth={2.2} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#666666", display: "block" }} />
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "85px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#2d2d2d", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Policy Health</p>
                  </div>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "29px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#2d2d2d", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>86%</p>
                </div>
                <div data-fu="row" style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <Shield size={12} strokeWidth={2.2} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#666666", display: "block" }} />
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "111px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#2d2d2d", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Runtime Defense</p>
                  </div>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "29px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#2d2d2d", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>88%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ position: "absolute", left: "256px", top: "702px", width: "590px", height: "302px", borderRadius: "8px", background: "#fafafa", boxShadow: "inset 0 0 0 1px #ececec", overflow: "hidden" }}>
          <p style={{ position: "absolute", left: "16px", top: "16px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "176px", lineHeight: "23px", fontFamily: "'Geist'", fontSize: "18px", fontWeight: 600, color: "#1c1b20", letterSpacing: "-0.02em" }}>Busiest Attack Hours</p>
          <div style={{ position: "absolute", left: "49px", top: "266px", width: "525px", height: "20px", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "34px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>8 AM</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "34px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>9 AM</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "40px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>10 AM</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "36px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>11 AM</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "39px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>12 PM</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "30px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>1 PM</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "34px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>2 PM</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "34px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>3 PM</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "34px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>4 PM</p>
          </div>
          <div style={{ position: "absolute", left: "16px", top: "59px", width: "558px", height: "20px", display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ width: "24px", height: "20px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>60</p>
            <svg style={{ width: "526px", height: "1px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="526" height="1" viewBox="0 0 526 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0L526 0" fill="none" stroke="#e7e7e7" strokeWidth="1" strokeDasharray="3 3" strokeLinecap="butt"/></svg>
          </div>
          <div style={{ position: "absolute", left: "16px", top: "91px", width: "558px", height: "20px", display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ width: "24px", height: "20px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>50</p>
            <svg style={{ width: "526px", height: "1px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="526" height="1" viewBox="0 0 526 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0L526 0" fill="none" stroke="#e7e7e7" strokeWidth="1" strokeDasharray="3 3" strokeLinecap="butt"/></svg>
          </div>
          <div style={{ position: "absolute", left: "16px", top: "123px", width: "558px", height: "20px", display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ width: "24px", height: "20px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>40</p>
            <svg style={{ width: "526px", height: "1px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="526" height="1" viewBox="0 0 526 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0L526 0" fill="none" stroke="#e7e7e7" strokeWidth="1" strokeDasharray="3 3" strokeLinecap="butt"/></svg>
          </div>
          <div style={{ position: "absolute", left: "16px", top: "155px", width: "558px", height: "20px", display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ width: "24px", height: "20px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>30</p>
            <svg style={{ width: "526px", height: "1px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="526" height="1" viewBox="0 0 526 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0L526 0" fill="none" stroke="#e7e7e7" strokeWidth="1" strokeDasharray="3 3" strokeLinecap="butt"/></svg>
          </div>
          <div style={{ position: "absolute", left: "16px", top: "219px", width: "558px", height: "20px", display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ width: "24px", height: "20px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>10</p>
            <svg style={{ width: "526px", height: "1px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="526" height="1" viewBox="0 0 526 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0L526 0" fill="none" stroke="#e7e7e7" strokeWidth="1" strokeDasharray="3 3" strokeLinecap="butt"/></svg>
          </div>
          <div style={{ position: "absolute", left: "16px", top: "187px", width: "558px", height: "20px", display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ width: "24px", height: "20px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>20</p>
            <svg style={{ width: "526px", height: "1px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="526" height="1" viewBox="0 0 526 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0L526 0" fill="none" stroke="#e7e7e7" strokeWidth="1" strokeDasharray="3 3" strokeLinecap="butt"/></svg>
          </div>
          <div style={{ position: "absolute", left: "16px", top: "251px", width: "558px", height: "20px", display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ width: "24px", height: "20px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>0</p>
            <svg style={{ width: "526px", height: "1px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="526" height="1" viewBox="0 0 526 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0L526 0" fill="none" stroke="#e7e7e7" strokeWidth="1" strokeDasharray="3 3" strokeLinecap="butt"/></svg>
          </div>
          <svg data-fu="plot" style={{ position: "absolute", left: "49px", top: "92px", width: "525px", height: "167px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="525" height="167" viewBox="0 0 525 167" fill="none" overflow="visible"><defs><linearGradient id="g1_vrye" gradientUnits="userSpaceOnUse" x1="185.97" y1="16.86" x2="185.97" y2="167.53"><stop offset="0" stopColor="#e4e6ff"/><stop offset="1" stopColor="#fafafa"/></linearGradient></defs><path transform="matrix(1 0 0 1 0 0)" d="M517.447 54.6885 L518.726 53.9053 L517.447 54.6885 Z M505.761 56.0545 L504.286 55.7835 L505.761 56.0545 Z M502.603 73.2492 L504.079 73.5201 L502.603 73.2492 Z M494.816 73.6485 L496.256 73.2278 L494.816 73.6485 Z M490.05 66.876 L490.13 65.3782 L490.05 66.876 Z M493.677 69.7486 L492.237 70.1692 L493.677 69.7486 Z M482.182 63.7606 L483.623 63.3464 L482.182 63.7606 Z M485.813 66.6505 L485.893 65.1526 L485.813 66.6505 Z M478.645 51.4504 L477.204 51.8646 L478.645 51.4504 Z M468.09 51.0839 L469.485 51.6355 L468.09 51.0839 Z M466.125 56.0534 L464.73 55.5018 L466.125 56.0534 Z M445.242 55.7198 L443.804 56.1463 L445.242 55.7198 Z M440.992 41.3899 L442.431 40.9634 L440.992 41.3899 Z M427.67 41.1205 L426.266 40.593 L427.67 41.1205 Z M426.446 44.3782 L427.85 44.9057 L426.446 44.3782 Z M398.911 43.9925 L397.461 44.3753 L398.911 43.9925 Z M395.329 30.4231 L396.78 30.0402 L395.329 30.4231 Z M382.731 29.6527 L381.389 28.9809 L382.731 29.6527 Z M377.806 39.4852 L379.147 40.157 L377.806 39.4852 Z M366.414 43.6332 L365.128 42.8604 L366.414 43.6332 Z M363.987 47.671 L365.272 48.4438 L363.987 47.671 Z M354.17 46.5187 L352.709 46.8593 L354.17 46.5187 Z M338.274 22.603 L339.766 22.7518 L338.274 22.603 Z M333.837 67.1179 L332.345 66.9691 L333.837 67.1179 Z M323.753 67.4479 L322.278 67.7204 L323.753 67.4479 Z M319.037 41.9188 L320.512 41.6463 L319.037 41.9188 Z M303.152 42.7172 L304.65 42.7948 L303.152 42.7172 Z M307.007 38.9266 L307.06 40.4257 L307.007 38.9266 Z M302.742 50.6365 L301.244 50.5589 L302.742 50.6365 Z M295.028 51.451 L293.579 51.8398 L295.028 51.451 Z M290.655 35.1573 L289.207 35.5461 L290.655 35.1573 Z M279.75 34.7478 L278.351 34.2055 L279.75 34.7478 Z M275.386 46.001 L276.785 46.5434 L275.386 46.001 Z M261.939 51.8919 L260.46 51.6433 L261.939 51.8919 Z M256.32 85.3283 L257.799 85.5769 L256.32 85.3283 Z M248.257 86.6835 L246.961 87.4403 L248.257 86.6835 Z M242.246 76.3974 L243.541 75.6406 L242.246 76.3974 Z M227.318 71.264 L225.852 71.5822 L225.852 71.5822 L227.318 71.264 Z M209.948 47.3955 L208.474 47.6691 L209.948 47.3955 Z M187.181 9.83796 L188.463 10.6174 L187.181 9.83796 Z M182.777 17.0783 L181.496 16.2988 L182.777 17.0783 Z M165.231 22.398 L163.748 22.1723 L165.231 22.398 Z M156.452 61.107 L156.244 59.6215 L156.452 61.107 Z M159.852 57.7474 L161.335 57.9731 L159.852 57.7474 Z M150.956 58.3289 L149.507 58.7161 L150.956 58.3289 Z M146.318 40.9671 L147.767 40.58 L146.318 40.9671 Z M126.276 41.261 L127.75 41.5379 L126.276 41.261 Z M121.949 64.293 L120.475 64.0161 L121.949 64.293 Z M111.106 64.4521 L112.568 64.1155 L111.106 64.4521 Z M105.001 37.9353 L103.539 38.2719 L105.001 37.9353 Z M93.8329 37.5133 L92.4169 37.0184 L93.8329 37.5133 Z M87.7758 54.8465 L89.1918 55.3413 L87.7758 54.8465 Z M72.405 54.1826 L73.8847 53.9367 L72.405 54.1826 Z M61.6052 1.85588 L61.1094 3.27155 L61.6052 1.85588 Z M64.2289 4.97537 L62.7492 5.22123 L64.2289 4.97537 Z M54.6888 3.01463 L56.0105 3.72394 L54.6888 3.01463 Z M49.5077 12.669 L48.186 11.9597 L49.5077 12.669 Z M28.6677 73.8504 L27.1684 73.8031 L28.6677 73.8504 Z M0 106.082 L1.49008 106.254 L8.23919 47.8647 L6.74911 47.6925 L5.25903 47.5202 L-1.49008 105.91 L0 106.082 Z M14.2015 47.2062 L12.7465 47.5706 L19.6233 75.0294 L21.0783 74.665 L22.5334 74.3006 L15.6566 46.8418 L14.2015 47.2062 Z M28.6677 73.8504 L30.1669 73.8978 L31.9094 18.6987 L30.4102 18.6514 L28.9109 18.604 L27.1684 73.8031 L28.6677 73.8504 Z M34.4082 14.7776 L34.4082 16.2776 L45.9832 16.2776 L45.9832 14.7776 L45.9832 13.2776 L34.4082 13.2776 L34.4082 14.7776 Z M49.5077 12.669 L50.8294 13.3783 L56.0105 3.72394 L54.6888 3.01463 L53.3671 2.30533 L48.186 11.9597 L49.5077 12.669 Z M59.5356 1.13098 L59.0398 2.54665 L61.1094 3.27155 L61.6052 1.85588 L62.1011 0.440208 L60.0315 -0.284694 L59.5356 1.13098 Z M64.2289 4.97537 L62.7492 5.22123 L70.9253 54.4284 L72.405 54.1826 L73.8847 53.9367 L65.7086 4.7295 L64.2289 4.97537 Z M76.3509 57.5269 L76.3509 59.0269 L83.9997 59.0269 L83.9997 57.5269 L83.9997 56.0269 L76.3509 56.0269 L76.3509 57.5269 Z M87.7758 54.8465 L89.1918 55.3413 L95.249 38.0081 L93.8329 37.5133 L92.4169 37.0184 L86.3598 54.3517 L87.7758 54.8465 Z M97.609 34.8328 L97.609 36.3328 L101.103 36.3328 L101.103 34.8328 L101.103 33.3328 L97.609 33.3328 L97.609 34.8328 Z M105.001 37.9353 L103.539 38.2719 L109.644 64.7886 L111.106 64.4521 L112.568 64.1155 L106.462 37.5988 L105.001 37.9353 Z M115.004 67.5546 L115.004 69.0546 L118.018 69.0546 L118.018 67.5546 L118.018 66.0546 L115.004 66.0546 L115.004 67.5546 Z M121.949 64.293 L123.424 64.5699 L127.75 41.5379 L126.276 41.261 L124.801 40.9841 L120.475 64.0161 L121.949 64.293 Z M130.207 37.9994 L130.207 39.4994 L142.453 39.4994 L142.453 37.9994 L142.453 36.4994 L130.207 36.4994 L130.207 37.9994 Z M146.318 40.9671 L144.869 41.3542 L149.507 58.7161 L150.956 58.3289 L152.405 57.9418 L147.767 40.58 L146.318 40.9671 Z M155.375 61.2579 L155.583 62.7434 L156.66 62.5925 L156.452 61.107 L156.244 59.6215 L155.167 59.7724 L155.375 61.2579 Z M159.852 57.7474 L161.335 57.9731 L166.714 22.6236 L165.231 22.398 L163.748 22.1723 L158.369 57.5218 L159.852 57.7474 Z M169.185 18.9997 L169.185 20.4997 L179.36 20.4997 L179.36 18.9997 L179.36 17.4997 L169.185 17.4997 L169.185 18.9997 Z M182.777 17.0783 L184.059 17.8578 L188.463 10.6174 L187.181 9.83796 L185.899 9.05849 L181.496 16.2988 L182.777 17.0783 Z M190.599 7.91655 L190.599 9.41655 L199.298 9.41655 L199.298 7.91655 L199.298 6.41655 L190.599 6.41655 L190.599 7.91655 Z M203.231 11.187 L201.756 11.4606 L208.474 47.6691 L209.948 47.3955 L211.423 47.1219 L204.706 10.9134 L203.231 11.187 Z M213.881 50.6659 L213.881 52.1659 L219.622 52.1659 L219.622 50.6659 L219.622 49.1659 L213.881 49.1659 L213.881 50.6659 Z M223.531 53.8175 L222.066 54.1356 L225.852 71.5822 L227.318 71.264 L228.784 70.9458 L224.997 53.4993 L223.531 53.8175 Z M231.227 74.4156 L231.227 75.9156 L238.792 75.9156 L238.792 74.4156 L238.792 72.9156 L231.227 72.9156 L231.227 74.4156 Z M242.246 76.3974 L240.951 77.1542 L246.961 87.4403 L248.257 86.6835 L249.552 85.9267 L243.541 75.6406 L242.246 76.3974 Z M251.71 88.6654 L251.71 90.1654 L252.375 90.1654 L252.375 88.6654 L252.375 87.1654 L251.71 87.1654 L251.71 88.6654 Z M256.32 85.3283 L257.799 85.5769 L263.418 52.1405 L261.939 51.8919 L260.46 51.6433 L254.841 85.0797 L256.32 85.3283 Z M265.884 48.5548 L265.884 50.0548 L271.657 50.0548 L271.657 48.5548 L271.657 47.0548 L265.884 47.0548 L265.884 48.5548 Z M275.386 46.001 L276.785 46.5434 L281.148 35.2901 L279.75 34.7478 L278.351 34.2055 L273.988 45.4587 L275.386 46.001 Z M283.479 32.194 L283.479 33.694 L286.792 33.694 L286.792 32.194 L286.792 30.694 L283.479 30.694 L283.479 32.194 Z M290.655 35.1573 L289.207 35.5461 L293.579 51.8398 L295.028 51.451 L296.476 51.0623 L292.104 34.7686 L290.655 35.1573 Z M302.742 50.6365 L304.24 50.7142 L304.65 42.7948 L303.152 42.7172 L301.654 42.6396 L301.244 50.5589 L302.742 50.6365 Z M307.007 38.9266 L307.06 40.4257 L315.016 40.147 L314.963 38.6479 L314.911 37.1489 L306.954 37.4275 L307.007 38.9266 Z M319.037 41.9188 L317.562 42.1913 L322.278 67.7204 L323.753 67.4479 L325.228 67.1754 L320.512 41.6463 L319.037 41.9188 Z M327.687 70.7212 L327.687 72.2212 L329.857 72.2212 L329.857 70.7212 L329.857 69.2212 L327.687 69.2212 L327.687 70.7212 Z M333.837 67.1179 L335.33 67.2666 L339.766 22.7518 L338.274 22.603 L336.781 22.4543 L332.345 66.9691 L333.837 67.1179 Z M342.254 18.9997 L342.254 20.4997 L344.578 20.4997 L344.578 18.9997 L344.578 17.4997 L342.254 17.4997 L342.254 18.9997 Z M348.474 22.0914 L347.013 22.432 L352.709 46.8593 L354.17 46.5187 L355.63 46.1781 L349.935 21.7508 L348.474 22.0914 Z M358.065 49.6104 L358.065 51.1104 L360.558 51.1104 L360.558 49.6104 L360.558 48.1104 L358.065 48.1104 L358.065 49.6104 Z M363.987 47.671 L365.272 48.4438 L367.699 44.4059 L366.414 43.6332 L365.128 42.8604 L362.701 46.8983 L363.987 47.671 Z M369.842 41.6938 L369.842 43.1938 L374.229 43.1938 L374.229 41.6938 L374.229 40.1938 L369.842 40.1938 L369.842 41.6938 Z M377.806 39.4852 L379.147 40.157 L384.072 30.3244 L382.731 29.6527 L381.389 28.9809 L376.464 38.8134 L377.806 39.4852 Z M386.307 27.444 L386.307 28.944 L391.462 28.944 L391.462 27.444 L391.462 25.944 L386.307 25.944 L386.307 27.444 Z M395.329 30.4231 L393.879 30.806 L397.461 44.3753 L398.911 43.9925 L400.362 43.6096 L396.78 30.0402 L395.329 30.4231 Z M402.779 46.9715 L402.779 48.4715 L422.702 48.4715 L422.702 46.9715 L422.702 45.4715 L402.779 45.4715 L402.779 46.9715 Z M426.446 44.3782 L427.85 44.9057 L429.074 41.648 L427.67 41.1205 L426.266 40.593 L425.042 43.8507 L426.446 44.3782 Z M431.415 38.5272 L431.415 40.0272 L437.158 40.0272 L437.158 38.5272 L437.158 37.0272 L431.415 37.0272 L431.415 38.5272 Z M440.992 41.3899 L439.554 41.8164 L443.804 56.1463 L445.242 55.7198 L446.68 55.2933 L442.431 40.9634 L440.992 41.3899 Z M449.077 58.5825 L449.077 60.0825 L462.405 60.0825 L462.405 58.5825 L462.405 57.0825 L449.077 57.0825 L449.077 58.5825 Z M466.125 56.0534 L467.52 56.605 L469.485 51.6355 L468.09 51.0839 L466.695 50.5323 L464.73 55.5018 L466.125 56.0534 Z M471.81 48.5548 L471.81 50.0548 L474.801 50.0548 L474.801 48.5548 L474.801 47.0548 L471.81 47.0548 L471.81 48.5548 Z M478.645 51.4504 L477.204 51.8646 L480.74 64.1747 L482.182 63.7606 L483.623 63.3464 L480.087 51.0363 L478.645 51.4504 Z M485.813 66.6505 L485.734 68.1484 L489.97 68.3739 L490.05 66.876 L490.13 65.3782 L485.893 65.1526 L485.813 66.6505 Z M493.677 69.7486 L492.237 70.1692 L493.376 74.0692 L494.816 73.6485 L496.256 73.2278 L495.116 69.3279 L493.677 69.7486 Z M502.603 73.2492 L504.079 73.5201 L507.237 56.3254 L505.761 56.0545 L504.286 55.7835 L501.128 72.9782 L502.603 73.2492 Z M509.696 52.777 L509.696 54.277 L514.035 54.277 L514.035 52.777 L514.035 51.277 L509.696 51.277 L509.696 52.777 Z M517.447 54.6885 L516.167 55.4717 L523.721 67.81 L525 67.0268 L526.279 66.2436 L518.726 53.9053 L517.447 54.6885 Z M514.035 52.777 L514.035 54.277 C514.905 54.277 515.713 54.7295 516.167 55.4717 L517.447 54.6885 L518.726 53.9053 C517.726 52.2725 515.95 51.277 514.035 51.277 L514.035 52.777 Z M505.761 56.0545 L507.237 56.3254 C507.455 55.1387 508.489 54.277 509.696 54.277 L509.696 52.777 L509.696 51.277 C507.041 51.277 504.766 53.1728 504.286 55.7835 L505.761 56.0545 Z M498.662 76.5266 L498.662 78.0266 C501.313 78.0266 503.599 76.1341 504.079 73.5201 L502.603 73.2492 L501.128 72.9782 C500.911 74.1617 499.872 75.0266 498.662 75.0266 L498.662 76.5266 Z M494.816 73.6485 L493.376 74.0692 C494.062 76.4173 496.221 78.0266 498.662 78.0266 L498.662 76.5266 L498.662 75.0266 C497.549 75.0266 496.567 74.2911 496.256 73.2278 L494.816 73.6485 Z M490.05 66.876 L489.97 68.3739 C491.03 68.4304 491.939 69.1502 492.237 70.1692 L493.677 69.7486 L495.116 69.3279 C494.461 67.086 492.462 65.5023 490.13 65.3782 L490.05 66.876 Z M482.182 63.7606 L480.74 64.1747 C481.387 66.4283 483.392 68.0237 485.734 68.1484 L485.813 66.6505 L485.893 65.1526 C484.829 65.096 483.918 64.3708 483.623 63.3464 L482.182 63.7606 Z M474.801 48.5548 L474.801 50.0548 C475.916 50.0548 476.896 50.793 477.204 51.8646 L478.645 51.4504 L480.087 51.0363 C479.41 48.6789 477.253 47.0548 474.801 47.0548 L474.801 48.5548 Z M468.09 51.0839 L469.485 51.6355 C469.862 50.6815 470.784 50.0548 471.81 50.0548 L471.81 48.5548 L471.81 47.0548 C469.553 47.0548 467.525 48.4336 466.695 50.5323 L468.09 51.0839 Z M462.405 58.5825 L462.405 60.0825 C464.662 60.0825 466.69 58.7037 467.52 56.605 L466.125 56.0534 L464.73 55.5018 C464.353 56.4558 463.431 57.0825 462.405 57.0825 L462.405 58.5825 Z M445.242 55.7198 L443.804 56.1463 C444.497 58.481 446.642 60.0825 449.077 60.0825 L449.077 58.5825 L449.077 57.0825 C447.97 57.0825 446.995 56.3545 446.68 55.2933 L445.242 55.7198 Z M437.158 38.5272 L437.158 40.0272 C438.265 40.0272 439.24 40.7551 439.554 41.8164 L440.992 41.3899 L442.431 40.9634 C441.738 38.6286 439.593 37.0272 437.158 37.0272 L437.158 38.5272 Z M427.67 41.1205 L429.074 41.648 C429.441 40.673 430.373 40.0272 431.415 40.0272 L431.415 38.5272 L431.415 37.0272 C429.123 37.0272 427.072 38.4479 426.266 40.593 L427.67 41.1205 Z M422.702 46.9715 L422.702 48.4715 C424.993 48.4715 427.045 47.0508 427.85 44.9057 L426.446 44.3782 L425.042 43.8507 C424.676 44.8257 423.743 45.4715 422.702 45.4715 L422.702 46.9715 Z M398.911 43.9925 L397.461 44.3753 C398.098 46.7895 400.282 48.4715 402.779 48.4715 L402.779 46.9715 L402.779 45.4715 C401.644 45.4715 400.651 44.707 400.362 43.6096 L398.911 43.9925 Z M391.462 27.444 L391.462 28.944 C392.597 28.944 393.589 29.7086 393.879 30.806 L395.329 30.4231 L396.78 30.0402 C396.142 27.626 393.959 25.944 391.462 25.944 L391.462 27.444 Z M382.731 29.6527 L384.072 30.3244 C384.496 29.4783 385.361 28.944 386.307 28.944 L386.307 27.444 L386.307 25.944 C384.225 25.944 382.322 27.1195 381.389 28.9809 L382.731 29.6527 Z M374.229 41.6938 L374.229 43.1938 C376.311 43.1938 378.214 42.0184 379.147 40.157 L377.806 39.4852 L376.464 38.8134 C376.041 39.6595 375.176 40.1938 374.229 40.1938 L374.229 41.6938 Z M366.414 43.6332 L367.699 44.4059 C368.151 43.6539 368.965 43.1938 369.842 43.1938 L369.842 41.6938 L369.842 40.1938 C367.912 40.1938 366.122 41.2059 365.128 42.8604 L366.414 43.6332 Z M360.558 49.6104 L360.558 51.1104 C362.489 51.1104 364.278 50.0983 365.272 48.4438 L363.987 47.671 L362.701 46.8983 C362.249 47.6504 361.436 48.1104 360.558 48.1104 L360.558 49.6104 Z M354.17 46.5187 L352.709 46.8593 C353.289 49.3489 355.509 51.1104 358.065 51.1104 L358.065 49.6104 L358.065 48.1104 C356.903 48.1104 355.894 47.3097 355.63 46.1781 L354.17 46.5187 Z M344.578 18.9997 L344.578 20.4997 C345.74 20.4997 346.749 21.3004 347.013 22.432 L348.474 22.0914 L349.935 21.7508 C349.354 19.2611 347.135 17.4997 344.578 17.4997 L344.578 18.9997 Z M338.274 22.603 L339.766 22.7518 C339.894 21.4734 340.969 20.4997 342.254 20.4997 L342.254 18.9997 L342.254 17.4997 C339.428 17.4997 337.061 19.6419 336.781 22.4543 L338.274 22.603 Z M329.857 70.7212 L329.857 72.2212 C332.683 72.2212 335.05 70.079 335.33 67.2666 L333.837 67.1179 L332.345 66.9691 C332.217 68.2475 331.142 69.2212 329.857 69.2212 L329.857 70.7212 Z M323.753 67.4479 L322.278 67.7204 C322.76 70.3284 325.035 72.2212 327.687 72.2212 L327.687 70.7212 L327.687 69.2212 C326.481 69.2212 325.447 68.3608 325.228 67.1754 L323.753 67.4479 Z M314.963 38.6479 L315.016 40.147 C316.254 40.1037 317.337 40.9733 317.562 42.1913 L319.037 41.9188 L320.512 41.6463 C320.017 38.9666 317.634 37.0535 314.911 37.1489 L314.963 38.6479 Z M303.152 42.7172 L304.65 42.7948 C304.717 41.4998 305.764 40.4711 307.06 40.4257 L307.007 38.9266 L306.954 37.4275 C304.103 37.5274 301.802 39.7906 301.654 42.6396 L303.152 42.7172 Z M298.82 54.3603 L298.82 55.8603 C301.708 55.8603 304.091 53.5984 304.24 50.7142 L302.742 50.6365 L301.244 50.5589 C301.177 51.8488 300.112 52.8603 298.82 52.8603 L298.82 54.3603 Z M295.028 51.451 L293.579 51.8398 C294.215 54.2115 296.365 55.8603 298.82 55.8603 L298.82 54.3603 L298.82 52.8603 C297.722 52.8603 296.761 52.1229 296.476 51.0623 L295.028 51.451 Z M286.792 32.194 L286.792 33.694 C287.923 33.694 288.914 34.4535 289.207 35.5461 L290.655 35.1573 L292.104 34.7686 C291.459 32.365 289.281 30.694 286.792 30.694 L286.792 32.194 Z M279.75 34.7478 L281.148 35.2901 C281.521 34.328 282.447 33.694 283.479 33.694 L283.479 32.194 L283.479 30.694 C281.209 30.694 279.172 32.0888 278.351 34.2055 L279.75 34.7478 Z M271.657 48.5548 L271.657 50.0548 C273.927 50.0548 275.964 48.66 276.785 46.5434 L275.386 46.001 L273.988 45.4587 C273.614 46.4208 272.689 47.0548 271.657 47.0548 L271.657 48.5548 Z M261.939 51.8919 L263.418 52.1405 C263.621 50.9366 264.663 50.0548 265.884 50.0548 L265.884 48.5548 L265.884 47.0548 C263.198 47.0548 260.905 48.9946 260.46 51.6433 L261.939 51.8919 Z M252.375 88.6654 L252.375 90.1654 C255.061 90.1654 257.354 88.2256 257.799 85.5769 L256.32 85.3283 L254.841 85.0797 C254.638 86.2836 253.596 87.1654 252.375 87.1654 L252.375 88.6654 Z M248.257 86.6835 L246.961 87.4403 C247.948 89.1279 249.755 90.1654 251.71 90.1654 L251.71 88.6654 L251.71 87.1654 C250.822 87.1654 250 86.6938 249.552 85.9267 L248.257 86.6835 Z M238.792 74.4156 L238.792 75.9156 C239.681 75.9156 240.502 76.3871 240.951 77.1542 L242.246 76.3974 L243.541 75.6406 C242.555 73.953 240.747 72.9156 238.792 72.9156 L238.792 74.4156 Z M227.318 71.264 L225.852 71.5822 C226.401 74.1113 228.639 75.9156 231.227 75.9156 L231.227 74.4156 L231.227 72.9156 C230.051 72.9156 229.034 72.0954 228.784 70.9458 L227.318 71.264 Z M219.622 50.6659 L219.622 52.1659 C220.799 52.1659 221.816 52.986 222.066 54.1356 L223.531 53.8175 L224.997 53.4993 C224.448 50.9702 222.211 49.1659 219.622 49.1659 L219.622 50.6659 Z M209.948 47.3955 L208.474 47.6691 C208.957 50.2753 211.231 52.1659 213.881 52.1659 L213.881 50.6659 L213.881 49.1659 C212.676 49.1659 211.643 48.3066 211.423 47.1219 L209.948 47.3955 Z M199.298 7.91655 L199.298 9.41655 C200.503 9.41655 201.537 10.2759 201.756 11.4606 L203.231 11.187 L204.706 10.9134 C204.223 8.30715 201.949 6.41655 199.298 6.41655 L199.298 7.91655 Z M187.181 9.83796 L188.463 10.6174 C188.916 9.87173 189.726 9.41655 190.599 9.41655 L190.599 7.91655 L190.599 6.41655 C188.678 6.41655 186.897 7.41795 185.899 9.05849 L187.181 9.83796 Z M179.36 18.9997 L179.36 20.4997 C181.28 20.4997 183.061 19.4983 184.059 17.8578 L182.777 17.0783 L181.496 16.2988 C181.042 17.0445 180.233 17.4997 179.36 17.4997 L179.36 18.9997 Z M165.231 22.398 L166.714 22.6236 C166.899 21.4022 167.95 20.4997 169.185 20.4997 L169.185 18.9997 L169.185 17.4997 C166.467 17.4997 164.157 19.4852 163.748 22.1723 L165.231 22.398 Z M156.452 61.107 L156.66 62.5925 C159.068 62.2552 160.969 60.3768 161.335 57.9731 L159.852 57.7474 L158.369 57.5218 C158.202 58.6144 157.339 59.4682 156.244 59.6215 L156.452 61.107 Z M150.956 58.3289 L149.507 58.7161 C150.224 61.401 152.831 63.129 155.583 62.7434 L155.375 61.2579 L155.167 59.7724 C153.916 59.9477 152.731 59.1622 152.405 57.9418 L150.956 58.3289 Z M142.453 37.9994 L142.453 39.4994 C143.585 39.4994 144.576 40.2604 144.869 41.3542 L146.318 40.9671 L147.767 40.58 C147.124 38.1735 144.944 36.4994 142.453 36.4994 L142.453 37.9994 Z M126.276 41.261 L127.75 41.5379 C127.972 40.3559 129.004 39.4994 130.207 39.4994 L130.207 37.9994 L130.207 36.4994 C127.561 36.4994 125.29 38.3836 124.801 40.9841 L126.276 41.261 Z M118.018 67.5546 L118.018 69.0546 C120.664 69.0546 122.935 67.1704 123.424 64.5699 L121.949 64.293 L120.475 64.0161 C120.253 65.1981 119.221 66.0546 118.018 66.0546 L118.018 67.5546 Z M111.106 64.4521 L109.644 64.7886 C110.219 67.2854 112.442 69.0546 115.004 69.0546 L115.004 67.5546 L115.004 66.0546 C113.839 66.0546 112.829 65.2504 112.568 64.1155 L111.106 64.4521 Z M101.103 34.8328 L101.103 36.3328 C102.267 36.3328 103.278 37.137 103.539 38.2719 L105.001 37.9353 L106.462 37.5988 C105.887 35.102 103.665 33.3328 101.103 33.3328 L101.103 34.8328 Z M93.8329 37.5133 L95.249 38.0081 C95.5996 37.0048 96.5462 36.3328 97.609 36.3328 L97.609 34.8328 L97.609 33.3328 C95.2709 33.3328 93.1883 34.8111 92.4169 37.0184 L93.8329 37.5133 Z M83.9997 57.5269 L83.9997 59.0269 C86.3379 59.0269 88.4205 57.5486 89.1918 55.3413 L87.7758 54.8465 L86.3598 54.3517 C86.0092 55.355 85.0625 56.0269 83.9997 56.0269 L83.9997 57.5269 Z M72.405 54.1826 L70.9253 54.4284 C71.3662 57.0817 73.6613 59.0269 76.3509 59.0269 L76.3509 57.5269 L76.3509 56.0269 C75.1284 56.0269 74.0851 55.1427 73.8847 53.9367 L72.405 54.1826 Z M61.6052 1.85588 L61.1094 3.27155 C61.9709 3.57332 62.5995 4.3207 62.7492 5.22123 L64.2289 4.97537 L65.7086 4.7295 C65.3794 2.74833 63.9965 1.1041 62.1011 0.440208 L61.6052 1.85588 Z M54.6888 3.01463 L56.0105 3.72394 C56.5927 2.63918 57.8779 2.13969 59.0398 2.54665 L59.5356 1.13098 L60.0315 -0.284694 C57.4753 -1.18001 54.6478 -0.0811413 53.3671 2.30533 L54.6888 3.01463 Z M45.9832 14.7776 L45.9832 16.2776 C48.0093 16.2776 49.8713 15.1636 50.8294 13.3783 L49.5077 12.669 L48.186 11.9597 C47.7505 12.7712 46.9041 13.2776 45.9832 13.2776 L45.9832 14.7776 Z M30.4102 18.6514 L31.9094 18.6987 C31.952 17.3493 33.0582 16.2776 34.4082 16.2776 L34.4082 14.7776 L34.4082 13.2776 C31.4382 13.2776 29.0046 15.6355 28.9109 18.604 L30.4102 18.6514 Z M24.8162 77.5822 L24.8162 79.0822 C27.707 79.0822 30.0757 76.7871 30.1669 73.8978 L28.6677 73.8504 L27.1684 73.8031 C27.1283 75.0733 26.087 76.0822 24.8162 76.0822 L24.8162 77.5822 Z M21.0783 74.665 L19.6233 75.0294 C20.2198 77.4115 22.3606 79.0822 24.8162 79.0822 L24.8162 77.5822 L24.8162 76.0822 C23.7367 76.0822 22.7956 75.3477 22.5334 74.3006 L21.0783 74.665 Z M10.5196 44.3327 L10.5196 45.8327 C11.5726 45.8327 12.4906 46.5491 12.7465 47.5706 L14.2015 47.2062 L15.6566 46.8418 C15.0664 44.4854 12.9488 42.8327 10.5196 42.8327 L10.5196 44.3327 Z M6.74911 47.6925 L8.23919 47.8647 C8.37306 46.7066 9.35377 45.8327 10.5196 45.8327 L10.5196 44.3327 L10.5196 42.8327 C7.83018 42.8327 5.56784 44.8486 5.25903 47.5202 L6.74911 47.6925 Z" fill="#1666f4"/><path transform="matrix(1 0 0 1 0 0)" d="M6.74837 47.6124 L0 105.89 L0 167 L525 167 L525 68.0343 C525 67.2961 524.796 66.5723 524.41 65.943 L517.447 54.5902 C516.72 53.4042 515.428 52.6814 514.037 52.6814 L509.694 52.6814 C507.764 52.6814 506.11 54.0595 505.76 55.9576 L502.604 73.1118 C502.255 75.0099 500.592 76.388 498.662 76.388 C496.885 76.388 495.314 75.2165 494.815 73.5117 L493.678 69.6256 C493.201 67.9959 491.747 66.8451 490.051 66.7549 L485.812 66.5297 C484.11 66.4392 482.652 65.2798 482.181 63.6416 L478.646 51.3606 C478.153 49.6471 476.585 48.4669 474.802 48.4669 L471.808 48.4669 C470.167 48.4669 468.693 49.4685 468.089 50.9937 L466.126 55.9496 C465.521 57.4747 464.047 58.4763 462.407 58.4763 L449.076 58.4763 C447.305 58.4763 445.746 57.3126 445.241 55.6156 L440.993 41.3182 C440.489 39.6211 438.93 38.4574 437.159 38.4574 L431.413 38.4574 C429.747 38.4574 428.256 39.4896 427.669 41.0485 L426.447 44.2953 C425.861 45.8542 424.369 46.8864 422.704 46.8864 L402.778 46.8864 C400.962 46.8864 399.375 45.6641 398.911 43.9091 L395.33 30.3716 C394.866 28.6167 393.279 27.3943 391.463 27.3943 L386.305 27.3943 C384.792 27.3943 383.408 28.248 382.73 29.6003 L377.806 39.4123 C377.128 40.7646 375.744 41.6183 374.231 41.6183 L369.84 41.6183 C368.437 41.6183 367.137 42.3531 366.413 43.5549 L363.987 47.5839 C363.263 48.7856 361.963 49.5205 360.56 49.5205 L358.064 49.5205 C356.205 49.5205 354.591 48.2403 354.169 46.4304 L348.475 22.0554 C348.052 20.2455 346.438 18.9653 344.58 18.9653 L342.253 18.9653 C340.198 18.9653 338.477 20.5228 338.273 22.5679 L333.838 66.9905 C333.634 69.0355 331.913 70.5931 329.858 70.5931 L327.686 70.5931 C325.757 70.5931 324.103 69.2172 323.752 67.321 L319.038 41.8475 C318.677 39.8993 316.945 38.5086 314.965 38.5779 L307.007 38.8561 C304.933 38.9286 303.26 40.5744 303.152 42.6463 L302.742 50.5374 C302.634 52.6249 300.91 54.2618 298.82 54.2618 C297.043 54.2618 295.488 53.0693 295.026 51.3535 L290.656 35.0972 C290.187 33.3501 288.603 32.1356 286.794 32.1356 L283.477 32.1356 C281.827 32.1356 280.346 33.149 279.749 34.6872 L275.387 45.9153 C274.789 47.4535 273.309 48.4669 271.658 48.4669 L265.883 48.4669 C263.93 48.4669 262.263 49.877 261.938 51.8028 L256.321 85.1688 C255.996 87.0946 254.329 88.5047 252.376 88.5047 L251.708 88.5047 C250.288 88.5047 248.974 87.7514 248.256 86.5256 L242.246 76.2599 C241.529 75.0341 240.215 74.2808 238.794 74.2808 L231.226 74.2808 C229.344 74.2808 227.717 72.9693 227.317 71.1307 L223.532 53.7242 C223.133 51.8856 221.505 50.5741 219.624 50.5741 L213.88 50.5741 C211.953 50.5741 210.3 49.1998 209.948 47.305 L203.232 11.1713 C202.88 9.27651 201.227 7.90221 199.3 7.90221 L190.596 7.90221 C189.201 7.90221 187.907 8.62931 187.181 9.82087 L182.778 17.0466 C182.052 18.2382 180.757 18.9653 179.362 18.9653 L169.184 18.9653 C167.208 18.9653 165.528 20.4087 165.23 22.3625 L159.852 57.6377 C159.586 59.3857 158.203 60.7514 156.452 60.9963 L155.373 61.1473 C153.372 61.427 151.477 60.1713 150.955 58.2199 L146.319 40.8965 C145.851 39.1472 144.266 37.9306 142.455 37.9306 L130.206 37.9306 C128.282 37.9306 126.631 39.3002 126.275 41.1909 L121.95 64.1719 C121.595 66.0626 119.943 67.4322 118.019 67.4322 L115.003 67.4322 C113.14 67.4322 111.524 66.1463 111.105 64.3312 L105.002 37.8707 C104.583 36.0556 102.967 34.7697 101.104 34.7697 L97.6073 34.7697 C95.9077 34.7697 94.3936 35.8438 93.832 37.448 L87.7768 54.7444 C87.2152 56.3486 85.7011 57.4227 84.0014 57.4227 L76.3499 57.4227 C74.3943 57.4227 72.7253 56.0086 72.4042 54.0795 L64.2297 4.9712 C63.9898 3.53003 62.9832 2.3343 61.6041 1.85212 L59.5319 1.12764 C57.6744 0.478216 55.6205 1.27623 54.6887 3.00938 L49.5083 12.6449 C48.8111 13.9418 47.4577 14.7508 45.9852 14.7508 L34.408 14.7508 C32.2481 14.7508 30.4782 16.4655 30.41 18.6243 L28.6679 73.7092 C28.6021 75.7894 26.8968 77.4416 24.8156 77.4416 C23.0482 77.4416 21.5073 76.2396 21.0772 74.5253 L14.2027 47.1252 C13.779 45.4365 12.261 44.2524 10.52 44.2524 C8.59203 44.2524 6.97014 45.6973 6.74837 47.6124 Z" fill="url(#g1_vrye)"/></svg>
          <div style={{ position: "absolute", left: "446px", top: "16px", width: "127.8px", height: "32px", borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 0.4px #dddddd, 0px 0px 1px 0px rgba(0, 0, 0, 0.25)", display: "flex", flexDirection: "row", padding: "6.4px 10.4px 6.4px 10.4px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "85px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#4f4f51", lineHeight: "20px" }}>Last 30 days</p>
            <div style={{ position: "relative", flexShrink: 0, alignSelf: "flex-start", marginTop: "3px", width: "14px", height: "14px" }}>
              <ChevronLeft size={14} strokeWidth={2.57} style={{ position: "absolute", left: "0px", top: "14px", width: "14px", height: "14px", transform: "rotate(-90deg)", transformOrigin: "top left", color: "#353537", display: "block", flexShrink: 0 }} />
            </div>
          </div>
        </div>
        <div style={{ position: "absolute", left: "256px", top: "404px", width: "590px", height: "282px", borderRadius: "8px", background: "#fafafa", boxShadow: "inset 0 0 0 1px #ececec", overflow: "hidden" }}>
          <p style={{ position: "absolute", left: "16px", top: "16px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "165px", lineHeight: "23px", fontFamily: "'Geist'", fontSize: "18px", fontWeight: 600, color: "#1c1b20", letterSpacing: "-0.02em" }}>Vulnerability Trends</p>
          <div style={{ position: "absolute", left: "68px", top: "207px", width: "495px", height: "20px", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ width: "25px", flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "1.399999976158142" }}>Jan</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "24px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "1.399999976158142" }}>Feb</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "26px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "1.399999976158142" }}>Mar</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "23px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "1.399999976158142" }}>Apr</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "28px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "1.399999976158142" }}>May</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "25px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "1.399999976158142" }}>Jun</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "21px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "1.399999976158142" }}>Jul</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "26px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "1.399999976158142" }}>Aug</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "26px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "1.399999976158142" }}>Sep</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "24px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#111111", lineHeight: "1.399999976158142" }}>Oct</p>
          </div>
          <div style={{ position: "absolute", left: "16px", top: "59px", width: "558px", height: "20px", display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ width: "36px", height: "20px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>100%</p>
            <svg style={{ width: "514px", height: "1px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="514" height="1" viewBox="0 0 514 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0L514 0" fill="none" stroke="#e7e7e7" strokeWidth="1" strokeDasharray="3 3" strokeLinecap="butt"/></svg>
          </div>
          <div style={{ position: "absolute", left: "16px", top: "91.5px", width: "558px", height: "20px", display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ width: "36px", height: "20px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>75%</p>
            <svg style={{ width: "514px", height: "1px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="514" height="1" viewBox="0 0 514 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0L514 0" fill="none" stroke="#e7e7e7" strokeWidth="1" strokeDasharray="3 3" strokeLinecap="butt"/></svg>
          </div>
          <div style={{ position: "absolute", left: "16px", top: "156.5px", width: "558px", height: "20px", display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ width: "36px", height: "20px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>25%</p>
            <svg style={{ width: "514px", height: "1px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="514" height="1" viewBox="0 0 514 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0L514 0" fill="none" stroke="#e7e7e7" strokeWidth="1" strokeDasharray="3 3" strokeLinecap="butt"/></svg>
          </div>
          <div style={{ position: "absolute", left: "16px", top: "124px", width: "558px", height: "20px", display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ width: "36px", height: "20px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>50%</p>
            <svg style={{ width: "514px", height: "1px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="514" height="1" viewBox="0 0 514 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0L514 0" fill="none" stroke="#e7e7e7" strokeWidth="1" strokeDasharray="3 3" strokeLinecap="butt"/></svg>
          </div>
          <div style={{ position: "absolute", left: "446px", top: "16px", width: "143.8px", height: "32px", borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 0.4px #dddddd, 0px 0px 1px 0px rgba(0, 0, 0, 0.25)", display: "flex", flexDirection: "row", padding: "6.4px 10.4px 6.4px 10.4px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "101px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#4f4f51", lineHeight: "20px" }}>Last 10 months</p>
            <div style={{ position: "relative", flexShrink: 0, alignSelf: "flex-start", marginTop: "3px", width: "14px", height: "14px" }}>
              <ChevronLeft size={14} strokeWidth={2.57} style={{ position: "absolute", left: "0px", top: "14px", width: "14px", height: "14px", transform: "rotate(-90deg)", transformOrigin: "top left", color: "#353537", display: "block", flexShrink: 0 }} />
            </div>
          </div>
          <div style={{ position: "absolute", left: "62px", top: "69px", width: "36px", height: "130px", borderRadius: "12px", background: "#484ff5", overflow: "hidden" }}>
            <div style={{ position: "absolute", left: "0px", top: "57px", width: "36px", height: "73px", background: "#7a7fff", overflow: "hidden" }} />
            <div style={{ position: "absolute", left: "0px", top: "98px", width: "36px", height: "32px", background: "#9ea3ff", overflow: "hidden" }} />
          </div>
          <div style={{ position: "absolute", left: "114px", top: "69px", width: "36px", height: "130px", borderRadius: "12px", background: "#484ff5", overflow: "hidden" }}>
            <div style={{ position: "absolute", left: "0px", top: "31px", width: "36px", height: "99px", background: "#7a7fff", overflow: "hidden" }} />
            <div style={{ position: "absolute", left: "0px", top: "68px", width: "36px", height: "62px", background: "#9ea3ff", overflow: "hidden" }} />
          </div>
          <div style={{ position: "absolute", left: "166px", top: "69px", width: "36px", height: "130px", borderRadius: "12px", background: "#484ff5", overflow: "hidden" }}>
            <div style={{ position: "absolute", left: "0px", top: "53px", width: "36px", height: "77px", background: "#7a7fff", overflow: "hidden" }} />
            <div style={{ position: "absolute", left: "0px", top: "84px", width: "36px", height: "46px", background: "#9ea3ff", overflow: "hidden" }} />
          </div>
          <div style={{ position: "absolute", left: "219px", top: "69px", width: "36px", height: "130px", borderRadius: "12px", background: "#484ff5", overflow: "hidden" }}>
            <div style={{ position: "absolute", left: "0px", top: "37px", width: "36px", height: "61px", background: "#7a7fff", overflow: "hidden" }} />
            <div style={{ position: "absolute", left: "0px", top: "74px", width: "36px", height: "56px", background: "#9ea3ff", overflow: "hidden" }} />
          </div>
          <div style={{ position: "absolute", left: "271px", top: "69px", width: "36px", height: "130px", borderRadius: "12px", background: "#484ff5", overflow: "hidden" }}>
            <div style={{ position: "absolute", left: "0px", top: "24px", width: "36px", height: "106px", background: "#7a7fff", overflow: "hidden" }} />
            <div style={{ position: "absolute", left: "0px", top: "81px", width: "36px", height: "49px", background: "#9ea3ff", overflow: "hidden" }} />
          </div>
          <div style={{ position: "absolute", left: "323px", top: "69px", width: "36px", height: "130px", borderRadius: "12px", background: "#484ff5", overflow: "hidden" }}>
            <div style={{ position: "absolute", left: "0px", top: "50px", width: "36px", height: "80px", background: "#7a7fff", overflow: "hidden" }} />
            <div style={{ position: "absolute", left: "0px", top: "98px", width: "36px", height: "32px", background: "#9ea3ff", overflow: "hidden" }} />
          </div>
          <div style={{ position: "absolute", left: "375px", top: "69px", width: "36px", height: "130px", borderRadius: "12px", background: "#484ff5", overflow: "hidden" }}>
            <div style={{ position: "absolute", left: "0px", top: "38px", width: "36px", height: "92px", background: "#7a7fff", overflow: "hidden" }} />
            <div style={{ position: "absolute", left: "0px", top: "80px", width: "36px", height: "50px", background: "#9ea3ff", overflow: "hidden" }} />
          </div>
          <div style={{ position: "absolute", left: "428px", top: "69px", width: "36px", height: "130px", borderRadius: "12px", background: "#484ff5", overflow: "hidden" }}>
            <div style={{ position: "absolute", left: "0px", top: "29px", width: "36px", height: "101px", background: "#7a7fff", overflow: "hidden" }} />
            <div style={{ position: "absolute", left: "0px", top: "59px", width: "36px", height: "71px", background: "#9ea3ff", overflow: "hidden" }} />
          </div>
          <div style={{ position: "absolute", left: "480px", top: "69px", width: "36px", height: "130px", borderRadius: "12px", background: "#484ff5", overflow: "hidden" }}>
            <div style={{ position: "absolute", left: "0px", top: "43px", width: "36px", height: "87px", background: "#7a7fff", overflow: "hidden" }} />
            <div style={{ position: "absolute", left: "0px", top: "82px", width: "36px", height: "48px", background: "#9ea3ff", overflow: "hidden" }} />
          </div>
          <div style={{ position: "absolute", left: "532px", top: "69px", width: "36px", height: "130px", borderRadius: "12px", background: "#484ff5", overflow: "hidden" }}>
            <div style={{ position: "absolute", left: "0px", top: "22px", width: "36px", height: "108px", background: "#7a7fff", overflow: "hidden" }} />
            <div style={{ position: "absolute", left: "0px", top: "63px", width: "36px", height: "67px", background: "#9ea3ff", overflow: "hidden" }} />
          </div>
          <div style={{ position: "absolute", left: "16px", top: "255px", width: "558px", height: "10px", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "115px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ width: "10px", height: "10px", flexShrink: 0, borderRadius: "2px", background: "#484ff5", boxShadow: "inset 0 0 0 0.4px #d6d6d6, 0px 4px 4px 0px rgba(0, 0, 0, 0.05), inset 0px 4px 4px 0px rgba(255, 255, 255, 0.29)", overflow: "hidden" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "46px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#747474", letterSpacing: "-0.01em", textBox: "trim-both cap alphabetic", height: "10px" }}>Critical</p>
              </div>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "right", whiteSpace: "pre", minWidth: "13px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#747474", letterSpacing: "-0.01em", textBox: "trim-both cap alphabetic", height: "9px" }}>18</p>
            </div>
            <svg style={{ width: "1px", height: "8px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible", marginRight: "-1px" }} xmlns="http://www.w3.org/2000/svg" width="1" height="8" viewBox="0 0 1 8" fill="none" overflow="visible"><path transform="matrix(0 1 -1 0 0 0)" d="M1 -2 C0.447715 -2 0 -1.55228 0 -1 C0 -0.447715 0.447715 0 1 0 L1 -1 L1 -2 Z M7 0 C7.55228 0 8 -0.447715 8 -1 C8 -1.55228 7.55228 -2 7 -2 L7 -1 L7 0 Z M1 -1 L1 0 L7 0 L7 -1 L7 -2 L1 -2 L1 -1 Z" fill="#e8e8e8"/></svg>
            <div style={{ width: "115px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ width: "10px", height: "10px", flexShrink: 0, borderRadius: "2px", background: "#7a7fff", boxShadow: "inset 0 0 0 0.4px #d6d6d6, 0px 4px 4px 0px rgba(0, 0, 0, 0.05), inset 0px 4px 4px 0px rgba(255, 255, 255, 0.29)", overflow: "hidden" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "30px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#747474", letterSpacing: "-0.01em", textBox: "trim-both cap alphabetic", height: "10px" }}>High</p>
              </div>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "right", whiteSpace: "pre", minWidth: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#747474", letterSpacing: "-0.01em", textBox: "trim-both cap alphabetic", height: "9px" }}>54</p>
            </div>
            <svg style={{ width: "1px", height: "8px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible", marginRight: "-1px" }} xmlns="http://www.w3.org/2000/svg" width="1" height="8" viewBox="0 0 1 8" fill="none" overflow="visible"><path transform="matrix(0 1 -1 0 0 0)" d="M1 -2 C0.447715 -2 0 -1.55228 0 -1 C0 -0.447715 0.447715 0 1 0 L1 -1 L1 -2 Z M7 0 C7.55228 0 8 -0.447715 8 -1 C8 -1.55228 7.55228 -2 7 -2 L7 -1 L7 0 Z M1 -1 L1 0 L7 0 L7 -1 L7 -2 L1 -2 L1 -1 Z" fill="#e8e8e8"/></svg>
            <div style={{ width: "115px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ width: "10px", height: "10px", flexShrink: 0, borderRadius: "2px", background: "#9ea3ff", boxShadow: "inset 0 0 0 0.4px #d6d6d6, 0px 4px 4px 0px rgba(0, 0, 0, 0.05), inset 0px 4px 4px 0px rgba(255, 255, 255, 0.29)", overflow: "hidden" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "52px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#747474", letterSpacing: "-0.01em", textBox: "trim-both cap alphabetic", height: "10px" }}>Medium</p>
              </div>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "right", whiteSpace: "pre", minWidth: "14px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#747474", letterSpacing: "-0.01em", textBox: "trim-both cap alphabetic", height: "9px" }}>74</p>
            </div>
          </div>
          <svg style={{ position: "absolute", left: "16px", top: "241px", width: "558px", height: "1px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="558" height="1" viewBox="0 0 558 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0L558 0" fill="none" stroke="#e7e7e7" strokeWidth="1" strokeDasharray="3 3" strokeLinecap="butt"/></svg>
          <div style={{ position: "absolute", left: "16px", top: "189px", width: "558px", height: "20px", display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ width: "36px", height: "20px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>0%</p>
            <svg style={{ width: "514px", height: "1px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="514" height="1" viewBox="0 0 514 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0L514 0" fill="none" stroke="#e7e7e7" strokeWidth="1" strokeDasharray="3 3" strokeLinecap="butt"/></svg>
          </div>
        </div>
        <div style={{ position: "absolute", left: "862px", top: "647px", width: "468px", height: "357px", borderRadius: "8px", background: "#fafafa", boxShadow: "inset 0 0 0 1px #ececec", overflow: "hidden" }}>
          <p style={{ position: "absolute", left: "16px", top: "16px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "283px", lineHeight: "23px", fontFamily: "'Geist'", fontSize: "18px", fontWeight: 600, color: "#1c1b20", letterSpacing: "-0.02em" }}>Attack Surface Exposure by Asset</p>
          <div style={{ position: "absolute", left: "16px", top: "59px", width: "436px", height: "281px", display: "flex", flexDirection: "column", gap: "15px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div data-fu="row" style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "10px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "436px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "73px", lineHeight: "21px", fontFamily: "'Geist'", fontSize: "16px", fontWeight: 500, color: "#2d2d2d" }}>AI Agents</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "33px", lineHeight: "21px", fontFamily: "'Geist'", fontSize: "16px", fontWeight: 400, color: "#2d2d2d" }}>34%</p>
              </div>
              <div style={{ width: "436px", height: "28px", flexShrink: 0, borderRadius: "8px", background: "#f5f5f5", overflow: "hidden", position: "relative" }}>
                <svg data-fu="plot" style={{ position: "absolute", left: "0px", top: "-5.9px", width: "469.83px", height: "36.71px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="469.83" height="36.71" viewBox="0 0 469.83 36.71" fill="none" overflow="visible"><path transform="matrix(-0.259 0.966 -0.966 -0.259 9.059 2.898)" d="M0 -2.5 L0 0 L35 0 L35 -2.5 L35 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 9.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 19.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 29.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 39.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 49.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 59.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 69.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 79.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 89.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 99.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 109.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 119.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 129.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 139.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 149.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 159.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 169.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 179.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 189.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 199.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 209.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 219.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 229.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 239.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 249.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 259.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 269.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 279.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 289.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 299.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 309.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 319.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 329.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 339.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 349.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 359.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 369.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 379.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 389.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 399.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 409.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 419.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 429.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 439.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 449.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 459.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 469.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/></svg>
                <div style={{ position: "absolute", left: "0px", top: "0px", width: "148px", height: "28px", borderRadius: "8px", background: "linear-gradient(90deg, #b8d2ff 0%, #e3edff 100%)", overflow: "hidden" }} />
              </div>
            </div>
            <div data-fu="row" style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "10px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "436px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "34px", lineHeight: "21px", fontFamily: "'Geist'", fontSize: "16px", fontWeight: 500, color: "#2d2d2d" }}>APIs</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "33px", lineHeight: "21px", fontFamily: "'Geist'", fontSize: "16px", fontWeight: 400, color: "#2d2d2d" }}>98%</p>
              </div>
              <div style={{ width: "436px", height: "28px", flexShrink: 0, borderRadius: "8px", background: "#f5f5f5", overflow: "hidden", position: "relative" }}>
                <svg data-fu="plot" style={{ position: "absolute", left: "0px", top: "-5.9px", width: "469.83px", height: "36.71px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="469.83" height="36.71" viewBox="0 0 469.83 36.71" fill="none" overflow="visible"><path transform="matrix(-0.259 0.966 -0.966 -0.259 9.059 2.898)" d="M0 -2.5 L0 0 L35 0 L35 -2.5 L35 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 9.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 19.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 29.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 39.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 49.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 59.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 69.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 79.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 89.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 99.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 109.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 119.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 129.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 139.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 149.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 159.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 169.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 179.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 189.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 199.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 209.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 219.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 229.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 239.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 249.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 259.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 269.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 279.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 289.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 299.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 309.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 319.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 329.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 339.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 349.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 359.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 369.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 379.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 389.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 399.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 409.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 419.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 429.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 439.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 449.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 459.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 469.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/></svg>
                <div style={{ position: "absolute", left: "0px", top: "0px", width: "427px", height: "28px", borderRadius: "8px", background: "linear-gradient(90deg, #1666f4 0%, #367df9 72%, #72a5ff 100%)", overflow: "hidden" }} />
              </div>
            </div>
            <div data-fu="row" style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "10px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "436px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "101px", lineHeight: "21px", fontFamily: "'Geist'", fontSize: "16px", fontWeight: 500, color: "#2d2d2d" }}>Data Sources</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "32px", lineHeight: "21px", fontFamily: "'Geist'", fontSize: "16px", fontWeight: 400, color: "#2d2d2d" }}>76%</p>
              </div>
              <div style={{ width: "436px", height: "28px", flexShrink: 0, borderRadius: "8px", background: "#f5f5f5", overflow: "hidden", position: "relative" }}>
                <svg data-fu="plot" style={{ position: "absolute", left: "0px", top: "-5.9px", width: "469.83px", height: "36.71px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="469.83" height="36.71" viewBox="0 0 469.83 36.71" fill="none" overflow="visible"><path transform="matrix(-0.259 0.966 -0.966 -0.259 9.059 2.898)" d="M0 -2.5 L0 0 L35 0 L35 -2.5 L35 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 9.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 19.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 29.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 39.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 49.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 59.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 69.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 79.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 89.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 99.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 109.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 119.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 129.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 139.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 149.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 159.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 169.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 179.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 189.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 199.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 209.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 219.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 229.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 239.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 249.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 259.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 269.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 279.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 289.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 299.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 309.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 319.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 329.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 339.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 349.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 359.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 369.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 379.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 389.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 399.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 409.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 419.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 429.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 439.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 449.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 459.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 469.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/></svg>
                <div style={{ position: "absolute", left: "0px", top: "0px", width: "331px", height: "28px", borderRadius: "8px", background: "linear-gradient(90deg, #b8d2ff 0%, #e3edff 100%)", overflow: "hidden" }} />
              </div>
            </div>
            <div data-fu="row" style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "10px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "436px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "114px", lineHeight: "21px", fontFamily: "'Geist'", fontSize: "16px", fontWeight: 500, color: "#2d2d2d" }}>Tools & Plugins</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "33px", lineHeight: "21px", fontFamily: "'Geist'", fontSize: "16px", fontWeight: 400, color: "#2d2d2d" }}>58%</p>
              </div>
              <div style={{ width: "436px", height: "28px", flexShrink: 0, borderRadius: "8px", background: "#f5f5f5", overflow: "hidden", position: "relative" }}>
                <svg data-fu="plot" style={{ position: "absolute", left: "0px", top: "-5.9px", width: "469.83px", height: "36.71px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="469.83" height="36.71" viewBox="0 0 469.83 36.71" fill="none" overflow="visible"><path transform="matrix(-0.259 0.966 -0.966 -0.259 9.059 2.898)" d="M0 -2.5 L0 0 L35 0 L35 -2.5 L35 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 9.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 19.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 29.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 39.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 49.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 59.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 69.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 79.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 89.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 99.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 109.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 119.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 129.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 139.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 149.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 159.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 169.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 179.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 189.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 199.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 209.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 219.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 229.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 239.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 249.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 259.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 269.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 279.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 289.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 299.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 309.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 319.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 329.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 339.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 349.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 359.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 369.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 379.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 389.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 399.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 409.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 419.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 429.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 439.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 449.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 459.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/><path transform="matrix(-0.259 0.966 -0.966 -0.259 469.835 0)" d="M0 -2.5 L0 0 L38 0 L38 -2.5 L38 -5 L0 -5 L0 -2.5 Z" fill="#ededed"/></svg>
                <div style={{ position: "absolute", left: "0px", top: "0px", width: "253px", height: "28px", borderRadius: "8px", background: "linear-gradient(90deg, #b8d2ff 0%, #e3edff 100%)", overflow: "hidden" }} />
              </div>
            </div>
          </div>
        </div>
        <div style={{ position: "absolute", left: "862px", top: "404px", width: "468px", height: "227px", borderRadius: "8px", background: "#fafafa", boxShadow: "inset 0 0 0 1px #ececec", overflow: "hidden" }}>
          <p style={{ position: "absolute", left: "16px", top: "16px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "134px", lineHeight: "23px", fontFamily: "'Geist'", fontSize: "18px", fontWeight: 600, color: "#1c1b20", letterSpacing: "-0.02em" }}>Policy Coverage</p>
          <div style={{ position: "absolute", left: "16px", top: "67px", width: "437px", height: "126px", display: "flex", flexDirection: "column", gap: "16px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "26px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div data-fu="row" style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ width: "12px", height: "12px", flexShrink: 0, borderRadius: "3px", background: "#484ff5", boxShadow: "inset 0 0 0 0.4px #d6d6d6, inset 0px 4px 4px 0px rgba(255, 255, 255, 0.29)", overflow: "hidden" }} />
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "137px", fontFamily: "'Geist'", fontSize: "16px", fontWeight: 500, color: "#2d2d2d", letterSpacing: "-0.01em", textBox: "trim-both cap alphabetic", height: "11px" }}>Production Agents</p>
                </div>
                <div style={{ flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ width: "180px", height: "6px", flexShrink: 0, borderRadius: "3px", background: "#ececef", overflow: "hidden", position: "relative" }}>
                    <div style={{ position: "absolute", left: "0px", top: "0px", width: "176px", height: "6px", borderRadius: "3px", background: "#484ff5" }} />
                  </div>
                  <p style={{ width: "34px", height: "11px", flexShrink: 0, margin: 0, textAlign: "right", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "16px", fontWeight: 500, color: "#747474", letterSpacing: "-0.01em", textBox: "trim-both cap alphabetic" }}>98%</p>
                </div>
              </div>
              <div data-fu="row" style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ width: "12px", height: "12px", flexShrink: 0, borderRadius: "3px", background: "#fe710c", boxShadow: "inset 0 0 0 0.4px #d6d6d6, inset 0px 4px 4px 0px rgba(255, 255, 255, 0.29)", overflow: "hidden" }} />
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "114px", fontFamily: "'Geist'", fontSize: "16px", fontWeight: 500, color: "#2d2d2d", letterSpacing: "-0.01em", textBox: "trim-both cap alphabetic", height: "11px" }}>Staging Agents</p>
                </div>
                <div style={{ flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ width: "180px", height: "6px", flexShrink: 0, borderRadius: "3px", background: "#ececef", overflow: "hidden", position: "relative" }}>
                    <div style={{ position: "absolute", left: "0px", top: "0px", width: "151px", height: "6px", borderRadius: "3px", background: "#fe710c" }} />
                  </div>
                  <p style={{ width: "34px", height: "11px", flexShrink: 0, margin: 0, textAlign: "right", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "16px", fontWeight: 500, color: "#747474", letterSpacing: "-0.01em", textBox: "trim-both cap alphabetic" }}>84%</p>
                </div>
              </div>
              <div data-fu="row" style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ width: "12px", height: "12px", flexShrink: 0, borderRadius: "3px", background: "#744af7", boxShadow: "inset 0 0 0 0.4px #d6d6d6, inset 0px 4px 4px 0px rgba(255, 255, 255, 0.29)", overflow: "hidden" }} />
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "99px", fontFamily: "'Geist'", fontSize: "16px", fontWeight: 500, color: "#2d2d2d", letterSpacing: "-0.01em", textBox: "trim-both cap alphabetic", height: "11px" }}>Internal Tools</p>
                </div>
                <div style={{ flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ width: "180px", height: "6px", flexShrink: 0, borderRadius: "3px", background: "#ececef", overflow: "hidden", position: "relative" }}>
                    <div style={{ position: "absolute", left: "0px", top: "0px", width: "140px", height: "6px", borderRadius: "3px", background: "#744af7" }} />
                  </div>
                  <p style={{ width: "34px", height: "11px", flexShrink: 0, margin: 0, textAlign: "right", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "16px", fontWeight: 500, color: "#747474", letterSpacing: "-0.01em", textBox: "trim-both cap alphabetic" }}>78%</p>
                </div>
              </div>
              <div data-fu="row" style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ width: "12px", height: "12px", flexShrink: 0, borderRadius: "3px", background: "#56b2ee", boxShadow: "inset 0 0 0 0.4px #d6d6d6, inset 0px 4px 4px 0px rgba(255, 255, 255, 0.29)", overflow: "hidden" }} />
                  <p style={{ width: "137px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "16px", fontWeight: 500, color: "#2d2d2d", letterSpacing: "-0.01em", textBox: "trim-both cap alphabetic", height: "11px" }}>External Plugins</p>
                </div>
                <div style={{ flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ width: "180px", height: "6px", flexShrink: 0, borderRadius: "3px", background: "#ececef", overflow: "hidden", position: "relative" }}>
                    <div style={{ position: "absolute", left: "0px", top: "0px", width: "115px", height: "6px", borderRadius: "3px", background: "#56b2ee" }} />
                  </div>
                  <p style={{ width: "34px", height: "11px", flexShrink: 0, margin: 0, textAlign: "right", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "16px", fontWeight: 500, color: "#747474", letterSpacing: "-0.01em", textBox: "trim-both cap alphabetic" }}>64%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <svg style={{ position: "absolute", left: "8px", top: "25.24px", width: "57.04px", height: "57.04px", opacity: 0.84, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="57.04" height="57.04" viewBox="0 0 57.04 57.04" fill="none" overflow="visible"><path transform="matrix(0.707 -0.707 0.707 0.707 2.593 28.52)" d="M9.8806 1.9999 L14.1798 18.0449 L14.1798 0.404686 C14.5207 0.325134 14.8653 0.255074 15.2132 0.194801 L15.2132 18.0466 L20.0488 0 C20.3972 0.0315475 20.7429 0.072826 21.0855 0.123562 L16.211 18.3155 L25.9002 1.53318 C26.2159 1.67519 26.5268 1.82585 26.8327 1.98486 L17.1073 18.8298 L30.9915 4.94551 C31.2418 5.18223 31.4855 5.42591 31.7222 5.67624 L17.8359 19.5625 L34.6828 9.83598 C34.8418 10.1419 34.9924 10.4528 35.1343 10.7685 L18.3562 20.4554 L36.5432 15.5822 C36.5939 15.9248 36.6351 16.2704 36.6667 16.6189 L18.6204 21.4544 L36.4716 21.4544 C36.4113 21.8023 36.3412 22.1469 36.2617 22.4878 L18.6176 22.4878 L34.6657 26.7879 C34.5009 27.1035 34.3272 27.4137 34.1449 27.7182 L18.3547 23.4872 L31.5432 31.1016 C31.2935 31.3583 31.0364 31.6078 30.7722 31.8497 L17.8392 24.3828 L27.6254 34.169 C27.3158 34.3498 27.0005 34.5219 26.6798 34.6848 L17.1074 25.1124 L23.3793 35.9757 C23.0359 36.0728 22.6885 36.1601 22.3372 36.2374 L16.2116 25.6275 L19.165 36.6498 C18.9018 36.661 18.6371 36.6667 18.3711 36.6667 C18.2803 36.6667 18.1896 36.666 18.0992 36.6647 L15.2132 25.8941 L15.2132 36.3963 C14.8653 36.336 14.5207 36.266 14.1798 36.1864 L14.1798 25.8959 L11.6352 35.3925 C11.3106 35.2645 10.9906 35.1276 10.6754 34.982 L13.1813 25.6298 L8.4772 33.7776 C8.18597 33.5911 7.90036 33.3966 7.62066 33.1944 L12.2878 25.1107 L5.7518 31.6467 C5.50147 31.41 5.25779 31.1663 5.02107 30.916 L11.555 24.3821 L3.47363 29.0479 C3.27142 28.7682 3.07689 28.4826 2.89035 28.1914 L11.0419 23.4851 L1.68513 25.9922 C1.53949 25.677 1.40253 25.357 1.27453 25.0324 L10.7711 22.4878 L0.480495 22.4878 C0.400923 22.1469 0.330844 21.8023 0.270551 21.4544 L10.7684 21.4544 L0.00200216 18.5696 C0.000668927 18.4784 0 18.387 0 18.2955 C0 18.0302 0.00562363 17.7663 0.0167582 17.5037 L11.0404 20.4575 L0.428899 14.3309 C0.506166 13.9796 0.593486 13.6321 0.690541 13.2887 L11.5582 19.5632 L1.98186 9.98682 C2.14478 9.66609 2.31684 9.35078 2.49769 9.04124 L12.2879 18.8315 L4.81804 5.89327 C5.05992 5.62909 5.30942 5.37201 5.56619 5.12237 L13.1819 18.3132 L8.95029 2.52058 C9.25479 2.33834 9.56501 2.16467 9.8806 1.9999 Z" fill="#484ff5"/></svg>
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
