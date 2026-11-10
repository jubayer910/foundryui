// Next payout (loopo, Cards and panels) from Foundry UI.
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Foundry Icons.
import { BuildingBank as BuildingBankBulk } from "foundryui-icons/react/bulk";
import { ChevronRight } from "foundryui-icons/react/stroke-rounded";

export function NextPayout() {
  return (
    <div style={{ width: "345.1px", height: "56.7px", borderRadius: "13.1px", background: "#fafafa", boxShadow: "inset 0 0 0 1.1px #eeeeee", display: "flex", flexDirection: "row", padding: "8.8px 12.1px 8.8px 12.1px", gap: "11px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
      <div style={{ width: "30.7px", height: "30.7px", flexShrink: 0, borderRadius: "8.8px", background: "rgba(24, 177, 112, 0.12)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
        <BuildingBankBulk size={17.5} style={{ width: "17.5px", height: "17.5px", flexShrink: 0, color: "#18b170", display: "block" }} />
      </div>
      <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.3px", fontWeight: 500, color: "#7d818c" }}>
          <span style={{ fontFamily: "'Geist'", fontSize: "15.3px", fontWeight: 500, color: "#7d818c" }}>{"Next payout "}</span>
          <span style={{ fontFamily: "'Geist'", fontSize: "15.3px", fontWeight: 500, color: "#222222" }}>$8,960</span>
        </p>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.1px", fontWeight: 400, color: "#999999" }}>Dec 16 → Chase •••• 4821</p>
      </div>
      <ChevronRight size={15.3} style={{ width: "15.3px", height: "15.3px", flexShrink: 0, color: "#999999", display: "block" }} />
    </div>
  );
}
