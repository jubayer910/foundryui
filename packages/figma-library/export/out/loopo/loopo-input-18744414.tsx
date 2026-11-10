// Input (loopo, Forms) from Foundry UI.
// Generated from the Figma original and checked against it. Fonts: Geist, Geist Mono. Icons: Foundry Icons.
import { Search } from "foundryui-icons/react/stroke-rounded";

export function Input() {
  return (
    <div style={{ width: "655.2px", height: "54.8px", boxShadow: "inset 0 -1.1px 0 0 #eeeeee", display: "flex", flexDirection: "row", padding: "15.3px 17.5px 16.4px 17.5px", gap: "11px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
      <Search size={19.7} style={{ width: "19.7px", height: "19.7px", flexShrink: 0, color: "#686765", display: "block" }} />
      <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "23px", fontFamily: "'Geist'", fontSize: "17.5px", fontWeight: 400, color: "#222222" }}>
        <span style={{ fontFamily: "'Geist'", fontSize: "17.5px", fontWeight: 400, color: "#222222" }}>pay</span>
        <span style={{ fontFamily: "'Geist'", fontSize: "17.5px", fontWeight: 400, color: "#fd4b23" }}>|</span>
      </p>
      <div style={{ flexShrink: 0, borderRadius: "4.4px", background: "#f5f5f5", boxShadow: "inset 0 0 0 1.1px #e8e8e8", display: "flex", flexDirection: "row", padding: "2.2px 6.6px 2.2px 6.6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "16px", fontFamily: "'Geist Mono'", fontSize: "12.1px", fontWeight: 400, color: "#6c6c6c" }}>esc</p>
      </div>
    </div>
  );
}
