// Quick actions (mailpulse, Cards and panels) from Foundry UI.
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Foundry Icons.
import { Dots, Mail, Tag } from "foundryui-icons/react/stroke-rounded";

export function QuickActions() {
  return (
    <div style={{ width: "438.2px", height: "43.9px", display: "flex", flexDirection: "row", padding: "0px 16.5px 14.6px 16.5px", gap: "7.3px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
      <div style={{ height: "29.2px", flexShrink: 0, borderRadius: "7.3px", background: "#ffffff", boxShadow: "inset 0 0 0 0.9px #dfe1e6, 0px 0.9px 1.8px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "row", padding: "7.3px 11px 7.3px 11px", gap: "5.5px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
        <Mail size={14.6} style={{ width: "14.6px", height: "14.6px", flexShrink: 0, color: "#141b34", display: "block" }} />
        <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "12.8px", fontWeight: 500, color: "#222222", lineHeight: "1.5" }}>Send email</p>
      </div>
      <div style={{ height: "29.2px", flexShrink: 0, borderRadius: "7.3px", background: "#ffffff", boxShadow: "inset 0 0 0 0.9px #dfe1e6, 0px 0.9px 1.8px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "row", padding: "7.3px 11px 7.3px 11px", gap: "5.5px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
        <Tag size={14.6} style={{ width: "14.6px", height: "14.6px", flexShrink: 0, color: "#141b34", display: "block" }} />
        <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "12.8px", fontWeight: 500, color: "#222222", lineHeight: "1.5" }}>Add tag</p>
      </div>
      <div style={{ width: "29.2px", height: "29.2px", flexShrink: 0, borderRadius: "6.2px", background: "#ffffff", boxShadow: "inset 0 0 0 0.8px #e8e8e8", overflow: "hidden", display: "flex", flexDirection: "row", padding: "0.8px 0.8px 0.8px 0.8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
        <Dots size={16.5} style={{ width: "16.5px", height: "16.5px", flexShrink: 0, color: "#141b34", display: "block" }} />
      </div>
    </div>
  );
}
