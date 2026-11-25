// Sign in page (veriq, Templates) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist, Inter. Icons: Ingot Icons.
import { Check, ChevronRight, Clock, Eye, HelpCircle, Key, Lock, Mail, ShieldCheck, ShieldKeyhole, UserLock } from "ingotui-icons/react/stroke-rounded";

export function SignInPage() {
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
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "20px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "440px", flexShrink: 0, borderRadius: "16px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e8e8e8, 0px 12px 28px -8px rgba(0, 0, 0, 0.08), 0px 1px 2px 0px rgba(0, 0, 0, 0.05)", display: "flex", flexDirection: "column", padding: "33px 33px 33px 33px", gap: "18px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "145px", lineHeight: "26px", fontFamily: "'Geist'", fontSize: "20px", fontWeight: 600, color: "#202020" }}>Sign in to Veriq</p>
              <p style={{ alignSelf: "stretch", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#747474" }}>Verified risks and continuous coverage for Ledgerly.</p>
            </div>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ flex: "1 1 0", minWidth: 0, height: "40px", flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e5e5e5", display: "flex", flexDirection: "row", padding: "1px 11px 1px 11px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <svg width={16} height={16} viewBox="0 0 24 24" style={{ width: "16px", height: "16px", flexShrink: 0, color: "#000000", display: "block" }}><path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" fill="currentColor" /></svg>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "46px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#6c6c6c" }}>Google</p>
              </div>
              <div style={{ flex: "1 1 0", minWidth: 0, height: "40px", flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e5e5e5", display: "flex", flexDirection: "row", padding: "1px 11px 1px 11px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <svg style={{ width: "16px", height: "16px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 1.483 0)" d="M6.61801 4.59733 C5.98601 4.59733 5.00801 3.87867 3.97801 3.904 C2.61801 3.922 1.37134 4.69267 0.670675 5.91333 C-0.740658 8.36333 0.306675 11.982 1.68334 13.9733 C2.35868 14.9427 3.15534 16.0333 4.21134 15.9993 C5.22467 15.956 5.60468 15.3413 6.83467 15.3413 C8.05534 15.3413 8.40134 15.9993 9.47468 15.9733 C10.566 15.956 11.2587 14.9867 11.9253 14.008 C12.696 12.8827 13.016 11.7913 13.0333 11.7313 C13.0073 11.7227 10.912 10.9173 10.8867 8.49333 C10.8693 6.46667 12.54 5.49733 12.618 5.454 C11.6653 4.06067 10.2027 3.90467 9.69134 3.87 C8.35801 3.766 7.24134 4.59733 6.61801 4.59733 Z M8.87001 2.55333 C9.43201 1.87867 9.80334 0.935333 9.70001 0 C8.89534 0.0346667 7.92534 0.536667 7.34534 1.212 C6.82534 1.80933 6.37601 2.77067 6.49668 3.688 C7.38868 3.75733 8.30667 3.22933 8.86934 2.554" fill="#000000"/></svg>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "38px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#6c6c6c" }}>Apple</p>
              </div>
            </div>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flex: "1 1 0", minWidth: 0, height: "1px", flexShrink: 0, background: "#ebebeb" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "73px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#737373" }}>or with email</p>
              <div style={{ flex: "1 1 0", minWidth: 0, height: "1px", flexShrink: 0, background: "#ebebeb" }} />
            </div>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "69px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#222222" }}>Work email</p>
              </div>
              <div style={{ alignSelf: "stretch", height: "40px", flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e8e8e8, 0px 1px 2px 0px rgba(79, 79, 79, 0.12)", display: "flex", flexDirection: "row", padding: "1px 11px 1px 11px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <Mail size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#989898", display: "block" }} />
                <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#222222" }}>sam@ledgerly.io</p>
              </div>
            </div>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "60px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#222222" }}>Password</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "110px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#a05a1e" }}>Forgot password?</p>
              </div>
              <div style={{ alignSelf: "stretch", height: "40px", flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #fd7116, 0px 0px 0px 3px rgba(253, 113, 22, 0.16)", display: "flex", flexDirection: "row", padding: "1px 11px 1px 11px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <Lock size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#989898", display: "block" }} />
                <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#222222" }}>••••••••••••••</p>
                <Eye size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#989898", display: "block" }} />
              </div>
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "16px", height: "16px", flexShrink: 0, borderRadius: "4px", background: "#fc7306", boxShadow: "inset 0 0 0 1px #ca7126", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <Check size={12} strokeWidth={3} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#ffffff", display: "block" }} />
              </div>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "198px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#222222" }}>Keep me signed in for 30 days</p>
            </div>
            <div style={{ alignSelf: "stretch", height: "40px", flexShrink: 0, borderRadius: "11px", background: "#ca7126", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ flex: "1 1 0", minWidth: 0, alignSelf: "stretch", flexShrink: 0, borderRadius: "10px", background: "#fc7306", boxShadow: "inset 0px 1px 0px 0px #ff8d1d", display: "flex", flexDirection: "row", padding: "0px 10px 0px 10px", gap: "6px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "46px", fontFamily: "'Inter'", fontSize: "14px", fontWeight: 500, color: "#ffffff", lineHeight: "1.149999976158142" }}>Sign in</p>
              </div>
            </div>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "center", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "86px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#747474" }}>New to Veriq?</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "112px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#a05a1e" }}>Create an account</p>
            </div>
          </div>
          <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "8px", background: "#ffffff", boxShadow: "0px 0px 1px 0px rgba(0, 0, 0, 0.4)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <ChevronRight size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#989898", display: "block" }} />
          </div>
          <div style={{ width: "420px", flexShrink: 0, borderRadius: "16px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e8e8e8, 0px 12px 28px -8px rgba(0, 0, 0, 0.08), 0px 1px 2px 0px rgba(0, 0, 0, 0.05)", display: "flex", flexDirection: "column", padding: "33px 33px 33px 33px", gap: "18px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "36px", height: "36px", flexShrink: 0, borderRadius: "10px", background: "rgba(253, 113, 22, 0.12)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <ShieldCheck size={18} strokeWidth={2} style={{ width: "18px", height: "18px", flexShrink: 0, color: "#fd7116", display: "block" }} />
            </div>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "204px", lineHeight: "26px", fontFamily: "'Geist'", fontSize: "20px", fontWeight: 600, color: "#202020" }}>Two-step verification</p>
              <p style={{ alignSelf: "stretch", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#747474" }}>Enter the 6-digit code from your authenticator app for sam@ledgerly.io.</p>
            </div>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "123px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#222222" }}>Authentication code</p>
              <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ flex: "1 1 0", minWidth: 0, height: "52px", flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e8e8e8, 0px 1px 2px 0px rgba(79, 79, 79, 0.12)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "13px", lineHeight: "26px", fontFamily: "'Geist'", fontSize: "20px", fontWeight: 500, color: "#222222" }}>2</p>
                </div>
                <div style={{ flex: "1 1 0", minWidth: 0, height: "52px", flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e8e8e8, 0px 1px 2px 0px rgba(79, 79, 79, 0.12)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "11px", lineHeight: "26px", fontFamily: "'Geist'", fontSize: "20px", fontWeight: 500, color: "#222222" }}>7</p>
                </div>
                <div style={{ flex: "1 1 0", minWidth: 0, height: "52px", flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e8e8e8, 0px 1px 2px 0px rgba(79, 79, 79, 0.12)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "13px", lineHeight: "26px", fontFamily: "'Geist'", fontSize: "20px", fontWeight: 500, color: "#222222" }}>5</p>
                </div>
                <div style={{ flex: "1 1 0", minWidth: 0, height: "52px", flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #fd7116, 0px 0px 0px 3px rgba(253, 113, 22, 0.16)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ width: "1.5px", height: "22px", flexShrink: 0, background: "#fd7116" }} />
                </div>
                <div style={{ flex: "1 1 0", minWidth: 0, height: "52px", flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e8e8e8, 0px 1px 2px 0px rgba(79, 79, 79, 0.12)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }} />
                <div style={{ flex: "1 1 0", minWidth: 0, height: "52px", flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e8e8e8, 0px 1px 2px 0px rgba(79, 79, 79, 0.12)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }} />
              </div>
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <Clock size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#989898", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "96px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#737373" }}>New code in 0:18</p>
            </div>
            <div style={{ alignSelf: "stretch", height: "40px", flexShrink: 0, borderRadius: "11px", background: "#ca7126", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ flex: "1 1 0", minWidth: 0, alignSelf: "stretch", flexShrink: 0, borderRadius: "10px", background: "#fc7306", boxShadow: "inset 0px 1px 0px 0px #ff8d1d", display: "flex", flexDirection: "row", padding: "0px 10px 0px 10px", gap: "6px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "131px", fontFamily: "'Inter'", fontSize: "14px", fontWeight: 500, color: "#ffffff", lineHeight: "1.149999976158142" }}>Verify and continue</p>
              </div>
            </div>
            <div style={{ alignSelf: "stretch", height: "40px", flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e5e5e5", display: "flex", flexDirection: "row", padding: "1px 11px 1px 11px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <Key size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "144px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#6c6c6c" }}>Use a passkey instead</p>
            </div>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "center", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "107px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#747474" }}>Lost your device?</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "123px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#a05a1e" }}>Use a recovery code</p>
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
