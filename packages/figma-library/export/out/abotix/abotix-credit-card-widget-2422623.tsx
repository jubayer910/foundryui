// Credit card widget (abotix, Cards and panels) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist, Geist Mono, Inter. Icons: Ingot Icons.
import { ChevronDown, ChevronRight, Copy, CreditCard, Eye, PlayerPause, Plus, Robot, SecurityLock } from "ingotui-icons/react/stroke-rounded";

export function CreditCardWidget() {
  return (
    <div style={{ width: "440px", height: "717px", borderRadius: "8px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ececec", display: "flex", flexDirection: "column", padding: "17px 17px 17px 17px", gap: "14px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
      <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ width: "36px", height: "36px", flexShrink: 0, borderRadius: "10px", background: "rgba(37, 99, 235, 0.12)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <CreditCard size={18} strokeWidth={2} style={{ width: "18px", height: "18px", flexShrink: 0, color: "#2563eb", display: "block" }} />
        </div>
        <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "93px", lineHeight: "21px", fontFamily: "'Geist'", fontSize: "16px", fontWeight: 600, color: "#1c1b20" }}>Agent cards</p>
          <p style={{ alignSelf: "stretch", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#747474" }}>Virtual cards your agents can spend with</p>
        </div>
        <div style={{ height: "32px", flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px rgba(221, 221, 221, 0.4), 0px 0px 1px 0px rgba(0, 0, 0, 0.25)", display: "flex", flexDirection: "row", padding: "1px 11px 1px 11px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <Plus size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#555555", display: "block" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "63px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#4f4f51" }}>New card</p>
        </div>
      </div>
      <div style={{ alignSelf: "stretch", flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ececec", overflow: "hidden", display: "flex", flexDirection: "column", padding: "1px 1px 1px 1px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ alignSelf: "stretch", flexShrink: 0, background: "#f5f8ff", display: "flex", flexDirection: "column", padding: "12px 12px 14px 12px", gap: "14px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "10px", background: "rgba(37, 99, 235, 0.12)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <Robot size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#2563eb", display: "block" }} />
            </div>
            <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "127px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 600, color: "#2d2d2d" }}>Finance Ops Agent</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "180px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#555555" }}>Visa ending 4417, Stripe refunds</p>
            </div>
            <div style={{ height: "24px", flexShrink: 0, borderRadius: "6px", background: "rgba(45, 180, 117, 0.08)", display: "flex", flexDirection: "row", padding: "0px 6px 0px 6px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "38px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#1d754c", letterSpacing: "-0.01em" }}>Active</p>
            </div>
            <ChevronDown size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#353537", display: "block" }} />
          </div>
          <div style={{ alignSelf: "stretch", height: "224px", flexShrink: 0, borderRadius: "14px", background: "linear-gradient(113.9deg, #5b62f7 -6.2%, #2563eb 69.7%)", boxShadow: "0px 8px 20px -4px rgba(13, 13, 18, 0.12), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.2)", overflow: "hidden", position: "relative" }}>
            <svg style={{ position: "absolute", left: "150px", top: "-210px", width: "360px", height: "360px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="360" height="360" viewBox="0 0 360 360" fill="none" overflow="visible"><defs><radialGradient id="g1_d25b" gradientUnits="userSpaceOnUse" cx="180.00" cy="180.00" r="180.00"><stop offset="0" stopColor="#ffffff" stopOpacity="0.22"/><stop offset="1" stopColor="#ffffff" stopOpacity="0"/></radialGradient></defs><path transform="matrix(1 0 0 1 0 0)" d="M360 180 C360 279.411 279.411 360 180 360 C80.5887 360 0 279.411 0 180 C0 80.5887 80.5887 0 180 0 C279.411 0 360 80.5887 360 180 Z" fill="url(#g1_d25b)"/></svg>
            <svg style={{ position: "absolute", left: "-120px", top: "120px", width: "300px", height: "300px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 300 300" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M300 150 C300 232.843 232.843 300 150 300 C67.1573 300 0 232.843 0 150 C0 67.1573 67.1573 0 150 0 C232.843 0 300 67.1573 300 150 Z" fill="#ffffff" fillOpacity="0.06"/></svg>
            <p style={{ position: "absolute", left: "20px", top: "20px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "108px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 600, color: "#ffffff" }}>NORTHWIND LABS</p>
            <p style={{ position: "absolute", left: "334px", top: "20px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "38px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#ffffff" }}>Virtual</p>
            <div style={{ position: "absolute", left: "20px", top: "64px", width: "36px", height: "27px", borderRadius: "6px", background: "linear-gradient(90deg, #f3e2b3 0%, #cfae6a 100%)", overflow: "hidden" }}>
              <div style={{ position: "absolute", left: "0px", top: "9px", width: "36px", height: "1px", background: "rgba(156, 127, 63, 0.45)" }} />
              <div style={{ position: "absolute", left: "0px", top: "17px", width: "36px", height: "1px", background: "rgba(156, 127, 63, 0.45)" }} />
              <div style={{ position: "absolute", left: "12px", top: "0px", width: "1px", height: "27px", background: "rgba(156, 127, 63, 0.45)" }} />
              <div style={{ position: "absolute", left: "24px", top: "0px", width: "1px", height: "27px", background: "rgba(156, 127, 63, 0.45)" }} />
            </div>
            <p style={{ position: "absolute", left: "20px", top: "112px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "272px", lineHeight: "25px", fontFamily: "'Geist Mono'", fontSize: "19px", fontWeight: 500, color: "#ffffff", letterSpacing: "1px" }}>••••  ••••  ••••  4417</p>
            <p style={{ position: "absolute", left: "20px", top: "164px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "77px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "11px", fontWeight: 500, color: "#ffffff" }}>CARD HOLDER</p>
            <p style={{ position: "absolute", left: "20px", top: "182px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "127px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 600, color: "#ffffff" }}>Finance Ops Agent</p>
            <p style={{ position: "absolute", left: "190px", top: "164px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "45px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "11px", fontWeight: 500, color: "#ffffff" }}>EXPIRES</p>
            <p style={{ position: "absolute", left: "190px", top: "182px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "42px", lineHeight: "18px", fontFamily: "'Geist Mono'", fontSize: "14px", fontWeight: 600, color: "#ffffff" }}>09/28</p>
            <p style={{ position: "absolute", left: "314px", top: "180px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "58px", lineHeight: "29px", fontFamily: "'Inter'", fontSize: "24px", fontWeight: 700, color: "#ffffff" }}>VISA</p>
          </div>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "8px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "74px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#555555" }}>Monthly limit</p>
              <div style={{ flex: "1 1 0", minWidth: 0, height: "1px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "103px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 600, color: "#2d2d2d" }}>$3,240 of $5,000</p>
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "3px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "4.92px", height: "14px", flexShrink: 0, borderRadius: "1.5px", background: "rgba(37, 99, 235, 0.7)" }} />
              <div style={{ width: "4.92px", height: "14px", flexShrink: 0, borderRadius: "1.5px", background: "rgba(37, 99, 235, 0.7)" }} />
              <div style={{ width: "4.92px", height: "14px", flexShrink: 0, borderRadius: "1.5px", background: "rgba(37, 99, 235, 0.7)" }} />
              <div style={{ width: "4.92px", height: "14px", flexShrink: 0, borderRadius: "1.5px", background: "rgba(37, 99, 235, 0.7)" }} />
              <div style={{ width: "4.92px", height: "14px", flexShrink: 0, borderRadius: "1.5px", background: "rgba(37, 99, 235, 0.7)" }} />
              <div style={{ width: "4.92px", height: "14px", flexShrink: 0, borderRadius: "1.5px", background: "rgba(37, 99, 235, 0.7)" }} />
              <div style={{ width: "4.92px", height: "14px", flexShrink: 0, borderRadius: "1.5px", background: "rgba(37, 99, 235, 0.7)" }} />
              <div style={{ width: "4.92px", height: "14px", flexShrink: 0, borderRadius: "1.5px", background: "rgba(37, 99, 235, 0.7)" }} />
              <div style={{ width: "4.92px", height: "14px", flexShrink: 0, borderRadius: "1.5px", background: "rgba(37, 99, 235, 0.7)" }} />
              <div style={{ width: "4.92px", height: "14px", flexShrink: 0, borderRadius: "1.5px", background: "rgba(37, 99, 235, 0.7)" }} />
              <div style={{ width: "4.92px", height: "14px", flexShrink: 0, borderRadius: "1.5px", background: "rgba(37, 99, 235, 0.7)" }} />
              <div style={{ width: "4.92px", height: "14px", flexShrink: 0, borderRadius: "1.5px", background: "rgba(37, 99, 235, 0.7)" }} />
              <div style={{ width: "4.92px", height: "14px", flexShrink: 0, borderRadius: "1.5px", background: "rgba(37, 99, 235, 0.7)" }} />
              <div style={{ width: "4.92px", height: "14px", flexShrink: 0, borderRadius: "1.5px", background: "rgba(37, 99, 235, 0.7)" }} />
              <div style={{ width: "4.92px", height: "14px", flexShrink: 0, borderRadius: "1.5px", background: "rgba(37, 99, 235, 0.7)" }} />
              <div style={{ width: "4.92px", height: "14px", flexShrink: 0, borderRadius: "1.5px", background: "rgba(37, 99, 235, 0.7)" }} />
              <div style={{ width: "4.92px", height: "14px", flexShrink: 0, borderRadius: "1.5px", background: "rgba(37, 99, 235, 0.7)" }} />
              <div style={{ width: "4.92px", height: "14px", flexShrink: 0, borderRadius: "1.5px", background: "rgba(37, 99, 235, 0.7)" }} />
              <div style={{ width: "4.92px", height: "14px", flexShrink: 0, borderRadius: "1.5px", background: "rgba(37, 99, 235, 0.7)" }} />
              <div style={{ width: "4.92px", height: "14px", flexShrink: 0, borderRadius: "1.5px", background: "rgba(37, 99, 235, 0.7)" }} />
              <div style={{ width: "4.92px", height: "14px", flexShrink: 0, borderRadius: "1.5px", background: "rgba(37, 99, 235, 0.7)" }} />
              <div style={{ width: "4.92px", height: "14px", flexShrink: 0, borderRadius: "1.5px", background: "rgba(37, 99, 235, 0.7)" }} />
              <div style={{ width: "4.92px", height: "14px", flexShrink: 0, borderRadius: "1.5px", background: "rgba(37, 99, 235, 0.7)" }} />
              <div style={{ width: "4.92px", height: "14px", flexShrink: 0, borderRadius: "1.5px", background: "rgba(37, 99, 235, 0.7)" }} />
              <div style={{ width: "4.92px", height: "14px", flexShrink: 0, borderRadius: "1.5px", background: "rgba(37, 99, 235, 0.7)" }} />
              <div style={{ width: "4.92px", height: "14px", flexShrink: 0, borderRadius: "1.5px", background: "rgba(37, 99, 235, 0.7)" }} />
              <div style={{ width: "4.92px", height: "14px", flexShrink: 0, borderRadius: "1.5px", background: "rgba(37, 99, 235, 0.7)" }} />
              <div style={{ width: "4.92px", height: "14px", flexShrink: 0, borderRadius: "1.5px", background: "rgba(37, 99, 235, 0.7)" }} />
              <div style={{ width: "4.92px", height: "14px", flexShrink: 0, borderRadius: "1.5px", background: "rgba(37, 99, 235, 0.7)" }} />
              <div style={{ width: "4.92px", height: "14px", flexShrink: 0, borderRadius: "1.5px", background: "rgba(37, 99, 235, 0.7)" }} />
              <div style={{ width: "4.92px", height: "14px", flexShrink: 0, borderRadius: "1.5px", background: "rgba(37, 99, 235, 0.7)" }} />
              <div style={{ width: "4.92px", height: "14px", flexShrink: 0, borderRadius: "1.5px", background: "rgba(37, 99, 235, 0.7)" }} />
              <div style={{ width: "4.92px", height: "14px", flexShrink: 0, borderRadius: "1.5px", background: "rgba(37, 99, 235, 0.12)" }} />
              <div style={{ width: "4.92px", height: "14px", flexShrink: 0, borderRadius: "1.5px", background: "rgba(37, 99, 235, 0.12)" }} />
              <div style={{ width: "4.92px", height: "14px", flexShrink: 0, borderRadius: "1.5px", background: "rgba(37, 99, 235, 0.12)" }} />
              <div style={{ width: "4.92px", height: "14px", flexShrink: 0, borderRadius: "1.5px", background: "rgba(37, 99, 235, 0.12)" }} />
              <div style={{ width: "4.92px", height: "14px", flexShrink: 0, borderRadius: "1.5px", background: "rgba(37, 99, 235, 0.12)" }} />
              <div style={{ width: "4.92px", height: "14px", flexShrink: 0, borderRadius: "1.5px", background: "rgba(37, 99, 235, 0.12)" }} />
              <div style={{ width: "4.92px", height: "14px", flexShrink: 0, borderRadius: "1.5px", background: "rgba(37, 99, 235, 0.12)" }} />
              <div style={{ width: "4.92px", height: "14px", flexShrink: 0, borderRadius: "1.5px", background: "rgba(37, 99, 235, 0.12)" }} />
              <div style={{ width: "4.92px", height: "14px", flexShrink: 0, borderRadius: "1.5px", background: "rgba(37, 99, 235, 0.12)" }} />
              <div style={{ width: "4.92px", height: "14px", flexShrink: 0, borderRadius: "1.5px", background: "rgba(37, 99, 235, 0.12)" }} />
              <div style={{ width: "4.92px", height: "14px", flexShrink: 0, borderRadius: "1.5px", background: "rgba(37, 99, 235, 0.12)" }} />
              <div style={{ width: "4.92px", height: "14px", flexShrink: 0, borderRadius: "1.5px", background: "rgba(37, 99, 235, 0.12)" }} />
              <div style={{ width: "4.92px", height: "14px", flexShrink: 0, borderRadius: "1.5px", background: "rgba(37, 99, 235, 0.12)" }} />
              <div style={{ width: "4.92px", height: "14px", flexShrink: 0, borderRadius: "1.5px", background: "rgba(37, 99, 235, 0.12)" }} />
              <div style={{ width: "4.92px", height: "14px", flexShrink: 0, borderRadius: "1.5px", background: "rgba(37, 99, 235, 0.12)" }} />
              <div style={{ width: "4.92px", height: "14px", flexShrink: 0, borderRadius: "1.5px", background: "rgba(37, 99, 235, 0.12)" }} />
              <div style={{ width: "4.92px", height: "14px", flexShrink: 0, borderRadius: "1.5px", background: "rgba(37, 99, 235, 0.12)" }} />
              <div style={{ width: "4.92px", height: "14px", flexShrink: 0, borderRadius: "1.5px", background: "rgba(37, 99, 235, 0.12)" }} />
            </div>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "56px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#555555" }}>65% used</p>
              <div style={{ flex: "1 1 0", minWidth: 0, height: "1px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "72px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#555555" }}>Resets 1 Dec</p>
            </div>
          </div>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flex: "1 1 0", minWidth: 0, height: "34px", flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ebebeb", display: "flex", flexDirection: "row", padding: "1px 13px 1px 13px", gap: "6px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <PlayerPause size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#555555", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "44px", lineHeight: "17px", fontFamily: "'Inter'", fontSize: "14px", fontWeight: 500, color: "#000000", letterSpacing: "-0.02em" }}>Freeze</p>
            </div>
            <div style={{ flex: "1 1 0", minWidth: 0, height: "34px", flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ebebeb", display: "flex", flexDirection: "row", padding: "1px 13px 1px 13px", gap: "6px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <Eye size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#555555", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "45px", lineHeight: "17px", fontFamily: "'Inter'", fontSize: "14px", fontWeight: 500, color: "#000000", letterSpacing: "-0.02em" }}>Details</p>
            </div>
            <div style={{ flex: "1 1 0", minWidth: 0, height: "34px", flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ebebeb", display: "flex", flexDirection: "row", padding: "1px 13px 1px 13px", gap: "6px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <Copy size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#555555", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "35px", lineHeight: "17px", fontFamily: "'Inter'", fontSize: "14px", fontWeight: 500, color: "#000000", letterSpacing: "-0.02em" }}>Copy</p>
            </div>
          </div>
        </div>
        <div style={{ alignSelf: "stretch", height: "1px", flexShrink: 0, background: "#ececec" }} />
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "10px 12px 10px 12px", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "10px", background: "rgba(85, 85, 85, 0.12)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <Robot size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#555555", display: "block" }} />
          </div>
          <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "107px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 600, color: "#2d2d2d" }}>Support Copilot</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "100px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#555555" }}>Visa ending 2290</p>
          </div>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "86px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#2d2d2d" }}>$410 / $1,000</p>
          <ChevronRight size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#8a8a8a", display: "block" }} />
        </div>
        <div style={{ alignSelf: "stretch", height: "1px", flexShrink: 0, background: "#ececec" }} />
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "10px 12px 10px 12px", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "10px", background: "rgba(85, 85, 85, 0.12)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <Robot size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#555555", display: "block" }} />
          </div>
          <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "92px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 600, color: "#2d2d2d" }}>Invoice Agent</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "96px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#555555" }}>Visa ending 8812</p>
          </div>
          <div style={{ height: "24px", flexShrink: 0, borderRadius: "6px", background: "rgba(254, 113, 12, 0.08)", display: "flex", flexDirection: "row", padding: "0px 6px 0px 6px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "41px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#a54908", letterSpacing: "-0.01em" }}>Frozen</p>
          </div>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "76px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#747474" }}>$0 / $2,500</p>
          <ChevronRight size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#8a8a8a", display: "block" }} />
        </div>
        <div style={{ alignSelf: "stretch", height: "1px", flexShrink: 0, background: "#ececec" }} />
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "10px 12px 10px 12px", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "10px", background: "rgba(85, 85, 85, 0.12)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <Robot size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#555555", display: "block" }} />
          </div>
          <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "130px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 600, color: "#2d2d2d" }}>Data Analyst Agent</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "97px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#555555" }}>Visa ending 6031</p>
          </div>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "93px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#2d2d2d" }}>$1,180 / $1,500</p>
          <ChevronRight size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#8a8a8a", display: "block" }} />
        </div>
      </div>
      <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <SecurityLock size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#8a8a8a", display: "block" }} />
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "336px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#747474" }}>Blocked by policy if an agent goes off its allowed merchants</p>
      </div>
    </div>
  );
}
