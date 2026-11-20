"use client";
// Calendar grid (spendix, Charts) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Ingot Icons.
import { useEffect, useRef } from "react";

export function CalendarGrid() {
  const fuRef = useRef<any>(null);
  useEffect(() => fuInteract(fuRef.current), []);
  return (
    <div ref={fuRef} style={{ width: "668px", height: "222px", position: "relative" }}>
      <p data-fu="cell" style={{ position: "absolute", left: "8px", top: "0px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "25px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#818892" }}>Mon</p>
      <p data-fu="cell" style={{ position: "absolute", left: "104.29px", top: "0px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "20px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#818892" }}>Tue</p>
      <p data-fu="cell" style={{ position: "absolute", left: "200.57px", top: "0px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "26px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#818892" }}>Wed</p>
      <p data-fu="cell" style={{ position: "absolute", left: "296.86px", top: "0px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "21px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#818892" }}>Thu</p>
      <p data-fu="cell" style={{ position: "absolute", left: "393.14px", top: "0px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "15px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#818892" }}>Fri</p>
      <p data-fu="cell" style={{ position: "absolute", left: "489.43px", top: "0px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "20px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#818892" }}>Sat</p>
      <p data-fu="cell" style={{ position: "absolute", left: "585.71px", top: "0px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "22px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#818892" }}>Sun</p>
      <div style={{ position: "absolute", left: "0px", top: "22px", width: "90.29px", height: "36px", borderRadius: "8px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ededed" }}>
        <p style={{ position: "absolute", left: "8px", top: "10px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "12px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#c4c4c4" }}>13</p>
      </div>
      <div style={{ position: "absolute", left: "96.29px", top: "22px", width: "90.29px", height: "36px", borderRadius: "8px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ededed" }}>
        <p style={{ position: "absolute", left: "8px", top: "10px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "12px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#c4c4c4" }}>14</p>
      </div>
      <div style={{ position: "absolute", left: "192.57px", top: "22px", width: "90.29px", height: "36px", borderRadius: "8px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ededed" }}>
        <p style={{ position: "absolute", left: "8px", top: "10px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "13px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#c4c4c4" }}>15</p>
      </div>
      <div style={{ position: "absolute", left: "288.86px", top: "22px", width: "90.29px", height: "36px", borderRadius: "8px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ededed" }}>
        <p style={{ position: "absolute", left: "8px", top: "10px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "12px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#c4c4c4" }}>16</p>
      </div>
      <div style={{ position: "absolute", left: "385.14px", top: "22px", width: "90.29px", height: "36px", borderRadius: "8px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ededed" }}>
        <p style={{ position: "absolute", left: "8px", top: "10px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "11px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#c4c4c4" }}>17</p>
      </div>
      <div style={{ position: "absolute", left: "481.43px", top: "22px", width: "90.29px", height: "36px", borderRadius: "8px", background: "#f4f4f5", boxShadow: "inset 0 0 0 1.5px #242424" }}>
        <p style={{ position: "absolute", left: "8px", top: "10px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "13px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#666d80" }}>18</p>
        <p style={{ position: "absolute", left: "51.29px", top: "11px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "31px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "11px", fontWeight: 500, color: "#0f172a" }}>Today</p>
      </div>
      <div style={{ position: "absolute", left: "577.71px", top: "22px", width: "90.29px", height: "36px", borderRadius: "8px", background: "#f4f4f5", boxShadow: "inset 0 0 0 1px rgba(233, 233, 236, 0.8)" }}>
        <p style={{ position: "absolute", left: "8px", top: "10px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "13px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#666d80" }}>19</p>
      </div>
      <div style={{ position: "absolute", left: "0px", top: "63px", width: "90.29px", height: "36px", borderRadius: "8px", background: "#f4f4f5", boxShadow: "inset 0 0 0 1px rgba(233, 233, 236, 0.8)" }}>
        <p style={{ position: "absolute", left: "8px", top: "10px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "16px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#666d80" }}>20</p>
      </div>
      <div style={{ position: "absolute", left: "96.29px", top: "63px", width: "90.29px", height: "36px", borderRadius: "8px", background: "linear-gradient(180deg, rgba(37, 99, 235, 0.22) 0%, rgba(37, 99, 235, 0.26) 100%), linear-gradient(#ffffff, #ffffff)", boxShadow: "inset 0 0 0 1px rgba(30, 79, 188, 0.14), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.35), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.04)" }}>
        <p style={{ position: "absolute", left: "8px", top: "10px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "13px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#0f172a" }}>21</p>
        <div style={{ position: "absolute", left: "31.29px", top: "9px", width: "53px", height: "18px", display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "18px", height: "18px", flexShrink: 0, borderRadius: "4.5px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e7e7e7", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <svg width={10.8} height={10.8} viewBox="0 0 24 24" style={{ width: "10.8px", height: "10.8px", flexShrink: 0, color: "#1f1f21", display: "block" }}><path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z" fill="currentColor" /></svg>
          </div>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "31px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#0f172a" }}>$320</p>
        </div>
      </div>
      <div style={{ position: "absolute", left: "192.57px", top: "63px", width: "90.29px", height: "36px", borderRadius: "8px", background: "#f4f4f5", boxShadow: "inset 0 0 0 1px rgba(233, 233, 236, 0.8)" }}>
        <p style={{ position: "absolute", left: "8px", top: "10px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "15px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#666d80" }}>22</p>
      </div>
      <div style={{ position: "absolute", left: "288.86px", top: "63px", width: "90.29px", height: "36px", borderRadius: "8px", background: "#f4f4f5", boxShadow: "inset 0 0 0 1px rgba(233, 233, 236, 0.8)" }}>
        <p style={{ position: "absolute", left: "8px", top: "10px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "15px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#666d80" }}>23</p>
      </div>
      <div style={{ position: "absolute", left: "385.14px", top: "63px", width: "90.29px", height: "36px", borderRadius: "8px", background: "linear-gradient(180deg, rgba(37, 99, 235, 0.65) 0%, rgba(37, 99, 235, 0.8) 100%), linear-gradient(#ffffff, #ffffff)", boxShadow: "inset 0 0 0 1px rgba(30, 79, 188, 0.29), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.18), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.09)" }}>
        <p style={{ position: "absolute", left: "7px", top: "10px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "15px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#ffffff" }}>24</p>
        <div style={{ position: "absolute", left: "25.29px", top: "9px", width: "60px", height: "18px", display: "flex", flexDirection: "row", gap: "3px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "18px", height: "18px", flexShrink: 0, borderRadius: "4.5px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e7e7e7", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "10.8px", height: "10.8px", flexShrink: 0, position: "relative" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "10.8px", height: "10.8px", background: "url('https://ingotui.com/library-img/0cf31a99ea799aa140a3352eb940dd3f193295c3.png') center / cover no-repeat" }} />
            </div>
          </div>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "39px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#ffffff" }}>$1,350</p>
        </div>
      </div>
      <div style={{ position: "absolute", left: "481.43px", top: "63px", width: "90.29px", height: "36px", borderRadius: "8px", background: "#f4f4f5", boxShadow: "inset 0 0 0 1px rgba(233, 233, 236, 0.8)" }}>
        <p style={{ position: "absolute", left: "8px", top: "10px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "15px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#666d80" }}>25</p>
      </div>
      <div style={{ position: "absolute", left: "577.71px", top: "63px", width: "90.29px", height: "36px", borderRadius: "8px", background: "#f4f4f5", boxShadow: "inset 0 0 0 1px rgba(233, 233, 236, 0.8)" }}>
        <p style={{ position: "absolute", left: "8px", top: "10px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "15px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#666d80" }}>26</p>
      </div>
      <div style={{ position: "absolute", left: "0px", top: "104px", width: "90.29px", height: "36px", borderRadius: "8px", background: "#f4f4f5", boxShadow: "inset 0 0 0 1px rgba(233, 233, 236, 0.8)" }}>
        <p style={{ position: "absolute", left: "8px", top: "10px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "14px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#666d80" }}>27</p>
      </div>
      <div style={{ position: "absolute", left: "96.29px", top: "104px", width: "90.29px", height: "36px", borderRadius: "8px", background: "#f4f4f5", boxShadow: "inset 0 0 0 1px rgba(233, 233, 236, 0.8)" }}>
        <p style={{ position: "absolute", left: "8px", top: "10px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "15px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#666d80" }}>28</p>
      </div>
      <div style={{ position: "absolute", left: "192.57px", top: "104px", width: "90.29px", height: "36px", borderRadius: "8px", background: "#f4f4f5", boxShadow: "inset 0 0 0 1px rgba(233, 233, 236, 0.8)" }}>
        <p style={{ position: "absolute", left: "8px", top: "10px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "15px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#666d80" }}>29</p>
      </div>
      <div style={{ position: "absolute", left: "288.86px", top: "104px", width: "90.29px", height: "36px", borderRadius: "8px", background: "linear-gradient(180deg, rgba(37, 99, 235, 0.22) 0%, rgba(37, 99, 235, 0.26) 100%), linear-gradient(#ffffff, #ffffff)", boxShadow: "inset 0 0 0 1px rgba(30, 79, 188, 0.14), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.35), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.04)" }}>
        <p style={{ position: "absolute", left: "8px", top: "10px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "16px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#0f172a" }}>30</p>
        <div style={{ position: "absolute", left: "30.29px", top: "9px", width: "54px", height: "18px", display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "18px", height: "18px", flexShrink: 0, borderRadius: "4.5px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e7e7e7", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <svg style={{ width: "10.8px", height: "10.8px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "hidden" }} xmlns="http://www.w3.org/2000/svg" width="10.8" height="10.8" viewBox="0 0 10.8 10.8" fill="none" overflow="hidden"><path transform="matrix(1 0 0 1 0 2.47)" d="M0 0.295305 L0 4.25059 C0.00358594 5.14497 0.734062 5.86469 1.62485 5.8611 L7.38998 5.8611 C7.55388 5.8611 7.68572 5.72927 7.68572 5.56895 L7.68572 1.61388 C7.68213 0.7195 6.95187 -0.000429229 6.06087 0.00315671 L0.295734 0.00315671 C0.131836 0.00315671 0 0.134993 0 0.295305 Z M8.05275 1.83831 L10.433 0.0993442 C10.6397 -0.0715152 10.8 -0.0289059 10.8 0.281172 L10.8 5.58309 C10.8 5.93599 10.604 5.89317 10.433 5.76491 L8.05275 4.02953 L8.05275 1.83831 Z" fill="#4a8cff"/><path transform="matrix(1 0 0 1 -98.942 19.636)" d="M4.104 0.157781 L4.2255 0.648844 C3.74756 0.766351 3.29015 0.955448 2.86875 1.20973 L2.60888 0.776038 C3.07326 0.495797 3.57732 0.287357 4.104 0.157781 Z M6.57451 0.648844 C7.05242 0.766428 7.50982 0.955521 7.93125 1.20973 L8.19281 0.776038 C7.72791 0.495644 7.22326 0.287199 6.696 0.157781 L6.57451 0.648844 Z M0.776259 2.60866 C0.495779 3.07287 0.287249 3.5769 0.157783 4.10358 L0.648852 4.22508 C0.766379 3.74718 0.955544 3.28982 1.20994 2.86854 L0.776259 2.60866 Z M0.561098 4.66636 L0.0607501 4.59042 C-0.02025 5.12675 -0.02025 5.6722 0.0607501 6.20852 L0.561098 6.13259 C0.487692 5.6466 0.487692 5.15234 0.561098 4.66636 Z M7.93125 9.58922 C7.51038 9.84339 7.05355 10.0325 6.5762 10.1503 L6.69769 10.6414 C7.2238 10.5116 7.72729 10.3031 8.19112 10.0229 L7.93125 9.58922 Z M10.2389 6.13259 L10.7393 6.20852 C10.8203 5.6722 10.8203 5.12675 10.7393 4.59042 L10.2389 4.66636 C10.3121 5.15109 10.3121 5.64785 10.2389 6.13259 Z M10.1512 6.57387 C10.0335 7.05177 9.84429 7.50917 9.59007 7.93062 L10.0238 8.19218 C10.3042 7.72726 10.5127 7.22262 10.6422 6.69537 L10.1512 6.57387 Z M6.13323 10.2389 C5.64708 10.3121 5.15272 10.3121 4.66657 10.2389 L4.59085 10.7392 C5.12726 10.8202 5.67274 10.8202 6.20916 10.7392 L6.13323 10.2389 Z M9.33926 8.30271 C9.04749 8.69798 8.69801 9.04718 8.3025 9.33862 L8.60287 9.74616 C9.03918 9.4253 9.42486 9.04076 9.747 8.6054 L9.33926 8.30271 Z M8.3025 1.46032 C8.69799 1.7522 9.04746 2.10174 9.33926 2.49729 L9.747 2.19354 C9.42584 1.75847 9.04132 1.37395 8.60625 1.05279 L8.3025 1.46032 Z M1.46054 2.49729 C1.75236 2.10169 2.1019 1.75214 2.4975 1.46032 L2.19375 1.05279 C1.75858 1.37384 1.37405 1.75837 1.053 2.19354 L1.46054 2.49729 Z M9.59007 2.86854 C9.84427 3.28932 10.0334 3.74609 10.1512 4.22339 L10.6422 4.10189 C10.5124 3.57586 10.3039 3.07245 10.0238 2.60866 L9.59007 2.86854 Z M4.66657 0.561093 C5.15278 0.487898 5.64702 0.487898 6.13323 0.561093 L6.20916 0.06075 C5.67276 -0.02025 5.12725 -0.02025 4.59085 0.06075 L4.66657 0.561093 Z M1.72041 9.88031 L0.675003 10.1242 L0.918848 9.07875 L0.4261 8.96316 L0.182255 10.0086 C0.0966148 10.3735 0.425674 10.7023 0.790596 10.6169 L1.83516 10.3773 L1.72041 9.88031 Z M0.531569 8.51196 L1.02432 8.6265 L1.19307 7.90193 C0.946963 7.4886 0.763563 7.04104 0.648852 6.57387 L0.157783 6.69537 C0.267866 7.14277 0.435186 7.57411 0.655598 7.97871 L0.531569 8.51196 Z M2.16928 9.77737 L2.28404 10.2701 L2.81729 10.1461 C3.22189 10.3665 3.65322 10.5338 4.10063 10.6439 L4.22213 10.1528 C3.75599 10.0366 3.3096 9.85207 2.89744 9.60525 L2.16928 9.77737 Z M1.56158 3.2786 C0.789758 4.67606 0.837846 6.38234 1.6875 7.73402 L1.26563 9.53353 L3.06534 9.11166 C4.64379 10.1058 6.6785 9.99316 8.13756 8.83069 C9.59661 7.66821 10.1611 5.71029 9.5445 3.9498 C8.29406 0.378633 3.37986 -0.0137098 1.56158 3.2786 Z" fill="#3a76f0"/><path transform="matrix(1 0 0 1 -79.365 19.636)" d="M2.74348 4.35471 C5.75904 3.31521 4.69339 -0.0994489 4.99882 0.00222295 C6.97299 0.967473 9.19311 3.07347 9.19311 6.23247 C9.19311 8.65446 7.31534 10.7955 4.58623 10.7955 C2.1653 10.9052 0.113722 9.03267 0.00403464 6.61153 C-0.110083 4.10137 2.23449 2.27065 2.23449 2.72247 C2.25537 2.97982 2.4739 4.35471 2.74348 4.35471 Z" fill="#e73d76" fillRule="evenodd"/><path transform="matrix(1 0 0 1 -62.227 19.666)" d="M5.4502 1.80516 C7.0702 1.9003 8.01879 2.61284 8.11096 3.27793 C8.15589 3.71288 7.86691 4.05102 7.3653 4.05102 C6.6325 4.05102 6.55783 3.07438 5.296 3.07438 C4.72711 3.07438 4.24659 3.31105 4.24659 3.82426 C4.24659 4.89666 8.28921 4.27377 8.28921 6.63521 C8.28921 7.99639 7.19971 8.88824 5.57339 8.88824 C4.14302 8.88824 2.70527 8.23981 2.71244 7.12332 C2.71497 6.78645 2.96599 6.47743 3.30053 6.47743 C4.14302 6.47743 4.13522 7.72892 5.47657 7.72892 C6.41714 7.72892 6.73839 7.2155 6.73839 6.85775 C6.73839 5.56576 2.67194 6.35804 2.67194 3.92804 C2.67194 2.61284 3.75237 1.70581 5.4502 1.80516 Z M6.3374 10.307 C8.93256 11.8757 11.9711 8.87262 10.3412 6.25004 C10.9498 2.77358 7.90783 -0.201062 4.47145 0.437868 C1.88303 -1.1391 -1.16881 1.85389 0.454355 4.48154 C-0.165379 7.93184 2.85925 10.9702 6.3374 10.307 Z" fill="#178cc8" fillRule="evenodd"/><path transform="matrix(1 0 0 1 -45.531 19.636)" d="M0.214099 10.7998 L2.44266 10.7998 L2.44266 3.59986 L0.214099 3.59986 L0.214099 10.7998 Z M6.00539 7.02042 C6.00539 6.00834 6.47135 5.40506 7.3634 5.40506 C8.1829 5.40506 8.57651 5.98387 8.57651 7.02042 L8.57651 10.8 L10.7949 10.7998 L10.7949 6.24122 C10.7949 4.31262 9.70165 3.38006 8.17509 3.38006 C6.6479 3.38006 6.00539 4.56975 6.00539 4.56975 L6.00539 3.59986 L3.86754 3.59986 L3.86754 10.7998 L6.00539 10.7998 L6.00539 7.02042 Z M1.31794 2.65718 C2.04567 2.65718 2.63566 2.06191 2.63566 1.32827 C2.63566 0.594844 2.04567 0 1.31794 0 C0.589781 0 0 0.594844 0 1.32827 C0 2.06191 0.589781 2.65718 1.31794 2.65718 Z" fill="#10658f" fillRule="evenodd"/><path transform="matrix(1 0 0 1 -117.211 33.635)" d="M6.68137 0.00906887 C6.68179 0.173811 6.73009 2.55466 9.22864 2.70316 C9.22864 3.38977 9.22928 3.88758 9.22928 4.54275 C9.04007 4.55372 7.5846 4.44804 6.67841 3.63994 L6.67567 7.22123 C6.71005 9.70692 4.88102 11.2193 2.48983 10.6971 C-1.63316 9.46371 -0.263116 3.34863 3.87674 4.00317 C3.87674 5.97734 3.87779 4.00254 3.87779 5.97734 C2.16772 5.72569 1.59566 7.14825 2.05002 8.16708 C2.46367 9.09436 4.16656 9.29559 4.76035 7.98715 C4.82764 7.73107 4.86139 7.43913 4.86139 7.11134 L4.86139 0 L6.68137 0.00906887 Z" fill="#000000" fillRule="evenodd"/><path transform="matrix(1 0 0 1 -97.743 33.635)" d="M3.45375 7.14303 C3.17025 8.62993 2.82389 10.0554 1.79789 10.8001 C1.48106 8.55272 2.26279 6.86501 2.62582 5.0731 C2.00693 4.03128 2.70029 1.93456 4.00578 2.45136 C5.61207 3.0867 2.61465 6.3248 4.62678 6.72917 C6.72772 7.15126 7.58538 3.08396 6.28284 1.76138 C4.40044 -0.148657 0.80353 1.71772 1.24587 4.45231 C1.35344 5.12077 2.04405 5.32348 1.52177 6.24612 C0.317109 5.97908 -0.0423272 5.02901 0.00386808 3.76212 C0.078329 1.68882 1.86687 0.237147 3.66068 0.0363347 C5.92952 -0.217634 8.05872 0.869116 8.35277 3.00317 C8.68373 5.41208 7.32867 8.02074 4.90289 7.83322 C4.24519 7.78196 3.96928 7.45627 3.45375 7.14303 Z" fill="#d0272c"/><path transform="matrix(1 0 0 1 -79.933 33.635)" d="M0.704318 0 L0 1.87819 L0 9.39051 L2.58145 9.39051 L2.58145 10.8 L3.99073 10.8 L5.39873 9.39051 L7.51106 9.39051 L10.3283 6.57429 L10.3283 0 L0.704318 0 Z M1.64278 0.938461 L9.38967 0.938461 L9.38967 6.1039 L7.74605 7.74752 L5.16417 7.74752 L3.75658 9.15511 L3.75658 7.74752 L1.64278 7.74752 L1.64278 0.938461 Z M4.22507 5.63498 L5.16417 5.63498 L5.16417 2.81791 L4.22507 2.81791 L4.22507 5.63498 Z M6.80716 5.63498 L7.74605 5.63498 L7.74605 2.81791 L6.80716 2.81791 L6.80716 5.63498 Z" fill="#5a3e85"/><path transform="matrix(1 0 0 1 -62.227 34.385)" d="M5.30054 2.18419 C5.05332 2.18862 4.84449 2.39913 4.84892 2.63939 C4.85335 2.88851 5.05838 3.0832 5.31256 3.08025 C5.56738 3.07708 5.76059 2.88028 5.75827 2.62589 C5.75616 2.37635 5.55219 2.17955 5.30054 2.18419 Z M8.47325 5.05779 C8.27729 5.05631 8.11086 5.21684 8.10285 5.41491 C8.09441 5.62648 8.25894 5.8005 8.4684 5.80092 C8.67111 5.80155 8.83121 5.64841 8.83859 5.44655 C8.8464 5.23455 8.68187 5.05926 8.47325 5.05779 Z M6.52144 5.44612 C6.52946 5.23498 6.35966 5.05779 6.14809 5.05695 C5.93884 5.0561 5.76334 5.23561 5.77072 5.44359 C5.77747 5.64251 5.94496 5.80324 6.14556 5.80345 C6.34574 5.80366 6.51364 5.64736 6.52144 5.44612 Z M8.83838 8.91415 C8.52978 8.88187 8.20536 9.0599 7.88262 9.09302 C6.89902 9.19364 6.01794 8.91942 5.29126 8.24758 C3.90941 6.96951 4.10684 5.0097 5.70554 3.96239 C7.12641 3.03152 9.21027 3.34181 10.212 4.63338 C11.0863 5.76042 10.9836 7.2566 9.91628 8.2035 C9.41825 8.64541 9.62708 8.78632 9.75659 9.29974 C9.46972 9.17191 9.15163 8.94684 8.83838 8.91415 Z M2.45056 2.1844 C2.19849 2.1768 1.99114 2.3696 1.98376 2.61808 C1.97638 2.86994 2.16896 3.0716 2.42293 3.07814 C2.67458 3.08447 2.88573 2.89167 2.89501 2.64635 C2.90429 2.40187 2.69124 2.19136 2.45056 2.1844 Z M3.97396 6.69192 C3.58224 6.6434 3.22554 6.59004 2.86695 6.55966 C2.74313 6.54933 2.59611 6.56409 2.49106 6.62336 C2.14281 6.81996 1.80889 7.04187 1.41317 7.28908 C1.48573 6.96066 1.53278 6.67315 1.6161 6.3964 C1.67727 6.19327 1.64879 6.07999 1.46148 5.94752 C-0.966414 4.23344 -0.2005 1.08014 2.51553 0.192936 C4.63166 -0.498518 7.28736 0.717748 7.50568 3.05409 C5.4657 3.16062 3.79086 4.53192 3.97396 6.69192 Z" fill="#3caf41"/><path transform="matrix(1 0 0 1 -45.533 35.968)" d="M3.04594 0 C4.72817 0 6.09188 1.3732 6.09188 3.06682 C6.09188 4.76065 4.72817 6.13364 3.04594 6.13364 C1.36371 6.13364 0 4.76065 0 3.06682 C0 1.3732 1.36371 0 3.04594 0 Z M7.91016 0.179719 C8.75138 0.179719 9.43313 1.47213 9.43313 3.06682 C9.43587 3.45115 9.2726 5.95413 7.91037 5.95413 C7.06915 5.95413 6.38719 4.66109 6.38719 3.06682 C6.38719 1.47256 7.06915 0.179719 7.91016 0.179719 Z M10.2644 0.480305 C10.5602 0.480305 10.8 1.63835 10.8 3.06682 C10.8 4.49487 10.5602 5.65334 10.2644 5.65334 C9.96849 5.65334 9.72886 4.49529 9.72886 3.06682 C9.72886 1.63835 9.96849 0.480305 10.2644 0.480305 Z" fill="#1e1b1e"/><path transform="matrix(1 0 0 1 -29.881 33.635)" d="M3.94495 0.00717115 C3.35137 0.00717115 2.86643 0.492117 2.86643 1.08569 C2.86643 1.67927 3.35137 2.16422 3.94495 2.16422 L5.02369 2.16422 L5.02369 1.08569 C5.02369 0.492117 4.54591 0.00717115 3.94495 0.00717115 Z M0 6.84049 C0 7.43407 0.484945 7.91902 1.07852 7.91902 C1.6721 7.91902 2.15704 7.43407 2.15704 6.84049 L2.15704 5.76197 L1.07852 5.76197 C0.477774 5.76197 0 6.24691 0 6.84049 Z M2.8736 6.84049 L2.8736 9.72147 C2.8736 10.3151 3.35876 10.8 3.95234 10.8 C4.54591 10.8 5.03086 10.3151 5.03086 9.72147 L5.03086 6.84049 C5.03086 6.24691 4.54591 5.76197 3.95234 5.76197 C3.35137 5.76197 2.8736 6.24691 2.8736 6.84049 Z M6.81876 10.8 C7.41234 10.8 7.89729 10.3151 7.89729 9.72147 C7.89729 9.1279 7.41234 8.64295 6.81876 8.64295 L5.74024 8.64295 L5.74024 9.72147 C5.74024 10.3151 6.22518 10.8 6.81876 10.8 Z M9.69258 7.91902 C10.2862 7.91902 10.7711 7.43407 10.7711 6.84049 C10.7711 6.24691 10.2862 5.76197 9.69258 5.76197 L6.81876 5.76197 C6.22518 5.76197 5.74024 6.24691 5.74024 6.84049 C5.74024 7.43407 6.22518 7.91902 6.81876 7.91902 L9.69258 7.91902 Z M10.7711 3.95951 C10.7711 3.36593 10.2862 2.88098 9.69258 2.88098 C9.099 2.88098 8.61384 3.36593 8.61384 3.95951 L8.61384 5.03803 L9.69258 5.03803 C10.2862 5.04541 10.7711 4.56026 10.7711 3.95951 Z M7.89729 3.95951 L7.89729 1.07852 C7.89729 0.484945 7.41234 0 6.81876 0 C6.22518 0 5.74024 0.484945 5.74024 1.07852 L5.74024 3.95951 C5.74024 4.55308 6.22518 5.03803 6.81876 5.03803 C7.41951 5.04541 7.89729 4.56026 7.89729 3.95951 Z M3.94495 2.88098 L1.07852 2.88098 C0.484945 2.88098 0 3.36593 0 3.95951 C0 4.55308 0.484945 5.03803 1.07852 5.03803 L3.95234 5.03803 C4.54591 5.03803 5.03086 4.55308 5.03086 3.95951 C5.02369 3.36593 4.54591 2.88098 3.94495 2.88098 Z" fill="#e01e5a"/><path transform="matrix(1 0 0 1 -29.979 21.2)" d="M10.7999 0.33066 L9.09195 8.94282 C9.09195 8.94282 8.85295 9.53998 8.19609 9.25331 L4.23638 6.22278 C4.76857 5.74416 8.89746 2.0325 9.07781 1.86418 C9.35688 1.60367 9.18392 1.44863 8.85928 1.64564 L2.76087 5.51825 L0.408073 4.72617 C0.408073 4.72617 0.0378773 4.59497 0.00201796 4.30831 C-0.0338414 4.02164 0.420095 3.86639 0.420095 3.86639 L10.0116 0.103691 C10.0116 0.103691 10.7999 -0.242668 10.7999 0.33066 Z" fill="#23b7ec"/></svg>
          </div>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "32px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#0f172a" }}>$450</p>
        </div>
      </div>
      <div style={{ position: "absolute", left: "385.14px", top: "104px", width: "90.29px", height: "36px", borderRadius: "8px", background: "#f4f4f5", boxShadow: "inset 0 0 0 1px rgba(233, 233, 236, 0.8)" }}>
        <p style={{ position: "absolute", left: "8px", top: "10px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "31px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#666d80" }}>1 May</p>
      </div>
      <div style={{ position: "absolute", left: "481.43px", top: "104px", width: "90.29px", height: "36px", borderRadius: "8px", background: "linear-gradient(180deg, rgba(37, 99, 235, 0.36) 0%, rgba(37, 99, 235, 0.44) 100%), linear-gradient(#ffffff, #ffffff)", boxShadow: "inset 0 0 0 1px rgba(30, 79, 188, 0.19), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.35), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.04)" }}>
        <p style={{ position: "absolute", left: "8px", top: "10px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "8px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#0f172a" }}>2</p>
        <div style={{ position: "absolute", left: "31.29px", top: "9px", width: "53px", height: "18px", display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "18px", height: "18px", flexShrink: 0, borderRadius: "4.5px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e7e7e7", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "10.8px", height: "10.8px", flexShrink: 0, position: "relative" }}>
              <div style={{ position: "absolute", left: "-0.4px", top: "-0.4px", width: "10.8px", height: "10.8px", background: "url('https://ingotui.com/library-img/2241eb9e90bd7762609a0b334568806d0ddacb36.png') center / cover no-repeat" }} />
            </div>
          </div>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "31px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#0f172a" }}>$530</p>
        </div>
      </div>
      <div style={{ position: "absolute", left: "577.71px", top: "104px", width: "90.29px", height: "36px", borderRadius: "8px", background: "#f4f4f5", boxShadow: "inset 0 0 0 1px rgba(233, 233, 236, 0.8)" }}>
        <p style={{ position: "absolute", left: "8px", top: "10px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "8px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#666d80" }}>3</p>
      </div>
      <div style={{ position: "absolute", left: "0px", top: "145px", width: "90.29px", height: "36px", borderRadius: "8px", background: "#f4f4f5", boxShadow: "inset 0 0 0 1px rgba(233, 233, 236, 0.8)" }}>
        <p style={{ position: "absolute", left: "8px", top: "10px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "8px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#666d80" }}>4</p>
      </div>
      <div style={{ position: "absolute", left: "96.29px", top: "145px", width: "90.29px", height: "36px", borderRadius: "8px", background: "#f4f4f5", boxShadow: "inset 0 0 0 1px rgba(233, 233, 236, 0.8)" }}>
        <p style={{ position: "absolute", left: "8px", top: "10px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "8px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#666d80" }}>5</p>
      </div>
      <div style={{ position: "absolute", left: "192.57px", top: "145px", width: "90.29px", height: "36px", borderRadius: "8px", background: "linear-gradient(180deg, rgba(37, 99, 235, 0.36) 0%, rgba(37, 99, 235, 0.44) 100%), linear-gradient(#ffffff, #ffffff)", boxShadow: "inset 0 0 0 1px rgba(30, 79, 188, 0.19), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.35), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.04)" }}>
        <p style={{ position: "absolute", left: "8px", top: "10px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "8px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#0f172a" }}>6</p>
        <div style={{ position: "absolute", left: "31.29px", top: "9px", width: "53px", height: "18px", display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "18px", height: "18px", flexShrink: 0, borderRadius: "4.5px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e7e7e7", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <svg width={10.8} height={10.8} viewBox="0 0 24 24" style={{ width: "10.8px", height: "10.8px", flexShrink: 0, color: "#1f1f21", display: "block" }}><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" fill="currentColor" /></svg>
          </div>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "31px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#0f172a" }}>$840</p>
        </div>
      </div>
      <div style={{ position: "absolute", left: "288.86px", top: "145px", width: "90.29px", height: "36px", borderRadius: "8px", background: "#f4f4f5", boxShadow: "inset 0 0 0 1px rgba(233, 233, 236, 0.8)" }}>
        <p style={{ position: "absolute", left: "8px", top: "10px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "7px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#666d80" }}>7</p>
      </div>
      <div style={{ position: "absolute", left: "385.14px", top: "145px", width: "90.29px", height: "36px", borderRadius: "8px", background: "#f4f4f5", boxShadow: "inset 0 0 0 1px rgba(233, 233, 236, 0.8)" }}>
        <p style={{ position: "absolute", left: "8px", top: "10px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "8px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#666d80" }}>8</p>
      </div>
      <div style={{ position: "absolute", left: "481.43px", top: "145px", width: "90.29px", height: "36px", borderRadius: "8px", background: "#f4f4f5", boxShadow: "inset 0 0 0 1px rgba(233, 233, 236, 0.8)" }}>
        <p style={{ position: "absolute", left: "8px", top: "10px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "8px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#666d80" }}>9</p>
      </div>
      <div style={{ position: "absolute", left: "577.71px", top: "145px", width: "90.29px", height: "36px", borderRadius: "8px", background: "#f4f4f5", boxShadow: "inset 0 0 0 1px rgba(233, 233, 236, 0.8)" }}>
        <p style={{ position: "absolute", left: "8px", top: "10px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "13px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#666d80" }}>10</p>
      </div>
      <div style={{ position: "absolute", left: "0px", top: "186px", width: "90.29px", height: "36px", borderRadius: "8px", background: "#f4f4f5", boxShadow: "inset 0 0 0 1px rgba(233, 233, 236, 0.8)" }}>
        <p style={{ position: "absolute", left: "8px", top: "10px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "9px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#666d80" }}>11</p>
      </div>
      <div style={{ position: "absolute", left: "96.29px", top: "186px", width: "90.29px", height: "36px", borderRadius: "8px", background: "linear-gradient(180deg, rgba(37, 99, 235, 0.36) 0%, rgba(37, 99, 235, 0.44) 100%), linear-gradient(#ffffff, #ffffff)", boxShadow: "inset 0 0 0 1px rgba(30, 79, 188, 0.19), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.35), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.04)" }}>
        <p style={{ position: "absolute", left: "8px", top: "10px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "13px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#0f172a" }}>12</p>
        <div style={{ position: "absolute", left: "31.29px", top: "9px", width: "53px", height: "18px", display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "18px", height: "18px", flexShrink: 0, borderRadius: "4.5px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e7e7e7", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "10.8px", height: "10.8px", flexShrink: 0, borderRadius: "3.02px", background: "#ff7a59", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "5px", lineHeight: "8px", fontFamily: "'Geist'", fontSize: "6px", fontWeight: 600, color: "#ffffff" }}>H</p>
            </div>
          </div>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "31px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#0f172a" }}>$890</p>
        </div>
      </div>
      <div style={{ position: "absolute", left: "192.57px", top: "186px", width: "90.29px", height: "36px", borderRadius: "8px", background: "#f4f4f5", boxShadow: "inset 0 0 0 1px rgba(233, 233, 236, 0.8)" }}>
        <p style={{ position: "absolute", left: "8px", top: "10px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "12px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#666d80" }}>13</p>
      </div>
      <div style={{ position: "absolute", left: "288.86px", top: "186px", width: "90.29px", height: "36px", borderRadius: "8px", background: "#f4f4f5", boxShadow: "inset 0 0 0 1px rgba(233, 233, 236, 0.8)" }}>
        <p style={{ position: "absolute", left: "8px", top: "10px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "12px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#666d80" }}>14</p>
      </div>
      <div style={{ position: "absolute", left: "385.14px", top: "186px", width: "90.29px", height: "36px", borderRadius: "8px", background: "#f4f4f5", boxShadow: "inset 0 0 0 1px rgba(233, 233, 236, 0.8)" }}>
        <p style={{ position: "absolute", left: "8px", top: "10px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "13px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#666d80" }}>15</p>
      </div>
      <div style={{ position: "absolute", left: "481.43px", top: "186px", width: "90.29px", height: "36px", borderRadius: "8px", background: "#f4f4f5", boxShadow: "inset 0 0 0 1px rgba(233, 233, 236, 0.8)" }}>
        <p style={{ position: "absolute", left: "8px", top: "10px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "12px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#666d80" }}>16</p>
      </div>
      <div style={{ position: "absolute", left: "577.71px", top: "186px", width: "90.29px", height: "36px", borderRadius: "8px", background: "#f4f4f5", boxShadow: "inset 0 0 0 1px rgba(233, 233, 236, 0.8)" }}>
        <p style={{ position: "absolute", left: "8px", top: "10px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "11px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#666d80" }}>17</p>
      </div>
      <div style={{ position: "absolute", left: "393.29px", top: "39px", width: "74px", height: "20px", borderRadius: "6px", background: "#1f1f22", boxShadow: "0px 2px 6px 0px rgba(0, 0, 0, 0.12)", display: "flex", flexDirection: "row", padding: "3px 7px 3px 7px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "60px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "11px", fontWeight: 500, color: "#ffffff" }}>6 seats idle</p>
      </div>
      <svg style={{ position: "absolute", left: "426.29px", top: "58.5px", width: "8px", height: "4px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="8" height="4" viewBox="0 0 8 4" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0 L8 0 L4 4 L0 0 Z" fill="#1f1f22"/></svg>
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
