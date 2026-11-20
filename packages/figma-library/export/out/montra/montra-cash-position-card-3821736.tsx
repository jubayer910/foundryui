"use client";
// Cash Position card (montra, Charts) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Ingot Icons.
import { useEffect, useRef } from "react";
import { Calendar } from "ingotui-icons/react/stroke-rounded";

export function CashPositionCard() {
  const fuRef = useRef<any>(null);
  useEffect(() => fuInteract(fuRef.current), []);
  return (
    <div ref={fuRef} style={{ width: "711.01px", height: "353.67px", borderRadius: "10.97px", background: "#fefefe", boxShadow: "inset 0 0 0 0.91px #ededed", overflow: "hidden", position: "relative" }}>
      <svg data-fu="plot" style={{ position: "absolute", left: "63.97px", top: "100.53px", width: "691.81px", height: "206.54px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="691.81" height="206.54" viewBox="0 0 691.81 206.54" fill="none" overflow="visible"><path transform="matrix(0 1 -1 0 0 0)" d="M0 -0.548333 L0 0 L206.539 0 L206.539 -0.548333 L206.539 -1.09667 L0 -1.09667 L0 -0.548333 Z" fill="#f6f6f6"/><path transform="matrix(0 1 -1 0 53.005 0)" d="M0 -0.548333 L0 0 L206.539 0 L206.539 -0.548333 L206.539 -1.09667 L0 -1.09667 L0 -0.548333 Z" fill="#f6f6f6"/><path transform="matrix(0 1 -1 0 106.011 0)" d="M0 -0.548333 L0 0 L206.539 0 L206.539 -0.548333 L206.539 -1.09667 L0 -1.09667 L0 -0.548333 Z" fill="#f6f6f6"/><path transform="matrix(0 1 -1 0 159.017 0)" d="M0 -0.548333 L0 0 L206.539 0 L206.539 -0.548333 L206.539 -1.09667 L0 -1.09667 L0 -0.548333 Z" fill="#f6f6f6"/><path transform="matrix(0 1 -1 0 212.022 0)" d="M0 -0.548333 L0 0 L206.539 0 L206.539 -0.548333 L206.539 -1.09667 L0 -1.09667 L0 -0.548333 Z" fill="#f6f6f6"/><path transform="matrix(0 1 -1 0 265.028 0)" d="M0 -0.548333 L0 0 L206.539 0 L206.539 -0.548333 L206.539 -1.09667 L0 -1.09667 L0 -0.548333 Z" fill="#f6f6f6"/><path transform="matrix(0 1 -1 0 318.033 0)" d="M0 -0.548333 L0 0 L206.539 0 L206.539 -0.548333 L206.539 -1.09667 L0 -1.09667 L0 -0.548333 Z" fill="#f6f6f6"/><path transform="matrix(0 1 -1 0 371.039 0)" d="M0 -0.548333 L0 0 L206.539 0 L206.539 -0.548333 L206.539 -1.09667 L0 -1.09667 L0 -0.548333 Z" fill="#f6f6f6"/><path transform="matrix(0 1 -1 0 424.044 0)" d="M0 -0.548333 L0 0 L206.539 0 L206.539 -0.548333 L206.539 -1.09667 L0 -1.09667 L0 -0.548333 Z" fill="#f6f6f6"/><path transform="matrix(0 1 -1 0 477.05 0)" d="M0 -0.548333 L0 0 L206.539 0 L206.539 -0.548333 L206.539 -1.09667 L0 -1.09667 L0 -0.548333 Z" fill="#f6f6f6"/><path transform="matrix(0 1 -1 0 530.056 0)" d="M0 -0.548333 L0 0 L206.539 0 L206.539 -0.548333 L206.539 -1.09667 L0 -1.09667 L0 -0.548333 Z" fill="#f6f6f6"/><path transform="matrix(0 1 -1 0 583.061 0)" d="M0 -0.548333 L0 0 L206.539 0 L206.539 -0.548333 L206.539 -1.09667 L0 -1.09667 L0 -0.548333 Z" fill="#f6f6f6"/><path transform="matrix(0 1 -1 0 636.067 0)" d="M0 -0.548333 L0 0 L206.539 0 L206.539 -0.548333 L206.539 -1.09667 L0 -1.09667 L0 -0.548333 Z" fill="#f6f6f6"/><path transform="matrix(0 1 -1 0 691.814 0)" d="M0 -0.548333 L0 0 L206.539 0 L206.539 -0.548333 L206.539 -1.09667 L0 -1.09667 L0 -0.548333 Z" fill="#f6f6f6"/></svg>
      <div style={{ position: "absolute", left: "18.28px", top: "100.53px", width: "684.5px", height: "19px", display: "flex", flexDirection: "row", gap: "14.62px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <p style={{ width: "32.9px", flexShrink: 0, margin: 0, textAlign: "right", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#6b6b6b", lineHeight: "1.5" }}>$40K</p>
        <svg style={{ width: "636.98px", height: "1px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="636.98" height="1" viewBox="0 0 636.98 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M-2.43704 0 C-2.43704 1.34594 -1.34594 2.43704 0 2.43704 C1.34594 2.43704 2.43704 1.34594 2.43704 0 C2.43704 -1.34594 1.34594 -2.43704 0 -2.43704 C-1.34594 -2.43704 -2.43704 -1.34594 -2.43704 0 Z M636.981 0.456944 L637.438 0.456944 L637.438 -0.456944 L636.981 -0.456944 L636.981 0 L636.981 0.456944 Z M0 0 L0 0.456944 L636.981 0.456944 L636.981 0 L636.981 -0.456944 L0 -0.456944 L0 0 Z" fill="#f5f5f5"/></svg>
      </div>
      <div style={{ position: "absolute", left: "18.28px", top: "149.88px", width: "684.5px", height: "19px", display: "flex", flexDirection: "row", gap: "14.62px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <p style={{ width: "32.9px", flexShrink: 0, margin: 0, textAlign: "right", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#6b6b6b", lineHeight: "1.5" }}>$30K</p>
        <svg style={{ width: "636.98px", height: "1px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="636.98" height="1" viewBox="0 0 636.98 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M-2.43704 0 C-2.43704 1.34594 -1.34594 2.43704 0 2.43704 C1.34594 2.43704 2.43704 1.34594 2.43704 0 C2.43704 -1.34594 1.34594 -2.43704 0 -2.43704 C-1.34594 -2.43704 -2.43704 -1.34594 -2.43704 0 Z M636.981 0.456944 L637.438 0.456944 L637.438 -0.456944 L636.981 -0.456944 L636.981 0 L636.981 0.456944 Z M0 0 L0 0.456944 L636.981 0.456944 L636.981 0 L636.981 -0.456944 L0 -0.456944 L0 0 Z" fill="#f5f5f5"/></svg>
      </div>
      <div style={{ position: "absolute", left: "18.28px", top: "199.23px", width: "684.5px", height: "19px", display: "flex", flexDirection: "row", gap: "14.62px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <p style={{ width: "32.9px", flexShrink: 0, margin: 0, textAlign: "right", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#6b6b6b", lineHeight: "1.5" }}>$20K</p>
        <svg style={{ width: "636.98px", height: "1px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="636.98" height="1" viewBox="0 0 636.98 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M-2.43704 0 C-2.43704 1.34594 -1.34594 2.43704 0 2.43704 C1.34594 2.43704 2.43704 1.34594 2.43704 0 C2.43704 -1.34594 1.34594 -2.43704 0 -2.43704 C-1.34594 -2.43704 -2.43704 -1.34594 -2.43704 0 Z M636.981 0.456944 L637.438 0.456944 L637.438 -0.456944 L636.981 -0.456944 L636.981 0 L636.981 0.456944 Z M0 0 L0 0.456944 L636.981 0.456944 L636.981 0 L636.981 -0.456944 L0 -0.456944 L0 0 Z" fill="#f5f5f5"/></svg>
      </div>
      <div style={{ position: "absolute", left: "18.28px", top: "248.58px", width: "684.5px", height: "19px", display: "flex", flexDirection: "row", gap: "14.62px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <p style={{ width: "32.9px", flexShrink: 0, margin: 0, textAlign: "right", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#6b6b6b", lineHeight: "1.5" }}>$10K</p>
        <svg style={{ width: "636.98px", height: "1px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="636.98" height="1" viewBox="0 0 636.98 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M-2.43704 0 C-2.43704 1.34594 -1.34594 2.43704 0 2.43704 C1.34594 2.43704 2.43704 1.34594 2.43704 0 C2.43704 -1.34594 1.34594 -2.43704 0 -2.43704 C-1.34594 -2.43704 -2.43704 -1.34594 -2.43704 0 Z M636.981 0.456944 L637.438 0.456944 L637.438 -0.456944 L636.981 -0.456944 L636.981 0 L636.981 0.456944 Z M0 0 L0 0.456944 L636.981 0.456944 L636.981 0 L636.981 -0.456944 L0 -0.456944 L0 0 Z" fill="#f5f5f5"/></svg>
      </div>
      <div style={{ position: "absolute", left: "18.28px", top: "297.93px", width: "684.5px", height: "19px", display: "flex", flexDirection: "row", gap: "14.62px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <p style={{ width: "32.9px", flexShrink: 0, margin: 0, textAlign: "right", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#6b6b6b", lineHeight: "1.5" }}>$0</p>
        <svg style={{ width: "636.98px", height: "1px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="636.98" height="1" viewBox="0 0 636.98 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M-2.43704 0 C-2.43704 1.34594 -1.34594 2.43704 0 2.43704 C1.34594 2.43704 2.43704 1.34594 2.43704 0 C2.43704 -1.34594 1.34594 -2.43704 0 -2.43704 C-1.34594 -2.43704 -2.43704 -1.34594 -2.43704 0 Z M636.981 0.456944 L637.438 0.456944 L637.438 -0.456944 L636.981 -0.456944 L636.981 0 L636.981 0.456944 Z M0 0 L0 0.456944 L636.981 0.456944 L636.981 0 L636.981 -0.456944 L0 -0.456944 L0 0 Z" fill="#f5f5f5"/></svg>
      </div>
      <div style={{ position: "absolute", left: "63.97px", top: "317.12px", width: "636.07px", height: "18px", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
        <p style={{ width: "49.73px", flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#6b6b6b", lineHeight: "1.399999976158142" }}>Jan</p>
        <p style={{ width: "49.73px", flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#6b6b6b", lineHeight: "1.399999976158142" }}>Feb</p>
        <p style={{ width: "49.73px", flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#6b6b6b", lineHeight: "1.399999976158142" }}>Mar</p>
        <p style={{ width: "49.73px", flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#6b6b6b", lineHeight: "1.399999976158142" }}>Apr</p>
        <p style={{ width: "49.73px", flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#6b6b6b", lineHeight: "1.399999976158142" }}>May</p>
        <p style={{ width: "49.73px", flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#6b6b6b", lineHeight: "1.399999976158142" }}>Jun</p>
        <p style={{ width: "49.73px", flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#6b6b6b", lineHeight: "1.399999976158142" }}>Jul</p>
        <p style={{ width: "49.73px", flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#6b6b6b", lineHeight: "1.399999976158142" }}>Aug</p>
        <p style={{ width: "49.73px", flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#6b6b6b", lineHeight: "1.399999976158142" }}>Sep</p>
        <p style={{ width: "49.73px", flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#6b6b6b", lineHeight: "1.399999976158142" }}>Oct</p>
        <p style={{ width: "49.73px", flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#6b6b6b", lineHeight: "1.399999976158142" }}>Nov</p>
        <p style={{ width: "49.35px", flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#6b6b6b", lineHeight: "1.399999976158142" }}>Dec</p>
      </div>
      <div style={{ position: "absolute", left: "63.97px", top: "239.44px", width: "7.31px", height: "67.63px", borderRadius: "91.39px", background: "#d8d8d8", overflow: "hidden" }}>
        <div style={{ position: "absolute", left: "0px", top: "30.16px", width: "7.31px", height: "37.47px", borderRadius: "91.39px", background: "#4996fe", boxShadow: "inset 0 0 0 0.91px #ffffff, inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.3)" }} />
      </div>
      <div style={{ position: "absolute", left: "74.94px", top: "257.72px", width: "7.31px", height: "49.35px", borderRadius: "91.39px", background: "#d8d8d8", overflow: "hidden" }}>
        <div style={{ position: "absolute", left: "0px", top: "26.5px", width: "7.31px", height: "22.85px", borderRadius: "91.39px", background: "#4996fe", boxShadow: "inset 0 0 0 0.91px #ffffff, inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.3)" }} />
      </div>
      <div style={{ position: "absolute", left: "85.91px", top: "227.56px", width: "7.31px", height: "79.51px", borderRadius: "91.39px", background: "#d8d8d8", overflow: "hidden" }}>
        <div style={{ position: "absolute", left: "0px", top: "53.92px", width: "7.31px", height: "25.59px", borderRadius: "91.39px", background: "#4996fe", boxShadow: "inset 0 0 0 0.91px #ffffff, inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.3)" }} />
      </div>
      <div style={{ position: "absolute", left: "96.87px", top: "214.76px", width: "7.31px", height: "92.3px", borderRadius: "91.39px", background: "#d8d8d8", overflow: "hidden" }}>
        <div style={{ position: "absolute", left: "0px", top: "42.95px", width: "7.31px", height: "49.35px", borderRadius: "91.39px", background: "#4996fe", boxShadow: "inset 0 0 0 0.91px #ffffff, inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.3)" }} />
      </div>
      <div style={{ position: "absolute", left: "107.84px", top: "193.74px", width: "7.31px", height: "113.32px", borderRadius: "91.39px", background: "#d8d8d8", overflow: "hidden" }}>
        <div style={{ position: "absolute", left: "0px", top: "47.52px", width: "7.31px", height: "65.8px", borderRadius: "91.39px", background: "#4996fe", boxShadow: "inset 0 0 0 0.91px #ffffff, inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.3)" }} />
      </div>
      <div style={{ position: "absolute", left: "118.81px", top: "241.27px", width: "7.31px", height: "65.8px", borderRadius: "91.39px", background: "#d8d8d8", overflow: "hidden" }}>
        <div style={{ position: "absolute", left: "0px", top: "44.78px", width: "7.31px", height: "21.02px", borderRadius: "91.39px", background: "#4996fe", boxShadow: "inset 0 0 0 0.91px #ffffff, inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.3)" }} />
      </div>
      <div style={{ position: "absolute", left: "129.77px", top: "188.26px", width: "7.31px", height: "118.81px", borderRadius: "91.39px", background: "#d8d8d8", overflow: "hidden" }}>
        <div style={{ position: "absolute", left: "0px", top: "49.35px", width: "7.31px", height: "69.46px", borderRadius: "91.39px", background: "#4996fe", boxShadow: "inset 0 0 0 0.91px #ffffff, inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.3)" }} />
      </div>
      <div style={{ position: "absolute", left: "140.74px", top: "208.37px", width: "7.31px", height: "98.7px", borderRadius: "91.39px", background: "#d8d8d8", overflow: "hidden" }}>
        <div style={{ position: "absolute", left: "0px", top: "46.61px", width: "7.31px", height: "52.09px", borderRadius: "91.39px", background: "#4996fe", boxShadow: "inset 0 0 0 0.91px #ffffff, inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.3)" }} />
      </div>
      <div style={{ position: "absolute", left: "151.71px", top: "149.88px", width: "7.31px", height: "157.19px", borderRadius: "91.39px", background: "#d8d8d8", overflow: "hidden" }}>
        <div style={{ position: "absolute", left: "0px", top: "53.92px", width: "7.31px", height: "103.27px", borderRadius: "91.39px", background: "#4996fe", boxShadow: "inset 0 0 0 0.91px #ffffff, inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.3)" }} />
      </div>
      <div style={{ position: "absolute", left: "162.67px", top: "176.38px", width: "7.31px", height: "130.69px", borderRadius: "91.39px", background: "#d8d8d8", overflow: "hidden" }}>
        <div style={{ position: "absolute", left: "0px", top: "46.61px", width: "7.31px", height: "84.08px", borderRadius: "91.39px", background: "#4996fe", boxShadow: "inset 0 0 0 0.91px #ffffff, inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.3)" }} />
      </div>
      <div style={{ position: "absolute", left: "173.64px", top: "214.76px", width: "7.31px", height: "92.3px", borderRadius: "91.39px", background: "#d8d8d8", overflow: "hidden" }}>
        <div style={{ position: "absolute", left: "0px", top: "54.83px", width: "7.31px", height: "37.47px", borderRadius: "91.39px", background: "#4996fe", boxShadow: "inset 0 0 0 0.91px #ffffff, inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.3)" }} />
      </div>
      <div style={{ position: "absolute", left: "184.61px", top: "185.52px", width: "7.31px", height: "121.55px", borderRadius: "91.39px", background: "#d8d8d8", overflow: "hidden" }}>
        <div style={{ position: "absolute", left: "0px", top: "44.78px", width: "7.31px", height: "76.77px", borderRadius: "91.39px", background: "#4996fe", boxShadow: "inset 0 0 0 0.91px #ffffff, inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.3)" }} />
      </div>
      <div style={{ position: "absolute", left: "195.57px", top: "199.23px", width: "7.31px", height: "107.84px", borderRadius: "91.39px", background: "#d8d8d8", overflow: "hidden" }}>
        <div style={{ position: "absolute", left: "0px", top: "57.58px", width: "7.31px", height: "50.26px", borderRadius: "91.39px", background: "#4996fe", boxShadow: "inset 0 0 0 0.91px #ffffff, inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.3)" }} />
      </div>
      <div style={{ position: "absolute", left: "206.54px", top: "214.76px", width: "7.31px", height: "92.3px", borderRadius: "91.39px", background: "#d8d8d8", overflow: "hidden" }}>
        <div style={{ position: "absolute", left: "0px", top: "54.83px", width: "7.31px", height: "37.47px", borderRadius: "91.39px", background: "#4996fe", boxShadow: "inset 0 0 0 0.91px #ffffff, inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.3)" }} />
      </div>
      <div style={{ position: "absolute", left: "217.51px", top: "193.74px", width: "7.31px", height: "113.32px", borderRadius: "91.39px", background: "#d8d8d8", overflow: "hidden" }}>
        <div style={{ position: "absolute", left: "0px", top: "48.44px", width: "7.31px", height: "64.89px", borderRadius: "91.39px", background: "#4996fe", boxShadow: "inset 0 0 0 0.91px #ffffff, inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.3)" }} />
      </div>
      <div style={{ position: "absolute", left: "228.47px", top: "159.02px", width: "7.31px", height: "148.05px", borderRadius: "91.39px", background: "#d8d8d8", overflow: "hidden" }}>
        <div style={{ position: "absolute", left: "0px", top: "58.49px", width: "7.31px", height: "89.56px", borderRadius: "91.39px", background: "#4996fe", boxShadow: "inset 0 0 0 0.91px #ffffff, inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.3)" }} />
      </div>
      <div style={{ position: "absolute", left: "239.44px", top: "230.3px", width: "7.31px", height: "76.77px", borderRadius: "91.39px", background: "#d8d8d8", overflow: "hidden" }}>
        <div style={{ position: "absolute", left: "0px", top: "50.26px", width: "7.31px", height: "26.5px", borderRadius: "91.39px", background: "#4996fe", boxShadow: "inset 0 0 0 0.91px #ffffff, inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.3)" }} />
      </div>
      <div style={{ position: "absolute", left: "250.41px", top: "214.76px", width: "7.31px", height: "92.3px", borderRadius: "91.39px", background: "#d8d8d8", overflow: "hidden" }}>
        <div style={{ position: "absolute", left: "0px", top: "57.58px", width: "7.31px", height: "34.73px", borderRadius: "91.39px", background: "#4996fe", boxShadow: "inset 0 0 0 0.91px #ffffff, inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.3)" }} />
      </div>
      <div style={{ position: "absolute", left: "261.37px", top: "176.38px", width: "7.31px", height: "130.69px", borderRadius: "91.39px", background: "#d8d8d8", overflow: "hidden" }}>
        <div style={{ position: "absolute", left: "0px", top: "52.09px", width: "7.31px", height: "78.59px", borderRadius: "91.39px", background: "#4996fe", boxShadow: "inset 0 0 0 0.91px #ffffff, inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.3)" }} />
      </div>
      <div style={{ position: "absolute", left: "272.34px", top: "193.74px", width: "7.31px", height: "113.32px", borderRadius: "91.39px", background: "#d8d8d8", overflow: "hidden" }}>
        <div style={{ position: "absolute", left: "0px", top: "54.83px", width: "7.31px", height: "58.49px", borderRadius: "91.39px", background: "#4996fe", boxShadow: "inset 0 0 0 0.91px #ffffff, inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.3)" }} />
      </div>
      <div style={{ position: "absolute", left: "283.31px", top: "214.76px", width: "7.31px", height: "92.3px", borderRadius: "91.39px", background: "#d8d8d8", overflow: "hidden" }}>
        <div style={{ position: "absolute", left: "0px", top: "54.83px", width: "7.31px", height: "37.47px", borderRadius: "91.39px", background: "#4996fe", boxShadow: "inset 0 0 0 0.91px #ffffff, inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.3)" }} />
      </div>
      <div style={{ position: "absolute", left: "294.27px", top: "149.88px", width: "7.31px", height: "157.19px", borderRadius: "91.39px", background: "#d8d8d8", overflow: "hidden" }}>
        <div style={{ position: "absolute", left: "0px", top: "85.91px", width: "7.31px", height: "71.28px", borderRadius: "91.39px", background: "#4996fe", boxShadow: "inset 0 0 0 0.91px #ffffff, inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.3)" }} />
      </div>
      <div style={{ position: "absolute", left: "305.24px", top: "214.76px", width: "7.31px", height: "92.3px", borderRadius: "91.39px", background: "#d8d8d8", overflow: "hidden" }}>
        <div style={{ position: "absolute", left: "0px", top: "54.83px", width: "7.31px", height: "37.47px", borderRadius: "91.39px", background: "#4996fe", boxShadow: "inset 0 0 0 0.91px #ffffff, inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.3)" }} />
      </div>
      <div style={{ position: "absolute", left: "316.21px", top: "169.07px", width: "7.31px", height: "138px", borderRadius: "91.39px", background: "#d8d8d8", overflow: "hidden" }}>
        <div style={{ position: "absolute", left: "0px", top: "63.06px", width: "7.31px", height: "74.94px", borderRadius: "91.39px", background: "#4996fe", boxShadow: "inset 0 0 0 0.91px #ffffff, inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.3)" }} />
      </div>
      <div style={{ position: "absolute", left: "327.17px", top: "214.76px", width: "7.31px", height: "92.3px", borderRadius: "91.39px", background: "#d8d8d8", overflow: "hidden" }}>
        <div style={{ position: "absolute", left: "0px", top: "54.83px", width: "7.31px", height: "37.47px", borderRadius: "91.39px", background: "#4996fe", boxShadow: "inset 0 0 0 0.91px #ffffff, inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.3)" }} />
      </div>
      <div style={{ position: "absolute", left: "338.14px", top: "199.23px", width: "7.31px", height: "107.84px", borderRadius: "91.39px", background: "#d8d8d8", overflow: "hidden" }}>
        <div style={{ position: "absolute", left: "0px", top: "57.58px", width: "7.31px", height: "50.26px", borderRadius: "91.39px", background: "#4996fe", boxShadow: "inset 0 0 0 0.91px #ffffff, inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.3)" }} />
      </div>
      <div style={{ position: "absolute", left: "349.11px", top: "193.74px", width: "7.31px", height: "113.32px", borderRadius: "91.39px", background: "#d8d8d8", overflow: "hidden" }}>
        <div style={{ position: "absolute", left: "0px", top: "48.44px", width: "7.31px", height: "64.89px", borderRadius: "91.39px", background: "#4996fe", boxShadow: "inset 0 0 0 0.91px #ffffff, inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.3)" }} />
      </div>
      <div style={{ position: "absolute", left: "360.07px", top: "214.76px", width: "7.31px", height: "92.3px", borderRadius: "91.39px", background: "#d8d8d8", overflow: "hidden" }}>
        <div style={{ position: "absolute", left: "0px", top: "54.83px", width: "7.31px", height: "37.47px", borderRadius: "91.39px", background: "#4996fe", boxShadow: "inset 0 0 0 0.91px #ffffff, inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.3)" }} />
      </div>
      <div style={{ position: "absolute", left: "371.04px", top: "199.23px", width: "7.31px", height: "107.84px", borderRadius: "91.39px", background: "#d8d8d8", overflow: "hidden" }}>
        <div style={{ position: "absolute", left: "0px", top: "57.58px", width: "7.31px", height: "50.26px", borderRadius: "91.39px", background: "#4996fe", boxShadow: "inset 0 0 0 0.91px #ffffff, inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.3)" }} />
      </div>
      <div style={{ position: "absolute", left: "382.01px", top: "176.38px", width: "7.31px", height: "130.69px", borderRadius: "91.39px", background: "#d8d8d8", overflow: "hidden" }}>
        <div style={{ position: "absolute", left: "0px", top: "46.61px", width: "7.31px", height: "84.08px", borderRadius: "91.39px", background: "#4996fe", boxShadow: "inset 0 0 0 0.91px #ffffff, inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.3)" }} />
      </div>
      <div style={{ position: "absolute", left: "392.97px", top: "176.38px", width: "7.31px", height: "130.69px", borderRadius: "91.39px", background: "#d8d8d8", overflow: "hidden" }}>
        <div style={{ position: "absolute", left: "0px", top: "46.61px", width: "7.31px", height: "84.08px", borderRadius: "91.39px", background: "#4996fe", boxShadow: "inset 0 0 0 0.91px #ffffff, inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.3)" }} />
      </div>
      <div style={{ position: "absolute", left: "403.94px", top: "230.3px", width: "7.31px", height: "76.77px", borderRadius: "91.39px", background: "#d8d8d8", overflow: "hidden" }}>
        <div style={{ position: "absolute", left: "0px", top: "50.26px", width: "7.31px", height: "26.5px", borderRadius: "91.39px", background: "#4996fe", boxShadow: "inset 0 0 0 0.91px #ffffff, inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.3)" }} />
      </div>
      <div style={{ position: "absolute", left: "414.91px", top: "214.76px", width: "7.31px", height: "92.3px", borderRadius: "91.39px", background: "#d8d8d8", overflow: "hidden" }}>
        <div style={{ position: "absolute", left: "0px", top: "54.83px", width: "7.31px", height: "37.47px", borderRadius: "91.39px", background: "#4996fe", boxShadow: "inset 0 0 0 0.91px #ffffff, inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.3)" }} />
      </div>
      <div style={{ position: "absolute", left: "425.87px", top: "185.52px", width: "7.31px", height: "121.55px", borderRadius: "91.39px", background: "#d8d8d8", overflow: "hidden" }}>
        <div style={{ position: "absolute", left: "0px", top: "44.78px", width: "7.31px", height: "76.77px", borderRadius: "91.39px", background: "#4996fe", boxShadow: "inset 0 0 0 0.91px #ffffff, inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.3)" }} />
      </div>
      <div style={{ position: "absolute", left: "436.84px", top: "214.76px", width: "7.31px", height: "92.3px", borderRadius: "91.39px", background: "#d8d8d8", overflow: "hidden" }}>
        <div style={{ position: "absolute", left: "0px", top: "54.83px", width: "7.31px", height: "37.47px", borderRadius: "91.39px", background: "#4996fe", boxShadow: "inset 0 0 0 0.91px #ffffff, inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.3)" }} />
      </div>
      <div style={{ position: "absolute", left: "447.81px", top: "193.74px", width: "7.31px", height: "113.32px", borderRadius: "91.39px", background: "#d8d8d8", overflow: "hidden" }}>
        <div style={{ position: "absolute", left: "0px", top: "48.44px", width: "7.31px", height: "64.89px", borderRadius: "91.39px", background: "#4996fe", boxShadow: "inset 0 0 0 0.91px #ffffff, inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.3)" }} />
      </div>
      <div style={{ position: "absolute", left: "458.77px", top: "159.02px", width: "7.31px", height: "148.05px", borderRadius: "91.39px", background: "#d8d8d8", overflow: "hidden" }}>
        <div style={{ position: "absolute", left: "0px", top: "58.49px", width: "7.31px", height: "89.56px", borderRadius: "91.39px", background: "#4996fe", boxShadow: "inset 0 0 0 0.91px #ffffff, inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.3)" }} />
      </div>
      <div style={{ position: "absolute", left: "469.74px", top: "214.76px", width: "7.31px", height: "92.3px", borderRadius: "91.39px", background: "#d8d8d8", overflow: "hidden" }}>
        <div style={{ position: "absolute", left: "0px", top: "54.83px", width: "7.31px", height: "37.47px", borderRadius: "91.39px", background: "#4996fe", boxShadow: "inset 0 0 0 0.91px #ffffff, inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.3)" }} />
      </div>
      <div style={{ position: "absolute", left: "480.71px", top: "199.23px", width: "7.31px", height: "107.84px", borderRadius: "91.39px", background: "#d8d8d8", overflow: "hidden" }}>
        <div style={{ position: "absolute", left: "0px", top: "57.58px", width: "7.31px", height: "50.26px", borderRadius: "91.39px", background: "#4996fe", boxShadow: "inset 0 0 0 0.91px #ffffff, inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.3)" }} />
      </div>
      <div style={{ position: "absolute", left: "491.67px", top: "231.21px", width: "7.31px", height: "76.77px", borderRadius: "91.39px", background: "#d8d8d8", overflow: "hidden" }}>
        <div style={{ position: "absolute", left: "0px", top: "50.26px", width: "7.31px", height: "26.5px", borderRadius: "91.39px", background: "#4996fe", boxShadow: "inset 0 0 0 0.91px #ffffff, inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.3)" }} />
      </div>
      <div style={{ position: "absolute", left: "502.64px", top: "189.17px", width: "7.31px", height: "118.81px", borderRadius: "91.39px", background: "#d8d8d8", overflow: "hidden" }}>
        <div style={{ position: "absolute", left: "0px", top: "49.35px", width: "7.31px", height: "69.46px", borderRadius: "91.39px", background: "#4996fe", boxShadow: "inset 0 0 0 0.91px #ffffff, inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.3)" }} />
      </div>
      <div style={{ position: "absolute", left: "513.61px", top: "209.28px", width: "7.31px", height: "98.7px", borderRadius: "91.39px", background: "#d8d8d8", overflow: "hidden" }}>
        <div style={{ position: "absolute", left: "0px", top: "46.61px", width: "7.31px", height: "52.09px", borderRadius: "91.39px", background: "#4996fe", boxShadow: "inset 0 0 0 0.91px #ffffff, inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.3)" }} />
      </div>
      <div style={{ position: "absolute", left: "524.57px", top: "150.79px", width: "7.31px", height: "157.19px", borderRadius: "91.39px", background: "#d8d8d8", overflow: "hidden" }}>
        <div style={{ position: "absolute", left: "0px", top: "53.92px", width: "7.31px", height: "103.27px", borderRadius: "91.39px", background: "#4996fe", boxShadow: "inset 0 0 0 0.91px #ffffff, inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.3)" }} />
      </div>
      <div style={{ position: "absolute", left: "535.54px", top: "177.29px", width: "7.31px", height: "130.69px", borderRadius: "91.39px", background: "#d8d8d8", overflow: "hidden" }}>
        <div style={{ position: "absolute", left: "0px", top: "46.61px", width: "7.31px", height: "84.08px", borderRadius: "91.39px", background: "#4996fe", boxShadow: "inset 0 0 0 0.91px #ffffff, inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.3)" }} />
      </div>
      <div style={{ position: "absolute", left: "546.51px", top: "200.14px", width: "7.31px", height: "107.84px", borderRadius: "91.39px", background: "#d8d8d8", overflow: "hidden" }}>
        <div style={{ position: "absolute", left: "0px", top: "57.58px", width: "7.31px", height: "50.26px", borderRadius: "91.39px", background: "#4996fe", boxShadow: "inset 0 0 0 0.91px #ffffff, inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.3)" }} />
      </div>
      <div style={{ position: "absolute", left: "557.47px", top: "186.43px", width: "7.31px", height: "121.55px", borderRadius: "91.39px", background: "#d8d8d8", overflow: "hidden" }}>
        <div style={{ position: "absolute", left: "0px", top: "44.78px", width: "7.31px", height: "76.77px", borderRadius: "91.39px", background: "#4996fe", boxShadow: "inset 0 0 0 0.91px #ffffff, inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.3)" }} />
      </div>
      <div style={{ position: "absolute", left: "568.44px", top: "242.18px", width: "7.31px", height: "65.8px", borderRadius: "91.39px", background: "#d8d8d8", overflow: "hidden" }}>
        <div style={{ position: "absolute", left: "0px", top: "44.78px", width: "7.31px", height: "21.02px", borderRadius: "91.39px", background: "#4996fe", boxShadow: "inset 0 0 0 0.91px #ffffff, inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.3)" }} />
      </div>
      <div style={{ position: "absolute", left: "579.41px", top: "258.63px", width: "7.31px", height: "49.35px", borderRadius: "91.39px", background: "#d8d8d8", overflow: "hidden" }}>
        <div style={{ position: "absolute", left: "0px", top: "26.5px", width: "7.31px", height: "22.85px", borderRadius: "91.39px", background: "#4996fe", boxShadow: "inset 0 0 0 0.91px #ffffff, inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.3)" }} />
      </div>
      <div style={{ position: "absolute", left: "590.37px", top: "186.43px", width: "7.31px", height: "121.55px", borderRadius: "91.39px", background: "#d8d8d8", overflow: "hidden" }}>
        <div style={{ position: "absolute", left: "0px", top: "44.78px", width: "7.31px", height: "76.77px", borderRadius: "91.39px", background: "#4996fe", boxShadow: "inset 0 0 0 0.91px #ffffff, inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.3)" }} />
      </div>
      <div style={{ position: "absolute", left: "601.34px", top: "200.14px", width: "7.31px", height: "107.84px", borderRadius: "91.39px", background: "#d8d8d8", overflow: "hidden" }}>
        <div style={{ position: "absolute", left: "0px", top: "57.58px", width: "7.31px", height: "50.26px", borderRadius: "91.39px", background: "#4996fe", boxShadow: "inset 0 0 0 0.91px #ffffff, inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.3)" }} />
      </div>
      <div style={{ position: "absolute", left: "612.31px", top: "215.68px", width: "7.31px", height: "92.3px", borderRadius: "91.39px", background: "#d8d8d8", overflow: "hidden" }}>
        <div style={{ position: "absolute", left: "0px", top: "54.83px", width: "7.31px", height: "37.47px", borderRadius: "91.39px", background: "#4996fe", boxShadow: "inset 0 0 0 0.91px #ffffff, inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.3)" }} />
      </div>
      <div style={{ position: "absolute", left: "623.27px", top: "159.93px", width: "7.31px", height: "148.05px", borderRadius: "91.39px", background: "#d8d8d8", overflow: "hidden" }}>
        <div style={{ position: "absolute", left: "0px", top: "58.49px", width: "7.31px", height: "89.56px", borderRadius: "91.39px", background: "#4996fe", boxShadow: "inset 0 0 0 0.91px #ffffff, inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.3)" }} />
      </div>
      <div style={{ position: "absolute", left: "634.24px", top: "200.14px", width: "7.31px", height: "107.84px", borderRadius: "91.39px", background: "#d8d8d8", overflow: "hidden" }}>
        <div style={{ position: "absolute", left: "0px", top: "57.58px", width: "7.31px", height: "50.26px", borderRadius: "91.39px", background: "#4996fe", boxShadow: "inset 0 0 0 0.91px #ffffff, inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.3)" }} />
      </div>
      <div style={{ position: "absolute", left: "645.21px", top: "231.21px", width: "7.31px", height: "76.77px", borderRadius: "91.39px", background: "#d8d8d8", overflow: "hidden" }}>
        <div style={{ position: "absolute", left: "0px", top: "50.26px", width: "7.31px", height: "26.5px", borderRadius: "91.39px", background: "#4996fe", boxShadow: "inset 0 0 0 0.91px #ffffff, inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.3)" }} />
      </div>
      <div style={{ position: "absolute", left: "656.17px", top: "214.76px", width: "7.31px", height: "92.3px", borderRadius: "91.39px", background: "#d8d8d8", overflow: "hidden" }}>
        <div style={{ position: "absolute", left: "0px", top: "54.83px", width: "7.31px", height: "37.47px", borderRadius: "91.39px", background: "#4996fe", boxShadow: "inset 0 0 0 0.91px #ffffff, inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.3)" }} />
      </div>
      <div style={{ position: "absolute", left: "667.14px", top: "227.56px", width: "7.31px", height: "79.51px", borderRadius: "91.39px", background: "#d8d8d8", overflow: "hidden" }}>
        <div style={{ position: "absolute", left: "0px", top: "53.92px", width: "7.31px", height: "25.59px", borderRadius: "91.39px", background: "#4996fe", boxShadow: "inset 0 0 0 0.91px #ffffff, inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.3)" }} />
      </div>
      <div style={{ position: "absolute", left: "678.11px", top: "257.72px", width: "7.31px", height: "49.35px", borderRadius: "91.39px", background: "#d8d8d8", overflow: "hidden" }}>
        <div style={{ position: "absolute", left: "0px", top: "26.5px", width: "7.31px", height: "22.85px", borderRadius: "91.39px", background: "#4996fe", boxShadow: "inset 0 0 0 0.91px #ffffff, inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.3)" }} />
      </div>
      <div style={{ position: "absolute", left: "689.07px", top: "214.76px", width: "7.31px", height: "92.3px", borderRadius: "91.39px", background: "#d8d8d8", overflow: "hidden" }}>
        <div style={{ position: "absolute", left: "0px", top: "56.66px", width: "7.31px", height: "35.64px", borderRadius: "91.39px", background: "#4996fe", boxShadow: "inset 0 0 0 0.91px #ffffff, inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.3)" }} />
      </div>
      <div style={{ position: "absolute", left: "18.28px", top: "18.28px", width: "672.62px", height: "64.59px", display: "flex", flexDirection: "column", gap: "12.79px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "3.66px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ alignSelf: "stretch", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14.62px", fontWeight: 500, color: "#000000", lineHeight: "1.5" }}>Cash Position</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "283px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#6b6b6b", letterSpacing: "-0.02em" }}>Track how your available cash is moving over time.</p>
          </div>
          <div data-fu="btn" style={{ height: "29.24px", flexShrink: 0, borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8", display: "flex", flexDirection: "row", padding: "7.31px 7.31px 7.31px 7.31px", gap: "5.48px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <Calendar size={16.5} style={{ width: "16.45px", height: "16.45px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "33px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#6c6c6c" }}>Month</p>
          </div>
        </div>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10.97px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "5.48px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "9.14px", height: "9.14px", flexShrink: 0, borderRadius: "1.83px", background: "#4996fe", boxShadow: "inset 0 0 0 0.37px #d6d6d6, inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.29)", overflow: "hidden" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "60px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#24322e", textBox: "trim-both cap alphabetic", height: "8px" }}>Cash Inflow</p>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "5.48px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "9.14px", height: "9.14px", flexShrink: 0, borderRadius: "1.83px", background: "#d8d8d8", boxShadow: "inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.29)", overflow: "hidden" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "69px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#24322e", textBox: "trim-both cap alphabetic", height: "8px" }}>Cash Outflow</p>
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
