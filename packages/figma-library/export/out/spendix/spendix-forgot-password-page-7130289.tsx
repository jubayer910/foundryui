// Forgot password page (spendix, Templates) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Ingot Icons.
import { CircleCheck as CircleCheckSolid, Lock as LockSolid } from "ingotui-icons/react/solid";
import { ArrowNarrowRight, Check, ChevronLeft, Copy, InfoCircle, Key, Logout, Mail, Send, X } from "ingotui-icons/react/stroke-rounded";

export function ForgotPasswordPage() {
  return (
    <div style={{ width: "1440px", height: "860px", background: "#fcfcfc", overflow: "hidden", position: "relative" }}>
      <div style={{ position: "absolute", left: "40px", top: "32px", width: "125px", height: "46px", display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ width: "46px", height: "46px", flexShrink: 0, borderRadius: "8px", background: "#000000", backdropFilter: "blur(1.36px)", boxShadow: "inset 0 0 0 1.02px rgba(255, 255, 255, 0.4)", overflow: "hidden", display: "flex", flexDirection: "row", gap: "6.79px", justifyContent: "center", alignItems: "center", boxSizing: "border-box", position: "relative" }}>
          <svg style={{ position: "absolute", left: "-19.5px", top: "-20.25px", width: "42.96px", height: "42.96px", display: "block", lineHeight: 0, overflow: "visible", filter: "blur(3.39px)" }} xmlns="http://www.w3.org/2000/svg" width="42.96" height="42.96" viewBox="0 0 42.96 42.96" fill="none" overflow="visible"><defs><linearGradient id="g8_ckit" gradientUnits="userSpaceOnUse" x1="15.65" y1="35.66" x2="9.45" y2="0.00"><stop offset="0" stopColor="#ffffff"/><stop offset="1" stopColor="#ffffff" stopOpacity="0"/></linearGradient></defs><path transform="matrix(-0.707 0.707 -0.707 -0.707 42.96 25.215)" d="M3.04317e-12 0 L25.095 0 L21.749 35.6592 L3.346 35.6592 L3.04317e-12 0 Z" fill="url(#g8_ckit)"/></svg>
          <div style={{ width: "30px", height: "36px", flexShrink: 0, filter: "drop-shadow(0px 3px 3px rgba(36, 36, 36, 0.1))", position: "relative" }}>
            <svg style={{ position: "absolute", left: "0px", top: "3.71px", width: "30px", height: "28.57px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="30" height="28.57" viewBox="0 0 30 28.57" fill="none" overflow="visible"><defs><linearGradient id="g9_ckiu" gradientUnits="userSpaceOnUse" x1="15.00" y1="-0.00" x2="15.00" y2="28.57"><stop offset="0" stopColor="#ffffff" stopOpacity="0.8"/><stop offset="1" stopColor="#ffffff" stopOpacity="0.5"/></linearGradient></defs><path transform="matrix(-1 0 0 1 30 0)" d="M14.7 5.08644e-07 C12.1001 6.20908e-07 10.0002 2.07441 10.0002 4.64271 C10.0002 7.19128 12.1001 9.26565 14.68 9.28542 C14.04 9.26565 13.5401 8.75202 13.5401 8.11979 C13.5401 7.4876 14.0601 6.9542 14.72 6.9542 C17.5199 6.9542 23.7398 6.9542 26.4797 6.9542 C28.4196 6.9542 29.9995 5.39346 29.9995 3.47712 C29.9995 1.56074 28.4196 -8.37659e-08 26.4797 0 L14.7 5.08644e-07 Z" fill="url(#g9_ckiu)"/><path transform="matrix(-1 0 0 1 30 0)" d="M8.98585 9.2854 C6.38593 9.2854 4.286 11.3598 4.286 13.9281 C4.286 16.4767 6.38593 18.551 8.96584 18.5708 C8.32586 18.551 7.82589 18.0374 7.82589 17.4052 C7.82589 16.773 8.34588 16.2396 9.00587 16.2396 C11.8057 16.2396 18.0256 16.2396 20.7655 16.2396 C22.7054 16.2396 24.2854 14.6789 24.2854 12.7625 C24.2854 10.8461 22.7054 9.2854 20.7655 9.2854 L8.98585 9.2854 Z" fill="url(#g9_ckiu)"/><path transform="matrix(-1 0 0 1 30 0)" d="M5.03556 18.5708 C2.24993 18.5708 -8.11757e-08 20.8048 0 23.5707 C8.05519e-08 26.3153 2.24993 28.5492 5.01411 28.5705 C4.32843 28.5492 3.79274 27.9961 3.79274 27.3152 C3.79274 26.6344 4.34987 26.06 5.057 26.06 C8.05688 26.06 14.721 26.06 17.6566 26.06 C19.7351 26.06 21.4279 24.3792 21.4279 22.3154 C21.4279 20.2516 19.7351 18.5708 17.6566 18.5708 L5.03556 18.5708 Z" fill="url(#g9_ckiu)"/></svg>
          </div>
        </div>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "69px", fontFamily: "'Geist'", fontSize: "18px", fontWeight: 500, color: "#0f172a", lineHeight: "1.399999976158142" }}>Spendix</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "58px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b", lineHeight: "1.5", letterSpacing: "0.02em" }}>Enterprise</p>
        </div>
      </div>
      <p style={{ position: "absolute", left: "1257px", top: "46px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "143px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 400, color: "#64748b" }}>
        <span style={{ fontFamily: "'Geist'", fontSize: "13px", fontWeight: 400, color: "#64748b" }}>{"Remembered it? "}</span>
        <span style={{ fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#2563eb" }}>Sign in</span>
      </p>
      <div style={{ position: "absolute", left: "222px", top: "144px", width: "996px", height: "595px", overflow: "hidden", display: "flex", flexDirection: "row", gap: "56px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ width: "440px", flexShrink: 0, borderRadius: "16px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e2e8f0, 0px 20px 44px -12px rgba(13, 13, 18, 0.14), 0px 1px 2px 0px rgba(13, 13, 18, 0.05)", overflow: "hidden", display: "flex", flexDirection: "column", padding: "33px 33px 33px 33px", gap: "20px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ width: "36px", height: "36px", flexShrink: 0, borderRadius: "10px", background: "rgba(37, 99, 235, 0.12)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <LockSolid size={18} style={{ width: "18px", height: "18px", flexShrink: 0, color: "#2563eb", display: "block" }} />
          </div>
          <div style={{ alignSelf: "stretch", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "237px", lineHeight: "31px", fontFamily: "'Geist'", fontSize: "24px", fontWeight: 500, color: "#0f172a" }}>Reset your password</p>
            <p style={{ alignSelf: "stretch", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#64748b" }}>Enter your work email and we will send a link to reset your Spendix password.</p>
          </div>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "69px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>Work email</p>
            <div style={{ alignSelf: "stretch", height: "38px", flexShrink: 0, borderRadius: "9px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #2563eb, 0px 0px 0px 3px rgba(37, 99, 235, 0.16)", display: "flex", flexDirection: "row", padding: "1px 13px 1px 13px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <Mail size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#7d818c", display: "block" }} />
              <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#0f172a" }}>ethan.cole@halcyon.com</p>
            </div>
          </div>
          <div style={{ alignSelf: "stretch", height: "38px", flexShrink: 0, borderRadius: "8px", background: "#242424", boxShadow: "0px 2px 6px 0px rgba(15, 15, 15, 0.18), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12)", display: "flex", flexDirection: "row", padding: "0px 10.5px 0px 10.5px", gap: "4px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <Send size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#ffffff", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "99px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ffffff" }}>Send reset link</p>
          </div>
          <div style={{ alignSelf: "stretch", height: "32px", flexShrink: 0, borderRadius: "8px", display: "flex", flexDirection: "row", padding: "0px 10px 0px 10px", gap: "6px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <ChevronLeft size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#7d818c", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "98px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#64748b" }}>Back to sign in</p>
          </div>
          <div style={{ alignSelf: "stretch", height: "1px", flexShrink: 0, background: "#ededed" }} />
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <InfoCircle size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#7d818c", display: "block" }} />
            <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 400, color: "#64748b" }}>Signing in with Okta or Google Workspace? Reset your password there instead.</p>
          </div>
        </div>
        <div style={{ flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "column", gap: "14px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "81px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>After you send</p>
            <ArrowNarrowRight size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#a6a6a6", display: "block" }} />
          </div>
          <div style={{ width: "500px", flexShrink: 0, borderRadius: "16px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e2e8f0, 0px 20px 44px -12px rgba(13, 13, 18, 0.14), 0px 1px 2px 0px rgba(13, 13, 18, 0.05)", overflow: "hidden", display: "flex", flexDirection: "column", padding: "1px 1px 1px 1px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ alignSelf: "stretch", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #e2e8f0", display: "flex", flexDirection: "row", padding: "20px 20px 17px 20px", gap: "12px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "36px", height: "36px", flexShrink: 0, borderRadius: "10px", background: "rgba(22, 163, 74, 0.12)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <CircleCheckSolid size={18} style={{ width: "18px", height: "18px", flexShrink: 0, color: "#16a34a", display: "block" }} />
              </div>
              <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "130px", lineHeight: "21px", fontFamily: "'Geist'", fontSize: "16px", fontWeight: 500, color: "#0f172a" }}>Check your email</p>
                <p style={{ alignSelf: "stretch", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#64748b" }}>We sent a reset link to ethan.cole@halcyon.com. It works once and expires in 30 minutes.</p>
              </div>
              <div style={{ width: "30px", height: "30px", flexShrink: 0, borderRadius: "8px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #dfe1e6", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <X size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#7d818c", display: "block" }} />
              </div>
            </div>
            <div style={{ alignSelf: "stretch", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "column", padding: "20px 20px 20px 20px", gap: "18px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ alignSelf: "stretch", flexShrink: 0, borderRadius: "10px", background: "#fafafa", boxShadow: "inset 0 0 0 1px #ededed", display: "flex", flexDirection: "column", padding: "15px 17px 15px 17px", gap: "10px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "164px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#0f172a" }}>ethan.cole@halcyon.com</p>
                    <Copy size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#7d818c", display: "block" }} />
                  </div>
                  <div style={{ height: "26px", flexShrink: 0, borderRadius: "16px", background: "#e7fff0", display: "flex", flexDirection: "row", padding: "0px 12px 0px 8px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <Check size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#16a34a", display: "block" }} />
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "27px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#0a7854" }}>Sent</p>
                  </div>
                </div>
                <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "31px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#64748b" }}>Sent</p>
                  </div>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "107px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#0f172a" }}>18/04/2026, 10:42</p>
                </div>
                <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "80px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#64748b" }}>Link expires</p>
                  </div>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "101px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#0f172a" }}>18/04/2026, 11:12</p>
                </div>
                <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "106px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#64748b" }}>Requested from</p>
                  </div>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "164px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#0f172a" }}>Chrome on macOS, New York</p>
                </div>
              </div>
              <div style={{ alignSelf: "stretch", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "column", gap: "12px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "60px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>Next steps</p>
                <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ width: "28px", height: "28px", flexShrink: 0, borderRadius: "7px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e7e7e7", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                    <Mail size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#646871", display: "block" }} />
                  </div>
                  <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "1px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "177px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>Open the email from Spendix</p>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "212px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>Subject: Reset your Spendix password</p>
                  </div>
                </div>
                <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ width: "28px", height: "28px", flexShrink: 0, borderRadius: "7px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e7e7e7", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                    <Key size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#646871", display: "block" }} />
                  </div>
                  <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "1px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "148px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>Choose a new password</p>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "221px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>12+ characters, different from your last 3</p>
                  </div>
                </div>
                <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ width: "28px", height: "28px", flexShrink: 0, borderRadius: "7px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e7e7e7", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                    <Logout size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#646871", display: "block" }} />
                  </div>
                  <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "1px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "79px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>Sign in again</p>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "217px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>Other devices sign out after the change</p>
                  </div>
                </div>
              </div>
              <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <InfoCircle size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#7d818c", display: "block" }} />
                <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 400, color: "#64748b" }}>Not in your inbox? Check spam, or ask a Spendix admin to resend it from System Settings.</p>
              </div>
            </div>
            <div style={{ alignSelf: "stretch", flexShrink: 0, background: "#fafafa", boxShadow: "inset 0 1px 0 0 #e2e8f0", display: "flex", flexDirection: "row", padding: "15px 20px 14px 20px", gap: "8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>
                <span style={{ fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>{"No email? Resend in "}</span>
                <span style={{ fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#0f172a" }}>0:42</span>
              </p>
              <div style={{ height: "32px", flexShrink: 0, borderRadius: "8px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #dfe1e6", display: "flex", flexDirection: "row", padding: "1px 11px 1px 11px", gap: "6px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "119px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#0f172a" }}>Use another email</p>
              </div>
              <div style={{ height: "32px", flexShrink: 0, borderRadius: "8px", background: "#242424", boxShadow: "0px 2px 6px 0px rgba(15, 15, 15, 0.18), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12)", display: "flex", flexDirection: "row", padding: "0px 10.5px 0px 10.5px", gap: "4px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <Mail size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#ffffff", display: "block" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "103px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ffffff" }}>Open email app</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ position: "absolute", left: "40px", top: "804px", width: "1360px", height: "16px", overflow: "hidden", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "91px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>© 2026 Spendix</p>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "117px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>Privacy   Terms   Help</p>
      </div>
    </div>
  );
}
