"use client";
// Workflows page (axon, Templates) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist, Geist Mono. Icons: Ingot Icons.
import { useEffect, useRef } from "react";
import { AdjustmentsHorizontal, AlertCircle, AlertTriangle, Bell, Calendar, ChartLine, ChevronDown, ChevronLeft, ChevronRight, CircleCheck, Clock, CreditCard, Database, Dots, File, FolderSearch, GitMerge, LayoutDashboard, LayoutGrid, List, PlayerPause, PlugConnected, Plus, Search, Settings, SortDescending, Upload, Users } from "ingotui-icons/react/stroke-rounded";
import { Category as CategorySolid } from "ingotui-icons/react/solid";

export function WorkflowsPage() {
  const fuRef = useRef<any>(null);
  useEffect(() => fuInteract(fuRef.current), []);
  return (
    <div ref={fuRef} style={{ width: "1440px", height: "927px", background: "#ffffff", overflow: "hidden", position: "relative" }}>
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
              <div style={{ width: "212px", height: "32px", flexShrink: 0, borderRadius: "6px", background: "#ffffff", boxShadow: "0px 1.4px 1px 0px rgba(0, 0, 0, 0.06), 0px 0px 1px 0px rgba(0, 0, 0, 0.25)", display: "flex", flexDirection: "row", padding: "8px 10px 8px 10px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <GitMerge size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#1b8ce8", display: "block" }} />
                <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#000000", lineHeight: "20px" }}>Workflows</p>
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
            <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "68px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#666d80", lineHeight: "20px" }}>Workflows</p>
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
      <div style={{ position: "absolute", left: "265px", top: "92px", width: "1155px", height: "800px", display: "flex", flexDirection: "column", gap: "16px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "16px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "77px", fontFamily: "'Geist'", fontSize: "16px", fontWeight: 400, color: "#15171c", lineHeight: "24px", letterSpacing: "-0.1px" }}>Workflows</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "339px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>284 workflows · 212 live · saved 412 hours this month</p>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div data-fu="btn" style={{ flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e8e8e8", display: "flex", flexDirection: "row", padding: "7px 13px 7px 13px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <Upload size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "43px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#686765", lineHeight: "20px" }}>Import</p>
            </div>
            <div style={{ flexShrink: 0, borderRadius: "10px", background: "linear-gradient(0deg, #1b8ce8 34.7%, #4eb0ff 93.7%)", boxShadow: "0px 8px 9px 0px rgba(0, 0, 0, 0.12), inset 0.6px 0.6px 0px 0px rgba(255, 255, 255, 0.25), inset -0.6px 0.6px 0px 0px rgba(255, 255, 255, 0.25)", display: "flex", flexDirection: "row", padding: "6px 12px 6px 12px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <Plus size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#ffffff", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "106px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#ffffff", lineHeight: "20px" }}>Create workflow</p>
            </div>
          </div>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, borderRadius: "9px", background: "#f5f5f5", display: "flex", flexDirection: "row", padding: "3px 3px 3px 3px", gap: "2px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, borderRadius: "6px", background: "#ffffff", boxShadow: "0px 1.4px 1px 0px rgba(0, 0, 0, 0.06), 0px 0px 1px 0px rgba(0, 0, 0, 0.25)", display: "flex", flexDirection: "row", padding: "4px 10px 4px 10px", gap: "6px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "17px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>All</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "26px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#929292", lineHeight: "20px" }}>284</p>
            </div>
            <div style={{ flexShrink: 0, borderRadius: "6px", display: "flex", flexDirection: "row", padding: "4px 10px 4px 10px", gap: "6px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "26px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#697386", lineHeight: "20px" }}>Live</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "23px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#b3b3b3", lineHeight: "20px" }}>212</p>
            </div>
            <div style={{ flexShrink: 0, borderRadius: "6px", display: "flex", flexDirection: "row", padding: "4px 10px 4px 10px", gap: "6px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "33px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#697386", lineHeight: "20px" }}>Draft</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "14px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#b3b3b3", lineHeight: "20px" }}>41</p>
            </div>
            <div style={{ flexShrink: 0, borderRadius: "6px", display: "flex", flexDirection: "row", padding: "4px 10px 4px 10px", gap: "6px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "48px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#697386", lineHeight: "20px" }}>Paused</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "15px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#b3b3b3", lineHeight: "20px" }}>19</p>
            </div>
            <div style={{ flexShrink: 0, borderRadius: "6px", display: "flex", flexDirection: "row", padding: "4px 10px 4px 10px", gap: "6px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "56px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#697386", lineHeight: "20px" }}>Archived</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "14px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#b3b3b3", lineHeight: "20px" }}>12</p>
            </div>
          </div>
          <div style={{ flex: "1 1 0", minWidth: 0, height: "1px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }} />
          <div data-fu="field" style={{ width: "240px", height: "32px", flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e8e8e8", display: "flex", flexDirection: "row", padding: "7px 7px 7px 11px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <Search size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#979797", display: "block" }} />
            <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#979797", lineHeight: "20px" }}>Search workflows</p>
            <div style={{ height: "20px", flexShrink: 0, borderRadius: "5px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e8e8e8, 0px 1px 2px 0px rgba(79, 79, 79, 0.12)", display: "flex", flexDirection: "row", padding: "1px 6px 1px 6px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "8px", fontFamily: "'Geist Mono'", fontSize: "12px", fontWeight: 400, color: "#697386", lineHeight: "18px" }}>/</p>
            </div>
          </div>
          <div style={{ flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e8e8e8", display: "flex", flexDirection: "row", padding: "7px 13px 7px 13px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <AdjustmentsHorizontal size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "33px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#686765", lineHeight: "20px" }}>Filter</p>
          </div>
          <div style={{ flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e8e8e8", display: "flex", flexDirection: "row", padding: "7px 13px 7px 13px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <SortDescending size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "72px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#686765", lineHeight: "20px" }}>Last edited</p>
            <ChevronDown size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
          </div>
          <div style={{ flexShrink: 0, borderRadius: "9px", background: "#f5f5f5", display: "flex", flexDirection: "row", padding: "3px 3px 3px 3px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, borderRadius: "6px", background: "#ffffff", boxShadow: "0px 1.4px 1px 0px rgba(0, 0, 0, 0.06), 0px 0px 1px 0px rgba(0, 0, 0, 0.25)", display: "flex", flexDirection: "row", padding: "5px 5px 5px 5px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <List size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#15171c", display: "block" }} />
            </div>
            <div style={{ flexShrink: 0, borderRadius: "6px", display: "flex", flexDirection: "row", padding: "5px 5px 5px 5px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <LayoutGrid size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#929292", display: "block" }} />
            </div>
          </div>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, borderRadius: "12px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ededed", overflow: "hidden", display: "flex", flexDirection: "column", padding: "1px 1px 1px 1px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", height: "36px", flexShrink: 0, background: "#f9f9f9", boxShadow: "inset 0 1px 0 0 #e9e9e9, inset 0 -1px 0 0 #e9e9e9", display: "flex", flexDirection: "row", padding: "1px 6px 1px 6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "44px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "16px", height: "16px", flexShrink: 0, borderRadius: "4px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #dfe0e5, 0px 1px 2px 0px rgba(79, 79, 79, 0.12)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }} />
            </div>
            <div style={{ flex: "1 1 0", minWidth: 0, alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "61px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>Workflow</p>
            </div>
            <div style={{ width: "120px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "42px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>Status</p>
            </div>
            <div style={{ width: "150px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "60px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>Runs (7d)</p>
            </div>
            <div style={{ width: "96px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "55px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>Success</p>
            </div>
            <div style={{ width: "170px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "43px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>Owner</p>
            </div>
            <div style={{ width: "130px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "72px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>Last edited</p>
            </div>
            <div style={{ width: "52px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, height: "20px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "0px" }}></p>
            </div>
          </div>
          <div style={{ alignSelf: "stretch", height: "60px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #e9e9e9", display: "flex", flexDirection: "row", padding: "0px 6px 1px 6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "44px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "16px", height: "16px", flexShrink: 0, borderRadius: "4px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #dfe0e5, 0px 1px 2px 0px rgba(79, 79, 79, 0.12)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }} />
            </div>
            <div style={{ flex: "1 1 0", minWidth: 0, alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "9px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ededed, 0px 1px 2px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <svg style={{ width: "18px", height: "18px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 2.248)" d="M18 1.84465 L18 12.2764 C18 12.9544 17.451 13.5034 16.773 13.5034 L13.9088 13.5034 L13.9088 6.5494 L9 10.2319 L4.09125 6.5494 L4.09125 13.5041 L1.227 13.5041 C1.06581 13.5041 0.90619 13.4724 0.757274 13.4107 C0.608359 13.349 0.473062 13.2585 0.359115 13.1445 C0.245168 13.0305 0.154803 12.8951 0.0931847 12.7462 C0.0315663 12.5972 -9.83008e-05 12.4376 2.29239e-07 12.2764 L2.29239e-07 1.84465 C2.29239e-07 0.327398 1.73175 -0.538852 2.94525 0.371648 L4.09125 1.2319 L9 4.9129 L13.9088 1.2304 L15.0548 0.371648 C16.2675 -0.538102 18 0.327398 18 1.84465 Z" fill="#ea4335"/></svg>
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "88px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>Invoice Triage</p>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "229px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>Email received · finance@acme.com</p>
                </div>
              </div>
            </div>
            <div style={{ width: "120px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, borderRadius: "4.58px", background: "#f6fffb", display: "flex", flexDirection: "row", padding: "2px 8px 2px 8px", gap: "3px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <CircleCheck size={12} strokeWidth={3} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#17a673", display: "block" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "26px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#17a673", lineHeight: "20px" }}>Live</p>
              </div>
            </div>
            <div style={{ width: "150px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "48px", height: "22px", flexShrink: 0, position: "relative" }}>
                  <div data-fu="bar" style={{ position: "absolute", left: "1.4px", top: "9.76px", width: "4px", height: "9.24px", borderRadius: "2px 2px 0px 0px", background: "#1b8ce8" }} />
                  <div data-fu="bar" style={{ position: "absolute", left: "8.3px", top: "8.16px", width: "4px", height: "10.84px", borderRadius: "2px 2px 0px 0px", background: "#1b8ce8" }} />
                  <div data-fu="bar" style={{ position: "absolute", left: "15.1px", top: "8.69px", width: "4px", height: "10.31px", borderRadius: "2px 2px 0px 0px", background: "#1b8ce8" }} />
                  <div data-fu="bar" style={{ position: "absolute", left: "22px", top: "6.56px", width: "4px", height: "12.44px", borderRadius: "2px 2px 0px 0px", background: "#1b8ce8" }} />
                  <div data-fu="bar" style={{ position: "absolute", left: "28.9px", top: "7.27px", width: "4px", height: "11.73px", borderRadius: "2px 2px 0px 0px", background: "#1b8ce8" }} />
                  <div data-fu="bar" style={{ position: "absolute", left: "35.7px", top: "5.84px", width: "4px", height: "13.16px", borderRadius: "2px 2px 0px 0px", background: "#1b8ce8" }} />
                  <div data-fu="bar" style={{ position: "absolute", left: "42.6px", top: "4.6px", width: "4px", height: "14.4px", borderRadius: "2px 2px 0px 0px", background: "#1b8ce8" }} />
                </div>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "34px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>4,812</p>
              </div>
            </div>
            <div style={{ width: "96px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "40px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#17a673", lineHeight: "20px" }}>98.2%</p>
            </div>
            <div style={{ width: "170px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "24px", height: "24px", flexShrink: 0, borderRadius: "12px", background: "url('https://ingotui.com/library-img/232efcbc3e38653b836fdc20a462210bf2f00cbb.png') center / cover no-repeat", boxShadow: "0 0 0 1.5px #ffffff", display: "flex", flexDirection: "row", padding: "1.5px 1.5px 1.5px 1.5px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "65px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>Chara Lee</p>
              </div>
            </div>
            <div style={{ width: "130px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "76px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>v14 · 2h ago</p>
            </div>
            <div style={{ width: "52px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "28px", height: "28px", flexShrink: 0, borderRadius: "7px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <Dots size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
              </div>
            </div>
          </div>
          <div style={{ alignSelf: "stretch", height: "60px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #e9e9e9", display: "flex", flexDirection: "row", padding: "0px 6px 1px 6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "44px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "16px", height: "16px", flexShrink: 0, borderRadius: "4px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #dfe0e5, 0px 1px 2px 0px rgba(79, 79, 79, 0.12)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }} />
            </div>
            <div style={{ flex: "1 1 0", minWidth: 0, alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "9px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ededed, 0px 1px 2px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <svg style={{ width: "18px", height: "18px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 2.178)" d="M9.6855 0 L9.6855 10.0395 L18 0.000749946 L9.6855 0 Z M0 0.00149989 C0 2.2965 1.86225 4.1595 4.15725 4.1595 C6.45225 4.1595 8.31375 2.2965 8.3145 0.00149989 L0 0.00149989 Z M8.3145 3.60675 L0 13.644 L8.3145 13.644 L8.3145 3.60675 Z M13.842 9.48675 C11.5447 9.48675 9.6855 11.3468 9.6855 13.644 L18 13.644 C18 11.349 16.14 9.48675 13.8428 9.48675 L13.842 9.48675 Z" fill="#03363d"/></svg>
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "121px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>Customer Refunds</p>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "144px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>Ticket tagged “refund”</p>
                </div>
              </div>
            </div>
            <div style={{ width: "120px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, borderRadius: "4.58px", background: "#fffbf0", display: "flex", flexDirection: "row", padding: "2px 8px 2px 8px", gap: "3px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <Clock size={12} strokeWidth={3} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#d99a00", display: "block" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "63px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#d99a00", lineHeight: "20px" }}>Degraded</p>
              </div>
            </div>
            <div style={{ width: "150px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "48px", height: "22px", flexShrink: 0, position: "relative" }}>
                  <div data-fu="bar" style={{ position: "absolute", left: "1.4px", top: "13.67px", width: "4px", height: "5.33px", borderRadius: "2px 2px 0px 0px", background: "#1b8ce8" }} />
                  <div data-fu="bar" style={{ position: "absolute", left: "8.3px", top: "14.02px", width: "4px", height: "4.98px", borderRadius: "2px 2px 0px 0px", background: "#1b8ce8" }} />
                  <div data-fu="bar" style={{ position: "absolute", left: "15.1px", top: "12.96px", width: "4px", height: "6.04px", borderRadius: "2px 2px 0px 0px", background: "#1b8ce8" }} />
                  <div data-fu="bar" style={{ position: "absolute", left: "22px", top: "14.56px", width: "4px", height: "4.44px", borderRadius: "2px 2px 0px 0px", background: "#1b8ce8" }} />
                  <div data-fu="bar" style={{ position: "absolute", left: "28.9px", top: "15.09px", width: "4px", height: "3.91px", borderRadius: "2px 2px 0px 0px", background: "#1b8ce8" }} />
                  <div data-fu="bar" style={{ position: "absolute", left: "35.7px", top: "13.49px", width: "4px", height: "5.51px", borderRadius: "2px 2px 0px 0px", background: "#1b8ce8" }} />
                  <div data-fu="bar" style={{ position: "absolute", left: "42.6px", top: "14.38px", width: "4px", height: "4.62px", borderRadius: "2px 2px 0px 0px", background: "#1b8ce8" }} />
                </div>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "35px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>1,204</p>
              </div>
            </div>
            <div style={{ width: "96px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "36px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#d99a00", lineHeight: "20px" }}>93.1%</p>
            </div>
            <div style={{ width: "170px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "24px", height: "24px", flexShrink: 0, borderRadius: "12px", background: "#eff8ff", boxShadow: "0 0 0 1.5px #ffffff", display: "flex", flexDirection: "row", padding: "1.5px 1.5px 1.5px 1.5px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "19px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 500, color: "#1b8ce8", lineHeight: "12px" }}>MW</p>
                </div>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "88px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>Marcus Webb</p>
              </div>
            </div>
            <div style={{ width: "130px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "67px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>v9 · 1d ago</p>
            </div>
            <div style={{ width: "52px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "28px", height: "28px", flexShrink: 0, borderRadius: "7px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <Dots size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
              </div>
            </div>
          </div>
          <div style={{ alignSelf: "stretch", height: "60px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #e9e9e9", display: "flex", flexDirection: "row", padding: "0px 6px 1px 6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "44px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "16px", height: "16px", flexShrink: 0, borderRadius: "4px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #dfe0e5, 0px 1px 2px 0px rgba(79, 79, 79, 0.12)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }} />
            </div>
            <div style={{ flex: "1 1 0", minWidth: 0, alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "9px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ededed, 0px 1px 2px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <svg style={{ width: "18px", height: "18px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0.411 0)" d="M13.2116 5.94748 L13.2116 3.81298 C13.4941 3.6809 13.7334 3.47141 13.9016 3.20882 C14.0698 2.94623 14.16 2.64132 14.1619 2.32948 L14.1619 2.27923 C14.1607 1.84331 13.9871 1.42558 13.6789 1.11726 C13.3707 0.80895 12.9531 0.635116 12.5171 0.633731 L12.4669 0.633731 C12.0311 0.635115 11.6136 0.808846 11.3054 1.117 C10.9973 1.42515 10.8235 1.84269 10.8221 2.27848 L10.8221 2.32873 C10.8235 2.63876 10.9124 2.9421 11.0785 3.20387 C11.2446 3.46564 11.4812 3.67521 11.7611 3.80848 L11.7709 3.81298 L11.7709 5.95198 C10.9548 6.07667 10.1864 6.41571 9.54415 6.93448 L9.55315 6.92698 L3.68215 2.35573 C3.79393 1.93697 3.757 1.49241 3.57766 1.09784 C3.39831 0.703264 3.08766 0.383112 2.69867 0.191965 C2.30968 0.000818454 1.86643 -0.0494873 1.4445 0.0496249 C1.02256 0.148737 0.64807 0.391131 0.384866 0.735478 C0.121662 1.07983 -0.0139553 1.50481 0.00113635 1.93796 C0.016228 2.37112 0.181094 2.78563 0.467626 3.11082 C0.754158 3.43602 1.14461 3.65176 1.57242 3.72126 C2.00023 3.79077 2.4389 3.70974 2.81365 3.49198 L2.80465 3.49648 L8.5774 7.98973 C8.06708 8.75484 7.79607 9.65455 7.7989 10.5742 C7.7989 11.5815 8.11765 12.5152 8.65915 13.2795 L8.6494 13.2645 L6.8929 15.0217 C6.75228 14.9763 6.60565 14.9523 6.4579 14.9505 L6.4564 14.9505 C6.15483 14.9505 5.86004 15.0399 5.60929 15.2074 C5.35855 15.375 5.16312 15.6131 5.04771 15.8917 C4.93231 16.1703 4.90211 16.4769 4.96095 16.7727 C5.01978 17.0685 5.165 17.3402 5.37824 17.5534 C5.59148 17.7666 5.86316 17.9118 6.15894 17.9707 C6.45471 18.0295 6.76128 17.9993 7.0399 17.8839 C7.31851 17.7685 7.55664 17.5731 7.72418 17.3223 C7.89172 17.0716 7.98115 16.7768 7.98115 16.4752 C7.97912 16.3235 7.95382 16.173 7.90615 16.029 L7.9099 16.0395 L9.64765 14.3017 C10.2141 14.7339 10.8716 15.0312 11.5702 15.1711 C12.2688 15.3109 12.99 15.2896 13.6792 15.1087 C14.3683 14.9279 15.0071 14.5922 15.547 14.1274 C16.0869 13.6625 16.5136 13.0806 16.7948 12.4259 C17.0759 11.7713 17.2041 11.0612 17.1695 10.3496 C17.1349 9.63794 16.9385 8.94358 16.5952 8.31929 C16.2519 7.69501 15.7707 7.15724 15.1883 6.74689 C14.6059 6.33654 13.9376 6.06442 13.2341 5.95123 L13.2071 5.94748 L13.2116 5.94748 Z M12.4886 12.981 C12.0134 12.9796 11.5492 12.8375 11.1547 12.5725 C10.7602 12.3075 10.453 11.9316 10.2721 11.4921 C10.0911 11.0527 10.0444 10.5695 10.1379 10.1035 C10.2313 9.63758 10.4608 9.20977 10.7973 8.87414 C11.1337 8.5385 11.5621 8.31011 12.0283 8.21779 C12.4945 8.12547 12.9776 8.17338 13.4166 8.35545 C13.8556 8.53752 14.2308 8.8456 14.4948 9.24077 C14.7588 9.63594 14.8997 10.1005 14.8999 10.5757 L14.8999 10.5772 C14.9 10.8931 14.8379 11.2059 14.717 11.4978 C14.5962 11.7897 14.419 12.0549 14.1956 12.2782 C13.9723 12.5016 13.7071 12.6788 13.4152 12.7996 C13.1234 12.9204 12.8105 12.9826 12.4946 12.9825 L12.4886 12.981 Z" fill="#ff7a59"/></svg>
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "116px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>Lead Qualification</p>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "134px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>New contact created</p>
                </div>
              </div>
            </div>
            <div style={{ width: "120px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, borderRadius: "4.58px", background: "#f6fffb", display: "flex", flexDirection: "row", padding: "2px 8px 2px 8px", gap: "3px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <CircleCheck size={12} strokeWidth={3} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#17a673", display: "block" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "26px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#17a673", lineHeight: "20px" }}>Live</p>
              </div>
            </div>
            <div style={{ width: "150px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "48px", height: "22px", flexShrink: 0, position: "relative" }}>
                  <div data-fu="bar" style={{ position: "absolute", left: "1.4px", top: "11.89px", width: "4px", height: "7.11px", borderRadius: "2px 2px 0px 0px", background: "#1b8ce8" }} />
                  <div data-fu="bar" style={{ position: "absolute", left: "8.3px", top: "9.76px", width: "4px", height: "9.24px", borderRadius: "2px 2px 0px 0px", background: "#1b8ce8" }} />
                  <div data-fu="bar" style={{ position: "absolute", left: "15.1px", top: "10.64px", width: "4px", height: "8.36px", borderRadius: "2px 2px 0px 0px", background: "#1b8ce8" }} />
                  <div data-fu="bar" style={{ position: "absolute", left: "22px", top: "8.16px", width: "4px", height: "10.84px", borderRadius: "2px 2px 0px 0px", background: "#1b8ce8" }} />
                  <div data-fu="bar" style={{ position: "absolute", left: "28.9px", top: "8.69px", width: "4px", height: "10.31px", borderRadius: "2px 2px 0px 0px", background: "#1b8ce8" }} />
                  <div data-fu="bar" style={{ position: "absolute", left: "35.7px", top: "7.27px", width: "4px", height: "11.73px", borderRadius: "2px 2px 0px 0px", background: "#1b8ce8" }} />
                  <div data-fu="bar" style={{ position: "absolute", left: "42.6px", top: "6.2px", width: "4px", height: "12.8px", borderRadius: "2px 2px 0px 0px", background: "#1b8ce8" }} />
                </div>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "39px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>3,390</p>
              </div>
            </div>
            <div style={{ width: "96px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "40px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#17a673", lineHeight: "20px" }}>96.8%</p>
            </div>
            <div style={{ width: "170px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "24px", height: "24px", flexShrink: 0, borderRadius: "12px", background: "#f4fcf7", boxShadow: "0 0 0 1.5px #ffffff", display: "flex", flexDirection: "row", padding: "1.5px 1.5px 1.5px 1.5px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "14px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 500, color: "#17a673", lineHeight: "12px" }}>PN</p>
                </div>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "63px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>Priya Nair</p>
              </div>
            </div>
            <div style={{ width: "130px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "79px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>v22 · 3h ago</p>
            </div>
            <div style={{ width: "52px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "28px", height: "28px", flexShrink: 0, borderRadius: "7px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <Dots size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
              </div>
            </div>
          </div>
          <div style={{ alignSelf: "stretch", height: "60px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #e9e9e9", display: "flex", flexDirection: "row", padding: "0px 6px 1px 6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "44px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "16px", height: "16px", flexShrink: 0, borderRadius: "4px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #dfe0e5, 0px 1px 2px 0px rgba(79, 79, 79, 0.12)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }} />
            </div>
            <div style={{ flex: "1 1 0", minWidth: 0, alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "9px", background: "#eff8ff", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <Calendar size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#1b8ce8", display: "block" }} />
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "91px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>Revenue Sync</p>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "138px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>Schedule · every hour</p>
                </div>
              </div>
            </div>
            <div style={{ width: "120px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, borderRadius: "4.58px", background: "#f6fffb", display: "flex", flexDirection: "row", padding: "2px 8px 2px 8px", gap: "3px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <CircleCheck size={12} strokeWidth={3} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#17a673", display: "block" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "26px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#17a673", lineHeight: "20px" }}>Live</p>
              </div>
            </div>
            <div style={{ width: "150px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "48px", height: "22px", flexShrink: 0, position: "relative" }}>
                  <div style={{ position: "absolute", left: "1.4px", top: "14.73px", width: "4px", height: "4.27px", borderRadius: "2px 2px 0px 0px", background: "#1b8ce8" }} />
                  <div style={{ position: "absolute", left: "8.3px", top: "14.73px", width: "4px", height: "4.27px", borderRadius: "2px 2px 0px 0px", background: "#1b8ce8" }} />
                  <div style={{ position: "absolute", left: "15.1px", top: "14.73px", width: "4px", height: "4.27px", borderRadius: "2px 2px 0px 0px", background: "#1b8ce8" }} />
                  <div style={{ position: "absolute", left: "22px", top: "14.73px", width: "4px", height: "4.27px", borderRadius: "2px 2px 0px 0px", background: "#1b8ce8" }} />
                  <div style={{ position: "absolute", left: "28.9px", top: "14.73px", width: "4px", height: "4.27px", borderRadius: "2px 2px 0px 0px", background: "#1b8ce8" }} />
                  <div style={{ position: "absolute", left: "35.7px", top: "14.73px", width: "4px", height: "4.27px", borderRadius: "2px 2px 0px 0px", background: "#1b8ce8" }} />
                  <div style={{ position: "absolute", left: "42.6px", top: "14.73px", width: "4px", height: "4.27px", borderRadius: "2px 2px 0px 0px", background: "#1b8ce8" }} />
                </div>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "23px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>168</p>
              </div>
            </div>
            <div style={{ width: "96px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "36px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#17a673", lineHeight: "20px" }}>100%</p>
            </div>
            <div style={{ width: "170px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "24px", height: "24px", flexShrink: 0, borderRadius: "12px", background: "#fef5f0", boxShadow: "0 0 0 1.5px #ffffff", display: "flex", flexDirection: "row", padding: "1.5px 1.5px 1.5px 1.5px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "14px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 500, color: "#ff5601", lineHeight: "12px" }}>DA</p>
                </div>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "88px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>Diego Alvarez</p>
              </div>
            </div>
            <div style={{ width: "130px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "71px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>v6 · 5d ago</p>
            </div>
            <div style={{ width: "52px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "28px", height: "28px", flexShrink: 0, borderRadius: "7px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <Dots size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
              </div>
            </div>
          </div>
          <div style={{ alignSelf: "stretch", height: "60px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #e9e9e9", display: "flex", flexDirection: "row", padding: "0px 6px 1px 6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "44px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "16px", height: "16px", flexShrink: 0, borderRadius: "4px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #dfe0e5, 0px 1px 2px 0px rgba(79, 79, 79, 0.12)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }} />
            </div>
            <div style={{ flex: "1 1 0", minWidth: 0, alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "9px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ededed, 0px 1px 2px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <svg style={{ width: "18px", height: "18px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 2.455 0)" d="M6.03375 9.40875 L3.47775 9.40875 L3.47775 7.977 L6.03525 7.977 L6.03525 9.4095 L6.03375 9.40875 Z M8.59125 0 L8.59125 4.5 L13.0912 4.5 L8.59125 0 Z M9.6135 7.977 L7.056 7.977 L7.056 9.4095 L9.6135 9.4095 L9.6135 7.977 Z M9.6135 10.4318 L7.056 10.4318 L7.056 11.8643 L9.6135 11.8643 L9.6135 10.4318 Z M13.0905 4.875 L13.0905 16.773 C13.0905 17.451 12.5415 18 11.8635 18 L1.227 18 C1.06587 18 0.906314 17.9683 0.757447 17.9066 C0.608581 17.8449 0.473318 17.7546 0.35938 17.6406 C0.129273 17.4105 0 17.0984 0 16.773 L0 1.227 C3.33067e-16 0.549 0.549 0 1.227 0 L8.2155 0 L8.2155 4.875 L13.0905 4.875 Z M10.6358 6.95475 L2.454 6.95475 L2.454 12.8865 L10.6365 12.8865 L10.6365 6.954 L10.6358 6.95475 Z M6.03375 10.4318 L3.47775 10.4318 L3.47775 11.8643 L6.03525 11.8643 L6.03525 10.4318 L6.03375 10.4318 Z" fill="#34a853"/></svg>
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "125px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>Vendor Onboarding</p>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "156px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>Row added to “Vendors”</p>
                </div>
              </div>
            </div>
            <div style={{ width: "120px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, borderRadius: "4.58px", background: "#f7f8fa", display: "flex", flexDirection: "row", padding: "2px 8px 2px 8px", gap: "3px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <PlayerPause size={12} strokeWidth={3} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#697386", display: "block" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "33px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#697386", lineHeight: "20px" }}>Draft</p>
              </div>
            </div>
            <div style={{ width: "150px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "48px", height: "22px", flexShrink: 0, position: "relative" }}>
                  <div style={{ position: "absolute", left: "1.4px", top: "17px", width: "4px", height: "2px", borderRadius: "2px 2px 0px 0px", background: "#dfe0e5" }} />
                  <div style={{ position: "absolute", left: "8.3px", top: "17px", width: "4px", height: "2px", borderRadius: "2px 2px 0px 0px", background: "#dfe0e5" }} />
                  <div style={{ position: "absolute", left: "15.1px", top: "17px", width: "4px", height: "2px", borderRadius: "2px 2px 0px 0px", background: "#dfe0e5" }} />
                  <div style={{ position: "absolute", left: "22px", top: "17px", width: "4px", height: "2px", borderRadius: "2px 2px 0px 0px", background: "#dfe0e5" }} />
                  <div style={{ position: "absolute", left: "28.9px", top: "17px", width: "4px", height: "2px", borderRadius: "2px 2px 0px 0px", background: "#dfe0e5" }} />
                  <div style={{ position: "absolute", left: "35.7px", top: "17px", width: "4px", height: "2px", borderRadius: "2px 2px 0px 0px", background: "#dfe0e5" }} />
                  <div style={{ position: "absolute", left: "42.6px", top: "17px", width: "4px", height: "2px", borderRadius: "2px 2px 0px 0px", background: "#dfe0e5" }} />
                </div>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "13px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>—</p>
              </div>
            </div>
            <div style={{ width: "96px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "13px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#b3b3b3", lineHeight: "20px" }}>—</p>
            </div>
            <div style={{ width: "170px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "24px", height: "24px", flexShrink: 0, borderRadius: "12px", background: "#f4f1ff", boxShadow: "0 0 0 1.5px #ffffff", display: "flex", flexDirection: "row", padding: "1.5px 1.5px 1.5px 1.5px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "14px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 500, color: "#7c5cfc", lineHeight: "12px" }}>HS</p>
                </div>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "67px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>Hana Sato</p>
              </div>
            </div>
            <div style={{ width: "130px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "101px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>v3 · editing now</p>
            </div>
            <div style={{ width: "52px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "28px", height: "28px", flexShrink: 0, borderRadius: "7px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <Dots size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
              </div>
            </div>
          </div>
          <div style={{ alignSelf: "stretch", height: "60px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #e9e9e9", display: "flex", flexDirection: "row", padding: "0px 6px 1px 6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "44px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "16px", height: "16px", flexShrink: 0, borderRadius: "4px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #dfe0e5, 0px 1px 2px 0px rgba(79, 79, 79, 0.12)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }} />
            </div>
            <div style={{ flex: "1 1 0", minWidth: 0, alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "9px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ededed, 0px 1px 2px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ width: "18px", height: "18px", flexShrink: 0, borderRadius: "5px", background: "#1a3d6e", position: "relative" }}>
                    <p style={{ position: "absolute", left: "4px", top: "4px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "13px", lineHeight: "12px", fontFamily: "'Geist'", fontSize: "9px", fontWeight: 600, color: "#ffffff" }}>NS</p>
                  </div>
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "83px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>PO Matching</p>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "150px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>Purchase order created</p>
                </div>
              </div>
            </div>
            <div style={{ width: "120px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, borderRadius: "4.58px", background: "#fff1f1", display: "flex", flexDirection: "row", padding: "2px 8px 2px 8px", gap: "3px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <AlertCircle size={12} strokeWidth={3} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#e5484d", display: "block" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "43px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#e5484d", lineHeight: "20px" }}>Failing</p>
              </div>
            </div>
            <div style={{ width: "150px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "48px", height: "22px", flexShrink: 0, position: "relative" }}>
                  <div data-fu="bar" style={{ position: "absolute", left: "1.4px", top: "11.18px", width: "4px", height: "7.82px", borderRadius: "2px 2px 0px 0px", background: "#e5484d" }} />
                  <div data-fu="bar" style={{ position: "absolute", left: "8.3px", top: "10.47px", width: "4px", height: "8.53px", borderRadius: "2px 2px 0px 0px", background: "#e5484d" }} />
                  <div data-fu="bar" style={{ position: "absolute", left: "15.1px", top: "12.07px", width: "4px", height: "6.93px", borderRadius: "2px 2px 0px 0px", background: "#e5484d" }} />
                  <div data-fu="bar" style={{ position: "absolute", left: "22px", top: "9.93px", width: "4px", height: "9.07px", borderRadius: "2px 2px 0px 0px", background: "#e5484d" }} />
                  <div data-fu="bar" style={{ position: "absolute", left: "28.9px", top: "10.82px", width: "4px", height: "8.18px", borderRadius: "2px 2px 0px 0px", background: "#e5484d" }} />
                  <div data-fu="bar" style={{ position: "absolute", left: "35.7px", top: "13.67px", width: "4px", height: "5.33px", borderRadius: "2px 2px 0px 0px", background: "#e5484d" }} />
                  <div data-fu="bar" style={{ position: "absolute", left: "42.6px", top: "15.8px", width: "4px", height: "3.2px", borderRadius: "2px 2px 0px 0px", background: "#e5484d" }} />
                </div>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "23px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>812</p>
              </div>
            </div>
            <div style={{ width: "96px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "39px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#e5484d", lineHeight: "20px" }}>72.4%</p>
            </div>
            <div style={{ width: "170px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "24px", height: "24px", flexShrink: 0, borderRadius: "12px", background: "url('https://ingotui.com/library-img/232efcbc3e38653b836fdc20a462210bf2f00cbb.png') center / cover no-repeat", boxShadow: "0 0 0 1.5px #ffffff", display: "flex", flexDirection: "row", padding: "1.5px 1.5px 1.5px 1.5px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "65px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>Chara Lee</p>
              </div>
            </div>
            <div style={{ width: "130px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "70px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>v8 · 6h ago</p>
            </div>
            <div style={{ width: "52px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "28px", height: "28px", flexShrink: 0, borderRadius: "7px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <Dots size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
              </div>
            </div>
          </div>
          <div style={{ alignSelf: "stretch", height: "60px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #e9e9e9", display: "flex", flexDirection: "row", padding: "0px 6px 1px 6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "44px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "16px", height: "16px", flexShrink: 0, borderRadius: "4px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #dfe0e5, 0px 1px 2px 0px rgba(79, 79, 79, 0.12)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }} />
            </div>
            <div style={{ flex: "1 1 0", minWidth: 0, alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "9px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ededed, 0px 1px 2px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <svg style={{ width: "18px", height: "18px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 2.178)" d="M9.6855 0 L9.6855 10.0395 L18 0.000749946 L9.6855 0 Z M0 0.00149989 C0 2.2965 1.86225 4.1595 4.15725 4.1595 C6.45225 4.1595 8.31375 2.2965 8.3145 0.00149989 L0 0.00149989 Z M8.3145 3.60675 L0 13.644 L8.3145 13.644 L8.3145 3.60675 Z M13.842 9.48675 C11.5447 9.48675 9.6855 11.3468 9.6855 13.644 L18 13.644 C18 11.349 16.14 9.48675 13.8428 9.48675 L13.842 9.48675 Z" fill="#03363d"/></svg>
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "147px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>Support Ticket Routing</p>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "155px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>New ticket in any queue</p>
                </div>
              </div>
            </div>
            <div style={{ width: "120px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, borderRadius: "4.58px", background: "#f6fffb", display: "flex", flexDirection: "row", padding: "2px 8px 2px 8px", gap: "3px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <CircleCheck size={12} strokeWidth={3} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#17a673", display: "block" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "26px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#17a673", lineHeight: "20px" }}>Live</p>
              </div>
            </div>
            <div style={{ width: "150px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "48px", height: "22px", flexShrink: 0, position: "relative" }}>
                  <div data-fu="bar" style={{ position: "absolute", left: "1.4px", top: "6.56px", width: "4px", height: "12.44px", borderRadius: "2px 2px 0px 0px", background: "#1b8ce8" }} />
                  <div data-fu="bar" style={{ position: "absolute", left: "8.3px", top: "4.42px", width: "4px", height: "14.58px", borderRadius: "2px 2px 0px 0px", background: "#1b8ce8" }} />
                  <div data-fu="bar" style={{ position: "absolute", left: "15.1px", top: "5.31px", width: "4px", height: "13.69px", borderRadius: "2px 2px 0px 0px", background: "#1b8ce8" }} />
                  <div data-fu="bar" style={{ position: "absolute", left: "22px", top: "3px", width: "4px", height: "16px", borderRadius: "2px 2px 0px 0px", background: "#1b8ce8" }} />
                  <div data-fu="bar" style={{ position: "absolute", left: "28.9px", top: "3.71px", width: "4px", height: "15.29px", borderRadius: "2px 2px 0px 0px", background: "#1b8ce8" }} />
                  <div data-fu="bar" style={{ position: "absolute", left: "35.7px", top: "7.62px", width: "4px", height: "11.38px", borderRadius: "2px 2px 0px 0px", background: "#1b8ce8" }} />
                  <div data-fu="bar" style={{ position: "absolute", left: "42.6px", top: "8.69px", width: "4px", height: "10.31px", borderRadius: "2px 2px 0px 0px", background: "#1b8ce8" }} />
                </div>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "38px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>6,240</p>
              </div>
            </div>
            <div style={{ width: "96px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "37px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#17a673", lineHeight: "20px" }}>97.5%</p>
            </div>
            <div style={{ width: "170px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "24px", height: "24px", flexShrink: 0, borderRadius: "12px", background: "#fffbf0", boxShadow: "0 0 0 1.5px #ffffff", display: "flex", flexDirection: "row", padding: "1.5px 1.5px 1.5px 1.5px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "15px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 500, color: "#d99a00", lineHeight: "12px" }}>LM</p>
                </div>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "76px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>Leo Martins</p>
              </div>
            </div>
            <div style={{ width: "130px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "73px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>v31 · 1d ago</p>
            </div>
            <div style={{ width: "52px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "28px", height: "28px", flexShrink: 0, borderRadius: "7px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <Dots size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
              </div>
            </div>
          </div>
          <div style={{ alignSelf: "stretch", height: "60px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #e9e9e9", display: "flex", flexDirection: "row", padding: "0px 6px 1px 6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "44px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "16px", height: "16px", flexShrink: 0, borderRadius: "4px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #dfe0e5, 0px 1px 2px 0px rgba(79, 79, 79, 0.12)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }} />
            </div>
            <div style={{ flex: "1 1 0", minWidth: 0, alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "9px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ededed, 0px 1px 2px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <svg style={{ width: "18px", height: "18px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 2.7)" d="M7.5045 1.36125 C7.79872 1.05148 8.15294 0.804883 8.54558 0.636483 C8.93821 0.468082 9.36103 0.38141 9.78825 0.38175 C10.9583 0.38175 12.0037 1.05675 12.5557 2.0355 C13.0282 1.8105 13.5682 1.698 14.1307 1.698 C16.2682 1.698 18 3.453 18 5.613 C18 7.773 16.2675 9.528 14.118 9.528 C13.8592 9.528 13.6005 9.495 13.353 9.45 C13.1101 9.89385 12.7521 10.264 12.3165 10.5214 C11.8809 10.7788 11.3839 10.9139 10.878 10.9125 C10.428 10.9125 10.0118 10.8 9.6405 10.6312 C9.39181 11.2157 8.97657 11.7141 8.44656 12.0642 C7.91654 12.4143 7.2952 12.6006 6.66 12.6 C5.99786 12.6017 5.35121 12.3997 4.80782 12.0214 C4.26443 11.643 3.8506 11.1066 3.6225 10.485 C3.42 10.5315 3.2175 10.542 3.00375 10.542 C1.35075 10.542 0 9.192 0 7.5045 C0 6.3795 0.60825 5.40075 1.5075 4.872 C1.31625 4.4445 1.215 3.972 1.215 3.4875 C1.215 1.5525 2.79 0 4.7025 0 C5.85 0 6.84 0.52875 7.4925 1.35" fill="#00a1e0"/></svg>
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "156px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>Contract Renewal Alerts</p>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "189px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>Opportunity enters “Renewal”</p>
                </div>
              </div>
            </div>
            <div style={{ width: "120px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, borderRadius: "4.58px", background: "#f6fffb", display: "flex", flexDirection: "row", padding: "2px 8px 2px 8px", gap: "3px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <CircleCheck size={12} strokeWidth={3} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#17a673", display: "block" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "26px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#17a673", lineHeight: "20px" }}>Live</p>
              </div>
            </div>
            <div style={{ width: "150px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "48px", height: "22px", flexShrink: 0, position: "relative" }}>
                  <div style={{ position: "absolute", left: "1.4px", top: "17px", width: "4px", height: "2px", borderRadius: "2px 2px 0px 0px", background: "#1b8ce8" }} />
                  <div style={{ position: "absolute", left: "8.3px", top: "16.87px", width: "4px", height: "2.13px", borderRadius: "2px 2px 0px 0px", background: "#1b8ce8" }} />
                  <div style={{ position: "absolute", left: "15.1px", top: "17px", width: "4px", height: "2px", borderRadius: "2px 2px 0px 0px", background: "#1b8ce8" }} />
                  <div style={{ position: "absolute", left: "22px", top: "16.51px", width: "4px", height: "2.49px", borderRadius: "2px 2px 0px 0px", background: "#1b8ce8" }} />
                  <div style={{ position: "absolute", left: "28.9px", top: "17px", width: "4px", height: "2px", borderRadius: "2px 2px 0px 0px", background: "#1b8ce8" }} />
                  <div style={{ position: "absolute", left: "35.7px", top: "16.69px", width: "4px", height: "2.31px", borderRadius: "2px 2px 0px 0px", background: "#1b8ce8" }} />
                  <div style={{ position: "absolute", left: "42.6px", top: "16.33px", width: "4px", height: "2.67px", borderRadius: "2px 2px 0px 0px", background: "#1b8ce8" }} />
                </div>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>96</p>
              </div>
            </div>
            <div style={{ width: "96px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "41px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#17a673", lineHeight: "20px" }}>99.0%</p>
            </div>
            <div style={{ width: "170px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "24px", height: "24px", flexShrink: 0, borderRadius: "12px", background: "#fef5f0", boxShadow: "0 0 0 1.5px #ffffff", display: "flex", flexDirection: "row", padding: "1.5px 1.5px 1.5px 1.5px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "14px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 500, color: "#ff5601", lineHeight: "12px" }}>AK</p>
                </div>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "72px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>Aisha Khan</p>
              </div>
            </div>
            <div style={{ width: "130px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "71px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>v4 · 3d ago</p>
            </div>
            <div style={{ width: "52px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "28px", height: "28px", flexShrink: 0, borderRadius: "7px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <Dots size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
              </div>
            </div>
          </div>
          <div style={{ alignSelf: "stretch", height: "60px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #e9e9e9", display: "flex", flexDirection: "row", padding: "0px 6px 1px 6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "44px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "16px", height: "16px", flexShrink: 0, borderRadius: "4px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #dfe0e5, 0px 1px 2px 0px rgba(79, 79, 79, 0.12)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }} />
            </div>
            <div style={{ flex: "1 1 0", minWidth: 0, alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "9px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ededed, 0px 1px 2px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <svg style={{ width: "18px", height: "18px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M3.7815 11.3737 C3.78051 11.8749 3.58114 12.3553 3.22698 12.7099 C2.87281 13.0645 2.39266 13.2644 1.8915 13.266 C1.39008 13.2648 0.909545 13.065 0.555056 12.7104 C0.200567 12.3558 0.000990328 11.8752 1.249e-16 11.3737 C0.0013871 10.8727 0.201163 10.3925 0.55563 10.0383 C0.910098 9.68413 1.39041 9.48474 1.8915 9.48375 L3.7815 9.48375 L3.7815 11.3737 Z M4.73475 11.3737 C4.73614 10.8728 4.93581 10.3927 5.29011 10.0386 C5.64442 9.68442 6.12454 9.48494 6.6255 9.48375 C7.12646 9.48494 7.60658 9.68442 7.96089 10.0386 C8.31519 10.3927 8.51486 10.8728 8.51625 11.3737 L8.51625 16.1085 C8.51506 16.6097 8.3155 17.09 7.9612 17.4444 C7.60689 17.7989 7.12666 17.9986 6.6255 18 C6.12434 17.9986 5.64411 17.7989 5.2898 17.4444 C4.9355 17.09 4.73594 16.6097 4.73475 16.1085 L4.73475 11.3737 Z M6.6255 3.7815 C6.1246 3.78012 5.6446 3.58057 5.29033 3.22645 C4.93607 2.87232 4.73633 2.3924 4.73475 1.8915 C4.73594 1.39034 4.9355 0.910031 5.2898 0.555584 C5.64411 0.201138 6.12434 0.00138631 6.6255 0 C7.12666 0.00138631 7.60689 0.201138 7.9612 0.555584 C8.3155 0.910031 8.51506 1.39034 8.51625 1.8915 L8.51625 3.7815 L6.6255 3.7815 Z M6.6255 4.73475 C7.12653 4.73614 7.60665 4.93578 7.96093 5.29007 C8.31522 5.64435 8.51486 6.12447 8.51625 6.6255 C8.51486 7.12653 8.31522 7.60665 7.96093 7.96093 C7.60665 8.31522 7.12653 8.51486 6.6255 8.51625 L1.8915 8.51625 C1.39034 8.51506 0.910031 8.3155 0.555584 7.9612 C0.201138 7.60689 0.00138631 7.12666 0 6.6255 C0.00138631 6.12434 0.201138 5.64411 0.555584 5.2898 C0.910031 4.9355 1.39034 4.73594 1.8915 4.73475 L6.6255 4.73475 Z M14.217 6.6255 C14.2184 6.12434 14.4181 5.64411 14.7726 5.2898 C15.127 4.9355 15.6073 4.73594 16.1085 4.73475 C16.6097 4.73594 17.09 4.9355 17.4444 5.2898 C17.7989 5.64411 17.9986 6.12434 18 6.6255 C17.9986 7.12666 17.7989 7.60689 17.4444 7.9612 C17.09 8.3155 16.6097 8.51506 16.1085 8.51625 L14.217 8.51625 L14.217 6.6255 Z M13.266 6.6255 C13.2646 7.12679 13.0648 7.60713 12.7101 7.96146 C12.3555 8.31579 11.875 8.51526 11.3737 8.51625 C10.8728 8.51486 10.3927 8.31519 10.0386 7.96089 C9.68442 7.60658 9.48494 7.12646 9.48375 6.6255 L9.48375 1.8915 C9.48474 1.39041 9.68413 0.910098 10.0383 0.55563 C10.3925 0.201163 10.8727 0.0013871 11.3737 3.747e-16 C11.8752 0.000990328 12.3558 0.200567 12.7104 0.555056 C13.065 0.909545 13.2648 1.39008 13.266 1.8915 L13.266 6.6255 Z M11.3737 14.217 C11.8752 14.218 12.3558 14.4176 12.7104 14.7721 C13.065 15.1265 13.2648 15.6071 13.266 16.1085 C13.2648 16.6099 13.065 17.0905 12.7104 17.4449 C12.3558 17.7994 11.8752 17.999 11.3737 18 C10.8727 17.9986 10.3925 17.7988 10.0383 17.4444 C9.68413 17.0899 9.48474 16.6096 9.48375 16.1085 L9.48375 14.217 L11.3737 14.217 Z M11.3737 13.266 C10.8725 13.2646 10.3923 13.0647 10.0381 12.7101 C9.68385 12.3555 9.48454 11.875 9.48375 11.3737 C9.48494 10.8729 9.68444 10.3928 10.0386 10.0386 C10.3928 9.68444 10.8729 9.48494 11.3737 9.48375 L16.1085 9.48375 C16.6096 9.48474 17.0899 9.68413 17.4444 10.0383 C17.7988 10.3925 17.9986 10.8727 18 11.3737 C17.999 11.8752 17.7994 12.3558 17.4449 12.7104 C17.0905 13.065 16.6099 13.2648 16.1085 13.266 L11.3737 13.266 Z" fill="#4a154b"/></svg>
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "92px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>Expense Audit</p>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "105px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>/audit command</p>
                </div>
              </div>
            </div>
            <div style={{ width: "120px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, borderRadius: "4.58px", background: "#f7f8fa", display: "flex", flexDirection: "row", padding: "2px 8px 2px 8px", gap: "3px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <PlayerPause size={12} strokeWidth={3} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#697386", display: "block" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "48px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#697386", lineHeight: "20px" }}>Paused</p>
              </div>
            </div>
            <div style={{ width: "150px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "48px", height: "22px", flexShrink: 0, position: "relative" }}>
                  <div style={{ position: "absolute", left: "1.4px", top: "15.8px", width: "4px", height: "3.2px", borderRadius: "2px 2px 0px 0px", background: "#dfe0e5" }} />
                  <div style={{ position: "absolute", left: "8.3px", top: "15.09px", width: "4px", height: "3.91px", borderRadius: "2px 2px 0px 0px", background: "#dfe0e5" }} />
                  <div style={{ position: "absolute", left: "15.1px", top: "15.44px", width: "4px", height: "3.56px", borderRadius: "2px 2px 0px 0px", background: "#dfe0e5" }} />
                  <div style={{ position: "absolute", left: "22px", top: "17px", width: "4px", height: "2px", borderRadius: "2px 2px 0px 0px", background: "#dfe0e5" }} />
                  <div style={{ position: "absolute", left: "28.9px", top: "17px", width: "4px", height: "2px", borderRadius: "2px 2px 0px 0px", background: "#dfe0e5" }} />
                  <div style={{ position: "absolute", left: "35.7px", top: "17px", width: "4px", height: "2px", borderRadius: "2px 2px 0px 0px", background: "#dfe0e5" }} />
                  <div style={{ position: "absolute", left: "42.6px", top: "17px", width: "4px", height: "2px", borderRadius: "2px 2px 0px 0px", background: "#dfe0e5" }} />
                </div>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "19px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>60</p>
              </div>
            </div>
            <div style={{ width: "96px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "41px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#17a673", lineHeight: "20px" }}>95.0%</p>
            </div>
            <div style={{ width: "170px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "24px", height: "24px", flexShrink: 0, borderRadius: "12px", background: "#fffbf0", boxShadow: "0 0 0 1.5px #ffffff", display: "flex", flexDirection: "row", padding: "1.5px 1.5px 1.5px 1.5px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "13px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 500, color: "#d99a00", lineHeight: "12px" }}>TB</p>
                </div>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "76px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>Tom Becker</p>
              </div>
            </div>
            <div style={{ width: "130px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "75px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>v11 · 2w ago</p>
            </div>
            <div style={{ width: "52px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "28px", height: "28px", flexShrink: 0, borderRadius: "7px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <Dots size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
              </div>
            </div>
          </div>
          <div style={{ alignSelf: "stretch", height: "60px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 6px 0px 6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "44px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "16px", height: "16px", flexShrink: 0, borderRadius: "4px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #dfe0e5, 0px 1px 2px 0px rgba(79, 79, 79, 0.12)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }} />
            </div>
            <div style={{ flex: "1 1 0", minWidth: 0, alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "9px", background: "#eff8ff", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <Calendar size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#1b8ce8", display: "block" }} />
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "148px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>Weekly Finance Report</p>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "172px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>Schedule · Mondays 09:00</p>
                </div>
              </div>
            </div>
            <div style={{ width: "120px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, borderRadius: "4.58px", background: "#f6fffb", display: "flex", flexDirection: "row", padding: "2px 8px 2px 8px", gap: "3px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <CircleCheck size={12} strokeWidth={3} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#17a673", display: "block" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "26px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#17a673", lineHeight: "20px" }}>Live</p>
              </div>
            </div>
            <div style={{ width: "150px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "48px", height: "22px", flexShrink: 0, position: "relative" }}>
                  <div style={{ position: "absolute", left: "1.4px", top: "17px", width: "4px", height: "2px", borderRadius: "2px 2px 0px 0px", background: "#1b8ce8" }} />
                  <div style={{ position: "absolute", left: "8.3px", top: "17px", width: "4px", height: "2px", borderRadius: "2px 2px 0px 0px", background: "#1b8ce8" }} />
                  <div style={{ position: "absolute", left: "15.1px", top: "17px", width: "4px", height: "2px", borderRadius: "2px 2px 0px 0px", background: "#1b8ce8" }} />
                  <div style={{ position: "absolute", left: "22px", top: "17px", width: "4px", height: "2px", borderRadius: "2px 2px 0px 0px", background: "#1b8ce8" }} />
                  <div style={{ position: "absolute", left: "28.9px", top: "17px", width: "4px", height: "2px", borderRadius: "2px 2px 0px 0px", background: "#1b8ce8" }} />
                  <div style={{ position: "absolute", left: "35.7px", top: "17px", width: "4px", height: "2px", borderRadius: "2px 2px 0px 0px", background: "#1b8ce8" }} />
                  <div style={{ position: "absolute", left: "42.6px", top: "17px", width: "4px", height: "2px", borderRadius: "2px 2px 0px 0px", background: "#1b8ce8" }} />
                </div>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "6px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>1</p>
              </div>
            </div>
            <div style={{ width: "96px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "36px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#17a673", lineHeight: "20px" }}>100%</p>
            </div>
            <div style={{ width: "170px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "24px", height: "24px", flexShrink: 0, borderRadius: "12px", background: "#f4fcf7", boxShadow: "0 0 0 1.5px #ffffff", display: "flex", flexDirection: "row", padding: "1.5px 1.5px 1.5px 1.5px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "14px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 500, color: "#17a673", lineHeight: "12px" }}>SR</p>
                </div>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "72px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>Sofia Rossi</p>
              </div>
            </div>
            <div style={{ width: "130px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "71px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>v2 · 6d ago</p>
            </div>
            <div style={{ width: "52px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "28px", height: "28px", flexShrink: 0, borderRadius: "7px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <Dots size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
              </div>
            </div>
          </div>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "203px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>Showing 1–10 of 284 workflows</p>
          <div style={{ flex: "1 1 0", minWidth: 0, height: "1px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }} />
          <div data-fu="btn" style={{ flexShrink: 0, borderRadius: "8px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e8e8e8", display: "flex", flexDirection: "row", padding: "5px 11px 5px 11px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <ChevronLeft size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "56px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#686765", lineHeight: "20px" }}>Previous</p>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, borderRadius: "8px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e8e8e8, 0px 1px 2px 0px rgba(79, 79, 79, 0.12)", display: "flex", flexDirection: "row", padding: "5px 11px 5px 11px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "6px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>1</p>
            </div>
            <div style={{ flexShrink: 0, borderRadius: "8px", display: "flex", flexDirection: "row", padding: "4px 10px 4px 10px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "9px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>2</p>
            </div>
            <div style={{ flexShrink: 0, borderRadius: "8px", display: "flex", flexDirection: "row", padding: "4px 10px 4px 10px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "9px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>3</p>
            </div>
            <div style={{ flexShrink: 0, borderRadius: "8px", display: "flex", flexDirection: "row", padding: "4px 10px 4px 10px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "8px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>…</p>
            </div>
            <div style={{ flexShrink: 0, borderRadius: "8px", display: "flex", flexDirection: "row", padding: "4px 10px 4px 10px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>29</p>
            </div>
          </div>
          <div data-fu="btn" style={{ flexShrink: 0, borderRadius: "8px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e8e8e8", display: "flex", flexDirection: "row", padding: "5px 11px 5px 11px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <ChevronRight size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "31px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#686765", lineHeight: "20px" }}>Next</p>
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
