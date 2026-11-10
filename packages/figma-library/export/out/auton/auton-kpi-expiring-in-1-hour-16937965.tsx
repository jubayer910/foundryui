// KPI, Expiring in 1 hour (auton, KPI and stats) from Foundry UI.
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Foundry Icons.
import { Hourglass } from "foundryui-icons/react/stroke-rounded";

export function KPIExpiringIn1Hour() {
  return (
    <div style={{ width: "233.3px", height: "200px", background: "#ffffff", boxShadow: "inset 0 -1px 0 0 #e2e4e5, inset -1px 0 0 0 #e2e4e5", position: "relative" }}>
      <div style={{ position: "absolute", left: "16px", top: "16px", width: "133px", height: "16px", display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <Hourglass size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#141b34", display: "block" }} />
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#555555", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Expiring in 1 hour</p>
      </div>
      <div style={{ position: "absolute", left: "16px", top: "60px", width: "156px", height: "46px", display: "flex", flexDirection: "column", gap: "16px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "28px", fontWeight: 400, color: "#111111", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "20px" }}>8</p>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#666666", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Auto-rotation scheduled</p>
      </div>
      <div style={{ position: "absolute", left: "16px", top: "148px", width: "201.3px", height: "1px", background: "#d8dadb" }} />
      <p style={{ position: "absolute", left: "16px", top: "172px", margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#666666", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>next at 14:29</p>
      <p style={{ position: "absolute", left: "121.3px", top: "172px", margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#666666", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>gh-app-deploy</p>
    </div>
  );
}
