// Callout, Next payout (loopo, Feedback) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Ingot Icons.
import { InfoCircle as InfoCircleBulk } from "ingotui-icons/react/bulk";

export function CalloutNextPayout() {
  return (
    <div style={{ width: "680px", height: "72.3px", borderRadius: "13.15px", background: "rgba(77, 152, 254, 0.08)", display: "flex", flexDirection: "row", padding: "13.15px 15.34px 13.15px 15.34px", gap: "10.96px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
      <InfoCircleBulk size={19.7} style={{ width: "19.72px", height: "19.72px", flexShrink: 0, color: "#0044ff", display: "block" }} />
      <p style={{ width: "618.64px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 400, color: "#222222", lineHeight: "1.5" }}>
        <span style={{ fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 400, color: "#222222", lineHeight: "1.5" }}>{"Your next payout is "}</span>
        <span style={{ fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 500, color: "#222222", lineHeight: "1.5" }}>$8,960 on Dec 16</span>
        <span style={{ fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 400, color: "#222222", lineHeight: "1.5" }}>{" to Chase •••• 4821. Change the schedule or bank in Workspace settings › Payouts."}</span>
      </p>
    </div>
  );
}
