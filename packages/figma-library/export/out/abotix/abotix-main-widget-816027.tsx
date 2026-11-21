// MAIN widget (abotix, Charts) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist, Inter. Icons: Ingot Icons.
import type { SVGProps } from "react";

// Ingot Icons used here, inlined so this file needs no icon package.
function icon(body: string) {
  return function Icon({ size = 24, strokeWidth = 1.5, ...p }: { size?: number; strokeWidth?: number } & SVGProps<SVGSVGElement>) {
    const html = strokeWidth == 1.5 ? body : body.replace(/stroke-width="([\d.]+)"/g, (_, w) => `stroke-width="${(Number(w) * Number(strokeWidth)) / 1.5}"`);
    return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden {...p} dangerouslySetInnerHTML={{ __html: html }} />;
  };
}
const AiAgents = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M17 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0\" /><path d=\"M3 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0\" /><path d=\"M10 5a2 2 0 1 0 4 0a2 2 0 1 0 -4 0\" /><path d=\"M6 5a1 1 0 1 0 -2 0a1 1 0 0 0 2 0\" /><path d=\"M18 5a1 1 0 1 0 2 0a1 1 0 0 0 -2 0\" /><path d=\"M4 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0\" /><path d=\"M11 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0\" /><path d=\"M18 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0\" /><path d=\"M11 19a1 1 0 1 0 2 0a1 1 0 0 0 -2 0\" /></g>");
const Book = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0\" /><path d=\"M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0\" /><path d=\"M3 6l0 13\" /><path d=\"M12 6l0 13\" /><path d=\"M21 6l0 13\" /></g>");
const Bug = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M9 9v-1a3 3 0 0 1 6 0v1\" /><path d=\"M8 9h8a6 6 0 0 1 1 3v3a5 5 0 0 1 -10 0v-3a6 6 0 0 1 1 -3\" /><path d=\"M3 13l4 0\" /><path d=\"M17 13l4 0\" /><path d=\"M12 20l0 -6\" /><path d=\"M4 19l3.35 -2\" /><path d=\"M20 19l-3.35 -2\" /><path d=\"M4 7l3.75 2.4\" /><path d=\"M20 7l-3.75 2.4\" /></g>");
const Certificate = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 15a3 3 0 1 0 6 0a3 3 0 1 0 -6 0\" /><path d=\"M13 17.5v4.5l2 -1.5l2 1.5v-4.5\" /><path d=\"M10 19h-5a2 2 0 0 1 -2 -2v-10c0 -1.1 .9 -2 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -1 1.73\" /><path d=\"M6 9l12 0\" /><path d=\"M6 12l3 0\" /><path d=\"M6 15l2 0\" /></g>");
const Database = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 6a8 3 0 1 0 16 0a8 3 0 1 0 -16 0\" /><path d=\"M4 6v6a8 3 0 0 0 16 0v-6\" /><path d=\"M4 12v6a8 3 0 0 0 16 0v-6\" /></g>");
const FileShield = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M18 9V4a1 1 0 0 0-1-1H8.914a1 1 0 0 0-.707.293L4.293 7.207A1 1 0 0 0 4 7.914V20a1 1 0 0 0 1 1h6M9 3v4a1 1 0 0 1-1 1H4m11 13a11.4 11.4 0 0 1-3.637-3.99A11.14 11.14 0 0 1 10 11.833L15 10l5 1.833a11.14 11.14 0 0 1-1.363 5.176A11.4 11.4 0 0 1 15.001 21Z\"/></g>");
const FileText = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M14 3v4a1 1 0 0 0 1 1h4\" /><path d=\"M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2\" /><path d=\"M9 9l1 0\" /><path d=\"M9 13l6 0\" /><path d=\"M9 17l6 0\" /></g>");
const Gauge = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0\" /><path d=\"M11 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0\" /><path d=\"M13.41 10.59l2.59 -2.59\" /><path d=\"M7 12a5 5 0 0 1 5 -5\" /></g>");
const Hammer = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M11.414 10l-7.383 7.418a2.091 2.091 0 0 0 0 2.967a2.11 2.11 0 0 0 2.976 0l7.407 -7.385\" /><path d=\"M18.121 15.293l2.586 -2.586a1 1 0 0 0 0 -1.414l-7.586 -7.586a1 1 0 0 0 -1.414 0l-2.586 2.586a1 1 0 0 0 0 1.414l7.586 7.586a1 1 0 0 0 1.414 0\" /></g>");
const Key = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M16.555 3.843l3.602 3.602a2.877 2.877 0 0 1 0 4.069l-2.643 2.643a2.877 2.877 0 0 1 -4.069 0l-.301 -.301l-6.558 6.558a2 2 0 0 1 -1.239 .578l-.175 .008h-1.172a1 1 0 0 1 -.993 -.883l-.007 -.117v-1.172a2 2 0 0 1 .467 -1.284l.119 -.13l.414 -.414h2v-2h2v-2l2.144 -2.144l-.301 -.301a2.877 2.877 0 0 1 0 -4.069l2.643 -2.643a2.877 2.877 0 0 1 4.069 0\" /><path d=\"M15 9h.01\" /></g>");
const LayoutGrid = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 5a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1l0 -4\" /><path d=\"M14 5a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1l0 -4\" /><path d=\"M4 15a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1l0 -4\" /><path d=\"M14 15a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1l0 -4\" /></g>");
const PlugConnected = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M7 12l5 5l-1.5 1.5a3.536 3.536 0 1 1 -5 -5l1.5 -1.5\" /><path d=\"M17 12l-5 -5l1.5 -1.5a3.536 3.536 0 1 1 5 5l-1.5 1.5\" /><path d=\"M3 21l2.5 -2.5\" /><path d=\"M18.5 5.5l2.5 -2.5\" /><path d=\"M10 11l-2 2\" /><path d=\"M13 14l-2 2\" /></g>");
const Puzzle = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1\" /></g>");
const Reports = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M9 21H15M9 21V16M9 21H3.6C3.26863 21 3 20.7314 3 20.4V16.6C3 16.2686 3.26863 16 3.6 16H9M15 21V9M15 21H20.4C20.7314 21 21 20.7314 21 20.4V3.6C21 3.26863 20.7314 3 20.4 3H15.6C15.2686 3 15 3.26863 15 3.6V9M15 9H9.6C9.26863 9 9 9.26863 9 9.6V16\"/></g>");
const Route = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 19a2 2 0 1 0 4 0a2 2 0 0 0 -4 0\" /><path d=\"M19 7a2 2 0 1 0 0 -4a2 2 0 0 0 0 4\" /><path d=\"M11 19h5.5a3.5 3.5 0 0 0 0 -7h-8a3.5 3.5 0 0 1 0 -7h4.5\" /></g>");
const Settings = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065\" /><path d=\"M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0\" /></g>");
const Sparkles = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M16 18a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2m0 -12a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2m-7 12a6 6 0 0 1 6 -6a6 6 0 0 1 -6 -6a6 6 0 0 1 -6 6a6 6 0 0 1 6 6\" /></g>");
const Support = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0\"/><path d=\"m18 6l-3.525 3.525M6 18l3.525-3.525M6 6l3.525 3.525M18 18l-3.525-3.525m-4.95 0c-1.348-1.348-1.348-3.601 0-4.95m0 4.95c1.348 1.348 3.601 1.348 4.95 0m0 0c1.348-1.348 1.348-3.601 0-4.95m0 0c-1.348-1.348-3.601-1.348-4.95 0\"/></g>");
const Target = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M11 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0\" /><path d=\"M7 12a5 5 0 1 0 10 0a5 5 0 1 0 -10 0\" /><path d=\"M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0\" /></g>");
const Users = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M5 7a4 4 0 1 0 8 0a4 4 0 1 0 -8 0\" /><path d=\"M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2\" /><path d=\"M16 3.13a4 4 0 0 1 0 7.75\" /><path d=\"M21 21v-2a4 4 0 0 0 -3 -3.85\" /></g>");

