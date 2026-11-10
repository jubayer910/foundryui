// Zoom control (vantage, Editors) from Foundry UI.
// Generated from the Figma original and checked against it. Fonts: Geist Mono. Icons: Foundry Icons.
import { Minus, Plus } from "foundryui-icons/react/stroke-rounded";

export function ZoomControl() {
  return (
    <div style={{ width: "122px", height: "32px", borderRadius: "6px", background: "#232323", boxShadow: "inset 0 0 0 1px #2e2e2e, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
      <div style={{ width: "32px", height: "32px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
        <Minus size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#dadada", display: "block" }} />
      </div>
      <div style={{ width: "56px", height: "32px", flexShrink: 0, boxShadow: "inset 1px 0 0 0 #2e2e2e, inset -1px 0 0 0 #2e2e2e", display: "flex", flexDirection: "row", padding: "0px 1px 0px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#dadada" }}>100%</p>
      </div>
      <div style={{ width: "32px", height: "32px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
        <Plus size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#dadada", display: "block" }} />
      </div>
    </div>
  );
}
