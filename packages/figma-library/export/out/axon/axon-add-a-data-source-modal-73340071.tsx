"use client";
// Add a data source modal (axon, Modals) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Ingot Icons.
import { useEffect, useRef } from "react";
import type { SVGProps } from "react";

// Ingot Icons used here, inlined so this file needs no icon package.
function icon(body: string) {
  return function Icon({ size = 24, strokeWidth = 1.5, ...p }: { size?: number; strokeWidth?: number } & SVGProps<SVGSVGElement>) {
    const html = strokeWidth == 1.5 ? body : body.replace(/stroke-width="([\d.]+)"/g, (_, w) => `stroke-width="${(Number(w) * Number(strokeWidth)) / 1.5}"`);
    return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden {...p} dangerouslySetInnerHTML={{ __html: html }} />;
  };
}
const ChevronRight = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M9 6l6 6l-6 6\" /></g>");
const Database = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 6a8 3 0 1 0 16 0a8 3 0 1 0 -16 0\" /><path d=\"M4 6v6a8 3 0 0 0 16 0v-6\" /><path d=\"M4 12v6a8 3 0 0 0 16 0v-6\" /></g>");
const DatabasePlus = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 6c0 1.657 3.582 3 8 3s8 -1.343 8 -3s-3.582 -3 -8 -3s-8 1.343 -8 3\" /><path d=\"M4 6v6c0 1.657 3.582 3 8 3c1.075 0 2.1 -.08 3.037 -.224\" /><path d=\"M20 12v-6\" /><path d=\"M4 12v6c0 1.657 3.582 3 8 3c.166 0 .331 -.002 .495 -.006\" /><path d=\"M16 19h6\" /><path d=\"M19 16v6\" /></g>");
const Folder = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M5 4h4l3 3h7a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2\" /></g>");
const Shield = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3\" /></g>");
const Stack2 = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 4l-8 4l8 4l8 -4l-8 -4\" /><path d=\"M4 12l8 4l8 -4\" /><path d=\"M4 16l8 4l8 -4\" /></g>");
const Table = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14\" /><path d=\"M3 10h18\" /><path d=\"M10 3v18\" /></g>");
const Upload = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2\" /><path d=\"M7 9l5 -5l5 5\" /><path d=\"M12 4l0 12\" /></g>");
const World = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0\" /><path d=\"M3.6 9h16.8\" /><path d=\"M3.6 15h16.8\" /><path d=\"M11.5 3a17 17 0 0 0 0 18\" /><path d=\"M12.5 3a17 17 0 0 1 0 18\" /></g>");
const X = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M18 6l-12 12\" /><path d=\"M6 6l12 12\" /></g>");

