// Header modal, Policy templates (auton, Modals) from Foundry UI.
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Foundry Icons.
import { Circle, X } from "foundryui-icons/react/stroke-rounded";

export function HeaderModalPolicyTemplates() {
  return (
    <div style={{ width: "878px", height: "101px", display: "flex", flexDirection: "row", padding: "20px 20px 18px 20px", gap: "12px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
      <Circle size={40} style={{ width: "40px", height: "40px", flexShrink: 0, color: "#333333", display: "block" }} />
      <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "10px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "18px", fontWeight: 400, color: "#111111", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "13px" }}>Policy templates</p>
        <p style={{ width: "740px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#777777", lineHeight: "1.399999976158142" }}>Start from rules security teams already trust. Every template opens in the editor as a draft — nothing goes live until you publish.</p>
      </div>
      <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "9999px", background: "#fafafa", overflow: "hidden", position: "relative" }}>
        <X size={16} style={{ position: "absolute", left: "8px", top: "8px", width: "16px", height: "16px", color: "#444444", display: "block", flexShrink: 0 }} />
      </div>
    </div>
  );
}
