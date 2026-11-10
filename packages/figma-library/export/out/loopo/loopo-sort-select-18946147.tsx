// Sort select (loopo, Forms) from Foundry UI.
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Foundry Icons.
import { ChevronDown, SortDescending } from "foundryui-icons/react/stroke-rounded";

export function SortSelect() {
  return (
    <div style={{ width: "172.7px", height: "35.1px", borderRadius: "8.8px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8", display: "flex", flexDirection: "row", padding: "8.8px 8.8px 8.8px 8.8px", gap: "6.6px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
      <SortDescending size={19.7} style={{ width: "19.7px", height: "19.7px", flexShrink: 0, color: "#8b8b8b", display: "block" }} />
      <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.1px", fontWeight: 400, color: "#6c6c6c" }}>Sort: Last activity</p>
      <ChevronDown size={15.3} style={{ width: "15.3px", height: "15.3px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
    </div>
  );
}
