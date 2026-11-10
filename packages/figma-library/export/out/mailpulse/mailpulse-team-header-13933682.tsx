// Team header (mailpulse, Headers) from Foundry UI.
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Foundry Icons.
import { UserPlus } from "foundryui-icons/react/stroke-rounded";

export function TeamHeader() {
  return (
    <div style={{ width: "814.3px", height: "41.5px", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
      <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "5.5px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.6px", fontWeight: 500, color: "#000000" }}>Team</p>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "9.1px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.8px", fontWeight: 400, color: "#747474", letterSpacing: "-0.02em" }}>4 of 5 seats used</p>
          <div style={{ width: "109.7px", height: "5.5px", flexShrink: 0, borderRadius: "2.7px", background: "#f5f5f5", overflow: "hidden", position: "relative" }}>
            <div style={{ position: "absolute", left: "0px", top: "0px", width: "87.7px", height: "5.5px", borderRadius: "2.7px", background: "rgba(124, 83, 249, 0.7)" }} />
          </div>
        </div>
      </div>
      <div style={{ height: "29.2px", flexShrink: 0, borderRadius: "7.3px", background: "#ffffff", boxShadow: "inset 0 0 0 0.9px #dfe1e6, 0px 0.9px 1.8px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "row", padding: "7.3px 11px 7.3px 11px", gap: "5.5px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
        <UserPlus size={14.6} style={{ width: "14.6px", height: "14.6px", flexShrink: 0, color: "#141b34", display: "block" }} />
        <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "12.8px", fontWeight: 500, color: "#222222", lineHeight: "1.5" }}>Invite members</p>
      </div>
    </div>
  );
}
