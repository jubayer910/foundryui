// Exit rule (loopo, Cards and panels) from Foundry UI.
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Foundry Icons.
import { ShoppingBag as ShoppingBagBulk } from "foundryui-icons/react/bulk";

export function ExitRule() {
  return (
    <div style={{ width: "233.1px", height: "34.3px", borderRadius: "8.8px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8", display: "flex", flexDirection: "row", padding: "7.7px 12.1px 7.7px 12.1px", gap: "6.6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
      <ShoppingBagBulk size={16.4} style={{ width: "16.4px", height: "16.4px", flexShrink: 0, color: "#7d818c", display: "block" }} />
      <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 400, color: "#747474" }}>
        <span style={{ fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 400, color: "#747474" }}>{"Exit when "}</span>
        <span style={{ fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 500, color: "#222222" }}>an order is placed</span>
      </p>
    </div>
  );
}
