// Integrations page (loopo, Templates) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Ingot Icons.
import type { SVGProps } from "react";

// Ingot Icons used here, inlined so this file needs no icon package.
function icon(body: string) {
  return function Icon({ size = 24, strokeWidth = 1.5, ...p }: { size?: number; strokeWidth?: number } & SVGProps<SVGSVGElement>) {
    const html = strokeWidth == 1.5 ? body : body.replace(/stroke-width="([\d.]+)"/g, (_, w) => `stroke-width="${(Number(w) * Number(strokeWidth)) / 1.5}"`);
    return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden {...p} dangerouslySetInnerHTML={{ __html: html }} />;
  };
}
const ChevronRight = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M9 6l6 6l-6 6\" /></g>");
const DotsVertical = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M11 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0\" /><path d=\"M11 19a1 1 0 1 0 2 0a1 1 0 1 0 -2 0\" /><path d=\"M11 5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0\" /></g>");
const Key = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M16.555 3.843l3.602 3.602a2.877 2.877 0 0 1 0 4.069l-2.643 2.643a2.877 2.877 0 0 1 -4.069 0l-.301 -.301l-6.558 6.558a2 2 0 0 1 -1.239 .578l-.175 .008h-1.172a1 1 0 0 1 -.993 -.883l-.007 -.117v-1.172a2 2 0 0 1 .467 -1.284l.119 -.13l.414 -.414h2v-2h2v-2l2.144 -2.144l-.301 -.301a2.877 2.877 0 0 1 0 -4.069l2.643 -2.643a2.877 2.877 0 0 1 4.069 0\" /><path d=\"M15 9h.01\" /></g>");
const Loader = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 6l0 -3\" /><path d=\"M16.25 7.75l2.15 -2.15\" /><path d=\"M18 12l3 0\" /><path d=\"M16.25 16.25l2.15 2.15\" /><path d=\"M12 18l0 3\" /><path d=\"M7.75 16.25l-2.15 2.15\" /><path d=\"M6 12l-3 0\" /><path d=\"M7.75 7.75l-2.15 -2.15\" /></g>");
const Puzzle = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1\" /></g>");
const Search = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 10a7 7 0 1 0 14 0a7 7 0 1 0 -14 0\" /><path d=\"M21 21l-6 -6\" /></g>");
const BellBulk = icon("<path d=\"M10 5A2 2 0 1 1 14 5 7 7 0 0 1 18 11V14A4 4 0 0 0 20 17H4A4 4 0 0 0 6 14V11A7 7 0 0 1 10 5\" fill=\"currentColor\" fill-opacity=\"0.4\"/><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M9 17V18A3 3 0 0 0 15 18V17\"/></g>");
const BoltBulk = icon("<path d=\"M13 3L13 10 19 10 11 21 11 14 5 14 13 3\" fill=\"currentColor\" fill-opacity=\"0.4\"/>");
const ChartLineBulk = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 19l16 0\" /><path d=\"M4 15l4 -6l4 2l4 -5l4 4\" /></g>");
const CreditCardHandBulk = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M2 4h9.914a3 3 0 0 1 1.92 .695l5.166 4.305\" /><path d=\"M11.15 9h8.85a2 2 0 0 1 2 2v7a2 2 0 0 1 -2 2h-13a2 2 0 0 1 -2 -2v-8.7\" /><path d=\"M3 8l7.2 4.7a1.803 1.803 0 0 0 2 -3l-4.2 -2.7\" /><path d=\"M5 16h17\" /></g>");
const FileBulk = icon("<path d=\"M17 21H7A2 2 0 0 1 5 19V5A2 2 0 0 1 7 3H14L19 8V19A2 2 0 0 1 17 21\" fill=\"currentColor\" fill-opacity=\"0.4\"/><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M14 3V7A1 1 0 0 0 15 8H19\"/></g>");
const FilterBulk = icon("<path d=\"M4 4H20V6.172000000000001A2 2 0 0 1 19.414 7.586L15.000000000000002 12V19L9.000000000000002 21V12.5L4.520000000000001 7.572A2 2 0 0 1 4.000000000000002 6.227V4\" fill=\"currentColor\" fill-opacity=\"0.4\"/>");
const HelpCircleBulk = icon("<path d=\"M3 12A9 9 0 1 0 21 12 9 9 0 0 0 3 12\" fill=\"currentColor\" fill-opacity=\"0.4\"/><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 16V16.01\"/><path d=\"M12 13A2 2 0 0 0 12.914 9.218 1.98 1.98 0 0 0 10.5 9.701\"/></g>");
const LayoutDashboardBulk = icon("<path d=\"M5 4H9A1 1 0 0 1 10 5V11A1 1 0 0 1 9 12H5A1 1 0 0 1 4 11V5A1 1 0 0 1 5 4\" fill=\"currentColor\" fill-opacity=\"0.4\"/><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M5 16H9A1 1 0 0 1 10 17V19A1 1 0 0 1 9 20H5A1 1 0 0 1 4 19V17A1 1 0 0 1 5 16\"/><path d=\"M15 12H19A1 1 0 0 1 20 13V19A1 1 0 0 1 19 20H15A1 1 0 0 1 14 19V13A1 1 0 0 1 15 12\"/><path d=\"M15 4H19A1 1 0 0 1 20 5V7A1 1 0 0 1 19 8H15A1 1 0 0 1 14 7V5A1 1 0 0 1 15 4\"/></g>");
const LicenseBulk = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11\" /><path d=\"M9 7l4 0\" /><path d=\"M9 11l4 0\" /></g>");
const MegaphoneBulk = icon("<path d=\"M11 6A13 13 0 0 0 19.4 3.2 1 1 0 0 1 21 4V16A1 1 0 0 1 19.4 16.8 13 13 0 0 0 11 14H5A2 2 0 0 1 3 12V8A2 2 0 0 1 5 6Z\" fill=\"currentColor\" fill-opacity=\"0.4\"/><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M8 6V14\"/></g><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M6 14A12 12 0 0 0 8.4 21.2 2 2 0 0 0 11.600000000000001 18.8 8 8 0 0 1 10 14\"/></g>");
const NoteBulk = icon("<path d=\"M13 20V14A1 1 0 0 1 14 13H20V6A2 2 0 0 0 18 4H6A2 2 0 0 0 4 6V18A2 2 0 0 0 6 20H13\" fill=\"currentColor\" fill-opacity=\"0.4\"/><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M13 20L20 13\"/></g>");
const SendBulk = icon("<path d=\"M21 3L14.5 21A0.55 0.55 0 0 1 13.5 21L10 14 3 10.5A0.55 0.55 0 0 1 3 9.5L21 3\" fill=\"currentColor\" fill-opacity=\"0.4\"/><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M10 14L21 3\"/></g>");
const SettingsBulk = icon("<path d=\"M10.325 4.317C10.751 2.561 13.248999999999999 2.561 13.674999999999999 4.317A1.724 1.724 0 0 0 16.247999999999998 5.383C17.790999999999997 4.443 19.557999999999996 6.209 18.618 7.753A1.724 1.724 0 0 0 19.683 10.325C21.439 10.751 21.439 13.248999999999999 19.683 13.674999999999999A1.724 1.724 0 0 0 18.617 16.247999999999998C19.557000000000002 17.790999999999997 17.791 19.557999999999996 16.247 18.618A1.724 1.724 0 0 0 13.675 19.683C13.249 21.439 10.751000000000001 21.439 10.325000000000001 19.683A1.724 1.724 0 0 0 7.752000000000001 18.617C6.2090000000000005 19.557000000000002 4.442 17.791 5.382000000000001 16.247A1.724 1.724 0 0 0 4.317 13.675C2.561 13.249 2.561 10.751000000000001 4.317 10.325000000000001A1.724 1.724 0 0 0 5.383 7.752000000000001C4.443 6.2090000000000005 6.209 4.442 7.753 5.382000000000001 8.753 5.99 10.049 5.452000000000001 10.325 4.317\" fill=\"currentColor\" fill-opacity=\"0.4\"/><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M9 12A3 3 0 1 0 15 12 3 3 0 0 0 9 12\"/></g>");
const TrendingUpBulk = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 17l6 -6l4 4l8 -8\" /><path d=\"M14 7l7 0l0 7\" /></g>");
const UserBulk = icon("<path d=\"M8 7A4 4 0 1 0 16 7 4 4 0 0 0 8 7\" fill=\"currentColor\" fill-opacity=\"0.4\"/><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M6 21V19A4 4 0 0 1 10 15H14A4 4 0 0 1 18 19V21\"/></g>");
const UsersBulk = icon("<path d=\"M5 7A4 4 0 1 0 13 7 4 4 0 1 0 5 7\" fill=\"currentColor\" fill-opacity=\"0.4\"/><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 21V19A4 4 0 0 1 7 15H11A4 4 0 0 1 15 19V21\"/><path d=\"M16 3.13A4 4 0 0 1 16 10.879999999999999\"/><path d=\"M21 21V19A4 4 0 0 0 18 15.15\"/></g>");
const WalletBulk = icon("<path d=\"M20 12V16H16A2 2 0 0 1 16 12H20\" fill=\"currentColor\" fill-opacity=\"0.4\"/><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M17 8v-3a1 1 0 0 0 -1 -1h-10a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1 -1 1h-12a2 2 0 0 1 -2 -2v-12\" /><path d=\"M20 12v4h-4a2 2 0 0 1 0 -4h4\" /></g>");
const WebhookBulk = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4.876 13.61a4 4 0 1 0 6.124 3.39h6\" /><path d=\"M15.066 20.502a4 4 0 1 0 1.934 -7.502c-.706 0 -1.424 .179 -2 .5l-3 -5.5\" /><path d=\"M16 8a4 4 0 1 0 -8 0c0 1.506 .77 2.818 2 3.5l-3 5.5\" /></g>");
const LayoutDashboardSolid = icon("<g fill=\"currentColor\"><path d=\"M9 3a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2v-6a2 2 0 0 1 2 -2zm0 12a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2v-2a2 2 0 0 1 2 -2zm10 -4a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2v-6a2 2 0 0 1 2 -2zm0 -8a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2v-2a2 2 0 0 1 2 -2z\" /></g>");
const OutletSolid = icon("<mask id=\"fu-outlet\" maskUnits=\"userSpaceOnUse\" x=\"0\" y=\"0\" width=\"24\" height=\"24\"><rect width=\"24\" height=\"24\" fill=\"#fff\"/><g stroke=\"#000\" fill=\"none\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></g><path d=\"M8.5 12A0.5 0.5 0 1 0 9.5 12 0.5 0.5 0 1 0 8.5 12\" fill=\"#000\"/><path d=\"M14.5 12A0.5 0.5 0 1 0 15.5 12 0.5 0.5 0 1 0 14.5 12\" fill=\"#000\"/></mask><g mask=\"url(#fu-outlet)\"><path d=\"M4 6A2 2 0 0 1 6 4H18A2 2 0 0 1 20 6V18A2 2 0 0 1 18 20H6A2 2 0 0 1 4 18L4 6\" fill=\"currentColor\"/><path d=\"M4 6A2 2 0 0 1 6 4H18A2 2 0 0 1 20 6V18A2 2 0 0 1 18 20H6A2 2 0 0 1 4 18L4 6\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></g>");

