// Option, Enforced (auton, Cards and panels) from Foundry UI.
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Foundry Icons.
import { ShieldCheck } from "foundryui-icons/react/stroke-rounded";

export function OptionEnforced() {
  return (
    <div style={{ width: "310px", height: "47px", borderRadius: "8px", background: "#f5f5f5", display: "flex", flexDirection: "row", padding: "10px 10px 10px 10px", gap: "10px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
      <ShieldCheck size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#444444", display: "block" }} />
      <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "8px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#222222", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Enforced</p>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#777777", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "9px" }}>Decisions apply to every matching request.</p>
      </div>
    </div>
  );
}
