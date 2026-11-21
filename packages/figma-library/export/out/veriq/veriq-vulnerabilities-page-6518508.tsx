// Vulnerabilities page (veriq, Templates) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist, Inter. Icons: Ingot Icons.
import type { SVGProps } from "react";

// Ingot Icons used here, inlined so this file needs no icon package.
function icon(body: string) {
  return function Icon({ size = 24, strokeWidth = 1.5, ...p }: { size?: number; strokeWidth?: number } & SVGProps<SVGSVGElement>) {
    const html = strokeWidth == 1.5 ? body : body.replace(/stroke-width="([\d.]+)"/g, (_, w) => `stroke-width="${(Number(w) * Number(strokeWidth)) / 1.5}"`);
    return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden {...p} dangerouslySetInnerHTML={{ __html: html }} />;
  };
}
const AdjustmentsHorizontal = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 6a2 2 0 1 0 4 0a2 2 0 1 0 -4 0\" /><path d=\"M4 6l8 0\" /><path d=\"M16 6l4 0\" /><path d=\"M6 12a2 2 0 1 0 4 0a2 2 0 1 0 -4 0\" /><path d=\"M4 12l2 0\" /><path d=\"M10 12l10 0\" /><path d=\"M15 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0\" /><path d=\"M4 18l11 0\" /><path d=\"M19 18l1 0\" /></g>");
const Bell = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M10 5a2 2 0 1 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6\" /><path d=\"M9 17v1a3 3 0 0 0 6 0v-1\" /></g>");
const Brain = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M15.5 13a3.5 3.5 0 0 0 -3.5 3.5v1a3.5 3.5 0 0 0 7 0v-1.8\" /><path d=\"M8.5 13a3.5 3.5 0 0 1 3.5 3.5v1a3.5 3.5 0 0 1 -7 0v-1.8\" /><path d=\"M17.5 16a3.5 3.5 0 0 0 0 -7h-.5\" /><path d=\"M19 9.3v-2.8a3.5 3.5 0 0 0 -7 0\" /><path d=\"M6.5 16a3.5 3.5 0 0 1 0 -7h.5\" /><path d=\"M5 9.3v-2.8a3.5 3.5 0 0 1 7 0v10\" /></g>");
const Bug = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M9 9v-1a3 3 0 0 1 6 0v1\" /><path d=\"M8 9h8a6 6 0 0 1 1 3v3a5 5 0 0 1 -10 0v-3a6 6 0 0 1 1 -3\" /><path d=\"M3 13l4 0\" /><path d=\"M17 13l4 0\" /><path d=\"M12 20l0 -6\" /><path d=\"M4 19l3.35 -2\" /><path d=\"M20 19l-3.35 -2\" /><path d=\"M4 7l3.75 2.4\" /><path d=\"M20 7l-3.75 2.4\" /></g>");
const Calendar = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12\" /><path d=\"M16 3v4\" /><path d=\"M8 3v4\" /><path d=\"M4 11h16\" /></g>");
const ChartLine = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 19l16 0\" /><path d=\"M4 15l4 -6l4 2l4 -5l4 4\" /></g>");
const ChevronDown = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M6 9l6 6l6 -6\" /></g>");
const ChevronRight = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M9 6l6 6l-6 6\" /></g>");
const Code = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M7 8l-4 4l4 4\" /><path d=\"M17 8l4 4l-4 4\" /><path d=\"M14 4l-4 16\" /></g>");
const Command = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M7 9a2 2 0 1 1 2 -2v10a2 2 0 1 1 -2 -2h10a2 2 0 1 1 -2 2v-10a2 2 0 1 1 2 2h-10\" /></g>");
const Download = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2\" /><path d=\"M7 11l5 5l5 -5\" /><path d=\"M12 4l0 12\" /></g>");
const Folders = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M9 3h3l2 2h5a2 2 0 0 1 2 2v7a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2\" /><path d=\"M17 16v2a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2h2\" /></g>");
const GitBranch = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M5 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0\" /><path d=\"M5 6a2 2 0 1 0 4 0a2 2 0 1 0 -4 0\" /><path d=\"M15 6a2 2 0 1 0 4 0a2 2 0 1 0 -4 0\" /><path d=\"M7 8l0 8\" /><path d=\"M9 18h6a2 2 0 0 0 2 -2v-5\" /><path d=\"M14 14l3 -3l3 3\" /></g>");
const Key = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M16.555 3.843l3.602 3.602a2.877 2.877 0 0 1 0 4.069l-2.643 2.643a2.877 2.877 0 0 1 -4.069 0l-.301 -.301l-6.558 6.558a2 2 0 0 1 -1.239 .578l-.175 .008h-1.172a1 1 0 0 1 -.993 -.883l-.007 -.117v-1.172a2 2 0 0 1 .467 -1.284l.119 -.13l.414 -.414h2v-2h2v-2l2.144 -2.144l-.301 -.301a2.877 2.877 0 0 1 0 -4.069l2.643 -2.643a2.877 2.877 0 0 1 4.069 0\" /><path d=\"M15 9h.01\" /></g>");
const LayoutDashboard = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M5 4h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1\" /><path d=\"M5 16h4a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1\" /><path d=\"M15 12h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1\" /><path d=\"M15 4h4a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1\" /></g>");
const Moon = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454l0 .008\" /></g>");
const Package = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 3l8 4.5l0 9l-8 4.5l-8 -4.5l0 -9l8 -4.5\" /><path d=\"M12 12l8 -4.5\" /><path d=\"M12 12l0 9\" /><path d=\"M12 12l-8 -4.5\" /><path d=\"M16 5.25l-8 4.5\" /></g>");
const Route = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 19a2 2 0 1 0 4 0a2 2 0 0 0 -4 0\" /><path d=\"M19 7a2 2 0 1 0 0 -4a2 2 0 0 0 0 4\" /><path d=\"M11 19h5.5a3.5 3.5 0 0 0 0 -7h-8a3.5 3.5 0 0 1 0 -7h4.5\" /></g>");
const Scan = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M5 12h14\" /><path d=\"M3 7v-2a2 2 0 0 1 2 -2h2\" /><path d=\"M3 17v2a2 2 0 0 0 2 2h2\" /><path d=\"M17 3h2a2 2 0 0 1 2 2v2\" /><path d=\"M17 21h2a2 2 0 0 0 2 -2v-2\" /></g>");
const Search = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 10a7 7 0 1 0 14 0a7 7 0 1 0 -14 0\" /><path d=\"M21 21l-6 -6\" /></g>");
const Settings = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065\" /><path d=\"M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0\" /></g>");
const SortDescending = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 6l9 0\" /><path d=\"M4 12l7 0\" /><path d=\"M4 18l7 0\" /><path d=\"M15 15l3 3l3 -3\" /><path d=\"M18 6l0 12\" /></g>");
const Sun = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M8 12a4 4 0 1 0 8 0a4 4 0 1 0 -8 0\" /><path d=\"M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7\" /></g>");
const Wrench = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z\" /></g>");

