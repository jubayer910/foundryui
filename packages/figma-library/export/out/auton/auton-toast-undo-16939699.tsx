// Toast, Undo (auton, Feedback) from Foundry UI.
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Foundry Icons.
import { CircleCheck as CircleCheckSolid } from "foundryui-icons/react/solid";

export function ToastUndo() {
  return (
    <div style={{ width: "359px", height: "46px", borderRadius: "12px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e7e9eb, 0px 2px 4px 0px rgba(0, 0, 0, 0.04), 0px 16px 40px -8px rgba(10, 36, 71, 0.1)", display: "flex", flexDirection: "row", padding: "13px 17px 13px 13px", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
      <CircleCheckSolid size={20} style={{ width: "20px", height: "20px", flexShrink: 0, color: "#07bc6d", display: "block" }} />
      <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#222222", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Approved · 1 request left in your queue</p>
      <div style={{ width: "1px", height: "16px", flexShrink: 0, background: "#e2e4e5" }} />
      <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#328ff9", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Undo</p>
    </div>
  );
}
