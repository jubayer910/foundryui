// Design Team · Figma drawer (spendix, Drawers) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Ingot Icons.
import type { SVGProps } from "react";

// Ingot Icons used here, inlined so this file needs no icon package.
function icon(body: string) {
  return function Icon({ size = 24, strokeWidth = 1.5, ...p }: { size?: number; strokeWidth?: number } & SVGProps<SVGSVGElement>) {
    const html = strokeWidth == 1.5 ? body : body.replace(/stroke-width="([\d.]+)"/g, (_, w) => `stroke-width="${(Number(w) * Number(strokeWidth)) / 1.5}"`);
    return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden {...p} dangerouslySetInnerHTML={{ __html: html }} />;
  };
}
const BuildingStore = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 21l18 0\" /><path d=\"M3 7v1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1h-18l2 -4h14l2 4\" /><path d=\"M5 21l0 -10.15\" /><path d=\"M19 21l0 -10.15\" /><path d=\"M9 21v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4\" /></g>");
const Check = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M5 12l5 5l10 -10\" /></g>");
const Copy = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M7 9.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667l0 -8.666\" /><path d=\"M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1\" /></g>");
const Eye = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0\" /><path d=\"M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6\" /></g>");
const Loader = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 6l0 -3\" /><path d=\"M16.25 7.75l2.15 -2.15\" /><path d=\"M18 12l3 0\" /><path d=\"M16.25 16.25l2.15 2.15\" /><path d=\"M12 18l0 3\" /><path d=\"M7.75 16.25l-2.15 2.15\" /><path d=\"M6 12l-3 0\" /><path d=\"M7.75 7.75l-2.15 -2.15\" /></g>");
const Lock = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6\" /><path d=\"M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0\" /><path d=\"M8 11v-4a4 4 0 1 1 8 0v4\" /></g>");
const ReceiptDollar = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16l-3 -2l-2 2l-2 -2l-2 2l-2 -2l-3 2\" /><path d=\"M14.8 8a2 2 0 0 0 -1.8 -1h-2a2 2 0 1 0 0 4h2a2 2 0 1 1 0 4h-2a2 2 0 0 1 -1.8 -1\" /><path d=\"M12 6v10\" /></g>");
const Wifi = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 18l.01 0\" /><path d=\"M9.172 15.172a4 4 0 0 1 5.656 0\" /><path d=\"M6.343 12.343a8 8 0 0 1 11.314 0\" /><path d=\"M3.515 9.515c4.686 -4.687 12.284 -4.687 17 0\" /></g>");
const World = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0\" /><path d=\"M3.6 9h16.8\" /><path d=\"M3.6 15h16.8\" /><path d=\"M11.5 3a17 17 0 0 0 0 18\" /><path d=\"M12.5 3a17 17 0 0 1 0 18\" /></g>");
const X = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M18 6l-12 12\" /><path d=\"M6 6l12 12\" /></g>");