export function MAINWidget() {
  return (
    <div style={{ width: "236px", height: "1045px", borderRadius: "14px", background: "#fafafa", overflow: "hidden", position: "relative" }}>
      <div style={{ position: "absolute", left: "20px", top: "20px", width: "196px", height: "28px", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
        <svg style={{ width: "56px", height: "14px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="56" height="14" viewBox="0 0 56 14" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 13.7689 L4.98549 0.096286 L7.6535 0.096286 L12.639 13.7689 L10.3994 13.7689 L9.13357 10.2063 L3.48595 10.2063 L2.23957 13.7689 L0 13.7689 Z M4.14808 8.31912 L8.49091 8.31912 L6.30976 2.07978 L4.14808 8.31912 Z" fill="#000000"/><path transform="matrix(1 0 0 1 0 0)" d="M18.8508 14 C18.1367 14 17.5005 13.8459 16.9423 13.5378 C16.397 13.2169 15.975 12.7804 15.6764 12.2283 L15.618 13.7689 L13.69 13.7689 L13.69 0.096286 L15.7543 0.096286 L15.7543 4.96836 C16.027 4.51903 16.4294 4.12746 16.9617 3.79367 C17.507 3.45988 18.1367 3.29298 18.8508 3.29298 C19.7466 3.29298 20.5256 3.51123 21.1877 3.94773 C21.8498 4.38423 22.3562 5.00688 22.7067 5.81568 C23.0702 6.61165 23.252 7.55525 23.252 8.64649 C23.252 9.73773 23.0702 10.6878 22.7067 11.4966 C22.3562 12.2925 21.8498 12.9088 21.1877 13.3453 C20.5256 13.7818 19.7466 14 18.8508 14 Z M18.5197 12.2283 C19.3117 12.2283 19.9413 11.9138 20.4087 11.2847 C20.8761 10.6428 21.1098 9.76341 21.1098 8.64649 C21.1098 7.52957 20.8761 6.65658 20.4087 6.02751 C19.9413 5.3856 19.3182 5.06465 18.5392 5.06465 C17.9549 5.06465 17.4551 5.20587 17.0396 5.48831 C16.6242 5.77075 16.3061 6.18157 16.0854 6.72077 C15.8647 7.24713 15.7543 7.88904 15.7543 8.64649 C15.7543 9.37827 15.8647 10.0138 16.0854 10.553 C16.3061 11.0922 16.6242 11.5094 17.0396 11.8047 C17.4551 12.0871 17.9484 12.2283 18.5197 12.2283 Z" fill="#000000"/><path transform="matrix(1 0 0 1 0 0)" d="M29.2236 14 C28.2368 14 27.3735 13.7818 26.6334 13.3453 C25.8934 12.9088 25.3221 12.2861 24.9197 11.4773 C24.5172 10.6685 24.316 9.7249 24.316 8.64649 C24.316 7.55525 24.5172 6.61165 24.9197 5.81568 C25.3221 5.01972 25.8934 4.40348 26.6334 3.96699 C27.3735 3.51765 28.2368 3.29298 29.2236 3.29298 C30.2103 3.29298 31.0736 3.51765 31.8137 3.96699 C32.5537 4.40348 33.125 5.01972 33.5274 5.81568 C33.9299 6.61165 34.1311 7.55525 34.1311 8.64649 C34.1311 9.7249 33.9299 10.6685 33.5274 11.4773 C33.125 12.2861 32.5537 12.9088 31.8137 13.3453 C31.0736 13.7818 30.2103 14 29.2236 14 Z M29.2236 12.2283 C30.1064 12.2283 30.788 11.9138 31.2684 11.2847 C31.7488 10.6428 31.9889 9.76341 31.9889 8.64649 C31.9889 7.52957 31.7488 6.65658 31.2684 6.02751 C30.788 5.3856 30.1064 5.06465 29.2236 5.06465 C28.3537 5.06465 27.6721 5.3856 27.1787 6.02751 C26.6984 6.65658 26.4582 7.52957 26.4582 8.64649 C26.4582 9.76341 26.6984 10.6428 27.1787 11.2847 C27.6721 11.9138 28.3537 12.2283 29.2236 12.2283 Z" fill="#000000"/><path transform="matrix(1 0 0 1 0 0)" d="M39.4203 13.7689 C38.4336 13.7689 37.7065 13.5442 37.2392 13.0949 C36.7718 12.6456 36.5381 11.9459 36.5381 10.9959 L36.5381 1.11692 L38.6024 1.11692 L38.6024 10.8418 C38.6024 11.3168 38.7062 11.6442 38.914 11.8239 C39.1217 12.0037 39.4398 12.0935 39.8682 12.0935 L41.3483 12.0935 L41.3483 13.7689 L39.4203 13.7689 Z M34.9606 5.19945 L34.9606 3.52407 L41.3483 3.52407 L41.3483 5.19945 L34.9606 5.19945 Z" fill="#000000"/><path transform="matrix(1 0 0 1 0 0)" d="M42.9315 13.7689 L42.9315 3.52407 L44.9958 3.52407 L44.9958 13.7689 L42.9315 13.7689 Z M42.8926 2.04127 L42.8926 0 L45.0348 0 L45.0348 2.04127 L42.8926 2.04127 Z" fill="#000000"/><path transform="matrix(1 0 0 1 0 0)" d="M46.0096 13.7689 L49.7681 8.53095 L46.1653 3.52407 L48.4633 3.52407 L51.0145 7.2022 L53.4878 3.52407 L55.8442 3.52407 L52.2804 8.56946 L56 13.7689 L53.702 13.7689 L51.034 9.8597 L48.3465 13.7689 L46.0096 13.7689 Z" fill="#000000"/></svg>
        <div style={{ width: "28px", height: "28px", flexShrink: 0, borderRadius: "6px", background: "#ffffff", boxShadow: "inset 0 0 0 0.85px #e8e8e8", overflow: "hidden", position: "relative" }}>
          <svg style={{ position: "absolute", left: "6px", top: "6px", width: "16px", height: "16px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" overflow="visible"><path transform="matrix(-1 0 0 1 12 4.667)" d="M-0.53033 6.13634 C-0.823223 6.42923 -0.823223 6.9041 -0.53033 7.197 C-0.237437 7.48989 0.237437 7.48989 0.53033 7.197 L0 6.66667 L-0.53033 6.13634 Z M3.33333 3.33333 L3.86366 3.86366 C4.15656 3.57077 4.15656 3.0959 3.86366 2.803 L3.33333 3.33333 Z M0.53033 -0.53033 C0.237437 -0.823223 -0.237437 -0.823223 -0.53033 -0.53033 C-0.823223 -0.237437 -0.823223 0.237437 -0.53033 0.53033 L0 0 L0.53033 -0.53033 Z M0 6.66667 L0.53033 7.197 L3.86366 3.86366 L3.33333 3.33333 L2.803 2.803 L-0.53033 6.13634 L0 6.66667 Z M3.33333 3.33333 L3.86366 2.803 L0.53033 -0.53033 L0 0 L-0.53033 0.53033 L2.803 3.86366 L3.33333 3.33333 Z" fill="#444444"/><path transform="matrix(-1 0 0 1 7.334 4.667)" d="M-0.53033 6.13634 C-0.823223 6.42923 -0.823223 6.9041 -0.53033 7.197 C-0.237437 7.48989 0.237437 7.48989 0.53033 7.197 L0 6.66667 L-0.53033 6.13634 Z M3.33333 3.33333 L3.86366 3.86366 C4.15656 3.57077 4.15656 3.0959 3.86366 2.803 L3.33333 3.33333 Z M0.53033 -0.53033 C0.237437 -0.823223 -0.237437 -0.823223 -0.53033 -0.53033 C-0.823223 -0.237437 -0.823223 0.237437 -0.53033 0.53033 L0 0 L0.53033 -0.53033 Z M0 6.66667 L0.53033 7.197 L3.86366 3.86366 L3.33333 3.33333 L2.803 2.803 L-0.53033 6.13634 L0 6.66667 Z M3.33333 3.33333 L3.86366 2.803 L0.53033 -0.53033 L0 0 L-0.53033 0.53033 L2.803 3.86366 L3.33333 3.33333 Z" fill="#444444"/></svg>
        </div>
      </div>
      <div style={{ position: "absolute", left: "0px", top: "59px", width: "236px", height: "793px", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ alignSelf: "stretch", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "column", padding: "0px 8px 0px 8px", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", padding: "4px 0px 6px 12px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "30px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "11px", fontWeight: 500, color: "#8a8a8a", letterSpacing: "0.04em" }}>MAIN</p>
          </div>
          <div style={{ alignSelf: "stretch", height: "32px", flexShrink: 0, borderRadius: "8px", background: "#eaf1fe", overflow: "hidden", display: "flex", flexDirection: "row", padding: "0px 10px 0px 12px", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <FileShield size={16} strokeWidth={1.8} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#2563eb", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "62px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#1e3a8a", lineHeight: "20px" }}>Overview</p>
            </div>
          </div>
          <div style={{ alignSelf: "stretch", height: "32px", flexShrink: 0, borderRadius: "8px", overflow: "hidden", display: "flex", flexDirection: "row", padding: "0px 10px 0px 12px", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <Gauge size={16} strokeWidth={1.8} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#5c5c5c", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "94px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#2b2b2b", lineHeight: "20px" }}>Threat Monitor</p>
            </div>
          </div>
          <div style={{ alignSelf: "stretch", height: "32px", flexShrink: 0, borderRadius: "8px", overflow: "hidden", display: "flex", flexDirection: "row", padding: "0px 10px 0px 12px", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <Bug size={16} strokeWidth={1.8} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#5c5c5c", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "91px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#2b2b2b", lineHeight: "20px" }}>Vulnerabilities</p>
            </div>
            <div style={{ flexShrink: 0, borderRadius: "999px", background: "#fde4e4", overflow: "hidden", display: "flex", flexDirection: "row", padding: "2px 8px 2px 8px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "20px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#c42b2b", lineHeight: "16px" }}>146</p>
            </div>
          </div>
          <div style={{ alignSelf: "stretch", height: "32px", flexShrink: 0, borderRadius: "8px", overflow: "hidden", display: "flex", flexDirection: "row", padding: "0px 10px 0px 12px", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <Route size={16} strokeWidth={1.8} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#5c5c5c", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "82px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#2b2b2b", lineHeight: "20px" }}>Attack Paths</p>
            </div>
            <div style={{ flexShrink: 0, borderRadius: "999px", background: "#fde4e4", overflow: "hidden", display: "flex", flexDirection: "row", padding: "2px 8px 2px 8px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "15px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#c42b2b", lineHeight: "16px" }}>23</p>
            </div>
          </div>
          <div style={{ alignSelf: "stretch", height: "32px", flexShrink: 0, borderRadius: "8px", overflow: "hidden", display: "flex", flexDirection: "row", padding: "0px 10px 0px 12px", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <Target size={16} strokeWidth={1.8} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#5c5c5c", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "73px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#2b2b2b", lineHeight: "20px" }}>AI Pentests</p>
            </div>
          </div>
          <div style={{ alignSelf: "stretch", height: "32px", flexShrink: 0, borderRadius: "8px", overflow: "hidden", display: "flex", flexDirection: "row", padding: "0px 10px 0px 12px", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <Hammer size={16} strokeWidth={1.8} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#5c5c5c", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "83px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#2b2b2b", lineHeight: "20px" }}>Fix Requests</p>
            </div>
            <div style={{ flexShrink: 0, borderRadius: "999px", background: "#fde4e4", overflow: "hidden", display: "flex", flexDirection: "row", padding: "2px 8px 2px 8px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "13px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#c42b2b", lineHeight: "16px" }}>18</p>
            </div>
          </div>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "column", padding: "8px 0px 8px 0px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", height: "1px", flexShrink: 0, background: "#e8e8e8" }} />
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "column", padding: "0px 8px 0px 8px", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", padding: "4px 0px 6px 12px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "44px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "11px", fontWeight: 500, color: "#8a8a8a", letterSpacing: "0.04em" }}>ASSETS</p>
          </div>
          <div style={{ alignSelf: "stretch", height: "32px", flexShrink: 0, borderRadius: "8px", overflow: "hidden", display: "flex", flexDirection: "row", padding: "0px 10px 0px 12px", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <AiAgents size={16} strokeWidth={1.8} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#5c5c5c", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "62px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#2b2b2b", lineHeight: "20px" }}>AI Agents</p>
            </div>
            <div style={{ flexShrink: 0, borderRadius: "999px", background: "#e3ecff", overflow: "hidden", display: "flex", flexDirection: "row", padding: "2px 8px 2px 8px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#2f5bea", lineHeight: "16px" }}>42</p>
            </div>
          </div>
          <div style={{ alignSelf: "stretch", height: "32px", flexShrink: 0, borderRadius: "8px", overflow: "hidden", display: "flex", flexDirection: "row", padding: "0px 10px 0px 12px", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <LayoutGrid size={16} strokeWidth={1.8} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#5c5c5c", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "124px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#2b2b2b", lineHeight: "20px" }}>Applications & APIs</p>
            </div>
          </div>
          <div style={{ alignSelf: "stretch", height: "32px", flexShrink: 0, borderRadius: "8px", overflow: "hidden", display: "flex", flexDirection: "row", padding: "0px 10px 0px 12px", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <Database size={16} strokeWidth={1.8} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#5c5c5c", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "87px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#2b2b2b", lineHeight: "20px" }}>Data Sources</p>
            </div>
          </div>
          <div style={{ alignSelf: "stretch", height: "32px", flexShrink: 0, borderRadius: "8px", overflow: "hidden", display: "flex", flexDirection: "row", padding: "0px 10px 0px 12px", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <Puzzle size={16} strokeWidth={1.8} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#5c5c5c", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "97px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#2b2b2b", lineHeight: "20px" }}>Tools & Plugins</p>
            </div>
          </div>
          <div style={{ alignSelf: "stretch", height: "32px", flexShrink: 0, borderRadius: "8px", overflow: "hidden", display: "flex", flexDirection: "row", padding: "0px 10px 0px 12px", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <Key size={16} strokeWidth={1.8} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#5c5c5c", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "50px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#2b2b2b", lineHeight: "20px" }}>Secrets</p>
            </div>
            <div style={{ flexShrink: 0, borderRadius: "999px", background: "#e3ecff", overflow: "hidden", display: "flex", flexDirection: "row", padding: "2px 8px 2px 8px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "8px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#2f5bea", lineHeight: "16px" }}>9</p>
            </div>
          </div>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "column", padding: "8px 0px 8px 0px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", height: "1px", flexShrink: 0, background: "#e8e8e8" }} />
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "column", padding: "0px 8px 0px 8px", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", padding: "4px 0px 6px 12px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "80px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "11px", fontWeight: 500, color: "#8a8a8a", letterSpacing: "0.04em" }}>GOVERNANCE</p>
          </div>
          <div style={{ alignSelf: "stretch", height: "32px", flexShrink: 0, borderRadius: "8px", overflow: "hidden", display: "flex", flexDirection: "row", padding: "0px 10px 0px 12px", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <FileText size={16} strokeWidth={1.8} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#5c5c5c", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "50px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#2b2b2b", lineHeight: "20px" }}>Policies</p>
            </div>
          </div>
          <div style={{ alignSelf: "stretch", height: "32px", flexShrink: 0, borderRadius: "8px", overflow: "hidden", display: "flex", flexDirection: "row", padding: "0px 10px 0px 12px", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <Certificate size={16} strokeWidth={1.8} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#5c5c5c", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "76px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#2b2b2b", lineHeight: "20px" }}>Compliance</p>
            </div>
          </div>
          <div style={{ alignSelf: "stretch", height: "32px", flexShrink: 0, borderRadius: "8px", overflow: "hidden", display: "flex", flexDirection: "row", padding: "0px 10px 0px 12px", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <Reports size={16} strokeWidth={1.8} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#5c5c5c", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "51px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#2b2b2b", lineHeight: "20px" }}>Reports</p>
            </div>
          </div>
          <div style={{ alignSelf: "stretch", height: "32px", flexShrink: 0, borderRadius: "8px", overflow: "hidden", display: "flex", flexDirection: "row", padding: "0px 10px 0px 12px", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <PlugConnected size={16} strokeWidth={1.8} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#5c5c5c", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "77px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#2b2b2b", lineHeight: "20px" }}>Integrations</p>
            </div>
          </div>
          <div style={{ alignSelf: "stretch", height: "32px", flexShrink: 0, borderRadius: "8px", overflow: "hidden", display: "flex", flexDirection: "row", padding: "0px 10px 0px 12px", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <Users size={16} strokeWidth={1.8} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#5c5c5c", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "97px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#2b2b2b", lineHeight: "20px" }}>Team & Access</p>
            </div>
          </div>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "column", padding: "8px 0px 8px 0px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", height: "1px", flexShrink: 0, background: "#e8e8e8" }} />
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "column", padding: "0px 8px 0px 8px", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", padding: "4px 0px 6px 12px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "38px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "11px", fontWeight: 500, color: "#8a8a8a", letterSpacing: "0.04em" }}>OTHER</p>
          </div>
          <div style={{ alignSelf: "stretch", height: "32px", flexShrink: 0, borderRadius: "8px", overflow: "hidden", display: "flex", flexDirection: "row", padding: "0px 10px 0px 12px", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <Book size={16} strokeWidth={1.8} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#5c5c5c", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "107px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#2b2b2b", lineHeight: "20px" }}>Knowledge Base</p>
            </div>
          </div>
          <div style={{ alignSelf: "stretch", height: "32px", flexShrink: 0, borderRadius: "8px", overflow: "hidden", display: "flex", flexDirection: "row", padding: "0px 10px 0px 12px", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <Settings size={16} strokeWidth={1.8} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#5c5c5c", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "54px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#2b2b2b", lineHeight: "20px" }}>Settings</p>
            </div>
          </div>
          <div style={{ alignSelf: "stretch", height: "32px", flexShrink: 0, borderRadius: "8px", overflow: "hidden", display: "flex", flexDirection: "row", padding: "0px 10px 0px 12px", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <Support size={16} strokeWidth={1.8} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#5c5c5c", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "52px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#2b2b2b", lineHeight: "20px" }}>Support</p>
            </div>
          </div>
        </div>
      </div>
      <svg style={{ position: "absolute", left: "0px", top: "868px", width: "236px", height: "1px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="236" height="1" viewBox="0 0 236 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 -0.5 L0 0 L236 0 L236 -0.5 L236 -1 L0 -1 L0 -0.5 Z" fill="#e8e8e8"/></svg>
      <div style={{ position: "absolute", left: "0px", top: "869px", width: "236px", height: "176px", background: "#fafafa", boxShadow: "0px 0px 20px 4px rgba(0, 0, 0, 0.01)", overflow: "hidden" }}>
        <div style={{ position: "absolute", left: "20px", top: "20px", width: "196px", height: "135px", display: "flex", flexDirection: "column", gap: "21px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "14px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ alignSelf: "stretch", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "18px", fontWeight: 500, color: "#000000", lineHeight: "1.399999976158142", letterSpacing: "-0.02em", textBox: "trim-both cap alphabetic", height: "13px" }}>Upgrade to Pro</p>
            <p style={{ width: "178px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 400, color: "#000000", letterSpacing: "-0.02em" }}>Unlock advanced pentests and more agents.</p>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "14px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "196px", flexShrink: 0, borderRadius: "4px", background: "#e7e7e7", overflow: "hidden", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "87px", flexShrink: 0, borderRadius: "4px", background: "linear-gradient(90deg, #1666f4 0%, #5f99ff 100%)", display: "flex", flexDirection: "row", padding: "6px 12px 6px 12px", gap: "4px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }} />
            </div>
            <div style={{ width: "196px", height: "34px", flexShrink: 0, borderRadius: "11px", boxShadow: "inset 0 0 0 1px #ececec", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "194px", height: "32px", flexShrink: 0, opacity: 0.8, borderRadius: "10px", display: "flex", flexDirection: "row", padding: "6px 6px 6px 6px", gap: "4px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <Sparkles size={16} strokeWidth={2.21} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#000000", display: "block" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "90px", fontFamily: "'Inter'", fontSize: "14px", fontWeight: 500, color: "#000000", lineHeight: "16px" }}>Upgrade now</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
