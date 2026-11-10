// Pagination (loopo, Cards and panels) from Foundry UI.
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Foundry Icons.
import { ChevronLeft, ChevronRight } from "foundryui-icons/react/stroke-rounded";

export function Pagination() {
  return (
    <div style={{ width: "1199.7px", height: "37.3px", display: "flex", flexDirection: "row", padding: "0px 13.1px 0px 13.1px", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
      <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 400, color: "#999999" }}>
        <span style={{ fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 400, color: "#999999" }}>{"Showing "}</span>
        <span style={{ fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 500, color: "#222222" }}>1–11</span>
        <span style={{ fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 400, color: "#999999" }}>{" of 18,420 people"}</span>
      </p>
      <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8.8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 400, color: "#6c6c6c" }}>Page 1 of 1,675</p>
        <div style={{ width: "37.3px", height: "37.3px", flexShrink: 0, borderRadius: "8.8px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8, 0px 1.1px 1.1px 0px rgba(13, 13, 18, 0.08)", display: "flex", flexDirection: "row", gap: "6.6px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <ChevronLeft size={19.7} style={{ width: "19.7px", height: "19.7px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
        </div>
        <div style={{ width: "37.3px", height: "37.3px", flexShrink: 0, borderRadius: "8.8px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8, 0px 1.1px 1.1px 0px rgba(13, 13, 18, 0.08)", display: "flex", flexDirection: "row", gap: "6.6px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <ChevronRight size={19.7} style={{ width: "19.7px", height: "19.7px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
        </div>
      </div>
    </div>
  );
}
