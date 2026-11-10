// Tools (loopo, Editors) from Foundry UI.
// Generated from the Figma original and checked against it. Fonts: Geist, Geist Mono. Icons: Foundry Icons.
import { ChevronDown, Search, SortDescending } from "foundryui-icons/react/stroke-rounded";
import { LayoutGrid as LayoutGridBulk, List as ListBulk } from "foundryui-icons/react/bulk";

export function Tools() {
  return (
    <div style={{ width: "567px", height: "46px", display: "flex", flexDirection: "row", padding: "0px 0px 8.8px 0px", gap: "11px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
      <div style={{ width: "263px", height: "37.3px", flexShrink: 0, borderRadius: "8.8px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8", display: "flex", flexDirection: "row", padding: "1.1px 12.1px 1.1px 12.1px", gap: "6.6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <Search size={15.3} style={{ width: "15.3px", height: "15.3px", flexShrink: 0, color: "#686765", display: "block" }} />
        <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.3px", fontWeight: 400, color: "#999999" }}>Search content</p>
        <div style={{ flexShrink: 0, borderRadius: "4.4px", background: "#f5f5f5", boxShadow: "inset 0 0 0 1.1px #e8e8e8", display: "flex", flexDirection: "row", padding: "2.2px 6.6px 2.2px 6.6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "16px", fontFamily: "'Geist Mono'", fontSize: "12.1px", fontWeight: 400, color: "#6c6c6c" }}>/</p>
        </div>
      </div>
      <div style={{ height: "35.1px", flexShrink: 0, borderRadius: "8.8px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8", display: "flex", flexDirection: "row", padding: "8.8px 8.8px 8.8px 8.8px", gap: "6.6px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
        <SortDescending size={19.7} style={{ width: "19.7px", height: "19.7px", flexShrink: 0, color: "#8b8b8b", display: "block" }} />
        <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.1px", fontWeight: 400, color: "#6c6c6c" }}>Last edited</p>
        <ChevronDown size={15.3} style={{ width: "15.3px", height: "15.3px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
      </div>
      <div style={{ flexShrink: 0, borderRadius: "11px", background: "#f5f5f5", display: "flex", flexDirection: "row", padding: "3.3px 3.3px 3.3px 3.3px", gap: "2.2px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ flexShrink: 0, borderRadius: "8.8px", background: "#ffffff", boxShadow: "0px 0px 1.1px 0px rgba(0, 0, 0, 0.25)", display: "flex", flexDirection: "row", padding: "5.5px 11px 5.5px 11px", gap: "6.6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <LayoutGridBulk size={15.3} style={{ width: "15.3px", height: "15.3px", flexShrink: 0, color: "#141b34", display: "block" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 500, color: "#000000" }}>Grid</p>
        </div>
        <div style={{ flexShrink: 0, borderRadius: "8.8px", display: "flex", flexDirection: "row", padding: "5.5px 11px 5.5px 11px", gap: "6.6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <ListBulk size={15.3} style={{ width: "15.3px", height: "15.3px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 400, color: "#6c6c6c" }}>List</p>
        </div>
      </div>
    </div>
  );
}
