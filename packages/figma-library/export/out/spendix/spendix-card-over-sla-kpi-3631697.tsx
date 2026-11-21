// Card Over SLA KPI (spendix, KPI and stats) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Ingot Icons.
import type { SVGProps } from "react";

// Ingot Icons used here, inlined so this file needs no icon package.
function icon(body: string) {
  return function Icon({ size = 24, strokeWidth = 1.5, ...p }: { size?: number; strokeWidth?: number } & SVGProps<SVGSVGElement>) {
    const html = strokeWidth == 1.5 ? body : body.replace(/stroke-width="([\d.]+)"/g, (_, w) => `stroke-width="${(Number(w) * Number(strokeWidth)) / 1.5}"`);
    return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden {...p} dangerouslySetInnerHTML={{ __html: html }} />;
  };
}
const AlarmClockSolid = icon("<mask id=\"fu-alarm-clock\" maskUnits=\"userSpaceOnUse\" x=\"0\" y=\"0\" width=\"24\" height=\"24\"><rect width=\"24\" height=\"24\" fill=\"#fff\"/><g stroke=\"#000\" fill=\"none\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 9V13L14 15\"/><path d=\"M6.38 18.7L4 21\"/><path d=\"M17.64 18.67L20 21\"/></g></mask><g mask=\"url(#fu-alarm-clock)\"><path d=\"M4 13a8 8 0 1 0 16 0a8 8 0 1 0 -16 0z\" fill=\"currentColor\"/><path d=\"M4 13a8 8 0 1 0 16 0a8 8 0 1 0 -16 0z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></g><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M5 3L2 6\"/><path d=\"M22 6L19 3\"/></g>");
const DotsVertical = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M11 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0\" /><path d=\"M11 19a1 1 0 1 0 2 0a1 1 0 1 0 -2 0\" /><path d=\"M11 5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0\" /></g>");

export function CardOverSLAKPI() {
  return (
    <div style={{ width: "278px", height: "137px", borderRadius: "12px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e2e8f0", overflow: "hidden", position: "relative" }}>
      <div style={{ position: "absolute", left: "20px", top: "20px", width: "238px", height: "95px", display: "flex", flexDirection: "column", gap: "24px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "25px", height: "25px", flexShrink: 0, borderRadius: "8px", background: "#e5484d", boxShadow: "inset 0 0 0 1px #ededed, 0px 4px 8px 0px rgba(0, 0, 0, 0.08), inset 0px 3px 2px 0px rgba(255, 255, 255, 0.49)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <AlarmClockSolid size={12.5} style={{ width: "12.5px", height: "12.5px", flexShrink: 0, color: "#ffffff", display: "block" }} />
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "70px", lineHeight: "21px", fontFamily: "'Geist'", fontSize: "16px", fontWeight: 500, color: "#0f172a" }}>Over SLA</p>
          </div>
          <DotsVertical size={18} strokeWidth={1.51} style={{ width: "18px", height: "18px", flexShrink: 0, color: "#c4c4c4", display: "block" }} />
        </div>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "13px", lineHeight: "26px", fontFamily: "'Geist'", fontSize: "20px", fontWeight: 500, color: "#0f172a" }}>2</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "125px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#0f172a" }}>Waiting more than 24h</p>
        </div>
      </div>
    </div>
  );
}
