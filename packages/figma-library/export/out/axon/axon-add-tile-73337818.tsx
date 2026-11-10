// Add tile (axon, Cards and panels) from Foundry UI.
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Foundry Icons.
import { Plus } from "foundryui-icons/react/stroke-rounded";

export function AddTile() {
  return (
    <div style={{ width: "276.8px", height: "153px", borderRadius: "12px", background: "#f9f9f9", boxShadow: "inset 0 0 0 1px #dfe0e5", display: "flex", flexDirection: "column", padding: "1px 1px 1px 1px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
      <div style={{ width: "36px", height: "36px", flexShrink: 0, borderRadius: "10px", background: "#ffffff", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
        <Plus size={18} style={{ width: "18px", height: "18px", flexShrink: 0, color: "#1b8ce8", display: "block" }} />
      </div>
      <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>Add connector</p>
      <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>140+ apps, or any REST API</p>
    </div>
  );
}
