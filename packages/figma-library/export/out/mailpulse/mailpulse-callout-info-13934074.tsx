// Callout Info (mailpulse, Feedback) from Foundry UI.
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Foundry Icons.
import { InfoCircle as InfoCircleBulk } from "foundryui-icons/react/bulk";

export function CalloutInfo() {
  return (
    <div style={{ width: "814.3px", height: "37.1px", borderRadius: "9.1px", background: "#f6f6ff", boxShadow: "inset 0 0 0 0.9px rgba(78, 87, 237, 0.3)", display: "flex", flexDirection: "row", padding: "10.1px 11.9px 10.1px 11.9px", gap: "7.3px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
      <InfoCircleBulk size={14.6} style={{ width: "14.6px", height: "14.6px", flexShrink: 0, color: "#4e57ed", display: "block" }} />
      <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.8px", fontWeight: 400, color: "#222222" }}>DNS changes can take up to 48 hours. We’ll email you when everything is verified.</p>
    </div>
  );
}
