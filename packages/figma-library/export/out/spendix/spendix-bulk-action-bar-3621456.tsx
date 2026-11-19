// Bulk action bar (spendix, Navigation) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Ingot Icons.
import { CircleCheck, Note, Tag, Upload, X } from "ingotui-icons/react/stroke-rounded";

export function BulkActionBar() {
  return (
    <div style={{ width: "680px", height: "48px", borderRadius: "12px", background: "#242424", boxShadow: "0px 12px 32px -8px rgba(13, 13, 18, 0.24)", display: "flex", flexDirection: "row", padding: "0px 8px 0px 16px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
      <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "144px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ffffff" }}>3 selected · $1,342.40</p>
      <div style={{ width: "1px", height: "20px", flexShrink: 0, background: "rgba(255, 255, 255, 0.16)" }} />
      <div style={{ height: "32px", flexShrink: 0, borderRadius: "8px", background: "rgba(255, 255, 255, 0.08)", display: "flex", flexDirection: "row", padding: "0px 10px 0px 10px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <CircleCheck size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#ffffff", display: "block" }} />
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "51px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#ffffff" }}>Approve</p>
      </div>
      <div style={{ height: "32px", flexShrink: 0, borderRadius: "8px", background: "rgba(255, 255, 255, 0.08)", display: "flex", flexDirection: "row", padding: "0px 10px 0px 10px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <Tag size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#ffffff", display: "block" }} />
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "67px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#ffffff" }}>Categorize</p>
      </div>
      <div style={{ height: "32px", flexShrink: 0, borderRadius: "8px", background: "rgba(255, 255, 255, 0.08)", display: "flex", flexDirection: "row", padding: "0px 10px 0px 10px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <Note size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#ffffff", display: "block" }} />
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "104px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#ffffff" }}>Request receipts</p>
      </div>
      <div style={{ height: "32px", flexShrink: 0, borderRadius: "8px", background: "rgba(255, 255, 255, 0.08)", display: "flex", flexDirection: "row", padding: "0px 10px 0px 10px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <Upload size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#ffffff", display: "block" }} />
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "41px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#ffffff" }}>Export</p>
      </div>
      <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "8px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
        <X size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#a1a1aa", display: "block" }} />
      </div>
    </div>
  );
}
