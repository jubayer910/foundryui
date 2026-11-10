// Range select (auton, Charts) from Foundry UI.
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Foundry Icons.
import { Calendar, ChevronDown } from "foundryui-icons/react/stroke-rounded";

export function RangeSelect() {
  return (
    <div style={{ width: "157px", height: "36px", borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e7e9eb, 0px 2px 4px 0px rgba(0, 0, 0, 0.02)", display: "flex", flexDirection: "row", padding: "1px 11px 1px 13px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
      <Calendar size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#444444", display: "block" }} />
      <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#222222", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Last 24 hours</p>
      <ChevronDown size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#666666", display: "block" }} />
    </div>
  );
}
