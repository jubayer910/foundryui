// Footer modal, Uses 1 of 4 remaining runs (abotix, Modals) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist, Inter. Icons: Ingot Icons.
import type { SVGProps } from "react";

// Ingot Icons used here, inlined so this file needs no icon package.
function icon(body: string) {
  return function Icon({ size = 24, strokeWidth = 1.5, ...p }: { size?: number; strokeWidth?: number } & SVGProps<SVGSVGElement>) {
    const html = strokeWidth == 1.5 ? body : body.replace(/stroke-width="([\d.]+)"/g, (_, w) => `stroke-width="${(Number(w) * Number(strokeWidth)) / 1.5}"`);
    return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden {...p} dangerouslySetInnerHTML={{ __html: html }} />;
  };
}
const Brain = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M15.5 13a3.5 3.5 0 0 0 -3.5 3.5v1a3.5 3.5 0 0 0 7 0v-1.8\" /><path d=\"M8.5 13a3.5 3.5 0 0 1 3.5 3.5v1a3.5 3.5 0 0 1 -7 0v-1.8\" /><path d=\"M17.5 16a3.5 3.5 0 0 0 0 -7h-.5\" /><path d=\"M19 9.3v-2.8a3.5 3.5 0 0 0 -7 0\" /><path d=\"M6.5 16a3.5 3.5 0 0 1 0 -7h.5\" /><path d=\"M5 9.3v-2.8a3.5 3.5 0 0 1 7 0v10\" /></g>");
const PlayerPlay = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M7 4v16l13 -8l-13 -8\" /></g>");

export function FooterModalUses1Of4RemainingRuns() {
  return (
    <div style={{ width: "598px", height: "63px", background: "#fafafa", boxShadow: "inset 0 1px 0 0 #ececec", display: "flex", flexDirection: "row", padding: "15px 20px 14px 20px", gap: "8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
      <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <Brain size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#2563eb", display: "block" }} />
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "160px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#747474" }}>Uses 1 of 4 remaining runs</p>
      </div>
      <div style={{ height: "34px", flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ebebeb", display: "flex", flexDirection: "row", padding: "1px 9px 1px 9px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "45px", lineHeight: "17px", fontFamily: "'Inter'", fontSize: "14px", fontWeight: 500, color: "#000000", letterSpacing: "-0.02em" }}>Cancel</p>
      </div>
      <div style={{ flexShrink: 0, borderRadius: "11px", background: "#347bf9", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ height: "32px", flexShrink: 0, borderRadius: "10px", background: "linear-gradient(90deg, #0f61f3 28%, #5895ff 100%)", display: "flex", flexDirection: "row", padding: "0px 10px 0px 10px", gap: "6px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <PlayerPlay size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#ffffff", display: "block" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "89px", fontFamily: "'Inter'", fontSize: "14px", fontWeight: 500, color: "#ffffff", lineHeight: "1.149999976158142" }}>Start pentest</p>
        </div>
      </div>
    </div>
  );
}
