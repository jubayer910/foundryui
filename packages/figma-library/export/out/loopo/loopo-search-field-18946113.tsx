// Search field (loopo, Forms) from Foundry UI.
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Foundry Icons.
import { Search } from "foundryui-icons/react/stroke-rounded";

export function SearchField() {
  return (
    <div style={{ width: "328.7px", height: "37.3px", borderRadius: "8.8px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8", display: "flex", flexDirection: "row", padding: "1.1px 12.1px 1.1px 12.1px", gap: "6.6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
      <Search size={15.3} style={{ width: "15.3px", height: "15.3px", flexShrink: 0, color: "#686765", display: "block" }} />
      <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.3px", fontWeight: 400, color: "#999999" }}>Search name, email or tag</p>
    </div>
  );
}
