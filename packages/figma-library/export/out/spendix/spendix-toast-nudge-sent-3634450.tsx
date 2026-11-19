// Toast Nudge sent (spendix, Feedback) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Ingot Icons.
import { CircleCheck as CircleCheckSolid } from "ingotui-icons/react/solid";
import { X } from "ingotui-icons/react/stroke-rounded";

export function ToastNudgeSent() {
  return (
    <div style={{ width: "392px", height: "64px", borderRadius: "12px", background: "#1f1f21", boxShadow: "0px 20px 44px -12px rgba(13, 13, 18, 0.14), 0px 1px 2px 0px rgba(13, 13, 18, 0.05)", display: "flex", flexDirection: "row", padding: "14px 14px 14px 16px", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
      <div style={{ width: "28px", height: "28px", flexShrink: 0, borderRadius: "8px", background: "rgba(24, 177, 112, 0.18)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
        <CircleCheckSolid size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#34d399", display: "block" }} />
      </div>
      <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "169px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ffffff" }}>Nudge sent to Maya Patel</p>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "164px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#a1a1aa" }}>REQ-1042 · reminded in Slack</p>
      </div>
      <div style={{ height: "28px", flexShrink: 0, borderRadius: "7px", boxShadow: "inset 0 0 0 1px #3f3f46", display: "flex", flexDirection: "row", padding: "1px 11px 1px 11px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "32px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#ffffff" }}>Undo</p>
      </div>
      <X size={14} strokeWidth={1.51} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#71717a", display: "block" }} />
    </div>
  );
}
