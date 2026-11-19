// Search row (abotix, Forms) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Ingot Icons.
import { Search } from "ingotui-icons/react/stroke-rounded";

export function SearchRow() {
  return (
    <div style={{ width: "598px", height: "50px", boxShadow: "inset 0 -1px 0 0 #ececec", display: "flex", flexDirection: "row", padding: "14px 16px 15px 16px", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
      <Search size={18} strokeWidth={1.51} style={{ width: "18px", height: "18px", flexShrink: 0, color: "#747474", display: "block" }} />
      <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "57px", lineHeight: "21px", fontFamily: "'Geist'", fontSize: "16px", fontWeight: 400, color: "#2d2d2d" }}>support</p>
        <div style={{ width: "1.5px", height: "20px", flexShrink: 0, background: "#2563eb" }} />
      </div>
      <div style={{ height: "20px", flexShrink: 0, borderRadius: "5px", background: "#f3f3f3", display: "flex", flexDirection: "row", padding: "0px 5px 0px 5px", gap: "1px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "21px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#353537" }}>Esc</p>
      </div>
    </div>
  );
}
