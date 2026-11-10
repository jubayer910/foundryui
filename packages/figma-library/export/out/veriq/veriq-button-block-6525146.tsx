// Button Block (veriq, Cards and panels) from Foundry UI.
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Foundry Icons.
import { Lock } from "foundryui-icons/react/stroke-rounded";

export function ButtonBlock() {
  return (
    <div style={{ width: "261px", height: "38px", borderRadius: "12px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e5e5e5", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", gap: "6px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
      <Lock size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#737373", display: "block" }} />
      <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#6c6c6c" }}>Require auth on all 4</p>
    </div>
  );
}
