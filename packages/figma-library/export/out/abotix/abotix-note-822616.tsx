// Note (abotix, Cards and panels) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Ingot Icons.
import { InfoCircle } from "ingotui-icons/react/stroke-rounded";

export function Note() {
  return (
    <div style={{ width: "320px", height: "50px", borderRadius: "8px", background: "#f4f4f5", display: "flex", flexDirection: "row", padding: "8px 10px 8px 10px", gap: "8px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
      <InfoCircle size={14} strokeWidth={1.51} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#555555", display: "block" }} />
      <p style={{ width: "276px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#555555", lineHeight: "1.399999976158142" }}>Agents get a masked reply instead of raw PII. Switch back any time.</p>
    </div>
  );
}
