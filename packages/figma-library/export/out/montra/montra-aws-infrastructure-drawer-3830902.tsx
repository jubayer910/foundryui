"use client";
// AWS Infrastructure drawer (montra, Drawers) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Ingot Icons.
import { useEffect, useRef } from "react";
import { Check, Cloud, Copy, Dots, Download, File, Repeat, X } from "ingotui-icons/react/stroke-rounded";

export function AWSInfrastructureDrawer() {
  const fuRef = useRef<any>(null);
  useEffect(() => fuInteract(fuRef.current), []);
  return (
    <div ref={fuRef} style={{ width: "392.97px", height: "981.07px", borderRadius: "14.62px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8, 0px 18.28px 40.21px -10.97px rgba(13, 13, 18, 0.12), 0px 0.91px 1.83px 0px rgba(13, 13, 18, 0.05)", overflow: "hidden", display: "flex", flexDirection: "column", padding: "0.91px 0.91px 0.91px 0.91px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
      <div style={{ alignSelf: "stretch", flexShrink: 0, boxShadow: "inset 0 -0.91px 0 0 #ededed", display: "flex", flexDirection: "row", padding: "14.62px 18.28px 15.53px 18.28px", gap: "9.14px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ width: "31.07px", height: "31.07px", flexShrink: 0, borderRadius: "6.21px", background: "linear-gradient(180deg, #ecb615 0%, #ffe9a7 100%)", boxShadow: "0px 0.91px 1.83px 0px rgba(0, 0, 0, 0.08)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <Cloud size={14.9} style={{ width: "14.91px", height: "14.91px", flexShrink: 0, color: "#ffffff", display: "block" }} />
        </div>
        <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.74px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "139px", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.54px", fontWeight: 500, color: "#202020" }}>AWS Infrastructure</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "138px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#6b6b6b" }}>PAY-2291 · Card payment</p>
        </div>
        <div data-fu="btn" style={{ width: "27.42px", height: "27.42px", flexShrink: 0, borderRadius: "6.4px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8, 0px 3.11px 3.11px 0px rgba(0, 0, 0, 0.05), inset 0px 3.11px 3.11px 0px rgba(255, 255, 255, 0.29)", display: "flex", flexDirection: "row", padding: "0.91px 0.91px 0.91px 0.91px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <Dots size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#686765", display: "block" }} />
        </div>
        <div style={{ width: "27.42px", height: "27.42px", flexShrink: 0, borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8", display: "flex", flexDirection: "row", padding: "0.91px 0.91px 0.91px 0.91px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <X size={12.8} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
        </div>
      </div>
      <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", padding: "16.45px 18.28px 16.45px 18.28px", gap: "16.45px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ alignSelf: "stretch", flexShrink: 0, borderRadius: "10.97px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8", display: "flex", flexDirection: "column", padding: "13.7px 13.7px 13.7px 13.7px", gap: "5.48px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "104px", lineHeight: "31px", fontFamily: "'Geist'", fontSize: "23.76px", fontWeight: 500, color: "#202020", letterSpacing: "-0.02em" }}>-$620.00</p>
            <div style={{ height: "23.3px", flexShrink: 0, borderRadius: "999px", background: "#e7fff9", display: "flex", flexDirection: "row", padding: "0px 9.14px 0px 9.14px", gap: "3.66px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <svg style={{ width: "7.31px", height: "7.31px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="7.31" height="7.31" viewBox="0 0 7.31 7.31" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M7.31 3.655 C7.31 5.6736 5.6736 7.31 3.655 7.31 C1.6364 7.31 0 5.6736 0 3.655 C0 1.6364 1.6364 0 3.655 0 C5.6736 0 7.31 1.6364 7.31 3.655 Z" fill="#00a77d"/></svg>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "25px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#00a77d" }}>Sent</p>
            </div>
          </div>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "241px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#6b6b6b" }}>Monthly usage · us-east-1 · Aug 08, 2026 · 09:12</p>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "7.31px 0px 0px 0px", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "112px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222" }}>Last 6 AWS payments</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "69px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#fd872f" }}>+2.6% vs July</p>
          </div>
          <div style={{ width: "330.82px", height: "71.28px", flexShrink: 0, position: "relative" }}>
            <div data-fu="bar" style={{ position: "absolute", left: "15.69px", top: "14.94px", width: "23.76px", height: "38.06px", borderRadius: "4.57px", background: "linear-gradient(180deg, #faecc2 0%, #f9e6af 100%)", boxShadow: "inset 0 0 0 1px rgba(224, 173, 20, 0.22), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.35), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }}>
              <svg data-fu="plot" style={{ position: "absolute", left: "-38.06px", top: "0px", width: "134.03px", height: "38.06px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="134.03" height="38.06" viewBox="0 0 134.03 38.06" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 38.06 L0.452548 38.5126 L38.5126 0.452548 L38.06 0 L37.6075 -0.452548 L-0.452548 37.6075 L0 38.06 Z M4.57 38.06 L5.02255 38.5126 L43.0826 0.452548 L42.63 0 L42.1775 -0.452548 L4.11745 37.6075 L4.57 38.06 Z M9.14 38.06 L9.59255 38.5126 L47.6525 0.452548 L47.2 0 L46.7475 -0.452548 L8.68745 37.6075 L9.14 38.06 Z M13.71 38.06 L14.1625 38.5126 L52.2225 0.452548 L51.77 0 L51.3175 -0.452548 L13.2575 37.6075 L13.71 38.06 Z M18.28 38.06 L18.7325 38.5126 L56.7925 0.452548 L56.34 0 L55.8875 -0.452548 L17.8275 37.6075 L18.28 38.06 Z M22.85 38.06 L23.3025 38.5126 L61.3625 0.452548 L60.91 0 L60.4575 -0.452548 L22.3975 37.6075 L22.85 38.06 Z M27.42 38.06 L27.8725 38.5126 L65.9325 0.452548 L65.48 0 L65.0275 -0.452548 L26.9675 37.6075 L27.42 38.06 Z M31.99 38.06 L32.4425 38.5126 L70.5025 0.452548 L70.05 0 L69.5975 -0.452548 L31.5375 37.6075 L31.99 38.06 Z M36.56 38.06 L37.0126 38.5126 L75.0725 0.452548 L74.62 0 L74.1675 -0.452548 L36.1075 37.6075 L36.56 38.06 Z M41.13 38.06 L41.5826 38.5126 L79.6425 0.452548 L79.19 0 L78.7375 -0.452548 L40.6775 37.6075 L41.13 38.06 Z M45.7 38.06 L46.1525 38.5126 L84.2125 0.452548 L83.76 0 L83.3075 -0.452548 L45.2475 37.6075 L45.7 38.06 Z M50.27 38.06 L50.7225 38.5126 L88.7825 0.452548 L88.33 0 L87.8775 -0.452548 L49.8175 37.6075 L50.27 38.06 Z M54.84 38.06 L55.2925 38.5126 L93.3525 0.452548 L92.9 0 L92.4475 -0.452548 L54.3875 37.6075 L54.84 38.06 Z M59.41 38.06 L59.8625 38.5126 L97.9225 0.452548 L97.47 0 L97.0175 -0.452548 L58.9575 37.6075 L59.41 38.06 Z M63.98 38.06 L64.4325 38.5126 L102.493 0.452548 L102.04 0 L101.587 -0.452548 L63.5275 37.6075 L63.98 38.06 Z M68.55 38.06 L69.0025 38.5126 L107.063 0.452548 L106.61 0 L106.157 -0.452548 L68.0975 37.6075 L68.55 38.06 Z M73.12 38.06 L73.5725 38.5126 L111.633 0.452548 L111.18 0 L110.727 -0.452548 L72.6675 37.6075 L73.12 38.06 Z M77.69 38.06 L78.1425 38.5126 L116.203 0.452548 L115.75 0 L115.297 -0.452548 L77.2375 37.6075 L77.69 38.06 Z M82.26 38.06 L82.7125 38.5126 L120.773 0.452548 L120.32 0 L119.867 -0.452548 L81.8075 37.6075 L82.26 38.06 Z M86.83 38.06 L87.2825 38.5126 L125.343 0.452548 L124.89 0 L124.437 -0.452548 L86.3775 37.6075 L86.83 38.06 Z M91.4 38.06 L91.8525 38.5126 L129.913 0.452548 L129.46 0 L129.007 -0.452548 L90.9475 37.6075 L91.4 38.06 Z M95.97 38.06 L96.4225 38.5126 L134.483 0.452548 L134.03 0 L133.577 -0.452548 L95.5175 37.6075 L95.97 38.06 Z" fill="#ffffff" fillOpacity="0.6"/></svg>
            </div>
            <div data-fu="bar" style={{ position: "absolute", left: "70.82px", top: "12.47px", width: "23.76px", height: "40.53px", borderRadius: "4.57px", background: "linear-gradient(180deg, #faecc2 0%, #f9e6af 100%)", boxShadow: "inset 0 0 0 1px rgba(224, 173, 20, 0.22), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.35), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }}>
              <svg data-fu="plot" style={{ position: "absolute", left: "-40.53px", top: "0px", width: "141.07px", height: "40.53px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="141.07" height="40.53" viewBox="0 0 141.07 40.53" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 40.53 L0.452548 40.9825 L40.9825 0.452548 L40.53 0 L40.0774 -0.452548 L-0.452548 40.0774 L0 40.53 Z M4.57 40.53 L5.02255 40.9825 L45.5525 0.452548 L45.1 0 L44.6474 -0.452548 L4.11745 40.0774 L4.57 40.53 Z M9.14 40.53 L9.59255 40.9825 L50.1225 0.452548 L49.67 0 L49.2174 -0.452548 L8.68745 40.0774 L9.14 40.53 Z M13.71 40.53 L14.1625 40.9825 L54.6926 0.452548 L54.24 0 L53.7875 -0.452548 L13.2575 40.0774 L13.71 40.53 Z M18.28 40.53 L18.7325 40.9825 L59.2626 0.452548 L58.81 0 L58.3575 -0.452548 L17.8275 40.0774 L18.28 40.53 Z M22.85 40.53 L23.3025 40.9825 L63.8326 0.452548 L63.38 0 L62.9275 -0.452548 L22.3975 40.0774 L22.85 40.53 Z M27.42 40.53 L27.8725 40.9825 L68.4025 0.452548 L67.95 0 L67.4975 -0.452548 L26.9675 40.0774 L27.42 40.53 Z M31.99 40.53 L32.4425 40.9825 L72.9725 0.452548 L72.52 0 L72.0675 -0.452548 L31.5375 40.0774 L31.99 40.53 Z M36.56 40.53 L37.0126 40.9825 L77.5425 0.452548 L77.09 0 L76.6375 -0.452548 L36.1075 40.0774 L36.56 40.53 Z M41.13 40.53 L41.5826 40.9825 L82.1125 0.452548 L81.66 0 L81.2075 -0.452548 L40.6775 40.0774 L41.13 40.53 Z M45.7 40.53 L46.1525 40.9825 L86.6825 0.452548 L86.23 0 L85.7775 -0.452548 L45.2475 40.0774 L45.7 40.53 Z M50.27 40.53 L50.7225 40.9825 L91.2525 0.452548 L90.8 0 L90.3475 -0.452548 L49.8175 40.0774 L50.27 40.53 Z M54.84 40.53 L55.2925 40.9825 L95.8225 0.452548 L95.37 0 L94.9175 -0.452548 L54.3875 40.0774 L54.84 40.53 Z M59.41 40.53 L59.8625 40.9825 L100.393 0.452548 L99.94 0 L99.4875 -0.452548 L58.9575 40.0774 L59.41 40.53 Z M63.98 40.53 L64.4325 40.9825 L104.963 0.452548 L104.51 0 L104.057 -0.452548 L63.5275 40.0774 L63.98 40.53 Z M68.55 40.53 L69.0025 40.9825 L109.533 0.452548 L109.08 0 L108.627 -0.452548 L68.0975 40.0774 L68.55 40.53 Z M73.12 40.53 L73.5725 40.9825 L114.103 0.452548 L113.65 0 L113.197 -0.452548 L72.6675 40.0774 L73.12 40.53 Z M77.69 40.53 L78.1425 40.9825 L118.673 0.452548 L118.22 0 L117.767 -0.452548 L77.2375 40.0774 L77.69 40.53 Z M82.26 40.53 L82.7125 40.9825 L123.243 0.452548 L122.79 0 L122.337 -0.452548 L81.8075 40.0774 L82.26 40.53 Z M86.83 40.53 L87.2825 40.9825 L127.813 0.452548 L127.36 0 L126.907 -0.452548 L86.3775 40.0774 L86.83 40.53 Z M91.4 40.53 L91.8525 40.9825 L132.383 0.452548 L131.93 0 L131.477 -0.452548 L90.9475 40.0774 L91.4 40.53 Z M95.97 40.53 L96.4225 40.9825 L136.953 0.452548 L136.5 0 L136.047 -0.452548 L95.5175 40.0774 L95.97 40.53 Z M100.54 40.53 L100.993 40.9825 L141.523 0.452548 L141.07 0 L140.617 -0.452548 L100.087 40.0774 L100.54 40.53 Z" fill="#ffffff" fillOpacity="0.6"/></svg>
            </div>
            <div data-fu="bar" style={{ position: "absolute", left: "125.96px", top: "10.85px", width: "23.76px", height: "42.15px", borderRadius: "4.57px", background: "linear-gradient(180deg, #faecc2 0%, #f9e6af 100%)", boxShadow: "inset 0 0 0 1px rgba(224, 173, 20, 0.22), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.35), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }}>
              <svg data-fu="plot" style={{ position: "absolute", left: "-42.15px", top: "0px", width: "147.26px", height: "42.15px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="147.26" height="42.15" viewBox="0 0 147.26 42.15" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 42.15 L0.452548 42.6026 L42.6026 0.452548 L42.15 0 L41.6975 -0.452548 L-0.452548 41.6975 L0 42.15 Z M4.57 42.15 L5.02255 42.6026 L47.1726 0.452548 L46.72 0 L46.2675 -0.452548 L4.11745 41.6975 L4.57 42.15 Z M9.14 42.15 L9.59255 42.6026 L51.7425 0.452548 L51.29 0 L50.8375 -0.452548 L8.68745 41.6975 L9.14 42.15 Z M13.71 42.15 L14.1625 42.6026 L56.3125 0.452548 L55.86 0 L55.4075 -0.452548 L13.2575 41.6975 L13.71 42.15 Z M18.28 42.15 L18.7325 42.6026 L60.8825 0.452548 L60.43 0 L59.9775 -0.452548 L17.8275 41.6975 L18.28 42.15 Z M22.85 42.15 L23.3025 42.6026 L65.4525 0.452548 L65 0 L64.5475 -0.452548 L22.3975 41.6975 L22.85 42.15 Z M27.42 42.15 L27.8725 42.6026 L70.0225 0.452548 L69.57 0 L69.1175 -0.452548 L26.9675 41.6975 L27.42 42.15 Z M31.99 42.15 L32.4425 42.6026 L74.5925 0.452548 L74.14 0 L73.6875 -0.452548 L31.5375 41.6975 L31.99 42.15 Z M36.56 42.15 L37.0126 42.6026 L79.1625 0.452548 L78.71 0 L78.2575 -0.452548 L36.1075 41.6975 L36.56 42.15 Z M41.13 42.15 L41.5826 42.6026 L83.7325 0.452548 L83.28 0 L82.8275 -0.452548 L40.6775 41.6975 L41.13 42.15 Z M45.7 42.15 L46.1525 42.6026 L88.3025 0.452548 L87.85 0 L87.3975 -0.452548 L45.2475 41.6975 L45.7 42.15 Z M50.27 42.15 L50.7225 42.6026 L92.8725 0.452548 L92.42 0 L91.9675 -0.452548 L49.8175 41.6975 L50.27 42.15 Z M54.84 42.15 L55.2925 42.6026 L97.4425 0.452548 L96.99 0 L96.5375 -0.452548 L54.3875 41.6975 L54.84 42.15 Z M59.41 42.15 L59.8625 42.6026 L102.013 0.452548 L101.56 0 L101.107 -0.452548 L58.9575 41.6975 L59.41 42.15 Z M63.98 42.15 L64.4325 42.6026 L106.583 0.452548 L106.13 0 L105.677 -0.452548 L63.5275 41.6975 L63.98 42.15 Z M68.55 42.15 L69.0025 42.6026 L111.153 0.452548 L110.7 0 L110.247 -0.452548 L68.0975 41.6975 L68.55 42.15 Z M73.12 42.15 L73.5725 42.6026 L115.723 0.452548 L115.27 0 L114.817 -0.452548 L72.6675 41.6975 L73.12 42.15 Z M77.69 42.15 L78.1425 42.6026 L120.293 0.452548 L119.84 0 L119.387 -0.452548 L77.2375 41.6975 L77.69 42.15 Z M82.26 42.15 L82.7125 42.6026 L124.863 0.452548 L124.41 0 L123.957 -0.452548 L81.8075 41.6975 L82.26 42.15 Z M86.83 42.15 L87.2825 42.6026 L129.433 0.452548 L128.98 0 L128.527 -0.452548 L86.3775 41.6975 L86.83 42.15 Z M91.4 42.15 L91.8525 42.6026 L134.003 0.452548 L133.55 0 L133.097 -0.452548 L90.9475 41.6975 L91.4 42.15 Z M95.97 42.15 L96.4225 42.6026 L138.573 0.452548 L138.12 0 L137.667 -0.452548 L95.5175 41.6975 L95.97 42.15 Z M100.54 42.15 L100.993 42.6026 L143.143 0.452548 L142.69 0 L142.237 -0.452548 L100.087 41.6975 L100.54 42.15 Z M105.11 42.15 L105.563 42.6026 L147.713 0.452548 L147.26 0 L146.807 -0.452548 L104.657 41.6975 L105.11 42.15 Z" fill="#ffffff" fillOpacity="0.6"/></svg>
            </div>
            <div data-fu="bar" style={{ position: "absolute", left: "181.1px", top: "13.46px", width: "23.76px", height: "39.54px", borderRadius: "4.57px", background: "linear-gradient(180deg, #faecc2 0%, #f9e6af 100%)", boxShadow: "inset 0 0 0 1px rgba(224, 173, 20, 0.22), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.35), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }}>
              <svg data-fu="plot" style={{ position: "absolute", left: "-39.54px", top: "0px", width: "140.08px", height: "39.54px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="140.08" height="39.54" viewBox="0 0 140.08 39.54" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 39.54 L0.452548 39.9925 L39.9925 0.452548 L39.54 0 L39.0875 -0.452548 L-0.452548 39.0875 L0 39.54 Z M4.57 39.54 L5.02255 39.9925 L44.5625 0.452548 L44.11 0 L43.6575 -0.452548 L4.11745 39.0875 L4.57 39.54 Z M9.14 39.54 L9.59255 39.9925 L49.1325 0.452548 L48.68 0 L48.2275 -0.452548 L8.68745 39.0875 L9.14 39.54 Z M13.71 39.54 L14.1625 39.9925 L53.7025 0.452548 L53.25 0 L52.7975 -0.452548 L13.2575 39.0875 L13.71 39.54 Z M18.28 39.54 L18.7325 39.9925 L58.2725 0.452548 L57.82 0 L57.3675 -0.452548 L17.8275 39.0875 L18.28 39.54 Z M22.85 39.54 L23.3025 39.9925 L62.8425 0.452548 L62.39 0 L61.9375 -0.452548 L22.3975 39.0875 L22.85 39.54 Z M27.42 39.54 L27.8725 39.9925 L67.4125 0.452548 L66.96 0 L66.5075 -0.452548 L26.9675 39.0875 L27.42 39.54 Z M31.99 39.54 L32.4425 39.9925 L71.9825 0.452548 L71.53 0 L71.0775 -0.452548 L31.5375 39.0875 L31.99 39.54 Z M36.56 39.54 L37.0126 39.9925 L76.5525 0.452548 L76.1 0 L75.6475 -0.452548 L36.1075 39.0875 L36.56 39.54 Z M41.13 39.54 L41.5826 39.9925 L81.1225 0.452548 L80.67 0 L80.2175 -0.452548 L40.6775 39.0875 L41.13 39.54 Z M45.7 39.54 L46.1525 39.9925 L85.6925 0.452548 L85.24 0 L84.7875 -0.452548 L45.2475 39.0875 L45.7 39.54 Z M50.27 39.54 L50.7225 39.9925 L90.2625 0.452548 L89.81 0 L89.3575 -0.452548 L49.8175 39.0875 L50.27 39.54 Z M54.84 39.54 L55.2925 39.9925 L94.8325 0.452548 L94.38 0 L93.9275 -0.452548 L54.3875 39.0875 L54.84 39.54 Z M59.41 39.54 L59.8625 39.9925 L99.4025 0.452548 L98.95 0 L98.4975 -0.452548 L58.9575 39.0875 L59.41 39.54 Z M63.98 39.54 L64.4325 39.9925 L103.973 0.452548 L103.52 0 L103.067 -0.452548 L63.5275 39.0875 L63.98 39.54 Z M68.55 39.54 L69.0025 39.9925 L108.543 0.452548 L108.09 0 L107.637 -0.452548 L68.0975 39.0875 L68.55 39.54 Z M73.12 39.54 L73.5725 39.9925 L113.113 0.452548 L112.66 0 L112.207 -0.452548 L72.6675 39.0875 L73.12 39.54 Z M77.69 39.54 L78.1425 39.9925 L117.683 0.452548 L117.23 0 L116.777 -0.452548 L77.2375 39.0875 L77.69 39.54 Z M82.26 39.54 L82.7125 39.9925 L122.253 0.452548 L121.8 0 L121.347 -0.452548 L81.8075 39.0875 L82.26 39.54 Z M86.83 39.54 L87.2825 39.9925 L126.823 0.452548 L126.37 0 L125.917 -0.452548 L86.3775 39.0875 L86.83 39.54 Z M91.4 39.54 L91.8525 39.9925 L131.393 0.452548 L130.94 0 L130.487 -0.452548 L90.9475 39.0875 L91.4 39.54 Z M95.97 39.54 L96.4225 39.9925 L135.963 0.452548 L135.51 0 L135.057 -0.452548 L95.5175 39.0875 L95.97 39.54 Z M100.54 39.54 L100.993 39.9925 L140.533 0.452548 L140.08 0 L139.627 -0.452548 L100.087 39.0875 L100.54 39.54 Z" fill="#ffffff" fillOpacity="0.6"/></svg>
            </div>
            <div data-fu="bar" style={{ position: "absolute", left: "236.23px", top: "10.43px", width: "23.76px", height: "42.57px", borderRadius: "4.57px", background: "linear-gradient(180deg, #faecc2 0%, #f9e6af 100%)", boxShadow: "inset 0 0 0 1px rgba(224, 173, 20, 0.22), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.35), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }}>
              <svg data-fu="plot" style={{ position: "absolute", left: "-42.57px", top: "0px", width: "147.68px", height: "42.57px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="147.68" height="42.57" viewBox="0 0 147.68 42.57" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 42.57 L0.452548 43.0225 L43.0225 0.452548 L42.57 0 L42.1175 -0.452548 L-0.452548 42.1175 L0 42.57 Z M4.57 42.57 L5.02255 43.0225 L47.5925 0.452548 L47.14 0 L46.6875 -0.452548 L4.11745 42.1175 L4.57 42.57 Z M9.14 42.57 L9.59255 43.0225 L52.1625 0.452548 L51.71 0 L51.2575 -0.452548 L8.68745 42.1175 L9.14 42.57 Z M13.71 42.57 L14.1625 43.0225 L56.7325 0.452548 L56.28 0 L55.8274 -0.452548 L13.2575 42.1175 L13.71 42.57 Z M18.28 42.57 L18.7325 43.0225 L61.3025 0.452548 L60.85 0 L60.3974 -0.452548 L17.8275 42.1175 L18.28 42.57 Z M22.85 42.57 L23.3025 43.0225 L65.8725 0.452548 L65.42 0 L64.9675 -0.452548 L22.3975 42.1175 L22.85 42.57 Z M27.42 42.57 L27.8725 43.0225 L70.4425 0.452548 L69.99 0 L69.5375 -0.452548 L26.9675 42.1175 L27.42 42.57 Z M31.99 42.57 L32.4425 43.0225 L75.0125 0.452548 L74.56 0 L74.1075 -0.452548 L31.5375 42.1175 L31.99 42.57 Z M36.56 42.57 L37.0126 43.0225 L79.5825 0.452548 L79.13 0 L78.6775 -0.452548 L36.1075 42.1175 L36.56 42.57 Z M41.13 42.57 L41.5826 43.0225 L84.1525 0.452548 L83.7 0 L83.2475 -0.452548 L40.6775 42.1175 L41.13 42.57 Z M45.7 42.57 L46.1525 43.0225 L88.7225 0.452548 L88.27 0 L87.8175 -0.452548 L45.2475 42.1175 L45.7 42.57 Z M50.27 42.57 L50.7225 43.0225 L93.2925 0.452548 L92.84 0 L92.3875 -0.452548 L49.8175 42.1175 L50.27 42.57 Z M54.84 42.57 L55.2925 43.0225 L97.8625 0.452548 L97.41 0 L96.9575 -0.452548 L54.3875 42.1175 L54.84 42.57 Z M59.41 42.57 L59.8625 43.0225 L102.433 0.452548 L101.98 0 L101.527 -0.452548 L58.9575 42.1175 L59.41 42.57 Z M63.98 42.57 L64.4325 43.0225 L107.003 0.452548 L106.55 0 L106.097 -0.452548 L63.5275 42.1175 L63.98 42.57 Z M68.55 42.57 L69.0025 43.0225 L111.573 0.452548 L111.12 0 L110.667 -0.452548 L68.0975 42.1175 L68.55 42.57 Z M73.12 42.57 L73.5725 43.0225 L116.143 0.452548 L115.69 0 L115.237 -0.452548 L72.6675 42.1175 L73.12 42.57 Z M77.69 42.57 L78.1425 43.0225 L120.713 0.452548 L120.26 0 L119.807 -0.452548 L77.2375 42.1175 L77.69 42.57 Z M82.26 42.57 L82.7125 43.0225 L125.283 0.452548 L124.83 0 L124.377 -0.452548 L81.8075 42.1175 L82.26 42.57 Z M86.83 42.57 L87.2825 43.0225 L129.853 0.452548 L129.4 0 L128.947 -0.452548 L86.3775 42.1175 L86.83 42.57 Z M91.4 42.57 L91.8525 43.0225 L134.423 0.452548 L133.97 0 L133.517 -0.452548 L90.9475 42.1175 L91.4 42.57 Z M95.97 42.57 L96.4225 43.0225 L138.993 0.452548 L138.54 0 L138.087 -0.452548 L95.5175 42.1175 L95.97 42.57 Z M100.54 42.57 L100.993 43.0225 L143.563 0.452548 L143.11 0 L142.657 -0.452548 L100.087 42.1175 L100.54 42.57 Z M105.11 42.57 L105.563 43.0225 L148.133 0.452548 L147.68 0 L147.227 -0.452548 L104.657 42.1175 L105.11 42.57 Z" fill="#ffffff" fillOpacity="0.6"/></svg>
            </div>
            <div data-fu="bar" style={{ position: "absolute", left: "291.37px", top: "9.3px", width: "23.76px", height: "43.7px", borderRadius: "4.57px", background: "linear-gradient(180deg, #eebf33 0%, #ecb615 100%)", boxShadow: "inset 0 0 0 1px rgba(184, 142, 16, 0.38), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.18), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
            <p style={{ position: "absolute", left: "17.57px", top: "56.66px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "20px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#6b6b6b" }}>Mar</p>
            <p style={{ position: "absolute", left: "73.7px", top: "56.66px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "18px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#6b6b6b" }}>Apr</p>
            <p style={{ position: "absolute", left: "126.84px", top: "56.66px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "22px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#6b6b6b" }}>May</p>
            <p style={{ position: "absolute", left: "182.98px", top: "56.66px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "20px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#6b6b6b" }}>Jun</p>
            <p style={{ position: "absolute", left: "240.11px", top: "56.66px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "16px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#6b6b6b" }}>Jul</p>
            <p style={{ position: "absolute", left: "293.25px", top: "56.66px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "20px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#6b6b6b" }}>Aug</p>
          </div>
        </div>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "40px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#222222" }}>Status</p>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10.97px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "16.45px", height: "45.69px", flexShrink: 0, position: "relative" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "16.45px", height: "16.45px", borderRadius: "999px", background: "#e7fff9", boxShadow: "inset 0 0 0 0.91px #a7e8d3", display: "flex", flexDirection: "row", padding: "0.91px 0.91px 0.91px 0.91px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <Check size={10.1} style={{ width: "10.05px", height: "10.05px", flexShrink: 0, color: "#00a77d", display: "block" }} />
              </div>
              <div style={{ position: "absolute", left: "7.54px", top: "18.28px", width: "1.37px", height: "25.58px", background: "#a7e8d3" }} />
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.74px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "45px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 500, color: "#222222" }}>Created</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "142px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#666d80" }}>Aug 07 · 16:40 · Alex Morgan</p>
            </div>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10.97px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "16.45px", height: "45.69px", flexShrink: 0, position: "relative" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "16.45px", height: "16.45px", borderRadius: "999px", background: "#e7fff9", boxShadow: "inset 0 0 0 0.91px #a7e8d3", display: "flex", flexDirection: "row", padding: "0.91px 0.91px 0.91px 0.91px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <Check size={10.1} style={{ width: "10.05px", height: "10.05px", flexShrink: 0, color: "#00a77d", display: "block" }} />
              </div>
              <div style={{ position: "absolute", left: "7.54px", top: "18.28px", width: "1.37px", height: "25.58px", background: "#a7e8d3" }} />
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.74px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "54px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 500, color: "#222222" }}>Approved</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "195px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#666d80" }}>Aug 07 · 16:42 · auto, under $1,000 rule</p>
            </div>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10.97px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "16.45px", height: "45.69px", flexShrink: 0, position: "relative" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "16.45px", height: "16.45px", borderRadius: "999px", background: "#e7fff9", boxShadow: "inset 0 0 0 0.91px #a7e8d3", display: "flex", flexDirection: "row", padding: "0.91px 0.91px 0.91px 0.91px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <Check size={10.1} style={{ width: "10.05px", height: "10.05px", flexShrink: 0, color: "#00a77d", display: "block" }} />
              </div>
              <div style={{ position: "absolute", left: "7.54px", top: "18.28px", width: "1.37px", height: "25.58px", background: "#e8e8e8" }} />
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.74px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "27px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 500, color: "#222222" }}>Sent</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "178px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#666d80" }}>Aug 08 · 09:12 · Amex Business ••21</p>
            </div>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10.97px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "16.45px", height: "32.9px", flexShrink: 0, position: "relative" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "16.45px", height: "16.45px", borderRadius: "999px", background: "#ffffff", boxShadow: "inset 0 0 0 1.37px #4996fe", display: "flex", flexDirection: "row", padding: "1.37px 1.37px 1.37px 1.37px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <svg style={{ width: "6.4px", height: "6.4px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="6.4" height="6.4" viewBox="0 0 6.4 6.4" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M6.4 3.2 C6.4 4.96731 4.96731 6.4 3.2 6.4 C1.43269 6.4 0 4.96731 0 3.2 C0 1.43269 1.43269 0 3.2 0 C4.96731 0 6.4 1.43269 6.4 3.2 Z" fill="#4996fe"/></svg>
              </div>
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.74px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "41px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 500, color: "#1f6fe0" }}>Settled</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "111px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#666d80" }}>Expected Mon, Aug 10</p>
            </div>
          </div>
        </div>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "43px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#222222" }}>Details</p>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "9.14px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div data-fu="row" style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "53px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#6b6b6b" }}>Paid from</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "109px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 500, color: "#222222" }}>Amex Business ••21</p>
          </div>
          <div data-fu="row" style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "50px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#6b6b6b" }}>Category</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "52px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 500, color: "#222222" }}>Software</p>
          </div>
          <div data-fu="row" style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "72px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#6b6b6b" }}>Approval rule</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "104px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 500, color: "#222222" }}>Auto under $1,000</p>
          </div>
          <div data-fu="row" style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "56px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#6b6b6b" }}>Reference</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "54px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 500, color: "#222222" }}>PAY-2291</p>
          </div>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, borderRadius: "9.14px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8", display: "flex", flexDirection: "row", padding: "10.05px 11.88px 10.05px 11.88px", gap: "9.14px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "27.42px", height: "27.42px", flexShrink: 0, borderRadius: "7.31px", background: "rgba(73, 150, 254, 0.12)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <File size={13.7} strokeWidth={1.51} style={{ width: "13.71px", height: "13.71px", flexShrink: 0, color: "#4996fe", display: "block" }} />
          </div>
          <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.83px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "149px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 500, color: "#222222" }}>aws-invoice-aug-2026.pdf</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "136px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 400, color: "#666d80" }}>PDF · 96 KB · attached by rule</p>
          </div>
          <Download size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
        </div>
      </div>
      <div style={{ alignSelf: "stretch", flex: "1 1 0", minHeight: 0, flexShrink: 0 }} />
      <div style={{ alignSelf: "stretch", flexShrink: 0, background: "#fafafa", boxShadow: "inset 0 0.91px 0 0 #ededed", display: "flex", flexDirection: "row", padding: "13.7px 18.28px 12.79px 18.28px", gap: "7.31px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
        <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#6b6b6b" }}>Settles in ~1 day</p>
        <div data-fu="btn" style={{ height: "29.24px", flexShrink: 0, borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8, 0px 0.91px 1.83px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "row", padding: "0.91px 11.88px 0.91px 11.88px", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <Copy size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "55px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#6c6c6c" }}>Copy link</p>
        </div>
        <div data-fu="btn" style={{ height: "29.24px", flexShrink: 0, borderRadius: "7.31px", background: "linear-gradient(90deg, #222222 0%, #3a3a3a 50%, #222222 100%)", boxShadow: "inset 0 0 0 0.91px #dfe1e6", display: "flex", flexDirection: "row", padding: "0.91px 11.88px 0.91px 11.88px", gap: "3.66px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <Repeat size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#ffffff", display: "block" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "99px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#ffffff", lineHeight: "1.4500000476837158" }}>Repeat payment</p>
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
