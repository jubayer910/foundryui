// Action (vantage, Cards and panels) from Foundry UI.
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Foundry Icons.
import { Send } from "foundryui-icons/react/stroke-rounded";

export function Action() {
  return (
    <div style={{ width: "132px", height: "32px", borderRadius: "6px", background: "#2a2a2a", boxShadow: "inset 0 0 0 1px #343434", display: "flex", flexDirection: "row", padding: "1px 11px 1px 11px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
      <Send size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#dadada", display: "block" }} />
      <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 400, color: "#ededed" }}>Send message</p>
    </div>
  );
}
