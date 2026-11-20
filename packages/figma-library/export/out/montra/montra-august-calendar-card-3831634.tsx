"use client";
// August calendar card (montra, Charts) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Ingot Icons.
import { useEffect, useRef } from "react";
import { Check, ChevronLeft, ChevronRight } from "ingotui-icons/react/stroke-rounded";

export function AugustCalendarCard() {
  const fuRef = useRef<any>(null);
  useEffect(() => fuInteract(fuRef.current), []);
  return (
    <div ref={fuRef} data-fu="card" style={{ width: "711px", height: "353.7px", borderRadius: "10.97px", background: "#fefefe", boxShadow: "inset 0 0 0 0.91px #ededed", overflow: "hidden", position: "relative" }}>
      <p style={{ position: "absolute", left: "18.28px", top: "18.28px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "113px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.62px", fontWeight: 500, color: "#000000" }}>August calendar</p>
      <p style={{ position: "absolute", left: "18.28px", top: "43.87px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "178px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#6b6b6b" }}>18 charges · $3,940 scheduled</p>
      <div style={{ position: "absolute", left: "574.58px", top: "18.28px", width: "118.14px", height: "25.59px", display: "flex", flexDirection: "row", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div data-fu="btn" style={{ width: "25.59px", height: "25.59px", flexShrink: 0, borderRadius: "6.4px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8, 0px 3.11px 3.11px 0px rgba(0, 0, 0, 0.05), inset 0px 3.11px 3.11px 0px rgba(255, 255, 255, 0.29)", display: "flex", flexDirection: "row", padding: "0.91px 0.91px 0.91px 0.91px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <ChevronLeft size={12.8} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#686765", display: "block" }} />
        </div>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "56px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 500, color: "#222222" }}>Aug 2026</p>
        <div data-fu="btn" style={{ width: "25.59px", height: "25.59px", flexShrink: 0, borderRadius: "6.4px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8, 0px 3.11px 3.11px 0px rgba(0, 0, 0, 0.05), inset 0px 3.11px 3.11px 0px rgba(255, 255, 255, 0.29)", display: "flex", flexDirection: "row", padding: "0.91px 0.91px 0.91px 0.91px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <ChevronRight size={12.8} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#686765", display: "block" }} />
        </div>
      </div>
      <div style={{ position: "absolute", left: "397.87px", top: "43.87px", width: "294.85px", height: "14px", display: "flex", flexDirection: "row", gap: "12.79px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "9.14px", height: "9.14px", flexShrink: 0, borderRadius: "1.83px", background: "#4996fe", boxShadow: "inset 0 0 0 0.91px rgba(214, 214, 214, 0.4), inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.29)" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "46px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#24322e" }}>Software</p>
        </div>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "9.14px", height: "9.14px", flexShrink: 0, borderRadius: "1.83px", background: "#8e83fd", boxShadow: "inset 0 0 0 0.91px rgba(214, 214, 214, 0.4), inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.29)" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "64px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#24322e" }}>Rent & office</p>
        </div>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "9.14px", height: "9.14px", flexShrink: 0, borderRadius: "1.83px", background: "#fd872f", boxShadow: "inset 0 0 0 0.91px rgba(214, 214, 214, 0.4), inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.29)" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "38px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#24322e" }}>Utilities</p>
        </div>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "9.14px", height: "9.14px", flexShrink: 0, borderRadius: "1.83px", background: "#63c093", boxShadow: "inset 0 0 0 0.91px rgba(214, 214, 214, 0.4), inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.29)" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "50px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#24322e" }}>Insurance</p>
        </div>
      </div>
      <p data-fu="cell" style={{ position: "absolute", left: "25.59px", top: "76px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "23px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#818892" }}>Mon</p>
      <p data-fu="cell" style={{ position: "absolute", left: "122.46px", top: "76px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "19px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#818892" }}>Tue</p>
      <p data-fu="cell" style={{ position: "absolute", left: "219.33px", top: "76px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "24px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#818892" }}>Wed</p>
      <p data-fu="cell" style={{ position: "absolute", left: "316.2px", top: "76px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "19px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#818892" }}>Thu</p>
      <p data-fu="cell" style={{ position: "absolute", left: "413.08px", top: "76px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "14px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#818892" }}>Fri</p>
      <p data-fu="cell" style={{ position: "absolute", left: "509.95px", top: "76px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "18px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#818892" }}>Sat</p>
      <p data-fu="cell" style={{ position: "absolute", left: "606.82px", top: "76px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "21px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#818892" }}>Sun</p>
      <div style={{ position: "absolute", left: "14.62px", top: "173.37px", width: "681.75px", height: "44.16px", borderRadius: "9.14px", background: "rgba(73, 150, 254, 0.06)", outline: "0.91px dashed rgba(73, 150, 254, 0.35)", outlineOffset: "-0.91px" }} />
      <div style={{ position: "absolute", left: "18.28px", top: "96px", width: "93.21px", height: "36.85px", borderRadius: "7.31px", background: "#fafafa", boxShadow: "inset 0 0 0 0.91px #f2f2f2" }}>
        <p style={{ position: "absolute", left: "7.31px", top: "11.43px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "13px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#c4c4c8" }}>27</p>
      </div>
      <div style={{ position: "absolute", left: "115.15px", top: "96px", width: "93.21px", height: "36.85px", borderRadius: "7.31px", background: "#fafafa", boxShadow: "inset 0 0 0 0.91px #f2f2f2" }}>
        <p style={{ position: "absolute", left: "7.31px", top: "11.43px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "14px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#c4c4c8" }}>28</p>
      </div>
      <div style={{ position: "absolute", left: "212.02px", top: "96px", width: "93.21px", height: "36.85px", borderRadius: "7.31px", background: "#fafafa", boxShadow: "inset 0 0 0 0.91px #f2f2f2" }}>
        <p style={{ position: "absolute", left: "7.31px", top: "11.43px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "14px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#c4c4c8" }}>29</p>
      </div>
      <div style={{ position: "absolute", left: "308.89px", top: "96px", width: "93.21px", height: "36.85px", borderRadius: "7.31px", background: "#fafafa", boxShadow: "inset 0 0 0 0.91px #f2f2f2" }}>
        <p style={{ position: "absolute", left: "7.31px", top: "11.43px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "15px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#c4c4c8" }}>30</p>
      </div>
      <div style={{ position: "absolute", left: "405.77px", top: "96px", width: "93.21px", height: "36.85px", borderRadius: "7.31px", background: "#fafafa", boxShadow: "inset 0 0 0 0.91px #f2f2f2" }}>
        <p style={{ position: "absolute", left: "7.31px", top: "11.43px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "11px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#c4c4c8" }}>31</p>
      </div>
      <div style={{ position: "absolute", left: "502.64px", top: "96px", width: "93.21px", height: "36.85px", borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #ededed" }}>
        <p style={{ position: "absolute", left: "7.31px", top: "11.43px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "5px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#a6a6a6" }}>1</p>
        <div style={{ position: "absolute", left: "29.16px", top: "9.29px", width: "58.57px", height: "18.28px", borderRadius: "5.48px", background: "rgba(142, 131, 253, 0.08)", boxShadow: "inset 0 0 0 0.91px rgba(142, 131, 253, 0.12)", display: "flex", flexDirection: "row", padding: "0.91px 6.39px 0.91px 6.39px", gap: "2.74px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <Check size={10.1} style={{ width: "10.05px", height: "10.05px", flexShrink: 0, color: "#635cb1", display: "block" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "33px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 500, color: "rgba(92, 85, 164, 0.75)" }}>$1,450</p>
        </div>
      </div>
      <div style={{ position: "absolute", left: "599.51px", top: "96px", width: "93.21px", height: "36.85px", borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #ededed" }}>
        <p style={{ position: "absolute", left: "7.31px", top: "11.43px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "7px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#a6a6a6" }}>2</p>
      </div>
      <div style={{ position: "absolute", left: "18.28px", top: "136.51px", width: "93.21px", height: "36.85px", borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #ededed" }}>
        <p style={{ position: "absolute", left: "7.31px", top: "11.43px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "7px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#a6a6a6" }}>3</p>
        <div style={{ position: "absolute", left: "36.16px", top: "9.29px", width: "51.57px", height: "18.28px", borderRadius: "5.48px", background: "rgba(73, 150, 254, 0.08)", boxShadow: "inset 0 0 0 0.91px rgba(73, 150, 254, 0.12)", display: "flex", flexDirection: "row", padding: "0.91px 6.39px 0.91px 6.39px", gap: "2.74px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <Check size={10.1} style={{ width: "10.05px", height: "10.05px", flexShrink: 0, color: "#3369b2", display: "block" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "26px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 500, color: "rgba(47, 98, 165, 0.75)" }}>$225</p>
        </div>
      </div>
      <div style={{ position: "absolute", left: "115.15px", top: "136.51px", width: "93.21px", height: "36.85px", borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #ededed" }}>
        <p style={{ position: "absolute", left: "7.31px", top: "11.43px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "7px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#a6a6a6" }}>4</p>
        <div style={{ position: "absolute", left: "44.16px", top: "9.29px", width: "43.57px", height: "18.28px", borderRadius: "5.48px", background: "rgba(73, 150, 254, 0.08)", boxShadow: "inset 0 0 0 0.91px rgba(73, 150, 254, 0.12)", display: "flex", flexDirection: "row", padding: "0.91px 6.39px 0.91px 6.39px", gap: "2.74px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <Check size={10.1} style={{ width: "10.05px", height: "10.05px", flexShrink: 0, color: "#3369b2", display: "block" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "18px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 500, color: "rgba(47, 98, 165, 0.75)" }}>$74</p>
        </div>
      </div>
      <div style={{ position: "absolute", left: "212.02px", top: "136.51px", width: "93.21px", height: "36.85px", borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #ededed" }}>
        <p style={{ position: "absolute", left: "7.31px", top: "11.43px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "8px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#a6a6a6" }}>5</p>
        <div style={{ position: "absolute", left: "41.16px", top: "9.29px", width: "46.57px", height: "18.28px", borderRadius: "5.48px", background: "rgba(73, 150, 254, 0.08)", boxShadow: "inset 0 0 0 0.91px rgba(73, 150, 254, 0.12)", display: "flex", flexDirection: "row", padding: "0.91px 6.39px 0.91px 6.39px", gap: "2.74px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <Check size={10.1} style={{ width: "10.05px", height: "10.05px", flexShrink: 0, color: "#3369b2", display: "block" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "21px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 500, color: "rgba(47, 98, 165, 0.75)" }}>$131</p>
        </div>
      </div>
      <div style={{ position: "absolute", left: "308.89px", top: "136.51px", width: "93.21px", height: "36.85px", borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #ededed" }}>
        <p style={{ position: "absolute", left: "7.31px", top: "11.43px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "7px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#a6a6a6" }}>6</p>
        <div style={{ position: "absolute", left: "42.16px", top: "9.29px", width: "45.57px", height: "18.28px", borderRadius: "5.48px", background: "rgba(73, 150, 254, 0.08)", boxShadow: "inset 0 0 0 0.91px rgba(73, 150, 254, 0.12)", display: "flex", flexDirection: "row", padding: "0.91px 6.39px 0.91px 6.39px", gap: "2.74px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <Check size={10.1} style={{ width: "10.05px", height: "10.05px", flexShrink: 0, color: "#3369b2", display: "block" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "20px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 500, color: "rgba(47, 98, 165, 0.75)" }}>$84</p>
        </div>
      </div>
      <div style={{ position: "absolute", left: "405.77px", top: "136.51px", width: "93.21px", height: "36.85px", borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #ededed" }}>
        <p style={{ position: "absolute", left: "7.31px", top: "11.43px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "6px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#a6a6a6" }}>7</p>
        <div style={{ position: "absolute", left: "38.16px", top: "9.29px", width: "49.57px", height: "18.28px", borderRadius: "5.48px", background: "rgba(73, 150, 254, 0.08)", boxShadow: "inset 0 0 0 0.91px rgba(73, 150, 254, 0.12)", display: "flex", flexDirection: "row", padding: "0.91px 6.39px 0.91px 6.39px", gap: "2.74px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <Check size={10.1} style={{ width: "10.05px", height: "10.05px", flexShrink: 0, color: "#3369b2", display: "block" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "24px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 500, color: "rgba(47, 98, 165, 0.75)" }}>$149</p>
        </div>
      </div>
      <div style={{ position: "absolute", left: "502.64px", top: "136.51px", width: "93.21px", height: "36.85px", borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #ededed" }}>
        <p style={{ position: "absolute", left: "7.31px", top: "11.43px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "7px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#a6a6a6" }}>8</p>
        <div style={{ position: "absolute", left: "42.16px", top: "9.29px", width: "45.57px", height: "18.28px", borderRadius: "5.48px", background: "rgba(73, 150, 254, 0.08)", boxShadow: "inset 0 0 0 0.91px rgba(73, 150, 254, 0.12)", display: "flex", flexDirection: "row", padding: "0.91px 6.39px 0.91px 6.39px", gap: "2.74px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <Check size={10.1} style={{ width: "10.05px", height: "10.05px", flexShrink: 0, color: "#3369b2", display: "block" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "20px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 500, color: "rgba(47, 98, 165, 0.75)" }}>$96</p>
        </div>
      </div>
      <div style={{ position: "absolute", left: "599.51px", top: "136.51px", width: "93.21px", height: "36.85px", borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #ededed" }}>
        <div style={{ position: "absolute", left: "7.31px", top: "8.37px", width: "20.11px", height: "20.11px", borderRadius: "999px", background: "#222222", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "7px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#ffffff" }}>9</p>
        </div>
      </div>
      <div style={{ position: "absolute", left: "18.28px", top: "177.03px", width: "93.21px", height: "36.85px", borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #ededed" }}>
        <p style={{ position: "absolute", left: "7.31px", top: "11.43px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "12px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222" }}>10</p>
        <div style={{ position: "absolute", left: "48.95px", top: "9.29px", width: "38.78px", height: "18.28px", borderRadius: "5.48px", background: "rgba(73, 150, 254, 0.14)", boxShadow: "inset 0 0 0 0.91px rgba(73, 150, 254, 0.28)", display: "flex", flexDirection: "row", padding: "0.91px 6.39px 0.91px 6.39px", gap: "2.74px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "26px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 500, color: "#2c5a98" }}>$336</p>
        </div>
      </div>
      <div style={{ position: "absolute", left: "115.15px", top: "177.03px", width: "93.21px", height: "36.85px", borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #ededed" }}>
        <p style={{ position: "absolute", left: "7.31px", top: "11.43px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "9px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222" }}>11</p>
        <div style={{ position: "absolute", left: "48.95px", top: "9.29px", width: "38.78px", height: "18.28px", borderRadius: "5.48px", background: "rgba(142, 131, 253, 0.14)", boxShadow: "inset 0 0 0 0.91px rgba(142, 131, 253, 0.28)", display: "flex", flexDirection: "row", padding: "0.91px 6.39px 0.91px 6.39px", gap: "2.74px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "26px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 500, color: "#554f98" }}>$420</p>
        </div>
      </div>
      <div style={{ position: "absolute", left: "212.02px", top: "177.03px", width: "93.21px", height: "36.85px", borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #ededed" }}>
        <p style={{ position: "absolute", left: "7.31px", top: "11.43px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "12px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222" }}>12</p>
        <div style={{ position: "absolute", left: "48.95px", top: "9.29px", width: "38.78px", height: "18.28px", borderRadius: "5.48px", background: "rgba(99, 192, 147, 0.14)", boxShadow: "inset 0 0 0 0.91px rgba(99, 192, 147, 0.28)", display: "flex", flexDirection: "row", padding: "0.91px 6.39px 0.91px 6.39px", gap: "2.74px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "26px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 500, color: "#3b7358" }}>$236</p>
        </div>
      </div>
      <div style={{ position: "absolute", left: "308.89px", top: "177.03px", width: "93.21px", height: "36.85px", borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #ededed" }}>
        <p style={{ position: "absolute", left: "7.31px", top: "11.43px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "12px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222" }}>13</p>
      </div>
      <div style={{ position: "absolute", left: "405.77px", top: "177.03px", width: "93.21px", height: "36.85px", borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #ededed" }}>
        <p style={{ position: "absolute", left: "7.31px", top: "11.43px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "12px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222" }}>14</p>
        <div style={{ position: "absolute", left: "51.95px", top: "9.29px", width: "35.78px", height: "18.28px", borderRadius: "5.48px", background: "rgba(253, 135, 47, 0.14)", boxShadow: "inset 0 0 0 0.91px rgba(253, 135, 47, 0.28)", display: "flex", flexDirection: "row", padding: "0.91px 6.39px 0.91px 6.39px", gap: "2.74px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "23px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 500, color: "#98511c" }}>$188</p>
        </div>
      </div>
      <div style={{ position: "absolute", left: "502.64px", top: "177.03px", width: "93.21px", height: "36.85px", borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #ededed" }}>
        <p style={{ position: "absolute", left: "7.31px", top: "11.43px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "12px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222" }}>15</p>
      </div>
      <div style={{ position: "absolute", left: "599.51px", top: "177.03px", width: "93.21px", height: "36.85px", borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #ededed" }}>
        <p style={{ position: "absolute", left: "7.31px", top: "11.43px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "12px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222" }}>16</p>
      </div>
      <div style={{ position: "absolute", left: "18.28px", top: "217.54px", width: "93.21px", height: "36.85px", borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #ededed" }}>
        <p style={{ position: "absolute", left: "7.31px", top: "11.43px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "11px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222" }}>17</p>
      </div>
      <div style={{ position: "absolute", left: "115.15px", top: "217.54px", width: "93.21px", height: "36.85px", borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #ededed" }}>
        <p style={{ position: "absolute", left: "7.31px", top: "11.43px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "12px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222" }}>18</p>
        <div style={{ position: "absolute", left: "51.95px", top: "9.29px", width: "35.78px", height: "18.28px", borderRadius: "5.48px", background: "rgba(253, 135, 47, 0.14)", boxShadow: "inset 0 0 0 0.91px rgba(253, 135, 47, 0.28)", display: "flex", flexDirection: "row", padding: "0.91px 6.39px 0.91px 6.39px", gap: "2.74px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "23px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 500, color: "#98511c" }}>$142</p>
        </div>
      </div>
      <div style={{ position: "absolute", left: "212.02px", top: "217.54px", width: "93.21px", height: "36.85px", borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #ededed" }}>
        <p style={{ position: "absolute", left: "7.31px", top: "11.43px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "12px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222" }}>19</p>
      </div>
      <div style={{ position: "absolute", left: "308.89px", top: "217.54px", width: "93.21px", height: "36.85px", borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #ededed" }}>
        <p style={{ position: "absolute", left: "7.31px", top: "11.43px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "15px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222" }}>20</p>
        <div style={{ position: "absolute", left: "54.95px", top: "9.29px", width: "32.78px", height: "18.28px", borderRadius: "5.48px", background: "rgba(73, 150, 254, 0.14)", boxShadow: "inset 0 0 0 0.91px rgba(73, 150, 254, 0.28)", display: "flex", flexDirection: "row", padding: "0.91px 6.39px 0.91px 6.39px", gap: "2.74px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "20px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 500, color: "#2c5a98" }}>$60</p>
        </div>
      </div>
      <div style={{ position: "absolute", left: "405.77px", top: "217.54px", width: "93.21px", height: "36.85px", borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #ededed" }}>
        <p style={{ position: "absolute", left: "7.31px", top: "11.43px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "12px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222" }}>21</p>
        <div style={{ position: "absolute", left: "55.95px", top: "9.29px", width: "31.78px", height: "18.28px", borderRadius: "5.48px", background: "rgba(73, 150, 254, 0.14)", boxShadow: "inset 0 0 0 0.91px rgba(73, 150, 254, 0.28)", display: "flex", flexDirection: "row", padding: "0.91px 6.39px 0.91px 6.39px", gap: "2.74px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "19px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 500, color: "#2c5a98" }}>$70</p>
        </div>
      </div>
      <div style={{ position: "absolute", left: "502.64px", top: "217.54px", width: "93.21px", height: "36.85px", borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #ededed" }}>
        <p style={{ position: "absolute", left: "7.31px", top: "11.43px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "14px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222" }}>22</p>
      </div>
      <div style={{ position: "absolute", left: "599.51px", top: "217.54px", width: "93.21px", height: "36.85px", borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #ededed" }}>
        <p style={{ position: "absolute", left: "7.31px", top: "11.43px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "14px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222" }}>23</p>
      </div>
      <div style={{ position: "absolute", left: "18.28px", top: "258.05px", width: "93.21px", height: "36.85px", borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #ededed" }}>
        <p style={{ position: "absolute", left: "7.31px", top: "11.43px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "14px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222" }}>24</p>
        <div style={{ position: "absolute", left: "50.95px", top: "9.29px", width: "36.78px", height: "18.28px", borderRadius: "5.48px", background: "rgba(253, 135, 47, 0.14)", boxShadow: "inset 0 0 0 0.91px rgba(253, 135, 47, 0.28)", display: "flex", flexDirection: "row", padding: "0.91px 6.39px 0.91px 6.39px", gap: "2.74px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "24px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 500, color: "#98511c" }}>$120</p>
        </div>
      </div>
      <div style={{ position: "absolute", left: "115.15px", top: "258.05px", width: "93.21px", height: "36.85px", borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #ededed" }}>
        <p style={{ position: "absolute", left: "7.31px", top: "11.43px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "14px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222" }}>25</p>
        <div style={{ position: "absolute", left: "56.95px", top: "9.29px", width: "30.78px", height: "18.28px", borderRadius: "5.48px", background: "rgba(99, 192, 147, 0.14)", boxShadow: "inset 0 0 0 0.91px rgba(99, 192, 147, 0.28)", display: "flex", flexDirection: "row", padding: "0.91px 6.39px 0.91px 6.39px", gap: "2.74px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "18px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 500, color: "#3b7358" }}>$74</p>
        </div>
      </div>
      <div style={{ position: "absolute", left: "212.02px", top: "258.05px", width: "93.21px", height: "36.85px", borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #ededed" }}>
        <p style={{ position: "absolute", left: "7.31px", top: "11.43px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "14px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222" }}>26</p>
      </div>
      <div style={{ position: "absolute", left: "308.89px", top: "258.05px", width: "93.21px", height: "36.85px", borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #ededed" }}>
        <p style={{ position: "absolute", left: "7.31px", top: "11.43px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "13px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222" }}>27</p>
        <div style={{ position: "absolute", left: "54.95px", top: "9.29px", width: "32.78px", height: "18.28px", borderRadius: "5.48px", background: "rgba(73, 150, 254, 0.14)", boxShadow: "inset 0 0 0 0.91px rgba(73, 150, 254, 0.28)", display: "flex", flexDirection: "row", padding: "0.91px 6.39px 0.91px 6.39px", gap: "2.74px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "20px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 500, color: "#2c5a98" }}>$45</p>
        </div>
      </div>
      <div style={{ position: "absolute", left: "405.77px", top: "258.05px", width: "93.21px", height: "36.85px", borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #ededed" }}>
        <p style={{ position: "absolute", left: "7.31px", top: "11.43px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "14px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222" }}>28</p>
        <div style={{ position: "absolute", left: "54.95px", top: "9.29px", width: "32.78px", height: "18.28px", borderRadius: "5.48px", background: "rgba(73, 150, 254, 0.14)", boxShadow: "inset 0 0 0 0.91px rgba(73, 150, 254, 0.28)", display: "flex", flexDirection: "row", padding: "0.91px 6.39px 0.91px 6.39px", gap: "2.74px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "20px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 500, color: "#2c5a98" }}>$40</p>
        </div>
      </div>
      <div style={{ position: "absolute", left: "502.64px", top: "258.05px", width: "93.21px", height: "36.85px", borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #ededed" }}>
        <p style={{ position: "absolute", left: "7.31px", top: "11.43px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "14px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222" }}>29</p>
      </div>
      <div style={{ position: "absolute", left: "599.51px", top: "258.05px", width: "93.21px", height: "36.85px", borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #ededed" }}>
        <p style={{ position: "absolute", left: "7.31px", top: "11.43px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "15px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222" }}>30</p>
      </div>
      <div style={{ position: "absolute", left: "18.28px", top: "298.57px", width: "93.21px", height: "36.85px", borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #ededed" }}>
        <p style={{ position: "absolute", left: "7.31px", top: "11.43px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "12px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222" }}>31</p>
      </div>
      <div style={{ position: "absolute", left: "115.15px", top: "298.57px", width: "93.21px", height: "36.85px", borderRadius: "7.31px", background: "#fafafa", boxShadow: "inset 0 0 0 0.91px #f2f2f2" }}>
        <p style={{ position: "absolute", left: "7.31px", top: "11.43px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "5px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#c4c4c8" }}>1</p>
      </div>
      <div style={{ position: "absolute", left: "212.02px", top: "298.57px", width: "93.21px", height: "36.85px", borderRadius: "7.31px", background: "#fafafa", boxShadow: "inset 0 0 0 0.91px #f2f2f2" }}>
        <p style={{ position: "absolute", left: "7.31px", top: "11.43px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "7px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#c4c4c8" }}>2</p>
      </div>
      <div style={{ position: "absolute", left: "308.89px", top: "298.57px", width: "93.21px", height: "36.85px", borderRadius: "7.31px", background: "#fafafa", boxShadow: "inset 0 0 0 0.91px #f2f2f2" }}>
        <p style={{ position: "absolute", left: "7.31px", top: "11.43px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "7px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#c4c4c8" }}>3</p>
      </div>
      <div style={{ position: "absolute", left: "405.77px", top: "298.57px", width: "93.21px", height: "36.85px", borderRadius: "7.31px", background: "#fafafa", boxShadow: "inset 0 0 0 0.91px #f2f2f2" }}>
        <p style={{ position: "absolute", left: "7.31px", top: "11.43px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "7px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#c4c4c8" }}>4</p>
      </div>
      <div style={{ position: "absolute", left: "502.64px", top: "298.57px", width: "93.21px", height: "36.85px", borderRadius: "7.31px", background: "#fafafa", boxShadow: "inset 0 0 0 0.91px #f2f2f2" }}>
        <p style={{ position: "absolute", left: "7.31px", top: "11.43px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "7px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#c4c4c8" }}>5</p>
      </div>
      <div style={{ position: "absolute", left: "599.51px", top: "298.57px", width: "93.21px", height: "36.85px", borderRadius: "7.31px", background: "#fafafa", boxShadow: "inset 0 0 0 0.91px #f2f2f2" }}>
        <p style={{ position: "absolute", left: "7.31px", top: "11.43px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "7px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#c4c4c8" }}>6</p>
      </div>
      <div style={{ position: "absolute", left: "557.8px", top: "163.23px", width: "129.44px", height: "21.93px", borderRadius: "6.4px", background: "#1f1f22", display: "flex", flexDirection: "row", padding: "0px 8.22px 0px 8.22px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "113px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#ffffff" }}>Due this week · $1,180</p>
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
