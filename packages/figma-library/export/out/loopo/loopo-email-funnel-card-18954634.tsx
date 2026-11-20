"use client";
// Email funnel card (loopo, Charts) from Ingot UI (ingotui.com).
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
const DotsVertical = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M11 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0\" /><path d=\"M11 19a1 1 0 1 0 2 0a1 1 0 1 0 -2 0\" /><path d=\"M11 5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0\" /></g>");

export function EmailFunnelCard() {
  const fuRef = useRef<any>(null);
  useEffect(() => fuInteract(fuRef.current), []);
  return (
    <div ref={fuRef} data-fu="card" style={{ width: "373.61px", height: "380.19px", borderRadius: "24.1px", background: "#fefefe", boxShadow: "inset 0 0 0 1.1px #eaeaea", overflow: "hidden", display: "flex", flexDirection: "column", padding: "23.01px 14.25px 23.01px 14.25px", gap: "10.96px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
      <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 8.77px 0px 8.77px", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "4.38px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "17.53px", fontWeight: 500, color: "#141417", lineHeight: "1.5" }}>Email funnel</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#6b6b70" }}>Avg. campaign · last 30 days</p>
        </div>
        <div data-fu="btn" style={{ width: "37.25px", height: "37.25px", flexShrink: 0, borderRadius: "8.77px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8, 0px 1.1px 1.1px 0px rgba(13, 13, 18, 0.08)", display: "flex", flexDirection: "row", gap: "6.57px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <DotsVertical size={19.7} style={{ width: "19.72px", height: "19.72px", flexShrink: 0, color: "#c4c4c4", display: "block" }} />
        </div>
      </div>
      <div style={{ width: "347.31px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "4.38px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ width: "347.31px", height: "66px", flexShrink: 0, borderRadius: "8.77px", display: "flex", flexDirection: "row", padding: "0px 8.77px 0px 8.77px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.19px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 500, color: "#222222" }}>Delivered</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#999999" }}>Avg. per campaign</p>
          </div>
          <div style={{ flex: "1 1 0", minWidth: 0, height: "1px", flexShrink: 0 }} />
          <div style={{ width: "197.21px", height: "66px", flexShrink: 0, position: "relative" }}>
            <svg data-fu="plot" style={{ position: "absolute", left: "0px", top: "0px", width: "197.21px", height: "66px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="197.21" height="66" viewBox="0 0 197.21 66" fill="none" overflow="visible"><defs><linearGradient id="g123_xyog" gradientUnits="userSpaceOnUse" x1="98.61" y1="0.00" x2="98.61" y2="66.00"><stop offset="0" stopColor="#fd613d"/><stop offset="1" stopColor="#fd4b23"/></linearGradient></defs><path transform="matrix(1 0 0 1 0 0)" d="M4.06543 9.22056 C2.1507 4.87788 5.33098 0 10.077 0 L187.133 0 C191.879 0 195.059 4.87789 193.145 9.22057 L169.838 62.0806 C168.788 64.4627 166.43 66 163.827 66 L33.3835 66 C30.7801 66 28.4222 64.4627 27.3719 62.0806 L4.06543 9.22056 Z" fill="url(#g123_xyog)"/><path transform="matrix(1 0 0 1 0 0)" d="M169.838 62.0806 L170.753 62.484 L169.838 62.0806 Z M193.145 9.22057 L194.06 9.62401 L193.145 9.22057 Z M10.077 0 L10.077 1 L187.133 1 L187.133 0 L187.133 -1 L10.077 -1 L10.077 0 Z M193.145 9.22057 L192.23 8.81714 L168.923 61.6771 L169.838 62.0806 L170.753 62.484 L194.06 9.62401 L193.145 9.22057 Z M163.827 66 L163.827 65 L33.3835 65 L33.3835 66 L33.3835 67 L163.827 67 L163.827 66 Z M27.3719 62.0806 L28.2869 61.6771 L4.98044 8.81713 L4.06543 9.22056 L3.15042 9.624 L26.4569 62.484 L27.3719 62.0806 Z M33.3835 66 L33.3835 65 C31.1763 65 29.1773 63.6967 28.2869 61.6771 L27.3719 62.0806 L26.4569 62.484 C27.6671 65.2288 30.3838 67 33.3835 67 L33.3835 66 Z M169.838 62.0806 L168.923 61.6771 C168.033 63.6967 166.034 65 163.827 65 L163.827 66 L163.827 67 C166.826 67 169.543 65.2288 170.753 62.484 L169.838 62.0806 Z M187.133 0 L187.133 1 C191.157 1 193.853 5.13544 192.23 8.81714 L193.145 9.22057 L194.06 9.62401 C196.266 4.62034 192.601 -1 187.133 -1 L187.133 0 Z M10.077 0 L10.077 -1 C4.6086 -1 0.944257 4.62033 3.15042 9.624 L4.06543 9.22056 L4.98044 8.81713 C3.35715 5.13543 6.05336 1 10.077 1 L10.077 0 Z" fill="#c53b1b" fillOpacity="0.38"/></svg>
            <p style={{ position: "absolute", left: "77.6px", top: "23px", margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 500, color: "#ffffff" }}>17,512</p>
          </div>
        </div>
        <div style={{ width: "347.31px", height: "66px", flexShrink: 0, borderRadius: "8.77px", display: "flex", flexDirection: "row", padding: "0px 8.77px 0px 8.77px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.19px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 500, color: "#222222" }}>Opened</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#222222" }}>
              <span style={{ fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#222222" }}>52.4%</span>
              <span style={{ fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#999999" }}>{" of delivered"}</span>
            </p>
          </div>
          <div style={{ flex: "1 1 0", minWidth: 0, height: "1px", flexShrink: 0 }} />
          <div style={{ width: "197.21px", height: "66px", flexShrink: 0, position: "relative" }}>
            <svg data-fu="plot" style={{ position: "absolute", left: "29.1px", top: "0px", width: "139px", height: "66px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="139" height="66" viewBox="0 0 139 66" fill="none" overflow="visible"><defs><linearGradient id="g124_xypo" gradientUnits="userSpaceOnUse" x1="69.50" y1="0.00" x2="69.50" y2="66.00"><stop offset="0" stopColor="#fd7a5c"/><stop offset="1" stopColor="#fd6846"/></linearGradient></defs><path transform="matrix(1 0 0 1 0 0)" d="M3.53346 8.97647 C1.83662 4.66579 5.01425 0 9.64688 0 L129.353 0 C133.986 0 137.163 4.66579 135.467 8.97646 L114.659 61.8365 C113.67 64.3485 111.245 66 108.546 66 L30.4545 66 C27.7548 66 25.3299 64.3485 24.3411 61.8365 L3.53346 8.97647 Z" fill="url(#g124_xypo)"/><path transform="matrix(1 0 0 1 0 0)" d="M24.3411 61.8365 L23.4106 62.2027 L24.3411 61.8365 Z M114.659 61.8365 L113.728 61.4702 L114.659 61.8365 Z M135.467 8.97646 L134.536 8.61018 L135.467 8.97646 Z M9.64688 0 L9.64688 1 L129.353 1 L129.353 0 L129.353 -1 L9.64688 -1 L9.64688 0 Z M135.467 8.97646 L134.536 8.61018 L113.728 61.4702 L114.659 61.8365 L115.589 62.2027 L136.397 9.34274 L135.467 8.97646 Z M108.546 66 L108.546 65 L30.4545 65 L30.4545 66 L30.4545 67 L108.546 67 L108.546 66 Z M24.3411 61.8365 L25.2716 61.4702 L4.46397 8.61019 L3.53346 8.97647 L2.60296 9.34275 L23.4106 62.2027 L24.3411 61.8365 Z M30.4545 66 L30.4545 65 C28.1657 65 26.1099 63.5999 25.2716 61.4702 L24.3411 61.8365 L23.4106 62.2027 C24.5499 65.0972 27.3439 67 30.4545 67 L30.4545 66 Z M114.659 61.8365 L113.728 61.4702 C112.89 63.5999 110.834 65 108.546 65 L108.546 66 L108.546 67 C111.656 67 114.45 65.0972 115.589 62.2027 L114.659 61.8365 Z M129.353 0 L129.353 1 C133.281 1 135.975 4.95562 134.536 8.61018 L135.467 8.97646 L136.397 9.34274 C138.352 4.37595 134.691 -1 129.353 -1 L129.353 0 Z M9.64688 0 L9.64688 -1 C4.30913 -1 0.647849 4.37596 2.60296 9.34275 L3.53346 8.97647 L4.46397 8.61019 C3.0254 4.95562 5.71937 1 9.64688 1 L9.64688 0 Z" fill="#c55137" fillOpacity="0.38"/></svg>
            <p style={{ position: "absolute", left: "80.6px", top: "23px", margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 500, color: "#ffffff" }}>9,175</p>
          </div>
        </div>
        <div style={{ width: "347.31px", height: "66px", flexShrink: 0, borderRadius: "8.77px", display: "flex", flexDirection: "row", padding: "0px 8.77px 0px 8.77px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.19px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 500, color: "#222222" }}>Clicked</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#222222" }}>
              <span style={{ fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#222222" }}>18.9%</span>
              <span style={{ fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#999999" }}>{" of opens"}</span>
            </p>
          </div>
          <div style={{ flex: "1 1 0", minWidth: 0, height: "1px", flexShrink: 0 }} />
          <div style={{ width: "197.21px", height: "66px", flexShrink: 0, position: "relative" }}>
            <svg style={{ position: "absolute", left: "55.08px", top: "0px", width: "87.05px", height: "66px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="87.05" height="66" viewBox="0 0 87.05 66" fill="none" overflow="visible"><defs><linearGradient id="g125_xyqe" gradientUnits="userSpaceOnUse" x1="43.53" y1="0.00" x2="43.53" y2="66.00"><stop offset="0" stopColor="#fe947b"/><stop offset="1" stopColor="#fe8569"/></linearGradient></defs><path transform="matrix(1 0 0 1 0 0)" d="M0.530747 7.06236 C0.244288 3.25061 3.25977 0 7.08227 0 L79.9667 0 C83.7896 0 86.8052 3.25125 86.5181 7.06334 L82.5376 59.9233 C82.2795 63.3508 79.4233 66 75.9861 66 L11.0548 66 C7.61725 66 4.76086 63.3502 4.50326 59.9224 L0.530747 7.06236 Z" fill="url(#g125_xyqe)"/><path transform="matrix(1 0 0 1 0 0)" d="M4.50326 59.9224 L3.50607 59.9973 L4.50326 59.9224 Z M82.5376 59.9233 L81.5404 59.8482 L82.5376 59.9233 Z M7.08227 0 L7.08227 1 L79.9667 1 L79.9667 0 L79.9667 -1 L7.08227 -1 L7.08227 0 Z M86.5181 7.06334 L85.5209 6.98825 L81.5404 59.8482 L82.5376 59.9233 L83.5348 59.9984 L87.5153 7.13843 L86.5181 7.06334 Z M75.9861 66 L75.9861 65 L11.0548 65 L11.0548 66 L11.0548 67 L75.9861 67 L75.9861 66 Z M4.50326 59.9224 L5.50044 59.8474 L1.52793 6.98742 L0.530747 7.06236 L-0.466441 7.1373 L3.50607 59.9973 L4.50326 59.9224 Z M11.0548 66 L11.0548 65 C8.14047 65 5.71884 62.7535 5.50044 59.8474 L4.50326 59.9224 L3.50607 59.9973 C3.80289 63.9469 7.09404 67 11.0548 67 L11.0548 66 Z M82.5376 59.9233 L81.5404 59.8482 C81.3216 62.754 78.9001 65 75.9861 65 L75.9861 66 L75.9861 67 C79.9464 67 83.2374 63.9475 83.5348 59.9984 L82.5376 59.9233 Z M79.9667 0 L79.9667 1 C83.2077 1 85.7643 3.75638 85.5209 6.98825 L86.5181 7.06334 L87.5153 7.13843 C87.846 2.74611 84.3714 -1 79.9667 -1 L79.9667 0 Z M7.08227 0 L7.08227 -1 C2.67796 -1 -0.796501 2.74537 -0.466441 7.1373 L0.530747 7.06236 L1.52793 6.98742 C1.28508 3.75584 3.84159 1 7.08227 1 L7.08227 0 Z" fill="#c66852" fillOpacity="0.38"/></svg>
            <p style={{ position: "absolute", left: "80.6px", top: "23px", margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 500, color: "#ffffff" }}>1,734</p>
          </div>
        </div>
        <div style={{ width: "347.31px", height: "66px", flexShrink: 0, borderRadius: "8.77px", display: "flex", flexDirection: "row", padding: "0px 8.77px 0px 8.77px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.19px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 500, color: "#222222" }}>Purchased</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#222222" }}>
              <span style={{ fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#222222" }}>18.0%</span>
              <span style={{ fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#999999" }}>{" of clicks"}</span>
            </p>
          </div>
          <div style={{ flex: "1 1 0", minWidth: 0, height: "1px", flexShrink: 0 }} />
          <div style={{ width: "197.21px", height: "66px", flexShrink: 0, position: "relative" }}>
            <svg style={{ position: "absolute", left: "60.05px", top: "0px", width: "77.12px", height: "66px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="77.12" height="66" viewBox="0 0 77.12 66" fill="none" overflow="visible"><defs><linearGradient id="g126_xyrr" gradientUnits="userSpaceOnUse" x1="38.56" y1="0.00" x2="38.56" y2="66.00"><stop offset="0" stopColor="#feac9b"/><stop offset="1" stopColor="#fea18d"/></linearGradient></defs><path transform="matrix(1 0 0 1 0 0)" d="M0.021973 6.5919 C0.00984952 2.95486 2.95487 0 6.59194 0 L70.5281 0 C74.1651 0 77.1102 2.95485 77.098 6.5919 L76.9218 59.4519 C76.9098 63.0718 73.9718 66 70.3519 66 L6.76814 66 C3.14818 66 0.210239 63.0718 0.198173 59.4519 L0.021973 6.5919 Z" fill="url(#g126_xyrr)"/><path transform="matrix(1 0 0 1 0 0)" d="M76.9218 59.4519 L77.9218 59.4552 L76.9218 59.4519 Z M77.098 6.5919 L76.098 6.58857 L77.098 6.5919 Z M6.59194 0 L6.59194 1 L70.5281 1 L70.5281 0 L70.5281 -1 L6.59194 -1 L6.59194 0 Z M77.098 6.5919 L76.098 6.58857 L75.9218 59.4486 L76.9218 59.4519 L77.9218 59.4552 L78.098 6.59523 L77.098 6.5919 Z M70.3519 66 L70.3519 65 L6.76814 65 L6.76814 66 L6.76814 67 L70.3519 67 L70.3519 66 Z M0.198173 59.4519 L1.19817 59.4486 L1.02197 6.58857 L0.021973 6.5919 L-0.978021 6.59523 L-0.801821 59.4552 L0.198173 59.4519 Z M6.76814 66 L6.76814 65 C3.69916 65 1.2084 62.5175 1.19817 59.4486 L0.198173 59.4519 L-0.801821 59.4552 C-0.787918 63.6262 2.5972 67 6.76814 67 L6.76814 66 Z M76.9218 59.4519 L75.9218 59.4486 C75.9116 62.5175 73.4208 65 70.3519 65 L70.3519 66 L70.3519 67 C74.5228 67 77.9079 63.6262 77.9218 59.4552 L76.9218 59.4519 Z M70.5281 0 L70.5281 1 C73.6116 1 76.1083 3.5051 76.098 6.58857 L77.098 6.5919 L78.098 6.59523 C78.112 2.40461 74.7187 -1 70.5281 -1 L70.5281 0 Z M6.59194 0 L6.59194 -1 C2.40128 -1 -0.99199 2.40461 -0.978021 6.59523 L0.021973 6.5919 L1.02197 6.58857 C1.01169 3.50511 3.50846 1 6.59194 1 L6.59194 0 Z" fill="#c67e6e" fillOpacity="0.38"/></svg>
            <p style={{ position: "absolute", left: "85.6px", top: "23px", margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 500, color: "#b13519" }}>312</p>
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
