"use client";
// Data Sources page (axon, Templates) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist, Geist Mono. Icons: Ingot Icons.
import { useEffect, useRef } from "react";
import { AlertCircle, AlertTriangle, Bell, ChartLine, ChevronRight, CircleCheck, CreditCard, Database, DatabasePlus, Dots, File, FolderSearch, GitMerge, LayoutDashboard, Loader, Lock, Minus, PlugConnected, Repeat, Search, Settings, Shield, Users } from "ingotui-icons/react/stroke-rounded";
import { Category as CategorySolid } from "ingotui-icons/react/solid";

export function DataSourcesPage() {
  const fuRef = useRef<any>(null);
  useEffect(() => fuInteract(fuRef.current), []);
  return (
    <div ref={fuRef} style={{ width: "1440px", height: "1019px", background: "#ffffff", overflow: "hidden", position: "relative" }}>
      <div style={{ position: "absolute", left: "0px", top: "0px", width: "1440px", height: "1019px", background: "#ffffff", overflow: "hidden" }}>
        <div style={{ position: "absolute", left: "0px", top: "0px", width: "246px", height: "1019px", background: "#f5f5f5", overflow: "hidden" }}>
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
              <div style={{ width: "212px", height: "32px", flexShrink: 0, borderRadius: "10px", display: "flex", flexDirection: "row", padding: "8px 10px 8px 10px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <ChartLine size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#929292", display: "block" }} />
                <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#929292", lineHeight: "20px" }}>Analytics</p>
              </div>
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <svg style={{ width: "212px", height: "1px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible", marginBottom: "-1px" }} xmlns="http://www.w3.org/2000/svg" width="212" height="1" viewBox="0 0 212 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 -0.5 L0 0 L212 0 L212 -0.5 L212 -1 L0 -1 L0 -0.5 Z" fill="#e8e8e8"/></svg>
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
                <div style={{ width: "212px", height: "32px", flexShrink: 0, borderRadius: "6px", background: "#ffffff", boxShadow: "0px 1.4px 1px 0px rgba(0, 0, 0, 0.06), 0px 0px 1px 0px rgba(0, 0, 0, 0.25)", display: "flex", flexDirection: "row", padding: "8px 10px 8px 10px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <Database size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#1b8ce8", display: "block" }} />
                  <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#000000", lineHeight: "20px" }}>Data Sources</p>
                </div>
              </div>
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <svg style={{ width: "212px", height: "1px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible", marginBottom: "-1px" }} xmlns="http://www.w3.org/2000/svg" width="212" height="1" viewBox="0 0 212 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 -0.5 L0 0 L212 0 L212 -0.5 L212 -1 L0 -1 L0 -0.5 Z" fill="#e8e8e8"/></svg>
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
        <svg style={{ position: "absolute", left: "246px", top: "0px", width: "1px", height: "1019px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="1" height="1019" viewBox="0 0 1 1019" fill="none" overflow="visible"><path transform="matrix(0 1 -1 0 0 0)" d="M0 -0.5 L0 -5.55112e-17 L1019 -5.55112e-17 L1019 -0.5 L1019 -1 L0 -1 L0 -0.5 Z" fill="#e8e8e8"/></svg>
        <div style={{ position: "absolute", left: "247px", top: "0px", width: "1193px", height: "74px", background: "#ffffff", display: "flex", flexDirection: "row", padding: "20px 20px 20px 20px", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <CategorySolid size={14} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#b3b3b3", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "71px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#b3b3b3", lineHeight: "20px" }}>Operations</p>
            </div>
            <ChevronRight size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#686765", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "87px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#666d80", lineHeight: "20px" }}>Data Sources</p>
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
        <svg style={{ position: "absolute", left: "0px", top: "73px", width: "1440px", height: "1px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="1440" height="1" viewBox="0 0 1440 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 -0.5 L0 0 L1440 0 L1440 -0.5 L1440 -1 L0 -1 L0 -0.5 Z" fill="#e8e8e8"/></svg>
      </div>
      <div style={{ position: "absolute", left: "265px", top: "92px", width: "1155px", height: "898px", display: "flex", flexDirection: "column", gap: "16px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "16px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "98px", fontFamily: "'Geist'", fontSize: "16px", fontWeight: 400, color: "#15171c", lineHeight: "24px", letterSpacing: "-0.1px" }}>Data Sources</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "426px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>Reference data and documents your AI agents can read · 7 sources</p>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div data-fu="btn" style={{ flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e8e8e8", display: "flex", flexDirection: "row", padding: "7px 13px 7px 13px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <Shield size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "88px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#686765", lineHeight: "20px" }}>Access policy</p>
            </div>
            <div style={{ flexShrink: 0, borderRadius: "10px", background: "linear-gradient(0deg, #1b8ce8 34.7%, #4eb0ff 93.7%)", boxShadow: "0px 8px 9px 0px rgba(0, 0, 0, 0.12), inset 0.6px 0.6px 0px 0px rgba(255, 255, 255, 0.25), inset -0.6px 0.6px 0px 0px rgba(255, 255, 255, 0.25)", display: "flex", flexDirection: "row", padding: "6px 12px 6px 12px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <DatabasePlus size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#ffffff", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "73px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#ffffff", lineHeight: "20px" }}>Add source</p>
            </div>
          </div>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "14px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, borderRadius: "12px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ededed", display: "flex", flexDirection: "column", padding: "15px 17px 15px 17px", gap: "10px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "106px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#697386", lineHeight: "20px" }}>Indexed records</p>
              <div style={{ flex: "1 1 0", minWidth: 0, height: "1px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "33px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>
                <span style={{ fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>{"of "}</span>
                <span style={{ fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>5M</span>
              </p>
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "54px", fontFamily: "'Geist'", fontSize: "20px", fontWeight: 500, color: "#15171c", lineHeight: "25px", letterSpacing: "-0.4px" }}>1.42M</p>
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
          <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, borderRadius: "12px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ededed", display: "flex", flexDirection: "column", padding: "15px 17px 15px 17px", gap: "10px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "76px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#697386", lineHeight: "20px" }}>Documents</p>
              <div style={{ flex: "1 1 0", minWidth: 0, height: "1px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "106px", fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>
                <span style={{ fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>38 GB</span>
                <span style={{ fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>{" of 100 GB"}</span>
              </p>
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "92px", fontFamily: "'Geist'", fontSize: "20px", fontWeight: 500, color: "#15171c", lineHeight: "25px", letterSpacing: "-0.4px" }}>1,632 files</p>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ff5601" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ff5601" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ff5601" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ff5601" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ff5601" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ff5601" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ff5601" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ff5601" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ff5601" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ff5601" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ff5601" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ff5601" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ff5601" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ff5601" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ff5601" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ff5601" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ff5601" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ff5601" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ff5601" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ff5601" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ff5601" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ff5601" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ff5601" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ff5601" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ff5601" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ff5601" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ff5601" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ff5601" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ff5601" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ff5601" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ff5601" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ff5601" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ff5601" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ff5601" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ff5601" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ff5601" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ff5601" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ff5601" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ff5601" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ff5601" }} />
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
          <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, borderRadius: "12px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ededed", display: "flex", flexDirection: "column", padding: "15px 17px 15px 17px", gap: "10px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "68px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#697386", lineHeight: "20px" }}>Freshness</p>
              <div style={{ flex: "1 1 0", minWidth: 0, height: "1px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "108px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>
                <span style={{ fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>{"last error "}</span>
                <span style={{ fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>2h ago</span>
              </p>
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "120px", fontFamily: "'Geist'", fontSize: "20px", fontWeight: 500, color: "#15171c", lineHeight: "25px", letterSpacing: "-0.4px" }}>6 of 7 synced</p>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#17a673" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#17a673" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#17a673" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#17a673" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#17a673" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#17a673" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#17a673" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#17a673" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#17a673" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#17a673" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#17a673" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#17a673" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#17a673" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#17a673" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#17a673" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#17a673" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#17a673" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#17a673" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#17a673" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#17a673" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#17a673" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#17a673" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#17a673" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#17a673" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#17a673" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#17a673" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#17a673" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#17a673" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#17a673" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#17a673" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#17a673" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#17a673" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#17a673" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#17a673" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#17a673" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#17a673" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#17a673" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#17a673" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#17a673" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#17a673" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#17a673" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#17a673" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#17a673" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#17a673" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#17a673" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#17a673" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#17a673" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#17a673" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#17a673" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#17a673" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#17a673" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#17a673" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#17a673" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#17a673" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#17a673" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#17a673" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#17a673" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#17a673" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#17a673" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#17a673" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#17a673" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#17a673" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#17a673" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#17a673" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#17a673" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#17a673" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#17a673" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#17a673" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#17a673" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#17a673" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#17a673" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#17a673" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#17a673" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#17a673" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#17a673" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#17a673" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#17a673" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#17a673" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#17a673" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#17a673" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#17a673" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#17a673" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#17a673" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#17a673" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#17a673" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#17a673" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#17a673" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#17a673" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#17a673" }} />
              <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#17a673" }} />
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
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, borderRadius: "12px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ededed", overflow: "hidden", display: "flex", flexDirection: "column", padding: "1px 1px 1px 1px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", height: "36px", flexShrink: 0, background: "#f9f9f9", boxShadow: "inset 0 1px 0 0 #e9e9e9, inset 0 -1px 0 0 #e9e9e9", display: "flex", flexDirection: "row", padding: "1px 6px 1px 6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flex: "1 1 0", minWidth: 0, alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "46px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>Source</p>
            </div>
            <div style={{ width: "124px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "31px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>Type</p>
            </div>
            <div style={{ width: "104px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "53px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>Records</p>
            </div>
            <div style={{ width: "175px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "32px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>Sync</p>
            </div>
            <div style={{ width: "131px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "60px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>Schedule</p>
            </div>
            <div style={{ width: "170px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "52px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>Used by</p>
            </div>
            <div style={{ width: "50px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "17px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>PII</p>
            </div>
            <div style={{ width: "54px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, height: "20px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "0px" }}></p>
            </div>
          </div>
          <div style={{ alignSelf: "stretch", height: "60px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #e9e9e9", display: "flex", flexDirection: "row", padding: "0px 6px 1px 6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flex: "1 1 0", minWidth: 0, alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "9px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ededed, 0px 1px 2px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ width: "18px", height: "18px", flexShrink: 0, borderRadius: "5px", background: "#1a3d6e", position: "relative" }}>
                    <p style={{ position: "absolute", left: "4px", top: "4px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "13px", lineHeight: "12px", fontFamily: "'Geist'", fontSize: "9px", fontWeight: 600, color: "#ffffff" }}>NS</p>
                  </div>
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "95px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>Vendor master</p>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "182px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>Vendors, bank details, terms</p>
                </div>
              </div>
            </div>
            <div style={{ width: "124px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, borderRadius: "100px", background: "#eff8ff", display: "flex", flexDirection: "row", padding: "1px 8px 1px 8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "70px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#1b8ce8", lineHeight: "20px" }}>App object</p>
              </div>
            </div>
            <div style={{ width: "104px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "39px", fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>4,812</p>
            </div>
            <div style={{ width: "175px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, borderRadius: "4.58px", background: "#f6fffb", display: "flex", flexDirection: "row", padding: "2px 8px 2px 8px", gap: "3px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <CircleCheck size={12} strokeWidth={3} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#17a673", display: "block" }} />
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "48px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#17a673", lineHeight: "20px" }}>Synced</p>
                </div>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "64px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#b3b3b3", lineHeight: "20px" }}>5 min ago</p>
              </div>
            </div>
            <div style={{ width: "131px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <Repeat size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#929292", display: "block" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "81px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>Every 15 min</p>
              </div>
            </div>
            <div style={{ width: "170px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, borderRadius: "100px", background: "#f7f8fa", display: "flex", flexDirection: "row", padding: "1px 8px 1px 8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "46px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>Invoice</p>
                </div>
                <div style={{ flexShrink: 0, borderRadius: "100px", background: "#f7f8fa", display: "flex", flexDirection: "row", padding: "1px 8px 1px 8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "62px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>Duplicate</p>
                </div>
              </div>
            </div>
            <div style={{ width: "50px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <Lock size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#d99a00", display: "block" }} />
            </div>
            <div style={{ width: "54px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "28px", height: "28px", flexShrink: 0, borderRadius: "7px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <Dots size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
              </div>
            </div>
          </div>
          <div style={{ alignSelf: "stretch", height: "60px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #e9e9e9", display: "flex", flexDirection: "row", padding: "0px 6px 1px 6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flex: "1 1 0", minWidth: 0, alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "9px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ededed, 0px 1px 2px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ width: "18px", height: "18px", flexShrink: 0, borderRadius: "5px", background: "#1a3d6e", position: "relative" }}>
                    <p style={{ position: "absolute", left: "4px", top: "4px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "13px", lineHeight: "12px", fontFamily: "'Geist'", fontSize: "9px", fontWeight: 600, color: "#ffffff" }}>NS</p>
                  </div>
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "142px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>Open purchase orders</p>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "199px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>POs with status Pending/Open</p>
                </div>
              </div>
            </div>
            <div style={{ width: "124px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, borderRadius: "100px", background: "#eff8ff", display: "flex", flexDirection: "row", padding: "1px 8px 1px 8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "70px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#1b8ce8", lineHeight: "20px" }}>App object</p>
              </div>
            </div>
            <div style={{ width: "104px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "39px", fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>1,206</p>
            </div>
            <div style={{ width: "175px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, borderRadius: "4.58px", background: "#eff8ff", display: "flex", flexDirection: "row", padding: "2px 8px 2px 8px", gap: "3px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <Loader size={12} strokeWidth={3} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#1b8ce8", display: "block" }} />
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "84px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#1b8ce8", lineHeight: "20px" }}>Syncing 64%</p>
                </div>
                <div style={{ width: "110px", height: "4px", flexShrink: 0, borderRadius: "2px", background: "#f5f5f5", overflow: "hidden", position: "relative" }}>
                  <div style={{ position: "absolute", left: "0px", top: "0px", width: "70.4px", height: "4px", borderRadius: "2px", background: "#1b8ce8" }} />
                </div>
              </div>
            </div>
            <div style={{ width: "131px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <Repeat size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#929292", display: "block" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "76px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>Every 5 min</p>
              </div>
            </div>
            <div style={{ width: "170px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, borderRadius: "100px", background: "#f7f8fa", display: "flex", flexDirection: "row", padding: "1px 8px 1px 8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "46px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>Invoice</p>
                </div>
                <div style={{ flexShrink: 0, borderRadius: "100px", background: "#f7f8fa", display: "flex", flexDirection: "row", padding: "1px 8px 1px 8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "64px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>PO match</p>
                </div>
              </div>
            </div>
            <div style={{ width: "50px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <Minus size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#dfe0e5", display: "block" }} />
            </div>
            <div style={{ width: "54px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "28px", height: "28px", flexShrink: 0, borderRadius: "7px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <Dots size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
              </div>
            </div>
          </div>
          <div style={{ alignSelf: "stretch", height: "60px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #e9e9e9", display: "flex", flexDirection: "row", padding: "0px 6px 1px 6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flex: "1 1 0", minWidth: 0, alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "9px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ededed, 0px 1px 2px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <svg style={{ width: "18px", height: "18px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 1.114)" d="M9.0075 0 C7.446 0 6.192 0.0149999 6.20025 0.0352499 C6.20775 0.0502499 7.48125 2.286 9.03075 5.00025 L11.8507 9.93075 L14.6708 9.93075 C16.2315 9.93075 17.4855 9.91575 17.4772 9.8955 C17.4735 9.8805 16.1962 7.64475 14.646 4.9305 L11.826 0 L9.0075 0 Z M5.4375 1.2975 C4.52272 2.87305 3.61521 4.45282 2.715 6.03675 L0 10.7872 L1.4175 13.2607 L2.83125 15.7335 L5.54625 10.9822 L8.25975 6.23475 L6.84975 3.7695 C6.075 2.41425 5.44125 1.302 5.4375 1.2975 Z M7.13175 10.7872 L6.9795 11.0482 C6.894 11.1967 6.2595 12.3022 5.5695 13.5135 C5.148 14.2577 4.72349 15.0002 4.296 15.741 C4.2885 15.7605 6.726 15.7725 9.7125 15.7725 L15.1455 15.7725 L16.4925 13.4047 C17.2365 12.1042 17.88 10.9822 17.922 10.9125 L18 10.7872 L12.5632 10.7872 L7.13175 10.7872 Z" fill="#4285f4"/></svg>
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "135px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>AP policy documents</p>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "193px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>/Finance/Policies · PDF, DOCX</p>
                </div>
              </div>
            </div>
            <div style={{ width: "124px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, borderRadius: "100px", background: "#fef5f0", display: "flex", flexDirection: "row", padding: "1px 8px 1px 8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "30px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#ff5601", lineHeight: "20px" }}>Files</p>
              </div>
            </div>
            <div style={{ width: "104px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "71px", fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>214 files</p>
            </div>
            <div style={{ width: "175px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, borderRadius: "4.58px", background: "#f6fffb", display: "flex", flexDirection: "row", padding: "2px 8px 2px 8px", gap: "3px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <CircleCheck size={12} strokeWidth={3} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#17a673", display: "block" }} />
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "48px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#17a673", lineHeight: "20px" }}>Synced</p>
                </div>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "45px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#b3b3b3", lineHeight: "20px" }}>1 h ago</p>
              </div>
            </div>
            <div style={{ width: "131px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <Repeat size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#929292", display: "block" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "42px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>Hourly</p>
              </div>
            </div>
            <div style={{ width: "170px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, borderRadius: "100px", background: "#f7f8fa", display: "flex", flexDirection: "row", padding: "1px 8px 1px 8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "46px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>Invoice</p>
                </div>
              </div>
            </div>
            <div style={{ width: "50px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <Minus size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#dfe0e5", display: "block" }} />
            </div>
            <div style={{ width: "54px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "28px", height: "28px", flexShrink: 0, borderRadius: "7px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <Dots size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
              </div>
            </div>
          </div>
          <div style={{ alignSelf: "stretch", height: "60px", flexShrink: 0, background: "#fffbfb", boxShadow: "inset 0 -1px 0 0 #e9e9e9", display: "flex", flexDirection: "row", padding: "0px 6px 1px 6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flex: "1 1 0", minWidth: 0, alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "9px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ededed, 0px 1px 2px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <svg style={{ width: "18px", height: "18px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 1.355)" d="M4.5 0 L0 2.8665 L4.5 5.733 L9.00075 2.8665 L4.5 0 Z M13.5 0 L9 2.8665 L13.5 5.733 L18 2.8665 L13.5 0 Z M0 8.60025 L4.5 11.4668 L9.00075 8.60025 L4.5 5.733 L0 8.60025 Z M13.5 5.733 L9 8.60025 L13.5 11.4668 L18 8.60025 L13.5 5.733 Z M4.5 12.423 L9.00075 15.2895 L13.5007 12.423 L9.00075 9.5565 L4.5 12.423 Z" fill="#0061ff"/></svg>
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "113px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>Contracts archive</p>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "190px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>/Legal/Contracts 2019–2026</p>
                </div>
              </div>
            </div>
            <div style={{ width: "124px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, borderRadius: "100px", background: "#fef5f0", display: "flex", flexDirection: "row", padding: "1px 8px 1px 8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "30px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#ff5601", lineHeight: "20px" }}>Files</p>
              </div>
            </div>
            <div style={{ width: "104px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "78px", fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>1,203 PDFs</p>
            </div>
            <div style={{ width: "175px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, borderRadius: "4.58px", background: "#fff1f1", display: "flex", flexDirection: "row", padding: "2px 8px 2px 8px", gap: "3px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <AlertCircle size={12} strokeWidth={3} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#e5484d", display: "block" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "118px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#e5484d", lineHeight: "20px" }}>Permission denied</p>
              </div>
            </div>
            <div style={{ width: "131px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <Repeat size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#929292", display: "block" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "76px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>Daily 02:00</p>
              </div>
            </div>
            <div style={{ width: "170px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, borderRadius: "100px", background: "#f7f8fa", display: "flex", flexDirection: "row", padding: "1px 8px 1px 8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "63px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>Contracts</p>
                </div>
              </div>
            </div>
            <div style={{ width: "50px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <Lock size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#d99a00", display: "block" }} />
            </div>
            <div style={{ width: "54px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "28px", height: "28px", flexShrink: 0, borderRadius: "7px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <Dots size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
              </div>
            </div>
          </div>
          <div style={{ alignSelf: "stretch", height: "60px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #e9e9e9", display: "flex", flexDirection: "row", padding: "0px 6px 1px 6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flex: "1 1 0", minWidth: 0, alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "9px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ededed, 0px 1px 2px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <svg style={{ width: "18px", height: "18px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 2.7)" d="M7.5045 1.36125 C7.79872 1.05148 8.15294 0.804883 8.54558 0.636483 C8.93821 0.468082 9.36103 0.38141 9.78825 0.38175 C10.9583 0.38175 12.0037 1.05675 12.5557 2.0355 C13.0282 1.8105 13.5682 1.698 14.1307 1.698 C16.2682 1.698 18 3.453 18 5.613 C18 7.773 16.2675 9.528 14.118 9.528 C13.8592 9.528 13.6005 9.495 13.353 9.45 C13.1101 9.89385 12.7521 10.264 12.3165 10.5214 C11.8809 10.7788 11.3839 10.9139 10.878 10.9125 C10.428 10.9125 10.0118 10.8 9.6405 10.6312 C9.39181 11.2157 8.97657 11.7141 8.44656 12.0642 C7.91654 12.4143 7.2952 12.6006 6.66 12.6 C5.99786 12.6017 5.35121 12.3997 4.80782 12.0214 C4.26443 11.643 3.8506 11.1066 3.6225 10.485 C3.42 10.5315 3.2175 10.542 3.00375 10.542 C1.35075 10.542 0 9.192 0 7.5045 C0 6.3795 0.60825 5.40075 1.5075 4.872 C1.31625 4.4445 1.215 3.972 1.215 3.4875 C1.215 1.5525 2.79 0 4.7025 0 C5.85 0 6.84 0.52875 7.4925 1.35" fill="#00a1e0"/></svg>
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "126px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>Customer accounts</p>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "196px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>Accounts + open opportunities</p>
                </div>
              </div>
            </div>
            <div style={{ width: "124px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, borderRadius: "100px", background: "#eff8ff", display: "flex", flexDirection: "row", padding: "1px 8px 1px 8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "70px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#1b8ce8", lineHeight: "20px" }}>App object</p>
              </div>
            </div>
            <div style={{ width: "104px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "47px", fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>38,410</p>
            </div>
            <div style={{ width: "175px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, borderRadius: "4.58px", background: "#f6fffb", display: "flex", flexDirection: "row", padding: "2px 8px 2px 8px", gap: "3px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <CircleCheck size={12} strokeWidth={3} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#17a673", display: "block" }} />
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "48px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#17a673", lineHeight: "20px" }}>Synced</p>
                </div>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "69px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#b3b3b3", lineHeight: "20px" }}>12 min ago</p>
              </div>
            </div>
            <div style={{ width: "131px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <Repeat size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#929292", display: "block" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "85px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>Every 30 min</p>
              </div>
            </div>
            <div style={{ width: "170px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, borderRadius: "100px", background: "#f7f8fa", display: "flex", flexDirection: "row", padding: "1px 8px 1px 8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "76px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>Lead scorer</p>
                </div>
              </div>
            </div>
            <div style={{ width: "50px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <Lock size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#d99a00", display: "block" }} />
            </div>
            <div style={{ width: "54px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "28px", height: "28px", flexShrink: 0, borderRadius: "7px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <Dots size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
              </div>
            </div>
          </div>
          <div style={{ alignSelf: "stretch", height: "60px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #e9e9e9", display: "flex", flexDirection: "row", padding: "0px 6px 1px 6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flex: "1 1 0", minWidth: 0, alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "9px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ededed, 0px 1px 2px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <svg style={{ width: "18px", height: "18px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 2.455 0)" d="M6.03375 9.40875 L3.47775 9.40875 L3.47775 7.977 L6.03525 7.977 L6.03525 9.4095 L6.03375 9.40875 Z M8.59125 0 L8.59125 4.5 L13.0912 4.5 L8.59125 0 Z M9.6135 7.977 L7.056 7.977 L7.056 9.4095 L9.6135 9.4095 L9.6135 7.977 Z M9.6135 10.4318 L7.056 10.4318 L7.056 11.8643 L9.6135 11.8643 L9.6135 10.4318 Z M13.0905 4.875 L13.0905 16.773 C13.0905 17.451 12.5415 18 11.8635 18 L1.227 18 C1.06587 18 0.906314 17.9683 0.757447 17.9066 C0.608581 17.8449 0.473318 17.7546 0.35938 17.6406 C0.129273 17.4105 0 17.0984 0 16.773 L0 1.227 C3.33067e-16 0.549 0.549 0 1.227 0 L8.2155 0 L8.2155 4.875 L13.0905 4.875 Z M10.6358 6.95475 L2.454 6.95475 L2.454 12.8865 L10.6365 12.8865 L10.6365 6.954 L10.6358 6.95475 Z M6.03375 10.4318 L3.47775 10.4318 L3.47775 11.8643 L6.03525 11.8643 L6.03525 10.4318 L6.03375 10.4318 Z" fill="#34a853"/></svg>
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "105px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>Refund price list</p>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "135px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>Sheet “Pricing 2026”</p>
                </div>
              </div>
            </div>
            <div style={{ width: "124px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, borderRadius: "100px", background: "#f4fcf7", display: "flex", flexDirection: "row", padding: "1px 8px 1px 8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "82px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#17a673", lineHeight: "20px" }}>Spreadsheet</p>
              </div>
            </div>
            <div style={{ width: "104px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "63px", fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>860 rows</p>
            </div>
            <div style={{ width: "175px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, borderRadius: "4.58px", background: "#f6fffb", display: "flex", flexDirection: "row", padding: "2px 8px 2px 8px", gap: "3px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <CircleCheck size={12} strokeWidth={3} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#17a673", display: "block" }} />
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "48px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#17a673", lineHeight: "20px" }}>Synced</p>
                </div>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "64px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#b3b3b3", lineHeight: "20px" }}>2 min ago</p>
              </div>
            </div>
            <div style={{ width: "131px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <Repeat size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#929292", display: "block" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "64px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>Real-time</p>
              </div>
            </div>
            <div style={{ width: "170px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, borderRadius: "100px", background: "#f7f8fa", display: "flex", flexDirection: "row", padding: "1px 8px 1px 8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "54px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>Refunds</p>
                </div>
              </div>
            </div>
            <div style={{ width: "50px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <Minus size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#dfe0e5", display: "block" }} />
            </div>
            <div style={{ width: "54px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "28px", height: "28px", flexShrink: 0, borderRadius: "7px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <Dots size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
              </div>
            </div>
          </div>
          <div style={{ alignSelf: "stretch", height: "60px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 6px 0px 6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flex: "1 1 0", minWidth: 0, alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "9px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ededed, 0px 1px 2px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <svg style={{ width: "18px", height: "18px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M4.257 7.94625 L5.796 7.94625 L5.796 11.8792 C5.15942 11.495 4.63008 10.9564 4.257 10.3133 L4.257 7.94625 Z M17.8913 16.0732 C17.9611 16.144 18.0002 16.2394 18.0002 16.3387 C18.0002 16.4381 17.9611 16.5335 17.8913 16.6042 L16.6042 17.8913 C16.5335 17.9611 16.4381 18.0002 16.3387 18.0002 C16.2394 18.0002 16.144 17.9611 16.0732 17.8913 L12.8873 14.7052 C12.8855 14.7035 12.8837 14.7018 12.882 14.7 C12.867 14.685 12.861 14.6663 12.8497 14.6505 C11.4705 15.6574 9.80692 16.1998 8.09925 16.1993 C3.62625 16.1993 0 12.573 0 8.09925 C0 3.6255 3.62625 0 8.1 0 C12.5738 0 16.1993 3.62625 16.1993 8.1 C16.1993 9.87675 15.6203 11.5147 14.6498 12.8497 C14.6685 12.8625 14.6888 12.8708 14.7052 12.8873 L17.8913 16.0732 Z M14.1202 8.09925 C14.1183 6.91117 13.7644 5.7503 13.1031 4.76325 C12.4418 3.7762 11.5029 3.00724 10.4049 2.55347 C9.30689 2.0997 8.09904 1.98148 6.93388 2.21374 C5.76872 2.446 4.69851 3.01831 3.85841 3.85841 C3.01831 4.69851 2.446 5.76872 2.21374 6.93388 C1.98148 8.09904 2.0997 9.30689 2.55347 10.4049 C3.00724 11.5029 3.7762 12.4418 4.76325 13.1031 C5.7503 13.7644 6.91117 14.1183 8.09925 14.1202 L8.11725 14.1202 C8.90676 14.1191 9.6883 13.9624 10.4173 13.6592 C11.1462 13.3559 11.8083 12.9121 12.3657 12.353 C12.9232 11.7939 13.365 11.1305 13.6661 10.4006 C13.9671 9.67077 14.1214 8.88876 14.1202 8.09925 Z M10.4753 11.8343 C11.1152 11.426 11.6415 10.8625 12.0052 10.1962 L12.0052 8.87325 L10.4753 8.87325 L10.4753 11.8343 Z M7.10025 12.5452 C7.43175 12.588 7.7655 12.6052 8.09925 12.5992 C8.39925 12.618 8.69925 12.618 8.99925 12.5992 L8.99925 5.769 L7.101 5.769 L7.101 12.5452 L7.10025 12.5452 Z" fill="#669df6"/></svg>
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "110px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>Warehouse · runs</p>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "127px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>analytics.runs_daily</p>
                </div>
              </div>
            </div>
            <div style={{ width: "124px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, borderRadius: "100px", background: "#f4f1ff", display: "flex", flexDirection: "row", padding: "1px 8px 1px 8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "62px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#7c5cfc", lineHeight: "20px" }}>Database</p>
              </div>
            </div>
            <div style={{ width: "104px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "78px", fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>1.37M rows</p>
            </div>
            <div style={{ width: "175px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, borderRadius: "4.58px", background: "#f6fffb", display: "flex", flexDirection: "row", padding: "2px 8px 2px 8px", gap: "3px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <CircleCheck size={12} strokeWidth={3} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#17a673", display: "block" }} />
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "48px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#17a673", lineHeight: "20px" }}>Synced</p>
                </div>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "48px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#b3b3b3", lineHeight: "20px" }}>6 h ago</p>
              </div>
            </div>
            <div style={{ width: "131px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <Repeat size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#929292", display: "block" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "76px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>Daily 02:00</p>
              </div>
            </div>
            <div style={{ width: "170px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, borderRadius: "100px", background: "#f7f8fa", display: "flex", flexDirection: "row", padding: "1px 8px 1px 8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "59px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>Analytics</p>
                </div>
              </div>
            </div>
            <div style={{ width: "50px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <Minus size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#dfe0e5", display: "block" }} />
            </div>
            <div style={{ width: "54px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "28px", height: "28px", flexShrink: 0, borderRadius: "7px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <Dots size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
              </div>
            </div>
          </div>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, borderRadius: "12px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ededed", display: "flex", flexDirection: "column", padding: "19px 19px 19px 19px", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "12px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "93px", fontFamily: "'Geist'", fontSize: "16px", fontWeight: 400, color: "#15171c", lineHeight: "24px", letterSpacing: "-0.1px" }}>Sync activity</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "80px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>Last 6 hours</p>
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "50px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#4996fe", lineHeight: "20px" }}>View all</p>
          </div>
          <div data-fu="row" style={{ alignSelf: "stretch", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #e9e9e9", display: "flex", flexDirection: "row", padding: "7px 0px 8px 0px", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ width: "60px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#b3b3b3", lineHeight: "20px" }}>09:41</p>
            <CircleCheck size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#17a673", display: "block" }} />
            <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>
              <span style={{ fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>{"Vendor master · "}</span>
              <span style={{ fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>+3</span>
              <span style={{ fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>{" vendors, "}</span>
              <span style={{ fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>12</span>
              <span style={{ fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>{" updated"}</span>
            </p>
          </div>
          <div data-fu="row" style={{ alignSelf: "stretch", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #e9e9e9", display: "flex", flexDirection: "row", padding: "7px 0px 8px 0px", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ width: "60px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#b3b3b3", lineHeight: "20px" }}>09:38</p>
            <Loader size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#1b8ce8", display: "block" }} />
            <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>
              <span style={{ fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>{"Open purchase orders · syncing "}</span>
              <span style={{ fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>772 / 1,206</span>
            </p>
          </div>
          <div data-fu="row" style={{ alignSelf: "stretch", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #e9e9e9", display: "flex", flexDirection: "row", padding: "7px 0px 8px 0px", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ width: "60px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#b3b3b3", lineHeight: "20px" }}>07:12</p>
            <AlertCircle size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#e5484d", display: "block" }} />
            <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>
              <span style={{ fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>{"Contracts archive · Dropbox returned "}</span>
              <span style={{ fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>403</span>
              <span style={{ fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>{" on /Legal/Contracts"}</span>
            </p>
          </div>
          <div data-fu="row" style={{ alignSelf: "stretch", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #e9e9e9", display: "flex", flexDirection: "row", padding: "7px 0px 8px 0px", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ width: "60px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#b3b3b3", lineHeight: "20px" }}>03:00</p>
            <CircleCheck size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#17a673", display: "block" }} />
            <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>
              <span style={{ fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>{"Warehouse · runs · "}</span>
              <span style={{ fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>18,402</span>
              <span style={{ fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>{" rows appended"}</span>
            </p>
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
