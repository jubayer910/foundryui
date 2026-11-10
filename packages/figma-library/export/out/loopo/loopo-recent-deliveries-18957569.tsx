// Recent deliveries (loopo, Cards and panels) from Foundry UI.
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Foundry Icons.
import { Download as DownloadBulk, MailOpen as MailOpenBulk } from "foundryui-icons/react/bulk";

export function RecentDeliveries() {
  return (
    <div style={{ width: "329.8px", height: "124.1px", display: "flex", flexDirection: "column", gap: "4.4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
      <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.1px", fontWeight: 500, color: "#a6a6a6", textTransform: "uppercase" }}>Recent deliveries</p>
      <div style={{ width: "329.8px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ width: "329.8px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "6.6px 0px 6.6px 0px", gap: "11px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "28.5px", height: "28.5px", flexShrink: 0, borderRadius: "8.8px", background: "rgba(24, 177, 112, 0.12)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <MailOpenBulk size={15.3} style={{ width: "15.3px", height: "15.3px", flexShrink: 0, color: "#18b170", display: "block" }} />
          </div>
          <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.1px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 400, color: "#222222" }}>Marcus Webb opened it</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.1px", fontWeight: 400, color: "#999999" }}>Dec 1, 8:14 AM</p>
          </div>
        </div>
        <div style={{ width: "329.8px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "6.6px 0px 6.6px 0px", gap: "11px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "28.5px", height: "28.5px", flexShrink: 0, borderRadius: "8.8px", background: "rgba(0, 68, 255, 0.12)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <DownloadBulk size={15.3} style={{ width: "15.3px", height: "15.3px", flexShrink: 0, color: "#0044ff", display: "block" }} />
          </div>
          <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.1px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 400, color: "#222222" }}>Dana Ruiz, CPA downloaded the PDF</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.1px", fontWeight: 400, color: "#999999" }}>Dec 1, 9:02 AM</p>
          </div>
        </div>
      </div>
    </div>
  );
}
