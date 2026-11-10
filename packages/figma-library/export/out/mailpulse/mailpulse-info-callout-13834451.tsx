// Info callout (mailpulse, Feedback) from Foundry UI.
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Foundry Icons.
import { InfoCircle as InfoCircleBulk } from "foundryui-icons/react/bulk";

export function InfoCallout() {
  return (
    <div style={{ width: "560px", height: "59.9px", borderRadius: "9.1px", background: "#f6f6ff", boxShadow: "inset 0 0 0 0.9px rgba(78, 87, 237, 0.3)", display: "flex", flexDirection: "row", padding: "11px 13.7px 11px 13.7px", gap: "9.1px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
      <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", padding: "1.8px 0px 0px 0px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <InfoCircleBulk size={14.6} style={{ width: "14.6px", height: "14.6px", flexShrink: 0, color: "#4e57ed", display: "block" }} />
      </div>
      <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "12.8px", fontWeight: 400, color: "#24322e", lineHeight: "1.5", letterSpacing: "-0.01em" }}>DNS changes can take up to 48 hours. We re-check every 15 minutes and email you as soon as both records pass.</p>
    </div>
  );
}
