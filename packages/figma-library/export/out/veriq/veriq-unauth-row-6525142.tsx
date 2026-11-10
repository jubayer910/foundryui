// Unauth row (veriq, Cards and panels) from Foundry UI.
// Generated from the Figma original and checked against it. Fonts: Geist Mono, Geist. Icons: Foundry Icons.
export function UnauthRow() {
  return (
    <div style={{ width: "155px", height: "41px", display: "flex", flexDirection: "column", gap: "5px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
      <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ height: "20px", flexShrink: 0, borderRadius: "5px", background: "rgba(27, 140, 232, 0.1)", display: "flex", flexDirection: "row", padding: "0px 6px 0px 6px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "14px", fontFamily: "'Geist Mono'", fontSize: "11px", fontWeight: 500, color: "#1b8ce8" }}>GET</p>
        </div>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#222222" }}>/search</p>
      </div>
      <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#fb3034", letterSpacing: "0.02em" }}>
        <span style={{ fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#fb3034", letterSpacing: "0.02em" }}>Critical</span>
        <span style={{ fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#737373", letterSpacing: "0.02em" }}>{" · catalog-api · #125"}</span>
      </p>
    </div>
  );
}
