// Footer modal, Unsubscribe (mailpulse, Modals) from Foundry UI.
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Foundry Icons.
import { MailX as MailXBulk } from "foundryui-icons/react/bulk";
import { Mail } from "foundryui-icons/react/stroke-rounded";

export function FooterModalUnsubscribe() {
  return (
    <div style={{ width: "438.18px", height: "58.11px", background: "#fafafa", boxShadow: "inset 0 0.91px 0 0 #eeeeee", display: "flex", flexDirection: "row", padding: "13.7px 16.45px 12.79px 16.45px", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
      <div style={{ width: "288.01px", flexShrink: 0, borderRadius: "7.31px", display: "flex", flexDirection: "row", padding: "7.31px 3.66px 7.31px 0px", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <MailXBulk size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#e5484d", display: "block" }} />
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#e5484d" }}>Unsubscribe</p>
      </div>
      <div style={{ height: "29.24px", flexShrink: 0, borderRadius: "91.39px", background: "linear-gradient(180deg, #686868 0%, #222222 100%)", boxShadow: "0px 8.22px 7.31px 0px rgba(0, 0, 0, 0.14)", display: "flex", flexDirection: "column", padding: "7.31px 10.97px 7.31px 10.97px", gap: "9.14px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <Mail size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#ffffff", display: "block" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#ffffff" }}>Send email</p>
        </div>
      </div>
    </div>
  );
}
