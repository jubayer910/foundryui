// Cash Position card (montra, Charts) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Ingot Icons.
import type { SVGProps } from "react";

// Ingot Icons used here, inlined so this file needs no icon package.
function icon(body: string) {
  return function Icon({ size = 24, strokeWidth = 1.5, ...p }: { size?: number; strokeWidth?: number } & SVGProps<SVGSVGElement>) {
    const html = strokeWidth == 1.5 ? body : body.replace(/stroke-width="([\d.]+)"/g, (_, w) => `stroke-width="${(Number(w) * Number(strokeWidth)) / 1.5}"`);
    return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden {...p} dangerouslySetInnerHTML={{ __html: html }} />;
  };
}
const Calendar = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12\" /><path d=\"M16 3v4\" /><path d=\"M8 3v4\" /><path d=\"M4 11h16\" /></g>");

export function CashPositionCard() {
  return (
    <div style={{ width: "711.01px", height: "353.67px", borderRadius: "10.97px", background: "#fefefe", boxShadow: "inset 0 0 0 0.91px #ededed", overflow: "hidden", position: "relative" }}>
      <svg style={{ position: "absolute", left: "63.97px", top: "100.53px", width: "691.81px", height: "206.54px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="691.81" height="206.54" viewBox="0 0 691.81 206.54" fill="none" overflow="visible"><path transform="matrix(0 1 -1 0 0 0)" d="M0 -0.548333 L0 0 L206.539 0 L206.539 -0.548333 L206.539 -1.09667 L0 -1.09667 L0 -0.548333 Z" fill="#f6f6f6"/><path transform="matrix(0 1 -1 0 53.005 0)" d="M0 -0.548333 L0 0 L206.539 0 L206.539 -0.548333 L206.539 -1.09667 L0 -1.09667 L0 -0.548333 Z" fill="#f6f6f6"/><path transform="matrix(0 1 -1 0 106.011 0)" d="M0 -0.548333 L0 0 L206.539 0 L206.539 -0.548333 L206.539 -1.09667 L0 -1.09667 L0 -0.548333 Z" fill="#f6f6f6"/><path transform="matrix(0 1 -1 0 159.017 0)" d="M0 -0.548333 L0 0 L206.539 0 L206.539 -0.548333 L206.539 -1.09667 L0 -1.09667 L0 -0.548333 Z" fill="#f6f6f6"/><path transform="matrix(0 1 -1 0 212.022 0)" d="M0 -0.548333 L0 0 L206.539 0 L206.539 -0.548333 L206.539 -1.09667 L0 -1.09667 L0 -0.548333 Z" fill="#f6f6f6"/><path transform="matrix(0 1 -1 0 265.028 0)" d="M0 -0.548333 L0 0 L206.539 0 L206.539 -0.548333 L206.539 -1.09667 L0 -1.09667 L0 -0.548333 Z" fill="#f6f6f6"/><path transform="matrix(0 1 -1 0 318.033 0)" d="M0 -0.548333 L0 0 L206.539 0 L206.539 -0.548333 L206.539 -1.09667 L0 -1.09667 L0 -0.548333 Z" fill="#f6f6f6"/><path transform="matrix(0 1 -1 0 371.039 0)" d="M0 -0.548333 L0 0 L206.539 0 L206.539 -0.548333 L206.539 -1.09667 L0 -1.09667 L0 -0.548333 Z" fill="#f6f6f6"/><path transform="matrix(0 1 -1 0 424.044 0)" d="M0 -0.548333 L0 0 L206.539 0 L206.539 -0.548333 L206.539 -1.09667 L0 -1.09667 L0 -0.548333 Z" fill="#f6f6f6"/><path transform="matrix(0 1 -1 0 477.05 0)" d="M0 -0.548333 L0 0 L206.539 0 L206.539 -0.548333 L206.539 -1.09667 L0 -1.09667 L0 -0.548333 Z" fill="#f6f6f6"/><path transform="matrix(0 1 -1 0 530.056 0)" d="M0 -0.548333 L0 0 L206.539 0 L206.539 -0.548333 L206.539 -1.09667 L0 -1.09667 L0 -0.548333 Z" fill="#f6f6f6"/><path transform="matrix(0 1 -1 0 583.061 0)" d="M0 -0.548333 L0 0 L206.539 0 L206.539 -0.548333 L206.539 -1.09667 L0 -1.09667 L0 -0.548333 Z" fill="#f6f6f6"/><path transform="matrix(0 1 -1 0 636.067 0)" d="M0 -0.548333 L0 0 L206.539 0 L206.539 -0.548333 L206.539 -1.09667 L0 -1.09667 L0 -0.548333 Z" fill="#f6f6f6"/><path transform="matrix(0 1 -1 0 691.814 0)" d="M0 -0.548333 L0 0 L206.539 0 L206.539 -0.548333 L206.539 -1.09667 L0 -1.09667 L0 -0.548333 Z" fill="#f6f6f6"/></svg>
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
          <div style={{ height: "29.24px", flexShrink: 0, borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8", display: "flex", flexDirection: "row", padding: "7.31px 7.31px 7.31px 7.31px", gap: "5.48px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
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
