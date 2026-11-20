"use client";
// Scenarios card (montra, Charts) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Ingot Icons.
import { useEffect, useRef } from "react";
import { Rocket, Shield, Stack2 } from "ingotui-icons/react/stroke-rounded";

export function ScenariosCard() {
  const fuRef = useRef<any>(null);
  useEffect(() => fuInteract(fuRef.current), []);
  return (
    <div ref={fuRef} data-fu="card" style={{ width: "324.4px", height: "353.7px", borderRadius: "10.97px", background: "#fefefe", boxShadow: "inset 0 0 0 0.91px #ededed", overflow: "hidden", position: "relative" }}>
      <p style={{ position: "absolute", left: "18.28px", top: "18.28px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "69px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.62px", fontWeight: 500, color: "#000000" }}>Scenarios</p>
      <p style={{ position: "absolute", left: "18.28px", top: "43.87px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "152px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#6b6b6b" }}>Ending balance, Feb 2027</p>
      <div style={{ position: "absolute", left: "18.28px", top: "69.46px", width: "287.84px", height: "250.31px", display: "flex", flexDirection: "column", gap: "7.31px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ width: "287.84px", flexShrink: 0, borderRadius: "9.14px", background: "#f4f4f5", boxShadow: "inset 0 0 0 0.91px #e8e8eb", display: "flex", flexDirection: "column", padding: "9.14px 10.97px 9.14px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ width: "265.91px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "9.14px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "27.42px", height: "27.42px", flexShrink: 0, borderRadius: "7.31px", background: "rgba(73, 150, 254, 0.12)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <Stack2 size={13.7} strokeWidth={1.51} style={{ width: "13.71px", height: "13.71px", flexShrink: 0, color: "#4996fe", display: "block" }} />
            </div>
            <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.83px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "28px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 500, color: "#222222" }}>Base</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "102px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 400, color: "#666d80" }}>Current plan, 5 drivers</p>
            </div>
            <div style={{ width: "29.24px", height: "16.45px", flexShrink: 0, borderRadius: "8.22px", background: "#222222", position: "relative" }}>
              <svg style={{ position: "absolute", left: "14.62px", top: "1.83px", width: "12.79px", height: "12.79px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="12.79" height="12.79" viewBox="0 0 12.79 12.79" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M12.79 6.395 C12.79 9.92686 9.92686 12.79 6.395 12.79 C2.86314 12.79 0 9.92686 0 6.395 C0 2.86314 2.86314 0 6.395 0 C9.92686 0 12.79 2.86314 12.79 6.395 Z" fill="#ffffff"/></svg>
            </div>
          </div>
          <div style={{ width: "265.91px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "62px", lineHeight: "21px", fontFamily: "'Geist'", fontSize: "16.45px", fontWeight: 500, color: "#202020", letterSpacing: "-0.02em" }}>$47,900</p>
            <div style={{ flexShrink: 0, borderRadius: "4.57px", background: "rgba(24, 177, 112, 0.1)", display: "flex", flexDirection: "row", padding: "1.37px 4.57px 1.37px 4.57px", gap: "1.83px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <svg style={{ width: "5.48px", height: "4.57px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="5.48" height="4.57" viewBox="0 0 5.48 4.57" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 4.57 L5.48 4.57 L2.74 0 L0 4.57 Z" fill="#18b170"/></svg>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "27px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.51px", fontWeight: 500, color: "#18b170" }}>+67%</p>
            </div>
            <div style={{ flex: "1 1 0", minWidth: 0, height: "1px", flexShrink: 0 }} />
            <svg style={{ width: "67.63px", height: "21.93px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="67.63" height="21.93" viewBox="0 0 67.63 21.93" fill="none" overflow="visible"><defs><linearGradient id="g9_t78u" gradientUnits="userSpaceOnUse" x1="31.08" y1="0.00" x2="31.08" y2="19.19"><stop offset="0" stopColor="#4996fe" stopOpacity="0.16"/><stop offset="1" stopColor="#4996fe" stopOpacity="0"/></linearGradient></defs><path transform="matrix(1 0 0 1 0.91 2.74)" d="M0 16.47 C0.62 16.52 9.12 17.49 10.36 17.36 C11.6 17.23 19.47 14.71 20.72 14.28 C21.96 13.85 29.83 10.69 31.08 10.18 C32.32 9.66 40.19 6.06 41.43 5.64 C42.68 5.23 50.55 3.59 51.79 3.25 C53.03 2.91 61.53 0.19 62.15 0 L62.15 19.19 L0 19.19 L0 16.47 Z" fill="url(#g9_t78u)"/><path transform="matrix(1 0 0 1 0.91 2.74)" d="M0.0514459 15.8321 C-0.300873 15.8037 -0.609516 16.0662 -0.637929 16.4186 C-0.666342 16.7709 -0.403764 17.0795 -0.0514459 17.1079 L0 16.47 L0.0514459 15.8321 Z M20.72 14.28 L20.9282 14.8852 L20.9297 14.8847 L20.72 14.28 Z M31.08 10.18 L31.3218 10.7726 L31.3275 10.7702 L31.08 10.18 Z M41.43 5.64 L41.2305 5.03185 L41.2247 5.03383 L41.43 5.64 Z M62.3375 0.611912 C62.6755 0.508346 62.8655 0.150428 62.7619 -0.187521 C62.6583 -0.525471 62.3004 -0.715477 61.9625 -0.611912 L62.15 0 L62.3375 0.611912 Z M0 16.47 L-0.0514459 17.1079 C0.253647 17.1325 2.50422 17.3846 4.88469 17.6194 C6.06509 17.7358 7.26908 17.847 8.25753 17.921 C9.21514 17.9927 10.0462 18.0364 10.4267 17.9965 L10.36 17.36 L10.2933 16.7235 C10.0538 16.7486 9.35736 16.7198 8.35309 16.6446 C7.37967 16.5717 6.18741 16.4617 5.01031 16.3456 C2.67578 16.1154 0.366353 15.8575 0.0514459 15.8321 L0 16.47 Z M10.36 17.36 L10.4267 17.9965 C10.8029 17.9571 11.5868 17.7563 12.4989 17.5006 C13.4379 17.2373 14.5827 16.8949 15.7242 16.5443 C18.0053 15.8436 20.2932 15.1036 20.9282 14.8852 L20.72 14.28 L20.5118 13.6748 C19.8968 13.8864 17.6247 14.6214 15.3483 15.3207 C14.2111 15.6701 13.0777 16.0089 12.1533 16.2681 C11.2019 16.5349 10.5371 16.6979 10.2933 16.7235 L10.36 17.36 Z M20.72 14.28 L20.9297 14.8847 C22.1902 14.4475 30.0807 11.2789 31.3218 10.7726 L31.08 10.18 L30.8382 9.58742 C29.5793 10.1011 21.7298 13.2524 20.5103 13.6753 L20.72 14.28 Z M31.08 10.18 L31.3275 10.7702 C31.9566 10.5064 34.249 9.46968 36.5161 8.45684 C38.8148 7.42984 41.0522 6.44367 41.6353 6.24617 L41.43 5.64 L41.2247 5.03383 C40.5678 5.25633 38.2502 6.28016 35.9939 7.28816 C33.706 8.31032 31.4434 9.33359 30.8325 9.5898 L31.08 10.18 Z M41.43 5.64 L41.6295 6.24812 C42.2151 6.05604 44.4486 5.55285 46.7519 5.04366 C49.0131 4.54379 51.3187 4.04285 51.9592 3.86722 L51.79 3.25 L51.6208 2.63278 C51.0213 2.79715 48.7719 3.28621 46.4756 3.79384 C44.2215 4.29215 41.8949 4.81396 41.2305 5.03188 L41.43 5.64 Z M51.79 3.25 L51.9592 3.86722 C53.2091 3.5245 61.747 0.792881 62.3375 0.611912 L62.15 0 L61.9625 -0.611912 C61.313 -0.412881 52.8509 2.2955 51.6208 2.63278 L51.79 3.25 Z" fill="#4996fe"/><path transform="matrix(1 0 0 1 60.78 0.46)" d="M4.57 2.285 C4.57 3.54697 3.54697 4.57 2.285 4.57 C1.02303 4.57 0 3.54697 0 2.285 C0 1.02303 1.02303 0 2.285 0 C3.54697 0 4.57 1.02303 4.57 2.285 Z" fill="#4996fe"/><path transform="matrix(1 0 0 1 60.78 0.46)" d="M4.57 2.285 L3.47 2.285 C3.47 2.93946 2.93946 3.47 2.285 3.47 L2.285 4.57 L2.285 5.67 C4.15448 5.67 5.67 4.15448 5.67 2.285 L4.57 2.285 Z M2.285 4.57 L2.285 3.47 C1.63054 3.47 1.1 2.93946 1.1 2.285 L0 2.285 L-1.1 2.285 C-1.1 4.15448 0.415516 5.67 2.285 5.67 L2.285 4.57 Z M0 2.285 L1.1 2.285 C1.1 1.63054 1.63054 1.1 2.285 1.1 L2.285 0 L2.285 -1.1 C0.415516 -1.1 -1.1 0.415516 -1.1 2.285 L0 2.285 Z M2.285 0 L2.285 1.1 C2.93946 1.1 3.47 1.63054 3.47 2.285 L4.57 2.285 L5.67 2.285 C5.67 0.415516 4.15448 -1.1 2.285 -1.1 L2.285 0 Z" fill="#ffffff"/></svg>
          </div>
        </div>
        <div style={{ width: "287.84px", flexShrink: 0, borderRadius: "9.14px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8", display: "flex", flexDirection: "column", padding: "10.05px 11.88px 10.05px 11.88px", gap: "7.31px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ width: "265.91px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "9.14px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "27.42px", height: "27.42px", flexShrink: 0, borderRadius: "7.31px", background: "rgba(253, 135, 47, 0.12)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <Shield size={13.7} strokeWidth={1.51} style={{ width: "13.71px", height: "13.71px", flexShrink: 0, color: "#fd872f", display: "block" }} />
            </div>
            <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.83px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "74px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 500, color: "#222222" }}>Conservative</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "111px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 400, color: "#666d80" }}>Revenue flat, hire in Oct</p>
            </div>
            <div style={{ width: "29.24px", height: "16.45px", flexShrink: 0, borderRadius: "8.22px", background: "#222222", position: "relative" }}>
              <svg style={{ position: "absolute", left: "14.62px", top: "1.83px", width: "12.79px", height: "12.79px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="12.79" height="12.79" viewBox="0 0 12.79 12.79" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M12.79 6.395 C12.79 9.92686 9.92686 12.79 6.395 12.79 C2.86314 12.79 0 9.92686 0 6.395 C0 2.86314 2.86314 0 6.395 0 C9.92686 0 12.79 2.86314 12.79 6.395 Z" fill="#ffffff"/></svg>
            </div>
          </div>
          <div style={{ width: "265.91px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "62px", lineHeight: "21px", fontFamily: "'Geist'", fontSize: "16.45px", fontWeight: 500, color: "#202020", letterSpacing: "-0.02em" }}>$31,200</p>
            <div style={{ flexShrink: 0, borderRadius: "4.57px", background: "rgba(24, 177, 112, 0.1)", display: "flex", flexDirection: "row", padding: "1.37px 4.57px 1.37px 4.57px", gap: "1.83px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <svg style={{ width: "5.48px", height: "4.57px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="5.48" height="4.57" viewBox="0 0 5.48 4.57" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 4.57 L5.48 4.57 L2.74 0 L0 4.57 Z" fill="#18b170"/></svg>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "22px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.51px", fontWeight: 500, color: "#18b170" }}>+9%</p>
            </div>
            <div style={{ flex: "1 1 0", minWidth: 0, height: "1px", flexShrink: 0 }} />
            <svg style={{ width: "67.63px", height: "21.93px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="67.63" height="21.93" viewBox="0 0 67.63 21.93" fill="none" overflow="visible"><defs><linearGradient id="g10_t78z" gradientUnits="userSpaceOnUse" x1="31.08" y1="0.00" x2="31.08" y2="19.19"><stop offset="0" stopColor="#fd872f" stopOpacity="0.16"/><stop offset="1" stopColor="#fd872f" stopOpacity="0"/></linearGradient></defs><path transform="matrix(1 0 0 1 0.91 2.74)" d="M0 10.34 C0.62 10.76 9.12 17.11 10.36 17.36 C11.6 17.61 19.47 15.02 20.72 14.53 C21.96 14.05 29.83 9.82 31.08 9.29 C32.32 8.75 40.19 6.04 41.43 5.65 C42.68 5.26 50.55 3.17 51.79 2.83 C53.03 2.49 61.53 0.17 62.15 0 L62.15 19.19 L0 19.19 L0 10.34 Z" fill="url(#g10_t78z)"/><path transform="matrix(1 0 0 1 0.91 2.74)" d="M0.358943 9.81013 C0.0663048 9.61189 -0.331629 9.68842 -0.529868 9.98106 C-0.728107 10.2737 -0.651581 10.6716 -0.358943 10.8699 L0 10.34 L0.358943 9.81013 Z M20.72 14.53 L20.489 13.9332 L20.4864 13.9341 L20.72 14.53 Z M31.08 9.29 L31.3298 9.87925 L31.3355 9.87677 L31.08 9.29 Z M41.43 5.65 L41.2394 5.03904 L41.238 5.03948 L41.43 5.65 Z M62.3192 0.617218 C62.6601 0.523751 62.8607 0.171643 62.7672 -0.169237 C62.6738 -0.510118 62.3216 -0.710686 61.9808 -0.617218 L62.15 0 L62.3192 0.617218 Z M0 10.34 L-0.358943 10.8699 C-0.050833 11.0786 2.18881 12.7426 4.57737 14.4359 C5.7583 15.273 6.96479 16.1093 7.95674 16.7535 C8.45203 17.0751 8.90099 17.3536 9.27024 17.5615 C9.45465 17.6653 9.62597 17.7554 9.77754 17.8255 C9.91957 17.8912 10.0805 17.9565 10.2335 17.9874 L10.36 17.36 L10.4865 16.7326 C10.4911 16.7335 10.4787 16.7313 10.4445 16.7186 C10.4121 16.7067 10.3692 16.6889 10.3147 16.6637 C10.2052 16.613 10.0662 16.5407 9.89827 16.4461 C9.56292 16.2573 9.13954 15.9954 8.65388 15.68 C7.68396 15.0501 6.4942 14.2257 5.31763 13.3916 C2.99119 11.7424 0.670833 10.0214 0.358943 9.81013 L0 10.34 Z M10.36 17.36 L10.2335 17.9874 C10.5077 18.0427 10.8654 18.0115 11.2001 17.9639 C11.562 17.9124 11.9958 17.8254 12.4702 17.7158 C13.4206 17.4961 14.574 17.1763 15.7186 16.836 C18.0028 16.1568 20.3032 15.3808 20.9536 15.1259 L20.72 14.53 L20.4864 13.9341 C19.8868 14.1692 17.6272 14.9332 15.3539 15.609 C14.2197 15.9462 13.095 16.2576 12.182 16.4686 C11.7247 16.5743 11.3305 16.6524 11.0197 16.6967 C10.8644 16.7188 10.7379 16.7312 10.6398 16.7354 C10.5911 16.7374 10.5534 16.7373 10.5254 16.736 C10.4964 16.7346 10.4849 16.7323 10.4865 16.7326 L10.36 17.36 Z M20.72 14.53 L20.951 15.1268 C21.614 14.8702 23.9398 13.6663 26.1913 12.4967 C28.4921 11.3015 30.7353 10.1313 31.3298 9.87922 L31.08 9.29 L30.8302 8.70078 C30.1747 8.97867 27.8579 10.1885 25.6012 11.3608 C23.2952 12.5587 21.066 13.7098 20.489 13.9332 L20.72 14.53 Z M31.08 9.29 L31.3355 9.87677 C32.541 9.35183 40.3815 6.65067 41.622 6.26052 L41.43 5.65 L41.238 5.03948 C39.9985 5.42933 32.099 8.14817 30.8245 8.70323 L31.08 9.29 Z M41.43 5.65 L41.6206 6.26095 C42.8569 5.87523 50.697 3.79332 51.9592 3.44722 L51.79 2.83 L51.6208 2.21278 C50.403 2.54668 42.5031 4.64477 41.2394 5.03905 L41.43 5.65 Z M51.79 2.83 L51.9592 3.44722 C52.5788 3.27733 55.0133 2.61247 57.3711 1.96865 C59.7282 1.325 62.0088 0.702337 62.3192 0.617218 L62.15 0 L61.9808 -0.617218 C61.6712 -0.532337 59.3918 0.089996 57.0339 0.733854 C54.6767 1.37753 52.2412 2.04267 51.6208 2.21278 L51.79 2.83 Z" fill="#fd872f"/><path transform="matrix(1 0 0 1 60.78 0.46)" d="M4.57 2.285 C4.57 3.54697 3.54697 4.57 2.285 4.57 C1.02303 4.57 0 3.54697 0 2.285 C0 1.02303 1.02303 0 2.285 0 C3.54697 0 4.57 1.02303 4.57 2.285 Z" fill="#fd872f"/><path transform="matrix(1 0 0 1 60.78 0.46)" d="M4.57 2.285 L3.47 2.285 C3.47 2.93946 2.93946 3.47 2.285 3.47 L2.285 4.57 L2.285 5.67 C4.15448 5.67 5.67 4.15448 5.67 2.285 L4.57 2.285 Z M2.285 4.57 L2.285 3.47 C1.63054 3.47 1.1 2.93946 1.1 2.285 L0 2.285 L-1.1 2.285 C-1.1 4.15448 0.415516 5.67 2.285 5.67 L2.285 4.57 Z M0 2.285 L1.1 2.285 C1.1 1.63054 1.63054 1.1 2.285 1.1 L2.285 0 L2.285 -1.1 C0.415516 -1.1 -1.1 0.415516 -1.1 2.285 L0 2.285 Z M2.285 0 L2.285 1.1 C2.93946 1.1 3.47 1.63054 3.47 2.285 L4.57 2.285 L5.67 2.285 C5.67 0.415516 4.15448 -1.1 2.285 -1.1 L2.285 0 Z" fill="#ffffff"/></svg>
          </div>
        </div>
        <div style={{ width: "287.84px", flexShrink: 0, borderRadius: "9.14px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8", display: "flex", flexDirection: "column", padding: "10.05px 11.88px 10.05px 11.88px", gap: "7.31px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ width: "265.91px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "9.14px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "27.42px", height: "27.42px", flexShrink: 0, borderRadius: "7.31px", background: "rgba(99, 192, 147, 0.12)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <Rocket size={13.7} strokeWidth={1.51} style={{ width: "13.71px", height: "13.71px", flexShrink: 0, color: "#63c093", display: "block" }} />
            </div>
            <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.83px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "41px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 500, color: "#222222" }}>Growth</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "91px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 400, color: "#666d80" }}>Revenue +10% / mo</p>
            </div>
            <div style={{ width: "29.24px", height: "16.45px", flexShrink: 0, borderRadius: "8.22px", background: "#222222", position: "relative" }}>
              <svg style={{ position: "absolute", left: "14.62px", top: "1.83px", width: "12.79px", height: "12.79px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="12.79" height="12.79" viewBox="0 0 12.79 12.79" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M12.79 6.395 C12.79 9.92686 9.92686 12.79 6.395 12.79 C2.86314 12.79 0 9.92686 0 6.395 C0 2.86314 2.86314 0 6.395 0 C9.92686 0 12.79 2.86314 12.79 6.395 Z" fill="#ffffff"/></svg>
            </div>
          </div>
          <div style={{ width: "265.91px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "66px", lineHeight: "21px", fontFamily: "'Geist'", fontSize: "16.45px", fontWeight: 500, color: "#202020", letterSpacing: "-0.02em" }}>$63,400</p>
            <div style={{ flexShrink: 0, borderRadius: "4.57px", background: "rgba(24, 177, 112, 0.1)", display: "flex", flexDirection: "row", padding: "1.37px 4.57px 1.37px 4.57px", gap: "1.83px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <svg style={{ width: "5.48px", height: "4.57px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="5.48" height="4.57" viewBox="0 0 5.48 4.57" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 4.57 L5.48 4.57 L2.74 0 L0 4.57 Z" fill="#18b170"/></svg>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "30px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.51px", fontWeight: 500, color: "#18b170" }}>+121%</p>
            </div>
            <div style={{ flex: "1 1 0", minWidth: 0, height: "1px", flexShrink: 0 }} />
            <svg style={{ width: "67.63px", height: "21.93px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="67.63" height="21.93" viewBox="0 0 67.63 21.93" fill="none" overflow="visible"><defs><linearGradient id="g11_t794" gradientUnits="userSpaceOnUse" x1="31.08" y1="0.00" x2="31.08" y2="19.19"><stop offset="0" stopColor="#63c093" stopOpacity="0.16"/><stop offset="1" stopColor="#63c093" stopOpacity="0"/></linearGradient></defs><path transform="matrix(1 0 0 1 0.91 2.74)" d="M0 17.24 C0.62 17.25 9.12 17.52 10.36 17.36 C11.6 17.2 19.47 14.91 20.72 14.53 C21.96 14.15 29.83 11.44 31.08 11.01 C32.32 10.58 40.19 7.77 41.43 7.34 C42.68 6.91 50.55 4.26 51.79 3.82 C53.03 3.38 61.53 0.23 62.15 0 L62.15 19.19 L0 19.19 L0 17.24 Z" fill="url(#g11_t794)"/><path transform="matrix(1 0 0 1 0.91 2.74)" d="M0.0103212 16.6001 C-0.343095 16.5944 -0.634216 16.8763 -0.639917 17.2297 C-0.645617 17.5831 -0.363737 17.8742 -0.0103212 17.8799 L0 17.24 L0.0103212 16.6001 Z M20.72 14.53 L20.9061 15.1423 L20.9075 15.1419 L20.72 14.53 Z M31.08 11.01 L31.2882 11.6152 L31.2897 11.6147 L31.08 11.01 Z M41.43 7.34 L41.2218 6.73481 L41.2203 6.73533 L41.43 7.34 Z M62.3726 0.600042 C62.704 0.477106 62.873 0.108798 62.75 -0.222596 C62.6271 -0.553991 62.2588 -0.722979 61.9274 -0.600042 L62.15 0 L62.3726 0.600042 Z M0 17.24 L-0.0103212 17.8799 C0.304777 17.885 2.55734 17.9545 4.93427 18.0036 C6.11433 18.028 7.31683 18.0472 8.30338 18.0502 C9.26747 18.0531 10.0804 18.0414 10.4419 17.9947 L10.36 17.36 L10.2781 16.7253 C10.0196 16.7586 9.30503 16.7732 8.30725 16.7702 C7.33192 16.7672 6.13817 16.7482 4.96073 16.7239 C2.62266 16.6755 0.315223 16.605 0.0103212 16.6001 L0 17.24 Z M10.36 17.36 L10.4419 17.9947 C10.8014 17.9484 11.5706 17.7623 12.4877 17.523 C13.425 17.2784 14.5684 16.9641 15.7093 16.6437 C17.9905 16.003 20.2752 15.3341 20.9061 15.1423 L20.72 14.53 L20.5339 13.9177 C19.9148 14.1059 17.6395 14.772 15.3632 15.4113 C14.2254 15.7309 13.0907 16.0428 12.1645 16.2845 C11.2182 16.5314 10.5386 16.6916 10.2781 16.7253 L10.36 17.36 Z M20.72 14.53 L20.9075 15.1419 C22.1613 14.7577 30.0487 12.0416 31.2882 11.6152 L31.08 11.01 L30.8718 10.4048 C29.6113 10.8384 21.7587 13.5423 20.5325 13.9181 L20.72 14.53 Z M31.08 11.01 L31.2897 11.6147 C31.9128 11.3986 34.1941 10.5872 36.4695 9.778 C38.7491 8.96723 41.0228 8.15859 41.6397 7.94467 L41.43 7.34 L41.2203 6.73533 C40.5972 6.95141 38.3159 7.76277 36.0405 8.572 C33.7609 9.38277 31.4872 10.1914 30.8703 10.4053 L31.08 11.01 Z M41.43 7.34 L41.6382 7.94519 C42.8742 7.52 50.7622 4.8638 52.004 4.42315 L51.79 3.82 L51.576 3.21685 C50.3378 3.6562 42.4858 6.3 41.2218 6.73481 L41.43 7.34 Z M51.79 3.82 L52.004 4.42315 C53.2497 3.98115 61.7564 0.828628 62.3726 0.600042 L62.15 0 L61.9274 -0.600042 C61.3036 -0.368628 52.8103 2.77885 51.576 3.21685 L51.79 3.82 Z" fill="#63c093"/><path transform="matrix(1 0 0 1 60.78 0.46)" d="M4.57 2.285 C4.57 3.54697 3.54697 4.57 2.285 4.57 C1.02303 4.57 0 3.54697 0 2.285 C0 1.02303 1.02303 0 2.285 0 C3.54697 0 4.57 1.02303 4.57 2.285 Z" fill="#63c093"/><path transform="matrix(1 0 0 1 60.78 0.46)" d="M4.57 2.285 L3.47 2.285 C3.47 2.93946 2.93946 3.47 2.285 3.47 L2.285 4.57 L2.285 5.67 C4.15448 5.67 5.67 4.15448 5.67 2.285 L4.57 2.285 Z M2.285 4.57 L2.285 3.47 C1.63054 3.47 1.1 2.93946 1.1 2.285 L0 2.285 L-1.1 2.285 C-1.1 4.15448 0.415516 5.67 2.285 5.67 L2.285 4.57 Z M0 2.285 L1.1 2.285 C1.1 1.63054 1.63054 1.1 2.285 1.1 L2.285 0 L2.285 -1.1 C0.415516 -1.1 -1.1 0.415516 -1.1 2.285 L0 2.285 Z M2.285 0 L2.285 1.1 C2.93946 1.1 3.47 1.63054 3.47 2.285 L4.57 2.285 L5.67 2.285 C5.67 0.415516 4.15448 -1.1 2.285 -1.1 L2.285 0 Z" fill="#ffffff"/></svg>
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
