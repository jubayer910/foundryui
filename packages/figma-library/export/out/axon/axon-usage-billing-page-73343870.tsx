"use client";
// Usage & Billing page (axon, Templates) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist, Geist Mono. Icons: Ingot Icons.
import { useEffect, useRef } from "react";
import { AlertTriangle, ArrowUpRight, Bell, Bolt, ChartLine, Check, ChevronRight, CircleCheck, CreditCard, Database, Dots, File, FolderSearch, GitMerge, LayoutDashboard, PlugConnected, ReceiptDollar, Search, Settings, Users } from "ingotui-icons/react/stroke-rounded";
import { Category as CategorySolid } from "ingotui-icons/react/solid";

export function UsageBillingPage() {
  const fuRef = useRef<any>(null);
  useEffect(() => fuInteract(fuRef.current), []);
  return (
    <div ref={fuRef} style={{ width: "1440px", height: "1110px", background: "#ffffff", overflow: "hidden", position: "relative" }}>
      <div style={{ position: "absolute", left: "0px", top: "0px", width: "1440px", height: "1110px", background: "#ffffff", overflow: "hidden" }}>
        <div style={{ position: "absolute", left: "0px", top: "0px", width: "246px", height: "1110px", background: "#f5f5f5", overflow: "hidden" }}>
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
                <div style={{ width: "212px", height: "32px", flexShrink: 0, borderRadius: "6px", background: "#ffffff", boxShadow: "0px 1.4px 1px 0px rgba(0, 0, 0, 0.06), 0px 0px 1px 0px rgba(0, 0, 0, 0.25)", display: "flex", flexDirection: "row", padding: "8px 10px 8px 10px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <CreditCard size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#1b8ce8", display: "block" }} />
                  <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#000000", lineHeight: "20px" }}>Usage & Billing</p>
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
        <svg style={{ position: "absolute", left: "246px", top: "0px", width: "1px", height: "1110px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="1" height="1110" viewBox="0 0 1 1110" fill="none" overflow="visible"><path transform="matrix(0 1 -1 0 0 0)" d="M0 -0.5 L0 0 L1110 0 L1110 -0.5 L1110 -1 L0 -1 L0 -0.5 Z" fill="#e8e8e8"/></svg>
        <div style={{ position: "absolute", left: "247px", top: "0px", width: "1193px", height: "74px", background: "#ffffff", display: "flex", flexDirection: "row", padding: "20px 20px 20px 20px", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <CategorySolid size={14} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#b3b3b3", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "94px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#b3b3b3", lineHeight: "20px" }}>Administration</p>
            </div>
            <ChevronRight size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#686765", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "97px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#666d80", lineHeight: "20px" }}>Usage & Billing</p>
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
      <div style={{ position: "absolute", left: "265px", top: "92px", width: "1155px", height: "978px", display: "flex", flexDirection: "column", gap: "16px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "16px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "109px", fontFamily: "'Geist'", fontSize: "16px", fontWeight: 400, color: "#15171c", lineHeight: "24px", letterSpacing: "-0.1px" }}>Usage & Billing</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "324px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>
              <span style={{ fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>{"Growth plan · billed monthly · renews "}</span>
              <span style={{ fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>Nov 1, 2026</span>
            </p>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div data-fu="btn" style={{ flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e8e8e8", display: "flex", flexDirection: "row", padding: "7px 13px 7px 13px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <Settings size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "95px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#686765", lineHeight: "20px" }}>Billing settings</p>
            </div>
            <div style={{ flexShrink: 0, borderRadius: "10px", background: "linear-gradient(0deg, #1b8ce8 34.7%, #4eb0ff 93.7%)", boxShadow: "0px 8px 9px 0px rgba(0, 0, 0, 0.12), inset 0.6px 0.6px 0px 0px rgba(255, 255, 255, 0.25), inset -0.6px 0.6px 0px 0px rgba(255, 255, 255, 0.25)", display: "flex", flexDirection: "row", padding: "6px 12px 6px 12px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <ArrowUpRight size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#ffffff", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "81px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#ffffff", lineHeight: "20px" }}>Change plan</p>
            </div>
          </div>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "16px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ width: "360px", height: "382px", flexShrink: 0, borderRadius: "12px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ededed", display: "flex", flexDirection: "column", padding: "19px 19px 19px 19px", gap: "14px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div data-fu="row" style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "36px", height: "36px", flexShrink: 0, borderRadius: "10px", background: "#eff8ff", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <Bolt size={18} strokeWidth={2} style={{ width: "18px", height: "18px", flexShrink: 0, color: "#1b8ce8", display: "block" }} />
              </div>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "54px", fontFamily: "'Geist'", fontSize: "16px", fontWeight: 400, color: "#15171c", lineHeight: "24px", letterSpacing: "-0.1px" }}>Growth</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "152px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>Cross-team automation</p>
              </div>
              <div style={{ flex: "1 1 0", minWidth: 0, height: "1px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }} />
              <div style={{ flexShrink: 0, borderRadius: "100px", background: "#eff8ff", display: "flex", flexDirection: "row", padding: "1px 8px 1px 8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "49px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#1b8ce8", lineHeight: "20px" }}>Current</p>
              </div>
            </div>
            <div data-fu="row" style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "flex-end", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "89px", fontFamily: "'Geist'", fontSize: "28px", fontWeight: 500, color: "#15171c", lineHeight: "31px", letterSpacing: "-0.4px" }}>$1,200</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "52px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>/ month</p>
            </div>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <Check size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#17a673", display: "block" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "130px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>250k workflow runs</p>
              </div>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <Check size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#17a673", display: "block" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "156px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>25 seats · reviewers free</p>
              </div>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <Check size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#17a673", display: "block" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "108px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>$1,500 AI credits</p>
              </div>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <Check size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#17a673", display: "block" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "204px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>SSO, audit log, 90-day retention</p>
              </div>
            </div>
            <div data-fu="row" style={{ alignSelf: "stretch", flexShrink: 0, borderRadius: "10px", background: "#f9f9f9", display: "flex", flexDirection: "row", padding: "10px 12px 10px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <ReceiptDollar size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
              <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>
                <span style={{ fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>{"Next invoice "}</span>
                <span style={{ fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>$1,284.20</span>
                <span style={{ fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>{" on Nov 1"}</span>
              </p>
            </div>
          </div>
          <div style={{ flex: "1 1 0", minWidth: 0, height: "382px", flexShrink: 0, borderRadius: "12px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ededed", display: "flex", flexDirection: "column", padding: "19px 19px 19px 19px", gap: "4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "12px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "119px", fontFamily: "'Geist'", fontSize: "16px", fontWeight: 400, color: "#15171c", lineHeight: "24px", letterSpacing: "-0.1px" }}>This billing cycle</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "168px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>Oct 1 – Oct 31 · day 4 of 31</p>
              </div>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "89px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#4996fe", lineHeight: "20px" }}>Usage history</p>
            </div>
            <div style={{ alignSelf: "stretch", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #e9e9e9", display: "flex", flexDirection: "column", padding: "10px 0px 11px 0px", gap: "8px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "93px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>Workflow runs</p>
                <div style={{ flexShrink: 0, borderRadius: "100px", background: "#fffbf0", display: "flex", flexDirection: "row", padding: "1px 8px 1px 8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "29px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#d99a00", lineHeight: "20px" }}>80%</p>
                </div>
                <div style={{ flex: "1 1 0", minWidth: 0, height: "1px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "126px", fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>
                  <span style={{ fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>200,412</span>
                  <span style={{ fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>{" / 250,000"}</span>
                </p>
                <div style={{ width: "28px", height: "28px", flexShrink: 0, borderRadius: "7px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <Bell size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
                </div>
              </div>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "1.15px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
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
              </div>
            </div>
            <div style={{ alignSelf: "stretch", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #e9e9e9", display: "flex", flexDirection: "column", padding: "10px 0px 11px 0px", gap: "8px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "60px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>AI credits</p>
                <div style={{ flexShrink: 0, borderRadius: "100px", background: "#fffbf0", display: "flex", flexDirection: "row", padding: "1px 8px 1px 8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "29px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#d99a00", lineHeight: "20px" }}>86%</p>
                </div>
                <div style={{ flex: "1 1 0", minWidth: 0, height: "1px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "105px", fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>
                  <span style={{ fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>$1,284</span>
                  <span style={{ fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>{" / $1,500"}</span>
                </p>
                <div style={{ width: "28px", height: "28px", flexShrink: 0, borderRadius: "7px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <Bell size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
                </div>
              </div>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "1.15px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#ef0c78" }} />
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
            <div style={{ alignSelf: "stretch", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #e9e9e9", display: "flex", flexDirection: "column", padding: "10px 0px 11px 0px", gap: "8px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "37px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>Seats</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "28px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>72%</p>
                <div style={{ flex: "1 1 0", minWidth: 0, height: "1px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "47px", fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>
                  <span style={{ fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>18</span>
                  <span style={{ fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>{" / 25"}</span>
                </p>
                <div style={{ width: "28px", height: "28px", flexShrink: 0, borderRadius: "7px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <Bell size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
                </div>
              </div>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "1.15px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
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
              </div>
            </div>
            <div style={{ alignSelf: "stretch", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #e9e9e9", display: "flex", flexDirection: "column", padding: "10px 0px 11px 0px", gap: "8px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "103px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>Indexed records</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "29px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>28%</p>
                <div style={{ flex: "1 1 0", minWidth: 0, height: "1px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "74px", fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>
                  <span style={{ fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>1.42M</span>
                  <span style={{ fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>{" / 5M"}</span>
                </p>
                <div style={{ width: "28px", height: "28px", flexShrink: 0, borderRadius: "7px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <Bell size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
                </div>
              </div>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "1.15px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
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
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5" }} />
                <div style={{ width: "2px", height: "13px", flexShrink: 0, borderRadius: "1px", background: "#dfe0e5" }} />
              </div>
            </div>
          </div>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "16px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ flex: "1 1 0", minWidth: 0, height: "316px", flexShrink: 0, borderRadius: "12px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ededed", display: "flex", flexDirection: "column", padding: "19px 19px 19px 19px", gap: "12px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "95px", fontFamily: "'Geist'", fontSize: "16px", fontWeight: 400, color: "#15171c", lineHeight: "24px", letterSpacing: "-0.1px" }}>Runs per day</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "213px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>Actual vs. projected for this cycle</p>
              </div>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", flexWrap: "wrap", rowGap: "14px", columnGap: "14px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ width: "10px", height: "4px", flexShrink: 0, borderRadius: "2px", background: "#1b8ce8" }} />
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "42px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>Actual</p>
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ width: "10px", height: "4px", flexShrink: 0, borderRadius: "2px", background: "#dfe0e5" }} />
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "62px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>Projected</p>
                </div>
              </div>
            </div>
            <div style={{ width: "700px", height: "170px", flexShrink: 0, position: "relative" }}>
              <p style={{ position: "absolute", left: "0px", top: "-7px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "23px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>12k</p>
              <svg style={{ position: "absolute", left: "40px", top: "3px", width: "660px", height: "1px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="660" height="1" viewBox="0 0 660 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 -0.5 L0 0 L660 0 L660 -0.5 L660 -1 L0 -1 L0 -0.5 Z" fill="#f5f5f5"/></svg>
              <p style={{ position: "absolute", left: "0px", top: "61px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "17px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>6k</p>
              <svg style={{ position: "absolute", left: "40px", top: "71px", width: "660px", height: "1px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="660" height="1" viewBox="0 0 660 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 -0.5 L0 0 L660 0 L660 -0.5 L660 -1 L0 -1 L0 -0.5 Z" fill="#f5f5f5"/></svg>
              <p style={{ position: "absolute", left: "0px", top: "129px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "10px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>0</p>
              <svg style={{ position: "absolute", left: "40px", top: "139px", width: "660px", height: "1px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="660" height="1" viewBox="0 0 660 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 -0.5 L0 0 L660 0 L660 -0.5 L660 -1 L0 -1 L0 -0.5 Z" fill="#f5f5f5"/></svg>
              <div data-fu="bar" style={{ position: "absolute", left: "44.65px", top: "50.6px", width: "12px", height: "88.4px", borderRadius: "3px 3px 0px 0px", background: "#1b8ce8" }} />
              <div data-fu="bar" style={{ position: "absolute", left: "65.94px", top: "40.4px", width: "12px", height: "98.6px", borderRadius: "3px 3px 0px 0px", background: "#1b8ce8" }} />
              <div data-fu="bar" style={{ position: "absolute", left: "87.23px", top: "30.2px", width: "12px", height: "108.8px", borderRadius: "3px 3px 0px 0px", background: "#1b8ce8" }} />
              <div data-fu="bar" style={{ position: "absolute", left: "108.52px", top: "20px", width: "12px", height: "119px", borderRadius: "3px 3px 0px 0px", background: "#1b8ce8" }} />
              <div data-fu="bar" style={{ position: "absolute", left: "129.81px", top: "137px", width: "12px", height: "2px", borderRadius: "3px 3px 0px 0px", background: "#1b8ce8" }} />
              <div data-fu="bar" style={{ position: "absolute", left: "151.1px", top: "137px", width: "12px", height: "2px", borderRadius: "3px 3px 0px 0px", background: "#1b8ce8" }} />
              <div data-fu="bar" style={{ position: "absolute", left: "172.39px", top: "137px", width: "12px", height: "2px", borderRadius: "3px 3px 0px 0px", background: "#1b8ce8" }} />
              <div data-fu="bar" style={{ position: "absolute", left: "193.68px", top: "137px", width: "12px", height: "2px", borderRadius: "3px 3px 0px 0px", background: "#1b8ce8" }} />
              <div data-fu="bar" style={{ position: "absolute", left: "214.97px", top: "137px", width: "12px", height: "2px", borderRadius: "3px 3px 0px 0px", background: "#1b8ce8" }} />
              <div data-fu="bar" style={{ position: "absolute", left: "236.26px", top: "137px", width: "12px", height: "2px", borderRadius: "3px 3px 0px 0px", background: "#1b8ce8" }} />
              <div data-fu="bar" style={{ position: "absolute", left: "257.55px", top: "137px", width: "12px", height: "2px", borderRadius: "3px 3px 0px 0px", background: "#1b8ce8" }} />
              <div data-fu="bar" style={{ position: "absolute", left: "278.84px", top: "137px", width: "12px", height: "2px", borderRadius: "3px 3px 0px 0px", background: "#1b8ce8" }} />
              <div data-fu="bar" style={{ position: "absolute", left: "300.13px", top: "137px", width: "12px", height: "2px", borderRadius: "3px 3px 0px 0px", background: "#1b8ce8" }} />
              <div data-fu="bar" style={{ position: "absolute", left: "321.42px", top: "137px", width: "12px", height: "2px", borderRadius: "3px 3px 0px 0px", background: "#1b8ce8" }} />
              <div data-fu="bar" style={{ position: "absolute", left: "342.71px", top: "137px", width: "12px", height: "2px", borderRadius: "3px 3px 0px 0px", background: "#1b8ce8" }} />
              <div data-fu="bar" style={{ position: "absolute", left: "364px", top: "137px", width: "12px", height: "2px", borderRadius: "3px 3px 0px 0px", background: "#1b8ce8" }} />
              <div data-fu="bar" style={{ position: "absolute", left: "385.29px", top: "137px", width: "12px", height: "2px", borderRadius: "3px 3px 0px 0px", background: "#1b8ce8" }} />
              <div data-fu="bar" style={{ position: "absolute", left: "406.58px", top: "137px", width: "12px", height: "2px", borderRadius: "3px 3px 0px 0px", background: "#1b8ce8" }} />
              <div data-fu="bar" style={{ position: "absolute", left: "427.87px", top: "137px", width: "12px", height: "2px", borderRadius: "3px 3px 0px 0px", background: "#1b8ce8" }} />
              <div data-fu="bar" style={{ position: "absolute", left: "449.16px", top: "137px", width: "12px", height: "2px", borderRadius: "3px 3px 0px 0px", background: "#1b8ce8" }} />
              <div data-fu="bar" style={{ position: "absolute", left: "470.45px", top: "137px", width: "12px", height: "2px", borderRadius: "3px 3px 0px 0px", background: "#1b8ce8" }} />
              <div data-fu="bar" style={{ position: "absolute", left: "491.74px", top: "137px", width: "12px", height: "2px", borderRadius: "3px 3px 0px 0px", background: "#1b8ce8" }} />
              <div data-fu="bar" style={{ position: "absolute", left: "513.03px", top: "137px", width: "12px", height: "2px", borderRadius: "3px 3px 0px 0px", background: "#1b8ce8" }} />
              <div data-fu="bar" style={{ position: "absolute", left: "534.32px", top: "137px", width: "12px", height: "2px", borderRadius: "3px 3px 0px 0px", background: "#1b8ce8" }} />
              <div data-fu="bar" style={{ position: "absolute", left: "555.61px", top: "137px", width: "12px", height: "2px", borderRadius: "3px 3px 0px 0px", background: "#1b8ce8" }} />
              <div data-fu="bar" style={{ position: "absolute", left: "576.9px", top: "137px", width: "12px", height: "2px", borderRadius: "3px 3px 0px 0px", background: "#1b8ce8" }} />
              <div data-fu="bar" style={{ position: "absolute", left: "598.19px", top: "137px", width: "12px", height: "2px", borderRadius: "3px 3px 0px 0px", background: "#1b8ce8" }} />
              <div data-fu="bar" style={{ position: "absolute", left: "619.48px", top: "137px", width: "12px", height: "2px", borderRadius: "3px 3px 0px 0px", background: "#1b8ce8" }} />
              <div data-fu="bar" style={{ position: "absolute", left: "640.77px", top: "137px", width: "12px", height: "2px", borderRadius: "3px 3px 0px 0px", background: "#1b8ce8" }} />
              <div data-fu="bar" style={{ position: "absolute", left: "662.06px", top: "137px", width: "12px", height: "2px", borderRadius: "3px 3px 0px 0px", background: "#1b8ce8" }} />
              <div data-fu="bar" style={{ position: "absolute", left: "683.35px", top: "137px", width: "12px", height: "2px", borderRadius: "3px 3px 0px 0px", background: "#1b8ce8" }} />
              <p data-fu="cell" style={{ position: "absolute", left: "34px", top: "150px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "33px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>Oct 1</p>
              <p data-fu="cell" style={{ position: "absolute", left: "139px", top: "150px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "36px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>Oct 6</p>
              <p data-fu="cell" style={{ position: "absolute", left: "245px", top: "150px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "37px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>Oct 11</p>
              <p data-fu="cell" style={{ position: "absolute", left: "349px", top: "150px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "41px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>Oct 16</p>
              <p data-fu="cell" style={{ position: "absolute", left: "456px", top: "150px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "41px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>Oct 21</p>
              <p data-fu="cell" style={{ position: "absolute", left: "560px", top: "150px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "45px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>Oct 26</p>
              <p data-fu="cell" style={{ position: "absolute", left: "669px", top: "150px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "41px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>Oct 31</p>
              <div style={{ position: "absolute", left: "129.81px", top: "63.35px", width: "12px", height: "75.65px", borderRadius: "3px 3px 0px 0px", background: "#dfe0e5" }} />
              <div style={{ position: "absolute", left: "151.1px", top: "33.65px", width: "12px", height: "105.35px", borderRadius: "3px 3px 0px 0px", background: "#dfe0e5" }} />
              <div style={{ position: "absolute", left: "172.39px", top: "34.53px", width: "12px", height: "104.47px", borderRadius: "3px 3px 0px 0px", background: "#dfe0e5" }} />
              <div style={{ position: "absolute", left: "193.68px", top: "36.42px", width: "12px", height: "102.58px", borderRadius: "3px 3px 0px 0px", background: "#dfe0e5" }} />
              <div style={{ position: "absolute", left: "214.97px", top: "39.14px", width: "12px", height: "99.86px", borderRadius: "3px 3px 0px 0px", background: "#dfe0e5" }} />
              <div style={{ position: "absolute", left: "236.26px", top: "42.36px", width: "12px", height: "96.64px", borderRadius: "3px 3px 0px 0px", background: "#dfe0e5" }} />
              <div style={{ position: "absolute", left: "257.55px", top: "75.21px", width: "12px", height: "63.79px", borderRadius: "3px 3px 0px 0px", background: "#dfe0e5" }} />
              <div style={{ position: "absolute", left: "278.84px", top: "78.38px", width: "12px", height: "60.62px", borderRadius: "3px 3px 0px 0px", background: "#dfe0e5" }} />
              <div style={{ position: "absolute", left: "300.13px", top: "51.52px", width: "12px", height: "87.48px", borderRadius: "3px 3px 0px 0px", background: "#dfe0e5" }} />
              <div style={{ position: "absolute", left: "321.42px", top: "53.28px", width: "12px", height: "85.72px", borderRadius: "3px 3px 0px 0px", background: "#dfe0e5" }} />
              <div style={{ position: "absolute", left: "342.71px", top: "53.99px", width: "12px", height: "85.01px", borderRadius: "3px 3px 0px 0px", background: "#dfe0e5" }} />
              <div style={{ position: "absolute", left: "364px", top: "53.58px", width: "12px", height: "85.42px", borderRadius: "3px 3px 0px 0px", background: "#dfe0e5" }} />
              <div style={{ position: "absolute", left: "385.29px", top: "52.1px", width: "12px", height: "86.9px", borderRadius: "3px 3px 0px 0px", background: "#dfe0e5" }} />
              <div style={{ position: "absolute", left: "406.58px", top: "79.16px", width: "12px", height: "59.84px", borderRadius: "3px 3px 0px 0px", background: "#dfe0e5" }} />
              <div style={{ position: "absolute", left: "427.87px", top: "76.12px", width: "12px", height: "62.88px", borderRadius: "3px 3px 0px 0px", background: "#dfe0e5" }} />
              <div style={{ position: "absolute", left: "449.16px", top: "43.29px", width: "12px", height: "95.71px", borderRadius: "3px 3px 0px 0px", background: "#dfe0e5" }} />
              <div style={{ position: "absolute", left: "470.45px", top: "39.98px", width: "12px", height: "99.02px", borderRadius: "3px 3px 0px 0px", background: "#dfe0e5" }} />
              <div style={{ position: "absolute", left: "491.74px", top: "37.1px", width: "12px", height: "101.9px", borderRadius: "3px 3px 0px 0px", background: "#dfe0e5" }} />
              <div style={{ position: "absolute", left: "513.03px", top: "34.95px", width: "12px", height: "104.05px", borderRadius: "3px 3px 0px 0px", background: "#dfe0e5" }} />
              <div style={{ position: "absolute", left: "534.32px", top: "33.78px", width: "12px", height: "105.22px", borderRadius: "3px 3px 0px 0px", background: "#dfe0e5" }} />
              <div style={{ position: "absolute", left: "555.61px", top: "63.18px", width: "12px", height: "75.82px", borderRadius: "3px 3px 0px 0px", background: "#dfe0e5" }} />
              <div style={{ position: "absolute", left: "576.9px", top: "64.22px", width: "12px", height: "74.78px", borderRadius: "3px 3px 0px 0px", background: "#dfe0e5" }} />
              <div style={{ position: "absolute", left: "598.19px", top: "36.79px", width: "12px", height: "102.21px", borderRadius: "3px 3px 0px 0px", background: "#dfe0e5" }} />
              <div style={{ position: "absolute", left: "619.48px", top: "39.6px", width: "12px", height: "99.4px", borderRadius: "3px 3px 0px 0px", background: "#dfe0e5" }} />
              <div style={{ position: "absolute", left: "640.77px", top: "42.87px", width: "12px", height: "96.13px", borderRadius: "3px 3px 0px 0px", background: "#dfe0e5" }} />
              <div style={{ position: "absolute", left: "662.06px", top: "46.24px", width: "12px", height: "92.76px", borderRadius: "3px 3px 0px 0px", background: "#dfe0e5" }} />
              <div style={{ position: "absolute", left: "683.35px", top: "49.35px", width: "12px", height: "89.65px", borderRadius: "3px 3px 0px 0px", background: "#dfe0e5" }} />
            </div>
            <div style={{ alignSelf: "stretch", flexShrink: 0, borderRadius: "8px", background: "#fffbf0", display: "flex", flexDirection: "row", padding: "8px 10px 8px 10px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <AlertTriangle size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#d99a00", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "428px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#d99a00", lineHeight: "20px" }}>
                <span style={{ fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#d99a00", lineHeight: "20px" }}>{"Projected "}</span>
                <span style={{ fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>262k</span>
                <span style={{ fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#d99a00", lineHeight: "20px" }}>{" runs by Oct 31 → about "}</span>
                <span style={{ fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>12k</span>
                <span style={{ fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#d99a00", lineHeight: "20px" }}>{" over plan ("}</span>
                <span style={{ fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>$96</span>
                <span style={{ fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#d99a00", lineHeight: "20px" }}>{" overage)."}</span>
              </p>
            </div>
          </div>
          <div style={{ width: "360px", height: "316px", flexShrink: 0, borderRadius: "12px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ededed", display: "flex", flexDirection: "column", padding: "19px 19px 19px 19px", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "12px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "140px", fontFamily: "'Geist'", fontSize: "16px", fontWeight: 400, color: "#15171c", lineHeight: "24px", letterSpacing: "-0.1px" }}>Spend by workflow</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "152px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>AI + compute, this cycle</p>
              </div>
            </div>
            <div data-fu="row" style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", padding: "6px 0px 6px 0px", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <svg style={{ width: "8px", height: "8px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M8 4 C8 6.20914 6.20914 8 4 8 C1.79086 8 0 6.20914 0 4 C0 1.79086 1.79086 0 4 0 C6.20914 0 8 1.79086 8 4 Z" fill="#1b8ce8"/></svg>
                <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>Invoice Triage</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "32px", fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>$412</p>
              </div>
              <div style={{ alignSelf: "stretch", height: "4px", flexShrink: 0, borderRadius: "2px", background: "#f5f5f5", overflow: "hidden", position: "relative" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", width: "96px", height: "4px", borderRadius: "2px", background: "#1b8ce8" }} />
              </div>
            </div>
            <div data-fu="row" style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", padding: "6px 0px 6px 0px", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <svg style={{ width: "8px", height: "8px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M8 4 C8 6.20914 6.20914 8 4 8 C1.79086 8 0 6.20914 0 4 C0 1.79086 1.79086 0 4 0 C6.20914 0 8 1.79086 8 4 Z" fill="#f96cd8"/></svg>
                <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>Support Ticket Routing</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "32px", fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>$318</p>
              </div>
              <div style={{ alignSelf: "stretch", height: "4px", flexShrink: 0, borderRadius: "2px", background: "#f5f5f5", overflow: "hidden", position: "relative" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", width: "75px", height: "4px", borderRadius: "2px", background: "#f96cd8" }} />
              </div>
            </div>
            <div data-fu="row" style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", padding: "6px 0px 6px 0px", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <svg style={{ width: "8px", height: "8px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M8 4 C8 6.20914 6.20914 8 4 8 C1.79086 8 0 6.20914 0 4 C0 1.79086 1.79086 0 4 0 C6.20914 0 8 1.79086 8 4 Z" fill="#ff5601"/></svg>
                <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>Lead Qualification</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "32px", fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>$204</p>
              </div>
              <div style={{ alignSelf: "stretch", height: "4px", flexShrink: 0, borderRadius: "2px", background: "#f5f5f5", overflow: "hidden", position: "relative" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", width: "48px", height: "4px", borderRadius: "2px", background: "#ff5601" }} />
              </div>
            </div>
            <div data-fu="row" style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", padding: "6px 0px 6px 0px", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <svg style={{ width: "8px", height: "8px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M8 4 C8 6.20914 6.20914 8 4 8 C1.79086 8 0 6.20914 0 4 C0 1.79086 1.79086 0 4 0 C6.20914 0 8 1.79086 8 4 Z" fill="#697386"/></svg>
                <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>Other 9 workflows</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "32px", fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>$350</p>
              </div>
              <div style={{ alignSelf: "stretch", height: "4px", flexShrink: 0, borderRadius: "2px", background: "#f5f5f5", overflow: "hidden", position: "relative" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", width: "81px", height: "4px", borderRadius: "2px", background: "#697386" }} />
              </div>
            </div>
          </div>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, borderRadius: "12px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ededed", overflow: "hidden", display: "flex", flexDirection: "column", padding: "1px 1px 1px 1px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", height: "36px", flexShrink: 0, background: "#f9f9f9", boxShadow: "inset 0 1px 0 0 #e9e9e9, inset 0 -1px 0 0 #e9e9e9", display: "flex", flexDirection: "row", padding: "1px 6px 1px 6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "160px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "46px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>Invoice</p>
            </div>
            <div style={{ flex: "1 1 0", minWidth: 0, alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "41px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>Period</p>
            </div>
            <div style={{ width: "130px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "51px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>Amount</p>
            </div>
            <div style={{ width: "120px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "42px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>Status</p>
            </div>
            <div style={{ width: "200px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "60px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>Paid with</p>
            </div>
            <div style={{ width: "52px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, height: "20px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "0px" }}></p>
            </div>
          </div>
          <div style={{ alignSelf: "stretch", height: "48px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #e9e9e9", display: "flex", flexDirection: "row", padding: "0px 6px 1px 6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "160px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "94px", fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>FP-2026-0912</p>
            </div>
            <div style={{ flex: "1 1 0", minWidth: 0, alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "137px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>Sep 1 – Sep 30, 2026</p>
            </div>
            <div style={{ width: "130px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "71px", fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>$1,302.40</p>
            </div>
            <div style={{ width: "120px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, borderRadius: "4.58px", background: "#f6fffb", display: "flex", flexDirection: "row", padding: "2px 8px 2px 8px", gap: "3px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <CircleCheck size={12} strokeWidth={3} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#17a673", display: "block" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "28px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#17a673", lineHeight: "20px" }}>Paid</p>
              </div>
            </div>
            <div style={{ width: "200px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <CreditCard size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "116px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>Card ending 4242</p>
              </div>
            </div>
            <div style={{ width: "52px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "28px", height: "28px", flexShrink: 0, borderRadius: "7px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <Dots size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
              </div>
            </div>
          </div>
          <div style={{ alignSelf: "stretch", height: "48px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #e9e9e9", display: "flex", flexDirection: "row", padding: "0px 6px 1px 6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "160px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "94px", fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>FP-2026-0811</p>
            </div>
            <div style={{ flex: "1 1 0", minWidth: 0, alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "134px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>Aug 1 – Aug 31, 2026</p>
            </div>
            <div style={{ width: "130px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "71px", fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>$1,248.00</p>
            </div>
            <div style={{ width: "120px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, borderRadius: "4.58px", background: "#f6fffb", display: "flex", flexDirection: "row", padding: "2px 8px 2px 8px", gap: "3px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <CircleCheck size={12} strokeWidth={3} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#17a673", display: "block" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "28px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#17a673", lineHeight: "20px" }}>Paid</p>
              </div>
            </div>
            <div style={{ width: "200px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <CreditCard size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "116px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>Card ending 4242</p>
              </div>
            </div>
            <div style={{ width: "52px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "28px", height: "28px", flexShrink: 0, borderRadius: "7px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <Dots size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
              </div>
            </div>
          </div>
          <div style={{ alignSelf: "stretch", height: "48px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 6px 0px 6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "160px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "94px", fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>FP-2026-0710</p>
            </div>
            <div style={{ flex: "1 1 0", minWidth: 0, alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "124px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>Jul 1 – Jul 31, 2026</p>
            </div>
            <div style={{ width: "130px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "71px", fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>$1,200.00</p>
            </div>
            <div style={{ width: "120px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, borderRadius: "4.58px", background: "#f6fffb", display: "flex", flexDirection: "row", padding: "2px 8px 2px 8px", gap: "3px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <CircleCheck size={12} strokeWidth={3} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#17a673", display: "block" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "28px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#17a673", lineHeight: "20px" }}>Paid</p>
              </div>
            </div>
            <div style={{ width: "200px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <CreditCard size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "116px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>Card ending 4242</p>
              </div>
            </div>
            <div style={{ width: "52px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "28px", height: "28px", flexShrink: 0, borderRadius: "7px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <Dots size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
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
