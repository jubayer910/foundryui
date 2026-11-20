"use client";
// Templates page (axon, Templates) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist, Geist Mono. Icons: Ingot Icons.
import { useEffect, useRef } from "react";
import { AlertTriangle, Bell, ChartLine, ChevronDown, ChevronRight, Clock, CreditCard, Database, File, FolderSearch, GitMerge, LayoutDashboard, PlugConnected, Plus, Search, Settings, SortDescending, Sparkles, Upload, Users } from "ingotui-icons/react/stroke-rounded";
import { Category as CategorySolid } from "ingotui-icons/react/solid";

export function TemplatesPage() {
  const fuRef = useRef<any>(null);
  useEffect(() => fuInteract(fuRef.current), []);
  return (
    <div ref={fuRef} style={{ width: "1440px", height: "920px", background: "#ffffff", overflow: "hidden", position: "relative" }}>
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
              <div style={{ width: "212px", height: "32px", flexShrink: 0, borderRadius: "6px", background: "#ffffff", boxShadow: "0px 1.4px 1px 0px rgba(0, 0, 0, 0.06), 0px 0px 1px 0px rgba(0, 0, 0, 0.25)", display: "flex", flexDirection: "row", padding: "8px 10px 8px 10px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <File size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#1b8ce8", display: "block" }} />
                <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#000000", lineHeight: "20px" }}>Templates</p>
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
                <div style={{ width: "212px", height: "32px", flexShrink: 0, borderRadius: "10px", display: "flex", flexDirection: "row", padding: "8px 10px 8px 10px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <Database size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#929292", display: "block" }} />
                  <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#929292", lineHeight: "20px" }}>Data Sources</p>
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
              <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "72px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#b3b3b3", lineHeight: "20px" }}>Workspace</p>
            </div>
            <ChevronRight size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#686765", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "66px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#666d80", lineHeight: "20px" }}>Templates</p>
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
      <div style={{ position: "absolute", left: "265px", top: "92px", width: "1155px", height: "796px", display: "flex", flexDirection: "column", gap: "16px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "16px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "75px", fontFamily: "'Geist'", fontSize: "16px", fontWeight: 400, color: "#15171c", lineHeight: "24px", letterSpacing: "-0.1px" }}>Templates</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "347px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>180 tested templates, built from 12,400 live workflows</p>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div data-fu="btn" style={{ flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e8e8e8", display: "flex", flexDirection: "row", padding: "7px 13px 7px 13px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <Upload size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "118px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#686765", lineHeight: "20px" }}>Submit a template</p>
            </div>
            <div data-fu="btn" style={{ flexShrink: 0, borderRadius: "10px", background: "linear-gradient(0deg, #1b8ce8 34.7%, #4eb0ff 93.7%)", boxShadow: "0px 8px 9px 0px rgba(0, 0, 0, 0.12), inset 0.6px 0.6px 0px 0px rgba(255, 255, 255, 0.25), inset -0.6px 0.6px 0px 0px rgba(255, 255, 255, 0.25)", display: "flex", flexDirection: "row", padding: "6px 12px 6px 12px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <Plus size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#ffffff", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "106px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#ffffff", lineHeight: "20px" }}>Create workflow</p>
            </div>
          </div>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "10px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "139px", fontFamily: "'Geist'", fontSize: "16px", fontWeight: 400, color: "#15171c", lineHeight: "24px", letterSpacing: "-0.1px" }}>Featured this week</p>
            <div style={{ flex: "1 1 0", minWidth: 0, height: "1px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "61px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#4996fe", lineHeight: "20px" }}>See all 12</p>
          </div>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "16px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, borderRadius: "12px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ededed", display: "flex", flexDirection: "column", padding: "13px 13px 13px 13px", gap: "12px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ alignSelf: "stretch", flexShrink: 0, borderRadius: "10px", background: "#eff8ff", display: "flex", flexDirection: "row", padding: "22px 12px 22px 12px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "36px", height: "36px", flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ededed, 0px 1px 2px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <svg style={{ width: "20px", height: "20px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 2.498)" d="M20 2.04961 L20 13.6404 C20 14.3938 19.39 15.0038 18.6367 15.0038 L15.4542 15.0038 L15.4542 7.27711 L10 11.3688 L4.54583 7.27711 L4.54583 15.0046 L1.36333 15.0046 C1.18423 15.0046 1.00688 14.9693 0.841416 14.9008 C0.675954 14.8322 0.525625 14.7317 0.399017 14.605 C0.272408 14.4783 0.172003 14.3279 0.103539 14.1624 C0.0350736 13.9969 -0.000109223 13.8195 2.5471e-07 13.6404 L2.5471e-07 2.04961 C2.5471e-07 0.363776 1.92417 -0.598724 3.2725 0.412942 L4.54583 1.36878 L10 5.45878 L15.4542 1.36711 L16.7275 0.412942 C18.075 -0.597891 20 0.363776 20 2.04961 Z" fill="#ea4335"/></svg>
                </div>
                <ChevronRight size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#b3b3b3", display: "block" }} />
                <div style={{ width: "36px", height: "36px", flexShrink: 0, borderRadius: "10px", background: "#ffffff", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <Sparkles size={18} strokeWidth={2} style={{ width: "18px", height: "18px", flexShrink: 0, color: "#1b8ce8", display: "block" }} />
                </div>
                <ChevronRight size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#b3b3b3", display: "block" }} />
                <div style={{ width: "36px", height: "36px", flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ededed, 0px 1px 2px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ width: "20px", height: "20px", flexShrink: 0, borderRadius: "5px", background: "#1a3d6e", position: "relative" }}>
                    <p style={{ position: "absolute", left: "4px", top: "4px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "13px", lineHeight: "12px", fontFamily: "'Geist'", fontSize: "9px", fontWeight: 600, color: "#ffffff" }}>NS</p>
                  </div>
                </div>
              </div>
              <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", padding: "0px 4px 0px 4px", gap: "4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "197px", fontFamily: "'Geist'", fontSize: "16px", fontWeight: 400, color: "#15171c", lineHeight: "24px", letterSpacing: "-0.1px" }}>Invoice capture to NetSuite</p>
                  <div style={{ flexShrink: 0, borderRadius: "100px", background: "#eff8ff", display: "flex", flexDirection: "row", padding: "1px 8px 1px 8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "13px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#1b8ce8", lineHeight: "20px" }}>AI</p>
                  </div>
                </div>
                <p style={{ alignSelf: "stretch", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>Read PDFs from an inbox, match the PO and post the bill. Exceptions go to review.</p>
              </div>
              <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 4px 2px 4px", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <Users size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#929292", display: "block" }} />
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "78px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>2,431 teams</p>
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <Clock size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#929292", display: "block" }} />
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "71px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>~11 h/week</p>
                </div>
                <div style={{ flex: "1 1 0", minWidth: 0, height: "1px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }} />
                <div data-fu="btn" style={{ flexShrink: 0, borderRadius: "8px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e8e8e8", display: "flex", flexDirection: "row", padding: "5px 11px 5px 11px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "86px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#686765", lineHeight: "20px" }}>Use template</p>
                </div>
              </div>
            </div>
            <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, borderRadius: "12px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ededed", display: "flex", flexDirection: "column", padding: "13px 13px 13px 13px", gap: "12px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ alignSelf: "stretch", flexShrink: 0, borderRadius: "10px", background: "#fef5f0", display: "flex", flexDirection: "row", padding: "22px 12px 22px 12px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "36px", height: "36px", flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ededed, 0px 1px 2px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <svg style={{ width: "20px", height: "20px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 2.42)" d="M10.7617 0 L10.7617 11.155 L20 0.000833273 L10.7617 0 Z M0 0.00166655 C0 2.55167 2.06917 4.62167 4.61917 4.62167 C7.16917 4.62167 9.2375 2.55167 9.23833 0.00166655 L0 0.00166655 Z M9.23833 4.0075 L0 15.16 L9.23833 15.16 L9.23833 4.0075 Z M15.38 10.5408 C12.8275 10.5408 10.7617 12.6075 10.7617 15.16 L20 15.16 C20 12.61 17.9333 10.5408 15.3808 10.5408 L15.38 10.5408 Z" fill="#03363d"/></svg>
                </div>
                <ChevronRight size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#b3b3b3", display: "block" }} />
                <div style={{ width: "36px", height: "36px", flexShrink: 0, borderRadius: "10px", background: "#ffffff", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <Sparkles size={18} strokeWidth={2} style={{ width: "18px", height: "18px", flexShrink: 0, color: "#1b8ce8", display: "block" }} />
                </div>
                <ChevronRight size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#b3b3b3", display: "block" }} />
                <div style={{ width: "36px", height: "36px", flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ededed, 0px 1px 2px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <svg style={{ width: "20px", height: "20px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 2.862 0)" d="M8.785 7.625 C6.975 6.95333 5.98833 6.43667 5.98833 5.6175 C5.98833 4.925 6.5575 4.53 7.5725 4.53 C9.42833 4.53 11.335 5.245 12.6475 5.88917 L13.3892 1.31083 C12.3483 0.8125 10.2192 0 7.27583 0 C5.19417 0 3.4625 0.545 2.225 1.56 C0.938333 2.6225 0.269167 4.16 0.269167 6.015 C0.269167 9.38083 2.325 10.815 5.66583 12.0308 C7.82 12.7975 8.53667 13.3425 8.53667 14.1833 C8.53667 15 7.83667 15.4708 6.575 15.4708 C5.0125 15.4708 2.4375 14.7033 0.75 13.7133 L0 18.3425 C1.45083 19.1583 4.12583 20 6.9 20 C9.10083 20 10.9358 19.48 12.1733 18.4892 C13.56 17.4017 14.2775 15.7925 14.2775 13.7125 C14.2775 10.2725 12.1742 8.83667 8.7825 7.625 L8.785 7.625 Z" fill="#635bff"/></svg>
                </div>
              </div>
              <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", padding: "0px 4px 0px 4px", gap: "4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "238px", fontFamily: "'Geist'", fontSize: "16px", fontWeight: 400, color: "#15171c", lineHeight: "24px", letterSpacing: "-0.1px" }}>Refund approvals with guardrails</p>
                  <div style={{ flexShrink: 0, borderRadius: "100px", background: "#eff8ff", display: "flex", flexDirection: "row", padding: "1px 8px 1px 8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "13px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#1b8ce8", lineHeight: "20px" }}>AI</p>
                  </div>
                </div>
                <p style={{ alignSelf: "stretch", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>Classify refund tickets, auto-approve under $200, escalate the rest with context.</p>
              </div>
              <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 4px 2px 4px", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <Users size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#929292", display: "block" }} />
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "79px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>1,208 teams</p>
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <Clock size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#929292", display: "block" }} />
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "67px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>~7 h/week</p>
                </div>
                <div style={{ flex: "1 1 0", minWidth: 0, height: "1px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }} />
                <div data-fu="btn" style={{ flexShrink: 0, borderRadius: "8px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e8e8e8", display: "flex", flexDirection: "row", padding: "5px 11px 5px 11px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "86px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#686765", lineHeight: "20px" }}>Use template</p>
                </div>
              </div>
            </div>
            <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, borderRadius: "12px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ededed", display: "flex", flexDirection: "column", padding: "13px 13px 13px 13px", gap: "12px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ alignSelf: "stretch", flexShrink: 0, borderRadius: "10px", background: "#fdf0f7", display: "flex", flexDirection: "row", padding: "22px 12px 22px 12px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "36px", height: "36px", flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ededed, 0px 1px 2px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <svg style={{ width: "20px", height: "20px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0.457 0)" d="M14.6796 6.60831 L14.6796 4.23665 C14.9935 4.08989 15.2593 3.85712 15.4462 3.56535 C15.6331 3.27359 15.7334 2.9348 15.7354 2.58831 L15.7354 2.53248 C15.7341 2.04812 15.5412 1.58397 15.1988 1.2414 C14.8564 0.898833 14.3923 0.705685 13.9079 0.704145 L13.8521 0.704145 C13.3679 0.705684 12.904 0.898717 12.5616 1.24111 C12.2192 1.5835 12.0261 2.04744 12.0246 2.53165 L12.0246 2.58748 C12.0261 2.93195 12.1249 3.269 12.3094 3.55985 C12.494 3.85071 12.7569 4.08357 13.0679 4.23165 L13.0788 4.23665 L13.0788 6.61331 C12.172 6.75186 11.3182 7.12857 10.6046 7.70498 L10.6146 7.69665 L4.09128 2.61748 C4.21548 2.15219 4.17444 1.65823 3.97517 1.21982 C3.7759 0.781405 3.43074 0.42568 2.99853 0.213295 C2.56631 0.000909393 2.07381 -0.0549858 1.605 0.0551388 C1.13618 0.165264 0.720078 0.43459 0.427629 0.817198 C0.13518 1.19981 -0.0155059 1.67201 0.00126261 2.15329 C0.0180311 2.63457 0.201216 3.09514 0.519584 3.45647 C0.837953 3.8178 1.27179 4.05751 1.74714 4.13474 C2.22248 4.21197 2.70989 4.12193 3.12628 3.87998 L3.11628 3.88498 L9.53044 8.87748 C8.96342 9.7276 8.6623 10.7273 8.66544 11.7491 C8.66544 12.8683 9.01961 13.9058 9.62128 14.755 L9.61044 14.7383 L7.65878 16.6908 C7.50254 16.6404 7.33961 16.6137 7.17544 16.6116 L7.17378 16.6116 C6.8387 16.6116 6.51115 16.711 6.23255 16.8972 C5.95394 17.0833 5.7368 17.3479 5.60857 17.6575 C5.48034 17.9671 5.44679 18.3077 5.51216 18.6363 C5.57753 18.965 5.73889 19.2668 5.97582 19.5038 C6.21275 19.7407 6.51463 19.9021 6.84326 19.9674 C7.1719 20.0328 7.51254 19.9992 7.82211 19.871 C8.13167 19.7428 8.39627 19.5256 8.58243 19.247 C8.76858 18.9684 8.86794 18.6409 8.86794 18.3058 C8.86568 18.1372 8.83758 17.97 8.78461 17.81 L8.78878 17.8216 L10.7196 15.8908 C11.3489 16.371 12.0795 16.7014 12.8557 16.8568 C13.632 17.0121 14.4334 16.9885 15.1991 16.7875 C15.9648 16.5865 16.6745 16.2136 17.2744 15.6971 C17.8743 15.1805 18.3485 14.534 18.6609 13.8066 C18.9733 13.0792 19.1157 12.2902 19.0772 11.4995 C19.0388 10.7088 18.8206 9.93731 18.4391 9.24366 C18.0577 8.55001 17.523 7.95248 16.8759 7.49654 C16.2288 7.0406 15.4862 6.73825 14.7046 6.61248 L14.6746 6.60831 L14.6796 6.60831 Z M13.8763 14.4233 C13.3482 14.4218 12.8325 14.2639 12.3941 13.9695 C11.9558 13.675 11.6145 13.2573 11.4134 12.7691 C11.2123 12.2808 11.1604 11.7439 11.2643 11.2262 C11.3682 10.7084 11.6231 10.2331 11.997 9.86015 C12.3708 9.48723 12.8468 9.23345 13.3648 9.13088 C13.8828 9.0283 14.4196 9.08153 14.9073 9.28383 C15.3951 9.48614 15.812 9.82844 16.1053 10.2675 C16.3986 10.7066 16.5553 11.2228 16.5554 11.7508 L16.5554 11.7525 C16.5556 12.1035 16.4865 12.451 16.3522 12.7753 C16.218 13.0996 16.0211 13.3943 15.7729 13.6425 C15.5247 13.8907 15.2301 14.0875 14.9058 14.2218 C14.5815 14.356 14.2339 14.4251 13.8829 14.425 L13.8763 14.4233 Z" fill="#ff7a59"/></svg>
                </div>
                <ChevronRight size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#b3b3b3", display: "block" }} />
                <div style={{ width: "36px", height: "36px", flexShrink: 0, borderRadius: "10px", background: "#ffffff", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <Sparkles size={18} strokeWidth={2} style={{ width: "18px", height: "18px", flexShrink: 0, color: "#1b8ce8", display: "block" }} />
                </div>
                <ChevronRight size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#b3b3b3", display: "block" }} />
                <div style={{ width: "36px", height: "36px", flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ededed, 0px 1px 2px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <svg style={{ width: "20px", height: "20px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 3)" d="M8.33833 1.5125 C8.66524 1.16832 9.05882 0.894315 9.49508 0.707203 C9.93134 0.520092 10.4011 0.423789 10.8758 0.424167 C12.1758 0.424167 13.3375 1.17417 13.9508 2.26167 C14.4758 2.01167 15.0758 1.88667 15.7008 1.88667 C18.0758 1.88667 20 3.83667 20 6.23667 C20 8.63667 18.075 10.5867 15.6867 10.5867 C15.3992 10.5867 15.1117 10.55 14.8367 10.5 C14.5668 10.9932 14.169 11.4044 13.685 11.6904 C13.201 11.9764 12.6488 12.1265 12.0867 12.125 C11.5867 12.125 11.1242 12 10.7117 11.8125 C10.4353 12.4619 9.97397 13.0157 9.38506 13.4047 C8.79616 13.7937 8.10578 14.0007 7.4 14 C6.66429 14.0019 5.94579 13.7775 5.34202 13.3571 C4.73825 12.9367 4.27844 12.3407 4.025 11.65 C3.8 11.7017 3.575 11.7133 3.3375 11.7133 C1.50083 11.7133 0 10.2133 0 8.33833 C0 7.08833 0.675833 6.00083 1.675 5.41333 C1.4625 4.93833 1.35 4.41333 1.35 3.875 C1.35 1.725 3.1 0 5.225 0 C6.5 0 7.6 0.5875 8.325 1.5" fill="#00a1e0"/></svg>
                </div>
              </div>
              <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", padding: "0px 4px 0px 4px", gap: "4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "162px", fontFamily: "'Geist'", fontSize: "16px", fontWeight: 400, color: "#15171c", lineHeight: "24px", letterSpacing: "-0.1px" }}>Lead scoring & routing</p>
                  <div style={{ flexShrink: 0, borderRadius: "100px", background: "#eff8ff", display: "flex", flexDirection: "row", padding: "1px 8px 1px 8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "13px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#1b8ce8", lineHeight: "20px" }}>AI</p>
                  </div>
                </div>
                <p style={{ alignSelf: "stretch", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>Score new contacts on fit and intent, then route hot leads to the right rep.</p>
              </div>
              <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 4px 2px 4px", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <Users size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#929292", display: "block" }} />
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "77px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>1,876 teams</p>
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <Clock size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#929292", display: "block" }} />
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "69px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>~9 h/week</p>
                </div>
                <div style={{ flex: "1 1 0", minWidth: 0, height: "1px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }} />
                <div data-fu="btn" style={{ flexShrink: 0, borderRadius: "8px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e8e8e8", display: "flex", flexDirection: "row", padding: "5px 11px 5px 11px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "86px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#686765", lineHeight: "20px" }}>Use template</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, borderRadius: "9px", background: "#f5f5f5", display: "flex", flexDirection: "row", padding: "3px 3px 3px 3px", gap: "2px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, borderRadius: "6px", background: "#ffffff", boxShadow: "0px 1.4px 1px 0px rgba(0, 0, 0, 0.06), 0px 0px 1px 0px rgba(0, 0, 0, 0.25)", display: "flex", flexDirection: "row", padding: "4px 10px 4px 10px", gap: "6px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "17px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>All</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "23px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#929292", lineHeight: "20px" }}>180</p>
            </div>
            <div style={{ flexShrink: 0, borderRadius: "6px", display: "flex", flexDirection: "row", padding: "4px 10px 4px 10px", gap: "6px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "51px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#697386", lineHeight: "20px" }}>Finance</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#b3b3b3", lineHeight: "20px" }}>46</p>
            </div>
            <div style={{ flexShrink: 0, borderRadius: "6px", display: "flex", flexDirection: "row", padding: "4px 10px 4px 10px", gap: "6px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "36px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#697386", lineHeight: "20px" }}>Sales</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#b3b3b3", lineHeight: "20px" }}>38</p>
            </div>
            <div style={{ flexShrink: 0, borderRadius: "6px", display: "flex", flexDirection: "row", padding: "4px 10px 4px 10px", gap: "6px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "52px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#697386", lineHeight: "20px" }}>Support</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#b3b3b3", lineHeight: "20px" }}>33</p>
            </div>
            <div style={{ flexShrink: 0, borderRadius: "6px", display: "flex", flexDirection: "row", padding: "4px 10px 4px 10px", gap: "6px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "71px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#697386", lineHeight: "20px" }}>Operations</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#b3b3b3", lineHeight: "20px" }}>29</p>
            </div>
            <div style={{ flexShrink: 0, borderRadius: "6px", display: "flex", flexDirection: "row", padding: "4px 10px 4px 10px", gap: "6px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "20px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#697386", lineHeight: "20px" }}>HR</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "14px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#b3b3b3", lineHeight: "20px" }}>18</p>
            </div>
            <div style={{ flexShrink: 0, borderRadius: "6px", display: "flex", flexDirection: "row", padding: "4px 10px 4px 10px", gap: "6px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "11px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#697386", lineHeight: "20px" }}>IT</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "14px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#b3b3b3", lineHeight: "20px" }}>16</p>
            </div>
          </div>
          <div style={{ flex: "1 1 0", minWidth: 0, height: "1px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }} />
          <div style={{ width: "240px", height: "32px", flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e8e8e8", display: "flex", flexDirection: "row", padding: "7px 7px 7px 11px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <Search size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#979797", display: "block" }} />
            <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#979797", lineHeight: "20px" }}>Search templates</p>
            <div style={{ height: "20px", flexShrink: 0, borderRadius: "5px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e8e8e8, 0px 1px 2px 0px rgba(79, 79, 79, 0.12)", display: "flex", flexDirection: "row", padding: "1px 6px 1px 6px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "8px", fontFamily: "'Geist Mono'", fontSize: "12px", fontWeight: 400, color: "#697386", lineHeight: "18px" }}>/</p>
            </div>
          </div>
          <div style={{ flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e8e8e8", display: "flex", flexDirection: "row", padding: "7px 13px 7px 13px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <SortDescending size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "68px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#686765", lineHeight: "20px" }}>Most used</p>
            <ChevronDown size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
          </div>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", flexWrap: "wrap", rowGap: "16px", columnGap: "16px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ width: "276.75px", height: "192px", flexShrink: 0, borderRadius: "12px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ededed", display: "flex", flexDirection: "column", padding: "17px 17px 17px 17px", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "-6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "9px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ededed, 0px 0px 0px 2px #ffffff, 0px 1px 2px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <svg style={{ width: "18px", height: "18px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M3.7815 11.3737 C3.78051 11.8749 3.58114 12.3553 3.22698 12.7099 C2.87281 13.0645 2.39266 13.2644 1.8915 13.266 C1.39008 13.2648 0.909545 13.065 0.555056 12.7104 C0.200567 12.3558 0.000990328 11.8752 1.249e-16 11.3737 C0.0013871 10.8727 0.201163 10.3925 0.55563 10.0383 C0.910098 9.68413 1.39041 9.48474 1.8915 9.48375 L3.7815 9.48375 L3.7815 11.3737 Z M4.73475 11.3737 C4.73614 10.8728 4.93581 10.3927 5.29011 10.0386 C5.64442 9.68442 6.12454 9.48494 6.6255 9.48375 C7.12646 9.48494 7.60658 9.68442 7.96089 10.0386 C8.31519 10.3927 8.51486 10.8728 8.51625 11.3737 L8.51625 16.1085 C8.51506 16.6097 8.3155 17.09 7.9612 17.4444 C7.60689 17.7989 7.12666 17.9986 6.6255 18 C6.12434 17.9986 5.64411 17.7989 5.2898 17.4444 C4.9355 17.09 4.73594 16.6097 4.73475 16.1085 L4.73475 11.3737 Z M6.6255 3.7815 C6.1246 3.78012 5.6446 3.58057 5.29033 3.22645 C4.93607 2.87232 4.73633 2.3924 4.73475 1.8915 C4.73594 1.39034 4.9355 0.910031 5.2898 0.555584 C5.64411 0.201138 6.12434 0.00138631 6.6255 0 C7.12666 0.00138631 7.60689 0.201138 7.9612 0.555584 C8.3155 0.910031 8.51506 1.39034 8.51625 1.8915 L8.51625 3.7815 L6.6255 3.7815 Z M6.6255 4.73475 C7.12653 4.73614 7.60665 4.93578 7.96093 5.29007 C8.31522 5.64435 8.51486 6.12447 8.51625 6.6255 C8.51486 7.12653 8.31522 7.60665 7.96093 7.96093 C7.60665 8.31522 7.12653 8.51486 6.6255 8.51625 L1.8915 8.51625 C1.39034 8.51506 0.910031 8.3155 0.555584 7.9612 C0.201138 7.60689 0.00138631 7.12666 0 6.6255 C0.00138631 6.12434 0.201138 5.64411 0.555584 5.2898 C0.910031 4.9355 1.39034 4.73594 1.8915 4.73475 L6.6255 4.73475 Z M14.217 6.6255 C14.2184 6.12434 14.4181 5.64411 14.7726 5.2898 C15.127 4.9355 15.6073 4.73594 16.1085 4.73475 C16.6097 4.73594 17.09 4.9355 17.4444 5.2898 C17.7989 5.64411 17.9986 6.12434 18 6.6255 C17.9986 7.12666 17.7989 7.60689 17.4444 7.9612 C17.09 8.3155 16.6097 8.51506 16.1085 8.51625 L14.217 8.51625 L14.217 6.6255 Z M13.266 6.6255 C13.2646 7.12679 13.0648 7.60713 12.7101 7.96146 C12.3555 8.31579 11.875 8.51526 11.3737 8.51625 C10.8728 8.51486 10.3927 8.31519 10.0386 7.96089 C9.68442 7.60658 9.48494 7.12646 9.48375 6.6255 L9.48375 1.8915 C9.48474 1.39041 9.68413 0.910098 10.0383 0.55563 C10.3925 0.201163 10.8727 0.0013871 11.3737 3.747e-16 C11.8752 0.000990328 12.3558 0.200567 12.7104 0.555056 C13.065 0.909545 13.2648 1.39008 13.266 1.8915 L13.266 6.6255 Z M11.3737 14.217 C11.8752 14.218 12.3558 14.4176 12.7104 14.7721 C13.065 15.1265 13.2648 15.6071 13.266 16.1085 C13.2648 16.6099 13.065 17.0905 12.7104 17.4449 C12.3558 17.7994 11.8752 17.999 11.3737 18 C10.8727 17.9986 10.3925 17.7988 10.0383 17.4444 C9.68413 17.0899 9.48474 16.6096 9.48375 16.1085 L9.48375 14.217 L11.3737 14.217 Z M11.3737 13.266 C10.8725 13.2646 10.3923 13.0647 10.0381 12.7101 C9.68385 12.3555 9.48454 11.875 9.48375 11.3737 C9.48494 10.8729 9.68444 10.3928 10.0386 10.0386 C10.3928 9.68444 10.8729 9.48494 11.3737 9.48375 L16.1085 9.48375 C16.6096 9.48474 17.0899 9.68413 17.4444 10.0383 C17.7988 10.3925 17.9986 10.8727 18 11.3737 C17.999 11.8752 17.7994 12.3558 17.4449 12.7104 C17.0905 13.065 16.6099 13.2648 16.1085 13.266 L11.3737 13.266 Z" fill="#4a154b"/></svg>
              </div>
              <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "9px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ededed, 0px 0px 0px 2px #ffffff, 0px 1px 2px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box", marginLeft: "-6px" }}>
                <svg style={{ width: "18px", height: "18px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 2.455 0)" d="M6.03375 9.40875 L3.47775 9.40875 L3.47775 7.977 L6.03525 7.977 L6.03525 9.4095 L6.03375 9.40875 Z M8.59125 0 L8.59125 4.5 L13.0912 4.5 L8.59125 0 Z M9.6135 7.977 L7.056 7.977 L7.056 9.4095 L9.6135 9.4095 L9.6135 7.977 Z M9.6135 10.4318 L7.056 10.4318 L7.056 11.8643 L9.6135 11.8643 L9.6135 10.4318 Z M13.0905 4.875 L13.0905 16.773 C13.0905 17.451 12.5415 18 11.8635 18 L1.227 18 C1.06587 18 0.906314 17.9683 0.757447 17.9066 C0.608581 17.8449 0.473318 17.7546 0.35938 17.6406 C0.129273 17.4105 0 17.0984 0 16.773 L0 1.227 C3.33067e-16 0.549 0.549 0 1.227 0 L8.2155 0 L8.2155 4.875 L13.0905 4.875 Z M10.6358 6.95475 L2.454 6.95475 L2.454 12.8865 L10.6365 12.8865 L10.6365 6.954 L10.6358 6.95475 Z M6.03375 10.4318 L3.47775 10.4318 L3.47775 11.8643 L6.03525 11.8643 L6.03525 10.4318 L6.03375 10.4318 Z" fill="#34a853"/></svg>
              </div>
            </div>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "133px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>Expense report audit</p>
              <p style={{ alignSelf: "stretch", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>Flag out-of-policy expenses from Slack submissions and log them to a sheet.</p>
            </div>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, borderRadius: "100px", background: "#f7f8fa", display: "flex", flexDirection: "row", padding: "1px 8px 1px 8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "51px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>Finance</p>
              </div>
              <div style={{ flex: "1 1 0", minWidth: 0, height: "1px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }} />
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <Users size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#929292", display: "block" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "27px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>940</p>
              </div>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <Clock size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#929292", display: "block" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "17px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>4h</p>
              </div>
            </div>
          </div>
          <div style={{ width: "276.75px", height: "192px", flexShrink: 0, borderRadius: "12px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ededed", display: "flex", flexDirection: "column", padding: "17px 17px 17px 17px", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "-6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "9px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ededed, 0px 0px 0px 2px #ffffff, 0px 1px 2px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <svg style={{ width: "18px", height: "18px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 2.455 0)" d="M6.03375 9.40875 L3.47775 9.40875 L3.47775 7.977 L6.03525 7.977 L6.03525 9.4095 L6.03375 9.40875 Z M8.59125 0 L8.59125 4.5 L13.0912 4.5 L8.59125 0 Z M9.6135 7.977 L7.056 7.977 L7.056 9.4095 L9.6135 9.4095 L9.6135 7.977 Z M9.6135 10.4318 L7.056 10.4318 L7.056 11.8643 L9.6135 11.8643 L9.6135 10.4318 Z M13.0905 4.875 L13.0905 16.773 C13.0905 17.451 12.5415 18 11.8635 18 L1.227 18 C1.06587 18 0.906314 17.9683 0.757447 17.9066 C0.608581 17.8449 0.473318 17.7546 0.35938 17.6406 C0.129273 17.4105 0 17.0984 0 16.773 L0 1.227 C3.33067e-16 0.549 0.549 0 1.227 0 L8.2155 0 L8.2155 4.875 L13.0905 4.875 Z M10.6358 6.95475 L2.454 6.95475 L2.454 12.8865 L10.6365 12.8865 L10.6365 6.954 L10.6358 6.95475 Z M6.03375 10.4318 L3.47775 10.4318 L3.47775 11.8643 L6.03525 11.8643 L6.03525 10.4318 L6.03375 10.4318 Z" fill="#34a853"/></svg>
              </div>
              <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "9px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ededed, 0px 0px 0px 2px #ffffff, 0px 1px 2px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box", marginLeft: "-6px" }}>
                <div style={{ width: "18px", height: "18px", flexShrink: 0, borderRadius: "5px", background: "#1a3d6e", position: "relative" }}>
                  <p style={{ position: "absolute", left: "4px", top: "4px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "13px", lineHeight: "12px", fontFamily: "'Geist'", fontSize: "9px", fontWeight: 600, color: "#ffffff" }}>NS</p>
                </div>
              </div>
              <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "9px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ededed, 0px 0px 0px 2px #ffffff, 0px 1px 2px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box", marginLeft: "-6px" }}>
                <svg style={{ width: "18px", height: "18px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 2.248)" d="M18 1.84465 L18 12.2764 C18 12.9544 17.451 13.5034 16.773 13.5034 L13.9088 13.5034 L13.9088 6.5494 L9 10.2319 L4.09125 6.5494 L4.09125 13.5041 L1.227 13.5041 C1.06581 13.5041 0.90619 13.4724 0.757274 13.4107 C0.608359 13.349 0.473062 13.2585 0.359115 13.1445 C0.245168 13.0305 0.154803 12.8951 0.0931847 12.7462 C0.0315663 12.5972 -9.83008e-05 12.4376 2.29239e-07 12.2764 L2.29239e-07 1.84465 C2.29239e-07 0.327398 1.73175 -0.538852 2.94525 0.371648 L4.09125 1.2319 L9 4.9129 L13.9088 1.2304 L15.0548 0.371648 C16.2675 -0.538102 18 0.327398 18 1.84465 Z" fill="#ea4335"/></svg>
              </div>
            </div>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "122px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>Vendor onboarding</p>
              <p style={{ alignSelf: "stretch", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>Collect W-9s, verify bank details and create the vendor record.</p>
            </div>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, borderRadius: "100px", background: "#f7f8fa", display: "flex", flexDirection: "row", padding: "1px 8px 1px 8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "51px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>Finance</p>
              </div>
              <div style={{ flex: "1 1 0", minWidth: 0, height: "1px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }} />
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <Users size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#929292", display: "block" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "23px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>612</p>
              </div>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <Clock size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#929292", display: "block" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "17px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>6h</p>
              </div>
            </div>
          </div>
          <div style={{ width: "276.75px", height: "192px", flexShrink: 0, borderRadius: "12px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ededed", display: "flex", flexDirection: "column", padding: "17px 17px 17px 17px", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "-6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "9px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ededed, 0px 0px 0px 2px #ffffff, 0px 1px 2px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <svg style={{ width: "18px", height: "18px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 2.7)" d="M7.5045 1.36125 C7.79872 1.05148 8.15294 0.804883 8.54558 0.636483 C8.93821 0.468082 9.36103 0.38141 9.78825 0.38175 C10.9583 0.38175 12.0037 1.05675 12.5557 2.0355 C13.0282 1.8105 13.5682 1.698 14.1307 1.698 C16.2682 1.698 18 3.453 18 5.613 C18 7.773 16.2675 9.528 14.118 9.528 C13.8592 9.528 13.6005 9.495 13.353 9.45 C13.1101 9.89385 12.7521 10.264 12.3165 10.5214 C11.8809 10.7788 11.3839 10.9139 10.878 10.9125 C10.428 10.9125 10.0118 10.8 9.6405 10.6312 C9.39181 11.2157 8.97657 11.7141 8.44656 12.0642 C7.91654 12.4143 7.2952 12.6006 6.66 12.6 C5.99786 12.6017 5.35121 12.3997 4.80782 12.0214 C4.26443 11.643 3.8506 11.1066 3.6225 10.485 C3.42 10.5315 3.2175 10.542 3.00375 10.542 C1.35075 10.542 0 9.192 0 7.5045 C0 6.3795 0.60825 5.40075 1.5075 4.872 C1.31625 4.4445 1.215 3.972 1.215 3.4875 C1.215 1.5525 2.79 0 4.7025 0 C5.85 0 6.84 0.52875 7.4925 1.35" fill="#00a1e0"/></svg>
              </div>
              <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "9px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ededed, 0px 0px 0px 2px #ffffff, 0px 1px 2px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box", marginLeft: "-6px" }}>
                <svg style={{ width: "18px", height: "18px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M3.7815 11.3737 C3.78051 11.8749 3.58114 12.3553 3.22698 12.7099 C2.87281 13.0645 2.39266 13.2644 1.8915 13.266 C1.39008 13.2648 0.909545 13.065 0.555056 12.7104 C0.200567 12.3558 0.000990328 11.8752 1.249e-16 11.3737 C0.0013871 10.8727 0.201163 10.3925 0.55563 10.0383 C0.910098 9.68413 1.39041 9.48474 1.8915 9.48375 L3.7815 9.48375 L3.7815 11.3737 Z M4.73475 11.3737 C4.73614 10.8728 4.93581 10.3927 5.29011 10.0386 C5.64442 9.68442 6.12454 9.48494 6.6255 9.48375 C7.12646 9.48494 7.60658 9.68442 7.96089 10.0386 C8.31519 10.3927 8.51486 10.8728 8.51625 11.3737 L8.51625 16.1085 C8.51506 16.6097 8.3155 17.09 7.9612 17.4444 C7.60689 17.7989 7.12666 17.9986 6.6255 18 C6.12434 17.9986 5.64411 17.7989 5.2898 17.4444 C4.9355 17.09 4.73594 16.6097 4.73475 16.1085 L4.73475 11.3737 Z M6.6255 3.7815 C6.1246 3.78012 5.6446 3.58057 5.29033 3.22645 C4.93607 2.87232 4.73633 2.3924 4.73475 1.8915 C4.73594 1.39034 4.9355 0.910031 5.2898 0.555584 C5.64411 0.201138 6.12434 0.00138631 6.6255 0 C7.12666 0.00138631 7.60689 0.201138 7.9612 0.555584 C8.3155 0.910031 8.51506 1.39034 8.51625 1.8915 L8.51625 3.7815 L6.6255 3.7815 Z M6.6255 4.73475 C7.12653 4.73614 7.60665 4.93578 7.96093 5.29007 C8.31522 5.64435 8.51486 6.12447 8.51625 6.6255 C8.51486 7.12653 8.31522 7.60665 7.96093 7.96093 C7.60665 8.31522 7.12653 8.51486 6.6255 8.51625 L1.8915 8.51625 C1.39034 8.51506 0.910031 8.3155 0.555584 7.9612 C0.201138 7.60689 0.00138631 7.12666 0 6.6255 C0.00138631 6.12434 0.201138 5.64411 0.555584 5.2898 C0.910031 4.9355 1.39034 4.73594 1.8915 4.73475 L6.6255 4.73475 Z M14.217 6.6255 C14.2184 6.12434 14.4181 5.64411 14.7726 5.2898 C15.127 4.9355 15.6073 4.73594 16.1085 4.73475 C16.6097 4.73594 17.09 4.9355 17.4444 5.2898 C17.7989 5.64411 17.9986 6.12434 18 6.6255 C17.9986 7.12666 17.7989 7.60689 17.4444 7.9612 C17.09 8.3155 16.6097 8.51506 16.1085 8.51625 L14.217 8.51625 L14.217 6.6255 Z M13.266 6.6255 C13.2646 7.12679 13.0648 7.60713 12.7101 7.96146 C12.3555 8.31579 11.875 8.51526 11.3737 8.51625 C10.8728 8.51486 10.3927 8.31519 10.0386 7.96089 C9.68442 7.60658 9.48494 7.12646 9.48375 6.6255 L9.48375 1.8915 C9.48474 1.39041 9.68413 0.910098 10.0383 0.55563 C10.3925 0.201163 10.8727 0.0013871 11.3737 3.747e-16 C11.8752 0.000990328 12.3558 0.200567 12.7104 0.555056 C13.065 0.909545 13.2648 1.39008 13.266 1.8915 L13.266 6.6255 Z M11.3737 14.217 C11.8752 14.218 12.3558 14.4176 12.7104 14.7721 C13.065 15.1265 13.2648 15.6071 13.266 16.1085 C13.2648 16.6099 13.065 17.0905 12.7104 17.4449 C12.3558 17.7994 11.8752 17.999 11.3737 18 C10.8727 17.9986 10.3925 17.7988 10.0383 17.4444 C9.68413 17.0899 9.48474 16.6096 9.48375 16.1085 L9.48375 14.217 L11.3737 14.217 Z M11.3737 13.266 C10.8725 13.2646 10.3923 13.0647 10.0381 12.7101 C9.68385 12.3555 9.48454 11.875 9.48375 11.3737 C9.48494 10.8729 9.68444 10.3928 10.0386 10.0386 C10.3928 9.68444 10.8729 9.48494 11.3737 9.48375 L16.1085 9.48375 C16.6096 9.48474 17.0899 9.68413 17.4444 10.0383 C17.7988 10.3925 17.9986 10.8727 18 11.3737 C17.999 11.8752 17.7994 12.3558 17.4449 12.7104 C17.0905 13.065 16.6099 13.2648 16.1085 13.266 L11.3737 13.266 Z" fill="#4a154b"/></svg>
              </div>
            </div>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "109px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>Churn risk digest</p>
              <p style={{ alignSelf: "stretch", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>Every Monday, summarise at-risk accounts with usage drops and open tickets.</p>
            </div>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, borderRadius: "100px", background: "#f7f8fa", display: "flex", flexDirection: "row", padding: "1px 8px 1px 8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "36px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>Sales</p>
              </div>
              <div style={{ flex: "1 1 0", minWidth: 0, height: "1px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }} />
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <Users size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#929292", display: "block" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "21px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>1.1k</p>
              </div>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <Clock size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#929292", display: "block" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "17px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>3h</p>
              </div>
            </div>
          </div>
          <div style={{ width: "276.75px", height: "192px", flexShrink: 0, borderRadius: "12px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ededed", display: "flex", flexDirection: "column", padding: "17px 17px 17px 17px", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "-6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "9px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ededed, 0px 0px 0px 2px #ffffff, 0px 1px 2px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <svg style={{ width: "18px", height: "18px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 2.7)" d="M7.5045 1.36125 C7.79872 1.05148 8.15294 0.804883 8.54558 0.636483 C8.93821 0.468082 9.36103 0.38141 9.78825 0.38175 C10.9583 0.38175 12.0037 1.05675 12.5557 2.0355 C13.0282 1.8105 13.5682 1.698 14.1307 1.698 C16.2682 1.698 18 3.453 18 5.613 C18 7.773 16.2675 9.528 14.118 9.528 C13.8592 9.528 13.6005 9.495 13.353 9.45 C13.1101 9.89385 12.7521 10.264 12.3165 10.5214 C11.8809 10.7788 11.3839 10.9139 10.878 10.9125 C10.428 10.9125 10.0118 10.8 9.6405 10.6312 C9.39181 11.2157 8.97657 11.7141 8.44656 12.0642 C7.91654 12.4143 7.2952 12.6006 6.66 12.6 C5.99786 12.6017 5.35121 12.3997 4.80782 12.0214 C4.26443 11.643 3.8506 11.1066 3.6225 10.485 C3.42 10.5315 3.2175 10.542 3.00375 10.542 C1.35075 10.542 0 9.192 0 7.5045 C0 6.3795 0.60825 5.40075 1.5075 4.872 C1.31625 4.4445 1.215 3.972 1.215 3.4875 C1.215 1.5525 2.79 0 4.7025 0 C5.85 0 6.84 0.52875 7.4925 1.35" fill="#00a1e0"/></svg>
              </div>
              <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "9px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ededed, 0px 0px 0px 2px #ffffff, 0px 1px 2px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box", marginLeft: "-6px" }}>
                <svg style={{ width: "18px", height: "18px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 2.248)" d="M18 1.84465 L18 12.2764 C18 12.9544 17.451 13.5034 16.773 13.5034 L13.9088 13.5034 L13.9088 6.5494 L9 10.2319 L4.09125 6.5494 L4.09125 13.5041 L1.227 13.5041 C1.06581 13.5041 0.90619 13.4724 0.757274 13.4107 C0.608359 13.349 0.473062 13.2585 0.359115 13.1445 C0.245168 13.0305 0.154803 12.8951 0.0931847 12.7462 C0.0315663 12.5972 -9.83008e-05 12.4376 2.29239e-07 12.2764 L2.29239e-07 1.84465 C2.29239e-07 0.327398 1.73175 -0.538852 2.94525 0.371648 L4.09125 1.2319 L9 4.9129 L13.9088 1.2304 L15.0548 0.371648 C16.2675 -0.538102 18 0.327398 18 1.84465 Z" fill="#ea4335"/></svg>
              </div>
            </div>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "178px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>Contract renewal reminders</p>
              <p style={{ alignSelf: "stretch", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>Remind owners 60/30/7 days before renewal with a drafted email.</p>
            </div>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, borderRadius: "100px", background: "#f7f8fa", display: "flex", flexDirection: "row", padding: "1px 8px 1px 8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "36px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>Sales</p>
              </div>
              <div style={{ flex: "1 1 0", minWidth: 0, height: "1px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }} />
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <Users size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#929292", display: "block" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "25px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>870</p>
              </div>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <Clock size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#929292", display: "block" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "17px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>2h</p>
              </div>
            </div>
          </div>
          <div style={{ width: "276.75px", height: "192px", flexShrink: 0, borderRadius: "12px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ededed", display: "flex", flexDirection: "column", padding: "17px 17px 17px 17px", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "-6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "9px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ededed, 0px 0px 0px 2px #ffffff, 0px 1px 2px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <svg style={{ width: "18px", height: "18px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 2.178)" d="M9.6855 0 L9.6855 10.0395 L18 0.000749946 L9.6855 0 Z M0 0.00149989 C0 2.2965 1.86225 4.1595 4.15725 4.1595 C6.45225 4.1595 8.31375 2.2965 8.3145 0.00149989 L0 0.00149989 Z M8.3145 3.60675 L0 13.644 L8.3145 13.644 L8.3145 3.60675 Z M13.842 9.48675 C11.5447 9.48675 9.6855 11.3468 9.6855 13.644 L18 13.644 C18 11.349 16.14 9.48675 13.8428 9.48675 L13.842 9.48675 Z" fill="#03363d"/></svg>
              </div>
              <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "9px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ededed, 0px 0px 0px 2px #ffffff, 0px 1px 2px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box", marginLeft: "-6px" }}>
                <svg style={{ width: "18px", height: "18px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M3.7815 11.3737 C3.78051 11.8749 3.58114 12.3553 3.22698 12.7099 C2.87281 13.0645 2.39266 13.2644 1.8915 13.266 C1.39008 13.2648 0.909545 13.065 0.555056 12.7104 C0.200567 12.3558 0.000990328 11.8752 1.249e-16 11.3737 C0.0013871 10.8727 0.201163 10.3925 0.55563 10.0383 C0.910098 9.68413 1.39041 9.48474 1.8915 9.48375 L3.7815 9.48375 L3.7815 11.3737 Z M4.73475 11.3737 C4.73614 10.8728 4.93581 10.3927 5.29011 10.0386 C5.64442 9.68442 6.12454 9.48494 6.6255 9.48375 C7.12646 9.48494 7.60658 9.68442 7.96089 10.0386 C8.31519 10.3927 8.51486 10.8728 8.51625 11.3737 L8.51625 16.1085 C8.51506 16.6097 8.3155 17.09 7.9612 17.4444 C7.60689 17.7989 7.12666 17.9986 6.6255 18 C6.12434 17.9986 5.64411 17.7989 5.2898 17.4444 C4.9355 17.09 4.73594 16.6097 4.73475 16.1085 L4.73475 11.3737 Z M6.6255 3.7815 C6.1246 3.78012 5.6446 3.58057 5.29033 3.22645 C4.93607 2.87232 4.73633 2.3924 4.73475 1.8915 C4.73594 1.39034 4.9355 0.910031 5.2898 0.555584 C5.64411 0.201138 6.12434 0.00138631 6.6255 0 C7.12666 0.00138631 7.60689 0.201138 7.9612 0.555584 C8.3155 0.910031 8.51506 1.39034 8.51625 1.8915 L8.51625 3.7815 L6.6255 3.7815 Z M6.6255 4.73475 C7.12653 4.73614 7.60665 4.93578 7.96093 5.29007 C8.31522 5.64435 8.51486 6.12447 8.51625 6.6255 C8.51486 7.12653 8.31522 7.60665 7.96093 7.96093 C7.60665 8.31522 7.12653 8.51486 6.6255 8.51625 L1.8915 8.51625 C1.39034 8.51506 0.910031 8.3155 0.555584 7.9612 C0.201138 7.60689 0.00138631 7.12666 0 6.6255 C0.00138631 6.12434 0.201138 5.64411 0.555584 5.2898 C0.910031 4.9355 1.39034 4.73594 1.8915 4.73475 L6.6255 4.73475 Z M14.217 6.6255 C14.2184 6.12434 14.4181 5.64411 14.7726 5.2898 C15.127 4.9355 15.6073 4.73594 16.1085 4.73475 C16.6097 4.73594 17.09 4.9355 17.4444 5.2898 C17.7989 5.64411 17.9986 6.12434 18 6.6255 C17.9986 7.12666 17.7989 7.60689 17.4444 7.9612 C17.09 8.3155 16.6097 8.51506 16.1085 8.51625 L14.217 8.51625 L14.217 6.6255 Z M13.266 6.6255 C13.2646 7.12679 13.0648 7.60713 12.7101 7.96146 C12.3555 8.31579 11.875 8.51526 11.3737 8.51625 C10.8728 8.51486 10.3927 8.31519 10.0386 7.96089 C9.68442 7.60658 9.48494 7.12646 9.48375 6.6255 L9.48375 1.8915 C9.48474 1.39041 9.68413 0.910098 10.0383 0.55563 C10.3925 0.201163 10.8727 0.0013871 11.3737 3.747e-16 C11.8752 0.000990328 12.3558 0.200567 12.7104 0.555056 C13.065 0.909545 13.2648 1.39008 13.266 1.8915 L13.266 6.6255 Z M11.3737 14.217 C11.8752 14.218 12.3558 14.4176 12.7104 14.7721 C13.065 15.1265 13.2648 15.6071 13.266 16.1085 C13.2648 16.6099 13.065 17.0905 12.7104 17.4449 C12.3558 17.7994 11.8752 17.999 11.3737 18 C10.8727 17.9986 10.3925 17.7988 10.0383 17.4444 C9.68413 17.0899 9.48474 16.6096 9.48375 16.1085 L9.48375 14.217 L11.3737 14.217 Z M11.3737 13.266 C10.8725 13.2646 10.3923 13.0647 10.0381 12.7101 C9.68385 12.3555 9.48454 11.875 9.48375 11.3737 C9.48494 10.8729 9.68444 10.3928 10.0386 10.0386 C10.3928 9.68444 10.8729 9.48494 11.3737 9.48375 L16.1085 9.48375 C16.6096 9.48474 17.0899 9.68413 17.4444 10.0383 C17.7988 10.3925 17.9986 10.8727 18 11.3737 C17.999 11.8752 17.7994 12.3558 17.4449 12.7104 C17.0905 13.065 16.6099 13.2648 16.1085 13.266 L11.3737 13.266 Z" fill="#4a154b"/></svg>
              </div>
            </div>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "133px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>Support ticket triage</p>
              <p style={{ alignSelf: "stretch", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>Tag, prioritise and route tickets; urgent ones ping on-call in Slack.</p>
            </div>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, borderRadius: "100px", background: "#f7f8fa", display: "flex", flexDirection: "row", padding: "1px 8px 1px 8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "52px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>Support</p>
              </div>
              <div style={{ flex: "1 1 0", minWidth: 0, height: "1px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }} />
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <Users size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#929292", display: "block" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "29px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>2.2k</p>
              </div>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <Clock size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#929292", display: "block" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "17px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>9h</p>
              </div>
            </div>
          </div>
          <div style={{ width: "276.75px", height: "192px", flexShrink: 0, borderRadius: "12px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ededed", display: "flex", flexDirection: "column", padding: "17px 17px 17px 17px", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "-6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "9px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ededed, 0px 0px 0px 2px #ffffff, 0px 1px 2px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <svg style={{ width: "18px", height: "18px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M9 0 C6.61305 2.16493e-15 4.32387 0.948211 2.63604 2.63604 C0.948211 4.32387 2.498e-15 6.61305 0 9 C3.16414e-15 11.3869 0.948211 13.6761 2.63604 15.364 C4.32387 17.0518 6.61305 18 9 18 C11.3869 18 13.6761 17.0518 15.364 15.364 C17.0518 13.6761 18 11.3869 18 9 C18 6.61305 17.0518 4.32387 15.364 2.63604 C13.6761 0.948211 11.3869 1.41553e-15 9 0 Z M9.4815 3.10013 C10.1981 3.10013 10.7787 3.68213 10.7787 4.40003 L10.7787 11.2001 L11.9787 11.2001 C13.1892 11.2001 14.1743 10.2133 14.1743 9.0003 C14.1743 7.78732 13.1891 6.80032 11.9786 6.80032 L11.4796 6.80032 L11.4796 5.50005 L11.9786 5.50005 C13.9078 5.50005 15.4719 7.06732 15.4719 9.0003 C15.4719 10.9333 13.9078 12.5002 11.9786 12.5002 L9.4815 12.5002 L9.4815 3.10013 Z M5.98777 5.49975 L8.4846 5.49975 L8.4846 14.8995 C7.76798 14.8995 7.1871 14.3176 7.1871 13.5996 L7.1871 6.79965 L5.98777 6.79965 C4.77682 6.79965 3.792 7.78665 3.792 8.9997 C3.792 10.2128 4.77682 11.1997 5.98777 11.1997 L6.48682 11.1997 L6.48682 12.4996 L5.98777 12.4996 C4.0584 12.4996 2.4945 10.9327 2.4945 8.9997 C2.4945 7.06688 4.0584 5.49975 5.98777 5.49975 Z" fill="#2ca01c"/></svg>
              </div>
              <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "9px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ededed, 0px 0px 0px 2px #ffffff, 0px 1px 2px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box", marginLeft: "-6px" }}>
                <svg style={{ width: "18px", height: "18px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 2.455 0)" d="M6.03375 9.40875 L3.47775 9.40875 L3.47775 7.977 L6.03525 7.977 L6.03525 9.4095 L6.03375 9.40875 Z M8.59125 0 L8.59125 4.5 L13.0912 4.5 L8.59125 0 Z M9.6135 7.977 L7.056 7.977 L7.056 9.4095 L9.6135 9.4095 L9.6135 7.977 Z M9.6135 10.4318 L7.056 10.4318 L7.056 11.8643 L9.6135 11.8643 L9.6135 10.4318 Z M13.0905 4.875 L13.0905 16.773 C13.0905 17.451 12.5415 18 11.8635 18 L1.227 18 C1.06587 18 0.906314 17.9683 0.757447 17.9066 C0.608581 17.8449 0.473318 17.7546 0.35938 17.6406 C0.129273 17.4105 0 17.0984 0 16.773 L0 1.227 C3.33067e-16 0.549 0.549 0 1.227 0 L8.2155 0 L8.2155 4.875 L13.0905 4.875 Z M10.6358 6.95475 L2.454 6.95475 L2.454 12.8865 L10.6365 12.8865 L10.6365 6.954 L10.6358 6.95475 Z M6.03375 10.4318 L3.47775 10.4318 L3.47775 11.8643 L6.03525 11.8643 L6.03525 10.4318 L6.03375 10.4318 Z" fill="#34a853"/></svg>
              </div>
            </div>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "133px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>Payroll reconciliation</p>
              <p style={{ alignSelf: "stretch", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>Match payroll runs against bank feeds and highlight mismatches.</p>
            </div>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, borderRadius: "100px", background: "#f7f8fa", display: "flex", flexDirection: "row", padding: "1px 8px 1px 8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "51px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>Finance</p>
              </div>
              <div style={{ flex: "1 1 0", minWidth: 0, height: "1px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }} />
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <Users size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#929292", display: "block" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "24px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>410</p>
              </div>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <Clock size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#929292", display: "block" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "17px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>5h</p>
              </div>
            </div>
          </div>
          <div style={{ width: "276.75px", height: "192px", flexShrink: 0, borderRadius: "12px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ededed", display: "flex", flexDirection: "column", padding: "17px 17px 17px 17px", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "-6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "9px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ededed, 0px 0px 0px 2px #ffffff, 0px 1px 2px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <svg style={{ width: "18px", height: "18px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 1.086 0)" d="M10.4167 17.9842 L15.8287 16.8135 C15.8287 16.8135 13.8757 3.60375 13.86 3.516 C13.8465 3.429 13.7745 3.372 13.7017 3.372 C13.629 3.372 12.255 3.27 12.255 3.27 C12.255 3.27 11.2988 2.3145 11.1758 2.21175 C11.142 2.184 11.1195 2.169 11.085 2.15625 L10.3995 17.9842 L10.4167 17.9842 Z M7.6965 8.47875 C7.6965 8.47875 7.089 8.16075 6.366 8.16075 C5.28075 8.16075 5.238 8.84025 5.238 9.0165 C5.238 9.9405 7.668 10.3027 7.668 12.4882 C7.668 14.2095 6.588 15.3082 5.1135 15.3082 C3.348 15.3082 2.4585 14.2095 2.4585 14.2095 L2.943 12.645 C2.943 12.645 3.87675 13.4445 4.653 13.4445 C5.15925 13.4445 5.38425 13.0357 5.38425 12.7455 C5.38425 11.5312 3.39375 11.475 3.39375 9.47625 C3.36825 7.7985 4.572 6.16425 7.014 6.16425 C7.95675 6.16425 8.42025 6.435 8.42025 6.435 L7.7115 8.47125 L7.6965 8.47875 Z M7.2915 0.6225 C7.3935 0.6225 7.49475 0.651 7.59525 0.72375 C6.85725 1.0725 6.04725 1.953 5.71425 3.71775 C5.22225 3.8775 4.7445 4.0215 4.2975 4.15125 C4.68675 2.8125 5.62725 0.63 7.2915 0.63 L7.2915 0.6225 Z M8.21775 2.83425 L8.21775 2.9355 C7.65225 3.1095 7.0305 3.2985 6.42225 3.4875 C6.77175 2.15475 7.422 1.50375 7.986 1.25925 C8.13075 1.635 8.21775 2.14125 8.21775 2.83425 Z M8.622 1.15875 C9.1425 1.21425 9.47775 1.809 9.69375 2.475 C9.432 2.5605 9.1425 2.64825 8.82525 2.7495 L8.82525 2.5605 C8.82525 1.9965 8.75325 1.53225 8.622 1.15725 L8.622 1.15875 Z M10.866 2.1255 C10.851 2.1255 10.821 2.14125 10.8075 2.14125 C10.794 2.14125 10.5907 2.1975 10.272 2.29875 C9.95475 1.374 9.39 0.52125 8.391 0.52125 L8.30475 0.52125 C8.01525 0.15675 7.66575 0 7.36275 0 C5.03325 0 3.92025 2.90775 3.5715 4.3845 C2.676 4.65825 2.02425 4.8615 1.9515 4.89 C1.44525 5.04975 1.431 5.064 1.3725 5.5425 C1.31625 5.889 0 16.0897 0 16.0897 L10.1707 18 L10.866 2.1255 Z" fill="#7ab55c"/></svg>
              </div>
              <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "9px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ededed, 0px 0px 0px 2px #ffffff, 0px 1px 2px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box", marginLeft: "-6px" }}>
                <svg style={{ width: "18px", height: "18px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 2.576 0)" d="M7.9065 6.8625 C6.2775 6.258 5.3895 5.793 5.3895 5.05575 C5.3895 4.4325 5.90175 4.077 6.81525 4.077 C8.4855 4.077 10.2015 4.7205 11.3827 5.30025 L12.0502 1.17975 C11.1135 0.73125 9.19725 0 6.54825 0 C4.67475 0 3.11625 0.4905 2.0025 1.404 C0.8445 2.36025 0.24225 3.744 0.24225 5.4135 C0.24225 8.44275 2.0925 9.7335 5.09925 10.8278 C7.038 11.5177 7.683 12.0083 7.683 12.765 C7.683 13.5 7.053 13.9237 5.9175 13.9237 C4.51125 13.9237 2.19375 13.233 0.675 12.342 L0 16.5082 C1.30575 17.2425 3.71325 18 6.21 18 C8.19075 18 9.84225 17.532 10.956 16.6403 C12.204 15.6615 12.8497 14.2133 12.8497 12.3412 C12.8497 9.24525 10.9567 7.953 7.90425 6.8625 L7.9065 6.8625 Z" fill="#635bff"/></svg>
              </div>
            </div>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "128px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>Shopify refund sync</p>
              <p style={{ alignSelf: "stretch", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>Mirror Shopify refunds into Stripe and notify finance on large ones.</p>
            </div>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, borderRadius: "100px", background: "#f7f8fa", display: "flex", flexDirection: "row", padding: "1px 8px 1px 8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "71px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>Operations</p>
              </div>
              <div style={{ flex: "1 1 0", minWidth: 0, height: "1px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }} />
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <Users size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#929292", display: "block" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "26px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>730</p>
              </div>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <Clock size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#929292", display: "block" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "17px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>3h</p>
              </div>
            </div>
          </div>
          <div style={{ width: "276.75px", height: "192px", flexShrink: 0, borderRadius: "12px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ededed", display: "flex", flexDirection: "column", padding: "17px 17px 17px 17px", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "-6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "9px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ededed, 0px 0px 0px 2px #ffffff, 0px 1px 2px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <svg style={{ width: "18px", height: "18px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M8.67825 8.63475 L0 8.63475 C0.000294022 9.14937 0.102085 9.65889 0.299545 10.1341 C0.497006 10.6094 0.786258 11.041 1.15074 11.4043 C1.51523 11.7676 1.94779 12.0554 2.42366 12.2513 C2.89954 12.4472 3.40938 12.5474 3.924 12.546 L5.5215 12.546 L5.5215 14.0887 C5.5215 15.1258 5.93337 16.1204 6.66655 16.8539 C7.39973 17.5874 8.39418 17.9996 9.43125 18 L9.43125 9.3885 C9.43125 9.18859 9.35184 8.99687 9.21048 8.85552 C9.06913 8.71416 8.87741 8.63475 8.6775 8.63475 L8.67825 8.63475 Z M12.9705 4.31775 L4.302 4.31775 C4.3022 5.35495 4.71436 6.3496 5.44784 7.08294 C6.18132 7.81628 7.17605 8.22825 8.21325 8.22825 L9.81 8.22825 L9.81 9.77175 C9.81079 10.8088 10.2232 11.8031 10.9565 12.5363 C11.6899 13.2695 12.6842 13.6817 13.7213 13.6823 L13.7213 5.0685 C13.7213 4.86939 13.6422 4.67843 13.5014 4.53764 C13.3606 4.39685 13.1696 4.31775 12.9705 4.31775 Z M17.2598 0 L8.59125 0 C8.59125 1.03733 9.00333 2.03217 9.73683 2.76567 C10.4703 3.49917 11.4652 3.91125 12.5025 3.91125 L14.0992 3.91125 L14.0992 5.454 C14.1 6.48899 14.511 7.48148 15.2422 8.21403 C15.9733 8.94658 16.965 9.35947 18 9.36225 L18 0.75375 C18.0008 0.555926 17.9235 0.365777 17.7849 0.224635 C17.6463 0.0834924 17.4576 0.00276514 17.2598 0 Z" fill="#0052cc"/></svg>
              </div>
              <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "9px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ededed, 0px 0px 0px 2px #ffffff, 0px 1px 2px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box", marginLeft: "-6px" }}>
                <svg style={{ width: "18px", height: "18px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M3.7815 11.3737 C3.78051 11.8749 3.58114 12.3553 3.22698 12.7099 C2.87281 13.0645 2.39266 13.2644 1.8915 13.266 C1.39008 13.2648 0.909545 13.065 0.555056 12.7104 C0.200567 12.3558 0.000990328 11.8752 1.249e-16 11.3737 C0.0013871 10.8727 0.201163 10.3925 0.55563 10.0383 C0.910098 9.68413 1.39041 9.48474 1.8915 9.48375 L3.7815 9.48375 L3.7815 11.3737 Z M4.73475 11.3737 C4.73614 10.8728 4.93581 10.3927 5.29011 10.0386 C5.64442 9.68442 6.12454 9.48494 6.6255 9.48375 C7.12646 9.48494 7.60658 9.68442 7.96089 10.0386 C8.31519 10.3927 8.51486 10.8728 8.51625 11.3737 L8.51625 16.1085 C8.51506 16.6097 8.3155 17.09 7.9612 17.4444 C7.60689 17.7989 7.12666 17.9986 6.6255 18 C6.12434 17.9986 5.64411 17.7989 5.2898 17.4444 C4.9355 17.09 4.73594 16.6097 4.73475 16.1085 L4.73475 11.3737 Z M6.6255 3.7815 C6.1246 3.78012 5.6446 3.58057 5.29033 3.22645 C4.93607 2.87232 4.73633 2.3924 4.73475 1.8915 C4.73594 1.39034 4.9355 0.910031 5.2898 0.555584 C5.64411 0.201138 6.12434 0.00138631 6.6255 0 C7.12666 0.00138631 7.60689 0.201138 7.9612 0.555584 C8.3155 0.910031 8.51506 1.39034 8.51625 1.8915 L8.51625 3.7815 L6.6255 3.7815 Z M6.6255 4.73475 C7.12653 4.73614 7.60665 4.93578 7.96093 5.29007 C8.31522 5.64435 8.51486 6.12447 8.51625 6.6255 C8.51486 7.12653 8.31522 7.60665 7.96093 7.96093 C7.60665 8.31522 7.12653 8.51486 6.6255 8.51625 L1.8915 8.51625 C1.39034 8.51506 0.910031 8.3155 0.555584 7.9612 C0.201138 7.60689 0.00138631 7.12666 0 6.6255 C0.00138631 6.12434 0.201138 5.64411 0.555584 5.2898 C0.910031 4.9355 1.39034 4.73594 1.8915 4.73475 L6.6255 4.73475 Z M14.217 6.6255 C14.2184 6.12434 14.4181 5.64411 14.7726 5.2898 C15.127 4.9355 15.6073 4.73594 16.1085 4.73475 C16.6097 4.73594 17.09 4.9355 17.4444 5.2898 C17.7989 5.64411 17.9986 6.12434 18 6.6255 C17.9986 7.12666 17.7989 7.60689 17.4444 7.9612 C17.09 8.3155 16.6097 8.51506 16.1085 8.51625 L14.217 8.51625 L14.217 6.6255 Z M13.266 6.6255 C13.2646 7.12679 13.0648 7.60713 12.7101 7.96146 C12.3555 8.31579 11.875 8.51526 11.3737 8.51625 C10.8728 8.51486 10.3927 8.31519 10.0386 7.96089 C9.68442 7.60658 9.48494 7.12646 9.48375 6.6255 L9.48375 1.8915 C9.48474 1.39041 9.68413 0.910098 10.0383 0.55563 C10.3925 0.201163 10.8727 0.0013871 11.3737 3.747e-16 C11.8752 0.000990328 12.3558 0.200567 12.7104 0.555056 C13.065 0.909545 13.2648 1.39008 13.266 1.8915 L13.266 6.6255 Z M11.3737 14.217 C11.8752 14.218 12.3558 14.4176 12.7104 14.7721 C13.065 15.1265 13.2648 15.6071 13.266 16.1085 C13.2648 16.6099 13.065 17.0905 12.7104 17.4449 C12.3558 17.7994 11.8752 17.999 11.3737 18 C10.8727 17.9986 10.3925 17.7988 10.0383 17.4444 C9.68413 17.0899 9.48474 16.6096 9.48375 16.1085 L9.48375 14.217 L11.3737 14.217 Z M11.3737 13.266 C10.8725 13.2646 10.3923 13.0647 10.0381 12.7101 C9.68385 12.3555 9.48454 11.875 9.48375 11.3737 C9.48494 10.8729 9.68444 10.3928 10.0386 10.0386 C10.3928 9.68444 10.8729 9.48494 11.3737 9.48375 L16.1085 9.48375 C16.6096 9.48474 17.0899 9.68413 17.4444 10.0383 C17.7988 10.3925 17.9986 10.8727 18 11.3737 C17.999 11.8752 17.7994 12.3558 17.4449 12.7104 C17.0905 13.065 16.6099 13.2648 16.1085 13.266 L11.3737 13.266 Z" fill="#4a154b"/></svg>
              </div>
            </div>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "156px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>Bug intake from support</p>
              <p style={{ alignSelf: "stretch", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>Turn escalated tickets into Jira bugs with logs and customer impact.</p>
            </div>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, borderRadius: "100px", background: "#f7f8fa", display: "flex", flexDirection: "row", padding: "1px 8px 1px 8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "11px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>IT</p>
              </div>
              <div style={{ flex: "1 1 0", minWidth: 0, height: "1px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }} />
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <Users size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#929292", display: "block" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "27px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>980</p>
              </div>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <Clock size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#929292", display: "block" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "17px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>4h</p>
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
