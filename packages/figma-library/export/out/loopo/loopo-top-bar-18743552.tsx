// Top bar (loopo, Navigation) from Foundry UI.
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Foundry Icons.
import { LayoutDashboard as LayoutDashboardSolid } from "foundryui-icons/react/solid";
import { ChevronRight, Search } from "foundryui-icons/react/stroke-rounded";
import { Bell as BellBulk } from "foundryui-icons/react/bulk";

export function TopBar() {
  return (
    <div style={{ width: "1286.3px", height: "81.4px", background: "#f5f5f5", display: "flex", flexDirection: "row", padding: "21.9px 0px 21.9px 21.9px", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
      <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4.4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4.4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <LayoutDashboardSolid size={15.3} style={{ width: "15.3px", height: "15.3px", flexShrink: 0, color: "#b3b3b3", display: "block" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.3px", fontWeight: 500, color: "#b3b3b3" }}>Workspace</p>
        </div>
        <ChevronRight size={15.3} style={{ width: "15.3px", height: "15.3px", flexShrink: 0, color: "#686765", display: "block" }} />
        <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "17.5px", fontWeight: 500, color: "#666d80", lineHeight: "1.5", letterSpacing: "0.02em" }}>Overview</p>
      </div>
      <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6.6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ width: "257.5px", flexShrink: 0, borderRadius: "8.8px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8", display: "flex", flexDirection: "row", padding: "8.8px 6.6px 8.8px 11px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "76.7px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "4.4px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <Search size={15.3} style={{ width: "15.3px", height: "15.3px", flexShrink: 0, color: "#686765", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.3px", fontWeight: 500, color: "#686765" }}>Search</p>
          </div>
        </div>
        <div style={{ width: "37.3px", height: "37.3px", flexShrink: 0, borderRadius: "7.5px", background: "#ffffff", boxShadow: "inset 0 0 0 0.9px #e8e8e8", overflow: "hidden", position: "relative" }}>
          <BellBulk size={21.9} style={{ position: "absolute", left: "7.7px", top: "7.7px", width: "21.9px", height: "21.9px", color: "#686765", display: "block", flexShrink: 0 }} />
        </div>
      </div>
    </div>
  );
}
