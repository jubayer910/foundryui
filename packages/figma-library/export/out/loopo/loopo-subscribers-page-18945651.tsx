// Subscribers page (loopo, Templates) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Ingot Icons.
import type { SVGProps } from "react";

// Ingot Icons used here, inlined so this file needs no icon package.
function icon(body: string) {
  return function Icon({ size = 24, strokeWidth = 1.5, ...p }: { size?: number; strokeWidth?: number } & SVGProps<SVGSVGElement>) {
    const html = strokeWidth == 1.5 ? body : body.replace(/stroke-width="([\d.]+)"/g, (_, w) => `stroke-width="${(Number(w) * Number(strokeWidth)) / 1.5}"`);
    return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden {...p} dangerouslySetInnerHTML={{ __html: html }} />;
  };
}
const ChevronDown = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M6 9l6 6l6 -6\" /></g>");
const ChevronLeft = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M15 6l-6 6l6 6\" /></g>");
const ChevronRight = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M9 6l6 6l-6 6\" /></g>");
const DotsVertical = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M11 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0\" /><path d=\"M11 19a1 1 0 1 0 2 0a1 1 0 1 0 -2 0\" /><path d=\"M11 5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0\" /></g>");
const FileDownload = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M14 3v4a1 1 0 0 0 1 1h4\" /><path d=\"M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2\" /><path d=\"M12 17v-6\" /><path d=\"M9.5 14.5l2.5 2.5l2.5 -2.5\" /></g>");
const Loader = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 6l0 -3\" /><path d=\"M16.25 7.75l2.15 -2.15\" /><path d=\"M18 12l3 0\" /><path d=\"M16.25 16.25l2.15 2.15\" /><path d=\"M12 18l0 3\" /><path d=\"M7.75 16.25l-2.15 2.15\" /><path d=\"M6 12l-3 0\" /><path d=\"M7.75 7.75l-2.15 -2.15\" /></g>");
const Plus = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 5l0 14\" /><path d=\"M5 12l14 0\" /></g>");
const Search = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 10a7 7 0 1 0 14 0a7 7 0 1 0 -14 0\" /><path d=\"M21 21l-6 -6\" /></g>");
const SortDescending = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 6l9 0\" /><path d=\"M4 12l7 0\" /><path d=\"M4 18l7 0\" /><path d=\"M15 15l3 3l3 -3\" /><path d=\"M18 6l0 12\" /></g>");
const UserPlus = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0\" /><path d=\"M16 19h6\" /><path d=\"M19 16v6\" /><path d=\"M6 21v-2a4 4 0 0 1 4 -4h4\" /></g>");
const BellBulk = icon("<path d=\"M10 5A2 2 0 1 1 14 5 7 7 0 0 1 18 11V14A4 4 0 0 0 20 17H4A4 4 0 0 0 6 14V11A7 7 0 0 1 10 5\" fill=\"currentColor\" fill-opacity=\"0.4\"/><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M9 17V18A3 3 0 0 0 15 18V17\"/></g>");
const BoltBulk = icon("<path d=\"M13 3L13 10 19 10 11 21 11 14 5 14 13 3\" fill=\"currentColor\" fill-opacity=\"0.4\"/>");
const ChartLineBulk = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 19l16 0\" /><path d=\"M4 15l4 -6l4 2l4 -5l4 4\" /></g>");
const FileBulk = icon("<path d=\"M17 21H7A2 2 0 0 1 5 19V5A2 2 0 0 1 7 3H14L19 8V19A2 2 0 0 1 17 21\" fill=\"currentColor\" fill-opacity=\"0.4\"/><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M14 3V7A1 1 0 0 0 15 8H19\"/></g>");
const FilterBulk = icon("<path d=\"M4 4H20V6.172000000000001A2 2 0 0 1 19.414 7.586L15.000000000000002 12V19L9.000000000000002 21V12.5L4.520000000000001 7.572A2 2 0 0 1 4.000000000000002 6.227V4\" fill=\"currentColor\" fill-opacity=\"0.4\"/>");
const HelpCircleBulk = icon("<path d=\"M3 12A9 9 0 1 0 21 12 9 9 0 0 0 3 12\" fill=\"currentColor\" fill-opacity=\"0.4\"/><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 16V16.01\"/><path d=\"M12 13A2 2 0 0 0 12.914 9.218 1.98 1.98 0 0 0 10.5 9.701\"/></g>");
const LayoutDashboardBulk = icon("<path d=\"M5 4H9A1 1 0 0 1 10 5V11A1 1 0 0 1 9 12H5A1 1 0 0 1 4 11V5A1 1 0 0 1 5 4\" fill=\"currentColor\" fill-opacity=\"0.4\"/><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M5 16H9A1 1 0 0 1 10 17V19A1 1 0 0 1 9 20H5A1 1 0 0 1 4 19V17A1 1 0 0 1 5 16\"/><path d=\"M15 12H19A1 1 0 0 1 20 13V19A1 1 0 0 1 19 20H15A1 1 0 0 1 14 19V13A1 1 0 0 1 15 12\"/><path d=\"M15 4H19A1 1 0 0 1 20 5V7A1 1 0 0 1 19 8H15A1 1 0 0 1 14 7V5A1 1 0 0 1 15 4\"/></g>");
const LicenseBulk = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11\" /><path d=\"M9 7l4 0\" /><path d=\"M9 11l4 0\" /></g>");
const NoteBulk = icon("<path d=\"M13 20V14A1 1 0 0 1 14 13H20V6A2 2 0 0 0 18 4H6A2 2 0 0 0 4 6V18A2 2 0 0 0 6 20H13\" fill=\"currentColor\" fill-opacity=\"0.4\"/><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M13 20L20 13\"/></g>");
const OutletBulk = icon("<path d=\"M4 6A2 2 0 0 1 6 4H18A2 2 0 0 1 20 6V18A2 2 0 0 1 18 20H6A2 2 0 0 1 4 18L4 6\" fill=\"currentColor\" fill-opacity=\"0.4\"/><path d=\"M8.5 12A0.5 0.5 0 1 0 9.5 12 0.5 0.5 0 1 0 8.5 12\" fill=\"currentColor\"/><path d=\"M14.5 12A0.5 0.5 0 1 0 15.5 12 0.5 0.5 0 1 0 14.5 12\" fill=\"currentColor\"/>");
const SendBulk = icon("<path d=\"M21 3L14.5 21A0.55 0.55 0 0 1 13.5 21L10 14 3 10.5A0.55 0.55 0 0 1 3 9.5L21 3\" fill=\"currentColor\" fill-opacity=\"0.4\"/><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M10 14L21 3\"/></g>");
const SettingsBulk = icon("<path d=\"M10.325 4.317C10.751 2.561 13.248999999999999 2.561 13.674999999999999 4.317A1.724 1.724 0 0 0 16.247999999999998 5.383C17.790999999999997 4.443 19.557999999999996 6.209 18.618 7.753A1.724 1.724 0 0 0 19.683 10.325C21.439 10.751 21.439 13.248999999999999 19.683 13.674999999999999A1.724 1.724 0 0 0 18.617 16.247999999999998C19.557000000000002 17.790999999999997 17.791 19.557999999999996 16.247 18.618A1.724 1.724 0 0 0 13.675 19.683C13.249 21.439 10.751000000000001 21.439 10.325000000000001 19.683A1.724 1.724 0 0 0 7.752000000000001 18.617C6.2090000000000005 19.557000000000002 4.442 17.791 5.382000000000001 16.247A1.724 1.724 0 0 0 4.317 13.675C2.561 13.249 2.561 10.751000000000001 4.317 10.325000000000001A1.724 1.724 0 0 0 5.383 7.752000000000001C4.443 6.2090000000000005 6.209 4.442 7.753 5.382000000000001 8.753 5.99 10.049 5.452000000000001 10.325 4.317\" fill=\"currentColor\" fill-opacity=\"0.4\"/><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M9 12A3 3 0 1 0 15 12 3 3 0 0 0 9 12\"/></g>");
const TrendingUpBulk = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 17l6 -6l4 4l8 -8\" /><path d=\"M14 7l7 0l0 7\" /></g>");
const UserBulk = icon("<path d=\"M8 7A4 4 0 1 0 16 7 4 4 0 0 0 8 7\" fill=\"currentColor\" fill-opacity=\"0.4\"/><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M6 21V19A4 4 0 0 1 10 15H14A4 4 0 0 1 18 19V21\"/></g>");
const WalletBulk = icon("<path d=\"M20 12V16H16A2 2 0 0 1 16 12H20\" fill=\"currentColor\" fill-opacity=\"0.4\"/><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M17 8v-3a1 1 0 0 0 -1 -1h-10a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1 -1 1h-12a2 2 0 0 1 -2 -2v-12\" /><path d=\"M20 12v4h-4a2 2 0 0 1 0 -4h4\" /></g>");
const LayoutDashboardSolid = icon("<g fill=\"currentColor\"><path d=\"M9 3a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2v-6a2 2 0 0 1 2 -2zm0 12a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2v-2a2 2 0 0 1 2 -2zm10 -4a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2v-6a2 2 0 0 1 2 -2zm0 -8a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2v-2a2 2 0 0 1 2 -2z\" /></g>");
const UsersSolid = icon("<path d=\"M5 7A4 4 0 1 0 13 7 4 4 0 1 0 5 7\" fill=\"currentColor\"/><path d=\"M5 7A4 4 0 1 0 13 7 4 4 0 1 0 5 7\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 21V19A4 4 0 0 1 7 15H11A4 4 0 0 1 15 19V21\"/><path d=\"M16 3.13A4 4 0 0 1 16 10.879999999999999\"/><path d=\"M21 21V19A4 4 0 0 0 18 15.15\"/></g>");

