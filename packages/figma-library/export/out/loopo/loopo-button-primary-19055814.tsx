// Button Primary (loopo, Atoms) from Foundry UI.
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Foundry Icons.
import { Plus as PlusSolid } from "foundryui-icons/react/solid";

export function ButtonPrimary() {
  return (
    <div style={{ width: "112.8px", height: "39.4px", borderRadius: "109.6px", background: "linear-gradient(180deg, #838383 0%, #2d2d2d 100%)", boxShadow: "0px 9.9px 8.8px 0px rgba(0, 0, 0, 0.04)", display: "flex", flexDirection: "column", padding: "11px 11px 11px 11px", gap: "11px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
      <div style={{ alignSelf: "stretch", height: "17.5px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "4.4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <PlusSolid size={17.5} style={{ width: "17.5px", height: "17.5px", flexShrink: 0, color: "#ffffff", display: "block" }} />
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 500, color: "#ffffff", lineHeight: "17.5px" }}>Add funds</p>
      </div>
    </div>
  );
}
