// Performance page (loopo, Templates) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Ingot Icons.
import type { SVGProps } from "react";

// Ingot Icons used here, inlined so this file needs no icon package.
function icon(body: string) {
  return function Icon({ size = 24, strokeWidth = 1.5, ...p }: { size?: number; strokeWidth?: number } & SVGProps<SVGSVGElement>) {
    const html = strokeWidth == 1.5 ? body : body.replace(/stroke-width="([\d.]+)"/g, (_, w) => `stroke-width="${(Number(w) * Number(strokeWidth)) / 1.5}"`);
    return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden {...p} dangerouslySetInnerHTML={{ __html: html }} />;
  };
}
const ArrowUpRight = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M17 7l-10 10\" /><path d=\"M8 7l9 0l0 9\" /></g>");
const BuildingStore = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 21l18 0\" /><path d=\"M3 7v1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1h-18l2 -4h14l2 4\" /><path d=\"M5 21l0 -10.15\" /><path d=\"M19 21l0 -10.15\" /><path d=\"M9 21v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4\" /></g>");
const Calendar = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12\" /><path d=\"M16 3v4\" /><path d=\"M8 3v4\" /><path d=\"M4 11h16\" /></g>");
const ChevronDown = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M6 9l6 6l6 -6\" /></g>");
const ChevronRight = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M9 6l6 6l-6 6\" /></g>");
const CursorPointer = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M19.5027 9.96958C20.7073 10.4588 20.6154 12.1941 19.3658 12.5533L13.0605 14.3658L10.1807 20.2606C9.60996 21.4288 7.88499 21.218 7.6124 19.9468L4.67677 6.25646C4.44638 5.18204 5.5121 4.2878 6.53019 4.70126L19.5027 9.96958Z\"/></g>");
const DotsVertical = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M11 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0\" /><path d=\"M11 19a1 1 0 1 0 2 0a1 1 0 1 0 -2 0\" /><path d=\"M11 5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0\" /></g>");
const FileDownload = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M14 3v4a1 1 0 0 0 1 1h4\" /><path d=\"M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2\" /><path d=\"M12 17v-6\" /><path d=\"M9.5 14.5l2.5 2.5l2.5 -2.5\" /></g>");
const Loader = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 6l0 -3\" /><path d=\"M16.25 7.75l2.15 -2.15\" /><path d=\"M18 12l3 0\" /><path d=\"M16.25 16.25l2.15 2.15\" /><path d=\"M12 18l0 3\" /><path d=\"M7.75 16.25l-2.15 2.15\" /><path d=\"M6 12l-3 0\" /><path d=\"M7.75 7.75l-2.15 -2.15\" /></g>");
const Mail = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10\" /><path d=\"M3 7l9 6l9 -6\" /></g>");
const Moneybag = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M9.5 3h5a1.5 1.5 0 0 1 1.5 1.5a3.5 3.5 0 0 1 -3.5 3.5h-1a3.5 3.5 0 0 1 -3.5 -3.5a1.5 1.5 0 0 1 1.5 -1.5\" /><path d=\"M4 17v-1a8 8 0 1 1 16 0v1a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4\" /></g>");
const Search = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 10a7 7 0 1 0 14 0a7 7 0 1 0 -14 0\" /><path d=\"M21 21l-6 -6\" /></g>");
const BellBulk = icon("<path d=\"M10 5A2 2 0 1 1 14 5 7 7 0 0 1 18 11V14A4 4 0 0 0 20 17H4A4 4 0 0 0 6 14V11A7 7 0 0 1 10 5\" fill=\"currentColor\" fill-opacity=\"0.4\"/><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M9 17V18A3 3 0 0 0 15 18V17\"/></g>");
const BoltBulk = icon("<path d=\"M13 3L13 10 19 10 11 21 11 14 5 14 13 3\" fill=\"currentColor\" fill-opacity=\"0.4\"/>");
const BrowserBulk = icon("<path d=\"M4 6A2 2 0 0 1 6 4H18A2 2 0 0 1 20 6V18A2 2 0 0 1 18 20H6A2 2 0 0 1 4 18L4 6\" fill=\"currentColor\" fill-opacity=\"0.4\"/><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 8H20\"/><path d=\"M8 4V8\"/></g>");
const ChartLineBulk = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 19l16 0\" /><path d=\"M4 15l4 -6l4 2l4 -5l4 4\" /></g>");
const FileBulk = icon("<path d=\"M17 21H7A2 2 0 0 1 5 19V5A2 2 0 0 1 7 3H14L19 8V19A2 2 0 0 1 17 21\" fill=\"currentColor\" fill-opacity=\"0.4\"/><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M14 3V7A1 1 0 0 0 15 8H19\"/></g>");
const FilterBulk = icon("<path d=\"M4 4H20V6.172000000000001A2 2 0 0 1 19.414 7.586L15.000000000000002 12V19L9.000000000000002 21V12.5L4.520000000000001 7.572A2 2 0 0 1 4.000000000000002 6.227V4\" fill=\"currentColor\" fill-opacity=\"0.4\"/>");
const HelpCircleBulk = icon("<path d=\"M3 12A9 9 0 1 0 21 12 9 9 0 0 0 3 12\" fill=\"currentColor\" fill-opacity=\"0.4\"/><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 16V16.01\"/><path d=\"M12 13A2 2 0 0 0 12.914 9.218 1.98 1.98 0 0 0 10.5 9.701\"/></g>");
const LayoutDashboardBulk = icon("<path d=\"M5 4H9A1 1 0 0 1 10 5V11A1 1 0 0 1 9 12H5A1 1 0 0 1 4 11V5A1 1 0 0 1 5 4\" fill=\"currentColor\" fill-opacity=\"0.4\"/><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M5 16H9A1 1 0 0 1 10 17V19A1 1 0 0 1 9 20H5A1 1 0 0 1 4 19V17A1 1 0 0 1 5 16\"/><path d=\"M15 12H19A1 1 0 0 1 20 13V19A1 1 0 0 1 19 20H15A1 1 0 0 1 14 19V13A1 1 0 0 1 15 12\"/><path d=\"M15 4H19A1 1 0 0 1 20 5V7A1 1 0 0 1 19 8H15A1 1 0 0 1 14 7V5A1 1 0 0 1 15 4\"/></g>");
const LicenseBulk = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11\" /><path d=\"M9 7l4 0\" /><path d=\"M9 11l4 0\" /></g>");
const MailBulk = icon("<path d=\"M3 7A2 2 0 0 1 5 5H19A2 2 0 0 1 21 7V17A2 2 0 0 1 19 19H5A2 2 0 0 1 3 17V7\" fill=\"currentColor\" fill-opacity=\"0.4\"/><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 7L12 13 21 7\"/></g>");
const NoteBulk = icon("<path d=\"M13 20V14A1 1 0 0 1 14 13H20V6A2 2 0 0 0 18 4H6A2 2 0 0 0 4 6V18A2 2 0 0 0 6 20H13\" fill=\"currentColor\" fill-opacity=\"0.4\"/><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M13 20L20 13\"/></g>");
const OutletBulk = icon("<path d=\"M4 6A2 2 0 0 1 6 4H18A2 2 0 0 1 20 6V18A2 2 0 0 1 18 20H6A2 2 0 0 1 4 18L4 6\" fill=\"currentColor\" fill-opacity=\"0.4\"/><path d=\"M8.5 12A0.5 0.5 0 1 0 9.5 12 0.5 0.5 0 1 0 8.5 12\" fill=\"currentColor\"/><path d=\"M14.5 12A0.5 0.5 0 1 0 15.5 12 0.5 0.5 0 1 0 14.5 12\" fill=\"currentColor\"/>");
const QrcodeBulk = icon("<path d=\"M4 5A1 1 0 0 1 5 4H9A1 1 0 0 1 10 5V9A1 1 0 0 1 9 10H5A1 1 0 0 1 4 9L4 5\" fill=\"currentColor\" fill-opacity=\"0.4\"/><path d=\"M14 5A1 1 0 0 1 15 4H19A1 1 0 0 1 20 5V9A1 1 0 0 1 19 10H15A1 1 0 0 1 14 9L14 5\" fill=\"currentColor\" fill-opacity=\"0.4\"/><path d=\"M4 15A1 1 0 0 1 5 14H9A1 1 0 0 1 10 15V19A1 1 0 0 1 9 20H5A1 1 0 0 1 4 19L4 15\" fill=\"currentColor\" fill-opacity=\"0.4\"/><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 5a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1l0 -4\" /><path d=\"M7 17l0 .01\" /><path d=\"M14 5a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1l0 -4\" /><path d=\"M7 7l0 .01\" /><path d=\"M4 15a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1l0 -4\" /><path d=\"M17 7l0 .01\" /><path d=\"M14 14l3 0\" /><path d=\"M20 14l0 .01\" /><path d=\"M14 14l0 3\" /><path d=\"M14 20l3 0\" /><path d=\"M17 17l3 0\" /><path d=\"M20 17l0 3\" /></g>");
const SendBulk = icon("<path d=\"M21 3L14.5 21A0.55 0.55 0 0 1 13.5 21L10 14 3 10.5A0.55 0.55 0 0 1 3 9.5L21 3\" fill=\"currentColor\" fill-opacity=\"0.4\"/><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M10 14L21 3\"/></g>");
const SettingsBulk = icon("<path d=\"M10.325 4.317C10.751 2.561 13.248999999999999 2.561 13.674999999999999 4.317A1.724 1.724 0 0 0 16.247999999999998 5.383C17.790999999999997 4.443 19.557999999999996 6.209 18.618 7.753A1.724 1.724 0 0 0 19.683 10.325C21.439 10.751 21.439 13.248999999999999 19.683 13.674999999999999A1.724 1.724 0 0 0 18.617 16.247999999999998C19.557000000000002 17.790999999999997 17.791 19.557999999999996 16.247 18.618A1.724 1.724 0 0 0 13.675 19.683C13.249 21.439 10.751000000000001 21.439 10.325000000000001 19.683A1.724 1.724 0 0 0 7.752000000000001 18.617C6.2090000000000005 19.557000000000002 4.442 17.791 5.382000000000001 16.247A1.724 1.724 0 0 0 4.317 13.675C2.561 13.249 2.561 10.751000000000001 4.317 10.325000000000001A1.724 1.724 0 0 0 5.383 7.752000000000001C4.443 6.2090000000000005 6.209 4.442 7.753 5.382000000000001 8.753 5.99 10.049 5.452000000000001 10.325 4.317\" fill=\"currentColor\" fill-opacity=\"0.4\"/><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M9 12A3 3 0 1 0 15 12 3 3 0 0 0 9 12\"/></g>");
const ShoppingCartBulk = icon("<path d=\"M4 19A2 2 0 1 0 8 19 2 2 0 1 0 4 19\" fill=\"currentColor\" fill-opacity=\"0.4\"/><path d=\"M15 19A2 2 0 1 0 19 19 2 2 0 1 0 15 19\" fill=\"currentColor\" fill-opacity=\"0.4\"/><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0\" /><path d=\"M15 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0\" /><path d=\"M17 17h-11v-14h-2\" /><path d=\"M6 5l14 1l-1 7h-13\" /></g>");
const UserBulk = icon("<path d=\"M8 7A4 4 0 1 0 16 7 4 4 0 0 0 8 7\" fill=\"currentColor\" fill-opacity=\"0.4\"/><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M6 21V19A4 4 0 0 1 10 15H14A4 4 0 0 1 18 19V21\"/></g>");
const UsersBulk = icon("<path d=\"M5 7A4 4 0 1 0 13 7 4 4 0 1 0 5 7\" fill=\"currentColor\" fill-opacity=\"0.4\"/><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 21V19A4 4 0 0 1 7 15H11A4 4 0 0 1 15 19V21\"/><path d=\"M16 3.13A4 4 0 0 1 16 10.879999999999999\"/><path d=\"M21 21V19A4 4 0 0 0 18 15.15\"/></g>");
const WalletBulk = icon("<path d=\"M20 12V16H16A2 2 0 0 1 16 12H20\" fill=\"currentColor\" fill-opacity=\"0.4\"/><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M17 8v-3a1 1 0 0 0 -1 -1h-10a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1 -1 1h-12a2 2 0 0 1 -2 -2v-12\" /><path d=\"M20 12v4h-4a2 2 0 0 1 0 -4h4\" /></g>");
const LayoutDashboardSolid = icon("<g fill=\"currentColor\"><path d=\"M9 3a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2v-6a2 2 0 0 1 2 -2zm0 12a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2v-2a2 2 0 0 1 2 -2zm10 -4a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2v-6a2 2 0 0 1 2 -2zm0 -8a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2v-2a2 2 0 0 1 2 -2z\" /></g>");
const TrendingUpSolid = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.25\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 17l6 -6l4 4l8 -8\" /><path d=\"M14 7l7 0l0 7\" /></g>");

