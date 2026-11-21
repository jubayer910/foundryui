// Boardplan page (vantage, Templates) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist, Geist Mono. Icons: Ingot Icons.
import type { SVGProps } from "react";

// Ingot Icons used here, inlined so this file needs no icon package.
function icon(body: string) {
  return function Icon({ size = 24, strokeWidth = 1.5, ...p }: { size?: number; strokeWidth?: number } & SVGProps<SVGSVGElement>) {
    const html = strokeWidth == 1.5 ? body : body.replace(/stroke-width="([\d.]+)"/g, (_, w) => `stroke-width="${(Number(w) * Number(strokeWidth)) / 1.5}"`);
    return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden {...p} dangerouslySetInnerHTML={{ __html: html }} />;
  };
}
const Award = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M6 9a6 6 0 1 0 12 0a6 6 0 1 0 -12 0\" /><path d=\"M12 15l3.4 5.89l1.598 -3.233l3.598 .232l-3.4 -5.889\" /><path d=\"M6.802 12l-3.4 5.89l3.598 -.233l1.598 3.232l3.4 -5.889\" /></g>");
const Bell = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M10 5a2 2 0 1 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6\" /><path d=\"M9 17v1a3 3 0 0 0 6 0v-1\" /></g>");
const Book = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0\" /><path d=\"M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0\" /><path d=\"M3 6l0 13\" /><path d=\"M12 6l0 13\" /><path d=\"M21 6l0 13\" /></g>");
const Briefcase = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 9a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2l0 -9\" /><path d=\"M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2\" /><path d=\"M12 12l0 .01\" /><path d=\"M3 13a20 20 0 0 0 18 0\" /></g>");
const Bulb = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7\" /><path d=\"M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3\" /><path d=\"M9.7 17l4.6 0\" /></g>");
const Calendar = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12\" /><path d=\"M16 3v4\" /><path d=\"M8 3v4\" /><path d=\"M4 11h16\" /></g>");
const ChartLine = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 19l16 0\" /><path d=\"M4 15l4 -6l4 2l4 -5l4 4\" /></g>");
const Check = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M5 12l5 5l10 -10\" /></g>");
const ChevronRight = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M9 6l6 6l-6 6\" /></g>");
const Clock = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0\" /><path d=\"M12 7v5l3 3\" /></g>");
const Crown = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 6l4 6l5 -4l-2 10h-14l-2 -10l5 4l4 -6\" /></g>");
const FileInvoice = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M14 3v4a1 1 0 0 0 1 1h4\" /><path d=\"M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2\" /><path d=\"M9 7l1 0\" /><path d=\"M9 13l6 0\" /><path d=\"M13 17l2 0\" /></g>");
const GitMerge = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M5 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0\" /><path d=\"M5 6a2 2 0 1 0 4 0a2 2 0 1 0 -4 0\" /><path d=\"M15 12a2 2 0 1 0 4 0a2 2 0 1 0 -4 0\" /><path d=\"M7 8l0 8\" /><path d=\"M7 8a4 4 0 0 0 4 4h4\" /></g>");
const Home = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M5 12l-2 0l9 -9l9 9l-2 0\" /><path d=\"M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7\" /><path d=\"M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6\" /></g>");
const Medal2 = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M9 3h6l3 7l-6 2l-6 -2l3 -7\" /><path d=\"M12 12l-3 -9\" /><path d=\"M15 11l-3 -8\" /><path d=\"M12 19.5l-3 1.5l.5 -3.5l-2 -2l3 -.5l1.5 -3l1.5 3l3 .5l-2 2l.5 3.5l-3 -1.5\" /></g>");
const Moneybag = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M9.5 3h5a1.5 1.5 0 0 1 1.5 1.5a3.5 3.5 0 0 1 -3.5 3.5h-1a3.5 3.5 0 0 1 -3.5 -3.5a1.5 1.5 0 0 1 1.5 -1.5\" /><path d=\"M4 17v-1a8 8 0 1 1 16 0v1a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4\" /></g>");
const Refresh = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4\" /><path d=\"M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4\" /></g>");
const Share = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 12a3 3 0 1 0 6 0a3 3 0 1 0 -6 0\" /><path d=\"M15 6a3 3 0 1 0 6 0a3 3 0 1 0 -6 0\" /><path d=\"M15 18a3 3 0 1 0 6 0a3 3 0 1 0 -6 0\" /><path d=\"M8.7 10.7l6.6 -3.4\" /><path d=\"M8.7 13.3l6.6 3.4\" /></g>");
const Stack2 = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 4l-8 4l8 4l8 -4l-8 -4\" /><path d=\"M4 12l8 4l8 -4\" /><path d=\"M4 16l8 4l8 -4\" /></g>");
const Star = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873l-6.158 -3.245\" /></g>");
const TrendingUp = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 17l6 -6l4 4l8 -8\" /><path d=\"M14 7l7 0l0 7\" /></g>");
const UserSearch = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0\" /><path d=\"M6 21v-2a4 4 0 0 1 4 -4h1.5\" /><path d=\"M15 18a3 3 0 1 0 6 0a3 3 0 1 0 -6 0\" /><path d=\"M20.2 20.2l1.8 1.8\" /></g>");
const Users = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M5 7a4 4 0 1 0 8 0a4 4 0 1 0 -8 0\" /><path d=\"M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2\" /><path d=\"M16 3.13a4 4 0 0 1 0 7.75\" /><path d=\"M21 21v-2a4 4 0 0 0 -3 -3.85\" /></g>");

