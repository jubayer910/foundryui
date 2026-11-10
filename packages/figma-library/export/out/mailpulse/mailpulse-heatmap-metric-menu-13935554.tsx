// Heatmap metric menu (mailpulse, Menus) from Foundry UI.
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Foundry Icons.
import { CursorPointer as CursorPointerBulk, MailOpen as MailOpenBulk, MessageCircle as MessageCircleBulk, Target as TargetBulk, UserMinus as UserMinusBulk } from "foundryui-icons/react/bulk";
import { Check } from "foundryui-icons/react/stroke-rounded";

export function HeatmapMetricMenu() {
  return (
    <div style={{ width: "210px", height: "183px", borderRadius: "9.1px", background: "#ffffff", boxShadow: "inset 0 0 0 0.9px #e8e8e8, 0px 14.6px 29.2px -11px rgba(13, 13, 18, 0.1), 0px 0.9px 1.8px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "column", padding: "4.6px 4.6px 4.6px 4.6px", gap: "0.9px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
      <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", padding: "5.5px 7.3px 3.7px 7.3px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "11px", fontWeight: 500, color: "#a6a6a6", letterSpacing: "0.02em", textTransform: "uppercase" }}>Colour cells by</p>
      </div>
      <div style={{ alignSelf: "stretch", height: "29.2px", flexShrink: 0, borderRadius: "5.5px", display: "flex", flexDirection: "row", padding: "0px 7.3px 0px 7.3px", gap: "7.3px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <MailOpenBulk size={12.8} style={{ width: "12.8px", height: "12.8px", flexShrink: 0, color: "#141b34", display: "block" }} />
        <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.8px", fontWeight: 500, color: "#000000" }}>Open rate</p>
        <Check size={12.8} style={{ width: "12.8px", height: "12.8px", flexShrink: 0, color: "#7c53f9", display: "block" }} />
      </div>
      <div style={{ alignSelf: "stretch", height: "29.2px", flexShrink: 0, borderRadius: "5.5px", background: "#f4f4f5", boxShadow: "inset 0 0 0 0.9px #e8e8eb", display: "flex", flexDirection: "row", padding: "0px 7.3px 0px 7.3px", gap: "7.3px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <CursorPointerBulk size={12.8} style={{ width: "12.8px", height: "12.8px", flexShrink: 0, color: "#141b34", display: "block" }} />
        <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.8px", fontWeight: 500, color: "#000000" }}>Click rate</p>
      </div>
      <div style={{ alignSelf: "stretch", height: "29.2px", flexShrink: 0, borderRadius: "5.5px", display: "flex", flexDirection: "row", padding: "0px 7.3px 0px 7.3px", gap: "7.3px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <TargetBulk size={12.8} style={{ width: "12.8px", height: "12.8px", flexShrink: 0, color: "#141b34", display: "block" }} />
        <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.8px", fontWeight: 400, color: "#24322e" }}>Click-to-open</p>
      </div>
      <div style={{ alignSelf: "stretch", height: "29.2px", flexShrink: 0, borderRadius: "5.5px", display: "flex", flexDirection: "row", padding: "0px 7.3px 0px 7.3px", gap: "7.3px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <MessageCircleBulk size={12.8} style={{ width: "12.8px", height: "12.8px", flexShrink: 0, color: "#141b34", display: "block" }} />
        <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.8px", fontWeight: 400, color: "#24322e" }}>Replies</p>
      </div>
      <div style={{ alignSelf: "stretch", height: "29.2px", flexShrink: 0, borderRadius: "5.5px", display: "flex", flexDirection: "row", padding: "0px 7.3px 0px 7.3px", gap: "7.3px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <UserMinusBulk size={12.8} style={{ width: "12.8px", height: "12.8px", flexShrink: 0, color: "#141b34", display: "block" }} />
        <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.8px", fontWeight: 400, color: "#24322e" }}>Unsubscribes</p>
      </div>
    </div>
  );
}
