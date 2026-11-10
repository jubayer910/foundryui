// Ticked meter (veriq, Cards and panels) from Foundry UI.
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Foundry Icons.
export function TickedMeter() {
  return (
    <div style={{ width: "261px", height: "32px", display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
      <div style={{ width: "261px", height: "10px", flexShrink: 0, position: "relative" }}>
        <div style={{ position: "absolute", left: "0px", top: "0px", width: "239.3px", height: "10px", borderRadius: "3px", background: "linear-gradient(90deg, #71d5a0 0%, #25bf6d 100%)", boxShadow: "inset 0 0 0 1px rgba(29, 149, 85, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.18), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
        <svg style={{ position: "absolute", left: "243.3px", top: "0px", width: "17.3px", height: "10px", display: "block", lineHeight: 0 }} xmlns="http://www.w3.org/2000/svg" width="17.25" height="10" viewBox="0 0 17.25 10" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0 L-0.5 0 L-0.5 10 L0 10 L0.5 10 L0.5 0 L0 0 Z M3.45 0 L2.95 0 L2.95 10 L3.45 10 L3.95 10 L3.95 0 L3.45 0 Z M6.9 0 L6.4 0 L6.4 10 L6.9 10 L7.4 10 L7.4 0 L6.9 0 Z M10.35 0 L9.85 0 L9.85 10 L10.35 10 L10.85 10 L10.85 0 L10.35 0 Z M13.8 0 L13.3 0 L13.3 10 L13.8 10 L14.3 10 L14.3 0 L13.8 0 Z M17.25 0 L16.75 0 L16.75 10 L17.25 10 L17.75 10 L17.75 0 L17.25 0 Z" fill="#d4d4d8"/></svg>
      </div>
      <div style={{ width: "261px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#1f1f22" }}>22 within SLA</p>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#747474" }}>2 breached</p>
      </div>
    </div>
  );
}
