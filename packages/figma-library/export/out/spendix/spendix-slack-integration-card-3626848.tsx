// Slack integration card (spendix, Charts) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Ingot Icons.
import { CircleCheck, Loader } from "ingotui-icons/react/stroke-rounded";

export function SlackIntegrationCard() {
  return (
    <div style={{ width: "290px", height: "210px", borderRadius: "12px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e2e8f0", overflow: "hidden", position: "relative" }}>
      <div style={{ position: "absolute", left: "16px", top: "16px", width: "40px", height: "40px", borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e7e7e7", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ width: "24px", height: "24px", flexShrink: 0, position: "relative" }}>
          <div style={{ position: "absolute", left: "0px", top: "0px", width: "24px", height: "24px", background: "url('https://ingotui.com/library-img/2241eb9e90bd7762609a0b334568806d0ddacb36.png') center / cover no-repeat" }} />
        </div>
      </div>
      <div style={{ position: "absolute", left: "174px", top: "23px", width: "100px", height: "26px", borderRadius: "16px", background: "#e7fff0", display: "flex", flexDirection: "row", padding: "0px 12px 0px 8px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <Loader size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#16a34a", display: "block" }} />
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "62px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#16a34a" }}>Connected</p>
      </div>
      <p style={{ position: "absolute", left: "16px", top: "70px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "40px", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15px", fontWeight: 500, color: "#0f172a" }}>Slack</p>
      <p style={{ position: "absolute", left: "16px", top: "92px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "65px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "11px", fontWeight: 400, color: "#a6a6a6", letterSpacing: "0.02em", textTransform: "uppercase" }}>Messaging</p>
      <p style={{ position: "absolute", left: "16px", top: "114px", width: "258px", margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 400, color: "#64748b", lineHeight: "1.4500000476837158" }}>Approve or decline requests from a Slack message.</p>
      <div style={{ position: "absolute", left: "0px", top: "162px", width: "290px", height: "48px", boxShadow: "inset 0 1px 0 0 #ededed", display: "flex", flexDirection: "row", padding: "1px 16px 0px 16px", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <CircleCheck size={14} strokeWidth={1.51} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#16a34a", display: "block" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "138px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#0f172a" }}>Connected 08/04/2026</p>
        </div>
        <div style={{ width: "32px", height: "18px", flexShrink: 0, borderRadius: "9px", background: "#242424", position: "relative" }}>
          <svg style={{ position: "absolute", left: "16px", top: "2px", width: "14px", height: "14px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M14 7 C14 10.866 10.866 14 7 14 C3.13401 14 0 10.866 0 7 C0 3.13401 3.13401 0 7 0 C10.866 0 14 3.13401 14 7 Z" fill="#ffffff"/></svg>
        </div>
      </div>
    </div>
  );
}
