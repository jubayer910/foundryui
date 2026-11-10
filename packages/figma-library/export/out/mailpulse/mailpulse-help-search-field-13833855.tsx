// Help search field (mailpulse, Forms) from Foundry UI.
// Generated from the Figma original and checked against it. Fonts: Geist, Geist Mono. Icons: Foundry Icons.
import { Search } from "foundryui-icons/react/stroke-rounded";

export function HelpSearchField() {
  return (
    <div style={{ width: "560px", height: "40px", borderRadius: "9.1px", background: "#ffffff", boxShadow: "inset 0 0 0 0.9px #e8e8e8", display: "flex", flexDirection: "row", padding: "0.9px 13.7px 0.9px 13.7px", gap: "9.1px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
      <Search size={14.6} style={{ width: "14.6px", height: "14.6px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
      <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.6px", fontWeight: 400, color: "#989898", letterSpacing: "-0.01em" }}>Search for answers, e.g. custom domain</p>
      <div style={{ flexShrink: 0, borderRadius: "3.7px", background: "#f5f5f5", boxShadow: "inset 0 0 0 0.9px #e8e8e8", display: "flex", flexDirection: "row", padding: "1.8px 5.5px 1.8px 5.5px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "13px", fontFamily: "'Geist Mono'", fontSize: "10.1px", fontWeight: 400, color: "#6c6c6c" }}>/</p>
      </div>
    </div>
  );
}
