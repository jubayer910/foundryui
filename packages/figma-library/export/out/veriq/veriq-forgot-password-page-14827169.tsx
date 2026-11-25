// Forgot password page (veriq, Templates) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist, Inter. Icons: Ingot Icons.
import { ChevronLeft, Clock, FileSearch, HelpCircle, InfoCircle, Key, Logout, Mail, Send, ShieldCheck, ShieldKeyhole, SquareKey, UserLock } from "ingotui-icons/react/stroke-rounded";

export function ForgotPasswordPage() {
  return (
    <div style={{ width: "1440px", height: "1039px", background: "#f2f2f2", overflow: "hidden", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
      <div style={{ alignSelf: "stretch", flexShrink: 0, background: "#fafafa", boxShadow: "inset 0 -1px 0 0 #ebebeb", display: "flex", flexDirection: "row", padding: "16px 40px 17px 40px", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <svg style={{ width: "21.67px", height: "26px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="21.67" height="26" viewBox="0 0 21.67 26" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 2.166)" d="M10.8334 0 C4.85024 0 0 4.85027 0 10.8334 C0 16.8165 4.85024 21.6667 10.8334 21.6667 C16.2013 21.6667 20.6574 17.7626 21.517 12.6389 L21.4392 12.6389 C20.6375 15.7539 17.8098 18.0556 14.4445 18.0556 C10.4558 18.0556 7.22225 14.8221 7.22225 10.8334 C7.22225 6.84463 10.4558 3.61112 14.4445 3.61112 C17.8098 3.61112 20.6375 5.9128 21.4392 9.02781 L21.517 9.02781 C20.6574 3.90414 16.2013 0 10.8334 0 Z" fill="#000000" opacity="0.3"/><path transform="matrix(1 0 0 1 0 2.166)" d="M0 10.8334 C0 4.85027 4.85027 0 10.8334 0 C16.2013 0 20.6574 3.90414 21.517 9.02781 L14.217 9.02781 C13.4152 5.91281 10.5875 3.61112 7.22225 3.61112 C3.23351 3.61112 0 6.84464 0 10.8334 Z" fill="#000000"/><path transform="matrix(1 0 0 -1 0 23.834)" d="M0 10.8334 C0 4.85027 4.85027 0 10.8334 0 C16.2013 0 20.6574 3.90414 21.517 9.02781 L14.217 9.02781 C13.4152 5.91281 10.5875 3.61112 7.22225 3.61112 C3.23351 3.61112 0 6.84464 0 10.8334 Z" fill="#000000"/></svg>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "48px", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15px", fontWeight: 700, color: "#000000", letterSpacing: "0.02em" }}>VERIQ</p>
        </div>
        <div style={{ height: "40px", flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e5e5e5", display: "flex", flexDirection: "row", padding: "1px 11px 1px 11px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <HelpCircle size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "73px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#6c6c6c" }}>Need help?</p>
        </div>
      </div>
      <div style={{ alignSelf: "stretch", flex: "1 1 0", minHeight: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "28px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "24px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ width: "440px", flexShrink: 0, borderRadius: "16px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e8e8e8, 0px 12px 28px -8px rgba(0, 0, 0, 0.08), 0px 1px 2px 0px rgba(0, 0, 0, 0.05)", display: "flex", flexDirection: "column", padding: "33px 33px 33px 33px", gap: "18px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "36px", height: "36px", flexShrink: 0, borderRadius: "10px", background: "rgba(253, 113, 22, 0.12)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <SquareKey size={18} strokeWidth={2} style={{ width: "18px", height: "18px", flexShrink: 0, color: "#fd7116", display: "block" }} />
            </div>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "202px", lineHeight: "26px", fontFamily: "'Geist'", fontSize: "20px", fontWeight: 600, color: "#202020" }}>Reset your password</p>
              <p style={{ alignSelf: "stretch", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#747474" }}>Enter your work email and we'll send a reset link. It expires in 30 minutes.</p>
            </div>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "69px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#222222" }}>Work email</p>
              <div style={{ alignSelf: "stretch", height: "40px", flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #fd7116, 0px 0px 0px 3px rgba(253, 113, 22, 0.16)", display: "flex", flexDirection: "row", padding: "1px 11px 1px 11px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <Mail size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#989898", display: "block" }} />
                <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#222222" }}>sam@ledgerly.io</p>
              </div>
            </div>
            <div style={{ alignSelf: "stretch", height: "40px", flexShrink: 0, borderRadius: "11px", background: "#ca7126", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ flex: "1 1 0", minWidth: 0, alignSelf: "stretch", flexShrink: 0, borderRadius: "10px", background: "#fc7306", boxShadow: "inset 0px 1px 0px 0px #ff8d1d", display: "flex", flexDirection: "row", padding: "0px 10px 0px 10px", gap: "6px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <Send size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#ffffff", display: "block" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "100px", fontFamily: "'Inter'", fontSize: "14px", fontWeight: 500, color: "#ffffff", lineHeight: "1.149999976158142" }}>Send reset link</p>
              </div>
            </div>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <ChevronLeft size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "91px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#6c6c6c" }}>Back to sign in</p>
            </div>
            <div style={{ alignSelf: "stretch", height: "1px", flexShrink: 0, background: "#ebebeb" }} />
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <InfoCircle size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#989898", display: "block" }} />
              <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#737373" }}>Signing in through Okta? Reset it in Okta, or ask an Admin in Team & Access.</p>
            </div>
          </div>
          <div style={{ width: "380px", alignSelf: "stretch", flexShrink: 0, borderRadius: "14px", background: "#fafafa", boxShadow: "0px 0px 1px 0px rgba(0, 0, 0, 0.34)", display: "flex", flexDirection: "column", padding: "28px 28px 28px 28px", gap: "4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", padding: "0px 0px 8px 0px", gap: "4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "158px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 600, color: "#1c1b20" }}>Keep your account safe</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "166px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#737373" }}>What happens after you reset</p>
            </div>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "8px 0px 8px 0px", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "8px", background: "#ffffff", boxShadow: "0px 0px 1px 0px rgba(0, 0, 0, 0.4)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <Clock size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#545359", display: "block" }} />
              </div>
              <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "176px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 600, color: "#222222" }}>Links expire in 30 minutes</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "177px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#737373" }}>One use only, from this browser</p>
              </div>
            </div>
            <div style={{ alignSelf: "stretch", height: "1px", flexShrink: 0, background: "#ebebeb" }} />
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "8px 0px 8px 0px", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "8px", background: "#ffffff", boxShadow: "0px 0px 1px 0px rgba(0, 0, 0, 0.4)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <Logout size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#545359", display: "block" }} />
              </div>
              <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "158px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 600, color: "#222222" }}>Other sessions sign out</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "248px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#737373" }}>Every device signs in again after the change</p>
              </div>
            </div>
            <div style={{ alignSelf: "stretch", height: "1px", flexShrink: 0, background: "#ebebeb" }} />
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "8px 0px 8px 0px", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "8px", background: "#ffffff", boxShadow: "0px 0px 1px 0px rgba(0, 0, 0, 0.4)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <Key size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#545359", display: "block" }} />
              </div>
              <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "131px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 600, color: "#222222" }}>Add a passkey next</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "219px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#737373" }}>Skip the password on your next sign-in</p>
              </div>
            </div>
            <div style={{ alignSelf: "stretch", height: "1px", flexShrink: 0, background: "#ebebeb" }} />
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "8px 0px 8px 0px", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "8px", background: "#ffffff", boxShadow: "0px 0px 1px 0px rgba(0, 0, 0, 0.4)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <ShieldKeyhole size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#545359", display: "block" }} />
              </div>
              <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "236px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 600, color: "#222222" }}>Veriq never asks for your password</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "154px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#737373" }}>Not by email, chat or phone</p>
              </div>
            </div>
            <div style={{ alignSelf: "stretch", height: "1px", flexShrink: 0, background: "#ebebeb" }} />
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "8px 0px 8px 0px", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "8px", background: "#ffffff", boxShadow: "0px 0px 1px 0px rgba(0, 0, 0, 0.4)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <FileSearch size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#545359", display: "block" }} />
              </div>
              <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "194px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 600, color: "#222222" }}>Every reset is in the audit log</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "177px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#737373" }}>Admins see it in Team & Access</p>
              </div>
            </div>
          </div>
        </div>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "73px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#6c6c6c" }}>Protected by</p>
          <div style={{ height: "22px", flexShrink: 0, borderRadius: "6px", background: "rgba(0, 190, 78, 0.08)", display: "flex", flexDirection: "row", padding: "0px 6px 0px 6px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <ShieldCheck size={12} strokeWidth={3} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#00be4e", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "74px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#14693c", letterSpacing: "-0.01em" }}>SOC 2 Type II</p>
          </div>
          <div style={{ height: "22px", flexShrink: 0, borderRadius: "6px", background: "rgba(0, 190, 78, 0.08)", display: "flex", flexDirection: "row", padding: "0px 6px 0px 6px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <ShieldKeyhole size={12} strokeWidth={3} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#00be4e", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "60px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#14693c", letterSpacing: "-0.01em" }}>SAML SSO</p>
          </div>
          <div style={{ height: "22px", flexShrink: 0, borderRadius: "6px", background: "rgba(0, 190, 78, 0.08)", display: "flex", flexDirection: "row", padding: "0px 6px 0px 6px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <UserLock size={12} strokeWidth={3} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#00be4e", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "74px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#14693c", letterSpacing: "-0.01em" }}>2FA enforced</p>
          </div>
        </div>
      </div>
      <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "20px 40px 24px 40px", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "76px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#6c6c6c" }}>© 2026 Veriq</p>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "137px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#6c6c6c" }}>Privacy      Terms      Help</p>
      </div>
    </div>
  );
}
