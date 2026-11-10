// Footer modal, Unsubscribe (mailpulse, Modals) from Foundry UI.
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Foundry Icons.
import { MailX as MailXBulk } from "foundryui-icons/react/bulk";
import { Mail } from "foundryui-icons/react/stroke-rounded";

export function FooterModalUnsubscribe() {
  return (
    <div style={{ width: "438.2px", height: "58.1px", background: "#fafafa", boxShadow: "inset 0 0.9px 0 0 #eeeeee", display: "flex", flexDirection: "row", padding: "13.7px 16.5px 12.8px 16.5px", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
      <div style={{ width: "288px", flexShrink: 0, borderRadius: "7.3px", display: "flex", flexDirection: "row", padding: "7.3px 3.7px 7.3px 0px", gap: "5.5px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <MailXBulk size={14.6} style={{ width: "14.6px", height: "14.6px", flexShrink: 0, color: "#e5484d", display: "block" }} />
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.8px", fontWeight: 500, color: "#e5484d" }}>Unsubscribe</p>
      </div>
      <div style={{ height: "29.2px", flexShrink: 0, borderRadius: "91.4px", background: "linear-gradient(180deg, #686868 0%, #222222 100%)", boxShadow: "0px 8.2px 7.3px 0px rgba(0, 0, 0, 0.14)", display: "flex", flexDirection: "column", padding: "7.3px 11px 7.3px 11px", gap: "9.1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "5.5px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <Mail size={14.6} style={{ width: "14.6px", height: "14.6px", flexShrink: 0, color: "#ffffff", display: "block" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.8px", fontWeight: 500, color: "#ffffff" }}>Send email</p>
        </div>
      </div>
    </div>
  );
}