export function AddADataSourceModal() {
  const fuRef = useRef<any>(null);
  useEffect(() => fuInteract(fuRef.current), []);
  return (
    <div ref={fuRef} style={{ width: "720px", height: "655px", borderRadius: "14px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e8e8e8, 0px 24px 48px 0px rgba(13, 13, 18, 0.12), 0px 12px 22px 0px rgba(13, 13, 18, 0.08), 0px 1px 2px 0px rgba(79, 79, 79, 0.12)", overflow: "hidden", display: "flex", flexDirection: "column", padding: "1px 1px 1px 1px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
      <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "18px 16px 14px 20px", gap: "12px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ width: "36px", height: "36px", flexShrink: 0, borderRadius: "10px", background: "#eff8ff", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <DatabasePlus size={18} style={{ width: "18px", height: "18px", flexShrink: 0, color: "#1b8ce8", display: "block" }} />
        </div>
        <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "16px", fontWeight: 400, color: "#15171c", lineHeight: "24px", letterSpacing: "-0.1px" }}>Add a data source</p>
          <p style={{ alignSelf: "stretch", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>Sources are read-only. You decide which agents can read each one.</p>
        </div>
        <div style={{ width: "28px", height: "28px", flexShrink: 0, borderRadius: "7px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <X size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
        </div>
      </div>
      <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 20px 12px 20px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ flexShrink: 0, borderRadius: "100px", background: "#eff8ff", display: "flex", flexDirection: "row", padding: "1px 8px 1px 8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#1b8ce8", lineHeight: "20px" }}>1 · Type</p>
        </div>
        <ChevronRight size={14} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#b3b3b3", display: "block" }} />
        <div style={{ flexShrink: 0, borderRadius: "100px", background: "#f7f8fa", display: "flex", flexDirection: "row", padding: "1px 8px 1px 8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>2 · Connect & choose folder</p>
        </div>
        <ChevronRight size={14} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#b3b3b3", display: "block" }} />
        <div style={{ flexShrink: 0, borderRadius: "100px", background: "#f7f8fa", display: "flex", flexDirection: "row", padding: "1px 8px 1px 8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>3 · Access & schedule</p>
        </div>
      </div>
      <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", padding: "6px 20px 20px 20px", gap: "16px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", flexWrap: "wrap", rowGap: "10px", columnGap: "10px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div data-fu="card" style={{ width: "214px", height: "222px", flexShrink: 0, borderRadius: "12px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ededed", display: "flex", flexDirection: "column", padding: "15px 15px 15px 15px", gap: "10px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "9px", background: "#f4f1ff", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <Database size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#7c5cfc", display: "block" }} />
              </div>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#15171c", lineHeight: "20px" }}>Database</p>
            </div>
            <p style={{ width: "180px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>Query tables and views read-only</p>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "24px", height: "24px", flexShrink: 0, borderRadius: "7px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ededed, 0px 1px 2px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <svg style={{ width: "13px", height: "13px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M3.0745 5.73896 L4.186 5.73896 L4.186 8.57946 C3.72625 8.30197 3.34395 7.91297 3.0745 7.44846 L3.0745 5.73896 Z M12.9215 11.6085 C12.9719 11.6595 13.0001 11.7284 13.0001 11.8002 C13.0001 11.872 12.9719 11.9409 12.9215 11.992 L11.992 12.9215 C11.9409 12.9719 11.872 13.0001 11.8002 13.0001 C11.7284 13.0001 11.6595 12.9719 11.6085 12.9215 L9.30746 10.6205 C9.30616 10.6192 9.3049 10.618 9.30367 10.6167 C9.29283 10.6058 9.2885 10.5923 9.28038 10.5809 C8.28428 11.3081 7.08277 11.6999 5.84946 11.6995 C2.61896 11.6995 0 9.0805 0 5.84946 C0 2.61842 2.61896 0 5.85 0 C9.08104 0 11.6995 2.61896 11.6995 5.85 C11.6995 7.13321 11.2813 8.31621 10.5804 9.28038 C10.5939 9.28958 10.6085 9.29554 10.6205 9.30746 L12.9215 11.6085 Z M10.198 5.84946 C10.1966 4.9914 9.94094 4.153 9.46336 3.44013 C8.98578 2.72726 8.30766 2.1719 7.51465 1.84417 C6.72164 1.51645 5.84931 1.43107 5.0078 1.59881 C4.1663 1.76655 3.39337 2.17989 2.78663 2.78663 C2.17989 3.39337 1.76655 4.1663 1.59881 5.0078 C1.43107 5.84931 1.51645 6.72164 1.84417 7.51465 C2.1719 8.30766 2.72726 8.98578 3.44013 9.46336 C4.153 9.94094 4.9914 10.1966 5.84946 10.198 L5.86246 10.198 C6.43266 10.1971 6.99711 10.084 7.52358 9.86496 C8.05005 9.64596 8.52822 9.32542 8.93081 8.92162 C9.3334 8.51783 9.65252 8.03869 9.86993 7.51157 C10.0873 6.98444 10.1988 6.41966 10.198 5.84946 Z M7.56546 8.54696 C8.02765 8.2521 8.40776 7.84515 8.67046 7.36396 L8.67046 6.40846 L7.56546 6.40846 L7.56546 8.54696 Z M5.12796 9.06046 C5.36738 9.09133 5.60842 9.10379 5.84946 9.09946 C6.06612 9.113 6.28279 9.113 6.49946 9.09946 L6.49946 4.1665 L5.1285 4.1665 L5.1285 9.06046 L5.12796 9.06046 Z" fill="#669df6"/></svg>
              </div>
              <div style={{ width: "24px", height: "24px", flexShrink: 0, borderRadius: "7px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ededed, 0px 1px 2px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <svg style={{ width: "13px", height: "13px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 3.58 0)" d="M5.73276 5.17563 C5.0481 2.15313 3.4296 1.15971 3.25572 0.78 C3.10406 0.566583 2.96864 0.26325 2.8576 0 C2.8381 0.268125 2.82781 0.371042 2.57431 0.641333 C2.18268 0.947917 0.170389 2.63575 0.00680601 6.06883 C-0.145944 9.27117 2.31972 11.1795 2.65447 11.4227 L2.69239 11.4498 C2.7621 11.9653 2.82169 12.4821 2.87114 13 L3.13168 13 C3.19343 12.441 3.28551 11.8863 3.40793 11.3371 C3.63381 11.1768 3.7351 11.0863 3.86835 10.9617 C4.49937 10.3779 5.00086 9.66826 5.34039 8.87853 C5.67993 8.0888 5.84995 7.23661 5.83947 6.37704 C5.84489 5.93613 5.78368 5.47679 5.73276 5.17563 Z M2.84243 9.61458 C2.84243 9.61458 2.84243 5.12363 2.99139 5.12417 C3.10676 5.12417 3.25681 10.9173 3.25681 10.9173 C3.05043 10.8929 2.84243 9.96396 2.84243 9.61458 Z" fill="#47a248"/></svg>
              </div>
              <div style={{ width: "24px", height: "24px", flexShrink: 0, borderRadius: "7px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ededed, 0px 1px 2px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <svg style={{ width: "13px", height: "13px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 2.391)" d="M8.88983 5.71847e-07 L4.11233 5.71847e-07 C3.02225 -0.000574036 1.97658 0.431909 1.20537 1.20231 C0.434161 1.97271 0.000575208 3.01792 5.71902e-07 4.108 C-0.000574064 5.19808 0.431909 6.24375 1.20231 7.01496 C1.97271 7.78617 3.01792 8.21976 4.108 8.22033 L8.88983 8.22033 C9.97992 8.22033 11.0254 7.7873 11.7962 7.01649 C12.567 6.24569 13 5.20025 13 4.11017 C13 3.02008 12.567 1.97465 11.7962 1.20384 C11.0254 0.433035 9.97992 5.71847e-07 8.88983 5.71847e-07 Z M8.78529 6.77192 L4.21742 6.77192 C3.52078 6.75786 2.85741 6.47125 2.3697 5.97361 C1.882 5.47596 1.60883 4.80695 1.60883 4.11017 C1.60883 3.41338 1.882 2.74437 2.3697 2.24673 C2.85741 1.74908 3.52078 1.46247 4.21742 1.44842 L8.78529 1.44842 C9.49123 1.44842 10.1683 1.72885 10.6674 2.22803 C11.1666 2.7272 11.447 3.40423 11.447 4.11017 C11.447 4.81611 11.1666 5.49313 10.6674 5.99231 C10.1683 6.49148 9.49123 6.77192 8.78529 6.77192 Z" fill="#f80000"/></svg>
              </div>
            </div>
          </div>
          <div data-fu="card" style={{ width: "214px", height: "222px", flexShrink: 0, borderRadius: "12px", background: "#eff8ff", boxShadow: "inset 0 0 0 1.5px #1b8ce8", display: "flex", flexDirection: "column", padding: "15.5px 15.5px 15.5px 15.5px", gap: "10px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "9px", background: "#fef5f0", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <Folder size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#ff5601", display: "block" }} />
              </div>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#15171c", lineHeight: "20px" }}>Files & documents</p>
            </div>
            <p style={{ width: "180px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>Index PDFs, docs and images for search</p>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "24px", height: "24px", flexShrink: 0, borderRadius: "7px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ededed, 0px 1px 2px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <svg style={{ width: "13px", height: "13px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0.805)" d="M6.50542 0 C5.37767 0 4.472 0.0108333 4.47796 0.0254583 C4.48338 0.0362916 5.40313 1.651 6.52221 3.61129 L8.55888 7.17221 L10.5955 7.17221 C11.7228 7.17221 12.6284 7.16137 12.6225 7.14675 C12.6198 7.13592 11.6973 5.52121 10.5777 3.56092 L8.541 0 L6.50542 0 Z M3.92708 0.937083 C3.26641 2.07498 2.61098 3.21593 1.96083 4.35988 L0 7.79079 L1.02375 9.57721 L2.04479 11.3631 L4.00563 7.93162 L5.96537 4.50287 L4.94704 2.72242 C4.3875 1.74362 3.92979 0.940333 3.92708 0.937083 Z M5.15071 7.79079 L5.04075 7.97929 C4.979 8.08654 4.52075 8.88496 4.02242 9.75975 C3.718 10.2972 3.41141 10.8335 3.10267 11.3685 C3.09725 11.3826 4.85767 11.3912 7.01458 11.3912 L10.9384 11.3912 L11.9113 9.68121 C12.4486 8.74196 12.9133 7.93162 12.9437 7.88125 L13 7.79079 L9.07346 7.79079 L5.15071 7.79079 Z" fill="#4285f4"/></svg>
              </div>
              <div style={{ width: "24px", height: "24px", flexShrink: 0, borderRadius: "7px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ededed, 0px 1px 2px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <svg style={{ width: "13px", height: "13px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0.979)" d="M3.25 0 L0 2.07025 L3.25 4.1405 L6.50054 2.07025 L3.25 0 Z M9.75 0 L6.5 2.07025 L9.75 4.1405 L13 2.07025 L9.75 0 Z M0 6.21129 L3.25 8.28154 L6.50054 6.21129 L3.25 4.1405 L0 6.21129 Z M9.75 4.1405 L6.5 6.21129 L9.75 8.28154 L13 6.21129 L9.75 4.1405 Z M3.25 8.97217 L6.50054 11.0424 L9.75054 8.97217 L6.50054 6.90192 L3.25 8.97217 Z" fill="#0061ff"/></svg>
              </div>
              <div style={{ width: "24px", height: "24px", flexShrink: 0, borderRadius: "7px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ededed, 0px 1px 2px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <svg style={{ width: "13px", height: "13px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0.265 0)" d="M2.15042 2.2792 C2.5545 2.60745 2.70617 2.58253 3.46558 2.53162 L10.6237 2.10207 C10.7754 2.10207 10.6492 1.95041 10.5988 1.92549 L9.40929 1.06587 C9.18179 0.889282 8.87792 0.686699 8.29617 0.737074 L1.36554 1.24299 C1.11312 1.26791 1.06221 1.39466 1.16296 1.49541 L2.15042 2.2792 Z M2.57996 3.94753 L2.57996 11.4789 C2.57996 11.8835 2.782 12.0352 3.23754 12.0097 L11.1042 11.5547 C11.5597 11.5298 11.6106 11.2514 11.6106 10.9226 L11.6106 3.44162 C11.6106 3.11337 11.4844 2.93624 11.2055 2.96116 L2.98458 3.44162 C2.68125 3.46707 2.57996 3.61928 2.57996 3.94753 Z M10.3458 4.35107 C10.3962 4.57857 10.3458 4.80607 10.1183 4.83207 L9.73917 4.90791 L9.73917 10.4676 C9.40983 10.6447 9.1065 10.746 8.85354 10.746 C8.44837 10.746 8.34708 10.6192 8.04375 10.2406 L5.56454 6.3482 L5.56454 10.1139 L6.34887 10.2915 C6.34887 10.2915 6.34887 10.7465 5.71621 10.7465 L3.97096 10.8473 C3.92058 10.7465 3.97096 10.4936 4.14808 10.4432 L4.60308 10.317 L4.60308 5.33745 L3.97204 5.28653 C3.92112 5.05903 4.04787 4.73078 4.40158 4.70532 L6.27358 4.57912 L8.85408 8.52191 L8.85408 5.03357 L8.19596 4.95828 C8.14558 4.67987 8.34762 4.47782 8.60058 4.45291 L10.3458 4.35107 Z M0.783792 0.560491 L7.99337 0.0296573 C8.87846 -0.046176 9.1065 0.00419897 9.66279 0.408824 L11.9643 2.02624 C12.3435 2.30412 12.4702 2.37995 12.4702 2.68328 L12.4702 11.5547 C12.4702 12.1104 12.2682 12.4398 11.5602 12.4896 L3.18717 12.9955 C2.65633 13.021 2.40283 12.9452 2.12442 12.5909 L0.429542 10.3917 C0.126208 9.98712 0 9.68432 0 9.33007 L0 1.44449 C0 0.990032 0.202583 0.610324 0.783792 0.560491 Z" fill="#000000"/></svg>
              </div>
            </div>
          </div>
          <div data-fu="card" style={{ width: "214px", height: "222px", flexShrink: 0, borderRadius: "12px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ededed", display: "flex", flexDirection: "column", padding: "15px 15px 15px 15px", gap: "10px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "9px", background: "#eff8ff", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <Stack2 size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#1b8ce8", display: "block" }} />
              </div>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#15171c", lineHeight: "20px" }}>App objects</p>
            </div>
            <p style={{ width: "180px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>Mirror records from a connected app</p>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "24px", height: "24px", flexShrink: 0, borderRadius: "7px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ededed, 0px 1px 2px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "13px", height: "13px", flexShrink: 0, borderRadius: "5px", background: "#1a3d6e", position: "relative" }}>
                  <p style={{ position: "absolute", left: "4px", top: "4px", margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "12px", fontFamily: "'Geist'", fontSize: "9px", fontWeight: 600, color: "#ffffff" }}>NS</p>
                </div>
              </div>
              <div style={{ width: "24px", height: "24px", flexShrink: 0, borderRadius: "7px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ededed, 0px 1px 2px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <svg style={{ width: "13px", height: "13px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 1.949)" d="M5.41992 0.983125 C5.63241 0.759405 5.88824 0.581305 6.1718 0.459682 C6.45537 0.338059 6.76074 0.275463 7.06929 0.275708 C7.91429 0.275708 8.66937 0.763208 9.06804 1.47008 C9.40929 1.30758 9.79929 1.22633 10.2055 1.22633 C11.7493 1.22633 13 2.49383 13 4.05383 C13 5.61383 11.7487 6.88133 10.1963 6.88133 C10.0095 6.88133 9.82258 6.8575 9.64383 6.825 C9.46844 7.14556 9.20982 7.41287 8.89523 7.59876 C8.58065 7.78466 8.22174 7.88225 7.85633 7.88125 C7.53133 7.88125 7.23071 7.8 6.96258 7.67812 C6.78297 8.10026 6.48308 8.46019 6.10029 8.71304 C5.7175 8.96588 5.26876 9.10046 4.81 9.1 C4.33179 9.10126 3.86477 8.95536 3.47231 8.68209 C3.07986 8.40883 2.78099 8.02144 2.61625 7.5725 C2.47 7.60608 2.32375 7.61367 2.16938 7.61367 C0.975542 7.61367 0 6.63867 0 5.41992 C0 4.60742 0.439292 3.90054 1.08875 3.51867 C0.950625 3.20992 0.8775 2.86867 0.8775 2.51875 C0.8775 1.12125 2.015 0 3.39625 0 C4.225 0 4.94 0.381875 5.41125 0.975" fill="#00a1e0"/></svg>
              </div>
              <div style={{ width: "24px", height: "24px", flexShrink: 0, borderRadius: "7px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ededed, 0px 1px 2px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <svg style={{ width: "13px", height: "13px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0.297 0)" d="M9.54175 4.2954 L9.54175 2.75382 C9.74576 2.65843 9.91854 2.50713 10.04 2.31748 C10.1615 2.12783 10.2267 1.90762 10.228 1.6824 L10.228 1.64611 C10.2272 1.33128 10.1018 1.02958 9.8792 0.806912 C9.65663 0.584242 9.35499 0.458695 9.04016 0.457695 L9.00387 0.457695 C8.68913 0.458694 8.38757 0.584166 8.16502 0.80672 C7.94247 1.02927 7.817 1.33083 7.816 1.64557 L7.816 1.68186 C7.81699 1.90577 7.88116 2.12485 8.00113 2.31391 C8.1211 2.50296 8.292 2.65432 8.49416 2.75057 L8.5012 2.75382 L8.5012 4.29865 C7.91179 4.38871 7.35683 4.63357 6.893 5.00824 L6.8995 5.00282 L2.65933 1.70136 C2.74006 1.39893 2.71339 1.07785 2.58386 0.792883 C2.45434 0.507913 2.22998 0.276692 1.94904 0.138641 C1.6681 0.000591105 1.34798 -0.0357408 1.04325 0.0358402 C0.738519 0.107421 0.468051 0.282483 0.277959 0.531179 C0.0878671 0.779874 -0.0100788 1.0868 0.000820698 1.39964 C0.0117202 1.71247 0.13079 2.01184 0.33773 2.2467 C0.544669 2.48157 0.826665 2.63738 1.13564 2.68758 C1.44461 2.73778 1.76143 2.67925 2.03208 2.52199 L2.02558 2.52524 L6.19479 5.77036 C5.82622 6.32294 5.63049 6.97273 5.63254 7.63694 C5.63254 8.3644 5.86275 9.03878 6.25383 9.59074 L6.24679 9.5799 L4.9782 10.849 C4.87665 10.8162 4.77075 10.7989 4.66404 10.7976 L4.66295 10.7976 C4.44516 10.7976 4.23225 10.8622 4.05116 10.9832 C3.87006 11.1042 3.72892 11.2761 3.64557 11.4774 C3.56222 11.6786 3.54042 11.9 3.58291 12.1136 C3.6254 12.3272 3.73028 12.5234 3.88428 12.6775 C4.03829 12.8315 4.23451 12.9363 4.44812 12.9788 C4.66173 13.0213 4.88315 12.9995 5.08437 12.9162 C5.28559 12.8328 5.45757 12.6917 5.57858 12.5106 C5.69958 12.3295 5.76416 12.1166 5.76416 11.8988 C5.76269 11.7892 5.74443 11.6805 5.71 11.5765 L5.7127 11.5841 L6.96775 10.329 C7.37681 10.6412 7.85168 10.8559 8.35622 10.9569 C8.86077 11.0579 9.3817 11.0425 9.8794 10.9119 C10.3771 10.7812 10.8384 10.5388 11.2284 10.2031 C11.6183 9.86734 11.9265 9.44708 12.1296 8.97429 C12.3326 8.5015 12.4252 7.98863 12.4002 7.47468 C12.3752 6.96073 12.2334 6.45925 11.9854 6.00838 C11.7375 5.5575 11.39 5.16912 10.9693 4.87275 C10.5487 4.57639 10.066 4.37986 9.558 4.29811 L9.5385 4.2954 L9.54175 4.2954 Z M9.01958 9.37515 C8.67635 9.37419 8.3411 9.27154 8.05617 9.08016 C7.77125 8.88878 7.54942 8.61726 7.41872 8.29989 C7.28801 7.98251 7.25428 7.63353 7.3218 7.297 C7.38931 6.96047 7.55503 6.6515 7.79804 6.4091 C8.04104 6.1667 8.35043 6.00175 8.68712 5.93507 C9.02382 5.8684 9.37272 5.903 9.68976 6.03449 C10.0068 6.16599 10.2778 6.38849 10.4684 6.67389 C10.6591 6.95929 10.7609 7.2948 10.761 7.63803 L10.761 7.63911 C10.7611 7.86725 10.7162 8.09317 10.629 8.30396 C10.5417 8.51475 10.4137 8.70628 10.2524 8.8676 C10.0911 9.02892 9.89956 9.15688 9.68877 9.24415 C9.47798 9.33142 9.25206 9.37631 9.02391 9.37624 L9.01958 9.37515 Z" fill="#ff7a59"/></svg>
              </div>
            </div>
          </div>
          <div data-fu="card" style={{ width: "214px", height: "222px", flexShrink: 0, borderRadius: "12px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ededed", display: "flex", flexDirection: "column", padding: "15px 15px 15px 15px", gap: "10px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "9px", background: "#f4fcf7", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <Table size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#17a673", display: "block" }} />
              </div>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#15171c", lineHeight: "20px" }}>Spreadsheet</p>
            </div>
            <p style={{ width: "180px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>Keep a sheet in sync, row by row</p>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "24px", height: "24px", flexShrink: 0, borderRadius: "7px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ededed, 0px 1px 2px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <svg style={{ width: "13px", height: "13px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 1.773 0)" d="M4.35771 6.79521 L2.51171 6.79521 L2.51171 5.76117 L4.35879 5.76117 L4.35879 6.79575 L4.35771 6.79521 Z M6.20479 0 L6.20479 3.25 L9.45479 3.25 L6.20479 0 Z M6.94308 5.76117 L5.096 5.76117 L5.096 6.79575 L6.94308 6.79575 L6.94308 5.76117 Z M6.94308 7.53404 L5.096 7.53404 L5.096 8.56863 L6.94308 8.56863 L6.94308 7.53404 Z M9.45425 3.52083 L9.45425 12.1138 C9.45425 12.6035 9.05775 13 8.56808 13 L0.886167 13 C0.769794 13 0.65456 12.9771 0.547045 12.9325 C0.439531 12.888 0.34184 12.8227 0.259552 12.7404 C0.0933638 12.5743 0 12.3489 0 12.1138 L0 0.886167 C2.40548e-16 0.3965 0.3965 0 0.886167 0 L5.93342 0 L5.93342 3.52083 L9.45425 3.52083 Z M7.68138 5.02287 L1.77233 5.02287 L1.77233 9.30692 L7.68192 9.30692 L7.68192 5.02233 L7.68138 5.02287 Z M4.35771 7.53404 L2.51171 7.53404 L2.51171 8.56863 L4.35879 8.56863 L4.35879 7.53404 L4.35771 7.53404 Z" fill="#34a853"/></svg>
              </div>
              <div style={{ width: "24px", height: "24px", flexShrink: 0, borderRadius: "7px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ededed, 0px 1px 2px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <svg style={{ width: "13px", height: "13px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 1.064)" d="M6.49567 1.54573e-06 C6.26058 1.54573e-06 6.02442 0.0465849 5.80233 0.13921 L0.963625 2.14013 C0.691167 2.25279 0.698208 2.63196 0.970125 2.74463 L5.83537 4.67188 C6.26161 4.84467 6.73839 4.84467 7.16462 4.67188 L12.0299 2.74463 C12.3023 2.63846 12.3023 2.25279 12.0364 2.14013 L7.18467 0.13921 C6.96667 0.0470317 6.73235 -0.000311845 6.49567 1.54573e-06 Z M12.675 3.29875 C12.6337 3.29902 12.5929 3.3073 12.5547 3.32313 L7.13158 5.42317 C7.07091 5.44802 7.01896 5.49032 6.98233 5.5447 C6.94569 5.59908 6.926 5.6631 6.92575 5.72867 L6.92575 10.5473 C6.92626 10.6001 6.9396 10.6519 6.96463 10.6984 C6.98966 10.7448 7.02562 10.7845 7.0694 10.8139 C7.11318 10.8433 7.16347 10.8617 7.21592 10.8673 C7.26837 10.873 7.32141 10.8658 7.37046 10.8463 L12.7942 8.73925 C12.855 8.71667 12.9074 8.6759 12.9442 8.6225 C12.981 8.56911 13.0005 8.50566 13 8.44079 L13 3.62213 C12.9994 3.53631 12.9649 3.4542 12.904 3.39372 C12.8432 3.33323 12.7608 3.29929 12.675 3.29929 L12.675 3.29875 Z M0.366167 3.31988 C0.318074 3.31817 0.270148 3.32643 0.225403 3.34414 C0.180658 3.36185 0.140062 3.38863 0.106167 3.42279 C0.0465833 3.48292 0 3.5555 0 3.64217 L0 8.16779 C0 8.40721 0.278958 8.567 0.491833 8.46029 L3.88808 6.83204 L4.05437 6.75242 L5.66258 5.97459 C5.915 5.85542 5.8955 5.48275 5.62954 5.38309 L0.478292 3.34317 C0.442732 3.32829 0.404702 3.32021 0.366167 3.31933 L0.366167 3.31988 Z" fill="#18bfff"/></svg>
              </div>
            </div>
          </div>
          <div data-fu="card" style={{ width: "214px", height: "222px", flexShrink: 0, borderRadius: "12px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ededed", display: "flex", flexDirection: "column", padding: "15px 15px 15px 15px", gap: "10px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "9px", background: "#fdf0f7", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <World size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#ef0c78", display: "block" }} />
              </div>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#15171c", lineHeight: "20px" }}>Website</p>
            </div>
            <p style={{ width: "180px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>Crawl a help center or policy site</p>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }} />
          </div>
          <div data-fu="card" style={{ width: "214px", height: "222px", flexShrink: 0, borderRadius: "12px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ededed", display: "flex", flexDirection: "column", padding: "15px 15px 15px 15px", gap: "10px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "9px", background: "#f7f8fa", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <Upload size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#697386", display: "block" }} />
              </div>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#15171c", lineHeight: "20px" }}>Upload</p>
            </div>
            <p style={{ width: "180px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>One-off CSV, JSON or a ZIP of files</p>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }} />
          </div>
        </div>
      </div>
      <div style={{ alignSelf: "stretch", flexShrink: 0, background: "#f9f9f9", boxShadow: "inset 0 1px 0 0 #e9e9e9", display: "flex", flexDirection: "row", padding: "13px 20px 12px 20px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <Shield size={14} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#929292", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>PII is detected automatically and masked by default</p>
          </div>
        </div>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div data-fu="btn" style={{ flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e8e8e8", display: "flex", flexDirection: "row", padding: "7px 13px 7px 13px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#686765", lineHeight: "20px" }}>Cancel</p>
          </div>
          <div data-fu="btn" style={{ flexShrink: 0, borderRadius: "10px", background: "linear-gradient(0deg, #1b8ce8 34.7%, #4eb0ff 93.7%)", boxShadow: "0px 8px 9px 0px rgba(0, 0, 0, 0.12), inset 0.6px 0.6px 0px 0px rgba(255, 255, 255, 0.25), inset -0.6px 0.6px 0px 0px rgba(255, 255, 255, 0.25)", display: "flex", flexDirection: "row", padding: "6px 12px 6px 12px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#ffffff", lineHeight: "20px" }}>Continue</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Interactions: hover and click states. Remove this function and the two lines above to get a static component.
function fuInteract(root: HTMLElement | null) {
  if (!root || root.dataset.fuOn) return;
  root.dataset.fuOn = "1";
  const doc = root.ownerDocument;
  const all = (sel: string, el: Element = root): HTMLElement[] => Array.from(el.querySelectorAll(sel)) as HTMLElement[];
  const box = (el: Element) => el.getBoundingClientRect();
  const font = getComputedStyle(root).fontFamily;
  const tip = doc.createElement("div");
  tip.setAttribute("aria-hidden", "true");
  Object.assign(tip.style, { position: "fixed", zIndex: "2147483647", pointerEvents: "none", background: "#111113", color: "#fff", font: "500 12px/16px " + font, padding: "5px 8px", borderRadius: "6px", whiteSpace: "nowrap", opacity: "0", transform: "translate(-50%, -100%)", transition: "opacity .12s", boxShadow: "0 4px 14px rgba(0,0,0,.18)" });
  doc.body.appendChild(tip);
  const show = (text: string, x: number, y: number) => { if (!text) return hide(); tip.textContent = text; tip.style.left = x + "px"; tip.style.top = y - 8 + "px"; tip.style.opacity = "1"; };
  const hide = () => { tip.style.opacity = "0"; };
  const ease = (el: HTMLElement | SVGElement, props: string) => { const s = (el as HTMLElement).style; if (!s.transition) s.transition = props; };
  const texts = (scope: Element) => all("p, span", scope).filter((t) => t.children.length === 0 && (t.textContent || "").trim());
  const NUM = /^([^\d\-+.]*)([-+]?[\d,]*\.?\d+)\s*([kKmMbB%]?)([^\d]*)$/;
  // value axis: numeric labels along one edge of the chart, used to read a mark's value from its position
  const axis = (scope: Element, vertical: boolean) => {
    const pts: { v: number; p: number; pre: string; suf: string; dec: number }[] = [];
    for (const t of texts(scope)) {
      const m = (t.textContent || "").trim().match(NUM);
      if (!m) continue;
      const mult = { k: 1e3, K: 1e3, m: 1e6, M: 1e6, b: 1e9, B: 1e9 }[m[3] as "k"] || 1;
      const r = box(t);
      pts.push({ v: parseFloat(m[2].replace(/,/g, "")) * mult, p: vertical ? r.top + r.height / 2 : r.left + r.width / 2, pre: m[1], suf: m[3] + m[4], dec: (m[2].split(".")[1] || "").length });
    }
    const uniq = pts.filter((a, i) => pts.findIndex((b) => Math.abs(b.p - a.p) < 2) === i);
    if (uniq.length < 2) return null;
    uniq.sort((a, b) => a.p - b.p);
    const a = uniq[0], b = uniq[uniq.length - 1];
    if (a.v === b.v || Math.abs(b.p - a.p) < 10) return null;
    return (pos: number) => {
      const v = a.v + ((pos - a.p) * (b.v - a.v)) / (b.p - a.p);
      const suf = a.suf || b.suf, pre = a.pre || b.pre;
      const div = /^[kK]/.test(suf) ? 1e3 : /^[mM]/.test(suf) ? 1e6 : /^[bB]/.test(suf) ? 1e9 : 1;
      const x = v / div;
      const dec = Math.max(a.dec, b.dec, div > 1 && Math.abs(x) < 100 ? 1 : 0);
      return pre + x.toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: dec }) + suf;
    };
  };
  // the chart around a group of marks: the nearest ancestor that also holds text labels
  const chartOf = (el: Element) => { let c: Element | null = el.parentElement; while (c && c !== root.parentElement) { if (texts(c).length >= 3) return c; c = c.parentElement; } return root; };
  const labelNear = (scope: Element, x: number, y: number, below: boolean, anyText = false) => {
    let best = "", d = 1e9;
    for (const t of texts(scope)) {
      const r = box(t);
      if (below ? r.top < y - 2 : r.right > x + 2) continue;
      if (!anyText && NUM.test((t.textContent || "").trim()) && !/[a-z]{3}/i.test(t.textContent || "")) continue;
      const dd = below ? Math.abs(r.left + r.width / 2 - x) + (r.top - y) * 0.2 : Math.abs(r.top + r.height / 2 - y) + (x - r.right) * 0.1;
      if (dd < d) { d = dd; best = (t.textContent || "").trim(); }
    }
    return d < 80 ? best : "";
  };
  const dim = (els: (HTMLElement | SVGElement)[], keep: (HTMLElement | SVGElement)[]) => { for (const e of els) { ease(e, "opacity .15s"); (e as HTMLElement).style.opacity = keep.includes(e) ? "" : "0.35"; } };
  const undim = (els: (HTMLElement | SVGElement)[]) => { for (const e of els) (e as HTMLElement).style.opacity = ""; };

  // vertical bars: the hovered column (all stacked segments at that x) stays, the rest fade
  const groups = new Map<Element, HTMLElement[]>();
  for (const b of all("[data-fu=bar],[data-fu=hbar]")) { const p = b.parentElement!; if (!groups.has(p)) groups.set(p, []); groups.get(p)!.push(b); }
  groups.forEach((bars) => {
    const horiz = bars[0].dataset.fu === "hbar";
    const scope = chartOf(bars[0]);
    const val = axis(scope, !horiz);
    const peers = (b: HTMLElement) => { const r = box(b), c = horiz ? r.top + r.height / 2 : r.left + r.width / 2; return bars.filter((o) => { const q = box(o); return Math.abs((horiz ? q.top + q.height / 2 : q.left + q.width / 2) - c) < Math.max(2, (horiz ? r.height : r.width) / 2); }); };
    for (const b of bars) {
      b.addEventListener("mouseenter", () => {
        const col = peers(b);
        dim(bars, col);
        const rs = col.map(box);
        const top = Math.min(...rs.map((r) => r.top)), right = Math.max(...rs.map((r) => r.right)), r0 = rs[0];
        const label = horiz ? labelNear(scope, r0.left, r0.top + r0.height / 2, false) : labelNear(scope, r0.left + r0.width / 2, Math.max(...rs.map((r) => r.bottom)), true);
        const v = val ? val(horiz ? right : top) : "";
        show([label, v].filter(Boolean).join(" · "), horiz ? right : r0.left + r0.width / 2, horiz ? r0.top : top);
      });
      b.addEventListener("mouseleave", () => { undim(bars); hide(); });
    }
  });

  // line and area plots: a guide line and a dot follow the pointer along the top edge of the plotted shape
  for (const svg of all("svg[data-fu=plot]") as unknown as SVGSVGElement[]) {
    const paths = Array.from(svg.querySelectorAll("path, polyline")) as SVGGeometryElement[];
    if (!paths.length) continue;
    const line = paths.reduce((a, b) => (b.getTotalLength() > a.getTotalLength() ? b : a));
    const len = line.getTotalLength();
    const pts: { x: number; y: number }[] = [];
    for (let i = 0; i <= 800; i++) { const q = line.getPointAtLength((len * i) / 800); pts.push({ x: q.x, y: q.y }); }
    const xs = pts.map((q) => q.x), minX = Math.min(...xs), maxX = Math.max(...xs);
    const color = (line.getAttribute("stroke") && line.getAttribute("stroke") !== "none" ? line.getAttribute("stroke") : line.getAttribute("fill")) || "#111";
    const NS = "http://www.w3.org/2000/svg";
    const g = doc.createElementNS(NS, "g");
    g.setAttribute("pointer-events", "none");
    g.style.opacity = "0";
    const guide = doc.createElementNS(NS, "line");
    guide.setAttribute("stroke", /^url/.test(color) ? "#111" : color);
    guide.setAttribute("stroke-dasharray", "3 3");
    guide.setAttribute("stroke-opacity", "0.5");
    const dot = doc.createElementNS(NS, "circle");
    dot.setAttribute("r", "4");
    dot.setAttribute("fill", "#fff");
    dot.setAttribute("stroke", /^url/.test(color) ? "#111" : color);
    dot.setAttribute("stroke-width", "2");
    g.append(guide, dot);
    svg.appendChild(g);
    const scope = chartOf(svg);
    const val = axis(scope, true);
    const area = svg.parentElement || svg;
    area.addEventListener("mousemove", (ev: Event) => {
      const e = ev as MouseEvent;
      const m = line.getScreenCTM();
      if (!m) return;
      const px = new DOMPoint(e.clientX, e.clientY).matrixTransform(m.inverse()).x;
      if (px < minX - 4 || px > maxX + 4) { g.style.opacity = "0"; hide(); return; }
      const step = (maxX - minX) / 400 || 1;
      let y = Infinity, x = px;
      for (const q of pts) if (Math.abs(q.x - px) <= step && q.y < y) { y = q.y; x = q.x; }
      if (y === Infinity) return;
      const bb = line.getBBox();
      guide.setAttribute("x1", String(x)); guide.setAttribute("x2", String(x));
      guide.setAttribute("y1", String(bb.y)); guide.setAttribute("y2", String(bb.y + bb.height));
      dot.setAttribute("cx", String(x)); dot.setAttribute("cy", String(y));
      g.style.opacity = "1";
      const sp = new DOMPoint(x, y).matrixTransform(m);
      const label = labelNear(scope, sp.x, box(svg).bottom, true);
      show([label, val ? val(sp.y) : ""].filter(Boolean).join(" · "), sp.x, sp.y);
    });
    area.addEventListener("mouseleave", () => { g.style.opacity = "0"; hide(); });
  }

  // cards: a small lift on hover (an extra drop shadow, the card's own shadows stay as they are)
  for (const c of all("[data-fu=card]").concat(root.dataset.fu === "card" ? [root] : [])) {
    c.addEventListener("mouseenter", () => { ease(c, "transform .18s ease, filter .18s ease"); c.style.transform = "translateY(-2px)"; c.style.filter = "drop-shadow(0 8px 16px rgba(17,17,19,.08))"; });
    c.addEventListener("mouseleave", () => { c.style.transform = ""; c.style.filter = ""; });
  }

  // heatmap and calendar cells: an outline and the cell's own text
  for (const c of all("[data-fu=cell]")) {
    c.addEventListener("mouseenter", () => {
      ease(c, "outline-color .12s");
      c.style.outline = "2px solid rgba(17,17,19,.55)";
      c.style.outlineOffset = "1px";
      const r = box(c);
      // its own text, or the row and column labels of the grid it sits in
      let label = (c.textContent || "").trim();
      if (!label) {
        // walk outwards until a row label (left) and a column label (below) are in reach
        let row = "", col = "";
        for (let a: Element | null = c.parentElement; a && a !== root.parentElement && !(row && col); a = a.parentElement) {
          if (!row) row = labelNear(a, r.left, r.top + r.height / 2, false, true);
          if (!col) col = labelNear(a, r.left + r.width / 2, r.bottom, true, true);
        }
        label = [row, col].filter(Boolean).join(" · ");
      }
      show(label, r.left + r.width / 2, r.top);
    });
    c.addEventListener("mouseleave", () => { c.style.outline = ""; c.style.outlineOffset = ""; hide(); });
  }

  // fields: hover and focus states
  for (const f of all("[data-fu=field]")) {
    f.style.cursor = "text";
    f.addEventListener("mouseenter", () => { ease(f, "filter .15s, outline-color .15s"); f.style.filter = "brightness(0.985)"; });
    f.addEventListener("mouseleave", () => { f.style.filter = ""; });
    f.addEventListener("mousedown", (ev) => {
      ev.stopPropagation();
      for (const o of all("[data-fu=field]")) o.style.outline = "";
      f.style.outline = "3px solid rgba(17,17,19,.12)";
      f.style.outlineOffset = "0px";
    });
  }
  doc.addEventListener("mousedown", () => { for (const o of all("[data-fu=field]")) o.style.outline = ""; });

  // donut and pie charts drawn as one vector per arc: the hovered arc stays, the others fade
  const arcGroups = new Map<Element, HTMLElement[]>();
  for (const a of all("[data-fu=arc]")) { const p = a.parentElement!; if (!arcGroups.has(p)) arcGroups.set(p, []); arcGroups.get(p)!.push(a); }
  arcGroups.forEach((arcs) => {
    const scope = chartOf(arcs[0]);
    const hexOf = (c: string) => { const m = c.match(/\d+/g); return m && m.length >= 3 ? "#" + m.slice(0, 3).map((x) => (+x).toString(16).padStart(2, "0")).join("") : c.toLowerCase(); };
    const legend = (color: string) => {
      for (const el of all("*", scope)) {
        if (el.children.length || (el.textContent || "").trim()) continue;
        if (hexOf(getComputedStyle(el).backgroundColor) !== color.toLowerCase()) continue;
        // climb to the legend row: the first ancestor that holds more than the swatch's label
        let row: Element | null = el.parentElement;
        while (row && row.parentElement && texts(row).length < 2 && row !== scope) row = row.parentElement;
        const words = row ? texts(row).map((t) => (t.textContent || "").trim()) : [];
        if (words.length && words.length <= 5) return words.join(" · ");
        if (el.parentElement) return texts(el.parentElement).map((t) => (t.textContent || "").trim()).join(" · ");
      }
      return "";
    };
    // hit-test the whole stack under the pointer: labels or tracks drawn over the ring don't get in the way
    const fills = new Map(arcs.map((a) => { const sh = a.querySelector("path"); return [a, (sh && (sh.getAttribute("fill") || sh.getAttribute("stroke"))) || ""] as [HTMLElement, string]; }));
    let current: HTMLElement | null = null;
    scope.addEventListener("mousemove", (ev) => {
      const e = ev as MouseEvent;
      // the arc whose drawn shape (not just its box) is under the pointer
      const inside = (sh: SVGGeometryElement) => { const m = sh.getScreenCTM(); if (!m) return false; const q = new DOMPoint(e.clientX, e.clientY).matrixTransform(m.inverse()); return sh.isPointInFill(q) || sh.isPointInStroke(q); };
      const arc = arcs.find((a) => (Array.from(a.querySelectorAll("path, circle, ellipse")) as SVGGeometryElement[]).some(inside)) || null;
      if (!arc) { if (current) { undim(arcs); hide(); current = null; } return; }
      if (arc !== current) { dim(arcs, [arc]); current = arc; }
      show(legend(fills.get(arc) || ""), e.clientX, e.clientY);
    });
    scope.addEventListener("mouseleave", () => { undim(arcs); hide(); current = null; });
  });

  // donut and pie arcs in one drawing: the hovered arc stays, the others fade; the legend row with the same colour names it
  for (const svg of all("svg[data-fu=donut]") as unknown as SVGSVGElement[]) {
    const arcs = (Array.from(svg.querySelectorAll("path")) as SVGPathElement[]).filter((p) => { const f = p.getAttribute("fill"); return f && f !== "none" && !/^url/.test(f); });
    const scope = chartOf(svg);
    const hex = (c: string) => { const m = c.match(/\d+/g); return m && m.length >= 3 ? "#" + m.slice(0, 3).map((x) => (+x).toString(16).padStart(2, "0")).join("") : c.toLowerCase(); };
    const legend = (color: string) => {
      for (const el of all("*", scope)) {
        if (el.children.length || (el.textContent || "").trim()) continue;
        const bg = getComputedStyle(el).backgroundColor;
        if (!bg || hex(bg) !== color.toLowerCase()) continue;
        const row = el.parentElement;
        const words = row ? texts(row).map((t) => (t.textContent || "").trim()) : [];
        if (words.length) return words.join(" · ");
      }
      return "";
    };
    for (const a of arcs) {
      a.addEventListener("mouseenter", (ev) => {
        dim(arcs, [a]);
        const e = ev as MouseEvent;
        show(legend(a.getAttribute("fill") || ""), e.clientX, e.clientY);
      });
      a.addEventListener("mousemove", (ev) => { const e = ev as MouseEvent; tip.style.left = e.clientX + "px"; tip.style.top = e.clientY - 8 + "px"; });
      a.addEventListener("mouseleave", () => { undim(arcs); hide(); });
    }
  }

  // rows: a soft highlight under the pointer
  for (const r of all("[data-fu=row]")) {
    r.addEventListener("mouseenter", () => { ease(r, "filter .15s"); r.style.filter = "brightness(0.975)"; });
    r.addEventListener("mouseleave", () => { r.style.filter = ""; });
  }

  // buttons: hover and press feedback
  for (const b of all("[data-fu=btn],[data-fu=tab]")) {
    b.style.cursor = "pointer";
    b.addEventListener("mouseenter", () => { ease(b, "filter .15s, transform .1s"); if (!b.dataset.fuActive) b.style.filter = "brightness(0.96)"; });
    b.addEventListener("mouseleave", () => { b.style.filter = ""; b.style.transform = ""; });
    b.addEventListener("mousedown", () => { b.style.transform = "scale(0.98)"; });
    b.addEventListener("mouseup", () => { b.style.transform = ""; });
  }

  // tabs and segmented controls: clicking a tab moves the selected look onto it
  const VIS = ["background-color", "background-image", "box-shadow", "border-color", "color", "font-weight"];
  const look = (el: HTMLElement) => VIS.map((k) => el.style.getPropertyValue(k)).join("|");
  const tabGroups = new Map<Element, HTMLElement[]>();
  for (const t of all("[data-fu=tab]")) { const p = t.parentElement!; if (!tabGroups.has(p)) tabGroups.set(p, []); tabGroups.get(p)!.push(t); }
  tabGroups.forEach((tabs) => {
    if (tabs.length < 2) return;
    const counts = new Map<string, number>();
    for (const t of tabs) counts.set(look(t), (counts.get(look(t)) || 0) + 1);
    let active = tabs.find((t) => counts.get(look(t)) === 1 && counts.size > 1) || null;
    if (!active) return;
    active.dataset.fuActive = "1";
    // read both looks first, then write: swapping one property at a time would let shorthands undo each other
    const swapStyle = (a: HTMLElement, b: HTMLElement, props: string[]) => {
      const va = props.map((k) => a.style.getPropertyValue(k)), vb = props.map((k) => b.style.getPropertyValue(k));
      props.forEach((k, i) => { a.style.setProperty(k, vb[i]); b.style.setProperty(k, va[i]); });
    };
    const swap = (a: HTMLElement, b: HTMLElement) => {
      swapStyle(a, b, VIS);
      const ta = texts(a), tb = texts(b);
      for (let i = 0; i < Math.min(ta.length, tb.length); i++) swapStyle(ta[i], tb[i], ["color", "font-weight"]);
    };
    for (const t of tabs) t.addEventListener("click", () => {
      if (!active || t === active) return;
      t.style.filter = "";
      swap(active, t);
      delete active.dataset.fuActive;
      active = t;
      t.dataset.fuActive = "1";
    });
  });
}
