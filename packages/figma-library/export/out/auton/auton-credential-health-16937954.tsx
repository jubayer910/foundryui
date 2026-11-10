// Credential health (auton, Cards and panels) from Foundry UI.
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Foundry Icons.
import { Flame as FlameSolid } from "foundryui-icons/react/solid";

export function CredentialHealth() {
  return (
    <div style={{ width: "473px", height: "200px", background: "#ffffff", boxShadow: "inset 0 -1px 0 0 #e2e4e5, inset -1px 0 0 0 #e2e4e5", overflow: "hidden", position: "relative" }}>
      <p style={{ position: "absolute", left: "20px", top: "20px", margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "18px", fontWeight: 400, color: "#111111", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "13px" }}>Credential Health</p>
      <div style={{ position: "absolute", left: "20px", top: "60px", width: "145px", height: "42px", display: "flex", flexDirection: "column", gap: "12px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "28px", fontWeight: 400, color: "#222222", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "20px" }}>112/128</p>
        <p style={{ alignSelf: "stretch", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#777777", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Short-lived credentials</p>
      </div>
      <div style={{ position: "absolute", left: "20px", top: "124px", width: "433px", height: "12px", borderRadius: "10px", background: "#fafafa", overflow: "hidden" }} />
      <div style={{ position: "absolute", left: "20px", top: "124px", width: "379px", height: "12px", borderRadius: "10px", background: "linear-gradient(90deg, #fd806d 0%, #ffd5b8 24%, #c9c6f2 56%, #fcb6dd 100%)", overflow: "hidden" }} />
      <div style={{ position: "absolute", left: "389px", top: "120px", width: "20px", height: "20px", borderRadius: "60px", background: "#328ff9", boxShadow: "0px 0px 0px 4px rgba(46, 109, 232, 0.2), 0px 0px 0px 8px rgba(46, 109, 232, 0.2), inset 0px 4px 7px 0px rgba(255, 255, 255, 0.5)", overflow: "hidden", display: "flex", flexDirection: "row", padding: "6px 6px 6px 6px", gap: "10px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
        <FlameSolid size={12} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#ffffff", display: "block" }} />
      </div>
      <div style={{ position: "absolute", left: "20px", top: "152px", width: "433px", height: "9px", display: "flex", flexDirection: "row", gap: "16px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#888888", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "9px" }}>0</p>
        <div style={{ flex: "1 1 0", minWidth: 0, height: "1px", flexShrink: 0, overflow: "hidden" }} />
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#888888", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "9px" }}>Target 90% short-lived</p>
        <div style={{ flex: "1 1 0", minWidth: 0, height: "1px", flexShrink: 0, overflow: "hidden" }} />
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#888888", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "9px" }}>128</p>
      </div>
    </div>
  );
}
