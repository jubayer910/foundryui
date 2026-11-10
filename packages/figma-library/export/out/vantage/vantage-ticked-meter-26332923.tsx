// Ticked meter (vantage, Cards and panels) from Foundry UI.
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Foundry Icons.
export function TickedMeter() {
  return (
    <div style={{ width: "372px", height: "32px", display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
      <div style={{ width: "372px", height: "10px", flexShrink: 0, position: "relative" }}>
        <div style={{ position: "absolute", left: "0px", top: "0px", width: "357.8px", height: "10px", borderRadius: "3px", background: "linear-gradient(90deg, #82ceac 0%, #3fb37f 100%)", boxShadow: "inset 0 0 0 1px rgba(49, 140, 99, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)", overflow: "hidden" }} />
        <svg style={{ position: "absolute", left: "361.8px", top: "0px", width: "9.7px", height: "10px", display: "block", lineHeight: 0 }} xmlns="http://www.w3.org/2000/svg" width="9.67" height="10" viewBox="0 0 9.67 10" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0 L-0.5 0 L-0.5 10 L0 10 L0.5 10 L0.5 0 L0 0 Z M3.22 0 L2.72 0 L2.72 10 L3.22 10 L3.72 10 L3.72 0 L3.22 0 Z M6.45 0 L5.95 0 L5.95 10 L6.45 10 L6.95 10 L6.95 0 L6.45 0 Z M9.67 0 L9.17 0 L9.17 10 L9.67 10 L10.17 10 L10.17 0 L9.67 0 Z" fill="#3a3a3a"/></svg>
      </div>
      <div style={{ width: "372px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#ededed" }}>$74,873 collected · 96.2%</p>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#7c7c7c" }}>of $77,839</p>
      </div>
    </div>
  );
}
