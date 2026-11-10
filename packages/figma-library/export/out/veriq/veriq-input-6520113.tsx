// Input (veriq, Forms) from Foundry UI.
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Foundry Icons.
import { Search } from "foundryui-icons/react/stroke-rounded";

export function Input() {
  return (
    <div style={{ width: "638px", height: "56px", boxShadow: "inset 0 -1px 0 0 #ebebeb", display: "flex", flexDirection: "row", padding: "0px 18px 1px 18px", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
      <Search size={18} style={{ width: "18px", height: "18px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
      <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "21px", fontFamily: "'Geist'", fontSize: "16px", fontWeight: 400, color: "#222222" }}>
        <span style={{ fontFamily: "'Geist'", fontSize: "16px", fontWeight: 400, color: "#222222" }}>bill</span>
        <span style={{ fontFamily: "'Geist'", fontSize: "16px", fontWeight: 400, color: "#fd7116" }}>|</span>
      </p>
      <div style={{ height: "20px", flexShrink: 0, borderRadius: "5px", background: "#f3f3f3", display: "flex", flexDirection: "row", padding: "0px 5px 0px 5px", gap: "1px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#6c6c6c" }}>esc</p>
      </div>
    </div>
  );
}
