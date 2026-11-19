// AI panel (montra, Cards and panels) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Ingot Icons.
import { ArrowUpRight, Sparkles } from "ingotui-icons/react/stroke-rounded";

export function AIPanel() {
  return (
    <div style={{ width: "330px", height: "123.44px", borderRadius: "9.14px", background: "#fafafa", boxShadow: "inset 0 0 0 0.91px #ededed", position: "relative" }}>
      <div style={{ position: "absolute", left: "10.97px", top: "10.97px", width: "29.24px", height: "29.24px", borderRadius: "7.31px", background: "rgba(142, 131, 253, 0.12)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
        <Sparkles size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#8e83fd", display: "block" }} />
      </div>
      <p style={{ position: "absolute", left: "49.35px", top: "10.97px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "59px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#000000" }}>Montra AI</p>
      <p style={{ position: "absolute", left: "49.35px", top: "27.97px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "152px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#6b6b6b" }}>Answers from your own books</p>
      <div style={{ position: "absolute", left: "281.03px", top: "12.79px", width: "43.28px", height: "23.3px", borderRadius: "999px", background: "#f4f2ff", display: "flex", flexDirection: "row", padding: "0px 9.14px 0px 9.14px", gap: "3.66px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "25px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#7a6cf5" }}>Beta</p>
      </div>
      <div style={{ position: "absolute", left: "10.97px", top: "52px", width: "308.06px", height: "27.42px", borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8", display: "flex", flexDirection: "row", padding: "0.91px 10.05px 0.91px 10.05px", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#222222" }}>Why did marketing spend jump in August?</p>
        <ArrowUpRight size={11} strokeWidth={1.51} style={{ width: "10.97px", height: "10.97px", flexShrink: 0, color: "#a6a6a6", display: "block" }} />
      </div>
      <div style={{ position: "absolute", left: "10.97px", top: "83px", width: "308.06px", height: "27.42px", borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8", display: "flex", flexDirection: "row", padding: "0.91px 10.05px 0.91px 10.05px", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#222222" }}>Which invoices are overdue right now?</p>
        <ArrowUpRight size={11} strokeWidth={1.51} style={{ width: "10.97px", height: "10.97px", flexShrink: 0, color: "#a6a6a6", display: "block" }} />
      </div>
    </div>
  );
}
