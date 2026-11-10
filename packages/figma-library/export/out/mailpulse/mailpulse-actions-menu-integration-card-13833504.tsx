// Actions menu integration card (mailpulse, Menus) from Foundry UI.
// Generated from the Figma original and checked against it. Fonts: Geist, Geist Mono. Icons: Foundry Icons.
import { Copy as CopyBulk, Eye as EyeBulk, Refresh as RefreshBulk, Timer as TimerBulk, Trash as TrashBulk } from "foundryui-icons/react/bulk";

export function ActionsMenuIntegrationCard() {
  return (
    <div style={{ width: "220px", height: "166.3px", borderRadius: "9.1px", background: "#ffffff", boxShadow: "inset 0 0 0 0.9px #e8e8e8, 0px 14.6px 29.2px -11px rgba(13, 13, 18, 0.1), 0px 0.9px 1.8px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "column", padding: "4.6px 4.6px 4.6px 4.6px", gap: "0.9px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
      <div style={{ alignSelf: "stretch", height: "29.2px", flexShrink: 0, borderRadius: "5.5px", display: "flex", flexDirection: "row", padding: "0px 7.3px 0px 7.3px", gap: "7.3px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <EyeBulk size={12.8} style={{ width: "12.8px", height: "12.8px", flexShrink: 0, color: "#141b34", display: "block" }} />
        <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.8px", fontWeight: 400, color: "#24322e" }}>View details</p>
      </div>
      <div style={{ alignSelf: "stretch", height: "29.2px", flexShrink: 0, borderRadius: "5.5px", background: "#f4f4f5", boxShadow: "inset 0 0 0 0.9px #e8e8eb", display: "flex", flexDirection: "row", padding: "0px 7.3px 0px 7.3px", gap: "7.3px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <RefreshBulk size={12.8} style={{ width: "12.8px", height: "12.8px", flexShrink: 0, color: "#141b34", display: "block" }} />
        <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.8px", fontWeight: 500, color: "#000000" }}>Sync now</p>
        <div style={{ flexShrink: 0, borderRadius: "3.7px", background: "#f5f5f5", boxShadow: "inset 0 0 0 0.9px #e8e8e8", display: "flex", flexDirection: "row", padding: "1.8px 5.5px 1.8px 5.5px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "13px", fontFamily: "'Geist Mono'", fontSize: "10.1px", fontWeight: 400, color: "#6c6c6c" }}>S</p>
        </div>
      </div>
      <div style={{ alignSelf: "stretch", height: "29.2px", flexShrink: 0, borderRadius: "5.5px", display: "flex", flexDirection: "row", padding: "0px 7.3px 0px 7.3px", gap: "7.3px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <TimerBulk size={12.8} style={{ width: "12.8px", height: "12.8px", flexShrink: 0, color: "#141b34", display: "block" }} />
        <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.8px", fontWeight: 400, color: "#24322e" }}>Pause sync</p>
      </div>
      <div style={{ alignSelf: "stretch", height: "29.2px", flexShrink: 0, borderRadius: "5.5px", display: "flex", flexDirection: "row", padding: "0px 7.3px 0px 7.3px", gap: "7.3px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <CopyBulk size={12.8} style={{ width: "12.8px", height: "12.8px", flexShrink: 0, color: "#141b34", display: "block" }} />
        <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.8px", fontWeight: 400, color: "#24322e" }}>Copy webhook URL</p>
      </div>
      <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", padding: "2.7px 0px 2.7px 0px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ alignSelf: "stretch", height: "0.9px", flexShrink: 0, background: "#eeeeee" }} />
      </div>
      <div style={{ alignSelf: "stretch", height: "29.2px", flexShrink: 0, borderRadius: "5.5px", display: "flex", flexDirection: "row", padding: "0px 7.3px 0px 7.3px", gap: "7.3px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <TrashBulk size={12.8} style={{ width: "12.8px", height: "12.8px", flexShrink: 0, color: "#e5484d", display: "block" }} />
        <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.8px", fontWeight: 400, color: "#e5484d" }}>Disconnect</p>
      </div>
    </div>
  );
}
