// Top bar (axon, Navigation) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Ingot Icons.
import { Category as CategorySolid } from "ingotui-icons/react/solid";
import { ChevronRight, Search } from "ingotui-icons/react/stroke-rounded";

export function TopBar() {
  return (
    <div style={{ width: "1193px", height: "74px", background: "#ffffff", display: "flex", flexDirection: "row", padding: "20px 20px 20px 20px", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
      <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <CategorySolid size={14} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#b3b3b3", display: "block" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "72px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#b3b3b3", lineHeight: "20px" }}>Workspace</p>
        </div>
        <ChevronRight size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#686765", display: "block" }} />
        <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "68px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#666d80", lineHeight: "20px" }}>Workflows</p>
      </div>
      <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ height: "32px", flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e8e8e8", display: "flex", flexDirection: "row", padding: "8px 8px 8px 8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "223px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <Search size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#979797", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "57px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#979797", lineHeight: "20px" }}>Search....</p>
          </div>
        </div>
        <div style={{ flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e8e8e8", overflow: "hidden", display: "flex", flexDirection: "row", padding: "7px 8px 7px 8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "30px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#686765", lineHeight: "20px" }}>Help</p>
        </div>
        <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "10px", background: "url('https://ingotui.com/library-img/232efcbc3e38653b836fdc20a462210bf2f00cbb.png') center / cover no-repeat, linear-gradient(#ffffff, #ffffff)", boxShadow: "inset 0 0 0 0.63px #e8e8e8", overflow: "hidden" }} />
      </div>
    </div>
  );
}
