// Add card modal (auton, Modals) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist, Geist Mono. Icons: Ingot Icons.
import { Bolt, Calendar, Check, CreditCard, Edit, UserCheck, X } from "ingotui-icons/react/stroke-rounded";

export function AddCardModal() {
  return (
    <div style={{ width: "600px", height: "685px", borderRadius: "16px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e7e9eb, 0px 2px 4px 0px rgba(0, 0, 0, 0.04), 0px 32px 64px -16px rgba(10, 36, 71, 0.18)", overflow: "hidden", display: "flex", flexDirection: "column", padding: "1px 1px 1px 1px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
      <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "20px 20px 18px 20px", gap: "12px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ width: "40px", height: "40px", flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #eff1f2", overflow: "hidden", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <CreditCard size={20} strokeWidth={1.8} style={{ width: "20px", height: "20px", flexShrink: 0, color: "#328ff9", display: "block" }} />
        </div>
        <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "10px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "89px", fontFamily: "'Geist'", fontSize: "18px", fontWeight: 400, color: "#111111", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "13px" }}>Add a card</p>
          <p style={{ alignSelf: "stretch", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#666666", lineHeight: "1.399999976158142" }}>Agents charge this card only inside the limits you set here.</p>
        </div>
        <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "9999px", background: "#fafafa", overflow: "hidden", position: "relative" }}>
          <X size={16} strokeWidth={2.25} style={{ position: "absolute", left: "8px", top: "8px", width: "16px", height: "16px", color: "#444444", display: "block", flexShrink: 0 }} />
        </div>
      </div>
      <div style={{ alignSelf: "stretch", height: "1px", flexShrink: 0, background: "#e2e4e5" }} />
      <div style={{ alignSelf: "stretch", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "column", padding: "20px 20px 20px 20px", gap: "16px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "22px", height: "22px", flexShrink: 0, borderRadius: "999px", background: "#328ff9", boxShadow: "inset 0px 4px 7px 0px rgba(255, 255, 255, 0.5)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <Check size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#ffffff", display: "block" }} />
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "77px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#222222", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Card details</p>
          </div>
          <div style={{ width: "120px", height: "1px", flexShrink: 0, background: "#328ff9" }} />
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "22px", height: "22px", flexShrink: 0, borderRadius: "999px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #328ff9, 0px 0px 0px 4px rgba(46, 109, 232, 0.2)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "8px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#328ff9", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "9px" }}>2</p>
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "80px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#222222", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Spend limits</p>
          </div>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, borderRadius: "12px", background: "#fafafa", boxShadow: "inset 0 0 0 1px #f2f4f5", display: "flex", flexDirection: "row", padding: "13px 15px 13px 15px", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "8px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #eff1f2", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "26px", height: "18px", flexShrink: 0, borderRadius: "4px", background: "#1a1f71", overflow: "hidden", position: "relative" }}>
              <p style={{ position: "absolute", left: "4.5px", top: "4.5px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "17px", lineHeight: "9px", fontFamily: "'Geist'", fontSize: "7px", fontWeight: 700, color: "#ffffff" }}>VISA</p>
            </div>
          </div>
          <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "8px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "113px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#333333", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Visa ending 4242</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "283px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#666666", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "9px" }}>Maya Chen, expires 08/28, verified with a $0 check</p>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "25px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#222222", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Edit</p>
            <Edit size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#444444", display: "block" }} />
          </div>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", gap: "12px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "10px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "84px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#333333", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Monthly limit</p>
            </div>
            <div style={{ alignSelf: "stretch", height: "40px", flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e7e9eb, 0px 2px 4px 0px rgba(0, 0, 0, 0.02)", display: "flex", flexDirection: "row", padding: "1px 13px 1px 13px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <Calendar size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#777777", display: "block" }} />
              <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#222222", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>$ 5,000</p>
            </div>
          </div>
          <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "10px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "76px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#333333", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Per-run cap</p>
            </div>
            <div style={{ alignSelf: "stretch", height: "40px", flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #328ff9, 0px 0px 0px 4px rgba(46, 109, 232, 0.2)", display: "flex", flexDirection: "row", padding: "1px 13px 1px 13px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <Bolt size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#777777", display: "block" }} />
              <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#222222", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>$ 50</p>
              <div style={{ width: "1px", height: "16px", flexShrink: 0, background: "#328ff9" }} />
            </div>
          </div>
        </div>
        <p style={{ alignSelf: "stretch", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#666666", lineHeight: "1.399999976158142" }}>Agents can never exceed the monthly limit. The per-run cap stops a single runaway task.</p>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "210px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#666666", lineHeight: "1.100000023841858", letterSpacing: "0.13em", textTransform: "uppercase", textBox: "trim-both cap alphabetic", height: "9px" }}>Agents allowed to charge</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "83px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#666666", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "9px" }}>3 of 4 selected</p>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, borderRadius: "12px", boxShadow: "inset 0 0 0 1px #e2e4e5", overflow: "hidden", display: "flex", flexDirection: "column", padding: "1px 1px 1px 1px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #e2e4e5", display: "flex", flexDirection: "row", padding: "12px 14px 13px 14px", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "16px", height: "16px", flexShrink: 0, borderRadius: "4px", background: "#328ff9", boxShadow: "inset 0px 4px 7px 0px rgba(255, 255, 255, 0.5)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <Check size={12} strokeWidth={3} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#ffffff", display: "block" }} />
            </div>
            <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "86px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#333333", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>deploy-agent</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "123px", fontFamily: "'Geist Mono'", fontSize: "12px", fontWeight: 400, color: "#666666", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "9px" }}>up to $2,000 / mo</p>
            </div>
          </div>
          <div style={{ alignSelf: "stretch", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #e2e4e5", display: "flex", flexDirection: "row", padding: "12px 14px 13px 14px", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "16px", height: "16px", flexShrink: 0, borderRadius: "4px", background: "#328ff9", boxShadow: "inset 0px 4px 7px 0px rgba(255, 255, 255, 0.5)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <Check size={12} strokeWidth={3} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#ffffff", display: "block" }} />
            </div>
            <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "65px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#333333", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>data-sync</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "123px", fontFamily: "'Geist Mono'", fontSize: "12px", fontWeight: 400, color: "#666666", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "9px" }}>up to $1,500 / mo</p>
            </div>
          </div>
          <div style={{ alignSelf: "stretch", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #e2e4e5", display: "flex", flexDirection: "row", padding: "12px 14px 13px 14px", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "16px", height: "16px", flexShrink: 0, borderRadius: "4px", background: "#328ff9", boxShadow: "inset 0px 4px 7px 0px rgba(255, 255, 255, 0.5)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <svg style={{ width: "12px", height: "12px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 2.5 3.25)" d="M0.53033 3.21967 C0.237437 2.92678 -0.237437 2.92678 -0.53033 3.21967 C-0.823223 3.51256 -0.823223 3.98744 -0.53033 4.28033 L0 3.75 L0.53033 3.21967 Z M1.75 5.5 L1.21967 6.03033 C1.36246 6.17312 1.5568 6.2523 1.75872 6.24995 C1.96064 6.2476 2.15308 6.16393 2.29252 6.01786 L1.75 5.5 Z M7.54252 0.517857 C7.82852 0.218233 7.81748 -0.256512 7.51786 -0.542517 C7.21823 -0.828521 6.74349 -0.817481 6.45748 -0.517857 L7 0 L7.54252 0.517857 Z M7 0 L6.45748 -0.517857 L1.20748 4.98214 L1.75 5.5 L2.29252 6.01786 L7.54252 0.517857 L7 0 Z M1.75 5.5 L2.28033 4.96967 L0.53033 3.21967 L0 3.75 L-0.53033 4.28033 L1.21967 6.03033 L1.75 5.5 Z" fill="#ffffff"/></svg>
            </div>
            <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "114px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#333333", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>support-assistant</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "123px", fontFamily: "'Geist Mono'", fontSize: "12px", fontWeight: 400, color: "#666666", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "9px" }}>up to $1,000 / mo</p>
            </div>
            <div style={{ height: "24px", flexShrink: 0, borderRadius: "9999px", background: "#fffaeb", boxShadow: "inset 0 0 0 1px rgba(255, 206, 125, 0.2)", display: "flex", flexDirection: "row", padding: "11px 11px 11px 11px", gap: "10px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "100px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#472c09", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Needs approval</p>
            </div>
          </div>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "12px 14px 12px 14px", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "16px", height: "16px", flexShrink: 0, borderRadius: "4px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #d7d9db, 0px 2px 4px 0px rgba(0, 0, 0, 0.02)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }} />
            <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "99px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#666666", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>research-agent</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "152px", fontFamily: "'Geist Mono'", fontSize: "12px", fontWeight: 400, color: "#666666", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "9px" }}>not allowed to charge</p>
            </div>
            <div style={{ height: "24px", flexShrink: 0, borderRadius: "9999px", background: "#f5f5f5", boxShadow: "inset 0 0 0 1px rgba(185, 188, 191, 0.2)", display: "flex", flexDirection: "row", padding: "11px 11px 11px 11px", gap: "10px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "20px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#333333", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Off</p>
            </div>
          </div>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, borderRadius: "12px", background: "#fafafa", boxShadow: "inset 0 0 0 1px #f2f4f5", display: "flex", flexDirection: "row", padding: "13px 13px 13px 13px", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <UserCheck size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#444444", display: "block" }} />
          <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "8px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "165px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#222222", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Ask a person above $500</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "348px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#666666", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "9px" }}>Any single charge over $500 waits for an approver in Approvals</p>
          </div>
          <div style={{ width: "32px", height: "18px", flexShrink: 0, borderRadius: "999px", background: "#328ff9", boxShadow: "inset 0px 4px 7px 0px rgba(255, 255, 255, 0.5)", position: "relative" }}>
            <svg style={{ position: "absolute", left: "16px", top: "2px", width: "14px", height: "14px", display: "block", lineHeight: 0, overflow: "visible", filter: "drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.12))" }} xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M14 7 C14 10.866 10.866 14 7 14 C3.13401 14 0 10.866 0 7 C0 3.13401 3.13401 0 7 0 C10.866 0 14 3.13401 14 7 Z" fill="#ffffff"/></svg>
          </div>
        </div>
      </div>
      <div style={{ alignSelf: "stretch", flexShrink: 0, background: "#fafafa", boxShadow: "inset 0 1px 0 0 #e2e4e5", display: "flex", flexDirection: "row", padding: "15px 20px 14px 20px", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "194px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#666666", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Step 2 of 2, card details saved</p>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ height: "36px", flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e7e9eb, 0px 2px 4px 0px rgba(0, 0, 0, 0.02)", display: "flex", flexDirection: "row", padding: "1px 15px 1px 15px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "33px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#222222", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Back</p>
          </div>
          <div style={{ height: "36px", flexShrink: 0, borderRadius: "10px", background: "#328ff9", boxShadow: "inset 0px 4px 7px 0px rgba(255, 255, 255, 0.5)", display: "flex", flexDirection: "row", padding: "0px 14px 0px 14px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "64px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#ffffff", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Save card</p>
          </div>
        </div>
      </div>
    </div>
  );
}
