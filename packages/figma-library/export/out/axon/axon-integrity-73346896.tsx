// Integrity (axon, Cards and panels) from Foundry UI.
// Generated from the Figma original and checked against it. Fonts: Geist, Geist Mono. Icons: Foundry Icons.
import { ShieldCheck } from "foundryui-icons/react/stroke-rounded";

export function Integrity() {
  return (
    <div style={{ width: "1155px", height: "40px", borderRadius: "10px", background: "#f4fcf7", display: "flex", flexDirection: "row", padding: "10px 14px 10px 14px", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
      <ShieldCheck size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#17a673", display: "block" }} />
      <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#17a673", lineHeight: "20px" }}>
        <span style={{ fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#17a673", lineHeight: "20px" }}>{"Hash chain verified · "}</span>
        <span style={{ fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>2,184</span>
        <span style={{ fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#17a673", lineHeight: "20px" }}>{" events this week · last block "}</span>
        <span style={{ fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>0x9f3c…e21a</span>
        <span style={{ fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#17a673", lineHeight: "20px" }}>{" · 09:42:19"}</span>
      </p>
      <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#4996fe", lineHeight: "20px" }}>Verify again</p>
    </div>
  );
}
