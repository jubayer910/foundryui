"use client";
// Daily Cash Movement card (montra, Charts) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Ingot Icons.
import { useEffect, useRef } from "react";
import { Calendar, ChevronDown } from "ingotui-icons/react/stroke-rounded";

export function DailyCashMovementCard() {
  const fuRef = useRef<any>(null);
  useEffect(() => fuInteract(fuRef.current), []);
  return (
    <div ref={fuRef} style={{ width: "711px", height: "353.7px", borderRadius: "10.97px", background: "#fefefe", boxShadow: "inset 0 0 0 0.91px #ededed", overflow: "hidden", position: "relative" }}>
      <p style={{ position: "absolute", left: "18.28px", top: "18.28px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "149px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.62px", fontWeight: 500, color: "#000000" }}>Daily Cash Movement</p>
      <p style={{ position: "absolute", left: "18.28px", top: "43.87px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "227px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#6b6b6b" }}>Money in and out per day, last 30 days.</p>
      <div data-fu="btn" style={{ position: "absolute", left: "596.9px", top: "18.28px", width: "95.82px", height: "29.24px", borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8, 0px 0.91px 1.83px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "row", padding: "0.91px 8.22px 0.91px 8.22px", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <Calendar size={16.5} style={{ width: "16.45px", height: "16.45px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "41px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#6c6c6c" }}>30 days</p>
        <ChevronDown size={11} strokeWidth={1.51} style={{ width: "10.97px", height: "10.97px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
      </div>
      <div style={{ position: "absolute", left: "18.28px", top: "73.11px", width: "225.8px", height: "14px", display: "flex", flexDirection: "row", gap: "10.97px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "9.14px", height: "9.14px", flexShrink: 0, borderRadius: "1.83px", background: "#4996fe", boxShadow: "inset 0 0 0 0.91px rgba(214, 214, 214, 0.4), inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.29)" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "46px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#24322e" }}>Money in</p>
        </div>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "9.14px", height: "9.14px", flexShrink: 0, borderRadius: "1.83px", background: "#fd872f", boxShadow: "inset 0 0 0 0.91px rgba(214, 214, 214, 0.4), inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.29)" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "53px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#24322e" }}>Money out</p>
        </div>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "9.14px", height: "9.14px", flexShrink: 0, borderRadius: "1.83px", background: "#1f1f22", boxShadow: "inset 0 0 0 0.91px rgba(214, 214, 214, 0.4), inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.29)" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "61px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#24322e" }}>Running net</p>
        </div>
      </div>
      <div style={{ position: "absolute", left: "18.28px", top: "110px", width: "674.44px", height: "230px" }}>
        <svg style={{ position: "absolute", left: "31.07px", top: "7.31px", width: "643.37px", height: "1px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="643.37" height="1" viewBox="0 0 643.37 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0L643.3699951171875 0" fill="none" stroke="#efeff1" strokeWidth="1" strokeDasharray="2.740000009536743 2.740000009536743" strokeLinecap="butt"/></svg>
        <p style={{ position: "absolute", left: "2.76px", top: "0.31px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "21px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#6b6b6b" }}>$5K</p>
        <svg style={{ position: "absolute", left: "31.07px", top: "57.04px", width: "643.37px", height: "1px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="643.37" height="1" viewBox="0 0 643.37 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0L643.3699951171875 0" fill="none" stroke="#efeff1" strokeWidth="1" strokeDasharray="2.740000009536743 2.740000009536743" strokeLinecap="butt"/></svg>
        <p style={{ position: "absolute", left: "0px", top: "50.04px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "30px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#6b6b6b" }}>$2.5K</p>
        <svg style={{ position: "absolute", left: "31.07px", top: "106.77px", width: "643.37px", height: "1px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="643.37" height="1" viewBox="0 0 643.37 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0L643.3699951171875 0" fill="none" stroke="#efeff1" strokeWidth="1" strokeDasharray="2.740000009536743 2.740000009536743" strokeLinecap="butt"/></svg>
        <p style={{ position: "absolute", left: "8.76px", top: "99.77px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "15px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#6b6b6b" }}>$0</p>
        <svg style={{ position: "absolute", left: "31.07px", top: "156.51px", width: "643.37px", height: "1px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="643.37" height="1" viewBox="0 0 643.37 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0L643.3699951171875 0" fill="none" stroke="#efeff1" strokeWidth="1" strokeDasharray="2.740000009536743 2.740000009536743" strokeLinecap="butt"/></svg>
        <p style={{ position: "absolute", left: "0px", top: "149.51px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "36px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#6b6b6b" }}>−$2.5K</p>
        <div style={{ position: "absolute", left: "31.07px", top: "205.74px", width: "643.37px", height: "1px", background: "#e2e2e5" }} />
        <p style={{ position: "absolute", left: "0px", top: "199.24px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "27px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#6b6b6b" }}>−$5K</p>
        <div data-fu="bar" style={{ position: "absolute", left: "37.29px", top: "76.03px", width: "9.01px", height: "20.7px", borderRadius: "4.5px", background: "#89bbfe" }} />
        <div data-fu="bar" style={{ position: "absolute", left: "37.29px", top: "98.73px", width: "9.01px", height: "9.85px", borderRadius: "4.5px", background: "#feb782" }} />
        <div data-fu="bar" style={{ position: "absolute", left: "58.73px", top: "90.5px", width: "9.01px", height: "6.23px", borderRadius: "4.5px", background: "#89bbfe" }} />
        <div data-fu="bar" style={{ position: "absolute", left: "58.73px", top: "98.73px", width: "9.01px", height: "18.89px", borderRadius: "4.5px", background: "#feb782" }} />
        <div data-fu="bar" style={{ position: "absolute", left: "80.18px", top: "81.46px", width: "9.01px", height: "15.28px", borderRadius: "4.5px", background: "#89bbfe" }} />
        <div data-fu="bar" style={{ position: "absolute", left: "80.18px", top: "98.73px", width: "9.01px", height: "6.23px", borderRadius: "4.5px", background: "#feb782" }} />
        <div data-fu="bar" style={{ position: "absolute", left: "101.63px", top: "97.73px", width: "9.01px", height: "0.5px", borderRadius: "4.5px", background: "#89bbfe" }} />
        <div data-fu="bar" style={{ position: "absolute", left: "101.63px", top: "98.73px", width: "9.01px", height: "2.62px", borderRadius: "4.5px", background: "#feb782" }} />
        <div data-fu="bar" style={{ position: "absolute", left: "123.07px", top: "97.73px", width: "9.01px", height: "0.5px", borderRadius: "4.5px", background: "#89bbfe" }} />
        <div data-fu="bar" style={{ position: "absolute", left: "123.07px", top: "98.73px", width: "9.01px", height: "0.81px", borderRadius: "4.5px", background: "#feb782" }} />
        <div data-fu="bar" style={{ position: "absolute", left: "144.52px", top: "59.76px", width: "9.01px", height: "36.98px", borderRadius: "4.5px", background: "#89bbfe" }} />
        <div data-fu="bar" style={{ position: "absolute", left: "144.52px", top: "98.73px", width: "9.01px", height: "15.28px", borderRadius: "4.5px", background: "#feb782" }} />
        <div data-fu="bar" style={{ position: "absolute", left: "165.96px", top: "86.88px", width: "9.01px", height: "9.85px", borderRadius: "4.5px", background: "#89bbfe" }} />
        <div data-fu="bar" style={{ position: "absolute", left: "165.96px", top: "98.73px", width: "9.01px", height: "24.32px", borderRadius: "4.5px", background: "#feb782" }} />
        <div data-fu="bar" style={{ position: "absolute", left: "187.41px", top: "72.41px", width: "9.01px", height: "24.32px", borderRadius: "4.5px", background: "#89bbfe" }} />
        <div data-fu="bar" style={{ position: "absolute", left: "187.41px", top: "98.73px", width: "9.01px", height: "11.66px", borderRadius: "4.5px", background: "#feb782" }} />
        <div data-fu="bar" style={{ position: "absolute", left: "208.85px", top: "92.31px", width: "9.01px", height: "4.43px", borderRadius: "4.5px", background: "#89bbfe" }} />
        <div data-fu="bar" style={{ position: "absolute", left: "208.85px", top: "98.73px", width: "9.01px", height: "38.79px", borderRadius: "4.5px", background: "#feb782" }} />
        <div data-fu="bar" style={{ position: "absolute", left: "230.3px", top: "83.27px", width: "9.01px", height: "13.47px", borderRadius: "4.5px", background: "#89bbfe" }} />
        <div data-fu="bar" style={{ position: "absolute", left: "230.3px", top: "98.73px", width: "9.01px", height: "8.04px", borderRadius: "4.5px", background: "#feb782" }} />
        <div data-fu="bar" style={{ position: "absolute", left: "251.75px", top: "97.73px", width: "9.01px", height: "0.5px", borderRadius: "4.5px", background: "#89bbfe" }} />
        <div data-fu="bar" style={{ position: "absolute", left: "251.75px", top: "98.73px", width: "9.01px", height: "2.62px", borderRadius: "4.5px", background: "#feb782" }} />
        <div data-fu="bar" style={{ position: "absolute", left: "273.19px", top: "97.73px", width: "9.01px", height: "0.5px", borderRadius: "4.5px", background: "#89bbfe" }} />
        <div data-fu="bar" style={{ position: "absolute", left: "273.19px", top: "98.73px", width: "9.01px", height: "0.81px", borderRadius: "4.5px", background: "#feb782" }} />
        <div data-fu="bar" style={{ position: "absolute", left: "294.64px", top: "39.86px", width: "9.01px", height: "56.87px", borderRadius: "4.5px", background: "#89bbfe" }} />
        <div data-fu="bar" style={{ position: "absolute", left: "294.64px", top: "98.73px", width: "9.01px", height: "13.47px", borderRadius: "4.5px", background: "#feb782" }} />
        <div data-fu="bar" style={{ position: "absolute", left: "316.08px", top: "88.69px", width: "9.01px", height: "8.04px", borderRadius: "4.5px", background: "#89bbfe" }} />
        <div data-fu="bar" style={{ position: "absolute", left: "316.08px", top: "98.73px", width: "9.01px", height: "27.94px", borderRadius: "4.5px", background: "#feb782" }} />
        <div data-fu="bar" style={{ position: "absolute", left: "337.53px", top: "77.84px", width: "9.01px", height: "18.89px", borderRadius: "4.5px", background: "#89bbfe" }} />
        <div data-fu="bar" style={{ position: "absolute", left: "337.53px", top: "98.73px", width: "9.01px", height: "9.85px", borderRadius: "4.5px", background: "#feb782" }} />
        <div data-fu="bar" style={{ position: "absolute", left: "358.97px", top: "85.07px", width: "9.01px", height: "11.66px", borderRadius: "4.5px", background: "#89bbfe" }} />
        <div data-fu="bar" style={{ position: "absolute", left: "358.97px", top: "98.73px", width: "9.01px", height: "15.28px", borderRadius: "4.5px", background: "#feb782" }} />
        <div data-fu="bar" style={{ position: "absolute", left: "380.42px", top: "90.5px", width: "9.01px", height: "6.23px", borderRadius: "4.5px", background: "#89bbfe" }} />
        <div data-fu="bar" style={{ position: "absolute", left: "380.42px", top: "98.73px", width: "9.01px", height: "20.7px", borderRadius: "4.5px", background: "#feb782" }} />
        <div data-fu="bar" style={{ position: "absolute", left: "401.87px", top: "97.73px", width: "9.01px", height: "0.5px", borderRadius: "4.5px", background: "#89bbfe" }} />
        <div data-fu="bar" style={{ position: "absolute", left: "401.87px", top: "98.73px", width: "9.01px", height: "4.43px", borderRadius: "4.5px", background: "#feb782" }} />
        <div data-fu="bar" style={{ position: "absolute", left: "423.31px", top: "97.73px", width: "9.01px", height: "0.5px", borderRadius: "4.5px", background: "#89bbfe" }} />
        <div data-fu="bar" style={{ position: "absolute", left: "423.31px", top: "98.73px", width: "9.01px", height: "0.81px", borderRadius: "4.5px", background: "#feb782" }} />
        <div data-fu="bar" style={{ position: "absolute", left: "444.76px", top: "50.71px", width: "9.01px", height: "46.02px", borderRadius: "4.5px", background: "#89bbfe" }} />
        <div data-fu="bar" style={{ position: "absolute", left: "444.76px", top: "98.73px", width: "9.01px", height: "17.08px", borderRadius: "4.5px", background: "#feb782" }} />
        <div data-fu="bar" style={{ position: "absolute", left: "466.2px", top: "81.46px", width: "9.01px", height: "15.28px", borderRadius: "4.5px", background: "#89bbfe" }} />
        <div data-fu="bar" style={{ position: "absolute", left: "466.2px", top: "98.73px", width: "9.01px", height: "11.66px", borderRadius: "4.5px", background: "#feb782" }} />
        <div data-fu="bar" style={{ position: "absolute", left: "487.65px", top: "92.31px", width: "9.01px", height: "4.43px", borderRadius: "4.5px", background: "#89bbfe" }} />
        <div data-fu="bar" style={{ position: "absolute", left: "487.65px", top: "98.73px", width: "9.01px", height: "104.79px", borderRadius: "4.5px", background: "#feb782" }} />
        <div data-fu="bar" style={{ position: "absolute", left: "509.09px", top: "68.8px", width: "9.01px", height: "27.94px", borderRadius: "4.5px", background: "#89bbfe" }} />
        <div data-fu="bar" style={{ position: "absolute", left: "509.09px", top: "98.73px", width: "9.01px", height: "13.47px", borderRadius: "4.5px", background: "#feb782" }} />
        <div data-fu="bar" style={{ position: "absolute", left: "530.54px", top: "88.69px", width: "9.01px", height: "8.04px", borderRadius: "4.5px", background: "#89bbfe" }} />
        <div data-fu="bar" style={{ position: "absolute", left: "530.54px", top: "98.73px", width: "9.01px", height: "9.85px", borderRadius: "4.5px", background: "#feb782" }} />
        <div data-fu="bar" style={{ position: "absolute", left: "551.99px", top: "97.73px", width: "9.01px", height: "0.5px", borderRadius: "4.5px", background: "#89bbfe" }} />
        <div data-fu="bar" style={{ position: "absolute", left: "551.99px", top: "98.73px", width: "9.01px", height: "2.62px", borderRadius: "4.5px", background: "#feb782" }} />
        <div data-fu="bar" style={{ position: "absolute", left: "573.43px", top: "21.78px", width: "9.01px", height: "74.96px", borderRadius: "4.5px", background: "#89bbfe" }} />
        <div data-fu="bar" style={{ position: "absolute", left: "573.43px", top: "98.73px", width: "9.01px", height: "15.28px", borderRadius: "4.5px", background: "#feb782" }} />
        <div data-fu="bar" style={{ position: "absolute", left: "594.88px", top: "74.22px", width: "9.01px", height: "22.51px", borderRadius: "4.5px", background: "#89bbfe" }} />
        <div data-fu="bar" style={{ position: "absolute", left: "594.88px", top: "98.73px", width: "9.01px", height: "22.51px", borderRadius: "4.5px", background: "#feb782" }} />
        <div data-fu="bar" style={{ position: "absolute", left: "616.32px", top: "86.88px", width: "9.01px", height: "9.85px", borderRadius: "4.5px", background: "#89bbfe" }} />
        <div data-fu="bar" style={{ position: "absolute", left: "616.32px", top: "98.73px", width: "9.01px", height: "104.79px", borderRadius: "4.5px", background: "#feb782" }} />
        <div data-fu="bar" style={{ position: "absolute", left: "637.77px", top: "61.56px", width: "9.01px", height: "35.17px", borderRadius: "4.5px", background: "#89bbfe" }} />
        <div data-fu="bar" style={{ position: "absolute", left: "637.77px", top: "98.73px", width: "9.01px", height: "10.21px", borderRadius: "4.5px", background: "#feb782" }} />
        <div data-fu="bar" style={{ position: "absolute", left: "659.21px", top: "77.84px", width: "9.01px", height: "18.89px", borderRadius: "4.5px", background: "#89bbfe" }} />
        <div data-fu="bar" style={{ position: "absolute", left: "659.21px", top: "98.73px", width: "9.01px", height: "6.23px", borderRadius: "4.5px", background: "#feb782" }} />
        <svg data-fu="plot" style={{ position: "absolute", left: "41.79px", top: "86.97px", width: "621.92px", height: "45.75px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="621.92" height="45.75" viewBox="0 0 621.92 45.75" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0.205887 6.00017 C-0.337387 5.88646 -0.869976 6.23469 -0.983685 6.77796 C-1.09739 7.32124 -0.749161 7.85383 -0.205887 7.96754 L0 6.98385 L0.205887 6.00017 Z M21.45 11.4139 L21.4813 10.4093 L21.4773 10.4092 L21.45 11.4139 Z M42.89 8.25385 L42.933 9.25794 L42.9369 9.25776 L42.89 8.25385 Z M64.34 9.51385 L64.3869 8.50994 L64.3828 8.50976 L64.34 9.51385 Z M85.78 10.1539 L85.6185 9.16191 L85.6179 9.16201 L85.78 10.1539 Z M107.23 2.55385 L107.288 3.55716 L107.289 3.55714 L107.23 2.55385 Z M128.67 7.62385 L128.654 8.62874 L128.658 8.62878 L128.67 7.62385 Z M150.12 3.18385 L150.297 2.19457 L150.293 2.19391 L150.12 3.18385 Z M171.57 15.2139 L171.802 14.236 L171.801 14.2358 L171.57 15.2139 Z M214.46 14.5839 L214.413 15.5878 L214.417 15.5879 L214.46 14.5839 Z M235.9 15.2139 L235.579 14.2615 L235.578 14.2619 L235.9 15.2139 Z M257.35 0.0238505 L257.538 1.0112 L257.538 1.01107 L257.35 0.0238505 Z M278.79 6.98385 L278.7 7.98485 L278.701 7.98488 L278.79 6.98385 Z M300.24 3.82385 L300.283 4.82794 L300.287 4.82776 L300.24 3.82385 Z M321.69 5.08385 L321.837 4.08966 L321.836 4.08958 L321.69 5.08385 Z M364.58 12.0539 L364.518 13.0569 L364.521 13.0571 L364.58 12.0539 Z M386.02 12.6839 L385.803 11.7025 L385.802 11.7027 L386.02 12.6839 Z M407.47 2.55385 L407.213 1.58228 L407.21 1.58297 L407.47 2.55385 Z M428.91 1.29385 L428.285 2.08102 L428.289 2.08368 L428.91 1.29385 Z M450.36 36.4239 L449.781 37.2455 L449.783 37.247 L450.36 36.4239 Z M471.8 31.3539 L471.699 30.3539 L471.695 30.3544 L471.8 31.3539 Z M493.25 31.9839 L493.297 30.9799 L493.293 30.9798 L493.25 31.9839 Z M514.7 33.2538 L515.118 34.1678 L515.119 34.1672 L514.7 33.2538 Z M536.14 12.3639 L535.702 11.4594 L535.698 11.4615 L536.14 12.3639 Z M557.59 12.3639 L558.207 11.5707 L558.204 11.5681 L557.59 12.3639 Z M579.03 45.5938 L578.531 46.4662 L578.533 46.4671 L579.03 45.5938 Z M622.12 33.4187 C622.664 33.3083 623.015 32.7777 622.905 32.2338 C622.794 31.6899 622.264 31.3385 621.72 31.449 L621.92 32.4338 L622.12 33.4187 Z M0 6.98385 L-0.205887 7.96754 C0.441605 8.10306 5.1153 9.18356 10.0269 10.2557 C12.4687 10.7888 14.9567 11.3168 16.9984 11.7164 C18.9953 12.1072 20.6743 12.3982 21.4227 12.4185 L21.45 11.4139 L21.4773 10.4092 C20.9357 10.3945 19.4497 10.148 17.3844 9.74381 C15.364 9.34839 12.8926 8.82395 10.4556 8.29197 C5.6097 7.23415 0.848395 6.13464 0.205887 6.00017 L0 6.98385 Z M21.45 11.4139 L21.4187 12.4184 C22.1712 12.4418 23.7748 12.2423 25.6691 11.9636 C27.6094 11.6781 29.9769 11.2895 32.3352 10.8964 C34.698 10.5026 37.0504 10.1046 38.9754 9.79772 C40.9305 9.48602 42.3625 9.28235 42.933 9.25793 L42.89 8.25385 L42.847 7.24977 C42.1325 7.28035 40.5633 7.50918 38.659 7.81279 C36.7246 8.12119 34.3595 8.52133 32.0048 8.91378 C29.6456 9.30697 27.2956 9.69268 25.3765 9.97502 C23.4115 10.2641 22.0138 10.4259 21.4813 10.4093 L21.45 11.4139 Z M42.89 8.25385 L42.9369 9.25776 C44.1478 9.20121 48.7824 9.48123 53.544 9.80035 C58.2419 10.1152 62.9911 10.4623 64.2972 10.5179 L64.34 9.51385 L64.3828 8.50976 C63.1089 8.45545 58.4181 8.1125 53.6785 7.79485 C49.0026 7.48148 44.2022 7.18649 42.8431 7.24994 L42.89 8.25385 Z M64.34 9.51385 L64.2931 10.5178 C65.5582 10.5768 70.3024 10.8431 75.018 11.0405 C77.3798 11.1393 79.7486 11.2216 81.6911 11.2528 C83.589 11.2832 85.1915 11.2684 85.9421 11.1457 L85.78 10.1539 L85.6179 9.16201 C85.0835 9.24934 83.6847 9.27449 81.7233 9.24304 C79.8064 9.21231 77.4577 9.13085 75.102 9.03223 C70.3826 8.83465 65.6918 8.57087 64.3869 8.50994 L64.34 9.51385 Z M85.78 10.1539 L85.9415 11.1458 C86.3542 11.0786 86.9624 10.8972 87.6547 10.6662 C88.3686 10.428 89.2393 10.1136 90.2086 9.75181 C92.1467 9.02843 94.5148 8.10196 96.8683 7.18966 C99.2281 6.27485 101.574 5.37379 103.49 4.69244 C104.448 4.35157 105.287 4.06967 105.96 3.86955 C106.664 3.6602 107.097 3.56829 107.288 3.55716 L107.23 2.55385 L107.172 1.55054 C106.718 1.57691 106.078 1.7375 105.387 1.94295 C104.665 2.15764 103.788 2.45285 102.816 2.7987 C100.871 3.49079 98.4994 4.4016 96.1417 5.31555 C93.7777 6.23199 91.4283 7.15114 89.5058 7.8687 C88.5447 8.2274 87.6994 8.53231 87.0185 8.75953 C86.316 8.99393 85.8508 9.1241 85.6185 9.16191 L85.78 10.1539 Z M107.23 2.55385 L107.289 3.55714 C107.475 3.54627 107.901 3.58732 108.603 3.71561 C109.273 3.83811 110.11 4.02341 111.067 4.25415 C112.981 4.71539 115.326 5.3463 117.687 5.98747 C120.04 6.62667 122.41 7.27631 124.35 7.76791 C125.321 8.01373 126.194 8.22277 126.911 8.37223 C127.603 8.51638 128.226 8.62205 128.654 8.62873 L128.67 7.62385 L128.686 6.61897 C128.472 6.61565 128.023 6.55069 127.321 6.4045 C126.645 6.2636 125.803 6.06257 124.844 5.81948 C122.925 5.33326 120.577 4.68978 118.213 4.04773 C115.857 3.40765 113.484 2.76918 111.538 2.30012 C110.566 2.0657 109.688 1.8706 108.964 1.73838 C108.273 1.61194 107.628 1.52393 107.171 1.55056 L107.23 2.55385 Z M128.67 7.62385 L128.658 8.62878 C129.092 8.63383 129.72 8.54084 130.412 8.41102 C131.131 8.27625 132.006 8.08447 132.977 7.85825 C134.917 7.40611 137.29 6.80472 139.641 6.22181 C142.001 5.6366 144.342 5.06927 146.25 4.67631 C147.204 4.47968 148.035 4.32996 148.697 4.24312 C149.398 4.15117 149.794 4.14705 149.947 4.17379 L150.12 3.18385 L150.293 2.19391 C149.804 2.10815 149.128 2.15935 148.436 2.2502 C147.704 2.34618 146.819 2.50678 145.844 2.70764 C143.892 3.10968 141.515 3.6861 139.157 4.27089 C136.789 4.85798 134.442 5.45284 132.521 5.9007 C131.56 6.12448 130.718 6.30863 130.042 6.43543 C129.339 6.56717 128.893 6.62137 128.682 6.61892 L128.67 7.62385 Z M150.12 3.18385 L149.943 4.17313 C150.103 4.20183 150.517 4.35676 151.228 4.70849 C151.899 5.04053 152.736 5.49758 153.695 6.04461 C155.61 7.13799 157.956 8.56247 160.319 10.001 C162.674 11.4352 165.044 12.8836 166.987 14.0108 C167.958 14.5742 168.833 15.0639 169.553 15.4343 C170.239 15.7874 170.88 16.0834 171.339 16.1919 L171.57 15.2139 L171.801 14.2358 C171.615 14.1918 171.182 14.0119 170.473 13.647 C169.797 13.2995 168.956 12.8293 167.996 12.2722 C166.076 11.1585 163.728 9.72373 161.364 8.28425 C159.007 6.84898 156.636 5.40908 154.691 4.29903 C153.72 3.74434 152.842 3.2649 152.12 2.90714 C151.437 2.56907 150.779 2.28087 150.297 2.19457 L150.12 3.18385 Z M171.57 15.2139 L171.338 16.1917 C171.793 16.2996 172.441 16.3231 173.137 16.3139 C173.863 16.3043 174.744 16.256 175.719 16.1821 C177.669 16.0341 180.044 15.7793 182.406 15.5059 C184.761 15.2332 187.139 14.9375 189.055 14.7115 C191.011 14.4807 192.448 14.3277 193.026 14.3187 L193.01 13.3139 L192.994 12.309 C192.287 12.32 190.723 12.4907 188.819 12.7153 C186.876 12.9445 184.536 13.2358 182.174 13.5093 C179.818 13.7821 177.476 14.033 175.567 14.1778 C174.612 14.2503 173.777 14.2952 173.11 14.3041 C172.413 14.3133 171.99 14.2806 171.802 14.236 L171.57 15.2139 Z M193.01 13.3139 L193.026 14.3187 C194.258 14.2995 198.917 14.5822 203.666 14.8917 C208.369 15.1982 213.111 15.5272 214.413 15.5878 L214.46 14.5839 L214.507 13.5799 C213.229 13.5205 208.531 13.1945 203.797 12.886 C199.108 12.5805 194.332 12.2882 192.994 12.309 L193.01 13.3139 Z M214.46 14.5839 L214.417 15.5879 C215.723 15.6438 220.334 16.0134 225.126 16.2699 C227.49 16.3965 229.868 16.4931 231.822 16.5029 C232.798 16.5078 233.682 16.4911 234.411 16.444 C235.11 16.3988 235.764 16.3209 236.222 16.1658 L235.9 15.2139 L235.578 14.2619 C235.394 14.3243 234.975 14.3933 234.281 14.4382 C233.618 14.4811 232.786 14.4977 231.832 14.4929 C229.927 14.4834 227.587 14.3888 225.234 14.2628 C220.591 14.0143 215.767 13.6339 214.503 13.5798 L214.46 14.5839 Z M235.9 15.2139 L236.221 16.1662 C236.687 16.0089 237.33 15.6215 238.012 15.1691 C238.73 14.6927 239.604 14.0674 240.574 13.3505 C242.515 11.9166 244.884 10.0826 247.238 8.27305 C249.598 6.45783 251.943 4.66659 253.857 3.29941 C254.815 2.61517 255.651 2.04723 256.318 1.63878 C256.652 1.43436 256.932 1.27753 257.155 1.16783 C257.266 1.11323 257.356 1.07401 257.426 1.04732 C257.461 1.03415 257.488 1.0251 257.508 1.01911 C257.528 1.01302 257.538 1.01118 257.538 1.0112 L257.35 0.0238505 L257.162 -0.9635 C256.866 -0.90716 256.554 -0.775981 256.27 -0.636565 C255.97 -0.489414 255.632 -0.298028 255.269 -0.0756854 C254.542 0.369379 253.661 0.969096 252.689 1.66391 C250.742 3.05486 248.369 4.86737 246.012 6.67965 C243.648 8.49755 241.3 10.3148 239.38 11.7341 C238.42 12.4437 237.577 13.0455 236.901 13.4939 C236.189 13.9662 235.758 14.2013 235.579 14.2615 L235.9 15.2139 Z M257.35 0.0238505 L257.538 1.01107 C257.635 0.99258 257.986 1.00217 258.691 1.155 C259.343 1.29638 260.167 1.52854 261.119 1.83033 C263.021 2.43312 265.358 3.28847 267.717 4.17464 C270.063 5.0562 272.438 5.9711 274.374 6.67493 C275.343 7.02742 276.217 7.3324 276.936 7.55761 C277.624 7.77351 278.257 7.94515 278.7 7.98485 L278.79 6.98385 L278.88 5.98285 C278.681 5.96505 278.242 5.86075 277.537 5.6397 C276.862 5.42795 276.021 5.13497 275.061 4.7859 C273.137 4.0866 270.795 3.184 268.423 2.29307 C266.065 1.40673 263.684 0.534586 261.726 -0.0857502 C260.749 -0.39553 259.858 -0.64883 259.117 -0.809405 C258.428 -0.958528 257.707 -1.06738 257.162 -0.963366 L257.35 0.0238505 Z M278.79 6.98385 L278.701 7.98488 C279.127 8.02289 279.749 7.98657 280.444 7.91889 C281.164 7.84889 282.039 7.73683 283.011 7.59743 C284.957 7.31848 287.328 6.9246 289.688 6.52204 C292.054 6.11835 294.404 5.70676 296.331 5.38786 C298.289 5.06389 299.716 4.85218 300.283 4.82793 L300.24 3.82385 L300.197 2.81977 C299.479 2.85052 297.905 3.09006 296.003 3.40484 C294.07 3.72469 291.702 4.13935 289.35 4.54066 C286.991 4.9431 284.643 5.33297 282.726 5.60777 C281.767 5.74524 280.926 5.85256 280.25 5.91834 C279.55 5.98644 279.098 6.00231 278.879 5.98282 L278.79 6.98385 Z M300.24 3.82385 L300.287 4.82776 C301.504 4.77092 306.153 4.98528 310.901 5.26955 C315.64 5.55328 320.307 5.89604 321.544 6.07812 L321.69 5.08385 L321.836 4.08958 C320.493 3.89166 315.72 3.54442 311.021 3.26315 C306.332 2.98242 301.546 2.75678 300.193 2.81994 L300.24 3.82385 Z M321.69 5.08385 L321.543 6.07804 C322.765 6.25879 327.41 7.40168 332.169 8.57942 C336.849 9.73765 341.63 10.9271 342.968 11.1457 L343.13 10.1539 L343.292 9.16201 C342.06 8.96063 337.406 7.80505 332.651 6.62828 C327.975 5.47102 323.185 4.28891 321.837 4.08966 L321.69 5.08385 Z M343.13 10.1539 L342.968 11.1457 C345.597 11.5754 361.95 12.8977 364.518 13.0569 L364.58 12.0539 L364.642 11.0508 C362.05 10.89 345.803 9.57235 343.292 9.16201 L343.13 10.1539 Z M364.58 12.0539 L364.521 13.0571 C365.8 13.1318 370.529 13.4324 375.255 13.6429 C377.618 13.748 379.99 13.8311 381.936 13.8519 C382.909 13.8623 383.784 13.8573 384.503 13.8309 C385.2 13.8054 385.818 13.7581 386.238 13.665 L386.02 12.6839 L385.802 11.7027 C385.58 11.7521 385.126 11.7967 384.429 11.8223 C383.755 11.847 382.915 11.8523 381.958 11.842 C380.045 11.8216 377.699 11.7397 375.345 11.6348 C370.636 11.4253 365.93 11.1259 364.639 11.0506 L364.58 12.0539 Z M386.02 12.6839 L386.237 13.6652 C386.663 13.5709 387.281 13.3329 387.972 13.0372 C388.688 12.7308 389.56 12.3281 390.531 11.8644 C392.472 10.9366 394.84 9.74814 397.197 8.56151 C399.559 7.37233 401.91 6.18517 403.832 5.25162 C404.793 4.78481 405.639 4.38522 406.321 4.08236 C407.024 3.7703 407.493 3.5879 407.73 3.52473 L407.47 2.55385 L407.21 1.58297 C406.802 1.6923 406.198 1.93803 405.506 2.24534 C404.793 2.56185 403.923 2.97289 402.954 3.44358 C401.015 4.38503 398.648 5.58037 396.293 6.76619 C393.933 7.95456 391.583 9.13356 389.664 10.0508 C388.704 10.5096 387.86 10.8988 387.181 11.1893 C386.477 11.4905 386.022 11.6543 385.803 11.7025 L386.02 12.6839 Z M407.47 2.55385 L407.727 3.52542 C408.937 3.20521 413.595 2.3866 418.293 1.90358 C420.635 1.66279 422.949 1.50963 424.821 1.53935 C425.759 1.55423 426.558 1.61473 427.183 1.72427 C427.843 1.8401 428.169 1.9887 428.285 2.08101 L428.91 1.29385 L429.535 0.506693 C429.009 0.0890029 428.263 -0.126773 427.53 -0.255474 C426.761 -0.390463 425.845 -0.454655 424.853 -0.470398 C422.866 -0.501933 420.463 -0.34009 418.087 -0.0958799 C413.35 0.391099 408.573 1.22249 407.213 1.58228 L407.47 2.55385 Z M428.91 1.29385 L428.289 2.08368 C428.343 2.12634 428.493 2.27884 428.75 2.6148 C428.992 2.93 429.287 3.34974 429.629 3.86686 C430.313 4.89992 431.162 6.2794 432.125 7.89848 C434.05 11.1352 436.404 15.2832 438.765 19.4379 C441.123 23.5864 443.488 27.7417 445.425 30.9733 C446.393 32.5882 447.261 33.9849 447.973 35.04 C448.328 35.5668 448.653 36.0204 448.937 36.3781 C449.201 36.7111 449.492 37.0418 449.781 37.2455 L450.36 36.4239 L450.939 35.6022 C450.941 35.6037 450.93 35.5961 450.905 35.5736 C450.881 35.5517 450.849 35.5208 450.81 35.4789 C450.73 35.3942 450.63 35.2787 450.511 35.1286 C450.273 34.8281 449.981 34.4219 449.639 33.9159 C448.958 32.9055 448.111 31.5448 447.149 29.94 C445.226 26.7323 442.873 22.5988 440.512 18.4448 C438.155 14.2971 435.79 10.1288 433.852 6.87109 C432.884 5.24299 432.016 3.83075 431.305 2.75701 C430.95 2.22074 430.627 1.75831 430.345 1.39125 C430.079 1.04495 429.8 0.715106 429.531 0.504026 L428.91 1.29385 Z M450.36 36.4239 L449.783 37.247 C450.381 37.6655 451.197 37.7479 451.926 37.7388 C452.708 37.729 453.631 37.606 454.622 37.416 C456.609 37.0353 459.011 36.3569 461.377 35.6252 C463.745 34.8929 466.122 34.093 468.038 33.4686 C469.002 33.1547 469.847 32.886 470.527 32.688 C471.233 32.4826 471.686 32.3763 471.905 32.3534 L471.8 31.3539 L471.695 30.3544 C471.271 30.3989 470.653 30.5579 469.965 30.7581 C469.252 30.9657 468.382 31.2428 467.416 31.5575 C465.473 32.1903 463.132 32.9785 460.783 33.705 C458.432 34.4321 456.116 35.083 454.244 35.442 C453.305 35.6219 452.513 35.7213 451.901 35.729 C451.596 35.7328 451.36 35.7133 451.187 35.6798 C451.101 35.6633 451.039 35.645 450.997 35.6287 C450.976 35.6207 450.961 35.6138 450.951 35.6087 C450.941 35.6035 450.936 35.6006 450.937 35.6007 L450.36 36.4239 Z M471.8 31.3539 L471.901 32.3538 C472.472 32.2962 473.906 32.2932 475.859 32.3319 C477.781 32.37 480.134 32.4464 482.491 32.5344 C487.207 32.7105 491.915 32.9327 493.207 32.9879 L493.25 31.9839 L493.293 30.9798 C492.015 30.9251 487.288 30.7022 482.566 30.5258 C480.205 30.4376 477.838 30.3608 475.898 30.3223 C473.989 30.2845 472.418 30.2815 471.699 30.3539 L471.8 31.3539 Z M493.25 31.9839 L493.203 32.9878 C493.803 33.0158 495.257 33.178 497.211 33.3976 C499.139 33.6143 501.507 33.8809 503.876 34.1068 C506.242 34.3324 508.628 34.5194 510.593 34.5747 C511.575 34.6023 512.469 34.5978 513.213 34.5455 C513.919 34.4959 514.617 34.3971 515.118 34.1678 L514.7 33.2538 L514.282 32.3399 C514.138 32.4056 513.762 32.4921 513.073 32.5405 C512.421 32.5862 511.599 32.5922 510.65 32.5655 C508.753 32.5121 506.419 32.3303 504.067 32.1059 C501.717 31.8818 499.366 31.6172 497.435 31.4001 C495.53 31.186 493.982 31.0119 493.297 30.9799 L493.25 31.9839 Z M514.7 33.2538 L515.119 34.1672 C515.386 34.0447 515.673 33.8465 515.948 33.6362 C516.235 33.4155 516.564 33.1386 516.922 32.8199 C517.639 32.1821 518.511 31.3448 519.481 30.3825 C521.421 28.4567 523.789 25.9908 526.145 23.5346 C528.507 21.0728 530.857 18.6208 532.777 16.705 C533.738 15.7467 534.581 14.932 535.259 14.3216 C535.974 13.6771 536.408 13.3515 536.582 13.2662 L536.14 12.3639 L535.698 11.4615 C535.229 11.6912 534.591 12.2177 533.914 12.828 C533.198 13.4724 532.327 14.3151 531.357 15.2821 C529.418 17.2169 527.051 19.6874 524.695 22.1431 C522.334 24.6044 519.984 27.051 518.065 28.9559 C517.105 29.9089 516.262 30.7164 515.586 31.3183 C515.247 31.6195 514.959 31.8613 514.725 32.0411 C514.477 32.2312 514.335 32.3155 514.281 32.3405 L514.7 33.2538 Z M536.14 12.3639 L536.578 13.2683 C536.775 13.1728 537.202 13.0437 537.889 12.9098 C538.55 12.7808 539.379 12.6607 540.328 12.5555 C542.224 12.3453 544.552 12.1994 546.885 12.1537 C549.22 12.1079 551.537 12.163 553.414 12.3487 C554.354 12.4416 555.162 12.5653 555.798 12.7184 C556.466 12.8789 556.829 13.046 556.976 13.1596 L557.59 12.3639 L558.204 11.5681 C557.706 11.1842 556.996 10.9391 556.268 10.7641 C555.51 10.5816 554.602 10.4464 553.612 10.3484 C551.628 10.1522 549.227 10.0973 546.845 10.144 C544.461 10.1908 542.071 10.3399 540.106 10.5578 C539.125 10.6667 538.237 10.794 537.504 10.9369 C536.797 11.0749 536.15 11.2424 535.702 11.4594 L536.14 12.3639 Z M557.59 12.3639 L556.973 13.157 C557.032 13.203 557.183 13.3542 557.44 13.6763 C557.681 13.9797 557.975 14.3823 558.317 14.877 C559 15.8655 559.848 17.182 560.81 18.7249 C562.734 21.8094 565.087 25.7528 567.448 29.6941 C569.805 33.6287 572.171 37.5611 574.11 40.6029 C575.078 42.1225 575.949 43.4337 576.663 44.4169 C577.02 44.9077 577.348 45.3303 577.637 45.6613 C577.901 45.9642 578.211 46.283 578.531 46.4662 L579.03 45.5938 L579.529 44.7215 C579.545 44.7307 579.516 44.7159 579.436 44.6411 C579.363 44.5719 579.268 44.4731 579.151 44.3395 C578.918 44.072 578.629 43.7026 578.289 43.235 C577.611 42.3016 576.766 41.031 575.805 39.5226 C573.884 36.5084 571.532 32.6003 569.172 28.6611 C566.816 24.7286 564.451 20.7651 562.516 17.6613 C561.548 16.1099 560.681 14.7618 559.971 13.7342 C559.616 13.221 559.293 12.7776 559.012 12.4247 C558.746 12.0904 558.469 11.7747 558.207 11.5707 L557.59 12.3639 Z M579.03 45.5938 L578.533 46.4671 C578.884 46.6674 579.275 46.7353 579.623 46.7507 C579.98 46.7666 580.364 46.7303 580.755 46.6641 C581.536 46.5318 582.457 46.2599 583.446 45.9078 C585.429 45.2014 587.828 44.1191 590.194 42.9822 C592.564 41.8433 594.936 40.6324 596.858 39.6658 C597.823 39.1807 598.672 38.7588 599.357 38.4343 C600.062 38.1003 600.534 37.8986 600.775 37.8245 L600.48 36.8638 L600.185 35.9032 C599.783 36.0266 599.184 36.2918 598.496 36.6178 C597.788 36.9534 596.921 37.3848 595.956 37.87 C594.018 38.8441 591.672 40.0419 589.323 41.1705 C586.971 42.3011 584.65 43.3451 582.771 44.0143 C581.829 44.35 581.033 44.5783 580.419 44.6823 C580.113 44.7342 579.88 44.7502 579.712 44.7427 C579.537 44.7349 579.498 44.704 579.528 44.7206 L579.03 45.5938 Z M600.48 36.8638 L600.775 37.8245 C601.998 37.4488 606.966 36.4191 611.881 35.4356 C616.738 34.4636 621.486 33.5475 622.12 33.4187 L621.92 32.4338 L621.72 31.449 C621.074 31.5802 616.387 32.4841 611.487 33.4646 C606.644 34.4336 601.532 35.4889 600.185 35.9032 L600.48 36.8638 Z" fill="#1f1f22"/></svg>
        <p style={{ position: "absolute", left: "81.91px", top: "215.38px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "27px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#6b6b6b" }}>Jul 11</p>
        <p style={{ position: "absolute", left: "209.08px", top: "215.38px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "30px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#6b6b6b" }}>Jul 18</p>
        <p style={{ position: "absolute", left: "336.26px", top: "215.38px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "33px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#6b6b6b" }}>Jul 25</p>
        <p style={{ position: "absolute", left: "467.93px", top: "215.38px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "27px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#6b6b6b" }}>Aug 1</p>
        <p style={{ position: "absolute", left: "595.1px", top: "215.38px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "30px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#6b6b6b" }}>Aug 9</p>
        <div style={{ position: "absolute", left: "546.64px", top: "71.93px", width: "127.8px", height: "18.48px", borderRadius: "5.48px", background: "#1f1f22", boxShadow: "0px 1.83px 5.48px 0px rgba(0, 0, 0, 0.12)", display: "flex", flexDirection: "row", padding: "2.74px 6.4px 2.74px 6.4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "115px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 500, color: "#ffffff" }}>Aug 07 · Payroll −$5,850</p>
        </div>
        <svg style={{ position: "absolute", left: "617.17px", top: "89.91px", width: "7.31px", height: "3.66px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="7.31" height="3.66" viewBox="0 0 7.31 3.66" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0 L7.31 0 L3.66 3.66 L0 0 Z" fill="#1f1f22"/></svg>
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
