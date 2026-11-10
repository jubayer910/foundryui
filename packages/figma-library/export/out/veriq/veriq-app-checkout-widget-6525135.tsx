// App Checkout widget (veriq, Cards and panels) from Foundry UI.
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Foundry Icons.
import { ShoppingCart } from "foundryui-icons/react/stroke-rounded";

export function AppCheckoutWidget() {
  return (
    <div style={{ width: "146px", height: "110px", position: "relative" }}>
      <div style={{ position: "absolute", left: "0px", top: "0px", width: "135px", height: "18px", display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <ShoppingCart size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#737373", display: "block" }} />
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 600, color: "#222222", letterSpacing: "-0.02em" }}>Checkout widget</p>
      </div>
      <div style={{ position: "absolute", left: "0px", top: "34px", width: "44px", height: "44px" }}>
        <svg style={{ position: "absolute", left: "3px", top: "3px", width: "38px", height: "38px", display: "block", lineHeight: 0 }} xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M 38.00000762939453 19.000009536743164 C 38.00000762939453 29.490009307861328 29.500009536743164 38.00000762939453 19.010009765625 38.00000762939453 C 8.520009994506836 38.00000762939453 0.010008824627220747 29.510007858276367 0.000008824850738164969 19.020008087158203 C -0.009991174925744417 8.530008316040039 8.480009078979492 0.010008824629039736 18.980009078979492 0.000008824852557154372 C 29.470008850097656 -0.009991174923925428 37.980007629841566 8.480009078979492 38.00000762939453 18.970008850097656" fill="none" stroke="#f9ecda" strokeWidth="5" strokeDasharray="2 3" strokeLinecap="butt"/></svg>
        <p style={{ position: "absolute", left: "16.5px", top: "14px", margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#000000" }}>—</p>
      </div>
      <div style={{ position: "absolute", left: "56px", top: "38px", width: "83px", height: "38px", display: "flex", flexDirection: "column", gap: "4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#222222" }}>1 finding</p>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#e3a044" }}>No pentest yet</p>
      </div>
      <p style={{ position: "absolute", left: "0px", top: "94px", margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#747474" }}>15 endpoints</p>
    </div>
  );
}
