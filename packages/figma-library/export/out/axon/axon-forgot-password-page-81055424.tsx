// Forgot password page (axon, Templates) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist, Geist Mono. Icons: Ingot Icons.
import { ChevronLeft, InfoCircle, Key, Link, Lock, Mail, Send } from "ingotui-icons/react/stroke-rounded";

export function ForgotPasswordPage() {
  return (
    <div style={{ width: "1440px", height: "1019px", background: "#f9f9f9", overflow: "hidden", display: "flex", flexDirection: "column", padding: "28px 40px 28px 40px", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
      <div style={{ alignSelf: "stretch", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "27px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6.51px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "28.63px", height: "28.63px", flexShrink: 0, borderRadius: "7.16px", background: "linear-gradient(0deg, #1b8ce8 34.7%, #4eb0ff 93.7%)", boxShadow: "inset 0.72px 0.72px 0px 0px rgba(255, 255, 255, 0.25), inset -0.72px 0.72px 0px 0px rgba(255, 255, 255, 0.25)", position: "relative" }}>
              <svg style={{ position: "absolute", left: "5.86px", top: "6.51px", width: "16.48px", height: "14.38px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="16.48" height="14.38" viewBox="0 0 16.48 14.38" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M14.3275 13.5384 C14.5373 14.0029 14.8866 14.0053 15.1024 13.5444 L16.3152 10.9478 C16.5324 10.4102 16.5324 9.80936 16.3152 9.27177 L13.8023 3.92459 C13.6728 3.68339 13.4834 3.47959 13.2523 3.33282 C13.0212 3.18604 12.7562 3.10123 12.4828 3.08655 L8.02946 3.08655 C7.75654 3.10107 7.49208 3.18629 7.26203 3.33385 C7.03198 3.4814 6.84424 3.68623 6.71722 3.92822 L2.31116 13.5408 C2.09892 14.0029 2.34148 14.3825 2.85085 14.3825 L9.83409 14.3825 C10.3435 14.3825 10.5884 14.0029 10.3774 13.5335 L9.70311 12.0478 C9.57732 11.8055 9.3904 11.6003 9.16087 11.4524 C8.93133 11.3046 8.66715 11.2193 8.3945 11.205 L0.618102 11.205 C0.108731 11.205 -0.135036 10.8253 0.0759894 10.356 L4.4202 0.84289 C4.54695 0.600835 4.73444 0.395878 4.96427 0.248113 C5.19411 0.100349 5.45839 0.0148491 5.73122 0 L7.27753 0 C7.55076 0.0150271 7.8153 0.101295 8.04487 0.250226 C8.27444 0.399158 8.46104 0.605569 8.58612 0.848952 L14.3275 13.5384 Z" fill="#ffffff"/></svg>
            </div>
            <svg style={{ width: "46.86px", height: "16.72px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="46.86" height="16.72" viewBox="0 0 46.86 16.72" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 37.574 3.494)" d="M0 11.4509 L0 0.252595 L2.0418 0.252595 L2.126 3.24163 L1.85236 3.09428 C1.97865 2.36456 2.21722 1.77518 2.56804 1.32612 C2.91887 0.877064 3.34688 0.547288 3.85206 0.336793 C4.35725 0.112264 4.90454 0 5.49393 0 C6.33591 0 7.03055 0.189446 7.57783 0.568338 C8.13915 0.933196 8.56015 1.43838 8.84081 2.0839 C9.1355 2.71539 9.28284 3.43809 9.28284 4.25201 L9.28284 11.4509 L7.0516 11.4509 L7.0516 4.92559 C7.0516 4.26604 6.98143 3.71173 6.8411 3.26268 C6.70077 2.81362 6.46922 2.46981 6.14646 2.23125 C5.8237 1.99269 5.40271 1.87341 4.88349 1.87341 C4.09764 1.87341 3.45914 2.13302 2.96798 2.65224 C2.47683 3.17146 2.23125 3.92925 2.23125 4.92559 L2.23125 11.4509 L0 11.4509 Z" fill="#15171c"/><path transform="matrix(1 0 0 1 25.131 3.494)" d="M5.30448 11.7035 C4.23797 11.7035 3.30478 11.465 2.5049 10.9879 C1.70501 10.5107 1.08756 9.83013 0.652536 8.94605 C0.217513 8.06197 0 7.03054 0 5.85177 C0 4.65896 0.217513 3.62754 0.652536 2.75749 C1.08756 1.88744 1.70501 1.21386 2.5049 0.736734 C3.30478 0.245578 4.23797 0 5.30448 0 C6.37099 0 7.30419 0.245578 8.10407 0.736734 C8.90395 1.21386 9.5214 1.88744 9.95643 2.75749 C10.3915 3.62754 10.609 4.65896 10.609 5.85177 C10.609 7.03054 10.3915 8.06197 9.95643 8.94605 C9.5214 9.83013 8.90395 10.5107 8.10407 10.9879 C7.30419 11.465 6.37099 11.7035 5.30448 11.7035 Z M5.30448 9.76698 C6.25873 9.76698 6.99546 9.42318 7.51468 8.73556 C8.0339 8.03391 8.29352 7.07264 8.29352 5.85177 C8.29352 4.6309 8.0339 3.67665 7.51468 2.98903 C6.99546 2.28738 6.25873 1.93656 5.30448 1.93656 C4.36427 1.93656 3.62754 2.28738 3.09428 2.98903 C2.57506 3.67665 2.31545 4.6309 2.31545 5.85177 C2.31545 7.07264 2.57506 8.03391 3.09428 8.73556 C3.62754 9.42318 4.36427 9.76698 5.30448 9.76698 Z" fill="#15171c"/><path transform="matrix(1 0 0 1 14.023 3.746)" d="M0 11.1984 L4.06256 5.47288 L0.168397 0 L2.65224 0 L5.40973 4.02046 L8.08302 0 L10.63 0 L6.77795 5.51498 L10.7984 11.1984 L8.31457 11.1984 L5.43078 6.9253 L2.52594 11.1984 L0 11.1984 Z" fill="#15171c"/><path transform="matrix(1 0 0 1 0 0)" d="M0 14.9452 L5.38868 0 L8.27247 0 L13.6611 14.9452 L11.2405 14.9452 L9.87223 11.051 L3.76787 11.051 L2.4207 14.9452 L0 14.9452 Z M4.48355 8.98815 L9.1776 8.98815 L6.82005 2.1681 L4.48355 8.98815 Z" fill="#15171c"/></svg>
          </div>
        </div>
        <div style={{ flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "106px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#697386", lineHeight: "20px" }}>Remembered it?</p>
          <div style={{ flexShrink: 0, borderRadius: "8px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e8e8e8", display: "flex", flexDirection: "row", padding: "5px 11px 5px 11px", gap: "4px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "44px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#686765", lineHeight: "20px" }}>Sign in</p>
          </div>
        </div>
      </div>
      <div style={{ width: "420px", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "column", gap: "24px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ alignSelf: "stretch", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "column", gap: "14px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ width: "40px", height: "40px", flexShrink: 0, borderRadius: "11px", background: "#eff8ff", overflow: "hidden", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <Key size={20} strokeWidth={1.8} style={{ width: "20px", height: "20px", flexShrink: 0, color: "#1b8ce8", display: "block" }} />
          </div>
          <div style={{ alignSelf: "stretch", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "271px", fontFamily: "'Geist'", fontSize: "28px", fontWeight: 500, color: "#15171c", lineHeight: "36px", letterSpacing: "-0.01em" }}>Reset your password</p>
            <p style={{ alignSelf: "stretch", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#697386", lineHeight: "20px" }}>Three short steps. Your workflows keep running while you do this.</p>
          </div>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", gap: "12px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "column", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "9px", background: "#eff8ff", overflow: "hidden", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <Mail size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#1b8ce8", display: "block" }} />
              </div>
              <div style={{ width: "2px", height: "18px", flexShrink: 0, borderRadius: "1px", background: "#b7dfff" }} />
            </div>
            <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "column", padding: "4px 0px 0px 0px", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "17px", fontFamily: "'Geist Mono'", fontSize: "14px", fontWeight: 600, color: "#1b8ce8", lineHeight: "20px" }}>01</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "140px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>Enter your work email</p>
                <div style={{ flexShrink: 0, borderRadius: "100px", background: "#eff8ff", display: "flex", flexDirection: "row", padding: "1px 8px 1px 8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "31px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 600, color: "#1b8ce8", lineHeight: "20px" }}>Now</p>
                </div>
              </div>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "195px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#697386", lineHeight: "20px" }}>We find your Acme workspace</p>
            </div>
          </div>
          <div style={{ alignSelf: "stretch", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", gap: "12px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "column", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "9px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ededed", overflow: "hidden", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <Link size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#979797", display: "block" }} />
              </div>
              <div style={{ width: "2px", height: "18px", flexShrink: 0, borderRadius: "1px", background: "#e8e8e8" }} />
            </div>
            <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "column", padding: "4px 0px 0px 0px", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "17px", fontFamily: "'Geist Mono'", fontSize: "14px", fontWeight: 400, color: "#697386", lineHeight: "20px" }}>02</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "144px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#697386", lineHeight: "20px" }}>Open the link we send</p>
              </div>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "217px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#697386", lineHeight: "20px" }}>Valid for 30 minutes, one use only</p>
            </div>
          </div>
          <div style={{ alignSelf: "stretch", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", gap: "12px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "column", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "9px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ededed", overflow: "hidden", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <Lock size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#979797", display: "block" }} />
              </div>
            </div>
            <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "column", padding: "4px 0px 0px 0px", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "17px", fontFamily: "'Geist Mono'", fontSize: "14px", fontWeight: 400, color: "#697386", lineHeight: "20px" }}>03</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "157px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#697386", lineHeight: "20px" }}>Choose a new password</p>
              </div>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "261px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#697386", lineHeight: "20px" }}>Other sessions sign out after the change</p>
            </div>
          </div>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "74px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#384152", lineHeight: "20px" }}>Work email</p>
          <div style={{ alignSelf: "stretch", flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #1b8ce8, 0px 0px 0px 3px #b7dfff, 0px 1px 2px 0px rgba(79, 79, 79, 0.12)", overflow: "hidden", display: "flex", flexDirection: "row", padding: "7px 11px 7px 11px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <Mail size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#979797", display: "block" }} />
            <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>chara@acme.com</p>
          </div>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, borderRadius: "10px", background: "linear-gradient(0deg, #1b8ce8 34.7%, #4eb0ff 93.7%)", boxShadow: "0px 8px 9px 0px rgba(0, 0, 0, 0.12), inset 0.6px 0.6px 0px 0px rgba(255, 255, 255, 0.25), inset -0.6px 0.6px 0px 0px rgba(255, 255, 255, 0.25)", display: "flex", flexDirection: "row", padding: "6px 12px 6px 12px", gap: "6px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <Send size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#ffffff", display: "block" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "97px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#ffffff", lineHeight: "20px" }}>Send reset link</p>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", gap: "6px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <ChevronLeft size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#747474", display: "block" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "96px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>Back to sign in</p>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, borderRadius: "8px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ededed", overflow: "hidden", display: "flex", flexDirection: "row", padding: "9px 11px 9px 11px", gap: "8px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <InfoCircle size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#979797", display: "block" }} />
          <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>Signing in through Okta? Reset it there, or ask an Admin in Team & Permissions.</p>
        </div>
      </div>
      <div style={{ alignSelf: "stretch", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#697386", lineHeight: "20px" }}>© 2026 Axon</p>
        <div style={{ flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", gap: "20px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "47px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#697386", lineHeight: "20px" }}>Privacy</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "39px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#697386", lineHeight: "20px" }}>Terms</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "30px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#697386", lineHeight: "20px" }}>Help</p>
        </div>
      </div>
    </div>
  );
}