export function VulnerabilitiesPage() {
  return (
    <div style={{ width: "1440px", height: "1039px", background: "#f2f2f2", overflow: "hidden", position: "relative" }}>
      <div style={{ position: "absolute", left: "20px", top: "111px", width: "30px", height: "30px" }}>
        <div style={{ position: "absolute", left: "0px", top: "0px", width: "30px", height: "30px", borderRadius: "5.25px", background: "#ffffff", boxShadow: "0px 0.44px 0.44px 0px rgba(42, 42, 42, 0.08), 0px 1.31px 1.75px -0.44px rgba(42, 42, 42, 0.14), inset 0px -1.31px 1.31px 0px rgba(255, 255, 255, 0.1), inset 0px 1.31px 1.31px 0px rgba(255, 255, 255, 0.1), inset 0px 0px 0px 0.44px rgba(255, 255, 255, 0.2)", overflow: "hidden" }}>
          <div style={{ position: "absolute", left: "0px", top: "0px", width: "57px", height: "57px", background: "linear-gradient(177.6deg, rgba(255, 255, 255, 0) 2%, rgba(255, 255, 255, 0.12) 98.2%)", overflow: "hidden" }} />
        </div>
      </div>
      <div style={{ position: "absolute", left: "0px", top: "0px", width: "1440px", height: "1039px", overflow: "hidden" }}>
        <svg style={{ position: "absolute", left: "17.8px", top: "26px", width: "26.4px", height: "22px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="26.4" height="22" viewBox="0 0 26.4 22" fill="none" overflow="visible"><path transform="matrix(0 1 -1 0 24.2 0)" d="M11 0 C4.92486 0 0 4.92489 0 11 C0 17.0752 4.92486 22.0001 11 22.0001 C16.4506 22.0001 20.9752 18.0359 21.848 12.8334 L21.769 12.8334 C20.955 15.9963 18.0838 18.3334 14.6667 18.3334 C10.6166 18.3334 7.33336 15.0502 7.33336 11 C7.33336 6.94993 10.6166 3.66668 14.6667 3.66668 C18.0838 3.66668 20.955 6.00377 21.769 9.1667 L21.848 9.1667 C20.9752 3.96421 16.4506 0 11 0 Z" fill="#000000" opacity="0.3"/><path transform="matrix(0 1 -1 0 24.2 0)" d="M0 11 C0 4.92489 4.92489 0 11 0 C16.4506 0 20.9752 3.96421 21.848 9.1667 L14.4357 9.1667 C13.6216 6.00377 10.7504 3.66668 7.33336 3.66668 C3.28326 3.66668 0 6.94994 0 11 Z" fill="#000000"/><path transform="matrix(0 1 1 0 2.2 0)" d="M0 11 C0 4.92489 4.92489 0 11 0 C16.4506 0 20.9752 3.96421 21.848 9.1667 L14.4357 9.1667 C13.6216 6.00377 10.7504 3.66668 7.33336 3.66668 C3.28326 3.66668 0 6.94994 0 11 Z" fill="#000000"/></svg>
        <div style={{ position: "absolute", left: "27px", top: "78px", width: "15px", height: "271px" }}>
          <ChartLine size={14} strokeWidth={2.57} style={{ position: "absolute", left: "1px", top: "221px", width: "14px", height: "14px", color: "#545359", display: "block", flexShrink: 0 }} />
          <Folders size={14} strokeWidth={2.57} style={{ position: "absolute", left: "1px", top: "185px", width: "14px", height: "14px", color: "#545359", display: "block", flexShrink: 0 }} />
          <Wrench size={14} strokeWidth={2.57} style={{ position: "absolute", left: "1px", top: "149px", width: "14px", height: "14px", color: "#545359", display: "block", flexShrink: 0 }} />
          <Brain size={14} strokeWidth={2.57} style={{ position: "absolute", left: "1px", top: "113px", width: "14px", height: "14px", color: "#545359", display: "block", flexShrink: 0 }} />
          <Settings size={14} strokeWidth={2.57} style={{ position: "absolute", left: "1px", top: "257px", width: "14px", height: "14px", color: "#545359", display: "block", flexShrink: 0 }} />
          <Route size={14} strokeWidth={2.57} style={{ position: "absolute", left: "1px", top: "77px", width: "14px", height: "14px", color: "#545359", display: "block", flexShrink: 0 }} />
          <Bug size={14} strokeWidth={2.57} style={{ position: "absolute", left: "1px", top: "41px", width: "14px", height: "14px", color: "#000000", display: "block", flexShrink: 0 }} />
          <LayoutDashboard size={14} strokeWidth={2.57} style={{ position: "absolute", left: "0px", top: "0px", width: "14px", height: "14px", color: "#545359", display: "block", flexShrink: 0 }} />
        </div>
        <div style={{ position: "absolute", left: "70px", top: "20px", width: "1350px", height: "999px", borderRadius: "14px", background: "#fafafa", boxShadow: "0px 0px 1px 0px rgba(0, 0, 0, 0.34)", overflow: "hidden" }}>
          <div style={{ position: "absolute", left: "0px", top: "0px", width: "236px", height: "1060px", borderRadius: "14px", background: "#fafafa", overflow: "hidden" }}>
            <div style={{ position: "absolute", left: "12px", top: "12px", width: "212px", height: "16px", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "48px", fontFamily: "'Geist'", fontSize: "15px", fontWeight: 700, color: "#000000", lineHeight: "16px", letterSpacing: "0.02em" }}>VERIQ</p>
              <div style={{ position: "relative", flexShrink: 0, alignSelf: "flex-start", marginTop: "0px", width: "16px", height: "16px" }}>
                <ChevronRight size={16} strokeWidth={2.25} style={{ position: "absolute", left: "16px", top: "0px", width: "16px", height: "16px", transform: "rotate(90deg)", transformOrigin: "top left", color: "#b3b3b3", display: "block", flexShrink: 0 }} />
              </div>
            </div>
            <div style={{ position: "absolute", left: "12px", top: "48.77px", width: "212px", height: "588px", display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "212px", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ alignSelf: "stretch", height: "30px", flexShrink: 0, borderRadius: "10px", display: "flex", flexDirection: "column", padding: "6px 8px 6px 8px", gap: "10px", justifyContent: "center", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "62px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#545359", lineHeight: "20px" }}>Overview</p>
                  </div>
                </div>
              </div>
              <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "20px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "212px", height: "36px", flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "0px 1.4px 1px 0px rgba(0, 0, 0, 0.06), 0px 0px 1px 0px rgba(0, 0, 0, 0.25)", display: "flex", flexDirection: "row", padding: "10px 10px 10px 10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <div style={{ width: "163px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                      <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "91px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#000000", lineHeight: "20px" }}>Vulnerabilities</p>
                    </div>
                  </div>
                  <div style={{ width: "212px", height: "36px", flexShrink: 0, borderRadius: "10px", display: "flex", flexDirection: "row", padding: "10px 10px 10px 10px", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
                    <div style={{ width: "163px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                      <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                        <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "85px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#545359", lineHeight: "20px" }}>Attack Paths</p>
                      </div>
                    </div>
                    <div style={{ width: "32px", height: "22px", flexShrink: 0, borderRadius: "5px", background: "#ffffff", boxShadow: "0px 0px 1px 0px rgba(0, 0, 0, 0.25)", display: "flex", flexDirection: "row", padding: "6px 4px 6px 4px", gap: "10px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                      <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "23px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#000000", lineHeight: "20px" }}>180</p>
                    </div>
                  </div>
                  <div style={{ alignSelf: "stretch", height: "36px", flexShrink: 0, borderRadius: "10px", display: "flex", flexDirection: "column", padding: "10px 10px 10px 10px", justifyContent: "center", alignItems: "flex-start", boxSizing: "border-box" }}>
                    <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                      <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "75px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#545359", lineHeight: "20px" }}>AI Pentests</p>
                    </div>
                  </div>
                  <div style={{ alignSelf: "stretch", height: "36px", flexShrink: 0, borderRadius: "10px", display: "flex", flexDirection: "column", padding: "10px 10px 10px 10px", justifyContent: "center", alignItems: "flex-start", boxSizing: "border-box" }}>
                    <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                      <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "85px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#545359", lineHeight: "20px" }}>Fix Requests</p>
                    </div>
                  </div>
                </div>
                <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <svg style={{ width: "212px", height: "1px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible", marginBottom: "-1px" }} xmlns="http://www.w3.org/2000/svg" width="212" height="1" viewBox="0 0 212 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 -0.5 L0 0 L212 0 L212 -0.5 L212 -1 L0 -1 L0 -0.5 Z" fill="#ebebeb"/></svg>
                  <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                    <div style={{ alignSelf: "stretch", height: "36px", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                      <div style={{ alignSelf: "stretch", height: "36px", flexShrink: 0, borderRadius: "10px", display: "flex", flexDirection: "column", padding: "10px 10px 10px 10px", justifyContent: "center", alignItems: "flex-start", boxSizing: "border-box" }}>
                        <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "52px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#a6a6a6", lineHeight: "20px" }}>ASSETS</p>
                      </div>
                    </div>
                    <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                      <div style={{ width: "212px", height: "36px", flexShrink: 0, borderRadius: "10px", display: "flex", flexDirection: "row", padding: "10px 10px 10px 10px", gap: "-7px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                        <div style={{ width: "163px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                          <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "82px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#545359", lineHeight: "20px" }}>Repositories</p>
                        </div>
                      </div>
                      <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                        <div style={{ alignSelf: "stretch", height: "36px", flexShrink: 0, borderRadius: "10px", display: "flex", flexDirection: "column", padding: "10px 10px 10px 10px", justifyContent: "center", alignItems: "flex-start", boxSizing: "border-box" }}>
                          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                            <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "128px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#545359", lineHeight: "20px" }}>Applications & APIs</p>
                          </div>
                        </div>
                      </div>
                      <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                        <div style={{ alignSelf: "stretch", height: "36px", flexShrink: 0, borderRadius: "10px", display: "flex", flexDirection: "column", padding: "10px 10px 10px 10px", justifyContent: "center", alignItems: "flex-start", boxSizing: "border-box" }}>
                          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                            <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "94px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#545359", lineHeight: "20px" }}>Dependencies</p>
                          </div>
                        </div>
                      </div>
                      <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                        <div style={{ alignSelf: "stretch", height: "36px", flexShrink: 0, borderRadius: "10px", display: "flex", flexDirection: "column", padding: "10px 10px 10px 10px", justifyContent: "center", alignItems: "flex-start", boxSizing: "border-box" }}>
                          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                            <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "51px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#545359", lineHeight: "20px" }}>Secrets</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <svg style={{ width: "212px", height: "1px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible", marginBottom: "-1px" }} xmlns="http://www.w3.org/2000/svg" width="212" height="1" viewBox="0 0 212 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 -0.5 L0 0 L212 0 L212 -0.5 L212 -1 L0 -1 L0 -0.5 Z" fill="#ebebeb"/></svg>
                  <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                    <div style={{ alignSelf: "stretch", height: "36px", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                      <div style={{ alignSelf: "stretch", height: "36px", flexShrink: 0, borderRadius: "10px", display: "flex", flexDirection: "column", padding: "10px 10px 10px 10px", justifyContent: "center", alignItems: "flex-start", boxSizing: "border-box", position: "relative" }}>
                        <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "85px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#a6a6a6", lineHeight: "20px" }}>WORKSPACE</p>
                        <ChevronRight size={16} strokeWidth={2.25} style={{ position: "absolute", left: "202px", top: "10px", width: "16px", height: "16px", transform: "rotate(90deg)", transformOrigin: "top left", color: "#b3b3b3", display: "block", flexShrink: 0 }} />
                      </div>
                    </div>
                    <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                      <div style={{ width: "212px", height: "36px", flexShrink: 0, borderRadius: "10px", display: "flex", flexDirection: "row", padding: "10px 10px 10px 10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                        <div style={{ width: "163px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                          <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "52px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#545359", lineHeight: "20px" }}>Reports</p>
                        </div>
                      </div>
                      <div style={{ alignSelf: "stretch", height: "36px", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
                        <div style={{ width: "212px", height: "36px", flexShrink: 0, borderRadius: "10px", display: "flex", flexDirection: "row", padding: "10px 10px 10px 10px", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
                          <div style={{ width: "163px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                              <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "80px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#545359", lineHeight: "20px" }}>Integrations</p>
                            </div>
                          </div>
                          <div style={{ width: "26px", height: "22px", flexShrink: 0, borderRadius: "5px", background: "#ffffff", boxShadow: "0px 0px 1px 0px rgba(0, 0, 0, 0.25)", display: "flex", flexDirection: "row", padding: "6px 4px 6px 4px", gap: "10px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                            <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "16px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#000000", lineHeight: "20px" }}>78</p>
                          </div>
                        </div>
                      </div>
                      <div style={{ alignSelf: "stretch", height: "36px", flexShrink: 0, borderRadius: "10px", display: "flex", flexDirection: "column", padding: "10px 10px 10px 10px", justifyContent: "center", alignItems: "flex-start", boxSizing: "border-box" }}>
                        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                          <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "99px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#545359", lineHeight: "20px" }}>Team & Access</p>
                        </div>
                      </div>
                      <div style={{ alignSelf: "stretch", height: "36px", flexShrink: 0, borderRadius: "10px", display: "flex", flexDirection: "column", padding: "10px 10px 10px 10px", justifyContent: "center", alignItems: "flex-start", boxSizing: "border-box" }}>
                        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                          <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "55px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#545359", lineHeight: "20px" }}>Settings</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <svg style={{ position: "absolute", left: "238px", top: "72px", width: "1111px", height: "1px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="1111" height="1" viewBox="0 0 1111 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 -0.5 L0 0 L1111 0 L1111 -0.5 L1111 -1 L0 -1 L0 -0.5 Z" fill="#ebebeb"/></svg>
          <svg style={{ position: "absolute", left: "238px", top: "160px", width: "1111px", height: "1px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="1111" height="1" viewBox="0 0 1111 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 -0.5 L0 0 L1111 0 L1111 -0.5 L1111 -1 L0 -1 L0 -0.5 Z" fill="#ebebeb"/></svg>
          <svg style={{ position: "absolute", left: "236px", top: "-23px", width: "1px", height: "1037px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="1" height="1037" viewBox="0 0 1 1037" fill="none" overflow="visible"><path transform="matrix(0 1 -1 0 0 0)" d="M0 -0.5 L0 0 L1037 0 L1037 -0.5 L1037 -1 L0 -1 L0 -0.5 Z" fill="#ebebeb"/></svg>
          <div style={{ position: "absolute", left: "236px", top: "0px", width: "1112px", height: "72px", display: "flex", flexDirection: "row", padding: "20px 20px 20px 20px", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <LayoutDashboard size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#b3b3b3", display: "block" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "72px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#b3b3b3" }}>Workspace</p>
              </div>
              <ChevronRight size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#686765", display: "block" }} />
              <div style={{ flexShrink: 0, borderRadius: "6px", background: "#f3f3f3", display: "flex", flexDirection: "row", padding: "4px 10px 4px 10px", gap: "10px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "108px", lineHeight: "21px", fontFamily: "'Geist'", fontSize: "16px", fontWeight: 400, color: "#666d80", letterSpacing: "0.02em" }}>Vulnerabilities</p>
              </div>
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "295px", height: "32px", flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e8e8e8", position: "relative" }}>
                <div style={{ position: "absolute", left: "8px", top: "7px", width: "223px", height: "18px", display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <Search size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#979797", display: "block" }} />
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "54px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#979797" }}>Search…</p>
                </div>
                <div style={{ position: "absolute", left: "237px", top: "2px", width: "45px", height: "28px", borderRadius: "8px", background: "#fafafa", overflow: "hidden", display: "flex", flexDirection: "row", padding: "8px 12px 8px 12px", gap: "1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <Command size={12} strokeWidth={3} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#555555", display: "block" }} />
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "8px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#555555", textBox: "trim-both cap alphabetic", height: "9px" }}>K</p>
                </div>
              </div>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "64px", height: "32px", flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ededed", overflow: "hidden", position: "relative" }}>
                  <div style={{ position: "absolute", left: "34px", top: "2px", width: "28px", height: "28px", borderRadius: "8px", background: "radial-gradient(#000000 0%, #161616 46%, #444444 100%)", overflow: "hidden" }}>
                    <Sun size={16} strokeWidth={2.25} style={{ position: "absolute", left: "6px", top: "6px", width: "16px", height: "16px", color: "#ffffff", display: "block", flexShrink: 0 }} />
                  </div>
                  <Moon size={18} strokeWidth={2} style={{ position: "absolute", left: "8px", top: "7px", width: "18px", height: "18px", color: "#1a1a1a", display: "block", flexShrink: 0 }} />
                </div>
                <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 0.85px #e8e8e8", overflow: "hidden", position: "relative" }}>
                  <Bell size={19.2} strokeWidth={1.6} style={{ position: "absolute", left: "6.4px", top: "6.23px", width: "19.2px", height: "20.4px", color: "#686765", display: "block", flexShrink: 0 }} />
                </div>
              </div>
              <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 0.63px #e8e8e8", overflow: "hidden", position: "relative" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", width: "32px", height: "32px", borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 0.63px #e8e8e8", overflow: "hidden" }}>
                  <div style={{ position: "absolute", left: "0px", top: "0px", width: "32px", height: "32px", background: "url('https://ingotui.com/library-img/232efcbc3e38653b836fdc20a462210bf2f00cbb.png') center / cover no-repeat" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ position: "absolute", left: "306px", top: "181px", width: "1114px", height: "838px", overflow: "hidden" }}>
        <div style={{ position: "absolute", left: "278px", top: "0px", width: "1px", height: "128px", background: "#e8e8e8" }} />
        <div style={{ position: "absolute", left: "557px", top: "0px", width: "1px", height: "128px", background: "#e8e8e8" }} />
        <div style={{ position: "absolute", left: "835px", top: "0px", width: "1px", height: "128px", background: "#e8e8e8" }} />
        <div style={{ position: "absolute", left: "0px", top: "128px", width: "1114px", height: "1px", background: "#ebebeb" }} />
        <div style={{ position: "absolute", left: "20px", top: "20px", width: "238px", height: "57px", display: "flex", flexDirection: "column", gap: "8px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "91px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 600, color: "#1c1b20", letterSpacing: "-0.02em" }}>Open findings</p>
            </div>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "baseline", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "30px", lineHeight: "31px", fontFamily: "'Geist'", fontSize: "24px", fontWeight: 500, color: "#000000", letterSpacing: "-0.02em" }}>24</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "17px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#fb3034" }}>+3</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "83px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#989898" }}>vs last week</p>
          </div>
        </div>
        <svg style={{ position: "absolute", left: "20px", top: "88px", width: "238px", height: "26px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="238" height="26" viewBox="0 0 238 26" fill="none" overflow="visible"><defs><linearGradient id="g1_gf8u" gradientUnits="userSpaceOnUse" x1="116.00" y1="0.00" x2="116.00" y2="23.03"><stop offset="0" stopColor="#f68b2e" stopOpacity="0.16"/><stop offset="1" stopColor="#f68b2e" stopOpacity="0"/></linearGradient></defs><path transform="matrix(1 0 0 1 1 3)" d="M0 17.5315 C0.82 17.5315 12.01 17.7415 13.65 17.5315 C15.28 17.3215 25.66 13.8215 27.29 14.0315 C28.93 14.2415 39.3 20.8215 40.94 21.0315 C42.58 21.2415 52.95 18.1615 54.59 17.5315 C56.23 16.9015 66.6 10.9515 68.24 10.5315 C69.87 10.1115 80.24 10.3215 81.88 10.5315 C83.52 10.7415 93.89 14.2415 95.53 14.0315 C97.17 13.8215 107.54 7.24149 109.18 7.03149 C110.81 6.82149 121.19 10.3215 122.82 10.5315 C124.46 10.7415 134.83 10.9515 136.47 10.5315 C138.11 10.1115 148.48 3.74149 150.12 3.53149 C151.76 3.32149 162.13 6.82149 163.76 7.03149 C165.4 7.24149 175.77 6.82149 177.41 7.03149 C179.05 7.24149 189.42 10.9515 191.06 10.5315 C192.7 10.1115 203.07 0.451491 204.71 0.031491 C206.34 -0.388509 216.72 3.53149 218.35 3.53149 C219.99 3.53149 231.18 0.241491 232 0.031491 L232 23.0315 L0 23.0315 L0 17.5315 Z" fill="url(#g1_gf8u)"/><path transform="matrix(1 0 0 1 1 3)" d="M0 16.8315 C-0.386599 16.8315 -0.7 17.1449 -0.7 17.5315 C-0.7 17.9181 -0.386599 18.2315 0 18.2315 L0 17.5315 L0 16.8315 Z M13.65 17.5315 L13.7389 18.2258 L13.7394 18.2258 L13.65 17.5315 Z M27.29 14.0315 L27.2006 14.7258 L27.2011 14.7258 L27.29 14.0315 Z M68.24 10.5315 L68.4137 11.2096 L68.4147 11.2094 L68.24 10.5315 Z M109.18 7.03149 L109.269 7.72582 L109.269 7.72575 L109.18 7.03149 Z M122.82 10.5315 L122.731 11.2258 L122.731 11.2258 L122.82 10.5315 Z M163.76 7.03149 L163.671 7.72575 L163.671 7.72582 L163.76 7.03149 Z M204.71 0.031491 L204.884 0.709607 L204.885 0.70935 L204.71 0.031491 Z M232.174 0.709607 C232.548 0.613695 232.774 0.23234 232.678 -0.142173 C232.582 -0.516686 232.201 -0.742537 231.826 -0.646625 L232 0.031491 L232.174 0.709607 Z M0 17.5315 L0 18.2315 C0.409194 18.2315 3.38955 18.2838 6.51158 18.3102 C8.06536 18.3234 9.64786 18.33 10.946 18.3201 C12.2218 18.3103 13.2776 18.2849 13.7389 18.2258 L13.65 17.5315 L13.5611 16.8372 C13.2024 16.8831 12.2445 16.9101 10.9353 16.9201 C9.64839 16.9299 8.07464 16.9234 6.52342 16.9103 C3.43545 16.8842 0.410806 16.8315 0 16.8315 L0 17.5315 Z M13.65 17.5315 L13.7394 18.2258 C14.2137 18.1647 15.2317 17.886 16.4338 17.539 C17.6581 17.1857 19.177 16.7299 20.6658 16.296 C22.1661 15.8588 23.6551 15.4381 24.8674 15.14 C25.4742 14.9908 26.0016 14.8749 26.4212 14.8029 C26.8679 14.7262 27.1131 14.7145 27.2006 14.7258 L27.29 14.0315 L27.3794 13.3372 C27.0594 13.296 26.6237 13.3477 26.1844 13.4231 C25.7179 13.5031 25.1542 13.6278 24.5332 13.7805 C23.2899 14.0862 21.7764 14.5141 20.2742 14.9519 C18.7605 15.3931 17.2769 15.8386 16.0456 16.1939 C14.792 16.5557 13.9013 16.7933 13.5606 16.8372 L13.65 17.5315 Z M27.29 14.0315 L27.2011 14.7258 C27.2876 14.7369 27.5385 14.8171 27.992 15.0219 C28.4162 15.2135 28.9475 15.4809 29.5568 15.8031 C30.7747 16.4472 32.2665 17.2905 33.7705 18.1408 C35.269 18.988 36.7797 19.8422 38.0187 20.4975 C38.6378 20.8249 39.1986 21.1078 39.6617 21.317 C40.0957 21.513 40.5276 21.6844 40.8511 21.7258 L40.94 21.0315 L41.0289 20.3372 C40.9424 20.3261 40.6915 20.2459 40.238 20.0411 C39.8138 19.8494 39.2825 19.5821 38.6732 19.2599 C37.4553 18.6158 35.9635 17.7725 34.4595 16.9221 C32.961 16.075 31.4503 15.2208 30.2113 14.5655 C29.5922 14.2381 29.0314 13.9552 28.5683 13.746 C28.1343 13.55 27.7024 13.3786 27.3789 13.3372 L27.29 14.0315 Z M40.94 21.0315 L40.8511 21.7258 C41.1621 21.7656 41.5901 21.7249 42.0321 21.6598 C42.4983 21.5911 43.0619 21.4818 43.6838 21.3456 C44.9291 21.0728 46.4434 20.6843 47.9499 20.2716 C50.9513 19.4494 53.9847 18.5139 54.841 18.1849 L54.59 17.5315 L54.339 16.878 C53.5553 17.1791 50.5837 18.0985 47.5801 18.9214 C46.0841 19.3312 44.5959 19.7126 43.3843 19.978 C42.7778 20.1108 42.2493 20.2127 41.8281 20.2747 C41.3828 20.3403 41.1279 20.3498 41.0289 20.3372 L40.94 21.0315 Z M54.59 17.5315 L54.841 18.1849 C55.3009 18.0083 56.3022 17.4925 57.5126 16.8491 C58.7434 16.1949 60.2492 15.3765 61.7472 14.5689 C63.2485 13.7595 64.7435 12.9601 65.9641 12.3374 C66.5747 12.0259 67.1111 11.7614 67.5424 11.563 C67.9904 11.3569 68.2781 11.2443 68.4137 11.2096 L68.24 10.5315 L68.0663 9.85338 C67.7919 9.92367 67.3968 10.0889 66.9573 10.2911 C66.5012 10.5009 65.9456 10.7751 65.3278 11.0903 C64.0915 11.721 62.584 12.5272 61.0828 13.3366 C59.5783 14.1477 58.0816 14.9612 56.8555 15.6129 C55.609 16.2755 54.6991 16.7397 54.339 16.878 L54.59 17.5315 Z M68.24 10.5315 L68.4147 11.2094 C68.5529 11.1737 68.8385 11.1342 69.2805 11.1002 C69.7079 11.0674 70.2411 11.0423 70.8489 11.0245 C72.0636 10.9887 73.5542 10.9821 75.0501 10.9952 C78.0636 11.0216 81.0208 11.1272 81.7911 11.2258 L81.88 10.5315 L81.9689 9.83716 C81.0992 9.7258 78.0514 9.62141 75.0624 9.59527 C73.557 9.5821 72.047 9.58862 70.8077 9.62508 C70.1885 9.64329 69.6312 9.66913 69.1731 9.70435 C68.7296 9.73845 68.3346 9.78426 68.0653 9.85363 L68.24 10.5315 Z M81.88 10.5315 L81.7911 11.2258 C82.1341 11.2697 83.026 11.5073 84.28 11.8691 C85.5116 12.2243 86.9958 12.67 88.5091 13.111 C90.0114 13.5488 91.5249 13.9768 92.7689 14.2825 C93.3903 14.4352 93.9545 14.5599 94.4217 14.64 C94.8621 14.7154 95.2982 14.7669 95.6189 14.7258 L95.53 14.0315 L95.4411 13.3372 C95.3518 13.3486 95.1051 13.3366 94.6581 13.2601 C94.2379 13.1881 93.71 13.0721 93.103 12.923 C91.8901 12.6249 90.4011 12.2042 88.9008 11.7669 C87.4117 11.333 85.8934 10.8774 84.6681 10.5239 C83.4653 10.1769 82.4459 9.89823 81.9689 9.83716 L81.88 10.5315 Z M95.53 14.0315 L95.6189 14.7258 C95.9424 14.6844 96.3743 14.513 96.8083 14.317 C97.2714 14.1078 97.8322 13.8249 98.4513 13.4975 C99.6903 12.8422 101.201 11.988 102.7 11.1408 C104.204 10.2905 105.695 9.4472 106.913 8.80309 C107.522 8.48085 108.054 8.21354 108.478 8.02189 C108.931 7.81706 109.182 7.7369 109.269 7.72582 L109.18 7.03149 L109.091 6.33716 C108.768 6.37858 108.336 6.54998 107.902 6.74602 C107.439 6.95522 106.878 7.23807 106.259 7.56551 C105.02 8.22078 103.509 9.07495 102.01 9.92213 C100.506 10.7725 99.0147 11.6158 97.7968 12.2599 C97.1875 12.5821 96.6562 12.8494 96.232 13.0411 C95.7785 13.2459 95.5276 13.3261 95.4411 13.3372 L95.53 14.0315 Z M109.18 7.03149 L109.269 7.72575 C109.357 7.71449 109.602 7.72624 110.049 7.80289 C110.468 7.87488 110.996 7.99081 111.603 8.14 C112.815 8.43806 114.304 8.85883 115.804 9.29603 C117.293 9.72993 118.812 10.1857 120.036 10.539 C121.238 10.886 122.256 11.1647 122.731 11.2258 L122.82 10.5315 L122.909 9.83723 C122.569 9.79333 121.678 9.55574 120.424 9.19394 C119.193 8.83856 117.709 8.39306 116.196 7.95195 C114.694 7.51415 113.18 7.08617 111.937 6.78048 C111.316 6.6278 110.752 6.5031 110.286 6.42306 C109.846 6.34768 109.411 6.296 109.091 6.33723 L109.18 7.03149 Z M122.82 10.5315 L122.731 11.2258 C123.601 11.3372 126.649 11.4416 129.639 11.4677 C131.145 11.4809 132.656 11.4744 133.896 11.4379 C134.516 11.4197 135.074 11.3939 135.533 11.3586 C135.978 11.3245 136.374 11.2787 136.644 11.2096 L136.47 10.5315 L136.296 9.85338 C136.156 9.88925 135.869 9.92877 135.426 9.96274 C134.998 9.99562 134.464 10.0206 133.855 10.0385 C132.639 10.0742 131.148 10.0809 129.651 10.0678 C126.636 10.0414 123.679 9.9358 122.909 9.83716 L122.82 10.5315 Z M136.47 10.5315 L136.644 11.2096 C136.926 11.1372 137.327 10.9607 137.765 10.7488 C138.222 10.5277 138.778 10.2383 139.395 9.90682 C140.63 9.244 142.138 8.39783 143.635 7.56437 C145.138 6.7282 146.63 5.90439 147.847 5.27696 C148.456 4.963 148.987 4.70278 149.412 4.51613 C149.864 4.31722 150.118 4.23746 150.209 4.22582 L150.12 3.53149 L150.031 2.83716 C149.712 2.87803 149.283 3.04326 148.848 3.23455 C148.385 3.43809 147.825 3.71327 147.205 4.03258 C145.965 4.67172 144.455 5.50603 142.955 6.34111 C141.449 7.1789 139.955 8.01711 138.733 8.67335 C138.122 9.00143 137.586 9.28019 137.155 9.48867 C136.705 9.70633 136.424 9.82075 136.296 9.85338 L136.47 10.5315 Z M150.12 3.53149 L150.209 4.22582 C150.298 4.21439 150.545 4.22634 150.992 4.30292 C151.412 4.37491 151.94 4.49084 152.547 4.64001 C153.76 4.93806 155.248 5.35882 156.748 5.79601 C158.236 6.22982 159.754 6.68571 160.977 7.03901 C162.179 7.38595 163.196 7.66465 163.671 7.72575 L163.76 7.03149 L163.849 6.33723 C163.509 6.29333 162.619 6.05579 161.366 5.69398 C160.135 5.33852 158.653 4.89316 157.14 4.45197 C155.638 4.01416 154.125 3.58617 152.881 3.28047 C152.26 3.12777 151.696 3.00307 151.228 2.92303 C150.788 2.84758 150.352 2.79609 150.031 2.83716 L150.12 3.53149 Z M163.76 7.03149 L163.671 7.72582 C164.138 7.78561 165.148 7.79701 166.358 7.79054 C167.591 7.78395 169.097 7.75761 170.597 7.73138 C172.1 7.70511 173.596 7.67895 174.82 7.67242 C176.067 7.66576 176.968 7.68061 177.321 7.72582 L177.41 7.03149 L177.499 6.33716 C177.032 6.27737 176.022 6.26598 174.812 6.27244 C173.579 6.27903 172.073 6.30537 170.573 6.3316 C169.07 6.35787 167.574 6.38403 166.35 6.39056 C165.103 6.39723 164.202 6.38237 163.849 6.33716 L163.76 7.03149 Z M177.41 7.03149 L177.321 7.72582 C177.658 7.76902 178.544 8.01658 179.802 8.39616 C181.005 8.75942 182.547 9.24191 184.034 9.68819 C185.537 10.1394 187.055 10.5753 188.304 10.8724 C188.928 11.0207 189.498 11.1376 189.974 11.2036 C190.415 11.265 190.881 11.2999 191.234 11.2096 L191.06 10.5315 L190.886 9.85338 C190.886 9.85337 190.885 9.8537 190.882 9.85424 C190.88 9.85478 190.876 9.85549 190.871 9.85628 C190.86 9.85788 190.846 9.85964 190.827 9.86112 C190.788 9.86413 190.737 9.86555 190.672 9.86392 C190.541 9.86065 190.372 9.84559 190.166 9.81696 C189.754 9.75969 189.232 9.65404 188.628 9.51031 C187.42 9.22327 185.935 8.79731 184.436 8.34729 C182.921 7.89232 181.46 7.43419 180.206 7.05588 C179.007 6.6939 177.982 6.39897 177.499 6.33716 L177.41 7.03149 Z M191.06 10.5315 L191.234 11.2096 C191.428 11.1599 191.629 11.0602 191.81 10.9586 C192.001 10.8507 192.216 10.7127 192.447 10.5537 C192.909 10.2355 193.47 9.81096 194.088 9.32185 C195.326 8.34288 196.836 7.0755 198.335 5.81767 C199.839 4.5555 201.331 3.30288 202.55 2.33935 C203.16 1.85721 203.692 1.4549 204.117 1.16279 C204.329 1.01658 204.507 0.903616 204.648 0.823639 C204.719 0.783824 204.776 0.75506 204.819 0.735321 C204.865 0.714642 204.885 0.7093 204.884 0.709607 L204.71 0.031491 L204.536 -0.646625 C204.342 -0.596876 204.141 -0.497247 203.96 -0.395618 C203.769 -0.287743 203.554 -0.149688 203.323 0.00925649 C202.861 0.327454 202.3 0.752026 201.682 1.24113 C200.444 2.2201 198.934 3.48748 197.435 4.74531 C195.931 6.00748 194.439 7.2601 193.22 8.22363 C192.61 8.70578 192.078 9.10808 191.653 9.40019 C191.441 9.54641 191.263 9.65937 191.122 9.73934 C191.051 9.77916 190.994 9.80792 190.951 9.82766 C190.905 9.84834 190.885 9.85368 190.886 9.85338 L191.06 10.5315 Z M204.71 0.031491 L204.885 0.70935 C204.884 0.709447 204.9 0.705522 204.939 0.702741 C204.976 0.70004 205.026 0.698992 205.09 0.70118 C205.22 0.705592 205.387 0.722358 205.593 0.753427 C206.004 0.815577 206.524 0.92819 207.129 1.08008 C208.337 1.38347 209.822 1.82901 211.323 2.29281 C212.816 2.75395 214.329 3.23443 215.563 3.59714 C216.181 3.77875 216.739 3.93408 217.199 4.04453 C217.637 4.14956 218.053 4.23149 218.35 4.23149 L218.35 3.53149 L218.35 2.83149 C218.24 2.83149 217.975 2.79092 217.526 2.68322 C217.1 2.58093 216.568 2.4333 215.958 2.25397 C214.736 1.89481 213.246 1.42154 211.737 0.955175 C210.236 0.491477 208.718 0.0357667 207.47 -0.277728 C206.847 -0.434271 206.277 -0.559002 205.802 -0.630835 C205.362 -0.697292 204.892 -0.73834 204.535 -0.646368 L204.71 0.031491 Z M218.35 3.53149 L218.35 4.23149 C218.631 4.23149 219.048 4.1663 219.507 4.07683 C219.986 3.98364 220.573 3.85162 221.223 3.69464 C222.526 3.38044 224.112 2.96046 225.667 2.53547 C228.803 1.67837 231.765 0.814145 232.174 0.709607 L232 0.031491 L231.826 -0.646625 C231.415 -0.541163 228.372 0.344607 225.298 1.18501 C223.748 1.60877 222.178 2.02441 220.895 2.33366 C220.254 2.4884 219.69 2.61505 219.24 2.7026 C218.771 2.79387 218.479 2.83149 218.35 2.83149 L218.35 3.53149 Z" fill="#f68b2e"/><path transform="matrix(1 0 0 1 230.5 0.5)" d="M5 2.5 C5 3.88071 3.88071 5 2.5 5 C1.11929 5 0 3.88071 0 2.5 C0 1.11929 1.11929 0 2.5 0 C3.88071 0 5 1.11929 5 2.5 Z" fill="#f68b2e"/><path transform="matrix(1 0 0 1 230.5 0.5)" d="M5 2.5 L3.8 2.5 C3.8 3.21797 3.21797 3.8 2.5 3.8 L2.5 5 L2.5 6.2 C4.54345 6.2 6.2 4.54345 6.2 2.5 L5 2.5 Z M2.5 5 L2.5 3.8 C1.78203 3.8 1.2 3.21797 1.2 2.5 L0 2.5 L-1.2 2.5 C-1.2 4.54345 0.456546 6.2 2.5 6.2 L2.5 5 Z M0 2.5 L1.2 2.5 C1.2 1.78203 1.78203 1.2 2.5 1.2 L2.5 0 L2.5 -1.2 C0.456546 -1.2 -1.2 0.456546 -1.2 2.5 L0 2.5 Z M2.5 0 L2.5 1.2 C3.21797 1.2 3.8 1.78203 3.8 2.5 L5 2.5 L6.2 2.5 C6.2 0.456546 4.54345 -1.2 2.5 -1.2 L2.5 0 Z" fill="#ffffff"/></svg>
        <div style={{ position: "absolute", left: "298.5px", top: "20px", width: "238px", height: "57px", display: "flex", flexDirection: "column", gap: "8px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "82px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 600, color: "#1c1b20", letterSpacing: "-0.02em" }}>Critical open</p>
            </div>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "baseline", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "16px", lineHeight: "31px", fontFamily: "'Geist'", fontSize: "24px", fontWeight: 500, color: "#000000", letterSpacing: "-0.02em" }}>4</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "17px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#00be4e" }}>−2</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "72px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#989898" }}>2 past SLA</p>
          </div>
        </div>
        <div style={{ position: "absolute", left: "298.5px", top: "88px", width: "232.8px", height: "14px", display: "flex", flexDirection: "row", gap: "2.4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #fb494c 0%, #fb3034 100%)" }} />
          <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #fb494c 0%, #fb3034 100%)" }} />
          <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #fb494c 0%, #fb3034 100%)" }} />
          <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #fb494c 0%, #fb3034 100%)" }} />
          <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #fb494c 0%, #fb3034 100%)" }} />
          <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #fb494c 0%, #fb3034 100%)" }} />
          <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #fb494c 0%, #fb3034 100%)" }} />
          <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(251, 48, 52, 0.16)" }} />
          <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(251, 48, 52, 0.16)" }} />
          <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(251, 48, 52, 0.16)" }} />
          <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(251, 48, 52, 0.16)" }} />
          <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(251, 48, 52, 0.16)" }} />
          <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(251, 48, 52, 0.16)" }} />
          <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(251, 48, 52, 0.16)" }} />
          <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(251, 48, 52, 0.16)" }} />
          <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(251, 48, 52, 0.16)" }} />
          <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(251, 48, 52, 0.16)" }} />
          <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(251, 48, 52, 0.16)" }} />
          <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(251, 48, 52, 0.16)" }} />
          <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(251, 48, 52, 0.16)" }} />
          <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(251, 48, 52, 0.16)" }} />
          <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(251, 48, 52, 0.16)" }} />
          <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(251, 48, 52, 0.16)" }} />
          <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(251, 48, 52, 0.16)" }} />
          <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(251, 48, 52, 0.16)" }} />
          <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(251, 48, 52, 0.16)" }} />
          <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(251, 48, 52, 0.16)" }} />
          <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(251, 48, 52, 0.16)" }} />
          <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(251, 48, 52, 0.16)" }} />
          <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(251, 48, 52, 0.16)" }} />
          <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(251, 48, 52, 0.16)" }} />
          <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(251, 48, 52, 0.16)" }} />
          <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(251, 48, 52, 0.16)" }} />
          <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(251, 48, 52, 0.16)" }} />
          <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(251, 48, 52, 0.16)" }} />
          <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(251, 48, 52, 0.16)" }} />
          <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(251, 48, 52, 0.16)" }} />
          <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(251, 48, 52, 0.16)" }} />
          <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(251, 48, 52, 0.16)" }} />
          <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(251, 48, 52, 0.16)" }} />
          <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(251, 48, 52, 0.16)" }} />
          <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(251, 48, 52, 0.16)" }} />
        </div>
        <div style={{ position: "absolute", left: "577px", top: "20px", width: "238px", height: "57px", display: "flex", flexDirection: "column", gap: "8px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "89px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 600, color: "#1c1b20", letterSpacing: "-0.02em" }}>Time to verify</p>
            </div>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "baseline", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "78px", lineHeight: "31px", fontFamily: "'Geist'", fontSize: "24px", fontWeight: 500, color: "#000000", letterSpacing: "-0.02em" }}>3m 12s</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "33px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#00be4e" }}>−14%</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "49px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#989898" }}>median</p>
          </div>
        </div>
        <svg style={{ position: "absolute", left: "577px", top: "88px", width: "238px", height: "26px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="238" height="26" viewBox="0 0 238 26" fill="none" overflow="visible"><defs><linearGradient id="g2_gf99" gradientUnits="userSpaceOnUse" x1="116.00" y1="0.00" x2="116.00" y2="23.00"><stop offset="0" stopColor="#56b2ee" stopOpacity="0.16"/><stop offset="1" stopColor="#56b2ee" stopOpacity="0"/></linearGradient></defs><path transform="matrix(1 0 0 1 1 3)" d="M0 0 C0.93 0.2 13.61 3.18 15.47 3.32 C17.32 3.45 29.08 1.95 30.93 2.21 C32.79 2.48 44.54 7.54 46.4 7.74 C48.26 7.94 60.01 5.33 61.87 5.53 C63.72 5.73 75.48 10.85 77.33 11.05 C79.19 11.25 90.94 8.71 92.8 8.84 C94.66 8.97 106.41 13.06 108.27 13.26 C110.12 13.46 121.88 11.96 123.73 12.16 C125.59 12.36 137.34 16.45 139.2 16.58 C141.06 16.71 152.81 14.3 154.67 14.37 C156.52 14.43 168.28 17.42 170.13 17.68 C171.99 17.95 183.74 18.86 185.6 18.79 C187.46 18.72 199.21 16.51 201.07 16.58 C202.92 16.65 214.68 19.63 216.53 19.89 C218.39 20.16 231.07 20.93 232 21 L232 23 L0 23 L0 0 Z" fill="url(#g2_gf99)"/><path transform="matrix(1 0 0 1 1 3)" d="M0.147173 -0.684354 C-0.230785 -0.765635 -0.603072 -0.525131 -0.684354 -0.147173 C-0.765635 0.230785 -0.525131 0.603072 -0.147173 0.684354 L0 0 L0.147173 -0.684354 Z M15.47 3.32 L15.4175 4.01803 L15.4209 4.01828 L15.47 3.32 Z M30.93 2.21 L31.0306 1.51725 L31.0274 1.51681 L30.93 2.21 Z M61.87 5.53 L61.9452 4.83405 L61.9448 4.83401 L61.87 5.53 Z M77.33 11.05 L77.2548 11.7459 L77.2552 11.746 L77.33 11.05 Z M108.27 13.26 L108.345 12.5641 L108.345 12.564 L108.27 13.26 Z M123.73 12.16 L123.655 12.8559 L123.655 12.856 L123.73 12.16 Z M154.67 14.37 L154.644 15.0695 L154.647 15.0696 L154.67 14.37 Z M170.13 17.68 L170.231 16.9873 L170.227 16.9868 L170.13 17.68 Z M201.07 16.58 L201.096 15.8805 L201.096 15.8805 L201.07 16.58 Z M216.53 19.89 L216.631 19.1973 L216.627 19.1968 L216.53 19.89 Z M231.947 21.698 C232.333 21.727 232.669 21.438 232.698 21.0525 C232.727 20.667 232.438 20.331 232.053 20.302 L232 21 L231.947 21.698 Z M0 0 L-0.147173 0.684354 C0.317389 0.784259 3.69735 1.57424 7.23337 2.3656 C8.99403 2.75964 10.7869 3.15251 12.2575 3.45588 C13.704 3.75429 14.897 3.97885 15.4175 4.01803 L15.47 3.32 L15.5225 2.62197 C15.113 2.59115 14.0235 2.39071 12.5403 2.08475 C11.0812 1.78374 9.29722 1.39286 7.53913 0.999398 C4.03765 0.215764 0.612611 -0.58426 0.147173 -0.684354 L0 0 Z M15.47 3.32 L15.4209 4.01828 C15.9506 4.0555 17.097 3.97863 18.4652 3.86233 C19.8617 3.74363 21.5687 3.57588 23.2668 3.41305 C24.9688 3.24986 26.6626 3.09153 28.0452 2.99016 C28.7368 2.93945 29.3443 2.90347 29.8326 2.88803 C30.336 2.87211 30.6675 2.87998 30.8326 2.90319 L30.93 2.21 L31.0274 1.51681 C30.73 1.47502 30.2893 1.47289 29.7883 1.48873 C29.2721 1.50505 28.6429 1.54258 27.9429 1.59391 C26.5424 1.69659 24.8337 1.85639 23.1332 2.01945 C21.4288 2.18287 19.7333 2.3495 18.3467 2.46736 C16.9318 2.58762 15.9144 2.6495 15.5191 2.62172 L15.47 3.32 Z M30.93 2.21 L30.8294 2.90274 C30.9945 2.9267 31.3282 3.01644 31.8347 3.18221 C32.3252 3.34273 32.9345 3.55978 33.6273 3.81629 C35.0127 4.32927 36.7074 4.99076 38.4112 5.65362 C40.111 6.31491 41.8196 6.97749 43.2203 7.48732 C43.9204 7.74214 44.5503 7.96128 45.0677 8.12384 C45.5666 8.28062 46.015 8.40264 46.3252 8.43599 L46.4 7.74 L46.4748 7.04401 C46.32 7.02736 45.9943 6.94751 45.4874 6.78823 C44.9989 6.63473 44.3912 6.42364 43.6991 6.17175 C42.3154 5.66813 40.6215 5.01134 38.9188 4.34888 C37.2201 3.68799 35.5123 3.02136 34.1134 2.5034 C33.414 2.24444 32.7855 2.02031 32.2702 1.85165 C31.7709 1.68824 31.3305 1.5608 31.0306 1.51726 L30.93 2.21 Z M46.4 7.74 L46.3252 8.43599 C46.6394 8.46978 47.0935 8.44217 47.5942 8.39057 C48.1138 8.33702 48.7456 8.25029 49.4464 8.14285 C50.8483 7.92793 52.5583 7.62508 54.2571 7.32428 C55.9608 7.02258 57.6533 6.72293 59.0358 6.51098 C59.7272 6.40498 60.333 6.32217 60.8193 6.27205 C61.3245 6.21999 61.6444 6.20978 61.7952 6.22599 L61.87 5.53 L61.9448 4.83401 C61.6306 4.80022 61.1765 4.82783 60.6758 4.87943 C60.1562 4.93298 59.5244 5.01971 58.8236 5.12715 C57.4217 5.34207 55.7117 5.64492 54.0129 5.94572 C52.3092 6.24742 50.6167 6.54707 49.2342 6.75902 C48.5428 6.86502 47.937 6.94783 47.4507 6.99795 C46.9455 7.05001 46.6256 7.06022 46.4748 7.04401 L46.4 7.74 Z M61.87 5.53 L61.7948 6.22594 C61.9472 6.24242 62.271 6.32262 62.7776 6.48356 C63.2654 6.6385 63.8727 6.85162 64.5645 7.10581 C65.9479 7.61405 67.6418 8.27613 69.3452 8.94196 C71.0443 9.60613 72.7529 10.2741 74.1527 10.7883 C74.8524 11.0454 75.4818 11.2666 75.9985 11.4307 C76.4963 11.5889 76.9447 11.7124 77.2548 11.7459 L77.33 11.05 L77.4052 10.3541 C77.2528 10.3376 76.929 10.2574 76.4223 10.0964 C75.9346 9.9415 75.3273 9.72838 74.6355 9.47419 C73.2521 8.96595 71.5582 8.30387 69.8548 7.63804 C68.1557 6.97387 66.4471 6.30595 65.0473 5.79169 C64.3476 5.53463 63.7182 5.31338 63.2015 5.14926 C62.7037 4.99113 62.2553 4.86758 61.9452 4.83406 L61.87 5.53 Z M77.33 11.05 L77.2552 11.746 C77.568 11.7796 78.0209 11.7535 78.5218 11.7037 C79.0412 11.652 79.6729 11.5678 80.3737 11.4631 C81.7759 11.2536 83.4858 10.9574 85.1853 10.6608 C86.8895 10.3634 88.5831 10.0658 89.9674 9.85026 C90.6595 9.74252 91.2672 9.65646 91.7559 9.60145 C92.261 9.54458 92.5899 9.52702 92.7512 9.5383 L92.8 8.84 L92.8488 8.1417 C92.5452 8.12048 92.1 8.15386 91.5992 8.21023 C91.082 8.26847 90.452 8.35795 89.752 8.46692 C88.3519 8.68488 86.643 8.98531 84.9447 9.28167 C83.2417 9.57885 81.5491 9.87199 80.1669 10.0785 C79.4756 10.1817 78.8696 10.2622 78.3831 10.3106 C77.8782 10.3608 77.557 10.3704 77.4048 10.354 L77.33 11.05 Z M92.8 8.84 L92.7512 9.5383 C92.9156 9.54979 93.2483 9.6131 93.754 9.73848 C94.2438 9.85989 94.8525 10.0282 95.5449 10.2295 C96.9291 10.632 98.6236 11.1596 100.326 11.6919 C102.025 12.223 103.732 12.7589 105.13 13.1743 C106.496 13.5799 107.651 13.8975 108.195 13.956 L108.27 13.26 L108.345 12.564 C107.959 12.5225 106.948 12.2539 105.529 11.8323 C104.143 11.4205 102.448 10.8883 100.744 10.3556 C99.0439 9.82416 97.3359 9.29233 95.9358 8.88519 C95.2359 8.68168 94.6069 8.50753 94.0909 8.37961 C93.5908 8.25565 93.1494 8.16271 92.8488 8.1417 L92.8 8.84 Z M108.27 13.26 L108.195 13.9559 C108.737 14.0146 109.896 13.9495 111.261 13.8422 C112.659 13.7323 114.367 13.5692 116.067 13.4068 C117.77 13.2442 119.464 13.0823 120.849 12.9735 C122.267 12.862 123.272 12.8146 123.655 12.8559 L123.73 12.16 L123.805 11.4641 C123.263 11.4054 122.104 11.4705 120.739 11.5778 C119.341 11.6877 117.633 11.8508 115.933 12.0132 C114.23 12.1758 112.536 12.3377 111.151 12.4465 C109.733 12.558 108.728 12.6054 108.345 12.5641 L108.27 13.26 Z M123.73 12.16 L123.655 12.856 C124.041 12.8975 125.052 13.1661 126.471 13.5877 C127.857 13.9995 129.552 14.5317 131.256 15.0644 C132.956 15.5958 134.664 16.1277 136.064 16.5348 C136.764 16.7383 137.393 16.9125 137.909 17.0404 C138.409 17.1644 138.851 17.2573 139.151 17.2783 L139.2 16.58 L139.249 15.8817 C139.084 15.8702 138.752 15.8069 138.246 15.6815 C137.756 15.5601 137.147 15.3918 136.455 15.1905 C135.071 14.788 133.376 14.2604 131.674 13.7281 C129.975 13.197 128.268 12.6611 126.87 12.2457 C125.504 11.8401 124.349 11.5225 123.805 11.464 L123.73 12.16 Z M139.2 16.58 L139.151 17.2783 C139.452 17.2993 139.895 17.2687 140.396 17.2156 C140.913 17.1608 141.543 17.076 142.243 16.9721 C143.644 16.7643 145.352 16.4761 147.052 16.1876 C148.756 15.8985 150.451 15.609 151.836 15.3959 C153.256 15.1776 154.261 15.0551 154.644 15.0695 L154.67 14.37 L154.696 13.6705 C154.149 13.6499 152.988 13.8024 151.623 14.0122 C150.224 14.2273 148.517 14.519 146.818 14.8074 C145.115 15.0964 143.421 15.382 142.038 15.5873 C141.346 15.6899 140.738 15.7716 140.249 15.8234 C139.744 15.8769 139.413 15.8932 139.249 15.8817 L139.2 16.58 Z M154.67 14.37 L154.647 15.0696 C155.034 15.0822 156.046 15.2631 157.462 15.5609 C158.846 15.8522 160.541 16.2383 162.242 16.632 C165.61 17.4114 169.067 18.2375 170.033 18.3732 L170.13 17.68 L170.227 16.9868 C169.343 16.8625 165.995 16.0636 162.558 15.268 C160.856 14.8742 159.149 14.4853 157.75 14.1909 C156.383 13.9032 155.231 13.6878 154.693 13.6704 L154.67 14.37 Z M170.13 17.68 L170.029 18.3727 C170.989 18.5121 174.421 18.8088 177.813 19.0606 C181.193 19.3114 184.647 19.5264 185.626 19.4895 L185.6 18.79 L185.574 18.0905 C184.693 18.1236 181.342 17.9186 177.917 17.6644 C174.504 17.4112 171.131 17.1179 170.231 16.9873 L170.13 17.68 Z M185.6 18.79 L185.626 19.4895 C186.142 19.4701 187.273 19.3102 188.648 19.097 C190.043 18.8806 191.749 18.5992 193.447 18.3235 C195.149 18.0472 196.844 17.7763 198.228 17.5789 C199.645 17.377 200.656 17.2649 201.044 17.2795 L201.07 16.58 L201.096 15.8805 C200.554 15.8601 199.398 15.998 198.031 16.1929 C196.631 16.3925 194.924 16.6653 193.223 16.9416 C191.519 17.2183 189.822 17.4982 188.433 17.7136 C187.023 17.9323 185.988 18.0749 185.574 18.0905 L185.6 18.79 Z M201.07 16.58 L201.044 17.2795 C201.433 17.2942 202.447 17.4769 203.862 17.7751 C205.246 18.0669 206.941 18.4527 208.642 18.8458 C212.011 19.6241 215.467 20.4475 216.433 20.5832 L216.53 19.89 L216.627 19.1968 C215.743 19.0725 212.394 18.2759 208.958 17.4817 C207.256 17.0885 205.549 16.7 204.15 16.4052 C202.782 16.1169 201.632 15.9008 201.096 15.8805 L201.07 16.58 Z M216.53 19.89 L216.429 20.5827 C217.394 20.7228 221.068 20.9848 224.567 21.2184 C228.096 21.4541 231.486 21.6633 231.947 21.698 L232 21 L232.053 20.302 C231.584 20.2667 228.169 20.0559 224.66 19.8216 C221.122 19.5852 217.526 19.3272 216.631 19.1973 L216.53 19.89 Z" fill="#56b2ee"/><path transform="matrix(1 0 0 1 230.5 21.5)" d="M5 2.5 C5 3.88071 3.88071 5 2.5 5 C1.11929 5 0 3.88071 0 2.5 C0 1.11929 1.11929 0 2.5 0 C3.88071 0 5 1.11929 5 2.5 Z" fill="#56b2ee"/><path transform="matrix(1 0 0 1 230.5 21.5)" d="M5 2.5 L3.8 2.5 C3.8 3.21797 3.21797 3.8 2.5 3.8 L2.5 5 L2.5 6.2 C4.54345 6.2 6.2 4.54345 6.2 2.5 L5 2.5 Z M2.5 5 L2.5 3.8 C1.78203 3.8 1.2 3.21797 1.2 2.5 L0 2.5 L-1.2 2.5 C-1.2 4.54345 0.456546 6.2 2.5 6.2 L2.5 5 Z M0 2.5 L1.2 2.5 C1.2 1.78203 1.78203 1.2 2.5 1.2 L2.5 0 L2.5 -1.2 C0.456546 -1.2 -1.2 0.456546 -1.2 2.5 L0 2.5 Z M2.5 0 L2.5 1.2 C3.21797 1.2 3.8 1.78203 3.8 2.5 L5 2.5 L6.2 2.5 C6.2 0.456546 4.54345 -1.2 2.5 -1.2 L2.5 0 Z" fill="#ffffff"/></svg>
        <div style={{ position: "absolute", left: "855.5px", top: "20px", width: "238px", height: "57px", display: "flex", flexDirection: "column", gap: "8px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "107px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 600, color: "#1c1b20", letterSpacing: "-0.02em" }}>Fixed this month</p>
            </div>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "baseline", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "25px", lineHeight: "31px", fontFamily: "'Geist'", fontSize: "24px", fontWeight: 500, color: "#000000", letterSpacing: "-0.02em" }}>41</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "17px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#00be4e" }}>+9</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "47px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#989898" }}>vs July</p>
          </div>
        </div>
        <div style={{ position: "absolute", left: "855.5px", top: "88px", width: "232.8px", height: "14px", display: "flex", flexDirection: "row", gap: "2.4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #3fc77f 0%, #25bf6d 100%)" }} />
          <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #3fc77f 0%, #25bf6d 100%)" }} />
          <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #3fc77f 0%, #25bf6d 100%)" }} />
          <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #3fc77f 0%, #25bf6d 100%)" }} />
          <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #3fc77f 0%, #25bf6d 100%)" }} />
          <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #3fc77f 0%, #25bf6d 100%)" }} />
          <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #3fc77f 0%, #25bf6d 100%)" }} />
          <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #3fc77f 0%, #25bf6d 100%)" }} />
          <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #3fc77f 0%, #25bf6d 100%)" }} />
          <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #3fc77f 0%, #25bf6d 100%)" }} />
          <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #3fc77f 0%, #25bf6d 100%)" }} />
          <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #3fc77f 0%, #25bf6d 100%)" }} />
          <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #3fc77f 0%, #25bf6d 100%)" }} />
          <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #3fc77f 0%, #25bf6d 100%)" }} />
          <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #3fc77f 0%, #25bf6d 100%)" }} />
          <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #3fc77f 0%, #25bf6d 100%)" }} />
          <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #3fc77f 0%, #25bf6d 100%)" }} />
          <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #3fc77f 0%, #25bf6d 100%)" }} />
          <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #3fc77f 0%, #25bf6d 100%)" }} />
          <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #3fc77f 0%, #25bf6d 100%)" }} />
          <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #3fc77f 0%, #25bf6d 100%)" }} />
          <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #3fc77f 0%, #25bf6d 100%)" }} />
          <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #3fc77f 0%, #25bf6d 100%)" }} />
          <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #3fc77f 0%, #25bf6d 100%)" }} />
          <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #3fc77f 0%, #25bf6d 100%)" }} />
          <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #3fc77f 0%, #25bf6d 100%)" }} />
          <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #3fc77f 0%, #25bf6d 100%)" }} />
          <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #3fc77f 0%, #25bf6d 100%)" }} />
          <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #3fc77f 0%, #25bf6d 100%)" }} />
          <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #3fc77f 0%, #25bf6d 100%)" }} />
          <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #3fc77f 0%, #25bf6d 100%)" }} />
          <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #3fc77f 0%, #25bf6d 100%)" }} />
          <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #3fc77f 0%, #25bf6d 100%)" }} />
          <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #3fc77f 0%, #25bf6d 100%)" }} />
          <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(37, 191, 109, 0.16)" }} />
          <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(37, 191, 109, 0.16)" }} />
          <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(37, 191, 109, 0.16)" }} />
          <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(37, 191, 109, 0.16)" }} />
          <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(37, 191, 109, 0.16)" }} />
          <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(37, 191, 109, 0.16)" }} />
          <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(37, 191, 109, 0.16)" }} />
          <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(37, 191, 109, 0.16)" }} />
        </div>
        <div style={{ position: "absolute", left: "813px", top: "128px", width: "1px", height: "290px", background: "#e8e8e8" }} />
        <div style={{ position: "absolute", left: "0px", top: "418px", width: "1114px", height: "1px", background: "#ebebeb" }} />
        <div style={{ position: "absolute", left: "20px", top: "146px", width: "773px", height: "32px", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "138px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 600, color: "#1c1b20", letterSpacing: "-0.02em" }}>New verified findings</p>
          </div>
          <div style={{ flexShrink: 0, borderRadius: "9px", background: "#f2f2f2", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ height: "30px", flexShrink: 0, borderRadius: "8px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ededed", display: "flex", flexDirection: "row", padding: "1px 13px 1px 13px", gap: "6px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "33px", fontFamily: "'Inter'", fontSize: "14px", fontWeight: 500, color: "#fd7116", lineHeight: "1.149999976158142" }}>Daily</p>
            </div>
            <div style={{ height: "30px", flexShrink: 0, borderRadius: "8px", display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "6px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "49px", fontFamily: "'Inter'", fontSize: "14px", fontWeight: 500, color: "#a6a6a6", lineHeight: "1.149999976158142" }}>Weekly</p>
            </div>
            <div style={{ height: "30px", flexShrink: 0, borderRadius: "8px", display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "6px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "55px", fontFamily: "'Inter'", fontSize: "14px", fontWeight: 500, color: "#a6a6a6", lineHeight: "1.149999976158142" }}>Monthly</p>
            </div>
          </div>
        </div>
        <div style={{ position: "absolute", left: "20px", top: "186px", width: "241px", height: "16px", display: "flex", flexDirection: "row", gap: "16px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "9px", height: "9px", flexShrink: 0, borderRadius: "2.5px", background: "linear-gradient(180deg, #fc4b4e 0%, #fb3034 100%)", boxShadow: "inset 0 0 0 1px rgba(196, 37, 41, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.18), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "39px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#52525b" }}>Critical</p>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "9px", height: "9px", flexShrink: 0, borderRadius: "2.5px", background: "linear-gradient(180deg, #f79a49 0%, #f68b2e 100%)", boxShadow: "inset 0 0 0 1px rgba(192, 108, 36, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.18), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "26px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#52525b" }}>High</p>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "9px", height: "9px", flexShrink: 0, borderRadius: "2.5px", background: "linear-gradient(180deg, #906ef6 0%, #7f58f5 100%)", boxShadow: "inset 0 0 0 1px rgba(99, 69, 191, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.18), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "45px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#52525b" }}>Medium</p>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "9px", height: "9px", flexShrink: 0, borderRadius: "2.5px", background: "linear-gradient(180deg, #6cbcf0 0%, #56b2ee 100%)", boxShadow: "inset 0 0 0 1px rgba(67, 139, 186, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.18), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "23px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#52525b" }}>Low</p>
          </div>
        </div>
        <div style={{ position: "absolute", left: "20px", top: "210px", width: "773px", height: "200px" }}>
          <div style={{ position: "absolute", left: "553.9px", top: "8px", width: "20.57px", height: "166px", borderRadius: "8px", background: "rgba(246, 139, 46, 0.06)" }} />
          <svg style={{ position: "absolute", left: "36px", top: "8px", width: "737px", height: "1px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="737" height="1" viewBox="0 0 737 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0L737 0" fill="none" stroke="#ececee" strokeWidth="1" strokeDasharray="3 3" strokeLinecap="butt"/></svg>
          <p style={{ position: "absolute", left: "15px", top: "0px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "13px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#747474" }}>10</p>
          <svg style={{ position: "absolute", left: "36px", top: "91px", width: "737px", height: "1px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="737" height="1" viewBox="0 0 737 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0L737 0" fill="none" stroke="#ececee" strokeWidth="1" strokeDasharray="3 3" strokeLinecap="butt"/></svg>
          <p style={{ position: "absolute", left: "20px", top: "83px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "8px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#747474" }}>5</p>
          <div style={{ position: "absolute", left: "36px", top: "173.5px", width: "737px", height: "1px", background: "#e2e2e5" }} />
          <p style={{ position: "absolute", left: "20px", top: "166px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "8px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#747474" }}>0</p>
          <div style={{ position: "absolute", left: "42.28px", top: "157.4px", width: "12px", height: "16.6px", borderRadius: "4px", background: "linear-gradient(180deg, #f79a49 0%, #f68b2e 100%)", boxShadow: "inset 0 0 0 1px rgba(192, 108, 36, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.18), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
          <div style={{ position: "absolute", left: "42.28px", top: "140.8px", width: "12px", height: "14.4px", borderRadius: "4px", background: "linear-gradient(180deg, #906ef6 0%, #7f58f5 100%)", boxShadow: "inset 0 0 0 1px rgba(99, 69, 191, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.18), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
          <div style={{ position: "absolute", left: "66.85px", top: "140.8px", width: "12px", height: "33.2px", borderRadius: "4px", background: "linear-gradient(180deg, #906ef6 0%, #7f58f5 100%)", boxShadow: "inset 0 0 0 1px rgba(99, 69, 191, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.18), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
          <div style={{ position: "absolute", left: "66.85px", top: "124.2px", width: "12px", height: "14.4px", borderRadius: "4px", background: "linear-gradient(180deg, #d3ebfb 0%, #c6e5f9 100%)", boxShadow: "inset 0 0 0 1px rgba(82, 169, 226, 0.22), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.35), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
          <div style={{ position: "absolute", left: "91.42px", top: "157.4px", width: "12px", height: "16.6px", borderRadius: "4px", background: "linear-gradient(180deg, #fc4b4e 0%, #fb3034 100%)", boxShadow: "inset 0 0 0 1px rgba(196, 37, 41, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.18), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
          <div style={{ position: "absolute", left: "91.42px", top: "140.8px", width: "12px", height: "14.4px", borderRadius: "4px", background: "linear-gradient(180deg, #f79a49 0%, #f68b2e 100%)", boxShadow: "inset 0 0 0 1px rgba(192, 108, 36, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.18), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
          <div style={{ position: "absolute", left: "91.42px", top: "124.2px", width: "12px", height: "14.4px", borderRadius: "4px", background: "linear-gradient(180deg, #d3ebfb 0%, #c6e5f9 100%)", boxShadow: "inset 0 0 0 1px rgba(82, 169, 226, 0.22), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.35), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
          <div style={{ position: "absolute", left: "115.98px", top: "157.4px", width: "12px", height: "16.6px", borderRadius: "4px", background: "linear-gradient(180deg, #f79a49 0%, #f68b2e 100%)", boxShadow: "inset 0 0 0 1px rgba(192, 108, 36, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.18), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
          <div style={{ position: "absolute", left: "115.98px", top: "140.8px", width: "12px", height: "14.4px", borderRadius: "4px", background: "linear-gradient(180deg, #906ef6 0%, #7f58f5 100%)", boxShadow: "inset 0 0 0 1px rgba(99, 69, 191, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.18), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
          <div style={{ position: "absolute", left: "140.55px", top: "157.4px", width: "12px", height: "16.6px", borderRadius: "4px", background: "linear-gradient(180deg, #906ef6 0%, #7f58f5 100%)", boxShadow: "inset 0 0 0 1px rgba(99, 69, 191, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.18), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
          <div style={{ position: "absolute", left: "140.55px", top: "140.8px", width: "12px", height: "14.4px", borderRadius: "4px", background: "linear-gradient(180deg, #d3ebfb 0%, #c6e5f9 100%)", boxShadow: "inset 0 0 0 1px rgba(82, 169, 226, 0.22), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.35), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
          <div style={{ position: "absolute", left: "165.12px", top: "157.4px", width: "12px", height: "16.6px", borderRadius: "4px", background: "linear-gradient(180deg, #d3ebfb 0%, #c6e5f9 100%)", boxShadow: "inset 0 0 0 1px rgba(82, 169, 226, 0.22), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.35), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
          <div style={{ position: "absolute", left: "189.68px", top: "157.4px", width: "12px", height: "16.6px", borderRadius: "4px", background: "linear-gradient(180deg, #f79a49 0%, #f68b2e 100%)", boxShadow: "inset 0 0 0 1px rgba(192, 108, 36, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.18), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
          <div style={{ position: "absolute", left: "189.68px", top: "140.8px", width: "12px", height: "14.4px", borderRadius: "4px", background: "linear-gradient(180deg, #906ef6 0%, #7f58f5 100%)", boxShadow: "inset 0 0 0 1px rgba(99, 69, 191, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.18), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
          <div style={{ position: "absolute", left: "214.25px", top: "157.4px", width: "12px", height: "16.6px", borderRadius: "4px", background: "linear-gradient(180deg, #fc4b4e 0%, #fb3034 100%)", boxShadow: "inset 0 0 0 1px rgba(196, 37, 41, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.18), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
          <div style={{ position: "absolute", left: "214.25px", top: "140.8px", width: "12px", height: "14.4px", borderRadius: "4px", background: "linear-gradient(180deg, #f79a49 0%, #f68b2e 100%)", boxShadow: "inset 0 0 0 1px rgba(192, 108, 36, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.18), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
          <div style={{ position: "absolute", left: "214.25px", top: "107.6px", width: "12px", height: "31px", borderRadius: "4px", background: "linear-gradient(180deg, #906ef6 0%, #7f58f5 100%)", boxShadow: "inset 0 0 0 1px rgba(99, 69, 191, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.18), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
          <div style={{ position: "absolute", left: "238.82px", top: "140.8px", width: "12px", height: "33.2px", borderRadius: "4px", background: "linear-gradient(180deg, #f79a49 0%, #f68b2e 100%)", boxShadow: "inset 0 0 0 1px rgba(192, 108, 36, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.18), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
          <div style={{ position: "absolute", left: "238.82px", top: "124.2px", width: "12px", height: "14.4px", borderRadius: "4px", background: "linear-gradient(180deg, #906ef6 0%, #7f58f5 100%)", boxShadow: "inset 0 0 0 1px rgba(99, 69, 191, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.18), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
          <div style={{ position: "absolute", left: "238.82px", top: "107.6px", width: "12px", height: "14.4px", borderRadius: "4px", background: "linear-gradient(180deg, #d3ebfb 0%, #c6e5f9 100%)", boxShadow: "inset 0 0 0 1px rgba(82, 169, 226, 0.22), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.35), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
          <div style={{ position: "absolute", left: "263.38px", top: "157.4px", width: "12px", height: "16.6px", borderRadius: "4px", background: "linear-gradient(180deg, #906ef6 0%, #7f58f5 100%)", boxShadow: "inset 0 0 0 1px rgba(99, 69, 191, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.18), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
          <div style={{ position: "absolute", left: "263.38px", top: "140.8px", width: "12px", height: "14.4px", borderRadius: "4px", background: "linear-gradient(180deg, #d3ebfb 0%, #c6e5f9 100%)", boxShadow: "inset 0 0 0 1px rgba(82, 169, 226, 0.22), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.35), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
          <div style={{ position: "absolute", left: "287.95px", top: "157.4px", width: "12px", height: "16.6px", borderRadius: "4px", background: "linear-gradient(180deg, #f79a49 0%, #f68b2e 100%)", boxShadow: "inset 0 0 0 1px rgba(192, 108, 36, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.18), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
          <div style={{ position: "absolute", left: "287.95px", top: "140.8px", width: "12px", height: "14.4px", borderRadius: "4px", background: "linear-gradient(180deg, #d3ebfb 0%, #c6e5f9 100%)", boxShadow: "inset 0 0 0 1px rgba(82, 169, 226, 0.22), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.35), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
          <div style={{ position: "absolute", left: "312.52px", top: "157.4px", width: "12px", height: "16.6px", borderRadius: "4px", background: "linear-gradient(180deg, #906ef6 0%, #7f58f5 100%)", boxShadow: "inset 0 0 0 1px rgba(99, 69, 191, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.18), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
          <div style={{ position: "absolute", left: "337.08px", top: "157.4px", width: "12px", height: "16.6px", borderRadius: "4px", background: "linear-gradient(180deg, #f79a49 0%, #f68b2e 100%)", boxShadow: "inset 0 0 0 1px rgba(192, 108, 36, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.18), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
          <div style={{ position: "absolute", left: "337.08px", top: "124.2px", width: "12px", height: "31px", borderRadius: "4px", background: "linear-gradient(180deg, #906ef6 0%, #7f58f5 100%)", boxShadow: "inset 0 0 0 1px rgba(99, 69, 191, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.18), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
          <div style={{ position: "absolute", left: "361.65px", top: "157.4px", width: "12px", height: "16.6px", borderRadius: "4px", background: "linear-gradient(180deg, #fc4b4e 0%, #fb3034 100%)", boxShadow: "inset 0 0 0 1px rgba(196, 37, 41, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.18), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
          <div style={{ position: "absolute", left: "361.65px", top: "140.8px", width: "12px", height: "14.4px", borderRadius: "4px", background: "linear-gradient(180deg, #f79a49 0%, #f68b2e 100%)", boxShadow: "inset 0 0 0 1px rgba(192, 108, 36, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.18), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
          <div style={{ position: "absolute", left: "361.65px", top: "124.2px", width: "12px", height: "14.4px", borderRadius: "4px", background: "linear-gradient(180deg, #906ef6 0%, #7f58f5 100%)", boxShadow: "inset 0 0 0 1px rgba(99, 69, 191, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.18), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
          <div style={{ position: "absolute", left: "361.65px", top: "107.6px", width: "12px", height: "14.4px", borderRadius: "4px", background: "linear-gradient(180deg, #d3ebfb 0%, #c6e5f9 100%)", boxShadow: "inset 0 0 0 1px rgba(82, 169, 226, 0.22), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.35), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
          <div style={{ position: "absolute", left: "386.22px", top: "157.4px", width: "12px", height: "16.6px", borderRadius: "4px", background: "linear-gradient(180deg, #906ef6 0%, #7f58f5 100%)", boxShadow: "inset 0 0 0 1px rgba(99, 69, 191, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.18), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
          <div style={{ position: "absolute", left: "386.22px", top: "140.8px", width: "12px", height: "14.4px", borderRadius: "4px", background: "linear-gradient(180deg, #d3ebfb 0%, #c6e5f9 100%)", boxShadow: "inset 0 0 0 1px rgba(82, 169, 226, 0.22), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.35), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
          <div style={{ position: "absolute", left: "410.78px", top: "157.4px", width: "12px", height: "16.6px", borderRadius: "4px", background: "linear-gradient(180deg, #f79a49 0%, #f68b2e 100%)", boxShadow: "inset 0 0 0 1px rgba(192, 108, 36, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.18), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
          <div style={{ position: "absolute", left: "410.78px", top: "140.8px", width: "12px", height: "14.4px", borderRadius: "4px", background: "linear-gradient(180deg, #d3ebfb 0%, #c6e5f9 100%)", boxShadow: "inset 0 0 0 1px rgba(82, 169, 226, 0.22), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.35), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
          <div style={{ position: "absolute", left: "435.35px", top: "157.4px", width: "12px", height: "16.6px", borderRadius: "4px", background: "linear-gradient(180deg, #f79a49 0%, #f68b2e 100%)", boxShadow: "inset 0 0 0 1px rgba(192, 108, 36, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.18), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
          <div style={{ position: "absolute", left: "435.35px", top: "124.2px", width: "12px", height: "31px", borderRadius: "4px", background: "linear-gradient(180deg, #906ef6 0%, #7f58f5 100%)", boxShadow: "inset 0 0 0 1px rgba(99, 69, 191, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.18), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
          <div style={{ position: "absolute", left: "459.92px", top: "157.4px", width: "12px", height: "16.6px", borderRadius: "4px", background: "linear-gradient(180deg, #906ef6 0%, #7f58f5 100%)", boxShadow: "inset 0 0 0 1px rgba(99, 69, 191, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.18), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
          <div style={{ position: "absolute", left: "459.92px", top: "140.8px", width: "12px", height: "14.4px", borderRadius: "4px", background: "linear-gradient(180deg, #d3ebfb 0%, #c6e5f9 100%)", boxShadow: "inset 0 0 0 1px rgba(82, 169, 226, 0.22), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.35), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
          <div style={{ position: "absolute", left: "484.48px", top: "157.4px", width: "12px", height: "16.6px", borderRadius: "4px", background: "linear-gradient(180deg, #d3ebfb 0%, #c6e5f9 100%)", boxShadow: "inset 0 0 0 1px rgba(82, 169, 226, 0.22), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.35), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
          <div style={{ position: "absolute", left: "509.05px", top: "157.4px", width: "12px", height: "16.6px", borderRadius: "4px", background: "linear-gradient(180deg, #f79a49 0%, #f68b2e 100%)", boxShadow: "inset 0 0 0 1px rgba(192, 108, 36, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.18), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
          <div style={{ position: "absolute", left: "509.05px", top: "140.8px", width: "12px", height: "14.4px", borderRadius: "4px", background: "linear-gradient(180deg, #906ef6 0%, #7f58f5 100%)", boxShadow: "inset 0 0 0 1px rgba(99, 69, 191, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.18), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
          <div style={{ position: "absolute", left: "533.62px", top: "140.8px", width: "12px", height: "33.2px", borderRadius: "4px", background: "linear-gradient(180deg, #f79a49 0%, #f68b2e 100%)", boxShadow: "inset 0 0 0 1px rgba(192, 108, 36, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.18), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
          <div style={{ position: "absolute", left: "533.62px", top: "124.2px", width: "12px", height: "14.4px", borderRadius: "4px", background: "linear-gradient(180deg, #906ef6 0%, #7f58f5 100%)", boxShadow: "inset 0 0 0 1px rgba(99, 69, 191, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.18), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
          <div style={{ position: "absolute", left: "533.62px", top: "107.6px", width: "12px", height: "14.4px", borderRadius: "4px", background: "linear-gradient(180deg, #d3ebfb 0%, #c6e5f9 100%)", boxShadow: "inset 0 0 0 1px rgba(82, 169, 226, 0.22), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.35), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
          <div style={{ position: "absolute", left: "558.18px", top: "140.8px", width: "12px", height: "33.2px", borderRadius: "4px", background: "linear-gradient(180deg, #fc4b4e 0%, #fb3034 100%)", boxShadow: "inset 0 0 0 1px rgba(196, 37, 41, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.18), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
          <div style={{ position: "absolute", left: "558.18px", top: "91px", width: "12px", height: "47.6px", borderRadius: "4px", background: "linear-gradient(180deg, #f79a49 0%, #f68b2e 100%)", boxShadow: "inset 0 0 0 1px rgba(192, 108, 36, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.18), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
          <div style={{ position: "absolute", left: "558.18px", top: "41.2px", width: "12px", height: "47.6px", borderRadius: "4px", background: "linear-gradient(180deg, #906ef6 0%, #7f58f5 100%)", boxShadow: "inset 0 0 0 1px rgba(99, 69, 191, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.18), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
          <div style={{ position: "absolute", left: "558.18px", top: "24.6px", width: "12px", height: "14.4px", borderRadius: "4px", background: "linear-gradient(180deg, #d3ebfb 0%, #c6e5f9 100%)", boxShadow: "inset 0 0 0 1px rgba(82, 169, 226, 0.22), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.35), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
          <div style={{ position: "absolute", left: "582.75px", top: "157.4px", width: "12px", height: "16.6px", borderRadius: "4px", background: "linear-gradient(180deg, #f79a49 0%, #f68b2e 100%)", boxShadow: "inset 0 0 0 1px rgba(192, 108, 36, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.18), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
          <div style={{ position: "absolute", left: "582.75px", top: "124.2px", width: "12px", height: "31px", borderRadius: "4px", background: "linear-gradient(180deg, #906ef6 0%, #7f58f5 100%)", boxShadow: "inset 0 0 0 1px rgba(99, 69, 191, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.18), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
          <div style={{ position: "absolute", left: "607.32px", top: "157.4px", width: "12px", height: "16.6px", borderRadius: "4px", background: "linear-gradient(180deg, #906ef6 0%, #7f58f5 100%)", boxShadow: "inset 0 0 0 1px rgba(99, 69, 191, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.18), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
          <div style={{ position: "absolute", left: "607.32px", top: "140.8px", width: "12px", height: "14.4px", borderRadius: "4px", background: "linear-gradient(180deg, #d3ebfb 0%, #c6e5f9 100%)", boxShadow: "inset 0 0 0 1px rgba(82, 169, 226, 0.22), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.35), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
          <div style={{ position: "absolute", left: "631.88px", top: "157.4px", width: "12px", height: "16.6px", borderRadius: "4px", background: "linear-gradient(180deg, #f79a49 0%, #f68b2e 100%)", boxShadow: "inset 0 0 0 1px rgba(192, 108, 36, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.18), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
          <div style={{ position: "absolute", left: "631.88px", top: "140.8px", width: "12px", height: "14.4px", borderRadius: "4px", background: "linear-gradient(180deg, #d3ebfb 0%, #c6e5f9 100%)", boxShadow: "inset 0 0 0 1px rgba(82, 169, 226, 0.22), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.35), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
          <div style={{ position: "absolute", left: "656.45px", top: "157.4px", width: "12px", height: "16.6px", borderRadius: "4px", background: "linear-gradient(180deg, #f79a49 0%, #f68b2e 100%)", boxShadow: "inset 0 0 0 1px rgba(192, 108, 36, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.18), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
          <div style={{ position: "absolute", left: "656.45px", top: "140.8px", width: "12px", height: "14.4px", borderRadius: "4px", background: "linear-gradient(180deg, #906ef6 0%, #7f58f5 100%)", boxShadow: "inset 0 0 0 1px rgba(99, 69, 191, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.18), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
          <div style={{ position: "absolute", left: "681.02px", top: "157.4px", width: "12px", height: "16.6px", borderRadius: "4px", background: "linear-gradient(180deg, #fc4b4e 0%, #fb3034 100%)", boxShadow: "inset 0 0 0 1px rgba(196, 37, 41, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.18), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
          <div style={{ position: "absolute", left: "681.02px", top: "124.2px", width: "12px", height: "31px", borderRadius: "4px", background: "linear-gradient(180deg, #906ef6 0%, #7f58f5 100%)", boxShadow: "inset 0 0 0 1px rgba(99, 69, 191, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.18), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
          <div style={{ position: "absolute", left: "705.58px", top: "157.4px", width: "12px", height: "16.6px", borderRadius: "4px", background: "linear-gradient(180deg, #f79a49 0%, #f68b2e 100%)", boxShadow: "inset 0 0 0 1px rgba(192, 108, 36, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.18), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
          <div style={{ position: "absolute", left: "705.58px", top: "140.8px", width: "12px", height: "14.4px", borderRadius: "4px", background: "linear-gradient(180deg, #906ef6 0%, #7f58f5 100%)", boxShadow: "inset 0 0 0 1px rgba(99, 69, 191, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.18), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
          <div style={{ position: "absolute", left: "705.58px", top: "124.2px", width: "12px", height: "14.4px", borderRadius: "4px", background: "linear-gradient(180deg, #d3ebfb 0%, #c6e5f9 100%)", boxShadow: "inset 0 0 0 1px rgba(82, 169, 226, 0.22), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.35), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
          <div style={{ position: "absolute", left: "730.15px", top: "157.4px", width: "12px", height: "16.6px", borderRadius: "4px", background: "linear-gradient(180deg, #906ef6 0%, #7f58f5 100%)", boxShadow: "inset 0 0 0 1px rgba(99, 69, 191, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.18), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
          <div style={{ position: "absolute", left: "730.15px", top: "140.8px", width: "12px", height: "14.4px", borderRadius: "4px", background: "linear-gradient(180deg, #d3ebfb 0%, #c6e5f9 100%)", boxShadow: "inset 0 0 0 1px rgba(82, 169, 226, 0.22), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.35), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
          <div style={{ position: "absolute", left: "754.72px", top: "157.4px", width: "12px", height: "16.6px", borderRadius: "4px", background: "linear-gradient(180deg, #fc4b4e 0%, #fb3034 100%)", boxShadow: "inset 0 0 0 1px rgba(196, 37, 41, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.18), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
          <div style={{ position: "absolute", left: "754.72px", top: "140.8px", width: "12px", height: "14.4px", borderRadius: "4px", background: "linear-gradient(180deg, #f79a49 0%, #f68b2e 100%)", boxShadow: "inset 0 0 0 1px rgba(192, 108, 36, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.18), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
          <div style={{ position: "absolute", left: "754.72px", top: "124.2px", width: "12px", height: "14.4px", borderRadius: "4px", background: "linear-gradient(180deg, #d3ebfb 0%, #c6e5f9 100%)", boxShadow: "inset 0 0 0 1px rgba(82, 169, 226, 0.22), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.35), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
          <p style={{ position: "absolute", left: "30.28px", top: "184px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "36px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#747474" }}>Jul 22</p>
          <p style={{ position: "absolute", left: "202.25px", top: "184px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "36px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#747474" }}>Jul 29</p>
          <p style={{ position: "absolute", left: "375.72px", top: "184px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "33px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#747474" }}>Aug 5</p>
          <p style={{ position: "absolute", left: "545.18px", top: "184px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "38px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#1f1f22" }}>Aug 12</p>
          <p style={{ position: "absolute", left: "733px", top: "184px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "40px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#747474" }}>Aug 20</p>
          <div style={{ position: "absolute", left: "501.18px", top: "-3.4px", width: "126px", height: "20px", borderRadius: "6px", background: "#1f1f22", boxShadow: "0px 2px 6px 0px rgba(0, 0, 0, 0.12)", display: "flex", flexDirection: "row", padding: "3px 7px 3px 7px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "112px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "11px", fontWeight: 500, color: "#ffffff" }}>AI pentest run · 9 new</p>
          </div>
          <svg style={{ position: "absolute", left: "560.18px", top: "16.1px", width: "8px", height: "4px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="8" height="4" viewBox="0 0 8 4" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0 L8 0 L4 4 L0 0 Z" fill="#1f1f22"/></svg>
        </div>
        <div style={{ position: "absolute", left: "833px", top: "146px", width: "261px", height: "18px", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "72px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 600, color: "#1c1b20", letterSpacing: "-0.02em" }}>By severity</p>
          </div>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "54px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#4f4f51" }}>24 open</p>
        </div>
        <div style={{ position: "absolute", left: "833px", top: "186px", width: "261px", height: "20px", display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "76px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <svg style={{ width: "6px", height: "6px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M6 3 C6 4.65685 4.65685 6 3 6 C1.34315 6 0 4.65685 0 3 C0 1.34315 1.34315 0 3 0 C4.65685 0 6 1.34315 6 3 Z" fill="#fb3034"/></svg>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "47px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#737373" }}>Critical</p>
            </div>
          </div>
          <div style={{ width: "175px", height: "20px", flexShrink: 0, position: "relative" }}>
            <div style={{ position: "absolute", left: "0px", top: "0px", width: "94.22px", height: "18px", borderRadius: "6px", background: "rgba(251, 48, 52, 0.1)", display: "flex", flexDirection: "row", padding: "0px 9px 0px 9px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "8px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#dd2a2e" }}>4</p>
            </div>
            <div style={{ position: "absolute", left: "0px", top: "0px", width: "48.22px", height: "18px", borderRadius: "6px", background: "linear-gradient(180deg, #fc4b4e 0%, #fb3034 100%)", boxShadow: "inset 0 0 0 1px rgba(196, 37, 41, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.18), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
          </div>
        </div>
        <div style={{ position: "absolute", left: "833px", top: "222px", width: "261px", height: "20px", display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "76px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <svg style={{ width: "6px", height: "6px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M6 3 C6 4.65685 4.65685 6 3 6 C1.34315 6 0 4.65685 0 3 C0 1.34315 1.34315 0 3 0 C4.65685 0 6 1.34315 6 3 Z" fill="#f68b2e"/></svg>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "30px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#737373" }}>High</p>
            </div>
          </div>
          <div style={{ width: "175px", height: "20px", flexShrink: 0, position: "relative" }}>
            <div style={{ position: "absolute", left: "0px", top: "0px", width: "142.44px", height: "18px", borderRadius: "6px", background: "rgba(246, 139, 46, 0.1)", display: "flex", flexDirection: "row", padding: "0px 9px 0px 9px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "8px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#d87a28" }}>8</p>
            </div>
            <div style={{ position: "absolute", left: "0px", top: "0px", width: "96.44px", height: "18px", borderRadius: "6px", background: "linear-gradient(180deg, #f79a49 0%, #f68b2e 100%)", boxShadow: "inset 0 0 0 1px rgba(192, 108, 36, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.18), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
          </div>
        </div>
        <div style={{ position: "absolute", left: "833px", top: "258px", width: "261px", height: "20px", display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "76px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <svg style={{ width: "6px", height: "6px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M6 3 C6 4.65685 4.65685 6 3 6 C1.34315 6 0 4.65685 0 3 C0 1.34315 1.34315 0 3 0 C4.65685 0 6 1.34315 6 3 Z" fill="#7f58f5"/></svg>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "53px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#737373" }}>Medium</p>
            </div>
          </div>
          <div style={{ width: "175px", height: "20px", flexShrink: 0, position: "relative" }}>
            <div style={{ position: "absolute", left: "0px", top: "0px", width: "154.5px", height: "18px", borderRadius: "6px", background: "rgba(127, 88, 245, 0.1)", display: "flex", flexDirection: "row", padding: "0px 9px 0px 9px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "8px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#704dd8" }}>9</p>
            </div>
            <div style={{ position: "absolute", left: "0px", top: "0px", width: "108.5px", height: "18px", borderRadius: "6px", background: "linear-gradient(180deg, #906ef6 0%, #7f58f5 100%)", boxShadow: "inset 0 0 0 1px rgba(99, 69, 191, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.18), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
          </div>
        </div>
        <div style={{ position: "absolute", left: "833px", top: "294px", width: "261px", height: "20px", display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "76px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <svg style={{ width: "6px", height: "6px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M6 3 C6 4.65685 4.65685 6 3 6 C1.34315 6 0 4.65685 0 3 C0 1.34315 1.34315 0 3 0 C4.65685 0 6 1.34315 6 3 Z" fill="#56b2ee"/></svg>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "28px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#737373" }}>Low</p>
            </div>
          </div>
          <div style={{ width: "175px", height: "20px", flexShrink: 0, position: "relative" }}>
            <div style={{ position: "absolute", left: "0px", top: "0px", width: "82.17px", height: "18px", borderRadius: "6px", background: "rgba(86, 178, 238, 0.1)", display: "flex", flexDirection: "row", padding: "0px 9px 0px 9px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "8px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#4c9dd1" }}>3</p>
            </div>
            <div style={{ position: "absolute", left: "0px", top: "0px", width: "36.17px", height: "18px", borderRadius: "6px", background: "linear-gradient(180deg, #6cbcf0 0%, #56b2ee 100%)", boxShadow: "inset 0 0 0 1px rgba(67, 139, 186, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.18), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
          </div>
        </div>
        <div style={{ position: "absolute", left: "833px", top: "346px", width: "261px", height: "32px", display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ width: "261px", height: "10px", flexShrink: 0, position: "relative" }}>
            <div style={{ position: "absolute", left: "0px", top: "0px", width: "239.25px", height: "10px", borderRadius: "3px", background: "linear-gradient(90deg, #71d5a0 0%, #25bf6d 100%)", boxShadow: "inset 0 0 0 1px rgba(29, 149, 85, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.18), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
            <svg style={{ position: "absolute", left: "243.25px", top: "0px", width: "17.25px", height: "10px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="17.25" height="10" viewBox="0 0 17.25 10" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0 L-0.5 0 L-0.5 10 L0 10 L0.5 10 L0.5 0 L0 0 Z M3.45 0 L2.95 0 L2.95 10 L3.45 10 L3.95 10 L3.95 0 L3.45 0 Z M6.9 0 L6.4 0 L6.4 10 L6.9 10 L7.4 10 L7.4 0 L6.9 0 Z M10.35 0 L9.85 0 L9.85 10 L10.35 10 L10.85 10 L10.85 0 L10.35 0 Z M13.8 0 L13.3 0 L13.3 10 L13.8 10 L14.3 10 L14.3 0 L13.8 0 Z M17.25 0 L16.75 0 L16.75 10 L17.25 10 L17.75 10 L17.75 0 L17.25 0 Z" fill="#d4d4d8"/></svg>
          </div>
          <div style={{ width: "261px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "79px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#1f1f22" }}>22 within SLA</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "62px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#747474" }}>2 breached</p>
          </div>
        </div>
        <div style={{ position: "absolute", left: "20px", top: "438px", width: "1074px", height: "34px", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, borderRadius: "9px", background: "#f2f2f2", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ height: "30px", flexShrink: 0, borderRadius: "8px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ededed", display: "flex", flexDirection: "row", padding: "1px 13px 1px 13px", gap: "6px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "17px", fontFamily: "'Inter'", fontSize: "14px", fontWeight: 500, color: "#fd7116", lineHeight: "1.149999976158142" }}>All</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "16px", lineHeight: "15px", fontFamily: "'Inter'", fontSize: "12px", fontWeight: 500, color: "#fe9c5c" }}>24</p>
            </div>
            <div style={{ height: "30px", flexShrink: 0, borderRadius: "8px", display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "6px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "48px", fontFamily: "'Inter'", fontSize: "14px", fontWeight: 500, color: "#a6a6a6", lineHeight: "1.149999976158142" }}>Critical</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "8px", lineHeight: "15px", fontFamily: "'Inter'", fontSize: "12px", fontWeight: 500, color: "#a6a6a6" }}>4</p>
            </div>
            <div style={{ height: "30px", flexShrink: 0, borderRadius: "8px", display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "6px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "31px", fontFamily: "'Inter'", fontSize: "14px", fontWeight: 500, color: "#a6a6a6", lineHeight: "1.149999976158142" }}>High</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "8px", lineHeight: "15px", fontFamily: "'Inter'", fontSize: "12px", fontWeight: 500, color: "#a6a6a6" }}>8</p>
            </div>
            <div style={{ height: "30px", flexShrink: 0, borderRadius: "8px", display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "6px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "54px", fontFamily: "'Inter'", fontSize: "14px", fontWeight: 500, color: "#a6a6a6", lineHeight: "1.149999976158142" }}>Medium</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "8px", lineHeight: "15px", fontFamily: "'Inter'", fontSize: "12px", fontWeight: 500, color: "#a6a6a6" }}>9</p>
            </div>
            <div style={{ height: "30px", flexShrink: 0, borderRadius: "8px", display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "6px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "28px", fontFamily: "'Inter'", fontSize: "14px", fontWeight: 500, color: "#a6a6a6", lineHeight: "1.149999976158142" }}>Low</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "8px", lineHeight: "15px", fontFamily: "'Inter'", fontSize: "12px", fontWeight: 500, color: "#a6a6a6" }}>3</p>
            </div>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "220px", height: "34px", flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e8e8e8, 0px 1px 2px 0px rgba(79, 79, 79, 0.12)", display: "flex", flexDirection: "row", padding: "1px 9px 1px 9px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <Search size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#979797", display: "block" }} />
              <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#979797" }}>Search findings…</p>
            </div>
            <div style={{ height: "34px", flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e5e5e5", display: "flex", flexDirection: "row", padding: "1px 11px 1px 11px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <AdjustmentsHorizontal size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "40px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#6c6c6c" }}>Filters</p>
            </div>
            <div style={{ height: "34px", flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e5e5e5", display: "flex", flexDirection: "row", padding: "1px 11px 1px 11px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <SortDescending size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "53px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#6c6c6c" }}>Severity</p>
              <ChevronDown size={14} strokeWidth={1.51} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
            </div>
          </div>
        </div>
        <div style={{ position: "absolute", left: "20px", top: "486px", width: "1074px", height: "326px", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ width: "1074px", height: "32px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #ebebeb", display: "flex", flexDirection: "row", padding: "0px 0px 1px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "64px", height: "32px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "12px", lineHeight: "15px", fontFamily: "'Inter'", fontSize: "12px", fontWeight: 500, color: "#a6a6a6" }}>ID</p>
            </div>
            <div style={{ width: "300px", height: "32px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "43px", lineHeight: "15px", fontFamily: "'Inter'", fontSize: "12px", fontWeight: 500, color: "#a6a6a6" }}>Finding</p>
            </div>
            <div style={{ width: "110px", height: "32px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "48px", lineHeight: "15px", fontFamily: "'Inter'", fontSize: "12px", fontWeight: 500, color: "#a6a6a6" }}>Severity</p>
            </div>
            <div style={{ width: "170px", height: "32px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "33px", lineHeight: "15px", fontFamily: "'Inter'", fontSize: "12px", fontWeight: 500, color: "#a6a6a6" }}>Asset</p>
            </div>
            <div style={{ width: "136px", height: "32px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "41px", lineHeight: "15px", fontFamily: "'Inter'", fontSize: "12px", fontWeight: 500, color: "#a6a6a6" }}>Source</p>
            </div>
            <div style={{ width: "150px", height: "32px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "38px", lineHeight: "15px", fontFamily: "'Inter'", fontSize: "12px", fontWeight: 500, color: "#a6a6a6" }}>Status</p>
            </div>
            <div style={{ width: "80px", height: "32px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "38px", lineHeight: "15px", fontFamily: "'Inter'", fontSize: "12px", fontWeight: 500, color: "#a6a6a6" }}>Owner</p>
            </div>
            <div style={{ width: "64px", height: "32px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "23px", lineHeight: "15px", fontFamily: "'Inter'", fontSize: "12px", fontWeight: 500, color: "#a6a6a6" }}>Age</p>
            </div>
          </div>
          <div style={{ width: "1074px", height: "42px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #ebebeb", display: "flex", flexDirection: "row", padding: "0px 0px 1px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "64px", height: "41px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "31px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#222222" }}>#128</p>
            </div>
            <div style={{ width: "300px", height: "41px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "151px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 600, color: "#222222" }}>Invoice access control</p>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "229px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#737373" }}>{"GET /v2/invoices/{id} returns any tenant"}</p>
                </div>
              </div>
            </div>
            <div style={{ width: "110px", height: "41px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ height: "22px", flexShrink: 0, borderRadius: "6px", background: "rgba(251, 48, 52, 0.08)", display: "flex", flexDirection: "row", padding: "0px 6px 0px 6px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <svg style={{ width: "6px", height: "6px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M6 3 C6 4.65685 4.65685 6 3 6 C1.34315 6 0 4.65685 0 3 C0 1.34315 1.34315 0 3 0 C4.65685 0 6 1.34315 6 3 Z" fill="#fb3034"/></svg>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "40px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#fb3034", letterSpacing: "-0.01em" }}>Critical</p>
              </div>
            </div>
            <div style={{ width: "170px", height: "41px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <GitBranch size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#737373", display: "block" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "66px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#737373" }}>billing-api</p>
              </div>
            </div>
            <div style={{ width: "136px", height: "41px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <Brain size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#737373", display: "block" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "68px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#737373" }}>AI pentest</p>
              </div>
            </div>
            <div style={{ width: "150px", height: "41px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ height: "26px", flexShrink: 0, borderRadius: "6px", background: "rgba(0, 190, 78, 0.08)", display: "flex", flexDirection: "row", padding: "0px 6px 0px 6px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "59px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#00be4e", letterSpacing: "-0.01em" }}>Fix ready</p>
              </div>
            </div>
            <div style={{ width: "80px", height: "41px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "24px", height: "24px", flexShrink: 0, borderRadius: "999px", background: "#dfeffc", boxShadow: "inset 0 0 0 1px #ffffff", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "14px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 500, color: "#125b97" }}>SC</p>
              </div>
            </div>
            <div style={{ width: "64px", height: "41px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "18px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#737373" }}>2d</p>
            </div>
          </div>
          <div style={{ width: "1074px", height: "42px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #ebebeb", display: "flex", flexDirection: "row", padding: "0px 0px 1px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "64px", height: "41px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "28px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#222222" }}>#131</p>
            </div>
            <div style={{ width: "300px", height: "41px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "161px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 600, color: "#222222" }}>Stripe live key in CI logs</p>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "172px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#737373" }}>build #4821 · payments-worker</p>
                </div>
              </div>
            </div>
            <div style={{ width: "110px", height: "41px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ height: "22px", flexShrink: 0, borderRadius: "6px", background: "rgba(251, 48, 52, 0.08)", display: "flex", flexDirection: "row", padding: "0px 6px 0px 6px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <svg style={{ width: "6px", height: "6px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M6 3 C6 4.65685 4.65685 6 3 6 C1.34315 6 0 4.65685 0 3 C0 1.34315 1.34315 0 3 0 C4.65685 0 6 1.34315 6 3 Z" fill="#fb3034"/></svg>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "40px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#fb3034", letterSpacing: "-0.01em" }}>Critical</p>
              </div>
            </div>
            <div style={{ width: "170px", height: "41px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <GitBranch size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#737373", display: "block" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "116px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#737373" }}>payments-worker</p>
              </div>
            </div>
            <div style={{ width: "136px", height: "41px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <Key size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#737373", display: "block" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "51px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#737373" }}>Secrets</p>
              </div>
            </div>
            <div style={{ width: "150px", height: "41px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ height: "26px", flexShrink: 0, borderRadius: "6px", background: "rgba(27, 140, 232, 0.08)", display: "flex", flexDirection: "row", padding: "0px 6px 0px 6px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "56px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#1b8ce8", letterSpacing: "-0.01em" }}>Rotating</p>
              </div>
            </div>
            <div style={{ width: "80px", height: "41px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "24px", height: "24px", flexShrink: 0, borderRadius: "999px", background: "#ede8fe", boxShadow: "inset 0 0 0 1px #ffffff", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "16px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 500, color: "#53399f" }}>MK</p>
              </div>
            </div>
            <div style={{ width: "64px", height: "41px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "18px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#737373" }}>6h</p>
            </div>
          </div>
          <div style={{ width: "1074px", height: "42px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #ebebeb", display: "flex", flexDirection: "row", padding: "0px 0px 1px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "64px", height: "41px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "31px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#222222" }}>#125</p>
            </div>
            <div style={{ width: "300px", height: "41px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "154px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 600, color: "#222222" }}>SQL injection in search</p>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "164px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#737373" }}>q= parameter, catalog search</p>
                </div>
              </div>
            </div>
            <div style={{ width: "110px", height: "41px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ height: "22px", flexShrink: 0, borderRadius: "6px", background: "rgba(251, 48, 52, 0.08)", display: "flex", flexDirection: "row", padding: "0px 6px 0px 6px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <svg style={{ width: "6px", height: "6px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M6 3 C6 4.65685 4.65685 6 3 6 C1.34315 6 0 4.65685 0 3 C0 1.34315 1.34315 0 3 0 C4.65685 0 6 1.34315 6 3 Z" fill="#fb3034"/></svg>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "40px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#fb3034", letterSpacing: "-0.01em" }}>Critical</p>
              </div>
            </div>
            <div style={{ width: "170px", height: "41px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <GitBranch size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#737373", display: "block" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "75px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#737373" }}>catalog-api</p>
              </div>
            </div>
            <div style={{ width: "136px", height: "41px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <Brain size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#737373", display: "block" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "68px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#737373" }}>AI pentest</p>
              </div>
            </div>
            <div style={{ width: "150px", height: "41px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ height: "26px", flexShrink: 0, borderRadius: "6px", background: "rgba(227, 160, 68, 0.08)", display: "flex", flexDirection: "row", padding: "0px 6px 0px 6px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "99px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#e3a044", letterSpacing: "-0.01em" }}>Action required</p>
              </div>
            </div>
            <div style={{ width: "80px", height: "41px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "13px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#a6a6a6" }}>—</p>
            </div>
            <div style={{ width: "64px", height: "41px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "18px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#737373" }}>3d</p>
            </div>
          </div>
          <div style={{ width: "1074px", height: "42px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #ebebeb", display: "flex", flexDirection: "row", padding: "0px 0px 1px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "64px", height: "41px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "31px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#222222" }}>#122</p>
            </div>
            <div style={{ width: "300px", height: "41px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "157px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 600, color: "#222222" }}>Path traversal in export</p>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "114px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#737373" }}>../ in report filename</p>
                </div>
              </div>
            </div>
            <div style={{ width: "110px", height: "41px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ height: "22px", flexShrink: 0, borderRadius: "6px", background: "rgba(251, 48, 52, 0.08)", display: "flex", flexDirection: "row", padding: "0px 6px 0px 6px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <svg style={{ width: "6px", height: "6px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M6 3 C6 4.65685 4.65685 6 3 6 C1.34315 6 0 4.65685 0 3 C0 1.34315 1.34315 0 3 0 C4.65685 0 6 1.34315 6 3 Z" fill="#fb3034"/></svg>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "40px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#fb3034", letterSpacing: "-0.01em" }}>Critical</p>
              </div>
            </div>
            <div style={{ width: "170px", height: "41px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <GitBranch size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#737373", display: "block" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "86px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#737373" }}>admin-portal</p>
              </div>
            </div>
            <div style={{ width: "136px", height: "41px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <Code size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#737373", display: "block" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "70px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#737373" }}>Code scan</p>
              </div>
            </div>
            <div style={{ width: "150px", height: "41px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ height: "26px", flexShrink: 0, borderRadius: "6px", background: "rgba(115, 115, 115, 0.08)", display: "flex", flexDirection: "row", padding: "0px 6px 0px 6px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "54px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#737373", letterSpacing: "-0.01em" }}>In triage</p>
              </div>
            </div>
            <div style={{ width: "80px", height: "41px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "24px", height: "24px", flexShrink: 0, borderRadius: "999px", background: "#e0f6eb", boxShadow: "inset 0 0 0 1px #ffffff", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "12px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 500, color: "#187c47" }}>JL</p>
              </div>
            </div>
            <div style={{ width: "64px", height: "41px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "18px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#737373" }}>5d</p>
            </div>
          </div>
          <div style={{ width: "1074px", height: "42px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #ebebeb", display: "flex", flexDirection: "row", padding: "0px 0px 1px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "64px", height: "41px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "29px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#222222" }}>#127</p>
            </div>
            <div style={{ width: "300px", height: "41px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "145px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 600, color: "#222222" }}>Exposed admin token</p>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "147px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#737373" }}>Long-lived token in config</p>
                </div>
              </div>
            </div>
            <div style={{ width: "110px", height: "41px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ height: "22px", flexShrink: 0, borderRadius: "6px", background: "rgba(246, 139, 46, 0.08)", display: "flex", flexDirection: "row", padding: "0px 6px 0px 6px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <svg style={{ width: "6px", height: "6px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M6 3 C6 4.65685 4.65685 6 3 6 C1.34315 6 0 4.65685 0 3 C0 1.34315 1.34315 0 3 0 C4.65685 0 6 1.34315 6 3 Z" fill="#f68b2e"/></svg>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "26px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#f68b2e", letterSpacing: "-0.01em" }}>High</p>
              </div>
            </div>
            <div style={{ width: "170px", height: "41px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <GitBranch size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#737373", display: "block" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "83px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#737373" }}>auth-service</p>
              </div>
            </div>
            <div style={{ width: "136px", height: "41px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <Key size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#737373", display: "block" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "51px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#737373" }}>Secrets</p>
              </div>
            </div>
            <div style={{ width: "150px", height: "41px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ height: "26px", flexShrink: 0, borderRadius: "6px", background: "rgba(255, 77, 0, 0.08)", display: "flex", flexDirection: "row", padding: "0px 6px 0px 6px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "85px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ff4d00", letterSpacing: "-0.01em" }}>Needs owner</p>
              </div>
            </div>
            <div style={{ width: "80px", height: "41px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "13px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#a6a6a6" }}>—</p>
            </div>
            <div style={{ width: "64px", height: "41px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "18px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#737373" }}>4d</p>
            </div>
          </div>
          <div style={{ width: "1074px", height: "42px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #ebebeb", display: "flex", flexDirection: "row", padding: "0px 0px 1px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "64px", height: "41px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "31px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#222222" }}>#124</p>
            </div>
            <div style={{ width: "300px", height: "41px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "193px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 600, color: "#222222" }}>Prototype pollution in lodash</p>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "128px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#737373" }}>lodash 4.17.20 → 4.17.21</p>
                </div>
              </div>
            </div>
            <div style={{ width: "110px", height: "41px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ height: "22px", flexShrink: 0, borderRadius: "6px", background: "rgba(246, 139, 46, 0.08)", display: "flex", flexDirection: "row", padding: "0px 6px 0px 6px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <svg style={{ width: "6px", height: "6px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M6 3 C6 4.65685 4.65685 6 3 6 C1.34315 6 0 4.65685 0 3 C0 1.34315 1.34315 0 3 0 C4.65685 0 6 1.34315 6 3 Z" fill="#f68b2e"/></svg>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "26px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#f68b2e", letterSpacing: "-0.01em" }}>High</p>
              </div>
            </div>
            <div style={{ width: "170px", height: "41px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <GitBranch size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#737373", display: "block" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "59px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#737373" }}>web-app</p>
              </div>
            </div>
            <div style={{ width: "136px", height: "41px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <Package size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#737373", display: "block" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "94px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#737373" }}>Dependencies</p>
              </div>
            </div>
            <div style={{ width: "150px", height: "41px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ height: "26px", flexShrink: 0, borderRadius: "6px", background: "rgba(127, 88, 245, 0.08)", display: "flex", flexDirection: "row", padding: "0px 6px 0px 6px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "95px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#7f58f5", letterSpacing: "-0.01em" }}>Fix in progress</p>
              </div>
            </div>
            <div style={{ width: "80px", height: "41px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "24px", height: "24px", flexShrink: 0, borderRadius: "999px", background: "#feefe2", boxShadow: "inset 0 0 0 1px #ffffff", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "14px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 500, color: "#a05a1e" }}>AR</p>
              </div>
            </div>
            <div style={{ width: "64px", height: "41px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "18px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#737373" }}>1w</p>
            </div>
          </div>
          <div style={{ width: "1074px", height: "42px", flexShrink: 0, boxShadow: "inset 0 0 0 0px #ebebeb", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "64px", height: "41px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "27px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#222222" }}>#119</p>
            </div>
            <div style={{ width: "300px", height: "41px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "156px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 600, color: "#222222" }}>SSRF via webhook URL</p>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "159px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#737373" }}>Internal metadata reachable</p>
                </div>
              </div>
            </div>
            <div style={{ width: "110px", height: "41px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ height: "22px", flexShrink: 0, borderRadius: "6px", background: "rgba(246, 139, 46, 0.08)", display: "flex", flexDirection: "row", padding: "0px 6px 0px 6px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <svg style={{ width: "6px", height: "6px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M6 3 C6 4.65685 4.65685 6 3 6 C1.34315 6 0 4.65685 0 3 C0 1.34315 1.34315 0 3 0 C4.65685 0 6 1.34315 6 3 Z" fill="#f68b2e"/></svg>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "26px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#f68b2e", letterSpacing: "-0.01em" }}>High</p>
              </div>
            </div>
            <div style={{ width: "170px", height: "41px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <GitBranch size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#737373", display: "block" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "103px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#737373" }}>notification-svc</p>
              </div>
            </div>
            <div style={{ width: "136px", height: "41px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <Brain size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#737373", display: "block" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "68px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#737373" }}>AI pentest</p>
              </div>
            </div>
            <div style={{ width: "150px", height: "41px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ height: "26px", flexShrink: 0, borderRadius: "6px", background: "rgba(27, 140, 232, 0.08)", display: "flex", flexDirection: "row", padding: "0px 6px 0px 6px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "98px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#1b8ce8", letterSpacing: "-0.01em" }}>Ready to verify</p>
              </div>
            </div>
            <div style={{ width: "80px", height: "41px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "24px", height: "24px", flexShrink: 0, borderRadius: "999px", background: "#dfeffc", boxShadow: "inset 0 0 0 1px #ffffff", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "14px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 500, color: "#125b97" }}>SC</p>
              </div>
            </div>
            <div style={{ width: "64px", height: "41px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "18px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#737373" }}>1w</p>
            </div>
          </div>
        </div>
      </div>
      <div style={{ position: "absolute", left: "326px", top: "112px", width: "1074px", height: "48px", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "130px", lineHeight: "26px", fontFamily: "'Geist'", fontSize: "20px", fontWeight: 600, color: "#202020", letterSpacing: "-0.03em" }}>Vulnerabilities</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "378px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#747474", letterSpacing: "-0.02em" }}>Verified findings across 24 repos, 6 apps and 154 endpoints.</p>
        </div>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ height: "34px", flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e5e5e5", display: "flex", flexDirection: "row", padding: "1px 11px 1px 11px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <Download size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "42px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#6c6c6c" }}>Export</p>
          </div>
          <div style={{ height: "34px", flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e5e5e5", display: "flex", flexDirection: "row", padding: "1px 11px 1px 11px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <Calendar size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "84px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#6c6c6c" }}>Last 30 days</p>
            <ChevronDown size={14} strokeWidth={1.51} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
          </div>
          <div style={{ flexShrink: 0, borderRadius: "11px", background: "#ca7126", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ height: "32px", flexShrink: 0, borderRadius: "10px", background: "#fc7306", boxShadow: "inset 0px 1px 0px 0px #ff8d1d", display: "flex", flexDirection: "row", padding: "0px 10px 0px 10px", gap: "6px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <Scan size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#ffffff", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "62px", fontFamily: "'Inter'", fontSize: "14px", fontWeight: 500, color: "#ffffff", lineHeight: "1.149999976158142" }}>Run scan</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
