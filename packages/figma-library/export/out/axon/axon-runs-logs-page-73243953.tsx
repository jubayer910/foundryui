// Runs & Logs page (axon, Templates) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist, Geist Mono. Icons: Ingot Icons.
import { AdjustmentsHorizontal, AlertCircle, AlertTriangle, Bell, Calendar, ChartLine, ChevronDown, ChevronRight, CircleCheck, Clock, CreditCard, Database, Dots, Download, File, FolderSearch, GitMerge, LayoutDashboard, Loader, PlayerPause, PlugConnected, Search, Settings, Users } from "ingotui-icons/react/stroke-rounded";
import { Category as CategorySolid } from "ingotui-icons/react/solid";

export function RunsLogsPage() {
  return (
    <div style={{ width: "1440px", height: "1019px", background: "#ffffff", overflow: "hidden", position: "relative" }}>
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
                <div style={{ width: "212px", height: "32px", flexShrink: 0, borderRadius: "6px", background: "#ffffff", boxShadow: "0px 1.4px 1px 0px rgba(0, 0, 0, 0.06), 0px 0px 1px 0px rgba(0, 0, 0, 0.25)", display: "flex", flexDirection: "row", padding: "8px 10px 8px 10px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <File size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#1b8ce8", display: "block" }} />
                  <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#000000", lineHeight: "20px" }}>Runs & Logs</p>
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
              <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "71px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#b3b3b3", lineHeight: "20px" }}>Operations</p>
            </div>
            <ChevronRight size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#686765", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "80px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#666d80", lineHeight: "20px" }}>Runs & Logs</p>
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
      <div style={{ position: "absolute", left: "265px", top: "92px", width: "1155px", height: "821px", display: "flex", flexDirection: "column", gap: "16px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "16px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "90px", fontFamily: "'Geist'", fontSize: "16px", fontWeight: 400, color: "#15171c", lineHeight: "24px", letterSpacing: "-0.1px" }}>Runs & Logs</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "305px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>Every execution, step by step · retained 90 days</p>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "28px", flexShrink: 0, borderRadius: "8px", background: "#dfe0e5", display: "flex", flexDirection: "row", padding: "2px 2px 2px 2px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <svg style={{ width: "12px", height: "12px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M12 6 C12 9.31371 9.31371 12 6 12 C2.68629 12 0 9.31371 0 6 C0 2.68629 2.68629 0 6 0 C9.31371 0 12 2.68629 12 6 Z" fill="#ffffff"/></svg>
              </div>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "50px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>Live tail</p>
            </div>
            <div style={{ width: "170px", height: "32px", flexShrink: 0, borderRadius: "9px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e8e8e8", display: "flex", flexDirection: "row", padding: "7px 9px 7px 11px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <Calendar size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
              <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>Last 24 hours</p>
              <ChevronDown size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
            </div>
            <div style={{ flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e8e8e8", display: "flex", flexDirection: "row", padding: "7px 13px 7px 13px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <Download size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "42px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#686765", lineHeight: "20px" }}>Export</p>
            </div>
          </div>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "14px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, borderRadius: "12px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ededed", display: "flex", flexDirection: "row", padding: "15px 17px 15px 17px", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "72px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#697386", lineHeight: "20px" }}>Runs / min</p>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "33px", fontFamily: "'Geist'", fontSize: "20px", fontWeight: 500, color: "#15171c", lineHeight: "25px", letterSpacing: "-0.4px" }}>128</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "28px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#17a673", lineHeight: "20px" }}>+6%</p>
              </div>
            </div>
            <svg style={{ width: "90px", height: "32px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="90" height="32" viewBox="0 0 90 32" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 1 2)" d="M-0.416025 27.376 C-0.760672 27.6057 -0.853802 28.0714 -0.624038 28.416 C-0.394273 28.7607 0.0713786 28.8538 0.416025 28.624 L0 28 L-0.416025 27.376 Z M14.7 18.7 L14.8355 19.4377 C14.8403 19.4368 14.8452 19.4358 14.85 19.4349 L14.7 18.7 Z M29.3 22.2 L29.4923 22.9249 C29.4969 22.9237 29.5015 22.9224 29.506 22.9211 L29.3 22.2 Z M88.1819 0.727607 C88.5837 0.627145 88.8281 0.219944 88.7276 -0.181902 C88.6271 -0.583748 88.2199 -0.828068 87.8181 -0.727607 L88 0 L88.1819 0.727607 Z M0 28 L0.416025 28.624 C1.04841 28.2025 1.99225 27.4518 3.08569 26.5866 C4.19392 25.7097 5.48636 24.6901 6.85412 23.6937 C8.22288 22.6965 9.65475 21.7317 11.0377 20.9634 C12.4289 20.1905 13.7274 19.6412 14.8355 19.4377 L14.7 18.7 L14.5645 17.9623 C13.2226 18.2088 11.7586 18.847 10.3092 19.6522 C8.8515 20.462 7.36462 21.466 5.97088 22.4813 C4.57614 23.4974 3.26233 24.5341 2.15493 25.4103 C1.03275 26.2982 0.151595 26.9975 -0.416025 27.376 L0 28 Z M14.7 18.7 L14.85 19.4349 C15.9072 19.2191 16.9896 19.3628 18.1341 19.7232 C19.2883 20.0867 20.4487 20.6506 21.6758 21.2388 C24.0434 22.3738 26.7291 23.658 29.4923 22.9249 L29.3 22.2 L29.1077 21.4751 C26.9709 22.042 24.8066 21.0762 22.3242 19.8862 C21.1263 19.3119 19.8617 18.6946 18.5847 18.2924 C17.2979 17.8872 15.9428 17.6809 14.55 17.9651 L14.7 18.7 Z M29.3 22.2 L29.506 22.9211 C30.887 22.5266 32.2108 21.6241 33.4639 20.5469 C34.7228 19.4646 35.9745 18.148 37.1934 16.867 C38.4245 15.573 39.6228 14.3146 40.8139 13.2906 C42.0108 12.2616 43.137 11.5266 44.206 11.2211 L44 10.5 L43.794 9.77886 C42.413 10.1734 41.0892 11.0759 39.8361 12.1532 C38.5772 13.2354 37.3255 14.552 36.1066 15.833 C34.8755 17.127 33.6772 18.3854 32.4861 19.4094 C31.2892 20.4384 30.163 21.1734 29.094 21.4789 L29.3 22.2 Z M44 10.5 L44.206 11.2211 C45.2517 10.9224 46.325 11.0135 47.4656 11.3452 C48.6179 11.6803 49.7852 12.2437 51.0201 12.8485 C52.231 13.4416 53.511 14.0768 54.8021 14.4786 C56.104 14.8838 57.4756 15.072 58.8784 14.7285 L58.7 14 L58.5216 13.2715 C57.4744 13.528 56.396 13.4037 55.2479 13.0464 C54.089 12.6857 52.919 12.1084 51.6799 11.5015 C50.4648 10.9063 49.1821 10.2822 47.8844 9.90484 C46.575 9.52402 45.1983 9.37763 43.794 9.77886 L44 10.5 Z M58.7 14 L58.8784 14.7285 C60.2328 14.3968 61.5401 13.6758 62.7928 12.7886 C64.0477 11.8999 65.2886 10.8143 66.5024 9.7194 C68.9742 7.48967 71.2965 5.26891 73.6187 4.17893 L73.3 3.5 L72.9813 2.82107 C70.4035 4.03109 67.8758 6.46033 65.4976 8.6056 C64.2864 9.69825 63.1023 10.7314 61.9259 11.5645 C60.7474 12.3992 59.6172 13.0032 58.5216 13.2715 L58.7 14 Z M73.3 3.5 L73.6187 4.17893 C75.9777 3.07165 78.9739 2.36017 81.7243 1.84992 C83.0941 1.59579 84.3865 1.39432 85.4977 1.21721 C86.5937 1.04255 87.5431 0.887302 88.1819 0.727607 L88 0 L87.8181 -0.727607 C87.2569 -0.587302 86.3813 -0.442547 85.2616 -0.26409 C84.1572 -0.0880659 82.8434 0.116709 81.4507 0.375083 C78.6761 0.889826 75.5223 1.62835 72.9813 2.82107 L73.3 3.5 Z" fill="#1b8ce8"/></svg>
          </div>
          <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, borderRadius: "12px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ededed", display: "flex", flexDirection: "row", padding: "15px 17px 15px 17px", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "85px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#697386", lineHeight: "20px" }}>p95 duration</p>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "40px", fontFamily: "'Geist'", fontSize: "20px", fontWeight: 500, color: "#15171c", lineHeight: "25px", letterSpacing: "-0.4px" }}>6.4s</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "36px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#17a673", lineHeight: "20px" }}>−0.3s</p>
              </div>
            </div>
            <svg style={{ width: "90px", height: "32px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="90" height="32" viewBox="0 0 90 32" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 1 2)" d="M0.33541 -0.67082 C-0.0350737 -0.856062 -0.485578 -0.705894 -0.67082 -0.33541 C-0.856062 0.0350737 -0.705894 0.485578 -0.33541 0.67082 L0 0 L0.33541 -0.67082 Z M87.8181 28.7276 C88.2199 28.8281 88.6271 28.5837 88.7276 28.1819 C88.8281 27.7801 88.5837 27.3729 88.1819 27.2724 L88 28 L87.8181 28.7276 Z M0 0 L-0.33541 0.67082 C2.07489 1.87597 9.48486 5.38059 14.3813 7.67893 L14.7 7 L15.0187 6.32107 C10.1151 4.01941 2.72511 0.524032 0.33541 -0.67082 L0 0 Z M14.7 7 L14.3813 7.67893 C15.5539 8.22933 16.7349 8.96634 17.9432 9.77235 C19.1321 10.5655 20.3788 11.4477 21.5984 12.2209 C24.0302 13.7628 26.656 15.0794 29.3912 14.7444 L29.3 14 L29.2088 13.2556 C27.044 13.5206 24.8197 12.4872 22.4016 10.9541 C21.1962 10.1898 20.0179 9.35328 18.7756 8.52452 C17.5526 7.70866 16.2961 6.92067 15.0187 6.32107 L14.7 7 Z M29.3 14 L29.3912 14.7444 C30.8579 14.5648 32.2296 13.6212 33.4777 12.4941 C34.7385 11.3555 35.9984 9.9092 37.2054 8.57899 C38.4351 7.2238 39.6111 5.98749 40.763 5.15883 C41.9185 4.32758 42.9121 4.00574 43.8216 4.22847 L44 3.5 L44.1784 2.77153 C42.6379 2.39426 41.1815 3.00992 39.887 3.94117 C38.5889 4.87501 37.3149 6.2262 36.0946 7.57101 C34.8516 8.9408 33.6615 10.3069 32.4723 11.3809 C31.2704 12.4663 30.1921 13.1352 29.2088 13.2556 L29.3 14 Z M44 3.5 L43.8216 4.22847 C44.8047 4.46924 45.8989 5.33445 47.1065 6.73766 C48.2943 8.11787 49.4946 9.90013 50.7203 11.7949 C51.9349 13.6726 53.1765 15.6644 54.4152 17.3944 C55.648 19.1162 56.9325 20.6592 58.2641 21.6103 L58.7 21 L59.1359 20.3897 C58.0175 19.5908 56.852 18.2213 55.6348 16.5212 C54.4235 14.8294 53.2151 12.8899 51.9797 10.9801 C50.7554 9.08737 49.5057 7.22588 48.2435 5.75921 C47.0011 4.31555 45.6452 3.13076 44.1784 2.77153 L44 3.5 Z M58.7 21 L58.2641 21.6103 C60.8563 23.4619 63.4205 24.0619 65.9117 24.3573 C67.1346 24.5023 68.3914 24.5782 69.5725 24.686 C70.7747 24.7957 71.9503 24.9416 73.1216 25.2285 L73.3 24.5 L73.4784 23.7715 C72.1997 23.4584 70.9378 23.3043 69.7088 23.1922 C68.4586 23.0781 67.2904 23.0102 66.0883 22.8677 C63.7295 22.5881 61.4437 22.0381 59.1359 20.3897 L58.7 21 Z M73.3 24.5 L73.1216 25.2285 C78.0582 26.4374 85.4038 28.124 87.8181 28.7276 L88 28 L88.1819 27.2724 C85.7962 26.676 78.3418 24.9626 73.4784 23.7715 L73.3 24.5 Z" fill="#ff5601"/></svg>
          </div>
          <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, borderRadius: "12px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ededed", display: "flex", flexDirection: "row", padding: "15px 17px 15px 17px", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "74px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#697386", lineHeight: "20px" }}>Failure rate</p>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "40px", fontFamily: "'Geist'", fontSize: "20px", fontWeight: 500, color: "#15171c", lineHeight: "25px", letterSpacing: "-0.4px" }}>1.8%</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "53px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#e5484d", lineHeight: "20px" }}>+0.4 pts</p>
              </div>
            </div>
            <svg style={{ width: "90px", height: "32px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="90" height="32" viewBox="0 0 90 32" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 1 1.985)" d="M-0.093026 25.071 C-0.504041 25.1224 -0.795585 25.4972 -0.744208 25.9082 C-0.692832 26.3192 -0.317989 26.6108 0.093026 26.5594 L0 25.8152 L-0.093026 25.071 Z M44 21.5152 L43.6279 20.8639 L43.618 20.8698 L44 21.5152 Z M87.5061 13.4796 C87.8178 13.7524 88.2917 13.7208 88.5644 13.4091 C88.8372 13.0973 88.8056 12.6235 88.4939 12.3508 L88 12.9152 L87.5061 13.4796 Z M0 25.8152 L0.093026 26.5594 C0.734464 26.4792 1.68486 26.2765 2.78049 26.0369 C3.89231 25.7939 5.1851 25.5056 6.55574 25.2389 C9.31376 24.7023 12.3004 24.2718 14.639 24.4627 L14.7 23.7152 L14.761 22.9677 C12.1996 22.7586 9.03624 23.2281 6.26926 23.7665 C4.8774 24.0373 3.56394 24.3302 2.46013 24.5716 C1.34014 24.8164 0.465536 25.0012 -0.093026 25.071 L0 25.8152 Z M14.7 23.7152 L14.639 24.4627 C16.9311 24.6498 19.217 25.7519 21.6961 26.8508 C24.1032 27.9179 26.6949 28.9804 29.361 28.7627 L29.3 28.0152 L29.239 27.2677 C27.0051 27.45 24.7468 26.5625 22.3039 25.4795 C19.933 24.4285 17.3689 23.1806 14.761 22.9677 L14.7 23.7152 Z M29.3 28.0152 L29.361 28.7627 C31.9468 28.5516 34.495 27.606 36.9827 26.3749 C39.4657 25.146 41.9533 23.598 44.382 22.1606 L44 21.5152 L43.618 20.8698 C41.1467 22.3324 38.7343 23.8343 36.3173 25.0305 C33.905 26.2244 31.5532 27.0788 29.239 27.2677 L29.3 28.0152 Z M44 21.5152 L44.3721 22.1664 C49.3189 19.3396 54.3245 14.9605 59.1441 11.4196 L58.7 10.8152 L58.2559 10.2108 C53.2755 13.8699 48.4811 18.0908 43.6279 20.864 L44 21.5152 Z M58.7 10.8152 L59.1441 11.4196 C60.417 10.4844 61.6688 9.30077 62.889 8.0837 C64.1255 6.85039 65.3112 5.60219 66.5161 4.45936 C67.7155 3.32178 68.8788 2.34356 70.0199 1.67474 C71.1593 1.00692 72.2222 0.679701 73.239 0.762706 L73.3 0.015193 L73.361 -0.73232 C71.9278 -0.849315 70.5532 -0.37653 69.2614 0.380645 C67.9712 1.13682 66.7095 2.2086 65.4839 3.37102 C64.2638 4.5282 63.0245 5.82999 61.8297 7.02168 C60.6187 8.22962 59.433 9.34601 58.2559 10.2108 L58.7 10.8152 Z M73.3 0.015193 L73.239 0.762706 C74.2459 0.8449 75.4852 1.4619 76.8769 2.50449 C78.2478 3.53155 79.6737 4.89978 81.0433 6.34382 C82.411 7.78574 83.7028 9.28184 84.8132 10.5614 C85.9033 11.8176 86.8572 12.9119 87.5061 13.4796 L88 12.9152 L88.4939 12.3508 C87.9428 11.8685 87.0717 10.8753 85.9461 9.57831 C84.841 8.30479 83.5265 6.78214 82.1317 5.31156 C80.7388 3.84311 79.246 2.40509 77.7762 1.30402 C76.3273 0.21849 74.8042 -0.614514 73.361 -0.73232 L73.3 0.015193 Z" fill="#e5484d"/></svg>
          </div>
          <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, borderRadius: "12px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ededed", display: "flex", flexDirection: "row", padding: "15px 17px 15px 17px", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "57px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#697386", lineHeight: "20px" }}>In queue</p>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "20px", fontFamily: "'Geist'", fontSize: "20px", fontWeight: 500, color: "#15171c", lineHeight: "25px", letterSpacing: "-0.4px" }}>14</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "45px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>normal</p>
              </div>
            </div>
            <svg style={{ width: "90px", height: "32px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="90" height="32" viewBox="0 0 90 32" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 1 1.952)" d="M-0.651182 24.5756 C-0.85669 24.9352 -0.731742 25.3934 -0.372104 25.5989 C-0.0124662 25.8044 0.445675 25.6795 0.651182 25.3198 L0 24.9477 L-0.651182 24.5756 Z M29.3 18.7477 L28.7808 19.289 L28.7867 19.2945 L29.3 18.7477 Z M58.7 6.24771 L58.55 5.51286 C58.5452 5.51383 58.5405 5.51485 58.5357 5.51592 L58.7 6.24771 Z M73.3 21.8477 L73.1357 22.5795 C73.1405 22.5806 73.1453 22.5816 73.15 22.5826 L73.3 21.8477 Z M88.416 13.0717 C88.7607 12.842 88.8538 12.3763 88.624 12.0317 C88.3943 11.687 87.9286 11.5939 87.584 11.8237 L88 12.4477 L88.416 13.0717 Z M0 24.9477 L0.651182 25.3198 C1.27374 24.2303 2.20494 22.1679 3.30385 19.7345 C4.41252 17.2795 5.71022 14.4042 7.08452 11.6307 C8.46103 8.85279 9.90129 6.20406 11.2902 4.19627 C11.9851 3.19182 12.6523 2.36957 13.2767 1.77606 C13.9127 1.17147 14.4401 0.866214 14.85 0.782563 L14.7 0.0477102 L14.55 -0.687143 C13.7349 -0.520794 12.9592 0.00832256 12.2432 0.688887 C11.5156 1.38054 10.7821 2.29423 10.0566 3.3429 C8.60496 5.44136 7.12647 8.16763 5.74048 10.9647 C4.35228 13.7662 3.04373 16.6659 1.93678 19.1172 C0.820056 21.59 -0.0737397 23.5651 -0.651182 24.5756 L0 24.9477 Z M14.7 0.0477102 L14.85 0.782563 C15.6521 0.618868 16.6142 1.08016 17.8041 2.39089 C18.9603 3.66448 20.1384 5.52964 21.35 7.63439 C22.5359 9.69446 23.7854 12.0427 24.9954 14.0847 C26.2133 16.1401 27.4758 18.0372 28.7808 19.289 L29.3 18.7477 L29.8192 18.2064 C28.6742 17.1082 27.4992 15.3678 26.2859 13.3201 C25.0646 11.2589 23.8891 9.03846 22.65 6.88603 C21.4366 4.77828 20.1897 2.78719 18.9147 1.38266 C17.6733 0.0152605 16.1979 -1.02345 14.55 -0.687143 L14.7 0.0477102 Z M29.3 18.7477 L28.7867 19.2945 C29.9964 20.4302 31.2032 21.6988 32.439 22.9614 C33.6649 24.2139 34.9146 25.4553 36.1739 26.4898 C38.6492 28.523 41.4206 29.9691 44.2954 28.7371 L44 28.0477 L43.7046 27.3584 C41.6794 28.2263 39.5508 27.3224 37.1261 25.3307 C35.9354 24.3526 34.7351 23.1628 33.511 21.9122 C32.2968 20.6716 31.0536 19.3652 29.8133 18.2009 L29.3 18.7477 Z M44 28.0477 L44.2954 28.7371 C45.0592 28.4097 45.7607 27.7922 46.406 27.0424 C47.058 26.2847 47.6957 25.3409 48.3193 24.2941 C49.5646 22.2037 50.8056 19.6131 52.0248 17.1001 C53.2539 14.5667 54.4604 12.1131 55.6583 10.2244 C56.2568 9.28101 56.8362 8.50608 57.3952 7.94208 C57.9613 7.37091 58.4515 7.07215 58.8643 6.9795 L58.7 6.24771 L58.5357 5.51592 C57.7235 5.69827 56.9887 6.22139 56.3298 6.88615 C55.6638 7.55809 55.0182 8.43316 54.3917 9.42098 C53.1396 11.3948 51.8961 13.9288 50.6752 16.4453 C49.4444 18.9823 48.2354 21.5042 47.0307 23.5264 C46.4293 24.5358 45.842 25.3982 45.269 26.064 C44.6893 26.7376 44.1658 27.1607 43.7046 27.3584 L44 28.0477 Z M58.7 6.24771 L58.85 6.98256 C59.6455 6.8202 60.6052 7.30143 61.8058 8.6147 C62.9676 9.88549 64.1456 11.7046 65.3637 13.6572 C66.5642 15.5818 67.8014 17.6324 69.0445 19.2607 C69.6684 20.0778 70.3123 20.8139 70.9763 21.3879 C71.6366 21.9588 72.3572 22.4047 73.1357 22.5795 L73.3 21.8477 L73.4643 21.1159 C73.0178 21.0157 72.5165 20.7367 71.9573 20.2532 C71.4017 19.7729 70.8285 19.1255 70.2367 18.3504 C69.0486 16.7942 67.8608 14.8261 66.6363 12.8633 C65.4294 10.9283 64.1824 8.99118 62.9129 7.60259 C61.6823 6.25649 60.2045 5.17522 58.55 5.51286 L58.7 6.24771 Z M73.3 21.8477 L73.15 22.5826 C74.6162 22.8818 76.1812 22.4362 77.6617 21.6968 C79.1555 20.9507 80.6652 19.8538 82.0643 18.7017 C83.4665 17.5469 84.7863 16.3122 85.8915 15.2803 C87.0248 14.2221 87.8807 13.4286 88.416 13.0717 L88 12.4477 L87.584 11.8237 C86.9193 12.2668 85.9502 13.1733 84.8678 14.1839 C83.7574 15.2207 82.471 16.4235 81.1107 17.5438 C79.7473 18.6666 78.3382 19.6822 76.9914 20.3549 C75.6313 21.0342 74.4338 21.3136 73.45 21.1129 L73.3 21.8477 Z" fill="#ef0c78"/></svg>
          </div>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, borderRadius: "9px", background: "#f5f5f5", display: "flex", flexDirection: "row", padding: "3px 3px 3px 3px", gap: "2px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, borderRadius: "6px", background: "#ffffff", boxShadow: "0px 1.4px 1px 0px rgba(0, 0, 0, 0.06), 0px 0px 1px 0px rgba(0, 0, 0, 0.25)", display: "flex", flexDirection: "row", padding: "4px 10px 4px 10px", gap: "6px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "17px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>All</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "43px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#929292", lineHeight: "20px" }}>18,402</p>
            </div>
            <div style={{ flexShrink: 0, borderRadius: "6px", display: "flex", flexDirection: "row", padding: "4px 10px 4px 10px", gap: "6px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "72px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#697386", lineHeight: "20px" }}>Succeeded</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "41px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#b3b3b3", lineHeight: "20px" }}>17,945</p>
            </div>
            <div style={{ flexShrink: 0, borderRadius: "6px", display: "flex", flexDirection: "row", padding: "4px 10px 4px 10px", gap: "6px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "39px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#697386", lineHeight: "20px" }}>Failed</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "23px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#b3b3b3", lineHeight: "20px" }}>331</p>
            </div>
            <div style={{ flexShrink: 0, borderRadius: "6px", display: "flex", flexDirection: "row", padding: "4px 10px 4px 10px", gap: "6px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "54px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#697386", lineHeight: "20px" }}>Running</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "14px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#b3b3b3", lineHeight: "20px" }}>12</p>
            </div>
            <div style={{ flexShrink: 0, borderRadius: "6px", display: "flex", flexDirection: "row", padding: "4px 10px 4px 10px", gap: "6px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "50px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#697386", lineHeight: "20px" }}>Queued</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "14px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#b3b3b3", lineHeight: "20px" }}>14</p>
            </div>
          </div>
          <div style={{ flex: "1 1 0", minWidth: 0, height: "1px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }} />
          <div style={{ width: "250px", height: "32px", flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e8e8e8", display: "flex", flexDirection: "row", padding: "7px 7px 7px 11px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <Search size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#979797", display: "block" }} />
            <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#979797", lineHeight: "20px" }}>Run ID, workflow or error</p>
            <div style={{ height: "20px", flexShrink: 0, borderRadius: "5px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e8e8e8, 0px 1px 2px 0px rgba(79, 79, 79, 0.12)", display: "flex", flexDirection: "row", padding: "1px 6px 1px 6px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "8px", fontFamily: "'Geist Mono'", fontSize: "12px", fontWeight: 400, color: "#697386", lineHeight: "18px" }}>/</p>
            </div>
          </div>
          <div style={{ flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e8e8e8", display: "flex", flexDirection: "row", padding: "7px 13px 7px 13px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <AdjustmentsHorizontal size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "42px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#686765", lineHeight: "20px" }}>Status</p>
            <ChevronDown size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
          </div>
          <div style={{ flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e8e8e8", display: "flex", flexDirection: "row", padding: "7px 13px 7px 13px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <GitMerge size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "87px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#686765", lineHeight: "20px" }}>All workflows</p>
            <ChevronDown size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
          </div>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, borderRadius: "12px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ededed", overflow: "hidden", display: "flex", flexDirection: "column", padding: "1px 1px 1px 1px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", height: "36px", flexShrink: 0, background: "#f9f9f9", boxShadow: "inset 0 1px 0 0 #e9e9e9, inset 0 -1px 0 0 #e9e9e9", display: "flex", flexDirection: "row", padding: "1px 6px 1px 6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "110px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "26px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>Run</p>
            </div>
            <div style={{ flex: "1 1 0", minWidth: 0, alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "61px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>Workflow</p>
            </div>
            <div style={{ width: "130px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "42px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>Status</p>
            </div>
            <div style={{ width: "190px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "45px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>Trigger</p>
            </div>
            <div style={{ width: "110px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "38px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>Steps</p>
            </div>
            <div style={{ width: "90px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "55px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>Duration</p>
            </div>
            <div style={{ width: "110px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "48px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>Started</p>
            </div>
            <div style={{ width: "52px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, height: "20px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "0px" }}></p>
            </div>
          </div>
          <div style={{ alignSelf: "stretch", height: "48px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #e9e9e9", display: "flex", flexDirection: "row", padding: "0px 6px 1px 6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "110px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "55px", fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>R-48231</p>
            </div>
            <div style={{ flex: "1 1 0", minWidth: 0, alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "24px", height: "24px", flexShrink: 0, borderRadius: "7px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ededed, 0px 1px 2px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <svg style={{ width: "13px", height: "13px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 1.624)" d="M13 1.33225 L13 8.86629 C13 9.35595 12.6035 9.75245 12.1138 9.75245 L10.0452 9.75245 L10.0452 4.73012 L6.5 7.3897 L2.95479 4.73012 L2.95479 9.753 L0.886167 9.753 C0.769748 9.753 0.65447 9.73006 0.54692 9.68549 C0.43937 9.64092 0.341656 9.5756 0.259361 9.49325 C0.177066 9.41091 0.111802 9.31315 0.0673001 9.20557 C0.0227979 9.098 -7.0995e-05 8.98271 1.65561e-07 8.86629 L1.65561e-07 1.33225 C1.65561e-07 0.236454 1.25071 -0.389171 2.12713 0.268413 L2.95479 0.889704 L6.5 3.5482 L10.0452 0.888621 L10.8729 0.268413 C11.7488 -0.388629 13 0.236454 13 1.33225 Z" fill="#ea4335"/></svg>
                </div>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "88px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>Invoice Triage</p>
              </div>
            </div>
            <div style={{ width: "130px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, borderRadius: "4.58px", background: "#eff8ff", display: "flex", flexDirection: "row", padding: "2px 8px 2px 8px", gap: "3px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <Loader size={12} strokeWidth={3} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#1b8ce8", display: "block" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "54px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#1b8ce8", lineHeight: "20px" }}>Running</p>
              </div>
            </div>
            <div style={{ width: "190px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>Email · finance@</p>
            </div>
            <div style={{ width: "110px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "3px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "8px", height: "8px", flexShrink: 0, borderRadius: "2px", background: "#17a673" }} />
                <div style={{ width: "8px", height: "8px", flexShrink: 0, borderRadius: "2px", background: "#17a673" }} />
                <div style={{ width: "8px", height: "8px", flexShrink: 0, borderRadius: "2px", background: "#17a673" }} />
                <div style={{ width: "8px", height: "8px", flexShrink: 0, borderRadius: "2px", background: "#1b8ce8" }} />
                <div style={{ width: "8px", height: "8px", flexShrink: 0, borderRadius: "2px", background: "#dfe0e5" }} />
                <div style={{ width: "8px", height: "8px", flexShrink: 0, borderRadius: "2px", background: "#dfe0e5" }} />
              </div>
            </div>
            <div style={{ width: "90px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "32px", fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>3.1s</p>
            </div>
            <div style={{ width: "110px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "63px", fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>09:42:18</p>
            </div>
            <div style={{ width: "52px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "28px", height: "28px", flexShrink: 0, borderRadius: "7px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <Dots size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
              </div>
            </div>
          </div>
          <div style={{ alignSelf: "stretch", height: "48px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #e9e9e9", display: "flex", flexDirection: "row", padding: "0px 6px 1px 6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "110px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "55px", fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>R-48230</p>
            </div>
            <div style={{ flex: "1 1 0", minWidth: 0, alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "24px", height: "24px", flexShrink: 0, borderRadius: "7px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ededed, 0px 1px 2px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <svg style={{ width: "13px", height: "13px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0.297 0)" d="M9.54175 4.2954 L9.54175 2.75382 C9.74576 2.65843 9.91854 2.50713 10.04 2.31748 C10.1615 2.12783 10.2267 1.90762 10.228 1.6824 L10.228 1.64611 C10.2272 1.33128 10.1018 1.02958 9.8792 0.806912 C9.65663 0.584242 9.35499 0.458695 9.04016 0.457695 L9.00387 0.457695 C8.68913 0.458694 8.38757 0.584166 8.16502 0.80672 C7.94247 1.02927 7.817 1.33083 7.816 1.64557 L7.816 1.68186 C7.81699 1.90577 7.88116 2.12485 8.00113 2.31391 C8.1211 2.50296 8.292 2.65432 8.49416 2.75057 L8.5012 2.75382 L8.5012 4.29865 C7.91179 4.38871 7.35683 4.63357 6.893 5.00824 L6.8995 5.00282 L2.65933 1.70136 C2.74006 1.39893 2.71339 1.07785 2.58386 0.792883 C2.45434 0.507913 2.22998 0.276692 1.94904 0.138641 C1.6681 0.000591105 1.34798 -0.0357408 1.04325 0.0358402 C0.738519 0.107421 0.468051 0.282483 0.277959 0.531179 C0.0878671 0.779874 -0.0100788 1.0868 0.000820698 1.39964 C0.0117202 1.71247 0.13079 2.01184 0.33773 2.2467 C0.544669 2.48157 0.826665 2.63738 1.13564 2.68758 C1.44461 2.73778 1.76143 2.67925 2.03208 2.52199 L2.02558 2.52524 L6.19479 5.77036 C5.82622 6.32294 5.63049 6.97273 5.63254 7.63694 C5.63254 8.3644 5.86275 9.03878 6.25383 9.59074 L6.24679 9.5799 L4.9782 10.849 C4.87665 10.8162 4.77075 10.7989 4.66404 10.7976 L4.66295 10.7976 C4.44516 10.7976 4.23225 10.8622 4.05116 10.9832 C3.87006 11.1042 3.72892 11.2761 3.64557 11.4774 C3.56222 11.6786 3.54042 11.9 3.58291 12.1136 C3.6254 12.3272 3.73028 12.5234 3.88428 12.6775 C4.03829 12.8315 4.23451 12.9363 4.44812 12.9788 C4.66173 13.0213 4.88315 12.9995 5.08437 12.9162 C5.28559 12.8328 5.45757 12.6917 5.57858 12.5106 C5.69958 12.3295 5.76416 12.1166 5.76416 11.8988 C5.76269 11.7892 5.74443 11.6805 5.71 11.5765 L5.7127 11.5841 L6.96775 10.329 C7.37681 10.6412 7.85168 10.8559 8.35622 10.9569 C8.86077 11.0579 9.3817 11.0425 9.8794 10.9119 C10.3771 10.7812 10.8384 10.5388 11.2284 10.2031 C11.6183 9.86734 11.9265 9.44708 12.1296 8.97429 C12.3326 8.5015 12.4252 7.98863 12.4002 7.47468 C12.3752 6.96073 12.2334 6.45925 11.9854 6.00838 C11.7375 5.5575 11.39 5.16912 10.9693 4.87275 C10.5487 4.57639 10.066 4.37986 9.558 4.29811 L9.5385 4.2954 L9.54175 4.2954 Z M9.01958 9.37515 C8.67635 9.37419 8.3411 9.27154 8.05617 9.08016 C7.77125 8.88878 7.54942 8.61726 7.41872 8.29989 C7.28801 7.98251 7.25428 7.63353 7.3218 7.297 C7.38931 6.96047 7.55503 6.6515 7.79804 6.4091 C8.04104 6.1667 8.35043 6.00175 8.68712 5.93507 C9.02382 5.8684 9.37272 5.903 9.68976 6.03449 C10.0068 6.16599 10.2778 6.38849 10.4684 6.67389 C10.6591 6.95929 10.7609 7.2948 10.761 7.63803 L10.761 7.63911 C10.7611 7.86725 10.7162 8.09317 10.629 8.30396 C10.5417 8.51475 10.4137 8.70628 10.2524 8.8676 C10.0911 9.02892 9.89956 9.15688 9.68877 9.24415 C9.47798 9.33142 9.25206 9.37631 9.02391 9.37624 L9.01958 9.37515 Z" fill="#ff7a59"/></svg>
                </div>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "116px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>Lead Qualification</p>
              </div>
            </div>
            <div style={{ width: "130px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, borderRadius: "4.58px", background: "#f6fffb", display: "flex", flexDirection: "row", padding: "2px 8px 2px 8px", gap: "3px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <CircleCheck size={12} strokeWidth={3} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#17a673", display: "block" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "72px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#17a673", lineHeight: "20px" }}>Succeeded</p>
              </div>
            </div>
            <div style={{ width: "190px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>New contact</p>
            </div>
            <div style={{ width: "110px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "3px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "8px", height: "8px", flexShrink: 0, borderRadius: "2px", background: "#17a673" }} />
                <div style={{ width: "8px", height: "8px", flexShrink: 0, borderRadius: "2px", background: "#17a673" }} />
                <div style={{ width: "8px", height: "8px", flexShrink: 0, borderRadius: "2px", background: "#17a673" }} />
                <div style={{ width: "8px", height: "8px", flexShrink: 0, borderRadius: "2px", background: "#17a673" }} />
              </div>
            </div>
            <div style={{ width: "90px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "32px", fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>2.4s</p>
            </div>
            <div style={{ width: "110px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "63px", fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>09:42:11</p>
            </div>
            <div style={{ width: "52px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "28px", height: "28px", flexShrink: 0, borderRadius: "7px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <Dots size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
              </div>
            </div>
          </div>
          <div style={{ alignSelf: "stretch", height: "48px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #e9e9e9", display: "flex", flexDirection: "row", padding: "0px 6px 1px 6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "110px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "55px", fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>R-48229</p>
            </div>
            <div style={{ flex: "1 1 0", minWidth: 0, alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "24px", height: "24px", flexShrink: 0, borderRadius: "7px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ededed, 0px 1px 2px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <svg style={{ width: "13px", height: "13px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 1.573)" d="M6.99508 0 L6.99508 7.25075 L13 0.000541627 L6.99508 0 Z M0 0.00108325 C0 1.65858 1.34496 3.00408 3.00246 3.00408 C4.65996 3.00408 6.00438 1.65858 6.00492 0.00108325 L0 0.00108325 Z M6.00492 2.60487 L0 9.854 L6.00492 9.854 L6.00492 2.60487 Z M9.997 6.85154 C8.33788 6.85154 6.99508 8.19487 6.99508 9.854 L13 9.854 C13 8.1965 11.6567 6.85154 9.99754 6.85154 L9.997 6.85154 Z" fill="#03363d"/></svg>
                </div>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "147px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>Support Ticket Routing</p>
              </div>
            </div>
            <div style={{ width: "130px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, borderRadius: "4.58px", background: "#f6fffb", display: "flex", flexDirection: "row", padding: "2px 8px 2px 8px", gap: "3px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <CircleCheck size={12} strokeWidth={3} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#17a673", display: "block" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "72px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#17a673", lineHeight: "20px" }}>Succeeded</p>
              </div>
            </div>
            <div style={{ width: "190px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>New ticket #88231</p>
            </div>
            <div style={{ width: "110px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "3px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "8px", height: "8px", flexShrink: 0, borderRadius: "2px", background: "#17a673" }} />
                <div style={{ width: "8px", height: "8px", flexShrink: 0, borderRadius: "2px", background: "#17a673" }} />
                <div style={{ width: "8px", height: "8px", flexShrink: 0, borderRadius: "2px", background: "#17a673" }} />
              </div>
            </div>
            <div style={{ width: "90px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "32px", fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>1.1s</p>
            </div>
            <div style={{ width: "110px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "63px", fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>09:42:07</p>
            </div>
            <div style={{ width: "52px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "28px", height: "28px", flexShrink: 0, borderRadius: "7px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <Dots size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
              </div>
            </div>
          </div>
          <div style={{ alignSelf: "stretch", height: "48px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #e9e9e9", display: "flex", flexDirection: "row", padding: "0px 6px 1px 6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "110px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "55px", fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>R-48228</p>
            </div>
            <div style={{ flex: "1 1 0", minWidth: 0, alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "24px", height: "24px", flexShrink: 0, borderRadius: "7px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ededed, 0px 1px 2px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <svg style={{ width: "13px", height: "13px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 1.624)" d="M13 1.33225 L13 8.86629 C13 9.35595 12.6035 9.75245 12.1138 9.75245 L10.0452 9.75245 L10.0452 4.73012 L6.5 7.3897 L2.95479 4.73012 L2.95479 9.753 L0.886167 9.753 C0.769748 9.753 0.65447 9.73006 0.54692 9.68549 C0.43937 9.64092 0.341656 9.5756 0.259361 9.49325 C0.177066 9.41091 0.111802 9.31315 0.0673001 9.20557 C0.0227979 9.098 -7.0995e-05 8.98271 1.65561e-07 8.86629 L1.65561e-07 1.33225 C1.65561e-07 0.236454 1.25071 -0.389171 2.12713 0.268413 L2.95479 0.889704 L6.5 3.5482 L10.0452 0.888621 L10.8729 0.268413 C11.7488 -0.388629 13 0.236454 13 1.33225 Z" fill="#ea4335"/></svg>
                </div>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "88px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>Invoice Triage</p>
              </div>
            </div>
            <div style={{ width: "130px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, borderRadius: "4.58px", background: "#fffbf0", display: "flex", flexDirection: "row", padding: "2px 8px 2px 8px", gap: "3px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <Clock size={12} strokeWidth={3} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#d99a00", display: "block" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "58px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#d99a00", lineHeight: "20px" }}>In review</p>
              </div>
            </div>
            <div style={{ width: "190px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>Email · finance@</p>
            </div>
            <div style={{ width: "110px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "3px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "8px", height: "8px", flexShrink: 0, borderRadius: "2px", background: "#17a673" }} />
                <div style={{ width: "8px", height: "8px", flexShrink: 0, borderRadius: "2px", background: "#17a673" }} />
                <div style={{ width: "8px", height: "8px", flexShrink: 0, borderRadius: "2px", background: "#17a673" }} />
                <div style={{ width: "8px", height: "8px", flexShrink: 0, borderRadius: "2px", background: "#d99a00" }} />
                <div style={{ width: "8px", height: "8px", flexShrink: 0, borderRadius: "2px", background: "#17a673" }} />
                <div style={{ width: "8px", height: "8px", flexShrink: 0, borderRadius: "2px", background: "#dfe0e5" }} />
              </div>
            </div>
            <div style={{ width: "90px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "32px", fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>6.8s</p>
            </div>
            <div style={{ width: "110px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "63px", fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>09:41:52</p>
            </div>
            <div style={{ width: "52px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "28px", height: "28px", flexShrink: 0, borderRadius: "7px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <Dots size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
              </div>
            </div>
          </div>
          <div style={{ alignSelf: "stretch", height: "48px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #e9e9e9", display: "flex", flexDirection: "row", padding: "0px 6px 1px 6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "110px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "55px", fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>R-48213</p>
            </div>
            <div style={{ flex: "1 1 0", minWidth: 0, alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "24px", height: "24px", flexShrink: 0, borderRadius: "7px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ededed, 0px 1px 2px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ width: "13px", height: "13px", flexShrink: 0, borderRadius: "5px", background: "#1a3d6e", position: "relative" }}>
                    <p style={{ position: "absolute", left: "4px", top: "4px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "13px", lineHeight: "12px", fontFamily: "'Geist'", fontSize: "9px", fontWeight: 600, color: "#ffffff" }}>NS</p>
                  </div>
                </div>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "83px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>PO Matching</p>
              </div>
            </div>
            <div style={{ width: "130px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, borderRadius: "4.58px", background: "#fff1f1", display: "flex", flexDirection: "row", padding: "2px 8px 2px 8px", gap: "3px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <AlertCircle size={12} strokeWidth={3} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#e5484d", display: "block" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "39px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#e5484d", lineHeight: "20px" }}>Failed</p>
              </div>
            </div>
            <div style={{ width: "190px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>PO created · PO-7782</p>
            </div>
            <div style={{ width: "110px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "3px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "8px", height: "8px", flexShrink: 0, borderRadius: "2px", background: "#17a673" }} />
                <div style={{ width: "8px", height: "8px", flexShrink: 0, borderRadius: "2px", background: "#17a673" }} />
                <div style={{ width: "8px", height: "8px", flexShrink: 0, borderRadius: "2px", background: "#e5484d" }} />
                <div style={{ width: "8px", height: "8px", flexShrink: 0, borderRadius: "2px", background: "#dfe0e5" }} />
                <div style={{ width: "8px", height: "8px", flexShrink: 0, borderRadius: "2px", background: "#dfe0e5" }} />
                <div style={{ width: "8px", height: "8px", flexShrink: 0, borderRadius: "2px", background: "#dfe0e5" }} />
              </div>
            </div>
            <div style={{ width: "90px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "32px", fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>4.0s</p>
            </div>
            <div style={{ width: "110px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "63px", fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>09:31:04</p>
            </div>
            <div style={{ width: "52px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "28px", height: "28px", flexShrink: 0, borderRadius: "7px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <Dots size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
              </div>
            </div>
          </div>
          <div style={{ alignSelf: "stretch", height: "48px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #e9e9e9", display: "flex", flexDirection: "row", padding: "0px 6px 1px 6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "110px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "55px", fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>R-48212</p>
            </div>
            <div style={{ flex: "1 1 0", minWidth: 0, alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "24px", height: "24px", flexShrink: 0, borderRadius: "7px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ededed, 0px 1px 2px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <svg style={{ width: "13px", height: "13px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 1.573)" d="M6.99508 0 L6.99508 7.25075 L13 0.000541627 L6.99508 0 Z M0 0.00108325 C0 1.65858 1.34496 3.00408 3.00246 3.00408 C4.65996 3.00408 6.00438 1.65858 6.00492 0.00108325 L0 0.00108325 Z M6.00492 2.60487 L0 9.854 L6.00492 9.854 L6.00492 2.60487 Z M9.997 6.85154 C8.33788 6.85154 6.99508 8.19487 6.99508 9.854 L13 9.854 C13 8.1965 11.6567 6.85154 9.99754 6.85154 L9.997 6.85154 Z" fill="#03363d"/></svg>
                </div>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "121px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>Customer Refunds</p>
              </div>
            </div>
            <div style={{ width: "130px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, borderRadius: "4.58px", background: "#f6fffb", display: "flex", flexDirection: "row", padding: "2px 8px 2px 8px", gap: "3px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <CircleCheck size={12} strokeWidth={3} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#17a673", display: "block" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "72px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#17a673", lineHeight: "20px" }}>Succeeded</p>
              </div>
            </div>
            <div style={{ width: "190px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>Tag “refund” · #88213</p>
            </div>
            <div style={{ width: "110px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "3px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "8px", height: "8px", flexShrink: 0, borderRadius: "2px", background: "#17a673" }} />
                <div style={{ width: "8px", height: "8px", flexShrink: 0, borderRadius: "2px", background: "#17a673" }} />
                <div style={{ width: "8px", height: "8px", flexShrink: 0, borderRadius: "2px", background: "#17a673" }} />
                <div style={{ width: "8px", height: "8px", flexShrink: 0, borderRadius: "2px", background: "#17a673" }} />
                <div style={{ width: "8px", height: "8px", flexShrink: 0, borderRadius: "2px", background: "#17a673" }} />
              </div>
            </div>
            <div style={{ width: "90px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "32px", fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>5.2s</p>
            </div>
            <div style={{ width: "110px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "63px", fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>09:30:40</p>
            </div>
            <div style={{ width: "52px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "28px", height: "28px", flexShrink: 0, borderRadius: "7px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <Dots size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
              </div>
            </div>
          </div>
          <div style={{ alignSelf: "stretch", height: "48px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #e9e9e9", display: "flex", flexDirection: "row", padding: "0px 6px 1px 6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "110px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "55px", fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>R-48207</p>
            </div>
            <div style={{ flex: "1 1 0", minWidth: 0, alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "24px", height: "24px", flexShrink: 0, borderRadius: "7px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ededed, 0px 1px 2px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <svg style={{ width: "13px", height: "13px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 1.95)" d="M5.41992 0.983125 C5.63241 0.759405 5.88824 0.581305 6.1718 0.459682 C6.45537 0.338059 6.76074 0.275463 7.06929 0.275708 C7.91429 0.275708 8.66937 0.763208 9.06804 1.47008 C9.40929 1.30758 9.79929 1.22633 10.2055 1.22633 C11.7493 1.22633 13 2.49383 13 4.05383 C13 5.61383 11.7487 6.88133 10.1963 6.88133 C10.0095 6.88133 9.82258 6.8575 9.64383 6.825 C9.46844 7.14556 9.20982 7.41287 8.89523 7.59876 C8.58065 7.78466 8.22174 7.88225 7.85633 7.88125 C7.53133 7.88125 7.23071 7.8 6.96258 7.67812 C6.78297 8.10026 6.48308 8.46019 6.10029 8.71304 C5.7175 8.96588 5.26876 9.10046 4.81 9.1 C4.33179 9.10126 3.86477 8.95536 3.47231 8.68209 C3.07986 8.40883 2.78099 8.02144 2.61625 7.5725 C2.47 7.60608 2.32375 7.61367 2.16938 7.61367 C0.975542 7.61367 0 6.63867 0 5.41992 C0 4.60742 0.439292 3.90054 1.08875 3.51867 C0.950625 3.20992 0.8775 2.86867 0.8775 2.51875 C0.8775 1.12125 2.015 0 3.39625 0 C4.225 0 4.94 0.381875 5.41125 0.975" fill="#00a1e0"/></svg>
                </div>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "156px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>Contract Renewal Alerts</p>
              </div>
            </div>
            <div style={{ width: "130px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, borderRadius: "4.58px", background: "#f6fffb", display: "flex", flexDirection: "row", padding: "2px 8px 2px 8px", gap: "3px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <CircleCheck size={12} strokeWidth={3} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#17a673", display: "block" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "72px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#17a673", lineHeight: "20px" }}>Succeeded</p>
              </div>
            </div>
            <div style={{ width: "190px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>Stage → Renewal</p>
            </div>
            <div style={{ width: "110px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "3px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "8px", height: "8px", flexShrink: 0, borderRadius: "2px", background: "#17a673" }} />
                <div style={{ width: "8px", height: "8px", flexShrink: 0, borderRadius: "2px", background: "#17a673" }} />
                <div style={{ width: "8px", height: "8px", flexShrink: 0, borderRadius: "2px", background: "#17a673" }} />
              </div>
            </div>
            <div style={{ width: "90px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "32px", fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>0.9s</p>
            </div>
            <div style={{ width: "110px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "63px", fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>09:28:15</p>
            </div>
            <div style={{ width: "52px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "28px", height: "28px", flexShrink: 0, borderRadius: "7px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <Dots size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
              </div>
            </div>
          </div>
          <div style={{ alignSelf: "stretch", height: "48px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #e9e9e9", display: "flex", flexDirection: "row", padding: "0px 6px 1px 6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "110px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "55px", fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>R-48201</p>
            </div>
            <div style={{ flex: "1 1 0", minWidth: 0, alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "24px", height: "24px", flexShrink: 0, borderRadius: "7px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ededed, 0px 1px 2px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <svg style={{ width: "13px", height: "13px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 1.573)" d="M6.99508 0 L6.99508 7.25075 L13 0.000541627 L6.99508 0 Z M0 0.00108325 C0 1.65858 1.34496 3.00408 3.00246 3.00408 C4.65996 3.00408 6.00438 1.65858 6.00492 0.00108325 L0 0.00108325 Z M6.00492 2.60487 L0 9.854 L6.00492 9.854 L6.00492 2.60487 Z M9.997 6.85154 C8.33788 6.85154 6.99508 8.19487 6.99508 9.854 L13 9.854 C13 8.1965 11.6567 6.85154 9.99754 6.85154 L9.997 6.85154 Z" fill="#03363d"/></svg>
                </div>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "121px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>Customer Refunds</p>
              </div>
            </div>
            <div style={{ width: "130px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, borderRadius: "4.58px", background: "#fff1f1", display: "flex", flexDirection: "row", padding: "2px 8px 2px 8px", gap: "3px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <AlertCircle size={12} strokeWidth={3} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#e5484d", display: "block" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "39px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#e5484d", lineHeight: "20px" }}>Failed</p>
              </div>
            </div>
            <div style={{ width: "190px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>Tag “refund” · #88209</p>
            </div>
            <div style={{ width: "110px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "3px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "8px", height: "8px", flexShrink: 0, borderRadius: "2px", background: "#17a673" }} />
                <div style={{ width: "8px", height: "8px", flexShrink: 0, borderRadius: "2px", background: "#e5484d" }} />
                <div style={{ width: "8px", height: "8px", flexShrink: 0, borderRadius: "2px", background: "#dfe0e5" }} />
                <div style={{ width: "8px", height: "8px", flexShrink: 0, borderRadius: "2px", background: "#dfe0e5" }} />
                <div style={{ width: "8px", height: "8px", flexShrink: 0, borderRadius: "2px", background: "#dfe0e5" }} />
              </div>
            </div>
            <div style={{ width: "90px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "39px", fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#e5484d", lineHeight: "20px" }}>30.0s</p>
            </div>
            <div style={{ width: "110px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "63px", fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>09:24:02</p>
            </div>
            <div style={{ width: "52px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "28px", height: "28px", flexShrink: 0, borderRadius: "7px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <Dots size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
              </div>
            </div>
          </div>
          <div style={{ alignSelf: "stretch", height: "48px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #e9e9e9", display: "flex", flexDirection: "row", padding: "0px 6px 1px 6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "110px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "55px", fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>R-48198</p>
            </div>
            <div style={{ flex: "1 1 0", minWidth: 0, alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "24px", height: "24px", flexShrink: 0, borderRadius: "7px", background: "#eff8ff", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <Calendar size={12} strokeWidth={3} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#1b8ce8", display: "block" }} />
                </div>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "91px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>Revenue Sync</p>
              </div>
            </div>
            <div style={{ width: "130px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, borderRadius: "4.58px", background: "#f6fffb", display: "flex", flexDirection: "row", padding: "2px 8px 2px 8px", gap: "3px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <CircleCheck size={12} strokeWidth={3} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#17a673", display: "block" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "72px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#17a673", lineHeight: "20px" }}>Succeeded</p>
              </div>
            </div>
            <div style={{ width: "190px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>Schedule · hourly</p>
            </div>
            <div style={{ width: "110px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "3px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "8px", height: "8px", flexShrink: 0, borderRadius: "2px", background: "#17a673" }} />
                <div style={{ width: "8px", height: "8px", flexShrink: 0, borderRadius: "2px", background: "#17a673" }} />
                <div style={{ width: "8px", height: "8px", flexShrink: 0, borderRadius: "2px", background: "#17a673" }} />
                <div style={{ width: "8px", height: "8px", flexShrink: 0, borderRadius: "2px", background: "#17a673" }} />
                <div style={{ width: "8px", height: "8px", flexShrink: 0, borderRadius: "2px", background: "#17a673" }} />
                <div style={{ width: "8px", height: "8px", flexShrink: 0, borderRadius: "2px", background: "#17a673" }} />
              </div>
            </div>
            <div style={{ width: "90px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "39px", fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>12.6s</p>
            </div>
            <div style={{ width: "110px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "63px", fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>09:00:00</p>
            </div>
            <div style={{ width: "52px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "28px", height: "28px", flexShrink: 0, borderRadius: "7px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <Dots size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
              </div>
            </div>
          </div>
          <div style={{ alignSelf: "stretch", height: "48px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #e9e9e9", display: "flex", flexDirection: "row", padding: "0px 6px 1px 6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "110px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "55px", fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>R-48190</p>
            </div>
            <div style={{ flex: "1 1 0", minWidth: 0, alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "24px", height: "24px", flexShrink: 0, borderRadius: "7px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ededed, 0px 1px 2px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <svg style={{ width: "13px", height: "13px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 1.624)" d="M13 1.33225 L13 8.86629 C13 9.35595 12.6035 9.75245 12.1138 9.75245 L10.0452 9.75245 L10.0452 4.73012 L6.5 7.3897 L2.95479 4.73012 L2.95479 9.753 L0.886167 9.753 C0.769748 9.753 0.65447 9.73006 0.54692 9.68549 C0.43937 9.64092 0.341656 9.5756 0.259361 9.49325 C0.177066 9.41091 0.111802 9.31315 0.0673001 9.20557 C0.0227979 9.098 -7.0995e-05 8.98271 1.65561e-07 8.86629 L1.65561e-07 1.33225 C1.65561e-07 0.236454 1.25071 -0.389171 2.12713 0.268413 L2.95479 0.889704 L6.5 3.5482 L10.0452 0.888621 L10.8729 0.268413 C11.7488 -0.388629 13 0.236454 13 1.33225 Z" fill="#ea4335"/></svg>
                </div>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "88px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>Invoice Triage</p>
              </div>
            </div>
            <div style={{ width: "130px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, borderRadius: "4.58px", background: "#f6fffb", display: "flex", flexDirection: "row", padding: "2px 8px 2px 8px", gap: "3px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <CircleCheck size={12} strokeWidth={3} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#17a673", display: "block" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "72px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#17a673", lineHeight: "20px" }}>Succeeded</p>
              </div>
            </div>
            <div style={{ width: "190px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>Email · finance@</p>
            </div>
            <div style={{ width: "110px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "3px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "8px", height: "8px", flexShrink: 0, borderRadius: "2px", background: "#17a673" }} />
                <div style={{ width: "8px", height: "8px", flexShrink: 0, borderRadius: "2px", background: "#17a673" }} />
                <div style={{ width: "8px", height: "8px", flexShrink: 0, borderRadius: "2px", background: "#17a673" }} />
                <div style={{ width: "8px", height: "8px", flexShrink: 0, borderRadius: "2px", background: "#17a673" }} />
                <div style={{ width: "8px", height: "8px", flexShrink: 0, borderRadius: "2px", background: "#17a673" }} />
                <div style={{ width: "8px", height: "8px", flexShrink: 0, borderRadius: "2px", background: "#17a673" }} />
              </div>
            </div>
            <div style={{ width: "90px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "32px", fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>5.9s</p>
            </div>
            <div style={{ width: "110px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "63px", fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>08:02:44</p>
            </div>
            <div style={{ width: "52px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "28px", height: "28px", flexShrink: 0, borderRadius: "7px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <Dots size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
              </div>
            </div>
          </div>
          <div style={{ alignSelf: "stretch", height: "48px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 6px 0px 6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "110px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "55px", fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>R-48188</p>
            </div>
            <div style={{ flex: "1 1 0", minWidth: 0, alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "24px", height: "24px", flexShrink: 0, borderRadius: "7px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ededed, 0px 1px 2px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <svg style={{ width: "13px", height: "13px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M2.73108 8.21438 C2.73037 8.57633 2.58638 8.92327 2.33059 9.17936 C2.07481 9.43545 1.72803 9.57986 1.36608 9.581 C1.00395 9.58014 0.656894 9.43586 0.400874 9.17974 C0.144854 8.92362 0.000715237 8.57651 9.02056e-17 8.21438 C0.00100179 7.85248 0.145284 7.5057 0.401289 7.2499 C0.657293 6.9941 1.00418 6.85009 1.36608 6.84938 L2.73108 6.84938 L2.73108 8.21438 Z M3.41954 8.21438 C3.42054 7.85257 3.56475 7.50588 3.82064 7.25009 C4.07653 6.9943 4.42328 6.85023 4.78508 6.84938 C5.14689 6.85023 5.49364 6.9943 5.74953 7.25009 C6.00542 7.50588 6.14962 7.85257 6.15062 8.21438 L6.15062 11.6339 C6.14977 11.9959 6.00564 12.3428 5.74975 12.5987 C5.49387 12.8547 5.14703 12.999 4.78508 13 C4.42313 12.999 4.0763 12.8547 3.82041 12.5987 C3.56453 12.3428 3.4204 11.9959 3.41954 11.6339 L3.41954 8.21438 Z M4.78508 2.73108 C4.42332 2.73008 4.07665 2.58597 3.8208 2.33021 C3.56494 2.07446 3.42069 1.72785 3.41954 1.36608 C3.4204 1.00413 3.56453 0.657244 3.82041 0.401255 C4.0763 0.145266 4.42313 0.00100122 4.78508 0 C5.14703 0.00100122 5.49387 0.145266 5.74975 0.401255 C6.00564 0.657244 6.14977 1.00413 6.15062 1.36608 L6.15062 2.73108 L4.78508 2.73108 Z M4.78508 3.41954 C5.14694 3.42054 5.49369 3.56473 5.74956 3.82061 C6.00543 4.07648 6.14962 4.42323 6.15062 4.78508 C6.14962 5.14694 6.00543 5.49369 5.74956 5.74956 C5.49369 6.00543 5.14694 6.14962 4.78508 6.15062 L1.36608 6.15062 C1.00413 6.14977 0.657244 6.00564 0.401255 5.74975 C0.145266 5.49387 0.00100122 5.14703 0 4.78508 C0.00100122 4.42313 0.145266 4.0763 0.401255 3.82041 C0.657244 3.56453 1.00413 3.4204 1.36608 3.41954 L4.78508 3.41954 Z M10.2678 4.78508 C10.2688 4.42313 10.4131 4.0763 10.6691 3.82041 C10.9251 3.56453 11.272 3.4204 11.6339 3.41954 C11.9959 3.4204 12.3428 3.56453 12.5987 3.82041 C12.8547 4.0763 12.999 4.42313 13 4.78508 C12.999 5.14703 12.8547 5.49387 12.5987 5.74975 C12.3428 6.00564 11.9959 6.14977 11.6339 6.15062 L10.2678 6.15062 L10.2678 4.78508 Z M9.581 4.78508 C9.58 5.14713 9.43566 5.49404 9.17955 5.74994 C8.92345 6.00585 8.57642 6.14991 8.21438 6.15062 C7.85257 6.14962 7.50588 6.00542 7.25009 5.74953 C6.9943 5.49364 6.85023 5.14689 6.84938 4.78508 L6.84938 1.36608 C6.85009 1.00418 6.9941 0.657293 7.2499 0.401289 C7.5057 0.145284 7.85248 0.00100179 8.21438 2.70617e-16 C8.57651 0.000715237 8.92362 0.144854 9.17974 0.400874 C9.43586 0.656894 9.58014 1.00395 9.581 1.36608 L9.581 4.78508 Z M8.21438 10.2678 C8.57651 10.2685 8.92362 10.4127 9.17974 10.6687 C9.43586 10.9247 9.58014 11.2718 9.581 11.6339 C9.58014 11.9961 9.43586 12.3431 9.17974 12.5991 C8.92362 12.8551 8.57651 12.9993 8.21438 13 C7.85248 12.999 7.5057 12.8547 7.2499 12.5987 C6.9941 12.3427 6.85009 11.9958 6.84938 11.6339 L6.84938 10.2678 L8.21438 10.2678 Z M8.21438 9.581 C7.85238 9.58 7.50552 9.43564 7.24971 9.17952 C6.99389 8.9234 6.84995 8.57637 6.84938 8.21438 C6.85023 7.85262 6.99432 7.50592 7.25012 7.25012 C7.50592 6.99432 7.85262 6.85023 8.21438 6.84938 L11.6339 6.84938 C11.9958 6.85009 12.3427 6.9941 12.5987 7.2499 C12.8547 7.5057 12.999 7.85248 13 8.21438 C12.9993 8.57651 12.8551 8.92362 12.5991 9.17974 C12.3431 9.43586 11.9961 9.58014 11.6339 9.581 L8.21438 9.581 Z" fill="#4a154b"/></svg>
                </div>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "92px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>Expense Audit</p>
              </div>
            </div>
            <div style={{ width: "130px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, borderRadius: "4.58px", background: "#f7f8fa", display: "flex", flexDirection: "row", padding: "2px 8px 2px 8px", gap: "3px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <PlayerPause size={12} strokeWidth={3} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#697386", display: "block" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "50px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#697386", lineHeight: "20px" }}>Queued</p>
              </div>
            </div>
            <div style={{ width: "190px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>/audit command</p>
            </div>
            <div style={{ width: "110px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "3px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "8px", height: "8px", flexShrink: 0, borderRadius: "2px", background: "#dfe0e5" }} />
                <div style={{ width: "8px", height: "8px", flexShrink: 0, borderRadius: "2px", background: "#dfe0e5" }} />
                <div style={{ width: "8px", height: "8px", flexShrink: 0, borderRadius: "2px", background: "#dfe0e5" }} />
                <div style={{ width: "8px", height: "8px", flexShrink: 0, borderRadius: "2px", background: "#dfe0e5" }} />
                <div style={{ width: "8px", height: "8px", flexShrink: 0, borderRadius: "2px", background: "#dfe0e5" }} />
                <div style={{ width: "8px", height: "8px", flexShrink: 0, borderRadius: "2px", background: "#dfe0e5" }} />
              </div>
            </div>
            <div style={{ width: "90px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "8px", fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>—</p>
            </div>
            <div style={{ width: "110px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "63px", fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>08:01:10</p>
            </div>
            <div style={{ width: "52px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "28px", height: "28px", flexShrink: 0, borderRadius: "7px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <Dots size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
              </div>
            </div>
          </div>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "251px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>Showing 11 of 18,402 runs · newest first</p>
          <div style={{ flex: "1 1 0", minWidth: 0, height: "1px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }} />
          <div style={{ flexShrink: 0, borderRadius: "8px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e8e8e8", display: "flex", flexDirection: "row", padding: "5px 11px 5px 11px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <ChevronDown size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "90px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#686765", lineHeight: "20px" }}>Load 50 more</p>
          </div>
        </div>
      </div>
    </div>
  );
}