export function PerformancePage() {
  return (
    <div style={{ width: "1577.72px", height: "1180px", background: "#f5f5f5", overflow: "hidden", position: "relative" }}>
      <div style={{ position: "absolute", left: "0px", top: "0px", width: "269.53px", height: "1180px", background: "#f5f5f5", overflow: "hidden" }}>
        <div style={{ position: "absolute", left: "21.91px", top: "23.76px", width: "81.08px", height: "24.79px", display: "flex", flexDirection: "row", gap: "24.79px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "5.72px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "24.79px", height: "24.79px", flexShrink: 0, borderRadius: "5.72px", background: "#fd4b23", overflow: "hidden", position: "relative" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "22.21px", height: "22.21px", background: "linear-gradient(177.6deg, rgba(255, 255, 255, 0) 2%, rgba(255, 255, 255, 0.12) 98.2%)", overflow: "hidden" }} />
              <svg style={{ position: "absolute", left: "-2.86px", top: "2.86px", width: "26.87px", height: "22.79px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="26.87" height="22.79" viewBox="0 0 26.87 22.79" fill="none" overflow="visible"><path transform="matrix(0.5 -0.866 0.866 0.5 0.696 12.902)" d="M0.495677 8.90014 C0.22308 8.44329 0.377026 7.85174 0.837738 7.58573 L12.4326 0.890945 C13.0922 0.510116 13.91 1.01806 13.861 1.7781 L13.6382 5.23389 C13.6177 5.55205 13.4395 5.83891 13.1634 5.99833 L3.26793 11.7119 C2.81648 11.9726 2.23937 11.8224 1.97225 11.3747 L0.495677 8.90014 Z" fill="#ffffff"/><path transform="matrix(0.5 -0.866 0.866 0.5 8.01 14.081)" d="M0.490901 6.5047 C0.220642 6.04804 0.375175 5.45859 0.83472 5.19325 L8.28599 0.890946 C8.94556 0.510117 9.7634 1.01806 9.71439 1.7781 L9.49155 5.2341 C9.47105 5.55214 9.293 5.83892 9.01706 5.99837 L3.25745 9.3266 C2.80481 9.58816 2.22597 9.43651 1.95972 8.98662 L0.490901 6.5047 Z" fill="#ffffff" opacity="0.5"/><path transform="matrix(0.5 -0.866 0.866 0.5 15.324 15.261)" d="M0.476896 4.10681 C0.213519 3.65073 0.369756 3.06749 0.825854 2.80414 L4.13937 0.890946 C4.79894 0.510116 5.61678 1.01806 5.56778 1.7781 L5.34491 5.23457 C5.32442 5.55235 5.14664 5.83894 4.87104 5.99848 L3.22264 6.9527 C2.76652 7.21674 2.1827 7.06069 1.91914 6.6043 L0.476896 4.10681 Z" fill="#ffffff" opacity="0.25"/></svg>
            </div>
            <svg style={{ width: "50.56px", height: "13.55px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="50.56" height="13.55" viewBox="0 0 50.56 13.55" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 12.9988 L0 0 L1.97729 0 L1.97729 12.2665 L0.933719 11.1863 L8.31193 11.1863 L8.31193 12.9988 L0 12.9988 Z" fill="#000000"/><path transform="matrix(1 0 0 1 0 0)" d="M13.8204 13.2185 C12.8928 13.2185 12.0811 13.011 11.3854 12.5961 C10.6897 12.1811 10.1527 11.5891 9.7743 10.8202 C9.39593 10.0512 9.20675 9.15411 9.20675 8.12885 C9.20675 7.09138 9.39593 6.19428 9.7743 5.43754 C10.1527 4.6808 10.6897 4.09494 11.3854 3.67995 C12.0811 3.25276 12.8928 3.03916 13.8204 3.03916 C14.748 3.03916 15.5597 3.25276 16.2554 3.67995 C16.9511 4.09494 17.4882 4.6808 17.8665 5.43754 C18.2449 6.19428 18.4341 7.09138 18.4341 8.12885 C18.4341 9.15411 18.2449 10.0512 17.8665 10.8202 C17.4882 11.5891 16.9511 12.1811 16.2554 12.5961 C15.5597 13.011 14.748 13.2185 13.8204 13.2185 Z M13.8204 11.5342 C14.6504 11.5342 15.2912 11.2351 15.7428 10.6371 C16.1944 10.0268 16.4202 9.19073 16.4202 8.12885 C16.4202 7.06697 16.1944 6.237 15.7428 5.63893 C15.2912 5.02866 14.6504 4.72352 13.8204 4.72352 C13.0026 4.72352 12.3619 5.02866 11.8981 5.63893 C11.4465 6.237 11.2206 7.06697 11.2206 8.12885 C11.2206 9.19073 11.4465 10.0268 11.8981 10.6371 C12.3619 11.2351 13.0026 11.5342 13.8204 11.5342 Z" fill="#000000"/><path transform="matrix(1 0 0 1 0 0)" d="M24.4049 13.2185 C23.4772 13.2185 22.6656 13.011 21.9699 12.5961 C21.2742 12.1811 20.7371 11.5891 20.3587 10.8202 C19.9804 10.0512 19.7912 9.15411 19.7912 8.12885 C19.7912 7.09138 19.9804 6.19428 20.3587 5.43754 C20.7371 4.6808 21.2742 4.09494 21.9699 3.67995 C22.6656 3.25276 23.4772 3.03916 24.4049 3.03916 C25.3325 3.03916 26.1441 3.25276 26.8398 3.67995 C27.5356 4.09494 28.0726 4.6808 28.451 5.43754 C28.8293 6.19428 29.0185 7.09138 29.0185 8.12885 C29.0185 9.15411 28.8293 10.0512 28.451 10.8202 C28.0726 11.5891 27.5356 12.1811 26.8398 12.5961 C26.1441 13.011 25.3325 13.2185 24.4049 13.2185 Z M24.4049 11.5342 C25.2348 11.5342 25.8756 11.2351 26.3272 10.6371 C26.7788 10.0268 27.0046 9.19073 27.0046 8.12885 C27.0046 7.06697 26.7788 6.237 26.3272 5.63893 C25.8756 5.02866 25.2348 4.72352 24.4049 4.72352 C23.5871 4.72352 22.9463 5.02866 22.4825 5.63893 C22.0309 6.237 21.8051 7.06697 21.8051 8.12885 C21.8051 9.19073 22.0309 10.0268 22.4825 10.6371 C22.9463 11.2351 23.5871 11.5342 24.4049 11.5342 Z" fill="#000000"/><path transform="matrix(1 0 0 1 0 0)" d="M30.9798 15.7451 L30.9798 3.25886 L32.8106 3.25886 L32.8655 5.346 L32.6458 5.23615 C32.89 4.51603 33.2927 3.97288 33.8542 3.60672 C34.4156 3.22835 35.0625 3.03916 35.7949 3.03916 C36.7469 3.03916 37.528 3.27717 38.1383 3.75319 C38.7608 4.21699 39.2185 4.83337 39.5114 5.60232 C39.8166 6.37126 39.9691 7.21344 39.9691 8.12885 C39.9691 9.04426 39.8166 9.88644 39.5114 10.6554 C39.2185 11.4243 38.7608 12.0468 38.1383 12.5228 C37.528 12.9866 36.7469 13.2185 35.7949 13.2185 C35.3066 13.2185 34.8489 13.1331 34.4217 12.9622 C33.9945 12.7913 33.6284 12.5533 33.3232 12.2482 C33.0303 11.9309 32.8228 11.5586 32.7008 11.1314 L32.9205 10.9117 L32.9205 15.7451 L30.9798 15.7451 Z M35.447 11.5342 C36.2281 11.5342 36.8384 11.2351 37.2778 10.6371 C37.7294 10.039 37.9552 9.20293 37.9552 8.12885 C37.9552 7.05477 37.7294 6.21869 37.2778 5.62062 C36.8384 5.02255 36.2281 4.72352 35.447 4.72352 C34.9344 4.72352 34.4889 4.85168 34.1105 5.10799 C33.7321 5.3521 33.4392 5.73047 33.2317 6.2431 C33.0242 6.75573 32.9205 7.38432 32.9205 8.12885 C32.9205 8.87338 33.0181 9.50197 33.2134 10.0146 C33.4209 10.5272 33.7138 10.9117 34.0922 11.168 C34.4828 11.4121 34.9344 11.5342 35.447 11.5342 Z" fill="#000000"/><path transform="matrix(1 0 0 1 0 0)" d="M45.9492 13.2185 C45.0216 13.2185 44.2099 13.011 43.5142 12.5961 C42.8185 12.1811 42.2814 11.5891 41.9031 10.8202 C41.5247 10.0512 41.3355 9.15411 41.3355 8.12885 C41.3355 7.09138 41.5247 6.19428 41.9031 5.43754 C42.2814 4.6808 42.8185 4.09494 43.5142 3.67995 C44.2099 3.25276 45.0216 3.03916 45.9492 3.03916 C46.8768 3.03916 47.6885 3.25276 48.3842 3.67995 C49.0799 4.09494 49.6169 4.6808 49.9953 5.43754 C50.3737 6.19428 50.5629 7.09138 50.5629 8.12885 C50.5629 9.15411 50.3737 10.0512 49.9953 10.8202 C49.6169 11.5891 49.0799 12.1811 48.3842 12.5961 C47.6885 13.011 46.8768 13.2185 45.9492 13.2185 Z M45.9492 11.5342 C46.7792 11.5342 47.42 11.2351 47.8716 10.6371 C48.3232 10.0268 48.549 9.19073 48.549 8.12885 C48.549 7.06697 48.3232 6.237 47.8716 5.63893 C47.42 5.02866 46.7792 4.72352 45.9492 4.72352 C45.1314 4.72352 44.4906 5.02866 44.0268 5.63893 C43.5752 6.237 43.3494 7.06697 43.3494 8.12885 C43.3494 9.19073 43.5752 10.0268 44.0268 10.6371 C44.4906 11.2351 45.1314 11.5342 45.9492 11.5342 Z" fill="#000000"/></svg>
          </div>
        </div>
        <div style={{ position: "absolute", left: "21.91px", top: "84.36px", width: "232.27px", height: "834.83px", display: "flex", flexDirection: "column", gap: "6.57px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "232.27px", height: "39.44px", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ alignSelf: "stretch", height: "39.44px", flexShrink: 0, borderRadius: "10.96px", display: "flex", flexDirection: "column", padding: "10.96px 10.96px 10.96px 10.96px", justifyContent: "center", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6.57px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <Loader size={19.7} style={{ width: "19.72px", height: "19.72px", flexShrink: 0, color: "#a6a6a6", display: "block" }} />
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "81px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#a6a6a6" }}>WORKSPACE</p>
                </div>
              </div>
            </div>
            <div style={{ alignSelf: "stretch", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "column", padding: "3.31px 0px 3.31px 0px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ alignSelf: "stretch", height: "32.83px", flexShrink: 0, borderRadius: "8px", display: "flex", flexDirection: "column", padding: "6.41px 10.96px 6.41px 10.96px", gap: "10.96px", justifyContent: "center", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4.38px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <LayoutDashboardBulk size={15.3} strokeWidth={1.51} style={{ width: "15.34px", height: "15.34px", flexShrink: 0, color: "#130f26", display: "block" }} />
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "68px", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 500, color: "#646871" }}>Overview</p>
                </div>
              </div>
            </div>
          </div>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "21.91px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ alignSelf: "stretch", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "column", padding: "3.31px 0px 3.31px 0px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ alignSelf: "stretch", height: "32.83px", flexShrink: 0, borderRadius: "8px", display: "flex", flexDirection: "row", padding: "6.41px 10.96px 6.41px 10.96px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ width: "178.59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "6.57px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <UserBulk size={15.3} strokeWidth={1.51} style={{ width: "15.34px", height: "15.34px", flexShrink: 0, color: "#130f26", display: "block" }} />
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "67px", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 500, color: "#646871" }}>Audience</p>
                  </div>
                </div>
              </div>
              <div style={{ alignSelf: "stretch", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "column", padding: "3.31px 0px 3.31px 0px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ alignSelf: "stretch", height: "32.83px", flexShrink: 0, borderRadius: "8px", display: "flex", flexDirection: "column", padding: "6.41px 10.96px 6.41px 10.96px", justifyContent: "center", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4.38px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <SendBulk size={15.3} strokeWidth={1.51} style={{ width: "15.34px", height: "15.34px", flexShrink: 0, color: "#130f26", display: "block" }} />
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "81px", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 500, color: "#646871" }}>Campaigns</p>
                  </div>
                </div>
              </div>
              <div style={{ alignSelf: "stretch", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "column", padding: "3.31px 0px 3.31px 0px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ alignSelf: "stretch", height: "32.83px", flexShrink: 0, borderRadius: "8px", display: "flex", flexDirection: "column", padding: "6.41px 10.96px 6.41px 10.96px", justifyContent: "center", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "77.79px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "4.38px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <NoteBulk size={15.3} strokeWidth={1.51} style={{ width: "15.34px", height: "15.34px", flexShrink: 0, color: "#130f26", display: "block" }} />
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "58px", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 500, color: "#646871" }}>Content</p>
                  </div>
                </div>
              </div>
              <div style={{ alignSelf: "stretch", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "column", padding: "3.31px 0px 3.31px 0px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ alignSelf: "stretch", height: "32.83px", flexShrink: 0, borderRadius: "8px", display: "flex", flexDirection: "column", padding: "6.41px 10.96px 6.41px 10.96px", justifyContent: "center", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "111.75px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "4.38px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <BoltBulk size={15.3} style={{ width: "15.34px", height: "15.34px", flexShrink: 0, color: "#130f26", display: "block" }} />
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "92px", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 500, color: "#646871" }}>Automations</p>
                  </div>
                </div>
              </div>
              <div style={{ alignSelf: "stretch", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "column", padding: "3.31px 0px 3.31px 0px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ alignSelf: "stretch", height: "32.83px", flexShrink: 0, borderRadius: "8px", display: "flex", flexDirection: "row", padding: "6.41px 10.96px 6.41px 10.96px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ width: "178.59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "6.57px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <ChartLineBulk size={15.3} strokeWidth={2.01} style={{ width: "15.34px", height: "15.34px", flexShrink: 0, color: "#130f26", display: "block" }} />
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "67px", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 500, color: "#646871" }}>Analytics</p>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "4.38px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <svg style={{ width: "232.27px", height: "1px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible", marginBottom: "-1px" }} xmlns="http://www.w3.org/2000/svg" width="232.27" height="1" viewBox="0 0 232.27 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 -0.547818 L0 0 L232.275 0 L232.275 -0.547818 L232.275 -1.09564 L0 -1.09564 L0 -0.547818 Z" fill="#e8e8e8"/></svg>
              <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ alignSelf: "stretch", height: "39.44px", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ alignSelf: "stretch", height: "39.44px", flexShrink: 0, borderRadius: "10.96px", display: "flex", flexDirection: "column", padding: "10.96px 10.96px 10.96px 10.96px", justifyContent: "center", alignItems: "flex-start", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "66px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#a6a6a6" }}>AUDIENCE</p>
                  </div>
                </div>
                <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ alignSelf: "stretch", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "column", padding: "3.31px 0px 3.31px 0px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                    <div style={{ alignSelf: "stretch", height: "32.83px", flexShrink: 0, borderRadius: "8px", display: "flex", flexDirection: "row", padding: "6.41px 10.96px 6.41px 10.96px", gap: "-7.67px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                      <div style={{ width: "178.59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "6.57px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                        <UsersBulk size={15.3} strokeWidth={1.51} style={{ width: "15.34px", height: "15.34px", flexShrink: 0, color: "#130f26", display: "block" }} />
                        <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "86px", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 500, color: "#646871" }}>Subscribers</p>
                      </div>
                      <div style={{ height: "24.1px", flexShrink: 0, borderRadius: "5.48px", background: "linear-gradient(180deg, #fd4b23 0%, #ff8e74 100%)", boxShadow: "0px 0px 1.1px 0px rgba(0, 0, 0, 0.25)", display: "flex", flexDirection: "row", padding: "6.57px 4.38px 6.57px 4.38px", gap: "10.96px", justifyContent: "center", alignItems: "center", boxSizing: "border-box", marginLeft: "-7.67px" }}>
                        <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "37px", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 400, color: "#ffffff" }}>18.4k</p>
                      </div>
                    </div>
                  </div>
                  <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                    <div style={{ alignSelf: "stretch", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "column", padding: "3.31px 0px 3.31px 0px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                      <div style={{ alignSelf: "stretch", height: "32.83px", flexShrink: 0, borderRadius: "8px", display: "flex", flexDirection: "column", padding: "6.41px 10.96px 6.41px 10.96px", justifyContent: "center", alignItems: "flex-start", boxSizing: "border-box" }}>
                        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4.38px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                          <FilterBulk size={15.3} style={{ width: "15.34px", height: "15.34px", flexShrink: 0, color: "#130f26", display: "block" }} />
                          <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "74px", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 500, color: "#646871" }}>Segments</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                    <div style={{ alignSelf: "stretch", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "column", padding: "3.31px 0px 3.31px 0px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                      <div style={{ alignSelf: "stretch", height: "32.83px", flexShrink: 0, borderRadius: "8px", display: "flex", flexDirection: "column", padding: "6.41px 10.96px 6.41px 10.96px", justifyContent: "center", alignItems: "flex-start", boxSizing: "border-box" }}>
                        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4.38px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                          <LicenseBulk size={15.3} strokeWidth={2.01} style={{ width: "15.34px", height: "15.34px", flexShrink: 0, color: "#130f26", display: "block" }} />
                          <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "96px", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 500, color: "#646871" }}>Signup forms</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                    <div style={{ alignSelf: "stretch", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "column", padding: "3.31px 0px 3.31px 0px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                      <div style={{ alignSelf: "stretch", height: "32.83px", flexShrink: 0, borderRadius: "8px", display: "flex", flexDirection: "column", padding: "6.41px 10.96px 6.41px 10.96px", justifyContent: "center", alignItems: "flex-start", boxSizing: "border-box" }}>
                        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4.38px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                          <OutletBulk size={15.3} style={{ width: "15.34px", height: "15.34px", flexShrink: 0, color: "#130f26", display: "block" }} />
                          <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "87px", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 500, color: "#646871" }}>Integrations</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "4.38px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <svg style={{ width: "232.27px", height: "1px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible", marginBottom: "-1px" }} xmlns="http://www.w3.org/2000/svg" width="232.27" height="1" viewBox="0 0 232.27 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 -0.547818 L0 0 L232.275 0 L232.275 -0.547818 L232.275 -1.09564 L0 -1.09564 L0 -0.547818 Z" fill="#e8e8e8"/></svg>
              <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ alignSelf: "stretch", height: "39.44px", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ alignSelf: "stretch", height: "39.44px", flexShrink: 0, borderRadius: "10.96px", display: "flex", flexDirection: "column", padding: "10.96px 10.96px 10.96px 10.96px", justifyContent: "center", alignItems: "flex-start", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "58px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#a6a6a6" }}>INSIGHTS</p>
                  </div>
                </div>
                <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ alignSelf: "stretch", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "column", padding: "3.31px 0px 3.31px 0px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                    <div style={{ alignSelf: "stretch", height: "32.83px", flexShrink: 0, borderRadius: "8px", background: "#ececed", boxShadow: "inset 0 0 0 1.1px #e8e8e8", display: "flex", flexDirection: "row", padding: "6.41px 10.96px 6.41px 10.96px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                      <div style={{ width: "178.59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "6.57px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                        <TrendingUpSolid size={15.3} strokeWidth={2.26} style={{ width: "15.34px", height: "15.34px", flexShrink: 0, color: "#000000", display: "block" }} />
                        <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "90px", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 400, color: "#000000" }}>Performance</p>
                      </div>
                    </div>
                  </div>
                  <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                    <div style={{ alignSelf: "stretch", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "column", padding: "3.31px 0px 3.31px 0px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                      <div style={{ alignSelf: "stretch", height: "32.83px", flexShrink: 0, borderRadius: "8px", display: "flex", flexDirection: "column", padding: "6.41px 10.96px 6.41px 10.96px", justifyContent: "center", alignItems: "flex-start", boxSizing: "border-box" }}>
                        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4.38px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                          <FileBulk size={15.3} strokeWidth={1.51} style={{ width: "15.34px", height: "15.34px", flexShrink: 0, color: "#130f26", display: "block" }} />
                          <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "56px", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 400, color: "#646871" }}>Reports</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div style={{ alignSelf: "stretch", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "column", padding: "3.31px 0px 3.31px 0px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                    <div style={{ alignSelf: "stretch", height: "32.83px", flexShrink: 0, borderRadius: "8px", display: "flex", flexDirection: "column", padding: "6.41px 10.96px 6.41px 10.96px", justifyContent: "center", alignItems: "flex-start", boxSizing: "border-box" }}>
                      <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4.38px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                        <WalletBulk size={15.3} strokeWidth={2.01} style={{ width: "15.34px", height: "15.34px", flexShrink: 0, color: "#130f26", display: "block" }} />
                        <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "61px", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 400, color: "#646871" }}>Revenue</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "4.38px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <svg style={{ width: "232.27px", height: "1px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible", marginBottom: "-1px" }} xmlns="http://www.w3.org/2000/svg" width="232.27" height="1" viewBox="0 0 232.27 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 -0.547818 L0 0 L232.275 0 L232.275 -0.547818 L232.275 -1.09564 L0 -1.09564 L0 -0.547818 Z" fill="#e8e8e8"/></svg>
              <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ alignSelf: "stretch", height: "39.44px", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ alignSelf: "stretch", height: "39.44px", flexShrink: 0, borderRadius: "10.96px", display: "flex", flexDirection: "column", padding: "10.96px 10.96px 10.96px 10.96px", justifyContent: "center", alignItems: "flex-start", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "63px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#a6a6a6" }}>SETTINGS</p>
                  </div>
                </div>
                <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                    <div style={{ alignSelf: "stretch", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "column", padding: "3.31px 0px 3.31px 0px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                      <div style={{ alignSelf: "stretch", height: "32.83px", flexShrink: 0, borderRadius: "8px", display: "flex", flexDirection: "column", padding: "6.41px 10.96px 6.41px 10.96px", justifyContent: "center", alignItems: "flex-start", boxSizing: "border-box" }}>
                        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4.38px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                          <HelpCircleBulk size={15.3} strokeWidth={1.51} style={{ width: "15.34px", height: "15.34px", flexShrink: 0, color: "#130f26", display: "block" }} />
                          <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "105px", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 400, color: "#646871" }}>Help & support</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                    <div style={{ alignSelf: "stretch", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "column", padding: "3.31px 0px 3.31px 0px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                      <div style={{ alignSelf: "stretch", height: "32.83px", flexShrink: 0, borderRadius: "8px", display: "flex", flexDirection: "column", padding: "6.41px 10.96px 6.41px 10.96px", justifyContent: "center", alignItems: "flex-start", boxSizing: "border-box" }}>
                        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4.38px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                          <SettingsBulk size={15.3} strokeWidth={1.51} style={{ width: "15.34px", height: "15.34px", flexShrink: 0, color: "#130f26", display: "block" }} />
                          <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "139px", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 400, color: "#646871" }}>Workspace settings</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ position: "absolute", left: "11px", top: "15px", width: "141px", height: "44px", background: "rgba(247, 247, 247, 0.05)", backdropFilter: "blur(3.95px)" }} />
      </div>
      <div style={{ position: "absolute", left: "269.53px", top: "0px", width: "1286.28px", height: "81.36px", background: "#f5f5f5", display: "flex", flexDirection: "row", padding: "21.91px 0px 21.91px 21.91px", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4.38px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4.38px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <LayoutDashboardSolid size={15.3} style={{ width: "15.34px", height: "15.34px", flexShrink: 0, color: "#b3b3b3", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "81px", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 500, color: "#b3b3b3" }}>Workspace</p>
          </div>
          <ChevronRight size={15.3} strokeWidth={1.51} style={{ width: "15.34px", height: "15.34px", flexShrink: 0, color: "#686765", display: "block" }} />
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4.38px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "58px", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 500, color: "#b3b3b3" }}>Insights</p>
            <ChevronRight size={15.3} strokeWidth={1.51} style={{ width: "15.34px", height: "15.34px", flexShrink: 0, color: "#686765", display: "block" }} />
          </div>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "109px", fontFamily: "'Geist'", fontSize: "17.53px", fontWeight: 500, color: "#666d80", lineHeight: "1.5", letterSpacing: "0.02em" }}>Performance</p>
        </div>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6.57px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "257.47px", flexShrink: 0, borderRadius: "8.77px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8", display: "flex", flexDirection: "row", padding: "8.77px 6.57px 8.77px 10.96px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "76.69px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "4.38px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <Search size={15.3} strokeWidth={1.51} style={{ width: "15.34px", height: "15.34px", flexShrink: 0, color: "#686765", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "51px", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 500, color: "#686765" }}>Search</p>
            </div>
          </div>
          <div style={{ width: "37.25px", height: "37.25px", flexShrink: 0, borderRadius: "7.45px", background: "#ffffff", boxShadow: "inset 0 0 0 0.93px #e8e8e8", overflow: "hidden", position: "relative" }}>
            <BellBulk size={21.9} style={{ position: "absolute", left: "7.67px", top: "7.67px", width: "21.91px", height: "21.91px", color: "#686765", display: "block", flexShrink: 0 }} />
          </div>
        </div>
      </div>
      <div style={{ position: "absolute", left: "269.53px", top: "81.08px", width: "1286.28px", height: "1077.01px", borderRadius: "17.53px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #f5f5f5", overflow: "hidden" }}>
        <div style={{ position: "absolute", left: "19.72px", top: "19.72px", width: "1246.84px", height: "58.93px", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-end", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "4.93px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "140px", lineHeight: "31px", fontFamily: "'Geist'", fontSize: "24.1px", fontWeight: 500, color: "#202020", letterSpacing: "-0.02em" }}>Performance</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "491px", lineHeight: "23px", fontFamily: "'Geist'", fontSize: "17.53px", fontWeight: 400, color: "#747474", letterSpacing: "-0.02em" }}>How campaigns, flows and channels turn attention into revenue.</p>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10.96px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ height: "35.06px", flexShrink: 0, borderRadius: "8.77px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8", display: "flex", flexDirection: "row", padding: "8.77px 8.77px 8.77px 8.77px", gap: "6.57px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <Calendar size={19.7} style={{ width: "19.72px", height: "19.72px", flexShrink: 0, color: "#8b8b8b", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "79px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#6c6c6c" }}>Last 30 days</p>
              <ChevronDown size={15.3} strokeWidth={1.51} style={{ width: "15.34px", height: "15.34px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
            </div>
            <div style={{ height: "39.44px", flexShrink: 0, borderRadius: "109.56px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8", display: "flex", flexDirection: "row", padding: "10.96px 10.96px 10.96px 10.96px", gap: "6.57px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <FileDownload size={17.5} strokeWidth={1.51} style={{ width: "17.53px", height: "17.53px", flexShrink: 0, color: "#8b8b8b", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "44px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 500, color: "#6c6c6c", lineHeight: "17.53px" }}>Export</p>
            </div>
          </div>
        </div>
        <div style={{ position: "absolute", left: "19.72px", top: "109.56px", width: "1245.74px", height: "147.91px", display: "flex", flexDirection: "row", gap: "16.43px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "299.11px", height: "147.91px", flexShrink: 0, borderRadius: "13.15px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #eeeeee, 0px 1.1px 4.38px 0px rgba(0, 0, 0, 0.05)", overflow: "hidden", position: "relative" }}>
            <div style={{ position: "absolute", left: "-2.19px", top: "-2.19px", width: "301.3px", height: "41.91px", display: "flex", flexDirection: "column", padding: "10.96px 10.96px 10.96px 10.96px", gap: "10.96px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6.57px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <Mail size={17.5} strokeWidth={1.51} style={{ width: "17.53px", height: "17.53px", flexShrink: 0, color: "#7d818c", display: "block" }} />
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "133px", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 500, color: "#7d818c" }}>Revenue per email</p>
                </div>
                <DotsVertical size={19.7} style={{ width: "19.72px", height: "19.72px", flexShrink: 0, color: "#c4c4c4", display: "block" }} />
              </div>
            </div>
            <div style={{ position: "absolute", left: "4.38px", top: "37.25px", width: "290.34px", height: "106.28px", borderRadius: "8.77px", background: "rgba(255, 255, 255, 0.91)", boxShadow: "0px 0px 1.1px 0px rgba(0, 0, 0, 0.25)", overflow: "hidden" }}>
              <div style={{ position: "absolute", left: "8.77px", top: "8.76px", width: "276.1px", height: "88.25px", display: "flex", flexDirection: "column", gap: "21.91px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ alignSelf: "stretch", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "28px", fontFamily: "'Geist'", fontSize: "21.91px", fontWeight: 500, color: "#222222" }}>$0.34</p>
                <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "8.77px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "3.29px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#fd4b23" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#fd4b23" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#fd4b23" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#fd4b23" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#fd4b23" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#fd4b23" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#fd4b23" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#fd4b23" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#fd4b23" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#fd4b23" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#fd4b23" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#fd4b23" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#fd4b23" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#fd4b23" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#fd4b23" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#fd4b23" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#fd4b23" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                  </div>
                  <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "2.19px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <ArrowUpRight size={19.7} style={{ width: "19.72px", height: "19.72px", flexShrink: 0, color: "#18b170", display: "block" }} />
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "147px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 500, color: "#18b170", lineHeight: "1.5" }}>
                      <span style={{ fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 500, color: "#18b170", lineHeight: "1.5" }}>{"+12% "}</span>
                      <span style={{ fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 500, color: "#222222", lineHeight: "1.5" }}>vs. prior period</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ width: "299.11px", height: "147.91px", flexShrink: 0, borderRadius: "13.15px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #eeeeee, 0px 1.1px 4.38px 0px rgba(0, 0, 0, 0.05)", overflow: "hidden", position: "relative" }}>
            <div style={{ position: "absolute", left: "-2.19px", top: "-2.19px", width: "301.3px", height: "41.91px", display: "flex", flexDirection: "column", padding: "10.96px 10.96px 10.96px 10.96px", gap: "10.96px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6.57px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <CursorPointer size={17.5} strokeWidth={1.51} style={{ width: "17.53px", height: "17.53px", flexShrink: 0, color: "#7d818c", display: "block" }} />
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "100px", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 500, color: "#7d818c" }}>Click-to-open</p>
                </div>
                <DotsVertical size={19.7} style={{ width: "19.72px", height: "19.72px", flexShrink: 0, color: "#c4c4c4", display: "block" }} />
              </div>
            </div>
            <div style={{ position: "absolute", left: "4.38px", top: "37.25px", width: "290.34px", height: "106.28px", borderRadius: "8.77px", background: "#ffffff", boxShadow: "0px 0px 1.1px 0px rgba(0, 0, 0, 0.25)", overflow: "hidden" }}>
              <div style={{ position: "absolute", left: "8.77px", top: "8.76px", width: "276.1px", height: "88.25px", display: "flex", flexDirection: "column", gap: "21.91px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ alignSelf: "stretch", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "28px", fontFamily: "'Geist'", fontSize: "21.91px", fontWeight: 500, color: "#222222" }}>18.9%</p>
                <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "8.77px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "3.29px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#0044ff" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#0044ff" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#0044ff" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#0044ff" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#0044ff" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#0044ff" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#0044ff" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#0044ff" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#0044ff" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#0044ff" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                  </div>
                  <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "2.19px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <ArrowUpRight size={19.7} style={{ width: "19.72px", height: "19.72px", flexShrink: 0, color: "#18b170", display: "block" }} />
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "146px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 500, color: "#18b170", lineHeight: "1.5" }}>
                      <span style={{ fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 500, color: "#18b170", lineHeight: "1.5" }}>{"+1.1% "}</span>
                      <span style={{ fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 500, color: "#222222", lineHeight: "1.5" }}>vs. prior period</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ width: "299.11px", height: "147.91px", flexShrink: 0, borderRadius: "13.15px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #eeeeee, 0px 1.1px 4.38px 0px rgba(0, 0, 0, 0.05)", overflow: "hidden", position: "relative" }}>
            <div style={{ position: "absolute", left: "0px", top: "0px", width: "299.11px", height: "41.91px", background: "#ffffff", display: "flex", flexDirection: "column", padding: "10.96px 10.96px 10.96px 10.96px", gap: "10.96px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6.57px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <BuildingStore size={17.5} strokeWidth={1.51} style={{ width: "17.53px", height: "17.53px", flexShrink: 0, color: "#7d818c", display: "block" }} />
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "161px", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 500, color: "#7d818c" }}>Store visits from email</p>
                </div>
                <DotsVertical size={19.7} style={{ width: "19.72px", height: "19.72px", flexShrink: 0, color: "#c4c4c4", display: "block" }} />
              </div>
            </div>
            <div style={{ position: "absolute", left: "4.38px", top: "37.25px", width: "290.34px", height: "106.28px", borderRadius: "8.77px", background: "rgba(255, 255, 255, 0.91)", boxShadow: "0px 0px 1.1px 0px rgba(0, 0, 0, 0.25)", overflow: "hidden" }}>
              <div style={{ position: "absolute", left: "8.77px", top: "8.76px", width: "276.1px", height: "88.25px", display: "flex", flexDirection: "column", gap: "21.91px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ alignSelf: "stretch", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "28px", fontFamily: "'Geist'", fontSize: "21.91px", fontWeight: 500, color: "#222222" }}>3,420</p>
                <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "8.77px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "3.29px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#18b170" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#18b170" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#18b170" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#18b170" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#18b170" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#18b170" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#18b170" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#18b170" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#18b170" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#18b170" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#18b170" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#18b170" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#18b170" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#18b170" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#18b170" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#18b170" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#18b170" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#18b170" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#18b170" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#18b170" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#18b170" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#18b170" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#18b170" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#18b170" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                  </div>
                  <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "2.19px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <ArrowUpRight size={19.7} style={{ width: "19.72px", height: "19.72px", flexShrink: 0, color: "#18b170", display: "block" }} />
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "151px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 500, color: "#18b170", lineHeight: "1.5" }}>
                      <span style={{ fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 500, color: "#18b170", lineHeight: "1.5" }}>{"+7.5% "}</span>
                      <span style={{ fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 500, color: "#222222", lineHeight: "1.5" }}>vs. prior period</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ width: "299.11px", height: "147.91px", flexShrink: 0, borderRadius: "13.15px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #eeeeee, 0px 1.1px 4.38px 0px rgba(0, 0, 0, 0.05)", overflow: "hidden", position: "relative" }}>
            <div style={{ position: "absolute", left: "-2.19px", top: "-2.19px", width: "301.3px", height: "41.91px", display: "flex", flexDirection: "column", padding: "10.96px 10.96px 10.96px 10.96px", gap: "10.96px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6.57px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <Moneybag size={17.5} strokeWidth={1.51} style={{ width: "17.53px", height: "17.53px", flexShrink: 0, color: "#7d818c", display: "block" }} />
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "133px", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 500, color: "#7d818c" }}>Attributed revenue</p>
                </div>
                <DotsVertical size={19.7} style={{ width: "19.72px", height: "19.72px", flexShrink: 0, color: "#c4c4c4", display: "block" }} />
              </div>
            </div>
            <div style={{ position: "absolute", left: "4.38px", top: "37.25px", width: "290.34px", height: "106.28px", borderRadius: "8.77px", background: "rgba(255, 255, 255, 0.91)", boxShadow: "0px 0px 1.1px 0px rgba(0, 0, 0, 0.25)", overflow: "hidden" }}>
              <div style={{ position: "absolute", left: "8.77px", top: "8.76px", width: "276.1px", height: "88.25px", display: "flex", flexDirection: "column", gap: "21.91px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ alignSelf: "stretch", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "28px", fontFamily: "'Geist'", fontSize: "21.91px", fontWeight: 500, color: "#222222" }}>$22,680</p>
                <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "8.77px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "3.29px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#f3c83d" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#f3c83d" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#f3c83d" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#f3c83d" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#f3c83d" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#f3c83d" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#f3c83d" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#f3c83d" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#f3c83d" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#f3c83d" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#f3c83d" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#f3c83d" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#f3c83d" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#f3c83d" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#f3c83d" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#f3c83d" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#f3c83d" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#f3c83d" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#f3c83d" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#f3c83d" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#f3c83d" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#f3c83d" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                    <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
                  </div>
                  <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "2.19px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <ArrowUpRight size={19.7} style={{ width: "19.72px", height: "19.72px", flexShrink: 0, color: "#18b170", display: "block" }} />
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "160px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 500, color: "#18b170", lineHeight: "1.5" }}>
                      <span style={{ fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 500, color: "#18b170", lineHeight: "1.5" }}>{"+19.6% "}</span>
                      <span style={{ fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 500, color: "#222222", lineHeight: "1.5" }}>vs. prior period</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ position: "absolute", left: "19.72px", top: "277.2px", width: "852.4px", height: "380.19px", borderRadius: "24.1px", background: "#fefefe", boxShadow: "inset 0 0 0 1.1px #eaeaea", overflow: "hidden", display: "flex", flexDirection: "column", padding: "23.01px 23.01px 23.01px 23.01px", gap: "17.53px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "4.38px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "146px", fontFamily: "'Geist'", fontSize: "17.53px", fontWeight: 500, color: "#141417", lineHeight: "1.5" }}>Best time to send</p>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "13.15px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "306px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#6b6b70" }}>Open rate by send time · last 90 days · Pacific Time</p>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6.57px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "37px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#6b6b70" }}>Lower</p>
                  <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "2.74px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <div style={{ width: "10.96px", height: "10.96px", flexShrink: 0, borderRadius: "2.74px", background: "linear-gradient(180deg, rgba(253, 75, 35, 0.16) 0%, rgba(253, 75, 35, 0.2) 100%), linear-gradient(#ffffff, #ffffff)", boxShadow: "inset 0 0 0 1px rgba(202, 60, 28, 0.13), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.35), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.04)" }} />
                    <div style={{ width: "10.96px", height: "10.96px", flexShrink: 0, borderRadius: "2.74px", background: "linear-gradient(180deg, rgba(253, 75, 35, 0.29) 0%, rgba(253, 75, 35, 0.35) 100%), linear-gradient(#ffffff, #ffffff)", boxShadow: "inset 0 0 0 1px rgba(202, 60, 28, 0.17), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.35), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.04)" }} />
                    <div style={{ width: "10.96px", height: "10.96px", flexShrink: 0, borderRadius: "2.74px", background: "linear-gradient(180deg, rgba(253, 75, 35, 0.42) 0%, rgba(253, 75, 35, 0.52) 100%), linear-gradient(#ffffff, #ffffff)", boxShadow: "inset 0 0 0 1px rgba(202, 60, 28, 0.21), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.18), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.09)" }} />
                    <div style={{ width: "10.96px", height: "10.96px", flexShrink: 0, borderRadius: "2.74px", background: "linear-gradient(180deg, rgba(253, 75, 35, 0.57) 0%, rgba(253, 75, 35, 0.69) 100%), linear-gradient(#ffffff, #ffffff)", boxShadow: "inset 0 0 0 1px rgba(202, 60, 28, 0.26), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.18), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.09)" }} />
                    <div style={{ width: "10.96px", height: "10.96px", flexShrink: 0, borderRadius: "2.74px", background: "linear-gradient(180deg, rgba(253, 75, 35, 0.71) 0%, rgba(253, 75, 35, 0.86) 100%), linear-gradient(#ffffff, #ffffff)", boxShadow: "inset 0 0 0 1px rgba(202, 60, 28, 0.3), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.18), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.09)" }} />
                  </div>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "40px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#6b6b70" }}>Higher</p>
                </div>
              </div>
            </div>
            <div style={{ flexShrink: 0, borderRadius: "8.77px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e0e0e3", overflow: "hidden", display: "flex", flexDirection: "row", padding: "7.67px 8.77px 7.67px 10.96px", gap: "6.57px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "61px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#4d4d52", lineHeight: "17.53px" }}>Open rate</p>
              <svg style={{ width: "13.15px", height: "13.15px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="13.15" height="13.15" viewBox="0 0 13.15 13.15" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 3.286 4.931)" d="M0.542312 -0.542312 C0.242801 -0.841823 -0.242801 -0.841823 -0.542312 -0.542312 C-0.841823 -0.242801 -0.841823 0.242801 -0.542312 0.542312 L0 0 L0.542312 -0.542312 Z M3.28691 3.28691 L2.7446 3.82922 C3.04411 4.12873 3.52971 4.12873 3.82922 3.82922 L3.28691 3.28691 Z M7.11613 0.542312 C7.41564 0.242801 7.41564 -0.242801 7.11613 -0.542312 C6.81662 -0.841823 6.33101 -0.841823 6.0315 -0.542312 L6.57382 0 L7.11613 0.542312 Z M0 0 L-0.542312 0.542312 L2.7446 3.82922 L3.28691 3.28691 L3.82922 2.7446 L0.542312 -0.542312 L0 0 Z M3.28691 3.28691 L3.82922 3.82922 L7.11613 0.542312 L6.57382 0 L6.0315 -0.542312 L2.7446 2.7446 L3.28691 3.28691 Z" fill="#6b6b70"/></svg>
            </div>
          </div>
          <div style={{ width: "808.58px", height: "271.46px", flexShrink: 0, position: "relative" }}>
            <p style={{ position: "absolute", left: "0px", top: "7.13px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "27px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#7d818c" }}>Mon</p>
            <p style={{ position: "absolute", left: "0px", top: "42.77px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "22px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#7d818c" }}>Tue</p>
            <p style={{ position: "absolute", left: "0px", top: "78.41px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "28px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#7d818c" }}>Wed</p>
            <p style={{ position: "absolute", left: "0px", top: "114.05px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "23px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#7d818c" }}>Thu</p>
            <p style={{ position: "absolute", left: "0px", top: "149.69px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "16px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#7d818c" }}>Fri</p>
            <p style={{ position: "absolute", left: "0px", top: "185.33px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "22px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#7d818c" }}>Sat</p>
            <p style={{ position: "absolute", left: "0px", top: "220.97px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "25px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#7d818c" }}>Sun</p>
            <p style={{ position: "absolute", left: "43.82px", top: "254.46px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "32px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#747474" }}>6 AM</p>
            <p style={{ position: "absolute", left: "139.96px", top: "254.46px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "32px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#747474" }}>8 AM</p>
            <p style={{ position: "absolute", left: "236.1px", top: "254.46px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "37px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#747474" }}>10 AM</p>
            <p style={{ position: "absolute", left: "332.24px", top: "254.46px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "37px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#747474" }}>12 PM</p>
            <p style={{ position: "absolute", left: "428.38px", top: "254.46px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "32px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#747474" }}>2 PM</p>
            <p style={{ position: "absolute", left: "524.52px", top: "254.46px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "32px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#747474" }}>4 PM</p>
            <p style={{ position: "absolute", left: "620.66px", top: "254.46px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "32px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#747474" }}>6 PM</p>
            <p style={{ position: "absolute", left: "716.8px", top: "254.46px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "32px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#747474" }}>8 PM</p>
            <p style={{ position: "absolute", left: "771.58px", top: "254.46px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "37px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#747474" }}>10 PM</p>
            <div style={{ position: "absolute", left: "43.82px", top: "0px", width: "91.76px", height: "31.26px", borderRadius: "5.48px", background: "linear-gradient(180deg, rgba(253, 75, 35, 0.12) 0%, rgba(253, 75, 35, 0.15) 100%), linear-gradient(#ffffff, #ffffff)", boxShadow: "inset 0 0 0 1px rgba(202, 60, 28, 0.11), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.35), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.04)" }} />
            <div style={{ position: "absolute", left: "139.96px", top: "0px", width: "91.76px", height: "31.26px", borderRadius: "5.48px", background: "linear-gradient(180deg, rgba(253, 75, 35, 0.58) 0%, rgba(253, 75, 35, 0.7) 100%), linear-gradient(#ffffff, #ffffff)", boxShadow: "inset 0 0 0 1px rgba(202, 60, 28, 0.26), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.18), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.09)" }} />
            <div style={{ position: "absolute", left: "236.1px", top: "0px", width: "91.76px", height: "31.26px", borderRadius: "5.48px", background: "linear-gradient(180deg, rgba(253, 75, 35, 0.42) 0%, rgba(253, 75, 35, 0.51) 100%), linear-gradient(#ffffff, #ffffff)", boxShadow: "inset 0 0 0 1px rgba(202, 60, 28, 0.21), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.18), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.09)" }} />
            <div style={{ position: "absolute", left: "332.24px", top: "0px", width: "91.76px", height: "31.26px", borderRadius: "5.48px", background: "linear-gradient(180deg, rgba(253, 75, 35, 0.31) 0%, rgba(253, 75, 35, 0.38) 100%), linear-gradient(#ffffff, #ffffff)", boxShadow: "inset 0 0 0 1px rgba(202, 60, 28, 0.17), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.35), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.04)" }} />
            <div style={{ position: "absolute", left: "428.38px", top: "0px", width: "91.76px", height: "31.26px", borderRadius: "5.48px", background: "linear-gradient(180deg, rgba(253, 75, 35, 0.31) 0%, rgba(253, 75, 35, 0.38) 100%), linear-gradient(#ffffff, #ffffff)", boxShadow: "inset 0 0 0 1px rgba(202, 60, 28, 0.18), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.35), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.04)" }} />
            <div style={{ position: "absolute", left: "524.52px", top: "0px", width: "91.76px", height: "31.26px", borderRadius: "5.48px", background: "linear-gradient(180deg, rgba(253, 75, 35, 0.28) 0%, rgba(253, 75, 35, 0.34) 100%), linear-gradient(#ffffff, #ffffff)", boxShadow: "inset 0 0 0 1px rgba(202, 60, 28, 0.17), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.35), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.04)" }} />
            <div style={{ position: "absolute", left: "620.66px", top: "0px", width: "91.76px", height: "31.26px", borderRadius: "5.48px", background: "linear-gradient(180deg, rgba(253, 75, 35, 0.39) 0%, rgba(253, 75, 35, 0.48) 100%), linear-gradient(#ffffff, #ffffff)", boxShadow: "inset 0 0 0 1px rgba(202, 60, 28, 0.2), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.35), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.04)" }} />
            <div style={{ position: "absolute", left: "716.8px", top: "0px", width: "91.76px", height: "31.26px", borderRadius: "5.48px", background: "linear-gradient(180deg, rgba(253, 75, 35, 0.29) 0%, rgba(253, 75, 35, 0.35) 100%), linear-gradient(#ffffff, #ffffff)", boxShadow: "inset 0 0 0 1px rgba(202, 60, 28, 0.17), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.35), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.04)" }} />
            <div style={{ position: "absolute", left: "43.82px", top: "35.64px", width: "91.76px", height: "31.26px", borderRadius: "5.48px", background: "linear-gradient(180deg, rgba(253, 75, 35, 0.33) 0%, rgba(253, 75, 35, 0.4) 100%), linear-gradient(#ffffff, #ffffff)", boxShadow: "inset 0 0 0 1px rgba(202, 60, 28, 0.18), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.35), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.04)" }} />
            <div style={{ position: "absolute", left: "139.96px", top: "35.64px", width: "91.76px", height: "31.26px", borderRadius: "5.48px", background: "linear-gradient(180deg, rgba(253, 75, 35, 0.75) 0%, rgba(253, 75, 35, 0.92) 100%), linear-gradient(#ffffff, #ffffff)", boxShadow: "inset 0 0 0 1px rgba(202, 60, 28, 0.32), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.18), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.09)" }} />
            <div style={{ position: "absolute", left: "236.1px", top: "35.64px", width: "91.76px", height: "31.26px", borderRadius: "5.48px", background: "linear-gradient(180deg, rgba(253, 75, 35, 0.57) 0%, rgba(253, 75, 35, 0.69) 100%), linear-gradient(#ffffff, #ffffff)", boxShadow: "inset 0 0 0 1px rgba(202, 60, 28, 0.26), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.18), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.09)" }} />
            <div style={{ position: "absolute", left: "332.24px", top: "35.64px", width: "91.76px", height: "31.26px", borderRadius: "5.48px", background: "linear-gradient(180deg, rgba(253, 75, 35, 0.46) 0%, rgba(253, 75, 35, 0.57) 100%), linear-gradient(#ffffff, #ffffff)", boxShadow: "inset 0 0 0 1px rgba(202, 60, 28, 0.23), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.18), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.09)" }} />
            <div style={{ position: "absolute", left: "428.38px", top: "35.64px", width: "91.76px", height: "31.26px", borderRadius: "5.48px", background: "linear-gradient(180deg, rgba(253, 75, 35, 0.32) 0%, rgba(253, 75, 35, 0.39) 100%), linear-gradient(#ffffff, #ffffff)", boxShadow: "inset 0 0 0 1px rgba(202, 60, 28, 0.18), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.35), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.04)" }} />
            <div style={{ position: "absolute", left: "524.52px", top: "35.64px", width: "91.76px", height: "31.26px", borderRadius: "5.48px", background: "linear-gradient(180deg, rgba(253, 75, 35, 0.27) 0%, rgba(253, 75, 35, 0.33) 100%), linear-gradient(#ffffff, #ffffff)", boxShadow: "inset 0 0 0 1px rgba(202, 60, 28, 0.16), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.35), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.04)" }} />
            <div style={{ position: "absolute", left: "620.66px", top: "35.64px", width: "91.76px", height: "31.26px", borderRadius: "5.48px", background: "linear-gradient(180deg, rgba(253, 75, 35, 0.54) 0%, rgba(253, 75, 35, 0.66) 100%), linear-gradient(#ffffff, #ffffff)", boxShadow: "inset 0 0 0 1px rgba(202, 60, 28, 0.25), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.18), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.09)" }} />
            <div style={{ position: "absolute", left: "716.8px", top: "35.64px", width: "91.76px", height: "31.26px", borderRadius: "5.48px", background: "linear-gradient(180deg, rgba(253, 75, 35, 0.28) 0%, rgba(253, 75, 35, 0.34) 100%), linear-gradient(#ffffff, #ffffff)", boxShadow: "inset 0 0 0 1px rgba(202, 60, 28, 0.16), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.35), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.04)" }} />
            <div style={{ position: "absolute", left: "43.82px", top: "71.28px", width: "91.76px", height: "31.26px", borderRadius: "5.48px", background: "linear-gradient(180deg, rgba(253, 75, 35, 0.33) 0%, rgba(253, 75, 35, 0.4) 100%), linear-gradient(#ffffff, #ffffff)", boxShadow: "inset 0 0 0 1px rgba(202, 60, 28, 0.18), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.35), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.04)" }} />
            <div style={{ position: "absolute", left: "139.96px", top: "71.28px", width: "91.76px", height: "31.26px", borderRadius: "5.48px", background: "linear-gradient(180deg, rgba(253, 75, 35, 0.69) 0%, rgba(253, 75, 35, 0.84) 100%), linear-gradient(#ffffff, #ffffff)", boxShadow: "inset 0 0 0 1px rgba(202, 60, 28, 0.3), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.18), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.09)" }} />
            <div style={{ position: "absolute", left: "236.1px", top: "71.28px", width: "91.76px", height: "31.26px", borderRadius: "5.48px", background: "linear-gradient(180deg, rgba(253, 75, 35, 0.56) 0%, rgba(253, 75, 35, 0.68) 100%), linear-gradient(#ffffff, #ffffff)", boxShadow: "inset 0 0 0 1px rgba(202, 60, 28, 0.26), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.18), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.09)" }} />
            <div style={{ position: "absolute", left: "332.24px", top: "71.28px", width: "91.76px", height: "31.26px", borderRadius: "5.48px", background: "linear-gradient(180deg, rgba(253, 75, 35, 0.46) 0%, rgba(253, 75, 35, 0.57) 100%), linear-gradient(#ffffff, #ffffff)", boxShadow: "inset 0 0 0 1px rgba(202, 60, 28, 0.23), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.18), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.09)" }} />
            <div style={{ position: "absolute", left: "428.38px", top: "71.28px", width: "91.76px", height: "31.26px", borderRadius: "5.48px", background: "linear-gradient(180deg, rgba(253, 75, 35, 0.26) 0%, rgba(253, 75, 35, 0.32) 100%), linear-gradient(#ffffff, #ffffff)", boxShadow: "inset 0 0 0 1px rgba(202, 60, 28, 0.16), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.35), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.04)" }} />
            <div style={{ position: "absolute", left: "524.52px", top: "71.28px", width: "91.76px", height: "31.26px", borderRadius: "5.48px", background: "linear-gradient(180deg, rgba(253, 75, 35, 0.27) 0%, rgba(253, 75, 35, 0.33) 100%), linear-gradient(#ffffff, #ffffff)", boxShadow: "inset 0 0 0 1px rgba(202, 60, 28, 0.16), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.35), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.04)" }} />
            <div style={{ position: "absolute", left: "620.66px", top: "71.28px", width: "91.76px", height: "31.26px", borderRadius: "5.48px", background: "linear-gradient(180deg, rgba(253, 75, 35, 0.47) 0%, rgba(253, 75, 35, 0.57) 100%), linear-gradient(#ffffff, #ffffff)", boxShadow: "inset 0 0 0 1px rgba(202, 60, 28, 0.23), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.18), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.09)" }} />
            <div style={{ position: "absolute", left: "716.8px", top: "71.28px", width: "91.76px", height: "31.26px", borderRadius: "5.48px", background: "linear-gradient(180deg, rgba(253, 75, 35, 0.33) 0%, rgba(253, 75, 35, 0.4) 100%), linear-gradient(#ffffff, #ffffff)", boxShadow: "inset 0 0 0 1px rgba(202, 60, 28, 0.18), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.35), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.04)" }} />
            <div style={{ position: "absolute", left: "43.82px", top: "106.92px", width: "91.76px", height: "31.26px", borderRadius: "5.48px", background: "linear-gradient(180deg, rgba(253, 75, 35, 0.18) 0%, rgba(253, 75, 35, 0.22) 100%), linear-gradient(#ffffff, #ffffff)", boxShadow: "inset 0 0 0 1px rgba(202, 60, 28, 0.13), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.35), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.04)" }} />
            <div style={{ position: "absolute", left: "139.96px", top: "106.92px", width: "91.76px", height: "31.26px", borderRadius: "5.48px", background: "linear-gradient(180deg, rgba(253, 75, 35, 0.69) 0%, rgba(253, 75, 35, 0.84) 100%), linear-gradient(#ffffff, #ffffff)", boxShadow: "inset 0 0 0 1px rgba(202, 60, 28, 0.3), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.18), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.09)" }} />
            <div style={{ position: "absolute", left: "236.1px", top: "106.92px", width: "91.76px", height: "31.26px", borderRadius: "5.48px", background: "linear-gradient(180deg, rgba(253, 75, 35, 0.59) 0%, rgba(253, 75, 35, 0.72) 100%), linear-gradient(#ffffff, #ffffff)", boxShadow: "inset 0 0 0 1px rgba(202, 60, 28, 0.27), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.18), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.09)" }} />
            <div style={{ position: "absolute", left: "332.24px", top: "106.92px", width: "91.76px", height: "31.26px", borderRadius: "5.48px", background: "linear-gradient(180deg, rgba(253, 75, 35, 0.46) 0%, rgba(253, 75, 35, 0.56) 100%), linear-gradient(#ffffff, #ffffff)", boxShadow: "inset 0 0 0 1px rgba(202, 60, 28, 0.22), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.18), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.09)" }} />
            <div style={{ position: "absolute", left: "428.38px", top: "106.92px", width: "91.76px", height: "31.26px", borderRadius: "5.48px", background: "linear-gradient(180deg, rgba(253, 75, 35, 0.29) 0%, rgba(253, 75, 35, 0.36) 100%), linear-gradient(#ffffff, #ffffff)", boxShadow: "inset 0 0 0 1px rgba(202, 60, 28, 0.17), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.35), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.04)" }} />
            <div style={{ position: "absolute", left: "524.52px", top: "106.92px", width: "91.76px", height: "31.26px", borderRadius: "5.48px", background: "linear-gradient(180deg, rgba(253, 75, 35, 0.4) 0%, rgba(253, 75, 35, 0.49) 100%), linear-gradient(#ffffff, #ffffff)", boxShadow: "inset 0 0 0 1px rgba(202, 60, 28, 0.2), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.35), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.04)" }} />
            <div style={{ position: "absolute", left: "620.66px", top: "106.92px", width: "91.76px", height: "31.26px", borderRadius: "5.48px", background: "linear-gradient(180deg, rgba(253, 75, 35, 0.58) 0%, rgba(253, 75, 35, 0.71) 100%), linear-gradient(#ffffff, #ffffff)", boxShadow: "inset 0 0 0 1px rgba(202, 60, 28, 0.26), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.18), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.09)" }} />
            <div style={{ position: "absolute", left: "716.8px", top: "106.92px", width: "91.76px", height: "31.26px", borderRadius: "5.48px", background: "linear-gradient(180deg, rgba(253, 75, 35, 0.31) 0%, rgba(253, 75, 35, 0.38) 100%), linear-gradient(#ffffff, #ffffff)", boxShadow: "inset 0 0 0 1px rgba(202, 60, 28, 0.17), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.35), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.04)" }} />
            <div style={{ position: "absolute", left: "43.82px", top: "142.56px", width: "91.76px", height: "31.26px", borderRadius: "5.48px", background: "linear-gradient(180deg, rgba(253, 75, 35, 0.17) 0%, rgba(253, 75, 35, 0.2) 100%), linear-gradient(#ffffff, #ffffff)", boxShadow: "inset 0 0 0 1px rgba(202, 60, 28, 0.13), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.35), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.04)" }} />
            <div style={{ position: "absolute", left: "139.96px", top: "142.56px", width: "91.76px", height: "31.26px", borderRadius: "5.48px", background: "linear-gradient(180deg, rgba(253, 75, 35, 0.57) 0%, rgba(253, 75, 35, 0.69) 100%), linear-gradient(#ffffff, #ffffff)", boxShadow: "inset 0 0 0 1px rgba(202, 60, 28, 0.26), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.18), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.09)" }} />
            <div style={{ position: "absolute", left: "236.1px", top: "142.56px", width: "91.76px", height: "31.26px", borderRadius: "5.48px", background: "linear-gradient(180deg, rgba(253, 75, 35, 0.45) 0%, rgba(253, 75, 35, 0.55) 100%), linear-gradient(#ffffff, #ffffff)", boxShadow: "inset 0 0 0 1px rgba(202, 60, 28, 0.22), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.18), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.09)" }} />
            <div style={{ position: "absolute", left: "332.24px", top: "142.56px", width: "91.76px", height: "31.26px", borderRadius: "5.48px", background: "linear-gradient(180deg, rgba(253, 75, 35, 0.28) 0%, rgba(253, 75, 35, 0.34) 100%), linear-gradient(#ffffff, #ffffff)", boxShadow: "inset 0 0 0 1px rgba(202, 60, 28, 0.16), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.35), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.04)" }} />
            <div style={{ position: "absolute", left: "428.38px", top: "142.56px", width: "91.76px", height: "31.26px", borderRadius: "5.48px", background: "linear-gradient(180deg, rgba(253, 75, 35, 0.15) 0%, rgba(253, 75, 35, 0.18) 100%), linear-gradient(#ffffff, #ffffff)", boxShadow: "inset 0 0 0 1px rgba(202, 60, 28, 0.12), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.35), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.04)" }} />
            <div style={{ position: "absolute", left: "524.52px", top: "142.56px", width: "91.76px", height: "31.26px", borderRadius: "5.48px", background: "linear-gradient(180deg, rgba(253, 75, 35, 0.15) 0%, rgba(253, 75, 35, 0.18) 100%), linear-gradient(#ffffff, #ffffff)", boxShadow: "inset 0 0 0 1px rgba(202, 60, 28, 0.12), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.35), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.04)" }} />
            <div style={{ position: "absolute", left: "620.66px", top: "142.56px", width: "91.76px", height: "31.26px", borderRadius: "5.48px", background: "linear-gradient(180deg, rgba(253, 75, 35, 0.26) 0%, rgba(253, 75, 35, 0.31) 100%), linear-gradient(#ffffff, #ffffff)", boxShadow: "inset 0 0 0 1px rgba(202, 60, 28, 0.16), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.35), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.04)" }} />
            <div style={{ position: "absolute", left: "716.8px", top: "142.56px", width: "91.76px", height: "31.26px", borderRadius: "5.48px", background: "linear-gradient(180deg, rgba(253, 75, 35, 0.16) 0%, rgba(253, 75, 35, 0.19) 100%), linear-gradient(#ffffff, #ffffff)", boxShadow: "inset 0 0 0 1px rgba(202, 60, 28, 0.12), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.35), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.04)" }} />
            <div style={{ position: "absolute", left: "43.82px", top: "178.2px", width: "91.76px", height: "31.26px", borderRadius: "5.48px", background: "linear-gradient(180deg, rgba(253, 75, 35, 0.16) 0%, rgba(253, 75, 35, 0.2) 100%), linear-gradient(#ffffff, #ffffff)", boxShadow: "inset 0 0 0 1px rgba(202, 60, 28, 0.13), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.35), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.04)" }} />
            <div style={{ position: "absolute", left: "139.96px", top: "178.2px", width: "91.76px", height: "31.26px", borderRadius: "5.48px", background: "linear-gradient(180deg, rgba(253, 75, 35, 0.31) 0%, rgba(253, 75, 35, 0.37) 100%), linear-gradient(#ffffff, #ffffff)", boxShadow: "inset 0 0 0 1px rgba(202, 60, 28, 0.17), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.35), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.04)" }} />
            <div style={{ position: "absolute", left: "236.1px", top: "178.2px", width: "91.76px", height: "31.26px", borderRadius: "5.48px", background: "linear-gradient(180deg, rgba(253, 75, 35, 0.61) 0%, rgba(253, 75, 35, 0.74) 100%), linear-gradient(#ffffff, #ffffff)", boxShadow: "inset 0 0 0 1px rgba(202, 60, 28, 0.27), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.18), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.09)" }} />
            <div style={{ position: "absolute", left: "332.24px", top: "178.2px", width: "91.76px", height: "31.26px", borderRadius: "5.48px", background: "linear-gradient(180deg, rgba(253, 75, 35, 0.46) 0%, rgba(253, 75, 35, 0.56) 100%), linear-gradient(#ffffff, #ffffff)", boxShadow: "inset 0 0 0 1px rgba(202, 60, 28, 0.22), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.18), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.09)" }} />
            <div style={{ position: "absolute", left: "428.38px", top: "178.2px", width: "91.76px", height: "31.26px", borderRadius: "5.48px", background: "linear-gradient(180deg, rgba(253, 75, 35, 0.27) 0%, rgba(253, 75, 35, 0.33) 100%), linear-gradient(#ffffff, #ffffff)", boxShadow: "inset 0 0 0 1px rgba(202, 60, 28, 0.16), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.35), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.04)" }} />
            <div style={{ position: "absolute", left: "524.52px", top: "178.2px", width: "91.76px", height: "31.26px", borderRadius: "5.48px", background: "linear-gradient(180deg, rgba(253, 75, 35, 0.29) 0%, rgba(253, 75, 35, 0.35) 100%), linear-gradient(#ffffff, #ffffff)", boxShadow: "inset 0 0 0 1px rgba(202, 60, 28, 0.17), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.35), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.04)" }} />
            <div style={{ position: "absolute", left: "620.66px", top: "178.2px", width: "91.76px", height: "31.26px", borderRadius: "5.48px", background: "linear-gradient(180deg, rgba(253, 75, 35, 0.27) 0%, rgba(253, 75, 35, 0.33) 100%), linear-gradient(#ffffff, #ffffff)", boxShadow: "inset 0 0 0 1px rgba(202, 60, 28, 0.16), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.35), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.04)" }} />
            <div style={{ position: "absolute", left: "716.8px", top: "178.2px", width: "91.76px", height: "31.26px", borderRadius: "5.48px", background: "linear-gradient(180deg, rgba(253, 75, 35, 0.15) 0%, rgba(253, 75, 35, 0.19) 100%), linear-gradient(#ffffff, #ffffff)", boxShadow: "inset 0 0 0 1px rgba(202, 60, 28, 0.12), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.35), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.04)" }} />
            <div style={{ position: "absolute", left: "43.82px", top: "213.84px", width: "91.76px", height: "31.26px", borderRadius: "5.48px", background: "linear-gradient(180deg, rgba(253, 75, 35, 0.19) 0%, rgba(253, 75, 35, 0.24) 100%), linear-gradient(#ffffff, #ffffff)", boxShadow: "inset 0 0 0 1px rgba(202, 60, 28, 0.14), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.35), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.04)" }} />
            <div style={{ position: "absolute", left: "139.96px", top: "213.84px", width: "91.76px", height: "31.26px", borderRadius: "5.48px", background: "linear-gradient(180deg, rgba(253, 75, 35, 0.26) 0%, rgba(253, 75, 35, 0.32) 100%), linear-gradient(#ffffff, #ffffff)", boxShadow: "inset 0 0 0 1px rgba(202, 60, 28, 0.16), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.35), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.04)" }} />
            <div style={{ position: "absolute", left: "236.1px", top: "213.84px", width: "91.76px", height: "31.26px", borderRadius: "5.48px", background: "linear-gradient(180deg, rgba(253, 75, 35, 0.57) 0%, rgba(253, 75, 35, 0.69) 100%), linear-gradient(#ffffff, #ffffff)", boxShadow: "inset 0 0 0 1px rgba(202, 60, 28, 0.26), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.18), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.09)" }} />
            <div style={{ position: "absolute", left: "332.24px", top: "213.84px", width: "91.76px", height: "31.26px", borderRadius: "5.48px", background: "linear-gradient(180deg, rgba(253, 75, 35, 0.45) 0%, rgba(253, 75, 35, 0.55) 100%), linear-gradient(#ffffff, #ffffff)", boxShadow: "inset 0 0 0 1px rgba(202, 60, 28, 0.22), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.18), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.09)" }} />
            <div style={{ position: "absolute", left: "428.38px", top: "213.84px", width: "91.76px", height: "31.26px", borderRadius: "5.48px", background: "linear-gradient(180deg, rgba(253, 75, 35, 0.27) 0%, rgba(253, 75, 35, 0.33) 100%), linear-gradient(#ffffff, #ffffff)", boxShadow: "inset 0 0 0 1px rgba(202, 60, 28, 0.16), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.35), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.04)" }} />
            <div style={{ position: "absolute", left: "524.52px", top: "213.84px", width: "91.76px", height: "31.26px", borderRadius: "5.48px", background: "linear-gradient(180deg, rgba(253, 75, 35, 0.28) 0%, rgba(253, 75, 35, 0.34) 100%), linear-gradient(#ffffff, #ffffff)", boxShadow: "inset 0 0 0 1px rgba(202, 60, 28, 0.16), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.35), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.04)" }} />
            <div style={{ position: "absolute", left: "620.66px", top: "213.84px", width: "91.76px", height: "31.26px", borderRadius: "5.48px", background: "linear-gradient(180deg, rgba(253, 75, 35, 0.44) 0%, rgba(253, 75, 35, 0.54) 100%), linear-gradient(#ffffff, #ffffff)", boxShadow: "inset 0 0 0 1px rgba(202, 60, 28, 0.22), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.18), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.09)" }} />
            <div style={{ position: "absolute", left: "716.8px", top: "213.84px", width: "91.76px", height: "31.26px", borderRadius: "5.48px", background: "linear-gradient(180deg, rgba(253, 75, 35, 0.41) 0%, rgba(253, 75, 35, 0.5) 100%), linear-gradient(#ffffff, #ffffff)", boxShadow: "inset 0 0 0 1px rgba(202, 60, 28, 0.21), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 6.57px 0px rgba(255, 255, 255, 0.35), 0px 1.1px 1.64px 0px rgba(13, 13, 18, 0.04)" }} />
          </div>
        </div>
        <div style={{ position: "absolute", left: "891.85px", top: "277.2px", width: "373.61px", height: "380.19px", borderRadius: "24.1px", background: "#fefefe", boxShadow: "inset 0 0 0 1.1px #eaeaea", overflow: "hidden", display: "flex", flexDirection: "column", padding: "23.01px 14.25px 23.01px 14.25px", gap: "10.96px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 8.77px 0px 8.77px", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "4.38px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "102px", fontFamily: "'Geist'", fontSize: "17.53px", fontWeight: 500, color: "#141417", lineHeight: "1.5" }}>Email funnel</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "171px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#6b6b70" }}>Avg. campaign · last 30 days</p>
            </div>
            <div style={{ width: "37.25px", height: "37.25px", flexShrink: 0, borderRadius: "8.77px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8, 0px 1.1px 1.1px 0px rgba(13, 13, 18, 0.08)", display: "flex", flexDirection: "row", gap: "6.57px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <DotsVertical size={19.7} style={{ width: "19.72px", height: "19.72px", flexShrink: 0, color: "#c4c4c4", display: "block" }} />
            </div>
          </div>
          <div style={{ width: "347.31px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "4.38px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "347.31px", height: "66px", flexShrink: 0, borderRadius: "8.77px", display: "flex", flexDirection: "row", padding: "0px 8.77px 0px 8.77px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.19px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "69px", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 500, color: "#222222" }}>Delivered</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "111px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#999999" }}>Avg. per campaign</p>
              </div>
              <div style={{ flex: "1 1 0", minWidth: 0, height: "1px", flexShrink: 0 }} />
              <div style={{ width: "197.21px", height: "66px", flexShrink: 0, position: "relative" }}>
                <svg style={{ position: "absolute", left: "0px", top: "0px", width: "197.21px", height: "66px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="197.21" height="66" viewBox="0 0 197.21 66" fill="none" overflow="visible"><defs><linearGradient id="g20_xaxj" gradientUnits="userSpaceOnUse" x1="98.61" y1="0.00" x2="98.61" y2="66.00"><stop offset="0" stopColor="#fd613d"/><stop offset="1" stopColor="#fd4b23"/></linearGradient></defs><path transform="matrix(1 0 0 1 0 0)" d="M4.06543 9.22056 C2.1507 4.87788 5.33098 0 10.077 0 L187.133 0 C191.879 0 195.059 4.87789 193.145 9.22057 L169.838 62.0806 C168.788 64.4627 166.43 66 163.827 66 L33.3835 66 C30.7801 66 28.4222 64.4627 27.3719 62.0806 L4.06543 9.22056 Z" fill="url(#g20_xaxj)"/><path transform="matrix(1 0 0 1 0 0)" d="M169.838 62.0806 L170.753 62.484 L169.838 62.0806 Z M193.145 9.22057 L194.06 9.62401 L193.145 9.22057 Z M10.077 0 L10.077 1 L187.133 1 L187.133 0 L187.133 -1 L10.077 -1 L10.077 0 Z M193.145 9.22057 L192.23 8.81714 L168.923 61.6771 L169.838 62.0806 L170.753 62.484 L194.06 9.62401 L193.145 9.22057 Z M163.827 66 L163.827 65 L33.3835 65 L33.3835 66 L33.3835 67 L163.827 67 L163.827 66 Z M27.3719 62.0806 L28.2869 61.6771 L4.98044 8.81713 L4.06543 9.22056 L3.15042 9.624 L26.4569 62.484 L27.3719 62.0806 Z M33.3835 66 L33.3835 65 C31.1763 65 29.1773 63.6967 28.2869 61.6771 L27.3719 62.0806 L26.4569 62.484 C27.6671 65.2288 30.3838 67 33.3835 67 L33.3835 66 Z M169.838 62.0806 L168.923 61.6771 C168.033 63.6967 166.034 65 163.827 65 L163.827 66 L163.827 67 C166.826 67 169.543 65.2288 170.753 62.484 L169.838 62.0806 Z M187.133 0 L187.133 1 C191.157 1 193.853 5.13544 192.23 8.81714 L193.145 9.22057 L194.06 9.62401 C196.266 4.62034 192.601 -1 187.133 -1 L187.133 0 Z M10.077 0 L10.077 -1 C4.6086 -1 0.944257 4.62033 3.15042 9.624 L4.06543 9.22056 L4.98044 8.81713 C3.35715 5.13543 6.05336 1 10.077 1 L10.077 0 Z" fill="#c53b1b" fillOpacity="0.38"/></svg>
                <p style={{ position: "absolute", left: "77.6px", top: "23px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "42px", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 500, color: "#ffffff" }}>17,512</p>
              </div>
            </div>
            <div style={{ width: "347.31px", height: "66px", flexShrink: 0, borderRadius: "8.77px", display: "flex", flexDirection: "row", padding: "0px 8.77px 0px 8.77px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.19px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "57px", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 500, color: "#222222" }}>Opened</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "113px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#222222" }}>
                  <span style={{ fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#222222" }}>52.4%</span>
                  <span style={{ fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#999999" }}>{" of delivered"}</span>
                </p>
              </div>
              <div style={{ flex: "1 1 0", minWidth: 0, height: "1px", flexShrink: 0 }} />
              <div style={{ width: "197.21px", height: "66px", flexShrink: 0, position: "relative" }}>
                <svg style={{ position: "absolute", left: "29.1px", top: "0px", width: "139px", height: "66px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="139" height="66" viewBox="0 0 139 66" fill="none" overflow="visible"><defs><linearGradient id="g21_xaxn" gradientUnits="userSpaceOnUse" x1="69.50" y1="0.00" x2="69.50" y2="66.00"><stop offset="0" stopColor="#fd7a5c"/><stop offset="1" stopColor="#fd6846"/></linearGradient></defs><path transform="matrix(1 0 0 1 0 0)" d="M3.53346 8.97647 C1.83662 4.66579 5.01425 0 9.64688 0 L129.353 0 C133.986 0 137.163 4.66579 135.467 8.97646 L114.659 61.8365 C113.67 64.3485 111.245 66 108.546 66 L30.4545 66 C27.7548 66 25.3299 64.3485 24.3411 61.8365 L3.53346 8.97647 Z" fill="url(#g21_xaxn)"/><path transform="matrix(1 0 0 1 0 0)" d="M24.3411 61.8365 L23.4106 62.2027 L24.3411 61.8365 Z M114.659 61.8365 L113.728 61.4702 L114.659 61.8365 Z M135.467 8.97646 L134.536 8.61018 L135.467 8.97646 Z M9.64688 0 L9.64688 1 L129.353 1 L129.353 0 L129.353 -1 L9.64688 -1 L9.64688 0 Z M135.467 8.97646 L134.536 8.61018 L113.728 61.4702 L114.659 61.8365 L115.589 62.2027 L136.397 9.34274 L135.467 8.97646 Z M108.546 66 L108.546 65 L30.4545 65 L30.4545 66 L30.4545 67 L108.546 67 L108.546 66 Z M24.3411 61.8365 L25.2716 61.4702 L4.46397 8.61019 L3.53346 8.97647 L2.60296 9.34275 L23.4106 62.2027 L24.3411 61.8365 Z M30.4545 66 L30.4545 65 C28.1657 65 26.1099 63.5999 25.2716 61.4702 L24.3411 61.8365 L23.4106 62.2027 C24.5499 65.0972 27.3439 67 30.4545 67 L30.4545 66 Z M114.659 61.8365 L113.728 61.4702 C112.89 63.5999 110.834 65 108.546 65 L108.546 66 L108.546 67 C111.656 67 114.45 65.0972 115.589 62.2027 L114.659 61.8365 Z M129.353 0 L129.353 1 C133.281 1 135.975 4.95562 134.536 8.61018 L135.467 8.97646 L136.397 9.34274 C138.352 4.37595 134.691 -1 129.353 -1 L129.353 0 Z M9.64688 0 L9.64688 -1 C4.30913 -1 0.647849 4.37596 2.60296 9.34275 L3.53346 8.97647 L4.46397 8.61019 C3.0254 4.95562 5.71937 1 9.64688 1 L9.64688 0 Z" fill="#c55137" fillOpacity="0.38"/></svg>
                <p style={{ position: "absolute", left: "80.6px", top: "23px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "36px", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 500, color: "#ffffff" }}>9,175</p>
              </div>
            </div>
            <div style={{ width: "347.31px", height: "66px", flexShrink: 0, borderRadius: "8.77px", display: "flex", flexDirection: "row", padding: "0px 8.77px 0px 8.77px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.19px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "54px", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 500, color: "#222222" }}>Clicked</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "91px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#222222" }}>
                  <span style={{ fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#222222" }}>18.9%</span>
                  <span style={{ fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#999999" }}>{" of opens"}</span>
                </p>
              </div>
              <div style={{ flex: "1 1 0", minWidth: 0, height: "1px", flexShrink: 0 }} />
              <div style={{ width: "197.21px", height: "66px", flexShrink: 0, position: "relative" }}>
                <svg style={{ position: "absolute", left: "55.08px", top: "0px", width: "87.05px", height: "66px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="87.05" height="66" viewBox="0 0 87.05 66" fill="none" overflow="visible"><defs><linearGradient id="g22_xaxq" gradientUnits="userSpaceOnUse" x1="43.53" y1="0.00" x2="43.53" y2="66.00"><stop offset="0" stopColor="#fe947b"/><stop offset="1" stopColor="#fe8569"/></linearGradient></defs><path transform="matrix(1 0 0 1 0 0)" d="M0.530747 7.06236 C0.244288 3.25061 3.25977 0 7.08227 0 L79.9667 0 C83.7896 0 86.8052 3.25125 86.5181 7.06334 L82.5376 59.9233 C82.2795 63.3508 79.4233 66 75.9861 66 L11.0548 66 C7.61725 66 4.76086 63.3502 4.50326 59.9224 L0.530747 7.06236 Z" fill="url(#g22_xaxq)"/><path transform="matrix(1 0 0 1 0 0)" d="M4.50326 59.9224 L3.50607 59.9973 L4.50326 59.9224 Z M82.5376 59.9233 L81.5404 59.8482 L82.5376 59.9233 Z M7.08227 0 L7.08227 1 L79.9667 1 L79.9667 0 L79.9667 -1 L7.08227 -1 L7.08227 0 Z M86.5181 7.06334 L85.5209 6.98825 L81.5404 59.8482 L82.5376 59.9233 L83.5348 59.9984 L87.5153 7.13843 L86.5181 7.06334 Z M75.9861 66 L75.9861 65 L11.0548 65 L11.0548 66 L11.0548 67 L75.9861 67 L75.9861 66 Z M4.50326 59.9224 L5.50044 59.8474 L1.52793 6.98742 L0.530747 7.06236 L-0.466441 7.1373 L3.50607 59.9973 L4.50326 59.9224 Z M11.0548 66 L11.0548 65 C8.14047 65 5.71884 62.7535 5.50044 59.8474 L4.50326 59.9224 L3.50607 59.9973 C3.80289 63.9469 7.09404 67 11.0548 67 L11.0548 66 Z M82.5376 59.9233 L81.5404 59.8482 C81.3216 62.754 78.9001 65 75.9861 65 L75.9861 66 L75.9861 67 C79.9464 67 83.2374 63.9475 83.5348 59.9984 L82.5376 59.9233 Z M79.9667 0 L79.9667 1 C83.2077 1 85.7643 3.75638 85.5209 6.98825 L86.5181 7.06334 L87.5153 7.13843 C87.846 2.74611 84.3714 -1 79.9667 -1 L79.9667 0 Z M7.08227 0 L7.08227 -1 C2.67796 -1 -0.796501 2.74537 -0.466441 7.1373 L0.530747 7.06236 L1.52793 6.98742 C1.28508 3.75584 3.84159 1 7.08227 1 L7.08227 0 Z" fill="#c66852" fillOpacity="0.38"/></svg>
                <p style={{ position: "absolute", left: "80.6px", top: "23px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "36px", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 500, color: "#ffffff" }}>1,734</p>
              </div>
            </div>
            <div style={{ width: "347.31px", height: "66px", flexShrink: 0, borderRadius: "8.77px", display: "flex", flexDirection: "row", padding: "0px 8.77px 0px 8.77px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.19px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "77px", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 500, color: "#222222" }}>Purchased</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "89px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#222222" }}>
                  <span style={{ fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#222222" }}>18.0%</span>
                  <span style={{ fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#999999" }}>{" of clicks"}</span>
                </p>
              </div>
              <div style={{ flex: "1 1 0", minWidth: 0, height: "1px", flexShrink: 0 }} />
              <div style={{ width: "197.21px", height: "66px", flexShrink: 0, position: "relative" }}>
                <svg style={{ position: "absolute", left: "60.05px", top: "0px", width: "77.12px", height: "66px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="77.12" height="66" viewBox="0 0 77.12 66" fill="none" overflow="visible"><defs><linearGradient id="g23_xaxt" gradientUnits="userSpaceOnUse" x1="38.56" y1="0.00" x2="38.56" y2="66.00"><stop offset="0" stopColor="#feac9b"/><stop offset="1" stopColor="#fea18d"/></linearGradient></defs><path transform="matrix(1 0 0 1 0 0)" d="M0.021973 6.5919 C0.00984952 2.95486 2.95487 0 6.59194 0 L70.5281 0 C74.1651 0 77.1102 2.95485 77.098 6.5919 L76.9218 59.4519 C76.9098 63.0718 73.9718 66 70.3519 66 L6.76814 66 C3.14818 66 0.210239 63.0718 0.198173 59.4519 L0.021973 6.5919 Z" fill="url(#g23_xaxt)"/><path transform="matrix(1 0 0 1 0 0)" d="M76.9218 59.4519 L77.9218 59.4552 L76.9218 59.4519 Z M77.098 6.5919 L76.098 6.58857 L77.098 6.5919 Z M6.59194 0 L6.59194 1 L70.5281 1 L70.5281 0 L70.5281 -1 L6.59194 -1 L6.59194 0 Z M77.098 6.5919 L76.098 6.58857 L75.9218 59.4486 L76.9218 59.4519 L77.9218 59.4552 L78.098 6.59523 L77.098 6.5919 Z M70.3519 66 L70.3519 65 L6.76814 65 L6.76814 66 L6.76814 67 L70.3519 67 L70.3519 66 Z M0.198173 59.4519 L1.19817 59.4486 L1.02197 6.58857 L0.021973 6.5919 L-0.978021 6.59523 L-0.801821 59.4552 L0.198173 59.4519 Z M6.76814 66 L6.76814 65 C3.69916 65 1.2084 62.5175 1.19817 59.4486 L0.198173 59.4519 L-0.801821 59.4552 C-0.787918 63.6262 2.5972 67 6.76814 67 L6.76814 66 Z M76.9218 59.4519 L75.9218 59.4486 C75.9116 62.5175 73.4208 65 70.3519 65 L70.3519 66 L70.3519 67 C74.5228 67 77.9079 63.6262 77.9218 59.4552 L76.9218 59.4519 Z M70.5281 0 L70.5281 1 C73.6116 1 76.1083 3.5051 76.098 6.58857 L77.098 6.5919 L78.098 6.59523 C78.112 2.40461 74.7187 -1 70.5281 -1 L70.5281 0 Z M6.59194 0 L6.59194 -1 C2.40128 -1 -0.99199 2.40461 -0.978021 6.59523 L0.021973 6.5919 L1.02197 6.58857 C1.01169 3.50511 3.50846 1 6.59194 1 L6.59194 0 Z" fill="#c67e6e" fillOpacity="0.38"/></svg>
                <p style={{ position: "absolute", left: "85.6px", top: "23px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "26px", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 500, color: "#b13519" }}>312</p>
              </div>
            </div>
          </div>
        </div>
        <div style={{ position: "absolute", left: "19.72px", top: "677.1px", width: "612.46px", height: "380.19px", borderRadius: "24.1px", background: "#fefefe", boxShadow: "inset 0 0 0 1.1px #eaeaea", overflow: "hidden", display: "flex", flexDirection: "column", padding: "23.01px 23.01px 23.01px 23.01px", gap: "17.53px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "4.38px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "177px", fontFamily: "'Geist'", fontSize: "17.53px", fontWeight: 500, color: "#141417", lineHeight: "1.5" }}>Channel performance</p>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "13.15px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "281px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#6b6b70" }}>Attributed revenue · $31,830 across 4 channels</p>
              </div>
            </div>
            <div style={{ flexShrink: 0, borderRadius: "8.77px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e0e0e3", overflow: "hidden", display: "flex", flexDirection: "row", padding: "7.67px 8.77px 7.67px 10.96px", gap: "6.57px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "69px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#4d4d52", lineHeight: "17.53px" }}>By revenue</p>
              <svg style={{ width: "13.15px", height: "13.15px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="13.15" height="13.15" viewBox="0 0 13.15 13.15" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 3.286 4.931)" d="M0.542312 -0.542312 C0.242801 -0.841823 -0.242801 -0.841823 -0.542312 -0.542312 C-0.841823 -0.242801 -0.841823 0.242801 -0.542312 0.542312 L0 0 L0.542312 -0.542312 Z M3.28691 3.28691 L2.7446 3.82922 C3.04411 4.12873 3.52971 4.12873 3.82922 3.82922 L3.28691 3.28691 Z M7.11613 0.542312 C7.41564 0.242801 7.41564 -0.242801 7.11613 -0.542312 C6.81662 -0.841823 6.33101 -0.841823 6.0315 -0.542312 L6.57382 0 L7.11613 0.542312 Z M0 0 L-0.542312 0.542312 L2.7446 3.82922 L3.28691 3.28691 L3.82922 2.7446 L0.542312 -0.542312 L0 0 Z M3.28691 3.28691 L3.82922 3.82922 L7.11613 0.542312 L6.57382 0 L6.0315 -0.542312 L2.7446 2.7446 L3.28691 3.28691 Z" fill="#6b6b70"/></svg>
            </div>
          </div>
          <div style={{ width: "568.64px", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "568.64px", height: "39.44px", flexShrink: 0, borderRadius: "8.77px", background: "#fafafa", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "232px", height: "39.44px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "51px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#7d818c" }}>Channel</p>
              </div>
              <div style={{ width: "104px", height: "39.44px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "54px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#7d818c" }}>Revenue</p>
              </div>
              <div style={{ width: "92px", height: "39.44px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "62px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#7d818c" }}>Conv. rate</p>
              </div>
              <div style={{ width: "140.64px", height: "39.44px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "36px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#7d818c" }}>Share</p>
              </div>
            </div>
            <div style={{ width: "568.64px", height: "52.59px", flexShrink: 0, borderRadius: "8.77px", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "232px", height: "52.59px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10.96px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ width: "30.68px", height: "30.68px", flexShrink: 0, borderRadius: "8.77px", background: "rgba(253, 75, 35, 0.12)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                    <MailBulk size={17.5} strokeWidth={1.51} style={{ width: "17.53px", height: "17.53px", flexShrink: 0, color: "#fd4b23", display: "block" }} />
                  </div>
                  <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.19px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "37px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 500, color: "#222222" }}>Email</p>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "116px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#999999" }}>Campaigns & flows</p>
                  </div>
                </div>
              </div>
              <div style={{ width: "104px", height: "52.59px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "58px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 500, color: "#222222" }}>$22,680</p>
              </div>
              <div style={{ width: "92px", height: "52.59px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "29px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#2d2d2d" }}>1.8%</p>
              </div>
              <div style={{ width: "140.64px", height: "52.59px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "2.63px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                    <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                    <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                    <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                    <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                    <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                    <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                    <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                    <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                    <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "rgba(253, 75, 35, 0.16)" }} />
                    <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "rgba(253, 75, 35, 0.16)" }} />
                    <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "rgba(253, 75, 35, 0.16)" }} />
                    <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "rgba(253, 75, 35, 0.16)" }} />
                  </div>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "27px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#999999" }}>70%</p>
                </div>
              </div>
            </div>
            <div style={{ width: "568.64px", height: "1.1px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ flex: "1 1 0", minWidth: 0, height: "1.1px", flexShrink: 0, background: "#eeeeee" }} />
            </div>
            <div style={{ width: "568.64px", height: "52.59px", flexShrink: 0, borderRadius: "8.77px", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "232px", height: "52.59px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10.96px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ width: "30.68px", height: "30.68px", flexShrink: 0, borderRadius: "8.77px", background: "rgba(255, 114, 171, 0.12)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                    <BrowserBulk size={17.5} strokeWidth={1.51} style={{ width: "17.53px", height: "17.53px", flexShrink: 0, color: "#ff72ab", display: "block" }} />
                  </div>
                  <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.19px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "57px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 500, color: "#222222" }}>Pop-ups</p>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "114px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#999999" }}>4 live signup forms</p>
                  </div>
                </div>
              </div>
              <div style={{ width: "104px", height: "52.59px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "49px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 500, color: "#222222" }}>$4,860</p>
              </div>
              <div style={{ width: "92px", height: "52.59px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "29px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#2d2d2d" }}>1.2%</p>
              </div>
              <div style={{ width: "140.64px", height: "52.59px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "2.63px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                    <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "linear-gradient(180deg, #ff83b5 0%, #ff72ab 100%)" }} />
                    <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "linear-gradient(180deg, #ff83b5 0%, #ff72ab 100%)" }} />
                    <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "rgba(255, 114, 171, 0.16)" }} />
                    <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "rgba(255, 114, 171, 0.16)" }} />
                    <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "rgba(255, 114, 171, 0.16)" }} />
                    <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "rgba(255, 114, 171, 0.16)" }} />
                    <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "rgba(255, 114, 171, 0.16)" }} />
                    <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "rgba(255, 114, 171, 0.16)" }} />
                    <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "rgba(255, 114, 171, 0.16)" }} />
                    <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "rgba(255, 114, 171, 0.16)" }} />
                    <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "rgba(255, 114, 171, 0.16)" }} />
                    <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "rgba(255, 114, 171, 0.16)" }} />
                  </div>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "24px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#999999" }}>16%</p>
                </div>
              </div>
            </div>
            <div style={{ width: "568.64px", height: "1.1px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ flex: "1 1 0", minWidth: 0, height: "1.1px", flexShrink: 0, background: "#eeeeee" }} />
            </div>
            <div style={{ width: "568.64px", height: "52.59px", flexShrink: 0, borderRadius: "8.77px", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "232px", height: "52.59px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10.96px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ width: "30.68px", height: "30.68px", flexShrink: 0, borderRadius: "8.77px", background: "rgba(77, 152, 254, 0.12)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                    <ShoppingCartBulk size={17.5} strokeWidth={2} style={{ width: "17.53px", height: "17.53px", flexShrink: 0, color: "#4d98fe", display: "block" }} />
                  </div>
                  <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.19px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "108px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 500, color: "#222222" }}>Checkout opt-in</p>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "126px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#999999" }}>Opted in at checkout</p>
                  </div>
                </div>
              </div>
              <div style={{ width: "104px", height: "52.59px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "46px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 500, color: "#222222" }}>$2,310</p>
              </div>
              <div style={{ width: "92px", height: "52.59px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "32px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#2d2d2d" }}>3.9%</p>
              </div>
              <div style={{ width: "140.64px", height: "52.59px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "2.63px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                    <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "linear-gradient(180deg, #62a4fe 0%, #4d98fe 100%)" }} />
                    <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "rgba(77, 152, 254, 0.16)" }} />
                    <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "rgba(77, 152, 254, 0.16)" }} />
                    <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "rgba(77, 152, 254, 0.16)" }} />
                    <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "rgba(77, 152, 254, 0.16)" }} />
                    <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "rgba(77, 152, 254, 0.16)" }} />
                    <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "rgba(77, 152, 254, 0.16)" }} />
                    <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "rgba(77, 152, 254, 0.16)" }} />
                    <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "rgba(77, 152, 254, 0.16)" }} />
                    <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "rgba(77, 152, 254, 0.16)" }} />
                    <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "rgba(77, 152, 254, 0.16)" }} />
                    <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "rgba(77, 152, 254, 0.16)" }} />
                  </div>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "19px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#999999" }}>8%</p>
                </div>
              </div>
            </div>
            <div style={{ width: "568.64px", height: "1.1px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ flex: "1 1 0", minWidth: 0, height: "1.1px", flexShrink: 0, background: "#eeeeee" }} />
            </div>
            <div style={{ width: "568.64px", height: "52.59px", flexShrink: 0, borderRadius: "8.77px", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "232px", height: "52.59px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10.96px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ width: "30.68px", height: "30.68px", flexShrink: 0, borderRadius: "8.77px", background: "rgba(24, 177, 112, 0.12)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                    <QrcodeBulk size={17.5} strokeWidth={2} style={{ width: "17.53px", height: "17.53px", flexShrink: 0, color: "#18b170", display: "block" }} />
                  </div>
                  <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.19px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "77px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 500, color: "#222222" }}>In-store QR</p>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "135px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#999999" }}>Portland store counter</p>
                  </div>
                </div>
              </div>
              <div style={{ width: "104px", height: "52.59px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "46px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 500, color: "#222222" }}>$1,980</p>
              </div>
              <div style={{ width: "92px", height: "52.59px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "32px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#2d2d2d" }}>6.2%</p>
              </div>
              <div style={{ width: "140.64px", height: "52.59px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "2.63px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                    <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "linear-gradient(180deg, #34ba81 0%, #18b170 100%)" }} />
                    <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "rgba(24, 177, 112, 0.16)" }} />
                    <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "rgba(24, 177, 112, 0.16)" }} />
                    <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "rgba(24, 177, 112, 0.16)" }} />
                    <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "rgba(24, 177, 112, 0.16)" }} />
                    <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "rgba(24, 177, 112, 0.16)" }} />
                    <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "rgba(24, 177, 112, 0.16)" }} />
                    <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "rgba(24, 177, 112, 0.16)" }} />
                    <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "rgba(24, 177, 112, 0.16)" }} />
                    <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "rgba(24, 177, 112, 0.16)" }} />
                    <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "rgba(24, 177, 112, 0.16)" }} />
                    <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "rgba(24, 177, 112, 0.16)" }} />
                  </div>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "19px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#999999" }}>6%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ position: "absolute", left: "653px", top: "677.1px", width: "612.46px", height: "380.19px", borderRadius: "24.1px", background: "#fefefe", boxShadow: "inset 0 0 0 1.1px #eaeaea", overflow: "hidden", display: "flex", flexDirection: "column", padding: "23.01px 23.01px 23.01px 23.01px", gap: "13.15px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "4.38px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "199px", fontFamily: "'Geist'", fontSize: "17.53px", fontWeight: 500, color: "#141417", lineHeight: "1.5" }}>Top products from email</p>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "13.15px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "294px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#6b6b70" }}>Revenue from orders that followed an email click</p>
              </div>
            </div>
            <div style={{ flexShrink: 0, borderRadius: "8.77px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e0e0e3", overflow: "hidden", display: "flex", flexDirection: "row", padding: "7.67px 8.77px 7.67px 10.96px", gap: "6.57px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "87px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#4d4d52", lineHeight: "17.53px" }}>All campaigns</p>
              <svg style={{ width: "13.15px", height: "13.15px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="13.15" height="13.15" viewBox="0 0 13.15 13.15" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 3.286 4.931)" d="M0.542312 -0.542312 C0.242801 -0.841823 -0.242801 -0.841823 -0.542312 -0.542312 C-0.841823 -0.242801 -0.841823 0.242801 -0.542312 0.542312 L0 0 L0.542312 -0.542312 Z M3.28691 3.28691 L2.7446 3.82922 C3.04411 4.12873 3.52971 4.12873 3.82922 3.82922 L3.28691 3.28691 Z M7.11613 0.542312 C7.41564 0.242801 7.41564 -0.242801 7.11613 -0.542312 C6.81662 -0.841823 6.33101 -0.841823 6.0315 -0.542312 L6.57382 0 L7.11613 0.542312 Z M0 0 L-0.542312 0.542312 L2.7446 3.82922 L3.28691 3.28691 L3.82922 2.7446 L0.542312 -0.542312 L0 0 Z M3.28691 3.28691 L3.82922 3.82922 L7.11613 0.542312 L6.57382 0 L6.0315 -0.542312 L2.7446 2.7446 L3.28691 3.28691 Z" fill="#6b6b70"/></svg>
            </div>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "4.38px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "568.64px", height: "48.21px", flexShrink: 0, borderRadius: "8.77px", display: "flex", flexDirection: "row", padding: "0px 8.77px 0px 8.77px", gap: "13.15px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "30.68px", height: "30.68px", flexShrink: 0, borderRadius: "7.67px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8", display: "flex", flexDirection: "row", padding: "1.1px 1.1px 1.1px 1.1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "12px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12.05px", fontWeight: 500, color: "#7d818c" }}>CI</p>
              </div>
              <div style={{ width: "186.26px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.1px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "115px", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 500, color: "#222222" }}>Cast Iron Skillet</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "79px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#999999" }}>$85 · 62 sold</p>
              </div>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "2.63px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
              </div>
              <div style={{ flex: "1 1 0", minWidth: 0, height: "1px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "50px", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 400, color: "#2d2d2d" }}>$5,270</p>
              <div style={{ width: "35.06px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-end", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "27px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#999999" }}>25%</p>
              </div>
            </div>
            <div style={{ width: "568.64px", height: "48.21px", flexShrink: 0, borderRadius: "8.77px", display: "flex", flexDirection: "row", padding: "0px 8.77px 0px 8.77px", gap: "13.15px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "30.68px", height: "30.68px", flexShrink: 0, borderRadius: "7.67px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8", display: "flex", flexDirection: "row", padding: "1.1px 1.1px 1.1px 1.1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "20px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12.05px", fontWeight: 500, color: "#7d818c" }}>WB</p>
              </div>
              <div style={{ width: "186.26px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.1px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "154px", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 500, color: "#222222" }}>Walnut Cutting Board</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "80px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#999999" }}>$64 · 60 sold</p>
              </div>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "2.63px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "rgba(253, 75, 35, 0.16)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "rgba(253, 75, 35, 0.16)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "rgba(253, 75, 35, 0.16)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "rgba(253, 75, 35, 0.16)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "rgba(253, 75, 35, 0.16)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "rgba(253, 75, 35, 0.16)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "rgba(253, 75, 35, 0.16)" }} />
              </div>
              <div style={{ flex: "1 1 0", minWidth: 0, height: "1px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "52px", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 400, color: "#2d2d2d" }}>$3,840</p>
              <div style={{ width: "35.06px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-end", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "24px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#999999" }}>18%</p>
              </div>
            </div>
            <div style={{ width: "568.64px", height: "48.21px", flexShrink: 0, borderRadius: "8.77px", display: "flex", flexDirection: "row", padding: "0px 8.77px 0px 8.77px", gap: "13.15px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "30.68px", height: "30.68px", flexShrink: 0, borderRadius: "7.67px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8", display: "flex", flexDirection: "row", padding: "1.1px 1.1px 1.1px 1.1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "19px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12.05px", fontWeight: 500, color: "#7d818c" }}>SM</p>
              </div>
              <div style={{ width: "186.26px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.1px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "142px", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 500, color: "#222222" }}>Stoneware Mug Set</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "79px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#999999" }}>$48 · 62 sold</p>
              </div>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "2.63px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "rgba(253, 75, 35, 0.16)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "rgba(253, 75, 35, 0.16)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "rgba(253, 75, 35, 0.16)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "rgba(253, 75, 35, 0.16)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "rgba(253, 75, 35, 0.16)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "rgba(253, 75, 35, 0.16)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "rgba(253, 75, 35, 0.16)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "rgba(253, 75, 35, 0.16)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "rgba(253, 75, 35, 0.16)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "rgba(253, 75, 35, 0.16)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "rgba(253, 75, 35, 0.16)" }} />
              </div>
              <div style={{ flex: "1 1 0", minWidth: 0, height: "1px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "49px", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 400, color: "#2d2d2d" }}>$2,976</p>
              <div style={{ width: "35.06px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-end", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "24px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#999999" }}>14%</p>
              </div>
            </div>
            <div style={{ width: "568.64px", height: "48.21px", flexShrink: 0, borderRadius: "8.77px", display: "flex", flexDirection: "row", padding: "0px 8.77px 0px 8.77px", gap: "13.15px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "30.68px", height: "30.68px", flexShrink: 0, borderRadius: "7.67px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8", display: "flex", flexDirection: "row", padding: "1.1px 1.1px 1.1px 1.1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "16px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12.05px", fontWeight: 500, color: "#7d818c" }}>LA</p>
              </div>
              <div style={{ width: "186.26px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.1px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "86px", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 500, color: "#222222" }}>Linen Apron</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "79px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#999999" }}>$36 · 42 sold</p>
              </div>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "2.63px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "rgba(253, 75, 35, 0.16)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "rgba(253, 75, 35, 0.16)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "rgba(253, 75, 35, 0.16)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "rgba(253, 75, 35, 0.16)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "rgba(253, 75, 35, 0.16)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "rgba(253, 75, 35, 0.16)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "rgba(253, 75, 35, 0.16)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "rgba(253, 75, 35, 0.16)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "rgba(253, 75, 35, 0.16)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "rgba(253, 75, 35, 0.16)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "rgba(253, 75, 35, 0.16)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "rgba(253, 75, 35, 0.16)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "rgba(253, 75, 35, 0.16)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "rgba(253, 75, 35, 0.16)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "rgba(253, 75, 35, 0.16)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "rgba(253, 75, 35, 0.16)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "rgba(253, 75, 35, 0.16)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "rgba(253, 75, 35, 0.16)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "rgba(253, 75, 35, 0.16)" }} />
              </div>
              <div style={{ flex: "1 1 0", minWidth: 0, height: "1px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "44px", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 400, color: "#2d2d2d" }}>$1,512</p>
              <div style={{ width: "35.06px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-end", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "18px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#999999" }}>7%</p>
              </div>
            </div>
            <div style={{ width: "568.64px", height: "48.21px", flexShrink: 0, borderRadius: "8.77px", display: "flex", flexDirection: "row", padding: "0px 8.77px 0px 8.77px", gap: "13.15px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "30.68px", height: "30.68px", flexShrink: 0, borderRadius: "7.67px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8", display: "flex", flexDirection: "row", padding: "1.1px 1.1px 1.1px 1.1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "17px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12.05px", fontWeight: 500, color: "#7d818c" }}>CP</p>
              </div>
              <div style={{ width: "186.26px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.1px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "135px", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 500, color: "#222222" }}>Ceramic Pour-over</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "76px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#999999" }}>$42 · 31 sold</p>
              </div>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "2.63px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "rgba(253, 75, 35, 0.16)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "rgba(253, 75, 35, 0.16)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "rgba(253, 75, 35, 0.16)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "rgba(253, 75, 35, 0.16)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "rgba(253, 75, 35, 0.16)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "rgba(253, 75, 35, 0.16)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "rgba(253, 75, 35, 0.16)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "rgba(253, 75, 35, 0.16)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "rgba(253, 75, 35, 0.16)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "rgba(253, 75, 35, 0.16)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "rgba(253, 75, 35, 0.16)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "rgba(253, 75, 35, 0.16)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "rgba(253, 75, 35, 0.16)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "rgba(253, 75, 35, 0.16)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "rgba(253, 75, 35, 0.16)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "rgba(253, 75, 35, 0.16)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "rgba(253, 75, 35, 0.16)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "rgba(253, 75, 35, 0.16)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "rgba(253, 75, 35, 0.16)" }} />
                <div style={{ width: "3.51px", height: "13.15px", flexShrink: 0, borderRadius: "1.75px", background: "rgba(253, 75, 35, 0.16)" }} />
              </div>
              <div style={{ flex: "1 1 0", minWidth: 0, height: "1px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "48px", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 400, color: "#2d2d2d" }}>$1,302</p>
              <div style={{ width: "35.06px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-end", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "19px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#999999" }}>6%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
