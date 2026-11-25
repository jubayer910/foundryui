// Payment methods card (spendix, Cards and panels) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Ingot Icons.
import { Check, Dots, InfoCircle, Loader, Plus } from "ingotui-icons/react/stroke-rounded";

export function PaymentMethodsCard() {
  return (
    <div style={{ width: "940px", height: "319px", borderRadius: "12px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e2e8f0", overflow: "hidden", display: "flex", flexDirection: "column", padding: "1px 1px 1px 1px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
      <div style={{ alignSelf: "stretch", height: "48px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #e2e8f0", display: "flex", flexDirection: "row", padding: "0px 16px 1px 16px", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "136px", lineHeight: "21px", fontFamily: "'Geist'", fontSize: "16px", fontWeight: 500, color: "#0f172a" }}>Payment methods</p>
          <div style={{ height: "20px", flexShrink: 0, borderRadius: "6px", background: "#f1f5f9", display: "flex", flexDirection: "row", padding: "0px 6px 0px 6px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "8px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#646871" }}>3</p>
          </div>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "148px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>Spend per card, April 2026</p>
        </div>
        <div style={{ height: "32px", flexShrink: 0, borderRadius: "8px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #dfe1e6", display: "flex", flexDirection: "row", padding: "1px 11px 1px 11px", gap: "6px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <Plus size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#7d818c", display: "block" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "59px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#0f172a" }}>Add card</p>
        </div>
      </div>
      <div style={{ alignSelf: "stretch", flexShrink: 0, background: "#fafafa", boxShadow: "inset 0 -1px 0 0 #ededed", overflow: "hidden", display: "flex", flexDirection: "row", padding: "0px 0px 1px 0px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ width: "240px", height: "42px", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", padding: "0px 0px 0px 16px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "27px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#64748b" }}>Card</p>
        </div>
        <div style={{ width: "180px", height: "42px", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "67px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#64748b" }}>Assigned to</p>
        </div>
        <div style={{ width: "160px", height: "42px", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "100px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#64748b" }}>Spend this month</p>
        </div>
        <div style={{ width: "190px", height: "42px", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "58px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#64748b" }}>Limit used</p>
        </div>
        <div style={{ width: "110px", height: "42px", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "38px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#64748b" }}>Status</p>
        </div>
        <div style={{ flex: "1 1 0", minWidth: 0, height: "42px", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }} />
      </div>
      <div style={{ alignSelf: "stretch", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #ededed", overflow: "hidden", display: "flex", flexDirection: "row", padding: "0px 0px 1px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ width: "240px", height: "59px", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", padding: "0px 0px 0px 16px", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "33px", height: "22px", flexShrink: 0, borderRadius: "4.4px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e7e7e7", overflow: "hidden", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "22px", lineHeight: "12px", fontFamily: "'Geist'", fontSize: "9px", fontWeight: 700, color: "#1a1f71" }}>VISA</p>
          </div>
          <div style={{ flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "102px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>Visa ending 7731</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "146px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>Corporate card, exp 09/29</p>
          </div>
        </div>
        <div style={{ width: "180px", height: "59px", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "999px", background: "#e9ecef", boxShadow: "inset 0 0 0 1px #ffffff", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "18px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#414b5a" }}>EC</p>
          </div>
          <div style={{ flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "67px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>Ethan Cole</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "44px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>Finance</p>
          </div>
        </div>
        <div style={{ width: "160px", height: "59px", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "58px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>$1,180.00</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "80px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>6 transactions</p>
          </div>
        </div>
        <div style={{ width: "190px", height: "59px", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "92px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>39% of $3,000</p>
            <div style={{ width: "150px", height: "5px", flexShrink: 0, borderRadius: "2.5px", background: "rgba(37, 99, 235, 0.12)", overflow: "hidden", position: "relative" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "59px", height: "5px", opacity: 0.85, borderRadius: "2.5px", background: "linear-gradient(180deg, #467aee 0%, #2563eb 100%)" }} />
            </div>
          </div>
        </div>
        <div style={{ width: "110px", height: "59px", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ height: "26px", flexShrink: 0, borderRadius: "16px", background: "rgba(37, 99, 235, 0.1)", display: "flex", flexDirection: "row", padding: "0px 12px 0px 8px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <Check size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#2563eb", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "42px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#184099" }}>Default</p>
          </div>
        </div>
        <div style={{ flex: "1 1 0", minWidth: 0, height: "59px", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", padding: "0px 16px 0px 0px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
          <Dots size={20} strokeWidth={1.8} style={{ width: "20px", height: "20px", flexShrink: 0, color: "#7d818c", display: "block" }} />
        </div>
      </div>
      <div style={{ alignSelf: "stretch", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #ededed", overflow: "hidden", display: "flex", flexDirection: "row", padding: "0px 0px 1px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ width: "240px", height: "59px", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", padding: "0px 0px 0px 16px", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "33px", height: "22px", flexShrink: 0, borderRadius: "4.4px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e7e7e7", overflow: "hidden", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", gap: "-4.84px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <svg style={{ width: "12.32px", height: "12.32px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="12.32" height="12.32" viewBox="0 0 12.32 12.32" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M12.32 6.16 C12.32 9.56207 9.56207 12.32 6.16 12.32 C2.75793 12.32 0 9.56207 0 6.16 C0 2.75793 2.75793 0 6.16 0 C9.56207 0 12.32 2.75793 12.32 6.16 Z" fill="#eb001b"/></svg>
            <svg style={{ width: "12.32px", height: "12.32px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible", marginLeft: "-4.84px" }} xmlns="http://www.w3.org/2000/svg" width="12.32" height="12.32" viewBox="0 0 12.32 12.32" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M12.32 6.16 C12.32 9.56207 9.56207 12.32 6.16 12.32 C2.75793 12.32 0 9.56207 0 6.16 C0 2.75793 2.75793 0 6.16 0 C9.56207 0 12.32 2.75793 12.32 6.16 Z" fill="#f79e1b" fillOpacity="0.9"/></svg>
          </div>
          <div style={{ flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "150px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>Mastercard ending 4242</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "135px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>Design Team, exp 06/28</p>
          </div>
        </div>
        <div style={{ width: "180px", height: "59px", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "999px", background: "#ede8ff", boxShadow: "inset 0 0 0 1px #ffffff", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "20px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#513ca4" }}>MP</p>
          </div>
          <div style={{ flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "68px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>Maya Patel</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "39px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>Design</p>
          </div>
        </div>
        <div style={{ width: "160px", height: "59px", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "58px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>$1,120.00</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "79px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>4 transactions</p>
          </div>
        </div>
        <div style={{ width: "190px", height: "59px", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "92px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>22% of $5,000</p>
            <div style={{ width: "150px", height: "5px", flexShrink: 0, borderRadius: "2.5px", background: "rgba(37, 99, 235, 0.12)", overflow: "hidden", position: "relative" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "33px", height: "5px", opacity: 0.85, borderRadius: "2.5px", background: "linear-gradient(180deg, #467aee 0%, #2563eb 100%)" }} />
            </div>
          </div>
        </div>
        <div style={{ width: "110px", height: "59px", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ height: "26px", flexShrink: 0, borderRadius: "16px", background: "#e7fff0", display: "flex", flexDirection: "row", padding: "0px 12px 0px 8px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <Loader size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#16a34a", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "36px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#0a7854" }}>Active</p>
          </div>
        </div>
        <div style={{ flex: "1 1 0", minWidth: 0, height: "59px", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", padding: "0px 16px 0px 0px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
          <Dots size={20} strokeWidth={1.8} style={{ width: "20px", height: "20px", flexShrink: 0, color: "#7d818c", display: "block" }} />
        </div>
      </div>
      <div style={{ alignSelf: "stretch", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #ededed", overflow: "hidden", display: "flex", flexDirection: "row", padding: "0px 0px 1px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ width: "240px", height: "59px", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", padding: "0px 0px 0px 16px", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "33px", height: "22px", flexShrink: 0, borderRadius: "4.4px", background: "#2e77bc", overflow: "hidden", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "24px", lineHeight: "10px", fontFamily: "'Geist'", fontSize: "8px", fontWeight: 700, color: "#ffffff" }}>AMEX</p>
          </div>
          <div style={{ flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "113px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>Amex ending 3109</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "126px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>Travel Card, exp 03/28</p>
          </div>
        </div>
        <div style={{ width: "180px", height: "59px", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "999px", background: "#fef1dd", boxShadow: "inset 0 0 0 1px #ffffff", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "19px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#99453d" }}>NK</p>
          </div>
          <div style={{ flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "59px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>Noah Kim</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "31px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>Sales</p>
          </div>
        </div>
        <div style={{ width: "160px", height: "59px", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "54px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>$860.00</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "79px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>3 transactions</p>
          </div>
        </div>
        <div style={{ width: "190px", height: "59px", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "88px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>17% of $5,000</p>
            <div style={{ width: "150px", height: "5px", flexShrink: 0, borderRadius: "2.5px", background: "rgba(37, 99, 235, 0.12)", overflow: "hidden", position: "relative" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "26px", height: "5px", opacity: 0.85, borderRadius: "2.5px", background: "linear-gradient(180deg, #467aee 0%, #2563eb 100%)" }} />
            </div>
          </div>
        </div>
        <div style={{ width: "110px", height: "59px", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ height: "26px", flexShrink: 0, borderRadius: "16px", background: "#e7fff0", display: "flex", flexDirection: "row", padding: "0px 12px 0px 8px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <Loader size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#16a34a", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "36px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#0a7854" }}>Active</p>
          </div>
        </div>
        <div style={{ flex: "1 1 0", minWidth: 0, height: "59px", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", padding: "0px 16px 0px 0px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
          <Dots size={20} strokeWidth={1.8} style={{ width: "20px", height: "20px", flexShrink: 0, color: "#7d818c", display: "block" }} />
        </div>
      </div>
      <div style={{ alignSelf: "stretch", flexShrink: 0, background: "#fafafa", overflow: "hidden", display: "flex", flexDirection: "row", padding: "14px 16px 14px 16px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <InfoCircle size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#7d818c", display: "block" }} />
        <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>The default card pays for subscriptions that have no team card. Spend syncs to QuickBooks nightly.</p>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "89px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>Total this month</p>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "65px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#0f172a" }}>$3,160.00</p>
      </div>
    </div>
  );
}
