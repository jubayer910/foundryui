// Card Webhooks integration card (mailpulse, Cards and panels) from Foundry UI.
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Foundry Icons.
import { Clock as ClockBulk, Webhook as WebhookBulk } from "foundryui-icons/react/bulk";

export function CardWebhooksIntegrationCard() {
  return (
    <div style={{ width: "338.1px", height: "153.9px", borderRadius: "12.8px", background: "#ffffff", boxShadow: "inset 0 0 0 0.9px #ededed", display: "flex", flexDirection: "column", padding: "15.5px 15.5px 15.5px 15.5px", gap: "11px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
      <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "11px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ width: "36px", height: "36px", flexShrink: 0, borderRadius: "9.1px", background: "#ffffff", boxShadow: "0px 0.9px 1.8px 0px rgba(0, 0, 0, 0.08)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <WebhookBulk size={20} style={{ width: "20px", height: "20px", flexShrink: 0, color: "#7c53f9", display: "block" }} />
        </div>
        <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.7px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.6px", fontWeight: 500, color: "#000000" }}>Webhooks</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.9px", fontWeight: 400, color: "#989898" }}>Automation</p>
        </div>
        <div style={{ flexShrink: 0, borderRadius: "91.4px", background: "#e7fff9", display: "flex", flexDirection: "row", padding: "3.7px 9.1px 3.7px 9.1px", gap: "3.7px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <svg style={{ width: "5.5px", height: "5.5px", flexShrink: 0, display: "block", lineHeight: 0 }} xmlns="http://www.w3.org/2000/svg" width="5.48" height="5.48" viewBox="0 0 5.48 5.48" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M5.48333 2.74167 C5.48333 4.25585 4.25585 5.48333 2.74167 5.48333 C1.22749 5.48333 0 4.25585 0 2.74167 C0 1.22749 1.22749 0 2.74167 0 C4.25585 0 5.48333 1.22749 5.48333 2.74167 Z" fill="#00a77d"/></svg>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "right", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "11px", fontWeight: 500, color: "#00a77d", lineHeight: "1.4600000381469727" }}>Connected</p>
        </div>
      </div>
      <p style={{ width: "173px", height: "35.8px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "12.8px", fontWeight: 400, color: "#747474", lineHeight: "1.399999976158142" }}>Send subscriber and campaign events to any URL.</p>
      <div style={{ alignSelf: "stretch", height: "0.9px", flexShrink: 0, background: "#eeeeee" }} />
      <div style={{ alignSelf: "stretch", height: "16.5px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "5.5px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <ClockBulk size={12.8} style={{ width: "12.8px", height: "12.8px", flexShrink: 0, color: "#989898", display: "block" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.9px", fontWeight: 400, color: "#989898" }}>Last event 32 sec ago</p>
        </div>
        <div style={{ width: "27.4px", height: "16.5px", flexShrink: 0, borderRadius: "8.2px", background: "#7c53f9", position: "relative" }}>
          <svg style={{ position: "absolute", left: "12.8px", top: "1.8px", width: "12.8px", height: "12.8px", display: "block", lineHeight: 0 }} xmlns="http://www.w3.org/2000/svg" width="12.79" height="12.79" viewBox="0 0 12.79 12.79" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M12.79 6.395 C12.79 9.92686 9.92686 12.79 6.395 12.79 C2.86314 12.79 0 9.92686 0 6.395 C0 2.86314 2.86314 0 6.395 0 C9.92686 0 12.79 2.86314 12.79 6.395 Z" fill="#ffffff"/></svg>
        </div>
      </div>
    </div>
  );
}
