"use client";
// Monthly net card (montra, Charts) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Ingot Icons.
import { useEffect, useRef } from "react";

export function MonthlyNetCard() {
  const fuRef = useRef<any>(null);
  useEffect(() => fuInteract(fuRef.current), []);
  return (
    <div ref={fuRef} data-fu="card" style={{ width: "324.4px", height: "262px", borderRadius: "10.97px", background: "#fefefe", boxShadow: "inset 0 0 0 0.91px #ededed", overflow: "hidden", position: "relative" }}>
      <p style={{ position: "absolute", left: "18.28px", top: "18.28px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "82px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.62px", fontWeight: 500, color: "#000000" }}>Monthly net</p>
      <p style={{ position: "absolute", left: "18.28px", top: "43.87px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "186px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#6b6b6b" }}>Revenue minus expenses, 2026</p>
      <div style={{ position: "absolute", left: "18.28px", top: "73.11px", width: "287.84px", height: "150px" }}>
        <svg style={{ position: "absolute", left: "31.07px", top: "23.76px", width: "256.77px", height: "1px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="256.77" height="1" viewBox="0 0 256.77 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0L256.7699890136719 0" fill="none" stroke="#efeff1" strokeWidth="1" strokeDasharray="2.740000009536743 2.740000009536743" strokeLinecap="butt"/></svg>
        <p style={{ position: "absolute", left: "2.76px", top: "16.76px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "21px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#6b6b6b" }}>$5K</p>
        <svg style={{ position: "absolute", left: "31.07px", top: "75px", width: "256.77px", height: "1px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="256.77" height="1" viewBox="0 0 256.77 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0L256.7699890136719 0" fill="none" stroke="#efeff1" strokeWidth="1" strokeDasharray="2.740000009536743 2.740000009536743" strokeLinecap="butt"/></svg>
        <p style={{ position: "absolute", left: "0px", top: "68px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "30px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#6b6b6b" }}>$2.5K</p>
        <div style={{ position: "absolute", left: "31.07px", top: "125.74px", width: "256.77px", height: "1px", background: "#e2e2e5" }} />
        <p style={{ position: "absolute", left: "8.76px", top: "119.24px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "15px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#6b6b6b" }}>$0</p>
        <div data-fu="bar" style={{ position: "absolute", left: "38.89px", top: "89.35px", width: "16.45px", height: "36.89px", borderRadius: "4.57px", background: "linear-gradient(180deg, #d6efe3 0%, #caeada 100%)", boxShadow: "inset 0 0 0 1px rgba(94, 182, 140, 0.22), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.35), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }}>
          <svg data-fu="plot" style={{ position: "absolute", left: "-36.89px", top: "0px", width: "123.72px", height: "36.89px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="123.72" height="36.89" viewBox="0 0 123.72 36.89" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 36.89 L0.452548 37.3425 L37.3425 0.452548 L36.89 0 L36.4375 -0.452548 L-0.452548 36.4375 L0 36.89 Z M4.57 36.89 L5.02255 37.3425 L41.9125 0.452548 L41.46 0 L41.0075 -0.452548 L4.11745 36.4375 L4.57 36.89 Z M9.14 36.89 L9.59255 37.3425 L46.4825 0.452548 L46.03 0 L45.5774 -0.452548 L8.68745 36.4375 L9.14 36.89 Z M13.71 36.89 L14.1625 37.3425 L51.0525 0.452548 L50.6 0 L50.1474 -0.452548 L13.2575 36.4375 L13.71 36.89 Z M18.28 36.89 L18.7325 37.3425 L55.6225 0.452548 L55.17 0 L54.7174 -0.452548 L17.8275 36.4375 L18.28 36.89 Z M22.85 36.89 L23.3025 37.3425 L60.1926 0.452548 L59.74 0 L59.2875 -0.452548 L22.3975 36.4375 L22.85 36.89 Z M27.42 36.89 L27.8725 37.3425 L64.7625 0.452548 L64.31 0 L63.8574 -0.452548 L26.9675 36.4375 L27.42 36.89 Z M31.99 36.89 L32.4425 37.3425 L69.3325 0.452548 L68.88 0 L68.4275 -0.452548 L31.5375 36.4375 L31.99 36.89 Z M36.56 36.89 L37.0126 37.3425 L73.9025 0.452548 L73.45 0 L72.9975 -0.452548 L36.1075 36.4375 L36.56 36.89 Z M41.13 36.89 L41.5826 37.3425 L78.4725 0.452548 L78.02 0 L77.5675 -0.452548 L40.6775 36.4375 L41.13 36.89 Z M45.7 36.89 L46.1525 37.3425 L83.0425 0.452548 L82.59 0 L82.1375 -0.452548 L45.2475 36.4375 L45.7 36.89 Z M50.27 36.89 L50.7225 37.3425 L87.6125 0.452548 L87.16 0 L86.7075 -0.452548 L49.8175 36.4375 L50.27 36.89 Z M54.84 36.89 L55.2925 37.3425 L92.1825 0.452548 L91.73 0 L91.2775 -0.452548 L54.3875 36.4375 L54.84 36.89 Z M59.41 36.89 L59.8625 37.3425 L96.7525 0.452548 L96.3 0 L95.8475 -0.452548 L58.9575 36.4375 L59.41 36.89 Z M63.98 36.89 L64.4325 37.3425 L101.323 0.452548 L100.87 0 L100.417 -0.452548 L63.5275 36.4375 L63.98 36.89 Z M68.55 36.89 L69.0025 37.3425 L105.893 0.452548 L105.44 0 L104.987 -0.452548 L68.0975 36.4375 L68.55 36.89 Z M73.12 36.89 L73.5725 37.3425 L110.463 0.452548 L110.01 0 L109.557 -0.452548 L72.6675 36.4375 L73.12 36.89 Z M77.69 36.89 L78.1425 37.3425 L115.033 0.452548 L114.58 0 L114.127 -0.452548 L77.2375 36.4375 L77.69 36.89 Z M82.26 36.89 L82.7125 37.3425 L119.603 0.452548 L119.15 0 L118.697 -0.452548 L81.8075 36.4375 L82.26 36.89 Z M86.83 36.89 L87.2825 37.3425 L124.173 0.452548 L123.72 0 L123.267 -0.452548 L86.3775 36.4375 L86.83 36.89 Z" fill="#ffffff" fillOpacity="0.6"/></svg>
        </div>
        <div data-fu="bar" style={{ position: "absolute", left: "70.99px", top: "83.2px", width: "16.45px", height: "43.04px", borderRadius: "4.57px", background: "linear-gradient(180deg, #d6efe3 0%, #caeada 100%)", boxShadow: "inset 0 0 0 1px rgba(94, 182, 140, 0.22), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.35), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }}>
          <svg data-fu="plot" style={{ position: "absolute", left: "-43.04px", top: "0px", width: "143.58px", height: "43.04px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="143.58" height="43.04" viewBox="0 0 143.58 43.04" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 43.04 L0.452548 43.4925 L43.4925 0.452548 L43.04 0 L42.5875 -0.452548 L-0.452548 42.5875 L0 43.04 Z M4.57 43.04 L5.02255 43.4925 L48.0625 0.452548 L47.61 0 L47.1575 -0.452548 L4.11745 42.5875 L4.57 43.04 Z M9.14 43.04 L9.59255 43.4925 L52.6325 0.452548 L52.18 0 L51.7275 -0.452548 L8.68745 42.5875 L9.14 43.04 Z M13.71 43.04 L14.1625 43.4925 L57.2025 0.452548 L56.75 0 L56.2975 -0.452548 L13.2575 42.5875 L13.71 43.04 Z M18.28 43.04 L18.7325 43.4925 L61.7725 0.452548 L61.32 0 L60.8675 -0.452548 L17.8275 42.5875 L18.28 43.04 Z M22.85 43.04 L23.3025 43.4925 L66.3425 0.452548 L65.89 0 L65.4375 -0.452548 L22.3975 42.5875 L22.85 43.04 Z M27.42 43.04 L27.8725 43.4925 L70.9125 0.452548 L70.46 0 L70.0075 -0.452548 L26.9675 42.5875 L27.42 43.04 Z M31.99 43.04 L32.4425 43.4925 L75.4825 0.452548 L75.03 0 L74.5775 -0.452548 L31.5375 42.5875 L31.99 43.04 Z M36.56 43.04 L37.0126 43.4925 L80.0525 0.452548 L79.6 0 L79.1475 -0.452548 L36.1075 42.5875 L36.56 43.04 Z M41.13 43.04 L41.5826 43.4925 L84.6225 0.452548 L84.17 0 L83.7175 -0.452548 L40.6775 42.5875 L41.13 43.04 Z M45.7 43.04 L46.1525 43.4925 L89.1925 0.452548 L88.74 0 L88.2875 -0.452548 L45.2475 42.5875 L45.7 43.04 Z M50.27 43.04 L50.7225 43.4925 L93.7625 0.452548 L93.31 0 L92.8575 -0.452548 L49.8175 42.5875 L50.27 43.04 Z M54.84 43.04 L55.2925 43.4925 L98.3325 0.452548 L97.88 0 L97.4275 -0.452548 L54.3875 42.5875 L54.84 43.04 Z M59.41 43.04 L59.8625 43.4925 L102.903 0.452548 L102.45 0 L101.997 -0.452548 L58.9575 42.5875 L59.41 43.04 Z M63.98 43.04 L64.4325 43.4925 L107.473 0.452548 L107.02 0 L106.567 -0.452548 L63.5275 42.5875 L63.98 43.04 Z M68.55 43.04 L69.0025 43.4925 L112.043 0.452548 L111.59 0 L111.137 -0.452548 L68.0975 42.5875 L68.55 43.04 Z M73.12 43.04 L73.5725 43.4925 L116.613 0.452548 L116.16 0 L115.707 -0.452548 L72.6675 42.5875 L73.12 43.04 Z M77.69 43.04 L78.1425 43.4925 L121.183 0.452548 L120.73 0 L120.277 -0.452548 L77.2375 42.5875 L77.69 43.04 Z M82.26 43.04 L82.7125 43.4925 L125.753 0.452548 L125.3 0 L124.847 -0.452548 L81.8075 42.5875 L82.26 43.04 Z M86.83 43.04 L87.2825 43.4925 L130.323 0.452548 L129.87 0 L129.417 -0.452548 L86.3775 42.5875 L86.83 43.04 Z M91.4 43.04 L91.8525 43.4925 L134.893 0.452548 L134.44 0 L133.987 -0.452548 L90.9475 42.5875 L91.4 43.04 Z M95.97 43.04 L96.4225 43.4925 L139.463 0.452548 L139.01 0 L138.557 -0.452548 L95.5175 42.5875 L95.97 43.04 Z M100.54 43.04 L100.993 43.4925 L144.033 0.452548 L143.58 0 L143.127 -0.452548 L100.087 42.5875 L100.54 43.04 Z" fill="#ffffff" fillOpacity="0.6"/></svg>
        </div>
        <div data-fu="bar" style={{ position: "absolute", left: "103.09px", top: "79.1px", width: "16.45px", height: "47.14px", borderRadius: "4.57px", background: "linear-gradient(180deg, #d6efe3 0%, #caeada 100%)", boxShadow: "inset 0 0 0 1px rgba(94, 182, 140, 0.22), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.35), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }}>
          <svg data-fu="plot" style={{ position: "absolute", left: "-47.14px", top: "0px", width: "156.82px", height: "47.14px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="156.82" height="47.14" viewBox="0 0 156.82 47.14" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 47.14 L0.452548 47.5925 L47.5925 0.452548 L47.14 0 L46.6875 -0.452548 L-0.452548 46.6875 L0 47.14 Z M4.57 47.14 L5.02255 47.5925 L52.1625 0.452548 L51.71 0 L51.2575 -0.452548 L4.11745 46.6875 L4.57 47.14 Z M9.14 47.14 L9.59255 47.5925 L56.7325 0.452548 L56.28 0 L55.8274 -0.452548 L8.68745 46.6875 L9.14 47.14 Z M13.71 47.14 L14.1625 47.5925 L61.3025 0.452548 L60.85 0 L60.3974 -0.452548 L13.2575 46.6875 L13.71 47.14 Z M18.28 47.14 L18.7325 47.5925 L65.8725 0.452548 L65.42 0 L64.9675 -0.452548 L17.8275 46.6875 L18.28 47.14 Z M22.85 47.14 L23.3025 47.5925 L70.4425 0.452548 L69.99 0 L69.5375 -0.452548 L22.3975 46.6875 L22.85 47.14 Z M27.42 47.14 L27.8725 47.5925 L75.0125 0.452548 L74.56 0 L74.1075 -0.452548 L26.9675 46.6875 L27.42 47.14 Z M31.99 47.14 L32.4425 47.5925 L79.5825 0.452548 L79.13 0 L78.6775 -0.452548 L31.5375 46.6875 L31.99 47.14 Z M36.56 47.14 L37.0126 47.5925 L84.1525 0.452548 L83.7 0 L83.2475 -0.452548 L36.1075 46.6875 L36.56 47.14 Z M41.13 47.14 L41.5826 47.5925 L88.7225 0.452548 L88.27 0 L87.8175 -0.452548 L40.6775 46.6875 L41.13 47.14 Z M45.7 47.14 L46.1525 47.5925 L93.2925 0.452548 L92.84 0 L92.3875 -0.452548 L45.2475 46.6875 L45.7 47.14 Z M50.27 47.14 L50.7225 47.5925 L97.8625 0.452548 L97.41 0 L96.9575 -0.452548 L49.8175 46.6875 L50.27 47.14 Z M54.84 47.14 L55.2925 47.5925 L102.433 0.452548 L101.98 0 L101.527 -0.452548 L54.3875 46.6875 L54.84 47.14 Z M59.41 47.14 L59.8625 47.5925 L107.003 0.452548 L106.55 0 L106.097 -0.452548 L58.9575 46.6875 L59.41 47.14 Z M63.98 47.14 L64.4325 47.5925 L111.573 0.452548 L111.12 0 L110.667 -0.452548 L63.5275 46.6875 L63.98 47.14 Z M68.55 47.14 L69.0025 47.5925 L116.143 0.452548 L115.69 0 L115.237 -0.452548 L68.0975 46.6875 L68.55 47.14 Z M73.12 47.14 L73.5725 47.5925 L120.713 0.452548 L120.26 0 L119.807 -0.452548 L72.6675 46.6875 L73.12 47.14 Z M77.69 47.14 L78.1425 47.5925 L125.283 0.452548 L124.83 0 L124.377 -0.452548 L77.2375 46.6875 L77.69 47.14 Z M82.26 47.14 L82.7125 47.5925 L129.853 0.452548 L129.4 0 L128.947 -0.452548 L81.8075 46.6875 L82.26 47.14 Z M86.83 47.14 L87.2825 47.5925 L134.423 0.452548 L133.97 0 L133.517 -0.452548 L86.3775 46.6875 L86.83 47.14 Z M91.4 47.14 L91.8525 47.5925 L138.993 0.452548 L138.54 0 L138.087 -0.452548 L90.9475 46.6875 L91.4 47.14 Z M95.97 47.14 L96.4225 47.5925 L143.563 0.452548 L143.11 0 L142.657 -0.452548 L95.5175 46.6875 L95.97 47.14 Z M100.54 47.14 L100.993 47.5925 L148.133 0.452548 L147.68 0 L147.227 -0.452548 L100.087 46.6875 L100.54 47.14 Z M105.11 47.14 L105.563 47.5925 L152.703 0.452548 L152.25 0 L151.797 -0.452548 L104.657 46.6875 L105.11 47.14 Z M109.68 47.14 L110.133 47.5925 L157.273 0.452548 L156.82 0 L156.367 -0.452548 L109.227 46.6875 L109.68 47.14 Z" fill="#ffffff" fillOpacity="0.6"/></svg>
        </div>
        <div data-fu="bar" style={{ position: "absolute", left: "135.18px", top: "77.05px", width: "16.45px", height: "49.19px", borderRadius: "4.57px", background: "linear-gradient(180deg, #d6efe3 0%, #caeada 100%)", boxShadow: "inset 0 0 0 1px rgba(94, 182, 140, 0.22), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.35), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }}>
          <svg data-fu="plot" style={{ position: "absolute", left: "-49.19px", top: "0px", width: "163.44px", height: "49.19px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="163.44" height="49.19" viewBox="0 0 163.44 49.19" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 49.19 L0.452548 49.6425 L49.6425 0.452548 L49.19 0 L48.7374 -0.452548 L-0.452548 48.7374 L0 49.19 Z M4.57 49.19 L5.02255 49.6425 L54.2125 0.452548 L53.76 0 L53.3074 -0.452548 L4.11745 48.7374 L4.57 49.19 Z M9.14 49.19 L9.59255 49.6425 L58.7826 0.452548 L58.33 0 L57.8775 -0.452548 L8.68745 48.7374 L9.14 49.19 Z M13.71 49.19 L14.1625 49.6425 L63.3526 0.452548 L62.9 0 L62.4475 -0.452548 L13.2575 48.7374 L13.71 49.19 Z M18.28 49.19 L18.7325 49.6425 L67.9225 0.452548 L67.47 0 L67.0175 -0.452548 L17.8275 48.7374 L18.28 49.19 Z M22.85 49.19 L23.3025 49.6425 L72.4925 0.452548 L72.04 0 L71.5875 -0.452548 L22.3975 48.7374 L22.85 49.19 Z M27.42 49.19 L27.8725 49.6425 L77.0625 0.452548 L76.61 0 L76.1575 -0.452548 L26.9675 48.7374 L27.42 49.19 Z M31.99 49.19 L32.4425 49.6425 L81.6325 0.452548 L81.18 0 L80.7275 -0.452548 L31.5375 48.7374 L31.99 49.19 Z M36.56 49.19 L37.0126 49.6425 L86.2025 0.452548 L85.75 0 L85.2975 -0.452548 L36.1075 48.7374 L36.56 49.19 Z M41.13 49.19 L41.5826 49.6425 L90.7725 0.452548 L90.32 0 L89.8675 -0.452548 L40.6775 48.7374 L41.13 49.19 Z M45.7 49.19 L46.1525 49.6425 L95.3425 0.452548 L94.89 0 L94.4375 -0.452548 L45.2475 48.7374 L45.7 49.19 Z M50.27 49.19 L50.7225 49.6425 L99.9125 0.452548 L99.46 0 L99.0075 -0.452548 L49.8175 48.7374 L50.27 49.19 Z M54.84 49.19 L55.2925 49.6425 L104.483 0.452548 L104.03 0 L103.577 -0.452548 L54.3875 48.7374 L54.84 49.19 Z M59.41 49.19 L59.8625 49.6425 L109.053 0.452548 L108.6 0 L108.147 -0.452548 L58.9575 48.7374 L59.41 49.19 Z M63.98 49.19 L64.4325 49.6425 L113.623 0.452548 L113.17 0 L112.717 -0.452548 L63.5275 48.7374 L63.98 49.19 Z M68.55 49.19 L69.0025 49.6425 L118.193 0.452548 L117.74 0 L117.287 -0.452548 L68.0975 48.7374 L68.55 49.19 Z M73.12 49.19 L73.5725 49.6425 L122.763 0.452548 L122.31 0 L121.857 -0.452548 L72.6675 48.7374 L73.12 49.19 Z M77.69 49.19 L78.1425 49.6425 L127.333 0.452548 L126.88 0 L126.427 -0.452548 L77.2375 48.7374 L77.69 49.19 Z M82.26 49.19 L82.7125 49.6425 L131.903 0.452548 L131.45 0 L130.997 -0.452548 L81.8075 48.7374 L82.26 49.19 Z M86.83 49.19 L87.2825 49.6425 L136.473 0.452548 L136.02 0 L135.567 -0.452548 L86.3775 48.7374 L86.83 49.19 Z M91.4 49.19 L91.8525 49.6425 L141.043 0.452548 L140.59 0 L140.137 -0.452548 L90.9475 48.7374 L91.4 49.19 Z M95.97 49.19 L96.4225 49.6425 L145.613 0.452548 L145.16 0 L144.707 -0.452548 L95.5175 48.7374 L95.97 49.19 Z M100.54 49.19 L100.993 49.6425 L150.183 0.452548 L149.73 0 L149.277 -0.452548 L100.087 48.7374 L100.54 49.19 Z M105.11 49.19 L105.563 49.6425 L154.753 0.452548 L154.3 0 L153.847 -0.452548 L104.657 48.7374 L105.11 49.19 Z M109.68 49.19 L110.133 49.6425 L159.323 0.452548 L158.87 0 L158.417 -0.452548 L109.227 48.7374 L109.68 49.19 Z M114.25 49.19 L114.703 49.6425 L163.893 0.452548 L163.44 0 L162.987 -0.452548 L113.797 48.7374 L114.25 49.19 Z" fill="#ffffff" fillOpacity="0.6"/></svg>
        </div>
        <div data-fu="bar" style={{ position: "absolute", left: "167.28px", top: "62.7px", width: "16.45px", height: "63.54px", borderRadius: "4.57px", background: "linear-gradient(180deg, #d6efe3 0%, #caeada 100%)", boxShadow: "inset 0 0 0 1px rgba(94, 182, 140, 0.22), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.35), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }}>
          <svg data-fu="plot" style={{ position: "absolute", left: "-63.54px", top: "0px", width: "205.21px", height: "63.54px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="205.21" height="63.54" viewBox="0 0 205.21 63.54" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 63.54 L0.452548 63.9925 L63.9925 0.452548 L63.54 0 L63.0875 -0.452548 L-0.452548 63.0875 L0 63.54 Z M4.57 63.54 L5.02255 63.9925 L68.5625 0.452548 L68.11 0 L67.6575 -0.452548 L4.11745 63.0875 L4.57 63.54 Z M9.14 63.54 L9.59255 63.9925 L73.1325 0.452548 L72.68 0 L72.2275 -0.452548 L8.68745 63.0875 L9.14 63.54 Z M13.71 63.54 L14.1625 63.9925 L77.7025 0.452548 L77.25 0 L76.7975 -0.452548 L13.2575 63.0875 L13.71 63.54 Z M18.28 63.54 L18.7325 63.9925 L82.2725 0.452548 L81.82 0 L81.3675 -0.452548 L17.8275 63.0875 L18.28 63.54 Z M22.85 63.54 L23.3025 63.9925 L86.8425 0.452548 L86.39 0 L85.9375 -0.452548 L22.3975 63.0875 L22.85 63.54 Z M27.42 63.54 L27.8725 63.9925 L91.4125 0.452548 L90.96 0 L90.5075 -0.452548 L26.9675 63.0875 L27.42 63.54 Z M31.99 63.54 L32.4425 63.9925 L95.9825 0.452548 L95.53 0 L95.0775 -0.452548 L31.5375 63.0875 L31.99 63.54 Z M36.56 63.54 L37.0126 63.9925 L100.553 0.452548 L100.1 0 L99.6475 -0.452548 L36.1075 63.0875 L36.56 63.54 Z M41.13 63.54 L41.5826 63.9925 L105.123 0.452548 L104.67 0 L104.217 -0.452548 L40.6775 63.0875 L41.13 63.54 Z M45.7 63.54 L46.1525 63.9925 L109.693 0.452548 L109.24 0 L108.787 -0.452548 L45.2475 63.0875 L45.7 63.54 Z M50.27 63.54 L50.7225 63.9925 L114.263 0.452548 L113.81 0 L113.357 -0.452548 L49.8175 63.0875 L50.27 63.54 Z M54.84 63.54 L55.2925 63.9925 L118.833 0.452548 L118.38 0 L117.927 -0.452548 L54.3875 63.0875 L54.84 63.54 Z M59.41 63.54 L59.8625 63.9925 L123.403 0.452548 L122.95 0 L122.497 -0.452548 L58.9575 63.0875 L59.41 63.54 Z M63.98 63.54 L64.4325 63.9925 L127.973 0.452548 L127.52 0 L127.067 -0.452548 L63.5275 63.0875 L63.98 63.54 Z M68.55 63.54 L69.0025 63.9925 L132.543 0.452548 L132.09 0 L131.637 -0.452548 L68.0975 63.0875 L68.55 63.54 Z M73.12 63.54 L73.5725 63.9925 L137.113 0.452548 L136.66 0 L136.207 -0.452548 L72.6675 63.0875 L73.12 63.54 Z M77.69 63.54 L78.1425 63.9925 L141.683 0.452548 L141.23 0 L140.777 -0.452548 L77.2375 63.0875 L77.69 63.54 Z M82.26 63.54 L82.7125 63.9925 L146.253 0.452548 L145.8 0 L145.347 -0.452548 L81.8075 63.0875 L82.26 63.54 Z M86.83 63.54 L87.2825 63.9925 L150.823 0.452548 L150.37 0 L149.917 -0.452548 L86.3775 63.0875 L86.83 63.54 Z M91.4 63.54 L91.8525 63.9925 L155.393 0.452548 L154.94 0 L154.487 -0.452548 L90.9475 63.0875 L91.4 63.54 Z M95.97 63.54 L96.4225 63.9925 L159.963 0.452548 L159.51 0 L159.057 -0.452548 L95.5175 63.0875 L95.97 63.54 Z M100.54 63.54 L100.993 63.9925 L164.533 0.452548 L164.08 0 L163.627 -0.452548 L100.087 63.0875 L100.54 63.54 Z M105.11 63.54 L105.563 63.9925 L169.103 0.452548 L168.65 0 L168.197 -0.452548 L104.657 63.0875 L105.11 63.54 Z M109.68 63.54 L110.133 63.9925 L173.673 0.452548 L173.22 0 L172.767 -0.452548 L109.227 63.0875 L109.68 63.54 Z M114.25 63.54 L114.703 63.9925 L178.243 0.452548 L177.79 0 L177.337 -0.452548 L113.797 63.0875 L114.25 63.54 Z M118.82 63.54 L119.273 63.9925 L182.813 0.452548 L182.36 0 L181.907 -0.452548 L118.367 63.0875 L118.82 63.54 Z M123.39 63.54 L123.843 63.9925 L187.383 0.452548 L186.93 0 L186.477 -0.452548 L122.937 63.0875 L123.39 63.54 Z M127.96 63.54 L128.413 63.9925 L191.953 0.452548 L191.5 0 L191.047 -0.452548 L127.507 63.0875 L127.96 63.54 Z M132.53 63.54 L132.983 63.9925 L196.523 0.452548 L196.07 0 L195.617 -0.452548 L132.077 63.0875 L132.53 63.54 Z M137.1 63.54 L137.553 63.9925 L201.093 0.452548 L200.64 0 L200.187 -0.452548 L136.647 63.0875 L137.1 63.54 Z M141.67 63.54 L142.123 63.9925 L205.663 0.452548 L205.21 0 L204.757 -0.452548 L141.217 63.0875 L141.67 63.54 Z" fill="#ffffff" fillOpacity="0.6"/></svg>
        </div>
        <div data-fu="bar" style={{ position: "absolute", left: "199.37px", top: "58.6px", width: "16.45px", height: "67.64px", borderRadius: "4.57px", background: "linear-gradient(180deg, #d6efe3 0%, #caeada 100%)", boxShadow: "inset 0 0 0 1px rgba(94, 182, 140, 0.22), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.35), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }}>
          <svg data-fu="plot" style={{ position: "absolute", left: "-67.64px", top: "0px", width: "218.45px", height: "67.64px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="218.45" height="67.64" viewBox="0 0 218.45 67.64" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 67.64 L0.452548 68.0925 L68.0925 0.452548 L67.64 0 L67.1875 -0.452548 L-0.452548 67.1875 L0 67.64 Z M4.57 67.64 L5.02255 68.0925 L72.6625 0.452548 L72.21 0 L71.7575 -0.452548 L4.11745 67.1875 L4.57 67.64 Z M9.14 67.64 L9.59255 68.0925 L77.2325 0.452548 L76.78 0 L76.3275 -0.452548 L8.68745 67.1875 L9.14 67.64 Z M13.71 67.64 L14.1625 68.0925 L81.8025 0.452548 L81.35 0 L80.8975 -0.452548 L13.2575 67.1875 L13.71 67.64 Z M18.28 67.64 L18.7325 68.0925 L86.3725 0.452548 L85.92 0 L85.4675 -0.452548 L17.8275 67.1875 L18.28 67.64 Z M22.85 67.64 L23.3025 68.0925 L90.9425 0.452548 L90.49 0 L90.0375 -0.452548 L22.3975 67.1875 L22.85 67.64 Z M27.42 67.64 L27.8725 68.0925 L95.5125 0.452548 L95.06 0 L94.6075 -0.452548 L26.9675 67.1875 L27.42 67.64 Z M31.99 67.64 L32.4425 68.0925 L100.083 0.452548 L99.63 0 L99.1775 -0.452548 L31.5375 67.1875 L31.99 67.64 Z M36.56 67.64 L37.0126 68.0925 L104.653 0.452548 L104.2 0 L103.747 -0.452548 L36.1075 67.1875 L36.56 67.64 Z M41.13 67.64 L41.5826 68.0925 L109.223 0.452548 L108.77 0 L108.317 -0.452548 L40.6775 67.1875 L41.13 67.64 Z M45.7 67.64 L46.1525 68.0925 L113.793 0.452548 L113.34 0 L112.887 -0.452548 L45.2475 67.1875 L45.7 67.64 Z M50.27 67.64 L50.7225 68.0925 L118.363 0.452548 L117.91 0 L117.457 -0.452548 L49.8175 67.1875 L50.27 67.64 Z M54.84 67.64 L55.2925 68.0925 L122.933 0.452548 L122.48 0 L122.027 -0.452548 L54.3875 67.1875 L54.84 67.64 Z M59.41 67.64 L59.8625 68.0925 L127.503 0.452548 L127.05 0 L126.597 -0.452548 L58.9575 67.1875 L59.41 67.64 Z M63.98 67.64 L64.4325 68.0925 L132.073 0.452548 L131.62 0 L131.167 -0.452548 L63.5275 67.1875 L63.98 67.64 Z M68.55 67.64 L69.0025 68.0925 L136.643 0.452548 L136.19 0 L135.737 -0.452548 L68.0975 67.1875 L68.55 67.64 Z M73.12 67.64 L73.5725 68.0925 L141.213 0.452548 L140.76 0 L140.307 -0.452548 L72.6675 67.1875 L73.12 67.64 Z M77.69 67.64 L78.1425 68.0925 L145.783 0.452548 L145.33 0 L144.877 -0.452548 L77.2375 67.1875 L77.69 67.64 Z M82.26 67.64 L82.7125 68.0925 L150.353 0.452548 L149.9 0 L149.447 -0.452548 L81.8075 67.1875 L82.26 67.64 Z M86.83 67.64 L87.2825 68.0925 L154.923 0.452548 L154.47 0 L154.017 -0.452548 L86.3775 67.1875 L86.83 67.64 Z M91.4 67.64 L91.8525 68.0925 L159.493 0.452548 L159.04 0 L158.587 -0.452548 L90.9475 67.1875 L91.4 67.64 Z M95.97 67.64 L96.4225 68.0925 L164.063 0.452548 L163.61 0 L163.157 -0.452548 L95.5175 67.1875 L95.97 67.64 Z M100.54 67.64 L100.993 68.0925 L168.633 0.452548 L168.18 0 L167.727 -0.452548 L100.087 67.1875 L100.54 67.64 Z M105.11 67.64 L105.563 68.0925 L173.203 0.452548 L172.75 0 L172.297 -0.452548 L104.657 67.1875 L105.11 67.64 Z M109.68 67.64 L110.133 68.0925 L177.773 0.452548 L177.32 0 L176.867 -0.452548 L109.227 67.1875 L109.68 67.64 Z M114.25 67.64 L114.703 68.0925 L182.343 0.452548 L181.89 0 L181.437 -0.452548 L113.797 67.1875 L114.25 67.64 Z M118.82 67.64 L119.273 68.0925 L186.913 0.452548 L186.46 0 L186.007 -0.452548 L118.367 67.1875 L118.82 67.64 Z M123.39 67.64 L123.843 68.0925 L191.483 0.452548 L191.03 0 L190.577 -0.452548 L122.937 67.1875 L123.39 67.64 Z M127.96 67.64 L128.413 68.0925 L196.053 0.452548 L195.6 0 L195.147 -0.452548 L127.507 67.1875 L127.96 67.64 Z M132.53 67.64 L132.983 68.0925 L200.623 0.452548 L200.17 0 L199.717 -0.452548 L132.077 67.1875 L132.53 67.64 Z M137.1 67.64 L137.553 68.0925 L205.193 0.452548 L204.74 0 L204.287 -0.452548 L136.647 67.1875 L137.1 67.64 Z M141.67 67.64 L142.123 68.0925 L209.763 0.452548 L209.31 0 L208.857 -0.452548 L141.217 67.1875 L141.67 67.64 Z M146.24 67.64 L146.693 68.0925 L214.333 0.452548 L213.88 0 L213.427 -0.452548 L145.787 67.1875 L146.24 67.64 Z M150.81 67.64 L151.263 68.0925 L218.903 0.452548 L218.45 0 L217.997 -0.452548 L150.357 67.1875 L150.81 67.64 Z" fill="#ffffff" fillOpacity="0.6"/></svg>
        </div>
        <div data-fu="bar" style={{ position: "absolute", left: "231.47px", top: "39.54px", width: "16.45px", height: "86.7px", borderRadius: "4.57px", background: "linear-gradient(180deg, #77c8a1 0%, #63c093 100%)", boxShadow: "inset 0 0 0 1px rgba(77, 150, 115, 0.38), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.18), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
        <div data-fu="bar" style={{ position: "absolute", left: "263.57px", top: "76.23px", width: "16.45px", height: "50.01px", borderRadius: "4.57px", background: "linear-gradient(180deg, #d6efe3 0%, #caeada 100%)", boxShadow: "inset 0 0 0 1px rgba(94, 182, 140, 0.22), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.35), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }}>
          <svg data-fu="plot" style={{ position: "absolute", left: "-50.01px", top: "0px", width: "164.26px", height: "50.01px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="164.26" height="50.01" viewBox="0 0 164.26 50.01" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 50.01 L0.452548 50.4625 L50.4625 0.452548 L50.01 0 L49.5574 -0.452548 L-0.452548 49.5574 L0 50.01 Z M4.57 50.01 L5.02255 50.4625 L55.0326 0.452548 L54.58 0 L54.1275 -0.452548 L4.11745 49.5574 L4.57 50.01 Z M9.14 50.01 L9.59255 50.4625 L59.6026 0.452548 L59.15 0 L58.6975 -0.452548 L8.68745 49.5574 L9.14 50.01 Z M13.71 50.01 L14.1625 50.4625 L64.1725 0.452548 L63.72 0 L63.2675 -0.452548 L13.2575 49.5574 L13.71 50.01 Z M18.28 50.01 L18.7325 50.4625 L68.7425 0.452548 L68.29 0 L67.8375 -0.452548 L17.8275 49.5574 L18.28 50.01 Z M22.85 50.01 L23.3025 50.4625 L73.3125 0.452548 L72.86 0 L72.4075 -0.452548 L22.3975 49.5574 L22.85 50.01 Z M27.42 50.01 L27.8725 50.4625 L77.8825 0.452548 L77.43 0 L76.9775 -0.452548 L26.9675 49.5574 L27.42 50.01 Z M31.99 50.01 L32.4425 50.4625 L82.4525 0.452548 L82 0 L81.5475 -0.452548 L31.5375 49.5574 L31.99 50.01 Z M36.56 50.01 L37.0126 50.4625 L87.0225 0.452548 L86.57 0 L86.1175 -0.452548 L36.1075 49.5574 L36.56 50.01 Z M41.13 50.01 L41.5826 50.4625 L91.5925 0.452548 L91.14 0 L90.6875 -0.452548 L40.6775 49.5574 L41.13 50.01 Z M45.7 50.01 L46.1525 50.4625 L96.1625 0.452548 L95.71 0 L95.2575 -0.452548 L45.2475 49.5574 L45.7 50.01 Z M50.27 50.01 L50.7225 50.4625 L100.733 0.452548 L100.28 0 L99.8275 -0.452548 L49.8175 49.5574 L50.27 50.01 Z M54.84 50.01 L55.2925 50.4625 L105.303 0.452548 L104.85 0 L104.397 -0.452548 L54.3875 49.5574 L54.84 50.01 Z M59.41 50.01 L59.8625 50.4625 L109.873 0.452548 L109.42 0 L108.967 -0.452548 L58.9575 49.5574 L59.41 50.01 Z M63.98 50.01 L64.4325 50.4625 L114.443 0.452548 L113.99 0 L113.537 -0.452548 L63.5275 49.5574 L63.98 50.01 Z M68.55 50.01 L69.0025 50.4625 L119.013 0.452548 L118.56 0 L118.107 -0.452548 L68.0975 49.5574 L68.55 50.01 Z M73.12 50.01 L73.5725 50.4625 L123.583 0.452548 L123.13 0 L122.677 -0.452548 L72.6675 49.5574 L73.12 50.01 Z M77.69 50.01 L78.1425 50.4625 L128.153 0.452548 L127.7 0 L127.247 -0.452548 L77.2375 49.5574 L77.69 50.01 Z M82.26 50.01 L82.7125 50.4625 L132.723 0.452548 L132.27 0 L131.817 -0.452548 L81.8075 49.5574 L82.26 50.01 Z M86.83 50.01 L87.2825 50.4625 L137.293 0.452548 L136.84 0 L136.387 -0.452548 L86.3775 49.5574 L86.83 50.01 Z M91.4 50.01 L91.8525 50.4625 L141.863 0.452548 L141.41 0 L140.957 -0.452548 L90.9475 49.5574 L91.4 50.01 Z M95.97 50.01 L96.4225 50.4625 L146.433 0.452548 L145.98 0 L145.527 -0.452548 L95.5175 49.5574 L95.97 50.01 Z M100.54 50.01 L100.993 50.4625 L151.003 0.452548 L150.55 0 L150.097 -0.452548 L100.087 49.5574 L100.54 50.01 Z M105.11 50.01 L105.563 50.4625 L155.573 0.452548 L155.12 0 L154.667 -0.452548 L104.657 49.5574 L105.11 50.01 Z M109.68 50.01 L110.133 50.4625 L160.143 0.452548 L159.69 0 L159.237 -0.452548 L109.227 49.5574 L109.68 50.01 Z M114.25 50.01 L114.703 50.4625 L164.713 0.452548 L164.26 0 L163.807 -0.452548 L113.797 49.5574 L114.25 50.01 Z" fill="#ffffff" fillOpacity="0.6"/></svg>
        </div>
        <p style={{ position: "absolute", left: "43.62px", top: "135.38px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "7px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#6b6b6b" }}>J</p>
        <p style={{ position: "absolute", left: "75.71px", top: "135.38px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "7px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#6b6b6b" }}>F</p>
        <p style={{ position: "absolute", left: "106.31px", top: "135.38px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "10px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#6b6b6b" }}>M</p>
        <p style={{ position: "absolute", left: "139.41px", top: "135.38px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "8px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#6b6b6b" }}>A</p>
        <p style={{ position: "absolute", left: "170.5px", top: "135.38px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "10px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#6b6b6b" }}>M</p>
        <p style={{ position: "absolute", left: "204.1px", top: "135.38px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "7px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#6b6b6b" }}>J</p>
        <p style={{ position: "absolute", left: "236.2px", top: "135.38px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "7px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#1f1f22" }}>J</p>
        <p style={{ position: "absolute", left: "267.79px", top: "135.38px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "8px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#6b6b6b" }}>A</p>
        <div style={{ position: "absolute", left: "204.3px", top: "15.57px", width: "70.8px", height: "18.48px", borderRadius: "5.48px", background: "#1f1f22", boxShadow: "0px 1.83px 5.48px 0px rgba(0, 0, 0, 0.12)", display: "flex", flexDirection: "row", padding: "2.74px 6.4px 2.74px 6.4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "58px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 500, color: "#ffffff" }}>Jul +$4,230</p>
        </div>
        <svg style={{ position: "absolute", left: "236.04px", top: "33.55px", width: "7.31px", height: "3.66px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="7.31" height="3.66" viewBox="0 0 7.31 3.66" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0 L7.31 0 L3.66 3.66 L0 0 Z" fill="#1f1f22"/></svg>
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
