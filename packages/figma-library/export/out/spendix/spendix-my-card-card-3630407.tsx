// My card card (spendix, Charts) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Ingot Icons.
import type { SVGProps } from "react";

// Ingot Icons used here, inlined so this file needs no icon package.
function icon(body: string) {
  return function Icon({ size = 24, strokeWidth = 1.5, ...p }: { size?: number; strokeWidth?: number } & SVGProps<SVGSVGElement>) {
    const html = strokeWidth == 1.5 ? body : body.replace(/stroke-width="([\d.]+)"/g, (_, w) => `stroke-width="${(Number(w) * Number(strokeWidth)) / 1.5}"`);
    return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden {...p} dangerouslySetInnerHTML={{ __html: html }} />;
  };
}
const Eye = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0\" /><path d=\"M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6\" /></g>");
const Key = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M16.555 3.843l3.602 3.602a2.877 2.877 0 0 1 0 4.069l-2.643 2.643a2.877 2.877 0 0 1 -4.069 0l-.301 -.301l-6.558 6.558a2 2 0 0 1 -1.239 .578l-.175 .008h-1.172a1 1 0 0 1 -.993 -.883l-.007 -.117v-1.172a2 2 0 0 1 .467 -1.284l.119 -.13l.414 -.414h2v-2h2v-2l2.144 -2.144l-.301 -.301a2.877 2.877 0 0 1 0 -4.069l2.643 -2.643a2.877 2.877 0 0 1 4.069 0\" /><path d=\"M15 9h.01\" /></g>");
const Loader = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 6l0 -3\" /><path d=\"M16.25 7.75l2.15 -2.15\" /><path d=\"M18 12l3 0\" /><path d=\"M16.25 16.25l2.15 2.15\" /><path d=\"M12 18l0 3\" /><path d=\"M7.75 16.25l-2.15 2.15\" /><path d=\"M6 12l-3 0\" /><path d=\"M7.75 7.75l-2.15 -2.15\" /></g>");
const Lock = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6\" /><path d=\"M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0\" /><path d=\"M8 11v-4a4 4 0 1 1 8 0v4\" /></g>");
const Wifi = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 18l.01 0\" /><path d=\"M9.172 15.172a4 4 0 0 1 5.656 0\" /><path d=\"M6.343 12.343a8 8 0 0 1 11.314 0\" /><path d=\"M3.515 9.515c4.686 -4.687 12.284 -4.687 17 0\" /></g>");

export function MyCardCard() {
  return (
    <div style={{ width: "452px", height: "392px", borderRadius: "12px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e2e8f0", overflow: "hidden", position: "relative" }}>
      <div style={{ position: "absolute", left: "0px", top: "0px", width: "452px", height: "48px", boxShadow: "inset 0 -1px 0 0 #e2e8f0", display: "flex", flexDirection: "row", padding: "0px 16px 1px 16px", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "113px", lineHeight: "21px", fontFamily: "'Geist'", fontSize: "16px", fontWeight: 500, color: "#0f172a" }}>Corporate card</p>
        </div>
        <div style={{ height: "26px", flexShrink: 0, borderRadius: "16px", background: "#e7fff0", display: "flex", flexDirection: "row", padding: "0px 12px 0px 8px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <Loader size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#16a34a", display: "block" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "36px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#16a34a" }}>Active</p>
        </div>
      </div>
      <div style={{ position: "absolute", left: "16px", top: "64px", width: "420px", height: "240px", borderRadius: "12px", background: "linear-gradient(90deg, #f9f6ff 0%, #e4e4ea 100%), linear-gradient(#f8f8f8, #f8f8f8)", boxShadow: "inset 0 0 0 0.8px #f3f3f3", overflow: "hidden" }}>
        <p style={{ position: "absolute", left: "15.7px", top: "15.7px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "64px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12.5px", fontWeight: 500, color: "#040404" }}>Ethan Cole</p>
        <Wifi size={18} strokeWidth={1.51} style={{ position: "absolute", left: "402px", top: "15px", width: "18px", height: "18px", transform: "rotate(90deg)", transformOrigin: "top left", color: "#040404", display: "block", flexShrink: 0 }} />
        <p style={{ position: "absolute", left: "12.5px", top: "190px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "108px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 600, color: "#040404" }}>Spendix Corporate</p>
        <p style={{ position: "absolute", left: "374.5px", top: "192px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "29px", lineHeight: "12px", fontFamily: "'Geist'", fontSize: "9.4px", fontWeight: 500, color: "#040404" }}>09/29</p>
        <p style={{ position: "absolute", left: "12.5px", top: "210px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "118px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12.5px", fontWeight: 600, color: "#040404", letterSpacing: "0.08em" }}>••••  ••••  ••••  7731</p>
      </div>
      <div style={{ position: "absolute", left: "16px", top: "318px", width: "420px", height: "60px", display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
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
    </div>
  );
}
