// Save bar, 933 (auton, Cards and panels) from Foundry UI.
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Foundry Icons.
import { CircleCheck as CircleCheckSolid } from "foundryui-icons/react/solid";

export function SaveBar933() {
  return (
    <div style={{ width: "933px", height: "45px", background: "#fafafa", boxShadow: "inset 0 1px 0 0 #e2e4e5", display: "flex", flexDirection: "row", padding: "15px 32px 14px 32px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
      <CircleCheckSolid size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#07bc6d", display: "block" }} />
      <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 400, color: "#777777", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "9px" }}>Saved automatically · just now</p>
      <div style={{ flex: "1 1 0", minWidth: 0, height: "1px", flexShrink: 0, overflow: "hidden" }} />
    </div>
  );
}
