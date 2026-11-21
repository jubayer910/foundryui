// Integrations page (auton, Templates) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Ingot Icons.
import type { SVGProps } from "react";

// Ingot Icons used here, inlined so this file needs no icon package.
function icon(body: string) {
  return function Icon({ size = 24, strokeWidth = 1.5, ...p }: { size?: number; strokeWidth?: number } & SVGProps<SVGSVGElement>) {
    const html = strokeWidth == 1.5 ? body : body.replace(/stroke-width="([\d.]+)"/g, (_, w) => `stroke-width="${(Number(w) * Number(strokeWidth)) / 1.5}"`);
    return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden {...p} dangerouslySetInnerHTML={{ __html: html }} />;
  };
}
const Api = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 13h5\" /><path d=\"M12 16v-8h3a2 2 0 0 1 2 2v1a2 2 0 0 1 -2 2h-3\" /><path d=\"M20 8v8\" /><path d=\"M9 16v-5.5a2.5 2.5 0 0 0 -5 0v5.5\" /></g>");
const ArrowUpRight = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M17 7l-10 10\" /><path d=\"M8 7l9 0l0 9\" /></g>");
const Bell = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M10 5a2 2 0 1 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6\" /><path d=\"M9 17v1a3 3 0 0 0 6 0v-1\" /></g>");
const Book = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0\" /><path d=\"M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0\" /><path d=\"M3 6l0 13\" /><path d=\"M12 6l0 13\" /><path d=\"M21 6l0 13\" /></g>");
const Checklist = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M9.615 20h-2.615a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8\" /><path d=\"M14 19l2 2l4 -4\" /><path d=\"M9 8h4\" /><path d=\"M9 12h2\" /></g>");
const ClipboardList = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2\" /><path d=\"M9 5a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2\" /><path d=\"M9 12l.01 0\" /><path d=\"M13 12l2 0\" /><path d=\"M9 16l.01 0\" /><path d=\"M13 16l2 0\" /></g>");
const Code = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M7 8l-4 4l4 4\" /><path d=\"M17 8l4 4l-4 4\" /><path d=\"M14 4l-4 16\" /></g>");
const Command = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M7 9a2 2 0 1 1 2 -2v10a2 2 0 1 1 -2 -2h10a2 2 0 1 1 -2 2v-10a2 2 0 1 1 2 2h-10\" /></g>");
const Database = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 6a8 3 0 1 0 16 0a8 3 0 1 0 -16 0\" /><path d=\"M4 6v6a8 3 0 0 0 16 0v-6\" /><path d=\"M4 12v6a8 3 0 0 0 16 0v-6\" /></g>");
const Key = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M16.555 3.843l3.602 3.602a2.877 2.877 0 0 1 0 4.069l-2.643 2.643a2.877 2.877 0 0 1 -4.069 0l-.301 -.301l-6.558 6.558a2 2 0 0 1 -1.239 .578l-.175 .008h-1.172a1 1 0 0 1 -.993 -.883l-.007 -.117v-1.172a2 2 0 0 1 .467 -1.284l.119 -.13l.414 -.414h2v-2h2v-2l2.144 -2.144l-.301 -.301a2.877 2.877 0 0 1 0 -4.069l2.643 -2.643a2.877 2.877 0 0 1 4.069 0\" /><path d=\"M15 9h.01\" /></g>");
const LayoutDashboard = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M5 4h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1\" /><path d=\"M5 16h4a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1\" /><path d=\"M15 12h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1\" /><path d=\"M15 4h4a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1\" /></g>");
const Mail = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10\" /><path d=\"M3 7l9 6l9 -6\" /></g>");
const Menu2 = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 6l16 0\" /><path d=\"M4 12l16 0\" /><path d=\"M4 18l16 0\" /></g>");
const Outlet = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2l0 -12\" /><path d=\"M8.5 12a.5 .5 0 1 0 1 0a.5 .5 0 1 0 -1 0\" fill=\"currentColor\" /><path d=\"M14.5 12a.5 .5 0 1 0 1 0a.5 .5 0 1 0 -1 0\" fill=\"currentColor\" /></g>");
const Plus = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 5l0 14\" /><path d=\"M5 12l14 0\" /></g>");
const Search = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 10a7 7 0 1 0 14 0a7 7 0 1 0 -14 0\" /><path d=\"M21 21l-6 -6\" /></g>");
const Settings = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065\" /><path d=\"M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0\" /></g>");
const Shield = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3\" /></g>");
const ShieldKeyhole = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 13v3\" /><path d=\"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 01-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 011-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 011.52 0C14.51 3.81 17 5 19 5a1 1 0 011 1z\" /><circle cx=\"12\" cy=\"11\" r=\"2\" /></g>");
const Snow = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 12L12 17M12 22L12 17M12 17L7.5 14.5M12 17L16.5 19.5M12 17L16.5 14.5M12 17L7.5 19.5\"/><path d=\"M20 17.6073C21.4937 17.0221 23 15.6889 23 13C23 9 19.6667 8 18 8C18 6 18 2 12 2C6 2 6 6 6 8C4.33333 8 1 9 1 13C1 15.6889 2.50628 17.0221 4 17.6073\"/></g>");
const UserShield = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M6 21v-2a4 4 0 0 1 4 -4h2\" /><path d=\"M22 16c0 4 -2.5 6 -3.5 6s-3.5 -2 -3.5 -6c1 0 2.5 -.5 3.5 -1.5c1 1 2.5 1.5 3.5 1.5\" /><path d=\"M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0\" /></g>");
const Users = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M5 7a4 4 0 1 0 8 0a4 4 0 1 0 -8 0\" /><path d=\"M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2\" /><path d=\"M16 3.13a4 4 0 0 1 0 7.75\" /><path d=\"M21 21v-2a4 4 0 0 0 -3 -3.85\" /></g>");
const BoltSolid = icon("<g fill=\"currentColor\"><path d=\"M13 2l.018 .001l.016 .001l.083 .005l.011 .002h.011l.038 .009l.052 .008l.016 .006l.011 .001l.029 .011l.052 .014l.019 .009l.015 .004l.028 .014l.04 .017l.021 .012l.022 .01l.023 .015l.031 .017l.034 .024l.018 .011l.013 .012l.024 .017l.038 .034l.022 .017l.008 .01l.014 .012l.036 .041l.026 .027l.006 .009c.12 .147 .196 .322 .218 .513l.001 .012l.002 .041l.004 .064v6h5a1 1 0 0 1 .868 1.497l-.06 .091l-8 11c-.568 .783 -1.808 .38 -1.808 -.588v-6h-5a1 1 0 0 1 -.868 -1.497l.06 -.091l8 -11l.01 -.013l.018 -.024l.033 -.038l.018 -.022l.009 -.008l.013 -.014l.04 -.036l.028 -.026l.008 -.006a1 1 0 0 1 .402 -.199l.011 -.001l.027 -.005l.074 -.013l.011 -.001l.041 -.002z\" /></g>");
const CircleCheckSolid = icon("<g fill=\"currentColor\"><path d=\"M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z\" /></g>");
const OutletSolid = icon("<mask id=\"fu-outlet\" maskUnits=\"userSpaceOnUse\" x=\"0\" y=\"0\" width=\"24\" height=\"24\"><rect width=\"24\" height=\"24\" fill=\"#fff\"/><g stroke=\"#000\" fill=\"none\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></g><path d=\"M8.5 12A0.5 0.5 0 1 0 9.5 12 0.5 0.5 0 1 0 8.5 12\" fill=\"#000\"/><path d=\"M14.5 12A0.5 0.5 0 1 0 15.5 12 0.5 0.5 0 1 0 14.5 12\" fill=\"#000\"/></mask><g mask=\"url(#fu-outlet)\"><path d=\"M4 6A2 2 0 0 1 6 4H18A2 2 0 0 1 20 6V18A2 2 0 0 1 18 20H6A2 2 0 0 1 4 18L4 6\" fill=\"currentColor\"/><path d=\"M4 6A2 2 0 0 1 6 4H18A2 2 0 0 1 20 6V18A2 2 0 0 1 18 20H6A2 2 0 0 1 4 18L4 6\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></g>");
const PlayerRecordSolid = icon("<g fill=\"currentColor\"><path d=\"M8 5.072a8 8 0 1 1 -3.995 7.213l-.005 -.285l.005 -.285a8 8 0 0 1 3.995 -6.643z\" /></g>");