export function SubscribersPage() {
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
                    <div style={{ alignSelf: "stretch", height: "32.83px", flexShrink: 0, borderRadius: "8px", background: "#ececed", boxShadow: "inset 0 0 0 1.1px #e8e8e8", display: "flex", flexDirection: "row", padding: "6.41px 10.96px 6.41px 10.96px", gap: "-7.67px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                      <div style={{ width: "178.59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "6.57px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                        <UsersSolid size={15.3} strokeWidth={1.51} style={{ width: "15.34px", height: "15.34px", flexShrink: 0, color: "#000000", display: "block" }} />
                        <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "86px", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 500, color: "#000000" }}>Subscribers</p>
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
                    <div style={{ alignSelf: "stretch", height: "32.83px", flexShrink: 0, borderRadius: "8px", display: "flex", flexDirection: "row", padding: "6.41px 10.96px 6.41px 10.96px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                      <div style={{ width: "178.59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "6.57px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                        <TrendingUpBulk size={15.3} strokeWidth={2.01} style={{ width: "15.34px", height: "15.34px", flexShrink: 0, color: "#130f26", display: "block" }} />
                        <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "90px", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 400, color: "#646871" }}>Performance</p>
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
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "67px", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 500, color: "#b3b3b3" }}>Audience</p>
            <ChevronRight size={15.3} strokeWidth={1.51} style={{ width: "15.34px", height: "15.34px", flexShrink: 0, color: "#686765", display: "block" }} />
          </div>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "102px", fontFamily: "'Geist'", fontSize: "17.53px", fontWeight: 500, color: "#666d80", lineHeight: "1.5", letterSpacing: "0.02em" }}>Subscribers</p>
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
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "130px", lineHeight: "31px", fontFamily: "'Geist'", fontSize: "24.1px", fontWeight: 500, color: "#202020", letterSpacing: "-0.02em" }}>Subscribers</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "540px", lineHeight: "23px", fontFamily: "'Geist'", fontSize: "17.53px", fontWeight: 400, color: "#747474", letterSpacing: "-0.02em" }}>18,420 people on your lists — find anyone, see their history, act in bulk.</p>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10.96px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ height: "39.44px", flexShrink: 0, borderRadius: "109.56px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8", display: "flex", flexDirection: "row", padding: "10.96px 10.96px 10.96px 10.96px", gap: "6.57px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <FileDownload size={17.5} strokeWidth={1.51} style={{ width: "17.53px", height: "17.53px", flexShrink: 0, color: "#8b8b8b", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "44px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 500, color: "#6c6c6c", lineHeight: "17.53px" }}>Export</p>
            </div>
            <div style={{ height: "39.44px", flexShrink: 0, borderRadius: "109.56px", background: "linear-gradient(180deg, #838383 0%, #2d2d2d 100%)", boxShadow: "0px 9.86px 8.77px 0px rgba(0, 0, 0, 0.04)", display: "flex", flexDirection: "column", padding: "10.96px 10.96px 10.96px 10.96px", gap: "10.96px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ alignSelf: "stretch", height: "17.53px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "4.38px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <UserPlus size={17.5} strokeWidth={1.51} style={{ width: "17.53px", height: "17.53px", flexShrink: 0, color: "#ffffff", display: "block" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "89px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 500, color: "#ffffff", lineHeight: "17.53px" }}>Add contacts</p>
              </div>
            </div>
          </div>
        </div>
        <div style={{ position: "absolute", left: "19.72px", top: "109.56px", width: "1245.74px", height: "43.83px", display: "flex", flexDirection: "row", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "328.69px", height: "37.25px", flexShrink: 0, borderRadius: "8.77px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8", display: "flex", flexDirection: "row", padding: "1.1px 12.06px 1.1px 12.06px", gap: "6.57px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <Search size={15.3} strokeWidth={1.51} style={{ width: "15.34px", height: "15.34px", flexShrink: 0, color: "#686765", display: "block" }} />
            <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 400, color: "#999999" }}>Search name, email or tag</p>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, borderRadius: "8.77px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8", display: "flex", flexDirection: "row", padding: "6.58px 12.06px 6.58px 12.06px", gap: "6.57px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "68px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#6c6c6c" }}>Status: All</p>
              <ChevronDown size={13.2} strokeWidth={1.49} style={{ width: "13.15px", height: "13.15px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
            </div>
            <div style={{ flexShrink: 0, borderRadius: "8.77px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8", display: "flex", flexDirection: "row", padding: "6.58px 12.06px 6.58px 12.06px", gap: "6.57px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "62px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#6c6c6c" }}>Plan: Any</p>
              <ChevronDown size={13.2} strokeWidth={1.49} style={{ width: "13.15px", height: "13.15px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
            </div>
            <div style={{ flexShrink: 0, borderRadius: "8.77px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8", display: "flex", flexDirection: "row", padding: "6.58px 12.06px 6.58px 12.06px", gap: "6.57px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "53px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#6c6c6c" }}>Country</p>
              <ChevronDown size={13.2} strokeWidth={1.49} style={{ width: "13.15px", height: "13.15px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
            </div>
            <div style={{ flexShrink: 0, borderRadius: "8.77px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8", display: "flex", flexDirection: "row", padding: "6.58px 12.06px 6.58px 12.06px", gap: "6.57px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "31px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#6c6c6c" }}>Tags</p>
              <ChevronDown size={13.2} strokeWidth={1.49} style={{ width: "13.15px", height: "13.15px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
            </div>
            <div style={{ flexShrink: 0, borderRadius: "8.77px", background: "#ffffff", outline: "1.1px dashed #e8e8e8", outlineOffset: "-1.1px", display: "flex", flexDirection: "row", padding: "6.58px 12.06px 6.58px 12.06px", gap: "6.57px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <Plus size={13.2} strokeWidth={1.49} style={{ width: "13.15px", height: "13.15px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "61px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#6c6c6c" }}>Add filter</p>
            </div>
          </div>
          <div style={{ flex: "1 1 0", minWidth: 0, height: "1px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "100px", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 500, color: "#222222" }}>
            <span style={{ fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 500, color: "#222222" }}>18,420</span>
            <span style={{ fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 400, color: "#999999" }}>{" people"}</span>
          </p>
          <div style={{ height: "35.06px", flexShrink: 0, borderRadius: "8.77px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8", display: "flex", flexDirection: "row", padding: "8.77px 8.77px 8.77px 8.77px", gap: "6.57px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <SortDescending size={19.7} style={{ width: "19.72px", height: "19.72px", flexShrink: 0, color: "#8b8b8b", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "107px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#6c6c6c" }}>Sort: Last activity</p>
            <ChevronDown size={15.3} strokeWidth={1.51} style={{ width: "15.34px", height: "15.34px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
          </div>
        </div>
        <div style={{ position: "absolute", left: "19.72px", top: "173.11px", width: "1245.74px", height: "884.18px", borderRadius: "24.1px", background: "#fefefe", boxShadow: "inset 0 0 0 1.1px #eaeaea", overflow: "hidden", display: "flex", flexDirection: "column", padding: "23.01px 23.01px 23.01px 23.01px", gap: "17.53px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "1201.92px", height: "39.44px", flexShrink: 0, borderRadius: "8.77px", background: "#fafafa", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "46px", height: "39.44px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "17.53px", height: "17.53px", flexShrink: 0, borderRadius: "4.38px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #d0d3d9", display: "flex", flexDirection: "row", padding: "1.1px 1.1px 1.1px 1.1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }} />
              </div>
              <div style={{ width: "292px", height: "39.44px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "37px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#7d818c" }}>Name</p>
              </div>
              <div style={{ width: "132px", height: "39.44px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "41px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#7d818c" }}>Status</p>
              </div>
              <div style={{ width: "160px", height: "39.44px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "28px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#7d818c" }}>Plan</p>
              </div>
              <div style={{ width: "80px", height: "39.44px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "42px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#7d818c" }}>Orders</p>
              </div>
              <div style={{ width: "124px", height: "39.44px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "87px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#7d818c" }}>Lifetime value</p>
              </div>
              <div style={{ width: "150px", height: "39.44px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "78px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#7d818c" }}>Engagement</p>
              </div>
              <div style={{ width: "160px", height: "39.44px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "76px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#7d818c" }}>Last activity</p>
              </div>
              <div style={{ width: "57.92px", height: "39.44px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "0px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#7d818c" }}>{" "}</p>
              </div>
            </div>
            <div style={{ width: "1201.92px", height: "63.55px", flexShrink: 0, borderRadius: "8.77px", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "46px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "17.53px", height: "17.53px", flexShrink: 0, borderRadius: "4.38px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #d0d3d9", display: "flex", flexDirection: "row", padding: "1.1px 1.1px 1.1px 1.1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }} />
              </div>
              <div style={{ width: "292px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10.96px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ width: "32.87px", height: "32.87px", flexShrink: 0, borderRadius: "16.43px", background: "rgba(253, 75, 35, 0.14)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "19px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#fd4b23" }}>OB</p>
                  </div>
                  <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.19px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "94px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 500, color: "#222222" }}>Olivia Bennett</p>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "154px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#999999" }}>olivia.bennett@gmail.com</p>
                  </div>
                </div>
              </div>
              <div style={{ width: "132px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, borderRadius: "6.57px", background: "#e8f7f0", display: "flex", flexDirection: "row", padding: "3.29px 8.77px 3.29px 7.67px", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <svg style={{ width: "6.57px", height: "6.57px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="6.57" height="6.57" viewBox="0 0 6.57 6.57" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M6.57 3.285 C6.57 5.09926 5.09926 6.57 3.285 6.57 C1.47074 6.57 0 5.09926 0 3.285 C0 1.47074 1.47074 0 3.285 0 C5.09926 0 6.57 1.47074 6.57 3.285 Z" fill="#18b170"/></svg>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "70px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#18b170" }}>Subscribed</p>
                </div>
              </div>
              <div style={{ width: "160px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "111px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#2d2d2d" }}>Harbor Club Plus</p>
              </div>
              <div style={{ width: "80px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "15px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#2d2d2d" }}>12</p>
              </div>
              <div style={{ width: "124px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "44px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#2d2d2d" }}>$1,284</p>
              </div>
              <div style={{ width: "150px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "2.41px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "rgba(253, 75, 35, 0.16)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "rgba(253, 75, 35, 0.16)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "rgba(253, 75, 35, 0.16)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "rgba(253, 75, 35, 0.16)" }} />
                </div>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "29px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#2d2d2d" }}>64%</p>
              </div>
              <div style={{ width: "160px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "106px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#2d2d2d" }}>Today, 10:24 AM</p>
              </div>
              <div style={{ width: "57.92px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
                <DotsVertical size={17.5} strokeWidth={1.51} style={{ width: "17.53px", height: "17.53px", flexShrink: 0, color: "#c4c4c4", display: "block" }} />
              </div>
            </div>
            <div style={{ width: "1201.92px", height: "1.1px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ flex: "1 1 0", minWidth: 0, height: "1.1px", flexShrink: 0, background: "#eeeeee" }} />
            </div>
            <div style={{ width: "1201.92px", height: "63.55px", flexShrink: 0, borderRadius: "8.77px", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "46px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "17.53px", height: "17.53px", flexShrink: 0, borderRadius: "4.38px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #d0d3d9", display: "flex", flexDirection: "row", padding: "1.1px 1.1px 1.1px 1.1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }} />
              </div>
              <div style={{ width: "292px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10.96px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ width: "32.87px", height: "32.87px", flexShrink: 0, borderRadius: "16.43px", background: "rgba(77, 152, 254, 0.14)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "21px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#4d98fe" }}>MR</p>
                  </div>
                  <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.19px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "83px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 500, color: "#222222" }}>Marcus Reid</p>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "156px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#999999" }}>marcus.reid@outlook.com</p>
                  </div>
                </div>
              </div>
              <div style={{ width: "132px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, borderRadius: "6.57px", background: "#e8f7f0", display: "flex", flexDirection: "row", padding: "3.29px 8.77px 3.29px 7.67px", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <svg style={{ width: "6.57px", height: "6.57px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="6.57" height="6.57" viewBox="0 0 6.57 6.57" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M6.57 3.285 C6.57 5.09926 5.09926 6.57 3.285 6.57 C1.47074 6.57 0 5.09926 0 3.285 C0 1.47074 1.47074 0 3.285 0 C5.09926 0 6.57 1.47074 6.57 3.285 Z" fill="#18b170"/></svg>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "70px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#18b170" }}>Subscribed</p>
                </div>
              </div>
              <div style={{ width: "160px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "127px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#2d2d2d" }}>Harbor Club Starter</p>
              </div>
              <div style={{ width: "80px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "9px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#2d2d2d" }}>5</p>
              </div>
              <div style={{ width: "124px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "36px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#2d2d2d" }}>$486</p>
              </div>
              <div style={{ width: "150px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "2.41px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "rgba(253, 75, 35, 0.16)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "rgba(253, 75, 35, 0.16)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "rgba(253, 75, 35, 0.16)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "rgba(253, 75, 35, 0.16)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "rgba(253, 75, 35, 0.16)" }} />
                </div>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "29px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#2d2d2d" }}>48%</p>
              </div>
              <div style={{ width: "160px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "122px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#2d2d2d" }}>Yesterday, 6:12 PM</p>
              </div>
              <div style={{ width: "57.92px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
                <DotsVertical size={17.5} strokeWidth={1.51} style={{ width: "17.53px", height: "17.53px", flexShrink: 0, color: "#c4c4c4", display: "block" }} />
              </div>
            </div>
            <div style={{ width: "1201.92px", height: "1.1px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ flex: "1 1 0", minWidth: 0, height: "1.1px", flexShrink: 0, background: "#eeeeee" }} />
            </div>
            <div style={{ width: "1201.92px", height: "63.55px", flexShrink: 0, borderRadius: "8.77px", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "46px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "17.53px", height: "17.53px", flexShrink: 0, borderRadius: "4.38px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #d0d3d9", display: "flex", flexDirection: "row", padding: "1.1px 1.1px 1.1px 1.1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }} />
              </div>
              <div style={{ width: "292px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10.96px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ width: "32.87px", height: "32.87px", flexShrink: 0, borderRadius: "16.43px", background: "rgba(255, 114, 171, 0.14)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "18px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#ff72ab" }}>AK</p>
                  </div>
                  <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.19px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "75px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 500, color: "#222222" }}>Aisha Khan</p>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "141px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#999999" }}>aisha.khan@icloud.com</p>
                  </div>
                </div>
              </div>
              <div style={{ width: "132px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, borderRadius: "6.57px", background: "#e8f7f0", display: "flex", flexDirection: "row", padding: "3.29px 8.77px 3.29px 7.67px", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <svg style={{ width: "6.57px", height: "6.57px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="6.57" height="6.57" viewBox="0 0 6.57 6.57" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M6.57 3.285 C6.57 5.09926 5.09926 6.57 3.285 6.57 C1.47074 6.57 0 5.09926 0 3.285 C0 1.47074 1.47074 0 3.285 0 C5.09926 0 6.57 1.47074 6.57 3.285 Z" fill="#18b170"/></svg>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "70px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#18b170" }}>Subscribed</p>
                </div>
              </div>
              <div style={{ width: "160px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "124px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#2d2d2d" }}>Harbor Club Studio</p>
              </div>
              <div style={{ width: "80px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "9px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#2d2d2d" }}>9</p>
              </div>
              <div style={{ width: "124px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "44px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#2d2d2d" }}>$1,032</p>
              </div>
              <div style={{ width: "150px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "2.41px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "rgba(253, 75, 35, 0.16)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "rgba(253, 75, 35, 0.16)" }} />
                </div>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "29px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#2d2d2d" }}>82%</p>
              </div>
              <div style={{ width: "160px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "86px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#2d2d2d" }}>Dec 12, 2026</p>
              </div>
              <div style={{ width: "57.92px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
                <DotsVertical size={17.5} strokeWidth={1.51} style={{ width: "17.53px", height: "17.53px", flexShrink: 0, color: "#c4c4c4", display: "block" }} />
              </div>
            </div>
            <div style={{ width: "1201.92px", height: "1.1px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ flex: "1 1 0", minWidth: 0, height: "1.1px", flexShrink: 0, background: "#eeeeee" }} />
            </div>
            <div style={{ width: "1201.92px", height: "63.55px", flexShrink: 0, borderRadius: "8.77px", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "46px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "17.53px", height: "17.53px", flexShrink: 0, borderRadius: "4.38px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #d0d3d9", display: "flex", flexDirection: "row", padding: "1.1px 1.1px 1.1px 1.1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }} />
              </div>
              <div style={{ width: "292px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10.96px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ width: "32.87px", height: "32.87px", flexShrink: 0, borderRadius: "16.43px", background: "rgba(24, 177, 112, 0.14)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "18px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#18b170" }}>DP</p>
                  </div>
                  <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.19px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "77px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 500, color: "#222222" }}>Daniel Park</p>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "125px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#999999" }}>dpark@fastmail.com</p>
                  </div>
                </div>
              </div>
              <div style={{ width: "132px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, borderRadius: "6.57px", background: "#e8f7f0", display: "flex", flexDirection: "row", padding: "3.29px 8.77px 3.29px 7.67px", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <svg style={{ width: "6.57px", height: "6.57px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="6.57" height="6.57" viewBox="0 0 6.57 6.57" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M6.57 3.285 C6.57 5.09926 5.09926 6.57 3.285 6.57 C1.47074 6.57 0 5.09926 0 3.285 C0 1.47074 1.47074 0 3.285 0 C5.09926 0 6.57 1.47074 6.57 3.285 Z" fill="#18b170"/></svg>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "70px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#18b170" }}>Subscribed</p>
                </div>
              </div>
              <div style={{ width: "160px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "13px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#999999" }}>—</p>
              </div>
              <div style={{ width: "80px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "9px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#2d2d2d" }}>2</p>
              </div>
              <div style={{ width: "124px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "32px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#2d2d2d" }}>$148</p>
              </div>
              <div style={{ width: "150px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "2.41px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "rgba(253, 75, 35, 0.16)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "rgba(253, 75, 35, 0.16)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "rgba(253, 75, 35, 0.16)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "rgba(253, 75, 35, 0.16)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "rgba(253, 75, 35, 0.16)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "rgba(253, 75, 35, 0.16)" }} />
                </div>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "30px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#2d2d2d" }}>36%</p>
              </div>
              <div style={{ width: "160px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "80px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#2d2d2d" }}>Dec 9, 2026</p>
              </div>
              <div style={{ width: "57.92px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
                <DotsVertical size={17.5} strokeWidth={1.51} style={{ width: "17.53px", height: "17.53px", flexShrink: 0, color: "#c4c4c4", display: "block" }} />
              </div>
            </div>
            <div style={{ width: "1201.92px", height: "1.1px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ flex: "1 1 0", minWidth: 0, height: "1.1px", flexShrink: 0, background: "#eeeeee" }} />
            </div>
            <div style={{ width: "1201.92px", height: "63.55px", flexShrink: 0, borderRadius: "8.77px", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "46px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "17.53px", height: "17.53px", flexShrink: 0, borderRadius: "4.38px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #d0d3d9", display: "flex", flexDirection: "row", padding: "1.1px 1.1px 1.1px 1.1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }} />
              </div>
              <div style={{ width: "292px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10.96px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ width: "32.87px", height: "32.87px", flexShrink: 0, borderRadius: "16.43px", background: "rgba(124, 92, 255, 0.14)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "21px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#7c5cff" }}>SM</p>
                  </div>
                  <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.19px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "89px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 500, color: "#222222" }}>Sofia Moreno</p>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "152px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#999999" }}>sofia.moreno@gmail.com</p>
                  </div>
                </div>
              </div>
              <div style={{ width: "132px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, borderRadius: "6.57px", background: "#e8f7f0", display: "flex", flexDirection: "row", padding: "3.29px 8.77px 3.29px 7.67px", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <svg style={{ width: "6.57px", height: "6.57px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="6.57" height="6.57" viewBox="0 0 6.57 6.57" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M6.57 3.285 C6.57 5.09926 5.09926 6.57 3.285 6.57 C1.47074 6.57 0 5.09926 0 3.285 C0 1.47074 1.47074 0 3.285 0 C5.09926 0 6.57 1.47074 6.57 3.285 Z" fill="#18b170"/></svg>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "70px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#18b170" }}>Subscribed</p>
                </div>
              </div>
              <div style={{ width: "160px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "111px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#2d2d2d" }}>Harbor Club Plus</p>
              </div>
              <div style={{ width: "80px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "8px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#2d2d2d" }}>7</p>
              </div>
              <div style={{ width: "124px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "32px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#2d2d2d" }}>$812</p>
              </div>
              <div style={{ width: "150px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "2.41px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "rgba(253, 75, 35, 0.16)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "rgba(253, 75, 35, 0.16)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "rgba(253, 75, 35, 0.16)" }} />
                </div>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "25px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#2d2d2d" }}>71%</p>
              </div>
              <div style={{ width: "160px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "82px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#2d2d2d" }}>Dec 11, 2026</p>
              </div>
              <div style={{ width: "57.92px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
                <DotsVertical size={17.5} strokeWidth={1.51} style={{ width: "17.53px", height: "17.53px", flexShrink: 0, color: "#c4c4c4", display: "block" }} />
              </div>
            </div>
            <div style={{ width: "1201.92px", height: "1.1px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ flex: "1 1 0", minWidth: 0, height: "1.1px", flexShrink: 0, background: "#eeeeee" }} />
            </div>
            <div style={{ width: "1201.92px", height: "63.55px", flexShrink: 0, borderRadius: "8.77px", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "46px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "17.53px", height: "17.53px", flexShrink: 0, borderRadius: "4.38px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #d0d3d9", display: "flex", flexDirection: "row", padding: "1.1px 1.1px 1.1px 1.1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }} />
              </div>
              <div style={{ width: "292px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10.96px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ width: "32.87px", height: "32.87px", flexShrink: 0, borderRadius: "16.43px", background: "rgba(0, 68, 255, 0.14)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "17px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#0044ff" }}>LO</p>
                  </div>
                  <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.19px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "98px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 500, color: "#222222" }}>Liam O'Connor</p>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "154px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#999999" }}>liam.oconnor@yahoo.com</p>
                  </div>
                </div>
              </div>
              <div style={{ width: "132px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, borderRadius: "6.57px", background: "#f4f4f5", display: "flex", flexDirection: "row", padding: "3.29px 8.77px 3.29px 7.67px", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <svg style={{ width: "6.57px", height: "6.57px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="6.57" height="6.57" viewBox="0 0 6.57 6.57" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M6.57 3.285 C6.57 5.09926 5.09926 6.57 3.285 6.57 C1.47074 6.57 0 5.09926 0 3.285 C0 1.47074 1.47074 0 3.285 0 C5.09926 0 6.57 1.47074 6.57 3.285 Z" fill="#6c6c6c"/></svg>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "85px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#6c6c6c" }}>Unsubscribed</p>
                </div>
              </div>
              <div style={{ width: "160px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "13px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#999999" }}>—</p>
              </div>
              <div style={{ width: "80px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "6px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#2d2d2d" }}>1</p>
              </div>
              <div style={{ width: "124px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "27px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#2d2d2d" }}>$64</p>
              </div>
              <div style={{ width: "150px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "2.41px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "rgba(253, 75, 35, 0.16)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "rgba(253, 75, 35, 0.16)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "rgba(253, 75, 35, 0.16)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "rgba(253, 75, 35, 0.16)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "rgba(253, 75, 35, 0.16)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "rgba(253, 75, 35, 0.16)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "rgba(253, 75, 35, 0.16)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "rgba(253, 75, 35, 0.16)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "rgba(253, 75, 35, 0.16)" }} />
                </div>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "21px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#2d2d2d" }}>8%</p>
              </div>
              <div style={{ width: "160px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "90px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#2d2d2d" }}>Nov 30, 2026</p>
              </div>
              <div style={{ width: "57.92px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
                <DotsVertical size={17.5} strokeWidth={1.51} style={{ width: "17.53px", height: "17.53px", flexShrink: 0, color: "#c4c4c4", display: "block" }} />
              </div>
            </div>
            <div style={{ width: "1201.92px", height: "1.1px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ flex: "1 1 0", minWidth: 0, height: "1.1px", flexShrink: 0, background: "#eeeeee" }} />
            </div>
            <div style={{ width: "1201.92px", height: "63.55px", flexShrink: 0, borderRadius: "8.77px", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "46px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "17.53px", height: "17.53px", flexShrink: 0, borderRadius: "4.38px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #d0d3d9", display: "flex", flexDirection: "row", padding: "1.1px 1.1px 1.1px 1.1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }} />
              </div>
              <div style={{ width: "292px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10.96px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ width: "32.87px", height: "32.87px", flexShrink: 0, borderRadius: "16.43px", background: "rgba(253, 75, 35, 0.14)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "22px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#fd4b23" }}>HW</p>
                  </div>
                  <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.19px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "95px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 500, color: "#222222" }}>Hannah Weiss</p>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "154px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#999999" }}>hannah.weiss@proton.me</p>
                  </div>
                </div>
              </div>
              <div style={{ width: "132px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, borderRadius: "6.57px", background: "#e8f7f0", display: "flex", flexDirection: "row", padding: "3.29px 8.77px 3.29px 7.67px", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <svg style={{ width: "6.57px", height: "6.57px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="6.57" height="6.57" viewBox="0 0 6.57 6.57" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M6.57 3.285 C6.57 5.09926 5.09926 6.57 3.285 6.57 C1.47074 6.57 0 5.09926 0 3.285 C0 1.47074 1.47074 0 3.285 0 C5.09926 0 6.57 1.47074 6.57 3.285 Z" fill="#18b170"/></svg>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "70px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#18b170" }}>Subscribed</p>
                </div>
              </div>
              <div style={{ width: "160px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "127px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#2d2d2d" }}>Harbor Club Starter</p>
              </div>
              <div style={{ width: "80px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "9px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#2d2d2d" }}>4</p>
              </div>
              <div style={{ width: "124px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "36px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#2d2d2d" }}>$356</p>
              </div>
              <div style={{ width: "150px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "2.41px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "rgba(253, 75, 35, 0.16)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "rgba(253, 75, 35, 0.16)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "rgba(253, 75, 35, 0.16)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "rgba(253, 75, 35, 0.16)" }} />
                </div>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "30px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#2d2d2d" }}>55%</p>
              </div>
              <div style={{ width: "160px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "86px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#2d2d2d" }}>Dec 13, 2026</p>
              </div>
              <div style={{ width: "57.92px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
                <DotsVertical size={17.5} strokeWidth={1.51} style={{ width: "17.53px", height: "17.53px", flexShrink: 0, color: "#c4c4c4", display: "block" }} />
              </div>
            </div>
            <div style={{ width: "1201.92px", height: "1.1px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ flex: "1 1 0", minWidth: 0, height: "1.1px", flexShrink: 0, background: "#eeeeee" }} />
            </div>
            <div style={{ width: "1201.92px", height: "63.55px", flexShrink: 0, borderRadius: "8.77px", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "46px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "17.53px", height: "17.53px", flexShrink: 0, borderRadius: "4.38px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #d0d3d9", display: "flex", flexDirection: "row", padding: "1.1px 1.1px 1.1px 1.1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }} />
              </div>
              <div style={{ width: "292px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10.96px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ width: "32.87px", height: "32.87px", flexShrink: 0, borderRadius: "16.43px", background: "rgba(77, 152, 254, 0.14)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "18px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#4d98fe" }}>NF</p>
                  </div>
                  <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.19px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "88px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 500, color: "#222222" }}>Noah Fischer</p>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "129px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#999999" }}>noah.fischer@web.de</p>
                  </div>
                </div>
              </div>
              <div style={{ width: "132px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, borderRadius: "6.57px", background: "#fff1f1", display: "flex", flexDirection: "row", padding: "3.29px 8.77px 3.29px 7.67px", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <svg style={{ width: "6.57px", height: "6.57px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="6.57" height="6.57" viewBox="0 0 6.57 6.57" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M6.57 3.285 C6.57 5.09926 5.09926 6.57 3.285 6.57 C1.47074 6.57 0 5.09926 0 3.285 C0 1.47074 1.47074 0 3.285 0 C5.09926 0 6.57 1.47074 6.57 3.285 Z" fill="#e5484d"/></svg>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "55px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#e5484d" }}>Bounced</p>
                </div>
              </div>
              <div style={{ width: "160px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "13px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#999999" }}>—</p>
              </div>
              <div style={{ width: "80px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "10px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#2d2d2d" }}>0</p>
              </div>
              <div style={{ width: "124px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "19px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#2d2d2d" }}>$0</p>
              </div>
              <div style={{ width: "150px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "2.41px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "rgba(253, 75, 35, 0.16)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "rgba(253, 75, 35, 0.16)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "rgba(253, 75, 35, 0.16)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "rgba(253, 75, 35, 0.16)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "rgba(253, 75, 35, 0.16)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "rgba(253, 75, 35, 0.16)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "rgba(253, 75, 35, 0.16)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "rgba(253, 75, 35, 0.16)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "rgba(253, 75, 35, 0.16)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "rgba(253, 75, 35, 0.16)" }} />
                </div>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "21px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#2d2d2d" }}>0%</p>
              </div>
              <div style={{ width: "160px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "84px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#2d2d2d" }}>Oct 21, 2026</p>
              </div>
              <div style={{ width: "57.92px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
                <DotsVertical size={17.5} strokeWidth={1.51} style={{ width: "17.53px", height: "17.53px", flexShrink: 0, color: "#c4c4c4", display: "block" }} />
              </div>
            </div>
            <div style={{ width: "1201.92px", height: "1.1px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ flex: "1 1 0", minWidth: 0, height: "1.1px", flexShrink: 0, background: "#eeeeee" }} />
            </div>
            <div style={{ width: "1201.92px", height: "63.55px", flexShrink: 0, borderRadius: "8.77px", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "46px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "17.53px", height: "17.53px", flexShrink: 0, borderRadius: "4.38px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #d0d3d9", display: "flex", flexDirection: "row", padding: "1.1px 1.1px 1.1px 1.1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }} />
              </div>
              <div style={{ width: "292px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10.96px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ width: "32.87px", height: "32.87px", flexShrink: 0, borderRadius: "16.43px", background: "rgba(255, 114, 171, 0.14)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "18px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#ff72ab" }}>GL</p>
                  </div>
                  <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.19px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "63px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 500, color: "#222222" }}>Grace Liu</p>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "125px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#999999" }}>grace.liu@gmail.com</p>
                  </div>
                </div>
              </div>
              <div style={{ width: "132px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, borderRadius: "6.57px", background: "#e8f7f0", display: "flex", flexDirection: "row", padding: "3.29px 8.77px 3.29px 7.67px", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <svg style={{ width: "6.57px", height: "6.57px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="6.57" height="6.57" viewBox="0 0 6.57 6.57" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M6.57 3.285 C6.57 5.09926 5.09926 6.57 3.285 6.57 C1.47074 6.57 0 5.09926 0 3.285 C0 1.47074 1.47074 0 3.285 0 C5.09926 0 6.57 1.47074 6.57 3.285 Z" fill="#18b170"/></svg>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "70px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#18b170" }}>Subscribed</p>
                </div>
              </div>
              <div style={{ width: "160px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "13px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#999999" }}>—</p>
              </div>
              <div style={{ width: "80px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "9px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#2d2d2d" }}>3</p>
              </div>
              <div style={{ width: "124px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "32px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#2d2d2d" }}>$218</p>
              </div>
              <div style={{ width: "150px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "2.41px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "rgba(253, 75, 35, 0.16)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "rgba(253, 75, 35, 0.16)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "rgba(253, 75, 35, 0.16)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "rgba(253, 75, 35, 0.16)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "rgba(253, 75, 35, 0.16)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "rgba(253, 75, 35, 0.16)" }} />
                </div>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "29px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#2d2d2d" }}>42%</p>
              </div>
              <div style={{ width: "160px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "86px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#2d2d2d" }}>Dec 10, 2026</p>
              </div>
              <div style={{ width: "57.92px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
                <DotsVertical size={17.5} strokeWidth={1.51} style={{ width: "17.53px", height: "17.53px", flexShrink: 0, color: "#c4c4c4", display: "block" }} />
              </div>
            </div>
            <div style={{ width: "1201.92px", height: "1.1px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ flex: "1 1 0", minWidth: 0, height: "1.1px", flexShrink: 0, background: "#eeeeee" }} />
            </div>
            <div style={{ width: "1201.92px", height: "63.55px", flexShrink: 0, borderRadius: "8.77px", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "46px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "17.53px", height: "17.53px", flexShrink: 0, borderRadius: "4.38px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #d0d3d9", display: "flex", flexDirection: "row", padding: "1.1px 1.1px 1.1px 1.1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }} />
              </div>
              <div style={{ width: "292px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10.96px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ width: "32.87px", height: "32.87px", flexShrink: 0, borderRadius: "16.43px", background: "rgba(24, 177, 112, 0.14)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "17px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#18b170" }}>EB</p>
                  </div>
                  <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.19px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "89px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 500, color: "#222222" }}>Ethan Brooks</p>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "140px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#999999" }}>ethan.brooks@hey.com</p>
                  </div>
                </div>
              </div>
              <div style={{ width: "132px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, borderRadius: "6.57px", background: "#e8f7f0", display: "flex", flexDirection: "row", padding: "3.29px 8.77px 3.29px 7.67px", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <svg style={{ width: "6.57px", height: "6.57px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="6.57" height="6.57" viewBox="0 0 6.57 6.57" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M6.57 3.285 C6.57 5.09926 5.09926 6.57 3.285 6.57 C1.47074 6.57 0 5.09926 0 3.285 C0 1.47074 1.47074 0 3.285 0 C5.09926 0 6.57 1.47074 6.57 3.285 Z" fill="#18b170"/></svg>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "70px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#18b170" }}>Subscribed</p>
                </div>
              </div>
              <div style={{ width: "160px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "111px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#2d2d2d" }}>Harbor Club Plus</p>
              </div>
              <div style={{ width: "80px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "15px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#2d2d2d" }}>10</p>
              </div>
              <div style={{ width: "124px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "39px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#2d2d2d" }}>$1,146</p>
              </div>
              <div style={{ width: "150px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "2.41px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "rgba(253, 75, 35, 0.16)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "rgba(253, 75, 35, 0.16)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "rgba(253, 75, 35, 0.16)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "rgba(253, 75, 35, 0.16)" }} />
                </div>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "30px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#2d2d2d" }}>60%</p>
              </div>
              <div style={{ width: "160px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "86px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#2d2d2d" }}>Dec 13, 2026</p>
              </div>
              <div style={{ width: "57.92px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
                <DotsVertical size={17.5} strokeWidth={1.51} style={{ width: "17.53px", height: "17.53px", flexShrink: 0, color: "#c4c4c4", display: "block" }} />
              </div>
            </div>
            <div style={{ width: "1201.92px", height: "1.1px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ flex: "1 1 0", minWidth: 0, height: "1.1px", flexShrink: 0, background: "#eeeeee" }} />
            </div>
            <div style={{ width: "1201.92px", height: "63.55px", flexShrink: 0, borderRadius: "8.77px", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "46px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "17.53px", height: "17.53px", flexShrink: 0, borderRadius: "4.38px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #d0d3d9", display: "flex", flexDirection: "row", padding: "1.1px 1.1px 1.1px 1.1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }} />
              </div>
              <div style={{ width: "292px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10.96px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ width: "32.87px", height: "32.87px", flexShrink: 0, borderRadius: "16.43px", background: "rgba(124, 92, 255, 0.14)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "22px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#7c5cff" }}>CM</p>
                  </div>
                  <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.19px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "86px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 500, color: "#222222" }}>Chloe Martin</p>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "167px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#999999" }}>chloe.martin@outlook.co.uk</p>
                  </div>
                </div>
              </div>
              <div style={{ width: "132px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, borderRadius: "6.57px", background: "#e8f7f0", display: "flex", flexDirection: "row", padding: "3.29px 8.77px 3.29px 7.67px", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <svg style={{ width: "6.57px", height: "6.57px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="6.57" height="6.57" viewBox="0 0 6.57 6.57" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M6.57 3.285 C6.57 5.09926 5.09926 6.57 3.285 6.57 C1.47074 6.57 0 5.09926 0 3.285 C0 1.47074 1.47074 0 3.285 0 C5.09926 0 6.57 1.47074 6.57 3.285 Z" fill="#18b170"/></svg>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "70px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#18b170" }}>Subscribed</p>
                </div>
              </div>
              <div style={{ width: "160px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "13px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#999999" }}>—</p>
              </div>
              <div style={{ width: "80px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "6px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#2d2d2d" }}>1</p>
              </div>
              <div style={{ width: "124px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "27px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#2d2d2d" }}>$42</p>
              </div>
              <div style={{ width: "150px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "2.41px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "rgba(253, 75, 35, 0.16)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "rgba(253, 75, 35, 0.16)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "rgba(253, 75, 35, 0.16)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "rgba(253, 75, 35, 0.16)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "rgba(253, 75, 35, 0.16)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "rgba(253, 75, 35, 0.16)" }} />
                  <div style={{ width: "2.85px", height: "13.15px", flexShrink: 0, borderRadius: "1.42px", background: "rgba(253, 75, 35, 0.16)" }} />
                </div>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "30px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#2d2d2d" }}>29%</p>
              </div>
              <div style={{ width: "160px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "81px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#2d2d2d" }}>Dec 6, 2026</p>
              </div>
              <div style={{ width: "57.92px", height: "63.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", gap: "8.77px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
                <DotsVertical size={17.5} strokeWidth={1.51} style={{ width: "17.53px", height: "17.53px", flexShrink: 0, color: "#c4c4c4", display: "block" }} />
              </div>
            </div>
          </div>
          <div style={{ alignSelf: "stretch", flex: "1 1 0", minHeight: 0, flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }} />
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "198px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#999999" }}>
              <span style={{ fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#999999" }}>{"Showing "}</span>
              <span style={{ fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 500, color: "#222222" }}>1–11</span>
              <span style={{ fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#999999" }}>{" of 18,420 people"}</span>
            </p>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "96px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#6c6c6c" }}>Page 1 of 1,675</p>
              <div style={{ width: "37.25px", height: "37.25px", flexShrink: 0, borderRadius: "8.77px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8, 0px 1.1px 1.1px 0px rgba(13, 13, 18, 0.08)", display: "flex", flexDirection: "row", gap: "6.57px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <ChevronLeft size={19.7} style={{ width: "19.72px", height: "19.72px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
              </div>
              <div style={{ width: "37.25px", height: "37.25px", flexShrink: 0, borderRadius: "8.77px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8, 0px 1.1px 1.1px 0px rgba(13, 13, 18, 0.08)", display: "flex", flexDirection: "row", gap: "6.57px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <ChevronRight size={19.7} style={{ width: "19.72px", height: "19.72px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
