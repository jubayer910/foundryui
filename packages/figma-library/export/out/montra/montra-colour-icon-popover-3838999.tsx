"use client";
// Colour & icon popover (montra, Popovers) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Ingot Icons.
import { useEffect, useRef } from "react";
import { Check, Gift, Mail, Megaphone, Rocket, Share, Sparkles, Star, Target, Video, World } from "ingotui-icons/react/stroke-rounded";

export function ColourIconPopover() {
  const fuRef = useRef<any>(null);
  useEffect(() => fuInteract(fuRef.current), []);
  return (
    <div ref={fuRef} style={{ width: "274.17px", height: "284.43px", borderRadius: "10.97px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8, 0px 10.97px 25.59px -7.31px rgba(13, 13, 18, 0.08), 0px 0.91px 1.83px 0px rgba(13, 13, 18, 0.05)", display: "flex", flexDirection: "column", padding: "13.7px 13.7px 13.7px 13.7px", gap: "10.97px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
      <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "5.48px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "33px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 500, color: "#222222" }}>Name</p>
        <div data-fu="field" style={{ alignSelf: "stretch", height: "34.73px", flexShrink: 0, borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8, 0px 0.91px 1.83px 0px rgba(79, 79, 79, 0.12)", display: "flex", flexDirection: "row", padding: "0.91px 10.05px 0.91px 10.05px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "18.28px", height: "18.28px", flexShrink: 0, borderRadius: "3.66px", background: "linear-gradient(180deg, #91d02b 0%, #e2ffb3 100%)", boxShadow: "0px 0.91px 1.83px 0px rgba(0, 0, 0, 0.08)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <Megaphone size={8.8} style={{ width: "8.77px", height: "8.77px", flexShrink: 0, color: "#ffffff", display: "block" }} />
          </div>
          <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#222222" }}>Marketing</p>
        </div>
      </div>
      <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "38px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 500, color: "#222222" }}>Colour</p>
      <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "3.66px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ width: "23.76px", height: "23.76px", flexShrink: 0, borderRadius: "999px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "18.28px", height: "18.28px", flexShrink: 0, borderRadius: "999px", background: "linear-gradient(180deg, #4a96fe 0%, #adcfff 100%)", boxShadow: "0px 0.91px 1.83px 0px rgba(0, 0, 0, 0.08)" }} />
        </div>
        <div style={{ width: "23.76px", height: "23.76px", flexShrink: 0, borderRadius: "999px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "18.28px", height: "18.28px", flexShrink: 0, borderRadius: "999px", background: "linear-gradient(180deg, #8e83fd 0%, #d9d4ff 100%)", boxShadow: "0px 0.91px 1.83px 0px rgba(0, 0, 0, 0.08)" }} />
        </div>
        <div style={{ width: "23.76px", height: "23.76px", flexShrink: 0, borderRadius: "999px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "18.28px", height: "18.28px", flexShrink: 0, borderRadius: "999px", background: "linear-gradient(180deg, #0ab7bd 0%, #a9fcff 100%)", boxShadow: "0px 0.91px 1.83px 0px rgba(0, 0, 0, 0.08)" }} />
        </div>
        <div style={{ width: "23.76px", height: "23.76px", flexShrink: 0, borderRadius: "999px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "18.28px", height: "18.28px", flexShrink: 0, borderRadius: "999px", background: "linear-gradient(180deg, #1db9e2 0%, #a1ebff 100%)", boxShadow: "0px 0.91px 1.83px 0px rgba(0, 0, 0, 0.08)" }} />
        </div>
        <div style={{ width: "23.76px", height: "23.76px", flexShrink: 0, borderRadius: "999px", boxShadow: "inset 0 0 0 1.37px #222222", display: "flex", flexDirection: "row", padding: "1.37px 1.37px 1.37px 1.37px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "18.28px", height: "18.28px", flexShrink: 0, borderRadius: "999px", background: "linear-gradient(180deg, #91d02b 0%, #e2ffb3 100%)", boxShadow: "0px 0.91px 1.83px 0px rgba(0, 0, 0, 0.08)", position: "relative" }}>
            <Check size={11} strokeWidth={1.51} style={{ position: "absolute", left: "3.66px", top: "3.65px", width: "10.97px", height: "10.97px", color: "#ffffff", display: "block", flexShrink: 0 }} />
          </div>
        </div>
        <div style={{ width: "23.76px", height: "23.76px", flexShrink: 0, borderRadius: "999px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "18.28px", height: "18.28px", flexShrink: 0, borderRadius: "999px", background: "linear-gradient(180deg, #ecb615 0%, #ffe9a7 100%)", boxShadow: "0px 0.91px 1.83px 0px rgba(0, 0, 0, 0.08)" }} />
        </div>
        <div style={{ width: "23.76px", height: "23.76px", flexShrink: 0, borderRadius: "999px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "18.28px", height: "18.28px", flexShrink: 0, borderRadius: "999px", background: "linear-gradient(180deg, #fd872f 0%, #ffd3b0 100%)", boxShadow: "0px 0.91px 1.83px 0px rgba(0, 0, 0, 0.08)" }} />
        </div>
        <div style={{ width: "23.76px", height: "23.76px", flexShrink: 0, borderRadius: "999px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "18.28px", height: "18.28px", flexShrink: 0, borderRadius: "999px", background: "linear-gradient(180deg, #f45363 0%, #ffc7cd 100%)", boxShadow: "0px 0.91px 1.83px 0px rgba(0, 0, 0, 0.08)" }} />
        </div>
        <div style={{ width: "23.76px", height: "23.76px", flexShrink: 0, borderRadius: "999px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "18.28px", height: "18.28px", flexShrink: 0, borderRadius: "999px", background: "linear-gradient(180deg, #8a8f99 0%, #dfe1e6 100%)", boxShadow: "0px 0.91px 1.83px 0px rgba(0, 0, 0, 0.08)" }} />
        </div>
      </div>
      <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "24px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 500, color: "#222222" }}>Icon</p>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "45px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#a6a6a6" }}>12 of 154</p>
      </div>
      <div style={{ width: "248.59px", flexShrink: 0, display: "flex", flexDirection: "row", flexWrap: "wrap", rowGap: "5.48px", columnGap: "5.48px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ width: "36.87px", height: "31.07px", flexShrink: 0, borderRadius: "7.31px", background: "rgba(99, 192, 147, 0.12)", boxShadow: "inset 0 0 0 0.91px rgba(99, 192, 147, 0.6)", display: "flex", flexDirection: "row", padding: "0.91px 0.91px 0.91px 0.91px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <Megaphone size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#458667", display: "block" }} />
        </div>
        <div style={{ width: "36.87px", height: "31.07px", flexShrink: 0, borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8", display: "flex", flexDirection: "row", padding: "0.91px 0.91px 0.91px 0.91px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <Target size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#646871", display: "block" }} />
        </div>
        <div style={{ width: "36.87px", height: "31.07px", flexShrink: 0, borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8", display: "flex", flexDirection: "row", padding: "0.91px 0.91px 0.91px 0.91px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <World size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#646871", display: "block" }} />
        </div>
        <div style={{ width: "36.87px", height: "31.07px", flexShrink: 0, borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8", display: "flex", flexDirection: "row", padding: "0.91px 0.91px 0.91px 0.91px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <Video size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#646871", display: "block" }} />
        </div>
        <div style={{ width: "36.87px", height: "31.07px", flexShrink: 0, borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8", display: "flex", flexDirection: "row", padding: "0.91px 0.91px 0.91px 0.91px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <svg style={{ width: "14.62px", height: "14.62px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="14.62" height="14.62" viewBox="0 0 14.62 14.62" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 3.655 3.654)" d="M1.8275 0.91375 L1.37063 0.91375 C1.37063 1.16608 1.16608 1.37063 0.91375 1.37063 L0.91375 1.8275 L0.91375 2.28438 C1.67073 2.28438 2.28438 1.67073 2.28438 0.91375 L1.8275 0.91375 Z M0.91375 1.8275 L0.91375 1.37063 C0.661425 1.37063 0.456875 1.16608 0.456875 0.91375 L0 0.91375 L-0.456875 0.91375 C-0.456875 1.67073 0.156775 2.28438 0.91375 2.28438 L0.91375 1.8275 Z M0 0.91375 L0.456875 0.91375 C0.456875 0.661425 0.661425 0.456875 0.91375 0.456875 L0.91375 0 L0.91375 -0.456875 C0.156775 -0.456875 -0.456875 0.156775 -0.456875 0.91375 L0 0.91375 Z M0.91375 0 L0.91375 0.456875 C1.16608 0.456875 1.37063 0.661425 1.37063 0.91375 L1.8275 0.91375 L2.28438 0.91375 C2.28438 0.156775 1.67073 -0.456875 0.91375 -0.456875 L0.91375 0 Z" fill="#646871"/><path transform="matrix(1 0 0 1 1.523 1.523)" d="M0 5.78708 L0.456875 5.78708 C0.456875 4.4033 0.45787 3.4197 0.559316 2.67334 C0.658749 1.9418 0.84723 1.50456 1.17589 1.17589 L0.852833 0.852833 L0.529774 0.529774 C0.00560335 1.05394 -0.232332 1.7132 -0.346108 2.55027 C-0.45787 3.37251 -0.456875 4.42961 -0.456875 5.78708 L0 5.78708 Z M0.852833 0.852833 L1.17589 1.17589 C1.50456 0.84723 1.9418 0.658749 2.67334 0.559316 C3.4197 0.45787 4.4033 0.456875 5.78708 0.456875 L5.78708 0 L5.78708 -0.456875 C4.42961 -0.456875 3.37251 -0.45787 2.55027 -0.346108 C1.7132 -0.232332 1.05394 0.00560335 0.529774 0.529774 L0.852833 0.852833 Z M5.78708 0 L5.78708 0.456875 C7.17086 0.456875 8.15447 0.45787 8.90083 0.559316 C9.63237 0.658749 10.0696 0.84723 10.3983 1.17589 L10.7213 0.852833 L11.0444 0.529774 C10.5202 0.00560334 9.86096 -0.232332 9.0239 -0.346108 C8.20165 -0.45787 7.14455 -0.456875 5.78708 -0.456875 L5.78708 0 Z M10.7213 0.852833 L10.3983 1.17589 C10.7269 1.50456 10.9154 1.9418 11.0149 2.67334 C11.1163 3.4197 11.1173 4.4033 11.1173 5.78708 L11.5742 5.78708 L12.031 5.78708 C12.031 4.42961 12.032 3.37251 11.9203 2.55027 C11.8065 1.7132 11.5686 1.05394 11.0444 0.529774 L10.7213 0.852833 Z M11.5742 5.78708 L11.1173 5.78708 C11.1173 7.17086 11.1163 8.15447 11.0149 8.90083 C10.9154 9.63237 10.7269 10.0696 10.3983 10.3983 L10.7213 10.7213 L11.0444 11.0444 C11.5686 10.5202 11.8065 9.86096 11.9203 9.0239 C12.032 8.20165 12.031 7.14455 12.031 5.78708 L11.5742 5.78708 Z M10.7213 10.7213 L10.3983 10.3983 C10.0696 10.7269 9.63237 10.9154 8.90083 11.0149 C8.15447 11.1163 7.17086 11.1173 5.78708 11.1173 L5.78708 11.5742 L5.78708 12.031 C7.14455 12.031 8.20165 12.032 9.0239 11.9203 C9.86096 11.8065 10.5202 11.5686 11.0444 11.0444 L10.7213 10.7213 Z M5.78708 11.5742 L5.78708 11.1173 C4.4033 11.1173 3.4197 11.1163 2.67334 11.0149 C1.9418 10.9154 1.50456 10.7269 1.17589 10.3983 L0.852833 10.7213 L0.529774 11.0444 C1.05394 11.5686 1.7132 11.8065 2.55027 11.9203 C3.37251 12.032 4.42961 12.031 5.78708 12.031 L5.78708 11.5742 Z M0.852833 10.7213 L1.17589 10.3983 C0.84723 10.0696 0.658749 9.63237 0.559316 8.90083 C0.45787 8.15447 0.456875 7.17086 0.456875 5.78708 L0 5.78708 L-0.456875 5.78708 C-0.456875 7.14455 -0.45787 8.20165 -0.346108 9.0239 C-0.232332 9.86096 0.00560334 10.5202 0.529774 11.0444 L0.852833 10.7213 Z" fill="#646871"/><path transform="matrix(1 0 0 1 3.046 7.305)" d="M-0.348772 5.19321 C-0.51176 5.38583 -0.487736 5.67411 -0.295115 5.8371 C-0.102493 6.00008 0.185785 5.97606 0.348772 5.78344 L0 5.48832 L-0.348772 5.19321 Z M9.80527 1.30458 C10.0179 1.44043 10.3004 1.37818 10.4363 1.16555 C10.5721 0.952917 10.5099 0.670416 10.2972 0.534567 L10.0513 0.919574 L9.80527 1.30458 Z M0 5.48832 L0.348772 5.78344 C1.71651 4.16702 3.07927 2.39523 4.64106 1.34431 C5.40937 0.827315 6.19856 0.505987 7.03138 0.462065 C7.85953 0.41839 8.77538 0.646592 9.80527 1.30458 L10.0513 0.919574 L10.2972 0.534567 C9.13412 -0.208527 8.03211 -0.505732 6.98326 -0.450417 C5.93908 -0.395349 4.99215 0.00670793 4.13094 0.586212 C2.43368 1.72829 0.963819 3.64197 -0.348772 5.19321 L0 5.48832 Z" fill="#646871"/></svg>
        </div>
        <div style={{ width: "36.87px", height: "31.07px", flexShrink: 0, borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8", display: "flex", flexDirection: "row", padding: "0.91px 0.91px 0.91px 0.91px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <Sparkles size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#646871", display: "block" }} />
        </div>
        <div style={{ width: "36.87px", height: "31.07px", flexShrink: 0, borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8", display: "flex", flexDirection: "row", padding: "0.91px 0.91px 0.91px 0.91px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <Gift size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#646871", display: "block" }} />
        </div>
        <div style={{ width: "36.87px", height: "31.07px", flexShrink: 0, borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8", display: "flex", flexDirection: "row", padding: "0.91px 0.91px 0.91px 0.91px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <Rocket size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#646871", display: "block" }} />
        </div>
        <div style={{ width: "36.87px", height: "31.07px", flexShrink: 0, borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8", display: "flex", flexDirection: "row", padding: "0.91px 0.91px 0.91px 0.91px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <Mail size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#646871", display: "block" }} />
        </div>
        <div style={{ width: "36.87px", height: "31.07px", flexShrink: 0, borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8", display: "flex", flexDirection: "row", padding: "0.91px 0.91px 0.91px 0.91px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <Share size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#646871", display: "block" }} />
        </div>
        <div style={{ width: "36.87px", height: "31.07px", flexShrink: 0, borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8", display: "flex", flexDirection: "row", padding: "0.91px 0.91px 0.91px 0.91px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <Star size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#646871", display: "block" }} />
        </div>
        <div style={{ width: "36.87px", height: "31.07px", flexShrink: 0, borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8", display: "flex", flexDirection: "row", padding: "0.91px 0.91px 0.91px 0.91px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <svg style={{ width: "14.62px", height: "14.62px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="14.62" height="14.62" viewBox="0 0 14.62 14.62" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 3.036 1.82)" d="M-0.447128 10.9715 C-0.447128 11.2238 -0.242578 11.4284 0.00974671 11.4284 C0.262072 11.4284 0.466622 11.2238 0.466622 10.9715 L0.00974671 10.9715 L-0.447128 10.9715 Z M0.13158 0.615649 L-0.318593 0.537358 L-0.319704 0.544393 L0.13158 0.615649 Z M5.49225 1.59032 L5.67973 1.17368 C5.67281 1.17056 5.6658 1.16762 5.65873 1.16485 L5.49225 1.59032 Z M6.71058 2.13857 L6.52309 2.5552 C6.532 2.5592 6.54102 2.56292 6.55016 2.56635 L6.71058 2.13857 Z M8.41625 4.0879 L8.77301 4.37331 C8.78285 4.36101 8.79204 4.34821 8.80056 4.33496 L8.41625 4.0879 Z M6.7715 5.24532 L6.93653 5.67134 C6.94605 5.66765 6.95545 5.66365 6.9647 5.65933 L6.7715 5.24532 Z M0.00974671 10.9715 L0.466622 10.9715 L0.466622 7.86473 L0.00974671 7.86473 L-0.447128 7.86473 L-0.447128 10.9715 L0.00974671 10.9715 Z M0.00974671 7.86473 L0.466622 7.86473 C0.466622 6.21197 0.451386 4.69947 0.458999 3.44343 C0.466658 2.17957 0.497841 1.22539 0.582864 0.686904 L0.13158 0.615649 L-0.319704 0.544393 C-0.417431 1.16333 -0.447165 2.18893 -0.454735 3.43789 C-0.462351 4.69466 -0.447128 6.22799 -0.447128 7.86473 L0.00974671 7.86473 Z M0.13158 0.615649 L0.581699 0.69393 C0.600646 0.584983 0.632295 0.541692 0.648232 0.52491 C0.663038 0.50932 0.693277 0.485757 0.768915 0.470386 C0.94666 0.434264 1.25318 0.466572 1.72375 0.604754 C2.65942 0.879513 3.87968 1.44992 5.32576 2.01578 L5.49225 1.59032 L5.65873 1.16485 C4.30265 0.634214 2.96441 0.0167424 1.9812 -0.271977 C1.49233 -0.415535 0.999323 -0.508867 0.586937 -0.42506 C0.36751 -0.380467 0.155035 -0.282672 -0.0143374 -0.104328 C-0.182578 0.0728244 -0.276569 0.296043 -0.318539 0.537367 L0.13158 0.615649 Z M5.49225 1.59032 L5.30476 2.00695 L6.52309 2.5552 L6.71058 2.13857 L6.89807 1.72193 L5.67973 1.17368 L5.49225 1.59032 Z M6.71058 2.13857 L6.55016 2.56635 C7.01915 2.74222 7.51949 2.99226 7.82926 3.27042 C7.98352 3.40894 8.05585 3.52383 8.08037 3.60581 C8.09819 3.6654 8.10085 3.73364 8.03193 3.84084 L8.41625 4.0879 L8.80056 4.33496 C9.00577 4.01574 9.05412 3.67279 8.95582 3.34404 C8.86421 3.03767 8.65861 2.78707 8.43976 2.59054 C8.0033 2.19862 7.37668 1.90041 6.871 1.71078 L6.71058 2.13857 Z M8.41625 4.0879 L8.05949 3.80249 C7.86981 4.03959 7.44482 4.42693 6.57829 4.8313 L6.7715 5.24532 L6.9647 5.65933 C7.92568 5.21087 8.47535 4.74538 8.77301 4.37331 L8.41625 4.0879 Z M6.7715 5.24532 L6.60646 4.81929 L-0.15529 7.43871 L0.00974671 7.86473 L0.174784 8.29076 L6.93653 5.67134 L6.7715 5.24532 Z" fill="#646871"/></svg>
        </div>
      </div>
      <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "148px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#6b6b6b" }}>Also used by 3 subcategories</p>
        <div data-fu="btn" style={{ height: "25.59px", flexShrink: 0, borderRadius: "7.31px", background: "linear-gradient(90deg, #222222 0%, #3a3a3a 50%, #222222 100%)", boxShadow: "inset 0 0 0 0.91px #dfe1e6", display: "flex", flexDirection: "row", padding: "0.91px 11.88px 0.91px 11.88px", gap: "3.66px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "32px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#ffffff", lineHeight: "1.4500000476837158" }}>Done</p>
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
