// Zoom controls (loopo, Editors) from Foundry UI.
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Foundry Icons.
import { Maximize, Minus, Plus } from "foundryui-icons/react/stroke-rounded";

export function ZoomControls() {
  return (
    <div style={{ width: "138.94px", height: "34.34px", borderRadius: "8.77px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8", display: "flex", flexDirection: "row", padding: "7.67px 9.87px 7.67px 9.87px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
      <Minus size={15.3} style={{ width: "15.34px", height: "15.34px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
      <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 500, color: "#222222" }}>100%</p>
      <Plus size={15.3} style={{ width: "15.34px", height: "15.34px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
      <div style={{ width: "1.1px", height: "15.34px", flexShrink: 0, background: "#e8e8e8" }} />
      <Maximize size={15.3} style={{ width: "15.34px", height: "15.34px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
    </div>
  );
}
