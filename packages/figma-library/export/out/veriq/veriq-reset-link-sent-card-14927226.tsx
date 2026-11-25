// Reset link sent card (veriq, Feedback) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist, Inter. Icons: Ingot Icons.
import { Check, CircleCheck, Clock, Key, Link, Mail, Refresh, X } from "ingotui-icons/react/stroke-rounded";

export function ResetLinkSentCard() {
  return (
    <div style={{ width: "460px", height: "465px", borderRadius: "16px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e8e8e8, 0px 20px 44px -12px rgba(13, 13, 18, 0.12), 0px 1px 2px 0px rgba(13, 13, 18, 0.05)", overflow: "hidden", display: "flex", flexDirection: "column", padding: "1px 1px 1px 1px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
      <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "20px 20px 16px 20px", gap: "12px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ width: "36px", height: "36px", flexShrink: 0, borderRadius: "10px", background: "rgba(0, 190, 78, 0.12)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <Mail size={18} strokeWidth={2} style={{ width: "18px", height: "18px", flexShrink: 0, color: "#00be4e", display: "block" }} />
        </div>
        <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "128px", lineHeight: "21px", fontFamily: "'Geist'", fontSize: "16px", fontWeight: 600, color: "#1c1b20", letterSpacing: "-0.02em" }}>Check your email</p>
          <p style={{ alignSelf: "stretch", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#747474", letterSpacing: "-0.01em" }}>We sent a reset link to sam@ledgerly.io. It works once and expires in 30 minutes.</p>
        </div>
        <div style={{ width: "30px", height: "30px", flexShrink: 0, borderRadius: "8px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e8e8e8", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <X size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
        </div>
      </div>
      <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", padding: "4px 20px 20px 20px", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 2px 0px", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "67px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#222222" }}>Next steps</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "61px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#737373" }}>1 of 3 done</p>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "10px 0px 10px 0px", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "8px", background: "#ffffff", boxShadow: "0px 0px 1px 0px rgba(0, 0, 0, 0.4)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <CircleCheck size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#00be4e", display: "block" }} />
          </div>
          <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "101px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 600, color: "#222222" }}>Reset link sent</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "178px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#737373" }}>To sam@ledgerly.io at 10:42 AM</p>
          </div>
          <div style={{ height: "22px", flexShrink: 0, borderRadius: "6px", background: "rgba(0, 190, 78, 0.08)", display: "flex", flexDirection: "row", padding: "0px 6px 0px 6px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <Check size={12} strokeWidth={3} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#00be4e", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "26px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#187c47", letterSpacing: "-0.01em" }}>Sent</p>
          </div>
        </div>
        <div style={{ alignSelf: "stretch", height: "1px", flexShrink: 0, background: "#ebebeb" }} />
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "10px 0px 10px 0px", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "8px", background: "#ffffff", boxShadow: "0px 0px 1px 0px rgba(0, 0, 0, 0.4)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <Link size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#545359", display: "block" }} />
          </div>
          <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "90px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 600, color: "#222222" }}>Open the link</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "182px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#737373" }}>Valid until 11:12 AM, one use only</p>
          </div>
          <div style={{ height: "22px", flexShrink: 0, borderRadius: "6px", background: "rgba(246, 139, 46, 0.08)", display: "flex", flexDirection: "row", padding: "0px 6px 0px 6px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <Clock size={12} strokeWidth={3} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#f68b2e", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "55px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#a05a1e", letterSpacing: "-0.01em" }}>29:48 left</p>
          </div>
        </div>
        <div style={{ alignSelf: "stretch", height: "1px", flexShrink: 0, background: "#ebebeb" }} />
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "10px 0px 10px 0px", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "8px", background: "#ffffff", boxShadow: "0px 0px 1px 0px rgba(0, 0, 0, 0.4)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <Key size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#545359", display: "block" }} />
          </div>
          <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "162px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 600, color: "#222222" }}>Choose a new password</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "229px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#737373" }}>Other sessions sign out after the change</p>
          </div>
          <div style={{ height: "22px", flexShrink: 0, borderRadius: "6px", background: "rgba(115, 115, 115, 0.08)", display: "flex", flexDirection: "row", padding: "0px 6px 0px 6px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "37px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#6c6c6c", letterSpacing: "-0.01em" }}>Step 3</p>
          </div>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", padding: "8px 0px 0px 0px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", height: "40px", flexShrink: 0, borderRadius: "11px", background: "#ca7126", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ flex: "1 1 0", minWidth: 0, alignSelf: "stretch", flexShrink: 0, borderRadius: "10px", background: "#fc7306", boxShadow: "inset 0px 1px 0px 0px #ff8d1d", display: "flex", flexDirection: "row", padding: "0px 10px 0px 10px", gap: "6px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <Mail size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#ffffff", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "105px", fontFamily: "'Inter'", fontSize: "14px", fontWeight: 500, color: "#ffffff", lineHeight: "1.149999976158142" }}>Open email app</p>
            </div>
          </div>
        </div>
      </div>
      <div style={{ alignSelf: "stretch", flexShrink: 0, background: "#fafafa", boxShadow: "inset 0 1px 0 0 #ebebeb", display: "flex", flexDirection: "row", padding: "15px 20px 14px 20px", gap: "8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <Refresh size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#989898", display: "block" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "160px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#737373" }}>Didn't get it? Resend in 0:42</p>
        </div>
        <div style={{ height: "34px", flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e5e5e5", display: "flex", flexDirection: "row", padding: "1px 11px 1px 11px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "116px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#6c6c6c" }}>Use another email</p>
        </div>
      </div>
    </div>
  );
}
