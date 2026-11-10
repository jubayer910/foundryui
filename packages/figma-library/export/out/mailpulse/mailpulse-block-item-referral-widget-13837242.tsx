// Block item, Referral widget (mailpulse, Cards and panels) from Foundry UI.
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Foundry Icons.
import { Share as ShareBulk } from "foundryui-icons/react/bulk";

export function BlockItemReferralWidget() {
  return (
    <div style={{ width: "284.7px", height: "43.9px", borderRadius: "6.4px", display: "flex", flexDirection: "row", padding: "5.5px 7.3px 5.5px 7.3px", gap: "9.1px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
      <div style={{ width: "29.2px", height: "29.2px", flexShrink: 0, borderRadius: "7.3px", background: "#ffffff", boxShadow: "inset 0 0 0 0.9px #e8e8e8", display: "flex", flexDirection: "row", padding: "0.9px 0.9px 0.9px 0.9px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
        <ShareBulk size={15.5} style={{ width: "15.5px", height: "15.5px", flexShrink: 0, color: "#4d98fe", display: "block" }} />
      </div>
      <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "0.9px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.8px", fontWeight: 500, color: "#222222" }}>Referral widget</p>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.9px", fontWeight: 400, color: "#989898" }}>Reader’s link + progress to rewards</p>
      </div>
    </div>
  );
}
