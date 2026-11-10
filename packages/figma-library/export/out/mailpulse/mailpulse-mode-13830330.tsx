// Mode (mailpulse, Cards and panels) from Foundry UI.
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Foundry Icons.
import { List as ListBulk, Upload as UploadBulk, User as UserBulk } from "foundryui-icons/react/bulk";

export function Mode() {
  return (
    <div style={{ width: "466.2px", height: "33.6px", display: "flex", flexDirection: "row", padding: "0px 16.5px 4px 16.5px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
      <div style={{ flexShrink: 0, borderRadius: "8.2px", background: "#f5f5f5", display: "flex", flexDirection: "row", padding: "2.7px 2.7px 2.7px 2.7px", gap: "1.8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ flexShrink: 0, borderRadius: "6.4px", background: "#ffffff", boxShadow: "0px 0px 0.9px 0px rgba(0, 0, 0, 0.25)", display: "flex", flexDirection: "row", padding: "4.6px 9.1px 4.6px 9.1px", gap: "5.5px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <UserBulk size={11.9} style={{ width: "11.9px", height: "11.9px", flexShrink: 0, color: "#141b34", display: "block" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.9px", fontWeight: 500, color: "#000000" }}>Single</p>
        </div>
        <div style={{ flexShrink: 0, borderRadius: "6.4px", display: "flex", flexDirection: "row", padding: "4.6px 9.1px 4.6px 9.1px", gap: "5.5px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <ListBulk size={11.9} style={{ width: "11.9px", height: "11.9px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.9px", fontWeight: 400, color: "#6c6c6c" }}>Paste list</p>
        </div>
        <div style={{ flexShrink: 0, borderRadius: "6.4px", display: "flex", flexDirection: "row", padding: "4.6px 9.1px 4.6px 9.1px", gap: "5.5px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <UploadBulk size={11.9} style={{ width: "11.9px", height: "11.9px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.9px", fontWeight: 400, color: "#6c6c6c" }}>Import CSV</p>
        </div>
      </div>
    </div>
  );
}
