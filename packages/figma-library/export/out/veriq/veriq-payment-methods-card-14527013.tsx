// Payment methods card (veriq, Cards and panels) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Ingot Icons.
import { AlertTriangle, Dots, InfoCircle, Lock, Plus, ShieldCheck } from "ingotui-icons/react/stroke-rounded";

export function PaymentMethodsCard() {
  return (
    <div style={{ width: "500px", height: "398px", borderRadius: "14px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e8e8e8, 0px 12px 28px -8px rgba(0, 0, 0, 0.08), 0px 1px 2px 0px rgba(0, 0, 0, 0.05)", display: "flex", flexDirection: "column", padding: "21px 21px 21px 21px", gap: "14px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
      <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "121px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 600, color: "#222222" }}>Payment methods</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "208px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#737373" }}>3 cards on file for Ledgerly, 2 verified</p>
        </div>
        <div style={{ height: "34px", flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e5e5e5", display: "flex", flexDirection: "row", padding: "1px 11px 1px 11px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <Plus size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "58px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#6c6c6c" }}>Add card</p>
        </div>
      </div>
      <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "4px 0px 4px 52px", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#737373" }}>Card</p>
        <p style={{ width: "118px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#737373" }}>Verification</p>
        <p style={{ width: "64px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#737373" }}>Risk</p>
        <div style={{ width: "16px", height: "1px", flexShrink: 0, overflow: "hidden" }} />
      </div>
      <div style={{ alignSelf: "stretch", height: "1px", flexShrink: 0, background: "#ebebeb" }} />
      <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "12px 0px 12px 0px", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "40px", height: "28px", flexShrink: 0, borderRadius: "6px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e8e8e8", overflow: "hidden", position: "relative" }}>
            <p style={{ position: "absolute", left: "6.5px", top: "7px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "27px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "11px", fontWeight: 700, color: "#1a1f71", letterSpacing: "0.03em" }}>VISA</p>
          </div>
          <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "115px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 600, color: "#222222" }}>Visa ending 4821</p>
              <div style={{ height: "22px", flexShrink: 0, borderRadius: "6px", background: "rgba(252, 115, 6, 0.08)", display: "flex", flexDirection: "row", padding: "0px 6px 0px 6px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "41px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#a05a1e", letterSpacing: "-0.01em" }}>Default</p>
              </div>
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "129px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#737373" }}>Sam Carter, exp 09/29</p>
          </div>
          <div style={{ width: "118px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ height: "22px", flexShrink: 0, borderRadius: "6px", background: "rgba(0, 190, 78, 0.08)", display: "flex", flexDirection: "row", padding: "0px 6px 0px 6px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <ShieldCheck size={12} strokeWidth={3} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#00be4e", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "68px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#187c47", letterSpacing: "-0.01em" }}>3DS verified</p>
            </div>
          </div>
          <div style={{ width: "64px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ height: "22px", flexShrink: 0, borderRadius: "6px", background: "rgba(86, 178, 238, 0.08)", display: "flex", flexDirection: "row", padding: "0px 6px 0px 6px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "24px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#38749b", letterSpacing: "-0.01em" }}>Low</p>
            </div>
          </div>
          <Dots size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#989898", display: "block" }} />
        </div>
        <div style={{ alignSelf: "stretch", height: "1px", flexShrink: 0, background: "#ebebeb" }} />
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "12px 0px 12px 0px", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "40px", height: "28px", flexShrink: 0, borderRadius: "6px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e8e8e8", overflow: "hidden", position: "relative" }}>
            <svg style={{ position: "absolute", left: "7px", top: "6px", width: "16px", height: "16px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M16 8 C16 12.4183 12.4183 16 8 16 C3.58172 16 0 12.4183 0 8 C0 3.58172 3.58172 0 8 0 C12.4183 0 16 3.58172 16 8 Z" fill="#eb001b"/></svg>
            <svg style={{ position: "absolute", left: "17px", top: "6px", width: "16px", height: "16px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M16 8 C16 12.4183 12.4183 16 8 16 C3.58172 16 0 12.4183 0 8 C0 3.58172 3.58172 0 8 0 C12.4183 0 16 3.58172 16 8 Z" fill="#f79e1b" fillOpacity="0.92"/></svg>
          </div>
          <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "164px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 600, color: "#222222" }}>Mastercard ending 7730</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "120px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#737373" }}>Maya Kim, exp 04/28</p>
          </div>
          <div style={{ width: "118px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ height: "22px", flexShrink: 0, borderRadius: "6px", background: "rgba(0, 190, 78, 0.08)", display: "flex", flexDirection: "row", padding: "0px 6px 0px 6px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <ShieldCheck size={12} strokeWidth={3} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#00be4e", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "68px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#187c47", letterSpacing: "-0.01em" }}>3DS verified</p>
            </div>
          </div>
          <div style={{ width: "64px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ height: "22px", flexShrink: 0, borderRadius: "6px", background: "rgba(86, 178, 238, 0.08)", display: "flex", flexDirection: "row", padding: "0px 6px 0px 6px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "24px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#38749b", letterSpacing: "-0.01em" }}>Low</p>
            </div>
          </div>
          <Dots size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#989898", display: "block" }} />
        </div>
        <div style={{ alignSelf: "stretch", height: "1px", flexShrink: 0, background: "#ebebeb" }} />
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "12px 0px 12px 0px", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "40px", height: "28px", flexShrink: 0, borderRadius: "6px", background: "#2e77bc", overflow: "hidden", position: "relative" }}>
            <p style={{ position: "absolute", left: "5px", top: "7.5px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "30px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 700, color: "#ffffff", letterSpacing: "0.02em" }}>AMEX</p>
          </div>
          <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "125px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 600, color: "#222222" }}>Amex ending 1009</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "125px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#737373" }}>Ledgerly AP, exp 11/26</p>
          </div>
          <div style={{ width: "118px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ height: "22px", flexShrink: 0, borderRadius: "6px", background: "rgba(246, 139, 46, 0.08)", display: "flex", flexDirection: "row", padding: "0px 6px 0px 6px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <AlertTriangle size={12} strokeWidth={3} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#f68b2e", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "62px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#a05a1e", letterSpacing: "-0.01em" }}>Needs 3DS</p>
            </div>
          </div>
          <div style={{ width: "64px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ height: "22px", flexShrink: 0, borderRadius: "6px", background: "rgba(127, 88, 245, 0.08)", display: "flex", flexDirection: "row", padding: "0px 6px 0px 6px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "45px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#704dd8", letterSpacing: "-0.01em" }}>Medium</p>
            </div>
          </div>
          <Dots size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#989898", display: "block" }} />
        </div>
      </div>
      <div style={{ alignSelf: "stretch", height: "1px", flexShrink: 0, background: "#ebebeb" }} />
      <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <Lock size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#989898", display: "block" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "342px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#737373" }}>Card numbers are tokenized. Veriq never stores full numbers.</p>
        </div>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <InfoCircle size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#989898", display: "block" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "316px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#737373" }}>Cards without 3D Secure can't pay invoices over $1,000.</p>
        </div>
      </div>
    </div>
  );
}
