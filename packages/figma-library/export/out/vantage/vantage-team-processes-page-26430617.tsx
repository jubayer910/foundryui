// Team processes page (vantage, Templates) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist, Geist Mono. Icons: Ingot Icons.
import type { SVGProps } from "react";

// Ingot Icons used here, inlined so this file needs no icon package.
function icon(body: string) {
  return function Icon({ size = 24, strokeWidth = 1.5, ...p }: { size?: number; strokeWidth?: number } & SVGProps<SVGSVGElement>) {
    const html = strokeWidth == 1.5 ? body : body.replace(/stroke-width="([\d.]+)"/g, (_, w) => `stroke-width="${(Number(w) * Number(strokeWidth)) / 1.5}"`);
    return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden {...p} dangerouslySetInnerHTML={{ __html: html }} />;
  };
}
const AlarmClock = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"12\" cy=\"13\" r=\"8\" /><path d=\"M12 9v4l2 2\" /><path d=\"M5 3 2 6\" /><path d=\"m22 6-3-3\" /><path d=\"M6.38 18.7 4 21\" /><path d=\"M17.64 18.67 20 21\" /></g>");
const Bell = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M10 5a2 2 0 1 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6\" /><path d=\"M9 17v1a3 3 0 0 0 6 0v-1\" /></g>");
const Book = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0\" /><path d=\"M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0\" /><path d=\"M3 6l0 13\" /><path d=\"M12 6l0 13\" /><path d=\"M21 6l0 13\" /></g>");
const Briefcase = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 9a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2l0 -9\" /><path d=\"M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2\" /><path d=\"M12 12l0 .01\" /><path d=\"M3 13a20 20 0 0 0 18 0\" /></g>");
const Bulb = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7\" /><path d=\"M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3\" /><path d=\"M9.7 17l4.6 0\" /></g>");
const Calendar = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12\" /><path d=\"M16 3v4\" /><path d=\"M8 3v4\" /><path d=\"M4 11h16\" /></g>");
const CalendarCheck = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M11.5 21h-5.5a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v6\" /><path d=\"M16 3v4\" /><path d=\"M8 3v4\" /><path d=\"M4 11h16\" /><path d=\"M15 19l2 2l4 -4\" /></g>");
const ChartLine = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 19l16 0\" /><path d=\"M4 15l4 -6l4 2l4 -5l4 4\" /></g>");
const Check = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M5 12l5 5l10 -10\" /></g>");
const Checkbox = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M9 11l3 3l8 -8\" /><path d=\"M20 12v6a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h9\" /></g>");
const Checklist = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M9.615 20h-2.615a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8\" /><path d=\"M14 19l2 2l4 -4\" /><path d=\"M9 8h4\" /><path d=\"M9 12h2\" /></g>");
const ChevronDown = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M6 9l6 6l6 -6\" /></g>");
const ChevronRight = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M9 6l6 6l-6 6\" /></g>");
const FileInvoice = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M14 3v4a1 1 0 0 0 1 1h4\" /><path d=\"M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2\" /><path d=\"M9 7l1 0\" /><path d=\"M9 13l6 0\" /><path d=\"M13 17l2 0\" /></g>");
const GitMerge = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M5 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0\" /><path d=\"M5 6a2 2 0 1 0 4 0a2 2 0 1 0 -4 0\" /><path d=\"M15 12a2 2 0 1 0 4 0a2 2 0 1 0 -4 0\" /><path d=\"M7 8l0 8\" /><path d=\"M7 8a4 4 0 0 0 4 4h4\" /></g>");
const Home = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M5 12l-2 0l9 -9l9 9l-2 0\" /><path d=\"M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7\" /><path d=\"M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6\" /></g>");
const Message = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M8 9h8\" /><path d=\"M8 13h6\" /><path d=\"M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12\" /></g>");
const Note = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M13 20l7 -7\" /><path d=\"M13 20v-6a1 1 0 0 1 1 -1h6v-7a2 2 0 0 0 -2 -2h-12a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7\" /></g>");
const Plus = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 5l0 14\" /><path d=\"M5 12l14 0\" /></g>");
const Refresh = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4\" /><path d=\"M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4\" /></g>");
const School = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M22 9l-10 -4l-10 4l10 4l10 -4v6\" /><path d=\"M6 10.6v5.4a6 3 0 0 0 12 0v-5.4\" /></g>");
const Share = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 12a3 3 0 1 0 6 0a3 3 0 1 0 -6 0\" /><path d=\"M15 6a3 3 0 1 0 6 0a3 3 0 1 0 -6 0\" /><path d=\"M15 18a3 3 0 1 0 6 0a3 3 0 1 0 -6 0\" /><path d=\"M8.7 10.7l6.6 -3.4\" /><path d=\"M8.7 13.3l6.6 3.4\" /></g>");
const Stack2 = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 4l-8 4l8 4l8 -4l-8 -4\" /><path d=\"M4 12l8 4l8 -4\" /><path d=\"M4 16l8 4l8 -4\" /></g>");
const TrendingUp = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 17l6 -6l4 4l8 -8\" /><path d=\"M14 7l7 0l0 7\" /></g>");
const UserSearch = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0\" /><path d=\"M6 21v-2a4 4 0 0 1 4 -4h1.5\" /><path d=\"M15 18a3 3 0 1 0 6 0a3 3 0 1 0 -6 0\" /><path d=\"M20.2 20.2l1.8 1.8\" /></g>");
const Users = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M5 7a4 4 0 1 0 8 0a4 4 0 1 0 -8 0\" /><path d=\"M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2\" /><path d=\"M16 3.13a4 4 0 0 1 0 7.75\" /><path d=\"M21 21v-2a4 4 0 0 0 -3 -3.85\" /></g>");

