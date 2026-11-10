// Payment method (mailpulse, Cards and panels) from Foundry UI.
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Foundry Icons.
import { CreditCard as CreditCardBulk } from "foundryui-icons/react/bulk";

export function PaymentMethod() {
  return (
    <div style={{ width: "814.3px", height: "58.5px", borderRadius: "11px", boxShadow: "inset 0 0 0 0.9px #ededed", display: "flex", flexDirection: "row", padding: "11.9px 15.5px 11.9px 15.5px", gap: "11px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
      <div style={{ width: "32.9px", height: "32.9px", flexShrink: 0, borderRadius: "7.3px", background: "#ffffff", boxShadow: "inset 0 0 0 0.9px #e8e8e8", display: "flex", flexDirection: "row", padding: "0.9px 0.9px 0.9px 0.9px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
        <CreditCardBulk size={16.5} style={{ width: "16.5px", height: "16.5px", flexShrink: 0, color: "#141b34", display: "block" }} />
      </div>
      <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.7px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.8px", fontWeight: 500, color: "#222222" }}>Visa ending 4242 · expires 08/28</p>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.9px", fontWeight: 400, color: "#989898" }}>Billed to alex@creatorbrief.co</p>
      </div>
      <div style={{ height: "29.2px", flexShrink: 0, borderRadius: "7.3px", background: "#ffffff", boxShadow: "inset 0 0 0 0.9px #dfe1e6, 0px 0.9px 1.8px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "row", padding: "7.3px 11px 7.3px 11px", gap: "5.5px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "12.8px", fontWeight: 500, color: "#222222", lineHeight: "1.5" }}>Update</p>
      </div>
    </div>
  );
}