export function IntegrationsPage() {
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
                      <div style={{ alignSelf: "stretch", height: "32.83px", flexShrink: 0, borderRadius: "8px", background: "#ececed", boxShadow: "inset 0 0 0 1.1px #e8e8e8", display: "flex", flexDirection: "column", padding: "6.41px 10.96px 6.41px 10.96px", justifyContent: "center", alignItems: "flex-start", boxSizing: "border-box" }}>
                        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4.38px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                          <OutletSolid size={15.3} strokeWidth={1.51} style={{ width: "15.34px", height: "15.34px", flexShrink: 0, color: "#000000", display: "block" }} />
                          <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "87px", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 500, color: "#000000" }}>Integrations</p>
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
          <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "103px", fontFamily: "'Geist'", fontSize: "17.53px", fontWeight: 500, color: "#666d80", lineHeight: "1.5", letterSpacing: "0.02em" }}>Integrations</p>
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
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "131px", lineHeight: "31px", fontFamily: "'Geist'", fontSize: "24.1px", fontWeight: 500, color: "#202020", letterSpacing: "-0.02em" }}>Integrations</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "414px", lineHeight: "23px", fontFamily: "'Geist'", fontSize: "17.53px", fontWeight: 400, color: "#747474", letterSpacing: "-0.02em" }}>Connect Loopo to the tools Harbor & Co. already uses.</p>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10.96px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ height: "39.44px", flexShrink: 0, borderRadius: "109.56px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8", display: "flex", flexDirection: "row", padding: "10.96px 10.96px 10.96px 10.96px", gap: "6.57px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <Key size={17.5} strokeWidth={1.51} style={{ width: "17.53px", height: "17.53px", flexShrink: 0, color: "#8b8b8b", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "57px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 500, color: "#6c6c6c", lineHeight: "17.53px" }}>API keys</p>
            </div>
            <div style={{ height: "39.44px", flexShrink: 0, borderRadius: "109.56px", background: "linear-gradient(180deg, #838383 0%, #2d2d2d 100%)", boxShadow: "0px 9.86px 8.77px 0px rgba(0, 0, 0, 0.04)", display: "flex", flexDirection: "column", padding: "10.96px 10.96px 10.96px 10.96px", gap: "10.96px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ alignSelf: "stretch", height: "17.53px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "4.38px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <Puzzle size={17.5} strokeWidth={1.51} style={{ width: "17.53px", height: "17.53px", flexShrink: 0, color: "#ffffff", display: "block" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "132px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 500, color: "#ffffff", lineHeight: "17.53px" }}>Request integration</p>
              </div>
            </div>
          </div>
        </div>
        <div style={{ position: "absolute", left: "19.72px", top: "109.56px", width: "1245.74px", height: "37.25px", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, borderRadius: "10.96px", background: "#f5f5f5", display: "flex", flexDirection: "row", padding: "3.29px 3.29px 3.29px 3.29px", gap: "2.19px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, borderRadius: "8.77px", background: "#ffffff", boxShadow: "0px 0px 1.1px 0px rgba(0, 0, 0, 0.25)", display: "flex", flexDirection: "row", padding: "5.48px 10.96px 5.48px 10.96px", gap: "6.57px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "18px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 500, color: "#000000" }}>All</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "13px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#999999" }}>18</p>
            </div>
            <div style={{ flexShrink: 0, borderRadius: "8.77px", display: "flex", flexDirection: "row", padding: "5.48px 10.96px 5.48px 10.96px", gap: "6.57px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "71px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#6c6c6c" }}>Connected</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "9px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#999999" }}>5</p>
            </div>
            <div style={{ flexShrink: 0, borderRadius: "8.77px", display: "flex", flexDirection: "row", padding: "5.48px 10.96px 5.48px 10.96px", gap: "6.57px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "65px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#6c6c6c" }}>Payments</p>
            </div>
            <div style={{ flexShrink: 0, borderRadius: "8.77px", display: "flex", flexDirection: "row", padding: "5.48px 10.96px 5.48px 10.96px", gap: "6.57px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "71px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#6c6c6c" }}>Commerce</p>
            </div>
            <div style={{ flexShrink: 0, borderRadius: "8.77px", display: "flex", flexDirection: "row", padding: "5.48px 10.96px 5.48px 10.96px", gap: "6.57px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "67px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#6c6c6c" }}>Marketing</p>
            </div>
            <div style={{ flexShrink: 0, borderRadius: "8.77px", display: "flex", flexDirection: "row", padding: "5.48px 10.96px 5.48px 10.96px", gap: "6.57px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "60px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#6c6c6c" }}>Analytics</p>
            </div>
            <div style={{ flexShrink: 0, borderRadius: "8.77px", display: "flex", flexDirection: "row", padding: "5.48px 10.96px 5.48px 10.96px", gap: "6.57px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "78px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#6c6c6c" }}>Productivity</p>
            </div>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "13.15px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "167px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#999999" }}>5 connected · 13 available</p>
            <div style={{ width: "262.95px", height: "37.25px", flexShrink: 0, borderRadius: "8.77px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8", display: "flex", flexDirection: "row", padding: "1.1px 12.06px 1.1px 12.06px", gap: "6.57px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <Search size={15.3} strokeWidth={1.51} style={{ width: "15.34px", height: "15.34px", flexShrink: 0, color: "#686765", display: "block" }} />
              <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 400, color: "#999999" }}>Search integrations</p>
            </div>
          </div>
        </div>
        <div style={{ position: "absolute", left: "19.72px", top: "166.53px", width: "401.43px", height: "207.9px", borderRadius: "13.15px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #eeeeee, 0px 1.1px 4.38px 0px rgba(0, 0, 0, 0.05)", display: "flex", flexDirection: "column", padding: "12.06px 5.48px 5.48px 5.48px", gap: "10.96px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 6.57px 0px 6.57px", gap: "10.96px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "37.25px", height: "37.25px", flexShrink: 0, borderRadius: "9.86px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8", display: "flex", flexDirection: "row", padding: "1.1px 1.1px 1.1px 1.1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <svg width={21.9} height={21.9} viewBox="0 0 24 24" style={{ width: "21.91px", height: "21.91px", flexShrink: 0, color: "#635bff", display: "block" }}><path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.594-7.305h.003z" fill="currentColor" /></svg>
            </div>
            <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.19px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "44px", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 500, color: "#222222" }}>Stripe</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "60px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#999999" }}>Payments</p>
            </div>
            <div style={{ flexShrink: 0, borderRadius: "6.57px", background: "#e8f7f0", display: "flex", flexDirection: "row", padding: "3.29px 8.77px 3.29px 7.67px", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <svg style={{ width: "6.57px", height: "6.57px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="6.57" height="6.57" viewBox="0 0 6.57 6.57" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M6.57 3.285 C6.57 5.09926 5.09926 6.57 3.285 6.57 C1.47074 6.57 0 5.09926 0 3.285 C0 1.47074 1.47074 0 3.285 0 C5.09926 0 6.57 1.47074 6.57 3.285 Z" fill="#18b170"/></svg>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "68px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#18b170" }}>Connected</p>
            </div>
            <div style={{ width: "26.3px", height: "26.3px", flexShrink: 0, borderRadius: "6.57px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <DotsVertical size={17.5} strokeWidth={1.51} style={{ width: "17.53px", height: "17.53px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
            </div>
          </div>
          <div style={{ alignSelf: "stretch", flex: "1 1 0", minHeight: 0, flexShrink: 0, borderRadius: "8.77px", background: "rgba(255, 255, 255, 0.91)", boxShadow: "0px 0px 1.1px 0px rgba(0, 0, 0, 0.25)", display: "flex", flexDirection: "column", padding: "10.96px 10.96px 10.96px 10.96px", gap: "10.96px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ width: "370.75px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#6b6b70", lineHeight: "1.5" }}>Card, Apple Pay and Google Pay at checkout on harborandco.com. Refunds and disputes sync back.</p>
            <div style={{ width: "370.75px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "176px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 500, color: "#7d818c" }}>Online payments · 30 days</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "59px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 500, color: "#222222" }}>$26,800</p>
            </div>
            <div style={{ alignSelf: "stretch", flex: "1 1 0", minHeight: 0, flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }} />
            <div style={{ width: "370.75px", height: "1.1px", flexShrink: 0, background: "#eeeeee" }} />
            <div style={{ width: "370.75px", height: "19.72px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6.57px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <svg style={{ width: "6.57px", height: "6.57px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="6.57" height="6.57" viewBox="0 0 6.57 6.57" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M6.57 3.285 C6.57 5.09926 5.09926 6.57 3.285 6.57 C1.47074 6.57 0 5.09926 0 3.285 C0 1.47074 1.47074 0 3.285 0 C5.09926 0 6.57 1.47074 6.57 3.285 Z" fill="#18b170"/></svg>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "108px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#999999" }}>Synced 4 min ago</p>
              </div>
              <div style={{ width: "32.87px", height: "19.72px", flexShrink: 0, borderRadius: "9.86px", background: "#fd4b23", position: "relative" }}>
                <svg style={{ position: "absolute", left: "15.34px", top: "2.19px", width: "15.34px", height: "15.34px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="15.34" height="15.34" viewBox="0 0 15.34 15.34" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M15.34 7.67 C15.34 11.906 11.906 15.34 7.67 15.34 C3.43398 15.34 0 11.906 0 7.67 C0 3.43398 3.43398 0 7.67 0 C11.906 0 15.34 3.43398 15.34 7.67 Z" fill="#ffffff"/></svg>
              </div>
            </div>
          </div>
        </div>
        <div style={{ position: "absolute", left: "441.88px", top: "166.53px", width: "401.43px", height: "207.9px", borderRadius: "13.15px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #eeeeee, 0px 1.1px 4.38px 0px rgba(0, 0, 0, 0.05)", display: "flex", flexDirection: "column", padding: "12.06px 5.48px 5.48px 5.48px", gap: "10.96px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 6.57px 0px 6.57px", gap: "10.96px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "37.25px", height: "37.25px", flexShrink: 0, borderRadius: "9.86px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8", display: "flex", flexDirection: "row", padding: "1.1px 1.1px 1.1px 1.1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <svg width={21.9} height={21.9} viewBox="0 0 24 24" style={{ width: "21.91px", height: "21.91px", flexShrink: 0, color: "#5e8e3e", display: "block" }}><path d="M15.337 23.979l7.216-1.561s-2.604-17.613-2.625-17.73c-.018-.116-.114-.192-.211-.192s-1.929-.136-1.929-.136-1.275-1.274-1.439-1.411c-.045-.037-.075-.057-.121-.074l-.914 21.104h.023zM11.71 11.305s-.81-.424-1.774-.424c-1.447 0-1.504.906-1.504 1.141 0 1.232 3.24 1.715 3.24 4.629 0 2.295-1.44 3.76-3.406 3.76-2.354 0-3.54-1.465-3.54-1.465l.646-2.086s1.245 1.066 2.28 1.066c.675 0 .975-.545.975-.932 0-1.619-2.654-1.694-2.654-4.359-.034-2.237 1.571-4.416 4.827-4.416 1.257 0 1.875.361 1.875.361l-.945 2.715-.02.01zM11.17.83c.136 0 .271.038.405.135-.984.465-2.064 1.639-2.508 3.992-.656.213-1.293.405-1.889.578C7.697 3.75 8.951.84 11.17.84V.83zm1.235 2.949v.135c-.754.232-1.583.484-2.394.736.466-1.777 1.333-2.645 2.085-2.971.193.501.309 1.176.309 2.1zm.539-2.234c.694.074 1.141.867 1.429 1.755-.349.114-.735.231-1.158.366v-.252c0-.752-.096-1.371-.271-1.871v.002zm2.992 1.289c-.02 0-.06.021-.078.021s-.289.075-.714.21c-.423-1.233-1.176-2.37-2.508-2.37h-.115C12.135.209 11.669 0 11.265 0 8.159 0 6.675 3.877 6.21 5.846c-1.194.365-2.063.636-2.16.674-.675.213-.694.232-.772.87-.075.462-1.83 14.063-1.83 14.063L15.009 24l.927-21.166z" fill="currentColor" /></svg>
            </div>
            <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.19px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "55px", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 500, color: "#222222" }}>Shopify</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "66px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#999999" }}>Commerce</p>
            </div>
            <div style={{ flexShrink: 0, borderRadius: "6.57px", background: "#e8f7f0", display: "flex", flexDirection: "row", padding: "3.29px 8.77px 3.29px 7.67px", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <svg style={{ width: "6.57px", height: "6.57px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="6.57" height="6.57" viewBox="0 0 6.57 6.57" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M6.57 3.285 C6.57 5.09926 5.09926 6.57 3.285 6.57 C1.47074 6.57 0 5.09926 0 3.285 C0 1.47074 1.47074 0 3.285 0 C5.09926 0 6.57 1.47074 6.57 3.285 Z" fill="#18b170"/></svg>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "68px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#18b170" }}>Connected</p>
            </div>
            <div style={{ width: "26.3px", height: "26.3px", flexShrink: 0, borderRadius: "6.57px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <DotsVertical size={17.5} strokeWidth={1.51} style={{ width: "17.53px", height: "17.53px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
            </div>
          </div>
          <div style={{ alignSelf: "stretch", flex: "1 1 0", minHeight: 0, flexShrink: 0, borderRadius: "8.77px", background: "rgba(255, 255, 255, 0.91)", boxShadow: "0px 0px 1.1px 0px rgba(0, 0, 0, 0.25)", display: "flex", flexDirection: "column", padding: "10.96px 10.96px 10.96px 10.96px", gap: "10.96px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ width: "370.75px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#6b6b70", lineHeight: "1.5" }}>Syncs customers, orders, products and abandoned carts from harborandco.myshopify.com.</p>
            <div style={{ width: "370.75px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "160px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 500, color: "#7d818c" }}>Orders synced · 30 days</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "28px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 500, color: "#222222" }}>430</p>
            </div>
            <div style={{ alignSelf: "stretch", flex: "1 1 0", minHeight: 0, flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }} />
            <div style={{ width: "370.75px", height: "1.1px", flexShrink: 0, background: "#eeeeee" }} />
            <div style={{ width: "370.75px", height: "19.72px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6.57px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <svg style={{ width: "6.57px", height: "6.57px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="6.57" height="6.57" viewBox="0 0 6.57 6.57" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M6.57 3.285 C6.57 5.09926 5.09926 6.57 3.285 6.57 C1.47074 6.57 0 5.09926 0 3.285 C0 1.47074 1.47074 0 3.285 0 C5.09926 0 6.57 1.47074 6.57 3.285 Z" fill="#18b170"/></svg>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "113px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#999999" }}>Synced 12 min ago</p>
              </div>
              <div style={{ width: "32.87px", height: "19.72px", flexShrink: 0, borderRadius: "9.86px", background: "#fd4b23", position: "relative" }}>
                <svg style={{ position: "absolute", left: "15.34px", top: "2.19px", width: "15.34px", height: "15.34px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="15.34" height="15.34" viewBox="0 0 15.34 15.34" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M15.34 7.67 C15.34 11.906 11.906 15.34 7.67 15.34 C3.43398 15.34 0 11.906 0 7.67 C0 3.43398 3.43398 0 7.67 0 C11.906 0 15.34 3.43398 15.34 7.67 Z" fill="#ffffff"/></svg>
              </div>
            </div>
          </div>
        </div>
        <div style={{ position: "absolute", left: "864.03px", top: "166.53px", width: "401.43px", height: "207.9px", borderRadius: "13.15px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #eeeeee, 0px 1.1px 4.38px 0px rgba(0, 0, 0, 0.05)", display: "flex", flexDirection: "column", padding: "12.06px 5.48px 5.48px 5.48px", gap: "10.96px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 6.57px 0px 6.57px", gap: "10.96px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "37.25px", height: "37.25px", flexShrink: 0, borderRadius: "9.86px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8", display: "flex", flexDirection: "row", padding: "1.1px 1.1px 1.1px 1.1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <CreditCardHandBulk size={21.9} strokeWidth={2.01} style={{ width: "21.91px", height: "21.91px", flexShrink: 0, color: "#1a1a1a", display: "block" }} />
            </div>
            <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.19px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "87px", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 500, color: "#222222" }}>Square POS</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "117px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#999999" }}>Payments · In-store</p>
            </div>
            <div style={{ flexShrink: 0, borderRadius: "6.57px", background: "#e8f7f0", display: "flex", flexDirection: "row", padding: "3.29px 8.77px 3.29px 7.67px", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <svg style={{ width: "6.57px", height: "6.57px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="6.57" height="6.57" viewBox="0 0 6.57 6.57" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M6.57 3.285 C6.57 5.09926 5.09926 6.57 3.285 6.57 C1.47074 6.57 0 5.09926 0 3.285 C0 1.47074 1.47074 0 3.285 0 C5.09926 0 6.57 1.47074 6.57 3.285 Z" fill="#18b170"/></svg>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "68px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#18b170" }}>Connected</p>
            </div>
            <div style={{ width: "26.3px", height: "26.3px", flexShrink: 0, borderRadius: "6.57px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <DotsVertical size={17.5} strokeWidth={1.51} style={{ width: "17.53px", height: "17.53px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
            </div>
          </div>
          <div style={{ alignSelf: "stretch", flex: "1 1 0", minHeight: 0, flexShrink: 0, borderRadius: "8.77px", background: "rgba(255, 255, 255, 0.91)", boxShadow: "0px 0px 1.1px 0px rgba(0, 0, 0, 0.25)", display: "flex", flexDirection: "column", padding: "10.96px 10.96px 10.96px 10.96px", gap: "10.96px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ width: "370.75px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#6b6b70", lineHeight: "1.5" }}>Brings in-store sales from the Portland flagship and matches them to contacts by receipt email.</p>
            <div style={{ width: "370.75px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "155px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 500, color: "#7d818c" }}>In-store sales · 30 days</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "55px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 500, color: "#222222" }}>$12,200</p>
            </div>
            <div style={{ alignSelf: "stretch", flex: "1 1 0", minHeight: 0, flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }} />
            <div style={{ width: "370.75px", height: "1.1px", flexShrink: 0, background: "#eeeeee" }} />
            <div style={{ width: "370.75px", height: "19.72px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6.57px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <svg style={{ width: "6.57px", height: "6.57px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="6.57" height="6.57" viewBox="0 0 6.57 6.57" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M6.57 3.285 C6.57 5.09926 5.09926 6.57 3.285 6.57 C1.47074 6.57 0 5.09926 0 3.285 C0 1.47074 1.47074 0 3.285 0 C5.09926 0 6.57 1.47074 6.57 3.285 Z" fill="#18b170"/></svg>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "90px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#999999" }}>Synced 1 h ago</p>
              </div>
              <div style={{ width: "32.87px", height: "19.72px", flexShrink: 0, borderRadius: "9.86px", background: "#fd4b23", position: "relative" }}>
                <svg style={{ position: "absolute", left: "15.34px", top: "2.19px", width: "15.34px", height: "15.34px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="15.34" height="15.34" viewBox="0 0 15.34 15.34" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M15.34 7.67 C15.34 11.906 11.906 15.34 7.67 15.34 C3.43398 15.34 0 11.906 0 7.67 C0 3.43398 3.43398 0 7.67 0 C11.906 0 15.34 3.43398 15.34 7.67 Z" fill="#ffffff"/></svg>
              </div>
            </div>
          </div>
        </div>
        <div style={{ position: "absolute", left: "19.72px", top: "394.15px", width: "401.43px", height: "207.9px", borderRadius: "13.15px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #eeeeee, 0px 1.1px 4.38px 0px rgba(0, 0, 0, 0.05)", display: "flex", flexDirection: "column", padding: "12.06px 5.48px 5.48px 5.48px", gap: "10.96px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 6.57px 0px 6.57px", gap: "10.96px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "37.25px", height: "37.25px", flexShrink: 0, borderRadius: "9.86px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8", display: "flex", flexDirection: "row", padding: "1.1px 1.1px 1.1px 1.1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <svg width={21.9} height={21.9} viewBox="0 0 24 24" style={{ width: "21.91px", height: "21.91px", flexShrink: 0, color: "#4a154b", display: "block" }}><path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" fill="currentColor" /></svg>
            </div>
            <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.19px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "41px", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 500, color: "#222222" }}>Slack</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "72px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#999999" }}>Productivity</p>
            </div>
            <div style={{ flexShrink: 0, borderRadius: "6.57px", background: "#e8f7f0", display: "flex", flexDirection: "row", padding: "3.29px 8.77px 3.29px 7.67px", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <svg style={{ width: "6.57px", height: "6.57px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="6.57" height="6.57" viewBox="0 0 6.57 6.57" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M6.57 3.285 C6.57 5.09926 5.09926 6.57 3.285 6.57 C1.47074 6.57 0 5.09926 0 3.285 C0 1.47074 1.47074 0 3.285 0 C5.09926 0 6.57 1.47074 6.57 3.285 Z" fill="#18b170"/></svg>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "68px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#18b170" }}>Connected</p>
            </div>
            <div style={{ width: "26.3px", height: "26.3px", flexShrink: 0, borderRadius: "6.57px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <DotsVertical size={17.5} strokeWidth={1.51} style={{ width: "17.53px", height: "17.53px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
            </div>
          </div>
          <div style={{ alignSelf: "stretch", flex: "1 1 0", minHeight: 0, flexShrink: 0, borderRadius: "8.77px", background: "rgba(255, 255, 255, 0.91)", boxShadow: "0px 0px 1.1px 0px rgba(0, 0, 0, 0.25)", display: "flex", flexDirection: "column", padding: "10.96px 10.96px 10.96px 10.96px", gap: "10.96px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ width: "370.75px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#6b6b70", lineHeight: "1.5" }}>Posts payout, refund and campaign alerts to #harbor-ops the moment they happen.</p>
            <div style={{ width: "370.75px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "153px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 500, color: "#7d818c" }}>Alerts posted · 30 days</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "19px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 500, color: "#222222" }}>64</p>
            </div>
            <div style={{ alignSelf: "stretch", flex: "1 1 0", minHeight: 0, flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }} />
            <div style={{ width: "370.75px", height: "1.1px", flexShrink: 0, background: "#eeeeee" }} />
            <div style={{ width: "370.75px", height: "19.72px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6.57px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <svg style={{ width: "6.57px", height: "6.57px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="6.57" height="6.57" viewBox="0 0 6.57 6.57" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M6.57 3.285 C6.57 5.09926 5.09926 6.57 3.285 6.57 C1.47074 6.57 0 5.09926 0 3.285 C0 1.47074 1.47074 0 3.285 0 C5.09926 0 6.57 1.47074 6.57 3.285 Z" fill="#18b170"/></svg>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "128px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#999999" }}>Last alert 25 min ago</p>
              </div>
              <div style={{ width: "32.87px", height: "19.72px", flexShrink: 0, borderRadius: "9.86px", background: "#fd4b23", position: "relative" }}>
                <svg style={{ position: "absolute", left: "15.34px", top: "2.19px", width: "15.34px", height: "15.34px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="15.34" height="15.34" viewBox="0 0 15.34 15.34" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M15.34 7.67 C15.34 11.906 11.906 15.34 7.67 15.34 C3.43398 15.34 0 11.906 0 7.67 C0 3.43398 3.43398 0 7.67 0 C11.906 0 15.34 3.43398 15.34 7.67 Z" fill="#ffffff"/></svg>
              </div>
            </div>
          </div>
        </div>
        <div style={{ position: "absolute", left: "441.88px", top: "394.15px", width: "401.43px", height: "207.9px", borderRadius: "13.15px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #eeeeee, 0px 1.1px 4.38px 0px rgba(0, 0, 0, 0.05)", display: "flex", flexDirection: "column", padding: "12.06px 5.48px 5.48px 5.48px", gap: "10.96px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 6.57px 0px 6.57px", gap: "10.96px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "37.25px", height: "37.25px", flexShrink: 0, borderRadius: "9.86px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8", display: "flex", flexDirection: "row", padding: "1.1px 1.1px 1.1px 1.1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <svg width={21.9} height={21.9} viewBox="0 0 24 24" style={{ width: "21.91px", height: "21.91px", flexShrink: 0, color: "#4285f4", display: "block" }}><path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" fill="currentColor" /></svg>
            </div>
            <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.19px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "122px", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 500, color: "#222222" }}>Google Analytics</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "56px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#999999" }}>Analytics</p>
            </div>
            <div style={{ flexShrink: 0, borderRadius: "6.57px", background: "#e8f7f0", display: "flex", flexDirection: "row", padding: "3.29px 8.77px 3.29px 7.67px", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <svg style={{ width: "6.57px", height: "6.57px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="6.57" height="6.57" viewBox="0 0 6.57 6.57" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M6.57 3.285 C6.57 5.09926 5.09926 6.57 3.285 6.57 C1.47074 6.57 0 5.09926 0 3.285 C0 1.47074 1.47074 0 3.285 0 C5.09926 0 6.57 1.47074 6.57 3.285 Z" fill="#18b170"/></svg>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "68px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#18b170" }}>Connected</p>
            </div>
            <div style={{ width: "26.3px", height: "26.3px", flexShrink: 0, borderRadius: "6.57px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <DotsVertical size={17.5} strokeWidth={1.51} style={{ width: "17.53px", height: "17.53px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
            </div>
          </div>
          <div style={{ alignSelf: "stretch", flex: "1 1 0", minHeight: 0, flexShrink: 0, borderRadius: "8.77px", background: "rgba(255, 255, 255, 0.91)", boxShadow: "0px 0px 1.1px 0px rgba(0, 0, 0, 0.25)", display: "flex", flexDirection: "column", padding: "10.96px 10.96px 10.96px 10.96px", gap: "10.96px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ width: "370.75px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#6b6b70", lineHeight: "1.5" }}>Adds UTM tags to every campaign link and imports goal conversions back into Loopo.</p>
            <div style={{ width: "370.75px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "174px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 500, color: "#7d818c" }}>Tagged sessions · 30 days</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "46px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 500, color: "#222222" }}>41,280</p>
            </div>
            <div style={{ alignSelf: "stretch", flex: "1 1 0", minHeight: 0, flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }} />
            <div style={{ width: "370.75px", height: "1.1px", flexShrink: 0, background: "#eeeeee" }} />
            <div style={{ width: "370.75px", height: "19.72px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6.57px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <svg style={{ width: "6.57px", height: "6.57px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="6.57" height="6.57" viewBox="0 0 6.57 6.57" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M6.57 3.285 C6.57 5.09926 5.09926 6.57 3.285 6.57 C1.47074 6.57 0 5.09926 0 3.285 C0 1.47074 1.47074 0 3.285 0 C5.09926 0 6.57 1.47074 6.57 3.285 Z" fill="#18b170"/></svg>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "93px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#999999" }}>Synced 2 h ago</p>
              </div>
              <div style={{ width: "32.87px", height: "19.72px", flexShrink: 0, borderRadius: "9.86px", background: "#fd4b23", position: "relative" }}>
                <svg style={{ position: "absolute", left: "15.34px", top: "2.19px", width: "15.34px", height: "15.34px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="15.34" height="15.34" viewBox="0 0 15.34 15.34" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M15.34 7.67 C15.34 11.906 11.906 15.34 7.67 15.34 C3.43398 15.34 0 11.906 0 7.67 C0 3.43398 3.43398 0 7.67 0 C11.906 0 15.34 3.43398 15.34 7.67 Z" fill="#ffffff"/></svg>
              </div>
            </div>
          </div>
        </div>
        <div style={{ position: "absolute", left: "864.03px", top: "394.15px", width: "401.43px", height: "207.9px", borderRadius: "13.15px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #eeeeee, 0px 1.1px 4.38px 0px rgba(0, 0, 0, 0.05)", display: "flex", flexDirection: "column", padding: "12.06px 5.48px 5.48px 5.48px", gap: "10.96px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 6.57px 0px 6.57px", gap: "10.96px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "37.25px", height: "37.25px", flexShrink: 0, borderRadius: "9.86px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8", display: "flex", flexDirection: "row", padding: "1.1px 1.1px 1.1px 1.1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <svg width={21.9} height={21.9} viewBox="0 0 24 24" style={{ width: "21.91px", height: "21.91px", flexShrink: 0, color: "#003087", display: "block" }}><path d="M7.016 19.198h-4.2a.562.562 0 0 1-.555-.65L5.093.584A.692.692 0 0 1 5.776 0h7.222c3.417 0 5.904 2.488 5.846 5.5-.006.25-.027.5-.066.747A6.794 6.794 0 0 1 12.071 12H8.743a.69.69 0 0 0-.682.583l-.325 2.056-.013.083-.692 4.39-.015.087zM19.79 6.142c-.01.087-.01.175-.023.261a7.76 7.76 0 0 1-7.695 6.598H9.007l-.283 1.795-.013.083-.692 4.39-.134.843-.014.088H6.86l-.497 3.15a.562.562 0 0 0 .555.65h3.612c.34 0 .63-.249.683-.585l.952-6.031a.692.692 0 0 1 .683-.584h2.126a6.793 6.793 0 0 0 6.707-5.752c.306-1.95-.466-3.744-1.89-4.906z" fill="currentColor" /></svg>
            </div>
            <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.19px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "49px", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 500, color: "#222222" }}>PayPal</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "60px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#999999" }}>Payments</p>
            </div>
            <div style={{ flexShrink: 0, borderRadius: "8.77px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e0e0e3", overflow: "hidden", display: "flex", flexDirection: "row", padding: "7.67px 8.77px 7.67px 10.96px", gap: "6.57px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "52px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#4d4d52", lineHeight: "17.53px" }}>Connect</p>
            </div>
          </div>
          <div style={{ alignSelf: "stretch", flex: "1 1 0", minHeight: 0, flexShrink: 0, borderRadius: "8.77px", background: "rgba(255, 255, 255, 0.91)", boxShadow: "0px 0px 1.1px 0px rgba(0, 0, 0, 0.25)", display: "flex", flexDirection: "column", padding: "10.96px 10.96px 10.96px 10.96px", gap: "10.96px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ width: "370.75px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#6b6b70", lineHeight: "1.5" }}>Offer PayPal and Venmo at checkout. Payments, refunds and disputes sync both ways.</p>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6.57px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, borderRadius: "6.57px", background: "#f5f5f5", display: "flex", flexDirection: "row", padding: "2.19px 8.77px 2.19px 8.77px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "58px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#6c6c6c" }}>Checkout</p>
              </div>
              <div style={{ flexShrink: 0, borderRadius: "6.57px", background: "#f5f5f5", display: "flex", flexDirection: "row", padding: "2.19px 8.77px 2.19px 8.77px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "51px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#6c6c6c" }}>Refunds</p>
              </div>
              <div style={{ flexShrink: 0, borderRadius: "6.57px", background: "#f5f5f5", display: "flex", flexDirection: "row", padding: "2.19px 8.77px 2.19px 8.77px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "42px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#6c6c6c" }}>Venmo</p>
              </div>
            </div>
            <div style={{ alignSelf: "stretch", flex: "1 1 0", minHeight: 0, flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }} />
            <div style={{ width: "370.75px", height: "1.1px", flexShrink: 0, background: "#eeeeee" }} />
            <div style={{ width: "370.75px", height: "19.72px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "107px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#999999" }}>Free · 2 min setup</p>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4.38px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "75px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#6c6c6c" }}>Setup guide</p>
                <ChevronRight size={13.2} strokeWidth={1.49} style={{ width: "13.15px", height: "13.15px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
              </div>
            </div>
          </div>
        </div>
        <div style={{ position: "absolute", left: "19.72px", top: "621.77px", width: "401.43px", height: "207.9px", borderRadius: "13.15px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #eeeeee, 0px 1.1px 4.38px 0px rgba(0, 0, 0, 0.05)", display: "flex", flexDirection: "column", padding: "12.06px 5.48px 5.48px 5.48px", gap: "10.96px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 6.57px 0px 6.57px", gap: "10.96px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "37.25px", height: "37.25px", flexShrink: 0, borderRadius: "9.86px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8", display: "flex", flexDirection: "row", padding: "1.1px 1.1px 1.1px 1.1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <svg width={21.9} height={21.9} viewBox="0 0 24 24" style={{ width: "21.91px", height: "21.91px", flexShrink: 0, color: "#e4405f", display: "block" }}><path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077" fill="currentColor" /></svg>
            </div>
            <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.19px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "73px", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 500, color: "#222222" }}>Instagram</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "61px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#999999" }}>Marketing</p>
            </div>
            <div style={{ flexShrink: 0, borderRadius: "8.77px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e0e0e3", overflow: "hidden", display: "flex", flexDirection: "row", padding: "7.67px 8.77px 7.67px 10.96px", gap: "6.57px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "52px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#4d4d52", lineHeight: "17.53px" }}>Connect</p>
            </div>
          </div>
          <div style={{ alignSelf: "stretch", flex: "1 1 0", minHeight: 0, flexShrink: 0, borderRadius: "8.77px", background: "rgba(255, 255, 255, 0.91)", boxShadow: "0px 0px 1.1px 0px rgba(0, 0, 0, 0.25)", display: "flex", flexDirection: "column", padding: "10.96px 10.96px 10.96px 10.96px", gap: "10.96px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ width: "370.75px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#6b6b70", lineHeight: "1.5" }}>Turn your bio link into a signup form and tag contacts who found you on Instagram.</p>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6.57px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, borderRadius: "6.57px", background: "#f5f5f5", display: "flex", flexDirection: "row", padding: "2.19px 8.77px 2.19px 8.77px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "80px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#6c6c6c" }}>Signup forms</p>
              </div>
              <div style={{ flexShrink: 0, borderRadius: "6.57px", background: "#f5f5f5", display: "flex", flexDirection: "row", padding: "2.19px 8.77px 2.19px 8.77px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "29px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#6c6c6c" }}>Tags</p>
              </div>
            </div>
            <div style={{ alignSelf: "stretch", flex: "1 1 0", minHeight: 0, flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }} />
            <div style={{ width: "370.75px", height: "1.1px", flexShrink: 0, background: "#eeeeee" }} />
            <div style={{ width: "370.75px", height: "19.72px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "107px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#999999" }}>Free · 3 min setup</p>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4.38px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "75px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#6c6c6c" }}>Setup guide</p>
                <ChevronRight size={13.2} strokeWidth={1.49} style={{ width: "13.15px", height: "13.15px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
              </div>
            </div>
          </div>
        </div>
        <div style={{ position: "absolute", left: "441.88px", top: "621.77px", width: "401.43px", height: "207.9px", borderRadius: "13.15px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #eeeeee, 0px 1.1px 4.38px 0px rgba(0, 0, 0, 0.05)", display: "flex", flexDirection: "column", padding: "12.06px 5.48px 5.48px 5.48px", gap: "10.96px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 6.57px 0px 6.57px", gap: "10.96px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "37.25px", height: "37.25px", flexShrink: 0, borderRadius: "9.86px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8", display: "flex", flexDirection: "row", padding: "1.1px 1.1px 1.1px 1.1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <MegaphoneBulk size={21.9} style={{ width: "21.91px", height: "21.91px", flexShrink: 0, color: "#0866ff", display: "block" }} />
            </div>
            <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.19px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "69px", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 500, color: "#222222" }}>Meta Ads</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "61px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#999999" }}>Marketing</p>
            </div>
            <div style={{ flexShrink: 0, borderRadius: "8.77px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e0e0e3", overflow: "hidden", display: "flex", flexDirection: "row", padding: "7.67px 8.77px 7.67px 10.96px", gap: "6.57px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "52px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#4d4d52", lineHeight: "17.53px" }}>Connect</p>
            </div>
          </div>
          <div style={{ alignSelf: "stretch", flex: "1 1 0", minHeight: 0, flexShrink: 0, borderRadius: "8.77px", background: "rgba(255, 255, 255, 0.91)", boxShadow: "0px 0px 1.1px 0px rgba(0, 0, 0, 0.25)", display: "flex", flexDirection: "column", padding: "10.96px 10.96px 10.96px 10.96px", gap: "10.96px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ width: "370.75px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#6b6b70", lineHeight: "1.5" }}>Sync segments to Facebook and Instagram as Custom Audiences, refreshed every night.</p>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6.57px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, borderRadius: "6.57px", background: "#f5f5f5", display: "flex", flexDirection: "row", padding: "2.19px 8.77px 2.19px 8.77px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "62px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#6c6c6c" }}>Segments</p>
              </div>
              <div style={{ flexShrink: 0, borderRadius: "6.57px", background: "#f5f5f5", display: "flex", flexDirection: "row", padding: "2.19px 8.77px 2.19px 8.77px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "63px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#6c6c6c" }}>Audiences</p>
              </div>
            </div>
            <div style={{ alignSelf: "stretch", flex: "1 1 0", minHeight: 0, flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }} />
            <div style={{ width: "370.75px", height: "1.1px", flexShrink: 0, background: "#eeeeee" }} />
            <div style={{ width: "370.75px", height: "19.72px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "108px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#999999" }}>Free · 5 min setup</p>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4.38px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "75px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#6c6c6c" }}>Setup guide</p>
                <ChevronRight size={13.2} strokeWidth={1.49} style={{ width: "13.15px", height: "13.15px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
              </div>
            </div>
          </div>
        </div>
        <div style={{ position: "absolute", left: "864.03px", top: "621.77px", width: "401.43px", height: "207.9px", borderRadius: "13.15px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #eeeeee, 0px 1.1px 4.38px 0px rgba(0, 0, 0, 0.05)", display: "flex", flexDirection: "column", padding: "12.06px 5.48px 5.48px 5.48px", gap: "10.96px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 6.57px 0px 6.57px", gap: "10.96px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "37.25px", height: "37.25px", flexShrink: 0, borderRadius: "9.86px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8", display: "flex", flexDirection: "row", padding: "1.1px 1.1px 1.1px 1.1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <svg width={21.9} height={21.9} viewBox="0 0 24 24" style={{ width: "21.91px", height: "21.91px", flexShrink: 0, color: "#21759b", display: "block" }}><path d="M21.469 6.825c.84 1.537 1.318 3.3 1.318 5.175 0 3.979-2.156 7.456-5.363 9.325l3.295-9.527c.615-1.54.82-2.771.82-3.864 0-.405-.026-.78-.07-1.11m-7.981.105c.647-.03 1.232-.105 1.232-.105.582-.075.514-.93-.067-.899 0 0-1.755.135-2.88.135-1.064 0-2.85-.15-2.85-.15-.585-.03-.661.855-.075.885 0 0 .54.061 1.125.09l1.68 4.605-2.37 7.08L5.354 6.9c.649-.03 1.234-.1 1.234-.1.585-.075.516-.93-.065-.896 0 0-1.746.138-2.874.138-.2 0-.438-.008-.69-.015C4.911 3.15 8.235 1.215 12 1.215c2.809 0 5.365 1.072 7.286 2.833-.046-.003-.091-.009-.141-.009-1.06 0-1.812.923-1.812 1.914 0 .89.513 1.643 1.06 2.531.411.72.89 1.643.89 2.977 0 .915-.354 1.994-.821 3.479l-1.075 3.585-3.9-11.61.001.014zM12 22.784c-1.059 0-2.081-.153-3.048-.437l3.237-9.406 3.315 9.087c.024.053.05.101.078.149-1.12.393-2.325.609-3.582.609M1.211 12c0-1.564.336-3.05.935-4.39L7.29 21.709C3.694 19.96 1.212 16.271 1.211 12M12 0C5.385 0 0 5.385 0 12s5.385 12 12 12 12-5.385 12-12S18.615 0 12 0" fill="currentColor" /></svg>
            </div>
            <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.19px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "79px", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 500, color: "#222222" }}>WordPress</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "61px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#999999" }}>Marketing</p>
            </div>
            <div style={{ flexShrink: 0, borderRadius: "8.77px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e0e0e3", overflow: "hidden", display: "flex", flexDirection: "row", padding: "7.67px 8.77px 7.67px 10.96px", gap: "6.57px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "52px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#4d4d52", lineHeight: "17.53px" }}>Connect</p>
            </div>
          </div>
          <div style={{ alignSelf: "stretch", flex: "1 1 0", minHeight: 0, flexShrink: 0, borderRadius: "8.77px", background: "rgba(255, 255, 255, 0.91)", boxShadow: "0px 0px 1.1px 0px rgba(0, 0, 0, 0.25)", display: "flex", flexDirection: "column", padding: "10.96px 10.96px 10.96px 10.96px", gap: "10.96px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ width: "370.75px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#6b6b70", lineHeight: "1.5" }}>Embed signup forms in blog posts with the Loopo plugin. Signups land in Audience.</p>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6.57px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, borderRadius: "6.57px", background: "#f5f5f5", display: "flex", flexDirection: "row", padding: "2.19px 8.77px 2.19px 8.77px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "38px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#6c6c6c" }}>Plugin</p>
              </div>
              <div style={{ flexShrink: 0, borderRadius: "6.57px", background: "#f5f5f5", display: "flex", flexDirection: "row", padding: "2.19px 8.77px 2.19px 8.77px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "38px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#6c6c6c" }}>Forms</p>
              </div>
            </div>
            <div style={{ alignSelf: "stretch", flex: "1 1 0", minHeight: 0, flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }} />
            <div style={{ width: "370.75px", height: "1.1px", flexShrink: 0, background: "#eeeeee" }} />
            <div style={{ width: "370.75px", height: "19.72px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "108px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#999999" }}>Free · 5 min setup</p>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4.38px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "75px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#6c6c6c" }}>Setup guide</p>
                <ChevronRight size={13.2} strokeWidth={1.49} style={{ width: "13.15px", height: "13.15px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
              </div>
            </div>
          </div>
        </div>
        <div style={{ position: "absolute", left: "19.72px", top: "849.39px", width: "401.43px", height: "207.9px", borderRadius: "13.15px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #eeeeee, 0px 1.1px 4.38px 0px rgba(0, 0, 0, 0.05)", display: "flex", flexDirection: "column", padding: "12.06px 5.48px 5.48px 5.48px", gap: "10.96px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 6.57px 0px 6.57px", gap: "10.96px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "37.25px", height: "37.25px", flexShrink: 0, borderRadius: "9.86px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8", display: "flex", flexDirection: "row", padding: "1.1px 1.1px 1.1px 1.1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <svg width={21.9} height={21.9} viewBox="0 0 24 24" style={{ width: "21.91px", height: "21.91px", flexShrink: 0, color: "#146ef5", display: "block" }}><path d="m24 4.515-7.658 14.97H9.149l3.205-6.204h-.144C9.566 16.713 5.621 18.973 0 19.485v-6.118s3.596-.213 5.71-2.435H0V4.515h6.417v5.278l.144-.001 2.622-5.277h4.854v5.244h.144l2.72-5.244H24Z" fill="currentColor" /></svg>
            </div>
            <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.19px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "64px", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 500, color: "#222222" }}>Webflow</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "61px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#999999" }}>Marketing</p>
            </div>
            <div style={{ flexShrink: 0, borderRadius: "8.77px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e0e0e3", overflow: "hidden", display: "flex", flexDirection: "row", padding: "7.67px 8.77px 7.67px 10.96px", gap: "6.57px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "52px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#4d4d52", lineHeight: "17.53px" }}>Connect</p>
            </div>
          </div>
          <div style={{ alignSelf: "stretch", flex: "1 1 0", minHeight: 0, flexShrink: 0, borderRadius: "8.77px", background: "rgba(255, 255, 255, 0.91)", boxShadow: "0px 0px 1.1px 0px rgba(0, 0, 0, 0.25)", display: "flex", flexDirection: "column", padding: "10.96px 10.96px 10.96px 10.96px", gap: "10.96px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ width: "370.75px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#6b6b70", lineHeight: "1.5" }}>Add Loopo forms and payment links to any Webflow page straight from the Designer.</p>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6.57px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, borderRadius: "6.57px", background: "#f5f5f5", display: "flex", flexDirection: "row", padding: "2.19px 8.77px 2.19px 8.77px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "38px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#6c6c6c" }}>Forms</p>
              </div>
              <div style={{ flexShrink: 0, borderRadius: "6.57px", background: "#f5f5f5", display: "flex", flexDirection: "row", padding: "2.19px 8.77px 2.19px 8.77px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "85px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#6c6c6c" }}>Payment links</p>
              </div>
            </div>
            <div style={{ alignSelf: "stretch", flex: "1 1 0", minHeight: 0, flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }} />
            <div style={{ width: "370.75px", height: "1.1px", flexShrink: 0, background: "#eeeeee" }} />
            <div style={{ width: "370.75px", height: "19.72px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "108px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#999999" }}>Free · 5 min setup</p>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4.38px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "75px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#6c6c6c" }}>Setup guide</p>
                <ChevronRight size={13.2} strokeWidth={1.49} style={{ width: "13.15px", height: "13.15px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
              </div>
            </div>
          </div>
        </div>
        <div style={{ position: "absolute", left: "441.88px", top: "849.39px", width: "401.43px", height: "207.9px", borderRadius: "13.15px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #eeeeee, 0px 1.1px 4.38px 0px rgba(0, 0, 0, 0.05)", display: "flex", flexDirection: "column", padding: "12.06px 5.48px 5.48px 5.48px", gap: "10.96px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 6.57px 0px 6.57px", gap: "10.96px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "37.25px", height: "37.25px", flexShrink: 0, borderRadius: "9.86px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8", display: "flex", flexDirection: "row", padding: "1.1px 1.1px 1.1px 1.1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <svg width={21.9} height={21.9} viewBox="0 0 24 24" style={{ width: "21.91px", height: "21.91px", flexShrink: 0, color: "#0f9d58", display: "block" }}><path d="M11.318 12.545H7.91v-1.909h3.41v1.91zM14.728 0v6h6l-6-6zm1.363 10.636h-3.41v1.91h3.41v-1.91zm0 3.273h-3.41v1.91h3.41v-1.91zM20.727 6.5v15.864c0 .904-.732 1.636-1.636 1.636H4.909a1.636 1.636 0 0 1-1.636-1.636V1.636C3.273.732 4.005 0 4.909 0h9.318v6.5h6.5zm-3.273 2.773H6.545v7.909h10.91v-7.91zm-6.136 4.636H7.91v1.91h3.41v-1.91z" fill="currentColor" /></svg>
            </div>
            <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.19px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "106px", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 500, color: "#222222" }}>Google Sheets</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "72px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#999999" }}>Productivity</p>
            </div>
            <div style={{ flexShrink: 0, borderRadius: "8.77px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e0e0e3", overflow: "hidden", display: "flex", flexDirection: "row", padding: "7.67px 8.77px 7.67px 10.96px", gap: "6.57px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "52px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#4d4d52", lineHeight: "17.53px" }}>Connect</p>
            </div>
          </div>
          <div style={{ alignSelf: "stretch", flex: "1 1 0", minHeight: 0, flexShrink: 0, borderRadius: "8.77px", background: "rgba(255, 255, 255, 0.91)", boxShadow: "0px 0px 1.1px 0px rgba(0, 0, 0, 0.25)", display: "flex", flexDirection: "column", padding: "10.96px 10.96px 10.96px 10.96px", gap: "10.96px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ width: "370.75px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#6b6b70", lineHeight: "1.5" }}>Append new contacts, orders or payouts to a sheet — one row per event.</p>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6.57px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, borderRadius: "6.57px", background: "#f5f5f5", display: "flex", flexDirection: "row", padding: "2.19px 8.77px 2.19px 8.77px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "55px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#6c6c6c" }}>Contacts</p>
              </div>
              <div style={{ flexShrink: 0, borderRadius: "6.57px", background: "#f5f5f5", display: "flex", flexDirection: "row", padding: "2.19px 8.77px 2.19px 8.77px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "41px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#6c6c6c" }}>Orders</p>
              </div>
              <div style={{ flexShrink: 0, borderRadius: "6.57px", background: "#f5f5f5", display: "flex", flexDirection: "row", padding: "2.19px 8.77px 2.19px 8.77px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "49px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#6c6c6c" }}>Payouts</p>
              </div>
            </div>
            <div style={{ alignSelf: "stretch", flex: "1 1 0", minHeight: 0, flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }} />
            <div style={{ width: "370.75px", height: "1.1px", flexShrink: 0, background: "#eeeeee" }} />
            <div style={{ width: "370.75px", height: "19.72px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "107px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#999999" }}>Free · 2 min setup</p>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4.38px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "75px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#6c6c6c" }}>Setup guide</p>
                <ChevronRight size={13.2} strokeWidth={1.49} style={{ width: "13.15px", height: "13.15px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
              </div>
            </div>
          </div>
        </div>
        <div style={{ position: "absolute", left: "864.03px", top: "849.39px", width: "401.43px", height: "207.9px", borderRadius: "13.15px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #eeeeee, 0px 1.1px 4.38px 0px rgba(0, 0, 0, 0.05)", display: "flex", flexDirection: "column", padding: "12.06px 5.48px 5.48px 5.48px", gap: "10.96px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 6.57px 0px 6.57px", gap: "10.96px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "37.25px", height: "37.25px", flexShrink: 0, borderRadius: "9.86px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8", display: "flex", flexDirection: "row", padding: "1.1px 1.1px 1.1px 1.1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <WebhookBulk size={21.9} strokeWidth={2.01} style={{ width: "21.91px", height: "21.91px", flexShrink: 0, color: "#141b34", display: "block" }} />
            </div>
            <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.19px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "76px", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 500, color: "#222222" }}>Webhooks</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "143px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#999999" }}>Productivity · Developer</p>
            </div>
            <div style={{ flexShrink: 0, borderRadius: "8.77px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e0e0e3", overflow: "hidden", display: "flex", flexDirection: "row", padding: "7.67px 8.77px 7.67px 10.96px", gap: "6.57px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "52px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#4d4d52", lineHeight: "17.53px" }}>Connect</p>
            </div>
          </div>
          <div style={{ alignSelf: "stretch", flex: "1 1 0", minHeight: 0, flexShrink: 0, borderRadius: "8.77px", background: "rgba(255, 255, 255, 0.91)", boxShadow: "0px 0px 1.1px 0px rgba(0, 0, 0, 0.25)", display: "flex", flexDirection: "column", padding: "10.96px 10.96px 10.96px 10.96px", gap: "10.96px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ width: "370.75px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#6b6b70", lineHeight: "1.5" }}>Send any Loopo event to your own endpoint, signed with HMAC and retried for 24 hours.</p>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6.57px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, borderRadius: "6.57px", background: "#f5f5f5", display: "flex", flexDirection: "row", padding: "2.19px 8.77px 2.19px 8.77px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "60px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#6c6c6c" }}>42 events</p>
              </div>
              <div style={{ flexShrink: 0, borderRadius: "6.57px", background: "#f5f5f5", display: "flex", flexDirection: "row", padding: "2.19px 8.77px 2.19px 8.77px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "42px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#6c6c6c" }}>Signed</p>
              </div>
            </div>
            <div style={{ alignSelf: "stretch", flex: "1 1 0", minHeight: 0, flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }} />
            <div style={{ width: "370.75px", height: "1.1px", flexShrink: 0, background: "#eeeeee" }} />
            <div style={{ width: "370.75px", height: "19.72px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "135px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#999999" }}>Free · Developer setup</p>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4.38px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "75px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#6c6c6c" }}>Setup guide</p>
                <ChevronRight size={13.2} strokeWidth={1.49} style={{ width: "13.15px", height: "13.15px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
