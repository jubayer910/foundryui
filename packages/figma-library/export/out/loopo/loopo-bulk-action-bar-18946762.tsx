// Bulk action bar (loopo, Navigation) from Foundry UI.
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Foundry Icons.
import { Contact as ContactBulk, FileDownload as FileDownloadBulk, MailX as MailXBulk, Tag as TagBulk } from "foundryui-icons/react/bulk";
import { X } from "foundryui-icons/react/stroke-rounded";

export function BulkActionBar() {
  return (
    <div style={{ width: "778.65px", height: "52.6px", borderRadius: "13.15px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8, 0px 17.53px 35.06px -13.15px rgba(13, 13, 18, 0.1), 0px 1.1px 2.19px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "row", padding: "8.77px 8.77px 8.77px 14.25px", gap: "6.57px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
      <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 6.57px 0px 0px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ height: "24.1px", flexShrink: 0, borderRadius: "5.48px", background: "linear-gradient(180deg, #fd4b23 0%, #ff8e74 100%)", boxShadow: "0px 0px 1.1px 0px rgba(0, 0, 0, 0.25)", display: "flex", flexDirection: "row", padding: "6.57px 4.38px 6.57px 4.38px", gap: "10.96px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 400, color: "#ffffff" }}>4</p>
        </div>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 500, color: "#222222" }}>selected</p>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 500, color: "#fd4b23" }}>Select all 18,420</p>
      </div>
      <div style={{ width: "1.1px", height: "21.91px", flexShrink: 0, background: "#eeeeee" }} />
      <div style={{ height: "35.06px", flexShrink: 0, borderRadius: "8.77px", background: "#f4f4f5", boxShadow: "inset 0 0 0 1.1px #e8e8eb", display: "flex", flexDirection: "row", padding: "1.1px 12.06px 1.1px 12.06px", gap: "6.57px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <TagBulk size={16.4} style={{ width: "16.43px", height: "16.43px", flexShrink: 0, color: "#141b34", display: "block" }} />
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 500, color: "#000000" }}>Add tag</p>
      </div>
      <div style={{ height: "35.06px", flexShrink: 0, borderRadius: "8.77px", display: "flex", flexDirection: "row", padding: "0px 10.96px 0px 10.96px", gap: "6.57px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <ContactBulk size={16.4} style={{ width: "16.43px", height: "16.43px", flexShrink: 0, color: "#141b34", display: "block" }} />
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 500, color: "#24322e" }}>Add to list</p>
      </div>
      <div style={{ height: "35.06px", flexShrink: 0, borderRadius: "8.77px", display: "flex", flexDirection: "row", padding: "0px 10.96px 0px 10.96px", gap: "6.57px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <FileDownloadBulk size={16.4} style={{ width: "16.43px", height: "16.43px", flexShrink: 0, color: "#141b34", display: "block" }} />
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 500, color: "#24322e" }}>Export</p>
      </div>
      <div style={{ height: "35.06px", flexShrink: 0, borderRadius: "8.77px", display: "flex", flexDirection: "row", padding: "0px 10.96px 0px 10.96px", gap: "6.57px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <MailXBulk size={16.4} style={{ width: "16.43px", height: "16.43px", flexShrink: 0, color: "#e5484d", display: "block" }} />
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 500, color: "#e5484d" }}>Unsubscribe</p>
      </div>
      <div style={{ width: "1.1px", height: "21.91px", flexShrink: 0, background: "#eeeeee" }} />
      <div style={{ width: "30.68px", height: "30.68px", flexShrink: 0, borderRadius: "8.77px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
        <X size={15.3} style={{ width: "15.34px", height: "15.34px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
      </div>
    </div>
  );
}
