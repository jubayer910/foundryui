"use client";
// Analytics page (axon, Templates) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist, Geist Mono. Icons: Ingot Icons.
import { useEffect, useRef } from "react";
import { AlertTriangle, Bell, Calendar, ChartLine, ChevronDown, ChevronRight, CreditCard, Database, Dots, Download, File, FolderSearch, GitMerge, LayoutDashboard, PlugConnected, Search, Settings, Users } from "ingotui-icons/react/stroke-rounded";
import { Category as CategorySolid } from "ingotui-icons/react/solid";

export function AnalyticsPage() {
  const fuRef = useRef<any>(null);
  useEffect(() => fuInteract(fuRef.current), []);
  return (
    <div ref={fuRef} style={{ width: "1440px", height: "1084px", background: "#ffffff", overflow: "hidden", position: "relative" }}>
      <div style={{ position: "absolute", left: "0px", top: "0px", width: "1440px", height: "1084px", background: "#ffffff", overflow: "hidden" }}>
        <div style={{ position: "absolute", left: "0px", top: "0px", width: "246px", height: "1084px", background: "#f5f5f5", overflow: "hidden" }}>
          <div style={{ position: "absolute", left: "20px", top: "21.69px", width: "82px", height: "28.63px", display: "flex", flexDirection: "row", gap: "27px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6.51px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "28.63px", height: "28.63px", flexShrink: 0, borderRadius: "7.16px", background: "linear-gradient(0deg, #1b8ce8 34.7%, #4eb0ff 93.7%)", boxShadow: "inset 0.72px 0.72px 0px 0px rgba(255, 255, 255, 0.25), inset -0.72px 0.72px 0px 0px rgba(255, 255, 255, 0.25)", position: "relative" }}>
                <svg style={{ position: "absolute", left: "5.86px", top: "6.51px", width: "16.48px", height: "14.38px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="16.48" height="14.38" viewBox="0 0 16.48 14.38" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M14.3275 13.5384 C14.5373 14.0029 14.8866 14.0053 15.1024 13.5444 L16.3152 10.9478 C16.5324 10.4102 16.5324 9.80936 16.3152 9.27177 L13.8023 3.92459 C13.6728 3.68339 13.4834 3.47959 13.2523 3.33282 C13.0212 3.18604 12.7562 3.10123 12.4828 3.08655 L8.02946 3.08655 C7.75654 3.10107 7.49208 3.18629 7.26203 3.33385 C7.03198 3.4814 6.84424 3.68623 6.71722 3.92822 L2.31116 13.5408 C2.09892 14.0029 2.34148 14.3825 2.85085 14.3825 L9.83409 14.3825 C10.3435 14.3825 10.5884 14.0029 10.3774 13.5335 L9.70311 12.0478 C9.57732 11.8055 9.3904 11.6003 9.16087 11.4524 C8.93133 11.3046 8.66715 11.2193 8.3945 11.205 L0.618102 11.205 C0.108731 11.205 -0.135036 10.8253 0.0759894 10.356 L4.4202 0.84289 C4.54695 0.600835 4.73444 0.395878 4.96427 0.248113 C5.19411 0.100349 5.45839 0.0148491 5.73122 0 L7.27753 0 C7.55076 0.0150271 7.8153 0.101295 8.04487 0.250226 C8.27444 0.399158 8.46104 0.605569 8.58612 0.848952 L14.3275 13.5384 Z" fill="#ffffff"/></svg>
              </div>
              <svg style={{ width: "46.86px", height: "16.72px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="46.86" height="16.72" viewBox="0 0 46.86 16.72" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 37.574 3.494)" d="M0 11.4509 L0 0.252595 L2.0418 0.252595 L2.126 3.24163 L1.85236 3.09428 C1.97865 2.36456 2.21722 1.77518 2.56804 1.32612 C2.91887 0.877064 3.34688 0.547288 3.85206 0.336793 C4.35725 0.112264 4.90454 0 5.49393 0 C6.33591 0 7.03055 0.189446 7.57783 0.568338 C8.13915 0.933196 8.56015 1.43838 8.84081 2.0839 C9.1355 2.71539 9.28284 3.43809 9.28284 4.25201 L9.28284 11.4509 L7.0516 11.4509 L7.0516 4.92559 C7.0516 4.26604 6.98143 3.71173 6.8411 3.26268 C6.70077 2.81362 6.46922 2.46981 6.14646 2.23125 C5.8237 1.99269 5.40271 1.87341 4.88349 1.87341 C4.09764 1.87341 3.45914 2.13302 2.96798 2.65224 C2.47683 3.17146 2.23125 3.92925 2.23125 4.92559 L2.23125 11.4509 L0 11.4509 Z" fill="#15171c"/><path transform="matrix(1 0 0 1 25.131 3.494)" d="M5.30448 11.7035 C4.23797 11.7035 3.30478 11.465 2.5049 10.9879 C1.70501 10.5107 1.08756 9.83013 0.652536 8.94605 C0.217513 8.06197 0 7.03054 0 5.85177 C0 4.65896 0.217513 3.62754 0.652536 2.75749 C1.08756 1.88744 1.70501 1.21386 2.5049 0.736734 C3.30478 0.245578 4.23797 0 5.30448 0 C6.37099 0 7.30419 0.245578 8.10407 0.736734 C8.90395 1.21386 9.5214 1.88744 9.95643 2.75749 C10.3915 3.62754 10.609 4.65896 10.609 5.85177 C10.609 7.03054 10.3915 8.06197 9.95643 8.94605 C9.5214 9.83013 8.90395 10.5107 8.10407 10.9879 C7.30419 11.465 6.37099 11.7035 5.30448 11.7035 Z M5.30448 9.76698 C6.25873 9.76698 6.99546 9.42318 7.51468 8.73556 C8.0339 8.03391 8.29352 7.07264 8.29352 5.85177 C8.29352 4.6309 8.0339 3.67665 7.51468 2.98903 C6.99546 2.28738 6.25873 1.93656 5.30448 1.93656 C4.36427 1.93656 3.62754 2.28738 3.09428 2.98903 C2.57506 3.67665 2.31545 4.6309 2.31545 5.85177 C2.31545 7.07264 2.57506 8.03391 3.09428 8.73556 C3.62754 9.42318 4.36427 9.76698 5.30448 9.76698 Z" fill="#15171c"/><path transform="matrix(1 0 0 1 14.023 3.747)" d="M0 11.1984 L4.06256 5.47288 L0.168397 0 L2.65224 0 L5.40973 4.02046 L8.08302 0 L10.63 0 L6.77795 5.51498 L10.7984 11.1984 L8.31457 11.1984 L5.43078 6.9253 L2.52594 11.1984 L0 11.1984 Z" fill="#15171c"/><path transform="matrix(1 0 0 1 0 0)" d="M0 14.9452 L5.38868 0 L8.27247 0 L13.6611 14.9452 L11.2405 14.9452 L9.87223 11.051 L3.76787 11.051 L2.4207 14.9452 L0 14.9452 Z M4.48355 8.98815 L9.1776 8.98815 L6.82005 2.1681 L4.48355 8.98815 Z" fill="#15171c"/></svg>
            </div>
          </div>
          <div style={{ position: "absolute", left: "20px", top: "77px", width: "212px", height: "700px", display: "flex", flexDirection: "column", gap: "20px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ height: "36px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "10px 10px 10px 10px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "72px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#a6a6a6", lineHeight: "20px" }}>Workspace</p>
              </div>
              <div style={{ width: "212px", height: "32px", flexShrink: 0, borderRadius: "10px", display: "flex", flexDirection: "row", padding: "8px 10px 8px 10px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <LayoutDashboard size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#929292", display: "block" }} />
                <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#929292", lineHeight: "20px" }}>Overview</p>
              </div>
              <div style={{ width: "212px", height: "32px", flexShrink: 0, borderRadius: "10px", display: "flex", flexDirection: "row", padding: "8px 10px 8px 10px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <GitMerge size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#929292", display: "block" }} />
                <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#929292", lineHeight: "20px" }}>Workflows</p>
              </div>
              <div style={{ width: "212px", height: "32px", flexShrink: 0, borderRadius: "10px", display: "flex", flexDirection: "row", padding: "8px 10px 8px 10px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <File size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#929292", display: "block" }} />
                <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#929292", lineHeight: "20px" }}>Templates</p>
                <div style={{ flexShrink: 0, borderRadius: "5px", background: "#ffffff", boxShadow: "0px 0px 1px 0px rgba(0, 0, 0, 0.25)", display: "flex", flexDirection: "row", padding: "1px 6px 1px 6px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "23px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#000000", lineHeight: "20px" }}>180</p>
                </div>
              </div>
              <div style={{ width: "212px", height: "32px", flexShrink: 0, borderRadius: "10px", display: "flex", flexDirection: "row", padding: "8px 10px 8px 10px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <GitMerge size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#929292", display: "block" }} />
                <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#929292", lineHeight: "20px" }}>Workflow Builder</p>
              </div>
              <div style={{ width: "212px", height: "32px", flexShrink: 0, borderRadius: "10px", display: "flex", flexDirection: "row", padding: "8px 10px 8px 10px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <svg width={14} height={14} viewBox="0 0 24 24" style={{ width: "14px", height: "14px", flexShrink: 0, color: "#929292", display: "block" }}><path d="M10.53 10.73c-.1-.31-.19-.61-.29-.92-.1-.31-.19-.6-.27-.89-.08-.28-.15-.54-.22-.78h-.02c-.09.43-.2.86-.34 1.29-.15.48-.3.98-.46 1.48-.14.51-.29.98-.44 1.4h2.54c-.06-.211-.14-.46-.23-.721-.09-.269-.18-.559-.27-.859zM19.75.3H4.25C1.9.3 0 2.2 0 4.55v14.9c0 2.35 1.9 4.25 4.25 4.25h15.5c2.35 0 4.25-1.9 4.25-4.25V4.55C24 2.2 22.1.3 19.75.3zM14.7 16.83h-2.091c-.069.01-.139-.04-.159-.11l-.82-2.38H7.91l-.76 2.35c-.02.09-.1.15-.19.141H5.08c-.11 0-.14-.061-.11-.18L8.19 7.38c.03-.1.06-.21.1-.33.04-.21.06-.43.06-.65-.01-.05.03-.1.08-.11h2.59c.08 0 .12.03.13.08l3.65 10.3c.03.109 0 .16-.1.16zm3.4-.15c0 .11-.039.16-.129.16H16.01c-.1 0-.15-.061-.15-.16v-7.7c0-.1.041-.14.131-.14h1.98c.09 0 .129.05.129.14v7.7zm-.209-9.03c-.231.24-.571.37-.911.35-.33.01-.65-.12-.891-.35-.23-.25-.35-.58-.34-.92-.01-.34.12-.66.359-.89.242-.23.562-.35.892-.35.391 0 .689.12.91.35.22.24.34.56.33.89.01.34-.11.67-.349.92z" fill="currentColor" /></svg>
                <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#929292", lineHeight: "20px" }}>AI Configuration</p>
              </div>
              <div style={{ width: "212px", height: "32px", flexShrink: 0, borderRadius: "10px", display: "flex", flexDirection: "row", padding: "8px 10px 8px 10px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <FolderSearch size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#929292", display: "block" }} />
                <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#929292", lineHeight: "20px" }}>Test Run</p>
              </div>
              <div style={{ width: "212px", height: "32px", flexShrink: 0, borderRadius: "10px", display: "flex", flexDirection: "row", padding: "8px 10px 8px 10px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <File size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#929292", display: "block" }} />
                <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#929292", lineHeight: "20px" }}>Review Queue</p>
              </div>
              <div style={{ width: "212px", height: "32px", flexShrink: 0, borderRadius: "6px", background: "#ffffff", boxShadow: "0px 1.4px 1px 0px rgba(0, 0, 0, 0.06), 0px 0px 1px 0px rgba(0, 0, 0, 0.25)", display: "flex", flexDirection: "row", padding: "8px 10px 8px 10px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <ChartLine size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#1b8ce8", display: "block" }} />
                <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#000000", lineHeight: "20px" }}>Analytics</p>
              </div>
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <svg style={{ width: "212px", height: "1px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible", filter: "drop-shadow(0px 1px 0px #ffffff)", marginBottom: "-1px" }} xmlns="http://www.w3.org/2000/svg" width="212" height="1" viewBox="0 0 212 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 -0.5 L0 0 L212 0 L212 -0.5 L212 -1 L0 -1 L0 -0.5 Z" fill="#e8e8e8"/></svg>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ height: "36px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "10px 10px 10px 10px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "71px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#a6a6a6", lineHeight: "20px" }}>Operations</p>
                </div>
                <div style={{ width: "212px", height: "32px", flexShrink: 0, borderRadius: "10px", display: "flex", flexDirection: "row", padding: "8px 10px 8px 10px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <File size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#929292", display: "block" }} />
                  <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#929292", lineHeight: "20px" }}>Runs & Logs</p>
                </div>
                <div style={{ width: "212px", height: "32px", flexShrink: 0, borderRadius: "10px", display: "flex", flexDirection: "row", padding: "8px 10px 8px 10px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <AlertTriangle size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#929292", display: "block" }} />
                  <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#929292", lineHeight: "20px" }}>Exceptions</p>
                </div>
                <div style={{ width: "212px", height: "32px", flexShrink: 0, borderRadius: "10px", display: "flex", flexDirection: "row", padding: "8px 10px 8px 10px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <PlugConnected size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#929292", display: "block" }} />
                  <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#929292", lineHeight: "20px" }}>Connectors</p>
                </div>
                <div style={{ width: "212px", height: "32px", flexShrink: 0, borderRadius: "10px", display: "flex", flexDirection: "row", padding: "8px 10px 8px 10px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <Database size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#929292", display: "block" }} />
                  <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#929292", lineHeight: "20px" }}>Data Sources</p>
                </div>
              </div>
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <svg style={{ width: "212px", height: "1px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible", filter: "drop-shadow(0px 1px 0px #ffffff)", marginBottom: "-1px" }} xmlns="http://www.w3.org/2000/svg" width="212" height="1" viewBox="0 0 212 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 -0.5 L0 0 L212 0 L212 -0.5 L212 -1 L0 -1 L0 -0.5 Z" fill="#e8e8e8"/></svg>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ height: "36px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "10px 10px 10px 10px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "94px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#a6a6a6", lineHeight: "20px" }}>Administration</p>
                </div>
                <div style={{ width: "212px", height: "32px", flexShrink: 0, borderRadius: "10px", display: "flex", flexDirection: "row", padding: "8px 10px 8px 10px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <Users size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#929292", display: "block" }} />
                  <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#929292", lineHeight: "20px" }}>Team & Permissions</p>
                </div>
                <div style={{ width: "212px", height: "32px", flexShrink: 0, borderRadius: "10px", display: "flex", flexDirection: "row", padding: "8px 10px 8px 10px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <Bell size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#929292", display: "block" }} />
                  <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#929292", lineHeight: "20px" }}>Notifications</p>
                  <div style={{ flexShrink: 0, borderRadius: "5px", background: "#ffffff", boxShadow: "0px 0px 1px 0px rgba(0, 0, 0, 0.25)", display: "flex", flexDirection: "row", padding: "1px 6px 1px 6px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "16px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#000000", lineHeight: "20px" }}>78</p>
                  </div>
                </div>
                <div style={{ width: "212px", height: "32px", flexShrink: 0, borderRadius: "10px", display: "flex", flexDirection: "row", padding: "8px 10px 8px 10px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <CreditCard size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#929292", display: "block" }} />
                  <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#929292", lineHeight: "20px" }}>Usage & Billing</p>
                </div>
                <div style={{ width: "212px", height: "32px", flexShrink: 0, borderRadius: "10px", display: "flex", flexDirection: "row", padding: "8px 10px 8px 10px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <File size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#929292", display: "block" }} />
                  <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#929292", lineHeight: "20px" }}>Audit Log</p>
                </div>
                <div style={{ width: "212px", height: "32px", flexShrink: 0, borderRadius: "10px", display: "flex", flexDirection: "row", padding: "8px 10px 8px 10px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <Settings size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#929292", display: "block" }} />
                  <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#929292", lineHeight: "20px" }}>System Settings</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <svg style={{ position: "absolute", left: "246px", top: "0px", width: "1px", height: "1084px", display: "block", lineHeight: 0, overflow: "visible", filter: "drop-shadow(2px 0px 0px #ffffff)" }} xmlns="http://www.w3.org/2000/svg" width="1" height="1084" viewBox="0 0 1 1084" fill="none" overflow="visible"><path transform="matrix(0 1 -1 0 0 0)" d="M0 -0.5 L0 0 L1084 0 L1084 -0.5 L1084 -1 L0 -1 L0 -0.5 Z" fill="#e8e8e8"/></svg>
        <div style={{ position: "absolute", left: "247px", top: "0px", width: "1193px", height: "74px", background: "#ffffff", display: "flex", flexDirection: "row", padding: "20px 20px 20px 20px", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <CategorySolid size={14} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#b3b3b3", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "72px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#b3b3b3", lineHeight: "20px" }}>Workspace</p>
            </div>
            <ChevronRight size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#686765", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "59px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#666d80", lineHeight: "20px" }}>Analytics</p>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ height: "32px", flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e8e8e8", display: "flex", flexDirection: "row", padding: "8px 8px 8px 8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "223px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <Search size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#979797", display: "block" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "57px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#979797", lineHeight: "20px" }}>Search....</p>
              </div>
            </div>
            <div style={{ flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e8e8e8", overflow: "hidden", display: "flex", flexDirection: "row", padding: "7px 8px 7px 8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "30px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#686765", lineHeight: "20px" }}>Help</p>
            </div>
            <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "10px", background: "url('https://ingotui.com/library-img/232efcbc3e38653b836fdc20a462210bf2f00cbb.png') center / cover no-repeat, linear-gradient(#ffffff, #ffffff)", boxShadow: "inset 0 0 0 0.63px #e8e8e8", overflow: "hidden" }} />
          </div>
        </div>
        <svg style={{ position: "absolute", left: "0px", top: "73px", width: "1440px", height: "1px", display: "block", lineHeight: 0, overflow: "visible", filter: "drop-shadow(0px 2px 0px #ffffff)" }} xmlns="http://www.w3.org/2000/svg" width="1440" height="1" viewBox="0 0 1440 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 -0.5 L0 0 L1440 0 L1440 -0.5 L1440 -1 L0 -1 L0 -0.5 Z" fill="#e8e8e8"/></svg>
      </div>
      <div style={{ position: "absolute", left: "265px", top: "92px", width: "1155px", height: "952px", display: "flex", flexDirection: "column", gap: "16px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "16px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "67px", fontFamily: "'Geist'", fontSize: "16px", fontWeight: 400, color: "#15171c", lineHeight: "24px", letterSpacing: "-0.1px" }}>Analytics</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "411px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>How much work Axon is doing — and where it still needs people.</p>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "170px", height: "32px", flexShrink: 0, borderRadius: "9px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e8e8e8", display: "flex", flexDirection: "row", padding: "7px 9px 7px 11px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <Calendar size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
              <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>Last 30 days</p>
              <ChevronDown size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "28px", flexShrink: 0, borderRadius: "8px", background: "#dfe0e5", display: "flex", flexDirection: "row", padding: "2px 2px 2px 2px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <svg style={{ width: "12px", height: "12px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible", filter: "drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.18))" }} xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M12 6 C12 9.31371 9.31371 12 6 12 C2.68629 12 0 9.31371 0 6 C0 2.68629 2.68629 0 6 0 C9.31371 0 12 2.68629 12 6 Z" fill="#ffffff"/></svg>
              </div>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "59px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>Compare</p>
            </div>
            <div style={{ flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e8e8e8", display: "flex", flexDirection: "row", padding: "7px 13px 7px 13px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <Download size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "42px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#686765", lineHeight: "20px" }}>Export</p>
              <ChevronDown size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
            </div>
          </div>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "14px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ width: "278px", height: "132px", flexShrink: 0, borderRadius: "12px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ededed", overflow: "hidden", position: "relative" }}>
            <div style={{ position: "absolute", left: "16px", top: "103px", width: "244.32px", height: "13px", display: "flex", flexDirection: "row", gap: "1.15px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#1b8ce8", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#1b8ce8", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#1b8ce8", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#1b8ce8", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#1b8ce8", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#1b8ce8", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#1b8ce8", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#1b8ce8", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#1b8ce8", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#1b8ce8", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#1b8ce8", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#1b8ce8", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#1b8ce8", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#1b8ce8", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#1b8ce8", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#1b8ce8", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#1b8ce8", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#1b8ce8", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#1b8ce8", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#1b8ce8", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#1b8ce8", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#1b8ce8", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#1b8ce8", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#228fe9", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#228fe9", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#228fe9", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#228fe9", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#228fe9", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#228fe9", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#228fe9", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#228fe9", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#228fe9", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#228fe9", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#228fe9", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#228fe9", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#228fe9", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#228fe9", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#228fe9", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#2b93ea", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#2b93ea", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#2b93ea", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#2b93ea", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#2b93ea", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#2b93ea", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#2b93ea", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#2b93ea", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#2b93ea", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#2b93ea", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#f1f1f3", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#f1f1f3", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#f1f1f3", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
            </div>
            <svg style={{ position: "absolute", left: "17px", top: "27px", width: "1px", height: "88px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="1" height="88" viewBox="0 0 1 88" fill="none" overflow="visible"><path transform="matrix(0 -1 1 0 0 88)" d="M85.3333 0 C85.3333 1.47276 86.5272 2.66667 88 2.66667 C89.4728 2.66667 90.6667 1.47276 90.6667 0 C90.6667 -1.47276 89.4728 -2.66667 88 -2.66667 C86.5272 -2.66667 85.3333 -1.47276 85.3333 0 Z M0 0 L0 0.5 L88 0.5 L88 0 L88 -0.5 L0 -0.5 L0 0 Z" fill="#1b8ce8"/></svg>
            <div style={{ position: "absolute", left: "25px", top: "17px", width: "233px", height: "76px", display: "flex", flexDirection: "column", gap: "10px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "50px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ width: "150px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <p style={{ alignSelf: "stretch", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#697386", lineHeight: "20px" }}>Hours saved</p>
                  <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "35px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>412 h</p>
                    <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "2px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                      <svg style={{ width: "12px", height: "12px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 3 3)" d="M-0.424264 5.57574 C-0.658579 5.81005 -0.658579 6.18995 -0.424264 6.42426 C-0.189949 6.65858 0.189949 6.65858 0.424264 6.42426 L0 6 L-0.424264 5.57574 Z M6.42426 0.424264 C6.65858 0.189949 6.65858 -0.189949 6.42426 -0.424264 C6.18995 -0.658579 5.81005 -0.658579 5.57574 -0.424264 L6 0 L6.42426 0.424264 Z M0 6 L0.424264 6.42426 L6.42426 0.424264 L6 0 L5.57574 -0.424264 L-0.424264 5.57574 L0 6 Z" fill="#17a673"/><path transform="matrix(1 0 0 1 4.125 3)" d="M0 -0.6 C-0.331371 -0.6 -0.6 -0.331371 -0.6 0 C-0.6 0.331371 -0.331371 0.6 0 0.6 L0 0 L0 -0.6 Z M4.875 0 L5.475 0 C5.475 -0.331371 5.20637 -0.6 4.875 -0.6 L4.875 0 Z M4.275 4.875 C4.275 5.20637 4.54363 5.475 4.875 5.475 C5.20637 5.475 5.475 5.20637 5.475 4.875 L4.875 4.875 L4.275 4.875 Z M0 0 L0 0.6 L4.875 0.6 L4.875 0 L4.875 -0.6 L0 -0.6 L0 0 Z M4.875 0 L4.275 0 L4.275 4.875 L4.875 4.875 L5.475 4.875 L5.475 0 L4.875 0 Z" fill="#17a673"/></svg>
                      <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "45px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#17a673", lineHeight: "20px" }}>+18.2%</p>
                    </div>
                  </div>
                </div>
                <div style={{ width: "33px", flexShrink: 0, borderRadius: "7px", background: "#ffffff", boxShadow: "inset 0 0 0 0.6px #e8e8e8", overflow: "hidden", display: "flex", flexDirection: "row", padding: "7px 8px 7px 8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ position: "relative", flexShrink: 0, alignSelf: "flex-start", marginTop: "0px", width: "18px", height: "18px" }}>
                    <Dots size={18} strokeWidth={2} style={{ position: "absolute", left: "18px", top: "0px", width: "18px", height: "18px", transform: "rotate(90deg)", transformOrigin: "top left", color: "#c4c4c4", display: "block", flexShrink: 0 }} />
                  </div>
                </div>
              </div>
              <p style={{ alignSelf: "stretch", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#697386", lineHeight: "20px" }}>vs. previous 30 days</p>
            </div>
          </div>
          <div style={{ width: "278px", height: "132px", flexShrink: 0, borderRadius: "12px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ededed", overflow: "hidden", position: "relative" }}>
            <div style={{ position: "absolute", left: "16px", top: "103px", width: "244.32px", height: "13px", display: "flex", flexDirection: "row", gap: "1.15px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ff5601", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ff5601", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ff5601", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ff5601", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ff5601", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ff5601", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ff5601", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ff5601", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ff5601", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ff5601", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ff5601", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ff5601", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ff5601", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#e1e2e6", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#e1e2e6", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#e1e2e6", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#e1e2e6", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#e1e2e6", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#e1e2e6", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#e1e2e6", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#e1e2e6", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#e1e2e6", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#e1e2e6", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
            </div>
            <svg style={{ position: "absolute", left: "17px", top: "27px", width: "1px", height: "88px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="1" height="88" viewBox="0 0 1 88" fill="none" overflow="visible"><path transform="matrix(0 -1 1 0 0 88)" d="M85.3333 0 C85.3333 1.47276 86.5272 2.66667 88 2.66667 C89.4728 2.66667 90.6667 1.47276 90.6667 0 C90.6667 -1.47276 89.4728 -2.66667 88 -2.66667 C86.5272 -2.66667 85.3333 -1.47276 85.3333 0 Z M0 0 L0 0.5 L88 0.5 L88 0 L88 -0.5 L0 -0.5 L0 0 Z" fill="#ff5601"/></svg>
            <div style={{ position: "absolute", left: "25px", top: "17px", width: "233px", height: "76px", display: "flex", flexDirection: "column", gap: "10px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "50px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ width: "150px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <p style={{ alignSelf: "stretch", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#697386", lineHeight: "20px" }}>Automation rate</p>
                  <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "39px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>78.6%</p>
                    <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "2px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                      <svg style={{ width: "12px", height: "12px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 3 3)" d="M-0.424264 5.57574 C-0.658579 5.81005 -0.658579 6.18995 -0.424264 6.42426 C-0.189949 6.65858 0.189949 6.65858 0.424264 6.42426 L0 6 L-0.424264 5.57574 Z M6.42426 0.424264 C6.65858 0.189949 6.65858 -0.189949 6.42426 -0.424264 C6.18995 -0.658579 5.81005 -0.658579 5.57574 -0.424264 L6 0 L6.42426 0.424264 Z M0 6 L0.424264 6.42426 L6.42426 0.424264 L6 0 L5.57574 -0.424264 L-0.424264 5.57574 L0 6 Z" fill="#17a673"/><path transform="matrix(1 0 0 1 4.125 3)" d="M0 -0.6 C-0.331371 -0.6 -0.6 -0.331371 -0.6 0 C-0.6 0.331371 -0.331371 0.6 0 0.6 L0 0 L0 -0.6 Z M4.875 0 L5.475 0 C5.475 -0.331371 5.20637 -0.6 4.875 -0.6 L4.875 0 Z M4.275 4.875 C4.275 5.20637 4.54363 5.475 4.875 5.475 C5.20637 5.475 5.475 5.20637 5.475 4.875 L4.875 4.875 L4.275 4.875 Z M0 0 L0 0.6 L4.875 0.6 L4.875 0 L4.875 -0.6 L0 -0.6 L0 0 Z M4.875 0 L4.275 0 L4.275 4.875 L4.875 4.875 L5.475 4.875 L5.475 0 L4.875 0 Z" fill="#17a673"/></svg>
                      <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "48px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#17a673", lineHeight: "20px" }}>+3.1 pts</p>
                    </div>
                  </div>
                </div>
                <div style={{ width: "33px", flexShrink: 0, borderRadius: "7px", background: "#ffffff", boxShadow: "inset 0 0 0 0.6px #e8e8e8", overflow: "hidden", display: "flex", flexDirection: "row", padding: "7px 8px 7px 8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ position: "relative", flexShrink: 0, alignSelf: "flex-start", marginTop: "0px", width: "18px", height: "18px" }}>
                    <Dots size={18} strokeWidth={2} style={{ position: "absolute", left: "18px", top: "0px", width: "18px", height: "18px", transform: "rotate(90deg)", transformOrigin: "top left", color: "#c4c4c4", display: "block", flexShrink: 0 }} />
                  </div>
                </div>
              </div>
              <p style={{ alignSelf: "stretch", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#697386", lineHeight: "20px" }}>Runs with no human step</p>
            </div>
          </div>
          <div style={{ width: "278px", height: "132px", flexShrink: 0, borderRadius: "12px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ededed", overflow: "hidden", position: "relative" }}>
            <div style={{ position: "absolute", left: "16px", top: "103px", width: "244.32px", height: "13px", display: "flex", flexDirection: "row", gap: "1.15px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#f01d82", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#f01d82", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#f01d82", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#f01d82", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#f01d82", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#f01d82", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#f01d82", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#f01d82", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#f01d82", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#f01d82", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#f01d82", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#f01d82", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
            </div>
            <svg style={{ position: "absolute", left: "17px", top: "27px", width: "1px", height: "88px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="1" height="88" viewBox="0 0 1 88" fill="none" overflow="visible"><path transform="matrix(0 -1 1 0 0 88)" d="M85.3333 0 C85.3333 1.47276 86.5272 2.66667 88 2.66667 C89.4728 2.66667 90.6667 1.47276 90.6667 0 C90.6667 -1.47276 89.4728 -2.66667 88 -2.66667 C86.5272 -2.66667 85.3333 -1.47276 85.3333 0 Z M0 0 L0 0.5 L88 0.5 L88 0 L88 -0.5 L0 -0.5 L0 0 Z" fill="#ef0c78"/></svg>
            <div style={{ position: "absolute", left: "25px", top: "17px", width: "233px", height: "76px", display: "flex", flexDirection: "column", gap: "10px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "50px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ width: "150px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <p style={{ alignSelf: "stretch", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#697386", lineHeight: "20px" }}>Cost per run</p>
                  <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "47px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>$0.042</p>
                    <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "2px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                      <svg style={{ width: "12px", height: "12px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 3 3)" d="M-0.424264 5.57574 C-0.658579 5.81005 -0.658579 6.18995 -0.424264 6.42426 C-0.189949 6.65858 0.189949 6.65858 0.424264 6.42426 L0 6 L-0.424264 5.57574 Z M6.42426 0.424264 C6.65858 0.189949 6.65858 -0.189949 6.42426 -0.424264 C6.18995 -0.658579 5.81005 -0.658579 5.57574 -0.424264 L6 0 L6.42426 0.424264 Z M0 6 L0.424264 6.42426 L6.42426 0.424264 L6 0 L5.57574 -0.424264 L-0.424264 5.57574 L0 6 Z" fill="#17a673"/><path transform="matrix(1 0 0 1 4.125 3)" d="M0 -0.6 C-0.331371 -0.6 -0.6 -0.331371 -0.6 0 C-0.6 0.331371 -0.331371 0.6 0 0.6 L0 0 L0 -0.6 Z M4.875 0 L5.475 0 C5.475 -0.331371 5.20637 -0.6 4.875 -0.6 L4.875 0 Z M4.275 4.875 C4.275 5.20637 4.54363 5.475 4.875 5.475 C5.20637 5.475 5.475 5.20637 5.475 4.875 L4.875 4.875 L4.275 4.875 Z M0 0 L0 0.6 L4.875 0.6 L4.875 0 L4.875 -0.6 L0 -0.6 L0 0 Z M4.875 0 L4.275 0 L4.275 4.875 L4.875 4.875 L5.475 4.875 L5.475 0 L4.875 0 Z" fill="#17a673"/></svg>
                      <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "39px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#17a673", lineHeight: "20px" }}>−8.0%</p>
                    </div>
                  </div>
                </div>
                <div style={{ width: "33px", flexShrink: 0, borderRadius: "7px", background: "#ffffff", boxShadow: "inset 0 0 0 0.6px #e8e8e8", overflow: "hidden", display: "flex", flexDirection: "row", padding: "7px 8px 7px 8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ position: "relative", flexShrink: 0, alignSelf: "flex-start", marginTop: "0px", width: "18px", height: "18px" }}>
                    <Dots size={18} strokeWidth={2} style={{ position: "absolute", left: "18px", top: "0px", width: "18px", height: "18px", transform: "rotate(90deg)", transformOrigin: "top left", color: "#c4c4c4", display: "block", flexShrink: 0 }} />
                  </div>
                </div>
              </div>
              <p style={{ alignSelf: "stretch", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#697386", lineHeight: "20px" }}>Model + compute</p>
            </div>
          </div>
          <div style={{ width: "278px", height: "132px", flexShrink: 0, borderRadius: "12px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ededed", overflow: "hidden", position: "relative" }}>
            <div style={{ position: "absolute", left: "16px", top: "103px", width: "244.32px", height: "13px", display: "flex", flexDirection: "row", gap: "1.15px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#f96cd8", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#f96cd8", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#f96cd8", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#f96cd8", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#f96cd8", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#f96cd8", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#f96cd8", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#f96cd8", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#f96cd8", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#f96cd8", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#f96cd8", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#f96cd8", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#f96cd8", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#f96cd8", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#f96cd8", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#f96cd8", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#f96cd8", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#e0e1e6", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#e0e1e6", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#e0e1e6", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#e0e1e6", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#e0e1e6", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#e0e1e6", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#e0e1e6", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5", boxShadow: "inset 0px 1.53px 1.53px 0px rgba(255, 255, 255, 0.25)" }} />
            </div>
            <svg style={{ position: "absolute", left: "17px", top: "27px", width: "1px", height: "88px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="1" height="88" viewBox="0 0 1 88" fill="none" overflow="visible"><path transform="matrix(0 -1 1 0 0 88)" d="M85.3333 0 C85.3333 1.47276 86.5272 2.66667 88 2.66667 C89.4728 2.66667 90.6667 1.47276 90.6667 0 C90.6667 -1.47276 89.4728 -2.66667 88 -2.66667 C86.5272 -2.66667 85.3333 -1.47276 85.3333 0 Z M0 0 L0 0.5 L88 0.5 L88 0 L88 -0.5 L0 -0.5 L0 0 Z" fill="#f96cd8"/></svg>
            <div style={{ position: "absolute", left: "25px", top: "17px", width: "233px", height: "76px", display: "flex", flexDirection: "column", gap: "10px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "50px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ width: "150px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <p style={{ alignSelf: "stretch", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#697386", lineHeight: "20px" }}>Exception rate</p>
                  <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "27px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>2.1%</p>
                    <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "2px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                      <svg style={{ width: "12px", height: "12px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 3 3)" d="M-0.424264 5.57574 C-0.658579 5.81005 -0.658579 6.18995 -0.424264 6.42426 C-0.189949 6.65858 0.189949 6.65858 0.424264 6.42426 L0 6 L-0.424264 5.57574 Z M6.42426 0.424264 C6.65858 0.189949 6.65858 -0.189949 6.42426 -0.424264 C6.18995 -0.658579 5.81005 -0.658579 5.57574 -0.424264 L6 0 L6.42426 0.424264 Z M0 6 L0.424264 6.42426 L6.42426 0.424264 L6 0 L5.57574 -0.424264 L-0.424264 5.57574 L0 6 Z" fill="#17a673"/><path transform="matrix(1 0 0 1 4.125 3)" d="M0 -0.6 C-0.331371 -0.6 -0.6 -0.331371 -0.6 0 C-0.6 0.331371 -0.331371 0.6 0 0.6 L0 0 L0 -0.6 Z M4.875 0 L5.475 0 C5.475 -0.331371 5.20637 -0.6 4.875 -0.6 L4.875 0 Z M4.275 4.875 C4.275 5.20637 4.54363 5.475 4.875 5.475 C5.20637 5.475 5.475 5.20637 5.475 4.875 L4.875 4.875 L4.275 4.875 Z M0 0 L0 0.6 L4.875 0.6 L4.875 0 L4.875 -0.6 L0 -0.6 L0 0 Z M4.875 0 L4.275 0 L4.275 4.875 L4.875 4.875 L5.475 4.875 L5.475 0 L4.875 0 Z" fill="#17a673"/></svg>
                      <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "52px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#17a673", lineHeight: "20px" }}>−0.4 pts</p>
                    </div>
                  </div>
                </div>
                <div style={{ width: "33px", flexShrink: 0, borderRadius: "7px", background: "#ffffff", boxShadow: "inset 0 0 0 0.6px #e8e8e8", overflow: "hidden", display: "flex", flexDirection: "row", padding: "7px 8px 7px 8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ position: "relative", flexShrink: 0, alignSelf: "flex-start", marginTop: "0px", width: "18px", height: "18px" }}>
                    <Dots size={18} strokeWidth={2} style={{ position: "absolute", left: "18px", top: "0px", width: "18px", height: "18px", transform: "rotate(90deg)", transformOrigin: "top left", color: "#c4c4c4", display: "block", flexShrink: 0 }} />
                  </div>
                </div>
              </div>
              <p style={{ alignSelf: "stretch", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#697386", lineHeight: "20px" }}>Failed or rejected</p>
            </div>
          </div>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "16px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ flex: "1 1 0", minWidth: 0, height: "384px", flexShrink: 0, borderRadius: "12px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ededed", display: "flex", flexDirection: "column", padding: "19px 19px 19px 19px", gap: "14px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "109px", fontFamily: "'Geist'", fontSize: "16px", fontWeight: 400, color: "#15171c", lineHeight: "24px", letterSpacing: "-0.1px" }}>Runs over time</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "124px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>186,240 runs · daily</p>
              </div>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", flexWrap: "wrap", rowGap: "14px", columnGap: "14px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ width: "10px", height: "4px", flexShrink: 0, borderRadius: "2px", background: "#1b8ce8" }} />
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "71px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>Automated</p>
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ width: "10px", height: "4px", flexShrink: 0, borderRadius: "2px", background: "#ffc89e" }} />
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "63px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>Reviewed</p>
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ width: "10px", height: "4px", flexShrink: 0, borderRadius: "2px", background: "#e5484d" }} />
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "39px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>Failed</p>
                </div>
              </div>
            </div>
            <div style={{ alignSelf: "stretch", flex: "1 1 0", minHeight: 0, flexShrink: 0, position: "relative" }}>
              <p style={{ position: "absolute", left: "0px", top: "-7px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "17px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>8k</p>
              <svg style={{ position: "absolute", left: "40px", top: "3px", width: "701px", height: "1px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="701" height="1" viewBox="0 0 701 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 -0.5 L0 0 L701 0 L701 -0.5 L701 -1 L0 -1 L0 -0.5 Z" fill="#f5f5f5"/></svg>
              <p style={{ position: "absolute", left: "0px", top: "55.5px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "17px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>6k</p>
              <svg style={{ position: "absolute", left: "40px", top: "65.5px", width: "701px", height: "1px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="701" height="1" viewBox="0 0 701 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 -0.5 L0 0 L701 0 L701 -0.5 L701 -1 L0 -1 L0 -0.5 Z" fill="#f5f5f5"/></svg>
              <p style={{ position: "absolute", left: "0px", top: "118px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "17px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>4k</p>
              <svg style={{ position: "absolute", left: "40px", top: "128px", width: "701px", height: "1px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="701" height="1" viewBox="0 0 701 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 -0.5 L0 0 L701 0 L701 -0.5 L701 -1 L0 -1 L0 -0.5 Z" fill="#f5f5f5"/></svg>
              <p style={{ position: "absolute", left: "0px", top: "180.5px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "17px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>2k</p>
              <svg style={{ position: "absolute", left: "40px", top: "190.5px", width: "701px", height: "1px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="701" height="1" viewBox="0 0 701 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 -0.5 L0 0 L701 0 L701 -0.5 L701 -1 L0 -1 L0 -0.5 Z" fill="#f5f5f5"/></svg>
              <p style={{ position: "absolute", left: "0px", top: "243px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "10px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>0</p>
              <svg style={{ position: "absolute", left: "40px", top: "253px", width: "701px", height: "1px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="701" height="1" viewBox="0 0 701 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 -0.5 L0 0 L701 0 L701 -0.5 L701 -1 L0 -1 L0 -0.5 Z" fill="#f5f5f5"/></svg>
              <div data-fu="bar" style={{ position: "absolute", left: "45.31px", top: "121.75px", width: "12.75px", height: "131.25px", background: "#1b8ce8" }} />
              <div data-fu="bar" style={{ position: "absolute", left: "45.31px", top: "91.6px", width: "12.75px", height: "28.88px", background: "#ffc89e" }} />
              <div data-fu="bar" style={{ position: "absolute", left: "45.31px", top: "87.7px", width: "12.75px", height: "2.63px", borderRadius: "3px 3px 0px 0px", background: "#e5484d" }} />
              <div data-fu="bar" style={{ position: "absolute", left: "68.68px", top: "107.22px", width: "12.75px", height: "145.78px", background: "#1b8ce8" }} />
              <div data-fu="bar" style={{ position: "absolute", left: "68.68px", top: "74.16px", width: "12.75px", height: "31.78px", background: "#ffc89e" }} />
              <div data-fu="bar" style={{ position: "absolute", left: "68.68px", top: "69.98px", width: "12.75px", height: "2.91px", borderRadius: "3px 3px 0px 0px", background: "#e5484d" }} />
              <div data-fu="bar" style={{ position: "absolute", left: "92.04px", top: "93.47px", width: "12.75px", height: "159.53px", background: "#1b8ce8" }} />
              <div data-fu="bar" style={{ position: "absolute", left: "92.04px", top: "57.72px", width: "12.75px", height: "34.47px", background: "#ffc89e" }} />
              <div data-fu="bar" style={{ position: "absolute", left: "92.04px", top: "53.26px", width: "12.75px", height: "3.19px", borderRadius: "3px 3px 0px 0px", background: "#e5484d" }} />
              <div data-fu="bar" style={{ position: "absolute", left: "115.41px", top: "81.16px", width: "12.75px", height: "171.84px", background: "#1b8ce8" }} />
              <div data-fu="bar" style={{ position: "absolute", left: "115.41px", top: "43.1px", width: "12.75px", height: "36.78px", background: "#ffc89e" }} />
              <div data-fu="bar" style={{ position: "absolute", left: "115.41px", top: "38.39px", width: "12.75px", height: "3.44px", borderRadius: "3px 3px 0px 0px", background: "#e5484d" }} />
              <div data-fu="bar" style={{ position: "absolute", left: "138.78px", top: "70.91px", width: "12.75px", height: "182.09px", background: "#1b8ce8" }} />
              <div data-fu="bar" style={{ position: "absolute", left: "138.78px", top: "31.04px", width: "12.75px", height: "38.59px", background: "#ffc89e" }} />
              <div data-fu="bar" style={{ position: "absolute", left: "138.78px", top: "26.11px", width: "12.75px", height: "3.66px", borderRadius: "3px 3px 0px 0px", background: "#e5484d" }} />
              <div data-fu="bar" style={{ position: "absolute", left: "162.14px", top: "113.28px", width: "12.75px", height: "139.72px", background: "#1b8ce8" }} />
              <div data-fu="bar" style={{ position: "absolute", left: "162.14px", top: "82.66px", width: "12.75px", height: "29.34px", background: "#ffc89e" }} />
              <div data-fu="bar" style={{ position: "absolute", left: "162.14px", top: "78.61px", width: "12.75px", height: "2.78px", borderRadius: "3px 3px 0px 0px", background: "#e5484d" }} />
              <div data-fu="bar" style={{ position: "absolute", left: "185.51px", top: "108.56px", width: "12.75px", height: "144.44px", background: "#1b8ce8" }} />
              <div data-fu="bar" style={{ position: "absolute", left: "185.51px", top: "77.26px", width: "12.75px", height: "30.03px", background: "#ffc89e" }} />
              <div data-fu="bar" style={{ position: "absolute", left: "185.51px", top: "73.11px", width: "12.75px", height: "2.88px", borderRadius: "3px 3px 0px 0px", background: "#e5484d" }} />
              <div data-fu="bar" style={{ position: "absolute", left: "208.88px", top: "57px", width: "12.75px", height: "196px", background: "#1b8ce8" }} />
              <div data-fu="bar" style={{ position: "absolute", left: "208.88px", top: "15.35px", width: "12.75px", height: "40.38px", background: "#ffc89e" }} />
              <div data-fu="bar" style={{ position: "absolute", left: "208.88px", top: "10.17px", width: "12.75px", height: "3.91px", borderRadius: "3px 3px 0px 0px", background: "#e5484d" }} />
              <div data-fu="bar" style={{ position: "absolute", left: "232.24px", top: "58.59px", width: "12.75px", height: "194.41px", background: "#1b8ce8" }} />
              <div data-fu="bar" style={{ position: "absolute", left: "232.24px", top: "17.66px", width: "12.75px", height: "39.66px", background: "#ffc89e" }} />
              <div data-fu="bar" style={{ position: "absolute", left: "232.24px", top: "12.51px", width: "12.75px", height: "3.88px", borderRadius: "3px 3px 0px 0px", background: "#e5484d" }} />
              <div data-fu="bar" style={{ position: "absolute", left: "255.61px", top: "63.22px", width: "12.75px", height: "189.78px", background: "#1b8ce8" }} />
              <div data-fu="bar" style={{ position: "absolute", left: "255.61px", top: "23.6px", width: "12.75px", height: "38.34px", background: "#ffc89e" }} />
              <div data-fu="bar" style={{ position: "absolute", left: "255.61px", top: "18.54px", width: "12.75px", height: "3.78px", borderRadius: "3px 3px 0px 0px", background: "#e5484d" }} />
              <div data-fu="bar" style={{ position: "absolute", left: "278.98px", top: "70.47px", width: "12.75px", height: "182.53px", background: "#1b8ce8" }} />
              <div data-fu="bar" style={{ position: "absolute", left: "278.98px", top: "32.69px", width: "12.75px", height: "36.5px", background: "#ffc89e" }} />
              <div data-fu="bar" style={{ position: "absolute", left: "278.98px", top: "27.76px", width: "12.75px", height: "3.66px", borderRadius: "3px 3px 0px 0px", background: "#e5484d" }} />
              <div data-fu="bar" style={{ position: "absolute", left: "302.34px", top: "79.94px", width: "12.75px", height: "173.06px", background: "#1b8ce8" }} />
              <div data-fu="bar" style={{ position: "absolute", left: "302.34px", top: "44.38px", width: "12.75px", height: "34.28px", background: "#ffc89e" }} />
              <div data-fu="bar" style={{ position: "absolute", left: "302.34px", top: "39.64px", width: "12.75px", height: "3.47px", borderRadius: "3px 3px 0px 0px", background: "#e5484d" }} />
              <div data-fu="bar" style={{ position: "absolute", left: "325.71px", top: "140.97px", width: "12.75px", height: "112.03px", background: "#1b8ce8" }} />
              <div data-fu="bar" style={{ position: "absolute", left: "325.71px", top: "117.72px", width: "12.75px", height: "21.97px", background: "#ffc89e" }} />
              <div data-fu="bar" style={{ position: "absolute", left: "325.71px", top: "113.9px", width: "12.75px", height: "2.55px", borderRadius: "3px 3px 0px 0px", background: "#e5484d" }} />
              <div data-fu="bar" style={{ position: "absolute", left: "349.08px", top: "152.91px", width: "12.75px", height: "100.09px", background: "#1b8ce8" }} />
              <div data-fu="bar" style={{ position: "absolute", left: "349.08px", top: "132.22px", width: "12.75px", height: "19.41px", background: "#ffc89e" }} />
              <div data-fu="bar" style={{ position: "absolute", left: "349.08px", top: "128.4px", width: "12.75px", height: "2.55px", borderRadius: "3px 3px 0px 0px", background: "#e5484d" }} />
              <div data-fu="bar" style={{ position: "absolute", left: "372.44px", top: "114.97px", width: "12.75px", height: "138.03px", background: "#1b8ce8" }} />
              <div data-fu="bar" style={{ position: "absolute", left: "372.44px", top: "87.19px", width: "12.75px", height: "26.5px", background: "#ffc89e" }} />
              <div data-fu="bar" style={{ position: "absolute", left: "372.44px", top: "83.17px", width: "12.75px", height: "2.75px", borderRadius: "3px 3px 0px 0px", background: "#e5484d" }} />
              <div data-fu="bar" style={{ position: "absolute", left: "395.81px", top: "126.44px", width: "12.75px", height: "126.56px", background: "#1b8ce8" }} />
              <div data-fu="bar" style={{ position: "absolute", left: "395.81px", top: "101.1px", width: "12.75px", height: "24.06px", background: "#ffc89e" }} />
              <div data-fu="bar" style={{ position: "absolute", left: "395.81px", top: "97.27px", width: "12.75px", height: "2.55px", borderRadius: "3px 3px 0px 0px", background: "#e5484d" }} />
              <div data-fu="bar" style={{ position: "absolute", left: "419.18px", top: "136.59px", width: "12.75px", height: "116.41px", background: "#1b8ce8" }} />
              <div data-fu="bar" style={{ position: "absolute", left: "419.18px", top: "113.44px", width: "12.75px", height: "21.88px", background: "#ffc89e" }} />
              <div data-fu="bar" style={{ position: "absolute", left: "419.18px", top: "109.62px", width: "12.75px", height: "2.55px", borderRadius: "3px 3px 0px 0px", background: "#e5484d" }} />
              <div data-fu="bar" style={{ position: "absolute", left: "442.54px", top: "144.78px", width: "12.75px", height: "108.22px", background: "#1b8ce8" }} />
              <div data-fu="bar" style={{ position: "absolute", left: "442.54px", top: "123.38px", width: "12.75px", height: "20.13px", background: "#ffc89e" }} />
              <div data-fu="bar" style={{ position: "absolute", left: "442.54px", top: "119.55px", width: "12.75px", height: "2.55px", borderRadius: "3px 3px 0px 0px", background: "#e5484d" }} />
              <div data-fu="bar" style={{ position: "absolute", left: "465.91px", top: "150.47px", width: "12.75px", height: "102.53px", background: "#1b8ce8" }} />
              <div data-fu="bar" style={{ position: "absolute", left: "465.91px", top: "130.32px", width: "12.75px", height: "18.88px", background: "#ffc89e" }} />
              <div data-fu="bar" style={{ position: "absolute", left: "465.91px", top: "126.49px", width: "12.75px", height: "2.55px", borderRadius: "3px 3px 0px 0px", background: "#e5484d" }} />
              <div data-fu="bar" style={{ position: "absolute", left: "489.28px", top: "203.25px", width: "12.75px", height: "49.75px", background: "#1b8ce8" }} />
              <div data-fu="bar" style={{ position: "absolute", left: "489.28px", top: "192.91px", width: "12.75px", height: "9.06px", background: "#ffc89e" }} />
              <div data-fu="bar" style={{ position: "absolute", left: "489.28px", top: "189.09px", width: "12.75px", height: "2.55px", borderRadius: "3px 3px 0px 0px", background: "#e5484d" }} />
              <div data-fu="bar" style={{ position: "absolute", left: "512.64px", top: "202.94px", width: "12.75px", height: "50.06px", background: "#1b8ce8" }} />
              <div data-fu="bar" style={{ position: "absolute", left: "512.64px", top: "192.66px", width: "12.75px", height: "9px", background: "#ffc89e" }} />
              <div data-fu="bar" style={{ position: "absolute", left: "512.64px", top: "188.84px", width: "12.75px", height: "2.55px", borderRadius: "3px 3px 0px 0px", background: "#e5484d" }} />
              <div data-fu="bar" style={{ position: "absolute", left: "536.01px", top: "149.44px", width: "12.75px", height: "103.56px", background: "#1b8ce8" }} />
              <div data-fu="bar" style={{ position: "absolute", left: "536.01px", top: "129.72px", width: "12.75px", height: "18.44px", background: "#ffc89e" }} />
              <div data-fu="bar" style={{ position: "absolute", left: "536.01px", top: "118.26px", width: "12.75px", height: "10.19px", borderRadius: "3px 3px 0px 0px", background: "#e5484d" }} />
              <div data-fu="bar" style={{ position: "absolute", left: "559.38px", top: "142.91px", width: "12.75px", height: "110.09px", background: "#1b8ce8" }} />
              <div data-fu="bar" style={{ position: "absolute", left: "559.38px", top: "122.26px", width: "12.75px", height: "19.38px", background: "#ffc89e" }} />
              <div data-fu="bar" style={{ position: "absolute", left: "559.38px", top: "118.43px", width: "12.75px", height: "2.55px", borderRadius: "3px 3px 0px 0px", background: "#e5484d" }} />
              <div data-fu="bar" style={{ position: "absolute", left: "582.74px", top: "133.63px", width: "12.75px", height: "119.37px", background: "#1b8ce8" }} />
              <div data-fu="bar" style={{ position: "absolute", left: "582.74px", top: "111.57px", width: "12.75px", height: "20.78px", background: "#ffc89e" }} />
              <div data-fu="bar" style={{ position: "absolute", left: "582.74px", top: "107.74px", width: "12.75px", height: "2.55px", borderRadius: "3px 3px 0px 0px", background: "#e5484d" }} />
              <div data-fu="bar" style={{ position: "absolute", left: "606.11px", top: "122.06px", width: "12.75px", height: "130.94px", background: "#1b8ce8" }} />
              <div data-fu="bar" style={{ position: "absolute", left: "606.11px", top: "98.26px", width: "12.75px", height: "22.53px", background: "#ffc89e" }} />
              <div data-fu="bar" style={{ position: "absolute", left: "606.11px", top: "94.36px", width: "12.75px", height: "2.63px", borderRadius: "3px 3px 0px 0px", background: "#e5484d" }} />
              <div data-fu="bar" style={{ position: "absolute", left: "629.48px", top: "108.78px", width: "12.75px", height: "144.22px", background: "#1b8ce8" }} />
              <div data-fu="bar" style={{ position: "absolute", left: "629.48px", top: "82.97px", width: "12.75px", height: "24.53px", background: "#ffc89e" }} />
              <div data-fu="bar" style={{ position: "absolute", left: "629.48px", top: "78.82px", width: "12.75px", height: "2.88px", borderRadius: "3px 3px 0px 0px", background: "#e5484d" }} />
              <div data-fu="bar" style={{ position: "absolute", left: "652.84px", top: "144.47px", width: "12.75px", height: "108.53px", background: "#1b8ce8" }} />
              <div data-fu="bar" style={{ position: "absolute", left: "652.84px", top: "124.97px", width: "12.75px", height: "18.22px", background: "#ffc89e" }} />
              <div data-fu="bar" style={{ position: "absolute", left: "652.84px", top: "121.15px", width: "12.75px", height: "2.55px", borderRadius: "3px 3px 0px 0px", background: "#e5484d" }} />
              <div data-fu="bar" style={{ position: "absolute", left: "676.21px", top: "129.84px", width: "12.75px", height: "123.16px", background: "#1b8ce8" }} />
              <div data-fu="bar" style={{ position: "absolute", left: "676.21px", top: "108.13px", width: "12.75px", height: "20.44px", background: "#ffc89e" }} />
              <div data-fu="bar" style={{ position: "absolute", left: "676.21px", top: "104.3px", width: "12.75px", height: "2.55px", borderRadius: "3px 3px 0px 0px", background: "#e5484d" }} />
              <div data-fu="bar" style={{ position: "absolute", left: "699.58px", top: "65.72px", width: "12.75px", height: "187.28px", background: "#1b8ce8" }} />
              <div data-fu="bar" style={{ position: "absolute", left: "699.58px", top: "33.72px", width: "12.75px", height: "30.72px", background: "#ffc89e" }} />
              <div data-fu="bar" style={{ position: "absolute", left: "699.58px", top: "28.7px", width: "12.75px", height: "3.75px", borderRadius: "3px 3px 0px 0px", background: "#e5484d" }} />
              <div data-fu="bar" style={{ position: "absolute", left: "722.94px", top: "52.75px", width: "12.75px", height: "200.25px", background: "#1b8ce8" }} />
              <div data-fu="bar" style={{ position: "absolute", left: "722.94px", top: "19.04px", width: "12.75px", height: "32.44px", background: "#ffc89e" }} />
              <div data-fu="bar" style={{ position: "absolute", left: "722.94px", top: "13.76px", width: "12.75px", height: "4px", borderRadius: "3px 3px 0px 0px", background: "#e5484d" }} />
              <p style={{ position: "absolute", left: "32.68px", top: "264px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "38px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>Sep 5</p>
              <p style={{ position: "absolute", left: "146.52px", top: "264px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "44px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>Sep 10</p>
              <p style={{ position: "absolute", left: "264.38px", top: "264px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "43px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>Sep 15</p>
              <p style={{ position: "absolute", left: "379.21px", top: "264px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "47px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>Sep 20</p>
              <p style={{ position: "absolute", left: "496.05px", top: "264px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "47px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>Sep 25</p>
              <p style={{ position: "absolute", left: "612.88px", top: "264px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "47px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>Sep 30</p>
            </div>
          </div>
          <div style={{ width: "360px", height: "384px", flexShrink: 0, borderRadius: "12px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ededed", display: "flex", flexDirection: "column", padding: "19px 19px 19px 19px", gap: "14px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "12px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "145px", fontFamily: "'Geist'", fontSize: "16px", fontWeight: 400, color: "#15171c", lineHeight: "24px", letterSpacing: "-0.1px" }}>Time saved by team</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "168px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>Hours returned this period</p>
              </div>
            </div>
            <div style={{ width: "300px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "150px", height: "150px", flexShrink: 0, overflow: "hidden", position: "relative" }}>
                <svg data-fu="plot" style={{ position: "absolute", left: "0px", top: "0px", width: "150px", height: "150px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 150 150" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M150 75 C150 116.421 116.421 150 75 150 C33.5786 150 0 116.421 0 75 C0 33.5786 33.5786 0 75 0 C116.421 0 150 33.5786 150 75 Z M19.5 75 C19.5 105.652 44.3482 130.5 75 130.5 C105.652 130.5 130.5 105.652 130.5 75 C130.5 44.3482 105.652 19.5 75 19.5 C44.3482 19.5 19.5 44.3482 19.5 75 Z" fill="#f5f5f5"/></svg>
                <svg style={{ position: "absolute", left: "0px", top: "0px", width: "150px", height: "150px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 150 150" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M76.125 0.00843728 C94.1925 0.279469 111.555 7.0643 125.019 19.1152 C138.483 31.1662 147.144 47.6729 149.409 65.6 C151.673 83.5271 147.39 101.669 137.345 116.69 C127.301 131.711 112.172 142.6 94.7393 147.356 L89.6071 128.543 C102.507 125.024 113.703 116.966 121.136 105.85 C128.568 94.7351 131.738 81.31 130.062 68.044 C128.386 54.778 121.977 42.563 112.014 33.6453 C102.051 24.7276 89.2024 19.7068 75.8325 19.5062 L76.125 0.00843728 Z" fill="#1b8ce8"/></svg>
                <svg style={{ position: "absolute", left: "0px", top: "0px", width: "150px", height: "150px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 150 150" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M92.56 147.915 C74.3918 152.291 55.2446 149.726 38.8685 140.723 C22.4924 131.72 10.0672 116.928 4.02641 99.2436 L22.4795 92.9402 C26.9497 106.027 36.1443 116.973 48.2627 123.635 C60.381 130.297 74.5499 132.195 87.9944 128.957 L92.56 147.915 Z" fill="#f96cd8"/></svg>
                <svg style={{ position: "absolute", left: "0px", top: "0px", width: "150px", height: "150px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 150 150" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M3.33115 97.1038 C-0.750591 83.8692 -1.08802 69.7629 2.35626 56.3483 C5.80055 42.9337 12.892 30.7347 22.8447 21.1036 L36.4051 35.1167 C29.0401 42.2437 23.7924 51.2709 21.2436 61.1977 C18.6949 71.1245 18.9446 81.5632 21.9651 91.3568 L3.33115 97.1038 Z" fill="#ff5601"/></svg>
                <svg style={{ position: "absolute", left: "0px", top: "0px", width: "150px", height: "150px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 150 150" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M24.4848 19.5634 C38.0112 7.23782 55.5773 0.282922 73.8751 0.00843718 L74.1675 19.5062 C60.6272 19.7094 47.6283 24.856 37.6188 33.9769 L24.4848 19.5634 Z" fill="#17a673"/></svg>
                <div style={{ position: "absolute", left: "53px", top: "53px", width: "44px", height: "45px", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "44px", fontFamily: "'Geist'", fontSize: "20px", fontWeight: 500, color: "#15171c", lineHeight: "25px", letterSpacing: "-0.4px" }}>412h</p>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "38px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>saved</p>
                </div>
              </div>
            </div>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div data-fu="row" style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "5px 0px 5px 0px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "10px", height: "10px", flexShrink: 0, borderRadius: "3px", background: "#1b8ce8" }} />
                <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>Finance</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "32px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>190h</p>
                <p style={{ width: "40px", flexShrink: 0, margin: 0, textAlign: "right", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>46%</p>
              </div>
              <div data-fu="row" style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "5px 0px 5px 0px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "10px", height: "10px", flexShrink: 0, borderRadius: "3px", background: "#f96cd8" }} />
                <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>Support</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "26px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>99h</p>
                <p style={{ width: "40px", flexShrink: 0, margin: 0, textAlign: "right", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>24%</p>
              </div>
              <div data-fu="row" style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "5px 0px 5px 0px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "10px", height: "10px", flexShrink: 0, borderRadius: "3px", background: "#ff5601" }} />
                <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>Sales</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "24px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>74h</p>
                <p style={{ width: "40px", flexShrink: 0, margin: 0, textAlign: "right", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>18%</p>
              </div>
              <div data-fu="row" style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "5px 0px 5px 0px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "10px", height: "10px", flexShrink: 0, borderRadius: "3px", background: "#17a673" }} />
                <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>Operations</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "26px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>49h</p>
                <p style={{ width: "40px", flexShrink: 0, margin: 0, textAlign: "right", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>12%</p>
              </div>
            </div>
          </div>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "16px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ flex: "1 1 0", minWidth: 0, height: "338px", flexShrink: 0, borderRadius: "12px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ededed", display: "flex", flexDirection: "column", padding: "19px 19px 19px 19px", gap: "8px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "12px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "209px", fontFamily: "'Geist'", fontSize: "16px", fontWeight: 400, color: "#15171c", lineHeight: "24px", letterSpacing: "-0.1px" }}>Automation rate by workflow</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "252px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>Share of runs finished without a person</p>
              </div>
              <div data-fu="btn" style={{ flexShrink: 0, borderRadius: "8px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e8e8e8", display: "flex", flexDirection: "row", padding: "5px 11px 5px 11px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "87px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#686765", lineHeight: "20px" }}>All workflows</p>
                <ChevronDown size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
              </div>
            </div>
            <div data-fu="row" style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "7px 0px 7px 0px", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ width: "190px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>Revenue Sync</p>
              <div style={{ flex: "1 1 0", minWidth: 0, height: "8px", flexShrink: 0, borderRadius: "4px", background: "#f5f5f5", overflow: "hidden", position: "relative" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", width: "300px", height: "8px", borderRadius: "4px", background: "#17a673" }} />
              </div>
              <p style={{ width: "44px", flexShrink: 0, margin: 0, textAlign: "right", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>100%</p>
              <p style={{ width: "90px", flexShrink: 0, margin: 0, textAlign: "right", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>168 runs</p>
            </div>
            <div data-fu="row" style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "7px 0px 7px 0px", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ width: "190px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>Support Ticket Routing</p>
              <div style={{ flex: "1 1 0", minWidth: 0, height: "8px", flexShrink: 0, borderRadius: "4px", background: "#f5f5f5", overflow: "hidden", position: "relative" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", width: "282px", height: "8px", borderRadius: "4px", background: "#17a673" }} />
              </div>
              <p style={{ width: "44px", flexShrink: 0, margin: 0, textAlign: "right", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>94%</p>
              <p style={{ width: "90px", flexShrink: 0, margin: 0, textAlign: "right", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>6,240 runs</p>
            </div>
            <div data-fu="row" style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "7px 0px 7px 0px", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ width: "190px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>Invoice Triage</p>
              <div style={{ flex: "1 1 0", minWidth: 0, height: "8px", flexShrink: 0, borderRadius: "4px", background: "#f5f5f5", overflow: "hidden", position: "relative" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", width: "213px", height: "8px", borderRadius: "4px", background: "#1b8ce8" }} />
              </div>
              <p style={{ width: "44px", flexShrink: 0, margin: 0, textAlign: "right", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>71%</p>
              <p style={{ width: "90px", flexShrink: 0, margin: 0, textAlign: "right", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>4,812 runs</p>
            </div>
            <div data-fu="row" style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "7px 0px 7px 0px", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ width: "190px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>Lead Qualification</p>
              <div style={{ flex: "1 1 0", minWidth: 0, height: "8px", flexShrink: 0, borderRadius: "4px", background: "#f5f5f5", overflow: "hidden", position: "relative" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", width: "204px", height: "8px", borderRadius: "4px", background: "#1b8ce8" }} />
              </div>
              <p style={{ width: "44px", flexShrink: 0, margin: 0, textAlign: "right", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>68%</p>
              <p style={{ width: "90px", flexShrink: 0, margin: 0, textAlign: "right", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>3,390 runs</p>
            </div>
            <div data-fu="row" style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "7px 0px 7px 0px", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ width: "190px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>Customer Refunds</p>
              <div style={{ flex: "1 1 0", minWidth: 0, height: "8px", flexShrink: 0, borderRadius: "4px", background: "#f5f5f5", overflow: "hidden", position: "relative" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", width: "156px", height: "8px", borderRadius: "4px", background: "#ff5601" }} />
              </div>
              <p style={{ width: "44px", flexShrink: 0, margin: 0, textAlign: "right", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>52%</p>
              <p style={{ width: "90px", flexShrink: 0, margin: 0, textAlign: "right", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>1,204 runs</p>
            </div>
            <div data-fu="row" style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "7px 0px 7px 0px", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ width: "190px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>PO Matching</p>
              <div style={{ flex: "1 1 0", minWidth: 0, height: "8px", flexShrink: 0, borderRadius: "4px", background: "#f5f5f5", overflow: "hidden", position: "relative" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", width: "93px", height: "8px", borderRadius: "4px", background: "#ff5601" }} />
              </div>
              <p style={{ width: "44px", flexShrink: 0, margin: 0, textAlign: "right", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>31%</p>
              <p style={{ width: "90px", flexShrink: 0, margin: 0, textAlign: "right", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>812 runs</p>
            </div>
          </div>
          <div style={{ width: "360px", height: "338px", flexShrink: 0, borderRadius: "12px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ededed", display: "flex", flexDirection: "column", padding: "19px 19px 19px 19px", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "12px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "162px", fontFamily: "'Geist'", fontSize: "16px", fontWeight: 400, color: "#15171c", lineHeight: "24px", letterSpacing: "-0.1px" }}>Top exception reasons</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "156px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>157 exceptions · 30 days</p>
              </div>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "50px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#4996fe", lineHeight: "20px" }}>View all</p>
            </div>
            <div data-fu="row" style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", padding: "5px 0px 5px 0px", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <svg style={{ width: "8px", height: "8px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M8 4 C8 6.20914 6.20914 8 4 8 C1.79086 8 0 6.20914 0 4 C0 1.79086 1.79086 0 4 0 C6.20914 0 8 1.79086 8 4 Z" fill="#e5484d"/></svg>
                <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>PO not found</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "16px", fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>64</p>
              </div>
              <div style={{ alignSelf: "stretch", height: "4px", flexShrink: 0, borderRadius: "2px", background: "#f5f5f5", overflow: "hidden", position: "relative" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", width: "300px", height: "4px", borderRadius: "2px", background: "#e5484d" }} />
              </div>
            </div>
            <div data-fu="row" style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", padding: "5px 0px 5px 0px", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <svg style={{ width: "8px", height: "8px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M8 4 C8 6.20914 6.20914 8 4 8 C1.79086 8 0 6.20914 0 4 C0 1.79086 1.79086 0 4 0 C6.20914 0 8 1.79086 8 4 Z" fill="#d99a00"/></svg>
                <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>Low confidence: vendor</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "16px", fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>41</p>
              </div>
              <div style={{ alignSelf: "stretch", height: "4px", flexShrink: 0, borderRadius: "2px", background: "#f5f5f5", overflow: "hidden", position: "relative" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", width: "192.19px", height: "4px", borderRadius: "2px", background: "#d99a00" }} />
              </div>
            </div>
            <div data-fu="row" style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", padding: "5px 0px 5px 0px", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <svg style={{ width: "8px", height: "8px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M8 4 C8 6.20914 6.20914 8 4 8 C1.79086 8 0 6.20914 0 4 C0 1.79086 1.79086 0 4 0 C6.20914 0 8 1.79086 8 4 Z" fill="#ff5601"/></svg>
                <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>Duplicate invoice</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "16px", fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>22</p>
              </div>
              <div style={{ alignSelf: "stretch", height: "4px", flexShrink: 0, borderRadius: "2px", background: "#f5f5f5", overflow: "hidden", position: "relative" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", width: "103.13px", height: "4px", borderRadius: "2px", background: "#ff5601" }} />
              </div>
            </div>
            <div data-fu="row" style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", padding: "5px 0px 5px 0px", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <svg style={{ width: "8px", height: "8px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M8 4 C8 6.20914 6.20914 8 4 8 C1.79086 8 0 6.20914 0 4 C0 1.79086 1.79086 0 4 0 C6.20914 0 8 1.79086 8 4 Z" fill="#ef0c78"/></svg>
                <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>Connector auth expired</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "16px", fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>18</p>
              </div>
              <div style={{ alignSelf: "stretch", height: "4px", flexShrink: 0, borderRadius: "2px", background: "#f5f5f5", overflow: "hidden", position: "relative" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", width: "84.38px", height: "4px", borderRadius: "2px", background: "#ef0c78" }} />
              </div>
            </div>
            <div data-fu="row" style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", padding: "5px 0px 5px 0px", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <svg style={{ width: "8px", height: "8px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M8 4 C8 6.20914 6.20914 8 4 8 C1.79086 8 0 6.20914 0 4 C0 1.79086 1.79086 0 4 0 C6.20914 0 8 1.79086 8 4 Z" fill="#697386"/></svg>
                <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>Amount mismatch</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "16px", fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>12</p>
              </div>
              <div style={{ alignSelf: "stretch", height: "4px", flexShrink: 0, borderRadius: "2px", background: "#f5f5f5", overflow: "hidden", position: "relative" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", width: "56.25px", height: "4px", borderRadius: "2px", background: "#697386" }} />
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
