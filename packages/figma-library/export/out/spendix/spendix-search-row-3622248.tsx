// Search row (spendix, Forms) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Ingot Icons.
import { Search } from "ingotui-icons/react/stroke-rounded";

export function SearchRow() {
  return (
    <div style={{ width: "618px", height: "56px", boxShadow: "inset 0 -1px 0 0 #e2e8f0", display: "flex", flexDirection: "row", padding: "0px 18px 1px 18px", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
      <Search size={18} strokeWidth={1.51} style={{ width: "18px", height: "18px", flexShrink: 0, color: "#64748b", display: "block" }} />
      <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "21px", lineHeight: "21px", fontFamily: "'Geist'", fontSize: "16px", fontWeight: 500, color: "#0f172a" }}>fig</p>
      <div style={{ width: "1.5px", height: "20px", flexShrink: 0, background: "#0f172a" }} />
      <div style={{ flex: "1 1 0", minWidth: 0, height: "1px", flexShrink: 0 }} />
      <div style={{ height: "20px", flexShrink: 0, borderRadius: "5px", background: "#f1f5f9", boxShadow: "inset 0 0 0 1px #e2e8f0", display: "flex", flexDirection: "row", padding: "1px 6px 1px 6px", gap: "1px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "19px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "11px", fontWeight: 500, color: "#64748b" }}>Esc</p>
      </div>
    </div>
  );
}
