// Lesson header (mailpulse, Headers) from Foundry UI.
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Foundry Icons.
import { Bookmark, Share } from "foundryui-icons/react/stroke-rounded";

export function LessonHeader() {
  return (
    <div style={{ width: "689.1px", height: "45.5px", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
      <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "5.5px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "11px", fontWeight: 500, color: "#a6a6a6", letterSpacing: "0.02em", textTransform: "uppercase" }}>Lesson 4 of 8</p>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "26px", fontFamily: "'Geist'", fontSize: "20.1px", fontWeight: 500, color: "#202020", letterSpacing: "-0.02em" }}>Turn readers into referrers</p>
      </div>
      <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.3px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ width: "31.1px", height: "31.1px", flexShrink: 0, borderRadius: "6.2px", background: "#ffffff", boxShadow: "inset 0 0 0 0.8px #e8e8e8", overflow: "hidden", display: "flex", flexDirection: "row", padding: "0.8px 0.8px 0.8px 0.8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <Bookmark size={16.5} style={{ width: "16.5px", height: "16.5px", flexShrink: 0, color: "#141b34", display: "block" }} />
        </div>
        <div style={{ width: "31.1px", height: "31.1px", flexShrink: 0, borderRadius: "6.2px", background: "#ffffff", boxShadow: "inset 0 0 0 0.8px #e8e8e8", overflow: "hidden", display: "flex", flexDirection: "row", padding: "0.8px 0.8px 0.8px 0.8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <Share size={16.5} style={{ width: "16.5px", height: "16.5px", flexShrink: 0, color: "#141b34", display: "block" }} />
        </div>
      </div>
    </div>
  );
}
