// Header (montra, Headers) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Ingot Icons.
import { Calendar } from "ingotui-icons/react/stroke-rounded";

export function Header() {
  return (
    <div style={{ width: "1053.71px", height: "62.14px", display: "flex", flexDirection: "row", padding: "18.28px 18.28px 14.62px 18.28px", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
      <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "170px", fontFamily: "'Geist'", fontSize: "14.62px", fontWeight: 500, color: "#222222", lineHeight: "1.5" }}>Recent Financial Activity</p>
      <div style={{ height: "29.24px", flexShrink: 0, borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #dfe1e6", display: "flex", flexDirection: "row", padding: "7.31px 10.97px 7.31px 10.97px", gap: "5.48px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
        <Calendar size={16.5} style={{ width: "16.45px", height: "16.45px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
        <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "107px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#222222", lineHeight: "1.5" }}>01 – 09 Aug 2026</p>
      </div>
    </div>
  );
}
