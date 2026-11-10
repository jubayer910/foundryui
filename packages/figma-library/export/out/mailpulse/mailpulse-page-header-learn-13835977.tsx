// Page header, Learn (mailpulse, Headers) from Foundry UI.
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Foundry Icons.
import { Checklist, Search, X } from "foundryui-icons/react/stroke-rounded";

export function PageHeaderLearn() {
  return (
    <div style={{ width: "1040.9px", height: "52.3px", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
      <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "7.3px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "26px", fontFamily: "'Geist'", fontSize: "20.1px", fontWeight: 500, color: "#202020", letterSpacing: "-0.02em" }}>Learn</p>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.6px", fontWeight: 400, color: "#747474", letterSpacing: "-0.02em" }}>Guides, courses and live sessions to grow your newsletter.</p>
      </div>
      <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "9.1px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ width: "420px", height: "31.1px", flexShrink: 0, borderRadius: "7.3px", background: "#ffffff", boxShadow: "inset 0 0 0 1.4px #7c53f9, 0px 0px 0px 2.7px rgba(124, 83, 249, 0.16)", display: "flex", flexDirection: "row", padding: "1.4px 10.5px 1.4px 10.5px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <Search size={12.8} style={{ width: "12.8px", height: "12.8px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "1.4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.8px", fontWeight: 400, color: "#222222" }}>spam</p>
            <div style={{ width: "1.4px", height: "15.5px", flexShrink: 0, background: "#7c53f9" }} />
          </div>
          <div style={{ flex: "1 1 0", minWidth: 0, height: "1px", flexShrink: 0 }} />
          <div style={{ width: "18.3px", height: "18.3px", flexShrink: 0, borderRadius: "9.1px", background: "#f5f5f5", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <X size={11} style={{ width: "11px", height: "11px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
          </div>
        </div>
        <div style={{ flexShrink: 0, borderRadius: "91.4px", background: "#ffffff", boxShadow: "inset 0 0 0 0.9px #e8e8e8", display: "flex", flexDirection: "row", padding: "6.1px 9.1px 6.1px 9.1px", gap: "5.5px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <Checklist size={14.6} style={{ width: "14.6px", height: "14.6px", flexShrink: 0, color: "#141b34", display: "block" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.8px", fontWeight: 400, color: "#6c6c6c" }}>My progress</p>
        </div>
      </div>
    </div>
  );
}
