// Category Payments & payouts (mailpulse, Cards and panels) from Foundry UI.
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Foundry Icons.
import { Wallet as WalletBulk } from "foundryui-icons/react/bulk";
import { ChevronRight } from "foundryui-icons/react/stroke-rounded";

export function CategoryPaymentsPayouts() {
  return (
    <div style={{ width: "338.1px", height: "112.6px", borderRadius: "12.8px", background: "#ffffff", boxShadow: "inset 0 0 0 0.9px #ededed", display: "flex", flexDirection: "row", padding: "15.5px 15.5px 15.5px 15.5px", gap: "12.8px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
      <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "8px", background: "rgba(255, 155, 34, 0.12)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
        <WalletBulk size={18} style={{ width: "18px", height: "18px", flexShrink: 0, color: "#ff9b22", display: "block" }} />
      </div>
      <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "3.7px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.6px", fontWeight: 500, color: "#000000", letterSpacing: "-0.01em" }}>Payments & payouts</p>
        <p style={{ alignSelf: "stretch", height: "38.4px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "12.8px", fontWeight: 400, color: "#747474", lineHeight: "1.5", letterSpacing: "-0.01em" }}>Paid tiers, Stripe, taxes and payouts.</p>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", padding: "1.8px 0px 0px 0px", gap: "3.7px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.9px", fontWeight: 500, color: "#6c6c6c" }}>11 articles</p>
          <ChevronRight size={12.8} style={{ width: "12.8px", height: "12.8px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
        </div>
      </div>
    </div>
  );
}
