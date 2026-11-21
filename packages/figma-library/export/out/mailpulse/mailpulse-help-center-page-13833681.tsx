// Help Center page (mailpulse, Templates) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist, Geist Mono. Icons: Ingot Icons.
import type { SVGProps } from "react";

// Ingot Icons used here, inlined so this file needs no icon package.
function icon(body: string) {
  return function Icon({ size = 24, strokeWidth = 1.5, ...p }: { size?: number; strokeWidth?: number } & SVGProps<SVGSVGElement>) {
    const html = strokeWidth == 1.5 ? body : body.replace(/stroke-width="([\d.]+)"/g, (_, w) => `stroke-width="${(Number(w) * Number(strokeWidth)) / 1.5}"`);
    return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden {...p} dangerouslySetInnerHTML={{ __html: html }} />;
  };
}
const CategorySolid = icon("<g fill=\"currentColor\"><path d=\"M10 3h-6a1 1 0 0 0 -1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1 -1v-6a1 1 0 0 0 -1 -1z\" /><path d=\"M20 3h-6a1 1 0 0 0 -1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1 -1v-6a1 1 0 0 0 -1 -1z\" /><path d=\"M10 13h-6a1 1 0 0 0 -1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1 -1v-6a1 1 0 0 0 -1 -1z\" /><path d=\"M17 13a4 4 0 1 1 -3.995 4.2l-.005 -.2l.005 -.2a4 4 0 0 1 3.995 -3.8z\" /></g>");
const AlertTriangleBulk = icon("<path d=\"M10.363 3.591L2.2569999999999997 17.125A1.914 1.914 0 0 0 3.893 19.996H20.107A1.914 1.914 0 0 0 21.743 17.125999999999998L13.636999999999999 3.589999999999998A1.914 1.914 0 0 0 10.363 3.589999999999998\" fill=\"currentColor\" fill-opacity=\"0.4\"/><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 9V13\"/><path d=\"M12 16H12.01\"/></g>");
const CalendarBulk = icon("<path d=\"M4 7A2 2 0 0 1 6 5H18A2 2 0 0 1 20 7V19A2 2 0 0 1 18 21H6A2 2 0 0 1 4 19V7\" fill=\"currentColor\" fill-opacity=\"0.4\"/><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 11H20\"/></g><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M16 3V7\"/><path d=\"M8 3V7\"/></g>");
const ChartBarBulk = icon("<path d=\"M9 5A1 1 0 0 1 10 4H14A1 1 0 0 1 15 5V19A1 1 0 0 1 14 20H10A1 1 0 0 1 9 19L9 5\" fill=\"currentColor\" fill-opacity=\"0.4\"/><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 13A1 1 0 0 1 4 12H8A1 1 0 0 1 9 13V19A1 1 0 0 1 8 20H4A1 1 0 0 1 3 19L3 13\"/><path d=\"M15 9A1 1 0 0 1 16 8H20A1 1 0 0 1 21 9V19A1 1 0 0 1 20 20H16A1 1 0 0 1 15 19L15 9\"/><path d=\"M4 20H18\"/></g>");
const CreditCardBulk = icon("<path d=\"M3 8A3 3 0 0 1 6 5H18A3 3 0 0 1 21 8V16A3 3 0 0 1 18 19H6A3 3 0 0 1 3 16L3 8\" fill=\"currentColor\" fill-opacity=\"0.4\"/><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 10L21 10\"/><path d=\"M7 15L7.01 15\"/><path d=\"M11 15L13 15\"/></g>");
const FileBulk = icon("<path d=\"M17 21H7A2 2 0 0 1 5 19V5A2 2 0 0 1 7 3H14L19 8V19A2 2 0 0 1 17 21\" fill=\"currentColor\" fill-opacity=\"0.4\"/><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M14 3V7A1 1 0 0 0 15 8H19\"/></g>");
const FilterBulk = icon("<path d=\"M4 4H20V6.172000000000001A2 2 0 0 1 19.414 7.586L15.000000000000002 12V19L9.000000000000002 21V12.5L4.520000000000001 7.572A2 2 0 0 1 4.000000000000002 6.227V4\" fill=\"currentColor\" fill-opacity=\"0.4\"/>");
const GitMergeBulk = icon("<path d=\"M5 18A2 2 0 1 0 9 18 2 2 0 1 0 5 18\" fill=\"currentColor\" fill-opacity=\"0.4\"/><path d=\"M5 6A2 2 0 1 0 9 6 2 2 0 1 0 5 6\" fill=\"currentColor\" fill-opacity=\"0.4\"/><path d=\"M15 12A2 2 0 1 0 19 12 2 2 0 1 0 15 12\" fill=\"currentColor\" fill-opacity=\"0.4\"/><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M5 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0\" /><path d=\"M5 6a2 2 0 1 0 4 0a2 2 0 1 0 -4 0\" /><path d=\"M15 12a2 2 0 1 0 4 0a2 2 0 1 0 -4 0\" /><path d=\"M7 8l0 8\" /><path d=\"M7 8a4 4 0 0 0 4 4h4\" /></g>");
const HeartBulk = icon("<path d=\"M19.5 12.572L12 20 4.5 12.572A5 5 0 1 1 12 6.005999999999999 5 5 0 1 1 19.5 12.578\" fill=\"currentColor\" fill-opacity=\"0.4\"/>");
const MailBulk = icon("<path d=\"M3 7A2 2 0 0 1 5 5H19A2 2 0 0 1 21 7V17A2 2 0 0 1 19 19H5A2 2 0 0 1 3 17V7\" fill=\"currentColor\" fill-opacity=\"0.4\"/><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 7L12 13 21 7\"/></g>");
const MessageCircleBulk = icon("<path d=\"M3 20L4.3 16.1C1.976 12.663000000000002 2.8739999999999997 8.228000000000002 6.4 5.726000000000001 9.926 3.225000000000001 14.99 3.430000000000001 18.245 6.206000000000001 21.5 8.983 21.94 13.472000000000001 19.274 16.707 16.608 19.942 11.659 20.922 7.700000000000001 19L3.000000000000001 20\" fill=\"currentColor\" fill-opacity=\"0.4\"/>");
const RocketBulk = icon("<path d=\"M4 13A8 8 0 0 1 11 20 6 6 0 0 0 14 15 9 9 0 0 0 20 7 3 3 0 0 0 17 4 9 9 0 0 0 9 10 6 6 0 0 0 4 13\" fill=\"currentColor\" fill-opacity=\"0.4\"/><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M7 14A6 6 0 0 0 4 20 6 6 0 0 0 10 17\"/><path d=\"M14 9A1 1 0 1 0 16 9 1 1 0 1 0 14 9\"/></g>");
const SendBulk = icon("<path d=\"M21 3L14.5 21A0.55 0.55 0 0 1 13.5 21L10 14 3 10.5A0.55 0.55 0 0 1 3 9.5L21 3\" fill=\"currentColor\" fill-opacity=\"0.4\"/><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M10 14L21 3\"/></g>");
const SettingsBulk = icon("<path d=\"M10.325 4.317C10.751 2.561 13.248999999999999 2.561 13.674999999999999 4.317A1.724 1.724 0 0 0 16.247999999999998 5.383C17.790999999999997 4.443 19.557999999999996 6.209 18.618 7.753A1.724 1.724 0 0 0 19.683 10.325C21.439 10.751 21.439 13.248999999999999 19.683 13.674999999999999A1.724 1.724 0 0 0 18.617 16.247999999999998C19.557000000000002 17.790999999999997 17.791 19.557999999999996 16.247 18.618A1.724 1.724 0 0 0 13.675 19.683C13.249 21.439 10.751000000000001 21.439 10.325000000000001 19.683A1.724 1.724 0 0 0 7.752000000000001 18.617C6.2090000000000005 19.557000000000002 4.442 17.791 5.382000000000001 16.247A1.724 1.724 0 0 0 4.317 13.675C2.561 13.249 2.561 10.751000000000001 4.317 10.325000000000001A1.724 1.724 0 0 0 5.383 7.752000000000001C4.443 6.2090000000000005 6.209 4.442 7.753 5.382000000000001 8.753 5.99 10.049 5.452000000000001 10.325 4.317\" fill=\"currentColor\" fill-opacity=\"0.4\"/><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M9 12A3 3 0 1 0 15 12 3 3 0 0 0 9 12\"/></g>");
const StarBulk = icon("<path d=\"M12 17.75L5.828 20.995 7.007000000000001 14.122 2.0070000000000006 9.254999999999999 8.907 8.254999999999999 11.993 2.001999999999999 15.079 8.254999999999999 21.979 9.254999999999999 16.979 14.122 18.157999999999998 20.995 11.999999999999996 17.75\" fill=\"currentColor\" fill-opacity=\"0.4\"/>");
const UserBulk = icon("<path d=\"M8 7A4 4 0 1 0 16 7 4 4 0 0 0 8 7\" fill=\"currentColor\" fill-opacity=\"0.4\"/><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M6 21V19A4 4 0 0 1 10 15H14A4 4 0 0 1 18 19V21\"/></g>");
const UsersBulk = icon("<path d=\"M5 7A4 4 0 1 0 13 7 4 4 0 1 0 5 7\" fill=\"currentColor\" fill-opacity=\"0.4\"/><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 21V19A4 4 0 0 1 7 15H11A4 4 0 0 1 15 19V21\"/><path d=\"M16 3.13A4 4 0 0 1 16 10.879999999999999\"/><path d=\"M21 21V19A4 4 0 0 0 18 15.15\"/></g>");
const WalletBulk = icon("<path d=\"M20 12V16H16A2 2 0 0 1 16 12H20\" fill=\"currentColor\" fill-opacity=\"0.4\"/><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M17 8v-3a1 1 0 0 0 -1 -1h-10a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1 -1 1h-12a2 2 0 0 1 -2 -2v-12\" /><path d=\"M20 12v4h-4a2 2 0 0 1 0 -4h4\" /></g>");
const Activity = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 12h4l3 8l4 -16l3 8h4\" /></g>");
const Bell = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M10 5a2 2 0 1 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6\" /><path d=\"M9 17v1a3 3 0 0 0 6 0v-1\" /></g>");
const ChevronRight = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M9 6l6 6l-6 6\" /></g>");
const Headset = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 14v-3a8 8 0 1 1 16 0v3\" /><path d=\"M18 19c0 1.657 -2.686 3 -6 3\" /><path d=\"M4 14a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-1a2 2 0 0 1 -2 -2v-3\" /><path d=\"M15 14a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-1a2 2 0 0 1 -2 -2v-3\" /></g>");
const Search = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 10a7 7 0 1 0 14 0a7 7 0 1 0 -14 0\" /><path d=\"M21 21l-6 -6\" /></g>");

