"use client";
// New goal modal (montra, Modals) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Ingot Icons.
import { useEffect, useRef } from "react";
import { Airplane, Building, BuildingBank, Calendar, ChevronDown, DeviceLaptop, PiggyBank, Rocket, Safe, Target, X } from "ingotui-icons/react/stroke-rounded";

export function NewGoalModal() {
  const fuRef = useRef<any>(null);
  useEffect(() => fuInteract(fuRef.current), []);
  return (
    <div ref={fuRef} style={{ width: "475.22px", height: "630.27px", borderRadius: "14.62px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8, 0px 18.28px 40.21px -10.97px rgba(13, 13, 18, 0.12), 0px 0.91px 1.83px 0px rgba(13, 13, 18, 0.05)", overflow: "hidden", display: "flex", flexDirection: "column", padding: "0.91px 0.91px 0.91px 0.91px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
      <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "18.28px 18.28px 14.62px 18.28px", gap: "10.97px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ width: "34.73px", height: "34.73px", flexShrink: 0, borderRadius: "7.31px", background: "rgba(73, 150, 254, 0.12)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <Target size={17.4} style={{ width: "17.36px", height: "17.36px", flexShrink: 0, color: "#4996fe", display: "block" }} />
        </div>
        <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "3.66px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "68px", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.54px", fontWeight: 500, color: "#202020", letterSpacing: "-0.01em" }}>New goal</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "238px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#6b6b6b", letterSpacing: "-0.01em" }}>Set a target and let Montra save toward it</p>
        </div>
        <div style={{ width: "27.42px", height: "27.42px", flexShrink: 0, borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8", display: "flex", flexDirection: "row", padding: "0.91px 0.91px 0.91px 0.91px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <X size={12.8} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
        </div>
      </div>
      <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", padding: "3.66px 18.28px 18.28px 18.28px", gap: "14.62px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "5.48px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "24px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 500, color: "#222222" }}>Icon</p>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "36.56px", height: "36.56px", flexShrink: 0, borderRadius: "9.14px", background: "#ffffff", boxShadow: "inset 0 0 0 1.46px #202020", display: "flex", flexDirection: "row", padding: "1.46px 1.46px 1.46px 1.46px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "25.59px", height: "25.59px", flexShrink: 0, borderRadius: "5.12px", background: "linear-gradient(180deg, #4a96fe 0%, #adcfff 100%)", boxShadow: "0px 0.91px 1.83px 0px rgba(0, 0, 0, 0.08)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <Building size={12.3} style={{ width: "12.28px", height: "12.28px", flexShrink: 0, color: "#ffffff", display: "block" }} />
              </div>
            </div>
            <div style={{ width: "36.56px", height: "36.56px", flexShrink: 0, borderRadius: "9.14px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8", display: "flex", flexDirection: "row", padding: "0.91px 0.91px 0.91px 0.91px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "25.59px", height: "25.59px", flexShrink: 0, borderRadius: "5.12px", background: "linear-gradient(180deg, #0ab7bd 0%, #a9fcff 100%)", boxShadow: "0px 0.91px 1.83px 0px rgba(0, 0, 0, 0.08)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <Safe size={12.3} style={{ width: "12.28px", height: "12.28px", flexShrink: 0, color: "#ffffff", display: "block" }} />
              </div>
            </div>
            <div style={{ width: "36.56px", height: "36.56px", flexShrink: 0, borderRadius: "9.14px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8", display: "flex", flexDirection: "row", padding: "0.91px 0.91px 0.91px 0.91px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "25.59px", height: "25.59px", flexShrink: 0, borderRadius: "5.12px", background: "linear-gradient(180deg, #8e83fd 0%, #d9d4ff 100%)", boxShadow: "0px 0.91px 1.83px 0px rgba(0, 0, 0, 0.08)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <DeviceLaptop size={12.3} style={{ width: "12.28px", height: "12.28px", flexShrink: 0, color: "#ffffff", display: "block" }} />
              </div>
            </div>
            <div style={{ width: "36.56px", height: "36.56px", flexShrink: 0, borderRadius: "9.14px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8", display: "flex", flexDirection: "row", padding: "0.91px 0.91px 0.91px 0.91px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "25.59px", height: "25.59px", flexShrink: 0, borderRadius: "5.12px", background: "linear-gradient(180deg, #fd872f 0%, #ffd3b0 100%)", boxShadow: "0px 0.91px 1.83px 0px rgba(0, 0, 0, 0.08)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <Rocket size={12.3} style={{ width: "12.28px", height: "12.28px", flexShrink: 0, color: "#ffffff", display: "block" }} />
              </div>
            </div>
            <div style={{ width: "36.56px", height: "36.56px", flexShrink: 0, borderRadius: "9.14px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8", display: "flex", flexDirection: "row", padding: "0.91px 0.91px 0.91px 0.91px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "25.59px", height: "25.59px", flexShrink: 0, borderRadius: "5.12px", background: "linear-gradient(180deg, #1db9e2 0%, #a1ebff 100%)", boxShadow: "0px 0.91px 1.83px 0px rgba(0, 0, 0, 0.08)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <Airplane size={12.3} style={{ width: "12.28px", height: "12.28px", flexShrink: 0, color: "#ffffff", display: "block" }} />
              </div>
            </div>
            <div style={{ width: "36.56px", height: "36.56px", flexShrink: 0, borderRadius: "9.14px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8", display: "flex", flexDirection: "row", padding: "0.91px 0.91px 0.91px 0.91px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "25.59px", height: "25.59px", flexShrink: 0, borderRadius: "5.12px", background: "linear-gradient(180deg, #91d02b 0%, #e2ffb3 100%)", boxShadow: "0px 0.91px 1.83px 0px rgba(0, 0, 0, 0.08)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <PiggyBank size={12.3} style={{ width: "12.28px", height: "12.28px", flexShrink: 0, color: "#ffffff", display: "block" }} />
              </div>
            </div>
          </div>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "5.48px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "60px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 500, color: "#222222" }}>Goal name</p>
          <div data-fu="field" style={{ alignSelf: "stretch", height: "34.73px", flexShrink: 0, borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #4996fe, 0px 0px 0px 3px rgba(73, 150, 254, 0.16)", display: "flex", flexDirection: "row", padding: "0.91px 10.05px 0.91px 10.05px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#222222" }}>Office move fund</p>
          </div>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "10.97px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "5.48px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "81px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 500, color: "#222222" }}>Target amount</p>
            <div data-fu="field" style={{ alignSelf: "stretch", height: "34.73px", flexShrink: 0, borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8, 0px 0.91px 1.83px 0px rgba(79, 79, 79, 0.12)", display: "flex", flexDirection: "row", padding: "0.91px 10.05px 0.91px 10.05px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "9px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#6b6b6b" }}>$</p>
              <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#222222" }}>15,000</p>
            </div>
          </div>
          <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "5.48px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "64px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 500, color: "#222222" }}>Target date</p>
            <div data-fu="field" style={{ alignSelf: "stretch", height: "34.73px", flexShrink: 0, borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8, 0px 0.91px 1.83px 0px rgba(79, 79, 79, 0.12)", display: "flex", flexDirection: "row", padding: "0.91px 10.05px 0.91px 10.05px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <Calendar size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
              <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#222222" }}>Jun 2027</p>
              <ChevronDown size={12.8} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
            </div>
          </div>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "5.48px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "57px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 500, color: "#222222" }}>Save from</p>
          <div data-fu="field" style={{ alignSelf: "stretch", height: "34.73px", flexShrink: 0, borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8, 0px 0.91px 1.83px 0px rgba(79, 79, 79, 0.12)", display: "flex", flexDirection: "row", padding: "0.91px 10.05px 0.91px 10.05px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <BuildingBank size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
            <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#222222" }}>Mercury Operating · $11,920</p>
            <ChevronDown size={12.8} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
          </div>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, borderRadius: "9.14px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8", display: "flex", flexDirection: "column", padding: "11.88px 13.7px 11.88px 13.7px", gap: "9.14px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "9.14px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.83px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "104px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 500, color: "#222222" }}>Monthly auto-save</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "196px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#6b6b6b" }}>Moves money on the 1st of each month</p>
            </div>
            <div style={{ width: "29.24px", height: "16.45px", flexShrink: 0, borderRadius: "8.22px", background: "#222222", position: "relative" }}>
              <svg style={{ position: "absolute", left: "14.62px", top: "1.83px", width: "12.79px", height: "12.79px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="12.79" height="12.79" viewBox="0 0 12.79 12.79" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M12.79 6.395 C12.79 9.92686 9.92686 12.79 6.395 12.79 C2.86314 12.79 0 9.92686 0 6.395 C0 2.86314 2.86314 0 6.395 0 C9.92686 0 12.79 2.86314 12.79 6.395 Z" fill="#ffffff"/></svg>
            </div>
          </div>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "9.14px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "118.81px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "5.48px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div data-fu="field" style={{ alignSelf: "stretch", height: "34.73px", flexShrink: 0, borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8, 0px 0.91px 1.83px 0px rgba(79, 79, 79, 0.12)", display: "flex", flexDirection: "row", padding: "0.91px 10.05px 0.91px 10.05px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "9px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#6b6b6b" }}>$</p>
                <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#222222" }}>1,500</p>
              </div>
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "129px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#6b6b6b" }}>per month · 10 transfers</p>
          </div>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, borderRadius: "9.14px", background: "#f4f4f5", boxShadow: "inset 0 0 0 0.91px #e8e8eb", display: "flex", flexDirection: "column", padding: "11.88px 13.7px 11.88px 13.7px", gap: "7.31px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "167px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 500, color: "#222222" }}>Reaches $15,000 in Jun 2027</p>
            <div style={{ height: "23.3px", flexShrink: 0, borderRadius: "999px", background: "#e7fff9", display: "flex", flexDirection: "row", padding: "0px 9.14px 0px 9.14px", gap: "3.66px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <svg style={{ width: "7.31px", height: "7.31px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="7.31" height="7.31" viewBox="0 0 7.31 7.31" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M7.31 3.655 C7.31 5.6736 5.6736 7.31 3.655 7.31 C1.6364 7.31 0 5.6736 0 3.655 C0 1.6364 1.6364 0 3.655 0 C5.6736 0 7.31 1.6364 7.31 3.655 Z" fill="#00a77d"/></svg>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "45px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#00a77d" }}>On track</p>
            </div>
          </div>
          <div style={{ width: "413.07px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "5.48px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "413.07px", height: "9.14px", flexShrink: 0, position: "relative" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "41.31px", height: "9.14px", borderRadius: "2.74px", background: "linear-gradient(90deg, #89bbfe 0%, #4996fe 100%)", boxShadow: "inset 0 0 0 1px rgba(57, 117, 198, 0.38), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.18), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
              <svg style={{ position: "absolute", left: "44.97px", top: "0px", width: "367.6px", height: "9.14px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="367.6" height="9.14" viewBox="0 0 367.6 9.14" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0 L-0.5 0 L-0.5 9.14 L0 9.14 L0.5 9.14 L0.5 0 L0 0 Z M2.94 0 L2.44 0 L2.44 9.14 L2.94 9.14 L3.44 9.14 L3.44 0 L2.94 0 Z M5.88 0 L5.38 0 L5.38 9.14 L5.88 9.14 L6.38 9.14 L6.38 0 L5.88 0 Z M8.82 0 L8.32 0 L8.32 9.14 L8.82 9.14 L9.32 9.14 L9.32 0 L8.82 0 Z M11.76 0 L11.26 0 L11.26 9.14 L11.76 9.14 L12.26 9.14 L12.26 0 L11.76 0 Z M14.7 0 L14.2 0 L14.2 9.14 L14.7 9.14 L15.2 9.14 L15.2 0 L14.7 0 Z M17.64 0 L17.14 0 L17.14 9.14 L17.64 9.14 L18.14 9.14 L18.14 0 L17.64 0 Z M20.59 0 L20.09 0 L20.09 9.14 L20.59 9.14 L21.09 9.14 L21.09 0 L20.59 0 Z M23.53 0 L23.03 0 L23.03 9.14 L23.53 9.14 L24.03 9.14 L24.03 0 L23.53 0 Z M26.47 0 L25.97 0 L25.97 9.14 L26.47 9.14 L26.97 9.14 L26.97 0 L26.47 0 Z M29.41 0 L28.91 0 L28.91 9.14 L29.41 9.14 L29.91 9.14 L29.91 0 L29.41 0 Z M32.35 0 L31.85 0 L31.85 9.14 L32.35 9.14 L32.85 9.14 L32.85 0 L32.35 0 Z M35.29 0 L34.79 0 L34.79 9.14 L35.29 9.14 L35.79 9.14 L35.79 0 L35.29 0 Z M38.23 0 L37.73 0 L37.73 9.14 L38.23 9.14 L38.73 9.14 L38.73 0 L38.23 0 Z M41.17 0 L40.67 0 L40.67 9.14 L41.17 9.14 L41.67 9.14 L41.67 0 L41.17 0 Z M44.11 0 L43.61 0 L43.61 9.14 L44.11 9.14 L44.61 9.14 L44.61 0 L44.11 0 Z M47.05 0 L46.55 0 L46.55 9.14 L47.05 9.14 L47.55 9.14 L47.55 0 L47.05 0 Z M49.99 0 L49.49 0 L49.49 9.14 L49.99 9.14 L50.49 9.14 L50.49 0 L49.99 0 Z M52.93 0 L52.43 0 L52.43 9.14 L52.93 9.14 L53.43 9.14 L53.43 0 L52.93 0 Z M55.88 0 L55.38 0 L55.38 9.14 L55.88 9.14 L56.38 9.14 L56.38 0 L55.88 0 Z M58.82 0 L58.32 0 L58.32 9.14 L58.82 9.14 L59.32 9.14 L59.32 0 L58.82 0 Z M61.76 0 L61.26 0 L61.26 9.14 L61.76 9.14 L62.26 9.14 L62.26 0 L61.76 0 Z M64.7 0 L64.2 0 L64.2 9.14 L64.7 9.14 L65.2 9.14 L65.2 0 L64.7 0 Z M67.64 0 L67.14 0 L67.14 9.14 L67.64 9.14 L68.14 9.14 L68.14 0 L67.64 0 Z M70.58 0 L70.08 0 L70.08 9.14 L70.58 9.14 L71.08 9.14 L71.08 0 L70.58 0 Z M73.52 0 L73.02 0 L73.02 9.14 L73.52 9.14 L74.02 9.14 L74.02 0 L73.52 0 Z M76.46 0 L75.96 0 L75.96 9.14 L76.46 9.14 L76.96 9.14 L76.96 0 L76.46 0 Z M79.4 0 L78.9 0 L78.9 9.14 L79.4 9.14 L79.9 9.14 L79.9 0 L79.4 0 Z M82.34 0 L81.84 0 L81.84 9.14 L82.34 9.14 L82.84 9.14 L82.84 0 L82.34 0 Z M85.28 0 L84.78 0 L84.78 9.14 L85.28 9.14 L85.78 9.14 L85.78 0 L85.28 0 Z M88.22 0 L87.72 0 L87.72 9.14 L88.22 9.14 L88.72 9.14 L88.72 0 L88.22 0 Z M91.17 0 L90.67 0 L90.67 9.14 L91.17 9.14 L91.67 9.14 L91.67 0 L91.17 0 Z M94.11 0 L93.61 0 L93.61 9.14 L94.11 9.14 L94.61 9.14 L94.61 0 L94.11 0 Z M97.05 0 L96.55 0 L96.55 9.14 L97.05 9.14 L97.55 9.14 L97.55 0 L97.05 0 Z M99.99 0 L99.49 0 L99.49 9.14 L99.99 9.14 L100.49 9.14 L100.49 0 L99.99 0 Z M102.93 0 L102.43 0 L102.43 9.14 L102.93 9.14 L103.43 9.14 L103.43 0 L102.93 0 Z M105.87 0 L105.37 0 L105.37 9.14 L105.87 9.14 L106.37 9.14 L106.37 0 L105.87 0 Z M108.81 0 L108.31 0 L108.31 9.14 L108.81 9.14 L109.31 9.14 L109.31 0 L108.81 0 Z M111.75 0 L111.25 0 L111.25 9.14 L111.75 9.14 L112.25 9.14 L112.25 0 L111.75 0 Z M114.69 0 L114.19 0 L114.19 9.14 L114.69 9.14 L115.19 9.14 L115.19 0 L114.69 0 Z M117.63 0 L117.13 0 L117.13 9.14 L117.63 9.14 L118.13 9.14 L118.13 0 L117.63 0 Z M120.57 0 L120.07 0 L120.07 9.14 L120.57 9.14 L121.07 9.14 L121.07 0 L120.57 0 Z M123.51 0 L123.01 0 L123.01 9.14 L123.51 9.14 L124.01 9.14 L124.01 0 L123.51 0 Z M126.46 0 L125.96 0 L125.96 9.14 L126.46 9.14 L126.96 9.14 L126.96 0 L126.46 0 Z M129.4 0 L128.9 0 L128.9 9.14 L129.4 9.14 L129.9 9.14 L129.9 0 L129.4 0 Z M132.34 0 L131.84 0 L131.84 9.14 L132.34 9.14 L132.84 9.14 L132.84 0 L132.34 0 Z M135.28 0 L134.78 0 L134.78 9.14 L135.28 9.14 L135.78 9.14 L135.78 0 L135.28 0 Z M138.22 0 L137.72 0 L137.72 9.14 L138.22 9.14 L138.72 9.14 L138.72 0 L138.22 0 Z M141.16 0 L140.66 0 L140.66 9.14 L141.16 9.14 L141.66 9.14 L141.66 0 L141.16 0 Z M144.1 0 L143.6 0 L143.6 9.14 L144.1 9.14 L144.6 9.14 L144.6 0 L144.1 0 Z M147.04 0 L146.54 0 L146.54 9.14 L147.04 9.14 L147.54 9.14 L147.54 0 L147.04 0 Z M149.98 0 L149.48 0 L149.48 9.14 L149.98 9.14 L150.48 9.14 L150.48 0 L149.98 0 Z M152.92 0 L152.42 0 L152.42 9.14 L152.92 9.14 L153.42 9.14 L153.42 0 L152.92 0 Z M155.86 0 L155.36 0 L155.36 9.14 L155.86 9.14 L156.36 9.14 L156.36 0 L155.86 0 Z M158.8 0 L158.3 0 L158.3 9.14 L158.8 9.14 L159.3 9.14 L159.3 0 L158.8 0 Z M161.75 0 L161.25 0 L161.25 9.14 L161.75 9.14 L162.25 9.14 L162.25 0 L161.75 0 Z M164.69 0 L164.19 0 L164.19 9.14 L164.69 9.14 L165.19 9.14 L165.19 0 L164.69 0 Z M167.63 0 L167.13 0 L167.13 9.14 L167.63 9.14 L168.13 9.14 L168.13 0 L167.63 0 Z M170.57 0 L170.07 0 L170.07 9.14 L170.57 9.14 L171.07 9.14 L171.07 0 L170.57 0 Z M173.51 0 L173.01 0 L173.01 9.14 L173.51 9.14 L174.01 9.14 L174.01 0 L173.51 0 Z M176.45 0 L175.95 0 L175.95 9.14 L176.45 9.14 L176.95 9.14 L176.95 0 L176.45 0 Z M179.39 0 L178.89 0 L178.89 9.14 L179.39 9.14 L179.89 9.14 L179.89 0 L179.39 0 Z M182.33 0 L181.83 0 L181.83 9.14 L182.33 9.14 L182.83 9.14 L182.83 0 L182.33 0 Z M185.27 0 L184.77 0 L184.77 9.14 L185.27 9.14 L185.77 9.14 L185.77 0 L185.27 0 Z M188.21 0 L187.71 0 L187.71 9.14 L188.21 9.14 L188.71 9.14 L188.71 0 L188.21 0 Z M191.15 0 L190.65 0 L190.65 9.14 L191.15 9.14 L191.65 9.14 L191.65 0 L191.15 0 Z M194.09 0 L193.59 0 L193.59 9.14 L194.09 9.14 L194.59 9.14 L194.59 0 L194.09 0 Z M197.04 0 L196.54 0 L196.54 9.14 L197.04 9.14 L197.54 9.14 L197.54 0 L197.04 0 Z M199.98 0 L199.48 0 L199.48 9.14 L199.98 9.14 L200.48 9.14 L200.48 0 L199.98 0 Z M202.92 0 L202.42 0 L202.42 9.14 L202.92 9.14 L203.42 9.14 L203.42 0 L202.92 0 Z M205.86 0 L205.36 0 L205.36 9.14 L205.86 9.14 L206.36 9.14 L206.36 0 L205.86 0 Z M208.8 0 L208.3 0 L208.3 9.14 L208.8 9.14 L209.3 9.14 L209.3 0 L208.8 0 Z M211.74 0 L211.24 0 L211.24 9.14 L211.74 9.14 L212.24 9.14 L212.24 0 L211.74 0 Z M214.68 0 L214.18 0 L214.18 9.14 L214.68 9.14 L215.18 9.14 L215.18 0 L214.68 0 Z M217.62 0 L217.12 0 L217.12 9.14 L217.62 9.14 L218.12 9.14 L218.12 0 L217.62 0 Z M220.56 0 L220.06 0 L220.06 9.14 L220.56 9.14 L221.06 9.14 L221.06 0 L220.56 0 Z M223.5 0 L223 0 L223 9.14 L223.5 9.14 L224 9.14 L224 0 L223.5 0 Z M226.44 0 L225.94 0 L225.94 9.14 L226.44 9.14 L226.94 9.14 L226.94 0 L226.44 0 Z M229.38 0 L228.88 0 L228.88 9.14 L229.38 9.14 L229.88 9.14 L229.88 0 L229.38 0 Z M232.33 0 L231.83 0 L231.83 9.14 L232.33 9.14 L232.83 9.14 L232.83 0 L232.33 0 Z M235.27 0 L234.77 0 L234.77 9.14 L235.27 9.14 L235.77 9.14 L235.77 0 L235.27 0 Z M238.21 0 L237.71 0 L237.71 9.14 L238.21 9.14 L238.71 9.14 L238.71 0 L238.21 0 Z M241.15 0 L240.65 0 L240.65 9.14 L241.15 9.14 L241.65 9.14 L241.65 0 L241.15 0 Z M244.09 0 L243.59 0 L243.59 9.14 L244.09 9.14 L244.59 9.14 L244.59 0 L244.09 0 Z M247.03 0 L246.53 0 L246.53 9.14 L247.03 9.14 L247.53 9.14 L247.53 0 L247.03 0 Z M249.97 0 L249.47 0 L249.47 9.14 L249.97 9.14 L250.47 9.14 L250.47 0 L249.97 0 Z M252.91 0 L252.41 0 L252.41 9.14 L252.91 9.14 L253.41 9.14 L253.41 0 L252.91 0 Z M255.85 0 L255.35 0 L255.35 9.14 L255.85 9.14 L256.35 9.14 L256.35 0 L255.85 0 Z M258.79 0 L258.29 0 L258.29 9.14 L258.79 9.14 L259.29 9.14 L259.29 0 L258.79 0 Z M261.73 0 L261.23 0 L261.23 9.14 L261.73 9.14 L262.23 9.14 L262.23 0 L261.73 0 Z M264.67 0 L264.17 0 L264.17 9.14 L264.67 9.14 L265.17 9.14 L265.17 0 L264.67 0 Z M267.61 0 L267.11 0 L267.11 9.14 L267.61 9.14 L268.11 9.14 L268.11 0 L267.61 0 Z M270.56 0 L270.06 0 L270.06 9.14 L270.56 9.14 L271.06 9.14 L271.06 0 L270.56 0 Z M273.5 0 L273 0 L273 9.14 L273.5 9.14 L274 9.14 L274 0 L273.5 0 Z M276.44 0 L275.94 0 L275.94 9.14 L276.44 9.14 L276.94 9.14 L276.94 0 L276.44 0 Z M279.38 0 L278.88 0 L278.88 9.14 L279.38 9.14 L279.88 9.14 L279.88 0 L279.38 0 Z M282.32 0 L281.82 0 L281.82 9.14 L282.32 9.14 L282.82 9.14 L282.82 0 L282.32 0 Z M285.26 0 L284.76 0 L284.76 9.14 L285.26 9.14 L285.76 9.14 L285.76 0 L285.26 0 Z M288.2 0 L287.7 0 L287.7 9.14 L288.2 9.14 L288.7 9.14 L288.7 0 L288.2 0 Z M291.14 0 L290.64 0 L290.64 9.14 L291.14 9.14 L291.64 9.14 L291.64 0 L291.14 0 Z M294.08 0 L293.58 0 L293.58 9.14 L294.08 9.14 L294.58 9.14 L294.58 0 L294.08 0 Z M297.02 0 L296.52 0 L296.52 9.14 L297.02 9.14 L297.52 9.14 L297.52 0 L297.02 0 Z M299.96 0 L299.46 0 L299.46 9.14 L299.96 9.14 L300.46 9.14 L300.46 0 L299.96 0 Z M302.9 0 L302.4 0 L302.4 9.14 L302.9 9.14 L303.4 9.14 L303.4 0 L302.9 0 Z M305.85 0 L305.35 0 L305.35 9.14 L305.85 9.14 L306.35 9.14 L306.35 0 L305.85 0 Z M308.79 0 L308.29 0 L308.29 9.14 L308.79 9.14 L309.29 9.14 L309.29 0 L308.79 0 Z M311.73 0 L311.23 0 L311.23 9.14 L311.73 9.14 L312.23 9.14 L312.23 0 L311.73 0 Z M314.67 0 L314.17 0 L314.17 9.14 L314.67 9.14 L315.17 9.14 L315.17 0 L314.67 0 Z M317.61 0 L317.11 0 L317.11 9.14 L317.61 9.14 L318.11 9.14 L318.11 0 L317.61 0 Z M320.55 0 L320.05 0 L320.05 9.14 L320.55 9.14 L321.05 9.14 L321.05 0 L320.55 0 Z M323.49 0 L322.99 0 L322.99 9.14 L323.49 9.14 L323.99 9.14 L323.99 0 L323.49 0 Z M326.43 0 L325.93 0 L325.93 9.14 L326.43 9.14 L326.93 9.14 L326.93 0 L326.43 0 Z M329.37 0 L328.87 0 L328.87 9.14 L329.37 9.14 L329.87 9.14 L329.87 0 L329.37 0 Z M332.31 0 L331.81 0 L331.81 9.14 L332.31 9.14 L332.81 9.14 L332.81 0 L332.31 0 Z M335.25 0 L334.75 0 L334.75 9.14 L335.25 9.14 L335.75 9.14 L335.75 0 L335.25 0 Z M338.19 0 L337.69 0 L337.69 9.14 L338.19 9.14 L338.69 9.14 L338.69 0 L338.19 0 Z M341.14 0 L340.64 0 L340.64 9.14 L341.14 9.14 L341.64 9.14 L341.64 0 L341.14 0 Z M344.08 0 L343.58 0 L343.58 9.14 L344.08 9.14 L344.58 9.14 L344.58 0 L344.08 0 Z M347.02 0 L346.52 0 L346.52 9.14 L347.02 9.14 L347.52 9.14 L347.52 0 L347.02 0 Z M349.96 0 L349.46 0 L349.46 9.14 L349.96 9.14 L350.46 9.14 L350.46 0 L349.96 0 Z M352.9 0 L352.4 0 L352.4 9.14 L352.9 9.14 L353.4 9.14 L353.4 0 L352.9 0 Z M355.84 0 L355.34 0 L355.34 9.14 L355.84 9.14 L356.34 9.14 L356.34 0 L355.84 0 Z M358.78 0 L358.28 0 L358.28 9.14 L358.78 9.14 L359.28 9.14 L359.28 0 L358.78 0 Z M361.72 0 L361.22 0 L361.22 9.14 L361.72 9.14 L362.22 9.14 L362.22 0 L361.72 0 Z M364.66 0 L364.16 0 L364.16 9.14 L364.66 9.14 L365.16 9.14 L365.16 0 L364.66 0 Z M367.6 0 L367.1 0 L367.1 9.14 L367.6 9.14 L368.1 9.14 L368.1 0 L367.6 0 Z" fill="#d4d4d8"/></svg>
            </div>
            <div style={{ width: "413.07px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "84px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#1f1f22" }}>Month 1 · $1,500</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "77px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#6b6b6b" }}>Target $15,000</p>
            </div>
          </div>
        </div>
      </div>
      <div style={{ alignSelf: "stretch", flexShrink: 0, background: "#fafafa", boxShadow: "inset 0 0.91px 0 0 #ededed", display: "flex", flexDirection: "row", padding: "13.7px 18.28px 12.79px 18.28px", gap: "7.31px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
        <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#6b6b6b" }}>Total target becomes $83,000</p>
        <div data-fu="btn" style={{ height: "29.24px", flexShrink: 0, borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8, 0px 0.91px 1.83px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "row", padding: "0.91px 11.88px 0.91px 11.88px", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "41px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#6c6c6c" }}>Cancel</p>
        </div>
        <div data-fu="btn" style={{ height: "29.24px", flexShrink: 0, borderRadius: "7.31px", background: "linear-gradient(90deg, #222222 0%, #3a3a3a 50%, #222222 100%)", boxShadow: "inset 0 0 0 0.91px #dfe1e6", display: "flex", flexDirection: "row", padding: "0.91px 11.88px 0.91px 11.88px", gap: "3.66px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <Target size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#ffffff", display: "block" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "70px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#ffffff", lineHeight: "1.4500000476837158" }}>Create goal</p>
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
