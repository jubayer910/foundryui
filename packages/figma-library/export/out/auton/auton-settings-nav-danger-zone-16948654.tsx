// Settings nav, Danger zone (auton, Forms) from Foundry UI.
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Foundry Icons.
import { AlertTriangle } from "foundryui-icons/react/stroke-rounded";

export function SettingsNavDangerZone() {
  return (
    <div style={{ width: "207px", height: "36px", borderRadius: "8px", display: "flex", flexDirection: "row", padding: "0px 8px 0px 8px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
      <AlertTriangle size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#f14c43", display: "block" }} />
      <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#f14c43", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Danger zone</p>
    </div>
  );
}
