// Footer modal, Sign-in happens on PayPal (loopo, Modals) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Ingot Icons.
import type { SVGProps } from "react";

// Ingot Icons used here, inlined so this file needs no icon package.
function icon(body: string) {
  return function Icon({ size = 24, strokeWidth = 1.5, ...p }: { size?: number; strokeWidth?: number } & SVGProps<SVGSVGElement>) {
    const html = strokeWidth == 1.5 ? body : body.replace(/stroke-width="([\d.]+)"/g, (_, w) => `stroke-width="${(Number(w) * Number(strokeWidth)) / 1.5}"`);
    return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden {...p} dangerouslySetInnerHTML={{ __html: html }} />;
  };
}
const LockBulk = icon("<path d=\"M5 13A2 2 0 0 1 7 11H17A2 2 0 0 1 19 13V19A2 2 0 0 1 17 21H7A2 2 0 0 1 5 19V13\" fill=\"currentColor\" fill-opacity=\"0.4\"/><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M11 16A1 1 0 1 0 13 16 1 1 0 0 0 11 16\"/></g><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M8 11V7A4 4 0 1 1 16 7V11\"/></g>");
const ExternalLink = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6\" /><path d=\"M11 13l9 -9\" /><path d=\"M15 4h5v5\" /></g>");

export function FooterModalSignInHappensOnPayPal() {
  return (
    <div style={{ width: "567.5px", height: "71.2px", background: "#fafafa", boxShadow: "inset 0 1.1px 0 0 #eeeeee", display: "flex", flexDirection: "row", padding: "16.4px 19.7px 15.3px 19.7px", gap: "11px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
      <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "row", gap: "6.6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <LockBulk size={16.4} style={{ width: "16.4px", height: "16.4px", flexShrink: 0, color: "#7d818c", display: "block" }} />
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 400, color: "#999999" }}>Sign-in happens on PayPal</p>
      </div>
      <div style={{ height: "39.4px", flexShrink: 0, borderRadius: "109.6px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8", display: "flex", flexDirection: "row", padding: "11px 11px 11px 11px", gap: "6.6px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 500, color: "#6c6c6c", lineHeight: "17.5px" }}>Cancel</p>
      </div>
      <div style={{ height: "39.4px", flexShrink: 0, borderRadius: "109.6px", background: "linear-gradient(180deg, #838383 0%, #2d2d2d 100%)", boxShadow: "0px 9.9px 8.8px 0px rgba(0, 0, 0, 0.04)", display: "flex", flexDirection: "column", padding: "11px 11px 11px 11px", gap: "11px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ alignSelf: "stretch", height: "17.5px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "4.4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <ExternalLink size={17.5} style={{ width: "17.5px", height: "17.5px", flexShrink: 0, color: "#ffffff", display: "block" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 500, color: "#ffffff", lineHeight: "17.5px" }}>Continue to PayPal</p>
        </div>
      </div>
    </div>
  );
}
