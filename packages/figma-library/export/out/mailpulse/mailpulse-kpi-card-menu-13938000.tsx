// KPI card menu (mailpulse, Menus) from Foundry UI.
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Foundry Icons.
import { ArrowUpDown as ArrowUpDownBulk, ChartLine as ChartLineBulk, Download as DownloadBulk, Eye as EyeBulk, File as FileBulk, Pin as PinBulk } from "foundryui-icons/react/bulk";

export function KPICardMenu() {
  return (
    <div style={{ width: "236px", height: "220.5px", borderRadius: "9.1px", background: "#ffffff", boxShadow: "inset 0 0 0 0.9px #e8e8e8, 0px 14.6px 29.2px -11px rgba(13, 13, 18, 0.1), 0px 0.9px 1.8px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "column", padding: "4.6px 4.6px 4.6px 4.6px", gap: "0.9px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
      <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", padding: "5.5px 7.3px 3.7px 7.3px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "11px", fontWeight: 500, color: "#a6a6a6", letterSpacing: "0.02em", textTransform: "uppercase" }}>Active subscribers</p>
      </div>
      <div style={{ alignSelf: "stretch", height: "29.2px", flexShrink: 0, borderRadius: "5.5px", background: "#f4f4f5", boxShadow: "inset 0 0 0 0.9px #e8e8eb", display: "flex", flexDirection: "row", padding: "0px 7.3px 0px 7.3px", gap: "7.3px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <ChartLineBulk size={12.8} style={{ width: "12.8px", height: "12.8px", flexShrink: 0, color: "#141b34", display: "block" }} />
        <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.8px", fontWeight: 500, color: "#000000" }}>View details</p>
      </div>
      <div style={{ alignSelf: "stretch", height: "29.2px", flexShrink: 0, borderRadius: "5.5px", display: "flex", flexDirection: "row", padding: "0px 7.3px 0px 7.3px", gap: "7.3px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <FileBulk size={12.8} style={{ width: "12.8px", height: "12.8px", flexShrink: 0, color: "#141b34", display: "block" }} />
        <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.8px", fontWeight: 400, color: "#24322e" }}>Add to report</p>
      </div>
      <div style={{ alignSelf: "stretch", height: "29.2px", flexShrink: 0, borderRadius: "5.5px", display: "flex", flexDirection: "row", padding: "0px 7.3px 0px 7.3px", gap: "7.3px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <DownloadBulk size={12.8} style={{ width: "12.8px", height: "12.8px", flexShrink: 0, color: "#141b34", display: "block" }} />
        <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.8px", fontWeight: 400, color: "#24322e" }}>Download CSV</p>
      </div>
      <div style={{ alignSelf: "stretch", height: "29.2px", flexShrink: 0, borderRadius: "5.5px", display: "flex", flexDirection: "row", padding: "0px 7.3px 0px 7.3px", gap: "7.3px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <PinBulk size={12.8} style={{ width: "12.8px", height: "12.8px", flexShrink: 0, color: "#141b34", display: "block" }} />
        <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.8px", fontWeight: 400, color: "#24322e" }}>Pin to top</p>
      </div>
      <div style={{ alignSelf: "stretch", height: "29.2px", flexShrink: 0, borderRadius: "5.5px", display: "flex", flexDirection: "row", padding: "0px 7.3px 0px 7.3px", gap: "7.3px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <ArrowUpDownBulk size={12.8} style={{ width: "12.8px", height: "12.8px", flexShrink: 0, color: "#141b34", display: "block" }} />
        <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.8px", fontWeight: 400, color: "#24322e" }}>Show trend</p>
        <div style={{ width: "27.4px", height: "16.5px", flexShrink: 0, borderRadius: "8.2px", background: "#7c53f9", position: "relative" }}>
          <svg style={{ position: "absolute", left: "12.8px", top: "1.8px", width: "12.8px", height: "12.8px", display: "block", lineHeight: 0 }} xmlns="http://www.w3.org/2000/svg" width="12.79" height="12.79" viewBox="0 0 12.79 12.79" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M12.79 6.395 C12.79 9.92686 9.92686 12.79 6.395 12.79 C2.86314 12.79 0 9.92686 0 6.395 C0 2.86314 2.86314 0 6.395 0 C9.92686 0 12.79 2.86314 12.79 6.395 Z" fill="#ffffff"/></svg>
        </div>
      </div>
      <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", padding: "2.7px 0px 2.7px 0px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ alignSelf: "stretch", height: "0.9px", flexShrink: 0, background: "#eeeeee" }} />
      </div>
      <div style={{ alignSelf: "stretch", height: "29.2px", flexShrink: 0, borderRadius: "5.5px", display: "flex", flexDirection: "row", padding: "0px 7.3px 0px 7.3px", gap: "7.3px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <EyeBulk size={12.8} style={{ width: "12.8px", height: "12.8px", flexShrink: 0, color: "#141b34", display: "block" }} />
        <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.8px", fontWeight: 400, color: "#24322e" }}>Hide from Overview</p>
      </div>
    </div>
  );
}
