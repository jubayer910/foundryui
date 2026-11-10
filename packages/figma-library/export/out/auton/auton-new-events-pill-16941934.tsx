// New events pill (auton, Cards and panels) from Foundry UI.
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Foundry Icons.
import { ChevronUp } from "foundryui-icons/react/stroke-rounded";

export function NewEventsPill() {
  return (
    <div style={{ width: "139px", height: "32px", borderRadius: "999px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e7e9eb, 0px 2px 4px 0px rgba(0, 0, 0, 0.04), 0px 16px 40px -8px rgba(10, 36, 71, 0.1)", display: "flex", flexDirection: "row", padding: "1px 15px 1px 11px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
      <ChevronUp size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#328ff9", display: "block" }} />
      <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#222222", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>12 new events</p>
    </div>
  );
}
