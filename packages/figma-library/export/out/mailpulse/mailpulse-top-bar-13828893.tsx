// Top bar (mailpulse, Navigation) from Foundry UI.
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Foundry Icons.
import { Category as CategorySolid } from "foundryui-icons/react/solid";
import { Bell, ChevronRight, Search } from "foundryui-icons/react/stroke-rounded";

export function TopBar() {
  return (
    <div style={{ width: "1091.8px", height: "68.2px", background: "#f5f5f5", display: "flex", flexDirection: "row", padding: "18.3px 18.3px 18.3px 18.3px", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
      <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "3.7px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "3.7px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <CategorySolid size={12.8} style={{ width: "12.8px", height: "12.8px", flexShrink: 0, color: "#b3b3b3", display: "block" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.8px", fontWeight: 500, color: "#b3b3b3" }}>Workspace</p>
        </div>
        <ChevronRight size={12.8} style={{ width: "12.8px", height: "12.8px", flexShrink: 0, color: "#686765", display: "block" }} />
        <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14.6px", fontWeight: 500, color: "#666d80", lineHeight: "1.5", letterSpacing: "0.02em" }}>Audience</p>
      </div>
      <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "5.5px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ width: "138.9px", flexShrink: 0, borderRadius: "7.3px", background: "#ffffff", boxShadow: "inset 0 0 0 0.9px #e8e8e8", display: "flex", flexDirection: "row", padding: "7.3px 5.5px 7.3px 9.1px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "64px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "3.7px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <Search size={12.8} style={{ width: "12.8px", height: "12.8px", flexShrink: 0, color: "#686765", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.8px", fontWeight: 500, color: "#686765" }}>Search</p>
          </div>
        </div>
        <div style={{ width: "31.1px", height: "31.1px", flexShrink: 0, borderRadius: "6.2px", background: "#ffffff", boxShadow: "inset 0 0 0 0.8px #e8e8e8", overflow: "hidden", position: "relative" }}>
          <Bell size={18.6} style={{ position: "absolute", left: "6.2px", top: "6.6px", width: "18.6px", height: "18.6px", color: "#686765", display: "block", flexShrink: 0 }} />
        </div>
        <div style={{ width: "31.1px", height: "31.1px", flexShrink: 0, borderRadius: "6.2px", background: "#ffffff", boxShadow: "inset 0 0 0 0.8px #e8e8e8", overflow: "hidden", position: "relative" }}>
          <div style={{ position: "absolute", left: "-3.6px", top: "3.1px", width: "38.2px", height: "30.3px", background: "#e5e7eb" }} />
        </div>
      </div>
    </div>
  );
}
