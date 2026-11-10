// Composer (mailpulse, Cards and panels) from Foundry UI.
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Foundry Icons.
import { Paperclip as PaperclipBulk, Send as SendBulk } from "foundryui-icons/react/bulk";

export function Composer() {
  return (
    <div style={{ width: "358.2px", height: "59.4px", boxShadow: "inset 0 0.9px 0 0 #eeeeee", display: "flex", flexDirection: "row", padding: "11.9px 12.8px 11px 12.8px", gap: "9.1px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
      <div style={{ flex: "1 1 0", minWidth: 0, height: "36.6px", flexShrink: 0, borderRadius: "9.1px", background: "#ffffff", boxShadow: "inset 0 0 0 0.9px #e8e8e8", display: "flex", flexDirection: "row", padding: "0.9px 11.9px 0.9px 11.9px", gap: "7.3px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.8px", fontWeight: 400, color: "#989898" }}>Write a reply…</p>
        <PaperclipBulk size={14.6} style={{ width: "14.6px", height: "14.6px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
      </div>
      <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "16px", background: "rgba(124, 83, 249, 0.12)", boxShadow: "0px 0.9px 1.8px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
        <SendBulk size={14.6} style={{ width: "14.6px", height: "14.6px", flexShrink: 0, color: "#7c53f9", display: "block" }} />
      </div>
    </div>
  );
}
