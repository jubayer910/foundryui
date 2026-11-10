// Chart header (mailpulse, Charts) from Foundry UI.
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Foundry Icons.
export function ChartHeader() {
  return (
    <div style={{ width: "1040px", height: "39.7px", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
      <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "3.7px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.6px", fontWeight: 500, color: "#000000" }}>Subscribers</p>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.8px", fontWeight: 400, color: "#747474", letterSpacing: "-0.02em" }}>Total active subscribers by month, compared with the previous 12 months.</p>
      </div>
      <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", padding: "3.7px 0px 0px 0px", gap: "14.6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "5.5px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "2.7px", height: "9.1px", flexShrink: 0, borderRadius: "1.4px", background: "rgba(124, 83, 249, 0.7)" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "11px", fontWeight: 400, color: "#24322e" }}>This period</p>
        </div>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "5.5px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "2.7px", height: "9.1px", flexShrink: 0, borderRadius: "1.4px", background: "rgba(124, 83, 249, 0.25)" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "11px", fontWeight: 400, color: "#24322e" }}>Previous period</p>
        </div>
      </div>
    </div>
  );
}
