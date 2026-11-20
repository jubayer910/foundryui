"use client";
// Transaction value trend (loopo, Charts) from Ingot UI (ingotui.com).
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
const Calendar = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12\" /><path d=\"M16 3v4\" /><path d=\"M8 3v4\" /><path d=\"M4 11h16\" /></g>");
const ChevronDown = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M6 9l6 6l6 -6\" /></g>");

export function TransactionValueTrend() {
  const fuRef = useRef<any>(null);
  useEffect(() => fuInteract(fuRef.current), []);
  return (
    <div ref={fuRef} style={{ width: "612.46px", height: "380.19px", borderRadius: "24.1px", background: "#fefefe", boxShadow: "inset 0 0 0 1.1px #eaeaea", overflow: "hidden", position: "relative" }}>
      <svg data-fu="plot" style={{ position: "absolute", left: "75.6px", top: "95.32px", width: "513.63px", height: "237.75px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="513.63" height="237.75" viewBox="0 0 513.63 237.75" fill="none" overflow="visible"><path transform="matrix(0 1 -1 0 0 0)" d="M0 -0.657382 L0 0 L237.753 0 L237.753 -0.657382 L237.753 -1.31476 L0 -1.31476 L0 -0.657382 Z" fill="#f6f6f6"/><path transform="matrix(0 1 -1 0 103.209 0)" d="M0 -0.657382 L0 0 L237.753 0 L237.753 -0.657382 L237.753 -1.31476 L0 -1.31476 L0 -0.657382 Z" fill="#f6f6f6"/><path transform="matrix(0.002 1 -1 0.002 212.553 0)" d="M0 0L237.75341796875 0" fill="none" stroke="#4d98fe" strokeWidth="1.0956358909606934" strokeDasharray="5.478179454803467 5.478179454803467" strokeLinecap="round"/><path transform="matrix(1 0 0 1 206.418 82.173)" d="M13.1476 6.57382 C13.1476 10.2044 10.2044 13.1476 6.57382 13.1476 C2.9432 13.1476 0 10.2044 0 6.57382 C0 2.9432 2.9432 0 6.57382 0 C10.2044 0 13.1476 2.9432 13.1476 6.57382 Z" fill="#4d98fe"/><path transform="matrix(1 0 0 1 206.418 82.173)" d="M13.1476 6.57382 L10.9564 6.57382 C10.9564 8.99423 8.99423 10.9564 6.57382 10.9564 L6.57382 13.1476 L6.57382 15.3389 C11.4146 15.3389 15.3389 11.4146 15.3389 6.57382 L13.1476 6.57382 Z M6.57382 13.1476 L6.57382 10.9564 C4.1534 10.9564 2.19127 8.99423 2.19127 6.57382 L0 6.57382 L-2.19127 6.57382 C-2.19127 11.4146 1.73299 15.3389 6.57382 15.3389 L6.57382 13.1476 Z M0 6.57382 L2.19127 6.57382 C2.19127 4.1534 4.1534 2.19127 6.57382 2.19127 L6.57382 0 L6.57382 -2.19127 C1.73299 -2.19127 -2.19127 1.73299 -2.19127 6.57382 L0 6.57382 Z M6.57382 0 L6.57382 2.19127 C8.99423 2.19127 10.9564 4.1534 10.9564 6.57382 L13.1476 6.57382 L15.3389 6.57382 C15.3389 1.73299 11.4146 -2.19127 6.57382 -2.19127 L6.57382 0 Z" fill="#ffffff"/><path transform="matrix(0 1 -1 0 322.774 0)" d="M0 -0.657382 L0 0 L237.753 0 L237.753 -0.657382 L237.753 -1.31476 L0 -1.31476 L0 -0.657382 Z" fill="#f6f6f6"/><path transform="matrix(0 1 -1 0 425.983 0)" d="M0 -0.657382 L0 0 L237.753 0 L237.753 -0.657382 L237.753 -1.31476 L0 -1.31476 L0 -0.657382 Z" fill="#f6f6f6"/><path transform="matrix(0 1 -1 0 513.634 0)" d="M0 -0.657382 L0 0 L237.753 0 L237.753 -0.657382 L237.753 -1.31476 L0 -1.31476 L0 -0.657382 Z" fill="#f6f6f6"/></svg>
      <div style={{ position: "absolute", left: "21.91px", top: "84.36px", width: "567.62px", height: "20px", display: "flex", flexDirection: "row", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 400, color: "#747474" }}>$140K</p>
        <svg style={{ width: "513.85px", height: "0px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="513.85" height="1" viewBox="0 0 513.85 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M-2.9217 0 C-2.9217 1.61361 -1.61361 2.9217 0 2.9217 C1.61361 2.9217 2.9217 1.61361 2.9217 0 C2.9217 -1.61361 1.61361 -2.9217 0 -2.9217 C-1.61361 -2.9217 -2.9217 -1.61361 -2.9217 0 Z M513.853 0.547818 L514.401 0.547818 L514.401 -0.547818 L513.853 -0.547818 L513.853 0 L513.853 0.547818 Z M0 0 L0 0.547818 L513.853 0.547818 L513.853 0 L513.853 -0.547818 L0 -0.547818 L0 0 Z" fill="#f5f5f5"/></svg>
      </div>
      <div style={{ position: "absolute", left: "21.91px", top: "143.53px", width: "567.62px", height: "20px", display: "flex", flexDirection: "row", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 400, color: "#747474" }}>$120K</p>
        <svg style={{ width: "513.85px", height: "0px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="513.85" height="1" viewBox="0 0 513.85 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M-2.9217 0 C-2.9217 1.61361 -1.61361 2.9217 0 2.9217 C1.61361 2.9217 2.9217 1.61361 2.9217 0 C2.9217 -1.61361 1.61361 -2.9217 0 -2.9217 C-1.61361 -2.9217 -2.9217 -1.61361 -2.9217 0 Z M513.853 0.547818 L514.401 0.547818 L514.401 -0.547818 L513.853 -0.547818 L513.853 0 L513.853 0.547818 Z M0 0 L0 0.547818 L513.853 0.547818 L513.853 0 L513.853 -0.547818 L0 -0.547818 L0 0 Z" fill="#f5f5f5"/></svg>
      </div>
      <div style={{ position: "absolute", left: "21.91px", top: "202.69px", width: "568.62px", height: "20px", display: "flex", flexDirection: "row", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 400, color: "#747474" }}>$100K</p>
        <svg style={{ width: "513.85px", height: "0px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="513.85" height="1" viewBox="0 0 513.85 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M-2.9217 0 C-2.9217 1.61361 -1.61361 2.9217 0 2.9217 C1.61361 2.9217 2.9217 1.61361 2.9217 0 C2.9217 -1.61361 1.61361 -2.9217 0 -2.9217 C-1.61361 -2.9217 -2.9217 -1.61361 -2.9217 0 Z M513.853 0.547818 L514.401 0.547818 L514.401 -0.547818 L513.853 -0.547818 L513.853 0 L513.853 0.547818 Z M0 0 L0 0.547818 L513.853 0.547818 L513.853 0 L513.853 -0.547818 L0 -0.547818 L0 0 Z" fill="#f5f5f5"/></svg>
      </div>
      <div style={{ position: "absolute", left: "21.91px", top: "261.86px", width: "568.19px", height: "20px", display: "flex", flexDirection: "row", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 400, color: "#747474" }}>$80K</p>
        <svg style={{ width: "520.43px", height: "0px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="520.43" height="1" viewBox="0 0 520.43 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M-2.9217 0 C-2.9217 1.61361 -1.61361 2.9217 0 2.9217 C1.61361 2.9217 2.9217 1.61361 2.9217 0 C2.9217 -1.61361 1.61361 -2.9217 0 -2.9217 C-1.61361 -2.9217 -2.9217 -1.61361 -2.9217 0 Z M520.427 0.547818 L520.975 0.547818 L520.975 -0.547818 L520.427 -0.547818 L520.427 0 L520.427 0.547818 Z M0 0 L0 0.547818 L520.427 0.547818 L520.427 0 L520.427 -0.547818 L0 -0.547818 L0 0 Z" fill="#f5f5f5"/></svg>
      </div>
      <div style={{ position: "absolute", left: "21.91px", top: "321.02px", width: "569.19px", height: "20px", display: "flex", flexDirection: "row", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 400, color: "#747474" }}>$60K</p>
        <svg style={{ width: "520.43px", height: "0px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="520.43" height="1" viewBox="0 0 520.43 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M-2.9217 0 C-2.9217 1.61361 -1.61361 2.9217 0 2.9217 C1.61361 2.9217 2.9217 1.61361 2.9217 0 C2.9217 -1.61361 1.61361 -2.9217 0 -2.9217 C-1.61361 -2.9217 -2.9217 -1.61361 -2.9217 0 Z M520.427 0.547818 L520.975 0.547818 L520.975 -0.547818 L520.427 -0.547818 L520.427 0 L520.427 0.547818 Z M0 0 L0 0.547818 L520.427 0.547818 L520.427 0 L520.427 -0.547818 L0 -0.547818 L0 0 Z" fill="#f5f5f5"/></svg>
      </div>
      <p style={{ position: "absolute", left: "63.55px", top: "338.55px", width: "27.39px", margin: 0, textAlign: "center", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 400, color: "#747474", lineHeight: "1.399999976158142" }}>Jan</p>
      <p style={{ position: "absolute", left: "164.13px", top: "338.55px", margin: 0, textAlign: "center", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 400, color: "#747474", lineHeight: "1.399999976158142" }}>Mar</p>
      <p style={{ position: "absolute", left: "273.47px", top: "338.55px", margin: 0, textAlign: "center", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 400, color: "#747474", lineHeight: "1.399999976158142" }}>May</p>
      <p style={{ position: "absolute", left: "390.48px", top: "338.55px", margin: 0, textAlign: "center", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 400, color: "#747474", lineHeight: "1.399999976158142" }}>Jul</p>
      <p style={{ position: "absolute", left: "488.87px", top: "338.55px", margin: 0, textAlign: "center", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 400, color: "#747474", lineHeight: "1.399999976158142" }}>Sep</p>
      <p style={{ position: "absolute", left: "567.54px", top: "338.55px", margin: 0, textAlign: "center", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 400, color: "#747474", lineHeight: "1.399999976158142" }}>Nov</p>
      <div style={{ position: "absolute", left: "21.91px", top: "21.91px", width: "568.64px", height: "52.3px", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "13.15px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "4.38px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ alignSelf: "stretch", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "17.53px", fontWeight: 500, color: "#000000", lineHeight: "1.5" }}>Transaction Value Trend</p>
          </div>
          <div style={{ width: "175.3px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "4.38px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <svg style={{ width: "13.15px", height: "13.15px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="13.15" height="13.15" viewBox="0 0 13.15 13.15" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M13.1476 6.57382 C13.1476 10.2044 10.2044 13.1476 6.57382 13.1476 C2.9432 13.1476 0 10.2044 0 6.57382 C0 2.9432 2.9432 0 6.57382 0 C10.2044 0 13.1476 2.9432 13.1476 6.57382 Z" fill="#4d98fe"/><path transform="matrix(1 0 0 1 0 0)" d="M13.1476 6.57382 L10.9564 6.57382 C10.9564 8.99423 8.99423 10.9564 6.57382 10.9564 L6.57382 13.1476 L6.57382 15.3389 C11.4146 15.3389 15.3389 11.4146 15.3389 6.57382 L13.1476 6.57382 Z M6.57382 13.1476 L6.57382 10.9564 C4.1534 10.9564 2.19127 8.99423 2.19127 6.57382 L0 6.57382 L-2.19127 6.57382 C-2.19127 11.4146 1.73299 15.3389 6.57382 15.3389 L6.57382 13.1476 Z M0 6.57382 L2.19127 6.57382 C2.19127 4.1534 4.1534 2.19127 6.57382 2.19127 L6.57382 0 L6.57382 -2.19127 C1.73299 -2.19127 -2.19127 1.73299 -2.19127 6.57382 L0 6.57382 Z M6.57382 0 L6.57382 2.19127 C8.99423 2.19127 10.9564 4.1534 10.9564 6.57382 L13.1476 6.57382 L15.3389 6.57382 C15.3389 1.73299 11.4146 -2.19127 6.57382 -2.19127 L6.57382 0 Z" fill="#ffffff"/></svg>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#24322e", textBox: "trim-both cap alphabetic", height: "9px" }}>Processed volume (USD)</p>
          </div>
        </div>
        <div data-fu="btn" style={{ height: "35.06px", flexShrink: 0, borderRadius: "8.77px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8", display: "flex", flexDirection: "row", padding: "8.77px 8.77px 8.77px 8.77px", gap: "6.57px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <Calendar size={19.7} style={{ width: "19.72px", height: "19.72px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#6c6c6c" }}>2026</p>
          <ChevronDown size={15.3} style={{ width: "15.34px", height: "15.34px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
        </div>
      </div>
      <svg style={{ position: "absolute", left: "76.69px", top: "112.85px", width: "512.76px", height: "175.3px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="512.76" height="175.3" viewBox="0 0 512.76 175.3" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M-0.991714 136.338 C-1.24894 136.886 -1.01346 137.539 -0.465748 137.796 C0.08196 138.053 0.734488 137.818 0.991714 137.27 L0 136.804 L-0.991714 136.338 Z M151.45 108.618 L150.459 108.15 L150.445 108.18 L150.432 108.211 L151.45 108.618 Z M511.897 10.5393 C512.272 11.0144 512.961 11.0957 513.436 10.7209 C513.911 10.3462 513.993 9.65722 513.618 9.18214 L512.758 9.86073 L511.897 10.5393 Z M499.593 14.8463 L500.408 15.5777 L499.593 14.8463 Z M501.026 12.3458 L502.069 12.6799 L501.026 12.3458 Z M493.824 23.0146 L494.888 23.2767 L493.824 23.0146 Z M496.056 18.7904 L495.241 18.059 L496.056 18.7904 Z M489.424 40.8781 L488.36 40.616 L488.36 40.616 L489.424 40.8781 Z M472.484 55.1698 L471.394 55.0577 L471.394 55.0577 L472.484 55.1698 Z M470.257 76.8101 L471.347 76.9222 L470.257 76.8101 Z M444.195 77.3607 L445.277 77.5301 L444.195 77.3607 Z M420.56 106.383 L419.483 106.587 L420.56 106.383 Z M439.7 106.077 L438.617 105.907 L439.7 106.077 Z M413.694 96.2731 L414.151 97.2687 L413.694 96.2731 Z M419.181 99.1051 L418.104 99.3091 L419.181 99.1051 Z M408.878 95.0024 L409.767 94.362 L408.878 95.0024 Z M400.53 96.1837 L401.595 96.4408 L400.53 96.1837 Z M394.737 120.191 L393.672 119.934 L394.737 120.191 Z M369.914 123.091 L368.933 122.605 L369.914 123.091 Z M378.822 121.608 L379.593 120.83 L378.822 121.608 Z M359.475 121.761 L358.402 121.986 L359.475 121.761 Z M329.51 79.4746 L328.495 79.8866 L329.51 79.4746 Z M339.899 78.9378 L338.847 78.6326 L339.899 78.9378 Z M301.882 60.1415 L302.965 60.3074 L301.882 60.1415 Z M320.766 57.9264 L321.781 57.5144 L320.766 57.9264 Z M260.494 99.6313 L259.442 99.3224 L260.494 99.6313 Z M275.367 99.9697 L274.303 100.23 L275.367 99.9697 Z M245.526 98.8579 L244.449 99.0568 L245.526 98.8579 Z M224.495 57.9333 L223.408 57.8023 L224.495 57.9333 Z M211.19 58.783 L210.128 59.0513 L211.19 58.783 Z M201.616 50.7391 L200.898 49.9115 L201.616 50.7391 Z M209.809 53.313 L210.871 53.0447 L210.871 53.0447 L209.809 53.313 Z M199.373 73.1154 L200.336 73.6374 L199.373 73.1154 Z M191.788 72.6145 L190.765 73.0053 L191.788 72.6145 Z M135.859 109.425 L134.815 109.759 L135.859 109.425 Z M150.913 109.959 L151.93 110.366 L150.913 109.959 Z M116.114 129.737 L115.044 129.502 L116.114 129.737 Z M77.163 71.3704 L78.0664 71.9902 L77.163 71.3704 Z M75.7604 72.6906 L75.1963 71.7513 L75.7604 72.6906 Z M69.9581 79.7422 L68.8889 79.5026 L69.9581 79.7422 Z M47.5692 108.418 L46.5872 108.904 L47.5692 108.418 Z M63.9719 106.449 L62.9028 106.209 L63.9719 106.449 Z M14.4472 131.179 L13.9667 132.163 L14.4472 131.179 Z M28.4474 124.217 L27.3723 124.006 L28.4474 124.217 Z M188.462 63.9036 L187.439 64.2944 L188.462 63.9036 Z M350.575 79.3408 L349.503 79.5658 L350.575 79.3408 Z M13.8379 130.882 L13.3574 131.866 L13.8379 130.882 Z M0 136.804 L0.991714 137.27 L1.57989 136.017 L0.588181 135.552 L-0.403533 135.086 L-0.991714 136.338 L0 136.804 Z M13.8379 130.882 L13.3574 131.866 L13.9667 132.163 L14.4472 131.179 L14.9277 130.194 L14.3184 129.897 L13.8379 130.882 Z M28.4474 124.217 L29.5225 124.428 L32.1937 110.827 L31.1186 110.616 L30.0435 110.405 L27.3723 124.006 L28.4474 124.217 Z M63.9719 106.449 L65.041 106.688 L71.0272 79.9818 L69.9581 79.7422 L68.8889 79.5026 L62.9028 106.209 L63.9719 106.449 Z M74.5032 73.4456 L75.0673 74.3848 L76.3244 73.6298 L75.7604 72.6906 L75.1963 71.7513 L73.9391 72.5063 L74.5032 73.4456 Z M85.3358 73.0315 L84.2621 73.2495 L95.7454 129.801 L96.8192 129.583 L97.8929 129.365 L86.4096 72.8135 L85.3358 73.0315 Z M116.114 129.737 L117.184 129.972 L121.487 110.384 L120.417 110.149 L119.347 109.913 L115.044 129.502 L116.114 129.737 Z M150.913 109.959 L151.93 110.366 L152.467 109.026 L151.45 108.618 L150.432 108.211 L149.896 109.551 L150.913 109.959 Z M151.45 108.618 L152.44 109.087 L173.891 63.7698 L172.901 63.3011 L171.91 62.8323 L150.459 108.15 L151.45 108.618 Z M188.462 63.9036 L187.439 64.2944 L190.765 73.0053 L191.788 72.6145 L192.812 72.2237 L189.486 63.5128 L188.462 63.9036 Z M199.878 71.1227 L200.974 71.1227 L200.974 54.5476 L199.878 54.5476 L198.783 54.5476 L198.783 71.1227 L199.878 71.1227 Z M209.809 53.313 L208.746 53.5813 L210.128 59.0513 L211.19 58.783 L212.252 58.5147 L210.871 53.0447 L209.809 53.313 Z M237.894 57.5132 L236.817 57.712 L244.449 99.0568 L245.526 98.8579 L246.604 98.659 L238.972 57.3143 L237.894 57.5132 Z M275.367 99.9697 L274.303 100.23 L275.719 106.009 L276.783 105.748 L277.848 105.488 L276.432 99.709 L275.367 99.9697 Z M295.021 104.942 L296.104 105.108 L302.965 60.3074 L301.882 60.1415 L300.799 59.9757 L293.938 104.776 L295.021 104.942 Z M320.766 57.9264 L319.751 58.3384 L328.495 79.8866 L329.51 79.4746 L330.525 79.0626 L321.781 57.5144 L320.766 57.9264 Z M350.575 79.3408 L349.503 79.5658 L358.402 121.986 L359.475 121.761 L360.547 121.536 L351.647 79.1158 L350.575 79.3408 Z M378.822 121.608 L378.051 122.387 L380.487 124.798 L381.258 124.02 L382.029 123.241 L379.593 120.83 L378.822 121.608 Z M394.737 120.191 L395.802 120.448 L401.595 96.4408 L400.53 96.1837 L399.465 95.9267 L393.672 119.934 L394.737 120.191 Z M408.59 94.6023 L407.701 95.2427 L407.989 95.6429 L408.878 95.0024 L409.767 94.362 L409.479 93.9618 L408.59 94.6023 Z M419.181 99.1051 L418.104 99.3091 L419.483 106.587 L420.56 106.383 L421.636 106.179 L420.257 98.9011 L419.181 99.1051 Z M439.7 106.077 L440.782 106.246 L445.277 77.5301 L444.195 77.3607 L443.113 77.1912 L438.617 105.907 L439.7 106.077 Z M470.257 76.8101 L471.347 76.9222 L473.574 55.282 L472.484 55.1698 L471.394 55.0577 L469.167 76.6979 L470.257 76.8101 Z M489.424 40.8781 L490.487 41.1401 L494.888 23.2767 L493.824 23.0146 L492.76 22.7526 L488.36 40.616 L489.424 40.8781 Z M496.056 18.7904 L496.872 19.5218 L500.408 15.5777 L499.593 14.8463 L498.777 14.1149 L495.241 18.059 L496.056 18.7904 Z M501.026 12.3458 L502.069 12.6799 L502.192 12.2955 L501.149 11.9613 L500.105 11.6272 L499.982 12.0116 L501.026 12.3458 Z M501.149 11.9613 L502.192 12.2955 C503.557 8.03458 509.126 7.02671 511.897 10.5393 L512.758 9.86073 L513.618 9.18214 C509.76 4.29158 502.005 5.69483 500.105 11.6272 L501.149 11.9613 Z M499.593 14.8463 L500.408 15.5777 C501.16 14.7395 501.726 13.752 502.069 12.6799 L501.026 12.3458 L499.982 12.0116 C499.733 12.7898 499.322 13.5066 498.777 14.1149 L499.593 14.8463 Z M493.824 23.0146 L494.888 23.2767 C495.231 21.8813 495.913 20.5918 496.872 19.5218 L496.056 18.7904 L495.241 18.059 C494.041 19.3965 493.189 21.0083 492.76 22.7526 L493.824 23.0146 Z M481.056 47.4346 L481.056 48.5302 C485.526 48.5302 489.419 45.48 490.487 41.1401 L489.424 40.8781 L488.36 40.616 C487.532 43.9769 484.518 46.339 481.056 46.339 L481.056 47.4346 Z M472.484 55.1698 L473.574 55.282 C473.969 51.4462 477.2 48.5302 481.056 48.5302 L481.056 47.4346 L481.056 46.339 C476.077 46.339 471.904 50.1044 471.394 55.0577 L472.484 55.1698 Z M457.204 77.2577 L456.124 77.4443 C457.645 86.2492 470.432 85.8108 471.347 76.9222 L470.257 76.8101 L469.167 76.6979 C468.513 83.0528 459.371 83.3663 458.283 77.0711 L457.204 77.2577 Z M444.195 77.3607 L445.277 77.5301 C446.24 71.3845 455.065 71.3147 456.124 77.4443 L457.204 77.2577 L458.283 77.0711 C456.802 68.4978 444.458 68.5955 443.113 77.1912 L444.195 77.3607 Z M420.56 106.383 L419.483 106.587 C421.742 118.508 438.906 118.233 440.782 106.246 L439.7 106.077 L438.617 105.907 C437.121 115.464 423.437 115.683 421.636 106.179 L420.56 106.383 Z M413.694 96.2731 L414.151 97.2687 C415.819 96.5029 417.762 97.5061 418.104 99.3091 L419.181 99.1051 L420.257 98.9011 C419.65 95.699 416.198 93.9172 413.237 95.2774 L413.694 96.2731 Z M408.878 95.0024 L407.989 95.6429 C409.39 97.588 411.972 98.2693 414.151 97.2687 L413.694 96.2731 L413.237 95.2774 C412.01 95.8408 410.556 95.4572 409.767 94.362 L408.878 95.0024 Z M400.53 96.1837 L401.595 96.4408 C402.282 93.5961 405.99 92.8684 407.701 95.2427 L408.59 94.6023 L409.479 93.9618 C406.673 90.0677 400.591 91.2611 399.465 95.9267 L400.53 96.1837 Z M381.258 124.02 L380.487 124.798 C385.545 129.806 394.132 127.367 395.802 120.448 L394.737 120.191 L393.672 119.934 C392.403 125.194 385.874 127.049 382.029 123.241 L381.258 124.02 Z M369.914 123.091 L370.896 123.578 C372.251 120.845 375.884 120.24 378.051 122.387 L378.822 121.608 L379.593 120.83 C376.364 117.632 370.952 118.533 368.933 122.605 L369.914 123.091 Z M359.475 121.761 L358.402 121.986 C359.701 128.177 368.086 129.245 370.896 123.578 L369.914 123.091 L368.933 122.605 C367.047 126.409 361.419 125.692 360.547 121.536 L359.475 121.761 Z M329.51 79.4746 L328.495 79.8866 C330.85 85.6899 339.207 85.2581 340.952 79.243 L339.899 78.9378 L338.847 78.6326 C337.682 82.651 332.099 82.9395 330.525 79.0626 L329.51 79.4746 Z M301.882 60.1415 L302.965 60.3074 C304.312 51.5066 316.403 50.0884 319.751 58.3384 L320.766 57.9264 L321.781 57.5144 C317.596 47.2019 302.483 48.9747 300.799 59.9757 L301.882 60.1415 Z M276.783 105.748 L275.719 106.009 C278.429 117.066 294.38 116.361 296.104 105.108 L295.021 104.942 L293.938 104.776 C292.577 113.659 279.986 114.215 277.848 105.488 L276.783 105.748 Z M260.494 99.6313 L261.545 99.9402 C263.448 93.4619 272.696 93.6723 274.303 100.23 L275.367 99.9697 L276.432 99.709 C274.292 90.9761 261.977 90.6959 259.442 99.3224 L260.494 99.6313 Z M245.526 98.8579 L244.449 99.0568 C246.13 108.166 258.933 108.828 261.545 99.9402 L260.494 99.6313 L259.442 99.3224 C257.481 105.997 247.867 105.5 246.604 98.659 L245.526 98.8579 Z M224.495 57.9333 L225.583 58.0643 C226.362 51.5989 235.635 51.3081 236.817 57.712 L237.894 57.5132 L238.972 57.3143 C237.334 48.4417 224.486 48.8446 223.408 57.8023 L224.495 57.9333 Z M211.19 58.783 L210.128 59.0513 C212.266 67.516 224.539 66.7322 225.583 58.0643 L224.495 57.9333 L223.408 57.8023 C222.654 64.0586 213.795 64.6243 212.252 58.5147 L211.19 58.783 Z M201.616 50.7391 L202.334 51.5667 C204.555 49.6404 208.026 50.7312 208.746 53.5813 L209.809 53.313 L210.871 53.0447 C209.751 48.612 204.352 46.9155 200.898 49.9115 L201.616 50.7391 Z M199.878 54.5476 L200.974 54.5476 C200.974 53.4038 201.47 52.3163 202.334 51.5667 L201.616 50.7391 L200.898 49.9115 C199.555 51.0772 198.783 52.7687 198.783 54.5476 L199.878 54.5476 Z M199.373 73.1154 L200.336 73.6374 C200.755 72.8653 200.974 72.0009 200.974 71.1227 L199.878 71.1227 L198.783 71.1227 C198.783 71.6363 198.654 72.1418 198.41 72.5934 L199.373 73.1154 Z M191.788 72.6145 L190.765 73.0053 C192.374 77.2202 198.187 77.6041 200.336 73.6374 L199.373 73.1154 L198.41 72.5934 C197.153 74.9133 193.753 74.6888 192.812 72.2237 L191.788 72.6145 Z M135.859 109.425 L134.815 109.759 C137.416 117.883 148.761 118.285 151.93 110.366 L150.913 109.959 L149.896 109.551 C147.49 115.564 138.877 115.259 136.902 109.091 L135.859 109.425 Z M120.417 110.149 L121.487 110.384 C123.002 103.489 132.662 103.036 134.815 109.759 L135.859 109.425 L136.902 109.091 C134.067 100.236 121.342 100.832 119.347 109.913 L120.417 110.149 Z M96.8192 129.583 L95.7454 129.801 C98.1023 141.408 114.642 141.539 117.184 129.972 L116.114 129.737 L115.044 129.502 C113.01 138.756 99.7784 138.65 97.8929 129.365 L96.8192 129.583 Z M77.163 71.3704 L78.0664 71.9902 C79.7818 69.4903 83.6588 70.2783 84.2621 73.2495 L85.3358 73.0315 L86.4096 72.8135 C85.4212 67.9459 79.0698 66.655 76.2596 70.7505 L77.163 71.3704 Z M75.7604 72.6906 L76.3244 73.6298 C77.016 73.2145 77.61 72.6554 78.0664 71.9902 L77.163 71.3704 L76.2596 70.7505 C75.981 71.1565 75.6184 71.4978 75.1963 71.7513 L75.7604 72.6906 Z M69.9581 79.7422 L71.0272 79.9818 C71.5516 77.6421 73.0117 75.6194 75.0673 74.3848 L74.5032 73.4456 L73.9391 72.5063 C71.3696 74.0495 69.5445 76.5779 68.8889 79.5026 L69.9581 79.7422 Z M47.5692 108.418 L46.5872 108.904 C50.7085 117.232 63.0087 115.755 65.041 106.688 L63.9719 106.449 L62.9028 106.209 C61.3223 113.26 51.7563 114.409 48.5512 107.932 L47.5692 108.418 Z M31.1186 110.616 L32.1937 110.827 C33.6061 103.636 43.3367 102.336 46.5872 108.904 L47.5692 108.418 L48.5512 107.932 C44.3715 99.4864 31.8596 101.158 30.0435 110.405 L31.1186 110.616 Z M14.4472 131.179 L13.9667 132.163 C20.434 135.319 28.1357 131.49 29.5225 124.428 L28.4474 124.217 L27.3723 124.006 C26.2629 129.655 20.1015 132.719 14.9277 130.194 L14.4472 131.179 Z M172.901 63.3011 L173.891 63.7698 C176.668 57.9032 185.124 58.2306 187.439 64.2944 L188.462 63.9036 L189.486 63.5128 C186.483 55.6462 175.513 55.2215 171.91 62.8323 L172.901 63.3011 Z M339.899 78.9378 L340.952 79.243 C342.231 74.8317 348.56 75.0707 349.503 79.5658 L350.575 79.3408 L351.647 79.1158 C350.236 72.3871 340.762 72.0295 338.847 78.6326 L339.899 78.9378 Z M0.588181 135.552 L1.57989 136.017 C3.65942 131.59 8.961 129.721 13.3574 131.866 L13.8379 130.882 L14.3184 129.897 C8.82284 127.215 2.19588 129.551 -0.403533 135.086 L0.588181 135.552 Z" fill="#4d98fe"/></svg>
      <div data-fu="btn" style={{ position: "absolute", left: "219.13px", top: "112.85px", width: "122.71px", height: "52.59px", borderRadius: "8.77px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8, 0px 5.48px 24.1px 0px rgba(13, 13, 18, 0.14)", display: "flex", flexDirection: "column", padding: "7.67px 10.96px 7.67px 10.96px", gap: "2.19px", justifyContent: "center", alignItems: "flex-start", boxSizing: "border-box" }}>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12.05px", fontWeight: 400, color: "#6c6c6c" }}>May 2026</p>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 500, color: "#2d2d2d" }}>$109.7K</p>
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
  const labelNear = (scope: Element, x: number, y: number, below: boolean) => {
    let best = "", d = 1e9;
    for (const t of texts(scope)) {
      const r = box(t);
      if (below ? r.top < y - 2 : r.right > x + 2) continue;
      if (NUM.test((t.textContent || "").trim()) && !/[a-z]{3}/i.test(t.textContent || "")) continue;
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
