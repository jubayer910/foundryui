// Add card modal (veriq, Modals) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist, Inter. Icons: Ingot Icons.
import { Check, Clock, CreditCard, Lock, Refresh, ShieldCheck, X } from "ingotui-icons/react/stroke-rounded";

export function AddCardModal() {
  return (
    <div style={{ width: "560px", height: "549px", borderRadius: "16px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e8e8e8, 0px 20px 44px -12px rgba(13, 13, 18, 0.12), 0px 1px 2px 0px rgba(13, 13, 18, 0.05)", overflow: "hidden", display: "flex", flexDirection: "column", padding: "1px 1px 1px 1px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
      <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "20px 20px 16px 20px", gap: "12px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ width: "36px", height: "36px", flexShrink: 0, borderRadius: "10px", background: "rgba(253, 113, 22, 0.12)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <CreditCard size={18} strokeWidth={2} style={{ width: "18px", height: "18px", flexShrink: 0, color: "#fd7116", display: "block" }} />
        </div>
        <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "80px", lineHeight: "21px", fontFamily: "'Geist'", fontSize: "16px", fontWeight: 600, color: "#1c1b20", letterSpacing: "-0.02em" }}>Add a card</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "343px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#747474", letterSpacing: "-0.01em" }}>Your bank confirms this card before Ledgerly is billed.</p>
        </div>
        <div style={{ width: "30px", height: "30px", flexShrink: 0, borderRadius: "8px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e8e8e8", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <X size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
        </div>
      </div>
      <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", padding: "4px 20px 20px 20px", gap: "18px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ alignSelf: "stretch", flexShrink: 0, borderRadius: "12px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e8e8e8", display: "flex", flexDirection: "row", padding: "13px 15px 13px 15px", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "40px", height: "28px", flexShrink: 0, borderRadius: "6px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e8e8e8", overflow: "hidden", position: "relative" }}>
            <p style={{ position: "absolute", left: "6.5px", top: "7px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "27px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "11px", fontWeight: 700, color: "#1a1f71", letterSpacing: "0.03em" }}>VISA</p>
          </div>
          <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "115px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 600, color: "#222222" }}>Visa ending 4821</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "211px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#737373" }}>Sam Carter, exp 09/29, United States</p>
          </div>
          <div style={{ height: "22px", flexShrink: 0, borderRadius: "6px", background: "rgba(0, 190, 78, 0.08)", display: "flex", flexDirection: "row", padding: "0px 6px 0px 6px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <Check size={12} strokeWidth={3} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#00be4e", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "75px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#187c47", letterSpacing: "-0.01em" }}>Details saved</p>
          </div>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, borderRadius: "12px", background: "rgba(253, 113, 22, 0.04)", boxShadow: "inset 0 0 0 1px rgba(253, 113, 22, 0.55)", display: "flex", flexDirection: "column", padding: "17px 17px 17px 17px", gap: "14px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "36px", height: "36px", flexShrink: 0, borderRadius: "10px", background: "rgba(253, 113, 22, 0.12)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <ShieldCheck size={18} strokeWidth={2} style={{ width: "18px", height: "18px", flexShrink: 0, color: "#fd7116", display: "block" }} />
            </div>
            <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "149px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 600, color: "#222222" }}>3D Secure verification</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "290px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#737373" }}>Chase sent a 6-digit code to the phone ending 4417.</p>
            </div>
          </div>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "103px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#222222" }}>Verification code</p>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ flex: "1 1 0", minWidth: 0, height: "52px", flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e8e8e8, 0px 1px 2px 0px rgba(79, 79, 79, 0.12)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "13px", lineHeight: "26px", fontFamily: "'Geist'", fontSize: "20px", fontWeight: 500, color: "#222222" }}>4</p>
              </div>
              <div style={{ flex: "1 1 0", minWidth: 0, height: "52px", flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e8e8e8, 0px 1px 2px 0px rgba(79, 79, 79, 0.12)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "13px", lineHeight: "26px", fontFamily: "'Geist'", fontSize: "20px", fontWeight: 500, color: "#222222" }}>8</p>
              </div>
              <div style={{ flex: "1 1 0", minWidth: 0, height: "52px", flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e8e8e8, 0px 1px 2px 0px rgba(79, 79, 79, 0.12)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "9px", lineHeight: "26px", fontFamily: "'Geist'", fontSize: "20px", fontWeight: 500, color: "#222222" }}>1</p>
              </div>
              <div style={{ flex: "1 1 0", minWidth: 0, height: "52px", flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e8e8e8, 0px 1px 2px 0px rgba(79, 79, 79, 0.12)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "13px", lineHeight: "26px", fontFamily: "'Geist'", fontSize: "20px", fontWeight: 500, color: "#222222" }}>9</p>
              </div>
              <div style={{ flex: "1 1 0", minWidth: 0, height: "52px", flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #fd7116, 0px 0px 0px 3px rgba(253, 113, 22, 0.16)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "1.5px", height: "22px", flexShrink: 0, background: "#fd7116" }} />
              </div>
              <div style={{ flex: "1 1 0", minWidth: 0, height: "52px", flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e8e8e8, 0px 1px 2px 0px rgba(79, 79, 79, 0.12)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }} />
            </div>
          </div>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <Clock size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#989898", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "116px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#737373" }}>Code expires in 4:32</p>
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <Refresh size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#c46a2a", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "116px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#a05a1e" }}>Resend code in 0:42</p>
            </div>
          </div>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "6px 0px 6px 0px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <Check size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#00be4e", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "367px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#222222" }}>A $0.00 authorization confirms the card. Nothing is charged.</p>
          </div>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "6px 0px 6px 0px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <Check size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#00be4e", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "345px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#222222" }}>Invoices over $1,000 only go to 3D Secure verified cards.</p>
          </div>
        </div>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "16px", height: "16px", flexShrink: 0, borderRadius: "4px", background: "#fc7306", boxShadow: "inset 0 0 0 1px #ca7126", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <Check size={12} strokeWidth={3} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#ffffff", display: "block" }} />
          </div>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "289px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#222222" }}>Make this the default card for Veriq invoices</p>
        </div>
      </div>
      <div style={{ alignSelf: "stretch", flexShrink: 0, background: "#fafafa", boxShadow: "inset 0 1px 0 0 #ebebeb", display: "flex", flexDirection: "row", padding: "15px 20px 14px 20px", gap: "8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <Lock size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#989898", display: "block" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "186px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#737373" }}>Step 2 of 2, verify with your bank</p>
        </div>
        <div style={{ height: "34px", flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e5e5e5", display: "flex", flexDirection: "row", padding: "1px 11px 1px 11px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "33px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#6c6c6c" }}>Back</p>
        </div>
        <div style={{ flexShrink: 0, borderRadius: "11px", background: "#ca7126", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ height: "32px", flexShrink: 0, borderRadius: "10px", background: "#fc7306", boxShadow: "inset 0px 1px 0px 0px #ff8d1d", display: "flex", flexDirection: "row", padding: "0px 10px 0px 10px", gap: "6px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <ShieldCheck size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#ffffff", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "73px", fontFamily: "'Inter'", fontSize: "14px", fontWeight: 500, color: "#ffffff", lineHeight: "1.149999976158142" }}>Verify card</p>
          </div>
        </div>
      </div>
    </div>
  );
}
