// Pending invite (mailpulse, Cards and panels) from Foundry UI.
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Foundry Icons.
import { Mail as MailBulk } from "foundryui-icons/react/bulk";
import { Send } from "foundryui-icons/react/stroke-rounded";

export function PendingInvite() {
  return (
    <div style={{ width: "814.3px", height: "49.4px", borderRadius: "11px", boxShadow: "inset 0 0 0 0.9px #ededed", display: "flex", flexDirection: "row", padding: "0.9px 0.9px 0.9px 0.9px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
      <div style={{ width: "330px", height: "49.4px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 16.5px 0px 16.5px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.3px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "25.6px", height: "25.6px", flexShrink: 0, borderRadius: "12.8px", background: "#f5f5f5", boxShadow: "inset 0 0 0 0.9px #e8e8e8", display: "flex", flexDirection: "row", padding: "0.9px 0.9px 0.9px 0.9px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <MailBulk size={11.9} style={{ width: "11.9px", height: "11.9px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.8px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "11px", fontWeight: 500, color: "#222222", lineHeight: "1.2000000476837158" }}>lena@creatorbrief.co</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "11px", fontWeight: 400, color: "#989898", lineHeight: "1.2000000476837158" }}>Invited by Alex Morgan</p>
          </div>
        </div>
      </div>
      <div style={{ width: "160px", height: "49.4px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 11px 0px 11px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "11px", fontWeight: 500, color: "#666d80", lineHeight: "1.5" }}>Editor</p>
      </div>
      <div style={{ width: "140px", height: "49.4px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 11px 0px 11px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "11px", fontWeight: 500, color: "#666d80", lineHeight: "1.5" }}>Sent 2 days ago</p>
      </div>
      <div style={{ flex: "1 1 0", minWidth: 0, height: "49.4px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 16.5px 0px 11px", gap: "7.3px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.9px", fontWeight: 500, color: "#989898" }}>Revoke</p>
        <div style={{ height: "29.2px", flexShrink: 0, borderRadius: "7.3px", background: "#ffffff", boxShadow: "inset 0 0 0 0.9px #dfe1e6, 0px 0.9px 1.8px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "row", padding: "7.3px 11px 7.3px 11px", gap: "5.5px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <Send size={14.6} style={{ width: "14.6px", height: "14.6px", flexShrink: 0, color: "#141b34", display: "block" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "12.8px", fontWeight: 500, color: "#222222", lineHeight: "1.5" }}>Resend</p>
        </div>
      </div>
    </div>
  );
}
