// Callout (montra, Feedback) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Ingot Icons.
import { InfoCircle } from "ingotui-icons/react/stroke-rounded";

export function Callout() {
  return (
    <div style={{ width: "512.48px", height: "59.76px", borderRadius: "9.14px", background: "#eef5ff", boxShadow: "inset 0 0 0 0.91px #d6e6ff", display: "flex", flexDirection: "row", padding: "11.88px 13.7px 11.88px 13.7px", gap: "9.14px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
      <InfoCircle size={16.5} style={{ width: "16.45px", height: "16.45px", flexShrink: 0, color: "#1f6fe0", display: "block" }} />
      <p style={{ width: "461.3px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#1e3a6b", lineHeight: "1.5" }}>Rules already auto-match 82% of Alder & Co.’s bank lines. The 12 transactions waiting for review in August are the ones no rule covers yet.</p>
    </div>
  );
}
