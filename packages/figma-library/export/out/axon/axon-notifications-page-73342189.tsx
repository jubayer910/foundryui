// Notifications page (axon, Templates) from Ingot UI (ingotui.com).
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
const AlertTriangle = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 9v4\" /><path d=\"M10.363 3.591l-8.106 13.534a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636 -2.87l-8.106 -13.536a1.914 1.914 0 0 0 -3.274 0\" /><path d=\"M12 16h.01\" /></g>");
const Bell = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M10 5a2 2 0 1 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6\" /><path d=\"M9 17v1a3 3 0 0 0 6 0v-1\" /></g>");
const ChartLine = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 19l16 0\" /><path d=\"M4 15l4 -6l4 2l4 -5l4 4\" /></g>");
const Check = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M5 12l5 5l10 -10\" /></g>");
const Checklist = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M9.615 20h-2.615a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8\" /><path d=\"M14 19l2 2l4 -4\" /><path d=\"M9 8h4\" /><path d=\"M9 12h2\" /></g>");
const ChevronDown = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M6 9l6 6l6 -6\" /></g>");
const ChevronRight = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M9 6l6 6l-6 6\" /></g>");
const CloudUpload = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M7 18a4.6 4.4 0 0 1 0 -9a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7h-1\" /><path d=\"M9 15l3 -3l3 3\" /><path d=\"M12 12l0 9\" /></g>");
const CreditCard = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3l0 -8\" /><path d=\"M3 10l18 0\" /><path d=\"M7 15l.01 0\" /><path d=\"M11 15l2 0\" /></g>");
const Database = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 6a8 3 0 1 0 16 0a8 3 0 1 0 -16 0\" /><path d=\"M4 6v6a8 3 0 0 0 16 0v-6\" /><path d=\"M4 12v6a8 3 0 0 0 16 0v-6\" /></g>");
const Dots = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0\" /><path d=\"M11 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0\" /><path d=\"M18 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0\" /></g>");
const File = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M14 3v4a1 1 0 0 0 1 1h4\" /><path d=\"M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2\" /></g>");
const FolderSearch = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M11 19h-6a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2h4l3 3h7a2 2 0 0 1 2 2v2.5\" /><path d=\"M15 18a3 3 0 1 0 6 0a3 3 0 1 0 -6 0\" /><path d=\"M20.2 20.2l1.8 1.8\" /></g>");
const GitMerge = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M5 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0\" /><path d=\"M5 6a2 2 0 1 0 4 0a2 2 0 1 0 -4 0\" /><path d=\"M15 12a2 2 0 1 0 4 0a2 2 0 1 0 -4 0\" /><path d=\"M7 8l0 8\" /><path d=\"M7 8a4 4 0 0 0 4 4h4\" /></g>");
const LayoutDashboard = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M5 4h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1\" /><path d=\"M5 16h4a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1\" /><path d=\"M15 12h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1\" /><path d=\"M15 4h4a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1\" /></g>");
const Link = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M9 15l6 -6\" /><path d=\"M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464\" /><path d=\"M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463\" /></g>");
const Mail = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10\" /><path d=\"M3 7l9 6l9 -6\" /></g>");
const Message = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M8 9h8\" /><path d=\"M8 13h6\" /><path d=\"M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12\" /></g>");
const Moon = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454l0 .008\" /></g>");
const PlugConnected = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M7 12l5 5l-1.5 1.5a3.536 3.536 0 1 1 -5 -5l1.5 -1.5\" /><path d=\"M17 12l-5 -5l1.5 -1.5a3.536 3.536 0 1 1 5 5l-1.5 1.5\" /><path d=\"M3 21l2.5 -2.5\" /><path d=\"M18.5 5.5l2.5 -2.5\" /><path d=\"M10 11l-2 2\" /><path d=\"M13 14l-2 2\" /></g>");
const Search = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 10a7 7 0 1 0 14 0a7 7 0 1 0 -14 0\" /><path d=\"M21 21l-6 -6\" /></g>");
const Settings = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065\" /><path d=\"M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0\" /></g>");
const Shield = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3\" /></g>");
const Sparkles = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M16 18a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2m0 -12a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2m-7 12a6 6 0 0 1 6 -6a6 6 0 0 1 -6 -6a6 6 0 0 1 -6 6a6 6 0 0 1 6 6\" /></g>");
const Users = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M5 7a4 4 0 1 0 8 0a4 4 0 1 0 -8 0\" /><path d=\"M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2\" /><path d=\"M16 3.13a4 4 0 0 1 0 7.75\" /><path d=\"M21 21v-2a4 4 0 0 0 -3 -3.85\" /></g>");
const CategorySolid = icon("<g fill=\"currentColor\"><path d=\"M10 3h-6a1 1 0 0 0 -1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1 -1v-6a1 1 0 0 0 -1 -1z\" /><path d=\"M20 3h-6a1 1 0 0 0 -1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1 -1v-6a1 1 0 0 0 -1 -1z\" /><path d=\"M10 13h-6a1 1 0 0 0 -1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1 -1v-6a1 1 0 0 0 -1 -1z\" /><path d=\"M17 13a4 4 0 1 1 -3.995 4.2l-.005 -.2l.005 -.2a4 4 0 0 1 3.995 -3.8z\" /></g>");

