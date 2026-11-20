"use client";
// Body modal, Drop files here or browse (abotix, Modals) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist, Inter. Icons: Ingot Icons.
import { useEffect, useRef } from "react";
import { Calendar, Check, ChevronDown, CircleCheck, CloudUpload, File, FileTypePdf, Link, Photo, X } from "ingotui-icons/react/stroke-rounded";

export function BodyModalDropFilesHereOrBrowse() {
  const fuRef = useRef<any>(null);
  useEffect(() => fuInteract(fuRef.current), []);
  return (
    <div ref={fuRef} style={{ width: "578px", height: "503px", display: "flex", flexDirection: "column", padding: "4px 20px 20px 20px", gap: "16px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
      <div style={{ alignSelf: "stretch", flexShrink: 0, borderRadius: "12px", background: "rgba(37, 99, 235, 0.04)", outline: "1px dashed #9dbcf7", outlineOffset: "-1px", display: "flex", flexDirection: "column", padding: "23px 21px 23px 21px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ width: "40px", height: "40px", flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "0px 0px 1px 0px rgba(0, 0, 0, 0.4)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <CloudUpload size={20} style={{ width: "20px", height: "20px", flexShrink: 0, color: "#2563eb", display: "block" }} />
        </div>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "165px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#2d2d2d" }}>
          <span style={{ fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#2d2d2d" }}>{"Drop files here or "}</span>
          <span style={{ fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#2563eb" }}>browse</span>
        </p>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "233px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#8a8a8a" }}>PDF, CSV, PNG or ZIP · up to 200 MB each</p>
      </div>
      <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "12px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ width: "264px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "87px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#2d2d2d" }}>Linked control</p>
          <div style={{ alignSelf: "stretch", height: "38px", flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e8e8e8, 0px 1px 2px 0px rgba(79, 79, 79, 0.12)", display: "flex", flexDirection: "row", padding: "1px 11px 1px 11px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <Link size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#353537", display: "block" }} />
            <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#2d2d2d" }}>EU-ART-14 · Human oversight</p>
            <ChevronDown size={14} strokeWidth={1.51} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#353537", display: "block" }} />
          </div>
        </div>
        <div style={{ width: "264px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "60px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#2d2d2d" }}>Retention</p>
          <div style={{ alignSelf: "stretch", height: "38px", flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e8e8e8, 0px 1px 2px 0px rgba(79, 79, 79, 0.12)", display: "flex", flexDirection: "row", padding: "1px 11px 1px 11px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <Calendar size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#353537", display: "block" }} />
            <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#2d2d2d" }}>7 years · EU AI Act</p>
            <ChevronDown size={14} strokeWidth={1.51} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#353537", display: "block" }} />
          </div>
        </div>
      </div>
      <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "50px", fontFamily: "'Inter'", fontSize: "12px", fontWeight: 500, color: "#8a8a8a", lineHeight: "1.3300000429153442" }}>FILES · 3</p>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "110px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#2db475" }}>3 of 3 required files</p>
      </div>
      <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "8px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div data-fu="row" style={{ width: "540px", flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ebebeb", display: "flex", flexDirection: "row", padding: "11px 13px 11px 13px", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "34px", height: "34px", flexShrink: 0, borderRadius: "8px", background: "#ffffff", boxShadow: "0px 0px 1px 0px rgba(0, 0, 0, 0.4)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <FileTypePdf size={18} strokeWidth={1.51} style={{ width: "18px", height: "18px", flexShrink: 0, color: "#555555", display: "block" }} />
          </div>
          <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "171px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#2d2d2d" }}>approval-workflow-v2.pdf</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "40px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#8a8a8a" }}>2.4 MB</p>
            </div>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "438px", height: "6px", flexShrink: 0, position: "relative" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", width: "438px", height: "6px", borderRadius: "3px", background: "linear-gradient(90deg, #77cea5 0%, #2db475 100%)", boxShadow: "inset 0 0 0 1px rgba(35, 140, 91, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.18), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
              </div>
            </div>
          </div>
          <CircleCheck size={18} strokeWidth={1.51} style={{ width: "18px", height: "18px", flexShrink: 0, color: "#2db475", display: "block" }} />
        </div>
        <div data-fu="row" style={{ width: "540px", flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ebebeb", display: "flex", flexDirection: "row", padding: "11px 13px 11px 13px", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "34px", height: "34px", flexShrink: 0, borderRadius: "8px", background: "#ffffff", boxShadow: "0px 0px 1px 0px rgba(0, 0, 0, 0.4)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <File size={18} strokeWidth={1.51} style={{ width: "18px", height: "18px", flexShrink: 0, color: "#555555", display: "block" }} />
          </div>
          <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "152px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#2d2d2d" }}>reviewer-roster-Q4.csv</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "73px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#8a8a8a" }}>64% · 180 KB</p>
            </div>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "440px", height: "6px", flexShrink: 0, position: "relative" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", width: "281.6px", height: "6px", borderRadius: "3px", background: "linear-gradient(90deg, #689cf8 0%, #1666f4 100%)", boxShadow: "inset 0 0 0 1px rgba(17, 80, 190, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.18), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
                <svg style={{ position: "absolute", left: "285.6px", top: "0px", width: "153.9px", height: "6px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="153.9" height="6" viewBox="0 0 153.9 6" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0 L-0.5 0 L-0.5 6 L0 6 L0.5 6 L0.5 0 L0 0 Z M3.21 0 L2.71 0 L2.71 6 L3.21 6 L3.71 6 L3.71 0 L3.21 0 Z M6.41 0 L5.91 0 L5.91 6 L6.41 6 L6.91 6 L6.91 0 L6.41 0 Z M9.62 0 L9.12 0 L9.12 6 L9.62 6 L10.12 6 L10.12 0 L9.62 0 Z M12.82 0 L12.32 0 L12.32 6 L12.82 6 L13.32 6 L13.32 0 L12.82 0 Z M16.03 0 L15.53 0 L15.53 6 L16.03 6 L16.53 6 L16.53 0 L16.03 0 Z M19.24 0 L18.74 0 L18.74 6 L19.24 6 L19.74 6 L19.74 0 L19.24 0 Z M22.44 0 L21.94 0 L21.94 6 L22.44 6 L22.94 6 L22.94 0 L22.44 0 Z M25.65 0 L25.15 0 L25.15 6 L25.65 6 L26.15 6 L26.15 0 L25.65 0 Z M28.86 0 L28.36 0 L28.36 6 L28.86 6 L29.36 6 L29.36 0 L28.86 0 Z M32.06 0 L31.56 0 L31.56 6 L32.06 6 L32.56 6 L32.56 0 L32.06 0 Z M35.27 0 L34.77 0 L34.77 6 L35.27 6 L35.77 6 L35.77 0 L35.27 0 Z M38.47 0 L37.97 0 L37.97 6 L38.47 6 L38.97 6 L38.97 0 L38.47 0 Z M41.68 0 L41.18 0 L41.18 6 L41.68 6 L42.18 6 L42.18 0 L41.68 0 Z M44.89 0 L44.39 0 L44.39 6 L44.89 6 L45.39 6 L45.39 0 L44.89 0 Z M48.09 0 L47.59 0 L47.59 6 L48.09 6 L48.59 6 L48.59 0 L48.09 0 Z M51.3 0 L50.8 0 L50.8 6 L51.3 6 L51.8 6 L51.8 0 L51.3 0 Z M54.51 0 L54.01 0 L54.01 6 L54.51 6 L55.01 6 L55.01 0 L54.51 0 Z M57.71 0 L57.21 0 L57.21 6 L57.71 6 L58.21 6 L58.21 0 L57.71 0 Z M60.92 0 L60.42 0 L60.42 6 L60.92 6 L61.42 6 L61.42 0 L60.92 0 Z M64.12 0 L63.62 0 L63.62 6 L64.12 6 L64.62 6 L64.62 0 L64.12 0 Z M67.33 0 L66.83 0 L66.83 6 L67.33 6 L67.83 6 L67.83 0 L67.33 0 Z M70.54 0 L70.04 0 L70.04 6 L70.54 6 L71.04 6 L71.04 0 L70.54 0 Z M73.74 0 L73.24 0 L73.24 6 L73.74 6 L74.24 6 L74.24 0 L73.74 0 Z M76.95 0 L76.45 0 L76.45 6 L76.95 6 L77.45 6 L77.45 0 L76.95 0 Z M80.16 0 L79.66 0 L79.66 6 L80.16 6 L80.66 6 L80.66 0 L80.16 0 Z M83.36 0 L82.86 0 L82.86 6 L83.36 6 L83.86 6 L83.86 0 L83.36 0 Z M86.57 0 L86.07 0 L86.07 6 L86.57 6 L87.07 6 L87.07 0 L86.57 0 Z M89.77 0 L89.27 0 L89.27 6 L89.77 6 L90.27 6 L90.27 0 L89.77 0 Z M92.98 0 L92.48 0 L92.48 6 L92.98 6 L93.48 6 L93.48 0 L92.98 0 Z M96.19 0 L95.69 0 L95.69 6 L96.19 6 L96.69 6 L96.69 0 L96.19 0 Z M99.39 0 L98.89 0 L98.89 6 L99.39 6 L99.89 6 L99.89 0 L99.39 0 Z M102.6 0 L102.1 0 L102.1 6 L102.6 6 L103.1 6 L103.1 0 L102.6 0 Z M105.81 0 L105.31 0 L105.31 6 L105.81 6 L106.31 6 L106.31 0 L105.81 0 Z M109.01 0 L108.51 0 L108.51 6 L109.01 6 L109.51 6 L109.51 0 L109.01 0 Z M112.22 0 L111.72 0 L111.72 6 L112.22 6 L112.72 6 L112.72 0 L112.22 0 Z M115.42 0 L114.92 0 L114.92 6 L115.42 6 L115.92 6 L115.92 0 L115.42 0 Z M118.63 0 L118.13 0 L118.13 6 L118.63 6 L119.13 6 L119.13 0 L118.63 0 Z M121.84 0 L121.34 0 L121.34 6 L121.84 6 L122.34 6 L122.34 0 L121.84 0 Z M125.04 0 L124.54 0 L124.54 6 L125.04 6 L125.54 6 L125.54 0 L125.04 0 Z M128.25 0 L127.75 0 L127.75 6 L128.25 6 L128.75 6 L128.75 0 L128.25 0 Z M131.46 0 L130.96 0 L130.96 6 L131.46 6 L131.96 6 L131.96 0 L131.46 0 Z M134.66 0 L134.16 0 L134.16 6 L134.66 6 L135.16 6 L135.16 0 L134.66 0 Z M137.87 0 L137.37 0 L137.37 6 L137.87 6 L138.37 6 L138.37 0 L137.87 0 Z M141.07 0 L140.57 0 L140.57 6 L141.07 6 L141.57 6 L141.57 0 L141.07 0 Z M144.28 0 L143.78 0 L143.78 6 L144.28 6 L144.78 6 L144.78 0 L144.28 0 Z M147.49 0 L146.99 0 L146.99 6 L147.49 6 L147.99 6 L147.99 0 L147.49 0 Z M150.69 0 L150.19 0 L150.19 6 L150.69 6 L151.19 6 L151.19 0 L150.69 0 Z M153.9 0 L153.4 0 L153.4 6 L153.9 6 L154.4 6 L154.4 0 L153.9 0 Z" fill="#d4d4d8"/></svg>
              </div>
            </div>
          </div>
          <X size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#8a8a8a", display: "block" }} />
        </div>
        <div data-fu="row" style={{ width: "540px", flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ebebeb", display: "flex", flexDirection: "row", padding: "11px 13px 11px 13px", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "34px", height: "34px", flexShrink: 0, borderRadius: "8px", background: "#ffffff", boxShadow: "0px 0px 1px 0px rgba(0, 0, 0, 0.4)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <Photo size={18} strokeWidth={1.51} style={{ width: "18px", height: "18px", flexShrink: 0, color: "#555555", display: "block" }} />
          </div>
          <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "172px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#2d2d2d" }}>claims-oversight-flow.png</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "86px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#8a8a8a" }}>Queued · 1.1 MB</p>
            </div>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "440px", height: "6px", flexShrink: 0, position: "relative" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", width: "0.44px", height: "6px", borderRadius: "0.22px", background: "linear-gradient(90deg, #689cf8 0%, #1666f4 100%)", boxShadow: "inset 0 0 0 1px rgba(17, 80, 190, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.18), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
                <svg style={{ position: "absolute", left: "4.44px", top: "0px", width: "435.06px", height: "6px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="435.06" height="6" viewBox="0 0 435.06 6" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0 L-0.5 0 L-0.5 6 L0 6 L0.5 6 L0.5 0 L0 0 Z M3.22 0 L2.72 0 L2.72 6 L3.22 6 L3.72 6 L3.72 0 L3.22 0 Z M6.45 0 L5.95 0 L5.95 6 L6.45 6 L6.95 6 L6.95 0 L6.45 0 Z M9.67 0 L9.17 0 L9.17 6 L9.67 6 L10.17 6 L10.17 0 L9.67 0 Z M12.89 0 L12.39 0 L12.39 6 L12.89 6 L13.39 6 L13.39 0 L12.89 0 Z M16.11 0 L15.61 0 L15.61 6 L16.11 6 L16.61 6 L16.61 0 L16.11 0 Z M19.34 0 L18.84 0 L18.84 6 L19.34 6 L19.84 6 L19.84 0 L19.34 0 Z M22.56 0 L22.06 0 L22.06 6 L22.56 6 L23.06 6 L23.06 0 L22.56 0 Z M25.78 0 L25.28 0 L25.28 6 L25.78 6 L26.28 6 L26.28 0 L25.78 0 Z M29 0 L28.5 0 L28.5 6 L29 6 L29.5 6 L29.5 0 L29 0 Z M32.23 0 L31.73 0 L31.73 6 L32.23 6 L32.73 6 L32.73 0 L32.23 0 Z M35.45 0 L34.95 0 L34.95 6 L35.45 6 L35.95 6 L35.95 0 L35.45 0 Z M38.67 0 L38.17 0 L38.17 6 L38.67 6 L39.17 6 L39.17 0 L38.67 0 Z M41.89 0 L41.39 0 L41.39 6 L41.89 6 L42.39 6 L42.39 0 L41.89 0 Z M45.12 0 L44.62 0 L44.62 6 L45.12 6 L45.62 6 L45.62 0 L45.12 0 Z M48.34 0 L47.84 0 L47.84 6 L48.34 6 L48.84 6 L48.84 0 L48.34 0 Z M51.56 0 L51.06 0 L51.06 6 L51.56 6 L52.06 6 L52.06 0 L51.56 0 Z M54.79 0 L54.29 0 L54.29 6 L54.79 6 L55.29 6 L55.29 0 L54.79 0 Z M58.01 0 L57.51 0 L57.51 6 L58.01 6 L58.51 6 L58.51 0 L58.01 0 Z M61.23 0 L60.73 0 L60.73 6 L61.23 6 L61.73 6 L61.73 0 L61.23 0 Z M64.45 0 L63.95 0 L63.95 6 L64.45 6 L64.95 6 L64.95 0 L64.45 0 Z M67.68 0 L67.18 0 L67.18 6 L67.68 6 L68.18 6 L68.18 0 L67.68 0 Z M70.9 0 L70.4 0 L70.4 6 L70.9 6 L71.4 6 L71.4 0 L70.9 0 Z M74.12 0 L73.62 0 L73.62 6 L74.12 6 L74.62 6 L74.62 0 L74.12 0 Z M77.34 0 L76.84 0 L76.84 6 L77.34 6 L77.84 6 L77.84 0 L77.34 0 Z M80.57 0 L80.07 0 L80.07 6 L80.57 6 L81.07 6 L81.07 0 L80.57 0 Z M83.79 0 L83.29 0 L83.29 6 L83.79 6 L84.29 6 L84.29 0 L83.79 0 Z M87.01 0 L86.51 0 L86.51 6 L87.01 6 L87.51 6 L87.51 0 L87.01 0 Z M90.23 0 L89.73 0 L89.73 6 L90.23 6 L90.73 6 L90.73 0 L90.23 0 Z M93.46 0 L92.96 0 L92.96 6 L93.46 6 L93.96 6 L93.96 0 L93.46 0 Z M96.68 0 L96.18 0 L96.18 6 L96.68 6 L97.18 6 L97.18 0 L96.68 0 Z M99.9 0 L99.4 0 L99.4 6 L99.9 6 L100.4 6 L100.4 0 L99.9 0 Z M103.13 0 L102.63 0 L102.63 6 L103.13 6 L103.63 6 L103.63 0 L103.13 0 Z M106.35 0 L105.85 0 L105.85 6 L106.35 6 L106.85 6 L106.85 0 L106.35 0 Z M109.57 0 L109.07 0 L109.07 6 L109.57 6 L110.07 6 L110.07 0 L109.57 0 Z M112.79 0 L112.29 0 L112.29 6 L112.79 6 L113.29 6 L113.29 0 L112.79 0 Z M116.02 0 L115.52 0 L115.52 6 L116.02 6 L116.52 6 L116.52 0 L116.02 0 Z M119.24 0 L118.74 0 L118.74 6 L119.24 6 L119.74 6 L119.74 0 L119.24 0 Z M122.46 0 L121.96 0 L121.96 6 L122.46 6 L122.96 6 L122.96 0 L122.46 0 Z M125.68 0 L125.18 0 L125.18 6 L125.68 6 L126.18 6 L126.18 0 L125.68 0 Z M128.91 0 L128.41 0 L128.41 6 L128.91 6 L129.41 6 L129.41 0 L128.91 0 Z M132.13 0 L131.63 0 L131.63 6 L132.13 6 L132.63 6 L132.63 0 L132.13 0 Z M135.35 0 L134.85 0 L134.85 6 L135.35 6 L135.85 6 L135.85 0 L135.35 0 Z M138.57 0 L138.07 0 L138.07 6 L138.57 6 L139.07 6 L139.07 0 L138.57 0 Z M141.8 0 L141.3 0 L141.3 6 L141.8 6 L142.3 6 L142.3 0 L141.8 0 Z M145.02 0 L144.52 0 L144.52 6 L145.02 6 L145.52 6 L145.52 0 L145.02 0 Z M148.24 0 L147.74 0 L147.74 6 L148.24 6 L148.74 6 L148.74 0 L148.24 0 Z M151.47 0 L150.97 0 L150.97 6 L151.47 6 L151.97 6 L151.97 0 L151.47 0 Z M154.69 0 L154.19 0 L154.19 6 L154.69 6 L155.19 6 L155.19 0 L154.69 0 Z M157.91 0 L157.41 0 L157.41 6 L157.91 6 L158.41 6 L158.41 0 L157.91 0 Z M161.13 0 L160.63 0 L160.63 6 L161.13 6 L161.63 6 L161.63 0 L161.13 0 Z M164.36 0 L163.86 0 L163.86 6 L164.36 6 L164.86 6 L164.86 0 L164.36 0 Z M167.58 0 L167.08 0 L167.08 6 L167.58 6 L168.08 6 L168.08 0 L167.58 0 Z M170.8 0 L170.3 0 L170.3 6 L170.8 6 L171.3 6 L171.3 0 L170.8 0 Z M174.02 0 L173.52 0 L173.52 6 L174.02 6 L174.52 6 L174.52 0 L174.02 0 Z M177.25 0 L176.75 0 L176.75 6 L177.25 6 L177.75 6 L177.75 0 L177.25 0 Z M180.47 0 L179.97 0 L179.97 6 L180.47 6 L180.97 6 L180.97 0 L180.47 0 Z M183.69 0 L183.19 0 L183.19 6 L183.69 6 L184.19 6 L184.19 0 L183.69 0 Z M186.91 0 L186.41 0 L186.41 6 L186.91 6 L187.41 6 L187.41 0 L186.91 0 Z M190.14 0 L189.64 0 L189.64 6 L190.14 6 L190.64 6 L190.64 0 L190.14 0 Z M193.36 0 L192.86 0 L192.86 6 L193.36 6 L193.86 6 L193.86 0 L193.36 0 Z M196.58 0 L196.08 0 L196.08 6 L196.58 6 L197.08 6 L197.08 0 L196.58 0 Z M199.81 0 L199.31 0 L199.31 6 L199.81 6 L200.31 6 L200.31 0 L199.81 0 Z M203.03 0 L202.53 0 L202.53 6 L203.03 6 L203.53 6 L203.53 0 L203.03 0 Z M206.25 0 L205.75 0 L205.75 6 L206.25 6 L206.75 6 L206.75 0 L206.25 0 Z M209.47 0 L208.97 0 L208.97 6 L209.47 6 L209.97 6 L209.97 0 L209.47 0 Z M212.7 0 L212.2 0 L212.2 6 L212.7 6 L213.2 6 L213.2 0 L212.7 0 Z M215.92 0 L215.42 0 L215.42 6 L215.92 6 L216.42 6 L216.42 0 L215.92 0 Z M219.14 0 L218.64 0 L218.64 6 L219.14 6 L219.64 6 L219.64 0 L219.14 0 Z M222.36 0 L221.86 0 L221.86 6 L222.36 6 L222.86 6 L222.86 0 L222.36 0 Z M225.59 0 L225.09 0 L225.09 6 L225.59 6 L226.09 6 L226.09 0 L225.59 0 Z M228.81 0 L228.31 0 L228.31 6 L228.81 6 L229.31 6 L229.31 0 L228.81 0 Z M232.03 0 L231.53 0 L231.53 6 L232.03 6 L232.53 6 L232.53 0 L232.03 0 Z M235.25 0 L234.75 0 L234.75 6 L235.25 6 L235.75 6 L235.75 0 L235.25 0 Z M238.48 0 L237.98 0 L237.98 6 L238.48 6 L238.98 6 L238.98 0 L238.48 0 Z M241.7 0 L241.2 0 L241.2 6 L241.7 6 L242.2 6 L242.2 0 L241.7 0 Z M244.92 0 L244.42 0 L244.42 6 L244.92 6 L245.42 6 L245.42 0 L244.92 0 Z M248.15 0 L247.65 0 L247.65 6 L248.15 6 L248.65 6 L248.65 0 L248.15 0 Z M251.37 0 L250.87 0 L250.87 6 L251.37 6 L251.87 6 L251.87 0 L251.37 0 Z M254.59 0 L254.09 0 L254.09 6 L254.59 6 L255.09 6 L255.09 0 L254.59 0 Z M257.81 0 L257.31 0 L257.31 6 L257.81 6 L258.31 6 L258.31 0 L257.81 0 Z M261.04 0 L260.54 0 L260.54 6 L261.04 6 L261.54 6 L261.54 0 L261.04 0 Z M264.26 0 L263.76 0 L263.76 6 L264.26 6 L264.76 6 L264.76 0 L264.26 0 Z M267.48 0 L266.98 0 L266.98 6 L267.48 6 L267.98 6 L267.98 0 L267.48 0 Z M270.7 0 L270.2 0 L270.2 6 L270.7 6 L271.2 6 L271.2 0 L270.7 0 Z M273.93 0 L273.43 0 L273.43 6 L273.93 6 L274.43 6 L274.43 0 L273.93 0 Z M277.15 0 L276.65 0 L276.65 6 L277.15 6 L277.65 6 L277.65 0 L277.15 0 Z M280.37 0 L279.87 0 L279.87 6 L280.37 6 L280.87 6 L280.87 0 L280.37 0 Z M283.59 0 L283.09 0 L283.09 6 L283.59 6 L284.09 6 L284.09 0 L283.59 0 Z M286.82 0 L286.32 0 L286.32 6 L286.82 6 L287.32 6 L287.32 0 L286.82 0 Z M290.04 0 L289.54 0 L289.54 6 L290.04 6 L290.54 6 L290.54 0 L290.04 0 Z M293.26 0 L292.76 0 L292.76 6 L293.26 6 L293.76 6 L293.76 0 L293.26 0 Z M296.49 0 L295.99 0 L295.99 6 L296.49 6 L296.99 6 L296.99 0 L296.49 0 Z M299.71 0 L299.21 0 L299.21 6 L299.71 6 L300.21 6 L300.21 0 L299.71 0 Z M302.93 0 L302.43 0 L302.43 6 L302.93 6 L303.43 6 L303.43 0 L302.93 0 Z M306.15 0 L305.65 0 L305.65 6 L306.15 6 L306.65 6 L306.65 0 L306.15 0 Z M309.38 0 L308.88 0 L308.88 6 L309.38 6 L309.88 6 L309.88 0 L309.38 0 Z M312.6 0 L312.1 0 L312.1 6 L312.6 6 L313.1 6 L313.1 0 L312.6 0 Z M315.82 0 L315.32 0 L315.32 6 L315.82 6 L316.32 6 L316.32 0 L315.82 0 Z M319.04 0 L318.54 0 L318.54 6 L319.04 6 L319.54 6 L319.54 0 L319.04 0 Z M322.27 0 L321.77 0 L321.77 6 L322.27 6 L322.77 6 L322.77 0 L322.27 0 Z M325.49 0 L324.99 0 L324.99 6 L325.49 6 L325.99 6 L325.99 0 L325.49 0 Z M328.71 0 L328.21 0 L328.21 6 L328.71 6 L329.21 6 L329.21 0 L328.71 0 Z M331.93 0 L331.43 0 L331.43 6 L331.93 6 L332.43 6 L332.43 0 L331.93 0 Z M335.16 0 L334.66 0 L334.66 6 L335.16 6 L335.66 6 L335.66 0 L335.16 0 Z M338.38 0 L337.88 0 L337.88 6 L338.38 6 L338.88 6 L338.88 0 L338.38 0 Z M341.6 0 L341.1 0 L341.1 6 L341.6 6 L342.1 6 L342.1 0 L341.6 0 Z M344.83 0 L344.33 0 L344.33 6 L344.83 6 L345.33 6 L345.33 0 L344.83 0 Z M348.05 0 L347.55 0 L347.55 6 L348.05 6 L348.55 6 L348.55 0 L348.05 0 Z M351.27 0 L350.77 0 L350.77 6 L351.27 6 L351.77 6 L351.77 0 L351.27 0 Z M354.49 0 L353.99 0 L353.99 6 L354.49 6 L354.99 6 L354.99 0 L354.49 0 Z M357.72 0 L357.22 0 L357.22 6 L357.72 6 L358.22 6 L358.22 0 L357.72 0 Z M360.94 0 L360.44 0 L360.44 6 L360.94 6 L361.44 6 L361.44 0 L360.94 0 Z M364.16 0 L363.66 0 L363.66 6 L364.16 6 L364.66 6 L364.66 0 L364.16 0 Z M367.38 0 L366.88 0 L366.88 6 L367.38 6 L367.88 6 L367.88 0 L367.38 0 Z M370.61 0 L370.11 0 L370.11 6 L370.61 6 L371.11 6 L371.11 0 L370.61 0 Z M373.83 0 L373.33 0 L373.33 6 L373.83 6 L374.33 6 L374.33 0 L373.83 0 Z M377.05 0 L376.55 0 L376.55 6 L377.05 6 L377.55 6 L377.55 0 L377.05 0 Z M380.27 0 L379.77 0 L379.77 6 L380.27 6 L380.77 6 L380.77 0 L380.27 0 Z M383.5 0 L383 0 L383 6 L383.5 6 L384 6 L384 0 L383.5 0 Z M386.72 0 L386.22 0 L386.22 6 L386.72 6 L387.22 6 L387.22 0 L386.72 0 Z M389.94 0 L389.44 0 L389.44 6 L389.94 6 L390.44 6 L390.44 0 L389.94 0 Z M393.17 0 L392.67 0 L392.67 6 L393.17 6 L393.67 6 L393.67 0 L393.17 0 Z M396.39 0 L395.89 0 L395.89 6 L396.39 6 L396.89 6 L396.89 0 L396.39 0 Z M399.61 0 L399.11 0 L399.11 6 L399.61 6 L400.11 6 L400.11 0 L399.61 0 Z M402.83 0 L402.33 0 L402.33 6 L402.83 6 L403.33 6 L403.33 0 L402.83 0 Z M406.06 0 L405.56 0 L405.56 6 L406.06 6 L406.56 6 L406.56 0 L406.06 0 Z M409.28 0 L408.78 0 L408.78 6 L409.28 6 L409.78 6 L409.78 0 L409.28 0 Z M412.5 0 L412 0 L412 6 L412.5 6 L413 6 L413 0 L412.5 0 Z M415.72 0 L415.22 0 L415.22 6 L415.72 6 L416.22 6 L416.22 0 L415.72 0 Z M418.95 0 L418.45 0 L418.45 6 L418.95 6 L419.45 6 L419.45 0 L418.95 0 Z M422.17 0 L421.67 0 L421.67 6 L422.17 6 L422.67 6 L422.67 0 L422.17 0 Z M425.39 0 L424.89 0 L424.89 6 L425.39 6 L425.89 6 L425.89 0 L425.39 0 Z M428.61 0 L428.11 0 L428.11 6 L428.61 6 L429.11 6 L429.11 0 L428.61 0 Z M431.84 0 L431.34 0 L431.34 6 L431.84 6 L432.34 6 L432.34 0 L431.84 0 Z M435.06 0 L434.56 0 L434.56 6 L435.06 6 L435.56 6 L435.56 0 L435.06 0 Z" fill="#d4d4d8"/></svg>
              </div>
            </div>
          </div>
          <X size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#8a8a8a", display: "block" }} />
        </div>
      </div>
      <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ width: "16px", height: "16px", flexShrink: 0, borderRadius: "4px", background: "#2563eb", boxShadow: "inset 0 0 0 1px #347bf9", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <Check size={12} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#ffffff", display: "block" }} />
        </div>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "340px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#2d2d2d" }}>Notify Omar Haddad (control owner) when processed</p>
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
