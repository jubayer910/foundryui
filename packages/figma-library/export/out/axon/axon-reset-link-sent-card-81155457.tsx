// Reset link sent card (axon, Feedback) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist, Geist Mono. Icons: Ingot Icons.
import { CircleCheck, Clock, ExternalLink, Link, Lock, Mail } from "ingotui-icons/react/stroke-rounded";

export function ResetLinkSentCard() {
  return (
    <div style={{ width: "440px", height: "441px", borderRadius: "14px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e8e8e8, 0px 24px 48px 0px rgba(13, 13, 18, 0.12), 0px 12px 22px 0px rgba(13, 13, 18, 0.08), 0px 1px 2px 0px rgba(79, 79, 79, 0.12)", overflow: "hidden", display: "flex", flexDirection: "column", padding: "1px 1px 1px 1px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
      <div style={{ alignSelf: "stretch", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", padding: "18px 20px 14px 20px", gap: "12px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ width: "36px", height: "36px", flexShrink: 0, borderRadius: "10px", background: "#f4fcf7", overflow: "hidden", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <Mail size={18} strokeWidth={2} style={{ width: "18px", height: "18px", flexShrink: 0, color: "#17a673", display: "block" }} />
        </div>
        <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "column", gap: "4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "128px", fontFamily: "'Geist'", fontSize: "16px", fontWeight: 400, color: "#15171c", lineHeight: "24px" }}>Check your email</p>
          <p style={{ alignSelf: "stretch", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>We sent a reset link to chara@acme.com. It works once and expires in 30 minutes.</p>
        </div>
      </div>
      <div style={{ alignSelf: "stretch", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "column", padding: "4px 20px 20px 20px", gap: "12px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ alignSelf: "stretch", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "70px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>Next steps</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "70px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>1 of 3 done</p>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, borderRadius: "10px", boxShadow: "inset 0 0 0 1px #ededed", overflow: "hidden", display: "flex", flexDirection: "column", padding: "1px 1px 1px 1px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", padding: "10px 12px 10px 12px", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "9px", background: "#f4fcf7", overflow: "hidden", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <CircleCheck size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#17a673", display: "block" }} />
            </div>
            <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "96px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>Reset link sent</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "213px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>To chara@acme.com at 10:42 AM</p>
            </div>
            <div style={{ flexShrink: 0, borderRadius: "4.58px", background: "#f6fffb", display: "flex", flexDirection: "row", padding: "2px 8px 2px 8px", gap: "3px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <svg style={{ width: "12px", height: "12px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 1 1)" d="M10 5 L10.625 5 C10.625 1.89482 8.10518 -0.625 5 -0.625 L5 0 L5 0.625 C7.41482 0.625 9.375 2.58518 9.375 5 L10 5 Z M5 0 L5 -0.625 C1.89482 -0.625 -0.625 1.89482 -0.625 5 L0 5 L0.625 5 C0.625 2.58518 2.58518 0.625 5 0.625 L5 0 Z M0 5 L-0.625 5 C-0.625 8.10518 1.89482 10.625 5 10.625 L5 10 L5 9.375 C2.58518 9.375 0.625 7.41482 0.625 5 L0 5 Z M5 10 L5 10.625 C8.10518 10.625 10.625 8.10518 10.625 5 L10 5 L9.375 5 C9.375 7.41482 7.41482 9.375 5 9.375 L5 10 Z" fill="#17a673"/><path transform="matrix(1 0 0 1 4 4.5)" d="M0.441942 1.30806 C0.197864 1.06398 -0.197864 1.06398 -0.441942 1.30806 C-0.686019 1.55214 -0.686019 1.94786 -0.441942 2.19194 L0 1.75 L0.441942 1.30806 Z M1.25 3 L0.808058 3.44194 C0.928599 3.56248 1.09315 3.62856 1.26358 3.62485 C1.43401 3.62115 1.59553 3.54799 1.71072 3.42233 L1.25 3 Z M4.46072 0.422328 C4.69397 0.167879 4.67678 -0.227476 4.42233 -0.460721 C4.16788 -0.693967 3.77252 -0.676777 3.53928 -0.422328 L4 0 L4.46072 0.422328 Z M0 1.75 L-0.441942 2.19194 L0.808058 3.44194 L1.25 3 L1.69194 2.55806 L0.441942 1.30806 L0 1.75 Z M1.25 3 L1.71072 3.42233 L4.46072 0.422328 L4 0 L3.53928 -0.422328 L0.789279 2.57767 L1.25 3 Z" fill="#17a673"/></svg>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "32px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 600, color: "#17a673", lineHeight: "20px" }}>Sent</p>
            </div>
          </div>
          <div style={{ alignSelf: "stretch", flexShrink: 0, boxShadow: "inset 0 1px 0 0 #ededed", overflow: "hidden", display: "flex", flexDirection: "row", padding: "11px 12px 10px 12px", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "9px", background: "#eff8ff", overflow: "hidden", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <Link size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#1b8ce8", display: "block" }} />
            </div>
            <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "87px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>Open the link</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "207px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>Valid until 11:12 AM, one use only</p>
            </div>
            <div style={{ flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <Clock size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#1b8ce8", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "42px", fontFamily: "'Geist Mono'", fontSize: "14px", fontWeight: 600, color: "#1b8ce8", lineHeight: "20px" }}>29:48</p>
            </div>
          </div>
          <div style={{ alignSelf: "stretch", flexShrink: 0, boxShadow: "inset 0 1px 0 0 #ededed", overflow: "hidden", display: "flex", flexDirection: "row", padding: "11px 12px 10px 12px", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "9px", background: "#f5f5f5", overflow: "hidden", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <Lock size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#979797", display: "block" }} />
            </div>
            <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "157px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>Choose a new password</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "261px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>Other sessions sign out after the change</p>
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "42px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>Step 3</p>
          </div>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, borderRadius: "10px", background: "linear-gradient(0deg, #1b8ce8 34.7%, #4eb0ff 93.7%)", boxShadow: "0px 8px 9px 0px rgba(0, 0, 0, 0.12), inset 0.6px 0.6px 0px 0px rgba(255, 255, 255, 0.25), inset -0.6px 0.6px 0px 0px rgba(255, 255, 255, 0.25)", display: "flex", flexDirection: "row", padding: "6px 12px 6px 12px", gap: "6px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <ExternalLink size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#ffffff", display: "block" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "101px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#ffffff", lineHeight: "20px" }}>Open email app</p>
        </div>
      </div>
      <div style={{ alignSelf: "stretch", flexShrink: 0, background: "#f9f9f9", boxShadow: "inset 0 1px 0 0 #e9e9e9", overflow: "hidden", display: "flex", flexDirection: "row", padding: "13px 20px 12px 20px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>
          <span style={{ fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>{"Didn't get it? Resend in "}</span>
          <span style={{ fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>0:42</span>
        </p>
        <div style={{ flexShrink: 0, borderRadius: "8px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e8e8e8", display: "flex", flexDirection: "row", padding: "5px 11px 5px 11px", gap: "4px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "116px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#686765", lineHeight: "20px" }}>Use another email</p>
        </div>
      </div>
    </div>
  );
}