export function TeamProcessesPage() {
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
                  <div style={{ width: "5px", height: "26px", flexShrink: 0, borderRadius: "0px 6px 6px 0px", background: "#7b5bff", boxShadow: "0px 0px 7.2px 0px rgba(123, 91, 255, 0.5)" }} />
                  <div style={{ width: "214px", alignSelf: "stretch", flexShrink: 0, borderRadius: "6px", background: "linear-gradient(90deg, rgba(123, 91, 255, 0.17) 0%, rgba(123, 91, 255, 0.04) 62%, rgba(123, 91, 255, 0) 100%), linear-gradient(#232323, #232323)", boxShadow: "inset 0 0 0 1px #2e2e2e, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", display: "flex", flexDirection: "row", padding: "6px 6px 6px 6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                      <GitMerge size={15} strokeWidth={2.4} style={{ width: "15px", height: "15px", flexShrink: 0, color: "#7b5bff", display: "block" }} />
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
                  <div style={{ width: "5px", height: "26px", flexShrink: 0, opacity: 0, borderRadius: "0px 6px 6px 0px", background: "#7b5bff", boxShadow: "0px 0px 7.2px 0px rgba(123, 91, 255, 0.5)" }} />
                  <div style={{ width: "214px", alignSelf: "stretch", flexShrink: 0, borderRadius: "6px", filter: "drop-shadow(0px 0px 2.3px rgba(0, 0, 0, 0.5))", display: "flex", flexDirection: "row", padding: "6px 6px 6px 6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                      <Stack2 size={15} strokeWidth={2} style={{ width: "15px", height: "15px", flexShrink: 0, color: "#8a8a8a", display: "block" }} />
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
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "31px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#ededed", lineHeight: "12px" }}>Team</p>
          </div>
          <ChevronRight size={13} strokeWidth={2.77} style={{ width: "13px", height: "13px", flexShrink: 0, color: "#dadada", display: "block" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "59px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#ededed", lineHeight: "12px" }}>Processes</p>
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
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "85px", fontFamily: "'Geist'", fontSize: "18px", fontWeight: 500, color: "#ededed", lineHeight: "1.100000023841858", letterSpacing: "-0.02em" }}>Processes</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "429px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#8a8a8a", lineHeight: "1.2999999523162842" }}>How each leg follows the playbook this week · W31 · Jul 27 – Aug 2</p>
        </div>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ height: "32px", flexShrink: 0, borderRadius: "6px", background: "#232323", boxShadow: "inset 0 0 0 1px #2e2e2e, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", overflow: "hidden", display: "flex", flexDirection: "row", padding: "7px 11px 7px 11px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "68px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <Calendar size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#8a8a8a", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "28px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#dadada", lineHeight: "1.4500000476837158" }}>W31</p>
              <div style={{ position: "relative", flexShrink: 0, alignSelf: "flex-start", marginTop: "1px", width: "16px", height: "16px" }}>
                <ChevronRight size={16} strokeWidth={2.25} style={{ position: "absolute", left: "16px", top: "0px", width: "16px", height: "16px", transform: "rotate(90deg)", transformOrigin: "top left", color: "#8a8a8a", display: "block", flexShrink: 0 }} />
              </div>
            </div>
          </div>
          <div style={{ height: "32px", flexShrink: 0, borderRadius: "6px", background: "#232323", boxShadow: "inset 0 0 0 1px #2e2e2e, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", overflow: "hidden", display: "flex", flexDirection: "row", padding: "7px 11px 7px 11px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <Book size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#8a8a8a", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "60px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#dadada", lineHeight: "1.4500000476837158" }}>Playbook</p>
            </div>
          </div>
          <div style={{ flexShrink: 0, borderRadius: "6px", background: "#7b5bff", boxShadow: "inset 0 0 0 1px #8f74ff, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5), inset 0px 2px 4px 0px rgba(255, 255, 255, 0.2)", display: "flex", flexDirection: "row", padding: "7px 13px 7px 11px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <Checkbox size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#ffffff", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "78px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ffffff", lineHeight: "1.4500000476837158" }}>Assign task</p>
          </div>
        </div>
      </div>
      <div style={{ position: "absolute", left: "238px", top: "144px", width: "1202px", height: "1px", background: "#000000", boxShadow: "0px 1px 0px 0px #232323" }} />
      <div style={{ position: "absolute", left: "250px", top: "162px", width: "373px", height: "40px", borderRadius: "8px", background: "#191919", boxShadow: "inset 0px 2px 8px 0px rgba(0, 0, 0, 0.25)", display: "flex", flexDirection: "row", padding: "2px 2px 2px 2px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ flexShrink: 0, borderRadius: "6px", background: "#232323", boxShadow: "inset 0 0 0 1px #191919, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5), inset 0px 2px 4px 0px rgba(255, 255, 255, 0.2)", display: "flex", flexDirection: "row", padding: "7px 11px 7px 11px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "47px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#dadada", lineHeight: "1.4500000476837158" }}>All legs</p>
          <div style={{ flexShrink: 0, borderRadius: "18px", background: "#1f1f1f", display: "flex", flexDirection: "row", padding: "3px 5px 3px 5px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "13px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#cfcfcf" }}>13</p>
          </div>
        </div>
        <div style={{ flexShrink: 0, borderRadius: "6px", display: "flex", flexDirection: "row", padding: "6px 10px 6px 10px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "53px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#8a8a8a", lineHeight: "1.4500000476837158" }}>Emerald</p>
          <div style={{ flexShrink: 0, borderRadius: "18px", background: "#1f1f1f", display: "flex", flexDirection: "row", padding: "3px 5px 3px 5px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "8px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#cfcfcf" }}>3</p>
          </div>
        </div>
        <div style={{ flexShrink: 0, borderRadius: "6px", display: "flex", flexDirection: "row", padding: "6px 10px 6px 10px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "36px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#8a8a8a", lineHeight: "1.4500000476837158" }}>Eagle</p>
          <div style={{ flexShrink: 0, borderRadius: "18px", background: "#1f1f1f", display: "flex", flexDirection: "row", padding: "3px 5px 3px 5px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "8px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#cfcfcf" }}>3</p>
          </div>
        </div>
        <div style={{ flexShrink: 0, borderRadius: "6px", display: "flex", flexDirection: "row", padding: "6px 10px 6px 10px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "58px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#8a8a8a", lineHeight: "1.4500000476837158" }}>Platinum</p>
          <div style={{ flexShrink: 0, borderRadius: "18px", background: "#1f1f1f", display: "flex", flexDirection: "row", padding: "3px 5px 3px 5px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "8px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#cfcfcf" }}>6</p>
          </div>
        </div>
      </div>
      <div style={{ position: "absolute", left: "1151px", top: "173px", width: "275px", height: "16px", display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <Refresh size={14} strokeWidth={2.14} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#5f5f5f", display: "block" }} />
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "255px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#5f5f5f" }}>Day 5 of 7 · week closes Sun Aug 2, 23:59 AST</p>
      </div>
      <div style={{ position: "absolute", left: "238px", top: "204px", width: "1202px", height: "1px", background: "#000000", boxShadow: "0px 1px 0px 0px #232323" }} />
      <div style={{ position: "absolute", left: "250px", top: "204px", width: "1176px", height: "110px" }}>
        <div style={{ position: "absolute", left: "0px", top: "0px", width: "276px", height: "110px", display: "flex", flexDirection: "column", padding: "11px 0px 11px 0px", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "11px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "112px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#a0a0a0", lineHeight: "1.100000023841858" }}>Playbook adherence</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "54px", fontFamily: "'Geist'", fontSize: "28px", fontWeight: 500, color: "#ededed", lineHeight: "23px", textBox: "trim-both cap alphabetic", height: "23px" }}>74%</p>
            </div>
            <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "6px", background: "#232323", boxShadow: "inset 0 0 0 1px #2e2e2e, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", overflow: "hidden", display: "flex", flexDirection: "row", padding: "7px 7px 7px 7px", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
              <Checklist size={18} strokeWidth={1.51} style={{ width: "18px", height: "18px", flexShrink: 0, color: "#ededed", display: "block" }} />
            </div>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "5px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, borderRadius: "22px", background: "rgba(63, 179, 127, 0.1)", display: "flex", flexDirection: "row", padding: "2px 2px 2px 2px", gap: "10px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "35px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#3fb37f", lineHeight: "1.100000023841858" }}>+3 pts</p>
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "41px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8f8f8f", lineHeight: "1.100000023841858" }}>vs prior</p>
          </div>
        </div>
        <div style={{ position: "absolute", left: "288px", top: "0px", width: "1px", height: "110px", background: "#000000", boxShadow: "1px 0px 0px 0px #232323" }} />
        <div style={{ position: "absolute", left: "300px", top: "0px", width: "276px", height: "110px", display: "flex", flexDirection: "column", padding: "11px 0px 11px 0px", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "11px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "119px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#a0a0a0", lineHeight: "1.100000023841858" }}>Follow-ups due today</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "35px", fontFamily: "'Geist'", fontSize: "28px", fontWeight: 500, color: "#ededed", lineHeight: "23px", textBox: "trim-both cap alphabetic", height: "23px" }}>38</p>
            </div>
            <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "6px", background: "#232323", boxShadow: "inset 0 0 0 1px #2e2e2e, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", overflow: "hidden", display: "flex", flexDirection: "row", padding: "7px 7px 7px 7px", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
              <CalendarCheck size={18} strokeWidth={1.51} style={{ width: "18px", height: "18px", flexShrink: 0, color: "#ededed", display: "block" }} />
            </div>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "5px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, borderRadius: "22px", background: "rgba(63, 179, 127, 0.1)", display: "flex", flexDirection: "row", padding: "2px 2px 2px 2px", gap: "10px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "38px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#3fb37f", lineHeight: "1.100000023841858" }}>4 done</p>
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "48px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8f8f8f", lineHeight: "1.100000023841858" }}>by 08:10</p>
          </div>
        </div>
        <div style={{ position: "absolute", left: "588px", top: "0px", width: "1px", height: "110px", background: "#000000", boxShadow: "1px 0px 0px 0px #232323" }} />
        <div style={{ position: "absolute", left: "600px", top: "0px", width: "276px", height: "110px", display: "flex", flexDirection: "column", padding: "11px 0px 11px 0px", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "11px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "46px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#a0a0a0", lineHeight: "1.100000023841858" }}>Overdue</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "32px", fontFamily: "'Geist'", fontSize: "28px", fontWeight: 500, color: "#ededed", lineHeight: "23px", textBox: "trim-both cap alphabetic", height: "23px" }}>47</p>
            </div>
            <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "6px", background: "#232323", boxShadow: "inset 0 0 0 1px #2e2e2e, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", overflow: "hidden", display: "flex", flexDirection: "row", padding: "7px 7px 7px 7px", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
              <AlarmClock size={18} strokeWidth={1.51} style={{ width: "18px", height: "18px", flexShrink: 0, color: "#ededed", display: "block" }} />
            </div>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "5px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, borderRadius: "22px", background: "rgba(229, 72, 77, 0.1)", display: "flex", flexDirection: "row", padding: "2px 2px 2px 2px", gap: "10px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "19px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#e5484d", lineHeight: "1.100000023841858" }}>+12</p>
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "69px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8f8f8f", lineHeight: "1.100000023841858" }}>vs last week</p>
          </div>
        </div>
        <div style={{ position: "absolute", left: "888px", top: "0px", width: "1px", height: "110px", background: "#000000", boxShadow: "1px 0px 0px 0px #232323" }} />
        <div style={{ position: "absolute", left: "900px", top: "0px", width: "276px", height: "110px", display: "flex", flexDirection: "column", padding: "11px 0px 11px 0px", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "11px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "93px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#a0a0a0", lineHeight: "1.100000023841858" }}>Tasks completed</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "127px", fontFamily: "'Geist'", fontSize: "28px", fontWeight: 500, color: "#ededed", lineHeight: "23px", textBox: "trim-both cap alphabetic", height: "23px" }}>212 / 286</p>
            </div>
            <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "6px", background: "#232323", boxShadow: "inset 0 0 0 1px #2e2e2e, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", overflow: "hidden", display: "flex", flexDirection: "row", padding: "7px 7px 7px 7px", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
              <Checklist size={18} strokeWidth={1.51} style={{ width: "18px", height: "18px", flexShrink: 0, color: "#ededed", display: "block" }} />
            </div>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "5px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, borderRadius: "22px", background: "rgba(63, 179, 127, 0.1)", display: "flex", flexDirection: "row", padding: "2px 2px 2px 2px", gap: "10px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "23px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#3fb37f", lineHeight: "1.100000023841858" }}>74%</p>
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "71px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8f8f8f", lineHeight: "1.100000023841858" }}>of W31 tasks</p>
          </div>
        </div>
      </div>
      <div style={{ position: "absolute", left: "238px", top: "314px", width: "1202px", height: "1px", background: "#000000", boxShadow: "0px 1px 0px 0px #232323" }} />
      <div style={{ position: "absolute", left: "1038px", top: "315px", width: "1px", height: "421px", background: "#000000", boxShadow: "1px 0px 0px 0px #232323" }} />
      <div style={{ position: "absolute", left: "250px", top: "332px", width: "367px", height: "43px", display: "flex", flexDirection: "column", gap: "7px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "141px", fontFamily: "'Geist'", fontSize: "18px", fontWeight: 500, color: "#ededed", lineHeight: "1.100000023841858", letterSpacing: "-0.02em" }}>Adherence by leg</p>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "367px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8a8a8a", lineHeight: "1.2999999523162842" }}>Share of reporting members who did each playbook step this week</p>
      </div>
      <div style={{ position: "absolute", left: "768px", top: "336px", width: "258px", height: "16px", display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "62px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8a8a8a" }}>Below 55%</p>
        <div style={{ width: "14px", height: "14px", flexShrink: 0, borderRadius: "3px", background: "linear-gradient(180deg, rgba(229, 85, 155, 0.45) 0%, rgba(229, 85, 155, 0.55) 100%), linear-gradient(#1a1a1a, #1a1a1a)", boxShadow: "inset 0 0 0 1px rgba(183, 68, 124, 0.22), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)" }} />
        <div style={{ width: "6px", height: "1px", flexShrink: 0 }} />
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "25px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8a8a8a" }}>55%</p>
        <div style={{ width: "14px", height: "14px", flexShrink: 0, borderRadius: "3px", background: "linear-gradient(180deg, rgba(123, 91, 255, 0.18) 0%, rgba(123, 91, 255, 0.22) 100%), linear-gradient(#1a1a1a, #1a1a1a)", boxShadow: "inset 0 0 0 1px rgba(98, 73, 204, 0.13), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.06), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.25)" }} />
        <div style={{ width: "14px", height: "14px", flexShrink: 0, borderRadius: "3px", background: "linear-gradient(180deg, rgba(123, 91, 255, 0.35) 0%, rgba(123, 91, 255, 0.43) 100%), linear-gradient(#1a1a1a, #1a1a1a)", boxShadow: "inset 0 0 0 1px rgba(98, 73, 204, 0.19), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.06), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.25)" }} />
        <div style={{ width: "14px", height: "14px", flexShrink: 0, borderRadius: "3px", background: "linear-gradient(180deg, rgba(123, 91, 255, 0.52) 0%, rgba(123, 91, 255, 0.63) 100%), linear-gradient(#1a1a1a, #1a1a1a)", boxShadow: "inset 0 0 0 1px rgba(98, 73, 204, 0.24), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)" }} />
        <div style={{ width: "14px", height: "14px", flexShrink: 0, borderRadius: "3px", background: "linear-gradient(180deg, rgba(123, 91, 255, 0.69) 0%, rgba(123, 91, 255, 0.84) 100%), linear-gradient(#1a1a1a, #1a1a1a)", boxShadow: "inset 0 0 0 1px rgba(98, 73, 204, 0.3), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)" }} />
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "31px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8a8a8a" }}>100%</p>
      </div>
      <div style={{ position: "absolute", left: "238px", top: "736px", width: "1202px", height: "1px", background: "#000000", boxShadow: "0px 1px 0px 0px #232323" }} />
      <div style={{ position: "absolute", left: "250px", top: "382px", width: "776px", height: "318px", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ width: "776px", height: "30px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #222222", display: "flex", flexDirection: "row", padding: "0px 0px 1px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "222px", height: "30px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "79px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#7c7c7c" }}>Leg · reporting</p>
          </div>
          <div style={{ width: "93px", height: "30px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "87px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#7c7c7c" }}>Daily messages</p>
          </div>
          <div style={{ width: "93px", height: "30px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "68px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#7c7c7c" }}>MG1 booked</p>
          </div>
          <div style={{ width: "93px", height: "30px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "91px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#7c7c7c" }}>Follow up in 48h</p>
          </div>
          <div style={{ width: "93px", height: "30px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "77px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#7c7c7c" }}>Weekly report</p>
          </div>
          <div style={{ width: "93px", height: "30px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "44px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#7c7c7c" }}>Training</p>
          </div>
          <div style={{ width: "89px", height: "30px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 0px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "39px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#7c7c7c" }}>Overall</p>
          </div>
        </div>
        <div style={{ width: "776px", height: "32px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #222222", display: "flex", flexDirection: "row", padding: "0px 0px 1px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "222px", height: "31px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "22px", height: "22px", flexShrink: 0, borderRadius: "11px", background: "rgba(123, 91, 255, 0.14)", boxShadow: "inset 0 0 0 1px rgba(123, 91, 255, 0.28)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "11px", lineHeight: "12px", fontFamily: "'Geist'", fontSize: "9px", fontWeight: 500, color: "#9c84ff" }}>JL</p>
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "63px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#ededed" }}>Julio & Liz</p>
            <div style={{ flex: "1 1 0", minWidth: 0, height: "1px", flexShrink: 0 }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "14px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8a8a8a" }}>37</p>
          </div>
          <div style={{ width: "93px", height: "31px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "81px", height: "24px", flexShrink: 0, borderRadius: "5px", background: "linear-gradient(180deg, rgba(123, 91, 255, 0.5) 0%, rgba(123, 91, 255, 0.61) 100%), linear-gradient(#1a1a1a, #1a1a1a)", boxShadow: "inset 0 0 0 1px rgba(98, 73, 204, 0.24), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "23px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#ffffff" }}>81%</p>
            </div>
          </div>
          <div style={{ width: "93px", height: "31px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "81px", height: "24px", flexShrink: 0, borderRadius: "5px", background: "linear-gradient(180deg, rgba(123, 91, 255, 0.39) 0%, rgba(123, 91, 255, 0.48) 100%), linear-gradient(#1a1a1a, #1a1a1a)", boxShadow: "inset 0 0 0 1px rgba(98, 73, 204, 0.2), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.06), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.25)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "24px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#dadada" }}>73%</p>
            </div>
          </div>
          <div style={{ width: "93px", height: "31px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "81px", height: "24px", flexShrink: 0, borderRadius: "5px", background: "linear-gradient(180deg, rgba(123, 91, 255, 0.28) 0%, rgba(123, 91, 255, 0.35) 100%), linear-gradient(#1a1a1a, #1a1a1a)", boxShadow: "inset 0 0 0 1px rgba(98, 73, 204, 0.17), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.06), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.25)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "26px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#dadada" }}>65%</p>
            </div>
          </div>
          <div style={{ width: "93px", height: "31px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "81px", height: "24px", flexShrink: 0, borderRadius: "5px", background: "linear-gradient(180deg, rgba(123, 91, 255, 0.31) 0%, rgba(123, 91, 255, 0.38) 100%), linear-gradient(#1a1a1a, #1a1a1a)", boxShadow: "inset 0 0 0 1px rgba(98, 73, 204, 0.17), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.06), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.25)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "24px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#dadada" }}>67%</p>
            </div>
          </div>
          <div style={{ width: "93px", height: "31px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "81px", height: "24px", flexShrink: 0, borderRadius: "5px", background: "linear-gradient(180deg, rgba(229, 85, 155, 0.45) 0%, rgba(229, 85, 155, 0.55) 100%), linear-gradient(#1a1a1a, #1a1a1a)", boxShadow: "inset 0 0 0 1px rgba(183, 68, 124, 0.22), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "25px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#ffd6e8" }}>54%</p>
            </div>
          </div>
          <div style={{ width: "89px", height: "31px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 0px", gap: "8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "30px", height: "4px", flexShrink: 0, borderRadius: "2px", background: "rgba(123, 91, 255, 0.1)", overflow: "hidden", position: "relative" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "20.4px", height: "4px", borderRadius: "2px", background: "#7b5bff" }} />
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "27px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#ededed" }}>68%</p>
          </div>
        </div>
        <div style={{ width: "776px", height: "32px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #222222", display: "flex", flexDirection: "row", padding: "0px 0px 1px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "222px", height: "31px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "22px", height: "22px", flexShrink: 0, borderRadius: "11px", background: "rgba(229, 85, 155, 0.14)", boxShadow: "inset 0 0 0 1px rgba(229, 85, 155, 0.28)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "14px", lineHeight: "12px", fontFamily: "'Geist'", fontSize: "9px", fontWeight: 500, color: "#ec80b4" }}>ON</p>
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "99px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#ededed" }}>Oscar & Nayrobi</p>
            <div style={{ flex: "1 1 0", minWidth: 0, height: "1px", flexShrink: 0 }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "12px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8a8a8a" }}>31</p>
          </div>
          <div style={{ width: "93px", height: "31px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "81px", height: "24px", flexShrink: 0, borderRadius: "5px", background: "linear-gradient(180deg, rgba(123, 91, 255, 0.28) 0%, rgba(123, 91, 255, 0.35) 100%), linear-gradient(#1a1a1a, #1a1a1a)", boxShadow: "inset 0 0 0 1px rgba(98, 73, 204, 0.17), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.06), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.25)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "26px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#dadada" }}>65%</p>
            </div>
          </div>
          <div style={{ width: "93px", height: "31px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "81px", height: "24px", flexShrink: 0, borderRadius: "5px", background: "linear-gradient(180deg, rgba(123, 91, 255, 0.19) 0%, rgba(123, 91, 255, 0.23) 100%), linear-gradient(#1a1a1a, #1a1a1a)", boxShadow: "inset 0 0 0 1px rgba(98, 73, 204, 0.14), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.06), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.25)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "25px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#dadada" }}>58%</p>
            </div>
          </div>
          <div style={{ width: "93px", height: "31px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "81px", height: "24px", flexShrink: 0, borderRadius: "5px", background: "linear-gradient(180deg, rgba(123, 91, 255, 0.23) 0%, rgba(123, 91, 255, 0.28) 100%), linear-gradient(#1a1a1a, #1a1a1a)", boxShadow: "inset 0 0 0 1px rgba(98, 73, 204, 0.15), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.06), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.25)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "22px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#dadada" }}>61%</p>
            </div>
          </div>
          <div style={{ width: "93px", height: "31px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "81px", height: "24px", flexShrink: 0, borderRadius: "5px", background: "linear-gradient(180deg, rgba(229, 85, 155, 0.45) 0%, rgba(229, 85, 155, 0.55) 100%), linear-gradient(#1a1a1a, #1a1a1a)", boxShadow: "inset 0 0 0 1px rgba(183, 68, 124, 0.22), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "25px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#ffd6e8" }}>53%</p>
            </div>
          </div>
          <div style={{ width: "93px", height: "31px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "81px", height: "24px", flexShrink: 0, borderRadius: "5px", background: "linear-gradient(180deg, rgba(229, 85, 155, 0.45) 0%, rgba(229, 85, 155, 0.55) 100%), linear-gradient(#1a1a1a, #1a1a1a)", boxShadow: "inset 0 0 0 1px rgba(183, 68, 124, 0.22), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "25px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#ffd6e8" }}>42%</p>
            </div>
          </div>
          <div style={{ width: "89px", height: "31px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 0px", gap: "8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "30px", height: "4px", flexShrink: 0, borderRadius: "2px", background: "rgba(229, 85, 155, 0.1)", overflow: "hidden", position: "relative" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "16.8px", height: "4px", borderRadius: "2px", background: "#e5559b" }} />
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "28px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#f07178" }}>56%</p>
          </div>
        </div>
        <div style={{ width: "776px", height: "32px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #222222", display: "flex", flexDirection: "row", padding: "0px 0px 1px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "222px", height: "31px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "22px", height: "22px", flexShrink: 0, borderRadius: "11px", background: "rgba(122, 162, 247, 0.14)", boxShadow: "inset 0 0 0 1px rgba(122, 162, 247, 0.28)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "15px", lineHeight: "12px", fontFamily: "'Geist'", fontSize: "9px", fontWeight: 500, color: "#9bb9f9" }}>EW</p>
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "111px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#ededed" }}>Edwin & Wiliannys</p>
            <div style={{ flex: "1 1 0", minWidth: 0, height: "1px", flexShrink: 0 }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "12px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8a8a8a" }}>16</p>
          </div>
          <div style={{ width: "93px", height: "31px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "81px", height: "24px", flexShrink: 0, borderRadius: "5px", background: "linear-gradient(180deg, rgba(123, 91, 255, 0.59) 0%, rgba(123, 91, 255, 0.72) 100%), linear-gradient(#1a1a1a, #1a1a1a)", boxShadow: "inset 0 0 0 1px rgba(98, 73, 204, 0.27), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "25px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#ffffff" }}>88%</p>
            </div>
          </div>
          <div style={{ width: "93px", height: "31px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "81px", height: "24px", flexShrink: 0, borderRadius: "5px", background: "linear-gradient(180deg, rgba(123, 91, 255, 0.5) 0%, rgba(123, 91, 255, 0.61) 100%), linear-gradient(#1a1a1a, #1a1a1a)", boxShadow: "inset 0 0 0 1px rgba(98, 73, 204, 0.24), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "23px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#ffffff" }}>81%</p>
            </div>
          </div>
          <div style={{ width: "93px", height: "31px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "81px", height: "24px", flexShrink: 0, borderRadius: "5px", background: "linear-gradient(180deg, rgba(123, 91, 255, 0.42) 0%, rgba(123, 91, 255, 0.51) 100%), linear-gradient(#1a1a1a, #1a1a1a)", boxShadow: "inset 0 0 0 1px rgba(98, 73, 204, 0.21), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.06), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.25)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "24px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#dadada" }}>75%</p>
            </div>
          </div>
          <div style={{ width: "93px", height: "31px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "81px", height: "24px", flexShrink: 0, borderRadius: "5px", background: "linear-gradient(180deg, rgba(123, 91, 255, 0.75) 0%, rgba(123, 91, 255, 0.92) 100%), linear-gradient(#1a1a1a, #1a1a1a)", boxShadow: "inset 0 0 0 1px rgba(98, 73, 204, 0.32), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "31px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#ffffff" }}>100%</p>
            </div>
          </div>
          <div style={{ width: "93px", height: "31px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "81px", height: "24px", flexShrink: 0, borderRadius: "5px", background: "linear-gradient(180deg, rgba(123, 91, 255, 0.34) 0%, rgba(123, 91, 255, 0.41) 100%), linear-gradient(#1a1a1a, #1a1a1a)", boxShadow: "inset 0 0 0 1px rgba(98, 73, 204, 0.18), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.06), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.25)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "25px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#dadada" }}>69%</p>
            </div>
          </div>
          <div style={{ width: "89px", height: "31px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 0px", gap: "8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "30px", height: "4px", flexShrink: 0, borderRadius: "2px", background: "rgba(123, 91, 255, 0.1)", overflow: "hidden", position: "relative" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "24.9px", height: "4px", borderRadius: "2px", background: "#7b5bff" }} />
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "27px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#ededed" }}>83%</p>
          </div>
        </div>
        <div style={{ width: "776px", height: "32px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #222222", display: "flex", flexDirection: "row", padding: "0px 0px 1px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "222px", height: "31px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "22px", height: "22px", flexShrink: 0, borderRadius: "11px", background: "rgba(227, 179, 65, 0.14)", boxShadow: "inset 0 0 0 1px rgba(227, 179, 65, 0.28)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "13px", lineHeight: "12px", fontFamily: "'Geist'", fontSize: "9px", fontWeight: 500, color: "#eac671" }}>AC</p>
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "94px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#ededed" }}>Alberto & Ciany</p>
            <div style={{ flex: "1 1 0", minWidth: 0, height: "1px", flexShrink: 0 }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "12px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8a8a8a" }}>18</p>
          </div>
          <div style={{ width: "93px", height: "31px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "81px", height: "24px", flexShrink: 0, borderRadius: "5px", background: "linear-gradient(180deg, rgba(123, 91, 255, 0.53) 0%, rgba(123, 91, 255, 0.64) 100%), linear-gradient(#1a1a1a, #1a1a1a)", boxShadow: "inset 0 0 0 1px rgba(98, 73, 204, 0.25), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "25px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#ffffff" }}>83%</p>
            </div>
          </div>
          <div style={{ width: "93px", height: "31px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "81px", height: "24px", flexShrink: 0, borderRadius: "5px", background: "linear-gradient(180deg, rgba(123, 91, 255, 0.38) 0%, rgba(123, 91, 255, 0.46) 100%), linear-gradient(#1a1a1a, #1a1a1a)", boxShadow: "inset 0 0 0 1px rgba(98, 73, 204, 0.2), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.06), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.25)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "24px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#dadada" }}>72%</p>
            </div>
          </div>
          <div style={{ width: "93px", height: "31px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "81px", height: "24px", flexShrink: 0, borderRadius: "5px", background: "linear-gradient(180deg, rgba(123, 91, 255, 0.31) 0%, rgba(123, 91, 255, 0.38) 100%), linear-gradient(#1a1a1a, #1a1a1a)", boxShadow: "inset 0 0 0 1px rgba(98, 73, 204, 0.17), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.06), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.25)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "24px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#dadada" }}>67%</p>
            </div>
          </div>
          <div style={{ width: "93px", height: "31px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "81px", height: "24px", flexShrink: 0, borderRadius: "5px", background: "linear-gradient(180deg, rgba(123, 91, 255, 0.57) 0%, rgba(123, 91, 255, 0.69) 100%), linear-gradient(#1a1a1a, #1a1a1a)", boxShadow: "inset 0 0 0 1px rgba(98, 73, 204, 0.26), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "25px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#ffffff" }}>86%</p>
            </div>
          </div>
          <div style={{ width: "93px", height: "31px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "81px", height: "24px", flexShrink: 0, borderRadius: "5px", background: "linear-gradient(180deg, rgba(123, 91, 255, 0.23) 0%, rgba(123, 91, 255, 0.28) 100%), linear-gradient(#1a1a1a, #1a1a1a)", boxShadow: "inset 0 0 0 1px rgba(98, 73, 204, 0.15), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.06), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.25)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "22px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#dadada" }}>61%</p>
            </div>
          </div>
          <div style={{ width: "89px", height: "31px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 0px", gap: "8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "30px", height: "4px", flexShrink: 0, borderRadius: "2px", background: "rgba(123, 91, 255, 0.1)", overflow: "hidden", position: "relative" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "22.2px", height: "4px", borderRadius: "2px", background: "#7b5bff" }} />
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "25px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#ededed" }}>74%</p>
          </div>
        </div>
        <div style={{ width: "776px", height: "32px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #222222", display: "flex", flexDirection: "row", padding: "0px 0px 1px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "222px", height: "31px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "22px", height: "22px", flexShrink: 0, borderRadius: "11px", background: "rgba(63, 179, 127, 0.14)", boxShadow: "inset 0 0 0 1px rgba(63, 179, 127, 0.28)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "12px", lineHeight: "12px", fontFamily: "'Geist'", fontSize: "9px", fontWeight: 500, color: "#6fc69f" }}>CE</p>
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "90px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#ededed" }}>Carlos & Erody</p>
            <div style={{ flex: "1 1 0", minWidth: 0, height: "1px", flexShrink: 0 }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "13px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8a8a8a" }}>10</p>
          </div>
          <div style={{ width: "93px", height: "31px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "81px", height: "24px", flexShrink: 0, borderRadius: "5px", background: "linear-gradient(180deg, rgba(123, 91, 255, 0.35) 0%, rgba(123, 91, 255, 0.43) 100%), linear-gradient(#1a1a1a, #1a1a1a)", boxShadow: "inset 0 0 0 1px rgba(98, 73, 204, 0.19), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.06), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.25)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "25px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#dadada" }}>70%</p>
            </div>
          </div>
          <div style={{ width: "93px", height: "31px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "81px", height: "24px", flexShrink: 0, borderRadius: "5px", background: "linear-gradient(180deg, rgba(123, 91, 255, 0.22) 0%, rgba(123, 91, 255, 0.26) 100%), linear-gradient(#1a1a1a, #1a1a1a)", boxShadow: "inset 0 0 0 1px rgba(98, 73, 204, 0.14), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.06), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.25)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "26px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#dadada" }}>60%</p>
            </div>
          </div>
          <div style={{ width: "93px", height: "31px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "81px", height: "24px", flexShrink: 0, borderRadius: "5px", background: "linear-gradient(180deg, rgba(229, 85, 155, 0.45) 0%, rgba(229, 85, 155, 0.55) 100%), linear-gradient(#1a1a1a, #1a1a1a)", boxShadow: "inset 0 0 0 1px rgba(183, 68, 124, 0.22), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "26px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#ffd6e8" }}>50%</p>
            </div>
          </div>
          <div style={{ width: "93px", height: "31px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "81px", height: "24px", flexShrink: 0, borderRadius: "5px", background: "linear-gradient(180deg, rgba(123, 91, 255, 0.63) 0%, rgba(123, 91, 255, 0.77) 100%), linear-gradient(#1a1a1a, #1a1a1a)", boxShadow: "inset 0 0 0 1px rgba(98, 73, 204, 0.28), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "23px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#ffffff" }}>91%</p>
            </div>
          </div>
          <div style={{ width: "93px", height: "31px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "81px", height: "24px", flexShrink: 0, borderRadius: "5px", background: "linear-gradient(180deg, rgba(229, 85, 155, 0.45) 0%, rgba(229, 85, 155, 0.55) 100%), linear-gradient(#1a1a1a, #1a1a1a)", boxShadow: "inset 0 0 0 1px rgba(183, 68, 124, 0.22), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "26px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#ffd6e8" }}>40%</p>
            </div>
          </div>
          <div style={{ width: "89px", height: "31px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 0px", gap: "8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "30px", height: "4px", flexShrink: 0, borderRadius: "2px", background: "rgba(123, 91, 255, 0.1)", overflow: "hidden", position: "relative" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "18.6px", height: "4px", borderRadius: "2px", background: "#7b5bff" }} />
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "27px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#ededed" }}>62%</p>
          </div>
        </div>
        <div style={{ width: "776px", height: "32px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #222222", display: "flex", flexDirection: "row", padding: "0px 0px 1px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "222px", height: "31px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "22px", height: "22px", flexShrink: 0, borderRadius: "11px", background: "rgba(122, 162, 247, 0.14)", boxShadow: "inset 0 0 0 1px rgba(122, 162, 247, 0.28)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "13px", lineHeight: "12px", fontFamily: "'Geist'", fontSize: "9px", fontWeight: 500, color: "#9bb9f9" }}>CS</p>
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "112px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#ededed" }}>Carlos & Stephany</p>
            <div style={{ flex: "1 1 0", minWidth: 0, height: "1px", flexShrink: 0 }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "8px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8a8a8a" }}>8</p>
          </div>
          <div style={{ width: "93px", height: "31px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "81px", height: "24px", flexShrink: 0, borderRadius: "5px", background: "linear-gradient(180deg, rgba(123, 91, 255, 0.59) 0%, rgba(123, 91, 255, 0.72) 100%), linear-gradient(#1a1a1a, #1a1a1a)", boxShadow: "inset 0 0 0 1px rgba(98, 73, 204, 0.27), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "25px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#ffffff" }}>88%</p>
            </div>
          </div>
          <div style={{ width: "93px", height: "31px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "81px", height: "24px", flexShrink: 0, borderRadius: "5px", background: "linear-gradient(180deg, rgba(123, 91, 255, 0.42) 0%, rgba(123, 91, 255, 0.51) 100%), linear-gradient(#1a1a1a, #1a1a1a)", boxShadow: "inset 0 0 0 1px rgba(98, 73, 204, 0.21), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.06), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.25)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "24px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#dadada" }}>75%</p>
            </div>
          </div>
          <div style={{ width: "93px", height: "31px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "81px", height: "24px", flexShrink: 0, borderRadius: "5px", background: "linear-gradient(180deg, rgba(123, 91, 255, 0.26) 0%, rgba(123, 91, 255, 0.31) 100%), linear-gradient(#1a1a1a, #1a1a1a)", boxShadow: "inset 0 0 0 1px rgba(98, 73, 204, 0.16), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.06), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.25)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "25px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#dadada" }}>63%</p>
            </div>
          </div>
          <div style={{ width: "93px", height: "31px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "81px", height: "24px", flexShrink: 0, borderRadius: "5px", background: "linear-gradient(180deg, rgba(123, 91, 255, 0.49) 0%, rgba(123, 91, 255, 0.59) 100%), linear-gradient(#1a1a1a, #1a1a1a)", boxShadow: "inset 0 0 0 1px rgba(98, 73, 204, 0.23), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "26px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#ffffff" }}>80%</p>
            </div>
          </div>
          <div style={{ width: "93px", height: "31px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "81px", height: "24px", flexShrink: 0, borderRadius: "5px", background: "linear-gradient(180deg, rgba(229, 85, 155, 0.45) 0%, rgba(229, 85, 155, 0.55) 100%), linear-gradient(#1a1a1a, #1a1a1a)", boxShadow: "inset 0 0 0 1px rgba(183, 68, 124, 0.22), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "26px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#ffd6e8" }}>50%</p>
            </div>
          </div>
          <div style={{ width: "89px", height: "31px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 0px", gap: "8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "30px", height: "4px", flexShrink: 0, borderRadius: "2px", background: "rgba(123, 91, 255, 0.1)", overflow: "hidden", position: "relative" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "21.3px", height: "4px", borderRadius: "2px", background: "#7b5bff" }} />
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "23px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#ededed" }}>71%</p>
          </div>
        </div>
        <div style={{ width: "776px", height: "32px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #222222", display: "flex", flexDirection: "row", padding: "0px 0px 1px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "222px", height: "31px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "22px", height: "22px", flexShrink: 0, borderRadius: "11px", background: "rgba(123, 91, 255, 0.14)", boxShadow: "inset 0 0 0 1px rgba(123, 91, 255, 0.28)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "12px", lineHeight: "12px", fontFamily: "'Geist'", fontSize: "9px", fontWeight: 500, color: "#9c84ff" }}>ES</p>
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "124px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#ededed" }}>Enmanuel & Suseidy</p>
            <div style={{ flex: "1 1 0", minWidth: 0, height: "1px", flexShrink: 0 }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "12px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8a8a8a" }}>16</p>
          </div>
          <div style={{ width: "93px", height: "31px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "81px", height: "24px", flexShrink: 0, borderRadius: "5px", background: "linear-gradient(180deg, rgba(123, 91, 255, 0.75) 0%, rgba(123, 91, 255, 0.92) 100%), linear-gradient(#1a1a1a, #1a1a1a)", boxShadow: "inset 0 0 0 1px rgba(98, 73, 204, 0.32), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "31px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#ffffff" }}>100%</p>
            </div>
          </div>
          <div style={{ width: "93px", height: "31px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "81px", height: "24px", flexShrink: 0, borderRadius: "5px", background: "linear-gradient(180deg, rgba(123, 91, 255, 0.67) 0%, rgba(123, 91, 255, 0.82) 100%), linear-gradient(#1a1a1a, #1a1a1a)", boxShadow: "inset 0 0 0 1px rgba(98, 73, 204, 0.29), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "25px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#ffffff" }}>94%</p>
            </div>
          </div>
          <div style={{ width: "93px", height: "31px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "81px", height: "24px", flexShrink: 0, borderRadius: "5px", background: "linear-gradient(180deg, rgba(123, 91, 255, 0.59) 0%, rgba(123, 91, 255, 0.72) 100%), linear-gradient(#1a1a1a, #1a1a1a)", boxShadow: "inset 0 0 0 1px rgba(98, 73, 204, 0.27), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "25px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#ffffff" }}>88%</p>
            </div>
          </div>
          <div style={{ width: "93px", height: "31px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "81px", height: "24px", flexShrink: 0, borderRadius: "5px", background: "linear-gradient(180deg, rgba(123, 91, 255, 0.75) 0%, rgba(123, 91, 255, 0.92) 100%), linear-gradient(#1a1a1a, #1a1a1a)", boxShadow: "inset 0 0 0 1px rgba(98, 73, 204, 0.32), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "31px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#ffffff" }}>100%</p>
            </div>
          </div>
          <div style={{ width: "93px", height: "31px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "81px", height: "24px", flexShrink: 0, borderRadius: "5px", background: "linear-gradient(180deg, rgba(123, 91, 255, 0.5) 0%, rgba(123, 91, 255, 0.61) 100%), linear-gradient(#1a1a1a, #1a1a1a)", boxShadow: "inset 0 0 0 1px rgba(98, 73, 204, 0.24), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "23px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#ffffff" }}>81%</p>
            </div>
          </div>
          <div style={{ width: "89px", height: "31px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 0px", gap: "8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "30px", height: "4px", flexShrink: 0, borderRadius: "2px", background: "rgba(123, 91, 255, 0.1)", overflow: "hidden", position: "relative" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "27.9px", height: "4px", borderRadius: "2px", background: "#7b5bff" }} />
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "27px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#ededed" }}>93%</p>
          </div>
        </div>
        <div style={{ width: "776px", height: "32px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #222222", display: "flex", flexDirection: "row", padding: "0px 0px 1px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "222px", height: "31px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "22px", height: "22px", flexShrink: 0, borderRadius: "11px", background: "rgba(227, 179, 65, 0.14)", boxShadow: "inset 0 0 0 1px rgba(227, 179, 65, 0.28)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "12px", lineHeight: "12px", fontFamily: "'Geist'", fontSize: "9px", fontWeight: 500, color: "#eac671" }}>SS</p>
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "81px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#ededed" }}>Saul Santana</p>
            <div style={{ flex: "1 1 0", minWidth: 0, height: "1px", flexShrink: 0 }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "12px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8a8a8a" }}>16</p>
          </div>
          <div style={{ width: "93px", height: "31px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "81px", height: "24px", flexShrink: 0, borderRadius: "5px", background: "linear-gradient(180deg, rgba(123, 91, 255, 0.59) 0%, rgba(123, 91, 255, 0.72) 100%), linear-gradient(#1a1a1a, #1a1a1a)", boxShadow: "inset 0 0 0 1px rgba(98, 73, 204, 0.27), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "25px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#ffffff" }}>88%</p>
            </div>
          </div>
          <div style={{ width: "93px", height: "31px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "81px", height: "24px", flexShrink: 0, borderRadius: "5px", background: "linear-gradient(180deg, rgba(123, 91, 255, 0.42) 0%, rgba(123, 91, 255, 0.51) 100%), linear-gradient(#1a1a1a, #1a1a1a)", boxShadow: "inset 0 0 0 1px rgba(98, 73, 204, 0.21), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.06), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.25)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "24px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#dadada" }}>75%</p>
            </div>
          </div>
          <div style={{ width: "93px", height: "31px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "81px", height: "24px", flexShrink: 0, borderRadius: "5px", background: "linear-gradient(180deg, rgba(123, 91, 255, 0.34) 0%, rgba(123, 91, 255, 0.41) 100%), linear-gradient(#1a1a1a, #1a1a1a)", boxShadow: "inset 0 0 0 1px rgba(98, 73, 204, 0.18), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.06), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.25)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "25px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#dadada" }}>69%</p>
            </div>
          </div>
          <div style={{ width: "93px", height: "31px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "81px", height: "24px", flexShrink: 0, borderRadius: "5px", background: "linear-gradient(180deg, rgba(123, 91, 255, 0.75) 0%, rgba(123, 91, 255, 0.92) 100%), linear-gradient(#1a1a1a, #1a1a1a)", boxShadow: "inset 0 0 0 1px rgba(98, 73, 204, 0.32), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "31px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#ffffff" }}>100%</p>
            </div>
          </div>
          <div style={{ width: "93px", height: "31px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "81px", height: "24px", flexShrink: 0, borderRadius: "5px", background: "linear-gradient(180deg, rgba(123, 91, 255, 0.26) 0%, rgba(123, 91, 255, 0.31) 100%), linear-gradient(#1a1a1a, #1a1a1a)", boxShadow: "inset 0 0 0 1px rgba(98, 73, 204, 0.16), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.06), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.25)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "25px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#dadada" }}>63%</p>
            </div>
          </div>
          <div style={{ width: "89px", height: "31px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 0px", gap: "8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "30px", height: "4px", flexShrink: 0, borderRadius: "2px", background: "rgba(123, 91, 255, 0.1)", overflow: "hidden", position: "relative" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "23.7px", height: "4px", borderRadius: "2px", background: "#7b5bff" }} />
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "26px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#ededed" }}>79%</p>
          </div>
        </div>
        <div style={{ width: "776px", height: "32px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #222222", display: "flex", flexDirection: "row", padding: "0px 0px 1px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "222px", height: "31px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "22px", height: "22px", flexShrink: 0, borderRadius: "11px", background: "rgba(229, 85, 155, 0.14)", boxShadow: "inset 0 0 0 1px rgba(229, 85, 155, 0.28)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "12px", lineHeight: "12px", fontFamily: "'Geist'", fontSize: "9px", fontWeight: 500, color: "#ec80b4" }}>JR</p>
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "108px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#ededed" }}>Jonathan Rondon</p>
            <div style={{ flex: "1 1 0", minWidth: 0, height: "1px", flexShrink: 0 }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "12px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8a8a8a" }}>16</p>
          </div>
          <div style={{ width: "93px", height: "31px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "81px", height: "24px", flexShrink: 0, borderRadius: "5px", background: "linear-gradient(180deg, rgba(123, 91, 255, 0.67) 0%, rgba(123, 91, 255, 0.82) 100%), linear-gradient(#1a1a1a, #1a1a1a)", boxShadow: "inset 0 0 0 1px rgba(98, 73, 204, 0.29), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "25px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#ffffff" }}>94%</p>
            </div>
          </div>
          <div style={{ width: "93px", height: "31px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "81px", height: "24px", flexShrink: 0, borderRadius: "5px", background: "linear-gradient(180deg, rgba(123, 91, 255, 0.59) 0%, rgba(123, 91, 255, 0.72) 100%), linear-gradient(#1a1a1a, #1a1a1a)", boxShadow: "inset 0 0 0 1px rgba(98, 73, 204, 0.27), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "25px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#ffffff" }}>88%</p>
            </div>
          </div>
          <div style={{ width: "93px", height: "31px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "81px", height: "24px", flexShrink: 0, borderRadius: "5px", background: "linear-gradient(180deg, rgba(123, 91, 255, 0.5) 0%, rgba(123, 91, 255, 0.61) 100%), linear-gradient(#1a1a1a, #1a1a1a)", boxShadow: "inset 0 0 0 1px rgba(98, 73, 204, 0.24), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "23px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#ffffff" }}>81%</p>
            </div>
          </div>
          <div style={{ width: "93px", height: "31px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "81px", height: "24px", flexShrink: 0, borderRadius: "5px", background: "linear-gradient(180deg, rgba(123, 91, 255, 0.75) 0%, rgba(123, 91, 255, 0.92) 100%), linear-gradient(#1a1a1a, #1a1a1a)", boxShadow: "inset 0 0 0 1px rgba(98, 73, 204, 0.32), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "31px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#ffffff" }}>100%</p>
            </div>
          </div>
          <div style={{ width: "93px", height: "31px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "81px", height: "24px", flexShrink: 0, borderRadius: "5px", background: "linear-gradient(180deg, rgba(123, 91, 255, 0.26) 0%, rgba(123, 91, 255, 0.31) 100%), linear-gradient(#1a1a1a, #1a1a1a)", boxShadow: "inset 0 0 0 1px rgba(98, 73, 204, 0.16), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.06), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.25)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "25px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#dadada" }}>63%</p>
            </div>
          </div>
          <div style={{ width: "89px", height: "31px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 0px", gap: "8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "30px", height: "4px", flexShrink: 0, borderRadius: "2px", background: "rgba(123, 91, 255, 0.1)", overflow: "hidden", position: "relative" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "25.5px", height: "4px", borderRadius: "2px", background: "#7b5bff" }} />
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "27px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#ededed" }}>85%</p>
          </div>
        </div>
      </div>
      <div style={{ position: "absolute", left: "262px", top: "712px", width: "592px", height: "16px", display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "89px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#a0a0a0" }}>+ 4 smaller legs</p>
        <svg style={{ width: "3px", height: "3px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="3" height="3" viewBox="0 0 3 3" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M3 1.5 C3 2.32843 2.32843 3 1.5 3 C0.671573 3 0 2.32843 0 1.5 C0 0.671573 0.671573 0 1.5 0 C2.32843 0 3 0.671573 3 1.5 Z" fill="#5f5f5f"/></svg>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "488px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8a8a8a" }}>Luis & Jackie 84% · Domingo & Alejandra 90% · Fredis & Yanelis 80% · Ruben & Maria 60%</p>
      </div>
      <div style={{ position: "absolute", left: "1051px", top: "332px", width: "230px", height: "43px", display: "flex", flexDirection: "column", gap: "7px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "83px", fontFamily: "'Geist'", fontSize: "18px", fontWeight: 500, color: "#ededed", lineHeight: "1.100000023841858", letterSpacing: "-0.02em" }}>Due today</p>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "230px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8a8a8a", lineHeight: "1.2999999523162842" }}>38 follow-ups and tasks · 4 done by 08:10</p>
      </div>
      <p style={{ position: "absolute", left: "1379px", top: "336px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "47px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 400, color: "#9e7bff" }}>View all</p>
      <div style={{ position: "absolute", left: "1051px", top: "384px", width: "375px", height: "312px", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ width: "375px", height: "52px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #222222", display: "flex", flexDirection: "row", padding: "0px 0px 1px 0px", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "18px", height: "18px", flexShrink: 0, borderRadius: "9px", background: "#7b5bff", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <Check size={12} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#ffffff", display: "block" }} />
          </div>
          <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "145px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#8a8a8a", textDecoration: "line-through" }}>Follow up · Familia Peña</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "100px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#909090" }}>Julio & Liz · 08:00</p>
          </div>
          <div style={{ width: "22px", height: "22px", flexShrink: 0, borderRadius: "11px", background: "rgba(123, 91, 255, 0.14)", boxShadow: "inset 0 0 0 1px rgba(123, 91, 255, 0.28)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "11px", lineHeight: "12px", fontFamily: "'Geist'", fontSize: "9px", fontWeight: 500, color: "#9c84ff" }}>JL</p>
          </div>
        </div>
        <div style={{ width: "375px", height: "52px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #222222", display: "flex", flexDirection: "row", padding: "0px 0px 1px 0px", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "18px", height: "18px", flexShrink: 0, borderRadius: "9px", background: "#191919", boxShadow: "inset 0 0 0 1.5px #3a3a3a" }} />
          <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "169px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#ededed" }}>Second visit · Rosa Almonte</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "129px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#909090" }}>Oscar & Nayrobi · 10:30</p>
          </div>
          <div style={{ height: "18px", flexShrink: 0, borderRadius: "6px", background: "#2d1a1c", boxShadow: "inset 0 0 0 1px #3d2326, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", display: "flex", flexDirection: "row", padding: "1px 7px 1px 7px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "45px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 500, color: "#f07178", letterSpacing: "-0.01em", textTransform: "uppercase" }}>22d late</p>
          </div>
          <div style={{ width: "22px", height: "22px", flexShrink: 0, borderRadius: "11px", background: "rgba(229, 85, 155, 0.14)", boxShadow: "inset 0 0 0 1px rgba(229, 85, 155, 0.28)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "14px", lineHeight: "12px", fontFamily: "'Geist'", fontSize: "9px", fontWeight: 500, color: "#ec80b4" }}>ON</p>
          </div>
        </div>
        <div style={{ width: "375px", height: "52px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #222222", display: "flex", flexDirection: "row", padding: "0px 0px 1px 0px", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "18px", height: "18px", flexShrink: 0, borderRadius: "9px", background: "#191919", boxShadow: "inset 0 0 0 1.5px #3a3a3a" }} />
          <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "170px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#ededed" }}>Book MG1 · Wander Polanco</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "136px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#909090" }}>Edwin & Wiliannys · 11:00</p>
          </div>
          <div style={{ width: "22px", height: "22px", flexShrink: 0, borderRadius: "11px", background: "rgba(122, 162, 247, 0.14)", boxShadow: "inset 0 0 0 1px rgba(122, 162, 247, 0.28)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "15px", lineHeight: "12px", fontFamily: "'Geist'", fontSize: "9px", fontWeight: 500, color: "#9bb9f9" }}>EW</p>
          </div>
        </div>
        <div style={{ width: "375px", height: "52px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #222222", display: "flex", flexDirection: "row", padding: "0px 0px 1px 0px", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "18px", height: "18px", flexShrink: 0, borderRadius: "9px", background: "#191919", boxShadow: "inset 0 0 0 1.5px #3a3a3a" }} />
          <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "164px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#ededed" }}>Call back · Yokasta Rosario</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "124px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#909090" }}>Alberto & Ciany · 13:00</p>
          </div>
          <div style={{ width: "22px", height: "22px", flexShrink: 0, borderRadius: "11px", background: "rgba(227, 179, 65, 0.14)", boxShadow: "inset 0 0 0 1px rgba(227, 179, 65, 0.28)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "13px", lineHeight: "12px", fontFamily: "'Geist'", fontSize: "9px", fontWeight: 500, color: "#eac671" }}>AC</p>
          </div>
        </div>
        <div style={{ width: "375px", height: "52px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #222222", display: "flex", flexDirection: "row", padding: "0px 0px 1px 0px", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "18px", height: "18px", flexShrink: 0, borderRadius: "9px", background: "#191919", boxShadow: "inset 0 0 0 1.5px #3a3a3a" }} />
          <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "160px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#ededed" }}>Upgrade talk · Grupo Báez</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "96px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#909090" }}>Julio & Liz · 15:30</p>
          </div>
          <div style={{ height: "18px", flexShrink: 0, borderRadius: "6px", background: "#211b33", boxShadow: "inset 0 0 0 1px #2d2547, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", display: "flex", flexDirection: "row", padding: "1px 7px 1px 7px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "72px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 500, color: "#a58bff", letterSpacing: "-0.01em", textTransform: "uppercase" }}>Plus → Family</p>
          </div>
          <div style={{ width: "22px", height: "22px", flexShrink: 0, borderRadius: "11px", background: "rgba(123, 91, 255, 0.14)", boxShadow: "inset 0 0 0 1px rgba(123, 91, 255, 0.28)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "11px", lineHeight: "12px", fontFamily: "'Geist'", fontSize: "9px", fontWeight: 500, color: "#9c84ff" }}>JL</p>
          </div>
        </div>
        <div style={{ width: "375px", height: "52px", flexShrink: 0, boxShadow: "inset 0 0 0 0px #222222", display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "18px", height: "18px", flexShrink: 0, borderRadius: "9px", background: "#191919", boxShadow: "inset 0 0 0 1.5px #3a3a3a" }} />
          <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "183px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#ededed" }}>Report reminder · 27 members</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "127px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#909090" }}>Oscar & Nayrobi · 17:00</p>
          </div>
          <div style={{ height: "18px", flexShrink: 0, borderRadius: "6px", background: "#2a2316", boxShadow: "inset 0 0 0 1px #3a301c, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", display: "flex", flexDirection: "row", padding: "1px 7px 1px 7px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "66px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 500, color: "#e3b341", letterSpacing: "-0.01em", textTransform: "uppercase" }}>W30 missing</p>
          </div>
          <div style={{ width: "22px", height: "22px", flexShrink: 0, borderRadius: "11px", background: "rgba(229, 85, 155, 0.14)", boxShadow: "inset 0 0 0 1px rgba(229, 85, 155, 0.28)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "14px", lineHeight: "12px", fontFamily: "'Geist'", fontSize: "9px", fontWeight: 500, color: "#ec80b4" }}>ON</p>
          </div>
        </div>
      </div>
      <div style={{ position: "absolute", left: "250px", top: "754px", width: "196px", height: "43px", display: "flex", flexDirection: "column", gap: "7px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "126px", fontFamily: "'Geist'", fontSize: "18px", fontWeight: 500, color: "#ededed", lineHeight: "1.100000023841858", letterSpacing: "-0.02em" }}>Playbook tasks</p>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "196px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8a8a8a", lineHeight: "1.2999999523162842" }}>W31 · 212 of 286 done · 74 still open</p>
      </div>
      <div style={{ position: "absolute", left: "1133px", top: "760px", width: "293px", height: "27px", display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ flexShrink: 0, borderRadius: "6px", background: "#232323", boxShadow: "inset 0 0 0 1px #2e2e2e, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", display: "flex", flexDirection: "row", padding: "5px 10px 5px 10px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "45px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 400, color: "#dadada" }}>Leg: All</p>
          <ChevronDown size={14} strokeWidth={2.14} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#8a8a8a", display: "block" }} />
        </div>
        <div style={{ flexShrink: 0, borderRadius: "6px", background: "#232323", boxShadow: "inset 0 0 0 1px #2e2e2e, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", display: "flex", flexDirection: "row", padding: "5px 10px 5px 10px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "61px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 400, color: "#dadada" }}>Owner: All</p>
          <ChevronDown size={14} strokeWidth={2.14} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#8a8a8a", display: "block" }} />
        </div>
        <div style={{ flexShrink: 0, borderRadius: "6px", background: "#232323", boxShadow: "inset 0 0 0 1px #2e2e2e, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", display: "flex", flexDirection: "row", padding: "5px 10px 5px 10px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "51px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 400, color: "#dadada" }}>Step: All</p>
          <ChevronDown size={14} strokeWidth={2.14} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#8a8a8a", display: "block" }} />
        </div>
      </div>
      <div style={{ position: "absolute", left: "250px", top: "800px", width: "1176px", height: "283px" }}>
        <div style={{ position: "absolute", left: "0px", top: "0px", width: "376px", height: "267px", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ width: "376px", height: "30px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <svg style={{ width: "7px", height: "7px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="7" height="7" viewBox="0 0 7 7" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M7 3.5 C7 5.433 5.433 7 3.5 7 C1.567 7 0 5.433 0 3.5 C0 1.567 1.567 0 3.5 0 C5.433 0 7 1.567 7 3.5 Z" fill="#8a8a8a"/></svg>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "36px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>To do</p>
            <div style={{ flexShrink: 0, borderRadius: "18px", background: "#1f1f1f", display: "flex", flexDirection: "row", padding: "3px 5px 3px 5px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "13px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#cfcfcf" }}>41</p>
            </div>
            <div style={{ flex: "1 1 0", minWidth: 0, height: "1px", flexShrink: 0 }} />
            <div style={{ width: "24px", height: "24px", flexShrink: 0, borderRadius: "6px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <Plus size={14} strokeWidth={2.14} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#8a8a8a", display: "block" }} />
            </div>
          </div>
          <div style={{ width: "376px", flexShrink: 0, boxShadow: "inset 0 1px 0 0 #222222", display: "flex", flexDirection: "column", padding: "13px 0px 12px 0px", gap: "9px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "376px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>Re-engage 27 members who missed W30</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "34px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#e3b341" }}>Today</p>
            </div>
            <div style={{ width: "376px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, borderRadius: "6px", background: "#232323", boxShadow: "inset 0 0 0 1px #2e2e2e, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", display: "flex", flexDirection: "row", padding: "5px 10px 5px 10px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "96px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 400, color: "#dadada" }}>Oscar & Nayrobi</p>
              </div>
              <div style={{ flexShrink: 0, borderRadius: "6px", background: "#232323", boxShadow: "inset 0 0 0 1px #2e2e2e, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", display: "flex", flexDirection: "row", padding: "5px 10px 5px 10px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <Note size={14} strokeWidth={2.14} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#8a8a8a", display: "block" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "83px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 400, color: "#dadada" }}>Weekly report</p>
              </div>
              <div style={{ flex: "1 1 0", minWidth: 0, height: "1px", flexShrink: 0 }} />
              <div style={{ width: "22px", height: "22px", flexShrink: 0, borderRadius: "11px", background: "rgba(229, 85, 155, 0.14)", boxShadow: "inset 0 0 0 1px rgba(229, 85, 155, 0.28)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "14px", lineHeight: "12px", fontFamily: "'Geist'", fontSize: "9px", fontWeight: 500, color: "#ec80b4" }}>ON</p>
              </div>
            </div>
          </div>
          <div style={{ width: "376px", flexShrink: 0, boxShadow: "inset 0 1px 0 0 #222222", display: "flex", flexDirection: "column", padding: "13px 0px 12px 0px", gap: "9px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "376px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>Book MG1 for 14 walk-in leads from Ágora Mall</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "30px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8a8a8a" }}>Aug 1</p>
            </div>
            <div style={{ width: "376px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, borderRadius: "6px", background: "#232323", boxShadow: "inset 0 0 0 1px #2e2e2e, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", display: "flex", flexDirection: "row", padding: "5px 10px 5px 10px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "61px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 400, color: "#dadada" }}>Julio & Liz</p>
              </div>
              <div style={{ flexShrink: 0, borderRadius: "6px", background: "#232323", boxShadow: "inset 0 0 0 1px #2e2e2e, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", display: "flex", flexDirection: "row", padding: "5px 10px 5px 10px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <CalendarCheck size={14} strokeWidth={2.14} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#8a8a8a", display: "block" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "73px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 400, color: "#dadada" }}>MG1 booked</p>
              </div>
              <div style={{ flex: "1 1 0", minWidth: 0, height: "1px", flexShrink: 0 }} />
              <div style={{ width: "22px", height: "22px", flexShrink: 0, borderRadius: "11px", background: "rgba(123, 91, 255, 0.14)", boxShadow: "inset 0 0 0 1px rgba(123, 91, 255, 0.28)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "11px", lineHeight: "12px", fontFamily: "'Geist'", fontSize: "9px", fontWeight: 500, color: "#9c84ff" }}>JL</p>
              </div>
            </div>
          </div>
          <div style={{ width: "376px", flexShrink: 0, boxShadow: "inset 0 1px 0 0 #222222", display: "flex", flexDirection: "column", padding: "13px 0px 12px 0px", gap: "9px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "376px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>Objection handling · training module 3</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "33px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8a8a8a" }}>Aug 2</p>
            </div>
            <div style={{ width: "376px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, borderRadius: "6px", background: "#232323", boxShadow: "inset 0 0 0 1px #2e2e2e, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", display: "flex", flexDirection: "row", padding: "5px 10px 5px 10px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "87px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 400, color: "#dadada" }}>Carlos & Erody</p>
              </div>
              <div style={{ flexShrink: 0, borderRadius: "6px", background: "#232323", boxShadow: "inset 0 0 0 1px #2e2e2e, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", display: "flex", flexDirection: "row", padding: "5px 10px 5px 10px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <School size={14} strokeWidth={2.14} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#8a8a8a", display: "block" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "48px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 400, color: "#dadada" }}>Training</p>
              </div>
              <div style={{ flex: "1 1 0", minWidth: 0, height: "1px", flexShrink: 0 }} />
              <div style={{ width: "22px", height: "22px", flexShrink: 0, borderRadius: "11px", background: "rgba(63, 179, 127, 0.14)", boxShadow: "inset 0 0 0 1px rgba(63, 179, 127, 0.28)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "12px", lineHeight: "12px", fontFamily: "'Geist'", fontSize: "9px", fontWeight: 500, color: "#6fc69f" }}>CE</p>
              </div>
            </div>
          </div>
        </div>
        <div style={{ position: "absolute", left: "388px", top: "0px", width: "1px", height: "283px", background: "#000000", boxShadow: "1px 0px 0px 0px #232323" }} />
        <div style={{ position: "absolute", left: "400px", top: "0px", width: "376px", height: "267px", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ width: "376px", height: "30px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <svg style={{ width: "7px", height: "7px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="7" height="7" viewBox="0 0 7 7" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M7 3.5 C7 5.433 5.433 7 3.5 7 C1.567 7 0 5.433 0 3.5 C0 1.567 1.567 0 3.5 0 C5.433 0 7 1.567 7 3.5 Z" fill="#e3b341"/></svg>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "74px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>In progress</p>
            <div style={{ flexShrink: 0, borderRadius: "18px", background: "#1f1f1f", display: "flex", flexDirection: "row", padding: "3px 5px 3px 5px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "15px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#cfcfcf" }}>33</p>
            </div>
            <div style={{ flex: "1 1 0", minWidth: 0, height: "1px", flexShrink: 0 }} />
            <div style={{ width: "24px", height: "24px", flexShrink: 0, borderRadius: "6px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <Plus size={14} strokeWidth={2.14} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#8a8a8a", display: "block" }} />
            </div>
          </div>
          <div style={{ width: "376px", flexShrink: 0, boxShadow: "inset 0 1px 0 0 #222222", display: "flex", flexDirection: "column", padding: "13px 0px 12px 0px", gap: "9px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "376px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>Follow up 2+ with 12 overdue prospects</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "34px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#e3b341" }}>Today</p>
            </div>
            <div style={{ width: "376px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, borderRadius: "6px", background: "#232323", boxShadow: "inset 0 0 0 1px #2e2e2e, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", display: "flex", flexDirection: "row", padding: "5px 10px 5px 10px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "96px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 400, color: "#dadada" }}>Oscar & Nayrobi</p>
              </div>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "2.4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "linear-gradient(180deg, #e6bc58 0%, #e3b341 100%)" }} />
                  <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "linear-gradient(180deg, #e6bc58 0%, #e3b341 100%)" }} />
                  <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "linear-gradient(180deg, #e6bc58 0%, #e3b341 100%)" }} />
                  <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "linear-gradient(180deg, #e6bc58 0%, #e3b341 100%)" }} />
                  <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "linear-gradient(180deg, #e6bc58 0%, #e3b341 100%)" }} />
                  <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "linear-gradient(180deg, #e6bc58 0%, #e3b341 100%)" }} />
                  <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "rgba(227, 179, 65, 0.16)" }} />
                  <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "rgba(227, 179, 65, 0.16)" }} />
                  <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "rgba(227, 179, 65, 0.16)" }} />
                  <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "rgba(227, 179, 65, 0.16)" }} />
                  <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "rgba(227, 179, 65, 0.16)" }} />
                  <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "rgba(227, 179, 65, 0.16)" }} />
                  <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "rgba(227, 179, 65, 0.16)" }} />
                  <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "rgba(227, 179, 65, 0.16)" }} />
                </div>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "38px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#dadada" }}>5 of 12</p>
              </div>
              <div style={{ flex: "1 1 0", minWidth: 0, height: "1px", flexShrink: 0 }} />
              <div style={{ width: "22px", height: "22px", flexShrink: 0, borderRadius: "11px", background: "rgba(229, 85, 155, 0.14)", boxShadow: "inset 0 0 0 1px rgba(229, 85, 155, 0.28)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "14px", lineHeight: "12px", fontFamily: "'Geist'", fontSize: "9px", fontWeight: 500, color: "#ec80b4" }}>ON</p>
              </div>
            </div>
          </div>
          <div style={{ width: "376px", flexShrink: 0, boxShadow: "inset 0 1px 0 0 #222222", display: "flex", flexDirection: "column", padding: "13px 0px 12px 0px", gap: "9px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "376px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>Family plan upsell calls · 20 customers</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "30px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8a8a8a" }}>Aug 1</p>
            </div>
            <div style={{ width: "376px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, borderRadius: "6px", background: "#232323", boxShadow: "inset 0 0 0 1px #2e2e2e, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", display: "flex", flexDirection: "row", padding: "5px 10px 5px 10px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "108px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 400, color: "#dadada" }}>Edwin & Wiliannys</p>
              </div>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "2.4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "linear-gradient(180deg, #e6bc58 0%, #e3b341 100%)" }} />
                  <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "linear-gradient(180deg, #e6bc58 0%, #e3b341 100%)" }} />
                  <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "linear-gradient(180deg, #e6bc58 0%, #e3b341 100%)" }} />
                  <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "linear-gradient(180deg, #e6bc58 0%, #e3b341 100%)" }} />
                  <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "linear-gradient(180deg, #e6bc58 0%, #e3b341 100%)" }} />
                  <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "linear-gradient(180deg, #e6bc58 0%, #e3b341 100%)" }} />
                  <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "rgba(227, 179, 65, 0.16)" }} />
                  <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "rgba(227, 179, 65, 0.16)" }} />
                  <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "rgba(227, 179, 65, 0.16)" }} />
                  <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "rgba(227, 179, 65, 0.16)" }} />
                  <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "rgba(227, 179, 65, 0.16)" }} />
                  <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "rgba(227, 179, 65, 0.16)" }} />
                  <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "rgba(227, 179, 65, 0.16)" }} />
                  <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "rgba(227, 179, 65, 0.16)" }} />
                </div>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "41px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#dadada" }}>8 of 20</p>
              </div>
              <div style={{ flex: "1 1 0", minWidth: 0, height: "1px", flexShrink: 0 }} />
              <div style={{ width: "22px", height: "22px", flexShrink: 0, borderRadius: "11px", background: "rgba(122, 162, 247, 0.14)", boxShadow: "inset 0 0 0 1px rgba(122, 162, 247, 0.28)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "15px", lineHeight: "12px", fontFamily: "'Geist'", fontSize: "9px", fontWeight: 500, color: "#9bb9f9" }}>EW</p>
              </div>
            </div>
          </div>
          <div style={{ width: "376px", flexShrink: 0, boxShadow: "inset 0 1px 0 0 #222222", display: "flex", flexDirection: "column", padding: "13px 0px 12px 0px", gap: "9px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "376px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>Prepare the W31 leaders call</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "33px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8a8a8a" }}>Aug 2</p>
            </div>
            <div style={{ width: "376px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, borderRadius: "6px", background: "#232323", boxShadow: "inset 0 0 0 1px #2e2e2e, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", display: "flex", flexDirection: "row", padding: "5px 10px 5px 10px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "78px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 400, color: "#dadada" }}>Luis & Jackie</p>
              </div>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "2.4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "linear-gradient(180deg, #e6bc58 0%, #e3b341 100%)" }} />
                  <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "linear-gradient(180deg, #e6bc58 0%, #e3b341 100%)" }} />
                  <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "linear-gradient(180deg, #e6bc58 0%, #e3b341 100%)" }} />
                  <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "linear-gradient(180deg, #e6bc58 0%, #e3b341 100%)" }} />
                  <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "linear-gradient(180deg, #e6bc58 0%, #e3b341 100%)" }} />
                  <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "linear-gradient(180deg, #e6bc58 0%, #e3b341 100%)" }} />
                  <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "linear-gradient(180deg, #e6bc58 0%, #e3b341 100%)" }} />
                  <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "rgba(227, 179, 65, 0.16)" }} />
                  <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "rgba(227, 179, 65, 0.16)" }} />
                  <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "rgba(227, 179, 65, 0.16)" }} />
                  <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "rgba(227, 179, 65, 0.16)" }} />
                  <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "rgba(227, 179, 65, 0.16)" }} />
                  <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "rgba(227, 179, 65, 0.16)" }} />
                  <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "rgba(227, 179, 65, 0.16)" }} />
                </div>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "33px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#dadada" }}>2 of 4</p>
              </div>
              <div style={{ flex: "1 1 0", minWidth: 0, height: "1px", flexShrink: 0 }} />
              <div style={{ width: "22px", height: "22px", flexShrink: 0, borderRadius: "11px", background: "rgba(123, 91, 255, 0.14)", boxShadow: "inset 0 0 0 1px rgba(123, 91, 255, 0.28)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "11px", lineHeight: "12px", fontFamily: "'Geist'", fontSize: "9px", fontWeight: 500, color: "#9c84ff" }}>LJ</p>
              </div>
            </div>
          </div>
        </div>
        <div style={{ position: "absolute", left: "788px", top: "0px", width: "1px", height: "283px", background: "#000000", boxShadow: "1px 0px 0px 0px #232323" }} />
        <div style={{ position: "absolute", left: "800px", top: "0px", width: "376px", height: "267px", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ width: "376px", height: "30px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <svg style={{ width: "7px", height: "7px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="7" height="7" viewBox="0 0 7 7" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M7 3.5 C7 5.433 5.433 7 3.5 7 C1.567 7 0 5.433 0 3.5 C0 1.567 1.567 0 3.5 0 C5.433 0 7 1.567 7 3.5 Z" fill="#3fb37f"/></svg>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "35px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>Done</p>
            <div style={{ flexShrink: 0, borderRadius: "18px", background: "#1f1f1f", display: "flex", flexDirection: "row", padding: "3px 5px 3px 5px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "20px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#cfcfcf" }}>212</p>
            </div>
            <div style={{ flex: "1 1 0", minWidth: 0, height: "1px", flexShrink: 0 }} />
            <div style={{ width: "24px", height: "24px", flexShrink: 0, borderRadius: "6px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <Plus size={14} strokeWidth={2.14} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#8a8a8a", display: "block" }} />
            </div>
          </div>
          <div style={{ width: "376px", flexShrink: 0, boxShadow: "inset 0 1px 0 0 #222222", display: "flex", flexDirection: "column", padding: "13px 0px 12px 0px", gap: "9px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "376px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <Check size={14} strokeWidth={1.51} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#3fb37f", display: "block" }} />
              <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#a0a0a0" }}>Submit W30 weekly reports</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "56px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8a8a8a" }}>189 of 241</p>
            </div>
            <div style={{ width: "376px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, borderRadius: "6px", background: "#232323", boxShadow: "inset 0 0 0 1px #2e2e2e, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", display: "flex", flexDirection: "row", padding: "5px 10px 5px 10px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <Users size={14} strokeWidth={2.14} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#8a8a8a", display: "block" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "44px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 400, color: "#dadada" }}>All legs</p>
              </div>
              <div style={{ flexShrink: 0, borderRadius: "6px", background: "#232323", boxShadow: "inset 0 0 0 1px #2e2e2e, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", display: "flex", flexDirection: "row", padding: "5px 10px 5px 10px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <Note size={14} strokeWidth={2.14} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#8a8a8a", display: "block" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "83px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 400, color: "#dadada" }}>Weekly report</p>
              </div>
              <div style={{ flex: "1 1 0", minWidth: 0, height: "1px", flexShrink: 0 }} />
              <div style={{ width: "22px", height: "22px", flexShrink: 0, borderRadius: "11px", background: "rgba(123, 91, 255, 0.14)", boxShadow: "inset 0 0 0 1px rgba(123, 91, 255, 0.28)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "11px", lineHeight: "12px", fontFamily: "'Geist'", fontSize: "9px", fontWeight: 500, color: "#9c84ff" }}>LJ</p>
              </div>
            </div>
          </div>
          <div style={{ width: "376px", flexShrink: 0, boxShadow: "inset 0 1px 0 0 #222222", display: "flex", flexDirection: "column", padding: "13px 0px 12px 0px", gap: "9px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "376px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <Check size={14} strokeWidth={1.51} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#3fb37f", display: "block" }} />
              <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#a0a0a0" }}>Onboard 6 new Platinum members</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "36px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8a8a8a" }}>Jul 29</p>
            </div>
            <div style={{ width: "376px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, borderRadius: "6px", background: "#232323", boxShadow: "inset 0 0 0 1px #2e2e2e, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", display: "flex", flexDirection: "row", padding: "5px 10px 5px 10px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "121px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 400, color: "#dadada" }}>Enmanuel & Suseidy</p>
              </div>
              <div style={{ flexShrink: 0, borderRadius: "6px", background: "#232323", boxShadow: "inset 0 0 0 1px #2e2e2e, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", display: "flex", flexDirection: "row", padding: "5px 10px 5px 10px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <School size={14} strokeWidth={2.14} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#8a8a8a", display: "block" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "48px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 400, color: "#dadada" }}>Training</p>
              </div>
              <div style={{ flex: "1 1 0", minWidth: 0, height: "1px", flexShrink: 0 }} />
              <div style={{ width: "22px", height: "22px", flexShrink: 0, borderRadius: "11px", background: "rgba(123, 91, 255, 0.14)", boxShadow: "inset 0 0 0 1px rgba(123, 91, 255, 0.28)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "12px", lineHeight: "12px", fontFamily: "'Geist'", fontSize: "9px", fontWeight: 500, color: "#9c84ff" }}>ES</p>
              </div>
            </div>
          </div>
          <div style={{ width: "376px", flexShrink: 0, boxShadow: "inset 0 1px 0 0 #222222", display: "flex", flexDirection: "column", padding: "13px 0px 12px 0px", gap: "9px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "376px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <Check size={14} strokeWidth={1.51} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#3fb37f", display: "block" }} />
              <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#a0a0a0" }}>Daily message push · Santiago walk-ins</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "36px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8a8a8a" }}>Jul 30</p>
            </div>
            <div style={{ width: "376px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, borderRadius: "6px", background: "#232323", boxShadow: "inset 0 0 0 1px #2e2e2e, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", display: "flex", flexDirection: "row", padding: "5px 10px 5px 10px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "79px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 400, color: "#dadada" }}>Saul Santana</p>
              </div>
              <div style={{ flexShrink: 0, borderRadius: "6px", background: "#232323", boxShadow: "inset 0 0 0 1px #2e2e2e, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", display: "flex", flexDirection: "row", padding: "5px 10px 5px 10px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <Message size={14} strokeWidth={2.14} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#8a8a8a", display: "block" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "94px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 400, color: "#dadada" }}>Daily messages</p>
              </div>
              <div style={{ flex: "1 1 0", minWidth: 0, height: "1px", flexShrink: 0 }} />
              <div style={{ width: "22px", height: "22px", flexShrink: 0, borderRadius: "11px", background: "rgba(227, 179, 65, 0.14)", boxShadow: "inset 0 0 0 1px rgba(227, 179, 65, 0.28)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "12px", lineHeight: "12px", fontFamily: "'Geist'", fontSize: "9px", fontWeight: 500, color: "#eac671" }}>SS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