export function BoardplanPage() {
  return (
    <div style={{ width: "1440px", height: "1083px", background: "#1a1a1a", overflow: "hidden", position: "relative" }}>
      <div style={{ position: "absolute", left: "0px", top: "0px", width: "238px", height: "1083px", boxShadow: "inset -1px 0 0 0 #000000, 1px 0px 0px 0px #232323", overflow: "hidden" }}>
        <div style={{ position: "absolute", left: "12px", top: "11px", width: "161px", height: "40px", display: "flex", flexDirection: "row", gap: "48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "40px", height: "40px", flexShrink: 0, borderRadius: "6.96px", background: "#232323", backdropFilter: "blur(1.18px)", overflow: "hidden", position: "relative" }}>
              <div style={{ position: "absolute", left: "10.5px", top: "21px", width: "5px", height: "9px", borderRadius: "2.5px", background: "#7b5bff" }} />
              <div style={{ position: "absolute", left: "17.5px", top: "16px", width: "5px", height: "14px", borderRadius: "2.5px", background: "#7b5bff" }} />
              <div style={{ position: "absolute", left: "24.5px", top: "10px", width: "5px", height: "20px", borderRadius: "2.5px", background: "#7b5bff" }} />
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "111px", fontFamily: "'Geist'", fontSize: "16px", fontWeight: 500, color: "#ffffff", lineHeight: "1.399999976158142", letterSpacing: "-0.02em" }}>Vantage Admin</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "72px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#7c7c7c", lineHeight: "1.5", letterSpacing: "-0.01em" }}>Management</p>
            </div>
          </div>
        </div>
        <div style={{ position: "absolute", left: "0px", top: "63px", width: "238px", height: "720px", display: "flex", flexDirection: "column", gap: "16px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", height: "210px", flexShrink: 0, position: "relative" }}>
            <div style={{ position: "absolute", left: "0px", top: "0px", width: "238px", height: "210px", display: "flex", flexDirection: "column", gap: "16px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <svg style={{ width: "238px", height: "1px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible", marginBottom: "-1px" }} xmlns="http://www.w3.org/2000/svg" width="238" height="1" viewBox="0 0 238 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 -0.5 L0 0 L238 0 L238 -0.5 L238 -1 L0 -1 L0 -0.5 Z" fill="#000000"/></svg>
              <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ alignSelf: "stretch", flexShrink: 0, borderRadius: "10px", display: "flex", flexDirection: "column", padding: "6px 10px 6px 10px", justifyContent: "center", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "77px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#5f5f5f", letterSpacing: "0.04em" }}>DASHBOARD</p>
                </div>
                <div style={{ width: "226px", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "226px", height: "30px", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", gap: "7px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <div style={{ width: "5px", height: "26px", flexShrink: 0, opacity: 0, borderRadius: "0px 6px 6px 0px", background: "#7b5bff", boxShadow: "0px 0px 7.2px 0px rgba(123, 91, 255, 0.5)" }} />
                    <div style={{ width: "214px", alignSelf: "stretch", flexShrink: 0, borderRadius: "6px", filter: "drop-shadow(0px 0px 2.3px rgba(0, 0, 0, 0.5))", display: "flex", flexDirection: "row", padding: "6px 6px 6px 6px", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
                      <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                        <Home size={15} strokeWidth={2.4} style={{ width: "15px", height: "15px", flexShrink: 0, color: "#8a8a8a", display: "block" }} />
                        <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "37px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#b4b4b4", letterSpacing: "-0.02em" }}>Home</p>
                      </div>
                      <div style={{ flexShrink: 0, borderRadius: "18px", background: "#1f1f1f", display: "flex", flexDirection: "row", padding: "3px 5px 3px 5px", gap: "10px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                        <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "20px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#cfcfcf", lineHeight: "12px", letterSpacing: "-0.02em" }}>241</p>
                      </div>
                    </div>
                  </div>
                  <div style={{ width: "226px", height: "30px", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", gap: "7px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <div style={{ width: "5px", height: "26px", flexShrink: 0, opacity: 0, borderRadius: "0px 6px 6px 0px", background: "#7b5bff", boxShadow: "0px 0px 7.2px 0px rgba(123, 91, 255, 0.5)" }} />
                    <div style={{ width: "214px", alignSelf: "stretch", flexShrink: 0, borderRadius: "6px", filter: "drop-shadow(0px 0px 2.3px rgba(0, 0, 0, 0.5))", display: "flex", flexDirection: "row", padding: "6px 6px 6px 6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                      <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                        <Briefcase size={15} strokeWidth={2.4} style={{ width: "15px", height: "15px", flexShrink: 0, color: "#8a8a8a", display: "block" }} />
                        <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "57px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#b4b4b4", letterSpacing: "-0.02em" }}>Business</p>
                      </div>
                    </div>
                  </div>
                  <div style={{ width: "226px", height: "30px", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", gap: "7px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <div style={{ width: "5px", height: "26px", flexShrink: 0, opacity: 0, borderRadius: "0px 6px 6px 0px", background: "#7b5bff", boxShadow: "0px 0px 7.2px 0px rgba(123, 91, 255, 0.5)" }} />
                    <div style={{ width: "214px", alignSelf: "stretch", flexShrink: 0, borderRadius: "6px", filter: "drop-shadow(0px 0px 2.3px rgba(0, 0, 0, 0.5))", display: "flex", flexDirection: "row", padding: "6px 6px 6px 6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                      <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                        <UserSearch size={15} strokeWidth={2} style={{ width: "15px", height: "15px", flexShrink: 0, color: "#8a8a8a", display: "block" }} />
                        <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "113px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#b4b4b4", letterSpacing: "-0.02em" }}>Customer insights</p>
                      </div>
                    </div>
                  </div>
                  <div style={{ width: "226px", height: "30px", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", gap: "7px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <div style={{ width: "5px", height: "26px", flexShrink: 0, opacity: 0, borderRadius: "0px 6px 6px 0px", background: "#7b5bff", boxShadow: "0px 0px 7.2px 0px rgba(123, 91, 255, 0.5)" }} />
                    <div style={{ width: "214px", alignSelf: "stretch", flexShrink: 0, borderRadius: "6px", filter: "drop-shadow(0px 0px 2.3px rgba(0, 0, 0, 0.5))", display: "flex", flexDirection: "row", padding: "6px 6px 6px 6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                      <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                        <GitMerge size={15} strokeWidth={2.4} style={{ width: "15px", height: "15px", flexShrink: 0, color: "#8a8a8a", display: "block" }} />
                        <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "65px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#b4b4b4", letterSpacing: "-0.02em" }}>Processes</p>
                      </div>
                    </div>
                  </div>
                  <div style={{ width: "226px", height: "30px", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", gap: "7px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <div style={{ width: "5px", height: "26px", flexShrink: 0, opacity: 0, borderRadius: "0px 6px 6px 0px", background: "#7b5bff", boxShadow: "0px 0px 7.2px 0px rgba(123, 91, 255, 0.5)" }} />
                    <div style={{ width: "214px", alignSelf: "stretch", flexShrink: 0, borderRadius: "6px", filter: "drop-shadow(0px 0px 2.3px rgba(0, 0, 0, 0.5))", display: "flex", flexDirection: "row", padding: "6px 6px 6px 6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                      <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                        <Bulb size={15} strokeWidth={2} style={{ width: "15px", height: "15px", flexShrink: 0, color: "#8a8a8a", display: "block" }} />
                        <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "49px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#b4b4b4", letterSpacing: "-0.02em" }}>Insights</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <svg style={{ width: "238px", height: "1px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible", marginBottom: "-1px" }} xmlns="http://www.w3.org/2000/svg" width="238" height="1" viewBox="0 0 238 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 -0.5 L0 0 L238 0 L238 -0.5 L238 -1 L0 -1 L0 -0.5 Z" fill="#000000"/></svg>
            </div>
          </div>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "16px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ alignSelf: "stretch", flexShrink: 0, borderRadius: "10px", display: "flex", flexDirection: "column", padding: "6px 10px 6px 10px", justifyContent: "center", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "34px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#5f5f5f", letterSpacing: "0.04em" }}>TEAM</p>
              </div>
              <div style={{ width: "226px", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ width: "226px", height: "30px", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", gap: "7px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ width: "5px", height: "26px", flexShrink: 0, opacity: 0, borderRadius: "0px 6px 6px 0px", background: "#7b5bff", boxShadow: "0px 0px 7.2px 0px rgba(123, 91, 255, 0.5)" }} />
                  <div style={{ width: "214px", alignSelf: "stretch", flexShrink: 0, borderRadius: "6px", filter: "drop-shadow(0px 0px 2.3px rgba(0, 0, 0, 0.5))", display: "flex", flexDirection: "row", padding: "6px 6px 6px 6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                      <TrendingUp size={15} strokeWidth={2} style={{ width: "15px", height: "15px", flexShrink: 0, color: "#8a8a8a", display: "block" }} />
                      <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "57px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#b4b4b4", letterSpacing: "-0.02em" }}>Numbers</p>
                    </div>
                  </div>
                </div>
                <div style={{ width: "226px", height: "30px", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", gap: "7px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ width: "5px", height: "26px", flexShrink: 0, opacity: 0, borderRadius: "0px 6px 6px 0px", background: "#7b5bff", boxShadow: "0px 0px 7.2px 0px rgba(123, 91, 255, 0.5)" }} />
                  <div style={{ width: "214px", alignSelf: "stretch", flexShrink: 0, borderRadius: "6px", filter: "drop-shadow(0px 0px 2.3px rgba(0, 0, 0, 0.5))", display: "flex", flexDirection: "row", padding: "6px 6px 6px 6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                      <Users size={15} strokeWidth={2} style={{ width: "15px", height: "15px", flexShrink: 0, color: "#8a8a8a", display: "block" }} />
                      <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "68px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#b4b4b4", letterSpacing: "-0.02em" }}>Customers</p>
                    </div>
                  </div>
                </div>
                <div style={{ width: "226px", height: "30px", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", gap: "7px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ width: "5px", height: "26px", flexShrink: 0, opacity: 0, borderRadius: "0px 6px 6px 0px", background: "#7b5bff", boxShadow: "0px 0px 7.2px 0px rgba(123, 91, 255, 0.5)" }} />
                  <div style={{ width: "214px", alignSelf: "stretch", flexShrink: 0, borderRadius: "6px", filter: "drop-shadow(0px 0px 2.3px rgba(0, 0, 0, 0.5))", display: "flex", flexDirection: "row", padding: "6px 6px 6px 6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                      <GitMerge size={15} strokeWidth={2.4} style={{ width: "15px", height: "15px", flexShrink: 0, color: "#8a8a8a", display: "block" }} />
                      <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "65px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#b4b4b4", letterSpacing: "-0.02em" }}>Processes</p>
                    </div>
                  </div>
                </div>
                <div style={{ width: "226px", height: "30px", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", gap: "7px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ width: "5px", height: "26px", flexShrink: 0, opacity: 0, borderRadius: "0px 6px 6px 0px", background: "#7b5bff", boxShadow: "0px 0px 7.2px 0px rgba(123, 91, 255, 0.5)" }} />
                  <div style={{ width: "214px", alignSelf: "stretch", flexShrink: 0, borderRadius: "6px", filter: "drop-shadow(0px 0px 2.3px rgba(0, 0, 0, 0.5))", display: "flex", flexDirection: "row", padding: "6px 6px 6px 6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                      <Bulb size={15} strokeWidth={2} style={{ width: "15px", height: "15px", flexShrink: 0, color: "#8a8a8a", display: "block" }} />
                      <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "49px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#b4b4b4", letterSpacing: "-0.02em" }}>Insights</p>
                    </div>
                  </div>
                </div>
                <div style={{ width: "226px", height: "30px", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", gap: "7px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ width: "5px", height: "26px", flexShrink: 0, opacity: 0, borderRadius: "0px 6px 6px 0px", background: "#7b5bff", boxShadow: "0px 0px 7.2px 0px rgba(123, 91, 255, 0.5)" }} />
                  <div style={{ width: "214px", alignSelf: "stretch", flexShrink: 0, borderRadius: "6px", filter: "drop-shadow(0px 0px 2.3px rgba(0, 0, 0, 0.5))", display: "flex", flexDirection: "row", padding: "6px 6px 6px 6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                      <Stack2 size={15} strokeWidth={2} style={{ width: "15px", height: "15px", flexShrink: 0, color: "#8a8a8a", display: "block" }} />
                      <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "69px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#b4b4b4", letterSpacing: "-0.02em" }}>Collections</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <svg style={{ width: "238px", height: "1px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible", marginBottom: "-1px" }} xmlns="http://www.w3.org/2000/svg" width="238" height="1" viewBox="0 0 238 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 -0.5 L0 0 L238 0 L238 -0.5 L238 -1 L0 -1 L0 -0.5 Z" fill="#000000"/></svg>
          </div>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "16px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ alignSelf: "stretch", flexShrink: 0, borderRadius: "10px", display: "flex", flexDirection: "column", padding: "6px 10px 6px 10px", justifyContent: "center", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "95px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#5f5f5f", letterSpacing: "0.04em" }}>PERFORMANCE</p>
              </div>
              <div style={{ width: "226px", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ width: "226px", height: "30px", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", gap: "7px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ width: "5px", height: "26px", flexShrink: 0, opacity: 0, borderRadius: "0px 6px 6px 0px", background: "#7b5bff", boxShadow: "0px 0px 7.2px 0px rgba(123, 91, 255, 0.5)" }} />
                  <div style={{ width: "214px", alignSelf: "stretch", flexShrink: 0, borderRadius: "6px", filter: "drop-shadow(0px 0px 2.3px rgba(0, 0, 0, 0.5))", display: "flex", flexDirection: "row", padding: "6px 6px 6px 6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                      <Calendar size={15} strokeWidth={2} style={{ width: "15px", height: "15px", flexShrink: 0, color: "#8a8a8a", display: "block" }} />
                      <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "103px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#b4b4b4", letterSpacing: "-0.02em" }}>Weekly numbers</p>
                    </div>
                  </div>
                </div>
                <div style={{ width: "226px", height: "30px", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", gap: "7px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ width: "5px", height: "26px", flexShrink: 0, opacity: 0, borderRadius: "0px 6px 6px 0px", background: "#7b5bff", boxShadow: "0px 0px 7.2px 0px rgba(123, 91, 255, 0.5)" }} />
                  <div style={{ width: "214px", alignSelf: "stretch", flexShrink: 0, borderRadius: "6px", filter: "drop-shadow(0px 0px 2.3px rgba(0, 0, 0, 0.5))", display: "flex", flexDirection: "row", padding: "6px 6px 6px 6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                      <ChartLine size={15} strokeWidth={2} style={{ width: "15px", height: "15px", flexShrink: 0, color: "#8a8a8a", display: "block" }} />
                      <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "98px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#b4b4b4", letterSpacing: "-0.02em" }}>Weekly analysis</p>
                    </div>
                  </div>
                </div>
                <div style={{ width: "226px", height: "30px", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", gap: "7px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ width: "5px", height: "26px", flexShrink: 0, opacity: 0, borderRadius: "0px 6px 6px 0px", background: "#7b5bff", boxShadow: "0px 0px 7.2px 0px rgba(123, 91, 255, 0.5)" }} />
                  <div style={{ width: "214px", alignSelf: "stretch", flexShrink: 0, borderRadius: "6px", filter: "drop-shadow(0px 0px 2.3px rgba(0, 0, 0, 0.5))", display: "flex", flexDirection: "row", padding: "6px 6px 6px 6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                      <FileInvoice size={15} strokeWidth={2} style={{ width: "15px", height: "15px", flexShrink: 0, color: "#8a8a8a", display: "block" }} />
                      <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "85px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#b4b4b4", letterSpacing: "-0.02em" }}>Subscriptions</p>
                    </div>
                  </div>
                </div>
                <div style={{ width: "226px", height: "30px", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", gap: "7px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ width: "5px", height: "26px", flexShrink: 0, opacity: 0, borderRadius: "0px 6px 6px 0px", background: "#7b5bff", boxShadow: "0px 0px 7.2px 0px rgba(123, 91, 255, 0.5)" }} />
                  <div style={{ width: "214px", alignSelf: "stretch", flexShrink: 0, borderRadius: "6px", filter: "drop-shadow(0px 0px 2.3px rgba(0, 0, 0, 0.5))", display: "flex", flexDirection: "row", padding: "6px 6px 6px 6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                      <TrendingUp size={15} strokeWidth={2.4} style={{ width: "15px", height: "15px", flexShrink: 0, color: "#8a8a8a", display: "block" }} />
                      <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "70px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#b4b4b4", letterSpacing: "-0.02em" }}>Projections</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <svg style={{ width: "238px", height: "1px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible", marginBottom: "-1px" }} xmlns="http://www.w3.org/2000/svg" width="238" height="1" viewBox="0 0 238 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 -0.5 L0 0 L238 0 L238 -0.5 L238 -1 L0 -1 L0 -0.5 Z" fill="#000000"/></svg>
          </div>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "16px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ alignSelf: "stretch", flexShrink: 0, borderRadius: "10px", display: "flex", flexDirection: "column", padding: "6px 10px 6px 10px", justifyContent: "center", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "61px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#5f5f5f", letterSpacing: "0.04em" }}>NETWORK</p>
              </div>
              <div style={{ width: "226px", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ width: "226px", height: "30px", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", gap: "7px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ width: "5px", height: "26px", flexShrink: 0, opacity: 0, borderRadius: "0px 6px 6px 0px", background: "#7b5bff", boxShadow: "0px 0px 7.2px 0px rgba(123, 91, 255, 0.5)" }} />
                  <div style={{ width: "214px", alignSelf: "stretch", flexShrink: 0, borderRadius: "6px", filter: "drop-shadow(0px 0px 2.3px rgba(0, 0, 0, 0.5))", display: "flex", flexDirection: "row", padding: "6px 6px 6px 6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                      <Share size={15} strokeWidth={2} style={{ width: "15px", height: "15px", flexShrink: 0, color: "#8a8a8a", display: "block" }} />
                      <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "54px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#b4b4b4", letterSpacing: "-0.02em" }}>Network</p>
                    </div>
                  </div>
                </div>
                <div style={{ width: "226px", height: "30px", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", gap: "7px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ width: "5px", height: "26px", flexShrink: 0, borderRadius: "0px 6px 6px 0px", background: "#7b5bff", boxShadow: "0px 0px 7.2px 0px rgba(123, 91, 255, 0.5)" }} />
                  <div style={{ width: "214px", alignSelf: "stretch", flexShrink: 0, borderRadius: "6px", background: "linear-gradient(90deg, rgba(123, 91, 255, 0.17) 0%, rgba(123, 91, 255, 0.04) 62%, rgba(123, 91, 255, 0) 100%), linear-gradient(#232323, #232323)", boxShadow: "inset 0 0 0 1px #2e2e2e, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", display: "flex", flexDirection: "row", padding: "6px 6px 6px 6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                      <Stack2 size={15} strokeWidth={2} style={{ width: "15px", height: "15px", flexShrink: 0, color: "#7b5bff", display: "block" }} />
                      <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "64px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#b4b4b4", letterSpacing: "-0.02em" }}>Boardplan</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <svg style={{ width: "238px", height: "1px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible", marginBottom: "-1px" }} xmlns="http://www.w3.org/2000/svg" width="238" height="1" viewBox="0 0 238 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 -0.5 L0 0 L238 0 L238 -0.5 L238 -1 L0 -1 L0 -0.5 Z" fill="#000000"/></svg>
          </div>
        </div>
      </div>
      <div style={{ position: "absolute", left: "250px", top: "15px", width: "1174px", height: "32px", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "7px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, opacity: 0.5, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <Home size={13} strokeWidth={2.4} style={{ width: "13px", height: "13px", flexShrink: 0, color: "#8a8a8a", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "49px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#ededed", lineHeight: "12px" }}>Network</p>
          </div>
          <ChevronRight size={13} strokeWidth={2.77} style={{ width: "13px", height: "13px", flexShrink: 0, color: "#dadada", display: "block" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "59px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#ededed", lineHeight: "12px" }}>Boardplan</p>
        </div>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "60px", fontFamily: "'Geist Mono'", fontSize: "11px", fontWeight: 400, color: "#8a8a8a", lineHeight: "15px" }}>08:10 AST</p>
          <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "6px", background: "#232323", boxShadow: "inset 0 0 0 1px #2e2e2e, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", overflow: "hidden", display: "flex", flexDirection: "row", padding: "7px 7px 7px 7px", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <Bell size={18} strokeWidth={1.51} style={{ width: "18px", height: "18px", flexShrink: 0, color: "#dadada", display: "block" }} />
          </div>
        </div>
      </div>
      <div style={{ position: "absolute", left: "238px", top: "62px", width: "1202px", height: "1px", background: "#000000", boxShadow: "0px 1px 0px 0px #232323" }} />
      <div style={{ position: "absolute", left: "250px", top: "74px", width: "1174px", height: "58px", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "85px", fontFamily: "'Geist'", fontSize: "18px", fontWeight: 500, color: "#ededed", lineHeight: "1.100000023841858", letterSpacing: "-0.02em" }}>Boardplan</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "438px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#8a8a8a", lineHeight: "1.2999999523162842" }}>Compensation plan · ranks, qualifications and bonuses for July 2026</p>
        </div>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ height: "32px", flexShrink: 0, borderRadius: "6px", background: "#232323", boxShadow: "inset 0 0 0 1px #2e2e2e, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", overflow: "hidden", display: "flex", flexDirection: "row", padding: "7px 11px 7px 11px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "106px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <Calendar size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#8a8a8a", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "66px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#dadada", lineHeight: "1.4500000476837158" }}>July 2026</p>
              <div style={{ position: "relative", flexShrink: 0, alignSelf: "flex-start", marginTop: "1px", width: "16px", height: "16px" }}>
                <ChevronRight size={16} strokeWidth={2.25} style={{ position: "absolute", left: "16px", top: "0px", width: "16px", height: "16px", transform: "rotate(90deg)", transformOrigin: "top left", color: "#8a8a8a", display: "block", flexShrink: 0 }} />
              </div>
            </div>
          </div>
          <div style={{ height: "32px", flexShrink: 0, borderRadius: "6px", background: "#232323", boxShadow: "inset 0 0 0 1px #2e2e2e, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", overflow: "hidden", display: "flex", flexDirection: "row", padding: "7px 11px 7px 11px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <Book size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#8a8a8a", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "64px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#dadada", lineHeight: "1.4500000476837158" }}>Plan rules</p>
            </div>
          </div>
          <div style={{ flexShrink: 0, borderRadius: "6px", background: "#7b5bff", boxShadow: "inset 0 0 0 1px #8f74ff, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5), inset 0px 2px 4px 0px rgba(255, 255, 255, 0.2)", display: "flex", flexDirection: "row", padding: "7px 13px 7px 11px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <Moneybag size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#ffffff", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "119px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ffffff", lineHeight: "1.4500000476837158" }}>Simulate earnings</p>
          </div>
        </div>
      </div>
      <div style={{ position: "absolute", left: "238px", top: "144px", width: "1202px", height: "1px", background: "#000000", boxShadow: "0px 1px 0px 0px #232323" }} />
      <div style={{ position: "absolute", left: "250px", top: "160px", width: "337px", height: "38px", borderRadius: "8px", background: "#191919", boxShadow: "inset 0px 2px 8px 0px rgba(0, 0, 0, 0.25)", display: "flex", flexDirection: "row", padding: "2px 2px 2px 2px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ flexShrink: 0, borderRadius: "6px", background: "#232323", boxShadow: "inset 0 0 0 1px #191919, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5), inset 0px 2px 4px 0px rgba(255, 255, 255, 0.2)", display: "flex", flexDirection: "row", padding: "7px 11px 7px 11px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <Stack2 size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#ededed", display: "block" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "90px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#dadada", lineHeight: "1.4500000476837158" }}>Plan overview</p>
        </div>
        <div style={{ flexShrink: 0, borderRadius: "6px", display: "flex", flexDirection: "row", padding: "6px 10px 6px 10px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <Users size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#8a8a8a", display: "block" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "40px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#8a8a8a", lineHeight: "1.4500000476837158" }}>By leg</p>
        </div>
        <div style={{ flexShrink: 0, borderRadius: "6px", display: "flex", flexDirection: "row", padding: "6px 10px 6px 10px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <Clock size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#8a8a8a", display: "block" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "81px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#8a8a8a", lineHeight: "1.4500000476837158" }}>Rank history</p>
        </div>
      </div>
      <div style={{ position: "absolute", left: "1120px", top: "173px", width: "306px", height: "16px", display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <Clock size={14} strokeWidth={1.51} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#8a8a8a", display: "block" }} />
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "286px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8a8a8a" }}>
          <span style={{ fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8a8a8a" }}>{"Qualification closes "}</span>
          <span style={{ fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#dadada" }}>today 23:59 AST</span>
          <span style={{ fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8a8a8a" }}>{" · payout Aug 5"}</span>
        </p>
      </div>
      <div style={{ position: "absolute", left: "238px", top: "204px", width: "1202px", height: "1px", background: "#000000", boxShadow: "0px 1px 0px 0px #232323" }} />
      <div style={{ position: "absolute", left: "250px", top: "222px", width: "276px", height: "214px", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ width: "276px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "44px", height: "44px", flexShrink: 0, borderRadius: "22px", background: "#232323", boxShadow: "inset 0 0 0 1px #2e2e2e, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <Star size={20} style={{ width: "20px", height: "20px", flexShrink: 0, color: "#a58bff", display: "block" }} />
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "3px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "36px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "11px", fontWeight: 400, color: "#5f5f5f", letterSpacing: "0.04em", textTransform: "uppercase" }}>Step 1</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "73px", lineHeight: "23px", fontFamily: "'Geist'", fontSize: "18px", fontWeight: 500, color: "#ededed", letterSpacing: "-0.02em" }}>Platinum</p>
            </div>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "3px", justifyContent: "flex-start", alignItems: "flex-end", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "41px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>6 legs</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "56px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8a8a8a" }}>54 people</p>
          </div>
        </div>
        <div style={{ width: "276px", height: "14px", flexShrink: 0 }} />
        <div style={{ width: "276px", height: "30px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #222222", display: "flex", flexDirection: "row", padding: "0px 0px 1px 0px", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "69px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 400, color: "#8a8a8a" }}>Active subs</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "21px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>≥ 5</p>
        </div>
        <div style={{ width: "276px", height: "30px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #222222", display: "flex", flexDirection: "row", padding: "0px 0px 1px 0px", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "41px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 400, color: "#8a8a8a" }}>People</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "20px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>≥ 2</p>
        </div>
        <div style={{ width: "276px", height: "30px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #222222", display: "flex", flexDirection: "row", padding: "0px 0px 1px 0px", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "78px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 400, color: "#8a8a8a" }}>MG1 a month</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "21px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>≥ 5</p>
        </div>
        <div style={{ width: "276px", height: "30px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #222222", display: "flex", flexDirection: "row", padding: "0px 0px 1px 0px", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "82px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 400, color: "#8a8a8a" }}>Qualified legs</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "13px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#5f5f5f" }}>—</p>
        </div>
        <div style={{ width: "276px", height: "12px", flexShrink: 0 }} />
        <div style={{ width: "276px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, borderRadius: "6px", background: "rgba(229, 85, 155, 0.1)", boxShadow: "inset 0 0 0 1px rgba(229, 85, 155, 0.3)", display: "flex", flexDirection: "row", padding: "4px 9px 4px 9px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <svg style={{ width: "6px", height: "6px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M6 3 C6 4.65685 4.65685 6 3 6 C1.34315 6 0 4.65685 0 3 C0 1.34315 1.34315 0 3 0 C4.65685 0 6 1.34315 6 3 Z" fill="#e5559b"/></svg>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "75px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#ed88b9" }}>Fast start 3%</p>
          </div>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "81px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#a0a0a0" }}>3% of leg MRR</p>
        </div>
      </div>
      <div style={{ position: "absolute", left: "550px", top: "222px", width: "276px", height: "214px", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ width: "276px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "44px", height: "44px", flexShrink: 0, borderRadius: "22px", background: "#232323", boxShadow: "inset 0 0 0 1px #2e2e2e, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <Award size={20} style={{ width: "20px", height: "20px", flexShrink: 0, color: "#7aa2f7", display: "block" }} />
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "3px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "38px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "11px", fontWeight: 400, color: "#5f5f5f", letterSpacing: "0.04em", textTransform: "uppercase" }}>Step 2</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "46px", lineHeight: "23px", fontFamily: "'Geist'", fontSize: "18px", fontWeight: 500, color: "#ededed", letterSpacing: "-0.02em" }}>Eagle</p>
            </div>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "3px", justifyContent: "flex-start", alignItems: "flex-end", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "40px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>3 legs</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "55px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8a8a8a" }}>48 people</p>
          </div>
        </div>
        <div style={{ width: "276px", height: "14px", flexShrink: 0 }} />
        <div style={{ width: "276px", height: "30px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #222222", display: "flex", flexDirection: "row", padding: "0px 0px 1px 0px", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "69px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 400, color: "#8a8a8a" }}>Active subs</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "30px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>≥ 30</p>
        </div>
        <div style={{ width: "276px", height: "30px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #222222", display: "flex", flexDirection: "row", padding: "0px 0px 1px 0px", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "41px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 400, color: "#8a8a8a" }}>People</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "26px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>≥ 15</p>
        </div>
        <div style={{ width: "276px", height: "30px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #222222", display: "flex", flexDirection: "row", padding: "0px 0px 1px 0px", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "78px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 400, color: "#8a8a8a" }}>MG1 a month</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "27px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>≥ 10</p>
        </div>
        <div style={{ width: "276px", height: "30px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #222222", display: "flex", flexDirection: "row", padding: "0px 0px 1px 0px", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "82px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 400, color: "#8a8a8a" }}>Qualified legs</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "71px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>2 Platinum</p>
        </div>
        <div style={{ width: "276px", height: "12px", flexShrink: 0 }} />
        <div style={{ width: "276px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, borderRadius: "6px", background: "rgba(122, 162, 247, 0.1)", boxShadow: "inset 0 0 0 1px rgba(122, 162, 247, 0.3)", display: "flex", flexDirection: "row", padding: "4px 9px 4px 9px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <svg style={{ width: "6px", height: "6px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M6 3 C6 4.65685 4.65685 6 3 6 C1.34315 6 0 4.65685 0 3 C0 1.34315 1.34315 0 3 0 C4.65685 0 6 1.34315 6 3 Z" fill="#7aa2f7"/></svg>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "92px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#a2bef9" }}>+ Leadership 4%</p>
          </div>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "80px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#a0a0a0" }}>7% of leg MRR</p>
        </div>
      </div>
      <div style={{ position: "absolute", left: "850px", top: "222px", width: "276px", height: "214px", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ width: "276px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "44px", height: "44px", flexShrink: 0, borderRadius: "22px", background: "#232323", boxShadow: "inset 0 0 0 1px #2e2e2e, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <Medal2 size={20} style={{ width: "20px", height: "20px", flexShrink: 0, color: "#6bcb8b", display: "block" }} />
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "3px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "38px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "11px", fontWeight: 400, color: "#5f5f5f", letterSpacing: "0.04em", textTransform: "uppercase" }}>Step 3</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "68px", lineHeight: "23px", fontFamily: "'Geist'", fontSize: "18px", fontWeight: 500, color: "#ededed", letterSpacing: "-0.02em" }}>Emerald</p>
            </div>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "3px", justifyContent: "flex-start", alignItems: "flex-end", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "40px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>3 legs</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "60px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8a8a8a" }}>124 people</p>
          </div>
        </div>
        <div style={{ width: "276px", height: "14px", flexShrink: 0 }} />
        <div style={{ width: "276px", height: "30px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #222222", display: "flex", flexDirection: "row", padding: "0px 0px 1px 0px", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "69px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 400, color: "#8a8a8a" }}>Active subs</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "39px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>≥ 300</p>
        </div>
        <div style={{ width: "276px", height: "30px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #222222", display: "flex", flexDirection: "row", padding: "0px 0px 1px 0px", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "41px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 400, color: "#8a8a8a" }}>People</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "30px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>≥ 40</p>
        </div>
        <div style={{ width: "276px", height: "30px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #222222", display: "flex", flexDirection: "row", padding: "0px 0px 1px 0px", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "78px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 400, color: "#8a8a8a" }}>MG1 a month</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "36px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>≥ 150</p>
        </div>
        <div style={{ width: "276px", height: "30px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #222222", display: "flex", flexDirection: "row", padding: "0px 0px 1px 0px", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "82px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 400, color: "#8a8a8a" }}>Qualified legs</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "49px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>2 Eagle</p>
        </div>
        <div style={{ width: "276px", height: "12px", flexShrink: 0 }} />
        <div style={{ width: "276px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, borderRadius: "6px", background: "rgba(123, 91, 255, 0.1)", boxShadow: "inset 0 0 0 1px rgba(123, 91, 255, 0.3)", display: "flex", flexDirection: "row", padding: "4px 9px 4px 9px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <svg style={{ width: "6px", height: "6px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M6 3 C6 4.65685 4.65685 6 3 6 C1.34315 6 0 4.65685 0 3 C0 1.34315 1.34315 0 3 0 C4.65685 0 6 1.34315 6 3 Z" fill="#7b5bff"/></svg>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "83px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#a38cff" }}>+ Matching 5%</p>
          </div>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "86px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#a0a0a0" }}>12% of leg MRR</p>
        </div>
      </div>
      <div style={{ position: "absolute", left: "1150px", top: "222px", width: "276px", height: "214px", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ width: "276px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "44px", height: "44px", flexShrink: 0, borderRadius: "22px", background: "#232323", boxShadow: "inset 0 0 0 1px #2e2e2e, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <Crown size={20} style={{ width: "20px", height: "20px", flexShrink: 0, color: "#e3b341", display: "block" }} />
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "3px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "38px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "11px", fontWeight: 400, color: "#5f5f5f", letterSpacing: "0.04em", textTransform: "uppercase" }}>Step 4</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "73px", lineHeight: "23px", fontFamily: "'Geist'", fontSize: "18px", fontWeight: 500, color: "#ededed", letterSpacing: "-0.02em" }}>Diamond</p>
            </div>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "3px", justifyContent: "flex-start", alignItems: "flex-end", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "51px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>1 leader</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "60px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8a8a8a" }}>241 people</p>
          </div>
        </div>
        <div style={{ width: "276px", height: "14px", flexShrink: 0 }} />
        <div style={{ width: "276px", height: "30px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #222222", display: "flex", flexDirection: "row", padding: "0px 0px 1px 0px", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "69px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 400, color: "#8a8a8a" }}>Active subs</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "39px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>≥ 600</p>
        </div>
        <div style={{ width: "276px", height: "30px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #222222", display: "flex", flexDirection: "row", padding: "0px 0px 1px 0px", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "41px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 400, color: "#8a8a8a" }}>People</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "30px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>≥ 80</p>
        </div>
        <div style={{ width: "276px", height: "30px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #222222", display: "flex", flexDirection: "row", padding: "0px 0px 1px 0px", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "78px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 400, color: "#8a8a8a" }}>MG1 a month</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "39px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>≥ 300</p>
        </div>
        <div style={{ width: "276px", height: "30px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #222222", display: "flex", flexDirection: "row", padding: "0px 0px 1px 0px", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "82px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 400, color: "#8a8a8a" }}>Qualified legs</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "67px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>2 Emerald</p>
        </div>
        <div style={{ width: "276px", height: "12px", flexShrink: 0 }} />
        <div style={{ width: "276px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, borderRadius: "6px", background: "rgba(227, 179, 65, 0.1)", boxShadow: "inset 0 0 0 1px rgba(227, 179, 65, 0.3)", display: "flex", flexDirection: "row", padding: "4px 9px 4px 9px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <svg style={{ width: "6px", height: "6px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M6 3 C6 4.65685 4.65685 6 3 6 C1.34315 6 0 4.65685 0 3 C0 1.34315 1.34315 0 3 0 C4.65685 0 6 1.34315 6 3 Z" fill="#e3b341"/></svg>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "94px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#ebca7a" }}>Matching 3 gens</p>
          </div>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "72px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#a0a0a0" }}>12% + 3 gens</p>
        </div>
      </div>
      <div style={{ position: "absolute", left: "538px", top: "205px", width: "1px", height: "391px", background: "#000000", boxShadow: "1px 0px 0px 0px #232323" }} />
      <div style={{ position: "absolute", left: "838px", top: "205px", width: "1px", height: "391px", background: "#000000", boxShadow: "1px 0px 0px 0px #232323" }} />
      <div style={{ position: "absolute", left: "1138px", top: "205px", width: "1px", height: "391px", background: "#000000", boxShadow: "1px 0px 0px 0px #232323" }} />
      <div style={{ position: "absolute", left: "238px", top: "596px", width: "1202px", height: "1px", background: "#000000", boxShadow: "0px 1px 0px 0px #232323" }} />
      <div style={{ position: "absolute", left: "250px", top: "528px", width: "276px", height: "56px", borderRadius: "8px 8px 3px 3px", background: "linear-gradient(180deg, #5642a8 0%, #4c3c91 100%)", boxShadow: "inset 0 0 0 1px rgba(117, 86, 242, 0.22), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.06), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.25)", overflow: "hidden" }}>
        <svg style={{ position: "absolute", left: "-56px", top: "0px", width: "441px", height: "56px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="441" height="56" viewBox="0 0 441 56" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 56 L0.494975 56.495 L56.495 0.494975 L56 0 L55.505 -0.494975 L-0.494975 55.505 L0 56 Z M5 56 L5.49497 56.495 L61.495 0.494975 L61 0 L60.505 -0.494975 L4.50503 55.505 L5 56 Z M10 56 L10.495 56.495 L66.495 0.494975 L66 0 L65.505 -0.494975 L9.50502 55.505 L10 56 Z M15 56 L15.495 56.495 L71.495 0.494975 L71 0 L70.505 -0.494975 L14.505 55.505 L15 56 Z M20 56 L20.495 56.495 L76.495 0.494975 L76 0 L75.505 -0.494975 L19.505 55.505 L20 56 Z M25 56 L25.495 56.495 L81.495 0.494975 L81 0 L80.505 -0.494975 L24.505 55.505 L25 56 Z M30 56 L30.495 56.495 L86.495 0.494975 L86 0 L85.505 -0.494975 L29.505 55.505 L30 56 Z M35 56 L35.495 56.495 L91.495 0.494975 L91 0 L90.505 -0.494975 L34.505 55.505 L35 56 Z M40 56 L40.495 56.495 L96.495 0.494975 L96 0 L95.505 -0.494975 L39.505 55.505 L40 56 Z M45 56 L45.495 56.495 L101.495 0.494975 L101 0 L100.505 -0.494975 L44.505 55.505 L45 56 Z M50 56 L50.495 56.495 L106.495 0.494975 L106 0 L105.505 -0.494975 L49.505 55.505 L50 56 Z M55 56 L55.495 56.495 L111.495 0.494975 L111 0 L110.505 -0.494975 L54.505 55.505 L55 56 Z M60 56 L60.495 56.495 L116.495 0.494975 L116 0 L115.505 -0.494975 L59.505 55.505 L60 56 Z M65 56 L65.495 56.495 L121.495 0.494975 L121 0 L120.505 -0.494975 L64.505 55.505 L65 56 Z M70 56 L70.495 56.495 L126.495 0.494975 L126 0 L125.505 -0.494975 L69.505 55.505 L70 56 Z M75 56 L75.495 56.495 L131.495 0.494975 L131 0 L130.505 -0.494975 L74.505 55.505 L75 56 Z M80 56 L80.495 56.495 L136.495 0.494975 L136 0 L135.505 -0.494975 L79.505 55.505 L80 56 Z M85 56 L85.495 56.495 L141.495 0.494975 L141 0 L140.505 -0.494975 L84.505 55.505 L85 56 Z M90 56 L90.495 56.495 L146.495 0.494975 L146 0 L145.505 -0.494975 L89.505 55.505 L90 56 Z M95 56 L95.495 56.495 L151.495 0.494975 L151 0 L150.505 -0.494975 L94.505 55.505 L95 56 Z M100 56 L100.495 56.495 L156.495 0.494975 L156 0 L155.505 -0.494975 L99.505 55.505 L100 56 Z M105 56 L105.495 56.495 L161.495 0.494975 L161 0 L160.505 -0.494975 L104.505 55.505 L105 56 Z M110 56 L110.495 56.495 L166.495 0.494975 L166 0 L165.505 -0.494975 L109.505 55.505 L110 56 Z M115 56 L115.495 56.495 L171.495 0.494975 L171 0 L170.505 -0.494975 L114.505 55.505 L115 56 Z M120 56 L120.495 56.495 L176.495 0.494975 L176 0 L175.505 -0.494975 L119.505 55.505 L120 56 Z M125 56 L125.495 56.495 L181.495 0.494975 L181 0 L180.505 -0.494975 L124.505 55.505 L125 56 Z M130 56 L130.495 56.495 L186.495 0.494975 L186 0 L185.505 -0.494975 L129.505 55.505 L130 56 Z M135 56 L135.495 56.495 L191.495 0.494975 L191 0 L190.505 -0.494975 L134.505 55.505 L135 56 Z M140 56 L140.495 56.495 L196.495 0.494975 L196 0 L195.505 -0.494975 L139.505 55.505 L140 56 Z M145 56 L145.495 56.495 L201.495 0.494975 L201 0 L200.505 -0.494975 L144.505 55.505 L145 56 Z M150 56 L150.495 56.495 L206.495 0.494975 L206 0 L205.505 -0.494975 L149.505 55.505 L150 56 Z M155 56 L155.495 56.495 L211.495 0.494975 L211 0 L210.505 -0.494975 L154.505 55.505 L155 56 Z M160 56 L160.495 56.495 L216.495 0.494975 L216 0 L215.505 -0.494975 L159.505 55.505 L160 56 Z M165 56 L165.495 56.495 L221.495 0.494975 L221 0 L220.505 -0.494975 L164.505 55.505 L165 56 Z M170 56 L170.495 56.495 L226.495 0.494975 L226 0 L225.505 -0.494975 L169.505 55.505 L170 56 Z M175 56 L175.495 56.495 L231.495 0.494975 L231 0 L230.505 -0.494975 L174.505 55.505 L175 56 Z M180 56 L180.495 56.495 L236.495 0.494975 L236 0 L235.505 -0.494975 L179.505 55.505 L180 56 Z M185 56 L185.495 56.495 L241.495 0.494975 L241 0 L240.505 -0.494975 L184.505 55.505 L185 56 Z M190 56 L190.495 56.495 L246.495 0.494975 L246 0 L245.505 -0.494975 L189.505 55.505 L190 56 Z M195 56 L195.495 56.495 L251.495 0.494975 L251 0 L250.505 -0.494975 L194.505 55.505 L195 56 Z M200 56 L200.495 56.495 L256.495 0.494975 L256 0 L255.505 -0.494975 L199.505 55.505 L200 56 Z M205 56 L205.495 56.495 L261.495 0.494975 L261 0 L260.505 -0.494975 L204.505 55.505 L205 56 Z M210 56 L210.495 56.495 L266.495 0.494975 L266 0 L265.505 -0.494975 L209.505 55.505 L210 56 Z M215 56 L215.495 56.495 L271.495 0.494975 L271 0 L270.505 -0.494975 L214.505 55.505 L215 56 Z M220 56 L220.495 56.495 L276.495 0.494975 L276 0 L275.505 -0.494975 L219.505 55.505 L220 56 Z M225 56 L225.495 56.495 L281.495 0.494975 L281 0 L280.505 -0.494975 L224.505 55.505 L225 56 Z M230 56 L230.495 56.495 L286.495 0.494975 L286 0 L285.505 -0.494975 L229.505 55.505 L230 56 Z M235 56 L235.495 56.495 L291.495 0.494975 L291 0 L290.505 -0.494975 L234.505 55.505 L235 56 Z M240 56 L240.495 56.495 L296.495 0.494975 L296 0 L295.505 -0.494975 L239.505 55.505 L240 56 Z M245 56 L245.495 56.495 L301.495 0.494975 L301 0 L300.505 -0.494975 L244.505 55.505 L245 56 Z M250 56 L250.495 56.495 L306.495 0.494975 L306 0 L305.505 -0.494975 L249.505 55.505 L250 56 Z M255 56 L255.495 56.495 L311.495 0.494975 L311 0 L310.505 -0.494975 L254.505 55.505 L255 56 Z M260 56 L260.495 56.495 L316.495 0.494975 L316 0 L315.505 -0.494975 L259.505 55.505 L260 56 Z M265 56 L265.495 56.495 L321.495 0.494975 L321 0 L320.505 -0.494975 L264.505 55.505 L265 56 Z M270 56 L270.495 56.495 L326.495 0.494975 L326 0 L325.505 -0.494975 L269.505 55.505 L270 56 Z M275 56 L275.495 56.495 L331.495 0.494975 L331 0 L330.505 -0.494975 L274.505 55.505 L275 56 Z M280 56 L280.495 56.495 L336.495 0.494975 L336 0 L335.505 -0.494975 L279.505 55.505 L280 56 Z M285 56 L285.495 56.495 L341.495 0.494975 L341 0 L340.505 -0.494975 L284.505 55.505 L285 56 Z M290 56 L290.495 56.495 L346.495 0.494975 L346 0 L345.505 -0.494975 L289.505 55.505 L290 56 Z M295 56 L295.495 56.495 L351.495 0.494975 L351 0 L350.505 -0.494975 L294.505 55.505 L295 56 Z M300 56 L300.495 56.495 L356.495 0.494975 L356 0 L355.505 -0.494975 L299.505 55.505 L300 56 Z M305 56 L305.495 56.495 L361.495 0.494975 L361 0 L360.505 -0.494975 L304.505 55.505 L305 56 Z M310 56 L310.495 56.495 L366.495 0.494975 L366 0 L365.505 -0.494975 L309.505 55.505 L310 56 Z M315 56 L315.495 56.495 L371.495 0.494975 L371 0 L370.505 -0.494975 L314.505 55.505 L315 56 Z M320 56 L320.495 56.495 L376.495 0.494975 L376 0 L375.505 -0.494975 L319.505 55.505 L320 56 Z M325 56 L325.495 56.495 L381.495 0.494975 L381 0 L380.505 -0.494975 L324.505 55.505 L325 56 Z M330 56 L330.495 56.495 L386.495 0.494975 L386 0 L385.505 -0.494975 L329.505 55.505 L330 56 Z M335 56 L335.495 56.495 L391.495 0.494975 L391 0 L390.505 -0.494975 L334.505 55.505 L335 56 Z M340 56 L340.495 56.495 L396.495 0.494975 L396 0 L395.505 -0.494975 L339.505 55.505 L340 56 Z M345 56 L345.495 56.495 L401.495 0.494975 L401 0 L400.505 -0.494975 L344.505 55.505 L345 56 Z M350 56 L350.495 56.495 L406.495 0.494975 L406 0 L405.505 -0.494975 L349.505 55.505 L350 56 Z M355 56 L355.495 56.495 L411.495 0.494975 L411 0 L410.505 -0.494975 L354.505 55.505 L355 56 Z M360 56 L360.495 56.495 L416.495 0.494975 L416 0 L415.505 -0.494975 L359.505 55.505 L360 56 Z M365 56 L365.495 56.495 L421.495 0.494975 L421 0 L420.505 -0.494975 L364.505 55.505 L365 56 Z M370 56 L370.495 56.495 L426.495 0.494975 L426 0 L425.505 -0.494975 L369.505 55.505 L370 56 Z M375 56 L375.495 56.495 L431.495 0.494975 L431 0 L430.505 -0.494975 L374.505 55.505 L375 56 Z M380 56 L380.495 56.495 L436.495 0.494975 L436 0 L435.505 -0.494975 L379.505 55.505 L380 56 Z M385 56 L385.495 56.495 L441.495 0.494975 L441 0 L440.505 -0.494975 L384.505 55.505 L385 56 Z" fill="#ffffff" fillOpacity="0.07"/></svg>
      </div>
      <div style={{ position: "absolute", left: "262px", top: "538px", width: "100px", height: "16px", display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "100px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "rgba(255, 255, 255, 0.85)" }}>6 legs · 54 people</p>
      </div>
      <div style={{ position: "absolute", left: "260px", top: "494px", width: "126px", height: "26px", display: "flex", flexDirection: "row", gap: "-6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ width: "26px", height: "26px", flexShrink: 0, borderRadius: "13px", background: "#332e43", boxShadow: "inset 0 0 0 2px #1a1a1a", display: "flex", flexDirection: "row", padding: "2px 2px 2px 2px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "14px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 500, color: "#bca8ff" }}>AC</p>
        </div>
        <div style={{ width: "26px", height: "26px", flexShrink: 0, borderRadius: "13px", background: "#332e43", boxShadow: "inset 0 0 0 2px #1a1a1a", display: "flex", flexDirection: "row", padding: "2px 2px 2px 2px", justifyContent: "center", alignItems: "center", boxSizing: "border-box", marginLeft: "-6px" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "13px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 500, color: "#bca8ff" }}>ES</p>
        </div>
        <div style={{ width: "26px", height: "26px", flexShrink: 0, borderRadius: "13px", background: "#332e43", boxShadow: "inset 0 0 0 2px #1a1a1a", display: "flex", flexDirection: "row", padding: "2px 2px 2px 2px", justifyContent: "center", alignItems: "center", boxSizing: "border-box", marginLeft: "-6px" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "14px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 500, color: "#bca8ff" }}>CS</p>
        </div>
        <div style={{ width: "26px", height: "26px", flexShrink: 0, borderRadius: "13px", background: "#332e43", boxShadow: "inset 0 0 0 2px #1a1a1a", display: "flex", flexDirection: "row", padding: "2px 2px 2px 2px", justifyContent: "center", alignItems: "center", boxSizing: "border-box", marginLeft: "-6px" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "14px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 500, color: "#bca8ff" }}>DA</p>
        </div>
        <div style={{ width: "26px", height: "26px", flexShrink: 0, borderRadius: "13px", background: "#332e43", boxShadow: "inset 0 0 0 2px #1a1a1a", display: "flex", flexDirection: "row", padding: "2px 2px 2px 2px", justifyContent: "center", alignItems: "center", boxSizing: "border-box", marginLeft: "-6px" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "16px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 500, color: "#bca8ff" }}>RM</p>
        </div>
        <div style={{ width: "26px", height: "26px", flexShrink: 0, borderRadius: "13px", background: "#332e43", boxShadow: "inset 0 0 0 2px #1a1a1a", display: "flex", flexDirection: "row", padding: "2px 2px 2px 2px", justifyContent: "center", alignItems: "center", boxSizing: "border-box", marginLeft: "-6px" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "12px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 500, color: "#bca8ff" }}>FY</p>
        </div>
      </div>
      <div style={{ position: "absolute", left: "550px", top: "502px", width: "276px", height: "82px", borderRadius: "8px 8px 3px 3px", background: "linear-gradient(180deg, #5642a8 0%, #4c3c91 100%)", boxShadow: "inset 0 0 0 1px rgba(117, 86, 242, 0.22), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.06), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.25)", overflow: "hidden" }}>
        <svg style={{ position: "absolute", left: "-82px", top: "0px", width: "517px", height: "82px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="517" height="82" viewBox="0 0 517 82" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 82 L0.494975 82.495 L82.495 0.494975 L82 0 L81.505 -0.494975 L-0.494975 81.505 L0 82 Z M5 82 L5.49497 82.495 L87.495 0.494975 L87 0 L86.505 -0.494975 L4.50503 81.505 L5 82 Z M10 82 L10.495 82.495 L92.495 0.494975 L92 0 L91.505 -0.494975 L9.50502 81.505 L10 82 Z M15 82 L15.495 82.495 L97.495 0.494975 L97 0 L96.505 -0.494975 L14.505 81.505 L15 82 Z M20 82 L20.495 82.495 L102.495 0.494975 L102 0 L101.505 -0.494975 L19.505 81.505 L20 82 Z M25 82 L25.495 82.495 L107.495 0.494975 L107 0 L106.505 -0.494975 L24.505 81.505 L25 82 Z M30 82 L30.495 82.495 L112.495 0.494975 L112 0 L111.505 -0.494975 L29.505 81.505 L30 82 Z M35 82 L35.495 82.495 L117.495 0.494975 L117 0 L116.505 -0.494975 L34.505 81.505 L35 82 Z M40 82 L40.495 82.495 L122.495 0.494975 L122 0 L121.505 -0.494975 L39.505 81.505 L40 82 Z M45 82 L45.495 82.495 L127.495 0.494975 L127 0 L126.505 -0.494975 L44.505 81.505 L45 82 Z M50 82 L50.495 82.495 L132.495 0.494975 L132 0 L131.505 -0.494975 L49.505 81.505 L50 82 Z M55 82 L55.495 82.495 L137.495 0.494975 L137 0 L136.505 -0.494975 L54.505 81.505 L55 82 Z M60 82 L60.495 82.495 L142.495 0.494975 L142 0 L141.505 -0.494975 L59.505 81.505 L60 82 Z M65 82 L65.495 82.495 L147.495 0.494975 L147 0 L146.505 -0.494975 L64.505 81.505 L65 82 Z M70 82 L70.495 82.495 L152.495 0.494975 L152 0 L151.505 -0.494975 L69.505 81.505 L70 82 Z M75 82 L75.495 82.495 L157.495 0.494975 L157 0 L156.505 -0.494975 L74.505 81.505 L75 82 Z M80 82 L80.495 82.495 L162.495 0.494975 L162 0 L161.505 -0.494975 L79.505 81.505 L80 82 Z M85 82 L85.495 82.495 L167.495 0.494975 L167 0 L166.505 -0.494975 L84.505 81.505 L85 82 Z M90 82 L90.495 82.495 L172.495 0.494975 L172 0 L171.505 -0.494975 L89.505 81.505 L90 82 Z M95 82 L95.495 82.495 L177.495 0.494975 L177 0 L176.505 -0.494975 L94.505 81.505 L95 82 Z M100 82 L100.495 82.495 L182.495 0.494975 L182 0 L181.505 -0.494975 L99.505 81.505 L100 82 Z M105 82 L105.495 82.495 L187.495 0.494975 L187 0 L186.505 -0.494975 L104.505 81.505 L105 82 Z M110 82 L110.495 82.495 L192.495 0.494975 L192 0 L191.505 -0.494975 L109.505 81.505 L110 82 Z M115 82 L115.495 82.495 L197.495 0.494975 L197 0 L196.505 -0.494975 L114.505 81.505 L115 82 Z M120 82 L120.495 82.495 L202.495 0.494975 L202 0 L201.505 -0.494975 L119.505 81.505 L120 82 Z M125 82 L125.495 82.495 L207.495 0.494975 L207 0 L206.505 -0.494975 L124.505 81.505 L125 82 Z M130 82 L130.495 82.495 L212.495 0.494975 L212 0 L211.505 -0.494975 L129.505 81.505 L130 82 Z M135 82 L135.495 82.495 L217.495 0.494975 L217 0 L216.505 -0.494975 L134.505 81.505 L135 82 Z M140 82 L140.495 82.495 L222.495 0.494975 L222 0 L221.505 -0.494975 L139.505 81.505 L140 82 Z M145 82 L145.495 82.495 L227.495 0.494975 L227 0 L226.505 -0.494975 L144.505 81.505 L145 82 Z M150 82 L150.495 82.495 L232.495 0.494975 L232 0 L231.505 -0.494975 L149.505 81.505 L150 82 Z M155 82 L155.495 82.495 L237.495 0.494975 L237 0 L236.505 -0.494975 L154.505 81.505 L155 82 Z M160 82 L160.495 82.495 L242.495 0.494975 L242 0 L241.505 -0.494975 L159.505 81.505 L160 82 Z M165 82 L165.495 82.495 L247.495 0.494975 L247 0 L246.505 -0.494975 L164.505 81.505 L165 82 Z M170 82 L170.495 82.495 L252.495 0.494975 L252 0 L251.505 -0.494975 L169.505 81.505 L170 82 Z M175 82 L175.495 82.495 L257.495 0.494975 L257 0 L256.505 -0.494975 L174.505 81.505 L175 82 Z M180 82 L180.495 82.495 L262.495 0.494975 L262 0 L261.505 -0.494975 L179.505 81.505 L180 82 Z M185 82 L185.495 82.495 L267.495 0.494975 L267 0 L266.505 -0.494975 L184.505 81.505 L185 82 Z M190 82 L190.495 82.495 L272.495 0.494975 L272 0 L271.505 -0.494975 L189.505 81.505 L190 82 Z M195 82 L195.495 82.495 L277.495 0.494975 L277 0 L276.505 -0.494975 L194.505 81.505 L195 82 Z M200 82 L200.495 82.495 L282.495 0.494975 L282 0 L281.505 -0.494975 L199.505 81.505 L200 82 Z M205 82 L205.495 82.495 L287.495 0.494975 L287 0 L286.505 -0.494975 L204.505 81.505 L205 82 Z M210 82 L210.495 82.495 L292.495 0.494975 L292 0 L291.505 -0.494975 L209.505 81.505 L210 82 Z M215 82 L215.495 82.495 L297.495 0.494975 L297 0 L296.505 -0.494975 L214.505 81.505 L215 82 Z M220 82 L220.495 82.495 L302.495 0.494975 L302 0 L301.505 -0.494975 L219.505 81.505 L220 82 Z M225 82 L225.495 82.495 L307.495 0.494975 L307 0 L306.505 -0.494975 L224.505 81.505 L225 82 Z M230 82 L230.495 82.495 L312.495 0.494975 L312 0 L311.505 -0.494975 L229.505 81.505 L230 82 Z M235 82 L235.495 82.495 L317.495 0.494975 L317 0 L316.505 -0.494975 L234.505 81.505 L235 82 Z M240 82 L240.495 82.495 L322.495 0.494975 L322 0 L321.505 -0.494975 L239.505 81.505 L240 82 Z M245 82 L245.495 82.495 L327.495 0.494975 L327 0 L326.505 -0.494975 L244.505 81.505 L245 82 Z M250 82 L250.495 82.495 L332.495 0.494975 L332 0 L331.505 -0.494975 L249.505 81.505 L250 82 Z M255 82 L255.495 82.495 L337.495 0.494975 L337 0 L336.505 -0.494975 L254.505 81.505 L255 82 Z M260 82 L260.495 82.495 L342.495 0.494975 L342 0 L341.505 -0.494975 L259.505 81.505 L260 82 Z M265 82 L265.495 82.495 L347.495 0.494975 L347 0 L346.505 -0.494975 L264.505 81.505 L265 82 Z M270 82 L270.495 82.495 L352.495 0.494975 L352 0 L351.505 -0.494975 L269.505 81.505 L270 82 Z M275 82 L275.495 82.495 L357.495 0.494975 L357 0 L356.505 -0.494975 L274.505 81.505 L275 82 Z M280 82 L280.495 82.495 L362.495 0.494975 L362 0 L361.505 -0.494975 L279.505 81.505 L280 82 Z M285 82 L285.495 82.495 L367.495 0.494975 L367 0 L366.505 -0.494975 L284.505 81.505 L285 82 Z M290 82 L290.495 82.495 L372.495 0.494975 L372 0 L371.505 -0.494975 L289.505 81.505 L290 82 Z M295 82 L295.495 82.495 L377.495 0.494975 L377 0 L376.505 -0.494975 L294.505 81.505 L295 82 Z M300 82 L300.495 82.495 L382.495 0.494975 L382 0 L381.505 -0.494975 L299.505 81.505 L300 82 Z M305 82 L305.495 82.495 L387.495 0.494975 L387 0 L386.505 -0.494975 L304.505 81.505 L305 82 Z M310 82 L310.495 82.495 L392.495 0.494975 L392 0 L391.505 -0.494975 L309.505 81.505 L310 82 Z M315 82 L315.495 82.495 L397.495 0.494975 L397 0 L396.505 -0.494975 L314.505 81.505 L315 82 Z M320 82 L320.495 82.495 L402.495 0.494975 L402 0 L401.505 -0.494975 L319.505 81.505 L320 82 Z M325 82 L325.495 82.495 L407.495 0.494975 L407 0 L406.505 -0.494975 L324.505 81.505 L325 82 Z M330 82 L330.495 82.495 L412.495 0.494975 L412 0 L411.505 -0.494975 L329.505 81.505 L330 82 Z M335 82 L335.495 82.495 L417.495 0.494975 L417 0 L416.505 -0.494975 L334.505 81.505 L335 82 Z M340 82 L340.495 82.495 L422.495 0.494975 L422 0 L421.505 -0.494975 L339.505 81.505 L340 82 Z M345 82 L345.495 82.495 L427.495 0.494975 L427 0 L426.505 -0.494975 L344.505 81.505 L345 82 Z M350 82 L350.495 82.495 L432.495 0.494975 L432 0 L431.505 -0.494975 L349.505 81.505 L350 82 Z M355 82 L355.495 82.495 L437.495 0.494975 L437 0 L436.505 -0.494975 L354.505 81.505 L355 82 Z M360 82 L360.495 82.495 L442.495 0.494975 L442 0 L441.505 -0.494975 L359.505 81.505 L360 82 Z M365 82 L365.495 82.495 L447.495 0.494975 L447 0 L446.505 -0.494975 L364.505 81.505 L365 82 Z M370 82 L370.495 82.495 L452.495 0.494975 L452 0 L451.505 -0.494975 L369.505 81.505 L370 82 Z M375 82 L375.495 82.495 L457.495 0.494975 L457 0 L456.505 -0.494975 L374.505 81.505 L375 82 Z M380 82 L380.495 82.495 L462.495 0.494975 L462 0 L461.505 -0.494975 L379.505 81.505 L380 82 Z M385 82 L385.495 82.495 L467.495 0.494975 L467 0 L466.505 -0.494975 L384.505 81.505 L385 82 Z M390 82 L390.495 82.495 L472.495 0.494975 L472 0 L471.505 -0.494975 L389.505 81.505 L390 82 Z M395 82 L395.495 82.495 L477.495 0.494975 L477 0 L476.505 -0.494975 L394.505 81.505 L395 82 Z M400 82 L400.495 82.495 L482.495 0.494975 L482 0 L481.505 -0.494975 L399.505 81.505 L400 82 Z M405 82 L405.495 82.495 L487.495 0.494975 L487 0 L486.505 -0.494975 L404.505 81.505 L405 82 Z M410 82 L410.495 82.495 L492.495 0.494975 L492 0 L491.505 -0.494975 L409.505 81.505 L410 82 Z M415 82 L415.495 82.495 L497.495 0.494975 L497 0 L496.505 -0.494975 L414.505 81.505 L415 82 Z M420 82 L420.495 82.495 L502.495 0.494975 L502 0 L501.505 -0.494975 L419.505 81.505 L420 82 Z M425 82 L425.495 82.495 L507.495 0.494975 L507 0 L506.505 -0.494975 L424.505 81.505 L425 82 Z M430 82 L430.495 82.495 L512.495 0.494975 L512 0 L511.505 -0.494975 L429.505 81.505 L430 82 Z M435 82 L435.495 82.495 L517.495 0.494975 L517 0 L516.505 -0.494975 L434.505 81.505 L435 82 Z" fill="#ffffff" fillOpacity="0.07"/></svg>
      </div>
      <div style={{ position: "absolute", left: "562px", top: "512px", width: "99px", height: "16px", display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "99px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "rgba(255, 255, 255, 0.85)" }}>3 legs · 48 people</p>
      </div>
      <div style={{ position: "absolute", left: "560px", top: "468px", width: "66px", height: "26px", display: "flex", flexDirection: "row", gap: "-6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ width: "26px", height: "26px", flexShrink: 0, borderRadius: "13px", background: "#2b3242", boxShadow: "inset 0 0 0 2px #1a1a1a", display: "flex", flexDirection: "row", padding: "2px 2px 2px 2px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "16px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 500, color: "#9bb9f9" }}>EW</p>
        </div>
        <div style={{ width: "26px", height: "26px", flexShrink: 0, borderRadius: "13px", background: "#2b3242", boxShadow: "inset 0 0 0 2px #1a1a1a", display: "flex", flexDirection: "row", padding: "2px 2px 2px 2px", justifyContent: "center", alignItems: "center", boxSizing: "border-box", marginLeft: "-6px" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "14px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 500, color: "#9bb9f9" }}>SS</p>
        </div>
        <div style={{ width: "26px", height: "26px", flexShrink: 0, borderRadius: "13px", background: "#2b3242", boxShadow: "inset 0 0 0 2px #1a1a1a", display: "flex", flexDirection: "row", padding: "2px 2px 2px 2px", justifyContent: "center", alignItems: "center", boxSizing: "border-box", marginLeft: "-6px" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "14px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 500, color: "#9bb9f9" }}>JR</p>
        </div>
      </div>
      <div style={{ position: "absolute", left: "850px", top: "476px", width: "276px", height: "108px", borderRadius: "8px 8px 3px 3px", background: "linear-gradient(180deg, #5642a8 0%, #4c3c91 100%)", boxShadow: "inset 0 0 0 1px rgba(117, 86, 242, 0.22), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.06), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.25)", overflow: "hidden" }}>
        <svg style={{ position: "absolute", left: "-108px", top: "0px", width: "598px", height: "108px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="598" height="108" viewBox="0 0 598 108" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 108 L0.494975 108.495 L108.495 0.494975 L108 0 L107.505 -0.494975 L-0.494975 107.505 L0 108 Z M5 108 L5.49497 108.495 L113.495 0.494975 L113 0 L112.505 -0.494975 L4.50503 107.505 L5 108 Z M10 108 L10.495 108.495 L118.495 0.494975 L118 0 L117.505 -0.494975 L9.50502 107.505 L10 108 Z M15 108 L15.495 108.495 L123.495 0.494975 L123 0 L122.505 -0.494975 L14.505 107.505 L15 108 Z M20 108 L20.495 108.495 L128.495 0.494975 L128 0 L127.505 -0.494975 L19.505 107.505 L20 108 Z M25 108 L25.495 108.495 L133.495 0.494975 L133 0 L132.505 -0.494975 L24.505 107.505 L25 108 Z M30 108 L30.495 108.495 L138.495 0.494975 L138 0 L137.505 -0.494975 L29.505 107.505 L30 108 Z M35 108 L35.495 108.495 L143.495 0.494975 L143 0 L142.505 -0.494975 L34.505 107.505 L35 108 Z M40 108 L40.495 108.495 L148.495 0.494975 L148 0 L147.505 -0.494975 L39.505 107.505 L40 108 Z M45 108 L45.495 108.495 L153.495 0.494975 L153 0 L152.505 -0.494975 L44.505 107.505 L45 108 Z M50 108 L50.495 108.495 L158.495 0.494975 L158 0 L157.505 -0.494975 L49.505 107.505 L50 108 Z M55 108 L55.495 108.495 L163.495 0.494975 L163 0 L162.505 -0.494975 L54.505 107.505 L55 108 Z M60 108 L60.495 108.495 L168.495 0.494975 L168 0 L167.505 -0.494975 L59.505 107.505 L60 108 Z M65 108 L65.495 108.495 L173.495 0.494975 L173 0 L172.505 -0.494975 L64.505 107.505 L65 108 Z M70 108 L70.495 108.495 L178.495 0.494975 L178 0 L177.505 -0.494975 L69.505 107.505 L70 108 Z M75 108 L75.495 108.495 L183.495 0.494975 L183 0 L182.505 -0.494975 L74.505 107.505 L75 108 Z M80 108 L80.495 108.495 L188.495 0.494975 L188 0 L187.505 -0.494975 L79.505 107.505 L80 108 Z M85 108 L85.495 108.495 L193.495 0.494975 L193 0 L192.505 -0.494975 L84.505 107.505 L85 108 Z M90 108 L90.495 108.495 L198.495 0.494975 L198 0 L197.505 -0.494975 L89.505 107.505 L90 108 Z M95 108 L95.495 108.495 L203.495 0.494975 L203 0 L202.505 -0.494975 L94.505 107.505 L95 108 Z M100 108 L100.495 108.495 L208.495 0.494975 L208 0 L207.505 -0.494975 L99.505 107.505 L100 108 Z M105 108 L105.495 108.495 L213.495 0.494975 L213 0 L212.505 -0.494975 L104.505 107.505 L105 108 Z M110 108 L110.495 108.495 L218.495 0.494975 L218 0 L217.505 -0.494975 L109.505 107.505 L110 108 Z M115 108 L115.495 108.495 L223.495 0.494975 L223 0 L222.505 -0.494975 L114.505 107.505 L115 108 Z M120 108 L120.495 108.495 L228.495 0.494975 L228 0 L227.505 -0.494975 L119.505 107.505 L120 108 Z M125 108 L125.495 108.495 L233.495 0.494975 L233 0 L232.505 -0.494975 L124.505 107.505 L125 108 Z M130 108 L130.495 108.495 L238.495 0.494975 L238 0 L237.505 -0.494975 L129.505 107.505 L130 108 Z M135 108 L135.495 108.495 L243.495 0.494975 L243 0 L242.505 -0.494975 L134.505 107.505 L135 108 Z M140 108 L140.495 108.495 L248.495 0.494975 L248 0 L247.505 -0.494975 L139.505 107.505 L140 108 Z M145 108 L145.495 108.495 L253.495 0.494975 L253 0 L252.505 -0.494975 L144.505 107.505 L145 108 Z M150 108 L150.495 108.495 L258.495 0.494975 L258 0 L257.505 -0.494975 L149.505 107.505 L150 108 Z M155 108 L155.495 108.495 L263.495 0.494975 L263 0 L262.505 -0.494975 L154.505 107.505 L155 108 Z M160 108 L160.495 108.495 L268.495 0.494975 L268 0 L267.505 -0.494975 L159.505 107.505 L160 108 Z M165 108 L165.495 108.495 L273.495 0.494975 L273 0 L272.505 -0.494975 L164.505 107.505 L165 108 Z M170 108 L170.495 108.495 L278.495 0.494975 L278 0 L277.505 -0.494975 L169.505 107.505 L170 108 Z M175 108 L175.495 108.495 L283.495 0.494975 L283 0 L282.505 -0.494975 L174.505 107.505 L175 108 Z M180 108 L180.495 108.495 L288.495 0.494975 L288 0 L287.505 -0.494975 L179.505 107.505 L180 108 Z M185 108 L185.495 108.495 L293.495 0.494975 L293 0 L292.505 -0.494975 L184.505 107.505 L185 108 Z M190 108 L190.495 108.495 L298.495 0.494975 L298 0 L297.505 -0.494975 L189.505 107.505 L190 108 Z M195 108 L195.495 108.495 L303.495 0.494975 L303 0 L302.505 -0.494975 L194.505 107.505 L195 108 Z M200 108 L200.495 108.495 L308.495 0.494975 L308 0 L307.505 -0.494975 L199.505 107.505 L200 108 Z M205 108 L205.495 108.495 L313.495 0.494975 L313 0 L312.505 -0.494975 L204.505 107.505 L205 108 Z M210 108 L210.495 108.495 L318.495 0.494975 L318 0 L317.505 -0.494975 L209.505 107.505 L210 108 Z M215 108 L215.495 108.495 L323.495 0.494975 L323 0 L322.505 -0.494975 L214.505 107.505 L215 108 Z M220 108 L220.495 108.495 L328.495 0.494975 L328 0 L327.505 -0.494975 L219.505 107.505 L220 108 Z M225 108 L225.495 108.495 L333.495 0.494975 L333 0 L332.505 -0.494975 L224.505 107.505 L225 108 Z M230 108 L230.495 108.495 L338.495 0.494975 L338 0 L337.505 -0.494975 L229.505 107.505 L230 108 Z M235 108 L235.495 108.495 L343.495 0.494975 L343 0 L342.505 -0.494975 L234.505 107.505 L235 108 Z M240 108 L240.495 108.495 L348.495 0.494975 L348 0 L347.505 -0.494975 L239.505 107.505 L240 108 Z M245 108 L245.495 108.495 L353.495 0.494975 L353 0 L352.505 -0.494975 L244.505 107.505 L245 108 Z M250 108 L250.495 108.495 L358.495 0.494975 L358 0 L357.505 -0.494975 L249.505 107.505 L250 108 Z M255 108 L255.495 108.495 L363.495 0.494975 L363 0 L362.505 -0.494975 L254.505 107.505 L255 108 Z M260 108 L260.495 108.495 L368.495 0.494975 L368 0 L367.505 -0.494975 L259.505 107.505 L260 108 Z M265 108 L265.495 108.495 L373.495 0.494975 L373 0 L372.505 -0.494975 L264.505 107.505 L265 108 Z M270 108 L270.495 108.495 L378.495 0.494975 L378 0 L377.505 -0.494975 L269.505 107.505 L270 108 Z M275 108 L275.495 108.495 L383.495 0.494975 L383 0 L382.505 -0.494975 L274.505 107.505 L275 108 Z M280 108 L280.495 108.495 L388.495 0.494975 L388 0 L387.505 -0.494975 L279.505 107.505 L280 108 Z M285 108 L285.495 108.495 L393.495 0.494975 L393 0 L392.505 -0.494975 L284.505 107.505 L285 108 Z M290 108 L290.495 108.495 L398.495 0.494975 L398 0 L397.505 -0.494975 L289.505 107.505 L290 108 Z M295 108 L295.495 108.495 L403.495 0.494975 L403 0 L402.505 -0.494975 L294.505 107.505 L295 108 Z M300 108 L300.495 108.495 L408.495 0.494975 L408 0 L407.505 -0.494975 L299.505 107.505 L300 108 Z M305 108 L305.495 108.495 L413.495 0.494975 L413 0 L412.505 -0.494975 L304.505 107.505 L305 108 Z M310 108 L310.495 108.495 L418.495 0.494975 L418 0 L417.505 -0.494975 L309.505 107.505 L310 108 Z M315 108 L315.495 108.495 L423.495 0.494975 L423 0 L422.505 -0.494975 L314.505 107.505 L315 108 Z M320 108 L320.495 108.495 L428.495 0.494975 L428 0 L427.505 -0.494975 L319.505 107.505 L320 108 Z M325 108 L325.495 108.495 L433.495 0.494975 L433 0 L432.505 -0.494975 L324.505 107.505 L325 108 Z M330 108 L330.495 108.495 L438.495 0.494975 L438 0 L437.505 -0.494975 L329.505 107.505 L330 108 Z M335 108 L335.495 108.495 L443.495 0.494975 L443 0 L442.505 -0.494975 L334.505 107.505 L335 108 Z M340 108 L340.495 108.495 L448.495 0.494975 L448 0 L447.505 -0.494975 L339.505 107.505 L340 108 Z M345 108 L345.495 108.495 L453.495 0.494975 L453 0 L452.505 -0.494975 L344.505 107.505 L345 108 Z M350 108 L350.495 108.495 L458.495 0.494975 L458 0 L457.505 -0.494975 L349.505 107.505 L350 108 Z M355 108 L355.495 108.495 L463.495 0.494975 L463 0 L462.505 -0.494975 L354.505 107.505 L355 108 Z M360 108 L360.495 108.495 L468.495 0.494975 L468 0 L467.505 -0.494975 L359.505 107.505 L360 108 Z M365 108 L365.495 108.495 L473.495 0.494975 L473 0 L472.505 -0.494975 L364.505 107.505 L365 108 Z M370 108 L370.495 108.495 L478.495 0.494975 L478 0 L477.505 -0.494975 L369.505 107.505 L370 108 Z M375 108 L375.495 108.495 L483.495 0.494975 L483 0 L482.505 -0.494975 L374.505 107.505 L375 108 Z M380 108 L380.495 108.495 L488.495 0.494975 L488 0 L487.505 -0.494975 L379.505 107.505 L380 108 Z M385 108 L385.495 108.495 L493.495 0.494975 L493 0 L492.505 -0.494975 L384.505 107.505 L385 108 Z M390 108 L390.495 108.495 L498.495 0.494975 L498 0 L497.505 -0.494975 L389.505 107.505 L390 108 Z M395 108 L395.495 108.495 L503.495 0.494975 L503 0 L502.505 -0.494975 L394.505 107.505 L395 108 Z M400 108 L400.495 108.495 L508.495 0.494975 L508 0 L507.505 -0.494975 L399.505 107.505 L400 108 Z M405 108 L405.495 108.495 L513.495 0.494975 L513 0 L512.505 -0.494975 L404.505 107.505 L405 108 Z M410 108 L410.495 108.495 L518.495 0.494975 L518 0 L517.505 -0.494975 L409.505 107.505 L410 108 Z M415 108 L415.495 108.495 L523.495 0.494975 L523 0 L522.505 -0.494975 L414.505 107.505 L415 108 Z M420 108 L420.495 108.495 L528.495 0.494975 L528 0 L527.505 -0.494975 L419.505 107.505 L420 108 Z M425 108 L425.495 108.495 L533.495 0.494975 L533 0 L532.505 -0.494975 L424.505 107.505 L425 108 Z M430 108 L430.495 108.495 L538.495 0.494975 L538 0 L537.505 -0.494975 L429.505 107.505 L430 108 Z M435 108 L435.495 108.495 L543.495 0.494975 L543 0 L542.505 -0.494975 L434.505 107.505 L435 108 Z M440 108 L440.495 108.495 L548.495 0.494975 L548 0 L547.505 -0.494975 L439.505 107.505 L440 108 Z M445 108 L445.495 108.495 L553.495 0.494975 L553 0 L552.505 -0.494975 L444.505 107.505 L445 108 Z M450 108 L450.495 108.495 L558.495 0.494975 L558 0 L557.505 -0.494975 L449.505 107.505 L450 108 Z M455 108 L455.495 108.495 L563.495 0.494975 L563 0 L562.505 -0.494975 L454.505 107.505 L455 108 Z M460 108 L460.495 108.495 L568.495 0.494975 L568 0 L567.505 -0.494975 L459.505 107.505 L460 108 Z M465 108 L465.495 108.495 L573.495 0.494975 L573 0 L572.505 -0.494975 L464.505 107.505 L465 108 Z M470 108 L470.495 108.495 L578.495 0.494975 L578 0 L577.505 -0.494975 L469.505 107.505 L470 108 Z M475 108 L475.495 108.495 L583.495 0.494975 L583 0 L582.505 -0.494975 L474.505 107.505 L475 108 Z M480 108 L480.495 108.495 L588.495 0.494975 L588 0 L587.505 -0.494975 L479.505 107.505 L480 108 Z M485 108 L485.495 108.495 L593.495 0.494975 L593 0 L592.505 -0.494975 L484.505 107.505 L485 108 Z M490 108 L490.495 108.495 L598.495 0.494975 L598 0 L597.505 -0.494975 L489.505 107.505 L490 108 Z" fill="#ffffff" fillOpacity="0.07"/></svg>
      </div>
      <div style={{ position: "absolute", left: "862px", top: "486px", width: "104px", height: "16px", display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "104px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "rgba(255, 255, 255, 0.85)" }}>3 legs · 124 people</p>
      </div>
      <div style={{ position: "absolute", left: "860px", top: "442px", width: "66px", height: "26px", display: "flex", flexDirection: "row", gap: "-6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ width: "26px", height: "26px", flexShrink: 0, borderRadius: "13px", background: "#293a2e", boxShadow: "inset 0 0 0 2px #1a1a1a", display: "flex", flexDirection: "row", padding: "2px 2px 2px 2px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "12px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 500, color: "#90d8a8" }}>JL</p>
        </div>
        <div style={{ width: "26px", height: "26px", flexShrink: 0, borderRadius: "13px", background: "#293a2e", boxShadow: "inset 0 0 0 2px #1a1a1a", display: "flex", flexDirection: "row", padding: "2px 2px 2px 2px", justifyContent: "center", alignItems: "center", boxSizing: "border-box", marginLeft: "-6px" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "15px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 500, color: "#90d8a8" }}>ON</p>
        </div>
        <div style={{ width: "26px", height: "26px", flexShrink: 0, borderRadius: "13px", background: "#293a2e", boxShadow: "inset 0 0 0 2px #1a1a1a", display: "flex", flexDirection: "row", padding: "2px 2px 2px 2px", justifyContent: "center", alignItems: "center", boxSizing: "border-box", marginLeft: "-6px" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "14px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 500, color: "#90d8a8" }}>CE</p>
        </div>
      </div>
      <div style={{ position: "absolute", left: "1150px", top: "450px", width: "276px", height: "134px", borderRadius: "8px 8px 3px 3px", background: "linear-gradient(180deg, #8c70ff 0%, #7b5bff 100%)", boxShadow: "inset 0 0 0 1px rgba(96, 71, 199, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)", overflow: "hidden" }} />
      <div style={{ position: "absolute", left: "1162px", top: "460px", width: "165px", height: "16px", display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <Crown size={14} strokeWidth={2.14} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#ffffff", display: "block" }} />
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "145px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#ffffff" }}>You · 241 people in 13 legs</p>
      </div>
      <div style={{ position: "absolute", left: "526.5px", top: "512px", width: "24px", height: "24px", borderRadius: "12px", background: "#232323", boxShadow: "inset 0 0 0 1px #2e2e2e, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
        <ChevronRight size={14} strokeWidth={2.14} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#dadada", display: "block" }} />
      </div>
      <div style={{ position: "absolute", left: "826.5px", top: "486px", width: "24px", height: "24px", borderRadius: "12px", background: "#232323", boxShadow: "inset 0 0 0 1px #2e2e2e, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
        <ChevronRight size={14} strokeWidth={2.14} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#dadada", display: "block" }} />
      </div>
      <div style={{ position: "absolute", left: "1126.5px", top: "460px", width: "24px", height: "24px", borderRadius: "12px", background: "#232323", boxShadow: "inset 0 0 0 1px #2e2e2e, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
        <ChevronRight size={14} strokeWidth={2.14} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#dadada", display: "block" }} />
      </div>
      <div style={{ position: "absolute", left: "250px", top: "614px", width: "369px", height: "43px", display: "flex", flexDirection: "column", gap: "7px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "179px", fontFamily: "'Geist'", fontSize: "18px", fontWeight: 500, color: "#ededed", lineHeight: "1.100000023841858", letterSpacing: "-0.02em" }}>Qualification progress</p>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "369px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8a8a8a", lineHeight: "1.2999999523162842" }}>Legs closest to their next rank · July requirements, refreshed hourly</p>
      </div>
      <div style={{ position: "absolute", left: "810px", top: "620px", width: "216px", height: "16px", display: "flex", flexDirection: "row", gap: "14px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "9px", height: "9px", flexShrink: 0, borderRadius: "2.5px", background: "linear-gradient(180deg, #58bd90 0%, #3fb37f 100%)", boxShadow: "inset 0 0 0 1px rgba(49, 140, 99, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)", overflow: "hidden" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "22px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8a8a8a" }}>Met</p>
        </div>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "9px", height: "9px", flexShrink: 0, borderRadius: "2.5px", background: "linear-gradient(180deg, #8c70ff 0%, #7b5bff 100%)", boxShadow: "inset 0 0 0 1px rgba(96, 71, 199, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)", overflow: "hidden" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "62px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8a8a8a" }}>In progress</p>
        </div>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "9px", height: "9px", flexShrink: 0, borderRadius: "2.5px", background: "linear-gradient(180deg, #5642a8 0%, #4c3c91 100%)", boxShadow: "inset 0 0 0 1px rgba(117, 86, 242, 0.22), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.06), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.25)", overflow: "hidden" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "59px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8a8a8a" }}>Remaining</p>
        </div>
      </div>
      <div style={{ position: "absolute", left: "239px", top: "664px", width: "787px", height: "356px", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ width: "787px", height: "36px", flexShrink: 0, boxShadow: "inset 0 1px 0 0 #222222, inset 0 -1px 0 0 #222222", display: "flex", flexDirection: "row", padding: "1px 0px 1px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "196px", height: "36px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "2px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "24px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#7c7c7c" }}>Leg</p>
          </div>
          <div style={{ width: "100px", height: "36px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "2px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "63px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#7c7c7c" }}>Next rank</p>
          </div>
          <div style={{ width: "116px", height: "36px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "2px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "75px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#7c7c7c" }}>Active subs</p>
          </div>
          <div style={{ width: "112px", height: "36px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "2px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "45px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#7c7c7c" }}>People</p>
          </div>
          <div style={{ width: "112px", height: "36px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "2px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "83px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#7c7c7c" }}>MG1 / month</p>
          </div>
          <div style={{ width: "75px", height: "36px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "2px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "31px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#7c7c7c" }}>Legs</p>
          </div>
          <div style={{ width: "76px", height: "36px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 0px", gap: "2px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "25px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#7c7c7c" }}>ETA</p>
          </div>
        </div>
        <div style={{ width: "787px", height: "64px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #222222", display: "flex", flexDirection: "row", padding: "0px 0px 1px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "196px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "119px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>Edwin & Wiliannys</p>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ height: "18px", flexShrink: 0, borderRadius: "6px", background: "#1b2233", boxShadow: "inset 0 0 0 1px #24304a, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", display: "flex", flexDirection: "row", padding: "1px 7px 1px 7px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "32px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 500, color: "#7aa2f7", letterSpacing: "-0.01em", textTransform: "uppercase" }}>EAGLE</p>
                </div>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "53px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#909090" }}>16 people</p>
              </div>
            </div>
          </div>
          <div style={{ width: "100px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "5px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <ChevronRight size={12} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#5f5f5f", display: "block" }} />
              <div style={{ height: "18px", flexShrink: 0, borderRadius: "6px", background: "#16251c", boxShadow: "inset 0 0 0 1px #1f3326, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", display: "flex", flexDirection: "row", padding: "1px 7px 1px 7px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "47px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 500, color: "#6bcb8b", letterSpacing: "-0.01em", textTransform: "uppercase" }}>EMERALD</p>
              </div>
            </div>
          </div>
          <div style={{ width: "116px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "84px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "84px", height: "8px", flexShrink: 0, position: "relative" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", width: "78.4px", height: "8px", borderRadius: "3px", background: "linear-gradient(90deg, #a994ff 0%, #7b5bff 100%)", boxShadow: "inset 0 0 0 1px rgba(96, 71, 199, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)", overflow: "hidden" }} />
                <svg style={{ position: "absolute", left: "82.4px", top: "0px", width: "1.1px", height: "8px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="1.1" height="8" viewBox="0 0 1.1 8" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0 L-0.5 0 L-0.5 8 L0 8 L0.5 8 L0.5 0 L0 0 Z M1.1 0 L0.6 0 L0.6 8 L1.1 8 L1.6 8 L1.6 0 L1.1 0 Z" fill="#3a3a3a"/></svg>
              </div>
              <div style={{ width: "84px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "59px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#ededed" }}>280 / 300</p>
                <p style={{ flexShrink: 0, height: "16px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "0px" }}></p>
              </div>
            </div>
          </div>
          <div style={{ width: "112px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "84px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "84px", height: "8px", flexShrink: 0, position: "relative" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", width: "33.6px", height: "8px", borderRadius: "3px", background: "linear-gradient(90deg, #a994ff 0%, #7b5bff 100%)", boxShadow: "inset 0 0 0 1px rgba(96, 71, 199, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)", overflow: "hidden" }} />
                <svg style={{ position: "absolute", left: "37.6px", top: "0px", width: "45.9px", height: "8px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="45.9" height="8" viewBox="0 0 45.9 8" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0 L-0.5 0 L-0.5 8 L0 8 L0.5 8 L0.5 0 L0 0 Z M3.28 0 L2.78 0 L2.78 8 L3.28 8 L3.78 8 L3.78 0 L3.28 0 Z M6.56 0 L6.06 0 L6.06 8 L6.56 8 L7.06 8 L7.06 0 L6.56 0 Z M9.84 0 L9.34 0 L9.34 8 L9.84 8 L10.34 8 L10.34 0 L9.84 0 Z M13.11 0 L12.61 0 L12.61 8 L13.11 8 L13.61 8 L13.61 0 L13.11 0 Z M16.39 0 L15.89 0 L15.89 8 L16.39 8 L16.89 8 L16.89 0 L16.39 0 Z M19.67 0 L19.17 0 L19.17 8 L19.67 8 L20.17 8 L20.17 0 L19.67 0 Z M22.95 0 L22.45 0 L22.45 8 L22.95 8 L23.45 8 L23.45 0 L22.95 0 Z M26.23 0 L25.73 0 L25.73 8 L26.23 8 L26.73 8 L26.73 0 L26.23 0 Z M29.51 0 L29.01 0 L29.01 8 L29.51 8 L30.01 8 L30.01 0 L29.51 0 Z M32.79 0 L32.29 0 L32.29 8 L32.79 8 L33.29 8 L33.29 0 L32.79 0 Z M36.06 0 L35.56 0 L35.56 8 L36.06 8 L36.56 8 L36.56 0 L36.06 0 Z M39.34 0 L38.84 0 L38.84 8 L39.34 8 L39.84 8 L39.84 0 L39.34 0 Z M42.62 0 L42.12 0 L42.12 8 L42.62 8 L43.12 8 L43.12 0 L42.62 0 Z M45.9 0 L45.4 0 L45.4 8 L45.9 8 L46.4 8 L46.4 0 L45.9 0 Z" fill="#3a3a3a"/></svg>
              </div>
              <div style={{ width: "84px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "40px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#ededed" }}>16 / 40</p>
                <p style={{ flexShrink: 0, height: "16px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "0px" }}></p>
              </div>
            </div>
          </div>
          <div style={{ width: "112px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "84px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "84px", height: "8px", flexShrink: 0, borderRadius: "3px", background: "linear-gradient(90deg, #82ceac 0%, #3fb37f 100%)", boxShadow: "inset 0 0 0 1px rgba(49, 140, 99, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)", overflow: "hidden" }} />
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "53px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#ededed" }}>158 / 150</p>
                <Check size={12} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#3fb37f", display: "block" }} />
              </div>
            </div>
          </div>
          <div style={{ width: "75px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "3px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "32px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>0 / 2</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "31px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#909090" }}>Eagle</p>
            </div>
          </div>
          <div style={{ width: "76px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 0px", gap: "8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "61px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#ededed" }}>Dec 2026</p>
          </div>
        </div>
        <div style={{ width: "787px", height: "64px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #222222", display: "flex", flexDirection: "row", padding: "0px 0px 1px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "196px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "101px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>Alberto & Ciany</p>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ height: "18px", flexShrink: 0, borderRadius: "6px", background: "#211b33", boxShadow: "inset 0 0 0 1px #2d2547, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", display: "flex", flexDirection: "row", padding: "1px 7px 1px 7px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "50px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 500, color: "#a58bff", letterSpacing: "-0.01em", textTransform: "uppercase" }}>PLATINUM</p>
                </div>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "53px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#909090" }}>21 people</p>
              </div>
            </div>
          </div>
          <div style={{ width: "100px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "5px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <ChevronRight size={12} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#5f5f5f", display: "block" }} />
              <div style={{ height: "18px", flexShrink: 0, borderRadius: "6px", background: "#1b2233", boxShadow: "inset 0 0 0 1px #24304a, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", display: "flex", flexDirection: "row", padding: "1px 7px 1px 7px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "32px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 500, color: "#7aa2f7", letterSpacing: "-0.01em", textTransform: "uppercase" }}>EAGLE</p>
              </div>
            </div>
          </div>
          <div style={{ width: "116px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "84px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "84px", height: "8px", flexShrink: 0, borderRadius: "3px", background: "linear-gradient(90deg, #82ceac 0%, #3fb37f 100%)", boxShadow: "inset 0 0 0 1px rgba(49, 140, 99, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)", overflow: "hidden" }} />
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "47px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#ededed" }}>123 / 30</p>
                <Check size={12} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#3fb37f", display: "block" }} />
              </div>
            </div>
          </div>
          <div style={{ width: "112px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "84px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "84px", height: "8px", flexShrink: 0, borderRadius: "3px", background: "linear-gradient(90deg, #82ceac 0%, #3fb37f 100%)", boxShadow: "inset 0 0 0 1px rgba(49, 140, 99, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)", overflow: "hidden" }} />
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "37px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#ededed" }}>21 / 15</p>
                <Check size={12} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#3fb37f", display: "block" }} />
              </div>
            </div>
          </div>
          <div style={{ width: "112px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "84px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "84px", height: "8px", flexShrink: 0, borderRadius: "3px", background: "linear-gradient(90deg, #82ceac 0%, #3fb37f 100%)", boxShadow: "inset 0 0 0 1px rgba(49, 140, 99, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)", overflow: "hidden" }} />
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "40px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#ededed" }}>69 / 10</p>
                <Check size={12} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#3fb37f", display: "block" }} />
              </div>
            </div>
          </div>
          <div style={{ width: "75px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "3px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "29px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>1 / 2</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "50px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#909090" }}>Platinum</p>
            </div>
          </div>
          <div style={{ width: "76px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 0px", gap: "8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "61px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#3fb37f" }}>Aug 2026</p>
          </div>
        </div>
        <div style={{ width: "787px", height: "64px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #222222", display: "flex", flexDirection: "row", padding: "0px 0px 1px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "196px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "133px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>Enmanuel & Suseidy</p>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ height: "18px", flexShrink: 0, borderRadius: "6px", background: "#211b33", boxShadow: "inset 0 0 0 1px #2d2547, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", display: "flex", flexDirection: "row", padding: "1px 7px 1px 7px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "50px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 500, color: "#a58bff", letterSpacing: "-0.01em", textTransform: "uppercase" }}>PLATINUM</p>
                </div>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "53px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#909090" }}>16 people</p>
              </div>
            </div>
          </div>
          <div style={{ width: "100px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "5px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <ChevronRight size={12} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#5f5f5f", display: "block" }} />
              <div style={{ height: "18px", flexShrink: 0, borderRadius: "6px", background: "#1b2233", boxShadow: "inset 0 0 0 1px #24304a, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", display: "flex", flexDirection: "row", padding: "1px 7px 1px 7px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "32px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 500, color: "#7aa2f7", letterSpacing: "-0.01em", textTransform: "uppercase" }}>EAGLE</p>
              </div>
            </div>
          </div>
          <div style={{ width: "116px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "84px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "84px", height: "8px", flexShrink: 0, borderRadius: "3px", background: "linear-gradient(90deg, #82ceac 0%, #3fb37f 100%)", boxShadow: "inset 0 0 0 1px rgba(49, 140, 99, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)", overflow: "hidden" }} />
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "43px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#ededed" }}>38 / 30</p>
                <Check size={12} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#3fb37f", display: "block" }} />
              </div>
            </div>
          </div>
          <div style={{ width: "112px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "84px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "84px", height: "8px", flexShrink: 0, borderRadius: "3px", background: "linear-gradient(90deg, #82ceac 0%, #3fb37f 100%)", boxShadow: "inset 0 0 0 1px rgba(49, 140, 99, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)", overflow: "hidden" }} />
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "37px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#ededed" }}>16 / 15</p>
                <Check size={12} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#3fb37f", display: "block" }} />
              </div>
            </div>
          </div>
          <div style={{ width: "112px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "84px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "84px", height: "8px", flexShrink: 0, borderRadius: "3px", background: "linear-gradient(90deg, #82ceac 0%, #3fb37f 100%)", boxShadow: "inset 0 0 0 1px rgba(49, 140, 99, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)", overflow: "hidden" }} />
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "37px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#ededed" }}>18 / 10</p>
                <Check size={12} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#3fb37f", display: "block" }} />
              </div>
            </div>
          </div>
          <div style={{ width: "75px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "3px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "32px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>0 / 2</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "50px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#909090" }}>Platinum</p>
            </div>
          </div>
          <div style={{ width: "76px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 0px", gap: "8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "59px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#ededed" }}>Oct 2026</p>
          </div>
        </div>
        <div style={{ width: "787px", height: "64px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #222222", display: "flex", flexDirection: "row", padding: "0px 0px 1px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "196px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "127px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>Julio & Liz Vasquez</p>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ height: "18px", flexShrink: 0, borderRadius: "6px", background: "#16251c", boxShadow: "inset 0 0 0 1px #1f3326, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", display: "flex", flexDirection: "row", padding: "1px 7px 1px 7px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "47px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 500, color: "#6bcb8b", letterSpacing: "-0.01em", textTransform: "uppercase" }}>EMERALD</p>
                </div>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "56px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#909090" }}>55 people</p>
              </div>
            </div>
          </div>
          <div style={{ width: "100px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "5px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <ChevronRight size={12} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#5f5f5f", display: "block" }} />
              <div style={{ height: "18px", flexShrink: 0, borderRadius: "6px", background: "#2a2316", boxShadow: "inset 0 0 0 1px #3a301c, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", display: "flex", flexDirection: "row", padding: "1px 7px 1px 7px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "47px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 500, color: "#e3b341", letterSpacing: "-0.01em", textTransform: "uppercase" }}>DIAMOND</p>
              </div>
            </div>
          </div>
          <div style={{ width: "116px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "84px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "84px", height: "8px", flexShrink: 0, position: "relative" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", width: "83.44px", height: "8px", borderRadius: "3px", background: "linear-gradient(90deg, #a994ff 0%, #7b5bff 100%)", boxShadow: "inset 0 0 0 1px rgba(96, 71, 199, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)", overflow: "hidden" }} />
                <svg style={{ position: "absolute", left: "87.44px", top: "0px", width: "3.94px", height: "8px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="3.94" height="8" viewBox="0 0 3.94 8" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M3.94 0 L3.44 0 L3.44 8 L3.94 8 L4.44 8 L4.44 0 L3.94 0 Z M0 0 L-0.5 0 L-0.5 8 L0 8 L0.5 8 L0.5 0 L0 0 Z" fill="#3a3a3a"/></svg>
              </div>
              <div style={{ width: "84px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "59px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#ededed" }}>596 / 600</p>
                <p style={{ flexShrink: 0, height: "16px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "0px" }}></p>
              </div>
            </div>
          </div>
          <div style={{ width: "112px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "84px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "84px", height: "8px", flexShrink: 0, position: "relative" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", width: "57.75px", height: "8px", borderRadius: "3px", background: "linear-gradient(90deg, #a994ff 0%, #7b5bff 100%)", boxShadow: "inset 0 0 0 1px rgba(96, 71, 199, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)", overflow: "hidden" }} />
                <svg style={{ position: "absolute", left: "61.75px", top: "0px", width: "21.75px", height: "8px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="21.75" height="8" viewBox="0 0 21.75 8" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0 L-0.5 0 L-0.5 8 L0 8 L0.5 8 L0.5 0 L0 0 Z M3.63 0 L3.13 0 L3.13 8 L3.63 8 L4.13 8 L4.13 0 L3.63 0 Z M7.25 0 L6.75 0 L6.75 8 L7.25 8 L7.75 8 L7.75 0 L7.25 0 Z M10.88 0 L10.38 0 L10.38 8 L10.88 8 L11.38 8 L11.38 0 L10.88 0 Z M14.5 0 L14 0 L14 8 L14.5 8 L15 8 L15 0 L14.5 0 Z M18.13 0 L17.63 0 L17.63 8 L18.13 8 L18.63 8 L18.63 0 L18.13 0 Z M21.75 0 L21.25 0 L21.25 8 L21.75 8 L22.25 8 L22.25 0 L21.75 0 Z" fill="#3a3a3a"/></svg>
              </div>
              <div style={{ width: "84px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "43px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#ededed" }}>55 / 80</p>
                <p style={{ flexShrink: 0, height: "16px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "0px" }}></p>
              </div>
            </div>
          </div>
          <div style={{ width: "112px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "84px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "84px", height: "8px", flexShrink: 0, borderRadius: "3px", background: "linear-gradient(90deg, #82ceac 0%, #3fb37f 100%)", boxShadow: "inset 0 0 0 1px rgba(49, 140, 99, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)", overflow: "hidden" }} />
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "59px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#ededed" }}>342 / 300</p>
                <Check size={12} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#3fb37f", display: "block" }} />
              </div>
            </div>
          </div>
          <div style={{ width: "75px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "3px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "32px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>0 / 2</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "46px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#909090" }}>Emerald</p>
            </div>
          </div>
          <div style={{ width: "76px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 0px", gap: "8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "50px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#ededed" }}>Q1 2027</p>
          </div>
        </div>
        <div style={{ width: "787px", height: "64px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #222222", display: "flex", flexDirection: "row", padding: "0px 0px 1px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "196px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "97px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>Carlos & Erody</p>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ height: "18px", flexShrink: 0, borderRadius: "6px", background: "#16251c", boxShadow: "inset 0 0 0 1px #1f3326, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", display: "flex", flexDirection: "row", padding: "1px 7px 1px 7px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "47px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 500, color: "#6bcb8b", letterSpacing: "-0.01em", textTransform: "uppercase" }}>EMERALD</p>
                </div>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "92px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#909090" }}>paid as Platinum</p>
              </div>
            </div>
          </div>
          <div style={{ width: "100px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "5px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <Refresh size={12} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#e3b341", display: "block" }} />
              <div style={{ height: "18px", flexShrink: 0, borderRadius: "6px", background: "#16251c", boxShadow: "inset 0 0 0 1px #1f3326, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", display: "flex", flexDirection: "row", padding: "1px 7px 1px 7px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "47px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 500, color: "#6bcb8b", letterSpacing: "-0.01em", textTransform: "uppercase" }}>EMERALD</p>
              </div>
            </div>
          </div>
          <div style={{ width: "116px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "84px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "84px", height: "8px", flexShrink: 0, position: "relative" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", width: "14.84px", height: "8px", borderRadius: "3px", background: "linear-gradient(90deg, #a994ff 0%, #7b5bff 100%)", boxShadow: "inset 0 0 0 1px rgba(96, 71, 199, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)", overflow: "hidden" }} />
                <svg style={{ position: "absolute", left: "18.84px", top: "0px", width: "64.66px", height: "8px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="64.66" height="8" viewBox="0 0 64.66 8" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0 L-0.5 0 L-0.5 8 L0 8 L0.5 8 L0.5 0 L0 0 Z M3.23 0 L2.73 0 L2.73 8 L3.23 8 L3.73 8 L3.73 0 L3.23 0 Z M6.47 0 L5.97 0 L5.97 8 L6.47 8 L6.97 8 L6.97 0 L6.47 0 Z M9.7 0 L9.2 0 L9.2 8 L9.7 8 L10.2 8 L10.2 0 L9.7 0 Z M12.93 0 L12.43 0 L12.43 8 L12.93 8 L13.43 8 L13.43 0 L12.93 0 Z M16.16 0 L15.66 0 L15.66 8 L16.16 8 L16.66 8 L16.66 0 L16.16 0 Z M19.4 0 L18.9 0 L18.9 8 L19.4 8 L19.9 8 L19.9 0 L19.4 0 Z M22.63 0 L22.13 0 L22.13 8 L22.63 8 L23.13 8 L23.13 0 L22.63 0 Z M25.86 0 L25.36 0 L25.36 8 L25.86 8 L26.36 8 L26.36 0 L25.86 0 Z M29.1 0 L28.6 0 L28.6 8 L29.1 8 L29.6 8 L29.6 0 L29.1 0 Z M32.33 0 L31.83 0 L31.83 8 L32.33 8 L32.83 8 L32.83 0 L32.33 0 Z M35.56 0 L35.06 0 L35.06 8 L35.56 8 L36.06 8 L36.06 0 L35.56 0 Z M38.8 0 L38.3 0 L38.3 8 L38.8 8 L39.3 8 L39.3 0 L38.8 0 Z M42.03 0 L41.53 0 L41.53 8 L42.03 8 L42.53 8 L42.53 0 L42.03 0 Z M45.26 0 L44.76 0 L44.76 8 L45.26 8 L45.76 8 L45.76 0 L45.26 0 Z M48.49 0 L47.99 0 L47.99 8 L48.49 8 L48.99 8 L48.99 0 L48.49 0 Z M51.73 0 L51.23 0 L51.23 8 L51.73 8 L52.23 8 L52.23 0 L51.73 0 Z M54.96 0 L54.46 0 L54.46 8 L54.96 8 L55.46 8 L55.46 0 L54.96 0 Z M58.19 0 L57.69 0 L57.69 8 L58.19 8 L58.69 8 L58.69 0 L58.19 0 Z M61.43 0 L60.93 0 L60.93 8 L61.43 8 L61.93 8 L61.93 0 L61.43 0 Z M64.66 0 L64.16 0 L64.16 8 L64.66 8 L65.16 8 L65.16 0 L64.66 0 Z" fill="#3a3a3a"/></svg>
              </div>
              <div style={{ width: "84px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "51px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#ededed" }}>53 / 300</p>
                <p style={{ flexShrink: 0, height: "16px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "0px" }}></p>
              </div>
            </div>
          </div>
          <div style={{ width: "112px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "84px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "84px", height: "8px", flexShrink: 0, position: "relative" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", width: "23.1px", height: "8px", borderRadius: "3px", background: "linear-gradient(90deg, #a994ff 0%, #7b5bff 100%)", boxShadow: "inset 0 0 0 1px rgba(96, 71, 199, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)", overflow: "hidden" }} />
                <svg style={{ position: "absolute", left: "27.1px", top: "0px", width: "56.4px", height: "8px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="56.4" height="8" viewBox="0 0 56.4 8" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0 L-0.5 0 L-0.5 8 L0 8 L0.5 8 L0.5 0 L0 0 Z M3.32 0 L2.82 0 L2.82 8 L3.32 8 L3.82 8 L3.82 0 L3.32 0 Z M6.64 0 L6.14 0 L6.14 8 L6.64 8 L7.14 8 L7.14 0 L6.64 0 Z M9.95 0 L9.45 0 L9.45 8 L9.95 8 L10.45 8 L10.45 0 L9.95 0 Z M13.27 0 L12.77 0 L12.77 8 L13.27 8 L13.77 8 L13.77 0 L13.27 0 Z M16.59 0 L16.09 0 L16.09 8 L16.59 8 L17.09 8 L17.09 0 L16.59 0 Z M19.91 0 L19.41 0 L19.41 8 L19.91 8 L20.41 8 L20.41 0 L19.91 0 Z M23.22 0 L22.72 0 L22.72 8 L23.22 8 L23.72 8 L23.72 0 L23.22 0 Z M26.54 0 L26.04 0 L26.04 8 L26.54 8 L27.04 8 L27.04 0 L26.54 0 Z M29.86 0 L29.36 0 L29.36 8 L29.86 8 L30.36 8 L30.36 0 L29.86 0 Z M33.18 0 L32.68 0 L32.68 8 L33.18 8 L33.68 8 L33.68 0 L33.18 0 Z M36.49 0 L35.99 0 L35.99 8 L36.49 8 L36.99 8 L36.99 0 L36.49 0 Z M39.81 0 L39.31 0 L39.31 8 L39.81 8 L40.31 8 L40.31 0 L39.81 0 Z M43.13 0 L42.63 0 L42.63 8 L43.13 8 L43.63 8 L43.63 0 L43.13 0 Z M46.45 0 L45.95 0 L45.95 8 L46.45 8 L46.95 8 L46.95 0 L46.45 0 Z M49.76 0 L49.26 0 L49.26 8 L49.76 8 L50.26 8 L50.26 0 L49.76 0 Z M53.08 0 L52.58 0 L52.58 8 L53.08 8 L53.58 8 L53.58 0 L53.08 0 Z M56.4 0 L55.9 0 L55.9 8 L56.4 8 L56.9 8 L56.9 0 L56.4 0 Z" fill="#3a3a3a"/></svg>
              </div>
              <div style={{ width: "84px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "37px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#ededed" }}>11 / 40</p>
                <p style={{ flexShrink: 0, height: "16px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "0px" }}></p>
              </div>
            </div>
          </div>
          <div style={{ width: "112px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "84px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "84px", height: "8px", flexShrink: 0, position: "relative" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", width: "17.36px", height: "8px", borderRadius: "3px", background: "linear-gradient(90deg, #a994ff 0%, #7b5bff 100%)", boxShadow: "inset 0 0 0 1px rgba(96, 71, 199, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)", overflow: "hidden" }} />
                <svg style={{ position: "absolute", left: "21.36px", top: "0px", width: "62.14px", height: "8px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="62.14" height="8" viewBox="0 0 62.14 8" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0 L-0.5 0 L-0.5 8 L0 8 L0.5 8 L0.5 0 L0 0 Z M3.27 0 L2.77 0 L2.77 8 L3.27 8 L3.77 8 L3.77 0 L3.27 0 Z M6.54 0 L6.04 0 L6.04 8 L6.54 8 L7.04 8 L7.04 0 L6.54 0 Z M9.81 0 L9.31 0 L9.31 8 L9.81 8 L10.31 8 L10.31 0 L9.81 0 Z M13.08 0 L12.58 0 L12.58 8 L13.08 8 L13.58 8 L13.58 0 L13.08 0 Z M16.35 0 L15.85 0 L15.85 8 L16.35 8 L16.85 8 L16.85 0 L16.35 0 Z M19.62 0 L19.12 0 L19.12 8 L19.62 8 L20.12 8 L20.12 0 L19.62 0 Z M22.89 0 L22.39 0 L22.39 8 L22.89 8 L23.39 8 L23.39 0 L22.89 0 Z M26.16 0 L25.66 0 L25.66 8 L26.16 8 L26.66 8 L26.66 0 L26.16 0 Z M29.43 0 L28.93 0 L28.93 8 L29.43 8 L29.93 8 L29.93 0 L29.43 0 Z M32.71 0 L32.21 0 L32.21 8 L32.71 8 L33.21 8 L33.21 0 L32.71 0 Z M35.98 0 L35.48 0 L35.48 8 L35.98 8 L36.48 8 L36.48 0 L35.98 0 Z M39.25 0 L38.75 0 L38.75 8 L39.25 8 L39.75 8 L39.75 0 L39.25 0 Z M42.52 0 L42.02 0 L42.02 8 L42.52 8 L43.02 8 L43.02 0 L42.52 0 Z M45.79 0 L45.29 0 L45.29 8 L45.79 8 L46.29 8 L46.29 0 L45.79 0 Z M49.06 0 L48.56 0 L48.56 8 L49.06 8 L49.56 8 L49.56 0 L49.06 0 Z M52.33 0 L51.83 0 L51.83 8 L52.33 8 L52.83 8 L52.83 0 L52.33 0 Z M55.6 0 L55.1 0 L55.1 8 L55.6 8 L56.1 8 L56.1 0 L55.6 0 Z M58.87 0 L58.37 0 L58.37 8 L58.87 8 L59.37 8 L59.37 0 L58.87 0 Z M62.14 0 L61.64 0 L61.64 8 L62.14 8 L62.64 8 L62.64 0 L62.14 0 Z" fill="#3a3a3a"/></svg>
              </div>
              <div style={{ width: "84px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "45px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#ededed" }}>31 / 150</p>
                <p style={{ flexShrink: 0, height: "16px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "0px" }}></p>
              </div>
            </div>
          </div>
          <div style={{ width: "75px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "3px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "32px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>0 / 2</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "31px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#909090" }}>Eagle</p>
            </div>
          </div>
          <div style={{ width: "76px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 0px", gap: "8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ height: "18px", flexShrink: 0, borderRadius: "6px", background: "#2d1a1c", boxShadow: "inset 0 0 0 1px #3d2326, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", display: "flex", flexDirection: "row", padding: "1px 7px 1px 7px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <svg style={{ width: "5px", height: "5px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="5" height="5" viewBox="0 0 5 5" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M5 2.5 C5 3.88071 3.88071 5 2.5 5 C1.11929 5 0 3.88071 0 2.5 C0 1.11929 1.11929 0 2.5 0 C3.88071 0 5 1.11929 5 2.5 Z" fill="#f07178"/></svg>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "37px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 500, color: "#f07178", letterSpacing: "-0.01em", textTransform: "uppercase" }}>At risk</p>
            </div>
          </div>
        </div>
      </div>
      <div style={{ position: "absolute", left: "1038px", top: "597px", width: "1px", height: "486px", background: "#000000", boxShadow: "1px 0px 0px 0px #232323" }} />
      <div style={{ position: "absolute", left: "1051px", top: "614px", width: "214px", height: "43px", display: "flex", flexDirection: "column", gap: "7px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "92px", fontFamily: "'Geist'", fontSize: "18px", fontWeight: 500, color: "#ededed", lineHeight: "1.100000023841858", letterSpacing: "-0.02em" }}>Bonus pool</p>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "214px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8a8a8a", lineHeight: "1.2999999523162842" }}>12% of $77,839 MRR · July · pays Aug 5</p>
      </div>
      <div style={{ position: "absolute", left: "1051px", top: "672px", width: "148px", height: "148px" }}>
        <svg style={{ position: "absolute", left: "9px", top: "9px", width: "130px", height: "130px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="130" height="130" viewBox="0 0 130 130" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M2.32069e-05 65.0601 L-8.99997 65.0676 L-8.99997 65.0676 L2.32069e-05 65.0601 Z M64.91 6.44471e-05 L64.8975 -8.99993 L64.8975 -8.99993 L64.91 6.44471e-05 Z M130 65.0001 L121 65.0001 C121 95.9203 95.9475 120.983 65.025 121 L65.03 130 L65.035 139 C105.893 138.977 139 105.86 139 65.0001 L130 65.0001 Z M65.03 130 L65.025 121 C34.1056 121.017 9.02587 95.964 9.00002 65.0525 L2.32069e-05 65.0601 L-8.99997 65.0676 C-8.96582 105.916 24.1745 139.023 65.035 139 L65.03 130 Z M2.32069e-05 65.0601 L9.00002 65.0525 C8.97417 34.1311 34.0112 9.04313 64.9226 9.00006 L64.91 6.44471e-05 L64.8975 -8.99993 C24.0489 -8.943 -9.03413 24.209 -8.99997 65.0676 L2.32069e-05 65.0601 Z M64.91 6.44471e-05 L64.9226 9.00006 C95.8431 8.95698 120.948 33.9848 121 64.9051 L130 64.8901 L139 64.875 C138.932 24.0153 105.757 -9.05685 64.8975 -8.99993 L64.91 6.44471e-05 Z" fill="#232323"/></svg>
        <svg style={{ position: "absolute", left: "86.88px", top: "10.29px", width: "52.12px", height: "112.44px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="52.12" height="112.44" viewBox="0 0 52.12 112.44" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M1.78398 -8.82142 C-3.08795 -9.80668 -7.83615 -6.65592 -8.82142 -1.78398 C-9.80668 3.08795 -6.65592 7.83615 -1.78398 8.82142 L0 0 L1.78398 -8.82142 Z M49.9 46.89 L41.2069 49.2201 L41.2071 49.221 L49.9 46.89 Z M24.1741 105.693 C20.4476 108.982 20.0933 114.669 23.3826 118.396 C26.672 122.122 32.3595 122.477 36.0859 119.187 L30.13 112.44 L24.1741 105.693 Z M0 0 L-1.78398 8.82142 C19.0469 13.0341 35.7011 28.6791 41.2069 49.2201 L49.9 46.89 L58.5931 44.5599 C51.3189 17.4209 29.3131 -3.25412 1.78398 -8.82142 L0 0 Z M49.9 46.89 L41.2071 49.221 C46.7116 69.7489 40.1138 91.6226 24.1741 105.693 L30.13 112.44 L36.0859 119.187 C57.1462 100.597 65.8684 71.6911 58.5929 44.559 L49.9 46.89 Z" fill="#7b5bff"/></svg>
        <svg style={{ position: "absolute", left: "10.29px", top: "86.87px", width: "84.41px", height: "52.13px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="84.41" height="52.13" viewBox="0 0 84.41 52.13" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M87.2778 57.2709 C91.9892 55.6871 94.5247 50.5837 92.9409 45.8722 C91.3571 41.1608 86.2537 38.6253 81.5422 40.2091 L84.41 48.74 L87.2778 57.2709 Z M31.21 43.42 L26.7079 51.213 L26.7115 51.2151 L31.21 43.42 Z M8.82206 -1.78082 C7.83854 -6.65311 3.09147 -9.80558 -1.78082 -8.82206 C-6.65311 -7.83854 -9.80558 -3.09147 -8.82206 1.78082 L0 0 L8.82206 -1.78082 Z M84.41 48.74 L81.5422 40.2091 C66.3213 45.3258 49.6239 43.6553 35.7085 35.6249 L31.21 43.42 L26.7115 51.2151 C45.0961 61.8247 67.1587 64.0342 87.2778 57.2709 L84.41 48.74 Z M31.21 43.42 L35.7121 35.627 C21.7951 27.587 12.0005 13.9652 8.82206 -1.78082 L0 0 L-8.82206 1.78082 C-4.62054 22.5948 8.32487 40.593 26.7079 51.213 L31.21 43.42 Z" fill="#7aa2f7"/></svg>
        <svg style={{ position: "absolute", left: "10.29px", top: "10.29px", width: "50.82px", height: "50.81px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="50.82" height="50.81" viewBox="0 0 50.82 50.81" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M-8.82136 49.0257 C-9.80678 53.8977 -6.65616 58.646 -1.78425 59.6314 C3.08765 60.6168 7.83595 57.4662 8.82136 52.5943 L0 50.81 L-8.82136 49.0257 Z M52.6043 8.82136 C57.4762 7.83595 60.6268 3.08765 59.6414 -1.78425 C58.6559 -6.65616 53.9077 -9.80678 49.0357 -8.82136 L50.82 0 L52.6043 8.82136 Z M0 50.81 L8.82136 52.5943 C13.2835 30.5335 30.5395 13.2843 52.6043 8.82136 L50.82 0 L49.0357 -8.82136 C19.8805 -2.92429 -2.92348 19.8665 -8.82136 49.0257 L0 50.81 Z" fill="#e5559b"/></svg>
        <div style={{ position: "absolute", left: "41px", top: "52px", width: "66px", height: "44px", display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "58px", lineHeight: "26px", fontFamily: "'Geist'", fontSize: "20px", fontWeight: 500, color: "#ededed", letterSpacing: "-0.05em" }}>$9,341</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "66px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "rgba(237, 237, 237, 0.5)" }}>12% of MRR</p>
        </div>
      </div>
      <div style={{ position: "absolute", left: "1227px", top: "690px", width: "199px", height: "113px", display: "flex", flexDirection: "column", gap: "10px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ width: "199px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "6.11px", height: "6.11px", flexShrink: 0, borderRadius: "3.05px", background: "#7b5bff" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "92px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>Matching · 5%</p>
          </div>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "41px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#9a9a9a" }}>$3,892</p>
        </div>
        <div style={{ width: "199px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "6.11px", height: "6.11px", flexShrink: 0, borderRadius: "3.05px", background: "#7aa2f7" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "103px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>Leadership · 4%</p>
          </div>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "34px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#9a9a9a" }}>$3,114</p>
        </div>
        <div style={{ width: "199px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "6.11px", height: "6.11px", flexShrink: 0, borderRadius: "3.05px", background: "#e5559b" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "94px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>Fast start · 3%</p>
          </div>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "41px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#9a9a9a" }}>$2,335</p>
        </div>
        <div style={{ alignSelf: "stretch", height: "1px", flexShrink: 0, background: "#222222" }} />
        <div style={{ width: "199px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "68px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#a0a0a0" }}>Total · 12%</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "44px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>$9,341</p>
        </div>
      </div>
      <div style={{ position: "absolute", left: "1038px", top: "836px", width: "402px", height: "1px", background: "#000000", boxShadow: "0px 1px 0px 0px #232323" }} />
      <div style={{ position: "absolute", left: "1051px", top: "854px", width: "192px", height: "43px", display: "flex", flexDirection: "column", gap: "7px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "116px", fontFamily: "'Geist'", fontSize: "18px", fontWeight: 500, color: "#ededed", lineHeight: "1.100000023841858", letterSpacing: "-0.02em" }}>Payout · Aug 5</p>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "192px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8a8a8a", lineHeight: "1.2999999523162842" }}>July commission · 5 days from now</p>
      </div>
      <div style={{ position: "absolute", left: "1051px", top: "906px", width: "372.8px", height: "22px", display: "flex", flexDirection: "row", gap: "2.4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ width: "3.2px", height: "22px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #8b6fff 0%, #7b5bff 100%)" }} />
        <div style={{ width: "3.2px", height: "22px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #8b6fff 0%, #7b5bff 100%)" }} />
        <div style={{ width: "3.2px", height: "22px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #8b6fff 0%, #7b5bff 100%)" }} />
        <div style={{ width: "3.2px", height: "22px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #8b6fff 0%, #7b5bff 100%)" }} />
        <div style={{ width: "3.2px", height: "22px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #8b6fff 0%, #7b5bff 100%)" }} />
        <div style={{ width: "3.2px", height: "22px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #8b6fff 0%, #7b5bff 100%)" }} />
        <div style={{ width: "3.2px", height: "22px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #8b6fff 0%, #7b5bff 100%)" }} />
        <div style={{ width: "3.2px", height: "22px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #8b6fff 0%, #7b5bff 100%)" }} />
        <div style={{ width: "3.2px", height: "22px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #8b6fff 0%, #7b5bff 100%)" }} />
        <div style={{ width: "3.2px", height: "22px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #8b6fff 0%, #7b5bff 100%)" }} />
        <div style={{ width: "3.2px", height: "22px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #8b6fff 0%, #7b5bff 100%)" }} />
        <div style={{ width: "3.2px", height: "22px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #8b6fff 0%, #7b5bff 100%)" }} />
        <div style={{ width: "3.2px", height: "22px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #8b6fff 0%, #7b5bff 100%)" }} />
        <div style={{ width: "3.2px", height: "22px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #8b6fff 0%, #7b5bff 100%)" }} />
        <div style={{ width: "3.2px", height: "22px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #8b6fff 0%, #7b5bff 100%)" }} />
        <div style={{ width: "3.2px", height: "22px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #8b6fff 0%, #7b5bff 100%)" }} />
        <div style={{ width: "3.2px", height: "22px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #8b6fff 0%, #7b5bff 100%)" }} />
        <div style={{ width: "3.2px", height: "22px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #8b6fff 0%, #7b5bff 100%)" }} />
        <div style={{ width: "3.2px", height: "22px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #8b6fff 0%, #7b5bff 100%)" }} />
        <div style={{ width: "3.2px", height: "22px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #8b6fff 0%, #7b5bff 100%)" }} />
        <div style={{ width: "3.2px", height: "22px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #8b6fff 0%, #7b5bff 100%)" }} />
        <div style={{ width: "3.2px", height: "22px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #8b6fff 0%, #7b5bff 100%)" }} />
        <div style={{ width: "3.2px", height: "22px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #8b6fff 0%, #7b5bff 100%)" }} />
        <div style={{ width: "3.2px", height: "22px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #8b6fff 0%, #7b5bff 100%)" }} />
        <div style={{ width: "3.2px", height: "22px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #8b6fff 0%, #7b5bff 100%)" }} />
        <div style={{ width: "3.2px", height: "22px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #8b6fff 0%, #7b5bff 100%)" }} />
        <div style={{ width: "3.2px", height: "22px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #8b6fff 0%, #7b5bff 100%)" }} />
        <div style={{ width: "3.2px", height: "22px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #8b6fff 0%, #7b5bff 100%)" }} />
        <div style={{ width: "3.2px", height: "22px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #8b6fff 0%, #7b5bff 100%)" }} />
        <div style={{ width: "3.2px", height: "22px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #8b6fff 0%, #7b5bff 100%)" }} />
        <div style={{ width: "3.2px", height: "22px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #8b6fff 0%, #7b5bff 100%)" }} />
        <div style={{ width: "3.2px", height: "22px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #8b6fff 0%, #7b5bff 100%)" }} />
        <div style={{ width: "3.2px", height: "22px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #8b6fff 0%, #7b5bff 100%)" }} />
        <div style={{ width: "3.2px", height: "22px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #8b6fff 0%, #7b5bff 100%)" }} />
        <div style={{ width: "3.2px", height: "22px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #8b6fff 0%, #7b5bff 100%)" }} />
        <div style={{ width: "3.2px", height: "22px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #8b6fff 0%, #7b5bff 100%)" }} />
        <div style={{ width: "3.2px", height: "22px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #8b6fff 0%, #7b5bff 100%)" }} />
        <div style={{ width: "3.2px", height: "22px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #8b6fff 0%, #7b5bff 100%)" }} />
        <div style={{ width: "3.2px", height: "22px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #8b6fff 0%, #7b5bff 100%)" }} />
        <div style={{ width: "3.2px", height: "22px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #8b6fff 0%, #7b5bff 100%)" }} />
        <div style={{ width: "3.2px", height: "22px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #8b6fff 0%, #7b5bff 100%)" }} />
        <div style={{ width: "3.2px", height: "22px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #8b6fff 0%, #7b5bff 100%)" }} />
        <div style={{ width: "3.2px", height: "22px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #8b6fff 0%, #7b5bff 100%)" }} />
        <div style={{ width: "3.2px", height: "22px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #8b6fff 0%, #7b5bff 100%)" }} />
        <div style={{ width: "3.2px", height: "22px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #8b6fff 0%, #7b5bff 100%)" }} />
        <div style={{ width: "3.2px", height: "22px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #8b6fff 0%, #7b5bff 100%)" }} />
        <div style={{ width: "3.2px", height: "22px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #8b6fff 0%, #7b5bff 100%)" }} />
        <div style={{ width: "3.2px", height: "22px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #8b6fff 0%, #7b5bff 100%)" }} />
        <div style={{ width: "3.2px", height: "22px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #8b6fff 0%, #7b5bff 100%)" }} />
        <div style={{ width: "3.2px", height: "22px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(123, 91, 255, 0.16)" }} />
        <div style={{ width: "3.2px", height: "22px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(123, 91, 255, 0.16)" }} />
        <div style={{ width: "3.2px", height: "22px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(123, 91, 255, 0.16)" }} />
        <div style={{ width: "3.2px", height: "22px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(123, 91, 255, 0.16)" }} />
        <div style={{ width: "3.2px", height: "22px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(123, 91, 255, 0.16)" }} />
        <div style={{ width: "3.2px", height: "22px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(123, 91, 255, 0.16)" }} />
        <div style={{ width: "3.2px", height: "22px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(123, 91, 255, 0.16)" }} />
        <div style={{ width: "3.2px", height: "22px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(123, 91, 255, 0.16)" }} />
        <div style={{ width: "3.2px", height: "22px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(123, 91, 255, 0.16)" }} />
        <div style={{ width: "3.2px", height: "22px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(123, 91, 255, 0.16)" }} />
        <div style={{ width: "3.2px", height: "22px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(123, 91, 255, 0.16)" }} />
        <div style={{ width: "3.2px", height: "22px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(123, 91, 255, 0.16)" }} />
        <div style={{ width: "3.2px", height: "22px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(123, 91, 255, 0.16)" }} />
        <div style={{ width: "3.2px", height: "22px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(123, 91, 255, 0.16)" }} />
        <div style={{ width: "3.2px", height: "22px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(123, 91, 255, 0.16)" }} />
        <div style={{ width: "3.2px", height: "22px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(123, 91, 255, 0.16)" }} />
        <div style={{ width: "3.2px", height: "22px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(123, 91, 255, 0.16)" }} />
        <div style={{ width: "3.2px", height: "22px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(123, 91, 255, 0.16)" }} />
      </div>
      <div style={{ position: "absolute", left: "1051px", top: "936px", width: "375px", height: "16px", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "68px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8a8a8a" }}>
          <span style={{ fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8a8a8a" }}>{"Paid "}</span>
          <span style={{ fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#ededed" }}>$6,820</span>
        </p>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "127px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8a8a8a" }}>
          <span style={{ fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8a8a8a" }}>{"Pending "}</span>
          <span style={{ fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#ededed" }}>$2,521</span>
          <span style={{ fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#5f5f5f" }}>{" · Aug 5"}</span>
        </p>
      </div>
      <div style={{ position: "absolute", left: "1051px", top: "966px", width: "375px", height: "100px", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ width: "375px", height: "50px", flexShrink: 0, boxShadow: "inset 0 1px 0 0 #222222", display: "flex", flexDirection: "row", padding: "1px 0px 0px 0px", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "3px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "110px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>July commission</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "153px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#909090" }}>Pays Aug 5 · 12% of $77,839</p>
          </div>
          <div style={{ height: "18px", flexShrink: 0, borderRadius: "6px", background: "#211b33", boxShadow: "inset 0 0 0 1px #2d2547, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", display: "flex", flexDirection: "row", padding: "1px 7px 1px 7px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <svg style={{ width: "5px", height: "5px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="5" height="5" viewBox="0 0 5 5" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M5 2.5 C5 3.88071 3.88071 5 2.5 5 C1.11929 5 0 3.88071 0 2.5 C0 1.11929 1.11929 0 2.5 0 C3.88071 0 5 1.11929 5 2.5 Z" fill="#a58bff"/></svg>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "59px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 500, color: "#a58bff", letterSpacing: "-0.01em", textTransform: "uppercase" }}>Scheduled</p>
          </div>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "44px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>$9,341</p>
        </div>
        <div style={{ width: "375px", height: "50px", flexShrink: 0, boxShadow: "inset 0 1px 0 0 #222222", display: "flex", flexDirection: "row", padding: "1px 0px 0px 0px", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "3px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "115px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>June commission</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "149px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#909090" }}>Paid Jul 5 · 12% of $73,360</p>
          </div>
          <div style={{ height: "18px", flexShrink: 0, borderRadius: "6px", background: "#16251c", boxShadow: "inset 0 0 0 1px #1f3326, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", display: "flex", flexDirection: "row", padding: "1px 7px 1px 7px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <svg style={{ width: "5px", height: "5px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="5" height="5" viewBox="0 0 5 5" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M5 2.5 C5 3.88071 3.88071 5 2.5 5 C1.11929 5 0 3.88071 0 2.5 C0 1.11929 1.11929 0 2.5 0 C3.88071 0 5 1.11929 5 2.5 Z" fill="#6bcb8b"/></svg>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "22px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 500, color: "#6bcb8b", letterSpacing: "-0.01em", textTransform: "uppercase" }}>Paid</p>
          </div>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "48px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>$8,803</p>
        </div>
      </div>
    </div>
  );
}