export function IntegrationsPage() {
  return (
    <div style={{ width: "1440px", height: "1026px", background: "#fafafa", overflow: "hidden", position: "relative" }}>
      <div style={{ position: "absolute", left: "243px", top: "60px", width: "1173px", height: "966px", background: "#ffffff", boxShadow: "inset -1px 0 0 0 #e2e4e5", overflow: "hidden" }}>
        <div style={{ position: "absolute", left: "20px", top: "20px", width: "1133px", height: "36px", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "99px", fontFamily: "'Geist'", fontSize: "18px", fontWeight: 400, color: "#111111", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "13px" }}>Integrations</p>
            <div style={{ height: "18px", flexShrink: 0, borderRadius: "999px", background: "#fbfbfb", boxShadow: "inset 0 0 0 1px #ededed", overflow: "hidden", display: "flex", flexDirection: "row", padding: "1px 5px 1px 5px", gap: "1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "13px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#666666", textBox: "trim-both cap alphabetic", height: "9px" }}>15</p>
            </div>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, borderRadius: "8px", background: "#f5f5f5", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ height: "32px", flexShrink: 0, borderRadius: "8px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #eff1f2", display: "flex", flexDirection: "row", padding: "11px 9px 11px 9px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "17px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#333333", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>All</p>
                <div style={{ height: "18px", flexShrink: 0, borderRadius: "999px", background: "#fbfbfb", boxShadow: "inset 0 0 0 1px #ededed", overflow: "hidden", display: "flex", flexDirection: "row", padding: "1px 5px 1px 5px", gap: "1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "13px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#666666", textBox: "trim-both cap alphabetic", height: "9px" }}>15</p>
                </div>
              </div>
              <div style={{ height: "32px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "10px 8px 10px 8px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "70px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#666666", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Connected</p>
                <div style={{ height: "18px", flexShrink: 0, borderRadius: "999px", background: "#fbfbfb", boxShadow: "inset 0 0 0 1px #ededed", overflow: "hidden", display: "flex", flexDirection: "row", padding: "1px 5px 1px 5px", gap: "1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "8px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#666666", textBox: "trim-both cap alphabetic", height: "9px" }}>8</p>
                </div>
              </div>
              <div style={{ height: "32px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "10px 8px 10px 8px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "58px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#666666", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Available</p>
                <div style={{ height: "18px", flexShrink: 0, borderRadius: "999px", background: "#fbfbfb", boxShadow: "inset 0 0 0 1px #ededed", overflow: "hidden", display: "flex", flexDirection: "row", padding: "1px 5px 1px 5px", gap: "1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "7px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#666666", textBox: "trim-both cap alphabetic", height: "9px" }}>7</p>
                </div>
              </div>
            </div>
            <div style={{ width: "240px", height: "36px", flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e7e9eb, 0px 2px 4px 0px rgba(0, 0, 0, 0.02)", display: "flex", flexDirection: "row", padding: "1px 13px 1px 13px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <Search size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#888888", display: "block" }} />
              <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#888888", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Search integrations</p>
            </div>
            <div style={{ height: "36px", flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e7e9eb, 0px 2px 4px 0px rgba(0, 0, 0, 0.02)", display: "flex", flexDirection: "row", padding: "1px 15px 1px 13px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <Plus size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#222222", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "126px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#222222", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Request integration</p>
            </div>
          </div>
        </div>
        <div style={{ position: "absolute", left: "20px", top: "72px", width: "579px", height: "30px", display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ height: "30px", flexShrink: 0, borderRadius: "999px", background: "#222222", display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "88px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#ffffff", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>All categories</p>
          </div>
          <div style={{ height: "30px", flexShrink: 0, borderRadius: "999px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e7e9eb", display: "flex", flexDirection: "row", padding: "1px 13px 1px 13px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "34px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#444444", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Code</p>
          </div>
          <div style={{ height: "30px", flexShrink: 0, borderRadius: "999px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e7e9eb", display: "flex", flexDirection: "row", padding: "1px 13px 1px 13px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "38px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#444444", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Cloud</p>
          </div>
          <div style={{ height: "30px", flexShrink: 0, borderRadius: "999px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e7e9eb", display: "flex", flexDirection: "row", padding: "1px 13px 1px 13px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "31px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#444444", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Data</p>
          </div>
          <div style={{ height: "30px", flexShrink: 0, borderRadius: "999px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e7e9eb", display: "flex", flexDirection: "row", padding: "1px 13px 1px 13px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "77px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#444444", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Productivity</p>
          </div>
          <div style={{ height: "30px", flexShrink: 0, borderRadius: "999px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e7e9eb", display: "flex", flexDirection: "row", padding: "1px 13px 1px 13px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "31px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#444444", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Chat</p>
          </div>
          <div style={{ height: "30px", flexShrink: 0, borderRadius: "999px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e7e9eb", display: "flex", flexDirection: "row", padding: "1px 13px 1px 13px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "64px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#444444", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Payments</p>
          </div>
        </div>
        <div style={{ position: "absolute", left: "20px", top: "122px", width: "271px", height: "196px", borderRadius: "12px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #eff1f2, 0px 2px 4px 0px rgba(0, 0, 0, 0.02)", display: "flex", flexDirection: "column", padding: "17px 17px 17px 17px", gap: "14px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "43px", height: "43px", flexShrink: 0, borderRadius: "8px", background: "#f4f6f8", boxShadow: "inset 0 0 0 1px #eff1f2", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <svg width={22} height={22} viewBox="0 0 24 24" style={{ width: "22px", height: "22px", flexShrink: 0, color: "#181717", display: "block" }}><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" fill="currentColor" /></svg>
            </div>
            <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "8px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "51px", fontFamily: "'Geist'", fontSize: "16px", fontWeight: 400, color: "#222222", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "11px" }}>GitHub</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "34px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#777777", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Code</p>
            </div>
            <div style={{ height: "24px", flexShrink: 0, borderRadius: "9999px", background: "#edfbf3", boxShadow: "inset 0 0 0 1px rgba(95, 211, 154, 0.2)", display: "flex", flexDirection: "row", padding: "11px 11px 11px 11px", gap: "10px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "70px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#073b22", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Connected</p>
            </div>
          </div>
          <p style={{ width: "239px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#666666", lineHeight: "1.4500000476837158" }}>Repos, pull requests and deployments for coding agents.</p>
          <div style={{ width: "1px", flex: "1 1 0", minHeight: 0, flexShrink: 0, overflow: "hidden" }} />
          <svg style={{ width: "239px", height: "1px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible", marginBottom: "-1px" }} xmlns="http://www.w3.org/2000/svg" width="239" height="1" viewBox="0 0 239 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0L239 0" fill="none" stroke="#ced0d1" strokeWidth="1" strokeDasharray="2 2" strokeLinecap="butt"/></svg>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "124px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#555555", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>4 agents · 6 scopes</p>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "52px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#222222", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Manage</p>
              <ArrowUpRight size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#222222", display: "block" }} />
            </div>
          </div>
        </div>
        <div style={{ position: "absolute", left: "307px", top: "122px", width: "271px", height: "196px", borderRadius: "12px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #eff1f2, 0px 2px 4px 0px rgba(0, 0, 0, 0.02)", display: "flex", flexDirection: "column", padding: "17px 17px 17px 17px", gap: "14px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "43px", height: "43px", flexShrink: 0, borderRadius: "8px", background: "#f4f6f8", boxShadow: "inset 0 0 0 1px #eff1f2", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <svg width={22} height={22} viewBox="0 0 24 24" style={{ width: "22px", height: "22px", flexShrink: 0, color: "#ff9900", display: "block" }}><path d="M.045 18.02c.072-.116.187-.124.348-.022 3.636 2.11 7.594 3.166 11.87 3.166 2.852 0 5.668-.533 8.447-1.595l.315-.14c.138-.06.234-.1.293-.13.226-.088.39-.046.525.13.12.174.09.336-.12.48-.256.19-.6.41-1.006.654-1.244.743-2.64 1.316-4.185 1.726a17.617 17.617 0 01-10.951-.577 17.88 17.88 0 01-5.43-3.35c-.1-.074-.151-.15-.151-.22 0-.047.021-.09.051-.13zm6.565-6.218c0-1.005.247-1.863.743-2.577.495-.71 1.17-1.25 2.04-1.615.796-.335 1.756-.575 2.912-.72.39-.046 1.033-.103 1.92-.174v-.37c0-.93-.105-1.558-.3-1.875-.302-.43-.78-.65-1.44-.65h-.182c-.48.046-.896.196-1.246.46-.35.27-.575.63-.675 1.096-.06.3-.206.465-.435.51l-2.52-.315c-.248-.06-.372-.18-.372-.39 0-.046.007-.09.022-.15.247-1.29.855-2.25 1.82-2.88.976-.616 2.1-.975 3.39-1.05h.54c1.65 0 2.957.434 3.888 1.29.135.15.27.3.405.48.12.165.224.314.283.45.075.134.15.33.195.57.06.254.105.42.135.51.03.104.062.3.076.615.01.313.02.493.02.553v5.28c0 .376.06.72.165 1.036.105.313.21.54.315.674l.51.674c.09.136.136.256.136.36 0 .12-.06.226-.18.314-1.2 1.05-1.86 1.62-1.963 1.71-.165.135-.375.15-.63.045a6.062 6.062 0 01-.526-.496l-.31-.347a9.391 9.391 0 01-.317-.42l-.3-.435c-.81.886-1.603 1.44-2.4 1.665-.494.15-1.093.227-1.83.227-1.11 0-2.04-.343-2.76-1.034-.72-.69-1.08-1.665-1.08-2.94l-.05-.076zm3.753-.438c0 .566.14 1.02.425 1.364.285.34.675.512 1.155.512.045 0 .106-.007.195-.02.09-.016.134-.023.166-.023.614-.16 1.08-.553 1.424-1.178.165-.28.285-.58.36-.91.09-.32.12-.59.135-.8.015-.195.015-.54.015-1.005v-.54c-.84 0-1.484.06-1.92.18-1.275.36-1.92 1.17-1.92 2.43l-.035-.02zm9.162 7.027c.03-.06.075-.11.132-.17.362-.243.714-.41 1.05-.5a8.094 8.094 0 011.612-.24c.14-.012.28 0 .41.03.65.06 1.05.168 1.172.33.063.09.099.228.099.39v.15c0 .51-.149 1.11-.424 1.8-.278.69-.664 1.248-1.156 1.68-.073.06-.14.09-.197.09-.03 0-.06 0-.09-.012-.09-.044-.107-.12-.064-.24.54-1.26.806-2.143.806-2.64 0-.15-.03-.27-.087-.344-.145-.166-.55-.257-1.224-.257-.243 0-.533.016-.87.046-.363.045-.7.09-1 .135-.09 0-.148-.014-.18-.044-.03-.03-.036-.047-.02-.077 0-.017.006-.03.02-.063v-.06z" fill="currentColor" /></svg>
            </div>
            <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "8px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "34px", fontFamily: "'Geist'", fontSize: "16px", fontWeight: 400, color: "#222222", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "11px" }}>AWS</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "38px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#777777", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Cloud</p>
            </div>
            <div style={{ height: "24px", flexShrink: 0, borderRadius: "9999px", background: "#edfbf3", boxShadow: "inset 0 0 0 1px rgba(95, 211, 154, 0.2)", display: "flex", flexDirection: "row", padding: "11px 11px 11px 11px", gap: "10px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "70px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#073b22", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Connected</p>
            </div>
          </div>
          <p style={{ width: "239px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#666666", lineHeight: "1.4500000476837158" }}>Short-lived STS sessions for ECS, S3, Lambda and IAM.</p>
          <div style={{ width: "1px", flex: "1 1 0", minHeight: 0, flexShrink: 0, overflow: "hidden" }} />
          <svg style={{ width: "239px", height: "1px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible", marginBottom: "-1px" }} xmlns="http://www.w3.org/2000/svg" width="239" height="1" viewBox="0 0 239 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0L239 0" fill="none" stroke="#ced0d1" strokeWidth="1" strokeDasharray="2 2" strokeLinecap="butt"/></svg>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "126px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#555555", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>5 agents · 11 scopes</p>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "52px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#222222", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Manage</p>
              <ArrowUpRight size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#222222", display: "block" }} />
            </div>
          </div>
        </div>
        <div style={{ position: "absolute", left: "594px", top: "122px", width: "271px", height: "196px", borderRadius: "12px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #eff1f2, 0px 2px 4px 0px rgba(0, 0, 0, 0.02)", display: "flex", flexDirection: "column", padding: "17px 17px 17px 17px", gap: "14px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "43px", height: "43px", flexShrink: 0, borderRadius: "8px", background: "#f4f6f8", boxShadow: "inset 0 0 0 1px #eff1f2", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <Mail size={22} strokeWidth={1.64} style={{ width: "22px", height: "22px", flexShrink: 0, color: "#ea4335", display: "block" }} />
            </div>
            <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "8px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "42px", fontFamily: "'Geist'", fontSize: "16px", fontWeight: 400, color: "#222222", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "11px" }}>Gmail</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "77px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#777777", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Productivity</p>
            </div>
            <div style={{ height: "24px", flexShrink: 0, borderRadius: "9999px", background: "#edfbf3", boxShadow: "inset 0 0 0 1px rgba(95, 211, 154, 0.2)", display: "flex", flexDirection: "row", padding: "11px 11px 11px 11px", gap: "10px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "70px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#073b22", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Connected</p>
            </div>
          </div>
          <p style={{ width: "239px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#666666", lineHeight: "1.4500000476837158" }}>Read, label and send mail on behalf of a shared inbox.</p>
          <div style={{ width: "1px", flex: "1 1 0", minHeight: 0, flexShrink: 0, overflow: "hidden" }} />
          <svg style={{ width: "239px", height: "1px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible", marginBottom: "-1px" }} xmlns="http://www.w3.org/2000/svg" width="239" height="1" viewBox="0 0 239 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0L239 0" fill="none" stroke="#ced0d1" strokeWidth="1" strokeDasharray="2 2" strokeLinecap="butt"/></svg>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "124px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#555555", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>3 agents · 4 scopes</p>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "52px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#222222", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Manage</p>
              <ArrowUpRight size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#222222", display: "block" }} />
            </div>
          </div>
        </div>
        <div style={{ position: "absolute", left: "881px", top: "122px", width: "271px", height: "196px", borderRadius: "12px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #eff1f2, 0px 2px 4px 0px rgba(0, 0, 0, 0.02)", display: "flex", flexDirection: "column", padding: "17px 17px 17px 17px", gap: "14px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "43px", height: "43px", flexShrink: 0, borderRadius: "8px", background: "#f4f6f8", boxShadow: "inset 0 0 0 1px #eff1f2", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <svg width={22} height={22} viewBox="0 0 24 24" style={{ width: "22px", height: "22px", flexShrink: 0, color: "#1fa463", display: "block" }}><path d="M12.01 1.485c-2.082 0-3.754.02-3.743.047.01.02 1.708 3.001 3.774 6.62l3.76 6.574h3.76c2.081 0 3.753-.02 3.742-.047-.005-.02-1.708-3.001-3.775-6.62l-3.76-6.574zm-4.76 1.73a789.828 789.861 0 0 0-3.63 6.319L0 15.868l1.89 3.298 1.885 3.297 3.62-6.335 3.618-6.33-1.88-3.287C8.1 4.704 7.255 3.22 7.25 3.214zm2.259 12.653-.203.348c-.114.198-.96 1.672-1.88 3.287a423.93 423.948 0 0 1-1.698 2.97c-.01.026 3.24.042 7.222.042h7.244l1.796-3.157c.992-1.734 1.85-3.23 1.906-3.323l.104-.167h-7.249z" fill="currentColor" /></svg>
            </div>
            <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "8px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "94px", fontFamily: "'Geist'", fontSize: "16px", fontWeight: 400, color: "#222222", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "11px" }}>Google Drive</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "77px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#777777", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Productivity</p>
            </div>
            <div style={{ height: "24px", flexShrink: 0, borderRadius: "9999px", background: "#edfbf3", boxShadow: "inset 0 0 0 1px rgba(95, 211, 154, 0.2)", display: "flex", flexDirection: "row", padding: "11px 11px 11px 11px", gap: "10px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "70px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#073b22", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Connected</p>
            </div>
          </div>
          <p style={{ width: "239px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#666666", lineHeight: "1.4500000476837158" }}>Search and read files; writes need approval.</p>
          <div style={{ width: "1px", flex: "1 1 0", minHeight: 0, flexShrink: 0, overflow: "hidden" }} />
          <svg style={{ width: "239px", height: "1px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible", marginBottom: "-1px" }} xmlns="http://www.w3.org/2000/svg" width="239" height="1" viewBox="0 0 239 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0L239 0" fill="none" stroke="#ced0d1" strokeWidth="1" strokeDasharray="2 2" strokeLinecap="butt"/></svg>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "124px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#555555", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>2 agents · 3 scopes</p>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "52px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#222222", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Manage</p>
              <ArrowUpRight size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#222222", display: "block" }} />
            </div>
          </div>
        </div>
        <div style={{ position: "absolute", left: "20px", top: "334px", width: "271px", height: "196px", borderRadius: "12px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #eff1f2, 0px 2px 4px 0px rgba(0, 0, 0, 0.02)", display: "flex", flexDirection: "column", padding: "17px 17px 17px 17px", gap: "14px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "43px", height: "43px", flexShrink: 0, borderRadius: "8px", background: "#f4f6f8", boxShadow: "inset 0 0 0 1px #eff1f2", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <svg width={22} height={22} viewBox="0 0 24 24" style={{ width: "22px", height: "22px", flexShrink: 0, color: "#4a154b", display: "block" }}><path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" fill="currentColor" /></svg>
            </div>
            <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "8px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "42px", fontFamily: "'Geist'", fontSize: "16px", fontWeight: 400, color: "#222222", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "11px" }}>Slack</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "31px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#777777", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Chat</p>
            </div>
            <div style={{ height: "24px", flexShrink: 0, borderRadius: "9999px", background: "#edfbf3", boxShadow: "inset 0 0 0 1px rgba(95, 211, 154, 0.2)", display: "flex", flexDirection: "row", padding: "11px 11px 11px 11px", gap: "10px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "70px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#073b22", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Connected</p>
            </div>
          </div>
          <p style={{ width: "239px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#666666", lineHeight: "1.4500000476837158" }}>Post to channels, read threads, run slash commands.</p>
          <div style={{ width: "1px", flex: "1 1 0", minHeight: 0, flexShrink: 0, overflow: "hidden" }} />
          <svg style={{ width: "239px", height: "1px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible", marginBottom: "-1px" }} xmlns="http://www.w3.org/2000/svg" width="239" height="1" viewBox="0 0 239 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0L239 0" fill="none" stroke="#ced0d1" strokeWidth="1" strokeDasharray="2 2" strokeLinecap="butt"/></svg>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "124px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#555555", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>6 agents · 5 scopes</p>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "52px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#222222", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Manage</p>
              <ArrowUpRight size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#222222", display: "block" }} />
            </div>
          </div>
        </div>
        <div style={{ position: "absolute", left: "307px", top: "334px", width: "271px", height: "196px", borderRadius: "12px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #eff1f2, 0px 2px 4px 0px rgba(0, 0, 0, 0.02)", display: "flex", flexDirection: "column", padding: "17px 17px 17px 17px", gap: "14px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "43px", height: "43px", flexShrink: 0, borderRadius: "8px", background: "#f4f6f8", boxShadow: "inset 0 0 0 1px #eff1f2", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <Snow size={22} strokeWidth={1.64} style={{ width: "22px", height: "22px", flexShrink: 0, color: "#29b5e8", display: "block" }} />
            </div>
            <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "8px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "78px", fontFamily: "'Geist'", fontSize: "16px", fontWeight: 400, color: "#222222", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "11px" }}>Snowflake</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "31px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#777777", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Data</p>
            </div>
            <div style={{ height: "24px", flexShrink: 0, borderRadius: "9999px", background: "#edfbf3", boxShadow: "inset 0 0 0 1px rgba(95, 211, 154, 0.2)", display: "flex", flexDirection: "row", padding: "11px 11px 11px 11px", gap: "10px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "70px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#073b22", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Connected</p>
            </div>
          </div>
          <p style={{ width: "239px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#666666", lineHeight: "1.4500000476837158" }}>Warehouse queries with row limits and PII masking.</p>
          <div style={{ width: "1px", flex: "1 1 0", minHeight: 0, flexShrink: 0, overflow: "hidden" }} />
          <svg style={{ width: "239px", height: "1px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible", marginBottom: "-1px" }} xmlns="http://www.w3.org/2000/svg" width="239" height="1" viewBox="0 0 239 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0L239 0" fill="none" stroke="#ced0d1" strokeWidth="1" strokeDasharray="2 2" strokeLinecap="butt"/></svg>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "123px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#555555", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>3 agents · 7 scopes</p>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "52px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#222222", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Manage</p>
              <ArrowUpRight size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#222222", display: "block" }} />
            </div>
          </div>
        </div>
        <div style={{ position: "absolute", left: "594px", top: "334px", width: "271px", height: "196px", borderRadius: "12px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #eff1f2, 0px 2px 4px 0px rgba(0, 0, 0, 0.02)", display: "flex", flexDirection: "column", padding: "17px 17px 17px 17px", gap: "14px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "43px", height: "43px", flexShrink: 0, borderRadius: "8px", background: "#f4f6f8", boxShadow: "inset 0 0 0 1px #eff1f2", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <Database size={22} strokeWidth={1.64} style={{ width: "22px", height: "22px", flexShrink: 0, color: "#4285f4", display: "block" }} />
            </div>
            <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "8px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "68px", fontFamily: "'Geist'", fontSize: "16px", fontWeight: 400, color: "#222222", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "11px" }}>BigQuery</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "31px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#777777", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Data</p>
            </div>
            <div style={{ height: "24px", flexShrink: 0, borderRadius: "9999px", background: "#fffaeb", boxShadow: "inset 0 0 0 1px rgba(255, 206, 125, 0.2)", display: "flex", flexDirection: "row", padding: "11px 11px 11px 11px", gap: "10px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "52px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#472c09", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Re-auth</p>
            </div>
          </div>
          <p style={{ width: "239px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#666666", lineHeight: "1.4500000476837158" }}>Datasets in EU and US regions with residency checks.</p>
          <div style={{ width: "1px", flex: "1 1 0", minHeight: 0, flexShrink: 0, overflow: "hidden" }} />
          <svg style={{ width: "239px", height: "1px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible", marginBottom: "-1px" }} xmlns="http://www.w3.org/2000/svg" width="239" height="1" viewBox="0 0 239 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0L239 0" fill="none" stroke="#ced0d1" strokeWidth="1" strokeDasharray="2 2" strokeLinecap="butt"/></svg>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "126px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#472c09", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Key expired 2 h ago</p>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "69px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#222222", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Reconnect</p>
              <ArrowUpRight size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#222222", display: "block" }} />
            </div>
          </div>
        </div>
        <div style={{ position: "absolute", left: "881px", top: "334px", width: "271px", height: "196px", borderRadius: "12px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #eff1f2, 0px 2px 4px 0px rgba(0, 0, 0, 0.02)", display: "flex", flexDirection: "column", padding: "17px 17px 17px 17px", gap: "14px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "43px", height: "43px", flexShrink: 0, borderRadius: "8px", background: "#f4f6f8", boxShadow: "inset 0 0 0 1px #eff1f2", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <svg width={22} height={22} viewBox="0 0 24 24" style={{ width: "22px", height: "22px", flexShrink: 0, color: "#635bff", display: "block" }}><path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.594-7.305h.003z" fill="currentColor" /></svg>
            </div>
            <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "8px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "45px", fontFamily: "'Geist'", fontSize: "16px", fontWeight: 400, color: "#222222", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "11px" }}>Stripe</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "64px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#777777", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Payments</p>
            </div>
            <div style={{ height: "24px", flexShrink: 0, borderRadius: "9999px", background: "#edfbf3", boxShadow: "inset 0 0 0 1px rgba(95, 211, 154, 0.2)", display: "flex", flexDirection: "row", padding: "11px 11px 11px 11px", gap: "10px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "70px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#073b22", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Connected</p>
            </div>
          </div>
          <p style={{ width: "239px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#666666", lineHeight: "1.4500000476837158" }}>Restricted keys for reconciliation and refunds.</p>
          <div style={{ width: "1px", flex: "1 1 0", minHeight: 0, flexShrink: 0, overflow: "hidden" }} />
          <svg style={{ width: "239px", height: "1px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible", marginBottom: "-1px" }} xmlns="http://www.w3.org/2000/svg" width="239" height="1" viewBox="0 0 239 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0L239 0" fill="none" stroke="#ced0d1" strokeWidth="1" strokeDasharray="2 2" strokeLinecap="butt"/></svg>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "114px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#555555", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>1 agent · 2 scopes</p>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "52px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#222222", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Manage</p>
              <ArrowUpRight size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#222222", display: "block" }} />
            </div>
          </div>
        </div>
        <div style={{ position: "absolute", left: "20px", top: "546px", width: "271px", height: "196px", borderRadius: "12px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #eff1f2, 0px 2px 4px 0px rgba(0, 0, 0, 0.02)", display: "flex", flexDirection: "column", padding: "17px 17px 17px 17px", gap: "14px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "43px", height: "43px", flexShrink: 0, borderRadius: "8px", background: "#f4f6f8", boxShadow: "inset 0 0 0 1px #eff1f2", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <svg width={22} height={22} viewBox="0 0 24 24" style={{ width: "22px", height: "22px", flexShrink: 0, color: "#111111", display: "block" }}><path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z" fill="currentColor" /></svg>
            </div>
            <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "8px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "49px", fontFamily: "'Geist'", fontSize: "16px", fontWeight: 400, color: "#222222", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "11px" }}>Notion</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "77px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#777777", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Productivity</p>
            </div>
          </div>
          <p style={{ width: "239px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#666666", lineHeight: "1.4500000476837158" }}>Pages and databases as agent knowledge.</p>
          <div style={{ width: "1px", flex: "1 1 0", minHeight: 0, flexShrink: 0, overflow: "hidden" }} />
          <svg style={{ width: "239px", height: "1px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible", marginBottom: "-1px" }} xmlns="http://www.w3.org/2000/svg" width="239" height="1" viewBox="0 0 239 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0L239 0" fill="none" stroke="#ced0d1" strokeWidth="1" strokeDasharray="2 2" strokeLinecap="butt"/></svg>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "124px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#555555", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Used by 2.1k teams</p>
            <div style={{ height: "36px", flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e7e9eb, 0px 2px 4px 0px rgba(0, 0, 0, 0.02)", display: "flex", flexDirection: "row", padding: "1px 15px 1px 13px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <Outlet size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#222222", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "54px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#222222", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Connect</p>
            </div>
          </div>
        </div>
        <div style={{ position: "absolute", left: "307px", top: "546px", width: "271px", height: "196px", borderRadius: "12px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #eff1f2, 0px 2px 4px 0px rgba(0, 0, 0, 0.02)", display: "flex", flexDirection: "column", padding: "17px 17px 17px 17px", gap: "14px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "43px", height: "43px", flexShrink: 0, borderRadius: "8px", background: "#f4f6f8", boxShadow: "inset 0 0 0 1px #eff1f2", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <svg width={22} height={22} viewBox="0 0 24 24" style={{ width: "22px", height: "22px", flexShrink: 0, color: "#fc6d26", display: "block" }}><path d="m23.6004 9.5927-.0337-.0862L20.3.9814a.851.851 0 0 0-.3362-.405.8748.8748 0 0 0-.9997.0539.8748.8748 0 0 0-.29.4399l-2.2055 6.748H7.5375l-2.2057-6.748a.8573.8573 0 0 0-.29-.4412.8748.8748 0 0 0-.9997-.0537.8585.8585 0 0 0-.3362.4049L.4332 9.5015l-.0325.0862a6.0657 6.0657 0 0 0 2.0119 7.0105l.0113.0087.03.0213 4.976 3.7264 2.462 1.8633 1.4995 1.1321a1.0085 1.0085 0 0 0 1.2197 0l1.4995-1.1321 2.4619-1.8633 5.006-3.7489.0125-.01a6.0682 6.0682 0 0 0 2.0094-7.003z" fill="currentColor" /></svg>
            </div>
            <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "8px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "49px", fontFamily: "'Geist'", fontSize: "16px", fontWeight: 400, color: "#222222", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "11px" }}>GitLab</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "34px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#777777", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Code</p>
            </div>
          </div>
          <p style={{ width: "239px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#666666", lineHeight: "1.4500000476837158" }}>Merge requests and CI pipelines for self-hosted code.</p>
          <div style={{ width: "1px", flex: "1 1 0", minHeight: 0, flexShrink: 0, overflow: "hidden" }} />
          <svg style={{ width: "239px", height: "1px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible", marginBottom: "-1px" }} xmlns="http://www.w3.org/2000/svg" width="239" height="1" viewBox="0 0 239 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0L239 0" fill="none" stroke="#ced0d1" strokeWidth="1" strokeDasharray="2 2" strokeLinecap="butt"/></svg>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "126px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#555555", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Used by 860 teams</p>
            <div style={{ height: "36px", flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e7e9eb, 0px 2px 4px 0px rgba(0, 0, 0, 0.02)", display: "flex", flexDirection: "row", padding: "1px 15px 1px 13px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <Outlet size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#222222", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "54px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#222222", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Connect</p>
            </div>
          </div>
        </div>
        <div style={{ position: "absolute", left: "594px", top: "546px", width: "271px", height: "196px", borderRadius: "12px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #eff1f2, 0px 2px 4px 0px rgba(0, 0, 0, 0.02)", display: "flex", flexDirection: "column", padding: "17px 17px 17px 17px", gap: "14px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "43px", height: "43px", flexShrink: 0, borderRadius: "8px", background: "#f4f6f8", boxShadow: "inset 0 0 0 1px #eff1f2", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <svg width={22} height={22} viewBox="0 0 24 24" style={{ width: "22px", height: "22px", flexShrink: 0, color: "#0061ff", display: "block" }}><path d="M6 1.807L0 5.629l6 3.822 6.001-3.822L6 1.807zM18 1.807l-6 3.822 6 3.822 6-3.822-6-3.822zM0 13.274l6 3.822 6.001-3.822L6 9.452l-6 3.822zM18 9.452l-6 3.822 6 3.822 6-3.822-6-3.822zM6 18.371l6.001 3.822 6-3.822-6-3.822L6 18.371z" fill="currentColor" /></svg>
            </div>
            <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "8px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "63px", fontFamily: "'Geist'", fontSize: "16px", fontWeight: 400, color: "#222222", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "11px" }}>Dropbox</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "51px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#777777", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Storage</p>
            </div>
          </div>
          <p style={{ width: "239px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#666666", lineHeight: "1.4500000476837158" }}>Shared folders with read-only defaults.</p>
          <div style={{ width: "1px", flex: "1 1 0", minHeight: 0, flexShrink: 0, overflow: "hidden" }} />
          <svg style={{ width: "239px", height: "1px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible", marginBottom: "-1px" }} xmlns="http://www.w3.org/2000/svg" width="239" height="1" viewBox="0 0 239 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0L239 0" fill="none" stroke="#ced0d1" strokeWidth="1" strokeDasharray="2 2" strokeLinecap="butt"/></svg>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "126px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#555555", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Used by 540 teams</p>
            <div style={{ height: "36px", flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e7e9eb, 0px 2px 4px 0px rgba(0, 0, 0, 0.02)", display: "flex", flexDirection: "row", padding: "1px 15px 1px 13px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <Outlet size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#222222", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "54px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#222222", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Connect</p>
            </div>
          </div>
        </div>
        <div style={{ position: "absolute", left: "881px", top: "546px", width: "271px", height: "196px", borderRadius: "12px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #eff1f2, 0px 2px 4px 0px rgba(0, 0, 0, 0.02)", display: "flex", flexDirection: "column", padding: "17px 17px 17px 17px", gap: "14px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "43px", height: "43px", flexShrink: 0, borderRadius: "8px", background: "#f4f6f8", boxShadow: "inset 0 0 0 1px #eff1f2", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <svg width={22} height={22} viewBox="0 0 24 24" style={{ width: "22px", height: "22px", flexShrink: 0, color: "#a259ff", display: "block" }}><path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019 1.705 0 3.093-1.376 3.093-3.068v-2.97H8.148zm7.704 0h-.098c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h.098c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49zm-.097-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h.098c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-.098z" fill="currentColor" /></svg>
            </div>
            <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "8px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "46px", fontFamily: "'Geist'", fontSize: "16px", fontWeight: 400, color: "#222222", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "11px" }}>Figma</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "45px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#777777", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Design</p>
            </div>
          </div>
          <p style={{ width: "239px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#666666", lineHeight: "1.4500000476837158" }}>Read files and comments for design agents.</p>
          <div style={{ width: "1px", flex: "1 1 0", minHeight: 0, flexShrink: 0, overflow: "hidden" }} />
          <svg style={{ width: "239px", height: "1px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible", marginBottom: "-1px" }} xmlns="http://www.w3.org/2000/svg" width="239" height="1" viewBox="0 0 239 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0L239 0" fill="none" stroke="#ced0d1" strokeWidth="1" strokeDasharray="2 2" strokeLinecap="butt"/></svg>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "125px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#555555", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Used by 1.3k teams</p>
            <div style={{ height: "36px", flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e7e9eb, 0px 2px 4px 0px rgba(0, 0, 0, 0.02)", display: "flex", flexDirection: "row", padding: "1px 15px 1px 13px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <Outlet size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#222222", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "54px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#222222", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Connect</p>
            </div>
          </div>
        </div>
        <div style={{ position: "absolute", left: "20px", top: "766px", width: "1133px", height: "99px", borderRadius: "12px", background: "#fafafa", boxShadow: "inset 0 0 0 1px #f2f4f5", display: "flex", flexDirection: "row", padding: "19px 21px 19px 21px", gap: "16px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "43px", height: "43px", flexShrink: 0, borderRadius: "8px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #eff1f2", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <Api size={22} strokeWidth={1.64} style={{ width: "22px", height: "22px", flexShrink: 0, color: "#333333", display: "block" }} />
          </div>
          <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "10px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "151px", fontFamily: "'Geist'", fontSize: "16px", fontWeight: 400, color: "#222222", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "11px" }}>Bring your own tools</p>
            <p style={{ width: "600px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#666666", lineHeight: "1.4500000476837158" }}>Wrap any internal API with the Auton SDK — it gets the same scopes, short-lived credentials, policies and audit trail.</p>
          </div>
          <div style={{ height: "36px", flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e7e9eb, 0px 2px 4px 0px rgba(0, 0, 0, 0.02)", display: "flex", flexDirection: "row", padding: "1px 15px 1px 13px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <Book size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#222222", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "93px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#222222", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Read the docs</p>
          </div>
          <div style={{ height: "36px", flexShrink: 0, borderRadius: "10px", background: "#328ff9", boxShadow: "inset 0px 4px 7px 0px rgba(255, 255, 255, 0.5)", display: "flex", flexDirection: "row", padding: "0px 14px 0px 12px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <Code size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#ffffff", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "167px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#ffffff", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Create custom integration</p>
          </div>
        </div>
      </div>
      <div style={{ position: "absolute", left: "0px", top: "0px", width: "243px", height: "1080px", background: "#fafafa", boxShadow: "inset -1px 0 0 0 #e2e4e5", overflow: "hidden" }}>
        <div style={{ position: "absolute", left: "-19px", top: "608px", width: "280px", height: "247px" }}>
          <div style={{ position: "absolute", left: "0px", top: "0px", width: "280px", height: "247px", background: "url('https://ingotui.com/library-img/ae303b6c3e6fae384f56814a669c2459ff0fac06.png') -72.72px -87.68px / 415.55px 419.93px no-repeat" }} />
          <div style={{ position: "absolute", left: "52px", top: "33px", width: "173px", height: "208px", borderRadius: "12px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #eff1f2", overflow: "hidden" }}>
            <div style={{ position: "absolute", left: "12px", top: "16px", width: "148px", height: "43px", display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "43px", height: "43px", flexShrink: 0, borderRadius: "8px", background: "#f4f6f8", boxShadow: "inset 0 0 0 1px #eff1f2", overflow: "hidden", position: "relative" }}>
                <ShieldKeyhole size={24} style={{ position: "absolute", left: "10px", top: "10px", width: "24px", height: "24px", color: "#333333", display: "block", flexShrink: 0 }} />
              </div>
              <div style={{ width: "97px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "12px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ alignSelf: "stretch", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "16px", fontWeight: 400, color: "#222222", lineHeight: "1.399999976158142", letterSpacing: "-0.02em", textBox: "trim-both cap alphabetic", height: "11px" }}>deploy-agent</p>
                <div style={{ height: "20px", flexShrink: 0, borderRadius: "12px", background: "#f4f6f8", boxShadow: "inset 0 0 0 1px #eff1f2", display: "flex", flexDirection: "row", padding: "9px 9px 9px 9px", gap: "10px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "50px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 400, color: "#444444", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "7px" }}>Production</p>
                </div>
              </div>
            </div>
            <svg style={{ position: "absolute", left: "12px", top: "75px", width: "149px", height: "1px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="149" height="1" viewBox="0 0 149 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0L149 0" fill="none" stroke="#ced0d1" strokeWidth="1" strokeDasharray="2 2" strokeLinecap="round"/></svg>
            <div style={{ position: "absolute", left: "12px", top: "86px", width: "149px", height: "32px", borderRadius: "8px", background: "#f4f6f8", boxShadow: "inset 0 0 0 1px #eff1f2", overflow: "hidden" }}>
              <div style={{ position: "absolute", left: "8px", top: "6px", width: "112px", height: "21px", display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "21px", height: "21px", flexShrink: 0, background: "url('https://ingotui.com/library-img/9606064a2714f05904aa80f7a34774ee2491a3b4.png') center / cover no-repeat" }} />
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "38px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#444444", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "9px" }}>GitHub</p>
                  <PlayerRecordSolid size={8} style={{ width: "8px", height: "8px", flexShrink: 0, color: "#333333", display: "block" }} />
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "29px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#555555", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "9px" }}>Read</p>
                </div>
              </div>
            </div>
            <div style={{ position: "absolute", left: "12px", top: "126px", width: "149px", height: "32px", borderRadius: "8px", background: "#f4f6f8", boxShadow: "inset 0 0 0 1px #eff1f2", overflow: "hidden" }}>
              <div style={{ position: "absolute", left: "8px", top: "8px", width: "115px", height: "16px", display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "26px", height: "16px", flexShrink: 0, background: "url('https://ingotui.com/library-img/dfd4513aa7260aa3aa00ae30cea8f90091e13079.png') -1.22px 0px / 28.44px 16px no-repeat" }} />
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "26px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#444444", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "9px" }}>AWS</p>
                  <PlayerRecordSolid size={8} style={{ width: "8px", height: "8px", flexShrink: 0, color: "#333333", display: "block" }} />
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "39px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#555555", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "9px" }}>Deploy</p>
                </div>
              </div>
            </div>
            <div style={{ position: "absolute", left: "12px", top: "166px", width: "149px", height: "32px", borderRadius: "8px", background: "#f4f6f8", boxShadow: "inset 0 0 0 1px #f0f2f1", overflow: "hidden" }}>
              <div style={{ position: "absolute", left: "8px", top: "6px", width: "112px", height: "20px", display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <CircleCheckSolid size={20} style={{ width: "20px", height: "20px", flexShrink: 0, color: "#07bc6d", display: "block" }} />
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "84px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#444444", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "9px" }}>Scoped access</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ position: "absolute", left: "16px", top: "18px", width: "208px", height: "22px", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "-8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "16px", height: "16px", flexShrink: 0, borderRadius: "13332px", boxShadow: "inset 0 0 0 1.33px #212121", overflow: "hidden" }} />
              <div style={{ width: "16px", height: "16px", flexShrink: 0, borderRadius: "13332px", background: "#212121", boxShadow: "inset 0 0 0 1.33px #212121", overflow: "hidden", marginLeft: "-8px" }} />
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "50px", fontFamily: "'Geist'", fontSize: "20px", fontWeight: 400, color: "#444444", lineHeight: "1.100000023841858", letterSpacing: "-0.06em" }}>Auton</p>
          </div>
          <svg style={{ width: "20px", height: "20px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" overflow="visible"><path transform="matrix(-1 0 0 1 15 5.833)" d="M-0.53033 7.803 C-0.823223 8.0959 -0.823223 8.57077 -0.53033 8.86366 C-0.237437 9.15656 0.237437 9.15656 0.53033 8.86366 L0 8.33333 L-0.53033 7.803 Z M4.16667 4.16667 L4.697 4.697 C4.98989 4.4041 4.98989 3.92923 4.697 3.63634 L4.16667 4.16667 Z M0.53033 -0.53033 C0.237437 -0.823223 -0.237437 -0.823223 -0.53033 -0.53033 C-0.823223 -0.237437 -0.823223 0.237437 -0.53033 0.53033 L0 0 L0.53033 -0.53033 Z M0 8.33333 L0.53033 8.86366 L4.697 4.697 L4.16667 4.16667 L3.63634 3.63634 L-0.53033 7.803 L0 8.33333 Z M4.16667 4.16667 L4.697 3.63634 L0.53033 -0.53033 L0 0 L-0.53033 0.53033 L3.63634 4.697 L4.16667 4.16667 Z" fill="#444444"/><path transform="matrix(-1 0 0 1 9.167 5.833)" d="M-0.53033 7.803 C-0.823223 8.0959 -0.823223 8.57077 -0.53033 8.86366 C-0.237437 9.15656 0.237437 9.15656 0.53033 8.86366 L0 8.33333 L-0.53033 7.803 Z M4.16667 4.16667 L4.697 4.697 C4.98989 4.4041 4.98989 3.92923 4.697 3.63634 L4.16667 4.16667 Z M0.53033 -0.53033 C0.237437 -0.823223 -0.237437 -0.823223 -0.53033 -0.53033 C-0.823223 -0.237437 -0.823223 0.237437 -0.53033 0.53033 L0 0 L0.53033 -0.53033 Z M0 8.33333 L0.53033 8.86366 L4.697 4.697 L4.16667 4.16667 L3.63634 3.63634 L-0.53033 7.803 L0 8.33333 Z M4.16667 4.16667 L4.697 3.63634 L0.53033 -0.53033 L0 0 L-0.53033 0.53033 L3.63634 4.697 L4.16667 4.16667 Z" fill="#444444"/></svg>
        </div>
        <div style={{ position: "absolute", left: "16px", top: "82px", width: "207px", height: "378px", display: "flex", flexDirection: "column", gap: "24px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "12px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ alignSelf: "stretch", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#777777", lineHeight: "1.100000023841858", letterSpacing: "0.13em", textTransform: "uppercase", textBox: "trim-both cap alphabetic", height: "9px" }}>WORKSPACE</p>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "207px", height: "32px", flexShrink: 0, borderRadius: "8.25px", overflow: "hidden", display: "flex", flexDirection: "row", padding: "0px 0px 0px 8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ width: "16px", height: "16px", flexShrink: 0, position: "relative" }}>
                    <LayoutDashboard size={16} strokeWidth={2.25} style={{ position: "absolute", left: "0px", top: "0px", width: "16px", height: "16px", color: "#555555", display: "block", flexShrink: 0 }} />
                  </div>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "60px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#555555", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Overview</p>
                </div>
              </div>
              <div style={{ alignSelf: "stretch", height: "36px", flexShrink: 0, borderRadius: "8px", overflow: "hidden", display: "flex", flexDirection: "row", padding: "0px 0px 0px 8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ width: "16px", height: "16px", flexShrink: 0, position: "relative" }}>
                    <UserShield size={16} strokeWidth={1.95} style={{ position: "absolute", left: "0px", top: "0px", width: "16px", height: "16px", color: "#555555", display: "block", flexShrink: 0 }} />
                  </div>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "46px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#555555", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Agents</p>
                </div>
              </div>
              <div style={{ alignSelf: "stretch", height: "36px", flexShrink: 0, borderRadius: "8px", overflow: "hidden", display: "flex", flexDirection: "row", padding: "0px 0px 0px 8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ width: "16px", height: "16px", flexShrink: 0, position: "relative" }}>
                    <Shield size={16} strokeWidth={1.95} style={{ position: "absolute", left: "0px", top: "0px", width: "16px", height: "16px", color: "#555555", display: "block", flexShrink: 0 }} />
                  </div>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "99px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#555555", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Access policies</p>
                </div>
              </div>
              <div style={{ alignSelf: "stretch", height: "36px", flexShrink: 0, borderRadius: "8px", overflow: "hidden", display: "flex", flexDirection: "row", padding: "0px 0px 0px 8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ width: "16px", height: "16px", flexShrink: 0, position: "relative" }}>
                    <Key size={16} strokeWidth={1.95} style={{ position: "absolute", left: "0px", top: "0px", width: "16px", height: "16px", color: "#555555", display: "block", flexShrink: 0 }} />
                  </div>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "73px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#555555", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Credentials</p>
                </div>
              </div>
              <div style={{ alignSelf: "stretch", height: "36px", flexShrink: 0, borderRadius: "8px", overflow: "hidden", display: "flex", flexDirection: "row", padding: "0px 0px 0px 8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box", position: "relative" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ width: "16px", height: "16px", flexShrink: 0, position: "relative" }}>
                    <Checklist size={16} strokeWidth={1.95} style={{ position: "absolute", left: "0px", top: "0px", width: "16px", height: "16px", color: "#555555", display: "block", flexShrink: 0 }} />
                  </div>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "64px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#555555", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Approvals</p>
                </div>
                <div style={{ position: "absolute", left: "96px", top: "8px", width: "20px", height: "20px", borderRadius: "10px", background: "#eef0f2", boxShadow: "inset 0 0 0 1px #ffffff", overflow: "hidden", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "8px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#555555" }}>3</p>
                </div>
              </div>
              <div style={{ alignSelf: "stretch", height: "36px", flexShrink: 0, borderRadius: "8px", overflow: "hidden", display: "flex", flexDirection: "row", padding: "0px 0px 0px 8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ width: "16px", height: "16px", flexShrink: 0, position: "relative" }}>
                    <ClipboardList size={16} strokeWidth={1.95} style={{ position: "absolute", left: "0px", top: "0px", width: "16px", height: "16px", color: "#555555", display: "block", flexShrink: 0 }} />
                  </div>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "57px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#555555", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Audit log</p>
                </div>
              </div>
            </div>
          </div>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "8px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ alignSelf: "stretch", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#777777", lineHeight: "1.100000023841858", letterSpacing: "0.13em", textTransform: "uppercase", textBox: "trim-both cap alphabetic", height: "9px" }}>MANAGE</p>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "207px", flexShrink: 0, borderRadius: "8.25px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e7e9eb", overflow: "hidden", display: "flex", flexDirection: "row", padding: "8px 0px 8px 8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ width: "16px", height: "16px", flexShrink: 0, position: "relative" }}>
                    <OutletSolid size={16} strokeWidth={2.25} style={{ position: "absolute", left: "0px", top: "0px", width: "16px", height: "16px", color: "#111111", display: "block", flexShrink: 0 }} />
                  </div>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "77px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#111111", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Integrations</p>
                </div>
              </div>
              <div style={{ alignSelf: "stretch", height: "36px", flexShrink: 0, borderRadius: "8px", overflow: "hidden", display: "flex", flexDirection: "row", padding: "0px 0px 0px 8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ width: "16px", height: "16px", flexShrink: 0, position: "relative" }}>
                    <Users size={16} strokeWidth={1.95} style={{ position: "absolute", left: "0px", top: "0px", width: "16px", height: "16px", color: "#555555", display: "block", flexShrink: 0 }} />
                  </div>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "35px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#555555", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Team</p>
                </div>
              </div>
              <div style={{ alignSelf: "stretch", height: "36px", flexShrink: 0, borderRadius: "8px", overflow: "hidden", display: "flex", flexDirection: "row", padding: "0px 0px 0px 8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ width: "16px", height: "16px", flexShrink: 0, position: "relative" }}>
                    <Settings size={16} strokeWidth={1.95} style={{ position: "absolute", left: "0px", top: "0px", width: "16px", height: "16px", color: "#555555", display: "block", flexShrink: 0 }} />
                  </div>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "54px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#555555", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Settings</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <svg style={{ position: "absolute", left: "0px", top: "60px", width: "242px", height: "1px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="242" height="1" viewBox="0 0 242 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 -0.5 L0 0 L242 0 L242 -0.5 L242 -1 L0 -1 L0 -0.5 Z" fill="#e7e9eb"/></svg>
        <div style={{ position: "absolute", left: "16px", top: "856px", width: "207px", height: "142px", borderRadius: "12px", background: "radial-gradient(rgba(184, 235, 255, 0.72) 0%, rgba(194, 224, 255, 0.2) 68%, rgba(255, 255, 255, 0) 100%), radial-gradient(rgba(77, 235, 201, 0.68) 0%, rgba(166, 242, 237, 0.22) 62%, rgba(255, 255, 255, 0) 100%), linear-gradient(98.6deg, #8fe8e0 -5.1%, #d6f5fa 40.1%, #87b2fa 102.7%)", boxShadow: "inset 0 0 0 1px #ffffff, 0px 0px 20px 4px rgba(0, 0, 0, 0.01)", overflow: "hidden" }}>
          <p style={{ position: "absolute", left: "16px", top: "23px", width: "172px", margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "16px", fontWeight: 400, color: "#000000", lineHeight: "1.399999976158142", letterSpacing: "-0.02em", textBox: "trim-both cap alphabetic", height: "33px" }}>Upgrade to Pro to get the Latest Scopara</p>
          <div style={{ position: "absolute", left: "16px", top: "86px", width: "175px", height: "40px", borderRadius: "8px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ffffff", overflow: "hidden" }}>
            <div style={{ position: "absolute", left: "29.5px", top: "10px", width: "117px", height: "20px", display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <BoltSolid size={20} style={{ width: "20px", height: "20px", flexShrink: 0, color: "#328ff9", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "93px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#222222", lineHeight: "1.25", letterSpacing: "-0.02em", textBox: "trim-both cap alphabetic", height: "10px" }}>Upgrade to Pro</p>
            </div>
          </div>
        </div>
      </div>
      <div style={{ position: "absolute", left: "243px", top: "0px", width: "1197px", height: "60px", boxShadow: "inset 0 -1px 0 0 #e2e4e5", overflow: "hidden" }}>
        <p style={{ position: "absolute", left: "16px", top: "24px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "99px", fontFamily: "'Geist'", fontSize: "18px", fontWeight: 400, color: "#111111", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "13px" }}>Integrations</p>
        <div style={{ position: "absolute", left: "845px", top: "12px", width: "328px", height: "36px", display: "flex", flexDirection: "row", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "163px", height: "36px", flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e7e9eb, 0px 2px 4px 0px rgba(0, 0, 0, 0.02)", overflow: "hidden", position: "relative" }}>
            <div style={{ position: "absolute", left: "12px", top: "10px", width: "70px", height: "16px", display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <Search size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#222222", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "46px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#555555", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Search</p>
            </div>
            <div style={{ position: "absolute", left: "349px", top: "8px", width: "42px", height: "20px", borderRadius: "6px", background: "#fafafa", boxShadow: "inset 0 0 0 1px #d7d9db", overflow: "hidden", display: "flex", flexDirection: "row", padding: "1px 5px 1px 5px", gap: "1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <Command size={12} strokeWidth={3} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#555555", display: "block" }} />
              <Plus size={10} strokeWidth={2.4} style={{ width: "10px", height: "10px", flexShrink: 0, color: "#555555", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "8px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#555555", textBox: "trim-both cap alphabetic", height: "9px" }}>K</p>
            </div>
            <div style={{ position: "absolute", left: "113px", top: "8px", width: "42px", height: "20px", borderRadius: "6px", background: "#fcfeff", boxShadow: "inset 0 0 0 1px #fafafa", overflow: "hidden", display: "flex", flexDirection: "row", padding: "1px 5px 1px 5px", gap: "1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <Command size={12} strokeWidth={3} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#888888", display: "block" }} />
              <Plus size={10} strokeWidth={2.4} style={{ width: "10px", height: "10px", flexShrink: 0, color: "#888888", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "8px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#888888", textBox: "trim-both cap alphabetic", height: "9px" }}>K</p>
            </div>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "65px", height: "36px", flexShrink: 0, borderRadius: "9999px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e7e9eb", overflow: "hidden", position: "relative" }}>
              <div style={{ position: "absolute", left: "33px", top: "4px", width: "28px", height: "28px", borderRadius: "9999px", background: "url('https://ingotui.com/library-img/e0ad708d7aafaf5b9391ffa4508aacc5f965e437.png') center / cover no-repeat", boxShadow: "inset 0 0 0 1px #e7e9eb", overflow: "hidden" }} />
              <Menu2 size={18} strokeWidth={2} style={{ position: "absolute", left: "10px", top: "9px", width: "18px", height: "18px", color: "#222222", display: "block", flexShrink: 0 }} />
            </div>
            <div style={{ width: "36px", height: "36px", flexShrink: 0, borderRadius: "9999px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e7e9eb", overflow: "hidden", position: "relative" }}>
              <Bell size={16} strokeWidth={2.25} style={{ position: "absolute", left: "10px", top: "10px", width: "16px", height: "16px", color: "#222222", display: "block", flexShrink: 0 }} />
            </div>
            <div style={{ width: "36px", height: "36px", flexShrink: 0, borderRadius: "9999px", background: "#328ff9", boxShadow: "inset 0px 4px 7px 0px rgba(255, 255, 255, 0.5)", overflow: "hidden", position: "relative" }}>
              <Plus size={20} strokeWidth={1.8} style={{ position: "absolute", left: "8px", top: "8px", width: "20px", height: "20px", color: "#ffffff", display: "block", flexShrink: 0 }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