export function HelpCenterPage() {
  return (
    <div style={{ width: "1316px", height: "933.08px", background: "#f5f5f5", overflow: "hidden", position: "relative" }}>
      <div style={{ position: "absolute", left: "0px", top: "0px", width: "224.82px", height: "933.08px", background: "#f5f5f5", overflow: "hidden" }}>
        <div style={{ position: "absolute", left: "18.28px", top: "19.52px", width: "101.18px", height: "21.27px", display: "flex", flexDirection: "row", gap: "21.27px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4.91px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "21.27px", height: "21.27px", flexShrink: 0, borderRadius: "4.91px", background: "#000000", overflow: "hidden", position: "relative" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "23.76px", height: "23.76px", background: "linear-gradient(177.6deg, rgba(255, 255, 255, 0) 2%, rgba(255, 255, 255, 0.12) 98.2%)", overflow: "hidden" }} />
              <svg style={{ position: "absolute", left: "3.68px", top: "6.95px", width: "14.63px", height: "7.41px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="14.63" height="7.41" viewBox="0 0 14.63 7.41" fill="none" overflow="visible"><defs><linearGradient id="g3_xvlt" gradientUnits="userSpaceOnUse" x1="7.78" y1="2.83" x2="7.78" y2="10.24"><stop offset="0" stopColor="#ffffff" stopOpacity="0.8"/><stop offset="1" stopColor="#ffffff" stopOpacity="0.5"/></linearGradient></defs><path transform="matrix(1 0 0 1 0 0)" d="M4.93064 5.38145 L6.3234 6.77421 C7.17095 7.62177 8.54511 7.62177 9.39267 6.77421 C9.67219 6.49469 9.85953 6.15789 9.95468 5.80159 L10.9273 6.77421 C11.7749 7.62177 13.149 7.62177 13.9966 6.77421 C14.8441 5.92665 14.8441 4.55249 13.9966 3.70494 L10.9273 0.635667 C10.0797 -0.211889 8.70559 -0.211889 7.85803 0.635667 C7.57851 0.915191 7.39117 1.25199 7.29602 1.60829 L6.32339 0.635667 C5.47584 -0.211889 4.10168 -0.211889 3.25412 0.635668 L0.728368 3.16142 C-0.242789 4.13258 -0.242789 5.70714 0.728368 6.6783 C1.69953 7.64946 3.27409 7.64946 4.24524 6.6783 C4.61288 6.31066 4.84134 5.85656 4.93064 5.38145 Z M4.02144 1.40299 C3.59766 0.979208 4.44522 0.979208 4.02144 1.40299 C3.59785 1.82658 3.59821 0.979164 4.02144 1.40299 C4.44522 1.82676 3.59766 1.82676 4.02144 1.40299 C4.44499 0.979433 4.44454 1.82682 4.02144 1.40299 Z M1.49569 3.92874 C0.948307 4.47612 0.948306 3.43136 1.49569 3.97874 C0.948307 4.52612 2.04307 4.52612 1.49569 3.97874 C2.04307 3.43136 2.04307 4.47612 1.49569 3.92874 Z M8.62445 2.93672 C8.20157 2.51287 8.20097 3.3602 8.62445 2.93672 C9.04823 2.51294 8.20067 2.51294 8.62445 2.93672 C9.04823 3.3605 9.04823 2.51294 8.62445 2.93672 C8.20067 3.3605 9.04823 3.3605 8.62445 2.93672 Z" fill="url(#g3_xvlt)" fillRule="evenodd"/></svg>
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "75px", lineHeight: "21px", fontFamily: "'Geist'", fontSize: "16.36px", fontWeight: 500, color: "#000000" }}>MailPulse</p>
            </div>
          </div>
        </div>
        <div style={{ position: "absolute", left: "18.28px", top: "65.8px", width: "193.74px", height: "714.66px", display: "flex", flexDirection: "column", gap: "5.48px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "193.74px", height: "32.9px", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ alignSelf: "stretch", height: "32.9px", flexShrink: 0, borderRadius: "9.14px", display: "flex", flexDirection: "column", padding: "9.14px 9.14px 9.14px 9.14px", justifyContent: "center", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "74px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#a6a6a6" }}>MAIN MENU</p>
                </div>
              </div>
            </div>
            <div style={{ alignSelf: "stretch", height: "36.56px", flexShrink: 0, borderRadius: "9.14px", display: "flex", flexDirection: "column", padding: "9.14px 9.14px 9.14px 9.14px", gap: "9.14px", justifyContent: "center", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "3.66px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <CategorySolid size={12.8} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#000000", display: "block" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "57px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#646871" }}>Overview</p>
              </div>
            </div>
          </div>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "18.28px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "3.66px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "193.74px", height: "32.9px", flexShrink: 0, borderRadius: "9.14px", display: "flex", flexDirection: "row", padding: "9.14px 9.14px 9.14px 9.14px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "148.96px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <UserBulk size={12.8} strokeWidth={2.57} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#130f26", display: "block" }} />
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "56px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#646871" }}>Audience</p>
                </div>
              </div>
              <div style={{ alignSelf: "stretch", height: "32.9px", flexShrink: 0, borderRadius: "9.14px", display: "flex", flexDirection: "column", padding: "9.14px 9.14px 9.14px 9.14px", justifyContent: "center", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "3.66px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <SendBulk size={12.8} strokeWidth={2.57} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#130f26", display: "block" }} />
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "68px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#646871" }}>Campaigns</p>
                </div>
              </div>
              <div style={{ alignSelf: "stretch", height: "32.9px", flexShrink: 0, borderRadius: "9.14px", display: "flex", flexDirection: "column", padding: "9.14px 9.14px 9.14px 9.14px", justifyContent: "center", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ width: "63.97px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "3.66px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <FileBulk size={12.8} strokeWidth={2.57} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#130f26", display: "block" }} />
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "49px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#646871" }}>Content</p>
                </div>
              </div>
              <div style={{ alignSelf: "stretch", height: "32.9px", flexShrink: 0, borderRadius: "9.14px", display: "flex", flexDirection: "column", padding: "9.14px 9.14px 9.14px 9.14px", justifyContent: "center", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ width: "63.97px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "3.66px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <ChartBarBulk size={12.8} strokeWidth={2.57} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#130f26", display: "block" }} />
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "76px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#646871" }}>Engagement</p>
                </div>
              </div>
              <div style={{ width: "193.74px", height: "32.9px", flexShrink: 0, borderRadius: "9.14px", display: "flex", flexDirection: "row", padding: "9.14px 9.14px 9.14px 9.14px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "148.96px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <WalletBulk size={12.8} strokeWidth={3.43} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#130f26", display: "block" }} />
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "52px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#646871" }}>Revenue</p>
                </div>
              </div>
            </div>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "3.66px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <svg style={{ width: "193.74px", height: "1px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible", marginBottom: "-1px" }} xmlns="http://www.w3.org/2000/svg" width="193.74" height="1" viewBox="0 0 193.74 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 -0.456944 L0 0 L193.744 0 L193.744 -0.456944 L193.744 -0.913889 L0 -0.913889 L0 -0.456944 Z" fill="#e8e8e8"/></svg>
              <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ alignSelf: "stretch", height: "32.9px", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ alignSelf: "stretch", height: "32.9px", flexShrink: 0, borderRadius: "9.14px", display: "flex", flexDirection: "column", padding: "9.14px 9.14px 9.14px 9.14px", justifyContent: "center", alignItems: "flex-start", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "55px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#a6a6a6" }}>MANAGE</p>
                  </div>
                </div>
                <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "193.74px", height: "32.9px", flexShrink: 0, borderRadius: "9.14px", display: "flex", flexDirection: "row", padding: "9.14px 9.14px 9.14px 9.14px", gap: "-6.4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <div style={{ width: "148.96px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                      <UsersBulk size={12.8} strokeWidth={2.57} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#130f26", display: "block" }} />
                      <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "72px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#646871" }}>Subscribers</p>
                    </div>
                    <div style={{ height: "20.11px", flexShrink: 0, borderRadius: "4.57px", background: "#ffffff", boxShadow: "0px 0px 0.91px 0px rgba(0, 0, 0, 0.25)", display: "flex", flexDirection: "row", padding: "5.48px 3.66px 5.48px 3.66px", gap: "9.14px", justifyContent: "center", alignItems: "center", boxSizing: "border-box", marginLeft: "-6.4px" }}>
                      <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "35px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.62px", fontWeight: 400, color: "#585858" }}>18.4k</p>
                    </div>
                  </div>
                  <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                    <div style={{ alignSelf: "stretch", height: "32.9px", flexShrink: 0, borderRadius: "9.14px", display: "flex", flexDirection: "column", padding: "9.14px 9.14px 9.14px 9.14px", justifyContent: "center", alignItems: "flex-start", boxSizing: "border-box" }}>
                      <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "3.66px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                        <StarBulk size={12.8} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#130f26", display: "block" }} />
                        <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "77px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#646871" }}>Automations</p>
                      </div>
                    </div>
                  </div>
                  <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                    <div style={{ alignSelf: "stretch", height: "32.9px", flexShrink: 0, borderRadius: "9.14px", display: "flex", flexDirection: "column", padding: "9.14px 9.14px 9.14px 9.14px", justifyContent: "center", alignItems: "flex-start", boxSizing: "border-box" }}>
                      <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "3.66px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                        <FilterBulk size={12.8} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#130f26", display: "block" }} />
                        <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "61px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#646871" }}>Segments</p>
                      </div>
                    </div>
                  </div>
                  <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                    <div style={{ alignSelf: "stretch", height: "32.9px", flexShrink: 0, borderRadius: "9.14px", display: "flex", flexDirection: "column", padding: "9.14px 9.14px 9.14px 9.14px", justifyContent: "center", alignItems: "flex-start", boxSizing: "border-box" }}>
                      <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "3.66px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                        <FilterBulk size={12.8} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#130f26", display: "block" }} />
                        <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "73px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#646871" }}>Integrations</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "3.66px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <svg style={{ width: "193.74px", height: "1px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible", marginBottom: "-1px" }} xmlns="http://www.w3.org/2000/svg" width="193.74" height="1" viewBox="0 0 193.74 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 -0.456944 L0 0 L193.744 0 L193.744 -0.456944 L193.744 -0.913889 L0 -0.913889 L0 -0.456944 Z" fill="#e8e8e8"/></svg>
              <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ alignSelf: "stretch", height: "32.9px", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ alignSelf: "stretch", height: "32.9px", flexShrink: 0, borderRadius: "9.14px", display: "flex", flexDirection: "column", padding: "9.14px 9.14px 9.14px 9.14px", justifyContent: "center", alignItems: "flex-start", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "77px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#a6a6a6" }}>RESOURCES</p>
                  </div>
                </div>
                <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "193.74px", height: "32.9px", flexShrink: 0, borderRadius: "9.14px", display: "flex", flexDirection: "row", padding: "9.14px 9.14px 9.14px 9.14px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <div style={{ width: "148.96px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                      <ChartBarBulk size={12.8} strokeWidth={2.57} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#130f26", display: "block" }} />
                      <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "56px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#646871" }}>Analytics</p>
                    </div>
                  </div>
                  <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                    <div style={{ alignSelf: "stretch", height: "32.9px", flexShrink: 0, borderRadius: "9.14px", display: "flex", flexDirection: "column", padding: "9.14px 9.14px 9.14px 9.14px", justifyContent: "center", alignItems: "flex-start", boxSizing: "border-box" }}>
                      <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "3.66px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                        <FileBulk size={12.8} strokeWidth={2.57} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#130f26", display: "block" }} />
                        <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "46px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#646871" }}>Reports</p>
                      </div>
                    </div>
                  </div>
                  <div style={{ alignSelf: "stretch", height: "32.9px", flexShrink: 0, borderRadius: "9.14px", display: "flex", flexDirection: "column", padding: "9.14px 9.14px 9.14px 9.14px", justifyContent: "center", alignItems: "flex-start", boxSizing: "border-box" }}>
                    <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "3.66px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                      <HeartBulk size={12.8} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#130f26", display: "block" }} />
                      <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "33px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#646871" }}>Learn</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "3.66px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <svg style={{ width: "193.74px", height: "1px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible", marginBottom: "-1px" }} xmlns="http://www.w3.org/2000/svg" width="193.74" height="1" viewBox="0 0 193.74 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 -0.456944 L0 0 L193.744 0 L193.744 -0.456944 L193.744 -0.913889 L0 -0.913889 L0 -0.456944 Z" fill="#e8e8e8"/></svg>
              <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ alignSelf: "stretch", height: "32.9px", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ alignSelf: "stretch", height: "32.9px", flexShrink: 0, borderRadius: "9.14px", display: "flex", flexDirection: "column", padding: "9.14px 9.14px 9.14px 9.14px", justifyContent: "center", alignItems: "flex-start", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "61px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#a6a6a6" }}>SETTINGS</p>
                  </div>
                </div>
                <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                    <div style={{ alignSelf: "stretch", height: "32.9px", flexShrink: 0, borderRadius: "9.14px", background: "#ececed", boxShadow: "inset 0 0 0 0.91px #dfe1e6", display: "flex", flexDirection: "column", padding: "9.14px 9.14px 9.14px 9.14px", justifyContent: "center", alignItems: "flex-start", boxSizing: "border-box" }}>
                      <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "3.66px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                        <AlertTriangleBulk size={12.8} strokeWidth={2.57} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#130f26", display: "block" }} />
                        <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "70px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#000000" }}>Help Center</p>
                      </div>
                    </div>
                  </div>
                  <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                    <div style={{ alignSelf: "stretch", height: "32.9px", flexShrink: 0, borderRadius: "9.14px", display: "flex", flexDirection: "column", padding: "9.14px 9.14px 9.14px 9.14px", justifyContent: "center", alignItems: "flex-start", boxSizing: "border-box" }}>
                      <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "3.66px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                        <SettingsBulk size={12.8} strokeWidth={2.57} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#130f26", display: "block" }} />
                        <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "96px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#646871" }}>System Settings</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ position: "absolute", left: "224.82px", top: "0px", width: "1091.84px", height: "68.18px", background: "#f5f5f5", display: "flex", flexDirection: "row", padding: "18.28px 18.28px 18.28px 18.28px", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "3.66px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "3.66px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <CategorySolid size={12.8} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#b3b3b3", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "68px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#b3b3b3" }}>Workspace</p>
          </div>
          <ChevronRight size={12.8} strokeWidth={2.57} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#686765", display: "block" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "85px", fontFamily: "'Geist'", fontSize: "14.62px", fontWeight: 500, color: "#666d80", lineHeight: "1.5", letterSpacing: "0.02em" }}>Help Center</p>
        </div>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "138.91px", flexShrink: 0, borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8", display: "flex", flexDirection: "row", padding: "7.31px 5.48px 7.31px 9.14px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "63.97px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "3.66px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <Search size={12.8} strokeWidth={2.57} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#686765", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "43px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#686765" }}>Search</p>
            </div>
          </div>
          <div style={{ width: "31.07px", height: "31.07px", flexShrink: 0, borderRadius: "6.21px", background: "#ffffff", boxShadow: "inset 0 0 0 0.78px #e8e8e8", overflow: "hidden", position: "relative" }}>
            <Bell size={18.6} strokeWidth={1.51} style={{ position: "absolute", left: "6.21px", top: "6.6px", width: "18.64px", height: "18.64px", color: "#686765", display: "block", flexShrink: 0 }} />
          </div>
          <div style={{ width: "31.07px", height: "31.07px", flexShrink: 0, borderRadius: "6.21px", background: "#ffffff", boxShadow: "inset 0 0 0 0.78px #e8e8e8", overflow: "hidden", position: "relative" }}>
            <div style={{ position: "absolute", left: "-3.56px", top: "3.11px", width: "38.19px", height: "30.3px", background: "url('https://ingotui.com/library-img/f3bd7733d508155bcb01d85374d81844b290a080.png') center / cover no-repeat" }} />
          </div>
        </div>
      </div>
      <div style={{ position: "absolute", left: "224.82px", top: "67.63px", width: "1072.91px", height: "847.17px", borderRadius: "14.62px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e3e3e3", overflow: "hidden" }}>
        <div style={{ position: "absolute", left: "16.45px", top: "16.45px", width: "1040.92px", height: "52.31px", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "7.31px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "109px", lineHeight: "26px", fontFamily: "'Geist'", fontSize: "20.11px", fontWeight: 500, color: "#202020", letterSpacing: "-0.02em" }}>Help Center</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "340px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.62px", fontWeight: 400, color: "#747474", letterSpacing: "-0.02em" }}>Answers, guides and a team that replies within hours.</p>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "9.14px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, borderRadius: "91.39px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8", display: "flex", flexDirection: "row", padding: "6.12px 9.14px 6.12px 9.14px", gap: "5.48px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <Activity size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#141b34", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "84px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#6c6c6c" }}>System status</p>
            </div>
            <div style={{ height: "29.24px", flexShrink: 0, borderRadius: "91.39px", background: "linear-gradient(180deg, #686868 0%, #222222 100%)", boxShadow: "0px 8.22px 7.31px 0px rgba(0, 0, 0, 0.14)", display: "flex", flexDirection: "column", padding: "7.31px 10.97px 7.31px 10.97px", gap: "9.14px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <Headset size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#ffffff", display: "block" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "98px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#ffffff" }}>Contact support</p>
              </div>
            </div>
          </div>
        </div>
        <div style={{ position: "absolute", left: "0px", top: "85.91px", width: "1072.91px", height: "157.76px", background: "#fafafa", boxShadow: "inset 0 0.91px 0 0 #eeeeee, inset 0 -0.91px 0 0 #eeeeee", display: "flex", flexDirection: "column", padding: "22.84px 21.93px 22.84px 21.93px", gap: "10.97px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "214px", lineHeight: "26px", fontFamily: "'Geist'", fontSize: "20.11px", fontWeight: 500, color: "#202020", letterSpacing: "-0.02em" }}>How can we help, Alex?</p>
          <div style={{ width: "560px", height: "40px", flexShrink: 0, borderRadius: "9.14px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8", display: "flex", flexDirection: "row", padding: "0.91px 13.7px 0.91px 13.7px", gap: "9.14px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <Search size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
            <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.62px", fontWeight: 400, color: "#989898", letterSpacing: "-0.01em" }}>Search for answers, e.g. custom domain</p>
            <div style={{ flexShrink: 0, borderRadius: "3.66px", background: "#f5f5f5", boxShadow: "inset 0 0 0 0.91px #e8e8e8", display: "flex", flexDirection: "row", padding: "1.82px 5.48px 1.82px 5.48px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "7px", lineHeight: "13px", fontFamily: "'Geist Mono'", fontSize: "10.05px", fontWeight: 400, color: "#6c6c6c" }}>/</p>
            </div>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "45px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#989898" }}>Popular:</p>
            <div style={{ flexShrink: 0, borderRadius: "999px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8", display: "flex", flexDirection: "row", padding: "4.57px 10.05px 4.57px 10.05px", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "102px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#6c6c6c" }}>Import subscribers</p>
            </div>
            <div style={{ flexShrink: 0, borderRadius: "999px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8", display: "flex", flexDirection: "row", padding: "4.57px 10.05px 4.57px 10.05px", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "63px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#6c6c6c" }}>DKIM setup</p>
            </div>
            <div style={{ flexShrink: 0, borderRadius: "999px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8", display: "flex", flexDirection: "row", padding: "4.57px 10.05px 4.57px 10.05px", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "80px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#6c6c6c" }}>Stripe payouts</p>
            </div>
            <div style={{ flexShrink: 0, borderRadius: "999px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8", display: "flex", flexDirection: "row", padding: "4.57px 10.05px 4.57px 10.05px", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "43px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#6c6c6c" }}>Paywall</p>
            </div>
            <div style={{ flexShrink: 0, borderRadius: "999px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8", display: "flex", flexDirection: "row", padding: "4.57px 10.05px 4.57px 10.05px", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "86px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#6c6c6c" }}>Custom domain</p>
            </div>
          </div>
        </div>
        <div style={{ position: "absolute", left: "16.45px", top: "260.12px", width: "1040.01px", height: "237.95px", display: "flex", flexDirection: "row", flexWrap: "wrap", rowGap: "12.79px", columnGap: "12.79px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ width: "338.14px", flexShrink: 0, borderRadius: "12.79px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #ededed", display: "flex", flexDirection: "row", padding: "15.53px 15.53px 15.53px 15.53px", gap: "12.79px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "8px", background: "rgba(124, 83, 249, 0.12)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <RocketBulk size={18} strokeWidth={1.51} style={{ width: "18px", height: "18px", flexShrink: 0, color: "#7c53f9", display: "block" }} />
            </div>
            <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "3.66px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "102px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.62px", fontWeight: 500, color: "#000000", letterSpacing: "-0.01em" }}>Getting started</p>
              <p style={{ alignSelf: "stretch", height: "38.37px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#747474", lineHeight: "1.5", letterSpacing: "-0.01em" }}>Set up your publication, import readers and send your first issue.</p>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", padding: "1.83px 0px 0px 0px", gap: "3.66px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "57px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 500, color: "#6c6c6c" }}>12 articles</p>
                <ChevronRight size={12.8} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
              </div>
            </div>
          </div>
          <div style={{ width: "338.14px", flexShrink: 0, borderRadius: "12.79px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #ededed", display: "flex", flexDirection: "row", padding: "15.53px 15.53px 15.53px 15.53px", gap: "12.79px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "8px", background: "rgba(77, 152, 254, 0.12)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <SendBulk size={18} strokeWidth={1.51} style={{ width: "18px", height: "18px", flexShrink: 0, color: "#4d98fe", display: "block" }} />
            </div>
            <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "3.66px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "158px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.62px", fontWeight: 500, color: "#000000", letterSpacing: "-0.01em" }}>Sending & deliverability</p>
              <p style={{ alignSelf: "stretch", height: "38.37px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#747474", lineHeight: "1.5", letterSpacing: "-0.01em" }}>Domains, DKIM, spam checks and inbox placement.</p>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", padding: "1.83px 0px 0px 0px", gap: "3.66px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "57px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 500, color: "#6c6c6c" }}>18 articles</p>
                <ChevronRight size={12.8} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
              </div>
            </div>
          </div>
          <div style={{ width: "338.14px", flexShrink: 0, borderRadius: "12.79px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #ededed", display: "flex", flexDirection: "row", padding: "15.53px 15.53px 15.53px 15.53px", gap: "12.79px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "8px", background: "rgba(21, 179, 146, 0.12)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <UsersBulk size={18} strokeWidth={1.51} style={{ width: "18px", height: "18px", flexShrink: 0, color: "#15b392", display: "block" }} />
            </div>
            <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "3.66px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "148px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.62px", fontWeight: 500, color: "#000000", letterSpacing: "-0.01em" }}>Subscribers & imports</p>
              <p style={{ alignSelf: "stretch", height: "38.37px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#747474", lineHeight: "1.5", letterSpacing: "-0.01em" }}>Imports, segments, tags and unsubscribes.</p>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", padding: "1.83px 0px 0px 0px", gap: "3.66px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "57px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 500, color: "#6c6c6c" }}>14 articles</p>
                <ChevronRight size={12.8} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
              </div>
            </div>
          </div>
          <div style={{ width: "338.14px", flexShrink: 0, borderRadius: "12.79px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #ededed", display: "flex", flexDirection: "row", padding: "15.53px 15.53px 15.53px 15.53px", gap: "12.79px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "8px", background: "rgba(255, 155, 34, 0.12)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <WalletBulk size={18} strokeWidth={2} style={{ width: "18px", height: "18px", flexShrink: 0, color: "#ff9b22", display: "block" }} />
            </div>
            <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "3.66px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "137px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.62px", fontWeight: 500, color: "#000000", letterSpacing: "-0.01em" }}>Payments & payouts</p>
              <p style={{ alignSelf: "stretch", height: "38.37px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#747474", lineHeight: "1.5", letterSpacing: "-0.01em" }}>Paid tiers, Stripe, taxes and payouts.</p>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", padding: "1.83px 0px 0px 0px", gap: "3.66px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "54px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 500, color: "#6c6c6c" }}>11 articles</p>
                <ChevronRight size={12.8} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
              </div>
            </div>
          </div>
          <div style={{ width: "338.14px", flexShrink: 0, borderRadius: "12.79px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #ededed", display: "flex", flexDirection: "row", padding: "15.53px 15.53px 15.53px 15.53px", gap: "12.79px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "8px", background: "rgba(124, 83, 249, 0.12)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <GitMergeBulk size={18} strokeWidth={2} style={{ width: "18px", height: "18px", flexShrink: 0, color: "#7c53f9", display: "block" }} />
            </div>
            <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "3.66px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "86px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.62px", fontWeight: 500, color: "#000000", letterSpacing: "-0.01em" }}>Automations</p>
              <p style={{ alignSelf: "stretch", height: "38.37px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#747474", lineHeight: "1.5", letterSpacing: "-0.01em" }}>Welcome series, triggers and conditions.</p>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", padding: "1.83px 0px 0px 0px", gap: "3.66px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "53px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 500, color: "#6c6c6c" }}>9 articles</p>
                <ChevronRight size={12.8} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
              </div>
            </div>
          </div>
          <div style={{ width: "338.14px", flexShrink: 0, borderRadius: "12.79px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #ededed", display: "flex", flexDirection: "row", padding: "15.53px 15.53px 15.53px 15.53px", gap: "12.79px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "8px", background: "rgba(77, 152, 254, 0.12)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <CreditCardBulk size={18} strokeWidth={1.51} style={{ width: "18px", height: "18px", flexShrink: 0, color: "#4d98fe", display: "block" }} />
            </div>
            <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "3.66px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "113px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.62px", fontWeight: 500, color: "#000000", letterSpacing: "-0.01em" }}>Account & billing</p>
              <p style={{ alignSelf: "stretch", height: "38.37px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#747474", lineHeight: "1.5", letterSpacing: "-0.01em" }}>Plans, invoices, team seats and security.</p>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", padding: "1.83px 0px 0px 0px", gap: "3.66px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "58px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 500, color: "#6c6c6c" }}>10 articles</p>
                <ChevronRight size={12.8} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
              </div>
            </div>
          </div>
        </div>
        <div style={{ position: "absolute", left: "0px", top: "514.52px", width: "1072.91px", height: "0.91px", background: "#eeeeee" }} />
        <div style={{ position: "absolute", left: "721.97px", top: "515.43px", width: "0.91px", height: "331.74px", background: "#eeeeee" }} />
        <div style={{ position: "absolute", left: "16.45px", top: "531.88px", width: "689.07px", height: "274.47px", display: "flex", flexDirection: "column", gap: "5.48px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "108px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.62px", fontWeight: 500, color: "#000000" }}>Popular articles</p>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "3.66px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "88px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 500, color: "#6c6c6c" }}>View all articles</p>
              <ChevronRight size={12.8} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
            </div>
          </div>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ alignSelf: "stretch", flexShrink: 0, boxShadow: "inset 0 -0.91px 0 0 #ededed", display: "flex", flexDirection: "row", padding: "8.22px 0px 9.13px 0px", gap: "10.97px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "22.85px", height: "22.85px", flexShrink: 0, borderRadius: "5.48px", background: "#ffffff", boxShadow: "0px 0.91px 1.83px 0px rgba(0, 0, 0, 0.08)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <FileBulk size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#141b34", display: "block" }} />
              </div>
              <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.83px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "225px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#222222" }}>Set up DKIM and SPF for your domain</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "178px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#989898" }}>Sending & deliverability · 4 min read</p>
              </div>
              <ChevronRight size={12.8} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#989898", display: "block" }} />
            </div>
            <div style={{ alignSelf: "stretch", flexShrink: 0, boxShadow: "inset 0 -0.91px 0 0 #ededed", display: "flex", flexDirection: "row", padding: "8.22px 0px 9.13px 0px", gap: "10.97px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "22.85px", height: "22.85px", flexShrink: 0, borderRadius: "5.48px", background: "#ffffff", boxShadow: "0px 0.91px 1.83px 0px rgba(0, 0, 0, 0.08)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <FileBulk size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#141b34", display: "block" }} />
              </div>
              <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.83px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "204px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#222222" }}>Import subscribers from Substack</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "171px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#989898" }}>Subscribers & imports · 3 min read</p>
              </div>
              <ChevronRight size={12.8} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#989898", display: "block" }} />
            </div>
            <div style={{ alignSelf: "stretch", flexShrink: 0, boxShadow: "inset 0 -0.91px 0 0 #ededed", display: "flex", flexDirection: "row", padding: "8.22px 0px 9.13px 0px", gap: "10.97px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "22.85px", height: "22.85px", flexShrink: 0, borderRadius: "5.48px", background: "#ffffff", boxShadow: "0px 0.91px 1.83px 0px rgba(0, 0, 0, 0.08)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <FileBulk size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#141b34", display: "block" }} />
              </div>
              <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.83px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "178px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#222222" }}>Connect Stripe and set prices</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "164px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#989898" }}>Payments & payouts · 5 min read</p>
              </div>
              <ChevronRight size={12.8} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#989898", display: "block" }} />
            </div>
            <div style={{ alignSelf: "stretch", flexShrink: 0, boxShadow: "inset 0 -0.91px 0 0 #ededed", display: "flex", flexDirection: "row", padding: "8.22px 0px 9.13px 0px", gap: "10.97px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "22.85px", height: "22.85px", flexShrink: 0, borderRadius: "5.48px", background: "#ffffff", boxShadow: "0px 0.91px 1.83px 0px rgba(0, 0, 0, 0.08)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <FileBulk size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#141b34", display: "block" }} />
              </div>
              <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.83px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "264px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#222222" }}>Why are my open rates lower on Apple Mail?</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "179px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#989898" }}>Sending & deliverability · 6 min read</p>
              </div>
              <ChevronRight size={12.8} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#989898", display: "block" }} />
            </div>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "8.22px 0px 8.22px 0px", gap: "10.97px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "22.85px", height: "22.85px", flexShrink: 0, borderRadius: "5.48px", background: "#ffffff", boxShadow: "0px 0.91px 1.83px 0px rgba(0, 0, 0, 0.08)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <FileBulk size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#141b34", display: "block" }} />
              </div>
              <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.83px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "152px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#222222" }}>Add a paywall to an issue</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "163px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#989898" }}>Payments & payouts · 2 min read</p>
              </div>
              <ChevronRight size={12.8} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#989898", display: "block" }} />
            </div>
          </div>
        </div>
        <div style={{ position: "absolute", left: "738.42px", top: "531.88px", width: "318.03px", height: "296.71px", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "5.48px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "67px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.62px", fontWeight: 500, color: "#000000" }}>Talk to us</p>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "5.48px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "9.14px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "22.85px", height: "22.85px", flexShrink: 0, borderRadius: "5.48px", background: "#ffffff", boxShadow: "0px 0.91px 1.83px 0px rgba(0, 0, 0, 0.08)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <MessageCircleBulk size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#141b34", display: "block" }} />
                </div>
                <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "0.91px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "54px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#222222" }}>Live chat</p>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "79px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#989898" }}>Typical reply 2h</p>
                </div>
                <div style={{ flexShrink: 0, borderRadius: "91.39px", background: "#e7fff9", display: "flex", flexDirection: "row", padding: "3.66px 9.14px 3.66px 9.14px", gap: "3.66px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <svg style={{ width: "5.48px", height: "5.48px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="5.48" height="5.48" viewBox="0 0 5.48 5.48" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M5.48333 2.74167 C5.48333 4.25585 4.25585 5.48333 2.74167 5.48333 C1.22749 5.48333 0 4.25585 0 2.74167 C0 1.22749 1.22749 0 2.74167 0 C4.25585 0 5.48333 1.22749 5.48333 2.74167 Z" fill="#00a77d"/></svg>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "right", whiteSpace: "pre", minWidth: "34px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#00a77d", lineHeight: "1.4600000381469727" }}>Online</p>
                </div>
              </div>
              <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "9.14px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "22.85px", height: "22.85px", flexShrink: 0, borderRadius: "5.48px", background: "#ffffff", boxShadow: "0px 0.91px 1.83px 0px rgba(0, 0, 0, 0.08)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <MailBulk size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#141b34", display: "block" }} />
                </div>
                <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "0.91px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "83px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#222222" }}>Email support</p>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "112px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#989898" }}>support@mailpulse.co</p>
                </div>
                <ChevronRight size={12.8} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#989898", display: "block" }} />
              </div>
              <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "9.14px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "22.85px", height: "22.85px", flexShrink: 0, borderRadius: "5.48px", background: "#ffffff", boxShadow: "0px 0.91px 1.83px 0px rgba(0, 0, 0, 0.08)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <CalendarBulk size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#141b34", display: "block" }} />
                </div>
                <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "0.91px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "67px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#222222" }}>Book a call</p>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "85px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#989898" }}>Pro plan · 30 min</p>
                </div>
                <ChevronRight size={12.8} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#989898", display: "block" }} />
              </div>
            </div>
          </div>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", padding: "10.97px 0px 10.97px 0px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ alignSelf: "stretch", height: "0.91px", flexShrink: 0, background: "#eeeeee" }} />
          </div>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "5.48px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "99px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.62px", fontWeight: 500, color: "#000000" }}>System status</p>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <svg style={{ width: "6.4px", height: "6.4px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="6.4" height="6.4" viewBox="0 0 6.4 6.4" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M6.4 3.2 C6.4 4.96731 4.96731 6.4 3.2 6.4 C1.43269 6.4 0 4.96731 0 3.2 C0 1.43269 1.43269 0 3.2 0 C4.96731 0 6.4 1.43269 6.4 3.2 Z" fill="#2dd411"/></svg>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "130px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 500, color: "#222222" }}>All systems operational</p>
              </div>
            </div>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.83px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "49px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#24322e" }}>Sending</p>
                <div style={{ flexShrink: 0, borderRadius: "91.39px", background: "#e7fff9", display: "flex", flexDirection: "row", padding: "3.66px 9.14px 3.66px 9.14px", gap: "3.66px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <svg style={{ width: "5.48px", height: "5.48px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="5.48" height="5.48" viewBox="0 0 5.48 5.48" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M5.48333 2.74167 C5.48333 4.25585 4.25585 5.48333 2.74167 5.48333 C1.22749 5.48333 0 4.25585 0 2.74167 C0 1.22749 1.22749 0 2.74167 0 C4.25585 0 5.48333 1.22749 5.48333 2.74167 Z" fill="#00a77d"/></svg>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "right", whiteSpace: "pre", minWidth: "60px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#00a77d", lineHeight: "1.4600000381469727" }}>Operational</p>
                </div>
              </div>
              <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "96px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#24322e" }}>Website & forms</p>
                <div style={{ flexShrink: 0, borderRadius: "91.39px", background: "#e7fff9", display: "flex", flexDirection: "row", padding: "3.66px 9.14px 3.66px 9.14px", gap: "3.66px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <svg style={{ width: "5.48px", height: "5.48px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="5.48" height="5.48" viewBox="0 0 5.48 5.48" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M5.48333 2.74167 C5.48333 4.25585 4.25585 5.48333 2.74167 5.48333 C1.22749 5.48333 0 4.25585 0 2.74167 C0 1.22749 1.22749 0 2.74167 0 C4.25585 0 5.48333 1.22749 5.48333 2.74167 Z" fill="#00a77d"/></svg>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "right", whiteSpace: "pre", minWidth: "60px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#00a77d", lineHeight: "1.4600000381469727" }}>Operational</p>
                </div>
              </div>
              <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "20px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#24322e" }}>API</p>
                <div style={{ flexShrink: 0, borderRadius: "91.39px", background: "#e7fff9", display: "flex", flexDirection: "row", padding: "3.66px 9.14px 3.66px 9.14px", gap: "3.66px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <svg style={{ width: "5.48px", height: "5.48px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="5.48" height="5.48" viewBox="0 0 5.48 5.48" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M5.48333 2.74167 C5.48333 4.25585 4.25585 5.48333 2.74167 5.48333 C1.22749 5.48333 0 4.25585 0 2.74167 C0 1.22749 1.22749 0 2.74167 0 C4.25585 0 5.48333 1.22749 5.48333 2.74167 Z" fill="#00a77d"/></svg>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "right", whiteSpace: "pre", minWidth: "60px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#00a77d", lineHeight: "1.4600000381469727" }}>Operational</p>
                </div>
              </div>
              <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "58px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#24322e" }}>Payments</p>
                <div style={{ flexShrink: 0, borderRadius: "91.39px", background: "#e7fff9", display: "flex", flexDirection: "row", padding: "3.66px 9.14px 3.66px 9.14px", gap: "3.66px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <svg style={{ width: "5.48px", height: "5.48px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="5.48" height="5.48" viewBox="0 0 5.48 5.48" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M5.48333 2.74167 C5.48333 4.25585 4.25585 5.48333 2.74167 5.48333 C1.22749 5.48333 0 4.25585 0 2.74167 C0 1.22749 1.22749 0 2.74167 0 C4.25585 0 5.48333 1.22749 5.48333 2.74167 Z" fill="#00a77d"/></svg>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "right", whiteSpace: "pre", minWidth: "60px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#00a77d", lineHeight: "1.4600000381469727" }}>Operational</p>
                </div>
              </div>
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "194px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#989898" }}>Last incident Dec 3 · resolved in 18 min</p>
          </div>
        </div>
      </div>
    </div>
  );
}
