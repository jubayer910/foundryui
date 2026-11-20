"use client";
// Collection card, Emerald qualification tracker (vantage, Cards and panels) from Ingot UI (ingotui.com).
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
const Dots = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0\" /><path d=\"M11 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0\" /><path d=\"M18 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0\" /></g>");

export function CollectionCardEmeraldQualificationTracker() {
  const fuRef = useRef<any>(null);
  useEffect(() => fuInteract(fuRef.current), []);
  return (
    <div ref={fuRef} data-fu="card" style={{ width: "381.3px", height: "268px", borderRadius: "10px", background: "#232323", boxShadow: "inset 0 0 0 1px #2e2e2e, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", overflow: "hidden", display: "flex", flexDirection: "column", padding: "7px 7px 7px 7px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
      <div style={{ width: "369.3px", height: "132px", flexShrink: 0, borderRadius: "7px", background: "#191919", boxShadow: "inset 0px 2px 8px 0px rgba(0, 0, 0, 0.25)", overflow: "hidden", position: "relative" }}>
        <p style={{ position: "absolute", left: "14px", top: "12px", margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 400, color: "#5f5f5f", letterSpacing: "0.04em", textTransform: "uppercase" }}>Edwin & Wiliannys → Emerald</p>
        <div style={{ position: "absolute", left: "309.3px", top: "10px", width: "46px", height: "18px", borderRadius: "6px", background: "#1b2233", boxShadow: "inset 0 0 0 1px #24304a, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", display: "flex", flexDirection: "row", padding: "1px 7px 1px 7px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 500, color: "#7aa2f7", letterSpacing: "-0.01em", textTransform: "uppercase" }}>Eagle</p>
        </div>
        <div style={{ position: "absolute", left: "14px", top: "32px", width: "341.3px", height: "27px", display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ width: "341.3px", height: "5px", flexShrink: 0, position: "relative" }}>
            <div style={{ position: "absolute", left: "0px", top: "0px", width: "318.6px", height: "5px", borderRadius: "2.5px", background: "linear-gradient(90deg, #a994ff 0%, #7b5bff 100%)", boxShadow: "inset 0 0 0 1px rgba(96, 71, 199, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)", overflow: "hidden" }} />
            <svg style={{ position: "absolute", left: "322.6px", top: "0px", width: "18.3px", height: "5px", display: "block", lineHeight: 0 }} xmlns="http://www.w3.org/2000/svg" width="18.25" height="5" viewBox="0 0 18.25 5" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0 L-0.5 0 L-0.5 5 L0 5 L0.5 5 L0.5 0 L0 0 Z M3.65 0 L3.15 0 L3.15 5 L3.65 5 L4.15 5 L4.15 0 L3.65 0 Z M7.3 0 L6.8 0 L6.8 5 L7.3 5 L7.8 5 L7.8 0 L7.3 0 Z M10.95 0 L10.45 0 L10.45 5 L10.95 5 L11.45 5 L11.45 0 L10.95 0 Z M14.6 0 L14.1 0 L14.1 5 L14.6 5 L15.1 5 L15.1 0 L14.6 0 Z M18.25 0 L17.75 0 L17.75 5 L18.25 5 L18.75 5 L18.75 0 L18.25 0 Z" fill="#3a3a3a"/></svg>
          </div>
          <div style={{ width: "341.3px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#ededed" }}>Active subs</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#7c7c7c" }}>280 / 300</p>
          </div>
        </div>
        <div style={{ position: "absolute", left: "14px", top: "66px", width: "341.3px", height: "27px", display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ width: "341.3px", height: "5px", flexShrink: 0, position: "relative" }}>
            <div style={{ position: "absolute", left: "0px", top: "0px", width: "341.3px", height: "5px", borderRadius: "2.5px", background: "linear-gradient(90deg, #82ceac 0%, #3fb37f 100%)", boxShadow: "inset 0 0 0 1px rgba(49, 140, 99, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)", overflow: "hidden" }} />
            <svg style={{ position: "absolute", left: "345.3px", top: "0px", width: "4.5px", height: "5px", display: "block", lineHeight: 0 }} xmlns="http://www.w3.org/2000/svg" width="4.5" height="5" viewBox="0 0 4.5 5" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M4.5 0 L4 0 L4 5 L4.5 5 L5 5 L5 0 L4.5 0 Z M0 0 L-0.5 0 L-0.5 5 L0 5 L0.5 5 L0.5 0 L0 0 Z" fill="#3a3a3a"/></svg>
          </div>
          <div style={{ width: "341.3px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#ededed" }}>MG1 · 4 weeks</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#7c7c7c" }}>158 / 150 ✓</p>
          </div>
        </div>
        <div style={{ position: "absolute", left: "14px", top: "100px", width: "341.3px", height: "27px", display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ width: "341.3px", height: "5px", flexShrink: 0, position: "relative" }}>
            <div style={{ position: "absolute", left: "0px", top: "0px", width: "136.5px", height: "5px", borderRadius: "2.5px", background: "linear-gradient(90deg, #edce84 0%, #e3b341 100%)", boxShadow: "inset 0 0 0 1px rgba(177, 140, 51, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)", overflow: "hidden" }} />
            <svg style={{ position: "absolute", left: "140.5px", top: "0px", width: "200.3px", height: "5px", display: "block", lineHeight: 0 }} xmlns="http://www.w3.org/2000/svg" width="200.28" height="5" viewBox="0 0 200.28 5" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0 L-0.5 0 L-0.5 5 L0 5 L0.5 5 L0.5 0 L0 0 Z M3.23 0 L2.73 0 L2.73 5 L3.23 5 L3.73 5 L3.73 0 L3.23 0 Z M6.46 0 L5.96 0 L5.96 5 L6.46 5 L6.96 5 L6.96 0 L6.46 0 Z M9.69 0 L9.19 0 L9.19 5 L9.69 5 L10.19 5 L10.19 0 L9.69 0 Z M12.92 0 L12.42 0 L12.42 5 L12.92 5 L13.42 5 L13.42 0 L12.92 0 Z M16.15 0 L15.65 0 L15.65 5 L16.15 5 L16.65 5 L16.65 0 L16.15 0 Z M19.38 0 L18.88 0 L18.88 5 L19.38 5 L19.88 5 L19.88 0 L19.38 0 Z M22.61 0 L22.11 0 L22.11 5 L22.61 5 L23.11 5 L23.11 0 L22.61 0 Z M25.84 0 L25.34 0 L25.34 5 L25.84 5 L26.34 5 L26.34 0 L25.84 0 Z M29.07 0 L28.57 0 L28.57 5 L29.07 5 L29.57 5 L29.57 0 L29.07 0 Z M32.3 0 L31.8 0 L31.8 5 L32.3 5 L32.8 5 L32.8 0 L32.3 0 Z M35.53 0 L35.03 0 L35.03 5 L35.53 5 L36.03 5 L36.03 0 L35.53 0 Z M38.76 0 L38.26 0 L38.26 5 L38.76 5 L39.26 5 L39.26 0 L38.76 0 Z M41.99 0 L41.49 0 L41.49 5 L41.99 5 L42.49 5 L42.49 0 L41.99 0 Z M45.22 0 L44.72 0 L44.72 5 L45.22 5 L45.72 5 L45.72 0 L45.22 0 Z M48.45 0 L47.95 0 L47.95 5 L48.45 5 L48.95 5 L48.95 0 L48.45 0 Z M51.69 0 L51.19 0 L51.19 5 L51.69 5 L52.19 5 L52.19 0 L51.69 0 Z M54.92 0 L54.42 0 L54.42 5 L54.92 5 L55.42 5 L55.42 0 L54.92 0 Z M58.15 0 L57.65 0 L57.65 5 L58.15 5 L58.65 5 L58.65 0 L58.15 0 Z M61.38 0 L60.88 0 L60.88 5 L61.38 5 L61.88 5 L61.88 0 L61.38 0 Z M64.61 0 L64.11 0 L64.11 5 L64.61 5 L65.11 5 L65.11 0 L64.61 0 Z M67.84 0 L67.34 0 L67.34 5 L67.84 5 L68.34 5 L68.34 0 L67.84 0 Z M71.07 0 L70.57 0 L70.57 5 L71.07 5 L71.57 5 L71.57 0 L71.07 0 Z M74.3 0 L73.8 0 L73.8 5 L74.3 5 L74.8 5 L74.8 0 L74.3 0 Z M77.53 0 L77.03 0 L77.03 5 L77.53 5 L78.03 5 L78.03 0 L77.53 0 Z M80.76 0 L80.26 0 L80.26 5 L80.76 5 L81.26 5 L81.26 0 L80.76 0 Z M83.99 0 L83.49 0 L83.49 5 L83.99 5 L84.49 5 L84.49 0 L83.99 0 Z M87.22 0 L86.72 0 L86.72 5 L87.22 5 L87.72 5 L87.72 0 L87.22 0 Z M90.45 0 L89.95 0 L89.95 5 L90.45 5 L90.95 5 L90.95 0 L90.45 0 Z M93.68 0 L93.18 0 L93.18 5 L93.68 5 L94.18 5 L94.18 0 L93.68 0 Z M96.91 0 L96.41 0 L96.41 5 L96.91 5 L97.41 5 L97.41 0 L96.91 0 Z M100.14 0 L99.64 0 L99.64 5 L100.14 5 L100.64 5 L100.64 0 L100.14 0 Z M103.37 0 L102.87 0 L102.87 5 L103.37 5 L103.87 5 L103.87 0 L103.37 0 Z M106.6 0 L106.1 0 L106.1 5 L106.6 5 L107.1 5 L107.1 0 L106.6 0 Z M109.83 0 L109.33 0 L109.33 5 L109.83 5 L110.33 5 L110.33 0 L109.83 0 Z M113.06 0 L112.56 0 L112.56 5 L113.06 5 L113.56 5 L113.56 0 L113.06 0 Z M116.29 0 L115.79 0 L115.79 5 L116.29 5 L116.79 5 L116.79 0 L116.29 0 Z M119.52 0 L119.02 0 L119.02 5 L119.52 5 L120.02 5 L120.02 0 L119.52 0 Z M122.75 0 L122.25 0 L122.25 5 L122.75 5 L123.25 5 L123.25 0 L122.75 0 Z M125.98 0 L125.48 0 L125.48 5 L125.98 5 L126.48 5 L126.48 0 L125.98 0 Z M129.21 0 L128.71 0 L128.71 5 L129.21 5 L129.71 5 L129.71 0 L129.21 0 Z M132.44 0 L131.94 0 L131.94 5 L132.44 5 L132.94 5 L132.94 0 L132.44 0 Z M135.67 0 L135.17 0 L135.17 5 L135.67 5 L136.17 5 L136.17 0 L135.67 0 Z M138.9 0 L138.4 0 L138.4 5 L138.9 5 L139.4 5 L139.4 0 L138.9 0 Z M142.13 0 L141.63 0 L141.63 5 L142.13 5 L142.63 5 L142.63 0 L142.13 0 Z M145.36 0 L144.86 0 L144.86 5 L145.36 5 L145.86 5 L145.86 0 L145.36 0 Z M148.59 0 L148.09 0 L148.09 5 L148.59 5 L149.09 5 L149.09 0 L148.59 0 Z M151.83 0 L151.33 0 L151.33 5 L151.83 5 L152.33 5 L152.33 0 L151.83 0 Z M155.06 0 L154.56 0 L154.56 5 L155.06 5 L155.56 5 L155.56 0 L155.06 0 Z M158.29 0 L157.79 0 L157.79 5 L158.29 5 L158.79 5 L158.79 0 L158.29 0 Z M161.52 0 L161.02 0 L161.02 5 L161.52 5 L162.02 5 L162.02 0 L161.52 0 Z M164.75 0 L164.25 0 L164.25 5 L164.75 5 L165.25 5 L165.25 0 L164.75 0 Z M167.98 0 L167.48 0 L167.48 5 L167.98 5 L168.48 5 L168.48 0 L167.98 0 Z M171.21 0 L170.71 0 L170.71 5 L171.21 5 L171.71 5 L171.71 0 L171.21 0 Z M174.44 0 L173.94 0 L173.94 5 L174.44 5 L174.94 5 L174.94 0 L174.44 0 Z M177.67 0 L177.17 0 L177.17 5 L177.67 5 L178.17 5 L178.17 0 L177.67 0 Z M180.9 0 L180.4 0 L180.4 5 L180.9 5 L181.4 5 L181.4 0 L180.9 0 Z M184.13 0 L183.63 0 L183.63 5 L184.13 5 L184.63 5 L184.63 0 L184.13 0 Z M187.36 0 L186.86 0 L186.86 5 L187.36 5 L187.86 5 L187.86 0 L187.36 0 Z M190.59 0 L190.09 0 L190.09 5 L190.59 5 L191.09 5 L191.09 0 L190.59 0 Z M193.82 0 L193.32 0 L193.32 5 L193.82 5 L194.32 5 L194.32 0 L193.82 0 Z M197.05 0 L196.55 0 L196.55 5 L197.05 5 L197.55 5 L197.55 0 L197.05 0 Z M200.28 0 L199.78 0 L199.78 5 L200.28 5 L200.78 5 L200.78 0 L200.28 0 Z" fill="#3a3a3a"/></svg>
          </div>
          <div style={{ width: "341.3px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#ededed" }}>People</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#7c7c7c" }}>16 / 40</p>
          </div>
        </div>
      </div>
      <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", padding: "12px 8px 0px 8px", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ height: "18px", flexShrink: 0, borderRadius: "6px", background: "#1b2233", boxShadow: "inset 0 0 0 1px #24304a, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", display: "flex", flexDirection: "row", padding: "1px 7px 1px 7px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 500, color: "#7aa2f7", letterSpacing: "-0.01em", textTransform: "uppercase" }}>Report</p>
          </div>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8a8a8a" }}>4 legs</p>
          <div style={{ flex: "1 1 0", minWidth: 0, height: "1px", flexShrink: 0 }} />
        </div>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "21px", fontFamily: "'Geist'", fontSize: "16px", fontWeight: 500, color: "#ededed", letterSpacing: "-0.01em" }}>Emerald qualification tracker</p>
        <p style={{ width: "353.3px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8a8a8a" }}>Legs within reach of Emerald: subs, people, MG1 and Eagle legs</p>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "8px 0px 0px 0px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "-3px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "24px", height: "24px", flexShrink: 0, borderRadius: "12px", background: "linear-gradient(rgba(123, 91, 255, 0.18), rgba(123, 91, 255, 0.18)), linear-gradient(#232323, #232323)", boxShadow: "0 0 0 2px #232323", display: "flex", flexDirection: "row", padding: "2px 2px 2px 2px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 500, color: "#9c84ff" }}>LJ</p>
            </div>
            <div style={{ width: "24px", height: "24px", flexShrink: 0, borderRadius: "12px", background: "linear-gradient(rgba(122, 162, 247, 0.18), rgba(122, 162, 247, 0.18)), linear-gradient(#232323, #232323)", boxShadow: "0 0 0 2px #232323", display: "flex", flexDirection: "row", padding: "2px 2px 2px 2px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 500, color: "#9bb9f9" }}>EW</p>
            </div>
          </div>
          <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8a8a8a" }}>Updated yesterday</p>
          <Dots size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#8a8a8a", display: "block" }} />
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
