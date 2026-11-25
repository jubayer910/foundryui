// Add card modal (spendix, Modals) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Ingot Icons.
import { CreditCard as CreditCardSolid } from "ingotui-icons/react/solid";
import { Calendar, Check, ChevronDown, CreditCard, InfoCircle, Lock, User, Users, X } from "ingotui-icons/react/stroke-rounded";

export function AddCardModal() {
  return (
    <div style={{ width: "560px", height: "582px", borderRadius: "16px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e2e8f0, 0px 20px 44px -12px rgba(13, 13, 18, 0.14), 0px 1px 2px 0px rgba(13, 13, 18, 0.05)", display: "flex", flexDirection: "column", padding: "1px 1px 1px 1px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box", position: "relative" }}>
      <div style={{ alignSelf: "stretch", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #e2e8f0", display: "flex", flexDirection: "row", padding: "20px 20px 17px 20px", gap: "12px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ width: "36px", height: "36px", flexShrink: 0, borderRadius: "10px", background: "rgba(37, 99, 235, 0.12)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <CreditCardSolid size={18} style={{ width: "18px", height: "18px", flexShrink: 0, color: "#2563eb", display: "block" }} />
        </div>
        <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "153px", lineHeight: "21px", fontFamily: "'Geist'", fontSize: "16px", fontWeight: 500, color: "#0f172a" }}>Add a company card</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "320px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#64748b" }}>Charges post to the assigned team’s April budget.</p>
        </div>
        <div style={{ width: "30px", height: "30px", flexShrink: 0, borderRadius: "8px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #dfe1e6", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <X size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#7d818c", display: "block" }} />
        </div>
      </div>
      <div style={{ alignSelf: "stretch", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "column", padding: "20px 20px 20px 20px", gap: "16px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "79px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>Card number</p>
          <div style={{ alignSelf: "stretch", height: "38px", flexShrink: 0, borderRadius: "9px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #2563eb, 0px 0px 0px 3px rgba(37, 99, 235, 0.16)", display: "flex", flexDirection: "row", padding: "1px 13px 1px 13px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <CreditCard size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#7d818c", display: "block" }} />
            <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#0f172a" }}>5425 2334 3010 9903</p>
            <div style={{ width: "30px", height: "20px", flexShrink: 0, borderRadius: "4px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e7e7e7", overflow: "hidden", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", gap: "-4.4px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <svg style={{ width: "11.2px", height: "11.2px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="11.2" height="11.2" viewBox="0 0 11.2 11.2" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M11.2 5.6 C11.2 8.69279 8.69279 11.2 5.6 11.2 C2.50721 11.2 0 8.69279 0 5.6 C0 2.50721 2.50721 0 5.6 0 C8.69279 0 11.2 2.50721 11.2 5.6 Z" fill="#eb001b"/></svg>
              <svg style={{ width: "11.2px", height: "11.2px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible", marginLeft: "-4.4px" }} xmlns="http://www.w3.org/2000/svg" width="11.2" height="11.2" viewBox="0 0 11.2 11.2" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M11.2 5.6 C11.2 8.69279 8.69279 11.2 5.6 11.2 C2.50721 11.2 0 8.69279 0 5.6 C0 2.50721 2.50721 0 5.6 0 C8.69279 0 11.2 2.50721 11.2 5.6 Z" fill="#f79e1b" fillOpacity="0.9"/></svg>
            </div>
          </div>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, borderRadius: "10px", boxShadow: "inset 0 0 0 1px #e2e8f0", display: "flex", flexDirection: "column", padding: "13px 13px 13px 13px", gap: "10px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "8px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e7e7e7", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <Users size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#646871", display: "block" }} />
            </div>
            <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "103px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>Assign to a team</p>
              <p style={{ alignSelf: "stretch", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>Spend counts against that team’s budget and routes to its approver.</p>
            </div>
          </div>
          <div style={{ alignSelf: "stretch", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", gap: "12px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "117px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>Team / department</p>
              <div style={{ alignSelf: "stretch", height: "38px", flexShrink: 0, borderRadius: "9px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #2563eb, 0px 0px 0px 3px rgba(37, 99, 235, 0.16)", display: "flex", flexDirection: "row", padding: "1px 13px 1px 13px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "20px", height: "20px", flexShrink: 0, borderRadius: "999px", background: "#e0e9fc", boxShadow: "inset 0 0 0 1px #ffffff", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "15px", lineHeight: "12px", fontFamily: "'Geist'", fontSize: "9.5px", fontWeight: 500, color: "#184099" }}>MP</p>
                </div>
                <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#0f172a" }}>Design</p>
                <ChevronDown size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#7d818c", display: "block" }} />
              </div>
            </div>
            <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "80px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>Monthly limit</p>
              <div style={{ alignSelf: "stretch", height: "38px", flexShrink: 0, borderRadius: "9px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #dfe1e6, 0px 1px 2px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "row", padding: "1px 13px 1px 13px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "9px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#64748b" }}>$</p>
                <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#0f172a" }}>5,000.00</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "25px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#64748b" }}>USD</p>
              </div>
            </div>
          </div>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", gap: "12px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "39px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>Expiry</p>
            <div style={{ alignSelf: "stretch", height: "38px", flexShrink: 0, borderRadius: "9px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #dfe1e6, 0px 1px 2px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "row", padding: "1px 13px 1px 13px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <Calendar size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#7d818c", display: "block" }} />
              <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#0f172a" }}>08 / 29</p>
            </div>
          </div>
          <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "27px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>CVC</p>
            <div style={{ alignSelf: "stretch", height: "38px", flexShrink: 0, borderRadius: "9px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #dfe1e6, 0px 1px 2px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "row", padding: "1px 13px 1px 13px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <Lock size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#7d818c", display: "block" }} />
              <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#0f172a" }}>•••</p>
              <InfoCircle size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#7d818c", display: "block" }} />
            </div>
          </div>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "85px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>Name on card</p>
          <div style={{ alignSelf: "stretch", height: "38px", flexShrink: 0, borderRadius: "9px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #dfe1e6, 0px 1px 2px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "row", padding: "1px 13px 1px 13px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <User size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#7d818c", display: "block" }} />
            <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#0f172a" }}>Maya Patel</p>
          </div>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "20px", height: "20px", flexShrink: 0, borderRadius: "6px", background: "#242424", overflow: "hidden", position: "relative" }}>
            <svg style={{ position: "absolute", left: "3px", top: "3px", width: "14px", height: "14px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 2.333 3.5)" d="M10.0404 0.707107 C10.431 0.316583 10.431 -0.316583 10.0404 -0.707107 C9.64992 -1.09763 9.01675 -1.09763 8.62623 -0.707107 L9.33333 0 L10.0404 0.707107 Z M2.91667 6.41667 L2.20956 7.12377 C2.60008 7.5143 3.23325 7.5143 3.62377 7.12377 L2.91667 6.41667 Z M0.707107 2.79289 C0.316583 2.40237 -0.316583 2.40237 -0.707107 2.79289 C-1.09763 3.18342 -1.09763 3.81658 -0.707107 4.20711 L0 3.5 L0.707107 2.79289 Z M9.33333 0 L8.62623 -0.707107 L2.20956 5.70956 L2.91667 6.41667 L3.62377 7.12377 L10.0404 0.707107 L9.33333 0 Z M2.91667 6.41667 L3.62377 5.70956 L0.707107 2.79289 L0 3.5 L-0.707107 4.20711 L2.20956 7.12377 L2.91667 6.41667 Z" fill="#ffffff"/></svg>
          </div>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "312px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>Make this the default card for Design subscriptions</p>
        </div>
      </div>
      <div style={{ alignSelf: "stretch", flexShrink: 0, background: "#fafafa", boxShadow: "inset 0 1px 0 0 #e2e8f0", display: "flex", flexDirection: "row", padding: "15px 20px 14px 20px", gap: "8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
        <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>Card details are encrypted. Spendix never stores the CVC.</p>
        <div style={{ height: "32px", flexShrink: 0, borderRadius: "8px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #dfe1e6", display: "flex", flexDirection: "row", padding: "1px 11px 1px 11px", gap: "6px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "46px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#0f172a" }}>Cancel</p>
        </div>
        <div style={{ height: "32px", flexShrink: 0, borderRadius: "8px", background: "#242424", boxShadow: "0px 2px 6px 0px rgba(15, 15, 15, 0.18), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12)", display: "flex", flexDirection: "row", padding: "0px 10.5px 0px 10.5px", gap: "4px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <Check size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#ffffff", display: "block" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "65px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ffffff" }}>Save card</p>
        </div>
      </div>
      <div style={{ position: "absolute", left: "34px", top: "303px", width: "280px", height: "234px", borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e2e8f0, 0px 12px 32px -8px rgba(13, 13, 18, 0.12), 0px 1px 2px 0px rgba(13, 13, 18, 0.05)", overflow: "hidden", display: "flex", flexDirection: "column", padding: "7px 7px 7px 7px", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ alignSelf: "stretch", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", padding: "6px 10px 6px 10px", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "36px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>Teams</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "63px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>Left in April</p>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, borderRadius: "8px", overflow: "hidden", display: "flex", flexDirection: "row", padding: "6px 10px 6px 10px", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "24px", height: "24px", flexShrink: 0, borderRadius: "749.25px", background: "#e0e9fc", boxShadow: "inset 0 0 0 0.75px #ffffff", display: "flex", flexDirection: "row", padding: "0.75px 0.75px 0.75px 0.75px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "13px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "9.75px", fontWeight: 500, color: "#184099" }}>SR</p>
          </div>
          <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "column", gap: "1px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "73px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>Engineering</p>
          </div>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "45px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0a7854" }}>$5,490</p>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, borderRadius: "8px", overflow: "hidden", display: "flex", flexDirection: "row", padding: "6px 10px 6px 10px", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "24px", height: "24px", flexShrink: 0, borderRadius: "749.25px", background: "#def5ed", boxShadow: "inset 0 0 0 0.75px #ffffff", display: "flex", flexDirection: "row", padding: "0.75px 0.75px 0.75px 0.75px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "13px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "9.75px", fontWeight: 500, color: "#0a7854" }}>LC</p>
          </div>
          <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "column", gap: "1px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "62px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>Marketing</p>
          </div>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "41px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0a7854" }}>$4,100</p>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, borderRadius: "8px", background: "#f4f4f5", boxShadow: "inset 0 0 0 1px #e8e8eb", overflow: "hidden", display: "flex", flexDirection: "row", padding: "7px 11px 7px 11px", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "24px", height: "24px", flexShrink: 0, borderRadius: "749.25px", background: "#ede8ff", boxShadow: "inset 0 0 0 0.75px #ffffff", display: "flex", flexDirection: "row", padding: "0.75px 0.75px 0.75px 0.75px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "15px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "9.75px", fontWeight: 500, color: "#513ca4" }}>MP</p>
          </div>
          <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "column", gap: "1px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "43px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>Design</p>
          </div>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "45px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0a7854" }}>$2,600</p>
          <Check size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#0f172a", display: "block" }} />
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, borderRadius: "8px", overflow: "hidden", display: "flex", flexDirection: "row", padding: "6px 10px 6px 10px", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "24px", height: "24px", flexShrink: 0, borderRadius: "749.25px", background: "#fef1dd", boxShadow: "inset 0 0 0 0.75px #ffffff", display: "flex", flexDirection: "row", padding: "0.75px 0.75px 0.75px 0.75px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "14px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "9.75px", fontWeight: 500, color: "#99453d" }}>NK</p>
          </div>
          <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "column", gap: "1px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "34px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>Sales</p>
          </div>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "42px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0a7854" }}>$1,850</p>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, borderRadius: "8px", overflow: "hidden", display: "flex", flexDirection: "row", padding: "6px 10px 6px 10px", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "24px", height: "24px", flexShrink: 0, borderRadius: "749.25px", background: "#e9ecef", boxShadow: "inset 0 0 0 0.75px #ffffff", display: "flex", flexDirection: "row", padding: "0.75px 0.75px 0.75px 0.75px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "13px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "9.75px", fontWeight: 500, color: "#414b5a" }}>EC</p>
          </div>
          <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "column", gap: "1px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "49px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>Finance</p>
          </div>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "42px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0a7854" }}>$1,320</p>
        </div>
      </div>
    </div>
  );
}
