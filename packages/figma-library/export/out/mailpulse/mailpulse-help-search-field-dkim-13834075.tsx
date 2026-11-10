// Help search field, dkim (mailpulse, Forms) from Foundry UI.
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Foundry Icons.
import { Search, X } from "foundryui-icons/react/stroke-rounded";

export function HelpSearchFieldDkim() {
  return (
    <div style={{ width: "560px", height: "40px", borderRadius: "9.1px", background: "#ffffff", boxShadow: "inset 0 0 0 1.4px #7c53f9, 0px 0px 0px 2.7px rgba(124, 83, 249, 0.16)", display: "flex", flexDirection: "row", padding: "1.4px 14.2px 1.4px 14.2px", gap: "9.1px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
      <Search size={14.6} style={{ width: "14.6px", height: "14.6px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
      <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "1.4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.6px", fontWeight: 400, color: "#222222", letterSpacing: "-0.01em" }}>dkim</p>
        <div style={{ width: "1.4px", height: "18.3px", flexShrink: 0, borderRadius: "0.5px", background: "#7c53f9" }} />
      </div>
      <div style={{ flex: "1 1 0", minWidth: 0, height: "1px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }} />
      <div style={{ width: "20.1px", height: "20.1px", flexShrink: 0, borderRadius: "5.5px", background: "#f5f5f5", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
        <X size={11} style={{ width: "11px", height: "11px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
      </div>
    </div>
  );
}
