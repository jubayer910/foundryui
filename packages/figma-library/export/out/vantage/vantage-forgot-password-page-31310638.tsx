// Forgot password page (vantage, Templates) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Ingot Icons.
import { ChevronLeft, InfoCircle, Lock, Mail, Send } from "ingotui-icons/react/stroke-rounded";

export function ForgotPasswordPage() {
  return (
    <div style={{ width: "1440px", height: "1083px", background: "#1a1a1a", overflow: "hidden", display: "flex", flexDirection: "column", padding: "24px 56px 28px 56px", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
      <div style={{ alignSelf: "stretch", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "40px", height: "40px", flexShrink: 0, borderRadius: "6.96px", background: "#232323", backdropFilter: "blur(1.18px)", overflow: "hidden", position: "relative" }}>
            <div style={{ position: "absolute", left: "10.5px", top: "21px", width: "5px", height: "9px", borderRadius: "2.5px", background: "#7b5bff" }} />
            <div style={{ position: "absolute", left: "17.5px", top: "16px", width: "5px", height: "14px", borderRadius: "2.5px", background: "#7b5bff" }} />
            <div style={{ position: "absolute", left: "24.5px", top: "10px", width: "5px", height: "20px", borderRadius: "2.5px", background: "#7b5bff" }} />
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "111px", fontFamily: "'Geist'", fontSize: "16px", fontWeight: 500, color: "#ffffff", lineHeight: "1.399999976158142", letterSpacing: "-0.02em" }}>Vantage Admin</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "72px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8a8a8a", lineHeight: "1.5", letterSpacing: "-0.01em" }}>Management</p>
          </div>
        </div>
        <div style={{ flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "98px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 400, color: "#8a8a8a" }}>Remembered it?</p>
          <div style={{ height: "32px", flexShrink: 0, borderRadius: "6px", background: "#232323", boxShadow: "inset 0 0 0 1px #2e2e2e, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", overflow: "hidden", display: "flex", flexDirection: "row", padding: "7px 11px 7px 11px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "44px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#dadada", lineHeight: "1.4500000476837158" }}>Sign in</p>
            </div>
          </div>
        </div>
      </div>
      <div style={{ width: "440px", flexShrink: 0, borderRadius: "12px", background: "#1a1a1a", boxShadow: "inset 0 0 0 1px rgba(123, 91, 255, 0.4), 0px 24px 64px -12px rgba(0, 0, 0, 0.55), 0px 0px 0px 3px rgba(123, 91, 255, 0.22), 0px 12px 72px 0px rgba(123, 91, 255, 0.18)", overflow: "hidden", display: "flex", flexDirection: "column", padding: "29px 29px 25px 29px", gap: "20px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ width: "40px", height: "40px", flexShrink: 0, borderRadius: "8px", background: "rgba(123, 91, 255, 0.12)", boxShadow: "inset 0 0 0 1px rgba(123, 91, 255, 0.22)", overflow: "hidden", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <Lock size={20} strokeWidth={1.8} style={{ width: "20px", height: "20px", flexShrink: 0, color: "#8f74ff", display: "block" }} />
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "column", gap: "8px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "232px", lineHeight: "31px", fontFamily: "'Geist'", fontSize: "24px", fontWeight: 500, color: "#ededed", letterSpacing: "-0.01em" }}>Reset your password</p>
          <p style={{ alignSelf: "stretch", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#8a8a8a", lineHeight: "20px" }}>Enter the work email you use for Vantage Admin. We will send a link that works once and expires in 30 minutes.</p>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "63px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#a0a0a0" }}>Work email</p>
          <div style={{ alignSelf: "stretch", height: "34px", flexShrink: 0, borderRadius: "6px", background: "#191919", boxShadow: "inset 0 0 0 1px #7b5bff, 0px 0px 0px 3px rgba(123, 91, 255, 0.22)", overflow: "hidden", display: "flex", flexDirection: "row", padding: "1px 11px 1px 11px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <Mail size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#8a8a8a", display: "block" }} />
            <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#dadada" }}>ana.ferreras@vantage.do</p>
          </div>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, borderRadius: "6px", background: "#7b5bff", boxShadow: "inset 0 0 0 1px #8f74ff, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5), inset 0px 2px 4px 0px rgba(255, 255, 255, 0.2)", display: "flex", flexDirection: "row", padding: "7px 13px 7px 11px", gap: "4px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <Send size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#ffffff", display: "block" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "99px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ffffff", lineHeight: "1.4500000476837158" }}>Send reset link</p>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", gap: "6px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <ChevronLeft size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#8f74ff", display: "block" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "91px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#8f74ff" }}>Back to sign in</p>
        </div>
        <div style={{ alignSelf: "stretch", height: "1px", flexShrink: 0, background: "#2e2e2e" }} />
        <div style={{ alignSelf: "stretch", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <InfoCircle size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#8a8a8a", display: "block" }} />
          <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8a8a8a", lineHeight: "17px" }}>Signed up with Google or Apple? Reset from that account instead, or ask your workspace owner to resend your invite.</p>
        </div>
      </div>
      <div style={{ alignSelf: "stretch", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "130px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8a8a8a" }}>© 2026 Vantage Admin</p>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "135px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8a8a8a" }}>Privacy      Terms      Help</p>
      </div>
    </div>
  );
}
