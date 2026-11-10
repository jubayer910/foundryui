// Workspace (mailpulse, Forms) from Foundry UI.
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Foundry Icons.
import { News as NewsBulk } from "foundryui-icons/react/bulk";
import { Check } from "foundryui-icons/react/stroke-rounded";

export function Workspace() {
  return (
    <div style={{ width: "266.9px", height: "42px", borderRadius: "6.4px", display: "flex", flexDirection: "row", padding: "0px 7.3px 0px 7.3px", gap: "9.1px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
      <div style={{ width: "25.6px", height: "25.6px", flexShrink: 0, borderRadius: "6.4px", background: "#222222", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
        <NewsBulk size={14.6} style={{ width: "14.6px", height: "14.6px", flexShrink: 0, color: "#ffffff", display: "block" }} />
      </div>
      <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.8px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.8px", fontWeight: 500, color: "#222222" }}>The Creator Brief</p>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.9px", fontWeight: 400, color: "#989898" }}>18,420 subscribers · Pro</p>
      </div>
      <Check size={14.6} style={{ width: "14.6px", height: "14.6px", flexShrink: 0, color: "#7c53f9", display: "block" }} />
    </div>
  );
}
