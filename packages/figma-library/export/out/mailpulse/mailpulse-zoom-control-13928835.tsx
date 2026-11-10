// Zoom control (mailpulse, Editors) from Foundry UI.
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Foundry Icons.
import { Plus } from "foundryui-icons/react/stroke-rounded";
import { LayoutGrid as LayoutGridBulk } from "foundryui-icons/react/bulk";

export function ZoomControl() {
  return (
    <div style={{ width: "157.49px", height: "34.73px", borderRadius: "9.14px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8, 0px 0.91px 1.83px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "row", padding: "4.57px 4.57px 4.57px 4.57px", gap: "1.83px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
      <div style={{ width: "25.59px", height: "25.59px", flexShrink: 0, borderRadius: "6.4px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ width: "9.14px", height: "1.37px", flexShrink: 0, borderRadius: "1px", background: "#6c6c6c" }} />
      </div>
      <div style={{ height: "25.59px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 5.48px 0px 5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 500, color: "#222222" }}>100%</p>
      </div>
      <div style={{ width: "25.59px", height: "25.59px", flexShrink: 0, borderRadius: "6.4px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
        <Plus size={12.8} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
      </div>
      <div style={{ width: "0.91px", height: "16.45px", flexShrink: 0, background: "#eeeeee" }} />
      <div style={{ height: "25.59px", flexShrink: 0, borderRadius: "6.4px", display: "flex", flexDirection: "row", padding: "0px 7.31px 0px 7.31px", gap: "4.57px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <LayoutGridBulk size={12.8} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 500, color: "#222222" }}>Fit</p>
      </div>
    </div>
  );
}
