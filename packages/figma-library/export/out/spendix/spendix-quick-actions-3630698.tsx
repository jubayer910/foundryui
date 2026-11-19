// Quick actions (spendix, Charts) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Ingot Icons.
import { Eye, Key, Lock } from "ingotui-icons/react/stroke-rounded";

export function QuickActions() {
  return (
    <div style={{ width: "420px", height: "60px", display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
      <div style={{ flex: "1 1 0", minWidth: 0, height: "60px", flexShrink: 0, borderRadius: "8px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #dfe1e6, 0px 1px 2px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "column", padding: "1px 9px 1px 9px", gap: "6px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
        <Eye size={18} strokeWidth={1.51} style={{ width: "18px", height: "18px", flexShrink: 0, color: "#0f172a", display: "block" }} />
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "73px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#0f172a" }}>Show details</p>
      </div>
      <div style={{ flex: "1 1 0", minWidth: 0, height: "60px", flexShrink: 0, borderRadius: "8px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #dfe1e6, 0px 1px 2px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "column", padding: "1px 9px 1px 9px", gap: "6px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
        <Lock size={18} strokeWidth={1.51} style={{ width: "18px", height: "18px", flexShrink: 0, color: "#0f172a", display: "block" }} />
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "38px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#0f172a" }}>Freeze</p>
      </div>
      <div style={{ flex: "1 1 0", minWidth: 0, height: "60px", flexShrink: 0, borderRadius: "8px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #dfe1e6, 0px 1px 2px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "column", padding: "1px 9px 1px 9px", gap: "6px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
        <Key size={18} strokeWidth={1.51} style={{ width: "18px", height: "18px", flexShrink: 0, color: "#0f172a", display: "block" }} />
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "43px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#0f172a" }}>Set PIN</p>
      </div>
      <div style={{ flex: "1 1 0", minWidth: 0, height: "60px", flexShrink: 0, borderRadius: "8px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #dfe1e6, 0px 1px 2px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "column", padding: "1px 9px 1px 9px", gap: "6px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
        <svg width={18} height={18} viewBox="0 0 24 24" style={{ width: "18px", height: "18px", flexShrink: 0, color: "#0f172a", display: "block" }}><path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" fill="currentColor" /></svg>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "72px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#0f172a" }}>Apple Wallet</p>
      </div>
    </div>
  );
}