export function DesignTeamFigmaDrawer() {
  return (
    <div style={{ width: "452px", height: "1047px", borderRadius: "16px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e2e8f0, 0px 20px 44px -12px rgba(13, 13, 18, 0.14), 0px 1px 2px 0px rgba(13, 13, 18, 0.05)", overflow: "hidden", display: "flex", flexDirection: "column", padding: "1px 1px 1px 1px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
      <div style={{ alignSelf: "stretch", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #e2e8f0", display: "flex", flexDirection: "row", padding: "18px 20px 19px 20px", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ width: "40px", height: "40px", flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e7e7e7", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "24px", height: "24px", flexShrink: 0, position: "relative" }}>
            <div style={{ position: "absolute", left: "0px", top: "0px", width: "24px", height: "24px", background: "url('https://ingotui.com/library-img/0cf31a99ea799aa140a3352eb940dd3f193295c3.png') center / cover no-repeat" }} />
          </div>
        </div>
        <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "154px", lineHeight: "21px", fontFamily: "'Geist'", fontSize: "16px", fontWeight: 500, color: "#0f172a" }}>Design Team · Figma</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "144px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 400, color: "#64748b" }}>Virtual card · Maya Patel</p>
        </div>
        <div style={{ height: "26px", flexShrink: 0, borderRadius: "16px", background: "#e7fff0", display: "flex", flexDirection: "row", padding: "0px 12px 0px 8px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <Loader size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#16a34a", display: "block" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "36px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#16a34a" }}>Active</p>
        </div>
        <div style={{ width: "30px", height: "30px", flexShrink: 0, borderRadius: "8px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #dfe1e6", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <X size={14} strokeWidth={1.51} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#7d818c", display: "block" }} />
        </div>
      </div>
      <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", padding: "20px 20px 20px 20px", gap: "24px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ alignSelf: "stretch", height: "196px", flexShrink: 0, borderRadius: "12px", background: "linear-gradient(90deg, #f5f7ff 0%, #e3e8f5 100%), linear-gradient(#f8f8f8, #f8f8f8)", boxShadow: "inset 0 0 0 0.8px #f3f3f3", overflow: "hidden", position: "relative" }}>
          <p style={{ position: "absolute", left: "15.7px", top: "15.7px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "76px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12.5px", fontWeight: 500, color: "#040404" }}>Design Team</p>
          <Wifi size={18} strokeWidth={1.51} style={{ position: "absolute", left: "394px", top: "15px", width: "18px", height: "18px", transform: "rotate(90deg)", transformOrigin: "top left", color: "#040404", display: "block", flexShrink: 0 }} />
          <p style={{ position: "absolute", left: "12.5px", top: "146px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "36px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 600, color: "#040404" }}>Figma</p>
          <p style={{ position: "absolute", left: "366.5px", top: "148px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "29px", lineHeight: "12px", fontFamily: "'Geist'", fontSize: "9.4px", fontWeight: 500, color: "#040404" }}>06/28</p>
          <p style={{ position: "absolute", left: "12.5px", top: "166px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "123px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12.5px", fontWeight: 600, color: "#040404", letterSpacing: "0.08em" }}>••••  ••••  ••••  4242</p>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, borderRadius: "10px", boxShadow: "inset 0 0 0 1px #e2e8f0", display: "flex", flexDirection: "row", padding: "11px 13px 11px 13px", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "72px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>Card number</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "181px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#0f172a" }}>••••  ••••  ••••  4242   ·   CVC •••</p>
          </div>
          <div style={{ width: "30px", height: "30px", flexShrink: 0, borderRadius: "9.6px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #d6d6d6", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <Copy size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#686765", display: "block" }} />
          </div>
          <div style={{ height: "32px", flexShrink: 0, borderRadius: "8px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #dfe1e6", display: "flex", flexDirection: "row", padding: "1px 11px 1px 11px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <Eye size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#0f172a", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "37px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#0f172a" }}>Show</p>
          </div>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "10px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "90px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#a6a6a6", letterSpacing: "0.02em", textTransform: "uppercase" }}>Monthly limit</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "124px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>Resets 01/05 · 12 days</p>
          </div>
          <div style={{ width: "412px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "412px", height: "10px", flexShrink: 0, position: "relative" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "92.29px", height: "10px", borderRadius: "3px", background: "linear-gradient(90deg, #719af2 0%, #2563eb 100%)", boxShadow: "inset 0 0 0 1px rgba(29, 77, 183, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.18), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
              <svg style={{ position: "absolute", left: "96.29px", top: "0px", width: "315.21px", height: "10px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="315.21" height="10" viewBox="0 0 315.21 10" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0 L-0.5 0 L-0.5 10 L0 10 L0.5 10 L0.5 0 L0 0 Z M3.22 0 L2.72 0 L2.72 10 L3.22 10 L3.72 10 L3.72 0 L3.22 0 Z M6.43 0 L5.93 0 L5.93 10 L6.43 10 L6.93 10 L6.93 0 L6.43 0 Z M9.65 0 L9.15 0 L9.15 10 L9.65 10 L10.15 10 L10.15 0 L9.65 0 Z M12.87 0 L12.37 0 L12.37 10 L12.87 10 L13.37 10 L13.37 0 L12.87 0 Z M16.08 0 L15.58 0 L15.58 10 L16.08 10 L16.58 10 L16.58 0 L16.08 0 Z M19.3 0 L18.8 0 L18.8 10 L19.3 10 L19.8 10 L19.8 0 L19.3 0 Z M22.52 0 L22.02 0 L22.02 10 L22.52 10 L23.02 10 L23.02 0 L22.52 0 Z M25.73 0 L25.23 0 L25.23 10 L25.73 10 L26.23 10 L26.23 0 L25.73 0 Z M28.95 0 L28.45 0 L28.45 10 L28.95 10 L29.45 10 L29.45 0 L28.95 0 Z M32.16 0 L31.66 0 L31.66 10 L32.16 10 L32.66 10 L32.66 0 L32.16 0 Z M35.38 0 L34.88 0 L34.88 10 L35.38 10 L35.88 10 L35.88 0 L35.38 0 Z M38.6 0 L38.1 0 L38.1 10 L38.6 10 L39.1 10 L39.1 0 L38.6 0 Z M41.81 0 L41.31 0 L41.31 10 L41.81 10 L42.31 10 L42.31 0 L41.81 0 Z M45.03 0 L44.53 0 L44.53 10 L45.03 10 L45.53 10 L45.53 0 L45.03 0 Z M48.25 0 L47.75 0 L47.75 10 L48.25 10 L48.75 10 L48.75 0 L48.25 0 Z M51.46 0 L50.96 0 L50.96 10 L51.46 10 L51.96 10 L51.96 0 L51.46 0 Z M54.68 0 L54.18 0 L54.18 10 L54.68 10 L55.18 10 L55.18 0 L54.68 0 Z M57.9 0 L57.4 0 L57.4 10 L57.9 10 L58.4 10 L58.4 0 L57.9 0 Z M61.11 0 L60.61 0 L60.61 10 L61.11 10 L61.61 10 L61.61 0 L61.11 0 Z M64.33 0 L63.83 0 L63.83 10 L64.33 10 L64.83 10 L64.83 0 L64.33 0 Z M67.55 0 L67.05 0 L67.05 10 L67.55 10 L68.05 10 L68.05 0 L67.55 0 Z M70.76 0 L70.26 0 L70.26 10 L70.76 10 L71.26 10 L71.26 0 L70.76 0 Z M73.98 0 L73.48 0 L73.48 10 L73.98 10 L74.48 10 L74.48 0 L73.98 0 Z M77.19 0 L76.69 0 L76.69 10 L77.19 10 L77.69 10 L77.69 0 L77.19 0 Z M80.41 0 L79.91 0 L79.91 10 L80.41 10 L80.91 10 L80.91 0 L80.41 0 Z M83.63 0 L83.13 0 L83.13 10 L83.63 10 L84.13 10 L84.13 0 L83.63 0 Z M86.84 0 L86.34 0 L86.34 10 L86.84 10 L87.34 10 L87.34 0 L86.84 0 Z M90.06 0 L89.56 0 L89.56 10 L90.06 10 L90.56 10 L90.56 0 L90.06 0 Z M93.28 0 L92.78 0 L92.78 10 L93.28 10 L93.78 10 L93.78 0 L93.28 0 Z M96.49 0 L95.99 0 L95.99 10 L96.49 10 L96.99 10 L96.99 0 L96.49 0 Z M99.71 0 L99.21 0 L99.21 10 L99.71 10 L100.21 10 L100.21 0 L99.71 0 Z M102.93 0 L102.43 0 L102.43 10 L102.93 10 L103.43 10 L103.43 0 L102.93 0 Z M106.14 0 L105.64 0 L105.64 10 L106.14 10 L106.64 10 L106.64 0 L106.14 0 Z M109.36 0 L108.86 0 L108.86 10 L109.36 10 L109.86 10 L109.86 0 L109.36 0 Z M112.58 0 L112.08 0 L112.08 10 L112.58 10 L113.08 10 L113.08 0 L112.58 0 Z M115.79 0 L115.29 0 L115.29 10 L115.79 10 L116.29 10 L116.29 0 L115.79 0 Z M119.01 0 L118.51 0 L118.51 10 L119.01 10 L119.51 10 L119.51 0 L119.01 0 Z M122.23 0 L121.73 0 L121.73 10 L122.23 10 L122.73 10 L122.73 0 L122.23 0 Z M125.44 0 L124.94 0 L124.94 10 L125.44 10 L125.94 10 L125.94 0 L125.44 0 Z M128.66 0 L128.16 0 L128.16 10 L128.66 10 L129.16 10 L129.16 0 L128.66 0 Z M131.87 0 L131.37 0 L131.37 10 L131.87 10 L132.37 10 L132.37 0 L131.87 0 Z M135.09 0 L134.59 0 L134.59 10 L135.09 10 L135.59 10 L135.59 0 L135.09 0 Z M138.31 0 L137.81 0 L137.81 10 L138.31 10 L138.81 10 L138.81 0 L138.31 0 Z M141.52 0 L141.02 0 L141.02 10 L141.52 10 L142.02 10 L142.02 0 L141.52 0 Z M144.74 0 L144.24 0 L144.24 10 L144.74 10 L145.24 10 L145.24 0 L144.74 0 Z M147.96 0 L147.46 0 L147.46 10 L147.96 10 L148.46 10 L148.46 0 L147.96 0 Z M151.17 0 L150.67 0 L150.67 10 L151.17 10 L151.67 10 L151.67 0 L151.17 0 Z M154.39 0 L153.89 0 L153.89 10 L154.39 10 L154.89 10 L154.89 0 L154.39 0 Z M157.61 0 L157.11 0 L157.11 10 L157.61 10 L158.11 10 L158.11 0 L157.61 0 Z M160.82 0 L160.32 0 L160.32 10 L160.82 10 L161.32 10 L161.32 0 L160.82 0 Z M164.04 0 L163.54 0 L163.54 10 L164.04 10 L164.54 10 L164.54 0 L164.04 0 Z M167.26 0 L166.76 0 L166.76 10 L167.26 10 L167.76 10 L167.76 0 L167.26 0 Z M170.47 0 L169.97 0 L169.97 10 L170.47 10 L170.97 10 L170.97 0 L170.47 0 Z M173.69 0 L173.19 0 L173.19 10 L173.69 10 L174.19 10 L174.19 0 L173.69 0 Z M176.9 0 L176.4 0 L176.4 10 L176.9 10 L177.4 10 L177.4 0 L176.9 0 Z M180.12 0 L179.62 0 L179.62 10 L180.12 10 L180.62 10 L180.62 0 L180.12 0 Z M183.34 0 L182.84 0 L182.84 10 L183.34 10 L183.84 10 L183.84 0 L183.34 0 Z M186.55 0 L186.05 0 L186.05 10 L186.55 10 L187.05 10 L187.05 0 L186.55 0 Z M189.77 0 L189.27 0 L189.27 10 L189.77 10 L190.27 10 L190.27 0 L189.77 0 Z M192.99 0 L192.49 0 L192.49 10 L192.99 10 L193.49 10 L193.49 0 L192.99 0 Z M196.2 0 L195.7 0 L195.7 10 L196.2 10 L196.7 10 L196.7 0 L196.2 0 Z M199.42 0 L198.92 0 L198.92 10 L199.42 10 L199.92 10 L199.92 0 L199.42 0 Z M202.64 0 L202.14 0 L202.14 10 L202.64 10 L203.14 10 L203.14 0 L202.64 0 Z M205.85 0 L205.35 0 L205.35 10 L205.85 10 L206.35 10 L206.35 0 L205.85 0 Z M209.07 0 L208.57 0 L208.57 10 L209.07 10 L209.57 10 L209.57 0 L209.07 0 Z M212.29 0 L211.79 0 L211.79 10 L212.29 10 L212.79 10 L212.79 0 L212.29 0 Z M215.5 0 L215 0 L215 10 L215.5 10 L216 10 L216 0 L215.5 0 Z M218.72 0 L218.22 0 L218.22 10 L218.72 10 L219.22 10 L219.22 0 L218.72 0 Z M221.93 0 L221.43 0 L221.43 10 L221.93 10 L222.43 10 L222.43 0 L221.93 0 Z M225.15 0 L224.65 0 L224.65 10 L225.15 10 L225.65 10 L225.65 0 L225.15 0 Z M228.37 0 L227.87 0 L227.87 10 L228.37 10 L228.87 10 L228.87 0 L228.37 0 Z M231.58 0 L231.08 0 L231.08 10 L231.58 10 L232.08 10 L232.08 0 L231.58 0 Z M234.8 0 L234.3 0 L234.3 10 L234.8 10 L235.3 10 L235.3 0 L234.8 0 Z M238.02 0 L237.52 0 L237.52 10 L238.02 10 L238.52 10 L238.52 0 L238.02 0 Z M241.23 0 L240.73 0 L240.73 10 L241.23 10 L241.73 10 L241.73 0 L241.23 0 Z M244.45 0 L243.95 0 L243.95 10 L244.45 10 L244.95 10 L244.95 0 L244.45 0 Z M247.67 0 L247.17 0 L247.17 10 L247.67 10 L248.17 10 L248.17 0 L247.67 0 Z M250.88 0 L250.38 0 L250.38 10 L250.88 10 L251.38 10 L251.38 0 L250.88 0 Z M254.1 0 L253.6 0 L253.6 10 L254.1 10 L254.6 10 L254.6 0 L254.1 0 Z M257.32 0 L256.82 0 L256.82 10 L257.32 10 L257.82 10 L257.82 0 L257.32 0 Z M260.53 0 L260.03 0 L260.03 10 L260.53 10 L261.03 10 L261.03 0 L260.53 0 Z M263.75 0 L263.25 0 L263.25 10 L263.75 10 L264.25 10 L264.25 0 L263.75 0 Z M266.97 0 L266.47 0 L266.47 10 L266.97 10 L267.47 10 L267.47 0 L266.97 0 Z M270.18 0 L269.68 0 L269.68 10 L270.18 10 L270.68 10 L270.68 0 L270.18 0 Z M273.4 0 L272.9 0 L272.9 10 L273.4 10 L273.9 10 L273.9 0 L273.4 0 Z M276.61 0 L276.11 0 L276.11 10 L276.61 10 L277.11 10 L277.11 0 L276.61 0 Z M279.83 0 L279.33 0 L279.33 10 L279.83 10 L280.33 10 L280.33 0 L279.83 0 Z M283.05 0 L282.55 0 L282.55 10 L283.05 10 L283.55 10 L283.55 0 L283.05 0 Z M286.26 0 L285.76 0 L285.76 10 L286.26 10 L286.76 10 L286.76 0 L286.26 0 Z M289.48 0 L288.98 0 L288.98 10 L289.48 10 L289.98 10 L289.98 0 L289.48 0 Z M292.7 0 L292.2 0 L292.2 10 L292.7 10 L293.2 10 L293.2 0 L292.7 0 Z M295.91 0 L295.41 0 L295.41 10 L295.91 10 L296.41 10 L296.41 0 L295.91 0 Z M299.13 0 L298.63 0 L298.63 10 L299.13 10 L299.63 10 L299.63 0 L299.13 0 Z M302.35 0 L301.85 0 L301.85 10 L302.35 10 L302.85 10 L302.85 0 L302.35 0 Z M305.56 0 L305.06 0 L305.06 10 L305.56 10 L306.06 10 L306.06 0 L305.56 0 Z M308.78 0 L308.28 0 L308.28 10 L308.78 10 L309.28 10 L309.28 0 L308.78 0 Z M312 0 L311.5 0 L311.5 10 L312 10 L312.5 10 L312.5 0 L312 0 Z M315.21 0 L314.71 0 L314.71 10 L315.21 10 L315.71 10 L315.71 0 L315.21 0 Z" fill="#d4d4d8"/></svg>
            </div>
            <div style={{ width: "412px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "88px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#1f1f22" }}>$1,120.00 spent</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "125px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#7d818c" }}>of $5,000 · $3,880 left</p>
            </div>
          </div>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <svg style={{ width: "5px", height: "5px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="5" height="5" viewBox="0 0 5 5" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M5 2.5 C5 3.88071 3.88071 5 2.5 5 C1.11929 5 0 3.88071 0 2.5 C0 1.11929 1.11929 0 2.5 0 C3.88071 0 5 1.11929 5 2.5 Z" fill="#ccd7d9"/></svg>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "101px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#7d818c" }}>Per transaction</p>
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "58px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#0f172a" }}>$1,000.00</p>
          </div>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <svg style={{ width: "5px", height: "5px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="5" height="5" viewBox="0 0 5 5" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M5 2.5 C5 3.88071 3.88071 5 2.5 5 C1.11929 5 0 3.88071 0 2.5 C0 1.11929 1.11929 0 2.5 0 C3.88071 0 5 1.11929 5 2.5 Z" fill="#ccd7d9"/></svg>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "73px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#7d818c" }}>Charged to</p>
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "146px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#0f172a" }}>Design · $1,400 of $4,000</p>
          </div>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "12px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "142px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#a6a6a6", letterSpacing: "0.02em", textTransform: "uppercase" }}>Recent transactions</p>
          <div style={{ alignSelf: "stretch", height: "38px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "8px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e7e7e7", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "19.2px", height: "19.2px", flexShrink: 0, position: "relative" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", width: "19.2px", height: "19.2px", background: "url('https://ingotui.com/library-img/0cf31a99ea799aa140a3352eb940dd3f193295c3.png') center / cover no-repeat" }} />
              </div>
            </div>
            <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "117px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#0f172a" }}>Organization plan</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "130px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>01/04/2026 · Approved</p>
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "58px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#0f172a" }}>$480.00</p>
          </div>
          <div style={{ alignSelf: "stretch", height: "38px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "8px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e7e7e7", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "19.2px", height: "19.2px", flexShrink: 0, position: "relative" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", width: "19.2px", height: "19.2px", background: "url('https://ingotui.com/library-img/0cf31a99ea799aa140a3352eb940dd3f193295c3.png') center / cover no-repeat" }} />
              </div>
            </div>
            <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "108px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#0f172a" }}>FigJam seats ×6</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "133px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>05/04/2026 · Approved</p>
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "58px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#0f172a" }}>$240.00</p>
          </div>
          <div style={{ alignSelf: "stretch", height: "38px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "8px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e7e7e7", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "19.2px", height: "19.2px", flexShrink: 0, position: "relative" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", width: "19.2px", height: "19.2px", background: "url('https://ingotui.com/library-img/0cf31a99ea799aa140a3352eb940dd3f193295c3.png') center / cover no-repeat" }} />
              </div>
            </div>
            <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "125px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#0f172a" }}>Dev Mode seats ×4</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "130px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>10/04/2026 · Approved</p>
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "58px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#0f172a" }}>$220.00</p>
          </div>
          <div style={{ alignSelf: "stretch", height: "38px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "8px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e7e7e7", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "19.2px", height: "19.2px", flexShrink: 0, position: "relative" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", width: "19.2px", height: "19.2px", background: "url('https://ingotui.com/library-img/0cf31a99ea799aa140a3352eb940dd3f193295c3.png') center / cover no-repeat" }} />
              </div>
            </div>
            <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "84px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#0f172a" }}>Seat true-up</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "119px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>14/04/2026 · Waiting</p>
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "54px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#0f172a" }}>$180.00</p>
          </div>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "14px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "65px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#a6a6a6", letterSpacing: "0.02em", textTransform: "uppercase" }}>Controls</p>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <BuildingStore size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#646871", display: "block" }} />
            <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#0f172a" }}>Lock to Figma only</p>
            <div style={{ width: "32px", height: "18px", flexShrink: 0, borderRadius: "9px", background: "#242424", position: "relative" }}>
              <svg style={{ position: "absolute", left: "16px", top: "2px", width: "14px", height: "14px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M14 7 C14 10.866 10.866 14 7 14 C3.13401 14 0 10.866 0 7 C0 3.13401 3.13401 0 7 0 C10.866 0 14 3.13401 14 7 Z" fill="#ffffff"/></svg>
            </div>
          </div>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <World size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#646871", display: "block" }} />
            <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#0f172a" }}>International payments</p>
            <div style={{ width: "32px", height: "18px", flexShrink: 0, borderRadius: "9px", background: "#e4e4e7", position: "relative" }}>
              <svg style={{ position: "absolute", left: "2px", top: "2px", width: "14px", height: "14px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M14 7 C14 10.866 10.866 14 7 14 C3.13401 14 0 10.866 0 7 C0 3.13401 3.13401 0 7 0 C10.866 0 14 3.13401 14 7 Z" fill="#ffffff"/></svg>
            </div>
          </div>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <Lock size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#646871", display: "block" }} />
            <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#0f172a" }}>Block ATM & cash</p>
            <div style={{ width: "32px", height: "18px", flexShrink: 0, borderRadius: "9px", background: "#242424", position: "relative" }}>
              <svg style={{ position: "absolute", left: "16px", top: "2px", width: "14px", height: "14px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M14 7 C14 10.866 10.866 14 7 14 C3.13401 14 0 10.866 0 7 C0 3.13401 3.13401 0 7 0 C10.866 0 14 3.13401 14 7 Z" fill="#ffffff"/></svg>
            </div>
          </div>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <ReceiptDollar size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#646871", display: "block" }} />
            <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#0f172a" }}>Receipt required over $75</p>
            <div style={{ width: "32px", height: "18px", flexShrink: 0, borderRadius: "9px", background: "#242424", position: "relative" }}>
              <svg style={{ position: "absolute", left: "16px", top: "2px", width: "14px", height: "14px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M14 7 C14 10.866 10.866 14 7 14 C3.13401 14 0 10.866 0 7 C0 3.13401 3.13401 0 7 0 C10.866 0 14 3.13401 14 7 Z" fill="#ffffff"/></svg>
            </div>
          </div>
        </div>
      </div>
      <div style={{ alignSelf: "stretch", flex: "1 1 0", minHeight: 0, flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }} />
      <div style={{ alignSelf: "stretch", flexShrink: 0, background: "#fafafa", boxShadow: "inset 0 1px 0 0 #e2e8f0", display: "flex", flexDirection: "row", padding: "15px 20px 14px 20px", gap: "8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ flex: "1 1 0", minWidth: 0, height: "32px", flexShrink: 0, borderRadius: "8px", display: "flex", flexDirection: "row", padding: "0px 10px 0px 10px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <Lock size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#e5484d", display: "block" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "77px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#e5484d" }}>Freeze card</p>
        </div>
        <div style={{ height: "32px", flexShrink: 0, borderRadius: "8px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #dfe1e6", display: "flex", flexDirection: "row", padding: "1px 11px 1px 11px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "58px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#0f172a" }}>Edit limit</p>
        </div>
        <div style={{ height: "32px", flexShrink: 0, borderRadius: "8px", background: "#242424", boxShadow: "0px 2px 6px 0px rgba(15, 15, 15, 0.18), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12)", display: "flex", flexDirection: "row", padding: "0px 10.5px 0px 10.5px", gap: "4px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <Check size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#ffffff", display: "block" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "35px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ffffff" }}>Done</p>
        </div>
      </div>
    </div>
  );
}
