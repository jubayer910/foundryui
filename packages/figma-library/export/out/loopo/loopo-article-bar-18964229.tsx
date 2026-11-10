// Article bar (loopo, Cards and panels) from Foundry UI.
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Foundry Icons.
import { ChevronLeft, DotsVertical, Link } from "foundryui-icons/react/stroke-rounded";

export function ArticleBar() {
  return (
    <div style={{ width: "1245.7px", height: "39.4px", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
      <div style={{ flexShrink: 0, borderRadius: "8.8px", display: "flex", flexDirection: "row", padding: "6.6px 8.8px 6.6px 8.8px", gap: "6.6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <ChevronLeft size={16.4} style={{ width: "16.4px", height: "16.4px", flexShrink: 0, color: "#7d818c", display: "block" }} />
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.3px", fontWeight: 500, color: "#7d818c" }}>Help & support</p>
      </div>
      <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "11px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ height: "39.4px", flexShrink: 0, borderRadius: "109.6px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8", display: "flex", flexDirection: "row", padding: "11px 11px 11px 11px", gap: "6.6px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <Link size={17.5} style={{ width: "17.5px", height: "17.5px", flexShrink: 0, color: "#8b8b8b", display: "block" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 500, color: "#6c6c6c", lineHeight: "17.5px" }}>Copy link</p>
        </div>
        <div style={{ width: "37.3px", height: "37.3px", flexShrink: 0, borderRadius: "8.8px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8, 0px 1.1px 1.1px 0px rgba(13, 13, 18, 0.08)", display: "flex", flexDirection: "row", gap: "6.6px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <DotsVertical size={19.7} style={{ width: "19.7px", height: "19.7px", flexShrink: 0, color: "#c4c4c4", display: "block" }} />
        </div>
      </div>
    </div>
  );
}
