// Header drawer (spendix, Drawers) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Ingot Icons.
import { X } from "ingotui-icons/react/stroke-rounded";

export function HeaderDrawer() {
  return (
    <div style={{ width: "438px", height: "77px", boxShadow: "inset 0 -1px 0 0 #e2e8f0", display: "flex", flexDirection: "row", padding: "18px 20px 19px 20px", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
      <div style={{ width: "40px", height: "40px", flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e7e7e7", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ width: "24px", height: "24px", flexShrink: 0, position: "relative" }}>
          <div style={{ position: "absolute", left: "0px", top: "0px", width: "24px", height: "24px", background: "url('https://ingotui.com/library-img/0cf31a99ea799aa140a3352eb940dd3f193295c3.png') center / cover no-repeat" }} />
        </div>
      </div>
      <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "46px", lineHeight: "21px", fontFamily: "'Geist'", fontSize: "16px", fontWeight: 500, color: "#0f172a" }}>Figma</p>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "178px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>TXN-20418 · 03/04/2026, 10:42</p>
      </div>
      <div style={{ width: "30px", height: "30px", flexShrink: 0, borderRadius: "8px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #dfe1e6", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
        <X size={14} strokeWidth={1.51} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#7d818c", display: "block" }} />
      </div>
    </div>
  );
}