export function NotificationsPage() {
  return (
    <div style={{ width: "1440px", height: "1019px", background: "#ffffff", overflow: "hidden", position: "relative" }}>
      <div style={{ position: "absolute", left: "0px", top: "0px", width: "1440px", height: "1019px", background: "#ffffff", overflow: "hidden" }}>
        <div style={{ position: "absolute", left: "0px", top: "0px", width: "246px", height: "1019px", background: "#f5f5f5", overflow: "hidden" }}>
          <div style={{ position: "absolute", left: "20px", top: "21.69px", width: "82px", height: "28.63px", display: "flex", flexDirection: "row", gap: "27px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6.51px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "28.63px", height: "28.63px", flexShrink: 0, borderRadius: "7.16px", background: "linear-gradient(0deg, #1b8ce8 34.7%, #4eb0ff 93.7%)", boxShadow: "inset 0.72px 0.72px 0px 0px rgba(255, 255, 255, 0.25), inset -0.72px 0.72px 0px 0px rgba(255, 255, 255, 0.25)", position: "relative" }}>
                <svg style={{ position: "absolute", left: "5.86px", top: "6.51px", width: "16.48px", height: "14.38px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="16.48" height="14.38" viewBox="0 0 16.48 14.38" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M14.3275 13.5384 C14.5373 14.0029 14.8866 14.0053 15.1024 13.5444 L16.3152 10.9478 C16.5324 10.4102 16.5324 9.80936 16.3152 9.27177 L13.8023 3.92459 C13.6728 3.68339 13.4834 3.47959 13.2523 3.33282 C13.0212 3.18604 12.7562 3.10123 12.4828 3.08655 L8.02946 3.08655 C7.75654 3.10107 7.49208 3.18629 7.26203 3.33385 C7.03198 3.4814 6.84424 3.68623 6.71722 3.92822 L2.31116 13.5408 C2.09892 14.0029 2.34148 14.3825 2.85085 14.3825 L9.83409 14.3825 C10.3435 14.3825 10.5884 14.0029 10.3774 13.5335 L9.70311 12.0478 C9.57732 11.8055 9.3904 11.6003 9.16087 11.4524 C8.93133 11.3046 8.66715 11.2193 8.3945 11.205 L0.618102 11.205 C0.108731 11.205 -0.135036 10.8253 0.0759894 10.356 L4.4202 0.84289 C4.54695 0.600835 4.73444 0.395878 4.96427 0.248113 C5.19411 0.100349 5.45839 0.0148491 5.73122 0 L7.27753 0 C7.55076 0.0150271 7.8153 0.101295 8.04487 0.250226 C8.27444 0.399158 8.46104 0.605569 8.58612 0.848952 L14.3275 13.5384 Z" fill="#ffffff"/></svg>
              </div>
              <svg style={{ width: "46.86px", height: "16.72px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="46.86" height="16.72" viewBox="0 0 46.86 16.72" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 37.574 3.494)" d="M0 11.4509 L0 0.252595 L2.0418 0.252595 L2.126 3.24163 L1.85236 3.09428 C1.97865 2.36456 2.21722 1.77518 2.56804 1.32612 C2.91887 0.877064 3.34688 0.547288 3.85206 0.336793 C4.35725 0.112264 4.90454 0 5.49393 0 C6.33591 0 7.03055 0.189446 7.57783 0.568338 C8.13915 0.933196 8.56015 1.43838 8.84081 2.0839 C9.1355 2.71539 9.28284 3.43809 9.28284 4.25201 L9.28284 11.4509 L7.0516 11.4509 L7.0516 4.92559 C7.0516 4.26604 6.98143 3.71173 6.8411 3.26268 C6.70077 2.81362 6.46922 2.46981 6.14646 2.23125 C5.8237 1.99269 5.40271 1.87341 4.88349 1.87341 C4.09764 1.87341 3.45914 2.13302 2.96798 2.65224 C2.47683 3.17146 2.23125 3.92925 2.23125 4.92559 L2.23125 11.4509 L0 11.4509 Z" fill="#15171c"/><path transform="matrix(1 0 0 1 25.131 3.494)" d="M5.30448 11.7035 C4.23797 11.7035 3.30478 11.465 2.5049 10.9879 C1.70501 10.5107 1.08756 9.83013 0.652536 8.94605 C0.217513 8.06197 0 7.03054 0 5.85177 C0 4.65896 0.217513 3.62754 0.652536 2.75749 C1.08756 1.88744 1.70501 1.21386 2.5049 0.736734 C3.30478 0.245578 4.23797 0 5.30448 0 C6.37099 0 7.30419 0.245578 8.10407 0.736734 C8.90395 1.21386 9.5214 1.88744 9.95643 2.75749 C10.3915 3.62754 10.609 4.65896 10.609 5.85177 C10.609 7.03054 10.3915 8.06197 9.95643 8.94605 C9.5214 9.83013 8.90395 10.5107 8.10407 10.9879 C7.30419 11.465 6.37099 11.7035 5.30448 11.7035 Z M5.30448 9.76698 C6.25873 9.76698 6.99546 9.42318 7.51468 8.73556 C8.0339 8.03391 8.29352 7.07264 8.29352 5.85177 C8.29352 4.6309 8.0339 3.67665 7.51468 2.98903 C6.99546 2.28738 6.25873 1.93656 5.30448 1.93656 C4.36427 1.93656 3.62754 2.28738 3.09428 2.98903 C2.57506 3.67665 2.31545 4.6309 2.31545 5.85177 C2.31545 7.07264 2.57506 8.03391 3.09428 8.73556 C3.62754 9.42318 4.36427 9.76698 5.30448 9.76698 Z" fill="#15171c"/><path transform="matrix(1 0 0 1 14.023 3.747)" d="M0 11.1984 L4.06256 5.47288 L0.168397 0 L2.65224 0 L5.40973 4.02046 L8.08302 0 L10.63 0 L6.77795 5.51498 L10.7984 11.1984 L8.31457 11.1984 L5.43078 6.9253 L2.52594 11.1984 L0 11.1984 Z" fill="#15171c"/><path transform="matrix(1 0 0 1 0 0)" d="M0 14.9452 L5.38868 0 L8.27247 0 L13.6611 14.9452 L11.2405 14.9452 L9.87223 11.051 L3.76787 11.051 L2.4207 14.9452 L0 14.9452 Z M4.48355 8.98815 L9.1776 8.98815 L6.82005 2.1681 L4.48355 8.98815 Z" fill="#15171c"/></svg>
            </div>
          </div>
          <div style={{ position: "absolute", left: "20px", top: "77px", width: "212px", height: "700px", display: "flex", flexDirection: "column", gap: "20px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ height: "36px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "10px 10px 10px 10px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "72px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#a6a6a6", lineHeight: "20px" }}>Workspace</p>
              </div>
              <div style={{ width: "212px", height: "32px", flexShrink: 0, borderRadius: "10px", display: "flex", flexDirection: "row", padding: "8px 10px 8px 10px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <LayoutDashboard size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#929292", display: "block" }} />
                <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#929292", lineHeight: "20px" }}>Overview</p>
              </div>
              <div style={{ width: "212px", height: "32px", flexShrink: 0, borderRadius: "10px", display: "flex", flexDirection: "row", padding: "8px 10px 8px 10px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <GitMerge size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#929292", display: "block" }} />
                <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#929292", lineHeight: "20px" }}>Workflows</p>
              </div>
              <div style={{ width: "212px", height: "32px", flexShrink: 0, borderRadius: "10px", display: "flex", flexDirection: "row", padding: "8px 10px 8px 10px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <File size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#929292", display: "block" }} />
                <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#929292", lineHeight: "20px" }}>Templates</p>
                <div style={{ flexShrink: 0, borderRadius: "5px", background: "#ffffff", boxShadow: "0px 0px 1px 0px rgba(0, 0, 0, 0.25)", display: "flex", flexDirection: "row", padding: "1px 6px 1px 6px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "23px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#000000", lineHeight: "20px" }}>180</p>
                </div>
              </div>
              <div style={{ width: "212px", height: "32px", flexShrink: 0, borderRadius: "10px", display: "flex", flexDirection: "row", padding: "8px 10px 8px 10px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <GitMerge size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#929292", display: "block" }} />
                <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#929292", lineHeight: "20px" }}>Workflow Builder</p>
              </div>
              <div style={{ width: "212px", height: "32px", flexShrink: 0, borderRadius: "10px", display: "flex", flexDirection: "row", padding: "8px 10px 8px 10px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <svg width={14} height={14} viewBox="0 0 24 24" style={{ width: "14px", height: "14px", flexShrink: 0, color: "#929292", display: "block" }}><path d="M10.53 10.73c-.1-.31-.19-.61-.29-.92-.1-.31-.19-.6-.27-.89-.08-.28-.15-.54-.22-.78h-.02c-.09.43-.2.86-.34 1.29-.15.48-.3.98-.46 1.48-.14.51-.29.98-.44 1.4h2.54c-.06-.211-.14-.46-.23-.721-.09-.269-.18-.559-.27-.859zM19.75.3H4.25C1.9.3 0 2.2 0 4.55v14.9c0 2.35 1.9 4.25 4.25 4.25h15.5c2.35 0 4.25-1.9 4.25-4.25V4.55C24 2.2 22.1.3 19.75.3zM14.7 16.83h-2.091c-.069.01-.139-.04-.159-.11l-.82-2.38H7.91l-.76 2.35c-.02.09-.1.15-.19.141H5.08c-.11 0-.14-.061-.11-.18L8.19 7.38c.03-.1.06-.21.1-.33.04-.21.06-.43.06-.65-.01-.05.03-.1.08-.11h2.59c.08 0 .12.03.13.08l3.65 10.3c.03.109 0 .16-.1.16zm3.4-.15c0 .11-.039.16-.129.16H16.01c-.1 0-.15-.061-.15-.16v-7.7c0-.1.041-.14.131-.14h1.98c.09 0 .129.05.129.14v7.7zm-.209-9.03c-.231.24-.571.37-.911.35-.33.01-.65-.12-.891-.35-.23-.25-.35-.58-.34-.92-.01-.34.12-.66.359-.89.242-.23.562-.35.892-.35.391 0 .689.12.91.35.22.24.34.56.33.89.01.34-.11.67-.349.92z" fill="currentColor" /></svg>
                <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#929292", lineHeight: "20px" }}>AI Configuration</p>
              </div>
              <div style={{ width: "212px", height: "32px", flexShrink: 0, borderRadius: "10px", display: "flex", flexDirection: "row", padding: "8px 10px 8px 10px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <FolderSearch size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#929292", display: "block" }} />
                <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#929292", lineHeight: "20px" }}>Test Run</p>
              </div>
              <div style={{ width: "212px", height: "32px", flexShrink: 0, borderRadius: "10px", display: "flex", flexDirection: "row", padding: "8px 10px 8px 10px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <File size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#929292", display: "block" }} />
                <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#929292", lineHeight: "20px" }}>Review Queue</p>
              </div>
              <div style={{ width: "212px", height: "32px", flexShrink: 0, borderRadius: "10px", display: "flex", flexDirection: "row", padding: "8px 10px 8px 10px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <ChartLine size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#929292", display: "block" }} />
                <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#929292", lineHeight: "20px" }}>Analytics</p>
              </div>
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <svg style={{ width: "212px", height: "1px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible", marginBottom: "-1px" }} xmlns="http://www.w3.org/2000/svg" width="212" height="1" viewBox="0 0 212 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 -0.5 L0 0 L212 0 L212 -0.5 L212 -1 L0 -1 L0 -0.5 Z" fill="#e8e8e8"/></svg>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ height: "36px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "10px 10px 10px 10px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "71px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#a6a6a6", lineHeight: "20px" }}>Operations</p>
                </div>
                <div style={{ width: "212px", height: "32px", flexShrink: 0, borderRadius: "10px", display: "flex", flexDirection: "row", padding: "8px 10px 8px 10px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <File size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#929292", display: "block" }} />
                  <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#929292", lineHeight: "20px" }}>Runs & Logs</p>
                </div>
                <div style={{ width: "212px", height: "32px", flexShrink: 0, borderRadius: "10px", display: "flex", flexDirection: "row", padding: "8px 10px 8px 10px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <AlertTriangle size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#929292", display: "block" }} />
                  <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#929292", lineHeight: "20px" }}>Exceptions</p>
                </div>
                <div style={{ width: "212px", height: "32px", flexShrink: 0, borderRadius: "10px", display: "flex", flexDirection: "row", padding: "8px 10px 8px 10px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <PlugConnected size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#929292", display: "block" }} />
                  <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#929292", lineHeight: "20px" }}>Connectors</p>
                </div>
                <div style={{ width: "212px", height: "32px", flexShrink: 0, borderRadius: "10px", display: "flex", flexDirection: "row", padding: "8px 10px 8px 10px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <Database size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#929292", display: "block" }} />
                  <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#929292", lineHeight: "20px" }}>Data Sources</p>
                </div>
              </div>
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <svg style={{ width: "212px", height: "1px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible", marginBottom: "-1px" }} xmlns="http://www.w3.org/2000/svg" width="212" height="1" viewBox="0 0 212 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 -0.5 L0 0 L212 0 L212 -0.5 L212 -1 L0 -1 L0 -0.5 Z" fill="#e8e8e8"/></svg>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ height: "36px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "10px 10px 10px 10px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "94px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#a6a6a6", lineHeight: "20px" }}>Administration</p>
                </div>
                <div style={{ width: "212px", height: "32px", flexShrink: 0, borderRadius: "10px", display: "flex", flexDirection: "row", padding: "8px 10px 8px 10px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <Users size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#929292", display: "block" }} />
                  <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#929292", lineHeight: "20px" }}>Team & Permissions</p>
                </div>
                <div style={{ width: "212px", height: "32px", flexShrink: 0, borderRadius: "6px", background: "#ffffff", boxShadow: "0px 1.4px 1px 0px rgba(0, 0, 0, 0.06), 0px 0px 1px 0px rgba(0, 0, 0, 0.25)", display: "flex", flexDirection: "row", padding: "8px 10px 8px 10px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <Bell size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#1b8ce8", display: "block" }} />
                  <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#000000", lineHeight: "20px" }}>Notifications</p>
                  <div style={{ flexShrink: 0, borderRadius: "5px", background: "#ffffff", boxShadow: "0px 0px 1px 0px rgba(0, 0, 0, 0.25)", display: "flex", flexDirection: "row", padding: "1px 6px 1px 6px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "16px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#000000", lineHeight: "20px" }}>78</p>
                  </div>
                </div>
                <div style={{ width: "212px", height: "32px", flexShrink: 0, borderRadius: "10px", display: "flex", flexDirection: "row", padding: "8px 10px 8px 10px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <CreditCard size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#929292", display: "block" }} />
                  <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#929292", lineHeight: "20px" }}>Usage & Billing</p>
                </div>
                <div style={{ width: "212px", height: "32px", flexShrink: 0, borderRadius: "10px", display: "flex", flexDirection: "row", padding: "8px 10px 8px 10px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <File size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#929292", display: "block" }} />
                  <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#929292", lineHeight: "20px" }}>Audit Log</p>
                </div>
                <div style={{ width: "212px", height: "32px", flexShrink: 0, borderRadius: "10px", display: "flex", flexDirection: "row", padding: "8px 10px 8px 10px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <Settings size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#929292", display: "block" }} />
                  <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#929292", lineHeight: "20px" }}>System Settings</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <svg style={{ position: "absolute", left: "246px", top: "0px", width: "1px", height: "1019px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="1" height="1019" viewBox="0 0 1 1019" fill="none" overflow="visible"><path transform="matrix(0 1 -1 0 0 0)" d="M0 -0.5 L0 -5.55112e-17 L1019 -5.55112e-17 L1019 -0.5 L1019 -1 L0 -1 L0 -0.5 Z" fill="#e8e8e8"/></svg>
        <div style={{ position: "absolute", left: "247px", top: "0px", width: "1193px", height: "74px", background: "#ffffff", display: "flex", flexDirection: "row", padding: "20px 20px 20px 20px", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <CategorySolid size={14} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#b3b3b3", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "94px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#b3b3b3", lineHeight: "20px" }}>Administration</p>
            </div>
            <ChevronRight size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#686765", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "82px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#666d80", lineHeight: "20px" }}>Notifications</p>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ height: "32px", flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e8e8e8", display: "flex", flexDirection: "row", padding: "8px 8px 8px 8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "223px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <Search size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#979797", display: "block" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "57px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#979797", lineHeight: "20px" }}>Search....</p>
              </div>
            </div>
            <div style={{ flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e8e8e8", overflow: "hidden", display: "flex", flexDirection: "row", padding: "7px 8px 7px 8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "30px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#686765", lineHeight: "20px" }}>Help</p>
            </div>
            <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "10px", background: "url('https://ingotui.com/library-img/232efcbc3e38653b836fdc20a462210bf2f00cbb.png') center / cover no-repeat, linear-gradient(#ffffff, #ffffff)", boxShadow: "inset 0 0 0 0.63px #e8e8e8", overflow: "hidden" }} />
          </div>
        </div>
        <svg style={{ position: "absolute", left: "0px", top: "73px", width: "1440px", height: "1px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="1440" height="1" viewBox="0 0 1440 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 -0.5 L0 0 L1440 0 L1440 -0.5 L1440 -1 L0 -1 L0 -0.5 Z" fill="#e8e8e8"/></svg>
      </div>
      <div style={{ position: "absolute", left: "265px", top: "92px", width: "1155px", height: "798px", display: "flex", flexDirection: "column", gap: "16px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "16px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "93px", fontFamily: "'Geist'", fontSize: "16px", fontWeight: 400, color: "#15171c", lineHeight: "24px", letterSpacing: "-0.1px" }}>Notifications</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "320px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>78 unread · delivered in-app, by email and in Slack</p>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e8e8e8", display: "flex", flexDirection: "row", padding: "7px 13px 7px 13px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <Checklist size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "84px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#686765", lineHeight: "20px" }}>Mark all read</p>
            </div>
            <div style={{ flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e8e8e8", display: "flex", flexDirection: "row", padding: "7px 13px 7px 13px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <Settings size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "77px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#686765", lineHeight: "20px" }}>Preferences</p>
            </div>
          </div>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "16px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, borderRadius: "12px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ededed", display: "flex", flexDirection: "column", padding: "9px 9px 9px 9px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "6px 6px 8px 6px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, borderRadius: "9px", background: "#f5f5f5", display: "flex", flexDirection: "row", padding: "3px 3px 3px 3px", gap: "2px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, borderRadius: "6px", background: "#ffffff", boxShadow: "0px 1.4px 1px 0px rgba(0, 0, 0, 0.06), 0px 0px 1px 0px rgba(0, 0, 0, 0.25)", display: "flex", flexDirection: "row", padding: "4px 10px 4px 10px", gap: "6px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "17px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>All</p>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "16px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#929292", lineHeight: "20px" }}>78</p>
                </div>
                <div style={{ flexShrink: 0, borderRadius: "6px", display: "flex", flexDirection: "row", padding: "4px 10px 4px 10px", gap: "6px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "60px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#697386", lineHeight: "20px" }}>Mentions</p>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "9px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#b3b3b3", lineHeight: "20px" }}>4</p>
                </div>
                <div style={{ flexShrink: 0, borderRadius: "6px", display: "flex", flexDirection: "row", padding: "4px 10px 4px 10px", gap: "6px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "64px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#697386", lineHeight: "20px" }}>Approvals</p>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "9px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#b3b3b3", lineHeight: "20px" }}>9</p>
                </div>
                <div style={{ flexShrink: 0, borderRadius: "6px", display: "flex", flexDirection: "row", padding: "4px 10px 4px 10px", gap: "6px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "49px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#697386", lineHeight: "20px" }}>System</p>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "14px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#b3b3b3", lineHeight: "20px" }}>12</p>
                </div>
              </div>
              <div style={{ flex: "1 1 0", minWidth: 0, height: "1px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }} />
              <div style={{ flexShrink: 0, borderRadius: "8px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e8e8e8", display: "flex", flexDirection: "row", padding: "5px 11px 5px 11px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "87px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#686765", lineHeight: "20px" }}>All workflows</p>
                <ChevronDown size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
              </div>
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", padding: "10px 12px 4px 12px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "38px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#a6a6a6", lineHeight: "20px" }}>Today</p>
            </div>
            <div style={{ alignSelf: "stretch", flexShrink: 0, borderRadius: "10px", display: "flex", flexDirection: "row", padding: "12px 12px 12px 12px", gap: "12px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <svg style={{ width: "8px", height: "32px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="8" height="32" viewBox="0 0 8 32" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 12)" d="M8 4 C8 6.20914 6.20914 8 4 8 C1.79086 8 0 6.20914 0 4 C0 1.79086 1.79086 0 4 0 C6.20914 0 8 1.79086 8 4 Z" fill="#1b8ce8"/></svg>
              <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "9px", background: "#fdf0f7", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <Checklist size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#ef0c78", display: "block" }} />
              </div>
              <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ alignSelf: "stretch", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>
                  <span style={{ fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>{"Sofia Rossi asked you to approve "}</span>
                  <span style={{ fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>INV-21004</span>
                  <span style={{ fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>{" · $18,400 from Globex"}</span>
                </p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "235px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>Approvals · Invoice Triage · 2 min ago</p>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ flexShrink: 0, borderRadius: "8px", background: "linear-gradient(0deg, #1b8ce8 34.7%, #4eb0ff 93.7%)", boxShadow: "0px 8px 9px 0px rgba(0, 0, 0, 0.12), inset 0.6px 0.6px 0px 0px rgba(255, 255, 255, 0.25), inset -0.6px 0.6px 0px 0px rgba(255, 255, 255, 0.25)", display: "flex", flexDirection: "row", padding: "4px 10px 4px 10px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <Check size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#ffffff", display: "block" }} />
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "53px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#ffffff", lineHeight: "20px" }}>Approve</p>
                  </div>
                  <div style={{ flexShrink: 0, borderRadius: "8px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e8e8e8", display: "flex", flexDirection: "row", padding: "5px 11px 5px 11px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "35px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#686765", lineHeight: "20px" }}>Open</p>
                  </div>
                </div>
              </div>
              <div style={{ width: "28px", height: "28px", flexShrink: 0, borderRadius: "7px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <Dots size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
              </div>
            </div>
            <div style={{ alignSelf: "stretch", flexShrink: 0, borderRadius: "10px", background: "#f9f9f9", display: "flex", flexDirection: "row", padding: "12px 12px 12px 12px", gap: "12px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <svg style={{ width: "8px", height: "32px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="8" height="32" viewBox="0 0 8 32" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 12)" d="M8 4 C8 6.20914 6.20914 8 4 8 C1.79086 8 0 6.20914 0 4 C0 1.79086 1.79086 0 4 0 C6.20914 0 8 1.79086 8 4 Z" fill="#1b8ce8"/></svg>
              <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "16px", background: "#f4fcf7", boxShadow: "0 0 0 1.5px #ffffff", display: "flex", flexDirection: "row", padding: "1.5px 1.5px 1.5px 1.5px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "17px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#17a673", lineHeight: "16px" }}>PN</p>
              </div>
              <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ alignSelf: "stretch", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>Priya Nair mentioned you: “@Chara the Acme PO looks transposed — 7782 vs 7728?”</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "249px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>Review Queue · INV-20931 · 14 min ago</p>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ flexShrink: 0, borderRadius: "8px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e8e8e8", display: "flex", flexDirection: "row", padding: "5px 11px 5px 11px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <Message size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "37px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#686765", lineHeight: "20px" }}>Reply</p>
                  </div>
                </div>
              </div>
              <div style={{ width: "28px", height: "28px", flexShrink: 0, borderRadius: "7px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <Dots size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
              </div>
            </div>
            <div style={{ alignSelf: "stretch", flexShrink: 0, borderRadius: "10px", display: "flex", flexDirection: "row", padding: "12px 12px 12px 12px", gap: "12px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <svg style={{ width: "8px", height: "32px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="8" height="32" viewBox="0 0 8 32" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 12)" d="M8 4 C8 6.20914 6.20914 8 4 8 C1.79086 8 0 6.20914 0 4 C0 1.79086 1.79086 0 4 0 C6.20914 0 8 1.79086 8 4 Z" fill="#1b8ce8"/></svg>
              <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "9px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ededed, 0px 1px 2px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <svg style={{ width: "18px", height: "18px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 2.248)" d="M18 1.84465 L18 12.2764 C18 12.9544 17.451 13.5034 16.773 13.5034 L13.9088 13.5034 L13.9088 6.5494 L9 10.2319 L4.09125 6.5494 L4.09125 13.5041 L1.227 13.5041 C1.06581 13.5041 0.90619 13.4724 0.757274 13.4107 C0.608359 13.349 0.473062 13.2585 0.359115 13.1445 C0.245168 13.0305 0.154803 12.8951 0.0931847 12.7462 C0.0315663 12.5972 -9.83008e-05 12.4376 2.29239e-07 12.2764 L2.29239e-07 1.84465 C2.29239e-07 0.327398 1.73175 -0.538852 2.94525 0.371648 L4.09125 1.2319 L9 4.9129 L13.9088 1.2304 L15.0548 0.371648 C16.2675 -0.538102 18 0.327398 18 1.84465 Z" fill="#ea4335"/></svg>
              </div>
              <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ alignSelf: "stretch", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>
                  <span style={{ fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>{"Gmail connector expired — "}</span>
                  <span style={{ fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>23</span>
                  <span style={{ fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>{" runs are waiting"}</span>
                </p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "210px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>System · Connectors · 18 min ago</p>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ flexShrink: 0, borderRadius: "8px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e8e8e8", display: "flex", flexDirection: "row", padding: "5px 11px 5px 11px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <Link size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "69px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#686765", lineHeight: "20px" }}>Reconnect</p>
                  </div>
                </div>
              </div>
              <div style={{ width: "28px", height: "28px", flexShrink: 0, borderRadius: "7px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <Dots size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
              </div>
            </div>
            <div style={{ alignSelf: "stretch", flexShrink: 0, borderRadius: "10px", display: "flex", flexDirection: "row", padding: "12px 12px 12px 12px", gap: "12px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "8px", height: "32px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }} />
              <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "9px", background: "#f4fcf7", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <CloudUpload size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#17a673", display: "block" }} />
              </div>
              <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ alignSelf: "stretch", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>
                  <span style={{ fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>{"Marcus Webb published "}</span>
                  <span style={{ fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>Customer Refunds v10</span>
                  <span style={{ fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>{" to Production"}</span>
                </p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "106px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>Deploys · 1 h ago</p>
              </div>
              <div style={{ width: "28px", height: "28px", flexShrink: 0, borderRadius: "7px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <Dots size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
              </div>
            </div>
            <div style={{ alignSelf: "stretch", flexShrink: 0, borderRadius: "10px", display: "flex", flexDirection: "row", padding: "12px 12px 12px 12px", gap: "12px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "8px", height: "32px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }} />
              <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "9px", background: "#eff8ff", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <Sparkles size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#1b8ce8", display: "block" }} />
              </div>
              <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ alignSelf: "stretch", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>Weekly impact: 412 hours saved (+18%) and 78.6% automated</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "99px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>Digest · 3 h ago</p>
              </div>
              <div style={{ width: "28px", height: "28px", flexShrink: 0, borderRadius: "7px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <Dots size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
              </div>
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", padding: "10px 12px 4px 12px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "63px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#a6a6a6", lineHeight: "20px" }}>Yesterday</p>
            </div>
            <div style={{ alignSelf: "stretch", flexShrink: 0, borderRadius: "10px", display: "flex", flexDirection: "row", padding: "12px 12px 12px 12px", gap: "12px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "8px", height: "32px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }} />
              <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "9px", background: "#f4fcf7", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <Shield size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#17a673", display: "block" }} />
              </div>
              <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ alignSelf: "stretch", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>
                  <span style={{ fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>{"Rule “Route PO-not-found” handled "}</span>
                  <span style={{ fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>41</span>
                  <span style={{ fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>{" exceptions"}</span>
                </p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "125px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>Exceptions · 1 d ago</p>
              </div>
              <div style={{ width: "28px", height: "28px", flexShrink: 0, borderRadius: "7px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <Dots size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
              </div>
            </div>
            <div style={{ alignSelf: "stretch", flexShrink: 0, borderRadius: "10px", display: "flex", flexDirection: "row", padding: "12px 12px 12px 12px", gap: "12px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "8px", height: "32px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }} />
              <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "9px", background: "#fffbf0", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <AlertTriangle size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#d99a00", display: "block" }} />
              </div>
              <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ alignSelf: "stretch", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>You’ve used 80% of this month’s runs (200k of 250k)</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "95px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>Billing · 1 d ago</p>
              </div>
              <div style={{ width: "28px", height: "28px", flexShrink: 0, borderRadius: "7px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <Dots size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
              </div>
            </div>
          </div>
          <div style={{ width: "340px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "16px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ alignSelf: "stretch", flexShrink: 0, borderRadius: "12px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ededed", display: "flex", flexDirection: "column", padding: "19px 19px 19px 19px", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "12px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "59px", fontFamily: "'Geist'", fontSize: "16px", fontWeight: 400, color: "#15171c", lineHeight: "24px", letterSpacing: "-0.1px" }}>Delivery</p>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "176px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>Where your notifications go</p>
                </div>
              </div>
              <div style={{ alignSelf: "stretch", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #e9e9e9", display: "flex", flexDirection: "row", padding: "10px 0px 11px 0px", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "28px", height: "28px", flexShrink: 0, borderRadius: "8px", background: "#f7f8fa", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <Bell size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#697386", display: "block" }} />
                </div>
                <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "43px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>In-app</p>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "69px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>Everything</p>
                </div>
                <div style={{ width: "28px", flexShrink: 0, borderRadius: "8px", background: "linear-gradient(0deg, #1b8ce8 34.7%, #4eb0ff 93.7%)", boxShadow: "inset 0.6px 0.6px 0px 0px rgba(255, 255, 255, 0.25), inset -0.6px 0.6px 0px 0px rgba(255, 255, 255, 0.25)", display: "flex", flexDirection: "row", padding: "2px 2px 2px 2px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
                  <svg style={{ width: "12px", height: "12px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M12 6 C12 9.31371 9.31371 12 6 12 C2.68629 12 0 9.31371 0 6 C0 2.68629 2.68629 0 6 0 C9.31371 0 12 2.68629 12 6 Z" fill="#ffffff"/></svg>
                </div>
              </div>
              <div style={{ alignSelf: "stretch", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #e9e9e9", display: "flex", flexDirection: "row", padding: "10px 0px 11px 0px", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "28px", height: "28px", flexShrink: 0, borderRadius: "8px", background: "#f7f8fa", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <Mail size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#697386", display: "block" }} />
                </div>
                <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "36px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>Email</p>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "134px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>
                    <span style={{ fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>{"Daily digest at "}</span>
                    <span style={{ fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>08:00</span>
                  </p>
                </div>
                <div style={{ width: "28px", flexShrink: 0, borderRadius: "8px", background: "linear-gradient(0deg, #1b8ce8 34.7%, #4eb0ff 93.7%)", boxShadow: "inset 0.6px 0.6px 0px 0px rgba(255, 255, 255, 0.25), inset -0.6px 0.6px 0px 0px rgba(255, 255, 255, 0.25)", display: "flex", flexDirection: "row", padding: "2px 2px 2px 2px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
                  <svg style={{ width: "12px", height: "12px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M12 6 C12 9.31371 9.31371 12 6 12 C2.68629 12 0 9.31371 0 6 C0 2.68629 2.68629 0 6 0 C9.31371 0 12 2.68629 12 6 Z" fill="#ffffff"/></svg>
                </div>
              </div>
              <div style={{ alignSelf: "stretch", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #e9e9e9", display: "flex", flexDirection: "row", padding: "10px 0px 11px 0px", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "28px", height: "28px", flexShrink: 0, borderRadius: "8px", background: "#f7f8fa", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <Message size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#697386", display: "block" }} />
                </div>
                <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "37px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>Slack</p>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "138px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>
                    <span style={{ fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>{"DMs + "}</span>
                    <span style={{ fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>#finance-ops</span>
                  </p>
                </div>
                <div style={{ width: "28px", flexShrink: 0, borderRadius: "8px", background: "linear-gradient(0deg, #1b8ce8 34.7%, #4eb0ff 93.7%)", boxShadow: "inset 0.6px 0.6px 0px 0px rgba(255, 255, 255, 0.25), inset -0.6px 0.6px 0px 0px rgba(255, 255, 255, 0.25)", display: "flex", flexDirection: "row", padding: "2px 2px 2px 2px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
                  <svg style={{ width: "12px", height: "12px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M12 6 C12 9.31371 9.31371 12 6 12 C2.68629 12 0 9.31371 0 6 C0 2.68629 2.68629 0 6 0 C9.31371 0 12 2.68629 12 6 Z" fill="#ffffff"/></svg>
                </div>
              </div>
              <div style={{ alignSelf: "stretch", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #e9e9e9", display: "flex", flexDirection: "row", padding: "10px 0px 11px 0px", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "28px", height: "28px", flexShrink: 0, borderRadius: "8px", background: "#f7f8fa", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <Moon size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#697386", display: "block" }} />
                </div>
                <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "74px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>Quiet hours</p>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "169px", fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>
                    <span style={{ fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>20:00</span>
                    <span style={{ fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>–</span>
                    <span style={{ fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>08:00</span>
                    <span style={{ fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>{" · urgent only"}</span>
                  </p>
                </div>
                <div style={{ width: "28px", flexShrink: 0, borderRadius: "8px", background: "linear-gradient(0deg, #1b8ce8 34.7%, #4eb0ff 93.7%)", boxShadow: "inset 0.6px 0.6px 0px 0px rgba(255, 255, 255, 0.25), inset -0.6px 0.6px 0px 0px rgba(255, 255, 255, 0.25)", display: "flex", flexDirection: "row", padding: "2px 2px 2px 2px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
                  <svg style={{ width: "12px", height: "12px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M12 6 C12 9.31371 9.31371 12 6 12 C2.68629 12 0 9.31371 0 6 C0 2.68629 2.68629 0 6 0 C9.31371 0 12 2.68629 12 6 Z" fill="#ffffff"/></svg>
                </div>
              </div>
            </div>
            <div style={{ alignSelf: "stretch", flexShrink: 0, borderRadius: "12px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ededed", display: "flex", flexDirection: "column", padding: "19px 19px 19px 19px", gap: "8px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "12px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "64px", fontFamily: "'Geist'", fontSize: "16px", fontWeight: 400, color: "#15171c", lineHeight: "24px", letterSpacing: "-0.1px" }}>Snoozed</p>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "245px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>2 threads come back tomorrow 09:00</p>
                </div>
              </div>
              <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "28px", height: "28px", flexShrink: 0, borderRadius: "8px", background: "#f7f8fa", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <AlarmClock size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#697386", display: "block" }} />
                </div>
                <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>HubSpot rate limit alerts</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "34px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#4996fe", lineHeight: "20px" }}>Undo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
